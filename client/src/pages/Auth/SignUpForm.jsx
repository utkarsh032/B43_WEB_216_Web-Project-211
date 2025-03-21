import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../../assets/Travel & Resort.png';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { API_URL } from '../../API/API';

export default function SignUpForm() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  // Check if a user is already logged in when the component loads
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/signup`, formData);
      console.log('Response:', response.data);

      // Save the username in localStorage
      localStorage.setItem('username', formData.username);
      setLoggedInUser(formData.username);

      // Redirect to the homepage or another page
      navigate('/');

    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex shadow-lg rounded-lg overflow-hidden w-full max-w-4xl"
      >
        {/* Form Section */}
        <div className="flex-1 bg-white p-10 text-left">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4"
          >
            {loggedInUser ? `Welcome, ${loggedInUser} 👋` : 'Hello 👋'}
          </motion.h2>
          <p className="text-gray-600 mb-6">
            {loggedInUser ? 'You are already logged in.' : 'Please sign up to continue'}
          </p>

          {!loggedInUser ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  required
                  className="w-full outline-none border-b-2 border-gray-300 focus:border-blue-500 transition-all duration-300"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
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
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
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
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-lg"
              >
                Sign Up
              </motion.button>
            </form>
          ) : (
            <div className="text-center">
              <p>You are already signed up as {loggedInUser}.</p>
              <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
            </div>
          )}
        </div>

        {/* Logo Section */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-1/2 flex flex-col justify-center items-center p-10"
        >
          <img src={Logo} alt="Logo" className="mb-6" />
          <p className="text-gray-700 mb-4">Already have an account?</p>
          <Link to='/signin' className="px-6 py-2 rounded-full border hover:bg-white duration-300 transition">
            Sign In
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
