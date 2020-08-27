import { SET_ORDER_TIMEOUT, RESET_ORDER_TIMEOUT } from '../actions/actionTypes'

export const setOrderTimeout = () => ({ type: SET_ORDER_TIMEOUT })

export const resetOrderTimeout = () => ({ type: RESET_ORDER_TIMEOUT })
