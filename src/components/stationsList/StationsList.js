import React, { useContext} from "react";
import Station from "../station/Station";
import StationsContext from "../../context/StationsContext";
import station_img from "../../assets/images/station-img.png";
import "./stationsList.css";
import ReactPaginate from "react-paginate";


const StationsList = ({changePage, handleSearch, searchString}) => {
  const data = useContext(StationsContext);
  const stationsList = data.data;
  const paging = data.paging;
  const totalRows=paging.total;
  const pageNumber=paging.page;
  const numberOfPages=paging.numberOfPages

  return (
    <div className="row  mt-5">
      <div className="col-lg-6 station-img-container">
        <img src={station_img} alt="" className="station-img" />
      </div>
      <div className="col-lg-6">
        <form action="form">
        <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              value={searchString}
              onChange={handleSearch}
            />
        </form>
        <div className="table-responsive ">
          <table className=" table stations-table">
            <thead className="table-head ">
              <tr>
                <th scope="col"></th>
                <th>Station Id</th>
                <th scope="col">Station name</th>
              </tr>
            </thead>
            <tbody>

              {stationsList &&
                stationsList.map((station, index) => {
                  return (
                    <Station station={station} index={index} key={index} />
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6">
            <p className="data-statistics">
              Total Rows: <b>{totalRows}</b> &nbsp;&nbsp;&nbsp; Page:{" "}
              <b>{totalRows ? pageNumber+1 : null}</b> of{" "}
              <b>{numberOfPages}</b>
            </p>
          </div>
          <div className="col-lg-6">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={numberOfPages}
              onPageChange={changePage}
              containerClassName={"pagination-list"}
              pageLinkClassName={"btn "}
              previousClassName={"btn btn-info"}
              nextClassName={"btn btn-info"}
              activeLinkClassName={"btn btn-success"}
              disabledClassName={"btn btn-light"}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default StationsList;
