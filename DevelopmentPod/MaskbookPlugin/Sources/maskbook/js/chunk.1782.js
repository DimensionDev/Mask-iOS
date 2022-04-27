"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1782],{

/***/ 81782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ../plugins/Solana/src/base.ts + 7 modules
var base = __webpack_require__(43128);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ../plugins/Solana/src/constants.ts
var constants = __webpack_require__(20914);
;// CONCATENATED MODULE: ../plugins/Solana/src/messages.ts


if (false) {}
const SolanaMessage = (0,entry/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);
const SolanaRPC = (0,entry/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2735), __webpack_require__.e(5687), __webpack_require__.e(9278), __webpack_require__.e(5229), __webpack_require__.e(5464), __webpack_require__.e(1183), __webpack_require__.e(7425), __webpack_require__.e(686), __webpack_require__.e(237), __webpack_require__.e(1432), __webpack_require__.e(9834), __webpack_require__.e(9831), __webpack_require__.e(7121), __webpack_require__.e(9223), __webpack_require__.e(4520), __webpack_require__.e(501)]).then(__webpack_require__.bind(__webpack_require__, 60277))
, SolanaMessage.rpc);

;// CONCATENATED MODULE: ../plugins/Solana/src/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);