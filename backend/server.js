const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
app.use(morgan("dev"));
const cors = require('cors');
app.use(cors());
const blogRoutes = require('./Routes/blog')

let mongoURL = 'mongodb+srv://sheinminoo69:2004142SHEIN@cluster0.11hdmoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURL).then(()=>{
    console.log("MongoDB is connected");
    app.listen(process.env,(req,res)=>{
        return console.log("app is listening on Server Port 5000")
    })
});

app.use('/api/blogs',blogRoutes)
app.get('/',function(req,res){
    return res.json({msg : "app is listening"})
})
