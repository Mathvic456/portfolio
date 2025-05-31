// src/hooks/useEasterEgg.js
import { useState, useEffect } from 'react';

const useEasterEgg = (sequence = 'victor') => {
  const [showEgg, setShowEgg] = useState(false);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore key presses when Easter egg is already visible
      if (showEgg) return;

      // Update input with the last N key presses (N = sequence length)
      setInput(prev => [...prev.slice(-(sequence.length - 1)), e.key].join(''));

      // Check if input matches the sequence
      if (input === sequence) {
        setShowEgg(true);
        setTimeout(() => setShowEgg(false), 8000); // Hide after 8 seconds
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input, sequence, showEgg]);

  return { showEgg, setShowEgg };
};

export default useEasterEgg;