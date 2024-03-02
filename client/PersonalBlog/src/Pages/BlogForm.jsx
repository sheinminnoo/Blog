import React, { useState } from 'react';
import Category from '../Components/Categories';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion';


const BlogForm = () => {
    let[title,setTitle] = useState('');
    let[description,setDescription] = useState('');
    let [category,setCategory] = useState([]);
    let [newCategory,setNewCategory] = useState('');
    let [imageUrl,setImageUrl] = useState('');
    let [errors,setErrors] = useState([]);

    let navigate = useNavigate();

    let addCategory =(e)=>{
       setCategory(prev =>[newCategory,...prev]);
       setNewCategory('')
    }
    
    let createBlog = async(e) =>{
        try{
            e.preventDefault();
            let data = {
                title,
                description,
                category,
                imageUrl
            };
            let res = await axios.post('http://localhost:3000/api/blogs',data);
            if(res.status==200){
                navigate('/');
            }
        }catch(e){
            setErrors(e.response.data.errors);
        }
    }
  return (
    <motion.div
    id="about"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 1 }}
    className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8 pt-20" // Updated background with gradient
    >
    <div className="max-w-lg mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg pt-20">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Create New Blog Post</h2>
      <form onSubmit={createBlog} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">
            Title
          </label>
          <input
            value={title}
            onChange={e=>setTitle(e.target.value)}
            type="text"
            id="title"
            name="title"
            className="mt-1 block w-full bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={e=>setDescription(e.target.value)}
            rows="3"
            className="mt-1 block w-full bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 rounded-md shadow-sm px-4 py-2"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mr-2">
            Category
          </label>
          <input
            value={newCategory}
            onChange={e=>setNewCategory(e.target.value)}
            type="text"
            id="category"
            name="categoryInput"
            className="mt-1 block w-full bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 rounded-md shadow-sm px-4 py-2"
            placeholder="Add Category"
          />
          <Category category={category} />
          <button
            onClick={addCategory}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md ml-2 hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          >
            Add
          </button>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={e=>setImageUrl(e.target.value)}
            name="imageUrl"
            className="mt-1 block w-full bg-gray-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 rounded-md shadow-sm px-4 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 border border-transparent text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        >
          Create Blog Post
        </button>
      </form>
    </div>
    </motion.div>
  );
};

export default BlogForm;
