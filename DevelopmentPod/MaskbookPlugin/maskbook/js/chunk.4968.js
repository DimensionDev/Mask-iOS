"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4968],{

/***/ 84968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ../plugins/Solana/src/base.ts + 7 modules
var base = __webpack_require__(76699);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../plugins/Solana/src/constants.ts
var constants = __webpack_require__(82862);
;// CONCATENATED MODULE: ../plugins/Solana/src/messages.ts


if (false) {}
const SolanaMessage = (0,src/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);
const SolanaRPC = (0,src/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(9227), __webpack_require__.e(9278), __webpack_require__.e(5229), __webpack_require__.e(1183), __webpack_require__.e(2735), __webpack_require__.e(7425), __webpack_require__.e(5687), __webpack_require__.e(686), __webpack_require__.e(237), __webpack_require__.e(1432), __webpack_require__.e(2299), __webpack_require__.e(9834), __webpack_require__.e(9223), __webpack_require__.e(4557), __webpack_require__.e(7070), __webpack_require__.e(9566), __webpack_require__.e(4520), __webpack_require__.e(2189), __webpack_require__.e(7162), __webpack_require__.e(270)]).then(__webpack_require__.bind(__webpack_require__, 60270))
, SolanaMessage.rpc);

;// CONCATENATED MODULE: ../plugins/Solana/src/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);