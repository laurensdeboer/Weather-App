import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    location: {
      name: "",
    },
    current: {
      temp_c: "",
    },
  });

  const [location, setLocation] = useState("");

  const url = `http://api.weatherapi.com/v1/current.json?key=f489db9065b44ecbbb5172819230911&q=${location}`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          class="search-input"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter a location here"
        />
      </div>
      <div className="weather-data">
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
      </div>
    </div>
  );
}

export default App;
