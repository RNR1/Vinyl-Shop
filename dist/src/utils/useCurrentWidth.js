"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCurrentWidth;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getWidth = function getWidth() {
  return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth;
};
/**
 * React hook to calculate the window width.
 *
 * Source: https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
 */


function useCurrentWidth() {
  // save current window width in the state object
  var _useState = (0, _react.useState)(getWidth()),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1]; // in this case useEffect will execute only once because
  // it does not have any dependencies.


  (0, _react.useEffect)(function () {
    // timeoutId for debounce mechanism
    var timeoutId = null;

    var resizeListener = function resizeListener() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId); // change width from the state object after 150 milliseconds

      timeoutId = setTimeout(function () {
        return setWidth(getWidth());
      }, 150);
    }; // set resize listener


    window.addEventListener('resize', resizeListener); // clean up function

    return function () {
      // remove resize listener
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  return width;
}

//# sourceMappingURL=useCurrentWidth.js.map