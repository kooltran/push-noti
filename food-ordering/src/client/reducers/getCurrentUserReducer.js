import { GET_CUR_USER_SUCCESS, GET_CUR_USER_FAIL } from '../actions/actionTypes'

export const getCurUserReducer = (state, action = {}) => {
  switch (action.type) {
    case GET_CUR_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        userFail: null,
      }
    case GET_CUR_USER_FAIL:
      return {
        ...state,
        user: {},
        userFail: action.payload.message,
      }
    default:
      return state
  }
}
