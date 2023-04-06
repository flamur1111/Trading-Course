"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 40:
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

function ContactForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    setName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    message = _useState6[0],
    setMessage = _useState6[1];
  var handleNameChange = function handleNameChange(event) {
    setName(event.target.value);
  };
  var handleEmailChange = function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  var handleMessageChange = function handleMessageChange(event) {
    setMessage(event.target.value);
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    // Use fetch() or Axios to send form data to server
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    value: name,
    onChange: handleNameChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: handleEmailChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message"
  }, "Message:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "message",
    name: "message",
    value: message,
    onChange: handleMessageChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LearnMore__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_8__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8cd8c9bf0e7511fd56ac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQm5DLDBEQUFBLENBQUNxQyxnREFBTyxPQUFFLGVBQ1ZyQywwREFBQSxDQUFDc0MsZ0RBQWEsT0FBRSxlQUNoQnRDLDBEQUFBLENBQUNvQyxrREFBUyxPQUFFLGVBQ1pwQywwREFBQSxDQUFDaUMsNkNBQUksT0FBRSxlQUNQakMsMERBQUEsQ0FBQ2tDLCtDQUFNLE9BQUUsZUFDVGxDLDBEQUFBLENBQUNFLG9EQUFXLE9BQUUsQ0FFZjtBQUVYLENBQUM7QUFDRDhCLDZDQUFlLGVBQUNoQywwREFBQSxDQUFDdUMsR0FBRyxPQUFFLEVBQUVHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ3ZCdkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBVc2UgZmV0Y2goKSBvciBBeGlvcyB0byBzZW5kIGZvcm0gZGF0YSB0byBzZXJ2ZXJcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cclxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZU1lc3NhZ2VDaGFuZ2V9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IExlYXJuTW9yZSBmcm9tIFwiLi9MZWFybk1vcmVcIjtcclxuaW1wb3J0IE1haW5Cb3ggZnJvbSBcIi4vTWFpbkJveFwiO1xyXG5pbXBvcnQgR29Ub1RvcEJ1dHRvbiBmcm9tIFwiLi9Hb1RvVG9wXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0Rm9ybVwiO1xyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIC8+XHJcbiAgICAgICAgICAgIDxNYWluQm94Lz5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8TGVhcm5Nb3JlLz5cclxuICAgICAgICAgICAgPENhcmQvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICAgICAgPENvbnRhY3RGb3JtLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhjZDhjOWJmMGU3NTExZmQ1NmFjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50Iiwib25TdWJtaXQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiQ2FyZCIsIkZvb3RlciIsIkhlYWRlck5hdmlnYXRpb24iLCJMZWFybk1vcmUiLCJNYWluQm94IiwiR29Ub1RvcEJ1dHRvbiIsIkFwcCIsIkZyYWdtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=