import leaflet from 'leaflet';
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT} from '../const';
import useMap from '../../hooks/useMap/useMap';
import {Offer, CityLocation, Offers} from '../../types/offer';

type MapProps = {
  offers: Offers;
  currentCityLocation: CityLocation;
};

function Map(props: MapProps): JSX.Element {
  const {currentCityLocation, offers} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, [currentCityLocation]);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer: Offer ) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
