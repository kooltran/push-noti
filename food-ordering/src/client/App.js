import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
