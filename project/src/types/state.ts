import {Offer} from "./offer";
import {CityLocation} from "./offer";

export type State = {
  city: string,
  offers: Offer[],
  points: any[],
  currentCityLocation: CityLocation | undefined,
  listCities: string[],
}
