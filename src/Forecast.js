import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
        <div className="col-2">☀ </div>
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
