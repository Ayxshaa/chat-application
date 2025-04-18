import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Heart, Users, Smartphone, Share2, Shield, Shuffle } from 'lucide-react';

const Features = () => {
  const { darkMode } = useTheme();

  const featureItems = [
    {
      id: 1,
      title: 'Relationship-based AI',
      description: 'Smart suggestions tailored to your relationship type, whether friendly, romantic, or professional.',
      icon: <Heart className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="relative h-32 w-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-teal-400/30 flex items-center justify-center">
                <div className="h-8 w-8 rounded-full bg-teal-400/50 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-teal-400" />
                </div>
              </div>
              <div className="absolute top-0 left-16 h-3 w-3 rounded-full bg-pink-400" />
              <div className="absolute top-12 left-14 h-3 w-3 rounded-full bg-blue-400" />
              <div className="absolute top-6 left-20 h-3 w-3 rounded-full bg-purple-400" />
              <div className="absolute top-10 right-12 h-3 w-3 rounded-full bg-yellow-300" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Add & Manage Friends',
      description: 'Easily add friends, manage connections, and organize your conversations.',
      icon: <Users className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-blue-400/20 flex items-center justify-center border-2 border-blue-400/30">
              <span className="text-blue-400 font-bold">JD</span>
            </div>
            <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-teal-400 flex items-center justify-center text-white font-bold text-xs">+</div>
            <div className="absolute -bottom-1 -left-4 h-12 w-12 rounded-full bg-purple-400/20 flex items-center justify-center border-2 border-purple-400/30">
              <span className="text-purple-400 font-bold">AS</span>
            </div>
            <div className="absolute -bottom-1 -right-4 h-12 w-12 rounded-full bg-pink-400/20 flex items-center justify-center border-2 border-pink-400/30">
              <span className="text-pink-400 font-bold">MK</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Sync Contacts',
      description: 'Import your existing contacts to quickly find and connect with friends.',
      icon: <Smartphone className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="relative h-24 w-16 bg-gray-700 rounded-xl border-4 border-gray-800 flex flex-col items-center overflow-hidden">
            <div className="h-3 w-8 bg-gray-800 rounded-b-lg mb-1"></div>
            <div className="flex-grow w-full p-1">
              <div className="h-2 w-full bg-indigo-400/30 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-indigo-400/30 rounded-sm mb-1"></div>
              <div className="h-2 w-full bg-indigo-400/30 rounded-sm mb-1"></div>
              <div className="absolute bottom-1 left-1 right-1 h-3 bg-indigo-400 rounded-md"></div>
            </div>
          </div>
          <div className="ml-3 mr-3">
            <div className="h-6 w-6 rounded-full bg-indigo-400/20 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full border-2 border-indigo-400 border-dashed animate-spin"></div>
            </div>
          </div>
          <div className="h-20 w-24 bg-gray-800 rounded-md flex flex-col p-1 space-y-1">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-indigo-400/30 mr-1"></div>
              <div className="h-2 flex-grow bg-gray-600 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-indigo-400/30 mr-1"></div>
              <div className="h-2 flex-grow bg-gray-600 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-indigo-400/30 mr-1"></div>
              <div className="h-2 flex-grow bg-gray-600 rounded-sm"></div>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-indigo-400/30 mr-1"></div>
              <div className="h-2 flex-grow bg-gray-600 rounded-sm"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Invite Friends',
      description: 'Share custom invite links via WhatsApp, email, or SMS to bring your friends onboard.',
      icon: <Share2 className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: 'Secure Messaging',
      description: 'End-to-end encrypted real-time messaging keeps your conversations private.',
      icon: <Shield className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="relative w-48 mb-14">
            <div className="absolute top-0 left-0 h-12 w-36 bg-gray-700 rounded-lg flex items-center p-2">
              <div className="h-8 w-8 rounded-full bg-blue-400/20 flex items-center justify-center text-xs text-blue-400 font-bold mr-2">JD</div>
              <div className="flex-grow">
                <div className="h-2 w-16 bg-gray-500 rounded-full mb-1"></div>
                <div className="h-2 w-12 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="absolute top-14 right-0 h-12 w-36 bg-teal-400/30 rounded-lg flex items-center p-2">
              <div className="flex-grow">
                <div className="h-2 w-16 bg-teal-400/50 rounded-full mb-1"></div>
                <div className="h-2 w-12 bg-teal-400/50 rounded-full"></div>
              </div>
              <div className="h-8 w-8 rounded-full bg-teal-400/20 flex items-center justify-center text-xs text-teal-400 font-bold ml-2">ME</div>
            </div>
            <div className="absolute top-6 left-14 w-20 h-14">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400 opacity-30">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: 'Multiple Modes',
      description: 'Switch between friend, lover, and professional modes to match your conversation context.',
      icon: <Shuffle className="w-6 h-6 text-[var(--primary-color)]" />,
      visual: (
        <div className="h-32 w-full flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="h-16 w-16 rounded-full bg-blue-400/20 flex flex-col items-center justify-center border-2 border-blue-400/30">
              <Users className="h-6 w-6 text-blue-400" />
              <span className="text-xs text-blue-400 mt-1">Friend</span>
            </div>
            <div className="h-16 w-16 rounded-full bg-pink-400/20 flex flex-col items-center justify-center border-2 border-pink-400/30">
              <Heart className="h-6 w-6 text-pink-400" />
              <span className="text-xs text-pink-400 mt-1">Lover</span>
            </div>
            <div className="h-16 w-16 rounded-full bg-purple-400/20 flex flex-col items-center justify-center border-2 border-purple-400/30">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-400">
                <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                <path d="M4 16h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 8h16"></path>
              </svg>
              <span className="text-xs text-purple-400 mt-1">Pro</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className={`py-16 px-4 md:px-8 ${darkMode ? 'bg-[#0e0e11]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Transform your relationships with AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureItems.map((feature) => (
            <div 
              key={feature.id} 
              className={`rounded-lg p-6 ${darkMode ? 'bg-[#1a1a1d]' : 'bg-[#f1f1f1]'} flex flex-col h-full`}
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-md ${darkMode ? 'bg-[#2c2c2e]' : 'bg-[#e9e9e9]'} flex items-center justify-center`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'} mb-6`}>
                {feature.description}
              </p>
              <div className="mt-auto">
                {feature.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;