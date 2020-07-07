"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DropdownItem;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function DropdownItem(_ref) {
  var item = _ref.item,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, ["item", "selected"]);

  return /*#__PURE__*/_react["default"].createElement("li", props, /*#__PURE__*/_react["default"].createElement("span", null, item.label), selected && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCheck
  })));
}

DropdownItem.propTypes = {
  item: _propTypes["default"].shape({
    id: _propTypes["default"].string,
    value: _propTypes["default"].string,
    label: _propTypes["default"].string
  }).isRequired,
  selected: _propTypes["default"].bool
};

//# sourceMappingURL=dropdownItem.js.map