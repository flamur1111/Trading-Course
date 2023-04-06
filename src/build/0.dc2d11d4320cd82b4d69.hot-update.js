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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
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
    "class": "card ".concat(addedCards.includes(0) ? "added" : "")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "https://www.ironfx.com/wp-content/uploads/2022/02/Best-Forex-Tradin-Broker.jpg",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "cardbody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "BASIC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "19.99$ ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
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
    "class": "card ".concat(addedCards.includes(1) ? "added" : "")
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
      return handleClick(1);
    }
  }, "Buy Now"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "card ".concat(addedCards.includes(2) ? "added" : "")
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
    onClick: function onClick() {
      return handleClick(2);
    }
  }, "Buy Now"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bc6a4287f4aedcdbedd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNWixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFNBQU8sQ0FBUyxDQUNuRCxDQUNGLGVBRU5SLDBEQUFBO0lBQUssaUJBQUFpQixNQUFBLENBQWVYLFVBQVUsQ0FBQ00sUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFO0VBQUcsZ0JBQzFEWiwwREFBQTtJQUFLa0IsR0FBRyxFQUFDLHNGQUFzRjtJQUFDQyxHQUFHLEVBQUM7RUFBRSxFQUFHLGVBQ3pHbkIsMERBQUE7SUFBSyxTQUFNO0VBQVUsZ0JBQ25CQSwwREFBQSxhQUFJLFNBQU8sQ0FBSyxlQUNoQkEsMERBQUEsWUFBRyxTQUFPLGVBQUFBLDBEQUFBLFlBQUssY0FBVSxDQUFJLGVBQzdCQSwwREFBQSwwQkFDRUEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsa0JBQWdCLENBQUksQ0FBSyxlQUNuREEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsaUNBQStCLENBQUksQ0FBSyxlQUNsRUEsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUcsU0FBTTtFQUFZLEdBQUMsZUFBYSxDQUFJLENBQUssZUFDaERBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHLFNBQU07RUFBWSxHQUFDLGlCQUFlLENBQUksQ0FBSyxDQUMvQyxlQUNMQSwwREFBQTtJQUFRb0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNWixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFNBQU8sQ0FBUyxDQUNuRCxDQUNGLENBQ0YsQ0FDRixDQUNMO0FBRVA7QUFFQSxpRUFBZU4sSUFBSTs7Ozs7Ozs7VUNwRW5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9DYXJkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBDYXJkICgpIHtcclxuICBjb25zdCBbYWRkZWRDYXJkcywgc2V0QWRkZWRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdBZGRlZENhcmRzID0gWy4uLmFkZGVkQ2FyZHNdO1xyXG4gICAgaWYgKCFuZXdBZGRlZENhcmRzLmluY2x1ZGVzKGluZGV4KSkge1xyXG4gICAgICBuZXdBZGRlZENhcmRzLnB1c2goaW5kZXgpO1xyXG4gICAgICBzZXRBZGRlZENhcmRzKG5ld0FkZGVkQ2FyZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJwcmljZXNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz17YGNhcmQgJHthZGRlZENhcmRzLmluY2x1ZGVzKDApID8gXCJhZGRlZFwiIDogXCJcIn1gfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5pcm9uZnguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL0Jlc3QtRm9yZXgtVHJhZGluLUJyb2tlci5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDI+QkFTSUM8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPjE5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPjEwMCBUcmFkZXMvTW9udGg8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Kb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+UmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlNoYXJpbmc8L2k+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMCl9PkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPXtgY2FyZCAke2FkZGVkQ2FyZHMuaW5jbHVkZXMoMSkgPyBcImFkZGVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZTAucHhmdWVsLmNvbS93YWxscGFwZXJzLzE1OS85OTcvZGVza3RvcC13YWxscGFwZXItZm9yZXgtdHJhZGluZy5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICAgICAgICA8aDI+U1RBTkRBUkQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPjQ5Ljk5JCA8YnIvPiBQZXIgTW9udGg8L3A+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlVubGltaXRlZCBUcmFkZXM8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5FbmhhbmNlZCBKb3VybmFsPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+QWR2YW5jZWQgUmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlNoYXJpbmc8L2k+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMSl9PkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPXtgY2FyZCAke2FkZGVkQ2FyZHMuaW5jbHVkZXMoMikgPyBcImFkZGVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnRyYWRpbmctZWR1Y2F0aW9uLmNvbS9hcnRpY2xlLzE2Nzc5MzQ0NTk3MTMzY2M1ZTQxMTY3NzkzNDQ1OV9yZXNpemVkLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxoMj5QUkVNSVVNPC9oMj5cclxuICAgICAgICAgICAgICA8cD45OS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5VbmxpbWl0ZWQgVHJhZGVzPC9pPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U3RvY2tzLCBPcHRpb25zLCBGdXR1cmVzLCBGb3JleDwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPlJpc2sgQW5hbHlzaXM8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5Db21taXNzaW9uL0ZlZXM8L2k+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMil9PkJ1eSBOb3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWJjNmE0Mjg3ZjRhZWRjZGJlZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZGRlZENhcmRzIiwic2V0QWRkZWRDYXJkcyIsImhhbmRsZUNsaWNrIiwiaW5kZXgiLCJuZXdBZGRlZENhcmRzIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiaW5jbHVkZXMiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiaWQiLCJjb25jYXQiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==