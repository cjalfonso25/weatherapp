import React from "react";
import Location from "../Location/Location";
import AdditionaInfo from "../AdditionalInfo/AdditionalInfo";

const WeatherLocation = ({ location, addInfo }) => {
  return (
    <div className="weather-location">
      <div className="container-fluid">
        <div className="row">
          <Location data={location} />
          <AdditionaInfo data={addInfo} />
        </div>
      </div>
    </div>
  );
};

export default WeatherLocation;
