import { cartActionTypes } from './cart.types';

const { TOGGLE_CART_HIDDEN } = cartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})