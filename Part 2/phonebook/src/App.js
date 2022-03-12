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
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [namesToShow, setNamesToShow]=useState(persons)
  const [searchKeys,setSearchKeys]=useState('')



  const submitFunction=(event)=>
  {
    event.preventDefault();
    //console.log("Hello")
    const newNameObj={
      name:newName,
      number:newNumber,
      id: persons.length+1
    }
    const x= persons.findIndex(person=>person.name===newNameObj.name)
    console.log(x)
    if(x!==-1)
    {
      alert(`${newNameObj.name} is already added to the phonebook`)
    }
    else
    {
      setPersons(persons.concat(newNameObj))
      setNamesToShow(persons.concat(newNameObj))
    }
    setNewName('');
    setNewNumber('');
    setSearchKeys('');
    
  }
  

  const handleNameChange=(event)=>
  {
   // console.log(event.target.value);
    setNewName(event.target.value)
  }


  const handleNumberChange=(event)=>
  {
  //  console.log(event.target.value);
    setNewNumber(event.target.value)
  }


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
      <PersonForm newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange} submitFunction={submitFunction} />
      <h2>Numbers</h2>
      
      {namesToShow.map(person=><Persons key={person.id} person={person}/>)}
    </div>
  )
  
}

export default App