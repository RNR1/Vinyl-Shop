'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = PaymentMethods

var _react = _interopRequireDefault(require('react'))

var _propTypes = _interopRequireDefault(require('prop-types'))

var _paymentMethodsModule = _interopRequireDefault(
  require('./paymentMethods.module.css')
)

var _paymentIcons = _interopRequireDefault(require('./paymentIcons'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function PaymentMethods(_ref) {
  var _ref$icons = _ref.icons,
    icons = _ref$icons === void 0 ? _paymentIcons['default'] : _ref$icons
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: _paymentMethodsModule['default'].PaymentMethods,
    },
    icons.map(function (Icon, i) {
      return /*#__PURE__*/ _react['default'].createElement(Icon, {
        key: i.toString(),
      })
    })
  )
}

PaymentMethods.propTypes = {
  icons: _propTypes['default'].array,
}

//# sourceMappingURL=paymentMethods.js.map
