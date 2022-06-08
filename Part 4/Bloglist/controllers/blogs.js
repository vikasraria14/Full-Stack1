const blogRouter=require('express').Router();
const Blog= require('../models/blog')
const User=require('../models/user')
const jwt=require('jsonWebToken')



blogRouter.get('/', async (request, response) => {
    const blogs=await Blog.find({}).populate('user')    
    response.json(blogs)
      
  })


  
  blogRouter.post('/', async (request, response) => {
    
    const decodedToken=jwt.verify(request.token,process.env.SECRET)
    
    const user=await User.findById(decodedToken.id)
    
    const blog = new Blog({
      "title":request.body.title,
      "author":request.body.author,
      "url":request.body.url,
      "likes":request.body.likes,
      "user":user._id
    })  
    console.log(typeof(blog.likes))
    const savedBlog=await blog.save()  
    user.blogs=user.blogs.concat(savedBlog._id)    
    await user.save()
   response.status(201).json(savedBlog)
      
  })
  

  blogRouter.delete('/:id',async (request, response)=>{
    const decodedToken=jwt.verify(request.token,process.env.SECRET)
   // console.log(decodedToken, typeof(decodedToken._id))
      const blogToDelete=await Blog.findById(request.params.id);
   //   console.log(blogToDelete.user.toString(), typeof(blogToDelete.user.username))
      if(!(blogToDelete.user.toString()===decodedToken.id.toString()))
      {
        console.log(blogToDelete.user.toString(),decodedToken.id.toString())
      return  response.status(402).json({
          error:"Cannot Delete"
        })
      }
      await Blog.findByIdAndRemove(request.params.id)
      response.status(204).end()
  })

  blogRouter.put('/:id',async(request, response)=>{
      const newBlog={
        title: request.body.title,
        author: request.body.author,
        url: request.body.url,
        likes: request.body.likes
      }
      console.log(newBlog)
      const res=await Blog.findByIdAndUpdate(request.params.id,newBlog,{new:true})
      response.json(res);

  })

  module.exports=blogRouter;