import React from "react";

const Location = ({ data }) => {
  return (
    <div className="col-12 col-md-4">
      <div
        className={data.address && data.address ? "location d-block" : "d-none"}
      >
        <div className="weather-icon">
          <i className="fas fa-cloud"></i>
        </div>
        <h4 className="city m-0">{data.city}</h4>
        <h1 className="country ">{data.country}</h1>
      </div>
      <div
        className={
          data.showChangeLocation ? "change-location" : "change-location d-none"
        }
      >
        <small onClick={data.toggleChangeLocation}>
          <i className="fas fa-map-marker-alt mr-1"></i> Change Location
        </small>
      </div>
    </div>
  );
};

export default Location;
