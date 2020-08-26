import {
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
} from '../actions/actionTypes'

export const getOrdersReducer = (state, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        orderList: [],
        getOrdersFail: null
      }
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderList: action.payload,
        getOrdersFail: null
      }
    case GET_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        orderList: [],
        getOrdersFail: action.payload.message
      }
    default:
      return state
  }
}
