import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext/ThemeContext";
import { motion } from "framer-motion";

const About = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after a small delay for the animation to work on page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Card variant for staggered animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Card data
  const cards = [
    {
      title: "Context-Aware AI",
      description: "Our engine suggests based on the emotional depth of your connections.",
      glowColor: "rgb(130, 80, 190)"
    },
    {
      title: "Privacy First",
      description: "Conversations stay yours — always private and secure.",
      glowColor: "rgb(100, 180, 220)"
    },
    {
      title: "Crafted for Everyone",
      description: "Whether you're introverted or extroverted, our tools help you express better.",
      glowColor: "rgb(150, 230, 190)"
    }
  ];

  return (
    <section className="relative min-h-screen px-6 py-16 flex flex-col justify-center items-center text-center bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300 overflow-hidden">
      {/* Main Glowing Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="absolute right-[-10%] top-1/3 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none z-0 bg-[var(--primary-color)]" 
      />
  
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Intro Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm border-[var(--border-color-dark)] dark:border-white/10 bg-white/10 text-[var(--text-color)] "
        >
          📖 About Us
        </motion.div>
  
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 max-w-4xl text-[var(--text-color)]"
        >
          Built for Connection, Designed for Meaningful Chats.
        </motion.h1>
  
        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg max-w-2xl text-[var(--subtext-color)] mb-10"
        >
          At A4 Zone, we believe that the essence of great conversation lies in understanding your relationships.
          Our mission is to help you connect deeper through smart suggestions that truly reflect the nature of your bonds.
        </motion.p>
  
        {/* Highlights with glowing cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ 
                y: -10, 
                boxShadow: `0 0 25px 5px ${card.glowColor}`,
                transition: { duration: 0.3 } 
              }}
              className="relative p-6 rounded-xl bg-[var(--card-bg)] shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Card Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.2, 0.1], 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "reverse"
                }}
                style={{ backgroundColor: card.glowColor }}
                className="absolute inset-0 rounded-lg blur-xl opacity-10 z-0"
              />
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-[var(--subtext-color)]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;