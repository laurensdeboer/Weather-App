import React from "react";
import "./Temperature.css";

const Temperature = ({ loc, temp, reg }) => {
  return (
    <div className="temp-container">
      <p className="basic">it is</p>
      <p className="temp">{temp} °C</p>
      <p className="basic">in</p>
      <p className="loc">
        {loc}, {reg}
      </p>
    </div>
  );
};

export default Temperature;
