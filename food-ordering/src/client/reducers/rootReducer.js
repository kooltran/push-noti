import { getMenuReducer } from './getMenuReducer'
import { getCurUserReducer } from './getCurrentUserReducer'
import { cartReducer } from './cartReducer'
import { orderReducer } from './orderReducer'
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

const orderReducerInitState = {
  orderList: [],
  createOrderSuccess: false,
  isLoading: false,
  orderFail: null
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  currentUser: [getCurUserReducer, currentUserInitState],
  cart: [cartReducer, cartReducerInitState],
  order: [orderReducer, orderReducerInitState]
})

export { rootReducer, initialStateCombined }
