"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6400],{

/***/ 4507:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 37508:
/***/ (function(module) {



(function(root) {
    const MAX_VALUE = 0x7fffffff;

    // The SHA256 and PBKDF2 implementation are from scrypt-async-js:
    // See: https://github.com/dchest/scrypt-async-js
    function SHA256(m) {
        const K = new Uint32Array([
           0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
           0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
           0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
           0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
           0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
           0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
           0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
           0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
           0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
           0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
           0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
           0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
           0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
       ]);

        let h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
        let h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
        const w = new Uint32Array(64);

        function blocks(p) {
            let off = 0, len = p.length;
            while (len >= 64) {
                let a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7, u, i, j, t1, t2;

                for (i = 0; i < 16; i++) {
                    j = off + i*4;
                    w[i] = ((p[j] & 0xff)<<24) | ((p[j+1] & 0xff)<<16) |
                    ((p[j+2] & 0xff)<<8) | (p[j+3] & 0xff);
                }

                for (i = 16; i < 64; i++) {
                    u = w[i-2];
                    t1 = ((u>>>17) | (u<<(32-17))) ^ ((u>>>19) | (u<<(32-19))) ^ (u>>>10);

                    u = w[i-15];
                    t2 = ((u>>>7) | (u<<(32-7))) ^ ((u>>>18) | (u<<(32-18))) ^ (u>>>3);

                    w[i] = (((t1 + w[i-7]) | 0) + ((t2 + w[i-16]) | 0)) | 0;
                }

                for (i = 0; i < 64; i++) {
                    t1 = ((((((e>>>6) | (e<<(32-6))) ^ ((e>>>11) | (e<<(32-11))) ^
                             ((e>>>25) | (e<<(32-25)))) + ((e & f) ^ (~e & g))) | 0) +
                          ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;

                    t2 = ((((a>>>2) | (a<<(32-2))) ^ ((a>>>13) | (a<<(32-13))) ^
                           ((a>>>22) | (a<<(32-22)))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;

                    h = g;
                    g = f;
                    f = e;
                    e = (d + t1) | 0;
                    d = c;
                    c = b;
                    b = a;
                    a = (t1 + t2) | 0;
                }

                h0 = (h0 + a) | 0;
                h1 = (h1 + b) | 0;
                h2 = (h2 + c) | 0;
                h3 = (h3 + d) | 0;
                h4 = (h4 + e) | 0;
                h5 = (h5 + f) | 0;
                h6 = (h6 + g) | 0;
                h7 = (h7 + h) | 0;

                off += 64;
                len -= 64;
            }
        }

        blocks(m);

        let i, bytesLeft = m.length % 64,
        bitLenHi = (m.length / 0x20000000) | 0,
        bitLenLo = m.length << 3,
        numZeros = (bytesLeft < 56) ? 56 : 120,
        p = m.slice(m.length - bytesLeft, m.length);

        p.push(0x80);
        for (i = bytesLeft + 1; i < numZeros; i++) { p.push(0); }
        p.push((bitLenHi >>> 24) & 0xff);
        p.push((bitLenHi >>> 16) & 0xff);
        p.push((bitLenHi >>> 8)  & 0xff);
        p.push((bitLenHi >>> 0)  & 0xff);
        p.push((bitLenLo >>> 24) & 0xff);
        p.push((bitLenLo >>> 16) & 0xff);
        p.push((bitLenLo >>> 8)  & 0xff);
        p.push((bitLenLo >>> 0)  & 0xff);

        blocks(p);

        return [
            (h0 >>> 24) & 0xff, (h0 >>> 16) & 0xff, (h0 >>> 8) & 0xff, (h0 >>> 0) & 0xff,
            (h1 >>> 24) & 0xff, (h1 >>> 16) & 0xff, (h1 >>> 8) & 0xff, (h1 >>> 0) & 0xff,
            (h2 >>> 24) & 0xff, (h2 >>> 16) & 0xff, (h2 >>> 8) & 0xff, (h2 >>> 0) & 0xff,
            (h3 >>> 24) & 0xff, (h3 >>> 16) & 0xff, (h3 >>> 8) & 0xff, (h3 >>> 0) & 0xff,
            (h4 >>> 24) & 0xff, (h4 >>> 16) & 0xff, (h4 >>> 8) & 0xff, (h4 >>> 0) & 0xff,
            (h5 >>> 24) & 0xff, (h5 >>> 16) & 0xff, (h5 >>> 8) & 0xff, (h5 >>> 0) & 0xff,
            (h6 >>> 24) & 0xff, (h6 >>> 16) & 0xff, (h6 >>> 8) & 0xff, (h6 >>> 0) & 0xff,
            (h7 >>> 24) & 0xff, (h7 >>> 16) & 0xff, (h7 >>> 8) & 0xff, (h7 >>> 0) & 0xff
        ];
    }

    function PBKDF2_HMAC_SHA256_OneIter(password, salt, dkLen) {
        // compress password if it's longer than hash block length
        password = (password.length <= 64) ? password : SHA256(password);

        const innerLen = 64 + salt.length + 4;
        const inner = new Array(innerLen);
        const outerKey = new Array(64);

        let i;
        let dk = [];

        // inner = (password ^ ipad) || salt || counter
        for (i = 0; i < 64; i++) { inner[i] = 0x36; }
        for (i = 0; i < password.length; i++) { inner[i] ^= password[i]; }
        for (i = 0; i < salt.length; i++) { inner[64 + i] = salt[i]; }
        for (i = innerLen - 4; i < innerLen; i++) { inner[i] = 0; }

        // outerKey = password ^ opad
        for (i = 0; i < 64; i++) outerKey[i] = 0x5c;
        for (i = 0; i < password.length; i++) outerKey[i] ^= password[i];

        // increments counter inside inner
        function incrementCounter() {
            for (let i = innerLen - 1; i >= innerLen - 4; i--) {
                inner[i]++;
                if (inner[i] <= 0xff) return;
                inner[i] = 0;
            }
        }

        // output blocks = SHA256(outerKey || SHA256(inner)) ...
        while (dkLen >= 32) {
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))));
            dkLen -= 32;
        }
        if (dkLen > 0) {
            incrementCounter();
            dk = dk.concat(SHA256(outerKey.concat(SHA256(inner))).slice(0, dkLen));
        }

        return dk;
    }

    // The following is an adaptation of scryptsy
    // See: https://www.npmjs.com/package/scryptsy
    function blockmix_salsa8(BY, Yi, r, x, _X) {
        let i;

        arraycopy(BY, (2 * r - 1) * 16, _X, 0, 16);
        for (i = 0; i < 2 * r; i++) {
            blockxor(BY, i * 16, _X, 16);
            salsa20_8(_X, x);
            arraycopy(_X, 0, BY, Yi + (i * 16), 16);
        }

        for (i = 0; i < r; i++) {
            arraycopy(BY, Yi + (i * 2) * 16, BY, (i * 16), 16);
        }

        for (i = 0; i < r; i++) {
            arraycopy(BY, Yi + (i * 2 + 1) * 16, BY, (i + r) * 16, 16);
        }
    }

    function R(a, b) {
        return (a << b) | (a >>> (32 - b));
    }

    function salsa20_8(B, x) {
        arraycopy(B, 0, x, 0, 16);

        for (let i = 8; i > 0; i -= 2) {
            x[ 4] ^= R(x[ 0] + x[12], 7);
            x[ 8] ^= R(x[ 4] + x[ 0], 9);
            x[12] ^= R(x[ 8] + x[ 4], 13);
            x[ 0] ^= R(x[12] + x[ 8], 18);
            x[ 9] ^= R(x[ 5] + x[ 1], 7);
            x[13] ^= R(x[ 9] + x[ 5], 9);
            x[ 1] ^= R(x[13] + x[ 9], 13);
            x[ 5] ^= R(x[ 1] + x[13], 18);
            x[14] ^= R(x[10] + x[ 6], 7);
            x[ 2] ^= R(x[14] + x[10], 9);
            x[ 6] ^= R(x[ 2] + x[14], 13);
            x[10] ^= R(x[ 6] + x[ 2], 18);
            x[ 3] ^= R(x[15] + x[11], 7);
            x[ 7] ^= R(x[ 3] + x[15], 9);
            x[11] ^= R(x[ 7] + x[ 3], 13);
            x[15] ^= R(x[11] + x[ 7], 18);
            x[ 1] ^= R(x[ 0] + x[ 3], 7);
            x[ 2] ^= R(x[ 1] + x[ 0], 9);
            x[ 3] ^= R(x[ 2] + x[ 1], 13);
            x[ 0] ^= R(x[ 3] + x[ 2], 18);
            x[ 6] ^= R(x[ 5] + x[ 4], 7);
            x[ 7] ^= R(x[ 6] + x[ 5], 9);
            x[ 4] ^= R(x[ 7] + x[ 6], 13);
            x[ 5] ^= R(x[ 4] + x[ 7], 18);
            x[11] ^= R(x[10] + x[ 9], 7);
            x[ 8] ^= R(x[11] + x[10], 9);
            x[ 9] ^= R(x[ 8] + x[11], 13);
            x[10] ^= R(x[ 9] + x[ 8], 18);
            x[12] ^= R(x[15] + x[14], 7);
            x[13] ^= R(x[12] + x[15], 9);
            x[14] ^= R(x[13] + x[12], 13);
            x[15] ^= R(x[14] + x[13], 18);
        }

        for (let i = 0; i < 16; ++i) {
            B[i] += x[i];
        }
    }

    // naive approach... going back to loop unrolling may yield additional performance
    function blockxor(S, Si, D, len) {
        for (let i = 0; i < len; i++) {
            D[i] ^= S[Si + i]
        }
    }

    function arraycopy(src, srcPos, dest, destPos, length) {
        while (length--) {
            dest[destPos++] = src[srcPos++];
        }
    }

    function checkBufferish(o) {
        if (!o || typeof(o.length) !== 'number') { return false; }

        for (let i = 0; i < o.length; i++) {
            const v = o[i];
            if (typeof(v) !== 'number' || v % 1 || v < 0 || v >= 256) {
                return false;
            }
        }

        return true;
    }

    function ensureInteger(value, name) {
        if (typeof(value) !== "number" || (value % 1)) { throw new Error('invalid ' + name); }
        return value;
    }

    // N = Cpu cost, r = Memory cost, p = parallelization cost
    // callback(error, progress, key)
    function _scrypt(password, salt, N, r, p, dkLen, callback) {

        N = ensureInteger(N, 'N');
        r = ensureInteger(r, 'r');
        p = ensureInteger(p, 'p');

        dkLen = ensureInteger(dkLen, 'dkLen');

        if (N === 0 || (N & (N - 1)) !== 0) { throw new Error('N must be power of 2'); }

        if (N > MAX_VALUE / 128 / r) { throw new Error('N too large'); }
        if (r > MAX_VALUE / 128 / p) { throw new Error('r too large'); }

        if (!checkBufferish(password)) {
            throw new Error('password must be an array or buffer');
        }
        password = Array.prototype.slice.call(password);

        if (!checkBufferish(salt)) {
            throw new Error('salt must be an array or buffer');
        }
        salt = Array.prototype.slice.call(salt);

        let b = PBKDF2_HMAC_SHA256_OneIter(password, salt, p * 128 * r);
        const B = new Uint32Array(p * 32 * r)
        for (let i = 0; i < B.length; i++) {
            const j = i * 4;
            B[i] = ((b[j + 3] & 0xff) << 24) |
                   ((b[j + 2] & 0xff) << 16) |
                   ((b[j + 1] & 0xff) << 8) |
                   ((b[j + 0] & 0xff) << 0);
        }

        const XY = new Uint32Array(64 * r);
        const V = new Uint32Array(32 * r * N);

        const Yi = 32 * r;

        // scratch space
        const x = new Uint32Array(16);       // salsa20_8
        const _X = new Uint32Array(16);      // blockmix_salsa8

        const totalOps = p * N * 2;
        let currentOp = 0;
        let lastPercent10 = null;

        // Set this to true to abandon the scrypt on the next step
        let stop = false;

        // State information
        let state = 0;
        let i0 = 0, i1;
        let Bi;

        // How many blockmix_salsa8 can we do per step?
        const limit = callback ? parseInt(1000 / r): 0xffffffff;

        // Trick from scrypt-async; if there is a setImmediate shim in place, use it
        const nextTick = (typeof(setImmediate) !== 'undefined') ? setImmediate : setTimeout;

        // This is really all I changed; making scryptsy a state machine so we occasionally
        // stop and give other evnts on the evnt loop a chance to run. ~RicMoo
        const incrementalSMix = function() {
            if (stop) {
                return callback(new Error('cancelled'), currentOp / totalOps);
            }

            let steps;

            switch (state) {
                case 0:
                    // for (var i = 0; i < p; i++)...
                    Bi = i0 * 32 * r;

                    arraycopy(B, Bi, XY, 0, Yi);                       // ROMix - 1

                    state = 1;                                         // Move to ROMix 2
                    i1 = 0;

                    // Fall through

                case 1:

                    // Run up to 1000 steps of the first inner smix loop
                    steps = N - i1;
                    if (steps > limit) { steps = limit; }
                    for (let i = 0; i < steps; i++) {                  // ROMix - 2
                        arraycopy(XY, 0, V, (i1 + i) * Yi, Yi)         // ROMix - 3
                        blockmix_salsa8(XY, Yi, r, x, _X);             // ROMix - 4
                    }

                    // for (var i = 0; i < N; i++)
                    i1 += steps;
                    currentOp += steps;

                    if (callback) {
                        // Call the callback with the progress (optionally stopping us)
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) { break; }
                            lastPercent10 = percent10;
                        }
                    }

                    if (i1 < N) { break; }

                    i1 = 0;                                          // Move to ROMix 6
                    state = 2;

                    // Fall through

                case 2:

                    // Run up to 1000 steps of the second inner smix loop
                    steps = N - i1;
                    if (steps > limit) { steps = limit; }
                    for (let i = 0; i < steps; i++) {                // ROMix - 6
                        const offset = (2 * r - 1) * 16;             // ROMix - 7
                        const j = XY[offset] & (N - 1);
                        blockxor(V, j * Yi, XY, Yi);                 // ROMix - 8 (inner)
                        blockmix_salsa8(XY, Yi, r, x, _X);           // ROMix - 9 (outer)
                    }

                    // for (var i = 0; i < N; i++)...
                    i1 += steps;
                    currentOp += steps;

                    // Call the callback with the progress (optionally stopping us)
                    if (callback) {
                        const percent10 = parseInt(1000 * currentOp / totalOps);
                        if (percent10 !== lastPercent10) {
                            stop = callback(null, currentOp / totalOps);
                            if (stop) { break; }
                            lastPercent10 = percent10;
                        }
                    }

                    if (i1 < N) { break; }

                    arraycopy(XY, 0, B, Bi, Yi);                     // ROMix - 10

                    // for (var i = 0; i < p; i++)...
                    i0++;
                    if (i0 < p) {
                        state = 0;
                        break;
                    }

                    b = [];
                    for (let i = 0; i < B.length; i++) {
                        b.push((B[i] >>  0) & 0xff);
                        b.push((B[i] >>  8) & 0xff);
                        b.push((B[i] >> 16) & 0xff);
                        b.push((B[i] >> 24) & 0xff);
                    }

                    const derivedKey = PBKDF2_HMAC_SHA256_OneIter(password, b, dkLen);

                    // Send the result to the callback
                    if (callback) { callback(null, 1.0, derivedKey); }

                    // Done; don't break (which would reschedule)
                    return derivedKey;
            }

            // Schedule the next steps
            if (callback) { nextTick(incrementalSMix); }
        }

        // Run the smix state machine until completion
        if (!callback) {
            while (true) {
                const derivedKey = incrementalSMix();
                if (derivedKey != undefined) { return derivedKey; }
            }
        }

        // Bootstrap the async incremental smix
        incrementalSMix();
    }

    const lib = {
        scrypt: function(password, salt, N, r, p, dkLen, progressCallback) {
            return new Promise(function(resolve, reject) {
                let lastProgress = 0;
                if (progressCallback) { progressCallback(0); }
                _scrypt(password, salt, N, r, p, dkLen, function(error, progress, key) {
                    if (error) {
                        reject(error);
                    } else if (key) {
                        if (progressCallback && lastProgress !== 1) {
                            progressCallback(1);
                        }
                        resolve(new Uint8Array(key));
                    } else if (progressCallback && progress !== lastProgress) {
                        lastProgress = progress;
                        return progressCallback(progress);
                    }
                });
            });
        },
        syncScrypt: function(password, salt, N, r, p, dkLen) {
            return new Uint8Array(_scrypt(password, salt, N, r, p, dkLen));
        }
    };

    // node.js
    if (true) {
       module.exports = lib;

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
    } else {}

})(this);


/***/ }),

/***/ 89650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vU": () => (/* reexport */ flags/* Flags */.vU),
  "uU": () => (/* reexport */ kv_storage/* InMemoryStorages */.uU),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "_H": () => (/* reexport */ kv_storage/* PersistentStorages */._H),
  "FM": () => (/* reexport */ resolveTCOLink),
  "dH": () => (/* reexport */ download/* saveFileFromBuffer */.d),
  "rs": () => (/* reexport */ download/* saveFileFromUrl */.r)
});

// UNUSED EXPORTS: isAndroidApp, is_iOSApp

// EXTERNAL MODULE: ./shared/messages.ts
var messages = __webpack_require__(71054);
// EXTERNAL MODULE: ./shared/flags.ts
var flags = __webpack_require__(54993);
// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(30377);
// EXTERNAL MODULE: ./shared/helpers/download.ts
var download = __webpack_require__(73195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
;// CONCATENATED MODULE: ./shared/helpers/resolve-t.co.ts

const cache = new Map();
async function resolver(u) {
    var ref;
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const url = (ref = text.match(/URL=(.+).><\/noscript/)) === null || ref === void 0 ? void 0 : ref[1];
    if (url) cache.set(u, url);
    return url !== null && url !== void 0 ? url : null;
}
/** Resolve a https://t.co/ link to it's real address. */ const resolveTCOLink = (0,esm/* memoizePromise */.J3)(resolver, (x)=>x
);

;// CONCATENATED MODULE: ./shared/index.ts







/***/ }),

/***/ 30377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71054);


const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {})
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {})
};


/***/ }),

/***/ 8267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress)
/* harmony export */ });
/* unused harmony export Services */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
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
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6316), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(2908), __webpack_require__.e(3723), __webpack_require__.e(7926), __webpack_require__.e(1372), __webpack_require__.e(3211)]).then(__webpack_require__.bind(__webpack_require__, 53211))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 49639))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 64157))
    , 'Welcome'),
    Helper: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(3611)]).then(__webpack_require__.bind(__webpack_require__, 71259))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(3611)]).then(__webpack_require__.bind(__webpack_require__, 70427))
    , 'Ethereum'),
    SocialNetwork: add(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(1638), __webpack_require__.e(7810)]).then(__webpack_require__.bind(__webpack_require__, 67810))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 31270))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 396).then(__webpack_require__.bind(__webpack_require__, 396))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6316), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(2908), __webpack_require__.e(3723), __webpack_require__.e(7926), __webpack_require__.e(1372), __webpack_require__.e(4245)]).then(__webpack_require__.bind(__webpack_require__, 74245))
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

/***/ 88671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uu": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.Uu),
/* harmony export */   "UB": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.UB),
/* harmony export */   "js": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.js)
/* harmony export */ });
/* unused harmony export OPENSEA_API_KEY */
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39973);

const OPENSEA_API_KEY = 'c38fe2446ee34f919436c32db480a2e3';


/***/ }),

/***/ 29890:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _shared_kv_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30377);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);


const memory = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_read__ */ .ZP.Settings.__kv_storage_read__('memory', ...args);
    },
    async setValue (...args) {
        await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_write__ */ .ZP.Settings.__kv_storage_write__('memory', ...args);
    }
};
const indexedDB = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_read__ */ .ZP.Settings.__kv_storage_read__('indexedDB', ...args);
    },
    async setValue (...args) {
        await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Settings.__kv_storage_write__ */ .ZP.Settings.__kv_storage_write__('indexedDB', ...args);
    }
};
(0,_shared_kv_storage__WEBPACK_IMPORTED_MODULE_0__/* .setupMaskKVStorageBackend */ .$e)(indexedDB, memory);


/***/ }),

/***/ 94531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "x5": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.x5),
/* harmony export */   "K1": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.K1),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx),
/* harmony export */   "as": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "Zn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Zn),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "rB": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.rB),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.V2),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.FF),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.iv),
/* harmony export */   "Rc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Rc),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Ne),
/* harmony export */   "hn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.hn),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.$q),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.CB),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.eE),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.D4),
/* harmony export */   "Ar": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.Ar),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.Pz),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Sc),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.oQ),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.FT),
/* harmony export */   "Nw": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_9__.N),
/* harmony export */   "Cp": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_9__.C),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.bD),
/* harmony export */   "_W": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__._W),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fo),
/* harmony export */   "i1": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.i1),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fg),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.Rm),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.i8),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_6__.J)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85574);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35665);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19835);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60367);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75253);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41898);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89684);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23155);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56843);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86503);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79594);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59310);















/***/ }),

/***/ 39973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ue": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "R$": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "UB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.UB),
/* harmony export */   "xv": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.xv),
/* harmony export */   "IX": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.IX),
/* harmony export */   "Uu": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.Uu),
/* harmony export */   "js": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.js)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39151);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10783);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57577);
// Do not export JSX from this file. It might break some runtime that does not have DOM.





/***/ }),

/***/ 95391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q0": () => (/* reexport safe */ _in_memory__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "Ic": () => (/* reexport safe */ _idb__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "X2": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_2__.X),
/* harmony export */   "rc": () => (/* binding */ createKVStorageHost)
/* harmony export */ });
/* unused harmony export removed */
/* harmony import */ var _utils_abortSignal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11611);
/* harmony import */ var _in_memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84443);
/* harmony import */ var _idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88471);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40611);




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
            const aggregatedSignal = (0,_utils_abortSignal__WEBPACK_IMPORTED_MODULE_3__/* .combineAbortSignal */ .d)(scopeSignal, signal);
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

/***/ 54430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o)
});

// UNUSED EXPORTS: ChainIcon, CrashUI, TokenIconUI, useImageFailOver, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(91525);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(4348);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(77362);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(80260);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(15606);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 1 modules
var ERC20TokenList = __webpack_require__(26055);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(94038);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(7068);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(96555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        }));
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts




// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(32245);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(35479);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(62228);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(10257);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(44407);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(70395);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx
var AssetPlayer = __webpack_require__(30427);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(22391);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 56462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r8": () => (/* reexport */ createGlobalState/* createGlobalState */.r),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H9),
  "pv": () => (/* reexport */ useObservableValues),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "iD": () => (/* reexport */ useSnackbarCallback/* useSnackbarCallback */.i),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: useMenuConfig, useMenuContext, useValueRefDelayed

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.5.1_react@18.0.0-rc.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(47175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../shared/src/hooks/useValueRef.ts


function useValueRef(ref) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}
function useValueRefDelayed(ref, latency = 500) {
    const subscription = useMemo(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>{
                return ref.addListener((newVal, oldVal)=>{
                    setTimeout(()=>callback(newVal, oldVal)
                    , latency);
                });
            }
        })
    , [
        ref,
        latency
    ]);
    return useSubscription(subscription);
}

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
;// CONCATENATED MODULE: ../shared/src/hooks/useObservableMapSet.ts



function useObservableValues(map) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                return map.event.on(src/* ALL_EVENTS */.Ko, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}

// EXTERNAL MODULE: ../shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(90949);
// EXTERNAL MODULE: ../shared/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(47153);
// EXTERNAL MODULE: ../shared/src/hooks/useSnackbarCallback.tsx
var useSnackbarCallback = __webpack_require__(28387);
// EXTERNAL MODULE: ../shared/src/hooks/useScrollBottomEvent.ts
var useScrollBottomEvent = __webpack_require__(52095);
// EXTERNAL MODULE: ../shared/src/hooks/createGlobalState.ts
var createGlobalState = __webpack_require__(48241);
;// CONCATENATED MODULE: ../shared/src/hooks/index.ts









/***/ }),

/***/ 98419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ addSharedI18N)
/* harmony export */ });
/* unused harmony export languages */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75961);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87470);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts







const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__
};
const addSharedI18N = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createI18NBundle */ .C9)('shared', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 31637:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X3": () => (/* binding */ openDB)
/* harmony export */ });
/* unused harmony export deleteDB */
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
    return wrap(request).then(() => undefined);
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

}]);