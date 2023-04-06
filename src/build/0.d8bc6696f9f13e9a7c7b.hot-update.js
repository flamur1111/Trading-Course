"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
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

function LoginForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    username = _useState2[0],
    setUsername = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    password = _useState4[0],
    setPassword = _useState4[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    // add code to authenticate user
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Username:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: username,
    onChange: function onChange(event) {
      return setUsername(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", null, "Password:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: password,
    onChange: function onChange(event) {
      return setPassword(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Login"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);









var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/courses",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactForm__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoginForm_js__WEBPACK_IMPORTED_MODULE_7__["default"], null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("924b71d3fae28ca2688c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kOGJjNjY5NmY5ZjEzZTlhN2M3Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUVqQyxTQUFTQyxTQUFTQSxDQUFBLEVBQUc7RUFDbkIsSUFBQUMsU0FBQSxHQUFnQ0YsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBckNHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksVUFBQSxHQUFnQ1AsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVEsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFFNUIsSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlDLEtBQUssRUFBSztJQUM5QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7SUFDdEI7RUFDRixDQUFDOztFQUVELG9CQUNFQyxLQUFBLENBQUFDLGFBQUE7SUFBTUMsUUFBUSxFQUFFTDtFQUFhLGdCQUMzQkcsS0FBQSxDQUFBQyxhQUFBLGdCQUFPLFdBRUwsZUFBQUQsS0FBQSxDQUFBQyxhQUFBO0lBQU9FLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRWIsUUFBUztJQUFDYyxRQUFRLEVBQUUsU0FBQUEsU0FBQ1AsS0FBSztNQUFBLE9BQUtOLFdBQVcsQ0FBQ00sS0FBSyxDQUFDUSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxDQUN0RixlQUNSSixLQUFBLENBQUFDLGFBQUEsZ0JBQU8sV0FFTCxlQUFBRCxLQUFBLENBQUFDLGFBQUE7SUFBT0UsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFVCxRQUFTO0lBQUNVLFFBQVEsRUFBRSxTQUFBQSxTQUFDUCxLQUFLO01BQUEsT0FBS0YsV0FBVyxDQUFDRSxLQUFLLENBQUNRLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLENBQ3RGLGVBQ1JKLEtBQUEsQ0FBQUMsYUFBQTtJQUFRRSxJQUFJLEVBQUM7RUFBUSxHQUFDLE9BQUssQ0FBUyxDQUMvQjtBQUVYO0FBRUEsaUVBQWVoQixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJlO0FBQ047QUFRTDtBQUNFO0FBQ29CO0FBQ1o7QUFDRTtBQUNSO0FBQ087QUFLdkMsSUFBTWlDLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxvQkFDSXBCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDUyx3REFBVSxxQkFDWFQsMERBQUEsQ0FBQ2dCLHlEQUFnQixPQUFHLGVBQ3BCaEIsMERBQUEsQ0FBQ1csb0RBQU0scUJBQ1BYLDBEQUFBLENBQUNVLG1EQUFLO0lBQUNZLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRXZCLDBEQUFBLENBQUNtQixnREFBTztFQUFJLEVBQUcsZUFDeENuQiwwREFBQSxDQUFDVSxtREFBSztJQUFDWSxJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUV2QiwwREFBQSxDQUFDa0Isb0RBQVc7RUFBRyxFQUFHLGVBQ2xEbEIsMERBQUEsQ0FBQ1UsbURBQUs7SUFBQ1ksSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFdkIsMERBQUEsQ0FBQ2IscURBQVM7RUFBRyxFQUFTLENBQzdDLENBQ0ksZUFDYmEsMERBQUEsQ0FBQ2lCLGdEQUFhLE9BQUUsZUFDaEJqQiwwREFBQSxDQUFDZSwrQ0FBTSxPQUFFLENBR1Y7QUFFWCxDQUFDO0FBQ0RQLDZDQUFlLGVBRWZSLDBEQUFBLENBQUNvQixHQUFHLE9BQUUsRUFFTkssUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDMUMvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvTG9naW5Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2dpbkZvcm0oKSB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGFkZCBjb2RlIHRvIGF1dGhlbnRpY2F0ZSB1c2VyXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBVc2VybmFtZTpcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxsYWJlbD5cclxuICAgICAgICBQYXNzd29yZDpcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEdvVG9Ub3BCdXR0b24gZnJvbSBcIi4vR29Ub1RvcFwiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdEZvcm1cIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xyXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gXCIuL0xvZ2luRm9ybS5qc1wiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdXJzZXNcIiBlbGVtZW50PXs8Q29udGFjdEZvcm0vPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxMb2dpbkZvcm0vPn0+PC9Sb3V0ZT5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbjxBcHAvPixcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MjRiNzFkM2ZhZTI4Y2EyNjg4Y1wiKSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxvZ2luRm9ybSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwib25TdWJtaXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiR29Ub1RvcEJ1dHRvbiIsIkNvbnRhY3RGb3JtIiwiV3JhcHBlciIsIkFwcCIsIkZyYWdtZW50IiwicGF0aCIsImVsZW1lbnQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==