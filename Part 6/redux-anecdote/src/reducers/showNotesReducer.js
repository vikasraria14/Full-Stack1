import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./anecdoteReducer";
import doteService from '../services/anecdotes'

 //const initialStates=[];
 //console.log(initialState, initialStates)

 const comparator=(a,b)=>{
    // console.log(a.id,b.id)
     return b.votes-a.votes
   }

const showNotesSlice=createSlice({
    name:"dotesToShow",
    initialState,
    reducers:{
        setState1(state, action)
        {
          //  console.log(action.payload)
            //console.log(state)
            return state=action.payload
            
        },
        show(state,action)
        {
           // console.log("H1",action.payload)
            const tex=action.payload.tex
           console.log(action.payload.fullState)
           
            const x= action.payload.fullState.filter(dote=>{
                return dote.content.toLowerCase().includes(tex.toLowerCase())
            
            })
            
            return x
        },
        addVote1(state,action)
        {
            const id=action.payload;
           // console.log(state)
            const incVoteOf=state.find(dote=>{
            //    console.log(dote)
                return dote.id===id})
            const x={...incVoteOf,votes:incVoteOf.votes+1}
            const y=state.map(dote=>dote.id!==id?dote:x)
            y.sort(comparator)
            
        },
        refresh(state,action)
        {
         //   console.log(action.payload)
            const x=state.concat(action.payload)
            state=x;
            return state
        }
    }
})

export const initializeDotes=()=>{
    return async dispatch=>{
        const dotes=await doteService.getAll()
        dotes.sort(comparator)
        dispatch(setState1(dotes))
    }
}

export const createNew=(dat)=>{
    return async dispatch=>{
        const newDote=await doteService.setAll(dat)
        dispatch(refresh(newDote))
    }
}


export const {addVote1,show,refresh,setState1}=showNotesSlice.actions
export default showNotesSlice.reducer
