import Jpg from './../imgs/babyYoda.jpg';
import { dialogsReducer } from './reducers/dialogsReducer';
import { profileReducer } from './reducers/profileReducer';

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', name: 'Baby Yoda', img: Jpg, text: "post11111", likes: "48", active: "1" },
        { id: '2', name: 'Andriy R', text: "post2", likes: "10", active: "0" },
        { id: '3', name: 'Vlad V', text: "post1", likes: "8", active: "1" },
        { id: '4', name: 'Bogdan Demchuk', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.", likes: "4", active: "0" },
        { id: '5', name: 'sfx', text: "post1", likes: "0", active: "0" },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialog: [
        { id: '1', message: 'sadadasassa' },
        { id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at' },
        { id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at', author: 'me' },
        { id: '4', message: 'fords 11111' },
        { id: '5', message: 'sfx' },
        { id: '6', message: 'asdfa fgnghf' },
        { id: '7', message: 'asdfa fgnghf', author: 'me' },
        { id: '8', message: 'asdfa fgnghf' },
      ],
      newMessageText: '',
      contact: [
        { id: '1', name: 'Baby Yoda', img: Jpg },
        { id: '2', name: 'Andriy R' },
        { id: '3', name: 'Vlad V' },
        { id: '4', name: 'Bogdan Demchuk' },
        { id: '5', name: 'sfx' },
        { id: '6', name: 'asdfa fgnghf' },
        { id: '7', name: 'asdfa fgnghf' },
        { id: '8', name: 'asdfa fgnghf' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state was changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  
  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}

export const addPostActionCreate = () => ({type: ADD_POST})
export const updatePostTextActionCreate = (text) => ({type: UPDATE_POST_TEXT, text: text})
export const addMessageActionCreate = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreate = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text})

export default store

// _addPost() {
//   let idCount = this._state.profilePage.posts.length + 1
//   let newPost = {
//     id: idCount,
//     name: 'Baby Yoda',
//     img: Jpg,
//     text: this._state.profilePage.newPostText,
//     likes: "0",
//     active: "0"
//   }
//   this._state.profilePage.posts.push(newPost)
//   this._state.profilePage.newPostText = ''
//   this._callSubscriber(this._state);
// },
// _updatePostText(postText) {
//   this._state.profilePage.newPostText = postText
//   this._callSubscriber(this._state);
// },
// _addMessage() {
//   let idCount = this._state.dialogsPage.dialog.length + 1
//   let newMessage = {
//     id: idCount,
//     message: this._state.dialogsPage.newMessageText,
//     author: 'me',
//   }
//   this._state.dialogsPage.dialog.push(newMessage)
//   console.log(newMessage)
//   this._state.dialogsPage.newMessageText = ''
//   this._callSubscriber(this._state);
// },
// _updateMessageText(Text) {
//   this._state.dialogsPage.newMessageText = Text
//   this._callSubscriber(this._state);
// },
// dispatch(action) {
//   if (action.type === ADD_POST) {
//     this._addPost()
//   } else if (action.type === UPDATE_POST_TEXT) {
//     this._updatePostText(action.text)
//   } else if (action.type === ADD_MESSAGE) {
//     this._addMessage()
//   } else if (action.type === UPDATE_MESSAGE_TEXT) {
//     this._updateMessageText(action.text)
//   }
// }

// let reRenderEntireTree = () => {
//   console.log('state was changed')
// }

// let state = {
//   profilePage: {
//     posts: [
//       { id: '1', name: 'Baby Yoda', img: Jpg, text: "post11111", likes: "48", active: "1" },
//       { id: '2', name: 'Andriy R', text: "post2", likes: "10", active: "0" },
//       { id: '3', name: 'Vlad V', text: "post1", likes: "8", active: "1" },
//       { id: '4', name: 'Bogdan Demchuk', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.", likes: "4", active: "0" },
//       { id: '5', name: 'sfx', text: "post1", likes: "0", active: "0" },
//     ],
//     newPostText: '',
//   },
//   dialogsPage: {
//     dialog: [
//       { id: '1', message: 'sadadasassa' },
//       { id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at' },
//       { id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at', author: 'me' },
//       { id: '4', message: 'fords 11111' },
//       { id: '5', message: 'sfx' },
//       { id: '6', message: 'asdfa fgnghf' },
//       { id: '7', message: 'asdfa fgnghf', author: 'me' },
//       { id: '8', message: 'asdfa fgnghf' },
//     ],
//     newMessageText: '',
//     contact: [
//       { id: '1', name: 'Baby Yoda', img: Jpg },
//       { id: '2', name: 'Andriy R' },
//       { id: '3', name: 'Vlad V' },
//       { id: '4', name: 'Bogdan Demchuk' },
//       { id: '5', name: 'sfx' },
//       { id: '6', name: 'asdfa fgnghf' },
//       { id: '7', name: 'asdfa fgnghf' },
//       { id: '8', name: 'asdfa fgnghf' },
//     ],
//   },
// }

// export const addPost = () => {
//   let idCount = state.profilePage.posts.length + 1
//   let newPost = {
//     id: idCount, 
//     name: 'Baby Yoda', 
//     img: Jpg, 
//     text: state.profilePage.newPostText, 
//     likes: "0", 
//     active: "0" 
//   }
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//   reRenderEntireTree(state);
// }

// export const addMessage = () => {
//   let idCount = state.dialogsPage.dialog.length + 1
//   let newMessage = {
//     id: idCount, 
//     message: state.dialogsPage.newMessageText,
//     author: 'me',
//   }
//   state.dialogsPage.dialog.push(newMessage)
//   console.log(newMessage)
//   state.dialogsPage.newMessageText = ''
//   reRenderEntireTree(state);
// }

// export const updateMessageText = (Text) => {
//   state.dialogsPage.newMessageText = Text
//   reRenderEntireTree(state);
// }

// export const updatePostText = (postText) => {
//   state.profilePage.newPostText = postText
//   reRenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//   reRenderEntireTree = observer
// }




// let dialog = [
//   { id: '1', message: 'sadadasassa' },
//   { id: '2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at' },
//   { id: '3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at', author: 'me' },
//   { id: '4', message: 'fords 11111' },
//   { id: '5', message: 'sfx' },
//   { id: '6', message: 'asdfa fgnghf' },
//   { id: '7', message: 'asdfa fgnghf', author: 'me' },
//   { id: '8', message: 'asdfa fgnghf' },
// ]

// let posts = [
//   { id: '1', name: 'Baby Yoda', img: Jpg, text: "post11111", likes: "48", active: "1" },
//   { id: '2', name: 'Andriy R', text: "post2", likes: "10", active: "0" },
//   { id: '3', name: 'Vlad V', text: "post1", likes: "8", active: "1" },
//   { id: '4', name: 'Bogdan Demchuk', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.", likes: "4", active: "0" },
//   { id: '5', name: 'sfx', text: "post1", likes: "0", active: "0" },
// ]

// let contact = [
//   { id: '1', name: 'Baby Yoda', img: Jpg },
//   { id: '2', name: 'Andriy R' },
//   { id: '3', name: 'Vlad V' },
//   { id: '4', name: 'Bogdan Demchuk' },
//   { id: '5', name: 'sfx' },
//   { id: '6', name: 'asdfa fgnghf' },
//   { id: '7', name: 'asdfa fgnghf' },
//   { id: '8', name: 'asdfa fgnghf' },
// ]