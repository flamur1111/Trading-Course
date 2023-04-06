"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 46:
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

function LoginForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    // add code to authenticate user
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Username:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: username,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Login"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46);









var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/courses",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoginForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f2db74da300a117f7cec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZmVhYzNjNjljMzE1MGY1MGM5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVqQyxTQUFTQyxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztJQUM5QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFDdEI7RUFDRixDQUFDOztFQUVELG9CQUNFQyxLQUFBLENBQUFDLGFBQUE7SUFBTUMsUUFBUSxFQUFFTDtFQUFhLGdCQUMzQkcsS0FBQSxDQUFBQyxhQUFBLGdCQUFPLFdBRUwsZUFBQUQsS0FBQSxDQUFBQyxhQUFBO0lBQU9FLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRWIsUUFBUztJQUFDYyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsS0FBSztNQUFBLE9BQUtOLFdBQVcsQ0FBQ00sS0FBSyxDQUFDUSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxDQUN0RixlQUNSSixLQUFBLENBQUFDLGFBQUEsZ0JBQU8sV0FFTCxlQUFBRCxLQUFBLENBQUFDLGFBQUE7SUFBT0UsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFVCxRQUFTO0lBQUNVLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxLQUFLO01BQUEsT0FBS0YsV0FBVyxDQUFDRSxLQUFLLENBQUNRLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLENBQ3RGLGVBQ1JKLEtBQUEsQ0FBQUMsYUFBQTtJQUFRRSxJQUFJLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBUyxDQUMvQjtBQUVYO0FBRUEsaUVBQWVoQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ047QUFRTDtBQUNFO0FBQ29CO0FBQ1o7QUFDRTtBQUNSO0FBQ087QUFLdkMsSUFBTWlDLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFDSXBCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDUyx3REFBVSxxQkFDWFQsMERBQUEsQ0FBQ2dCLHlEQUFnQixPQUFHLGVBQ3BCaEIsMERBQUEsQ0FBQ1csb0RBQU0scUJBQ1BYLDBEQUFBLENBQUNVLG1EQUFLO0lBQUNZLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRXZCLDBEQUFBLENBQUNtQixnREFBTztFQUFJLEVBQUcsZUFDeENuQiwwREFBQSxDQUFDVSxtREFBSztJQUFDWSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUV2QiwwREFBQSxDQUFDa0Isb0RBQVc7RUFBRyxFQUFHLENBQ3pDLENBQ0ksZUFDYmxCLDBEQUFBLENBQUNpQixnREFBYSxPQUFFLGVBQ2hCakIsMERBQUEsQ0FBQ2UsK0NBQU0sT0FBRSxlQUNUZiwwREFBQSxDQUFDYixxREFBUyxPQUFFLENBR2I7QUFFWCxDQUFDO0FBQ0RxQiw2Q0FBZSxlQUVmUiwwREFBQSxDQUFDb0IsR0FBRyxPQUFFLEVBRU5LLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQzFDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0xvZ2luRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBhZGQgY29kZSB0byBhdXRoZW50aWNhdGUgdXNlclxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgVXNlcm5hbWU6XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgUGFzc3dvcmQ6XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyTmF2aWdhdGlvbiBmcm9tIFwiLi9IZWFkZXJOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBHb1RvVG9wQnV0dG9uIGZyb20gXCIuL0dvVG9Ub3BcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL0NvbnRhY3RGb3JtXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiLi9Mb2dpbkZvcm0uanNcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxXcmFwcGVyIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb3Vyc2VzXCIgZWxlbWVudD17PENvbnRhY3RGb3JtLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgICA8L0hhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxHb1RvVG9wQnV0dG9uLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgIDxMb2dpbkZvcm0vPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cclxuPEFwcC8+LFxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImYyZGI3NGRhMzAwYTExN2Y3Y2VjXCIpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJvblN1Ym1pdCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkZvb3RlciIsIkhlYWRlck5hdmlnYXRpb24iLCJHb1RvVG9wQnV0dG9uIiwiQ29udGFjdEZvcm0iLCJXcmFwcGVyIiwiQXBwIiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9