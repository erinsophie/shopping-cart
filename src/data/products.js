import map from '../assets/products/map.jpg';
import candles from '../assets/products/candles.jpg';
import mug from '../assets/products/mug.jpg';
import pot from '../assets/products/pot.jpg';
import wallArt from '../assets/products/wall-art.jpg';
import notebook from '../assets/products/notebook.jpg';
import backpack from '../assets/products/backpack.jpg';
import planner from '../assets/products/planner.jpg';
import doubleNecklace from '../assets/products/double-necklace.jpg';
import pearlNecklace from '../assets/products/pearl-necklace.jpg';
import earrings from '../assets/products/earrings.jpg';
import sweater from '../assets/products/sweater.jpg';
import pencilCase from '../assets/products/pencil-case.jpg';
import embroideredTee from '../assets/products/embroidered-tee.jpg';
import trousers from '../assets/products/trousers.jpg';

const products = [
  {
    id: 10,
    categoryId: 1,
    name: 'Notebook',
    image: notebook,
    price: 5.99,
    stars: 5,
    highlights: ['Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    id: 11,
    categoryId: 1,
    name: 'Recycled Material Backpack',
    image: backpack,
    price: 28,
    stars: 4,
    highlights: ['Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 12,
    categoryId: 1,
    name: 'Handmade Pencil Case',
    image: pencilCase,
    price: 10,
    stars: 5,
    highlights: ['Handmade', 'Small business'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 13,
    categoryId: 1,
    name: 'Homework Planner',
    image: planner,
    price: 12.99,
    stars: 3,
    highlights: ['Small business'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 14,
    categoryId: 2,
    name: 'Print of Map',
    image: map,
    price: 18,
    stars: 3,
    highlights: ['Handmade', 'Small business'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 15,
    categoryId: 2,
    name: 'Soy Wax Candles',
    image: candles,
    price: 16.99,
    stars: 5,
    highlights: ['Handmade', 'Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 16,
    categoryId: 2,
    name: 'Handmade Ceramic Mug',
    image: mug,
    price: 28,
    stars: 4,
    highlights: ['Handmade', 'Small business', 'Materials: Ceramic'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 17,
    categoryId: 2,
    name: 'Handmade Plant Pot',
    image: pot,
    price: 32,
    stars: 3,
    highlights: ['Handmade', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 18,
    categoryId: 2,
    name: 'Botanical Wall Art',
    image: wallArt,
    price: 10,
    stars: 5,
    highlights: ['Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 19,
    categoryId: 3,
    name: 'Double Chain Gold Necklace',
    image: doubleNecklace,
    price: 29.99,
    stars: 4,
    highlights: ['Handmade', 'Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 20,
    categoryId: 3,
    name: 'Pearl Necklace',
    image: pearlNecklace,
    price: 35,
    stars: 3,
    highlights: ['Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 21,
    categoryId: 3,
    name: 'Handmade Gold Earrings',
    image: earrings,
    price: 26,
    stars: 5,
    highlights: ['Handmade', 'Small business'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 22,
    categoryId: 4,
    name: 'Hand-knitted Sweater',
    image: sweater,
    price: 32,
    stars: 5,
    highlights: ['Handmade', 'Small business', 'Local seller', 'Pure wool'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 23,
    categoryId: 4,
    name: 'Linen Trousers',
    image: trousers,
    price: 18,
    stars: 5,
    highlights: ['Handmade', 'Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 24,
    categoryId: 4,
    name: 'Embroidered Tee',
    image: embroideredTee,
    price: 15.99,
    stars: 4,
    highlights: ['Small business', 'Local seller'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

export default products;
