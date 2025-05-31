import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Button({ 
  children, 
  variant = 'primary',
  icon,
  className = '',
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
    ghost: 'hover:bg-gray-100 text-gray-600'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && (
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {icon === 'arrow' && <ArrowRight className="size-5" />}
        </motion.span>
      )}
    </motion.button>
  )
}