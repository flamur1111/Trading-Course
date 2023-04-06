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
    className: "card ".concat(addedCards.includes(0) ? "added" : "")
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
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick(0);
    }
  }, "Buy Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card ".concat(addedCards.includes(1) ? "added" : "")
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
    onClick: function onClick() {
      return handleClick(0);
    }
  }, "Buy Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "card ".concat(addedCards.includes(1) ? "added" : "")
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c1f4f553150d8adbe5d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRcUIsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFNBQU8sQ0FBUyxDQUNuRCxDQUNGLGVBRU5SLDBEQUFBO0lBQUtpQixTQUFTLFVBQUFDLE1BQUEsQ0FBVVosVUFBVSxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLEVBQUU7RUFBRyxnQkFDaEVaLDBEQUFBO0lBQUttQixHQUFHLEVBQUMsc0ZBQXNGO0lBQUNDLEdBQUcsRUFBQztFQUFFLEVBQU8sZUFDM0dwQiwwREFBQTtJQUFLLFNBQU07RUFBVSxnQkFDbkJBLDBEQUFBLGFBQUksU0FBTyxDQUFLLGVBQ2hCQSwwREFBQSxZQUFHLFNBQU8sZUFBQUEsMERBQUEsWUFBSyxjQUFVLENBQUksZUFDN0JBLDBEQUFBLDBCQUNFQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxrQkFBZ0IsQ0FBSSxDQUFLLGVBQ25EQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxpQ0FBK0IsQ0FBSSxDQUFLLGVBQ2xFQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxlQUFhLENBQUksQ0FBSyxlQUNoREEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsaUJBQWUsQ0FBSSxDQUFLLENBQy9DLGVBQ0xBLDBEQUFBLGlCQUFRLFNBQU8sQ0FBUyxDQUVwQixDQUNGLENBQ0YsQ0FDRixDQUNIO0FBRUg7QUFFQSxpRUFBZUMsSUFBSTs7Ozs7Ozs7VUNwRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCAoKSB7XHJcbiAgY29uc3QgW2FkZGVkQ2FyZHMsIHNldEFkZGVkQ2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgbmV3QWRkZWRDYXJkcyA9IFsuLi5hZGRlZENhcmRzXTtcclxuICAgIGlmICghbmV3QWRkZWRDYXJkcy5pbmNsdWRlcyhpbmRleCkpIHtcclxuICAgICAgbmV3QWRkZWRDYXJkcy5wdXNoKGluZGV4KTtcclxuICAgICAgc2V0QWRkZWRDYXJkcyhuZXdBZGRlZENhcmRzKTtcclxuICAgIH1cclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCAke2FkZGVkQ2FyZHMuaW5jbHVkZXMoMCkgPyBcImFkZGVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5pcm9uZnguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL0Jlc3QtRm9yZXgtVHJhZGluLUJyb2tlci5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPkJBU0lDIDwvaDI+XHJcbiAgICAgICAgPHA+MTkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+MTAwIFRyYWRlcy9Nb250aDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5SZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygwKX0+QnV5IE5vdzwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7YWRkZWRDYXJkcy5pbmNsdWRlcygxKSA/IFwiYWRkZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZTAucHhmdWVsLmNvbS93YWxscGFwZXJzLzE1OS85OTcvZGVza3RvcC13YWxscGFwZXItZm9yZXgtdHJhZGluZy5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRib2R5XCI+XHJcbiAgICAgICAgPGgyPlNUQU5EQVJEPC9oMj5cclxuICAgICAgICA8cD40OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+RW5oYW5jZWQgSm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkFkdmFuY2VkIFJlcG9ydHM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDApfT5CdXkgTm93PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHthZGRlZENhcmRzLmluY2x1ZGVzKDEpID8gXCJhZGRlZFwiIDogXCJcIn1gfT5cclxuICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcudHJhZGluZy1lZHVjYXRpb24uY29tL2FydGljbGUvMTY3NzkzNDQ1OTcxMzNjYzVlNDExNjc3OTM0NDU5X3Jlc2l6ZWQuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5QUkVNSVVNPC9oMj5cclxuICAgICAgICA8cD45OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U3RvY2tzLCBPcHRpb25zLCBGdXR1cmVzLCBGb3JleDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJpc2sgQW5hbHlzaXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Db21taXNzaW9uL0ZlZXM8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24+QnV5IE5vdzwvYnV0dG9uPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVjMWY0ZjU1MzE1MGQ4YWRiZTVkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYWRkZWRDYXJkcyIsInNldEFkZGVkQ2FyZHMiLCJoYW5kbGVDbGljayIsImluZGV4IiwibmV3QWRkZWRDYXJkcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImluY2x1ZGVzIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImlkIiwiY2xhc3NOYW1lIiwiY29uY2F0Iiwic3JjIiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=