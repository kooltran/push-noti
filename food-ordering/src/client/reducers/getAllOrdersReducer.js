import {
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
} from '../actions/actionTypes'

export const getAllOrdersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        orderList: [],
        getOrdersFail: null,
      }
    case GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderList: action.payload,
        getOrdersFail: null,
      }
    case GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        isLoading: false,
        orderList: [],
        getOrdersFail: action.payload.message,
      }
    default:
      return state
  }
}
