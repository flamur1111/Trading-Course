"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
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
    submitted = _useState8[0],
    setSubmitted = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    messageSent = _useState10[0],
    setMessageSent = _useState10[1];
  var handleNameChange = function handleNameChange(event) {
    setName(event.target.value);
  };
  var handleEmailChange = function handleEmailChange(event) {
    setEmail(event.target.value);
  };
  var handleMessageChange = function handleMessageChange(event) {
    setMessage(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission, e.g. send data to backend
    setMessageSent(true);
    setSubmitted(true);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (submitted) {
      var timer = setTimeout(function () {
        setSubmitted(false);
        setMessageSent(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 3000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [submitted]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "contactform",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Us"), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "message1"
  }, "Message Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: handleNameChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: handleEmailChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Message:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: message,
    onChange: handleMessageChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Submit"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da750e9b26d3256ba507")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsRUFBRWY7RUFBaUIsRUFBRyxDQUN4RCxlQUNSdkIsMERBQUEsZ0JBQU8sUUFFTCxlQUFBQSwwREFBQTtJQUFPcUMsSUFBSSxFQUFDLE9BQU87SUFBQ1gsS0FBSyxFQUFFakIsS0FBTTtJQUFDNkIsUUFBUSxFQUFFWDtFQUFrQixFQUFHLENBQzNELGVBQ1IzQiwwREFBQSxnQkFBTyxVQUVMLGVBQUFBLDBEQUFBO0lBQVUwQixLQUFLLEVBQUViLE9BQVE7SUFBQ3lCLFFBQVEsRUFBRVY7RUFBb0IsRUFBRyxDQUNyRCxlQUNSNUIsMERBQUE7SUFBUXFDLElBQUksRUFBQztFQUFRLEdBQUMsUUFBTSxDQUFTLENBR3BDO0FBRVg7QUFFQSxpRUFBZXBDLFdBQVc7Ozs7Ozs7O1VDdkUxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9Db250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZVNlbnQsIHNldE1lc3NhZ2VTZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRW1haWxDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVNZXNzYWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiBzZW5kIGRhdGEgdG8gYmFja2VuZFxyXG4gICAgc2V0TWVzc2FnZVNlbnQodHJ1ZSk7XHJcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdWJtaXR0ZWQpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE1lc3NhZ2VTZW50KGZhbHNlKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbc3VibWl0dGVkXSk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdjb250YWN0Zm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICB7bWVzc2FnZVNlbnQgJiYgPHAgY2xhc3NOYW1lPSdtZXNzYWdlMSc+TWVzc2FnZSBTZW50PC9wPn1cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtoYW5kbGVOYW1lQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgRW1haWw6XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVFbWFpbENoYW5nZX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIE1lc3NhZ2U6XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZU1lc3NhZ2VDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRhNzUwZTliMjZkMzI1NmJhNTA3XCIpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwibWVzc2FnZVNlbnQiLCJzZXRNZXNzYWdlU2VudCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJoYW5kbGVNZXNzYWdlQ2hhbmdlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9