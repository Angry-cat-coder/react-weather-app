import React from "react";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <ul>
        <h1>{props.data.cityName}</h1>
        <li>Last updated: Thursday 19:45</li>
        <li>4. November</li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row current">
        <div className="col-sm-6">
          <div className="d-flex justify-content-start">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt={props.data.description}
              className="me-2"
            />{" "}
            <span>
              <span className="temperature "> {props.data.temp}</span>
              <span className="unit">
                {" "}
                <a href="/">℃ </a>| <a href="/">℉°</a>
              </span>
            </span>{" "}
          </div>{" "}
        </div>

        <div className="col-sm-6 conditions">
          <ul>
            <li> Humidity: {props.data.humidity} %</li>

            <li> Windspeed: {props.data.wind}%</li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
}
