import { getMenuReducer } from './getMenuReducer'
import { getCurUserReducer } from './getCurrentUserReducer'
import { cartReducer } from './cartReducer'
import { submitOrderReducer } from './submitOrderReducer'
import { getOrdersReducer } from './getOrdersReducer'
import combineReducers from 'react-combine-reducers'

const menuInitState = {
  menuList: [],
  isLoading: false,
  getMenuFail: null
}

const currentUserInitState = {
  user: {},
  userFail: null
}

const cartReducerInitState = {
  cartList: []
}

const submitorderReducerInitState = {
  createOrderSuccess: false,
  isLoading: false,
  submitOrderFail: null
}

const orderListReducerInitState = {
  orderList: [],
  isLoading: false,
  getOrdersFail: null
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  currentUser: [getCurUserReducer, currentUserInitState],
  cart: [cartReducer, cartReducerInitState],
  submitOrder: [submitOrderReducer, submitorderReducerInitState],
  orders: [getOrdersReducer, orderListReducerInitState]
})

export { rootReducer, initialStateCombined }
