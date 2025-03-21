import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/Travel & Resort.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter } from "react-icons/fa";

export default function SignInForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://b43-web-216-web-project-211.onrender.com/api/signin', formData);

      if (response.data && response.data.user) {
        const { token, user } = response.data;

        // Store token and username in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('username', user.username);

        console.log('Login Successful:', user);
        navigate('/');   // Navigate to home after login
        window.location.reload();  // Reload to reflect navbar changes
      }
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex shadow-lg rounded-lg overflow-hidden w-full max-w-4xl bg-white"
      >
        <div className="flex-1 p-10 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            Welcome Back 👋
          </motion.h2>
          <p className="text-gray-600 mb-6">Please sign in to continue</p>

          {error && (
            <div className="text-red-500 mb-4 bg-red-100 p-3 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="w-full outline-none border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full outline-none border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-md transition duration-300 shadow-lg ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="text-center mt-4">
              <span className="text-gray-500">or</span>
              <p className="text-sm mt-2">Sign In With</p>
              <div className="flex justify-center gap-4 mt-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-2xl hover:text-blue-700 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 text-2xl hover:text-gray-800 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            <p className="text-sm mt-4 text-center">
              Don't have an account?{' '}
              <Link to='/signup' className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-blue-100">
          <img src={Logo} alt="Logo" className="mb-6 w-2/3" />
          <p className="text-gray-700 mb-4">Don't have an account?</p>
          <Link to='/signup' className="px-6 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
