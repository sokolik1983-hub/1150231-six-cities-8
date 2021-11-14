import leaflet from 'leaflet';
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../const';
import useMap from '../../hooks/useMap/useMap';
import type {Points, Point} from '../../types/points';
import {Cities} from '../../types/city';

type AppProps = {
  location: Cities[];
  points: Points;
};

function Map(props: AppProps): JSX.Element {
  const {location, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points?.forEach((point: Point ) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, defaultCustomIcon]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
