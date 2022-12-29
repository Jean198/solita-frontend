import React from 'react'
import { Link } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Helsinki City Bikes
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
                  <Link to="/" className="nav-link active">All Trips</Link>
                </li>
                <li className="nav-item">
                <Link to="/stations" className="nav-link active">Stations</Link>
                </li>
                <li className="nav-item">
                <Link to="/stations-map" className="nav-link active">Stations Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  )
}

export default NavBar