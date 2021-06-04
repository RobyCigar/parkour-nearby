import { Map, useLeaflet } from 'react-leaflet'
import { OpenStreetMapProvider, GeoSearchControl, GoogleProvider } from 'leaflet-geosearch'
import { useEffect } from 'react';
import { getGoogleKey } from '../lib/FetchAPI';


// make new leaflet element
const Search = (props) => {
    const { map } = useLeaflet() // access to leaflet map
    const { provider } = props

    useEffect(() => {
        const googleKey = getGoogleKey()
        console.log("SHiiiit", googleKey)
        const provider = new GoogleProvider({
          params: {
            key: googleKey,
          },
        });
        const searchControl = new GeoSearchControl({
            provider,
        })

        map.addControl(searchControl) // this is how you add a control in vanilla leaflet
        return () => map.removeControl(searchControl)
    }, [props])

    return null // don't want anything to show up from this comp
}


export default function Map() {
  return (
    <Map {...otherProps}>
      {...otherChildren}
      <Search provider={new OpenStreetMapProvider()} />
    </Map>

  )
}