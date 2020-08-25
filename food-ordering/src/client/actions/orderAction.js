import {
  SUBMIT_ORDERS_REQUEST,
  SUBMIT_ORDERS_SUCCESS,
  SUBMIT_ORDERS_FAIL,
  GET_ORDER_LIST
} from './actionTypes'

export const submitOrderRequest = () => ({
  type: SUBMIT_ORDERS_REQUEST
})

export const submitOrderSuccess = () => ({
  type: SUBMIT_ORDERS_SUCCESS
})

export const submitOrderFail = res => ({
  type: SUBMIT_ORDERS_FAIL,
  payload: res
})

export const getOrderList = () => ({
  type: GET_ORDER_LIST
})
