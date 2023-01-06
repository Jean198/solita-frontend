import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { URL } from "../../App";
import "./addTrip.css";

const AddTrip = () => {
  const navigate = useNavigate();

  const [trip, setTrip] = useState({ //New trip object to post to the database
    departureDate: "",
    returnDate: "",
    departureStationId: "",
    departureStationName: "",
    returnStationId: "",
    returnStationName: "",
    distance: "",
    duration: "",
  });

  const handleInputChange = (event) => { //Caching form inputs
    const { name, value } = event.target;
    setTrip((prevTrip) => {
      return { ...prevTrip, [name]: value };
    });
  };

  const handleSubmit = async (event) => { // handling the form submition
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
      await axios.post(`${URL}trips/add-trip`, trip); //Posting the new trip
      toast.success("Trip added successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
      setTrip({ //Emptying the form fields after submition
        returnDate: "",
        departureStationId: "",
        departureStationName: "",
        returnStationId: "",
        returnStationName: "",
        distance: "",
        duration: "",
      });

      setTimeout(() => { //Redirecting to stations page after form submition
        navigate("/trips");
      }, 3000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="add-trip-title-container">
        <h2>Add new trip</h2>
      </div>
      <form className="form-inline add-trip-form" onSubmit={handleSubmit}>
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
            value={trip.departureStationName}
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
        <div className="add-trip-submit-button">
          <button type="submit" className="btn btn-success mt-3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTrip;
