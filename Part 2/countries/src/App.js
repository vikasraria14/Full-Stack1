import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const url='https://restcountries.com/v3.1/all';
  const [countries,setCountries]=useState([])
  const [countriesToShow,setCountriesToShow]=useState([]);
  const [searchField,setSearchField]=useState('')
  useEffect(
    ()=>{
      axios.get(url)
      .then(response=>{
        setCountries(response.data)
       // console.log(response.data)
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
      
      const updatedCountries= countries.filter(country=>country.name.common.toLowerCase().includes(x.toLowerCase()))
      setCountriesToShow(updatedCountries)
      
    
    }
    let langs;
  return (
    <div>

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
            {console.log('langs' ,langs)}
            {langs.map((lang)=><li key={lang}>{countriesToShow[0].languages[lang]}</li>)}
            
          </ul>
          <img src=
          {countriesToShow[0].flags.png} alt='Flag'
          />
        </div>
        :
         countriesToShow.map(country=><p key={country.name.official}>{country.name.common}</p>))        
          
          
        
        
      }
    </div>
  );
}

export default App;
