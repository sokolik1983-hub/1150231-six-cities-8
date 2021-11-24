import {chooseCity, filterOffersCity, getCurrentCityLocation, getListCities} from '../store/action';
import {Offers, Point} from './offer';


export enum ActionType {
  ChooseCity = 'CHOOSE_CITY_CLICK',
  FilterOffersCity = 'FILTER_OFFER_CITY',
  FilterPointsCity = 'FILTER_POINTS_CITY',
  GetCurrentCityLocation = 'GET_CURRENT_CITY_LOCATION',
  GetListCities = 'GET_LIST_CITIES',
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
export type Actions =
  | ReturnType<typeof chooseCity>
  | ReturnType<typeof filterOffersCity>
  | ReturnType<typeof getCurrentCityLocation>
  | ReturnType<typeof getListCities>;
