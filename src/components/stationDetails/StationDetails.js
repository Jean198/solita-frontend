import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StationsContext from "../../context/StationsContext";
import "./stationDetails.css";
import axios from "axios";
import loader from "../../assets/images/loader.gif";

const StationDetails = () => {
  const data = useContext(StationsContext);
  const stationsList = data.data;
  const [singleStationData, setsingleStationData] = useState([]);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  const countStationsOccurences = async (id) => {
    setLoading(true);
    try {
      await axios
        .get(`http://localhost:5000/stations/station/${id}`)
        .then((response) => {
          setsingleStationData(response.data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    countStationsOccurences(id);
  }, []);

  return (
    <div className="station-details-container">
      {stationsList &&
        stationsList
          .filter((station) => station.id === id)
          .map((station, index) => {
            return (
              <div key={index}>
                <h1>{station.name}</h1>
                <div  className="row station-box">
                  <ul>
                    <li>
                      <b>Address:</b>{" "}
                      <span className="address">{station.address}</span>
                      <ul className="mt-3">
                        <li>
                          Number of trips starting from this Station:{" "}
                          <b>{singleStationData.departureCounts}</b>
                        </li>
                        <li>
                          Number of trips Ending at this Station:{" "}
                          <b>{singleStationData.returnCounts}</b>
                        </li>
                        <li>
                          Average distance of trips starting from this station:{" "}
                          <b>
                            {singleStationData.averageDepartureDistance && singleStationData.averageDepartureDistance.toFixed(
                              2
                            )}
                          </b>{" "}
                          meters
                        </li>
                        <li>
                          Average distance of trips ending at this station:{" "}
                          <b>
                            {singleStationData.averageReturnDistance && singleStationData.averageReturnDistance.toFixed(2)}
                          </b>{" "}
                          meters
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="row  station-box mt-3">
                  <h3 className="mb-5">Popular stations</h3>
                  <div className="col-lg-6">
                    <div className="mb-5">
                      <b>
                        Popular departure stations for trips ending at{" "}
                        <span className="address">{station.name}</span>
                      </b>
                    </div>

                    {loading ? (
                      <div className="loading">
                        <img src={loader} alt="" />
                      </div>
                    ) : null}

                    {singleStationData.popularDepartureStations &&
                      singleStationData.popularDepartureStations.map(
                        (station, index) => {
                          return (
                            <div key={index} className="">
                              <p>
                                <b>{index + 1}</b>. {station._id}(Departures:{" "}
                                {station.count})
                              </p>
                              <p></p>
                              <hr />
                            </div>
                          );
                        }
                      )}
                  </div>

                  <div className="col-lg-6">
                    <div className="mb-5">
                      <b>
                        Popular return stations for trips starting at{" "}
                        <span className="address">{station.name}</span>
                      </b>
                    </div>

                    {loading ? (
                      <div className="loading">
                        <img src={loader} alt="" />
                      </div>
                    ) : null}

                    {singleStationData.popularReturnStations &&
                      singleStationData.popularReturnStations.map(
                        (station, index) => {
                          return (
                            <div key={index}>
                              <p>
                                <b>{index + 1}</b>. {station._id}(Returns:{" "}
                                {station.count})
                              </p>
                              <p></p>
                              <hr />
                            </div>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default StationDetails;
