import React from 'react'
import ReactDOM from 'react-dom'
import App from './client/App'
import { AppContextProvider } from './client/AppContext'
import 'antd/dist/antd.css'

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
)
