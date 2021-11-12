import {chooseCity} from '../store/action';

export enum ActionType {
  ChooseCity = 'game/checkUserAnswer',
}
export type ChooseCityAction = {
  type: ActionType.ChooseCity;
  payload: string;
};

export type Actions =
  | ReturnType<typeof chooseCity>;
