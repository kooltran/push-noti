import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import OrderList from './pages/Orders/OrderList'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <PrivateRoute path="/allOrders" component={OrderList} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
