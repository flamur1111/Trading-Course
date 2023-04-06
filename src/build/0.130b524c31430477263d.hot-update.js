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
  }, []);
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
/******/ 	__webpack_require__.h = () => ("7d2fe10331c3aa5c675a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMzBiNTI0YzMxNDMwNDc3MjYzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRdkI7QUFFNUIsU0FBU1MsZ0JBQWdCQSxDQUFFQyxLQUFLLEVBQUU7RUFFOUIsSUFBQUMsU0FBQSxHQUEwQlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbENHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFHdEJYLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQU1lLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDO0lBQ2pCRCxRQUFRLENBQUNDLElBQUksQ0FBQztFQUNsQixDQUFDLEVBQUMsRUFBRSxDQUFDO0VBR0wsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN2QkosWUFBWSxDQUFDSyxVQUFVLENBQUMsTUFBTSxDQUFDO0VBQ25DLENBQUM7RUFJRCxvQkFDSXhCLDBEQUFBLDhCQUNJQSwwREFBQTtJQUFLMEIsU0FBUyxFQUFDO0VBQU0sZ0JBQ2pCMUIsMERBQUEsMEJBQ0FBLDBEQUFBO0lBQUcyQixJQUFJLEVBQUM7RUFBWSxHQUFDLE9BQUssQ0FBSSxDQUV6QixlQUNMM0IsMERBQUEsZUFBTSxTQUFPLENBQU8sQ0FDbEIsZUFFTkEsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFLLGdCQUNmMUIsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFNLGdCQUFDMUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBRXNCLEVBQUUsRUFBQztFQUFHLEdBQUMsU0FBTyxDQUFPLENBQUssZUFFdEQ1QiwwREFBQTtJQUFJMEIsU0FBUyxFQUFDO0VBQU0sZ0JBQUMxQiwwREFBQSxDQUFDTSxrREFBSTtJQUFDc0IsRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxlQUM1RDVCLDBEQUFBO0lBQUkwQixTQUFTLEVBQUM7RUFBTSxnQkFBQzFCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUNzQixFQUFFLEVBQUM7RUFBUSxHQUFDLFVBQVEsQ0FBTyxDQUFLLGVBRTNENUIsMERBQUE7SUFBSTBCLFNBQVMsRUFBQztFQUFNLEdBQUdaLEtBQUssZ0JBQUdkLDBEQUFBLENBQUNNLGtEQUFJO0lBQUVzQixFQUFFLEVBQUMsUUFBUTtJQUFDQyxPQUFPLEVBQUVOO0VBQWEsR0FBQyxRQUFNLENBQU8sZ0JBQUd2QiwwREFBQSxDQUFDTSxrREFBSTtJQUFFc0IsRUFBRSxFQUFDO0VBQVEsR0FBRSxPQUFLLENBQU8sQ0FBTSxDQUc5SCxDQUNBO0FBRWpCO0FBRUEsaUVBQWVuQixnQkFBZ0I7Ozs7Ozs7O1VDcEQvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9IZWFkZXJOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24gKHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW2V4aXN0LCBzZXRFeGlzdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIFxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIHNldEV4aXN0KHVzZXIpO1xyXG4gICAgfSxbXSlcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Gb3JleDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VHJhZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rICB0bz1cIi9cIj5XZWxjb21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayB0bz1cIi9jb3Vyc2VzXCI+Q291cnNlczwvTGluaz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCIgPnshdXNlciAmJiA8TGluayAgdG89XCIvbG9naW5cIiA+TG9naW48L0xpbms+fTwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIiA+e2V4aXN0ID8gPExpbmsgIHRvPVwiL2xvZ2luXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+IDogPExpbmsgIHRvPVwiL2xvZ2luXCIgPkxvZ2luPC9MaW5rPn08L2xpPlxyXG5cclxuIFxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3ZDJmZTEwMzMxYzNhYTVjNjc1YVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXJOYXZpZ2F0aW9uIiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJleGlzdCIsInNldEV4aXN0IiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidG8iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==