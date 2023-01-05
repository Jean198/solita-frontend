import React, { useState } from "react";
import "./addStation.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {URL} from '../../App'

const AddStation = () => {
  const navigate = useNavigate();

  const [station, setStation] = useState({
    fid: "",
    stationId: "",
    stationName: "",
    stationAddress: "",
    city: "",
    operator: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStation((prevStation) => {
      return { ...prevStation, [name]: value };
    });
  };

  // Post a new Station
  const handleSubmit = async (event) => {
    console.log(station);
    event.preventDefault();
    if (
      station.fid === "" ||
      station.stationId === "" ||
      station.stationName === "" ||
      station.stationAddress === "" ||
      station.city === "" ||
      station.operator === "" ||
      station.latitude === "" ||
      station.longitude === ""
    ) {
      return toast.error("One or more information is missing", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    try {
      await axios.post(`${URL}/stations/add-station`, station);
      toast.success("Station added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setStation( {
          fid: "",
          stationId: "",
          stationName: "",
          stationAddress: "",
          city: "",
          operator: "",
          latitude: "",
          longitude: "",
        }
      );

      setTimeout(()=>{
        navigate('/stations');
      },2000)
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <form className="form-inline" onSubmit={handleSubmit}>
        <h2>Add new station</h2>
        <div className="form-group ">
          <label htmlFor="email">FID :</label>
          <input
            type="number"
            className="form-control form-control-sm "
            id="fid"
            name="fid"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="email">Station Id :</label>
          <input
            type="number"
            className="form-control form-control-sm "
            id="station-id"
            name="stationId"
            value={station.stationId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Station name:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="name"
            value={station.stationName}
            name="stationName"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Station address:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="station-address"
            name="stationAddress"
            value={station.stationAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">City:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="city"
            name="city"
            value={station.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Operator:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="operator"
            name="operator"
            value={station.operator}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Latitude:</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="latitude"
            name="latitude"
            value={station.latitude}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Longitude:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="longitude"
            name="longitude"
            value={station.longitude}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStation;
