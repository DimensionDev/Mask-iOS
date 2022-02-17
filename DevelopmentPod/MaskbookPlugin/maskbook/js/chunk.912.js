"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[912],{

/***/ 80912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRSS3AddressById": () => (/* binding */ getRSS3AddressById)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_background_script_HelperService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71259);


async function getRSS3AddressById(id) {
    if (!id) return '';
    const url = urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://rss3.domains/name/:id', {
        id
    });
    const rsp = await (0,_extension_background_script_HelperService__WEBPACK_IMPORTED_MODULE_1__.fetchJSON)(url);
    return rsp.address;
}


/***/ })

}]);