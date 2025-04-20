import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Modes = () => {
  const { darkMode } = useTheme();
  const [activeMode, setActiveMode] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const navigate = useNavigate();
  
  const modes = [
    {
      id: 'friend',
      emoji: '🟢',
      title: 'Friend Mode',
      description: 'Casual and fun conversation suggestions with appropriate emoji usage and friendly tone.',
      color: 'green',
      suggestions: [
        "Try starting with a friendly greeting like 'Hey there! How's your day going?'",
        "Share a fun fact or ask about their interests to keep the conversation light",
        "Use emojis occasionally to add warmth to your messages 😊"
      ]
    },
    {
      id: 'lover',
      emoji: '💗',
      title: 'Lover Mode',
      description: 'Romantic and expressive messages with sweet sentiments and affectionate language.',
      color: 'pink',
      suggestions: [
        "Express your feelings with heartfelt compliments about specific qualities you admire",
        "Create anticipation by sharing something you're looking forward to doing together",
        "Use sweet pet names and romantic emojis to convey affection 💕"
      ]
    },
    {
      id: 'professional',
      emoji: '🔵',
      title: 'Professional Mode',
      description: 'Respectful and clear communication with formal language appropriate for work settings.',
      color: 'blue',
      suggestions: [
        "Begin with a formal greeting such as 'Good morning/afternoon'",
        "Be concise and focus on the main points of your message",
        "Use proper punctuation and avoid casual abbreviations"
      ]
    }
  ];

  const handleModeChange = (modeId) => {
    // Toggle off if already active, otherwise set to new mode
    const newMode = activeMode === modeId ? null : modeId;
    setActiveMode(newMode);
    
    // Show suggestion with animation
    if (newMode) {
      const selectedMode = modes.find(mode => mode.id === newMode);
      const randomSuggestion = selectedMode.suggestions[Math.floor(Math.random() * selectedMode.suggestions.length)];
      setSuggestion(randomSuggestion);
      setShowSuggestion(false);
      setTimeout(() => {
        setShowSuggestion(true);
      }, 300);
    } else {
      setShowSuggestion(false);
    }
  };

  // Cycle through suggestions every 4 seconds (changed from 8000 to 4000ms)
  useEffect(() => {
    if (activeMode) {
      const selectedMode = modes.find(mode => mode.id === activeMode);
      const interval = setInterval(() => {
        setShowSuggestion(false);
        setTimeout(() => {
          const randomSuggestion = selectedMode.suggestions[Math.floor(Math.random() * selectedMode.suggestions.length)];
          setSuggestion(randomSuggestion);
          setShowSuggestion(true);
        }, 500);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [activeMode]);

  const getColorClasses = (mode) => {
    const colorMap = {
      green: {
        bg: 'bg-green-500',
        text: 'text-green-400',
        hover: 'hover:text-green-300',
        border: 'border-green-400',
        glow: 'shadow-[0_0_15px_rgba(74,222,128,0.5)]',
        activeBg: 'bg-green-900/40',
        lightBg: 'bg-green-100',
        darkBg: 'bg-green-900/20',
        gradient: 'from-green-500/20 to-transparent'
      },
      pink: {
        bg: 'bg-pink-500',
        text: 'text-pink-400',
        hover: 'hover:text-pink-300',
        border: 'border-pink-400',
        glow: 'shadow-[0_0_15px_rgba(244,114,182,0.5)]',
        activeBg: 'bg-pink-900/40',
        lightBg: 'bg-pink-100',
        darkBg: 'bg-pink-900/20',
        gradient: 'from-pink-500/20 to-transparent'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        hover: 'hover:text-blue-300',
        border: 'border-blue-400',
        glow: 'shadow-[0_0_15px_rgba(96,165,250,0.5)]',
        activeBg: 'bg-blue-900/40',
        lightBg: 'bg-blue-100',
        darkBg: 'bg-blue-900/20',
        gradient: 'from-blue-500/20 to-transparent'
      }
    };

    return colorMap[mode.color];
  };

  // Determine background color based on theme
  const bgColor = darkMode ? 'bg-gray-800' : 'bg-gray-100';
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const descriptionColor = darkMode ? 'text-gray-300' : 'text-gray-600';
  const suggestionBg = darkMode ? 'bg-gray-700' : 'bg-white';

  // Get active mode colors
  const activeColors = activeMode ? getColorClasses(modes.find(mode => mode.id === activeMode)) : null;

  // Define background animation class based on active mode
  const getBackgroundAnimation = () => {
    if (!activeMode) return '';
    
    const selectedMode = modes.find(mode => mode.id === activeMode);
    const colors = getColorClasses(selectedMode);
    
    return `bg-gradient-to-b ${colors.gradient}`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative overflow-hidden">
      {/* Animated background elements */}
      {activeMode && (
        <>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className={`absolute top-0 left-0 w-full h-full ${getBackgroundAnimation()} transition-all duration-1000 opacity-60`}></div>
            
            {/* Animated circles */}
            <div className={`absolute top-1/4 left-1/4 w-32 h-32 rounded-full ${activeColors.bg} opacity-5 animate-pulse-slow`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full ${activeColors.bg} opacity-5 animate-float`}></div>
            <div className={`absolute top-1/2 right-1/3 w-24 h-24 rounded-full ${activeColors.bg} opacity-10 animate-bounce-slow`}></div>
            <div className={`absolute bottom-1/3 left-1/2 w-40 h-40 rounded-full ${activeColors.bg} opacity-5 animate-spin-slow`}></div>
          </div>
        </>
      )}
      
      <h1 className={`text-3xl font-semibold mb-10 text-center ${textColor} relative z-10`}>Relationship Modes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {modes.map((mode) => {
          const colors = getColorClasses(mode);
          const isActive = activeMode === mode.id;
          
          return (
            <div 
              key={mode.id}
              className={`
                ${bgColor} rounded-lg p-5 ${textColor}
                transition-all duration-500 cursor-pointer
                transform hover:scale-105 relative
                ${isActive ? 'border-2 ' + colors.border + ' ' + colors.glow + ' scale-105' : 'border-2 border-transparent'}
                ${isActive ? colors.activeBg : ''}
                backdrop-blur-sm bg-opacity-90
              `}
              onClick={() => handleModeChange(mode.id)}
            >
              <div className="flex justify-center items-center mb-3">
                <div className={`text-4xl border-2 rounded-full p-4 ${colors.border} ${colors.text} transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`}>
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
                    py-2 px-4 rounded-md transition-all duration-300 text-sm font-medium
                    ${colors.text} ${colors.hover}
                    ${isActive ? 'bg-opacity-20 bg-black border-2 ' + colors.border + ' transform scale-110' : ''}
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
                  <span className={`flex h-5 w-5 relative`}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colors.bg}`}></span>
                    <span className={`relative inline-flex rounded-full h-5 w-5 ${colors.bg}`}></span>
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* AI Suggestion Section */}
      <div className={`mt-8 mb-8 transition-all duration-500 relative z-10 ${activeMode ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'}`}>
        {activeMode && (
          <div className={`rounded-lg p-5 ${suggestionBg} border ${activeColors.border} transition-all duration-500 transform ${showSuggestion ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} backdrop-blur-sm bg-opacity-90`}>
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-10 h-10 rounded-full ${activeColors.bg} flex items-center justify-center text-white animate-pulse`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className={`font-medium ${textColor}`}>AI Suggestion</h3>
            </div>
            <div className={`pl-12 ${descriptionColor} text-sm`}>
              {suggestion}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center gap-6 mt-10 relative z-10">
        <button
          onClick={() => navigate('/register')}
          className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate('/')}
          className="bg-gray-300 text-gray-800 px-5 py-2 rounded-md hover:bg-gray-400 transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

// Add custom animation keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 0.05; }
    50% { transform: scale(1.1); opacity: 0.2; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(-5px); }
    50% { transform: translateY(5px); }
  }
  
  @keyframes spin-slow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 8s infinite;
  }
  
  .animate-float {
    animation: float 15s infinite;
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 6s infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`;
document.head.appendChild(style);

export default Modes;