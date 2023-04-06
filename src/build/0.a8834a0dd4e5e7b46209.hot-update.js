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
    isOrdered = _useState2[0],
    setIsOrdered = _useState2[1];
  var handleClick = function handleClick() {
    setIsOrdered(true);
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
    disabled: isOrdered,
    onClick: handleClick
  }, isOrdered ? 'Ordered' : 'Buy Now'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Commission/Fees"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy Now"))))));
}
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
/******/ 	__webpack_require__.h = () => ("0f3ef276278b6e873ad0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsa0JBQWdCLENBQUksQ0FBSyxlQUNuREEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsaUNBQStCLENBQUksQ0FBSyxlQUNsRUEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsZUFBYSxDQUFJLENBQUssZUFDaERBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGlCQUFlLENBQUksQ0FBSyxDQUMvQyxlQUNMQSwwREFBQSxpQkFBUSxTQUFPLENBQVMsQ0FFcEIsQ0FDRixDQUtZLENBQ0osQ0FDUDtBQUVYO0FBRUEsaUVBQWVFLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RW9CO0FBQ047QUFDUDtBQUNJO0FBQ29CO0FBQ2Q7QUFDSjtBQUNoQyxJQUFNcUIsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJdkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNvQix5REFBZ0IsT0FBRyxlQUNwQnBCLDBEQUFBLENBQUNzQixnREFBTyxPQUFFLGVBQ1Z0QiwwREFBQSxDQUFDcUIsa0RBQVMsT0FBRSxlQUNackIsMERBQUEsQ0FBQ0UsNkNBQUksT0FBRSxlQUNQRiwwREFBQSxDQUFDbUIsK0NBQU0sT0FBRSxDQUVWO0FBRVgsQ0FBQztBQUNERCw2Q0FBZSxlQUFDbEIsMERBQUEsQ0FBQ3VCLEdBQUcsT0FBRSxFQUFFRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQnZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkICgpIHtcclxuXHJcbiAgICBjb25zdCBbaXNPcmRlcmVkLCBzZXRJc09yZGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc09yZGVyZWQodHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhyPjwvaHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmlyb25meC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIvQmVzdC1Gb3JleC1UcmFkaW4tQnJva2VyLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+QkFTSUMgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj4xMDAgVHJhZGVzL01vbnRoPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5Kb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5SZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzTmFtZT1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17aXNPcmRlcmVkfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+e2lzT3JkZXJlZCA/ICdPcmRlcmVkJyA6ICdCdXkgTm93J308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vZTAucHhmdWVsLmNvbS93YWxscGFwZXJzLzE1OS85OTcvZGVza3RvcC13YWxscGFwZXItZm9yZXgtdHJhZGluZy5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPlNUQU5EQVJEPC9oMj5cclxuICAgICAgICA8cD40OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+RW5oYW5jZWQgSm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkFkdmFuY2VkIFJlcG9ydHM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uPkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcudHJhZGluZy1lZHVjYXRpb24uY29tL2FydGljbGUvMTY3NzkzNDQ1OTcxMzNjYzVlNDExNjc3OTM0NDU5X3Jlc2l6ZWQuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5QUkVNSVVNPC9oMj5cclxuICAgICAgICA8cD45OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U3RvY2tzLCBPcHRpb25zLCBGdXR1cmVzLCBGb3JleDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJpc2sgQW5hbHlzaXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Db21taXNzaW9uL0ZlZXM8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24+QnV5IE5vdzwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyTmF2aWdhdGlvbiBmcm9tIFwiLi9IZWFkZXJOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBMZWFybk1vcmUgZnJvbSBcIi4vTGVhcm5Nb3JlXCI7XHJcbmltcG9ydCBNYWluQm94IGZyb20gXCIuL01haW5Cb3hcIjtcclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8TWFpbkJveC8+XHJcbiAgICAgICAgICAgIDxMZWFybk1vcmUvPlxyXG4gICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGYzZWYyNzYyNzhiNmU4NzNhZDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc09yZGVyZWQiLCJzZXRJc09yZGVyZWQiLCJoYW5kbGVDbGljayIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImlkIiwic3JjIiwiYWx0IiwiZGlzYWJsZWQiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiTGVhcm5Nb3JlIiwiTWFpbkJveCIsIkFwcCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9