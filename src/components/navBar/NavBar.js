import React from 'react'
import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-none">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <h2>Helsinki Bike Trips</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/trips" className="nav-link active">ALL TRIPS</Link>
                </li>
                <li className="nav-item">
                <Link to="/stations" className="nav-link active">STATIONS</Link>
                </li>

                <li className="nav-item">
                <Link to="/trips/add-trip" className="nav-link active">ADD TRIP</Link>
                </li>
                <li className="nav-item">
                <Link to="/stations/add-station" className="nav-link active">ADD STATION</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  )
}

export default NavBar