import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const roles = localStorage.getItem('roles')
  const isAdmin = roles === 'admin'

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  )
}

export default PrivateRoute
