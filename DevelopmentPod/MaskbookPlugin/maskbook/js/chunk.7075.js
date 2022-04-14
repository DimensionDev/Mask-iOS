"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7075],{

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

/***/ 80614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X2": () => (/* reexport */ createPluginDatabase)
});

// UNUSED EXPORTS: createPluginDBAccess, pluginDataHasValidKeyPath, toStore

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(96182);
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
    signal?.addEventListener('abort', ()=>{
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
        ensureAlive();
        if (usage === 'rw' && livingTransaction?.mode === 'readonly') invalidateTransaction();
        try {
            await livingTransaction?.store.openCursor();
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

/***/ 67075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "appendShareTarget": () => (/* reexport */ appendShareTarget),
  "decryptComment": () => (/* reexport */ decryptComment),
  "encryptComment": () => (/* reexport */ encryptComment),
  "encryptTo": () => (/* reexport */ encryptTo),
  "getPartialSharedListOfPost": () => (/* reexport */ getPartialSharedListOfPost),
  "steganographyEncodeImage": () => (/* reexport */ steganographyEncodeImage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../encryption/src/index.ts
var encryption_src = __webpack_require__(52222);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(16426);
// EXTERNAL MODULE: ./background/database/post/helper.ts
var post_helper = __webpack_require__(57605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(60562);
// EXTERNAL MODULE: ./background/network/gun/encryption/queryPostKey.ts
var queryPostKey = __webpack_require__(25449);
;// CONCATENATED MODULE: ./background/services/crypto/encryption.ts








async function encryptTo(content, target, whoAmI) {
    const { identifier , output , postKey , e2e  } = await (0,encryption_src/* encrypt */.HI)({
        author: whoAmI,
        message: content,
        target,
        version: -38
    }, {
        async deriveAESKey (pub) {
            const result = Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub, whoAmI)).values());
            if (result.length === 0) throw new Error('No key found');
            return result[0];
        },
        encryptByLocalKey: helper/* encryptByLocalKey.bind */.i6.bind(null, whoAmI),
        queryPublicKey: (id)=>(0,helper/* queryPublicKey */.M_)(id).then((key)=>key ? {
                    algr: encryption_src/* EC_KeyCurveEnum.secp256k1 */.qx.secp256k1,
                    key
                } : null
            )
    });
    (async ()=>{
        const profile = await (0,db/* queryProfileDB */.IW)(whoAmI).catch(noop/* default */.Z);
        const usingPersona = profile?.linkedPersona;
        return (0,post_helper/* savePostKeyToDB */.h)(identifier, postKey, {
            postBy: whoAmI,
            recipients: target.type === 'public' ? 'everyone' : e2eMapToRecipientDetails(e2e),
            encryptBy: usingPersona,
            ...collectInterestedMeta(content)
        });
    })().catch((error)=>console.error('[@masknet/encryption] Failed to save post key to DB', error)
    );
    if (target.type === 'E2E') {
        (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, identifier.toIV(), whoAmI.network, e2e);
    }
    if (typeof output !== 'string') throw new Error('version -37 is not enabled yet!');
    return output;
}
function e2eMapToRecipientDetails(input) {
    const result = new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO);
    for (const [identifier] of input){
        result.set(identifier, {
            reason: [
                {
                    type: 'direct',
                    at: new Date()
                }
            ]
        });
    }
    return result;
}
function collectInterestedMeta(content) {
    if ((0,base/* isTypedMessageText */.Rz)(content)) return {
        summary: getSummary(content),
        meta: content.meta
    };
    return {};
}
const SUMMARY_MAX_LENGTH = 40;
function getSummary(content) {
    let result = '';
    const sliceLength = content.content.length > SUMMARY_MAX_LENGTH ? SUMMARY_MAX_LENGTH + 1 : SUMMARY_MAX_LENGTH;
    // UTF-8 aware summary
    if (Intl.Segmenter) {
        // it seems like using "en" can also split the word correctly.
        const seg = new Intl.Segmenter('en');
        for (const word of seg.segment(content.content)){
            if (result.length >= sliceLength) break;
            result += word.segment;
        }
    } else {
        result = content.content.slice(0, sliceLength);
    }
    return result;
}

// EXTERNAL MODULE: ./background/database/post/index.ts
var database_post = __webpack_require__(51876);
// EXTERNAL MODULE: ./background/services/crypto/decryption.ts
var decryption = __webpack_require__(57691);
;// CONCATENATED MODULE: ./background/services/crypto/appendEncryption.ts






async function appendShareTarget(version, post, target, whoAmI, reason) {
    const key1 = await (0,decryption/* getPostKeyCache */.E)(post);
    const postRec = await (0,database_post/* queryPostDB */.q3)(post);
    const postBy = postRec?.encryptBy || postRec?.postBy || whoAmI;
    if (whoAmI?.isUnknown) throw new Error('Cannot find private key');
    if (!key1) throw new Error('No post key found');
    const e2e = await (0,encryption_src/* appendEncryptionTarget */.cV)({
        target,
        iv: post.toIV(),
        postAESKey: key1,
        version: -38
    }, {
        async deriveAESKey (pub) {
            const result = Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub, postBy)).values());
            if (result.length === 0) throw new Error('No key found');
            return result[0];
        },
        queryPublicKey: (id)=>(0,helper/* queryPublicKey */.M_)(id).then((key)=>key ? {
                    algr: encryption_src/* EC_KeyCurveEnum.secp256k1 */.qx.secp256k1,
                    key
                } : null
            )
    });
    (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, post.toIV(), whoAmI.network, e2e);
    (0,database_post/* updatePostDB */.rr)({
        identifier: post,
        recipients: new src/* IdentifierMap */.qD(new Map(target.map((identifier)=>[
                identifier.toText(),
                {
                    reason: [
                        reason
                    ]
                }
            ]
        )), src/* ProfileIdentifier */.WO)
    }, 'append');
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
;// CONCATENATED MODULE: ./background/services/crypto/comment.ts

// eslint-disable-next-line @dimensiondev/unicode-specific-set
// * Payload format: 🎶2/4|encrypted_comment:||
async function encryptComment(postIV, postContent, comment) {
    const key = await getCommentKey(postIV, postContent);
    const encrypted = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv: postIV
    }, key, (0,esm/* encodeText */.YT)(comment));
    return `\u{1F3B6}2/4|${(0,esm/* encodeArrayBuffer */.ll)(encrypted)}:||`;
}
async function decryptComment(postIV, postContent, encryptComment1) {
    const payload = extractCommentPayload(encryptComment1);
    if (!payload) return null;
    const key = await getCommentKey(postIV, postContent);
    const result = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: postIV
    }, key, (0,esm/* decodeArrayBuffer */.xe)(payload));
    return (0,esm/* decodeText */.rj)(result);
}
async function getCommentKey(postIV, postContent) {
    const pbkdf = await crypto.subtle.importKey('raw', (0,esm/* encodeText */.YT)(postContent), 'PBKDF2', false, [
        'deriveBits',
        'deriveKey', 
    ]);
    return await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: postIV,
        iterations: 100000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
}
function extractCommentPayload(text) {
    const [_, toEnd] = text.split('\u{1F3B6}2/4|');
    const [content, _2] = (toEnd || '').split(':||');
    if (content.length) return content;
    return;
}

;// CONCATENATED MODULE: ./background/services/crypto/steganography.ts


async function fetchImage(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.arrayBuffer();
}
const steganographyDownloadImage = (0,esm/* memoizePromise */.J3)(fetchImage, (x)=>x
);
function steganographyEncodeImage(buf, options) {
    return (0,encryption_src/* steganographyEncodeImage */.Mk)(buf, {
        ...options,
        downloadImage: steganographyDownloadImage
    });
}

;// CONCATENATED MODULE: ./background/services/crypto/index.ts
// Encrypt & decrypt (decryptionWithSocialNetworkDecoding is a generator, not included.)


// Comments

// Steganography
 // export { getPartialSharedListOfPost } from './CryptoServices/getPartialSharedListOfPost'

// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(6739);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/getPartialSharedListOfPost.ts



/**
 * Get already shared target of the post
 */ async function getPartialSharedListOfPost(id) {
    const ids = new Set();
    const nameInDB = (await (0,database_post/* queryPostDB */.q3)(id))?.recipients;
    if (nameInDB === 'everyone') return [];
    if (!nameInDB) return [];
    nameInDB.forEach((_, x)=>ids.add(x.toText())
    );
    return Promise.all(Array.from(ids).map((x)=>src/* Identifier.fromString */.xb.fromString(x, src/* ProfileIdentifier */.WO)
    ).filter((x)=>x.ok
    ).map((x)=>x.val
    ).map(database/* queryProfile */.JL));
}

;// CONCATENATED MODULE: ./src/extension/background-script/CryptoService.ts

(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);




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


/***/ })

}]);