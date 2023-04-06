"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Card() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOrdered1 = _useState2[0],
    setIsOrdered1 = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOrdered2 = _useState4[0],
    setIsOrdered2 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isOrdered3 = _useState6[0],
    setIsOrdered3 = _useState6[1];
  var handleClick1 = function handleClick1() {
    setIsOrdered1(true);
  };
  var handleClick2 = function handleClick2() {
    setIsOrdered2(true);
  };
  var handleClick3 = function handleClick3() {
    setIsOrdered3(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container",
    id: "prices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.ironfx.com/wp-content/uploads/2022/02/Best-Forex-Tradin-Broker.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cardbody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "BASIC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "19.99$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-check"
  }, "100 Trades/Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-check"
  }, "Journal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-check"
  }, "Reports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-check"
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: isOrdered1,
    onClick: handleClick1
  }, isOrdered1 ? 'Ordered' : 'Buy Now'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://e0.pxfuel.com/wallpapers/159/997/desktop-wallpaper-forex-trading.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "cardbody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "STANDARD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "49.99$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Unlimited Trades")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Enhanced Journal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Advanced Reports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: isOrdered2,
    onClick: handleClick2
  }, isOrdered2 ? 'Ordered' : 'Buy Now'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://img.trading-education.com/article/16779344597133cc5e411677934459_resized.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "cardbody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "PREMIUM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "99.99$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Unlimited Trades")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Stocks, Options, Futures, Forex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Risk Analysis")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Commission/Fees"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: isOrdered3,
    onClick: handleClick3
  }, isOrdered3 ? 'Ordered' : 'Buy Now'))))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LearnMore() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showMore = _React$useState2[0],
    setShowMore = _React$useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "more"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "head"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Forex Signals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "photos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://aximedia.s3.amazonaws.com/rebrand-prod/fkghm0fv/long-short-positions-forex-market.png",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/How-to-read-forex-charts-GBPUSD-chart_LRG.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "What is Forex ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Forex trading is the process of speculating on currency prices to potentially make a profit. Currencies are traded in pairs, so by exchanging one currency for another, a trader is speculating on whether one currency will rise or fall in value against the other."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Often perceived as an easy moneymaking career, forex trading is actually quite difficult, though highly engaging. The foreign exchange market is the largest and most liquid market in the world, but trading currencies is very different from trading stocks or commodities."), showMore ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "There are several reasons forex can be an attractive market, even for beginners who have little experience. The forex market is accessible, requiring only a small deposit of funds for traders to get involved. ")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowMore(!showMore);
    }
  }, showMore ? "Show Less" : "Continue Reading"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LearnMore);

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MainBox() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "mainbox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "element"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://forextradechennai.com/wp-content/uploads/slider/cache/2ccee6c77bbff5ddde41868ffbd7ab40/Banner3-scaled.webp"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainBox);

/***/ }),

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LearnMore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _MainBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);




var Wrapper = function Wrapper() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainBox__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LearnMore__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/home",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ecdef3b5798ed029793")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzhDLEdBQUcsT0FBRSxFQUVOSSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUN2Qy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvTGVhcm5Nb3JlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvTWFpbkJveC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQgKCkge1xyXG5cclxuICBjb25zdCBbaXNPcmRlcmVkMSwgc2V0SXNPcmRlcmVkMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzT3JkZXJlZDIsIHNldElzT3JkZXJlZDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc09yZGVyZWQzLCBzZXRJc09yZGVyZWQzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDbGljazEgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09yZGVyZWQxKHRydWUpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2syID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcmRlcmVkMih0cnVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrMyA9ICgpID0+IHtcclxuICAgIHNldElzT3JkZXJlZDModHJ1ZSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmlyb25meC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIvQmVzdC1Gb3JleC1UcmFkaW4tQnJva2VyLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QkFTSUMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj4xMDAgVHJhZGVzL01vbnRoPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5Kb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5SZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNPcmRlcmVkMX0gb25DbGljaz17aGFuZGxlQ2xpY2sxfT57aXNPcmRlcmVkMSA/ICdPcmRlcmVkJyA6ICdCdXkgTm93J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vZTAucHhmdWVsLmNvbS93YWxscGFwZXJzLzE1OS85OTcvZGVza3RvcC13YWxscGFwZXItZm9yZXgtdHJhZGluZy5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPlNUQU5EQVJEPC9oMj5cclxuICAgICAgICA8cD40OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+RW5oYW5jZWQgSm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkFkdmFuY2VkIFJlcG9ydHM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc09yZGVyZWQyfSBvbkNsaWNrPXtoYW5kbGVDbGljazJ9Pntpc09yZGVyZWQyID8gJ09yZGVyZWQnIDogJ0J1eSBOb3cnfTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2ltZy50cmFkaW5nLWVkdWNhdGlvbi5jb20vYXJ0aWNsZS8xNjc3OTM0NDU5NzEzM2NjNWU0MTE2Nzc5MzQ0NTlfcmVzaXplZC5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPlBSRU1JVU08L2gyPlxyXG4gICAgICAgIDxwPjk5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlVubGltaXRlZCBUcmFkZXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5TdG9ja3MsIE9wdGlvbnMsIEZ1dHVyZXMsIEZvcmV4PC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+UmlzayBBbmFseXNpczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkNvbW1pc3Npb24vRmVlczwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNPcmRlcmVkM30gb25DbGljaz17aGFuZGxlQ2xpY2szfT57aXNPcmRlcmVkMyA/ICdPcmRlcmVkJyA6ICdCdXkgTm93J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBMZWFybk1vcmUgKCkge1xyXG4gIGNvbnN0IFtzaG93TW9yZSwgc2V0U2hvd01vcmVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzcz1cIm1vcmVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgICAgPGgxPkZvcmV4IFNpZ25hbHM8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vYXhpbWVkaWEuczMuYW1hem9uYXdzLmNvbS9yZWJyYW5kLXByb2QvZmtnaG0wZnYvbG9uZy1zaG9ydC1wb3NpdGlvbnMtZm9yZXgtbWFya2V0LnBuZ1wiIGFsdD1cIlwiID48L2ltZz5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2EuYy1kbi5uZXQvYy9jb250ZW50L2RhbS9wdWJsaWNzaXRlcy9pZ2NvbS91ay9pbWFnZXMvQ29udGVudEltYWdlL0hvdy10by1yZWFkLWZvcmV4LWNoYXJ0cy1HQlBVU0QtY2hhcnRfTFJHLnBuZ1wiIGFsdD1cIlwiID48L2ltZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPGgxPldoYXQgaXMgRm9yZXggPzwvaDE+XHJcbiAgICAgICAgICA8cD5Gb3JleCB0cmFkaW5nIGlzIHRoZSBwcm9jZXNzIG9mIHNwZWN1bGF0aW5nIG9uIGN1cnJlbmN5IHByaWNlcyB0byBwb3RlbnRpYWxseSBtYWtlIGEgcHJvZml0LiBDdXJyZW5jaWVzIGFyZSB0cmFkZWQgaW4gcGFpcnMsIHNvIGJ5IGV4Y2hhbmdpbmcgb25lIGN1cnJlbmN5IGZvciBhbm90aGVyLCBhIHRyYWRlciBpcyBzcGVjdWxhdGluZyBvbiB3aGV0aGVyIG9uZSBjdXJyZW5jeSB3aWxsIHJpc2Ugb3IgZmFsbCBpbiB2YWx1ZSBhZ2FpbnN0IHRoZSBvdGhlci48L3A+XHJcbiAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgPHNwYW4+T2Z0ZW4gcGVyY2VpdmVkIGFzIGFuIGVhc3kgbW9uZXltYWtpbmcgY2FyZWVyLCBmb3JleCB0cmFkaW5nIGlzIGFjdHVhbGx5IHF1aXRlIGRpZmZpY3VsdCwgdGhvdWdoIGhpZ2hseSBlbmdhZ2luZy4gVGhlIGZvcmVpZ24gZXhjaGFuZ2UgbWFya2V0IGlzIHRoZSBsYXJnZXN0IGFuZCBtb3N0IGxpcXVpZCBtYXJrZXQgaW4gdGhlIHdvcmxkLCBidXQgdHJhZGluZyBjdXJyZW5jaWVzIGlzIHZlcnkgZGlmZmVyZW50IGZyb20gdHJhZGluZyBzdG9ja3Mgb3IgY29tbW9kaXRpZXMuPC9zcGFuPlxyXG4gICAgICAgICAge3Nob3dNb3JlID8gPD48cD5UaGVyZSBhcmUgc2V2ZXJhbCByZWFzb25zIGZvcmV4IGNhbiBiZSBhbiBhdHRyYWN0aXZlIG1hcmtldCwgZXZlbiBmb3IgYmVnaW5uZXJzIHdobyBoYXZlIGxpdHRsZSBleHBlcmllbmNlLiBUaGUgZm9yZXggbWFya2V0IGlzIGFjY2Vzc2libGUsIHJlcXVpcmluZyBvbmx5IGEgc21hbGwgZGVwb3NpdCBvZiBmdW5kcyBmb3IgdHJhZGVycyB0byBnZXQgaW52b2x2ZWQuIDwvcD48Lz4gOiBudWxsfVxyXG4gICAgICAgICAgPGJyLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0U2hvd01vcmUoIXNob3dNb3JlKX0+XHJcbiAgICAgICAgICAgIHtzaG93TW9yZSA/IFwiU2hvdyBMZXNzXCIgOiBcIkNvbnRpbnVlIFJlYWRpbmdcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhcm5Nb3JlOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIE1haW5Cb3ggKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbmJveFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJlbGVtZW50XCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vZm9yZXh0cmFkZWNoZW5uYWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy9zbGlkZXIvY2FjaGUvMmNjZWU2Yzc3YmJmZjVkZGRlNDE4NjhmZmJkN2FiNDAvQmFubmVyMy1zY2FsZWQud2VicFwiPjwvaW1nPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbkJveDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMZWFybk1vcmUgZnJvbSBcIi4vTGVhcm5Nb3JlXCI7XHJcbmltcG9ydCBNYWluQm94IGZyb20gXCIuL01haW5Cb3hcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5cclxuXHJcbmNvbnN0IFdyYXBwZXIgPSAoKSA9PiAge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxNYWluQm94Lz5cclxuICAgICAgICA8TGVhcm5Nb3JlLz5cclxuICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcIi4vSGVhZGVyTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgR29Ub1RvcEJ1dHRvbiBmcm9tIFwiLi9Hb1RvVG9wXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2hvbWVcIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0Rm9ybS8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8R29Ub1RvcEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cclxuPEFwcC8+LFxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjllY2RlZjNiNTc5OGVkMDI5NzkzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNPcmRlcmVkMSIsInNldElzT3JkZXJlZDEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzT3JkZXJlZDIiLCJzZXRJc09yZGVyZWQyIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc09yZGVyZWQzIiwic2V0SXNPcmRlcmVkMyIsImhhbmRsZUNsaWNrMSIsImhhbmRsZUNsaWNrMiIsImhhbmRsZUNsaWNrMyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImlkIiwic3JjIiwiYWx0IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiTGVhcm5Nb3JlIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsInNob3dNb3JlIiwic2V0U2hvd01vcmUiLCJNYWluQm94IiwiV3JhcHBlciIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiR29Ub1RvcEJ1dHRvbiIsIkNvbnRhY3RGb3JtIiwiQXBwIiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==