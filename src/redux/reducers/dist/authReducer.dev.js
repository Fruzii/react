"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.login = exports.setUserAuth = exports.setUserData = exports.authReducer = void 0;

var _reduxForm = require("redux-form");

var _api = require("../../api/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_AUTH = 'SET_USER_AUTH';
var defaultState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_AUTH:
      return _objectSpread({}, state, {}, action.data);

    default:
      return state;
  }
};

exports.authReducer = authReducer;

var setUserData = function setUserData(id, email, login, isAuth) {
  return {
    type: SET_USER_AUTH,
    data: {
      id: id,
      email: email,
      login: login,
      isAuth: isAuth
    }
  };
};

exports.setUserData = setUserData;

var setUserAuth = function setUserAuth() {
  return function (dispatch) {
    return _api.authAPI.me().then(function (data) {
      if (data.resultCode === 0) {
        var _data$data = data.data,
            id = _data$data.id,
            email = _data$data.email,
            _login = _data$data.login;
        dispatch(setUserData(id, email, _login, true));
      }
    });
  };
};

exports.setUserAuth = setUserAuth;

var login = function login(loginData) {
  return function (dispatch) {
    _api.authAPI.login(loginData).then(function (data) {
      if (data.resultCode === 0) {
        dispatch(setUserAuth());
      } else {
        dispatch((0, _reduxForm.stopSubmit)('Login', {
          _error: "".concat(data.messages)
        }));
      }
    });
  };
};

exports.login = login;

var logout = function logout() {
  return function (dispatch) {
    _api.authAPI.logout().then(function (data) {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
      }
    });
  };
};

exports.logout = logout;