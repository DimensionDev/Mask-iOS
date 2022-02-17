"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5704],{

/***/ 44430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XC": () => (/* binding */ currentPopupContext),
/* harmony export */   "bx": () => (/* binding */ currentBaseURL),
/* harmony export */   "A7": () => (/* binding */ SDKErrors)
/* harmony export */ });
const currentPopupContext = new URL(location.href).searchParams.get('mask_context');
const currentBaseURL = new URL('./', location.href).toString();
var SDKErrors;
(function(SDKErrors1) {
    SDKErrors1["M1_Lack_context_identifier"] = 'MaskErr/1: This page does not tied to any SNS context.';
    SDKErrors1["M2_Context_disconnected"] = 'MaskErr/2: The SNS context associated with this page has gone.';
    SDKErrors1["M3_Permission_denied"] = 'MaskErr/3: Permission not granted.';
})(SDKErrors || (SDKErrors = {
}));


/***/ }),

/***/ 25704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44430);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99667);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(async_call_rpc__WEBPACK_IMPORTED_MODULE_1__);


var ref;
console.log('SDK server started');
const channel = {
    on (listener) {
        const l = (x)=>x instanceof CustomEvent && listener(x.detail)
        ;
        document.addEventListener('mask-in', l);
        return ()=>document.removeEventListener('mask-in', l)
        ;
    },
    send (message) {
        document.dispatchEvent(new CustomEvent('mask-out', {
            detail: message
        }));
    }
};
(0,async_call_rpc__WEBPACK_IMPORTED_MODULE_1__.AsyncCall)(__webpack_require__.e(/* import() */ 1953).then(__webpack_require__.bind(__webpack_require__, 1953)).then((x)=>x.default
), {
    serializer: (0,async_call_rpc__WEBPACK_IMPORTED_MODULE_1__.JSONSerialization)(undefined),
    channel,
    log: false
});
document.dispatchEvent(new Event('mask-start'));
(ref = document.querySelector('html')) === null || ref === void 0 ? void 0 : ref.setAttribute('data-mask-sdk-ready', 'true');


/***/ })

}]);