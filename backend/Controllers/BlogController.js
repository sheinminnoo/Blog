const mongoose = require('mongoose')
const Blog = require('../Models/Blog')

const BlogController = {
    getBlogs : async(req,res)=>{
        let blogs = await Blog.find().sort({createdAt : -1});
        return res.json(blogs)
    },

    create : async(req,res)=>{
        try{
            let {title,description,category,imageUrl} = req.body;
            let blog = await Blog.create({
                title,
                description,
                category,
                imageUrl
            });
            return res.json(blog)
        }catch(e){
            console.log(e)
        }
    },

    read : async (req,res)=>{
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({msg : "Not a valid Error"}).status(400)
            }
            let blog = await Blog.findById(id);
            if(!blog){
                return res.json({msg: "Not Found Blog"}).status(404)
            }
            return res.json(blog)
        }catch(e){
            return res.json({msg:"Oops! Internet Server Error."})
        }
    },

    update : async (req,res) =>{
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({msg:"Not a valid Id"}).status(400)
            }
            let blog = await Blog.findByIdAndUpdate(
                id,{
                    ...req.body
                }
                );
            if(!blog){
                return res.json({msg : "Not Found Blog"}).status(404)
            }
            return res.json(blog)
        }catch(e){
            return res.json({msg : "Opps! Internet Server Error"}).status(500)
        }
    },

    delete : async(req,res)=>{
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({msg:"Not a valid Id"}).status(400)
            };
            let blog = await Blog.findByIdAndDelete(id)
            if(!blog){
                return res.json({msg : 'Not found Blog'}).status(404)
            };
            return res.json(blog)
        }catch(e){
            return res.json({msg:"Opps Internet Server Error"}).status(500)
        }
    }
}

module.exports = BlogController