import database from './backend';



const Persons=({person,setNamesToShow,setPersons})=>
{

    const confirmDelete=(person)=>
{

   return ()=>{
       console.log(person.name)
       console.log(person)
       const x= window.confirm(`Delete ${person.name}`)
       console.log(x);

       if(x)
       {        
        database.remove(person.id)
        .then(()=>{
           console.log('Deleted')
          
               database.getAll()
               .then(response=>{setNamesToShow(response)
                setPersons(response)
            })
           
        })

       }
        
   }
  };    

    return(
        <p>{person.name} {person.number} <button value={person.id} onClick={confirmDelete(person)}>Delete</button></p>
    )
}
export default Persons;