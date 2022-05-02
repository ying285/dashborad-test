import React, { useState } from "react";
import "../style/Product_part1.scss";
import ProductContent from "./ProductContent";
import { tabActions } from "../store/tab";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import DataFetch from "../hooks/dataFetch";

const url = "https://api-test.innoloft.com//product/6781/";

const Product_part1 = () => {
  DataFetch(url);
  const dispatch = useDispatch();
  const tabActive = useSelector((state: RootState) => state.tab.tabActive);
  const data = useSelector((state: RootState) => state.tab.data);

  const tabHandlerDes = () => {
    dispatch(tabActions.changeTab("tabDes"));
  };

  const tabHandlerAtt = () => {
    dispatch(tabActions.changeTab("tabAtt"));
  };

  return (
    <div className="productpart1">
      <div className="productpart1_image">
        <img src={data.picture} alt="Logo1" className="productpart1_img" />
      </div>
      <div className="productpart1_info">
        <h2>
          {data?.name} {data?.type?.name}
        </h2>
      </div>

      <div className="productpart1_tablayout">
        <ul className="productpart1_tab">
          <li
            className={tabActive === "tabDes" ? "active" : ""}
            onClick={tabHandlerDes}
          >
            Description
          </li>
          <li
            className={tabActive === "tabAtt" ? "active" : ""}
            onClick={tabHandlerAtt}
          >
            Attributes
          </li>
        </ul>
      </div>

      <div className="productpart1_content">
        <ProductContent />
      </div>
    </div>
  );
};

export default Product_part1;
