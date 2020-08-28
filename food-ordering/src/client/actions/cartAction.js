import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  DELETE_CART,
  REMOVE_CART_ADDED,
} from './actionTypes'

export const addCartItem = order => ({
  type: ADD_CART_ITEM,
  payload: order,
})

export const removeCartAddedFlag = () => ({ type: REMOVE_CART_ADDED })

export const deleteCartItem = order => ({
  type: DELETE_CART_ITEM,
  payload: order,
})

export const deleteCart = () => ({
  type: DELETE_CART,
})
