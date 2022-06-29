"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3884],{

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

/***/ 61077:
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
                gun?.off();
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
    // eslint-disable-next-line unicorn/no-array-reduce
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

/***/ 78366:
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
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28511);



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
    return persona?.localKey;
}
// #endregion
// #region ECDH
async function deriveAESByECDH(pub, of) {
    const curve = pub.algorithm.namedCurve || '';
    const sameCurvePrivateKeys = new Map();
    await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .createPersonaDBReadonlyAccess */ .hC)(async (tx)=>{
        const personas = await (0,_db__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonasWithPrivateKey */ .Eq)(tx);
        for (const persona of personas){
            if (!persona.privateKey) continue;
            if (persona.privateKey.crv !== curve) continue;
            if (of) {
                if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO) {
                    if (!persona.linkedProfiles.has(of)) continue;
                } else if (of instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob) {
                    if (persona.identifier !== of) continue;
                } else (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(of);
            }
            sameCurvePrivateKeys.set(persona.identifier, persona.privateKey);
        }
    });
    const deriveResult = new Map();
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
    const identifier = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(options.publicKey);
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier,
        linkedProfiles: new Map(),
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
    const ec_id = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(keys.publicKey);
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new Map(),
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

/***/ 47085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ savePostKeyToDB)
/* harmony export */ });
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38270);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93340);


async function savePostKeyToDB(id, key, extraInfo) {
    const jwk = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_1__/* .CryptoKeyToJsonWebKey */ .i)(key);
    await (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .withPostDBTransaction */ .tr)(async (t)=>{
        const post = await (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .queryPostDB */ .q3)(id, t);
        if (!post) {
            await (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .createPostDB */ .$v)({
                identifier: id,
                postCryptoKey: jwk,
                foundAt: new Date(),
                ...extraInfo
            }, t);
        } else {
            await (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .updatePostDB */ .rr)({
                ...post,
                postCryptoKey: jwk
            }, 'override', t);
        }
    });
}


/***/ }),

/***/ 93340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "tr": () => (/* binding */ withPostDBTransaction),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76536);


const { createPostDB , updatePostDB , queryPostDB , queryPostsDB , queryPostPagedDB , withPostDBTransaction  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 9772).then(__webpack_require__.bind(__webpack_require__, 39772)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(6558)]).then(__webpack_require__.bind(__webpack_require__, 6558)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 91816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kl": () => (/* binding */ GUN_queryPostKey_version40),
/* harmony export */   "U4": () => (/* binding */ publishPostAESKey_version39Or38),
/* harmony export */   "ab": () => (/* binding */ GUN_queryPostKey_version39Or38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66525);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38270);
/* harmony import */ var _masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61077);
/* harmony import */ var event_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37313);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78854);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7247);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21122);
/* harmony import */ var _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78366);







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
    async function* GUN_queryPostKey_version39Or381(version, iv, minePublicKey, network, abortSignal) {
        const minePublicKeyJWK = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_5__/* .CryptoKeyToJsonWebKey */ .i)(minePublicKey);
        const { keyHash , postHash  } = await calculatePostKeyPartition(version, network, iv, minePublicKeyJWK);
        /* cspell:disable-next-line */ // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
        console.log(`[@masknet/encryption] Reading key partition [${postHash[0]}][${keyHash}] and [${postHash[1]}][${keyHash}]`);
        const internalNodeNames = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)((await Promise.all([
            //
            (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)(postHash[0], keyHash),
            (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)(postHash[1], keyHash), 
        ])).filter(_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .isNonNull */ .GT).filter(lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z).map(Object.keys).flat().filter((x)=>x !== '_'
        ));
        // ? In this step we get all keys in this category (gun2[postHash][keyHash])
        const resultPromise = internalNodeNames.map((key)=>(0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .getGunData */ .q7)(key)
        );
        const iter = new event_iterator__WEBPACK_IMPORTED_MODULE_3__/* .EventIterator */ .zN((queue)=>{
            // immediate results
            for (const result1 of resultPromise)result1.then(emit, lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
            // future results
            Promise.all([
                main((0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .subscribeGunMapData */ .Q_)([
                    postHash[1]
                ], isValidData, abortSignal)),
                main((0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_2__/* .subscribeGunMapData */ .Q_)([
                    postHash[0]
                ], isValidData, abortSignal)), 
            ]).then(()=>queue.stop()
            );
            async function main(keyProvider) {
                for await (const data of keyProvider)emit(data);
            }
            function emit(result) {
                if (abortSignal.aborted) return;
                if (!isValidData(result)) return;
                queue.push({
                    encryptedPostKey: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.encryptedKey)),
                    postKeyIV: new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(result.salt))
                });
            }
        });
        yield* iter;
    }
    Version38Or391.GUN_queryPostKey_version39Or38 = GUN_queryPostKey_version39Or381;
    async function publishPostAESKey_version39Or381(version, postIV, network, receiversKeys) {
        const [postHash] = await hashIV(network, postIV);
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
                    const jwk = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_5__/* .CryptoKeyToJsonWebKey */ .i)(pub);
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
    async function calculatePostKeyPartition(version, network, iv, key) {
        const postHash = await hashIV(network, iv);
        // In version > -39, we will use stable hash to prevent unstable result for key hashing
        const keyHash = version === -39 ? await hashKey39(key) : await hashKey38(key);
        return {
            postHash,
            keyHash
        };
    }
    async function hashIV(network, iv) {
        const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
        const N = 2;
        const hash = (await work((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(iv), hashPair)).slice(0, N);
        const networkHint = getNetworkHint(network);
        return [
            `${networkHint}${hash}`,
            `${networkHint}-${hash}`
        ];
    }
    function getNetworkHint(x) {
        if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook) return '';
        if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter) return 'twitter-';
        if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Minds */ .Gq.Minds) return 'minds-';
        if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram) return 'instagram-';
        if (x === _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown) throw new TypeError('[@masknet/encryption] Current SNS network is not correctly configured.');
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(x);
    }
    // The difference between V38 and V39 is: V39 is not stable (JSON.stringify)
    // it's an implementation bug but for backward compatibility, it cannot be changed.
    // Therefore we upgraded the version and use a stable hash.
    async function hashKey39(key) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const jwk = JSON.stringify(key);
        const hash = await work(jwk, hashPair);
        return hash.slice(0, N);
    }
    async function hashKey38(jwk) {
        const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
        const N = 2;
        const hash = await work(jwk.x + jwk.y, hashPair);
        return hash.slice(0, N);
    }
    // This is a self contained Gun.SEA.work implementation that only contains code path we used.
    async function work(data, salt) {
        if (typeof data === 'string') data = new TextEncoder().encode(data);
        if (typeof salt === 'string') salt = new TextEncoder().encode(salt);
        const key = await crypto.subtle.importKey('raw', data, {
            name: 'PBKDF2'
        }, false, [
            'deriveBits'
        ]);
        const params = {
            name: 'PBKDF2',
            iterations: 100000,
            salt,
            hash: {
                name: 'SHA-256'
            }
        };
        const derived = await crypto.subtle.deriveBits(params, key, 512);
        return window.btoa(String.fromCharCode(...new Uint8Array(derived)));
    }
})(Version38Or39 || (Version38Or39 = {}));
const { GUN_queryPostKey_version39Or38 , publishPostAESKey_version39Or38  } = Version38Or39;


/***/ }),

/***/ 93884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ decryptionWithSocialNetworkDecoding),
/* harmony export */   "E": () => (/* binding */ getPostKeyCache)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66525);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21122);
/* harmony import */ var _database_persona_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28511);
/* harmony import */ var _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78366);
/* harmony import */ var _database_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93340);
/* harmony import */ var _database_post_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47085);
/* harmony import */ var _network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91816);









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
        if (!context.authorHint) {
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
const inMemoryCache = new Map();
async function* decryption(payload, context) {
    const parse = await (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .parsePayload */ .WZ)(payload);
    if (parse.err) return null;
    const { currentSocialNetwork , postURL , currentProfile , authorHint  } = context;
    // #region Identify the PostIdentifier
    const iv1 = parse.val.encryption.unwrapOr(null)?.iv.unwrapOr(null);
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
            if (val.type === 'E2E') info.isAuthorOfPost = val.ownersAESKeyEncrypted.ok;
        }
        yield info;
    }
    const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .PostIVIdentifier */ .bb((0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnumToProfileDomain */ .VC)(currentSocialNetwork), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(new Uint8Array(iv1.buffer)));
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
        if (!hasStoredAuthorPublicKey.has(id)) {
            storeAuthorPublicKey(id, authorHint, parse.unwrap().authorPublicKey.unwrap().unwrap()).catch(lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
            hasStoredAuthorPublicKey.add(id);
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
            return (0,_database_post_helper__WEBPACK_IMPORTED_MODULE_6__/* .savePostKeyToDB */ .h)(id, key, {
                // public post will not call this function.
                // and recipients only will be set when posting/appending recipients.
                recipients: new Map(),
                postBy: authorHint || parse.safeUnwrap().author.unwrapOr(undefined)?.unwrapOr(undefined),
                url: postURL
            });
        },
        hasLocalKeyOf: _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .hasLocalKeyOf */ .wf,
        decryptByLocalKey: _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .decryptByLocalKey */ .MM,
        async deriveAESKey (pub) {
            return Array.from((await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .deriveAESByECDH */ .Si)(pub)).values());
        },
        queryAuthorPublicKey (author, signal) {
            return (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .queryPublicKey */ .M_)(author || authorHint);
        },
        // TODO: get a gun instance
        async *queryPostKey_version37 () {
            throw new Error('TODO');
        },
        async *queryPostKey_version38 (iv, signal) {
            const author = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .queryPublicKey */ .M_)(context.currentProfile);
            if (!author) throw new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.CurrentProfileDoesNotConnectedToPersona */ .OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version39Or38 */ .ab)(-38, iv, author, context.currentSocialNetwork, signal || new AbortController().signal);
        },
        async *queryPostKey_version39 (iv, signal) {
            const author = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .queryPublicKey */ .M_)(context.currentProfile);
            if (!author) throw new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.CurrentProfileDoesNotConnectedToPersona */ .OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version39Or38 */ .ab)(-39, iv, author, context.currentSocialNetwork, signal || new AbortController().signal);
        },
        async queryPostKey_version40 (iv) {
            if (!currentProfile) return null;
            return (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version40 */ .Kl)(iv, currentProfile.userId);
        }
    });
    yield* progress;
    return null;
}
/** @internal */ async function getPostKeyCache(id) {
    const post = await (0,_database_post__WEBPACK_IMPORTED_MODULE_5__/* .queryPostDB */ .q3)(id);
    if (!post?.postCryptoKey) return null;
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
    if (payloadAuthor !== postAuthor) {
        // ! Author detected is not equal to AuthorHint.
        // ! Skip store the public key because it might be a security problem.
        return;
    }
    if (pub.algr !== _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1) {
        throw new Error('TODO: support other curves');
    }
    // if privateKey, we should possibly not recreate it
    const profile = await (0,_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .queryProfileDB */ .IW)(payloadAuthor);
    const persona = profile?.linkedPersona ? await (0,_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .queryPersonaDB */ .Hm)(profile.linkedPersona) : undefined;
    if (persona?.privateKey) return;
    const key = await crypto.subtle.exportKey('jwk', pub.key);
    const otherPersona = await (0,_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .queryPersonaDB */ .Hm)(await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(key));
    if (otherPersona?.privateKey) return;
    return (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .createProfileWithPersona */ .lr)(payloadAuthor, {
        connectionConfirmState: 'confirmed'
    }, {
        publicKey: await crypto.subtle.exportKey('jwk', pub.key)
    });
}


/***/ }),

/***/ 38270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ })

}]);