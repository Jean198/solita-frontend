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
  const [searchString, setSearchString] = useState("");

  const getStations = async () => {
    try {
      await axios
        .get(
          `http://localhost:5000/stations/?page=${pageNumber}&search=${searchString}`
        )
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchString(e.target.value);
  };

  useEffect(() => {
    getStations();
  }, [pageNumber, searchString]);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <StationsContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<TripList />} />
            <Route path="/stations-map" element={<StationsMap />} />

            <Route
              path="/stations"
              element={
                <StationsList
                  changePage={changePage}
                  handleSearch={handleSearch}
                  searchString={searchString}
                />
              }
            />
            <Route path="/stations/station/:id" element={<StationDetails />} />
          </Routes>
        </StationsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
