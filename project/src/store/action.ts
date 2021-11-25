import {ActionType} from '../types/action';
import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../const';

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
export const loadCurrentOffers = createAction(
  ActionType.LoadCurrentOffers,
  (loadOffers) => ({
    payload: loadOffers,
  } as const),
);
export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);
