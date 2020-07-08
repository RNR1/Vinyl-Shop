"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _statusIndicator = _interopRequireDefault(require("../statusIndicator/statusIndicator"));

var _ronbrahaCodebyronFlagIcon = _interopRequireDefault(require("@bit/ronbraha.codebyron.flag-icon.flag-icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavItem(_ref) {
  var icon = _ref.icon,
      iso = _ref.iso,
      color = _ref.color,
      label = _ref.label,
      chevron = _ref.chevron,
      status = _ref.status,
      linkProps = _objectWithoutProperties(_ref, ["icon", "iso", "color", "label", "chevron", "status"]);

  return /*#__PURE__*/_react["default"].createElement("a", linkProps, iso && /*#__PURE__*/_react["default"].createElement(_ronbrahaCodebyronFlagIcon["default"], {
    iso: iso
  }), icon && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    color: color,
    style: {
      marginRight: 5
    }
  }), label, " ", chevron && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown
  }), status && /*#__PURE__*/_react["default"].createElement(_statusIndicator["default"], {
    status: status
  }));
}

NavItem.propTypes = {
  icon: _propTypes["default"].object,
  iso: _propTypes["default"].string,
  color: _propTypes["default"].string,
  label: _propTypes["default"].string,
  chevron: _propTypes["default"].bool,
  status: _propTypes["default"].string
};

//# sourceMappingURL=navItem.js.map