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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    user = _useState4[0],
    setUser = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var useri = JSON.parse(localStorage.getItem('user'));
    setUser(useri);
  });
  var handleLogout = function handleLogout() {
    localStorage.removeItem('user');
    setExist(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (user) {
      setExist(true);
    }
  }, [user]);
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
  }, user !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
/******/ 	__webpack_require__.h = () => ("d606cef8027ec79e0817")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZGRhNjNlZTM2ZjFmNjA4NTkzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRdkI7QUFFNUIsU0FBU1MsZ0JBQWdCQSxDQUFFQyxLQUFLLEVBQUU7RUFFOUIsSUFBQUMsU0FBQSxHQUEwQlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbENHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEIsSUFBQUksVUFBQSxHQUF3QmQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEJoQixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFNbUIsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdERMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2xCLENBQUMsQ0FBQztFQUdGLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDdkJGLFlBQVksQ0FBQ0csVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQlgsUUFBUSxDQUFDLEtBQUssQ0FBQztFQUNuQixDQUFDO0VBRURkLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdpQixJQUFJLEVBQUM7TUFDSkgsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNsQjtFQUVKLENBQUMsRUFBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUVULG9CQUNJbEIsMERBQUEsOEJBQ0lBLDBEQUFBO0lBQUs0QixTQUFTLEVBQUM7RUFBTSxnQkFDakI1QiwwREFBQSwwQkFDQUEsMERBQUE7SUFBRzZCLElBQUksRUFBQztFQUFZLEdBQUMsT0FBSyxDQUFJLENBRXpCLGVBQ0w3QiwwREFBQSxlQUFNLFNBQU8sQ0FBTyxDQUNsQixlQUVOQSwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQUssZ0JBQ2Y1QiwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQU0sZ0JBQUM1QiwwREFBQSxDQUFDTSxrREFBSTtJQUFFd0IsRUFBRSxFQUFDO0VBQUcsR0FBQyxTQUFPLENBQU8sQ0FBSyxlQUV0RDlCLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBTSxnQkFBQzVCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUN3QixFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBQzVEOUIsMERBQUE7SUFBSTRCLFNBQVMsRUFBQztFQUFNLGdCQUFDNUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ3dCLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFFM0Q5QiwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQU0sR0FBR1YsSUFBSSxLQUFLLElBQUksZ0JBQUdsQiwwREFBQSxDQUFDTSxrREFBSTtJQUFFd0IsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFTjtFQUFhLEdBQUMsUUFBTSxDQUFPLGdCQUFHekIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBRXdCLEVBQUUsRUFBQztFQUFRLEdBQUUsT0FBSyxDQUFPLENBQU0sQ0FHdEksQ0FDQTtBQUVqQjtBQUVBLGlFQUFlckIsZ0JBQWdCOzs7Ozs7OztVQzNEL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvSGVhZGVyTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uIChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtleGlzdCwgc2V0RXhpc3RdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB1c2VyaSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VXNlcih1c2VyaSlcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXHJcbiAgICAgICAgc2V0RXhpc3QoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICBzZXRFeGlzdCh0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Gb3JleDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VHJhZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rICB0bz1cIi9cIj5XZWxjb21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayB0bz1cIi9jb3Vyc2VzXCI+Q291cnNlczwvTGluaz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCIgPnshdXNlciAmJiA8TGluayAgdG89XCIvbG9naW5cIiA+TG9naW48L0xpbms+fTwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIiA+e3VzZXIgIT09IG51bGwgPyA8TGluayAgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz4gOiA8TGluayAgdG89XCIvbG9naW5cIiA+TG9naW48L0xpbms+fTwvbGk+XHJcblxyXG4gXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2MDZjZWY4MDI3ZWM3OWUwODE3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlck5hdmlnYXRpb24iLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImV4aXN0Iiwic2V0RXhpc3QiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXIiLCJzZXRVc2VyIiwidXNlcmkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==