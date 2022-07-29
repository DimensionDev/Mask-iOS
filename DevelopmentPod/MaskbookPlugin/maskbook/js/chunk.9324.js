"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9324],{

/***/ 9324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getConfigEssay": () => (/* binding */ getConfigEssay),
  "getEssay": () => (/* binding */ getEssay),
  "getUserAddress": () => (/* reexport */ getUserAddress),
  "setUserAddress": () => (/* reexport */ setUserAddress)
});

// EXTERNAL MODULE: ./src/plugins/Pets/Services/rss3.ts
var rss3 = __webpack_require__(66698);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(19769);
// EXTERNAL MODULE: ./src/plugins/Pets/constants.ts
var constants = __webpack_require__(21252);
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


function getEssay(address) {
    return (0,rss3/* getCustomEssayFromRSS */.Rl)(address);
}
function getConfigEssay() {
    return (0,rss3/* getConfigNFTsFromRSS */.xp)();
}


/***/ }),

/***/ 66698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rl": () => (/* binding */ getCustomEssayFromRSS),
/* harmony export */   "f8": () => (/* binding */ saveCustomEssayToRSS),
/* harmony export */   "xp": () => (/* binding */ getConfigNFTsFromRSS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19769);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21252);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91788);



const cache = new Map();
async function getCustomEssayFromRSS(address) {
    if (!address) return;
    const rss = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.createRSS3 */ .S5.createRSS3(address, async (message)=>{
        return _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(message, address);
    });
    const data = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.getFileData */ .S5.getFileData(rss, address, '_pet');
    return data?.essay;
}
async function saveCustomEssayToRSS(address, essay, signature, connection) {
    if (!address) return;
    const rss = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.createRSS3 */ .S5.createRSS3(address, async (message)=>{
        return connection.signMessage(message, 'personalSign', {
            account: address
        });
    });
    await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.setFileData */ .S5.setFileData(rss, address, '_pet', {
        address,
        signature,
        essay
    });
    return essay;
}
async function getConfigNFTsFromRSS() {
    const v = cache.get(_constants__WEBPACK_IMPORTED_MODULE_1__/* .NFTS_CONFIG_ADDRESS */ .FA);
    if (v) return v;
    const rss = _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.createRSS3 */ .S5.createRSS3(_constants__WEBPACK_IMPORTED_MODULE_1__/* .NFTS_CONFIG_ADDRESS */ .FA, async (message)=>{
        return _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(message, _constants__WEBPACK_IMPORTED_MODULE_1__/* .NFTS_CONFIG_ADDRESS */ .FA);
    });
    const data = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_0__/* .RSS3.getFileData */ .S5.getFileData(rss, _constants__WEBPACK_IMPORTED_MODULE_1__/* .NFTS_CONFIG_ADDRESS */ .FA, '_pet_nfts');
    cache.set(_constants__WEBPACK_IMPORTED_MODULE_1__/* .NFTS_CONFIG_ADDRESS */ .FA, data?.essay);
    return data?.essay;
}


/***/ })

}]);