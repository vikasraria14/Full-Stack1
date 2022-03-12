import { useState , useEffect} from 'react'
import axios from 'axios'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])


 
  const [namesToShow, setNamesToShow]=useState([])
  const [searchKeys,setSearchKeys]=useState('')


  useEffect(()=>{
    axios.get('http://localhost:3001/names')
    .then(response=>{
      //console.log(response.data)
      setPersons(response.data)
      setNamesToShow(response.data)
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
 
  return(
    <div>
      <h1>Phonebook</h1>
      <Filter searchKeys={searchKeys} handleSearchKeys={handleSearchKeys} />
      <h2>Add a new</h2>
      <PersonForm persons={persons}  setPersons={setPersons} setNamesToShow={setNamesToShow} />
      <h2>Numbers</h2>
      
      {namesToShow.map(person=><Persons key={person.id} person={person}/>)}
    </div>
  )
  
}

export default App