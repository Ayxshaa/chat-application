import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { SendIcon } from 'lucide-react';

export default function ContactPage() {
  const { darkMode } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitStatus('success');
      console.log('Contact form submitted with:', { name, email, subject, message });
    }, 1500);
  };

  return (
    <div className={`flex min-h-screen items-center justify-center transition-colors duration-300 relative overflow-hidden ${
      darkMode ? 'bg-[#0e0e11]' : 'bg-white'
    }`}>
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className={`animate-pulse-slow absolute top-[-10%] left-[-10%] w-1/2 h-1/2 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
        }`}></div>
        
        <div className={`animate-float absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-[#6C47FF]' : 'bg-[#8e72fc]'
        }`}></div>
        
        <div className={`animate-pulse-slow animate-delay-2000 absolute top-[30%] right-[20%] w-1/3 h-1/3 rounded-full blur-3xl opacity-10 ${
          darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
        }`}></div>
      </div>

      <div className={`w-full max-w-md px-8 py-10 mx-4 rounded-2xl shadow-lg z-10 backdrop-blur-sm ${
        darkMode ? 'bg-[#1a1a1d]/90' : 'bg-white/90'
      }`}>
        <div className="mb-8 text-center">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
            Contact Us
          </h1>
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            We'd love to hear from you
          </p>
        </div>

        {submitStatus === 'success' ? (
          <div className={`text-center p-6 rounded-lg ${darkMode ? 'bg-[#2c2c2e]' : 'bg-[#e9e9e9]'}`}>
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${darkMode ? 'bg-[#A974FF]/20' : 'bg-[#6C47FF]/20'}`}>
              <svg className={`w-6 h-6 ${darkMode ? 'text-[#A974FF]' : 'text-[#6C47FF]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-[#111111]'}`}>Message Sent!</h3>
            <p className={`${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
            <button
              onClick={() => {
                setSubmitStatus(null);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
              }}
              className={`mt-6 px-6 py-2 rounded-lg font-medium ${
                darkMode ? 'bg-[#A974FF] hover:bg-[#A974FF]/90' : 'bg-[#6C47FF] hover:bg-[#6C47FF]/90'
              } text-white transition-all duration-300`}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
              >
                Name
              </label>
              <div className="relative group">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                  } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                    darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                  }`}
                  placeholder="Your name"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
                }`}></div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
              >
                Email
              </label>
              <div className="relative group">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                  } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                    darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                  }`}
                  placeholder="your@email.com"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
                }`}></div>
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
              >
                Subject
              </label>
              <div className="relative group">
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                  } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                    darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                  }`}
                  placeholder="How can we help you?"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
                }`}></div>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
              >
                Message
              </label>
              <div className="relative group">
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                    darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                  } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                    darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                  }`}
                  placeholder="Tell us what you need help with..."
                />
                <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
                }`}></div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium relative overflow-hidden group ${
                isLoading ? 'cursor-not-allowed' : 'cursor-pointer'
              } ${
                darkMode ? 'bg-[#A974FF] hover:bg-[#A974FF]/90' : 'bg-[#6C47FF] hover:bg-[#6C47FF]/90'
              } text-white transition-all duration-300`}
            >
              <span className="relative z-10 flex justify-center items-center">
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <>
                    <span>Send Message</span>
                    <SendIcon size={18} className="ml-2" />
                  </>
                )}
              </span>
              <div className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                darkMode ? 'bg-[#8e72fc]' : 'bg-white'
              }`}></div>
              <div className="absolute bottom-0 left-0 h-0 w-0 group-hover:h-full group-hover:w-full transition-all duration-500 origin-bottom-left transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Need urgent assistance?{' '}
            <a
              href="tel:+1234567890"
              className={`font-medium transition-colors duration-300 ${
                darkMode ? 'text-[#A974FF] hover:text-[#8e72fc]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
              } underline`}
            >
              Call us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}