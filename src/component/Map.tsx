import React from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "100%",
};

function Map() {
  const data = useSelector((state: RootState) => state.tab.data);

  let lat = Number(data?.company?.address?.latitude);
  let lng = Number(data?.company?.address?.longitude);

  let center = {
    lat: lat,
    lng: lng,
  };

  console.log(center);

  console.log(typeof { lat: lat, lng: lng });
  console.log(typeof center);
  console.log(typeof { lat: 50.779729, lng: 6.100367 });
  return (
    <LoadScript googleMapsApiKey="AIzaSyAdoGWpCaAykmEMGqjX6yk_-1ICzD7YWDU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
