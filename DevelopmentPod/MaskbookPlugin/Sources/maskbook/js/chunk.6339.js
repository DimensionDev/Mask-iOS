"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6339],{

/***/ 14397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N0": () => (/* binding */ getRecentFiles),
/* harmony export */   "hr": () => (/* binding */ getFileInfo),
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "oq": () => (/* binding */ setFileInfo),
/* harmony export */   "ww": () => (/* binding */ getAllFiles)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25511);

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

/***/ 96339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91243);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14397);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62423);




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

/***/ 62423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator),
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);

/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8117), __webpack_require__.e(3147), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(6316), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(7599)]).then(__webpack_require__.bind(__webpack_require__, 13187)).then(({ upload , setupDatabase , ...rest })=>rest
    )
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8117), __webpack_require__.e(3147), __webpack_require__.e(5756), __webpack_require__.e(9278), __webpack_require__.e(6316), __webpack_require__.e(3742), __webpack_require__.e(7372), __webpack_require__.e(1240), __webpack_require__.e(4038), __webpack_require__.e(3850), __webpack_require__.e(3708), __webpack_require__.e(2116), __webpack_require__.e(2514), __webpack_require__.e(4859), __webpack_require__.e(7599)]).then(__webpack_require__.bind(__webpack_require__, 13187)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ }),

/***/ 89194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gm": () => (/* binding */ signing),
/* harmony export */   "Tb": () => (/* binding */ MAX_FILE_SIZE),
/* harmony export */   "_$": () => (/* binding */ landing),
/* harmony export */   "er": () => (/* binding */ FileRouter),
/* harmony export */   "ki": () => (/* binding */ META_KEY_1),
/* harmony export */   "lw": () => (/* binding */ META_KEY_2),
/* harmony export */   "oC": () => (/* binding */ mesonPrefix)
/* harmony export */ });
const META_KEY_1 = 'com.maskbook.fileservice:1';
const META_KEY_2 = 'com.maskbook.fileservice:2';
const MAX_FILE_SIZE = 0xa00000 // = 10 MiB
;
const landing = 'https://files.r2d2.to/partner/arweave/landing-page.html';
const signing = 'https://service.r2d2.to/arweave-remote-signing';
const mesonPrefix = 'https://coldcdn.com/api/cdn/9m5pde';
var FileRouter;
(function(FileRouter) {
    FileRouter["upload"] = '/upload';
    FileRouter["uploading"] = '/uploading';
    FileRouter["uploaded"] = '/uploaded';
})(FileRouter || (FileRouter = {}));


/***/ }),

/***/ 25511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ri": () => (/* binding */ FileInfoMetadataReader),
  "Fb": () => (/* binding */ FileInfoV1ToV2),
  "Gd": () => (/* binding */ makeFileKeySigned),
  "u": () => (/* binding */ resolveGatewayAPI)
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(89194);
// EXTERNAL MODULE: ../plugins/FileService/src/types.ts
var types = __webpack_require__(23861);
;// CONCATENATED MODULE: ../plugins/FileService/src/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ../plugins/FileService/src/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave","ipfs","swarm"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
;// CONCATENATED MODULE: ../plugins/FileService/src/helpers.ts








const reader_v1 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
}
async function makeFileKeySigned(fileKey) {
    if ((0,isNil/* default */.Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,esm/* encodeText */.YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(esm/* encodeArrayBuffer */.ll);
}
const resolveGatewayAPI = (0,src/* createLookupTableResolver */.FG)({
    [types/* Provider.arweave */.z.arweave]: 'https://arweave.net',
    [types/* Provider.ipfs */.z.ipfs]: 'https://infura-ipfs.io/ipfs',
    [types/* Provider.swarm */.z.swarm]: 'https://bee-2.gateway.ethswarm.org/bzz'
}, ()=>'Unknown provider'
);


/***/ }),

/***/ 23861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Provider)
/* harmony export */ });
var Provider;
(function(Provider) {
    Provider["arweave"] = "arweave";
    Provider["ipfs"] = "ipfs";
    Provider["swarm"] = "swarm";
})(Provider || (Provider = {}));


/***/ })

}]);