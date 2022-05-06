import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import UpdateForm from "../component/UpdateForm";
import "../style/ProductTab.scss";
import TrlData from "../component/TrlData";

const urlUpdating = "https://api-test.innoloft.com//product/6781/";

const ProductTabAtt = () => {
  const updateData = useSelector((state: RootState) => state.update.updateData);

  const updatedDategories = updateData?.categories;
  const updatedDategoriesName = updatedDategories?.map((el: any) => el.name);

  const updatedBusinessModel = updateData?.businessModels;
  const updatedBusinessModelName = updatedBusinessModel?.map(
    (el: any) => el.name
  );
  /////////

  const data = useSelector((state: RootState) => state.tab.data);
  const categories = data?.categories;
  const categoriesName = categories?.map((el: any) => el.name);

  const cate: any = localStorage.getItem("categories");

  const cateArr = categoriesName.concat([categoriesName, cate]);
  console.log(categoriesName);
  console.log(cate);

  //////

  const businessModel = data?.businessModels;
  const businessModelName = businessModel?.map((el: any) => el.name);

  const mod = localStorage.getItem("models");

  const modeArr = businessModelName.concat(mod);

  return (
    <div className="producttabatt">
      <div>
        {cateArr ? <p>{cateArr.join(", ")}</p> : <p>{updatedDategoriesName}</p>}
        <UpdateForm
          type={"text"}
          url={urlUpdating}
          btn={"Update Cate"}
          inputWidth={5}
          inputHeight={0.3}
          storageValue={"categories"}
        />
      </div>
      <div>
        {modeArr ? (
          <p>{modeArr.join(", ")}</p>
        ) : (
          <p>{updatedBusinessModelName}</p>
        )}
        <UpdateForm
          type={"text"}
          url={urlUpdating}
          btn={"Update Mode"}
          inputWidth={5}
          inputHeight={0.3}
          storageValue={"models"}
        />
      </div>
      <div className="producttabatt_trldata">
        <TrlData />
      </div>
    </div>
  );
};

export default ProductTabAtt;
