"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9333],{

/***/ 70682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sf": () => (/* binding */ pluginDataHasValidKeyPath),
/* harmony export */   "HN": () => (/* binding */ createPluginDBAccess),
/* harmony export */   "tB": () => (/* binding */ toStore)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79930);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77046);
/// <reference path="../global.d.ts" />


//#endregion
const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__.openDB)('maskbook-plugin-data', 2, {
        async upgrade (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db.deleteObjectStore('PluginStore');
                const os = db.createObjectStore('PluginStore', {
                    keyPath: [
                        'plugin_id',
                        'value.type',
                        'value.id'
                    ]
                });
                // a compound index by "rec.plugin_id" + "rec.value.type"
                os.createIndex('type', [
                    'plugin_id',
                    'value.type'
                ]);
                for (const each of data){
                    if (!each.plugin_id) continue;
                    if (!pluginDataHasValidKeyPath(each.value)) continue;
                    Reflect.deleteProperty(each, 'type');
                    Reflect.deleteProperty(each, 'record_id');
                    await os.add(each);
                }
            }
        }
    });
});
// cause key path error in "add" will cause transaction fail, we need to check them first
function pluginDataHasValidKeyPath(value) {
    try {
        if (typeof value !== 'object' || value === null) return false;
        const id = Reflect.get(value, 'id');
        const type = Reflect.get(value, 'type');
        if (typeof id !== 'string' && typeof id !== 'number') return false;
        if (typeof type !== 'string' && typeof type !== 'number') return false;
        return true;
    } catch  {
        return false;
    }
}
const createPluginDBAccess = db1;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}


/***/ }),

/***/ 97834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ createPluginDatabase)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70682);

/**
 * @typeParameter Data It should be a [tagged union](https://en.wikipedia.org/wiki/Tagged_union) with an extra `id` field
 * @param plugin_id Plugin ID
 * @returns The database
 * @example
 *
 * type File = { type: 'file'; name: string; id: string }
 * type Folder = { type: 'folder'; file: string[]; id: string }
 * const pluginDatabase = createPluginDatabase<File | Folder>('id')
 * const file: File = { type: 'file', name: 'file.txt', id: uuid() }
 * const folder: Folder = { type: 'folder', file: [file.id], id: uuid() }
 * // Add new data
 * await pluginDatabase.add(file)
 * await pluginDatabase.add(folder)
 * // Remove
 * await pluginDatabase.remove('file', file.id)
 * // Query
 * const result: File | undefined = await pluginDatabase.get('file', file.id)
 * const has: boolean = await pluginDatabase.has('file', file.id)
 * // iterate
 * for await (const i of pluginDatabase.iterate('file')) {
 *     // read only during the for...await loop
 *     // !! NO: await pluginDatabase.remove('file', file.id)
 *     console.log(i.name)
 * }
 * for await (const i of pluginDatabase.iterate_mutate('folder')) {
 *     i.data // Folder
 *     await i.update({ ...i.data, file: [] })
 *     await i.delete()
 * }
 */ function createPluginDatabase(plugin_id) {
    let livingTransaction = undefined;
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    return {
        // Please keep the API minimal
        /**
         * Query an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async get (type, id) {
            const t = await c('r');
            const data = await t.store.get(key({
                type,
                id
            }));
            if (!data) return undefined;
            return data.value;
        },
        async has (type, id) {
            const t = await c('r');
            const count = await t.store.count(key({
                type,
                id
            }));
            return count > 0;
        },
        /**
         * Store a data into the database.
         * @param data Must be an object with "type" and "id"
         */ async add (data) {
            const t = await c('rw');
            if (!(0,___WEBPACK_IMPORTED_MODULE_0__/* .pluginDataHasValidKeyPath */ .Sf)(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
            else await t.store.add((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
        },
        /**
         * Remove an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async remove (type, id) {
            return (await c('rw')).store.delete(key({
                type,
                id
            }));
        },
        /**
         * Iterate over the database of given type (readonly!)
         *
         * !!! During the iterate, you MUST NOT do anything that writes to the store (use iterate_mutate instead)
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield each.value.value;
            }
        },
        /**
         * Iterate over the database of given type (read-write).
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield {
                    data: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: (data)=>each.update((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data))
                };
            }
        }
    };
    async function c(usage) {
        if (usage === 'rw' && (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await (0,___WEBPACK_IMPORTED_MODULE_0__/* .createPluginDBAccess */ .HN)();
            const tx = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
            livingTransaction = tx;
            // Oops, workaround for https://bugs.webkit.org/show_bug.cgi?id=216769 or https://github.com/jakearchibald/idb/issues/201
            try {
                await tx.store.openCursor();
            } catch  {
                livingTransaction = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
                return livingTransaction;
            }
            return tx;
        }
        return livingTransaction;
    }
    function invalidateTransaction() {
        livingTransaction = undefined;
    }
}


/***/ }),

/***/ 77046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

function createDBAccess(opener) {
    let db = undefined;
    function clean() {
        db = undefined;
    }
    return async ()=>{
        if (true) await __webpack_require__.e(/* import() */ 1545).then(__webpack_require__.bind(__webpack_require__, 31545)).then(({ default: ready  })=>ready()
        );
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                db.transaction([], 'readonly', {
                });
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean);
        db.addEventListener('error', clean);
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    let pendingOpen = undefined;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db === null || db === void 0 ? void 0 : db.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        );
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 99371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ww": () => (/* binding */ getAllFiles),
/* harmony export */   "N0": () => (/* binding */ getRecentFiles),
/* harmony export */   "hr": () => (/* binding */ getFileInfo),
/* harmony export */   "oq": () => (/* binding */ setFileInfo)
/* harmony export */ });
/* harmony import */ var _database_Plugin_wrap_plugin_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97834);
/* harmony import */ var _utils_type_transform_asyncIteratorHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17422);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(586);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58970);




const Database = (0,_database_Plugin_wrap_plugin_database__WEBPACK_IMPORTED_MODULE_0__/* .createPluginDatabase */ .X)(_base__WEBPACK_IMPORTED_MODULE_1__/* .base.ID */ .u.ID);
let migrationDone = false;
async function migrationV1_V2() {
    if (migrationDone) return;
    for await (const x of Database.iterate_mutate('arweave')){
        await Database.add((0,_helpers__WEBPACK_IMPORTED_MODULE_2__/* .FileInfoV1ToV2 */ .F)(x.data));
        await x.delete();
    }
    migrationDone = true;
}
async function getAllFiles() {
    await migrationV1_V2();
    const files = await (0,_utils_type_transform_asyncIteratorHelpers__WEBPACK_IMPORTED_MODULE_3__/* .asyncIteratorToArray */ .SR)(Database.iterate('file'));
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

/***/ 59333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(586);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99371);
/* harmony import */ var _rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46426);




const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    init (signal) {
    },
    backup: {
        onBackup: async ()=>{
            const files = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .getAllFiles */ .ww)();
            const result = (files === null || files === void 0 ? void 0 : files.length) ? new _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD(files) : _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
            return Promise.resolve(result);
        },
        onRestore: async (files)=>{
            return Promise.resolve(_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .Result.wrap */ .x4.wrap(()=>{
                files.map(async (file)=>{
                    file.createdAt = new Date(file.createdAt);
                    await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .setFileInfo */ .oq)(file);
                });
            }));
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 46426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PluginFileServiceRPC),
/* harmony export */   "$": () => (/* binding */ PluginFileServiceRPCGenerator)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74010);


/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginFileServiceMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM);
const PluginFileServiceRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM, ()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(8192)]).then(__webpack_require__.bind(__webpack_require__, 49023))
, PluginFileServiceMessage._);
const PluginFileServiceRPCGenerator = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPCGenerator */ .Sc)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .FileServicePluginID */ .hM, ()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6316), __webpack_require__.e(9278), __webpack_require__.e(3850), __webpack_require__.e(8192)]).then(__webpack_require__.bind(__webpack_require__, 49023)).then(({ upload  })=>({
            upload
        })
    )
, PluginFileServiceMessage._2);


/***/ }),

/***/ 58970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ FileInfoMetadataReader),
  "F": () => (/* binding */ FileInfoV1ToV2)
});

// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/FileService/constants.ts
var constants = __webpack_require__(74010);
;// CONCATENATED MODULE: ./src/plugins/FileService/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["arweave"],"title":"type"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","size"]}');
;// CONCATENATED MODULE: ./src/plugins/FileService/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"type":{"type":"string","enum":["file"],"title":"type"},"provider":{"type":"string","enum":["arweave"],"title":"provider"},"id":{"type":"string","title":"id"},"name":{"type":"string","title":"name"},"size":{"type":"number","title":"size"},"createdAt":{"type":"string","format":"date-time","title":"createdAt"},"key":{"type":"string","title":"key"},"payloadTxID":{"type":"string","title":"payloadTxID"},"landingTxID":{"type":"string","title":"landingTxID"}},"required":["createdAt","id","landingTxID","name","payloadTxID","provider","size","type"]}');
;// CONCATENATED MODULE: ./src/plugins/FileService/helpers.ts




const reader_v1 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_1 */.ki, schema_v1_namespaceObject);
const reader_v2 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY_2 */.lw, schema_v2_namespaceObject);
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


/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ }),

/***/ 17422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ts": () => (/* binding */ asyncIteratorWithResult),
/* harmony export */   "l4": () => (/* binding */ memorizeAsyncGenerator),
/* harmony export */   "SR": () => (/* binding */ asyncIteratorToArray)
/* harmony export */ });
/* unused harmony export asyncIteratorToAsyncFunction */
async function* asyncIteratorWithResult(iter, callback) {
    let yielded;
    do {
        const p = iter.next();
        callback === null || callback === void 0 ? void 0 : callback(p);
        yielded = await p;
        yield yielded;
    }while (yielded.done === false)
    return;
}
function asyncIteratorToAsyncFunction(f) {
    return async function(...args) {
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
        }
        throw new TypeError('Invalid iterator state');
    };
}
function memorizeAsyncGenerator(f, getKey, expireAfter) {
    const iterCache = new Map();
    const progressCache = new WeakMap();
    return async function* memorizedAsyncGenerator(...args) {
        const key = getKey(...args);
        var ref;
        const iter = (ref = iterCache.get(key)) !== null && ref !== void 0 ? ref : f(...args);
        iterCache.set(key, iter);
        const process = progressCache.get(iter);
        if (!process) {
            setTimeout(()=>iterCache.delete(key)
            , expireAfter);
            const arr = [];
            progressCache.set(iter, arr);
            try {
                for await (const _ of asyncIteratorWithResult(iter, (x)=>arr.push(x)
                )){
                    if (_.done) return _.value;
                    yield _.value;
                }
            } catch  {
                iterCache.delete(key);
            }
        } else {
            let index = 0;
            while(index < process.length){
                const p = await process[index];
                if (p.done) return p.value;
                yield p.value;
                index += 1;
            }
        }
        // cache not working
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
            yield _.value;
        }
        throw new Error('Unreachable');
    };
}
async function asyncIteratorToArray(it) {
    const arr = [];
    for await (const x of it)arr.push(x);
    return arr;
}


/***/ })

}]);