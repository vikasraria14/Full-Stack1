import { useDispatch,useSelector } from "react-redux";
import { incVote } from "../reducers/anecdoteReducer";
import {show,initializeDotes} from '../reducers/showNotesReducer';
import { setNotification} from "../reducers/notificationReducer"
const AnecdotesList=()=>{
    const anecdotes = useSelector(state =>{
        
        return state.dotesToShow
    })
    console.log(anecdotes)

    /*
    const comp=(x,y)=>{
        console.log("x",x)
        return y.votes-x.votes
    }
    anecdotes.sort(comp);

    */
    const dispatch = useDispatch()
    

    const vote = async (id) => {
        const n=anecdotes.find(anecdote=>{return anecdote.id===id })
       
      //  console.log("Hello Voter",notification)
     
      const am={...n,votes:n.votes+1}
        
        
       dispatch(setNotification(`You voted for ${n.content}!!`,2000)) 
       await dispatch(incVote(id,am))
       dispatch(initializeDotes())
       // dispatch(addVote1(id))
       // dispatch(addVote(id));
        dispatch(show)
      //  console.log('vote', id)
        

        
    }
    return (
        <div>
            <h2>Anecdotes</h2>
            {//console.log("hello ",anecdotes)}
            }
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                
                <div>
                   
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}
export default AnecdotesList;