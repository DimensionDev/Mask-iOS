"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[787],{

/***/ 19057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uy": () => (/* binding */ RedPacketDatabase),
/* harmony export */   "cb": () => (/* binding */ getAllRedpackets),
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "np": () => (/* binding */ addRedPacket)
/* harmony export */ });
/* unused harmony export getRedPacket */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96596);

let RedPacketDatabase;
function setupDatabase(x) {
    RedPacketDatabase = x;
}
async function getAllRedpackets(ids) {
    const records = [];
    for await (const record of RedPacketDatabase.iterate('red-packet')){
        if (ids.includes(record.value.id)) records.push(RedPacketRecordOutDB(record.value));
    }
    return records;
}
async function getRedPacket(id) {
    const record = await RedPacketDatabase.get('red-packet', id);
    return record ? RedPacketRecordOutDB(record) : undefined;
}
async function addRedPacket(record) {
    return RedPacketDatabase.add(RedPacketRecordIntoDB(record));
}
function RedPacketRecordIntoDB(x) {
    const record = x;
    record.type = 'red-packet';
    return record;
}
function RedPacketRecordOutDB(x) {
    const record = x;
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(record, [
        'type'
    ]);
}


/***/ }),

/***/ 20787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66511);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93131);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19057);



const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .setupDatabase */ .kF)(context.getDatabaseStorage());
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 93131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ RedPacketRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70176);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);


if (false) {}
const RedPacketMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .RedPacketPluginID */ .jY);
const RedPacketRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .RedPacketPluginID */ .jY, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9519)]).then(__webpack_require__.bind(__webpack_require__, 29519))
, RedPacketMessage.rpc);


/***/ })

}]);