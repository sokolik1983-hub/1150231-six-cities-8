export interface BaseCard {
  id: number,
  isPremium: boolean,
  src: string,
  price: number,
  type: string,
  title: string,
  city: string,
  previewImage?: string,
}

export interface CardProps {
  setActiveCard?: (fields: BaseCard) => void,
}
