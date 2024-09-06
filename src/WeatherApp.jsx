import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city:"WonderLand",
        temp:"20" ,
        pressure:"10",
        humidity: "100",
        feels_like: "25",
        sea_level: "1000",
        temp_max: "25",
        temp_min: "15",
        description:"rainy"
    })

    function updateInfo(updateInfo) {
        setWeatherInfo(updateInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}