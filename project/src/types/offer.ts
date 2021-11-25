export type Offers = Offer[];

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Point,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type City = {
  location: CityLocation,
  name: string,
};

export type CityLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type Points = {
  points?: Point[];
}

export type Point = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

export type Host = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};
export type Cities= {
  city: 'Paris'
    | 'Amsterdam'
    | 'Cologne'
    | 'Brussels'
    | 'Hamburg'
    | 'Dusseldorf',
}
