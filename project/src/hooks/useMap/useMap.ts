import {useEffect, useState} from 'react';
import leaflet from 'leaflet';

function useMap(mapRef: any, {...city}: any) {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  /* eslint-disable no-console */
  console.log('1',city[0].lat);
  /* eslint-enable no-console */

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
