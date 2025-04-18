import React from 'react';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import Navbar from './layouts/navbar/Navbar';
import Hero from './pages/Hero';// <-- Import Hero
import About from './pages/About';
import Features from './components/common/Features';
import Modes from './components/common/Modes';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
        <Navbar />
        <Hero /> {/* <-- Add Hero here */}
        <About />
        <Features />
        <Modes />
      </div>
    </ThemeProvider>
  );
};

export default App;
