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
  useEffect(function () {
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
  }, "Submit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    onClick: handleCancel
  }, "Cancel")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactForm);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _AddCourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    param = _useState2[0],
    setParam = _useState2[1];
  var handleLoginSuccess = function handleLoginSuccess(param) {
    setParam(param);
  };
  var user = JSON.parse(localStorage.getItem('user'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    paramStateOfUser: param
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Wrapper__WEBPACK_IMPORTED_MODULE_6__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/contact",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/about",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AboutUS__WEBPACK_IMPORTED_MODULE_8__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/courses",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddCourse__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
    path: "/Login",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      handleLoginSuccess: handleLoginSuccess
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c7b2d9dc92e73a848d81")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDc0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFcEUsMERBQUEsQ0FBQ0UsZ0RBQVc7RUFBRyxFQUFHLGVBQ2xERiwwREFBQSxDQUFDNkMsb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXBFLDBEQUFBLENBQUN3RCxnREFBTztFQUFHLEVBQUcsZUFDNUN4RCwwREFBQSxDQUFDNkMsb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRXBFLDBEQUFBLENBQUNxRCxrREFBUztFQUFHLEVBQUcsZUFDaERyRCwwREFBQSxDQUFDNkMsb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRXBFLDBEQUFBLENBQUN1RCw4Q0FBUztNQUFDSyxrQkFBa0IsRUFBRUE7SUFBbUI7RUFBRyxFQUFHLENBQzdFLENBQ0ksZUFDYjVELDBEQUFBLENBQUNvRCxnREFBYSxPQUFFLGVBQ2hCcEQsMERBQUEsQ0FBQ2tELCtDQUFNLE9BQUUsQ0FHVjtBQUVYLENBQUM7QUFDRFAsNkNBQWUsZUFFZjNDLDBEQUFBLENBQUN5RCxHQUFHLE9BQUUsRUFFTmEsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDbkQvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9Db250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24sIGUuZy4gc2VuZCBkYXRhIHRvIGJhY2tlbmRcclxuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3VibWl0dGVkKSB7XHJcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcclxuICAgICAgICBzZXROYW1lKCcnKTtcclxuICAgICAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICAgICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICAgIH0sIDUwMDApO1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgIH1cclxuICB9LCBbc3VibWl0dGVkXSk7XHJcbiAgXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjb250YWN0Zm9ybScgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGgxPkNvbnRhY3QgVXM8L2gxPlxyXG4gICAgICB7bWVzc2FnZVNlbnQgJiYgPHA+TWVzc2FnZSBTZW50PC9wPn1cclxuICAgICAgICA8bGFiZWwgdHlwZT1cIm5hbWVcIiA+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj0nWW91ciBOYW1lJyB2YWx1ZT17Zm9ybURhdGEubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIHR5cGU9XCJlbWFpbFwiID5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj0nWW91ciBFbWFpbCcgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgdHlwZT1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cclxuICAgICAgICA8dGV4dGFyZWEgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj0nWW91ciBNZXNzYWdlJyB2YWx1ZT17Zm9ybURhdGEubWVzc2FnZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gcmVxdWlyZWQ+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2FuY2VsfT5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm07IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEdvVG9Ub3BCdXR0b24gZnJvbSBcIi4vR29Ub1RvcFwiO1xyXG5pbXBvcnQgQWRkQ291cnNlIGZyb20gXCIuL0FkZENvdXJzZVwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3BhcmFtLCBzZXRQYXJhbV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VjY2VzcyA9IChwYXJhbSkgPT57XHJcbiAgICAgICAgc2V0UGFyYW0ocGFyYW0pXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiBwYXJhbVN0YXRlT2ZVc2VyPXtwYXJhbX0vPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0Rm9ybS8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dFVzLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdXJzZXNcIiBlbGVtZW50PXs8QWRkQ291cnNlLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL0xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSBoYW5kbGVMb2dpblN1Y2Nlc3M9e2hhbmRsZUxvZ2luU3VjY2Vzc30vPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbjxBcHAvPixcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjN2IyZDlkYzkyZTczYTg0OGQ4MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29udGFjdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIm1lc3NhZ2VTZW50IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImZvcm1EYXRhIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJyZXF1aXJlZCIsIm9uQ2xpY2siLCJoYW5kbGVDYW5jZWwiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiRm9vdGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsIkdvVG9Ub3BCdXR0b24iLCJBZGRDb3Vyc2UiLCJXcmFwcGVyIiwiTG9naW5QYWdlIiwiQWJvdXRVcyIsIkFwcCIsInBhcmFtIiwic2V0UGFyYW0iLCJoYW5kbGVMb2dpblN1Y2Nlc3MiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcmFtU3RhdGVPZlVzZXIiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9