import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const allUsersSlice=createSlice({
    name:"allUsers",
    initialState:null,
    reducers:{
        setAllUsers(state,action)
        {
            return state=action.payload
        }
    }
})

export const getAllUsers=()=>{
    console.log("All users")
   
    
    
    
    return async dispatch=>{
        const response=await axios.get("http://localhost:3003/api/users")
        const all=response.data
        dispatch(setAllUsers(all))
    }
}

export const {setAllUsers}=allUsersSlice.actions
export default allUsersSlice.reducer