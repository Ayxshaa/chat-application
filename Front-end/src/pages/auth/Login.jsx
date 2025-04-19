import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext/ThemeContext'; // Custom hook to get the current theme
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function Login() {
  const { darkMode } = useTheme(); // Get current theme state from context
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
    <div
      className={`flex min-h-screen items-center justify-center transition-colors duration-300 ${
        darkMode ? 'bg-[#0e0e11]' : 'bg-white'
      }`}
    >
      <div
        className={`w-full max-w-md px-8 py-10 mx-4 rounded-2xl shadow-lg ${
          darkMode ? 'bg-[#1a1a1d]' : 'bg-white'
        }`}
      >
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
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full px-4 py-3 rounded-lg ${
                darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
              } border border-transparent focus:border-[#6C47FF] dark:focus:border-[#A974FF] focus:outline-none transition-colors`}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:border-[#6C47FF] dark:focus:border-[#A974FF] focus:outline-none transition-colors`}
                placeholder="••••••••"
              />
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
                className="w-4 h-4 accent-[#6C47FF] dark:accent-[#A974FF] rounded border-gray-300"
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
              className={`text-sm font-medium ${
                darkMode ? 'text-[#A974FF] dark:hover:text-[#00FFFF]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
              }`}
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg ${
              darkMode ? 'bg-[#A974FF] dark:hover:bg-[#00FFFF]' : 'bg-[#6C47FF] hover:bg-[#8e72fc]'
            } text-white font-medium transition-all duration-300 flex justify-center`}
          >
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
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className={`font-medium ${
                darkMode ? 'text-[#A974FF] dark:hover:text-[#00FFFF]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
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
