import React from "react";

export default function Formatteddate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.current_date.getDay()];
  let hours = props.current_date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.current_date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "January",
    "February",
    "March",
    "April",
    "Mai",
    "June",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "December",
  ];
  let month = months[props.current_date.getMonth()];
  let data = props.current_date.getDate();
  return (
    <div>
      <div>
        <span className="last"> Last updated: </span>
        {day} {hours}:{minutes}
      </div>
      <div>
        {data}. {month}
      </div>
    </div>
  );
}
