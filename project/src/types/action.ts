import {chooseCity, filterOffersCity, filterPointsCity, getCurrentCityLocation, getListCities} from '../store/action';
import {Offer} from './offer';


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
    currentCity: string;
    currentOffers: Offer[];
  }
};
export type FilterOfferCity = {
  type: ActionType.FilterOffersCity;
  payload: {
    city: string;
    offers: Offer[];
  }
};
export type FilterPointsCity = {
  type: ActionType.FilterPointsCity;
  payload: {
    currentCity: string;
    currentOffers: Offer[];
  }
};
export type GetListCities = {
  type: ActionType.GetListCities;
  payload: {
    currentOffers: Offer[];
  }
};
export type Actions =
  | ReturnType<typeof chooseCity>
  | ReturnType<typeof filterOffersCity>
  | ReturnType<typeof filterPointsCity>
  | ReturnType<typeof getCurrentCityLocation>
  | ReturnType<typeof getListCities>;
