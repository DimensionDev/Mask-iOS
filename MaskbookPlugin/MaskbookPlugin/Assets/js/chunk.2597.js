"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8509],{

/***/ 68509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38049);

const sns = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal) {
        console.debug('Example plugin has been loaded.');
        signal.addEventListener('abort', ()=>console.debug('Example plugin has been terminated')
        );
    },
    // PostInspector: HelloWorld,
    // SearchBoxComponent: HelloWorld,
    // DecryptedInspector: HelloWorld,
    // GlobalInjection: GlobalComponent,
    CompositionDialogEntry: {
        label: {
            i18nKey: '__entry__',
            fallback: '🤔 Example'
        },
        onClick: ()=>alert('It works ™!')
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sns);


/***/ })

}]);