/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ 74702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ indexedDB_KVStorageBackend),
/* harmony export */   "c": () => (/* binding */ inMemory_KVStorageBackend)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94670);


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

/***/ 25683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29130);



const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventOnMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: '',
        schema: 1,
        chainId: 1,
        pluginId: ''
    })
};
const ApplicationEntryUnlistedListKey = 'application_entry_unlisted_list';
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {}),
    Settings: createPersistentKVStorage('settings', {
        debugging: false
    }),
    ApplicationEntryUnListedList: createPersistentKVStorage(ApplicationEntryUnlistedListKey, {
        current: {
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.RedPacket */ .je.RedPacket]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.FileService */ .je.FileService]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.ITO */ .je.ITO]: false,
            [`${_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.ITO */ .je.ITO}_claim`]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.CrossChainBridge */ .je.CrossChainBridge]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.MaskBox */ .je.MaskBox]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Savings */ .je.Savings]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Avatar */ .je.Avatar]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Trader */ .je.Trader]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Tips */ .je.Tips]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Transak */ .je.Transak]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Pets */ .je.Pets]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.FindTruman */ .je.FindTruman]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.GoPlusSecurity */ .je.GoPlusSecurity]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Referral */ .je.Referral]: false
        }
    })
};


/***/ }),

/***/ 10126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ defineSiteAdaptor),
/* harmony export */   "t": () => (/* binding */ definedSiteAdaptors)
/* harmony export */ });
const defined = new Map();
const definedSiteAdaptors = defined;
function defineSiteAdaptor(UI) {
    defined.set(UI.networkIdentifier, UI);
}


/***/ }),

/***/ 12624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ FacebookAdaptor)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10126);



if (false) {}
const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const FacebookAdaptor = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.facebook.com',
    getProfilePage: ()=>new URL('https://www.facebook.com')
    ,
    getShareLinkURL (message) {
        const url = urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://www.facebook.com/sharer/sharer.php', {
            quote: message,
            u: 'mask.io'
        });
        return new URL(url);
    }
};
(0,_definitions__WEBPACK_IMPORTED_MODULE_2__/* .defineSiteAdaptor */ .$)(FacebookAdaptor);


/***/ }),

/***/ 75630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ MindsAdaptor)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10126);



if (false) {}
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const MindsAdaptor = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .Jk.Minds,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.minds.com',
    getProfilePage: ()=>new URL('https://www.minds.com')
    ,
    getShareLinkURL (message) {
        const url = urlcat__WEBPACK_IMPORTED_MODULE_1___default()('https://www.minds.com/newsfeed/subscriptions', {
            intentUrl: message
        });
        return new URL(url);
    }
};
(0,_definitions__WEBPACK_IMPORTED_MODULE_2__/* .defineSiteAdaptor */ .$)(MindsAdaptor);


/***/ }),

/***/ 94926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ TwitterAdaptor)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10126);



if (false) {}
const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const TwitterAdaptor = {
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter,
    declarativePermissions: {
        origins
    },
    homepage: 'https://twitter.com',
    getProfilePage: (userId)=>new URL(`https://twitter.com/${userId.userId}`)
    ,
    getShareLinkURL (message) {
        const url = urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://twitter.com/intent/tweet', {
            text: message
        });
        return new URL(url);
    }
};
(0,_definitions__WEBPACK_IMPORTED_MODULE_2__/* .defineSiteAdaptor */ .$)(TwitterAdaptor);


/***/ }),

/***/ 98498:
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
var kv_storage = __webpack_require__(25683);
// EXTERNAL MODULE: ./background/database/kv-storage.ts
var database_kv_storage = __webpack_require__(74702);
// EXTERNAL MODULE: ./shared/site-adaptors/implementations/facebook.com.ts
var facebook_com = __webpack_require__(12624);
// EXTERNAL MODULE: ./shared/site-adaptors/implementations/twitter.com.ts
var twitter_com = __webpack_require__(94926);
// EXTERNAL MODULE: ./shared/site-adaptors/implementations/minds.com.ts
var minds_com = __webpack_require__(75630);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./shared/site-adaptors/definitions.ts
var definitions = __webpack_require__(10126);
;// CONCATENATED MODULE: ./shared/site-adaptors/implementations/instagram.com.ts


if (false) {}
const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const InstagramAdaptor = {
    networkIdentifier: src/* EnhanceableSite.Instagram */.Jk.Instagram,
    declarativePermissions: {
        origins
    },
    homepage: 'https://www.instagram.com/',
    getProfilePage: ()=>new URL('https://www.instagram.com/')
    ,
    getShareLinkURL: null
};
(0,definitions/* defineSiteAdaptor */.$)(InstagramAdaptor);

;// CONCATENATED MODULE: ./shared/site-adaptors/index.ts
if (false) {}



 // add opensea

;// CONCATENATED MODULE: ./background/setup.ts




polyfill();
(0,kv_storage/* setupMaskKVStorageBackend */.$e)(database_kv_storage/* indexedDB_KVStorageBackend */.E, database_kv_storage/* inMemory_KVStorageBackend */.c);

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(76536);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(14048);
// EXTERNAL MODULE: ../plugin-infra/src/entry-background-worker.ts + 1 modules
var entry_background_worker = __webpack_require__(77031);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts + 1 modules
var openDB = __webpack_require__(55989);
;// CONCATENATED MODULE: ./background/database/plugin-db/base.ts


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
/** @internal */ function pluginDataHasValidKeyPath(value) {
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

;// CONCATENATED MODULE: ./background/database/plugin-db/wrap-plugin-database.ts

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

;// CONCATENATED MODULE: ./background/database/plugin-db/index.ts



// EXTERNAL MODULE: ./src/plugin-infra/host.ts + 35 modules
var host = __webpack_require__(22180);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/StartPluginWorker.ts



/* harmony default export */ function StartPluginWorker(signal) {
    (0,entry_background_worker/* startPluginWorker */.Ht)((0,host/* createPluginHost */.R)(signal, createWorkerContext));
};
function createWorkerContext(pluginID, signal) {
    let storage = undefined;
    return {
        ...(0,host/* createSharedContext */.y)(pluginID, signal),
        getDatabaseStorage () {
            return storage || (storage = createPluginDatabase(pluginID, signal));
        }
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
;// CONCATENATED MODULE: ./src/settings/listener.ts

function ToBeListened() {
    return {
        appearanceSettings: settings/* appearanceSettings */.OF,
        pluginIDSettings: settings/* pluginIDSettings */.tR,
        languageSettings: settings/* languageSettings */.pQ,
        currentPersonaIdentifier: settings/* currentPersonaIdentifier */.cn
    };
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/background-script/Jobs/SettingListeners.ts



/* harmony default export */ function SettingListeners(signal) {
    if (!(0,umd.isEnvironment)(umd.Environment.ManifestBackground)) return;
    const listeners = ToBeListened();
    const keys = Object.keys(listeners);
    for (const key of keys){
        signal.addEventListener('abort', listeners[key].addListener((data)=>utils/* MaskMessages.events */.ql.events[key].sendToAll(data)
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
var flags = __webpack_require__(39820);
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
var messages = __webpack_require__(29130);
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
var persona_db = __webpack_require__(28511);
// EXTERNAL MODULE: ./background/database/avatar-cache/db.ts
var avatar_cache_db = __webpack_require__(59017);
;// CONCATENATED MODULE: ./background/database/avatar-cache/cleanup.ts


async function cleanup_cleanAvatarDB(anotherList) {
    const t = createTransaction(await createAvatarDBAccess(), 'readwrite')('avatars', 'metadata');
    const outdated = await queryAvatarOutdatedDB(t, 'lastAccessTime');
    for (const each of outdated){
        anotherList.add(each);
    }
    await deleteAvatarsDB(t, Array.from(anotherList.keys()));
}

;// CONCATENATED MODULE: ./background/tasks/Cancellable/CleanProfileAndAvatar.ts




async function cleanRelationDB(anotherList) {
    await consistentPersonaDBWriteAccess(async (t)=>{
        for await (const x of t.objectStore('relations')){
            const profileIdentifier = ProfileIdentifier.from(x.value.profile).unwrap();
            if (anotherList.has(profileIdentifier)) x.delete();
        }
    });
}
async function cleanProfileWithNoLinkedPersona(signal) {
    if (hasNativeAPI) return; // we don't do database house keeping work on mobile
    const timeout = setTimeout(cleanProfileWithNoLinkedPersona, 1000 * 60 * 60 * 24 /** 1 day */ );
    signal.addEventListener('abort', ()=>clearTimeout(timeout)
    );
    const cleanedList = new Set();
    const expired = new Date(Date.now() - 1000 * 60 * 60 * 24 * 14 /** days */ );
    await consistentPersonaDBWriteAccess(async (t)=>{
        if (signal.aborted) throw new Error('Abort');
        for await (const x of t.objectStore('profiles')){
            if (x.value.linkedPersona) continue;
            if (expired < x.value.updatedAt) continue;
            const id = ProfileIdentifier.from(x.value.identifier);
            if (id.some) cleanedList.add(id.val);
            await x.delete();
        }
    }, false);
    await cleanAvatarDB(cleanedList);
    await cleanRelationDB(cleanedList);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.1.0/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(17889);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ./background/services/helper/deprecated-storage.ts
var deprecated_storage = __webpack_require__(54494);
// EXTERNAL MODULE: ./background/services/identity/index.ts + 14 modules
var identity = __webpack_require__(61950);
;// CONCATENATED MODULE: ./background/tasks/Cancellable/NotificationsToMobile.ts





function NotificationsToMobile(signal) {
    if (!native_rpc/* hasNativeAPI */._) return;
    // we don't need response
    const forwardToMobile = (0,full/* notify */.h4)(native_rpc/* nativeAPI.api.notify_visible_detected_profile_changed */.Nz.api.notify_visible_detected_profile_changed);
    shared/* MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.on */.ql.events.Native_visibleSNS_currentDetectedProfileUpdated.on((x)=>forwardToMobile(x.toText())
    , {
        signal
    });
    // Persona notification
    shared/* MaskMessages.events.ownPersonaChanged.on */.ql.events.ownPersonaChanged.on(async ()=>{
        const personas = await (0,identity.queryOwnedPersonaInformation)(true);
        await (0,deprecated_storage/* __deprecated__setStorage */.X)('mobileIsMyPersonasInitialized', personas.length > 0);
    }, {
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
    VERSION: "v1.29.12-2649-g196eec807-dirty",
    TAG_NAME: "v2.5.0",
    COMMIT_HASH: "196eec807",
    COMMIT_DATE: "2022-06-24T01:16:36.000Z",
    BUILD_DATE: "2022-06-27T08:57:48.276Z",
    REMOTE_URL: "https://github.com/DimensionDev/Maskbook.git",
    BRANCH_NAME: "feat/migrationToMobile",
    DIRTY: true,
    TAG_DIRTY: true
});


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
var general = __webpack_require__(27716);
// EXTERNAL MODULE: ./shared-ui/locales/languages.ts + 6 modules
var languages = __webpack_require__(59146);
;// CONCATENATED MODULE: ./src/background-service.ts

 // setup Services.*
 // setup Android and iOS API server
 // setup social network providers
 // start jobs

// ! We should gradually stop using i18n in the background


(0,languages/* addMaskI18N */.U)(src/* i18NextInstance */.BV);


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

/***/ 20940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs)
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
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 58248)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
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

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext),
/* harmony export */   "N": () => (/* binding */ CompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 86843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails),
/* harmony export */   "eT": () => (/* binding */ PostInfoProvider),
/* harmony export */   "oQ": () => (/* binding */ usePostInfo)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14257);





const Context = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const PostInfoProvider = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
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
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableMap */ .vP) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableSet */ .n7) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_3__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}


/***/ }),

/***/ 77031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Je": () => (/* reexport */ activatedPluginsWorker),
  "fg": () => (/* reexport */ entry/* registeredPluginIDs */.fg),
  "Ht": () => (/* reexport */ startPluginWorker)
});

// UNUSED EXPORTS: CurrentSNSNetwork, PluginId, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPlugins

// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(70226);
// EXTERNAL MODULE: ../plugin-infra/src/manager/manage.ts
var manage = __webpack_require__(32670);
;// CONCATENATED MODULE: ../plugin-infra/src/manager/worker.ts

const { startDaemon , activated  } = (0,manage/* createManager */.m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;

;// CONCATENATED MODULE: ../plugin-infra/src/entry-background-worker.ts




/***/ }),

/***/ 50719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cp": () => (/* reexport */ web3_state/* AddressBookState */.Cp),
  "oD": () => (/* reexport */ web3_state/* BalanceNotifierState */.oD),
  "BS": () => (/* reexport */ web3_state/* BlockNumberNotifierState */.BS),
  "em": () => (/* reexport */ web3_state/* ConnectionState */.em),
  "xH": () => (/* reexport */ web3_state/* HubState */.xH),
  "OC": () => (/* reexport */ web3_state/* IdentityServiceState */.OC),
  "Te": () => (/* reexport */ web3_state/* NameServiceState */.Te),
  "CS": () => (/* reexport */ web3_state/* OthersState */.CS),
  "$8": () => (/* reexport */ Context/* PluginsWeb3ContextProvider */.$8),
  "Aw": () => (/* reexport */ web3_state/* ProviderState */.Aw),
  "SW": () => (/* reexport */ web3_state/* RiskWarningState */.SW),
  "$c": () => (/* reexport */ web3_state/* SettingsState */.$c),
  "Vi": () => (/* reexport */ web3_state/* TokenState */.Vi),
  "e": () => (/* reexport */ web3_state/* TransactionFormatterState */.e),
  "g7": () => (/* reexport */ web3_state/* TransactionState */.g7),
  "$2": () => (/* reexport */ web3_state/* TransactionWatcherState */.$2),
  "RM": () => (/* reexport */ web3_state/* WalletState */.RM),
  "Rm": () => (/* reexport */ store/* getRegisteredWeb3Networks */.Rm),
  "i8": () => (/* reexport */ store/* getRegisteredWeb3Providers */.i8),
  "mA": () => (/* reexport */ useAccount/* useAccount */.m),
  "Ne": () => (/* reexport */ hooks/* useAllPluginsWeb3State */.Ne),
  "QE": () => (/* reexport */ useAllowTestnet/* useAllowTestnet */.Q),
  "yH": () => (/* reexport */ hooks/* useAvailablePlugins */.yH),
  "KQ": () => (/* reexport */ useBalance/* useBalance */.K),
  "Ov": () => (/* reexport */ useBlockNumber/* useBlockNumber */.O),
  "oN": () => (/* reexport */ useBlockTimestamp/* useBlockTimestamp */.o),
  "v8": () => (/* reexport */ useBlockedFungibleTokens/* useBlockedFungibleTokens */.v),
  "YT": () => (/* reexport */ useBlockie/* useBlockie */.Y),
  "x5": () => (/* reexport */ useChainColor/* useChainColor */.x),
  "xx": () => (/* reexport */ useChainId/* useChainId */.x),
  "d1": () => (/* reexport */ useChainIdMainnet/* useChainIdMainnet */.d),
  "iN": () => (/* reexport */ useChainIdMatched/* useChainIdMatched */.i),
  "as": () => (/* reexport */ useChainIdValid/* useChainIdValid */.a),
  "S4": () => (/* reexport */ useClearTransactionsCallback/* useClearTransactionsCallback */.S),
  "$f": () => (/* reexport */ Context/* useCurrentWeb3NetworkPluginID */.$f),
  "Yn": () => (/* reexport */ useBeat/* useDoubleBlockBeatRetry */.Yn),
  "$U": () => (/* reexport */ useFungibleAssets/* useFungibleAssets */.C),
  "cf": () => (/* reexport */ useFungibleToken/* useFungibleToken */.c),
  "V4": () => (/* reexport */ useFungibleTokenBalance/* useFungibleTokenBalance */.V),
  "Of": () => (/* reexport */ useFungibleTokenPrice/* useFungibleTokenPrice */.O),
  "g3": () => (/* reexport */ useFungibleTokenWatched/* useFungibleTokenWatched */.g),
  "nt": () => (/* reexport */ useFungibleTokens/* useFungibleTokens */.n),
  "YW": () => (/* reexport */ useFungibleTokensBalance/* useFungibleTokensBalance */.Y),
  "B8": () => (/* reexport */ useFungibleTokensFromTokenList/* useFungibleTokensFromTokenList */.B),
  "oj": () => (/* reexport */ useGasOptions/* useGasOptions */.o),
  "Fh": () => (/* reexport */ useGasPrice/* useGasPrice */.F),
  "u0": () => (/* reexport */ useNativeToken/* useNativeToken */.u),
  "Z_": () => (/* reexport */ useNativeTokenAddress/* useNativeTokenAddress */.Z),
  "hj": () => (/* reexport */ useNativeTokenBalance/* useNativeTokenBalance */.h),
  "lb": () => (/* reexport */ useNativeTokenPrice/* useNativeTokenPrice */.l),
  "Vw": () => (/* reexport */ useNetworkDescriptor/* useNetworkDescriptor */.V),
  "px": () => (/* reexport */ useNetworkDescriptors/* useNetworkDescriptors */.p),
  "bL": () => (/* reexport */ useNetworkType/* useNetworkType */.b),
  "Em": () => (/* reexport */ useNonFungibleAsset/* useNonFungibleAsset */.E),
  "H1": () => (/* reexport */ useNonFungibleAssets/* useNonFungibleAssets */.H),
  "es": () => (/* reexport */ useNonFungibleCollections/* useNonFungibleCollections */.e),
  "bs": () => (/* reexport */ useNonFungibleToken/* useNonFungibleToken */.b),
  "N2": () => (/* reexport */ useNonFungibleTokenBalance/* useNonFungibleTokenBalance */.N),
  "LN": () => (/* reexport */ useNonFungibleTokenContract/* useNonFungibleTokenContract */.L),
  "fY": () => (/* reexport */ useProviderDescriptor/* useProviderDescriptor */.f),
  "_o": () => (/* reexport */ useProviderType/* useProviderType */._),
  "Sp": () => (/* reexport */ useRecentTransactions/* useRecentTransactions */.S),
  "kc": () => (/* reexport */ useRemoveTransaction/* useRemoveTransactionCallback */.k),
  "$q": () => (/* reexport */ useReverseAddress/* useReverseAddress */.$),
  "_W": () => (/* reexport */ useRiskWarningApproved/* useRiskWarningApproved */._),
  "zx": () => (/* reexport */ useSocialAddressListAll/* useSocialAddressListAll */.z),
  "Yg": () => (/* reexport */ useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y),
  "KP": () => (/* reexport */ useTrustedNonFungibleTokens/* useTrustedNonFungibleTokens */.K),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ useWeb3/* useWeb3 */.$),
  "Tv": () => (/* reexport */ useWeb3Connection/* useWeb3Connection */.T),
  "hh": () => (/* reexport */ useWeb3Hub/* useWeb3Hub */.h),
  "xo": () => (/* reexport */ useWeb3Provider/* useWeb3Provider */.x),
  "dM": () => (/* reexport */ useWeb3State/* useWeb3State */.d),
  "$d": () => (/* reexport */ useWeb3UI/* useWeb3UI */.$)
});

// UNUSED EXPORTS: PluginWeb3ContextProvider, useAccountName, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAddressBook, useBeat, useBeatRetry, useBlockedNonFungibleTokens, useChainDescriptor, useChainIdSupport, useCurrencyType, useCurrentWeb3NetworkAccount, useCurrentWeb3NetworkChainId, useCurrentWeb3NetworkNetworkType, useCurrentWeb3NetworkProviderType, useDefaultChainId, useDefaultNetworkType, useFungibleAsset, useFungibleAssetSourceType, useGasOptionType, useLookupAddress, useNonFungibleAssetSourceType, useNonFungibleTokenPrice, useNonFungibleTokens, useNonFungibleTokensBalance, useNonFungibleTokensFromTokenList, useProviderDescriptors, useProviderReady, useSingleBlockBeatRetry, useSocialAddressList, useTokenSchema, useTransactions, useWalletPrimary, useZeroAddress

// EXTERNAL MODULE: ../plugin-infra/src/web3/Context.tsx
var Context = __webpack_require__(46390);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAccount.ts
var useAccount = __webpack_require__(72128);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAccountName.ts
var useAccountName = __webpack_require__(7645);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAddressBook.ts
var useAddressBook = __webpack_require__(23987);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useSocialAddressList.ts
var useSocialAddressList = __webpack_require__(47807);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useSocialAddressListAll.ts
var useSocialAddressListAll = __webpack_require__(84702);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAllowTestnet.ts
var useAllowTestnet = __webpack_require__(19891);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBalance.ts
var useBalance = __webpack_require__(45430);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBeat.ts
var useBeat = __webpack_require__(81215);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockNumber.ts
var useBlockNumber = __webpack_require__(22012);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockTimestamp.ts
var useBlockTimestamp = __webpack_require__(66482);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockedFungibleTokens.ts
var useBlockedFungibleTokens = __webpack_require__(64380);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockedNonFungibleTokens.ts
var useBlockedNonFungibleTokens = __webpack_require__(58257);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockie.ts
var useBlockie = __webpack_require__(79840);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainColor.ts
var useChainColor = __webpack_require__(26675);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainDescriptor.ts
var useChainDescriptor = __webpack_require__(95579);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainId.ts
var useChainId = __webpack_require__(45087);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdMainnet.ts
var useChainIdMainnet = __webpack_require__(75080);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdMatched.ts
var useChainIdMatched = __webpack_require__(85560);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdSupport.ts
var useChainIdSupport = __webpack_require__(29075);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdValid.ts
var useChainIdValid = __webpack_require__(3307);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useClearTransactionsCallback.ts
var useClearTransactionsCallback = __webpack_require__(64919);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useCurrencyType.ts
var useCurrencyType = __webpack_require__(59398);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(30447);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useDefaultNetworkType.ts
var useDefaultNetworkType = __webpack_require__(12641);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAsset.ts
var useFungibleAsset = __webpack_require__(9402);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAssetSourceType.ts
var useFungibleAssetSourceType = __webpack_require__(69289);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(94635);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleToken.ts
var useFungibleToken = __webpack_require__(38327);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(61553);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(59449);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenWatched.ts
var useFungibleTokenWatched = __webpack_require__(99055);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokens.ts
var useFungibleTokens = __webpack_require__(90920);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokensBalance.ts
var useFungibleTokensBalance = __webpack_require__(31405);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokensFromTokenList.ts
var useFungibleTokensFromTokenList = __webpack_require__(6319);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasOptionType.ts
var useGasOptionType = __webpack_require__(32575);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasOptions.ts
var useGasOptions = __webpack_require__(3125);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasPrice.ts
var useGasPrice = __webpack_require__(43385);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useLookupAddress.ts
var useLookupAddress = __webpack_require__(91202);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeToken.ts
var useNativeToken = __webpack_require__(35686);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(72883);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(7739);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(40540);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(19199);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkDescriptors.ts
var useNetworkDescriptors = __webpack_require__(3859);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkType.ts
var useNetworkType = __webpack_require__(40969);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(872);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAssetSourceType.ts
var useNonFungibleAssetSourceType = __webpack_require__(20414);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(45428);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(83382);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenBalance.ts
var useNonFungibleTokenBalance = __webpack_require__(92223);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenContract.ts
var useNonFungibleTokenContract = __webpack_require__(45023);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenPrice.ts
var useNonFungibleTokenPrice = __webpack_require__(96196);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokens.ts
var useNonFungibleTokens = __webpack_require__(81665);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokensBalance.ts
var useNonFungibleTokensBalance = __webpack_require__(23225);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokensFromTokenList.ts
var useNonFungibleTokensFromTokenList = __webpack_require__(13776);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleToken.ts
var useNonFungibleToken = __webpack_require__(74637);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(41623);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderDescriptors.ts
var useProviderDescriptors = __webpack_require__(11200);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderReady.ts
var useProviderReady = __webpack_require__(60209);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderType.ts
var useProviderType = __webpack_require__(52892);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRemoveTransaction.ts
var useRemoveTransaction = __webpack_require__(89286);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useReverseAddress.ts
var useReverseAddress = __webpack_require__(77758);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRiskWarningApproved.ts
var useRiskWarningApproved = __webpack_require__(69753);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTokenSchema.ts
var useTokenSchema = __webpack_require__(68244);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(45813);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTransactions.ts
var useTransactions = __webpack_require__(16394);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTrustedFungibleTokens.ts
var useTrustedFungibleTokens = __webpack_require__(71506);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTrustedNonFungibleTokens.ts
var useTrustedNonFungibleTokens = __webpack_require__(32414);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWallet.ts
var useWallet = __webpack_require__(10668);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWalletPrimary.ts
var useWalletPrimary = __webpack_require__(50360);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWallets.ts
var useWallets = __webpack_require__(70278);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3.ts
var useWeb3 = __webpack_require__(32383);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Provider.ts
var useWeb3Provider = __webpack_require__(75789);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(53837);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(94227);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3State.ts
var useWeb3State = __webpack_require__(12368);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3UI.ts
var useWeb3UI = __webpack_require__(14232);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useZeroAddress.ts
var useZeroAddress = __webpack_require__(23310);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/index.ts
















































































// EXTERNAL MODULE: ../plugin-infra/src/web3-state/index.ts + 16 modules
var web3_state = __webpack_require__(27950);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(98119);
// EXTERNAL MODULE: ../plugin-infra/src/manager/store.ts
var store = __webpack_require__(93996);
;// CONCATENATED MODULE: ../plugin-infra/src/entry-web3.ts








/***/ }),

/***/ 70226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* reexport safe */ _utils_message__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "V8": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fg),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fo),
/* harmony export */   "i1": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i1),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31293);
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37500);
/* harmony import */ var _utils_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73179);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93996);






/***/ }),

/***/ 98119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KP": () => (/* reexport */ PluginI18NFieldRender),
  "Rc": () => (/* reexport */ useActivatedPlugin/* useActivatedPlugin */.R),
  "Ne": () => (/* reexport */ useAllPluginsWeb3State/* useAllPluginsWeb3State */.N),
  "yH": () => (/* reexport */ useAvailablePlugins/* useAvailablePlugins */.y),
  "eS": () => (/* reexport */ usePluginI18NField),
  "fI": () => (/* reexport */ usePluginWrapper/* usePluginWrapper */.fI)
});

// UNUSED EXPORTS: useActivatedPluginWeb3State, useActivatedPluginWeb3UI

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(42711);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(95219);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(76859);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(17635);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAvailablePlugins.ts
var useAvailablePlugins = __webpack_require__(62294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useI18N.tsx


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,useTranslation/* useTranslation */.$)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: field
    });
}
function usePluginI18NField() {
    const [t] = (0,useTranslation/* useTranslation */.$)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}

// EXTERNAL MODULE: ../plugin-infra/src/hooks/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(82479);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/index.ts









/***/ }),

/***/ 82479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fI": () => (/* binding */ usePluginWrapper),
/* harmony export */   "yd": () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* unused harmony export emptyPluginWrapperMethods */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


/** @internal */ const emptyPluginWrapperMethods = {
    setWrap: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
function usePluginWrapper(open, options) {
    const { setWidth , setWrap , setWrapperName  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width , name  } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open)
        ;
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width)
    , [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name)
    , [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 77319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82479);






const PropsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_5__/* .PluginWrapperMethodsContext.Provider */ .yd.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePluginI18NField */ .eS)();
        const props = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .SV, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const allPlugins = usePlugins();
        const availablePlugins = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAvailablePlugins */ .yH)(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootIsolation */ .Q, {
                    "data-plugin": plugin.ID,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SinglePluginWithinErrorBoundary, {
                        plugin: plugin
                    })
                })
            }, plugin.ID)
        );
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .SV, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        ...data
    });
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [f, setF] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const cancel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>void f?.(data)
    , [
        f,
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


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
  "pv": () => (/* reexport */ useObservableMapSet/* useObservableValues */.p),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: createGlobalState, useAim, useValueRefDelayed

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

/***/ 69395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ EncryptionTargetType)
/* harmony export */ });
var NetworkPluginID;
(function(NetworkPluginID) {
    NetworkPluginID["PLUGIN_EVM"] = 'com.mask.evm';
    NetworkPluginID["PLUGIN_FLOW"] = 'com.mask.flow';
    NetworkPluginID["PLUGIN_SOLANA"] = 'com.mask.solana';
})(NetworkPluginID || (NetworkPluginID = {}));
var EncryptionTargetType;
(function(EncryptionTargetType) {
    EncryptionTargetType["Public"] = 'public';
    EncryptionTargetType["Self"] = 'self';
    EncryptionTargetType["E2E"] = 'e2e';
})(EncryptionTargetType || (EncryptionTargetType = {}));


/***/ }),

/***/ 44451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "WF": () => (/* reexport */ Shared/* CrossIsolationMessages */.W),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ Identifier/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "rP": () => (/* reexport */ Pure/* EMPTY_LIST */.r),
  "Nu": () => (/* reexport */ Pure/* EMPTY_OBJECT */.N),
  "J4": () => (/* reexport */ Mask/* EncryptionTargetType */.J),
  "Jk": () => (/* reexport */ Site/* EnhanceableSite */.Jk),
  "v_": () => (/* reexport */ Site/* ExtensionSite */.v_),
  "BU": () => (/* reexport */ type/* NextIDAction */.B),
  "Vd": () => (/* reexport */ type/* NextIDPlatform */.V),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "G1": () => (/* reexport */ onDemandWorker/* OnDemandWorker */.G),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ Routes/* PopupRoutes */.mZ),
  "bb": () => (/* reexport */ Identifier/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ Identifier/* PostIdentifier */._P),
  "WO": () => (/* reexport */ Identifier/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Y_": () => (/* reexport */ SubscriptionDebug),
  "ps": () => (/* reexport */ Results/* andThenAsync */.ps),
  "mQ": () => (/* reexport */ src_crypto/* assertEC_Private_JsonWebKey */.mQ),
  "SR": () => (/* reexport */ asyncIterator/* asyncIteratorToArray */.S),
  "f1": () => (/* reexport */ src_crypto/* compressSecp256k1KeyRaw */.xb),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "Ap": () => (/* reexport */ Identifier/* convertIdentifierMapToRawMap */.Ap),
  "J5": () => (/* reexport */ Identifier/* convertRawMapToIdentifierMap */.J5),
  "qY": () => (/* reexport */ createConstantSubscription),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ createSubscriptionFromAsync),
  "WS": () => (/* reexport */ createSubscriptionFromAsyncSuspense),
  "_H": () => (/* reexport */ createSubscriptionFromValueRef),
  "a": () => (/* reexport */ createValueRefWithReady/* createValueRefWithReady */.a),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "Yj": () => (/* reexport */ src_crypto/* decompressSecp256k1KeyRaw */.Yj),
  "pf": () => (/* reexport */ src_crypto/* decompressSecp256k1Point */.pf),
  "DA": () => (/* reexport */ asyncIterator/* flattenAsyncIterator */.D),
  "Nb": () => (/* reexport */ personas/* formatPersonaFingerprint */.Nb),
  "rY": () => (/* reexport */ personas/* formatPersonaName */.rY),
  "lK": () => (/* reexport */ personas/* formatPersonaPublicKey */.lK),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "eP": () => (/* reexport */ color/* generateContactAvatarColor */.e),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation/* getLocalImplementation */.B),
  "kO": () => (/* reexport */ getLocalImplementation/* getLocalImplementationExotic */.k),
  "sv": () => (/* reexport */ Site/* getSiteType */.sv),
  "SF": () => (/* reexport */ getSubscriptionCurrentValue),
  "BV": () => (/* reexport */ i18n/* i18NextInstance */.BV),
  "bG": () => (/* reexport */ src_crypto/* isAESJsonWebKey */.bG),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "PQ": () => (/* reexport */ src_crypto/* isEC_Private_JsonWebKey */.PQ),
  "d8": () => (/* reexport */ src_crypto/* isEC_Public_JsonWebKey */.d8),
  "zQ": () => (/* reexport */ Site/* isEnhanceableSiteType */.zQ),
  "Po": () => (/* reexport */ Site/* isExtensionSiteType */.Po),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ mapSubscription),
  "EB": () => (/* reexport */ mergeSubscription),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "tr": () => (/* reexport */ serializer/* registerSerializableClass */.tr),
  "GM": () => (/* reexport */ serializer/* serializer */.GM),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC),
  "BF": () => (/* reexport */ i18n/* updateLanguage */.BF)
});

// UNUSED EXPORTS: Identifier, MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH, MimeTypes, PersonaIdentifier, __DEBUG__ONLY__enableCryptoKeySerialization, assertAESJsonWebKey, assertEC_Public_JsonWebKey, pollingTask, relativeRouteOf, removed

// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(716);
// EXTERNAL MODULE: ../shared-base/src/color/index.ts + 1 modules
var color = __webpack_require__(43477);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(18615);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(16819);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts + 1 modules
var i18n = __webpack_require__(45816);
// EXTERNAL MODULE: ../shared-base/src/Identifier/index.ts + 7 modules
var Identifier = __webpack_require__(57041);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(34523);
// EXTERNAL MODULE: ../shared-base/src/Messages/Mask.ts
var Mask = __webpack_require__(69395);
// EXTERNAL MODULE: ../shared-base/src/Messages/Shared.ts
var Shared = __webpack_require__(52881);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var type = __webpack_require__(84831);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(71521);
// EXTERNAL MODULE: ../shared-base/src/Pure/index.ts
var Pure = __webpack_require__(98981);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(30375);
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(99594);
// EXTERNAL MODULE: ../shared-base/src/serializer/index.ts
var serializer = __webpack_require__(13339);
// EXTERNAL MODULE: ../shared-base/src/Site/index.ts
var Site = __webpack_require__(41385);
// EXTERNAL MODULE: ../shared-base/src/utils/asyncIterator.ts
var asyncIterator = __webpack_require__(98508);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(5646);
// EXTERNAL MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
var getLocalImplementation = __webpack_require__(68043);
// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(31600);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(67149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../shared-base/src/utils/subscription.ts


async function getSubscriptionCurrentValue(getSubscription, retries = 3) {
    const getValue = ()=>{
        return getSubscription()?.getCurrentValue();
    };
    const createReader = async ()=>{
        try {
            return getValue();
        } catch (error) {
            if (!(error instanceof Promise)) return;
            await error;
            return getValue();
        }
    };
    const createReaders = Array.from({
        length: retries
    }).fill(()=>createReader()
    );
    for (const createReader1 of createReaders){
        try {
            return await createReader1();
        } catch  {
            continue;
        }
    }
    return;
}
function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value
        ,
        subscribe: ()=>noop/* default */.Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange, signal) {
    const { getCurrentValue , subscribe  } = createSubscriptionFromAsyncSuspense(f, onChange, signal);
    return {
        subscribe,
        getCurrentValue: ()=>{
            try {
                return getCurrentValue();
            } catch  {
                return defaultValue;
            }
        }
    };
}
function createSubscriptionFromAsyncSuspense(f, onChange, signal) {
    const { subscribe , trigger  } = getEventTarget();
    let value = esm/* None */.Hq;
    const setter = (v)=>{
        value = (0,esm/* Some */.bD)(v);
        trigger();
    };
    // initial request
    const promise = f().then(setter);
    // follow-up updating
    const listen = onChange(()=>f().then(setter)
    );
    signal?.addEventListener('abort', listen, {
        once: true
    });
    return {
        getCurrentValue: ()=>{
            if (value.none) throw promise;
            return value.val;
        },
        subscribe: (sub)=>{
            if (signal?.aborted) return noop/* default */.Z;
            const undo = subscribe(sub);
            signal?.addEventListener('abort', undo, {
                once: true
            });
            return ()=>void undo()
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all data to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 500);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}
function mapSubscription(sub, mapper) {
    return {
        getCurrentValue () {
            return mapper(sub.getCurrentValue());
        },
        subscribe: sub.subscribe
    };
}
function mergeSubscription(...subscriptions) {
    return {
        getCurrentValue () {
            return subscriptions.map((x)=>x.getCurrentValue()
            );
        },
        subscribe: (callback)=>{
            const removeListeners = subscriptions.map((x)=>x.subscribe(callback)
            );
            return ()=>removeListeners.forEach((x)=>x()
                )
            ;
        }
    };
}
function createSubscriptionFromValueRef(ref, signal) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>{
            if (signal?.aborted) return noop/* default */.Z;
            const f = ref.addListener(sub);
            signal?.addEventListener('abort', f, {
                once: true
            });
            return f;
        }
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}

// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(77489);
// EXTERNAL MODULE: ../shared-base/src/utils/personas.ts
var personas = __webpack_require__(53734);
// EXTERNAL MODULE: ../shared-base/src/utils/createValueRefWithReady.ts
var createValueRefWithReady = __webpack_require__(12395);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts










var MimeTypes;
(function(MimeTypes) {
    MimeTypes["JSON"] = 'application/json';
    MimeTypes["Binary"] = 'application/octet-stream';
})(MimeTypes || (MimeTypes = {}));

// EXTERNAL MODULE: ../shared-base/src/onDemandWorker/index.ts
var onDemandWorker = __webpack_require__(34953);
;// CONCATENATED MODULE: ../shared-base/src/index.ts





















/***/ }),

/***/ 10262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ConcealableTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55031);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64947);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);







const TAB_WIDTH = 126;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            display: 'flex',
            position: 'relative',
            backgroundColor: theme.palette.background.default,
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                backgroundColor: theme.palette.divider,
                zIndex: 0
            }
        },
        track: {
            flexGrow: 1,
            display: 'flex',
            overflow: 'auto',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            height: 35,
            minWidth: TAB_WIDTH,
            padding: theme.spacing(0, 2.5),
            borderRadius: 0,
            flexShrink: 0,
            border: '1px solid transparent'
        },
        normal: {
            boxSizing: 'border-box',
            color: `${theme.palette.text.secondary} !important`,
            backgroundColor: theme.palette.background.default,
            border: '1px solid transparent',
            '&:hover': {
                color: `${theme.palette.text.primary} !important`,
                backgroundColor: theme.palette.background.default
            }
        },
        selected: {
            color: `${theme.palette.text.primary} !important`,
            backgroundColor: theme.palette.background.paper,
            border: '1px solid',
            borderColor: theme.palette.background.paper,
            borderBottomColor: theme.palette.background.paper,
            '&:hover': {
                borderBottomColor: theme.palette.background.paper,
                backgroundColor: theme.palette.background.paper
            },
            position: 'relative',
            zIndex: 10,
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                backgroundColor: theme.palette.background.paper
            }
        },
        controllers: {
            display: 'flex',
            flexGrow: 0,
            alignItems: 'center',
            borderLeft: `1px solid ${theme.palette.divider}`
        },
        controller: {
            display: 'flex',
            minWidth: 35,
            color: theme.palette.text.primary,
            border: 'none',
            width: 35,
            height: 35,
            borderRadius: 0,
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                border: 'none !important',
                borderBottomColor: theme.palette.divider,
                color: `${theme.palette.text.primary} !important`,
                backgroundColor: theme.palette.background.paper
            },
            '&[disabled]': {
                backgroundColor: theme.palette.background.default
            }
        }
    })
);
function ConcealableTabs({ className , tabs , selectedId , tail , onChange , ...rest }) {
    const { classes  } = useStyles();
    const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const trackRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [reachedLeftEdge, setReachedLeftEdge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [reachedRightEdge, setReachedRightEdge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const isWider = tabList.scrollWidth > tabList.offsetWidth;
        setOverflow(isWider);
        if (!isWider) return;
        const detectScrollStatus = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>{
            const reachedRight = tabList.scrollWidth - tabList.offsetWidth <= tabList.scrollLeft;
            const reachedLeft = tabList.scrollLeft === 0;
            setReachedRightEdge(reachedRight);
            setReachedLeftEdge(reachedLeft);
        }, 100);
        detectScrollStatus();
        tabList.addEventListener('scroll', detectScrollStatus);
        return ()=>{
            tabList.removeEventListener('scroll', detectScrollStatus);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (selectedId === undefined && tabs.length) {
            onChange?.(tabs[0].id);
        }
    }, [
        selectedId,
        tabs.map((x)=>x.id
        ).join(),
        onChange
    ]);
    const slide = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((toLeft)=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const scrolled = Math.round(tabList.scrollLeft / TAB_WIDTH);
        tabList.scrollTo({
            left: TAB_WIDTH * (scrolled + (toLeft ? 1 : -1)),
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes.container),
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.track,
                ref: trackRef,
                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disableRipple: true,
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, selectedId === tab.id ? classes.selected : classes.normal),
                        role: "button",
                        onClick: ()=>{
                            onChange?.(tab.id);
                        },
                        children: tab.label
                    }, tab.id)
                )
            }),
            overflow || tail ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controllers,
                children: [
                    overflow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                disableRipple: true,
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.normal, classes.controller),
                                disabled: reachedLeftEdge,
                                onClick: ()=>{
                                    slide(false);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .LeftArrowIcon */ .q, {
                                    color: "inherit"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                disableRipple: true,
                                disabled: reachedRightEdge,
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.normal, classes.controller),
                                onClick: ()=>{
                                    slide(true);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .RightArrowIcon */ .A, {
                                    color: "inherit"
                                })
                            })
                        ]
                    }) : null,
                    tail
                ]
            }) : null
        ]
    });
}


/***/ }),

/***/ 36579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ElementAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73932);
/* harmony import */ var _react_hookz_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);




const ElementAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ callback , children  })=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersection = (0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_2__/* .useIntersectionObserver */ .S)(elementRef, {
        rootMargin: '200px'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!intersection?.isIntersecting) return;
        callback(intersection);
    }, [
        intersection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pt: 1,
        ref: elementRef,
        justifyContent: "center",
        direction: "row",
        children: children
    });
});


/***/ }),

/***/ 99341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);


const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        icon: {}
    };
});
function ImageIcon(props) {
    const { size =48 , icon  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        className: classes.icon
    });
}


/***/ }),

/***/ 28586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ RetryHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18261);




const RetryHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ retry , hint =true  })=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        height: hint ? '100%' : '100px',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            gap: 2.75,
            children: [
                hint && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    children: t.load_failed()
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: "small",
                    style: {
                        borderRadius: 16
                    },
                    onClick: retry,
                    children: t.load_retry()
                })
            ]
        })
    });
});


/***/ }),

/***/ 94323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ NFTCardStyledAssetPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69314);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _AssetPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60879);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67938);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91295);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 160,
            width: 120,
            overflow: 'hidden'
        },
        loadingPlaceholder: {
            height: 160,
            width: 120
        },
        loadingIcon: {
            width: 36,
            height: 52
        },
        imgWrapper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
);
const assetPlayerFallbackImageDark = new URL(/* asset import */ __webpack_require__(39952), __webpack_require__.b);
const assetPlayerFallbackImageLight = new URL(/* asset import */ __webpack_require__(39872), __webpack_require__.b);
function NFTCardStyledAssetPlayer(props) {
    const { chainId , contractAddress ='' , tokenId ='' , isNative =false , fallbackImage , fallbackResourceLoader , url , setERC721TokenName , renderOrder , setSourceType ,  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { value: tokenDetailed  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useNonFungibleToken */ .bs)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, contractAddress, url ? undefined : tokenId, undefined, {
        chainId
    });
    const { value: isImageToken  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useImageChecker */ .vI)(url || tokenDetailed?.metadata?.imageURL || tokenDetailed?.metadata?.mediaURL);
    const fallbackImageURL = theme.palette.mode === 'dark' ? assetPlayerFallbackImageDark : assetPlayerFallbackImageLight;
    return isImageToken || isNative ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.imgWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            width: "100%",
            style: {
                objectFit: 'cover'
            },
            src: url || tokenDetailed?.metadata?.imageURL || tokenDetailed?.metadata?.mediaURL,
            onError: (event)=>{
                const target = event.currentTarget;
                target.src = fallbackImageURL.toString();
                target.classList.add(classes.loadingFailImage ?? '');
            }
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AssetPlayer__WEBPACK_IMPORTED_MODULE_3__/* .AssetPlayer */ .I, {
        showIframeFromInit: true,
        erc721Token: {
            chainId,
            contractAddress,
            tokenId
        },
        url: url,
        options: {
            autoPlay: true,
            controls: false,
            playsInline: true
        },
        setERC721TokenName: setERC721TokenName,
        setSourceType: setSourceType,
        // It would fail to render as loading too many(>200) iframe at once.
        renderTimeout: renderOrder ? 20000 * Math.floor(renderOrder / 100) : undefined,
        fallbackImage: fallbackImage ?? fallbackImageURL,
        loadingIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            size: 20
        }),
        classes: {
            iframe: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.wrapper, classes.iframe),
            errorPlaceholder: classes.wrapper,
            loadingPlaceholder: classes.wrapper,
            loadingFailImage: classes.loadingFailImage,
            loadingIcon: classes.loadingIcon
        },
        fallbackResourceLoader: fallbackResourceLoader
    });
}


/***/ }),

/***/ 61933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50719);



const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address , pluginId , domainSize , size =5  })=>{
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$q)(pluginId, address);
    const { Others  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .dM)(pluginId);
    if (!domain || !Others?.formatDomainName) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Others?.formatAddress?.(address, size) ?? address
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Others.formatDomainName(domain, domainSize)
    });
});


/***/ }),

/***/ 43894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useShowConfirm),
/* harmony export */   "W": () => (/* binding */ ConfirmProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _UITaskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30613);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80670);



const { TaskManagerContext , TaskManagerProvider: ConfirmProvider  } = (0,_UITaskManager__WEBPACK_IMPORTED_MODULE_1__/* .createUITaskManager */ .R)(_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .ConfirmDialog */ .Q);
const useShowConfirm = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TaskManagerContext).show;
};



/***/ }),

/***/ 18572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(52775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71246);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(13305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(18261);
// EXTERNAL MODULE: ../shared/src/contexts/base/index.ts + 1 modules
var base = __webpack_require__(22017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(86392);
;// CONCATENATED MODULE: ../shared/src/contexts/components/DialogDismissIcon.tsx




function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/InjectedDialog.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { clean  })=>({
        dialogTitle: {
            whiteSpace: 'nowrap',
            display: 'flex',
            gridTemplateColumns: '50px auto 50px'
        },
        dialogTitleEndingContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            flex: 1,
            textAlign: 'center',
            verticalAlign: 'middle',
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 700
        },
        dialogCloseButton: {
            color: theme.palette.text.primary,
            padding: 0,
            width: 24,
            height: 24,
            '& > svg': {
                fontSize: 24
            }
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
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleEndingContent , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,entry/* useStylesExtends */.Bc)(useStyles({
        clean
    }), props, overwrite.InjectedDialog?.classes);
    const t = (0,locales/* useSharedI18N */.B)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , titleTail =null , disableTitleBorder , isOpenFromApplicationBoard , ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,entry/* useDialogStackActor */.tE)(open);
    const closeBothCompositionDialog = (0,react.useCallback)(()=>{
        if (isOpenFromApplicationBoard) {
            src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                open: false,
                reason: 'timeline'
            });
        }
        onClose?.();
    }, [
        isOpenFromApplicationBoard
    ]);
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
                ...(0,omit/* default */.Z)(rest, 'isOnBack'),
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
                                    disableRipple: true,
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: !props.isOnBack ? closeBothCompositionDialog : onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: titleBarIconStyle !== 'close' && shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: dialogTitleEndingContent,
                                    children: titleTail
                                })
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

;// CONCATENATED MODULE: ../shared/src/contexts/components/index.ts



/***/ }),

/***/ 91295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_2__.i),
/* harmony export */   "vI": () => (/* reexport safe */ _useImageChecker__WEBPACK_IMPORTED_MODULE_4__.v),
/* harmony export */   "z": () => (/* reexport safe */ _useOpenShareTxDialog__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68483);
/* harmony import */ var _useOpenShareTxDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66442);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53661);
/* harmony import */ var _useImageFailOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78153);
/* harmony import */ var _useImageChecker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39800);







/***/ }),

/***/ 53661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useSnackbarCallback)
/* harmony export */ });
/* unused harmony export usePopupSnackbarCallback */
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18261);



function useSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .useCustomSnackbar */ .Ii)();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>executor(...args).then((res)=>{
            showSnackbar(successText ?? t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess?.(res);
            return res;
        }, (error)=>{
            showSnackbar(`Error: ${error.message || error}`, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError?.(error);
            throw error;
        })
    , [
        ...deps,
        showSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}
function usePopupSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = useSharedI18N();
    const { showSnackbar  } = usePopupCustomSnackbar();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return useCallback((...args)=>executor(...args).then((res)=>{
            showSnackbar(successText ?? t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess?.(res);
            return res;
        }, (error)=>{
            showSnackbar(error.message, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError?.(error);
            throw error;
        })
    , [
        ...deps,
        showSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}


/***/ }),

/***/ 77818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "Tv": () => (/* reexport */ ApplicationEntry/* ApplicationEntry */.T),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "SR": () => (/* reexport */ ConcealableTabs/* ConcealableTabs */.S),
  "ek": () => (/* reexport */ ElementAnchor/* ElementAnchor */.e),
  "Kv": () => (/* reexport */ wallet/* FormattedAddress */.Kv),
  "BV": () => (/* reexport */ wallet/* FormattedBalance */.BV),
  "bO": () => (/* reexport */ wallet/* FormattedCurrency */.bO),
  "C2": () => (/* reexport */ FungibleTokenList/* FungibleTokenList */.C),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "Fl": () => (/* reexport */ contexts/* InjectedDialog */.Fl),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "uw": () => (/* reexport */ LoadRetry/* RetryHint */.u),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "WU": () => (/* reexport */ SettingSwitch/* SettingSwitch */.W),
  "QL": () => (/* reexport */ contexts/* SharedContextProvider */.QL),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o),
  "n2": () => (/* reexport */ constants/* mediaViewerUrl */.n2),
  "vU": () => (/* reexport */ contexts/* sharedUIComponentOverwrite */.vU),
  "Xr": () => (/* reexport */ contexts/* sharedUINetworkIdentifier */.Xr),
  "vI": () => (/* reexport */ hooks/* useImageChecker */.vI),
  "z": () => (/* reexport */ hooks/* useOpenShareTxDialog */.z),
  "yQ": () => (/* reexport */ contexts/* usePickToken */.yQ),
  "B_": () => (/* reexport */ locales/* useSharedI18N */.B),
  "Lm": () => (/* reexport */ contexts/* useShowConfirm */.Lm),
  "iD": () => (/* reexport */ hooks/* useSnackbarCallback */.iD)
});

// UNUSED EXPORTS: BaseSharedUIProvider, ChainIcon, CommonUIProvider, ConfirmProvider, EvmSharedUIProvider, MAX_WALLET_LIMIT, MiniNetworkSelector, SOCIAL_MEDIA_ICON_MAPPING, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, SharedTrans, TokenIconUI, TokenPickerProvider, addSharedI18N, createUITaskManager, languages, useBaseUIRuntime, useImageFailOver, useMenu, useMenuConfig, useMenuContext, usePopupSnackbarCallback

// EXTERNAL MODULE: ../shared/src/contexts/index.ts
var contexts = __webpack_require__(66437);
// EXTERNAL MODULE: ../shared/src/hooks/index.ts
var hooks = __webpack_require__(91295);
// EXTERNAL MODULE: ../shared/src/wallet/index.ts + 3 modules
var wallet = __webpack_require__(96274);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(2167);
// EXTERNAL MODULE: ../shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(16530);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(60879);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(51878);
// EXTERNAL MODULE: ../shared/src/UI/components/ConcealableTabs/index.tsx
var ConcealableTabs = __webpack_require__(10262);
// EXTERNAL MODULE: ../shared/src/UI/components/FungibleTokenList/index.tsx + 1 modules
var FungibleTokenList = __webpack_require__(63352);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(37245);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(99341);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(16332);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(25593);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(94323);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(17428);
// EXTERNAL MODULE: ../shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(61933);
// EXTERNAL MODULE: ../shared/src/UI/components/SettingSwitch/index.tsx
var SettingSwitch = __webpack_require__(58407);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(73798);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(44092);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(95462);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(58437);
// EXTERNAL MODULE: ../shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(36579);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(28586);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts





















;// CONCATENATED MODULE: ../shared/src/UI/index.ts


// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(18261);
// EXTERNAL MODULE: ../shared/src/locales/languages.ts
var languages = __webpack_require__(59478);
// EXTERNAL MODULE: ../shared/src/constants.tsx
var constants = __webpack_require__(89241);
;// CONCATENATED MODULE: ../shared/src/index.ts









/***/ }),

/***/ 30381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C3": () => (/* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_11__.C),
/* harmony export */   "D9": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.D9),
/* harmony export */   "Df": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.Df),
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   "Ii": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "Sx": () => (/* reexport safe */ _LoadingBase__WEBPACK_IMPORTED_MODULE_10__.S),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.YO),
/* harmony export */   "b4": () => (/* reexport safe */ _LoadingButton__WEBPACK_IMPORTED_MODULE_9__.b),
/* harmony export */   "pL": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.p),
/* harmony export */   "tE": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.tE),
/* harmony export */   "wT": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _SearchableList__WEBPACK_IMPORTED_MODULE_4__.x),
/* harmony export */   "yu": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.yu)
/* harmony export */ });
/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95499);
/* harmony import */ var _ButtonGroupTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7848);
/* harmony import */ var _FolderTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92566);
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18822);
/* harmony import */ var _SearchableList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44150);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32876);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75168);
/* harmony import */ var _SendingCodeField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13643);
/* harmony import */ var _PhoneNumberField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54650);
/* harmony import */ var _LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2292);
/* harmony import */ var _LoadingBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48054);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95332);














/***/ }),

/***/ 94708:
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
var Provider = __webpack_require__(32920);
// EXTERNAL MODULE: ../theme/src/Theme/theme.ts
var theme = __webpack_require__(8647);
;// CONCATENATED MODULE: ../theme/src/Theme/index.ts





/***/ }),

/***/ 87883:
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
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82737);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88762);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94708);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62998);
/// <reference path="./extended.d.ts" />
// Some re-exports

const parseColor = (tinycolor2__WEBPACK_IMPORTED_MODULE_0___default());

//






/***/ }),

/***/ 31939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "C3": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.C3),
/* harmony export */   "D9": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.D9),
/* harmony export */   "Df": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Df),
/* harmony export */   "F4": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.F4),
/* harmony export */   "FU": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.FU),
/* harmony export */   "Ii": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "Q": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "R_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "Sx": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Sx),
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63439);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17877);
/* harmony import */ var _ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59728);
/* harmony import */ var _entry_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87883);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30381);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99176);
/// <reference path="./extended.d.ts" />


const ShadowRootTooltip = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);





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

/***/ 46123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.Cq),
/* harmony export */   "GT": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.GT),
/* harmony export */   "J3": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.J3),
/* harmony export */   "P": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.P),
/* harmony export */   "PQ": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.PQ),
/* harmony export */   "VJ": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.VJ),
/* harmony export */   "Vs": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.Vs),
/* harmony export */   "YT": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.YT),
/* harmony export */   "Yl": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.Yl),
/* harmony export */   "dq": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.dq),
/* harmony export */   "gw": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.gw),
/* harmony export */   "ll": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.ll),
/* harmony export */   "n5": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.n5),
/* harmony export */   "rj": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.rj),
/* harmony export */   "sS": () => (/* reexport safe */ _media_index_js__WEBPACK_IMPORTED_MODULE_1__.sS),
/* harmony export */   "t1": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.t1),
/* harmony export */   "uL": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.uL),
/* harmony export */   "v_": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.v_),
/* harmony export */   "xe": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.xe)
/* harmony export */ });
/* harmony import */ var _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9074);
/* harmony import */ var _media_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16684);
/* harmony import */ var _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91339);
/* harmony import */ var _web_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27554);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VJ": () => (/* reexport safe */ _abortSignalTimeout_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout_js__WEBPACK_IMPORTED_MODULE_6__.V),
/* harmony export */   "YT": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.YT),
/* harmony export */   "dq": () => (/* reexport safe */ _combineAbortSignal_js__WEBPACK_IMPORTED_MODULE_2__.d),
/* harmony export */   "gw": () => (/* reexport safe */ _delay_js__WEBPACK_IMPORTED_MODULE_3__.g),
/* harmony export */   "ll": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.ll),
/* harmony export */   "n5": () => (/* reexport safe */ _blob_js__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   "rj": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.rj),
/* harmony export */   "uL": () => (/* reexport safe */ _document_readyState_js__WEBPACK_IMPORTED_MODULE_4__.u),
/* harmony export */   "xe": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.xe)
/* harmony export */ });
/* harmony import */ var _abortSignalTimeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _blob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8297);
/* harmony import */ var _combineAbortSignal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98690);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15304);
/* harmony import */ var _document_readyState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22329);
/* harmony import */ var _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84344);
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39373);








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
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
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
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1240":"npm-ns.ethersphere.bee-js","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","3375":"npm-ns.ethersproject.abstract-signer","3667":"npm.react-avatar-editor","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6912":"npm.react-draggable","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7597":"npm.pure-react-carousel","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","9223":"npm-ns.metaplex-foundation.mpl-auction","9271":"npm.rxjs","9278":"npm.axios","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,2943,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,1993,7587,2372,8722,9442,1224,3939,1950], () => (__webpack_require__(98498)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,2943,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,1993,7587,2372,8722,9442,1224,3939,1950], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;