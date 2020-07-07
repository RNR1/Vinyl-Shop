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
exports['default'] = Visa

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

function Visa(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        x: '0px',
        y: '0px',
        width: 40,
        height: 40,
        viewBox: '0 0 1000.046 323.653',
        xmlSpace: 'preserve',
      },
      props
    ),
    /*#__PURE__*/ React.createElement('title', null, 'Visa'),
    /*#__PURE__*/ React.createElement(
      'g',
      {
        transform: 'matrix(4.42996 0 0 4.42996 -81.166 -105.048)',
      },
      /*#__PURE__*/ React.createElement('path', {
        fill: '#00579f',
        d: 'M116.145 95.719L97.858 95.719 109.296 24.995 127.582 24.995z',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M182.437 26.724c-3.607-1.431-9.328-3.011-16.402-3.011-18.059 0-30.776 9.63-30.854 23.398-.15 10.158 9.105 15.8 16.027 19.187 7.075 3.461 9.48 5.72 9.48 8.805-.072 4.738-5.717 6.922-10.982 6.922-7.301 0-11.213-1.126-17.158-3.762l-2.408-1.13-2.559 15.876c4.289 1.954 12.191 3.688 20.395 3.764 19.188 0 31.68-9.481 31.828-24.153.073-8.051-4.814-14.22-15.35-19.261-6.396-3.236-10.313-5.418-10.313-8.729.075-3.01 3.313-6.093 10.533-6.093 5.945-.151 10.313 1.278 13.622 2.708l1.654.751 2.487-15.272zM206.742 70.664c1.506-4.063 7.301-19.788 7.301-19.788-.076.151 1.503-4.138 2.406-6.771l1.278 6.094s3.463 16.929 4.215 20.465h-15.2zm22.573-45.669H215.17c-4.362 0-7.676 1.278-9.558 5.868l-27.163 64.855h19.188s3.159-8.729 3.838-10.609h23.479c.525 2.483 2.182 10.609 2.182 10.609h16.932l-14.753-70.723zM82.584 24.995L64.675 73.222l-1.957-9.781c-3.311-11.286-13.695-23.548-25.283-29.645l16.404 61.848h19.338l28.744-70.649H82.584z',
        fill: '#00579f',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M48.045 24.995H18.623l-.301 1.429c22.951 5.869 38.151 20.016 44.396 37.02L56.322 30.94c-1.053-4.517-4.289-5.796-8.277-5.945z',
        fill: '#faa61a',
      })
    )
  )
}

//# sourceMappingURL=visa.js.map
