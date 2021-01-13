"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStatus = exports.setUserStatus = exports.setProfile = exports.toggleIsFetching = exports.setStatus = exports.setUserProfile = exports.addPost = exports.profileReducer = void 0;

var _babyYoda = _interopRequireDefault(require("./../../imgs/babyYoda.jpg"));

var _api = require("./../../api/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = 'ADD-POST'; // const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_USER_STATUS = 'SET_USER_STATUS';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var defaultState = {
  posts: [{
    id: '1',
    name: 'Baby Yoda',
    img: _babyYoda["default"],
    text: "post11111",
    likes: "48",
    active: "1"
  }, {
    id: '2',
    name: 'Andriy R',
    text: "post2",
    likes: "10",
    active: "0"
  }, {
    id: '3',
    name: 'Vlad V',
    text: "post1",
    likes: "8",
    active: "1"
  }, {
    id: '4',
    name: 'Bogdan Demchuk',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.",
    likes: "4",
    active: "0"
  }, {
    id: '5',
    name: 'sfx',
    text: "post1",
    likes: "0",
    active: "0"
  }],
  profile: null,
  status: '',
  isFetching: false
}; // const addPost = (state) => {
//   let idCount = state.posts.length + 1
//   let newPost = {
//     id: idCount,
//     name: 'Baby Yoda',
//     img: Jpg,
//     text: state.newPostText,
//     likes: "0",
//     active: "0"
//   }
//   let stateCopy = {...state}
//   stateCopy.posts = {...state.posts}
//   stateCopy.posts.push(newPost)
//   stateCopy.newPostText = ''
// }
// const updatePostText = (state, postText) => {
//   state.newPostText = postText
// }
// const updatePostText = (state, postText) => {
//   let stateCopy = { ...state }
//   stateCopy.newPostText = postText
//   return stateCopy
// }

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        var idCount = state.posts.length + 1;
        var newPost = {
          id: idCount,
          name: 'Baby Yoda',
          img: _babyYoda["default"],
          text: action.text,
          likes: "0",
          active: "0"
        };

        var stateCopy = _objectSpread({}, state);

        stateCopy.posts = _toConsumableArray(state.posts);
        stateCopy.posts.push(newPost);
        return stateCopy;
      }
    // case UPDATE_POST_TEXT: {
    //   let stateCopy = { ...state }
    //   stateCopy.newPostText = action.text
    //   return stateCopy
    //   // return updatePostText(state, action.text)
    // }

    case SET_USER_PROFILE:
      {
        return _objectSpread({}, state, {
          profile: action.text
        });
      }

    case SET_USER_STATUS:
      {
        return _objectSpread({}, state, {
          status: action.text
        });
      }

    case TOGGLE_IS_FETCHING:
      return _objectSpread({}, state, {
        isFetching: action.isFetching
      });

    default:
      return state;
  }
};

exports.profileReducer = profileReducer;

var addPost = function addPost(text) {
  return {
    type: ADD_POST,
    text: text
  };
}; // export const updatePostTextActionCreate = (text) => ({ type: UPDATE_POST_TEXT, text: text })


exports.addPost = addPost;

var setUserProfile = function setUserProfile(text) {
  return {
    type: SET_USER_PROFILE,
    text: text
  };
};

exports.setUserProfile = setUserProfile;

var setStatus = function setStatus(text) {
  return {
    type: SET_USER_STATUS,
    text: text
  };
};

exports.setStatus = setStatus;

var toggleIsFetching = function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toggleIsFetching = toggleIsFetching;

var setProfile = function setProfile(id) {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));

    _api.profileAPI.getProfile(id).then(function (response) {
      dispatch(setUserProfile(response.data));
      dispatch(toggleIsFetching(false));
    });
  };
};

exports.setProfile = setProfile;

var setUserStatus = function setUserStatus(id) {
  return function (dispatch) {
    _api.profileAPI.getUserStatus(id).then(function (response) {
      dispatch(setStatus(response));
    });
  };
};

exports.setUserStatus = setUserStatus;

var updateStatus = function updateStatus(status) {
  return function (dispatch) {
    _api.profileAPI.updateUserStatus(status).then(function (response) {
      if (response.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
}; // if (action.type === ADD_POST) {
//   addPost(state)
// } else if (action.type === UPDATE_POST_TEXT) {
//   updatePostText(state, action.text)
// }
// return state


exports.updateStatus = updateStatus;