"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1950],{

/***/ 52947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ queryAvatarsDataURL),
/* harmony export */   "Z": () => (/* binding */ storeAvatar)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59017);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76536);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46123);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55989);




/**
 * Get a (cached) blob url for an identifier. No cache for native api.
 * ? Because of cross-origin restrictions, we cannot use blob url here. sad :(
 */ async function nativeImpl(identifiers) {
    const map = new Map(new Map());
    await Promise.allSettled(identifiers.map(async (id)=>{
        const result = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_avatar */ .Nz.api.query_avatar({
            identifier: id.toText()
        });
        result && map.set(id, result);
    }));
    return map;
}
const indexedDBImpl = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .memoizePromise */ .J3)(async function(identifiers) {
    const promises = [];
    const map = new Map();
    const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .createAvatarDBAccess */ .Hm)(), 'readonly')('avatars');
    for (const id of identifiers){
        // Must not await here. Because we insert non-idb async operation (blobToDataURL).
        promises.push((0,_db__WEBPACK_IMPORTED_MODULE_0__/* .queryAvatarDB */ .dg)(t, id).then((buffer)=>buffer && (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .blobToDataURL */ .n5)(new Blob([
                buffer
            ], {
                type: 'image/png'
            }))
        ).then((url)=>url && map.set(id, url)
        ));
    }
    await Promise.allSettled(promises);
    return map;
}, (id)=>id.flatMap((x)=>x.toText()
    ).join(';')
);
const queryAvatarsDataURL = _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .hasNativeAPI */ ._ ? nativeImpl : indexedDBImpl;
/**
 * Store an avatar with a url for an identifier.
 * @param identifier - This avatar belongs to.
 * @param avatar - Avatar to store. If it is a string, will try to fetch it.
 */ async function storeAvatar(identifier, avatar) {
    try {
        if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .hasNativeAPI */ ._) {
            // ArrayBuffer is unreachable on Native side.
            if (typeof avatar !== 'string') return;
            await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.store_avatar({
                identifier: identifier.toText(),
                avatar: avatar
            });
            return;
        }
        if (typeof avatar === 'string') {
            if (avatar.startsWith('https') === false) return;
            const isOutdated = await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .isAvatarOutdatedDB */ .PU)((0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .createAvatarDBAccess */ .Hm)(), 'readonly')('metadata'), identifier, 'lastUpdateTime');
            if (isOutdated) {
                // ! must fetch before create the transaction
                const buffer = await (await fetch(avatar)).arrayBuffer();
                {
                    const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .createAvatarDBAccess */ .Hm)(), 'readwrite')('avatars', 'metadata');
                    await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .storeAvatarDB */ .CW)(t, identifier, buffer);
                }
            }
        // else do nothing
        } else {
            const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .createAvatarDBAccess */ .Hm)(), 'readwrite')('avatars', 'metadata');
            await (0,_db__WEBPACK_IMPORTED_MODULE_0__/* .storeAvatarDB */ .CW)(t, identifier, avatar);
        }
    } catch (error) {
        console.error('[AvatarDB] Store avatar failed', error);
    } finally{
        indexedDBImpl.cache.clear();
    }
}


/***/ }),

/***/ 59017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CW": () => (/* binding */ storeAvatarDB),
/* harmony export */   "Hm": () => (/* binding */ createAvatarDBAccess),
/* harmony export */   "PU": () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   "dg": () => (/* binding */ queryAvatarDB)
/* harmony export */ });
/* unused harmony exports queryAvatarOutdatedDB, deleteAvatarsDB */
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63338);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55989);



const pendingUpdate = new Map();
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
            const id = Identifier.from(value.identifier);
            if (id.none) continue;
            if (id.val instanceof ProfileIdentifier || id.val instanceof ECKeyIdentifier) outdated.push(id.val);
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

/***/ 34424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ toProfileInformation),
/* harmony export */   "y": () => (/* binding */ toPersonaInformation)
/* harmony export */ });
/* harmony import */ var _database_avatar_cache_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52947);
/* harmony import */ var _database_persona_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28511);


/** @internal */ function toProfileInformation(profiles) {
    return {
        mustNotAwaitThisWithInATransaction: (async ()=>{
            const result = [];
            for (const profile of profiles){
                result.push({
                    identifier: profile.identifier,
                    nickname: profile.nickname,
                    linkedPersona: profile.linkedPersona
                });
            }
            const avatars = await (0,_database_avatar_cache_avatar__WEBPACK_IMPORTED_MODULE_0__/* .queryAvatarsDataURL */ .A)(result.map((x)=>x.identifier
            ));
            result.forEach((x)=>avatars.has(x.identifier) && (x.avatar = avatars.get(x.identifier))
            );
            return result;
        })()
    };
}
/** @internal */ function toPersonaInformation(personas, t) {
    const personaInfo = [];
    const dbQueryPass2 = [];
    const dbQuery = personas.map(async (persona)=>{
        const map = [];
        personaInfo.push({
            nickname: persona.nickname,
            identifier: persona.identifier,
            linkedProfiles: map
        });
        if (persona.linkedProfiles.size) {
            const profiles = await (0,_database_persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryProfilesDB */ .i2)({
                identifiers: [
                    ...persona.linkedProfiles.keys()
                ]
            }, t);
            // we must not await toProfileInformation cause it is tx of another db.
            dbQueryPass2.push(toProfileInformation(profiles).mustNotAwaitThisWithInATransaction.then((x)=>void map.push(...x)
            ));
        }
    });
    return {
        // we have to split two arrays for them and await them one by one, otherwise it will be race condition
        mustNotAwaitThisWithInATransaction: Promise.all(dbQuery).then(()=>Promise.all(dbQueryPass2)
        ).then(()=>personaInfo
        )
    };
}


/***/ }),

/***/ 61950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "attachProfile": () => (/* reexport */ attachProfile),
  "createNewRelation": () => (/* reexport */ createNewRelation),
  "createPersonaByMnemonic": () => (/* reexport */ createPersonaByMnemonic),
  "createPersonaByMnemonicV2": () => (/* reexport */ createPersonaByMnemonicV2),
  "createPersonaByPrivateKey": () => (/* reexport */ createPersonaByPrivateKey),
  "deletePersona": () => (/* reexport */ deletePersona),
  "detachProfile": () => (/* reexport */ detachProfile),
  "detachProfileWithNextID": () => (/* reexport */ detachProfileWithNextID),
  "generateSignResult": () => (/* reexport */ generateSignResult),
  "getPersonaAvatar": () => (/* reexport */ getPersonaAvatar),
  "hasLocalKey": () => (/* reexport */ hasLocalKey),
  "loginExistPersonaByPrivateKey": () => (/* reexport */ loginExistPersonaByPrivateKey),
  "loginPersona": () => (/* reexport */ loginPersona),
  "logoutPersona": () => (/* reexport */ logoutPersona),
  "mobile_queryOwnedProfiles": () => (/* reexport */ mobile_queryOwnedProfiles),
  "mobile_queryPersonaByPrivateKey": () => (/* reexport */ mobile_queryPersonaByPrivateKey),
  "mobile_queryPersonaRecordsFromIndexedDB": () => (/* reexport */ mobile_queryPersonaRecordsFromIndexedDB),
  "mobile_queryPersonas": () => (/* reexport */ mobile_queryPersonas),
  "mobile_queryProfileRecordFromIndexedDB": () => (/* reexport */ mobile_queryProfileRecordFromIndexedDB),
  "mobile_queryProfiles": () => (/* reexport */ mobile_queryProfiles),
  "mobile_queryRelationsRecordFromIndexedDB": () => (/* reexport */ mobile_queryRelationsRecordFromIndexedDB),
  "mobile_removeProfile": () => (/* reexport */ mobile_removeProfile),
  "mobile_restoreFromMnemonicWords": () => (/* reexport */ mobile_restoreFromMnemonicWords),
  "queryAvatarsDataURL": () => (/* reexport */ avatar_cache_avatar/* queryAvatarsDataURL */.A),
  "queryLastPersonaCreated": () => (/* reexport */ queryLastPersonaCreated),
  "queryOwnedPersonaInformation": () => (/* reexport */ queryOwnedPersonaInformation),
  "queryOwnedProfilesInformation": () => (/* reexport */ queryOwnedProfilesInformation),
  "queryPersona": () => (/* reexport */ queryPersona),
  "queryPersonaByMnemonic": () => (/* reexport */ queryPersonaByMnemonic),
  "queryPersonaByProfile": () => (/* reexport */ queryPersonaByProfile),
  "queryProfilesInformation": () => (/* reexport */ queryProfilesInformation),
  "queryRelationPaged": () => (/* reexport */ queryRelationPaged),
  "renamePersona": () => (/* reexport */ renamePersona),
  "resolveUnknownLegacyIdentity": () => (/* reexport */ resolveUnknownLegacyIdentity),
  "setupPersona": () => (/* reexport */ setupPersona),
  "signWithPersona": () => (/* reexport */ signWithPersona),
  "updatePersonaAvatar": () => (/* reexport */ updatePersonaAvatar),
  "updateProfileInfo": () => (/* reexport */ updateProfileInfo),
  "updateRelation": () => (/* reexport */ updateRelation),
  "validateMnemonic": () => (/* reexport */ validateMnemonic)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(78366);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
;// CONCATENATED MODULE: ./background/services/identity/persona/mobile.ts
function personaRecordToMobilePersona(persona) {
    if (!persona) return persona;
    const profiles = {};
    for (const [key, value] of persona.linkedProfiles){
        const k = key.toText();
        Object.assign(profiles, {
            [k]: value?.connectionConfirmState
        });
    }
    return {
        identifier: persona.identifier.toText(),
        createdAt: persona.createdAt.getTime(),
        updatedAt: persona.updatedAt.getTime(),
        hasPrivateKey: !!persona.privateKey,
        linkedProfiles: profiles,
        nickname: persona.nickname
    };
}

// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(28511);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(38270);
;// CONCATENATED MODULE: ./background/services/identity/persona/utils.ts





/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(pub.x + pub.y), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey', 
    ]);
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: (0,esm/* encodeText */.YT)(mnemonicWord),
        iterations: 100000,
        hash: 'SHA-256'
    }, pbkdf2, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(aes);
}
// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    const mnemonicWord = src/* generateMnemonic */.OF();
    const seed = await src/* mnemonicToSeed */.OI(mnemonicWord, password);
    const masterKey = dist.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await split_ec_k256_keypair_into_pub_priv(await HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
async function recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password) {
    const verify = src/* validateMnemonic */._I(mnemonicWord);
    if (!verify) {
        console.warn('Verify error');
    }
    const seed = await src/* mnemonicToSeed */.OI(mnemonicWord, password);
    const masterKey = dist.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await split_ec_k256_keypair_into_pub_priv(await HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
const validateMnemonic = src/* validateMnemonic */._I;
async function HDKeyToJwk(hdk) {
    const jwk = await (0,shared_base_src/* decompressSecp256k1Key */.qX)((0,esm/* encodeArrayBuffer */.ll)(hdk.publicKey));
    jwk.d = hdk.privateKey ? (0,shared_base_src/* toBase64URL */.wi)(hdk.privateKey) : undefined;
    return jwk;
}
async function split_ec_k256_keypair_into_pub_priv(key) {
    (0,shared_base_src/* assertEC_Private_JsonWebKey */.mQ)(key);
    const { d , ...pub } = key;
    // @ts-expect-error Do a force transform
    return {
        privateKey: {
            ...key
        },
        publicKey: pub
    };
}

;// CONCATENATED MODULE: ./background/services/identity/persona/create.ts









async function createPersonaByPrivateKey(privateKeyString, nickname) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!(0,shared_base_src/* isEC_Private_JsonWebKey */.PQ)(privateKey)) throw new TypeError('Invalid private key');
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey: (0,omit/* default */.Z)(privateKey, 'd'),
        nickname
    });
}
async function mobile_restoreFromMnemonicWords(mnemonicWords, nickname, password1) {
    if (false) {}
    if (!src/* validateMnemonic */._I(mnemonicWords)) throw new Error('the mnemonic words are not valid');
    const identifier = await restoreNewIdentityWithMnemonicWord(mnemonicWords, password1, {
        nickname
    });
    return (0,db/* queryPersonaDB */.Hm)(identifier).then((x)=>personaRecordToMobilePersona(x)
    );
    /**
     * Recover new identity by a password and mnemonic words
     *
     * @param password password used to generate mnemonic word, can be empty string
     * @param word mnemonic words
     * @param info additional information
     */ async function restoreNewIdentityWithMnemonicWord(word, password, info) {
        const { key , mnemonicRecord  } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(word, password);
        const { privateKey , publicKey  } = key;
        const localKeyJwk = await deriveLocalKeyFromECDHKey(publicKey, mnemonicRecord.words);
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
}
async function createPersonaByMnemonic(nickname, password) {
    const { key , mnemonicRecord: mnemonic  } = await generate_ECDH_256k1_KeyPair_ByMnemonicWord(password);
    const { privateKey , publicKey  } = key;
    const localKey = await deriveLocalKeyFromECDHKey(publicKey, mnemonic.words);
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
    const personas = await (0,db/* queryPersonasDB */._P)({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    const verify = src/* validateMnemonic */._I(mnemonicWord);
    if (!verify) throw new Error('Verify error');
    const { key , mnemonicRecord: mnemonic  } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password);
    const { privateKey , publicKey  } = key;
    const localKey = await deriveLocalKeyFromECDHKey(publicKey, mnemonic.words);
    return (0,helper/* createPersonaByJsonWebKey */.w0)({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(50350);
// EXTERNAL MODULE: ./background/database/persona/web.ts + 1 modules
var web = __webpack_require__(79442);
// EXTERNAL MODULE: ./background/services/__utils__/convert.ts
var convert = __webpack_require__(34424);
;// CONCATENATED MODULE: ./background/services/identity/persona/query.ts





async function mobile_queryPersonaRecordsFromIndexedDB() {
    if (false) {}
    return (0,web.queryPersonasDB)();
}
async function mobile_queryPersonas(options) {
    if (false) {}
    const { hasPrivateKey , identifier , network  } = options;
    const result = [];
    if (identifier === undefined) {
        result.push(...await (0,db/* queryPersonasDB */._P)({
            hasPrivateKey
        }));
    } else {
        const persona = await (0,db/* queryPersonaDB */.Hm)(identifier);
        persona && result.push(persona);
    }
    return result.filter((x1)=>{
        if (!x1.privateKey && hasPrivateKey) return false;
        if (network && ![
            ...x1.linkedProfiles.keys()
        ].some((x)=>x.network === network
        )) return false;
        return true;
    }).map((x)=>personaRecordToMobilePersona(x)
    );
}
async function queryOwnedPersonaInformation(initializedOnly) {
    let result;
    await (0,db/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        let personas = await (0,db/* queryPersonasDB */._P)({
            hasPrivateKey: true
        }, t);
        if (initializedOnly) personas = personas.filter((x)=>!x.uninitialized
        );
        result = (0,convert/* toPersonaInformation */.y)(personas, t).mustNotAwaitThisWithInATransaction;
    });
    return result;
}
async function queryLastPersonaCreated() {
    const all = await (0,db/* queryPersonasDB */._P)({
        hasPrivateKey: true
    });
    return (0,head/* default */.Z)((0,orderBy/* default */.Z)(all, (x)=>x.createdAt
    , 'desc'))?.identifier;
}
async function queryPersonaByProfile(id) {
    let result;
    await (0,db/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const profile = await (0,db/* queryProfileDB */.IW)(id, t);
        if (!profile?.linkedPersona) return;
        const persona = await (0,db/* queryPersonaDB */.Hm)(profile.linkedPersona, t);
        if (!persona) return;
        result = (0,convert/* toPersonaInformation */.y)([
            persona
        ], t).mustNotAwaitThisWithInATransaction.then((x)=>(0,head/* default */.Z)(x)
        );
    });
    return result;
}
async function queryPersona(id) {
    let result;
    await (0,db/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const persona = await (0,db/* queryPersonaDB */.Hm)(id, t);
        if (!persona) return;
        result = (0,convert/* toPersonaInformation */.y)([
            persona
        ], t).mustNotAwaitThisWithInATransaction.then((x)=>(0,head/* default */.Z)(x)
        );
    });
    return result;
}

;// CONCATENATED MODULE: ./background/services/identity/persona/update.ts






async function deletePersona(id, confirm) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,db/* queryPersonaDB */.Hm)(id, t);
        if (!d) return;
        for (const e of d.linkedProfiles){
            await (0,db/* detachProfileDB */.AY)(e[0], t);
        }
        if (confirm === 'delete even with private') await (0,db/* deletePersonaDB */.LY)(id, 'delete even with private', t);
        else if (confirm === 'safe delete') await (0,db/* safeDeletePersonaDB */.Ul)(id, t);
    });
}
/** @internal looks like not directly used. let's not exposing it for now. */ async function loginPersona(identifier) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: false
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function logoutPersona(identifier) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: true
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function setupPersona(id) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,db/* queryPersonaDB */.Hm)(id, t);
        if (!d) throw new Error('cannot find persona');
        if (!d.privateKey) throw new Error('Cannot setup a persona without a private key');
        if (d.linkedProfiles.size === 0) throw new Error('persona should link at least one profile');
        if (d.uninitialized) {
            await (0,db/* updatePersonaDB */.E8)({
                identifier: id,
                uninitialized: false
            }, {
                linkedProfiles: 'merge',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    });
}
async function loginExistPersonaByPrivateKey(privateKeyString) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    if (!(0,shared_base_src/* isEC_Private_JsonWebKey */.PQ)(privateKey)) throw new TypeError('Invalid private key');
    const identifier = await (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await loginPersona(persona.identifier);
        return identifier;
    }
    return null;
}
async function mobile_queryPersonaByPrivateKey(privateKeyString) {
    if (false) {}
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    const identifier = await (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await loginPersona(persona.identifier);
        return personaRecordToMobilePersona(persona);
    }
    return null;
}
async function renamePersona(identifier, nickname) {
    const personas = await (0,db/* queryPersonasDB */._P)({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* updatePersonaDB */.E8)({
            identifier,
            nickname
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function queryPersonaByMnemonic(mnemonic, password) {
    const verify = validateMnemonic(mnemonic);
    if (!verify) {
        throw new Error('Verify error');
    }
    const { key  } = await recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonic, password);
    const identifier = await (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(key.privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await loginPersona(persona.identifier);
        return persona.identifier;
    }
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ./background/services/helper/index.ts + 3 modules
var services_helper = __webpack_require__(67968);
;// CONCATENATED MODULE: ./background/services/identity/persona/sign.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];






async function signWithPersona({ message , method , identifier  }) {
    if (method !== 'eth') throw new Error('Unknown sign method');
    const requestID = Math.random().toString(16).slice(3);
    await (0,services_helper.openPopupWindow)(shared_base_src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest, {
        message,
        requestID,
        identifier: identifier?.toText()
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
    const persona = (await (0,db/* queryPersonasWithPrivateKey */.Eq)()).find((x)=>x.identifier === signer
    );
    if (!persona) throw new Error('Persona not found');
    const length = (0,esm/* encodeText */.YT)(message).length;
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

// EXTERNAL MODULE: ./shared/messages.ts
var messages = __webpack_require__(29130);
// EXTERNAL MODULE: ./background/database/avatar-cache/avatar.ts
var avatar_cache_avatar = __webpack_require__(52947);
;// CONCATENATED MODULE: ./background/services/identity/persona/avatar.ts


async function getPersonaAvatar(identifier) {
    if (!identifier) return null;
    return (0,avatar_cache_avatar/* queryAvatarsDataURL */.A)([
        identifier
    ]).then((x)=>x.get(identifier)
    );
}
async function updatePersonaAvatar(identifier, avatar) {
    if (!identifier) return;
    await (0,avatar_cache_avatar/* storeAvatar */.Z)(identifier, await avatar.arrayBuffer());
    messages/* MaskMessages.events.ownPersonaChanged.sendToAll */.q.events.ownPersonaChanged.sendToAll(undefined);
}

;// CONCATENATED MODULE: ./background/services/identity/profile/mobile.ts
/** @internal */ function profileRecordToMobileProfile(profile) {
    return {
        identifier: profile.identifier.toText(),
        createdAt: profile.createdAt.getTime(),
        updatedAt: profile.updatedAt.getTime(),
        nickname: profile.nickname,
        linkedPersona: !!profile.linkedPersona
    };
}

;// CONCATENATED MODULE: ./background/services/identity/profile/query.ts





async function mobile_queryProfiles(options) {
    if (false) {}
    const { network , identifiers  } = options;
    const result = await (0,db/* queryProfilesDB */.i2)({
        network,
        identifiers
    });
    return result.map(profileRecordToMobileProfile);
}
async function mobile_queryOwnedProfiles(network) {
    let result;
    await (0,db/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const personas = await (0,db/* queryPersonasDB */._P)({
            hasPrivateKey: true
        }, t);
        const profiles = personas.filter((x)=>!x.uninitialized
        ).flatMap((x)=>[
                ...x.linkedProfiles.keys()
            ]
        ).filter((x)=>network ? x.network === network : true
        );
        result = await (0,db/* queryProfilesDB */.i2)({
            identifiers: profiles
        });
    });
    return result.map(profileRecordToMobileProfile);
}
async function mobile_queryProfileRecordFromIndexedDB() {
    if (false) {}
    return (0,web.queryProfilesDB)({});
}
async function queryProfilesInformation(identifiers) {
    const profiles = await (0,db/* queryProfilesDB */.i2)({
        identifiers
    });
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}
/** @deprecated */ async function hasLocalKey(identifier) {
    return (0,helper/* hasLocalKeyOf */.wf)(identifier);
}
async function queryOwnedProfilesInformation(network) {
    let profiles;
    await (0,db/* createPersonaDBReadonlyAccess */.hC)(async (t)=>{
        const personas = (await (0,db/* queryPersonasDB */._P)({
            hasPrivateKey: true
        }, t)).sort((a, b)=>a.updatedAt > b.updatedAt ? 1 : -1
        );
        const ids = Array.from(new Set(personas.flatMap((x)=>[
                ...x.linkedProfiles.keys()
            ]
        )));
        profiles = await (0,db/* queryProfilesDB */.i2)({
            identifiers: ids,
            network
        }, t);
    });
    return (0,convert/* toProfileInformation */.Y)(profiles.filter((x)=>x.identifier.network === network
    )).mustNotAwaitThisWithInATransaction;
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
;// CONCATENATED MODULE: ./background/services/identity/profile/update.ts





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
    if (data.avatarURL) await (0,avatar_cache_avatar/* storeAvatar */.Z)(identifier, data.avatarURL);
}
function mobile_removeProfile(id) {
    if (false) {}
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* deleteProfileDB */.B4)(id, t)
    );
}
async function detachProfileWithNextID(uuid, personaPublicKey, platform, identity, createdAt, options) {
    await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(uuid, personaPublicKey, shared_base_src/* NextIDAction.Delete */.BU.Delete, platform, identity, createdAt, {
        signature: options?.signature
    });
    messages/* MaskMessages.events.ownProofChanged.sendToAll */.q.events.ownProofChanged.sendToAll(undefined);
}
/**
 * In older version of Mask, identity is marked as `ProfileIdentifier(network, '$unknown')` or `ProfileIdentifier(network, '$self')`. After upgrading to the newer version of Mask, Mask will try to find the current user in that network and call this function to replace old identifier into a "resolved" identity.
 * @param identifier The resolved identity
 */ async function resolveUnknownLegacyIdentity(identifier) {
    const unknown = shared_base_src/* ProfileIdentifier.of */.WO.of(identifier.network, '$unknown').unwrap();
    const self = shared_base_src/* ProfileIdentifier.of */.WO.of(identifier.network, '$self').unwrap();
    const records = await (0,db/* queryProfilesDB */.i2)({
        identifiers: [
            unknown,
            self
        ]
    });
    if (!records.length) return;
    const finalRecord = Object.assign({}, ...records, {
        identifier
    });
    try {
        await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,db/* createProfileDB */.ah)(finalRecord, t);
            await (0,db/* deleteProfileDB */.B4)(unknown, t).catch(()=>{});
            await (0,db/* deleteProfileDB */.B4)(self, t).catch(()=>{});
        });
    } catch  {
    // the profile already exists
    }
}
/**
 * Remove an identity.
 */ async function attachProfile(source, target, data) {
    if (target instanceof shared_base_src/* ProfileIdentifier */.WO) {
        const profile = await (0,db/* queryProfileDB */.IW)(target);
        if (!profile?.linkedPersona) throw new Error('target not found');
        target = profile.linkedPersona;
    }
    return (0,db/* attachProfileDB */.tc)(source, target, data);
}
function detachProfile(identifier) {
    return (0,db/* detachProfileDB */.AY)(identifier);
}

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(60718);
;// CONCATENATED MODULE: ./background/services/identity/relation/create.ts


async function createNewRelation(profile, linked, favor = public_api_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    const relationsInDB = await (0,db/* queryRelations */.bF)(linked, profile, t);
    if (relationsInDB.length > 0) return;
    await (0,db/* createRelationDB */.N8)({
        profile,
        linked,
        favor
    }, t);
}

;// CONCATENATED MODULE: ./background/services/identity/relation/query.ts


async function mobile_queryRelationsRecordFromIndexedDB() {
    if (false) {}
    return (0,web.queryRelations)();
}
async function queryRelationPaged(currentPersona, options, count) {
    if (!currentPersona) return [];
    return (0,db/* queryRelationsPagedDB */.PF)(currentPersona, options, count);
}

;// CONCATENATED MODULE: ./background/services/identity/relation/update.ts

async function updateRelation(profile, linked, favor) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    await (0,db/* updateRelationDB */.Jx)({
        profile,
        linked,
        favor
    }, t);
}

;// CONCATENATED MODULE: ./background/services/identity/avatar/query.ts


;// CONCATENATED MODULE: ./background/services/identity/index.ts














/***/ })

}]);