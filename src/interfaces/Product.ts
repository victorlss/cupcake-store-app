import {ImageSourcePropType} from 'react-native';

export default interface Product {
  id: number;
  title: string;
  price: number;
  sale: boolean;
  image: ImageSourcePropType;
}
