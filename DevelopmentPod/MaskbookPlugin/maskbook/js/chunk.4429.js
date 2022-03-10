(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4429],{

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const event_iterator_1 = __webpack_require__(1091);
exports.zN = event_iterator_1.EventIterator;
function subscribe(event, options, evOptions) {
    return new event_iterator_1.EventIterator(({ push }) => {
        this.addEventListener(event, push, options);
        return () => this.removeEventListener(event, push, options);
    }, evOptions);
}
__webpack_unused_export__ = subscribe;
__webpack_unused_export__ = event_iterator_1.EventIterator;


/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class EventQueue {
    constructor() {
        this.pullQueue = [];
        this.pushQueue = [];
        this.eventHandlers = {};
        this.isPaused = false;
        this.isStopped = false;
    }
    push(value) {
        if (this.isStopped)
            return;
        const resolution = { value, done: false };
        if (this.pullQueue.length) {
            const placeholder = this.pullQueue.shift();
            if (placeholder)
                placeholder.resolve(resolution);
        }
        else {
            this.pushQueue.push(Promise.resolve(resolution));
            if (this.highWaterMark !== undefined &&
                this.pushQueue.length >= this.highWaterMark &&
                !this.isPaused) {
                this.isPaused = true;
                if (this.eventHandlers.highWater) {
                    this.eventHandlers.highWater();
                }
                else if (console) {
                    console.warn(`EventIterator queue reached ${this.pushQueue.length} items`);
                }
            }
        }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        for (const placeholder of this.pullQueue) {
            placeholder.resolve({ value: undefined, done: true });
        }
        this.pullQueue.length = 0;
    }
    fail(error) {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        if (this.pullQueue.length) {
            for (const placeholder of this.pullQueue) {
                placeholder.reject(error);
            }
            this.pullQueue.length = 0;
        }
        else {
            const rejection = Promise.reject(error);
            /* Attach error handler to avoid leaking an unhandled promise rejection. */
            rejection.catch(() => { });
            this.pushQueue.push(rejection);
        }
    }
    remove() {
        Promise.resolve().then(() => {
            if (this.removeCallback)
                this.removeCallback();
        });
    }
    [Symbol.asyncIterator]() {
        return {
            next: (value) => {
                const result = this.pushQueue.shift();
                if (result) {
                    if (this.lowWaterMark !== undefined &&
                        this.pushQueue.length <= this.lowWaterMark &&
                        this.isPaused) {
                        this.isPaused = false;
                        if (this.eventHandlers.lowWater) {
                            this.eventHandlers.lowWater();
                        }
                    }
                    return result;
                }
                else if (this.isStopped) {
                    return Promise.resolve({ value: undefined, done: true });
                }
                else {
                    return new Promise((resolve, reject) => {
                        this.pullQueue.push({ resolve, reject });
                    });
                }
            },
            return: () => {
                this.isStopped = true;
                this.pushQueue.length = 0;
                this.remove();
                return Promise.resolve({ value: undefined, done: true });
            },
        };
    }
}
class EventIterator {
    constructor(listen, { highWaterMark = 100, lowWaterMark = 1 } = {}) {
        const queue = new EventQueue();
        queue.highWaterMark = highWaterMark;
        queue.lowWaterMark = lowWaterMark;
        queue.removeCallback =
            listen({
                push: value => queue.push(value),
                stop: () => queue.stop(),
                fail: error => queue.fail(error),
                on: (event, fn) => {
                    queue.eventHandlers[event] = fn;
                },
            }) || (() => { });
        this[Symbol.asyncIterator] = () => queue[Symbol.asyncIterator]();
        Object.freeze(this);
    }
}
exports.EventIterator = EventIterator;
exports["default"] = EventIterator;


/***/ }),

/***/ 9134:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 9134;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 75706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q7": () => (/* reexport */ getGunData),
  "Xg": () => (/* reexport */ pushToGunDataArray),
  "er": () => (/* reexport */ setGunData),
  "Q_": () => (/* reexport */ subscribeGunMapData)
});

// UNUSED EXPORTS: deleteGunData

// EXTERNAL MODULE: ../../node_modules/.pnpm/event-iterator@2.0.0/node_modules/event-iterator/lib/dom.js
var dom = __webpack_require__(37313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/browser.js
var browser = __webpack_require__(32246);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/sea.js
var sea = __webpack_require__(23646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radix.js
var radix = __webpack_require__(43945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radisk.js
var radisk = __webpack_require__(97062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/store.js
var store = __webpack_require__(47322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/rindexed.js
var rindexed = __webpack_require__(76721);
;// CONCATENATED MODULE: ../gun-utils/src/server.ts
const gunServers = [
    'https://gun.r2d2.to/gun'
];

;// CONCATENATED MODULE: ../gun-utils/src/instance.ts







let gun;
function getGunInstance() {
    if (gun) return gun;
    return gun = createGun();
}
const OnCloseEvent = new Set();
function createGun() {
    class WebSocket extends globalThis.WebSocket {
        send(data) {
            this.keepAlive();
            super.send(data);
        }
        get onclose() {
            return null;
        }
        set onclose(f) {}
        constructor(url){
            super(url);
            const abort = this.abort = ()=>{
                gun === null || gun === void 0 ? void 0 : gun.off();
                gun = undefined;
                this.close();
                for (const each of OnCloseEvent)each();
                console.log('[Network/gun] WebSocket of the Gun instance is killed due to inactive.');
            };
            const keepAlive = this.keepAlive = ()=>{
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(abort, 3 * 60 * 1000);
            };
            this.addEventListener('message', (e)=>{
                // if there is no meaningful data exchange, then do not keep the connection alive.
                if (typeof e.data === 'string' && e.data.length < 3) return;
                keepAlive();
            }, {});
        }
    }
    const _ = new (browser_default())({
        peers: [
            ...gunServers
        ],
        localStorage: false,
        radisk: true,
        WebSocket
    });
    _.opt({
        retry: Number.POSITIVE_INFINITY
    });
    return _;
}

;// CONCATENATED MODULE: ../gun-utils/src/utils.ts


function getGunNodeFromPath(path1) {
    const resultNode = path1.reduce((gun, path)=>gun.get(path)
    , getGunInstance());
    return resultNode;
}
/**
 * Get data from Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).once()
 * ```
 */ function getGunData(...path) {
    return new Promise((resolve)=>{
        getGunNodeFromPath(path).once(resolve);
    });
}
/**
 * Set data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(data)
 * ```
 * @param path graph path on Gun
 * @param data data to be stored
 */ function setGunData(path, data) {
    getGunNodeFromPath(path).put(data);
}
/**
 * Delete data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(null!)
 * ```
 * @param path graph path on Gun
 */ function deleteGunData(path) {
    getGunNodeFromPath(path).put(null);
}
/**
 * Push data to the Gun data Set (Mathematical Set)
 * @param path graph path on Gun
 * @param value the object to be stored
 */ function pushToGunDataArray(path, value) {
    getGunNodeFromPath(path).set(value);
}
/**
 * Subscribe future data on Gun.
 * When subscribing a Gun data Set (Mathematical Set), you will not get the immediate result back.
 *
 * @param path graph path on Gun
 * @param isT is the data type T
 * @param abortSignal the signal to stop subscribing
 */ async function* subscribeGunMapData(path, isT, abortSignal) {
    yield* new dom/* EventIterator */.zN((queue)=>{
        // gun.off() will remove ALL listener on it
        let listenerClosed = false;
        function stop() {
            queue.stop();
            listenerClosed = true;
            OnCloseEvent["delete"](stop);
        }
        abortSignal.addEventListener('abort', stop);
        OnCloseEvent.add(stop);
        const resultNode = getGunNodeFromPath(path);
        resultNode.map().on((data)=>{
            if (listenerClosed) return;
            if (isT(data)) queue.push(data);
        });
    });
}

;// CONCATENATED MODULE: ../gun-utils/src/index.ts



/***/ }),

/***/ 10778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CW": () => (/* binding */ storeAvatarDB),
/* harmony export */   "Hm": () => (/* binding */ createAvatarDBAccess),
/* harmony export */   "PU": () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   "dg": () => (/* binding */ queryAvatarDB),
/* harmony export */   "ft": () => (/* binding */ deleteAvatarsDB),
/* harmony export */   "yo": () => (/* binding */ queryAvatarOutdatedDB)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20326);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49100);



const pendingUpdate = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map());
let pendingUpdateTimer;
// #endregion
const createAvatarDBAccess = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-avatar-cache', 1, {
        upgrade (db, oldVersion, newVersion, transaction) {
            // Out line keys
            db.createObjectStore('avatars');
            db.createObjectStore('metadata', {
                keyPath: 'identifier'
            });
        }
    });
});
/**
 * Store avatar into database
 */ async function storeAvatarDB(t, id, avatar) {
    const meta = {
        identifier: id.toText(),
        lastUpdateTime: new Date(),
        lastAccessTime: new Date()
    };
    await t.objectStore('avatars').put(avatar, id.toText());
    await t.objectStore('metadata').put(meta);
}
/**
 * Read avatar out
 */ async function queryAvatarDB(t, id) {
    const result = await t.objectStore('avatars').get(id.toText());
    if (result) scheduleAvatarMetaUpdate(id, {
        lastAccessTime: new Date()
    });
    return result || null;
}
function scheduleAvatarMetaUpdate(id1, meta1) {
    pendingUpdate.set(id1, meta1);
    if (pendingUpdateTimer) return;
    const _1_minute = 60 * 1000;
    pendingUpdateTimer = setTimeout(async ()=>{
        try {
            const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await createAvatarDBAccess(), 'readwrite')('metadata');
            for (const [id, meta] of pendingUpdate){
                const old = await t.objectStore('metadata').get(id.toText());
                await t.objectStore('metadata').put({
                    ...old,
                    ...meta
                });
            }
        } finally{
            pendingUpdateTimer = null;
            pendingUpdate.clear();
        }
    }, _1_minute);
}
/**
 * Find avatar lastUpdateTime or lastAccessTime out-of-date
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 14 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function queryAvatarOutdatedDB(t, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 14 : 7))) {
    const outdated = [];
    for await (const { value  } of t.objectStore('metadata')){
        if (deadline > value[attribute]) {
            const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(value.identifier);
            if (id.err) continue;
            outdated.push(id.val);
        }
    }
    return outdated;
}
/**
 * Query if the avatar is outdated
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 30 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function isAvatarOutdatedDB(t, identifier, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 30 : 7))) {
    const meta = await t.objectStore('metadata').get(identifier.toText());
    if (!meta) return true;
    if (deadline > meta[attribute]) return true;
    return false;
}
/**
 * Batch delete avatars
 * @internal
 */ async function deleteAvatarsDB(t, ids) {
    for (const id of ids){
        t.objectStore('avatars').delete(id.toText());
        t.objectStore('metadata').delete(id.toText());
    }
}


/***/ }),

/***/ 41715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony export */   "Yy": () => (/* binding */ queryProfilesPagedDB),
/* harmony export */   "_P": () => (/* binding */ queryPersonasDB),
/* harmony export */   "ah": () => (/* binding */ createProfileDB),
/* harmony export */   "bF": () => (/* binding */ queryRelations),
/* harmony export */   "cl": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "fl": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "i2": () => (/* binding */ queryProfilesDB),
/* harmony export */   "lX": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "o7": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "tc": () => (/* binding */ attachProfileDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81653);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , queryProfilesPagedDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 113).then(__webpack_require__.bind(__webpack_require__, 70113)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(597)]).then(__webpack_require__.bind(__webpack_require__, 20597)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 32849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
/* unused harmony export PostDBAccess */
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81653);


const { createPostDB , updatePostDB , queryPostDB , queryPostsDB , queryPostPagedDB , PostDBAccess  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 1303).then(__webpack_require__.bind(__webpack_require__, 41303)).then((x)=>x[key](...args)
                );
            }
            return __webpack_require__.e(/* import() */ 8786).then(__webpack_require__.bind(__webpack_require__, 58786)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 49100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);


const iOSFix =  true ? __webpack_require__.e(/* import() */ 426).then(__webpack_require__.bind(__webpack_require__, 40426)).then(({ default: ready  })=>ready()
) : 0;
function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined
            , {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>pendingOpen = db = undefined
            , {
                once: true
            });
        }
        pendingOpen = db = undefined;
    }
    let pendingOpen;
    async function open() {
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
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
        , {
            once: true
        });
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

/***/ 99807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kl": () => (/* binding */ GUN_queryPostKey_version40),
/* harmony export */   "U4": () => (/* binding */ publishPostAESKey_version39Or38),
/* harmony export */   "ab": () => (/* binding */ GUN_queryPostKey_version39Or38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6628);
/* harmony import */ var _masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75706);
/* harmony import */ var event_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37313);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21122);





// !!! Change how this file access Gun will break the compatibility of v40 payload decryption.
async function GUN_queryPostKey_version40(iv, whoAmI) {
    // PATH ON GUN: maskbook > posts > iv > userID
    const result = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)('maskbook', 'posts', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(iv), whoAmI);
    if (!isValidData(result)) return null;
    return {
        encryptedPostKey: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.encryptedKey)),
        postKeyIV: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.salt))
    };
    function isValidData(x) {
        if (typeof x !== 'object') return false;
        if (!x) return false;
        const { encryptedKey , salt: encryptedKeyIV  } = x;
        if (typeof encryptedKey !== 'string' || typeof encryptedKeyIV !== 'string') return false;
        return true;
    }
}
var Version38Or39;
(function(Version38Or391) {
    async function* GUN_queryPostKey_version39Or381(version, iv, minePublicKey, networkHint, abortSignal) {
        const minePublicKeyJWK = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_1__/* .CryptoKeyToJsonWebKey */ .iV)(minePublicKey);
        const { keyHash , postHash  } = await calculatePostKeyPartition(version, networkHint, iv, minePublicKeyJWK);
        /* cspell:disable-next-line */ // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
        console.log(`[@masknet/encryption] Reading key partition [${postHash}][${keyHash}]`);
        const internalNodeNames = Object.keys(await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)(postHash, keyHash) || {}).filter((x)=>x !== '_'
        );
        // ? In this step we get all keys in this category (gun2[postHash][keyHash])
        const resultPromise = internalNodeNames.map((key)=>(0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)(key)
        );
        const iter1 = new event_iterator__WEBPACK_IMPORTED_MODULE_3__/* .EventIterator */ .zN((queue)=>{
            for (const result1 of resultPromise)result1.then(emit, lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
            async function main() {
                const iter = (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .subscribeGunMapData */ .Q_)([
                    postHash
                ], isValidData, abortSignal);
                for await (const data of iter)emit(data);
                queue.stop();
            }
            main();
            function emit(result) {
                if (abortSignal.aborted) return;
                if (!isValidData(result)) return;
                queue.push({
                    encryptedPostKey: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.encryptedKey)),
                    postKeyIV: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.salt))
                });
            }
        });
        yield* iter1;
    }
    Version38Or391.GUN_queryPostKey_version39Or38 = GUN_queryPostKey_version39Or381;
    async function publishPostAESKey_version39Or381(version, postIV, networkHint, receiversKeys) {
        const postHash = await hashIV(networkHint, postIV);
        // Store AES key to gun
        receiversKeys.forEach(async ({ aesKey , receiverKey  })=>{
            const keyHash = await (version === -38 ? hashKey38 : hashKey39)(receiverKey);
            console.log(`gun[${postHash}][${keyHash}].push(`, aesKey, ')');
            (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .pushToGunDataArray */ .Xg)([
                postHash,
                keyHash
            ], aesKey);
        });
    }
    Version38Or391.publishPostAESKey_version39Or38 = publishPostAESKey_version39Or381;
    function isValidData(data) {
        if (!data) return false;
        if (typeof data !== 'object') return false;
        const { encryptedKey , salt  } = data;
        if (typeof encryptedKey !== 'string') return false;
        if (typeof salt !== 'string') return false;
        return true;
    }
    async function calculatePostKeyPartition(version, networkHint, iv, key) {
        const postHash = await hashIV(networkHint, iv);
        // In version > -39, we will use stable hash to prevent unstable result for key hashing
        const keyHash = version === -39 ? await hashKey39(key) : await hashKey38(key);
        return {
            postHash,
            keyHash
        };
    }
    async function hashIV(networkHint, iv) {
        const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
        const N = 2;
        const hash = await work1((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(iv), hashPair);
        return networkHint + hash.substring(0, N);
    }
    // The difference between V38 and V39 is: V39 is not stable (JSON.stringify)
    // it's an implementation bug but for backward compatibility, it cannot be changed.
    // Therefore we upgraded the version and use a stable hash.
    async function hashKey39(key) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const jwk = JSON.stringify(key);
        const hash = await work1(jwk, hashPair);
        return hash.substring(0, N);
    }
    async function hashKey38(jwk) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const hash = await work1(jwk.x + jwk.y, hashPair);
        return hash.substring(0, N);
    }
    // This is a self contained Gun.SEA.work implementation that only contains code path we used.
    async function work1(data, salt) {
        const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(data), {
            name: 'PBKDF2'
        }, false, [
            'deriveBits', 
        ]);
        const work = await crypto.subtle.deriveBits({
            name: 'PBKDF2',
            iterations: 100000,
            salt: new TextEncoder().encode(salt),
            hash: {
                name: 'SHA-256'
            }
        }, key, 512);
        const result = arrayBufferToBase64(work);
        return result;
        function arrayBufferToBase64(buffer) {
            let binary = '';
            const bytes = new Uint8Array(buffer);
            const len = bytes.byteLength;
            // eslint-disable-next-line no-plusplus
            for(let i = 0; i < len; i++){
                binary += String.fromCharCode(bytes[i]);
            }
            return window.btoa(binary);
        }
    }
})(Version38Or39 || (Version38Or39 = {}));
const { GUN_queryPostKey_version39Or38 , publishPostAESKey_version39Or38  } = Version38Or39;


/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ iOSWebkitChannel)
/* harmony export */ });
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}


/***/ }),

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2045);



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8211).then(__webpack_require__.bind(__webpack_require__, 8211)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 41022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptComment),
/* harmony export */   "decryptMessage1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1ToNByMyself),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1ToNByOther),
/* harmony export */   "decryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptWithAES),
/* harmony export */   "encrypt1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encrypt1To1),
/* harmony export */   "encrypt1ToN": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encrypt1ToN),
/* harmony export */   "encryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encryptComment),
/* harmony export */   "encryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encryptWithAES),
/* harmony export */   "extractAESKeyInMessage": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.extractAESKeyInMessage),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.generateOthersAESKeyEncrypted),
/* harmony export */   "publicSharedAESKey": () => (/* binding */ publicSharedAESKey),
/* harmony export */   "typedMessageParse": () => (/* binding */ typedMessageParse),
/* harmony export */   "typedMessageStringify": () => (/* binding */ typedMessageStringify)
/* harmony export */ });
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69492);
/* harmony import */ var _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12475);
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 

// @ts-ignore
const publicSharedAESKey = {
    alg: 'A256GCM',
    ext: true,
    /* cspell:disable-next-line */ k: '3Bf8BJ3ZPSMUM2jg2ThODeLuRRD_-_iwQEaeLdcQXpg',
    key_ops: [
        'encrypt',
        'decrypt'
    ],
    kty: 'oct'
};
/**
 * With plugin: {"payload": "data"}🧩My message
 * Without plugin: My message
 */ function typedMessageStringify(x) {
    if (!(0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(x)) throw new Error('Not supported typed message.');
    if (!x.meta || x.meta.size === 0) return x.content;
    const obj = {};
    for (const [a, b] of x.meta)obj[a] = b;
    return JSON.stringify(obj) + '\u{1F9E9}' + x.content;
}
function typedMessageParse(x) {
    const [maybeMetadata, ...end] = x.split('\u{1F9E9}');
    try {
        const json = JSON.parse(maybeMetadata);
        if (typeof json !== 'object' || json === null || Object.keys(json).length === 0) throw new Error('Not a metadata');
        return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(end.join('\u{1F9E9}'), new Map(Object.entries(json)));
    } catch  {}
    return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(x);
}


/***/ }),

/***/ 12475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptComment": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptComment),
/* harmony export */   "decryptMessage1To1": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1ToNByMyself),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1ToNByOther),
/* harmony export */   "decryptWithAES": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptWithAES),
/* harmony export */   "encrypt1To1": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encrypt1To1),
/* harmony export */   "encrypt1ToN": () => (/* binding */ encrypt1ToN),
/* harmony export */   "encryptComment": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encryptComment),
/* harmony export */   "encryptWithAES": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encryptWithAES),
/* harmony export */   "extractAESKeyInMessage": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.extractAESKeyInMessage),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* binding */ generateOthersAESKeyEncrypted),
/* harmony export */   "typedMessageParse": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.typedMessageParse),
/* harmony export */   "typedMessageStringify": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.typedMessageStringify)
/* harmony export */ });
/* harmony import */ var _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73356);
/**
 * @deprecated This version of payload is not in use.
 * Please goto Crypto alpha v38
 */ 
async function generateOthersAESKeyEncrypted(version, AESKey, privateKeyECDH, othersPublicKeyECDH) {
    const othersPublicKeyECDH_ = othersPublicKeyECDH.map((x, index)=>({
            key: x,
            name: index.toString()
        })
    );
    const othersAESKeyEncrypted = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.generateOthersAESKeyEncrypted)(-40, AESKey, privateKeyECDH, othersPublicKeyECDH_);
    const othersAESKeyEncrypted_ = othersAESKeyEncrypted.map((key)=>({
            aesKey: key.key,
            receiverKey: othersPublicKeyECDH[Number.parseInt(key.name, 10)]
        })
    );
    return othersAESKeyEncrypted_;
}
/**
 * Encrypt 1 to N
 *
 * This function is generally based on encrypt1ToN in crypto-alpha-40
 */ async function encrypt1ToN(info) {
    const othersPublicKeyECDH = info.othersPublicKeyECDH.map((x, index)=>({
            key: x,
            name: index.toString()
        })
    );
    const { encryptedContent , iv , othersAESKeyEncrypted , ownersAESKeyEncrypted , postAESKey  } = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encrypt1ToN)({
        ...info,
        othersPublicKeyECDH,
        version: -40
    });
    const othersAESKeyEncrypted_ = othersAESKeyEncrypted.map((key)=>({
            aesKey: key.key,
            receiverKey: othersPublicKeyECDH[Number.parseInt(key.name, 10)].key
        })
    );
    return {
        encryptedContent,
        iv,
        version: info.version,
        ownersAESKeyEncrypted,
        othersAESKeyEncrypted: othersAESKeyEncrypted_,
        postAESKey
    };
}







/***/ }),

/***/ 73356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptComment": () => (/* binding */ decryptComment),
/* harmony export */   "decryptMessage1To1": () => (/* binding */ decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* binding */ decryptMessage1ToNByMyself),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* binding */ decryptMessage1ToNByOther),
/* harmony export */   "decryptWithAES": () => (/* binding */ decryptWithAES),
/* harmony export */   "encrypt1To1": () => (/* binding */ encrypt1To1),
/* harmony export */   "encrypt1ToN": () => (/* binding */ encrypt1ToN),
/* harmony export */   "encryptComment": () => (/* binding */ encryptComment),
/* harmony export */   "encryptWithAES": () => (/* binding */ encryptWithAES),
/* harmony export */   "extractAESKeyInMessage": () => (/* binding */ extractAESKeyInMessage),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* binding */ generateOthersAESKeyEncrypted),
/* harmony export */   "typedMessageParse": () => (/* binding */ typedMessageParse),
/* harmony export */   "typedMessageStringify": () => (/* binding */ typedMessageStringify)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6900);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4625);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69492);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1335);
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ /**
 * @deprecated This version of payload is not in use.
 * Please goto Crypto alpha v38
 */ 




// #region Derive AES Key from ECDH key
/**
 * Derive the key from your private ECDH key and someone else's ECDH key.
 * If the key is ECDSA, it will be transform to ECDH.
 *
 * If you provide the same privateKey, othersPublicKey and salt, the results will be the same.
 * @param privateKey Your private key
 * @param othersPublicKey Public key of someone you want to derive key to
 * @param salt Salt
 */ async function deriveAESKey(privateKey, othersPublicKey, /** If salt is not provided, we will generate one. And you should send it to your friend. */ salt = crypto.getRandomValues(new Uint8Array(64))) {
    const op = othersPublicKey;
    const pr = privateKey;
    const derivedKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.aes_to_raw */ .i.aes_to_raw(await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .derive_AES_GCM_256_Key_From_ECDH_256k1_Keys */ .Kn)(pr, op));
    const _salt = typeof salt === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(salt) : salt;
    const UntitledUint8Array = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(new Uint8Array(derivedKey), _salt);
    const password = await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(UntitledUint8Array, _salt), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('KEY')));
    const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(UntitledUint8Array, _salt), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('IV'))));
    const iv = new Uint8Array(16);
    for(let i = 0; i <= 16; i += 1){
        // eslint-disable-next-line no-bitwise
        iv[i] = iv_pre[i] ^ iv_pre[16 + i];
    }
    const key = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.raw_to_aes */ .i.raw_to_aes(password);
    return {
        key,
        salt: _salt,
        iv
    };
}
// #endregion
// #region encrypt text
/**
 * Encrypt 1 to 1
 */ async function encrypt1To1(info) {
    const { version , privateKeyECDH , othersPublicKeyECDH  } = info;
    let { content  } = info;
    if (typeof content === 'string') content = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content);
    const { iv , key , salt  } = await deriveAESKey(privateKeyECDH, othersPublicKeyECDH);
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(key, iv, content);
    return {
        salt,
        encryptedContent,
        version: -40
    };
}
async function generateOthersAESKeyEncrypted(version, AESKey, privateKeyECDH, othersPublicKeyECDH) {
    const exportedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
    return Promise.all(othersPublicKeyECDH.map(async ({ key , name  })=>{
        const encrypted = await encrypt1To1({
            // This is the deprecated -40 code path
            version: -40,
            content: exportedAESKey,
            othersPublicKeyECDH: key,
            privateKeyECDH: privateKeyECDH
        });
        return {
            name,
            key: {
                version: -40,
                salt: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.salt),
                encryptedKey: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.encryptedContent)
            }
        };
    }));
}
/**
 * Encrypt 1 to N
 */ async function encrypt1ToN(info) {
    const { version , content , othersPublicKeyECDH , privateKeyECDH , ownersLocalKey , iv  } = info;
    const AESKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.generate_aes_gcm */ .i.generate_aes_gcm();
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(AESKey, iv, typeof content === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content) : content);
    const exportedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
    const ownersAESKeyEncrypted = (await encryptWithAES({
        aesKey: ownersLocalKey,
        content: exportedAESKey,
        iv
    })).content;
    const othersAESKeyEncrypted = await generateOthersAESKeyEncrypted(-40, AESKey, privateKeyECDH, othersPublicKeyECDH);
    return {
        encryptedContent,
        iv,
        version: -40,
        ownersAESKeyEncrypted,
        othersAESKeyEncrypted,
        postAESKey: AESKey
    };
}
// #endregion
// #region decrypt text
/**
 * Decrypt 1 to 1
 */ async function decryptMessage1To1(info) {
    const { anotherPublicKeyECDH , version , salt , encryptedContent , privateKeyECDH  } = info;
    const encrypted = typeof encryptedContent === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encryptedContent) : encryptedContent;
    const { iv , key  } = await deriveAESKey(privateKeyECDH, anotherPublicKeyECDH, salt);
    return _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(key, iv, encrypted);
}
/**
 * Decrypt 1 to N message that send by other
 */ async function decryptMessage1ToNByOther(info) {
    const { encryptedContent , privateKeyECDH , authorsPublicKeyECDH , iv  } = info;
    const AESKeyEncrypted = Array.isArray(info.AESKeyEncrypted) ? info.AESKeyEncrypted : [
        info.AESKeyEncrypted
    ];
    let resolvedAESKey = null;
    await Promise.all(AESKeyEncrypted.map(async (key)=>{
        try {
            const result = await decryptMessage1To1({
                version: -40,
                salt: key.salt,
                encryptedContent: key.encryptedKey,
                anotherPublicKeyECDH: authorsPublicKeyECDH,
                privateKeyECDH: privateKeyECDH
            });
            resolvedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(result);
        } catch  {}
    }));
    if (resolvedAESKey === null) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('service_not_share_target'));
    const aesKey = JSON.parse(resolvedAESKey);
    return [
        await decryptWithAES({
            aesKey,
            iv,
            encrypted: encryptedContent
        }),
        aesKey
    ];
}
async function extractAESKeyInMessage(version, encodedEncryptedKey, _iv, myLocalKey) {
    const iv = typeof _iv === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(_iv) : _iv;
    const encryptedKey = typeof encodedEncryptedKey === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encodedEncryptedKey) : encodedEncryptedKey;
    const decryptedAESKeyJWK = JSON.parse((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(await decryptWithAES({
        aesKey: myLocalKey,
        iv,
        encrypted: encryptedKey
    })));
    return decryptedAESKeyJWK;
}
/**
 * Decrypt 1 to N message that send by myself
 */ async function decryptMessage1ToNByMyself(info) {
    const { encryptedContent , myLocalKey , iv , encryptedAESKey  } = info;
    const decryptedAESKey = await extractAESKeyInMessage(-40, encryptedAESKey, iv, myLocalKey);
    const post = await decryptWithAES({
        aesKey: decryptedAESKey,
        encrypted: encryptedContent,
        iv
    });
    return [
        post,
        decryptedAESKey
    ];
}
/**
 * Decrypt the content encrypted by AES
 */ async function decryptWithAES(info) {
    const { aesKey  } = info;
    const iv = typeof info.iv === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.iv) : info.iv;
    const encrypted = typeof info.encrypted === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.encrypted) : info.encrypted;
    return _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(aesKey, iv, encrypted);
}
async function encryptWithAES(info) {
    const iv = info.iv ? info.iv : crypto.getRandomValues(new Uint8Array(16));
    const content = typeof info.content === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(info.content) : info.content;
    const encrypted = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(info.aesKey, iv, content);
    return {
        content: encrypted,
        iv
    };
}
// #endregion
// #region Comment
function extractCommentPayload(text) {
    const [_, toEnd] = text.split('\u{1F3B6}2/4|');
    const [content, _2] = (toEnd || '').split(':||');
    if (content.length) return content;
    return;
}
const getCommentKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async function(postIV, postContent) {
    const pbkdf = await _modules_workers__WEBPACK_IMPORTED_MODULE_2__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postContent));
    const aes = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf, (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postIV));
    return aes;
}, (a, b)=>a + b
);
// * Payload format: 🎶2/4|encrypted_comment:||
async function encryptComment(postIV, postContent, comment) {
    if (typeof postIV !== 'string') postIV = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    const key = await getCommentKey(postIV, postContent);
    const x = await encryptWithAES({
        content: comment,
        aesKey: key,
        iv: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV)
    });
    return `\u{1F3B6}2/4|${(0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(x.content)}:||`;
}
async function decryptComment(postIV, postContent, encryptComment1) {
    if (typeof postIV !== 'string') postIV = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    if (typeof encryptComment1 !== 'string') encryptComment1 = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(encryptComment1);
    const payload = extractCommentPayload(encryptComment1);
    if (!payload) return null;
    const key = await getCommentKey(postIV, postContent);
    try {
        const x = await decryptWithAES({
            aesKey: key,
            iv: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV),
            encrypted: payload
        });
        return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(x);
    } catch  {
        return null;
    }
}
// #endregion
function typedMessageStringify(x) {
    throw new Error('Not supported typed message in version older than v39.');
}
function typedMessageParse(x) {
    return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_3__/* .makeTypedMessageText */ .P)(x);
}


/***/ }),

/***/ 94256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X2": () => (/* reexport */ createPluginDatabase)
});

// UNUSED EXPORTS: createPluginDBAccess, pluginDataHasValidKeyPath, toStore

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(49100);
;// CONCATENATED MODULE: ./src/database/Plugin/base.ts


// #endregion
const db = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-plugin-data', 2, {
        async upgrade (db1, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db1.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db1.deleteObjectStore('PluginStore');
                const os = db1.createObjectStore('PluginStore', {
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
const createPluginDBAccess = db;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}

;// CONCATENATED MODULE: ./src/database/Plugin/wrap-plugin-database.ts

/**
 * Avoid calling it directly.
 *
 * You should get the instance from WorkerContext when the plugin is initialized.
 *
 * ```ts
 * let storage: Plugin.Worker.Storage<T | T2> | null = null
 * const worker: Plugin.Worker.Definition = {
 *     ...base,
 *     init(signal, context) {
 *         storage = context.getDatabaseStorage()
 *         // get it here, instance of calling this function directly.
 *     },
 * }
 * ```
 */ function createPluginDatabase(plugin_id, signal) {
    let livingTransaction = undefined;
    let ended = false;
    signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', ()=>{
        // give some extra time after the plugin shutdown to store data.
        setTimeout(()=>ended = true
        , 1500);
    });
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    function ensureAlive() {
        if (ended) throw new Error(`[@masknet/plugin-infra] Storage instance for ${plugin_id} has been expired.`);
    }
    return {
        async get (type, id) {
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
        async add (data) {
            const t = await c('rw');
            if (!pluginDataHasValidKeyPath(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put(toStore(plugin_id, data));
            else await t.store.add(toStore(plugin_id, data));
            t.commit();
        },
        async remove (type, id) {
            const t = await c('rw');
            await t.store.delete(key({
                type,
                id
            }));
            t.commit();
        },
        async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const roCursor = {
                    value: each.value.value
                };
                yield roCursor;
            }
        },
        async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const rwCursor = {
                    value: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: async (data)=>{
                        await each.update(toStore(plugin_id, data));
                    }
                };
                yield rwCursor;
            }
        }
    };
    async function c(usage) {
        var ref;
        ensureAlive();
        if (usage === 'rw' && ((ref = livingTransaction) === null || ref === void 0 ? void 0 : ref.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await createPluginDBAccess();
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

;// CONCATENATED MODULE: ./src/database/Plugin/index.ts




/***/ }),

/***/ 1196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w0": () => (/* reexport */ createPersonaByJsonWebKey),
  "A8": () => (/* reexport */ createPersonaByMnemonic),
  "c9": () => (/* reexport */ createPersonaByMnemonicV2),
  "$v": () => (/* reexport */ post/* createPostDB */.$v),
  "lr": () => (/* reexport */ createProfileWithPersona),
  "FB": () => (/* reexport */ deletePersona),
  "A": () => (/* reexport */ loginPersona),
  "lW": () => (/* reexport */ logoutPersona),
  "m3": () => (/* reexport */ personaRecordToPersona),
  "Lw": () => (/* reexport */ queryAvatarDataURL),
  "DM": () => (/* reexport */ queryLocalKey),
  "pR": () => (/* reexport */ queryPersona),
  "Id": () => (/* reexport */ queryPersonaByProfile),
  "yQ": () => (/* reexport */ queryPersonaRecord),
  "q3": () => (/* reexport */ post/* queryPostDB */.q3),
  "xN": () => (/* reexport */ post/* queryPostPagedDB */.xN),
  "hZ": () => (/* reexport */ post/* queryPostsDB */.hZ),
  "wb": () => (/* reexport */ queryPrivateKey),
  "JL": () => (/* reexport */ queryProfile),
  "V6": () => (/* reexport */ queryProfilePaged),
  "X8": () => (/* reexport */ queryProfilesWithQuery),
  "M_": () => (/* reexport */ queryPublicKey),
  "rR": () => (/* reexport */ renamePersona),
  "gn": () => (/* reexport */ setupPersona),
  "Zk": () => (/* reexport */ storeAvatar),
  "rr": () => (/* reexport */ post/* updatePostDB */.rr)
});

// UNUSED EXPORTS: PostDBAccess, createPluginDBAccess, createPluginDatabase, pluginDataHasValidKeyPath, profileRecordToProfile, queryPersonasWithQuery, toStore

// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./background/database/avatar-cache/db.ts
var db = __webpack_require__(10778);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts
var native_rpc = __webpack_require__(81653);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(49100);
;// CONCATENATED MODULE: ./background/database/avatar-cache/avatar.ts






/**
 * Get a (cached) blob url for an identifier. No cache for native api.
 * ? Because of cross-origin restrictions, we cannot use blob url here. sad :(
 */ const queryAvatarDataURL = native_rpc/* hasNativeAPI */._ ? async function(identifier) {
    return native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.query_avatar */.Nz.api.query_avatar({
        identifier: identifier.toText()
    });
} : (0,esm/* memoizePromise */.J3)(async function(identifier) {
    const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readonly')('avatars');
    const buffer = await (0,db/* queryAvatarDB */.dg)(t, identifier);
    if (!buffer) throw new Error('Avatar not found');
    return (0,esm/* blobToDataURL */.n5)(new Blob([
        buffer
    ], {
        type: 'image/png'
    }));
}, (id)=>id.toText()
);
/**
 * Store an avatar with a url for an identifier.
 * @param identifier - This avatar belongs to.
 * @param avatar - Avatar to store. If it is a string, will try to fetch it.
 * @param force - Ignore the outdated setting. Force update.
 */ async function storeAvatar(identifier, avatar) {
    if (identifier instanceof src/* ProfileIdentifier */.WO && identifier.isUnknown) return;
    try {
        if (native_rpc/* hasNativeAPI */._) {
            // ArrayBuffer is unreachable on Native side.
            if (typeof avatar !== 'string') return;
            await (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.store_avatar */.Nz.api.store_avatar({
                identifier: identifier.toText(),
                avatar: avatar
            }));
            return;
        }
        if (typeof avatar === 'string') {
            if (avatar.startsWith('https') === false) return;
            const isOutdated = await (0,db/* isAvatarOutdatedDB */.PU)((0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readonly')('metadata'), identifier, 'lastUpdateTime');
            if (isOutdated) {
                // ! must fetch before create the transaction
                const buffer = await (await fetch(avatar)).arrayBuffer();
                {
                    const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
                    await (0,db/* storeAvatarDB */.CW)(t, identifier, buffer);
                }
            }
        // else do nothing
        } else {
            const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
            await (0,db/* storeAvatarDB */.CW)(t, identifier, avatar);
        }
    } catch (error) {
        console.error('[AvatarDB] Store avatar failed', error);
    } finally{
        var ref;
        (ref = queryAvatarDataURL.cache) === null || ref === void 0 ? void 0 : ref.delete(identifier.toText());
        if (identifier instanceof src/* ProfileIdentifier */.WO) {
            shared/* MaskMessages.events.profilesChanged.sendToAll */.ql.events.profilesChanged.sendToAll([
                {
                    of: identifier,
                    reason: 'update'
                }
            ]);
        }
    }
}

// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(32849);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var persona_db = __webpack_require__(41715);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(74907);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var bip39_src = __webpack_require__(68440);
;// CONCATENATED MODULE: ./src/database/Persona/helpers.ts






async function profileRecordToProfile(record) {
    const rec = {
        ...record
    };
    const persona = rec.linkedPersona;
    delete rec.linkedPersona;
    delete rec.localKey;
    const _ = persona ? queryPersona(persona) : undefined;
    const _2 = queryAvatarDataURL(rec.identifier).catch(()=>undefined
    );
    return {
        ...rec,
        linkedPersona: await _,
        avatar: await _2
    };
}
function personaRecordToPersona(record) {
    const rec = {
        ...record
    };
    delete rec.localKey;
    // @ts-ignore
    delete rec.publicKey;
    const hasPrivateKey = !!rec.privateKey;
    delete rec.privateKey;
    return {
        ...rec,
        hasPrivateKey,
        fingerprint: rec.identifier.compressedPoint
    };
}
/**
 * Query a Profile even it is not stored in the database.
 * @param identifier - Identifier for people want to query
 */ async function queryProfile(identifier) {
    const _ = await (0,persona_db/* queryProfileDB */.IW)(identifier);
    if (_) return profileRecordToProfile(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
async function queryProfilePaged(...args) {
    const _ = await (0,persona_db/* queryProfilesPagedDB */.Yy)(...args);
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Query a persona even it is not stored in the database.
 * @param identifier - Identifier for people want to query
 */ async function queryPersona(identifier) {
    const _ = await (0,persona_db/* queryPersonaDB */.Hm)(identifier);
    if (_) return personaRecordToPersona(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date(),
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        hasPrivateKey: false,
        hasLogout: false,
        fingerprint: identifier.compressedPoint
    };
}
/**
 * Select a set of Profiles
 */ async function queryProfilesWithQuery(query) {
    const _ = await (0,persona_db/* queryProfilesDB */.i2)(query);
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Select a set of Personas
 */ async function queryPersonasWithQuery(query) {
    const _ = await (0,persona_db/* queryPersonasDB */._P)(query);
    return _.map(personaRecordToPersona);
}
async function deletePersona(id, confirm) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,persona_db/* queryPersonaDB */.Hm)(id, t);
        if (!d) return;
        for (const e of d.linkedProfiles){
            await (0,persona_db/* detachProfileDB */.AY)(e[0], t);
        }
        if (confirm === 'delete even with private') await (0,persona_db/* deletePersonaDB */.LY)(id, 'delete even with private', t);
        else if (confirm === 'safe delete') await (0,persona_db/* safeDeletePersonaDB */.Ul)(id, t);
    });
}
async function loginPersona(identifier) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: false
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function logoutPersona(identifier) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: true
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function renamePersona(identifier, nickname) {
    const personas = await queryPersonasWithQuery({
        nameContains: nickname
    });
    if (personas.length > 0) {
        throw new Error('Nickname already exists');
    }
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            nickname
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function setupPersona(id) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,persona_db/* queryPersonaDB */.Hm)(id, t);
        if (!d) throw new Error('cannot find persona');
        if (d.linkedProfiles.size === 0) throw new Error('persona should link at least one profile');
        if (d.uninitialized) {
            await (0,persona_db/* updatePersonaDB */.E8)({
                identifier: id,
                uninitialized: false
            }, {
                linkedProfiles: 'merge',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    });
}
async function queryPersonaByProfile(i) {
    return (await queryProfile(i)).linkedPersona;
}
function queryPersonaRecord(i) {
    return i instanceof src/* ProfileIdentifier */.WO ? (0,persona_db/* queryPersonaByProfileDB */.fl)(i) : (0,persona_db/* queryPersonaDB */.Hm)(i);
}
async function queryPublicKey(i) {
    return queryPersonaRecord(i).then((x)=>{
        return x === null || x === void 0 ? void 0 : x.publicKey;
    });
}
async function queryPrivateKey(i) {
    return queryPersonaRecord(i).then((x)=>{
        return x === null || x === void 0 ? void 0 : x.privateKey;
    });
}
async function createPersonaByMnemonic(nickname, password) {
    const { key , mnemonicRecord: mnemonic  } = await (0,mnemonic_code/* generate_ECDH_256k1_KeyPair_ByMnemonicWord */.xX)(password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}
async function createPersonaByMnemonicV2(mnemonicWord, nickname, password) {
    const personas = await queryPersonasWithQuery({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    const verify = (0,bip39_src/* validateMnemonic */._I)(mnemonicWord);
    if (!verify) throw new Error('Verify error');
    const { key , mnemonicRecord: mnemonic  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(mnemonicWord, password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}
async function createPersonaByJsonWebKey(options) {
    const identifier = (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(options.publicKey);
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: identifier,
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        publicKey: options.publicKey,
        privateKey: options.privateKey,
        nickname: options.nickname,
        mnemonic: options.mnemonic,
        localKey: options.localKey,
        hasLogout: false,
        uninitialized: options.uninitialized
    };
    await (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* createPersonaDB */.E9)(record, t)
    );
    return identifier;
}
async function createProfileWithPersona(profileID, data, keys) {
    const ec_id = (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(keys.publicKey);
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        nickname: keys.nickname,
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        localKey: keys.localKey,
        mnemonic: keys.mnemonic,
        hasLogout: false
    };
    await (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        await (0,persona_db/* createOrUpdatePersonaDB */.lX)(rec, {
            explicitUndefinedField: 'ignore',
            linkedProfiles: 'merge'
        }, t);
        await (0,persona_db/* attachProfileDB */.tc)(profileID, ec_id, data, t);
    });
}
async function queryLocalKey(i) {
    if (i instanceof src/* ProfileIdentifier */.WO) {
        const profile = await (0,persona_db/* queryProfileDB */.IW)(i);
        if (!profile) return null;
        if (profile.localKey) return profile.localKey;
        if (!profile.linkedPersona) return null;
        return queryLocalKey(profile.linkedPersona);
    } else {
        var ref;
        var ref1;
        return (ref1 = (ref = await (0,persona_db/* queryPersonaDB */.Hm)(i)) === null || ref === void 0 ? void 0 : ref.localKey) !== null && ref1 !== void 0 ? ref1 : null;
    }
}
function cover_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    throw new Error('Function not implemented.');
}

// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(94256);
;// CONCATENATED MODULE: ./src/database/index.ts







/***/ }),

/***/ 18465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ cryptoProviderTable)
/* harmony export */ });
/* harmony import */ var _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41022);
/* harmony import */ var _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12475);
/* harmony import */ var _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73356);



const cryptoProviderTable = {
    [-40]: _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__,
    [-39]: _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__,
    [-38]: _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__
};


/***/ }),

/***/ 97535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ steganographyDownloadImage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79304);


const steganographyDownloadImage = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async (url)=>(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .downloadUrl */ .GR)(url)).arrayBuffer()
, void 0);


/***/ }),

/***/ 21300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ verifyOthersProve)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88925);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1196);



async function verifyOthersProve(bio, others) {
    var ref, ref1;
    const compressedX = typeof bio === 'string' ? (await (0,_social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_1__/* .decodePublicKeyWorker */ .IC)(others.network))(bio) : [
        bio.raw
    ];
    if (!compressedX) return false;
    const publicKey = compressedX.map((x)=>{
        try {
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .decompressSecp256k1Key */ .qX)(x);
        } catch  {
            return null;
        }
    }).filter((x)=>x
    )[0];
    if (!publicKey) return false;
    // TODO: use json schema / other ways to verify the JWK
    // or
    // throw new Error(i18n.t('service_key_parse_failed'))
    // if privateKey, we should possibly not recreate it
    const hasPrivate = ((ref = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaRecord */ .yQ)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicKey))) === null || ref === void 0 ? void 0 : ref.privateKey) || ((ref1 = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaRecord */ .yQ)(others)) === null || ref1 === void 0 ? void 0 : ref1.privateKey);
    if (!hasPrivate) await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .createProfileWithPersona */ .lr)(others, {
        connectionConfirmState: 'pending'
    }, {
        publicKey
    });
    // TODO: unhandled case: if the profile is connected but a different key.
    return true;
}


/***/ }),

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kn": () => (/* binding */ derive_AES_GCM_256_Key_From_ECDH_256k1_Keys),
/* harmony export */   "SW": () => (/* binding */ derive_AES_GCM_256_Key_From_PBKDF2),
/* harmony export */   "Sl": () => (/* binding */ split_ec_k256_keypair_into_pub_priv)
/* harmony export */ });
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4625);

function derive_AES_GCM_256_Key_From_PBKDF2(pbkdf, iv, hash = 'SHA-256', iterations = 100000) {
    return _workers__WEBPACK_IMPORTED_MODULE_0__/* .CryptoWorker.derive_aes_from_pbkdf2 */ .i.derive_aes_from_pbkdf2(pbkdf, iv, hash, 'AES-GCM', 256, iterations);
}
function derive_AES_GCM_256_Key_From_ECDH_256k1_Keys(priv, pub) {
    return _workers__WEBPACK_IMPORTED_MODULE_0__/* .CryptoWorker.derive_aes_from_ecdh_k256 */ .i.derive_aes_from_ecdh_k256(priv, pub, 'AES-GCM', 256);
}
async function split_ec_k256_keypair_into_pub_priv(key) {
    const { d , ...pub } = key;
    if (!d) throw new TypeError('split_ec_k256_keypair_into_pub_priv requires a private key (jwk.d)');
    // TODO: maybe should do some extra check on properties
    // @ts-expect-error Do a force transform
    return {
        privateKey: {
            ...key
        },
        publicKey: pub
    };
}


/***/ }),

/***/ 4625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ methods)
});

// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(47974);
;// CONCATENATED MODULE: ./src/modules/CryptoAlgorithm/WebCrypto.ts

/**
 * AES-GCM & pbkdf2 related algorithms are WebCrypto supported
 * so it is safe to run it on the main thread (browser will make it async)
 */ const WebCryptoMethods = {
    async encrypt_aes_gcm (jwk, iv, message) {
        const key = await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(jwk, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes'));
        return crypto.subtle.encrypt({
            name: 'AES-GCM',
            iv
        }, key, message);
    },
    async decrypt_aes_gcm (jwk, iv, message) {
        const key = await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(jwk, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes'));
        return crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv
        }, key, message);
    },
    async generate_aes_gcm (length = 256) {
        const key = await crypto.subtle.generateKey({
            name: 'AES-GCM',
            length
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(key);
    },
    async derive_aes_from_pbkdf2 (pbkdf, salt, hash, aes_algr, aes_length, iterations) {
        if (!(pbkdf instanceof CryptoKey)) throw new TypeError('Expect PBKDF2UnknownKey to be a CryptoKey at runtime');
        const aes = await crypto.subtle.deriveKey({
            name: 'PBKDF2',
            salt,
            iterations,
            hash
        }, pbkdf, {
            name: aes_algr,
            length: aes_length
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(aes);
    },
    digest_sha (alg, data) {
        return crypto.subtle.digest(alg, data);
    },
    async import_pbkdf2 (seed) {
        const key = await crypto.subtle.importKey('raw', seed, 'PBKDF2', false, [
            'deriveBits',
            'deriveKey'
        ]);
        // In the WebCrypto spec, it is not exportable. We choose CryptoKey as our PBKDF2UnknownKey
        return key;
    },
    async aes_to_raw (aes, name = 'AES-GCM', length = 256) {
        const cryptoKey = await crypto.subtle.importKey('jwk', aes, {
            name,
            length
        }, true, [
            ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes')[0], 
        ]);
        return crypto.subtle.exportKey('raw', cryptoKey);
    },
    async raw_to_aes (raw, name = 'AES-GCM', length = 256) {
        const cryptoKey = await crypto.subtle.importKey('raw', raw, {
            name,
            length
        }, true, [
            ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes')[0], 
        ]);
        return await crypto.subtle.exportKey('jwk', cryptoKey);
    }
};

// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
;// CONCATENATED MODULE: ./src/modules/CryptoAlgorithm/EllipticBackend/methods.ts



const ECDH = (0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh')[0];
const ECDSA = (0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdsa')[0];
function initEllipticBackend(_) {
    return {
        async generate_ec_k256_pair () {
            const { privateKey , publicKey  } = await crypto.subtle.generateKey({
                name: 'ECDH',
                namedCurve: 'K-256'
            }, true, [
                ...ECDH
            ]);
            return {
                privateKey: await (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(privateKey),
                publicKey: await (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(publicKey)
            };
        },
        async derive_aes_from_ecdh_k256 (priv, pub, aes = 'AES-GCM', length = 256) {
            const key = await crypto.subtle.deriveKey({
                name: 'ECDH',
                public: await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(pub, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh'))
            }, await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(priv, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh')), {
                name: aes,
                length
            }, true, [
                'encrypt',
                'decrypt'
            ]);
            return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(key);
        },
        async generate_ecdh_k256_from_mnemonic (password) {
            return _helper(await (0,mnemonic_code/* generate_ECDH_256k1_KeyPair_ByMnemonicWord */.xX)(password));
        },
        async recover_ecdh_k256_from_mnemonic (words, password) {
            return _helper(await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(words, password));
        }
    };
}
async function _helper(x) {
    const { key: { privateKey , publicKey  } , mnemonicRecord: { parameter: { path , withPassword  } , words ,  } , password ,  } = x;
    return {
        mnemonic_words: words,
        parameter_path: path,
        parameter_with_password: withPassword,
        password,
        privateKey,
        publicKey
    };
}
/* harmony default export */ const methods = ({
    ...WebCryptoMethods,
    ...initEllipticBackend(WebCryptoMethods)
});

;// CONCATENATED MODULE: ./src/modules/workers.ts



/***/ }),

/***/ 88925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IC": () => (/* binding */ decodePublicKeyWorker),
/* harmony export */   "QO": () => (/* binding */ encodeTextPayloadWorker),
/* harmony export */   "s1": () => (/* binding */ decodeTextPayloadWorker)
/* harmony export */ });
/* unused harmony export encodePublicKeyWorker */
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44840);

async function encodePublicKeyWorker(query) {
    var ref;
    const f = (ref = (await getNetworkWorker(query)).utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
    return (x)=>{
        return (f === null || f === void 0 ? void 0 : f(x)) || x;
    };
}
async function decodePublicKeyWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return (x)=>f(x).concat(x)
    ;
    return (x)=>[
            x
        ]
    ;
}
async function encodeTextPayloadWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.encoder;
    return (x)=>{
        return (f === null || f === void 0 ? void 0 : f(x)) || x;
    };
}
async function decodeTextPayloadWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return (x)=>f(x).concat(x)
    ;
    return (x)=>[
            x
        ]
    ;
}


/***/ }),

/***/ 69914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ recover_ECDH_256k1_KeyPair_ByMnemonicWord),
/* harmony export */   "_I": () => (/* binding */ validateMnemonic),
/* harmony export */   "xX": () => (/* binding */ generate_ECDH_256k1_KeyPair_ByMnemonicWord)
/* harmony export */ });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68440);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66559);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79226);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1335);





// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    const mnemonicWord = bip39__WEBPACK_IMPORTED_MODULE_0__/* .generateMnemonic */ .OF();
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path: path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
async function recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password) {
    const verify = bip39__WEBPACK_IMPORTED_MODULE_0__/* .validateMnemonic */ ._I(mnemonicWord);
    if (!verify) {
        console.warn('Verify error');
    }
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path: path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
const validateMnemonic = bip39__WEBPACK_IMPORTED_MODULE_0__/* .validateMnemonic */ ._I;
function HDKeyToJwk(hdk) {
    const jwk = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .decompressSecp256k1Key */ .qX)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)(hdk.publicKey));
    jwk.d = hdk.privateKey ? (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .toBase64URL */ .wi)(hdk.privateKey) : undefined;
    return jwk;
}


/***/ }),

/***/ 74907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ deriveLocalKeyFromECDHKey)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4625);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1335);



/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await _modules_workers__WEBPACK_IMPORTED_MODULE_1__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(pub.x + pub.y));
    return (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf2, (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(mnemonicWord));
}


/***/ }),

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ CryptoKeyToJsonWebKey),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray),
  "Wu": () => (/* reexport */ startEffects)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

;// CONCATENATED MODULE: ./utils-pure/hmr.ts
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}

;// CONCATENATED MODULE: ./utils-pure/crypto/index.ts
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}

;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts







/***/ }),

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.a.set(proxiedCursor, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u)(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore])));
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteDB),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.wrap)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);