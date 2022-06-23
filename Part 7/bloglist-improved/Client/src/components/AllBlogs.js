import { Link } from "react-router-dom"
import Blog from "./Blog"
import { Table } from "react-bootstrap"
const AllBlogs=({blogs})=>{
    const compareFun=(a,b)=>{
        //console.log("hello")
        return b.likes-a.likes
    
      }


    return(
        <div>
          
          <Table striped bordered hover>
          <thead>
            <tr><td>All Blogs</td><td>Comments</td></tr>
          </thead>
          <tbody>
            {blogs.map(blog =>
           
              <tr key={blog.id}>
              <td> <Link to={`/blogs/${blog.id}`} ><Blog  blog={blog} /*setBlogs={setBlogs}*/ compareFun={compareFun} /*user={user}*/ /></Link></td>
              <td>Nice</td>
              </tr>
             
            )}
            </tbody>
          </Table>
        </div>
    )
}
export default AllBlogs