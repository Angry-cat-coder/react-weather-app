import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("Kyiv");
  let [weatherDate, setweatherDate] = useState({});
  let [status, setStatus] = useState(false);

  function showResponse(response) {
    setweatherDate({
      cityName: response.data.name,
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,

      wind: response.data.wind.speed,
    });
    setStatus(true);
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function searchCity(event) {
    event.preventDefault();
    searChing();
  }
  function searChing() {
    let apiKey = "712149961fc69177944e721143a58b42";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=en_ua`;
    axios.get(apiUrl).then(showResponse);
  }
  let form = (
    <form className="search-form" onSubmit={searchCity}>
      <div className="row">
        <div className="col-sm-6">
          <input
            type="search"
            onChange={handleCity}
            placeholder="Enter city"
            autoFocus="on"
            className="form-control"
          />
        </div>
        <div className="col-sm-3">
          <input type="submit" value="Go" className="btn  w-100 buTTon" />
        </div>
        <div className="col-sm Geo">
          <input type="submit" value="Geolocation" className="btn buT" />
        </div>
      </div>{" "}
      <br />
    </form>
  );

  if (status === false) {
    searChing();
    return (
      <div className="Search">
        {" "}
        Searching for a city .... or internet-connection
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <div className="Search">{form}</div> <Weather data={weatherDate} />{" "}
        <Forecast />
      </div>
    );
  }
}
