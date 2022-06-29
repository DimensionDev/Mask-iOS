"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9482],{

/***/ 69482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ../plugins/EVM/src/base.ts + 2 modules
var base = __webpack_require__(10760);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../plugins/EVM/src/constants/index.ts
var constants = __webpack_require__(18179);
;// CONCATENATED MODULE: ../plugins/EVM/src/messages.ts



if (false) {}
const evmEventEmitter = (0,entry/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu, src/* serializer */.GM);
const EVM_Messages = {
    events: evmEventEmitter
};
const EVM_RPC = (0,entry/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>__webpack_require__.e(/* import() */ 5656).then(__webpack_require__.bind(__webpack_require__, 55656))
, EVM_Messages.events.rpc);

;// CONCATENATED MODULE: ../plugins/EVM/src/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);