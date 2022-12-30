import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import StationsContext from "../../context/StationsContext";
import StationsList from "../stationsList/StationsList";
import './stationDetails.css'

const StationDetails = () => {
  const stastionsList = useContext(StationsContext);
  console.log(stastionsList[0]);
  let { id } = useParams();
  return (
    <div className="station-details-container">
      {stastionsList
        .filter((station) => station.id === id)
        .map((station) => {
          return (<>
          <h3>{station.name}</h3>
          <p>-{station.address}</p>
          </>);
        })}
    </div>
  );
};

export default StationDetails;
