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
    onClick: function onClick() {
      return window.scrollTo(0, 0);
    }
  }, "Go To Top"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoToTopButton);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _LearnMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _MainBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _GoToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);








var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainBox__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LearnMore__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Card__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_7__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a273f06a9284df53e8be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZTA2NDkxZmE4YjkwZGIxNGYwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxTQUFTRyxhQUFhQSxDQUFBLEVBQUc7RUFDdkIsSUFBQUMsU0FBQSxHQUE0Q0gsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQUksVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaERHLGNBQWMsR0FBQUYsVUFBQTtJQUFFRyxpQkFBaUIsR0FBQUgsVUFBQTtFQUV4Q0gsZ0RBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBTU8sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztNQUN6QixJQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVztNQUNuQ0osaUJBQWlCLENBQUNFLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRURDLE1BQU0sQ0FBQ0UsZ0JBQWdCLENBQUMsUUFBUSxFQUFFSixZQUFZLENBQUM7SUFFL0MsT0FBTyxZQUFNO01BQ1hFLE1BQU0sQ0FBQ0csbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUM7SUFDcEQsQ0FBQztFQUNILENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNTSxXQUFXLEdBQUdSLGNBQWMsR0FBRyxHQUFHO0VBRXhDLG9CQUNFUCwwREFBQSxDQUFBQSx1REFBQSxRQUNHZSxXQUFXLGlCQUNWZiwwREFBQTtJQUFRa0IsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNUCxNQUFNLENBQUNRLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxHQUFDLFdBQVMsQ0FDeEQsQ0FDQTtBQUVQO0FBRUEsaUVBQWVoQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCVztBQUNOO0FBQ1A7QUFDSTtBQUNvQjtBQUNkO0FBQ0o7QUFDTTtBQUN0QyxJQUFNd0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUEsRUFBUztFQUNkLG9CQUNJM0IsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUN3Qix5REFBZ0IsT0FBRyxlQUNwQnhCLDBEQUFBLENBQUMwQixnREFBTyxPQUFFLGVBQ1YxQiwwREFBQSxDQUFDeUIsa0RBQVMsT0FBRSxlQUNaekIsMERBQUEsQ0FBQ3NCLDZDQUFJLE9BQUUsZUFDUHRCLDBEQUFBLENBQUN1QiwrQ0FBTSxPQUFFLGVBQ1R2QiwwREFBQSxDQUFDRyxnREFBYSxPQUFFLENBRWpCO0FBRVgsQ0FBQztBQUNEa0IsNkNBQWUsZUFBQ3JCLDBEQUFBLENBQUMyQixHQUFHLE9BQUUsRUFBRUUsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDckJ2RCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0V4ZXJjaXNlXzEvanMvR29Ub1RvcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9FeGVyY2lzZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gR29Ub1RvcEJ1dHRvbigpIHtcclxuICBjb25zdCBbc2Nyb2xsUG9zaXRpb24sIHNldFNjcm9sbFBvc2l0aW9uXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgICAgc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzaG93R29Ub1RvcCA9IHNjcm9sbFBvc2l0aW9uID4gMTAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3Nob3dHb1RvVG9wICYmIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX0+R28gVG8gVG9wPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb1RvVG9wQnV0dG9uOyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlck5hdmlnYXRpb24gZnJvbSBcIi4vSGVhZGVyTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTGVhcm5Nb3JlIGZyb20gXCIuL0xlYXJuTW9yZVwiO1xyXG5pbXBvcnQgTWFpbkJveCBmcm9tIFwiLi9NYWluQm94XCI7XHJcbmltcG9ydCBHb1RvVG9wQnV0dG9uIGZyb20gXCIuL0dvVG9Ub3BcIjtcclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICA8TWFpbkJveC8+XHJcbiAgICAgICAgICAgIDxMZWFybk1vcmUvPlxyXG4gICAgICAgICAgICA8Q2FyZC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICA8R29Ub1RvcEJ1dHRvbi8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhMjczZjA2YTkyODRkZjUzZThiZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiR29Ub1RvcEJ1dHRvbiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNjcm9sbFBvc2l0aW9uIiwic2V0U2Nyb2xsUG9zaXRpb24iLCJoYW5kbGVTY3JvbGwiLCJwb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93R29Ub1RvcCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm9uQ2xpY2siLCJzY3JvbGxUbyIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiQ2FyZCIsIkZvb3RlciIsIkhlYWRlck5hdmlnYXRpb24iLCJMZWFybk1vcmUiLCJNYWluQm94IiwiQXBwIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=