import {Offer} from './offer';
import {CityLocation} from './offer';

export type State = {
  city: string,
  offers: Offer[],
  points: Offer[], //Не разобрался как типизировать , подтягивал Point[], но в редюсере начинает ругаться
  currentCityLocation: CityLocation | undefined,
  listCities: string[],
}
