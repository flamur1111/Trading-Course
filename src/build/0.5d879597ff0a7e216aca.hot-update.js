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
  }, "Contact Us"), messageSent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "message"
  }, "Message Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
/******/ 	__webpack_require__.h = () => ("eee40c1e0ffafc726847")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDg3OTU5N2ZmMGE3ZTIxNmFjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUUxQixTQUFTRyxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBQUMsU0FBQSxHQUF3QkosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUssVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUEwQlQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUE4QmIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFrQ2pCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQXNDckIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXNCLFdBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUEzQ0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUdsQyxTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7SUFDM0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCO0lBQ0FILGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDcEJKLFlBQVksQ0FBQyxJQUFJLENBQUM7RUFFcEI7RUFFQW5CLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlrQixTQUFTLEVBQUU7TUFDYixJQUFNUyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzdCVCxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25CSSxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3JCaEIsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUNYSSxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ1pJLFVBQVUsQ0FBQyxFQUFFLENBQUM7TUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLE9BQU87UUFBQSxPQUFNYyxZQUFZLENBQUNGLEtBQUssQ0FBQztNQUFBO0lBQ2xDO0VBQ0YsQ0FBQyxFQUFFLENBQUNULFNBQVMsQ0FBQyxDQUFDO0VBR2Ysb0JBR0VqQiwwREFBQTtJQUFNOEIsU0FBUyxFQUFDLGFBQWE7SUFBQ0MsUUFBUSxFQUFFUjtFQUFhLGdCQUNuRHZCLDBEQUFBO0lBQUk4QixTQUFTLEVBQUM7RUFBVyxHQUFDLFlBQVUsQ0FBSyxFQUN4Q1QsV0FBVyxpQkFBSXJCLDBEQUFBO0lBQUk4QixTQUFTLEVBQUM7RUFBUyxHQUFDLGNBQVksQ0FBSyxlQUN6RDlCLDBEQUFBLGdCQUFPLE9BRUwsZUFBQUEsMERBQUE7SUFBT2dDLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRTVCLElBQUs7SUFBQzZCLFFBQVEsRUFBRSxTQUFBQSxTQUFBVixLQUFLO01BQUEsT0FBSWxCLE9BQU8sQ0FBQ2tCLEtBQUssQ0FBQ1csTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQSxDQUFDO0lBQUNHLFFBQVE7RUFBQSxFQUFHLENBQ3JGLGVBQ1JwQywwREFBQSxnQkFBTyxRQUVMLGVBQUFBLDBEQUFBO0lBQU9nQyxJQUFJLEVBQUMsT0FBTztJQUFDQyxLQUFLLEVBQUV4QixLQUFNO0lBQUN5QixRQUFRLEVBQUUsU0FBQUEsU0FBQVYsS0FBSztNQUFBLE9BQUlkLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDVyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBLENBQUM7SUFBQ0csUUFBUTtFQUFBLEVBQUcsQ0FDeEYsZUFDUnBDLDBEQUFBLGdCQUFPLFVBRUwsZUFBQUEsMERBQUE7SUFBVWlDLEtBQUssRUFBRXBCLE9BQVE7SUFBQ3FCLFFBQVEsRUFBRSxTQUFBQSxTQUFBVixLQUFLO01BQUEsT0FBSVYsVUFBVSxDQUFDVSxLQUFLLENBQUNXLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUEsQ0FBQztJQUFDRyxRQUFRO0VBQUEsRUFBRyxDQUNsRixlQUNScEMsMERBQUE7SUFBUWdDLElBQUksRUFBQztFQUFRLEdBQUMsUUFBTSxDQUFTLENBR2hDO0FBRVg7QUFFQSxpRUFBZS9CLFdBQVc7Ozs7Ozs7O1VDMUQxQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9Db250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbWVzc2FnZVNlbnQsIHNldE1lc3NhZ2VTZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24sIGUuZy4gc2VuZCBkYXRhIHRvIGJhY2tlbmRcclxuICAgIHNldE1lc3NhZ2VTZW50KHRydWUpO1xyXG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG5cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3VibWl0dGVkKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcclxuICAgICAgICBzZXRNZXNzYWdlU2VudChmYWxzZSk7XHJcbiAgICAgICAgc2V0TmFtZSgnJyk7XHJcbiAgICAgICAgc2V0RW1haWwoJycpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICB9XHJcbiAgfSwgW3N1Ym1pdHRlZF0pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcblxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPSdjb250YWN0Zm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9J2NvbnRhY3R1cyc+Q29udGFjdCBVczwvaDE+XHJcbiAgICAgIHttZXNzYWdlU2VudCAmJiA8aDMgY2xhc3NOYW1lPSdtZXNzYWdlJz5NZXNzYWdlIFNlbnQ8L2gzPn1cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIE5hbWU6XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtldmVudCA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBFbWFpbDpcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cclxuICAgICAgPC9sYWJlbD5cclxuICAgICAgPGxhYmVsPlxyXG4gICAgICAgIE1lc3NhZ2U6XHJcbiAgICAgICAgPHRleHRhcmVhIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHJcblxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVlZTQwYzFlMGZmYWZjNzI2ODQ3XCIpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVhY3QiLCJDb250YWN0Rm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm5hbWUiLCJzZXROYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlbWFpbCIsInNldEVtYWlsIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwibWVzc2FnZVNlbnQiLCJzZXRNZXNzYWdlU2VudCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==