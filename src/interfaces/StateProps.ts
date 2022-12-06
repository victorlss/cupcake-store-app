import {CartItem} from './CartItem';

export interface StateProps {
  cartItems: CartItem[];
  auth?: {
    accessToken?: string;
    refreshToken?: string;
  };
}
