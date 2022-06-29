"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2644],{

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

/***/ 1465:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9221);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59146);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94282);

// @ts-ignore to prevent TypeScript complains




react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV);
(0,_locales_languages__WEBPACK_IMPORTED_MODULE_2__/* .addMaskI18N */ .U)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV);
(0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .addSharedI18N */ .zr)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV);
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .addDashboardI18N */ .Gp)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance */ .BV);


/***/ }),

/***/ 42886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ saveFileFromBuffer),
/* harmony export */   "r": () => (/* binding */ saveFileFromUrl)
/* harmony export */ });
// TODO: maybe fallback to normal HTML save file?
async function saveFileFromUrl(url, fileName) {
    await browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
async function saveFileFromBuffer(options) {
    const blob = new Blob([
        options.fileContent
    ], {
        type: options.mimeType
    });
    const url = URL.createObjectURL(blob);
    await browser.downloads.download({
        url,
        filename: options.fileName,
        saveAs: true
    });
}


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

/***/ 9955:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _shared_kv_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25683);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);


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
// Temporary, will be removed when the Mask SDK is ready
Reflect.set(globalThis, 'r2d2Fetch', _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.r2d2Fetch */ .ZP.Helper.r2d2Fetch);


/***/ }),

/***/ 20940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "Ps": () => (/* binding */ activateSocialNetworkUI)
/* harmony export */ });
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 58248)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
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


/***/ }),

/***/ 2532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext),
/* harmony export */   "N": () => (/* binding */ CompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 70226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* reexport safe */ _utils_message__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "V8": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fg),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fo),
/* harmony export */   "i1": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i1),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31293);
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37500);
/* harmony import */ var _utils_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73179);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93996);






/***/ }),

/***/ 98119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KP": () => (/* reexport */ PluginI18NFieldRender),
  "Rc": () => (/* reexport */ useActivatedPlugin/* useActivatedPlugin */.R),
  "Ne": () => (/* reexport */ useAllPluginsWeb3State/* useAllPluginsWeb3State */.N),
  "yH": () => (/* reexport */ useAvailablePlugins/* useAvailablePlugins */.y),
  "eS": () => (/* reexport */ usePluginI18NField),
  "fI": () => (/* reexport */ usePluginWrapper/* usePluginWrapper */.fI)
});

// UNUSED EXPORTS: useActivatedPluginWeb3State, useActivatedPluginWeb3UI

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(42711);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(95219);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(76859);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(17635);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAvailablePlugins.ts
var useAvailablePlugins = __webpack_require__(62294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useI18N.tsx


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,useTranslation/* useTranslation */.$)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: field
    });
}
function usePluginI18NField() {
    const [t] = (0,useTranslation/* useTranslation */.$)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}

// EXTERNAL MODULE: ../plugin-infra/src/hooks/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(82479);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/index.ts









/***/ }),

/***/ 82479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fI": () => (/* binding */ usePluginWrapper),
/* harmony export */   "yd": () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* unused harmony export emptyPluginWrapperMethods */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


/** @internal */ const emptyPluginWrapperMethods = {
    setWrap: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
function usePluginWrapper(open, options) {
    const { setWidth , setWrap , setWrapperName  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width , name  } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open)
        ;
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width)
    , [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name)
    , [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 87434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CB": () => (/* binding */ startPluginDashboard),
/* harmony export */   "eE": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "yf": () => (/* binding */ useActivatedPluginDashboard)
/* harmony export */ });
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

/***/ 77319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98119);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82479);






const PropsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_5__/* .PluginWrapperMethodsContext.Provider */ .yd.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .usePluginI18NField */ .eS)();
        const props = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .SV, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const allPlugins = usePlugins();
        const availablePlugins = (0,_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAvailablePlugins */ .yH)(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootIsolation */ .Q, {
                    "data-plugin": plugin.ID,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SinglePluginWithinErrorBoundary, {
                        plugin: plugin
                    })
                })
            }, plugin.ID)
        );
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .SV, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        ...data
    });
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const [f, setF] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const cancel = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>void f?.(data)
    , [
        f,
        data
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 91202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useLookupAddress)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58500);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);



function useLookupAddress(pluginId, domain) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginId);
    const { NameService , Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58500);
/* harmony import */ var _entry_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50719);


function useTransactions(pluginID, options) {
    const account = (0,_entry_web3__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .mA)(pluginID);
    const chainId = (0,_entry_web3__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)(pluginID);
    const hub = (0,_entry_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Hub */ .hh)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ createGlobalState)
/* harmony export */ });
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
    let currentValue = ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq;
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
        return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(sub);
    }
    function revalidate() {
        return f1().then((val)=>currentValue = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD)((0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(val))
        , (err)=>currentValue = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD)((0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(err))
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
/* harmony export */   "r8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.r8),
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

/***/ 44451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "WF": () => (/* reexport */ Shared/* CrossIsolationMessages */.W),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ Identifier/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "rP": () => (/* reexport */ Pure/* EMPTY_LIST */.r),
  "Nu": () => (/* reexport */ Pure/* EMPTY_OBJECT */.N),
  "J4": () => (/* reexport */ Mask/* EncryptionTargetType */.J),
  "Jk": () => (/* reexport */ Site/* EnhanceableSite */.Jk),
  "v_": () => (/* reexport */ Site/* ExtensionSite */.v_),
  "LM": () => (/* reexport */ personas/* MAX_PERSONA_LIMIT */.LM),
  "VS": () => (/* reexport */ MimeTypes),
  "BU": () => (/* reexport */ type/* NextIDAction */.B),
  "Vd": () => (/* reexport */ type/* NextIDPlatform */.V),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "G1": () => (/* reexport */ onDemandWorker/* OnDemandWorker */.G),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ Routes/* PopupRoutes */.mZ),
  "bb": () => (/* reexport */ Identifier/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ Identifier/* PostIdentifier */._P),
  "WO": () => (/* reexport */ Identifier/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Y_": () => (/* reexport */ SubscriptionDebug),
  "ps": () => (/* reexport */ Results/* andThenAsync */.ps),
  "mQ": () => (/* reexport */ src_crypto/* assertEC_Private_JsonWebKey */.mQ),
  "SR": () => (/* reexport */ asyncIterator/* asyncIteratorToArray */.S),
  "f1": () => (/* reexport */ src_crypto/* compressSecp256k1KeyRaw */.xb),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "Ap": () => (/* reexport */ Identifier/* convertIdentifierMapToRawMap */.Ap),
  "J5": () => (/* reexport */ Identifier/* convertRawMapToIdentifierMap */.J5),
  "qY": () => (/* reexport */ createConstantSubscription),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ createSubscriptionFromAsync),
  "WS": () => (/* reexport */ createSubscriptionFromAsyncSuspense),
  "_H": () => (/* reexport */ createSubscriptionFromValueRef),
  "a": () => (/* reexport */ createValueRefWithReady/* createValueRefWithReady */.a),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "Yj": () => (/* reexport */ src_crypto/* decompressSecp256k1KeyRaw */.Yj),
  "pf": () => (/* reexport */ src_crypto/* decompressSecp256k1Point */.pf),
  "DA": () => (/* reexport */ asyncIterator/* flattenAsyncIterator */.D),
  "Nb": () => (/* reexport */ personas/* formatPersonaFingerprint */.Nb),
  "rY": () => (/* reexport */ personas/* formatPersonaName */.rY),
  "lK": () => (/* reexport */ personas/* formatPersonaPublicKey */.lK),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "eP": () => (/* reexport */ color/* generateContactAvatarColor */.e),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation/* getLocalImplementation */.B),
  "kO": () => (/* reexport */ getLocalImplementation/* getLocalImplementationExotic */.k),
  "sv": () => (/* reexport */ Site/* getSiteType */.sv),
  "SF": () => (/* reexport */ getSubscriptionCurrentValue),
  "BV": () => (/* reexport */ i18n/* i18NextInstance */.BV),
  "bG": () => (/* reexport */ src_crypto/* isAESJsonWebKey */.bG),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "PQ": () => (/* reexport */ src_crypto/* isEC_Private_JsonWebKey */.PQ),
  "d8": () => (/* reexport */ src_crypto/* isEC_Public_JsonWebKey */.d8),
  "zQ": () => (/* reexport */ Site/* isEnhanceableSiteType */.zQ),
  "Po": () => (/* reexport */ Site/* isExtensionSiteType */.Po),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ mapSubscription),
  "EB": () => (/* reexport */ mergeSubscription),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "tr": () => (/* reexport */ serializer/* registerSerializableClass */.tr),
  "zD": () => (/* reexport */ Routes/* relativeRouteOf */.Y_),
  "GM": () => (/* reexport */ serializer/* serializer */.GM),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC),
  "BF": () => (/* reexport */ i18n/* updateLanguage */.BF)
});

// UNUSED EXPORTS: Identifier, MAX_PERSONA_NAME_LENGTH, PersonaIdentifier, __DEBUG__ONLY__enableCryptoKeySerialization, assertAESJsonWebKey, assertEC_Public_JsonWebKey, pollingTask, removed

// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(716);
// EXTERNAL MODULE: ../shared-base/src/color/index.ts + 1 modules
var color = __webpack_require__(43477);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(18615);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(16819);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts + 1 modules
var i18n = __webpack_require__(45816);
// EXTERNAL MODULE: ../shared-base/src/Identifier/index.ts + 7 modules
var Identifier = __webpack_require__(57041);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(34523);
// EXTERNAL MODULE: ../shared-base/src/Messages/Mask.ts
var Mask = __webpack_require__(69395);
// EXTERNAL MODULE: ../shared-base/src/Messages/Shared.ts
var Shared = __webpack_require__(52881);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var type = __webpack_require__(84831);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(71521);
// EXTERNAL MODULE: ../shared-base/src/Pure/index.ts
var Pure = __webpack_require__(98981);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(30375);
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(99594);
// EXTERNAL MODULE: ../shared-base/src/serializer/index.ts
var serializer = __webpack_require__(13339);
// EXTERNAL MODULE: ../shared-base/src/Site/index.ts
var Site = __webpack_require__(41385);
// EXTERNAL MODULE: ../shared-base/src/utils/asyncIterator.ts
var asyncIterator = __webpack_require__(98508);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(5646);
// EXTERNAL MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
var getLocalImplementation = __webpack_require__(68043);
// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(31600);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(67149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../shared-base/src/utils/subscription.ts


async function getSubscriptionCurrentValue(getSubscription, retries = 3) {
    const getValue = ()=>{
        return getSubscription()?.getCurrentValue();
    };
    const createReader = async ()=>{
        try {
            return getValue();
        } catch (error) {
            if (!(error instanceof Promise)) return;
            await error;
            return getValue();
        }
    };
    const createReaders = Array.from({
        length: retries
    }).fill(()=>createReader()
    );
    for (const createReader1 of createReaders){
        try {
            return await createReader1();
        } catch  {
            continue;
        }
    }
    return;
}
function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value
        ,
        subscribe: ()=>noop/* default */.Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange, signal) {
    const { getCurrentValue , subscribe  } = createSubscriptionFromAsyncSuspense(f, onChange, signal);
    return {
        subscribe,
        getCurrentValue: ()=>{
            try {
                return getCurrentValue();
            } catch  {
                return defaultValue;
            }
        }
    };
}
function createSubscriptionFromAsyncSuspense(f, onChange, signal) {
    const { subscribe , trigger  } = getEventTarget();
    let value = esm/* None */.Hq;
    const setter = (v)=>{
        value = (0,esm/* Some */.bD)(v);
        trigger();
    };
    // initial request
    const promise = f().then(setter);
    // follow-up updating
    const listen = onChange(()=>f().then(setter)
    );
    signal?.addEventListener('abort', listen, {
        once: true
    });
    return {
        getCurrentValue: ()=>{
            if (value.none) throw promise;
            return value.val;
        },
        subscribe: (sub)=>{
            if (signal?.aborted) return noop/* default */.Z;
            const undo = subscribe(sub);
            signal?.addEventListener('abort', undo, {
                once: true
            });
            return ()=>void undo()
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all data to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 500);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}
function mapSubscription(sub, mapper) {
    return {
        getCurrentValue () {
            return mapper(sub.getCurrentValue());
        },
        subscribe: sub.subscribe
    };
}
function mergeSubscription(...subscriptions) {
    return {
        getCurrentValue () {
            return subscriptions.map((x)=>x.getCurrentValue()
            );
        },
        subscribe: (callback)=>{
            const removeListeners = subscriptions.map((x)=>x.subscribe(callback)
            );
            return ()=>removeListeners.forEach((x)=>x()
                )
            ;
        }
    };
}
function createSubscriptionFromValueRef(ref, signal) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>{
            if (signal?.aborted) return noop/* default */.Z;
            const f = ref.addListener(sub);
            signal?.addEventListener('abort', f, {
                once: true
            });
            return f;
        }
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}

// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(77489);
// EXTERNAL MODULE: ../shared-base/src/utils/personas.ts
var personas = __webpack_require__(53734);
// EXTERNAL MODULE: ../shared-base/src/utils/createValueRefWithReady.ts
var createValueRefWithReady = __webpack_require__(12395);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts










var MimeTypes;
(function(MimeTypes) {
    MimeTypes["JSON"] = 'application/json';
    MimeTypes["Binary"] = 'application/octet-stream';
})(MimeTypes || (MimeTypes = {}));

// EXTERNAL MODULE: ../shared-base/src/onDemandWorker/index.ts
var onDemandWorker = __webpack_require__(34953);
;// CONCATENATED MODULE: ../shared-base/src/index.ts





















/***/ }),

/***/ 53734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": () => (/* binding */ MAX_PERSONA_LIMIT),
/* harmony export */   "Nb": () => (/* binding */ formatPersonaFingerprint),
/* harmony export */   "lK": () => (/* binding */ formatPersonaPublicKey),
/* harmony export */   "rY": () => (/* binding */ formatPersonaName)
/* harmony export */ });
/* unused harmony export MAX_PERSONA_NAME_LENGTH */
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ChainIcon)
/* harmony export */ });
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
const ChainIcon = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ color , size =12.5 , ...props })=>{
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.point,
        style: {
            width: size,
            height: size,
            backgroundColor: color
        }
    });
});


/***/ }),

/***/ 10262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ ConcealableTabs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55031);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64947);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);







const TAB_WIDTH = 126;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            display: 'flex',
            position: 'relative',
            backgroundColor: theme.palette.background.default,
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                backgroundColor: theme.palette.divider,
                zIndex: 0
            }
        },
        track: {
            flexGrow: 1,
            display: 'flex',
            overflow: 'auto',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            height: 35,
            minWidth: TAB_WIDTH,
            padding: theme.spacing(0, 2.5),
            borderRadius: 0,
            flexShrink: 0,
            border: '1px solid transparent'
        },
        normal: {
            boxSizing: 'border-box',
            color: `${theme.palette.text.secondary} !important`,
            backgroundColor: theme.palette.background.default,
            border: '1px solid transparent',
            '&:hover': {
                color: `${theme.palette.text.primary} !important`,
                backgroundColor: theme.palette.background.default
            }
        },
        selected: {
            color: `${theme.palette.text.primary} !important`,
            backgroundColor: theme.palette.background.paper,
            border: '1px solid',
            borderColor: theme.palette.background.paper,
            borderBottomColor: theme.palette.background.paper,
            '&:hover': {
                borderBottomColor: theme.palette.background.paper,
                backgroundColor: theme.palette.background.paper
            },
            position: 'relative',
            zIndex: 10,
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: 1,
                backgroundColor: theme.palette.background.paper
            }
        },
        controllers: {
            display: 'flex',
            flexGrow: 0,
            alignItems: 'center',
            borderLeft: `1px solid ${theme.palette.divider}`
        },
        controller: {
            display: 'flex',
            minWidth: 35,
            color: theme.palette.text.primary,
            border: 'none',
            width: 35,
            height: 35,
            borderRadius: 0,
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
                border: 'none !important',
                borderBottomColor: theme.palette.divider,
                color: `${theme.palette.text.primary} !important`,
                backgroundColor: theme.palette.background.paper
            },
            '&[disabled]': {
                backgroundColor: theme.palette.background.default
            }
        }
    })
);
function ConcealableTabs({ className , tabs , selectedId , tail , onChange , ...rest }) {
    const { classes  } = useStyles();
    const [overflow, setOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const trackRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [reachedLeftEdge, setReachedLeftEdge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [reachedRightEdge, setReachedRightEdge] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const isWider = tabList.scrollWidth > tabList.offsetWidth;
        setOverflow(isWider);
        if (!isWider) return;
        const detectScrollStatus = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>{
            const reachedRight = tabList.scrollWidth - tabList.offsetWidth <= tabList.scrollLeft;
            const reachedLeft = tabList.scrollLeft === 0;
            setReachedRightEdge(reachedRight);
            setReachedLeftEdge(reachedLeft);
        }, 100);
        detectScrollStatus();
        tabList.addEventListener('scroll', detectScrollStatus);
        return ()=>{
            tabList.removeEventListener('scroll', detectScrollStatus);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (selectedId === undefined && tabs.length) {
            onChange?.(tabs[0].id);
        }
    }, [
        selectedId,
        tabs.map((x)=>x.id
        ).join(),
        onChange
    ]);
    const slide = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((toLeft)=>{
        const tabList = trackRef.current;
        if (!tabList) return;
        const scrolled = Math.round(tabList.scrollLeft / TAB_WIDTH);
        tabList.scrollTo({
            left: TAB_WIDTH * (scrolled + (toLeft ? 1 : -1)),
            behavior: 'smooth'
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, classes.container),
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.track,
                ref: trackRef,
                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        disableRipple: true,
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, selectedId === tab.id ? classes.selected : classes.normal),
                        role: "button",
                        onClick: ()=>{
                            onChange?.(tab.id);
                        },
                        children: tab.label
                    }, tab.id)
                )
            }),
            overflow || tail ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controllers,
                children: [
                    overflow ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                disableRipple: true,
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.normal, classes.controller),
                                disabled: reachedLeftEdge,
                                onClick: ()=>{
                                    slide(false);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .LeftArrowIcon */ .q, {
                                    color: "inherit"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                disableRipple: true,
                                disabled: reachedRightEdge,
                                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.normal, classes.controller),
                                onClick: ()=>{
                                    slide(true);
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .RightArrowIcon */ .A, {
                                    color: "inherit"
                                })
                            })
                        ]
                    }) : null,
                    tail
                ]
            }) : null
        ]
    });
}


/***/ }),

/***/ 36579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ ElementAnchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73932);
/* harmony import */ var _react_hookz_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81540);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);




const ElementAnchor = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ callback , children  })=>{
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const intersection = (0,_react_hookz_web__WEBPACK_IMPORTED_MODULE_2__/* .useIntersectionObserver */ .S)(elementRef, {
        rootMargin: '200px'
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!intersection?.isIntersecting) return;
        callback(intersection);
    }, [
        intersection
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        pt: 1,
        ref: elementRef,
        justifyContent: "center",
        direction: "row",
        children: children
    });
});


/***/ }),

/***/ 99341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ImageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);


const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        icon: {}
    };
});
function ImageIcon(props) {
    const { size =48 , icon  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        height: size,
        width: size,
        src: icon?.toString(),
        className: classes.icon
    });
}


/***/ }),

/***/ 28586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ RetryHint)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18261);




const RetryHint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ retry , hint =true  })=>{
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        height: hint ? '100%' : '100px',
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            gap: 2.75,
            children: [
                hint && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    children: t.load_failed()
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    size: "small",
                    style: {
                        borderRadius: 16
                    },
                    onClick: retry,
                    children: t.load_retry()
                })
            ]
        })
    });
});


/***/ }),

/***/ 25593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MiniNetworkSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85792);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96436);
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
const MiniNetworkSelector = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ hideAllNetworkButton =false , onSelect , networks =[] , selectedNetwork , disabledNonCurrentNetwork =false , size =30 ,  })=>{
    const { classes  } = useStyles({
        size
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        direction: "row",
        children: [
            !hideAllNetworkButton && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AllNetworkButton, {
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
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
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
                    children: network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_WalletIcon__WEBPACK_IMPORTED_MODULE_4__/* .WalletIcon */ .o, {
                        mainIcon: network.icon,
                        size: size
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChainIcon__WEBPACK_IMPORTED_MODULE_3__/* .ChainIcon */ .f, {
                        color: network.iconColor,
                        size: size
                    })
                }, network.ID);
            })
        ]
    });
});


/***/ }),

/***/ 94323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ NFTCardStyledAssetPlayer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69314);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _AssetPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60879);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67938);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91295);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 160,
            width: 120,
            overflow: 'hidden'
        },
        loadingPlaceholder: {
            height: 160,
            width: 120
        },
        loadingIcon: {
            width: 36,
            height: 52
        },
        imgWrapper: {
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
);
const assetPlayerFallbackImageDark = new URL(/* asset import */ __webpack_require__(39952), __webpack_require__.b);
const assetPlayerFallbackImageLight = new URL(/* asset import */ __webpack_require__(39872), __webpack_require__.b);
function NFTCardStyledAssetPlayer(props) {
    const { chainId , contractAddress ='' , tokenId ='' , isNative =false , fallbackImage , fallbackResourceLoader , url , setERC721TokenName , renderOrder , setSourceType ,  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const { value: tokenDetailed  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useNonFungibleToken */ .bs)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, contractAddress, url ? undefined : tokenId, undefined, {
        chainId
    });
    const { value: isImageToken  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useImageChecker */ .vI)(url || tokenDetailed?.metadata?.imageURL || tokenDetailed?.metadata?.mediaURL);
    const fallbackImageURL = theme.palette.mode === 'dark' ? assetPlayerFallbackImageDark : assetPlayerFallbackImageLight;
    return isImageToken || isNative ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.imgWrapper,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            width: "100%",
            style: {
                objectFit: 'cover'
            },
            src: url || tokenDetailed?.metadata?.imageURL || tokenDetailed?.metadata?.mediaURL,
            onError: (event)=>{
                const target = event.currentTarget;
                target.src = fallbackImageURL.toString();
                target.classList.add(classes.loadingFailImage ?? '');
            }
        })
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AssetPlayer__WEBPACK_IMPORTED_MODULE_3__/* .AssetPlayer */ .I, {
        showIframeFromInit: true,
        erc721Token: {
            chainId,
            contractAddress,
            tokenId
        },
        url: url,
        options: {
            autoPlay: true,
            controls: false,
            playsInline: true
        },
        setERC721TokenName: setERC721TokenName,
        setSourceType: setSourceType,
        // It would fail to render as loading too many(>200) iframe at once.
        renderTimeout: renderOrder ? 20000 * Math.floor(renderOrder / 100) : undefined,
        fallbackImage: fallbackImage ?? fallbackImageURL,
        loadingIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            size: 20
        }),
        classes: {
            iframe: classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes.wrapper, classes.iframe),
            errorPlaceholder: classes.wrapper,
            loadingPlaceholder: classes.wrapper,
            loadingFailImage: classes.loadingFailImage,
            loadingIcon: classes.loadingIcon
        },
        fallbackResourceLoader: fallbackResourceLoader
    });
}


/***/ }),

/***/ 61933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50719);



const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address , pluginId , domainSize , size =5  })=>{
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$q)(pluginId, address);
    const { Others  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .dM)(pluginId);
    if (!domain || !Others?.formatDomainName) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Others?.formatAddress?.(address, size) ?? address
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Others.formatDomainName(domain, domainSize)
    });
});


/***/ }),

/***/ 43894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useShowConfirm),
/* harmony export */   "W": () => (/* binding */ ConfirmProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _UITaskManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30613);
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80670);



const { TaskManagerContext , TaskManagerProvider: ConfirmProvider  } = (0,_UITaskManager__WEBPACK_IMPORTED_MODULE_1__/* .createUITaskManager */ .R)(_Dialog__WEBPACK_IMPORTED_MODULE_2__/* .ConfirmDialog */ .Q);
const useShowConfirm = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(TaskManagerContext).show;
};



/***/ }),

/***/ 18572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* reexport */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(52775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71246);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(13305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(18261);
// EXTERNAL MODULE: ../shared/src/contexts/base/index.ts + 1 modules
var base = __webpack_require__(22017);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(86392);
;// CONCATENATED MODULE: ../shared/src/contexts/components/DialogDismissIcon.tsx




function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/InjectedDialog.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { clean  })=>({
        dialogTitle: {
            whiteSpace: 'nowrap',
            display: 'flex',
            gridTemplateColumns: '50px auto 50px'
        },
        dialogTitleEndingContent: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            flex: 1,
            textAlign: 'center',
            verticalAlign: 'middle',
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 700
        },
        dialogCloseButton: {
            color: theme.palette.text.primary,
            padding: 0,
            width: 24,
            height: 24,
            '& > svg': {
                fontSize: 24
            }
        },
        paper: clean ? {
            width: 'auto',
            backgroundImage: 'none'
        } : {}
    })
);
function InjectedDialog(props) {
    const snsId = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUINetworkIdentifier */.Xr);
    const overwrite = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUIComponentOverwrite */.vU);
    props = overwrite.InjectedDialog?.props?.(props) ?? props;
    const clean = snsId === src/* EnhanceableSite.Minds */.Jk.Minds || snsId === src/* EnhanceableSite.Facebook */.Jk.Facebook;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleEndingContent , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,entry/* useStylesExtends */.Bc)(useStyles({
        clean
    }), props, overwrite.InjectedDialog?.classes);
    const t = (0,locales/* useSharedI18N */.B)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , titleTail =null , disableTitleBorder , isOpenFromApplicationBoard , ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,entry/* useDialogStackActor */.tE)(open);
    const closeBothCompositionDialog = (0,react.useCallback)(()=>{
        if (isOpenFromApplicationBoard) {
            src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                open: false,
                reason: 'timeline'
            });
        }
        onClose?.();
    }, [
        isOpenFromApplicationBoard
    ]);
    return (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose?.();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...(0,omit/* default */.Z)(rest, 'isOnBack'),
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_base_ui_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    disableRipple: true,
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: !props.isOnBack ? closeBothCompositionDialog : onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: titleBarIconStyle !== 'close' && shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                    className: dialogTitleEndingContent,
                                    children: titleTail
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        })
    );
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>child?.type === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,entry/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null
    ) || []).filter(Boolean);
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/index.ts



/***/ }),

/***/ 53661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useSnackbarCallback)
/* harmony export */ });
/* unused harmony export usePopupSnackbarCallback */
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18261);



function useSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .useCustomSnackbar */ .Ii)();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>executor(...args).then((res)=>{
            showSnackbar(successText ?? t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess?.(res);
            return res;
        }, (error)=>{
            showSnackbar(`Error: ${error.message || error}`, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError?.(error);
            throw error;
        })
    , [
        ...deps,
        showSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}
function usePopupSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = useSharedI18N();
    const { showSnackbar  } = usePopupCustomSnackbar();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return useCallback((...args)=>executor(...args).then((res)=>{
            showSnackbar(successText ?? t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess?.(res);
            return res;
        }, (error)=>{
            showSnackbar(error.message, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError?.(error);
            throw error;
        })
    , [
        ...deps,
        showSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}


/***/ }),

/***/ 59478:
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
/* harmony export */   "D": () => (/* binding */ applyMaskColorVars),
/* harmony export */   "P": () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
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
        for (const key of Object.keys(ns)){
            // --mask-name: val;
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}: ${ns[key]};\n`;
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for (const key of Object.keys(ns)){
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key), ns[key]);
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}


/***/ }),

/***/ 7848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ ButtonGroupTabList)
});

// UNUSED EXPORTS: ButtonTab

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
 */ const ButtonTab = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const activated = !!props.selected;
    const { onChange , onClick , value  } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    // TODO: replace secondary to correct theme color
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TabButtonWrap, {
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
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ButtonGroup/ButtonGroup.js + 1 modules
var ButtonGroup = __webpack_require__(34574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
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
 */ const ButtonGroupTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return child;
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab/* default */.Z) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonTab, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            });
        }
        return /*#__PURE__*/ (0,react.cloneElement)(child, extra);
    });
    const { onChange , ...rest } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroup/* default */.Z, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    });
});

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 75168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CountdownButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85792);



const CountdownButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { duration =60 , children , repeatContent ='Resend' , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick?.(event);
    };
    const content = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ref: ref,
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: content
    });
});


/***/ }),

/***/ 54650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PhoneNumberField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96436);
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
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.phone);
    const [countryCode, setCountryCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.country);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ SendingCodeField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32876);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75168);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , autoSend =false , onChange  })=>{
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const sendButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange?.(code);
    }, [
        code
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (autoSend) sendButton.current?.click();
    }, [
        autoSend
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            flex: 1,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
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
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountdownButton__WEBPACK_IMPORTED_MODULE_3__/* .CountdownButton */ .q, {
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

/***/ 94708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var Provider = __webpack_require__(32920);
// EXTERNAL MODULE: ../theme/src/Theme/theme.ts
var theme = __webpack_require__(8647);
;// CONCATENATED MODULE: ../theme/src/Theme/index.ts





/***/ }),

/***/ 8647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ MaskLightTheme),
/* harmony export */   "H": () => (/* binding */ MaskDarkTheme)
/* harmony export */ });
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

/***/ 21933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useSystemPreferencePalette)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52775);

function useSystemPreferencePalette() {
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}


/***/ }),

/***/ 72499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ej": () => (/* binding */ DebankTransactionDirection),
/* harmony export */   "W8": () => (/* binding */ EthereumMethodType),
/* harmony export */   "XQ": () => (/* binding */ SchemaType),
/* harmony export */   "a_": () => (/* binding */ ChainId),
/* harmony export */   "iE": () => (/* binding */ TransactionEventType),
/* harmony export */   "iU": () => (/* binding */ TransactionType),
/* harmony export */   "lP": () => (/* binding */ ProviderType),
/* harmony export */   "n$": () => (/* binding */ TransactionStateType),
/* harmony export */   "sl": () => (/* binding */ FilterTransactionType),
/* harmony export */   "so": () => (/* binding */ ZerionTransactionDirection),
/* harmony export */   "td": () => (/* binding */ NetworkType)
/* harmony export */ });
/* unused harmony exports DomainProvider, FungibleAssetProvider, NonFungibleAssetProvider */
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

/***/ 46123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.Cq),
/* harmony export */   "GT": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.GT),
/* harmony export */   "Gx": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.Gx),
/* harmony export */   "J3": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.J3),
/* harmony export */   "P": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.P),
/* harmony export */   "PQ": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.PQ),
/* harmony export */   "VJ": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.VJ),
/* harmony export */   "Vs": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.Vs),
/* harmony export */   "YT": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.YT),
/* harmony export */   "Yl": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.Yl),
/* harmony export */   "dq": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.dq),
/* harmony export */   "gw": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.gw),
/* harmony export */   "ll": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.ll),
/* harmony export */   "n5": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.n5),
/* harmony export */   "rj": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.rj),
/* harmony export */   "sS": () => (/* reexport safe */ _media_index_js__WEBPACK_IMPORTED_MODULE_1__.sS),
/* harmony export */   "t1": () => (/* reexport safe */ _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__.t1),
/* harmony export */   "uL": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.uL),
/* harmony export */   "v_": () => (/* reexport safe */ _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__.v_),
/* harmony export */   "xe": () => (/* reexport safe */ _web_index_js__WEBPACK_IMPORTED_MODULE_3__.xe)
/* harmony export */ });
/* harmony import */ var _ecmascript_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9074);
/* harmony import */ var _media_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16684);
/* harmony import */ var _typescript_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91339);
/* harmony import */ var _web_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27554);




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ blobToText),
/* harmony export */   "n": () => (/* binding */ blobToDataURL)
/* harmony export */ });
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

/***/ 62012:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"About","wallets":"Wallets","personas":"Personas","persona":"Persona","refresh":"Refresh","next":"Next","cancel":"Cancel","back":"Back","agree":"Agree","confirm":"Confirm","verify":"Verify","go_back":"Go back","connect":"Connect","searching":"Searching","restore":"Restore","save":"Save","manage":"Manage","recovery":"Recovery","successful":"Successful","close":"Close","send":"Send","resend":"Resend","print":"Print","download":"Download","print_preview":"Print Preview","download_preview":"Download Preview","confirm_password":"Confirm Password","about_dialog_license":"License: ","footer_bounty_list":"Bounty List","about_dialog_source_code":"Source Code: ","about_dialog_feedback":"Feedback: ","about_dialog_touch":"Get in touch","about_dialog_description":"Mask Network is the portal to the new, open internet. Mask allows you to send encrypted posts on social networks. We provide more functions such as sending encrypted lucky drops, purchasing cryptocurrencies, file service, etc.","setup_page_title":"Welcome to Mask Network","setup_page_description":"Encrypt your posts & chats on social networks, allow only your friends to decrypt.","setup_page_create_account_title":"Create an Identity","setup_page_create_account_subtitle":"Create your digital identity system, explore Web 3.0","setup_page_create_account_button":"Create","setup_page_create_restore_title":"Restoring from Identity or Backups","setup_page_create_restore_subtitle":"Restoring from identity & historical backups.","setup_page_create_restore_button":"Recovery or Sign In","create_account_mask_id":"MASK ID","create_account_private_key":"Private Key","create_account_identity_id":"Identity ID","create_account_identity_title":"Create an Identity for Mask Network","create_account_sign_in_button":"Recovery","create_account_persona_exists":"Persona already exists.","create_account_mnemonic_download_or_print":"I have kept my identity code safely.","create_account_preview_tip":"This QR code contains your identity code, please keep it safely. You can scan QR code to login your persona in Mask App.","create_account_mnemonic_confirm_failed":"Incorrect identity code","create_account_connect_social_media_button":"Create","create_account_connect_social_media":"Connect to {{type}}","create_account_persona_title":"Welcome to Mask Network","create_account_persona_subtitle":"You can create personas and connect social accounts","create_account_persona_successfully":"Create persona successfully","create_account_connect_social_media_title":"Connect Social Media","create_account_failed":"Create Account Failed","sign_in_account_identity_title":"Recover your persona","sign_in_account_tab_identity":"Identity","sign_in_account_sign_up_button":"Sign Up","sign_in_account_identity_warning":"The digital identity code can only recover your digital identity. It can encrypt and decrypt the social information signed and sent by this digital identity.","sign_in_account_private_key_placeholder":"Input your Private Key","sign_in_account_private_key_error":"Incorrect Private Key","sign_in_account_private_key_persona_not_found":"Can\'t find persona","sign_in_account_private_key_warning":"The private key of your identity code can only recover your persona. It can encrypt and decrypt the social information signed and sent by your persona.","sign_in_account_mnemonic_confirm_failed":"Incorrect identity","sign_in_account_cloud_backup_send_email_success":"Verification code was sent to your {{type}}. Please check your {{type}}.","sign_in_account_local_backup_warning":"Local backup can recover all the data that has been stored locally.","sign_in_account_local_backup_payment_password":"Payment Password","sign_in_account_local_backup_file_drag":"Please click or drag the file here","sign_in_account_cloud_backup_warning":"The cloud backup hosts and encrypts your data.","sign_in_account_cloud_backup_not_support":"Unsupported data backup","sign_in_account_cloud_send_verification_code_tip":"Send verification code to","sign_in_account_cloud_backup_failed":"Restore backup failed, Please try again.","sign_in_account_cloud_backup_email_or_phone_number":"E-mail or phone number","sign_in_account_cloud_backup_password":"Backup password","sign_in_account_cloud_restore_failed":"Restore failed","sign_in_account_cloud_backup_download_failed":"Download backup failed","sign_in_account_cloud_backup_decrypt_failed":"Decrypt failed, please check password","sign_in_account_cloud_backup_email_format_error":"The email is incorrect.","sign_in_account_cloud_backup_phone_format_error":"The phone number is incorrect.","sign_in_account_cloud_backup_synchronize_password_tip":"You have successfully verified your cloud password and recovered your backup. To unify backup passwords, do you want to synchronize your cloud password as local backup password?","cloud_backup":"Cloud Backups","wallets_transfer":"Transfer","wallets_assets":"Assets","wallets_transfer_memo":"Memo","wallets_transfer_amount":"Amount","wallets_transfer_to_address":"To Address","wallets_transfer_error_amount_absence":"Enter an amount","wallets_transfer_error_address_absence":"Enter recipient address","wallets_transfer_error_contract":"Select NFT contract","wallets_transfer_error_nft":"Select one NFT","wallets_transfer_error_invalid_address":"Invalid recipient address","wallet_transfer_error_no_address_has_been_set_name":"The address of the receiver is invalid.","wallet_transfer_error_no_ens_support":"Network does not support ENS.","wallets_transfer_error_insufficient_balance":"Insufficient {{symbol}} balance","wallets_transfer_error_same_address_with_current_account":"This receiving address is the same as the sending address. Please check again.","wallets_transfer_error_is_contract_address":"The receiving address is contract address. Please check again.","wallets_transfer_send":"Send","wallets_transfer_memo_placeholder":"Optional message","wallets_transfer_contract":"Contract","wallets_transfer_contract_placeholder":"Select an NFT Contract","wallets_swap":"Swap","wallets_red_packet":"Lucky drop","wallets_sell":"Sell","wallets_history":"History","settings":"Settings","gas_fee":"Transaction fee","transfer_cost":"Cost {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"Done","labs":"D.Market","wallet_transactions_pending":"Pending","wallet_gas_fee_settings_low":"Low","wallet_gas_fee_settings_medium":"Medium","wallet_gas_fee_settings_high":"High","wallets_startup_create":"Create A New Wallet","wallets_startup_create_desc":"Mask wallet supports ETH、 BSC and Polygon/Matic networks.","wallets_startup_create_action":"Create","wallets_startup_import":"Import Wallet","wallets_startup_import_desc":"Mask wallet supports Private Key, JSON.File and Mnemonic words.","wallets_startup_import_action":"Import","wallets_startup_connect":"Connect Wallet","wallets_startup_connect_desc":"Supports Mask Wallet, MetaMask and WalletConnect.","wallets_startup_connect_action":"Connect","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"Connect Wallet","wallets_connect_wallet_polka":"PolkaDot Wallet","wallets_create_wallet_input_placeholder":"Wallet Name","wallets_create_successfully_title":"Success","wallets_create_successfully_tips":"You have created your wallet successfully","wallets_create_successfully_unlock":"Unlock Wallet","wallets_create_wallet_alert":"Mask Network is a free, open-source, client-side interface. Mask Network allows you to interact directly with the blockchain, while you remain in full control of your keys and funds.Please think about this carefully. YOU are the one who is in control. Mask Network is not a bank or exchange. We don\'t hold your keys, your funds, or your information. This means we can\'t access accounts, recover keys, reset passwords, or reverse transactions.","wallets_wallet_connect_title":"Scan QR code with WalletConnect-compatible wallet","wallets_wallet_mnemonic":"Mnemonic","wallets_wallet_json_file":"Local Backup","wallets_wallet_private_key":"Private Key","wallets_import_wallet_tabs":"Import Wallet Tabs","wallets_import_wallet_password_placeholder":"Wallet Password","wallets_import_wallet_cancel":"Cancel","wallets_import_wallet_import":"Import","wallets_create_wallet_tabs":"Create Wallet Tabs","wallets_create_wallet_refresh":"Refresh","wallets_create_wallet_remember_later":"Remember that later","wallets_create_wallet_verification":"Verification","wallets_collectible_address":"Collectible Address","wallets_collectible_token_id":"Token ID","wallets_collectible_field_contract_require":"The collectible address is required","wallets_collectible_field_token_id_require":"The token id is required","wallets_collectible_load_end":"Load end","wallets_balance":"Balance on","wallets_balance_all_chain":"all chains","wallets_balance_Send":"Send","wallets_balance_Buy":"Buy","wallets_balance_Swap":"Swap","wallets_balance_Receive":"Receive","wallets_assets_token":"Token","wallets_assets_token_sent_not_connect_tip":"Not connected to {{chainName}}.","wallets_assets_token_sent_switch_network_tip":"Click to switch.","wallets_assets_investment":"Investment","wallets_assets_collectibles":"Collectibles","wallets_assets_custom_token":"Custom Token","wallets_assets_custom_collectible":"Custom Collectible","wallets_assets_asset":"Asset","wallets_assets_balance":"Balance","wallets_assets_price":"Price","wallets_assets_value":"Value","wallets_assets_operation":"Operation","wallets_address":"Wallet Address","wallets_receive_tips":"Scan the QR code and transfer {{chainName}} assets to it","wallets_add_collectible":"Add Collectible","wallets_incorrect_address":"Incorrect contract address.","wallets_collectible_been_added":"The Collectible has already been added.","wallets_collectible_error_not_exist":"The collectible does not exist or belong to you.","wallets_collectible_contract_is_empty":"Please select contract","wallets_collectible_token_id_is_empty":"Please select collectible","wallets_collectible_add":"Add","wallets_add_token":"Add Token","wallets_token_been_added":"Token has already been added.","wallets_token_symbol_tips":"Symbol must be 11 characters or fewer.","wallets_token_decimals_tips":"Decimals must be at least 0, and not over 18.","wallets_add_token_contract_address":"Token Contract Address","wallets_add_token_symbol":"Token Symbol","wallets_add_token_decimals":"Decimals of Precision","wallets_add_token_cancel":"Cancel","wallets_add_token_next":"Next","wallets_empty_tokens_tip":"No assets were found. Please add tokens.","wallets_empty_collectible_tip":"No collectibles were found. Please add Collectibles.","wallets_reload":"Reload","wallets_address_copied":"Address successfully copied","public_key_copied":"Public key successfully copied","wallets_address_copy":"Copy","wallets_history_types":"Types","wallets_history_value":"Value","wallets_history_time":"Time","wallets_history_receiver":"Interacted with (to)","wallets_empty_history_tips":"No transaction history","wallets_loading_token":"Loading Token","personas_setup_connect_tips":"Please connect to your {{type}} account.","personas_setup_tip":"Please to create/restore persona.","personas_setup_connect":"Connect","personas_name_maximum_tips":"Maximum length is {{length}} characters long.","personas_name_existed":"The persona name already exists","personas_rename_placeholder":"Persona Name","personas_confirm":"Confirm","personas_cancel":"Cancel","personas_export_persona":"Export Persona","personas_export_persona_copy":"Copy","personas_export_persona_copy_success":"Copied","personas_export_persona_copy_failed":"Copy failed","personas_export_persona_confirm_password_tip":"You haven’t set up your password. To export your persona, you must set up backup password first.","personas_export_private":"Export Private Key","personas_export_private_key_tip":"This export is only for exporting private key. We do not export any other data. If you need more data, please go to Settings:","personas_delete_confirm_tips":"Please confirm that you have deleted persona <i>{{nickname}}</i> and entered your password.","personas_delete_dialog_title":"Delete Persona","personas_edit_dialog_title":"Edit Persona","personas_edit":"Edit","personas_delete":"Delete","personas_logout":"Log out","personas_logout_confirm_password_tip":"You haven’t set up your password. To logout persona, you must set up backup password first.","personas_add_persona":"Add Persona","personas_back_up":"Back Up","personas_connect_to":"Connect to {{internalName}}","personas_disconnect":"Delete Persona Verification","personas_disconnect_raw":"Disconnect","personas_disconnect_warning":"Are you sure you want to delete persona verification?  Your mask friends can no longer send decrypted message to you by this persona or check your Web 3 products related with this persona.","personas_logout_warning":"After logging out, your associated social accounts can no longer decrypt past encrypted messages. If you need to reuse your account, you can use your private key for recovery.","personas_add":"Add","personas_upload_avatar":"Upload an avatar","personas_rename":"Rename","personas_invite_post":"@{{identifier}} Hi, would you please download Mask so that we can share our posts with encryption? #mask_io install http://mask.io","personas_empty_contact_tips":"You don’t have any contacts with Mask Network installed yet. Invite your friends to download <i>{{name}}</i>.","personas_contacts_name":"Name","personas_contacts_operation":"Operation","personas_contacts_invite":"Invite","personas_post_is_empty":"You haven\'t created any post yet.","personas_post_create":"Create Post","settings_general":"General","settings_backup_recovery":"Backup & Recovery","settings_local_backup":"Local Backup","settings_cloud_backup":"Cloud Backup","settings_appearance_default":"Follow system settings","settings_appearance_light":"Light","settings_appearance_dark":"Dark","settings_backup_preview_account":"Account","settings_backup_preview_personas":"Personas","settings_backup_preview_associated_account":"Associated Account","settings_backup_preview_posts":"Encrypted Post","settings_backup_preview_contacts":"Contacts","settings_backup_preview_file":"File","settings_backup_preview_wallets":"Mask Wallet","settings_backup_preview_created_at":"Backup Time","settings_language_title":"Language","settings_language_desc":"Select the language you would like to use","settings_language_auto":"Follow system","settings_appearance_title":"Appearance","settings_appearance_desc":"Select the theme you would like to use","settings_data_source_title":"Data Source","settings_data_source_desc":"Fetch trending data from different platforms","settings_sync_with_mobile_title":"Sync With Mobile","settings_sync_with_mobile_desc":"You can sync your accounts and information with your mobile device. Open the Mask Network mobile app, go to Settings and tap on Sync With Plug-ins","settings_global_backup_title":"Global Backup","settings_global_backup_desc":"Provide both local backup and cloud backup","settings_global_backup_last":"The most recent backup was made on {{backupAt}}. Backup method: {{backupMethod}}.","settings_restore_database_title":"Restore Database","settings_restore_database_desc":"Restore from a previous database backup","settings_email_title":"Email","settings_email_desc":"Please bind your email","settings_change_password_title":"Backup Password","settings_change_password_desc":"Change your backup password","settings_change_password_not_set":"You haven\'t set up a backup password","settings_phone_number_title":"Phone Number","settings_phone_number_desc":"Please bind your phone number","settings_password_rule":"Backup password must be between 8 and 20 characters and contain at least a number, a uppercase letter, a lowercase letter and a special character.","settings_button_cancel":"Cancel","settings_button_confirm":"Confirm","settings_button_sync":"Sync","settings_button_backup":"Backup","settings_button_recovery":"Recovery","settings_button_setup":"Setup","settings_button_change":"Change","settings_dialogs_bind_email_or_phone":"Please bind your email or phone number.","settings_dialogs_verify_backup_password":"Verify Backup Password","settings_dialogs_setting_backup_password":"Setting Backup Password","settings_dialogs_change_backup_password":"Change Backup Password","settings_dialogs_setting_email":"Setting Email","settings_dialogs_change_email":"Change Email","settings_dialogs_setting_phone_number":"Setting Phone Number","settings_dialogs_change_phone_number":"Change Phone Number","settings_dialogs_incorrect_code":"The verification code is incorrect.","settings_dialogs_incorrect_email":"The email address is incorrect.","settings_dialogs_incorrect_phone":"The phone number is incorrect.","settings_dialogs_incorrect_password":"Incorrect password.","settings_dialogs_inconsistency_password":"Password inconsistency.","settings_dialogs_current_email_validation":"The current email for verification is","settings_dialogs_change_email_validation":"To change the Email, you need to verify your current Email address:","settings_dialogs_current_phone_validation":"The current phone number for verification is","settings_dialogs_change_phone_validation":"To change the phone number, you need to verify your current phone number:","settings_dialogs_backup_to_cloud":"Backup to cloud","settings_dialogs_merge_to_local_data":"Merge Cloud backup to local and back up to cloud","settings_dialogs_backup_action_desc":"There is already a cloud backup, please merge the cloud backup to local before you back up, or back up directly.","settings_dialogs_backup_to_cloud_action":"This option overwrites the existing cloud backup with the local data.","settings_dialogs_backup_merge_cloud":"This option requires you to enter the password of the existing cloud backup for decryption. The existing cloud backup and local data are combined and then encrypted and uploaded to cloud.","settings_dialogs_backup_merged_tip":"You already obtained the cloud backup to your local. If you want to complete your back up, please click on the backup button to update all your data to cloud.","settings_label_backup_password":"Backup Password","settings_label_new_backup_password":"New Backup Password","settings_label_backup_password_cloud":"Backup passwords for files in the cloud","settings_label_payment_password":"Payment Password","settings_label_re_enter":"Re-enter","settings_alert_password_set":"Backup password set up successfully.","settings_alert_password_updated":"Backup password updated","settings_alert_email_set":"Email set","settings_alert_email_updated":"Email updated","settings_alert_phone_number_set":"Phone number set","settings_alert_phone_number_updated":"Phone number updated","settings_alert_backup_fail":"Backup Failed","settings_alert_backup_success":"You have successfully backed up your data.","settings_alert_validation_code_sent":"Verification code sent","settings_alert_merge_success":"You have successfully merged your cloud backup to the local data.","labs_file_service":"File Service","labs_file_service_desc":"Decentralized file storage, permanently. Upload and share files to your Mask friends on top of Arweave Network.","labs_markets":"ITO","labs_markets_desc":"Launch decentralized asset freely and participate in token launch directly on Twitter.","labs_red_packet":"Lucky Drop","labs_red_packet_desc":"Gift crypto or NFTs to any users, first come, first served.","labs_swap":"Swap","labs_swap_desc":"Pop-up trading widget that allows you to instantly view prices of the hottest Crypto/Stock and trade. Can also invest in the best performing managers.","labs_transak":"Fiat On-Ramp","labs_transak_desc":"Fiat On-Ramp Aggregator on Twitter. Buy crypto in 60+ countries with Transak support.","labs_savings":"Savings","labs_savings_desc":"Deploy your crypto into various savings protocols and watch your savings grow.","labs_snapshot":"Snapshot","labs_snapshot_desc":"Display and vote for proposals directly on social media.","labs_market_trend":"Market Trend","labs_market_trend_desc":"Display token information, price charts and exchange information directly on social media.","labs_collectibles":"Collectibles","labs_collectibles_desc":"Display specific information of collectibles in OpenSea and Rarible, make an offer directly on social media.","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"Display specific information of Gitcoin projects, donate to a project directly on social media.","labs_valuables":"Valuables","labs_valuables_desc":"Buy & sell tweets autographed by their original creators.","labs_dhedge":"dHEDGE","labs_dhedge_desc":"Decentralized hedge funds on Ethereum and Polygon (Matic).","labs_mask_box":"MaskBox","labs_mask_box_desc":"Professional multi-chain decentralized platform for launching NFT mystery boxes.","labs_loot_man":"LootMan by NonFFriend","labs_loot_man_desc":"Explore the endless possibilities of NFTs. Link and display your NFTs on social media in a revolutionized way.","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"Cultivate a weekly saving habit on Twitter.","labs_pool_together":"PoolTogether","labs_pool_together_desc":"Participate in lossless lottery on Twitter.","labs_settings_market_trend":"Market Trend Settings","labs_settings_market_trend_source":"Default Trending Source","labs_settings_swap":"Swap Settings","labs_settings_swap_network":"{{network}} Network Default Trading Source","labs_pets":"Non-Fungible Friends by Mint Team","labs_pets_desc":"Explore the endless possibilities of NFTs.","labs_cyber_connect":"CyberConnect","labs_cyber_connect_desc":"Decentralized social graph protocol for user-centric Web3","labs_setup_tutorial":"Setup Tutorial","labs_do_not_show_again":"Don\'t show again.","labs_cryptoartai":"CRYPTOART.AI","labs_cryptoartai_desc":"Connect CryptoArt Digital Artworks. The Internationale is a classic anthem that has been a shared memory for generations.","labs_art_blocks":"Artblocks","labs_art_blocks_desc":"Artblocks allow you to pick a style that you like, pay for the work, and a randomly generated version of the content is created by an algorithm and sent to your Ethereum account.","dashboard_mobile_test":"Join Tests for Mobile","dashboard_source_code":"Source Code","privacy_policy":"Privacy Policy","version_of_stable":"Version {{version}}","version_of_unstable":"Version {{version}}-{{build}}-{{hash}}","register_restore_backups":"Restore Backups","register_restore_backups_cancel":"Cancel","register_restore_backups_confirm":"Restore","register_restore_backups_hint":"Please click or drag the file here","register_restore_backups_file":"File","register_restore_backups_text":"Text","register_restore_backups_tabs":"Restore Backup Tabs","create_wallet_mnemonic_tip":"Do not forget to save your mnemonic phrase. You will need this to access your wallet.","create_wallet_password_uppercase_tip":"Must contain an uppercase character","create_wallet_password_lowercase_tip":"Must contain a lowercase character","create_wallet_password_number_tip":"Must contain a number","create_wallet_password_special_tip":"Must contain a special character","create_wallet_password_satisfied_requirement":"The password is not satisfied the requirement.","create_wallet_password_match_tip":"The password does not match.","create_wallet_password_length_error":"The password length is incorrect.","create_wallet_name_placeholder":"Enter 1-12 characters","create_wallet_form_title":"Create a wallet","create_wallet_wallet_name":"Wallet Name","create_wallet_payment_password":"Payment Password","create_wallet_re_enter_payment_password":"Re-enter the payment password","create_wallet_payment_password_tip":"Payment Password must be a combination of 2 categories out of numbers, letters and special characters with a length of 8-20 characters.","create_wallet_your_wallet_address":"Your wallet address","create_wallet_done":"Done","create_wallet_verify_words":"Verify mnemonic words","create_wallet_mnemonic_word_not_match":"The mnemonic word is incorrect"}');

/***/ }),

/***/ 97979:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"About","wallets":"ウォレット","personas":"ペルソナ","persona":"ペルソナ","refresh":"更新","next":"Next","cancel":"Cancel","back":"Back","agree":"同意","confirm":"確認","verify":"認証","go_back":"戻る","connect":"接続","searching":"検索中…","restore":"復元","save":"保存","manage":"管理","recovery":"復旧","successful":"成功","close":"終了","send":"送信","resend":"再送信","confirm_password":"パスワード確認","about_dialog_license":"ライセンス： ","footer_bounty_list":"報奨金リスト","about_dialog_source_code":"ソースコード： ","about_dialog_feedback":"フィードバック： ","about_dialog_touch":"お問い合わせ","about_dialog_description":"Mask Networkは、新しいオープンなインターネットへのポータルです。Maskは、ソーシャルネットワーク上で暗号化された投稿を送ることができます。暗号化されたRedPacketの送信、暗号通貨の購入、ファイルサービスなど、より多くの機能を提供しています。","setup_page_title":"Mask Networkへようこそ","setup_page_description":"SNS上の投稿とチャットを暗号化し、友達のみが復号化できます。","setup_page_create_account_title":"イベントを作成","setup_page_create_account_subtitle":"アカウントとデータのローカルストレージ","setup_page_create_account_button":"作成","setup_page_create_restore_title":"アイデンティティやバックアップから復元する","setup_page_create_restore_subtitle":"IDと履歴のバックアップからの復元","setup_page_create_restore_button":"復元またはサインイン","create_account_identity_title":"Mask Networkのアイデンティティを作成","create_account_sign_in_button":"復元またはサインイン","create_account_mnemonic_confirm_failed":"IDコードが間違っています","create_account_connect_social_media_button":"作成","create_account_connect_social_media":"{{type}} に接続","create_account_persona_title":"Mask Networkへようこそ","create_account_persona_subtitle":"ペルソナを作成し、ソーシャルアカウントを接続することができます","create_account_persona_successfully":"正常にペルソナを作成しました","create_account_connect_social_media_title":"ソーシャルメディアに接続","create_account_failed":"アカウント作成が失敗しました","sign_in_account_identity_title":"復元またはサインイン","sign_in_account_sign_up_button":"サインアップ","sign_in_account_identity_warning":"デジタルIDコードは、あなたのデジタルIDのみを復元できます。このデジタルIDによって署名され送信されたソーシャル情報を暗号化して復号することができます。","sign_in_account_private_key_placeholder":"秘密鍵を入力してください","sign_in_account_private_key_error":"IDコードが間違っています","sign_in_account_private_key_persona_not_found":"ペルソナが見つかりません","sign_in_account_private_key_warning":"デジタルIDコードは、あなたのデジタルIDのみを復元できます。このデジタルIDによって署名され送信されたソーシャル情報を暗号化して復号することができます。","sign_in_account_mnemonic_confirm_failed":"IDが間違っています","sign_in_account_cloud_backup_send_email_success":"{{type}}に認証コードが送信されました。 {{type}} を確認してください。","sign_in_account_local_backup_warning":"ローカルバックアップは、ローカルに保存されているすべてのデータを回復できます。","sign_in_account_local_backup_payment_password":"支払いパスワードの設定","sign_in_account_local_backup_file_drag":"ここでファイルをクリックまたはドラッグしてください","sign_in_account_cloud_backup_warning":"クラウドバックアップは、データをホストおよび暗号化します。","sign_in_account_cloud_backup_not_support":"サポートされていないバックアップ","sign_in_account_cloud_send_verification_code_tip":"検証コードを送信","sign_in_account_cloud_backup_failed":"バックアップの復元に失敗しました。もう一度やり直してください。","sign_in_account_cloud_backup_email_or_phone_number":"メールアドレスまたは電話番号","sign_in_account_cloud_backup_password":"バックアップパスワード","sign_in_account_cloud_restore_failed":"復元に失敗しました","sign_in_account_cloud_backup_download_failed":"バックアップのダウンロードに失敗しました","sign_in_account_cloud_backup_decrypt_failed":"復号に失敗しました。パスワードを確認してください。","sign_in_account_cloud_backup_email_format_error":"メールアドレスが間違っています","sign_in_account_cloud_backup_phone_format_error":"電話番号が正しくありません","sign_in_account_cloud_backup_synchronize_password_tip":"クラウドパスワードの認証が完了し、バックアップがアップロードされています。バックアップパスワードを統一するために、クラウドのパスワードをローカルのバックアップのパスワードとして同期するかどうかを確認してください。","cloud_backup":"クラウドバックアップ","wallets_transfer":"転送","wallets_assets":"資産","wallets_transfer_memo":"メモ","wallets_transfer_amount":"金額","wallets_transfer_to_address":"宛先アドレス","wallets_transfer_error_amount_absence":"金額を入力","wallets_transfer_error_address_absence":"受信者のアドレス","wallets_transfer_error_contract":"NFT のコントラクトを選択","wallets_transfer_error_nft":"NFT を1つ選択してください","wallets_transfer_error_invalid_address":"無効な受け手のアドレス","wallets_transfer_error_insufficient_balance":"{{symbol}} の残高が足りません","wallets_transfer_send":"送信","wallets_transfer_memo_placeholder":"任意のメッセージ","wallets_transfer_contract":"コントラクト","wallets_transfer_contract_placeholder":"NFT コントラクトを選択してください","wallets_swap":"スワップ","wallets_red_packet":"レッドパケット","wallets_sell":"売る","wallets_history":"履歴","settings":"設定","gas_fee":"取引手数料","transfer_cost":"費用 {{gasFee}} {{symbol}} <unk> ${{usd}}","done":"完了!","labs":"Mask Labs","wallet_transactions_pending":"承認待ち","wallet_gas_fee_settings_low":"低い","wallet_gas_fee_settings_medium":"中間","wallet_gas_fee_settings_high":"高い","wallets_startup_create":"新規ウォレット作成","wallets_startup_create_desc":"MaskウォレットはETH、BSC、Polygon/Maticのネットワークをサポートしています。","wallets_startup_create_action":"作成","wallets_startup_import":"ウォレットをインポート","wallets_startup_import_desc":"Mask networkはPrivate KeyとMnemonic wordsをサポートしています。","wallets_startup_import_action":"インポート","wallets_startup_connect":"プラグインウォレットに接続","wallets_startup_connect_desc":"Mask networkはMetamask、WalletConnectをサポートしています。","wallets_startup_connect_action":"接続","wallets_connect_wallet_metamask":"Metamask","wallets_connect_wallet_connect":"ウォレットを接続","wallets_connect_wallet_polka":"Polkadot ウォレット","wallets_create_wallet_input_placeholder":"ウォレット名","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"ウォレットを正常に作成しました","wallets_create_successfully_unlock":"ウォレットをアンロック","wallets_create_wallet_alert":"Mask Networkは、フリーでオープンソースの、クライアントサイドのインターフェースです。Mask Networkは、あなたが自分の鍵と資金を完全にコントロールしたまま、ブロックチェーンと直接やりとりすることを可能にします。コントロールするのはあなた自身です。Mask Networkは銀行や取引所ではありません。お客様の鍵や資金、情報を預かることはありません。つまり、アカウントへのアクセス、鍵の回収、パスワードのリセット、取引の取り消しなどはできません。","wallets_wallet_connect_title":"WalletConnect対応ウォレットでQRコードスキャン","wallets_wallet_mnemonic":"ニーモニック","wallets_wallet_json_file":"ローカルバックアップ","wallets_wallet_private_key":"秘密鍵","wallets_import_wallet_tabs":"ウォレットタブのインポート","wallets_import_wallet_password_placeholder":"ウォレットのパスワード","wallets_import_wallet_cancel":"キャンセル","wallets_import_wallet_import":"インポート","wallets_create_wallet_tabs":"ウォレットタブを作成","wallets_create_wallet_refresh":"更新","wallets_create_wallet_remember_later":"後で覚えておいてください","wallets_create_wallet_verification":"認証","wallets_collectible_address":"受取可能なアドレス","wallets_collectible_token_id":"トークンID","wallets_collectible_field_contract_require":"受取可能なアドレスが必要です","wallets_collectible_field_token_id_require":"トークンIDが必要です","wallets_collectible_load_end":"ロード終了","wallets_balance":"残高","wallets_balance_all_chain":"全てのチェーン","wallets_balance_Send":"送信","wallets_balance_Buy":"購入","wallets_balance_Swap":"スワップ","wallets_balance_Receive":"受取","wallets_assets_token":"トークン","wallets_assets_token_sent_not_connect_tip":"{{chainName}} に接続されていません。","wallets_assets_token_sent_switch_network_tip":"クリックして切り替えます","wallets_assets_investment":"投資","wallets_assets_collectibles":"コレクション","wallets_assets_custom_token":"カスタムトークン","wallets_assets_custom_collectible":"カスタムコレクション","wallets_assets_asset":"資産","wallets_assets_balance":"残高","wallets_assets_price":"価格","wallets_assets_value":"価値","wallets_assets_operation":"操作方法","wallets_address":"ウォレットアドレス","wallets_receive_tips":"QRコードをスキャンして {{chainName}} 資産を転送します","wallets_add_collectible":"コレクションを追加","wallets_incorrect_address":"不正なコントラクトアドレス","wallets_collectible_been_added":"コレクションは既に追加されています","wallets_collectible_error_not_exist":"コレクションは存在しないか、またはあなたのものです。","wallets_collectible_contract_is_empty":"コントラクトを選択してください","wallets_collectible_token_id_is_empty":"トークンを選択してください","wallets_collectible_add":"追加","wallets_add_token":"トークンを追加","wallets_token_been_added":"このトークンはすでに追加されてます","wallets_token_symbol_tips":"シンボルは11文字以下でなければなりません","wallets_token_decimals_tips":"小数点以下は0以上、18以下でなければなりません","wallets_add_token_contract_address":"トークンコントラクトアドレス","wallets_add_token_symbol":"ティッカーシンボル","wallets_add_token_decimals":"小数点の適合率","wallets_add_token_cancel":"キャンセル","wallets_add_token_next":"Next","wallets_empty_tokens_tip":"アセットが見つかりません。トークンを追加してください。","wallets_empty_collectible_tip":"コレクションが見つかりませんでした。コレクションを追加してください。","wallets_address_copied":"アドレスが正常にコピーされました","wallets_address_copy":"コピー","wallets_history_types":"タイプ","wallets_history_value":"価値","wallets_history_time":"時間","wallets_history_receiver":"受取","wallets_empty_history_tips":"取引履歴がありません","wallets_loading_token":"トークンを読み込み中","personas_setup_connect_tips":"あなたの {{type}} アカウントに接続してください","personas_setup_tip":"ペルソナを作成/復元してください。","personas_setup_connect":"接続する","personas_name_maximum_tips":"最大長は {{length}} 文字です。","personas_name_existed":"このペルソナ名は既に存在しています","personas_rename_placeholder":"ペルソナ名","personas_confirm":"確定","personas_cancel":"キャンセル","personas_export_persona":"ペルソナのエクスポート","personas_export_persona_copy":"コピー","personas_export_persona_copy_success":"コピーしました","personas_export_persona_copy_failed":"コピーに失敗しました","personas_export_persona_confirm_password_tip":"パスワードが設定されていません。秘密鍵をエクスポートするには、まずバックアップパスワードを設定する必要があります。","personas_export_private":"秘密鍵をエクスポート","personas_export_private_key_tip":"このエクスポートは秘密鍵をエクスポートするためのものです。他のデータはエクスポートしません。さらなるデータが必要な場合は「設定」に進んでください:","personas_delete_confirm_tips":"削除するペルソナ名 <i>{{nickname}}</i> とパスワードを入力してください。","personas_delete_dialog_title":"ペルソナを削除","personas_edit_dialog_title":"ペルソナを編集","personas_edit":"編集","personas_delete":"削除","personas_logout":"ログアウト","personas_logout_confirm_password_tip":"パスワードが設定されていません。ペルソナからログアウトするには、まずバックアップパスワードを設定する必要があります。","personas_add_persona":"ペルソナを追加","personas_back_up":"バックアップ","personas_connect_to":"{{internalName}} に接続","personas_disconnect":"接続を外す","personas_disconnect_warning":"{{network}} の {{userId}}アカウントを切断してもよろしいですか？ 切断後、このアカウントはマスクネットワークで情報を復号化および暗号化することができなくなります。","personas_logout_warning":"ログアウト後、あなたに関連づけられたソーシャルアカウントは過去に暗号化されたメッセージを復号することができなくなります。アカウントを再利用する場合は、秘密鍵を利用して復元することができます。","personas_add":"追加","personas_upload_avatar":"アバターをアップロード","personas_rename":"名前変更","personas_invite_post":"@{{identifier}} こんにち！投稿を暗号化して共有できるように Mask をダウンロードしましょう。http://mask.io からダウンロードできます。 #mask_io","personas_empty_contact_tips":"Mask Network に認識されているコンタクトがありません。友達を招待して <i>{{name}}</i> をダウンロードしてもらってください。","personas_contacts_name":"名前","personas_contacts_operation":"操作","personas_contacts_invite":"招待","personas_post_is_empty":"まだ投稿を作成したことがありません。","personas_post_create":"投稿を作成","settings_general":"一般","settings_backup_recovery":"バックアップと復元","settings_local_backup":"ローカルバックアップ","settings_cloud_backup":"クラウドバックアップ","settings_appearance_default":"システム設定に従う","settings_appearance_light":"ライト","settings_appearance_dark":"ダーク","settings_backup_preview_account":"アカウント","settings_backup_preview_personas":"ペルソナ","settings_backup_preview_associated_account":"紐付けられたアカウント","settings_backup_preview_posts":"暗号化された投稿","settings_backup_preview_contacts":"コンタクト","settings_backup_preview_wallets":"Mask ウォレット","settings_backup_preview_created_at":"バックアップ時間","settings_language_title":"言語","settings_language_desc":"使用する言語を選択してください","settings_language_auto":"システム設定に従う","settings_appearance_title":"外観","settings_appearance_desc":"使用したいテーマを選択したください","settings_data_source_title":"データソース","settings_data_source_desc":"異なるプラットフォームからトレンドデータを取得","settings_sync_with_mobile_title":"モバイルと同期","settings_sync_with_mobile_desc":"アカウントと情報をモバイルデバイスと同期することができます。Mask Network モバイルアプリを開き、設定に移動して同期プラグインを選択します","settings_global_backup_title":"グローバルバックアップ","settings_global_backup_desc":"ローカルバックアップとクラウドバックアップの両方を提供","settings_global_backup_last":"最新のバックアップは {{backupAt}} に行われました。バックアップ方法: {{backupMethod}}。","settings_restore_database_title":"データベースの復元","settings_restore_database_desc":"以前のデータベースバックアップから復元","settings_email_title":"Eメール","settings_email_desc":"メールアドレスを入力してください","settings_change_password_title":"バックアップパスワード","settings_change_password_desc":"バックアップパスワードの変更","settings_change_password_not_set":"バックアップパスワードが設定されていません","settings_phone_number_title":"電話番号","settings_phone_number_desc":"電話番号を入力してください","settings_password_rule":"バックアップパスワードは 8~20 文字で、少なくとも数字、小文字、特殊文字を含める必要があります。","settings_button_cancel":"キャンセル","settings_button_confirm":"確定","settings_button_sync":"同期","settings_button_backup":"バックアップ","settings_button_recovery":"リカバリー","settings_button_setup":"設定","settings_button_change":"変更","settings_dialogs_bind_email_or_phone":"メールアドレスまたは電話番号を入力してください。","settings_dialogs_verify_backup_password":"バックアップパスワードを確認","settings_dialogs_setting_backup_password":"バックアップパスワードを設定","settings_dialogs_change_backup_password":"バックアップパスワードの変更","settings_dialogs_setting_email":"メールアドレスの設定","settings_dialogs_change_email":"メールアドレスの変更","settings_dialogs_setting_phone_number":"電話番号の設定","settings_dialogs_change_phone_number":"電話番号の変更","settings_dialogs_incorrect_code":"認証コードが間違っています。","settings_dialogs_incorrect_email":"メールアドレスが間違っています。","settings_dialogs_incorrect_phone":"電話番号が間違っています。","settings_dialogs_incorrect_password":"パスワードが間違っています。","settings_dialogs_inconsistency_password":"パスワードが一致しません。","settings_dialogs_current_email_validation":"現在の認証用のメールアドレスは","settings_dialogs_change_email_validation":"メールアドレスを変更するためには、現在のメールアドレスを認証する必要があります:","settings_dialogs_current_phone_validation":"現在の認証用のメールアドレスは","settings_dialogs_change_phone_validation":"電話番号を変更するには、現在の電話番号を認証する必要があります:","settings_dialogs_backup_to_cloud":"クラウドにバックアップ","settings_dialogs_merge_to_local_data":"クラウドバックアップをローカルに統合し、クラウドにバックアップします","settings_dialogs_backup_action_desc":"クラウドバックアップは既に存在しています。バックアップ前にクラウドバックアップをローカルに統合するか、直接バックアップしてください。","settings_dialogs_backup_merged_tip":"既にクラウドバックアップをローカルに取得しています。バックアップを実行したい場合は、バックアップボタンをクリックしてすべてのデータをクラウドに更新します。","settings_label_backup_password":"バックアップパスワード","settings_label_new_backup_password":"新しいバックアップパスワード","settings_label_backup_password_cloud":"クラウド上のファイルのパスワードをバックアップ","settings_label_payment_password":"支払いパスワードの設定","settings_label_re_enter":"再入力","settings_alert_password_set":"バックアップパスワードの設定に成功しました。","settings_alert_password_updated":"バックアップパスワードが更新されました","settings_alert_email_set":"メールアドレスの設定","settings_alert_email_updated":"メールアドレスが更新されました","settings_alert_phone_number_set":"電話番号の設定","settings_alert_phone_number_updated":"電話番号が更新されました","settings_alert_backup_fail":"バックアップ失敗","settings_alert_backup_success":"データのバックアップに成功しました。","settings_alert_validation_code_sent":"認証コードを送信しました","settings_alert_merge_success":"クラウドバックアップをローカルデータに統合できました。","labs_file_service":"ファイルサービス","labs_file_service_desc":"ユーザー向け分散ファイルストレージです。","labs_markets":"マーケット","labs_markets_desc":"クリプトの友人にデジタル資産を販売します。","labs_red_packet":"幸運ドロップ","labs_red_packet_desc":"あなたの幸運を暗号化された幸運の小包としてあなたの友人に送信します。","labs_swap":"スワップ","labs_swap_desc":"追加料金と制限なしに Dex を通じてトークンを購入します。","labs_transak":"Transak","labs_transak_desc":"Transak より 60 以上の国でクリプトを購入することができます。"}');

/***/ }),

/***/ 75743:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"알아보기","wallets":"월렛","personas":"나의 페르소나","persona":"페르소나","refresh":"새로고침","next":"다음","cancel":"취소","back":"뒤로","agree":"동의","confirm":"확인","verify":"인증","go_back":"돌아가기","connect":"연결","searching":"검색 중...","restore":"복원하기","save":"저장","manage":"관리","recovery":"복구","successful":"성공","close":"닫기","send":"보내기","resend":"다시 보내기","confirm_password":"비밀번호 확인","about_dialog_license":"라이센스: ","footer_bounty_list":"상금 리스트","about_dialog_source_code":"소스 코드: ","about_dialog_feedback":"피드백: ","about_dialog_touch":"연락하기","about_dialog_description":"Mask Network는 새롭고 오픈한 인터넷으로 통하는 포털이다. Mask를 통해 소셜 네트워크에서 암호화 게시글을 공유할 수도 있다. 레드 패킷 보내기, 암호화폐 구매, 파일 서비스 등 기능도 지원한다.","setup_page_title":"환영합니다","setup_page_description":"소셜 네트워크에서 개시글과 체팅을 암호화하고 친구만 해독할 수 있다.","setup_page_create_account_title":"아이디 만들기","setup_page_create_account_subtitle":"계정과 데이터의 로컬 스토리지","setup_page_create_account_button":"만들기","setup_page_create_restore_title":"아이디나 백업에서 복원하기","setup_page_create_restore_subtitle":"아이디나 역사 백업에서 복원하기.","setup_page_create_restore_button":"복구 또는 로그인","create_account_identity_title":"Mask Network 아이디 만들기","create_account_sign_in_button":"복구 또는 로그인","create_account_mnemonic_confirm_failed":"잘못된 아이디 코드","create_account_connect_social_media_button":"만들기","create_account_connect_social_media":"{{type}} 에 연결하기","create_account_persona_title":"환영합니다","create_account_persona_subtitle":"페르소나를 만들고 소셜 계정을 연결할 수 있습니다.","create_account_persona_successfully":"페르소나 생성 성공","create_account_connect_social_media_title":"소셜 미디어 연결하기","create_account_failed":"계정 만들기 실패","sign_in_account_identity_title":"복구 또는 로그인","sign_in_account_tab_identity":"아이덴티티","sign_in_account_sign_up_button":"로그인","sign_in_account_identity_warning":"디지털 아이디 코드는 디지털 아이디만 복구할 수 있습니다. 이 디지털 아이디가 서명하고 보낸 소셜 정보를 암호화하고 해독할 수 있습니다.","sign_in_account_private_key_placeholder":"개인 키 입력하기","sign_in_account_private_key_error":"잘못된 아이디 코드","sign_in_account_private_key_persona_not_found":"페르소나를 찾을 수 없습니다.","sign_in_account_private_key_warning":"디지털 아이디 코드는 디지털 아이디만 복구할 수 있습니다. 이 디지털 아이디가 서명하고 보낸 소셜 정보를 암호화하고 해독할 수 있습니다.","sign_in_account_mnemonic_confirm_failed":"잘못된 아이덴티티","sign_in_account_cloud_backup_send_email_success":"인증 코드 이미 {{type}} 로 발송되었습니다. {{type}} 확인하세요.","sign_in_account_local_backup_warning":"로컬 백업은 로컬에 저장된 전체 데이터를 복구할 수 있습니다.","sign_in_account_local_backup_payment_password":"결재 비밀번호","sign_in_account_local_backup_file_drag":"클릭하거나 파일을 여기서 끌어들이세요","sign_in_account_cloud_backup_warning":"클라우드 백업은 데이터를 호스트하고 암호화합니다.","sign_in_account_cloud_backup_not_support":"지원하지 않는 데이터 백업","sign_in_account_cloud_send_verification_code_tip":"인증 코드 보내기","sign_in_account_cloud_backup_failed":"백업 복구 실패되었습니다. 다시 시도하세요.","sign_in_account_cloud_backup_email_or_phone_number":"이메일이나 휴대폰 번호","sign_in_account_cloud_backup_password":"비밀번호 백업","sign_in_account_cloud_restore_failed":"복구 실패","sign_in_account_cloud_backup_download_failed":"다운로드 백업 실패","sign_in_account_cloud_backup_decrypt_failed":"해독 실패, 비밀번호를 확인하세요","sign_in_account_cloud_backup_email_format_error":"이메일 주소가 잘못되었습니다.","sign_in_account_cloud_backup_phone_format_error":"전화번호가 잘못되었습니다.","sign_in_account_cloud_backup_synchronize_password_tip":"클라우드 비밀번호는 이미 성공적으로 승인되고 백업은 이미 업로드되었습니다. 백업 비밀번호를 통합하려면 클라우드 비밀번호를 로컬 백업 비밀번호로 동기화할지 여부를 확인하십시오.","cloud_backup":"클라우드 백업","wallets_transfer":"전송","wallets_assets":"자산","wallets_transfer_memo":"메모","wallets_transfer_amount":"수량","wallets_transfer_to_address":"받는 주소","wallets_transfer_error_amount_absence":"수액 입력","wallets_transfer_error_address_absence":"받는 주소 입력","wallets_transfer_error_contract":"NFT 컨트렉트를 선택하세요.","wallets_transfer_error_nft":"NFT 선택","wallets_transfer_error_invalid_address":"무효한 받는 주소","wallet_transfer_error_no_address_has_been_set_name":"수신자의 주소가 잘못되었습니다.","wallet_transfer_error_no_ens_support":"네트워크는 ENS를 지원하지 않습니다.","wallets_transfer_error_insufficient_balance":"{{symbol}} 잔액 부족","wallets_transfer_error_same_address_with_current_account":"받는 주소는 발송 주소와 동일합니다. 다시 확인해 주세요.","wallets_transfer_error_is_contract_address":"받는 주소는 컨트랙트 주소입니다. 다시 확인해 주세요.","wallets_transfer_send":"발송","wallets_transfer_memo_placeholder":"옵셔널 메시지","wallets_transfer_contract":"컨트랙트","wallets_transfer_contract_placeholder":"NFT 컨트렉트를 선택하세요.","wallets_swap":"스왑","wallets_red_packet":"레드 패킷","wallets_sell":"매도","wallets_history":"역사 기록","settings":"설정","gas_fee":"거래 수수료","transfer_cost":"Cost {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"완료","labs":"Mask Labs","wallet_transactions_pending":"대기중","wallet_gas_fee_settings_low":"낮음","wallet_gas_fee_settings_medium":"보통","wallet_gas_fee_settings_high":"높음","wallets_startup_create":"새로운 월렛 생성","wallets_startup_create_desc":"Mask 월렛은 ETH, BSC, Polygon/Matic 네트워크를 지원합니다.","wallets_startup_create_action":"만들기","wallets_startup_import":"월렛 불러오기","wallets_startup_import_desc":"Mask 월렛은 개인키, JSON.File, 니모닉 단어를 지원합니다.","wallets_startup_import_action":"불러오기","wallets_startup_connect":"플러그인 월렛 연결하기","wallets_startup_connect_desc":"Mask network는 Metamask, WalletConnect를 지원합니다.","wallets_startup_connect_action":"연결","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"월렛 연결하기","wallets_connect_wallet_polka":"Polkadot 월렛","wallets_create_wallet_input_placeholder":"월렛 이름","wallets_create_successfully_title":"성공","wallets_create_successfully_tips":"월렛을 성공적으로 만들었습니다.","wallets_create_successfully_unlock":"월렛 언락","wallets_create_wallet_alert":"Mask Network는 무료하는 오픈 소스 클라이언트 사이드 인터페이스입니다. Mask Network 를 통해 키와 펀드의 지배권을 보유하면서 블록체인과 상호작용을 할 수 있습니다. Mask Network는 뱅크나 거래소가 아니고 당신의 개인키, 펀드, 정보를 수집하지 않어서 계정 액세스, 개인키 복구, 비밀번호 초기화, 거래 리버스 등을 하지 못합니다.","wallets_wallet_connect_title":"WalletConnect와 호환성이 있는 월렛으로 QR 코드를 스칸하세요.","wallets_wallet_mnemonic":"니모닉","wallets_wallet_json_file":"로컬 백업","wallets_wallet_private_key":"개인 키","wallets_import_wallet_tabs":"월렛 불러오기","wallets_import_wallet_password_placeholder":"월렛 비밀번호","wallets_import_wallet_cancel":"취소","wallets_import_wallet_import":"불러오기","wallets_create_wallet_tabs":"월렛 탭 만들기","wallets_create_wallet_refresh":"새로고침","wallets_create_wallet_remember_later":"나중에 기억하기","wallets_create_wallet_verification":"인증","wallets_collectible_address":"수집품 주소","wallets_collectible_token_id":"토큰 ID","wallets_collectible_field_contract_require":"수집품 주소가 필요합니다","wallets_collectible_field_token_id_require":"토큰 아이디가 필요합니다.","wallets_collectible_load_end":"로드 완료","wallets_balance":"잔액","wallets_balance_all_chain":"모든 체인","wallets_balance_Send":"발송","wallets_balance_Buy":"매수","wallets_balance_Swap":"스왑","wallets_balance_Receive":"받기","wallets_assets_token":"토큰","wallets_assets_token_sent_not_connect_tip":"{{chainName}} 에 연결되지 않습니다.","wallets_assets_token_sent_switch_network_tip":"전환하기","wallets_assets_investment":"투자","wallets_assets_collectibles":"수집품","wallets_assets_custom_token":"맞춤형 토큰","wallets_assets_custom_collectible":"맞춤형 수집품","wallets_assets_asset":"자산","wallets_assets_balance":"잔액","wallets_assets_price":"가격","wallets_assets_value":"값","wallets_assets_operation":"운영","wallets_address":"월렛 주소","wallets_receive_tips":"QR 코드를 스칸하여 {{chainName}} 자산을 전환하기","wallets_add_collectible":"수집품 추가","wallets_incorrect_address":"잘못된 컨트렉트 주소","wallets_collectible_been_added":"이미 추가된 수집품입니다.","wallets_collectible_error_not_exist":"해당 수집품은 존재하지 않거나 유저님의 것이 아닙니다.","wallets_collectible_contract_is_empty":"켄트랙트를 선택하세요","wallets_collectible_token_id_is_empty":"토큰을 선택하세요","wallets_collectible_add":"추가","wallets_add_token":"토큰 추가","wallets_token_been_added":"이미 추가된 토큰입니다.","wallets_token_symbol_tips":"기호는 11자 이하여야 합니다.","wallets_token_decimals_tips":"소수점은 0 이상이어야 하며 18을 넘지 않아야 합니다.","wallets_add_token_contract_address":"토큰 컨트랙트 주소","wallets_add_token_symbol":"토큰 기호","wallets_add_token_decimals":"소숫점 정밀도","wallets_add_token_cancel":"취소","wallets_add_token_next":"다음","wallets_empty_tokens_tip":"자산이 없습니다. 토큰을 추가하세요.","wallets_empty_collectible_tip":"수집품이 없습니다. 수집품을 추가하세요.","wallets_address_copied":"주소가 복사되었습니다","wallets_address_copy":"복사","wallets_history_types":"유형","wallets_history_value":"값","wallets_history_time":"시간","wallets_history_receiver":"받는 사람","wallets_empty_history_tips":"거래 내역이 없습니다","wallets_loading_token":"토큰 로딩","personas_setup_connect_tips":"유저님의 {{type}} 계정을 연결하세요.","personas_setup_tip":"페르소나를 만들거나 복구하세요.","personas_setup_connect":"연결","personas_name_maximum_tips":"최대 길이는 {{length}} 자입니다.","personas_name_existed":"이미 존재된 페르소나입니다","personas_rename_placeholder":"페르소나 이름","personas_confirm":"확인","personas_cancel":"취소","personas_export_persona":"페르소나 수출","personas_export_persona_copy":"복사","personas_export_persona_copy_success":"복사됨","personas_export_persona_copy_failed":"복사 실패","personas_export_persona_confirm_password_tip":"비밀번호가 아직 설정되지 않습니다. 개인 키 수출하려면 백업 비밀번호는 먼저 설정해야 합니다.","personas_export_private":"개인 키 수출","personas_export_private_key_tip":"개인키만 수출이 가능합니다. 다른 데이터 수출할 수 없습니다.","personas_delete_confirm_tips":"페르소나 <i>{{nickname}}</i> 를 삭제되는 것을 확인하시고 비밀번호를 입력하세요.","personas_delete_dialog_title":"페르소나 삭제","personas_edit_dialog_title":"페르소나 편집","personas_edit":"편집","personas_delete":"삭제","personas_logout":"로그아웃","personas_logout_confirm_password_tip":"비밀번호가 아직 설정되지 않습니다. 페르소나에 로그아웃하려면 백업 비밀번호는 먼저 설정해야 합니다.","personas_add_persona":"페르소나 추가","personas_back_up":"백업","personas_connect_to":"{{internalName}} 연결하기","personas_disconnect":"연결 끊기","personas_disconnect_warning":"{{userId}} 의 {{network}} 계정 연결을 해제하시겠습니까? 연결이 끊긴 후 이 계정은 더 이상 Mask Network를 사용하여 정보를 해독하고 암호화할 수 없습니다.","personas_logout_warning":"로그아웃 후, 연결된 소셜 계정은 더 이상 암호화하거나 해독할 수 없습나다. 계정을 다시 이용하려면 아이덴티티, 개인 키, 로컬이나 클라우드 백업으로 복원할 수 있습니다.","personas_add":"추가","personas_upload_avatar":"아바타 업로드","personas_rename":"이름 바꾸기","personas_invite_post":"@{{identifier}} 안녕하세요. 암호화된 게시글을 보낼 수 있기를 위해 Mask 다운로드하세요. #mask_io install http://mask.io","personas_empty_contact_tips":"연락처에서 Mask Network 를 설치된 자가 없습니다. 친구를 초대하여 <i>{{name}}</i> 다운로드하세요.","personas_contacts_name":"이름","personas_contacts_operation":"조작","personas_contacts_invite":"초대","personas_post_is_empty":"작성된 게시글이 없습니다.","personas_post_create":"게시글 작성하기","settings_general":"일반","settings_backup_recovery":"백업 맟 복원","settings_local_backup":"로컬 백업","settings_cloud_backup":"클라우드 백업","settings_appearance_default":"시스템 따라 설정하기","settings_appearance_light":"라이트","settings_appearance_dark":"다크","settings_backup_preview_account":"계정","settings_backup_preview_personas":"페르소나","settings_backup_preview_associated_account":"관련 계정","settings_backup_preview_posts":"암호화된 게시물","settings_backup_preview_contacts":"연락처","settings_backup_preview_wallets":"로컬 월렛","settings_backup_preview_created_at":"백업 시간","settings_language_title":"언어","settings_language_desc":"이용하고 싶은 언어를 선택하세요","settings_language_auto":"시스템에 따라 설정","settings_appearance_title":"화면","settings_appearance_desc":"이용하고 싶은 테마를 선택하세요","settings_data_source_title":"데이터 소스","settings_data_source_desc":"다른 플랫폼에서 트렌딩 데이터 가져오기","settings_sync_with_mobile_title":"모바일과 싱크하기","settings_sync_with_mobile_desc":"모바일 디바이스와 계정과 정보를 싱크할 수 있습니다. Mask Network 모바일 앱을 켜고 설정에서 플러그인 싱크를 탭하세요.","settings_global_backup_title":"글로벌 백업","settings_global_backup_desc":"로컬 백업과 클라우드 백업을 제공합니다.","settings_global_backup_last":"가장 최근 백업은 {{backupAt}} 에서 수행되었습니다. 백업 방법: {{backupMethod}}.","settings_restore_database_title":"데이터베이스 복원","settings_restore_database_desc":"이전의 데이터베이스 백업에서 복원하기","settings_email_title":"이메일","settings_email_desc":"이메일을 연동하세요","settings_change_password_title":"비밀번호 백업","settings_change_password_desc":"백업 비밀번호 변경","settings_change_password_not_set":"비밀번호 백업이 설정되지 않습니다.","settings_phone_number_title":"전화번호","settings_phone_number_desc":"전화번호를 연동해주세요.","settings_password_rule":"백업 암호는 8자에서 20자 사이여야 하며 숫자, 대문자, 소문자 및 특수 문자를 포함해야 합니다.","settings_button_cancel":"취소","settings_button_confirm":"확인","settings_button_sync":"동기화","settings_button_backup":"백업","settings_button_recovery":"복구","settings_button_setup":"설정","settings_button_change":"변경","settings_dialogs_bind_email_or_phone":"이메일이나 전화번호를 연동해주세요.","settings_dialogs_verify_backup_password":"백업 비밀번호 인증","settings_dialogs_setting_backup_password":"백업 비밀번호 설정","settings_dialogs_change_backup_password":"백업 비밀번호 변경","settings_dialogs_setting_email":"이메일 설정","settings_dialogs_change_email":"이메일 변경","settings_dialogs_setting_phone_number":"전화번호 추가","settings_dialogs_change_phone_number":"전화 번호 변경","settings_dialogs_incorrect_code":"인증 코드가 잘못되었습니다","settings_dialogs_incorrect_email":"이메일 주소가 잘못되었습니다.","settings_dialogs_incorrect_phone":"전화번호가 잘못되었습니다.","settings_dialogs_incorrect_password":"잘못된 비밀번호.","settings_dialogs_inconsistency_password":"비밀번호 일치하지 않습니다.","settings_dialogs_current_email_validation":"현재 인증 이메일","settings_dialogs_change_email_validation":"이메일을 변경하기 위해 현재 이메일 주소를 인증해야 합니다.","settings_dialogs_current_phone_validation":"현재 인증 전화번호","settings_dialogs_change_phone_validation":"전화번호를 변경하기 위해 현재 전화번호를 인증해야 합니다.","settings_dialogs_backup_to_cloud":"클라우드 백업","settings_dialogs_merge_to_local_data":"로컬 데이터로 합병하기","settings_dialogs_backup_action_desc":"클라우드 백업이 이미 존재되어 있습니다. 클라우드 백업을 로컬에 합병하거나 로컬 데이터를 클라우드에 업로드하기를 선택하세요.","settings_dialogs_backup_to_cloud_action":"이 옵션은 기존 클라우드 백업을 로컬 데이터로 덮어씁니다.","settings_dialogs_backup_merge_cloud":"기존 클라우드 백업을 해독하려면 비밀번호를 입력해야 합니다. 기존 클라우드 백업과 로컬 데이터가 결합되고 암호화되어 클라우드에 업로드됩니다.","settings_dialogs_backup_merged_tip":"클라우드 백업은 이미 로컬로 다운받았습니다. 백업을 완성하려면 백업 버튼을 누르고 오든 테이터를 클라우드로 백업하세요.","settings_label_backup_password":"비밀번호 백업","settings_label_new_backup_password":"새로운 비밀번호 백업","settings_label_backup_password_cloud":"클라우드 파일 백업 비밀번호","settings_label_payment_password":"결재 비밀번호","settings_label_re_enter":"다시 입력","settings_alert_password_set":"백업 비밀번호 설정","settings_alert_password_updated":"백업 비밀번호 업데이트","settings_alert_email_set":"이메일 설정","settings_alert_email_updated":"이메일 업데이트되었습니다","settings_alert_phone_number_set":"전화번호 설정","settings_alert_phone_number_updated":"전화번호가 업데이트되었습니다","settings_alert_backup_fail":"백업 실패","settings_alert_backup_success":"데이터가 이미 백업되었습니다.","settings_alert_validation_code_sent":"인증 코드가 발송되었습니다","settings_alert_merge_success":"클라우드 백업과 로컬 데이터를 이미 합병되었습니다.","labs_file_service":"파일 서비스","labs_file_service_desc":"탈중앙화 파일 저장","labs_markets":"마켓","labs_markets_desc":"암호 친구에게 디지털 자산을 보내기","labs_red_packet":"레드 패킷","labs_red_packet_desc":"축복을 암호화된 레드 패킷으로 포장하고 친구들에게 보내세요.","labs_swap":"스왑","labs_swap_desc":"추가 비용과 제한 없이 DEX로 토큰을 구매하기","labs_transak":"Transak","labs_transak_desc":"Transak 지원으로 60+ 국가에서 암호화폐 구매하기","labs_snapshot":"Snapshot","labs_snapshot_desc":"소셜 미디어에서 직접 제안을 표시하고 투표하기","labs_market_trend":"마켓 추세","labs_market_trend_desc":"토큰 정보, 가격 차트, 거래 정보을 직접 소셜 미디어에서 표시하기","labs_collectibles":"Collectibles","labs_collectibles_desc":"Opensea and Rarible의 지정 정보를 포시하고 소셜미디어에서 경매하기","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"Gitcoin의 지정 정보를 표시하고 소셜미디어에서 프로젝트에게 적접 기부하기","labs_valuables":"가치","labs_valuables_desc":"크리에이터가 서명한 트윗을 구입 및 판매하기","labs_dhedge":"DHEDGE","labs_dhedge_desc":"이더리움의 탈중앙화 헤지 펀드","labs_mask_box":"MaskBox","labs_mask_box_desc":"NFT 미스터리박스를 출시하는 멀티체인 탈중앙화 플랫폼","labs_loot_man":"LootMan by MintTeam","labs_loot_man_desc":"NFT의 무한한 가능성을 탐색. 소셜미디어에서 보유하는 NFT를 전시하는 혁신적인 방식","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"트위터에서 매주 저축 습관을 기른다.","labs_pool_together":"PoolTogether","labs_pool_together_desc":"트위터에서 무손실 로또에 참여한다.","labs_settings_market_trend":"마켓 추세 설정","labs_settings_market_trend_source":"디폴트 추세 소스","labs_settings_swap":"스왑 설정","labs_settings_swap_network":"{{network}} 네트워크 디폴트 추세 소스","labs_pets":"LootMan by MintTeam","labs_pets_desc":"NFT의 무한한 가능성을 탐색. 소셜미디어에서 보유하는 NFT를 전시하는 혁신적인 방식","labs_setup_tutorial":"튜토리얼 설정","labs_do_not_show_again":"다시 보이지 않기","labs_cryptoartai":"CRYPTOART.AI","labs_cryptoartai_desc":"암호화 디지털 예술 연결.","dashboard_mobile_test":"모바일 테스트 참여","dashboard_source_code":"소스 코드","privacy_policy":"개인정보처리방침","version_of_stable":"버전 {{version}}","version_of_unstable":"버전 {{version}}-{{build}}-{{hash}}","register_restore_backups":"백업 복원","register_restore_backups_cancel":"취소","register_restore_backups_confirm":"복원","register_restore_backups_hint":"클릭하거나 파일을 여기서 끌어들이세요","register_restore_backups_file":"파일","register_restore_backups_text":"텍스트","register_restore_backups_tabs":"백업 복원 탭","create_wallet_mnemonic_tip":"월렛의 자산을 보호하기 위해 니모닉 단어를 잘 저장하고 잊지 마세요.","create_wallet_password_uppercase_tip":"대문자 하나가 포함되어야 합니다","create_wallet_password_lowercase_tip":"소문자 하나가 포함되어야 합니다","create_wallet_password_number_tip":"숫자 하나가 포함되어야 합니다","create_wallet_password_special_tip":"특수문자 하나가 포함되어야 합니다","create_wallet_password_satisfied_requirement":"비밀번호가 요구 사항을 충족하지 않습니다.","create_wallet_password_match_tip":"비밀번호가 일치하지 않습니다","create_wallet_password_length_error":"비밀번호 길이가 잘못되었습니다.","create_wallet_name_placeholder":"1-12 자 입력하세요","create_wallet_form_title":"월렛 만들기","create_wallet_wallet_name":"월렛 이름","create_wallet_payment_password":"결재 비밀번호","create_wallet_re_enter_payment_password":"결재 비밀번호 다시 설정","create_wallet_payment_password_tip":"백업 암호는 8자에서 20자 사이여야 하며 숫자, 대문자, 소문자 및 특수 문자를 포함해야 합니다.","create_wallet_your_wallet_address":"월렛 주소","create_wallet_done":"완료","create_wallet_verify_words":"이모닉 단어 인증","create_wallet_mnemonic_word_not_match":"니모닉 단어가 불일치합니다"}');

/***/ }),

/***/ 59641:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"crwdns1619:0crwdne1619:0","wallets":"crwdns1621:0crwdne1621:0","personas":"crwdns1623:0crwdne1623:0","persona":"crwdns7557:0crwdne7557:0","refresh":"crwdns7559:0crwdne7559:0","next":"crwdns7561:0crwdne7561:0","cancel":"crwdns7563:0crwdne7563:0","back":"crwdns7565:0crwdne7565:0","agree":"crwdns7567:0crwdne7567:0","confirm":"crwdns7569:0crwdne7569:0","verify":"crwdns7571:0crwdne7571:0","go_back":"crwdns7573:0crwdne7573:0","connect":"crwdns7575:0crwdne7575:0","searching":"crwdns7863:0crwdne7863:0","restore":"crwdns7835:0crwdne7835:0","save":"crwdns7955:0crwdne7955:0","manage":"crwdns8027:0crwdne8027:0","recovery":"crwdns7995:0crwdne7995:0","successful":"crwdns8077:0crwdne8077:0","close":"crwdns8173:0crwdne8173:0","send":"crwdns8203:0crwdne8203:0","resend":"crwdns8205:0crwdne8205:0","print":"crwdns13039:0crwdne13039:0","download":"crwdns13041:0crwdne13041:0","print_preview":"crwdns13043:0crwdne13043:0","download_preview":"crwdns13045:0crwdne13045:0","confirm_password":"crwdns8175:0crwdne8175:0","about_dialog_license":"crwdns1625:0crwdne1625:0","footer_bounty_list":"crwdns1627:0crwdne1627:0","about_dialog_source_code":"crwdns1629:0crwdne1629:0","about_dialog_feedback":"crwdns1631:0crwdne1631:0","about_dialog_touch":"crwdns1633:0crwdne1633:0","about_dialog_description":"crwdns1635:0crwdne1635:0","setup_page_title":"crwdns1637:0crwdne1637:0","setup_page_description":"crwdns1639:0crwdne1639:0","setup_page_create_account_title":"crwdns1641:0crwdne1641:0","setup_page_create_account_subtitle":"crwdns1643:0crwdne1643:0","setup_page_create_account_button":"crwdns1645:0crwdne1645:0","setup_page_create_restore_title":"crwdns1647:0crwdne1647:0","setup_page_create_restore_subtitle":"crwdns1649:0crwdne1649:0","setup_page_create_restore_button":"crwdns1651:0crwdne1651:0","create_account_mask_id":"crwdns13047:0crwdne13047:0","create_account_private_key":"crwdns13049:0crwdne13049:0","create_account_identity_id":"crwdns13051:0crwdne13051:0","create_account_identity_title":"crwdns7577:0crwdne7577:0","create_account_sign_in_button":"crwdns7579:0crwdne7579:0","create_account_persona_exists":"crwdns13053:0crwdne13053:0","create_account_mnemonic_download_or_print":"crwdns13055:0crwdne13055:0","create_account_preview_tip":"crwdns13057:0crwdne13057:0","create_account_mnemonic_confirm_failed":"crwdns7583:0crwdne7583:0","create_account_connect_social_media_button":"crwdns7585:0crwdne7585:0","create_account_connect_social_media":"crwdns7587:0{{type}}crwdne7587:0","create_account_persona_title":"crwdns7589:0crwdne7589:0","create_account_persona_subtitle":"crwdns7591:0crwdne7591:0","create_account_persona_successfully":"crwdns7593:0crwdne7593:0","create_account_connect_social_media_title":"crwdns7595:0crwdne7595:0","create_account_failed":"crwdns7597:0crwdne7597:0","sign_in_account_identity_title":"crwdns7599:0crwdne7599:0","sign_in_account_tab_identity":"crwdns10039:0crwdne10039:0","sign_in_account_sign_up_button":"crwdns7601:0crwdne7601:0","sign_in_account_identity_warning":"crwdns7603:0crwdne7603:0","sign_in_account_private_key_placeholder":"crwdns7605:0crwdne7605:0","sign_in_account_private_key_error":"crwdns7607:0crwdne7607:0","sign_in_account_private_key_persona_not_found":"crwdns7609:0crwdne7609:0","sign_in_account_private_key_warning":"crwdns7611:0crwdne7611:0","sign_in_account_mnemonic_confirm_failed":"crwdns8191:0crwdne8191:0","sign_in_account_cloud_backup_send_email_success":"crwdns8079:0{{type}}crwdnd8079:0{{type}}crwdne8079:0","sign_in_account_local_backup_warning":"crwdns7613:0crwdne7613:0","sign_in_account_local_backup_payment_password":"crwdns9329:0crwdne9329:0","sign_in_account_local_backup_file_drag":"crwdns7615:0crwdne7615:0","sign_in_account_cloud_backup_warning":"crwdns7617:0crwdne7617:0","sign_in_account_cloud_backup_not_support":"crwdns8081:0crwdne8081:0","sign_in_account_cloud_send_verification_code_tip":"crwdns8193:0crwdne8193:0","sign_in_account_cloud_backup_failed":"crwdns8083:0crwdne8083:0","sign_in_account_cloud_backup_email_or_phone_number":"crwdns7619:0crwdne7619:0","sign_in_account_cloud_backup_password":"crwdns7621:0crwdne7621:0","sign_in_account_cloud_restore_failed":"crwdns7623:0crwdne7623:0","sign_in_account_cloud_backup_download_failed":"crwdns7625:0crwdne7625:0","sign_in_account_cloud_backup_decrypt_failed":"crwdns7627:0crwdne7627:0","sign_in_account_cloud_backup_email_format_error":"crwdns8085:0crwdne8085:0","sign_in_account_cloud_backup_phone_format_error":"crwdns8087:0crwdne8087:0","sign_in_account_cloud_backup_synchronize_password_tip":"crwdns8089:0crwdne8089:0","cloud_backup":"crwdns7629:0crwdne7629:0","wallets_transfer":"crwdns1653:0crwdne1653:0","wallets_assets":"crwdns8003:0crwdne8003:0","wallets_transfer_memo":"crwdns8005:0crwdne8005:0","wallets_transfer_amount":"crwdns8007:0crwdne8007:0","wallets_transfer_to_address":"crwdns8009:0crwdne8009:0","wallets_transfer_error_amount_absence":"crwdns8011:0crwdne8011:0","wallets_transfer_error_address_absence":"crwdns8013:0crwdne8013:0","wallets_transfer_error_contract":"crwdns9331:0crwdne9331:0","wallets_transfer_error_nft":"crwdns9333:0crwdne9333:0","wallets_transfer_error_invalid_address":"crwdns8015:0crwdne8015:0","wallet_transfer_error_no_address_has_been_set_name":"crwdns10429:0crwdne10429:0","wallet_transfer_error_no_ens_support":"crwdns10431:0crwdne10431:0","wallets_transfer_error_insufficient_balance":"crwdns8017:0{{symbol}}crwdne8017:0","wallets_transfer_error_same_address_with_current_account":"crwdns10617:0crwdne10617:0","wallets_transfer_error_is_contract_address":"crwdns10619:0crwdne10619:0","wallets_transfer_send":"crwdns8019:0crwdne8019:0","wallets_transfer_memo_placeholder":"crwdns8021:0crwdne8021:0","wallets_transfer_contract":"crwdns9335:0crwdne9335:0","wallets_transfer_contract_placeholder":"crwdns9337:0crwdne9337:0","wallets_swap":"crwdns1655:0crwdne1655:0","wallets_red_packet":"crwdns1657:0crwdne1657:0","wallets_sell":"crwdns1659:0crwdne1659:0","wallets_history":"crwdns1661:0crwdne1661:0","settings":"crwdns1663:0crwdne1663:0","gas_fee":"crwdns8989:0crwdne8989:0","transfer_cost":"crwdns8991:0{{gasFee}}crwdnd8991:0{{symbol}}crwdnd8991:0{{usd}}crwdne8991:0","done":"crwdns1665:0crwdne1665:0","labs":"crwdns1667:0crwdne1667:0","wallet_transactions_pending":"crwdns7921:0crwdne7921:0","wallet_gas_fee_settings_low":"crwdns9015:0crwdne9015:0","wallet_gas_fee_settings_medium":"crwdns9017:0crwdne9017:0","wallet_gas_fee_settings_high":"crwdns9019:0crwdne9019:0","wallets_startup_create":"crwdns1669:0crwdne1669:0","wallets_startup_create_desc":"crwdns1671:0crwdne1671:0","wallets_startup_create_action":"crwdns1673:0crwdne1673:0","wallets_startup_import":"crwdns1675:0crwdne1675:0","wallets_startup_import_desc":"crwdns1677:0crwdne1677:0","wallets_startup_import_action":"crwdns1679:0crwdne1679:0","wallets_startup_connect":"crwdns1681:0crwdne1681:0","wallets_startup_connect_desc":"crwdns1683:0crwdne1683:0","wallets_startup_connect_action":"crwdns1685:0crwdne1685:0","wallets_connect_wallet_metamask":"crwdns1687:0crwdne1687:0","wallets_connect_wallet_connect":"crwdns1689:0crwdne1689:0","wallets_connect_wallet_polka":"crwdns1691:0crwdne1691:0","wallets_create_wallet_input_placeholder":"crwdns1693:0crwdne1693:0","wallets_create_successfully_title":"crwdns1695:0crwdne1695:0","wallets_create_successfully_tips":"crwdns1697:0crwdne1697:0","wallets_create_successfully_unlock":"crwdns1699:0crwdne1699:0","wallets_create_wallet_alert":"crwdns1701:0crwdne1701:0","wallets_wallet_connect_title":"crwdns1703:0crwdne1703:0","wallets_wallet_mnemonic":"crwdns1705:0crwdne1705:0","wallets_wallet_json_file":"crwdns1707:0crwdne1707:0","wallets_wallet_private_key":"crwdns1709:0crwdne1709:0","wallets_import_wallet_tabs":"crwdns1711:0crwdne1711:0","wallets_import_wallet_password_placeholder":"crwdns1713:0crwdne1713:0","wallets_import_wallet_cancel":"crwdns1715:0crwdne1715:0","wallets_import_wallet_import":"crwdns1717:0crwdne1717:0","wallets_create_wallet_tabs":"crwdns1719:0crwdne1719:0","wallets_create_wallet_refresh":"crwdns1721:0crwdne1721:0","wallets_create_wallet_remember_later":"crwdns1723:0crwdne1723:0","wallets_create_wallet_verification":"crwdns1725:0crwdne1725:0","wallets_collectible_address":"crwdns1727:0crwdne1727:0","wallets_collectible_token_id":"crwdns7951:0crwdne7951:0","wallets_collectible_field_contract_require":"crwdns9021:0crwdne9021:0","wallets_collectible_field_token_id_require":"crwdns9023:0crwdne9023:0","wallets_collectible_load_end":"crwdns9339:0crwdne9339:0","wallets_balance":"crwdns1729:0crwdne1729:0","wallets_balance_all_chain":"crwdns9341:0crwdne9341:0","wallets_balance_Send":"crwdns1731:0crwdne1731:0","wallets_balance_Buy":"crwdns1733:0crwdne1733:0","wallets_balance_Swap":"crwdns1735:0crwdne1735:0","wallets_balance_Receive":"crwdns1737:0crwdne1737:0","wallets_assets_token":"crwdns1739:0crwdne1739:0","wallets_assets_token_sent_not_connect_tip":"crwdns9343:0{{chainName}}crwdne9343:0","wallets_assets_token_sent_switch_network_tip":"crwdns9345:0crwdne9345:0","wallets_assets_investment":"crwdns1741:0crwdne1741:0","wallets_assets_collectibles":"crwdns8171:0crwdne8171:0","wallets_assets_custom_token":"crwdns1745:0crwdne1745:0","wallets_assets_custom_collectible":"crwdns1747:0crwdne1747:0","wallets_assets_asset":"crwdns1749:0crwdne1749:0","wallets_assets_balance":"crwdns1751:0crwdne1751:0","wallets_assets_price":"crwdns1753:0crwdne1753:0","wallets_assets_value":"crwdns1755:0crwdne1755:0","wallets_assets_operation":"crwdns1757:0crwdne1757:0","wallets_address":"crwdns1759:0crwdne1759:0","wallets_receive_tips":"crwdns1761:0{{chainName}}crwdne1761:0","wallets_add_collectible":"crwdns1763:0crwdne1763:0","wallets_incorrect_address":"crwdns1765:0crwdne1765:0","wallets_collectible_been_added":"crwdns1767:0crwdne1767:0","wallets_collectible_error_not_exist":"crwdns7953:0crwdne7953:0","wallets_collectible_contract_is_empty":"crwdns9347:0crwdne9347:0","wallets_collectible_token_id_is_empty":"crwdns9349:0crwdne9349:0","wallets_collectible_add":"crwdns1769:0crwdne1769:0","wallets_add_token":"crwdns1771:0crwdne1771:0","wallets_token_been_added":"crwdns1773:0crwdne1773:0","wallets_token_symbol_tips":"crwdns1775:0crwdne1775:0","wallets_token_decimals_tips":"crwdns1777:0crwdne1777:0","wallets_add_token_contract_address":"crwdns1779:0crwdne1779:0","wallets_add_token_symbol":"crwdns1781:0crwdne1781:0","wallets_add_token_decimals":"crwdns1783:0crwdne1783:0","wallets_add_token_cancel":"crwdns1785:0crwdne1785:0","wallets_add_token_next":"crwdns1787:0crwdne1787:0","wallets_empty_tokens_tip":"crwdns1789:0crwdne1789:0","wallets_empty_collectible_tip":"crwdns1791:0crwdne1791:0","wallets_reload":"crwdns17240:0crwdne17240:0","wallets_address_copied":"crwdns1793:0crwdne1793:0","public_key_copied":"crwdns16574:0crwdne16574:0","wallets_address_copy":"crwdns1795:0crwdne1795:0","wallets_history_types":"crwdns1797:0crwdne1797:0","wallets_history_value":"crwdns1799:0crwdne1799:0","wallets_history_time":"crwdns1801:0crwdne1801:0","wallets_history_receiver":"crwdns1803:0crwdne1803:0","wallets_empty_history_tips":"crwdns1805:0crwdne1805:0","wallets_loading_token":"crwdns1807:0crwdne1807:0","personas_setup_connect_tips":"crwdns1809:0{{type}}crwdne1809:0","personas_setup_tip":"crwdns8091:0crwdne8091:0","personas_setup_connect":"crwdns1811:0crwdne1811:0","personas_name_maximum_tips":"crwdns1813:0{{length}}crwdne1813:0","personas_name_existed":"crwdns7965:0crwdne7965:0","personas_rename_placeholder":"crwdns1815:0crwdne1815:0","personas_confirm":"crwdns1817:0crwdne1817:0","personas_cancel":"crwdns1819:0crwdne1819:0","personas_export_persona":"crwdns7939:0crwdne7939:0","personas_export_persona_copy":"crwdns7941:0crwdne7941:0","personas_export_persona_copy_success":"crwdns7943:0crwdne7943:0","personas_export_persona_copy_failed":"crwdns7945:0crwdne7945:0","personas_export_persona_confirm_password_tip":"crwdns8177:0crwdne8177:0","personas_export_private":"crwdns7947:0crwdne7947:0","personas_export_private_key_tip":"crwdns7949:0crwdne7949:0","personas_delete_confirm_tips":"crwdns1821:0{{nickname}}crwdne1821:0","personas_delete_dialog_title":"crwdns1823:0crwdne1823:0","personas_edit_dialog_title":"crwdns1825:0crwdne1825:0","personas_edit":"crwdns1827:0crwdne1827:0","personas_delete":"crwdns1829:0crwdne1829:0","personas_logout":"crwdns8179:0crwdne8179:0","personas_logout_confirm_password_tip":"crwdns8181:0crwdne8181:0","personas_add_persona":"crwdns1831:0crwdne1831:0","personas_back_up":"crwdns1833:0crwdne1833:0","personas_connect_to":"crwdns1835:0{{internalName}}crwdne1835:0","personas_disconnect":"crwdns1837:0crwdne1837:0","personas_disconnect_raw":"crwdns14714:0crwdne14714:0","personas_disconnect_warning":"crwdns7997:0crwdne7997:0","personas_logout_warning":"crwdns8183:0crwdne8183:0","personas_add":"crwdns7957:0crwdne7957:0","personas_upload_avatar":"crwdns7959:0crwdne7959:0","personas_rename":"crwdns1839:0crwdne1839:0","personas_invite_post":"crwdns7903:0{{identifier}}crwdne7903:0","personas_empty_contact_tips":"crwdns7905:0{{name}}crwdne7905:0","personas_contacts_name":"crwdns7907:0crwdne7907:0","personas_contacts_operation":"crwdns7909:0crwdne7909:0","personas_contacts_invite":"crwdns7911:0crwdne7911:0","personas_post_is_empty":"crwdns7979:0crwdne7979:0","personas_post_create":"crwdns7981:0crwdne7981:0","settings_general":"crwdns1841:0crwdne1841:0","settings_backup_recovery":"crwdns7631:0crwdne7631:0","settings_local_backup":"crwdns7865:0crwdne7865:0","settings_cloud_backup":"crwdns7867:0crwdne7867:0","settings_appearance_default":"crwdns7633:0crwdne7633:0","settings_appearance_light":"crwdns7635:0crwdne7635:0","settings_appearance_dark":"crwdns7637:0crwdne7637:0","settings_backup_preview_account":"crwdns7639:0crwdne7639:0","settings_backup_preview_personas":"crwdns7641:0crwdne7641:0","settings_backup_preview_associated_account":"crwdns7643:0crwdne7643:0","settings_backup_preview_posts":"crwdns7645:0crwdne7645:0","settings_backup_preview_contacts":"crwdns7647:0crwdne7647:0","settings_backup_preview_file":"crwdns17256:0crwdne17256:0","settings_backup_preview_wallets":"crwdns7651:0crwdne7651:0","settings_backup_preview_created_at":"crwdns7653:0crwdne7653:0","settings_language_title":"crwdns1847:0crwdne1847:0","settings_language_desc":"crwdns1849:0crwdne1849:0","settings_language_auto":"crwdns3967:0crwdne3967:0","settings_appearance_title":"crwdns1851:0crwdne1851:0","settings_appearance_desc":"crwdns1853:0crwdne1853:0","settings_data_source_title":"crwdns1855:0crwdne1855:0","settings_data_source_desc":"crwdns1857:0crwdne1857:0","settings_sync_with_mobile_title":"crwdns1859:0crwdne1859:0","settings_sync_with_mobile_desc":"crwdns1861:0crwdne1861:0","settings_global_backup_title":"crwdns1863:0crwdne1863:0","settings_global_backup_desc":"crwdns1865:0crwdne1865:0","settings_global_backup_last":"crwdns7869:0{{backupAt}}crwdnd7869:0{{backupMethod}}crwdne7869:0","settings_restore_database_title":"crwdns1867:0crwdne1867:0","settings_restore_database_desc":"crwdns1869:0crwdne1869:0","settings_email_title":"crwdns7967:0crwdne7967:0","settings_email_desc":"crwdns7969:0crwdne7969:0","settings_change_password_title":"crwdns7971:0crwdne7971:0","settings_change_password_desc":"crwdns7973:0crwdne7973:0","settings_change_password_not_set":"crwdns7975:0crwdne7975:0","settings_phone_number_title":"crwdns7659:0crwdne7659:0","settings_phone_number_desc":"crwdns7661:0crwdne7661:0","settings_password_rule":"crwdns7665:0crwdne7665:0","settings_button_cancel":"crwdns7977:0crwdne7977:0","settings_button_confirm":"crwdns7669:0crwdne7669:0","settings_button_sync":"crwdns7671:0crwdne7671:0","settings_button_backup":"crwdns7673:0crwdne7673:0","settings_button_recovery":"crwdns7675:0crwdne7675:0","settings_button_setup":"crwdns9495:0crwdne9495:0","settings_button_change":"crwdns7679:0crwdne7679:0","settings_dialogs_bind_email_or_phone":"crwdns7871:0crwdne7871:0","settings_dialogs_verify_backup_password":"crwdns7683:0crwdne7683:0","settings_dialogs_setting_backup_password":"crwdns7685:0crwdne7685:0","settings_dialogs_change_backup_password":"crwdns7687:0crwdne7687:0","settings_dialogs_setting_email":"crwdns7689:0crwdne7689:0","settings_dialogs_change_email":"crwdns7691:0crwdne7691:0","settings_dialogs_setting_phone_number":"crwdns7693:0crwdne7693:0","settings_dialogs_change_phone_number":"crwdns7695:0crwdne7695:0","settings_dialogs_incorrect_code":"crwdns7697:0crwdne7697:0","settings_dialogs_incorrect_email":"crwdns7699:0crwdne7699:0","settings_dialogs_incorrect_phone":"crwdns7701:0crwdne7701:0","settings_dialogs_incorrect_password":"crwdns7703:0crwdne7703:0","settings_dialogs_inconsistency_password":"crwdns7705:0crwdne7705:0","settings_dialogs_current_email_validation":"crwdns7707:0crwdne7707:0","settings_dialogs_change_email_validation":"crwdns8207:0crwdne8207:0","settings_dialogs_current_phone_validation":"crwdns7709:0crwdne7709:0","settings_dialogs_change_phone_validation":"crwdns8209:0crwdne8209:0","settings_dialogs_backup_to_cloud":"crwdns9027:0crwdne9027:0","settings_dialogs_merge_to_local_data":"crwdns7875:0crwdne7875:0","settings_dialogs_backup_action_desc":"crwdns7879:0crwdne7879:0","settings_dialogs_backup_to_cloud_action":"crwdns10601:0crwdne10601:0","settings_dialogs_backup_merge_cloud":"crwdns10603:0crwdne10603:0","settings_dialogs_backup_merged_tip":"crwdns9029:0crwdne9029:0","settings_label_backup_password":"crwdns7711:0crwdne7711:0","settings_label_new_backup_password":"crwdns7713:0crwdne7713:0","settings_label_backup_password_cloud":"crwdns9025:0crwdne9025:0","settings_label_payment_password":"crwdns7881:0crwdne7881:0","settings_label_re_enter":"crwdns7715:0crwdne7715:0","settings_alert_password_set":"crwdns7883:0crwdne7883:0","settings_alert_password_updated":"crwdns7885:0crwdne7885:0","settings_alert_email_set":"crwdns7887:0crwdne7887:0","settings_alert_email_updated":"crwdns7889:0crwdne7889:0","settings_alert_phone_number_set":"crwdns7891:0crwdne7891:0","settings_alert_phone_number_updated":"crwdns7893:0crwdne7893:0","settings_alert_backup_fail":"crwdns7895:0crwdne7895:0","settings_alert_backup_success":"crwdns7897:0crwdne7897:0","settings_alert_validation_code_sent":"crwdns7899:0crwdne7899:0","settings_alert_merge_success":"crwdns7901:0crwdne7901:0","labs_file_service":"crwdns1885:0crwdne1885:0","labs_file_service_desc":"crwdns1887:0crwdne1887:0","labs_markets":"crwdns1889:0crwdne1889:0","labs_markets_desc":"crwdns1891:0crwdne1891:0","labs_red_packet":"crwdns1893:0crwdne1893:0","labs_red_packet_desc":"crwdns1895:0crwdne1895:0","labs_swap":"crwdns1897:0crwdne1897:0","labs_swap_desc":"crwdns1899:0crwdne1899:0","labs_transak":"crwdns1901:0crwdne1901:0","labs_transak_desc":"crwdns1903:0crwdne1903:0","labs_savings":"crwdns13246:0crwdne13246:0","labs_savings_desc":"crwdns13248:0crwdne13248:0","labs_snapshot":"crwdns1905:0crwdne1905:0","labs_snapshot_desc":"crwdns1907:0crwdne1907:0","labs_market_trend":"crwdns1909:0crwdne1909:0","labs_market_trend_desc":"crwdns1911:0crwdne1911:0","labs_collectibles":"crwdns1913:0crwdne1913:0","labs_collectibles_desc":"crwdns1915:0crwdne1915:0","labs_gitcoin":"crwdns1917:0crwdne1917:0","labs_gitcoin_desc":"crwdns1919:0crwdne1919:0","labs_valuables":"crwdns1921:0crwdne1921:0","labs_valuables_desc":"crwdns1923:0crwdne1923:0","labs_dhedge":"crwdns1925:0crwdne1925:0","labs_dhedge_desc":"crwdns1927:0crwdne1927:0","labs_mask_box":"crwdns10323:0crwdne10323:0","labs_mask_box_desc":"crwdns10325:0crwdne10325:0","labs_loot_man":"crwdns10327:0crwdne10327:0","labs_loot_man_desc":"crwdns10329:0crwdne10329:0","labs_good_ghosting":"crwdns10331:0crwdne10331:0","labs_good_ghosting_desc":"crwdns10333:0crwdne10333:0","labs_pool_together":"crwdns10335:0crwdne10335:0","labs_pool_together_desc":"crwdns10337:0crwdne10337:0","labs_settings_market_trend":"crwdns1929:0crwdne1929:0","labs_settings_market_trend_source":"crwdns1931:0crwdne1931:0","labs_settings_swap":"crwdns1933:0crwdne1933:0","labs_settings_swap_network":"crwdns8195:0{{network}}crwdne8195:0","labs_pets":"crwdns9397:0crwdne9397:0","labs_pets_desc":"crwdns9399:0crwdne9399:0","labs_cyber_connect":"crwdns13316:0crwdne13316:0","labs_cyber_connect_desc":"crwdns13318:0crwdne13318:0","labs_setup_tutorial":"crwdns10339:0crwdne10339:0","labs_do_not_show_again":"crwdns10341:0crwdne10341:0","labs_cryptoartai":"crwdns10519:0crwdne10519:0","labs_cryptoartai_desc":"crwdns10521:0crwdne10521:0","labs_art_blocks":"crwdns14476:0crwdne14476:0","labs_art_blocks_desc":"crwdns14478:0crwdne14478:0","dashboard_mobile_test":"crwdns1941:0crwdne1941:0","dashboard_source_code":"crwdns1943:0crwdne1943:0","privacy_policy":"crwdns1945:0crwdne1945:0","version_of_stable":"crwdns1947:0{{version}}crwdne1947:0","version_of_unstable":"crwdns1949:0{{version}}crwdnd1949:0{{build}}crwdnd1949:0{{hash}}crwdne1949:0","register_restore_backups":"crwdns1951:0crwdne1951:0","register_restore_backups_cancel":"crwdns1953:0crwdne1953:0","register_restore_backups_confirm":"crwdns1955:0crwdne1955:0","register_restore_backups_hint":"crwdns1957:0crwdne1957:0","register_restore_backups_file":"crwdns1959:0crwdne1959:0","register_restore_backups_text":"crwdns1961:0crwdne1961:0","register_restore_backups_tabs":"crwdns1963:0crwdne1963:0","create_wallet_mnemonic_tip":"crwdns7725:0crwdne7725:0","create_wallet_password_uppercase_tip":"crwdns7727:0crwdne7727:0","create_wallet_password_lowercase_tip":"crwdns7729:0crwdne7729:0","create_wallet_password_number_tip":"crwdns7731:0crwdne7731:0","create_wallet_password_special_tip":"crwdns7733:0crwdne7733:0","create_wallet_password_satisfied_requirement":"crwdns9351:0crwdne9351:0","create_wallet_password_match_tip":"crwdns7735:0crwdne7735:0","create_wallet_password_length_error":"crwdns9353:0crwdne9353:0","create_wallet_name_placeholder":"crwdns7737:0crwdne7737:0","create_wallet_form_title":"crwdns7739:0crwdne7739:0","create_wallet_wallet_name":"crwdns7741:0crwdne7741:0","create_wallet_payment_password":"crwdns7743:0crwdne7743:0","create_wallet_re_enter_payment_password":"crwdns7745:0crwdne7745:0","create_wallet_payment_password_tip":"crwdns7747:0crwdne7747:0","create_wallet_your_wallet_address":"crwdns7749:0crwdne7749:0","create_wallet_done":"crwdns7751:0crwdne7751:0","create_wallet_verify_words":"crwdns7753:0crwdne7753:0","create_wallet_mnemonic_word_not_match":"crwdns8029:0crwdne8029:0"}');

/***/ }),

/***/ 32284:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"关于","wallets":"钱包","personas":"身份","persona":"身份","refresh":"刷新","next":"下一步","cancel":"取消","back":"返回","agree":"同意","confirm":"确认","verify":"验证","go_back":"返回","connect":"连接","searching":"搜索中","restore":"恢复","save":"保存","manage":"管理","recovery":"恢复","successful":"成功","close":"关闭","send":"发送","resend":"重新发送","print":"打印","download":"下载","print_preview":"打印预览","download_preview":"下载预览","confirm_password":"密码确认","about_dialog_license":"开源协议： ","footer_bounty_list":"赏金列表","about_dialog_source_code":"源代码： ","about_dialog_feedback":"反馈： ","about_dialog_touch":"联系我们","about_dialog_description":"Mask Network 引领您探索更新更开放的互联网。Mask Network 允许您在社交网络上发送加密的贴文。 同时我们提供了更多功能，譬如发送加密红包，购买加密货币，加密文件服务等。","setup_page_title":"欢迎来到 Mask Network！","setup_page_description":"在社交网络上加密您的贴文和聊天内容，只允许您的朋友进行解密。","setup_page_create_account_title":"创建身份","setup_page_create_account_subtitle":"构建您的数字身份系统，探索 Web 3.0","setup_page_create_account_button":"创建","setup_page_create_restore_title":"恢复身份","setup_page_create_restore_subtitle":"通过身份助记词或历史备份恢复。","setup_page_create_restore_button":"恢复或登录","create_account_private_key":"私钥","create_account_identity_id":"身份助记词","create_account_identity_title":"创建Mask Network身份","create_account_sign_in_button":"恢复或登录","create_account_persona_exists":"该身份已存在。","create_account_mnemonic_download_or_print":"我已妥善保存我的身份信息。","create_account_preview_tip":"这个二维码保存您的身份信息，请妥善保存。您可以使用 Mask APP 扫描二维码登录您的身份。","create_account_mnemonic_confirm_failed":"助记词不正确","create_account_connect_social_media_button":"创建","create_account_connect_social_media":"连接到 {{type}}","create_account_persona_title":"欢迎来到 Mask Network！","create_account_persona_subtitle":"您可以创建个人身份并连接社交账户","create_account_persona_successfully":"创建身份成功","create_account_connect_social_media_title":"连接到社交媒体","create_account_failed":"创建帐户失败","sign_in_account_identity_title":"恢复或登录","sign_in_account_tab_identity":"身份","sign_in_account_sign_up_button":"注册","sign_in_account_identity_warning":"数字身份助记词只能恢复您的数字身份。它可以加密并解密由这个数字身份签名和发送的社交网络信息内容。","sign_in_account_private_key_placeholder":"输入您的私钥","sign_in_account_private_key_error":"私钥不正确","sign_in_account_private_key_persona_not_found":"无法找到身份","sign_in_account_private_key_warning":"数字身份助记词只能恢复您的数字身份。它可以加密并解密由这个数字身份签名和发送的社交网络信息内容。","sign_in_account_mnemonic_confirm_failed":"助记词不正确","sign_in_account_cloud_backup_send_email_success":"验证码已发送到您的 {{type}}。请检查您的 {{type}}。","sign_in_account_local_backup_warning":"本地备份可以恢复本地存储的所有数据。","sign_in_account_local_backup_payment_password":"支付密码","sign_in_account_local_backup_file_drag":"请点击选择或拖动文件到这里","sign_in_account_cloud_backup_warning":"云端备份会保存并加密您的数据。","sign_in_account_cloud_backup_not_support":"不支持的数据备份格式","sign_in_account_cloud_send_verification_code_tip":"发送验证码至","sign_in_account_cloud_backup_failed":"恢复备份失败，请再试一次。","sign_in_account_cloud_backup_email_or_phone_number":"电子邮箱或电话号码","sign_in_account_cloud_backup_password":"备份密码","sign_in_account_cloud_restore_failed":"恢复失败","sign_in_account_cloud_backup_download_failed":"备份文件下载失败","sign_in_account_cloud_backup_decrypt_failed":"备份解密失败，请检查密码","sign_in_account_cloud_backup_email_format_error":"邮箱地址不正确。","sign_in_account_cloud_backup_phone_format_error":"此电话号码不正确。","sign_in_account_cloud_backup_synchronize_password_tip":"已成功验证您的云端备份密码，备份正在上传。 为了备份密码的一致，请确认您是否愿意将您的云端备份密码设置为本地备份密码。","cloud_backup":"云端备份","wallets_transfer":"转账","wallets_assets":"资产","wallets_transfer_memo":"备注","wallets_transfer_amount":"数额","wallets_transfer_to_address":"发送到地址","wallets_transfer_error_amount_absence":"输入数额","wallets_transfer_error_address_absence":"输入收款人地址","wallets_transfer_error_contract":"选择 NFT 合约","wallets_transfer_error_nft":"选择一个 NFT","wallets_transfer_error_invalid_address":"收款人地址无效","wallet_transfer_error_no_address_has_been_set_name":"接收人地址无效。","wallet_transfer_error_no_ens_support":"网络不支持 ENS。","wallets_transfer_error_insufficient_balance":"{{symbol}} 余额不足","wallets_transfer_error_same_address_with_current_account":"此接收地址与发送地址相同，请重新检查。","wallets_transfer_error_is_contract_address":"此接收地址为合约地址，请重新检查。","wallets_transfer_send":"发送","wallets_transfer_memo_placeholder":"可选填信息","wallets_transfer_contract":"合约","wallets_transfer_contract_placeholder":"选择 NFT 合约","wallets_swap":"兑换","wallets_red_packet":"红包","wallets_sell":"卖出","wallets_history":"历史记录","settings":"设置","gas_fee":"交易手续费","transfer_cost":"花费 {{gasFee}} {{symbol}} ≈ {{usd}} 美元","done":"完成!","labs":"D.Market","wallet_transactions_pending":"待定中","wallet_gas_fee_settings_low":"低","wallet_gas_fee_settings_medium":"中","wallet_gas_fee_settings_high":"高","wallets_startup_create":"创建新钱包","wallets_startup_create_desc":"Mask Network支持ETH、BSC 和 Polygon/Matic 等网络。","wallets_startup_create_action":"创建","wallets_startup_import":"导入钱包","wallets_startup_import_desc":"Mask钱包支持私钥、JSON文件和助记词导入。","wallets_startup_import_action":"导入","wallets_startup_connect":"连接钱包","wallets_startup_connect_desc":"支持Mask钱包、MetaMask和WalletConnect。","wallets_startup_connect_action":"连接钱包","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"连接钱包","wallets_connect_wallet_polka":"Polkadot 钱包","wallets_create_wallet_input_placeholder":"钱包名称","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"您已成功创建钱包。","wallets_create_successfully_unlock":"解锁钱包","wallets_create_wallet_alert":"Mask Network是一个免费的开源客户端接口。 Mask Network允许您直接与 区块链进行交互，同时您可以完全控制您的密钥和资金，请仔细考虑这一点。 您是掌控者，Mask Network不是银行或交易所。 我们不保留您的密钥、资金或信息。 这意味着我们无法访问账户、恢复密钥、重置密码或反向交易。","wallets_wallet_connect_title":"使用WalletConnect兼容的钱包扫描二维码","wallets_wallet_mnemonic":"助记词","wallets_wallet_json_file":"本地备份","wallets_wallet_private_key":"私钥","wallets_import_wallet_tabs":"导入钱包标签","wallets_import_wallet_password_placeholder":"钱包密码","wallets_import_wallet_cancel":"取消","wallets_import_wallet_import":"导入","wallets_create_wallet_tabs":"创建钱包标签","wallets_create_wallet_refresh":"刷新","wallets_create_wallet_remember_later":"请稍后再记住它","wallets_create_wallet_verification":"验证","wallets_collectible_address":"收藏品地址","wallets_collectible_token_id":"代币 ID","wallets_collectible_field_contract_require":"收藏品地址为必填项","wallets_collectible_field_token_id_require":"代币 ID 为必填项","wallets_collectible_load_end":"已加载完毕","wallets_balance":"资产在","wallets_balance_all_chain":"总览","wallets_balance_Send":"发送","wallets_balance_Buy":"购买","wallets_balance_Swap":"兑换","wallets_balance_Receive":"接收","wallets_assets_token":"代币","wallets_assets_token_sent_not_connect_tip":"未连接到 {{chainName}}。","wallets_assets_token_sent_switch_network_tip":"点击切换","wallets_assets_investment":"投资","wallets_assets_collectibles":"收藏品","wallets_assets_custom_token":"自定义代币","wallets_assets_custom_collectible":"自定义收藏品","wallets_assets_asset":"资产","wallets_assets_balance":"余额","wallets_assets_price":"价格","wallets_assets_value":"价值","wallets_assets_operation":"操作","wallets_address":"钱包地址","wallets_receive_tips":"扫描二维码并发送{{chainName}} 资产到此钱包","wallets_add_collectible":"添加收藏品","wallets_incorrect_address":"钱包地址不正确","wallets_collectible_been_added":"此收藏品已被添加。","wallets_collectible_error_not_exist":"此收藏品不存在或不属于您。","wallets_collectible_contract_is_empty":"请选择合约","wallets_collectible_token_id_is_empty":"请选择代币","wallets_collectible_add":"添加","wallets_add_token":"添加代币","wallets_token_been_added":"代币已被添加。","wallets_token_symbol_tips":"代币代号必须少于11或更少的字符。","wallets_token_decimals_tips":"十进制必须至少 0，且不得超过 18。","wallets_add_token_contract_address":"代币合约地址","wallets_add_token_symbol":"代币代号","wallets_add_token_decimals":"小数点精度","wallets_add_token_cancel":"取消","wallets_add_token_next":"下一步","wallets_empty_tokens_tip":"没有找到任何资产。请添加代币。","wallets_empty_collectible_tip":"没有找到任何收藏品。请添加收藏品。","wallets_address_copied":"已成功复制地址","wallets_address_copy":"复制","wallets_history_types":"类型","wallets_history_value":"价值","wallets_history_time":"时间","wallets_history_receiver":"交互者","wallets_empty_history_tips":"没有任何交易历史","wallets_loading_token":"正在加载代币","personas_setup_connect_tips":"请连接到您的 {{type}} 账户。","personas_setup_tip":"请创建或恢复身份。","personas_setup_connect":"连接","personas_name_maximum_tips":"最大长度为 {{length}} 个字符。","personas_name_existed":"此身份名称已存在","personas_rename_placeholder":"身份名称","personas_confirm":"确认","personas_cancel":"取消","personas_export_persona":"导出身份","personas_export_persona_copy":"复制","personas_export_persona_copy_success":"已复制","personas_export_persona_copy_failed":"复制失败","personas_export_persona_confirm_password_tip":"您还没有设置您的备份密码。想要导出您的身份私钥，必须先设置备份密码。","personas_export_private":"导出身份私钥","personas_export_private_key_tip":"此操作仅用于导出私钥。我们不导出任何其他数据。如果您需要导出更多数据，请前往设置页面：","personas_delete_confirm_tips":"请输入您的备份密码来确认删除身份 <i>{{nickname}}</i> 。","personas_delete_dialog_title":"删除身份","personas_edit_dialog_title":"编辑身份","personas_edit":"编辑","personas_delete":"删除","personas_logout":"登出","personas_logout_confirm_password_tip":"您还没有设置您的密码。要登出身份，您必须先设置备份密码。","personas_add_persona":"添加新身份","personas_back_up":"备份","personas_connect_to":"连接到 {{internalName}}","personas_disconnect":"断开连接","personas_disconnect_raw":"断开连接","personas_disconnect_warning":"你确定要删除此身份吗？ 您的Mask Network朋友将不能再通过此身份向您发送加密的消息，或查看您与此身份相关的Web 3产品。","personas_logout_warning":"身份登出后，您所关联的社交网络账户将不能解密过去的加密消息。 如果您需要重新使用您的身份，您可以使用您的身份私钥进行恢复。","personas_add":"添加","personas_upload_avatar":"上传头像","personas_rename":"重命名","personas_invite_post":"@{{identifier}} Hi，请下载Mask Network，以便我们可以用加密的方式分享帖子？#mask_io install http://mask.io","personas_empty_contact_tips":"您尚未有安装Mask Network的联系人。请邀请您的朋友下载 <i>{{name}}</i>","personas_contacts_name":"名称","personas_contacts_operation":"操作","personas_contacts_invite":"邀请","personas_post_is_empty":"您还没有创建任何加密贴文。","personas_post_create":"创建贴文","settings_general":"通用","settings_backup_recovery":"备份恢复","settings_local_backup":"本地备份","settings_cloud_backup":"云端备份","settings_appearance_default":"按照系统设置","settings_appearance_light":"浅色","settings_appearance_dark":"深色","settings_backup_preview_account":"账户","settings_backup_preview_personas":"身份","settings_backup_preview_associated_account":"关联账户","settings_backup_preview_posts":"加密贴文","settings_backup_preview_contacts":"联系人","settings_backup_preview_wallets":"Mask钱包","settings_backup_preview_created_at":"备份时间","settings_language_title":"语言","settings_language_desc":"选择您要使用的语言","settings_language_auto":"按照系统设置","settings_appearance_title":"外观","settings_appearance_desc":"选择您要使用的外观主题","settings_data_source_title":"数据源","settings_data_source_desc":"从不同平台获取趋势数据","settings_sync_with_mobile_title":"与移动设备同步","settings_sync_with_mobile_desc":"您可以与您的移动设备同步您的帐户和信息。 打开Mask Network移动应用程序，进入设置并点击与插件同步。","settings_global_backup_title":"备份数据库","settings_global_backup_desc":"提供选择本地备份和云端备份","settings_global_backup_last":"最近的备份时间为{{backupAt}}，备份方法为{{backupMethod}}。","settings_restore_database_title":"恢复数据库","settings_restore_database_desc":"从以前的数据库备份恢复","settings_email_title":"电子邮箱","settings_email_desc":"请绑定您的电子邮箱","settings_change_password_title":"备份密码","settings_change_password_desc":"修改备份密码","settings_change_password_not_set":"您尚未设置备份密码","settings_phone_number_title":"手机号码","settings_phone_number_desc":"请绑定您的手机号码","settings_password_rule":"备份密码必须为 8 到 20 个字符，并且至少包含一个数字、一个大写字母、一个小写字母和一个特殊字符。","settings_button_cancel":"取消","settings_button_confirm":"确认","settings_button_sync":"同步","settings_button_backup":"备份","settings_button_recovery":"恢复","settings_button_setup":"设置","settings_button_change":"修改","settings_dialogs_bind_email_or_phone":"请绑定您的电子邮箱或手机号码","settings_dialogs_verify_backup_password":"验证备份密码","settings_dialogs_setting_backup_password":"设置备份密码","settings_dialogs_change_backup_password":"修改备份密码","settings_dialogs_setting_email":"设置电子邮箱","settings_dialogs_change_email":"更改电子邮箱地址","settings_dialogs_setting_phone_number":"设置手机号码","settings_dialogs_change_phone_number":"修改手机号","settings_dialogs_incorrect_code":"验证码不正确.","settings_dialogs_incorrect_email":"邮箱地址不正确。","settings_dialogs_incorrect_phone":"此手机号码不正确。","settings_dialogs_incorrect_password":"密码不正确。","settings_dialogs_inconsistency_password":"密码不一致!","settings_dialogs_current_email_validation":"当前验证的邮箱地址为","settings_dialogs_change_email_validation":"想要更改其他邮箱地址，请验证您当前的邮箱地址。","settings_dialogs_current_phone_validation":"当前验证的手机号码为","settings_dialogs_change_phone_validation":"想要更改您的手机号码，您需要验证您当前的手机号码。","settings_dialogs_backup_to_cloud":"备份至云端","settings_dialogs_merge_to_local_data":"将云端备份合并到本地并再次备份到云端","settings_dialogs_backup_action_desc":"云端备份已存在， 您可以选择在备份之前先合并此云端备份到您的本地数据，或者直接覆盖重新备份。","settings_dialogs_backup_to_cloud_action":"此选项将使用本地数据覆盖现有云备份。","settings_dialogs_backup_merge_cloud":"此选项需要您输入现有云备份的密码进行解密。 解密后将会把现有云备份与本地数据合并，然后再次加密上传到云端。","settings_dialogs_backup_merged_tip":"您已经合并云端备份到本地. 如果您想要继续完成备份，请点击备份按钮将您的所有数据更新到云端。","settings_label_backup_password":"备份密码","settings_label_new_backup_password":"新备份密码","settings_label_backup_password_cloud":"云端文件的备份密码","settings_label_payment_password":"支付密码","settings_label_re_enter":"再次输入","settings_alert_password_set":"备份密码设置成功。","settings_alert_password_updated":"备份密码已更新","settings_alert_email_set":"电子邮箱已设置","settings_alert_email_updated":"邮箱地址已更新","settings_alert_phone_number_set":"手机号码已设置","settings_alert_phone_number_updated":"电话号码已更改","settings_alert_backup_fail":"备份失败","settings_alert_backup_success":"您已成功备份您的数据。","settings_alert_validation_code_sent":"验证码已发送","settings_alert_merge_success":"您已成功地将云端备份合并到本地数据。","labs_file_service":"文件服务","labs_file_service_desc":"为用户提供去中心化文档存储功能。","labs_markets":"ITO","labs_markets_desc":"将数字资产出售给您的加密世界朋友。","labs_red_packet":"红包","labs_red_packet_desc":"使用加密红包向您的朋友送上最好的祝福。","labs_swap":"兑换","labs_swap_desc":"通过Dex购买代币，无需额外费用和限制。","labs_transak":"Transak","labs_transak_desc":"Transak可支持在60多个国家内购买代币。","labs_savings":"储蓄","labs_snapshot":"Snapshot","labs_snapshot_desc":"直接在社交媒体上展示和投票支持提案。","labs_market_trend":"市场趋势","labs_market_trend_desc":"在社交媒体上直接显示代币信息、价格趋势图表和兑换信息。","labs_collectibles":"收藏品","labs_collectibles_desc":"直接在社交媒体上展示收藏品在 OpenSea 和 Rarible的特定信息，和提供发送报价及竞标功能。","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"在社交媒体上直接展示Gitcoin项目的具体信息。","labs_valuables":"Valuables","labs_valuables_desc":"购买和销售由其原创作者发布的推文。","labs_dhedge":"dHEDGE","labs_dhedge_desc":"以太坊上的去中心化对冲基金。","labs_mask_box":"Mask盲盒","labs_mask_box_desc":"支持多链的去中心化NFT盲盒发布平台。","labs_loot_man_desc":"探索NFT无尽的可能性。以革命性的方式在社交媒体上展示您的 NFT。","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"在Twitter上培养每周储蓄的习惯。","labs_pool_together":"无损彩票","labs_pool_together_desc":"在 Twitter 上参与零损失彩票活动。","labs_settings_market_trend":"市场趋势设置","labs_settings_market_trend_source":"默认趋势来源","labs_settings_swap":"交易所设置","labs_settings_swap_network":"{{network}} 网络默认交易所","labs_pets_desc":"探索NFT无尽的可能性。以革命性的方式在社交媒体上展示您的 NFT。","labs_setup_tutorial":"教程","labs_do_not_show_again":"不再提醒","dashboard_mobile_test":"参加移动端测试","dashboard_source_code":"源代码","privacy_policy":"隐私政策","version_of_stable":"版本 {{version}}","version_of_unstable":"版本 {{version}}-{{build}}-{{hash}}","register_restore_backups":"恢复备份","register_restore_backups_cancel":"取消","register_restore_backups_confirm":"恢复","register_restore_backups_hint":"请点击选择或拖动文件到这里","register_restore_backups_file":"文件","register_restore_backups_text":"文本内容","register_restore_backups_tabs":"恢复备份","create_wallet_mnemonic_tip":"请不要忘记保存您的助记词。您需要这个才能访问您的钱包。","create_wallet_password_uppercase_tip":"必须包含一个大写字符","create_wallet_password_lowercase_tip":"必须包含一个小写字符","create_wallet_password_number_tip":"必须包含一个数字","create_wallet_password_special_tip":"必须包含一个特殊字符","create_wallet_password_satisfied_requirement":"密码格式不符合要求。","create_wallet_password_match_tip":"密码不一致。","create_wallet_password_length_error":"密码长度不符合要求。","create_wallet_name_placeholder":"输入1-12 个字符","create_wallet_form_title":"创建一个钱包","create_wallet_wallet_name":"钱包名称","create_wallet_payment_password":"支付密码","create_wallet_re_enter_payment_password":"再次输入支付密码","create_wallet_payment_password_tip":"支付密码必须是数字、大小写字母和特殊字符中的2个类别的组合，长度为 8-20 个字符。","create_wallet_your_wallet_address":"您的钱包地址","create_wallet_done":"完成","create_wallet_verify_words":"验证助记词","create_wallet_mnemonic_word_not_match":"助记词不正确"}');

/***/ }),

/***/ 39675:
/***/ ((module) => {

module.exports = JSON.parse('{"about":"關於","wallets":"錢包","personas":"角色","persona":"角色","refresh":"刷新","next":"繼續","cancel":"取消","back":"返回","agree":"同意","confirm":"確認","verify":"驗證","go_back":"返回","connect":"連接","searching":"搜尋中","restore":"恢復","save":"存儲","manage":"管理","recovery":"恢復","successful":"成功","close":"關閉","send":"發送","resend":"重新傳送","confirm_password":"確認密碼","about_dialog_license":"開源協議： ","footer_bounty_list":"賞金列表","about_dialog_source_code":"原始碼： ","about_dialog_feedback":"反饋 ","about_dialog_touch":"聯繫我們","about_dialog_description":"Mask Network 引領您探索更新更開放的互聯網。Mask Network允許您在社交網路上發送加密的貼文。同時我們提供了更多功能，例如發送加密紅包，購買加密貨幣，加密文件服務等。","setup_page_title":"歡迎來到Mask Network","setup_page_description":"在社交網路上加密您的推文和聊天訊息，只允許您的朋友進行解密。","setup_page_create_account_title":"創建新身份","setup_page_create_account_subtitle":"創造你的虛擬身份，探索Web3.0","setup_page_create_account_button":"創建","setup_page_create_restore_title":"從身份或備份中恢復","setup_page_create_restore_subtitle":"從身份和歷史備份中恢復","setup_page_create_restore_button":"備份 或 登錄","create_account_private_key":"私鑰","create_account_identity_title":"在Mask Network創建一個身份","create_account_sign_in_button":"恢復","create_account_preview_tip":"此二維碼將保存你的身份密碼，請妥善保存。可使用Mask手機端掃描二維碼來登錄。","create_account_mnemonic_confirm_failed":"錯誤身份代碼","create_account_connect_social_media_button":"創建","create_account_connect_social_media":"連接 {{type}}","create_account_persona_title":"歡迎來到Mask Network","create_account_persona_subtitle":"您可以創建個人身分並連接社交帳戶","create_account_persona_successfully":"創建成功","create_account_connect_social_media_title":"連接社交平台","create_account_failed":"創建帳號失敗","sign_in_account_identity_title":"恢復您的身分","sign_in_account_tab_identity":"身份","sign_in_account_sign_up_button":"註冊","sign_in_account_identity_warning":"數字身分助記詞只能恢復您的數字身分。它可以加密並解密由這個數字身分簽名和發送的社交網路信息內容。","sign_in_account_private_key_placeholder":"請輸入你的私鑰","sign_in_account_private_key_error":"私钥不正确","sign_in_account_private_key_persona_not_found":"Persona失蹤","sign_in_account_private_key_warning":"數字身分助記詞只能恢復您的數字身分。它可以加密並解密由這個數字身分簽名和發送的社交網路訊息內容。","sign_in_account_mnemonic_confirm_failed":"錯誤身份","sign_in_account_cloud_backup_send_email_success":"驗證碼已發往 {{type}}. 請查看 {{type}}.","sign_in_account_local_backup_warning":"本地備份能恢復之前所有被本地存儲的數據","sign_in_account_local_backup_payment_password":"支付密碼","sign_in_account_local_backup_file_drag":"請點擊或拖拽文件到此處","sign_in_account_cloud_backup_warning":"雲端備份會保存並加密您的數據。","sign_in_account_cloud_backup_not_support":"不支持數據備份格式","sign_in_account_cloud_send_verification_code_tip":"發送驗證碼至","sign_in_account_cloud_backup_failed":"恢復備份失敗，請再試一次。","sign_in_account_cloud_backup_email_or_phone_number":"郵箱地址或電話號碼","sign_in_account_cloud_backup_password":"備份密碼","sign_in_account_cloud_restore_failed":"恢復失敗","sign_in_account_cloud_backup_download_failed":"下載備份失敗","sign_in_account_cloud_backup_decrypt_failed":"備份解密失敗，請檢查密碼","sign_in_account_cloud_backup_email_format_error":"電子郵件地址不正確","sign_in_account_cloud_backup_phone_format_error":"此電話號碼不正確。","sign_in_account_cloud_backup_synchronize_password_tip":"已成功驗證您的雲端備份密碼，備份正在上傳，為了備份密碼的一致，請確認您是否願意將您的雲端備份密碼設置為本地備份密碼。","cloud_backup":"雲端備份","wallets_transfer":"轉賬","wallets_assets":"資產","wallets_transfer_memo":"備註","wallets_transfer_amount":"數量","wallets_transfer_to_address":"至地址","wallets_transfer_error_amount_absence":"輸入數額","wallets_transfer_error_address_absence":"輸入接收者地址","wallets_transfer_error_contract":"選擇NFT合約","wallets_transfer_error_nft":"選擇一個NFT","wallets_transfer_error_invalid_address":"無效接收者地址","wallet_transfer_error_no_address_has_been_set_name":"接收者地址不存在","wallet_transfer_error_no_ens_support":"網路不支持ENS。","wallets_transfer_error_insufficient_balance":"{{symbol}} 餘額不足","wallets_transfer_send":"傳送","wallets_transfer_memo_placeholder":"可選填訊息","wallets_transfer_contract":"合約","wallets_transfer_contract_placeholder":"選擇一份NFT合約","wallets_swap":"兌換","wallets_red_packet":"紅包","wallets_sell":"賣出","wallets_history":"歷史記錄","settings":"設定","gas_fee":"交易手續費","transfer_cost":"花費 {{gasFee}} {{symbol}} ≈ ${{usd}}","done":"完成！","wallet_transactions_pending":"待定中","wallet_gas_fee_settings_low":"低","wallet_gas_fee_settings_medium":"中","wallet_gas_fee_settings_high":"高","wallets_startup_create":"創建一個新錢包","wallets_startup_create_desc":"Mask network 支援 Eth、 BSC 和 Polygon 網路。","wallets_startup_create_action":"創建","wallets_startup_import":"導入錢包","wallets_startup_import_desc":"Mask network 支援私鑰、JSON 文件和助記詞","wallets_startup_import_action":"導入","wallets_startup_connect":"連結其他錢包","wallets_startup_connect_desc":"Mask network 支援 Metamask 和 Connect Wallet.","wallets_startup_connect_action":"連結","wallets_connect_wallet_metamask":"MetaMask","wallets_connect_wallet_connect":"連接錢包","wallets_connect_wallet_polka":"PolkaDot 錢包","wallets_create_wallet_input_placeholder":"錢包名稱","wallets_create_successfully_title":"成功","wallets_create_successfully_tips":"您已成功創建錢包","wallets_create_successfully_unlock":"解鎖錢包","wallets_create_wallet_alert":"Mask Network是一個免費的開源客戶端接口。 Mask Network允許您直接與區塊鏈進行交互，同時您可以完全控制自己的密鑰和資金，請仔細考慮。 您是掌控者。 Mask Network不是銀行或交易所。 我們不會保留您的鑰匙，資金或信息。 這意味著我們無法訪問帳戶，恢復密鑰，重設密碼或撤消交易。","wallets_wallet_connect_title":"使用兼容WalletConnect的錢包掃描QR碼","wallets_wallet_mnemonic":"助記符","wallets_wallet_json_file":"本地備份","wallets_wallet_private_key":"私鑰","wallets_import_wallet_tabs":"導入錢包標籤","wallets_import_wallet_password_placeholder":"錢包密碼","wallets_import_wallet_cancel":"取消","wallets_import_wallet_import":"輸入","wallets_create_wallet_tabs":"創建錢包標籤","wallets_create_wallet_refresh":"刷新","wallets_create_wallet_remember_later":"記得以後","wallets_create_wallet_verification":"确认","wallets_collectible_address":"收藏品地址","wallets_collectible_token_id":"代幣 ID","wallets_collectible_field_contract_require":"收藏品地址為必填項","wallets_collectible_field_token_id_require":"代幣 ID 為必填項","wallets_collectible_load_end":"載入完畢","wallets_balance":"結餘","wallets_balance_all_chain":"所有鏈","wallets_balance_Send":"發送","wallets_balance_Buy":"購買","wallets_balance_Swap":"交換","wallets_balance_Receive":"接收","wallets_assets_token":"代幣","wallets_assets_token_sent_not_connect_tip":"未连接至 {{chainName}}.","wallets_assets_token_sent_switch_network_tip":"點擊切換","wallets_assets_investment":"投資","wallets_assets_collectibles":"收藏品","wallets_assets_custom_token":"自定義代幣","wallets_assets_custom_collectible":"自定義收藏品","wallets_assets_asset":"資產","wallets_assets_balance":"餘額","wallets_assets_price":"價格","wallets_assets_value":"價值","wallets_assets_operation":"操作","wallets_address":"錢包地址","wallets_receive_tips":"掃瞄二維碼並發送 {{chainName}} 資產到此錢包","wallets_add_collectible":"添加收藏品","wallets_incorrect_address":"合約地址錯誤","wallets_collectible_been_added":"此收藏品已被添加","wallets_collectible_error_not_exist":"此藏品不存在或不屬於你","wallets_collectible_contract_is_empty":"請選擇合約","wallets_collectible_token_id_is_empty":"請選擇代幣","wallets_collectible_add":"新增","wallets_add_token":"新增代幣","wallets_token_been_added":"已添加代幣","wallets_token_symbol_tips":"代幣符號必須不超過11個字符。","wallets_add_token_contract_address":"代幣合約地址","wallets_add_token_symbol":"代幣符號","wallets_add_token_decimals":"小數點精度","wallets_add_token_cancel":"取消","wallets_add_token_next":"下一步","wallets_empty_tokens_tip":"沒有找到任何資產。請添加代幣。","wallets_empty_collectible_tip":"沒有找到任何收藏品。請添加收藏品。","wallets_address_copied":"已複製地址","wallets_address_copy":"複製 ","wallets_history_types":"類型","wallets_history_value":"價值","wallets_history_time":"時間","wallets_empty_history_tips":"無交易記錄","wallets_loading_token":"正在載入代幣","personas_setup_connect_tips":"請連接到您的 {{type}} 帳戶。","personas_setup_tip":"請創建或恢復身分。","personas_setup_connect":"連接","personas_name_maximum_tips":"名稱最長長度為 {{length}} 字","personas_name_existed":"身份名稱已存在","personas_rename_placeholder":"身分名稱","personas_confirm":"確認","personas_cancel":"取消","personas_export_persona":"導出身分","personas_export_persona_copy":"複製","personas_export_persona_copy_success":"已複製","personas_export_persona_copy_failed":"複製失敗","personas_export_persona_confirm_password_tip":"你還沒設置密碼，匯出私鑰前必須先設置備份密碼。","personas_export_private":"匯出私鑰","personas_export_private_key_tip":"此操作僅用於導出私鑰。我們不導出任何其他數據。如果您需要導出更多數據，請前往設置頁面：","personas_delete_confirm_tips":"請確認你已刪除身份 <i>{{nickname}}</i> 並已輸入密碼","personas_delete_dialog_title":"刪除身份","personas_edit_dialog_title":"編輯身分","personas_edit":"編輯","personas_delete":"刪除","personas_logout":"登出","personas_logout_confirm_password_tip":"您還沒有設置您的密碼。要登出身分，您必須先設置備份密碼。","personas_add_persona":"添加新身分","personas_back_up":"備份","personas_connect_to":"連接 {{internalName}}","personas_disconnect":"斷開連接","personas_disconnect_warning":"您確定要斷開{{network}} 帳戶{{userId}} 嗎？斷開連接後，此帳戶將無法解密並使用Mask Network加密任何訊息。","personas_logout_warning":"身分登出後，您關聯的社交網路帳戶將不能解密過去的加密訊息。如果您需要重新使用您的身分，您可以使用您的身分私鑰進行恢復。","personas_add":"新增","personas_upload_avatar":"上傳頭像","personas_rename":"重命名","personas_invite_post":"@{{identifier}} 您好，請下載Mask，以便我們可以用加密的方式分享貼文 #mask_io install http://mask.io","personas_empty_contact_tips":"您尚未有安裝Mask Network的聯繫人。請邀請您的朋友下載<i>{{name}}</i>。","personas_contacts_name":"名稱","personas_contacts_operation":"操作","personas_contacts_invite":"邀請","personas_post_is_empty":"您還沒有創建任何貼文。","personas_post_create":"創建貼文","settings_general":"一般","settings_backup_recovery":"備份 & 恢復","settings_local_backup":"本地備份","settings_cloud_backup":"雲端備份","settings_appearance_default":"按照系統設定","settings_appearance_light":"淺色","settings_appearance_dark":"深色","settings_backup_preview_account":"帳戶","settings_backup_preview_personas":"身分","settings_backup_preview_associated_account":"關聯帳戶","settings_backup_preview_posts":"加密貼文","settings_backup_preview_contacts":"聯繫人","settings_backup_preview_wallets":"Mask錢包","settings_backup_preview_created_at":"備份時間","settings_language_title":"語言","settings_language_desc":"選擇您要使用的語言","settings_language_auto":"跟隨系統","settings_appearance_title":"外觀","settings_appearance_desc":"選擇你想使用的外觀","settings_data_source_title":"資料源","settings_data_source_desc":"從不同平台獲取趨勢資料","settings_sync_with_mobile_title":"與手機同步","settings_sync_with_mobile_desc":"您可以與您的移動設備同步您的帳戶和資料。打開Mask Network移動應用程式，進入設定頁面並點擊與插件同步。","settings_global_backup_desc":"提供本地和雲端兩種備份選項","settings_global_backup_last":"最近的備份時間為 {{backupAt}}。備份方法為：{{backupMethod}}。","settings_restore_database_title":"復原資料庫","settings_restore_database_desc":"從之前的數據庫備份復原","settings_email_title":"電子郵箱","settings_email_desc":"請綁定郵箱","settings_change_password_title":"備份密碼","settings_change_password_desc":"變更您的備份密碼","settings_change_password_not_set":"你還沒有設定備份密碼","settings_phone_number_title":"電話號碼","settings_phone_number_desc":"請綁定您的電話號碼","settings_password_rule":"備份密碼的長度必須在8到20個字符之間，並且至少包含一個數字，一個大寫字母，一個小寫字母和一個特殊字符。","settings_button_cancel":"取消","settings_button_confirm":"確認","settings_button_sync":"同步","settings_button_backup":"備份","settings_button_recovery":"恢復","settings_button_setup":"設定","settings_button_change":"變更","settings_dialogs_bind_email_or_phone":"請綁定郵箱或電話號碼","settings_dialogs_verify_backup_password":"驗證備份密碼","settings_dialogs_setting_backup_password":"設定備份密碼","settings_dialogs_change_backup_password":"變更備份密碼","settings_dialogs_setting_email":"設定電子郵箱","settings_dialogs_change_email":"變更郵箱","settings_dialogs_setting_phone_number":"設定電話號碼","settings_dialogs_change_phone_number":"變更電話號碼","settings_dialogs_incorrect_code":"驗證碼錯誤","settings_dialogs_incorrect_email":"郵箱地址不正確","settings_dialogs_incorrect_phone":"通訊號碼錯誤","settings_dialogs_incorrect_password":"密碼錯誤","settings_dialogs_inconsistency_password":"密碼不一致","settings_dialogs_current_email_validation":"當前驗證的郵箱地址為","settings_dialogs_change_email_validation":"需要驗證現有郵箱地址以更改","settings_dialogs_current_phone_validation":"當前驗證的電話號碼為","settings_dialogs_change_phone_validation":"想要變更電話號碼，您需要驗證您您當前的電話號碼：","settings_dialogs_backup_to_cloud":"備份到雲端","settings_dialogs_merge_to_local_data":"將雲端備份合併到本地並再次備份到雲端","settings_dialogs_backup_action_desc":"雲端備份已存在，請在備份之前合併雲端備份至本地，或者直接備份。","settings_dialogs_backup_to_cloud_action":"此選項將用本地數據覆蓋現有的雲端備份","settings_dialogs_backup_merged_tip":"您已把雲端備份合併到本地。如果您想要繼續完成備份，請點擊按鍵將您的所有資料更新到雲端。","settings_label_backup_password":"備份密碼","settings_label_new_backup_password":"新備份密碼","settings_label_backup_password_cloud":"雲端文件的備份密碼","settings_label_payment_password":"支付密碼","settings_label_re_enter":"重新輸入","settings_alert_password_set":"備份密碼設定成功","settings_alert_password_updated":"備份密碼已更新","settings_alert_email_set":"電子郵箱設定","settings_alert_email_updated":"郵箱已更新","settings_alert_phone_number_set":"電話號碼設定","settings_alert_phone_number_updated":"電話號碼已更新","settings_alert_backup_fail":"備份失敗","settings_alert_backup_success":"備份數據已成功","settings_alert_validation_code_sent":"驗證碼已傳送","settings_alert_merge_success":"您已經成功您的雲端備份合併到本地資料。","labs_file_service":"文件服務","labs_file_service_desc":"上傳及分享文件以享受永久去中心化存儲服務","labs_markets":"首次代幣發行","labs_markets_desc":"在推特自由發售虛擬資產&直接參與代幣發行","labs_red_packet":"紅包","labs_swap":"兌換","labs_snapshot":"快照","labs_snapshot_desc":"在社交平台上展示和為提案投票","labs_market_trend":"市場走勢","labs_market_trend_desc":"直接在社交平台中展示代幣信息/走勢圖/換匯信息","labs_collectibles":"收藏","labs_gitcoin":"Gitcoin","labs_gitcoin_desc":"在社交媒體上顯示Gitcoin項目的具體資訊，並且直接對項目進行捐贈。","labs_valuables_desc":"從原創者手中購買推特並交易","labs_dhedge":"dHEDGE","labs_dhedge_desc":"在eth/Matic鏈上的去中心化對衝基金","labs_mask_box_desc":"使用專業的多鏈去中心平台以發售NFT盲盒","labs_loot_man":"Loot小人 by MintTeam","labs_loot_man_desc":"用全新方式在社交平台上連結展示你的NFT收藏並探索NFT的無限可能","labs_good_ghosting":"GoodGhosting","labs_good_ghosting_desc":"在Twitter上養成每週儲蓄習慣","labs_pool_together":"PoolTogether","labs_pool_together_desc":"在Twitter上參與無損彩票遊戲","labs_settings_market_trend_source":"默认信息源","labs_settings_swap":"兌換設定","labs_settings_swap_network":"{{network}} 鏈上默認交易所","labs_pets":"Loot小人 by MintTeam","labs_setup_tutorial":"設置教程","labs_do_not_show_again":"不再顯示","labs_cryptoartai":"CRYPTOART.AI","dashboard_mobile_test":"參與手機版本測試","dashboard_source_code":"源代碼","privacy_policy":"隱私政策","version_of_stable":"版本號 {{version}}","version_of_unstable":"版本號 {{version}}-{{build}}-{{hash}}","register_restore_backups":"恢復備份","register_restore_backups_cancel":"取消","register_restore_backups_confirm":"恢復","register_restore_backups_hint":"請點擊或拖拽文件到此處","register_restore_backups_file":"檔案","register_restore_backups_text":"文本內容","register_restore_backups_tabs":"還原備份","create_wallet_mnemonic_tip":"請不要忘記保存助記詞，您將需要這個才能訪問您的錢包。","create_wallet_password_uppercase_tip":"必須含有大寫字母","create_wallet_password_lowercase_tip":"必須含有小寫字母","create_wallet_password_number_tip":"必須包含數字","create_wallet_password_special_tip":"必須含有特殊符號","create_wallet_password_satisfied_requirement":"該密碼不滿足設置條件","create_wallet_password_match_tip":"輸入的密碼不一致","create_wallet_password_length_error":"密碼長度不符合規定","create_wallet_name_placeholder":"輸入1-12個字元","create_wallet_form_title":"創建錢包","create_wallet_wallet_name":"錢包名稱","create_wallet_payment_password":"支付密碼","create_wallet_re_enter_payment_password":"再次輸入支付密碼","create_wallet_payment_password_tip":"支付密碼必須是數字、大小寫字母和特殊字母中至少兩種類別的組合，長度為8-20個字符","create_wallet_your_wallet_address":"錢包地址","create_wallet_done":"完成","create_wallet_verify_words":"驗證助記詞","create_wallet_mnemonic_word_not_match":"助記詞錯誤"}');

/***/ })

}]);