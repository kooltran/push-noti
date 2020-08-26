import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'

import './App.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <div className='container'>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
        </div>
      </Switch>
    </Router>
  )
}

export default App
