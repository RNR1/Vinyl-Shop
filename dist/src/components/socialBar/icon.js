"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Icon(_ref) {
  var icon = _ref.icon,
      to = _ref.to,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#fff' : _ref$color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["icon", "to", "color", "className"]);

  return /*#__PURE__*/_react["default"].createElement("a", {
    href: to,
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, _extends({
    icon: icon,
    color: props.iconColor || color
  }, props)));
}

Icon.propTypes = {
  icon: _propTypes["default"].object,
  to: _propTypes["default"].string,
  color: _propTypes["default"].string,
  className: _propTypes["default"].string,
  iconColor: _propTypes["default"].string
};
var _default = Icon;
exports["default"] = _default;

//# sourceMappingURL=icon.js.map