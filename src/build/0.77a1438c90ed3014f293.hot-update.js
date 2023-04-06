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
/******/ 	__webpack_require__.h = () => ("1dda63ee36f1f6085934")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43N2ExNDM4YzkwZWQzMDE0ZjI5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFRdkI7QUFFNUIsU0FBU1MsZ0JBQWdCQSxDQUFFQyxLQUFLLEVBQUU7RUFFOUIsSUFBQUMsU0FBQSxHQUEwQlQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBbENHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFFdEIsSUFBQUksVUFBQSxHQUF3QmQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLElBQUksR0FBQUQsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFFcEJoQixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFNbUIsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFdERMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO0VBQ2xCLENBQUMsQ0FBQztFQUdGLElBQU1LLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFBLEVBQVM7SUFDdkJGLFlBQVksQ0FBQ0csVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQlgsUUFBUSxDQUFDLEtBQUssQ0FBQztFQUNuQixDQUFDO0VBRURkLGdEQUFTLENBQUMsWUFBTTtJQUNaLElBQUdpQixJQUFJLEVBQUM7TUFDSkgsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNsQjtFQUVKLENBQUMsRUFBQyxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUVULG9CQUNJbEIsMERBQUEsOEJBQ0lBLDBEQUFBO0lBQUs0QixTQUFTLEVBQUM7RUFBTSxnQkFDakI1QiwwREFBQSwwQkFDQUEsMERBQUE7SUFBRzZCLElBQUksRUFBQztFQUFZLEdBQUMsT0FBSyxDQUFJLENBRXpCLGVBQ0w3QiwwREFBQSxlQUFNLFNBQU8sQ0FBTyxDQUNsQixlQUVOQSwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQUssZ0JBQ2Y1QiwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQU0sZ0JBQUM1QiwwREFBQSxDQUFDTSxrREFBSTtJQUFFd0IsRUFBRSxFQUFDO0VBQUcsR0FBQyxTQUFPLENBQU8sQ0FBSyxlQUV0RDlCLDBEQUFBO0lBQUk0QixTQUFTLEVBQUM7RUFBTSxnQkFBQzVCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUN3QixFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBQzVEOUIsMERBQUE7SUFBSTRCLFNBQVMsRUFBQztFQUFNLGdCQUFDNUIsMERBQUEsQ0FBQ00sa0RBQUk7SUFBQ3dCLEVBQUUsRUFBQztFQUFRLEdBQUMsVUFBUSxDQUFPLENBQUssZUFFM0Q5QiwwREFBQTtJQUFJNEIsU0FBUyxFQUFDO0VBQU0sR0FBR2QsS0FBSyxnQkFBR2QsMERBQUEsQ0FBQ00sa0RBQUk7SUFBRXdCLEVBQUUsRUFBQyxRQUFRO0lBQUNDLE9BQU8sRUFBRU47RUFBYSxHQUFDLFFBQU0sQ0FBTyxnQkFBR3pCLDBEQUFBLENBQUNNLGtEQUFJO0lBQUV3QixFQUFFLEVBQUM7RUFBUSxHQUFFLE9BQUssQ0FBTyxDQUFNLENBRzlILENBQ0E7QUFFakI7QUFFQSxpRUFBZXJCLGdCQUFnQjs7Ozs7Ozs7VUMzRC9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0hlYWRlck5hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbiAocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbZXhpc3QsIHNldEV4aXN0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlcmkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFVzZXIodXNlcmkpXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICAgICAgIHNldEV4aXN0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgICAgc2V0RXhpc3QodHJ1ZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbdXNlcl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+Rm9yZXg8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRyYWRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayAgdG89XCIvXCI+V2VsY29tZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQgVXM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiID57IXVzZXIgJiYgPExpbmsgIHRvPVwiL2xvZ2luXCIgPkxvZ2luPC9MaW5rPn08L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCIgPntleGlzdCA/IDxMaW5rICB0bz1cIi9sb2dpblwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9MaW5rPiA6IDxMaW5rICB0bz1cIi9sb2dpblwiID5Mb2dpbjwvTGluaz59PC9saT5cclxuXHJcbiBcclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWRkYTYzZWUzNmYxZjYwODU5MzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiSGVhZGVyTmF2aWdhdGlvbiIsInByb3BzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXhpc3QiLCJzZXRFeGlzdCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidXNlciIsInNldFVzZXIiLCJ1c2VyaSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImhyZWYiLCJ0byIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9