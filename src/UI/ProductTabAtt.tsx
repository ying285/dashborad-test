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
  const updatedDategoriesName = updatedDategories
    ?.map((el: any) => el.name)
    .toString();

  const data = useSelector((state: RootState) => state.tab.data);
  const categories = data?.categories;
  const categoriesName = categories?.map((el: any) => el.name).toString();

  const updatedBusinessModel = updateData?.businessModels;
  const updatedBusinessModelName = updatedBusinessModel
    ?.map((el: any) => el.name)
    .toString();

  const businessModel = data?.businessModels;
  const businessModelName = businessModel?.map((el: any) => el.name).toString();

  return (
    <div className="producttabatt">
      <div>
        {updatedDategoriesName ? (
          <p>{updatedDategoriesName}</p>
        ) : (
          <p>{categoriesName}</p>
        )}
        <UpdateForm
          type={"text"}
          url={urlUpdating}
          btn={"Update Cate"}
          inputWidth={5}
          inputHeight={0.3}
        />
      </div>
      <div>
        {updatedBusinessModelName ? (
          <p>{updatedBusinessModelName}</p>
        ) : (
          <p>{businessModelName}</p>
        )}
        <UpdateForm
          type={"text"}
          url={urlUpdating}
          btn={"Update Mode"}
          inputWidth={5}
          inputHeight={0.3}
        />
      </div>
      <div className="producttabatt_trldata">
        <TrlData />
      </div>
    </div>
  );
};

export default ProductTabAtt;
