import {ActionType} from '../types/action';
import {createAction} from '@reduxjs/toolkit';

export const chooseCity = createAction(
  ActionType.ChooseCity,
  (city) => ({
    payload: {
      city,
    },
  } as const),
);
export const filterOffersCity = createAction(
  ActionType.FilterOffersCity,
  (city, currentOffers) => ({
    payload: {
      city,
      currentOffers,
    },
  } as const),
);
export const getCurrentCityLocation = createAction(
  ActionType.GetCurrentCityLocation,
  (currentCity, currentOffers) => ({
    payload: {
      currentCity,
      currentOffers,
    },
  } as const),
);
export const getListCities = createAction(
  ActionType.GetListCities,
  (currentOffers) => ({
    payload: {
      currentOffers,
    },
  } as const),
);
