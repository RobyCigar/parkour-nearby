import { useMap } from 'react-leaflet'

function ChangeView({ center, zoom }: {center: number, zoom: number}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeView;