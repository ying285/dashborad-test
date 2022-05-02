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

  const center = {
    lat: Number(data?.company?.address?.latitude),
    lng: Number(data?.company?.address?.longitude),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAdoGWpCaAykmEMGqjX6yk_-1ICzD7YWDU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
