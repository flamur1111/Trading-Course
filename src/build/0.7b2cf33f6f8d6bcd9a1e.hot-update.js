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
    className: "Button1",
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
    className: "Button2",
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
    className: "Button3",
    disabled: isOrdered3,
    onClick: handleClick3
  }, isOrdered3 ? 'Ordered' : 'Buy Now'))))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _LearnMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _MainBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LearnMore__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ad7b80a49bbd7d39702f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxDQUNKLENBQ0osQ0FDUDtBQUVUO0FBQUM7QUFFSCxpRUFBZVosSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQzlFb0I7QUFDTjtBQUNQO0FBQ0k7QUFDb0I7QUFDZDtBQUNKO0FBQ2hDLElBQU0rQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQ0lqQywwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQzhCLHlEQUFnQixPQUFHLGVBQ3BCOUIsMERBQUEsQ0FBQ2dDLGdEQUFPLE9BQUUsZUFDVmhDLDBEQUFBLENBQUMrQixrREFBUyxPQUFFLGVBQ1ovQiwwREFBQSxDQUFDRSw2Q0FBSSxPQUFFLGVBQ1BGLDBEQUFBLENBQUM2QiwrQ0FBTSxPQUFFLENBRVY7QUFFWCxDQUFDO0FBQ0RELDZDQUFlLGVBQUM1QiwwREFBQSxDQUFDaUMsR0FBRyxPQUFFLEVBQUVFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ25CdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQgKCkge1xyXG5cclxuICBjb25zdCBbaXNPcmRlcmVkMSwgc2V0SXNPcmRlcmVkMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzT3JkZXJlZDIsIHNldElzT3JkZXJlZDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc09yZGVyZWQzLCBzZXRJc09yZGVyZWQzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDbGljazEgPSAoKSA9PiB7XHJcbiAgICBzZXRJc09yZGVyZWQxKHRydWUpO1xyXG4gIH07XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2syID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcmRlcmVkMih0cnVlKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrMyA9ICgpID0+IHtcclxuICAgIHNldElzT3JkZXJlZDModHJ1ZSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmlyb25meC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIvQmVzdC1Gb3JleC1UcmFkaW4tQnJva2VyLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QkFTSUMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj4xMDAgVHJhZGVzL01vbnRoPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5Kb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5SZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b24xXCIgZGlzYWJsZWQ9e2lzT3JkZXJlZDF9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrMX0+e2lzT3JkZXJlZDEgPyAnT3JkZXJlZCcgOiAnQnV5IE5vdyd9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2UwLnB4ZnVlbC5jb20vd2FsbHBhcGVycy8xNTkvOTk3L2Rlc2t0b3Atd2FsbHBhcGVyLWZvcmV4LXRyYWRpbmcuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5TVEFOREFSRDwvaDI+XHJcbiAgICAgICAgPHA+NDkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+VW5saW1pdGVkIFRyYWRlczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkVuaGFuY2VkIEpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5BZHZhbmNlZCBSZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJCdXR0b24yXCIgZGlzYWJsZWQ9e2lzT3JkZXJlZDJ9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrMn0+e2lzT3JkZXJlZDIgPyAnT3JkZXJlZCcgOiAnQnV5IE5vdyd9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnRyYWRpbmctZWR1Y2F0aW9uLmNvbS9hcnRpY2xlLzE2Nzc5MzQ0NTk3MTMzY2M1ZTQxMTY3NzkzNDQ1OV9yZXNpemVkLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICA8aDI+UFJFTUlVTTwvaDI+XHJcbiAgICAgICAgPHA+OTkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+VW5saW1pdGVkIFRyYWRlczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlN0b2NrcywgT3B0aW9ucywgRnV0dXJlcywgRm9yZXg8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5SaXNrIEFuYWx5c2lzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+Q29tbWlzc2lvbi9GZWVzPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJ1dHRvbjNcIiBkaXNhYmxlZD17aXNPcmRlcmVkM30gb25DbGljaz17aGFuZGxlQ2xpY2szfT57aXNPcmRlcmVkMyA/ICdPcmRlcmVkJyA6ICdCdXkgTm93J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxuICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IExlYXJuTW9yZSBmcm9tIFwiLi9MZWFybk1vcmVcIjtcclxuaW1wb3J0IE1haW5Cb3ggZnJvbSBcIi4vTWFpbkJveFwiO1xyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxNYWluQm94Lz5cclxuICAgICAgICAgICAgPExlYXJuTW9yZS8+XHJcbiAgICAgICAgICAgIDxDYXJkLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZDdiODBhNDliYmQ3ZDM5NzAyZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzT3JkZXJlZDEiLCJzZXRJc09yZGVyZWQxIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpc09yZGVyZWQyIiwic2V0SXNPcmRlcmVkMiIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNPcmRlcmVkMyIsInNldElzT3JkZXJlZDMiLCJoYW5kbGVDbGljazEiLCJoYW5kbGVDbGljazIiLCJoYW5kbGVDbGljazMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsImFsdCIsImRpc2FibGVkIiwib25DbGljayIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiRm9vdGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsIkxlYXJuTW9yZSIsIk1haW5Cb3giLCJBcHAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==