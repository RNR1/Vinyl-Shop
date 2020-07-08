"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StatusIndicator;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** @flow */

/**
 * A simple circle used for indicating user/account status.
 * @name StatusIndicator
 * @param {string} status
 * @example
 *  <StatusIndicator status="online" />
 */
function StatusIndicator(_ref) {
  var status = _ref.status;
  var backgroundColor;

  switch (status) {
    case 'online':
      backgroundColor = '#91D01F';
      break;

    case 'n/a':
      backgroundColor = '#e89108';
      break;

    case 'offline':
      backgroundColor = '#e74c3c';
      break;
  }

  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 10,
      width: 10,
      borderRadius: 5,
      marginLeft: 5,
      backgroundColor: backgroundColor
    }
  }));
}

StatusIndicator.propTypes = {
  status: _propTypes["default"].oneOf(['online', 'n/a', 'offline'])
};

//# sourceMappingURL=statusIndicator.js.map