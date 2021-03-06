import { BaseCard } from 'types/cardProps';

const cards : BaseCard[] = [
  {
    id: 1,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    type: 'Apartment',
    title: 'Beautiful &amp; luxurious apartment at great location',
    city: 'Amsterdam',
  },
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    type: 'Private room',
    title: 'Wood and stone place',
    city: 'Berlin',
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    type: 'Apartment',
    title: 'Canal View Prinsengracht',
    city: 'Amsterdam',
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    type: 'Apartment',
    title: 'Nice, cozy, warm big bed apartment',
    city: 'Berlin',
  },
  {
    id: 5,
    isPremium: false,
    src: 'img/room.jpg',
    price: 801,
    type: 'Private room',
    title: 'Wood and stone place',
    city: 'Amsterdam',
  },
  {
    id: 6,
    isPremium: false,
    src: 'img/room.jpg',
    price: 801,
    type: 'Private room',
    title: 'Wood and stone place',
    city: 'London',
  },
];

export default cards;
