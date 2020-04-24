import React from "react";
import Moment from "react-moment";

const Temperatures = ({ displayedHours }) => {
  return (
    <div className="weather-temperature">
      <div className="container-fluid">
        <div className="row">
          {displayedHours.map((hour, i) => (
            <div key={i} className="col-12 col-md-4 col-lg-2">
              <div className="data m-auto">
                <div>
                  <div className="d-flex justify-content-between">
                    <small>
                      <Moment format="ddd">{new Date(hour.time * 1000)}</Moment>
                    </small>
                    <small>
                      <Moment format="hA">{new Date(hour.time * 1000)}</Moment>
                    </small>
                  </div>

                  <h1 className="temperature">{hour.temperature}&#176;C</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temperatures;
