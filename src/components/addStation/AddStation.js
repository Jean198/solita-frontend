import React, { useState } from "react";
import "./addStation.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../../App";

const AddStation = () => {
  const navigate = useNavigate();

  const [station, setStation] = useState({ // New station object to post to the database
    fid: "",
    stationId: "",
    stationName: "",
    stationAddress: "",
    city: "",
    operator: "",
    latitude: "",
    longitude: "",
  });

  const handleInputChange = (event) => { //Caching form inputs
    const { name, value } = event.target;
    setStation((prevStation) => {
      return { ...prevStation, [name]: value };
    });
  };


  const handleSubmit = async (event) => { // handling the form submition
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
      await axios.post(`${URL}/stations/add-station`, station); //Posting the new station
      toast.success("Station added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setStation({ //Emptying the form fields after submition
        fid: "",
        stationId: "",
        stationName: "",
        stationAddress: "",
        city: "",
        operator: "",
        latitude: "",
        longitude: "",
      });

      setTimeout(() => { //Redirecting to stations page after form submition
        navigate("/stations");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="add-station-title-container">
        <h2>Add new station</h2>
      </div>
      <form className="form-inline add-station-form" onSubmit={handleSubmit}>
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

        <div className="add-station-submit-button">
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStation;
