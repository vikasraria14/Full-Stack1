import { useEffect } from 'react'
import anecdoteService from './services/anecdotes'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {useDispatch } from 'react-redux'
import { setState } from './reducers/anecdoteReducer'
import {setState1} from './reducers/showNotesReducer'


const App = () => {
  
const dispatch=useDispatch();
  
useEffect(()=>{
  anecdoteService.getAll()
  .then(response=>{
    const x=[...response]
    dispatch(setState(x))
    
    dispatch(setState1(x))
    
   // console.log("dispatchedagain")
    
  })
  

},[dispatch])
  

  return (
    <div>
      <Filter />
      <Notification /><br></br>
      <AnecdotesList />
      <AnecdotesForm />      
    </div>
  )
}

export default App