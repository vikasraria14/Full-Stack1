import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer from './anecdoteReducer'
import notificationReducer from "./notificationReducer";
import filterReducer from './showNotesReducer'
//import { createStore } from "redux";
//console.log("store the" ,filterReducer)
const store = configureStore({
    reducer:{
        dotesToShow:filterReducer,
        anecdote1:anecdoteReducer,
    notification:notificationReducer
    
    }
})
//console.log(store.getState())
export default store;