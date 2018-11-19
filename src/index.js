import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {BrowserRouter, Link, Switch, Route, Redirect} from 'react-router-dom'
import reducers from './redux/reducer'
// icon
import './icon/font-icon/iconfont.js'
import './common/common.styl'
// components
import Dashboard from './components/dashboard/dashboard'
import MovieDetail from './components/moviedetail/moviedetail'
// 初始化 store
const store = createStore(reducers, compose(
    // redux-thunk中间件可以让action创建函数先不返回一个action对象，而是返回一个函数，函数传递两个参数(dispatch,getState),在函数体内进行业务逻辑的封装
    applyMiddleware(thunk)
))
// BrowserRouter为hsitory模式需要后端支持 HashRouter为#hash模式
ReactDOM.render(
  // 1.在原应用组件上包裹一层，使原来整个应用成为Provider的子组件 2.接收Redux的store作为props，通过context对象传递给子孙组件上的connect
  (<Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path='/moviedetail/:movieID' component = {MovieDetail}></Route>
        <Route component = {Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>),
  document.getElementById('root')
)