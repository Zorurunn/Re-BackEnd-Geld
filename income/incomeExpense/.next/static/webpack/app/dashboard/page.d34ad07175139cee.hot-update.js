"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/LastRecordsBar.js":
/*!******************************************!*\
  !*** ./src/components/LastRecordsBar.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LastRecordsBar: function() { return /* binding */ LastRecordsBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LastRecordLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LastRecordLine */ \"(app-pages-browser)/./src/components/LastRecordLine.js\");\n/* harmony import */ var _SVG_HomeSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVG/HomeSvg */ \"(app-pages-browser)/./src/components/SVG/HomeSvg.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction LastRecordsBar(props) {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            svg: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SVG_HomeSvg__WEBPACK_IMPORTED_MODULE_3__.HomeSvg, {}, void 0, false, {\n                fileName: \"/Users/23LP6080/projects/geld/src/components/LastRecordsBar.js\",\n                lineNumber: 8,\n                columnNumber: 12\n            }, this),\n            title: \"Lending & Renting\",\n            time: 3,\n            value: 1000,\n            currency: \"$\",\n            hr: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/23LP6080/projects/geld/src/components/LastRecordsBar.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, this),\n            id: 0\n        }\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((item, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LastRecordLine__WEBPACK_IMPORTED_MODULE_2__.LastRecordLine, {\n                ...item\n            }, index, false, {\n                fileName: \"/Users/23LP6080/projects/geld/src/components/LastRecordsBar.js\",\n                lineNumber: 20,\n                columnNumber: 16\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/23LP6080/projects/geld/src/components/LastRecordsBar.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(LastRecordsBar, \"f3qa9WHKBsXuHpK4hvyUmM9cgfs=\");\n_c = LastRecordsBar;\nvar _c;\n$RefreshReg$(_c, \"LastRecordsBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xhc3RSZWNvcmRzQmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lCO0FBQ1Y7QUFFakMsU0FBU0csZUFBZUMsS0FBSzs7SUFDbEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQy9CO1lBQ0VPLG1CQUFLLDhEQUFDTCxpREFBT0E7Ozs7O1lBQ2JNLE9BQU87WUFDUEMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFVBQVU7WUFDVkMsa0JBQUksOERBQUNBOzs7OztZQUNMQyxJQUFJO1FBQ047S0FDRDtJQUNELHFCQUNFLDhEQUFDQztrQkFDRVQsS0FBS1UsR0FBRyxDQUFDLENBQUNDLE1BQU1DO1lBQ2YscUJBQU8sOERBQUNoQiwyREFBY0E7Z0JBQWMsR0FBR2UsSUFBSTtlQUFmQzs7Ozs7UUFDOUI7Ozs7OztBQUdOO0dBbkJnQmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFzdFJlY29yZHNCYXIuanM/MzdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFzdFJlY29yZExpbmUgfSBmcm9tIFwiLi9MYXN0UmVjb3JkTGluZVwiO1xuaW1wb3J0IHsgSG9tZVN2ZyB9IGZyb20gXCIuL1NWRy9Ib21lU3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMYXN0UmVjb3Jkc0Jhcihwcm9wcykge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgc3ZnOiA8SG9tZVN2ZyAvPixcbiAgICAgIHRpdGxlOiBcIkxlbmRpbmcgJiBSZW50aW5nXCIsXG4gICAgICB0aW1lOiAzLFxuICAgICAgdmFsdWU6IDEwMDAsXG4gICAgICBjdXJyZW5jeTogXCIkXCIsXG4gICAgICBocjogPGhyIC8+LFxuICAgICAgaWQ6IDAsXG4gICAgfSxcbiAgXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxMYXN0UmVjb3JkTGluZSBrZXk9e2luZGV4fSB7Li4uaXRlbX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkxhc3RSZWNvcmRMaW5lIiwiSG9tZVN2ZyIsIkxhc3RSZWNvcmRzQmFyIiwicHJvcHMiLCJkYXRhIiwic2V0RGF0YSIsInN2ZyIsInRpdGxlIiwidGltZSIsInZhbHVlIiwiY3VycmVuY3kiLCJociIsImlkIiwiZGl2IiwibWFwIiwiaXRlbSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/LastRecordsBar.js\n"));

/***/ })

});