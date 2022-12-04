import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import Forecastday from "./Forecastday";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastDate, setForecastDate] = useState();
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function showResponse(response) {
    setLoaded(true);
    setForecastDate(response.data.daily);
  }

  if (loaded === false) {
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let apiKey = "712149961fc69177944e721143a58b42";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showResponse);
    return null;
  } else console.log(forecastDate[0]);
  return (
    <div className="Forecast">
      <div className="row">
        {forecastDate.map(function (daily, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <Forecastday data={daily} />
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}
