import { useDispatch,useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {addVote1,show} from '../reducers/showNotesReducer';
import { addNotification } from "../reducers/notificationReducer"
const AnecdotesList=()=>{
    const anecdotes = useSelector(state =>{
        
        return state.dotesToShow
    })
    console.log(anecdotes)
    const comp=(x,y)=>{
        console.log("x",x)
        return y.votes-x.votes
    }
    anecdotes.sort(comp);
    const dispatch = useDispatch()
    

    const vote = (id) => {
        const n=anecdotes.find(anecdote=>{return anecdote.id===id })
       const notification=n.content
      //  console.log("Hello Voter",notification)
        
        dispatch(addNotification(notification))
        
        dispatch(addVote(id));
        dispatch(addVote1(id))
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