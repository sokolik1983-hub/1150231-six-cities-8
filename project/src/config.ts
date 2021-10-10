export {
  cards,
  amount
};

interface CardProps {
  id: number,
  isPremium: boolean,
  src: string,
  price: number,
  type: string,
  cardName: string,
}
const amount = 999;

const cards: CardProps[] = [
  {
    id: 1,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    cardName: 'Beautiful &amp; luxurious apartment at great location',
  },
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    cardName: 'Wood and stone place',
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    cardName: 'Canal View Prinsengracht',
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    type: 'Apartment',
    cardName: 'Nice, cozy, warm big bed apartment',
  },
  {
    id: 5,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    cardName: 'Wood and stone place',
  },
];
