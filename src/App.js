import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar/NavBar";
import TripList from "./components/tripsList/TripsList";
import StationsList from "./components/stationsList/StationsList";
import StationsMap from "./components/stationsMap/StationsMap";
import StationsContext from "./context/StationsContext";
import "./App.css";
import axios from "axios";
import StationDetails from "./components/stationDetails/StationDetails";

function App() {
  const [data, setData] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(10);
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType] = useState("name");

  const getStations = async () => {
    try {
      await axios
        .get(
          `http://localhost:5000/stations?limit=${limit}&page=${pageNumber}&search=${searchString}&searchType=${searchType}`
        )
        .then((response) => {
          console.log(response.data)
          setData(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    getStations();
  }, [pageNumber]);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <StationsContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<TripList />} />
            <Route path="/stations-map" element={<StationsMap />} />

            <Route path="/stations" element={<StationsList changePage={changePage}/>} />
            <Route path="/stations/station/:id" element={<StationDetails />} />
          </Routes>
        </StationsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
