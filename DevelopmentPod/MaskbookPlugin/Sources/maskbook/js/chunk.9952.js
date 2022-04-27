"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9952],{

/***/ 89952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRSS3AddressById": () => (/* binding */ getRSS3AddressById)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);

async function getRSS3AddressById(id) {
    if (!id) return '';
    const url = urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://rss3.domains/name/:id', {
        id
    });
    const rsp = await (await fetch(url)).json();
    return rsp.address;
}


/***/ })

}]);