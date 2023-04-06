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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Flamur'),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Flamur'),
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
/******/ 	__webpack_require__.h = () => ("6e9ee970d4fda862eeb7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQ3hDM0MsMERBQUEsQ0FBQ2tDLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVyRCwwREFBQSxDQUFDOEMsZ0RBQVc7RUFBRyxFQUFHLGVBQ2xEOUMsMERBQUEsQ0FBQ2tDLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUVyRCwwREFBQSxDQUFDNkMsZ0RBQU87RUFBRyxFQUFHLGVBQzVDN0MsMERBQUEsQ0FBQ2tDLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVyRCwwREFBQSxDQUFDMEMsa0RBQVM7RUFBRyxFQUFHLGVBQ2hEMUMsMERBQUEsQ0FBQ2tDLG9EQUFLO0lBQUNrQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUVyRCwwREFBQSxDQUFDNEMsOENBQVM7RUFBRyxFQUFHLENBQ3JDLENBQ0ksZUFDYjVDLDBEQUFBLENBQUN5QyxnREFBYSxPQUFFLGVBQ2hCekMsMERBQUEsQ0FBQ3VDLCtDQUFNLE9BQUUsQ0FHVjtBQUVYLENBQUM7QUFDRFAsNkNBQWUsZUFFZmhDLDBEQUFBLENBQUMrQyxHQUFHLE9BQUUsRUFFTlEsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDL0MvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTG9naW5Gb3JtKCkge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJ0ZsYW11cicpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJ0ZsYW11cicpO1xyXG5cclxuICBcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXHJcblxyXG4gICAgaWYgKHVzZXJuYW1lID09PSAnRmxhbXVyJyAmJiBwYXNzd29yZCA9PT0gJ0ZsYW11cicpIHtcclxuICAgICAgY29uc3QgdXNlclRvU2F2ZSA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlclRvU2F2ZSkpO1xyXG4gICAgICBjb25zb2xlLmxvZygnTG9naW4gc3VjY2Vzc2Z1bCEnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KCdVc2VybmFtZSBvciBwYXNzd29yZCBpbmNvcnJlY3QhIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT0nbG9naW5wYWdlJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDI+PGkgY2xhc3NOYW1lPVwiaWNvbi11c2VyXCI+PC9pPiBMb2dpbjwvaDI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyTmF2aWdhdGlvbiBmcm9tIFwiLi9IZWFkZXJOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBHb1RvVG9wQnV0dG9uIGZyb20gXCIuL0dvVG9Ub3BcIjtcclxuaW1wb3J0IEFkZENvdXJzZSBmcm9tIFwiLi9BZGRDb3Vyc2VcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL0Fib3V0VVNcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL0NvbnRhY3RcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdEZvcm0vPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXRVcy8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb3Vyc2VzXCIgZWxlbWVudD17PEFkZENvdXJzZS8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9Mb2dpblwiIGVsZW1lbnQ9ezxMb2dpblBhZ2UvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbjxBcHAvPixcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZTllZTk3MGQ0ZmRhODYyZWViN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTG9naW5Gb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZXJUb1NhdmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiRm9vdGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsIkdvVG9Ub3BCdXR0b24iLCJBZGRDb3Vyc2UiLCJXcmFwcGVyIiwiTG9naW5QYWdlIiwiQWJvdXRVcyIsIkNvbnRhY3RGb3JtIiwiQXBwIiwidXNlciIsInBhcnNlIiwiZ2V0SXRlbSIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==