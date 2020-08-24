import { ADD_ORDER } from './actionTypes'

export const addOrderItem = order => ({
  type: ADD_ORDER,
  payload: order
})
