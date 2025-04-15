import React from 'react';
import { ThemeProvider } from './context/ThemeContext/ThemeContext';
import Navbar from './layouts/navbar/Navbar';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText transition-colors duration-300">
        <Navbar />
      </div>
    </ThemeProvider>
  );
};

export default App;
