"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FlagIcon;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("flag-icon-css/css/flag-icon.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @flow */

/**
 * A flag icon component based on ISO codes, add the correct "iso" prop and get the country flag icon.
 * @name FlagIcon
 * @param {string} iso
 * @returns {ReactElement} Icon component representing the ISO-country flag
 * @example
 *  <FlagIcon iso="gb" />
 */
function FlagIcon(_ref) {
  var iso = _ref.iso;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "flag-icon flag-icon-".concat(iso),
    style: {
      marginRight: 5,
      zIndex: -1
    }
  });
}

FlagIcon.propTypes = {
  iso: _propTypes["default"].string.isRequired
};

//# sourceMappingURL=flagIcon.js.map