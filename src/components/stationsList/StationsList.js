import React, { useContext, useRef } from "react";
import Station from "../station/Station";
import StationsContext from "../../context/StationsContext";
import "./stationsList.css";
import ReactPaginate from "react-paginate";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import leaflet from "../../assets/leaflet/leaflet";
import "leaflet/dist/leaflet.css";
import { defaultIcon } from "../../icons/defaultIcon";

const StationsList = ({ changePage, handleSearch, searchString }) => {
  const data = useContext(StationsContext);
  const stationsList = data.data;
  const allStationsList = data.allStations;
  const paging = data.paging;
  const totalRows = paging.total;
  const pageNumber = paging.page;
  const numberOfPages = paging.numberOfPages;

  const ZOOM_LEVEL = 11;
  const mapRef = useRef();

  return (
    <div className="row  mt-5">
      {/*  <div className="col-lg-6 station-img-container">
        <img src={station_img} alt="" className="station-img" />
      </div>*/}
      <div className="col-lg-6 all-stations-map">
        <MapContainer
          className="map-container"
          center={[60.21258729, 24.96985712]}
          zoom={ZOOM_LEVEL}
          ref={mapRef}
        >
          <TileLayer
            url={leaflet.maptiler.url}
            attribution={leaflet.maptiler.attribution}
          />

          {allStationsList &&
            allStationsList.map((station, index) => {
              if (station.x && station.y) {
                return (
                  <Marker position={[station.y, station.x]} icon={defaultIcon} key={index}>
                    <Popup>
                      <b>{station.name} <br />{station.address} </b>
                    </Popup>
                  </Marker>
                );
              }
            })}
        </MapContainer>
      </div>
      <div className="col-lg-6">
        <form action="form">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            value={searchString}
            onChange={handleSearch}
          />
        </form>
        <div className="table-responsive ">
          <table className=" table stations-table">
            <thead className="table-head ">
              <tr>
                <th scope="col"></th>
                <th>Station Id</th>
                <th scope="col">Station name</th>
              </tr>
            </thead>
            <tbody>
              {stationsList &&
                stationsList.map((station, index) => {
                  return (
                    <Station station={station} index={index} key={index} />
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <p className="data-statistics">
              Total Rows: <b>{totalRows}</b> &nbsp;&nbsp;&nbsp; Page:{" "}
              <b>{totalRows ? pageNumber + 1 : null}</b> of{" "}
              <b>{numberOfPages}</b>
            </p>
          </div>
          <div className="col-lg-6">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={numberOfPages}
              onPageChange={changePage}
              containerClassName={" pagination-btn pagination-list"}
              pageLinkClassName={" pagination-btn btn "}
              previousClassName={" pagination-btn btn btn-info previous-button"}
              nextClassName={" pagination-btn btn btn-info"}
              activeLinkClassName={" btn btn-success"}
              disabledClassName={"btn btn-light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationsList;
