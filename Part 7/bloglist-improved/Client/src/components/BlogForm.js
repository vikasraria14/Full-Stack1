import { useState } from "react"
import blogService from "../services/blogs"
import Notification from "./Notification"
import { setNotification } from "../reducers/notificationReducer"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import LoginInfo from './LoginInfo'
import { initializeBlogs } from "../reducers/blogReducer"
import { useNavigate } from "react-router-dom"
const BlogForm=({setBlogs})=>
{
  const navigate=useNavigate();
    const dispatch=useDispatch()
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [url,setUrl]=useState('')
    const user=useSelector(state=>state.user)
  //  const [blogCreation,setBlogCreation]=useState(null)
    const [loginVisible, setLoginVisible] = useState(false)
    const hideWhenVisible={'display':loginVisible?'none':''}
    const showWhenVisible={'display':loginVisible?'':'none'}

    const notification=useSelector(state=>{
       // console.log(state)
        return state.notification
    })
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
      //  setBlogCreation('New Blog Created')
        dispatch(setNotification("new blog created",2))
        await blogService.getAll()
        dispatch(initializeBlogs())
        navigate('/')
        setTimeout(()=>{
      //  setBlogCreation(null)
        },2000)
    }

    return(
        <div>
            <LoginInfo/>
            
            <Notification message={notification} name={'success'}/>
            <div >
            
                <h1>Create New Blog</h1>
                <form>
                Title: <input onChange={({target})=>setTitle(target.value)}/><br/><br/>
                Author:<input onChange={({target})=>setAuthor(target.value)}/><br/><br/>
                URL:   <input onChange={({target})=>setUrl(target.value)}/><br/><br/>
                <button onClick={handleBlogCreation}>Create</button>  
                
                </form>
                
            </div>
        </div>
    )
}
export default BlogForm