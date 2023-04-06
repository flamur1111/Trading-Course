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
  }, isOrdered ? 'Ordered' : 'Buy Now'))), "// Rest of the code for the other two cards")));
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
/******/ 	__webpack_require__.h = () => ("d725a658664a8f6a2f79")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZTNiZmRiOTI2ZGIxYjJmMWU3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxJQUFJQSxDQUFBLEVBQUk7RUFFYixJQUFBQyxTQUFBLEdBQWtDRiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCRCxZQUFZLENBQUMsSUFBSSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBS1csU0FBUyxFQUFDLFdBQVc7SUFBQ0MsRUFBRSxFQUFDO0VBQVEsZ0JBQ2xDWiwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBUyxnQkFDcEJYLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFNLGdCQUNqQlgsMERBQUE7SUFBS2EsR0FBRyxFQUFDLGdGQUFnRjtJQUFDQyxHQUFHLEVBQUM7RUFBRSxFQUFPLGVBQ3ZHZCwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBVSxnQkFDckJYLDBEQUFBLGFBQUksUUFBTSxDQUFLLGVBQ2ZBLDBEQUFBLFlBQUcsU0FBTyxlQUFBQSwwREFBQSxZQUFLLGNBQVUsQ0FBSSxlQUM3QkEsMERBQUEsMEJBQ0lBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHVyxTQUFTLEVBQUM7RUFBWSxHQUFDLGtCQUFnQixDQUFJLENBQUssZUFDdkRYLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHVyxTQUFTLEVBQUM7RUFBWSxHQUFDLFNBQU8sQ0FBSSxDQUFLLGVBQzlDWCwwREFBQSwwQkFBSUEsMERBQUE7SUFBR1csU0FBUyxFQUFDO0VBQVksR0FBQyxTQUFPLENBQUksQ0FBSyxlQUM5Q1gsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUdXLFNBQVMsRUFBQztFQUFZLEdBQUMsU0FBTyxDQUFJLENBQUssQ0FDN0MsZUFDTFgsMERBQUE7SUFBUWUsUUFBUSxFQUFFVCxTQUFVO0lBQUNVLE9BQU8sRUFBRVI7RUFBWSxHQUFFRixTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBVSxDQUU3RixDQUNKLCtDQUdWLENBQU0sQ0FDSixDQUNQO0FBRVg7QUFFQSxpRUFBZUosSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDb0I7QUFDTjtBQUNQO0FBQ0k7QUFDb0I7QUFDZDtBQUNKO0FBQ2hDLElBQU1xQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQ0l2QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ29CLHlEQUFnQixPQUFHLGVBQ3BCcEIsMERBQUEsQ0FBQ3NCLGdEQUFPLE9BQUUsZUFDVnRCLDBEQUFBLENBQUNxQixrREFBUyxPQUFFLGVBQ1pyQiwwREFBQSxDQUFDRSw2Q0FBSSxPQUFFLGVBQ1BGLDBEQUFBLENBQUNtQiwrQ0FBTSxPQUFFLENBRVY7QUFFWCxDQUFDO0FBQ0RELDZDQUFlLGVBQUNsQiwwREFBQSxDQUFDdUIsR0FBRyxPQUFFLEVBQUVFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ25CdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIENhcmQgKCkge1xyXG5cclxuICAgIGNvbnN0IFtpc09yZGVyZWQsIHNldElzT3JkZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzT3JkZXJlZCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aHI+PC9ocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInByaWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaXJvbmZ4LmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8wMi9CZXN0LUZvcmV4LVRyYWRpbi1Ccm9rZXIuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5CQVNJQyA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MTkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbi1jaGVja1wiPjEwMCBUcmFkZXMvTW9udGg8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbi1jaGVja1wiPkpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbi1jaGVja1wiPlJlcG9ydHM8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGkgY2xhc3NOYW1lPVwiaWNvbi1jaGVja1wiPlNoYXJpbmc8L2k+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXtpc09yZGVyZWR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57aXNPcmRlcmVkID8gJ09yZGVyZWQnIDogJ0J1eSBOb3cnfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgdGhlIGNvZGUgZm9yIHRoZSBvdGhlciB0d28gY2FyZHNcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IExlYXJuTW9yZSBmcm9tIFwiLi9MZWFybk1vcmVcIjtcclxuaW1wb3J0IE1haW5Cb3ggZnJvbSBcIi4vTWFpbkJveFwiO1xyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxNYWluQm94Lz5cclxuICAgICAgICAgICAgPExlYXJuTW9yZS8+XHJcbiAgICAgICAgICAgIDxDYXJkLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNzI1YTY1ODY2NGE4ZjZhMmY3OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzT3JkZXJlZCIsInNldElzT3JkZXJlZCIsImhhbmRsZUNsaWNrIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJzcmMiLCJhbHQiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIkZvb3RlciIsIkhlYWRlck5hdmlnYXRpb24iLCJMZWFybk1vcmUiLCJNYWluQm94IiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=