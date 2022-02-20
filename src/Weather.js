import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = `d78e071d9d2a90c9a4f0918bd303e097`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather/?q=${props.city}&cnt={cnt}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
