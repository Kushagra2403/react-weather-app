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
      <h3>Temperature: {temp} F</h3>
      <h3>Pressure: {pressure / 1000} atm</h3>
      <h3>Humidity: {humidity} % </h3>
      {/* <h3>Wind Speed: </h3> */}
      <p>{desc}</p>
    </div>
  );
};

export default SingleDay;
