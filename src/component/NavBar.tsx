import React from "react";
import "../style/NavBar.scss";
import { Link } from "react-router-dom";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const NavBar = () => {
  const config = useSelector((state: RootState) => state.config.config);
  return (
    <div
      className="navbar"
      style={
        config?.mainColor
          ? { backgroundColor: config.mainColor }
          : { backgroundColor: "#272e71" }
      }
    >
      <ul>
        <Link to="/" className="navbar_link">
          <li>Main Page</li>
        </Link>
        <Link to="/product" className="navbar_link">
          <li>Product</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
