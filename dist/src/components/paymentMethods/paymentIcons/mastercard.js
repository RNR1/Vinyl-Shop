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
exports['default'] = Mastercard

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

function Mastercard(props) {
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        width: 45,
        height: 45,
        viewBox: '0 0 600.46 900.3622047',
      },
      props
    ),
    /*#__PURE__*/ React.createElement('title', null, 'MasterCard'),
    /*#__PURE__*/ React.createElement(
      'g',
      {
        fillOpacity: 1,
        stroke: 'none',
        strokeLinejoin: 'miter',
      },
      /*#__PURE__*/ React.createElement('circle', {
        cx: 229.59059,
        cy: 452.24612,
        r: 215.4579,
        opacity: 1,
        fill: 'red',
        strokeWidth: 2.5,
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
      }),
      /*#__PURE__*/ React.createElement('circle', {
        cy: 452.24612,
        cx: 519.53766,
        r: 215.4579,
        opacity: 1,
        fill: '#fc0',
        strokeWidth: 2.5,
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
      }),
      /*#__PURE__*/ React.createElement('path', {
        d:
          'M374.548 293.19a215.458 215.458 0 00-70.47 159.058 215.458 215.458 0 0070.502 159.054 215.458 215.458 0 0070.47-159.054 215.458 215.458 0 00-70.502-159.058z',
        opacity: 1,
        fill: '#d45500',
        strokeWidth: 2.5,
        strokeMiterlimit: 4,
        strokeDasharray: 'none',
      }),
      /*#__PURE__*/ React.createElement(
        'g',
        {
          style: {
            lineHeight: '125%',
            InkscapeFontSpecification: 'Sans',
            textAlign: 'center',
          },
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '111.41083527px',
          fontFamily: 'Avant Garde BQ',
          letterSpacing: '-5.68623877px',
          wordSpacing: 0,
          textAnchor: 'middle',
          fill: '#fff',
          strokeWidth: '1px',
          strokeLinecap: 'butt',
          strokeOpacity: 1,
          fontVariant: 'normal',
          fontStretch: 'normal',
        },
        /*#__PURE__*/ React.createElement('path', {
          d:
            'M65.492 714.553v78.656h18.049v-30.973c-.112-7.241-.335-14.372-.446-21.502a2261.32 2261.32 0 014.902 15.932c1.337 4.122 2.563 7.91 3.788 11.698l8.356 24.845h14.483c1.672-4.902 3.343-9.916 5.014-14.818a1076.3 1076.3 0 005.905-17.492c2.228-6.907 4.345-13.814 6.461-20.722-.222 7.019-.445 14.15-.445 21.28v31.752h18.828v-78.656H123.65c-1.337 4.122-2.674 8.355-4.123 12.589-1.782 5.682-3.788 11.364-5.57 17.157a812.537 812.537 0 00-6.016 20.166c-2.117-6.796-4.122-13.593-6.35-20.5-3.12-9.804-6.351-19.608-9.693-29.412H65.492zM198.735 736.723c-2.45-1.67-7.13-4.902-14.929-4.902-9.024 0-17.268 4.457-22.728 11.587-5.904 8.022-6.573 16.155-6.573 19.72 0 12.923 7.13 20.945 10.584 24.064 7.02 6.462 13.927 7.242 17.714 7.242 8.913 0 13.704-3.9 16.6-6.016v4.79h17.492v-60.161h-18.16v3.676zm-22.17 36.097c-2.674-2.562-4.123-6.016-4.123-9.58 0-7.465 6.128-13.704 13.592-13.704 7.576 0 13.593 6.127 13.704 13.592 0 7.576-6.016 13.592-13.592 13.703-3.565 0-7.13-1.56-9.582-4.01zM266.411 750.761c-.111-.891-.111-3.23-1.002-5.793-1.672-5.125-7.13-13.035-20.611-13.035-8.356 0-17.046 3.676-21.057 11.475-.891 1.56-2.005 4.234-2.005 8.579 0 2.228.222 7.464 4.679 11.92 2.45 2.34 5.57 4.123 12.478 5.905 4.79 1.226 7.464 1.56 9.136 3.565.78 1.115 1.002 2.34 1.002 2.897 0 1.337-1.002 4.68-5.013 4.79-.446 0-1.671-.11-2.786-.779-2.562-1.337-2.673-4.234-2.896-5.125h-18.272c.223 1.337.446 4.568 2.229 7.91 1.114 2.228 2.896 4.234 4.79 5.794 2.897 2.45 8.022 5.682 16.935 5.682 10.472 0 16.489-4.568 19.274-7.688 4.568-4.902 4.902-9.804 4.902-12.59 0-5.458-1.894-9.915-6.462-13.146-4.01-3.008-7.799-3.9-12.478-5.013-3.565-1.003-5.905-1.671-7.242-2.563-1.225-.89-2.005-2.228-2.005-3.899 0-2.451 1.783-4.568 4.345-4.568.78 0 1.671.223 2.34.669 1.894 1.114 2.228 2.896 2.45 5.013h17.27zM273.26 714.553v18.27h-6.684v14.039h6.462v46.347h18.271v-46.236h7.799v-14.038h-7.688v-18.382h-18.16zM315.977 756.109c.557-1.114 1.114-2.117 2.005-3.008.223-.335 1.337-1.56 2.674-2.34 2.674-1.894 5.46-2.785 8.69-2.785 8.579 0 12.033 5.459 13.481 8.133h-26.85zm44.007 13.146c.223-2.117.446-4.122.446-6.239 0-9.024-4.345-17.937-11.141-23.619-7.799-6.684-16.489-7.464-20.054-7.464-9.247 0-18.271 4.233-24.176 11.364-6.462 7.798-7.242 16.154-7.242 19.942 0 9.247 4.345 18.383 11.364 24.176 7.91 6.462 16.489 7.13 20.277 7.13 11.586 0 18.383-5.681 21.502-8.8 4.568-4.457 6.128-8.357 7.242-10.92h-18.606c-1.114 1.115-1.56 1.45-2.34 1.895-2.116 1.448-5.124 2.117-7.798 2.117-4.79 0-9.359-2.006-12.255-5.905-1.003-1.337-2.006-3.454-2.117-3.677h44.898zM364.325 733.158v60.05h18.16v-33.534c.111-3.008.446-4.234 1.337-5.57 2.785-4.234 9.916-4.457 10.473-4.457 1.448-.111 2.562.111 3.788.223v-16.935c-2.34 0-8.356-.445-13.704 4.902-1.448 1.449-2.785 3.231-3.12 3.677v-8.356h-16.934zM479.408 743.965c-1.337-4.568-4.122-13.815-13.815-21.725-10.361-8.467-20.834-9.359-25.958-9.359-10.027 0-17.27 3.454-20.5 5.348-6.35 3.788-20.388 14.818-20.388 36.209 0 11.252 4.233 18.494 6.796 22.17 4.01 5.794 14.595 18.049 34.537 18.049 4.568 0 8.133-.669 9.804-1.114 5.57-1.337 18.16-6.24 25.736-20.277 1.226-2.34 2.228-4.568 3.9-9.693h-21.837c-1.225 2.006-1.671 2.674-2.451 3.677-3.008 3.565-7.353 5.57-8.579 6.016-1.337.446-3.565 1.114-6.796 1.114-12.143 0-17.714-9.136-19.274-12.812-.557-1.337-1.448-3.9-1.56-7.687 0-8.245 4.68-15.71 12.367-18.94 1.448-.669 4.345-1.783 8.467-1.783 6.35 0 12.033 2.785 15.82 7.799.67 1.003 1.338 1.894 1.895 3.008h21.836zM524.527 736.723c-2.451-1.67-7.13-4.902-14.929-4.902-9.024 0-17.269 4.457-22.728 11.587-5.905 8.022-6.573 16.155-6.573 19.72 0 12.923 7.13 20.945 10.584 24.064 7.019 6.462 13.926 7.242 17.714 7.242 8.913 0 13.704-3.9 16.6-6.016v4.79h17.492v-60.161h-18.16v3.676zm-22.17 36.097c-2.675-2.562-4.123-6.016-4.123-9.58 0-7.465 6.128-13.704 13.592-13.704 7.576 0 13.592 6.127 13.704 13.592 0 7.576-6.016 13.592-13.592 13.703-3.566 0-7.13-1.56-9.582-4.01zM549.199 733.158v60.05h18.16v-33.534c.11-3.008.445-4.234 1.336-5.57 2.786-4.234 9.916-4.457 10.473-4.457 1.448-.111 2.562.111 3.788.223v-16.935c-2.34 0-8.356-.445-13.704 4.902-1.448 1.449-2.785 3.231-3.119 3.677v-8.356h-16.934zM627.07 736.835c-2.562-1.671-7.13-4.902-14.929-4.902-9.024 0-17.38 4.456-22.727 11.586-6.017 7.91-6.574 16.155-6.574 19.72 0 12.924 7.13 20.945 10.473 24.065 7.019 6.462 13.926 7.242 17.826 7.242 8.801 0 13.703-3.9 16.488-6.017l.112 4.68h17.38v-78.656H627.07v22.282zm-22.282 36.097c-2.562-2.674-4.01-6.128-4.01-9.693 0-7.464 6.016-13.592 13.592-13.592 7.464-.111 13.592 6.016 13.592 13.592 0 7.465-6.017 13.592-13.592 13.592-3.566 0-7.13-1.56-9.582-3.9z',
          style: {
            InkscapeFontSpecification: "'Avant Garde BQ Bold'",
          },
          transform: 'translate(-45.706 -440.079) scale(1.18077)',
        })
      )
    )
  )
}

//# sourceMappingURL=mastercard.js.map
