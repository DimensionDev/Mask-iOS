/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ 51132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var ts_results_esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../encryption/src/payload/index.ts + 3 modules
var payload = __webpack_require__(37000);
// EXTERNAL MODULE: ../encryption/src/utils/index.ts + 1 modules
var utils = __webpack_require__(43925);
// EXTERNAL MODULE: ../encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(1921);
// EXTERNAL MODULE: ../encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(78303);
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
        return yield* decryptWithPostAESKey(version, AESKey.val.key, iv.val, encrypted, options.onDecrypted);
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
            const possiblePostKey = await (0,src/* andThenAsync */.ps)((0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, derivedKey, derivedKeyNewIV, encryptedPostKey), postKeyDecoder);
            if (possiblePostKey.err) continue;
            const decrypted = await (0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, possiblePostKey.val, iv, encrypted);
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
    const { err , val  } = await (0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, postAESKey, iv, encrypted);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.DecryptFailed, val);
    return yield* parseTypedMessage(version, val, report);
}
async function* parseTypedMessage(version, raw, report) {
    const { err , val  } = version === -37 ? (0,base/* decodeTypedMessageFromDocument */.Ab)(raw) : (0,base/* decodeTypedMessageV38ToV40Format */.WR)(raw, version);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadDecryptedButTypedMessageBroken, val);
    try {
        report === null || report === void 0 ? void 0 : report(val);
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
        return (await utils/* importAESFromJWK.AES_GCM_256 */.Bs.AES_GCM_256(aes_jwk)).unwrap();
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
var Encryption = __webpack_require__(25076);
// EXTERNAL MODULE: ../encryption/src/encryption/AppendEncryption.ts
var AppendEncryption = __webpack_require__(76830);
;// CONCATENATED MODULE: ../encryption/src/encryption/index.ts





/***/ }),

/***/ 5546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85863);






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
        ...preset === null || preset === void 0 ? void 0 : preset.options,
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

/***/ 20392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ym": () => (/* reexport */ TwitterDecoder),
  "EK": () => (/* reexport */ __TwitterEncoder),
  "FW": () => (/* binding */ socialNetworkDecoder),
  "zl": () => (/* binding */ socialNetworkEncoder)
});

// EXTERNAL MODULE: ../encryption/src/payload/types.ts
var types = __webpack_require__(40133);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
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

/***/ 28331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48427);
/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90890);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35119);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95367);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
/* harmony import */ var _masknet_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23730);





// @ts-ignore in case circle dependency make typescript complains

i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].use */ .ZP.use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z).init({
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    fallbackLng: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .fallbackLng */ .A9,
    defaultNS: 'mask',
    nonExplicitSupportedLngs: true,
    detection: {
        order: [
            'navigator'
        ]
    }
});
(0,_locales_languages__WEBPACK_IMPORTED_MODULE_2__/* .addMaskI18N */ .U)(i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
(0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .addSharedI18N */ .zr)(i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_5__/* .addDashboardI18N */ .Gp)(i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP);
// Deprecates. Prefer useMaskI18n()
const i18n = {
    t: (key, options)=>{
        return i18next__WEBPACK_IMPORTED_MODULE_0__/* ["default"].t */ .ZP.t(key, options);
    }
};


/***/ }),

/***/ 17913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ isAndroidApp),
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony export is_iOSApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp =  true && "safari" === 'firefox';
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    isolated_dashboard_bridge_enabled: false,
    mask_SDK_ready: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    using_ShadowDOM_attach_mode: 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_enabled: webOnly,
    injected_web3_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    // #endregion
    EIP1559_enabled: true,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    flow_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    nft_airdrop_enabled: false,
    post_actions_enabled: false,
    next_id_tip_enabled: false,
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

/***/ 70609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.S_),
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers_download__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers_download__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12814);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17913);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55577);
/* harmony import */ var _helpers_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17703);






/***/ }),

/***/ 55577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12814);


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
    Plugin: createPersistentKVStorage('plugin', {})
};


/***/ }),

/***/ 15096:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(55577);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/setup.ui.0.ts


const memory = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return service/* default.Settings.__kv_storage_read__ */.ZP.Settings.__kv_storage_read__('memory', ...args);
    },
    async setValue (...args) {
        await service/* default.Settings.__kv_storage_write__ */.ZP.Settings.__kv_storage_write__('memory', ...args);
    }
};
const indexedDB = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return service/* default.Settings.__kv_storage_read__ */.ZP.Settings.__kv_storage_read__('indexedDB', ...args);
    },
    async setValue (...args) {
        await service/* default.Settings.__kv_storage_write__ */.ZP.Settings.__kv_storage_write__('indexedDB', ...args);
    }
};
(0,kv_storage/* setupMaskKVStorageBackend */.$e)(indexedDB, memory);

// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 5 modules
var social_network_adaptor = __webpack_require__(92050);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(86911);
;// CONCATENATED MODULE: ./src/setup.ui.ts
// Start SNS adaptor



const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/content-script.ts


if (shared/* Flags.mask_SDK_ready */.vU.mask_SDK_ready) {
    Promise.all(/* import() */[__webpack_require__.e(3693), __webpack_require__.e(6406)]).then(__webpack_require__.bind(__webpack_require__, 6406));
}


/***/ }),

/***/ 45925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Services */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19245);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.



const SERVICE_HMR_EVENT = 'service-hmr';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.WebExtensionMessage({
    domain: 'services'
});
const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    sendLocalStack: true,
    type: 'pretty',
    requestReplay: "production" === 'development'
};
const Services = {
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2943), __webpack_require__.e(6768), __webpack_require__.e(993)]).then(__webpack_require__.bind(__webpack_require__, 50993))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(597), __webpack_require__.e(9318)]).then(__webpack_require__.bind(__webpack_require__, 55601))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(597), __webpack_require__.e(9318)]).then(__webpack_require__.bind(__webpack_require__, 19470))
    , 'Welcome'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 841).then(__webpack_require__.bind(__webpack_require__, 90841))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(3291)]).then(__webpack_require__.bind(__webpack_require__, 9338))
    , 'Ethereum'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 2516).then(__webpack_require__.bind(__webpack_require__, 62516))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(597), __webpack_require__.e(9318)]).then(__webpack_require__.bind(__webpack_require__, 27689))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 1400).then(__webpack_require__.bind(__webpack_require__, 61400))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(6768), __webpack_require__.e(3222)]).then(__webpack_require__.bind(__webpack_require__, 63222))
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

/***/ 73336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createPluginHost)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80426);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69260);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2214);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28331);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45925);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
// All plugin manager need to call createPluginHost so let's register plugins implicitly.


// Do not export from '../utils/' to prevent initialization failure




function createPluginHost(signal, createContext) {
    const minimalMode = {
        isEnabled: _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled,
        events: new _servie_events__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5()
    };
    const removeListener = _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.pluginMinimalModeChanged.on */ .q.events.pluginMinimalModeChanged.on(([id, val])=>minimalMode.events.emit(val ? 'enabled' : 'disabled', id)
    );
    signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', removeListener);
    return {
        signal,
        minimalMode,
        addI18NResource (plugin, resource) {
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createI18NBundle */ .C9)(plugin, resource)(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        },
        createContext
    };
}


/***/ }),

/***/ 40543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "XO": () => (/* binding */ facebookWorkerBase),
/* harmony export */   "qv": () => (/* binding */ facebookBase)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57614);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);


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

/***/ 94869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase),
/* harmony export */   "x": () => (/* binding */ instagramWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57614);

const id = 'instagram.com';
const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: id,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(id);
    }
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: id
};


/***/ }),

/***/ 74926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "x": () => (/* binding */ twitterWorkerBase)
/* harmony export */ });
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57614);

const id = 'twitter.com';
const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: id,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === id;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 23003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork),
/* harmony export */   "T": () => (/* binding */ getCurrentIdentifier)
/* harmony export */ });
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74926);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40543);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94869);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63151);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61751);





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
    var ref;
    const current = (ref = _social_network__WEBPACK_IMPORTED_MODULE_4__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.value;
    return _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value.find */ .EJ.profiles.value.find((i)=>{
        return i.identifier.equals(current === null || current === void 0 ? void 0 : current.identifier);
    }) || _social_network__WEBPACK_IMPORTED_MODULE_4__/* .globalUIState.profiles.value[0] */ .EJ.profiles.value[0];
};


/***/ }),

/***/ 86911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "Ps": () => (/* binding */ activateSocialNetworkUI),
/* harmony export */   "tr": () => (/* binding */ defineSocialNetworkWorker),
/* harmony export */   "zq": () => (/* binding */ definedSocialNetworkWorkers)
/* harmony export */ });
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3787)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
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

/***/ 63151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.$q),
/* harmony export */   "Ar": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.Ar),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.CB),
/* harmony export */   "Cp": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_9__.C),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.D4),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.EK),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.FF),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.H9),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.Hq),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.I4),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_6__.J),
/* harmony export */   "K1": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.K1),
/* harmony export */   "KP": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.KP),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Ne),
/* harmony export */   "Nw": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_9__.N),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.Pz),
/* harmony export */   "Rc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Rc),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.Rm),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Sc),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.V2),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.V8),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "Zn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Zn),
/* harmony export */   "_W": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__._W),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "as": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.bD),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.eE),
/* harmony export */   "eS": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.eS),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.eT),
/* harmony export */   "fI": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.fI),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fg),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fo),
/* harmony export */   "hn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.hn),
/* harmony export */   "i1": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.i1),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.i8),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.iv),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.oQ),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "rB": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.rB),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.x4),
/* harmony export */   "x5": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.x5),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27361);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22106);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38513);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(110);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91921);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74724);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60567);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45337);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27900);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57466);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79594);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(24799);















/***/ }),

/***/ 24799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rm": () => (/* binding */ getRegisteredWeb3Networks),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "fo": () => (/* binding */ registerPlugin),
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "i8": () => (/* binding */ getRegisteredWeb3Providers)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77184);

const __registered = new Map();
const registeredPlugins = {
    [Symbol.iterator]: ()=>__registered.values()
};
const registeredPluginIDs = {
    [Symbol.iterator]: ()=>__registered.keys()
};
function getPluginDefine(id) {
    return __registered.get(id);
}
function registerPlugin(def) {
    var _cache, ref, _cache1, ref1;
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
    (ref = (_cache = getRegisteredWeb3Networks_memo.cache).clear) === null || ref === void 0 ? void 0 : ref.call(_cache);
    (ref1 = (_cache1 = getRegisteredWeb3Providers_memo.cache).clear) === null || ref1 === void 0 ? void 0 : ref1.call(_cache1);
}
function getRegisteredPluginsSort_EVM_Ahead() {
    return [
        ...__registered.values()
    ].sort(sort_EVM_ahead);
}
function sort_EVM_ahead(a, b) {
    if (a.ID.includes('evm')) return -1;
    if (b.ID.includes('evm')) return 1;
    return 0;
}
const getRegisteredWeb3Networks_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Networks || []
    );
});
const getRegisteredWeb3Providers_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Providers || []
    );
});
function getRegisteredWeb3Networks() {
    return getRegisteredWeb3Networks_memo();
}
function getRegisteredWeb3Providers() {
    return getRegisteredWeb3Providers_memo();
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        try {
            if ( true && def.enableRequirement.target !== 'stable') {
                return false;
            } else if (false) {}
        } catch  {
            // process.env.channel might not be possible in each build environment.
            if (def.enableRequirement.target !== 'stable') return false;
        }
    }
    return true;
}


/***/ }),

/***/ 60567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* unused harmony export startPluginWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35783);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 21116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap)
/* harmony export */ });
/* unused harmony export ReadonlyIdentifierMap */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8785);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60232);


var _key;
let tmp = (_key = immer__WEBPACK_IMPORTED_MODULE_1__/* .immerable */ .sc, Symbol.iterator);
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
    [tmp]() {
        return this.entries();
    }
    /**
     *
     * @param __raw_map__ The origin data.
     * @param constructor The Identifier constructor. If provided, IdentifierMap will try to do a runtime check to make sure the identifier type is correct.
     */ constructor(__raw_map__, ...constructor){
        this.__raw_map__ = __raw_map__;
        this[_key] = true;
        this.constructorName = [];
        if (constructor) {
            this.constructorName = constructor.map((x)=>x.name
            );
        }
    }
}
IdentifierMap.prototype[Symbol.toStringTag] = 'IdentifierMap';
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = (/* unused pure expression or super */ null && (IdentifierMap));


/***/ }),

/***/ 9797:
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

/***/ 66960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iD": () => (/* reexport */ CheckedError),
  "E": () => (/* reexport */ OptionalResult),
  "ps": () => (/* reexport */ andThenAsync/* andThenAsync */.p)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
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
var andThenAsync = __webpack_require__(90549);
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

/***/ 26637:
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

/***/ 88672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* binding */ relativeRouteOf),
/* harmony export */   "mZ": () => (/* reexport safe */ _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80847);
/* harmony import */ var _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26637);


function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


/***/ }),

/***/ 73655:
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

/***/ 50685:
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

/***/ 27013:
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

/***/ 13880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CH": () => (/* reexport */ ECKeyIdentifierFromJsonWebKey),
  "SH": () => (/* reexport */ compressSecp256k1Point),
  "qX": () => (/* reexport */ decompressSecp256k1Key),
  "pf": () => (/* reexport */ decompressSecp256k1Point),
  "dK": () => (/* reexport */ isSecp256k1Point),
  "Rx": () => (/* reexport */ isSecp256k1PrivateKey)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, compressSecp256k1Key

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(27013);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(8785);
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
        4
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

/***/ 88970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53482);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42278);




/***/ }),

/***/ 97977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(91041);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(42557);
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

/***/ 72664:
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

/***/ 79958:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ waitDocumentReadyState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);

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

/***/ }),

/***/ 31637:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
/* harmony export */   "openDB": () => (/* binding */ openDB),
/* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




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
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1528":"npm-ns.stablelib.ed25519","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2299":"npm.tweetnacl","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2735":"npm-ns.solana.web3.js","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","4557":"npm.superstruct","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5687":"npm-ns.solana.buffer-layout","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6813":"npm-ns.portto.sdk","6912":"npm.react-draggable","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7070":"npm.regenerator-runtime","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9566":"npm.rpc-websockets","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
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
/******/ 		__webpack_require__.j = 3161;
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
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
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
/******/ 			3161: 0,
/******/ 			5122: 0
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,5229,6316,3693,3758,4570,7822,7856,2118,400,3453,5132,1440,12,2619,5838,3142,5105,3846,2162,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,4278,9197,8000,4960,102,253,572,8547,8145,5313,551,2908,2088,3981,1696,3638,1555,516,2974,3832,9141,159,6067,234,9737,79,4590,2891,8393,5784,4586,9855,4029,433,9697,3619,2222,9580,7595,6669,1014,6612,4205,7854], () => (__webpack_require__(15096)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,5229,6316,3693,3758,4570,7822,7856,2118,400,3453,5132,1440,12,2619,5838,3142,5105,3846,2162,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,4278,9197,8000,4960,102,253,572,8547,8145,5313,551,2908,2088,3981,1696,3638,1555,516,2974,3832,9141,159,6067,234,9737,79,4590,2891,8393,5784,4586,9855,4029,433,9697,3619,2222,9580,7595,6669,1014,6612,4205,7854], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;