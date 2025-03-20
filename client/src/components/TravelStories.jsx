import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegPlayCircle } from "react-icons/fa";


const testimonials = [
  {
    id: 1,
    name: 'Tom Haye',
    role: 'Travel Vlogger',
    text: "This app has completely transformed how I plan my trips! It's incredibly user-friendly, and booking everything from flights to hotels is seamless. It's definitely my go-to for all travel needs and recommendations.",
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Anna Lee',
    role: 'Adventure Blogger',
    text: "I love how easy it is to discover hidden gems with this app. The recommendations are spot-on, and the interface makes it fun and simple to explore new destinations!",
    image: 'https://images.unsplash.com/photo-1517436073-95cf4b9b3cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'James Carter',
    role: 'Freelance Photographer',
    text: "As a photographer, finding scenic spots is a must. This app's suggestions have helped me discover breathtaking locations I wouldn't have found otherwise. Highly recommend it!",
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  }
];

const userTypes = ['Travel Vlogger', 'Adventure Blogger', 'Freelance Photographer'];

export default function TravelStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentType, setCurrentType] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentType((prev) => (prev + 1) % userTypes.length);
    }, 3000); // Cycle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold text-gray-900">
            Hear what our users <span className="text-teal-600">have to say!</span>
          </h2>
        </motion.div>

        {/* User Types */}
        <div className="flex justify-center gap-16 mb-12">
          {userTypes.map((type, index) => (
            <motion.span
              key={index}
              className={`text-lg  font-medium cursor-pointer transition-all ${currentType === index ? 'text-teal-600 scale-110' : 'text-gray-600 hover:text-teal-500'
                }`}
            >
              {type}
            </motion.span>
          ))}
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              <blockquote className="text-lg text-gray-700">
                "{testimonials[activeIndex].text}"
              </blockquote>

              <div className="mt-4 text-right">
                <p className="font-medium text-gray-900">{testimonials[activeIndex].name}</p>
                <p className="text-gray-500">{testimonials[activeIndex].role}</p>
              </div>

              <div className="flex justify-between gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-500 transition"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-teal-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-teal-500 transition"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <motion.div
            key={testimonials[activeIndex].image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="rounded-lg w-full h-[400px] object-cover shadow-md"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <button className="bg-white/80 backdrop-blur-sm p-4 rounded-full hover:bg-white/90 transition-all shadow-lg">
                <FaRegPlayCircle className="w-8 h-8 text-teal-600" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
