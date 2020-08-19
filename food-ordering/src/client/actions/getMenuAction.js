import {
  GET_MENU_FAIL,
  GET_MENU_LOADING,
  GET_MENU_SUCCESS,
} from './actionTypes'

export const getMenuRequest = () => ({ type: GET_MENU_LOADING })

export const getMenuSuccess = res => ({
  type: GET_MENU_SUCCESS,
  payload: res,
})

export const getMenuFail = response => ({
  type: GET_MENU_FAIL,
  payload: response,
})
