import React from "react";
import { WiCloud, WiRain, WiDaySunny } from "react-icons/wi";

const SingleDay = ({ weatherObj }) => {
  const temp = weatherObj.main.temp;
  const pressure = weatherObj.main.pressure;
  const humidity = weatherObj.main.humidity;
  const desc = weatherObj.weather[0].description;
  var myDate = new Date(weatherObj.dt * 1000);
  const date = myDate.toDateString();
  const main = weatherObj.weather[0].main;
  const wind = weatherObj.wind.speed;

  const Icon = ({ main }) => {
    if (main === "Rain") return <WiRain size={140} />;
    if (main === "Clouds") return <WiCloud size={140} />;
    if (main === "Clear") return <WiDaySunny size={140} />;
    return <WiCloud size={140} />;
  };

  return (
    <div className="single-day">
      <h2>{date}</h2>
      <div className="img">
        <Icon main={main} />
      </div>
      <h4>{temp}C</h4>
      <p>{desc}</p>
      <h3>Pressure: {pressure / 1000} atm</h3>
      <h3>Humidity: {humidity}% </h3>
      <h3>Wind Speed: {wind} km/h </h3>
    </div>
  );
};

export default SingleDay;
