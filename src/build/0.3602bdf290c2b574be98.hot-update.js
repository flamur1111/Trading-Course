self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Admin\\Desktop\\Projekti Final\\src\\js\\Contact.js: Identifier 'handleMessageChange' has already been declared. (45:8)\n\n\u001b[0m \u001b[90m 43 |\u001b[39m   }\u001b[33m,\u001b[39m [submitted])\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 44 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 45 |\u001b[39m   \u001b[36mconst\u001b[39m handleMessageChange \u001b[33m=\u001b[39m (event) \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 46 |\u001b[39m     setMessage(event\u001b[33m.\u001b[39mtarget\u001b[33m.\u001b[39mvalue)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 47 |\u001b[39m   }\u001b[0m\n\u001b[0m \u001b[90m 48 |\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at ScopeHandler.checkRedeclarationInScope (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:1557:19)\n    at ScopeHandler.declareName (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:1528:12)\n    at JSXParserMixin.declareNameFromIdentifier (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:7535:16)\n    at JSXParserMixin.checkIdentifier (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:7531:12)\n    at JSXParserMixin.checkLVal (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:7470:12)\n    at JSXParserMixin.parseVarId (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:13214:10)\n    at JSXParserMixin.parseVar (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:13187:12)");

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Contact__WEBPACK_IMPORTED_MODULE_9__);
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Contact__WEBPACK_IMPORTED_MODULE_9___default()), null)
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
/******/ 	__webpack_require__.h = () => ("0ee12ae13d638b9c5a60")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNjAyYmRmMjkwYzJiNTc0YmU5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDaEI7QUFRTDtBQUNFO0FBQ29CO0FBQ1o7QUFDRjtBQUNKO0FBQ0E7QUFDQTtBQUNJO0FBS3BDLElBQU1rQixHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2QsSUFBQUMsU0FBQSxHQUEwQmpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUFsQ0csS0FBSyxHQUFBRixVQUFBO0lBQUVHLFFBQVEsR0FBQUgsVUFBQTtFQUN0QixJQUFNSSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQWtCQSxDQUFJRixLQUFLLEVBQUk7SUFDakNDLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDO0VBQ25CLENBQUM7RUFDRCxJQUFNRyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNyRCxvQkFDSTdCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDSSx5REFBVSxxQkFDWEosMERBQUEsQ0FBQ1cseURBQWdCO0lBQUNxQixnQkFBZ0IsRUFBRVY7RUFBTSxFQUFFLGVBQzVDdEIsMERBQUEsQ0FBQ00scURBQU0scUJBQ1BOLDBEQUFBLENBQUNLLG9EQUFLO0lBQUM0QixJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLGVBQUVsQywwREFBQSxDQUFDYyxnREFBTztFQUFJLEVBQUcsZUFDeENkLDBEQUFBLENBQUNLLG9EQUFLO0lBQUM0QixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUVsQywwREFBQSxDQUFDaUIsaURBQVc7RUFBRyxFQUFHLGVBQ2xEakIsMERBQUEsQ0FBQ0ssb0RBQUs7SUFBQzRCLElBQUksRUFBQyxRQUFRO0lBQUNDLE9BQU8sZUFBRWxDLDBEQUFBLENBQUNnQixnREFBTztFQUFHLEVBQUcsZUFDNUNoQiwwREFBQSxDQUFDSyxvREFBSztJQUFDNEIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFbEMsMERBQUEsQ0FBQ2Esa0RBQVM7RUFBRyxFQUFHLGVBQ2hEYiwwREFBQSxDQUFDSyxvREFBSztJQUFDNEIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsT0FBTyxlQUFFbEMsMERBQUEsQ0FBQ2UsOENBQVM7TUFBQ1Msa0JBQWtCLEVBQUVBO0lBQW1CO0VBQUcsRUFBRyxDQUM3RSxDQUNJLGVBQ2J4QiwwREFBQSxDQUFDWSxnREFBYSxPQUFFLGVBQ2hCWiwwREFBQSxDQUFDVSwrQ0FBTSxPQUFFLENBR1Y7QUFFWCxDQUFDO0FBQ0RQLDZDQUFlLGVBRWZILDBEQUFBLENBQUNrQixHQUFHLE9BQUUsRUFFTmtCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7Ozs7OztVQ25EL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7XHJcbiAgICBIYXNoUm91dGVyLFxyXG4gICAgUm91dGUsXHJcbiAgICBSb3V0ZXMsXHJcbiAgICBMaW5rLFxyXG4gICAgTmF2TGluayxcclxuICAgIE91dGxldFxyXG4gIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkZXJOYXZpZ2F0aW9uIGZyb20gXCIuL0hlYWRlck5hdmlnYXRpb25cIjtcclxuaW1wb3J0IEdvVG9Ub3BCdXR0b24gZnJvbSBcIi4vR29Ub1RvcFwiO1xyXG5pbXBvcnQgQWRkQ291cnNlIGZyb20gXCIuL0FkZENvdXJzZVwiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi9XcmFwcGVyXCI7XHJcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSBcIi4vTG9naW5cIjtcclxuaW1wb3J0IEFib3V0VXMgZnJvbSBcIi4vQWJvdXRVU1wiO1xyXG5pbXBvcnQgQ29udGFjdEZvcm0gZnJvbSBcIi4vQ29udGFjdFwiO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3BhcmFtLCBzZXRQYXJhbV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luU3VjY2VzcyA9IChwYXJhbSkgPT57XHJcbiAgICAgICAgc2V0UGFyYW0ocGFyYW0pXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxyXG4gICAgICAgICAgICA8SGVhZGVyTmF2aWdhdGlvbiBwYXJhbVN0YXRlT2ZVc2VyPXtwYXJhbX0vPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8V3JhcHBlciAvPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0Rm9ybS8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dFVzLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvdXJzZXNcIiBlbGVtZW50PXs8QWRkQ291cnNlLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL0xvZ2luXCIgZWxlbWVudD17PExvZ2luUGFnZSBoYW5kbGVMb2dpblN1Y2Nlc3M9e2hhbmRsZUxvZ2luU3VjY2Vzc30vPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbjxBcHAvPixcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZWUxMmFlMTNkNjM4YjljNWE2MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVN0YXRlIiwiUmVhY3RET00iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkZvb3RlciIsIkhlYWRlck5hdmlnYXRpb24iLCJHb1RvVG9wQnV0dG9uIiwiQWRkQ291cnNlIiwiV3JhcHBlciIsIkxvZ2luUGFnZSIsIkFib3V0VXMiLCJDb250YWN0Rm9ybSIsIkFwcCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInBhcmFtIiwic2V0UGFyYW0iLCJoYW5kbGVMb2dpblN1Y2Nlc3MiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInBhcmFtU3RhdGVPZlVzZXIiLCJwYXRoIiwiZWxlbWVudCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9