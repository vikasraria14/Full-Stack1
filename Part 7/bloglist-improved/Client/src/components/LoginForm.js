import {Form,Button} from 'react-bootstrap'
import { useState } from "react";
import Notification from "./Notification";
import setAll from '../services/login'
import blogService from "../services/blogs";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
const LoginForm=()=>{

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
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={username} onChange={handleUsername}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" type='password' value={password} onChange={handlePassword}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm;