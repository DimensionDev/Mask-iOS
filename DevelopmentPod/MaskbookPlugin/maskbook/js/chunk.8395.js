"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8395],{

/***/ 38395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ./src/plugins/Collectible/base.ts
var base = __webpack_require__(1854);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
var constants = __webpack_require__(2658);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(70226);
;// CONCATENATED MODULE: ./src/plugins/Collectible/messages.ts


if (false) {}
const PluginCollectibleMessage = (0,entry/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);
const PluginCollectibleRPC = (0,entry/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>__webpack_require__.e(/* import() */ 7668).then(__webpack_require__.bind(__webpack_require__, 7668))
, PluginCollectibleMessage.rpc);

;// CONCATENATED MODULE: ./src/plugins/Collectible/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);