import {
  SUBMIT_ORDERS_REQUEST,
  SUBMIT_ORDERS_SUCCESS,
  SUBMIT_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAIL
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

export const getOrdersRequest = () => ({
  type: GET_ORDERS_REQUEST
})

export const getOrdersSuccess = res => ({
  type: GET_ORDERS_SUCCESS,
  payload: res
})

export const getOrdersFail = err => ({
  type: GET_ORDERS_FAIL,
  payload: err
})
