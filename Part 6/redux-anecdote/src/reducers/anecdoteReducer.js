import doteService from '../services/anecdotes'

const anecdotesAtStart = [
  
  ]



export const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0
  }
}

const comparator=(a,b)=>{
 // console.log(a.id,b.id)
  return b.votes-a.votes
}

export const addVote=(id)=>{
  
 return ({
    type:'VOTE',
    data:id
    
  })   

}
export const addAnecdote=(anecdote)=>{
 // const data=asObject(anecdote)
    return (
     {
        type:'ADD',
        data:anecdote      
    }
    )

}

export const setState=(data)=>{
 return ({
  type:"SET_STATE",
  data
 })
}


export const initialState = anecdotesAtStart.map(asObject)


//const anecdoteSlice=createSlice({})

const reducer = (state=initialState, action) => {
 // console.log('state now: ', state)
 // console.log('action', action)

  switch(action.type)
  {
    case 'SET_STATE':
      return state=[...action.data]

    case 'VOTE':
      
      const id=action.data;      
      const an=state.find(anecdote=>{return anecdote.id===id}) 
      console.log(an)     
      const am={...an,votes:an.votes+1}      
      const y=state.map(anecdote=>{
      //  console.log(anecdote)
        return anecdote.id!==id?anecdote:am})      
      y.sort(comparator)
      state=y;
      
      return state;
    case 'ADD':
      const x=state.concat(action.data)
      state=x;
      return state
    default:
      return state
  }

  
}

export const initializeDotes1 =()=>{
  return async dispatch=>{
    const dotes= await doteService.getAll()
    dispatch({ 
      type:"SET_STATE",
      data:dotes
    })
  }
}

export const createNew1= dat =>{
  return async dispatch =>{
    const dote=await doteService.setAll(dat)
    console.log(dote)
    dispatch({
      type:"ADD",
      data:dote
    })
  //  dispatch(initializeDotes())
  }
}

export const incVote=(id,dat)=>{
  
  return async dispatch =>{
    
      doteService.updateAll(id,dat)

      
  }
}


            
    

export default reducer