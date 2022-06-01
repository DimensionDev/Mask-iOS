/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 22445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(86248),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 31420:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var ts_results_esm = __webpack_require__(48160);
// EXTERNAL MODULE: ../encryption/src/utils/index.ts + 1 modules
var utils = __webpack_require__(62435);
// EXTERNAL MODULE: ../encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(24663);
// EXTERNAL MODULE: ../encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(65096);
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
        '-40': async function*(iv) {
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
var Encryption = __webpack_require__(20789);
// EXTERNAL MODULE: ../encryption/src/encryption/AppendEncryption.ts
var AppendEncryption = __webpack_require__(12122);
;// CONCATENATED MODULE: ../encryption/src/encryption/index.ts





/***/ }),

/***/ 95203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ft": () => (/* reexport safe */ _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__.GrayscaleAlgorithm),
/* harmony export */   "Mk": () => (/* binding */ steganographyEncodeImage),
/* harmony export */   "oX": () => (/* binding */ steganographyDecodeImage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34523);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84140);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50710);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96596);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15773);






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

/***/ 19586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ym": () => (/* reexport */ TwitterDecoder),
  "EK": () => (/* reexport */ __TwitterEncoder),
  "FW": () => (/* binding */ socialNetworkDecoder),
  "zl": () => (/* binding */ socialNetworkEncoder)
});

// EXTERNAL MODULE: ../encryption/src/payload/types.ts
var types = __webpack_require__(12628);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
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

/***/ 62481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.S_),
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94299);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14209);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53340);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56045);






/***/ }),

/***/ 53340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94299);


const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventOnMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: ''
    })
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {}),
    Settings: createPersistentKVStorage('settings', {
        debugging: false
    })
};


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
        __webpack_require__.e(/* import() */ 8699).then(__webpack_require__.bind(__webpack_require__, 98699)).then((x)=>x.MaskNetworkAPI
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

/***/ 6257:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/StartPluginWorker.ts
var StartPluginWorker_namespaceObject = {};
__webpack_require__.r(StartPluginWorker_namespaceObject);
__webpack_require__.d(StartPluginWorker_namespaceObject, {
  "default": () => (StartPluginWorker)
});

// NAMESPACE OBJECT: ./src/extension/background-script/Jobs/SettingListeners.ts
var SettingListeners_namespaceObject = {};
__webpack_require__.r(SettingListeners_namespaceObject);
__webpack_require__.d(SettingListeners_namespaceObject, {
  "default": () => (SettingListeners)
});

// NAMESPACE OBJECT: ./background/tasks/Cancellable/NewInstalled.ts
var NewInstalled_namespaceObject = {};
__webpack_require__.r(NewInstalled_namespaceObject);
__webpack_require__.d(NewInstalled_namespaceObject, {
  "default": () => (onInstalled)
});

// NAMESPACE OBJECT: ./background/tasks/Cancellable/InjectContentScripts.ts
var InjectContentScripts_namespaceObject = {};
__webpack_require__.r(InjectContentScripts_namespaceObject);
__webpack_require__.d(InjectContentScripts_namespaceObject, {
  "contentScriptURL": () => (InjectContentScripts_contentScriptURL),
  "default": () => (InjectContentScripts),
  "fetchInjectContentScriptList": () => (InjectContentScripts_fetchInjectContentScriptList),
  "injectedScriptURL": () => (InjectContentScripts_injectedScriptURL),
  "maskSDK_URL": () => (InjectContentScripts_maskSDK_URL)
});

// NAMESPACE OBJECT: ./background/tasks/Cancellable/IsolatedDashboardBridge.ts
var IsolatedDashboardBridge_namespaceObject = {};
__webpack_require__.r(IsolatedDashboardBridge_namespaceObject);
__webpack_require__.d(IsolatedDashboardBridge_namespaceObject, {
  "default": () => (IsolatedDashboardBridge)
});

// NAMESPACE OBJECT: ./background/tasks/Cancellable/NotificationsToMobile.ts
var NotificationsToMobile_namespaceObject = {};
__webpack_require__.r(NotificationsToMobile_namespaceObject);
__webpack_require__.d(NotificationsToMobile_namespaceObject, {
  "default": () => (NotificationsToMobile)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/key.js
/** @internal */
function createKeyMaterial(key, type, name, usage, extractable) {
    return {
        __proto__: null,
        name,
        type,
        key,
        extractable: !!extractable,
        usage,
    };
}
/** @internal */
function usageToFlag(name, usageList, DOMException) {
    let flag = 0 /* KeyUsages.None */;
    for (const usage of usageList) {
        if (name === 'ECDH') {
            if (usage === 'deriveBits') {
                flag |= 1 /* KeyUsages.deriveBits */;
                continue;
            }
            else if (usage === 'deriveKey') {
                flag |= 2 /* KeyUsages.deriveKey */;
                continue;
            }
        }
        else if (name === 'ECDSA') {
            if (usage === 'sign') {
                flag |= 4 /* KeyUsages.sign */;
                continue;
            }
            else if (usage === 'verify') {
                flag |= 8 /* KeyUsages.verify */;
                continue;
            }
        }
        throw new DOMException('Cannot create a key using the specified key usages.', 'SyntaxError');
    }
    if (flag === 0 /* KeyUsages.None */) {
        throw new DOMException('Usages cannot be empty when creating a key.', 'SyntaxError');
    }
    // if (name === 'ECDSA' && flag !== (KeyUsages.sign | KeyUsages.verify)) {
    //     throw new DOMException('Cannot create a key using the specified key usages.', 'SyntaxError')
    // }
    return flag;
}
/** @internal */
function usageFromFlag(KeyMaterial) {
    const { usage, name, type } = KeyMaterial;
    if (name === 'ECDH') {
        const result = [];
        if (type === 'private')
            return [];
        if (usage & 2 /* KeyUsages.deriveKey */)
            result.push('deriveKey');
        if (usage & 1 /* KeyUsages.deriveBits */)
            result.push('deriveBits');
        return result;
    }
    else {
        if (type === 'private')
            return ['sign'];
        return ['verify'];
    }
}
//# sourceMappingURL=key.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/memory.js

/** @internal */
function createMemory(nativeCryptoKey) {
    var _a;
    const nativeCryptoKeyGetter = nativeCryptoKey
        ? (_a = Object.getOwnPropertyDescriptor(nativeCryptoKey.prototype, 'type')) === null || _a === void 0 ? void 0 : _a.get
        : undefined;
    const shimKeys = new WeakMap();
    class CryptoKey {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
        [Symbol.hasInstance](instance) {
            if (shimKeys.has(instance))
                return true;
            if (isNativeCryptoKey(instance))
                return true;
            return false;
        }
        get algorithm() {
            const { name } = get(this);
            return { name, namedCurve: 'K-256' };
        }
        get extractable() {
            return get(this).extractable;
        }
        get type() {
            return get(this).type;
        }
        get usages() {
            return usageFromFlag(get(this));
        }
    }
    Object.defineProperty(CryptoKey, Symbol.toStringTag, { configurable: true, value: 'CryptoKey' });
    function has(object) {
        return shimKeys.has(object);
    }
    function get(instance) {
        if (!shimKeys.has(instance))
            throw new TypeError('Illegal invocation');
        return shimKeys.get(instance);
    }
    function isNativeCryptoKey(instance) {
        if (!nativeCryptoKeyGetter)
            return false;
        try {
            nativeCryptoKeyGetter.call(instance);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
    function newKey(material) {
        const key = Object.create(CryptoKey.prototype);
        shimKeys.set(key, material);
        return key;
    }
    return { has, get, CryptoKey, newKey };
}
//# sourceMappingURL=memory.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/helper.js
/** @internal */
function isK256Alg(alg, acceptKind) {
    try {
        if (typeof alg !== 'object')
            return;
        if (alg === null)
            return;
        const { name, namedCurve } = alg;
        if (namedCurve !== 'K-256')
            return;
        if (acceptKind === 'any') {
            if (name === 'ECDH' || name === 'ECDSA')
                return name;
        }
        else {
            if (name === acceptKind)
                return name;
        }
        return;
    }
    catch (_a) {
        return;
    }
}
/** @internal */
function getHashAlg(alg) {
    try {
        const { name } = alg.hash;
        if (name === 'SHA-256')
            return name;
        if (name === 'SHA-384')
            return name;
        if (name === 'SHA-512')
            return name;
        return;
    }
    catch (_a) {
        return;
    }
}
// https://github.com/PeculiarVentures/webcrypto-liner/blob/3a97b53b7f187f776ea5b23889e03c3f54654811/src/mechs/ec/crypto.ts#L56
/** @internal */
function b2a(buffer) {
    const buf = new Uint8Array(buffer);
    const res = [];
    for (let i = 0; i < buf.length; i++) {
        res.push(buf[i]);
    }
    return res;
}
/** @internal */
function concat(...buf) {
    const res = new Uint8Array(buf.map((item) => item.length).reduce((prev, cur) => prev + cur));
    let offset = 0;
    buf.forEach((item, index) => {
        for (let i = 0; i < item.length; i++) {
            res[offset + i] = item[i];
        }
        offset += item.length;
    });
    return res;
}
/** @internal */
function hex2buffer(hexString, padded) {
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
    let res = new Uint8Array(hexString.length / 2);
    for (let i = 0; i < hexString.length; i++) {
        const c = hexString.slice(i, ++i + 1);
        res[(i - 1) / 2] = parseInt(c, 16);
    }
    // BN padding
    if (padded) {
        let len = res.length;
        len = len > 32 ? (len > 48 ? 66 : 48) : 32;
        if (res.length < len) {
            res = concat(new Uint8Array(len - res.length), res);
        }
    }
    return res;
}
/** @internal */
function buffer2hex(buffer, padded) {
    let res = '';
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < buffer.length; i++) {
        const char = buffer[i].toString(16);
        res += char.length % 2 ? '0' + char : char;
    }
    // BN padding
    if (padded) {
        let len = buffer.length;
        len = len > 32 ? (len > 48 ? 66 : 48) : 32;
        if (res.length / 2 < len) {
            res = new Array(len * 2 - res.length + 1).join('0') + res;
        }
    }
    return res;
}
//# sourceMappingURL=helper.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/ec/sign.js

function signK256(key, hash) {
    if (key.type !== 'private')
        throw new Error();
    if (key.name !== 'ECDSA')
        throw new Error();
    const array = b2a(hash);
    const sig = key.key.sign(array);
    const hexSignature = buffer2hex(sig.r.toArray(), true) + buffer2hex(sig.s.toArray(), true);
    return hex2buffer(hexSignature).buffer;
}
function verifyK256(key, hash, signature) {
    if (key.name !== 'ECDSA')
        throw new Error();
    const sig = {
        r: new Uint8Array(signature.slice(0, signature.byteLength / 2)),
        s: new Uint8Array(signature.slice(signature.byteLength / 2)),
    };
    const array = b2a(hash);
    return key.key.verify(array, sig);
}
//# sourceMappingURL=sign.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/pvtsutils@1.2.2/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(51765);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/ec/key.js




const k256 = new elliptic.ec('secp256k1');
/** @internal */
function importK256(method, name, data, extractable, usage, DOMException) {
    if (method === 'jwk')
        return importK256JWK(name, data, extractable, usage, DOMException);
    return importK256Raw(name, new Uint8Array(data), extractable, usage);
}
/** @internal */
function exportK256(format, key) {
    if (format === 'jwk')
        return exportK256JWK(key);
    return exportK256Raw(key);
}
/** @internal */
function generateK256Pair(name, extractable, usageList, DOMException) {
    const usage = usageToFlag(name, usageList, DOMException);
    const key = k256.genKeyPair();
    return {
        pub: createKeyMaterial(key, 'public', name, usage, extractable),
        priv: createKeyMaterial(key, 'private', name, usage, extractable),
    };
}
// !!! raw format can never store private key.
function importK256Raw(name, buffer, extractable, usage) {
    const key = k256.keyFromPublic(new Uint8Array(buffer));
    return createKeyMaterial(key, 'public', name, usage, extractable);
}
function exportK256Raw(key) {
    if (!key.extractable)
        throw new DOMException('key is not extractable', 'InvalidAccessError');
    return new Uint8Array(key.key.getPublic('array')).buffer;
}
function importK256JWK(name, jwk, extractable, usage, DOMException) {
    //#region verify
    const { d, x, y, crv, kty } = jwk;
    const key_ops = Array.from(jwk.key_ops || []);
    if (kty !== 'EC')
        throw new DOMException(`The required JWK member "kty" was missing`, 'DataError');
    if (crv !== 'K-256')
        throw new DOMException(`The required JWK member "crv" was missing`, 'DataError');
    if (!x)
        throw new DOMException(`The required JWK member "x" was missing`, 'DataError');
    if (!y)
        throw new DOMException(`The required JWK member "y" was missing`, 'DataError');
    let isValidKeyUsage = true;
    if (usage & 4 /* KeyUsages.sign */)
        if (!key_ops.includes('sign'))
            isValidKeyUsage = false;
    if (usage & 8 /* KeyUsages.verify */)
        if (!key_ops.includes('verify'))
            isValidKeyUsage = false;
    if (!isValidKeyUsage)
        throw new DOMException('The JWK "key_ops" member was inconsistent with that specified by the Web Crypto call. The JWK usage must be a superset of those requested', 'DataError');
    //#endregion
    // 4 is the point format.
    const point = concat([4], new Uint8Array(build.Convert.FromBase64Url(x)), new Uint8Array(build.Convert.FromBase64Url(y)));
    const priv = d ? build.Convert.FromBase64Url(d) : undefined;
    let ecKey;
    if (priv)
        ecKey = k256.keyFromPrivate(new Uint8Array(priv));
    else
        ecKey = k256.keyFromPublic(point);
    return createKeyMaterial(ecKey, d ? 'private' : 'public', name, usage, extractable);
}
function exportK256JWK(key) {
    if (!key.extractable)
        throw new DOMException('key is not extractable', 'InvalidAccessError');
    // ignore first '04'
    const hexPub = key.key.getPublic('hex').slice(2);
    const hexX = hexPub.slice(0, hexPub.length / 2);
    const hexY = hexPub.slice(hexPub.length / 2, hexPub.length);
    if (key.type === 'public') {
        // public
        const jwk = {
            crv: 'K-256',
            ext: true,
            x: build.Convert.ToBase64Url(hex2buffer(hexX)),
            y: build.Convert.ToBase64Url(hex2buffer(hexY)),
            key_ops: usageFromFlag(key),
            kty: 'EC',
        };
        return jwk;
    }
    else {
        const jwk = {
            crv: 'K-256',
            ext: true,
            d: build.Convert.ToBase64Url(hex2buffer(key.key.getPrivate('hex'))),
            x: build.Convert.ToBase64Url(hex2buffer(hexX)),
            y: build.Convert.ToBase64Url(hex2buffer(hexY)),
            key_ops: usageFromFlag(key),
            kty: 'EC',
        };
        return jwk;
    }
}
//# sourceMappingURL=key.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/ec/derive.js

/** @internal */
function deriveBitsK256(pub, priv, length) {
    const derived = priv.key.derive(pub.key.getPublic());
    let array = new Uint8Array(derived.toArray());
    // Padding
    let len = array.length;
    len = len > 32 ? (len > 48 ? 66 : 48) : 32;
    if (array.length < len) {
        array = concat(new Uint8Array(len - array.length), array);
    }
    const buf = array.slice(0, length / 8).buffer;
    return buf;
}
//# sourceMappingURL=derive.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/core.js







function createCrypto(nativeCrypto, nativeCryptoKey, DOMException) {
    const [shimSubtle, SubtleCrypto, CryptoKey] = createSubtleClass(nativeCrypto, nativeCryptoKey, DOMException);
    const [shimCrypto, Crypto] = createCryptoClass(nativeCrypto, shimSubtle);
    function polyfill() {
        Object.defineProperties(globalThis, {
            // classes
            Crypto: { value: Crypto, configurable: true, writable: true },
            SubtleCrypto: { value: SubtleCrypto, configurable: true, writable: true },
            CryptoKey: { value: CryptoKey, configurable: true, writable: true },
            // instance
            crypto: { value: shimCrypto, configurable: true, writable: true },
        });
    }
    return [shimCrypto, { Crypto, CryptoKey, SubtleCrypto }, polyfill];
}
function createSubtleClass(nativeCrypto, nativeCryptoKey, DOMException) {
    const nativeSubtle = nativeCrypto.subtle;
    const { get, has, CryptoKey, newKey } = createMemory(nativeCryptoKey);
    class SubtleCrypto {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
    }
    const subtleCryptoPrototype = {
        //#region Not Wrapping methods
        decrypt(algorithm, key, data) {
            return nativeSubtle.decrypt(algorithm, key, data);
        },
        digest(algorithm, data) {
            return nativeSubtle.digest(algorithm, data);
        },
        encrypt(algorithm, key, data) {
            return nativeSubtle.encrypt(algorithm, key, data);
        },
        unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages) {
            return nativeSubtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgorithm, unwrappedKeyAlgorithm, extractable, keyUsages);
        },
        async wrapKey(format, key, wrappingKey, wrapAlgorithm) {
            if (has(key)) {
                throw new DOMException(`Failed to execute 'wrapKey' on 'SubtleCrypto': Algorithm: K-256 key does not support wrapping.`, 'NotSupportedError');
            }
            return nativeSubtle.wrapKey(format, key, wrappingKey, wrapAlgorithm);
        },
        //#endregion
        //#region Derive
        async deriveBits(algorithm, baseKey, length) {
            if (has(baseKey)) {
                return deriveBitsK256(get(algorithm.public), get(baseKey), length);
            }
            return nativeSubtle.deriveBits(algorithm, baseKey, length);
        },
        async deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages) {
            if (has(baseKey)) {
                const alg = algorithm;
                const aes = derivedKeyType;
                const bits = deriveBitsK256(get(alg.public), get(baseKey), aes.length);
                return nativeSubtle.importKey('raw', bits, derivedKeyType, extractable, keyUsages);
            }
            return nativeSubtle.deriveKey(algorithm, baseKey, derivedKeyType, extractable, keyUsages);
        },
        //#endregion
        //#region Sign & Verify
        async sign(algorithm, key, data) {
            if (has(key)) {
                const hash = getHashAlg(algorithm);
                if (!hash) {
                    throw new DOMException(`Failed to execute 'sign' on 'SubtleCrypto': EcdsaParams: hash: Algorithm: Unrecognized name`, 'NotSupportedError');
                }
                const hashed = await nativeSubtle.digest(hash, data);
                return signK256(get(key), hashed);
            }
            return nativeSubtle.sign(algorithm, key, data);
        },
        async verify(algorithm, key, signature, data) {
            if (has(key)) {
                const hash = getHashAlg(algorithm);
                if (!hash)
                    throw new DOMException(`Failed to execute 'verify' on 'SubtleCrypto': EcdsaParams: hash: Algorithm: Unrecognized name`, 'NotSupportedError');
                const hashed = await nativeSubtle.digest(hash, data);
                return verifyK256(get(key), hashed, new Uint8Array(signature));
            }
            return nativeSubtle.verify(algorithm, key, signature, data);
        },
        //#endregion
        //#region Create, Import, Export
        async generateKey(algorithm, extractable, keyUsages) {
            const k256Name = isK256Alg(algorithm, 'any');
            if (k256Name) {
                const _ = generateK256Pair(k256Name, extractable, keyUsages, DOMException);
                return { publicKey: newKey(_.pub), privateKey: newKey(_.priv) };
            }
            return nativeSubtle.generateKey(algorithm, extractable, keyUsages);
        },
        async importKey(format, keyData, algorithm, extractable, keyUsages) {
            const k256Name = isK256Alg(algorithm, 'any');
            if (k256Name) {
                const usageFlag = usageToFlag(k256Name, keyUsages, DOMException);
                if (format === 'pkcs8') {
                    throw new DOMException('The key is not of the expected type', 'InvalidAccessError');
                }
                // TODO: support spki
                if (format === 'spki') {
                    throw new DOMException('spki export of K-256 keys is not supported', 'NotSupportedError');
                }
                if (format === 'jwk' || format === 'raw') {
                    return newKey(importK256(format, k256Name, keyData, extractable, usageFlag, DOMException));
                }
                throw new TypeError('Invalid keyFormat argument');
            }
            return nativeSubtle.importKey(format, keyData, algorithm, extractable, keyUsages);
        },
        async exportKey(format, key) {
            if (has(key)) {
                if (format === 'pkcs8') {
                    throw new DOMException('The key is not of the expected type', 'InvalidAccessError');
                }
                // TODO: support spki
                if (format === 'spki') {
                    throw new DOMException('spki export of K-256 keys is not supported', 'NotSupportedError');
                }
                if (format === 'jwk' || format === 'raw')
                    return exportK256(format, get(key));
                throw new TypeError('Invalid keyFormat argument');
            }
            return nativeSubtle.exportKey(format, key);
        },
        //#endregion
    };
    Object.defineProperty(subtleCryptoPrototype, Symbol.toStringTag, { configurable: true, value: 'SubtleCrypto' });
    Object.defineProperties(SubtleCrypto.prototype, Object.getOwnPropertyDescriptors(subtleCryptoPrototype));
    return [Object.create(subtleCryptoPrototype), SubtleCrypto, CryptoKey];
}
function createCryptoClass(nativeCrypto, shimSubtle) {
    class Crypto {
        constructor() {
            throw new TypeError('Illegal constructor');
        }
    }
    const cryptoPrototype = {
        get subtle() {
            return shimSubtle;
        },
        getRandomValues: (array) => nativeCrypto.getRandomValues(array),
        randomUUID: () => nativeCrypto.randomUUID(),
    };
    Object.defineProperty(cryptoPrototype, Symbol.toStringTag, { configurable: true, value: 'Crypto' });
    Object.defineProperties(Crypto.prototype, Object.getOwnPropertyDescriptors(cryptoPrototype));
    return [Object.create(cryptoPrototype), Crypto];
}
//# sourceMappingURL=core.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+secp256k1-webcrypto@1.0.0-20220412114204-be816df/node_modules/@dimensiondev/secp256k1-webcrypto/dist/web.js

const [web_crypto, { Crypto, CryptoKey, SubtleCrypto }, polyfill] = createCrypto(globalThis.crypto, globalThis.CryptoKey, DOMException);
//# sourceMappingURL=web.js.map
// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(53340);
// EXTERNAL MODULE: ./background/database/kv-storage.ts
var database_kv_storage = __webpack_require__(74314);
;// CONCATENATED MODULE: ./background/setup.ts



polyfill();
(0,kv_storage/* setupMaskKVStorageBackend */.$e)(database_kv_storage/* indexedDB_KVStorageBackend */.E, database_kv_storage/* inMemory_KVStorageBackend */.c);

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(30246);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 5 modules
var social_network_adaptor = __webpack_require__(6277);
// EXTERNAL MODULE: ../plugin-infra/src/entry-background-worker.ts + 1 modules
var entry_background_worker = __webpack_require__(17610);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(80614);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts
var host = __webpack_require__(81064);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/StartPluginWorker.ts






/* harmony default export */ function StartPluginWorker(signal) {
    (0,entry_background_worker/* startPluginWorker */.Ht)((0,host/* createPluginHost */.R)(signal, createWorkerContext));
};
function createWorkerContext(pluginID, signal) {
    let storage = undefined;
    const currentPersonaSub = (0,src/* createSubscriptionFromAsync */.Fd)(service/* Services.Settings.getCurrentPersonaIdentifier */.K9.Settings.getCurrentPersonaIdentifier, undefined, shared/* MaskMessages.events.currentPersonaIdentifier.on */.ql.events.currentPersonaIdentifier.on, signal);
    return {
        getDatabaseStorage () {
            return storage || (storage = (0,Plugin/* createPluginDatabase */.X2)(pluginID, signal));
        },
        createKVStorage (type, defaultValues) {
            if (type === 'memory') return shared/* InMemoryStorages.Plugin.createSubScope */.uU.Plugin.createSubScope(pluginID, defaultValues, signal);
            else return shared/* PersistentStorages.Plugin.createSubScope */._H.Plugin.createSubScope(pluginID, defaultValues, signal);
        },
        personaSign: service/* Services.Identity.signWithPersona */.K9.Identity.signWithPersona,
        walletSign: service/* Services.Ethereum.personalSign */.K9.Ethereum.personalSign,
        currentPersona: currentPersonaSub
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(80917);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var Wallet_settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(64065);
;// CONCATENATED MODULE: ./src/settings/listener.ts



function ToBeListened() {
    return {
        appearanceSettings: settings/* appearanceSettings */.OF,
        pluginIDSettings: settings/* pluginIDSettings */.tR,
        languageSettings: settings/* languageSettings */.pQ,
        currentChainIdSettings: Wallet_settings/* currentChainIdSettings */.wU,
        currentTokenPricesSettings: Wallet_settings/* currentTokenPricesSettings */.JC,
        currentDataProviderSettings: Trader_settings/* currentDataProviderSettings */.gG,
        currentProviderSettings: Wallet_settings/* currentProviderSettings */.t1,
        currentNetworkSettings: Wallet_settings/* currentNetworkSettings */.fX,
        currentAccountSettings: Wallet_settings/* currentAccountSettings */.aK,
        currentFungibleAssetDataProviderSettings: Wallet_settings/* currentFungibleAssetDataProviderSettings */.rI,
        currentNonFungibleAssetDataProviderSettings: Wallet_settings/* currentNonFungibleAssetDataProviderSettings */.uR,
        currentPersonaIdentifier: settings/* currentPersonaIdentifier */.cn
    };
}

// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/SettingListeners.ts



/* harmony default export */ function SettingListeners(signal) {
    if (!(0,umd.isEnvironment)(umd.Environment.ManifestBackground)) return;
    const obj = ToBeListened();
    for(const _key in obj){
        const key = _key;
        signal.addEventListener('abort', obj[key].addListener((data)=>utils/* MaskMessages.events */.ql.events[key].sendToAll(data)
        ));
    }
};

;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/index_hmr.ts
// Define new task at packages/mask/background/tasks/setup.hmr.ts if possible.


const CancelableJobs = [
    StartPluginWorker_namespaceObject,
    SettingListeners_namespaceObject
];
const abort = new AbortController();
CancelableJobs.map((x)=>x.default(abort.signal)
);
if (false) {}

// EXTERNAL MODULE: ./shared/flags.ts
var flags = __webpack_require__(14209);
;// CONCATENATED MODULE: ./background/tasks/Cancellable/NewInstalled.ts
// No meaning for this module to support hmr but I don't want to invalidate dependencies module by this reason.


function onInstalled(signal) {
    const onInstalled1 = (detail)=>{
        if (flags/* Flags.has_native_welcome_ui */.vU.has_native_welcome_ui) return;
        if (detail.reason === 'install') browser.tabs.create({
            url: browser.runtime.getURL(`dashboard.html#${src/* DashboardRoutes.Welcome */.vq.Welcome}`)
        });
    };
    browser.runtime.onInstalled.addListener(onInstalled1);
    signal.addEventListener('abort', ()=>{
        browser.runtime.onInstalled.removeListener(onInstalled1);
    });
};

// EXTERNAL MODULE: ./shared/messages.ts
var messages = __webpack_require__(94299);
;// CONCATENATED MODULE: ./background/tasks/Cancellable/InjectContentScripts.ts



const InjectContentScripts_injectedScriptURL = '/injected-script.js';
const InjectContentScripts_maskSDK_URL = '/mask-sdk.js';
const InjectContentScripts_contentScriptURL = '/generated__content__script.html';
/* harmony default export */ function InjectContentScripts(signal) {
    const injectedScript = fetchUserScript(InjectContentScripts_injectedScriptURL);
    const maskSDK = fetchUserScript(InjectContentScripts_maskSDK_URL);
    const injectContentScript = fetchInjectContentScript(InjectContentScripts_contentScriptURL);
    async function onCommittedListener(arg) {
        if (arg.url === 'about:blank') return;
        if (!arg.url.startsWith('http')) return;
        const contains = await browser.permissions.contains({
            origins: [
                arg.url
            ]
        });
        if (!contains) return;
        /**
         * A `manifest.webextension-shim.json` field is used to declare user scripts.
         */ if (!flags/* Flags.support_declarative_user_script */.vU.support_declarative_user_script) {
            const detail = {
                runAt: 'document_start',
                frameId: arg.frameId
            };
            // #region Injected script
            if (flags/* Flags.has_firefox_xray_vision */.vU.has_firefox_xray_vision) {
                browser.tabs.executeScript(arg.tabId, {
                    ...detail,
                    file: InjectContentScripts_injectedScriptURL
                });
            } else {
                // Refresh the injected script every time in the development mode.
                const code =  false ? 0 : await injectedScript;
                browser.tabs.executeScript(arg.tabId, {
                    ...detail,
                    code
                }).catch(HandleError(arg));
            }
            // #endregion
            // #region Mask SDK
            if (flags/* Flags.mask_SDK_ready */.vU.mask_SDK_ready) {
                const code =  false ? 0 : await maskSDK;
                browser.tabs.executeScript(arg.tabId, {
                    ...detail,
                    code
                }).catch(HandleError(arg));
            }
        // #endregion
        }
        injectContentScript(arg.tabId, arg.frameId).catch(HandleError(arg));
    }
    browser.webNavigation.onCommitted.addListener(onCommittedListener);
    signal.addEventListener('abort', ()=>browser.webNavigation.onCommitted.removeListener(onCommittedListener)
    );
    if (false) {}
};
async function InjectContentScripts_fetchInjectContentScriptList(entryHTML) {
    const contentScripts = [];
    const html = await fetch(entryHTML).then((x)=>x.text()
    );
    // We're not going to use DOMParser because it is not available in MV3.
    Array.from(html.matchAll(/<script src="([\w./-]+)"><\/script>/g)).forEach((script)=>contentScripts.push(new URL(script[1], browser.runtime.getURL('')).pathname)
    );
    const body = html.match(/<body>(.+)<\/body>/)[1];
    body.replace(/<script defer src="/g, '').replace(/><\/script>/g, '').split('"').forEach((script)=>{
        if (!script) return;
        contentScripts.push(new URL(script, browser.runtime.getURL('')).pathname);
    });
    return contentScripts;
}
function fetchInjectContentScript(entryHTML) {
    const contentScripts = InjectContentScripts_fetchInjectContentScriptList(entryHTML);
    return async (tabID, frameId)=>{
        for (const script of (await contentScripts)){
            const option = {
                runAt: 'document_idle',
                frameId,
                file: script
            };
            await browser.tabs.executeScript(tabID, option);
        }
    };
}
async function fetchUserScript(url) {
    try {
        return `{
    const script = document.createElement('script')
    script.innerHTML = ${await fetch(url).then((x)=>x.text()
        ).then((x)=>x.replace('process.env.NODE_ENV', JSON.stringify("production"))
        ).then(JSON.stringify)}
    document.documentElement.appendChild(script)
}`;
    } catch (error) {
        console.error(error);
        return `console.log('User script ${url} failed to load.')`;
    }
}
function HandleError(arg) {
    return (error)=>{
        const ignoredErrorMessages = [
            'non-structured-clonable data',
            'No tab with id'
        ];
        if (ignoredErrorMessages.some((x)=>error.message.includes(x)
        )) {
        // It's okay we don't need the result, happened on Firefox
        } else {
            console.error('Inject error', error.message, arg, ...Object.entries(error));
        }
    };
}

;// CONCATENATED MODULE: ./background/tasks/Cancellable/InjectContentScripts-mv3.ts


/* harmony default export */ function InjectContentScripts_mv3(signal) {
    const injectContentScript = fetchInjectContentScriptList(contentScriptURL);
    // TODO: after we can register a declarative style of MAIN script, we should move to the scripting.registerContentScripts and new MAIN script register API.
    async function onCommittedListener(arg) {
        if (arg.url === 'about:blank') return;
        if (!arg.url.startsWith('http')) return;
        // This option is conflict with MV3.
        if (Flags.support_declarative_user_script) return;
        const contains = await browser.permissions.contains({
            origins: [
                arg.url
            ]
        });
        if (!contains) return;
        chrome.scripting.executeScript({
            files: [
                injectedScriptURL,
                maskSDK_URL
            ],
            target: {
                tabId: arg.tabId,
                frameIds: [
                    arg.frameId
                ]
            },
            world: 'MAIN'
        });
        chrome.scripting.executeScript({
            files: await injectContentScript,
            target: {
                tabId: arg.tabId,
                frameIds: [
                    arg.frameId
                ]
            },
            world: 'ISOLATED'
        });
    }
    browser.webNavigation.onCommitted.addListener(onCommittedListener);
    signal.addEventListener('abort', ()=>browser.webNavigation.onCommitted.removeListener(onCommittedListener)
    );
};

;// CONCATENATED MODULE: ./background/tasks/Cancellable/IsolatedDashboardBridge.ts


let disconnected = false;
/* harmony default export */ function IsolatedDashboardBridge(signal) {
    // Listen to API request from dashboard
    if (false) {}
    signal.addEventListener('abort', ()=>disconnected = true
    );
};

// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(60562);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(96182);
// EXTERNAL MODULE: ./background/database/avatar-cache/db.ts
var avatar_cache_db = __webpack_require__(27440);
;// CONCATENATED MODULE: ./background/database/avatar-cache/cleanup.ts


async function cleanup_cleanAvatarDB(anotherList) {
    const t = createTransaction(await createAvatarDBAccess(), 'readwrite')('avatars', 'metadata');
    const outdated = await queryAvatarOutdatedDB(t, 'lastAccessTime');
    for (const each of outdated){
        anotherList.set(each, undefined);
    }
    await deleteAvatarsDB(t, Array.from(anotherList.keys()));
}

;// CONCATENATED MODULE: ./background/tasks/Cancellable/CleanProfileAndAvatar.ts




async function cleanRelationDB(anotherList) {
    await consistentPersonaDBWriteAccess(async (t)=>{
        for await (const x of t.objectStore('relations')){
            const profileIdentifier = Identifier.fromString(x.value.profile, ProfileIdentifier).unwrap();
            if (anotherList.has(profileIdentifier)) x.delete();
        }
    });
}
async function cleanProfileWithNoLinkedPersona(signal) {
    if (hasNativeAPI) return; // we don't do database house keeping work on mobile
    const timeout = setTimeout(cleanProfileWithNoLinkedPersona, 1000 * 60 * 60 * 24 /** 1 day */ );
    signal.addEventListener('abort', ()=>clearTimeout(timeout)
    );
    const cleanedList = new IdentifierMap(new Map(), ProfileIdentifier);
    const expired = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14 /** days */ );
    await consistentPersonaDBWriteAccess(async (t)=>{
        if (signal.aborted) throw new Error('Abort');
        for await (const x of t.objectStore('profiles')){
            if (x.value.linkedPersona) continue;
            if (expired < x.value.updatedAt) continue;
            const id = Identifier.fromString(x.value.identifier, ProfileIdentifier);
            if (id.ok) cleanedList.set(id.val, undefined);
            await x.delete();
        }
    }, false);
    await cleanAvatarDB(cleanedList);
    await cleanRelationDB(cleanedList);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.2/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(19245);
;// CONCATENATED MODULE: ./background/tasks/Cancellable/NotificationsToMobile.ts



function NotificationsToMobile(signal) {
    if (!native_rpc/* hasNativeAPI */._) return;
    // we don't need response
    const forwardToMobile = (0,full/* notify */.h4)(native_rpc/* nativeAPI.api.notify_visible_detected_profile_changed */.Nz.api.notify_visible_detected_profile_changed);
    shared/* MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.on */.ql.events.Native_visibleSNS_currentDetectedProfileUpdated.on(forwardToMobile, {
        signal
    });
};

;// CONCATENATED MODULE: ./background/tasks/setup.hmr.ts






const setup_hmr_CancelableJobs = [
    NewInstalled_namespaceObject,
     true ? InjectContentScripts_namespaceObject : 0,
    IsolatedDashboardBridge_namespaceObject,
     true ? null : 0,
    NotificationsToMobile_namespaceObject, 
].filter(Boolean);
const setup_hmr_abort = new AbortController();
setup_hmr_CancelableJobs.forEach((task)=>task.default(setup_hmr_abort.signal)
);
if (false) {}

;// CONCATENATED MODULE: ./background/tasks/NotCancellable/PrintBuildFlags.ts
console.log('Build info', {
    NODE_ENV: "production",
    VERSION: "v1.29.12-2348-g181e22679",
    TAG_NAME: "v2.5.0",
    COMMIT_HASH: "181e22679",
    COMMIT_DATE: "2022-06-01T07:46:29.000Z",
    BUILD_DATE: "2022-06-01T07:52:48.068Z",
    REMOTE_URL: "git@github.com:DimensionDev/Maskbook.git",
    BRANCH_NAME: "feat/mobile",
    DIRTY: false,
    TAG_DIRTY: true
});


// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./background/tasks/NotCancellable/DatabaseCleanup/DropOldDatabase.ts


try {
    (0,with_async_ittr/* deleteDB */.Lj)('maskbook-user-groups').catch(noop/* default */.Z);
} catch  {}
try {
    (0,with_async_ittr/* deleteDB */.Lj)('maskbook-people-v2').catch(noop/* default */.Z);
} catch  {}

;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/index.ts


// Add and execute your non-cancelable jobs here. It won't compatible to HMR.



// EXTERNAL MODULE: ./src/utils/debug/general.ts
var general = __webpack_require__(86574);
;// CONCATENATED MODULE: ./src/background-service.ts

 // setup Services.*
 // setup Android and iOS API server
 // setup social network providers
 // start jobs



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

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19245);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.



const SERVICE_HMR_EVENT = 'service-hmr';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.WebExtensionMessage({
    domain: 'services'
});
const log = {
    type: 'pretty',
    requestReplay: "production" === 'development'
};
const Services = {
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(2943), __webpack_require__.e(7691), __webpack_require__.e(7075)]).then(__webpack_require__.bind(__webpack_require__, 67075))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 17865))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 2275))
    , 'Welcome'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 6631).then(__webpack_require__.bind(__webpack_require__, 86631))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(3615)]).then(__webpack_require__.bind(__webpack_require__, 59471))
    , 'Ethereum'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 3996).then(__webpack_require__.bind(__webpack_require__, 3996))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 16862))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 7256).then(__webpack_require__.bind(__webpack_require__, 7256))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(7691), __webpack_require__.e(5114)]).then(__webpack_require__.bind(__webpack_require__, 45114))
, 'ServicesWithProgress', true);
if (false) {}
/**
 * Helper to add a new service to Services.* / ServicesWithProgress.* namespace.
 * @param impl Implementation of the service. Should be things like () => import("./background-script/CryptoService")
 * @param key Name of the service. Used for better debugging.
 * @param generator Is the service is a generator?
 */ function add(impl, key, generator = false) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast);
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    const RPC = generator ? async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc : async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE;
    const load = ()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Services.${key}`, impl, channel)
    ;
    const localImplementation = load();
    // No HMR support in MV3
     true && isBackground && /* unsupported import.meta.webpackHot */ undefined && 0;
    const service = RPC(localImplementation, {
        key,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        log,
        channel,
        preferLocalImplementation: isBackground,
        strict: isBackground,
        thenable: false
    });
    if (isBackground) {
        localImplementation.then((val)=>{
            Reflect.set(globalThis, key + 'Service', val);
            if (isBackground) Reflect.set(Services, key, val);
        });
    } else {
        Reflect.set(globalThis, key + 'Service', service);
        if (isBackground) Reflect.set(Services, key, service);
    }
    return service;
}


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

/***/ 1650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "XO": () => (/* binding */ facebookWorkerBase),
/* harmony export */   "qv": () => (/* binding */ facebookBase)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52222);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);


const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
function isFacebook(ui) {
    return ui.networkIdentifier === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook;
}
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 93505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase),
/* harmony export */   "x": () => (/* binding */ instagramWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9);
    }
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9
};


/***/ }),

/***/ 37732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "x": () => (/* binding */ twitterWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 33060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork),
/* harmony export */   "T": () => (/* binding */ getCurrentIdentifier)
/* harmony export */ });
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37732);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1650);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93505);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79936);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3747);





function getCurrentSNSNetwork(current) {
    const table = {
        [_twitter_com_base__WEBPACK_IMPORTED_MODULE_0__/* .twitterBase.networkIdentifier */ .oQ.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Twitter */ .mv.Twitter,
        [_facebook_com_base__WEBPACK_IMPORTED_MODULE_1__/* .facebookBase.networkIdentifier */ .qv.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Facebook */ .mv.Facebook,
        [_instagram_com_base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase.networkIdentifier */ .j.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Instagram */ .mv.Instagram
    };
    if (current in table) return table[current];
    return _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Unknown */ .mv.Unknown;
}
const getCurrentIdentifier = ()=>{
    const current = _social_network__WEBPACK_IMPORTED_MODULE_4__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.value;
    return _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value.find */ .EJ.profiles.value.find((i)=>i.identifier.equals(current?.identifier)
    ) || _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value[0] */ .EJ.profiles.value[0];
};


/***/ }),

/***/ 57601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "tr": () => (/* binding */ defineSocialNetworkWorker),
/* harmony export */   "zq": () => (/* binding */ definedSocialNetworkWorkers)
/* harmony export */ });
/* unused harmony export activateSocialNetworkUI */
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 10888)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
    ).then(()=>true
    );
}
function defineSocialNetworkUI(UI) {
    if (UI.notReadyForProduction) {
        if (true) return UI;
    }
    definedSocialNetworkUIsLocal.set(UI.networkIdentifier, UI);
    return UI;
}
const definedSocialNetworkWorkers = new Set();
function defineSocialNetworkWorker(worker) {
    if (worker.notReadyForProduction) {
        if (true) return;
    }
    definedSocialNetworkWorkers.add(worker);
}


/***/ }),

/***/ 10888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86574);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68903);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62481);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30821);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80917);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78144);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98541);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33060);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81064);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57601);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6955);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52222);
















const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {},
    collecting: {},
    customization: {},
    configuration: {},
    permission: {
        has: async ()=>false
        ,
        request: async ()=>false
    },
    init: ()=>{
        throw new Error();
    },
    injection: {},
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_14__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
    shouldActivate: ()=>false
    ,
    utils: {
        createPostContext: null
    },
    notReadyForProduction: true,
    declarativePermissions: {
        origins: []
    }
};
let globalUIState = {};
async function activateSocialNetworkUIInner(ui_deferred) {
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    _masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .sharedUINetworkIdentifier.value */ .Xr.value = ui_deferred.networkIdentifier;
    if (ui.customization.sharedComponentOverwrite) {
        _masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .sharedUIComponentOverwrite.value */ .vU.value = ui.customization.sharedComponentOverwrite;
    }
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) {}
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    const state = await ui.init(signal1);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .managedStateCreator */ .MJ)()
    };
    ui.customization.paletteMode?.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    ui.collecting.postsProvider?.start(signal1);
    startPostListener();
    ui.collecting.currentVisitingIdentityProvider?.start(signal1);
    ui.injection.pageInspector?.(signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) ui.injection.toolbox?.(signal1);
    ui.injection.setupPrompt?.(signal1);
    ui.injection.newPostComposition?.start?.(signal1);
    ui.injection.searchResult?.(signal1);
    ui.injection.userBadge?.(signal1);
    ui.injection.profileTab?.(signal1);
    ui.injection.profileTabContent?.(signal1);
    ui.injection.userAvatar?.(signal1);
    ui.injection.profileAvatar?.(signal1);
    ui.injection.profileTip?.(signal1);
    ui.injection.enhancedProfileNFTAvatar?.(signal1);
    ui.injection.openNFTAvatar?.(signal1);
    ui.injection.postAndReplyNFTAvatar?.(signal1);
    ui.injection.avatarClipNFT?.(signal1);
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_8__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_9__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        const personaSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createSubscriptionFromAsync */ .Fd)(_extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _utils__WEBPACK_IMPORTED_MODULE_11__/* .MaskMessages.events.currentPersonaIdentifier.on */ .ql.events.currentPersonaIdentifier.on, signal);
        const empty = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.ValueRef(undefined);
        const lastRecognizedSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .SubscriptionFromValueRef */ .Jf)(ui.collecting.identityProvider?.recognized || empty, signal);
        const currentVisitingSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .SubscriptionFromValueRef */ .Jf)(ui.collecting.currentVisitingIdentityProvider?.recognized || empty, signal);
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return _shared__WEBPACK_IMPORTED_MODULE_3__/* .InMemoryStorages.Plugin.createSubScope */ .uU.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return _shared__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages.Plugin.createSubScope */ ._H.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.signWithPersona */ .ZP.Identity.signWithPersona,
            walletSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign,
            currentPersona: personaSub,
            lastRecognizedProfile: lastRecognizedSub,
            currentVisitingProfile: currentVisitingSub
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .i18NextInstance.addResource */ .BV.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        if (!provider) return;
        provider.start(signal1);
        provider.recognized.addListener((newValue, oldValue)=>{
            if (document.visibilityState === 'hidden') return;
            if (newValue.identifier.equals(oldValue.identifier)) return;
            if (newValue.identifier.isUnknown) return;
            _utils__WEBPACK_IMPORTED_MODULE_11__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier.toText());
        });
        if (provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal1.aborted) return;
                if (id.identifier.isUnknown) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.resolveIdentity */ .ZP.Identity.resolveIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        const posts = ui.collecting.postsProvider?.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            ui.injection.enhancedPostRenderer?.(postSignal, value);
            ui.injection.postInspector?.(postSignal, value);
            ui.injection.postActions?.(postSignal, value);
            ui.injection.commentComposition?.compositionBox(postSignal, value);
            ui.injection.commentComposition?.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                started = true;
                ui.injection.setupWizard?.(signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Identifier.fromString */ .xb.fromString(persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ECKeyIdentifier */ .ob).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_10__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) {}
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 71954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo),
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70001);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74439);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60073);




function UpgradeBackupJSONFile(json, identity) {
    if ((0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .isBackupJSONFileVersion2 */ .GI)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .patchNonBreakingUpgradeForBackupJSONFileVersion2 */ .a6)(json);
    if ((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .isBackupJSONFileVersion1 */ .RV)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .patchNonBreakingUpgradeForBackupJSONFileVersion1 */ .z2)(json));
    if ((0,_version_0__WEBPACK_IMPORTED_MODULE_3__/* .isBackupJSONFileVersion0 */ .m)(json) && identity) {
        const upgraded = (0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .upgradeFromBackupJSONFileVersion0 */ .Bd)(json, identity);
        if (upgraded === null) return null;
        return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)(upgraded);
    }
    return null;
}
function getBackupPreviewInfo(json) {
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: json.plugin?.[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]?.length || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 68558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71954);



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




/***/ }),

/***/ 98541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nw": () => (/* reexport */ CompositionContext/* CompositionContext */.N),
  "KP": () => (/* reexport */ entry_dom/* PluginI18NFieldRender */.KP),
  "je": () => (/* reexport */ entry_dom/* PluginId */.je),
  "eT": () => (/* reexport */ PostInfoProvider),
  "EK": () => (/* reexport */ entry_dom/* createInjectHooksRenderer */.EK),
  "i1": () => (/* reexport */ entry_dom/* registeredPlugins */.i1),
  "D4": () => (/* reexport */ sns_adaptor/* startPluginSNSAdaptor */.D4),
  "Ar": () => (/* reexport */ sns_adaptor/* useActivatedPluginSNSAdaptor_Web3Supported */.Ar),
  "Pz": () => (/* reexport */ sns_adaptor/* useActivatedPluginsSNSAdaptor */.Pz),
  "Cp": () => (/* reexport */ CompositionContext/* useCompositionContext */.C),
  "eS": () => (/* reexport */ entry_dom/* usePluginI18NField */.eS),
  "fI": () => (/* reexport */ entry_dom/* usePluginWrapper */.fI),
  "oQ": () => (/* reexport */ usePostInfo),
  "H9": () => (/* reexport */ usePostInfoDetails)
});

// UNUSED EXPORTS: CurrentSNSNetwork, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPluginIDs, useActivatedPlugin, useActivatedPluginSNSAdaptor, useIsMinimalMode

// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../plugin-infra/src/manager/sns-adaptor.ts
var sns_adaptor = __webpack_require__(56400);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
;// CONCATENATED MODULE: ../plugin-infra/src/PostContext.ts





const Context = (0,react.createContext)(null);
const PostInfoProvider = (0,react.memo)((props)=>{
    return (0,react.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof umd.ValueRef) return (0,shared_base_ui_src/* useValueRef */.E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof src/* ObservableMap */.vP) return (0,shared_base_ui_src/* useObservableValues */.pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof src/* ObservableSet */.n7) return (0,shared_base_ui_src/* useObservableValues */.pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}

// EXTERNAL MODULE: ../plugin-infra/src/CompositionContext.tsx
var CompositionContext = __webpack_require__(26537);
;// CONCATENATED MODULE: ../plugin-infra/src/entry-content-script.ts






/***/ }),

/***/ 67071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "$f": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$f),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.$q),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.FF),
/* harmony export */   "K1": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.K1),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Ne),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.Rm),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.V2),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "as": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i8),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.iv),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "x5": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.x5),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx),
/* harmony export */   "yH": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.yH)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28102);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71354);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17750);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72938);






/***/ }),

/***/ 17750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* reexport safe */ _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__.$),
/* harmony export */   "KP": () => (/* reexport safe */ _useI18N__WEBPACK_IMPORTED_MODULE_7__.K),
/* harmony export */   "Ne": () => (/* reexport safe */ _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   "Rc": () => (/* reexport safe */ _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "eS": () => (/* reexport safe */ _useI18N__WEBPACK_IMPORTED_MODULE_7__.e),
/* harmony export */   "fI": () => (/* reexport safe */ _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__.fI),
/* harmony export */   "yH": () => (/* reexport safe */ _useAvailablePlugins__WEBPACK_IMPORTED_MODULE_4__.y)
/* harmony export */ });
/* harmony import */ var _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9881);
/* harmony import */ var _useActivatedPluginWeb3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82139);
/* harmony import */ var _useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54605);
/* harmony import */ var _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23774);
/* harmony import */ var _useAvailablePlugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15428);
/* harmony import */ var _useLookupDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59282);
/* harmony import */ var _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58700);
/* harmony import */ var _useI18N__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5989);
/* harmony import */ var _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48463);











/***/ }),

/***/ 28102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "$f": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$f),
/* harmony export */   "K1": () => (/* reexport safe */ _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__.K),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "as": () => (/* reexport safe */ _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "x5": () => (/* reexport safe */ _useChainColor__WEBPACK_IMPORTED_MODULE_7__.x),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32393);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49031);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32754);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35807);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39157);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62414);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32668);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38296);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89274);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38527);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50359);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2953);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50657);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40989);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93413);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4315);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65845);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98102);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16103);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(40425);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11103);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69938);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65043);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88241);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18618);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15358);




























/***/ }),

/***/ 32393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29730);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    const { account , wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return  true ? (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallets)?.address ?? '' : 0;
}


/***/ }),

/***/ 38296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);


function useChainColor(pluginID) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Utils?.resolveChainColor?.(chainId) ?? 'transparent';
}


/***/ }),

/***/ 38527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useChainDetailed)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);


function useChainDetailed(pluginID) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Utils?.getChainDetailed?.(chainId) ?? null;
}


/***/ }),

/***/ 89274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32393);



function useChainIdValid(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)(pluginID);
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID);
    const { Utils  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return !account || (Utils?.isChainIdValid?.(chainId, "production" === 'development') ?? false);
}


/***/ }),

/***/ 93413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50657);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72938);



function useNetworkDescriptor(expectedChainIdOrNetworkTypeOrID, expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const pid = expectedPluginID ?? pluginID;
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pid);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pid)?.declareWeb3Networks?.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((expectedChainIdOrNetworkTypeOrID ?? networkType) ?? '')
    );
}


/***/ }),

/***/ 4315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40989);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72938);



function useProviderDescriptor(expectedProviderTypeOrID, expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(expectedPluginID ?? pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(expectedPluginID ?? pluginID)?.declareWeb3Providers?.find((x)=>[
            x.type,
            x.ID
        ].includes((expectedProviderTypeOrID ?? providerType) ?? '')
    );
}


/***/ }),

/***/ 11103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32393);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);


function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)(pluginID);
    const { wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 18618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54605);


function useWeb3State(expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    return (0,_hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginWeb3State */ .G)(expectedPluginID ?? pluginID) ?? {};
}


/***/ }),

/***/ 75151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "P7": () => (/* binding */ LanguageOptions),
/* harmony export */   "iu": () => (/* binding */ SupportedLanguages),
/* harmony export */   "z4": () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony exports Appearance, LaunchPage, NetworkType, ProviderType, FungibleAssetProvider, NonFungibleAssetProvider */
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));
var LaunchPage;
(function(LaunchPage) {
    LaunchPage["facebook"] = "facebook";
    LaunchPage["twitter"] = "twitter";
    LaunchPage["dashboard"] = "dashboard";
})(LaunchPage || (LaunchPage = {}));
var DataProvider;
(function(DataProvider) {
    DataProvider[DataProvider["COIN_GECKO"] = 0] = "COIN_GECKO";
    DataProvider[DataProvider["COIN_MARKET_CAP"] = 1] = "COIN_MARKET_CAP";
    DataProvider[DataProvider["UNISWAP_INFO"] = 2] = "UNISWAP_INFO";
})(DataProvider || (DataProvider = {}));
var TradeProvider;
(function(TradeProvider) {
    TradeProvider[TradeProvider["UNISWAP_V2"] = 0] = "UNISWAP_V2";
    TradeProvider[TradeProvider["ZRX"] = 1] = "ZRX";
    TradeProvider[TradeProvider["SUSHISWAP"] = 2] = "SUSHISWAP";
    TradeProvider[TradeProvider["SASHIMISWAP"] = 3] = "SASHIMISWAP";
    TradeProvider[TradeProvider["BALANCER"] = 4] = "BALANCER";
    TradeProvider[TradeProvider["QUICKSWAP"] = 5] = "QUICKSWAP";
    TradeProvider[TradeProvider["PANCAKESWAP"] = 6] = "PANCAKESWAP";
    TradeProvider[TradeProvider["DODO"] = 7] = "DODO";
    TradeProvider[TradeProvider["UNISWAP_V3"] = 8] = "UNISWAP_V3";
    TradeProvider[TradeProvider["BANCOR"] = 9] = "BANCOR";
    TradeProvider[TradeProvider["OPENOCEAN"] = 10] = "OPENOCEAN";
    TradeProvider[TradeProvider["WANNASWAP"] = 11] = "WANNASWAP";
    TradeProvider[TradeProvider["TRISOLARIS"] = 12] = "TRISOLARIS";
    TradeProvider[TradeProvider["TRADERJOE"] = 13] = "TRADERJOE";
    TradeProvider[TradeProvider["PANGOLIN"] = 14] = "PANGOLIN";
    TradeProvider[TradeProvider["MDEX"] = 15] = "MDEX";
})(TradeProvider || (TradeProvider = {}));
var LanguageOptions;
(function(LanguageOptions) {
    LanguageOptions["__auto__"] = 'auto';
    LanguageOptions["enUS"] = 'en-US';
    LanguageOptions["zhCN"] = 'zh-CN';
    LanguageOptions["zhTW"] = 'zh-TW';
    LanguageOptions["koKR"] = 'ko-KR';
    LanguageOptions["jaJP"] = 'ja-JP';
})(LanguageOptions || (LanguageOptions = {}));
var SupportedLanguages;
(function(SupportedLanguages) {
    SupportedLanguages["enUS"] = 'en-US';
    SupportedLanguages["zhCN"] = 'zh-CN';
    SupportedLanguages["zhTW"] = 'zh-TW';
    SupportedLanguages["koKR"] = 'ko-KR';
    SupportedLanguages["jaJP"] = 'ja-JP';
})(SupportedLanguages || (SupportedLanguages = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 21902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pv": () => (/* reexport */ useObservableMapSet/* useObservableValues */.p),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: createGlobalState, useValueRefDelayed

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
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

// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useObservableMapSet.ts
var useObservableMapSet = __webpack_require__(44619);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(18441);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useScrollBottomEvent.ts
var useScrollBottomEvent = __webpack_require__(20955);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/createGlobalState.ts
var createGlobalState = __webpack_require__(20871);
;// CONCATENATED MODULE: ../shared-base-ui/src/hooks/index.ts







/***/ }),

/***/ 44619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66040);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);



function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                return map.event.on(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(subscription);
}


/***/ }),

/***/ 18441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        })
    , [
        onUpdateByRemote,
        event1,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 78144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "WF": () => (/* reexport */ Shared/* CrossIsolationMessages */.W),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ type/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "rP": () => (/* reexport */ Pure/* EMPTY_LIST */.r),
  "Jk": () => (/* reexport */ Site_type/* EnhanceableSite */.J),
  "xI": () => (/* reexport */ type/* GroupIdentifier */.xI),
  "xb": () => (/* reexport */ type/* Identifier */.xb),
  "qD": () => (/* reexport */ IdentifierMap/* IdentifierMap */.q),
  "BU": () => (/* reexport */ NextID_type/* NextIDAction */.B),
  "Vd": () => (/* reexport */ NextID_type/* NextIDPlatform */.V),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ Routes/* PopupRoutes */.mZ),
  "bb": () => (/* reexport */ type/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ type/* PostIdentifier */._P),
  "WO": () => (/* reexport */ type/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Y_": () => (/* reexport */ subscription/* SubscriptionDebug */.Y_),
  "Jf": () => (/* reexport */ subscription/* SubscriptionFromValueRef */.Jf),
  "ps": () => (/* reexport */ Results/* andThenAsync */.ps),
  "f1": () => (/* reexport */ src_crypto/* compressSecp256k1KeyRaw */.xb),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "qY": () => (/* reexport */ subscription/* createConstantSubscription */.qY),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ subscription/* createSubscriptionFromAsync */.Fd),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "Yj": () => (/* reexport */ src_crypto/* decompressSecp256k1KeyRaw */.Yj),
  "pf": () => (/* reexport */ src_crypto/* decompressSecp256k1Point */.pf),
  "Nb": () => (/* reexport */ personas/* formatPersonaFingerprint */.N),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation/* getLocalImplementation */.B),
  "kO": () => (/* reexport */ getLocalImplementation/* getLocalImplementationExotic */.k),
  "BV": () => (/* reexport */ i18n/* i18NextInstance */.BV),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ subscription/* mapSubscription */.S3),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "s_": () => (/* reexport */ pollingTask/* pollingTask */.s),
  "tr": () => (/* reexport */ serializer/* registerSerializableClass */.tr),
  "GM": () => (/* reexport */ serializer/* serializer */.GM),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC),
  "BF": () => (/* reexport */ i18n/* updateLanguage */.BF)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, EMPTY_OBJECT, ExtensionSite, MAX_PERSONA_LIMIT, PayloadVersions, PersonaIdentifier, ReadonlyIdentifierMap, ValueRefFromSubscription, __DEBUG__ONLY__enableCryptoKeySerialization, compressSecp256k1Key, relativeRouteOf, removed

// EXTERNAL MODULE: ../shared-base/src/serializer/index.ts
var serializer = __webpack_require__(91131);
// EXTERNAL MODULE: ../shared-base/src/Identifier/IdentifierMap.ts
var IdentifierMap = __webpack_require__(93731);
// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(33821);
// EXTERNAL MODULE: ../shared-base/src/MaskPayload/index.ts
var MaskPayload = __webpack_require__(43550);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(57589);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts + 1 modules
var i18n = __webpack_require__(37820);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(75990);
// EXTERNAL MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
var getLocalImplementation = __webpack_require__(97825);
// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(72610);
// EXTERNAL MODULE: ../shared-base/src/utils/pollingTask.ts
var pollingTask = __webpack_require__(16746);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(16280);
// EXTERNAL MODULE: ../shared-base/src/utils/subscription.ts
var subscription = __webpack_require__(40613);
// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(20449);
// EXTERNAL MODULE: ../shared-base/src/utils/personas.ts
var personas = __webpack_require__(68433);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts









// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(66052);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(68149);
// EXTERNAL MODULE: ../shared-base/src/Pure/index.ts
var Pure = __webpack_require__(3494);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(42703);
// EXTERNAL MODULE: ../shared-base/src/Site/type.ts
var Site_type = __webpack_require__(77907);
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(1174);
// EXTERNAL MODULE: ../shared-base/src/Messages/Shared.ts
var Shared = __webpack_require__(85562);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(33067);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(59041);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var NextID_type = __webpack_require__(27897);
;// CONCATENATED MODULE: ../shared-base/src/index.ts






















/***/ }),

/***/ 40547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60147);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95878);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);



react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .I18nextProvider */ .a;


/***/ }),

/***/ 13111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67071);



const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address , pluginId , domainSize , size =5  })=>{
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$q)(address, pluginId);
    const { Utils  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .dM)(pluginId);
    if (!domain || !Utils?.formatDomainName) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils?.formatAddress?.(address, size) ?? address
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils.formatDomainName(domain, domainSize)
    });
});


/***/ }),

/***/ 44459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ OPENSEA_ID),
/* harmony export */   "QE": () => (/* binding */ TWITTER_ID),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "l9": () => (/* binding */ INSTAGRAM_ID),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports FACEBOOK_ID, SOCIAL_MEDIA_ICON_MAPPING, MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17946);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63997);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45227);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5795);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65651);


const MINDS_ID = 'minds.com';
const FACEBOOK_ID = 'facebook.com';
const TWITTER_ID = 'twitter.com';
const INSTAGRAM_ID = 'instagram.com';
const OPENSEA_ID = 'opensea.io';
const SOCIAL_MEDIA_ICON_MAPPING = {
    [TWITTER_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .TwitterColoredIcon */ .g, {}),
    [FACEBOOK_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookColoredIcon */ .W, {}),
    [MINDS_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .MindsIcon */ .G, {}),
    [INSTAGRAM_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .InstagramColoredIcon */ .$, {}),
    [OPENSEA_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .OpenSeaColoredIcon */ .w, {})
};
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;


/***/ }),

/***/ 74517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40915);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70070);



const SharedContextProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_evm__WEBPACK_IMPORTED_MODULE_2__/* .EvmSharedUIProvider */ .QQ, {
            children: children
        })
    });
};


/***/ }),

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(93854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(30397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(17282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(29889);
// EXTERNAL MODULE: ../shared/src/contexts/base/index.ts + 1 modules
var base = __webpack_require__(40915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(23485);
;// CONCATENATED MODULE: ../shared/src/contexts/components/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/InjectedDialog.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { clean  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: clean ? {
            width: 'auto',
            backgroundImage: 'none'
        } : {}
    })
);
function InjectedDialog(props) {
    const snsId = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUINetworkIdentifier */.Xr);
    const overwrite = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUIComponentOverwrite */.vU);
    props = overwrite.InjectedDialog?.props?.(props) ?? props;
    const clean = snsId === src/* EnhanceableSite.Minds */.Jk.Minds || snsId === src/* EnhanceableSite.Facebook */.Jk.Facebook;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,entry/* useStylesExtends */.Bc)(useStyles({
        clean
    }), props, overwrite.InjectedDialog?.classes);
    const t = (0,locales/* useSharedI18N */.B)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , titleTail =null , disableTitleBorder , ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,entry/* useDialogStackActor */.tE)(open);
    return (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose?.();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_base_ui_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                titleTail
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        })
    );
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>child?.type === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,entry/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null
    ) || []).filter(Boolean);
}


/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BV": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.BV),
/* harmony export */   "B_": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "Df": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.Df),
/* harmony export */   "Fl": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.Fl),
/* harmony export */   "IR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.IR),
/* harmony export */   "Kv": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.Kv),
/* harmony export */   "QE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.QE),
/* harmony export */   "QL": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.QL),
/* harmony export */   "T1": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.T1),
/* harmony export */   "T3": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.T3),
/* harmony export */   "Tv": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.Tv),
/* harmony export */   "XB": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.XB),
/* harmony export */   "Xr": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.Xr),
/* harmony export */   "bO": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.bO),
/* harmony export */   "fN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.fN),
/* harmony export */   "iD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.iD),
/* harmony export */   "il": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.il),
/* harmony export */   "l9": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.l9),
/* harmony export */   "n2": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.n2),
/* harmony export */   "o": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.o),
/* harmony export */   "p6": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.p6),
/* harmony export */   "qy": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.qy),
/* harmony export */   "s_": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.s_),
/* harmony export */   "u0": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.u0),
/* harmony export */   "vU": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.vU),
/* harmony export */   "xR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.xR),
/* harmony export */   "xl": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.xl),
/* harmony export */   "yC": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.yC),
/* harmony export */   "yQ": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.yQ)
/* harmony export */ });
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24723);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47745);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35070);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16961);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29889);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9555);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44459);









/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskColorVar),
/* harmony export */   "n": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94919);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
const MaskColorVar = new Proxy({
    __proto__: null
}, {
    get (target, key) {
        if (target[key]) return target[key];
        if (typeof key !== 'string') throw new TypeError();
        const cssVar = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
        target[key] = (defaultValue)=>{
            // it might be an object when used in styled components.
            if (typeof defaultValue !== 'string') defaultValue = undefined;
            const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
            return x;
        };
        target[key][Symbol.toPrimitive] = ()=>`var(--mask-${cssVar})`
        ;
        target[key].alpha = (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
        ;
        return target[key];
    }
});


/***/ }),

/***/ 44352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "yu": () => (/* reexport */ DialogStack/* DialogStackingProvider */.y),
  "pL": () => (/* reexport */ FolderTabs/* FolderTabPanel */.p),
  "Jc": () => (/* reexport */ FolderTabs/* FolderTabs */.J),
  "Df": () => (/* reexport */ Dialog/* MaskDialog */.D),
  "b4": () => (/* reexport */ LoadingButton/* MaskLoadingButton */.b),
  "FU": () => (/* reexport */ TextField/* MaskTextField */.F),
  "xV": () => (/* reexport */ SearchableList/* SearchableList */.x),
  "wT": () => (/* reexport */ Snackbar/* SnackbarProvider */.wT),
  "Ii": () => (/* reexport */ Snackbar/* useCustomSnackbar */.Ii),
  "tE": () => (/* reexport */ DialogStack/* useDialogStackActor */.t)
});

// UNUSED EXPORTS: ButtonGroupTabList, ButtonTab, CountdownButton, CustomSnackbarContent, CustomSnackbarProvider, MaskDialogTitle, MaskSearchableItemInList, PhoneNumberField, SendingCodeField, useMaskDialog, useSnackbar

// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(53637);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(22581);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(57208);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(9183);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(33058);
// EXTERNAL MODULE: ../theme/src/Components/Snackbar/index.tsx
var Snackbar = __webpack_require__(99685);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(68897);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(27381);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(98408);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(68393);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(68381);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(4744);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts












/***/ }),

/***/ 13888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39688);

/* eslint-disable react-hooks/rules-of-hooks */ 

let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init) {
    if (mountingShadowRoot) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .PreventEventPropagationListContext */ .gt);
    const { container: container1  } = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = PortalShadowRoot();
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = '';
        const shadow = root.attachShadow({
            mode: 'open'
        });
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, stop, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheets.map((x)=>x.addContainer(shadow)
        );
        // This is proved to be important to the correct portal orders...
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return {
            container
        };
    });
    return renderer(container1);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 82502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.d_),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69378);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13888);
/* harmony import */ var _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11432);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39688);






/***/ }),

/***/ 68350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* reexport */ Appearance),
  "R_": () => (/* reexport */ Provider/* MaskThemeProvider */.R)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme

;// CONCATENATED MODULE: ../theme/src/Theme/types.ts
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));

// EXTERNAL MODULE: ../theme/src/Theme/Provider.tsx
var Provider = __webpack_require__(76584);
// EXTERNAL MODULE: ../theme/src/Theme/theme.ts
var theme = __webpack_require__(3482);
;// CONCATENATED MODULE: ../theme/src/Theme/index.ts





/***/ }),

/***/ 81242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "F4": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_1__.F4),
/* harmony export */   "I3": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.I3),
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.Q),
/* harmony export */   "R_": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.US),
/* harmony export */   "ZL": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.d_),
/* harmony export */   "lu": () => (/* binding */ parseColor),
/* harmony export */   "nb": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.nb),
/* harmony export */   "um": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "zV": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ze)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13442);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89567);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36972);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68350);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82502);
/// <reference path="./extended.d.ts" />
// Some re-exports

const parseColor = (tinycolor2__WEBPACK_IMPORTED_MODULE_0___default());

//






/***/ }),

/***/ 30232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "Df": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Df),
/* harmony export */   "F4": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.F4),
/* harmony export */   "FU": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.FU),
/* harmony export */   "Ii": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "Q": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "R_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.US),
/* harmony export */   "YE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_6__.Y),
/* harmony export */   "ZL": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "b4": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.b4),
/* harmony export */   "d_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.d_),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "lu": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.lu),
/* harmony export */   "nb": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.nb),
/* harmony export */   "pL": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.pL),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper),
/* harmony export */   "tE": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.tE),
/* harmony export */   "um": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "wT": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.xV),
/* harmony export */   "yu": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.yu),
/* harmony export */   "zV": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ze)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38090);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47205);
/* harmony import */ var _ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13888);
/* harmony import */ var _entry_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81242);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44352);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45548);
/// <reference path="./extended.d.ts" />


const ShadowRootTooltip = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);





/***/ }),

/***/ 55678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "QN": () => (/* binding */ resolveOpenSeaLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "YU": () => (/* binding */ resolveProviderInjectedKey),
/* harmony export */   "Yx": () => (/* binding */ resolveIPFSLinkFromURL),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "dC": () => (/* binding */ resolveProviderShortenLink),
/* harmony export */   "hX": () => (/* binding */ resolveProviderDownloadLink),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "r_": () => (/* binding */ resolveChainFullName),
/* harmony export */   "sJ": () => (/* binding */ resolveDomainLink),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer)
/* harmony export */ });
/* unused harmony exports resolveNetworkAddressPrefix, resolveCollectibleProviderLink, resolveCollectibleAssetLink */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36803);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80526);




const resolveProviderName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask Network',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'MetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'WalletConnect',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'CustomNetwork',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Coinbase',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'MathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic'
}, 'Unknown Network');
const resolveProviderShortenLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'Metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'Walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'Website',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'Mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic.com'
}, 'website');
const resolveProviderHomeLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'https://walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'https://fortmatic.com'
}, '');
const resolveProviderDownloadLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io/download-links',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io/download.html',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98insights.com/introduction-to-coin98-wallet-extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://wallet.coinbase.com/',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org/en-us/#extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveProviderInjectedKey = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'isMaskWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'isMetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'isMathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'isCoin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'isWalletLink',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveNetworkAddressPrefix = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'binance',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xdai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'conflux'
}, 'ethereum');
const resolveNetworkName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'Ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'Binance Smart Chain',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'Polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xDai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'Avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'Celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'Fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'Conflux'
}, 'Unknown');
function resolveChainName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.name ?? 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.fullName ?? 'Unknown';
}
const resolveChainColor = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]: 'rgb(28, 104, 243)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Ropsten */ .a_.Ropsten]: 'rgb(255, 65, 130)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Kovan */ .a_.Kovan]: 'rgb(133, 89,255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby]: 'rgb(133, 89, 255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Gorli */ .a_.Gorli]: 'rgb(48, 153, 242)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSCT */ .a_.BSCT]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]: 'rgb(119, 62, 225)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mumbai */ .a_.Mumbai]: 'rgb(130, 71, 229)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum */ .a_.Arbitrum]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.xDai */ .a_.xDai]: 'rgb(73, 169, 166)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche */ .a_.Avalanche]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Celo */ .a_.Celo]: 'rgb(53, 208, 127)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Fantom */ .a_.Fantom]: 'rgb(19, 181, 236)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora */ .a_.Aurora]: 'rgb(112, 212, 74)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Conflux */ .a_.Conflux]: 'rgb(24, 163, 138)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: 'rgb(112, 212, 74)'
}, 'rgb(214, 217, 220)');
function resolveLinkOnExplorer(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    return chainDetailed.explorers?.[0]?.url ?? chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
// TODO check ipfs inside before resolving
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs
    });
}
function resolveIPFSLinkFromURL(url) {
    if (!url.startsWith('ipfs://')) return url;
    return resolveIPFSLink(url.replace(/^ipfs:\/\/(ipfs\/)?/, ''));
}
function resolveDomainLink(domain) {
    if (!domain) return '';
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://app.ens.domains/name/:domain/details', {
        domain
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case NonFungibleAssetProvider.OPENSEA:
            if (chainId === ChainId.Rinkeby) return 'https://testnets.opensea.io';
            return 'https://opensea.io';
        case NonFungibleAssetProvider.RARIBLE:
            return 'https://rarible.com';
        case NonFungibleAssetProvider.NFTSCAN:
            return 'https://nftscan.com';
        case NonFungibleAssetProvider.ZORA:
            return 'https://zora.co';
        default:
            unreachable(provider);
    }
}
function resolveCollectibleAssetLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby) return 'https://testnets.opensea.io/assets';
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic) return 'https://opensea.io/assets/matic';
            return 'https://opensea.io/assets';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveCollectibleAssetLink(chainId, provider), '/:address/:tokenId', {
                address,
                tokenId
            });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveOpenSeaLink(address, tokenId) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://opensea.io/assets/:address/:tokenId', {
        address,
        tokenId
    });
}


/***/ }),

/***/ 28807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VJ": () => (/* reexport */ abortSignalTimeout/* abortSignalTimeout */.V),
  "Cq": () => (/* reexport */ typescript/* assertNonNull */.Cq),
  "n5": () => (/* reexport */ blob/* blobToDataURL */.n),
  "dq": () => (/* reexport */ combineAbortSignal/* combineAbortSignal */.d),
  "v_": () => (/* reexport */ ecmascript/* concatArrayBuffer */.v_),
  "xe": () => (/* reexport */ encode_text_arraybuffer/* decodeArrayBuffer */.xe),
  "rj": () => (/* reexport */ encode_text_arraybuffer/* decodeText */.rj),
  "PQ": () => (/* reexport */ ecmascript/* defer */.PQ),
  "gw": () => (/* reexport */ delay/* delay */.g),
  "ll": () => (/* reexport */ encode_text_arraybuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ encode_text_arraybuffer/* encodeText */.YT),
  "ky": () => (/* reexport */ media/* findAvailableImageURL */.ky),
  "sS": () => (/* reexport */ media/* formatFileSize */.sS),
  "Yl": () => (/* reexport */ typescript/* getEnumAsArray */.Yl),
  "J3": () => (/* reexport */ ecmascript/* memoizePromise */.J3),
  "P": () => (/* reexport */ typescript/* safeUnreachable */.P),
  "Vs": () => (/* reexport */ timeout/* timeout */.V),
  "t1": () => (/* reexport */ typescript/* unreachable */.t1),
  "uL": () => (/* reexport */ document_readyState/* waitDocumentReadyState */.u)
});

// UNUSED EXPORTS: blobToText, detectAudioSupport, detectImageSupport, detectVideoSupport, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, isNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/ecmascript/index.js + 3 modules
var ecmascript = __webpack_require__(20785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/media/index.js + 3 modules
var media = __webpack_require__(78183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/typescript/index.js
var typescript = __webpack_require__(47855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/abortSignalTimeout.js
var abortSignalTimeout = __webpack_require__(47162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/blob.js
var blob = __webpack_require__(89810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(26998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/delay.js
var delay = __webpack_require__(89086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(78827);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/encode-text-arraybuffer.js
var encode_text_arraybuffer = __webpack_require__(32291);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/timeout.js
var timeout = __webpack_require__(50579);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js




//# sourceMappingURL=index.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1528":"npm-ns.stablelib.ed25519","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6813":"npm-ns.portto.sdk","6912":"npm.react-draggable","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 3352;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("webpack", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3352: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loader fallback */
/******/ 	(() => {
/******/ 		  const isModern = !!(() => {
/******/ 		    try {
/******/ 		      if (typeof browser.runtime.getURL === 'function') return true
/******/ 		    } catch (err) { }
/******/ 		  })()
/******/ 		  const runtime = isModern ? browser : chrome
/******/ 		  runtime.runtime.onMessage.addListener((message, sender, sendResponse) => {
/******/ 		    const cond = message && message.type === 'WTW_INJECT' && sender && sender.tab && sender.tab.id != null
/******/ 		    if (!cond) return
/******/ 		    let file = message.file
/******/ 		    try {
/******/ 		      file = new URL(file).pathname
/******/ 		    } catch {}
/******/ 		    if (!file) return
/******/ 		    const details = { frameId: sender.frameId, file }
/******/ 		    if (runtime.scripting) {
/******/ 		      runtime.scripting
/******/ 		        .executeScript({
/******/ 		          target: { tabId: sender.tab.id },
/******/ 		          files: [file],
/******/ 		        })
/******/ 		        .then(sendResponse)
/******/ 		    } else {
/******/ 		      if (isModern) {
/******/ 		        runtime.tabs.executeScript(sender.tab.id, details).then(sendResponse)
/******/ 		      } else {
/******/ 		        runtime.tabs.executeScript(sender.tab.id, details, sendResponse)
/******/ 		      }
/******/ 		    }
/******/ 		    return true
/******/ 		  })
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,5161,5954,6878,8100,7358,6645], () => (__webpack_require__(6257)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,5161,5954,6878,8100,7358,6645], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;