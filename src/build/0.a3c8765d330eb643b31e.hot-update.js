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
Object(function webpackMissingModule() { var e = new Error("Cannot find module './LoginForm.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "login-form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
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
  }, "Login"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ea1e465b4cbfc41c4afe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hM2M4NzY1ZDMzMGViNjQzYjMxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZjtBQUV6QixTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsS0FBSyxFQUFLO0lBQ3RDTixXQUFXLENBQUNNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDakMsQ0FBQztFQUVELElBQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUlILEtBQUssRUFBSztJQUN0Q0YsV0FBVyxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2pDLENBQUM7RUFFRCxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUosS0FBSyxFQUFLO0lBQzlCQSxLQUFLLENBQUNLLGNBQWMsRUFBRTtJQUN0QkMsT0FBTyxDQUFDQyxHQUFHLGNBQUFDLE1BQUEsQ0FBY2YsUUFBUSxFQUFHO0lBQ3BDYSxPQUFPLENBQUNDLEdBQUcsY0FBQUMsTUFBQSxDQUFjWCxRQUFRLEVBQUc7RUFDdEMsQ0FBQztFQUVELG9CQUNFViwwREFBQTtJQUFNdUIsU0FBUyxFQUFDLFlBQVk7SUFBQ0MsUUFBUSxFQUFFUDtFQUFhLGdCQUNsRGpCLDBEQUFBO0lBQU95QixPQUFPLEVBQUM7RUFBVSxHQUFDLFlBQVUsQ0FBUSxlQUM1Q3pCLDBEQUFBO0lBQU8wQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxFQUFFLEVBQUMsVUFBVTtJQUFDWixLQUFLLEVBQUVULFFBQVM7SUFBQ3NCLFFBQVEsRUFBRWhCO0VBQXFCLEVBQUcsZUFFcEZaLDBEQUFBO0lBQU95QixPQUFPLEVBQUM7RUFBVSxHQUFDLFlBQVUsQ0FBUSxlQUM1Q3pCLDBEQUFBO0lBQU8wQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxFQUFFLEVBQUMsVUFBVTtJQUFDWixLQUFLLEVBQUVMLFFBQVM7SUFBQ2tCLFFBQVEsRUFBRVo7RUFBcUIsRUFBRyxlQUV4RmhCLDBEQUFBO0lBQVEwQixJQUFJLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBUyxDQUMvQjtBQUVYO0FBRUEsaUVBQWV4QixTQUFTOzs7Ozs7OztVQ2xDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vTG9naW5Gb3JtLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXJOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRVc2VyTmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKGBVc2VyTmFtZTogJHt1c2VyTmFtZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKGBQYXNzd29yZDogJHtwYXNzd29yZH1gKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU6IDwvbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlck5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVVc2VyTmFtZUNoYW5nZX0gLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDogPC9sYWJlbD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZENoYW5nZX0gLz5cclxuXHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlYTFlNDY1YjRjYmZjNDFjNGFmZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlck5hbWUiLCJzZXRVc2VyTmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVVzZXJOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVBhc3N3b3JkQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==