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
    var user = data.find(function (user) {
      return user.username === username && user.password === password;
    });
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
/******/ 	__webpack_require__.h = () => ("800cc4f2b86ae9f9a923")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZjE2NDFmMjA5ZDM5NmFlYzI3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFHNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLElBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsVUFBQUYsSUFBSTtNQUFBLE9BQUlBLElBQUksQ0FBQ1QsUUFBUSxLQUFLQSxRQUFRLElBQUlTLElBQUksQ0FBQ0wsUUFBUSxLQUFLQSxRQUFRO0lBQUEsRUFBQztJQUN4RixJQUFJUSxTQUFTLEtBQUssUUFBUSxJQUFJQyxTQUFTLEtBQUssUUFBUSxFQUFFO01BQ3BELElBQU1DLFVBQVUsR0FBRztRQUFFRixTQUFTLEVBQVRBLFNBQVM7UUFBRUMsU0FBUyxFQUFUQTtNQUFVLENBQUM7TUFDM0NFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFVBQVUsQ0FBQyxDQUFDO01BQ3hESyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsQyxDQUFDLE1BQU07TUFDTEMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDO0lBQzVEO0VBQ0YsQ0FBQztFQUVELG9CQUNFM0IsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU02QixTQUFTLEVBQUMsV0FBVztJQUFDQyxRQUFRLEVBQUVsQjtFQUFhLGdCQUNqRFosMERBQUEsMEJBQUlBLDBEQUFBO0lBQUc2QixTQUFTLEVBQUM7RUFBVyxFQUFLLFVBQU0sQ0FBSyxlQUM1QzdCLDBEQUFBO0lBQU8rQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxXQUFXLEVBQUMsVUFBVTtJQUFDQyxLQUFLLEVBQUUzQixRQUFTO0lBQUM0QixRQUFRLEVBQUUsU0FBQUEsU0FBQ3JCLENBQUM7TUFBQSxPQUFLTixXQUFXLENBQUNNLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLGVBQy9HakMsMERBQUE7SUFBTytCLElBQUksRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRXZCLFFBQVM7SUFBQ3dCLFFBQVEsRUFBRSxTQUFBQSxTQUFDckIsQ0FBQztNQUFBLE9BQUtGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDc0IsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsZUFDL0dqQywwREFBQSxZQUFTLGVBQ1RBLDBEQUFBO0lBQU8rQixJQUFJLEVBQUMsUUFBUTtJQUFDRSxLQUFLLEVBQUM7RUFBTyxFQUFHLENBQ2hDLENBQ0g7QUFFVjtBQUVBLGlFQUFlL0IsU0FBUzs7Ozs7Ozs7VUNoQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXHJcbiAgICBjb25zdCB1c2VyID0gZGF0YS5maW5kKHVzZXIgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpO1xyXG4gICAgaWYgKHVzZXJuYW1lMSA9PT0gJ0ZsYW11cicgJiYgcGFzc3dvcmQxID09PSAnRmxhbXVyJykge1xyXG4gICAgICBjb25zdCB1c2VyVG9TYXZlID0geyB1c2VybmFtZTEsIHBhc3N3b3JkMSB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJUb1NhdmUpKTtcclxuICAgICAgY29uc29sZS5sb2coJ0xvZ2luIHN1Y2Nlc3NmdWwhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnVXNlcm5hbWUgb3IgcGFzc3dvcmQgaW5jb3JyZWN0ISBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgyPjxpIGNsYXNzTmFtZT1cImljb24tdXNlclwiPjwvaT4gTG9naW48L2gyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiTG9naW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODAwY2M0ZjJiODZhZTlmOWE5MjNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VyIiwiZGF0YSIsImZpbmQiLCJ1c2VybmFtZTEiLCJwYXNzd29yZDEiLCJ1c2VyVG9TYXZlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==