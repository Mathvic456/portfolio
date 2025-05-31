import { motion } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center flex-col gap-4"
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Cookie className="size-16 text-yellow-400" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-white text-lg"
      >
        Baking the perfect portfolio... almost there!
      </motion.p>
    </motion.div>
  )
}