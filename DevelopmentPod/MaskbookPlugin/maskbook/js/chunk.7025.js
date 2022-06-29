"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7025],{

/***/ 27440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CW": () => (/* binding */ storeAvatarDB),
/* harmony export */   "Hm": () => (/* binding */ createAvatarDBAccess),
/* harmony export */   "PU": () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   "dg": () => (/* binding */ queryAvatarDB)
/* harmony export */ });
/* unused harmony exports queryAvatarOutdatedDB, deleteAvatarsDB */
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96182);



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
            const id = Identifier.fromString(value.identifier);
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

/***/ 74314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ indexedDB_KVStorageBackend),
/* harmony export */   "c": () => (/* binding */ inMemory_KVStorageBackend)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62481);


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

/***/ 60562:
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
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30246);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , createPersonaDBReadonlyAccess , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , queryProfilesPagedDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 3456).then(__webpack_require__.bind(__webpack_require__, 73456)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(1064), __webpack_require__.e(6880)]).then(__webpack_require__.bind(__webpack_require__, 11064)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 16426:
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
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60562);



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

/***/ 51876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "Nz": () => (/* binding */ PostDBAccess),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30246);


const { createPostDB , updatePostDB , queryPostDB , queryPostsDB , queryPostPagedDB , PostDBAccess  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 3922).then(__webpack_require__.bind(__webpack_require__, 43922)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(8905)]).then(__webpack_require__.bind(__webpack_require__, 98905)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 6739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A8": () => (/* reexport */ createPersonaByMnemonic),
  "c9": () => (/* reexport */ createPersonaByMnemonicV2),
  "$v": () => (/* reexport */ post/* createPostDB */.$v),
  "FB": () => (/* reexport */ deletePersona),
  "A": () => (/* reexport */ loginPersona),
  "lW": () => (/* reexport */ logoutPersona),
  "m3": () => (/* reexport */ personaRecordToPersona),
  "Lw": () => (/* reexport */ queryAvatarDataURL),
  "pR": () => (/* reexport */ queryPersona),
  "Id": () => (/* reexport */ queryPersonaByProfile),
  "q3": () => (/* reexport */ post/* queryPostDB */.q3),
  "xN": () => (/* reexport */ post/* queryPostPagedDB */.xN),
  "hZ": () => (/* reexport */ post/* queryPostsDB */.hZ),
  "JL": () => (/* reexport */ queryProfile),
  "V6": () => (/* reexport */ queryProfilePaged),
  "X8": () => (/* reexport */ queryProfilesWithQuery),
  "rR": () => (/* reexport */ renamePersona),
  "gn": () => (/* reexport */ setupPersona),
  "Zk": () => (/* reexport */ storeAvatar),
  "rr": () => (/* reexport */ post/* updatePostDB */.rr)
});

// UNUSED EXPORTS: PostDBAccess, createPluginDBAccess, createPluginDatabase, pluginDataHasValidKeyPath, profileRecordToProfile, queryPersonasWithQuery, toStore

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./background/database/avatar-cache/db.ts
var db = __webpack_require__(27440);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(30246);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(96182);
;// CONCATENATED MODULE: ./background/database/avatar-cache/avatar.ts






/**
 * Get a (cached) blob url for an identifier. No cache for native api.
 * ? Because of cross-origin restrictions, we cannot use blob url here. sad :(
 */ const queryAvatarDataURL = native_rpc/* hasNativeAPI */._ ? async function(identifier) {
    return native_rpc/* nativeAPI */.Nz?.api.query_avatar({
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
            await native_rpc/* nativeAPI */.Nz?.api.store_avatar({
                identifier: identifier.toText(),
                avatar: avatar
            });
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
        queryAvatarDataURL.cache?.delete(identifier.toText());
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
var post = __webpack_require__(51876);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var persona_db = __webpack_require__(60562);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(1031);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(17450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var bip39_src = __webpack_require__(68440);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(16426);
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
async function createPersonaByMnemonic(nickname, password) {
    const { key , mnemonicRecord: mnemonic  } = await (0,mnemonic_code/* generate_ECDH_256k1_KeyPair_ByMnemonicWord */.xX)(password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonic.words);
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
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
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}

// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(80614);
;// CONCATENATED MODULE: ./src/database/index.ts







/***/ }),

/***/ 17865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "attachProfile": () => (/* binding */ attachProfile),
  "createNewRelation": () => (/* binding */ createNewRelation),
  "createPersonaByMnemonic": () => (/* reexport */ database/* createPersonaByMnemonic */.A8),
  "createPersonaByMnemonicV2": () => (/* reexport */ database/* createPersonaByMnemonicV2 */.c9),
  "createPersonaByPrivateKey": () => (/* reexport */ createPersonaByPrivateKey),
  "deletePersona": () => (/* reexport */ database/* deletePersona */.FB),
  "detachProfile": () => (/* reexport */ db/* detachProfileDB */.AY),
  "detachProfileWithNextID": () => (/* binding */ detachProfileWithNextID),
  "exportPersonaMnemonicWords": () => (/* reexport */ exportPersonaMnemonicWords),
  "exportPersonaPrivateKey": () => (/* reexport */ exportPersonaPrivateKey),
  "generateSignResult": () => (/* reexport */ generateSignResult),
  "getCurrentPersonaAvatar": () => (/* binding */ getCurrentPersonaAvatar),
  "logoutPersona": () => (/* reexport */ database/* logoutPersona */.lW),
  "patchCreateNewRelation": () => (/* binding */ patchCreateNewRelation),
  "patchCreateOrUpdateRelation": () => (/* binding */ patchCreateOrUpdateRelation),
  "queryLastPersonaCreated": () => (/* binding */ queryLastPersonaCreated),
  "queryMyPersonas": () => (/* binding */ queryMyPersonas),
  "queryMyProfiles": () => (/* binding */ queryMyProfiles),
  "queryOwnedPersonaInformation": () => (/* binding */ queryOwnedPersonaInformation),
  "queryPagedPostHistory": () => (/* binding */ queryPagedPostHistory),
  "queryPersona": () => (/* reexport */ database/* queryPersona */.pR),
  "queryPersonaByMnemonic": () => (/* binding */ queryPersonaByMnemonic),
  "queryPersonaByPrivateKey": () => (/* binding */ queryPersonaByPrivateKey),
  "queryPersonaByProfile": () => (/* reexport */ database/* queryPersonaByProfile */.Id),
  "queryPersonaRecordsFromIndexedDB": () => (/* binding */ queryPersonaRecordsFromIndexedDB),
  "queryPersonas": () => (/* binding */ queryPersonas),
  "queryPostsDB": () => (/* reexport */ database/* queryPostsDB */.hZ),
  "queryProfile": () => (/* reexport */ database/* queryProfile */.JL),
  "queryProfilePaged": () => (/* reexport */ database/* queryProfilePaged */.V6),
  "queryProfileRecordFromIndexedDB": () => (/* binding */ queryProfileRecordFromIndexedDB),
  "queryProfiles": () => (/* binding */ queryProfiles),
  "queryProfilesWithIdentifiers": () => (/* binding */ queryProfilesWithIdentifiers),
  "queryRelationPaged": () => (/* binding */ queryRelationPaged),
  "queryRelationsRecordFromIndexedDB": () => (/* binding */ queryRelationsRecordFromIndexedDB),
  "removeProfile": () => (/* binding */ removeProfile),
  "renamePersona": () => (/* reexport */ database/* renamePersona */.rR),
  "resolveIdentity": () => (/* binding */ resolveIdentity),
  "restoreFromBackup": () => (/* binding */ restoreFromBackup),
  "restoreFromBase64": () => (/* binding */ restoreFromBase64),
  "restoreFromMnemonicWords": () => (/* binding */ restoreFromMnemonicWords),
  "restoreFromObject": () => (/* binding */ restoreFromObject),
  "setupPersona": () => (/* reexport */ database/* setupPersona */.gn),
  "signWithPersona": () => (/* reexport */ signWithPersona),
  "updateCurrentPersonaAvatar": () => (/* binding */ updateCurrentPersonaAvatar),
  "updateProfileInfo": () => (/* binding */ updateProfileInfo),
  "updateRelation": () => (/* binding */ updateRelation),
  "validateMnemonic": () => (/* reexport */ mnemonic_code/* validateMnemonic */._I)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(6739);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(60562);
// EXTERNAL MODULE: ./background/database/persona/web.ts + 1 modules
var web = __webpack_require__(11064);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(71954);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(59715);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeService.ts + 1 modules
var WelcomeService = __webpack_require__(2275);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(92972);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ./src/extension/background-script/SettingsService.ts
var SettingsService = __webpack_require__(16862);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(50350);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(1031);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(92820);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(16426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(54764);
;// CONCATENATED MODULE: ./background/services/identity/persona/create.ts




async function createPersonaByPrivateKey(privateKeyString, nickname) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!isValid(privateKey)) throw new TypeError('Invalid private key');
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey: (0,omit/* default */.Z)(privateKey, 'd'),
        nickname
    });
    // check if item is a valid JsonWebKey object
    function isValid(item) {
        if (!(0,isObjectLike/* default */.Z)(item)) return false;
        if (!item.d) return false // d is private key
        ;
        if (!item.x || !item.y || !item.crv) return false;
        return true;
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
// EXTERNAL MODULE: ./background/services/helper/index.ts + 5 modules
var services_helper = __webpack_require__(86631);
;// CONCATENATED MODULE: ./background/services/identity/persona/sign.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];






async function signWithPersona({ message , method , identifier  }) {
    if (method !== 'eth') throw new Error('Unknown sign method');
    const requestID = Math.random().toString(16).slice(3);
    await (0,services_helper.openPopupWindow)(shared_base_src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest, {
        message,
        requestID,
        identifier
    });
    const waitForApprove = new Promise((resolve, reject)=>{
        (0,esm/* delay */.gw)(1000 * 60).then(()=>reject(new Error('Timeout'))
        );
        shared/* MaskMessages.events.personaSignRequest.on */.ql.events.personaSignRequest.on((approval)=>{
            if (approval.requestID !== requestID) return;
            if (!approval.selectedPersona) reject(new Error('Persona Rejected'));
            resolve(approval.selectedPersona);
        });
    });
    const signer = await waitForApprove;
    return generateSignResult(signer, message);
}
async function generateSignResult(signer, message) {
    const persona = (await (0,db/* queryPersonasWithPrivateKey */.Eq)()).find((x)=>x.identifier.equals(signer)
    );
    if (!persona) throw new Error('Persona not found');
    // will have problem with UTF-8?
    const length = message.length;
    const messageHash = (0,dist_browser.keccakFromString)(`\x19Ethereum Signed Message:\n${length}${message}`, 256);
    const privateKey = Buffer.from((0,shared_base_src/* fromBase64URL */.mz)(persona.privateKey.d));
    const signature = (0,dist_browser.ecsign)(messageHash, privateKey);
    return {
        persona: persona.identifier,
        signature: {
            raw: signature,
            signature: (0,dist_browser.toRpcSig)(signature.v, signature.r, signature.s),
            EIP2098: (0,dist_browser.toCompactSig)(signature.v, signature.r, signature.s)
        },
        address: (0,dist_browser.bufferToHex)((0,dist_browser.publicToAddress)((0,dist_browser.privateToPublic)(privateKey))),
        messageHex: (0,dist_browser.bufferToHex)(Buffer.from(new TextEncoder().encode(message)))
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
;// CONCATENATED MODULE: ./background/services/identity/persona/backup.ts



async function exportPersonaMnemonicWords(identifier) {
    const record = await (0,db/* queryPersonaDB */.Hm)(identifier);
    return record?.mnemonic?.words;
}
async function exportPersonaPrivateKey(identifier) {
    const profile = await (0,db/* queryPersonaDB */.Hm)(identifier);
    if (!profile?.privateKey) return '';
    const encodePrivateKey = (0,encode/* encode */.c)(profile.privateKey);
    return (0,esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
}

;// CONCATENATED MODULE: ./background/services/identity/index.ts




;// CONCATENATED MODULE: ./src/extension/background-script/IdentityService.ts


















(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);


// #region Profile

function queryProfiles(network) {
    return (0,database/* queryProfilesWithQuery */.X8)({
        network
    });
}
async function queryProfileRecordFromIndexedDB() {
    return (0,web.queryProfilesDB)({});
}
function queryProfilesWithIdentifiers(identifiers) {
    return (0,database/* queryProfilesWithQuery */.X8)({
        identifiers
    });
}
async function queryMyProfiles(network) {
    const myPersonas = (await queryMyPersonas(network)).filter((x)=>!x.uninitialized
    );
    return Promise.all(myPersonas.flatMap((x)=>Array.from(x.linkedProfiles.keys())
    ).filter((y)=>!network || network === y.network
    ).map(database/* queryProfile */.JL));
}
async function updateProfileInfo(identifier, data) {
    if (data.nickname) {
        const rec = {
            identifier,
            nickname: data.nickname,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* createOrUpdateProfileDB */.o7)(rec, t)
        );
    }
    if (data.avatarURL) await (0,database/* storeAvatar */.Zk)(identifier, data.avatarURL);
}
function removeProfile(id) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* deleteProfileDB */.B4)(id, t)
    );
}
// #endregion
// #region Persona

async function queryPersonaByMnemonic(mnemonic, password) {
    const verify = (0,src/* validateMnemonic */._I)(mnemonic);
    if (!verify) {
        throw new Error('Verify error');
    }
    const { key  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(mnemonic, password);
    const identifier = (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(key.privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await (0,database/* loginPersona */.A)(persona.identifier);
        return persona;
    }
    return null;
}
async function queryPersonas(identifier, requirePrivateKey = false) {
    if (typeof identifier === 'undefined') return (await (0,db/* queryPersonasDB */._P)({
        hasPrivateKey: requirePrivateKey
    })).map(database/* personaRecordToPersona */.m3);
    const x = await (0,db/* queryPersonaDB */.Hm)(identifier);
    if (!x || !x.privateKey && requirePrivateKey) return [];
    return [
        (0,database/* personaRecordToPersona */.m3)(x)
    ];
}
async function queryPersonaRecordsFromIndexedDB() {
    return (0,web.queryPersonasDB)();
}
function queryMyPersonas(network) {
    return queryPersonas(undefined, true).then((x)=>typeof network === 'string' ? x.filter((y)=>{
            for (const z of y.linkedProfiles.keys()){
                if (z.network === network) return true;
            }
            return false;
        }) : x
    );
}
async function queryLastPersonaCreated() {
    const all = await queryPersonas(undefined, true);
    return (0,head/* default */.Z)((0,orderBy/* default */.Z)(all, (x)=>x.createdAt
    , 'desc'));
}
async function queryOwnedPersonaInformation() {
    const personas = await queryPersonas(undefined, true);
    const result = [];
    for (const persona of personas.sort((a, b)=>a.updatedAt > b.updatedAt ? 1 : -1
    )){
        const map = [];
        result.push({
            nickname: persona.nickname,
            identifier: persona.identifier,
            linkedProfiles: map,
            publicHexKey: persona.publicHexKey
        });
        for (const [profile] of persona.linkedProfiles){
            const linkedProfile = await (0,database/* queryProfile */.JL)(profile);
            map.push({
                identifier: profile,
                nickname: linkedProfile.nickname,
                avatar: linkedProfile.avatar
            });
        }
    }
    return result;
}
async function restoreFromObject(object) {
    if (!object) return null;
    await (0,restoreBackup/* restoreBackup */.pi)(object);
    if (object?.personas?.length) {
        return (0,database/* queryPersona */.pR)(shared_base_src/* Identifier.fromString */.xb.fromString(object.personas[0].identifier, shared_base_src/* ECKeyIdentifier */.ob).unwrap());
    }
    return null;
}
async function restoreFromMnemonicWords(mnemonicWords, nickname, password) {
    if (!src/* validateMnemonic */._I(mnemonicWords)) throw new Error('the mnemonic words are not valid');
    const identifier = await (0,WelcomeService.restoreNewIdentityWithMnemonicWord)(mnemonicWords, password, {
        nickname
    });
    return (0,database/* queryPersona */.pR)(identifier);
}
async function restoreFromBase64(base64) {
    return restoreFromObject(JSON.parse((0,esm/* decodeText */.rj)((0,esm/* decodeArrayBuffer */.xe)(base64))));
}
async function restoreFromBackup(backup) {
    return restoreFromObject((0,BackupFile/* fixBackupFilePermission */.j)((0,latest/* UpgradeBackupJSONFile */.a)((0,BackupFile/* convertBackupFileToObject */.l)(backup))));
}
// #endregion
// #region Profile & Persona
/**
 * Remove an identity.
 */ 
async function attachProfile(source, target, data) {
    if (target instanceof shared_base_src/* ProfileIdentifier */.WO) {
        const profile = await (0,database/* queryProfile */.JL)(target);
        if (!profile.linkedPersona) throw new Error('target not found');
        target = profile.linkedPersona.identifier;
    }
    return (0,db/* attachProfileDB */.tc)(source, target, data);
}

// #endregion
// #region Post

async function queryPagedPostHistory(options, count) {
    const currentPersona = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (currentPersona) {
        return (0,database/* queryPostPagedDB */.xN)(currentPersona, options, count);
    }
    return [];
}
// #endregion
// #region Relation
async function patchCreateOrUpdateRelation(profiles, personas, defaultFavor = shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED) {
    await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for (const persona of personas){
            for (const profile of profiles){
                const relationsInDB = await (0,db/* queryRelations */.bF)(persona, profile);
                if (relationsInDB.length > 0) {
                    for (const _ of relationsInDB){
                        await updateRelation(profile, persona, defaultFavor);
                    }
                    continue;
                }
                await (0,db/* createRelationDB */.N8)({
                    profile: profile,
                    linked: persona,
                    favor: defaultFavor
                }, t, true);
            }
        }
    });
    return;
}
async function patchCreateNewRelation(relations) {
    await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for (const relation of relations){
            const relationsInDB = await (0,db/* queryRelations */.bF)(relation.linked, relation.profile, t);
            if (relationsInDB.length > 0) {
                for (const relation of relationsInDB){
                    await (0,db/* updateRelationDB */.Jx)(relation, t, true);
                }
                continue;
            }
            await (0,db/* createRelationDB */.N8)({
                ...relation,
                favor: relation.favor === shared_base_src/* RelationFavor.DEPRECATED */.Kn.DEPRECATED ? shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED : relation.favor
            }, t);
        }
    });
    return;
}
async function createNewRelation(profile, linked, favor = shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    const relationInDB = await (0,db/* queryRelations */.bF)(linked, profile, t);
    if (relationInDB.length > 0) return;
    await (0,db/* createRelationDB */.N8)({
        profile,
        linked,
        favor
    }, t);
}
async function queryRelationsRecordFromIndexedDB() {
    return (0,web.queryRelations)();
}
async function queryRelationPaged(options, count) {
    const currentPersona = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (currentPersona) {
        return (0,db/* queryRelationsPagedDB */.PF)(currentPersona, options, count);
    }
    return [];
}
async function updateRelation(profile, linked, favor) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    await (0,db/* updateRelationDB */.Jx)({
        profile,
        linked,
        favor
    }, t);
}
// #endregion
/**
 * In older version of Mask, identity is marked as `ProfileIdentifier(network, '$unknown')` or `ProfileIdentifier(network, '$self')`. After upgrading to the newer version of Mask, Mask will try to find the current user in that network and call this function to replace old identifier into a "resolved" identity.
 * @param identifier The resolved identity
 */ async function resolveIdentity(identifier) {
    const unknown = new shared_base_src/* ProfileIdentifier */.WO(identifier.network, '$unknown');
    const self = new shared_base_src/* ProfileIdentifier */.WO(identifier.network, '$self');
    const r = await (0,db/* queryProfilesDB */.i2)({
        identifiers: [
            unknown,
            self
        ]
    });
    if (!r.length) return;
    const final = {
        ...r.reduce((p, c)=>({
                ...p,
                ...c
            })
        ),
        identifier
    };
    try {
        await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,db/* createProfileDB */.ah)(final, t);
            await (0,db/* deleteProfileDB */.B4)(unknown, t).catch(()=>{});
            await (0,db/* deleteProfileDB */.B4)(self, t).catch(()=>{});
        });
    } catch  {
    // the profile already exists
    }
}
// #endregion
// #region avatar
const updateCurrentPersonaAvatar = async (avatar)=>{
    const identifier = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (identifier) {
        await (0,database/* storeAvatar */.Zk)(identifier, await avatar.arrayBuffer());
        utils/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
    }
};
const getCurrentPersonaAvatar = async ()=>{
    const identifier = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (!identifier) return null;
    try {
        return await (0,database/* queryAvatarDataURL */.Lw)(identifier);
    } catch  {
        return null;
    }
};
// #endregion
// #region Private / Public key
async function queryPersonaByPrivateKey(privateKeyString) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    const identifier = (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await (0,database/* loginPersona */.A)(persona.identifier);
        return (0,database/* personaRecordToPersona */.m3)(persona);
    }
    return null;
}
// #endregion
async function detachProfileWithNextID(uuid, personaPublicKey, platform, identity, createdAt, options) {
    await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(uuid, personaPublicKey, shared_base_src/* NextIDAction.Delete */.BU.Delete, platform, identity, createdAt, {
        signature: options?.signature
    });
    utils/* MaskMessages.events.ownProofChanged.sendToAll */.ql.events.ownProofChanged.sendToAll(undefined);
}


/***/ }),

/***/ 16862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__kv_storage_read__": () => (/* binding */ __kv_storage_read__),
/* harmony export */   "__kv_storage_write__": () => (/* binding */ __kv_storage_write__),
/* harmony export */   "getChainId": () => (/* binding */ getChainId),
/* harmony export */   "getCurrentCollectibleDataProvider": () => (/* binding */ getCurrentCollectibleDataProvider),
/* harmony export */   "getCurrentMaskWalletChainId": () => (/* binding */ getCurrentMaskWalletChainId),
/* harmony export */   "getCurrentMaskWalletLockedSettings": () => (/* binding */ getCurrentMaskWalletLockedSettings),
/* harmony export */   "getCurrentMaskWalletNetworkType": () => (/* binding */ getCurrentMaskWalletNetworkType),
/* harmony export */   "getCurrentPersona": () => (/* binding */ getCurrentPersona),
/* harmony export */   "getCurrentPersonaIdentifier": () => (/* binding */ getCurrentPersonaIdentifier),
/* harmony export */   "getCurrentPortfolioDataProvider": () => (/* binding */ getCurrentPortfolioDataProvider),
/* harmony export */   "getCurrentSelectedWalletNetwork": () => (/* binding */ getCurrentSelectedWalletNetwork),
/* harmony export */   "getCurrentSelectedWalletProvider": () => (/* binding */ getCurrentSelectedWalletProvider),
/* harmony export */   "getGasOptions": () => (/* binding */ getGasOptions),
/* harmony export */   "getGasPrice": () => (/* binding */ getGasPrice),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "getPluginID": () => (/* binding */ getPluginID),
/* harmony export */   "getPluginMinimalModeEnabled": () => (/* binding */ getPluginMinimalModeEnabled),
/* harmony export */   "getSelectedMaskWalletAddress": () => (/* binding */ getSelectedMaskWalletAddress),
/* harmony export */   "getSelectedWalletAddress": () => (/* binding */ getSelectedWalletAddress),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "getTokenPrices": () => (/* binding */ getTokenPrices),
/* harmony export */   "getTrendingDataSource": () => (/* binding */ getTrendingDataSource),
/* harmony export */   "getWalletAllowTestChain": () => (/* binding */ getWalletAllowTestChain),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "setChainId": () => (/* binding */ setChainId),
/* harmony export */   "setCurrentCollectibleDataProvider": () => (/* binding */ setCurrentCollectibleDataProvider),
/* harmony export */   "setCurrentMaskWalletChainId": () => (/* binding */ setCurrentMaskWalletChainId),
/* harmony export */   "setCurrentMaskWalletLockedSettings": () => (/* binding */ setCurrentMaskWalletLockedSettings),
/* harmony export */   "setCurrentMaskWalletNetworkType": () => (/* binding */ setCurrentMaskWalletNetworkType),
/* harmony export */   "setCurrentPersonaIdentifier": () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   "setCurrentPortfolioDataProvider": () => (/* binding */ setCurrentPortfolioDataProvider),
/* harmony export */   "setCurrentSelectedWalletNetwork": () => (/* binding */ setCurrentSelectedWalletNetwork),
/* harmony export */   "setCurrentSelectedWalletProvider": () => (/* binding */ setCurrentSelectedWalletProvider),
/* harmony export */   "setGasOptions": () => (/* binding */ setGasOptions),
/* harmony export */   "setGasPrice": () => (/* binding */ setGasPrice),
/* harmony export */   "setLanguage": () => (/* binding */ setLanguage),
/* harmony export */   "setPluginID": () => (/* binding */ setPluginID),
/* harmony export */   "setPluginMinimalModeEnabled": () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   "setSelectedMaskWalletAddress": () => (/* binding */ setSelectedMaskWalletAddress),
/* harmony export */   "setSelectedWalletAddress": () => (/* binding */ setSelectedWalletAddress),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "setTokenPrices": () => (/* binding */ setTokenPrices),
/* harmony export */   "setTrendingDataSource": () => (/* binding */ setTrendingDataSource)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80917);
/* harmony import */ var _plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64065);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17865);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94232);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62481);
/* harmony import */ var _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74314);








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
const [getPluginID, setPluginID] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .pluginIDSettings */ .tR);
const [getTheme, setTheme] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .appearanceSettings */ .OF);
const [getLanguage, setLanguage] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .languageSettings */ .pQ);
const [getChainId, setChainId] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings */ .wU);
const [getTokenPrices, setTokenPrices] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings */ .JC);
const [getGasOptions, setGasOptions] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentGasOptionsSettings */ .GZ);
const [getGasPrice, setGasPrice] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentGasOptionsSettings */ .GZ);
const [getTrendingDataSource, setTrendingDataSource] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentDataProviderSettings */ .gG);
const [getCurrentSelectedWalletProvider, setCurrentSelectedWalletProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentProviderSettings */ .t1);
const [getCurrentSelectedWalletNetwork, setCurrentSelectedWalletNetwork] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentNetworkSettings */ .fX);
const [getSelectedWalletAddress, setSelectedWalletAddress] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentAccountSettings */ .aK);
const [getSelectedMaskWalletAddress, setSelectedMaskWalletAddress] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletAccountSettings */ .T_);
const [getCurrentMaskWalletChainId, setCurrentMaskWalletChainId] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletChainIdSettings */ .DT);
const [getCurrentMaskWalletNetworkType, setCurrentMaskWalletNetworkType] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletNetworkSettings */ .br);
const [getCurrentPortfolioDataProvider, setCurrentPortfolioDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentFungibleAssetDataProviderSettings */ .rI);
const [getCurrentCollectibleDataProvider, setCurrentCollectibleDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentNonFungibleAssetDataProviderSettings */ .uR);
const [getCurrentMaskWalletLockedSettings, setCurrentMaskWalletLockedSettings] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletLockStatusSettings */ .Jg);
async function getWalletAllowTestChain() {
    return _shared__WEBPACK_IMPORTED_MODULE_5__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet;
}
async function getCurrentPersona() {
    const currentPersonaIdentifier1 = await getCurrentPersonaIdentifier();
    if (!currentPersonaIdentifier1) return undefined;
    return (0,_IdentityService__WEBPACK_IMPORTED_MODULE_3__.queryPersona)(currentPersonaIdentifier1);
}
async function getCurrentPersonaIdentifier() {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    const personas = (await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_3__.queryMyPersonas)()).sort((a, b)=>a.createdAt > b.createdAt ? 1 : 0
    ).map((x)=>x.identifier
    );
    const newVal = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrapOr((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(personas));
    if (!newVal) return undefined;
    if (personas.find((x)=>x.equals(newVal)
    )) return newVal;
    if (personas[0]) _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value = personas[0].toText();
    return personas[0];
}
async function setCurrentPersonaIdentifier(x) {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value = x.toText();
}
async function getPluginMinimalModeEnabled(id) {
    return !_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPluginMinimalModeNOTEnabled */ .VO['plugin:' + id].value;
}
async function setPluginMinimalModeEnabled(id, enabled) {
    _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPluginMinimalModeNOTEnabled */ .VO['plugin:' + id].value = !enabled;
    _shared__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.pluginMinimalModeChanged.sendToAll */ .ql.events.pluginMinimalModeChanged.sendToAll([
        id,
        enabled
    ]);
}
async function openTab(url) {
    await browser.tabs.create({
        active: true,
        url
    });
}
async function __kv_storage_write__(kind, key, value) {
    if (kind === 'memory') {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .inMemory_KVStorageBackend.setValue */ .c.setValue(key, value);
    } else {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .indexedDB_KVStorageBackend.setValue */ .E.setValue(key, value);
    }
}
async function __kv_storage_read__(kind, key) {
    if (kind === 'memory') {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .inMemory_KVStorageBackend.getValue */ .c.getValue(key);
    } else {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .indexedDB_KVStorageBackend.getValue */ .E.getValue(key);
    }
}


/***/ }),

/***/ 2275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkPermissionAndOpenWalletRecovery": () => (/* binding */ checkPermissionAndOpenWalletRecovery),
  "checkPermissionsAndRestore": () => (/* binding */ checkPermissionsAndRestore),
  "confirmBackup": () => (/* reexport */ restoreBackup/* confirmBackup */.DV),
  "createBackupFile": () => (/* binding */ createBackupFile),
  "createBackupUrl": () => (/* binding */ createBackupUrl),
  "createPersonaByMnemonic": () => (/* reexport */ database/* createPersonaByMnemonic */.A8),
  "downloadBackup": () => (/* binding */ downloadBackup),
  "downloadBackupV2": () => (/* binding */ downloadBackupV2),
  "generateBackupJSON": () => (/* reexport */ generateBackupJSON),
  "generateBackupPreviewInfo": () => (/* reexport */ generateBackupPreviewInfo),
  "getUnconfirmedBackup": () => (/* reexport */ restoreBackup/* getUnconfirmedBackup */.Kz),
  "openOptionsPage": () => (/* binding */ openOptionsPage),
  "parseBackupStr": () => (/* binding */ parseBackupStr),
  "restoreBackup": () => (/* reexport */ restoreBackup/* restoreBackup */.pi),
  "restoreNewIdentityWithMnemonicWord": () => (/* binding */ restoreNewIdentityWithMnemonicWord),
  "setUnconfirmedBackup": () => (/* reexport */ restoreBackup/* setUnconfirmedBackup */.cg)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(1031);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(16426);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(60562);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(17450);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(71954);
// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(51876);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PersonaRecord.ts
var PersonaRecord = __webpack_require__(23365);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/ProfileRecord.ts
var ProfileRecord = __webpack_require__(15400);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PostRecord.ts
var PostRecord = __webpack_require__(14795);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 34 modules
var services = __webpack_require__(31880);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/WalletRecord.ts
var WalletRecord = __webpack_require__(43641);
// EXTERNAL MODULE: ../plugin-infra/src/entry-background-worker.ts + 1 modules
var entry_background_worker = __webpack_require__(17610);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/RelationRecord.ts
var RelationRecord = __webpack_require__(30074);
;// CONCATENATED MODULE: ./src/extension/background-script/WelcomeServices/generateBackupJSON.ts













async function generateBackupJSON(opts = {}) {
    const personas = [];
    const posts = [];
    const wallets = [];
    const profiles = [];
    const relations = [];
    const plugins = {};
    if (!opts.filter) {
        if (!opts.noPersonas) await backupPersonas();
        if (!opts.noProfiles) await backProfiles();
    } else if (opts.filter.type === 'persona') {
        if (opts.noPersonas) throw new TypeError('Invalid opts');
        await backupPersonas(opts.filter.wanted);
        const wantedProfiles = personas.flatMap((q)=>q.linkedProfiles.map((y)=>src/* Identifier.fromString */.xb.fromString(y[0], src/* ProfileIdentifier */.WO)
            ).filter((k)=>k.ok
            ).map((x)=>x.val
            )
        );
        if (!opts.noProfiles) await backProfiles(wantedProfiles);
    }
    if (!opts.noPosts) await backupAllPosts();
    if (!opts.noRelations) await backupAllRelations();
    if (!opts.noWallets) {
        await backupAllWallets();
        await backupAllLegacyWallets();
    }
    if (!opts.noPlugins) await backupAllPlugins();
    const file = {
        _meta_: {
            createdAt: Date.now(),
            maskbookVersion: browser.runtime.getManifest().version,
            version: 2,
            type: 'maskbook-backup'
        },
        grantedHostPermissions: (await browser.permissions.getAll()).origins || [],
        personas,
        posts,
        wallets,
        profiles,
        relations,
        userGroups: []
    };
    if (Object.keys(plugins).length) file.plugin = plugins;
    return file;
    async function backupAllPosts() {
        posts.push(...(await (0,post/* queryPostsDB */.hZ)(()=>true
        )).map(PostRecord/* PostRecordToJSONFormat */.k));
    }
    async function backProfiles(of) {
        const data = (await (0,db/* queryProfilesDB */.i2)({
            identifiers: of,
            hasLinkedPersona: true
        })).map(ProfileRecord/* ProfileRecordToJSONFormat */.P);
        profiles.push(...data);
    }
    async function backupPersonas(of) {
        const data = (await (0,db/* queryPersonasDB */._P)({
            initialized: true,
            hasPrivateKey: opts.hasPrivateKeyOnly,
            identifiers: of
        }, undefined, true)).map(PersonaRecord/* PersonaRecordToJSONFormat */.O);
        personas.push(...data);
    }
    async function backupAllRelations() {
        const data = (await (0,db/* queryRelations */.bF)()).map(RelationRecord/* RelationRecordToJSONFormat */.K);
        relations.push(...data);
    }
    async function backupAllWallets() {
        const allSettled = await Promise.allSettled((await (0,services.getWallets)(types/* ProviderType.MaskWallet */.lP.MaskWallet)).map(async (wallet)=>{
            return {
                ...wallet,
                mnemonic: wallet.derivationPath ? await (0,services.exportMnemonic)(wallet.address) : undefined,
                privateKey: wallet.derivationPath ? undefined : await (0,services.exportPrivateKey)(wallet.address)
            };
        }));
        const wallets_ = allSettled.map((x)=>x.status === 'fulfilled' ? (0,WalletRecord/* WalletRecordToJSONFormat */.dp)(x.value) : null
        );
        if (wallets_.some((x)=>!x
        )) throw new Error('Failed to backup wallets.');
        wallets.push(...wallets_);
    }
    async function backupAllLegacyWallets() {
        const wallets_ = (await (0,services.getLegacyWallets)(types/* ProviderType.MaskWallet */.lP.MaskWallet)).map(WalletRecord/* LegacyWalletRecordToJSONFormat */.ww);
        wallets.push(...wallets_);
    }
    async function backupAllPlugins() {
        await Promise.all([
            ...entry_background_worker/* activatedPluginsWorker */.Je
        ]// generate backup
        .map(async (plugin)=>{
            const backupCreator = plugin.backup?.onBackup;
            if (!backupCreator) return;
            async function backupPlugin() {
                const result = await (0,esm/* timeout */.Vs)(backupCreator(), 3000);
                if (result.none) return;
                // We limit the plugin contributed backups must be simple objects.
                // We may allow plugin to store binary if we're moving to binary backup format like MessagePack.
                plugins[plugin.ID] = result.map(JSON.stringify).map(JSON.parse).val;
            }
            if (false) {}
            return backupPlugin().catch((error)=>console.error(`[@masknet/plugin-infra] Plugin ${plugin.ID} failed to backup`, error)
            );
        }));
    }
}
async function generateBackupPreviewInfo(opts = {}) {
    const json = await generateBackupJSON(opts);
    return (0,latest/* getBackupPreviewInfo */.V)(json);
}

// EXTERNAL MODULE: ./background/services/helper/index.ts + 5 modules
var services_helper = __webpack_require__(86631);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(59715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(6739);
;// CONCATENATED MODULE: ./src/extension/background-script/WelcomeService.ts

















(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
/**
 * Recover new identity by a password and mnemonic words
 *
 * @param password password used to generate mnemonic word, can be empty string
 * @param word mnemonic words
 * @param info additional information
 */ async function restoreNewIdentityWithMnemonicWord(word, password, info) {
    const { key , mnemonicRecord  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(word, password);
    const { privateKey , publicKey  } = key;
    const localKeyJwk = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonicRecord.words);
    const ecKeyID = await (0,helper/* createPersonaByJsonWebKey */.w0)({
        publicKey,
        privateKey,
        localKey: info.localKey || localKeyJwk,
        mnemonic: mnemonicRecord,
        nickname: info.nickname
    });
    if (info.whoAmI) {
        await (0,db/* attachProfileDB */.tc)(info.whoAmI, ecKeyID, info.details || {
            connectionConfirmState: 'pending'
        });
    }
    return ecKeyID;
}
async function downloadBackup(obj, type) {
    const { buffer , mimeType , fileName  } = await createBackupInfo(obj, type);
    (0,shared/* saveFileFromBuffer */.dH)(buffer, mimeType, fileName);
    return obj;
}
async function downloadBackupV2(buffer) {
    (0,shared/* saveFileFromBuffer */.dH)(buffer, 'application/octet-stream', makeBackupName('bin'));
}
async function createBackupFile(options) {
    const obj = await generateBackupJSON(options);
    if (!options.download) return obj;
    // Don't make the download pop so fast
    await (0,esm/* delay */.gw)(1000);
    return downloadBackup(obj);
}
async function createBackupUrl(options) {
    const obj = await generateBackupJSON(options);
    const { buffer , mimeType , fileName  } = await createBackupInfo(obj);
    const blob = new Blob([
        buffer
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    return {
        url,
        fileName
    };
}
async function createBackupInfo(obj, type) {
    const string = typeof obj === 'string' ? obj : JSON.stringify(obj);
    const buffer = (0,esm/* encodeText */.YT)(string);
    const mimeType = type === 'txt' ? 'text/plain' : 'application/json';
    return {
        buffer,
        mimeType,
        fileName: makeBackupName(type ?? 'json')
    };
}
async function openOptionsPage(route, search) {
    return browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(`/dashboard.html#${route}${search ? `?${search}` : ''}`)
    });
}

function parseBackupStr(str) {
    const json = (0,utils/* fixBackupFilePermission */.jK)((0,latest/* UpgradeBackupJSONFile */.a)((0,utils/* convertBackupFileToObject */.lR)(str)));
    if (json) {
        const info = (0,latest/* getBackupPreviewInfo */.V)(json);
        const id = (0,v4/* default */.Z)();
        (0,restoreBackup/* setUnconfirmedBackup */.cg)(id, json);
        return {
            info,
            id
        };
    } else {
        return null;
    }
}
async function checkPermissionsAndRestore(id) {
    const json = await (0,restoreBackup/* getUnconfirmedBackup */.Kz)(id);
    if (json) {
        const permissions = await (0,utils/* extraPermissions */.uM)(json.grantedHostPermissions);
        if (permissions.length) {
            const granted = await (0,services_helper.requestExtensionPermission)({
                origins: permissions
            });
            if (!granted) return;
        }
        await (0,restoreBackup/* restoreBackup */.pi)(json);
    }
}
async function checkPermissionAndOpenWalletRecovery(id) {
    const json = await (0,restoreBackup/* getUnconfirmedBackup */.Kz)(id);
    if (json) {
        const permissions = await (0,utils/* extraPermissions */.uM)(json.grantedHostPermissions);
        if (permissions.length) {
            const granted = await (0,services_helper.requestExtensionPermission)({
                origins: permissions
            });
            if (!granted) return;
        }
        await (0,services_helper.openPopupWindow)(src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered, {
            backupId: id
        });
    }
}
function makeBackupName(extension) {
    const now = (0,format/* default */.Z)(Date.now(), 'yyyy-MM-dd');
    return `mask-network-keystore-backup-${now}.${extension}`;
}


/***/ }),

/***/ 59715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DV": () => (/* binding */ confirmBackup),
/* harmony export */   "Kz": () => (/* binding */ getUnconfirmedBackup),
/* harmony export */   "cg": () => (/* binding */ setUnconfirmedBackup),
/* harmony export */   "pi": () => (/* binding */ restoreBackup)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6955);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47481);
/* harmony import */ var _background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60562);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2239);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23365);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15400);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14795);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6739);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43641);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31880);
/* harmony import */ var _masknet_plugin_infra_background_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17610);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48160);
/* harmony import */ var _plugins_Wallet_services_wallet_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28776);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17865);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_RelationRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30074);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(19841);

















/**
 * Restore the backup
 */ async function restoreBackup(json, whoAmI) {
    const data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .UpgradeBackupJSONFile */ .a_)(json, whoAmI);
    if (!data) throw new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('service_invalid_backup_file'));
    {
        await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
            for (const x of data.personas){
                await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .createOrUpdatePersonaDB */ .lX)((0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__/* .PersonaRecordFromJSONFormat */ .r)(x), {
                    explicitUndefinedField: 'ignore',
                    linkedProfiles: 'merge',
                    protectPrivateKey: true
                }, t);
            }
            for (const x1 of data.profiles){
                const { linkedPersona , ...record } = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__/* .ProfileRecordFromJSONFormat */ .B)(x1);
                await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .createOrUpdateProfileDB */ .o7)(record, t);
                if (linkedPersona) {
                    await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .attachProfileDB */ .tc)(record.identifier, linkedPersona, {
                        connectionConfirmState: 'confirmed'
                    }, t);
                }
            }
        });
    }
    for (const [_, x2] of data.wallets.entries()){
        try {
            const record = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__/* .WalletRecordFromJSONFormat */ .JW)(x2);
            const name = record.name;
            if (record.storedKeyInfo && record.derivationPath) await (0,_plugins_Wallet_services_wallet_database__WEBPACK_IMPORTED_MODULE_12__/* .addWallet */ .ry)(record.address, name, record.derivationPath, record.storedKeyInfo);
            else if (record.privateKey) await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.recoverWalletFromPrivateKey)(name, record.privateKey);
            else if (record.mnemonic) {
                // fix a backup bug of pre-v2.2.2 versions
                const accounts = await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.getDerivableAccounts)(record.mnemonic, 1, 5);
                const index = accounts.findIndex((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .currySameAddress */ .DC)(record.address));
                await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.recoverWalletFromMnemonic)(name, record.mnemonic, index > -1 ? `${_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_15__/* .HD_PATH_WITHOUT_INDEX_ETHEREUM */ .UB}/${index}` : record.derivationPath);
            }
        } catch (error) {
            console.error(error);
            continue;
        }
    }
    {
        for (const x of data.posts){
            const { val , err  } = ts_results__WEBPACK_IMPORTED_MODULE_11__/* .Result.wrap */ .x4.wrap(()=>(0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_6__/* .PostRecordFromJSONFormat */ .n)(x)
            );
            if (err) continue;
            if (await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .queryPostDB */ .q3)(val.identifier)) {
                await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .updatePostDB */ .rr)(val, 'append');
            } else await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .createPostDB */ .$v)(val);
        }
    }
    if (data.relations?.length) {
        const relations = data.relations.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_RelationRecord__WEBPACK_IMPORTED_MODULE_14__/* .RelationRecordFromJSONFormat */ .c);
        await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_13__.patchCreateNewRelation)(relations);
    } else {
        // For 1.x backups
        const personas = data.personas.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__/* .PersonaRecordFromJSONFormat */ .r).filter((x)=>x.privateKey
        ).map((x)=>x.identifier
        );
        const profiles = data.profiles.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__/* .ProfileRecordFromJSONFormat */ .B).map((x)=>x.identifier
        );
        await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_13__.patchCreateOrUpdateRelation)(profiles, personas, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .RelationFavor.UNCOLLECTED */ .Kn.UNCOLLECTED);
    }
    const plugins = [
        ..._masknet_plugin_infra_background_worker__WEBPACK_IMPORTED_MODULE_10__/* .activatedPluginsWorker */ .Je
    ];
    const works = new Set();
    for (const [pluginID, item] of Object.entries(data.plugin || {})){
        const plugin = plugins.find((x)=>x.ID === pluginID
        );
        // should we warn user here?
        if (!plugin) {
            if ([
                ..._masknet_plugin_infra_background_worker__WEBPACK_IMPORTED_MODULE_10__/* .registeredPluginIDs */ .fg
            ].includes(pluginID)) console.warn(`[@masknet/plugin-infra] Found a backup of a not enabled plugin ${plugin}`, item);
            else console.warn(`[@masknet/plugin-infra] Found an unknown plugin backup of ${plugin}`, item);
            continue;
        }
        const f = plugin.backup?.onRestore;
        if (!f) {
            console.warn(`[@masknet/plugin-infra] Found a backup of plugin ${plugin} but it did not register a onRestore callback.`, item);
            continue;
        }
        const x3 = ts_results__WEBPACK_IMPORTED_MODULE_11__/* .Result.wrapAsync */ .x4.wrapAsync(async ()=>{
            const x = await f(item);
            if (x.err) console.error(`[@masknet/plugin-infra] Plugin ${plugin} failed to restore its backup.`, item);
            return x.unwrap();
        });
        works.add(x3);
    }
    await Promise.all(works);
}
const unconfirmedBackup = new Map();
/**
 * Restore backup step 1: store the unconfirmed backup in cached
 * @param id the uuid for each restoration
 * @param json the backup to be cached
 */ async function setUnconfirmedBackup(id, json) {
    unconfirmedBackup.set(id, json);
}
/**
 * Get the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function getUnconfirmedBackup(id) {
    return unconfirmedBackup.get(id);
}
/**
 * Restore backup step 2: restore the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function confirmBackup(id, whoAmI) {
    if (unconfirmedBackup.has(id)) {
        await restoreBackup(unconfirmedBackup.get(id), whoAmI);
        unconfirmedBackup.delete(id);
    } else {
        throw new Error('cannot find backup');
    }
}


/***/ }),

/***/ 44603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95095);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(6158)]).then(__webpack_require__.bind(__webpack_require__, 19714))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 64065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "dm": () => (/* binding */ approvedTokensFromUniswap),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24646);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22684);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97096);




/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_2__/* .SLIPPAGE_DEFAULT */ .Nd);
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+singleHopOnly`, false);
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO);
// #region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
// #endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniswap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu}+approvedTokens`, '[]');


/***/ }),

/***/ 1031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ recover_ECDH_256k1_KeyPair_ByMnemonicWord),
/* harmony export */   "_I": () => (/* binding */ validateMnemonic),
/* harmony export */   "xX": () => (/* binding */ generate_ECDH_256k1_KeyPair_ByMnemonicWord)
/* harmony export */ });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68440);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78144);




// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    const mnemonicWord = bip39__WEBPACK_IMPORTED_MODULE_0__/* .generateMnemonic */ .OF();
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await split_ec_k256_keypair_into_pub_priv(HDKeyToJwk(derivedKey));
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
    const key = await split_ec_k256_keypair_into_pub_priv(HDKeyToJwk(derivedKey));
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

/***/ 17450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ deriveLocalKeyFromECDHKey)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86880);


/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await crypto.subtle.importKey('raw', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(pub.x + pub.y), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey', 
    ]);
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(mnemonicWord),
        iterations: 100000,
        hash: 'SHA-256'
    }, pbkdf2, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return (0,_utils_pure__WEBPACK_IMPORTED_MODULE_1__/* .CryptoKeyToJsonWebKey */ .iV)(aes);
}


/***/ }),

/***/ 23365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PersonaRecordToJSONFormat),
/* harmony export */   "r": () => (/* binding */ PersonaRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);

function PersonaRecordToJSONFormat(persona) {
    return {
        createdAt: persona.createdAt.getTime(),
        updatedAt: persona.updatedAt.getTime(),
        identifier: persona.identifier.toText(),
        publicKey: persona.publicKey,
        privateKey: persona.privateKey,
        nickname: persona.nickname,
        mnemonic: persona.mnemonic,
        localKey: persona.localKey,
        linkedProfiles: Array.from(persona.linkedProfiles).map(([x, y])=>[
                x.toText(),
                y
            ]
        )
    };
}
function PersonaRecordFromJSONFormat(persona) {
    if (persona.privateKey && !persona.privateKey.d) throw new Error('Private have no secret');
    return {
        createdAt: new Date(persona.createdAt),
        updatedAt: new Date(persona.updatedAt),
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(persona.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap(),
        publicKey: persona.publicKey,
        privateKey: persona.privateKey,
        nickname: persona.nickname,
        mnemonic: persona.mnemonic,
        localKey: persona.localKey,
        hasLogout: false,
        linkedProfiles: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(persona.linkedProfiles), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO)
    };
}


/***/ }),

/***/ 14795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PostRecordToJSONFormat),
/* harmony export */   "n": () => (/* binding */ PostRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82151);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92415);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);



function PostRecordToJSONFormat(post) {
    return {
        postCryptoKey: post.postCryptoKey,
        foundAt: post.foundAt.getTime(),
        identifier: post.identifier.toText(),
        postBy: post.postBy.toText(),
        recipientGroups: [],
        recipients: post.recipients === 'everyone' ? 'everyone' : Array.from(post.recipients).map(([identifier, detail])=>[
                identifier.toText(),
                {
                    reason: Array.from(detail.reason).map(RecipientReasonToJSON)
                }, 
            ]
        ),
        encryptBy: post.encryptBy?.toText(),
        interestedMeta: MetaToJson(post.interestedMeta),
        summary: post.summary,
        url: post.url
    };
}
function PostRecordFromJSONFormat(post) {
    return {
        postCryptoKey: post.postCryptoKey,
        foundAt: new Date(post.foundAt),
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PostIVIdentifier */ .bb).unwrap(),
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.postBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO).unwrap(),
        recipients: post.recipients === 'everyone' ? 'everyone' : new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(post.recipients.map(([x, y])=>[
                x,
                {
                    reason: y.reason.map(RecipientReasonFromJSON)
                }, 
            ]
        ))),
        encryptBy: post.encryptBy ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.encryptBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob).unwrap() : undefined,
        interestedMeta: MetaFromJson(post.interestedMeta),
        summary: post.summary,
        url: post.url
    };
}
function RecipientReasonToJSON(y) {
    if (y.type === 'direct' || y.type === 'auto-share') return {
        at: y.at.getTime(),
        type: y.type
    };
    else if (y.type === 'group') return {
        at: y.at.getTime(),
        group: y.group.toText(),
        type: y.type
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(y);
}
function RecipientReasonFromJSON(y) {
    if (y.type === 'direct' || y.type === 'auto-share') return {
        at: new Date(y.at),
        type: y.type
    };
    else if (y.type === 'group') return {
        type: 'group',
        at: new Date(y.at),
        group: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(y.group, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GroupIdentifier */ .xI).unwrap()
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(y);
}
function MetaToJson(meta) {
    if (!meta) return undefined;
    const obj = Object.fromEntries(meta);
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)((0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .c)(obj));
}
function MetaFromJson(meta) {
    if (!meta) return undefined;
    const raw = (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__/* .decode */ .Jx)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(meta));
    if (typeof raw !== 'object' || !raw) return undefined;
    return new Map(Object.entries(raw));
}


/***/ }),

/***/ 15400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ProfileRecordFromJSONFormat),
/* harmony export */   "P": () => (/* binding */ ProfileRecordToJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);

function ProfileRecordToJSONFormat(profile) {
    return {
        createdAt: profile.createdAt.getTime(),
        updatedAt: profile.updatedAt.getTime(),
        identifier: profile.identifier.toText(),
        nickname: profile.nickname,
        localKey: profile.localKey,
        linkedPersona: profile.linkedPersona?.toText()
    };
}
function ProfileRecordFromJSONFormat(profile) {
    return {
        createdAt: new Date(profile.createdAt),
        updatedAt: new Date(profile.updatedAt),
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        nickname: profile.nickname,
        localKey: profile.localKey,
        linkedPersona: profile.linkedPersona ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.linkedPersona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined
    };
}


/***/ }),

/***/ 30074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RelationRecordToJSONFormat),
/* harmony export */   "c": () => (/* binding */ RelationRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);

function RelationRecordToJSONFormat(relation) {
    return {
        favor: relation.favor,
        persona: relation.linked.toText(),
        profile: relation.profile.toText()
    };
}
function RelationRecordFromJSONFormat(relation) {
    return {
        favor: relation.favor,
        profile: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(relation.profile, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        linked: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(relation.persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap()
    };
}


/***/ }),

/***/ 43641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JW": () => (/* binding */ WalletRecordFromJSONFormat),
/* harmony export */   "dp": () => (/* binding */ WalletRecordToJSONFormat),
/* harmony export */   "ww": () => (/* binding */ LegacyWalletRecordToJSONFormat)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96596);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2239);
/* harmony import */ var _SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54921);



function WalletRecordToJSONFormat(wallet) {
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallet, 'id', 'erc20_token_whitelist', 'erc20_token_blacklist', 'erc721_token_whitelist', 'erc721_token_blacklist', 'erc1155_token_whitelist', 'erc1155_token_blacklist', 'derivationPath', 'storedKeyInfo'),
        mnemonic: wallet.mnemonic && wallet.derivationPath ? {
            words: wallet.mnemonic,
            parameter: {
                path: wallet.derivationPath,
                withPassword: false
            }
        } : undefined,
        privateKey: wallet.privateKey ? (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet.privateKey, 'private') : undefined,
        createdAt: wallet.createdAt.getTime(),
        updatedAt: wallet.updatedAt.getTime()
    };
}
function LegacyWalletRecordToJSONFormat(wallet) {
    const backup = {
        name: wallet.name ?? '',
        address: wallet.address,
        createdAt: wallet.createdAt.getTime(),
        updatedAt: wallet.updatedAt.getTime()
    };
    // generate keys for managed wallet
    try {
        const wallet_ = wallet;
        backup.passphrase = wallet_.passphrase;
        if (wallet_.mnemonic?.length) backup.mnemonic = {
            words: wallet_.mnemonic.join(' '),
            parameter: {
                path: "m/44'/60'/0'/0/0",
                withPassword: false
            }
        };
        if (wallet_._public_key_ && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._public_key_, 'public'), wallet.address)) backup.publicKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._public_key_, 'public');
        if (wallet_._private_key_ && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._private_key_, 'private'), wallet.address)) backup.privateKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._private_key_, 'private');
    } catch (error) {
        console.error(error);
    }
    return backup;
}
function WalletRecordFromJSONFormat(wallet) {
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallet, 'mnemonic', 'privateKey'),
        id: wallet.address,
        type: 'wallet',
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        createdAt: new Date(wallet.createdAt),
        updatedAt: new Date(wallet.updatedAt),
        mnemonic: wallet.mnemonic?.words,
        derivationPath: wallet.mnemonic?.parameter.path,
        privateKey: wallet.privateKey ? (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .JWKToKey */ .Br)(wallet.privateKey, 'private') : undefined
    };
}


/***/ }),

/***/ 17610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Je": () => (/* reexport */ activatedPluginsWorker),
  "fg": () => (/* reexport */ entry/* registeredPluginIDs */.fg),
  "Ht": () => (/* reexport */ startPluginWorker)
});

// UNUSED EXPORTS: CurrentSNSNetwork, PluginId, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPlugins

// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ../plugin-infra/src/manager/manage.ts
var manage = __webpack_require__(71264);
;// CONCATENATED MODULE: ../plugin-infra/src/manager/worker.ts

const { startDaemon , activated  } = (0,manage/* createManager */.m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;

;// CONCATENATED MODULE: ../plugin-infra/src/entry-background-worker.ts




/***/ })

}]);