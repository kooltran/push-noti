import { ADD_CART_ITEM, DELETE_CART_ITEM, DELETE_CART } from './actionTypes'

export const addCartItem = order => ({
  type: ADD_CART_ITEM,
  payload: order
})

export const deleteCartItem = order => ({
  type: DELETE_CART_ITEM,
  payload: order
})

export const deleteCart = () => ({
  type: DELETE_CART
})
