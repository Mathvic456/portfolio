import { motion } from 'framer-motion'
import { AlertTriangle, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center text-center p-4"
    >
      <div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          <AlertTriangle className="size-20 text-yellow-500 mx-auto mb-4" />
        </motion.div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for has gone on vacation.
          <br />
          Maybe it's at the beach sipping margaritas?
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/">
            <Button icon="home">
              Take Me Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}