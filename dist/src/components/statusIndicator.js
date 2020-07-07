"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = StatusIndicator;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function StatusIndicator(_ref) {
  var status = _ref.status;
  var color;

  switch (status) {
    case 'online':
      color = '#91D01F';
      break;

    case 'n/a':
      color = '#e89108';
      break;

    case 'offline':
      color = '#e74c3c';
      break;
  }

  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      height: 10,
      width: 10,
      borderRadius: 5,
      marginLeft: 5,
      backgroundColor: color
    }
  }));
}

StatusIndicator.propTypes = {
  status: _propTypes["default"].string.isRequired
};

//# sourceMappingURL=statusIndicator.js.map