import React, { useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from '../styles/Map.module.css'
import 'leaflet/dist/leaflet.css'
import L, { icon } from 'leaflet'

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

interface IPosition {
  x: number;
  y: number;
}


const marker = icon({
  iconUrl: "/marker.png",
  iconSize: [50, 50],
})
const position = [-7.77085909123274, 110.37761187446267]

const Map = () => {
  const size = 300;
  return (
    <>
    <MapContainer center={[-7.77085909123274, 110.37761187446267]} zoom={13} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        <Marker
          position={[-7.77085909123274, 110.37761187446267]}
          icon={marker}
        >
          <Popup>
            <h2>UGM GSP</h2>
            <p>Note: Be careful, security here is mad</p>
          </Popup>
        </Marker>
    </MapContainer>
    </>
  )
}

export default Map
