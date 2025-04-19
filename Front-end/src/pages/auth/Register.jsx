import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext/ThemeContext';

const Register = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle registration logic
    console.log('Registering', formData);
  };

  const handleSocialLogin = (platform) => {
    console.log(`Registering with ${platform}`);
    // Implement social register logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] px-4">
      <div className="absolute top-4 right-4">
        <button onClick={toggleDarkMode} className="theme-toggle">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-[var(--card-bg)] p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center" style={{ color: 'var(--text-color)' }}>
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm" style={{ color: 'var(--text-color)' }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="chat-input w-full"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm" style={{ color: 'var(--text-color)' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="chat-input w-full"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm" style={{ color: 'var(--text-color)' }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="chat-input w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm" style={{ color: 'var(--text-color)' }}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="chat-input w-full"
              placeholder="••••••••"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="button w-full cta-button"
          >
            Register
          </motion.button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm" style={{ color: 'var(--subtext-color)' }}>
            Already have an account?
            <a href="/login" className="text-[var(--primary-color)] cursor-pointer"> Sign In</a>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleSocialLogin('Google')}
            className="button w-full flex justify-center items-center space-x-2"
          >
            <img src="google-icon.png" alt="Google" className="w-5 h-5" />
            <span>Sign Up with Google</span>
          </button>

          <button
            onClick={() => handleSocialLogin('GitHub')}
            className="button w-full flex justify-center items-center space-x-2"
          >
            <img src="github-icon.png" alt="GitHub" className="w-5 h-5" />
            <span>Sign Up with GitHub</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
