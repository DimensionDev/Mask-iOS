"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1224],{

/***/ 58757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(34028);
} else {}


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

/***/ 7197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DT": () => (/* binding */ currentMaskWalletChainIdSettings),
/* harmony export */   "Jg": () => (/* binding */ currentMaskWalletLockStatusSettings),
/* harmony export */   "T_": () => (/* binding */ currentMaskWalletAccountSettings),
/* harmony export */   "br": () => (/* binding */ currentMaskWalletNetworkSettings)
/* harmony export */ });
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31202);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72499);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25302);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53856);




const currentMaskWalletAccountSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu}+selectedMaskWalletAddress`, '');
const currentMaskWalletChainIdSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu}+maskWalletChainId`, _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet);
const currentMaskWalletNetworkSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu}+selectedMaskWalletNetwork`, _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum);
const currentMaskWalletLockStatusSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu}+maskWalletLockStatus`, _types__WEBPACK_IMPORTED_MODULE_2__/* .LockStatus.INIT */ .O.INIT);


/***/ }),

/***/ 53856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ LockStatus)
/* harmony export */ });
var LockStatus;
(function(LockStatus) {
    LockStatus[LockStatus["INIT"] = 0] = "INIT";
    LockStatus[LockStatus["UNLOCK"] = 1] = "UNLOCK";
    LockStatus[LockStatus["LOCKED"] = 2] = "LOCKED";
})(LockStatus || (LockStatus = {}));


/***/ }),

/***/ 54409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createNormalReactRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70195);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);





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

/***/ 45908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 78831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63439);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31217);




/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            PaperProps: props?.paperProps,
            MenuListProps: props?.menuListProps,
            open,
            anchorEl,
            onClose: close,
            onClick: close,
            anchorOrigin: props?.anchorOrigin,
            transformOrigin: props?.transformOrigin
        }, elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? element.nextElementSibling ?? undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []), 
    ];
}


/***/ }),

/***/ 70236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useSwitcher)
/* harmony export */ });
/* unused harmony export useSettingsSwitcher */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72288);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76618);





function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = useValueRef(settings);
    const nextOption = useMemo(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = useCallback(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ _jsxs(ActionButton, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}
function useSwitcher(currentOption, onSwitch, options, resolver, fullWidth) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        fullWidth: fullWidth,
        sx: {
            marginTop: 1,
            backgroundColor: theme.palette.maskColor?.dark,
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            color: 'white'
        },
        variant: "contained",
        onClick: ()=>onSwitch(nextOption)
        ,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}


/***/ }),

/***/ 94201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts


/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    return (0,src/* getAssetAsBlobURL */.$I)(url, service/* default.Helper.fetch */.ZP.Helper.fetch);
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 51602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useClassicMaskSNSPluginTheme),
/* harmony export */   "V": () => (/* binding */ useClassicMaskSNSTheme)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(25105);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14257);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9956);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65095);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44451);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80226);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5903);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9084);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46440);
/* harmony import */ var _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88674);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60232);













const staticRef = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .createSubscriptionFromValueRef */ ._H)(new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_9__.ValueRef('light'));
const defaultUseTheme = (t)=>t
;
/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useClassicMaskSNSTheme() {
    const provider = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.customization.paletteMode */ .LM.customization.paletteMode?.current || staticRef).current;
    const usePostTheme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.customization.useTheme */ .LM.customization.useTheme || defaultUseTheme).current;
    const palette = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(provider);
    const baseTheme = palette === 'dark' ? _MaskTheme__WEBPACK_IMPORTED_MODULE_3__/* .MaskDarkTheme */ .H : _MaskTheme__WEBPACK_IMPORTED_MODULE_3__/* .MaskLightTheme */ .C;
    (0,immer__WEBPACK_IMPORTED_MODULE_10__/* .setAutoFreeze */ .Fl)(false);
    const maskTheme = (0,immer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .ZP)(baseTheme, (theme)=>{
        const colorSchema = _social_network_adaptor_twitter_com_customization_twitter_color_schema_json__WEBPACK_IMPORTED_MODULE_8__[theme.palette.mode];
        theme.palette.maskColor = colorSchema.maskColor;
    });
    // TODO: support RTL?
    const [localization, isRTL] = (0,_useThemeLanguage__WEBPACK_IMPORTED_MODULE_4__/* .useThemeLanguage */ .e)((0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_6__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .languageSettings */ .pQ));
    const theme1 = (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(maskTheme, localization);
    return usePostTheme(theme1);
}
function useClassicMaskSNSPluginTheme() {
    const theme = useClassicMaskSNSTheme();
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)((0,lodash_unified__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(theme), {
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'roundedContained'
                }
            }
        }
    }));
}


/***/ }),

/***/ 24103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useColorStyles)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15746);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92017);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94362);


const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][900] */ .Z[900]
        },
        success: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][800] */ .Z[800]
        },
        info: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][800] */ .Z[800]
        }
    };
});


/***/ }),

/***/ 87434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eE": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "yf": () => (/* binding */ useActivatedPluginDashboard)
/* harmony export */ });
/* unused harmony export startPluginDashboard */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14257);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32670);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)((def)=>def.Dashboard
);
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsDashboard() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useActivatedPluginDashboard(pluginID) {
    const plugins = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
    return plugins.find((x)=>x.ID === pluginID
    );
}
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 31293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PluginId),
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork) {
    CurrentSNSNetwork[CurrentSNSNetwork["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork[CurrentSNSNetwork["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork[CurrentSNSNetwork["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork[CurrentSNSNetwork["Instagram"] = 3] = "Instagram";
    CurrentSNSNetwork[CurrentSNSNetwork["Minds"] = 4] = "Minds";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {}));
var PluginId;
(function(PluginId) {
    PluginId["Avatar"] = 'com.maskbook.avatar';
    PluginId["ArtBlocks"] = 'io.artblocks';
    PluginId["Collectible"] = 'com.maskbook.collectibles';
    PluginId["CryptoArtAI"] = 'com.maskbook.cryptoartai';
    PluginId["dHEDGE"] = 'org.dhedge';
    PluginId["EVM"] = 'com.mask.evm';
    PluginId["NextID"] = 'com.mask.next_id';
    PluginId["External"] = 'io.mask.external';
    PluginId["Furucombo"] = 'app.furucombo';
    PluginId["FindTruman"] = 'org.findtruman';
    PluginId["Gitcoin"] = 'co.gitcoin';
    PluginId["GoodGhosting"] = 'co.good_ghosting';
    PluginId["MaskBox"] = 'com.maskbook.box';
    PluginId["Poll"] = 'com.maskbook.poll';
    PluginId["Profile"] = 'com.mask.profile';
    PluginId["Trader"] = 'com.maskbook.trader';
    PluginId["Tips"] = 'com.maskbook.tip';
    PluginId["Transak"] = 'com.maskbook.transak';
    PluginId["Valuables"] = 'com.maskbook.tweet';
    PluginId["DAO"] = 'money.juicebox';
    PluginId["Debugger"] = 'io.mask.debugger';
    PluginId["Example"] = 'io.mask.example';
    PluginId["Flow"] = 'com.mask.flow';
    PluginId["RSS3"] = 'bio.rss3';
    PluginId["RedPacket"] = 'com.maskbook.red_packet';
    PluginId["RedPacketNFT"] = 'com.maskbook.red_packet_nft';
    PluginId["Pets"] = 'com.maskbook.pets';
    PluginId["Snapshot"] = 'org.snapshot';
    PluginId["Savings"] = 'com.savings';
    PluginId["ITO"] = 'com.maskbook.ito';
    PluginId["Wallet"] = 'com.maskbook.wallet';
    PluginId["PoolTogether"] = 'com.pooltogether';
    PluginId["UnlockProtocol"] = 'com.maskbook.unlockprotocol';
    PluginId["FileService"] = 'com.maskbook.fileservice';
    PluginId["CyberConnect"] = 'me.cyberconnect.app';
    PluginId["GoPlusSecurity"] = 'io.gopluslabs.security';
    PluginId["CrossChainBridge"] = 'io.mask.cross-chain-bridge';
    PluginId["Referral"] = 'com.maskbook.referral';
})(PluginId || (PluginId = {}));


/***/ }),

/***/ 91202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useLookupAddress */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);



function useLookupAddress(pluginId, domain) {
    const chainId = useChainId(pluginId);
    const { NameService , Others  } = useWeb3State(pluginId);
    return useAsyncRetry(async ()=>{
        if (!chainId || !domain || !Others?.isValidDomain?.(domain) || !NameService) return;
        return NameService.lookup?.(chainId, domain);
    }, [
        chainId,
        domain,
        NameService,
        Others
    ]);
}


/***/ }),

/***/ 16394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useTransactions */
/* harmony import */ var _entry_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50719);


function useTransactions(pluginID, options) {
    const account = useAccount(pluginID);
    const chainId = useChainId(pluginID);
    const hub = useWeb3Hub(pluginID, options);
    return useAsyncRetry(async ()=>{
        return hub?.getTransactions(options?.chainId ?? chainId, options?.account ?? account);
    }, [
        account,
        chainId,
        hub
    ]);
}


/***/ }),

/***/ 34849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ WalletMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24003);


if (false) {}
const WalletMessages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu)
};


/***/ }),

/***/ 30807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createGlobalState */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14257);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);


/**
 * Create a new global state.
 *
 * @param f The async function that return the data needed.
 * @param subscribe
 * The subscribe function that call the callback when the data changed.
 * It will call the f again to revalidate the data.
 *
 * @returns
 * It returns a tuple.
 *
 * The first item is the react hooks for this resource.
 * The hooks receive a argument "checked".
 * If checked is true, it will return a status object so you can handle the error by yourself.
 *
 * The second item is the revalidation function. It can be called anywhere and returns a Promise.
 * It will resolves regardless the f itself fulfilled or rejected.
 */ function createGlobalState(f1, subscribe) {
    const listeners = new Set();
    let currentValue = None;
    let pending;
    const sub = {
        getCurrentValue () {
            if (currentValue.none) {
                subscribe(revalidate);
                throw pending ||= revalidate();
            }
            if (currentValue.val.err) throw currentValue.val.val;
            return currentValue.val.val;
        },
        subscribe (f) {
            listeners.add(f);
            return ()=>listeners.delete(f)
            ;
        }
    };
    function useData() {
        return useSubscription(sub);
    }
    function revalidate() {
        return f1().then((val)=>currentValue = Some(Ok(val))
        , (err)=>currentValue = Some(Err(err))
        ).then(()=>undefined
        ).finally(()=>listeners.forEach((f)=>f()
            )
        );
    }
    return [
        useData,
        revalidate
    ];
}


/***/ }),

/***/ 80226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "F$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.F$),
/* harmony export */   "N3": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.N3),
/* harmony export */   "S8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.S8),
/* harmony export */   "SV": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.SV),
/* harmony export */   "pv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.pv),
/* harmony export */   "xw": () => (/* reexport safe */ _bom__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _bom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74762);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58044);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95169);





/***/ }),

/***/ 98981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ EMPTY_OBJECT),
/* harmony export */   "r": () => (/* binding */ EMPTY_LIST)
/* harmony export */ });
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});


/***/ }),

/***/ 99594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mZ": () => (/* reexport safe */ _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* unused harmony export relativeRouteOf */
/* harmony import */ var _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11337);
/* harmony import */ var _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89364);


function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


/***/ }),

/***/ 53734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nb": () => (/* binding */ formatPersonaFingerprint),
/* harmony export */   "lK": () => (/* binding */ formatPersonaPublicKey),
/* harmony export */   "rY": () => (/* binding */ formatPersonaName)
/* harmony export */ });
/* unused harmony exports MAX_PERSONA_LIMIT, MAX_PERSONA_NAME_LENGTH */
function formatPersonaFingerprint(fingerprint, size = 0) {
    if (size === 0) return fingerprint;
    return `${fingerprint.slice(0, Math.max(0, 2 + size))}...${fingerprint.slice(-size)}`;
}
const MAX_PERSONA_LIMIT = 10;
const MAX_PERSONA_NAME_LENGTH = 12;
const formatPersonaName = (nickname)=>{
    if (!nickname) return '';
    if (nickname.length < MAX_PERSONA_NAME_LENGTH) return nickname;
    return `${nickname.slice(0, 12)}...`;
};
function formatPersonaPublicKey(address, size = 0) {
    if (size === 0 || size >= 20) return address;
    return `${address.slice(0, Math.max(0, 2 + size))}...${address.slice(-size)}`;
}


/***/ }),

/***/ 51878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ChainIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        point: {
            width: 12.5,
            height: 12.5,
            borderRadius: 6.25,
            margin: 3.75
        },
        border: {
            border: `1px solid ${theme.palette.background.paper}`
        }
    })
);
const ChainIcon = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ color , size =12.5 , ...props })=>{
    const classes = useStylesExtends(useStyles(), props);
    return /*#__PURE__*/ _jsx("div", {
        className: classes.point,
        style: {
            width: size,
            height: size,
            backgroundColor: color
        }
    });
})));


/***/ }),

/***/ 25593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MiniNetworkSelector */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85792);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _ChainIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51878);
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58437);






const AllNetworkButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        marginRight: theme.spacing(1),
        padding: 0,
        borderRadius: '50%',
        fontSize: 12,
        '&:hover': {
            boxShadow: 'none'
        },
        opacity: 0.5
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        networkSelected: {
            opacity: 1,
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                right: (props.size - 4) / 2,
                display: 'inline-block',
                width: 4,
                height: 4,
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
                borderRadius: '50%'
            }
        },
        networkDisabled: {
            cursor: 'not-allowed',
            '&:hover': {
                opacity: 0.6
            }
        }
    })
);
const MiniNetworkSelector = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ hideAllNetworkButton =false , onSelect , networks =[] , selectedNetwork , disabledNonCurrentNetwork =false , size =30 ,  })=>{
    const { classes  } = useStyles({
        size
    });
    return /*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        children: [
            !hideAllNetworkButton && /*#__PURE__*/ _jsx(AllNetworkButton, {
                className: !selectedNetwork ? classes.networkSelected : '',
                sx: {
                    width: size,
                    height: size,
                    minWidth: size,
                    lineHeight: `${size}px`
                },
                onClick: ()=>onSelect(null)
                ,
                children: "ALL"
            }),
            networks.filter((x)=>x.isMainnet
            ).map((network)=>{
                return /*#__PURE__*/ _jsx(Box, {
                    position: "relative",
                    mr: 1,
                    height: size,
                    onClick: ()=>!disabledNonCurrentNetwork && onSelect(network)
                    ,
                    sx: {
                        cursor: 'pointer',
                        opacity: '0.6',
                        ':hover': {
                            opacity: 1
                        },
                        userSelect: 'none',
                        lineHeight: `${size}px`
                    },
                    className: selectedNetwork?.ID === network.ID ? classes.networkSelected : disabledNonCurrentNetwork ? classes.networkDisabled : '',
                    children: network.isMainnet ? /*#__PURE__*/ _jsx(WalletIcon, {
                        mainIcon: network.icon,
                        size: size
                    }) : /*#__PURE__*/ _jsx(ChainIcon, {
                        color: network.iconColor,
                        size: size
                    })
                }, network.ID);
            })
        ]
    });
})));


/***/ }),

/***/ 89241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37594);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67558);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12095);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55903);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35961);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42099);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24421);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75430);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62305);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterColoredIcon */ .g, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .FacebookColoredIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MindsIcon */ .G, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .InstagramColoredIcon */ .$, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .TwitterRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__/* .FacebookRoundIcon */ .F, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .MindsRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .InstagramRoundIcon */ .A, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_NAME = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: 'Twitter',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: 'Facebook',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: 'Mind',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: 'Instagram',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: 'OpenSea',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: 'Localhost'
};
const SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter
];
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;


/***/ }),

/***/ 68483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useMenuContext, useMenu, useMenuConfig */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(Menu)));
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [status, setOpen] = useState(false);
    const open = useCallback((anchorElOrEvent)=>{
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
    const update = useUpdate();
    const close = useCallback(()=>setOpen(false)
    , []);
    const Menu1 = useContext(useMenuContext);
    return [
        /*#__PURE__*/ _jsx(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements?.map((element, key)=>/*#__PURE__*/ isValidElement(element) ? /*#__PURE__*/ cloneElement(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}


/***/ }),

/***/ 59478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports languages, addSharedI18N */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75961);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44451);
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

/***/ 31180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
/* unused harmony export applyMaskColorVars */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46768);
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
    for (const key of Object.keys(ns)){
        // --mask-name: val;
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result
    };
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? LightColor : DarkColor;
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
        for (const key of Object.keys(ns)){
            // --mask-name: val;
            rule += `    --mask-${kebabCase(key)}: ${ns[key]};\n`;
            rule += `    --mask-${kebabCase(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for (const key of Object.keys(ns)){
            node.style.setProperty('--mask-' + kebabCase(key), ns[key]);
            node.style.setProperty('--mask-' + kebabCase(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}


/***/ }),

/***/ 88762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ci": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "I3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "US": () => (/* reexport safe */ _Injector__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "ZN": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "nb": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.n)
/* harmony export */ });
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31180);
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42381);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46768);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8600);






/***/ }),

/***/ 7848:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ButtonGroupTabList, ButtonTab

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx



const TabButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flex: 1
    })
);
/**
 * This is an alternative implementation of Tab component, to use with <ButtonGroupTabList>.
 */ const ButtonGroupTab_ButtonTab = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const activated = !!props.selected;
    const { onChange , onClick , value  } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    // TODO: replace secondary to correct theme color
    return /*#__PURE__*/ _jsx(TabButtonWrap, {
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        color: activated ? 'primary' : 'secondary',
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <ButtonGroupTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </ButtonGroupTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const ButtonGroupTabList = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const context = useTabContext();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ isValidElement(child)) return child;
        const extra = {
            'aria-controls': getPanelId(context, child.props.value),
            id: getTabId(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab) {
            return /*#__PURE__*/ _jsx(ButtonTab, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            });
        }
        return /*#__PURE__*/ cloneElement(child, extra);
    });
    const { onChange , ...rest } = props;
    return /*#__PURE__*/ _jsx(ButtonGroup, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    });
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 75168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CountdownButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);



const CountdownButton = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const { duration =60 , children , repeatContent ='Resend' , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = useState(undefined);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick?.(event);
    };
    const content = useMemo(()=>{
        if (countdown) {
            return `${children} (${countdown})`;
        } else if (countdown === 0) {
            return repeatContent;
        } else {
            return children;
        }
    }, [
        countdown
    ]);
    useEffect(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{};
    }, [
        countdown
    ]);
    return /*#__PURE__*/ _jsx(Button, {
        ref: ref,
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: content
    });
})));


/***/ }),

/***/ 54650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export PhoneNumberField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75322);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32876);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);





const useStyles = (0,_UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = useState(value.phone);
    const [countryCode, setCountryCode] = useState(value.country);
    const handleCountryCodeChange = (event)=>{
        const inputValue = event.target.value;
        const prefix = inputValue.startsWith('+') ? '' : '+';
        setCountryCode(prefix + inputValue);
        onChange?.({
            country: inputValue,
            phone
        });
    };
    const handlePhoneChange = (event)=>{
        const inputValue = event.target.value;
        setPhone(inputValue);
        onChange?.({
            country: countryCode,
            phone: inputValue
        });
    };
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            label,
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: onBlur,
                            type: "text",
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 13643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SendingCodeField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32876);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75168);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , autoSend =false , onChange  })=>{
    const [code, setCode] = useState('');
    const sendButton = useRef(null);
    useEffect(()=>{
        onChange?.(code);
    }, [
        code
    ]);
    useEffect(()=>{
        if (autoSend) sendButton.current?.click();
    }, [
        autoSend
    ]);
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                children: label
            }),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            flex: 1,
                            children: /*#__PURE__*/ _jsx(MaskTextField, {
                                size: "small",
                                value: code,
                                onChange: (event)=>setCode(event.target.value)
                                ,
                                error: !!errorMessage,
                                helperText: errorMessage,
                                onBlur: ()=>onBlur?.(code)
                                ,
                                disabled: disabled
                            })
                        }),
                        /*#__PURE__*/ _jsx(CountdownButton, {
                            ref: sendButton,
                            size: "medium",
                            sx: {
                                height: '40px',
                                width: '100px'
                            },
                            onClick: onSend,
                            disabled: disabled,
                            children: sendButtonText
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 8647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports MaskLightTheme, MaskDarkTheme */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98109);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2241);
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53931);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9084);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88762);





const color = (mode, color1)=>({
        mode,
        primary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        secondary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        background: {
            paper: color1.primaryBackground,
            default: color1.secondaryBackground
        },
        error: {
            main: color1.redMain,
            contrastText: color1.redContrastText
        },
        success: {
            main: color1.greenMain
        },
        warning: {
            main: color1.orangeMain
        },
        divider: color1.divider,
        text: {
            primary: color1.textPrimary,
            secondary: color1.textSecondary
        }
    })
;
function MaskTheme(mode) {
    const colors = mode === 'dark' ? _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .DarkColor */ .I3 : _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .LightColor */ .Ci;
    const theme = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        palette: color(mode, colors)
    }, ...Object.values(_changes__WEBPACK_IMPORTED_MODULE_0__).map(applyColors), ...Object.values(_component_changes__WEBPACK_IMPORTED_MODULE_1__).map(applyColors));
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');


/***/ }),

/***/ 84432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "ZL": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "ze": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75322);
/* harmony import */ var _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89259);





/***/ }),

/***/ 75322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82737);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76618);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});


/***/ }),

/***/ 72499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W8": () => (/* binding */ EthereumMethodType),
/* harmony export */   "XQ": () => (/* binding */ SchemaType),
/* harmony export */   "a_": () => (/* binding */ ChainId),
/* harmony export */   "iE": () => (/* binding */ TransactionEventType),
/* harmony export */   "lP": () => (/* binding */ ProviderType),
/* harmony export */   "n$": () => (/* binding */ TransactionStateType),
/* harmony export */   "td": () => (/* binding */ NetworkType)
/* harmony export */ });
/* unused harmony exports DomainProvider, FilterTransactionType, TransactionType, DebankTransactionDirection, ZerionTransactionDirection, FungibleAssetProvider, NonFungibleAssetProvider */
var ChainId;
(function(ChainId) {
    ChainId[ChainId[// Mainnet
    "Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Gorli"] = 5] = "Gorli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId[// BSC
    "BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCT"] = 97] = "BSCT";
    ChainId[ChainId[// Matic
    "Matic"] = 137] = "Matic";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId[// Arbitrum
    "Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["Arbitrum_Rinkeby"] = 421611] = "Arbitrum_Rinkeby";
    ChainId[ChainId[// xDai
    "xDai"] = 100] = "xDai";
    ChainId[ChainId[// Avalanche
    "Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["Avalanche_Fuji"] = 43113] = "Avalanche_Fuji";
    ChainId[ChainId[// Celo
    "Celo"] = 42220] = "Celo";
    ChainId[ChainId[// Fantom
    "Fantom"] = 250] = "Fantom";
    ChainId[ChainId[// Aurora
    "Aurora"] = 1313161554] = "Aurora";
    ChainId[ChainId["Aurora_Testnet"] = 1313161555] = "Aurora_Testnet";
    ChainId[ChainId[// Fuse
    "Fuse"] = 122] = "Fuse";
    ChainId[ChainId[// Boba
    "Boba"] = 288] = "Boba";
    ChainId[ChainId[// Metis
    "Metis"] = 1088] = "Metis";
    ChainId[ChainId[// Optimistic
    "Optimistic"] = 10] = "Optimistic";
    ChainId[ChainId[// Harmony
    "Harmony"] = 1666600000] = "Harmony";
    ChainId[ChainId["Harmony_Test"] = 1666700000] = "Harmony_Test";
    ChainId[ChainId[// Conflux
    "Conflux"] = 1030] = "Conflux";
})(ChainId || (ChainId = {}));
var SchemaType;
(function(SchemaType) {
    SchemaType[SchemaType["Native"] = 1] = "Native";
    SchemaType[SchemaType["ERC20"] = 2] = "ERC20";
    SchemaType[SchemaType["ERC721"] = 3] = "ERC721";
    SchemaType[SchemaType["ERC1155"] = 4] = "ERC1155";
})(SchemaType || (SchemaType = {}));
var EthereumMethodType;
(function(EthereumMethodType) {
    EthereumMethodType["WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumMethodType["WATCH_ASSET_LEGACY"] = 'metamask_watchAsset';
    EthereumMethodType["PERSONAL_SIGN"] = 'personal_sign';
    EthereumMethodType[// https://eips.ethereum.org/EIPS/eip-3085
    "WALLET_ADD_ETHEREUM_CHAIN"] = 'wallet_addEthereumChain';
    EthereumMethodType[// https://eips.ethereum.org/EIPS/eip-3326
    "WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumMethodType["ETH_CHAIN_ID"] = 'eth_chainId';
    EthereumMethodType["ETH_ACCOUNTS"] = 'eth_accounts';
    EthereumMethodType["ETH_REQUEST_ACCOUNTS"] = 'eth_requestAccounts';
    EthereumMethodType["ETH_SEND_TRANSACTION"] = 'eth_sendTransaction';
    EthereumMethodType["ETH_SEND_RAW_TRANSACTION"] = 'eth_sendRawTransaction';
    EthereumMethodType["ETH_GET_CODE"] = 'eth_getCode';
    EthereumMethodType["ETH_GAS_PRICE"] = 'eth_gasPrice';
    EthereumMethodType["ETH_GET_BLOCK_BY_NUMBER"] = 'eth_getBlockByNumber';
    EthereumMethodType["ETH_GET_BLOCK_BY_HASH"] = 'eth_getBlockByHash';
    EthereumMethodType["ETH_BLOCK_NUMBER"] = 'eth_blockNumber';
    EthereumMethodType["ETH_GET_BALANCE"] = 'eth_getBalance';
    EthereumMethodType["ETH_GET_TRANSACTION_BY_HASH"] = 'eth_getTransactionByHash';
    EthereumMethodType["ETH_GET_TRANSACTION_RECEIPT"] = 'eth_getTransactionReceipt';
    EthereumMethodType["ETH_GET_TRANSACTION_COUNT"] = 'eth_getTransactionCount';
    EthereumMethodType["ETH_GET_FILTER_CHANGES"] = 'eth_getFilterChanges';
    EthereumMethodType["ETH_NEW_PENDING_TRANSACTION_FILTER"] = 'eth_newPendingTransactionFilter';
    EthereumMethodType["ETH_ESTIMATE_GAS"] = 'eth_estimateGas';
    EthereumMethodType["ETH_CALL"] = 'eth_call';
    EthereumMethodType["ETH_SIGN"] = 'eth_sign';
    EthereumMethodType["ETH_DECRYPT"] = 'eth_decrypt';
    EthereumMethodType["ETH_SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumMethodType["ETH_SIGN_TRANSACTION"] = 'eth_signTransaction';
    EthereumMethodType["ETH_GET_LOGS"] = 'eth_getLogs';
    EthereumMethodType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
    EthereumMethodType[// only for mask
    "MASK_LOGIN"] = "MASK_LOGIN";
    EthereumMethodType["MASK_LOGOUT"] = "MASK_LOGOUT";
    EthereumMethodType["MASK_REPLACE_TRANSACTION"] = 'mask_replaceTransaction';
})(EthereumMethodType || (EthereumMethodType = {}));
var TransactionEventType;
(function(TransactionEventType) {
    TransactionEventType["TRANSACTION_HASH"] = 'transactionHash';
    TransactionEventType["RECEIPT"] = 'receipt';
    TransactionEventType["CONFIRMATION"] = 'confirmation';
    TransactionEventType["ERROR"] = 'error';
})(TransactionEventType || (TransactionEventType = {}));
var DomainProvider;
(function(DomainProvider) {
    DomainProvider["ENS"] = "ENS";
    DomainProvider["UNS"] = "UNS";
})(DomainProvider || (DomainProvider = {}));
var FilterTransactionType;
(function(FilterTransactionType) {
    FilterTransactionType["ALL"] = 'all';
    FilterTransactionType["SEND"] = 'send';
    FilterTransactionType["RECEIVE"] = 'receive';
    FilterTransactionType["CREATE_LUCKY_DROP"] = 'create_lucky_drop';
    FilterTransactionType["FILL_POOL"] = 'fill_pool';
})(FilterTransactionType || (FilterTransactionType = {}));
var TransactionType;
(function(TransactionType) {
    TransactionType["SEND"] = 'Send';
    TransactionType["SWAP"] = 'swap';
    TransactionType["RECEIVE"] = 'Receive';
    TransactionType["TRANSFER"] = 'transfer';
    TransactionType["CREATE_LUCKY_DROP"] = 'create_lucky_drop';
    TransactionType["CREATE_RED_PACKET"] = 'create_red_packet';
    TransactionType["FILL_POOL"] = 'fill_pool';
    TransactionType["CLAIM"] = 'claim';
    TransactionType["REFUND"] = 'refund';
})(TransactionType || (TransactionType = {}));
var DebankTransactionDirection;
(function(DebankTransactionDirection) {
    DebankTransactionDirection["SEND"] = 'send';
    DebankTransactionDirection["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection) {
    ZerionTransactionDirection["IN"] = 'in';
    ZerionTransactionDirection["OUT"] = 'out';
    ZerionTransactionDirection["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {}));
var TransactionStateType;
(function(TransactionStateType) {
    TransactionStateType[TransactionStateType["UNKNOWN"] = 0] = "UNKNOWN";
    TransactionStateType[TransactionStateType[/** Wait for external provider */ "WAIT_FOR_CONFIRMING"] = 1] = "WAIT_FOR_CONFIRMING";
    TransactionStateType[TransactionStateType[/** Hash is available */ "HASH"] = 2] = "HASH";
    TransactionStateType[TransactionStateType[/** Receipt is available */ "RECEIPT"] = 3] = "RECEIPT";
    TransactionStateType[TransactionStateType[/** Confirmed or Reverted */ "CONFIRMED"] = 4] = "CONFIRMED";
    TransactionStateType[TransactionStateType[/** Fail to send */ "FAILED"] = 5] = "FAILED";
})(TransactionStateType || (TransactionStateType = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Harmony"] = "Harmony";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["None"] = "None";
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Torus"] = "Torus";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 62846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q_": () => (/* binding */ CHAIN_DESCRIPTORS),
/* harmony export */   "qQ": () => (/* binding */ NETWORK_DESCRIPTORS),
/* harmony export */   "zM": () => (/* binding */ PROVIDER_DESCRIPTORS)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56874);




const PLUGIN_ID = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_FLOW */ .FF.PLUGIN_FLOW;
const CHAIN_DESCRIPTORS = [
    {
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Flow */ .td.Flow,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet,
        coinMarketCapChainId: '',
        coinGeckoChainId: '',
        coinGeckoPlatformId: '',
        name: 'Flow',
        color: '#16ff99',
        fullName: 'Flow',
        shortName: 'Flow',
        network: 'mainnet',
        nativeCurrency: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createFungibleToken */ .mn)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet, _types__WEBPACK_IMPORTED_MODULE_3__/* .SchemaType.Fungible */ .XQ.Fungible, '0x1654653399040a61', 'Flow', 'FLOW', 8, 'https://static.flowscan.org/mainnet/icons/A.1654653399040a61.FlowToken.png'),
        explorerURL: {
            url: 'https://flowscan.org/'
        }
    },
    {
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Flow */ .td.Flow,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Testnet */ .a_.Testnet,
        coinMarketCapChainId: '',
        coinGeckoChainId: '',
        coinGeckoPlatformId: '',
        name: 'Flow',
        color: '#16ff99',
        fullName: 'Flow',
        shortName: 'Flow',
        network: 'testnet',
        nativeCurrency: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createFungibleToken */ .mn)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet, _types__WEBPACK_IMPORTED_MODULE_3__/* .SchemaType.Fungible */ .XQ.Fungible, '0x7e60df042a9c0868', 'Flow', 'FLOW', 8, 'https://static.flowscan.org/mainnet/icons/A.1654653399040a61.FlowToken.png'),
        explorerURL: {
            url: 'https://testnet.flowscan.org/'
        }
    }, 
];
const NETWORK_DESCRIPTORS = [
    {
        ID: `${PLUGIN_ID}_flow`,
        networkSupporterPluginID: PLUGIN_ID,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Flow */ .td.Flow,
        name: 'Flow',
        icon: new URL(/* asset import */ __webpack_require__(85206), __webpack_require__.b),
        iconColor: 'rgb(54, 173, 104)',
        isMainnet: true
    },
    {
        ID: `${PLUGIN_ID}_flow_testnet`,
        networkSupporterPluginID: PLUGIN_ID,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Testnet */ .a_.Testnet,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Flow */ .td.Flow,
        name: 'Flow Testnet',
        icon: new URL(/* asset import */ __webpack_require__(85206), __webpack_require__.b),
        iconColor: 'rgb(54, 173, 104)',
        isMainnet: false
    }, 
];
const PROVIDER_DESCRIPTORS = [
    {
        ID: `${PLUGIN_ID}_blocto`,
        providerAdaptorPluginID: PLUGIN_ID,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Blocto */ .lP.Blocto,
        name: 'Blocto',
        icon: new URL(/* asset import */ __webpack_require__(31116), __webpack_require__.b),
        iconFilterColor: 'rgba(52, 133, 196, 0.2)',
        backgroundGradient: 'linear-gradient(90deg, rgba(52, 133, 196, 0.2) 0%, rgba(0, 239, 139, 0.2) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        homeLink: 'https://portto.com/',
        shortenLink: 'portto.com',
        enableRequirements: {
            supportedChainIds: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_).map((x)=>x.value
            ),
            supportedEnhanceableSites: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .Jk).map((x)=>x.value
            ),
            supportedExtensionSites: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ExtensionSite */ .v_).map((x)=>x.value
            )
        }
    }, 
];


/***/ }),

/***/ 4688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q_": () => (/* binding */ CHAIN_DESCRIPTORS),
/* harmony export */   "qQ": () => (/* binding */ NETWORK_DESCRIPTORS),
/* harmony export */   "zM": () => (/* binding */ PROVIDER_DESCRIPTORS)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50236);
/* harmony import */ var _primitives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62212);





const PLUGIN_ID = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA;
const CHAIN_DESCRIPTORS = [
    {
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Solana */ .td.Solana,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet,
        coinMarketCapChainId: '',
        coinGeckoChainId: '',
        coinGeckoPlatformId: '',
        name: 'Solana',
        color: '#17ac7c',
        fullName: 'Solana',
        shortName: 'Solana',
        network: 'mainnet',
        nativeCurrency: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createFungibleToken */ .mn)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet, _types__WEBPACK_IMPORTED_MODULE_3__/* .SchemaType.Fungible */ .XQ.Fungible, _primitives__WEBPACK_IMPORTED_MODULE_4__/* .ZERO_ADDRESS */ .r, 'Solana', 'SOL', 9, 'https://assets.coingecko.com/coins/images/4128/small/solana.png'),
        explorerURL: {
            url: 'https://explorer.solana.com/'
        }
    },
    {
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Solana */ .td.Solana,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Devnet */ .a_.Devnet,
        coinMarketCapChainId: '',
        coinGeckoChainId: '',
        coinGeckoPlatformId: '',
        name: 'Solana',
        color: '#17ac7c',
        fullName: 'Solana',
        shortName: 'Solana',
        network: 'devnet',
        nativeCurrency: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createFungibleToken */ .mn)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Devnet */ .a_.Devnet, _types__WEBPACK_IMPORTED_MODULE_3__/* .SchemaType.Fungible */ .XQ.Fungible, _primitives__WEBPACK_IMPORTED_MODULE_4__/* .ZERO_ADDRESS */ .r, 'Solana', 'SOL', 9, 'https://assets.coingecko.com/coins/images/4128/small/solana.png'),
        explorerURL: {
            url: 'https://explorer.solana.com/',
            parameters: {
                cluster: 'devnet'
            }
        }
    },
    {
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Solana */ .td.Solana,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Testnet */ .a_.Testnet,
        coinMarketCapChainId: '',
        coinGeckoChainId: '',
        coinGeckoPlatformId: '',
        name: 'Solana',
        color: '#17ac7c',
        fullName: 'Solana',
        shortName: 'Solana',
        network: 'testnet',
        nativeCurrency: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createFungibleToken */ .mn)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Testnet */ .a_.Testnet, _types__WEBPACK_IMPORTED_MODULE_3__/* .SchemaType.Fungible */ .XQ.Fungible, _primitives__WEBPACK_IMPORTED_MODULE_4__/* .ZERO_ADDRESS */ .r, 'Solana', 'SOL', 9, 'https://assets.coingecko.com/coins/images/4128/small/solana.png'),
        explorerURL: {
            url: 'https://explorer.solana.com/',
            parameters: {
                cluster: 'testnet'
            }
        }
    }, 
];
const NETWORK_DESCRIPTORS = [
    {
        ID: `${PLUGIN_ID}_solana`,
        networkSupporterPluginID: PLUGIN_ID,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Solana */ .td.Solana,
        name: 'Solana',
        icon: new URL(/* asset import */ __webpack_require__(76645), __webpack_require__.b),
        iconColor: '#5d6fc0',
        isMainnet: true
    },
    {
        ID: `${PLUGIN_ID}_solana_testnet`,
        networkSupporterPluginID: PLUGIN_ID,
        chainId: _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Testnet */ .a_.Testnet,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Solana */ .td.Solana,
        name: 'Solana Testnet',
        icon: new URL(/* asset import */ __webpack_require__(76645), __webpack_require__.b),
        iconColor: '#5d6fc0',
        isMainnet: false
    }, 
];
const PROVIDER_DESCRIPTORS = [
    {
        ID: `${PLUGIN_ID}_phantom`,
        providerAdaptorPluginID: PLUGIN_ID,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Phantom */ .lP.Phantom,
        name: 'Phantom',
        icon: new URL(/* asset import */ __webpack_require__(59785), __webpack_require__.b),
        homeLink: 'https://phantom.app/',
        shortenLink: 'phantom.app',
        downloadLink: 'https://phantom.app/download',
        enableRequirements: {
            supportedChainIds: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_).map((x)=>x.value
            ),
            supportedEnhanceableSites: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite */ .Jk).map((x)=>x.value
            ),
            supportedExtensionSites: []
        },
        iconFilterColor: 'rgba(85, 27, 249, 0.2)',
        backgroundGradient: 'linear-gradient(90deg, rgba(84, 63, 196, 0.2) 0%, rgba(98, 126, 234, 0.2) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)'
    },
    {
        ID: `${PLUGIN_ID}_solflare`,
        providerAdaptorPluginID: PLUGIN_ID,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Solflare */ .lP.Solflare,
        name: 'Solflare',
        icon: new URL(/* asset import */ __webpack_require__(42131), __webpack_require__.b),
        homeLink: 'https://solflare.com/',
        shortenLink: 'solflare.com',
        downloadLink: 'https://solflare.com/download',
        enableRequirements: {
            supportedChainIds: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_).map((x)=>x.value
            ),
            supportedEnhanceableSites: [],
            supportedExtensionSites: []
        }
    },
    {
        ID: `${PLUGIN_ID}_coin98`,
        providerAdaptorPluginID: PLUGIN_ID,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98,
        name: 'Coin98',
        icon: new URL(/* asset import */ __webpack_require__(4492), __webpack_require__.b),
        homeLink: 'https://coin98.com/',
        shortenLink: 'solflare.com',
        downloadLink: 'https://coin98.com/wallet',
        enableRequirements: {
            supportedChainIds: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_).map((x)=>x.value
            ),
            supportedEnhanceableSites: [],
            supportedExtensionSites: []
        }
    },
    {
        ID: `${PLUGIN_ID}_sollet`,
        providerAdaptorPluginID: PLUGIN_ID,
        type: _types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Sollet */ .lP.Sollet,
        name: 'Sollet',
        icon: new URL(/* asset import */ __webpack_require__(65280), __webpack_require__.b),
        homeLink: 'https://www.sollet.io/',
        shortenLink: 'sollet.io',
        downloadLink: 'https://www.sollet.io/',
        enableRequirements: {
            supportedChainIds: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId */ .a_).map((x)=>x.value
            ),
            supportedEnhanceableSites: [],
            supportedExtensionSites: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .getEnumAsArray */ .Yl)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ExtensionSite */ .v_).map((x)=>x.value
            )
        }
    }, 
];


/***/ }),

/***/ 8297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ blobToDataURL)
/* harmony export */ });
/* unused harmony export blobToText */
const blobToDataURL = factory('DataURL');
const blobToText = factory('Text');
function factory(method) {
    return (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('error', () => {
                reject(reader.error);
            });
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
            reader[`readAs${method}`](blob);
        });
    };
}
//# sourceMappingURL=blob.js.map

/***/ }),

/***/ 88674:
/***/ ((module) => {

module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}}}');

/***/ })

}]);