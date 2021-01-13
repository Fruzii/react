"use strict";

require("./index.css");

var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));

var _state = _interopRequireDefault(require("./redux/state"));

var _render = require("./render");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import {addPost} from './redux/state'
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
(0, _render.reRenderEntireTree)(_state["default"]); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

(0, _reportWebVitals["default"])();