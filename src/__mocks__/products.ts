import Product from '../interfaces/Product';

export const products: Product[] = [
  {
    id: 1,
    title: 'Cupcake Colorido',
    price: 14.9,
    sale: false,
    image: require('../../assets/products/cupcake_colorido.jpeg'),
  },
  {
    id: 2,
    title: 'Cupcake Red Velvet',
    price: 16.49,
    sale: false,
    image: require('../../assets/products/cupcake_redvelvet.jpeg'),
  },
  {
    id: 3,
    title: 'Cupcake de Chocolate',
    price: 15.9,
    sale: true,
    image: require('../../assets/products/cupcake_chocolate.jpeg'),
  },
  {
    id: 4,
    title: 'Cupcake de Morango',
    price: 13.9,
    sale: true,
    image: require('../../assets/products/cupcake_morango.jpeg'),
  },
  {
    id: 5,
    title: 'Cupcake de Nutella',
    price: 18.9,
    sale: false,
    image: require('../../assets/products/cupcake_nutella.jpeg'),
  },
  {
    id: 6,
    title: 'Cupcake de Framboesa',
    price: 15.49,
    sale: true,
    image: require('../../assets/products/cupcake_framboesa.jpeg'),
  },
];
