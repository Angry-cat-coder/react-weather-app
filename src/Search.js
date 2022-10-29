import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [sentence, setSentence] = useState(" ");

  function searchCity(event) {
    event.preventDefault();
    if (city.trim().length === 0) {
      setSentence("");
    } else {
      setSentence(` It is current 25 ℃ in ${city}`);
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
