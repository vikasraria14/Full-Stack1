import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
const User=()=>{
   
    const id=useParams().id
    const users=useSelector(state=>state.allUsers)
    let user=null;
    console.log(users)
    if(users)
    {
        console.log(users)
        user=users.find(usr=>usr.id===id)

    }
    
        if(user)
        {
            return(
                <div>
                    
                    <h1>{user.name}</h1>
                    <h3>Added Blogs</h3>
                    {console.log(id)}
                    {user.blogs.map(blog=><p key={blog.id}><Link to={`/blogs/${blog.id}`}>{blog.title}</Link></p>)}
                    
                </div>
            )
        }
        
    
}
export default User;