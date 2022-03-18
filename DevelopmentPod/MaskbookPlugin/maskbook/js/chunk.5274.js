"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5274],{

/***/ 5274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Worker)
});

// EXTERNAL MODULE: ../plugins/Flow/src/base.ts + 7 modules
var base = __webpack_require__(21812);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(63151);
// EXTERNAL MODULE: ../plugins/Flow/src/constants.ts
var constants = __webpack_require__(7638);
;// CONCATENATED MODULE: ../plugins/Flow/src/messages.ts


if (false) {}
const FlowMessage = (0,src/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);
const FlowRPC = (0,src/* createPluginRPC */.V8)(constants/* PLUGIN_ID */.Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(5815), __webpack_require__.e(6813), __webpack_require__.e(9239), __webpack_require__.e(6982), __webpack_require__.e(9094), __webpack_require__.e(5145)]).then(__webpack_require__.bind(__webpack_require__, 45145))
, FlowMessage.rpc);

;// CONCATENATED MODULE: ../plugins/Flow/src/Worker/index.ts


const worker = {
    ...base/* base */.u,
    init (signal) {}
};
/* harmony default export */ const Worker = (worker);


/***/ })

}]);