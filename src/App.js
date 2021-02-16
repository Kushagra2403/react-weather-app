import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./index.css";

function App() {
  return (
    <React.Fragment className="main">
      <h1>Welcome to LiveWeather Forecast</h1>
      <Weather />
    </React.Fragment>
  );
}

export default App;
