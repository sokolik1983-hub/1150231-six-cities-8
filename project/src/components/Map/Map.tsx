// import leaflet from 'leaflet';
import {useRef} from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap/useMap';

function Map({city}: any) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
