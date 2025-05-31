import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../ui/Button'
import FloatingEmoji from '../common/FloatingEmoji'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 -z-10"
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Hi, I'm <span className="text-blue-500">Victor</span>{" "}
              <FloatingEmoji emoji="👋" />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-gray-600"
            >
              Frontend Developer | Professional Idea Generator |{" "}
              <span className="text-yellow-500">Sometimes Functional Adult</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <Button 
                icon="arrow"
                as="a" 
                href="#contact"
              >
                Let's Talk
              </Button>
              <Button 
                variant="outline"
                as="a" 
                href="#experience"
              >
                My Work
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 mt-8"
            >
              <a href="https://github.com/victor" className="text-gray-500 hover:text-gray-800 transition">
                <Github className="size-6" />
              </a>
              <a href="https://linkedin.com/in/victor" className="text-gray-500 hover:text-blue-600 transition">
                <Linkedin className="size-6" />
              </a>
              <a href="mailto:victor@example.com" className="text-gray-500 hover:text-red-500 transition">
                <Mail className="size-6" />
              </a>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 relative">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 text-6xl"
            >
              😅
            </motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-0 right-0 text-6xl"
            >
              💡
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-blue-500/10 rounded-2xl p-4 aspect-square flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full h-full flex items-center justify-center">
                  <p className="text-center text-gray-600">
                    "I turn coffee into code and ideas into reality."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}