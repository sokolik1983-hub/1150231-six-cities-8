import {points} from '../fixtures/points';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';


const initialState = {
  city: 'Paris',
  points,
};

function reducer(state: State = initialState, action: Actions): State {
  switch(action.type) {
    case ActionType.ChooseCity:
      return {...state, city:'Rome'};
    default: return state;
  }
}
export {reducer};
