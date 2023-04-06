"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
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
    userName = _useState2[0],
    setUserName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handleUserNameChange = function handleUserNameChange(event) {
    setUserName(event.target.value);
  };
  var handlePasswordChange = function handlePasswordChange(event) {
    setPassword(event.target.value);
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    console.log("UserName: ".concat(userName));
    console.log("Password: ".concat(password));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "username"
  }, "Username: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "username",
    value: userName,
    onChange: handleUserNameChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "password"
  }, "Password: "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    id: "password",
    value: password,
    onChange: handlePasswordChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Login")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1c182a807b09d8ced66c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NDVlNTdlNTdjNzdiMWYxZDk4OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsS0FBSyxFQUFLO0lBQ3RDTixXQUFXLENBQUNNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakMsQ0FBQztFQUVELElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlILEtBQUssRUFBSztJQUN0Q0YsV0FBVyxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUosS0FBSyxFQUFLO0lBQzlCQSxLQUFLLENBQUNLLGNBQWMsRUFBRTtJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLGNBQUFDLE1BQUEsQ0FBY2YsUUFBUSxFQUFHO0lBQ3BDYSxPQUFPLENBQUNDLEdBQUcsY0FBQUMsTUFBQSxDQUFjWCxRQUFRLEVBQUc7RUFDdEMsQ0FBQztFQUVELG9CQUNFViwwREFBQSxDQUFBQSx1REFBQSxxQkFDQUEsMERBQUE7SUFBTXdCLFNBQVMsRUFBQyxZQUFZO0lBQUNDLFFBQVEsRUFBRVI7RUFBYSxnQkFDbERqQiwwREFBQSxhQUFJLE9BQUssQ0FBSyxlQUNkQSwwREFBQTtJQUFPMEIsT0FBTyxFQUFDO0VBQVUsR0FBQyxZQUFVLENBQVEsZUFDNUMxQiwwREFBQTtJQUFPMkIsSUFBSSxFQUFDLE1BQU07SUFBQ0MsRUFBRSxFQUFDLFVBQVU7SUFBQ2IsS0FBSyxFQUFFVCxRQUFTO0lBQUN1QixRQUFRLEVBQUVqQjtFQUFxQixFQUFHLGVBRXBGWiwwREFBQTtJQUFPMEIsT0FBTyxFQUFDO0VBQVUsR0FBQyxZQUFVLENBQVEsZUFDNUMxQiwwREFBQTtJQUFPMkIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsRUFBRSxFQUFDLFVBQVU7SUFBQ2IsS0FBSyxFQUFFTCxRQUFTO0lBQUNtQixRQUFRLEVBQUViO0VBQXFCLEVBQUcsZUFFeEZoQiwwREFBQTtJQUFRMkIsSUFBSSxFQUFDO0VBQVEsR0FBQyxPQUFLLENBQVMsQ0FDL0IsQ0FDSjtBQUVQO0FBRUEsaUVBQWV6QixTQUFTOzs7Ozs7OztVQ3BDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VyTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0VXNlck5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYXNzd29yZENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhgVXNlck5hbWU6ICR7dXNlck5hbWV9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhgUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJsb2dpbi1mb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ1c2VybmFtZVwiIHZhbHVlPXt1c2VyTmFtZX0gb25DaGFuZ2U9e2hhbmRsZVVzZXJOYW1lQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOiA8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZVBhc3N3b3JkQ2hhbmdlfSAvPlxyXG5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWMxODJhODA3YjA5ZDhjZWQ2NmNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVVc2VyTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVQYXNzd29yZENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==