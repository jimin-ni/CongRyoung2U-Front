import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import { useState, useEffect } from "react";
import axios from 'axios';

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
    map.setZoom(5)
    setMap(map)
  }, [])
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const [locations, setLocations] = useState([])
  useEffect(() => {
    axios.get("api/stage/list").then((response) => {
      console.log(response.data.stageList)
      setLocations(response.data.stageList)
    })
  },[])

  const LocationList = locations?.map((data, index) => {
    const location = {
      lat: data.lat,
      lng: data.lng
    }
    return (
      <MarkerF position={location} data={data} key={index} />
    )
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {LocationList}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)