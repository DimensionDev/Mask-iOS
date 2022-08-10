"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8722],{

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

/***/ 39820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    isolated_dashboard_bridge_enabled: false,
    mask_SDK_ready: betaOrInsiderOnly,
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    trader_all_api_cached_enabled: devOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    // #endregion
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    harmony_enabled: true,
    nft_airdrop_enabled: false,
    post_actions_enabled: true,
    next_id_tip_enabled: true,
    // #region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     */ no_web_extension_dynamic_permission_request: is_iOSApp,
    has_no_WebRTC:  true || 0,
    // #endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 83152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);



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

/***/ 52881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CrossIsolationMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated
 * Prefer MaskMessages.
 *
 * Only use this in the following cases:
 *
 * - You need to send message across different plugins
 *       e.g. from the packages/plugins/Example to packages/plugins/Example2
 * - You need to send message from plugin
 *       e.g. packages/plugins/Example to the main Mask extension.
 */ // TODO: find a way to use a good API for cross isolation communication.
const CrossIsolationMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.WebExtensionMessage({
    domain: '_'
});


/***/ }),

/***/ 84831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ NextIDAction),
/* harmony export */   "V": () => (/* binding */ NextIDPlatform)
/* harmony export */ });
var NextIDAction;
(function(NextIDAction) {
    NextIDAction["Create"] = 'create';
    NextIDAction["Delete"] = 'delete';
})(NextIDAction || (NextIDAction = {}));
var NextIDPlatform;
(function(NextIDPlatform) {
    NextIDPlatform["NextID"] = 'nextid';
    NextIDPlatform["Twitter"] = 'twitter';
    NextIDPlatform["Keybase"] = 'keybase';
    NextIDPlatform["Ethereum"] = 'ethereum';
    NextIDPlatform["GitHub"] = 'github';
})(NextIDPlatform || (NextIDPlatform = {}));


/***/ }),

/***/ 30375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iD": () => (/* reexport */ CheckedError),
  "E": () => (/* reexport */ OptionalResult),
  "ps": () => (/* reexport */ andThenAsync/* andThenAsync */.p)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../shared-base/src/Results/OptionalResult.ts

const OptionalResult = {
    Some (x) {
        return (0,esm.Ok)((0,esm/* Some */.bD)(x));
    },
    None: (0,esm.Ok)(esm/* None */.Hq),
    fromResult (x) {
        if (x.err) return x;
        return (0,esm.Ok)((0,esm/* Some */.bD)(x.val));
    }
};

// EXTERNAL MODULE: ../shared-base/src/Results/andThenAsync.ts
var andThenAsync = __webpack_require__(60947);
;// CONCATENATED MODULE: ../shared-base/src/Results/CheckedError.ts

class CheckedError extends Error {
    toString() {
        if (this.reason) return `${this.kind}\n${this.reason}`;
        return super.toString();
    }
    static mapErr(r) {
        return (e)=>new CheckedError(r, e)
        ;
    }
    static withErr(f, o) {
        return (...args)=>{
            const r1 = f(...args);
            if ('then' in r1) return r1.then((r)=>r.mapErr(CheckedError.mapErr(o))
            );
            return r1.mapErr(CheckedError.mapErr(o));
        };
    }
    toErr() {
        return (0,esm/* Err */.UG)(this);
    }
    constructor(kind, reason){
        super(kind + '', {
            cause: reason
        });
        this.kind = kind;
        this.reason = reason;
    }
}

;// CONCATENATED MODULE: ../shared-base/src/Results/index.ts





/***/ }),

/***/ 89364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
var DashboardRoutes;
(function(DashboardRoutes) {
    DashboardRoutes["Welcome"] = '/welcome';
    DashboardRoutes["Setup"] = '/setup';
    DashboardRoutes["SignUp"] = '/sign-up';
    DashboardRoutes["SignIn"] = '/sign-in';
    DashboardRoutes["PrivacyPolicy"] = '/privacy-policy';
    DashboardRoutes["Personas"] = '/personas';
    DashboardRoutes["Wallets"] = '/wallets';
    DashboardRoutes["WalletsTransfer"] = '/wallets/transfer';
    DashboardRoutes["WalletsSwap"] = '/wallets/swap';
    DashboardRoutes["WalletsRedPacket"] = '/wallets/red-packet';
    DashboardRoutes["WalletsSell"] = '/wallets/sell';
    DashboardRoutes["WalletsHistory"] = '/wallets/history';
    DashboardRoutes["CreateMaskWallet"] = '/create-mask-wallet';
    DashboardRoutes["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    DashboardRoutes["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    DashboardRoutes["Settings"] = '/settings';
})(DashboardRoutes || (DashboardRoutes = {}));


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

/***/ 41385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jk": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "Po": () => (/* binding */ isExtensionSiteType),
/* harmony export */   "sv": () => (/* binding */ getSiteType),
/* harmony export */   "v_": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "zQ": () => (/* binding */ isEnhanceableSiteType)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5906);


const matchEnhanceableSiteHost = {
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Localhost */ .J.Localhost]: /localhost/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Facebook */ .J.Facebook]: /facebook\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Twitter */ .J.Twitter]: /twitter\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .J.Minds]: /minds\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Instagram */ .J.Instagram]: /instagram\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.OpenSea */ .J.OpenSea]: /opensea\.io/i
};
const matchExtensionSitePathname = {
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .ExtensionSite.Dashboard */ .v.Dashboard]: /dashboard\.html/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .ExtensionSite.Popup */ .v.Popup]: /popups\.html/i
};
function getEnhanceableSiteType() {
    const { host  } = location;
    for (const [type, regexp] of Object.entries(matchEnhanceableSiteHost)){
        if (host.match(regexp)) return type;
        continue;
    }
    return;
}
function getExtensionSiteType() {
    const { pathname  } = location;
    for (const [type, regexp] of Object.entries(matchExtensionSitePathname)){
        if (pathname.match(regexp)) return type;
        continue;
    }
    return;
}
function getSiteType() {
    return getEnhanceableSiteType() ?? getExtensionSiteType();
}
function isEnhanceableSiteType() {
    return !!getEnhanceableSiteType();
}
function isExtensionSiteType() {
    return !!getExtensionSiteType();
}


/***/ }),

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ ObservableWeakMap),
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "n7": () => (/* binding */ ObservableSet),
/* harmony export */   "vP": () => (/* binding */ ObservableMap)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69260);


function tick(callback) {
    Promise.resolve().then(callback);
}
class ObservableWeakMap extends WeakMap {
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableMap extends Map {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableSet extends Set {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x)
        );
        this.event.emit('add', value);
        tick(()=>this.event.emit('add', value)
        );
        return this;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}


/***/ }),

/***/ 18615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ fromHex),
/* harmony export */   "NC": () => (/* binding */ toHex),
/* harmony export */   "mz": () => (/* binding */ fromBase64URL),
/* harmony export */   "s3": () => (/* binding */ toBase64),
/* harmony export */   "wi": () => (/* binding */ toBase64URL)
/* harmony export */ });
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99612);

function fromBase64URL(x) {
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.FromBase64Url */ .ep.FromBase64Url(x));
}
function toBase64URL(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToBase64Url */ .ep.ToBase64Url(x);
}
function toBase64(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToBase64 */ .ep.ToBase64(x);
}
function toHex(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToHex */ .ep.ToHex(x);
}
function fromHex(x) {
    if (x.startsWith('0x')) x = x.slice(2);
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.FromHex */ .ep.FromHex(x));
}


/***/ }),

/***/ 16819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CH": () => (/* reexport */ ECKeyIdentifierFromJsonWebKey),
  "mQ": () => (/* reexport */ JWKType/* assertEC_Private_JsonWebKey */.mQ),
  "xb": () => (/* reexport */ compressSecp256k1KeyRaw),
  "SH": () => (/* reexport */ compressSecp256k1Point),
  "qX": () => (/* reexport */ decompressSecp256k1Key),
  "Yj": () => (/* reexport */ decompressSecp256k1KeyRaw),
  "pf": () => (/* reexport */ decompressSecp256k1Point),
  "bG": () => (/* reexport */ JWKType/* isAESJsonWebKey */.bG),
  "PQ": () => (/* reexport */ JWKType/* isEC_Private_JsonWebKey */.PQ),
  "d8": () => (/* reexport */ JWKType/* isEC_Public_JsonWebKey */.d8),
  "dK": () => (/* reexport */ isSecp256k1Point),
  "Rx": () => (/* reexport */ isSecp256k1PrivateKey)
});

// UNUSED EXPORTS: assertAESJsonWebKey, assertEC_Public_JsonWebKey

// EXTERNAL MODULE: ../shared-base/src/crypto/JWKType.ts
var JWKType = __webpack_require__(55995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(18615);
// EXTERNAL MODULE: ../shared-base/src/Identifier/index.ts + 7 modules
var Identifier = __webpack_require__(57041);
;// CONCATENATED MODULE: ../shared-base/src/crypto/secp256k1.ts



// This module is only used in background.
// Loading tiny-secp256k1 will instantiate a WebAssembly module which is not allowed in the content script for unknown reason and fail the whole module graph.
async function loadLib() {
    if (true) {
        // Note: mobile (Android and iOS does not return a correct MINE type, therefore we can not use streaming to initialize the WASM module).
        WebAssembly.instantiateStreaming = undefined;
        WebAssembly.compileStreaming = undefined;
    }
    // You should not load this module in the content script. If you find you're stuck here, please check your code why it is loading this lib.
    const mod = await __webpack_require__.e(/* import() */ 6497).then(__webpack_require__.bind(__webpack_require__, 76497));
    return mod;
}
/**
 * Compress x & y into a single x
 */ async function compressSecp256k1Point(x, y) {
    const { isPoint , pointCompress  } = await loadLib();
    const xb = (0,convert/* fromBase64URL */.mz)(x);
    const yb = (0,convert/* fromBase64URL */.mz)(y);
    const point = new Uint8Array((0,esm/* concatArrayBuffer */.v_)(new Uint8Array([
        0x04
    ]), xb, yb));
    if (isPoint(point)) {
        return pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1!');
    }
}
/**
 * Decompress x into x & y
 */ async function decompressSecp256k1Point(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    const uncompressed = isPointCompressed(point) ? pointCompress(point, false) : point;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: (0,convert/* toBase64URL */.wi)(x),
        y: (0,convert/* toBase64URL */.wi)(y)
    };
}
async function compressSecp256k1KeyRaw(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (isPointCompressed(point)) return point;
    return pointCompress(point, true);
}
async function decompressSecp256k1KeyRaw(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (!isPointCompressed(point)) return point;
    return pointCompress(point, false);
}
async function compressSecp256k1Key(key) {
    const arr = await compressSecp256k1Point(key.x, key.y);
    return (0,esm/* encodeArrayBuffer */.ll)(arr);
}
async function decompressSecp256k1Key(compressedPublic) {
    const arr = (0,esm/* decodeArrayBuffer */.xe)(compressedPublic);
    const key = await decompressSecp256k1Point(new Uint8Array(arr));
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    return jwk;
}
async function isSecp256k1Point(x) {
    const { isPoint  } = await loadLib();
    return isPoint(x);
}
async function isSecp256k1PrivateKey(d) {
    const { isPrivate  } = await loadLib();
    return isPrivate(d);
}
async function ECKeyIdentifierFromJsonWebKey(key) {
    const x = await compressSecp256k1Key(key);
    return new Identifier/* ECKeyIdentifier */.ob('secp256k1', x);
}

;// CONCATENATED MODULE: ../shared-base/src/crypto/index.ts





/***/ }),

/***/ 34523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(65084);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(50338);
;// CONCATENATED MODULE: ../shared-base/src/kv-storage/proxy.ts

function createProxyKVStorageBackend() {
    let target;
    let [promise, resolve, reject] = (0,esm/* defer */.PQ)();
    return {
        get beforeAutoSync () {
            return promise;
        },
        async getValue (...args) {
            return target.getValue(...args);
        },
        async setValue (...args) {
            return target.setValue(...args);
        },
        replaceBackend (backend) {
            target = backend;
            // resolve old one
            backend.beforeAutoSync.then(resolve, reject);
            [promise, resolve, reject] = (0,esm/* defer */.PQ)();
            backend.beforeAutoSync.then(resolve, reject);
        }
    };
}

;// CONCATENATED MODULE: ../shared-base/src/kv-storage/index.ts




const removed = Symbol.for('removed');

/**
 * Create a root scope of simple K/V storage.
 * @param backend The storage provider
 * @param message The message channel to sync the latest value
 * @param signal The abort signal
 */ function createKVStorageHost(backend, message, signal = new AbortController().signal) {
    return (name, defaultValues)=>{
        return createScope(signal, backend, message, null, name, defaultValues);
    };
}
const alwaysThrowHandler = ()=>{
    throw new TypeError('Invalid operation');
};
function createScope(signal, backend, message, parentScope, scope, defaultValues1) {
    if (scope.includes('/')) throw new TypeError('scope name cannot contains "/"');
    if (scope.includes(':')) throw new TypeError('scope name cannot contains ":"');
    const currentScope = parentScope === null ? scope : `${parentScope}/${scope}`;
    const storage = new Proxy({
        __proto__: null
    }, {
        defineProperty: alwaysThrowHandler,
        deleteProperty: alwaysThrowHandler,
        set: alwaysThrowHandler,
        preventExtensions: alwaysThrowHandler,
        setPrototypeOf: alwaysThrowHandler,
        get (target, prop, receiver) {
            if (typeof prop === 'symbol') return undefined;
            if (target[prop]) return target[prop];
            target[prop] = createState(signal, backend, message, currentScope, prop, defaultValues1[prop]);
            return target[prop];
        }
    });
    backend.beforeAutoSync.then(()=>{
        for (const [key, value] of Object.entries(defaultValues1)){
            if (value === removed) continue;
            // trigger the auto sync
            storage[key].initialized;
        }
    });
    return {
        createSubScope (subScope, defaultValues, scopeSignal) {
            const aggregatedSignal = (0,esm/* combineAbortSignal */.dq)(scopeSignal, signal);
            return createScope(aggregatedSignal, backend, message, currentScope, subScope, defaultValues);
        },
        storage
    };
}
function createState(signal, backend, message, scope, prop, defaultValue) {
    const propKey = `${scope}:${prop}`;
    let initialized = false;
    let usingDefaultValue = true;
    const initializedPromise = backend.beforeAutoSync.then(()=>backend.getValue(propKey)
    ).then((val)=>{
        if (val.some) usingDefaultValue = false;
        return val.unwrapOr(defaultValue);
    }).then((val)=>{
        state = val;
        initialized = true;
    });
    let state = defaultValue;
    const listeners = new Set();
    function subscribe(f) {
        listeners.add(f);
        return ()=>listeners.delete(f)
        ;
    }
    const subscription = {
        getCurrentValue: ()=>{
            if (!initialized) throw initializedPromise;
            return state;
        },
        subscribe
    };
    function setter(val) {
        if (isEqual(state, val)) return;
        usingDefaultValue = false;
        state = val;
        for (const f of listeners)f();
    }
    message.on(([eventKey, newValue])=>eventKey === propKey && setter(newValue)
    , {
        signal
    });
    return {
        get initialized () {
            return initialized;
        },
        get initializedPromise () {
            return initializedPromise;
        },
        get value () {
            if (!initialized) throw new Error('Try to access K/V state before initialization finished.');
            return state;
        },
        async setValue (value) {
            if (signal.aborted) throw new TypeError('Aborted storage.');
            // force trigger store when set state with default value to make it persistent.
            if (usingDefaultValue || !isEqual(state, value)) await backend.setValue(propKey, value);
            setter(value);
        },
        subscription
    };
}
function isEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a === 'object') {
        // Note: JSON stringify is not stable.
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
}


/***/ }),

/***/ 31600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseURL(text) {
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    // CJS-ESM compatibility
    return lib.list(text).map((x)=>x.string
    ).filter((y)=>{
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        try {
            new URL(y);
            return true;
        } catch  {
            return false;
        }
    });
}


/***/ }),

/***/ 66437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fl": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "Lm": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.Lm),
/* harmony export */   "QL": () => (/* reexport safe */ _SharedContextProvider__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "Xr": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.Xr),
/* harmony export */   "vU": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.vU),
/* harmony export */   "yQ": () => (/* reexport safe */ _evm__WEBPACK_IMPORTED_MODULE_3__.yQ)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22017);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64781);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18572);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15285);
/* harmony import */ var _SharedContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7736);
/* harmony import */ var _UITaskManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30613);








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


/***/ }),

/***/ 22329:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ waitDocumentReadyState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);

function waitDocumentReadyState(target) {
    if (ok(target))
        return Promise.resolve();
    return new Promise((resolve) => {
        const callback = () => {
            if (ok(target)) {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, { passive: true });
    });
}
function ok(target, current = document.readyState) {
    return score(target) <= score(current);
}
function score(x) {
    if (x === 'loading')
        return 0;
    if (x === 'interactive')
        return 1;
    if (x === 'complete')
        return 2;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(x);
}
//# sourceMappingURL=document.readyState.js.map

/***/ })

}]);