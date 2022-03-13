import database from './backend'
import { useState } from "react"
const PersonForm=({persons,setPersons,setNamesToShow})=>
{
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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

  const submitFunction=(event)=>
  {
    event.preventDefault();
    //console.log("Hello")
    const newNameObj={
      name:newName,
      number:newNumber,
     // id: persons.length+1
    }
    console.log(persons)
    const x= persons.findIndex(person=>person.name===newNameObj.name)
   // console.log(x)
    if(x!==-1)
    {
      alert(`${newNameObj.name} is already added to the phonebook`)
    }
    else
    {
        
        database.create(newNameObj)
       .then(response=>{


           setPersons(persons.concat(response))
         setNamesToShow(persons.concat(response))
        })      
    }
    setNewName('');
    setNewNumber('');
   // setSearchKeys('');
    
  }

    return(
        <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit" onClick={submitFunction}>add</button>
        </div>
      </form>

    )
}
export default PersonForm;