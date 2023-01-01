import "./station.css";
import React from "react";
import { useNavigate } from "react-router-dom";


const Station = ({ station,index }) => {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/stations/station/${station.id}`);
  };

  return (
    <>
        <tr onClick={()=>{handleRowClick(station.id)}} className="station-row" key={index}>
          <td></td>
          <td>{station.id}</td>
          <td>{station.name}</td>
        </tr>

    </>
  );
};

export default Station;