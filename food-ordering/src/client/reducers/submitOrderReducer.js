import {
  SUBMIT_ORDERS_REQUEST,
  SUBMIT_ORDERS_SUCCESS,
  SUBMIT_ORDERS_FAIL
} from '../actions/actionTypes'

export const submitOrderReducer = (state, action) => {
  switch (action.type) {
    case SUBMIT_ORDERS_REQUEST:
      return {
        ...state,
        createOrderSuccess: false,
        isLoading: true,
        submitOrderFail: null
      }
    case SUBMIT_ORDERS_SUCCESS:
      return {
        ...state,
        createOrderSuccess: true,
        isLoading: false,
        submitOrderFail: null
      }
    case SUBMIT_ORDERS_FAIL:
      return {
        ...state,
        createOrderSuccess: false,
        isLoading: false,
        submitOrderFail: action.payload
      }
    default:
      return state
  }
}
