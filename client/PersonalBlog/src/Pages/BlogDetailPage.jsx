import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BlogDetailPage() {
    let [blog, setBlog] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        let fetchBlog = async () => {
            let response = await fetch(`http://localhost:3000/api/blogs/${id}`);
            if (response.ok) {
                let data = await response.json();
                setBlog(data);
            }
        };
        fetchBlog();
    }, [id]);

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 pt-20" // Updated background with gradient
      >
        <div className="container mx-auto px-4 mt-20">
            {!!blog && (
                <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg"> {/* Reduced max-w-md */}
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-auto" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{blog.title}</div>
                        <p className="text-black-700 text-base">{blog.description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {blog.category.map((category) => (
                            <span
                                key={category}
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
        </motion.div>
    );
}
