import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ title, data, unit, img }) => {
  return (
    <div className="card">
      <img className="card-img" src={`../img/${img}`}></img>

      <div className="card-info">
        <p>{title}</p>
        <h1>
          {data} {unit}
        </h1>
      </div>
    </div>
  );
};

export default WeatherInfo;
