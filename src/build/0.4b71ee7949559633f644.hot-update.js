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
  return /*#__PURE__*/React.createElement("form", {
    className: "contactform",
    onSubmit: handleSubmit
  }, submitted ? /*#__PURE__*/React.createElement("p", null, "Thank you for your submission!") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", null, "Name:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: function onChange(event) {
      return setName(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", null, "Email:", /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: function onChange(event) {
      return setEmail(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("label", null, "Message:", /*#__PURE__*/React.createElement("textarea", {
    value: message,
    onChange: function onChange(event) {
      return setMessage(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
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
/******/ 	__webpack_require__.h = () => ("888aede8ee44e588a3b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YjcxZWU3OTQ5NTU5NjMzZjY0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUU1QyxTQUFTRSxXQUFXQSxDQUFBLEVBQUc7RUFDckIsSUFBQUMsU0FBQSxHQUF3QkgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEIsSUFBQUksVUFBQSxHQUEwQlIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQVMsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBL0JFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDdEIsSUFBQUcsVUFBQSxHQUE4QlosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWEsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBbkNFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUFrQ2hCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFpQixVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUExQ0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QixTQUFTRyxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7SUFDM0JBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFO0lBQ3RCO0lBQ0FILFlBQVksQ0FBQyxJQUFJLENBQUM7RUFDcEI7RUFFQWxCLGdEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlpQixTQUFTLEVBQUU7TUFDYixJQUFNSyxLQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO1FBQzdCTCxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ25CWixPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ1hJLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDWkksVUFBVSxDQUFDLEVBQUUsQ0FBQztNQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsT0FBTztRQUFBLE9BQU1VLFlBQVksQ0FBQ0YsS0FBSyxDQUFDO01BQUE7SUFDbEM7RUFDRixDQUFDLEVBQUUsQ0FBQ0wsU0FBUyxDQUFDLENBQUM7RUFFZixvQkFDRVEsS0FBQSxDQUFBQyxhQUFBO0lBQU1DLFNBQVMsRUFBQyxhQUFhO0lBQUNDLFFBQVEsRUFBRVQ7RUFBYSxHQUNsREYsU0FBUyxnQkFDUlEsS0FBQSxDQUFBQyxhQUFBLFlBQUcsZ0NBQThCLENBQUksZ0JBRXJDRCxLQUFBLENBQUFDLGFBQUEsQ0FBQUQsS0FBQSxDQUFBSSxRQUFBLHFCQUNFSixLQUFBLENBQUFDLGFBQUEsZ0JBQU8sT0FFTCxlQUFBRCxLQUFBLENBQUFDLGFBQUE7SUFBT0ksSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFMUIsSUFBSztJQUFDMkIsUUFBUSxFQUFFLFNBQUFBLFNBQUFaLEtBQUs7TUFBQSxPQUFJZCxPQUFPLENBQUNjLEtBQUssQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7SUFBQTtFQUFDLEVBQUcsQ0FDNUUsZUFDUk4sS0FBQSxDQUFBQyxhQUFBLGdCQUFPLFFBRUwsZUFBQUQsS0FBQSxDQUFBQyxhQUFBO0lBQU9JLElBQUksRUFBQyxPQUFPO0lBQUNDLEtBQUssRUFBRXRCLEtBQU07SUFBQ3VCLFFBQVEsRUFBRSxTQUFBQSxTQUFBWixLQUFLO01BQUEsT0FBSVYsUUFBUSxDQUFDVSxLQUFLLENBQUNhLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO0lBQUE7RUFBQyxFQUFHLENBQy9FLGVBQ1JOLEtBQUEsQ0FBQUMsYUFBQSxnQkFBTyxVQUVMLGVBQUFELEtBQUEsQ0FBQUMsYUFBQTtJQUFVSyxLQUFLLEVBQUVsQixPQUFRO0lBQUNtQixRQUFRLEVBQUUsU0FBQUEsU0FBQVosS0FBSztNQUFBLE9BQUlOLFVBQVUsQ0FBQ00sS0FBSyxDQUFDYSxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUFBO0VBQUMsRUFBRyxDQUN6RSxlQUNSTixLQUFBLENBQUFDLGFBQUE7SUFBUUksSUFBSSxFQUFDO0VBQVEsR0FBQyxRQUFNLENBQVMsQ0FFeEMsQ0FDSTtBQUVYO0FBRUEsaUVBQWU3QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHVCO0FBQ2hCO0FBUUw7QUFDRTtBQUNvQjtBQUNaO0FBQ0Y7QUFDSjtBQUNBO0FBQ0E7QUFDSTtBQUtwQyxJQUFNZ0QsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLElBQUEvQyxTQUFBLEdBQTBCSCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBSSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ2dELEtBQUssR0FBQS9DLFVBQUE7SUFBRWdELFFBQVEsR0FBQWhELFVBQUE7RUFDdEIsSUFBTWlELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUlGLEtBQUssRUFBSTtJQUNqQ0MsUUFBUSxDQUFDRCxLQUFLLENBQUM7RUFDbkIsQ0FBQztFQUNELElBQU1HLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3JELG9CQUNJaEMsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNXLHlEQUFVLHFCQUNYWCwwREFBQSxDQUFDa0IseURBQWdCO0lBQUNlLGdCQUFnQixFQUFFUjtFQUFNLEVBQUUsZUFDNUN6QiwwREFBQSxDQUFDYSxxREFBTSxxQkFDUGIsMERBQUEsQ0FBQ1ksb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sZUFBRW5DLDBEQUFBLENBQUNxQixnREFBTztFQUFJLEVBQUcsZUFDeENyQiwwREFBQSxDQUFDWSxvREFBSztJQUFDc0IsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFbkMsMERBQUEsQ0FBQ3hCLGdEQUFXO0VBQUcsRUFBRyxlQUNsRHdCLDBEQUFBLENBQUNZLG9EQUFLO0lBQUNzQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUVuQywwREFBQSxDQUFDdUIsZ0RBQU87RUFBRyxFQUFHLGVBQzVDdkIsMERBQUEsQ0FBQ1ksb0RBQUs7SUFBQ3NCLElBQUksRUFBQyxVQUFVO0lBQUNDLE9BQU8sZUFBRW5DLDBEQUFBLENBQUNvQixrREFBUztFQUFHLEVBQUcsZUFDaERwQiwwREFBQSxDQUFDWSxvREFBSztJQUFDc0IsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFbkMsMERBQUEsQ0FBQ3NCLDhDQUFTO01BQUNLLGtCQUFrQixFQUFFQTtJQUFtQjtFQUFHLEVBQUcsQ0FDN0UsQ0FDSSxlQUNiM0IsMERBQUEsQ0FBQ21CLGdEQUFhLE9BQUUsZUFDaEJuQiwwREFBQSxDQUFDaUIsK0NBQU0sT0FBRSxDQUdWO0FBRVgsQ0FBQztBQUNEUCw2Q0FBZSxlQUVmViwwREFBQSxDQUFDd0IsR0FBRyxPQUFFLEVBRU5hLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ25EL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RGb3JtKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiBzZW5kIGRhdGEgdG8gYmFja2VuZFxyXG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdWJtaXR0ZWQpIHtcclxuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xyXG4gICAgICAgIHNldE5hbWUoJycpO1xyXG4gICAgICAgIHNldEVtYWlsKCcnKTtcclxuICAgICAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgICAgfSwgNTAwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfVxyXG4gIH0sIFtzdWJtaXR0ZWRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT0nY29udGFjdGZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7c3VibWl0dGVkID8gKFxyXG4gICAgICAgIDxwPlRoYW5rIHlvdSBmb3IgeW91ciBzdWJtaXNzaW9uITwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICBOYW1lOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIEVtYWlsOlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgIE1lc3NhZ2U6XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9e2V2ZW50ID0+IHNldE1lc3NhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHtcclxuICAgIEhhc2hSb3V0ZXIsXHJcbiAgICBSb3V0ZSxcclxuICAgIFJvdXRlcyxcclxuICAgIExpbmssXHJcbiAgICBOYXZMaW5rLFxyXG4gICAgT3V0bGV0XHJcbiAgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcIi4vSGVhZGVyTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgR29Ub1RvcEJ1dHRvbiBmcm9tIFwiLi9Hb1RvVG9wXCI7XHJcbmltcG9ydCBBZGRDb3Vyc2UgZnJvbSBcIi4vQWRkQ291cnNlXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuL1dyYXBwZXJcIjtcclxuaW1wb3J0IExvZ2luUGFnZSBmcm9tIFwiLi9Mb2dpblwiO1xyXG5pbXBvcnQgQWJvdXRVcyBmcm9tIFwiLi9BYm91dFVTXCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiLi9Db250YWN0XCI7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcGFyYW0sIHNldFBhcmFtXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGFuZGxlTG9naW5TdWNjZXNzID0gKHBhcmFtKSA9PntcclxuICAgICAgICBzZXRQYXJhbShwYXJhbSlcclxuICAgIH07XHJcbiAgICBjb25zdCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxIZWFkZXJOYXZpZ2F0aW9uIHBhcmFtU3RhdGVPZlVzZXI9e3BhcmFtfS8+XHJcbiAgICAgICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxXcmFwcGVyIC8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb250YWN0XCIgZWxlbWVudD17PENvbnRhY3RGb3JtLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgZWxlbWVudD17PEFib3V0VXMvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY291cnNlc1wiIGVsZW1lbnQ9ezxBZGRDb3Vyc2UvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvTG9naW5cIiBlbGVtZW50PXs8TG9naW5QYWdlIGhhbmRsZUxvZ2luU3VjY2Vzcz17aGFuZGxlTG9naW5TdWNjZXNzfS8+fSAvPlxyXG4gICAgICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8R29Ub1RvcEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuUmVhY3RET00ucmVuZGVyKFxyXG5cclxuPEFwcC8+LFxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIikpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg4OGFlZGU4ZWU0NGU1ODhhM2IyXCIpIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFjdEZvcm0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJuYW1lIiwic2V0TmFtZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1haWwiLCJzZXRFbWFpbCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsIkZyYWdtZW50IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiRm9vdGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsIkdvVG9Ub3BCdXR0b24iLCJBZGRDb3Vyc2UiLCJXcmFwcGVyIiwiTG9naW5QYWdlIiwiQWJvdXRVcyIsIkFwcCIsInBhcmFtIiwic2V0UGFyYW0iLCJoYW5kbGVMb2dpblN1Y2Nlc3MiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcmFtU3RhdGVPZlVzZXIiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9