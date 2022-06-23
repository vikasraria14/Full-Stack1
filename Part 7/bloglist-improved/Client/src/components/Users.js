import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getAllUsers } from "../reducers/allUsersReducer";
import {Link } from 'react-router-dom'




const Users=()=>{
    const dispatch=useDispatch();
    console.log("hello")
   useEffect(()=>{
    
   },[])
   

    
    const allUsers=useSelector(state=>state.allUsers)
    console.log("Usersdfgh",allUsers)
    return(
        <div>
            
            <h3>Users</h3>            
            {allUsers===null?"No Data":
            (<table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Blogs Created</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        allUsers.map(user=><tr key={user.id}><td><Link to={`${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>)
                    }
                    
                        
                </tbody>
            </table>)
                        
            }
            
            
            
        </div>
    )
}
export default Users