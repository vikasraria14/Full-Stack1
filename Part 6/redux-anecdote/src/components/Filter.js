import { show } from "../reducers/showNotesReducer";
import { useDispatch,useSelector } from "react-redux";
const Filter=()=>{
    const state=useSelector(state=>state.anecdote1)
    const dispatch=useDispatch()
    const handleFilter=(event)=>
    {
        event.preventDefault();
        const x=event.target.value
        console.log(state)
        dispatch(show({tex:x,fullState:state}))
    }
    return(
        <div>
            filter <input onChange={handleFilter}/>
        </div>
    )
}
export default Filter;