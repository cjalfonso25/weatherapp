import React, { useState, useEffect } from "react";
import axios from "axios";
import Temperatures from "./Temperatures/Temperatures";
import "moment-timezone";
import "./WeatherApp.css";

import WeatherInput from "./WeatherInput/WeatherInput";
import WeatherLocation from "./WeatherLocation/WeatherLocation";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [hourlyData, setHourlyData] = useState([]);
  const [weatherSummary, setWeatherSummary] = useState("");
  const [sunriseTime, setSunriseTime] = useState("");
  const [sunsetTime, setSunsetTime] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hoursPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [showChangeLocation, setShowChangeLocation] = useState(false);
  const [showLocationInput, setShowLocationInput] = useState(true);

  useEffect(() => {
    if (address) {
      const str = address.split(", ");
      setCity(str[0]);
      setCountry(str[2]);
      setLocation(address);
      setShowChangeLocation(true);
      setShowLocationInput(false);
    }
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .get(
        "https://cjha-weather-application.herokuapp.com/weather?address=" +
          location
      )
      .then((response) => {
        setAddress(response.data.location);
        setHourlyData(response.data.forecast.hourly.data);
        setWeatherSummary(response.data.forecast.daily.summary);
        setSunriseTime(response.data.forecast.daily.data[0].sunriseTime);
        setSunsetTime(response.data.forecast.daily.data[0].sunsetTime);
        setHumidity(response.data.forecast.daily.data[0].humidity);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const toggleChangeLocation = () => {
    setShowChangeLocation(false);
    setShowLocationInput(true);
  };

  const indexOfLastHour = currentPage * hoursPerPage;
  const indexOfFirstPost = indexOfLastHour - hoursPerPage;
  const displayedHours = hourlyData.slice(indexOfFirstPost, indexOfLastHour);

  return (
    <div className="weather-app">
      <WeatherLocation
        location={{
          address,
          showChangeLocation,
          city,
          country,
          toggleChangeLocation,
        }}
        addInfo={{
          address,
          sunriseTime,
          sunsetTime,
          humidity,
        }}
      />

      <WeatherInput
        data={{
          weatherSummary,
          isLoading,
          showLocationInput,
          location,
          handleSubmit,
          setLocation,
        }}
      />

      <Temperatures displayedHours={displayedHours} />
    </div>
  );
};

export default WeatherApp;
