import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from '../styles/Map.module.css'
import ChangeView from './ChangeView'
import { icon } from 'leaflet'
import Papa from 'papaparse'
import 'leaflet/dist/leaflet.css'

interface IPosition {
  latitude: number;
  longitude: number;
}

const marker = icon({
  iconUrl: "/marker.png",
  iconSize: [50, 50],
})

const Map = () => {
  const [center, setCenter] = useState<IPosition>([-7.77085909123274, 110.37761187446267]) 
  const size = 300;
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setCenter([position.coords.latitude, position.coords.longitude])
    });

    // fetch csv data from data folder using papaparse
    async function getData() {
      const response = await fetch('../data/spot.csv')
      console.log("res", response)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const rows = results.data // array of objects
      console.log(results)
    }
    getData()

  }, [])

  console.log("current", center)

  return (
    <>
    <MapContainer center={center} zoom={8} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      <ChangeView center={center} />
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
            <p>Great place to train parkour.</p>
          </Popup>
        </Marker>
        <Marker
          position={[-7.77185909123274, 110.37771187446267]}
          icon={marker}
        >
        </Marker>
    </MapContainer>
    </>
  )
}

export default Map
