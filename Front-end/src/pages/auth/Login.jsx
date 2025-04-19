import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function Login() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempted with:', { email, password, rememberMe });
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
            Welcome back
          </h1>
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Sign in to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              htmlFor="password"
              className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
            >
              Password
            </label>
            <div className="relative group">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                  darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                }`}
                placeholder="••••••••"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
              }`}></div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className={`w-4 h-4 rounded border-gray-300 ${
                  darkMode ? 'accent-[#A974FF]' : 'accent-[#6C47FF]'
                }`}
              />
              <label
                htmlFor="remember-me"
                className={`ml-2 block text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className={`text-sm font-medium transition-colors duration-300 ${
                darkMode ? 'text-[#A974FF] hover:text-[#00FFFF]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
              }`}
            >
              Forgot password?
            </a>
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
            <span className="relative z-10 flex justify-center">
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
                'Sign in'
              )}
            </span>
            <div className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
              darkMode ? 'bg-[#00FFFF]' : 'bg-white'
            }`}></div>
            <div className="absolute bottom-0 left-0 h-0 w-0 group-hover:h-full group-hover:w-full transition-all duration-500 origin-bottom-left transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className={`font-medium transition-colors duration-300 ${
                darkMode ? 'text-[#A974FF] hover:text-[#00FFFF]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
              } underline`}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}