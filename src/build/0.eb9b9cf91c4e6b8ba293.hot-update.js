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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a70ff8b00056fe7724e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRcUIsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNYixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFNBQU8sQ0FBUyxDQUNuRCxDQUNGLGVBRU5SLDBEQUFBO0lBQUssU0FBTTtFQUFNLGdCQUNqQkEsMERBQUE7SUFBS21CLEdBQUcsRUFBQyxzRkFBc0Y7SUFBQ0MsR0FBRyxFQUFDO0VBQUUsRUFBTyxlQUMzR3BCLDBEQUFBO0lBQUssU0FBTTtFQUFVLGdCQUNuQkEsMERBQUEsYUFBSSxTQUFPLENBQUssZUFDaEJBLDBEQUFBLFlBQUcsU0FBTyxlQUFBQSwwREFBQSxZQUFLLGNBQVUsQ0FBSSxlQUM3QkEsMERBQUEsMEJBQ0VBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGtCQUFnQixDQUFJLENBQUssZUFDbkRBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGlDQUErQixDQUFJLENBQUssZUFDbEVBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGVBQWEsQ0FBSSxDQUFLLGVBQ2hEQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxpQkFBZSxDQUFJLENBQUssQ0FDL0MsZUFDTEEsMERBQUEsaUJBQVEsU0FBTyxDQUFTLENBRXBCLENBQ0YsQ0FDRixDQUNGLENBQ0g7QUFFSDtBQUVBLGlFQUFlQyxJQUFJOzs7Ozs7OztVQ3BFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkICgpIHtcclxuICBjb25zdCBbYWRkZWRDYXJkcywgc2V0QWRkZWRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdBZGRlZENhcmRzID0gWy4uLmFkZGVkQ2FyZHNdO1xyXG4gICAgaWYgKCFuZXdBZGRlZENhcmRzLmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICBuZXdBZGRlZENhcmRzLnB1c2goaW5kZXgpO1xyXG4gICAgICBzZXRBZGRlZENhcmRzKG5ld0FkZGVkQ2FyZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cInByaWNlc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9e2BjYXJkICR7YWRkZWRDYXJkcy5pbmNsdWRlcygwKSA/IFwiYWRkZWRcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vd3d3Lmlyb25meC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjIvMDIvQmVzdC1Gb3JleC1UcmFkaW4tQnJva2VyLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICA8aDI+QkFTSUMgPC9oMj5cclxuICAgICAgICA8cD4xOS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj4xMDAgVHJhZGVzL01vbnRoPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+Sm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJlcG9ydHM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5TaGFyaW5nPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKDApfT5CdXkgTm93PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmQgJHthZGRlZENhcmRzLmluY2x1ZGVzKDEpID8gXCJhZGRlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9lMC5weGZ1ZWwuY29tL3dhbGxwYXBlcnMvMTU5Lzk5Ny9kZXNrdG9wLXdhbGxwYXBlci1mb3JleC10cmFkaW5nLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICA8aDI+U1RBTkRBUkQ8L2gyPlxyXG4gICAgICAgIDxwPjQ5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlVubGltaXRlZCBUcmFkZXM8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5FbmhhbmNlZCBKb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+QWR2YW5jZWQgUmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlNoYXJpbmc8L2k+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMCl9PkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XHJcbiAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnRyYWRpbmctZWR1Y2F0aW9uLmNvbS9hcnRpY2xlLzE2Nzc5MzQ0NTk3MTMzY2M1ZTQxMTY3NzkzNDQ1OV9yZXNpemVkLmpwZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICA8aDI+UFJFTUlVTTwvaDI+XHJcbiAgICAgICAgPHA+OTkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+VW5saW1pdGVkIFRyYWRlczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlN0b2NrcywgT3B0aW9ucywgRnV0dXJlcywgRm9yZXg8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5SaXNrIEFuYWx5c2lzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+Q29tbWlzc2lvbi9GZWVzPC9pPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8YnV0dG9uPkJ1eSBOb3c8L2J1dHRvbj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyYTcwZmY4YjAwMDU2ZmU3NzI0ZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJfdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFkZGVkQ2FyZHMiLCJzZXRBZGRlZENhcmRzIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsIm5ld0FkZGVkQ2FyZHMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJpbmNsdWRlcyIsInB1c2giLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImNvbmNhdCIsInNyYyIsImFsdCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9