import { useState , useEffect} from "react";
import axios from 'axios';
import './App.css';
import Weather from "./Weather";
import ShowCountry from "./ShowCountry";
const App=()=>
{

  const [countries,setCountries]=useState('');
  const [countriesToShow,setCountriesToShow]=useState('');
  const [countriesToShow1,setCountriesToShow1]=useState('');
  const [search,setSearch]=useState('')
  const [btn,setBtn]=useState(false)
  let langs;
  useEffect(()=>
  {
    
    axios.get('https://restcountries.com/v3.1/all')
    .then(response=>{
    
    setCountries(response.data);
    console.log(response.data);
    })
  },[])
  
    const handleChange=event=>
    {
      setSearch(event.target.value);
      const x=event.target.value.toLowerCase();
      setCountriesToShow(countries.filter(country=>country.name.official.toLowerCase().includes(x)))
    }
    const handleShow=(event)=>
    {
      
      setBtn(!btn);
      const x=event.target.id;
      setCountriesToShow1(countries.filter(country=>country.name.official===x))
     
    }
  
 if( btn)
 {
  return(

    <div>
      <ShowCountry country={countriesToShow1[0]} handleShow={handleShow} langs={langs} /> 
      

    </div>
   )
  }
  else
  {
  return(
    <div>
      <input value={search} onChange={handleChange}/ >
    {  (countriesToShow.length>0&&countriesToShow.length<10)?
    countriesToShow.length===1?
    <ShowCountry country={countriesToShow[0]}></ShowCountry>
    
    :countriesToShow.map((country)=><p key={country.name.official}><button id={country.name.official} onClick={handleShow}>Show</button>  {country.name.official}  </p>)
    :<p></p>}
      
     
    </div>
  )
  }
}

export default App;