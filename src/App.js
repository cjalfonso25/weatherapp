import React, { useEffect } from "react";
import WeatherApp from "./components/WeatherApp";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Weather App";
  }, []);

  return (
    <>
      <WeatherApp />
    </>
  );
}

export default App;
