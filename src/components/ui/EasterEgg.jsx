// src/components/ui/EasterEgg.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { Laugh, X, Cookie, Sparkles } from 'lucide-react';

const EasterEgg = ({ show, onClose }) => {
  const jokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the developer go broke? Because he used up all his cache.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
    "Why did the React component feel lonely? Because it didn't have state to keep it company."
  ];

  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 max-w-md w-full relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-20 -left-20 opacity-20"
            >
              <Sparkles className="size-40 text-yellow-300" />
            </motion.div>
            
            <motion.div 
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-20 -right-20 opacity-20"
            >
              <Sparkles className="size-40 text-pink-300" />
            </motion.div>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition"
              aria-label="Close Easter Egg"
            >
              <X className="size-6" />
            </button>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                <Laugh className="size-16 text-yellow-300 mx-auto mb-4" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-2">
                Secret Developer Club Unlocked!
              </h3>
              
              <p className="text-white/90 mb-4">
                You typed the magic sequence! Here's your reward:
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/20"
              >
                <p className="text-white font-medium italic">
                  "{randomJoke}"
                </p>
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="inline-block"
              >
                <Cookie className="size-12 text-yellow-300 mx-auto" />
              </motion.div>
              
              <p className="text-white/70 text-sm mt-4">
                (This is a virtual cookie. You can't eat it, but you can enjoy the thought.)
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;