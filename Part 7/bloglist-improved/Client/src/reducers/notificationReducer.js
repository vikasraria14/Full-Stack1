import { createSlice } from "@reduxjs/toolkit";
const initialState=null
const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
        addNotification(state,action){
            const content=action.payload
            return content
        },
        clearNotification(state,action)
        {
            const x=null;
            state=x;
            return state
        }
    }

})

let x=null;
export const setNotification=(dat,tim)=>{
    console.log(dat,tim)
    
    return async dispatch=>{
        if(x)
        {
           
            window.clearTimeout(x)
        }
       
        dispatch(addNotification(dat))
        
        x=setTimeout(()=>{
            dispatch(clearNotification())
        },tim*1000)
       
        
    }
}
export const {addNotification,clearNotification}=notificationSlice.actions;
export default notificationSlice.reducer