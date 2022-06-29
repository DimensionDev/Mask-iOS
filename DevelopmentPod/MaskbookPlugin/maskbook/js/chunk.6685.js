"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6685],{

/***/ 86008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ createWalletDBAccess)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63338);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55989);


function path(x) {
    return x;
}
const createWalletDBAccess = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-plugin-wallet', 9, {
        async upgrade (db, oldVersion, newVersion, tx) {
            function v0_v1() {
                db.createObjectStore('Wallet', {
                    keyPath: path('address')
                });
            }
            function v8_v9() {
                const pluginStore = 'PluginStore';
                db.objectStoreNames.contains(pluginStore) && db.deleteObjectStore(pluginStore);
                db.createObjectStore('UnconfirmedRequestChunk', {
                    keyPath: path('record_id')
                });
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 9) v8_v9();
        }
    });
});


/***/ }),

/***/ 65703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ updateMaskAccount),
/* harmony export */   "Ih": () => (/* binding */ setDefaultMaskAccount),
/* harmony export */   "JB": () => (/* binding */ getSupportedNetworks),
/* harmony export */   "RG": () => (/* binding */ rejectMaskAccount),
/* harmony export */   "RS": () => (/* binding */ selectMaskAccount),
/* harmony export */   "X3": () => (/* binding */ resetMaskAccount),
/* harmony export */   "Zb": () => (/* binding */ resolveMaskAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29730);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94861);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(72499);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91788);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46123);







async function setDefaultMaskAccount() {
    if (_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value) return;
    const wallets = await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.getWallets */ .V.getWallets();
    const address = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(wallets)?.address;
    if (address) await updateMaskAccount({
        account: address
    });
}
async function updateMaskAccount(options) {
    if (options.chainId && !options.networkType) options.networkType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .chainResolver.chainNetworkType */ .VU.chainNetworkType(options.chainId);
    if (!options.chainId && options.networkType) options.chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .networkResolver.networkChainId */ .LJ.networkChainId(options.networkType);
    const { account , chainId , networkType  } = options;
    if (chainId) _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletChainIdSettings.value */ .DT.value = chainId;
    if (networkType) _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletNetworkSettings.value */ .br.value = networkType;
    if (account && wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(account)) {
        _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value = account;
        await resolveMaskAccount([
            account
        ]);
    }
}
async function resetMaskAccount() {
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletChainIdSettings.value */ .DT.value = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .ChainId.Mainnet */ .a_.Mainnet;
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletNetworkSettings.value */ .br.value = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Ethereum */ .td.Ethereum;
    _settings__WEBPACK_IMPORTED_MODULE_1__/* .currentMaskWalletAccountSettings.value */ .T_.value = '';
}
// #region select wallet with popups
let deferred;
async function selectMaskAccount() {
    deferred = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__/* .defer */ .PQ)();
    return deferred?.[0] ?? [];
}
async function resolveMaskAccount(accounts) {
    const [, resolve] = deferred ?? [];
    resolve?.(accounts);
    deferred = null;
}
async function rejectMaskAccount() {
    const [, resolve] = deferred ?? [];
    resolve?.([]);
    deferred = null;
}
// #endregion
async function getSupportedNetworks() {
    return [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Ethereum */ .td.Ethereum,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.bsc_enabled */ .vU.bsc_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Binance */ .td.Binance : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.polygon_enabled */ .vU.polygon_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Polygon */ .td.Polygon : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.arbitrum_enabled */ .vU.arbitrum_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Arbitrum */ .td.Arbitrum : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.xdai_enabled */ .vU.xdai_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.xDai */ .td.xDai : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.celo_enabled */ .vU.celo_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Celo */ .td.Celo : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.fantom_enabled */ .vU.fantom_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Fantom */ .td.Fantom : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.avalanche_enabled */ .vU.avalanche_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Avalanche */ .td.Avalanche : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.aurora_enabled */ .vU.aurora_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Aurora */ .td.Aurora : undefined,
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.harmony_enabled */ .vU.harmony_enabled ? _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .NetworkType.Harmony */ .td.Harmony : undefined, 
    ].filter(Boolean);
}


/***/ }),

/***/ 80956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ fromKeyStore)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/scrypt-js@3.0.1/node_modules/scrypt-js/scrypt.js
var scrypt = __webpack_require__(37508);
var scrypt_default = /*#__PURE__*/__webpack_require__.n(scrypt);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.3/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(63740);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/schema.json
const schema_namespaceObject = JSON.parse('{"$schema":"http://json-schema.org/draft-04/schema#","type":"object","required":["version","id","address","crypto"],"properties":{"version":{"const":3},"id":{"type":"string"},"address":{"$ref":"#/definitions/address"},"crypto":{"type":"object","allOf":[{"$ref":"#/definitions/aes-cipher"},{"$ref":"#/definitions/key-derivation"},{"$ref":"#/definitions/authentication"}]}},"definitions":{"address":{"type":"string","pattern":"^[a-fA-F0-9]{40}$"},"aes-cipher":{"type":"object","properties":{"cipher":{"enum":["aes-128-ctr","aes-128-cbc"]},"cipherparams":{"type":"object","properties":{"iv":{"type":"string","pattern":"^[a-fA-F0-9]{32}$"}},"required":["iv"],"additionalProperties":false},"ciphertext":{"$ref":"#/definitions/encoded-string"}},"required":["cipher","ciphertext","cipherparams"]},"key-derivation":{"oneOf":[{"$ref":"#/definitions/pbkdf2"},{"$ref":"#/definitions/scrypt"}],"required":["kdf","kdfparams"]},"pbkdf2":{"type":"object","properties":{"kdf":{"const":"pbkdf2"},"kdfparams":{"type":"object","properties":{"c":{"type":"number","minimum":1000},"prf":{"const":"hmac-sha256"},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["c","prf","dklen","salt"],"additionalProperties":false}}},"scrypt":{"type":"object","properties":{"kdf":{"const":"scrypt"},"kdfparams":{"type":"object","properties":{"n":{"type":"number","minimum":1},"p":{"type":"number","minimum":1},"r":{"type":"number","minimum":1},"dklen":{"type":"number","minimum":16},"salt":{"$ref":"#/definitions/encoded-string"}},"required":["n","p","r","dklen","salt"],"additionalProperties":false}}},"authentication":{"type":"object","properties":{"mac":{"$ref":"#/definitions/encoded-string"}},"required":["mac"]},"encoded-string":{"type":"string","pattern":"^[a-fA-F0-9]{64}$"}}}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/utils.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



function loadKeyStore(input) {
    let store;
    try {
        store = JSON.parse(input);
    } catch  {
        throw new Error('JSON file is incorrect');
    }
    const validator = new (ZSchema_default())({
        strictMode: true,
        breakOnFirstError: true
    });
    validator.validate(input, schema_namespaceObject);
    return store;
}
function assertKeyDerivation(keystore, derivedKey) {
    const payload = Buffer.concat([
        derivedKey.slice(16, 32),
        Buffer.from(keystore.ciphertext, 'hex')
    ]);
    const valid = (0,lib.sha3)(`0x${payload.toString('hex')}`) === `0x${keystore.mac}`;
    if (!valid) {
        throw new Error('Password is incorrect');
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/services/keystore/index.ts



async function fromKeyStore(input, password) {
    const { crypto , address  } = loadKeyStore(input);
    const derivedKey = await makeDerivedKey(crypto, password);
    assertKeyDerivation(crypto, derivedKey);
    const seed = await decrypt(crypto.cipher, derivedKey, buffer.Buffer.from(crypto.ciphertext, 'hex'), buffer.Buffer.from(crypto.cipherparams.iv, 'hex'));
    return {
        address: `0x${address}`,
        privateKey: `0x${seed}`
    };
}
async function decrypt(cipher, derivedKey, cipherText, iv) {
    const name = cipher === 'aes-128-ctr' ? 'AES-CTR' : 'AES-CBC';
    derivedKey = derivedKey.slice(0, 16);
    const length = 128;
    const key = await crypto.subtle.importKey('raw', derivedKey, {
        name,
        length
    }, false, [
        'decrypt'
    ]);
    const aes_ctr_params = {
        name,
        counter: iv,
        length
    };
    const aes_cbc_params = {
        name,
        iv
    };
    const seed = await crypto.subtle.decrypt(cipher === 'aes-128-ctr' ? aes_ctr_params : aes_cbc_params, key, cipherText);
    return buffer.Buffer.from(seed).toString('hex');
}
async function makeDerivedKey(keystore, password) {
    const salt = buffer.Buffer.from(keystore.kdfparams.salt, 'hex');
    if (keystore.kdf === 'scrypt') {
        const { n , r , p , dklen  } = keystore.kdfparams;
        return scrypt_default().scrypt(password, salt, n, r, p, dklen);
    } else if (keystore.kdf === 'pbkdf2') {
        const iterations = keystore.kdfparams.c;
        const key = await crypto.subtle.importKey('raw', password, {
            name: 'PBKDF2'
        }, false, [
            'deriveBits'
        ]);
        const params = {
            name: 'PBKDF2',
            salt,
            iterations,
            hash: 'SHA-256'
        };
        return new Uint8Array(await crypto.subtle.deriveBits(params, key, 256));
    }
    throw new Error('Unsupported key derivation scheme');
}


/***/ }),

/***/ 47805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nt": () => (/* binding */ topUnconfirmedRequest),
/* harmony export */   "SP": () => (/* binding */ getUnconfirmedRequests),
/* harmony export */   "_b": () => (/* binding */ clearUnconfirmedRequests),
/* harmony export */   "fr": () => (/* binding */ shiftUnconfirmedRequest),
/* harmony export */   "v0": () => (/* binding */ updateUnconfirmedRequest),
/* harmony export */   "wI": () => (/* binding */ deleteUnconfirmedRequest),
/* harmony export */   "xD": () => (/* binding */ pushUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29730);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10503);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55989);
/* harmony import */ var _database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86008);
/* harmony import */ var _background_services_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67968);





const MAX_UNCONFIRMED_REQUESTS_SIZE = 1;
const MAIN_RECORD_ID = '0';
function requestSorter(a, z) {
    return (a.id ?? 0 - z.id) ?? 0;
}
async function getUnconfirmedRequests() {
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readonly')('UnconfirmedRequestChunk');
    const chunk = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk) return [];
    return chunk.requests.slice(0, MAX_UNCONFIRMED_REQUESTS_SIZE).sort(requestSorter);
}
async function topUnconfirmedRequest() {
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(await getUnconfirmedRequests());
}
async function shiftUnconfirmedRequest() {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = (chunk_?.requests ?? []).sort(requestSorter);
    if (!chunk_) return;
    if (!requests.length) return;
    const payload = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(requests);
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: requests.slice(1)
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    // TODO: hasRequest is not the best definition
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function pushUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = chunk_?.requests ?? [];
    // validate if it's still possible to push a new request
    if (requests.length >= MAX_UNCONFIRMED_REQUESTS_SIZE) {
        await (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_3__.openPopupWindow)();
        throw new Error('Unable to add more request.');
    }
    const chunk = chunk_ ? {
        ...chunk_,
        updatedAt: now,
        requests: requests.concat(payload)
    } : {
        record_id: MAIN_RECORD_ID,
        createdAt: now,
        updatedAt: now,
        requests: [
            payload
        ]
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function updateUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    if (!chunk_?.requests.length) throw new Error('No request to update.');
    const requests = chunk_?.requests?.map((item)=>{
        if (item.id !== payload.id) return item;
        return payload;
    }) ?? [];
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: true
    });
    return payload;
}
async function deleteUnconfirmedRequest(payload) {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = (chunk_?.requests ?? []).filter((x)=>x.id !== payload.id
    );
    if (!chunk_) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
    return payload;
}
async function clearUnconfirmedRequests() {
    const now = new Date();
    const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_database_Wallet_db__WEBPACK_IMPORTED_MODULE_2__/* .createWalletDBAccess */ .n)(), 'readwrite')('UnconfirmedRequestChunk');
    const chunk_ = await t.objectStore('UnconfirmedRequestChunk').get(MAIN_RECORD_ID);
    const requests = chunk_?.requests ?? [];
    if (!chunk_) return;
    if (!requests.length) return;
    const chunk = {
        ...chunk_,
        updatedAt: now,
        requests: []
    };
    await t.objectStore('UnconfirmedRequestChunk').put(chunk);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__/* .WalletMessages.events.requestsUpdated.sendToAll */ .R$.events.requestsUpdated.sendToAll({
        hasRequest: false
    });
}


/***/ }),

/***/ 89993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gk": () => (/* binding */ confirmRequest),
/* harmony export */   "QN": () => (/* binding */ rejectRequest),
/* harmony export */   "by": () => (/* binding */ getError),
/* harmony export */   "lW": () => (/* binding */ send),
/* harmony export */   "yT": () => (/* binding */ sendPayload)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75692);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46123);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47104);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2046);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46815);
/* harmony import */ var _background_services_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67968);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76536);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91788);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29330);







var JSON_RPC_ERROR_CODE;
(function(JSON_RPC_ERROR_CODE) {
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INVALID_REQUEST"] = -32600] = "INVALID_REQUEST";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["METHOD_NOT_FOUND"] = 32601] = "METHOD_NOT_FOUND";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INVALID_PARAMS"] = -32602] = "INVALID_PARAMS";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["INTERNAL_ERROR"] = -32603] = "INTERNAL_ERROR";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["SERVER_ERROR_RANGE_START"] = -32000] = "SERVER_ERROR_RANGE_START";
    JSON_RPC_ERROR_CODE[JSON_RPC_ERROR_CODE["SERVER_ERROR_RANGE_END"] = -32099] = "SERVER_ERROR_RANGE_END";
})(JSON_RPC_ERROR_CODE || (JSON_RPC_ERROR_CODE = {}));
const UNCONFIRMED_CALLBACK_MAP = new Map();
let id = 0;
const { RPC_WEIGHTS =[]  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getRPCConstants */ .t0)(_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet);
const seed = Math.floor(Math.random() * RPC_WEIGHTS.length);
const providerPool = new Map();
function createProviderInstance(url) {
    const instance = providerPool.get(url);
    if (instance) return instance;
    const newInstance = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(url, {
        timeout: 30 * 1000,
        // @ts-ignore
        clientConfig: {
            keepalive: true,
            keepaliveInterval: 1
        },
        reconnect: {
            auto: true,
            delay: 5000,
            maxAttempts: Number.MAX_SAFE_INTEGER,
            onTimeout: true
        }
    });
    providerPool.set(url, newInstance);
    return newInstance;
}
async function createProvider(chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const { RPC_URLS =[] , RPC_WEIGHTS: RPC_WEIGHTS1 = []  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getRPCConstants */ .t0)(chainId);
    const url = RPC_URLS[RPC_WEIGHTS1[seed]];
    if (!url) throw new Error('Failed to create provider.');
    return createProviderInstance(url);
}
function getInternalError(error, response, fallback) {
    {
        const rpcError = error;
        if (rpcError instanceof Error && rpcError.message) return rpcError;
        if (rpcError && typeof rpcError.message === 'string') return new Error(rpcError.message);
        if (rpcError && typeof rpcError === 'string') return new Error(rpcError);
    }
    {
        const responseError = response?.error;
        if (responseError instanceof Error) return getError(responseError, null, fallback);
        if (responseError && typeof responseError.message === 'string') return getError(responseError, null, fallback);
        if (responseError && typeof responseError === 'string') return new Error(responseError);
    }
    if (fallback) return new Error(fallback);
    return new Error('Unknown Error.');
}
function getError(error, response, fallback) {
    const internalError = getInternalError(error, response, fallback);
    const internalErrorMessage = (()=>{
        const { code , message  } = internalError;
        if (message.includes(`"code":${JSON_RPC_ERROR_CODE.INTERNAL_ERROR}`)) return 'Transaction was failed due to an internal JSON-RPC server error.';
        if (message.includes('User denied message signature.')) return 'Signature canceled.';
        if (message.includes('User denied transaction signature.')) return 'Transaction was rejected!';
        if (message.includes('transaction underpriced')) return 'Transaction underpriced.';
        if (typeof code === 'number' && (code === JSON_RPC_ERROR_CODE.INTERNAL_ERROR || code <= JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_START && code >= JSON_RPC_ERROR_CODE.SERVER_ERROR_RANGE_END)) {
            return 'Transaction was failed due to an internal JSON-RPC server error.';
        }
        return internalError.message;
    })();
    return new Error(internalErrorMessage);
}
/**
 * Send to built-in RPC endpoints.
 */ async function send(payload, callback, options) {
    const provider = await createProvider(options?.chainId);
    const computedPayload = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadConfig */ .is)(payload);
    switch(payload.method){
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SEND_TRANSACTION */ .W8.ETH_SEND_TRANSACTION:
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.MASK_REPLACE_TRANSACTION */ .W8.MASK_REPLACE_TRANSACTION:
            if (!computedPayload?.from || !computedPayload.to || !options?.chainId) return;
            const rawTransaction = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signTransaction */ .V.signTransaction(computedPayload.from, {
                ...computedPayload,
                chainId: options.chainId
            });
            if (!rawTransaction) break;
            return provider.send({
                ...payload,
                method: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SEND_RAW_TRANSACTION */ .W8.ETH_SEND_RAW_TRANSACTION,
                params: [
                    rawTransaction
                ]
            }, callback);
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.ETH_SIGN_TYPED_DATA */ .W8.ETH_SIGN_TYPED_DATA:
            const [address, dataToSign] = payload.params;
            const signed = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signTypedData */ .V.signTypedData(address, dataToSign);
            try {
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: signed
                });
            } catch (error) {
                callback(getError(error, null, 'Failed to sign message.'));
            }
            break;
        case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .EthereumMethodType.PERSONAL_SIGN */ .W8.PERSONAL_SIGN:
            const [data, account] = payload.params;
            const personalSigned = await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(data, account);
            try {
                callback(null, {
                    jsonrpc: '2.0',
                    id: payload.id,
                    result: personalSigned
                });
            } catch (error1) {
                callback(getError(error1, null, 'Failed to sign message.'));
            }
            break;
        default:
            return provider.send(payload, callback);
    }
}
/**
 * The entrance of all RPC requests to MaskWallet.
 */ async function sendPayload(payload, options) {
    if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__/* .hasNativeAPI */ ._) {
        return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_3__/* .nativeAPI */ .Nz?.api.send(payload);
    } else {
        return new Promise(async (resolve, reject)=>{
            const callback = (error, response)=>{
                if (!(0,lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(error) || !(0,lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(response?.error)) {
                    reject(getError(error, response));
                } else if (response) resolve(response);
            };
            id += 1;
            const payload_ = {
                ...payload,
                id
            };
            if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .isRiskMethod */ .Y2)(payload_.method)) {
                await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.pushUnconfirmedRequest */ .V.pushUnconfirmedRequest(payload_);
                UNCONFIRMED_CALLBACK_MAP.set(payload_.id, callback);
                if (options?.popupsWindow) (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.openPopupWindow)();
                return;
            }
            send(payload, callback, options);
        });
    }
}
async function confirmRequest(payload, options) {
    const pid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadId */ .rH)(payload);
    if (!pid) return;
    const [deferred, resolve, reject] = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .defer */ .PQ)();
    send(payload, (error, response)=>{
        UNCONFIRMED_CALLBACK_MAP.get(pid)?.(error, response);
        if (error) {
            reject(error);
            return;
        }
        if (response?.error) {
            reject(new Error(`Failed to send transaction: ${response.error}`));
            return;
        }
        _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.deleteUnconfirmedRequest */ .V.deleteUnconfirmedRequest(payload).then(()=>{
            if (!options?.disableClose) (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.removePopupWindow)();
        }).finally(()=>{
            UNCONFIRMED_CALLBACK_MAP.delete(pid);
        });
        resolve(response);
    }, options);
    return deferred;
}
async function rejectRequest(payload) {
    const pid = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .getPayloadId */ .rH)(payload);
    if (!pid) return;
    UNCONFIRMED_CALLBACK_MAP.get(pid)?.(new Error('User rejected transaction.'));
    await _messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC.deleteUnconfirmedRequest */ .V.deleteUnconfirmedRequest(payload);
    await (0,_background_services_helper__WEBPACK_IMPORTED_MODULE_2__.removePopupWindow)();
    UNCONFIRMED_CALLBACK_MAP.delete(pid);
}


/***/ }),

/***/ 91541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K8": () => (/* binding */ updateWallet),
/* harmony export */   "MX": () => (/* binding */ getWallets),
/* harmony export */   "Ox": () => (/* binding */ hasStoredKeyInfo),
/* harmony export */   "Sx": () => (/* binding */ hasWallet),
/* harmony export */   "iL": () => (/* binding */ getWallet),
/* harmony export */   "ry": () => (/* binding */ addWallet),
/* harmony export */   "tJ": () => (/* binding */ deleteWallet),
/* harmony export */   "zr": () => (/* binding */ getWalletRequired)
/* harmony export */ });
/* unused harmony exports hasWalletRequired, hasStoredKeyInfoRequired */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96596);
/* harmony import */ var _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23015);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10503);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2596);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5326);
/* harmony import */ var _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26436);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7197);







function WalletRecordOutDB(record) {
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(record, 'type'),
        configurable: record.storedKeyInfo?.type ? record.storedKeyInfo.type !== _dimensiondev_mask_wallet_core_proto__WEBPACK_IMPORTED_MODULE_0__.api.StoredKeyType.Mnemonic : true,
        hasStoredKeyInfo: !!record.storedKeyInfo,
        hasDerivationPath: !!record.derivationPath
    };
}
async function getWallet(address = _settings__WEBPACK_IMPORTED_MODULE_3__/* .currentMaskWalletAccountSettings.value */ .T_.value) {
    if (!address) return null;
    if (!(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .isValidAddress */ .At)(address)) throw new Error('Not a valid address.');
    const wallet = await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.get */ .O.get('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address)) ?? null;
    return wallet ? WalletRecordOutDB(wallet) : null;
}
async function getWalletRequired(address) {
    const wallet = await getWallet(address);
    if (!wallet) throw new Error('The wallet does not exist.');
    return wallet;
}
async function hasWallet(address) {
    return _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.has */ .O.has('wallet', (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address));
}
async function hasWalletRequired(address) {
    const has = await hasWallet(address);
    if (!has) throw new Error('The wallet does not exist.');
    return has;
}
async function hasStoredKeyInfo(storedKeyInfo) {
    const wallets = await getWallets();
    if (!storedKeyInfo) return false;
    return wallets.filter((x)=>x.storedKeyInfo?.hash
    ).some((x)=>x.storedKeyInfo?.hash === storedKeyInfo?.hash
    );
}
async function hasStoredKeyInfoRequired(storedKeyInfo) {
    const has = await hasStoredKeyInfo(storedKeyInfo);
    if (!has) throw new Error('The stored key info does not exist.');
    return has;
}
async function getWallets() {
    const wallets = (await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .asyncIteratorToArray */ .SR)(_database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.iterate */ .O.iterate('wallet'))).map((x)=>x.value
    );
    return wallets.sort((a, z)=>{
        if (a.updatedAt > z.updatedAt) return -1;
        if (a.updatedAt < z.updatedAt) return 1;
        if (a.createdAt > z.createdAt) return -1;
        if (a.createdAt < z.createdAt) return 1;
        return 0;
    }).map(WalletRecordOutDB);
}
async function addWallet(address, name, derivationPath, storedKeyInfo) {
    const wallet = await getWallet(address);
    // overwrite mask wallet is not allowed
    if (wallet?.storedKeyInfo?.data) throw new Error('The wallet already exists.');
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.add */ .O.add({
        id: address_,
        type: 'wallet',
        address: address_,
        name: name?.trim() || `Account ${(await getWallets()).length + 1}`,
        derivationPath,
        storedKeyInfo,
        createdAt: now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
    return address_;
}
async function updateWallet(address, updates) {
    const wallet = await getWallet(address);
    const now = new Date();
    const address_ = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .formatEthereumAddress */ .j8)(address);
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.add */ .O.add({
        type: 'wallet',
        id: address_,
        address: address_,
        name: `Account ${(await getWallets()).length + 1}`,
        ...wallet,
        ...updates,
        createdAt: wallet?.createdAt ?? now,
        updatedAt: now
    });
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}
async function deleteWallet(address) {
    await _database_Plugin_db__WEBPACK_IMPORTED_MODULE_6__/* .PluginDB.remove */ .O.remove('wallet', address);
    _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll(undefined);
}


/***/ }),

/***/ 32152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p1": () => (/* binding */ isLocked),
/* harmony export */   "tR": () => (/* binding */ lockWallet),
/* harmony export */   "xG": () => (/* binding */ unlockWallet)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7197);
/* harmony import */ var _password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87368);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53856);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91788);




async function isLocked() {
    return await _password__WEBPACK_IMPORTED_MODULE_1__/* .hasPassword */ .fN() && !await _password__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_getPassword */ .R0();
}
async function lockWallet() {
    _password__WEBPACK_IMPORTED_MODULE_1__/* .clearPassword */ .Cy();
    _settings__WEBPACK_IMPORTED_MODULE_0__/* .currentMaskWalletLockStatusSettings.value */ .Jg.value = _types__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus.LOCKED */ .O.LOCKED;
    _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(true);
}
async function unlockWallet(unverifiedPassword) {
    if (!isLocked()) return true;
    try {
        await _password__WEBPACK_IMPORTED_MODULE_1__/* .verifyPasswordRequired */ .tl(unverifiedPassword);
        _password__WEBPACK_IMPORTED_MODULE_1__/* .INTERNAL_setPassword */ ._B(unverifiedPassword);
        _settings__WEBPACK_IMPORTED_MODULE_0__/* .currentMaskWalletLockStatusSettings.value */ .Jg.value = _types__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus.UNLOCK */ .O.UNLOCK;
        _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(false);
        return true;
    } catch  {
        _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.walletLockStatusUpdated.sendToAll */ .R.events.walletLockStatusUpdated.sendToAll(true);
        return false;
    }
}


/***/ }),

/***/ 87368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ changePassword),
/* harmony export */   "Cy": () => (/* binding */ clearPassword),
/* harmony export */   "FY": () => (/* binding */ setPassword),
/* harmony export */   "Gv": () => (/* binding */ verifyPassword),
/* harmony export */   "R0": () => (/* binding */ INTERNAL_getPassword),
/* harmony export */   "_B": () => (/* binding */ INTERNAL_setPassword),
/* harmony export */   "_M": () => (/* binding */ INTERNAL_getPasswordRequired),
/* harmony export */   "fN": () => (/* binding */ hasPassword),
/* harmony export */   "tl": () => (/* binding */ verifyPasswordRequired),
/* harmony export */   "uo": () => (/* binding */ validatePassword)
/* harmony export */ });
/* unused harmony export validatePasswordRequired */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68317);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36962);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88278);



let password = '';
async function INTERNAL_getPassword() {
    return password ? _database__WEBPACK_IMPORTED_MODULE_0__/* .decryptSecret */ .Q0(password) : '';
}
async function INTERNAL_getPasswordRequired() {
    const password_ = await INTERNAL_getPassword();
    if (!password_) throw new Error('No password set yet or expired.');
    return password_;
}
function INTERNAL_setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    password = newPassword;
}
async function setPassword(newPassword) {
    validatePasswordRequired(newPassword);
    await _database__WEBPACK_IMPORTED_MODULE_0__/* .encryptSecret */ .lM(newPassword);
    INTERNAL_setPassword(newPassword);
}
async function hasPassword() {
    return _database__WEBPACK_IMPORTED_MODULE_0__/* .hasSecret */ .Tx();
}
async function verifyPassword(unverifiedPassword) {
    if (password === unverifiedPassword) return true;
    return (0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(await _database__WEBPACK_IMPORTED_MODULE_0__/* .decryptSecret */ .Q0(unverifiedPassword));
}
async function verifyPasswordRequired(unverifiedPassword) {
    if (!await verifyPassword(unverifiedPassword)) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('popups_wallet_unlock_error_password'));
    return true;
}
async function changePassword(newPassword) {
    validatePasswordRequired(newPassword);
    const oldPassword = await INTERNAL_getPasswordRequired();
    if (oldPassword === newPassword) throw new Error('Failed to set the same password as the old one.');
    await _database__WEBPACK_IMPORTED_MODULE_0__/* .updateSecret */ .nG(oldPassword, newPassword);
}
function validatePassword(unverifiedPassword) {
    if (!unverifiedPassword) return false;
    if (unverifiedPassword.length < 8) return false;
    if (unverifiedPassword.length > 20) return false;
    return [
        /[A-Z]/,
        /[a-z]/,
        /\d/,
        /[^\dA-Za-z]/
    ].filter((x)=>x.test(unverifiedPassword)
    ).length >= 2;
}
function validatePasswordRequired(unverifiedPassword) {
    if (!validatePassword(unverifiedPassword)) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('popups_wallet_password_satisfied_requirement'));
    return true;
}
function clearPassword() {
    password = '';
}


/***/ })

}]);