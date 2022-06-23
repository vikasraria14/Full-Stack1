import {Form,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useState } from "react";
import Notification from "./Notification";
import setAll from '../services/signup'
import blogService from "../services/blogs";
import { useDispatch } from "react-redux";
//import signupService from '../services/signup'

const SignUp=()=>{

    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [name,setName]=useState('')
    const dispatch=useDispatch()
    const [loginError,setLoginError]=useState(null)

    

    const handleUsername= event =>{
        const x=event.target.value;
        console.log(x)
        setUsername(x);
    
      }
      const handleName= event =>{
        const x=event.target.value;
        console.log(x)
        setName(x);
    
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
            const signupData={
              name,username,password
            }
            const res=await setAll(signupData)
          //  setUser(res)
            //dispatch(signup(res))
            
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
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={name} onChange={handleName}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter email" value={username} onChange={handleUsername}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  value={password} onChange={handlePassword}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              <Link style={{color:"white"}}to='/login'>Submit</Link>
            </Button>
          </Form>
        </div>
      )
}
export default SignUp