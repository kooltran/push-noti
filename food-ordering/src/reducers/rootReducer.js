import { getMenuReducer } from './getMenuReducer'
import combineReducers from 'react-combine-reducers'
// import { initialState } from '../AppContext'

const initialState = {
  searchResult: [],
  isLoading: false,
  searchFail: null,
}

const [rootReducer, initialStateCombined] = combineReducers({
  menu: [getMenuReducer, initialState],
})

export default rootReducer
