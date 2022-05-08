import React from 'react';
import '../style/Product_part2.scss';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import Map from '../component/Map';

const Product_part2 = () => {
  const { config, tab } = useSelector((state: RootState) => state);
  return (
    <div className="productpart2">
      {config.config.hasUserSection && (
        <div className="productpart2_userinfo">
          <div className="productpart2_img">
            {tab.data?.user?.profilePicture && (
              <img src={tab.data?.user?.profilePicture} alt="img" />
            )}
          </div>
          <div className="productpart2_userdetail">
            <p>
              {tab.data?.user?.firstName} {tab.data?.user?.lastName}
            </p>
            <p>{tab.data?.company?.name}</p>
          </div>
        </div>
      )}
      <div className="productpart2_map">
        <Map />
        <div className="productpart2_text">
          <p>
            {tab.data?.company?.address?.street}{' '}
            {tab.data?.company?.address?.house}
          </p>
          <p>
            {tab.data?.company?.address?.zipCode}{' '}
            {tab.data?.company?.address?.city?.name}
          </p>
          <p>{tab.data?.company?.address?.country?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Product_part2;
