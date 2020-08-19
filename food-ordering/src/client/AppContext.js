import React, { useContext, useCallback, useReducer } from 'react'
import { rootReducer, initialStateCombined } from './reducers/rootReducer'

export const initialState = {
  menu: {
    isLoading: false,
    menuList: []
  }
}

export const AppContext = React.createContext({})

export const AppContextProvider = props => {
  const { children } = props
  const [data, dispatch] = useReducer(rootReducer, initialStateCombined)
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
