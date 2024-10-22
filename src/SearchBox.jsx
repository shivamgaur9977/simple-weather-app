import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError]  = useState(false);
    
    const API_KEY = "fdc56a8a542ded32197bd616e59df983";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWetherInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch(err) {
            throw err ;
        }
    };
    
    let handleChanges = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try{
            event.preventDefault();
            setCity("");
            let newInfo = await getWetherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
        
    }

    return(
        <div>
            <h3>Search For The Weather</h3>
            
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" value={city} onChange={handleChanges}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color:'red'}}>No Such Place is Exists</p>}
            </form>
            <br></br>
        </div>
    )
}