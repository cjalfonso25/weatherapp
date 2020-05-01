import React, { useRef, useEffect } from "react";
import Loader from "react-loader-spinner";
import Form from "../common/Form";

const WeatherInput = ({ data }) => {
  return (
    <div className="weather-input">
      <div className="container">
        <h5 className="text-center mb-4">
          {data.weatherSummary.toUpperCase()}
        </h5>

        {data.isLoading ? (
          <div className="text-center">
            <Loader type="ThreeDots" color="#fff" height={80} width={80} />
          </div>
        ) : (
          <Form
            input={data.input}
            onSubmit={data.handleSubmit}
            showLocationInput={data.showLocationInput}
            location={data.location}
            setLocation={data.setLocation}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherInput;
