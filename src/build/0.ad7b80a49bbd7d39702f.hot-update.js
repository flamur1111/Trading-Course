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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff8abd8e14b2f22ef9d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkICgpIHtcclxuXHJcbiAgY29uc3QgW2lzT3JkZXJlZDEsIHNldElzT3JkZXJlZDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc09yZGVyZWQyLCBzZXRJc09yZGVyZWQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNPcmRlcmVkMywgc2V0SXNPcmRlcmVkM10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sxID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcmRlcmVkMSh0cnVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrMiA9ICgpID0+IHtcclxuICAgIHNldElzT3JkZXJlZDIodHJ1ZSk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDbGljazMgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09yZGVyZWQzKHRydWUpO1xyXG4gIH07XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwicHJpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5pcm9uZnguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL0Jlc3QtRm9yZXgtVHJhZGluLUJyb2tlci5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkJBU0lDIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xOS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+MTAwIFRyYWRlcy9Nb250aDwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+Sm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+UmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzT3JkZXJlZDF9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrMX0+e2lzT3JkZXJlZDEgPyAnT3JkZXJlZCcgOiAnQnV5IE5vdyd9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2UwLnB4ZnVlbC5jb20vd2FsbHBhcGVycy8xNTkvOTk3L2Rlc2t0b3Atd2FsbHBhcGVyLWZvcmV4LXRyYWRpbmcuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5TVEFOREFSRDwvaDI+XHJcbiAgICAgICAgPHA+NDkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+VW5saW1pdGVkIFRyYWRlczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkVuaGFuY2VkIEpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5BZHZhbmNlZCBSZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNPcmRlcmVkMn0gb25DbGljaz17aGFuZGxlQ2xpY2syfT57aXNPcmRlcmVkMiA/ICdPcmRlcmVkJyA6ICdCdXkgTm93J308L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcudHJhZGluZy1lZHVjYXRpb24uY29tL2FydGljbGUvMTY3NzkzNDQ1OTcxMzNjYzVlNDExNjc3OTM0NDU5X3Jlc2l6ZWQuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5QUkVNSVVNPC9oMj5cclxuICAgICAgICA8cD45OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U3RvY2tzLCBPcHRpb25zLCBGdXR1cmVzLCBGb3JleDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJpc2sgQW5hbHlzaXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Db21taXNzaW9uL0ZlZXM8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzT3JkZXJlZDN9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrM30+e2lzT3JkZXJlZDMgPyAnT3JkZXJlZCcgOiAnQnV5IE5vdyd9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmY4YWJkOGUxNGIyZjIyZWY5ZDZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc09yZGVyZWQxIiwic2V0SXNPcmRlcmVkMSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNPcmRlcmVkMiIsInNldElzT3JkZXJlZDIiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzT3JkZXJlZDMiLCJzZXRJc09yZGVyZWQzIiwiaGFuZGxlQ2xpY2sxIiwiaGFuZGxlQ2xpY2syIiwiaGFuZGxlQ2xpY2szIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJzcmMiLCJhbHQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9