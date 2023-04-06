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
  var username1 = 'Flamur';
  var password1 = 'Flamur';
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission behavior
    if (username === 'Flamur' && password === 'Flamur') {
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

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _AddCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);











var App = function App() {
  var user = JSON.parse(localStorage.getItem('user'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/courses",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddCourse__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/Login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ac31ce2f871bd7b5553")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHO0lBQUNDLE9BQU8sZUFBRXZELDBEQUFBLENBQUM2QyxnREFBTztFQUFJLEVBQUcsZUFDeEM3QywwREFBQSxDQUFDb0Msb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXZELDBEQUFBLENBQUNnRCxnREFBVztFQUFHLEVBQUcsZUFDbERoRCwwREFBQSxDQUFDb0Msb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXZELDBEQUFBLENBQUMrQyxnREFBTztFQUFHLEVBQUcsZUFDNUMvQywwREFBQSxDQUFDb0Msb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXZELDBEQUFBLENBQUM0QyxrREFBUztFQUFHLEVBQUcsZUFDaEQ1QywwREFBQSxDQUFDb0Msb0RBQUs7SUFBQ2tCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXZELDBEQUFBLENBQUM4Qyw4Q0FBUztFQUFHLEVBQUcsQ0FDckMsQ0FDSSxlQUNiOUMsMERBQUEsQ0FBQzJDLGdEQUFhLE9BQUUsZUFDaEIzQywwREFBQSxDQUFDeUMsK0NBQU0sT0FBRSxDQUdWO0FBRVgsQ0FBQztBQUNEUCw2Q0FBZSxlQUVmbEMsMERBQUEsQ0FBQ2lELEdBQUcsT0FBRSxFQUVOUSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7VUMvQy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0xvZ2luLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHVzZXJuYW1lMSA9ICdGbGFtdXInO1xyXG5jb25zdCBwYXNzd29yZDEgPSAnRmxhbXVyJztcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxyXG4gICAgaWYgKHVzZXJuYW1lID09PSAnRmxhbXVyJyAmJiBwYXNzd29yZCA9PT0gJ0ZsYW11cicpIHtcclxuICAgICAgY29uc3QgdXNlclRvU2F2ZSA9IHsgdXNlcm5hbWUxLCBwYXNzd29yZDEgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyVG9TYXZlKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsIScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ1VzZXJuYW1lIG9yIHBhc3N3b3JkIGluY29ycmVjdCEgUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdsb2dpbnBhZ2UnIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxoMj48aSBjbGFzc05hbWU9XCJpY29uLXVzZXJcIj48L2k+IExvZ2luPC9oMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEdvVG9Ub3BCdXR0b24gZnJvbSBcIi4vR29Ub1RvcFwiO1xyXG5pbXBvcnQgQWRkQ291cnNlIGZyb20gXCIuL0FkZENvdXJzZVwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0Rm9ybS8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dFVzLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdXJzZXNcIiBlbGVtZW50PXs8QWRkQ291cnNlLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL0xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZS8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8R29Ub1RvcEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cclxuPEFwcC8+LFxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhYzMxY2UyZjg3MWJkN2I1NTUzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidXNlcm5hbWUxIiwicGFzc3dvcmQxIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlclRvU2F2ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiR29Ub1RvcEJ1dHRvbiIsIkFkZENvdXJzZSIsIldyYXBwZXIiLCJMb2dpblBhZ2UiLCJBYm91dFVzIiwiQ29udGFjdEZvcm0iLCJBcHAiLCJ1c2VyIiwicGFyc2UiLCJnZXRJdGVtIiwiRnJhZ21lbnQiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9