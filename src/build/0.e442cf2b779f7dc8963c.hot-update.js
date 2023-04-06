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
    htmlFor: "name",
    placeholder: "Name"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    value: name,
    onChange: handleNameChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    placeholder: "Email"
  }, "Email:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    value: email,
    onChange: handleEmailChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message",
    placeholder: "Message"
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
/******/ 	__webpack_require__.h = () => ("5a8fce44d7753b833a3a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQVE7SUFBQ3NCLFFBQVEsRUFBRVgsbUJBQW9CO0lBQUNZLFFBQVE7RUFBQSxFQUFZLGVBRXpHckMsMERBQUE7SUFBUWtDLElBQUksRUFBQztFQUFRLEdBQUMsUUFBTSxDQUFTLENBQ2hDLENBQ047QUFFUDtBQUVBLGlFQUFlaEMsV0FBVzs7Ozs7Ozs7VUM3QzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDFfRXhlcmNpc2VfMS9qcy9Db250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2VTZW50LCBzZXRNZXNzYWdlU2VudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5hbWVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlTWVzc2FnZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gVXNlIGZldGNoKCkgb3IgQXhpb3MgdG8gc2VuZCBmb3JtIGRhdGEgdG8gc2VydmVyXHJcbiAgICBzZXRNZXNzYWdlU2VudCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2NvbnRhY3Rmb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge21lc3NhZ2VTZW50ICYmIDxwPk1lc3NhZ2UgU2VudDwvcD59XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCIgcGxhY2Vob2xkZXI9J05hbWUnPk5hbWU6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPSdFbWFpbCc+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj0nTWVzc2FnZSc+TWVzc2FnZTo8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17aGFuZGxlTWVzc2FnZUNoYW5nZX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVhOGZjZTQ0ZDc3NTNiODMzYTNhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibWVzc2FnZVNlbnQiLCJzZXRNZXNzYWdlU2VudCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9