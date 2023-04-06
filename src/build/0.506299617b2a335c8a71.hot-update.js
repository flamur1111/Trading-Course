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

function LoginForm(props) {
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
      var userToSave = {
        username: username,
        password: password
      };
      localStorage.setItem('user', JSON.stringify(userToSave));
      if (typeof props.handleLoginSuccess == "function") {
        props.handleLoginSuccess(true);
      }
      console.log('Login successful!');
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
/******/ 	__webpack_require__.h = () => ("afc7791aee564ee7a379")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDYyOTk2MTdiMmEzMzVjOGE3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUV4QyxTQUFTRSxTQUFTQSxDQUFDQyxLQUFLLEVBQUU7RUFDeEIsSUFBQUMsU0FBQSxHQUFnQ0gsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1IsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFHNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLENBQUMsRUFBSztJQUMxQkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQyxDQUFDOztJQUVwQixJQUFJUixRQUFRLEtBQUssUUFBUSxJQUFJSSxRQUFRLEtBQUssUUFBUSxFQUFFO01BQ2xELElBQU1LLFVBQVUsR0FBRztRQUFFVCxRQUFRLEVBQVJBLFFBQVE7UUFBRUksUUFBUSxFQUFSQTtNQUFTLENBQUM7TUFDekNNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNKLFVBQVUsQ0FBQyxDQUFDO01BQ3hELElBQUcsT0FBT2IsS0FBSyxDQUFDa0Isa0JBQWtCLElBQUksVUFBVSxFQUFFO1FBQ2hEbEIsS0FBSyxDQUFDa0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDO01BQ2hDO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQ2hDQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBRXRDLENBQUMsTUFBTTtNQUNMQyxLQUFLLENBQUMsbURBQW1ELENBQUM7SUFDNUQ7RUFDRixDQUFDO0VBRUQsb0JBQ0UzQiwwREFBQSwyQkFDRUEsMERBQUE7SUFBTTZCLFNBQVMsRUFBQyxXQUFXO0lBQUNDLFFBQVEsRUFBRWpCO0VBQWEsZ0JBQ2pEYiwwREFBQSwwQkFBSUEsMERBQUE7SUFBRzZCLFNBQVMsRUFBQztFQUFXLEVBQUssVUFBTSxDQUFLLGVBQzVDN0IsMERBQUE7SUFBTytCLElBQUksRUFBQyxVQUFVO0lBQUNDLFdBQVcsRUFBQyxVQUFVO0lBQUNDLEtBQUssRUFBRTFCLFFBQVM7SUFBQzJCLFFBQVEsRUFBRSxTQUFBQSxTQUFBcEIsQ0FBQztNQUFBLE9BQUlOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDcUIsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsZUFDN0dqQywwREFBQTtJQUFPK0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsV0FBVyxFQUFDLFVBQVU7SUFBQ0MsS0FBSyxFQUFFdEIsUUFBUztJQUFDdUIsUUFBUSxFQUFFLFNBQUFBLFNBQUFwQixDQUFDO01BQUEsT0FBSUYsV0FBVyxDQUFDRSxDQUFDLENBQUNxQixNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxlQUM3R2pDLDBEQUFBLFlBQVMsZUFDVEEsMERBQUE7SUFBTytCLElBQUksRUFBQyxRQUFRO0lBQUNFLEtBQUssRUFBQztFQUFPLEVBQUcsQ0FDaEMsQ0FDSDtBQUVWO0FBRUEsaUVBQWUvQixTQUFTOzs7Ozs7OztVQ3JDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0ocHJvcHMpIHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxyXG5cclxuICAgIGlmICh1c2VybmFtZSA9PT0gJ0ZsYW11cicgJiYgcGFzc3dvcmQgPT09ICdGbGFtdXInKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJUb1NhdmUgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXJUb1NhdmUpKTtcclxuICAgICAgaWYodHlwZW9mIHByb3BzLmhhbmRsZUxvZ2luU3VjY2VzcyA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBwcm9wcy5oYW5kbGVMb2dpblN1Y2Nlc3ModHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCEnKTtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnIy9jb3Vyc2VzJzsgLy8gcmVkaXJlY3QgdG8gZGFzaGJvYXJkIHBhZ2VcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhbGVydCgnVXNlcm5hbWUgb3IgcGFzc3dvcmQgaW5jb3JyZWN0ISBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2xvZ2lucGFnZScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgyPjxpIGNsYXNzTmFtZT1cImljb24tdXNlclwiPjwvaT4gTG9naW48L2gyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZmM3NzkxYWVlNTY0ZWU3YTM3OVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlclRvU2F2ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlTG9naW5TdWNjZXNzIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=