import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 py-1 shadow-sm">
      <Link className="navbar-brand" to="/" style={{ fontStyle: "italic" }}>
        Galify
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold mx-2"
              to="/"
              style={{ fontStyle: "italic" }}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold mx-2"
              to="/"
              style={{ fontStyle: "italic" }}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link fw-semibold mx-2"
              to="/"
              style={{ fontStyle: "italic" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
