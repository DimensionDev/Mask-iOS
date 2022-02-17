"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8192],{

/***/ 57209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
var attachment_namespaceObject = {};
__webpack_require__.r(attachment_namespaceObject);
__webpack_require__.d(attachment_namespaceObject, {
  "checksum": () => (checksum),
  "decode": () => (decode),
  "encode": () => (encode),
  "getPayload": () => (getPayload),
  "loadKey": () => (loadKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(21795);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}
//# sourceMappingURL=encoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}
//# sourceMappingURL=payload.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}
//# sourceMappingURL=decoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 12224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});


/***/ }),

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

/***/ 49023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAllFiles": () => (/* reexport */ database/* getAllFiles */.ww),
  "getFileInfo": () => (/* reexport */ database/* getFileInfo */.hr),
  "getRecentFiles": () => (/* reexport */ database/* getRecentFiles */.N0),
  "makeAttachment": () => (/* reexport */ makeAttachment),
  "setFileInfo": () => (/* reexport */ database/* setFileInfo */.oq),
  "upload": () => (/* reexport */ upload),
  "uploadLandingPage": () => (/* reexport */ uploadLandingPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20201027083702-d0ae6e2/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var esm = __webpack_require__(57209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/arweave@1.10.16/node_modules/arweave/web/index.js
var web = __webpack_require__(68486);
var web_default = /*#__PURE__*/__webpack_require__.n(web);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/plugins/FileService/constants.ts
var constants = __webpack_require__(74010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.1/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(61844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/arweave@1.10.16/node_modules/arweave/web/lib/utils.js
var utils = __webpack_require__(35801);
;// CONCATENATED MODULE: ./src/plugins/FileService/Worker/remote-signing.ts



async function sign(transaction) {
    const response = await fetch(constants/* signing */.Gm, {
        method: 'POST',
        // Allow workaround based on version
        // headers: { 'mask-version': process.env.VERSION },
        // Temporary workaround for https://github.com/msgpack/msgpack-javascript/issues/145
        body: Uint8Array.from(await makeRequest(transaction))
    });
    transaction.setSignature(await response.json());
}
async function makeRequest(transaction) {
    await transaction.prepareChunks(transaction.data);
    const get = (base, name)=>base.get(name, {
            decode: true,
            string: false
        })
    ;
    return (0,encode/* encode */.c)([
        (0,utils.stringToBuffer)(transaction.format.toString()),
        get(transaction, 'owner'),
        get(transaction, 'target'),
        (0,utils.stringToBuffer)(transaction.quantity),
        (0,utils.stringToBuffer)(transaction.reward),
        get(transaction, 'last_tx'),
        transaction.tags.map((tag)=>[
                get(tag, 'name'),
                get(tag, 'value')
            ]
        ),
        (0,utils.stringToBuffer)(transaction.data_size),
        get(transaction, 'data_root'), 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/FileService/Worker/arweave-token.json
const arweave_token_namespaceObject = JSON.parse('{"kty":"RSA","n":"qajRPsPmNXRt3L5QYk5h62E_LzsuqjsMtjVAjaC2IsMFekiIM1n1oscwJofvEhqCL6Yd9N55xySdzg5_VjBVaxxfCSsPsXVnsHGZDjJR0hOEMe6M-eA-dfxYqqUInNcJiuQBgO-ik2VCo92e6b2H6MozNWIlSmPZefjPWAUB3-Wm0LMPSX-GJiz5m0yS0-1cvtChGzQC38O174G0DfHyFjEmvO0DS4HnOH3htkz_9u96qtily0odFiru6vNuD8aGyfWqaJX52MLiw3zPUihlNnT6z4iw0eh0aKjjnZJV0IkV9042Eu2503KaTi-jfAnwZknB1rGdZziyFJzfD2kSLiPJT9J_YCQGcXqlhZHaq_Iw3PzPziw-rSRr--701HpFjwq41XVhCYdVkzo5OsTbOzgzriCPJuiGZkhrzIOcm2p5U4SLwphc0zBpkkWDj72CKMG2UK_z4GjiGO51VVCxxaKAA-w4z1Ba_LKV5QMnxXE3FiuB6gQW9xNl-K0zaPJbLgIciLV1v2UKWHjjwWacShVRfdrKoKIHbMs9prlO7NyLDhfeBh67i-TfGLtcxgd6Y0v9KqB6j3qFtIvkT4dJL8NCEfOCczS0Mp6K8O0Wy-4r9OU8Q7xjnG2CZ9gh5rF3pKhU3iLYlP8FS4voeNi6ANVJSmOI4qYN8REZqC9Qkec"}');
;// CONCATENATED MODULE: ./src/plugins/FileService/Worker/arweave.ts







const stage = {
};
const instance = web_default().init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});
async function makeAttachment(options) {
    const passphrase = options.key ? (0,kit_esm/* encodeText */.YT)(options.key) : undefined;
    const encoded = await esm/* Attachment.encode */.P.encode(passphrase, {
        block: options.block,
        mime: (0,lodash.isEmpty)(options.type) ? 'application/octet-stream' : options.type,
        metadata: null
    });
    const transaction = await makePayload(encoded, 'application/octet-stream');
    stage[transaction.id] = transaction;
    return transaction.id;
}
// import { ServicesWithProgress } from 'src/extension/service.ts'
// ServicesWithProgress.pluginArweaveUpload
async function* upload(id) {
    for await (const uploader of instance.transactions.upload(stage[id])){
        yield uploader.pctComplete;
    }
}
async function uploadLandingPage(metadata) {
    let linkPrefix = 'https://arweave.net';
    if (metadata.useCDN) {
        linkPrefix = constants/* mesonPrefix */.oC;
    }
    const encodedMetadata = JSON.stringify({
        name: metadata.name,
        size: metadata.size,
        link: `${linkPrefix}/${metadata.txId}`,
        signed: await makeFileKeySigned(metadata.key),
        createdAt: new Date().toISOString()
    });
    const response = await fetch(constants/* landing */._$);
    const text = await response.text();
    const replaced = text.replace('__METADATA__', encodedMetadata);
    const data = (0,kit_esm/* encodeText */.YT)(replaced);
    const transaction = await makePayload(data, 'text/html');
    await instance.transactions.post(transaction);
    return transaction.id;
}
async function makePayload(data, type) {
    const transaction = await instance.createTransaction({
        data
    }, arweave_token_namespaceObject);
    transaction.addTag('Content-Type', type);
    await sign(transaction);
    return transaction;
}
async function makeFileKeySigned(fileKey) {
    if ((0,lodash.isNil)(fileKey)) {
        return null;
    }
    const encodedKey = (0,kit_esm/* encodeText */.YT)(fileKey);
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
    ].map(kit_esm/* encodeArrayBuffer */.ll);
}

// EXTERNAL MODULE: ./src/plugins/FileService/Worker/database.ts
var database = __webpack_require__(99371);
;// CONCATENATED MODULE: ./src/plugins/FileService/Worker/service.ts




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