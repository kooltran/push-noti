import { SET_ORDER_TIMEOUT, RESET_ORDER_TIMEOUT } from '../actions/actionTypes'

export const setOrderTimeout = (state, action) => {
  switch (action.type) {
    case SET_ORDER_TIMEOUT:
      return {
        ...state,
        isOrderTimeout: true,
      }
    case RESET_ORDER_TIMEOUT: {
      return {
        ...state,
        isOrderTimeout: false,
      }
    }
    default:
      return state
  }
}
