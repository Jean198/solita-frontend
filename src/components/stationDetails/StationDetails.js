import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StationsContext from "../../context/StationsContext";
import './stationDetails.css'
import axios from 'axios'


const StationDetails = () => {
  const data = useContext(StationsContext);
  const stationsList=data.data
  const[stationsOccurencesCount, setStationsOccurencesCount]=useState([]);
  let { id } = useParams();

  const countStationsOccurences= async(id)=>{

    try {
      await axios.get(`http://localhost:5000/stations/station/${id}`).then((response) => {
        setStationsOccurencesCount(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    countStationsOccurences(id)
  },[])


  return (
    <div className="station-details-container">
      {stationsList
        .filter((station) => station.id === id)
        .map((station) => {
          return (<>
          <h1>{station.name}</h1>
          <p><b>Address:</b> <span className="address">{station.address}</span></p>
          <p>Number of Journeys starting from this Station: <b>{stationsOccurencesCount.departureCounts}</b></p>
          <p>Number of Journeys Ending at this Station: <b>{stationsOccurencesCount.returnCounts}</b></p>
          </>);
        })}
    </div>
  );
};

export default StationDetails;
