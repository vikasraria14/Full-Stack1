import { Link } from "react-router-dom";
import LoginInfo from "./LoginInfo";
const Navigation=()=>{
    return(
        <>
            <Link to='/'>blogs</Link> 
             <Link to='/users' >Users</Link> 
             <Link to='/blogs/create'>create</Link>
             <LoginInfo/>
        </>
    )
}
export default Navigation;