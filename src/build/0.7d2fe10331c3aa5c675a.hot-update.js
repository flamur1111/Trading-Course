"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
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


function HeaderNavigation(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    exist = _useState2[0],
    setExist = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setExist(user);
  }, exist);
  var handleLogout = function handleLogout() {
    localStorage.removeItem('user');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "index.html"
  }, "Forex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Trading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "lis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Welcome")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/about"
  }, "About Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, exist ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "Login"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10de0151d8cf0b91f20d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZDJmZTEwMzMxYzNhYTVjNjc1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRdkI7QUFFNUIsU0FBU1MsZ0JBQWdCQSxDQUFFQyxLQUFLLEVBQUU7RUFFOUIsSUFBQUMsU0FBQSxHQUEwQlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbENHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFHdEJYLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQU1lLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO0lBQ2pCRCxRQUFRLENBQUNDLElBQUksQ0FBQztFQUNsQixDQUFDLEVBQUNGLEtBQUssQ0FBQztFQUdSLElBQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDdkJKLFlBQVksQ0FBQ0ssVUFBVSxDQUFDLE1BQU0sQ0FBQztFQUNuQyxDQUFDO0VBSUQsb0JBQ0l4QiwwREFBQSw4QkFDSUEsMERBQUE7SUFBSzBCLFNBQVMsRUFBQztFQUFNLGdCQUNqQjFCLDBEQUFBLDBCQUNBQSwwREFBQTtJQUFHMkIsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FFekIsZUFDTDNCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBRU5BLDBEQUFBO0lBQUkwQixTQUFTLEVBQUM7RUFBSyxnQkFDZjFCLDBEQUFBO0lBQUkwQixTQUFTLEVBQUM7RUFBTSxnQkFBQzFCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUVzQixFQUFFLEVBQUM7RUFBRyxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBRXRENUIsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFNLGdCQUFDMUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ3NCLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssZUFDNUQ1QiwwREFBQTtJQUFJMEIsU0FBUyxFQUFDO0VBQU0sZ0JBQUMxQiwwREFBQSxDQUFDTSxrREFBSTtJQUFDc0IsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxlQUUzRDVCLDBEQUFBO0lBQUkwQixTQUFTLEVBQUM7RUFBTSxHQUFHWixLQUFLLGdCQUFHZCwwREFBQSxDQUFDTSxrREFBSTtJQUFFc0IsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFTjtFQUFhLEdBQUMsUUFBTSxDQUFPLGdCQUFHdkIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBRXNCLEVBQUUsRUFBQztFQUFRLEdBQUUsT0FBSyxDQUFPLENBQU0sQ0FHOUgsQ0FDQTtBQUVqQjtBQUVBLGlFQUFlbkIsZ0JBQWdCOzs7Ozs7OztVQ3BEL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvSGVhZGVyTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uIChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtleGlzdCwgc2V0RXhpc3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgICAgICBzZXRFeGlzdCh1c2VyKTtcclxuICAgIH0sZXhpc3QpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+Rm9yZXg8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRyYWRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayAgdG89XCIvXCI+V2VsY29tZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQgVXM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiID57IXVzZXIgJiYgPExpbmsgIHRvPVwiL2xvZ2luXCIgPkxvZ2luPC9MaW5rPn08L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCIgPntleGlzdCA/IDxMaW5rICB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPiA6IDxMaW5rICB0bz1cIi9sb2dpblwiID5Mb2dpbjwvTGluaz59PC9saT5cclxuXHJcbiBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTBkZTAxNTFkOGNmMGI5MWYyMGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiSGVhZGVyTmF2aWdhdGlvbiIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXhpc3QiLCJzZXRFeGlzdCIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRvIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=