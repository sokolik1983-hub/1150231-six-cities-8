import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
import {Offer} from '../types/offer';
import {Actions, ActionType} from '../types/action';


const initialState = {
  city: 'Paris',
  offers,
  points: [],
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
  currentOffers: Offer[];
}

function reducer(state: State = initialState, action: Actions): State {
  switch(action.type) {

    case ActionType.ChooseCity: {
      const {city} = action.payload;
      return {...initialState, city: city.payload};
    }
    case ActionType.FilterOffersCity: {
      const {city, currentOffers}: Props = action.payload;
      const filterOffers = currentOffers.filter((obj: Offer) => obj.city.name === city);
      return {...state, offers: filterOffers};
    }
    case ActionType.FilterPointsCity: {
      const {currentCity, currentOffers}: Props = action.payload;
      let filterPoints = currentOffers.map((item: Offer) => {
        if(item.city.name === currentCity) {
          return item.location;
        }
      });
      filterPoints = filterPoints.filter((item) => item && item);
      return {...state, points: filterPoints};
    }
    case ActionType.GetCurrentCityLocation: {
      const {currentCity, currentOffers}: Props = action.payload;
      const currentCityLocation = currentOffers.find((item: Offer) => {
        if(item.city.name === currentCity) {
          return item;
        }
      });
      return {...state, currentCityLocation: currentCityLocation?.city.location};
    }
    case ActionType.GetListCities: {
      const {currentOffers} = action.payload;
      const newArrCities = currentOffers.map((item: Offer) => (item.city.name));

      const uniqArrCities = Array.from(new Set([...newArrCities]));

      return {...state, listCities: uniqArrCities};
    }

    default: return state;
  }
}
export {reducer};
