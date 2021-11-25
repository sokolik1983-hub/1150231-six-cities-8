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
  (currentOffers) => ({
    payload: {
      currentOffers,
    },
  } as const),
);
export const getCurrentCityLocation = createAction(
  ActionType.GetCurrentCityLocation,
  (cityLocation) => ({
    payload: {
      cityLocation,
    },
  } as const),
);
export const getListCities = createAction(
  ActionType.GetListCities,
  (uniqArrCities) => ({
    payload: {
      uniqArrCities,
    },
  } as const),
);
