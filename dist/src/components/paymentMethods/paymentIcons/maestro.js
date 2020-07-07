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
exports['default'] = Maestro

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

function Maestro(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        id: 'Layer_1',
        'data-name': 'Layer 1',
        width: 43,
        height: 43,
        viewBox: '0 0 156.78 110.64',
      },
      props
    ),
    /*#__PURE__*/ React.createElement('title', null, 'Maestro'),
    /*#__PURE__*/ React.createElement(
      'defs',
      null,
      /*#__PURE__*/ React.createElement('style', null, '.cls-4{fill:#00a1df}')
    ),
    /*#__PURE__*/ React.createElement('path', {
      fill: 'none',
      d: 'M0 0H146.78V120.64H0z',
    }),
    /*#__PURE__*/ React.createElement('path', {
      d:
        'M373 350.92v-6a3.55 3.55 0 00-3.75-3.79 3.7 3.7 0 00-3.36 1.7 3.51 3.51 0 00-3.16-1.7 3.16 3.16 0 00-2.8 1.42v-1.18h-2.08v9.55h2.1v-5.29a2.23 2.23 0 012.34-2.54c1.38 0 2.08.9 2.08 2.52v5.31h2.1v-5.29a2.25 2.25 0 012.34-2.54c1.42 0 2.1.9 2.1 2.52v5.31zm11.7-4.77v-4.77h-2.1v1.16a3.62 3.62 0 00-3-1.4 5 5 0 000 10 3.62 3.62 0 003-1.4v1.16h2.08zm-7.73 0a2.89 2.89 0 112.9 3.06 2.86 2.86 0 01-2.92-3.06zm52.17-5a5.38 5.38 0 012 .38 5 5 0 011.63 1.06 4.84 4.84 0 011.08 1.59 5.3 5.3 0 010 4 4.83 4.83 0 01-1.08 1.59 5 5 0 01-1.63 1.06 5.66 5.66 0 01-4.1 0 4.94 4.94 0 01-1.62-1.06 4.88 4.88 0 01-1.07-1.59 5.31 5.31 0 010-4 4.88 4.88 0 011.07-1.59 4.94 4.94 0 011.62-1.06 5.38 5.38 0 012.08-.41zm0 2a3.1 3.1 0 00-1.19.22 2.81 2.81 0 00-.95.63 2.93 2.93 0 00-.63 1 3.47 3.47 0 000 2.48 2.92 2.92 0 00.63 1 2.8 2.8 0 00.95.63 3.25 3.25 0 002.37 0 2.86 2.86 0 001-.63 2.9 2.9 0 00.63-1 3.47 3.47 0 000-2.48 2.9 2.9 0 00-.63-1 2.86 2.86 0 00-1-.63 3.1 3.1 0 00-1.2-.28zm-33.14 3c0-3-1.86-5-4.53-5a5 5 0 00.14 10 5.8 5.8 0 003.91-1.34l-1-1.54a4.55 4.55 0 01-2.78 1 2.65 2.65 0 01-2.86-2.34h7.09c.03-.25.03-.5.03-.78zm-7.11-.84a2.46 2.46 0 012.51-2.31 2.37 2.37 0 012.42 2.32zm15.86-1.5a6.15 6.15 0 00-3-.82c-1.14 0-1.82.42-1.82 1.12s.72.82 1.62.94l1 .14c2.08.3 3.34 1.18 3.34 2.86s-1.6 3.12-4.35 3.12a6.89 6.89 0 01-4.13-1.24l1-1.62a5.09 5.09 0 003.18 1c1.42 0 2.18-.42 2.18-1.16 0-.54-.54-.84-1.68-1l-1-.14c-2.14-.3-3.3-1.26-3.3-2.82 0-1.9 1.56-3.06 4-3.06a7.14 7.14 0 013.89 1zm10-.54h-3.39v4.31c0 1 .34 1.6 1.38 1.6a3.84 3.84 0 001.84-.54l.6 1.78a4.88 4.88 0 01-2.6.74c-2.46 0-3.32-1.32-3.32-3.54v-4.35h-1.94v-1.9h1.94v-2.9h2.1v2.9h3.39zm7.19-2.14a4.44 4.44 0 011.48.26l-.64 2a3.38 3.38 0 00-1.3-.24c-1.36 0-2 .88-2 2.46v5.35h-2.08v-9.55h2.06v1.16a2.82 2.82 0 012.52-1.4zm14.38 8.4a1 1 0 01.38.07 1 1 0 01.31.2 1 1 0 01.21.3.93.93 0 010 .74 1 1 0 01-.21.3 1 1 0 01-.31.2.94.94 0 01-.38.08 1 1 0 01-.9-.58.94.94 0 010-.74 1 1 0 01.21-.3 1 1 0 01.31-.2 1 1 0 01.33-.07zm0 1.69a.71.71 0 00.29-.06.75.75 0 00.23-.16.74.74 0 00-.23-1.2.72.72 0 00-.29-.06.75.75 0 00-.29.06.73.73 0 00-.24.16.74.74 0 000 1 .74.74 0 00.53.22zm.06-1.19a.4.4 0 01.26.08.25.25 0 01.09.21.24.24 0 01-.07.18.35.35 0 01-.21.09l.29.33h-.23l-.27-.33h-.09v.33h-.19V350zm-.22.17v.24h.22a.21.21 0 00.12 0 .1.1 0 000-.09.1.1 0 000-.09.21.21 0 00-.12 0z',
      transform: 'translate(-322.61 -245.68)',
    }),
    /*#__PURE__*/ React.createElement(
      'g',
      {
        id: '_Group_',
        'data-name': '<Group>',
      },
      /*#__PURE__*/ React.createElement('path', {
        fill: '#7673c0',
        d: 'M57.64 22.83H89.14V79.44H57.64z',
      }),
      /*#__PURE__*/ React.createElement('path', {
        id: '_Path_',
        'data-name': '<Path>',
        d:
          'M382.25 296.82A35.94 35.94 0 01396 268.51a36 36 0 100 56.61 35.94 35.94 0 01-13.75-28.3z',
        transform: 'translate(-322.61 -245.68)',
        fill: '#eb001b',
      }),
      /*#__PURE__*/ React.createElement('path', {
        className: 'cls-4',
        d:
          'M450.81 319.12V318h.47v-.24h-1.19v.24h.47v1.16zm2.31 0v-1.4h-.36l-.42 1-.42-1h-.37v1.4h.26v-1.05l.39.91h.27l.39-.91v1.06zM454.24 296.82a36 36 0 01-58.24 28.3 36 36 0 000-56.61 36 36 0 0158.25 28.3z',
        transform: 'translate(-322.61 -245.68)',
      })
    )
  )
}

//# sourceMappingURL=maestro.js.map
