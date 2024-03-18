import React from "react";
import "../Css/Output.css";

const Output = (props) => {
  return (
    <div className="main-div d-flex  mt-5 ms-4" style={{ display: "flex" }}>
      <div className="cards">
        <img width="250" src={props.aman.image}></img>
        <p>{props.aman.name}</p>
        <h5 className="text-danger">{props.aman.price}</h5>
        <button className="button1 px-2 ">100% Cotton</button>
      </div>
    </div>
  );
};

export default Output;
