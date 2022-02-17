"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5629,3611],{

/***/ 16053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22407);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(1860)]).then(__webpack_require__.bind(__webpack_require__, 57621))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 92857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getConfigEssay": () => (/* binding */ getConfigEssay),
  "getEssay": () => (/* binding */ getEssay),
  "getUserAddress": () => (/* reexport */ getUserAddress),
  "saveEssay": () => (/* binding */ saveEssay),
  "setUserAddress": () => (/* reexport */ setUserAddress)
});

// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var src = __webpack_require__(42189);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 13 modules
var EthereumService = __webpack_require__(70427);
// EXTERNAL MODULE: ./src/plugins/Pets/constants.ts
var constants = __webpack_require__(50942);
;// CONCATENATED MODULE: ./src/plugins/Pets/Services/rss3.ts



const cache = new Map();
async function getCustomEssayFromRSS(address) {
    if (!address) return;
    const rss = src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
        return (0,EthereumService.personalSign)(message, address);
    });
    const data = await src/* RSS3.getFileData */.S5.getFileData(rss, address, '_pet');
    return data === null || data === void 0 ? void 0 : data.essay;
}
async function saveCustomEssayToRSS(address, essay, signature) {
    if (!address) return;
    const rss = src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
        return (0,EthereumService.personalSign)(message, address);
    });
    await src/* RSS3.setFileData */.S5.setFileData(rss, address, '_pet', {
        address,
        signature,
        essay
    });
    return essay;
}
async function getConfigNFTsFromRSS() {
    const v = cache.get(constants/* NFTS_CONFIG_ADDRESS */.FA);
    if (v) return v;
    const rss = src/* RSS3.createRSS3 */.S5.createRSS3(constants/* NFTS_CONFIG_ADDRESS */.FA, async (message)=>{
        return (0,EthereumService.personalSign)(message, constants/* NFTS_CONFIG_ADDRESS */.FA);
    });
    const data = await src/* RSS3.getFileData */.S5.getFileData(rss, constants/* NFTS_CONFIG_ADDRESS */.FA, '_pet_nfts');
    cache.set(constants/* NFTS_CONFIG_ADDRESS */.FA, data === null || data === void 0 ? void 0 : data.essay);
    return data === null || data === void 0 ? void 0 : data.essay;
}

;// CONCATENATED MODULE: ./src/plugins/Pets/Services/storage.ts


const storage = src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(constants/* PetsPluginID */.Dt);
async function setUserAddress(user) {
    await storage.set(user.userId, user.address);
}
async function getUserAddress(userId) {
    if (!userId || userId === '$unknown') return '';
    return storage.get(userId);
}

;// CONCATENATED MODULE: ./src/plugins/Pets/Services/index.ts



async function saveEssay(address, petMeta, userId) {
    const signature = await (0,EthereumService.personalSign)(userId, address);
    return saveCustomEssayToRSS(address, petMeta, signature);
}
function getEssay(address) {
    return getCustomEssayFromRSS(address);
}
function getConfigEssay() {
    return getConfigNFTsFromRSS();
}


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.Lj),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.X3),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.re)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);