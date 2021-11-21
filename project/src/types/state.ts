import {Offers} from './offer';
import {CityLocation} from './offer';
import {Cities} from "./offer";

export type State = {
  city: Cities | any,
  offers: Offers,
  points: Offers,
  currentCityLocation: CityLocation | undefined,
  listCities: Cities[],
}
