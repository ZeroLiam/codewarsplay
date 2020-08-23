"use strict";

var _minimist = _interopRequireDefault(require("minimist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

 */
var args = (0, _minimist["default"])(process.argv.slice(2));
console.log(args);

function first_non_repeating_letter(str) {
  var tempStr = str.toLowerCase();

  for (var _char in tempStr) {
    console.log(_char);
  }
}