import React from "react";
import Weathericon from "./Weathericon";

export default function Forecastday(props) {
  function setDay() {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let data = new Date(props.data.dt * 1000);
    let day = days[data.getDay()];
    return day;
  }

  return (
    <div className="Forecastday">
      <div>{setDay()} </div>
      <div className="Picture">
        <Weathericon codeicon={props.data.weather[0].icon} size={30} />{" "}
      </div>
      <div className="Temp">
        <span className="Day">{Math.round(props.data.temp.max)}°</span>
        {Math.round(props.data.temp.min)}°
      </div>
    </div>
  );
}
