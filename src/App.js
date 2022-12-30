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
  const [stationsData, setStationsData] = useState([]);

  const getStations = async () => {
    try {
      await axios.get(`http://localhost:5000/stations`).then((response) => {
        setStationsData(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <StationsContext.Provider value={stationsData}>
          <Routes>
            <Route path="/" element={<TripList />} />
            <Route path="/stations-map" element={<StationsMap />} />

            <Route path="/stations" element={<StationsList />} />
            <Route path="/stations/station/:id" element={<StationDetails/>} />
          </Routes>
        </StationsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
