"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7524],{

/***/ 67763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N0": () => (/* binding */ getRecentFiles),
/* harmony export */   "hr": () => (/* binding */ getFileInfo),
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "oq": () => (/* binding */ setFileInfo),
/* harmony export */   "ww": () => (/* binding */ getAllFiles)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21627);

let Database;
function setupDatabase(_) {
    Database = _;
}
let migrationDone = false;
async function migrationV1_V2() {
    if (migrationDone) return;
    for await (const x of Database.iterate_mutate('arweave')){
        await Database.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .FileInfoV1ToV2 */ .Fb)(x.value));
        await x.delete();
    }
    migrationDone = true;
}
async function getAllFiles() {
    await migrationV1_V2();
    const files = [];
    for await (const { value  } of Database.iterate('file')){
        files.push(value);
    }
    return files.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime()
    );
}
async function getRecentFiles() {
    const files = await getAllFiles();
    return files.slice(0, 4);
}
async function getFileInfo(checksum) {
    await migrationV1_V2();
    return Database.get('file', checksum);
}
async function setFileInfo(info) {
    await migrationV1_V2();
    return Database.add(info);
}


/***/ }),

/***/ 97524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87245);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67763);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48293);




const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal, context) {
        (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .setupDatabase */ .kF)(context.getDatabaseStorage());
    },
    backup: {
        onBackup: async ()=>{
            const files = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .getAllFiles */ .ww)();
            const result = files?.length ? new ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD(files) : ts_results__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
            return result;
        },
        onRestore: async (files)=>{
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Result.wrap */ .x4.wrap(()=>{
                files.map(async (file)=>{
                    file.createdAt = new Date(file.createdAt);
                    await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .setFileInfo */ .oq)(file);
                });
            });
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 48293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator),
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);

/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(9074)]).then(__webpack_require__.bind(__webpack_require__, 23403)).then(({ upload , setupDatabase , ...rest })=>rest
    )
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3147), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(9074)]).then(__webpack_require__.bind(__webpack_require__, 23403)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ })

}]);