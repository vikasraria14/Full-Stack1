import { useDispatch,useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
const AnecdotesList=()=>{
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(anecdotes)

    const vote = (id) => {
        console.log('vote', id)
        dispatch(addVote(id));
        
    }
    return (
        <div>
            <h2>Anecdotes</h2>
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