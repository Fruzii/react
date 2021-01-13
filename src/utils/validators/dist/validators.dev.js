"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxLengthC = exports.required = void 0;

var required = function required(value) {
  if (!value) return 'Required!';
  return undefined;
};

exports.required = required;

var maxLengthC = function maxLengthC(length) {
  return function (value) {
    if (value && value.length > length) return "Max length is ".concat(length);
    return undefined;
  };
};

exports.maxLengthC = maxLengthC;