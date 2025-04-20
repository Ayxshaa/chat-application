import React from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Github, Linkedin } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Aman Kumar',
    position: 'Backend Developer',
    image: '/images/Aman.jpeg',
    github: 'https://github.com/Aman-1610',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-625420247/'
  },
  {
    id: 2,
    name: 'Ayesha Qureshi',
    position: 'Frontend Developer',
    image: '/images/Ayesha.jpeg',
    github: 'https://github.com/Ayxshaa',
    linkedin: 'https://www.linkedin.com/in/ayesha-qureshi-a67414344/'
  },
  {
    id: 3,
    name: 'Arunima Joshi',
    position: 'AI Developer',
    image: '/images/Joshi.png',
    github: 'https://github.com/ArunimaJoshi',
    linkedin: 'https://linkedin.com/in/guyhawkins'
  },
  {
    id: 4,
    name: 'Abhishek Rawat',
    position: 'UI/UX Designer',
    image: '/images/Rawat.jpeg',
    github: 'https://github.com/84618',
    linkedin: 'https://www.linkedin.com/in/abhishek-rawat-3867002a8/'
  }
];

const Teams = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className={`py-16 ${darkMode ? 'bg-[#0e0e11]' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className={`p-6 rounded-xl ${darkMode ? 'bg-[#1a1a1d]' : 'bg-[#f1f1f1]'} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-purple-500">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className={`text-center mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  {member.position}
                </p>
                
                <div className="flex mt-4 space-x-4">
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? 'text-indigo-400 hover:text-white' : 'text-indigo-600 hover:text-black'}`}
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`transition-colors ${darkMode ? 'text-indigo-400 hover:text-white' : 'text-indigo-600 hover:text-black'}`}
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;