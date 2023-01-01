import React, {useState, useEffect}from "react";
import "./addStation.css";
import { toast } from "react-toastify";
import axios from "axios";

const AddStation = () => {
  const[station, setStation]=useState({
    id:"",
    name:"",
    address:"",
    operator:"",
    capacity:"",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStation((prevStation) => {
      return { ...prevStation, [name]: value };
    });
  };

  // Post a new Station
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (station.id === "" || station.name==="" || station.address==="" || station.operator==="" || station.capacity==="") {
      return toast.error("Station name can not be empty");
    }
    try {
      await axios.post(`http://localhost:5000/stations/add-station`, station);
      toast.success("Station added successfully!");
      setStation((prevStation) => {
        return { ...prevStation, id: "", name:"",address:"",operator:"",capacity:"" };
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <form class="form-inline" onSubmit={handleSubmit }>
        <h2>Add New Station</h2>
        <div class="form-group ">
          <label for="email">Station Id :</label>
          <input type="text" class="form-control form-control-sm " id="id" name="id" onChange={handleInputChange}/>
        </div>
        <div class="form-group">
          <label for="pwd">Name:</label>
          <input type="text" class="form-control form-control-sm" id="name" name="name" onChange={handleInputChange}/>
        </div>
        <div class="form-group">
          <label for="pwd">Address:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="address"
            name="address"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="pwd">Operator:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="operator"
            name="operator"
            onChange={handleInputChange}
          />
        </div>
        <div class="form-group">
          <label for="pwd">Capacity:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="capacity"
            name="capacity"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" class="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStation;
