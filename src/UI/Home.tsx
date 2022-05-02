import React from "react";
import "../style/Home.scss";
import NavBar from "../component/NavBar";
import Logo from "../component/Logo";

const Home = () => {
  return (
    <div className="home">
      <div className="home_logo">
        <Logo />
      </div>
      <div className="home_main">
        <NavBar />

        <div className="home_mainpage">
          <h1>Welcome to my dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
