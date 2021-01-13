"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unfollowUser = exports.followUser = exports.getUsers = exports.followingInProgress = exports.toggleIsFetching = exports.setTotalCount = exports.setCurrentPage = exports.setUsers = exports.unfollowSuccesses = exports.followSuccesses = exports.usersReducer = void 0;

var _api = require("./../../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = 'FOLLOW';
var UNFOLLOW = 'UNFOLLOW';
var SET_USERS = 'SET_USERS';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';
var defaultState = {
  users: [// { id: '1', name: 'Baby Yoda', img: Jpg, followed: true, status: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '2', name: 'Andriy R', followed: true, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '3', name: 'Vlad V', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '4', name: 'Bogdan Demchuk', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '5', name: 'sfx', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '6', name: 'asdfa fgnghf', followed: true, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '7', name: 'asdfa fgnghf', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
    // { id: '8', name: 'asdfa fgnghf', followed: false, status: 'Hello World!', location: { country: 'Ukraine', city: 'Vinnitsia' } },
  ],
  totalUsersCount: 0,
  pageSize: 10,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: []
}; // const followUser = (state, userId) => {
//   let stateCopy = {
//     ...state,
//     users: state.users.map(u => {
//       if (u.id === userId) {
//         return { ...u, followed: true }
//       }
//       return u
//     })
//   }
//   return stateCopy
// }
// const unfollowUser = (state, userId) => {
//   let stateCopy = {
//     ...state,
//     users: state.users.map(u => {
//       if (u.id === userId) {
//         return { ...u, followed: false }
//       }
//       return u
//     })
//   }
//   return stateCopy
// }
// const setUsers = (state, users) => {
//   let stateCopy = {
//     ...state, users: [...users]
//   }
//   return stateCopy
// }
// const setCurrentPage = (state, page) => {
//   let stateCopy = {
//     ...state, currentPage: page
//   }
//   return stateCopy
// }
// const setTotalCount = (state, number) => {
//   let stateCopy = {
//     ...state, totalUsersCount: number
//   }
//   return stateCopy
// }
// const toggleIsFetching = (state, isFetching) => {
//   let stateCopy = {
//     ...state, isFetching: isFetching
//   }
//   return stateCopy
// }

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: true
            });
          }

          return u;
        })
      });

    case UNFOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: false
            });
          }

          return u;
        })
      });

    case SET_USERS:
      return _objectSpread({}, state, {
        users: _toConsumableArray(action.users)
      });

    case SET_CURRENT_PAGE:
      return _objectSpread({}, state, {
        currentPage: action.page
      });

    case SET_TOTAL_COUNT:
      return _objectSpread({}, state, {
        totalUsersCount: action.number
      });

    case TOGGLE_IS_FETCHING:
      return _objectSpread({}, state, {
        isFetching: action.isFetching
      });

    case FOLLOWING_IN_PROGRESS:
      if (action.isFetching) {
        return _objectSpread({}, state, {
          isFollowingInProgress: [].concat(_toConsumableArray(state.isFollowingInProgress), [action.userId])
        });
      } else {
        return _objectSpread({}, state, {
          isFollowingInProgress: state.isFollowingInProgress.filter(function (id) {
            return id !== action.userId;
          })
        });
      }

    default:
      return state;
  }
};

exports.usersReducer = usersReducer;

var followSuccesses = function followSuccesses(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

exports.followSuccesses = followSuccesses;

var unfollowSuccesses = function unfollowSuccesses(userId) {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

exports.unfollowSuccesses = unfollowSuccesses;

var setUsers = function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsers = setUsers;

var setCurrentPage = function setCurrentPage(page) {
  return {
    type: SET_CURRENT_PAGE,
    page: page
  };
};

exports.setCurrentPage = setCurrentPage;

var setTotalCount = function setTotalCount(number) {
  return {
    type: SET_TOTAL_COUNT,
    number: number
  };
};

exports.setTotalCount = setTotalCount;

var toggleIsFetching = function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toggleIsFetching = toggleIsFetching;

var followingInProgress = function followingInProgress(isFetching, userId) {
  return {
    type: FOLLOWING_IN_PROGRESS,
    isFetching: isFetching,
    userId: userId
  };
};

exports.followingInProgress = followingInProgress;

var getUsers = function getUsers(page, count) {
  return function (dispatch) {
    dispatch(setCurrentPage(page));
    dispatch(setUsers([]));
    dispatch(toggleIsFetching(true));

    _api.usersAPI.getUsers(page, count).then(function (data) {
      dispatch(setUsers(data.items));
      dispatch(setTotalCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  };
};

exports.getUsers = getUsers;

var followUser = function followUser(id) {
  return function (dispatch) {
    dispatch(followingInProgress(true, id));

    _api.usersAPI.followUser(id).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(followSuccesses(id));
      }

      dispatch(followingInProgress(false, id));
    });
  };
};

exports.followUser = followUser;

var unfollowUser = function unfollowUser(id) {
  return function (dispatch) {
    dispatch(followingInProgress(true, id));

    _api.usersAPI.unfollowUser(id).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccesses(id));
      }

      dispatch(followingInProgress(false, id));
    });
  };
}; // if (action.type === ADD_MESSAGE) {
//   addMessage(state)
// } else if (action.type === UPDATE_MESSAGE_TEXT) {
//   updateMessageText(state, action.text)
// }
// return state


exports.unfollowUser = unfollowUser;