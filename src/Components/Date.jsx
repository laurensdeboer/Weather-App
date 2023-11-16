import React from "react";
import DateObject from "react-date-object";
import "./Date.css";

const date = new DateObject();

const Date = () => {
  return (
    <div className="date-wrapper">
      <p className="date-info">
        {date.day}&nbsp;
        {date.month.name}&nbsp;
        {date.year}
      </p>
      <p className="weekday">{date.weekDay.name}</p>
    </div>
  );
};

export default Date;
