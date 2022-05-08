import React from 'react';
import '../style/Home.scss';
// import Logo from "../component/Logo";
import NavBar from '../component/NavBar';
import ProductMain from './ProductMain';

const Product = () => {
  return (
    <div className="home">
      {/* <div className="home_logo">
        <Logo />
      </div> */}
      <div className="home_main">
        <NavBar />

        <div className="home_mainpage">
          <ProductMain />
        </div>
      </div>
    </div>
  );
};

export default Product;
