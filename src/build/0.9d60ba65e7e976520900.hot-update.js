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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
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
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useHistory)(); // get the history object from React Router
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission behavior
    if (username === 'Flamur' && password === 'Flamur') {
      console.log('Login successful!'); // or redirect user to authenticated page
      history.push('/home'); // redirect to the home page
    } else {
      alert('Username or password incorrect! Please try again.');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "loginpage",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon-user"
  }), " Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Login"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d13f45cb5c1ddba3a47d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZDYwYmE2NWU3ZTk3NjUyMDkwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDTTtBQUM5QyxTQUFTRyxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFDNUIsSUFBTUcsT0FBTyxHQUFHWCw0REFBVSxFQUFFLENBQUMsQ0FBQztFQUM5QixJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQzFCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEIsSUFBSVQsUUFBUSxLQUFLLFFBQVEsSUFBSUksUUFBUSxLQUFLLFFBQVEsRUFBRTtNQUNsRE0sT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO01BQ2xDTCxPQUFPLENBQUNNLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsTUFBTTtNQUNMQyxLQUFLLENBQUMsbURBQW1ELENBQUM7SUFDNUQ7RUFDRixDQUFDO0VBQ0Qsb0JBQ0VwQiwwREFBQSwyQkFDRUEsMERBQUE7SUFBTXNCLFNBQVMsRUFBQyxXQUFXO0lBQUNDLFFBQVEsRUFBRVQ7RUFBYSxnQkFDakRkLDBEQUFBLDBCQUFJQSwwREFBQTtJQUFHc0IsU0FBUyxFQUFDO0VBQVcsRUFBSyxVQUFNLENBQUssZUFDNUN0QiwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLE1BQU07SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFbkIsUUFBUztJQUFDb0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNaLENBQUM7TUFBQSxPQUFLUCxXQUFXLENBQUNPLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsZUFDM0cxQiwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFZixRQUFTO0lBQUNnQixRQUFRLEVBQUUsU0FBQUEsU0FBQ1osQ0FBQztNQUFBLE9BQUtILFdBQVcsQ0FBQ0csQ0FBQyxDQUFDYSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxlQUMvRzFCLDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBT3dCLElBQUksRUFBQyxRQUFRO0lBQUNFLEtBQUssRUFBQztFQUFPLEVBQUcsQ0FDaEMsQ0FDSDtBQUVWO0FBQ0EsaUVBQWV2QixTQUFTOzs7Ozs7OztVQzNCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmZ1bmN0aW9uIExvZ2luRm9ybSgpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpOyAvLyBnZXQgdGhlIGhpc3Rvcnkgb2JqZWN0IGZyb20gUmVhY3QgUm91dGVyXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxyXG4gICAgaWYgKHVzZXJuYW1lID09PSAnRmxhbXVyJyAmJiBwYXNzd29yZCA9PT0gJ0ZsYW11cicpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWwhJyk7IC8vIG9yIHJlZGlyZWN0IHVzZXIgdG8gYXV0aGVudGljYXRlZCBwYWdlXHJcbiAgICAgIGhpc3RvcnkucHVzaCgnL2hvbWUnKTsgLy8gcmVkaXJlY3QgdG8gdGhlIGhvbWUgcGFnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGluY29ycmVjdCEgUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgyPjxpIGNsYXNzTmFtZT1cImljb24tdXNlclwiPjwvaT4gTG9naW48L2gyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxM2Y0NWNiNWMxZGRiYTNhNDdkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VIaXN0b3J5IiwiTG9naW5Gb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhpc3RvcnkiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=