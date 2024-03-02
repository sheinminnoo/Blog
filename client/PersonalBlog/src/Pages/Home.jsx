import React, { useEffect, useState } from 'react';
import BlogCard from '../Components/BlogCard';
import { motion } from 'framer-motion';

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/blogs');
                if (response.ok) {
                    const data = await response.json();
                    setBlogs(data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="container mx-auto py-8 pt-20 pl-10 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
                <h1 className="text-3xl font-bold mb-4">Recent Blogs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {blogs.map(blog => (
                        <BlogCard blog={blog} key={blog._id}/>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
