// src/App.jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EasterEgg from './components/ui/EasterEgg';
import useEasterEgg from './hooks/useEasterEgg';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const { showEgg, setShowEgg } = useEasterEgg('victor');
  
  return (
    <Router>
      <AnimatePresence mode="wait">
        {/* Main App Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Easter Egg Overlay */}
        <EasterEgg 
          show={showEgg} 
          onClose={() => setShowEgg(false)} 
        />
      </AnimatePresence>
    </Router>
  );
}

export default App;