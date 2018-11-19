
const GET_USER_INFO = 'GET_USER_INFO'
const initstate = {
  userID: '',
  favoriteMovies: [],
}

export function user (state = initstate, action) {
  switch(action.type) {
    case GET_USER_INFO:
      return state
    default:
      return state
  }
}

export function getUserInfo(data) {
  return {type: GET_USER_INFO, payload: data}
}