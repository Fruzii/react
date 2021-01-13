import Jpg from './../../imgs/babyYoda.jpg';

const ADD_MESSAGE = 'ADD-MESSAGE'
// const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

let defaultState = {
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
}

const addMessage = (state, message) => {
  let idCount = state.dialog.length + 1
  let newMessage = {
    id: idCount,
    message: message,
    author: 'me',
  }
  // let stateCopy = { ...state }
  // stateCopy.dialog = [...state.dialog]
  // stateCopy.dialog.push(newMessage)
  // stateCopy.newMessageText = ''
  // return stateCopy
  return {
    ...state,
    dialog: [...state.dialog, newMessage],
  }

}
// const updateMessageText = (state, Text) => {
//   let stateCopy = { ...state }
//   stateCopy.newMessageText = Text
//   return stateCopy
// }

export const dialogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return addMessage(state, action.message)
    // case UPDATE_MESSAGE_TEXT:
    //   return updateMessageText(state, action.text)
    default:
      return state
  }
}

export const addMessageActionCreate = (message) => ({ type: ADD_MESSAGE, message })
// export const updateMessageTextActionCreate = (text) => ({ type: UPDATE_MESSAGE_TEXT, text })

// if (action.type === ADD_MESSAGE) {
//   addMessage(state)
// } else if (action.type === UPDATE_MESSAGE_TEXT) {
//   updateMessageText(state, action.text)
// }

// return state
