import {Toast} from 'antd-mobile'
const axios = require('axios')
const GET_IN_THEATERS = 'GET_IN_THEATERS'
const GET_COMING_SOON = 'COMING_SOON'
const GET_TOP = 'GET_TOP'
const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
const initstate = {
  in_theaters: null,
  coming_soon: null,
  top: null,
  movie_detail: null
}
// reducer
export function data(state = initstate, action) {
  switch(action.type) {
    case GET_IN_THEATERS:
      return {...state, in_theaters: action.payload}
    case GET_COMING_SOON:
      return {...state, coming_soon: action.payload}
    case GET_TOP:
      return {...state, top: action.payload}
    case GET_MOVIE_DETAIL:
    return {...state, movie_detail: action.payload}
    default:
      return {...state}
  }
}
function comingSoonList(data) {
  return {type: GET_COMING_SOON, payload: data}
}
function inTheatersList(data) {
  return {type: GET_IN_THEATERS, payload: data}
}
function topList(data) {
  return {type: GET_TOP, payload: data}
}
function movieDetail(data) {
  return {type: GET_MOVIE_DETAIL, payload: data}
}
//action
export function getInTheaters() {
  return dispatch => {
    Toast.loading('正在请求数据...')
    axios.get('/api/in_theaters').then(res => {
      dispatch(inTheatersList(res.data))
      Toast.hide()
    })
  }
}
export function getComingSoon() {
  return dispatch => {
    Toast.loading('正在请求数据...')
    axios.get('/api/coming_soon').then(res => {
      dispatch(comingSoonList(res.data))
      Toast.hide()
    })
  }
}
export function getTop() {
  return dispatch => {
    Toast.loading('正在请求数据...')
    axios.get('/api/top250').then(res => {
      dispatch(topList(res.data))
      Toast.hide()
    })
  }
}
export function getMovieDetail(movieID) {
  return dispatch => {
    Toast.loading('正在请求数据...')
    axios.post('/api/detail', {movieID: movieID}).then(res => {
      dispatch(movieDetail(res.data))
      Toast.hide()
    })
  }
}