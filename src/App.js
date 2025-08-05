// src/App.js
import './App.css';
import { useState, useEffect } from 'react';
import CanvasWrapper from './components/CanvasWrapper';
import OverlayText from './ui/OverlayText';
import CommandMenu from './ui/CommandMenu';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './pages/Blog';
import About from './pages/About';
import Loader from './components/Loader';
import MobileWarning from './components/MobileWarning';


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showOverlayText, setShowOverlayText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'Enter') setMenuOpen(true);
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Loader runs for 3 seconds, then text animation starts
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowLoader(false);
  //     setShowOverlayText(true);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
      <MobileWarning />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <CanvasWrapper />
              {showLoader && <Loader onFinish={() => {
                setShowLoader(false);
                setShowOverlayText(true);
              }} />}
              {showOverlayText && <OverlayText />}
              <CommandMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
