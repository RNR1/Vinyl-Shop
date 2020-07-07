"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SocialBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _socialBarModule = _interopRequireDefault(require("./socialBar.module.css"));

var _ronbrahaCodebyron = _interopRequireDefault(require("@bit/ronbraha.codebyron.nav-group"));

var _icon = _interopRequireDefault(require("./icon"));

var _socialLinks = require("./socialLinks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SocialBar(_ref) {
  var siteTitle = _ref.siteTitle,
      _ref$socialItems = _ref.socialItems,
      socialItems = _ref$socialItems === void 0 ? _socialLinks.socialLinks : _ref$socialItems,
      _ref$feedbackUrl = _ref.feedbackUrl,
      feedbackUrl = _ref$feedbackUrl === void 0 ? '/' : _ref$feedbackUrl;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: _socialBarModule["default"].SocialBar
  }, /*#__PURE__*/_react["default"].createElement(_ronbrahaCodebyron["default"], {
    items: socialItems,
    Item: _icon["default"],
    className: _socialBarModule["default"].SocialIcon,
    style: {
      margin: 20
    }
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: _socialBarModule["default"].FeedbackText
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeRegularSvgIcons.faEnvelope,
    size: "lg",
    style: {
      marginRight: 5
    }
  }), "We'd like to know what you think of", ' ', siteTitle ? "".concat(siteTitle, "'s") : 'our', " website. Please send us your comments and suggestions via our", ' ', /*#__PURE__*/_react["default"].createElement("a", {
    href: feedbackUrl,
    className: _socialBarModule["default"].FeedbackText
  }, "feedback page.")));
}

SocialBar.propTypes = {
  siteTitle: _propTypes["default"].string,
  socialItems: _propTypes["default"].array,
  feedbackUrl: _propTypes["default"].string
};

//# sourceMappingURL=socialBar.js.map