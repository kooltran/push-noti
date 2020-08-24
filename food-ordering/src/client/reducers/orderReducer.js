import { ADD_ORDER } from '../actions/actionTypes'

export const orderReducer = (state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orderList: [action.payload]
      }
    default:
      return state
  }
}
