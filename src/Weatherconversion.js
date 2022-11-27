import React from "react";
export default function Weatherconversion(props) {
  return (
    <div className="Weatherconversion">
      <span className="temperature "> {Math.round(props.celsius)}</span>
      <span className="unit">
        {" "}
        <a href="/">℃ </a>| <a href="/">℉°</a>
      </span>{" "}
    </div>
  );
}
