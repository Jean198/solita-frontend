import "./searchForm.css";
import React from "react";

//The trips search form
const SearchForm = ({ handleSearch, searchString, handleOptionsChange }) => {
  return (
    <>
      <form className="form-outline mt-5">
        <div className="row">
          <div className="col-lg-3">
            <select
              name="languages"
              id="lang"
              className="trips-form form-select form-control shadow-none "
              onChange={handleOptionsChange}
            >
              <option value="departure_station_id" type="string">
                <div>Search by</div>
              </option>
              <option value="departure_station_name" type="string">
                Departure Station name
              </option>
              <option value="departure_station_id" type="string">
                Departure Station Id
              </option>
              <option value="return_station_name" type="string">
                Return Station name
              </option>
              <option value="return_station_id" type="string">
                Return Station Id
              </option>
            </select>
          </div>
          <div className="col-lg-9">
            <input
              type="search"
              id="form1"
              className="trips-form form-control shadow-none"
              placeholder="Search"
              aria-label="Search"
              value={searchString}
              onChange={handleSearch}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchForm;
