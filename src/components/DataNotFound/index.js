import React from "react";
import "./dataNotFound.css";

const DataNotFound = ({ data = "No Data Found" }) => (
  <div className="no-result">{data}</div>
);

export default DataNotFound;
