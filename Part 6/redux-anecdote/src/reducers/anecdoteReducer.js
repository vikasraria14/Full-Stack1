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
    data:{
      id
    }      
  })   

}
export const addAnecdote=(anecdote)=>{
 // const data=asObject(anecdote)
    return (
     {
        type:'ADD',
        anecdote      
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
      
      const id=action.data.id;      
      const an=state.find(anecdote=>{return anecdote.id===id})      
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

export default reducer