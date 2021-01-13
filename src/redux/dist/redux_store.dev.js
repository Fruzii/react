"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _profileReducer = require("./reducers/profileReducer");

var _dialogsReducer = require("./reducers/dialogsReducer");

var _usersReducer = require("./reducers/usersReducer");

var _authReducer = require("./reducers/authReducer");

var _appReducer = require("./reducers/appReducer");

var _reduxForm = require("redux-form");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer.profileReducer,
  dialogsPage: _dialogsReducer.dialogsReducer,
  usersPage: _usersReducer.usersReducer,
  auth: _authReducer.authReducer,
  form: _reduxForm.reducer,
  app: _appReducer.appReducer
});
var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
window.store = store;
var _default = store;
exports["default"] = _default;