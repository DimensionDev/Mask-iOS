"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2671],{

/***/ 82417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HU": () => (/* binding */ getPoolFromDB),
/* harmony export */   "bl": () => (/* binding */ addPoolIntoDB),
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "t2": () => (/* binding */ getAllPoolsAsSeller)
/* harmony export */ });
/* unused harmony exports PoolDatabase, removePoolFromDB */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96596);

let PoolDatabase;
function setupDatabase(x) {
    PoolDatabase = x;
}
async function getAllPoolsAsSeller(ids) {
    const records = [];
    for await (const { value: record  } of PoolDatabase.iterate('ito-pool')){
        if (ids.includes(record.payload.pid)) records.push(PoolRecordOutDB(record));
    }
    return records;
}
async function getPoolFromDB(id) {
    const record = await PoolDatabase.get('ito-pool', id);
    return record ? PoolRecordOutDB(record) : undefined;
}
async function addPoolIntoDB(record) {
    if (await PoolDatabase.has('ito-pool', record.id)) return;
    return PoolDatabase.add(PoolRecordIntoDB(record));
}
function removePoolFromDB(id) {
    return PoolDatabase.remove('ito-pool', id);
}
function PoolRecordIntoDB(x) {
    const record = x;
    record.type = 'ito-pool';
    return record;
}
function PoolRecordOutDB(x) {
    const record = x;
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(record, [
        'type'
    ]);
}


/***/ }),

/***/ 32671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69690);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19821);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82417);



const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .setupDatabase */ .kF)(context.getDatabaseStorage());
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 19821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83072);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>__webpack_require__.e(/* import() */ 5288).then(__webpack_require__.bind(__webpack_require__, 65288))
, PluginITO_Messages.rpc);


/***/ })

}]);