import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

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
};

function reducer(state: State = initialState, action: Actions): State {

  switch(action.type) {
    case ActionType.ChooseCity: {
      return {...initialState, city: action.payload.city};
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
    default: return state;
  }
}
export {reducer};
