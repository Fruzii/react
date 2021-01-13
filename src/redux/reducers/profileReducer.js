import Jpg from './../../imgs/babyYoda.jpg';
import { profileAPI } from './../../api/api';

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let defaultState = {
  posts: [
    { id: '1', name: 'Baby Yoda', img: Jpg, text: "post11111", likes: "48", active: "1" },
    { id: '2', name: 'Andriy R', text: "post2", likes: "10", active: "0" },
    { id: '3', name: 'Vlad V', text: "post1", likes: "8", active: "1" },
    { id: '4', name: 'Bogdan Demchuk', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.", likes: "4", active: "0" },
    { id: '5', name: 'sfx', text: "post1", likes: "0", active: "0" },
  ],
  profile: null,
  status: '',
}

// const addPost = (state) => {
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

export const profileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let idCount = state.posts.length + 1
      let newPost = {
        id: idCount,
        name: 'Baby Yoda',
        img: Jpg,
        text: action.text,
        likes: "0",
        active: "0"
      }
      let stateCopy = { ...state }
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost)
      return stateCopy
    }
    // case UPDATE_POST_TEXT: {
    //   let stateCopy = { ...state }
    //   stateCopy.newPostText = action.text
    //   return stateCopy
    //   // return updatePostText(state, action.text)
    // }
    case SET_USER_PROFILE: {
      return {
         ...state, profile: action.text
        }
    }
    case SET_USER_STATUS: {
      return {
         ...state, status: action.text
        }
    }
    default:
      return state
  }
}

export const addPost = (text) => ({ type: ADD_POST, text })
// export const updatePostTextActionCreate = (text) => ({ type: UPDATE_POST_TEXT, text: text })
export const setUserProfile = (text) => ({ type: SET_USER_PROFILE, text: text })
export const setStatus = (text) => ({ type: SET_USER_STATUS, text: text })

export const setProfile = (id) => {
  return (dispatch) => {
    profileAPI.getProfile(id).then(response => {
      dispatch(setUserProfile(response.data))
    });
  }
}

export const setUserStatus = (id) => {
  return (dispatch) => {
    profileAPI.getUserStatus(id).then(response => {
      dispatch(setStatus(response))
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then(response => {
      if (response.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}

// if (action.type === ADD_POST) {
  //   addPost(state)
  // } else if (action.type === UPDATE_POST_TEXT) {
  //   updatePostText(state, action.text)
  // }

  // return state