import {chooseCity, filterOffersCity, filterPointsCity, getCurrentCityLocation} from '../store/action';


export enum ActionType {
  ChooseCity = 'CHOOSE_CITY_CLICK',
  FilterOffersCity = 'FILTER_OFFER_CITY',
  FilterPointsCity = 'FILTER_POINTS_CITY',
  GetCurrentCityLocation = 'GET_CURRENT_CITY_LOCATION',
}
export type ChooseCityAction = {
  type: ActionType.ChooseCity;
  payload: string;
};
export type GetCurrentCityLocation = {
  type: ActionType.GetCurrentCityLocation;
  payload: {
    currentCity: string;
    currentOffers: any;
  }
};
export type FilterOfferCity = {
  type: ActionType.FilterOffersCity;
  payload: {
    city: string;
    offers: any;
  }
};
export type FilterPointsCity = {
  type: ActionType.FilterPointsCity;
  payload: {
    currentCity: string;
    currentOffers: any;
  }
};
export type Actions =
  | ReturnType<typeof chooseCity>
  | ReturnType<typeof filterOffersCity>
  | ReturnType<typeof filterPointsCity>
  | ReturnType<typeof getCurrentCityLocation>;
