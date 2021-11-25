import {chooseCity, filterOffersCity, getCurrentCityLocation, getListCities} from '../store/action';
import {loadCurrentOffers, requireAuthorization} from '../store/action';
import {Offers, Point} from './offer';
import {AxiosInstance} from 'axios';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {State} from './state';
import {Action} from '@reduxjs/toolkit';


export enum ActionType {
  ChooseCity = 'CHOOSE_CITY_CLICK',
  FilterOffersCity = 'FILTER_OFFER_CITY',
  FilterPointsCity = 'FILTER_POINTS_CITY',
  GetCurrentCityLocation = 'GET_CURRENT_CITY_LOCATION',
  GetListCities = 'GET_LIST_CITIES',
  LoadCurrentOffers = 'LOAD_CURRENT_OFFERS',
  RequireAuthorization = 'REQUIRE_AUTHORIZATION',
}
export type ChooseCityAction = {
  type: ActionType.ChooseCity;
  payload: string;
};
export type GetCurrentCityLocation = {
  type: ActionType.GetCurrentCityLocation;
  payload: {
    currentCityLocation: Point;
  }
};
export type FilterOfferCity = {
  type: ActionType.FilterOffersCity;
  payload: {
    currentOffers: Offers;
  }
};
export type GetListCities = {
  type: ActionType.GetListCities;
  payload: {
    uniqArrCities: string[];
  }
};
export type LoadCurrentOffers = {
  type: ActionType.LoadCurrentOffers;
  payload: {
    loadOffers: Offers;
  }
};
export type RequireAuthorization = {
  type: ActionType.LoadCurrentOffers;
};
export type Actions =
  | ReturnType<typeof chooseCity>
  | ReturnType<typeof filterOffersCity>
  | ReturnType<typeof getCurrentCityLocation>
  | ReturnType<typeof getListCities>
  | ReturnType<typeof loadCurrentOffers>
  | ReturnType<typeof requireAuthorization>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
