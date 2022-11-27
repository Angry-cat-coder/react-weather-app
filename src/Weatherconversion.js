import React, { useState } from "react";

export default function Weatherconversion(props) {
  const [unit, setUnit] = useState("celsius");

  function setFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function setCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="Weatherconversion">
        <span className="temperature "> {Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          ℃ |{" "}
          <a href="/" onClick={setFahrenheit}>
            ℉°
          </a>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div className="Weatherconversion">
        <span className="temperature "> {Math.round(fahrenheit())}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={setCelsius}>
            ℃{" "}
          </a>
          | ℉°
        </span>{" "}
      </div>
    );
  }
}
