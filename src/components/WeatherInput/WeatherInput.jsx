import React from "react";
import Loader from "react-loader-spinner";

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
          <form
            onSubmit={(e) => data.handleSubmit(e)}
            className={!data.showLocationInput ? "d-none" : " d-block"}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Enter your location here"
              value={data.location}
              onKeyPress={(e) =>
                e.key === "Enter" ? data.handleSubmit(e) : null
              }
              onChange={(e) => data.setLocation(e.target.value)}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default WeatherInput;
