export type Offers = {
  map: (item: any) => JSX.Element;
  length: number;
  offers: Offer[];
}

export type Offer = {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: Host,
  id: number,
  images: string[],
  is_favorite: boolean,
  is_premium: boolean,
  location: Point,
  max_adults: number,
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
  points: Point[];
}

export type Point = {
  latitude: number;
  longitude: number;
  zoom?: number;
};

export type Host = {
  avatar_url: string,
  id: number,
  is_pro: boolean,
  name: string,
};

