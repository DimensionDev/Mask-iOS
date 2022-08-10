/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 81267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ setService),
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "NG": () => (/* binding */ PluginServices),
/* harmony export */   "Vm": () => (/* binding */ Messages),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "cr": () => (/* binding */ setPluginServices),
/* harmony export */   "jg": () => (/* binding */ setPluginMessages),
/* harmony export */   "yC": () => (/* binding */ PluginMessages)
/* harmony export */ });
let Services = null;
let Messages = null;
let PluginServices = null;
let PluginMessages = null;
function setService(rpc) {
    Services = rpc;
    Object.assign(globalThis, {
        Services: rpc
    });
}
function setMessages(MaskMessage) {
    Messages = MaskMessage;
    Object.assign(globalThis, {
        Messages: MaskMessage
    });
}
function setPluginServices(rpc) {
    PluginServices = rpc;
    Object.assign(globalThis, {
        PluginServices: rpc
    });
}
function setPluginMessages(message) {
    PluginMessages = message;
    Object.assign(globalThis, {
        PluginMessages: message
    });
}


/***/ }),

/***/ 9221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "QG": () => (/* reexport */ IntegratedDashboard),
  "Gp": () => (/* reexport */ addDashboardI18N),
  "Z": () => (/* reexport */ API/* setMessages */.Z),
  "jg": () => (/* reexport */ API/* setPluginMessages */.jg),
  "cr": () => (/* reexport */ API/* setPluginServices */.cr),
  "Bo": () => (/* reexport */ API/* setService */.Bo)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(8136), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(4601)]).then(__webpack_require__.bind(__webpack_require__, 34601))
);
function IntegratedDashboard() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: "",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {})
    });
}

// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(81267);
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

/***/ 73742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M1": () => (/* binding */ pasteText),
/* harmony export */   "Mx": () => (/* binding */ pasteImage),
/* harmony export */   "X2": () => (/* binding */ pasteInstagram),
/* harmony export */   "ed": () => (/* binding */ hookInputUploadOnce),
/* harmony export */   "iJ": () => (/* binding */ inputText),
/* harmony export */   "ju": () => (/* binding */ injectedPhantomProvider),
/* harmony export */   "pb": () => (/* binding */ injectedCoin98SolanaProvider),
/* harmony export */   "yR": () => (/* binding */ injectedSolflareProvider)
/* harmony export */ });
/* unused harmony exports injectedCoin98EVMProvider, injectedMetaMaskProvider, injectedMathWalletProvider, injectedWalletLinkProvider */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43906);
/* harmony import */ var _Coin98__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45169);
/* harmony import */ var _Phantom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34240);
/* harmony import */ var _Solflare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14732);
/* harmony import */ var _MetaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24142);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28383);
/* harmony import */ var _MathWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42362);
/* harmony import */ var _WalletLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36859);








const injectedCoin98EVMProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.EVM */ .E.EVM);
const injectedCoin98SolanaProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.Solana */ .E.Solana);
const injectedPhantomProvider = new _Phantom__WEBPACK_IMPORTED_MODULE_2__/* .PhantomProvider */ .p();
const injectedSolflareProvider = new _Solflare__WEBPACK_IMPORTED_MODULE_3__/* .SolflareProvider */ .B();
const injectedMetaMaskProvider = new _MetaMask__WEBPACK_IMPORTED_MODULE_4__/* .MetaMaskProvider */ .Y();
const injectedMathWalletProvider = new _MathWallet__WEBPACK_IMPORTED_MODULE_6__/* .MathWalletProvider */ .W();
const injectedWalletLinkProvider = new _WalletLink__WEBPACK_IMPORTED_MODULE_7__/* .WalletLinkProvider */ .J();
function pasteText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('paste', text);
}
function pasteImage(image) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('instagramUpload', url);
}
function inputText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .rejectPromise */ .Eu)(...r[1]);
        case 'web3BridgeEmitEvent':
            const [pathname, eventName, data] = r[1];
            const provider = [
                injectedCoin98EVMProvider,
                injectedCoin98SolanaProvider,
                injectedPhantomProvider,
                injectedMetaMaskProvider,
                injectedMathWalletProvider,
                injectedWalletLinkProvider, 
            ].find((x)=>x.pathname === pathname
            );
            provider?.emit(eventName, data);
            return;
        case 'web3BridgeBindEvent':
        case 'web3BridgeSendRequest':
        case 'web3BridgeExecute':
        case 'web3UntilBridgeOnline':
        case 'web3BridgePrimitiveAccess':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 43906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nu": () => (/* binding */ encodeEvent),
/* harmony export */   "OV": () => (/* binding */ CustomEventId),
/* harmony export */   "Vu": () => (/* binding */ decodeEvent)
/* harmony export */ });
const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';
const { parse , stringify  } = JSON;
const { isArray  } = Array;
function encodeEvent(key, args) {
    return stringify([
        key,
        args
    ]);
}
function decodeEvent(data) {
    const result = parse(data);
    // Do not throw new Error cause it requires a global lookup.
    // eslint-disable-next-line
    if (!isEventItemBeforeSerialization(result)) throw null;
    return result;
}
function isEventItemBeforeSerialization(data) {
    if (!isArray(data)) return false;
    if (data.length !== 2) return false;
    if (typeof data[0] !== 'string') return false;
    if (!isArray(data[1])) return false;
    return true;
}


/***/ }),

/***/ 61937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* reexport safe */ _download__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42886);



/***/ }),

/***/ 94670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29130);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25683);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61937);






/***/ }),

/***/ 17126:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9221);
/* harmony import */ var _masknet_plugin_infra_dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69014);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91788);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95175);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22180);
/* harmony import */ var _utils_createNormalReactRoot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54409);
/* harmony import */ var _setup_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63184);
/* harmony import */ var _plugins_Transak_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79462);
/* harmony import */ var _plugins_Trader_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38329);

// @ts-ignore in case circle dependency make typescript complains




// import { PluginTransakMessages } from '../../plugins/Transak/messages'
// import { PluginTraderMessages, PluginTraderRPC } from '../../plugins/Trader/messages'
// import { PluginPetMessages } from '../../plugins/Pets/messages'






const msg = {
    Wallet: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletMessages */ .R,
    Swap: _plugins_Trader_messages__WEBPACK_IMPORTED_MODULE_10__/* .PluginTraderMessages */ .A,
    Transak: _plugins_Transak_messages__WEBPACK_IMPORTED_MODULE_9__/* .PluginTransakMessages */ .l
};
const rpc = {
    Wallet: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_4__/* .WalletRPC */ .V
};
// @ts-ignore To avoid build failure due to the circular project reference
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setService */ .Bo)(_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setMessages */ .Z)(_utils_messages__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages */ .q);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setPluginServices */ .cr)(rpc);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setPluginMessages */ .jg)(msg);
(0,_masknet_plugin_infra_dashboard__WEBPACK_IMPORTED_MODULE_2__/* .startPluginDashboard */ .CB)((0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_6__/* .createPluginHost */ .R)(undefined, _plugin_infra_host__WEBPACK_IMPORTED_MODULE_6__/* .createSharedContext */ .y));
_setup_ui__WEBPACK_IMPORTED_MODULE_8__/* .status.then */ .i.then(()=>(0,_utils_createNormalReactRoot__WEBPACK_IMPORTED_MODULE_7__/* .createNormalReactRoot */ .j)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .IntegratedDashboard */ .QG, {}))
);


/***/ }),

/***/ 38329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45374);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(6943)]).then(__webpack_require__.bind(__webpack_require__, 20145))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 79462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20102);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


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

/***/ 82192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "Du": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "ZZ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25513);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58248);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20940);






/***/ }),

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76618);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);




function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = identifier.userId || nickname || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .generateContactAvatarColor */ .eP)(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    });
}


/***/ }),

/***/ 54409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70195);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);





function createNormalReactRoot(jsx, container) {
    if (!container) container = document.getElementById('root') ?? void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .DisableShadowRootContext.Provider */ .AZ.Provider, {
            value: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .ErrorBoundary */ .SV, {
                children: jsx
            })
        })
    }));
}


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

/***/ 49723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useLocationChange(handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
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

/***/ 93455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ Avatar/* Avatar */.q),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "aW": () => (/* reexport */ collectNodeText/* collectNodeText */.a),
  "_r": () => (/* reexport */ collectNodeText/* collectTwitterEmoji */._),
  "ou": () => (/* reexport */ renderInShadowRoot/* createReactRootShadowed */.o),
  "GR": () => (/* reexport */ utils/* downloadUrl */.GR),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "sC": () => (/* reexport */ type_transform/* hasPayloadLike */.s),
  "bF": () => (/* reexport */ utils/* pasteImageToActiveElements */.bF),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "fy": () => (/* reexport */ watcher/* startWatch */.f),
  "ft": () => (/* reexport */ dom/* untilElementAvailable */.f),
  "JN": () => (/* reexport */ theme/* useClassicMaskSNSPluginTheme */.JN),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "SL": () => (/* reexport */ useLocationChange/* useLocationChange */.S),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "eD": () => (/* reexport */ useQueryNavigatorPermission),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme, asyncIteratorToArray, createNormalReactRoot, extraPermissions, fromRGB, getForegroundColor, isDark, isDarkTheme, nthChild, regexMatch, selectElementContents, shade, toRGB, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useSettingsSwitcher, useSuspense, useThemeLanguage

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(4004);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(55802);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(45908);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(9178);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(78831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(61451);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = [
    'query',
    'request',
    'revoke'
];
function checkPermissionApiUsability(type) {
    const r = {};
    for (const v of q){
        r[v] = (0,hasIn/* default */.Z)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react.useState)('prompt');
    (0,react.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || shared/* Flags.has_no_WebRTC */.vU.has_no_WebRTC) return;
        let permissionStatus;
        const handleChange = function() {
            updatePermission(this.state);
        };
        if (checkPermissionApiUsability('query')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .query({
                name
            }).then((p)=>{
                permissionStatus = p;
                permissionStatus.addEventListener('change', handleChange);
                updatePermission(permissionStatus.state);
            }).catch(()=>{
                // for some user agents which implemented `query` method
                // but rise an error if specific permission name dose not supported
                updatePermission('granted');
            });
        } else if (checkPermissionApiUsability('request')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .request({
                name
            }).then((p)=>{
                updatePermission(p.state);
            }).catch(()=>{
                updatePermission('granted');
            });
        } else {
            updatePermission('granted');
        }
        return ()=>permissionStatus?.removeEventListener('change', handleChange)
        ;
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(70236);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(49723);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts








// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts


// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(94201);
// EXTERNAL MODULE: ./src/utils/type-transform/index.ts
var type_transform = __webpack_require__(44887);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(21158);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(58379);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(54409);
// EXTERNAL MODULE: ./src/utils/theme/index.ts
var theme = __webpack_require__(17784);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(47675);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(93995);
// EXTERNAL MODULE: ./src/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(25986);
;// CONCATENATED MODULE: ./src/utils/index.ts


















/***/ }),

/***/ 95175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94670);



/***/ }),

/***/ 16660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal),
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4597);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17784);




const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change', 
];
const setupShadowRootPortal = ()=>{
    const shadow = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .setupPortalShadowRoot */ .d_)({
        mode: 'closed'
    });
    createReactRootShadowed(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_2__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_3__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        });
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
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

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements)
/* harmony export */ });
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73742);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 


/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}
/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    (0,_masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__/* .pasteImage */ .Mx)(new Uint8Array(await image.arrayBuffer()));
}
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}
function regexMatch(input, pattern, index = 1) {
    const r = input.match(pattern);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


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
  "hn": () => (/* reexport */ useLookupAddress/* useLookupAddress */.h),
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
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
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

// UNUSED EXPORTS: PluginWeb3ContextProvider, useAccountName, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAddressBook, useBeat, useBeatRetry, useBlockedNonFungibleTokens, useChainDescriptor, useChainIdSupport, useCurrencyType, useCurrentWeb3NetworkAccount, useCurrentWeb3NetworkChainId, useCurrentWeb3NetworkNetworkType, useCurrentWeb3NetworkProviderType, useDefaultChainId, useDefaultNetworkType, useFungibleAsset, useFungibleAssetSourceType, useGasOptionType, useNonFungibleAssetSourceType, useNonFungibleTokenPrice, useNonFungibleTokens, useNonFungibleTokensBalance, useNonFungibleTokensFromTokenList, useProviderDescriptors, useProviderReady, useSingleBlockBeatRetry, useSocialAddressList, useTokenSchema, useWalletPrimary, useZeroAddress

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

/***/ 58044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/CrashUI.tsx + 2 modules
var CrashUI = __webpack_require__(53747);
// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/context.ts
var context = __webpack_require__(49831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        });
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/index.ts




;// CONCATENATED MODULE: ../shared-base-ui/src/components/index.ts



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

/***/ 13339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
/* unused harmony export __DEBUG__ONLY__enableCryptoKeySerialization */
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14084);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78874);
/* harmony import */ var _Identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57041);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16761);
/* harmony import */ var _readableStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40025);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5294);
/// <reference path="./typeson.d.ts" />



// @ts-ignore





const pendingRegister = new Set();
let typeson;
function setup() {
    const { default: BigNumber  } = bignumber_js__WEBPACK_IMPORTED_MODULE_2__;
    // https://github.com/dfahlander/typeson-registry/issues/27
    typeson = new typeson__WEBPACK_IMPORTED_MODULE_0__/* .Typeson */ .oy({
        cyclic: false
    });
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .builtin */ .j0);
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .specialNumbers */ .so);
    typeson.register([
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .blob */ .Ik,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .file */ .tP,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .filelist */ .Jj,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .imagebitmap */ .xA
    ]);
    typeson.register({
        None: [
            (x)=>x === ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
            ,
            ()=>'None'
            ,
            ()=>ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
        ]
    });
    addClass('Ok', ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
    addClass('Err', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
    addClass('Some', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD);
    addClass('BigNumber', BigNumber);
    typeson.register({
        Identifier: [
            (x)=>x instanceof _Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier */ .xb
            ,
            (x)=>x.toText()
            ,
            (x)=>_Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier.from */ .xb.from(x).unwrap()
        ],
        ReadableStream: [
            ..._readableStream__WEBPACK_IMPORTED_MODULE_6__/* .readableStreamRegedit */ .t5
        ],
        Response: [
            ..._response__WEBPACK_IMPORTED_MODULE_5__/* .responseRegedit */ .R7
        ],
        Request: [
            ..._request__WEBPACK_IMPORTED_MODULE_7__/* .requestRegedit */ .qf
        ]
    });
    for (const a of pendingRegister)a();
}
const serializer = {
    serialization (from) {
        if (!typeson) setup();
        return typeson.encapsulate(from);
    },
    // cspell:disable-next-line
    deserialization (to) {
        if (!typeson) setup();
        return typeson.revive(to);
    }
};
/** THIS MUST NOT BE USED OUTSIDE OF A DEBUGGER CONTEXT */ function __DEBUG__ONLY__enableCryptoKeySerialization() {
    if (!typeson) setup();
    typeson.register(cryptokey);
}
function registerSerializableClass(name, a, b, c) {
    if (typeson) {
        if (b) typeson.register({
            [name]: [
                a,
                b,
                c
            ]
        });
        else addClass(name, a);
    } else {
        if (b) pendingRegister.add(()=>typeson.register({
                [name]: [
                    a,
                    b,
                    c
                ]
            })
        );
        else pendingRegister.add(()=>addClass(name, a)
        );
    }
}
function addClass(name, constructor) {
    Object.defineProperty(constructor, 'name', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: name
    });
    typeson.register({
        [name]: [
            (x)=>x instanceof constructor
            ,
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x1)=>{
                const y = Object.assign({}, x1);
                Object.getOwnPropertySymbols(y).forEach((x)=>Reflect.deleteProperty(y, x)
                );
                return typeson.encapsulate(y);
            },
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x)=>{
                const y = typeson.revive(x);
                Object.setPrototypeOf(y, constructor.prototype);
                return y;
            }, 
        ]
    });
}


/***/ }),

/***/ 68043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getLocalImplementation),
/* harmony export */   "k": () => (/* binding */ getLocalImplementationExotic)
/* harmony export */ });
// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param isBackground If the current environment is background.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {};
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for (const key of Object.keys(localImpl)){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for (const key1 of Object.keys(result)){
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    RPCCache.set(ref, await impl());
    return new Proxy({}, {
        get (_, key) {
            if (key === 'then') return;
            // @ts-ignore
            return RPCCache.get(ref)?.[key];
        }
    });
}


/***/ }),

/***/ 89241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37594);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67558);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12095);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55903);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35961);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42099);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24421);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75430);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62305);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterColoredIcon */ .g, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .FacebookColoredIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MindsIcon */ .G, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .InstagramColoredIcon */ .$, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .TwitterRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__/* .FacebookRoundIcon */ .F, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .MindsRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .InstagramRoundIcon */ .A, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_NAME = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: 'Twitter',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: 'Facebook',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: 'Mind',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: 'Instagram',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: 'OpenSea',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: 'Localhost'
};
const SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter
];
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;


/***/ }),

/***/ 91295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_0__.H9),
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

/***/ 68483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ useMenu)
/* harmony export */ });
/* unused harmony exports useMenuContext, useMenuConfig */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63439);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31217);




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [status, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        setAnchorEl(element);
        setOpen(true);
        // HACK: it seems like anchor doesn't work correctly
        // but a force repaint can solve the problem.
        window.requestAnimationFrame(update);
    }, []);
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const close = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
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
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "uw": () => (/* reexport */ LoadRetry/* RetryHint */.u),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "I4": () => (/* reexport */ constants/* SOCIAL_MEDIA_ICON_MAPPING */.I4),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "WU": () => (/* reexport */ SettingSwitch/* SettingSwitch */.W),
  "QL": () => (/* reexport */ contexts/* SharedContextProvider */.QL),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o),
  "zr": () => (/* reexport */ languages/* addSharedI18N */.z),
  "n2": () => (/* reexport */ constants/* mediaViewerUrl */.n2),
  "vU": () => (/* reexport */ contexts/* sharedUIComponentOverwrite */.vU),
  "Xr": () => (/* reexport */ contexts/* sharedUINetworkIdentifier */.Xr),
  "vI": () => (/* reexport */ hooks/* useImageChecker */.vI),
  "H9": () => (/* reexport */ hooks/* useMenu */.H9),
  "z": () => (/* reexport */ hooks/* useOpenShareTxDialog */.z),
  "yQ": () => (/* reexport */ contexts/* usePickToken */.yQ),
  "B_": () => (/* reexport */ locales/* useSharedI18N */.B),
  "Lm": () => (/* reexport */ contexts/* useShowConfirm */.Lm),
  "iD": () => (/* reexport */ hooks/* useSnackbarCallback */.iD)
});

// UNUSED EXPORTS: BaseSharedUIProvider, ChainIcon, CommonUIProvider, ConfirmProvider, EvmSharedUIProvider, MAX_WALLET_LIMIT, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, SharedTrans, TokenIconUI, TokenPickerProvider, createUITaskManager, languages, useBaseUIRuntime, useImageFailOver, useMenuConfig, useMenuContext, usePopupSnackbarCallback

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

/***/ 18822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* reexport safe */ _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__.D9),
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82737);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27466);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48941);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21784);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27692);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37341);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80922);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31363);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95789);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78258);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88762);
/* harmony import */ var _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15938);















const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()((theme, { offsetY  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12
    };
    const defaultVariant = {
        background: isDark ? '#17191D' : '#F7F9FA',
        color: isDark ? '#D9D9D9' : '#0F1419',
        [`& .${refs.title}`]: {
            color: isDark ? '#D9D9D9' : palette.grey['800']
        }
    };
    const success = {
        backgroundColor: '#60DFAB',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const error = {
        background: '#FF5F5F',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const info = {
        background: '#8CA3C7',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const warning = {
        backgroundColor: '#FFB915',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textLight */ .ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.greenMain */ .ZN.greenMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.redMain */ .ZN.redMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${warning.ref}`]: {
                color: '#ffffff'
            }
        },
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit'
        },
        texts: {
            marginLeft: theme.spacing(2)
        },
        title,
        message,
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        }
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .useStylesExtends */ .Bc)(useStyles({
        offsetY: props.offsetY
    }), props);
    const snackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const loadingIcon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_12__/* .LoadingIcon */ .H, {
        color: "inherit",
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id)
        ,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarContent */ .No, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, classes[props.variant]),
        children: [
            variantIcon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ offsetY , ...rest })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        }
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                id: key,
                variant: rest.variant ?? 'default',
                title: title,
                offsetY: offsetY
            })
        ,
        action: (key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    color: "inherit"
                })
            })
        ,
        classes: {
            containerRoot: classes.root,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantInfo: classes.info,
            variantWarning: classes.warning
        },
        ...rest
    });
});
function useCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 30381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C3": () => (/* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_11__.C),
/* harmony export */   "D9": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.D9),
/* harmony export */   "Df": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.Df),
/* harmony export */   "E1": () => (/* reexport safe */ _ButtonGroupTab__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   "Ii": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "Sx": () => (/* reexport safe */ _LoadingBase__WEBPACK_IMPORTED_MODULE_10__.S),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.YO),
/* harmony export */   "b4": () => (/* reexport safe */ _LoadingButton__WEBPACK_IMPORTED_MODULE_9__.b),
/* harmony export */   "g8": () => (/* reexport safe */ _PhoneNumberField__WEBPACK_IMPORTED_MODULE_8__.g),
/* harmony export */   "oe": () => (/* reexport safe */ _SendingCodeField__WEBPACK_IMPORTED_MODULE_7__.o),
/* harmony export */   "pL": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.p),
/* harmony export */   "qA": () => (/* reexport safe */ _CountdownButton__WEBPACK_IMPORTED_MODULE_6__.q),
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

/***/ 87883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.AZ),
/* harmony export */   "Bc": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "Cp": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.Cp),
/* harmony export */   "Dc": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.Dc),
/* harmony export */   "F4": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_1__.F4),
/* harmony export */   "Hr": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.Hr),
/* harmony export */   "I3": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.I3),
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.Q),
/* harmony export */   "QO": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.QO),
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
/* harmony export */   "AZ": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.AZ),
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "C3": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.C3),
/* harmony export */   "Cp": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Cp),
/* harmony export */   "D9": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.D9),
/* harmony export */   "Dc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Dc),
/* harmony export */   "Df": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Df),
/* harmony export */   "E1": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.E1),
/* harmony export */   "F4": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.F4),
/* harmony export */   "FU": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.FU),
/* harmony export */   "Hr": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Hr),
/* harmony export */   "Ii": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "Q": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "QO": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.QO),
/* harmony export */   "R_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "Sx": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Sx),
/* harmony export */   "US": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.US),
/* harmony export */   "YE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_6__.Y),
/* harmony export */   "YO": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.YO),
/* harmony export */   "ZL": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "b4": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.b4),
/* harmony export */   "d_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.d_),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "g8": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.g8),
/* harmony export */   "lu": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.lu),
/* harmony export */   "nb": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.nb),
/* harmony export */   "oe": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.oe),
/* harmony export */   "pL": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.pL),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "qA": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.qA),
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

/***/ 27554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gx": () => (/* reexport safe */ _blob_js__WEBPACK_IMPORTED_MODULE_1__.G),
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

/***/ }),

/***/ 88674:
/***/ ((module) => {

module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}}}');

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
/******/ 	/* webpack/runtime/chunk prefetch function */
/******/ 	(() => {
/******/ 		__webpack_require__.F = {};
/******/ 		__webpack_require__.E = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.F).map((key) => {
/******/ 				__webpack_require__.F[key](chunkId);
/******/ 			});
/******/ 		}
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
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 1993) return "js/1993.js";
/******/ 			if (chunkId === 9442) return "js/9442.js";
/******/ 			if (chunkId === 1950) return "js/1950.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1240":"npm-ns.ethersphere.bee-js","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","3375":"npm-ns.ethersproject.abstract-signer","3667":"npm.react-avatar-editor","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6912":"npm.react-draggable","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7597":"npm.pure-react-carousel","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","9223":"npm-ns.metaplex-foundation.mpl-auction","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 		__webpack_require__.j = 9966;
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
/******/ 			9966: 0
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
/******/ 		__webpack_require__.F.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
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
/******/ 	/* webpack/runtime/chunk prefetch trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"4601": [
/******/ 				5638,
/******/ 				2698,
/******/ 				9759,
/******/ 				7871,
/******/ 				8672,
/******/ 				6230,
/******/ 				2598,
/******/ 				2486,
/******/ 				7696,
/******/ 				3667,
/******/ 				4049,
/******/ 				9259,
/******/ 				8106,
/******/ 				5765,
/******/ 				4732,
/******/ 				3771,
/******/ 				3294,
/******/ 				4806,
/******/ 				5849,
/******/ 				871,
/******/ 				6709,
/******/ 				2087
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.prefetch = (chunkId, promises) => (Promise.all(promises).then(() => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.E);
/******/ 		}));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,7587,2372,2644,8722,8958], () => (__webpack_require__(17126)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,7587,2372,2644,8722,8958], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;