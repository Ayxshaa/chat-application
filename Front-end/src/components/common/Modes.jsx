import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
const Modes = () => {
  const { darkMode } = useTheme();
  const [activeMode, setActiveMode] = useState(null); // Start with no active mode
  const navigate = useNavigate(); 
  const modes = [
    {
      id: 'friend',
      emoji: '🟢',
      title: 'Friend Mode',
      description: 'Casual and fun conversation suggestions with appropriate emoji usage and friendly tone.',
      color: 'green'
    },
    {
      id: 'lover',
      emoji: '💗',
      title: 'Lover Mode',
      description: 'Romantic and expressive messages with sweet sentiments and affectionate language.',
      color: 'pink'
    },
    {
      id: 'professional',
      emoji: '🔵',
      title: 'Professional Mode',
      description: 'Respectful and clear communication with formal language appropriate for work settings.',
      color: 'blue'
    }
  ];

  const handleModeChange = (modeId) => {
    // Toggle off if already active, otherwise set to new mode
    setActiveMode(activeMode === modeId ? null : modeId);
  };

  const getColorClasses = (mode) => {
    const colorMap = {
      green: {
        bg: 'bg-green-500',
        text: 'text-green-400',
        hover: 'hover:text-green-300',
        border: 'border-green-400',
        glow: 'shadow-[0_0_15px_rgba(74,222,128,0.5)]',
        activeBg: 'bg-green-900/40'
      },
      pink: {
        bg: 'bg-pink-500',
        text: 'text-pink-400',
        hover: 'hover:text-pink-300',
        border: 'border-pink-400',
        glow: 'shadow-[0_0_15px_rgba(244,114,182,0.5)]',
        activeBg: 'bg-pink-900/40'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        hover: 'hover:text-blue-300',
        border: 'border-blue-400',
        glow: 'shadow-[0_0_15px_rgba(96,165,250,0.5)]',
        activeBg: 'bg-blue-900/40'
      }
    };

    return colorMap[mode.color];
  };

  // Determine background color based on theme
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const descriptionColor = darkMode ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h1 className={`text-3xl font-semibold mb-10 text-center ${textColor}`}>Relationship Modes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modes.map((mode) => {
          const colors = getColorClasses(mode);
          const isActive = activeMode === mode.id;
          
          return (
            <div 
              key={mode.id}
              className={`
                ${bgColor} rounded-lg p-5 ${textColor}
                transition-all duration-300 cursor-pointer
                hover:translate-y-1 relative
                ${isActive ? 'border-2 ' + colors.border + ' ' + colors.glow : 'border-2 border-transparent'}
                ${isActive ? colors.activeBg : ''}
              `}
              onClick={() => handleModeChange(mode.id)}
            >
              <div className="flex justify-center items-center mb-3">
                <div className={`text-3xl border rounded-full p-3 ${colors.border} ${colors.text}`}>
                  {mode.emoji}
                </div>
              </div>
              
              <h2 className="text-xl font-medium mb-2 text-center">
                {mode.title}
              </h2>
              
              <p className={`${descriptionColor} mb-4 text-center text-sm`}>
                {mode.description}
              </p>
              
              <div className="flex justify-center">
                <button 
                  className={`
                    py-1 px-3 rounded-md transition-colors text-sm
                    ${colors.text} ${colors.hover}
                    ${isActive ? 'bg-opacity-20 bg-black border ' + colors.border : ''}
                  `}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleModeChange(mode.id);
                  }}
                >
                  {isActive ? 'Currently Active' : 'Activate Mode'}
                </button>
              </div>
              
              {isActive && (
                <div className="absolute -top-2 -right-2">
                  <span className={`flex h-4 w-4 relative`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colors.bg}`}></span>
                    <span className={`relative inline-flex rounded-full h-4 w-4 ${colors.bg}`}></span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => navigate('/register')} // ✅ Go to register page
          className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate('/')} // ✅ Go back to home
          className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Modes;