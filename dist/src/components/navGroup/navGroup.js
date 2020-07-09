"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NavGroup;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _navItem = _interopRequireDefault(require("./navItem"));

var _navGroupModule = _interopRequireDefault(require("./navGroup.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @flow */

/**
 * A flexible navigation group component which accepts a group of items and displays them accordingly
 * @name NavGroup
 * @param {string} title
 * @param {[]} items
 * @param {ReactElement} Item
 * @param {string} direction
 * @param {bool} responsiveItems
 * @example
 *  <NavGroup items={[{ label: "Music", short: "Music", to: "/" }]} chevron className={classes.Categories} />
 */
function NavGroup(_ref) {
  var title = _ref.title,
      items = _ref.items,
      _ref$Item = _ref.Item,
      Item = _ref$Item === void 0 ? _navItem["default"] : _ref$Item,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      responsiveItems = _ref.responsiveItems,
      props = _objectWithoutProperties(_ref, ["title", "items", "Item", "direction", "responsiveItems"]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: Container(direction)
  }, title && /*#__PURE__*/_react["default"].createElement("h5", {
    className: _navGroupModule["default"].Title
  }, title), items && items.map(function (i) {
    return /*#__PURE__*/_react["default"].createElement(Item, _extends({
      key: i.label,
      icon: i.icon,
      iso: i.iso,
      color: i.iconColor,
      to: i.to,
      label: i.label,
      status: i.status,
      responsive: Item === _navItem["default"] ? responsiveItems : null
    }, props));
  }));
}

NavGroup.propTypes = {
  title: _propTypes["default"].string,
  items: _propTypes["default"].array.isRequired,
  Item: _propTypes["default"].func,
  direction: _propTypes["default"].oneOf(['row', 'column']),
  responsiveItems: _propTypes["default"].bool
};

var Container = function Container(direction) {
  return {
    display: 'flex',
    flexDirection: direction
  };
};

//# sourceMappingURL=navGroup.js.map