import { Link } from "react-router-dom"
import Blog from "./Blog"
const AllBlogs=({blogs})=>{
    const compareFun=(a,b)=>{
        //console.log("hello")
        return b.likes-a.likes
    
      }


    return(
        <div>
          
          
            {blogs.map(blog =>
            <Link to={`/blogs/${blog.id}`} key={blog.id}><Blog  blog={blog} /*setBlogs={setBlogs}*/ compareFun={compareFun} /*user={user}*/ /></Link>
          )}
        </div>
    )
}
export default AllBlogs