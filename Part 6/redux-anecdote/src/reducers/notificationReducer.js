import { createSlice } from "@reduxjs/toolkit";
const initialState=""
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
            const x="";
            state=x;
            return state
        }
    }

})

let x=null;
export const setNotification=(dat,tim)=>{
    
    
    return async dispatch=>{
        if(x)
        {
           
            window.clearTimeout(x)
        }
       
        dispatch(addNotification(dat))
        
        x=setTimeout(()=>{
            dispatch(clearNotification())
        },tim)
       
        
    }
}
export const {addNotification,clearNotification}=notificationSlice.actions;
export default notificationSlice.reducer