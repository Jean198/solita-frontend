import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

//The Home page
const Home = () => {
  return (
    <div className="home-page">
      <main>
        <div className="homepage-title">
          <h1>Helsinki Bike Trips</h1>
          <h4 className="mt-3">
            All rent bike's trips information in one place!
          </h4>
        </div>
        <div className="row buttons-div">
          <Link to="/trips">
            <div className="btn btn-lg btn-dark button">Go to Trips</div>
          </Link>
          <Link to="/stations">
            <div className="btn btn-lg button btn-dark mt-3">See Stations</div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
