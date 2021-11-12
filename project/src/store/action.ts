import {ActionType} from '../types/action';

export const chooseCity = (city: string) => ({
  type: ActionType.ChooseCity,
  payload: city,
});
