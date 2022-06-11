import { useState } from "react"
import blogService from "../services/blogs"
import Notification from "./Notification"
const BlogForm=({user,setBlogs})=>
{
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [url,setUrl]=useState('')
    const [blogCreation,setBlogCreation]=useState(null)
    const [loginVisible, setLoginVisible] = useState(false)
    const hideWhenVisible={'display':loginVisible?'none':''}
    const showWhenVisible={'display':loginVisible?'':'none'}


    const handleBlogCreation= async (event) =>
    {
        event.preventDefault()
        const blog={
        title,author,url,likes:0
        }
        console.log(blog)
       // setTitle('');
       // setAuthor('');
       // setUrl('')

        blogService.setToken(user.token)
        await blogService.setAll(blog)
        setBlogCreation('New Blog Created')
        blogService.getAll().then(blogs =>
            setBlogs( blogs )
          ) 
        setTimeout(()=>{
        setBlogCreation(null)
        },2000)
    }

    return(
        <div>
            <div style={hideWhenVisible}>
                <button  onClick={()=>{setLoginVisible(true)}}>Create Blog</button>
            </div>
            <Notification message={blogCreation} name={'success'}/>
            <div style={showWhenVisible}>
            
                <h1>Create New Blog</h1>
                <form>
                Title: <input onChange={({target})=>setTitle(target.value)}/><br/><br/>
                Author:<input onChange={({target})=>setAuthor(target.value)}/><br/><br/>
                URL:   <input onChange={({target})=>setUrl(target.value)}/><br/><br/>
                <button onClick={handleBlogCreation}>Create</button>  
                <button  onClick={()=>{setLoginVisible(false)}}> Cancel </button>
                </form>
                
            </div>
        </div>
    )
}
export default BlogForm