import { getMenuReducer } from './getMenuReducer'
import { getCurUserReducer } from './getCurrentUserReducer'
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

const orderReducerInitState = {
  orderList: []
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  currentUser: [getCurUserReducer, currentUserInitState],
  order: [orderReducer, orderReducerInitState]
})

export { rootReducer, initialStateCombined }
