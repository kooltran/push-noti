import {
  GET_MENU_LOADING,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
} from '../actions/actionTypes'

export const getMenuReducer = (state, action = {}) => {
  switch (action.type) {
    case GET_MENU_LOADING:
      return {
        ...state,
        isLoading: true,
        menuList: [],
        getMenuFail: null,
      }
    case GET_MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        menuList: action.payload,
        getMenuFail: null,
      }
    case GET_MENU_FAIL:
      return {
        ...state,
        isLoading: false,
        menuList: [],
        getMenuFail: action.payload.message,
      }
    default:
      return state
  }
}
