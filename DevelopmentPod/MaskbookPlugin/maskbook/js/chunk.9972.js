"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9972],{

/***/ 74702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ indexedDB_KVStorageBackend),
/* harmony export */   "c": () => (/* binding */ inMemory_KVStorageBackend)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94670);


const indexedDB_KVStorageBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createIndexedDB_KVStorageBackend */ .Ic)('mask-kv', (k, v)=>_shared__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__.sendByBroadcast */ .ql.events.__kv_backend_persistent__.sendByBroadcast([
        k,
        v
    ])
);
const inMemory_KVStorageBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createInMemoryKVStorageBackend */ .q0)((k, v)=>_shared__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__.sendByBroadcast */ .ql.events.__kv_backend_in_memory__.sendByBroadcast([
        k,
        v
    ])
);


/***/ }),

/***/ 28511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AY": () => (/* binding */ detachProfileDB),
/* harmony export */   "As": () => (/* binding */ consistentPersonaDBWriteAccess),
/* harmony export */   "B4": () => (/* binding */ deleteProfileDB),
/* harmony export */   "E8": () => (/* binding */ updatePersonaDB),
/* harmony export */   "E9": () => (/* binding */ createPersonaDB),
/* harmony export */   "Eq": () => (/* binding */ queryPersonasWithPrivateKey),
/* harmony export */   "Hm": () => (/* binding */ queryPersonaDB),
/* harmony export */   "IW": () => (/* binding */ queryProfileDB),
/* harmony export */   "Jx": () => (/* binding */ updateRelationDB),
/* harmony export */   "LY": () => (/* binding */ deletePersonaDB),
/* harmony export */   "N8": () => (/* binding */ createRelationDB),
/* harmony export */   "PF": () => (/* binding */ queryRelationsPagedDB),
/* harmony export */   "Ul": () => (/* binding */ safeDeletePersonaDB),
/* harmony export */   "_P": () => (/* binding */ queryPersonasDB),
/* harmony export */   "ah": () => (/* binding */ createProfileDB),
/* harmony export */   "bF": () => (/* binding */ queryRelations),
/* harmony export */   "cl": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "fl": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "hC": () => (/* binding */ createPersonaDBReadonlyAccess),
/* harmony export */   "hK": () => (/* binding */ createOrUpdateRelationDB),
/* harmony export */   "i2": () => (/* binding */ queryProfilesDB),
/* harmony export */   "lX": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "o7": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "tc": () => (/* binding */ attachProfileDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76536);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , createPersonaDBReadonlyAccess , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations , createOrUpdateRelationDB ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 5388).then(__webpack_require__.bind(__webpack_require__, 35388)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(9442), __webpack_require__.e(5989)]).then(__webpack_require__.bind(__webpack_require__, 79442)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 9972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "__kv_storage_read__": () => (/* reexport */ __kv_storage_read__),
  "__kv_storage_write__": () => (/* reexport */ __kv_storage_write__),
  "getChainId": () => (/* reexport */ getChainId),
  "getCurrentCollectibleDataProvider": () => (/* reexport */ getCurrentCollectibleDataProvider),
  "getCurrentPersonaIdentifier": () => (/* binding */ SettingsService_getCurrentPersonaIdentifier),
  "getCurrentPortfolioDataProvider": () => (/* reexport */ getCurrentPortfolioDataProvider),
  "getCurrentSelectedWalletNetwork": () => (/* reexport */ getCurrentSelectedWalletNetwork),
  "getCurrentSelectedWalletProvider": () => (/* reexport */ getCurrentSelectedWalletProvider),
  "getGasOptions": () => (/* reexport */ getGasOptions),
  "getLanguage": () => (/* binding */ SettingsService_getLanguage),
  "getPluginID": () => (/* binding */ SettingsService_getPluginID),
  "getPluginMinimalModeEnabled": () => (/* binding */ SettingsService_getPluginMinimalModeEnabled),
  "getSelectedWalletAddress": () => (/* reexport */ getSelectedWalletAddress),
  "getTheme": () => (/* binding */ SettingsService_getTheme),
  "getTokenPrices": () => (/* reexport */ getTokenPrices),
  "getTrendingDataSource": () => (/* reexport */ getTrendingDataSource),
  "getWalletAllowTestChain": () => (/* reexport */ getWalletAllowTestChain),
  "setCurrentPersonaIdentifier": () => (/* binding */ SettingsService_setCurrentPersonaIdentifier),
  "setLanguage": () => (/* binding */ setLanguage),
  "setPluginID": () => (/* binding */ setPluginID),
  "setPluginMinimalModeEnabled": () => (/* binding */ setPluginMinimalModeEnabled),
  "setTheme": () => (/* binding */ setTheme)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(28511);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(60718);
// EXTERNAL MODULE: ./background/database/kv-storage.ts
var kv_storage = __webpack_require__(74702);
;// CONCATENATED MODULE: ./background/services/settings/kv-storage.ts

async function __kv_storage_write__(kind, key, value) {
    if (kind === 'memory') {
        return kv_storage/* inMemory_KVStorageBackend.setValue */.c.setValue(key, value);
    } else {
        return kv_storage/* indexedDB_KVStorageBackend.setValue */.E.setValue(key, value);
    }
}
async function __kv_storage_read__(kind, key) {
    if (kind === 'memory') {
        return kv_storage/* inMemory_KVStorageBackend.getValue */.c.getValue(key);
    } else {
        return kv_storage/* indexedDB_KVStorageBackend.getValue */.E.getValue(key);
    }
}

;// CONCATENATED MODULE: ./background/services/settings/index.ts


// TODO: Migration in process.
const getPluginMinimalModeEnabled = async ()=>false
;
let currentPersona = (/* unused pure expression or super */ null && (undefined));
const setCurrentPersonaIdentifier = async (identifier)=>{
    currentPersona = identifier;
};
const getCurrentPersonaIdentifier = async ()=>currentPersona
;
const getPluginID = async ()=>'com.mask.evm'
;
const getTheme = async ()=>Appearance.default
;
const getLanguage = async ()=>LanguageOptions.__auto__
;
const getChainId = async ()=>1
;
const getTokenPrices = async ()=>({})
;
const getGasOptions = async ()=>null
;
const getTrendingDataSource = async ()=>0
;
const getCurrentSelectedWalletProvider = async ()=>'Ethereum'
;
const getSelectedWalletAddress = async ()=>''
;
const getCurrentPortfolioDataProvider = async ()=>'Debank'
;
const getCurrentCollectibleDataProvider = async ()=>'OpenSea'
;
const getWalletAllowTestChain = async ()=>false
;
const getCurrentSelectedWalletNetwork = async ()=>'Ethereum'
;

;// CONCATENATED MODULE: ./src/extension/background-script/SettingsService.ts






function create(settings) {
    async function get() {
        await settings.readyPromise;
        return settings.value;
    }
    async function set(val) {
        await settings.readyPromise;
        settings.value = val;
    }
    return [
        get,
        set
    ];
}
const [SettingsService_getPluginID, setPluginID] = create(settings/* pluginIDSettings */.tR);
const [SettingsService_getTheme, setTheme] = create(settings/* appearanceSettings */.OF);
const [SettingsService_getLanguage, setLanguage] = create(settings/* languageSettings */.pQ);
async function SettingsService_getCurrentPersonaIdentifier() {
    await settings/* currentPersonaIdentifier.readyPromise */.cn.readyPromise;
    const personas = (await (0,db/* queryPersonasDB */._P)({
        hasPrivateKey: true
    })).sort((a, b)=>a.createdAt > b.createdAt ? 1 : 0
    ).map((x)=>x.identifier
    );
    const newVal = src/* ECKeyIdentifier.from */.ob.from(settings/* currentPersonaIdentifier.value */.cn.value).unwrapOr((0,head/* default */.Z)(personas));
    if (!newVal) return undefined;
    if (personas.find((x)=>x === newVal
    )) return newVal;
    if (personas[0]) settings/* currentPersonaIdentifier.value */.cn.value = personas[0].toText();
    return personas[0];
}
async function SettingsService_setCurrentPersonaIdentifier(x) {
    await settings/* currentPersonaIdentifier.readyPromise */.cn.readyPromise;
    settings/* currentPersonaIdentifier.value */.cn.value = x.toText();
}
async function SettingsService_getPluginMinimalModeEnabled(id) {
    return !settings/* currentPluginMinimalModeNOTEnabled */.VO['plugin:' + id].value;
}
async function setPluginMinimalModeEnabled(id, enabled) {
    settings/* currentPluginMinimalModeNOTEnabled */.VO['plugin:' + id].value = !enabled;
    shared/* MaskMessages.events.pluginMinimalModeChanged.sendToAll */.ql.events.pluginMinimalModeChanged.sendToAll([
        id,
        enabled
    ]);
}


/***/ })

}]);