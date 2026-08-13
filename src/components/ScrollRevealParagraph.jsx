import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function ScrollRevealParagraph({
  paragraph,
  className = "",
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start 0.45", "end 0.25"],
    target: container,
  });
  
  const words = paragraph.trim().split(/\s+/);

  return (
    <p className={`scroll-reveal-p ${className}`} ref={container}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`word-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const shouldReduceMotion = useReducedMotion();
  const opacity = useTransform(
    progress,
    range,
    shouldReduceMotion ? [1, 1] : [0, 1]
  );

  return (
    <>
      <span className="scroll-reveal-word">
        {shouldReduceMotion ? null : (
          <span className="word-bg">{children}</span>
        )}
        <motion.span
          className="word-fg"
          style={{ opacity }}
        >
          {children}
        </motion.span>
      </span>
      {" "}
    </>
  );
};