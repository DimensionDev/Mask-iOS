(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8100],{

/***/ 51765:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  class BufferSourceConverter {
      static isArrayBuffer(data) {
          return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
      }
      static toArrayBuffer(data) {
          const buf = this.toUint8Array(data);
          if (buf.byteOffset || buf.length) {
              return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
          }
          return buf.buffer;
      }
      static toUint8Array(data) {
          return this.toView(data, Uint8Array);
      }
      static toView(data, type) {
          if (typeof Buffer !== "undefined" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          if (this.isArrayBuffer(data)) {
              return new type(data);
          }
          if (this.isArrayBufferView(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
      }
      static isBufferSource(data) {
          return this.isArrayBufferView(data)
              || this.isArrayBuffer(data);
      }
      static isArrayBufferView(data) {
          return ArrayBuffer.isView(data)
              || (data && this.isArrayBuffer(data.buffer));
      }
      static isEqual(a, b) {
          const aView = BufferSourceConverter.toUint8Array(a);
          const bView = BufferSourceConverter.toUint8Array(b);
          if (aView.length !== bView.byteLength) {
              return false;
          }
          for (let i = 0; i < aView.length; i++) {
              if (aView[i] !== bView[i]) {
                  return false;
              }
          }
          return true;
      }
  }

  class Utf8Converter {
      static fromString(text) {
          const s = unescape(encodeURIComponent(text));
          const uintArray = new Uint8Array(s.length);
          for (let i = 0; i < s.length; i++) {
              uintArray[i] = s.charCodeAt(i);
          }
          return uintArray.buffer;
      }
      static toString(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let encodedString = "";
          for (let i = 0; i < buf.length; i++) {
              encodedString += String.fromCharCode(buf[i]);
          }
          const decodedString = decodeURIComponent(escape(encodedString));
          return decodedString;
      }
  }
  class Utf16Converter {
      static toString(buffer, littleEndian = false) {
          const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
          const dataView = new DataView(arrayBuffer);
          let res = "";
          for (let i = 0; i < arrayBuffer.byteLength; i += 2) {
              const code = dataView.getUint16(i, littleEndian);
              res += String.fromCharCode(code);
          }
          return res;
      }
      static fromString(text, littleEndian = false) {
          const res = new ArrayBuffer(text.length * 2);
          const dataView = new DataView(res);
          for (let i = 0; i < text.length; i++) {
              dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
          }
          return res;
      }
  }
  class Convert {
      static isHex(data) {
          return typeof data === "string"
              && /^[a-z0-9]+$/i.test(data);
      }
      static isBase64(data) {
          return typeof data === "string"
              && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data);
      }
      static isBase64Url(data) {
          return typeof data === "string"
              && /^[a-zA-Z0-9-_]+$/i.test(data);
      }
      static ToString(buffer, enc = "utf8") {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.ToUtf8String(buf);
              case "binary":
                  return this.ToBinary(buf);
              case "hex":
                  return this.ToHex(buf);
              case "base64":
                  return this.ToBase64(buf);
              case "base64url":
                  return this.ToBase64Url(buf);
              case "utf16le":
                  return Utf16Converter.toString(buf, true);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.toString(buf);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static FromString(str, enc = "utf8") {
          if (!str) {
              return new ArrayBuffer(0);
          }
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.FromUtf8String(str);
              case "binary":
                  return this.FromBinary(str);
              case "hex":
                  return this.FromHex(str);
              case "base64":
                  return this.FromBase64(str);
              case "base64url":
                  return this.FromBase64Url(str);
              case "utf16le":
                  return Utf16Converter.fromString(str, true);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.fromString(str);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static ToBase64(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          if (typeof btoa !== "undefined") {
              const binary = this.ToString(buf, "binary");
              return btoa(binary);
          }
          else {
              return Buffer.from(buf).toString("base64");
          }
      }
      static FromBase64(base64) {
          const formatted = this.formatString(base64);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64(formatted)) {
              throw new TypeError("Argument 'base64Text' is not Base64 encoded");
          }
          if (typeof atob !== "undefined") {
              return this.FromBinary(atob(formatted));
          }
          else {
              return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
          }
      }
      static FromBase64Url(base64url) {
          const formatted = this.formatString(base64url);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64Url(formatted)) {
              throw new TypeError("Argument 'base64url' is not Base64Url encoded");
          }
          return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
      }
      static ToBase64Url(data) {
          return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      }
      static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
          switch (encoding) {
              case "ascii":
                  return this.FromBinary(text);
              case "utf8":
                  return Utf8Converter.fromString(text);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.fromString(text);
              case "utf16le":
              case "usc2":
                  return Utf16Converter.fromString(text, true);
              default:
                  throw new Error(`Unknown type of encoding '${encoding}'`);
          }
      }
      static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
          switch (encoding) {
              case "ascii":
                  return this.ToBinary(buffer);
              case "utf8":
                  return Utf8Converter.toString(buffer);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.toString(buffer);
              case "utf16le":
              case "usc2":
                  return Utf16Converter.toString(buffer, true);
              default:
                  throw new Error(`Unknown type of encoding '${encoding}'`);
          }
      }
      static FromBinary(text) {
          const stringLength = text.length;
          const resultView = new Uint8Array(stringLength);
          for (let i = 0; i < stringLength; i++) {
              resultView[i] = text.charCodeAt(i);
          }
          return resultView.buffer;
      }
      static ToBinary(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let res = "";
          for (let i = 0; i < buf.length; i++) {
              res += String.fromCharCode(buf[i]);
          }
          return res;
      }
      static ToHex(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          const splitter = "";
          const res = [];
          const len = buf.length;
          for (let i = 0; i < len; i++) {
              const char = buf[i].toString(16).padStart(2, "0");
              res.push(char);
          }
          return res.join(splitter);
      }
      static FromHex(hexString) {
          let formatted = this.formatString(hexString);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isHex(formatted)) {
              throw new TypeError("Argument 'hexString' is not HEX encoded");
          }
          if (formatted.length % 2) {
              formatted = `0${formatted}`;
          }
          const res = new Uint8Array(formatted.length / 2);
          for (let i = 0; i < formatted.length; i = i + 2) {
              const c = formatted.slice(i, i + 2);
              res[i / 2] = parseInt(c, 16);
          }
          return res.buffer;
      }
      static ToUtf16String(buffer, littleEndian = false) {
          return Utf16Converter.toString(buffer, littleEndian);
      }
      static FromUtf16String(text, littleEndian = false) {
          return Utf16Converter.fromString(text, littleEndian);
      }
      static Base64Padding(base64) {
          const padCount = 4 - (base64.length % 4);
          if (padCount < 4) {
              for (let i = 0; i < padCount; i++) {
                  base64 += "=";
              }
          }
          return base64;
      }
      static formatString(data) {
          return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
      }
  }
  Convert.DEFAULT_UTF8_ENCODING = "utf8";

  function assign(target, ...sources) {
      const res = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
          const obj = arguments[i];
          for (const prop in obj) {
              res[prop] = obj[prop];
          }
      }
      return res;
  }
  function combine(...buf) {
      const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
      const res = new Uint8Array(totalByteLength);
      let currentPos = 0;
      buf.map((item) => new Uint8Array(item)).forEach((arr) => {
          for (const item2 of arr) {
              res[currentPos++] = item2;
          }
      });
      return res.buffer;
  }
  function isEqual(bytes1, bytes2) {
      if (!(bytes1 && bytes2)) {
          return false;
      }
      if (bytes1.byteLength !== bytes2.byteLength) {
          return false;
      }
      const b1 = new Uint8Array(bytes1);
      const b2 = new Uint8Array(bytes2);
      for (let i = 0; i < bytes1.byteLength; i++) {
          if (b1[i] !== b2[i]) {
              return false;
          }
      }
      return true;
  }

  exports.BufferSourceConverter = BufferSourceConverter;
  exports.Convert = Convert;
  exports.assign = assign;
  exports.combine = combine;
  exports.isEqual = isEqual;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ 15773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 12628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gq": () => (/* binding */ SocialNetworkEnum),
/* harmony export */   "VC": () => (/* binding */ SocialNetworkEnumToProfileDomain),
/* harmony export */   "qx": () => (/* binding */ EC_KeyCurveEnum)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
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

/***/ 48771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ encodeSignatureContainer),
/* harmony export */   "z": () => (/* binding */ parseSignatureContainer)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25209);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62435);




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

/***/ 31649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ parseAuthor),
/* harmony export */   "w": () => (/* binding */ get_v38PublicSharedCryptoKey)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25209);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62435);





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
    return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .OptionalResult.Some */ .E.Some(new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(net, id));
}


/***/ }),

/***/ 82719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ parse37)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25209);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48160);
/* harmony import */ var _payload_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12628);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62435);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28807);
/* harmony import */ var _SignatureContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48771);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31649);








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
                    pubKey = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1KeyRaw */ .Yj)(pubKey);
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

/***/ 91221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ parse38)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25209);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48160);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62435);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31649);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78144);
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
    const import_AES_GCM_256 = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .importAES */ .yj, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const decrypt = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .CheckedError.withErr */ .iD.withErr(_utils__WEBPACK_IMPORTED_MODULE_3__/* .decryptWithAES */ .PB, _types__WEBPACK_IMPORTED_MODULE_1__/* .CryptoException.InvalidCryptoKey */ .H3.InvalidCryptoKey);
    const jwk_in_u8arr = await decrypt(publicSharedKey.val, iv.val, encryptedKey.val);
    const jwk_in_text = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_u8arr, decodeTextCrypto);
    const jwk = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk_in_text, JSONParse);
    const aes = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .andThenAsync */ .ps)(jwk, import_AES_GCM_256);
    return aes;
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

/***/ 98273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ parse39)
/* harmony export */ });
/* harmony import */ var _version_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9002);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25209);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);
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

/***/ 9002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ parse40)
/* harmony export */ });
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25209);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62435);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78144);





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

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ getNetworkWorker)
/* harmony export */ });
/* unused harmony export definedSocialNetworkWorkersResolved */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57601);


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

/***/ 93731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap)
/* harmony export */ });
/* unused harmony export ReadonlyIdentifierMap */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57589);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60232);


let _iterator = Symbol.iterator;
/**
 * The IdentifierMap is like a built-in Map<Identifier, T>.
 *
 * Because Identifier is not a value-type record so to make it behave like a value-type,
 * please use this class instead of Map<Identifier, T>.
 */ class IdentifierMap {
    get(key) {
        return this.__raw_map__.get(key.toText());
    }
    set(key, data) {
        if (!key) return this;
        if (this.constructorName.length) {
            if (!this.constructorName.includes(key.constructor.name)) {
                console.warn(`IdentifierMap found a invalid write try which violates the constraint ${this.constructorName}`, key);
                return this;
            }
        }
        this.__raw_map__.set(key.toText(), data);
        return this;
    }
    clear() {
        this.__raw_map__.clear();
    }
    delete(data) {
        return this.__raw_map__.delete(data.toText());
    }
    _identifierFromString(key) {
        const identifier = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(key);
        if (identifier.err) {
            console.warn('IdentifierMap found a key which cannot be converted into Identifier: ', identifier.val.message);
        } else {
            if (this.constructorName.length === 0) return identifier.val;
            if (this.constructorName.includes(identifier.val.constructor.name)) return identifier.val;
            console.warn(`IdentifierMap found a key which is not compatible with it constraint(${this.constructorName}), ${key}`);
        }
        return null;
    }
    *entries() {
        const iter = this.__raw_map__.entries();
        for (const [key, data] of iter){
            const identifier = this._identifierFromString(key);
            if (!identifier) continue;
            yield [
                identifier,
                data
            ];
        }
    }
    forEach(callbackfn, thisArg) {
        this.__raw_map__.forEach((value, key)=>{
            const i = this._identifierFromString(key);
            if (!i) return;
            callbackfn.call(thisArg, value, i, this);
        });
    }
    has(key) {
        return this.__raw_map__.has(key.toText());
    }
    *keys() {
        const iter = this.__raw_map__.keys();
        for (const key of iter){
            const i = this._identifierFromString(key);
            if (i) yield i;
            else continue;
        }
    }
    get size() {
        return [
            ...this.keys()
        ].length;
    }
    *values() {
        for (const [k, v] of this.entries())yield v;
    }
    [_iterator]() {
        return this.entries();
    }
    /**
     *
     * @param __raw_map__ The origin data.
     * @param constructor The Identifier constructor. If provided, IdentifierMap will try to do a runtime check to make sure the identifier type is correct.
     */ constructor(__raw_map__, ...constructor){
        this.__raw_map__ = __raw_map__;
        this.constructorName = [];
        if (constructor) {
            this.constructorName = constructor.map((x)=>x.name
            );
        }
    }
}
Object.defineProperties(IdentifierMap.prototype, {
    [immer__WEBPACK_IMPORTED_MODULE_1__/* .immerable */ .sc]: {
        value: true,
        configurable: true,
        writable: true
    },
    [Symbol.toStringTag]: {
        value: 'IdentifierMap',
        configurable: true,
        writable: true
    }
});
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = (/* unused pure expression or super */ null && (IdentifierMap));


/***/ }),

/***/ 85562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CrossIsolationMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85646);
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

/***/ 27897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    NextIDPlatform["NextId"] = 'nextid';
    NextIDPlatform["Twitter"] = 'twitter';
    NextIDPlatform["Keybase"] = 'keybase';
    NextIDPlatform["Ethereum"] = 'ethereum';
    NextIDPlatform["GitHub"] = 'github';
})(NextIDPlatform || (NextIDPlatform = {}));


/***/ }),

/***/ 3494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ EMPTY_LIST)
/* harmony export */ });
/* unused harmony export EMPTY_OBJECT */
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});


/***/ }),

/***/ 33067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
var andThenAsync = __webpack_require__(65789);
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

/***/ 19854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    DashboardRoutes["Labs"] = '/labs';
})(DashboardRoutes || (DashboardRoutes = {}));


/***/ }),

/***/ 77907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ EnhanceableSite)
/* harmony export */ });
/* unused harmony export ExtensionSite */
var EnhanceableSite;
(function(EnhanceableSite) {
    EnhanceableSite["Localhost"] = 'localhost';
    EnhanceableSite["Twitter"] = 'twitter.com';
    EnhanceableSite["Facebook"] = 'facebook.com';
    EnhanceableSite["Minds"] = 'minds.com';
    EnhanceableSite["Instagram"] = 'instagram.com';
    EnhanceableSite["OpenSea"] = 'opensea.io';
})(EnhanceableSite || (EnhanceableSite = {}));
var ExtensionSite;
(function(ExtensionSite) {
    ExtensionSite["Dashboard"] = 'dashboard';
    ExtensionSite["Popup"] = 'popup';
})(ExtensionSite || (ExtensionSite = {}));


/***/ }),

/***/ 33821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 59041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ fromHex),
/* harmony export */   "NC": () => (/* binding */ toHex),
/* harmony export */   "mz": () => (/* binding */ fromBase64URL),
/* harmony export */   "s3": () => (/* binding */ toBase64),
/* harmony export */   "wi": () => (/* binding */ toBase64URL)
/* harmony export */ });
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51765);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_0__);

function fromBase64URL(x) {
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromBase64Url(x));
}
function toBase64URL(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64Url(x);
}
function toBase64(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToBase64(x);
}
function toHex(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.ToHex(x);
}
function fromHex(x) {
    if (x.startsWith('0x')) x = x.slice(2);
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__.Convert.FromHex(x));
}


/***/ }),

/***/ 68149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CH": () => (/* reexport */ ECKeyIdentifierFromJsonWebKey),
  "xb": () => (/* reexport */ compressSecp256k1KeyRaw),
  "SH": () => (/* reexport */ compressSecp256k1Point),
  "qX": () => (/* reexport */ decompressSecp256k1Key),
  "Yj": () => (/* reexport */ decompressSecp256k1KeyRaw),
  "pf": () => (/* reexport */ decompressSecp256k1Point),
  "dK": () => (/* reexport */ isSecp256k1Point),
  "Rx": () => (/* reexport */ isSecp256k1PrivateKey)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, compressSecp256k1Key

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(59041);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(57589);
;// CONCATENATED MODULE: ../shared-base/src/crypto/secp256k1.ts



// This module is only used in background.
// Loading tiny-secp256k1 will instantiate a WebAssembly module which is not allowed in the content script for unknown reason and fail the whole module graph.
// TODO: switch to holoflows-kit
let secp256k1;
const isContentScript = (()=>{
    try {
        if (location.protocol.startsWith('http')) return true;
    } catch  {}
    return false;
})();
if (!isContentScript) {
    if (true) {
        // Note: mobile (Android and iOS does not return a correct MINE type, therefore we can not use streaming to initialize the WASM module).
        WebAssembly.instantiateStreaming = undefined;
        WebAssembly.compileStreaming = undefined;
    }
    __webpack_require__.e(/* import() */ 6497).then(__webpack_require__.bind(__webpack_require__, 76497)).then((mod)=>secp256k1 = mod
    );
}
/**
 * Compress x & y into a single x
 */ function compressSecp256k1Point(x, y) {
    const xb = (0,convert/* fromBase64URL */.mz)(x);
    const yb = (0,convert/* fromBase64URL */.mz)(y);
    const point = new Uint8Array((0,esm/* concatArrayBuffer */.v_)(new Uint8Array([
        0x04
    ]), xb, yb));
    if (secp256k1.isPoint(point)) {
        return secp256k1.pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1!');
    }
}
/**
 * Decompress x into x & y
 */ function decompressSecp256k1Point(point) {
    if (!secp256k1.isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    const uncompressed = secp256k1.isPointCompressed(point) ? secp256k1.pointCompress(point, false) : point;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: (0,convert/* toBase64URL */.wi)(x),
        y: (0,convert/* toBase64URL */.wi)(y)
    };
}
function compressSecp256k1KeyRaw(point) {
    if (!secp256k1.isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (secp256k1.isPointCompressed(point)) return point;
    return secp256k1.pointCompress(point, true);
}
function decompressSecp256k1KeyRaw(point) {
    if (!secp256k1.isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (!secp256k1.isPointCompressed(point)) return point;
    return secp256k1.pointCompress(point, false);
}
function compressSecp256k1Key(key) {
    const arr = compressSecp256k1Point(key.x, key.y);
    return (0,esm/* encodeArrayBuffer */.ll)(arr);
}
function decompressSecp256k1Key(compressedPublic) {
    const arr = (0,esm/* decodeArrayBuffer */.xe)(compressedPublic);
    const key = decompressSecp256k1Point(new Uint8Array(arr));
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
function isSecp256k1Point(x) {
    return secp256k1.isPoint(x);
}
function isSecp256k1PrivateKey(d) {
    return secp256k1.isPrivate(d);
}
function ECKeyIdentifierFromJsonWebKey(key) {
    const x = compressSecp256k1Key(key);
    return new type/* ECKeyIdentifier */.ob('secp256k1', x);
}
async function ECKeyIdentifierFromCryptoKey(key) {
    const k = await crypto.subtle.exportKey('jwk', key);
    return ECKeyIdentifierFromJsonWebKey(k);
}

;// CONCATENATED MODULE: ../shared-base/src/crypto/index.ts





/***/ }),

/***/ 72610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 24723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fl": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "QL": () => (/* reexport safe */ _SharedContextProvider__WEBPACK_IMPORTED_MODULE_3__.Q),
/* harmony export */   "Xr": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.Xr),
/* harmony export */   "vU": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.vU),
/* harmony export */   "yQ": () => (/* reexport safe */ _evm__WEBPACK_IMPORTED_MODULE_0__.yQ)
/* harmony export */ });
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70070);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40915);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83938);
/* harmony import */ var _SharedContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74517);






/***/ }),

/***/ 78827:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ waitDocumentReadyState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);

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