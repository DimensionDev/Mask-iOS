"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3803],{

/***/ 9221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gp": () => (/* reexport */ addDashboardI18N)
});

// UNUSED EXPORTS: IntegratedDashboard, setMessages, setPluginMessages, setPluginServices, setService

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (/* unused pure expression or super */ null && (lazy(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(8136), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(4601)]).then(__webpack_require__.bind(__webpack_require__, 34601))
)));
function IntegratedDashboard() {
    return /*#__PURE__*/ _jsx(Suspense, {
        fallback: "",
        children: /*#__PURE__*/ _jsx(Dashboard, {})
    });
}

// EXTERNAL MODULE: ../dashboard/src/locales/en-US.json
var en_US = __webpack_require__(62012);
// EXTERNAL MODULE: ../dashboard/src/locales/ja-JP.json
var ja_JP = __webpack_require__(97979);
// EXTERNAL MODULE: ../dashboard/src/locales/ko-KR.json
var ko_KR = __webpack_require__(75743);
// EXTERNAL MODULE: ../dashboard/src/locales/qya-AA.json
var qya_AA = __webpack_require__(59641);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-CN.json
var zh_CN = __webpack_require__(32284);
// EXTERNAL MODULE: ../dashboard/src/locales/zh-TW.json
var zh_TW = __webpack_require__(39675);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ../dashboard/src/locales/languages.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: en_US,
    ja: ja_JP,
    ko: ko_KR,
    qy: qya_AA,
    'zh-CN': zh_CN,
    zh: zh_TW
};

const addDashboardI18N = (0,src/* createI18NBundle */.C9)('dashboard', languages);
// @ts-ignore
if (false) {}

;// CONCATENATED MODULE: ../dashboard/src/entry.tsx
// This entry is for dashboard used as a package (required by the main extension).
// Should only expose necessary API for setup the Dashboard API correctly.





/***/ }),

/***/ 64287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ appendEncryptionTarget)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _Encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87155);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52639);
/* harmony import */ var _v37_ecdh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21508);
/* harmony import */ var _v38_ecdh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40410);





async function appendEncryptionTarget(options, io) {
    const target = {
        type: 'E2E',
        target: options.target
    };
    const postKeyEncoded = (0,_Encryption__WEBPACK_IMPORTED_MODULE_1__/* .encodePostKey */ .v3)(options.version, options.postAESKey);
    if (options.version === -38) {
        return (0,_v38_ecdh__WEBPACK_IMPORTED_MODULE_4__/* .v38_addReceiver */ .i)(postKeyEncoded, target, io);
    } else if (options.version === -37) {
        const { getEphemeralKey  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createEphemeralKeysMap */ .X)(io);
        return (0,_v37_ecdh__WEBPACK_IMPORTED_MODULE_3__/* .v37_addReceiver */ .m)(false, {
            postKeyEncoded,
            postIV: options.iv,
            getEphemeralKey
        }, target, io);
    }
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(options.version);
}


/***/ }),

/***/ 87155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HI": () => (/* binding */ encrypt),
/* harmony export */   "v3": () => (/* binding */ encodePostKey)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80681);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48160);
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91743);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53908);
/* harmony import */ var _EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79585);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52639);
/* harmony import */ var _v37_ecdh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21508);
/* harmony import */ var _v38_ecdh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40410);











async function encrypt(options, io) {
    const postIV = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .fillIV */ .i)(io);
    const postKey = await aes256GCM(io);
    if (!postKey.usages.includes('encrypt') || !postKey.usages.includes('decrypt') || !postKey.extractable) {
        throw new _EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptError */ .x(_EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptErrorReasons.AESKeyUsageError */ .U.AESKeyUsageError);
    }
    const authorPublic = queryAuthorPublicKey(options.author || null, io);
    const encodedMessage = encodeMessage(options.version, options.message);
    const encryptedMessage = encodedMessage.then((message)=>(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .encryptWithAES */ .l_)(postKey, postIV, message)
    ).then((x)=>x.unwrap()
    );
    let encryption;
    let ecdhResult;
    if (options.target.type === 'public') {
        encryption = {
            iv: postIV,
            type: 'public',
            AESKey: postKey
        };
    } else {
        const postKeyEncoded = encodePostKey(options.version, postKey);
        const context = {
            authorPublic,
            postKeyEncoded,
            postIV
        };
        if (options.version === -38) [encryption, ecdhResult] = await e2e_v38(context, options.target, io);
        else if (options.version === -37) [encryption, ecdhResult] = await e2e_v37(context, options.target, io);
        else (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(options.version);
    }
    const payload = _payload__WEBPACK_IMPORTED_MODULE_4__/* .encodePayload.NoSign */ .V1.NoSign({
        version: options.version,
        author: options.author ? (0,ts_results__WEBPACK_IMPORTED_MODULE_3__/* .Some */ .bD)(options.author) : ts_results__WEBPACK_IMPORTED_MODULE_3__/* .None */ .Hq,
        authorPublicKey: await authorPublic,
        encryption,
        encrypted: await encryptedMessage,
        signature: ts_results__WEBPACK_IMPORTED_MODULE_3__/* .None */ .Hq
    }).then((x)=>x.unwrap()
    );
    return {
        author: options.author,
        identifier: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PostIVIdentifier */ .bb(options.network, (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV)),
        postKey,
        output: await payload,
        e2e: ecdhResult
    };
}
/** @internal */ async function encodePostKey(version, key) {
    if (version === -37) return crypto.subtle.exportKey('raw', key).then((x)=>new Uint8Array(x)
    );
    else if (version === -38) return crypto.subtle.exportKey('jwk', key).then(JSON.stringify).then((x)=>new TextEncoder().encode(x)
    );
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(version);
}
async function e2e_v37(context, target, io) {
    const { authorPublic , postIV , postKeyEncoded  } = context;
    const authorPublicKey = await authorPublic;
    if (!authorPublicKey.some) throw new _EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptError */ .x(_EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptErrorReasons.PublicKeyNotFound */ .U.PublicKeyNotFound);
    const { ephemeralKeys , getEphemeralKey  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .createEphemeralKeysMap */ .X)(io);
    const ecdhResult = (0,_v37_ecdh__WEBPACK_IMPORTED_MODULE_8__/* .v37_addReceiver */ .m)(true, {
        ...context,
        getEphemeralKey
    }, target, io);
    const ownersAESKeyEncrypted = Promise.resolve().then(async ()=>{
        const [, ephemeralPrivateKey] = await getEphemeralKey(authorPublicKey.val.algr);
        // we get rid of localKey in v38
        const aes = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: authorPublicKey.val.key
        }, ephemeralPrivateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt'
        ]);
        // Note: we're reusing iv in the post encryption.
        const encryptedPostKey = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .encryptWithAES */ .l_)(aes, postIV, await postKeyEncoded);
        return encryptedPostKey.unwrap();
    });
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: new Map(),
        iv: postIV,
        ownersAESKeyEncrypted: await ownersAESKeyEncrypted
    };
    // wait ecdh to finish write ephemeralKeys
    await ecdhResult;
    for (const [curve, keys] of ephemeralKeys){
        encryption.ephemeralPublicKey.set(curve, (await keys)[0]);
    }
    return [
        encryption,
        await ecdhResult
    ];
}
async function e2e_v38(context, target, io) {
    const { postIV , postKeyEncoded  } = context;
    const ecdhResult = await (0,_v38_ecdh__WEBPACK_IMPORTED_MODULE_9__/* .v38_addReceiver */ .i)(postKeyEncoded, target, io);
    const encryption = {
        type: 'E2E',
        // v38 does not support ephemeral encryption.
        ephemeralPublicKey: new Map(),
        iv: postIV,
        ownersAESKeyEncrypted: await io.encryptByLocalKey(await postKeyEncoded, postIV)
    };
    return [
        encryption,
        ecdhResult
    ];
}
async function encodeMessage(version, message) {
    if (version === -37) return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__/* .encodeTypedMessageToDocument */ .F9)(message);
    if (!(0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageText */ .Rz)(message)) throw new _EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptError */ .x(_EncryptionTypes__WEBPACK_IMPORTED_MODULE_6__/* .EncryptErrorReasons.ComplexTypedMessageNotSupportedInPayload38 */ .U.ComplexTypedMessageNotSupportedInPayload38);
    return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_2__/* .encodeTypedMessageV38Format */ .Hu)(message);
}
async function queryAuthorPublicKey(of, io) {
    try {
        if (!of) return ts_results__WEBPACK_IMPORTED_MODULE_3__/* .None */ .Hq;
        const key = await io.queryPublicKey(of);
        if (!key) return ts_results__WEBPACK_IMPORTED_MODULE_3__/* .None */ .Hq;
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_3__/* .Some */ .bD)(key);
    } catch (error) {
        console.warn('[@masknet/encryption] Failed when query author public key', error);
        return ts_results__WEBPACK_IMPORTED_MODULE_3__/* .None */ .Hq;
    }
}
async function aes256GCM(io) {
    if (io.getRandomAESKey) return io.getRandomAESKey();
    return await crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt', 
    ]);
}


/***/ }),

/***/ 79585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ EncryptErrorReasons),
/* harmony export */   "x": () => (/* binding */ EncryptError)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

var EncryptErrorReasons;
(function(EncryptErrorReasons) {
    EncryptErrorReasons["ComplexTypedMessageNotSupportedInPayload38"] = '[@masknet/encryption] Complex TypedMessage is not supported in payload v38.';
    EncryptErrorReasons["PublicKeyNotFound"] = '[@masknet/encryption] Target public key not found.';
    EncryptErrorReasons["AESKeyUsageError"] = "[@masknet/encryption] AES key generated by IO doesn't have the correct usages or extractable property.";
})(EncryptErrorReasons || (EncryptErrorReasons = {}));
class EncryptError extends Error {
    constructor(message, cause){
        super(message, {
            cause
        });
        this.message = message;
    }
}
EncryptError.Reasons = EncryptErrorReasons;
(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .registerSerializableClass */ .tr)('MaskEncryptError', (x)=>x instanceof EncryptError
, (e)=>({
        cause: e.cause,
        message: e.message,
        stack: e.stack
    })
, (o)=>{
    const e = new EncryptError(o.message, o.cause);
    e.stack = o.stack;
    return e;
});


/***/ }),

/***/ 60119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G6": () => (/* reexport */ DecryptionTypes/* DecryptError */.G6),
  "OF": () => (/* reexport */ DecryptionTypes/* DecryptErrorReasons */.OF),
  "gO": () => (/* reexport */ DecryptionTypes/* DecryptIntermediateProgressKind */.gO),
  "Pj": () => (/* reexport */ DecryptionTypes/* DecryptProgressKind */.Pj),
  "cV": () => (/* reexport */ AppendEncryption/* appendEncryptionTarget */.c),
  "pe": () => (/* reexport */ decrypt),
  "HI": () => (/* reexport */ Encryption/* encrypt */.HI)
});

// UNUSED EXPORTS: EncryptError, EncryptErrorReasons, encodePostKey

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var ts_results_esm = __webpack_require__(48160);
// EXTERNAL MODULE: ../encryption/src/utils/index.ts + 1 modules
var utils = __webpack_require__(53908);
// EXTERNAL MODULE: ../encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(59182);
// EXTERNAL MODULE: ../encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(40410);
;// CONCATENATED MODULE: ../encryption/src/encryption/Decryption.ts








const ErrorReasons = DecryptionTypes/* DecryptError.Reasons */.G6.Reasons;
async function* decrypt(options, io) {
    const { author: _author , encrypted: _encrypted , encryption: _encryption , version  } = options.message;
    const { authorPublicKey: _authorPublicKey  } = options.message;
    if (_encryption.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encryption.val);
    if (_encrypted.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encrypted.val);
    const encryption = _encryption.val;
    const encrypted = _encrypted.val;
    // ! try decrypt by cache
    {
        const cacheKey = await io.getPostKeyCache().catch(()=>null
        );
        const iv = encryption.iv.unwrapOr(null);
        if (cacheKey && iv) return yield* decryptWithPostAESKey(version, cacheKey, iv, encrypted, options.onDecrypted);
    }
    if (encryption.type === 'public') {
        const { AESKey , iv  } = encryption;
        if (AESKey.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, AESKey.val);
        if (iv.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, iv.val);
        // Not calling setPostCache here. It's public post and saving key is wasting storage space.
        return yield* decryptWithPostAESKey(version, AESKey.val, iv.val, encrypted, options.onDecrypted);
    } else if (encryption.type === 'E2E') {
        const { iv: _iv , ownersAESKeyEncrypted  } = encryption;
        if (_iv.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _iv.val);
        const iv = _iv.val;
        const author = _author.unwrapOr(ts_results_esm/* None */.Hq);
        // #region // ! decrypt by local key. This only happens in v38 or older.
        if (options.message.version <= -38) {
            const hasAuthorLocalKey = author.some ? io.hasLocalKeyOf(author.val).catch(()=>false
            ) : Promise.resolve(false);
            if (ownersAESKeyEncrypted.ok) {
                try {
                    const aes_raw = await io.decryptByLocalKey(author.unwrapOr(null), ownersAESKeyEncrypted.val, iv);
                    const aes = await importAESKeyFromJWKFromTextEncoder(aes_raw);
                    io.setPostKeyCache(aes.unwrap()).catch(()=>{});
                    return yield* decryptWithPostAESKey(version, aes.unwrap(), iv, encrypted, options.onDecrypted);
                } catch (err) {
                    if (await hasAuthorLocalKey) {
                        // If we fall into this branch, it means we failed to decrypt as author.
                        // Since we will not ECDHE to myself when encrypting,
                        // it does not make sense to try the following steps (because it will never have a result).
                        return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, err);
                    }
                // fall through
                }
            } else {
                if (await hasAuthorLocalKey) {
                    // If the ownersAESKeyEncrypted is corrupted and we're the author, we cannot do anything to continue.
                    return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, ownersAESKeyEncrypted.val);
                }
            // fall through
            }
        }
        // #endregion
        // #region // ! decrypt by ECDH
        const authorPublicKey = _authorPublicKey.unwrapOr(ts_results_esm/* None */.Hq);
        yield progress(DecryptionTypes/* DecryptProgressKind.Progress */.Pj.Progress, {
            event: DecryptionTypes/* DecryptIntermediateProgressKind.TryDecryptByE2E */.gO.TryDecryptByE2E
        });
        if (version === -37) {
            return yield* v37ECDHE(io, encryption, encrypted, options.signal, options.onDecrypted);
        } else {
            // Static ECDH
            // to do static ECDH, we need to have the authors public key first. bail if not found.
            const authorECPub = await ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
                if (authorPublicKey.some) return authorPublicKey.val.key;
                return io.queryAuthorPublicKey(author.unwrapOr(null), options.signal);
            });
            if (authorECPub.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, authorECPub.val);
            if (!authorECPub.val) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, undefined);
            return yield* v38To40StaticECDH(version, io, authorECPub.val, iv, encrypted, options.signal, options.onDecrypted);
        }
    // #endregion
    }
    (0,esm/* unreachable */.t1)(encryption);
}
async function* v37ECDHE(io, encryption, encrypted, signal, report) {
    // checked before
    const iv = encryption.iv.unwrap();
    // for each inlinedECDHE pub, derive a set of AES key.
    const inlinedECDHE_derived = Promise.all(Object.values(encryption.ephemeralPublicKey).map((x)=>x.unwrapOr(null)
    ).filter(Boolean).map((x)=>io.deriveAESKey(x.key)
    )).then((x)=>x.flat()
    );
    async function* postKey() {
        if (encryption.ownersAESKeyEncrypted.ok) {
            const key = {
                encryptedPostKey: encryption.ownersAESKeyEncrypted.val,
                postKeyIV: iv
            };
            yield key;
        }
        yield* io.queryPostKey_version37(iv, signal);
    }
    const ecdh = {
        type: 'ephemeral',
        derive: (key)=>key ? io.deriveAESKey(key) : inlinedECDHE_derived
    };
    return yield* decryptByECDH(-37, io, postKey(), ecdh, importAESKeyFromRaw, iv, encrypted, report);
}
async function* v38To40StaticECDH(version, io, authorECPub, iv1, encrypted, signal, report) {
    const postKey = ({
        async *'-40' (iv) {
            const val = await io.queryPostKey_version40(iv);
            if (val) yield val;
        },
        '-39': io.queryPostKey_version39,
        '-38': io.queryPostKey_version38
    })[version](iv1, signal);
    const ecdh = {
        type: 'static-v38-or-older',
        derive: (postKeyIV)=>(0,v38_ecdh/* deriveAESByECDH_version38OrOlderExtraSteps */.D)(io.deriveAESKey, authorECPub, postKeyIV)
    };
    return yield* decryptByECDH(version, io, postKey, ecdh, importAESKeyFromJWKFromTextEncoder, iv1, encrypted, report);
}
async function* decryptByECDH(version, io, possiblePostKeyIterator, ecdhProvider, postKeyDecoder, iv, encrypted, report) {
    const { derive , type  } = ecdhProvider;
    for await (const _ of possiblePostKeyIterator){
        const { encryptedPostKey , postKeyIV , ephemeralPublicKey  } = _;
        // TODO: how to deal with signature?
        // TODO: what to do if provider throws?
        const derivedKeys = type === 'static-v38-or-older' ? await derive(postKeyIV || iv) : await derive(ephemeralPublicKey).then((aesArr)=>aesArr.map((aes)=>[
                    aes,
                    iv
                ]
            )
        );
        for (const [derivedKey, derivedKeyNewIV] of derivedKeys){
            const possiblePostKey = await (0,src/* andThenAsync */.ps)((0,utils/* decryptWithAES */.PB)(derivedKey, derivedKeyNewIV, encryptedPostKey), postKeyDecoder);
            if (possiblePostKey.err) continue;
            const decrypted = await (0,utils/* decryptWithAES */.PB)(possiblePostKey.val, iv, encrypted);
            if (decrypted.err) continue;
            io.setPostKeyCache(possiblePostKey.val).catch(()=>{});
            // If we'd able to decrypt the raw message, we will stop here.
            // because try further key cannot resolve the problem of parseTypedMessage failed.
            return yield* parseTypedMessage(version, decrypted.val, report);
        }
    }
    return void (yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.NotShareTarget, undefined));
}
async function* decryptWithPostAESKey(version, postAESKey, iv, encrypted, report) {
    const { err , val  } = await (0,utils/* decryptWithAES */.PB)(postAESKey, iv, encrypted);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.DecryptFailed, val);
    return yield* parseTypedMessage(version, val, report);
}
async function* parseTypedMessage(version, raw, report) {
    const { err , val  } = version === -37 ? (0,base/* decodeTypedMessageFromDocument */.Ab)(raw) : (0,base/* decodeTypedMessageV38ToV40Format */.WR)(raw, version);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadDecryptedButTypedMessageBroken, val);
    try {
        report?.(val);
    } catch  {}
    return yield progress(DecryptionTypes/* DecryptProgressKind.Success */.Pj.Success, {
        content: val
    });
}
// uint8 |> TextDecoder |> JSON.parse |> importAESKeyFromJWK
function importAESKeyFromJWKFromTextEncoder(aes_raw) {
    return ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        const aes_text = new TextDecoder().decode(aes_raw);
        const aes_jwk = JSON.parse(aes_text);
        if (!aes_jwk.key_ops.includes('decrypt')) aes_jwk.key_ops.push('decrypt');
        return (await (0,utils/* importAES */.yj)(aes_jwk)).unwrap();
    });
}
function importAESKeyFromRaw(aes_raw) {
    return ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        return crypto.subtle.importKey('raw', aes_raw, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'decrypt', 
        ]);
    });
}
function progress(kind, rest) {
    return {
        type: kind,
        ...rest
    };
}

// EXTERNAL MODULE: ../encryption/src/encryption/Encryption.ts
var Encryption = __webpack_require__(87155);
// EXTERNAL MODULE: ../encryption/src/encryption/AppendEncryption.ts
var AppendEncryption = __webpack_require__(64287);
;// CONCATENATED MODULE: ../encryption/src/encryption/index.ts





/***/ }),

/***/ 52639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ createEphemeralKeysMap),
/* harmony export */   "i": () => (/* binding */ fillIV)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91743);

/** @internal */ function createEphemeralKeysMap(io) {
    const ephemeralKeys = new Map();
    // get ephemeral keys, generate one if not found
    async function getEphemeralKey(curve) {
        if (ephemeralKeys.has(curve)) return ephemeralKeys.get(curve);
        ephemeralKeys.set(curve, generateEC_KeyPair(io, curve));
        return ephemeralKeys.get(curve);
    }
    return {
        ephemeralKeys,
        getEphemeralKey
    };
}
/** @internal */ function fillIV(io) {
    if (io.getRandomValues) return io.getRandomValues(new Uint8Array(16));
    return crypto.getRandomValues(new Uint8Array(16));
}
async function generateEC_KeyPair(io, kind) {
    if (io.getRandomECKey) return io.getRandomECKey(kind);
    const namedCurve = {
        [_payload__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurveEnum.secp256p1 */ .qx.secp256p1]: 'P-256',
        [_payload__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1]: 'K-256',
        get [_payload__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurveEnum.ed25519 */ .qx.ed25519] () {
            throw new Error('TODO: support ED25519');
        }
    };
    const { privateKey , publicKey  } = await crypto.subtle.generateKey({
        name: 'ECDH',
        namedCurve: namedCurve[kind]
    }, true, [
        'deriveKey'
    ]);
    return [
        publicKey,
        privateKey
    ];
}


/***/ }),

/***/ 21508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ v37_addReceiver)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53908);
/* harmony import */ var _EncryptionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79585);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52639);



/** @internal */ async function v37_addReceiver(firstTime, context, target, io) {
    const { getEphemeralKey , postIV , postKeyEncoded  } = context;
    const ecdh = Promise.allSettled(target.target.map(async (id)=>{
        const iv = postIV || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .fillIV */ .i)(io);
        const receiverPublicKey = await io.queryPublicKey(id);
        if (!receiverPublicKey) throw new _EncryptionTypes__WEBPACK_IMPORTED_MODULE_1__/* .EncryptError */ .x(_EncryptionTypes__WEBPACK_IMPORTED_MODULE_1__/* .EncryptErrorReasons.PublicKeyNotFound */ .U.PublicKeyNotFound);
        const [ephemeralPublicKey, ephemeralPrivateKey] = await getEphemeralKey(receiverPublicKey.algr);
        const aes = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: receiverPublicKey.key
        }, ephemeralPrivateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt'
        ]);
        // Note: we're reusing iv in the post encryption.
        const encryptedPostKey = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .encryptWithAES */ .l_)(aes, iv, await postKeyEncoded);
        const result = {
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: id
        };
        if (!firstTime) result.ephemeralPublicKey = ephemeralPublicKey;
        return result;
    })).then((x)=>x.entries()
    );
    const ecdhResult = new Map();
    for (const [index, result1] of (await ecdh)){
        ecdhResult.set(target.target[index], result1);
    }
    return ecdhResult;
}


/***/ }),

/***/ 40410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ deriveAESByECDH_version38OrOlderExtraSteps),
/* harmony export */   "i": () => (/* binding */ v38_addReceiver)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53908);
/* harmony import */ var _EncryptionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79585);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52639);




const KEY = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('KEY');
const IV = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('IV');
/**
 * Derive a group of AES key for ECDH.
 *
 * !! For the compatibility, you should refer to the original implementation:
 *
 * !! https://github.com/DimensionDev/Maskbook/blob/f3d83713d60dd0aad462e0648c4d38586c106edc/packages/mask/src/crypto/crypto-alpha-40.ts#L29-L58
 *
 * @internal
 */ async function deriveAESByECDH_version38OrOlderExtraSteps(deriveAESByECDH, pub, iv) {
    const deriveResult = await deriveAESByECDH(pub);
    const extraSteps = deriveResult.map(async (key)=>{
        const derivedKeyRaw = await crypto.subtle.exportKey('raw', key);
        const _a = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(derivedKeyRaw, iv);
        const nextAESKeyMaterial = await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(_a, iv, KEY));
        const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(_a, iv, IV)));
        const nextIV = new Uint8Array(16);
        for(let i = 0; i <= 16; i += 1){
            // eslint-disable-next-line no-bitwise
            nextIV[i] = iv_pre[i] ^ iv_pre[16 + i];
        }
        const nextAESKey = await crypto.subtle.importKey('raw', nextAESKeyMaterial, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return [
            nextAESKey,
            nextIV
        ];
    });
    return Promise.all(extraSteps);
}
/** @internal */ async function v38_addReceiver(postKeyEncoded, target, io) {
    // For every receiver R,
    //     1. Let R_pub = R.publicKey
    //     2. Let Internal_AES be the result of ECDH with the sender's private key and R_pub
    //     Note: To keep compatibility, here we use the algorithm in
    //     https://github.com/DimensionDev/Maskbook/blob/f3d83713d60dd0aad462e0648c4d38586c106edc/packages/mask/src/crypto/crypto-alpha-40.ts#L29-L58
    //     3. Let ivToBePublish be a new generated IV. This should be sent to the receiver.
    //     4. Calculate new AES key and IV based on Internal_AES and ivToBePublish.
    //     Note: Internal_AES is not returned by io.deriveAESKey_version38_or_older, it is internal algorithm of that method.
    const ecdh = Promise.allSettled(target.target.map(async (id)=>{
        const receiverPublicKey = await io.queryPublicKey(id);
        if (!receiverPublicKey) throw new _EncryptionTypes__WEBPACK_IMPORTED_MODULE_2__/* .EncryptError */ .x(_EncryptionTypes__WEBPACK_IMPORTED_MODULE_2__/* .EncryptErrorReasons.PublicKeyNotFound */ .U.PublicKeyNotFound);
        const ivToBePublished = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .fillIV */ .i)(io);
        const [[aes, iv]] = await deriveAESByECDH_version38OrOlderExtraSteps(async (e)=>[
                await io.deriveAESKey(e)
            ]
        , receiverPublicKey.key, ivToBePublished);
        const encryptedPostKey = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .encryptWithAES */ .l_)(aes, iv, await postKeyEncoded);
        return {
            ivToBePublished,
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: id
        };
    })).then((x)=>x.entries()
    );
    const ecdhResult = new Map();
    for (const [index, result] of (await ecdh)){
        ecdhResult.set(target.target[index], result);
    }
    return ecdhResult;
}


/***/ }),

/***/ 27420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ft": () => (/* reexport safe */ _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__.GrayscaleAlgorithm),
/* harmony export */   "Mk": () => (/* binding */ steganographyEncodeImage),
/* harmony export */   "oX": () => (/* binding */ steganographyDecodeImage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85909);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84140);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50710);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96596);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58953);






const dimensionPreset = [
    {
        deprecated: 'legacy post',
        width: 1024,
        height: 1240,
        mask: new URL(/* asset import */ __webpack_require__(93855), __webpack_require__.b).toString()
    },
    {
        width: 1200,
        height: 681,
        template: 'v2',
        mask: new URL(/* asset import */ __webpack_require__(23689), __webpack_require__.b).toString()
    },
    {
        width: 1200,
        height: 680,
        template: 'eth',
        mask: new URL(/* asset import */ __webpack_require__(80183), __webpack_require__.b).toString(),
        options: {
            cropEdgePixels: true
        }
    },
    {
        deprecated: 'event election 2020',
        width: 1000,
        height: 558,
        mask: new URL(/* asset import */ __webpack_require__(80183), __webpack_require__.b).toString()
    },
    {
        deprecated: 'old NFT',
        width: 1000,
        height: 560,
        mask: new URL(/* asset import */ __webpack_require__(84037), __webpack_require__.b).toString()
    }, 
];
const defaultOptions = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 128,
    exhaustPixels: true,
    cropEdgePixels: false,
    fakeMaskPixels: false,
    grayscaleAlgorithm: _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__.GrayscaleAlgorithm.NONE,
    transformAlgorithm: _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__.TransformAlgorithm.FFT1D
};
const isSameDimension = (dimension, otherDimension)=>dimension.width === otherDimension.width && dimension.height === otherDimension.height
;
async function steganographyEncodeImage(buf, options) {
    const { template , downloadImage  } = options;
    const preset = dimensionPreset.find((d)=>d.template && d.template === template
    );
    if (!preset) throw new Error('Failed to find preset.');
    return new Uint8Array(await (0,_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__.encode)(buf, await downloadImage(preset.mask), {
        ...defaultOptions,
        ...preset?.options,
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(options, 'template')
    }));
}
async function inner(buf, options) {
    const dimension = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getDimension */ .F)(buf);
    const preset = dimensionPreset.find((d)=>isSameDimension(d, dimension)
    );
    if (!preset) return '';
    return (0,_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__.decode)(buf, await options.downloadImage(preset.mask), {
        ...defaultOptions,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__.TransformAlgorithm.FFT1D,
        ...options
    });
}
async function steganographyDecodeImage(image, options) {
    return inner(typeof image === 'string' ? await options.downloadImage(image) : await image.arrayBuffer(), options);
}


/***/ }),

/***/ 58953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getDimension)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4023);
/* eslint-disable no-bitwise */ 
/** @internal */ function getDimension(buf) {
    const fallback = {
        width: 0,
        height: 0
    };
    switch((0,_dimensiondev_stego_js_cjs_helper_js__WEBPACK_IMPORTED_MODULE_0__.imgType)(new Uint8Array(buf))){
        case 'image/jpeg':
            return getDimensionAsJPEG(buf) ?? fallback;
        case 'image/png':
            return getDimensionAsPNG(buf);
        default:
            return fallback;
    }
}
function getDimensionAsPNG(buf) {
    const dataView = new DataView(buf, 0, 28);
    return {
        width: dataView.getInt32(16),
        height: dataView.getInt32(20)
    };
}
/**
 * Get dimension of a JPEG image
 *
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */ function getDimensionAsJPEG(buf) {
    const dataView = new DataView(buf);
    let i = 0;
    if (dataView.getUint8(i) === 0xff && dataView.getUint8(i + 1) === 0xd8 && dataView.getUint8(i + 2) === 0xff && dataView.getUint8(i + 3) === 0xe0 // APP0 marker
    ) {
        i += 4;
        if (dataView.getUint8(i + 2) === 'J'.charCodeAt(0) && dataView.getUint8(i + 3) === 'F'.charCodeAt(0) && dataView.getUint8(i + 4) === 'I'.charCodeAt(0) && dataView.getUint8(i + 5) === 'F'.charCodeAt(0) && dataView.getUint8(i + 6) === 0x00) {
            let block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
            while(i < dataView.byteLength){
                i += block_length;
                if (i >= dataView.byteLength) return;
                if (dataView.getUint8(i) !== 0xff) return;
                if (dataView.getUint8(i + 1) === 0xc0 || dataView.getUint8(i + 1) === 0xc2 // SOF2 marker
                ) {
                    return {
                        height: dataView.getUint8(i + 5) * 256 + dataView.getUint8(i + 6),
                        width: dataView.getUint8(i + 7) * 256 + dataView.getUint8(i + 8)
                    };
                } else {
                    i += 2;
                    block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
                }
            }
        }
    }
    return;
}


/***/ }),

/***/ 80326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gq": () => (/* binding */ SocialNetworkEnum),
/* harmony export */   "VC": () => (/* binding */ SocialNetworkEnumToProfileDomain),
/* harmony export */   "qx": () => (/* binding */ EC_KeyCurveEnum)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
// This file contains normalized Payload.
// Internal payload should not be exported

var EC_KeyCurveEnum;
(function(EC_KeyCurveEnum) {
    EC_KeyCurveEnum[EC_KeyCurveEnum["ed25519"] = 0] = "ed25519";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256p1"] = 1] = "secp256p1";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256k1"] = 2] = "secp256k1";
})(EC_KeyCurveEnum || (EC_KeyCurveEnum = {}));
var SocialNetworkEnum;
(function(SocialNetworkEnum) {
    SocialNetworkEnum[SocialNetworkEnum["Unknown"] = -1] = "Unknown";
    SocialNetworkEnum[SocialNetworkEnum["Facebook"] = 0] = "Facebook";
    SocialNetworkEnum[SocialNetworkEnum["Twitter"] = 1] = "Twitter";
    SocialNetworkEnum[SocialNetworkEnum["Instagram"] = 2] = "Instagram";
    SocialNetworkEnum[SocialNetworkEnum["Minds"] = 3] = "Minds";
})(SocialNetworkEnum || (SocialNetworkEnum = {}));
const SocialNetworkEnumToDomain = {
    [SocialNetworkEnum.Unknown]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
    [SocialNetworkEnum.Facebook]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Facebook */ .Jk.Facebook,
    [SocialNetworkEnum.Minds]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .Jk.Minds,
    [SocialNetworkEnum.Twitter]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Twitter */ .Jk.Twitter,
    [SocialNetworkEnum.Instagram]: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Instagram */ .Jk.Instagram
};
function SocialNetworkEnumToProfileDomain(x) {
    return SocialNetworkEnumToDomain[x];
}


/***/ }),

/***/ 39613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ encodeSignatureContainer),
/* harmony export */   "z": () => (/* binding */ parseSignatureContainer)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30181);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);




var SignaturePayloadFirstByte;
(function(SignaturePayloadFirstByte) {
    SignaturePayloadFirstByte[SignaturePayloadFirstByte["NoSignature"] = 0] = "NoSignature";
    SignaturePayloadFirstByte[SignaturePayloadFirstByte["Signature"] = 1] = "Signature";
})(SignaturePayloadFirstByte || (SignaturePayloadFirstByte = {}));
function encodeSignatureContainer(payload, signature) {
    if (signature) return new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .concatArrayBuffer */ .v_)(new Uint8Array([
        1
    ]), signature, payload));
    return new Uint8Array((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .concatArrayBuffer */ .v_)(new Uint8Array([
        0
    ]), payload));
}
function parseSignatureContainer(signatureContainer) {
    if (signatureContainer[0] === 0) {
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)({
            payload: signatureContainer.slice(1),
            signature: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .OptionalResult.None */ .E.None
        });
    } else if (signatureContainer[0] === 1) {
        const signature = signatureContainer.slice(1, 33);
        const payload = signatureContainer.slice(33);
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)({
            payload,
            signature: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .OptionalResult.Some */ .E.Some({
                signature,
                signee: payload
            })
        });
    } else return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, 'Invalid signature container').toErr();
}


/***/ }),

/***/ 21198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ parseAuthor),
/* harmony export */   "w": () => (/* binding */ get_v38PublicSharedCryptoKey)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91743);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30181);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53908);





const import_AES_GCM_256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importAES */ .yj, _types__WEBPACK_IMPORTED_MODULE_3__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
/**
 * @internal
 * In payload version 38, the AES key is encrypted by this key.
 */ const v38PublicSharedJwk = {
    alg: 'A256GCM',
    ext: true,
    /* cspell:disable-next-line */ k: '3Bf8BJ3ZPSMUM2jg2ThODeLuRRD_-_iwQEaeLdcQXpg',
    key_ops: [
        'encrypt',
        'decrypt'
    ],
    kty: 'oct'
};
let v38PublicSharedCryptoKey;
async function get_v38PublicSharedCryptoKey() {
    if (v38PublicSharedCryptoKey) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(v38PublicSharedCryptoKey);
    const imported = await import_AES_GCM_256(v38PublicSharedJwk);
    if (imported.err) return imported;
    v38PublicSharedCryptoKey = imported.val;
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(v38PublicSharedCryptoKey);
}
function parseAuthor(network, id) {
    if (network === null || network === undefined) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.None */ .E.None;
    if (id === '' || id === null || id === undefined) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.None */ .E.None;
    if (typeof id !== 'string') return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_3__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, 'Invalid user id').toErr();
    let net = '';
    if (network === _payload__WEBPACK_IMPORTED_MODULE_2__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook) net = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Facebook */ .Jk.Facebook;
    else if (network === _payload__WEBPACK_IMPORTED_MODULE_2__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter) net = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Twitter */ .Jk.Twitter;
    else if (network === _payload__WEBPACK_IMPORTED_MODULE_2__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram) net = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Instagram */ .Jk.Instagram;
    else if (network === _payload__WEBPACK_IMPORTED_MODULE_2__/* .SocialNetworkEnum.Minds */ .Gq.Minds) net = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .Jk.Minds;
    else if (typeof network === 'string') net = network;
    else if (typeof network !== 'number') return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_3__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, 'Invalid network').toErr();
    else return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_3__/* .PayloadException.UnknownEnumMember */ .T6.UnknownEnumMember, 'unknown network').toErr();
    if (net.includes('/')) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_3__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, 'Invalid network').toErr();
    const identifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.of */ .WO.of(net, id);
    if (identifier.some) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.Some */ .E.Some(identifier.val);
    return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.None */ .E.None;
}


/***/ }),

/***/ 83363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ parse37)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30181);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48160);
/* harmony import */ var _payload_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80326);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53908);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _SignatureContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39613);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21198);








// ? Payload format: (binary format)
// ? See: docs/rfc/000-Payload-37.md
const decode = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .decodeMessagePackF */ .mw)(_types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed);
const InvalidPayload = (msg)=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, msg).toErr()
;
const importAES256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importAES */ .yj, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
const importEC = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importEC_Key */ .OT, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
async function parse37(input) {
    const signatureContainer = (0,_SignatureContainer__WEBPACK_IMPORTED_MODULE_6__/* .parseSignatureContainer */ .z)(input);
    if (signatureContainer.err) return signatureContainer;
    const { payload , signature  } = signatureContainer.val;
    return parsePayload37(payload, signature);
}
function parsePayload37(payload, signature) {
    const _ = decode(payload).andThen((0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertArray */ .Wr)('Payload', _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload));
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .andThenAsync */ .ps)(_, async (item)=>{
        const [version, authorNetwork, authorID, authorPublicKeyAlg, authorPublicKey, encryption, data] = item;
        // 0 in payload means -37, 1 means -36, ...etc
        if (version !== 0) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.UnknownVersion */ .T6.UnknownVersion, null).toErr();
        const normalized = {
            version: -37,
            author: (0,_shared__WEBPACK_IMPORTED_MODULE_7__/* .parseAuthor */ .P)(authorNetwork, authorID),
            authorPublicKey: authorPublicKey ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .OptionalResult.fromResult */ .E.fromResult(await importAsymmetryKey(authorPublicKeyAlg, authorPublicKey, 'authorPublicKey')) : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .OptionalResult.None */ .E.None,
            encryption: await parseEncryption(encryption),
            encrypted: (0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(data, 'encrypted', _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload),
            signature
        };
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)(normalized);
    });
}
async function parseEncryption(encryption) {
    if (!Array.isArray(encryption)) return InvalidPayload('Invalid encryption');
    const kind = encryption[0];
    if (kind === EncryptionKind.PeerToPeer) {
        const [, ownersAESKeyEncrypted, iv, authorEphemeralPublicKeys] = encryption;
        const e = {
            type: 'E2E',
            iv: (0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(iv, 'iv', _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload).andThen(_utils__WEBPACK_IMPORTED_MODULE_4__/* .assertIVLengthEq16 */ .R_),
            ownersAESKeyEncrypted: (0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(ownersAESKeyEncrypted, 'ownersAESKeyEncrypted', _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload),
            ephemeralPublicKey: await parseAuthorEphemeralPublicKeys(authorEphemeralPublicKeys)
        };
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)(e);
    } else if (kind === EncryptionKind.Public) {
        const [, AESKey, iv] = encryption;
        const e = {
            type: 'public',
            iv: (0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(iv, 'iv', _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload).andThen(_utils__WEBPACK_IMPORTED_MODULE_4__/* .assertIVLengthEq16 */ .R_),
            AESKey: await parseAES(AESKey)
        };
        return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)(e);
    } else {
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .safeUnreachable */ .P)(kind);
    }
    return InvalidPayload('Invalid encryption');
    async function parseAuthorEphemeralPublicKeys(item) {
        if (typeof item !== 'object' || item === null) return {};
        return Object.fromEntries(await Promise.all(Object.entries(item).map(parseAuthorEphemeralPublicKey)));
    }
    async function parseAuthorEphemeralPublicKey([key, value]) {
        const isEnumLike = Number.parseInt(key.toString(), 10);
        if (!Number.isNaN(isEnumLike)) key = isEnumLike;
        const result = await importAsymmetryKey(key, value, 'authorEphemeralPublicKey');
        return [
            key,
            result
        ];
    }
}
async function parseAES(aes) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .andThenAsync */ .ps)((0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(aes, 'aes', _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey), importAES256);
}
function importAsymmetryKey(algr, key1, name) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .andThenAsync */ .ps)((0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(key1, name, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey), async (pubKey)=>{
        if (typeof algr === 'number') {
            if (algr in _payload_types__WEBPACK_IMPORTED_MODULE_3__/* .EC_KeyCurveEnum */ .qx) {
                if (algr === _payload_types__WEBPACK_IMPORTED_MODULE_3__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1) {
                    pubKey = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1KeyRaw */ .Yj)(pubKey);
                }
                const key = await importEC(pubKey, algr);
                if (key.err) return key;
                return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)({
                    algr,
                    key: key.val
                });
            }
        }
        return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.UnsupportedAlgorithm */ .H3.UnsupportedAlgorithm, null).toErr();
    });
}
var EncryptionKind;
(function(EncryptionKind) {
    EncryptionKind[EncryptionKind["Public"] = 0] = "Public";
    EncryptionKind[EncryptionKind["PeerToPeer"] = 1] = "PeerToPeer";
})(EncryptionKind || (EncryptionKind = {}));


/***/ }),

/***/ 64759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ parse38)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91743);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30181);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48160);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53908);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21198);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44451);
/* eslint @dimensiondev/unicode/specific-set: ["error", { "only": "code" }] */ 






const decodeUint8Array = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .decodeUint8ArrayF */ .MD)(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed);
const decodeUint8ArrayCrypto = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .decodeUint8ArrayF */ .MD)(_types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
const decodeTextCrypto = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .decodeTextF */ .Z$)(_types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
const JSONParse = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .JSONParseF */ .h4)(_types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
const importEC = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .importEC_Key */ .OT, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
async function parse38(payload) {
    // #region Parse text
    const header = '\u{1F3BC}4/4';
    if (!payload.startsWith(header)) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const { AESKeyEncrypted , encryptedText , iv , signature , authorPublicKey , authorUserID , isPublic  } = splitFields(rest);
    // #endregion
    // #region Normalization
    const raw_iv = decodeUint8ArrayCrypto(iv).andThen(_utils__WEBPACK_IMPORTED_MODULE_3__/* .assertIVLengthEq16 */ .R_);
    const raw_aes = decodeUint8ArrayCrypto(AESKeyEncrypted);
    const encryption = isPublic ? {
        type: 'public',
        iv: raw_iv,
        AESKey: await decodePublicSharedAESKey(raw_iv, raw_aes)
    } : {
        type: 'E2E',
        iv: raw_iv,
        ephemeralPublicKey: {},
        ownersAESKeyEncrypted: raw_aes
    };
    const normalized = {
        version: -38,
        author: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.None */ .E.None,
        authorPublicKey: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.None */ .E.None,
        signature: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.None */ .E.None,
        encryption: (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)(encryption),
        encrypted: decodeUint8Array(encryptedText)
    };
    if (authorUserID.err) {
        normalized.author = authorUserID.mapErr(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.mapErr */ .iD.mapErr(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed));
    } else if (authorUserID.val.some) {
        normalized.author = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ProfileIdentifier.from */ .WO.from(`person:${authorUserID.val.val}`).map((x)=>(0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(x)
        ).toResult(undefined).mapErr(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.mapErr */ .iD.mapErr(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed));
    }
    if (authorPublicKey) {
        normalized.authorPublicKey = await decodeECDHPublicKey(authorPublicKey);
    }
    if (signature && raw_iv.ok && raw_aes.ok && normalized.encrypted.ok) {
        const message = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeText */ .YT)(`4/4|${AESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = decodeUint8Array(signature);
        if (sig.ok) {
            normalized.signature = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.Some */ .E.Some({
                signee: message,
                signature: sig.val
            });
        } else {
            normalized.signature = sig;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)(normalized);
// #endregion
}
// ? Version 38:🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier?:||
function splitFields(raw) {
    const [, AESKeyEncrypted = '', iv = '', encryptedText = '', signature, authorPublicKey, isPublic, authorUserIDRaw] = raw.split('|');
    const authorUserID = authorUserIDRaw ? ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Result.wrap */ .x4.wrap(()=>(0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(atob(authorUserIDRaw))
    ) : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.None */ .E.None;
    return {
        AESKeyEncrypted,
        encryptedText,
        iv,
        // "_" is used as placeholder
        signature: signature === '_' ? undefined : signature,
        authorPublicKey: authorPublicKey,
        authorUserID,
        isPublic: isPublic === '1'
    };
}
async function decodePublicSharedAESKey(iv, encryptedKey) {
    if (iv.err) return iv;
    if (encryptedKey.err) return encryptedKey;
    const publicSharedKey = await (0,_shared__WEBPACK_IMPORTED_MODULE_4__/* .get_v38PublicSharedCryptoKey */ .w)();
    if (publicSharedKey.err) return publicSharedKey;
    const import_AES_GCM_256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .importAES */ .yj, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const decrypt = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .decryptWithAES */ .PB, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const jwk_in_u8arr = await decrypt(publicSharedKey.val, iv.val, encryptedKey.val);
    const jwk_in_text = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_u8arr, decodeTextCrypto);
    const jwk = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_text, JSONParse);
    const aes = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk, import_AES_GCM_256);
    return aes;
}
async function decodeECDHPublicKey(compressedPublic) {
    const key = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(decodeUint8ArrayCrypto(compressedPublic), async (val)=>(await ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Result.wrapAsync */ .x4.wrapAsync(()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .decompressSecp256k1Point */ .pf)(val)
        )).mapErr((e)=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey, e)
        )
    );
    if (key.err) return key;
    const { x , y  } = key.val;
    const jwk = {
        crv: 'K-256',
        ext: true,
        x,
        y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    const imported = await importEC(jwk, _payload__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1);
    if (imported.err) return imported;
    return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .OptionalResult.Some */ .E.Some({
        algr: _payload__WEBPACK_IMPORTED_MODULE_0__/* .EC_KeyCurveEnum.secp256k1 */ .qx.secp256k1,
        key: imported.val
    });
}


/***/ }),

/***/ 46305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ parse39)
/* harmony export */ });
/* harmony import */ var _version_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43141);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30181);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* eslint @dimensiondev/unicode/specific-set: ["error", { "only": "code" }] */ 


// -39 payload is totally the same as -40.
// -40 uses unstable JSON stringify in E2E encryption, -39 fixes that.
// We can reuse the payload parser here.
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function parse39(payload) {
    const v_40 = '\u{1F3BC}2/4';
    const v_39 = '\u{1F3BC}3/4';
    if (!payload.startsWith(v_39)) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.UnknownVersion */ .T6.UnknownVersion, null).toErr();
    const result = await (0,_version_40__WEBPACK_IMPORTED_MODULE_0__/* .parse40 */ .W)(payload.replace(v_39, v_40));
    return result.map((x)=>({
            ...x,
            version: -39
        })
    );
}


/***/ }),

/***/ 43141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ parse40)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30181);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53908);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);





const decodeUint8Array = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .decodeUint8ArrayF */ .MD)(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed);
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function parse40(payload) {
    // #region Parse string
    const header = '\u{1F3BC}2/4|';
    if (!payload.startsWith(header)) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const [ownersAESKeyEncrypted, iv, encryptedText, signature] = rest.split('|');
    // #endregion
    // #region Normalization
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: {},
        iv: decodeUint8Array(iv).andThen(_utils__WEBPACK_IMPORTED_MODULE_2__/* .assertIVLengthEq16 */ .R_),
        ownersAESKeyEncrypted: decodeUint8Array(ownersAESKeyEncrypted)
    };
    const normalized = {
        version: -40,
        author: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .OptionalResult.None */ .E.None,
        authorPublicKey: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .OptionalResult.None */ .E.None,
        signature: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .OptionalResult.None */ .E.None,
        encryption: (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(encryption),
        encrypted: decodeUint8Array(encryptedText)
    };
    if (signature && encryption.iv.ok && encryption.ownersAESKeyEncrypted.ok && normalized.encrypted.ok) {
        const message = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .encodeText */ .YT)(`4/4|${ownersAESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = decodeUint8Array(signature);
        if (sig.ok) {
            normalized.signature = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .OptionalResult.Some */ .E.Some({
                signee: message,
                signature: sig.val
            });
        } else {
            normalized.signature = sig;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(normalized);
// #endregion
}


/***/ }),

/***/ 61066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ym": () => (/* reexport */ TwitterDecoder),
  "FW": () => (/* binding */ socialNetworkDecoder),
  "zl": () => (/* binding */ socialNetworkEncoder)
});

// UNUSED EXPORTS: __TwitterEncoder

// EXTERNAL MODULE: ../encryption/src/payload/types.ts
var types = __webpack_require__(80326);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../encryption/src/social-network-encode-decode/twitter.ts


/**
 * @link https://github.com/DimensionDev/Maskbook/issues/198
 */ function __TwitterEncoder(text) {
    return `https://mask.io/?PostData_v1=${batchReplace(text, [
        [
            '\u{1F3BC}',
            '%20'
        ],
        [
            ':||',
            '%40'
        ],
        [
            '+',
            '-'
        ],
        [
            '=',
            '_'
        ],
        [
            /\|/g,
            '.'
        ], 
    ])}`;
}
function TwitterDecoder(raw) {
    if (!raw) return esm/* None */.Hq;
    if (!raw.includes('%20') || !raw.includes('%40')) return esm/* None */.Hq;
    const payloadLink = (0,src/* parseURL */.Lk)(raw).map((x)=>x.replace(/\u2026$/, '')
    ).filter((x)=>x.endsWith('%40')
    )[0];
    try {
        const { search , pathname  } = new URL(payloadLink);
        const payload = search ? search.slice(1) : pathname.slice(1);
        if (!payload) return esm/* None */.Hq;
        return (0,esm/* Some */.bD)(`\u{1F3BC}${batchReplace(payload// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
        // eslint-disable-next-line unicorn/better-regex
        .replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, ''), [
            [
                '-',
                '+'
            ],
            [
                '_',
                '='
            ],
            [
                /\./g,
                '|'
            ], 
        ])}:||`);
    } catch  {
        return esm/* None */.Hq;
    }
}
function batchReplace(source, group) {
    let storage = source;
    for (const v of group){
        storage = storage.replace(v[0], v[1]);
    }
    return storage;
}

;// CONCATENATED MODULE: ../encryption/src/social-network-encode-decode/index.ts


function socialNetworkDecoder(network, content) {
    if (network === types/* SocialNetworkEnum.Twitter */.Gq.Twitter) return TwitterDecoder(content).map((x)=>[
            x
        ]
    ).unwrapOr([]);
    const all = content.match(/(\u{1F3BC}[\w+/=|]+:\|\|)/giu);
    if (all) return all;
    return [];
}
function socialNetworkEncoder(network, content) {
    if (network === types/* SocialNetworkEnum.Twitter */.Gq.Twitter) return __TwitterEncoder(content);
    return content;
}



/***/ }),

/***/ 5903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "Ct": () => (/* binding */ userGuideStatus),
/* harmony export */   "FX": () => (/* binding */ userPinExtension),
/* harmony export */   "JE": () => (/* binding */ bioDescription),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "Pg": () => (/* binding */ sayHelloShowed),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "gG": () => (/* binding */ dismissVerifyNextID),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "lJ": () => (/* binding */ userGuideVersion),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "yO": () => (/* binding */ personalHomepage)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23587);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60718);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67938);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30288);
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31202);







const appearanceSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('appearance', _masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .Appearance["default"] */ .um["default"]);
const languageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.__auto__ */ .P7.__auto__);
languageSettings.addListener(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .updateLanguage */ .BF);
const pluginIDSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createComplexGlobalSettings */ .w0)('PluginIdBySite', {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.Minds */ .Jk.Minds]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ExtensionSite.Popup */ .v_.Popup]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ExtensionSite.Dashboard */ .v_.Dashboard]: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
}, lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
const userGuideVersion = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('userGuideVersion', 'v2');
const currentSetupGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('userGuideStatus', '');
const sayHelloShowed = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('sayHelloShowed', false);
const userPinExtension = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('userPinExtension', false);
const dismissVerifyNextID = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createComplexNetworkSettings */ .v7)('dismissVerifyNextID', {}, lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
const bioDescription = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('bioDescription', '');
const personalHomepage = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('personalHomepage', '');
// This is a misuse of concept "NetworkSettings" as "namespaced settings"
// The refactor is tracked in https://github.com/DimensionDev/Maskbook/issues/1884
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSNSAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsDashboard().find((x) => x.ID === PLUGIN_ID)` instead
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const currentPluginMinimalModeNOTEnabled = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createNetworkSettings */ .Lk)('pluginsEnabled', true);
const launchPageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('launchPage', _types__WEBPACK_IMPORTED_MODULE_4__/* .LaunchPage.dashboard */ .z.dashboard);
const currentPersonaIdentifier = (0,_createSettings__WEBPACK_IMPORTED_MODULE_5__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '');
try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.enUS */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.zhCN */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.jaJP */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.koKR */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .LanguageOptions.__auto__ */ .P7.__auto__;
} catch  {}


/***/ }),

/***/ 45908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 78831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63439);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31217);




/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            PaperProps: props?.paperProps,
            MenuListProps: props?.menuListProps,
            open,
            anchorEl,
            onClose: close,
            onClick: close,
            anchorOrigin: props?.anchorOrigin,
            transformOrigin: props?.transformOrigin
        }, elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? element.nextElementSibling ?? undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []), 
    ];
}


/***/ }),

/***/ 70236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useSwitcher)
/* harmony export */ });
/* unused harmony export useSettingsSwitcher */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72288);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76618);





function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = useValueRef(settings);
    const nextOption = useMemo(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = useCallback(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ _jsxs(ActionButton, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}
function useSwitcher(currentOption, onSwitch, options, resolver, fullWidth) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        fullWidth: fullWidth,
        sx: {
            marginTop: 1,
            backgroundColor: theme.palette.maskColor?.dark,
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            color: 'white'
        },
        variant: "contained",
        onClick: ()=>onSwitch(nextOption)
        ,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}


/***/ }),

/***/ 94201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts


/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    return (0,src/* getAssetAsBlobURL */.$I)(url, service/* default.Helper.fetch */.ZP.Helper.fetch);
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 17784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.$o),
/* harmony export */   "B6": () => (/* reexport safe */ _useErrorStyles__WEBPACK_IMPORTED_MODULE_3__.B),
/* harmony export */   "JN": () => (/* reexport safe */ _useClassicMaskSNSTheme__WEBPACK_IMPORTED_MODULE_5__.J),
/* harmony export */   "Nh": () => (/* reexport safe */ _useColorStyles__WEBPACK_IMPORTED_MODULE_2__.N),
/* harmony export */   "VJ": () => (/* reexport safe */ _useClassicMaskSNSTheme__WEBPACK_IMPORTED_MODULE_5__.V),
/* harmony export */   "_T": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__._T),
/* harmony export */   "aF": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.aF),
/* harmony export */   "dF": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.dF),
/* harmony export */   "f2": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.f2),
/* harmony export */   "wj": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.wj),
/* harmony export */   "xr": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.xr)
/* harmony export */ });
/* harmony import */ var _color_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74280);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _useColorStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24103);
/* harmony import */ var _useErrorStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5839);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65095);
/* harmony import */ var _useClassicMaskSNSTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51602);
// Do not export more files. Those files are deprecated.








/***/ }),

/***/ 51602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useClassicMaskSNSPluginTheme),
/* harmony export */   "V": () => (/* binding */ useClassicMaskSNSTheme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25105);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14257);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9956);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65095);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44451);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80226);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5903);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9084);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46440);
/* harmony import */ var _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88674);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60232);













const staticRef = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .createSubscriptionFromValueRef */ ._H)(new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__.ValueRef('light'));
const defaultUseTheme = (t)=>t
;
/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useClassicMaskSNSTheme() {
    const provider = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.customization.paletteMode */ .LM.customization.paletteMode?.current || staticRef).current;
    const usePostTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.customization.useTheme */ .LM.customization.useTheme || defaultUseTheme).current;
    const palette = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(provider);
    const baseTheme = palette === 'dark' ? _MaskTheme__WEBPACK_IMPORTED_MODULE_3__/* .MaskDarkTheme */ .H : _MaskTheme__WEBPACK_IMPORTED_MODULE_3__/* .MaskLightTheme */ .C;
    (0,immer__WEBPACK_IMPORTED_MODULE_10__/* .setAutoFreeze */ .Fl)(false);
    const maskTheme = (0,immer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(baseTheme, (theme)=>{
        const colorSchema = _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__[theme.palette.mode];
        theme.palette.maskColor = colorSchema.maskColor;
    });
    // TODO: support RTL?
    const [localization, isRTL] = (0,_useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__/* .useThemeLanguage */ .e)((0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .languageSettings */ .pQ));
    const theme1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(maskTheme, localization);
    return usePostTheme(theme1);
}
function useClassicMaskSNSPluginTheme() {
    const theme = useClassicMaskSNSTheme();
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(theme), {
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'roundedContained'
                }
            }
        }
    }));
}


/***/ }),

/***/ 24103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useColorStyles)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15746);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92017);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94362);


const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][900] */ .Z[900]
        },
        success: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][800] */ .Z[800]
        },
        info: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][800] */ .Z[800]
        }
    };
});


/***/ }),

/***/ 45813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12368);
/* harmony import */ var _utils_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55437);




function useRecentTransactions(pluginID, status) {
    const { Transaction  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .d)(pluginID);
    const transactions = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Transaction?.transactions ?? _utils_subscription__WEBPACK_IMPORTED_MODULE_3__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return (status ? transactions.filter((x)=>status === x.status
        ) : transactions).map((x)=>({
                ...x,
                _tx: x.candidates[x.indexId]
            })
        );
    }, [
        status,
        transactions
    ]);
}


/***/ }),

/***/ 77758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useReverseAddress)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58500);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);



function useReverseAddress(pluginID, address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { NameService , Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!chainId || !address || !Others?.isValidAddress?.(address) || !NameService) return;
        return NameService.reverse?.(chainId, address);
    }, [
        address,
        chainId,
        NameService
    ]);
}


/***/ }),

/***/ 95169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r8": () => (/* reexport */ createGlobalState/* createGlobalState */.r),
  "pv": () => (/* reexport */ useObservableMapSet/* useObservableValues */.p),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: useAim, useValueRefDelayed

// EXTERNAL MODULE: ../shared-base-ui/src/hooks/createGlobalState.ts
var createGlobalState = __webpack_require__(30807);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useAim.ts
var useAim = __webpack_require__(56324);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useObservableMapSet.ts
var useObservableMapSet = __webpack_require__(83152);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(526);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useScrollBottomEvent.ts
var useScrollBottomEvent = __webpack_require__(30780);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(14257);
;// CONCATENATED MODULE: ../shared-base-ui/src/hooks/useValueRef.ts


function useValueRef(ref) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}
function useValueRefDelayed(ref, latency = 500) {
    const subscription = useMemo(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>{
                return ref.addListener((newVal, oldVal)=>{
                    setTimeout(()=>callback(newVal, oldVal)
                    , latency);
                });
            }
        })
    , [
        ref,
        latency
    ]);
    return useSubscription(subscription);
}

;// CONCATENATED MODULE: ../shared-base-ui/src/hooks/index.ts








/***/ }),

/***/ 11337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PopupRoutes)
/* harmony export */ });
var PopupRoutes;
(function(PopupRoutes) {
    PopupRoutes["Root"] = '/';
    PopupRoutes["Wallet"] = '/wallet';
    PopupRoutes["ImportWallet"] = '/wallet/import';
    PopupRoutes["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes["WalletSettings"] = '/wallet/settings';
    PopupRoutes["WalletRename"] = '/wallet/rename';
    PopupRoutes["DeleteWallet"] = '/wallet/delete';
    PopupRoutes["CreateWallet"] = '/wallet/create';
    PopupRoutes["SwitchWallet"] = '/wallet/switch';
    PopupRoutes["SelectWallet"] = '/wallet/select';
    PopupRoutes["WalletRecovered"] = '/wallet/recovered';
    PopupRoutes["LegacyWalletRecovered"] = '/wallet/legacy-recovered';
    PopupRoutes["BackupWallet"] = '/wallet/backup';
    PopupRoutes["AddToken"] = '/wallet/addToken';
    PopupRoutes["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes["GasSetting"] = '/wallet/gas';
    PopupRoutes["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes["ContractInteraction"] = '/wallet/contract-interaction';
    PopupRoutes["Unlock"] = '/wallet/unlock';
    PopupRoutes["Transfer"] = '/wallet/transfer';
    PopupRoutes["SetPaymentPassword"] = '/wallet/password';
    PopupRoutes["ReplaceTransaction"] = '/wallet/replace';
    PopupRoutes["Personas"] = '/personas';
    PopupRoutes["Logout"] = '/personas/logout';
    PopupRoutes["PersonaRename"] = '/personas/rename';
    PopupRoutes["SelectPersona"] = '/personas/select';
    PopupRoutes["SocialAccounts"] = '/personas/accounts';
    PopupRoutes["AccountDetail"] = '/personas/accounts/detail';
    PopupRoutes["ConnectedWallets"] = '/personas/connected-wallets';
    PopupRoutes["PersonaSignRequest"] = '/personas/sign-request';
    PopupRoutes["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes["RequestPermission"] = '/request-permission';
    PopupRoutes["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes["SignRequest"] = '/sign-request';
    PopupRoutes["Swap"] = '/swap';
    PopupRoutes["ConnectWallet"] = '/wallet/connect';
    PopupRoutes["VerifyWallet"] = '/personas/verify';
})(PopupRoutes || (PopupRoutes = {}));


/***/ }),

/***/ 99594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* binding */ relativeRouteOf),
/* harmony export */   "mZ": () => (/* reexport safe */ _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11337);
/* harmony import */ var _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89364);


function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


/***/ }),

/***/ 80681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "po": () => (/* reexport */ Flatten/* FlattenTypedMessage */.p),
  "al": () => (/* reexport */ ParseLinkTransformer),
  "gO": () => (/* reexport */ composed/* composeTransformers */.g),
  "Ab": () => (/* reexport */ binary_encode/* decodeTypedMessageFromDocument */.A),
  "WR": () => (/* reexport */ deprecated_encode/* decodeTypedMessageV38ToV40Format */.W),
  "vg": () => (/* reexport */ context/* emptyTransformationContext */.v),
  "F9": () => (/* reexport */ binary_encode/* encodeTypedMessageToDocument */.F),
  "Hu": () => (/* reexport */ deprecated_encode/* encodeTypedMessageV38Format */.H),
  "Vc": () => (/* reexport */ utils/* extractTextFromTypedMessage */.Vc),
  "ss": () => (/* reexport */ visitor/* forEachTypedMessageChild */.s),
  "bj": () => (/* reexport */ extension/* isTypedMessageAnchor */.bj),
  "YN": () => (/* reexport */ core/* isTypedMessageEmpty */.YN),
  "Hz": () => (/* reexport */ utils/* isTypedMessageEqual */.Hz),
  "Rz": () => (/* reexport */ core/* isTypedMessageText */.Rz),
  "Jv": () => (/* reexport */ extension/* makeTypedMessageAnchor */.Jv),
  "WM": () => (/* reexport */ core/* makeTypedMessageEmpty */.WM),
  "as": () => (/* reexport */ core/* makeTypedMessageImage */.as),
  "Ng": () => (/* reexport */ core/* makeTypedMessagePromise */.Ng),
  "P": () => (/* reexport */ core/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ core/* makeTypedMessageTuple */.Zw),
  "n_": () => (/* reexport */ core/* makeTypedMessageTupleFromList */.n_),
  "IJ": () => (/* reexport */ visitor/* visitEachTypedMessageChild */.I)
});

// UNUSED EXPORTS: createMaskPayloadTransform, createTransformationContext, extractImageFromTypedMessage, isCoreTypedMessages, isNonSerializableTypedMessageWithAlt, isSerializableTypedMessage, isTypedMessageImage, isTypedMessageMaskPayload, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownExtensionTypedMessages, isWellKnownTypedMessages, makeTypedMessageMaskPayload, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown

// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(88973);
// EXTERNAL MODULE: ../typed-message/base/extension/index.ts + 1 modules
var extension = __webpack_require__(61436);
// EXTERNAL MODULE: ../typed-message/base/binary-encode/index.ts + 3 modules
var binary_encode = __webpack_require__(96458);
// EXTERNAL MODULE: ../typed-message/base/deprecated-encode/index.ts
var deprecated_encode = __webpack_require__(60178);
// EXTERNAL MODULE: ../typed-message/base/utils/index.ts
var utils = __webpack_require__(97637);
// EXTERNAL MODULE: ../typed-message/base/visitor/index.ts
var visitor = __webpack_require__(59460);
// EXTERNAL MODULE: ../typed-message/base/transformer/composed.ts
var composed = __webpack_require__(33801);
// EXTERNAL MODULE: ../typed-message/base/transformer/context.ts
var context = __webpack_require__(18548);
// EXTERNAL MODULE: ../typed-message/base/transformer/Flatten.ts
var Flatten = __webpack_require__(91810);
// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(11514);
;// CONCATENATED MODULE: ../typed-message/base/transformer/ParseLink.ts




function ParseLinkTransformer(message, context) {
    if ((0,core/* isTypedMessageText */.Rz)(message)) {
        const parsed = (0,parseLink/* parseLink */.V)(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return (0,core/* makeTypedMessageTupleSerializable */.kT)(parsed.map((i)=>{
            if (i.type === 'text') return (0,core/* makeTypedMessageText */.P)(i.content);
            return (0,extension/* makeTypedMessageAnchor */.Jv)(i.category, i.content, i.content);
        }), message.meta);
    }
    return (0,visitor/* visitEachTypedMessageChild */.I)(message, ParseLinkTransformer, context);
}

// EXTERNAL MODULE: ../typed-message/base/transformer/MaskPayload/index.ts
var MaskPayload = __webpack_require__(75058);
;// CONCATENATED MODULE: ../typed-message/base/transformer/index.ts






// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
;// CONCATENATED MODULE: ../typed-message/base/index.ts











const isWellKnownTypedMessages = (0,internal/* composeSome */.Vm)(core/* isCoreTypedMessages */.ez, extension/* isWellKnownExtensionTypedMessages */.SY);


/***/ }),

/***/ 18548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ emptyTransformationContext)
/* harmony export */ });
/* unused harmony export createTransformationContext */
function createTransformationContext() {
    return Object.freeze({});
}
const emptyTransformationContext = createTransformationContext();


/***/ }),

/***/ 22036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ extractTextFromTypedMessage)
/* harmony export */ });
/* unused harmony export extractImageFromTypedMessage */
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88973);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61436);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48160);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59460);




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message1, options) {
    if (!message1) return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
    const text = [];
    function visitor(message) {
        if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message)) text.push(message.content);
        else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageAnchor */ .bj)(message)) {
            text.push(message.content);
            if (options?.linkAsText) text.push(`(${message.href})`);
        } else (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message, visitor);
    }
    visitor(message1);
    (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_3__/* .forEachTypedMessageChild */ .s)(message1, visitor);
    if (text.length) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(text.join(' '));
    return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
}
function extractImageFromTypedMessage(message2) {
    if (!message2) return [];
    const image = [];
    function visitor(message) {
        if (isTypedMessageImage(message)) return void image.push(message.image);
        return forEachTypedMessageChild(message, visitor);
    }
    visitor(message2);
    forEachTypedMessageChild(message2, visitor);
    return image;
}


/***/ }),

/***/ 97637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hz": () => (/* binding */ isTypedMessageEqual),
/* harmony export */   "Vc": () => (/* reexport safe */ _extract_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "c3": () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
/* harmony import */ var _extract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22036);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23587);


function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(message1, message2);
}


/***/ }),

/***/ 82153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ forEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88973);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97637);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61436);



function forEachTypedMessageChild(node, visitor) {
    let stop;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        for (const each of node.items){
            stop = visitor(each);
            if (stop) return;
        }
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(node)) {
        // if Promise has a resolved value, we ignore it's alt.
        if (node.promise.value) visitor(node.promise.value);
        else if (node.alt) visitor(node.alt);
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$6)(node)) {
        visitor(node.message);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        visitor(node.alt);
    }
}


/***/ }),

/***/ 57368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ visitEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88973);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97637);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61436);



function visitEachTypedMessageChild(node, visitor, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        const after = node.items.flatMap((x)=>{
            const next = visitor(x, context);
            if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(next)) return next.items;
            return next;
        });
        if (after.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)) {
            return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(after, node.meta);
        }
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(after, node.meta);
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(node)) {
        // we ignore alt if promise is resolved.
        if (node.promise.value) return visitor(node.promise.value, context);
        else if (node.alt) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessagePromise */ .Ng)(node.promise, visitor(node.alt, context));
        return node;
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$6)(node)) {
        const next = visitor(node.message, context);
        return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageMaskPayload */ .Jq)(next, node.meta);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        const alt = visitor(node.alt, context);
        if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)(alt)) {
            console.warn('[@masknet/typed-message] You must return a serializable message in this position. Original:', node, 'Transformed child "alt":', alt);
            // ignore the transform result
            return node;
        }
        return {
            ...node,
            alt
        };
    } else {
        // return node with no child
        return node;
    }
}


/***/ })

}]);