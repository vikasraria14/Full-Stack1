import { useState , useEffect} from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import database from './backend'
import Notification from './Notification'
import SuccessNotification from './SuccessNotification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [errorMessage, setErrorMessage] = useState(null) 
  const [namesToShow, setNamesToShow]=useState([])
  const [searchKeys,setSearchKeys]=useState('')
  const [successMessage,setSuccessMessage]=useState(null)

  useEffect(()=>{
    
     database.getAll()
     .then(response=>{
      
       setNamesToShow(response)
       setPersons(response)
     })
    
    
  },[])
  
  
//console.log(persons)
  

  const handleSearchKeys=(event)=>
  {
  //  console.log(event.target.value);
    let searchString=event.target.value;
    setSearchKeys(searchString)

    setNamesToShow(persons.filter(person=>person.name.toLowerCase().includes(searchString.toLowerCase())))
  }
  //console.log(successMessage)
 
  return(
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <SuccessNotification message={successMessage}/>
      <Filter searchKeys={searchKeys} handleSearchKeys={handleSearchKeys} />
      <h2>Add a new</h2>
      <PersonForm persons={persons}  setPersons={setPersons} setNamesToShow={setNamesToShow} setSuccessMessage={setSuccessMessage} />
      <h2>Numbers</h2>
      
      {namesToShow.map(person=><Persons key={person.id} person={person}
       setNamesToShow={setNamesToShow} setPersons={setPersons} setErrorMessage={setErrorMessage}/>)}
    </div>
  )
  
}

export default App