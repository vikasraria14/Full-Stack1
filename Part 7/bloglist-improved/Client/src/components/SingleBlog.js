import {useParams} from 'react-router-dom'
import blogService from "../services/blogs"
import { useDispatch,useSelector } from "react-redux"
import { initializeBlogs,deleteBlog } from "../reducers/blogReducer"

const SingleBlog=()=>{
    const blogs=useSelector(state=>state.blogs)
    const user=useSelector(state=>state.user)
    const id=useParams().id
    const dispatch=useDispatch()
    const compareFun=(a,b)=>{
        //console.log("hello")
        return b.likes-a.likes
    
      }
      const blog=blogs.find(blo=>blo.id===id)
      console.log("Blog is",blog)


  const handleLike=async (event)=>{
    event.preventDefault()
    let newBlog={...blog,likes:blog.likes+1};
    console.log(newBlog,blog)
  //  newBlog.likes=newBlog.likes+1;
    await blogService.updateAll(blog.id,newBlog)
    
    const blogs=await blogService.getAll()
    const x=blogs.sort(compareFun)
    dispatch(initializeBlogs(x));
  }

  const handleComment=async(event)=>{
    event.preventDefault()
    const comment=[...blog.comments];

    console.log(comment)
    comment.push(event.target[0].value);
    let newBlog={...blog,comment};
    console.log(newBlog,blog)
  //  newBlog.likes=newBlog.likes+1;
    await blogService.updateComment(blog.id,newBlog)
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
if(blog)
{
    return(
        <div >
        
        <h3>
          {blog.title} by {blog.author} 
          
        
        </h3>
        <p>{blog.url}</p>
        <p>Likes {blog.likes} <button onClick={handleLike}>Like</button></p>
        <button onClick={handleDelete}> Remove </button>

        <h3>Comments</h3>
        <form onSubmit={handleComment}>
          <input type={"text"} name="comment" />
          <button>submit</button>
        </form>
        {blog.comments.map((comment,i)=><p key={i}>{comment}</p>)}
        
       
      </div>
    )
}

}
export default SingleBlog;