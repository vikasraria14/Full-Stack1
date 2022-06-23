import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

let initialState=[];
blogService.getAll().then(
    response=> initialState=response.data
)
const blogSlice=createSlice({
    name:"blogs",
    initialState,
    reducers:{
        setBlogs(state,action)
        {
            //console.log(action.payload)
            return state=action.payload;
        },
        appendBlog(state,action)
        {
            state.push(action.payload)
        },
        deleteBlog1(state,action)
        {
            return state=action.payload;
        }
        
    }
})

export const initializeBlogs=()=>{
    //console.log("here")
    return async dispatch=>{
        const response= await blogService.getAll()
       // console.log(response)
        dispatch(setBlogs(response))
    }
}

export const newBlog=(dat)=>{
    return dispatch=>{
        dispatch(appendBlog(dat))
    }
}

export const deleteBlog=(blog,user)=>{
   
    return async dispatch=>{
        const response= await blogService.getAll()
       // console.log(response)
        dispatch(deleteBlog1(response))
    }

    
}


export const {setBlogs,appendBlog,deleteBlog1}=blogSlice.actions
export default blogSlice.reducer