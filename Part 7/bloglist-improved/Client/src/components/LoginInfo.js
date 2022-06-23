import { useSelector,useDispatch } from 'react-redux'
import { login,logout } from '../reducers/userReducer'
import { useNavigate } from 'react-router-dom'
const LoginInfo=()=>{
      const navigate=useNavigate();
      const dispatch=useDispatch()
      const user=useSelector(state=>state.user)

      
      const handleLogout= event =>{
        event.preventDefault();
        
        window.localStorage.removeItem('loggedInUser')
        console.log("clicked logout")
        //setUser(null);
        dispatch(logout())
        navigate('/')
      }
      if(user)
      {
        return(
            <>
              {user.name} logged in <button onClick={handleLogout}>Log Out</button>
            </>)
          }
      }
      
    

export default LoginInfo;