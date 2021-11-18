import leaflet from 'leaflet';
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../const';
import useMap from '../../hooks/useMap/useMap';
import type {Point} from '../../types/points';
import {State} from '../../types/state';
import {connect} from 'react-redux';
// import {points} from '../../fixtures/points';
// import {Cities} from '../../types/city';

// type AppProps = {
//   location: Cities[];
//   points: Points;
// };
const mapStateToProps = ({currentCityLocation, points}: State) => ({
  currentCityLocation,
  points,
});
const connector = connect(mapStateToProps, null);

function Map(props: any): JSX.Element {
  const {currentCityLocation, points} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, [currentCityLocation]);

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
            lat: point.latitude,
            lng: point.longitude,
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

export default connector(Map);
