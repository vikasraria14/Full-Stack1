import { useState } from "react"
import blogService from "../services/blogs"
import '../App.css'
const Blog = ({blog,setBlogs,compareFun,user}) => {
  const [loginVisible, setLoginVisible] = useState(false)
  const hideWhenVisible={'display':loginVisible?'none':''}
  const showWhenVisible={'display':loginVisible?'':'none'}
 // console.log(blog.user.toString(), typeof(blog.user))

  const handleLike=async ()=>{
    let newBlog=blog;
    newBlog.likes=newBlog.likes+1;
    await blogService.updateAll(blog.id,newBlog)
    
    const blogs=await blogService.getAll()
    const x=blogs.sort(compareFun)
    setBlogs(x);
  }
     
      
  const handleDelete=async (event)=>{
    event.preventDefault()
    const conf= window.confirm(`Do you want to delete ${blog.title}`)
    if(!conf)
    {
      return 0;
    }
    blogService.setToken(user.token)
    await blogService.deleteAll(blog.id)
    const blogs=await blogService.getAll()
    const x=blogs.sort(compareFun)
    setBlogs(x);
  }

  return(
    <div className="blogStyle">
        <div style={hideWhenVisible}>
          {blog.title} by {blog.author}  
          <button  onClick={()=>{setLoginVisible(true)}}>View</button>
        </div>  
        <div style={showWhenVisible}>
          <h3>
            {blog.title} by {blog.author} 
            <button  onClick={()=>{setLoginVisible(false)}}>Hide</button>
          
          </h3>
          <p>{blog.url}</p>
          <p>Likes {blog.likes} <button onClick={handleLike}>Like</button></p>
          <button onClick={handleDelete}> Remove </button>
          
         
        </div>
    </div>
  )
  
  }

export default Blog