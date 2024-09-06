import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_Key = "ac4a3a5ae1e54945bb95049009fa7fa1";

    let [city, setCity] = useState("");
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    
   
    let get_Weather_Info = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`)
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let results = {
            city:city,
            temp: jsonResponse.main.temp,
            pressure: jsonResponse.main.pressure,
            humidity: jsonResponse.main.humidity,
            feels_like: jsonResponse.main.feels_like,
            sea_level: jsonResponse.main.sea_level,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            description: jsonResponse.weather[0].description
        }
        return results;
        
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let resultInfo = await get_Weather_Info();
        updateInfo(resultInfo);
    }
    
    return (
            <div className='search-div'>
                <form className='city-search' onSubmit={handleSubmit}>
                    <h3>WEATHER FORECAST</h3>
                    <TextField id="outlined-basic" label="Enter a city" variant="outlined"style={{marginBottom:"30px",marginTop:"20px"}} className='input-city' value={city} onChange={handleChange} required/>
                    <Button variant="contained" type='submit' className='search-btn'    startIcon={<SearchIcon />}>Search</Button>
                </form>
            </div>            
    );
}