import React from "react";
import Weathericon from "./Weathericon";

export default function Forecastday(props) {
  return (
    <div className="Forecastday">
      <div className="row">
        <div className="col-2">{props.data.dt} </div>
      </div>
      <div className="row Picture">
        <div className="col-2">
          <Weathericon codeicon={props.data.weather[0].icon} size={30} />{" "}
        </div>
      </div>
      <div className="row Temp">
        <div className="col-2">
          <span className="Day">{props.data.temp.max}</span>
          {props.data.temp.min}
        </div>
      </div>{" "}
    </div>
  );
}
