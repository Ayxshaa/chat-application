import React, { useEffect, useState } from 'react';

export default function Loader({ onLoadingComplete }) {
  const [phase, setPhase] = useState(0);
  const [ringProgress, setRingProgress] = useState(0);
  const [textScale, setTextScale] = useState(0);
  const [zoneOpacity, setZoneOpacity] = useState(0);
  const [masterOpacity, setMasterOpacity] = useState(1);
  
  useEffect(() => {
    // Phase 0: Initial delay before starting
    const initialDelay = setTimeout(() => {
      // Start scaling up the "A4" text
      const scaleInterval = setInterval(() => {
        setTextScale(prev => {
          const newScale = prev + 0.05;
          if (newScale >= 1) {
            clearInterval(scaleInterval);
            // Move to phase 1 - show A4 fully
            setPhase(1);
            return 1;
          }
          return newScale;
        });
      }, 20);
    }, 500);
    
    return () => clearTimeout(initialDelay);
  }, []);
  
  // When phase 1 is reached (A4 appears), start the ring animation
  useEffect(() => {
    if (phase === 1) {
      // Start the ring rotation
      const ringInterval = setInterval(() => {
        setRingProgress(prev => {
          const newProgress = prev + 0.5;
          if (newProgress >= 100) {
            clearInterval(ringInterval);
            // Move to phase 2 - start showing "Zone"
            setPhase(2);
            return 100;
          }
          return newProgress;
        });
      }, 15);
      
      return () => clearInterval(ringInterval);
    }
  }, [phase]);
  
  // When phase 2 is reached (ring completes), reveal "Zone"
  useEffect(() => {
    if (phase === 2) {
      // Fade in "Zone"
      const fadeZoneInterval = setInterval(() => {
        setZoneOpacity(prev => {
          const newOpacity = prev + 0.05;
          if (newOpacity >= 1) {
            clearInterval(fadeZoneInterval);
            // Move to phase 3 - full logo shown
            setPhase(3);
            return 1;
          }
          return newOpacity;
        });
      }, 20);
      
      return () => clearInterval(fadeZoneInterval);
    }
  }, [phase]);
  
  // When phase 3 is reached (full logo shown), wait then fade out
  useEffect(() => {
    if (phase === 3) {
      // Wait before fading out
      const finalDelay = setTimeout(() => {
        // Fade out everything
        const fadeOutInterval = setInterval(() => {
          setMasterOpacity(prev => {
            const newOpacity = prev - 0.05;
            if (newOpacity <= 0) {
              clearInterval(fadeOutInterval);
              // Complete loading
              if (onLoadingComplete) {
                setTimeout(onLoadingComplete, 100);
              }
              return 0;
            }
            return newOpacity;
          });
        }, 20);
      }, 800);
      
      return () => clearTimeout(finalDelay);
    }
  }, [phase, onLoadingComplete]);
  
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-darkBg z-50"
      style={{
        opacity: masterOpacity,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <div className="relative flex items-center justify-center">
        {/* A4 Text */}
        <div 
          className="text-6xl font-bold text-white"
          style={{ 
            fontFamily: 'ClashDisplay, sans-serif',
            transform: `scale(${textScale})`,
            transition: 'transform 0.3s ease-out',
            display: 'flex',
            color: 'var(--primary-color)'
          }}
        >
          A4
          
          {/* Zone Text */}
          <span 
            style={{ 
              opacity: zoneOpacity,
              transition: 'opacity 0.4s ease-out',  
              marginLeft: '8px'
            }}
          >
            Zone
          </span>
        </div>
        
        {/* Rotating Ring */}
        <div 
          className="absolute w-48 h-48"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Base circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.1)" 
              strokeWidth="2"
            />
            
            {/* Progress circle */}
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="var(--primary-color)" 
              strokeWidth="2"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * ringProgress / 100)}
              transform="rotate(-90 50 50)"
              style={{
                transition: 'stroke-dashoffset 0.3s ease-out',
                filter: 'drop-shadow(0 0 6px var(--primary-color))'
              }}
            />
            
            {/* Dot on the ring that follows the progress */}
            <circle 
              cx={50 + 40 * Math.cos(2 * Math.PI * ringProgress / 100 - Math.PI/2)}
              cy={50 + 40 * Math.sin(2 * Math.PI * ringProgress / 100 - Math.PI/2)}
              r="3" 
              fill="var(--primary-color)"
              style={{
                filter: 'drop-shadow(0 0 3px var(--primary-color))'
              }}
            />
          </svg>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx>{`
        :root {
          --primary-color: #6C47FF;
          --secondary-color: #8254f7;
        }
        
        [data-theme="dark"] {
          --primary-color: #A974FF;
          --secondary-color: #00FFFF;
        }
      `}</style>
    </div>
  );
}