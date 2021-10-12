import CardProps from 'types/forCards';

const cards : CardProps[] = [
  {
    id: 1,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    title: 'Beautiful &amp; luxurious apartment at great location',
  },
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    title: 'Wood and stone place',
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    title: 'Canal View Prinsengracht',
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    type: 'Apartment',
    title: 'Nice, cozy, warm big bed apartment',
  },
  {
    id: 5,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    title: 'Wood and stone place',
  },
];

export default cards;
