"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[491],{

/***/ 10491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ft": () => (/* reexport */ grayscale.GrayscaleAlgorithm),
  "Ym": () => (/* reexport */ twitter_TwitterDecoder),
  "EK": () => (/* reexport */ twitter_TwitterEncoder),
  "oX": () => (/* reexport */ steganographyDecodeImage),
  "Mk": () => (/* reexport */ steganographyEncodeImage)
});

// UNUSED EXPORTS: AESAlgorithmEnum, DecryptError, DecryptIntermediateProgressKind, DecryptProgressKind, EC_KeyCurveEnum, EncryptError, EncryptErrorReasons, ErrorReasons, SocialNetworkEnum, SocialNetworkEnumToProfileDomain, decrypt, encodePayload, encrypt, importAESFromJWK, importEC_Key, parsePayload, socialNetworkDecoder, socialNetworkEncoder

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
;// CONCATENATED MODULE: ../encryption/src/types/Exception.ts


var Exception_CryptoException;
(function(CryptoException) {
    CryptoException["InvalidCryptoKey"] = '[@masknet/encryption] Encountered an invalid CryptoKey.';
    CryptoException["EncryptFailed"] = '[@masknet/encryption] Failed to encrypt.';
    CryptoException["DecryptFailed"] = '[@masknet/encryption] Failed to decrypt.';
    CryptoException["UnsupportedAlgorithm"] = '[@masknet/encryption] Unsupported crypto algorithm.';
    CryptoException["InvalidIVLength"] = '[@masknet/encryption] IV length must be 16.';
})(Exception_CryptoException || (Exception_CryptoException = {}));
var Exception_PayloadException;
(function(PayloadException) {
    PayloadException["EncodeFailed"] = '[@masknet/encryption] Failed to encode the payload.';
    PayloadException["DecodeFailed"] = '[@masknet/encryption] Failed to decode the payload.';
    PayloadException["InvalidPayload"] = '[@masknet/encryption] Payload decoded, but it violates the schema.';
    PayloadException["UnknownEnumMember"] = '[@masknet/encryption] Payload includes an unknown enum member.';
    PayloadException["UnknownVersion"] = '[@masknet/encryption] Unsupported payload version.';
})(Exception_PayloadException || (Exception_PayloadException = {}));
function Exception_assertUint8Array(x, name, kinds) {
    if (x instanceof Uint8Array) return Ok(x);
    if (x instanceof ArrayBuffer) return Ok(new Uint8Array(x));
    return new CheckedError(kinds, `${name} is not a Binary`).toErr();
}
function Exception_assertArray(name, kinds) {
    return (x)=>{
        if (Array.isArray(x)) return Ok(x);
        return new CheckedError(kinds, `${name} is no an Array`).toErr();
    };
}

;// CONCATENATED MODULE: ../encryption/src/types/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var kit_esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
;// CONCATENATED MODULE: ../encryption/src/utils/crypto.ts




function crypto_importAESFromJWK(key, kind) {
    return esm/* Result.wrapAsync */.x4.wrapAsync(()=>{
        const param = {
            [types_AESAlgorithmEnum.A256GCM]: {
                name: 'AES-GCM',
                length: 256
            }
        };
        return crypto.subtle.importKey('jwk', key, param[kind], true, [
            'encrypt',
            'decrypt'
        ]);
    });
}
crypto_importAESFromJWK.AES_GCM_256 = (key)=>crypto_importAESFromJWK(key, types_AESAlgorithmEnum.A256GCM)
;
function exportCryptoKeyToJWK(key) {
    return esm/* Result.wrapAsync */.x4.wrapAsync(()=>crypto.subtle.exportKey('jwk', key)
    );
}
function exportCryptoKeyToSPKI(key) {
    return esm/* Result.wrapAsync */.x4.wrapAsync(()=>crypto.subtle.exportKey('spki', key).then((x)=>new Uint8Array(x)
        )
    );
}
function exportCryptoKeyToRaw(key) {
    return Result.wrapAsync(()=>crypto.subtle.exportKey('raw', key).then((x)=>new Uint8Array(x)
        )
    );
}
function importEC_Key(key, kind) {
    const DeriveKeyUsage = [
        'deriveKey',
        'deriveBits'
    ];
    const ImportParamsMap = {
        [types_EC_KeyCurveEnum.secp256k1]: {
            name: 'ECDH',
            namedCurve: 'K-256'
        },
        [types_EC_KeyCurveEnum.secp256p1]: {
            name: 'ECDH',
            namedCurve: 'P-256'
        }
    };
    return esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        if (kind === types_EC_KeyCurveEnum.ed25519) {
            throw new src/* CheckedError */.iD(Exception_CryptoException.UnsupportedAlgorithm, 'TODO: support ED25519');
        }
        const args = [
            ImportParamsMap[kind],
            true,
            DeriveKeyUsage
        ];
        if (key instanceof Uint8Array) {
            return crypto.subtle.importKey('spki', key, ...args);
        } else {
            return crypto.subtle.importKey('jwk', key, ...args);
        }
    });
}
function crypto_encryptWithAES(kind, key, iv, message) {
    const param = {
        [types_AESAlgorithmEnum.A256GCM]: {
            name: 'AES-GCM',
            iv
        }
    };
    return esm/* Result.wrapAsync */.x4.wrapAsync(()=>{
        return crypto.subtle.encrypt(param[kind], key, message).then((x)=>new Uint8Array(x)
        );
    });
}
function crypto_decryptWithAES(kind, key, iv, message) {
    const param = {
        [AESAlgorithmEnum.A256GCM]: {
            name: 'AES-GCM',
            iv
        }
    };
    return Result.wrapAsync(async ()=>{
        return new Uint8Array(await crypto.subtle.decrypt(param[kind], key, message));
    });
}
function crypto_assertIVLengthEq16(arrayBuffer) {
    if (arrayBuffer.byteLength === 16) return Ok(arrayBuffer);
    return new CheckedError(CryptoException.InvalidIVLength, null).toErr();
}

;// CONCATENATED MODULE: ../encryption/src/utils/index.ts





const firstArgString = (e)=>typeof e === 'string'
;
const firstArgUint8Array = (e)=>e instanceof Uint8Array
;
const decodeUint8ArrayF = wrap((x)=>new Uint8Array((0,kit_esm/* decodeArrayBuffer */.xe)(x))
, firstArgString);
const decodeTextF = wrap(kit_esm/* decodeText */.rj, firstArgUint8Array);
const JSONParseF = wrap(JSON.parse, firstArgString);
const decodeMessagePackF = wrap((u8)=>(0,decode/* decode */.Jx)(u8)
, firstArgUint8Array);
function encodeMessagePack(data) {
    // The returned buffer is a slice of a larger ArrayBuffer
    return (0,encode/* encode */.c)(data).slice();
}
function wrap(f, valid) {
    return (invalidE, throwsE)=>(...args)=>{
            const isValid = valid(...args);
            if (!isValid) return new src/* CheckedError */.iD(invalidE, null).toErr();
            return esm/* Result.wrap */.x4.wrap(()=>f(...args)
            ).mapErr(src/* CheckedError.mapErr */.iD.mapErr(throwsE));
        }
    ;
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-40.ts





const decodeUint8Array = decodeUint8ArrayF(Exception_PayloadException.InvalidPayload, Exception_PayloadException.DecodeFailed);
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function version_40_parse40(payload) {
    // #region Parse string
    const header = '\u{1F3BC}2/4|';
    if (!payload.startsWith(header)) return new CheckedError(PayloadException.DecodeFailed, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const [ownersAESKeyEncrypted, iv, encryptedText, signature] = rest.split('|');
    // #endregion
    // #region Normalization
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: {},
        iv: decodeUint8Array(iv).andThen(assertIVLengthEq16),
        ownersAESKeyEncrypted: decodeUint8Array(ownersAESKeyEncrypted)
    };
    const normalized = {
        version: -40,
        author: OptionalResult.None,
        authorPublicKey: OptionalResult.None,
        signature: OptionalResult.None,
        encryption: Ok(encryption),
        encrypted: decodeUint8Array(encryptedText)
    };
    if (signature && encryption.iv.ok && encryption.ownersAESKeyEncrypted.ok && normalized.encrypted.ok) {
        const message = encodeText(`4/4|${ownersAESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = decodeUint8Array(signature);
        if (sig.ok) {
            normalized.signature = OptionalResult.Some({
                signee: message,
                signature: sig.val
            });
        } else {
            normalized.signature = sig;
        }
    }
    return Ok(normalized);
// #endregion
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-39.ts
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 


// -39 payload is totally the same as -40.
// -40 uses unstable JSON stringify in E2E encryption, -39 fixes that.
// We can reuse the payload parser here.
// ? Payload format: (text format)
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
// ? Older version is lacking of signature, like:
// ? Version 40:🎼2/4|ownersAESKeyEncrypted|iv|encryptedText:||
// ? Version 39:🎼3/4|ownersAESKeyEncrypted|iv|encryptedText:||
async function version_39_parse39(payload) {
    const v_40 = '\u{1F3BC}2/4';
    const v_39 = '\u{1F3BC}3/4';
    if (!payload.startsWith(v_39)) return new CheckedError(PayloadException.UnknownVersion, null).toErr();
    const result = await parse40(payload.replace(v_39, v_40));
    return result.map((x)=>({
            ...x,
            version: -39
        })
    );
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/shared.ts





const import_AES_GCM_256 = src/* CheckedError.withErr */.iD.withErr(crypto_importAESFromJWK.AES_GCM_256, Exception_CryptoException.InvalidCryptoKey);
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
async function shared_get_v38PublicSharedCryptoKey() {
    if (v38PublicSharedCryptoKey) return (0,esm.Ok)(v38PublicSharedCryptoKey);
    const imported = await import_AES_GCM_256(v38PublicSharedJwk);
    if (imported.err) return imported;
    v38PublicSharedCryptoKey = imported.val;
    return (0,esm.Ok)(v38PublicSharedCryptoKey);
}
function shared_parseAuthor(network, id) {
    if (network === null || network === undefined) return OptionalResult.None;
    if (id === '' || id === null || id === undefined) return OptionalResult.None;
    if (typeof id !== 'string') return new CheckedError(PayloadException.InvalidPayload, 'Invalid user id').toErr();
    let net = '';
    if (network === SocialNetworkEnum.Facebook) net = 'facebook.com';
    else if (network === SocialNetworkEnum.Twitter) net = 'twitter.com';
    else if (network === SocialNetworkEnum.Instagram) net = 'instagram.com';
    else if (network === SocialNetworkEnum.Minds) net = 'minds.com';
    else if (typeof network === 'string') net = network;
    else if (typeof network !== 'number') return new CheckedError(PayloadException.InvalidPayload, 'Invalid network').toErr();
    else return new CheckedError(PayloadException.UnknownEnumMember, 'unknown network').toErr();
    if (net.includes('/')) return new CheckedError(PayloadException.InvalidPayload, 'Invalid network').toErr();
    return OptionalResult.Some(new ProfileIdentifier(net, id));
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-38.parser.ts
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 






const version_38_parser_decodeUint8Array = decodeUint8ArrayF(Exception_PayloadException.InvalidPayload, Exception_PayloadException.DecodeFailed);
const decodeUint8ArrayCrypto = decodeUint8ArrayF(Exception_CryptoException.InvalidCryptoKey, Exception_CryptoException.InvalidCryptoKey);
const decodeTextCrypto = decodeTextF(Exception_CryptoException.InvalidCryptoKey, Exception_CryptoException.InvalidCryptoKey);
const JSONParse = JSONParseF(Exception_CryptoException.InvalidCryptoKey, Exception_CryptoException.InvalidCryptoKey);
const importEC = src/* CheckedError.withErr */.iD.withErr(importEC_Key, Exception_CryptoException.InvalidCryptoKey);
async function version_38_parser_parse38(payload) {
    // #region Parse text
    const header = '\u{1F3BC}4/4';
    if (!payload.startsWith(header)) return new CheckedError(PayloadException.InvalidPayload, 'Unknown version').toErr();
    let rest = payload.slice(header.length);
    // cut the tail
    rest = rest.slice(0, rest.lastIndexOf(':||'));
    const { AESKeyEncrypted , encryptedText , iv , signature , authorPublicKey , authorUserID , isPublic  } = splitFields(rest);
    // #endregion
    // #region Normalization
    const raw_iv = decodeUint8ArrayCrypto(iv).andThen(assertIVLengthEq16);
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
        author: OptionalResult.None,
        authorPublicKey: OptionalResult.None,
        signature: OptionalResult.None,
        encryption: Ok(encryption),
        encrypted: version_38_parser_decodeUint8Array(encryptedText)
    };
    if (authorUserID.err) {
        normalized.author = authorUserID.mapErr(CheckedError.mapErr(PayloadException.DecodeFailed));
    } else if (authorUserID.val.some) {
        normalized.author = Identifier.fromString(`person:${authorUserID.val.val}`, ProfileIdentifier).map((x)=>Some(x)
        ).mapErr(CheckedError.mapErr(PayloadException.DecodeFailed));
    }
    if (authorPublicKey) {
        normalized.authorPublicKey = await decodeECDHPublicKey(authorPublicKey);
    }
    if (signature && raw_iv.ok && raw_aes.ok && normalized.encrypted.ok) {
        const message = encodeText(`4/4|${AESKeyEncrypted}|${iv}|${encryptedText}`);
        const sig = version_38_parser_decodeUint8Array(signature);
        if (sig.ok) {
            normalized.signature = OptionalResult.Some({
                signee: message,
                signature: sig.val
            });
        } else {
            normalized.signature = sig;
        }
    }
    return Ok(normalized);
// #endregion
}
// ? Version 38:🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier?:||
function splitFields(raw) {
    const [, AESKeyEncrypted = '', iv = '', encryptedText = '', signature, authorPublicKey, isPublic, authorUserIDRaw] = raw.split('|');
    const authorUserID = authorUserIDRaw ? Result.wrap(()=>Some(atob(authorUserIDRaw))
    ) : OptionalResult.None;
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
    const publicSharedKey = await get_v38PublicSharedCryptoKey();
    if (publicSharedKey.err) return publicSharedKey;
    const import_AES_GCM_256 = CheckedError.withErr(importAESFromJWK.AES_GCM_256, CryptoException.InvalidCryptoKey);
    const decrypt = CheckedError.withErr(decryptWithAES, CryptoException.InvalidCryptoKey);
    const jwk_in_u8arr = await decrypt(AESAlgorithmEnum.A256GCM, publicSharedKey.val, iv.val, encryptedKey.val);
    const jwk_in_text = await andThenAsync(jwk_in_u8arr, decodeTextCrypto);
    const jwk = await andThenAsync(jwk_in_text, JSONParse);
    const aes = await andThenAsync(jwk, import_AES_GCM_256);
    return aes.map((key)=>({
            algr: AESAlgorithmEnum.A256GCM,
            key
        })
    );
}
async function decodeECDHPublicKey(compressedPublic) {
    const key = decodeUint8ArrayCrypto(compressedPublic).andThen((val)=>Result.wrap(()=>decompressSecp256k1Point(val)
        ).mapErr((e)=>new CheckedError(CryptoException.InvalidCryptoKey, e)
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
    const imported = await importEC(jwk, EC_KeyCurveEnum.secp256k1);
    if (imported.err) return imported;
    return OptionalResult.Some({
        algr: EC_KeyCurveEnum.secp256k1,
        key: imported.val
    });
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-38.encoder.ts
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 






var Index;
(function(Index) {
    Index[Index["authorPublicKey"] = 5] = "authorPublicKey";
    Index[Index["publicShared"] = 6] = "publicShared";
    Index[Index["authorIdentifier"] = 7] = "authorIdentifier";
})(Index || (Index = {}));
// ? Version 38:🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier?:||
async function encode38(payload) {
    if (payload.version !== -38) {
        return new src/* CheckedError */.iD(Exception_PayloadException.UnknownVersion, null).toErr();
    }
    const AESKeyEncrypted = await encodeAESKeyEncrypted(payload.encryption);
    if (AESKeyEncrypted.err) return AESKeyEncrypted;
    const iv = (0,kit_esm/* encodeArrayBuffer */.ll)(payload.encryption.iv.slice());
    const encrypted = (0,kit_esm/* encodeArrayBuffer */.ll)(payload.encrypted.slice());
    const signature = encodeSignature(payload.signature);
    const fields = [
        '\u{1F3BC}4/4',
        AESKeyEncrypted.val,
        iv,
        encrypted,
        signature
    ];
    if (payload.authorPublicKey.some) {
        const compressed = await compressSecp256k1Key(payload.authorPublicKey.val.key);
        if (compressed.err) {
            console.error('[@masknet/encryption] An error happened when compressing a secp256k1 key.', compressed.err);
        }
        fields[Index.authorPublicKey] = compressed.unwrapOr('_');
    }
    fields[Index.publicShared] = String(payload.encryption.type === 'public' ? 1 : 0);
    if (payload.author.some) {
        const id = payload.author.val.toText().slice('people:'.length);
        fields[Index.authorIdentifier] = btoa(id);
    }
    return (0,esm.Ok)(fields.join('|') + ':||');
}
async function encodeAESKeyEncrypted(encryption) {
    if (encryption.type === 'E2E') {
        return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(encryption.ownersAESKeyEncrypted.slice()));
    } else {
        const { AESKey , iv  } = encryption;
        const publicSharedKey = await shared_get_v38PublicSharedCryptoKey();
        if (publicSharedKey.err) return publicSharedKey;
        const jwk = await exportCryptoKeyToJWK(AESKey.key);
        if (jwk.err) return jwk.mapErr((e)=>new src/* CheckedError */.iD(Exception_CryptoException.InvalidCryptoKey, e)
        );
        // There is no reason that these two steps will fail.
        // Use non-CE version so they're fatal error.
        // ? The original implementation uses JSON.stringify
        // ? and JsonWebKey key order returned by WebCrypto by browsers and NodeJS are different.
        // ? We use the Chrome order to keep the result stable.
        const text = `{"alg":"A256GCM","ext":true,"k":"${jwk.val.k}","key_ops":["decrypt","encrypt"],"kty":"oct"}`;
        const ab = (0,kit_esm/* encodeText */.YT)(text);
        const encryptedKey = await crypto_encryptWithAES(types_AESAlgorithmEnum.A256GCM, publicSharedKey.val, iv, ab);
        if (encryptedKey.err) return encryptedKey.mapErr((e)=>new src/* CheckedError */.iD(Exception_CryptoException.EncryptFailed, e)
        );
        return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(encryptedKey.val.slice()));
    }
}
function encodeSignature(sig) {
    if (sig.none) return '_';
    // TODO: should we validate the signee to make sure that it produce a backward compatible signature of the content?
    return (0,kit_esm/* encodeArrayBuffer */.ll)(sig.val.signature.slice());
}
async function compressSecp256k1Key(key) {
    const jwk = await exportCryptoKeyToJWK(key);
    if (jwk.err) return jwk.mapErr((e)=>new src/* CheckedError */.iD(Exception_CryptoException.InvalidCryptoKey, e)
    );
    const arr = esm/* Result.wrap */.x4.wrap(()=>(0,src/* compressSecp256k1Point */.SH)(jwk.val.x, jwk.val.y)
    ).mapErr((e)=>new src/* CheckedError */.iD(Exception_CryptoException.InvalidCryptoKey, e)
    );
    if (arr.err) return arr;
    return (0,esm.Ok)((0,kit_esm/* encodeArrayBuffer */.ll)(arr.val.slice()));
}

;// CONCATENATED MODULE: ../encryption/src/payload/types.ts
var types_EC_KeyCurveEnum;
(function(EC_KeyCurveEnum) {
    EC_KeyCurveEnum[EC_KeyCurveEnum["ed25519"] = 0] = "ed25519";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256p1"] = 1] = "secp256p1";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256k1"] = 2] = "secp256k1";
})(types_EC_KeyCurveEnum || (types_EC_KeyCurveEnum = {}));
var types_AESAlgorithmEnum;
(function(AESAlgorithmEnum) {
    AESAlgorithmEnum["A256GCM"] = "A256GCM";
})(types_AESAlgorithmEnum || (types_AESAlgorithmEnum = {}));
var types_SocialNetworkEnum;
(function(SocialNetworkEnum) {
    SocialNetworkEnum[SocialNetworkEnum["Unknown"] = -1] = "Unknown";
    SocialNetworkEnum[SocialNetworkEnum["Facebook"] = 0] = "Facebook";
    SocialNetworkEnum[SocialNetworkEnum["Twitter"] = 1] = "Twitter";
    SocialNetworkEnum[SocialNetworkEnum["Instagram"] = 2] = "Instagram";
    SocialNetworkEnum[SocialNetworkEnum["Minds"] = 3] = "Minds";
})(types_SocialNetworkEnum || (types_SocialNetworkEnum = {}));
const SocialNetworkEnumToDomain = {
    [types_SocialNetworkEnum.Unknown]: 'localhost',
    [types_SocialNetworkEnum.Facebook]: 'facebook.com',
    [types_SocialNetworkEnum.Minds]: 'minds.com',
    [types_SocialNetworkEnum.Twitter]: 'twitter.com',
    [types_SocialNetworkEnum.Instagram]: 'instagram.com'
};
function SocialNetworkEnumToProfileDomain(x) {
    return SocialNetworkEnumToDomain[x];
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/SignatureContainer.ts




const SignatureContainer_decode = decodeMessagePackF(Exception_PayloadException.InvalidPayload, Exception_PayloadException.DecodeFailed);
function encodeSignatureContainer(payload, signature) {
    const container = [
        0,
        payload,
        signature
    ];
    return encodeMessagePack(container);
}
function SignatureContainer_parseSignatureContainer(signatureContainer) {
    return SignatureContainer_decode(signatureContainer).andThen(assertArray('SignatureContainer', PayloadException.InvalidPayload)).andThen(([version, rawPayload, rawSignature])=>{
        if (version !== 0) return new CheckedError(PayloadException.UnknownVersion, 'Unknown Signature container version').toErr();
        return assertUint8Array(rawPayload, 'SignatureContainer[1]', PayloadException.InvalidPayload).andThen((payload)=>{
            if (rawSignature === null) return Ok({
                payload,
                signature: OptionalResult.None
            });
            const signature = assertUint8Array(rawSignature, 'SignatureContainer[2]', PayloadException.InvalidPayload).andThen((sig)=>OptionalResult.Some({
                    signature: sig,
                    signee: payload
                })
            );
            return Ok({
                payload,
                signature
            });
        });
    });
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-37.parser.ts








// ? Payload format: (binary format)
// ? See: docs/rfc/000-Payload-37.md
const version_37_parser_decode = decodeMessagePackF(Exception_PayloadException.InvalidPayload, Exception_PayloadException.DecodeFailed);
const InvalidPayload = (msg)=>new CheckedError(PayloadException.InvalidPayload, msg).toErr()
;
const importSpki = src/* CheckedError.withErr */.iD.withErr(importEC_Key, Exception_CryptoException.InvalidCryptoKey);
const importAES256 = src/* CheckedError.withErr */.iD.withErr(crypto_importAESFromJWK, Exception_CryptoException.InvalidCryptoKey);
async function version_37_parser_parse37(input) {
    const signatureContainer = parseSignatureContainer(input);
    if (signatureContainer.err) return signatureContainer;
    const { payload , signature  } = signatureContainer.val;
    return parsePayload37(payload, signature);
}
function parsePayload37(payload, signature) {
    const _ = version_37_parser_decode(payload).andThen(assertArray('Payload', PayloadException.InvalidPayload));
    return andThenAsync(_, async (item)=>{
        const [version, authorNetwork, authorID, authorPublicKeyAlg, authorPublicKey, encryption, data] = item;
        if (version !== -37) return new CheckedError(PayloadException.UnknownVersion, null).toErr();
        const normalized = {
            version: -37,
            author: parseAuthor(authorNetwork, authorID),
            authorPublicKey: authorPublicKey ? OptionalResult.fromResult(await importAsymmetryKey(authorPublicKeyAlg, authorPublicKey, 'authorPublicKey')) : OptionalResult.None,
            encryption: await parseEncryption(encryption),
            encrypted: assertUint8Array(data, 'encrypted', PayloadException.InvalidPayload),
            signature
        };
        return Ok(normalized);
    });
}
async function parseEncryption(encryption) {
    if (!Array.isArray(encryption)) return InvalidPayload('Invalid encryption');
    const kind = encryption[0];
    if (kind === EncryptionKind.PeerToPeer) {
        const [, ownersAESKeyEncrypted, iv, authorEphemeralPublicKeys] = encryption;
        const e = {
            type: 'E2E',
            iv: assertUint8Array(iv, 'iv', PayloadException.InvalidPayload).andThen(assertIVLengthEq16),
            ownersAESKeyEncrypted: assertUint8Array(ownersAESKeyEncrypted, 'ownersAESKeyEncrypted', PayloadException.InvalidPayload),
            ephemeralPublicKey: await parseAuthorEphemeralPublicKeys(authorEphemeralPublicKeys)
        };
        return Ok(e);
    } else if (kind === EncryptionKind.Public) {
        const [, AESKey, iv] = encryption;
        const e = {
            type: 'public',
            iv: assertUint8Array(iv, 'iv', PayloadException.InvalidPayload).andThen(assertIVLengthEq16),
            AESKey: await parseAES(AESKey)
        };
        return Ok(e);
    } else {
        safeUnreachable(kind);
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
function parseAES(aes1) {
    return andThenAsync(assertArray('aes', CryptoException.InvalidCryptoKey)(aes1), async (aes)=>{
        const [algr, k] = aes;
        if (typeof k === 'string') {
            if (algr === AESAlgorithmEnum.A256GCM) {
                const jwk = {
                    ext: true,
                    key_ops: [
                        'encrypt',
                        'decrypt'
                    ],
                    kty: 'oct',
                    alg: algr,
                    k
                };
                const key = await importAES256(jwk, algr);
                if (key.err) return key;
                return Ok({
                    algr,
                    key: key.val
                });
            }
        }
        return new CheckedError(CryptoException.UnsupportedAlgorithm, null).toErr();
    });
}
function importAsymmetryKey(algr, key1, name) {
    return andThenAsync(assertUint8Array(key1, name, CryptoException.InvalidCryptoKey), async (pubKey)=>{
        if (typeof algr === 'number') {
            if (algr in EC_KeyCurveEnum) {
                const key = await importSpki(pubKey, algr);
                if (key.err) return key;
                return Ok({
                    algr,
                    key: key.val
                });
            }
        }
        return new CheckedError(CryptoException.UnsupportedAlgorithm, null).toErr();
    });
}
var EncryptionKind;
(function(EncryptionKind) {
    EncryptionKind[EncryptionKind["Public"] = 0] = "Public";
    EncryptionKind[EncryptionKind["PeerToPeer"] = 1] = "PeerToPeer";
})(EncryptionKind || (EncryptionKind = {}));

;// CONCATENATED MODULE: ../encryption/src/payload_internal/version-37.encoder.ts


var version_37_encoder_Index;
(function(Index) {
    Index[Index["version"] = 0] = "version";
    Index[Index["authorNetwork"] = 1] = "authorNetwork";
    Index[Index["authorID"] = 2] = "authorID";
    Index[Index["authorPublicKeyAlgorithm"] = 3] = "authorPublicKeyAlgorithm";
    Index[Index["authorPublicKey"] = 4] = "authorPublicKey";
    Index[Index["encryption"] = 5] = "encryption";
    Index[Index["data"] = 6] = "data";
})(version_37_encoder_Index || (version_37_encoder_Index = {}));
async function encode37(payload) {
    const payload_arr = [
        -37
    ];
    if (payload.author.some) {
        const { network , userId  } = payload.author.val;
        payload_arr[version_37_encoder_Index.authorNetwork] = network;
        payload_arr[version_37_encoder_Index.authorID] = userId;
    }
    if (payload.authorPublicKey.some) {
        const { algr , key  } = payload.authorPublicKey.val;
        payload_arr[version_37_encoder_Index.authorPublicKeyAlgorithm] = algr;
        const spki = await exportCryptoKeyToSPKI(key);
        if (spki.ok) {
            payload_arr[version_37_encoder_Index.authorPublicKey] = spki.val;
        } else {
            payload_arr[version_37_encoder_Index.authorPublicKey] = null;
            warn(key, spki.err);
        }
    }
    if (payload.encryption.type === 'E2E') {
        const { ephemeralPublicKey , iv , ownersAESKeyEncrypted  } = payload.encryption;
        const keyMaterials = {};
        const subArr = [
            1,
            ownersAESKeyEncrypted,
            iv,
            keyMaterials
        ];
        for (const [alg, key] of ephemeralPublicKey.entries()){
            const k = await exportCryptoKeyToSPKI(key);
            if (k.err) warn(key, k.err);
            else keyMaterials[alg] = k.val;
        }
        payload_arr[version_37_encoder_Index.encryption] = subArr;
    } else {
        const { AESKey , iv  } = payload.encryption;
        const subArr = [
            0,
            [
                AESKey.algr,
                (await crypto.subtle.exportKey('jwk', AESKey.key)).k
            ],
            iv
        ];
        payload_arr[version_37_encoder_Index.encryption] = subArr;
    }
    payload_arr[version_37_encoder_Index.data] = payload.encrypted;
    return (0,esm.Ok)(encodeMessagePack(payload_arr));
}
function warn(key, err) {
    console.warn('[@masknet/encryption] Failed to encode a public key object into spki format. key is', key, 'and the error is', err);
}

;// CONCATENATED MODULE: ../encryption/src/payload_internal/index.ts



// Remove v38 encoder after




;// CONCATENATED MODULE: ../encryption/src/payload/index.ts






async function parsePayload(payload) {
    if (payload instanceof Uint8Array) {
        return parse37(payload.slice());
    }
    if (typeof payload === 'string') {
        if (payload.startsWith('\u{1F3BC}4/4')) return parse38(payload);
        if (payload.startsWith('\u{1F3BC}3/4')) return parse39(payload);
        if (payload.startsWith('\u{1F3BC}2/4')) return parse40(payload);
    }
    return new CheckedError(PayloadException.UnknownVersion, null).toErr();
}
async function encodePayloadWithoutSignatureContainer(payload) {
    if (payload.version === -38) return encode38(payload);
    else if (payload.version === -37) return encode37(payload);
    const decodeOnly = payload.version === -39 || payload.version === -40 || payload.version === -41;
    const errorMessage = decodeOnly ? `version ${payload.version} only supports decode.` : null;
    return new src/* CheckedError */.iD(Exception_PayloadException.UnknownVersion, errorMessage).toErr();
}
async function payload_encodePayload(payload, sign) {
    if (payload.version === -37) {
        const bin = await encodePayloadWithoutSignatureContainer(payload);
        if (bin.err) return bin;
        if (typeof bin.val === 'string') throw new TypeError('This should never be string');
        const sig = await sign(payload, bin.val);
        if (sig.err) return sig;
        return (0,esm.Ok)(encodeSignatureContainer(bin.val, sig.val.unwrapOr(null)));
    }
    const val = await encodePayloadWithoutSignatureContainer(payload);
    if (val.ok && typeof val.val !== 'string') throw new TypeError('This should always be a string for version < -37');
    return val;
}
payload_encodePayload.NoSign = (payload)=>payload_encodePayload(payload, async ()=>src/* OptionalResult.None */.E.None
    )
;

// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
;// CONCATENATED MODULE: ../encryption/src/encryption/DecryptionTypes.ts

var DecryptionTypes_DecryptProgressKind;
(function(DecryptProgressKind) {
    DecryptProgressKind["Success"] = 'success';
    DecryptProgressKind["Error"] = 'error';
    DecryptProgressKind["Info"] = 'info';
    DecryptProgressKind["Progress"] = 'progress';
})(DecryptionTypes_DecryptProgressKind || (DecryptionTypes_DecryptProgressKind = {}));
var DecryptIntermediateProgressKind;
(function(DecryptIntermediateProgressKind) {
    DecryptIntermediateProgressKind["TryDecryptByE2E"] = 'E2E';
})(DecryptIntermediateProgressKind || (DecryptIntermediateProgressKind = {}));
var ErrorReasons;
(function(ErrorReasons) {
    ErrorReasons["PayloadBroken"] = '[@masknet/encryption] Payload is broken.';
    ErrorReasons["PayloadDecryptedButTypedMessageBroken"] = "[@masknet/encryption] Payload decrypted, but it's inner TypedMessage is broken.";
    ErrorReasons["CannotDecryptAsAuthor"] = '[@masknet/encryption] Failed decrypt as the author of this payload.';
    ErrorReasons["DecryptFailed"] = '[@masknet/encryption] Post key found, but decryption failed.';
    ErrorReasons["AuthorPublicKeyNotFound"] = "[@masknet/encryption] Cannot found author's public key";
    ErrorReasons["PrivateKeyNotFound"] = '[@masknet/encryption] Cannot continue to decrypt because there is no private key found.';
    ErrorReasons["NotShareTarget"] = '[@masknet/encryption] No valid key is found. Likely this post is not shared with you';
    ErrorReasons[// Not used in this library.
    "UnrecognizedAuthor"] = '[@masknet/encryption] No author is recognized which is required for the image steganography decoding.';
    ErrorReasons["CurrentProfileDoesNotConnectedToPersona"] = '[@masknet/encryption] Cannot decrypt by E2E because no persona is linked with the current profile.';
    ErrorReasons["NoPayloadFound"] = '[@masknet/encryption] No payload found in this material.';
})(ErrorReasons || (ErrorReasons = {}));
class DecryptionTypes_DecryptError extends Error {
    constructor(message, cause, recoverable = false){
        super(message, {
            cause
        });
        this.message = message;
        this.recoverable = recoverable;
        this.type = DecryptionTypes_DecryptProgressKind.Error;
    }
}
DecryptionTypes_DecryptError.Reasons = ErrorReasons;
(0,src/* registerSerializableClass */.tr)('MaskDecryptError', (x)=>x instanceof DecryptionTypes_DecryptError
, (e)=>({
        cause: e.cause,
        recoverable: e.recoverable,
        message: e.message,
        stack: e.stack
    })
, (o)=>{
    const e = new DecryptionTypes_DecryptError(o.message, o.cause, o.recoverable);
    e.stack = o.stack;
    return e;
});

;// CONCATENATED MODULE: ../encryption/src/encryption/Decryption.ts








const Decryption_ErrorReasons = DecryptionTypes_DecryptError.Reasons;
async function* decrypt(options, io) {
    const { author: _author , encrypted: _encrypted , encryption: _encryption , version  } = options.message;
    const { authorPublicKey: _authorPublicKey  } = options.message;
    if (_encryption.err) return yield new DecryptError(Decryption_ErrorReasons.PayloadBroken, _encryption.val);
    if (_encrypted.err) return yield new DecryptError(Decryption_ErrorReasons.PayloadBroken, _encrypted.val);
    const encryption = _encryption.val;
    const encrypted = _encrypted.val;
    // ! try decrypt by cache
    {
        const cacheKey = await io.getPostKeyCache().catch(()=>null
        );
        const iv = encryption.iv.unwrapOr(null);
        if (cacheKey && iv) return yield* decryptWithPostAESKey(version, cacheKey, iv, encrypted);
    }
    if (encryption.type === 'public') {
        const { AESKey , iv  } = encryption;
        if (AESKey.err) return yield new DecryptError(Decryption_ErrorReasons.PayloadBroken, AESKey.val);
        if (iv.err) return yield new DecryptError(Decryption_ErrorReasons.PayloadBroken, iv.val);
        // Not calling setPostCache here. It's public post and saving key is wasting storage space.
        return yield* decryptWithPostAESKey(version, AESKey.val.key, iv.val, encrypted);
    } else if (encryption.type === 'E2E') {
        const { ephemeralPublicKey , iv: _iv , ownersAESKeyEncrypted  } = encryption;
        if (_iv.err) return yield new DecryptError(Decryption_ErrorReasons.PayloadBroken, _iv.val);
        const iv = _iv.val;
        const author = _author.unwrapOr(None);
        // ! Try to decrypt this post as author (using ownersAESKeyEncrypted field)
        // #region
        const hasAuthorLocalKey = author.some ? io.hasLocalKeyOf(author.val).catch(()=>false
        ) : Promise.resolve(false);
        if (ownersAESKeyEncrypted.ok) {
            try {
                const aes_raw = await io.decryptByLocalKey(author.unwrapOr(null), ownersAESKeyEncrypted.val, iv);
                const aes = await importAESKeyFromJWKFromTextEncoder(aes_raw);
                io.setPostKeyCache(aes).catch(()=>{});
                return yield* decryptWithPostAESKey(version, aes, iv, encrypted);
            } catch (err) {
                if (await hasAuthorLocalKey) {
                    // If we fall into this branch, it means we failed to decrypt as author.
                    // Since we will not ECDHE to myself when encrypting,
                    // it does not make sense to try the following steps (because it will never have a result).
                    return yield new DecryptError(Decryption_ErrorReasons.CannotDecryptAsAuthor, err);
                }
            // fall through
            }
        } else {
            if (await hasAuthorLocalKey) {
                // If the ownersAESKeyEncrypted is corrupted and we're the author, we cannot do anything to continue.
                return yield new DecryptError(Decryption_ErrorReasons.CannotDecryptAsAuthor, ownersAESKeyEncrypted.val);
            }
        // fall through
        }
        // #endregion
        // ! Try to decrypt this post via ECDH
        // #region
        const authorPublicKey = _authorPublicKey.unwrapOr(None);
        if (version === -37) {
            return yield* v37ECDHE(io, ephemeralPublicKey, iv, encrypted, options.signal);
        } else {
            // Static ECDH
            // to do static ECDH, we need to have the authors public key first. bail if not found.
            const authorECPub = await Result.wrapAsync(async ()=>{
                if (authorPublicKey.some) return authorPublicKey.val.key;
                return io.queryAuthorPublicKey(author.unwrapOr(null), options.signal);
            });
            if (authorECPub.err) return yield new DecryptError(Decryption_ErrorReasons.AuthorPublicKeyNotFound, authorECPub.val);
            if (!authorECPub.val) return yield new DecryptError(Decryption_ErrorReasons.AuthorPublicKeyNotFound, undefined);
            return yield* v38To40StaticECDH(version, io, authorECPub.val, iv, encrypted, options.signal);
        }
    // #endregion
    }
    unreachable(encryption);
}
async function* v37ECDHE(io, inlinedECDHE, iv, encrypted, signal) {
    // for each inlinedECDHE pub, derive a set of AES key.
    const inlinedECDHE_derived = Promise.all(Object.values(inlinedECDHE).map((x)=>x.unwrapOr(null)
    ).filter(Boolean).map((x)=>io.deriveAESKey(x.key)
    )).then((x)=>x.flat()
    );
    return yield* decryptByECDH(-37, io, io.queryPostKey_version37(iv, signal), {
        type: 'ephemeral',
        derive: (key)=>key ? io.deriveAESKey(key) : inlinedECDHE_derived
    }, iv, encrypted);
}
async function* v38To40StaticECDH(version, io, authorECPub, iv1, encrypted, signal) {
    const postAESKeyIterator = ({
        '-40': async function*(iv) {
            const val = await io.queryPostKey_version40(iv);
            if (val) yield val;
        },
        '-39': io.queryPostKey_version39,
        '-38': io.queryPostKey_version38
    })[version](iv1, signal);
    return yield* decryptByECDH(version, io, postAESKeyIterator, {
        type: 'static-v38-or-older',
        derive: (postKeyIV)=>io.deriveAESKey_version38_or_older(authorECPub, postKeyIV)
    }, iv1, encrypted);
}
async function* decryptByECDH(version, io, possiblePostKeyIterator, ecdhProvider, iv, encrypted) {
    const { derive , type  } = ecdhProvider;
    for await (const _ of possiblePostKeyIterator){
        const { encryptedPostKey , postKeyIV , ephemeralPublicKey  } = _;
        // TODO: how to deal with signature?
        // TODO: what to do if provider throws?
        const derivedKeys = type === 'static-v38-or-older' ? await derive(postKeyIV) : await derive(ephemeralPublicKey).then((aesArr)=>aesArr.map((aes)=>[
                    aes,
                    iv
                ]
            )
        );
        for (const [derivedKey, derivedKeyNewIV] of derivedKeys){
            const possiblePostKey = await andThenAsync(decryptWithAES(AESAlgorithmEnum.A256GCM, derivedKey, derivedKeyNewIV, encryptedPostKey), (postKeyRaw)=>Result.wrapAsync(()=>importAESKeyFromJWKFromTextEncoder(postKeyRaw)
                )
            );
            if (possiblePostKey.err) continue;
            const decrypted = await decryptWithAES(AESAlgorithmEnum.A256GCM, possiblePostKey.val, iv, encrypted);
            if (decrypted.err) continue;
            io.setPostKeyCache(possiblePostKey.val).catch(()=>{});
            // If we'd able to decrypt the raw message, we will stop here.
            // because try further key cannot resolve the problem of parseTypedMessage failed.
            return yield* parseTypedMessage(version, decrypted.val);
        }
    }
    return void (yield new DecryptError(Decryption_ErrorReasons.NotShareTarget, undefined));
}
async function* decryptWithPostAESKey(version, postAESKey, iv, encrypted) {
    const { err , val  } = await decryptWithAES(AESAlgorithmEnum.A256GCM, postAESKey, iv, encrypted);
    if (err) return yield new DecryptError(Decryption_ErrorReasons.DecryptFailed, val);
    return yield* parseTypedMessage(version, val);
}
async function* parseTypedMessage(version, raw) {
    const { err , val  } = version === -37 ? decodeTypedMessageFromDocument(raw) : decodeTypedMessageV38ToV40Format(raw, version);
    if (err) return yield new DecryptError(Decryption_ErrorReasons.PayloadDecryptedButTypedMessageBroken, val);
    return yield progress(DecryptProgressKind.Success, {
        content: val
    });
}
// uint8 |> TextDecoder |> JSON.parse |> importAESKeyFromJWK
async function importAESKeyFromJWKFromTextEncoder(aes_raw) {
    const aes_text = new TextDecoder().decode(aes_raw);
    const aes_jwk = JSON.parse(aes_text);
    return (await importAESFromJWK.AES_GCM_256(aes_jwk)).unwrap();
}
function progress(kind, rest) {
    return {
        type: kind,
        ...rest
    };
}

;// CONCATENATED MODULE: ../encryption/src/encryption/EncryptionTypes.ts
var EncryptionTypes_EncryptErrorReasons;
(function(EncryptErrorReasons) {
    EncryptErrorReasons["ComplexTypedMessageNotSupportedInPayload38"] = '[@masknet/encryption] Complex TypedMessage is not supported in payload v38.';
    EncryptErrorReasons["PublicKeyNotFound"] = '[@masknet/encryption] Target public key not found.';
})(EncryptionTypes_EncryptErrorReasons || (EncryptionTypes_EncryptErrorReasons = {}));
class EncryptionTypes_EncryptError extends Error {
    constructor(message, cause){
        super(message, {
            cause
        });
        this.message = message;
    }
}
EncryptionTypes_EncryptError.Reasons = EncryptionTypes_EncryptErrorReasons;

;// CONCATENATED MODULE: ../encryption/src/encryption/Encryption.ts








async function encrypt(options, io) {
    if (options.target.type === 'public') return encryptionPublic(options, io);
    if (options.version === -38) {
        return v38EncryptionE2E(options, io);
    } else if (options.version === -37) {
        return v37EncryptionE2E(options, io);
    }
    unreachable(options.version);
}
async function encryptionPublic(options, io) {
    const iv = getIV(io);
    const postKey = await aes256GCM(io);
    const authorPublic = queryAuthorPublicKey(options.author, io);
    const encodedMessage = encodeMessage(options.version, options.message);
    const encryptedMessage = encodedMessage.then((message)=>encryptWithAES(AESAlgorithmEnum.A256GCM, postKey, iv, message)
    ).then((x)=>x.unwrap()
    );
    const encryption = {
        iv,
        type: 'public',
        AESKey: {
            algr: AESAlgorithmEnum.A256GCM,
            key: postKey
        }
    };
    const payload = encodePayload.NoSign({
        version: options.version,
        author: options.author.isUnknown ? None : Some(options.author),
        authorPublicKey: await authorPublic,
        encryption,
        encrypted: await encryptedMessage,
        signature: None
    }).then((x)=>x.unwrap()
    );
    return {
        author: options.author,
        identifier: new PostIVIdentifier(options.author.network, encodeArrayBuffer(iv)),
        postKey,
        output: await payload
    };
}
async function v38EncryptionE2E(options, io) {
    if (options.target.type === 'public') throw new Error('unreachable');
    const iv1 = getIV(io);
    const postKey = await aes256GCM(io);
    const authorPublic = queryAuthorPublicKey(options.author, io);
    const encodedMessage = encodeMessage(options.version, options.message);
    const encryptedMessage = encodedMessage.then((message)=>encryptWithAES(AESAlgorithmEnum.A256GCM, postKey, iv1, message)
    ).then((x)=>x.unwrap()
    );
    const postKeyEncoded = crypto.subtle.exportKey('jwk', postKey).then(JSON.stringify).then((x)=>new TextEncoder().encode(x)
    );
    // For every receiver R,
    //     1. Let R_pub = R.publicKey
    //     2. Let Internal_AES be the result of ECDH with the sender's private key and R_pub
    //     Note: To keep compatibility, here we use the algorithm in
    //     https://github.com/DimensionDev/Maskbook/blob/f3d83713d60dd0aad462e0648c4d38586c106edc/packages/mask/src/crypto/crypto-alpha-40.ts#L29-L58
    //     3. Let ivToBePublish be a new generated IV. This should be sent to the receiver.
    //     4. Calculate new AES key and IV based on Internal_AES and ivToBePublish.
    //     Note: Internal_AES is not returned by io.deriveAESKey_version38_or_older, it is internal algorithm of that method.
    const ecdh = Promise.allSettled(options.target.target.map(async (id)=>{
        const receiverPublicKey = await io.queryPublicKey(id);
        if (!receiverPublicKey) throw new EncryptError(EncryptErrorReasons.PublicKeyNotFound);
        const { aes , iv , ivToBePublished  } = await io.deriveAESKey_version38_or_older(receiverPublicKey.key);
        const encryptedPostKey = await encryptWithAES(AESAlgorithmEnum.A256GCM, aes, iv, await postKeyEncoded);
        return {
            ivToBePublished,
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: id
        };
    })).then((x)=>x.entries()
    );
    const encryption = {
        type: 'E2E',
        // v38 does not support ephemeral encryption.
        ephemeralPublicKey: new Map(),
        iv: iv1,
        ownersAESKeyEncrypted: await io.encryptByLocalKey(await postKeyEncoded, iv1)
    };
    const payload = encodePayload.NoSign({
        version: -38,
        author: options.author.isUnknown ? None : Some(options.author),
        authorPublicKey: await authorPublic,
        encryption,
        encrypted: await encryptedMessage,
        signature: None
    }).then((x)=>x.unwrap()
    );
    const ecdhResult = new IdentifierMap(new Map(), ProfileIdentifier);
    for (const [index, result] of (await ecdh)){
        ecdhResult.set(options.target.target[index], result);
    }
    return {
        author: options.author,
        identifier: new PostIVIdentifier(options.author.network, encodeArrayBuffer(iv1)),
        output: await payload,
        postKey: postKey,
        e2e: ecdhResult
    };
}
async function v37EncryptionE2E(options, io) {
    if (options.target.type === 'public') throw new Error('unreachable');
    const iv = getIV(io);
    const postKey = await aes256GCM(io);
    const encodedMessage = encodeMessage(options.version, options.message);
    const encryptedMessage = encodedMessage.then((message)=>encryptWithAES(AESAlgorithmEnum.A256GCM, postKey, iv, message)
    ).then((x)=>x.unwrap()
    );
    const postKeyEncoded = crypto.subtle.exportKey('raw', postKey).then((x)=>new Uint8Array(x)
    );
    const authorPublic = await queryAuthorPublicKey(options.author, io);
    if (!authorPublic.some) throw new EncryptError(EncryptErrorReasons.PublicKeyNotFound);
    const ephemeralKeys = new Map();
    // get ephemeral keys, generate one if not found
    const getEphemeralKey = async (curve)=>{
        if (ephemeralKeys.has(curve)) return ephemeralKeys.get(curve);
        ephemeralKeys.set(curve, ec(io, curve));
        return ephemeralKeys.get(curve);
    };
    const ecdh = Promise.allSettled(options.target.target.map(async (id)=>{
        const receiverPublicKey = await io.queryPublicKey(id);
        if (!receiverPublicKey) throw new EncryptError(EncryptErrorReasons.PublicKeyNotFound);
        const [, ephemeralPrivateKey] = await getEphemeralKey(receiverPublicKey.algr);
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
        const encryptedPostKey = await encryptWithAES(AESAlgorithmEnum.A256GCM, aes, iv, await postKeyEncoded);
        return {
            encryptedPostKey: encryptedPostKey.unwrap(),
            target: id
        };
    })).then((x)=>x.entries()
    );
    const ownersAESKeyEncrypted = Promise.resolve().then(async ()=>{
        const authorPublicKey = authorPublic.val;
        const [, ephemeralPrivateKey] = await getEphemeralKey(authorPublicKey.algr);
        // we get rid of localKey in v38
        const aes = await crypto.subtle.deriveKey({
            name: 'ECDH',
            public: authorPublicKey.key
        }, ephemeralPrivateKey, {
            name: 'AES-GCM',
            length: 256
        }, true, [
            'encrypt'
        ]);
        // Note: we're reusing iv in the post encryption.
        const encryptedPostKey = await encryptWithAES(AESAlgorithmEnum.A256GCM, aes, iv, await postKeyEncoded);
        return encryptedPostKey.unwrap();
    });
    const encryption = {
        type: 'E2E',
        ephemeralPublicKey: new Map(),
        iv,
        ownersAESKeyEncrypted: await ownersAESKeyEncrypted
    };
    // we must ensure ecdh is all resolved, otherwise we may miss some result of ephemeralPublicKey.
    const ecdhResult = new IdentifierMap(new Map(), ProfileIdentifier);
    for (const [index, result] of (await ecdh)){
        ecdhResult.set(options.target.target[index], result);
    }
    for (const [curve1, keys] of ephemeralKeys){
        encryption.ephemeralPublicKey.set(curve1, (await keys)[0]);
    }
    const payload = await encodePayload.NoSign({
        version: -38,
        author: options.author.isUnknown ? None : Some(options.author),
        authorPublicKey: authorPublic,
        encryption,
        encrypted: await encryptedMessage,
        signature: None
    });
    return {
        author: options.author,
        identifier: new PostIVIdentifier(options.author.network, encodeArrayBuffer(iv)),
        output: payload.unwrap(),
        postKey: postKey,
        e2e: ecdhResult
    };
}
async function encodeMessage(version, message) {
    if (version === -37) return encodeTypedMessageToDocument(message);
    if (!isTypedMessageText(message)) throw new EncryptError(EncryptErrorReasons.ComplexTypedMessageNotSupportedInPayload38);
    return encodeTypedMessageV38Format(message);
}
async function queryAuthorPublicKey(of, io) {
    try {
        const key = await io.queryPublicKey(of);
        if (!key) return None;
        return Some(key);
    } catch (error) {
        console.warn('[@masknet/encryption] Failed when query author public key', error);
        return None;
    }
}
function getIV(io) {
    if (io.getRandomValues) return io.getRandomValues(new Uint8Array(16));
    return crypto.getRandomValues(new Uint8Array(16));
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
async function ec(io, kind) {
    if (io.getRandomECKey) return io.getRandomECKey(kind);
    const namedCurve = {
        [EC_KeyCurveEnum.secp256p1]: 'P-256',
        [EC_KeyCurveEnum.secp256k1]: 'K-256',
        get [EC_KeyCurveEnum.ed25519] () {
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

;// CONCATENATED MODULE: ../encryption/src/encryption/index.ts



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
function twitter_TwitterDecoder(raw) {
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
    if (network === SocialNetworkEnum.Twitter) return TwitterDecoder(content).map((x)=>[
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


// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/cjs/grayscale.js
var grayscale = __webpack_require__(34523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/cjs/transform.js
var transform = __webpack_require__(84140);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/cjs/dom.js
var dom = __webpack_require__(50710);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/cjs/helper.js
var helper = __webpack_require__(4023);
;// CONCATENATED MODULE: ../encryption/src/image-steganography/utils.ts
/* eslint-disable no-bitwise */ 
/** @internal */ function getDimension(buf) {
    const fallback = {
        width: 0,
        height: 0
    };
    switch((0,helper.imgType)(new Uint8Array(buf))){
        case 'image/jpeg':
            var ref;
            return (ref = getDimensionAsJPEG(buf)) !== null && ref !== void 0 ? ref : fallback;
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
    if (dataView.getUint8(i) === 255 && dataView.getUint8(i + 1) === 216 && dataView.getUint8(i + 2) === 255 && dataView.getUint8(i + 3) === 224 // APP0 marker
    ) {
        i += 4;
        if (dataView.getUint8(i + 2) === 'J'.charCodeAt(0) && dataView.getUint8(i + 3) === 'F'.charCodeAt(0) && dataView.getUint8(i + 4) === 'I'.charCodeAt(0) && dataView.getUint8(i + 5) === 'F'.charCodeAt(0) && dataView.getUint8(i + 6) === 0) {
            let block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
            while(i < dataView.byteLength){
                i += block_length;
                if (i >= dataView.byteLength) return;
                if (dataView.getUint8(i) !== 255) return;
                if (dataView.getUint8(i + 1) === 192 || dataView.getUint8(i + 1) === 194 // SOF2 marker
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

;// CONCATENATED MODULE: ../encryption/src/image-steganography/index.ts






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
    grayscaleAlgorithm: grayscale.GrayscaleAlgorithm.NONE,
    transformAlgorithm: transform.TransformAlgorithm.FFT1D
};
const isSameDimension = (dimension, otherDimension)=>dimension.width === otherDimension.width && dimension.height === otherDimension.height
;
async function steganographyEncodeImage(buf, options) {
    const { template , downloadImage  } = options;
    const preset = dimensionPreset.find((d)=>d.template && d.template === template
    );
    if (!preset) throw new Error('Failed to find preset.');
    return new Uint8Array(await (0,dom.encode)(buf, await downloadImage(preset.mask), {
        ...defaultOptions,
        ...preset === null || preset === void 0 ? void 0 : preset.options,
        ...(0,omit/* default */.Z)(options, 'template')
    }));
}
async function inner(buf, options) {
    const dimension = getDimension(buf);
    const preset = dimensionPreset.find((d)=>isSameDimension(d, dimension)
    );
    if (!preset) return '';
    return (0,dom.decode)(buf, await options.downloadImage(preset.mask), {
        ...defaultOptions,
        transformAlgorithm: transform.TransformAlgorithm.FFT1D,
        ...options
    });
}
async function steganographyDecodeImage(image, options) {
    return inner(typeof image === 'string' ? await options.downloadImage(image) : await image.arrayBuffer(), options);
}

;// CONCATENATED MODULE: ../encryption/src/index.ts





// TODO: remove them in the future



/***/ }),

/***/ 80183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/59099de55fb0e5132fb9.png";

/***/ }),

/***/ 93855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c6f6f6a9e71495dcb147.png";

/***/ }),

/***/ 23689:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/05b047fd9a2685c83493.png";

/***/ }),

/***/ 84037:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2ce52a3440dbeb9d55ef.png";

/***/ })

}]);