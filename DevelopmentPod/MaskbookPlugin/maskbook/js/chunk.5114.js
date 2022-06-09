"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5114],{

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

/***/ 45114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptionWithSocialNetworkDecoding": () => (/* reexport safe */ _background_services_crypto_decryption__WEBPACK_IMPORTED_MODULE_0__.D)
/* harmony export */ });
/* harmony import */ var _background_services_crypto_decryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57691);



/***/ })

}]);