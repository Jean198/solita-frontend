import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './components/navBar/NavBar';
import TripList from './components/tripsList/TripsList'
import StationsList from './components/stationsList/StationsList'
import StationsMap from "./components/stationsMap/StationsMap";

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <Routes>
        <Route path="/" element={<TripList />} />
        <Route path="/stations" element={<StationsList />} />
        <Route path="/stations-map" element={<StationsMap />} />
      </Routes>

      </div>
    </Router>
  );
}

export default App;
