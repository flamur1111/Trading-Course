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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Card() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    addedCards = _useState2[0],
    setAddedCards = _useState2[1];
  var handleClick = function handleClick(index) {
    var newAddedCards = _toConsumableArray(addedCards);
    if (!newAddedCards.includes(index)) {
      newAddedCards.push(index);
      setAddedCards(newAddedCards);
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "container",
    id: "prices"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.ironfx.com/wp-content/uploads/2022/02/Best-Forex-Tradin-Broker.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "cardbody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "BASIC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "19.99$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "100 Trades/Month")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Journal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Reports")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    "class": "icon-check"
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/******/ 	__webpack_require__.h = () => ("855aaf8e0b5b9264eb00")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQUssY0FBVSxDQUFJLGVBQzdCQSwwREFBQSwwQkFDRUEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsa0JBQWdCLENBQUksQ0FBSyxlQUNuREEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsaUNBQStCLENBQUksQ0FBSyxlQUNsRUEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsZUFBYSxDQUFJLENBQUssZUFDaERBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGlCQUFlLENBQUksQ0FBSyxDQUMvQyxlQUNMQSwwREFBQSxpQkFBUSxTQUFPLENBQVMsQ0FFcEIsQ0FDRixDQUNGLENBQ0YsQ0FDSDtBQUVIO0FBRUEsaUVBQWVDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRW9CO0FBQ047QUFDUDtBQUNJO0FBQ29CO0FBQ2Q7QUFDSjtBQUNoQyxJQUFNd0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJekIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNzQix5REFBZ0IsT0FBRyxlQUNwQnRCLDBEQUFBLENBQUN3QixnREFBTyxPQUFFLGVBQ1Z4QiwwREFBQSxDQUFDdUIsa0RBQVMsT0FBRSxlQUNadkIsMERBQUEsQ0FBQ0MsNkNBQUksT0FBRSxlQUNQRCwwREFBQSxDQUFDcUIsK0NBQU0sT0FBRSxDQUVWO0FBRVgsQ0FBQztBQUNERCw2Q0FBZSxlQUFDcEIsMERBQUEsQ0FBQ3lCLEdBQUcsT0FBRSxFQUFFRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUNuQnZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCAoKSB7XHJcbiAgY29uc3QgW2FkZGVkQ2FyZHMsIHNldEFkZGVkQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QWRkZWRDYXJkcyA9IFsuLi5hZGRlZENhcmRzXTtcclxuICAgIGlmICghbmV3QWRkZWRDYXJkcy5pbmNsdWRlcyhpbmRleCkpIHtcclxuICAgICAgbmV3QWRkZWRDYXJkcy5wdXNoKGluZGV4KTtcclxuICAgICAgc2V0QWRkZWRDYXJkcyhuZXdBZGRlZENhcmRzKTtcclxuICAgIH1cclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5pcm9uZnguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL0Jlc3QtRm9yZXgtVHJhZGluLUJyb2tlci5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPkJBU0lDIDwvaDI+XHJcbiAgICAgICAgPHA+MTkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+MTAwIFRyYWRlcy9Nb250aDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5SZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbj5CdXkgTm93PC9idXR0b24+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lMC5weGZ1ZWwuY29tL3dhbGxwYXBlcnMvMTU5Lzk5Ny9kZXNrdG9wLXdhbGxwYXBlci1mb3JleC10cmFkaW5nLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICA8aDI+U1RBTkRBUkQ8L2gyPlxyXG4gICAgICAgIDxwPjQ5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlVubGltaXRlZCBUcmFkZXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5FbmhhbmNlZCBKb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+QWR2YW5jZWQgUmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlNoYXJpbmc8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24+QnV5IE5vdzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcudHJhZGluZy1lZHVjYXRpb24uY29tL2FydGljbGUvMTY3NzkzNDQ1OTcxMzNjYzVlNDExNjc3OTM0NDU5X3Jlc2l6ZWQuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5QUkVNSVVNPC9oMj5cclxuICAgICAgICA8cD45OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U3RvY2tzLCBPcHRpb25zLCBGdXR1cmVzLCBGb3JleDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJpc2sgQW5hbHlzaXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Db21taXNzaW9uL0ZlZXM8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24+QnV5IE5vdzwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcIi4vSGVhZGVyTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTGVhcm5Nb3JlIGZyb20gXCIuL0xlYXJuTW9yZVwiO1xyXG5pbXBvcnQgTWFpbkJveCBmcm9tIFwiLi9NYWluQm94XCI7XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPE1haW5Cb3gvPlxyXG4gICAgICAgICAgICA8TGVhcm5Nb3JlLz5cclxuICAgICAgICAgICAgPENhcmQvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg1NWFhZjhlMGI1YjkyNjRlYjAwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkZWRDYXJkcyIsInNldEFkZGVkQ2FyZHMiLCJoYW5kbGVDbGljayIsImluZGV4IiwibmV3QWRkZWRDYXJkcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImluY2x1ZGVzIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImlkIiwic3JjIiwiYWx0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiTGVhcm5Nb3JlIiwiTWFpbkJveCIsIkFwcCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9