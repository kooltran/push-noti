import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="container">
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/orders" component={Orders} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
