import { useDispatch } from "react-redux";
import { asObject } from "../reducers/anecdoteReducer";
import { initializeDotes } from "../reducers/showNotesReducer";
import { createNew1 } from "../reducers/anecdoteReducer";

const AnecdotesForm=()=>{
    const dispatch=useDispatch()
    const handleCreation=async(event)=>{
        event.preventDefault();
        
        const anecdote=event.target.field.value;
        event.target.field.value=''
        const x=asObject(anecdote)
       await dispatch(createNew1(x))
       dispatch(initializeDotes())
       
        
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