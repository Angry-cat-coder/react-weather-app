import React from "react";
import Search from "./Search";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />{" "}
      <ul>
        <h1>Kyiv</h1>
        <li>Last updated: Thursday 19:45</li>
        <li>4. November</li>
        <li>Cloudy</li>
      </ul>
      <div className="row current">
        <div className="col-sm-6">
          <div className="d-flex justify-content-start">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt="Mostly cloudy"
              className="me-2"
            />{" "}
            <span>
              <span className="temperature "> 9</span>
              <span className="unit">
                {" "}
                <a href="/">℃ </a>| <a href="/">℉°</a>
              </span>
            </span>{" "}
          </div>{" "}
        </div>

        <div className="col-sm-6 conditions">
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
