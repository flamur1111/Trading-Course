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
    className: "contactform",
    onSubmit: handleSubmit
  }, messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Message Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
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
  }, "Submit")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e442cf2b779f7dc8963c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFRaUMsSUFBSSxFQUFDO0VBQVEsR0FBQyxRQUFNLENBQVMsQ0FDaEMsQ0FDTjtBQUVQO0FBRUEsaUVBQWUvQixXQUFXOzs7Ozs7OztVQzdDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZVNlbnQsIHNldE1lc3NhZ2VTZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBVc2UgZmV0Y2goKSBvciBBeGlvcyB0byBzZW5kIGZvcm0gZGF0YSB0byBzZXJ2ZXJcclxuICAgIHNldE1lc3NhZ2VTZW50KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT0nY29udGFjdGZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7bWVzc2FnZVNlbnQgJiYgPHA+TWVzc2FnZSBTZW50PC9wPn1cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U6PC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZU1lc3NhZ2VDaGFuZ2V9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlNDQyY2YyYjc3OWY3ZGM4OTYzY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1lc3NhZ2VTZW50Iiwic2V0TWVzc2FnZVNlbnQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUVtYWlsQ2hhbmdlIiwiaGFuZGxlTWVzc2FnZUNoYW5nZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJodG1sRm9yIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=