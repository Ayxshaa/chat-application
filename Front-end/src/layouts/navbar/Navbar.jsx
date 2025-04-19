import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const navItems = ['Home', 'About', 'Services', 'FAQs'];

  return (
    <header className="w-full z-50 px-6 py-3 flex justify-center font-clash]">
      <div className="w-full max-w-7xl flex justify-between items-center rounded-full bg-[var(--color-navbar-bg)] backdrop-blur-md dark:border-gray-600 px-6 py-2 shadow-lg">
        
        {/* Left: Logo */}
        <div className="font-bold text-lg tracking-wide select-none">
          <span className="text-[var(--color-text)]">A</span>
          <span className="bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text text-transparent mr-2">4</span>
          <span className="text-[var(--color-text)]">Zone</span>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-[var(--color-text)]">
          {navItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[var(--color-primary)] transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Contact + Toggle */}
        <div className="flex items-center gap-4">
          {/* Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--color-border)] hover:bg-[var(--color-hover)] transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="rounded-full px-4 py-2 border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition "
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

