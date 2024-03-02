import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const About = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 pt-20" // Updated background with gradient
    >
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3">
          <img
            className="w-40 h-40 rounded-full mx-auto mb-6"
            src="https://i1.sndcdn.com/avatars-SGotZSikougQ6uSz-AjnKxw-t500x500.jpg"
            alt="Profile"
          />
        </div>
        <div className="md:w-2/3 h-full">
          <h1 className="text-3xl font-bold text-white mb-6">About Me</h1>
          <p className="text-gray-200 mb-6">
            Welcome to my personal blog! My name is [Your Name] and I'm passionate about [Your Passion]. 
            I created this space to share my thoughts, experiences, and insights on [Your Topic/Niche].
          </p>
          <p className="text-gray-200 mb-6">
            I believe in the power of storytelling and how it connects us. Through this blog, I aim to 
            inspire, educate, and entertain my readers with compelling content.
          </p>
          <p className="text-gray-200 mb-6">
            Whether you're here to learn something new, find inspiration, or simply enjoy some good 
            reads, I hope you'll find what you're looking for. Feel free to explore the various topics
            I cover and don't hesitate to reach out if you have any questions or feedback!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-white mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2" />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" className="block w-full rounded-md bg-gray-800 text-white border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"></textarea>
          </div>
          <div className="col-span-2 text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default About;
