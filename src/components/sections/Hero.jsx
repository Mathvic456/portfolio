import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Github, Linkedin, Mail, X, Copy, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import FloatingEmoji from '../common/FloatingEmoji'

export default function Hero() {
  const [showMoneyModal, setShowMoneyModal] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4" id='hero'>
      {/* Background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />
        <motion.div
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-3xl"
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-50 rounded-full border border-yellow-100">
                <DollarSign className="size-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">Actively seeking employment</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                My name is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Victor</span>,
                <br />
                <span className="text-3xl md:text-4xl text-gray-600 font-normal">which is Latin for "winner"</span>
                <FloatingEmoji emoji="👑" size={50} />
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                I build things for the web and <span className="font-semibold text-blue-600">your company</span>. 
                <br />
                <span className="text-lg text-gray-500 italic">(Please hire me - I promise I'm good at this and really enjoy paying rent)</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button 
                onClick={() => setShowMoneyModal(true)}
                className="px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium flex items-center gap-2"
              >
                Wanna give me free money? <ArrowRight className="size-5" />
              </button>
              <a 
                href="#projects"
                className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-500 text-gray-700 rounded-lg font-medium"
              >
                See Why You Should give me your project
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <p className="text-gray-500 font-medium">Ways to regret contacting me:</p>
             <div className="flex gap-5">
  {/* GitHub */}
  <a 
    href="https://github.com/Mathvic456" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
    className="text-gray-500 hover:text-gray-800 transition-colors duration-300"
  >
    <Github className="size-6 hover:scale-110 transition-transform" />
  </a>

  {/* Instagram */}
  <a 
    href="https://www.instagram.com/blackboyy_matthew/" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram profile"
    className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
  >
    <svg className="size-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </a>

  {/* Snapchat */}
  <a 
    href="https://www.snapchat.com/add/blackboy6365?share_id=5rFFbqkPZig&locale=en-GB" 
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Snapchat profile"
    className="text-gray-500 hover:text-yellow-400 transition-colors duration-300"
  >
    <svg className="size-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.015.659-.12.853-.255.389-.27 1.605-1.425 2.159-1.905.135-.12.329-.12.424-.075.09.06.105.18.075.285-.06.195-.42.735-.659 1.095-.254.39-.405.6-.36.765.059.195.39.405.81.555.39.135 1.095.36 1.125.555.015.12-.09.24-.299.24h-3.48c-.119 1.125-.404 2.295-.853 3.219-.659 1.365-1.785 2.25-3.044 2.25-.149 0-.313-.015-.478-.045-.119-.015-.254-.045-.36-.045-.149 0-.314.03-.404.12-.09.074-.104.209-.059.314.27.72.734 1.395 1.409 1.785.42.24.93.405 1.47.48.18.03.345.06.51.06.135 0 .255-.015.36-.045a.902.902 0 0 1 .314-.045c.135 0 .27.015.375.075.36.164.645.404.81.689.21.36.24.81.12 1.215-.12.405-.39.765-.81.945-.27.12-.555.165-.853.165-.479 0-.958-.12-1.409-.27-.404-.135-.809-.27-1.289-.27-.465 0-.853.135-1.244.27-.465.149-.958.27-1.444.27-.27 0-.555-.045-.808-.15-.405-.135-.72-.405-.853-.81-.135-.405-.105-.855.12-1.215.149-.27.42-.51.779-.675.12-.06.256-.09.391-.09.09 0 .195.015.285.045.149.045.299.06.479.06.149 0 .314-.015.464-.045.555-.09 1.065-.255 1.5-.495.659-.36 1.125-1.035 1.38-1.77.03-.104.015-.239-.074-.313-.09-.09-.255-.12-.404-.12-.12 0-.24.03-.36.045-.18.03-.345.045-.509.045-1.245 0-2.37-.885-3.029-2.25-.465-.93-.734-2.1-.854-3.225H2.561c-.209 0-.314-.12-.299-.24.045-.195.734-.42 1.125-.555.42-.15.765-.36.825-.555.044-.165-.106-.375-.36-.765-.24-.36-.6-.9-.66-1.095-.03-.105-.015-.225.075-.285.09-.045.284-.045.42.075.555.48 1.77 1.635 2.159 1.905.209.135.554.24.853.255.195 0 .322-.045.4-.09-.007-.165-.017-.33-.029-.51l-.003-.06c-.104-1.628-.23-3.644.299-4.847C7.333 1.069 10.69.793 11.68.793h.526z"/>
    </svg>
  </a>

  {/* Gmail */}
  <a 
    href="mailto:vmatthew727@gmail.com" 
    aria-label="Send email"
    className="text-gray-500 hover:text-red-500 transition-colors duration-300"
  >
    <svg className="size-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
    </svg>
  </a>

  
</div>
            </motion.div>
          </div>
          
          {/* Visual element */}
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100/50 to-purple-100/50 p-1 shadow-xl">
                <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                      <span className="text-sm font-medium text-blue-600">Why Hire Me?</span>
                    </div>
                    <p className="text-2xl font-medium text-gray-800">
                      "I'll make your competitors <span className="text-red-500">cry</span>"
                    </p>
                    <div className="text-gray-500 text-sm">
                      (Legally, this is a joke. But seriously, I'm pretty good.)
                    </div>
                    <div className="flex justify-center pt-4">
                      <div className="animate-bounce text-yellow-500 text-2xl">↓</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Subtle money emoji floating in background */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-5 -left-5 text-4xl opacity-70"
              >
                💰
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Money Modal */}
      <AnimatePresence>
        {showMoneyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowMoneyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-xl max-w-md w-full p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowMoneyModal(false)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>

              <div className="text-center mb-6">
                <DollarSign className="size-12 mx-auto bg-yellow-100 text-yellow-500 p-3 rounded-full mb-4" />
                <h3 className="text-2xl font-bold mb-2">Generous Benefactor</h3>
                <p className="text-gray-600">Thank you for your charitable contribution to my "not eating ramen every day" fund</p>
              </div>

              <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <label className="text-sm text-gray-500 block mb-1">Full Name</label>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>Victor Victor Matthew</span>
                    <button 
                      onClick={() => copyToClipboard('Victor Victorious')}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Copy className="size-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-1">Bank Name</label>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>Kuda Microfinance Bank </span>
                    <button 
                      onClick={() => copyToClipboard('Rich People Bank International')}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Copy className="size-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 block mb-1">Account Number</label>
                  <div className="flex items-center justify-between bg-white p-3 rounded border">
                    <span>2050928819</span>
                    <button 
                      onClick={() => copyToClipboard('1234 5678 9012 3456')}
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <Copy className="size-4" />
                    </button>
                  </div>
                </div>

                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-green-500 text-center mt-2"
                  >
                    Copied to clipboard!
                  </motion.div>
                )}
              </div>

              <div className="mt-6 text-center text-xs text-gray-400">
                <p>Disclaimer: This is a joke. But if you really want to send money, I won't stop you.</p>
                <p className="mt-1">(For actual hiring inquiries, please check my real contact info above ↑)</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}