import axios from "axios";
import { useState,useEffect } from "react";
const Weather=({country})=>
{
    const [weatherData,setWeatherData]=useState({main:{temp:0},weather:{icon:'10D'},wind:{speed:0}});
    const [url1,setUrl1]=useState('')
    const k='fc03645acaaad4e910bca9dc5c842e82'
    const url='https://api.openweathermap.org/data/2.5/weather?lat='+country.latlng[0]+'&lon='+country.latlng[1]+'&appid='+k;
    useEffect(()=>{
        axios.get(url)
    .then(response=>{
        setWeatherData(response.data)
        console.log(response.data.weather[0].icon)
        const x='http://openweathermap.org/img/wn/'+response.data.weather[0].icon+'@2x.png'
        setUrl1(x)
        return response.data.weather.icon;

    })
    
    },[])
    
 //   console.log(response.data.main.temp-273.15)

    console.log(weatherData)            
    return (
        <>
           
            <h3>Weather in {country.capital}</h3>
            <p>temperature {(weatherData.main.temp-273.15).toPrecision(3)} Celcius</p>
            <img src={url1} alt='Weather icon' />
            <p>wind {weatherData.wind.speed} m/s</p>
            
            
        </>
    )
}
export default Weather;