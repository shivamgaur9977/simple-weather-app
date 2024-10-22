import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: 'Delhi',
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        feelsLike: 24.84,
        humidity: 47,
        weather: "haze", 
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}