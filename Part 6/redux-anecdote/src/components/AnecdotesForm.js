import { useDispatch } from "react-redux";
import { addAnecdote } from "../reducers/anecdoteReducer";
const AnecdotesForm=()=>{
    const dispatch=useDispatch()
    const handleCreation=(event)=>{
        event.preventDefault();
        
        const anecdote=event.target.field.value;
        return dispatch(addAnecdote(anecdote));
        
    }

    return(
        <div>
            <h2 >create new</h2>
            <form onSubmit={handleCreation}>
                <div><input name='field'/></div>
                <button>create</button>
            </form>
        </div>
    )
}
export default AnecdotesForm