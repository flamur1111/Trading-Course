"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function HeaderNavigation() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showContactForm = _useState2[0],
    setShowContactForm = _useState2[1];
  var toggleContactForm = function toggleContactForm() {
    setShowContactForm(!showContactForm);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    style: {
      position: "fixed",
      top: 0,
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "index.html"
  }, "Forex")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Trading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "lis"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, "Dropdown"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/#prices"
  }, "Courses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleContactForm
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "home"
  }, "About Us")), showContactForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contact-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNavigation);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _LearnMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _MainBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40);









var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LearnMore__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f6da86ffb24a9f0c5cd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNjZkYTNhN2Y2MjYyM2YwZjBjYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDQTtBQUV4QyxTQUFTRyxnQkFBZ0JBLENBQUEsRUFBSTtFQUN6QixJQUFBQyxTQUFBLEdBQThDSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0REcsZUFBZSxHQUFBRixVQUFBO0lBQUVHLGtCQUFrQixHQUFBSCxVQUFBO0VBRTFDLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztJQUM1QkQsa0JBQWtCLENBQUMsQ0FBQ0QsZUFBZSxDQUFDO0VBQ3hDLENBQUM7RUFFRCxvQkFDSVAsMERBQUE7SUFBUVcsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxPQUFPO01BQUVDLEdBQUcsRUFBRSxDQUFDO01BQUVDLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3hEZCwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBTSxnQkFDakJmLDBEQUFBLDBCQUNJQSwwREFBQTtJQUFHZ0IsSUFBSSxFQUFDO0VBQVksR0FBQyxPQUFLLENBQUksQ0FDN0IsZUFDTGhCLDBEQUFBLGVBQU0sU0FBTyxDQUFPLENBQ2xCLGVBRU5BLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUFLLGdCQUNmZiwwREFBQTtJQUFJZSxTQUFTLEVBQUM7RUFBTSxHQUFDLFNBQU8sQ0FBSyxlQUNqQ2YsMERBQUE7SUFBSWUsU0FBUyxFQUFDO0VBQU0sR0FBQyxVQUFRLENBQUssZUFDbENmLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUFNLGdCQUFDZiwwREFBQTtJQUFHZ0IsSUFBSSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQUksQ0FBSyxlQUN4RGhCLDBEQUFBO0lBQUllLFNBQVMsRUFBQztFQUFNLGdCQUFDZiwwREFBQTtJQUFRaUIsT0FBTyxFQUFFUjtFQUFrQixHQUFDLFNBQU8sQ0FBUyxDQUFLLGVBQzlFVCwwREFBQTtJQUFJZSxTQUFTLEVBQUM7RUFBTSxHQUFDLFVBQVEsQ0FBSyxDQUNqQyxFQUNKUixlQUFlLGlCQUNaUCwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBYyxnQkFDeEJmLDBEQUFBLENBQUNFLG9EQUFXLE9BQUUsQ0FHdEIsQ0FDSTtBQUVqQjtBQUVBLGlFQUFlQyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDUTtBQUNOO0FBQ1A7QUFDSTtBQUNvQjtBQUNkO0FBQ0o7QUFDTTtBQUNFO0FBQ3hDLElBQU1zQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2Qsb0JBQ0l6QiwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsQ0FBQ0cseURBQWdCLE9BQUcsZUFDcEJILDBEQUFBLENBQUN1QixnREFBTyxPQUFFLGVBQ1Z2QiwwREFBQSxDQUFDd0IsZ0RBQWEsT0FBRSxlQUNoQnhCLDBEQUFBLENBQUNzQixrREFBUyxPQUFFLGVBQ1p0QiwwREFBQSxDQUFDb0IsNkNBQUksT0FBRSxlQUNQcEIsMERBQUEsQ0FBQ3FCLCtDQUFNLE9BQUUsQ0FFVjtBQUVYLENBQUM7QUFDREYsNkNBQWUsZUFBQ25CLDBEQUFBLENBQUN5QixHQUFHLE9BQUUsRUFBRUcsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDdEJ2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvSGVhZGVyTmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24gKCkge1xyXG4gICAgY29uc3QgW3Nob3dDb250YWN0Rm9ybSwgc2V0U2hvd0NvbnRhY3RGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVDb250YWN0Rm9ybSA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93Q29udGFjdEZvcm0oIXNob3dDb250YWN0Rm9ybSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIHRvcDogMCwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaW5kZXguaHRtbFwiPkZvcmV4PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlRyYWRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj5XZWxjb21lPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJob21lXCI+RHJvcGRvd248L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj48YSBocmVmPVwiLyNwcmljZXNcIj5Db3Vyc2VzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaG9tZVwiPjxidXR0b24gb25DbGljaz17dG9nZ2xlQ29udGFjdEZvcm19PkNvbnRhY3Q8L2J1dHRvbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhvbWVcIj5BYm91dCBVczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIHtzaG93Q29udGFjdEZvcm0gJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7PENvbnRhY3RGb3JtLz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XHJcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcIi4vSGVhZGVyTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTGVhcm5Nb3JlIGZyb20gXCIuL0xlYXJuTW9yZVwiO1xyXG5pbXBvcnQgTWFpbkJveCBmcm9tIFwiLi9NYWluQm94XCI7XHJcbmltcG9ydCBHb1RvVG9wQnV0dG9uIGZyb20gXCIuL0dvVG9Ub3BcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL0NvbnRhY3RGb3JtXCI7XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPE1haW5Cb3gvPlxyXG4gICAgICAgICAgICA8R29Ub1RvcEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxMZWFybk1vcmUvPlxyXG4gICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2Y2ZGE4NmZmYjI0YTlmMGM1Y2RcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNvbnRhY3RGb3JtIiwiSGVhZGVyTmF2aWdhdGlvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNob3dDb250YWN0Rm9ybSIsInNldFNob3dDb250YWN0Rm9ybSIsInRvZ2dsZUNvbnRhY3RGb3JtIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJDYXJkIiwiRm9vdGVyIiwiTGVhcm5Nb3JlIiwiTWFpbkJveCIsIkdvVG9Ub3BCdXR0b24iLCJBcHAiLCJGcmFnbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9