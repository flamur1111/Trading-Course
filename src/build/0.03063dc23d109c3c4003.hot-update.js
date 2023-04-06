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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var initialFormData = {
  name: '',
  email: '',
  message: ''
};
function ContactForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialFormData),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    messageSent = _useState4[0],
    setMessageSent = _useState4[1];
  var handleCancel = function handleCancel() {
    setFormData(initialFormData);
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prevFormData) {
      return _objectSpread(_objectSpread({}, prevFormData), {}, _defineProperty({}, name, value));
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    // handle form submission logic
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "contactform",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Us"), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Message Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    type: "name"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Your Name",
    value: formData.name,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    type: "email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Your Email",
    value: formData.email,
    onChange: handleChange,
    required: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    type: "message"
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "message",
    name: "message",
    placeholder: "Your Message",
    value: formData.message,
    onChange: handleChange,
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
/******/ 	__webpack_require__.h = () => ("7b0c306e70d036bf01eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBTSxDQUFTLENBQ2hDLENBQ047QUFFUDtBQUVBLGlFQUFlekIsV0FBVzs7Ozs7Ozs7VUNyRDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBpbml0aWFsRm9ybURhdGEgPSB7XHJcbiAgbmFtZTogJycsXHJcbiAgZW1haWw6ICcnLFxyXG4gIG1lc3NhZ2U6ICcnLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRm9ybURhdGEpO1xyXG4gIGNvbnN0IFttZXNzYWdlU2VudCwgc2V0TWVzc2FnZVNlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoaW5pdGlhbEZvcm1EYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldkZvcm1EYXRhKSA9PiAoe1xyXG4gICAgICAuLi5wcmV2Rm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gbG9naWNcclxuICB9O1xyXG5cclxuICBcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9J2NvbnRhY3Rmb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XHJcbiAgICAgIHttZXNzYWdlU2VudCAmJiA8cD5NZXNzYWdlIFNlbnQ8L3A+fVxyXG4gICAgICAgIDxsYWJlbCB0eXBlPVwibmFtZVwiID5OYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPSdZb3VyIE5hbWUnIHZhbHVlPXtmb3JtRGF0YS5uYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgdHlwZT1cImVtYWlsXCIgPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPSdZb3VyIEVtYWlsJyB2YWx1ZT17Zm9ybURhdGEuZW1haWx9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCB0eXBlPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHBsYWNlaG9sZGVyPSdZb3VyIE1lc3NhZ2UnIHZhbHVlPXtmb3JtRGF0YS5tZXNzYWdlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZD48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2IwYzMwNmU3MGQwMzZiZjAxZWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImluaXRpYWxGb3JtRGF0YSIsIm5hbWUiLCJlbWFpbCIsIm1lc3NhZ2UiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsIm1lc3NhZ2VTZW50Iiwic2V0TWVzc2FnZVNlbnQiLCJoYW5kbGVDYW5jZWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2Rm9ybURhdGEiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJyZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=