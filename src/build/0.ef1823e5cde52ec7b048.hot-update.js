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
      }, 5000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [submitted]);
  var handleMessageChange = function handleMessageChange(event) {
    setMessage(event.target.value);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "contactform",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Contact Us"), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Message Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Message:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    value: message,
    onChange: function onChange(event) {
      return setMessage(event.target.value);
    }
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
/******/ 	__webpack_require__.h = () => ("c332d8c00692cfbf8853")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lZjE4MjNlNWNkZTUyZWM3YjA0OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUUxQixTQUFTRyxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUEwQlQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFrQ2pCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQXNDckIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXNCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUEzQ0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUdsQyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7SUFDM0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCO0lBQ0FILGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDcEJKLFlBQVksQ0FBQyxJQUFJLENBQUM7RUFFcEI7RUFFQW5CLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlrQixTQUFTLEVBQUU7TUFDYixJQUFNUyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzdCVCxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25CSSxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JCaEIsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYSSxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ1pJLFVBQVUsQ0FBQyxFQUFFLENBQUM7TUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLE9BQU87UUFBQSxPQUFNYyxZQUFZLENBQUNGLEtBQUssQ0FBQztNQUFBO0lBQ2xDO0VBQ0YsQ0FBQyxFQUFFLENBQUNULFNBQVMsQ0FBQyxDQUFDO0VBRWYsSUFBTVksbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFtQkEsQ0FBSUwsS0FBSyxFQUFLO0lBQ3JDVixVQUFVLENBQUNVLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxLQUFLLENBQUM7RUFDaEMsQ0FBQztFQUVELG9CQUdFL0IsMERBQUE7SUFBTWlDLFNBQVMsRUFBQyxhQUFhO0lBQUNDLFFBQVEsRUFBRVg7RUFBYSxnQkFDM0N2QiwwREFBQSxhQUFJLFlBQVUsQ0FBSyxFQUMxQnFCLFdBQVcsaUJBQUlyQiwwREFBQSxZQUFHLGNBQVksQ0FBSSxlQUMvQkEsMERBQUEsZ0JBQU8sT0FFTCxlQUFBQSwwREFBQTtJQUFPbUMsSUFBSSxFQUFDLE1BQU07SUFBQ0osS0FBSyxFQUFFMUIsSUFBSztJQUFDK0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFaLEtBQUs7TUFBQSxPQUFJbEIsT0FBTyxDQUFDa0IsS0FBSyxDQUFDTSxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxDQUM1RSxlQUNSL0IsMERBQUEsZ0JBQU8sUUFFTCxlQUFBQSwwREFBQTtJQUFPbUMsSUFBSSxFQUFDLE9BQU87SUFBQ0osS0FBSyxFQUFFdEIsS0FBTTtJQUFDMkIsUUFBUSxFQUFFLFNBQUFBLFNBQUFaLEtBQUs7TUFBQSxPQUFJZCxRQUFRLENBQUNjLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsQ0FDL0UsZUFDUi9CLDBEQUFBLGdCQUFPLFVBRUwsZUFBQUEsMERBQUE7SUFBVStCLEtBQUssRUFBRWxCLE9BQVE7SUFBQ3VCLFFBQVEsRUFBRSxTQUFBQSxTQUFBWixLQUFLO01BQUEsT0FBSVYsVUFBVSxDQUFDVSxLQUFLLENBQUNNLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLENBQ3pFLGVBQ1IvQiwwREFBQTtJQUFRbUMsSUFBSSxFQUFDO0VBQVEsR0FBQyxRQUFNLENBQVMsQ0FHcEM7QUFFWDtBQUVBLGlFQUFlbEMsV0FBVzs7Ozs7Ozs7VUM3RDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vc3JjL2pzL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQ29udGFjdEZvcm0oKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZXNzYWdlU2VudCwgc2V0TWVzc2FnZVNlbnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiBzZW5kIGRhdGEgdG8gYmFja2VuZFxyXG4gICAgc2V0TWVzc2FnZVNlbnQodHJ1ZSk7XHJcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdWJtaXR0ZWQpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE1lc3NhZ2VTZW50KGZhbHNlKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbc3VibWl0dGVkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9J2NvbnRhY3Rmb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XHJcbiAgICAgIHttZXNzYWdlU2VudCAmJiA8cD5NZXNzYWdlIFNlbnQ8L3A+fVxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIE1lc3NhZ2U6XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzMzMmQ4YzAwNjkyY2ZiZjg4NTNcIikiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZWFjdCIsIkNvbnRhY3RGb3JtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibmFtZSIsInNldE5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVtYWlsIiwic2V0RW1haWwiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJtZXNzYWdlU2VudCIsInNldE1lc3NhZ2VTZW50IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZU1lc3NhZ2VDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=