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


function HeaderNavigation(props) {
  var user = JSON.parse(localStorage.getItem('user'));
  var handleSubmit = function handleSubmit() {
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
  }, !user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/login",
    onClick: handleSubmit
  }, "Logout"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b93e1d6a74f41f2fa1c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MzFlODA2YmQ5ZWNjOTg2ODhjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFRRTtBQUU1QixTQUFTTyxnQkFBZ0JBLENBQUVDLEtBQUssRUFBRTtFQUM5QixJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNyRCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQSxFQUFTO0lBQ3ZCRixZQUFZLENBQUNHLFVBQVUsQ0FBQyxNQUFNLENBQUM7RUFDbkMsQ0FBQztFQUNELG9CQUNJZiwwREFBQSw4QkFDSUEsMERBQUE7SUFBS2lCLFNBQVMsRUFBQztFQUFNLGdCQUNqQmpCLDBEQUFBLDBCQUNBQSwwREFBQTtJQUFHa0IsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FFekIsZUFDTGxCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBRU5BLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBSyxnQkFDZmpCLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxnQkFBQ2pCLDBEQUFBLENBQUNJLGtEQUFJO0lBQUVlLEVBQUUsRUFBQztFQUFHLEdBQUMsU0FBTyxDQUFPLENBQUssZUFFdERuQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQU0sZ0JBQUNqQiwwREFBQSxDQUFDSSxrREFBSTtJQUFDZSxFQUFFLEVBQUM7RUFBVSxHQUFDLFNBQU8sQ0FBTyxDQUFLLGVBQzVEbkIsMERBQUE7SUFBSWlCLFNBQVMsRUFBQztFQUFNLGdCQUFDakIsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBQ2UsRUFBRSxFQUFDO0VBQVEsR0FBQyxVQUFRLENBQU8sQ0FBSyxlQUMzRG5CLDBEQUFBO0lBQUlpQixTQUFTLEVBQUM7RUFBTSxHQUFHLENBQUNSLElBQUksaUJBQUlULDBEQUFBLENBQUNJLGtEQUFJO0lBQUVlLEVBQUUsRUFBQztFQUFRLEdBQUUsT0FBSyxDQUFPLENBQU0sZUFDdEVuQiwwREFBQTtJQUFJaUIsU0FBUyxFQUFDO0VBQU0sR0FBR1IsSUFBSSxpQkFBSVQsMERBQUEsQ0FBQ0ksa0RBQUk7SUFBRWUsRUFBRSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxFQUFFTjtFQUFhLEdBQUMsUUFBTSxDQUFPLENBQU0sQ0FHM0YsQ0FDQTtBQUVqQjtBQUVBLGlFQUFlUCxnQkFBZ0I7Ozs7Ozs7O1VDdkMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9IZWFkZXJOYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbiAocHJvcHMpIHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPkZvcmV4PC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5UcmFkaW5nPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+PExpbmsgIHRvPVwiL1wiPldlbGNvbWU8L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxMaW5rIHRvPVwiL2NvdXJzZXNcIj5Db3Vyc2VzPC9MaW5rPjwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayB0bz1cIi9jb250YWN0XCI+Q29udGFjdDwvTGluaz48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48TGluayB0bz1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiID57IXVzZXIgJiYgPExpbmsgIHRvPVwiL2xvZ2luXCIgPkxvZ2luPC9MaW5rPn08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIiA+e3VzZXIgJiYgPExpbmsgIHRvPVwiL2xvZ2luXCIgb25DbGljaz17aGFuZGxlU3VibWl0fT5Mb2dvdXQ8L0xpbms+fTwvbGk+XHJcblxyXG4gXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiOTNlMWQ2YTc0ZjQxZjJmYTFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJIZWFkZXJOYXZpZ2F0aW9uIiwicHJvcHMiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhhbmRsZVN1Ym1pdCIsInJlbW92ZUl0ZW0iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRvIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=