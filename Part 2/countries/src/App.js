import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const url='https://restcountries.com/v3.1/all';
  const [countries,setCountries]=useState([])
  const [countriesToShow,setCountriesToShow]=useState([]);
  const [searchField,setSearchField]=useState('');
  const [detail,setDetail]=useState([]);
  useEffect(
    ()=>{
      axios.get(url)
      .then(response=>{
        setCountries(response.data)
        console.log(response.data)
        setCountriesToShow(response.data)
        
      });
    }
    ,[])
    const showLang=(languages)=>
    {
      for(let key in languages)
      {
        console.log(languages[key])
        
      }
    }
    const handleNameChange=event=>{
      const x=event.target.value;
      setSearchField(x)
      
      const updatedCountries= countries.filter(country=>country.name.official.toLowerCase().includes(x.toLowerCase()))
      setCountriesToShow(updatedCountries)
      
    
    }

    const showDetails=(event)=>
    {
      console.log(event.target.value);
      const obj= countriesToShow.filter(country=>country.name.official===event.target.value)
      
      
    }
    let langs;
  return (
    <div style={{margin:"50px"}}>

      <form>
        Find Countries: <input value={searchField} onChange={handleNameChange}/>
      </form>
      {
        countriesToShow.length>10?
        'Too many matches, try another filter':        
        (countriesToShow.length===1?
        
        <div>
          <h1>{countriesToShow[0].name.common}</h1>
          <p>Capital: {countriesToShow[0].capital}</p>
          <p>Area: {countriesToShow[0].area}</p>
          <h2>Languages</h2>
          <ul>
            
            
            {langs=Object.keys(countriesToShow[0].languages)}
           
            {langs.map((lang)=><li key={lang}>{countriesToShow[0].languages[lang]}</li>)}
            
          </ul>
          <img src=
          {countriesToShow[0].flags.png} alt='Flag'
          style={{border:"1px solid black", margin:"0px"}}
          />
        </div>
        :
         countriesToShow.map(country=><p key={country.name.official}>{country.name.official}  <button value={country.name.official} onClick={showDetails}>Show</button></p>)) 
          
          
        
        
      }

    </div>
  );
}

export default App;
