import React from "react";
import Formatteddate from "./Formatteddate";
import "./Weather.css";
import Weathericon from "./Weathericon";

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
            <div className="float-start">
              <Weathericon
                codeicon={props.data.icon}
                alt={props.data.description}
              />{" "}
            </div>
            <div className=" current float-start">
              <span className="temperature ">
                {" "}
                {Math.round(props.data.temp)}
              </span>
              <span className="unit">
                {" "}
                <a href="/">℃ </a>| <a href="/">℉°</a>
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
