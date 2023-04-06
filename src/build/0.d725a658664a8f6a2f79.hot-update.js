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
  }, "Sharing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Buy Now"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6bab7f9fb6d9f67c9735")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kNzI1YTY1ODY2NGE4ZjZhMmY3OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxJQUFJQSxDQUFBLEVBQUk7RUFFYixJQUFBQyxTQUFBLEdBQWtDRiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUExQ0csU0FBUyxHQUFBRixVQUFBO0lBQUVHLFlBQVksR0FBQUgsVUFBQTtFQUU5QixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCRCxZQUFZLENBQUMsSUFBSSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBS1csU0FBUyxFQUFDLFdBQVc7SUFBQ0MsRUFBRSxFQUFDO0VBQVEsZ0JBQ2xDWiwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBUyxnQkFDcEJYLDBEQUFBO0lBQUtXLFNBQVMsRUFBQztFQUFNLGdCQUNqQlgsMERBQUE7SUFBS2EsR0FBRyxFQUFDLGdGQUFnRjtJQUFDQyxHQUFHLEVBQUM7RUFBRSxFQUFPLGVBQ3ZHZCwwREFBQTtJQUFLVyxTQUFTLEVBQUM7RUFBVSxnQkFDckJYLDBEQUFBLGFBQUksUUFBTSxDQUFLLGVBQ2ZBLDBEQUFBLFlBQUcsU0FBTyxlQUFBQSwwREFBQSxZQUFLLGNBQVUsQ0FBSSxlQUM3QkEsMERBQUEsMEJBQ0lBLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHVyxTQUFTLEVBQUM7RUFBWSxHQUFDLGtCQUFnQixDQUFJLENBQUssZUFDdkRYLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHVyxTQUFTLEVBQUM7RUFBWSxHQUFDLFNBQU8sQ0FBSSxDQUFLLGVBQzlDWCwwREFBQSwwQkFBSUEsMERBQUE7SUFBR1csU0FBUyxFQUFDO0VBQVksR0FBQyxTQUFPLENBQUksQ0FBSyxlQUM5Q1gsMERBQUEsMEJBQUlBLDBEQUFBO0lBQUdXLFNBQVMsRUFBQztFQUFZLEdBQUMsU0FBTyxDQUFJLENBQUssQ0FDN0MsZUFDTFgsMERBQUE7SUFBUWUsUUFBUSxFQUFFVCxTQUFVO0lBQUNVLE9BQU8sRUFBRVI7RUFBWSxHQUFFRixTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBVSxDQUU3RixDQUNKLGVBQ05OLDBEQUFBO0lBQUssU0FBTTtFQUFNLGdCQUNqQ0EsMERBQUE7SUFBS2EsR0FBRyxFQUFDLDhFQUE4RTtJQUFDQyxHQUFHLEVBQUM7RUFBRSxFQUFPLGVBQ25HZCwwREFBQTtJQUFLLFNBQU07RUFBVSxnQkFDbkJBLDBEQUFBLGFBQUksVUFBUSxDQUFLLGVBQ2pCQSwwREFBQSxZQUFHLFNBQU8sZUFBQUEsMERBQUEsWUFBSyxjQUFVLENBQUksZUFDN0JBLDBEQUFBLDBCQUNFQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxrQkFBZ0IsQ0FBSSxDQUFLLGVBQ25EQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxrQkFBZ0IsQ0FBSSxDQUFLLGVBQ25EQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxrQkFBZ0IsQ0FBSSxDQUFLLGVBQ25EQSwwREFBQSwwQkFBSUEsMERBQUE7SUFBRyxTQUFNO0VBQVksR0FBQyxTQUFPLENBQUksQ0FBSyxDQUN2QyxlQUNMQSwwREFBQSxpQkFBUSxTQUFPLENBQVMsQ0FDcEIsQ0FDRixDQUdZLENBQ0osQ0FDUDtBQUVYO0FBRUEsaUVBQWVFLElBQUk7Ozs7Ozs7O1VDcERuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQ2FyZCAoKSB7XHJcblxyXG4gICAgY29uc3QgW2lzT3JkZXJlZCwgc2V0SXNPcmRlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNPcmRlcmVkKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxocj48L2hyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGlkPVwicHJpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3d3dy5pcm9uZnguY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIyLzAyL0Jlc3QtRm9yZXgtVHJhZGluLUJyb2tlci5qcGdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkJBU0lDIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4xOS45OSQgPGJyLz4gUGVyIE1vbnRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+MTAwIFRyYWRlcy9Nb250aDwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+Sm91cm5hbDwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+UmVwb3J0czwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48aSBjbGFzc05hbWU9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2lzT3JkZXJlZH0gb25DbGljaz17aGFuZGxlQ2xpY2t9Pntpc09yZGVyZWQgPyAnT3JkZXJlZCcgOiAnQnV5IE5vdyd9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgPGltZyBzcmM9XCJodHRwczovL2UwLnB4ZnVlbC5jb20vd2FsbHBhcGVycy8xNTkvOTk3L2Rlc2t0b3Atd2FsbHBhcGVyLWZvcmV4LXRyYWRpbmcuanBnXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkYm9keVwiPlxyXG4gICAgICAgIDxoMj5TVEFOREFSRDwvaDI+XHJcbiAgICAgICAgPHA+NDkuOTkkIDxici8+IFBlciBNb250aDwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+VW5saW1pdGVkIFRyYWRlczwvaT48L2xpPlxyXG4gICAgICAgICAgPGxpPjxpIGNsYXNzPVwiaWNvbi1jaGVja1wiPkVuaGFuY2VkIEpvdXJuYWw8L2k+PC9saT5cclxuICAgICAgICAgIDxsaT48aSBjbGFzcz1cImljb24tY2hlY2tcIj5BZHZhbmNlZCBSZXBvcnRzPC9pPjwvbGk+XHJcbiAgICAgICAgICA8bGk+PGkgY2xhc3M9XCJpY29uLWNoZWNrXCI+U2hhcmluZzwvaT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGJ1dHRvbj5CdXkgTm93PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiYWI3ZjlmYjZkOWY2N2M5NzM1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiaXNPcmRlcmVkIiwic2V0SXNPcmRlcmVkIiwiaGFuZGxlQ2xpY2siLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsImFsdCIsImRpc2FibGVkIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=