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
    to: "/courses"
  }, "Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "About Us")), location.pathname === "/courses" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login",
    onClick: handleLogout
  }, "Logout")), location.pathname !== "/courses" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Outlet, null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7cd22ff283b2a5111c36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YjE0OGZkNTc2MWE2NjUwYjFjMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzhCO0FBQ3RFLFNBQVNNLGdCQUFnQkEsQ0FBQ0MsS0FBSyxFQUFFO0VBQ2pDLElBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ25ELElBQU1DLFFBQVEsR0FBR1IsNkRBQVcsRUFBRTtFQUM5QixJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3pCSCxZQUFZLENBQUNJLFVBQVUsQ0FBQyxNQUFNLENBQUM7SUFDL0I7RUFDRixDQUFDOztFQUNDLG9CQUNJZiwwREFBQSw4QkFDSUEsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFNLGdCQUNqQmpCLDBEQUFBLDBCQUNBQSwwREFBQTtJQUFHa0IsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FDekIsZUFDTGxCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBQ05BLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBSyxnQkFDZmpCLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxnQkFBQ2pCLDBEQUFBLENBQUNFLGtEQUFJO0lBQUVpQixFQUFFLEVBQUM7RUFBRyxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBQ3REbkIsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFNLGdCQUFDakIsMERBQUEsQ0FBQ0Usa0RBQUk7SUFBQ2lCLEVBQUUsRUFBQztFQUFVLEdBQUMsU0FBTyxDQUFPLENBQUssZUFDNURuQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQU0sZ0JBQUNqQiwwREFBQSxDQUFDRSxrREFBSTtJQUFDaUIsRUFBRSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQU8sQ0FBSyxlQUM1RG5CLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxnQkFBQ2pCLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNpQixFQUFFLEVBQUM7RUFBUSxHQUFDLFVBQVEsQ0FBTyxDQUFLLEVBQzFETixRQUFRLENBQUNPLFFBQVEsS0FBSyxVQUFVLGlCQUNqQ3BCLDBEQUFBLDBCQUFJQSwwREFBQSxDQUFDRSxrREFBSTtJQUFDaUIsRUFBRSxFQUFDLFFBQVE7SUFBQ0UsT0FBTyxFQUFFUDtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQ3pELEVBQ0FELFFBQVEsQ0FBQ08sUUFBUSxLQUFLLFVBQVUsaUJBQ2pDcEIsMERBQUEsMEJBQUlBLDBEQUFBLENBQUNFLGtEQUFJO0lBQUNpQixFQUFFLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBTyxDQUNoQyxDQUNELGVBQ0xuQiwwREFBQSxDQUFDSSxvREFBTSxPQUFFLENBQ0o7QUFFakI7QUFDQSxpRUFBZUUsZ0JBQWdCOzs7Ozs7OztVQ2pDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvSGVhZGVyTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluaywgTmF2TGluaywgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5mdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKHByb3BzKSB7XHJcbmNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgLy8gVE9ETzogSW1wbGVtZW50IGxvZ291dCBmdW5jdGlvbmFsaXR5XHJcbiAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJpbmRleC5odG1sXCI+Rm9yZXg8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+VHJhZGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgIHRvPVwiL1wiPldlbGNvbWU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvY29udGFjdFwiPkNvbnRhY3Q8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgdG89XCIvYWJvdXRcIj5BYm91dCBVczwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAge2xvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9jb3Vyc2VzXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIHRvPVwiL2xvZ2luXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7bG9jYXRpb24ucGF0aG5hbWUgIT09IFwiL2NvdXJzZXNcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbG9naW5cIj5Mb2dpbjwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxPdXRsZXQvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdjZDIyZmYyODNiMmE1MTExYzM2XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsInVzZUxvY2F0aW9uIiwiSGVhZGVyTmF2aWdhdGlvbiIsInByb3BzIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2NhdGlvbiIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRvIiwicGF0aG5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==