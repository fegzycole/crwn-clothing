import { cartActionTypes } from './cart.types';

const { TOGGLE_CART_HIDDEN, ADD_ITEMS } = cartActionTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: ADD_ITEMS,
  payload: item
})
