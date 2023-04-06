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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);


function HeaderNavigation(props) {
  var user = JSON.parse(localStorage.getItem('user'));
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useLocation)();
  var handleLogout = function handleLogout() {
    localStorage.removeItem('user');
    // TODO: Implement logout functionality
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "index.html"
  }, "Forex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Trading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "lis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/"
  }, "Welcome")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About Us")), location.pathname === "/courses" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), location.pathname !== "/courses" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1147ed1b7ad4fa514975")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZTBiMmUyZjRiZDJkNDExZTIwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzhCO0FBQ3RFLFNBQVNNLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2pDLElBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ25ELElBQU1DLFFBQVEsR0FBR1IsNkRBQVcsRUFBRTtFQUM5QixJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCSCxZQUFZLENBQUNJLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0I7RUFDRixDQUFDOztFQUNDLG9CQUNJZiwwREFBQSw4QkFDSUEsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFNLGdCQUNqQmpCLDBEQUFBLDBCQUNBQSwwREFBQTtJQUFHa0IsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FDekIsZUFDTGxCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBQ05BLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBSyxnQkFDZmpCLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxnQkFBQ2pCLDBEQUFBLENBQUNFLGtEQUFJO0lBQUVpQixFQUFFLEVBQUM7RUFBRyxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBRXREbkIsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFNLGdCQUFDakIsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2lCLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssZUFDNURuQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQU0sZ0JBQUNqQiwwREFBQSxDQUFDRSxrREFBSTtJQUFDaUIsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxFQUMxRE4sUUFBUSxDQUFDTyxRQUFRLEtBQUssVUFBVSxpQkFDakNwQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQU0sZ0JBQUNqQiwwREFBQSxDQUFDRSxrREFBSTtJQUFDaUIsRUFBRSxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFUDtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQzFFLEVBQ0FELFFBQVEsQ0FBQ08sUUFBUSxLQUFLLFVBQVUsaUJBQ2pDcEIsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFNLGdCQUFDakIsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2lCLEVBQUUsRUFBQztFQUFRLEdBQUMsT0FBSyxDQUFPLENBQ2pELENBQ0QsZUFDTG5CLDBEQUFBLENBQUNJLG9EQUFNLE9BQUUsQ0FDSjtBQUVqQjtBQUNBLGlFQUFlRSxnQkFBZ0I7Ozs7Ozs7O1VDakMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9IZWFkZXJOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rLCBPdXRsZXQsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24ocHJvcHMpIHtcclxuY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAvLyBUT0RPOiBJbXBsZW1lbnQgbG9nb3V0IGZ1bmN0aW9uYWxpdHlcclxuICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImluZGV4Lmh0bWxcIj5Gb3JleDwvYT5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UcmFkaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayAgdG89XCIvXCI+V2VsY29tZTwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+PC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2NvbnRhY3RcIj5Db250YWN0PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQgVXM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvY291cnNlc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvbG9naW5cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbi5wYXRobmFtZSAhPT0gXCIvY291cnNlc1wiICYmIChcclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxPdXRsZXQvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExNDdlZDFiN2FkNGZhNTE0OTc1XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZUxvY2F0aW9uIiwiSGVhZGVyTmF2aWdhdGlvbiIsInByb3BzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRvIiwicGF0aG5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==