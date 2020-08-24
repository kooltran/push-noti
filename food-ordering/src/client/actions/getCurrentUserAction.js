import { GET_CUR_USER_SUCCESS, GET_CUR_USER_FAIL } from './actionTypes'

export const getCurrentuserSuccess = res => ({
  type: GET_CUR_USER_SUCCESS,
  payload: res
})

export const getCurrentuserFail = response => ({
  type: GET_CUR_USER_FAIL,
  payload: response
})
