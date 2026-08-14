"use client"
import { motion, useInView, useReducedMotion } from "motion/react"
import { useRef } from "react"

const DURATION_S = 0.3
const MS = 1000

const EASE = [0.18, 1, 0.32, 1]

export default function BottomUpLetters({
  children,
  className = "",
  delay = 0,
  stagger = 85,
  triggerOnView = true
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const shouldReduceMotion = useReducedMotion()
  const play = (!triggerOnView || inView) && !shouldReduceMotion
  const characters = Array.from(children)

  return (
    <span aria-label={children} className={className} ref={ref}>
      {characters.map((char, index) => (
        <motion.span
          animate={play ? { opacity: 1, y: 0 } : undefined}
          aria-hidden="true"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 46 }}
          key={index}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  delay: delay / MS + (index * stagger) / MS,
                  duration: DURATION_S,
                  ease: EASE
                }
          }
        >
          {char === " " ? " " : String(char)}
        </motion.span>
      ))}
    </span>
  )
}
