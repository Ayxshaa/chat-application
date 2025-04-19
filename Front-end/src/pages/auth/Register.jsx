import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext/ThemeContext';
import { Github, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const fadeVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const GoogleIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 488 512"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M488 261.8c0-17.8-1.6-35-4.6-51.8H249v98h135c-5.8 33.9-22.6 62.8-48.2 81v67h77c45.2-41.8 71.2-103.7 71.2-179.2zM249 98c-33.6 0-62.3 11.3-85.5 30.4l-66.2-66.3C129.4 38.7 163.3 15 200.3 15 239.5 15 274.9 27.7 305.1 58l57.7-57.7c-31.4-31.3-74.2-48.4-119.6-48.4zM200.3 98c-39.1 0-72.4 25.6-84.4 60.5h-77v118.9h60.7v-82h-40v-58.7h40V98h74.8c17.5 0 33.6 6.7 45.6 18.9 12.5 11.5 18.5 28 18.5 46.7 0 18.8-7.1 35.6-19.6 49.1-13.3 13.7-32.3 21.2-54.4 21.2-20.1 0-38.1-7.6-52.4-20.7l-33.8 33.8c19.6 15.8 43.5 25.7 70.2 25.7 47.1 0 85.3-35.1 85.3-78.5s-38.2-78.5-85.3-78.5z" />
  </svg>
);

const Register = () => {
  const { darkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Registering', formData);
    }, 1500);
  };

  const handleSocialLogin = (platform) => {
    console.log(`Registering with ${platform}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden transition-colors duration-300">
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

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-full max-w-md px-8 py-10 mx-4 rounded-2xl shadow-lg z-10 backdrop-blur-sm ${
          darkMode ? 'bg-[#1a1a1d]/90' : 'bg-white/90'
        }`}
      >
        <div className="mb-8 text-center">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
            Create Account
          </h1>
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Join us and get started today
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div custom={0} variants={fadeVariant} initial="hidden" animate="visible">
            <label className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
              Name
            </label>
            <div className="relative group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                  darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                }`}
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
              }`}></div>
            </div>
          </motion.div>

          <motion.div custom={1} variants={fadeVariant} initial="hidden" animate="visible">
            <label className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
              Email
            </label>
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                  darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                }`}
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
              }`}></div>
            </div>
          </motion.div>

          <motion.div custom={2} variants={fadeVariant} initial="hidden" animate="visible">
            <label className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
              Password
            </label>
            <div className="relative group">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                  darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                }`}
                required
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
          </motion.div>

          <motion.div custom={3} variants={fadeVariant} initial="hidden" animate="visible">
            <label className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-[#111111]'} mb-2`}>
              Confirm Password
            </label>
            <div className="relative group">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  darkMode ? 'bg-[#2c2c2e] text-white' : 'bg-[#e9e9e9] text-[#111111]'
                } border border-transparent focus:outline-none group-hover:border-opacity-50 ${
                  darkMode ? 'focus:border-[#A974FF] group-hover:border-[#A974FF]' : 'focus:border-[#6C47FF] group-hover:border-[#6C47FF]'
                }`}
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
              }`}></div>
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </button>
            </div>
          </motion.div>

          <motion.button
            custom={4}
            variants={fadeVariant}
            initial="hidden"
            animate="visible"
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
                'Register'
              )}
            </span>
            <div className={`absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
              darkMode ? 'bg-[#00FFFF]' : 'bg-white'
            }`}></div>
            <div className="absolute bottom-0 left-0 h-0 w-0 group-hover:h-full group-hover:w-full transition-all duration-500 origin-bottom-left transform -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className={`text-sm ${darkMode ? 'text-[#aaaaaa]' : 'text-[#555555]'}`}>
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className={`font-medium transition-colors duration-300 ${
                darkMode ? 'text-[#A974FF] hover:text-[#00FFFF]' : 'text-[#6C47FF] hover:text-[#8e72fc]'
              } underline`}
            >
              Sign in
            </button>
          </p>
        </div>

        <div className="mt-8 relative flex items-center">
          <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
          <span className={`px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Or continue with</span>
          <div className={`flex-grow border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}></div>
        </div>

        <div className="mt-6 space-y-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSocialLogin('Google')}
            className={`w-full py-3 px-4 rounded-lg font-medium relative overflow-hidden group flex items-center justify-center gap-3 transition-all duration-300 ${
              darkMode ? 'bg-[#2c2c2e] hover:bg-[#2c2c2e]/80' : 'bg-[#e9e9e9] hover:bg-[#e9e9e9]/80'
            } ${
              darkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            <GoogleIcon />
            <span>Sign up with Google</span>
            <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
              darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
            }`}></div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSocialLogin('GitHub')}
            className={`w-full py-3 px-4 rounded-lg font-medium relative overflow-hidden group flex items-center justify-center gap-3 transition-all duration-300 ${
              darkMode ? 'bg-[#2c2c2e] hover:bg-[#2c2c2e]/80' : 'bg-[#e9e9e9] hover:bg-[#e9e9e9]/80'
            } ${
              darkMode ? 'text-white' : 'text-[#111111]'
            }`}
          >
            <Github className="w-5 h-5" />
            <span>Sign up with GitHub</span>
            <div className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
              darkMode ? 'bg-[#A974FF]' : 'bg-[#6C47FF]'
            }`}></div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;