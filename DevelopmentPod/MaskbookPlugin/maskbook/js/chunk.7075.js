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

/***/ 57605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ savePostKeyToDB)
/* harmony export */ });
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86880);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96182);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51876);



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

/***/ 96182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62481);


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
        if (db?.version === latestVersion) return db;
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
            db?.close();
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

/***/ 57691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ decryptionWithSocialNetworkDecoding),
/* harmony export */   "E": () => (/* binding */ getPostKeyCache)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21122);
/* harmony import */ var _database_persona_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60562);
/* harmony import */ var _database_persona_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16426);
/* harmony import */ var _database_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51876);
/* harmony import */ var _database_post_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57605);
/* harmony import */ var _network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25449);









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
    const parse = await (0,_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .parsePayload */ .WZ)(payload);
    if (parse.err) return null;
    const { currentSocialNetwork , postURL  } = context;
    let { currentProfile , authorHint  } = context;
    if (currentProfile?.isUnknown) currentProfile = null;
    if (authorHint?.isUnknown) authorHint = null;
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
            storeAuthorPublicKey(id, authorHint, parse.unwrap().authorPublicKey.unwrap().unwrap()).catch(lodash_unified__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
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
            return (0,_database_post_helper__WEBPACK_IMPORTED_MODULE_6__/* .savePostKeyToDB */ .h)(id, key, {
                // public post will not call this function.
                // and recipients only will be set when posting/appending recipients.
                recipients: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .qD(new Map()),
                postBy: authorHint || parse.safeUnwrap().author.unwrapOr(null)?.unwrapOr(null) || _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown,
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
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version39Or38 */ .ab)(-38, iv, author, getNetworkHint(context.currentSocialNetwork), signal || new AbortController().signal);
        },
        async *queryPostKey_version39 (iv, signal) {
            const author = await (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .queryPublicKey */ .M_)(context.currentProfile);
            if (!author) throw new _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptError */ .G6(_masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .DecryptErrorReasons.CurrentProfileDoesNotConnectedToPersona */ .OF.CurrentProfileDoesNotConnectedToPersona, undefined);
            yield* (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version39Or38 */ .ab)(-39, iv, author, getNetworkHint(context.currentSocialNetwork), signal || new AbortController().signal);
        },
        async queryPostKey_version40 (iv) {
            if (!currentProfile) return null;
            return (0,_network_gun_encryption_queryPostKey__WEBPACK_IMPORTED_MODULE_7__/* .GUN_queryPostKey_version40 */ .Kl)(iv, currentProfile.userId);
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
    if (!payloadAuthor.equals(postAuthor)) {
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
    const otherPersona = await (0,_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .queryPersonaDB */ .Hm)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(key));
    if (otherPersona?.privateKey) return;
    return (0,_database_persona_helper__WEBPACK_IMPORTED_MODULE_4__/* .createProfileWithPersona */ .lr)(payloadAuthor, {
        connectionConfirmState: 'confirmed'
    }, {
        publicKey: await crypto.subtle.exportKey('jwk', pub.key)
    });
}


/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.2/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(19245);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
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

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



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
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        Promise.all(/* import() */[__webpack_require__.e(5449), __webpack_require__.e(8699)]).then(__webpack_require__.bind(__webpack_require__, 98699)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
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