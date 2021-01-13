"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMessageTextActionCreate = exports.addMessageActionCreate = exports.dialogsReducer = void 0;

var _babyYoda = _interopRequireDefault(require("./../../imgs/babyYoda.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ADD_MESSAGE = 'ADD-MESSAGE';
var UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
var defaultState = {
  dialog: [{
    id: '1',
    message: 'sadadasassa'
  }, {
    id: '2',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at'
  }, {
    id: '3',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at',
    author: 'me'
  }, {
    id: '4',
    message: 'fords 11111'
  }, {
    id: '5',
    message: 'sfx'
  }, {
    id: '6',
    message: 'asdfa fgnghf'
  }, {
    id: '7',
    message: 'asdfa fgnghf',
    author: 'me'
  }, {
    id: '8',
    message: 'asdfa fgnghf'
  }],
  newMessageText: '',
  contact: [{
    id: '1',
    name: 'Baby Yoda',
    img: _babyYoda["default"]
  }, {
    id: '2',
    name: 'Andriy R'
  }, {
    id: '3',
    name: 'Vlad V'
  }, {
    id: '4',
    name: 'Bogdan Demchuk'
  }, {
    id: '5',
    name: 'sfx'
  }, {
    id: '6',
    name: 'asdfa fgnghf'
  }, {
    id: '7',
    name: 'asdfa fgnghf'
  }, {
    id: '8',
    name: 'asdfa fgnghf'
  }]
};

var addMessage = function addMessage(state) {
  var idCount = state.dialog.length + 1;
  var newMessage = {
    id: idCount,
    message: state.newMessageText,
    author: 'me'
  };
  state.dialog.push(newMessage);
  console.log(newMessage);
  state.newMessageText = '';
};

var updateMessageText = function updateMessageText(state, Text) {
  state.newMessageText = Text;
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_MESSAGE:
      addMessage(state);
      return state;

    case UPDATE_MESSAGE_TEXT:
      updateMessageText(state, action.text);
      return state;

    default:
      return state;
  }
};

exports.dialogsReducer = dialogsReducer;

var addMessageActionCreate = function addMessageActionCreate() {
  return {
    type: ADD_MESSAGE
  };
};

exports.addMessageActionCreate = addMessageActionCreate;

var updateMessageTextActionCreate = function updateMessageTextActionCreate(text) {
  return {
    type: UPDATE_MESSAGE_TEXT,
    text: text
  };
}; // if (action.type === ADD_MESSAGE) {
//   addMessage(state)
// } else if (action.type === UPDATE_MESSAGE_TEXT) {
//   updateMessageText(state, action.text)
// }
// return state


exports.updateMessageTextActionCreate = updateMessageTextActionCreate;