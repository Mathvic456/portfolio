// src/components/ui/KeyPressDisplay.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const KeyPressDisplay = () => {
  const [keysPressed, setKeysPressed] = useState([]);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.length === 1 || e.key === 'Backspace') {
        setKeysPressed(prev => {
          if (e.key === 'Backspace') {
            return prev.slice(0, -1);
          }
          return [...prev, e.key].slice(-20); // Keep last 20 characters
        });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (keysPressed.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-4 left-4 bg-black/50 text-white text-xs p-2 rounded pointer-events-none"
    >
      <div className="font-mono">
        {keysPressed.join('')}
      </div>
    </motion.div>
  );
};

export default KeyPressDisplay;