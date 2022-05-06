import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

import UpdateForm from "../component/UpdateForm";
import "../style/ProductTab.scss";

const ProductTabDes = () => {
  const data = useSelector((state: RootState) => state.tab.data);

  const updateData = useSelector((state: RootState) => state.update.updateData);
  console.log(updateData);

  const updateDescription = updateData?.description;
  console.log(updateDescription);

  const des = localStorage.getItem("des");

  return (
    <div className="description">
      {updateDescription ? (
        <textarea value={updateDescription}></textarea>
      ) : (
        <p>{data.description}</p>
      )}
      <UpdateForm
        type={"text"}
        url={"https://api-test.innoloft.com/product/6781/"}
        btn={"Update Des"}
        inputWidth={10}
        inputHeight={0.5}
        storageValue={"des"}
      />
    </div>
  );
};

export default ProductTabDes;
