import {offers} from '../fixtures/currentOffers';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';


const initialState = {
  city: 'Paris',
  offers,
};

function reducer(state: State = initialState, action: Actions): State {
  switch(action.type) {
    case ActionType.ChooseCity:
      return {...state, city:'Rome'};
    default: return state;
  }
}
export {reducer};
