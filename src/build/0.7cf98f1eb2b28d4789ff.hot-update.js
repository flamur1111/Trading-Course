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
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission behavior
    if (username === 'Flamur' && password === 'Flamur') {
      console.log('Login successful!'); // or redirect user to authenticated page
      window.location.href = '#/courses'; // redirect to dashboard page
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
    type: "username",
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
/******/ 	__webpack_require__.h = () => ("db9e9d40b64e040306d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43Y2Y5OGYxZWIyYjI4ZDQ3ODlmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLElBQUlSLFFBQVEsS0FBSyxRQUFRLElBQUlJLFFBQVEsS0FBSyxRQUFRLEVBQUU7TUFDbERLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztNQUNsQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN0QyxDQUFDLE1BQU07TUFDTEMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDO0lBQzVEO0VBQ0YsQ0FBQztFQUVELG9CQUNFcEIsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU1zQixTQUFTLEVBQUMsV0FBVztJQUFDQyxRQUFRLEVBQUVYO0VBQWEsZ0JBQ2pEWiwwREFBQSwwQkFBSUEsMERBQUE7SUFBR3NCLFNBQVMsRUFBQztFQUFXLEVBQUssVUFBTSxDQUFLLGVBQzVDdEIsMERBQUE7SUFBT3dCLElBQUksRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRXBCLFFBQVM7SUFBQ3FCLFFBQVEsRUFBRSxTQUFBQSxTQUFDZCxDQUFDO01BQUEsT0FBS04sV0FBVyxDQUFDTSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLGVBQy9HMUIsMERBQUE7SUFBT3dCLElBQUksRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRWhCLFFBQVM7SUFBQ2lCLFFBQVEsRUFBRSxTQUFBQSxTQUFDZCxDQUFDO01BQUEsT0FBS0YsV0FBVyxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLGVBQy9HMUIsMERBQUEsWUFBUyxlQUNUQSwwREFBQTtJQUFPd0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0UsS0FBSyxFQUFDO0VBQU8sRUFBRyxDQUNoQyxDQUNIO0FBRVY7QUFFQSxpRUFBZXhCLFNBQVM7Ozs7Ozs7O1VDN0J4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcclxuICAgIGlmICh1c2VybmFtZSA9PT0gJ0ZsYW11cicgJiYgcGFzc3dvcmQgPT09ICdGbGFtdXInKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsIScpOyAvLyBvciByZWRpcmVjdCB1c2VyIHRvIGF1dGhlbnRpY2F0ZWQgcGFnZVxyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjL2NvdXJzZXMnOyAvLyByZWRpcmVjdCB0byBkYXNoYm9hcmQgcGFnZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGluY29ycmVjdCEgUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJpY29uLXVzZXJcIj48L2k+IExvZ2luPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRiOWU5ZDQwYjY0ZTA0MDMwNmQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=