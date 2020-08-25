import {
  GET_ORDER_LIST,
  SUBMIT_ORDERS_REQUEST,
  SUBMIT_ORDERS_SUCCESS,
  SUBMIT_ORDERS_FAIL
} from '../actions/actionTypes'

export const orderReducer = (state, action) => {
  switch (action.type) {
    case GET_ORDER_LIST:
      return {
        ...state,
        isLoading: false,
        orderList: action.payload,
        orderFail: null
      }
    case SUBMIT_ORDERS_REQUEST:
      return {
        ...state,
        createOrderSuccess: false,
        isLoading: true,
        orderFail: null
      }
    case SUBMIT_ORDERS_SUCCESS:
      return {
        ...state,
        createOrderSuccess: true,
        isLoading: false,
        orderFail: null
      }
    case SUBMIT_ORDERS_FAIL:
      return {
        ...state,
        createOrderSuccess: false,
        isLoading: false,
        orderFail: action.payload
      }
    default:
      return state
  }
}
