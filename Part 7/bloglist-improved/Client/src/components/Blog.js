import { useState } from "react"
import { initializeBlogs,deleteBlog } from "../reducers/blogReducer"
import blogService from "../services/blogs"
import { useDispatch } from "react-redux"

//import '../App.css'
const Blog = ({blog,compareFun,user}) => {
  const [loginVisible, setLoginVisible] = useState(false)
  const hideWhenVisible={'display':loginVisible?'none':''}
  const showWhenVisible={'display':loginVisible?'':'none'}
 // console.log(blog.user.toString(), typeof(blog.user))
const dispatch=useDispatch()
  const handleLike=async ()=>{
    let newBlog={...blog,likes:blog.likes+1};
    console.log(newBlog,blog)
  //  newBlog.likes=newBlog.likes+1;
    await blogService.updateAll(blog.id,newBlog)
    
    const blogs=await blogService.getAll()
    const x=blogs.sort(compareFun)
    dispatch(initializeBlogs(x));
  }
     
      
  const handleDelete=async (event)=>{
    event.preventDefault()
    const conf= window.confirm(`Do you want to delete ${blog.title}`)
    if(!conf)
    {
      return 0;
    }
    await blogService.setToken(user.token)
    await blogService.deleteAll(blog.id)
    dispatch(deleteBlog(blog,user))
   
  }

  return(
    <div >
       
        <div >
          {blog.title} by {blog.author}  
         
        </div>  
       
          
      
    </div>
  )
  
  }

export default Blog