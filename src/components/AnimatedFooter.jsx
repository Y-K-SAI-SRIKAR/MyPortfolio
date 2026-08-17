import * as React from "react"
import { useEffect, useMemo, useRef } from "react"
import gsap from "gsap"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

const DEFAULT_ASCII_CHARS = "........:::=+xX#0369"

const HIGHLIGHT_LIFETIME = 300 // ms a hovered cell stays lit
const CLUSTER_SIZE = 10 // max cells a hover ripple spreads across
const PARALLAX_EASE = 0.05

/** Build the ASCII cell grid for one image by sampling its brightness. */
function buildHandCells(image, columns, asciiChars) {
  const rows = Math.max(
    1,
    Math.round(columns / (image.naturalWidth / image.naturalHeight || 1))
  )

  const sampler = document.createElement("canvas")
  sampler.width = columns
  sampler.height = rows
  const sampleCtx = sampler.getContext("2d")
  const cells = new Map()
  if (!sampleCtx) return { rows, cells }

  sampleCtx.drawImage(image, 0, 0, columns, rows)
  const pixels = sampleCtx.getImageData(0, 0, columns, rows).data
  const backgroundCharIndex = asciiChars.lastIndexOf(".")

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const offset = (row * columns + col) * 4
      const brightness =
        (pixels[offset] * 0.299 +
          pixels[offset + 1] * 0.587 +
          pixels[offset + 2] * 0.114) /
        255
      const charIndex = Math.min(
        asciiChars.length - 1,
        Math.floor((1 - brightness) * asciiChars.length)
      )
      if (charIndex <= backgroundCharIndex) continue

      cells.set(`${col},${row}`, {
        col,
        row,
        char: asciiChars[charIndex],
        highlightEndTime: 0
      })
    }
  }

  return { rows, cells }
}

/** Light up a wandering cluster of cells starting from `startCell`. */
function highlightCluster(cells, startCell) {
  const now = Date.now()
  startCell.highlightEndTime = now + HIGHLIGHT_LIFETIME

  const steps = Math.floor(Math.random() * CLUSTER_SIZE) + 1
  const litCells = [startCell]
  let current = startCell

  for (let step = 0; step < steps; step++) {
    const neighbours = []
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (dx === 0 && dy === 0) continue
        const neighbour = cells.get(`${current.col + dx},${current.row + dy}`)
        if (neighbour && !litCells.includes(neighbour))
          neighbours.push(neighbour)
      }
    }
    if (neighbours.length === 0) break

    const next = neighbours[Math.floor(Math.random() * neighbours.length)]
    next.highlightEndTime = now + HIGHLIGHT_LIFETIME + step * 10
    litCells.push(next)
    current = next
  }
}

/** Nearest scrollable ancestor — used as the reveal's IntersectionObserver root. */
function getScrollParent(node) {
  let el = node?.parentElement ?? null
  while (el) {
    const overflowY = getComputedStyle(el).overflowY
    if (
      overflowY === "auto" ||
      overflowY === "scroll" ||
      overflowY === "overlay"
    )
      return el
    el = el.parentElement
  }
  return null
}

export function AnimatedFooter({
  headingLines = ["VengeanceUI"],
  leftImage = "/animated-footer/hand-left.jpg",
  rightImage = "/animated-footer/hand-right.jpg",
  background,
  textColor,
  charColor,
  hoverColor,
  hoverCharColor,
  asciiChars = DEFAULT_ASCII_CHARS,
  columns = 80,
  cellSize = 20,
  fontSize = 18,
  parallaxStrength = 20,
  hoverRadius = 8,
  revealOnScroll = true,
  revealed,
  className
}) {
  const rootRef = useRef(null)
  const leftWrapRef = useRef(null)
  const rightWrapRef = useRef(null)
  const leftCanvasRef = useRef(null)
  const rightCanvasRef = useRef(null)

  // Reveal animations, published by the main effect so the controlled-`revealed`
  // effect below can play them without rebuilding the ASCII scene.
  const animateInRef = useRef(() => {})
  const animateOutRef = useRef(() => {})

  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const cc = charColor ?? (isDark ? "#803500" : "#e6b093")
  const hc = hoverColor ?? "#ff6a00"
  const hcc = hoverCharColor ?? (isDark ? "#0f0f0f" : "#ffffff")

  // Live-tunable values read inside the animation loop, so tweaking a color or
  // the parallax strength never tears down and rebuilds the ASCII scene.
  const liveRef = useRef({
    charColor: cc,
    hoverColor: hc,
    hoverCharColor: hcc,
    parallaxStrength,
    hoverRadius
  })
  useEffect(() => {
    liveRef.current = {
      charColor: cc,
      hoverColor: hc,
      hoverCharColor: hcc,
      parallaxStrength,
      hoverRadius
    }
  }, [cc, hc, hcc, parallaxStrength, hoverRadius])

  // A signature of the structural inputs — the scene rebuilds only when one of
  // these changes (images, grid resolution, content, reveal mode).
  const sig = useMemo(
    () =>
      JSON.stringify({
        leftImage,
        rightImage,
        columns,
        cellSize,
        fontSize,
        asciiChars,
        revealOnScroll,
        headingLines
      }),
    [
      leftImage,
      rightImage,
      columns,
      cellSize,
      fontSize,
      asciiChars,
      revealOnScroll,
      headingLines
    ]
  )

  useEffect(() => {
    const root = rootRef.current
    const leftWrap = leftWrapRef.current
    const rightWrap = rightWrapRef.current
    if (!root || !leftWrap || !rightWrap) return

    const hands = []
    const wrappers = [leftWrap, rightWrap]

    // ── ASCII hands ──────────────────────────────────────────────────────
    const setupHand = (image, canvas, direction) => {
      const { rows, cells } = buildHandCells(image, columns, asciiChars)
      if (cells.size === 0) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = columns * cellSize * dpr
      canvas.height = rows * cellSize * dpr

      const ctx = canvas.getContext("2d")
      if (!ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${fontSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "alphabetic"

      const metrics = ctx.measureText("X")
      const glyphHeight =
        metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
      const baselineOffset =
        cellSize / 2 + glyphHeight / 2 - metrics.actualBoundingBoxDescent

      hands.push({
        canvas,
        ctx,
        cells,
        cellList: [...cells.values()],
        rows,
        columns,
        cellSize,
        baselineOffset,
        direction
      })
    }

    const loadHand = (src, canvas, direction) => {
      if (!src) return
      const image = new Image()
      image.crossOrigin = "anonymous"
      let initialized = false
      const init = () => {
        if (initialized) return
        initialized = true
        setupHand(image, canvas, direction)
      }
      image.onload = init
      image.src = src
      if (image.complete && image.naturalWidth) init()
    }
    loadHand(leftImage, leftCanvasRef.current, 1)
    loadHand(rightImage, rightCanvasRef.current, -1)

    const renderHand = (hand, now) => {
      const {
        ctx,
        cellList,
        cellSize: cs,
        baselineOffset,
        columns: cols,
        rows
      } = hand
      const {
        charColor: cc,
        hoverColor: hc,
        hoverCharColor: hcc
      } = liveRef.current
      ctx.clearRect(0, 0, cols * cs, rows * cs)

      for (const cell of cellList) {
        const x = cell.col * cs
        const y = cell.row * cs
        const isHighlighted = cell.highlightEndTime > now

        if (isHighlighted) {
          ctx.fillStyle = hc
          ctx.fillRect(x, y, cs, cs)
        }
        ctx.fillStyle = isHighlighted ? hcc : cc
        ctx.fillText(cell.char, x + cs / 2, y + baselineOffset)
      }
    }

    // ── Pointer: hover highlight + parallax target ───────────────────────
    const pointer = { x: 0, y: 0 }
    const drift = { x: 0, y: 0 }
    // Reveal "curtain": hands start pushed off the edges and slide to 0.
    const curtain = { offset: revealOnScroll ? 125 : 0 }

    const hoverHand = (hand, clientX, clientY) => {
      const rect = hand.canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      const mouseCol = ((clientX - rect.left) / rect.width) * hand.columns
      const mouseRow = ((clientY - rect.top) / rect.height) * hand.rows

      let closest = null
      let closestDist = Infinity
      for (const cell of hand.cellList) {
        const dx = mouseCol - cell.col
        const dy = mouseRow - cell.row
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < closestDist) {
          closestDist = dist
          closest = cell
        }
      }
      if (closest && closestDist <= liveRef.current.hoverRadius) {
        highlightCluster(hand.cells, closest)
      }
    }

    const onMouseMove = event => {
      const strength = liveRef.current.parallaxStrength
      const rect = root.getBoundingClientRect()
      const w = rect.width || 1
      const h = rect.height || 1
      pointer.x = ((event.clientX - rect.left) / w - 0.5) * strength * 2
      pointer.y = ((event.clientY - rect.top) / h - 0.5) * strength * 2
      for (const hand of hands) hoverHand(hand, event.clientX, event.clientY)
    }
    window.addEventListener("mousemove", onMouseMove)

    // ── Unified render loop: ASCII + parallax + reveal curtain ───────────
    let rafId = 0
    const frame = () => {
      const now = Date.now()
      for (const hand of hands) renderHand(hand, now)

      drift.x += (pointer.x - drift.x) * PARALLAX_EASE
      drift.y += (pointer.y - drift.y) * PARALLAX_EASE
      const strength = liveRef.current.parallaxStrength
      const scale = 1 + (strength * 2) / 200

      wrappers.forEach((wrapper, i) => {
        const dir = i === 0 ? 1 : -1
        const revealX = i === 0 ? -curtain.offset : curtain.offset
        const x = drift.x * dir || 0
        const y = -drift.y || 0
        // Apply reveal via translateX, then apply parallax via translate, avoiding calc() mixed-unit bugs
        wrapper.style.transform = `translateX(${revealX}%) translate(${x}px, ${y}px) scale(${scale})`
      })

      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    // ── Reveal (chars + curtain) ─────────────────────────
    const chars = gsap.utils.toArray(root.querySelectorAll("[data-af-char]"))

    const animateIn = () => {
      gsap.to(curtain, {
        offset: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: true
      })
      gsap.to(chars, {
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        stagger: { each: 0.04, from: "center" },
        overwrite: true
      })
    }

    const animateOut = () => {
      gsap.to(curtain, {
        offset: 125,
        duration: 0.4,
        ease: "power2.in",
        overwrite: true
      })
      gsap.to(chars, {
        yPercent: 125,
        duration: 0.4,
        ease: "power2.in",
        stagger: { each: 0.01, from: "center" },
        overwrite: true
      })
    }

    // Publish for the controlled-`revealed` effect.
    animateInRef.current = animateIn
    animateOutRef.current = animateOut

    const maskAll = () => {
      gsap.set(chars, { yPercent: 125 })
    }
    const showAll = () => {
      gsap.set(chars, { yPercent: 0 })
    }

    let observer = null

    if (revealed !== undefined) {
      // Controlled: the `revealed` effect below drives the reveal. Set the
      // initial state to match, and never attach the scroll observer.
      curtain.offset = revealed ? 0 : 125
      if (revealed) showAll()
      else maskAll()
    } else if (revealOnScroll) {
      // Start fully masked — nothing shows until the footer is scrolled into view.
      maskAll()

      // Drive the reveal purely from scroll position, relative to the nearest
      // scrollable ancestor (the page in real use, or the preview's scroll
      // container in the docs). Plays in when the footer crosses into view and
      // reverses when you scroll back up.
      let isRevealed = false
      observer = new IntersectionObserver(
        entries => {
          for (const entry of entries) {
            if (entry.isIntersecting && !isRevealed) {
              isRevealed = true
              animateIn()
            } else if (!entry.isIntersecting && isRevealed) {
              isRevealed = false
              animateOut()
            }
          }
        },
        { root: getScrollParent(root), threshold: 0.35 }
      )
      observer.observe(root)
    } else {
      showAll()
    }

    // ── Cleanup ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMouseMove)
      observer?.disconnect()
      gsap.killTweensOf([curtain, ...chars])
    }
    // Rebuild only when a structural input changes; live values flow via liveRef.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sig])

  // Controlled reveal: play in/out to match the `revealed` prop without
  // rebuilding the scene. Ignored entirely when `revealed` is undefined.
  useEffect(() => {
    if (revealed === undefined) return
    if (revealed) animateInRef.current()
    else animateOutRef.current()
  }, [revealed])

  // Whether the content starts masked on first paint (avoids a flash before the
  // effect runs): hidden unless it's meant to be shown immediately.
  const startsHidden = revealed !== undefined ? !revealed : revealOnScroll
  const offEdge = startsHidden ? 125 : 0

  return (
    <footer
      ref={rootRef}
      className={cn(
        "relative h-full w-full overflow-hidden",
        !background && "bg-white dark:bg-black",
        !textColor && "text-black dark:text-white",
        className
      )}
      style={{
        backgroundColor: background,
        color: textColor,
        containerType: "inline-size"
      }}
    >
      {/* ASCII hands */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
        <div
          ref={leftWrapRef}
          className="relative w-2/5 min-w-[200px] will-change-transform"
          style={{ transform: `translateX(-${offEdge}%)` }}
        >
          <canvas ref={leftCanvasRef} className="block h-auto w-full" />
        </div>
        <div
          ref={rightWrapRef}
          className="relative w-2/5 min-w-[200px] will-change-transform"
          style={{ transform: `translateX(${offEdge}%)` }}
        >
          <canvas ref={rightCanvasRef} className="block h-auto w-full" />
        </div>
      </div>

      {/* Display headings */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-4 p-8">
        {headingLines.map((word, wi) => (
          <h2
            key={`${word}-${wi}`}
            aria-label={word}
            className="overflow-hidden font-medium leading-none tracking-tight pb-[0.15em] -mb-[0.15em]"
            style={{ fontSize: "clamp(2rem, 8cqw, 6rem)" }}
          >
            {Array.from(word).map((ch, ci) => (
              <span
                key={ci}
                data-af-char
                aria-hidden="true"
                className="inline-block"
              >
                {ch === " " ? " " : ch}
              </span>
            ))}
          </h2>
        ))}
      </div>
    </footer>
  )
}

export default AnimatedFooter
