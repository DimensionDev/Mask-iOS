(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[665],{

/***/ 26446:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 47164:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 28255:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var __webpack_provided_process_dot_nextTick = __webpack_require__(28255);


var ensureCallable = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

var byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, currentQueue, i = 0;
	new Observer(function () {
		var callback;
		if (!queue) {
			if (!currentQueue) return;
			queue = currentQueue;
		} else if (currentQueue) {
			queue = currentQueue.concat(queue);
		}
		currentQueue = queue;
		queue = null;
		if (typeof currentQueue === 'function') {
			callback = currentQueue;
			currentQueue = null;
			callback();
			return;
		}
		node.data = (i = ++i % 2); // Invoke other batch, to handle leftover callbacks in case of crash
		while (currentQueue) {
			callback = currentQueue.shift();
			if (!currentQueue.length) currentQueue = null;
			callback();
		}
	}).observe(node, { characterData: true });
	return function (fn) {
		ensureCallable(fn);
		if (queue) {
			if (typeof queue === 'function') queue = [queue, fn];
			else queue.push(fn);
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

module.exports = (function () {
	// Node.js
	if ((typeof process === 'object') && process && (typeof __webpack_provided_process_dot_nextTick === 'function')) {
		return __webpack_provided_process_dot_nextTick;
	}

	// queueMicrotask
	if (typeof queueMicrotask === "function") {
		return function (cb) { queueMicrotask(ensureCallable(cb)); };
	}

	// MutationObserver
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') return byObserver(MutationObserver);
		if (typeof WebKitMutationObserver === 'function') return byObserver(WebKitMutationObserver);
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(ensureCallable(cb)); };
	}

	// Wide available standard
	if ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {
		return function (cb) { setTimeout(ensureCallable(cb), 0); };
	}

	return null;
}());


/***/ }),

/***/ 35850:
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
          if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
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

/***/ 24366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ Identifier),
/* harmony export */   "WO": () => (/* binding */ ProfileIdentifier),
/* harmony export */   "xI": () => (/* binding */ GroupIdentifier),
/* harmony export */   "_P": () => (/* binding */ PostIdentifier),
/* harmony export */   "bb": () => (/* binding */ PostIVIdentifier),
/* harmony export */   "ob": () => (/* binding */ ECKeyIdentifier)
/* harmony export */ });
/* unused harmony export PersonaIdentifier */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);

/**
 * @internal symbol that used to construct this type from the Identifier
 */ const $fromString = Symbol();
const fromStringCache = new Map();
const fromString = (id, constructor)=>{
    let result = null;
    // the third overload
    if (id instanceof Identifier) result = id;
    else {
        const [type, ...rest] = id.split(':');
        // the second overload
        if (fromStringCache.has(id)) result = fromStringCache.get(id);
        else if (type === 'person') result = ProfileIdentifier[$fromString](rest.join(':'));
        else if (type === 'group') result = GroupIdentifier[$fromString](rest.join(':'));
        else if (type === 'post') result = PostIdentifier[$fromString](rest.join(':'));
        else if (type === 'post_iv') result = PostIVIdentifier[$fromString](rest.join(':'));
        else if (type === 'ec_key') result = ECKeyIdentifier[$fromString](rest.join(':'));
        else return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new TypeError('Unreachable case:' + type));
        fromStringCache.set(id, result);
    }
    const err = (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(new TypeError(`Can't cast to Identifier. Expected: ${(constructor === null || constructor === void 0 ? void 0 : constructor.name) || 'Any Identifier'}, Try to convert from string: ${id}`));
    if (!constructor) return result ? (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(result) : err;
    else if (result instanceof constructor) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(result);
    else return err;
};
class Identifier {
    static equals(a, b) {
        return !!(a === null || a === void 0 ? void 0 : a.equals(b));
    }
    equals(other) {
        if (!other) return false;
        return this === other || this.toText() === other.toText();
    }
    static IdentifiersToString(a, isOrderImportant = false) {
        const ax = a.map((x)=>x.toText()
        );
        if (!isOrderImportant) {
            ax.sort();
        }
        return ax.join(',');
    }
}
Identifier.fromString = fromString;
var tmp = $fromString;
class ProfileIdentifier extends Identifier {
    static getUserName(x) {
        if (typeof x === 'string') {
            if ([
                '',
                '$unknown'
            ].includes(x)) return null;
            return x;
        } else {
            if (x.isUnknown) return null;
            return x.userId;
        }
    }
    get isUnknown() {
        return this.equals(ProfileIdentifier.unknown);
    }
    toText() {
        return `person:${this.network}/${this.userId}`;
    }
    friendlyToText() {
        return `${this.userId}@${this.network}`;
    }
    static [tmp](str) {
        const [network, userId] = str.split('/');
        if (!network || !userId) return null;
        return new ProfileIdentifier(network, userId);
    }
    /**
     * @param network - Network belongs to
     * @param userId - User ID
     */ constructor(network, userId){
        super();
        this.network = network;
        this.userId = userId;
        noSlash(network);
        noSlash(userId);
    }
}
ProfileIdentifier.unknown = new ProfileIdentifier('localhost', '$unknown');
var tmp1 = $fromString;
class GroupIdentifier extends Identifier {
    static getFriendsGroupIdentifier(who, groupId) {
        return new GroupIdentifier(who.network, who.userId, groupId);
    }
    get ownerIdentifier() {
        if (this.virtualGroupOwner === null) return null;
        return new ProfileIdentifier(this.network, this.virtualGroupOwner);
    }
    toText() {
        return 'group:' + [
            this.network,
            this.virtualGroupOwner,
            this.groupID
        ].join('/');
    }
    get isReal() {
        return !this.virtualGroupOwner;
    }
    get isVirtual() {
        return !!this.virtualGroupOwner;
    }
    static [tmp1](str) {
        const [network, belongs, groupID] = str.split('/');
        if (!network || !groupID) return null;
        return new GroupIdentifier(network, belongs, groupID);
    }
    constructor(network, virtualGroupOwner, groupID){
        super();
        this.network = network;
        this.virtualGroupOwner = virtualGroupOwner;
        this.groupID = groupID;
        noSlash(network);
        noSlash(groupID);
        if (virtualGroupOwner === '') this.virtualGroupOwner = null;
    }
}
var tmp2 = $fromString;
class PostIdentifier extends Identifier {
    get isUnknown() {
        return this.equals(PostIdentifier.unknown);
    }
    toText() {
        return `post:${this.postId}/${this.identifier.toText()}`;
    }
    static [tmp2](str) {
        const [postId, ...identifier] = str.split('/');
        const id = Identifier.fromString(identifier.join('/'));
        if (id.err || !postId) return null;
        return new PostIdentifier(id.val, postId);
    }
    /**
     * If identifier is a PostIdentifier, that means this post is bound with other post in some kind
     * e.g. a comment.
     */ constructor(identifier, postId){
        super();
        this.identifier = identifier;
        this.postId = postId;
        noSlash(postId);
    }
}
PostIdentifier.unknown = new PostIdentifier(ProfileIdentifier.unknown, '$unknown');
var tmp3 = $fromString;
class PostIVIdentifier extends Identifier {
    toText() {
        return `post_iv:${this.network}/${this.postIV.replace(/\//g, '|')}`;
    }
    static [tmp3](str) {
        const [network, iv] = str.split('/');
        if (!network || !iv) return null;
        return new PostIVIdentifier(network, iv);
    }
    constructor(network, postIV){
        super();
        this.network = network;
        this.postIV = postIV;
    }
}
var tmp4 = $fromString;
/**
 * This class identify the point on an EC curve.
 * ec_key:secp256k1/CompressedPoint
 */ class ECKeyIdentifier extends Identifier {
    toText() {
        var _encodedCompressedKey;
        const normalized = (_encodedCompressedKey = this.encodedCompressedKey) !== null && _encodedCompressedKey !== void 0 ? _encodedCompressedKey : this.compressedPoint.replace(/\//g, '|');
        return `ec_key:${this.curve}/${normalized}`;
    }
    static [tmp4](str) {
        const [curve, point] = str.split('/');
        if (curve !== 'secp256k1') return null;
        return new ECKeyIdentifier(curve, point);
    }
    constructor(curve, compressedPoint){
        super();
        this.curve = curve;
        this.compressedPoint = compressedPoint;
        this.type = 'ec_key';
    }
}
// eslint-disable-next-line no-redeclare
const PersonaIdentifier = [
    ECKeyIdentifier
];
/**
 * Because "/" is used to split parts in identifier
 * we should reject the "/"
 *
 * If you want to use it, you must first convert to something other
 */ function noSlash(str) {
    if (!str) return;
    if (str.includes('/')) throw new TypeError('Cannot contain / in a part of identifier');
}


/***/ }),

/***/ 40764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export PayloadVersions */
var PayloadVersions;
(function(PayloadVersions) {
    PayloadVersions[PayloadVersions['2/4'] = -40] = '2/4';
    PayloadVersions[PayloadVersions['3/4'] = -39] = '3/4';
    PayloadVersions[PayloadVersions['4/4'] = -38] = '4/4';
})(PayloadVersions || (PayloadVersions = {}));


/***/ }),

/***/ 86563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export decodeTypedMessageFromDocument */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73535);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62033);




const HEAD = '[@masknet/shared-base] TypedMessage: ';
function decodeTypedMessageFromDocument(bin) {
    return Result.wrap(()=>{
        const doc = decode(bin);
        if (!Array.isArray(doc)) throw new Error(`${HEAD}Invalid document`);
        const [docVer, message] = doc;
        if (typeof docVer !== 'number') throw new Error(`${HEAD}Invalid document`);
        if (docVer !== 0) throw new Error(`${HEAD}Unknown document version`);
        const result = decodeTypedMessage(message);
        fixU8Array(result);
        return result;
    });
}
function decodeTypedMessage(tm) {
    const [type] = tm;
    if (typeof type !== 'string' && typeof type !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (type === TypedMessageTypeEnum.Text) return decodeTypedMessageText(tm);
    if (type === TypedMessageTypeEnum.Tuple) return decodeTypedMessageTuple(tm);
    return makeTypedMessageUnknown(tm, decodeMetadata(tm[1]));
}
function decodeTypedMessageText([, version, meta, text, format]) {
    assertNumber(version);
    assertString(text);
    return makeTypedMessageText(text, decodeMetadata(meta));
}
function decodeTypedMessageTuple([, version, meta, items]) {
    assertNumber(version);
    if (!Array.isArray(items)) throw new TypeError(`${HEAD}Invalid TypedMessageTuple`);
    return makeTypedMessageTuple(items.map(decodeTypedMessage), decodeMetadata(meta));
}
function decodeMetadata(meta) {
    if (meta === null) return undefined;
    if (typeof meta !== 'object') throw new TypeError(`${HEAD}Invalid TypedMessage`);
    if (Object.getPrototypeOf(meta) !== Object.prototype) throw new TypeError(`${HEAD}Invalid TypedMessage`);
    return meta;
}
function assertNumber(x) {
    if (typeof x !== 'number') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
function assertString(x) {
    if (typeof x !== 'string') throw new TypeError(`${HEAD}Invalid TypedMessage`);
}
// Detach Uint8Array from it's underlying buffer
function fixU8Array(obj) {
    // for Array and object
    if (typeof obj === 'object' && obj !== null) {
        for(const key in obj){
            const val = obj[key];
            if (val instanceof Uint8Array) obj[key] = val.slice();
            else fixU8Array(val);
        }
    }
}


/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export encodeTypedMessageToDocument */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73535);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62033);



const HEAD = '[@masknet/shared-base] TypedMessage: ';
function encodeTypedMessageToDocument(tm) {
    const doc = [
        0,
        encodeTypedMessage(tm)
    ];
    return encode(doc);
}
function encodeTypedMessage(tm) {
    if (tm.serializable === false) {
        if (tm.alt) return encodeTypedMessage(tm.alt);
        throw new TypeError(`${HEAD}TypedMessage ${tm.type} does not support serialization.`);
    }
    if (isTypedMessageText(tm)) return encodeTypedMessageText(tm);
    if (isTypedMessageTupleSerializable(tm)) return encodeTypedMessageTuple(tm);
    throw new TypeError(`${HEAD}Unsupported TypedMessage ${tm.type} to be serialized.`);
}
function encodeTypedMessageText(tm) {
    // TODO: TextFormat
    return [
        TypedMessageTypeEnum.Text,
        tm.version,
        encodeMeta(tm),
        tm.content
    ];
}
function encodeTypedMessageTuple(tm) {
    return [
        TypedMessageTypeEnum.Tuple,
        tm.version,
        encodeMeta(tm),
        tm.items.map(encodeTypedMessage)
    ];
}
function encodeMeta(tm) {
    if (!tm.meta) return null;
    const record = {
        __proto__: null
    };
    for (const [key, val] of tm.meta){
        if (typeof key !== 'string') continue;
        if (typeof val === 'undefined') continue;
        try {
            record[key] = collectValue(val);
        } catch (err) {
            console.warn(`${HEAD}key ${key} is dropped due to the error`, err);
        }
    }
    return record;
}
function collectValue(val) {
    try {
        const type = typeof val;
        if (val === undefined) {
            console.warn(`${HEAD}undefined converted to null.`);
            return null;
        }
        if (type === 'number' || val === null || type === 'boolean' || type === 'string') return val;
        if (type === 'bigint' || type === 'function' || type === 'symbol') {
            throw new TypeError(`${HEAD}Unsupported type ${type}`);
        }
        if (val instanceof Uint8Array) return new Uint8Array(val);
        if (val instanceof ArrayBuffer) {
            throw new TypeError(`${HEAD}ArrayBuffer must be Uint8Array.`);
        }
        if (Array.isArray(val)) return Array.from(val).map(collectValue);
        const proto = Object.getPrototypeOf(val);
        if (proto !== Object.prototype && proto !== null) {
            throw new TypeError(`${HEAD}unsupported value with a non trivial prototype.`);
        }
        const result = {};
        for(const key in val){
            if (typeof key !== 'string') throw new TypeError(`${HEAD}Unsupported type symbol.`);
            const v = val[key];
            result[key] = collectValue(v);
        }
        return result;
    } catch (err) {
        console.warn('[@masknet/shared-base] TypedMessage: When converting value', val, ', an error occurred', err);
        throw err;
    }
}


/***/ }),

/***/ 62033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export TypedMessageTypeEnum */
var TypedMessageTypeEnum;
(function(TypedMessageTypeEnum) {
    TypedMessageTypeEnum[TypedMessageTypeEnum["Tuple"] = 0] = "Tuple";
    TypedMessageTypeEnum[TypedMessageTypeEnum["Text"] = 1] = "Text";
})(TypedMessageTypeEnum || (TypedMessageTypeEnum = {}));


/***/ }),

/***/ 22758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports encodeTypedMessageV38Format, decodeTypedMessageV38ToV40Format */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23255);


function encodeTypedMessageV38Format(message) {
    var ref;
    const encoder = new TextEncoder();
    if ((ref = message.meta) === null || ref === void 0 ? void 0 : ref.size) {
        const rec = Object.fromEntries(message.meta.entries());
        return encoder.encode(`${JSON.stringify(rec)}\u{1F9E9}${message.content}`);
    }
    return encoder.encode(message.content);
}
function decodeTypedMessageV38ToV40Format(raw, version) {
    const decoder = new TextDecoder();
    const text = Result.wrap(()=>decoder.decode(raw)
    );
    const { val: val1 , err  } = text;
    if (err) return text;
    if (version === -38) {
        const maybeMetadata = (()=>{
            if (!val1.includes('\u{1F9E9}')) return None;
            const [maybeJSON] = val1.split('\u{1F9E9}');
            return Result.wrap(()=>JSON.parse(maybeJSON)
            ).toOption().map((val)=>{
                if (typeof val !== 'object' || Array.isArray(val)) return new Map();
                return new Map(Object.entries(val));
            });
        })();
        return Ok(maybeMetadata.some ? makeTypedMessageText(val1.replace(/.+\u{1F9E9}/u, ''), maybeMetadata.val) : makeTypedMessageText(val1));
    }
    return Ok(makeTypedMessageText(val1));
}


/***/ }),

/***/ 72727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export flattenTypedMessage */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73535);

function flattenTypedMessage(x1) {
    // Promise are always dropped after resolve even it has meta.
    if (isTypedMessagePromise(x1) && x1.value) return flattenTypedMessage(x1.value);
    if (isTypedMessageTuple(x1)) {
        if (x1.meta) return x1;
        if (x1.items.length === 0) return makeTypedMessageEmpty();
        if (x1.items.length === 1) return flattenTypedMessage(x1.items[0]);
        const nextItem = x1.items.map(flattenTypedMessage).flatMap((x)=>isTypedMessageTuple(x) && !x.meta ? x.items : x
        ).reduce((prev, current)=>{
            const lastItem = prev.at(-1);
            if (!lastItem || lastItem.meta || current.meta) return prev.concat(current);
            if (!isTypedMessageText(current) || !isTypedMessageText(lastItem)) return prev.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            prev.pop();
            prev.push(makeTypedMessageText(`${lastItem.content} ${current.content}`));
            return prev;
        }, []);
        if (nextItem.length === 1) return nextItem[0];
        return makeTypedMessageTuple(nextItem);
    }
    return x1;
}


/***/ }),

/***/ 37002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports hasPromise, collectTypedMessagePromise */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73535);

function hasPromise(x) {
    if (isTypedMessagePromise(x)) return true;
    if (isTypedMessageTuple(x)) return x.items.some(hasPromise);
    return false;
}
function collectTypedMessagePromise(x1, result = []) {
    if (isTypedMessagePromise(x1)) return result.concat(x1.promise.then(flattenTypedMessage));
    if (isTypedMessageTuple(x1)) {
        return result.concat(x1.items.flatMap((x)=>collectTypedMessagePromise(x)
        ));
    }
    return result;
}


/***/ }),

/***/ 76828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uO": () => (/* binding */ createIsType),
/* harmony export */   "Vm": () => (/* binding */ composeSome),
/* harmony export */   "mo": () => (/* binding */ composeEvery)
/* harmony export */ });
/** @internal */ function createIsType(x, version) {
    return (y)=>{
        if (version !== undefined && y.version !== version) return false;
        return y.type === x;
    };
}
/** @internal */ function composeSome(...fns) {
    return (...args)=>fns.some((f)=>f(...args)
        )
    ;
}
function composeEvery(...fns) {
    return (...args)=>fns.every((f)=>f(...args)
        )
    ;
}


/***/ }),

/***/ 99734:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ toString)
/* harmony export */ });
function toString(val) {
    var value = String(val);
    if (value === '[object Object]') {
        try {
            value = JSON.stringify(val);
        }
        catch (_a) { }
    }
    return value;
}
//# sourceMappingURL=utils.js.map

/***/ })

}]);