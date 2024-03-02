import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Components/Categories'

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`} key={blog._id}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg px-0 bg-gray-100"> {/* Added bg-gray-100 for background color */}
        <img 
          src={blog.imageUrl} 
          alt={blog.title} 
          className="w-full h-auto" 
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blog.title}</div>
          <p className="text-gray-700 text-base">
            {blog.description}
          </p>
        </div>
        <Category category={blog.category} />
      </div>
    </Link>
  );
};

export default BlogCard;
