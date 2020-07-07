'use strict'

function _typeof(obj) {
  '@babel/helpers - typeof'
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj
    }
  }
  return _typeof(obj)
}

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = Paypal

var React = _interopRequireWildcard(require('react'))

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj['default'] = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

function Paypal(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        id: 'Layer_1',
        'data-name': 'Layer 1',
        viewBox: '0 0 566.93 137.35',
        width: 70,
        height: 80,
      },
      props
    ),
    /*#__PURE__*/ React.createElement('title', null, 'PayPal'),
    /*#__PURE__*/ React.createElement(
      'defs',
      null,
      /*#__PURE__*/ React.createElement(
        'style',
        null,
        '.cls-1,.cls-2{fill:#009ee3;fill-rule:evenodd}.cls-2{fill:#113984}'
      )
    ),
    /*#__PURE__*/ React.createElement('path', {
      className: 'cls-1',
      d:
        'M192.95 386.87h38.74c20.8 0 28.63 10.53 27.42 26-2 25.54-17.44 39.67-37.92 39.67h-10.34c-2.81 0-4.7 1.86-5.46 6.9l-4.39 29.3c-.29 1.9-1.29 3-2.79 3.15h-24.34c-2.29 0-3.1-1.75-2.5-5.54l14.84-93.93c.58-3.76 2.64-5.55 6.74-5.55z',
      transform: 'translate(-143.48 -354.54)',
    }),
    /*#__PURE__*/ React.createElement('path', {
      className: 'cls-2',
      d:
        'M361.14 385.13c13.07 0 25.13 7.09 23.48 24.76-2 21-13.25 32.62-31 32.67h-15.51c-2.23 0-3.31 1.82-3.89 5.55l-3 19.07c-.45 2.88-1.93 4.3-4.11 4.3h-14.43c-2.3 0-3.1-1.47-2.59-4.76L322 390.29c.59-3.76 2-5.16 4.57-5.16h34.54zm-23.5 40.92h11.75c7.35-.28 12.23-5.37 12.72-14.55.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79 24.2zm86.21 39.58c1.32-1.2 2.66-1.82 2.47-.34l-.47 3.54c-.24 1.85.49 2.83 2.21 2.83h12.82c2.16 0 3.21-.87 3.74-4.21l7.9-49.58c.4-2.49-.21-3.71-2.1-3.71h-14.1c-1.27 0-1.89.71-2.22 2.65l-.52 3.05c-.27 1.59-1 1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1 15.42-34.53 34.66-1.1 14.88 9.56 26.57 23.62 26.57 10.2 0 14.76-3 19.9-7.7zM413.11 458c-8.51 0-14.44-6.79-13.21-15.11s9.19-15.11 17.7-15.11 14.44 6.79 13.21 15.11-9.18 15.11-17.7 15.11zm64.5-44h-13c-2.68 0-3.77 2-2.92 4.46l16.14 47.26L462 488.21c-1.33 1.88-.3 3.59 1.57 3.59h14.61a4.47 4.47 0 004.34-2.13l49.64-71.2c1.53-2.19.81-4.49-1.7-4.49h-13.83c-2.37 0-3.32.94-4.68 2.91l-20.7 30-9.25-30.07c-.54-1.82-1.89-2.82-4.38-2.82z',
      transform: 'translate(-143.48 -354.54)',
    }),
    /*#__PURE__*/ React.createElement('path', {
      className: 'cls-1',
      d:
        'M583.8 385.13c13.07 0 25.13 7.09 23.48 24.76-2 21-13.25 32.62-31 32.67h-15.5c-2.23 0-3.31 1.82-3.89 5.55l-3 19.07c-.45 2.88-1.93 4.3-4.11 4.3h-14.43c-2.3 0-3.1-1.47-2.59-4.76l11.93-76.45c.59-3.76 2-5.16 4.57-5.16h34.54zm-23.5 40.92h11.75c7.35-.28 12.23-5.37 12.72-14.55.3-5.67-3.53-9.73-9.62-9.7l-11.06.05-3.79 24.2zm86.21 39.58c1.32-1.2 2.66-1.82 2.47-.34l-.47 3.54c-.24 1.85.49 2.83 2.21 2.83h12.82c2.16 0 3.21-.87 3.74-4.21l7.9-49.58c.4-2.49-.21-3.71-2.1-3.71H659c-1.27 0-1.89.71-2.22 2.65l-.52 3.05c-.27 1.59-1 1.87-1.68.27-2.39-5.66-8.49-8.2-17-8-19.77.41-33.1 15.42-34.53 34.66-1.1 14.88 9.56 26.57 23.62 26.57 10.2 0 14.76-3 19.9-7.7zM635.78 458c-8.51 0-14.44-6.79-13.21-15.11s9.19-15.11 17.7-15.11 14.44 6.79 13.21 15.11-9.19 15.11-17.7 15.11zm59.13 13.74h-14.8a1.75 1.75 0 01-1.81-2l13-82.36a2.55 2.55 0 012.46-2h14.8a1.75 1.75 0 011.81 2l-13 82.36a2.55 2.55 0 01-2.46 2.02z',
      transform: 'translate(-143.48 -354.54)',
    }),
    /*#__PURE__*/ React.createElement('path', {
      className: 'cls-2',
      d:
        'M168.72 354.54h38.78c10.92 0 23.88.35 32.54 8 5.79 5.11 8.83 13.24 8.13 22-2.38 29.61-20.09 46.2-43.85 46.2H185.2c-3.26 0-5.41 2.16-6.33 8l-5.34 34c-.35 2.2-1.3 3.5-3 3.66H146.6c-2.65 0-3.59-2-2.9-6.42L160.9 361c.69-4.38 3.1-6.46 7.82-6.46z',
      transform: 'translate(-143.48 -354.54)',
    }),
    /*#__PURE__*/ React.createElement('path', {
      d:
        'M179.43 435.29l6.77-42.87c.59-3.76 2.65-5.56 6.75-5.56h38.74c6.41 0 11.6 1 15.66 2.85-3.89 26.36-20.94 41-43.26 41H185c-2.56.01-4.44 1.29-5.57 4.58z',
      transform: 'translate(-143.48 -354.54)',
      fill: '#172c70',
      fillRule: 'evenodd',
    })
  )
}

//# sourceMappingURL=paypal.js.map
