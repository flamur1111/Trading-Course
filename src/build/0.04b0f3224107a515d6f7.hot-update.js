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
  function handleSubmit(event) {
    event.preventDefault();
    // Handle form submission, e.g. send data to backend
    setSubmitted(true);
  }
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (submitted) {
      var timer = setTimeout(function () {
        setSubmitted(false);
        setName('');
        setEmail('');
        setMessage('');
      }, 5000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [submitted]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "contactform",
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }, "Submit")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2a9a489e7eca2d6e9cdf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNGIwZjMyMjQxMDdhNTE1ZDZmNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUUxQixTQUFTRyxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUEwQlQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFrQ2pCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QixTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7SUFDM0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCO0lBQ0FILFlBQVksQ0FBQyxJQUFJLENBQUM7RUFDcEI7RUFFQW5CLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlrQixTQUFTLEVBQUU7TUFDYixJQUFNSyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzdCTCxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25CWixPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1hJLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDWkksVUFBVSxDQUFDLEVBQUUsQ0FBQztNQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsT0FBTztRQUFBLE9BQU1VLFlBQVksQ0FBQ0YsS0FBSyxDQUFDO01BQUE7SUFDbEM7RUFDRixDQUFDLEVBQUUsQ0FBQ0wsU0FBUyxDQUFDLENBQUM7RUFFZixvQkFDRWpCLDBEQUFBO0lBQU0wQixTQUFTLEVBQUMsYUFBYTtJQUFDQyxRQUFRLEVBQUVSO0VBQWEsZ0JBQ3JEbkIsMERBQUEsQ0FBQUEsdURBQUEscUJBQ01BLDBEQUFBLGdCQUFPLE9BRUwsZUFBQUEsMERBQUE7SUFBTzZCLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRXpCLElBQUs7SUFBQzBCLFFBQVEsRUFBRSxTQUFBQSxTQUFBWCxLQUFLO01BQUEsT0FBSWQsT0FBTyxDQUFDYyxLQUFLLENBQUNZLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLENBQzVFLGVBQ1I5QiwwREFBQSxnQkFBTyxRQUVMLGVBQUFBLDBEQUFBO0lBQU82QixJQUFJLEVBQUMsT0FBTztJQUFDQyxLQUFLLEVBQUVyQixLQUFNO0lBQUNzQixRQUFRLEVBQUUsU0FBQUEsU0FBQVgsS0FBSztNQUFBLE9BQUlWLFFBQVEsQ0FBQ1UsS0FBSyxDQUFDWSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxDQUMvRSxlQUNSOUIsMERBQUEsZ0JBQU8sVUFFTCxlQUFBQSwwREFBQTtJQUFVOEIsS0FBSyxFQUFFakIsT0FBUTtJQUFDa0IsUUFBUSxFQUFFLFNBQUFBLFNBQUFYLEtBQUs7TUFBQSxPQUFJTixVQUFVLENBQUNNLEtBQUssQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsQ0FDekUsZUFDUjlCLDBEQUFBO0lBQVE2QixJQUFJLEVBQUM7RUFBUSxHQUFDLFFBQU0sQ0FBUyxDQUNwQyxDQUVBO0FBRVg7QUFFQSxpRUFBZTVCLFdBQVc7Ozs7Ozs7O1VDakQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9Db250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiBzZW5kIGRhdGEgdG8gYmFja2VuZFxyXG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdWJtaXR0ZWQpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtzdWJtaXR0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nY29udGFjdGZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgPD5cclxuICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgTmFtZTpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICBFbWFpbDpcclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICBNZXNzYWdlOlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIFxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhOWE0ODllN2VjYTJkNmU5Y2RmXCIpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRpbWVyIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIkZyYWdtZW50IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9