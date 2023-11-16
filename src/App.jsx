import React, { useState } from "react";
import axios from "axios";
import Date from "./Components/Date";
import SearchBar from "./Components/SearchBar";
import WeatherInfo from "./Components/WeatherInfo";

import "./App.css";
import Temperature from "./Components/Temperature";

function App() {
  const [data, setData] = useState([]);

  const handleSearchChange = (value) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=f489db9065b44ecbbb5172819230911&q=${value}`;
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="app">
      <Date />
      <SearchBar onSearchChange={handleSearchChange} />
      <Temperature
        loc={data.location?.name}
        temp={data.current?.temp_c}
        reg={data.location?.region}
      />
      <div className="info-cards">
        <WeatherInfo
          img="feels.jpeg"
          title="feels like"
          data={Math.round(data.current?.feelslike_c)}
          unit="°C"
        />
        <WeatherInfo
          img="wind.jpg"
          title="wind"
          data={Math.round(data.current?.wind_kph)}
          unit="kph"
        />
        <WeatherInfo
          img="hum.jpg"
          title="humidity"
          data={Math.round(data.current?.humidity)}
          unit="%"
        />
      </div>

      {/* <div className="weather-data">
        <div className="location-info">
          <div className="city">
            <p>{data.location?.name}</p>
          </div>
          <div className="city-info-wrapper">
            <p className="city-info">
              {data.location?.region}, {data.location?.country}
            </p>
          </div>
        </div>
        <div className="temp-container">
          <p className="actual-temp">{data.current?.temp_c}</p>
          <p className="unit">°C </p>
        </div>
        <div className="bottom">
          <div className="description">
            <p>Sunny</p>
          </div>
          <div className="feels">
            <p>14°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 km/h</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
