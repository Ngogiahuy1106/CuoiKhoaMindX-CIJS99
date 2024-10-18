import React from "react";
import "./Compare.css";

function Compare() {
  return (
    <>
      <img src="/public/General Info.png" alt="" className="table"/>
      <img src="/public/Engine Details.png" alt="" className="table"/>
      <img src="/public/Dimension Details.png" alt="" className="table"/>
      <img src="/public/Feature.png" alt="" className="table"/>
      <img src="/public/ImagesVideo.png" alt="" className="table"/>
      <div className="container">
        <div className="flex">
            <span></span>
            <span className="Vehicle_History">Vehicle History</span>
            <img src="/public/icon-down.png" alt=""  className="Vehicle_History"/>
        </div>
        <hr />
        <div className="flex">
            <a href="#">Vehicle History</a>
            <a href="#">Vehicle History</a>
            <span></span>
        </div>
      </div>

    </>
  );
}

export default Compare;
