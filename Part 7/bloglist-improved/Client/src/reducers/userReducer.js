import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:"Users",
    initialState:null,
    reducers:{
        setUser(state,action)
        {
            return action.payload
        },
        removeUser(state,action)
        {
            return state=null
        },
        
    }
})

export const login=(res)=>{
    return async dispatch=>{
        window.localStorage.setItem('loggedInUser', JSON.stringify(res) )
        dispatch(setUser(res))
    }
}
export const logout=()=>{
    console.log("logout reducer")
    return async dispatch=>{
        dispatch(removeUser())
    }
}


export const {setUser,removeUser,createUser}=userSlice.actions
export default userSlice.reducer