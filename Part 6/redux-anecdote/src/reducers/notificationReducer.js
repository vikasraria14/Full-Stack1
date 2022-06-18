import { createSlice } from "@reduxjs/toolkit";
const initialState=""
const notificationSlice=createSlice({
    name:"notification",
    initialState,
    reducers:{
        addNotification(state,action){
            const content=action.payload
            return content
        }
    }

})

export const {addNotification}=notificationSlice.actions;
export default notificationSlice.reducer