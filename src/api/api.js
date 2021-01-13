import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  // headers: {'API-KEY': '084389dd-41ec-4017-994e-7d672cda78af'},
  headers: {'API-KEY': 'd5a8efc5-06e3-4d92-8ee5-0a418bb65f53'},
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
})

export const usersAPI = {
  getUsers (page = 1, count = 10) {
    return instance.get(`users?page=${page}&count=${count}`).then(response => {return response.data})
  },

  followUser (id) {
    return instance.post(`follow/${id}`)
  },

  unfollowUser (id) {
    return instance.delete(`follow/${id}`)
  }
}

export const authAPI = {
  me () {
    return instance.get(`auth/me`).then(response => {return response.data})
  },

  login (loginData) {
    return instance.post('auth/login', {password: loginData.password, email: loginData.email, rememberMe: loginData.rememberMe}).then(response => {return response.data})
  },

  logout () {
    return instance.delete('auth/login').then(response => {return response.data})
  }
}

export const profileAPI = {
  getProfile (userId) {
    return instance.get(`profile/` + userId).then(response => {return response})
  },

  getUserStatus (userId) {
    return instance.get(`profile/status/` + userId).then(response => {return response.data})
  },

  updateUserStatus (status) {
    return instance.put(`profile/status`, {status}).then(response => {return response.data})
  },
}