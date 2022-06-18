import { useDispatch } from "react-redux";
import { addAnecdote,asObject } from "../reducers/anecdoteReducer";
import {refresh} from "../reducers/showNotesReducer"
import doteService from '../services/anecdotes'


const AnecdotesForm=()=>{
    const dispatch=useDispatch()
    const handleCreation=async(event)=>{
        event.preventDefault();
        
        const anecdote=event.target.field.value;
        const x=asObject(anecdote)
        const y=await doteService.setAll(x)
        console.log(y)
      //  const z={...y,votes:0}
        
       // console.log("z- ",z)
        
        dispatch(addAnecdote(x));
        dispatch(refresh(x))
        
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