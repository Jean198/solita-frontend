import React from "react";
import "./tripsList.css";
import "../searchForm/SearchForm"
import bike_img from '../../assets/images/bikes-img.jpg'
import SearchForm from "../searchForm/SearchForm";

const TripsList = ({tripsData}) => {
  return (
    <div className="container">
      <div>
        <img src={bike_img} alt="" className="bikes-img"/>
      </div>
      <SearchForm/>
      <div className="table-responsive mt-3">
        <table className=" table">
          <thead className="table-head ">
            <tr>
              <th scope="col"></th>
              <th scope="col">Departure</th>
              <th scope="col">Return</th>
              <th scope="col">Departure Station name</th>
              <th scope="col">Departure Station Id</th>
              <th scope="col">Return Station name</th>
              <th scope="col">Return Station Id</th>
              <th scope="col">Distance</th>
              <th scope="col">Duration</th>
            </tr>
          </thead>
          <tbody>

            {/*tripsData &&
              tripsData.map((trip, index) => {
                return (
                  <Trip trip={trip} index={index}/>
                );
              })*/}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TripsList;
