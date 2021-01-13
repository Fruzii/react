"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.profileAPI = exports.authAPI = exports.usersAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  withCredentials: true,
  // headers: {'API-KEY': '084389dd-41ec-4017-994e-7d672cda78af'},
  headers: {
    'API-KEY': 'd5a8efc5-06e3-4d92-8ee5-0a418bb65f53'
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

var usersAPI = {
  getUsers: function getUsers() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(page, "&count=").concat(count)).then(function (response) {
      return response.data;
    });
  },
  followUser: function followUser(id) {
    return instance.post("follow/".concat(id));
  },
  unfollowUser: function unfollowUser(id) {
    return instance["delete"]("follow/".concat(id));
  }
};
exports.usersAPI = usersAPI;
var authAPI = {
  me: function me() {
    return instance.get("auth/me").then(function (response) {
      return response.data;
    });
  },
  login: function login(loginData) {
    return instance.post('auth/login', {
      password: loginData.password,
      email: loginData.email,
      rememberMe: loginData.rememberMe
    }).then(function (response) {
      return response.data;
    });
  },
  logout: function logout() {
    return instance["delete"]('auth/login').then(function (response) {
      return response.data;
    });
  }
};
exports.authAPI = authAPI;
var profileAPI = {
  getProfile: function getProfile(userId) {
    return instance.get("profile/" + userId).then(function (response) {
      return response;
    });
  },
  getUserStatus: function getUserStatus(userId) {
    return instance.get("profile/status/" + userId).then(function (response) {
      return response.data;
    });
  },
  updateUserStatus: function updateUserStatus(status) {
    return instance.put("profile/status", {
      status: status
    }).then(function (response) {
      return response.data;
    });
  }
};
exports.profileAPI = profileAPI;