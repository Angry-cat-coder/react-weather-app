import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <div className="row">
        <div className="col-4">
          <ul>
            <h1>Kyiv</h1>
            <li>Thursday 19:45</li>
            <li>Rainy</li>
          </ul>
        </div>
        <div className="col-4">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Mostly cloudy"
          />{" "}
          <span className="temperature"> 9</span>
          <span className="unit"> ℃ </span>
        </div>

        <div className="col-4">
          <ul>
            <li> Humidity:%</li>
            <li> Precipitation:%</li>
            <li> Windspeed:%</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
