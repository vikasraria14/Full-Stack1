import { useEffect } from 'react'
import AnecdotesForm from './components/AnecdotesForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import {useDispatch } from 'react-redux'
import { initializeDotes } from './reducers/showNotesReducer'
import { initializeDotes1 } from './reducers/anecdoteReducer'


const App = () => {
  
const dispatch=useDispatch();
  
useEffect(()=>{
  dispatch(initializeDotes())
  dispatch(initializeDotes1())
    
   // console.log("dispatchedagain")
    
 
  

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