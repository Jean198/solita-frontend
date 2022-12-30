import React, {useContext } from "react";
import Station from "../station/Station";
import StationsContext from "../../context/StationsContext";
import station_img from '../../assets/images/station-img.png'
import bikes_img from '../../assets/images/bikes-img.jpg'
import './stationsList.css'


const StationsList = () => {
  const stationsList=useContext(StationsContext)

  return (
    <div className="row  mt-5" >
      <div className="col-lg-6 station-img-container">
        <img src={station_img} alt="" className="station-img"/>
      </div>
      <div className="col-lg-6">
      <div className="table-responsive ">
      <table className=" table stations-table">
        <thead className="table-head ">
          <tr>
            <th scope="col"></th>
            <th>FID</th>
            <th scope="col">Station name</th>

          </tr>
        </thead>
        <tbody>
          {stationsList &&
            stationsList.map((station, index) => {
              return <Station station={station} index={index} key={index} />;
            })}
        </tbody>
      </table>
    </div>

      </div>

    </div>
  );
};

export default StationsList;
