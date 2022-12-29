import "./searchForm.css";
import React from "react";

const SearchForm = () => {
  return (
    <>
      <form class="form-outline mt-5">
        <div className="row">
          <div className="col-lg-3">
            <select name="languages" id="lang" onChange="" className="form-select form-control">
              <option value="departure_station_id" type="string">
                Search by <i class="fa-solid fa-angle-down"></i>
              </option>
              <option value="departure_station_id" type="string">
              Departure Station
              </option>
              <option value="departure_station_name" type="string">
              Departure Station Id
              </option>
              <option value="departure_station_name" type="string">
              Return Station
              </option>
              <option value="departure_station_name" type="string">
              Return Station Id
              </option>
            </select>
          </div>
          <div className="col-lg-9">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
