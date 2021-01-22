"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = exports.initializedSuccesses = exports.appReducer = void 0;

var _authReducer = require("./authReducer");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIALIZED_SUCCESSES = 'INITIALIZED_SUCCESSES';
var defaultState = {
  initialized: false
};

var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case INITIALIZED_SUCCESSES:
      return _objectSpread({}, state, {
        initialized: true
      });

    default:
      return state;
  }
};

exports.appReducer = appReducer;

var initializedSuccesses = function initializedSuccesses() {
  return {
    type: INITIALIZED_SUCCESSES
  };
};

exports.initializedSuccesses = initializedSuccesses;

var initialize = function initialize() {
  return function _callee(dispatch) {
    var promise;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(dispatch((0, _authReducer.setUserAuth)()));

          case 2:
            promise = _context.sent;
            Promise.all([promise]);
            dispatch(initializedSuccesses());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.initialize = initialize;