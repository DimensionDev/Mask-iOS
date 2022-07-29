"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8305],{

/***/ 95290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ fetchGrant)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22256);


async function fetchGrant(id) {
    if (!/\d+/.test(id)) return;
    const fetch = globalThis.r2d2Fetch ?? globalThis.fetch;
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(_constants__WEBPACK_IMPORTED_MODULE_1__/* .GITCOIN_API_GRANTS_V1 */ .tq, {
        id
    }));
    const { grants  } = await response.json();
    return grants;
}


/***/ }),

/***/ 38305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchGrant": () => (/* reexport safe */ _apis__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95290);



/***/ })

}]);