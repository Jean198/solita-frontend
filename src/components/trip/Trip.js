import React from "react";
import "./trip.css";

const Trip = ({ trip, loading }) => {
  return (
    <>
      <tr>
        <td></td>
        <td>{trip.departure_station_name}</td>
        <td>{trip.departure_station_id}</td>
        <td>{trip.return_station_name}</td>
        <td>{trip.return_station_id}</td>
        <td>{(trip.covered_distance_m / 1000).toFixed(2)}</td>
        <td>{(trip.return_station_id / 60).toFixed(1)}</td>
      </tr>
    </>
  );
};

export default Trip;
