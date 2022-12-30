import React, { useState, useEffect } from "react";
import axios from "axios";
import Station from "../station/Station";


const StationsList = () => {
  const [stationsData, setStationsData] = useState([]);

  const getStations = async () => {
    try {
      await axios.get(`http://localhost:5000/stations`).then((response) => {
        setStationsData(response.data)
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStations();
  }, []);
  return (
    <div className="table-responsive mt-3">
      <table className=" table stations-table mt-5">
        <thead className="table-head ">
          <tr>
            <th scope="col"></th>
            <th>FID</th>
            <th scope="col">Station name</th>

          </tr>
        </thead>
        <tbody>
          {stationsData &&
            stationsData.map((station, index) => {
              return <Station station={station} index={index} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StationsList;
