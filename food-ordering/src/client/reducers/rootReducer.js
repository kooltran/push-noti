import { getMenuReducer } from './getMenuReducer'
import { getCurUserReducer } from './getCurrentUserReducer'
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

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, menuInitState],
  currentUser: [getCurUserReducer, currentUserInitState]
})

export { rootReducer, initialStateCombined }
