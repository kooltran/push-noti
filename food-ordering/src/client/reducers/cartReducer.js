import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  DELETE_CART,
  REMOVE_CART_ADDED,
} from '../actions/actionTypes'

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return {
        ...state,
        cartList: action.payload,
        cartAdded: true,
      }
    case REMOVE_CART_ADDED: {
      return { ...state, cartAdded: false }
    }
    case DELETE_CART_ITEM: {
      const { cartList } = state
      const selectedCartItem = action.payload
      return {
        ...state,
        cartList: cartList.filter(cart => cart.id !== selectedCartItem.id),
        cartAdded: false,
      }
    }
    case DELETE_CART: {
      return {
        ...state,
        cartList: [],
        cartAdded: false,
      }
    }
    default:
      return state
  }
}
