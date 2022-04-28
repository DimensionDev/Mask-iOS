"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3742],{

/***/ 97037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kU": () => (/* binding */ baseX),
  "Dp": () => (/* binding */ from),
  "ET": () => (/* binding */ rfc4648)
});

// UNUSED EXPORTS: Codec, or

;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/vendor/base-x.js
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
/* harmony default export */ const base_x = (_brrp__multiformats_scope_baseX);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(35610);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base.js


class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      switch (text[0]) {
      case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
      default: {
          throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
        }
      }
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = base_x(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => (0,bytes.coerce)(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

/***/ }),

/***/ 18721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base32": () => (/* binding */ base32),
/* harmony export */   "base32hex": () => (/* binding */ base32hex),
/* harmony export */   "base32hexpad": () => (/* binding */ base32hexpad),
/* harmony export */   "base32hexpadupper": () => (/* binding */ base32hexpadupper),
/* harmony export */   "base32hexupper": () => (/* binding */ base32hexupper),
/* harmony export */   "base32pad": () => (/* binding */ base32pad),
/* harmony export */   "base32padupper": () => (/* binding */ base32padupper),
/* harmony export */   "base32upper": () => (/* binding */ base32upper),
/* harmony export */   "base32z": () => (/* binding */ base32z)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97037);

const base32 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .rfc4648 */ .ET)({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

/***/ }),

/***/ 19616:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base58btc": () => (/* binding */ base58btc),
/* harmony export */   "base58flickr": () => (/* binding */ base58flickr)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97037);

const base58btc = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__/* .baseX */ .kU)({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

/***/ }),

/***/ 19261:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CID": () => (/* reexport */ cid.CID),
  "bases": () => (/* binding */ bases),
  "bytes": () => (/* reexport */ bytes),
  "codecs": () => (/* binding */ codecs),
  "digest": () => (/* reexport */ hashes_digest),
  "hasher": () => (/* reexport */ hasher_namespaceObject),
  "hashes": () => (/* binding */ hashes),
  "varint": () => (/* reexport */ varint)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/identity.js
var identity_namespaceObject = {};
__webpack_require__.r(identity_namespaceObject);
__webpack_require__.d(identity_namespaceObject, {
  "identity": () => (identity)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base2.js
var base2_namespaceObject = {};
__webpack_require__.r(base2_namespaceObject);
__webpack_require__.d(base2_namespaceObject, {
  "base2": () => (base2)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base8.js
var base8_namespaceObject = {};
__webpack_require__.r(base8_namespaceObject);
__webpack_require__.d(base8_namespaceObject, {
  "base8": () => (base8)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base10.js
var base10_namespaceObject = {};
__webpack_require__.r(base10_namespaceObject);
__webpack_require__.d(base10_namespaceObject, {
  "base10": () => (base10)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base16.js
var base16_namespaceObject = {};
__webpack_require__.r(base16_namespaceObject);
__webpack_require__.d(base16_namespaceObject, {
  "base16": () => (base16),
  "base16upper": () => (base16upper)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base36.js
var base36_namespaceObject = {};
__webpack_require__.r(base36_namespaceObject);
__webpack_require__.d(base36_namespaceObject, {
  "base36": () => (base36),
  "base36upper": () => (base36upper)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base64.js
var base64_namespaceObject = {};
__webpack_require__.r(base64_namespaceObject);
__webpack_require__.d(base64_namespaceObject, {
  "base64": () => (base64),
  "base64pad": () => (base64pad),
  "base64url": () => (base64url),
  "base64urlpad": () => (base64urlpad)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/hasher.js
var hasher_namespaceObject = {};
__webpack_require__.r(hasher_namespaceObject);
__webpack_require__.d(hasher_namespaceObject, {
  "Hasher": () => (Hasher),
  "from": () => (from)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_namespaceObject = {};
__webpack_require__.r(sha2_browser_namespaceObject);
__webpack_require__.d(sha2_browser_namespaceObject, {
  "sha256": () => (sha256),
  "sha512": () => (sha512)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/codecs/raw.js
var raw_namespaceObject = {};
__webpack_require__.r(raw_namespaceObject);
__webpack_require__.d(raw_namespaceObject, {
  "code": () => (code),
  "decode": () => (decode),
  "encode": () => (encode),
  "name": () => (raw_name)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/codecs/json.js
var json_namespaceObject = {};
__webpack_require__.r(json_namespaceObject);
__webpack_require__.d(json_namespaceObject, {
  "code": () => (json_code),
  "decode": () => (json_decode),
  "encode": () => (json_encode),
  "name": () => (json_name)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base.js + 1 modules
var base = __webpack_require__(97037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bytes.js
var bytes = __webpack_require__(35610);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/identity.js


const identity = (0,base/* from */.Dp)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,bytes.toString)(buf),
  decode: str => (0,bytes.fromString)(str)
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base2.js

const base2 = (0,base/* rfc4648 */.ET)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base8.js

const base8 = (0,base/* rfc4648 */.ET)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base10.js

const base10 = (0,base/* baseX */.kU)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base16.js

const base16 = (0,base/* rfc4648 */.ET)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,base/* rfc4648 */.ET)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base32.js
var base32 = __webpack_require__(18721);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base36.js

const base36 = (0,base/* baseX */.kU)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,base/* baseX */.kU)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base58.js
var base58 = __webpack_require__(19616);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/bases/base64.js

const base64 = (0,base/* rfc4648 */.ET)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,base/* rfc4648 */.ET)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,base/* rfc4648 */.ET)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,base/* rfc4648 */.ET)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/digest.js
var hashes_digest = __webpack_require__(42640);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/hasher.js

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? hashes_digest.create(this.code, result) : result.then(digest => hashes_digest.create(this.code, digest));
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/sha2-browser.js

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = from({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = from({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/hashes/identity.js
var hashes_identity = __webpack_require__(9742);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/codecs/raw.js

const raw_name = 'raw';
const code = 85;
const encode = node => (0,bytes.coerce)(node);
const decode = data => (0,bytes.coerce)(data);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/codecs/json.js
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const json_name = 'json';
const json_code = 512;
const json_encode = node => textEncoder.encode(JSON.stringify(node));
const json_decode = data => JSON.parse(textDecoder.decode(data));
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/cid.js
var cid = __webpack_require__(2758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/varint.js + 1 modules
var varint = __webpack_require__(49124);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/index.js






;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/basics.js














const bases = {
  ...identity_namespaceObject,
  ...base2_namespaceObject,
  ...base8_namespaceObject,
  ...base10_namespaceObject,
  ...base16_namespaceObject,
  ...base32,
  ...base36_namespaceObject,
  ...base58,
  ...base64_namespaceObject
};
const hashes = {
  ...sha2_browser_namespaceObject,
  ...hashes_identity
};
const codecs = {
  raw: raw_namespaceObject,
  json: json_namespaceObject
};


/***/ }),

/***/ 35610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coerce": () => (/* binding */ coerce),
/* harmony export */   "empty": () => (/* binding */ empty),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "isBinary": () => (/* binding */ isBinary),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const toString = b => new TextDecoder().decode(b);


/***/ }),

/***/ 2758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* binding */ CID)
/* harmony export */ });
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49124);
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42640);
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19616);
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18721);
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35610);





class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest} = this.multihash;
        const multihash = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.create(code, digest);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.equals(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.decode(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_4__.coerce)(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = _varint_js__WEBPACK_IMPORTED_MODULE_0__.decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(`${ _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix }${ source }`)
      ];
    }
  case _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix: {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix: {
      const decoder = base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32;
      return [
        _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(version);
  const hashOffset = codeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(version, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

/***/ }),

/***/ 42640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Digest": () => (/* binding */ Digest),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35610);
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49124);


const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(code);
  const digestOffset = sizeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(code, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(multihash);
  const [code, sizeOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes);
  const [size, digestOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.equals)(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}

/***/ }),

/***/ 9742:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35610);
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42640);


const code = 0;
const name = 'identity';
const encode = _bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce;
const digest = input => _digest_js__WEBPACK_IMPORTED_MODULE_1__.create(code, encode(input));
const identity = {
  code,
  name,
  encode,
  digest
};

/***/ }),

/***/ 49124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "decode": () => (/* binding */ varint_decode),
  "encodeTo": () => (/* binding */ encodeTo),
  "encodingLength": () => (/* binding */ encodingLength)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var varint_length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: varint_length
};
var _brrp_varint = varint;
/* harmony default export */ const vendor_varint = (_brrp_varint);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/varint.js

const varint_decode = data => {
  const code = vendor_varint.decode(data);
  return [
    code,
    vendor_varint.decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  vendor_varint.encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return vendor_varint.encodingLength(int);
};

/***/ })

}]);