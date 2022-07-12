(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9074],{

/***/ 87762:
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ 14136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
var attachment_namespaceObject = {};
__webpack_require__.r(attachment_namespaceObject);
__webpack_require__.d(attachment_namespaceObject, {
  "checksum": () => (checksum),
  "decode": () => (decode),
  "encode": () => (encode),
  "getPayload": () => (getPayload),
  "loadKey": () => (loadKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(21795);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}
//# sourceMappingURL=encoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}
//# sourceMappingURL=payload.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}
//# sourceMappingURL=decoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 73019:
/***/ ((module) => {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports["default"] = AbortController


/***/ }),

/***/ 83435:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { AbortController } = __webpack_require__(68565)

/**
 * Takes an array of AbortSignals and returns a single signal.
 * If any signals are aborted, the returned signal will be aborted.
 * @param {Array<AbortSignal>} signals
 * @returns {AbortSignal}
 */
function anySignal (signals) {
  const controller = new AbortController()

  function onAbort () {
    controller.abort()

    for (const signal of signals) {
      if (!signal || !signal.removeEventListener) continue
      signal.removeEventListener('abort', onAbort)
    }
  }

  for (const signal of signals) {
    if (!signal || !signal.addEventListener) continue
    if (signal.aborted) {
      onAbort()
      break
    }
    signal.addEventListener('abort', onAbort)
  }

  return controller.signal
}

module.exports = anySignal
module.exports.anySignal = anySignal


/***/ }),

/***/ 37674:
/***/ ((module) => {

const { AbortController } = globalThis

/**
 * Takes an array of AbortSignals and returns a single signal.
 * If any signals are aborted, the returned signal will be aborted.
 * @param {Array<AbortSignal>} signals
 * @returns {AbortSignal}
 */
function anySignal (signals) {
  const controller = new AbortController()

  function onAbort () {
    controller.abort()

    for (const signal of signals) {
      if (!signal || !signal.removeEventListener) continue
      signal.removeEventListener('abort', onAbort)
    }
  }

  for (const signal of signals) {
    if (!signal || !signal.addEventListener) continue
    if (signal.aborted) {
      onAbort()
      break
    }
    signal.addEventListener('abort', onAbort)
  }

  return controller.signal
}

module.exports = anySignal
module.exports.anySignal = anySignal


/***/ }),

/***/ 77426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-env browser */



const browserReadableStreamToIt = __webpack_require__(73506)

/**
 * @param {Blob} blob
 * @returns {AsyncIterable<Uint8Array>}
 */
function blobToIt (blob) {
  if (typeof blob.stream === 'function') {
    // @ts-ignore missing some properties
    return browserReadableStreamToIt(blob.stream())
  }

  // firefox < 69 does not support blob.stream()
  // @ts-ignore - response.body is optional, but in practice it's a stream.
  return browserReadableStreamToIt(new Response(blob).body)
}

module.exports = blobToIt


/***/ }),

/***/ 73506:
/***/ ((module) => {

"use strict";


/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 * @template T
 * @param {ReadableStream<T>} stream
 * @param {Object} [options]
 * @param {boolean} [options.preventCancel=boolean]
 * @returns {AsyncIterable<T>}
 */
async function * browserReadableStreamToIt (stream, options = {}) {
  const reader = stream.getReader()

  try {
    while (true) {
      const result = await reader.read()

      if (result.done) {
        return
      }

      yield result.value
    }
  } finally {
    if (options.preventCancel !== true) {
      reader.cancel()
    }

    reader.releaseLock()
  }
}

module.exports = browserReadableStreamToIt


/***/ }),

/***/ 61145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(23719).Blob


/***/ }),

/***/ 70963:
/***/ ((module) => {

"use strict";


/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */
function assign(obj, props) {
    for (const key in props) {
        Object.defineProperty(obj, key, {
            value: props[key],
            enumerable: true,
            configurable: true,
        });
    }

    return obj;
}

/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */
function createError(err, code, props) {
    if (!err || typeof err === 'string') {
        throw new TypeError('Please pass an Error to err-code');
    }

    if (!props) {
        props = {};
    }

    if (typeof code === 'object') {
        props = code;
        code = '';
    }

    if (code) {
        props.code = code;
    }

    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;

        const ErrClass = function () {};

        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

        // @ts-ignore
        const output = assign(new ErrClass(), props);

        return output;
    }
}

module.exports = createError;


/***/ }),

/***/ 67930:
/***/ ((module) => {

"use strict";


const word = '[a-fA-F\\d:]';
const b = options => options && options.includeBoundaries ?
	`(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` :
	'';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip = options => options && options.exact ?
	v46Exact :
	new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');

ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');
ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');

module.exports = ip;


/***/ }),

/***/ 72729:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isElectron = __webpack_require__(45266)

const IS_ENV_WITH_DOM = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9
// @ts-ignore
const IS_ELECTRON = isElectron()
const IS_BROWSER = IS_ENV_WITH_DOM && !IS_ELECTRON
const IS_ELECTRON_MAIN = IS_ELECTRON && !IS_ENV_WITH_DOM
const IS_ELECTRON_RENDERER = IS_ELECTRON && IS_ENV_WITH_DOM
const IS_NODE =  true && typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node' && !IS_ELECTRON
// @ts-ignore - we either ignore worker scope or dom scope
const IS_WEBWORKER = typeof importScripts === 'function' && typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope
const IS_TEST = typeof process !== 'undefined' && typeof process.env !== 'undefined' && "production" === 'test'
const IS_REACT_NATIVE = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'

module.exports = {
  isTest: IS_TEST,
  isElectron: IS_ELECTRON,
  isElectronMain: IS_ELECTRON_MAIN,
  isElectronRenderer: IS_ELECTRON_RENDERER,
  isNode: IS_NODE,
  /**
   * Detects browser main thread  **NOT** web worker or service worker
   */
  isBrowser: IS_BROWSER,
  isWebWorker: IS_WEBWORKER,
  isEnvWithDom: IS_ENV_WITH_DOM,
  isReactNative: IS_REACT_NATIVE
}


/***/ }),

/***/ 27465:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { isElectronMain } = __webpack_require__(72729)

if (isElectronMain) {
  module.exports = __webpack_require__(47497)
} else {
// use window.fetch if it is available, fall back to node-fetch if not
  module.exports = __webpack_require__(35022)
}


/***/ }),

/***/ 24279:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const HTTP = __webpack_require__(15843)

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {{ path: string; content?: AsyncIterable<Uint8Array> }}
 */
const urlSource = (url, options) => {
  return {
    path: decodeURIComponent(new URL(url).pathname.split('/').pop() || ''),
    content: readURLContent(url, options)
  }
}

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {AsyncIterable<Uint8Array>}
 */
async function * readURLContent (url, options) {
  const http = new HTTP()
  const response = await http.get(url, options)

  yield * response.iterator()
}

module.exports = urlSource


/***/ }),

/***/ 15843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable no-undef */


const { fetch, Request, Headers } = __webpack_require__(47282)
const { TimeoutError, HTTPError } = __webpack_require__(50772)
const merge = (__webpack_require__(80091).bind)({ ignoreUndefined: true })
const { URL, URLSearchParams } = __webpack_require__(47655)
const anySignal = __webpack_require__(37674)

/**
 * @typedef {import('stream').Readable} NodeReadableStream
 * @typedef {import('./types').HTTPOptions} HTTPOptions
 * @typedef {import('./types').ExtendedResponse} ExtendedResponse
 */

/**
 * @template TResponse
 * @param {Promise<TResponse>} promise
 * @param {number | undefined} ms
 * @param {AbortController} abortController
 * @returns {Promise<TResponse>}
 */
const timeout = (promise, ms, abortController) => {
  if (ms === undefined) {
    return promise
  }

  const start = Date.now()

  const timedOut = () => {
    const time = Date.now() - start

    return time >= ms
  }

  return new Promise((resolve, reject) => {
    const timeoutID = setTimeout(() => {
      if (timedOut()) {
        reject(new TimeoutError())
        abortController.abort()
      }
    }, ms)

    /**
     * @param {(value: any) => void } next
     */
    const after = (next) => {
      /**
       * @param {any} res
       */
      const fn = (res) => {
        clearTimeout(timeoutID)

        if (timedOut()) {
          reject(new TimeoutError())
          return
        }

        next(res)
      }
      return fn
    }

    promise
      .then(after(resolve), after(reject))
  })
}

const defaults = {
  throwHttpErrors: true,
  credentials: 'same-origin'
}

class HTTP {
  /**
   *
   * @param {HTTPOptions} options
   */
  constructor (options = {}) {
    /** @type {HTTPOptions} */
    this.opts = merge(defaults, options)
  }

  /**
   * Fetch
   *
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   * @returns {Promise<ExtendedResponse>}
   */
  async fetch (resource, options = {}) {
    /** @type {HTTPOptions} */
    const opts = merge(this.opts, options)
    const headers = new Headers(opts.headers)

    // validate resource type
    if (typeof resource !== 'string' && !(resource instanceof URL || resource instanceof Request)) {
      throw new TypeError('`resource` must be a string, URL, or Request')
    }

    const url = new URL(resource.toString(), opts.base)

    const {
      searchParams,
      transformSearchParams,
      json
    } = opts

    if (searchParams) {
      if (typeof transformSearchParams === 'function') {
        // @ts-ignore
        url.search = transformSearchParams(new URLSearchParams(opts.searchParams))
      } else {
        // @ts-ignore
        url.search = new URLSearchParams(opts.searchParams)
      }
    }

    if (json) {
      opts.body = JSON.stringify(opts.json)
      headers.set('content-type', 'application/json')
    }

    const abortController = new AbortController()
    // @ts-ignore
    const signal = anySignal([abortController.signal, opts.signal])

    const response = await timeout(
      fetch(
        url.toString(),
        {
          ...opts,
          signal,
          timeout: undefined,
          headers
        }
      ),
      opts.timeout,
      abortController
    )

    if (!response.ok && opts.throwHttpErrors) {
      if (opts.handleError) {
        await opts.handleError(response)
      }
      throw new HTTPError(response)
    }

    response.iterator = function () {
      return fromStream(response.body)
    }

    response.ndjson = async function * () {
      for await (const chunk of ndjson(response.iterator())) {
        if (options.transform) {
          yield options.transform(chunk)
        } else {
          yield chunk
        }
      }
    }

    return response
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  post (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'POST' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  get (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'GET' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  put (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'PUT' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  delete (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'DELETE' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  options (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'OPTIONS' })
  }
}

/**
 * Parses NDJSON chunks from an iterator
 *
 * @param {AsyncIterable<Uint8Array>} source
 * @returns {AsyncIterable<any>}
 */
const ndjson = async function * (source) {
  const decoder = new TextDecoder()
  let buf = ''

  for await (const chunk of source) {
    buf += decoder.decode(chunk, { stream: true })
    const lines = buf.split(/\r?\n/)

    for (let i = 0; i < lines.length - 1; i++) {
      const l = lines[i].trim()
      if (l.length > 0) {
        yield JSON.parse(l)
      }
    }
    buf = lines[lines.length - 1]
  }
  buf += decoder.decode()
  buf = buf.trim()
  if (buf.length !== 0) {
    yield JSON.parse(buf)
  }
}

/**
 * Stream to AsyncIterable
 *
 * @template TChunk
 * @param {ReadableStream<TChunk> | NodeReadableStream | null} source
 * @returns {AsyncIterable<TChunk>}
 */
const fromStream = (source) => {
  // Workaround for https://github.com/node-fetch/node-fetch/issues/766
  if (isNodeReadableStream(source)) {
    const iter = source[Symbol.asyncIterator]()
    return {
      [Symbol.asyncIterator] () {
        return {
          next: iter.next.bind(iter),
          return (value) {
            source.destroy()
            if (typeof iter.return === 'function') {
              return iter.return()
            }
            return Promise.resolve({ done: true, value })
          }
        }
      }
    }
  }

  if (isWebReadableStream(source)) {
    const reader = source.getReader()
    return (async function * () {
      try {
        while (true) {
          // Read from the stream
          const { done, value } = await reader.read()
          // Exit if we're done
          if (done) return
          // Else yield the chunk
          if (value) {
            yield value
          }
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  if (isAsyncIterable(source)) {
    return source
  }

  throw new TypeError('Body can\'t be converted to AsyncIterable')
}

/**
 * Check if it's an AsyncIterable
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|AsyncIterable<TChunk>} value
 * @returns {value is AsyncIterable<TChunk>}
 */
const isAsyncIterable = (value) => {
  return typeof value === 'object' &&
  value !== null &&
  typeof /** @type {any} */(value)[Symbol.asyncIterator] === 'function'
}

/**
 * Check for web readable stream
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|ReadableStream<TChunk>} value
 * @returns {value is ReadableStream<TChunk>}
 */
const isWebReadableStream = (value) => {
  return value && typeof /** @type {any} */(value).getReader === 'function'
}

/**
 * @param {any} value
 * @returns {value is NodeReadableStream}
 */
const isNodeReadableStream = (value) =>
  Object.prototype.hasOwnProperty.call(value, 'readable') &&
  Object.prototype.hasOwnProperty.call(value, 'writable')

HTTP.HTTPError = HTTPError
HTTP.TimeoutError = TimeoutError
HTTP.streamToAsyncIterator = fromStream

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.post = (resource, options) => new HTTP(options).post(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.get = (resource, options) => new HTTP(options).get(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.put = (resource, options) => new HTTP(options).put(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.delete = (resource, options) => new HTTP(options).delete(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.options = (resource, options) => new HTTP(options).options(resource, options)

module.exports = HTTP


/***/ }),

/***/ 50772:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class TimeoutError extends Error {
  constructor (message = 'Request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}
exports.TimeoutError = TimeoutError

class AbortError extends Error {
  constructor (message = 'The operation was aborted.') {
    super(message)
    this.name = 'AbortError'
  }
}
exports.AbortError = AbortError

class HTTPError extends Error {
  /**
   * @param {Response} response
   */
  constructor (response) {
    super(response.statusText)
    this.name = 'HTTPError'
    this.response = response
  }
}
exports.HTTPError = HTTPError


/***/ }),

/***/ 47282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { TimeoutError, AbortError } = __webpack_require__(50772)
const { Response, Request, Headers, default: fetch } = __webpack_require__(27465)

/**
 * @typedef {import('../types').FetchOptions} FetchOptions
 * @typedef {import('../types').ProgressFn} ProgressFn
 */

/**
 * Fetch with progress
 *
 * @param {string | Request} url
 * @param {FetchOptions} [options]
 * @returns {Promise<ResponseWithURL>}
 */
const fetchWithProgress = (url, options = {}) => {
  const request = new XMLHttpRequest()
  request.open(options.method || 'GET', url.toString(), true)

  const { timeout, headers } = options

  if (timeout && timeout > 0 && timeout < Infinity) {
    request.timeout = timeout
  }

  if (options.overrideMimeType != null) {
    request.overrideMimeType(options.overrideMimeType)
  }

  if (headers) {
    for (const [name, value] of new Headers(headers)) {
      request.setRequestHeader(name, value)
    }
  }

  if (options.signal) {
    options.signal.onabort = () => request.abort()
  }

  if (options.onUploadProgress) {
    request.upload.onprogress = options.onUploadProgress
  }

  // Note: Need to use `arraybuffer` here instead of `blob` because `Blob`
  // instances coming from JSDOM are not compatible with `Response` from
  // node-fetch (which is the setup we get when testing with jest because
  // it uses JSDOM which does not provide a global fetch
  // https://github.com/jsdom/jsdom/issues/1724)
  request.responseType = 'arraybuffer'

  return new Promise((resolve, reject) => {
    /**
     * @param {Event} event
     */
    const handleEvent = (event) => {
      switch (event.type) {
        case 'error': {
          resolve(Response.error())
          break
        }
        case 'load': {
          resolve(
            new ResponseWithURL(request.responseURL, request.response, {
              status: request.status,
              statusText: request.statusText,
              headers: parseHeaders(request.getAllResponseHeaders())
            })
          )
          break
        }
        case 'timeout': {
          reject(new TimeoutError())
          break
        }
        case 'abort': {
          reject(new AbortError())
          break
        }
        default: {
          break
        }
      }
    }
    request.onerror = handleEvent
    request.onload = handleEvent
    request.ontimeout = handleEvent
    request.onabort = handleEvent

    // @ts-expect-error options.body can be a node readable stream, which isn't compatible with XHR, but this
    // file is a browser override so you won't get a node readable stream so ignore the error
    request.send(options.body)
  })
}

const fetchWithStreaming = fetch

/**
 * @param {string | Request} url
 * @param {FetchOptions} options
 */
const fetchWith = (url, options = {}) =>
  (options.onUploadProgress != null)
    ? fetchWithProgress(url, options)
    : fetchWithStreaming(url, options)

/**
 * Parse Headers from a XMLHttpRequest
 *
 * @param {string} input
 * @returns {Headers}
 */
const parseHeaders = (input) => {
  const headers = new Headers()
  for (const line of input.trim().split(/[\r\n]+/)) {
    const index = line.indexOf(': ')
    if (index > 0) {
      headers.set(line.slice(0, index), line.slice(index + 1))
    }
  }

  return headers
}

class ResponseWithURL extends Response {
  /**
   * @param {string} url
   * @param {BodyInit} body
   * @param {ResponseInit} options
   */
  constructor (url, body, options) {
    super(body, options)
    Object.defineProperty(this, 'url', { value: url })
  }
}

module.exports = {
  fetch: fetchWith,
  Request,
  Headers
}


/***/ }),

/***/ 45266:
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;


/***/ }),

/***/ 46565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ipRegex = __webpack_require__(67930);

const isIp = string => ipRegex({exact: true}).test(string);
isIp.v4 = string => ipRegex.v4({exact: true}).test(string);
isIp.v6 = string => ipRegex.v6({exact: true}).test(string);
isIp.version = string => isIp(string) ? (isIp.v4(string) ? 4 : 6) : undefined;

module.exports = isIp;


/***/ }),

/***/ 86701:
/***/ ((module) => {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ 47655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  URLWithLegacySupport,
  format,
  URLSearchParams,
  defaultBase
} = __webpack_require__(72821)
const relative = __webpack_require__(55429)

module.exports = {
  URL: URLWithLegacySupport,
  URLSearchParams,
  format,
  relative,
  defaultBase
}


/***/ }),

/***/ 55429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { URLWithLegacySupport, format } = __webpack_require__(72821)

/**
 * @param {string | undefined} url
 * @param {any} [location]
 * @param {any} [protocolMap]
 * @param {any} [defaultProtocol]
 */
module.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {
  let protocol = location.protocol
    ? location.protocol.replace(':', '')
    : 'http'

  // Check protocol map
  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'
  let urlParsed

  try {
    urlParsed = new URLWithLegacySupport(url)
  } catch (err) {
    urlParsed = {}
  }

  const base = Object.assign({}, location, {
    protocol: protocol || urlParsed.protocol,
    host: location.host || urlParsed.host
  })

  return new URLWithLegacySupport(url, format(base)).toString()
}


/***/ }),

/***/ 72821:
/***/ ((module) => {

"use strict";


const isReactNative =
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'

function getDefaultBase () {
  if (isReactNative) {
    return 'http://localhost'
  }
  // in some environments i.e. cloudflare workers location is not available
  if (!self.location) {
    return ''
  }

  return self.location.protocol + '//' + self.location.host
}

const URL = self.URL
const defaultBase = getDefaultBase()

class URLWithLegacySupport {
  constructor (url = '', base = defaultBase) {
    this.super = new URL(url, base)
    this.path = this.pathname + this.search
    this.auth =
            this.username && this.password
              ? this.username + ':' + this.password
              : null

    this.query =
            this.search && this.search.startsWith('?')
              ? this.search.slice(1)
              : null
  }

  get hash () {
    return this.super.hash
  }

  get host () {
    return this.super.host
  }

  get hostname () {
    return this.super.hostname
  }

  get href () {
    return this.super.href
  }

  get origin () {
    return this.super.origin
  }

  get password () {
    return this.super.password
  }

  get pathname () {
    return this.super.pathname
  }

  get port () {
    return this.super.port
  }

  get protocol () {
    return this.super.protocol
  }

  get search () {
    return this.super.search
  }

  get searchParams () {
    return this.super.searchParams
  }

  get username () {
    return this.super.username
  }

  set hash (hash) {
    this.super.hash = hash
  }

  set host (host) {
    this.super.host = host
  }

  set hostname (hostname) {
    this.super.hostname = hostname
  }

  set href (href) {
    this.super.href = href
  }

  set password (password) {
    this.super.password = password
  }

  set pathname (pathname) {
    this.super.pathname = pathname
  }

  set port (port) {
    this.super.port = port
  }

  set protocol (protocol) {
    this.super.protocol = protocol
  }

  set search (search) {
    this.super.search = search
  }

  set username (username) {
    this.super.username = username
  }

  /**
   * @param {any} o
   */
  static createObjectURL (o) {
    return URL.createObjectURL(o)
  }

  /**
   * @param {string} o
   */
  static revokeObjectURL (o) {
    URL.revokeObjectURL(o)
  }

  toJSON () {
    return this.super.toJSON()
  }

  toString () {
    return this.super.toString()
  }

  format () {
    return this.toString()
  }
}

/**
 * @param {string | import('url').UrlObject} obj
 */
function format (obj) {
  if (typeof obj === 'string') {
    const url = new URL(obj)

    return url.toString()
  }

  if (!(obj instanceof URL)) {
    const userPass =
            // @ts-ignore its not supported in node but we normalise
            obj.username && obj.password
              // @ts-ignore its not supported in node but we normalise
              ? `${obj.username}:${obj.password}@`
              : ''
    const auth = obj.auth ? obj.auth + '@' : ''
    const port = obj.port ? ':' + obj.port : ''
    const protocol = obj.protocol ? obj.protocol + '//' : ''
    const host = obj.host || ''
    const hostname = obj.hostname || ''
    const search = obj.search || (obj.query ? '?' + obj.query : '')
    const hash = obj.hash || ''
    const pathname = obj.pathname || ''
    // @ts-ignore - path is not supported in node but we normalise
    const path = obj.path || pathname + search

    return `${protocol}${userPass || auth}${
            host || hostname + port
        }${path}${hash}`
  }
}

module.exports = {
  URLWithLegacySupport,
  URLSearchParams: self.URLSearchParams,
  defaultBase,
  format
}


/***/ }),

/***/ 81254:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js

var ws = null

if (typeof WebSocket !== 'undefined') {
  ws = WebSocket
} else if (typeof MozWebSocket !== 'undefined') {
  ws = MozWebSocket
} else if (typeof __webpack_require__.g !== 'undefined') {
  ws = __webpack_require__.g.WebSocket || __webpack_require__.g.MozWebSocket
} else if (typeof window !== 'undefined') {
  ws = window.WebSocket || window.MozWebSocket
} else if (typeof self !== 'undefined') {
  ws = self.WebSocket || self.MozWebSocket
}

module.exports = ws


/***/ }),

/***/ 50397:
/***/ ((module) => {

"use strict";


/**
 * Collects all values from an (async) iterable into an array and returns it.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const all = async (source) => {
  const arr = []

  for await (const entry of source) {
    arr.push(entry)
  }

  return arr
}

module.exports = all


/***/ }),

/***/ 56746:
/***/ ((module) => {

"use strict";


/**
 * Returns the first result from an (async) iterable, unless empty, in which
 * case returns `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const first = async (source) => {
  for await (const entry of source) { // eslint-disable-line no-unreachable-loop
    return entry
  }

  return undefined
}

module.exports = first


/***/ }),

/***/ 11442:
/***/ ((module) => {

"use strict";


/**
 * Returns the last item of an (async) iterable, unless empty, in which case
 * return `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const last = async (source) => {
  let res

  for await (const entry of source) {
    res = entry
  }

  return res
}

module.exports = last


/***/ }),

/***/ 76219:
/***/ ((module) => {

"use strict";


/**
 * Takes an (async) iterable and returns one with each item mapped by the passed
 * function.
 *
 * @template I,O
 * @param {AsyncIterable<I>|Iterable<I>} source
 * @param {function(I):O|Promise<O>} func
 * @returns {AsyncIterable<O>}
 */
const map = async function * (source, func) {
  for await (const val of source) {
    yield func(val)
  }
}

module.exports = map


/***/ }),

/***/ 56041:
/***/ ((module) => {

"use strict";


/**
 * @template T
 * @typedef {Object} Peek
 * @property {() => IteratorResult<T, void>} peek
 */

/**
 * @template T
 * @typedef {Object} AsyncPeek
 * @property {() => Promise<IteratorResult<T, void>>} peek
 */

/**
 * @template T
 * @typedef {Object} Push
 * @property {(value:T) => void} push
 */

/**
 * @template T
 * @typedef {Iterable<T> & Peek<T> & Push<T> & Iterator<T>} Peekable<T>
 */

/**
 * @template T
 * @typedef {AsyncIterable<T> & AsyncPeek<T> & Push<T> & AsyncIterator<T>} AsyncPeekable<T>
 */

/**
 * @template {Iterable<any> | AsyncIterable<any>} I
 * @param {I} iterable
 * @returns {I extends Iterable<infer T>
 *  ? Peekable<T>
 *  : I extends AsyncIterable<infer T>
 *  ? AsyncPeekable<T>
 *  : never
 * }
 */
function peekableIterator (iterable) {
  // @ts-ignore
  const [iterator, symbol] = iterable[Symbol.asyncIterator]
    // @ts-ignore
    ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]
    // @ts-ignore
    : [iterable[Symbol.iterator](), Symbol.iterator]

  /** @type {any[]} */
  const queue = []

  // @ts-ignore
  return {
    peek: () => {
      return iterator.next()
    },
    push: (value) => {
      queue.push(value)
    },
    next: () => {
      if (queue.length) {
        return {
          done: false,
          value: queue.shift()
        }
      }

      return iterator.next()
    },
    [symbol] () {
      return this
    }
  }
}

module.exports = peekableIterator


/***/ }),

/***/ 88960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*! MIT License © Sindre Sorhus */

const globals = {};

const getGlobal = property => {
	/* istanbul ignore next */
	if (typeof self !== 'undefined' && self && property in self) {
		return self;
	}

	/* istanbul ignore next */
	if (typeof window !== 'undefined' && window && property in window) {
		return window;
	}

	if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g && property in __webpack_require__.g) {
		return __webpack_require__.g;
	}

	/* istanbul ignore next */
	if (typeof globalThis !== 'undefined' && globalThis) {
		return globalThis;
	}
};

const globalProperties = [
	'Headers',
	'Request',
	'Response',
	'ReadableStream',
	'fetch',
	'AbortController',
	'FormData'
];

for (const property of globalProperties) {
	Object.defineProperty(globals, property, {
		get() {
			const globalObject = getGlobal(property);
			const value = globalObject && globalObject[property];
			return typeof value === 'function' ? value.bind(globalObject) : value;
		}
	});
}

const isObject = value => value !== null && typeof value === 'object';
const supportsAbortController = typeof globals.AbortController === 'function';
const supportsStreams = typeof globals.ReadableStream === 'function';
const supportsFormData = typeof globals.FormData === 'function';

const mergeHeaders = (source1, source2) => {
	const result = new globals.Headers(source1 || {});
	const isHeadersInstance = source2 instanceof globals.Headers;
	const source = new globals.Headers(source2 || {});

	for (const [key, value] of source) {
		if ((isHeadersInstance && value === 'undefined') || value === undefined) {
			result.delete(key);
		} else {
			result.set(key, value);
		}
	}

	return result;
};

const deepMerge = (...sources) => {
	let returnValue = {};
	let headers = {};

	for (const source of sources) {
		if (Array.isArray(source)) {
			if (!(Array.isArray(returnValue))) {
				returnValue = [];
			}

			returnValue = [...returnValue, ...source];
		} else if (isObject(source)) {
			for (let [key, value] of Object.entries(source)) {
				if (isObject(value) && (key in returnValue)) {
					value = deepMerge(returnValue[key], value);
				}

				returnValue = {...returnValue, [key]: value};
			}

			if (isObject(source.headers)) {
				headers = mergeHeaders(headers, source.headers);
			}
		}

		returnValue.headers = headers;
	}

	return returnValue;
};

const requestMethods = [
	'get',
	'post',
	'put',
	'patch',
	'head',
	'delete'
];

const responseTypes = {
	json: 'application/json',
	text: 'text/*',
	formData: 'multipart/form-data',
	arrayBuffer: '*/*',
	blob: '*/*'
};

const retryMethods = [
	'get',
	'put',
	'head',
	'delete',
	'options',
	'trace'
];

const retryStatusCodes = [
	408,
	413,
	429,
	500,
	502,
	503,
	504
];

const retryAfterStatusCodes = [
	413,
	429,
	503
];

const stop = Symbol('stop');

class HTTPError extends Error {
	constructor(response) {
		// Set the message to the status text, such as Unauthorized,
		// with some fallbacks. This message should never be undefined.
		super(
			response.statusText ||
			String(
				(response.status === 0 || response.status) ?
					response.status : 'Unknown response error'
			)
		);
		this.name = 'HTTPError';
		this.response = response;
	}
}

class TimeoutError extends Error {
	constructor(request) {
		super('Request timed out');
		this.name = 'TimeoutError';
		this.request = request;
	}
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// `Promise.race()` workaround (#91)
const timeout = (request, abortController, options) =>
	new Promise((resolve, reject) => {
		const timeoutID = setTimeout(() => {
			if (abortController) {
				abortController.abort();
			}

			reject(new TimeoutError(request));
		}, options.timeout);

		/* eslint-disable promise/prefer-await-to-then */
		options.fetch(request)
			.then(resolve)
			.catch(reject)
			.then(() => {
				clearTimeout(timeoutID);
			});
		/* eslint-enable promise/prefer-await-to-then */
	});

const normalizeRequestMethod = input => requestMethods.includes(input) ? input.toUpperCase() : input;

const defaultRetryOptions = {
	limit: 2,
	methods: retryMethods,
	statusCodes: retryStatusCodes,
	afterStatusCodes: retryAfterStatusCodes
};

const normalizeRetryOptions = (retry = {}) => {
	if (typeof retry === 'number') {
		return {
			...defaultRetryOptions,
			limit: retry
		};
	}

	if (retry.methods && !Array.isArray(retry.methods)) {
		throw new Error('retry.methods must be an array');
	}

	if (retry.statusCodes && !Array.isArray(retry.statusCodes)) {
		throw new Error('retry.statusCodes must be an array');
	}

	return {
		...defaultRetryOptions,
		...retry,
		afterStatusCodes: retryAfterStatusCodes
	};
};

// The maximum value of a 32bit int (see issue #117)
const maxSafeTimeout = 2147483647;

class Ky {
	constructor(input, options = {}) {
		this._retryCount = 0;
		this._input = input;
		this._options = {
			// TODO: credentials can be removed when the spec change is implemented in all browsers. Context: https://www.chromestatus.com/feature/4539473312350208
			credentials: this._input.credentials || 'same-origin',
			...options,
			headers: mergeHeaders(this._input.headers, options.headers),
			hooks: deepMerge({
				beforeRequest: [],
				beforeRetry: [],
				afterResponse: []
			}, options.hooks),
			method: normalizeRequestMethod(options.method || this._input.method),
			prefixUrl: String(options.prefixUrl || ''),
			retry: normalizeRetryOptions(options.retry),
			throwHttpErrors: options.throwHttpErrors !== false,
			timeout: typeof options.timeout === 'undefined' ? 10000 : options.timeout,
			fetch: options.fetch || globals.fetch
		};

		if (typeof this._input !== 'string' && !(this._input instanceof URL || this._input instanceof globals.Request)) {
			throw new TypeError('`input` must be a string, URL, or Request');
		}

		if (this._options.prefixUrl && typeof this._input === 'string') {
			if (this._input.startsWith('/')) {
				throw new Error('`input` must not begin with a slash when using `prefixUrl`');
			}

			if (!this._options.prefixUrl.endsWith('/')) {
				this._options.prefixUrl += '/';
			}

			this._input = this._options.prefixUrl + this._input;
		}

		if (supportsAbortController) {
			this.abortController = new globals.AbortController();
			if (this._options.signal) {
				this._options.signal.addEventListener('abort', () => {
					this.abortController.abort();
				});
			}

			this._options.signal = this.abortController.signal;
		}

		this.request = new globals.Request(this._input, this._options);

		if (this._options.searchParams) {
			const searchParams = '?' + new URLSearchParams(this._options.searchParams).toString();
			const url = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, searchParams);

			// To provide correct form boundary, Content-Type header should be deleted each time when new Request instantiated from another one
			if (((supportsFormData && this._options.body instanceof globals.FormData) || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers['content-type'])) {
				this.request.headers.delete('content-type');
			}

			this.request = new globals.Request(new globals.Request(url, this.request), this._options);
		}

		if (this._options.json !== undefined) {
			this._options.body = JSON.stringify(this._options.json);
			this.request.headers.set('content-type', 'application/json');
			this.request = new globals.Request(this.request, {body: this._options.body});
		}

		const fn = async () => {
			if (this._options.timeout > maxSafeTimeout) {
				throw new RangeError(`The \`timeout\` option cannot be greater than ${maxSafeTimeout}`);
			}

			await delay(1);
			let response = await this._fetch();

			for (const hook of this._options.hooks.afterResponse) {
				// eslint-disable-next-line no-await-in-loop
				const modifiedResponse = await hook(
					this.request,
					this._options,
					this._decorateResponse(response.clone())
				);

				if (modifiedResponse instanceof globals.Response) {
					response = modifiedResponse;
				}
			}

			this._decorateResponse(response);

			if (!response.ok && this._options.throwHttpErrors) {
				throw new HTTPError(response);
			}

			// If `onDownloadProgress` is passed, it uses the stream API internally
			/* istanbul ignore next */
			if (this._options.onDownloadProgress) {
				if (typeof this._options.onDownloadProgress !== 'function') {
					throw new TypeError('The `onDownloadProgress` option must be a function');
				}

				if (!supportsStreams) {
					throw new Error('Streams are not supported in your environment. `ReadableStream` is missing.');
				}

				return this._stream(response.clone(), this._options.onDownloadProgress);
			}

			return response;
		};

		const isRetriableMethod = this._options.retry.methods.includes(this.request.method.toLowerCase());
		const result = isRetriableMethod ? this._retry(fn) : fn();

		for (const [type, mimeType] of Object.entries(responseTypes)) {
			result[type] = async () => {
				this.request.headers.set('accept', this.request.headers.get('accept') || mimeType);

				const response = (await result).clone();

				if (type === 'json') {
					if (response.status === 204) {
						return '';
					}

					if (options.parseJson) {
						return options.parseJson(await response.text());
					}
				}

				return response[type]();
			};
		}

		return result;
	}

	_calculateRetryDelay(error) {
		this._retryCount++;

		if (this._retryCount < this._options.retry.limit && !(error instanceof TimeoutError)) {
			if (error instanceof HTTPError) {
				if (!this._options.retry.statusCodes.includes(error.response.status)) {
					return 0;
				}

				const retryAfter = error.response.headers.get('Retry-After');
				if (retryAfter && this._options.retry.afterStatusCodes.includes(error.response.status)) {
					let after = Number(retryAfter);
					if (Number.isNaN(after)) {
						after = Date.parse(retryAfter) - Date.now();
					} else {
						after *= 1000;
					}

					if (typeof this._options.retry.maxRetryAfter !== 'undefined' && after > this._options.retry.maxRetryAfter) {
						return 0;
					}

					return after;
				}

				if (error.response.status === 413) {
					return 0;
				}
			}

			const BACKOFF_FACTOR = 0.3;
			return BACKOFF_FACTOR * (2 ** (this._retryCount - 1)) * 1000;
		}

		return 0;
	}

	_decorateResponse(response) {
		if (this._options.parseJson) {
			response.json = async () => {
				return this._options.parseJson(await response.text());
			};
		}

		return response;
	}

	async _retry(fn) {
		try {
			return await fn();
		} catch (error) {
			const ms = Math.min(this._calculateRetryDelay(error), maxSafeTimeout);
			if (ms !== 0 && this._retryCount > 0) {
				await delay(ms);

				for (const hook of this._options.hooks.beforeRetry) {
					// eslint-disable-next-line no-await-in-loop
					const hookResult = await hook({
						request: this.request,
						options: this._options,
						error,
						retryCount: this._retryCount
					});

					// If `stop` is returned from the hook, the retry process is stopped
					if (hookResult === stop) {
						return;
					}
				}

				return this._retry(fn);
			}

			if (this._options.throwHttpErrors) {
				throw error;
			}
		}
	}

	async _fetch() {
		for (const hook of this._options.hooks.beforeRequest) {
			// eslint-disable-next-line no-await-in-loop
			const result = await hook(this.request, this._options);

			if (result instanceof Request) {
				this.request = result;
				break;
			}

			if (result instanceof Response) {
				return result;
			}
		}

		if (this._options.timeout === false) {
			return this._options.fetch(this.request.clone());
		}

		return timeout(this.request.clone(), this.abortController, this._options);
	}

	/* istanbul ignore next */
	_stream(response, onDownloadProgress) {
		const totalBytes = Number(response.headers.get('content-length')) || 0;
		let transferredBytes = 0;

		return new globals.Response(
			new globals.ReadableStream({
				start(controller) {
					const reader = response.body.getReader();

					if (onDownloadProgress) {
						onDownloadProgress({percent: 0, transferredBytes: 0, totalBytes}, new Uint8Array());
					}

					async function read() {
						const {done, value} = await reader.read();
						if (done) {
							controller.close();
							return;
						}

						if (onDownloadProgress) {
							transferredBytes += value.byteLength;
							const percent = totalBytes === 0 ? 0 : transferredBytes / totalBytes;
							onDownloadProgress({percent, transferredBytes, totalBytes}, value);
						}

						controller.enqueue(value);
						read();
					}

					read();
				}
			})
		);
	}
}

const validateAndMerge = (...sources) => {
	for (const source of sources) {
		if ((!isObject(source) || Array.isArray(source)) && typeof source !== 'undefined') {
			throw new TypeError('The `options` argument must be an object');
		}
	}

	return deepMerge({}, ...sources);
};

const createInstance = defaults => {
	const ky = (input, options) => new Ky(input, validateAndMerge(defaults, options));

	for (const method of requestMethods) {
		ky[method] = (input, options) => new Ky(input, validateAndMerge(defaults, options, {method}));
	}

	ky.HTTPError = HTTPError;
	ky.TimeoutError = TimeoutError;
	ky.create = newDefaults => createInstance(validateAndMerge(newDefaults));
	ky.extend = newDefaults => createInstance(validateAndMerge(defaults, newDefaults));
	ky.stop = stop;

	return ky;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInstance());


/***/ }),

/***/ 80091:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOptionObject = __webpack_require__(86701);

const {hasOwnProperty} = Object.prototype;
const {propertyIsEnumerable} = Object;
const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
	value,
	writable: true,
	enumerable: true,
	configurable: true
});

const globalThis = this;
const defaultMergeOptions = {
	concatArrays: false,
	ignoreUndefined: false
};

const getEnumerableOwnPropertyKeys = value => {
	const keys = [];

	for (const key in value) {
		if (hasOwnProperty.call(value, key)) {
			keys.push(key);
		}
	}

	/* istanbul ignore else  */
	if (Object.getOwnPropertySymbols) {
		const symbols = Object.getOwnPropertySymbols(value);

		for (const symbol of symbols) {
			if (propertyIsEnumerable.call(value, symbol)) {
				keys.push(symbol);
			}
		}
	}

	return keys;
};

function clone(value) {
	if (Array.isArray(value)) {
		return cloneArray(value);
	}

	if (isOptionObject(value)) {
		return cloneOptionObject(value);
	}

	return value;
}

function cloneArray(array) {
	const result = array.slice(0, 0);

	getEnumerableOwnPropertyKeys(array).forEach(key => {
		defineProperty(result, key, clone(array[key]));
	});

	return result;
}

function cloneOptionObject(object) {
	const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

	getEnumerableOwnPropertyKeys(object).forEach(key => {
		defineProperty(result, key, clone(object[key]));
	});

	return result;
}

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
const mergeKeys = (merged, source, keys, config) => {
	keys.forEach(key => {
		if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
			return;
		}

		// Do not recurse into prototype chain of merged
		if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
			defineProperty(merged, key, merge(merged[key], source[key], config));
		} else {
			defineProperty(merged, key, clone(source[key]));
		}
	});

	return merged;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */
const concatArrays = (merged, source, config) => {
	let result = merged.slice(0, 0);
	let resultIndex = 0;

	[merged, source].forEach(array => {
		const indices = [];

		// `result.concat(array)` with cloning
		for (let k = 0; k < array.length; k++) {
			if (!hasOwnProperty.call(array, k)) {
				continue;
			}

			indices.push(String(k));

			if (array === merged) {
				// Already cloned
				defineProperty(result, resultIndex++, array[k]);
			} else {
				defineProperty(result, resultIndex++, clone(array[k]));
			}
		}

		// Merge non-index keys
		result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
	});

	return result;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
function merge(merged, source, config) {
	if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
		return concatArrays(merged, source, config);
	}

	if (!isOptionObject(source) || !isOptionObject(merged)) {
		return clone(source);
	}

	return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}

module.exports = function (...options) {
	const config = merge(clone(defaultMergeOptions), (this !== globalThis && this) || {}, defaultMergeOptions);
	let merged = {_: {}};

	for (const option of options) {
		if (option === undefined) {
			continue;
		}

		if (!isOptionObject(option)) {
			throw new TypeError('`' + option + '` is not an Option Object');
		}

		merged = merge(merged, {_: option}, config);
	}

	return merged._;
};


/***/ }),

/***/ 44247:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 88544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Multiaddr } = __webpack_require__(13695)

const reduceValue = (_, v) => v
const tcpUri = (str, port, parts, opts) => {
  // return tcp when explicitly requested
  if (opts && opts.assumeHttp === false) return `tcp://${str}:${port}`
  // check if tcp is the last protocol in multiaddr
  let protocol = 'tcp'
  let explicitPort = `:${port}`
  const last = parts[parts.length - 1]
  if (last.protocol === 'tcp') {
    // assume http and produce clean urls
    protocol = port === '443' ? 'https' : 'http'
    explicitPort = port === '443' || port === '80' ? '' : explicitPort
  }
  return `${protocol}://${str}${explicitPort}`
}

const Reducers = {
  ip4: reduceValue,
  ip6: (str, content, i, parts) => (
    parts.length === 1 && parts[0].protocol === 'ip6'
      ? content
      : `[${content}]`
  ),
  tcp: (str, content, i, parts, opts) => (
    parts.some(p => ['http', 'https', 'ws', 'wss'].includes(p.protocol))
      ? `${str}:${content}`
      : tcpUri(str, content, parts, opts)
  ),
  udp: (str, content) => `udp://${str}:${content}`,
  dnsaddr: reduceValue,
  dns4: reduceValue,
  dns6: reduceValue,
  ipfs: (str, content) => `${str}/ipfs/${content}`,
  p2p: (str, content) => `${str}/p2p/${content}`,
  http: str => `http://${str}`,
  https: str => `https://${str}`,
  ws: str => `ws://${str}`,
  wss: str => `wss://${str}`,
  'p2p-websocket-star': str => `${str}/p2p-websocket-star`,
  'p2p-webrtc-star': str => `${str}/p2p-webrtc-star`,
  'p2p-webrtc-direct': str => `${str}/p2p-webrtc-direct`
}

module.exports = (multiaddr, opts) => {
  const ma = new Multiaddr(multiaddr)
  const parts = multiaddr.toString().split('/').slice(1)
  return ma
    .tuples()
    .map(tuple => ({
      protocol: parts.shift(),
      content: tuple[1] ? parts.shift() : null
    }))
    .reduce((str, part, i, parts) => {
      const reduce = Reducers[part.protocol]
      if (!reduce) throw new Error(`Unsupported protocol ${part.protocol}`)
      return reduce(str, part.content, i, parts, opts)
    }, '')
}


/***/ }),

/***/ 68565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let impl

if (globalThis.AbortController && globalThis.AbortSignal) {
  impl = globalThis
} else {
  impl = __webpack_require__(73019)
}

module.exports.AbortSignal = impl.AbortSignal
module.exports.AbortController = impl.AbortController


/***/ }),

/***/ 35022:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) {
  module.exports = {
    default: globalThis.fetch,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
  }
} else {
  module.exports = {
    default: (__webpack_require__(87762)["default"]),
    Headers: (__webpack_require__(87762).Headers),
    Request: (__webpack_require__(87762).Request),
    Response: (__webpack_require__(87762).Response)
  }
}


/***/ }),

/***/ 96924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const debug = __webpack_require__(43244)
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(26798)
const { re, t } = __webpack_require__(86533)

const parseOptions = __webpack_require__(88043)
const { compareIdentifiers } = __webpack_require__(18738)
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ 43277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SemVer = __webpack_require__(96924)
const major = (a, loose) => new SemVer(a, loose).major
module.exports = major


/***/ }),

/***/ 26798:
/***/ ((module) => {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ 43244:
/***/ ((module) => {

const debug = (
  typeof process === 'object' &&
  process.env &&
  false &&
  0
) ? 0
  : () => {}

module.exports = debug


/***/ }),

/***/ 18738:
/***/ ((module) => {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ 88043:
/***/ ((module) => {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ 86533:
/***/ ((module, exports, __webpack_require__) => {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(26798)
const debug = __webpack_require__(43244)
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ 7748:
/***/ ((module) => {

module.exports = readable => {
  // Node.js stream
  if (readable[Symbol.asyncIterator]) return readable

  // Browser ReadableStream
  if (readable.getReader) {
    return (async function * () {
      const reader = readable.getReader()

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) return
          yield value
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  throw new Error('unknown stream')
}


/***/ }),

/***/ 67763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N0": () => (/* binding */ getRecentFiles),
/* harmony export */   "hr": () => (/* binding */ getFileInfo),
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "oq": () => (/* binding */ setFileInfo),
/* harmony export */   "ww": () => (/* binding */ getAllFiles)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21627);

let Database;
function setupDatabase(_) {
    Database = _;
}
let migrationDone = false;
async function migrationV1_V2() {
    if (migrationDone) return;
    for await (const x of Database.iterate_mutate('arweave')){
        await Database.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .FileInfoV1ToV2 */ .Fb)(x.value));
        await x.delete();
    }
    migrationDone = true;
}
async function getAllFiles() {
    await migrationV1_V2();
    const files = [];
    for await (const { value  } of Database.iterate('file')){
        files.push(value);
    }
    return files.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime()
    );
}
async function getRecentFiles() {
    const files = await getAllFiles();
    return files.slice(0, 4);
}
async function getFileInfo(checksum) {
    await migrationV1_V2();
    return Database.get('file', checksum);
}
async function setFileInfo(info) {
    await migrationV1_V2();
    return Database.add(info);
}


/***/ }),

/***/ 23403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAllFiles": () => (/* reexport */ database/* getAllFiles */.ww),
  "getFileInfo": () => (/* reexport */ database/* getFileInfo */.hr),
  "getRecentFiles": () => (/* reexport */ database/* getRecentFiles */.N0),
  "makeAttachment": () => (/* binding */ makeAttachment),
  "setFileInfo": () => (/* reexport */ database/* setFileInfo */.oq),
  "setupDatabase": () => (/* reexport */ database/* setupDatabase */.kF),
  "upload": () => (/* binding */ upload),
  "uploadLandingPage": () => (/* binding */ uploadLandingPage)
});

// EXTERNAL MODULE: ../plugins/FileService/src/types.ts
var types = __webpack_require__(8634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var esm = __webpack_require__(14136);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../../node_modules/.pnpm/arweave@1.10.13/node_modules/arweave/web/index.js
var web = __webpack_require__(48383);
var web_default = /*#__PURE__*/__webpack_require__.n(web);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(94529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/remote-signing.ts


async function sign(transaction) {
    const response = await fetch(constants/* signing */.Gm, {
        method: 'POST',
        // Allow workaround based on version
        // headers: { 'mask-version': process.env.VERSION },
        // Temporary workaround for https://github.com/msgpack/msgpack-javascript/issues/145
        body: Uint8Array.from(await makeRequest(transaction))
    });
    transaction.setSignature(await response.json());
}
async function makeRequest(transaction) {
    const encoder = new TextEncoder();
    await transaction.prepareChunks(transaction.data);
    const get = (base, name)=>base.get(name, {
            decode: true,
            string: false
        })
    ;
    return (0,encode/* encode */.c)([
        encoder.encode(transaction.format.toString()),
        get(transaction, 'owner'),
        get(transaction, 'target'),
        encoder.encode(transaction.quantity),
        encoder.encode(transaction.reward),
        get(transaction, 'last_tx'),
        transaction.tags.map((tag)=>[
                get(tag, 'name'),
                get(tag, 'value')
            ]
        ),
        encoder.encode(transaction.data_size),
        get(transaction, 'data_root'), 
    ]);
}

;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/arweave-token.json
const arweave_token_namespaceObject = JSON.parse('{"kty":"RSA","n":"qajRPsPmNXRt3L5QYk5h62E_LzsuqjsMtjVAjaC2IsMFekiIM1n1oscwJofvEhqCL6Yd9N55xySdzg5_VjBVaxxfCSsPsXVnsHGZDjJR0hOEMe6M-eA-dfxYqqUInNcJiuQBgO-ik2VCo92e6b2H6MozNWIlSmPZefjPWAUB3-Wm0LMPSX-GJiz5m0yS0-1cvtChGzQC38O174G0DfHyFjEmvO0DS4HnOH3htkz_9u96qtily0odFiru6vNuD8aGyfWqaJX52MLiw3zPUihlNnT6z4iw0eh0aKjjnZJV0IkV9042Eu2503KaTi-jfAnwZknB1rGdZziyFJzfD2kSLiPJT9J_YCQGcXqlhZHaq_Iw3PzPziw-rSRr--701HpFjwq41XVhCYdVkzo5OsTbOzgzriCPJuiGZkhrzIOcm2p5U4SLwphc0zBpkkWDj72CKMG2UK_z4GjiGO51VVCxxaKAA-w4z1Ba_LKV5QMnxXE3FiuB6gQW9xNl-K0zaPJbLgIciLV1v2UKWHjjwWacShVRfdrKoKIHbMs9prlO7NyLDhfeBh67i-TfGLtcxgd6Y0v9KqB6j3qFtIvkT4dJL8NCEfOCczS0Mp6K8O0Wy-4r9OU8Q7xjnG2CZ9gh5rF3pKhU3iLYlP8FS4voeNi6ANVJSmOI4qYN8REZqC9Qkec"}');
// EXTERNAL MODULE: ../plugins/FileService/src/helpers.ts
var helpers = __webpack_require__(21627);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/arweave.ts








class ArweaveAgent {
    init() {
        if (this.instance) return;
        this.instance = web_default().init({
            host: 'arweave.net',
            port: 443,
            protocol: 'https'
        });
    }
    async makeAttachment(options) {
        this.init();
        const passphrase = options.key ? (0,kit_esm/* encodeText */.YT)(options.key) : undefined;
        const encoded = await esm/* Attachment.encode */.P.encode(passphrase, {
            block: options.block,
            mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
            metadata: null
        });
        const transaction = await this.makePayload(encoded, 'application/octet-stream');
        ArweaveAgent.stage[transaction.id] = transaction;
        await this.instance.transactions.post(transaction);
        return transaction.id;
    }
    async uploadLandingPage(metadata) {
        this.init();
        let linkPrefix = 'https://arweave.net';
        if (metadata.useCDN) {
            linkPrefix = constants/* mesonPrefix */.oC;
        }
        const encodedMetadata = JSON.stringify({
            name: metadata.name,
            size: metadata.size,
            provider: 'arweave',
            link: `${linkPrefix}/${metadata.txId}`,
            signed: await (0,helpers/* makeFileKeySigned */.Gd)(metadata.key),
            createdAt: new Date().toISOString()
        });
        const response = await fetch(constants/* landing */._$);
        const text = await response.text();
        const replaced = text.replace('__METADATA__', encodedMetadata);
        const data = (0,kit_esm/* encodeText */.YT)(replaced);
        const transaction = await this.makePayload(data, 'text/html');
        await this.instance.transactions.post(transaction);
        return transaction.id;
    }
    async *upload(id) {
        this.init();
        for await (const uploader of this.instance.transactions.upload(ArweaveAgent.stage[id])){
            yield uploader.pctComplete;
        }
    }
    async makePayload(data, type) {
        this.init();
        const transaction = await this.instance.createTransaction({
            data
        }, arweave_token_namespaceObject);
        transaction.addTag('Content-Type', type);
        await sign(transaction);
        return transaction;
    }
}
ArweaveAgent.stage = {};
/* harmony default export */ const arweave = (new ArweaveAgent());

// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-http-client@54.0.2/node_modules/ipfs-http-client/esm/src/index.js + 148 modules
var src = __webpack_require__(48967);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/ipfs.ts







function createClient() {
    return (0,src/* create */.Ue)({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https'
    });
}
class IPFSAgent {
    init() {
        if (this.client) return;
        this.client = createClient();
    }
    async makeAttachment(options) {
        const passphrase = options.key ? (0,kit_esm/* encodeText */.YT)(options.key) : undefined;
        const encoded = await esm/* Attachment.encode */.P.encode(passphrase, {
            block: options.block,
            mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
            metadata: null
        });
        return this.makePayload(encoded, 'application/octet-stream');
    }
    // currently not native support progress track
    async *upload(id) {
        yield 100;
    }
    async uploadLandingPage(metadata) {
        const linkPrefix = 'https://ipfs.infura.io/ipfs';
        const encodedMetadata = JSON.stringify({
            name: metadata.name,
            size: metadata.size,
            provider: 'ipfs',
            link: dist_default()(linkPrefix, '/:txId', {
                txId: metadata.txId
            }),
            signed: await (0,helpers/* makeFileKeySigned */.Gd)(metadata.key),
            createdAt: new Date().toISOString()
        });
        const response = await fetch(constants/* landing */._$);
        const text = await response.text();
        const replaced = text.replace('Arweave', IPFSAgent.providerName).replace('Over Arweave', `Over ${IPFSAgent.providerName}`).replace('__METADATA__', encodedMetadata);
        const data = (0,kit_esm/* encodeText */.YT)(replaced);
        return this.makePayload(data, 'text/html');
    }
    async makePayload(data, type) {
        this.init();
        const file = await this.client.add(data);
        return file.cid.toString();
    }
}
IPFSAgent.providerName = 'IPFS';
/* harmony default export */ const ipfs = (new IPFSAgent());

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersphere+bee-js@3.3.1/node_modules/@ethersphere/bee-js/dist/mjs/index.js + 52 modules
var mjs = __webpack_require__(82036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/times.js + 1 modules
var times = __webpack_require__(87728);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sample.js + 2 modules
var sample = __webpack_require__(39075);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/swarm.ts







const POSTAGE_STAMP = '0'.repeat(64);
const BEE_HOSTS = (0,times/* default */.Z)(10, (n)=>`https://bee-${n}.gateway.ethswarm.org`
);
function createBee() {
    return new mjs/* Bee */.gv((0,sample/* default */.Z)(BEE_HOSTS));
}
class SwarmAgent {
    init() {
        if (this.bee) return;
        this.bee = createBee();
    }
    async makePayload(data, type, name) {
        this.init();
        const isHTML = type === 'text/html';
        if (isHTML) {
            const file = {
                path: name,
                data
            };
            const { reference  } = await this.bee.uploadCollection(POSTAGE_STAMP, [
                file
            ], {
                encrypt: false,
                indexDocument: name
            });
            return reference;
        }
        const { reference  } = await this.bee.uploadFile(POSTAGE_STAMP, data, name, {
            encrypt: false,
            size: data.length,
            contentType: type
        });
        return reference;
    }
    async makeAttachment(options) {
        const passphrase = options.key ? (0,kit_esm/* encodeText */.YT)(options.key) : undefined;
        const encoded = await esm/* Attachment.encode */.P.encode(passphrase, {
            block: options.block,
            mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
            metadata: null
        });
        return this.makePayload(encoded, 'application/octet-stream', options.name);
    }
    // currently not native support progress track
    async *upload(id) {
        yield 100;
    }
    async uploadLandingPage(metadata) {
        const linkPrefix = `${(0,sample/* default */.Z)(BEE_HOSTS)}/bzz`;
        const encodedMetadata = JSON.stringify({
            name: metadata.name,
            size: metadata.size,
            provider: 'swarm',
            link: dist_default()(linkPrefix, '/:txId', {
                txId: metadata.txId
            }),
            signed: await (0,helpers/* makeFileKeySigned */.Gd)(metadata.key),
            createdAt: new Date().toISOString()
        });
        const response = await fetch(constants/* landing */._$);
        const text = await response.text();
        const replaced = text.replace('Arweave', SwarmAgent.providerName).replace('Over Arweave', `Over ${SwarmAgent.providerName}`).replace('__METADATA__', encodedMetadata);
        const data = (0,kit_esm/* encodeText */.YT)(replaced);
        return this.makePayload(data, 'text/html', 'landing.html');
    }
}
SwarmAgent.providerName = 'Swarm';
/* harmony default export */ const swarm = (new SwarmAgent());

// EXTERNAL MODULE: ../plugins/FileService/src/Worker/database.ts
var database = __webpack_require__(67763);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/service.ts




const allProviders = {
    [types/* Provider.arweave */.z.arweave]: arweave,
    [types/* Provider.ipfs */.z.ipfs]: ipfs,
    [types/* Provider.swarm */.z.swarm]: swarm
};
async function makeAttachment(provider, options) {
    return allProviders[provider]?.makeAttachment(options);
}
async function* upload(provider, id) {
    for await (const percent of allProviders[provider].upload(id)){
        yield percent;
    }
}
async function uploadLandingPage(provider, metadata) {
    return allProviders[provider]?.uploadLandingPage(metadata);
}



/***/ }),

/***/ 37673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";
	
/*
struct posix_header {             // byte offset
	char name[100];               //   0
	char mode[8];                 // 100
	char uid[8];                  // 108
	char gid[8];                  // 116
	char size[12];                // 124
	char mtime[12];               // 136
	char chksum[8];               // 148
	char typeflag;                // 156
	char linkname[100];           // 157
	char magic[6];                // 257
	char version[2];              // 263
	char uname[32];               // 265
	char gname[32];               // 297
	char devmajor[8];             // 329
	char devminor[8];             // 337
	char prefix[155];             // 345
                                  // 500
};
*/

	var utils = __webpack_require__(70188),
		headerFormat;
	
	headerFormat = [
		{
			'field': 'fileName',
			'length': 100
		},
		{
			'field': 'fileMode',
			'length': 8
		},
		{
			'field': 'uid',
			'length': 8
		},
		{
			'field': 'gid',
			'length': 8
		},
		{
			'field': 'fileSize',
			'length': 12
		},
		{
			'field': 'mtime',
			'length': 12
		},
		{
			'field': 'checksum',
			'length': 8
		},
		{
			'field': 'type',
			'length': 1
		},
		{
			'field': 'linkName',
			'length': 100
		},
		{
			'field': 'ustar',
			'length': 8
		},
		{
			'field': 'owner',
			'length': 32
		},
		{
			'field': 'group',
			'length': 32
		},
		{
			'field': 'majorNumber',
			'length': 8
		},
		{
			'field': 'minorNumber',
			'length': 8
		},
		{
			'field': 'filenamePrefix',
			'length': 155
		},
		{
			'field': 'padding',
			'length': 12
		}
	];

	function formatHeader(data, cb) {
		var buffer = utils.clean(512),
			offset = 0;

		headerFormat.forEach(function (value) {
			var str = data[value.field] || "",
				i, length;

			for (i = 0, length = str.length; i < length; i += 1) {
				buffer[offset] = str.charCodeAt(i);
				offset += 1;
			}

			offset += value.length - i; // space it out with nulls
		});

		if (typeof cb === 'function') {
			return cb(buffer, offset);
		}
		return buffer;
	}
	
	module.exports.structure = headerFormat;
	module.exports.format = formatHeader;
}());


/***/ }),

/***/ 43352:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";

	var header = __webpack_require__(37673),
		utils = __webpack_require__(70188),
		recordSize = 512,
		blockSize;
	
	function Tar(recordsPerBlock) {
		this.written = 0;
		blockSize = (recordsPerBlock || 20) * recordSize;
		this.out = utils.clean(blockSize);
	}

	Tar.prototype.append = function (filepath, input, opts, callback) {
		var data,
			checksum,
			mode,
			mtime,
			uid,
			gid,
			headerArr;

		if (typeof input === 'string') {
			input = utils.stringToUint8(input);
		} else if (input.constructor !== Uint8Array.prototype.constructor) {
			throw 'Invalid input type. You gave me: ' + input.constructor.toString().match(/function\s*([$A-Za-z_][0-9A-Za-z_]*)\s*\(/)[1];
		}

		if (typeof opts === 'function') {
			callback = opts;
			opts = {};
		}

		opts = opts || {};

		mode = opts.mode || parseInt('777', 8) & 0xfff;
		mtime = opts.mtime || Math.floor(+new Date() / 1000);
		uid = opts.uid || 0;
		gid = opts.gid || 0;

		data = {
			fileName: filepath,
			fileMode: utils.pad(mode, 7),
			uid: utils.pad(uid, 7),
			gid: utils.pad(gid, 7),
			fileSize: utils.pad(input.length, 11),
			mtime: utils.pad(mtime, 11),
			checksum: '        ',
			type: '0', // just a file
			ustar: 'ustar  ',
			owner: opts.owner || '',
			group: opts.group || ''
		};

		// calculate the checksum
		checksum = 0;
		Object.keys(data).forEach(function (key) {
			var i, value = data[key], length;

			for (i = 0, length = value.length; i < length; i += 1) {
				checksum += value.charCodeAt(i);
			}
		});

		data.checksum = utils.pad(checksum, 6) + "\u0000 ";

		headerArr = header.format(data);

		var i, offset, length;

		this.out.set(headerArr, this.written);

		this.written += headerArr.length;

		// If there is not enough space in this.out, we need to expand it to
		// fit the new input.
		if (this.written + input.length > this.out.length) {
			this.out = utils.extend(this.out, this.written, input.length, blockSize);
		}

		this.out.set(input, this.written);

		// to the nearest multiple of recordSize
		this.written += input.length + (recordSize - (input.length % recordSize || recordSize));

		// make sure there's at least 2 empty records worth of extra space
		if (this.out.length - this.written < recordSize * 2) {
			this.out = utils.extend(this.out, this.written, recordSize * 2, blockSize);
		}

		if (typeof callback === 'function') {
			callback(this.out);
		}

		return this.out;
	};

	Tar.prototype.clear = function () {
		this.written = 0;
		this.out = utils.clean(blockSize);
	};

  Tar.utils = utils;

	Tar.stringToUint8 = utils.stringToUint8;
	Tar.uint8ToBase64 = utils.uint8ToBase64;
  Tar.base64ToUint8 = utils.base64ToUint8;
	
	module.exports = Tar;
}());


/***/ }),

/***/ 70188:
/***/ ((module) => {

/*
 * tar-js
 * MIT (c) 2011 T. Jameson Little
 */

(function () {
	"use strict";

	var lookup = [
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
			'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
			'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
			'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
			'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
			'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			'w', 'x', 'y', 'z', '0', '1', '2', '3',
			'4', '5', '6', '7', '8', '9', '+', '/'
		];
	function clean(length) {
		var i, buffer = new Uint8Array(length);
		for (i = 0; i < length; i += 1) {
			buffer[i] = 0;
		}
		return buffer;
	}

	function extend(orig, length, addLength, multipleOf) {
		var newSize = length + addLength,
			buffer = clean((parseInt(newSize / multipleOf) + 1) * multipleOf);

		buffer.set(orig);

		return buffer;
	}

	function pad(num, bytes, base) {
		num = num.toString(base || 8);
		return "000000000000".substr(num.length + 12 - bytes) + num;
	}	
	
	function stringToUint8 (input, out, offset) {
		var i, length;

		out = out || clean(input.length);

		offset = offset || 0;
		for (i = 0, length = input.length; i < length; i += 1) {
			out[offset] = input.charCodeAt(i);
			offset += 1;
		}

		return out;
	}

	function uint8ToBase64(uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length;

		function tripletToBase64 (num) {
			return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
		};

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
			output += tripletToBase64(temp);
		}

		// this prevents an ERR_INVALID_URL in Chrome (Firefox okay)
		switch (output.length % 4) {
			case 1:
				output += '=';
				break;
			case 2:
				output += '==';
				break;
			default:
				break;
		}

		return output;
	}

	function base64ToUint8(input) {
		var base64 = input.match(/^([^=]+)/)[1],
			extraBytes = input.match(/(=*)$/)[1].length,
			i = 0, length = base64.length, temp, offset = 0,
			ret = clean(base64.length * .75 + extraBytes);

		while (i < length) {
			temp = 0;

			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 18;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 12;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A') << 6;
			i += 1;
			temp |= lookup.indexOf(base64.charAt(i) || 'A');
			i += 1;

			ret[offset] = temp >> 16 & 0xFF;
			offset += 1;
			ret[offset] = temp >> 8 & 0xFF;
			offset += 1;
			ret[offset] = temp & 0xFF;
			offset += 1;
		}

		return ret;
	}

	module.exports.clean = clean;
	module.exports.pad = pad;
	module.exports.extend = extend;
	module.exports.stringToUint8 = stringToUint8;
	module.exports.uint8ToBase64 = uint8ToBase64;
	module.exports.base64ToUint8 = base64ToUint8;
}());


/***/ }),

/***/ 21877:
/***/ ((module) => {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ 3042:
/***/ ((module) => {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ 80233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    encode: __webpack_require__(3042)
  , decode: __webpack_require__(21877)
  , encodingLength: __webpack_require__(32057)
}


/***/ }),

/***/ 32057:
/***/ ((module) => {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ 88619:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 44902:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 47497:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 46973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "name": () => (/* binding */ name)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50154);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2758);


const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(obj);
  if (!cid) {
    return null;
  }
  const bytes = new Uint8Array(cid.bytes.byteLength + 1);
  bytes.set(cid.bytes, 1);
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_0__/* .Type.tag */ .Dy.tag, CID_CBOR_TAG),
    new cborg__WEBPACK_IMPORTED_MODULE_0__/* .Token */ .WU(cborg__WEBPACK_IMPORTED_MODULE_0__/* .Type.bytes */ .Dy.bytes, bytes)
  ];
}
function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }
  return null;
}
const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};
function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }
  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.decode(bytes.subarray(1));
}
const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__WEBPACK_IMPORTED_MODULE_0__/* .encode */ .cv(node, encodeOptions);
const decode = data => cborg__WEBPACK_IMPORTED_MODULE_0__/* .decode */ .Jx(data, decodeOptions);

/***/ }),

/***/ 82779:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "code": () => (/* binding */ code),
  "createLink": () => (/* reexport */ createLink),
  "createNode": () => (/* reexport */ createNode),
  "decode": () => (/* binding */ decode),
  "encode": () => (/* binding */ encode),
  "name": () => (/* binding */ src_name),
  "prepare": () => (/* reexport */ prepare),
  "validate": () => (/* reexport */ validate)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/multiformats@9.6.2/node_modules/multiformats/esm/src/cid.js
var src_cid = __webpack_require__(2758);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ipld+dag-pb@2.1.15/node_modules/@ipld/dag-pb/esm/src/pb-decode.js
const textDecoder = new TextDecoder();
function decodeVarint(bytes, offset) {
  let v = 0;
  for (let shift = 0;; shift += 7) {
    if (shift >= 64) {
      throw new Error('protobuf: varint overflow');
    }
    if (offset >= bytes.length) {
      throw new Error('protobuf: unexpected end of data');
    }
    const b = bytes[offset++];
    v += shift < 28 ? (b & 127) << shift : (b & 127) * 2 ** shift;
    if (b < 128) {
      break;
    }
  }
  return [
    v,
    offset
  ];
}
function decodeBytes(bytes, offset) {
  let byteLen;
  [byteLen, offset] = decodeVarint(bytes, offset);
  const postOffset = offset + byteLen;
  if (byteLen < 0 || postOffset < 0) {
    throw new Error('protobuf: invalid length');
  }
  if (postOffset > bytes.length) {
    throw new Error('protobuf: unexpected end of data');
  }
  return [
    bytes.subarray(offset, postOffset),
    postOffset
  ];
}
function decodeKey(bytes, index) {
  let wire;
  [wire, index] = decodeVarint(bytes, index);
  return [
    wire & 7,
    wire >> 3,
    index
  ];
}
function decodeLink(bytes) {
  const link = {};
  const l = bytes.length;
  let index = 0;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (fieldNum === 1) {
      if (link.Hash) {
        throw new Error('protobuf: (PBLink) duplicate Hash section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Hash`);
      }
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Name before Hash');
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash');
      }
      ;
      [link.Hash, index] = decodeBytes(bytes, index);
    } else if (fieldNum === 2) {
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Name section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Name`);
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name');
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      link.Name = textDecoder.decode(byts);
    } else if (fieldNum === 3) {
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Tsize section');
      }
      if (wireType !== 0) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Tsize`);
      }
      ;
      [link.Tsize, index] = decodeVarint(bytes, index);
    } else {
      throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBLink) unexpected end of data');
  }
  return link;
}
function decodeNode(bytes) {
  const l = bytes.length;
  let index = 0;
  let links;
  let linksBeforeData = false;
  let data;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (wireType !== 2) {
      throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${ wireType }`);
    }
    if (fieldNum === 1) {
      if (data) {
        throw new Error('protobuf: (PBNode) duplicate Data section');
      }
      ;
      [data, index] = decodeBytes(bytes, index);
      if (links) {
        linksBeforeData = true;
      }
    } else if (fieldNum === 2) {
      if (linksBeforeData) {
        throw new Error('protobuf: (PBNode) duplicate Links section');
      } else if (!links) {
        links = [];
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      links.push(decodeLink(byts));
    } else {
      throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBNode) unexpected end of data');
  }
  const node = {};
  if (data) {
    node.Data = data;
  }
  node.Links = links || [];
  return node;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ipld+dag-pb@2.1.15/node_modules/@ipld/dag-pb/esm/src/pb-encode.js
const textEncoder = new TextEncoder();
const maxInt32 = 2 ** 32;
const maxUInt32 = 2 ** 31;
function encodeLink(link, bytes) {
  let i = bytes.length;
  if (typeof link.Tsize === 'number') {
    if (link.Tsize < 0) {
      throw new Error('Tsize cannot be negative');
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error('Tsize too large for encoding');
    }
    i = encodeVarint(bytes, i, link.Tsize) - 1;
    bytes[i] = 24;
  }
  if (typeof link.Name === 'string') {
    const nameBytes = textEncoder.encode(link.Name);
    i -= nameBytes.length;
    bytes.set(nameBytes, i);
    i = encodeVarint(bytes, i, nameBytes.length) - 1;
    bytes[i] = 18;
  }
  if (link.Hash) {
    i -= link.Hash.length;
    bytes.set(link.Hash, i);
    i = encodeVarint(bytes, i, link.Hash.length) - 1;
    bytes[i] = 10;
  }
  return bytes.length - i;
}
function encodeNode(node) {
  const size = sizeNode(node);
  const bytes = new Uint8Array(size);
  let i = size;
  if (node.Data) {
    i -= node.Data.length;
    bytes.set(node.Data, i);
    i = encodeVarint(bytes, i, node.Data.length) - 1;
    bytes[i] = 10;
  }
  if (node.Links) {
    for (let index = node.Links.length - 1; index >= 0; index--) {
      const size = encodeLink(node.Links[index], bytes.subarray(0, i));
      i -= size;
      i = encodeVarint(bytes, i, size) - 1;
      bytes[i] = 18;
    }
  }
  return bytes;
}
function sizeLink(link) {
  let n = 0;
  if (link.Hash) {
    const l = link.Hash.length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Name === 'string') {
    const l = textEncoder.encode(link.Name).length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Tsize === 'number') {
    n += 1 + sov(link.Tsize);
  }
  return n;
}
function sizeNode(node) {
  let n = 0;
  if (node.Data) {
    const l = node.Data.length;
    n += 1 + l + sov(l);
  }
  if (node.Links) {
    for (const link of node.Links) {
      const l = sizeLink(link);
      n += 1 + l + sov(l);
    }
  }
  return n;
}
function encodeVarint(bytes, offset, v) {
  offset -= sov(v);
  const base = offset;
  while (v >= maxUInt32) {
    bytes[offset++] = v & 127 | 128;
    v /= 128;
  }
  while (v >= 128) {
    bytes[offset++] = v & 127 | 128;
    v >>>= 7;
  }
  bytes[offset] = v;
  return base;
}
function sov(x) {
  if (x % 2 === 0) {
    x++;
  }
  return Math.floor((len64(x) + 6) / 7);
}
function len64(x) {
  let n = 0;
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n = 32;
  }
  if (x >= 1 << 16) {
    x >>>= 16;
    n += 16;
  }
  if (x >= 1 << 8) {
    x >>>= 8;
    n += 8;
  }
  return n + len8tab[x];
}
const len8tab = [
  0,
  1,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8
];
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ipld+dag-pb@2.1.15/node_modules/@ipld/dag-pb/esm/src/util.js

const pbNodeProperties = [
  'Data',
  'Links'
];
const pbLinkProperties = [
  'Hash',
  'Name',
  'Tsize'
];
const util_textEncoder = new TextEncoder();
function linkComparator(a, b) {
  if (a === b) {
    return 0;
  }
  const abuf = a.Name ? util_textEncoder.encode(a.Name) : [];
  const bbuf = b.Name ? util_textEncoder.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;
  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i];
      y = bbuf[i];
      break;
    }
  }
  return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node, properties) {
  return !Object.keys(node).some(p => !properties.includes(p));
}
function asLink(link) {
  if (typeof link.asCID === 'object') {
    const Hash = src_cid.CID.asCID(link);
    if (!Hash) {
      throw new TypeError('Invalid DAG-PB form');
    }
    return { Hash };
  }
  if (typeof link !== 'object' || Array.isArray(link)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbl = {};
  if (link.Hash) {
    let cid = src_cid.CID.asCID(link.Hash);
    try {
      if (!cid) {
        if (typeof link.Hash === 'string') {
          cid = src_cid.CID.parse(link.Hash);
        } else if (link.Hash instanceof Uint8Array) {
          cid = src_cid.CID.decode(link.Hash);
        }
      }
    } catch (e) {
      throw new TypeError(`Invalid DAG-PB form: ${ e.message }`);
    }
    if (cid) {
      pbl.Hash = cid;
    }
  }
  if (!pbl.Hash) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (typeof link.Name === 'string') {
    pbl.Name = link.Name;
  }
  if (typeof link.Tsize === 'number') {
    pbl.Tsize = link.Tsize;
  }
  return pbl;
}
function prepare(node) {
  if (node instanceof Uint8Array || typeof node === 'string') {
    node = { Data: node };
  }
  if (typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbn = {};
  if (node.Data !== undefined) {
    if (typeof node.Data === 'string') {
      pbn.Data = util_textEncoder.encode(node.Data);
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data;
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  }
  if (node.Links !== undefined) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  } else {
    pbn.Links = [];
  }
  return pbn;
}
function validate(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError('Invalid DAG-PB form (extraneous properties)');
  }
  if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
    throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)');
  }
  if (!Array.isArray(node.Links)) {
    throw new TypeError('Invalid DAG-PB form (Links must be an array)');
  }
  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i];
    if (!link || typeof link !== 'object' || Array.isArray(link)) {
      throw new TypeError('Invalid DAG-PB form (bad link object)');
    }
    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)');
    }
    if (!link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
    }
    if (link.Hash.asCID !== link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)');
    }
    if (link.Name !== undefined && typeof link.Name !== 'string') {
      throw new TypeError('Invalid DAG-PB form (link Name must be a string)');
    }
    if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) {
      throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)');
    }
    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)');
    }
  }
}
function createNode(data, links = []) {
  return prepare({
    Data: data,
    Links: links
  });
}
function createLink(name, size, cid) {
  return asLink({
    Hash: cid,
    Name: name,
    Tsize: size
  });
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ipld+dag-pb@2.1.15/node_modules/@ipld/dag-pb/esm/src/index.js




const src_name = 'dag-pb';
const code = 112;
function encode(node) {
  validate(node);
  const pbn = {};
  if (node.Links) {
    pbn.Links = node.Links.map(l => {
      const link = {};
      if (l.Hash) {
        link.Hash = l.Hash.bytes;
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  if (node.Data) {
    pbn.Data = node.Data;
  }
  return encodeNode(pbn);
}
function decode(bytes) {
  const pbn = decodeNode(bytes);
  const node = {};
  if (pbn.Data) {
    node.Data = pbn.Data;
  }
  if (pbn.Links) {
    node.Links = pbn.Links.map(l => {
      const link = {};
      try {
        link.Hash = src_cid.CID.decode(l.Hash);
      } catch (e) {
      }
      if (!link.Hash) {
        throw new Error('Invalid Hash field found in link, expected CID');
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  return node;
}


/***/ }),

/***/ 24190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
});

/***/ }),

/***/ 74207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ normaliseInput)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(70963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/from-string.js
var from_string = __webpack_require__(31216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/browser-readablestream-to-it@1.0.3/node_modules/browser-readablestream-to-it/index.js
var browser_readablestream_to_it = __webpack_require__(73506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/blob-to-it@1.0.4/node_modules/blob-to-it/index.js
var blob_to_it = __webpack_require__(77426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-peekable@1.0.3/node_modules/it-peekable/index.js
var it_peekable = __webpack_require__(56041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-all@1.0.6/node_modules/it-all/index.js
var it_all = __webpack_require__(50397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-map@1.0.6/node_modules/it-map/index.js
var it_map = __webpack_require__(76219);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/utils.js
var utils = __webpack_require__(39232);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-content.js








async function* toAsyncIterable(thing) {
  yield thing;
}
async function normaliseContent(input) {
  if ((0,utils/* isBytes */._t)(input)) {
    return toAsyncIterable(toBytes(input));
  }
  if (typeof input === 'string' || input instanceof String) {
    return toAsyncIterable(toBytes(input.toString()));
  }
  if ((0,utils/* isBlob */.Lj)(input)) {
    return blob_to_it(input);
  }
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = browser_readablestream_to_it(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable(input);
    const {value, done} = await peekable.peek();
    if (done) {
      return toAsyncIterable(new Uint8Array(0));
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      return toAsyncIterable(Uint8Array.from(await it_all(peekable)));
    }
    if ((0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      return it_map(peekable, toBytes);
    }
  }
  throw err_code(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
}
function toBytes(chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (chunk instanceof ArrayBuffer) {
    return new Uint8Array(chunk);
  }
  if (Array.isArray(chunk)) {
    return Uint8Array.from(chunk);
  }
  return (0,from_string.fromString)(chunk.toString());
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-unixfs@6.0.6/node_modules/ipfs-unixfs/esm/src/index.js + 1 modules
var src = __webpack_require__(8695);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-single.js





async function* normaliseCandidateSingle(input, normaliseContent) {
  if (input === null || input === undefined) {
    throw err_code(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
  }
  if (typeof input === 'string' || input instanceof String) {
    yield toFileObject(input.toString(), normaliseContent);
    return;
  }
  if ((0,utils/* isBytes */._t)(input) || (0,utils/* isBlob */.Lj)(input)) {
    yield toFileObject(input, normaliseContent);
    return;
  }
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = browser_readablestream_to_it(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable(input);
    const {value, done} = await peekable.peek();
    if (done) {
      yield { content: [] };
      return;
    }
    peekable.push(value);
    if (Number.isInteger(value) || (0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      yield toFileObject(peekable, normaliseContent);
      return;
    }
    throw err_code(new Error('Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead'), 'ERR_UNEXPECTED_INPUT');
  }
  if ((0,utils/* isFileObject */.Mk)(input)) {
    yield toFileObject(input, normaliseContent);
    return;
  }
  throw err_code(new Error('Unexpected input: cannot convert "' + typeof input + '" into ImportCandidate'), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
  const {path, mode, mtime, content} = input;
  const file = {
    path: path || '',
    mode: (0,src/* parseMode */.tK)(mode),
    mtime: (0,src/* parseMtime */.Xu)(mtime)
  };
  if (content) {
    file.content = await normaliseContent(content);
  } else if (!path) {
    file.content = await normaliseContent(input);
  }
  return file;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js


function normaliseInput(input) {
  return normaliseCandidateSingle(input, normaliseContent);
}

/***/ }),

/***/ 39232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* binding */ isBlob),
/* harmony export */   "Mk": () => (/* binding */ isFileObject),
/* harmony export */   "Os": () => (/* binding */ isReadableStream),
/* harmony export */   "_t": () => (/* binding */ isBytes)
/* harmony export */ });
function isBytes(obj) {
  return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer;
}
function isBlob(obj) {
  return obj.constructor && (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') && typeof obj.stream === 'function';
}
function isFileObject(obj) {
  return typeof obj === 'object' && (obj.path || obj.content);
}
const isReadableStream = value => value && typeof value.getReader === 'function';

/***/ }),

/***/ 24717:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Multibases)
/* harmony export */ });
const LOAD_BASE = name => Promise.reject(new Error(`No base found for "${ name }"`));
class Multibases {
  constructor(options) {
    this._basesByName = {};
    this._basesByPrefix = {};
    this._loadBase = options.loadBase || LOAD_BASE;
    for (const base of options.bases) {
      this.addBase(base);
    }
  }
  addBase(base) {
    if (this._basesByName[base.name] || this._basesByPrefix[base.prefix]) {
      throw new Error(`Codec already exists for codec "${ base.name }"`);
    }
    this._basesByName[base.name] = base;
    this._basesByPrefix[base.prefix] = base;
  }
  removeBase(base) {
    delete this._basesByName[base.name];
    delete this._basesByPrefix[base.prefix];
  }
  async getBase(nameOrPrefix) {
    if (this._basesByName[nameOrPrefix]) {
      return this._basesByName[nameOrPrefix];
    }
    if (this._basesByPrefix[nameOrPrefix]) {
      return this._basesByPrefix[nameOrPrefix];
    }
    const base = await this._loadBase(nameOrPrefix);
    if (this._basesByName[base.name] == null && this._basesByPrefix[base.prefix] == null) {
      this.addBase(base);
    }
    return base;
  }
  listBases() {
    return Object.values(this._basesByName);
  }
}

/***/ }),

/***/ 96096:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Multicodecs)
/* harmony export */ });
const LOAD_CODEC = codeOrName => Promise.reject(new Error(`No codec found for "${ codeOrName }"`));
class Multicodecs {
  constructor(options) {
    this._codecsByName = {};
    this._codecsByCode = {};
    this._loadCodec = options.loadCodec || LOAD_CODEC;
    for (const codec of options.codecs) {
      this.addCodec(codec);
    }
  }
  addCodec(codec) {
    if (this._codecsByName[codec.name] || this._codecsByCode[codec.code]) {
      throw new Error(`Resolver already exists for codec "${ codec.name }"`);
    }
    this._codecsByName[codec.name] = codec;
    this._codecsByCode[codec.code] = codec;
  }
  removeCodec(codec) {
    delete this._codecsByName[codec.name];
    delete this._codecsByCode[codec.code];
  }
  async getCodec(code) {
    const table = typeof code === 'string' ? this._codecsByName : this._codecsByCode;
    if (table[code]) {
      return table[code];
    }
    const codec = await this._loadCodec(code);
    if (table[code] == null) {
      this.addCodec(codec);
    }
    return codec;
  }
  listCodecs() {
    return Object.values(this._codecsByName);
  }
}

/***/ }),

/***/ 84145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ Multihashes)
/* harmony export */ });
const LOAD_HASHER = codeOrName => Promise.reject(new Error(`No hasher found for "${ codeOrName }"`));
class Multihashes {
  constructor(options) {
    this._hashersByName = {};
    this._hashersByCode = {};
    this._loadHasher = options.loadHasher || LOAD_HASHER;
    for (const hasher of options.hashers) {
      this.addHasher(hasher);
    }
  }
  addHasher(hasher) {
    if (this._hashersByName[hasher.name] || this._hashersByCode[hasher.code]) {
      throw new Error(`Resolver already exists for codec "${ hasher.name }"`);
    }
    this._hashersByName[hasher.name] = hasher;
    this._hashersByCode[hasher.code] = hasher;
  }
  removeHasher(hasher) {
    delete this._hashersByName[hasher.name];
    delete this._hashersByCode[hasher.code];
  }
  async getHasher(code) {
    const table = typeof code === 'string' ? this._hashersByName : this._hashersByCode;
    if (table[code]) {
      return table[code];
    }
    const hasher = await this._loadHasher(code);
    if (table[code] == null) {
      this.addHasher(hasher);
    }
    return hasher;
  }
  listHashers() {
    return Object.values(this._hashersByName);
  }
}

/***/ }),

/***/ 4234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ multipartRequest)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(70963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-peekable@1.0.3/node_modules/it-peekable/index.js
var it_peekable = __webpack_require__(56041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/browser-readablestream-to-it@1.0.3/node_modules/browser-readablestream-to-it/index.js
var browser_readablestream_to_it = __webpack_require__(73506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-all@1.0.6/node_modules/it-all/index.js
var it_all = __webpack_require__(50397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/utils.js
var utils = __webpack_require__(39232);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-content.browser.js





async function normaliseContent(input) {
  if ((0,utils/* isBytes */._t)(input)) {
    return new Blob([input]);
  }
  if (typeof input === 'string' || input instanceof String) {
    return new Blob([input.toString()]);
  }
  if ((0,utils/* isBlob */.Lj)(input)) {
    return input;
  }
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = browser_readablestream_to_it(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable(input);
    const {value, done} = await peekable.peek();
    if (done) {
      return itToBlob(peekable);
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      return new Blob([Uint8Array.from(await it_all(peekable))]);
    }
    if ((0,utils/* isBytes */._t)(value) || typeof value === 'string' || value instanceof String) {
      return itToBlob(peekable);
    }
  }
  throw err_code(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
}
async function itToBlob(stream) {
  const parts = [];
  for await (const chunk of stream) {
    parts.push(chunk);
  }
  return new Blob(parts);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/it-map@1.0.6/node_modules/it-map/index.js
var it_map = __webpack_require__(76219);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ipfs-unixfs@6.0.6/node_modules/ipfs-unixfs/esm/src/index.js + 1 modules
var src = __webpack_require__(8695);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-multiple.js






async function* normaliseCandidateMultiple(input, normaliseContent) {
  if (typeof input === 'string' || input instanceof String || (0,utils/* isBytes */._t)(input) || (0,utils/* isBlob */.Lj)(input) || input._readableState) {
    throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
  }
  if ((0,utils/* isReadableStream */.Os)(input)) {
    input = browser_readablestream_to_it(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable(input);
    const {value, done} = await peekable.peek();
    if (done) {
      yield* [];
      return;
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    }
    if (value._readableState) {
      yield* it_map(peekable, value => toFileObject({ content: value }, normaliseContent));
      return;
    }
    if ((0,utils/* isBytes */._t)(value)) {
      yield toFileObject({ content: peekable }, normaliseContent);
      return;
    }
    if ((0,utils/* isFileObject */.Mk)(value) || value[Symbol.iterator] || value[Symbol.asyncIterator] || (0,utils/* isReadableStream */.Os)(value) || (0,utils/* isBlob */.Lj)(value)) {
      yield* it_map(peekable, value => toFileObject(value, normaliseContent));
      return;
    }
  }
  if ((0,utils/* isFileObject */.Mk)(input)) {
    throw err_code(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
  }
  throw err_code(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
  const {path, mode, mtime, content} = input;
  const file = {
    path: path || '',
    mode: (0,src/* parseMode */.tK)(mode),
    mtime: (0,src/* parseMtime */.Xu)(mtime)
  };
  if (content) {
    file.content = await normaliseContent(content);
  } else if (!path) {
    file.content = await normaliseContent(input);
  }
  return file;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/files/normalise-input-multiple.browser.js


function normaliseInput(input) {
  return normaliseCandidateMultiple(input, normaliseContent, true);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/mode-to-string.js
function modeToString(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'string') {
    return mode;
  }
  return mode.toString(8).padStart(4, '0');
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-core-utils@0.12.2/node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js


async function multipartRequest(source, abortController, headers = {}) {
  const parts = [];
  const formData = new FormData();
  let index = 0;
  let total = 0;
  for await (const {content, path, mode, mtime} of normaliseInput(source)) {
    let fileSuffix = '';
    const type = content ? 'file' : 'dir';
    if (index > 0) {
      fileSuffix = `-${ index }`;
    }
    let fieldName = type + fileSuffix;
    const qs = [];
    if (mode !== null && mode !== undefined) {
      qs.push(`mode=${ modeToString(mode) }`);
    }
    if (mtime != null) {
      const {secs, nsecs} = mtime;
      qs.push(`mtime=${ secs }`);
      if (nsecs != null) {
        qs.push(`mtime-nsecs=${ nsecs }`);
      }
    }
    if (qs.length) {
      fieldName = `${ fieldName }?${ qs.join('&') }`;
    }
    if (content) {
      formData.set(fieldName, content, path != null ? encodeURIComponent(path) : undefined);
      const end = total + content.size;
      parts.push({
        name: path,
        start: total,
        end
      });
      total = end;
    } else if (path != null) {
      formData.set(fieldName, new File([''], encodeURIComponent(path), { type: 'application/x-directory' }));
    } else {
      throw new Error('path or content or both must be set');
    }
    index++;
  }
  return {
    total,
    parts,
    headers,
    body: formData
  };
}

/***/ }),

/***/ 67994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70963);
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2758);


async function* normaliseInput(input) {
  if (input === null || input === undefined) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
  }
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(input);
  if (cid) {
    yield toPin({ cid });
    return;
  }
  if (input instanceof String || typeof input === 'string') {
    yield toPin({ path: input });
    return;
  }
  if (input.cid != null || input.path != null) {
    return yield toPin(input);
  }
  if (Symbol.iterator in input) {
    const iterator = input[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
      return iterator;
    if (multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ cid: first.value });
      for (const cid of iterator) {
        yield toPin({ cid });
      }
      return;
    }
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value);
      for (const obj of iterator) {
        yield toPin(obj);
      }
      return;
    }
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
  }
  if (Symbol.asyncIterator in input) {
    const iterator = input[Symbol.asyncIterator]();
    const first = await iterator.next();
    if (first.done)
      return iterator;
    if (multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ cid: first.value });
      for await (const cid of iterator) {
        yield toPin({ cid });
      }
      return;
    }
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value);
      for await (const obj of iterator) {
        yield toPin(obj);
      }
      return;
    }
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
function toPin(input) {
  const path = input.cid || `${ input.path }`;
  if (!path) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: Please path either a CID or an IPFS path'), 'ERR_UNEXPECTED_INPUT');
  }
  const pin = {
    path,
    recursive: input.recursive !== false
  };
  if (input.metadata != null) {
    pin.metadata = input.metadata;
  }
  return pin;
}

/***/ }),

/***/ 71154:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ toUrlString)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13695);
/* harmony import */ var multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88544);


function toUrlString(url) {
  try {
    url = multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__(new multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr(url));
  } catch (err) {
  }
  url = url.toString();
  return url;
}

/***/ }),

/***/ 8695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tK": () => (/* binding */ parseMode),
  "Xu": () => (/* binding */ parseMtime)
});

// UNUSED EXPORTS: UnixFS

// EXTERNAL MODULE: ../../node_modules/.pnpm/err-code@3.0.1/node_modules/err-code/index.js
var err_code = __webpack_require__(70963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/protobufjs@6.11.2/node_modules/protobufjs/minimal.js
var minimal = __webpack_require__(6110);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-unixfs@6.0.6/node_modules/ipfs-unixfs/esm/src/unixfs.js

const $Reader = minimal.Reader, $Writer = minimal.Writer, $util = minimal.util;
const $root = minimal.roots["ipfs-unixfs"] || (minimal.roots["ipfs-unixfs"] = {});
const Data = $root.Data = (() => {
  function Data(p) {
    this.blocksizes = [];
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  Data.prototype.Type = 0;
  Data.prototype.Data = $util.newBuffer([]);
  Data.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.blocksizes = $util.emptyArray;
  Data.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.mode = 0;
  Data.prototype.mtime = null;
  Data.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int32(m.Type);
    if (m.Data != null && Object.hasOwnProperty.call(m, 'Data'))
      w.uint32(18).bytes(m.Data);
    if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize'))
      w.uint32(24).uint64(m.filesize);
    if (m.blocksizes != null && m.blocksizes.length) {
      for (var i = 0; i < m.blocksizes.length; ++i)
        w.uint32(32).uint64(m.blocksizes[i]);
    }
    if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType'))
      w.uint32(40).uint64(m.hashType);
    if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout'))
      w.uint32(48).uint64(m.fanout);
    if (m.mode != null && Object.hasOwnProperty.call(m, 'mode'))
      w.uint32(56).uint32(m.mode);
    if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime'))
      $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
    return w;
  };
  Data.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.Data();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.Type = r.int32();
        break;
      case 2:
        m.Data = r.bytes();
        break;
      case 3:
        m.filesize = r.uint64();
        break;
      case 4:
        if (!(m.blocksizes && m.blocksizes.length))
          m.blocksizes = [];
        if ((t & 7) === 2) {
          var c2 = r.uint32() + r.pos;
          while (r.pos < c2)
            m.blocksizes.push(r.uint64());
        } else
          m.blocksizes.push(r.uint64());
        break;
      case 5:
        m.hashType = r.uint64();
        break;
      case 6:
        m.fanout = r.uint64();
        break;
      case 7:
        m.mode = r.uint32();
        break;
      case 8:
        m.mtime = $root.UnixTime.decode(r, r.uint32());
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    if (!m.hasOwnProperty('Type'))
      throw $util.ProtocolError('missing required \'Type\'', { instance: m });
    return m;
  };
  Data.fromObject = function fromObject(d) {
    if (d instanceof $root.Data)
      return d;
    var m = new $root.Data();
    switch (d.Type) {
    case 'Raw':
    case 0:
      m.Type = 0;
      break;
    case 'Directory':
    case 1:
      m.Type = 1;
      break;
    case 'File':
    case 2:
      m.Type = 2;
      break;
    case 'Metadata':
    case 3:
      m.Type = 3;
      break;
    case 'Symlink':
    case 4:
      m.Type = 4;
      break;
    case 'HAMTShard':
    case 5:
      m.Type = 5;
      break;
    }
    if (d.Data != null) {
      if (typeof d.Data === 'string')
        $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);
      else if (d.Data.length)
        m.Data = d.Data;
    }
    if (d.filesize != null) {
      if ($util.Long)
        (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;
      else if (typeof d.filesize === 'string')
        m.filesize = parseInt(d.filesize, 10);
      else if (typeof d.filesize === 'number')
        m.filesize = d.filesize;
      else if (typeof d.filesize === 'object')
        m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
    }
    if (d.blocksizes) {
      if (!Array.isArray(d.blocksizes))
        throw TypeError('.Data.blocksizes: array expected');
      m.blocksizes = [];
      for (var i = 0; i < d.blocksizes.length; ++i) {
        if ($util.Long)
          (m.blocksizes[i] = $util.Long.fromValue(d.blocksizes[i])).unsigned = true;
        else if (typeof d.blocksizes[i] === 'string')
          m.blocksizes[i] = parseInt(d.blocksizes[i], 10);
        else if (typeof d.blocksizes[i] === 'number')
          m.blocksizes[i] = d.blocksizes[i];
        else if (typeof d.blocksizes[i] === 'object')
          m.blocksizes[i] = new $util.LongBits(d.blocksizes[i].low >>> 0, d.blocksizes[i].high >>> 0).toNumber(true);
      }
    }
    if (d.hashType != null) {
      if ($util.Long)
        (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;
      else if (typeof d.hashType === 'string')
        m.hashType = parseInt(d.hashType, 10);
      else if (typeof d.hashType === 'number')
        m.hashType = d.hashType;
      else if (typeof d.hashType === 'object')
        m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
    }
    if (d.fanout != null) {
      if ($util.Long)
        (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;
      else if (typeof d.fanout === 'string')
        m.fanout = parseInt(d.fanout, 10);
      else if (typeof d.fanout === 'number')
        m.fanout = d.fanout;
      else if (typeof d.fanout === 'object')
        m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
    }
    if (d.mode != null) {
      m.mode = d.mode >>> 0;
    }
    if (d.mtime != null) {
      if (typeof d.mtime !== 'object')
        throw TypeError('.Data.mtime: object expected');
      m.mtime = $root.UnixTime.fromObject(d.mtime);
    }
    return m;
  };
  Data.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.arrays || o.defaults) {
      d.blocksizes = [];
    }
    if (o.defaults) {
      d.Type = o.enums === String ? 'Raw' : 0;
      if (o.bytes === String)
        d.Data = '';
      else {
        d.Data = [];
        if (o.bytes !== Array)
          d.Data = $util.newBuffer(d.Data);
      }
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.filesize = o.longs === String ? '0' : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.hashType = o.longs === String ? '0' : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.fanout = o.longs === String ? '0' : 0;
      d.mode = 0;
      d.mtime = null;
    }
    if (m.Type != null && m.hasOwnProperty('Type')) {
      d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
    }
    if (m.Data != null && m.hasOwnProperty('Data')) {
      d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
    }
    if (m.filesize != null && m.hasOwnProperty('filesize')) {
      if (typeof m.filesize === 'number')
        d.filesize = o.longs === String ? String(m.filesize) : m.filesize;
      else
        d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
    }
    if (m.blocksizes && m.blocksizes.length) {
      d.blocksizes = [];
      for (var j = 0; j < m.blocksizes.length; ++j) {
        if (typeof m.blocksizes[j] === 'number')
          d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];
        else
          d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
      }
    }
    if (m.hashType != null && m.hasOwnProperty('hashType')) {
      if (typeof m.hashType === 'number')
        d.hashType = o.longs === String ? String(m.hashType) : m.hashType;
      else
        d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
    }
    if (m.fanout != null && m.hasOwnProperty('fanout')) {
      if (typeof m.fanout === 'number')
        d.fanout = o.longs === String ? String(m.fanout) : m.fanout;
      else
        d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
    }
    if (m.mode != null && m.hasOwnProperty('mode')) {
      d.mode = m.mode;
    }
    if (m.mtime != null && m.hasOwnProperty('mtime')) {
      d.mtime = $root.UnixTime.toObject(m.mtime, o);
    }
    return d;
  };
  Data.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  Data.DataType = function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = 'Raw'] = 0;
    values[valuesById[1] = 'Directory'] = 1;
    values[valuesById[2] = 'File'] = 2;
    values[valuesById[3] = 'Metadata'] = 3;
    values[valuesById[4] = 'Symlink'] = 4;
    values[valuesById[5] = 'HAMTShard'] = 5;
    return values;
  }();
  return Data;
})();
const UnixTime = $root.UnixTime = (() => {
  function UnixTime(p) {
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  UnixTime.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
  UnixTime.prototype.FractionalNanoseconds = 0;
  UnixTime.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int64(m.Seconds);
    if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, 'FractionalNanoseconds'))
      w.uint32(21).fixed32(m.FractionalNanoseconds);
    return w;
  };
  UnixTime.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.UnixTime();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.Seconds = r.int64();
        break;
      case 2:
        m.FractionalNanoseconds = r.fixed32();
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    if (!m.hasOwnProperty('Seconds'))
      throw $util.ProtocolError('missing required \'Seconds\'', { instance: m });
    return m;
  };
  UnixTime.fromObject = function fromObject(d) {
    if (d instanceof $root.UnixTime)
      return d;
    var m = new $root.UnixTime();
    if (d.Seconds != null) {
      if ($util.Long)
        (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;
      else if (typeof d.Seconds === 'string')
        m.Seconds = parseInt(d.Seconds, 10);
      else if (typeof d.Seconds === 'number')
        m.Seconds = d.Seconds;
      else if (typeof d.Seconds === 'object')
        m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
    }
    if (d.FractionalNanoseconds != null) {
      m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
    }
    return m;
  };
  UnixTime.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      if ($util.Long) {
        var n = new $util.Long(0, 0, false);
        d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.Seconds = o.longs === String ? '0' : 0;
      d.FractionalNanoseconds = 0;
    }
    if (m.Seconds != null && m.hasOwnProperty('Seconds')) {
      if (typeof m.Seconds === 'number')
        d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;
      else
        d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
    }
    if (m.FractionalNanoseconds != null && m.hasOwnProperty('FractionalNanoseconds')) {
      d.FractionalNanoseconds = m.FractionalNanoseconds;
    }
    return d;
  };
  UnixTime.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  return UnixTime;
})();
const Metadata = $root.Metadata = (() => {
  function Metadata(p) {
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  Metadata.prototype.MimeType = '';
  Metadata.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    if (m.MimeType != null && Object.hasOwnProperty.call(m, 'MimeType'))
      w.uint32(10).string(m.MimeType);
    return w;
  };
  Metadata.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.Metadata();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.MimeType = r.string();
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    return m;
  };
  Metadata.fromObject = function fromObject(d) {
    if (d instanceof $root.Metadata)
      return d;
    var m = new $root.Metadata();
    if (d.MimeType != null) {
      m.MimeType = String(d.MimeType);
    }
    return m;
  };
  Metadata.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      d.MimeType = '';
    }
    if (m.MimeType != null && m.hasOwnProperty('MimeType')) {
      d.MimeType = m.MimeType;
    }
    return d;
  };
  Metadata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, minimal.util.toJSONOptions);
  };
  return Metadata;
})();

;// CONCATENATED MODULE: ../../node_modules/.pnpm/ipfs-unixfs@6.0.6/node_modules/ipfs-unixfs/esm/src/index.js


const PBData = Data;
const types = (/* unused pure expression or super */ null && ([
  'raw',
  'directory',
  'file',
  'metadata',
  'symlink',
  'hamt-sharded-directory'
]));
const dirTypes = (/* unused pure expression or super */ null && ([
  'directory',
  'hamt-sharded-directory'
]));
const DEFAULT_FILE_MODE = parseInt('0644', 8);
const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);
function parseMode(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'number') {
    return mode & 4095;
  }
  mode = mode.toString();
  if (mode.substring(0, 1) === '0') {
    return parseInt(mode, 8) & 4095;
  }
  return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
  if (input == null) {
    return undefined;
  }
  let mtime;
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }
  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }
  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }
  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }
  return mtime;
}
class UnixFS {
  static unmarshal(marshaled) {
    const message = PBData.decode(marshaled);
    const decoded = PBData.toObject(message, {
      defaults: false,
      arrays: true,
      longs: Number,
      objects: false
    });
    const data = new UnixFS({
      type: types[decoded.Type],
      data: decoded.Data,
      blockSizes: decoded.blocksizes,
      mode: decoded.mode,
      mtime: decoded.mtime ? {
        secs: decoded.mtime.Seconds,
        nsecs: decoded.mtime.FractionalNanoseconds
      } : undefined
    });
    data._originalMode = decoded.mode || 0;
    return data;
  }
  constructor(options = { type: 'file' }) {
    const {type, data, blockSizes, hashType, fanout, mtime, mode} = options;
    if (type && !types.includes(type)) {
      throw errcode(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }
    this.type = type || 'file';
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes || [];
    this._originalMode = 0;
    this.mode = parseMode(mode);
    if (mtime) {
      this.mtime = parseMtime(mtime);
      if (this.mtime && !this.mtime.nsecs) {
        this.mtime.nsecs = 0;
      }
    }
  }
  set mode(mode) {
    this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    const parsedMode = parseMode(mode);
    if (parsedMode !== undefined) {
      this._mode = parsedMode;
    }
  }
  get mode() {
    return this._mode;
  }
  isDirectory() {
    return Boolean(this.type && dirTypes.includes(this.type));
  }
  addBlockSize(size) {
    this.blockSizes.push(size);
  }
  removeBlockSize(index) {
    this.blockSizes.splice(index, 1);
  }
  fileSize() {
    if (this.isDirectory()) {
      return 0;
    }
    let sum = 0;
    this.blockSizes.forEach(size => {
      sum += size;
    });
    if (this.data) {
      sum += this.data.length;
    }
    return sum;
  }
  marshal() {
    let type;
    switch (this.type) {
    case 'raw':
      type = PBData.DataType.Raw;
      break;
    case 'directory':
      type = PBData.DataType.Directory;
      break;
    case 'file':
      type = PBData.DataType.File;
      break;
    case 'metadata':
      type = PBData.DataType.Metadata;
      break;
    case 'symlink':
      type = PBData.DataType.Symlink;
      break;
    case 'hamt-sharded-directory':
      type = PBData.DataType.HAMTShard;
      break;
    default:
      throw errcode(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }
    let data = this.data;
    if (!this.data || !this.data.length) {
      data = undefined;
    }
    let mode;
    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);
      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = undefined;
      }
      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = undefined;
      }
    }
    let mtime;
    if (this.mtime != null) {
      const parsed = parseMtime(this.mtime);
      if (parsed) {
        mtime = {
          Seconds: parsed.secs,
          FractionalNanoseconds: parsed.nsecs
        };
        if (mtime.FractionalNanoseconds === 0) {
          delete mtime.FractionalNanoseconds;
        }
      }
    }
    const pbData = {
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? undefined : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    };
    return PBData.encode(pbData).finish();
  }
}


/***/ }),

/***/ 31061:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80091);
/**
 * Thin ESM wrapper for CJS named exports.
 *
 * Ref: https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 47124:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let durationRE = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig


/**
 * conversion ratios
 */

parse.nanosecond =
parse.ns = 1 / 1e6

parse['µs'] =
parse['μs'] =
parse.us =
parse.microsecond = 1 / 1e3

parse.millisecond =
parse.ms =
parse[''] = 1

parse.second =
parse.sec =
parse.s = parse.ms * 1000

parse.minute =
parse.min =
parse.m = parse.s * 60

parse.hour =
parse.hr =
parse.h = parse.m * 60

parse.day =
parse.d = parse.h * 24

parse.week =
parse.wk =
parse.w = parse.d * 7

parse.month =
parse.b =
parse.d * (365.25 / 12)

parse.year =
parse.yr =
parse.y = parse.d * 365.25

/**
 * convert `str` to ms
 *
 * @param {String} str
 * @param {String} format
 * @return {Number}
 */

function parse(str='', format='ms'){
  var result = null
  // ignore commas/placeholders
  str = (str+'').replace(/(\d)[,_](\d)/g, '$1$2')
  str.replace(durationRE, function(_, n, units){
    units = unitRatio(units)
    if (units) result = (result || 0) + parseFloat(n, 10) * units
  })

  return result && (result / (unitRatio(format) || 1))
}

function unitRatio(str) {
  return parse[str] || parse[str.toLowerCase().replace(/s$/, '')]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ 84871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": () => (/* binding */ concat)
/* harmony export */ });
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = new Uint8Array(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

/***/ }),

/***/ 37488:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ 31216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96462);

function fromString(string, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}

/***/ }),

/***/ 90453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96462);

function toString(array, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.encoder.encode(array).substring(1);
}

/***/ }),

/***/ 96462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19261);

function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);

/***/ })

}]);