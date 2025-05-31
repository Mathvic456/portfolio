import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-blue-500">VVM</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
              v2.0
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link 
                to={item.path}
                className="text-gray-600 hover:text-blue-500 transition font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="container mx-auto px-4 pb-4 flex flex-col gap-3">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="py-2 text-gray-600 hover:text-blue-500 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}