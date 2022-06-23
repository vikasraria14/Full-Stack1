import { Link, useNavigate } from "react-router-dom";
import LoginInfo from "./LoginInfo";
import {Navbar,Nav,Container} from 'react-bootstrap'
import { useSelector } from "react-redux";

const Navigation=()=>{
    const user=useSelector(state=>state.user)
    //const navigate=useNavigate()
    if(!user)
    {
        return(
            <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Blogs</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#" as="span" >
                            <Link to='/' style={{color:"white"}}>blogs</Link> 
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link to='/login' style={{color:"white"}} >Sign In</Link> 
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link to='/signup' style={{color:"white"}}>Sign Up</Link>
                        </Nav.Link>
                        
                    </Nav>
                    </Container>
                </Navbar>
        )
    }
    else{
    return(
        
        <>
            
               
                <Navbar bg="primary" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Blogs</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#" as="span" >
                            <Link to='/' style={{color:"white"}}>blogs</Link> 
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link to='/users' style={{color:"white"}} >Users</Link> 
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                            <Link to='/blogs/create' style={{color:"white"}}>create</Link>
                        </Nav.Link>
                        <Nav.Link href="#" as="span">
                           { user?<LoginInfo/>:<Link to='/login'>Login</Link>}
                        </Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>

                <br />
               
                
        </>

       
    )
    }
}
export default Navigation;

/*<>

 
 
 
</>*/