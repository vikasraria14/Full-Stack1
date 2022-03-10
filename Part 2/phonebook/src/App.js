import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const submitFunction=(event)=>
  {
    event.preventDefault();
    console.log("Hello")
    const newNameObj={
      name:newName
    }
    setPersons(persons.concat(newNameObj))
  }
  const handleChange=(event)=>
  {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit" onClick={submitFunction}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><p key={person.name}>{person.name}</p>)}
      ...
    </div>
  )
}

export default App