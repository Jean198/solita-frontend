import React from 'react'

const AddTrip = () => {
  return (
    <div className="container">
      <form class="form-inline">
        <h2>Add New Trip</h2>
        <div class="form-group ">
          <label for="email">Departure date :</label>
          <input type="date" class="form-control form-control-sm " id="departure-date" />
        </div>
        <div class="form-group">
          <label for="pwd">Return date:</label>
          <input type="date" class="form-control form-control-sm" id="return-date" />
        </div>
        <div class="form-group">
          <label for="pwd">Departure station:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="departure-station"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Return station:</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="return-station"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Distance(m):</label>
          <input
            type="number"
            class="form-control form-control-sm"
            id="distance"
          />
        </div>
        <div class="form-group">
          <label for="pwd">Duration(sec):</label>
          <input
            type="number"
            class="form-control form-control-sm"
            id="duration"
          />
        </div>
        <button type="submit" class="btn btn-success mt-3">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddTrip