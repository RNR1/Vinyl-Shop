'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _visa = _interopRequireDefault(require('./visa'))

var _mastercard = _interopRequireDefault(require('./mastercard'))

var _maestro = _interopRequireDefault(require('./maestro'))

var _paypal = _interopRequireDefault(require('./paypal'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = [
  _visa['default'],
  _mastercard['default'],
  _maestro['default'],
  _paypal['default'],
]
exports['default'] = _default

//# sourceMappingURL=index.js.map
