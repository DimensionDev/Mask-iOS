"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9348],{

/***/ 19348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "clearCache": () => (/* binding */ clearCache),
  "getAddress": () => (/* reexport */ getAddress),
  "getAvatar": () => (/* reexport */ getAvatar),
  "saveAvatar": () => (/* reexport */ saveAvatar),
  "setAddress": () => (/* reexport */ setAddress)
});

// EXTERNAL MODULE: ./src/plugins/Avatar/types.ts
var types = __webpack_require__(88829);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(19769);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(80624);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/kv.ts



const cache = new Map();
// The DB contains data that an SNS identity handle maps to a Web3 address.
const createAddressDB = (site)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(`${constants/* NFT_AVATAR_DB_NAME */.$s}_${site}`)
;
function getKey(site, userId) {
    return `${site}-${userId}`;
}
async function getAddress(site, userId, pluginID) {
    let f = cache.get(getKey(site, userId));
    if (f) return f;
    f = _getAddress(site, userId, pluginID);
    cache.set(getKey(site, userId), f);
    return f;
}
async function _getAddress(site, userId, pluginID) {
    if (userId === '$unknown') return;
    let storageV1, storageV2;
    try {
        const storage = await createAddressDB(site).get(userId);
        storageV1 = storage ?? {};
        storageV2 = storage ?? {};
    } catch  {
        storageV1 = {};
        storageV2 = {};
    }
    if (!pluginID && storageV2[userId]) return storageV2[userId];
    if (storageV2[pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM]) return {
        address: storageV2[pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM],
        networkPluginID: pluginID ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    };
    // V1 only supports EVM
    if (storageV1.address) return storageV1;
    return;
}
async function setAddress(site, userId, pluginID, address) {
    if (userId === '$unknown') return;
    let storageV2;
    try {
        const storage = await createAddressDB(site).get(userId);
        storageV2 = storage ?? {};
    } catch  {
        storageV2 = {};
    }
    // clear cache
    cache.delete(getKey(site, userId));
    await createAddressDB(site).set(userId, {
        ...storageV2,
        [pluginID]: address,
        [userId]: {
            address,
            networkPluginID: pluginID
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/storage.ts




function storage_getKey(network) {
    return constants/* NFT_AVATAR_METADATA_STORAGE */.t5 + '_' + network;
}
function getCacheKey(userId, network) {
    return `${network}-${userId}`;
}
const storage_cache = new Map();
const NFTAvatarStorage = (network)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(storage_getKey(network))
;
async function saveAvatar(account, network, avatar, sign) {
    await setAddress(network, avatar.userId, avatar.pluginId ?? base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, account);
    await NFTAvatarStorage(network).set(avatar.userId, {
        ...avatar,
        sign
    });
    storage_cache.delete(getCacheKey(avatar.userId, network));
    return avatar;
}
async function getAvatar(userId, network) {
    let f = storage_cache.get(getCacheKey(userId, network));
    if (f) return f;
    f = _getAvatar(userId, network);
    storage_cache.set(getCacheKey(userId, network), f);
    return f;
}
async function _getAvatar(userId, network) {
    const data = await NFTAvatarStorage(network).get(userId);
    if (!data) return;
    return data;
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/index.ts


function deleteTargetCache(userId, address, snsKey) {
    const key = `${address}, ${userId}, ${snsKey}`;
    types/* RSS3Cache.delete */.j["delete"](key);
}
async function clearCache(userId, network, snsKey) {
    const storage = await getAddress(network, userId);
    if (storage?.address) {
        deleteTargetCache(userId, storage.address, snsKey);
    }
}




/***/ }),

/***/ 88829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ RSS3Cache)
/* harmony export */ });
const RSS3Cache = new Map();


/***/ })

}]);