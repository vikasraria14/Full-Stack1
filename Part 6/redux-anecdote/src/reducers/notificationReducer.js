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
export const setNotification=(dat,tim)=>{
    return async dispatch=>{
        dispatch(addNotification(dat))
        setTimeout(()=>{
            dispatch(clearNotification())
        },tim)
    }
}
export const {addNotification,clearNotification}=notificationSlice.actions;
export default notificationSlice.reducer