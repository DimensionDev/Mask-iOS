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

/***/ 22445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 19586:
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

/***/ 62481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 94299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MaskMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);


const MaskMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
MaskMessages.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .serializer */ .GM;
Object.assign(globalThis, {
    MaskMessages
});


/***/ }),

/***/ 3976:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./shared-ui/locales_legacy/init.ts + 7 modules
var init = __webpack_require__(15011);
// EXTERNAL MODULE: ./src/setup.ui.0.ts
var setup_ui_0 = __webpack_require__(26861);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 5 modules
var social_network_adaptor = __webpack_require__(6277);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(57601);
;// CONCATENATED MODULE: ./src/setup.ui.ts
// Start SNS adaptor




const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/content-script.ts


if (shared/* Flags.mask_SDK_ready */.vU.mask_SDK_ready) {
    Promise.all(/* import() */[__webpack_require__.e(3693), __webpack_require__.e(1547)]).then(__webpack_require__.bind(__webpack_require__, 91547));
}


/***/ }),

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Services */
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

/***/ 57601:
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

/***/ 59389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export createNormalReactRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83230);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53242);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30232);





function createNormalReactRoot(jsx, container) {
    if (!container) container = document.getElementById('root') ?? void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return createRoot(container).render(/*#__PURE__*/ _jsx(StrictMode, {
        children: /*#__PURE__*/ _jsx(DisableShadowRootContext.Provider, {
            value: true,
            children: /*#__PURE__*/ _jsx(ErrorBoundary, {
                children: jsx
            })
        })
    }));
}


/***/ }),

/***/ 98541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 32393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ 44619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 1174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* binding */ relativeRouteOf),
/* harmony export */   "mZ": () => (/* reexport safe */ _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* harmony import */ var _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57602);
/* harmony import */ var _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19854);


function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


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

/***/ 40547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 16961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "Tv": () => (/* reexport */ ApplicationEntry/* ApplicationEntry */.T),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o)
});

// UNUSED EXPORTS: ChainIcon, TokenIconUI, useImageFailOver

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(18245);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(67632);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(67391);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(70552);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(86898);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 5 modules
var ERC20TokenList = __webpack_require__(87525);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(8524);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(69379);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(12188);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(99769);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(67406);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(6288);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(40547);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(98598);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(80759);
// EXTERNAL MODULE: ../shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(13111);
// EXTERNAL MODULE: ../shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(49016);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts

















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 44459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* binding */ OPENSEA_ID),
/* harmony export */   "I4": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING),
/* harmony export */   "QE": () => (/* binding */ TWITTER_ID),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "l9": () => (/* binding */ INSTAGRAM_ID),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports FACEBOOK_ID, MAX_WALLET_LIMIT */
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

"use strict";
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

/***/ 47745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H9": () => (/* reexport */ useMenu),
  "iD": () => (/* reexport */ useSnackbarCallback/* useSnackbarCallback */.i)
});

// UNUSED EXPORTS: useMenuConfig, useMenuContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Menu/Menu.js + 3 modules
var Menu = __webpack_require__(38090);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(52648);
;// CONCATENATED MODULE: ../shared/src/hooks/useMenu.tsx




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react.createContext)(Menu/* default */.Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [status, setOpen] = (0,react.useState)(false);
    const open = (0,react.useCallback)((anchorElOrEvent)=>{
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
    const update = (0,useUpdate/* default */.Z)();
    const close = (0,react.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements?.map((element, key)=>/*#__PURE__*/ (0,react.isValidElement)(element) ? /*#__PURE__*/ (0,react.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}

// EXTERNAL MODULE: ../shared/src/hooks/useSnackbarCallback.tsx
var useSnackbarCallback = __webpack_require__(26204);
;// CONCATENATED MODULE: ../shared/src/hooks/index.ts




/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BV": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.BV),
/* harmony export */   "B_": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "Df": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.Df),
/* harmony export */   "Fl": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.Fl),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "I4": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.I4),
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
/* harmony export */   "jq": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.jq),
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
/* harmony export */   "yQ": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.yQ),
/* harmony export */   "zr": () => (/* reexport safe */ _locales_languages__WEBPACK_IMPORTED_MODULE_5__.z)
/* harmony export */ });
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24723);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47745);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35070);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16961);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29889);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9555);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44459);









/***/ }),

/***/ 52558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ applyMaskColorVars),
/* harmony export */   "P": () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94919);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);



// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r , g , b  } = tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(x[key]).toRgb();
    return [
        r,
        g,
        b
    ].join(', ');
}
function CSSVariableInjectorCSS(scheme) {
    const ns = scheme === 'light' ? _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C : _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    const result = {};
    for(const key in ns){
        // --mask-name: val;
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result
    };
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C : _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    if (node === document.body) {
        const id = '#mask-style-var';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            document.head.appendChild(style);
        }
        applyMaskColorVars(document.getElementById(id), scheme);
        return;
    } else if (node instanceof HTMLStyleElement) {
        let rule = ':root, :host {\n';
        for(const key in ns){
            // --mask-name: val;
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}: ${ns[key]};\n`;
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for(const key in ns){
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key), ns[key]);
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}


/***/ }),

/***/ 82502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* reexport */ Appearance),
  "Hr": () => (/* reexport */ theme/* MaskDarkTheme */.H),
  "Cp": () => (/* reexport */ theme/* MaskLightTheme */.C),
  "R_": () => (/* reexport */ Provider/* MaskThemeProvider */.R)
});

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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "Cp": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Cp),
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
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1528":"npm-ns.stablelib.ed25519","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6813":"npm-ns.portto.sdk","6912":"npm.react-draggable","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 			3161: 0,
/******/ 			8100: 0
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,5161,5954,6878,6992,7358,8689], () => (__webpack_require__(3976)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,5161,5954,6878,6992,7358,8689], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;