import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
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
};

function reducer(state: State = initialState, action: Actions): State {
  switch(action.type) {

    case ActionType.ChooseCity: {
      const {city} = action.payload;
      return {...initialState, city: city.payload};
    }
    case ActionType.FilterOffersCity: {
      const {city, currentOffers}: any = action.payload;
      const filterOffers = currentOffers.filter((obj: any) => obj.city.name === city);
      return {...state, offers: filterOffers};
    }
    case ActionType.FilterPointsCity: {
      const {currentCity, currentOffers}: any = action.payload;
      let filterPoints = currentOffers.map((item: any) => {
        if(item.city.name === currentCity) {
          return item.location;
        }
      });
      filterPoints = filterPoints.filter((item: any) => item && item);
      return {...state, points: filterPoints};
    }
    case ActionType.GetCurrentCityLocation: {
      const {currentCity, currentOffers}: any = action.payload;
      const currentCityLocation = currentOffers.find((item: any) => {
        if(item.city.name === currentCity) {
          return item;
        }
      });
      return {...state, currentCityLocation: currentCityLocation.city.location};
    }

    default: return state;
  }
}
export {reducer};

// return {...state, offers: currentOffers.filter((offer: any) => (offer.city.name === city))};
