"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2265],{

/***/ 12265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44899);
// import { Ok, Some } from '@masknet/plugin-infra'

let storage;
const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        storage = context.getDatabaseStorage();
        console.debug('Example plugin installed on the background');
        signal.addEventListener('abort', ()=>console.debug('Example plugin stopped')
        );
    }
};
async function test() {
    if (!storage) return; // plugin not started
    for await (const cursor of storage.iterate('file')){
        cursor.value.filename;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ })

}]);