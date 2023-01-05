import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar/NavBar";
import TripList from "./components/tripsList/TripsList";
import StationsList from "./components/stationsList/StationsList";
import StationsContext from "./context/StationsContext";
import AddTrip from "./components/addTrip/AddTrip";
import AddStation from "./components/addStation/AddStation";
import "./App.css";
import axios from "axios";
import StationDetails from "./components/stationDetails/StationDetails";
import Home from "./components/home/Home";

export const URL=process.env.REACT_APP_ENDPOINT;

function App() {
  const [data, setData] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [searchString, setSearchString] = useState("");

  const getStations = async () => {
    try {
      await axios
        .get(
          `${URL}/stations/?page=${pageNumber}&search=${searchString}`
        )
        .then((response) => {
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
    setSearchString(e.target.value);
  };

  useEffect(() => {
    getStations();
  },[pageNumber,searchString]);

  return (
    <Router>
      <div className="container">
        <NavBar />
        <StationsContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<TripList />} />
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
            <Route path="/trips/add-trip" element={<AddTrip />} />
            <Route path="/stations/add-station" element={<AddStation />} />
          </Routes>
        </StationsContext.Provider>
      </div>
    </Router>
  );
}

export default App;
