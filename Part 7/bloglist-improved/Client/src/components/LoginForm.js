import { useState } from "react";
import Notification from "./Notification";
import setAll from '../services/login'
import blogService from "../services/blogs";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
const LoginForm=({setUser,setBlogs})=>{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const dispatch=useDispatch()
    const [loginError,setLoginError]=useState(null)

    const [loginVisible, setLoginVisible] = useState(false)
    const hideWhenVisible={'display':loginVisible?'none':''}
    const showWhenVisible={'display':loginVisible?'':'none'}

    const handleUsername= event =>{
        const x=event.target.value;
        console.log(x)
        setUsername(x);
    
      }
      const handlePassword= event =>{
        const x=event.target.value;
        console.log(x)
        setPassword(x);
      }
    
      const handleSubmit=async (event)=>{
        event.preventDefault();
        try
        {
            const loginData={
              username,password
            }
            const res=await setAll(loginData)
          //  setUser(res)
            dispatch(login(res))
            
           /* blogService.getAll().then(blogs =>
                setBlogs( blogs )
              ) 
              
            window.localStorage.setItem('loggedInUser', JSON.stringify(res) )
        }*/
      }
        catch(error)
        {
          setLoginError(error.message)
          setTimeout(()=>{
            setLoginError(null)
          },2000)
          console.log(error.message)
        }
        
      }

   
    return(
        <div>
            <div style={hideWhenVisible}>
            <button  onClick={()=>{setLoginVisible(true)}}>Login</button>
            </div>
            <div style={showWhenVisible}>
                <h1>Login</h1>
                <Notification message={loginError} name={'failure'}/>
                <form >
                Username: <input value={username} onChange={handleUsername}/> <br/> <br/>
                Password: <input type='password'value={password} onChange={handlePassword}/> <br/> <br/>
                <button onClick={handleSubmit}>Submit</button>
                
                </form>
                <button  onClick={()=>{setLoginVisible(false)}}> Cancel </button>
            </div>
        </div>
    )
}
export default LoginForm;