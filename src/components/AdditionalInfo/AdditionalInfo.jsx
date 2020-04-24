import React from "react";
import Moment from "react-moment";

const AdditionaInfo = ({ data }) => {
  return (
    <div className="col-12 col-md-4 ml-auto">
      <div
        className={
          data.address && data.address
            ? "additional-info d-flex"
            : "additional-info d-none"
        }
      >
        <div className="sunrise info">
          <i className="far fa-sun icon"></i>
          <div>
            <small className="m-0">SUNRISE</small>
            <h3 className="m-0">
              <Moment format="h:mm A">
                {new Date(data.sunriseTime * 1000)}
              </Moment>
            </h3>
          </div>
        </div>
        <div className="sunset info">
          <i className="fas fa-wind icon"></i>
          <div>
            <small className="m-0">SUNSET</small>
            <h3 className="m-0">
              <Moment format="h:mm A">
                {new Date(data.sunsetTime * 1000)}
              </Moment>
            </h3>
          </div>
        </div>
        <div className="humidity info">
          <i className="fas fa-tint icon"></i>
          <div>
            <small className="m-0">HUMIDITY</small>
            <h3 className="m-0">{data.humidity * 100}%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionaInfo;
