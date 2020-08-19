import { getMenuReducer } from './getMenuReducer'
import combineReducers from 'react-combine-reducers'

const initialState = {
  menuList: [],
  isLoading: false,
  getMenuFail: null
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, initialState]
})

export { rootReducer, initialStateCombined }
