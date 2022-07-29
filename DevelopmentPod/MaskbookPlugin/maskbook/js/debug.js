/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 88299:
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
var f=__webpack_require__(58757),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 60119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G6": () => (/* reexport */ DecryptionTypes/* DecryptError */.G6),
  "OF": () => (/* reexport */ DecryptionTypes/* DecryptErrorReasons */.OF),
  "Pj": () => (/* reexport */ DecryptionTypes/* DecryptProgressKind */.Pj),
  "cV": () => (/* reexport */ AppendEncryption/* appendEncryptionTarget */.c),
  "pe": () => (/* reexport */ decrypt),
  "HI": () => (/* reexport */ Encryption/* encrypt */.HI)
});

// UNUSED EXPORTS: DecryptIntermediateProgressKind, EncryptError, EncryptErrorReasons, encodePostKey

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

/***/ 66525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.FW),
/* harmony export */   "G6": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.G6),
/* harmony export */   "Gq": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.Gq),
/* harmony export */   "HI": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.HI),
/* harmony export */   "Mk": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Mk),
/* harmony export */   "OF": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.OF),
/* harmony export */   "Pj": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.Pj),
/* harmony export */   "VC": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.VC),
/* harmony export */   "WZ": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.WZ),
/* harmony export */   "cV": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.cV),
/* harmony export */   "oX": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.oX),
/* harmony export */   "pe": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.pe),
/* harmony export */   "qx": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.qx)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91743);
/* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60119);
/* harmony import */ var _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61066);
/* harmony import */ var _image_steganography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27420);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53908);






// TODO: remove them in the future



/***/ }),

/***/ 61066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FW": () => (/* binding */ socialNetworkDecoder)
});

// UNUSED EXPORTS: TwitterDecoder, __TwitterEncoder, socialNetworkEncoder

// EXTERNAL MODULE: ../encryption/src/payload/types.ts
var types = __webpack_require__(80326);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../encryption/src/social-network-encode-decode/twitter.ts


/**
 * @link https://github.com/DimensionDev/Maskbook/issues/198
 */ function twitter_TwitterEncoder(text) {
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
    if (network === SocialNetworkEnum.Twitter) return __TwitterEncoder(content);
    return content;
}



/***/ }),

/***/ 73742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ju": () => (/* binding */ injectedPhantomProvider),
/* harmony export */   "pb": () => (/* binding */ injectedCoin98SolanaProvider),
/* harmony export */   "yR": () => (/* binding */ injectedSolflareProvider)
/* harmony export */ });
/* unused harmony exports injectedCoin98EVMProvider, injectedMetaMaskProvider, injectedMathWalletProvider, injectedWalletLinkProvider, pasteText, pasteImage, pasteInstagram, inputText, hookInputUploadOnce */
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
    sendEvent('paste', text);
}
function pasteImage(image) {
    sendEvent('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    sendEvent('instagramUpload', url);
}
function inputText(text) {
    sendEvent('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    sendEvent('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
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

/***/ 94670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29130);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25683);






/***/ }),

/***/ 25683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* unused harmony export setupMaskKVStorageBackend */
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

/***/ 14778:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/client.js
var client = __webpack_require__(70195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/extension/debug-page/issue.ts
const body = `\
# Bug Report

## Environment

User Agent: ${navigator.userAgent}
Version: ${"v1.29.12-2649-g196eec807-dirty"}
Tag Name: ${"v2.5.0"}
Build Date: ${"2022-06-27T08:57:48.276Z"}
Commit Hash: ${"196eec807"}
Commit Date: ${"2022-06-24T01:16:36.000Z"}
Remote URL: ${"https://github.com/DimensionDev/Maskbook.git"}
Branch Name: ${"feat/migrationToMobile"}

## Bug Info

### Actual Behavior

/* What happened? */\
`;
const makeNewBugIssueURL = ()=>{
    const url = new URL('https://github.com/DimensionDev/Maskbook/issues/new');
    url.searchParams.append('title', '[Bug] ');
    url.searchParams.append('labels', 'Type: Bug');
    url.searchParams.append('assignees', 'Jack-Works, jk234ert');
    url.searchParams.append('body', body);
    return url.toString();
};

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
;// CONCATENATED MODULE: ./src/extension/debug-page/DebugInfo.tsx





const DEBUG_INFO = {
    'User Agent': navigator.userAgent,
    'Mask Version': "v1.29.12-2649-g196eec807-dirty",
    'Build Date': process.env.channel_DATE,
    'Tag Name': "v2.5.0",
    'Commit Hash': "196eec807",
    'Commit Date': "2022-06-24T01:16:36.000Z",
    'Remote URL': "https://github.com/DimensionDev/Maskbook.git",
    'Branch Name': "feat/migrationToMobile",
    Dirty: true,
    'Tag Dirty': true
};
const DebugInfo = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const onNewBugIssue = ()=>(0,src/* openWindow */.xw)(makeNewBugIssueURL())
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                children: (0,map/* default */.Z)(DEBUG_INFO, (value, key)=>`${key}: ${value}`
                ).join('\n')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: onNewBugIssue,
                children: t('debug_new_bug_issue')
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/extension/debug-page/DatabaseOps.tsx




(0,shared_base_src/* __DEBUG__ONLY__enableCryptoKeySerialization */.ZI)();
const DatabaseOps = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const onBackup = async ()=>{
        const payload = await backupAll();
        if (payload === undefined) {
            return;
        }
        const timestamp = ((value1)=>{
            const values = [
                value1.getUTCFullYear(),
                value1.getUTCMonth() + 1,
                value1.getUTCDate(),
                value1.getUTCHours(),
                value1.getUTCMinutes(),
                value1.getUTCSeconds(), 
            ];
            return values.map((value)=>value.toString().padStart(2, '0')
            ).join('');
        })(new Date());
        download(`masknetwork-dump-${timestamp}.json`, payload);
    };
    const onRestore = async ()=>{
        const file = await DatabaseOps_select();
        if (file === undefined) {
            return;
        }
        // cspell:disable-next-line
        const parsed = await shared_base_src/* serializer.deserialization */.GM.deserialization(await file.text());
        await restoreAll(parsed);
    };
    const onClear = async ()=>{
        const databases = await indexedDB.databases?.();
        if (databases === undefined) {
            return;
        }
        await Promise.all(databases.map(async ({ name  })=>{
            if (!name) return;
            await timeout((0,with_async_ittr/* wrap */.re)(indexedDB.deleteDatabase(name)), 500);
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onBackup,
                    children: t('database_backup')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRestore,
                    children: t('database_overwrite')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onClear,
                    children: t('database_clear')
                })
            })
        ]
    });
};
function DatabaseOps_select() {
    return new Promise((resolve)=>{
        const element = document.createElement('input');
        element.type = 'file';
        element.addEventListener('change', ()=>{
            resolve(element.files?.[0]);
        });
        element.click();
    });
}
function download(name, part) {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(new Blob([
        part
    ]));
    element.download = name;
    element.click();
}
function timeout(promise, time) {
    return Promise.race([
        promise,
        new Promise((resolve)=>setTimeout(()=>resolve(undefined)
            , time)
        )
    ]);
}
async function restoreAll(parsed) {
    for (const { name: name1 , version , stores  } of parsed.instances){
        const db1 = await (0,with_async_ittr/* openDB */.X3)(name1, version, {
            upgrade (db) {
                for (const name of db.objectStoreNames){
                    db.deleteObjectStore(name);
                }
                for (const [storeName, { autoIncrement , keyPath , indexes  }] of Object.entries(stores)){
                    const store = db.createObjectStore(storeName, {
                        autoIncrement,
                        keyPath
                    });
                    for (const { name , keyPath: keyPath3 , multiEntry , unique  } of indexes){
                        store.createIndex(name, keyPath3, {
                            multiEntry,
                            unique
                        });
                    }
                }
            }
        });
        for (const [storeName1, { records , keyPath: keyPath1  }] of stores.entries()){
            await db1.clear(storeName1);
            for (const [key, value] of records){
                try {
                    if (keyPath1) {
                        await db1.add(storeName1, value);
                    } else {
                        await db1.add(storeName1, value, key);
                    }
                } catch (error) {
                    console.error('Recover error when ', key, value, parsed);
                    // Error from IndexedDB transaction is not recoverable
                    throw error;
                }
            }
        }
    }
}
async function backupAll() {
    const databases = await indexedDB.databases?.();
    if (databases === undefined) {
        return;
    }
    const instances = [];
    for (const { name , version  } of databases){
        if (!name || !version) continue;
        const db = await timeout((0,with_async_ittr/* openDB */.X3)(name, version), 500);
        if (db === undefined) {
            continue;
        }
        const stores = new Map();
        for (const name2 of db.objectStoreNames){
            const store = db.transaction(name2).store;
            const indexes = [];
            for (const indexName of store.indexNames){
                const index = store.index(indexName);
                indexes.push({
                    name: index.name,
                    unique: index.unique,
                    multiEntry: index.multiEntry,
                    keyPath: index.keyPath
                });
            }
            const records = new Map();
            for await (const cursor of store){
                records.set(cursor.key, cursor.value);
            }
            stores.set(name2, {
                keyPath: store.keyPath,
                autoIncrement: store.autoIncrement,
                indexes,
                records
            });
        }
        instances.push({
            name,
            version,
            stores
        });
    }
    const payload = {
        buildInfo: {
            'user-agent': navigator.userAgent,
            version: "v1.29.12-2649-g196eec807-dirty",
            'build-date': "2022-06-27T08:57:48.276Z",
            'tag-name': "v2.5.0",
            'commit-hash': "196eec807",
            'commit-date': "2022-06-24T01:16:36.000Z",
            'remote-url': "https://github.com/DimensionDev/Maskbook.git",
            'branch-name': "feat/migrationToMobile",
            dirty: true,
            'tag-dirty': true
        },
        instances
    };
    return JSON.stringify(shared_base_src/* serializer.serialization */.GM.serialization(payload), undefined, 2);
}

;// CONCATENATED MODULE: ./src/extension/debug-page/Entry.tsx



const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabaseOps, {})
        ]
    })
;

;// CONCATENATED MODULE: ./src/extension/debug-page/index.tsx



const container = document.createElement('main');
document.body.appendChild(container);
(0,client/* createRoot */.s)(container).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {}));


/***/ }),

/***/ 78778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ServicesWithProgress */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17889);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
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
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(3884), __webpack_require__.e(3437)]).then(__webpack_require__.bind(__webpack_require__, 23437))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4544), __webpack_require__.e(2943), __webpack_require__.e(1993), __webpack_require__.e(9442), __webpack_require__.e(1950)]).then(__webpack_require__.bind(__webpack_require__, 61950))
    , 'Identity'),
    Backup: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4544), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(6045), __webpack_require__.e(6265), __webpack_require__.e(4859), __webpack_require__.e(1993), __webpack_require__.e(30), __webpack_require__.e(6685), __webpack_require__.e(871), __webpack_require__.e(8273)]).then(__webpack_require__.bind(__webpack_require__, 48273))
    , 'Backup'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 7968).then(__webpack_require__.bind(__webpack_require__, 67968))
    , 'Helper'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 2429).then(__webpack_require__.bind(__webpack_require__, 92429))
    , 'SocialNetwork'),
    Settings: add(()=>__webpack_require__.e(/* import() */ 9972).then(__webpack_require__.bind(__webpack_require__, 9972))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 7207).then(__webpack_require__.bind(__webpack_require__, 87207))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(3884), __webpack_require__.e(7044)]).then(__webpack_require__.bind(__webpack_require__, 67044))
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

/***/ 5903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "Ct": () => (/* binding */ userGuideStatus),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "gG": () => (/* binding */ dismissVerifyNextID),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings)
/* harmony export */ });
/* unused harmony exports userGuideVersion, sayHelloShowed, userPinExtension, bioDescription, personalHomepage */
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

/***/ 8529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports isMobileTwitter, twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 10863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports getEditorContent, isMobile, isCompose, hasFocus, hasEditor */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38129);

const getEditorContent = ()=>{
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
};
const isMobile = ()=>globalThis.location.host.includes('mobile')
;
const isCompose = ()=>globalThis.location.pathname.includes('compose')
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!postEditorDraftContentSelector().evaluate()
;


/***/ }),

/***/ 38129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ searchAllProfileTabSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileTabListLastChildSelector, searchProfileTabPageSelector, searchProfileTabLoseConnectionPageSelector, searchProfileEmptySelector, searchProfileActiveTabSelector, searchProfileTabSelector, searchAppBarBackSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchProfileTabListSelector, searchForegroundColorSelector, searchNewTweetButtonSelector, searchNickNameSelector, searchAvatarSelector, searchNFTAvatarSelector, searchAvatarMetaSelector, profileFollowButtonSelector, profileMenuButtonSelector, searchEditProfileSelector, bioCardSelector, rootSelector, composeAnchorSelector, composeAnchorTextSelector, headingTextSelector, postEditorContentInPopupSelector, postEditorInPopupSelector, toolBoxInSideBarSelector, sideBarProfileSelector, postEditorInTimelineSelector, isReplyPageSelector, postEditorDraftContentSelector, searchResultHeadingSelector, postEditorToolbarSelector, twitterMainAvatarSelector, newPostButtonSelector, profileBioSelector, personalHomepageSelector, bioPageUserNickNameSelector, bioPageUserIDSelector, floatingBioCardSelector, postsImageSelector, timelinePostContentSelector, postsContentSelector, postAvatarsContentSelector, selfInfoSelectors, searchSelfHandleSelector, searchSelfNicknameSelector, searchWatcherAvatarSelector, searchSelfAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchTwitterAvatarOpenFilesSelector, searchProfileSaveSelector, searchProfessionalButtonSelector, searchProfileSetAvatarSelector, searchTwitterAvatarLinkSelector, searchTwitterAvatarSelector, searchUseCellSelector, searchTweetAvatarSelector, searchRetweetAvatarSelector, searchTwitterAvatarNFTSelector, searchTwitterAvatarNFTLinkSelector, searchReplyToolbarSelector, searchRejectReplyTextSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47675);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8529);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10863);




const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new LiveSelector().querySelectorAll(selector);
};
// #region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] div + [role="navigation"][aria-label] [data-testid="ScrollSnap-nextButtonWrapper"]')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[aria-label]:not([role="progressbar"])')
;
const searchProfileTabLoseConnectionPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[dir="auto"]:not([role="progressbar"])')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchAllProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"]')
;
const searchAppBarBackSelector = ()=>querySelector('[data-testid="app-bar-back"] > div')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>{
    const q = querySelector('[data-testid="FloatingActionButtons_Tweet_Button"]');
    if (q.evaluate()) return q;
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
};
const searchNickNameSelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="UserName"] div[dir="auto"] > span > span')
;
const searchAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/photo"] img[src*="profile_images"]')
;
const searchNFTAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/nft"] img[src*="profile_images"]')
;
const searchAvatarMetaSelector = ()=>querySelector('head > meta[property="og:image"]:last-child')
;
const profileFollowButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"] ~ [data-testid="placementTracking"]')
;
// To get margin bottom of menu button, and apply it to tip button to align it.
const profileMenuButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"]')
;
const searchEditProfileSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href="/settings/profile"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
// #endregion
const rootSelector = ()=>querySelector('#react-root')
;
// `aside *` selectors are for mobile mode
const composeAnchorSelector = ()=>querySelector([
        'header[role=banner] a[href="/compose/tweet"]',
        'aside a[href="/compose/tweet"]',
        // can't see the compose button on share popup, use the tweetButton instead
        '[role=main] [role=button][data-testid=tweetButton]', 
    ].join())
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir],aside a[href="/compose/tweet"] div[dir]')
;
const headingTextSelector = ()=>querySelector('[role="banner"] [role="heading"]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"]  div[data-testid="toolBar"] div[data-testid="geoButton"]')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const sideBarProfileSelector = ()=>querySelector('[role="banner"] [role="navigation"] [data-testid="AppTabBar_Profile_Link"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const isReplyPageSelector = ()=>!!location.pathname.match(/^\/\w+\/status\/\d+$/)
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector('[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]');
    }
    if (isReplyPageSelector()) {
        return querySelector('div[data-testid="tweetTextarea_0"]');
    }
    return (isCompose() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[role="main"] [data-testid="primaryColumn"] [role="region"] > [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const twitterMainAvatarSelector = ()=>querySelector('[data-testid="toolBar"]').closest(4).querySelector('div > a > div > :nth-child(2) > div')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const profileBioSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const personalHomepageSelector = ()=>querySelector('[data-testid="UserUrl"]')
;
const bioPageUserNickNameSelector = ()=>querySelector('[data-testid="UserDescription"]').map((x)=>x.parentElement?.parentElement?.previousElementSibling
    ).querySelector('div[dir]')
;
const bioPageUserIDSelector = (selector)=>selector().map((x)=>x.parentElement?.nextElementSibling?.innerText?.replace('@', '')
    )
;
const floatingBioCardSelector = ()=>querySelector('[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]')
;
const postsImageSelector = (node)=>new LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].join())
;
const timelinePostContentSelector = ()=>querySelectorAll([
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]'
    ].join())
;
const postsContentSelector = ()=>querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]',
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets
        '[data-testid="tweet"] + div div[role="link"] div[lang]',
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]',
        // reply-tweets
        '[data-testid="tweet"] + div div div[lang][dir]', 
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        const textElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('[data-testid="card.wrapper"]')?.previousElementSibling;
        return summaryCardElement;
    }))
;
const postAvatarsContentSelector = ()=>querySelectorAll('[data-testid="tweet"] > div > div > div > :nth-child(2)')
;
const base = querySelector('#react-root ~ script');
const handle = /"screen_name":"(.*?)"/;
const name = /"name":"(.*?)"/;
const bio = /"description":"(.*?)"/;
const avatar = /"profile_image_url_https":"(.*?)"/;
/**
 * first matched element can be extracted by index zero, followings are all capture groups, if no 'g' specified.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 */ const p = (regex, index)=>{
    return base.clone().map((x)=>regexMatch(x.innerText, regex, index)
    );
};
const selfInfoSelectors = ()=>({
        handle: p(handle, 1),
        name: p(name, 1),
        bio: p(bio, 1),
        userAvatar: p(avatar, 1)
    })
;
// #region self info
const searchSelfHandleSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="ltr"] span',
        '#layers [role="group"] [role="dialog"] [role="link"] [dir="ltr"] span'
    ].join());
};
const searchSelfNicknameSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="auto"] span span',
        '#layers [role="group"] [role="dialog"] [role="link"] span span'
    ].join());
};
const searchWatcherAvatarSelector = ()=>querySelector('[data-testid="SideNav_AccountSwitcher_Button"] img')
;
const searchSelfAvatarSelector = ()=>{
    return querySelector([
        '#layers ~ div [role="banner"] [role="button"] img',
        '[data-testid="DashButton_ProfileIcon_Link"] [role="presentation"] img',
        '#layers [role="group"] [role="dialog"] [role="link"] img'
    ].join());
};
// #endregion
// #region twitter nft avatar
const searchProfileAvatarSelector = ()=>{
    return querySelectorAll('[data-testid="fileInput"]').at(1).closest(4);
};
const searchProfileAvatarParentSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).evaluate()[0].firstChild?.firstChild?.lastChild?.firstChild
;
const searchAvatarSelectorInput = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > :first-child')
;
const searchAvatarSelectorImage = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > img')
;
const searchTwitterAvatarOpenFilesSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1)
;
const searchProfileSaveSelector = ()=>querySelector('[data-testid="Profile_Save_Button"]')
;
const searchProfessionalButtonSelector = ()=>querySelector('[data-testid*="ProfessionalButton"]')
;
const searchProfileSetAvatarSelector = ()=>isMobileTwitter ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : querySelector('[data-testid^="ProfileBirthdate"]').closest(5).querySelector('div > div:nth-child(2) > div:nth-child(2)')
;
// #endregion
// #region avatar selector
const searchTwitterAvatarLinkSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('div  a')
;
const searchTwitterAvatarSelector = ()=>querySelector('a[href$="/photo"]').querySelector('img').closest(1)
;
// #endregion
// #region twitter avatar
const searchUseCellSelector = ()=>querySelector('[data-testid="UserCell"]')
;
// #endregion
const searchTweetAvatarSelector = ()=>querySelector('[data-testid="tweetButtonInline"]').closest(7)
;
const searchRetweetAvatarSelector = ()=>querySelector('[data-testid="tweetButton"]').closest(6)
;
const searchTwitterAvatarNFTSelector = ()=>querySelector('a[href$="/nft"]').closest(1).querySelector('a div:nth-child(3) > div')
;
const searchTwitterAvatarNFTLinkSelector = ()=>querySelector('a[href$="/nft"]')
;
const searchReplyToolbarSelector = ()=>querySelector('div[data-testid="primaryColumn"] div[data-testid="toolBar"]').querySelector('div[data-testid="geoButton"]')
;
const searchRejectReplyTextSelector = ()=>querySelector('div[data-testid="tweetTextarea_0"] > div > div > div > span')
;


/***/ }),

/***/ 20940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs)
/* harmony export */ });
/* unused harmony exports activateSocialNetworkUI, defineSocialNetworkUI */
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

/***/ 82192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25513);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58248);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20940);






/***/ }),

/***/ 25513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports stateCreator, creator */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23587);



const stateCreator = {
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
const creator = {
    EmptyIdentityResolveProviderState: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({}, lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)
    ,
    EmptyPostProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableWeakMap */ .$f()
};


/***/ }),

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Avatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);




function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = identifier.userId || nickname || '';
    const [first, last] = name.split(' ');
    const theme = useTheme().palette.mode;
    return /*#__PURE__*/ _jsxs(MuiAvatar, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: generateContactAvatarColor(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    });
}


/***/ }),

/***/ 49723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useLocationChange */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useLocationChange(handler) {
    useEffect(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}


/***/ }),

/***/ 93455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "JN": () => (/* reexport */ theme/* useClassicMaskSNSPluginTheme */.JN),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: Avatar, MaskDarkTheme, MaskLightTheme, asyncIteratorToArray, collectNodeText, collectTwitterEmoji, createNormalReactRoot, createReactRootShadowed, downloadUrl, extraPermissions, fromRGB, getForegroundColor, hasPayloadLike, isDark, isDarkTheme, nthChild, pasteImageToActiveElements, regexMatch, selectElementContents, shade, startWatch, toRGB, untilElementAvailable, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useLocationChange, useQueryNavigatorPermission, useSettingsSwitcher, useSuspense, useThemeLanguage

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
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = (/* unused pure expression or super */ null && ([
    'query',
    'request',
    'revoke'
]));
function checkPermissionApiUsability(type) {
    const r = {};
    for (const v of q){
        r[v] = hasIn(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = useState('prompt');
    useEffect(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || Flags.has_no_WebRTC) return;
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
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal)
/* harmony export */ });
/* unused harmony export createReactRootShadowed */
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

/***/ 74280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ isDarkTheme),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor)
/* harmony export */ });
/* unused harmony exports isDark, toRGB, fromRGB, shade, getForegroundColor */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8218);

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join()})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Math.floor(c * (100 + percentage) / 100), 0, 255)
    );
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10), 
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function getForegroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).color;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function isDarkTheme(element = document.body) {
    const color = getComputedStyle(element).backgroundColor;
    let rgb;
    if (isRGBA(color)) {
        rgb = fromRGB(fromRGBAtoRGB(color));
    } else {
        rgb = fromRGB(color);
    }
    if (!rgb) return true;
    return isDark(rgb);
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
/* harmony export */   "dF": () => (/* reexport safe */ _color_tools__WEBPACK_IMPORTED_MODULE_0__.dF)
/* harmony export */ });
/* harmony import */ var _color_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74280);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _useColorStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24103);
/* harmony import */ var _useErrorStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5839);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65095);
/* harmony import */ var _useClassicMaskSNSTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51602);
// Do not export more files. Those files are deprecated.








/***/ }),

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports downloadUrl, pasteImageToActiveElements, selectElementContents, regexMatch */
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73742);
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
            return Services.Helper.fetch(url);
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
    pasteImage(new Uint8Array(await image.arrayBuffer()));
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
    if (isNull(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* unused harmony export CompositionContext */
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
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails)
/* harmony export */ });
/* unused harmony exports PostInfoProvider, usePostInfo */
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

/***/ 20778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__.D4),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "KP": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.KP),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__.Pz),
/* harmony export */   "fI": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.fI),
/* harmony export */   "je": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.je)
/* harmony export */ });
/* harmony import */ var _entry_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89239);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34604);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86843);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);






/***/ }),

/***/ 89239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KP": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.KP),
/* harmony export */   "Rc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Rc),
/* harmony export */   "fI": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.fI),
/* harmony export */   "je": () => (/* reexport safe */ _entry__WEBPACK_IMPORTED_MODULE_0__.je)
/* harmony export */ });
/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _utils_createInjectHooksRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77319);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98119);





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
  "KQ": () => (/* reexport */ useBalance/* useBalance */.K),
  "Ov": () => (/* reexport */ useBlockNumber/* useBlockNumber */.O),
  "oN": () => (/* reexport */ useBlockTimestamp/* useBlockTimestamp */.o),
  "v8": () => (/* reexport */ useBlockedFungibleTokens/* useBlockedFungibleTokens */.v),
  "YT": () => (/* reexport */ useBlockie/* useBlockie */.Y),
  "xx": () => (/* reexport */ useChainId/* useChainId */.x),
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

// UNUSED EXPORTS: PluginWeb3ContextProvider, useAccountName, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAddressBook, useAvailablePlugins, useBeat, useBeatRetry, useBlockedNonFungibleTokens, useChainColor, useChainDescriptor, useChainIdMainnet, useChainIdSupport, useCurrencyType, useCurrentWeb3NetworkAccount, useCurrentWeb3NetworkChainId, useCurrentWeb3NetworkNetworkType, useCurrentWeb3NetworkProviderType, useDefaultChainId, useDefaultNetworkType, useFungibleAsset, useFungibleAssetSourceType, useGasOptionType, useLookupAddress, useNonFungibleAssetSourceType, useNonFungibleTokenPrice, useNonFungibleTokens, useNonFungibleTokensBalance, useNonFungibleTokensFromTokenList, useProviderDescriptors, useProviderReady, useSingleBlockBeatRetry, useSocialAddressList, useTokenSchema, useTransactions, useWalletPrimary, useZeroAddress

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
  "fI": () => (/* reexport */ usePluginWrapper/* usePluginWrapper */.fI)
});

// UNUSED EXPORTS: useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAvailablePlugins, usePluginI18NField

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(42711);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(95219);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(76859);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(17635);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var es_useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useI18N.tsx


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,es_useTranslation/* useTranslation */.$)();
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
    const [t] = useTranslation();
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

/***/ 17635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useAllPluginsWeb3State)
/* harmony export */ });
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87434);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34604);


function useAllPluginsWeb3State() {
    const pluginsSNSAdaptor = (0,_manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor */ .Pz)('any');
    const pluginsDashboard = (0,_manager_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginsDashboard */ .eE)();
    const entries = [
        ...pluginsSNSAdaptor,
        ...pluginsDashboard
    ].filter((definition)=>definition.Web3State
    ).map((definition)=>[
            definition.ID,
            definition.Web3State
        ]
    );
    return Object.fromEntries(entries);
}


/***/ }),

/***/ 82479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fI": () => (/* binding */ usePluginWrapper)
/* harmony export */ });
/* unused harmony exports emptyPluginWrapperMethods, PluginWrapperMethodsContext */
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

/***/ 34604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony exports useIsMinimalMode, useActivatedPluginSNSAdaptor_Web3Supported */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46123);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32670);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93996);





const { events , activated , startDaemon , minimalMode  } = (0,_manage__WEBPACK_IMPORTED_MODULE_3__/* .createManager */ .m)((def)=>def.SNSAdaptor
);
const activatedSub = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on('activateChanged', f)
};
const minimalModeSub = {
    getCurrentValue: ()=>[
            ...minimalMode
        ]
    ,
    subscribe: (f)=>events.on('minimalModeChanged', f)
};
function useActivatedPluginsSNSAdaptor(minimalModeEqualsTo) {
    const minimalMode1 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(minimalModeSub);
    const result = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(activatedSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode1.includes(x.ID)
        );
        else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode1.includes(x.ID)
        );
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        result,
        minimalMode1,
        minimalModeEqualsTo
    ]);
}
useActivatedPluginsSNSAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSNSAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return useSubscription(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSNSAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSNSAdaptor(minimalModeEqualsTo);
    const minimalMode2 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(minimalModeSub);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const result = plugins.find((x)=>x.ID === pluginID
        );
        if (!result) return result;
        if (minimalModeEqualsTo === 'any') return result;
        else if (minimalModeEqualsTo === true) {
            if (minimalMode2.includes(result.ID)) return result;
            return undefined;
        } else if (minimalModeEqualsTo === false) {
            if (minimalMode2.includes(result.ID)) return undefined;
            return result;
        }
        (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(minimalModeEqualsTo);
    }, [
        pluginID,
        plugins,
        minimalMode2,
        minimalModeEqualsTo
    ]);
}
function useActivatedPluginSNSAdaptor_Web3Supported(chainId, pluginID) {
    const plugins = useActivatedPluginsSNSAdaptor('any');
    const entries = plugins.map((plugin)=>{
        if (!plugin.enableRequirement.web3) return [
            plugin.ID,
            true
        ];
        const supportedChainIds = plugin.enableRequirement.web3?.[pluginID]?.supportedChainIds;
        return [
            plugin.ID,
            supportedChainIds?.includes(chainId) ?? false
        ];
    });
    return Object.fromEntries(entries);
}
function startPluginSNSAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store__WEBPACK_IMPORTED_MODULE_4__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        // boolean | undefined
        const status = def.enableRequirement.networks.networks[currentNetwork];
        if (def.enableRequirement.networks.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.networks.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 77319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createInjectHooksRenderer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82479);






const PropsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = useState(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ _jsx(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ _jsx(PluginWrapperMethodsContext.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = usePluginI18NField();
        const props = useContext(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ _jsx(ErrorBoundary, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ _jsx(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const allPlugins = usePlugins();
        const availablePlugins = useAvailablePlugins(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ _jsx(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ _jsx(ShadowRootIsolation, {
                    "data-plugin": plugin.ID,
                    children: /*#__PURE__*/ _jsx(SinglePluginWithinErrorBoundary, {
                        plugin: plugin
                    })
                })
            }, plugin.ID)
        );
        return /*#__PURE__*/ _jsx(_Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ memo(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ _jsx("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ _jsx(ErrorBoundary, {
                children: /*#__PURE__*/ _jsx(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ _jsx(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ _jsx(UI, {
        ...data
    });
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = useState();
    const [f, setF] = useState();
    const cancel = useRef();
    useEffect(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    useEffect(()=>void f?.(data)
    , [
        f,
        data
    ]);
    return /*#__PURE__*/ _jsx("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 26675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainColor */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainColor(pluginID, expectedChainId) {
    const chainId = useChainId(pluginID, expectedChainId);
    const { Others  } = useWeb3State(pluginID);
    return Others?.chainResolver.chainColor?.(chainId) ?? 'transparent';
}


/***/ }),

/***/ 75080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainIdMainnet */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainIdMainnet(pluginID, expectedChainId) {
    const chainId = useChainId(pluginID, expectedChainId);
    const { Others  } = useWeb3State(pluginID);
    return Others?.chainResolver.isMainnet?.(chainId) ?? false;
}


/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72128);



function useChainIdValid(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)(pluginID);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (!account || Others?.chainResolver.isValid?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 19199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40969);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Networks?.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((expectedChainIdOrNetworkTypeOrID ?? networkType) ?? '')
    );
}


/***/ }),

/***/ 45428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNonFungibleAssets)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72128);
/* harmony import */ var _useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3859);






function useNonFungibleAssets(pluginID, schemaType, options) {
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    const [done, setDone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [loading, toggleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)(pluginID);
    const hub = (0,_useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Hub */ .h)(pluginID, options);
    const networks = (0,_useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkDescriptors */ .p)(pluginID);
    // create iterator
    const iterator = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!account && !options?.account || !hub?.getNonFungibleTokens || !networks) return;
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
        return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .flattenAsyncIterator */ .DA)(networks.filter((x)=>x.isMainnet
        ).filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ).map((x)=>{
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .pageableToIterator */ .J)(async (indicator)=>{
                if (!hub?.getNonFungibleTokens) return;
                return hub?.getNonFungibleTokens(options?.account ?? account, {
                    indicator,
                    size: 50,
                    ...options,
                    chainId: x.chainId
                });
            });
        }));
    }, [
        hub?.getNonFungibleTokens,
        account,
        JSON.stringify(options),
        networks.length
    ]);
    const next = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!iterator || done) return;
        const batchResult = [];
        toggleLoading(true);
        try {
            for (const v of Array.from({
                length: options?.size ?? 36
            })){
                const { value , done: iteratorDone  } = await iterator.next();
                if (value instanceof Error) {
                    // Controlled error
                    setError(value.message);
                    break;
                } else {
                    if (iteratorDone) {
                        setDone(true);
                        break;
                    }
                    if (!iteratorDone && value) {
                        batchResult.push(value);
                    }
                }
            }
        } catch (error_) {
            // Uncontrolled error
            setError(error_);
            setDone(true);
        }
        toggleLoading(false);
        setAssets((pred)=>[
                ...pred,
                ...batchResult
            ]
        );
    }, [
        iterator,
        done
    ]);
    // Execute once after next update
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (next) next();
    }, [
        next
    ]);
    const retry = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
    }, []);
    return {
        value: assets.filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ),
        next,
        loading,
        done,
        retry,
        error
    };
}


/***/ }),

/***/ 41623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52892);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Providers?.find((x)=>[
            x.type,
            x.ID
        ].includes((expectedProviderTypeOrID ?? providerType) ?? '')
    );
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

/***/ 84702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSocialAddressListAll)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67938);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85478);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58500);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12368);





const addressCache = new (lru_cache__WEBPACK_IMPORTED_MODULE_2___default())({
    max: 500,
    ttl: 2 * 60 * 1000
});
/**
 * Get all social addresses under of all networks.
 */ function useSocialAddressListAll(identity, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const userId = identity?.identifier?.userId;
        if (!userId || userId === '$unknown') return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_LIST */ .rP;
        let cached = addressCache.get(userId);
        if (!cached) {
            cached = Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []
            ));
            addressCache.set(userId, cached);
        }
        const allSettled = await cached;
        const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []
        );
        return sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
    }, [
        identity,
        sorter,
        EVM_IdentityService?.lookup,
        SolanaIdentityService?.lookup
    ]);
}


/***/ }),

/***/ 21627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ FileInfoV1ToV2),
/* harmony export */   "Gd": () => (/* binding */ makeFileKeySigned),
/* harmony export */   "ri": () => (/* binding */ FileInfoMetadataReader),
/* harmony export */   "u": () => (/* binding */ resolveGatewayAPI)
/* harmony export */ });
/* harmony import */ var _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30003);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94529);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8634);
/* harmony import */ var _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30460);
/* harmony import */ var _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10857);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29330);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);








const reader_v1 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_1 */ .ki, _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__);
const reader_v2 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_2 */ .lw, _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
}
async function makeFileKeySigned(fileKey) {
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeText */ .YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeArrayBuffer */ .ll);
}
const resolveGatewayAPI = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createLookupTableResolver */ .FG)({
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.arweave */ .z.arweave]: 'https://arweave.net',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.ipfs */ .z.ipfs]: 'https://infura-ipfs.io/ipfs',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.swarm */ .z.swarm]: 'https://bee-2.gateway.ethswarm.org/bzz'
}, ()=>'Unknown provider'
);


/***/ }),

/***/ 787:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87245);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21627);



(0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .registerPlugin */ .fo)({
    ..._base__WEBPACK_IMPORTED_MODULE_1__/* .base */ .u,
    SNSAdaptor: {
        load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(405), __webpack_require__.e(6316), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1675)]).then(__webpack_require__.bind(__webpack_require__, 56812))
        ,
        hotModuleReload: (hot)=>{
            /* unsupported import.meta.webpackHot */ undefined && 0;
        }
    },
    Worker: {
        load: ()=>__webpack_require__.e(/* import() */ 7524).then(__webpack_require__.bind(__webpack_require__, 97524))
        ,
        hotModuleReload: (hot)=>{
            /* unsupported import.meta.webpackHot */ undefined && 0;
        }
    }
});


/***/ }),

/***/ 55028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RelationFavor)
/* harmony export */ });
var RelationFavor;
(function(RelationFavor) {
    RelationFavor[RelationFavor["COLLECTED"] = -1] = "COLLECTED";
    RelationFavor[RelationFavor["UNCOLLECTED"] = 1] = "UNCOLLECTED";
    RelationFavor[RelationFavor["DEPRECATED"] = 0] = "DEPRECATED";
})(RelationFavor || (RelationFavor = {}));


/***/ }),

/***/ 52684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "P7": () => (/* binding */ LanguageOptions),
/* harmony export */   "iu": () => (/* binding */ SupportedLanguages),
/* harmony export */   "z4": () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony exports Appearance, LaunchPage */
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
    TradeProvider[TradeProvider["VENOMSWAP"] = 16] = "VENOMSWAP";
    TradeProvider[TradeProvider["OPENSWAP"] = 17] = "OPENSWAP";
    TradeProvider[TradeProvider["DEFIKINGDOMS"] = 18] = "DEFIKINGDOMS";
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

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
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

/***/ 69395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export EncryptionTargetType */
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

/***/ 45816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C9": () => (/* reexport */ register_ns/* createI18NBundle */.C),
  "BV": () => (/* reexport */ i18NextInstance),
  "BF": () => (/* reexport */ updateLanguage)
});

// EXTERNAL MODULE: ../shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(79717);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(60718);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@21.8.2/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(35927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@6.1.4/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js + 2 modules
var i18nextBrowserLanguageDetector = __webpack_require__(52647);
;// CONCATENATED MODULE: ../shared-base/src/i18n/instance.ts



const i18NextInstance = i18next/* default */.ZP;
if (false) {}
if (!i18next/* default.isInitialized */.ZP.isInitialized) {
    i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).init({
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        contextSeparator: '$',
        fallbackLng: {
            'zh-CN': [
                'zh-TW',
                'en'
            ],
            'zh-TW': [
                'zh-CN',
                'en'
            ],
            default: [
                'en'
            ]
        },
        defaultNS: 'mask',
        nonExplicitSupportedLngs: true,
        detection: {
            order: [
                'navigator'
            ]
        }
    });
}
function updateLanguage(next) {
    if (next === src/* LanguageOptions.__auto__ */.P7.__auto__) {
        const result = i18next/* default.services.languageDetector.detect */.ZP.services.languageDetector.detect();
        i18next/* default.changeLanguage */.ZP.changeLanguage(result[0] || src/* LanguageOptions.enUS */.P7.enUS);
    } else {
        i18next/* default.changeLanguage */.ZP.changeLanguage(next);
    }
}

;// CONCATENATED MODULE: ../shared-base/src/i18n/index.ts




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
  "ZI": () => (/* reexport */ serializer/* __DEBUG__ONLY__enableCryptoKeySerialization */.ZI),
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

// UNUSED EXPORTS: EncryptionTargetType, Identifier, MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH, MimeTypes, PersonaIdentifier, SubscriptionDebug, assertAESJsonWebKey, assertEC_Public_JsonWebKey, generateContactAvatarColor, pollingTask, relativeRouteOf, removed

// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(716);
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

/***/ 13339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "ZI": () => (/* binding */ __DEBUG__ONLY__enableCryptoKeySerialization),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
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
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .cryptokey */ .W2);
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

/***/ 10262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ConcealableTabs */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
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
    const [overflow, setOverflow] = useState(false);
    const trackRef = useRef(null);
    const [reachedLeftEdge, setReachedLeftEdge] = useState(false);
    const [reachedRightEdge, setReachedRightEdge] = useState(false);
    useLayoutEffect(()=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const isWider = tabList.scrollWidth > tabList.offsetWidth;
        setOverflow(isWider);
        if (!isWider) return;
        const detectScrollStatus = throttle(()=>{
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
    useEffect(()=>{
        if (selectedId === undefined && tabs.length) {
            onChange?.(tabs[0].id);
        }
    }, [
        selectedId,
        tabs.map((x)=>x.id
        ).join(),
        onChange
    ]);
    const slide = useCallback((toLeft)=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const scrolled = Math.round(tabList.scrollLeft / TAB_WIDTH);
        tabList.scrollTo({
            left: TAB_WIDTH * (scrolled + (toLeft ? 1 : -1)),
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ _jsxs("div", {
        className: classnames(className, classes.container),
        ...rest,
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: classes.track,
                ref: trackRef,
                children: tabs.map((tab)=>/*#__PURE__*/ _jsx(Button, {
                        disableRipple: true,
                        className: classnames(classes.button, selectedId === tab.id ? classes.selected : classes.normal),
                        role: "button",
                        onClick: ()=>{
                            onChange?.(tab.id);
                        },
                        children: tab.label
                    }, tab.id)
                )
            }),
            overflow || tail ? /*#__PURE__*/ _jsxs("div", {
                className: classes.controllers,
                children: [
                    overflow ? /*#__PURE__*/ _jsxs(_Fragment, {
                        children: [
                            /*#__PURE__*/ _jsx(Button, {
                                disableRipple: true,
                                className: classnames(classes.normal, classes.controller),
                                disabled: reachedLeftEdge,
                                onClick: ()=>{
                                    slide(false);
                                },
                                children: /*#__PURE__*/ _jsx(LeftArrowIcon, {
                                    color: "inherit"
                                })
                            }),
                            /*#__PURE__*/ _jsx(Button, {
                                disableRipple: true,
                                disabled: reachedRightEdge,
                                className: classnames(classes.normal, classes.controller),
                                onClick: ()=>{
                                    slide(true);
                                },
                                children: /*#__PURE__*/ _jsx(RightArrowIcon, {
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

/***/ 37245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94282);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51344);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .I18nextProvider */ .a;


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

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22017);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64781);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15285);




const SharedContextProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonUIProvider */ .ci, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_evm__WEBPACK_IMPORTED_MODULE_3__/* .EvmSharedUIProvider */ .QQ, {
                children: children
            })
        })
    });
};


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

// UNUSED EXPORTS: BaseSharedUIProvider, ChainIcon, CommonUIProvider, ConcealableTabs, ConfirmProvider, EvmSharedUIProvider, MAX_WALLET_LIMIT, MiniNetworkSelector, SOCIAL_MEDIA_ICON_MAPPING, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, SharedTrans, TokenIconUI, TokenPickerProvider, addSharedI18N, createUITaskManager, languages, useBaseUIRuntime, useImageFailOver, useMenu, useMenuConfig, useMenuContext, usePopupSnackbarCallback

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

/***/ 42381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31180);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        styles: (0,_applyToDOM__WEBPACK_IMPORTED_MODULE_2__/* .CSSVariableInjectorCSS */ .P)(colorScheme)
    });
}


/***/ }),

/***/ 8600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskColorVar),
/* harmony export */   "n": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46768);


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

/***/ 70950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor)
/* harmony export */ });
/* unused harmony export DialogStackingProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);


const StackingScopeEnabled = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
const Stack = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    level: -1,
    onHideChange (shouldHide) {}
});
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps } = useDialogStackConsumer(open)
 *     return <IncreaseStack>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </IncreaseStack>
 * }
 */ function useDialogStackActor(open) {
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());
    const featureEnabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StackingScopeEnabled);
    const { level: upperLevel , onHideChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Stack);
    // this is an object that stores all request hiding state of it's decedents.
    // e.g for component tree:
    // <Dialog1> (selfID=0)
    // ---- <Dialog2> (selfID=1)
    // ---- <Dialog3> (selfID=2)
    //
    // When dialog2 opened, it will set hide of Dialog1 to { 1: true }
    // If any value in hide is true, it means one of it decedents requested to hide this parent.
    const [hide1, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const LatestOnHideChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onHideChange);
    LatestOnHideChange.current = onHideChange;
    // Here we rely on the assumption that level is impossible to change.
    // because it requires a reorder in the component tree, which is not possible to happen
    // in React's reconciliation algorithm
    const Increase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    if (!Increase.current) {
        Increase.current = function IncreaseStackLevel(props) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Stack.Provider, {
                children: props.children,
                value: {
                    level: upperLevel + 1,
                    onHideChange: (hide)=>{
                        setHide((val)=>({
                                ...val,
                                [selfID.current]: hide
                            })
                        );
                    }
                }
            });
        };
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!featureEnabled) return LatestOnHideChange.current(false);
        LatestOnHideChange.current(open);
    }, [
        featureEnabled,
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>LatestOnHideChange.current(false)
        ;
    }, []);
    const returnVal = {
        shouldReplaceExitWithBack: upperLevel !== -1,
        extraProps: {
            open
        },
        IncreaseStack: Increase.current
    };
    if (!featureEnabled || !open) return returnVal;
    if (returnVal.shouldReplaceExitWithBack) {
        returnVal.extraProps.transitionDuration = 0;
    }
    if (Object.values(hide1).some(Boolean)) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    return /*#__PURE__*/ _jsx(StackingScopeEnabled.Provider, {
        children: props.children,
        value: !props.disabled
    });
}


/***/ }),

/***/ 95499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "tE": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.t)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13217);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49433);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70950);





/***/ }),

/***/ 48054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60989);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84432);



const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    animated: {
        '@keyframes loadingAnimation': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        animation: 'loadingAnimation 1s linear infinite'
    }
});
const LoadingBase = (props)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .LoadingBaseIcon */ .N, {
        ...props,
        className: `${classes.animated} ${props.className}`
    });
};


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
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   "Ii": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "Sx": () => (/* reexport safe */ _LoadingBase__WEBPACK_IMPORTED_MODULE_10__.S),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.YO),
/* harmony export */   "b4": () => (/* reexport safe */ _LoadingButton__WEBPACK_IMPORTED_MODULE_9__.b),
/* harmony export */   "pL": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.p),
/* harmony export */   "tE": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.tE),
/* harmony export */   "wT": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _SearchableList__WEBPACK_IMPORTED_MODULE_4__.x)
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

/***/ 59728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6414);

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

/***/ 18499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ShadowRootIsolation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26736);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48488);

/* eslint-disable react-hooks/rules-of-hooks */ 



/**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children , ...props }) {
    const disabled = useRef(useContext(DisableShadowRootContext)).current;
    if (disabled) return /*#__PURE__*/ _jsx("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = useState();
    const container = useRef();
    if (!container.current) {
        container.current = document.createElement('div');
    }
    useLayoutEffect(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        const shadow = dom.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ _jsx("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ _jsx("span", {
        ...props,
        children: /*#__PURE__*/ _jsx(ShadowRootStyleProvider, {
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ createPortal(children, container.current)
        })
    });
}


/***/ }),

/***/ 29938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StyleSheet)
/* harmony export */ });
const shadowHeadMap = new WeakMap();
const constructableStyleSheetEnabled = true;
// There are 2 rendering mode of this ShadowRootStyleSheet.
// 1. If the host supports ConstructableStyleSheet proposal:
//      It is the fastest but only Chrome supports it.
// 2. style tags that being synchronize between all ShadowRoot.
//      See https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js
//      Note: We cannot use .sheet.insertRule (so called "speedy mode") because in our app,
//            the host of a ShadowRoot might be detached from the DOM and reattach to another place,
//            when a <style> tag is disconnected from the DOM, it's CSSStyleSheet object will be dropped.
class StyleSheet {
    addContainer(container) {
        this.implementation.addContainer(container, this.key);
    }
    hydrate() {
        throw new Error('Does not support SSR.');
    }
    insert(rule) {
        if (false) {}
        this.implementation.insert(rule);
    }
    flush() {
        this.implementation.flush();
        this._alreadyInsertedOrderInsensitiveRule = false;
    }
    constructor(options){
        // Unlucky, emotion will create it's own StyleSheet and use isSpeedy, tags, keys and container for Global components.
        this.tags = [];
        this.container = document.createElement('div');
        this.isSpeedy = false;
        this._alreadyInsertedOrderInsensitiveRule = false;
        this.key = options.key;
        if (options.container instanceof ShadowRoot) {
            this.implementation = constructableStyleSheetEnabled && 'adoptedStyleSheets' in Document.prototype ? new ConstructableStyleSheet() : new SynchronizeStyleSheet();
            this.addContainer(options.container);
            Reflect.set(this.container, 'sheet', this);
        } else {
            // global style
            const un_global = Reflect.get(options.container, 'sheet');
            if (!(un_global instanceof StyleSheet)) throw new TypeError();
            return {
                tags: [],
                key: options.key,
                insert: un_global.implementation.insertGlobal.bind(un_global.implementation),
                flush: un_global.implementation.flushGlobal.bind(un_global.implementation)
            };
        }
    }
}
class ConstructableStyleSheet {
    addContainer(container) {
        if (this.added.has(container)) return;
        this.added.add(container);
        container.adoptedStyleSheets = [
            this.globalSheet,
            ...container.adoptedStyleSheets || [],
            this.sheet
        ];
    }
    insert(rule) {
        insertRuleSpeedy(this.sheet, rule);
    }
    insertGlobal(rule) {
        insertRuleSpeedy(this.globalSheet, rule);
    }
    flush() {
        this.sheet.replaceSync('');
    }
    flushGlobal() {
        this.globalSheet.replaceSync('');
    }
    constructor(){
        this.sheet = new CSSStyleSheet();
        this.globalSheet = new CSSStyleSheet();
        this.added = new WeakSet();
    }
}
class SynchronizeStyleSheet {
    addContainer(container, tag) {
        if (this.containers.has(container)) return;
        // setup tags
        const head = getShadowRootHead(container);
        const localContainer = document.createElement('div');
        localContainer.dataset.styleContainer = tag;
        head.appendChild(localContainer);
        this.containers.set(container, localContainer);
        {
            const style = createStyleElement();
            style.dataset.globalStyleOf = tag;
            head.insertBefore(style, head.firstChild);
            this.globalStyles.set(container, style);
        }
        // copy styles
        const first = this.containers.entries().next();
        if (first.done) return; // there is no previous styles. we are done.
        const frag = document.createDocumentFragment();
        for (const x of first.value[1].children){
            frag.appendChild(x.cloneNode(true));
        }
        localContainer.appendChild(frag);
    }
    insert(rule) {
        if (this.ctr % 25 === 0) {
            this._insertTag();
        }
        for (const container of this.containers.values()){
            const tag = container.lastElementChild;
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr += 1;
    }
    insertGlobal(rule) {
        for (const style of this.globalStyles.values()){
            style.appendChild(document.createTextNode(rule));
        }
    }
    flush() {
        for (const container of this.containers.values()){
            for (const tag of container.children){
                tag.remove();
            }
        }
        this.ctr = 0;
    }
    flushGlobal() {
        this.globalStyles.forEach((x)=>x.innerText = ''
        );
    }
    constructor(){
        this.ctr = 0;
        this.containers = new Map();
        this._insertTag = ()=>{
            for (const container of this.containers.values()){
                container.appendChild(createStyleElement());
            }
        };
        this.globalStyles = new Map();
    }
}
function getShadowRootHead(shadow) {
    if (!shadowHeadMap.has(shadow)) {
        const head = document.createElement('head');
        shadowHeadMap.set(shadow, head);
        shadow.insertBefore(head, shadow.firstChild);
    }
    return shadowHeadMap.get(shadow);
}
function createStyleElement() {
    const tag = document.createElement('style');
    tag.appendChild(document.createTextNode(''));
    return tag;
}
function insertRuleSpeedy(sheet, rule) {
    try {
        sheet.insertRule(rule, sheet.cssRules.length);
    } catch (error) {
        if (false) {}
    }
}


/***/ }),

/***/ 42519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70195);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21122);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48488);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6414);






/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function createReactRootShadowedPartial(hostConfig) {
    return function createReactRootShadowed(shadowRoot, options = {}) {
        let jsx = '';
        let root = null;
        function tryRender() {
            if (options.signal?.aborted) return;
            if (shadowRoot.host?.parentNode === null) return void setTimeout(tryRender, 20);
            root = mount(jsx, shadowRoot, options, hostConfig);
        }
        tryRender();
        return {
            render: (_jsx1)=>{
                if (!root) jsx = _jsx1;
                else root.render(_jsx1);
            },
            destroy: ()=>root?.destroy()
        };
    };
}
function mount(jsx1, shadow, options, { preventEventPropagationList , wrapJSX  }) {
    const tag = options.tag || 'main';
    const key = options.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destroy: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            render: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
        };
    }
    jsx1 = getJSX(jsx1);
    const container = shadow.appendChild(document.createElement(tag));
    container.className = key;
    const controller = new AbortController();
    const signal = controller.signal;
    // prevent event popup
    {
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            container.addEventListener(each, stop, {
                signal
            });
        }
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container);
    root.render(jsx1);
    signal.addEventListener('abort', ()=>[
            root.unmount(),
            container.remove()
        ]
    , {
        signal
    });
    options.signal?.addEventListener('abort', ()=>controller.abort()
    , {
        signal
    });
    return {
        destroy: ()=>controller.abort()
        ,
        render: (jsx)=>{
            root.render(getJSX(jsx));
        }
    };
    function getJSX(jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts__WEBPACK_IMPORTED_MODULE_4__/* .PreventEventPropagationListContext.Provider */ .gt.Provider, {
                value: preventEventPropagationList,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootStyleProvider */ .q, {
                    shadow: shadow,
                    children: wrapJSX ? wrapJSX(jsx) : jsx
                })
            })
        });
    }
}


/***/ }),

/***/ 62998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.d_),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42519);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59728);
/* harmony import */ var _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18499);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);






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
/* harmony export */   "R_": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.US),
/* harmony export */   "ZL": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.d_),
/* harmony export */   "nb": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.nb),
/* harmony export */   "um": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "zV": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ze)
/* harmony export */ });
/* unused harmony export parseColor */
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82737);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88762);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94708);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62998);
/// <reference path="./extended.d.ts" />
// Some re-exports

const parseColor = (/* unused pure expression or super */ null && (tinyColor));

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
/* harmony export */   "nb": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.nb),
/* harmony export */   "pL": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.pL),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper),
/* harmony export */   "tE": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.tE),
/* harmony export */   "um": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "wT": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.xV),
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

/***/ 99176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../theme/src/hooks/useTabs.tsx

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react.useState)(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = (0,react.useCallback)((event, value)=>{
        setTab(value);
    }, []);
    return [
        currentTab,
        onChange,
        enum_,
        setTab
    ];
}

;// CONCATENATED MODULE: ../theme/src/hooks/index.ts



/***/ }),

/***/ 88973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ez": () => (/* binding */ isCoreTypedMessages),
  "YN": () => (/* reexport */ empty/* isTypedMessageEmpty */.Y),
  "KV": () => (/* reexport */ promise/* isTypedMessagePromise */.K),
  "Rz": () => (/* reexport */ core_text/* isTypedMessageText */.Rz),
  "bZ": () => (/* reexport */ isTypedMessageTuple),
  "qT": () => (/* reexport */ isTypedMessageTupleSerializable),
  "WM": () => (/* reexport */ empty/* makeTypedMessageEmpty */.W),
  "Ng": () => (/* reexport */ promise/* makeTypedMessagePromise */.N),
  "P": () => (/* reexport */ core_text/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ makeTypedMessageTuple),
  "kT": () => (/* reexport */ makeTypedMessageTupleSerializable),
  "mv": () => (/* reexport */ unknown/* makeTypedMessageUnknown */.m)
});

// UNUSED EXPORTS: isTypedMessageImage, isTypedMessageTextV1, isTypedMessageUnknown, makeTypedMessageImage, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleFromList

// EXTERNAL MODULE: ../typed-message/base/core/empty.ts
var empty = __webpack_require__(77401);
// EXTERNAL MODULE: ../typed-message/base/core/text.ts
var core_text = __webpack_require__(6057);
// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
;// CONCATENATED MODULE: ../typed-message/base/core/image.ts

const isTypedMessageImage = (0,internal/* createIsType */.uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}

// EXTERNAL MODULE: ../typed-message/base/utils/index.ts
var utils = __webpack_require__(97637);
;// CONCATENATED MODULE: ../typed-message/base/core/tuple.ts


const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,internal/* composeEvery */.mo)(isTypedMessageTuple, utils/* isSerializableTypedMessage */.fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}

// EXTERNAL MODULE: ../typed-message/base/core/unknown.ts
var unknown = __webpack_require__(95157);
// EXTERNAL MODULE: ../typed-message/base/core/promise.ts
var promise = __webpack_require__(76572);
;// CONCATENATED MODULE: ../typed-message/base/core/index.ts













const isCoreTypedMessages = (0,internal/* composeSome */.Vm)(empty/* isTypedMessageEmpty */.Y, core_text/* isTypedMessageText */.Rz, isTypedMessageImage, isTypedMessageTuple, unknown/* isTypedMessageUnknown */.q, promise/* isTypedMessagePromise */.K);


/***/ }),

/***/ 61436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bj": () => (/* reexport */ isTypedMessageAnchor),
  "$6": () => (/* reexport */ MaskPayload/* isTypedMessageMaskPayload */.$),
  "SY": () => (/* binding */ isWellKnownExtensionTypedMessages),
  "Jq": () => (/* reexport */ MaskPayload/* makeTypedMessageMaskPayload */.J)
});

// UNUSED EXPORTS: makeTypedMessageAnchor

// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(88973);
;// CONCATENATED MODULE: ../typed-message/base/extension/anchor.ts


const isTypedMessageAnchor = (0,internal/* createIsType */.uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: makeTypedMessageText(`[${content}](${href})`)
    };
}

// EXTERNAL MODULE: ../typed-message/base/extension/MaskPayload.ts
var MaskPayload = __webpack_require__(85601);
;// CONCATENATED MODULE: ../typed-message/base/extension/index.ts





const isWellKnownExtensionTypedMessages = (0,internal/* composeSome */.Vm)(isTypedMessageAnchor, MaskPayload/* isTypedMessageMaskPayload */.$);


/***/ }),

/***/ 80681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ab": () => (/* reexport */ binary_encode/* decodeTypedMessageFromDocument */.A),
  "WR": () => (/* reexport */ deprecated_encode/* decodeTypedMessageV38ToV40Format */.W),
  "vg": () => (/* reexport */ context/* emptyTransformationContext */.v),
  "F9": () => (/* reexport */ binary_encode/* encodeTypedMessageToDocument */.F),
  "Hu": () => (/* reexport */ deprecated_encode/* encodeTypedMessageV38Format */.H),
  "Vc": () => (/* reexport */ utils/* extractTextFromTypedMessage */.Vc),
  "Rz": () => (/* reexport */ core/* isTypedMessageText */.Rz),
  "P": () => (/* reexport */ core/* makeTypedMessageText */.P)
});

// UNUSED EXPORTS: FlattenTypedMessage, ParseLinkTransformer, composeTransformers, createMaskPayloadTransform, createTransformationContext, extractImageFromTypedMessage, forEachTypedMessageChild, isCoreTypedMessages, isNonSerializableTypedMessageWithAlt, isSerializableTypedMessage, isTypedMessageAnchor, isTypedMessageEmpty, isTypedMessageEqual, isTypedMessageImage, isTypedMessageMaskPayload, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownExtensionTypedMessages, isWellKnownTypedMessages, makeTypedMessageAnchor, makeTypedMessageEmpty, makeTypedMessageImage, makeTypedMessageMaskPayload, makeTypedMessagePromise, makeTypedMessageSerializableTupleFromList, makeTypedMessageTuple, makeTypedMessageTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, visitEachTypedMessageChild

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
// EXTERNAL MODULE: ../typed-message/base/transformer/context.ts
var context = __webpack_require__(18548);
// EXTERNAL MODULE: ../typed-message/base/transformer/Flatten.ts
var Flatten = __webpack_require__(91810);
// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var utils_parseLink = __webpack_require__(11514);
;// CONCATENATED MODULE: ../typed-message/base/transformer/ParseLink.ts




function ParseLinkTransformer(message, context) {
    if (isTypedMessageText(message)) {
        const parsed = parseLink(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return makeTypedMessageTupleSerializable(parsed.map((i)=>{
            if (i.type === 'text') return makeTypedMessageText(i.content);
            return makeTypedMessageAnchor(i.category, i.content, i.content);
        }), message.meta);
    }
    return visitEachTypedMessageChild(message, ParseLinkTransformer, context);
}

// EXTERNAL MODULE: ../typed-message/base/transformer/MaskPayload/index.ts
var MaskPayload = __webpack_require__(75058);
;// CONCATENATED MODULE: ../typed-message/base/transformer/index.ts






// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(88554);
;// CONCATENATED MODULE: ../typed-message/base/index.ts











const isWellKnownTypedMessages = (0,internal/* composeSome */.Vm)(core/* isCoreTypedMessages */.ez, extension/* isWellKnownExtensionTypedMessages */.SY);


/***/ }),

/***/ 91810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export FlattenTypedMessage */
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88973);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59460);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97637);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18548);




function FlattenTypedMessage(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(message) && message.promise.value) return message.promise.value;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message)) {
        const next = message.items.map((x)=>FlattenTypedMessage(x, context)
        ).flatMap((x)=>(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(x) ? x.meta ? x : x.items : x
        ).filter((x)=>!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageEmpty */ .YN)(x)
        )// eslint-disable-next-line unicorn/no-array-reduce
        .reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem || lastItem.meta || current.meta) return result.concat(current);
            if (!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(current) || !(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(lastItem)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(`${lastItem.content} ${current.content}`));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageEmpty */ .WM)();
            if (next.length === 1) return next[0];
        }
        if (next.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isSerializableTypedMessage */ .fV)) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(next, message.meta);
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(next, message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_1__/* .visitEachTypedMessageChild */ .I)(message, FlattenTypedMessage, context);
}
FlattenTypedMessage.NoContext = (message)=>FlattenTypedMessage(message, _context_js__WEBPACK_IMPORTED_MODULE_3__/* .emptyTransformationContext */ .v)
;


/***/ }),

/***/ 97637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vc": () => (/* reexport safe */ _extract_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "c3": () => (/* binding */ isNonSerializableTypedMessageWithAlt),
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage)
/* harmony export */ });
/* unused harmony export isTypedMessageEqual */
/* harmony import */ var _extract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22036);


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
    return isEqual(message1, message2);
}


/***/ }),

/***/ 11514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export parseLink */
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseLink(text) {
    // ESM-CJS cooperation
    const parsed = anchorme.list(text);
    const result = [];
    let start = 0;
    for (const x1 of parsed){
        if (x1.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x1.start)
            });
            result.push({
                type: 'link',
                content: x1.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x1.end)
            });
        }
        start = x1.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content
    ).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x
    );
}
const TagLike = /([#$@][\w\-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x2) {
    return x2.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        }
    );
}


/***/ }),

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, editMetadata, editTypedMessageMeta, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63740);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60232);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return draft(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ }),

/***/ 30003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ Metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ Metadata/* createTypedMessageMetadataReader */.Bi)
});

// UNUSED EXPORTS: DefaultRenderFragments, RegistryContext, RenderFragmentsContext, TUPLE_RENDER_STYLE, TextResizeContext, TransformationContextProvider, TransformerProvider, TypedMessageRender, TypedMessageRenderInline, createTypedMessageRenderRegistry, editMetadata, editTypedMessageMeta, getKnownMetadataKeys, getMetadataSchema, isDataMatchJSONSchema, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped, useMetadataRender, useTransformedValue

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Unknown.tsx

/** @internal */ const Unknown_TypedMessageUnknownRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessageUnknownRenderer(props) {
    const warned = useRef(false);
    if (!warned.current) {
        warned.current = true;
        console.warn('[@masknet/typed-message] Trying to render an unknown TypedMessage (or a known TypedMessage with no renderer) with props', props);
    }
    return null;
})));

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RegistryContext.tsx

const RegistryContext_RegistryContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(()=>{
    console.error('[@masknet/typed-message] Please create a TypedMessageRenderRegistry and provide it via RegistryContext');
    return undefined;
})));

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RenderFragments.tsx


const RenderFragments_DefaultRenderFragments = {
    Text: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: props.children
        })
    ),
    Link: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: props.href,
            target: "_blank",
            rel: "noopener noreferrer",
            children: props.children
        })
    ),
    Image: /*#__PURE__*/ (0,react.memo)((props)=>props.width === 0 ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.src,
            width: props.width,
            height: props.height
        })
    ),
    Metadata: /*#__PURE__*/ (0,react.memo)(()=>null
    )
};
const RenderFragments_RenderFragmentsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(RenderFragments_DefaultRenderFragments)));

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TextResizerContext.tsx

const TextResizeContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(false)));
/** @internal */ function TextResizerContext_useTextResize(shouldEnable) {
    const hasTextEnlarge = useContext(TextResizeContext);
    const [element, setElement] = useState(null);
    const enable = hasTextEnlarge && shouldEnable;
    useEffect(()=>{
        if (!element || !enable) return;
        const updateFontSize = ()=>{
            const length = Array.from(element.innerText).length;
            let fontSize = 1;
            if (length < 45) fontSize = 1.5;
            else if (length < 80) fontSize = 1.2;
            element.style.fontSize = `${fontSize}rem`;
        };
        updateFontSize();
    // const watcher = new MutationObserver(updateFontSize)
    // watcher.observe(element, { subtree: true, childList: true, characterData: true })
    // return () => watcher.disconnect()
    }, [
        enable,
        element
    ]);
    return setElement;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Entry.tsx






function TypedMessageRender(props) {
    const { Container ='p'  } = useContext(RenderFragmentsContext);
    const isEmpty = props.message.type === 'empty';
    const textResize = useTextResize(!isEmpty);
    if (isEmpty) return null;
    return /*#__PURE__*/ _jsx("span", {
        ref: textResize,
        children: /*#__PURE__*/ _jsx(Container, {
            children: /*#__PURE__*/ _jsx(Entry_TypedMessageRenderInline, {
                ...props
            })
        })
    });
}
function Entry_TypedMessageRenderInline(props) {
    const { message  } = props;
    const Registry = useContext(RegistryContext);
    if (message.type === 'empty') return null;
    const Render = Registry(message.type)?.component || TypedMessageUnknownRender;
    if (false) {}
    return /*#__PURE__*/ _jsx(Render, {
        ...message
    });
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/MetadataRender.tsx



function MetadataRender_useMetadataRender(message) {
    const { Metadata  } = useContext(RenderFragmentsContext);
    if (!Metadata || !message.meta) return null;
    return /*#__PURE__*/ _jsx(Metadata, {
        metadata: message.meta,
        message: message
    });
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Tuple.tsx





// TODO: remove this after we switch to inline rendering of Mask payload.
const TUPLE_RENDER_STYLE = 'TUPLE_RENDER_STYLE';
const Tuple_TypedMessageTupleRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessageTupleRenderer(props) {
    const meta = useMetadataRender(props);
    if (useMemo(()=>hasCircular(props.items)
    , [
        props.items
    ])) return null;
    return /*#__PURE__*/ _jsxs("span", {
        style: Object(props.meta?.get(TUPLE_RENDER_STYLE)),
        children: [
            props.items.map((message, index)=>/*#__PURE__*/ _jsx(TypedMessageRenderInline, {
                    ...props,
                    message: message
                }, index)
            ),
            meta
        ]
    });
})));

// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var utils_parseLink = __webpack_require__(11514);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/renderText.tsx




/** @internal */ const renderText_RenderTextFragment = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function RenderText(props) {
    const { Text =DefaultRenderFragments.Text  } = useContext(RenderFragmentsContext);
    return /*#__PURE__*/ createElement(Fragment, {}, ...parseText(props.text, Text));
})));
/** @internal */ const renderText_RenderLinkFragment = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function RenderLink(props) {
    const { children , href , category  } = props;
    const context = useContext(RenderFragmentsContext);
    const { Text =DefaultRenderFragments.Text , Link =DefaultRenderFragments.Link , AtLink =Text , CashLink =Text , HashLink =Text ,  } = context;
    if (category === 'cash') return /*#__PURE__*/ _jsx(CashLink, {
        children: children
    });
    if (category === 'hash') return /*#__PURE__*/ _jsx(HashLink, {
        children: children
    });
    if (category === 'user') return /*#__PURE__*/ _jsx(AtLink, {
        children: children
    });
    return /*#__PURE__*/ _jsx(Link, {
        children: children,
        href: href
    });
})));
function parseText(string, Text) {
    const links = parseLink(string).flatMap((x1)=>{
        if (x1.type === 'text') {
            return sliceString(x1.content).map((x)=>x === '\n' ? /*#__PURE__*/ _jsx("br", {}) : /*#__PURE__*/ _jsx(Text, {
                    children: x
                })
            );
        }
        if (x1.category === 'normal' && !x1.content.match(/^https?:\/\//gi)) x1.content = 'http://' + x1.content;
        return /*#__PURE__*/ _jsx(renderText_RenderLinkFragment, {
            category: x1.category,
            href: x1.content,
            children: x1.content
        });
    });
    return links;
}
function sliceString(x) {
    const result = [];
    let pos = 0;
    let index = x.indexOf('\n');
    if (index === -1) return [
        x
    ];
    while(index !== -1){
        result.push(x.slice(pos, index), '\n');
        pos = index + 1;
        index = x.indexOf('\n', pos);
    }
    result.push(x.slice(pos));
    return result.filter(Boolean);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Text.tsx




const Text_TypedMessageTextRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessageTextRenderer(props) {
    const { content  } = props;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(RenderTextFragment, {
                text: content
            }),
            useMetadataRender(props)
        ]
    });
})));

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Image.tsx




const Image_TypedMessageImageRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessageImageRenderer(props) {
    const { Image =DefaultRenderFragments.Image  } = useContext(RenderFragmentsContext);
    const { image , width , height  } = props;
    const [blobSrc, setBlobSrc] = useState(null);
    useEffect(()=>{
        if (typeof image === 'string') return;
        const src = URL.createObjectURL(image);
        setBlobSrc(src);
        return ()=>{
            setBlobSrc(null);
            URL.revokeObjectURL(src);
        };
    }, [
        image
    ]);
    const finalSrc = blobSrc || image;
    const meta = useMetadataRender(props);
    if (typeof finalSrc !== 'string') return null;
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Image, {
                src: finalSrc,
                width: width,
                height: height
            }),
            meta
        ]
    });
})));

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TransformContext.ts


const TransformerProvider = (0,react.createContext)((x)=>x
);
const TransformationContextProvider = (0,react.createContext)(base/* emptyTransformationContext */.vg);
function TransformContext_useTransformedValue(message) {
    const transformer = useContext(TransformerProvider);
    const context = useContext(TransformationContextProvider);
    return useMemo(()=>{
        return message ? transformer(message, context) : undefined;
    }, [
        message,
        transformer,
        context
    ]);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Promise.tsx




const Promise_TypedMessagePromiseRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessagePromiseRenderer(props) {
    const { promise , alt  } = props;
    const _ = useState(0)[1];
    const rerender = ()=>_(Math.random())
    ;
    useEffect(()=>{
        promise.then(rerender);
    }, [
        promise,
        _
    ]);
    const transformedValue = useTransformedValue(promise.value);
    if (transformedValue) return /*#__PURE__*/ _jsx(TypedMessageRenderInline, {
        message: transformedValue
    });
    return /*#__PURE__*/ _jsx(Suspense, {
        fallback: alt ? /*#__PURE__*/ _jsx(TypedMessageRenderInline, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ _jsx(Await, {
            promise: promise
        })
    });
})));
function Await(props) {
    throw props.promise;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Extension/Anchor.tsx



const Anchor_TypedMessageAnchorRenderer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(function TypedMessageAnchorRenderer(props) {
    return /*#__PURE__*/ _jsx(RenderLinkFragment, {
        category: props.category,
        children: props.content,
        href: props.href
    });
})));

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/registry.tsx






function createTypedMessageRenderRegistry() {
    const registry = new Map();
    const event = new EventTarget();
    function registerTypedMessageRender(type, config) {
        if (!registry.has(type)) registry.set(type, new Map());
        const map = registry.get(type);
        const id = config.id;
        map.set(id, config);
        event.dispatchEvent(new Event('update'));
        return ()=>{
            map.delete(id);
            event.dispatchEvent(new Event('update'));
        };
    }
    function getTypedMessageRender(type) {
        return Array.from(registry.get(type)?.values() || []).sort((a, b)=>b.priority - a.priority
        )[0];
    }
    const subscription = {
        // generate a new function everytime to make sure old !== new
        getCurrentValue: ()=>(type)=>getTypedMessageRender(type)
        ,
        subscribe: (f)=>{
            event.addEventListener('update', f);
            return ()=>event.removeEventListener('update', f)
            ;
        }
    };
    registerTypedMessageRender('text', {
        component: TypedMessageTextRenderer,
        id: Symbol('std.text'),
        priority: 0
    });
    registerTypedMessageRender('image', {
        component: TypedMessageImageRenderer,
        id: Symbol('std.image'),
        priority: 0
    });
    registerTypedMessageRender('unknown', {
        component: TypedMessageUnknownRenderer,
        id: Symbol('std.unknown'),
        priority: 0
    });
    registerTypedMessageRender('tuple', {
        component: TypedMessageTupleRenderer,
        id: Symbol('std.tuple'),
        priority: 0
    });
    registerTypedMessageRender('promise', {
        component: TypedMessagePromiseRenderer,
        id: Symbol('std.promise'),
        priority: 0
    });
    // Extension
    registerTypedMessageRender('x-anchor', {
        component: TypedMessageAnchorRenderer,
        id: Symbol('std.anchor'),
        priority: 0
    });
    return {
        registerTypedMessageRender,
        getTypedMessageRender,
        subscription
    };
}

// EXTERNAL MODULE: ../typed-message/dom/Metadata/index.ts
var Metadata = __webpack_require__(93179);
;// CONCATENATED MODULE: ../typed-message/dom/index.ts
// Render


// Render behavior


// Render Registry



// Transformation

// Metadata



/***/ }),

/***/ 19769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cy": () => (/* binding */ DeBank),
/* harmony export */   "HJ": () => (/* binding */ Alchemy_FLOW),
/* harmony export */   "IC": () => (/* binding */ MagicEden),
/* harmony export */   "KN": () => (/* binding */ Zerion),
/* harmony export */   "Nn": () => (/* binding */ OpenSea),
/* harmony export */   "S5": () => (/* binding */ RSS3),
/* harmony export */   "bC": () => (/* binding */ Explorer),
/* harmony export */   "bb": () => (/* reexport safe */ _opensea_utils__WEBPACK_IMPORTED_MODULE_20__.bb),
/* harmony export */   "cl": () => (/* binding */ KeyValue),
/* harmony export */   "de": () => (/* binding */ Alchemy_EVM),
/* harmony export */   "e": () => (/* binding */ GoPlusLabs),
/* harmony export */   "e8": () => (/* binding */ Rarible),
/* harmony export */   "no": () => (/* binding */ TokenList),
/* harmony export */   "oD": () => (/* binding */ CoinGecko),
/* harmony export */   "q7": () => (/* binding */ NextIDProof),
/* harmony export */   "qy": () => (/* binding */ RiskWarning),
/* harmony export */   "tL": () => (/* binding */ Twitter),
/* harmony export */   "v0": () => (/* binding */ MetaSwap),
/* harmony export */   "wA": () => (/* binding */ NextIDStorage),
/* harmony export */   "yR": () => (/* binding */ EthereumWeb3)
/* harmony export */ });
/* unused harmony exports NFTScan, Zora, Instagram */
/* harmony import */ var _coingecko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49889);
/* harmony import */ var _opensea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1478);
/* harmony import */ var _rarible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52698);
/* harmony import */ var _NFTScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34231);
/* harmony import */ var _zora__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11379);
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38858);
/* harmony import */ var _risk_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51827);
/* harmony import */ var _rss3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65186);
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98311);
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(90586);
/* harmony import */ var _token_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37894);
/* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(24986);
/* harmony import */ var _debank__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(90131);
/* harmony import */ var _zerion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23975);
/* harmony import */ var _metaswap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44253);
/* harmony import */ var _gopluslabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29128);
/* harmony import */ var _NextID__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(38641);
/* harmony import */ var _alchemy__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65520);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(47769);
/* harmony import */ var _MagicEden__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(73765);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7541);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3779);
/* harmony import */ var _opensea_utils__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87893);























const OpenSea = new _opensea__WEBPACK_IMPORTED_MODULE_1__/* .OpenSeaAPI */ .r();
const MagicEden = new _MagicEden__WEBPACK_IMPORTED_MODULE_17__/* .MagicEdenAPI */ .K();
const Rarible = new _rarible__WEBPACK_IMPORTED_MODULE_2__/* .RaribleAPI */ .I();
const NFTScan = new _NFTScan__WEBPACK_IMPORTED_MODULE_3__/* .NFTScanAPI */ .U();
const Zora = new _zora__WEBPACK_IMPORTED_MODULE_21__/* .ZoraAPI */ .c();
const CoinGecko = new _coingecko__WEBPACK_IMPORTED_MODULE_0__/* .CoinGeckoAPI */ .J();
const Explorer = new _explorer__WEBPACK_IMPORTED_MODULE_4__/* .NativeExplorerAPI */ .b();
const RiskWarning = new _risk_warning__WEBPACK_IMPORTED_MODULE_5__/* .RiskWarningAPI */ .o();
const RSS3 = new _rss3__WEBPACK_IMPORTED_MODULE_6__/* .RSS3API */ .M();
const KeyValue = new _kv__WEBPACK_IMPORTED_MODULE_7__/* .KeyValueAPI */ .Z();
const Twitter = new _twitter__WEBPACK_IMPORTED_MODULE_8__/* .TwitterAPI */ .I();
const Instagram = new _instagram__WEBPACK_IMPORTED_MODULE_22__/* .InstagramAPI */ .l();
const GoPlusLabs = new _gopluslabs__WEBPACK_IMPORTED_MODULE_13__/* .GoPlusLabsAPI */ .g();
const TokenList = new _token_list__WEBPACK_IMPORTED_MODULE_9__/* .TokenListAPI */ .U();
const DeBank = new _debank__WEBPACK_IMPORTED_MODULE_10__/* .DeBankAPI */ .V();
const Zerion = new _zerion__WEBPACK_IMPORTED_MODULE_11__/* .ZerionAPI */ .C();
const MetaSwap = new _metaswap__WEBPACK_IMPORTED_MODULE_12__/* .MetaSwapAPI */ .t();
const NextIDStorage = new _NextID__WEBPACK_IMPORTED_MODULE_14__/* .NextIDStorageAPI */ .I();
const EthereumWeb3 = new _web3__WEBPACK_IMPORTED_MODULE_16__/* .EthereumWeb3API */ .F();
const NextIDProof = new _NextID__WEBPACK_IMPORTED_MODULE_14__/* .NextIDProofAPI */ .N();
const Alchemy_EVM = new _alchemy__WEBPACK_IMPORTED_MODULE_15__/* .Alchemy_EVM_API */ .m8();
const Alchemy_FLOW = new _alchemy__WEBPACK_IMPORTED_MODULE_15__/* .Alchemy_FLOW_API */ .k0();


/***/ }),

/***/ 6947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(58757),g=Object.assign;
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=e.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});e.useDebugValue(b);e.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:g({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ }),

/***/ 46123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GT": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.GT),
/* harmony export */   "J3": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.J3),
/* harmony export */   "P": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.P),
/* harmony export */   "PQ": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.PQ),
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

/***/ 91339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Yl": () => (/* reexport */ typescript_enum/* getEnumAsArray */.Y),
  "GT": () => (/* reexport */ isNonNull),
  "P": () => (/* reexport */ control_flow/* safeUnreachable */.P),
  "t1": () => (/* reexport */ control_flow/* unreachable */.t)
});

// UNUSED EXPORTS: assertNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(86598);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(35972);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/nonNull.js
function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined)
        throw new Error(message);
    return val;
}
function isNonNull(x) {
    return x !== undefined && x !== null;
}
//# sourceMappingURL=nonNull.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/typescript/index.js



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 1993) return "js/1993.js";
/******/ 			if (chunkId === 9442) return "js/9442.js";
/******/ 			if (chunkId === 1950) return "js/1950.js";
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1240":"npm-ns.ethersphere.bee-js","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","3375":"npm-ns.ethersproject.abstract-signer","3667":"npm.react-avatar-editor","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7597":"npm.pure-react-carousel","7604":"npm-ns.ethersproject.providers","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","9223":"npm-ns.metaplex-foundation.mpl-auction","9271":"npm.rxjs","9278":"npm.axios","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 		__webpack_require__.j = 1711;
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
/******/ 			1711: 0
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,2372,8722,1224], () => (__webpack_require__(14778)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,2372,8722,1224], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;