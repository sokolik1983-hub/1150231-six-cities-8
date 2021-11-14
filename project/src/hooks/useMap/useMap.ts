import {useEffect, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {MutableRefObject} from 'react';
import {Cities} from '../../types/city';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, location: Cities[]): Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: leaflet.Map = leaflet.map(mapRef.current, {
        center: {
          lat: location[0].lat,
          lng: location[0].lng,
        },
        zoom: location[0].zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, location]);

  useEffect(()=> {
    map?.setView([location[0].lat, location[0].lng],location[0].zoom);
  },[location]);

  return map;
}

export default useMap;
