import React from 'react'
import { Route } from 'react-router-dom'

import { useAppContext } from '../../AppContext'
import Home from '../../pages/Home/Home'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [
    {
      currentUser: { user },
    },
  ] = useAppContext()
  const isAdmin = user.roles && user.roles.some(role => role === 'admin')
  return (
    <Route
      {...rest}
      render={props => (isAdmin ? <Component {...props} /> : <Home />)}
    />
  )
}

export default PrivateRoute
