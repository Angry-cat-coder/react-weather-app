import React from "react";
import "./Forecast.css";
import Weathericon from "./Weathericon";
import axios from "axios";

export default function Forecast(props) {
  function showResponse(response) {
    console.log(response.data);
  }
  //function searChing() {
  let lat = props.coords.lat;
  let lon = props.coords.lon;
  let apiKey = "712149961fc69177944e721143a58b42";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showResponse);
  // }

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-2">Mon </div>
        <div className="col-2">Tue </div>
        <div className="col-2">Wed </div>
        <div className="col-2">Thur </div>
        <div className="col-2">Fri </div>
        <div className="col-2">Sat </div>
      </div>
      <div className="row Picture">
        <div className="col-2">
          <Weathericon codeicon={"01d"} size={30} />{" "}
        </div>
        <div className="col-2">🌦 </div>
        <div className="col-2">🌨 </div>
        <div className="col-2">☁ </div>
        <div className="col-2">🌤 </div>
        <div className="col-2">🌤 </div>
      </div>
      <div className="row Temp">
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
        <div className="col-2">
          <span className="Day">16 </span>12
        </div>
      </div>
    </div>
  );
}
