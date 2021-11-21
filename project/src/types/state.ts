import {Offer} from './offer';
import {CityLocation} from './offer';
import {Cities} from "./offer";

export type State = {
  city: Cities | any,
  offers: Offer[],
  points: Offer[],
  currentCityLocation: CityLocation | undefined,
  listCities: Cities[],
}
