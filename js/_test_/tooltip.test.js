"use strict";

var _tooltip = _interopRequireDefault(require("../tooltip"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
* @jest-environment jsdom
*/

test('tooltip text content', function () {
  var tooltip = new _tooltip["default"]();
  document.body.innerHTML = "<div class=\"container\">\n<form class=\"form\">\n    <button class=\"popover-button\">Click to toggle popover</button>\n</form>\n</div>";
  var btnText = document.querySelector('.popover-button').textContent;
  expect(btnText).toBe('Click to toggle popover');
});
test('popover up', function () {
  var tooltip = new _tooltip["default"]();
  document.body.innerHTML = "<div class=\"container\">\n    <form class=\"form\">\n        <button class=\"popover-button\">Click to toggle popover</button>\n    </form>\n    </div>";
  var btn = document.querySelector('.popover-button');
  tooltip.showTooltip(btn);
  var popoverUp = document.querySelector('.tooltip');
  expect(popoverUp.className).toBe('tooltip');
});