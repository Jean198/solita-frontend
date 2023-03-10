import React, { useState, useEffect } from "react";
import "./tripsList.css";
import "../searchForm/SearchForm";
import SearchForm from "../searchForm/SearchForm";
import Trip from "../trip/Trip";
import axios from "axios";
import ReactPaginate from "react-paginate";
import loader from "../../assets/images/loader.gif";
import { URL } from "../../App";

const TripsList = () => {
  const [tripsData, setTripsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(100);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState("departure_station_id");
  const [popularDepartureStations, setPopularDepartureStations] = useState([]);
  const [popularReturnStations, setPopularReturnStations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrips = async () => {
    setLoading(true);
    await axios
      .get(
        `${URL}?limit=${limit}&page=${pageNumber}&search=${searchString}&searchType=${searchType}` //Getting trips with specified parameters
      )
      .then((response) => {
        setTripsData(response.data.data);
        setTotalRows(response.data.paging.total);
        setPageNumber(response.data.paging.page);
        setNumberOfPages(response.data.paging.numberOfPages);
        setPopularDepartureStations(response.data.popularDepartureStations);
        setPopularReturnStations(response.data.popularReturnStations);
      });
    setLoading(false);
  };

  const handleSearch = (e) => {
    //Catching form inputs
    setSearchString(e.target.value);
  };

  const handleOptionsChange = (e) => {
    //Catching the search options
    setSearchType(e.target.value);
  };

  const changePage = ({ selected }) => {
    //Setting the current page
    setPageNumber(selected);
  };

  useEffect(() => {
    getTrips();
  }, [pageNumber, searchString]);

  return (
    <div className="container">
      <SearchForm
        handleSearch={handleSearch}
        searchString={searchString}
        handleOptionsChange={handleOptionsChange}
      />

      <div className="table-responsive scrollable">
        <table className=" table">
          <thead className="table-head ">
            <tr>
              <th scope="col"></th>
              <th scope="col">Departure Station name</th>
              <th scope="col">Departure Station Id</th>
              <th scope="col">Return Station name</th>
              <th scope="col">Return Station Id</th>
              <th scope="col">Distance(km)</th>
              <th scope="col">Duration(mins)</th>
            </tr>
          </thead>
          <tbody>
            {tripsData &&
              tripsData.map((trip, index) => {
                return <Trip trip={trip} index={index} key={index} />;
              })}
          </tbody>
        </table>
        <div className="trips-loading">
          {loading && <img src={loader} alt="" className="loader" />}
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-4">
          <p className="data-statistics">
            Total Rows: <b>{totalRows}</b> &nbsp;&nbsp;&nbsp; Page:{" "}
            <b>{totalRows ? pageNumber + 1 : null}</b> of <b>{numberOfPages}</b>
          </p>
        </div>
        <div className="col-lg-8">
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={numberOfPages}
            onPageChange={changePage}
            containerClassName={"pagination-list"}
            pageLinkClassName={" pagination-btn btn "}
            previousClassName={" pagination-btn btn btn-info"}
            nextClassName={" pagination-btn btn btn-info"}
            activeLinkClassName={"pagination-btn btn btn-success "}
            disabledClassName={" btn btn-light"}
          />
        </div>
      </div>
      <hr />
      <div className="row mt-5 popular-stations">
        <div className="col-lg-5 popular-departure-stations">
          <h4>Top 5 popular departure stations</h4>
          <hr />
          {popularDepartureStations &&
            popularDepartureStations.map((station, index) => {
              return (
                <p key={index}>
                  {index + 1}. {station._id} (<b>{station.count}</b> departure
                  trips)
                </p>
              );
            })}
        </div>

        <div className="col-lg-5 popular-return-stations">
          <h4>Top 5 popular return stations</h4>
          <hr />
          {popularReturnStations &&
            popularReturnStations.map((station, index) => {
              return (
                <p key={index}>
                  {index + 1}. {station._id} (<b>{station.count}</b> Return
                  trips)
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TripsList;
