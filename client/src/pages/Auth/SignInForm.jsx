import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../assets/Travel & Resort.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

export default function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/signin', formData);
      console.log('Response:', response.data);
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
            Welcome Back 👋
          </motion.h2>
          <p className="text-gray-600 mb-6">Please sign in to continue</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <motion.div
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 shadow-lg"
            >
              Sign In
            </motion.button>

            <div className="text-center mt-4">
              <span className="text-gray-500">or</span>
              <p className="text-sm">Sign In With</p>
              <div className="flex justify-center gap-4 mt-2">
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer bg-blue-600 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition"
                >
                  <FaFacebook />
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer bg-gray-900 text-white p-2 rounded-full shadow-md hover:bg-gray-800 transition"
                >
                  <FaTwitter />
                </motion.p>
              </div>
            </div>

            <p className="text-sm mt-4 text-center">
              Don't have an account?{' '}
              <Link to='/signup' className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>

        {/* Logo Section */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-1/2 flex flex-col justify-center items-center p-10"
        >
          <img src={Logo} alt="Logo" className="mb-6" />
          <p className="text-gray-700 mb-4">Don't have an account?</p>
          <Link to='/signup' className="px-6 py-2 rounded-full border hover:bg-white duration-300 transition">Sign Up</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
