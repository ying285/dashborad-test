import React from "react";
import ProductTabDes from "./ProductTabDes";
import ProductTabAtt from "./ProductTabAtt";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const ProductContent = () => {
  const tabActive = useSelector((state: RootState) => state.tab.tabActive);
  return (
    <div>{tabActive === "tabDes" ? <ProductTabDes /> : <ProductTabAtt />}</div>
  );
};

export default ProductContent;
