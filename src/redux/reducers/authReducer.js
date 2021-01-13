import { stopSubmit } from "redux-form"
import { authAPI } from "../../api/api"

const SET_USER_AUTH = 'SET_USER_AUTH'

let defaultState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state, ...action.data
      }
    default:
      return state
  }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_AUTH, data: { id, email, login, isAuth } })

export const setUserAuth = () => (dispatch) => {
    return authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setUserData(id, email, login, true))
      }
    });
  }


export const login = (loginData) => (dispatch) => {
    authAPI.login(loginData).then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserAuth())
      } else 
      { dispatch(stopSubmit('Login', {_error: `${data.messages}`})) }
    });
  }


export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
      }
    });
  }

