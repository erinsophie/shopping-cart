import map from '../assets/products/map.jpg';
import candles from '../assets/products/candles.jpg';
import mugs from '../assets/products/mugsjpg';

const products = [
  {
    id: 10,
    categoryId: 4,
    name: 'Print of Map',
    image: map,
    price: 18,
    highlights: ['Handmade', 'Small business'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 11,
    categoryId: 4,
    name: 'Handmade Soy Wax Candles',
    image: candles,
    price: 16.99,
    highlights: ['Handmade', 'Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 12,
    categoryId: 4,
    name: 'Handmade Ceramic Mug',
    image: mugs,
    price: 28,
    highlights: ['Handmade', 'Small business', 'Materials: Ceramic'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 13,
    categoryId: 4,
    name: 'Handmade Plant Pot',
    image: mugs,
    price: 32,
    highlights: ['Handmade', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default products;
