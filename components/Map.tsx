import React, { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { getCsvFromAPI } from '../lib/FetchAPI'
import styles from '../styles/Map.module.css'
import ChangeView from './ChangeView'
import { icon } from 'leaflet'
import Papa from 'papaparse'
import Search from './Search'
import 'leaflet/dist/leaflet.css'

const marker = icon({
  iconUrl: "/marker.png",
  iconSize: [50, 50],
})

const Map = () => {
  const [center, setCenter] = useState<Array<number>>([-7.77085909123274, 110.37761187446267])
  const [spots, setSpots] = useState<any>(null)
  const size = 300;
  
  useEffect(() => {
    // ask user for their current location
    navigator.geolocation.getCurrentPosition(function(position) {
      setCenter([position.coords.latitude, position.coords.longitude])
    });
    
    async function getData() {
     let response = await getCsvFromAPI()
     setSpots(response)
    }

    getData()
  }, [])

  console.log('spotssssssss', spots)

  return (
    <>
    <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
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
        {
          spots.map(val => {
            return (
              <Marker
                position={[val.latitude, val.longitude]}
                icon={marker}
              >
                <Popup>
                  <h2>{val.SpotName}</h2>
                  <p>{val.Description}</p>
                  <a href={`http://maps.google.com/maps?q=${val.latitude},${val.longitude}`}>Open with google maps</a>
                </Popup>
              </Marker>
            )
          })
        }
    </MapContainer>
    </>
  )
}

export default Map
