import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
import {Offers, Offer} from '../types/offer';
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

type Props = {
  city?: string;
  currentCity?: string;
  currentOffers: Offers;
}

function reducer(state: State = initialState, action: Actions): State {

  switch(action.type) {
    case ActionType.ChooseCity: {
      return {...initialState, city: action.payload.city};
    }
    case ActionType.FilterOffersCity: {
      const {city, currentOffers}: Props = action.payload;
      const filterOffers = currentOffers.filter((obj: Offer) => obj.city.name === city);
      return {...state, currentOffers: filterOffers};
    }
    case ActionType.GetCurrentCityLocation: {
      const {currentCity, currentOffers}: Props = action.payload;
      const currentCityLocation = currentOffers.find((item: Offer) =>  item.city.name === currentCity);
      return {...state, currentCityLocation: currentCityLocation?.city.location};
    }
    case ActionType.GetListCities: {
      const {currentOffers} = action.payload;
      const newArrCities = currentOffers.map((item: Offer) => (item.city.name));
      const uniqArrCities = newArrCities.filter((value: string, index: number) => newArrCities.indexOf(value) === index );

      return {...state, listCities: uniqArrCities};
    }
    default: return state;
  }
}
export {reducer};
