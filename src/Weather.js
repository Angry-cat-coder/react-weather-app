import React from "react";
import Formatteddate from "./Formatteddate";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="d-flex justify-content-around">
        <ul>
          <h1>{props.data.cityName}</h1>
          <li>
            <Formatteddate current_date={props.data.date} />
          </li>

          <li>{props.data.description}</li>
          <li> Humidity: {props.data.humidity} %</li>

          <li> Windspeed: {props.data.wind} km/h</li>
        </ul>

        <div className="d-flex align-items-center">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              alt={props.data.description}
              className="me-2 float-start"
            />{" "}
            <span className=" current float-start">
              <span className="temperature ">
                {" "}
                {Math.round(props.data.temp)}
              </span>
              <span className="unit">
                {" "}
                <a href="/">℃ </a>| <a href="/">℉°</a>
              </span>
            </span>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
