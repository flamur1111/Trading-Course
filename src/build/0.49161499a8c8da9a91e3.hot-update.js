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
  var user = data.find(function (user) {
    return user.username === username && user.password === password;
  });
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission behavior
    if (username1 === 'Flamur' && password1 === 'Flamur') {
      var userToSave = {
        username1: username1,
        password1: password1
      };
      localStorage.setItem('user', JSON.stringify(userToSave));
      console.log('Login successful!');
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
/******/ 	__webpack_require__.h = () => ("3f1641f209d396aec27b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40OTE2MTQ5OWE4YzhkYTlhOTFlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsSUFBSSxHQUFHQyxJQUFJLENBQUNDLElBQUksQ0FBQyxVQUFBRixJQUFJO0lBQUEsT0FBSUEsSUFBSSxDQUFDTixRQUFRLEtBQUtBLFFBQVEsSUFBSU0sSUFBSSxDQUFDRixRQUFRLEtBQUtBLFFBQVE7RUFBQSxFQUFDO0VBRXhGLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxDQUFDLEVBQUs7SUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUNwQixJQUFJQyxTQUFTLEtBQUssUUFBUSxJQUFJQyxTQUFTLEtBQUssUUFBUSxFQUFFO01BQ3BELElBQU1DLFVBQVUsR0FBRztRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUMsU0FBUyxFQUFUQTtNQUFVLENBQUM7TUFDM0NFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFVBQVUsQ0FBQyxDQUFDO01BQ3hESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDLE1BQU07TUFDTEMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDO0lBQzVEO0VBQ0YsQ0FBQztFQUVELG9CQUNFM0IsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU02QixTQUFTLEVBQUMsV0FBVztJQUFDQyxRQUFRLEVBQUVmO0VBQWEsZ0JBQ2pEZiwwREFBQSwwQkFBSUEsMERBQUE7SUFBRzZCLFNBQVMsRUFBQztFQUFXLEVBQUssVUFBTSxDQUFLLGVBQzVDN0IsMERBQUE7SUFBTytCLElBQUksRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRTNCLFFBQVM7SUFBQzRCLFFBQVEsRUFBRSxTQUFBQSxTQUFDbEIsQ0FBQztNQUFBLE9BQUtULFdBQVcsQ0FBQ1MsQ0FBQyxDQUFDbUIsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsZUFDL0dqQywwREFBQTtJQUFPK0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFdkIsUUFBUztJQUFDd0IsUUFBUSxFQUFFLFNBQUFBLFNBQUNsQixDQUFDO01BQUEsT0FBS0wsV0FBVyxDQUFDSyxDQUFDLENBQUNtQixNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxlQUMvR2pDLDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBTytCLElBQUksRUFBQyxRQUFRO0lBQUNFLEtBQUssRUFBQztFQUFPLEVBQUcsQ0FDaEMsQ0FDSDtBQUVWO0FBRUEsaUVBQWUvQixTQUFTOzs7Ozs7OztVQ2hDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBkYXRhLmZpbmQodXNlciA9PiB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiB1c2VyLnBhc3N3b3JkID09PSBwYXNzd29yZCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gYmVoYXZpb3JcclxuICAgIGlmICh1c2VybmFtZTEgPT09ICdGbGFtdXInICYmIHBhc3N3b3JkMSA9PT0gJ0ZsYW11cicpIHtcclxuICAgICAgY29uc3QgdXNlclRvU2F2ZSA9IHsgdXNlcm5hbWUxLCBwYXNzd29yZDEgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyVG9TYXZlKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsIScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGluY29ycmVjdCEgUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJpY29uLXVzZXJcIj48L2k+IExvZ2luPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNmMTY0MWYyMDlkMzk2YWVjMjdiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlciIsImRhdGEiLCJmaW5kIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUxIiwicGFzc3dvcmQxIiwidXNlclRvU2F2ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=