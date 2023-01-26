import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const containerStyle = {
  width: '100%',
  height: '990px'
};

const center = {
  lat: 37.5,
  lng: 127
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    map.setZoom(3)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [locations, setLocations] = useState([
    { lat: "35", lng: "127" },
    { lat: "-35", lng: "150 "}
  ]);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { <MarkerF position={center} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)