import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul id="navul">
          <div className="space">
            <li id="A4">
              <a href="index.html">A4</a>
            </li>
            <li id="cntct">
              <h1>Contact</h1>
            </li>
            <li id="news">
              <h1>News</h1>
            </li>
          </div>
          <li id="abt">
            <h1>About</h1>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
