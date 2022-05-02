import React from "react";
import "../style/Product_part2.scss";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Map from "../component/Map";

const Product_part2 = () => {
  const data = useSelector((state: RootState) => state.tab.data);

  return (
    <div className="productpart2">
      <div className="productpart2_userinfo">
        <div className="productpart2_img">
          {data?.user?.profilePicture && (
            <img src={data?.user?.profilePicture} alt="img" />
          )}
        </div>
        <div className="productpart2_userdetail">
          <p>
            {data?.user?.firstName} {data?.user?.lastName}
          </p>
          <p>{data?.company?.name}</p>
        </div>
      </div>
      <div className="productpart2_map">
        <Map />
        <div className="productpart2_text">
          <p>
            {data?.company?.address?.street} {data?.company?.address?.house}
          </p>
          <p>
            {data?.company?.address?.zipCode}{" "}
            {data?.company?.address?.city?.name}
          </p>
          <p>{data?.company?.address?.country?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Product_part2;
