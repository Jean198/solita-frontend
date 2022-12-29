import React, {useState,useEffect} from "react";
import "./tripsList.css";
import "../searchForm/SearchForm"
import bike_img from '../../assets/images/bikes-img.jpg'
import SearchForm from "../searchForm/SearchForm";
import Trip from "../trip/Trip";
import axios from 'axios'
import ReactPaginate from "react-paginate";


const TripsList = () => {
  const [tripsData, setTripsData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [limit, setLimit] = useState(15);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [searchString, setSearchString] = useState("");
  const [searchType, setSearchType]=useState("departure_station_id")

  const getTrips = async () => {
    console.log(searchString)
    const response = await axios
      .get(
        `http://localhost:5000?limit=${limit}&page=${pageNumber}&search=${searchString}&searchType=${searchType}`
      )
      .then((response) => {
        console.log(response.data.data)
        setTripsData(response.data.data);
        setTotalRows(response.data.paging.total);
        setPageNumber(response.data.paging.page);
        setNumberOfPages(response.data.paging.numberOfPages);
      });
  };

  const handleSearch = (e) => {
    console.log(e.target.value)
    setSearchString(e.target.value);
  };

  const handleOptionsChange=(e)=>{
    console.log(e.target.value)
    setSearchType(e.target.value)
  }

  useEffect(() => {
    getTrips();
  }, [pageNumber, searchString]);



  return (
    <div className="container">
      <div>
        <img src={bike_img} alt="" className="bikes-img"/>
      </div>
      <SearchForm handleSearch={handleSearch} searchString={searchString} handleOptionsChange={handleOptionsChange}/>
      <div className="table-responsive mt-3">
        <table className=" table">
          <thead className="table-head ">
            <tr>
              <th scope="col"></th>
              <th scope="col">Departure Station name</th>
              <th scope="col">Departure Station Id</th>
              <th scope="col">Return Station name</th>
              <th scope="col">Return Station Id</th>
              <th scope="col">Distance(km)</th>
              <th scope="col">Duration(mins)</th>
            </tr>
          </thead>
          <tbody>

            {tripsData &&
              tripsData.map((trip, index) => {
                return (
                  <Trip trip={trip} index={index}/>
                );
              })}
          </tbody>
        </table>
        <p className="data-statistics">
            Total Rows: <b>{totalRows}</b> &nbsp;&nbsp;&nbsp; Page: <b>{totalRows ? pageNumber + 1 : null}</b> of{" "}
            <b>{numberOfPages}</b>
          </p>
      </div>
    </div>
  );
};

export default TripsList;
