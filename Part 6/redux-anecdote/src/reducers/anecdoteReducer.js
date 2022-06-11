
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

export const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
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
  const data=asObject(anecdote)
    return (
     {
        type:'ADD',
        data      
    }
    )

}


const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type)
  {
    case 'VOTE':
      
      const id=action.data.id;
      const an=state.find(anecdote=>{return anecdote.id===id})
      an.votes=an.votes+1;
      state=state.map(anecdote=>{return anecdote.id!==id?anecdote:an})
      state.sort(comparator)
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