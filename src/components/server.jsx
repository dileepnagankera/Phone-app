import React from "react";

const Server = () => {
  const images = "../../images/download.jpg";
  return (
    <div className="container">
      <br />;
      <div className="row">
        <div className="col-md-6">
          <div className="card-body">
            <img src={images}></img>
            <h5 className="card-titla">Card Tital</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nobis repudiandae quibusdam odit ut hic!
            </p>
            <a href="" className="btn btn-primary">
              Go Somewhere
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <img src={images}></img>
            <h5 className="card-titla">Card Tital</h5>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nobis repudiandae quibusdam odit ut hic!
            </p>
            <a href="" className="btn btn-primary">
              Go Somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Server;
