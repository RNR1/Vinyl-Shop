"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _dropdownModule = _interopRequireDefault(require("./dropdown.module.css"));

var _dropdownItem = _interopRequireDefault(require("./dropdownItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Dropdown(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Select' : _ref$label,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$multiSelect = _ref.multiSelect,
      multiSelect = _ref$multiSelect === void 0 ? false : _ref$multiSelect;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selection = _useState4[0],
      setSelection = _useState4[1];

  var toggle = function toggle() {
    return setOpen(!open);
  };

  Dropdown.handleClickOutside = function () {
    return setOpen(false);
  };

  var _onClick = function onClick(item) {
    if (isItemInSelection(item)) return setSelection(selection.filter(function (current) {
      return current.id !== item.id;
    }));
    if (multiSelect) return setSelection([].concat(_toConsumableArray(selection), [item]));
    setSelection([item]);
    toggle();
  };

  var isItemInSelection = function isItemInSelection(item) {
    return selection.some(function (current) {
      return current.id === item.id;
    });
  };

  var currentSelection = function currentSelection() {
    if (multiSelect) return label;
    if (selection.length) return selection[0].label;
    return items[0] && items[0].label || label;
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: _dropdownModule["default"].Dropdown,
    tabIndex: 0,
    role: "button",
    onKeyPress: function onKeyPress() {
      return toggle(!open);
    },
    onClick: function onClick() {
      return toggle(!open);
    }
  }, currentSelection(), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCaretDown,
    size: "sm",
    style: caretStyle
  })), open && /*#__PURE__*/_react["default"].createElement("ul", {
    className: _dropdownModule["default"].List
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_dropdownItem["default"], {
      key: item.id,
      className: _dropdownModule["default"].Item,
      item: item,
      selected: multiSelect && isItemInSelection(item),
      onClick: function onClick() {
        return _onClick(item);
      }
    });
  })));
}

var caretStyle = {
  position: 'relative',
  top: -4,
  marginLeft: 4
};
Dropdown.propTypes = {
  label: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    id: _propTypes["default"].string,
    value: _propTypes["default"].string,
    label: _propTypes["default"].string
  })).isRequired,
  multiSelect: _propTypes["default"].bool
};
var clickOutsideConfig = {
  handleClickOutside: function handleClickOutside() {
    return Dropdown.handleClickOutside;
  }
};

var _default = (0, _reactOnclickoutside["default"])(Dropdown, clickOutsideConfig);

exports["default"] = _default;

//# sourceMappingURL=dropdown.js.map