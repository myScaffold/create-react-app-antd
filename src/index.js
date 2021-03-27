import React from 'react'
import ReactDOM from 'react-dom'
// 路由使用 history模式
import { BrowserRouter as Router } from 'react-router-dom'
// 路由采用 hash模式
// import { HashRouter as Router } from 'react-router-dom'
import '@/styles/index.less'
import LayoutIndex from '@/layout'
import reportWebVitals from './reportWebVitals'
// import { histort } from './routerConfig'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LayoutIndex />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
