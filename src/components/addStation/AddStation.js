import React from "react";
import "./addStation.css";
const AddStation = () => {
  return (
    <div className="container">
      <form class="form-inline">
        <h2>Add New Station</h2>
        <div class="form-group ">
          <label for="email">Station Id :</label>
          <input type="text" class="form-control form-control-sm " id="id" />
        </div>
        <div class="form-group">
          <label for="pwd">Name:</label>
          <input type="text" class="form-control form-control-sm" id="name" />
        </div>
        <div class="form-group">
          <label for="pwd">Address:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="address"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Operator:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="operator"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Capacity:</label>
          <input
            type="number"
            class="form-control form-control-sm"
            id="capacity"
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
