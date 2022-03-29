"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7854],{

/***/ 85863:
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


/***/ }),

/***/ 40133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": () => (/* binding */ AESAlgorithmEnum),
/* harmony export */   "Gq": () => (/* binding */ SocialNetworkEnum),
/* harmony export */   "VC": () => (/* binding */ SocialNetworkEnumToProfileDomain),
/* harmony export */   "qx": () => (/* binding */ EC_KeyCurveEnum)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
// This file contains normalized Payload.
// Internal payload should not be exported

var EC_KeyCurveEnum;
(function(EC_KeyCurveEnum) {
    EC_KeyCurveEnum[EC_KeyCurveEnum["ed25519"] = 0] = "ed25519";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256p1"] = 1] = "secp256p1";
    EC_KeyCurveEnum[EC_KeyCurveEnum["secp256k1"] = 2] = "secp256k1";
})(EC_KeyCurveEnum || (EC_KeyCurveEnum = {}));
var AESAlgorithmEnum;
(function(AESAlgorithmEnum) {
    AESAlgorithmEnum["A256GCM"] = "A256GCM";
})(AESAlgorithmEnum || (AESAlgorithmEnum = {}));
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

/***/ 38723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ encodeSignatureContainer),
/* harmony export */   "z": () => (/* binding */ parseSignatureContainer)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92755);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43925);




const decode = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .decodeMessagePackF */ .mw)(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed);
function encodeSignatureContainer(payload, signature) {
    const container = [
        0,
        payload
    ];
    if (signature !== null) container.push(signature);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .encodeMessagePack */ .Gg)(container);
}
function parseSignatureContainer(signatureContainer) {
    return decode(signatureContainer).andThen((0,_types__WEBPACK_IMPORTED_MODULE_1__/* .assertArray */ .Wr)('SignatureContainer', _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload)).andThen(([version, rawPayload, rawSignature])=>{
        if (version !== 0) return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.UnknownVersion */ .T6.UnknownVersion, 'Unknown Signature container version').toErr();
        return (0,_types__WEBPACK_IMPORTED_MODULE_1__/* .assertUint8Array */ .jY)(rawPayload, 'SignatureContainer[1]', _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload).andThen((payload)=>{
            if (!rawSignature) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)({
                payload,
                signature: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .OptionalResult.None */ .E.None
            });
            const signature = (0,_types__WEBPACK_IMPORTED_MODULE_1__/* .assertUint8Array */ .jY)(rawSignature, 'SignatureContainer[2]', _types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload).andThen((sig)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .OptionalResult.Some */ .E.Some({
                    signature: sig,
                    signee: payload
                })
            );
            return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)({
                payload,
                signature
            });
        });
    });
}


/***/ }),

/***/ 79690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ parseAuthor),
/* harmony export */   "w": () => (/* binding */ get_v38PublicSharedCryptoKey)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37000);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92755);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43925);





const import_AES_GCM_256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importAESFromJWK.AES_GCM_256 */ .Bs.AES_GCM_256, _types__WEBPACK_IMPORTED_MODULE_3__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
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
    return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.Some */ .E.Some(new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(net, id));
}


/***/ }),

/***/ 45764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ parse37)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92755);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79594);
/* harmony import */ var _payload_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40133);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43925);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66559);
/* harmony import */ var _SignatureContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38723);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79690);








// ? Payload format: (binary format)
// ? See: docs/rfc/000-Payload-37.md
const decode = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .decodeMessagePackF */ .mw)(_types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, _types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed);
const InvalidPayload = (msg)=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_0__/* .PayloadException.InvalidPayload */ .T6.InvalidPayload, msg).toErr()
;
const importSpki = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importEC_Key */ .OT, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
const importAES256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_4__/* .importAESFromJWK */ .Bs, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
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
function parseAES(aes1) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .andThenAsync */ .ps)((0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertArray */ .Wr)('aes', _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey)(aes1), async (aes)=>{
        const [algr, k] = aes;
        if (typeof k === 'string') {
            if (algr === _payload_types__WEBPACK_IMPORTED_MODULE_3__/* .AESAlgorithmEnum.A256GCM */ .$y.A256GCM) {
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
                return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__.Ok)({
                    algr,
                    key: key.val
                });
            }
        }
        return new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.UnsupportedAlgorithm */ .H3.UnsupportedAlgorithm, null).toErr();
    });
}
function importAsymmetryKey(algr, key1, name) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .andThenAsync */ .ps)((0,_types__WEBPACK_IMPORTED_MODULE_0__/* .assertUint8Array */ .jY)(key1, name, _types__WEBPACK_IMPORTED_MODULE_0__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey), async (pubKey)=>{
        if (typeof algr === 'number') {
            if (algr in _payload_types__WEBPACK_IMPORTED_MODULE_3__/* .EC_KeyCurveEnum */ .qx) {
                const key = await importSpki(pubKey, algr);
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

/***/ 19307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ parse38)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37000);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92755);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79594);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43925);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79690);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66559);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79226);
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 






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
        normalized.author = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Identifier.fromString */ .xb.fromString(`person:${authorUserID.val.val}`, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ProfileIdentifier */ .WO).map((x)=>(0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(x)
        ).mapErr(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.mapErr */ .iD.mapErr(_types__WEBPACK_IMPORTED_MODULE_1__/* .PayloadException.DecodeFailed */ .T6.DecodeFailed));
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
    const import_AES_GCM_256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .importAESFromJWK.AES_GCM_256 */ .Bs.AES_GCM_256, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const decrypt = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .decryptWithAES */ .PB, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const jwk_in_u8arr = await decrypt(_payload__WEBPACK_IMPORTED_MODULE_0__/* .AESAlgorithmEnum.A256GCM */ .$y.A256GCM, publicSharedKey.val, iv.val, encryptedKey.val);
    const jwk_in_text = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_u8arr, decodeTextCrypto);
    const jwk = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_text, JSONParse);
    const aes = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk, import_AES_GCM_256);
    return aes.map((key)=>({
            algr: _payload__WEBPACK_IMPORTED_MODULE_0__/* .AESAlgorithmEnum.A256GCM */ .$y.A256GCM,
            key
        })
    );
}
async function decodeECDHPublicKey(compressedPublic) {
    const key = decodeUint8ArrayCrypto(compressedPublic).andThen((val)=>ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Result.wrap */ .x4.wrap(()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .decompressSecp256k1Point */ .pf)(val)
        ).mapErr((e)=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError */ .iD(_types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey, e)
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

/***/ 40505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ parse39)
/* harmony export */ });
/* harmony import */ var _version_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7173);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92755);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
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

/***/ 7173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ parse40)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92755);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43925);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66559);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);





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

/***/ 3787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73624);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45925);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70609);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28331);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32665);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21202);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79226);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63151);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23003);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73336);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86911);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93573);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66559);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57614);
















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
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
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
    var ref19, ref1, ref2, _injection15, ref3, _injection1, ref4, _injection2, ref5, ref6, ref7, _injection3, ref8, _injection4, ref9, _injection5, ref10, _injection6, ref11, _injection7, ref12, _injection8, ref13, _injection9, ref14, _injection10, ref15, _injection11, ref16, _injection12, ref17;
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) { var ref18; }
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    const state = await ui.init(signal1);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .managedStateCreator */ .MJ)()
    };
    (ref19 = ui.customization.paletteMode) === null || ref19 === void 0 ? void 0 : ref19.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    (ref1 = ui.collecting.postsProvider) === null || ref1 === void 0 ? void 0 : ref1.start(signal1);
    startPostListener();
    (ref2 = ui.collecting.currentVisitingIdentityProvider) === null || ref2 === void 0 ? void 0 : ref2.start(signal1);
    (ref3 = (_injection15 = ui.injection).pageInspector) === null || ref3 === void 0 ? void 0 : ref3.call(_injection15, signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) (ref4 = (_injection1 = ui.injection).toolbox) === null || ref4 === void 0 ? void 0 : ref4.call(_injection1, signal1);
    (ref5 = (_injection2 = ui.injection).setupPrompt) === null || ref5 === void 0 ? void 0 : ref5.call(_injection2, signal1);
    (ref6 = ui.injection.newPostComposition) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.start) === null || ref7 === void 0 ? void 0 : ref7.call(ref6, signal1);
    (ref8 = (_injection3 = ui.injection).searchResult) === null || ref8 === void 0 ? void 0 : ref8.call(_injection3, signal1);
    (ref9 = (_injection4 = ui.injection).userBadge) === null || ref9 === void 0 ? void 0 : ref9.call(_injection4, signal1);
    (ref10 = (_injection5 = ui.injection).profileTab) === null || ref10 === void 0 ? void 0 : ref10.call(_injection5, signal1);
    (ref11 = (_injection6 = ui.injection).profileTabContent) === null || ref11 === void 0 ? void 0 : ref11.call(_injection6, signal1);
    (ref12 = (_injection7 = ui.injection).userAvatar) === null || ref12 === void 0 ? void 0 : ref12.call(_injection7, signal1);
    (ref13 = (_injection8 = ui.injection).profileAvatar) === null || ref13 === void 0 ? void 0 : ref13.call(_injection8, signal1);
    (ref14 = (_injection9 = ui.injection).enhancedProfileNFTAvatar) === null || ref14 === void 0 ? void 0 : ref14.call(_injection9, signal1);
    (ref15 = (_injection10 = ui.injection).openNFTAvatar) === null || ref15 === void 0 ? void 0 : ref15.call(_injection10, signal1);
    (ref16 = (_injection11 = ui.injection).postAndReplyNFTAvatar) === null || ref16 === void 0 ? void 0 : ref16.call(_injection11, signal1);
    (ref17 = (_injection12 = ui.injection).avatarClipNFT) === null || ref17 === void 0 ? void 0 : ref17.call(_injection12, signal1);
    (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return _shared__WEBPACK_IMPORTED_MODULE_3__/* .InMemoryStorages.Plugin.createSubScope */ .uU.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return _shared__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages.Plugin.createSubScope */ ._H.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.signWithPersona */ .ZP.Identity.signWithPersona,
            walletSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign,
            currentPersona: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .createSubscriptionFromAsync */ .Fd)(_extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _utils__WEBPACK_IMPORTED_MODULE_12__/* .MaskMessages.events.currentPersonaIdentifier.on */ .ql.events.currentPersonaIdentifier.on)
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__/* ["default"].addResource */ .Z.addResource(language, namespace, i18nKey, value);
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
            _utils__WEBPACK_IMPORTED_MODULE_12__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier.toText());
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
        var ref24;
        const posts = (ref24 = ui.collecting.postsProvider) === null || ref24 === void 0 ? void 0 : ref24.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            var _injection, ref, _injection13, ref20, _injection14, ref21, ref22, ref23;
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            (ref = (_injection = ui.injection).enhancedPostRenderer) === null || ref === void 0 ? void 0 : ref.call(_injection, postSignal, value);
            (ref20 = (_injection13 = ui.injection).postInspector) === null || ref20 === void 0 ? void 0 : ref20.call(_injection13, postSignal, value);
            (ref21 = (_injection14 = ui.injection).postActions) === null || ref21 === void 0 ? void 0 : ref21.call(_injection14, postSignal, value);
            (ref22 = ui.injection.commentComposition) === null || ref22 === void 0 ? void 0 : ref22.compositionBox(postSignal, value);
            (ref23 = ui.injection.commentComposition) === null || ref23 === void 0 ? void 0 : ref23.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                var _injection, ref;
                started = true;
                (ref = (_injection = ui.injection).setupWizard) === null || ref === void 0 ? void 0 : ref.call(_injection, signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .Identifier.fromString */ .xb.fromString(persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .ECKeyIdentifier */ .ob).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_11__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) { var ref; }
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 44840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getNetworkWorker)
/* harmony export */ });
/* unused harmony export definedSocialNetworkWorkersResolved */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86911);


const definedSocialNetworkWorkersResolved = new Set();
async function activateNetworkWorker(id) {
    if (!(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground)) {
        throw new TypeError();
    }
    for (const each of definedSocialNetworkWorkersResolved){
        if (each.networkIdentifier === id) return each;
    }
    for (const each1 of _define__WEBPACK_IMPORTED_MODULE_0__/* .definedSocialNetworkWorkers */ .zq){
        if (each1.networkIdentifier === id) {
            const worker = (await each1.load()).default;
            definedSocialNetworkWorkersResolved.add(worker);
            return worker;
        }
    }
    throw new Error('Worker not found');
}
async function getNetworkWorker(network) {
    if (typeof network === 'string') return activateNetworkWorker(network);
    return getNetworkWorker(network.network);
}


/***/ }),

/***/ 96636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo),
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61290);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24213);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49884);




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
    var ref, ref1;
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: ((ref = json.plugin) === null || ref === void 0 ? void 0 : (ref1 = ref[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]) === null || ref1 === void 0 ? void 0 : ref1.length) || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 13426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96636);



/***/ })

}]);