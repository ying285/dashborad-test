import React from "react";
import "../style/Logo.scss";
import "../style/NavBar.scss";
import { ReactComponent as ReactLogo } from "../image/logo.svg";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import DataFetch from "../hooks/dataFetch";
import { Link } from "react-router-dom";

const url = "https://api-test.innoloft.com/configuration/1/";

const Logo = () => {
  DataFetch(url);
  const config = useSelector((state: RootState) => state.config.config);

  return (
    <div className="logo">
      <div className="logo_icon">
        {config?.logo ? <img src={config?.logo} alt="logo" /> : <ReactLogo />}
      </div>
      <div className="logo_ul">
        <ul>
          <Link to="/" className="logo_link">
            <li>Main Page</li>
          </Link>
          <Link to="/product" className="logo_link">
            <li>Product</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Logo;
