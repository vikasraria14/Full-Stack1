import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
 
  const [namesToShow, setNamesToShow]=useState(persons)
  const [searchKeys,setSearchKeys]=useState('')



  
  

  

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