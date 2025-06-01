import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '#hero' },
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Services', path: '#services' },
  { name: 'Contact', path: '#contact' },
  { name: 'Projects', path: '#portfolio' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      // Close mobile menu if open
      setIsOpen(false)
      
      // Get the target element
      const targetId = path.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        // Scroll to the target element smoothly
        targetElement.scrollIntoView({
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/90 backdrop-blur-lg z-40 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo/Brand */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Victor</span>
              <span className="text-xs text-gray-500">Frontend Developer</span>
            </div>
          </Link>
        </motion.div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={item.path}
                className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium relative group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.path)
                }}
              >
                {item.name}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 w-0 group-hover:w-4/5 transition-all duration-300"></span>
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-50 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.path}
                    className="flex items-center justify-between py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium border-b border-gray-100 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.path)
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={18} className="text-gray-400" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}