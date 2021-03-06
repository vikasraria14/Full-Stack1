import database from './backend';



const Persons=({person,setNamesToShow,setPersons,setMessage})=>
{

    const confirmDelete=(person)=>
{

   return ()=>{
   //    console.log(person.name)
     //  console.log(person)
       const x= window.confirm(`Delete ${person.name}`)
    //   console.log(x);

       if(x)
       {        
        database.remove(person.id)
        .then(()=>{
      //     console.log('Deleted')
          
               database.getAll()
               .then(response=>{setNamesToShow(response)
                setPersons(response)
            })
            
        })
        .catch(error=>{console.log('failed')
            
            setErrorMessage(`${person.name} has already been deleted`)
            setTimeout(() => {
                setErrorMessage(null)
              }, 5000) 
            
    })

       }
        
   }
  };    

    return(
        <p>{person.name} {person.number} <button value={person.id} onClick={confirmDelete(person)}>Delete</button></p>
    )
}
export default Persons;