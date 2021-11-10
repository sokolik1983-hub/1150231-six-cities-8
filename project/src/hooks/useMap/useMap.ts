import {useEffect, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {MutableRefObject} from 'react';
import {City} from '../../types/city';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City[]): Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: leaflet.Map = leaflet.map(mapRef.current, {
        center: {
          lat: city[0].lat,
          lng: city[0].lng,
        },
        zoom: city[0].zoom,
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
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
