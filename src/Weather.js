import React, { useState, useEffect, useRef } from "react";
import SingleDay from "./SingleDay";

const Weather = () => {
  const [weatherObj, setWeatherObj] = useState();
  const [loading, setLoading] = useState(true);
  const city = useRef("");
  const [target, setTarget] = useState("London");

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${target}&cnt=40&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    fetchWeather();
  }, [target]);

  const fetchWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherObj(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    city.current.focus();
    setTarget(city.current.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (weatherObj.cod == 404) {
    return (
      <>
        <h2 id="notfound">City Not Found</h2>
        <form className="form">
          <label htmlFor="city">Enter City Name:</label>
          <input type="text" name="city" ref={city} />
          <button type="submit" onClick={handleSubmit}>
            View
          </button>
        </form>
      </>
    );
  } else
    return (
      <>
        <form className="form">
          <label htmlFor="city">Enter City Name:</label>
          <input type="text" name="city" ref={city} />
          <button type="submit" onClick={handleSubmit}>
            View
          </button>
        </form>
        <h3 id="current-city">Showing weather for {target}</h3>
        <div className="container">
          <SingleDay weatherObj={weatherObj.list[0]} />
          <SingleDay weatherObj={weatherObj.list[8]} />
          <SingleDay weatherObj={weatherObj.list[16]} />
          <SingleDay weatherObj={weatherObj.list[24]} />
          <SingleDay weatherObj={weatherObj.list[32]} />
        </div>
      </>
    );
};

export default Weather;
