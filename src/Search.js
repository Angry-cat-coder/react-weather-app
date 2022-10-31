import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence] = useState(" ");

  function searchCity(event) {
    event.preventDefault();
    if (city.trim().length === 0) {
      setSentence("");
    } else {
      let apiKey = "712149961fc69177944e721143a58b42";
      let units = "metric";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=en_ua`;
      axios.get(apiUrl).then(showResponse);
      function showResponse(response) {
        setSentence(
          ` In ${response.data.name} is current  ${Math.round(
            response.data.main.temp
          )}℃ `
        );
      }
    }
  }

  function handleCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  return (
    <div className="Search">
      <form className="search-form" onSubmit={searchCity}>
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              onChange={handleCity}
              placeholder="Enter city"
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-4">
            <input type="submit" value="Go" className="btn  w-100 buTTon" />
          </div>
        </div>{" "}
        <br />
        {sentence}
      </form>
    </div>
  );
}
