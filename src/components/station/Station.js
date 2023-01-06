import "./station.css";
import React from "react";
import { useNavigate } from "react-router-dom";

//The station component which is the row in the station's list table
const Station = ({ station, index }) => {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`station/${station.id}`);
  };

  return (
    <>
      <tr
        onClick={() => {
          handleRowClick(station.id);
        }}
        className="station-row"
        key={index}
      >
        <td></td>
        <td>{station.id}</td>
        <td>{station.name}</td>
      </tr>
    </>
  );
};

export default Station;
