import React from "react";
import { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import "react-edit-text/dist/index.css";
import UpdateForm from "../component/UpdateForm";
import "../style/ProductTab.scss";

const ProductTabDes = () => {
  const data = useSelector((state: RootState) => state.tab.data);

  const updateData = useSelector((state: RootState) => state.update.updateData);
  console.log(updateData);

  const updateDescription = updateData?.description;
  const newUpdateDescription = updateDescription?.slice(158);

  return (
    <div className="description">
      {newUpdateDescription ? (
        <p>{newUpdateDescription}</p>
      ) : (
        <p>{data.description}</p>
      )}
      <UpdateForm
        type={"text"}
        url={"https://api-test.innoloft.com/product/6781/"}
        btn={"Update Des"}
        inputWidth={10}
        inputHeight={0.5}
      />
    </div>
  );
};

export default ProductTabDes;
