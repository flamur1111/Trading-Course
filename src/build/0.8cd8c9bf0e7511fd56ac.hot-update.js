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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    messageSent = _useState8[0],
    setMessageSent = _useState8[1];
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
    setMessageSent(true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, "Submit")), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Message Sent"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7b6588d4bf4ae4f72b67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEIsMERBQUEsWUFBRyxjQUFZLENBQUksQ0FDbEM7QUFFUDtBQUVBLGlFQUFlRSxXQUFXOzs7Ozs7OztVQzdDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZVNlbnQsIHNldE1lc3NhZ2VTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBVc2UgZmV0Y2goKSBvciBBeGlvcyB0byBzZW5kIGZvcm0gZGF0YSB0byBzZXJ2ZXJcclxuICAgIHNldE1lc3NhZ2VTZW50KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUNoYW5nZX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAge21lc3NhZ2VTZW50ICYmIDxwPk1lc3NhZ2UgU2VudDwvcD59XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YjY1ODhkNGJmNGFlNGY3MmI2N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1lc3NhZ2VTZW50Iiwic2V0TWVzc2FnZVNlbnQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwib25TdWJtaXQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=