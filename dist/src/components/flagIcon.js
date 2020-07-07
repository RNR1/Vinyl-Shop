'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = FlagIcon

var _react = _interopRequireDefault(require('react'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function FlagIcon(_ref) {
  var _ref$iso = _ref.iso,
    iso = _ref$iso === void 0 ? 'gb' : _ref$iso
  return /*#__PURE__*/ _react['default'].createElement('span', {
    className: 'flag-icon flag-icon-'.concat(iso),
    style: {
      marginRight: 5,
      zIndex: -1,
    },
  })
}

//# sourceMappingURL=flagIcon.js.map
