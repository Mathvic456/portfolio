import { motion } from 'framer-motion'

export default function FloatingEmoji({ emoji, className }) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {emoji}
    </motion.span>
  )
}