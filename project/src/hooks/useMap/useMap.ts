import {useEffect, useState} from 'react';
import leaflet, {Map} from 'leaflet';
import {MutableRefObject} from 'react';
import {Cities} from '../../types/city';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, currentCityLocation: Cities[]): Map | null {
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance: leaflet.Map = leaflet.map(mapRef.current, {
        center: {
          lat: currentCityLocation[0].latitude,
          lng: currentCityLocation[0].longitude,
        },
        zoom: currentCityLocation[0].zoom,
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
  }, [mapRef, map, currentCityLocation]);

  useEffect(() => {
    if (currentCityLocation) {
      map?.setView([currentCityLocation[0].latitude, currentCityLocation[0].longitude], currentCityLocation[0].zoom);
    }
  }, [currentCityLocation, map]);


  return map;
}

export default useMap;
