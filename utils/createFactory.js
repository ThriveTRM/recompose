"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

// Polyfill for deprecated React.createFactory
// https://reactjs.org/blog/2020/02/26/react-v16.13.0.html#deprecating-reactcreatefactory
var createFactory = function createFactory(type) {
  return _react.createElement.bind(null, type);
};

var _default = createFactory;
exports.default = _default;