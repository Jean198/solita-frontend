import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTrip = () => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({
    departureDate: "",
    returnDate: "",
    departureStationId: "",
    departureStationName: "",
    returnStationId: "",
    returnStationName: "",
    distance: "",
    duration: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTrip((prevTrip) => {
      return { ...prevTrip, [name]: value };
    });
  };

  // Post a new trip
  const handleSubmit = async (event) => {
    console.log(trip);
    event.preventDefault();
    if (
      trip.departureDate === "" ||
      trip.returnDate === "" ||
      trip.departureStationId === "" ||
      trip.departureStationName === "" ||
      trip.returnStationId === "" ||
      trip.returnStationName === "" ||
      trip.distance === "" ||
      trip.duration === ""
    ) {
      return toast.error("One or more information is missing", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    try {
      await axios.post(`http://localhost:5000/trips/add-trip`, trip);
      toast.success("Trip added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTrip({
        returnDate: "",
        departureStationId: "",
        departureStationName: "",
        returnStationId: "",
        returnStationName: "",
        distance: "",
        duration: "",
      });

      setTimeout(() => {
        navigate("/trips");
      }, 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <form className="form-inline" onSubmit={handleSubmit}>
        <h2>Add new trip</h2>
        <div className="form-group ">
          <label htmlFor="email">Departure date :</label>
          <input
            type="datetime-local"
            className="form-control form-control-sm "
            id="departure-date"
            name="departureDate"
            value={trip.departureDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Return date:</label>
          <input
            type="datetime-local"
            className="form-control form-control-sm"
            id="return-date"
            name="returnDate"
            value={trip.returnDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Departure station Id:</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="departure-station-id"
            name="departureStationId"
            value={trip.departureStationId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Departure station name:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="departure-station-id"
            name="departureStationName"
            value={trip.returnStationName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Return station Id:</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="return-station-id"
            name="returnStationId"
            value={trip.returnStationId}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Return station name:</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="return-station-name"
            name="returnStationName"
            value={trip.returnStationName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Distance(m):</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="distance"
            name="distance"
            value={trip.distance}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Duration(sec):</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="duration"
            name="duration"
            value={trip.duration}
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

export default AddTrip;
