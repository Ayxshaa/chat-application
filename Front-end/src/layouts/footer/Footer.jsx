import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext/ThemeContext"; // Adjust the import path as necessary

// Utility function to replace Next.js cn utility
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const navigation = {
  features: [
    { title: "URL Shortener", href: "#" },
    { title: "Link Checker", href: "#" },
    { title: "Link Rotator", href: "#" },
  ],
  product: [
    { name: "Blog", href: "#" },
    { name: "Brand", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  compare: [
    { name: "Bitly", href: "#" },
    { name: "Branch", href: "#" },
    { name: "ClickMeter", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Abuse", href: "#" },
  ],
};

const Footer = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation on mount
    setIsVisible(true);
  }, []);

  return (
    <footer className={`bg-opacity-80 backdrop-blur-sm transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 overflow-hidden py-8 md:rounded-t-2xl xl:py-12">
          <div className="flex flex-col xl:grid xl:grid-cols-6 gap-8">
            <div className="order-last mt-4 grid grid-cols-2 gap-8 xl:order-first xl:col-span-5 xl:mt-0">
              <div className="md:grid md:grid-cols-2 gap-8">
                <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
                    Features
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.features.map((item) => (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-300"
                          style={{ color: 'var(--subtext-color)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--subtext-color)'}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0 transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
                    Product
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.product.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-300"
                          style={{ color: 'var(--subtext-color)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--subtext-color)'}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 gap-8">
                <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
                    Compare
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.compare.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-300"
                          style={{ color: 'var(--subtext-color)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--subtext-color)'}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0 transform transition-all duration-300 hover:translate-y-[-5px]">
                  <h3 className="text-sm font-semibold" style={{ color: 'var(--text-color)' }}>
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-300"
                          style={{ color: 'var(--subtext-color)' }}
                          onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                          onMouseOut={(e) => e.currentTarget.style.color = 'var(--subtext-color)'}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-first mb-8 space-y-4 md:mb-2 xl:order-last xl:col-span-1 xl:mb-0">
              <a href="/" className="block max-w-fit group">
                <div className="inline-flex items-center space-x-2 transition-transform duration-300 transform group-hover:scale-105">
                  <p className="text-base">
                    <span className="font-bold" style={{ color: 'var(--primary-color)' }}>A4</span>
                    <span style={{ color: 'var(--text-color)' }}>Zone</span>
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 sm:space-x-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border p-2 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                >
                  <span className="sr-only">Github</span>
                  <Github className="size-4 transition-colors duration-300" style={{ color: 'var(--subtext-color)' }} />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border p-2 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedIn className="size-4 transition-colors duration-300" style={{ color: 'var(--subtext-color)' }} />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-full border p-2 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--card-bg)' }}
                >
                  <span className="sr-only">YouTube</span>
                  <YouTube className="size-4 transition-colors duration-300" style={{ color: 'var(--subtext-color)' }} />
                </a>
          
              </div>
            </div>
          </div>
          <hr className="border-0 h-px" style={{ backgroundColor: 'var(--border-color)', opacity: 0.3 }} />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm" style={{ color: 'var(--subtext-color)' }}>
              © {new Date().getFullYear()} A4 Zone, Inc.
            </p>
            <p className="text-sm mt-2 sm:mt-0" style={{ color: 'var(--subtext-color)' }}>
              Designed with <span className="text-red-500 animate-pulse">♥</span> by the A4 Zone Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function YouTube({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("transition-all duration-300 group-hover:text-red-500", className)}
      style={style}
      width="20"
      height="20"
    >
      <path
        fill="currentColor"
        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
      />
    </svg>
  );
}

function LinkedIn({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn("transition-all duration-300 group-hover:text-blue-500", className)}
      style={style}
      width="20"
      height="20"
    >
      <path
        fill="currentColor"
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      />
    </svg>
  );
}

function Github({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-white", className)}
      style={style}
      width="20"
      height="20"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function Sun({ className, style }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn("transition-all duration-300", className)}
      style={style}
      width="20" 
      height="20"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
}

function Moon({ className, style }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn("transition-all duration-300", className)}
      style={style}
      width="20" 
      height="20"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}