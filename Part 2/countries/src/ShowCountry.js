import Weather from "./Weather";
const ShowCountry=({country,langs,handleShow})=>
{
   
    return (
        <div>
            <h1><button onClick={handleShow}>Hide</button> {country.name.official} </h1>
        
        <p>capital : {country.capital}</p>
        <p>area : {country.area}</p>
        <h1> languages</h1>
        <ul>
        {langs=Object.keys(country.languages)}
            
            {langs.map((lang)=><li key={lang}>{country.languages[lang]}</li>)}
            
        </ul>

        <img src=
            {country.flags.png} alt='Flag'
            style={{border:"1px solid black", margin:"0px"}}
            />
        <Weather country={country }  />
            </div>
    )
}
export default ShowCountry;