import React, { useContext, useCallback, useReducer } from 'react'
import rootReducer from './reducers/rootReducer'
import { getMenuReducer } from './reducers/getMenuReducer'
console.log(rootReducer, 'rootReducer')
export const initialState = {
  searchResult: [],
  isLoading: false,
  searchFail: null,
}

export const AppContext = React.createContext({})

export const AppContextProvider = props => {
  const { children } = props
  const [data, dispatch] = useReducer(rootReducer, initialState)
  return (
    <AppContext.Provider value={{ data, setData: dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const { data, setData } = useContext(AppContext)

  const dispatch = useCallback(
    ({ type, payload }) => {
      setData({ payload, type })
    },
    [setData]
  )

  return [data, dispatch]
}
