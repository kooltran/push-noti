import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  DELETE_CART
} from '../actions/actionTypes'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartList: action.payload
      }
    case DELETE_CART_ITEM: {
      const { cartList } = state
      const selectedCartItem = action.payload
      return {
        ...state,
        cartList: cartList.filter(cart => cart.id !== selectedCartItem.id)
      }
    }
    case DELETE_CART: {
      return {
        ...state,
        cartList: []
      }
    }
    default:
      return state
  }
}
