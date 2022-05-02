import React from "react";
import "../style/Productmain.scss";
import Product_part1 from "./Product_part1";
import Product_part2 from "./Product_part2";

const ProductMain = () => {
  return (
    <div className="productmain">
      <div className="productmain_part1">
        <Product_part1 />
      </div>
      <div className="productmain_part2">
        <Product_part2 />
      </div>
    </div>
  );
};

export default ProductMain;
