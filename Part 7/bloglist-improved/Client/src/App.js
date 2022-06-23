import { useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import {initializeBlogs} from './reducers/blogReducer'
import { useSelector,useDispatch } from 'react-redux'
import { login,logout } from './reducers/userReducer'
import {BrowserRouter as Router, Routes,Route,Link ,useNavigate} from 'react-router-dom'
import User from './components/User'
import Users from './components/Users'
import AllBlogs from './components/AllBlogs'
import { getAllUsers } from './reducers/allUsersReducer'
import SingleBlog from './components/SingleBlog'
import Navigation from './components/Navigation'
import FormPage from './components/FormPage'
import SignUp from './components/SignUp'


 


const App = () => {
 // const navigate=useNavigate()
  const dispatch=useDispatch()
  //const [blogs, setBlogs] = useState([])
  //const [user, setUser]=useState(null)
  const blogs=useSelector(state=>state.blogs)
  const user=useSelector(state=>state.user)
  const allUsers=useSelector(state=>state.allUsers)
  
  console.log(allUsers)
  //console.log(blogs)
  const compareFun=(a,b)=>{
    //console.log("hello")
    return b.likes-a.likes

  }
  useEffect(() => {
   /* blogService.getAll().then(blogs =>{
      setBlogs( blogs )
      blogs.sort(compareFun);
      */
     dispatch(initializeBlogs())
     dispatch(getAllUsers())
    
  //  }
 //   ) 
    const loggedInUser1=window.localStorage.getItem('loggedInUser')
    if(loggedInUser1)
    {
      const us=JSON.parse(loggedInUser1)
      //setUser(us);
      dispatch(login(us))
    } 
  }, [])

  
  

  
  
 
  
  
  //console.log(blogs)

  if(user===null)
  {
    return(
      <div className='container'>
      
      
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<AllBlogs blogs={blogs}/>}/>

        </Routes>
      </Router>
      </div>
    
     
    )
  }
  else
  {
    return (
      <div className='container'>
        
          
        <Router>
          <Navigation/>
        
          <h2>blogs</h2>
        
          
          
        
          <Routes>
            
            <Route path="/users/:id" element={<User/>}/>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/blogs/create' element={<BlogForm/>}/>
            <Route path='/blogs/:id' element={<SingleBlog/>}/>
            <Route path='/' element={<AllBlogs blogs={blogs}/>}/>
            
            
          </Routes>
        
          
          
        </Router>
      </div>
    )
  }
 
}

export default App
