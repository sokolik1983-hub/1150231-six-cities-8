import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import camelcaseKeys from 'camelcase-keys';

const initialState: State = {
  city: 'Paris',
  offers,
  points: [],
  currentOffers: [],
  currentCityLocation: {
    'latitude': 52.370216,
    'longitude': 4.895168,
    'zoom': 13,
  },
  listCities: [],
  loadOffers: [],
  isDataLoaded: false,
};

function reducer(state: State = initialState, action: Actions): State {

  switch(action.type) {
    case ActionType.ChooseCity: {
      return {...state, city: action.payload.city};
    }
    case ActionType.FilterOffersCity: {
      return {...state, currentOffers: action.payload.currentOffers};
    }
    case ActionType.GetCurrentCityLocation: {
      return {...state, currentCityLocation: action.payload.cityLocation};
    }
    case ActionType.GetListCities: {
      return {...state, listCities: action.payload.uniqArrCities};
    }
    case ActionType.LoadCurrentOffers: {
      return {...state, loadOffers: camelcaseKeys(action.payload), isDataLoaded: true};
    }
    // case ActionType.RequireAuthorization:
    //   return {
    //     ...state,
    //     authorizationStatus: action.payload,
    //   };
    default: return state;
  }
}
export {reducer};
