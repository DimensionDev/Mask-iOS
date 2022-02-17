/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const event_iterator_1 = __webpack_require__(1091);
__webpack_unused_export__ = event_iterator_1.EventIterator;
function subscribe(event, options, evOptions) {
    return new event_iterator_1.EventIterator(({ push }) => {
        this.addEventListener(event, push, options);
        return () => this.removeEventListener(event, push, options);
    }, evOptions);
}
__webpack_unused_export__ = subscribe;
__webpack_unused_export__ = event_iterator_1.EventIterator;


/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class EventQueue {
    constructor() {
        this.pullQueue = [];
        this.pushQueue = [];
        this.eventHandlers = {};
        this.isPaused = false;
        this.isStopped = false;
    }
    push(value) {
        if (this.isStopped)
            return;
        const resolution = { value, done: false };
        if (this.pullQueue.length) {
            const placeholder = this.pullQueue.shift();
            if (placeholder)
                placeholder.resolve(resolution);
        }
        else {
            this.pushQueue.push(Promise.resolve(resolution));
            if (this.highWaterMark !== undefined &&
                this.pushQueue.length >= this.highWaterMark &&
                !this.isPaused) {
                this.isPaused = true;
                if (this.eventHandlers.highWater) {
                    this.eventHandlers.highWater();
                }
                else if (console) {
                    console.warn(`EventIterator queue reached ${this.pushQueue.length} items`);
                }
            }
        }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        for (const placeholder of this.pullQueue) {
            placeholder.resolve({ value: undefined, done: true });
        }
        this.pullQueue.length = 0;
    }
    fail(error) {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        if (this.pullQueue.length) {
            for (const placeholder of this.pullQueue) {
                placeholder.reject(error);
            }
            this.pullQueue.length = 0;
        }
        else {
            const rejection = Promise.reject(error);
            /* Attach error handler to avoid leaking an unhandled promise rejection. */
            rejection.catch(() => { });
            this.pushQueue.push(rejection);
        }
    }
    remove() {
        Promise.resolve().then(() => {
            if (this.removeCallback)
                this.removeCallback();
        });
    }
    [Symbol.asyncIterator]() {
        return {
            next: (value) => {
                const result = this.pushQueue.shift();
                if (result) {
                    if (this.lowWaterMark !== undefined &&
                        this.pushQueue.length <= this.lowWaterMark &&
                        this.isPaused) {
                        this.isPaused = false;
                        if (this.eventHandlers.lowWater) {
                            this.eventHandlers.lowWater();
                        }
                    }
                    return result;
                }
                else if (this.isStopped) {
                    return Promise.resolve({ value: undefined, done: true });
                }
                else {
                    return new Promise((resolve, reject) => {
                        this.pullQueue.push({ resolve, reject });
                    });
                }
            },
            return: () => {
                this.isStopped = true;
                this.pushQueue.length = 0;
                this.remove();
                return Promise.resolve({ value: undefined, done: true });
            },
        };
    }
}
class EventIterator {
    constructor(listen, { highWaterMark = 100, lowWaterMark = 1 } = {}) {
        const queue = new EventQueue();
        queue.highWaterMark = highWaterMark;
        queue.lowWaterMark = lowWaterMark;
        queue.removeCallback =
            listen({
                push: value => queue.push(value),
                stop: () => queue.stop(),
                fail: error => queue.fail(error),
                on: (event, fn) => {
                    queue.eventHandlers[event] = fn;
                },
            }) || (() => { });
        this[Symbol.asyncIterator] = () => queue[Symbol.asyncIterator]();
        Object.freeze(this);
    }
}
exports.EventIterator = EventIterator;
exports.default = EventIterator;


/***/ }),

/***/ 63897:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 63897;
module.exports = webpackEmptyContext;

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

/***/ 31608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createNewPoll": () => (/* binding */ createNewPoll),
  "getAllExistingPolls": () => (/* binding */ getAllExistingPolls),
  "getPollByKey": () => (/* binding */ getPollByKey),
  "vote": () => (/* binding */ vote)
});

// NAMESPACE OBJECT: ./src/plugins/Polls/Services.ts
var Services_namespaceObject = {};
__webpack_require__.r(Services_namespaceObject);
__webpack_require__.d(Services_namespaceObject, {
  "createNewPoll": () => (createNewPoll),
  "getAllExistingPolls": () => (getAllExistingPolls),
  "getPollByKey": () => (getPollByKey),
  "vote": () => (vote)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/setup.worker.ts
if (typeof self !== 'undefined') {
    /**
     * Workaround: Webpack child compiler doesn't inherit plugins but inherit loaders.
     * That make loaders/plugins settings mismatch and cause runtime errors.
     */ // @ts-ignore
    self.$RefreshReg$ = function() {
    };
    // @ts-ignore
    self.$RefreshSig$ = function() {
        return function(type) {
            return type;
        };
    };
}
setTimeout(()=>{
    self.postMessage('Alive');
}, 10);


;// CONCATENATED MODULE: ./src/network/gun/gun-worker.patch.ts
// Gun need a "window" available

// @ts-ignore
globalThis.window = globalThis;

// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/gun.js
var gun = __webpack_require__(66513);
var gun_default = /*#__PURE__*/__webpack_require__.n(gun);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/sea.js
var sea = __webpack_require__(45044);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/lib/radix.js
var radix = __webpack_require__(6003);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/lib/radisk.js
var radisk = __webpack_require__(61050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/lib/store.js
var store = __webpack_require__(49997);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/lib/rindexed.js
var rindexed = __webpack_require__(30825);
;// CONCATENATED MODULE: ./src/network/gun-servers.ts
const gunServers = [
    'https://gun.r2d2.to/gun'
];

// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.520/node_modules/gun/browser.js
var browser = __webpack_require__(53481);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// CONCATENATED MODULE: ./src/utils/memoize.ts

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,lodash.memoize)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}

;// CONCATENATED MODULE: ./src/network/gun/version.2/hash.ts



/**
 * @param version current payload version
 * @param postIV Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 * @param networkHint The network specific string
 */ async function hash_calculatePostKeyPartition(version, postIV, partitionByCryptoKey, networkHint) {
    const postHash = await hash_hashPostSalt(postIV, networkHint);
    // In version > -39, we will use stable hash to prevent unstable result for key hashing
    const keyHash = await (version <= -39 ? hash_hashCryptoKeyUnstable : hash_hashCryptoKey)(partitionByCryptoKey);
    return {
        postHash,
        keyHash
    };
}
const hash_hashPostSalt = memoizePromise(async function(postSalt, networkHint) {
    const hashPair = `9283464d-ee4e-4e8d-a7f3-cf392a88133f`;
    const N = 2;
    const hash = await browser_default().SEA.work(postSalt, hashPair);
    return networkHint + hash.substring(0, N);
}, (x, y)=>x + y
);
/**
 * @param key - The key need to be hashed
 */ const hash_hashCryptoKeyUnstable = memoizePromise(async function(key) {
    const hashPair = `10198a2f-205f-45a6-9987-3488c80113d0`;
    const N = 2;
    const jwk = JSON.stringify(key);
    const hash = await browser_default().SEA.work(jwk, hashPair);
    return hash.substring(0, N);
}, undefined);
/**
 * @param key - The key need to be hashed
 */ const hash_hashCryptoKey = memoizePromise(async function(key) {
    const hashPair = `10198a2f-205f-45a6-9987-3488c80113d0`;
    const N = 2;
    const jwk = key;
    if (!jwk.x || !jwk.y) throw new Error('Invalid key');
    const hash = await browser_default().SEA.work(jwk.x + jwk.y, hashPair);
    return hash.substring(0, N);
}, undefined);

// EXTERNAL MODULE: ../../node_modules/.pnpm/event-iterator@2.0.0/node_modules/event-iterator/lib/dom.js
var dom = __webpack_require__(37313);
;// CONCATENATED MODULE: ./src/network/gun/version.2/post.ts



/**
 * Query all possible keys stored on the gun
 * @param version current payload version
 * @param postIV Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 */ async function queryPostKeysOnGun2(version, postIV, partitionByCryptoKey, networkHint) {
    const { postHash , keyHash  } = await calculatePostKeyPartition(version, postIV, partitionByCryptoKey, networkHint);
    // ? here we get the internal node names of gun2[postHash][keyHash]
    // ? where gun2[postHash][keyHash] is a list
    const internalNodes = await gun2.get(postHash)// @ts-ignore
    .get(keyHash).then() || {
    };
    // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
    const internalKeys = Object.keys(internalNodes).filter((x)=>x !== '_'
    );
    // ? In this step we get all keys in this category (gun2[postHash][keyHash])
    const resultPromise = internalKeys.map((key)=>gun2.get(key).then()
    );
    const result = await Promise.all(resultPromise);
    console.info(`await gun2[${postHash}][${keyHash}]\n`, result);
    return result;
}
/**
 * Listen on the changes of all possible keys on the gun
 * @param version current payload version
 * @param postSalt Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 */ async function* subscribePostKeysOnGun2(version, postSalt, partitionByCryptoKey, networkHint) {
    const iter = new EventIterator(({ push: callback  })=>{
        hashPostSalt(postSalt, networkHint).then((postHash)=>{
            (version <= -39 ? hashCryptoKeyUnstable : hashCryptoKey)(partitionByCryptoKey).then((keyHash)=>{
                gun2.get(postHash)// @ts-ignore
                .get(keyHash).map()// @ts-ignore
                .on((data)=>{
                    // @ts-ignore
                    const { _ , ...data2 } = Object.assign({
                    }, data);
                    callback(data2);
                });
            });
        });
    });
    yield* iter;
}
/**
 * Publish post keys on the gun
 * @param version current payload
 * @param postSalt Post iv
 * @param receiversKeys Keys needs to publish
 */ async function publishPostAESKeyOnGun2(version, postSalt, networkHint, receiversKeys) {
    const postHash = await hashPostSalt(postSalt, networkHint);
    // Store AES key to gun
    receiversKeys.forEach(async ({ aesKey , receiverKey  })=>{
        const keyHash = await (version <= -39 ? hashCryptoKeyUnstable : hashCryptoKey)(receiverKey);
        console.log(`gun[${postHash}][${keyHash}].push(`, aesKey, `)`);
        gun2.get(postHash)// @ts-ignore
        .get(keyHash)// @ts-ignore
        .set(aesKey);
    });
}

;// CONCATENATED MODULE: ./src/network/gun/version.2/index.ts








const version_2_gun2 = new (gun_default())({
    peers: gunServers,
    localStorage: false,
    radisk: true
});
version_2_gun2.opt({
    retry: Infinity
});

;// CONCATENATED MODULE: ./src/plugins/Polls/constants.ts
const pluginName = 'Poll';
const identifier = 'com.maskbook.poll';
const POLL_META_KEY_1 = 'com.maskbook.poll:1';
const PollGunServer = 'com.maskbook.plugin.polls';
const PLUGIN_META_KEY = 'com.maskbook.poll:1';
const PLUGIN_ID = 'com.maskbook.poll';
const PLUGIN_NAME = 'Poll';
const PLUGIN_ICON = '🗳️';
const PLUGIN_DESCRIPTION = 'Easily create a Poll for reciving public votes.';

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@5.1.0/node_modules/async-call-rpc/utils/web/worker.js
var worker = __webpack_require__(86050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@5.1.0/node_modules/async-call-rpc/out/full.js
var full = __webpack_require__(42842);
;// CONCATENATED MODULE: ./src/plugins/Polls/Services.ts







setTimeout(()=>{
    (0,full.AsyncCall)(Services_namespaceObject, {
        channel: new worker/* WorkerChannel */.i()
    });
}, 0);
const PollGun = version_2_gun2.get(PollGunServer);
const defaultPoll = {
    key: '',
    sender: '',
    question: '',
    start_time: Date.now(),
    end_time: Date.now(),
    options: [
        '',
        ''
    ],
    results: [
        0,
        0
    ]
};
async function createNewPoll(poll) {
    const { id , options , start_time , end_time  } = poll;
    const results = Array.from({
        length: options.length
    }).fill(0);
    const resultsObj = {
        ...results
    };
    const optionsObj = {
        ...options
    };
    const poll_item = {
        ...poll,
        results: resultsObj,
        options: optionsObj,
        start_time: start_time.getTime(),
        end_time: end_time.getTime()
    };
    // @ts-ignore
    const key = `${id}_${Gun.time.is()}_${Gun.text.random(4)}`;
    await PollGun// @ts-ignore
    .get(key)// @ts-ignore
    .put(poll_item).then();
    return poll;
}
async function vote(props) {
    const { poll , index  } = props;
    let results = [
        0,
        0
    ];
    PollGun// @ts-ignore
    .get(poll.key)// @ts-ignore
    .get('results').on((item)=>{
        // @ts-ignore
        delete item._;
        results = Object.values(item);
    });
    const count = results[index] + 1;
    const newResults = {
        ...results,
        [index]: count
    };
    PollGun// @ts-ignore
    .get(poll.key)// @ts-ignore
    .get('results')// @ts-ignore
    .put(newResults);
    return {
        ...poll,
        results: Object.values(newResults)
    };
}
async function getPollByKey(props) {
    const keys = props.key.split('_');
    let poll = {
        ...defaultPoll,
        key: props.key,
        id: (0,lodash.first)(keys)
    };
    PollGun// @ts-ignore
    .get(props.key)// @ts-ignore
    .on((data)=>{
        poll = {
            ...poll,
            sender: data.sender,
            question: data.question,
            start_time: data.start_time,
            end_time: data.end_time
        };
        if (data.options) {
            PollGun// @ts-ignore
            .get(props.key)// @ts-ignore
            .get('options').on((options)=>{
                // @ts-ignore
                delete options._;
                poll.options = Object.values(options);
            });
        }
        if (data.results) {
            PollGun// @ts-ignore
            .get(props.key)// @ts-ignore
            .get('results').on((results)=>{
                // @ts-ignore
                delete results._;
                poll.results = Object.values(results);
            });
        }
    });
    return poll;
}
async function getAllExistingPolls() {
    const polls = [];
    PollGun.map().on(async (data, key)=>{
        const poll = await getPollByKey({
            key
        });
        polls.push(poll);
    });
    return polls;
}


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
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [3693,7913,9227,4462,4477], () => (__webpack_require__(31608)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
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
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 4462) return "js/chunk.npm.text-encoding.js";
/******/ 			if (chunkId === 4477) return "js/chunk.npm.gun.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"3693":"npm.async-call-rpc","7913":"npm.lodash","9227":"npm.buffer"}[chunkId] + ".js";
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			4554: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([3693,7913,9227,4462,4477].map(__webpack_require__.e, __webpack_require__)).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;