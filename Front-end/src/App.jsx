import React from 'react';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import Navbar from './layouts/navbar/Navbar';
import Hero from './pages/Hero';// <-- Import Hero
import About from './pages/About';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
        <Navbar />
        <Hero /> {/* <-- Add Hero here */}
        <About />
      </div>
    </ThemeProvider>
  );
};

export default App;
