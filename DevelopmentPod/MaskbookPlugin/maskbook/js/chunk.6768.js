"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6768],{

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

/***/ 75706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
    const _ = new Gun({
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

/***/ 41715:
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
/* harmony export */   "Yy": () => (/* binding */ queryProfilesPagedDB),
/* harmony export */   "_P": () => (/* binding */ queryPersonasDB),
/* harmony export */   "ah": () => (/* binding */ createProfileDB),
/* harmony export */   "bF": () => (/* binding */ queryRelations),
/* harmony export */   "cl": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "fl": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "hC": () => (/* binding */ createPersonaDBReadonlyAccess),
/* harmony export */   "i2": () => (/* binding */ queryProfilesDB),
/* harmony export */   "lX": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "o7": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "tc": () => (/* binding */ attachProfileDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81653);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , createPersonaDBReadonlyAccess , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , queryProfilesPagedDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 113).then(__webpack_require__.bind(__webpack_require__, 70113)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(597), __webpack_require__.e(1274)]).then(__webpack_require__.bind(__webpack_require__, 20597)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 56935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MM": () => (/* binding */ decryptByLocalKey),
/* harmony export */   "M_": () => (/* binding */ queryPublicKey),
/* harmony export */   "Si": () => (/* binding */ deriveAESByECDH),
/* harmony export */   "i6": () => (/* binding */ encryptByLocalKey),
/* harmony export */   "lr": () => (/* binding */ createProfileWithPersona),
/* harmony export */   "w0": () => (/* binding */ createPersonaByJsonWebKey),
/* harmony export */   "wf": () => (/* binding */ hasLocalKeyOf)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41715);



// #region Local key helpers
/**
 * If has local key of a profile in the database.
 * @param id Profile Identifier
 */ async function hasLocalKeyOf(id) {
    let has = false;
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const result = await getLocalKeyOf(id, tx);
        has = !!result;
    });
    return has;
}
/**
 * Try to decrypt data using local key.
 *
 * @param authorHint Author of the local key
 * @param data Data to be decrypted
 * @param iv IV
 */ async function decryptByLocalKey(authorHint, data, iv) {
    const candidateKeys = [];
    if (authorHint) {
        await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
            const key = await getLocalKeyOf(authorHint, tx);
            key && candidateKeys.push(key);
        });
    // TODO: We may push every local key we owned to the candidate list so we can also decrypt when authorHint is null, but that might be a performance pitfall when localKey field is not indexed.
    }
    let check = ()=>{};
    return Promise.any(candidateKeys.map(async (key)=>{
        const k = await crypto.subtle.importKey('jwk', key, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'decrypt'
        ]);
        check();
        const result = await crypto.subtle.decrypt({
            iv,
            name: 'AES-GCM'
        }, k, data);
        check = abort;
        return result;
    }));
}
async function encryptByLocalKey(who, content, iv) {
    let key;
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const jwk = await getLocalKeyOf(who, tx);
        if (!jwk) return;
        const k = await crypto.subtle.importKey('jwk', jwk, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'encrypt'
        ]);
        key = k;
    });
    if (!key) throw new Error('No local key found');
    const result = await crypto.subtle.encrypt({
        iv,
        name: 'AES-GCM'
    }, key, content);
    return result;
}
async function getLocalKeyOf(id, tx) {
    const profile = await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .queryProfileDB */ .IW)(id, tx);
    if (!profile) return;
    if (profile.localKey) return profile.localKey;
    if (!profile.linkedPersona) return;
    const persona = await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaByProfileDB */ .fl)(id, tx);
    return persona === null || persona === void 0 ? void 0 : persona.localKey;
}
// #endregion
// #region ECDH
async function deriveAESByECDH(pub, of) {
    const curve = pub.algorithm.namedCurve || '';
    const sameCurvePrivateKeys = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob);
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const personas = await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonasWithPrivateKey */ .Eq)(tx);
        for (const persona of personas){
            if (!persona.privateKey) continue;
            if (persona.privateKey.crv !== curve) continue;
            if (of) {
                if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO) {
                    if (!persona.linkedProfiles.has(of)) continue;
                } else if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob) {
                    if (!persona.identifier.equals(of)) continue;
                } else (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(of);
            }
            sameCurvePrivateKeys.set(persona.identifier, persona.privateKey);
        }
    });
    const deriveResult = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob);
    const result = await Promise.allSettled([
        ...sameCurvePrivateKeys
    ].map(async ([id, key])=>{
        const privateKey = await crypto.subtle.importKey('jwk', key, {
            name: 'ECDH',
            namedCurve: key.crv
        }, false, [
            'deriveKey'
        ]);
        const derived = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: pub
        }, privateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        deriveResult.set(id, derived);
    }));
    const failed = result.filter((x)=>x.status === 'rejected'
    );
    if (failed.length) {
        console.warn('Failed to ECDH', ...failed.map((x)=>x.reason
        ));
    }
    return deriveResult;
}
// #endregion
// #region normal functions
async function createPersonaByJsonWebKey(options) {
    const identifier = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(options.publicKey);
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: identifier,
        linkedProfiles: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO),
        publicKey: options.publicKey,
        privateKey: options.privateKey,
        nickname: options.nickname,
        mnemonic: options.mnemonic,
        localKey: options.localKey,
        hasLogout: false,
        uninitialized: options.uninitialized
    };
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .consistentPersonaDBWriteAccess */ .As)((t)=>(0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDB */ .E9)(record, t)
    );
    return identifier;
}
async function createProfileWithPersona(profileID, data, keys) {
    const ec_id = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(keys.publicKey);
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO),
        nickname: keys.nickname,
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        localKey: keys.localKey,
        mnemonic: keys.mnemonic,
        hasLogout: false
    };
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
        await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createOrUpdatePersonaDB */ .lX)(rec, {
            explicitUndefinedField: 'ignore',
            linkedProfiles: 'merge'
        }, t);
        await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .attachProfileDB */ .tc)(profileID, ec_id, data, t);
    });
}
// #endregion
async function queryPublicKey(author) {
    if (!author) return null;
    const persona = await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaByProfileDB */ .fl)(author);
    if (!persona) return null;
    return await crypto.subtle.importKey('jwk', persona.publicKey, {
        name: 'ECDH',
        namedCurve: persona.publicKey.crv
    }, true, [
        'deriveKey'
    ]);
}
function abort() {
    throw new Error('Cancelled');
}


/***/ }),

/***/ 39885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ savePostKeyToDB)
/* harmony export */ });
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6628);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49100);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32849);



async function savePostKeyToDB(id, key, extraInfo) {
    const jwk = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_0__/* .CryptoKeyToJsonWebKey */ .iV)(key);
    {
        const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createTransaction */ ._X)(await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .PostDBAccess */ .Nz)(), 'readwrite')('post');
        const post = await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .queryPostDB */ .q3)(id, t);
        if (!post) {
            await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .createPostDB */ .$v)({
                identifier: id,
                postCryptoKey: jwk,
                foundAt: new Date(),
                ...extraInfo
            }, t);
        } else {
            await (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .updatePostDB */ .rr)({
                ...post,
                postCryptoKey: jwk
            }, 'override', t);
        }
    }
}


/***/ }),

/***/ 32849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "Nz": () => (/* binding */ PostDBAccess),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kl": () => (/* binding */ GUN_queryPostKey_version40),
/* harmony export */   "U4": () => (/* binding */ publishPostAESKey_version39Or38),
/* harmony export */   "ab": () => (/* binding */ GUN_queryPostKey_version39Or38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6628);
/* harmony import */ var _masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75706);
/* harmony import */ var event_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37313);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21122);
/* harmony import */ var _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56935);






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
            for (const result1 of resultPromise)result1.then(emit, lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
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
        if (Array.isArray(receiversKeys)) {
            // Store AES key to gun
            receiversKeys.forEach(async ({ aesKey , receiverKey  })=>{
                const keyHash = await (version === -38 ? hashKey38 : hashKey39)(receiverKey);
                console.log(`gun[${postHash}][${keyHash}].push(`, aesKey, ')');
                (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .pushToGunDataArray */ .Xg)([
                    postHash,
                    keyHash
                ], aesKey);
            });
        } else {
            if (version === -39) throw new Error('unreachable');
            for (const result of receiversKeys.values()){
                try {
                    if (result.status === 'rejected') continue;
                    const { encryptedPostKey , target , ivToBePublished  } = result.value;
                    if (!ivToBePublished) throw new Error('Missing salt');
                    const pub = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .queryPublicKey */ .M_)(target);
                    if (!pub) throw new Error('missing key');
                    const jwk = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_1__/* .CryptoKeyToJsonWebKey */ .iV)(pub);
                    const keyHash = await hashKey38(jwk);
                    const post = {
                        encryptedKey: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encryptedPostKey),
                        salt: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(ivToBePublished)
                    };
                    console.log(`gun[${postHash}][${keyHash}].push(`, post, ')');
                    (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .pushToGunDataArray */ .Xg)([
                        postHash,
                        keyHash
                    ], post);
                } catch (error) {
                    console.error('[@masknet/encryption] An error occurs when sending E2E keys', error);
                }
            }
        }
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
        return networkHint + '-' + hash.substring(0, N);
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

/***/ 26768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ decryptionWithSocialNetworkDecoding),
/* harmony export */   "E": () => (/* binding */ getPostKeyCache)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57614);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21122);
/* harmony import */ var _database_persona_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56935);
/* harmony import */ var _database_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32849);
/* harmony import */ var _database_post_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39885);
/* harmony import */ var _network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99807);








const downloadImage = (url)=>fetch(url).then((x)=>x.arrayBuffer()
    )
;
/**
 *
 * @param encoded If the encoded content is a text, it should only contain 1 payload. Extra payload will be ignored.
 * @param context
 */ async function* decryptionWithSocialNetworkDecoding(encoded, context) {
    let decoded;
    if (encoded.type === 'text') {
        decoded = (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .socialNetworkDecoder */ .FW)(context.currentSocialNetwork, encoded.text)[0];
    } else {
        if (!context.authorHint || context.authorHint.isUnknown) {
            return yield new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.UnrecognizedAuthor */ .OF.UnrecognizedAuthor, undefined);
        }
        const result = await (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .steganographyDecodeImage */ .oX)(encoded.image, {
            pass: context.authorHint.toText(),
            downloadImage
        });
        decoded = (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .socialNetworkDecoder */ .FW)(context.currentSocialNetwork, result)[0];
    }
    if (!decoded) return yield new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.NoPayloadFound */ .OF.NoPayloadFound, undefined);
    yield* decryption(decoded, context);
}
const inMemoryCache = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PostIVIdentifier */ .bb);
async function* decryption(payload, context) {
    var ref1;
    const parse = await (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .parsePayload */ .WZ)(payload);
    if (parse.err) return null;
    const { currentSocialNetwork , postURL  } = context;
    let { currentProfile , authorHint  } = context;
    if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.isUnknown) currentProfile = null;
    if (authorHint === null || authorHint === void 0 ? void 0 : authorHint.isUnknown) authorHint = null;
    // #region Identify the PostIdentifier
    const iv1 = (ref1 = parse.val.encryption.unwrapOr(null)) === null || ref1 === void 0 ? void 0 : ref1.iv.unwrapOr(null);
    {
        if (!iv1) return null;
        // iv is required to identify the post and it also used in comment encryption.
        const info = {
            type: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptProgressKind.Info */ .Pj.Info,
            iv: iv1,
            version: parse.val.version
        };
        if (parse.val.encryption.ok) {
            const val = parse.val.encryption.val;
            info.publicShared = val.type === 'public';
            if (val.type === 'E2E' && val.ownersAESKeyEncrypted.ok) info.ownersKeyEncrypted = val.ownersAESKeyEncrypted.val;
        }
        yield info;
    }
    const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PostIVIdentifier */ .bb((0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnumToProfileDomain */ .VC)(currentSocialNetwork), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(iv1.buffer));
    // #endregion
    if (inMemoryCache.has(id)) {
        const p = {
            type: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptProgressKind.Success */ .Pj.Success,
            content: inMemoryCache.get(id)
        };
        return void (yield p);
    }
    // #region store author public key into the database
    try {
        const id = parse.unwrap().author.unwrap().unwrap();
        const cacheKey = id.toText();
        if (!hasStoredAuthorPublicKey.has(cacheKey)) {
            storeAuthorPublicKey(id, authorHint, parse.unwrap().authorPublicKey.unwrap().unwrap()).catch(lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z);
            hasStoredAuthorPublicKey.add(cacheKey);
        }
    } catch  {}
    // #endregion
    const progress = (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .decrypt */ .pe)({
        message: parse.val,
        onDecrypted (message) {
            inMemoryCache.set(id, message);
        }
    }, {
        getPostKeyCache: getPostKeyCache.bind(null, id),
        setPostKeyCache: (key)=>{
            var ref;
            return (0,_database_post_helper__WEBPACK_IMPORTED_MODULE_5__/* .savePostKeyToDB */ .h)(id, key, {
                // public post will not call this function.
                // and recipients only will be set when posting/appending recipients.
                recipients: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .qD(new Map()),
                postBy: authorHint || ((ref = parse.safeUnwrap().author.unwrapOr(null)) === null || ref === void 0 ? void 0 : ref.unwrapOr(null)) || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown,
                url: postURL
            });
        },
        hasLocalKeyOf: _database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .hasLocalKeyOf */ .wf,
        decryptByLocalKey: _database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .decryptByLocalKey */ .MM,
        async deriveAESKey (pub) {
            return Array.from((await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .deriveAESByECDH */ .Si)(pub)).values());
        },
        queryAuthorPublicKey (author, signal) {
            return (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .queryPublicKey */ .M_)(author || authorHint);
        },
        // TODO: get a gun instance
        async *queryPostKey_version37 () {
            throw new Error('TODO');
        },
        async *queryPostKey_version38 (iv, signal) {
            const author = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .queryPublicKey */ .M_)(context.currentProfile);
            if (!author) throw new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.CurrentProfileDoesNotConnectedToPersona */ .OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_6__/* .GUN_queryPostKey_version39Or38 */ .ab)(-38, iv, author, getNetworkHint(context.currentSocialNetwork), signal || new AbortController().signal);
        },
        async *queryPostKey_version39 (iv, signal) {
            const author = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .queryPublicKey */ .M_)(context.currentProfile);
            if (!author) throw new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.CurrentProfileDoesNotConnectedToPersona */ .OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_6__/* .GUN_queryPostKey_version39Or38 */ .ab)(-39, iv, author, getNetworkHint(context.currentSocialNetwork), signal || new AbortController().signal);
        },
        async queryPostKey_version40 (iv) {
            if (!currentProfile) return null;
            return (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_6__/* .GUN_queryPostKey_version40 */ .Kl)(iv, currentProfile.userId);
        }
    });
    yield* progress;
    return null;
}
function getNetworkHint(x) {
    if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook) return '';
    if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter) return 'twitter-';
    if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Minds */ .Gq.Minds) return 'minds-';
    if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram) return 'instagram-';
    if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown) throw new TypeError('[@masknet/encryption] Current SNS network is not correctly configured.');
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(x);
}
/** @internal */ async function getPostKeyCache(id) {
    const post = await (0,_database_post__WEBPACK_IMPORTED_MODULE_4__/* .queryPostDB */ .q3)(id);
    if (!(post === null || post === void 0 ? void 0 : post.postCryptoKey)) return null;
    const k = await crypto.subtle.importKey('jwk', post.postCryptoKey, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'decrypt', 
    ]);
    return k;
}
const hasStoredAuthorPublicKey = new Set();
async function storeAuthorPublicKey(payloadAuthor, postAuthor, pub) {
    if (!payloadAuthor.equals(postAuthor)) {
        // ! Author detected is not equal to AuthorHint.
        // ! Skip store the public key because it might be a security problem.
        return;
    }
    if (pub.algr !== _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1) {
        throw new Error('TODO: support other curves');
    }
    return (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_3__/* .createProfileWithPersona */ .lr)(payloadAuthor, {
        connectionConfirmState: 'confirmed'
    }, {
        publicKey: await crypto.subtle.exportKey('jwk', pub.key)
    });
}


/***/ }),

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19245);
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

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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







/***/ })

}]);