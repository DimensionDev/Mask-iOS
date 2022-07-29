"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3437,5989],{

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

/***/ 55989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z_": () => (/* binding */ createDBAccess),
  "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
  "_X": () => (/* binding */ createTransaction)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/safari-14-idb-fix@3.0.0/node_modules/safari-14-idb-fix/dist/index.js
/**
 * Work around Safari 14 IndexedDB open bug.
 *
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
 * The only solution is to keep nudging it until it's awake.
 */
function idbReady() {
    var isSafari = !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
    // No point putting other browsers or older versions of Safari through this mess.
    if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
    var intervalId;
    return new Promise(function (resolve) {
        var tryIdb = function () { return indexedDB.databases().finally(resolve); };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(function () { return clearInterval(intervalId); });
}

/* harmony default export */ const dist = (idbReady);

;// CONCATENATED MODULE: ./background/database/utils/openDB.ts



function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
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
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
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
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
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
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
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

/***/ 23437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "appendShareTarget": () => (/* reexport */ appendShareTarget),
  "decryptComment": () => (/* reexport */ decryptComment),
  "encryptComment": () => (/* reexport */ encryptComment),
  "encryptTo": () => (/* reexport */ encryptTo),
  "getIncompleteRecipientsOfPost": () => (/* reexport */ getIncompleteRecipientsOfPost),
  "getRecipients": () => (/* reexport */ getRecipients),
  "hasRecipientAvailable": () => (/* reexport */ hasRecipientAvailable),
  "queryPagedPostHistory": () => (/* reexport */ queryPagedPostHistory),
  "steganographyEncodeImage": () => (/* reexport */ steganographyEncodeImage)
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../encryption/src/index.ts
var src = __webpack_require__(66525);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(78366);
// EXTERNAL MODULE: ./background/database/post/helper.ts
var post_helper = __webpack_require__(47085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(28511);
// EXTERNAL MODULE: ./background/network/gun/encryption/queryPostKey.ts
var queryPostKey = __webpack_require__(91816);
;// CONCATENATED MODULE: ./background/services/crypto/encryption.ts







async function encryptTo(content1, target, whoAmI, network) {
    const { identifier , output , postKey , e2e  } = await (0,src/* encrypt */.HI)({
        network: whoAmI?.network || (0,src/* SocialNetworkEnumToProfileDomain */.VC)(network),
        author: whoAmI,
        message: content1,
        target,
        version: -38
    }, {
        async deriveAESKey (pub) {
            const result = Array.from((await (0,helper/* deriveAESByECDH */.Si)(pub, whoAmI)).values());
            if (result.length === 0) throw new Error('No key found');
            return result[0];
        },
        encryptByLocalKey: async (content, iv)=>{
            if (!whoAmI) throw new Error('No Profile found');
            return (0,helper/* encryptByLocalKey */.i6)(whoAmI, content, iv);
        },
        queryPublicKey: (id)=>(0,helper/* queryPublicKey */.M_)(id).then((key)=>key ? {
                    algr: src/* EC_KeyCurveEnum.secp256k1 */.qx.secp256k1,
                    key
                } : null
            )
    });
    (async ()=>{
        const profile = whoAmI ? await (0,db/* queryProfileDB */.IW)(whoAmI).catch(noop/* default */.Z) : null;
        const usingPersona = profile?.linkedPersona;
        return (0,post_helper/* savePostKeyToDB */.h)(identifier, postKey, {
            postBy: whoAmI,
            recipients: target.type === 'public' ? 'everyone' : e2eMapToRecipientDetails(e2e),
            encryptBy: usingPersona,
            ...collectInterestedMeta(content1)
        });
    })().catch((error)=>console.error('[@masknet/encryption] Failed to save post key to DB', error)
    );
    if (target.type === 'E2E') {
        (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, identifier.toIV(), network, e2e);
    }
    if (typeof output !== 'string') throw new Error('version -37 is not enabled yet!');
    return output;
}
function e2eMapToRecipientDetails(input) {
    const result = new Map();
    for (const [identifier] of input){
        result.set(identifier, new Date());
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
var database_post = __webpack_require__(93340);
// EXTERNAL MODULE: ./background/services/crypto/decryption.ts
var decryption = __webpack_require__(93884);
;// CONCATENATED MODULE: ./background/services/crypto/appendEncryption.ts





async function appendShareTarget(version, post, target, whoAmI, network) {
    if (version === -39 || version === -40) throw new TypeError('invalid version');
    const key1 = await (0,decryption/* getPostKeyCache */.E)(post);
    const postRec = await (0,database_post/* queryPostDB */.q3)(post);
    const postBy = postRec?.encryptBy || postRec?.postBy || whoAmI;
    if (!key1) throw new Error('No post key found');
    const e2e = await (0,src/* appendEncryptionTarget */.cV)({
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
                    algr: src/* EC_KeyCurveEnum.secp256k1 */.qx.secp256k1,
                    key
                } : null
            )
    });
    (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, post.toIV(), network, e2e);
    (0,database_post/* updatePostDB */.rr)({
        identifier: post,
        recipients: new Map(target.map((identifier)=>[
                identifier,
                new Date()
            ]
        ))
    }, 'append');
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ./background/services/crypto/comment.ts

// eslint-disable-next-line @dimensiondev/unicode/specific-set
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
    return (0,src/* steganographyEncodeImage */.Mk)(buf, {
        ...options,
        downloadImage: steganographyDownloadImage
    });
}

;// CONCATENATED MODULE: ./background/services/crypto/posts.ts


async function queryPagedPostHistory(persona, options, count) {
    return (await (0,database_post/* queryPostPagedDB */.xN)(persona, options, count)).map(convertPostRecordToPostInformation).filter(esm/* isNonNull */.GT);
}
function convertPostRecordToPostInformation({ recipients , ...x }) {
    if (!x.postBy) return undefined;
    return {
        ...x,
        postBy: x.postBy,
        recipients: recipients === 'everyone' ? 'everyone' : new Set(recipients.keys())
    };
}

// EXTERNAL MODULE: ./background/services/__utils__/convert.ts
var convert = __webpack_require__(34424);
;// CONCATENATED MODULE: ./background/services/crypto/recipients.ts



async function hasRecipientAvailable(whoAmI) {
    const profiles = await (0,db/* queryProfilesDB */.i2)({
        hasLinkedPersona: true,
        network: whoAmI.network
    });
    if (profiles.length === 0) return false;
    if (profiles.length > 1) return true;
    return profiles[0].identifier !== whoAmI;
}
async function getRecipients(whoAmI) {
    const profiles = (await (0,db/* queryProfilesDB */.i2)({
        hasLinkedPersona: true,
        network: whoAmI.network
    })).filter((x)=>x.identifier !== whoAmI && x.linkedPersona
    );
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}
async function getIncompleteRecipientsOfPost(id) {
    const nameInDB = (await (0,database_post/* queryPostDB */.q3)(id))?.recipients;
    if (nameInDB === 'everyone') return [];
    if (!nameInDB) return [];
    const profiles = (await (0,db/* queryProfilesDB */.i2)({
        identifiers: [
            ...nameInDB.keys()
        ],
        hasLinkedPersona: true
    })).filter((x)=>x.linkedPersona
    );
    return (0,convert/* toProfileInformation */.Y)(profiles).mustNotAwaitThisWithInATransaction;
}

;// CONCATENATED MODULE: ./background/services/crypto/index.ts
// Encrypt & decrypt (decryptionWithSocialNetworkDecoding is a generator, not included.)


// Comments

// Steganography





/***/ })

}]);