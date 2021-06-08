import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { getCsvFromAPI } from "../lib/FetchAPI";
import styles from "../styles/Map.module.css";
import ChangeView from "./ChangeView";
import { icon } from "leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";

const marker = icon({
  iconUrl: "/marker.png",
  iconSize: [50, 50],
});

const mapStyle = { height: "100vh", width: "100%" };

const Map = () => {
  const [center, setCenter] = useState<any>([
    -7.77085909123274, 110.37761187446267,
  ]);
  const [spots, setSpots] = useState<any>(null);

  useEffect(() => {
    // ask user for their current location
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter([position.coords.latitude, position.coords.longitude]);
    });

    async function getData() {
      let response = await getCsvFromAPI();
      setSpots(response);
    }

    getData();
  }, []);

  return (
    <>
      <MapContainer
        center={center}
        zoom={10}
        scrollWheelZoom={false}
        style={mapStyle}
      >
        <ChangeView center={center} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {spots
          ? spots.map((val: any) => {
              return (
                <Marker position={[val.latitude, val.longitude]} icon={marker}>
                  <Popup>
                    <h2>{val.SpotName}</h2>
                    <p>{val.Description}</p>
                    <p>
                      {val.City}, {val.Country}
                    </p>
                    <a
                      href={`http://maps.google.com/maps?q=${val.latitude},${val.longitude}`}
                    >
                      Open with google maps
                    </a>
                  </Popup>
                </Marker>
              );
            })
          : null}
      </MapContainer>
    </>
  );
};

export default Map;
