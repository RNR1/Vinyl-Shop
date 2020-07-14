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

var _useCurrentWidth = _interopRequireDefault(require("../../utils/useCurrentWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function NavItem(_ref) {
  var chevron = _ref.chevron,
      _ref$item = _ref.item,
      icon = _ref$item.icon,
      iconColor = _ref$item.iconColor,
      iso = _ref$item.iso,
      label = _ref$item.label,
      status = _ref$item.status,
      _short = _ref$item["short"],
      responsive = _ref.responsive,
      linkProps = _objectWithoutProperties(_ref, ["chevron", "item", "responsive"]);

  var width = (0, _useCurrentWidth["default"])();
  var largeScreen = width >= 1024 || !responsive;
  return /*#__PURE__*/_react["default"].createElement("a", linkProps, iso && /*#__PURE__*/_react["default"].createElement(_ronbrahaCodebyronFlagIcon["default"], {
    iso: iso
  }), icon && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    color: iconColor,
    size: largeScreen ? 'sm' : 'lg',
    style: {
      marginRight: 5
    }
  }), /*#__PURE__*/_react["default"].createElement("span", null, largeScreen ? label : _short, chevron && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    style: {
      marginLeft: 5
    }
  })), status && /*#__PURE__*/_react["default"].createElement(_statusIndicator["default"], {
    status: status
  }));
}

NavItem.propTypes = {
  chevron: _propTypes["default"].bool,
  item: _propTypes["default"].shape({
    icon: _propTypes["default"].any,
    iconColor: _propTypes["default"].string,
    iso: _propTypes["default"].string,
    label: _propTypes["default"].string,
    status: _propTypes["default"].string,
    "short": _propTypes["default"].string
  }),
  responsive: _propTypes["default"].bool
};

//# sourceMappingURL=navItem.js.map