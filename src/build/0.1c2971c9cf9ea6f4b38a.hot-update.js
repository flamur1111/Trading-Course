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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "contactus"
  }, "Contact Us"), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Message Sent")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    },
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Message:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: message,
    onChange: function onChange(event) {
      return setMessage(event.target.value);
    },
    required: true
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
/******/ 	__webpack_require__.h = () => ("ba7c03c2034d4ad7a70c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7RUFBQSxFQUFHLENBQ3hGLGVBQ1JwQywwREFBQSxnQkFBTyxVQUVMLGVBQUFBLDBEQUFBO0lBQVVpQyxLQUFLLEVBQUVwQixPQUFRO0lBQUNxQixRQUFRLEVBQUUsU0FBQUEsU0FBQVYsS0FBSztNQUFBLE9BQUlWLFVBQVUsQ0FBQ1UsS0FBSyxDQUFDVyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ0csUUFBUTtFQUFBLEVBQUcsQ0FDbEYsZUFDUnBDLDBEQUFBO0lBQVFnQyxJQUFJLEVBQUM7RUFBUSxHQUFDLFFBQU0sQ0FBUyxDQUdoQztBQUVYO0FBRUEsaUVBQWUvQixXQUFXOzs7Ozs7OztVQzFEMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBDb250YWN0Rm9ybSgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lc3NhZ2VTZW50LCBzZXRNZXNzYWdlU2VudF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uLCBlLmcuIHNlbmQgZGF0YSB0byBiYWNrZW5kXHJcbiAgICBzZXRNZXNzYWdlU2VudCh0cnVlKTtcclxuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcclxuXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN1Ym1pdHRlZCkge1xyXG4gICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0TWVzc2FnZVNlbnQoZmFsc2UpO1xyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgfSwgMzAwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtzdWJtaXR0ZWRdKTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG5cclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nY29udGFjdGZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSdjb250YWN0dXMnPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICB7bWVzc2FnZVNlbnQgJiYgPHNwYW4gY2xhc3NOYW1lPSdtZXNzYWdlJz48c3Ryb25nPk1lc3NhZ2UgU2VudDwvc3Ryb25nPjwvc3Bhbj59XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBOYW1lOlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8bGFiZWw+XHJcbiAgICAgICAgRW1haWw6XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBNZXNzYWdlOlxyXG4gICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcblxyXG5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYTdjMDNjMjAzNGQ0YWQ3YTcwY1wiKSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlYWN0IiwiQ29udGFjdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsIm1lc3NhZ2VTZW50Iiwic2V0TWVzc2FnZVNlbnQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=