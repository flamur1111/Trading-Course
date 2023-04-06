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
  }, user);
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
  }, props.paramStateOfUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
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
/******/ 	__webpack_require__.h = () => ("b24d17ed224070395d2d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZDU2MDY5OGY1MzI4YWQxMGM3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRdkI7QUFFNUIsU0FBU1MsZ0JBQWdCQSxDQUFFQyxLQUFLLEVBQUU7RUFFOUIsSUFBQUMsU0FBQSxHQUEwQlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbENHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEIsSUFBQUksVUFBQSxHQUF3QmQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEJoQixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFNbUIsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdERMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2xCLENBQUMsRUFBQ0YsSUFBSSxDQUFDO0VBR1AsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztJQUN2QkYsWUFBWSxDQUFDRyxVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CWCxRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ25CLENBQUM7RUFFRGQsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBR2lCLElBQUksRUFBQztNQUNKSCxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xCO0VBRUosQ0FBQyxFQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBRVQsb0JBQ0lsQiwwREFBQSw4QkFDSUEsMERBQUE7SUFBSzRCLFNBQVMsRUFBQztFQUFNLGdCQUNqQjVCLDBEQUFBLDBCQUNBQSwwREFBQTtJQUFHNkIsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FFekIsZUFDTDdCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBRU5BLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBSyxnQkFDZjVCLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBTSxnQkFBQzVCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUV3QixFQUFFLEVBQUM7RUFBRyxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBRXREOUIsMERBQUE7SUFBSTRCLFNBQVMsRUFBQztFQUFNLGdCQUFDNUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ3dCLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssZUFDNUQ5QiwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQU0sZ0JBQUM1QiwwREFBQSxDQUFDTSxrREFBSTtJQUFDd0IsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxlQUUzRDlCLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBTSxHQUFHbEIsS0FBSyxDQUFDcUIsZ0JBQWdCLGdCQUFHL0IsMERBQUEsQ0FBQ00sa0RBQUk7SUFBRXdCLEVBQUUsRUFBQyxRQUFRO0lBQUNFLE9BQU8sRUFBRVA7RUFBYSxHQUFDLFFBQU0sQ0FBTyxnQkFBR3pCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUV3QixFQUFFLEVBQUM7RUFBUSxHQUFFLE9BQUssQ0FBTyxDQUFNLENBRy9JLENBQ0E7QUFFakI7QUFFQSxpRUFBZXJCLGdCQUFnQjs7Ozs7Ozs7VUMzRC9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0hlYWRlck5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbiAocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbZXhpc3QsIHNldEV4aXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcmkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFVzZXIodXNlcmkpXHJcbiAgICB9LHVzZXIpXHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpXHJcbiAgICAgICAgc2V0RXhpc3QoZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgICAgICBzZXRFeGlzdCh0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFt1c2VyXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Gb3JleDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VHJhZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rICB0bz1cIi9cIj5XZWxjb21lPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICB7LyogPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayB0bz1cIi9jb3Vyc2VzXCI+Q291cnNlczwvTGluaz48L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCIgPnshdXNlciAmJiA8TGluayAgdG89XCIvbG9naW5cIiA+TG9naW48L0xpbms+fTwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIiA+e3Byb3BzLnBhcmFtU3RhdGVPZlVzZXIgPyA8TGluayAgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz4gOiA8TGluayAgdG89XCIvbG9naW5cIiA+TG9naW48L0xpbms+fTwvbGk+XHJcblxyXG4gXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIyNGQxN2VkMjI0MDcwMzk1ZDJkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlYWRlck5hdmlnYXRpb24iLCJwcm9wcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImV4aXN0Iiwic2V0RXhpc3QiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInVzZXIiLCJzZXRVc2VyIiwidXNlcmkiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJocmVmIiwidG8iLCJwYXJhbVN0YXRlT2ZVc2VyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=