self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Admin\\Desktop\\Projekti Final\\src\\js\\Login.js: Unexpected token, expected \",\" (13:31)\n\n\u001b[0m \u001b[90m 11 |\u001b[39m     \u001b[36mconst\u001b[39m user \u001b[33m=\u001b[39m data\u001b[33m.\u001b[39mfind(user \u001b[33m=>\u001b[39m user\u001b[33m.\u001b[39musername \u001b[33m===\u001b[39m username \u001b[33m&&\u001b[39m user\u001b[33m.\u001b[39mpassword \u001b[33m===\u001b[39m password)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m     \u001b[36mif\u001b[39m (username \u001b[33m===\u001b[39m \u001b[32m'Flamur'\u001b[39m \u001b[33m&&\u001b[39m password \u001b[33m===\u001b[39m \u001b[32m'Flamur'\u001b[39m) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 |\u001b[39m       \u001b[36mconst\u001b[39m userToSave \u001b[33m=\u001b[39m { user\u001b[33m.\u001b[39musername\u001b[33m,\u001b[39m user\u001b[33m.\u001b[39mpassword }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m       localStorage\u001b[33m.\u001b[39msetItem(\u001b[32m'user'\u001b[39m\u001b[33m,\u001b[39m \u001b[33mJSON\u001b[39m\u001b[33m.\u001b[39mstringify(userToSave))\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m       console\u001b[33m.\u001b[39mlog(\u001b[32m'Login successful!'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m     } \u001b[36melse\u001b[39m {\u001b[0m\n    at instantiate (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:653:32)\n    at constructor (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:947:12)\n    at JSXParserMixin.raise (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:3261:19)\n    at JSXParserMixin.unexpected (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:3291:16)\n    at JSXParserMixin.expect (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:3633:28)\n    at JSXParserMixin.parseObjectLike (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:11637:14)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:11157:23)\n    at JSXParserMixin.parseExprAtom (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:6998:20)\n    at JSXParserMixin.parseExprSubscripts (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:10870:23)\n    at JSXParserMixin.parseUpdate (C:\\Users\\Admin\\Desktop\\Projekti Final\\node_modules\\@babel\\parser\\lib\\index.js:10853:21)");

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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Login__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AboutUS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);











var App = function App() {
  var user = JSON.parse(localStorage.getItem('user'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
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
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Login__WEBPACK_IMPORTED_MODULE_7___default()), null)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GoToTop__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null), document.getElementById("app"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe5d2dd2397ee3555f77")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZTE5NjFlZmNkN2ZhNTZhMzUwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQVFMO0FBQ0U7QUFDb0I7QUFDWjtBQUNGO0FBQ0o7QUFDQTtBQUNBO0FBQ0k7QUFLcEMsSUFBTWlCLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBLEVBQVM7RUFDZCxJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNyRCxvQkFDSXRCLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxDQUFDRyx5REFBVSxxQkFDWEgsMERBQUEsQ0FBQ1UseURBQWdCLE9BQUcsZUFDcEJWLDBEQUFBLENBQUNLLHFEQUFNLHFCQUNQTCwwREFBQSxDQUFDSSxvREFBSztJQUFDcUIsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxlQUFFMUIsMERBQUEsQ0FBQ2EsZ0RBQU87RUFBSSxFQUFHLGVBQ3hDYiwwREFBQSxDQUFDSSxvREFBSztJQUFDcUIsSUFBSSxFQUFDLFVBQVU7SUFBQ0MsT0FBTyxlQUFFMUIsMERBQUEsQ0FBQ2dCLGdEQUFXO0VBQUcsRUFBRyxlQUNsRGhCLDBEQUFBLENBQUNJLG9EQUFLO0lBQUNxQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUUxQiwwREFBQSxDQUFDZSxnREFBTztFQUFHLEVBQUcsZUFDNUNmLDBEQUFBLENBQUNJLG9EQUFLO0lBQUNxQixJQUFJLEVBQUMsVUFBVTtJQUFDQyxPQUFPLGVBQUUxQiwwREFBQSxDQUFDWSxrREFBUztFQUFHLEVBQUcsZUFDaERaLDBEQUFBLENBQUNJLG9EQUFLO0lBQUNxQixJQUFJLEVBQUMsUUFBUTtJQUFDQyxPQUFPLGVBQUUxQiwwREFBQSxDQUFDYywrQ0FBUztFQUFHLEVBQUcsQ0FDckMsQ0FDSSxlQUNiZCwwREFBQSxDQUFDVyxnREFBYSxPQUFFLGVBQ2hCWCwwREFBQSxDQUFDUywrQ0FBTSxPQUFFLENBR1Y7QUFFWCxDQUFDO0FBQ0RQLDZDQUFlLGVBRWZGLDBEQUFBLENBQUNpQixHQUFHLE9BQUUsRUFFTlcsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7O1VDL0MvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL3NyYy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQge1xyXG4gICAgSGFzaFJvdXRlcixcclxuICAgIFJvdXRlLFxyXG4gICAgUm91dGVzLFxyXG4gICAgTGluayxcclxuICAgIE5hdkxpbmssXHJcbiAgICBPdXRsZXRcclxuICB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgSGVhZGVyTmF2aWdhdGlvbiBmcm9tIFwiLi9IZWFkZXJOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBHb1RvVG9wQnV0dG9uIGZyb20gXCIuL0dvVG9Ub3BcIjtcclxuaW1wb3J0IEFkZENvdXJzZSBmcm9tIFwiLi9BZGRDb3Vyc2VcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4vV3JhcHBlclwiO1xyXG5pbXBvcnQgTG9naW5QYWdlIGZyb20gXCIuL0xvZ2luXCI7XHJcbmltcG9ydCBBYm91dFVzIGZyb20gXCIuL0Fib3V0VVNcIjtcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL0NvbnRhY3RcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEhlYWRlck5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PFdyYXBwZXIgLz59IC8+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdEZvcm0vPn0gLz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXRVcy8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb3Vyc2VzXCIgZWxlbWVudD17PEFkZENvdXJzZS8+fSAvPlxyXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9Mb2dpblwiIGVsZW1lbnQ9ezxMb2dpblBhZ2UvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cclxuICAgICAgICAgICAgPEdvVG9Ub3BCdXR0b24vPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHJcbjxBcHAvPixcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZTVkMmRkMjM5N2VlMzU1NWY3N1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJGb290ZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiR29Ub1RvcEJ1dHRvbiIsIkFkZENvdXJzZSIsIldyYXBwZXIiLCJMb2dpblBhZ2UiLCJBYm91dFVzIiwiQ29udGFjdEZvcm0iLCJBcHAiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsInBhdGgiLCJlbGVtZW50IiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=