import React from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";

function Mainheader() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Discover Stunning Images</h1>
        <p>Find inspiration and creativity around every corner</p>
        <div className="search-box">
          <input type="text" placeholder="Search for free photos and videos" />
          <FaSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
}
export default Mainheader;
