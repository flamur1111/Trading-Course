"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
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

function GoToTopButton() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    scrollPosition = _useState2[0],
    setScrollPosition = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  var showGoToTop = scrollPosition > 100;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, showGoToTop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "GoTop",
    onClick: function onClick() {
      return window.scrollTo(0, 0);
    }
  }, "Go To Top"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoToTopButton);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a87d818414d0531cf47")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jODhjOWJlYjY2YjMwYmVjZDhlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxhQUFhQSxDQUFBLEVBQUc7RUFDdkIsSUFBQUMsU0FBQSxHQUE0Q0gsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaERHLGNBQWMsR0FBQUYsVUFBQTtJQUFFRyxpQkFBaUIsR0FBQUgsVUFBQTtFQUV4Q0gsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN6QixJQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVztNQUNuQ0osaUJBQWlCLENBQUNFLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRURDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSixZQUFZLENBQUM7SUFFL0MsT0FBTyxZQUFNO01BQ1hFLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUM7SUFDcEQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNTSxXQUFXLEdBQUdSLGNBQWMsR0FBRyxHQUFHO0VBRXhDLG9CQUNFUCwwREFBQSxDQUFBQSx1REFBQSxRQUNHZSxXQUFXLGlCQUNWZiwwREFBQTtJQUFRa0IsU0FBUyxFQUFDLE9BQU87SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNUixNQUFNLENBQUNTLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFdBQVMsQ0FDMUUsQ0FDQTtBQUVQO0FBRUEsaUVBQWVqQixhQUFhOzs7Ozs7OztVQzdCNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL0dvVG9Ub3AuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIEdvVG9Ub3BCdXR0b24oKSB7XHJcbiAgY29uc3QgW3Njcm9sbFBvc2l0aW9uLCBzZXRTY3JvbGxQb3NpdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgcG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc2hvd0dvVG9Ub3AgPSBzY3JvbGxQb3NpdGlvbiA+IDEwMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzaG93R29Ub1RvcCAmJiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J0dvVG9wJyBvbkNsaWNrPXsoKSA9PiB3aW5kb3cuc2Nyb2xsVG8oMCwgMCl9PkdvIFRvIFRvcDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29Ub1RvcEJ1dHRvbjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YTg3ZDgxODQxNGQwNTMxY2Y0N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR29Ub1RvcEJ1dHRvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93R29Ub1RvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzY3JvbGxUbyJdLCJzb3VyY2VSb290IjoiIn0=