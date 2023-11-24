"use strict";

var _tooltip = _interopRequireDefault(require("./tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var form = document.querySelector('.form');
var popoverButton = document.querySelector('.popover-button');
var tooltipsFactory = new _tooltip["default"]();
form.addEventListener('submit', function (ev) {
  ev.preventDefault();
  if (document.querySelector('.tooltip')) {
    tooltipsFactory.removeTooltip();
  } else {
    tooltipsFactory.showTooltip(popoverButton);
  }
});