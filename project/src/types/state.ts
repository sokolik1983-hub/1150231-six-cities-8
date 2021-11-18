import {Offer} from "./offer";

export type State = {
  city: string,
  offers: Offer[], //написал сначала object[], но eslint выдаёт ошибку, что-то типа "нельзя использовать, ибо сложно)
  points: any[],
  currentCityLocation: object,
}
