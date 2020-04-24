import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import Temperatures from "./Temperatures/Temperatures";
import Loader from "react-loader-spinner";
import Location from "./Location/Location";
import "moment-timezone";
import "./WeatherApp.css";
import AdditionaInfo from "./AdditionalInfo/AdditionalInfo";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [hourlyData, setHourlyData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState("");
  const [currentHour, setCurrentHour] = useState("");
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
    setCurrentHour(new Date().getTime());

    if (address) {
      const str = address.split(", ");
      setCity(str[0]);
      setProvince(str[1]);
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
        setCurrentTemperature(response.data.forecast.currently.temperature);
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
      <div className="weather-location">
        <div className="container-fluid">
          <div className="row">
            <Location
              data={{
                address,
                showChangeLocation,
                city,
                country,
                toggleChangeLocation,
              }}
            />

            <AdditionaInfo
              data={{ address, sunriseTime, sunsetTime, humidity }}
            />
          </div>
        </div>
      </div>

      <div className="weather-input">
        <div className="container">
          <h5 className="text-center mb-4">{weatherSummary.toUpperCase()}</h5>

          {isLoading ? (
            <div className="text-center">
              <Loader type="ThreeDots" color="#fff" height={80} width={80} />
            </div>
          ) : (
            <form
              onSubmit={(e) => handleSubmit(e)}
              className={!showLocationInput ? "d-none" : " d-block"}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location here"
                value={location}
                onKeyPress={(e) => (e.key === "Enter" ? handleSubmit(e) : null)}
                onChange={(e) => setLocation(e.target.value)}
              />
            </form>
          )}
        </div>
      </div>

      <Temperatures displayedHours={displayedHours} />
    </div>
  );
};

export default WeatherApp;
