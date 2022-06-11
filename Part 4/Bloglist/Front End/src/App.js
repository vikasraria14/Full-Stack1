import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser]=useState(null)
  
  
  const compareFun=(a,b)=>{
    //console.log("hello")
    return b.likes-a.likes

  }
  useEffect(() => {
    blogService.getAll().then(blogs =>{
      setBlogs( blogs )
      blogs.sort(compareFun);
    }
    ) 
    const loggedInUser1=window.localStorage.getItem('loggedInUser')
    if(loggedInUser1)
    {
      const us=JSON.parse(loggedInUser1)
      setUser(us);
    } 
  }, [])

  
  const handleLogout= event =>{
    event.preventDefault();
    window.localStorage.removeItem('loggedInUser')
    setUser(null);
  }
  
 
  
  
  //console.log(blogs)

  if(user===null)
  {
    return(
      <div>
         <LoginForm setUser={setUser}  />
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} setBlogs={setBlogs} compareFun={compareFun} user={user} />
        )}
      </div>
    
     
    )
  }
  else
  {
    return (
      <div>
        <h2>blogs</h2>
       
        
        <h3>{user.name} logged in <button onClick={handleLogout}>Log Out</button></h3>
        <BlogForm  user={user} setBlogs={setBlogs} />
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} setBlogs={setBlogs} compareFun={compareFun} user={user} />
        )}
      </div>
    )
  }
 
}

export default App
