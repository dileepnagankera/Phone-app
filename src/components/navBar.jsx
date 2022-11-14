import React from "react";
import { NavLink, Link } from "react-router-dom";

const navBar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Phone
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <div className="navbar-nav">
          <NavLink className="nav-link active" aria-current="page" to="/home">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

          <NavLink className="nav-link" to="/server">
            Server
          </NavLink>

          <NavLink className="nav-link" to="/form">
            Form
          </NavLink>
          <NavLink className="nav-link" to="/newform">
            NewForm
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default navBar;
