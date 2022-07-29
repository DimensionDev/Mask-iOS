"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2908],{

/***/ 76628:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const position_1 = __webpack_require__(29735);
function str2bits(text, copies) {
    const chars = Array.from(text);
    const bits = [];
    const pushByte = (byte, n) => {
        for (let i = 0; i < 8; i += 1) {
            let j = 0;
            while (j++ < n) {
                bits.push(byte[i]);
            }
        }
    };
    for (let i = 0; i < chars.length; i += 1) {
        const codes = Array.from(encodeURI(chars[i]));
        for (let j = 0; j < codes.length; j += 1) {
            const byte = [];
            let reminder = 0;
            let code = codes[j].charCodeAt(0);
            do {
                reminder = (code % 2);
                byte.push(reminder);
                code = code - Math.floor(code / 2) - reminder;
            } while (code > 1);
            byte.push(code);
            while (byte.length < 8) {
                byte.push(0);
            }
            pushByte(byte.reverse(), copies);
        }
    }
    return bits;
}
exports.str2bits = str2bits;
function bits2str(bits, copies) {
    let k = 128;
    let temp = 0;
    const chars = [];
    const candidates = [];
    const elect = () => candidates.filter(c => c === 1).length >= copies / 2 ? 1 : 0;
    for (let i = 0; i < bits.length; i += 1) {
        candidates.push(bits[i]);
        if (candidates.length === copies) {
            temp += elect() * k;
            k /= 2;
            candidates.length = 0;
            // end of message
            if (temp === 255) {
                break;
            }
            if (k < 1) {
                chars.push(String.fromCharCode(temp));
                temp = 0;
                k = 128;
            }
        }
    }
    try {
        return decodeURI(chars.join(''));
    }
    catch (e) {
        return '';
    }
}
exports.bits2str = bits2str;
function mergeBits(dest, ...src) {
    let k = 0;
    for (let i = 0; i < src.length; i += 1) {
        const bits = src[i];
        for (let j = 0; j < bits.length && k < dest.length; j += 1, k += 1) {
            dest[k] = bits[j];
        }
    }
    return dest;
}
exports.mergeBits = mergeBits;
function createBits(size) {
    const bits = new Array(size).fill(0);
    for (let i = 0; i < size; i += 1) {
        bits[i] = Math.floor(Math.random() * 2);
    }
    return bits;
}
exports.createBits = createBits;
function getBit(block, acc, loc, options) {
    const pos = position_1.getPos(acc, loc, options);
    const { tolerance } = options;
    return Math.abs(Math.round(block[pos] / tolerance) % 2);
}
exports.getBit = getBit;
function setBit(block, bits, acc, loc, options) {
    const pos = position_1.getPos(acc, loc, options);
    const { tolerance } = options;
    const v = Math.floor(block[pos] / tolerance);
    if (bits[loc.b]) {
        block[pos] = v % 2 === 1 ? v * tolerance : (v + 1) * tolerance;
    }
    else {
        block[pos] = v % 2 === 1 ? (v - 1) * tolerance : v * tolerance;
    }
}
exports.setBit = setBit;
//# sourceMappingURL=bit.js.map

/***/ }),

/***/ 26964:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helper_1 = __webpack_require__(4023);
function createCanvas(width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
exports.createCanvas = createCanvas;
function buf2Img(imgBuf) {
    const url = URL.createObjectURL(new Blob([imgBuf], { type: helper_1.imgType(new Uint8Array(imgBuf)) }));
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const { width, height } = image;
            const ctx = createCanvas(width, height).getContext('2d');
            ctx.drawImage(image, 0, 0, width, height);
            resolve(ctx.getImageData(0, 0, width, height));
        };
        image.onerror = err => reject(err);
        image.src = url;
    });
}
exports.buf2Img = buf2Img;
function img2Buf(imgData, width = imgData.width, height = imgData.height) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.putImageData(imgData, 0, 0, 0, 0, width, height);
    return new Promise((resolve, reject) => canvas.toBlob(blob => {
        if (blob) {
            const fileReader = new FileReader();
            fileReader.onload = ({ target }) => {
                if (target) {
                    resolve(target.result);
                }
                else {
                    reject(new Error('fail to generate array buffer'));
                }
            };
            fileReader.onerror = err => reject(err);
            fileReader.readAsArrayBuffer(blob);
        }
        else {
            reject(new Error('fail to generate array buffer'));
        }
    }, 'image/png'));
}
exports.img2Buf = img2Buf;
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 39050:
/***/ ((__unused_webpack_module, exports) => {


// MORE:
// https://en.wikipedia.org/wiki/JPEG
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ONE_SQUARE_ROOT_OF_TWO = 1 / Math.sqrt(2);
// type-II DCT
function dct(nums, size = 8) {
    const coefficients = [];
    for (let v = 0; v < size; v += 1) {
        for (let u = 0; u < size; u += 1) {
            const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
            const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
            let sum = 0;
            for (let y = 0; y < size; y += 1) {
                for (let x = 0; x < size; x += 1) {
                    sum +=
                        nums[y * size + x] *
                            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
                            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
                }
            }
            coefficients.push((sum * au * av) / 4);
        }
    }
    // in-place update
    for (let i = 0; i < coefficients.length; i += 1) {
        nums[i] = coefficients[i];
    }
}
exports.dct = dct;
// type-III DCT
function idct(coefficients, size = 8) {
    const nums = [];
    for (let y = 0; y < size; y += 1) {
        for (let x = 0; x < size; x += 1) {
            let sum = 0;
            for (let v = 0; v < size; v += 1) {
                for (let u = 0; u < size; u += 1) {
                    const au = u === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
                    const av = v === 0 ? ONE_SQUARE_ROOT_OF_TWO : 1;
                    sum +=
                        au *
                            av *
                            coefficients[v * size + u] *
                            Math.cos(((2 * x + 1) * u * Math.PI) / 16) *
                            Math.cos(((2 * y + 1) * v * Math.PI) / 16);
                }
            }
            nums.push(sum / 4);
        }
    }
    // in-place update
    for (let i = 0; i < nums.length; i += 1) {
        coefficients[i] = nums[i];
    }
}
exports.idct = idct;
exports.QUANTIZATION_MATRIX = [
    16,
    11,
    10,
    16,
    24,
    40,
    51,
    61,
    12,
    12,
    14,
    19,
    26,
    58,
    60,
    55,
    14,
    13,
    16,
    24,
    40,
    57,
    69,
    56,
    14,
    17,
    22,
    29,
    51,
    87,
    80,
    62,
    18,
    22,
    37,
    56,
    68,
    109,
    103,
    77,
    24,
    35,
    55,
    64,
    81,
    104,
    113,
    92,
    49,
    64,
    78,
    87,
    103,
    121,
    120,
    101,
    72,
    92,
    95,
    98,
    112,
    100,
    103,
    99,
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 50710:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const stego_1 = __webpack_require__(94712);
const dom_1 = __webpack_require__(26964);
const image_1 = __webpack_require__(86509);
function encode(imgBuf, maskBuf, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const [imgData, maskData] = yield Promise.all([
            dom_1.buf2Img(imgBuf),
            dom_1.buf2Img(maskBuf),
        ]);
        const { cropEdgePixels } = options;
        const { width, height } = imgData;
        const [cropWidth, cropHeight] = image_1.cropImg(imgData, options);
        return dom_1.img2Buf(yield stego_1.encodeImg(imgData, maskData, options), cropEdgePixels ? cropWidth : width, cropEdgePixels ? cropHeight : height);
    });
}
exports.encode = encode;
function decode(imgBuf, maskBuf, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const [imgData, maskData] = yield Promise.all([
            dom_1.buf2Img(imgBuf),
            dom_1.buf2Img(maskBuf),
        ]);
        return stego_1.decodeImg(imgData, maskData, options);
    });
}
exports.decode = decode;
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ 59686:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/// fft.js
/**
 * Fast Fourier Transform module
 * 1D-FFT/IFFT, 2D-FFT/IFFT (radix-2)
 */
var FFT = {};
var version = {
    release: '0.3.0',
    date: '2013-03',
};
FFT.toString = function () {
    return 'version ' + version.release + ', released ' + version.date;
};
// core operations
var _n = 0, // order
_bitrev = null, // bit reversal table
_cstb = null; // sin/cos table
var core = {
    init: function (n) {
        if (n !== 0 && (n & (n - 1)) === 0) {
            _n = n;
            core._initArray();
            core._makeBitReversalTable();
            core._makeCosSinTable();
        }
        else {
            throw new Error('init: radix-2 required');
        }
    },
    // 1D-FFT
    fft1d: function (re, im) {
        core.fft(re, im, 1);
    },
    // 1D-IFFT
    ifft1d: function (re, im) {
        var n = 1 / _n;
        core.fft(re, im, -1);
        for (var i = 0; i < _n; i++) {
            re[i] *= n;
            im[i] *= n;
        }
    },
    // 2D-FFT
    fft2d: function (re, im) {
        var tre = [], tim = [], i = 0;
        // x-axis
        for (var y = 0; y < _n; y++) {
            i = y * _n;
            for (var x1 = 0; x1 < _n; x1++) {
                tre[x1] = re[x1 + i];
                tim[x1] = im[x1 + i];
            }
            core.fft1d(tre, tim);
            for (var x2 = 0; x2 < _n; x2++) {
                re[x2 + i] = tre[x2];
                im[x2 + i] = tim[x2];
            }
        }
        // y-axis
        for (var x = 0; x < _n; x++) {
            for (var y1 = 0; y1 < _n; y1++) {
                i = x + y1 * _n;
                tre[y1] = re[i];
                tim[y1] = im[i];
            }
            core.fft1d(tre, tim);
            for (var y2 = 0; y2 < _n; y2++) {
                i = x + y2 * _n;
                re[i] = tre[y2];
                im[i] = tim[y2];
            }
        }
    },
    // 2D-IFFT
    ifft2d: function (re, im) {
        var tre = [], tim = [], i = 0;
        // x-axis
        for (var y = 0; y < _n; y++) {
            i = y * _n;
            for (var x1 = 0; x1 < _n; x1++) {
                tre[x1] = re[x1 + i];
                tim[x1] = im[x1 + i];
            }
            core.ifft1d(tre, tim);
            for (var x2 = 0; x2 < _n; x2++) {
                re[x2 + i] = tre[x2];
                im[x2 + i] = tim[x2];
            }
        }
        // y-axis
        for (var x = 0; x < _n; x++) {
            for (var y1 = 0; y1 < _n; y1++) {
                i = x + y1 * _n;
                tre[y1] = re[i];
                tim[y1] = im[i];
            }
            core.ifft1d(tre, tim);
            for (var y2 = 0; y2 < _n; y2++) {
                i = x + y2 * _n;
                re[i] = tre[y2];
                im[i] = tim[y2];
            }
        }
    },
    // core operation of FFT
    fft: function (re, im, inv) {
        var d, h, ik, m, tmp, wr, wi, xr, xi, n4 = _n >> 2;
        // bit reversal
        for (var l = 0; l < _n; l++) {
            m = _bitrev[l];
            if (l < m) {
                tmp = re[l];
                re[l] = re[m];
                re[m] = tmp;
                tmp = im[l];
                im[l] = im[m];
                im[m] = tmp;
            }
        }
        // butterfly operation
        for (var k = 1; k < _n; k <<= 1) {
            h = 0;
            d = _n / (k << 1);
            for (var j = 0; j < k; j++) {
                wr = _cstb[h + n4];
                wi = inv * _cstb[h];
                for (var i = j; i < _n; i += k << 1) {
                    ik = i + k;
                    xr = wr * re[ik] + wi * im[ik];
                    xi = wr * im[ik] - wi * re[ik];
                    re[ik] = re[i] - xr;
                    re[i] += xr;
                    im[ik] = im[i] - xi;
                    im[i] += xi;
                }
                h += d;
            }
        }
    },
    // initialize the array (supports TypedArray)
    _initArray: function () {
        if (typeof Uint8Array !== 'undefined') {
            _bitrev = new Uint8Array(_n);
        }
        else {
            _bitrev = [];
        }
        if (typeof Float64Array !== 'undefined') {
            _cstb = new Float64Array(_n * 1.25);
        }
        else {
            _cstb = [];
        }
    },
    // zero padding
    _paddingZero: function () {
        // TODO
    },
    // makes bit reversal table
    _makeBitReversalTable: function () {
        var i = 0, j = 0, k = 0;
        _bitrev[0] = 0;
        while (++i < _n) {
            k = _n >> 1;
            while (k <= j) {
                j -= k;
                k >>= 1;
            }
            j += k;
            _bitrev[i] = j;
        }
    },
    // makes trigonometiric function table
    _makeCosSinTable: function () {
        var n2 = _n >> 1, n4 = _n >> 2, n8 = _n >> 3, n2p4 = n2 + n4, t = Math.sin(Math.PI / _n), dc = 2 * t * t, ds = Math.sqrt(dc * (2 - dc)), c = (_cstb[n4] = 1), s = (_cstb[0] = 0);
        t = 2 * dc;
        for (var i = 1; i < n8; i++) {
            c -= dc;
            dc += t * c;
            s += ds;
            ds -= t * s;
            _cstb[i] = s;
            _cstb[n4 - i] = c;
        }
        if (n8 !== 0) {
            _cstb[n8] = Math.sqrt(0.5);
        }
        for (var j = 0; j < n4; j++) {
            _cstb[n2 - j] = _cstb[j];
        }
        for (var k = 0; k < n2p4; k++) {
            _cstb[k + n2] = -_cstb[k];
        }
    },
};
// aliases (public APIs)
var apis = ['init', 'fft1d', 'ifft1d', 'fft2d', 'ifft2d'];
for (var i = 0; i < apis.length; i++) {
    FFT[apis[i]] = core[apis[i]];
}
FFT.fft = core.fft1d;
FFT.ifft = core.ifft1d;
exports["default"] = FFT;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helper_1 = __webpack_require__(4023);
// more grayscale algorithm:
// http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/
var GrayscaleAlgorithm;
(function (GrayscaleAlgorithm) {
    GrayscaleAlgorithm["NONE"] = "NONE";
    GrayscaleAlgorithm["AVERAGE"] = "AVG";
    GrayscaleAlgorithm["LUMINANCE"] = "LUMA";
    GrayscaleAlgorithm["LUMINANCE_II"] = "LUMA_II";
    GrayscaleAlgorithm["DESATURATION"] = "DESATURATION";
    GrayscaleAlgorithm["MAX_DECOMPOSITION"] = "MAX_DE";
    GrayscaleAlgorithm["MIN_DECOMPOSITION"] = "MIN_DE";
    GrayscaleAlgorithm["MID_DECOMPOSITION"] = "MID_DE";
    GrayscaleAlgorithm["SIGNLE_R"] = "R";
    GrayscaleAlgorithm["SIGNLE_G"] = "G";
    GrayscaleAlgorithm["SIGNLE_B"] = "B";
})(GrayscaleAlgorithm = exports.GrayscaleAlgorithm || (exports.GrayscaleAlgorithm = {}));
function grayscale(r, g, b, algorithm) {
    switch (algorithm) {
        case GrayscaleAlgorithm.AVERAGE:
            return (r + g + b) / 3;
        case GrayscaleAlgorithm.LUMINANCE:
            return r * 0.3 + g * 0.59 + b * 0.11;
        case GrayscaleAlgorithm.LUMINANCE_II:
            return r * 0.2126 + g * 0.7152 + b * 0.0722;
        case GrayscaleAlgorithm.DESATURATION:
            return (Math.max(r, g, b) + Math.min(r, g, b)) / 2;
        case GrayscaleAlgorithm.MAX_DECOMPOSITION:
            return Math.max(r, g, b);
        case GrayscaleAlgorithm.MIN_DECOMPOSITION:
            return Math.min(r, g, b);
        case GrayscaleAlgorithm.MID_DECOMPOSITION:
            return [r, g, b].sort()[1];
        case GrayscaleAlgorithm.SIGNLE_R:
            return r;
        case GrayscaleAlgorithm.SIGNLE_G:
            return g;
        case GrayscaleAlgorithm.SIGNLE_B:
            return b;
        default:
            return 0;
    }
}
exports.grayscale = grayscale;
function shades(r, g, b, size) {
    const factor = 255 / (helper_1.clamp(size, 2, 256) - 1);
    return Math.floor((r + g + b) / 3 / factor + 0.5) * factor;
}
exports.shades = shades;
function narrow(gray, size) {
    return helper_1.clamp(Math.round(gray), size, 255 - size);
}
exports.narrow = narrow;
//# sourceMappingURL=grayscale.js.map

/***/ }),

/***/ 4023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
function rs2Buf(rs) {
    return new Promise((resolve, reject) => {
        const bufs = [];
        rs.on('data', c => bufs.push(c));
        rs.on('end', () => resolve(Buffer.concat(bufs)));
        rs.on('error', err => reject(err));
    });
}
exports.rs2Buf = rs2Buf;
function rand(min, max) {
    return Math.round(Math.random() * max + min);
}
exports.rand = rand;
function clamp(v, min, max) {
    if (v < min) {
        console.warn(`clamp min: ${v}`);
        return min;
    }
    if (v > max) {
        console.warn(`clamp max: ${v}`);
        return max;
    }
    return v;
}
exports.clamp = clamp;
function hash(input) {
    let code = 0;
    if (input.length === 0)
        return code;
    for (let i = 0; i < input.length; i += 1) {
        const char = input.charCodeAt(i);
        code = (code << 5) - code + char;
        code = code & code; // Convert to 32bit integer
    }
    return code;
}
exports.hash = hash;
function hashCode(input, mod, inArray) {
    let prob = 1;
    let code = hash(input);
    let index = Math.abs(code) % mod;
    while (inArray[index]) {
        index = (index + prob * prob) % mod;
        prob = prob > mod / 2 ? 1 : prob + 1;
    }
    inArray[index] = 1;
    return [index, String(code)];
}
exports.hashCode = hashCode;
function shuffle(nums, seed, unshuffle = false) {
    const swap = (a, b) => ([nums[a], nums[b]] = [nums[b], nums[a]]);
    for (let i = unshuffle ? nums.length - 1 : 0; (unshuffle && i >= 0) || (!unshuffle && i < nums.length); i += unshuffle ? -1 : 1) {
        swap(seed[i % seed.length] % nums.length, i);
    }
}
exports.shuffle = shuffle;
function unshuffle(nums, seed) {
    return shuffle(nums, seed, true);
}
exports.unshuffle = unshuffle;
function rgb2yuv(r, g, b) {
    return [
        (77 / 256) * r + (150 / 256) * g + (29 / 256) * b,
        -(44 / 256) * r - (87 / 256) * g + (131 / 256) * b + 128,
        (131 / 256) * r - (110 / 256) * g - (21 / 256) * b + 128,
    ];
}
exports.rgb2yuv = rgb2yuv;
function yuv2rgb(y, cb, cr) {
    return [
        y + 1.4075 * (cr - 128),
        y - 0.3455 * (cb - 128) - 0.7169 * (cr - 128),
        y + 1.779 * (cb - 128),
    ];
}
exports.yuv2rgb = yuv2rgb;
function filterIndices(size, predicator) {
    const indices = [];
    for (let i = 0; i < size * size; i += 1) {
        if (predicator(i)) {
            indices.push(i);
        }
    }
    return indices;
}
exports.filterIndices = filterIndices;
function squareTopLeftCircleExclude(size, radius) {
    return filterIndices(size, i => {
        const x = Math.floor(i / size);
        const y = i % size;
        return Math.sqrt(y * y + x * x) > radius;
    });
}
exports.squareTopLeftCircleExclude = squareTopLeftCircleExclude;
function squareBottomRightCircleExclude(size, radius) {
    return filterIndices(size, i => {
        const x = Math.floor(i / size);
        const y = i % size;
        return (Math.sqrt(Math.pow(size - y - 1, 2) + Math.pow(size - x - 1, 2)) > radius);
    });
}
exports.squareBottomRightCircleExclude = squareBottomRightCircleExclude;
function squareCircleIntersect(size, radius) {
    const mid = (size + 1) / 2 - 1;
    return filterIndices(size, i => {
        const x = Math.floor(i / size);
        const y = i % size;
        return Math.sqrt(Math.pow(mid - x, 2) + Math.pow(mid - y, 2)) <= radius;
    });
}
exports.squareCircleIntersect = squareCircleIntersect;
function isJPEG(buf) {
    if (!buf || buf.length < 3) {
        return false;
    }
    return buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff;
}
exports.isJPEG = isJPEG;
function isPNG(buf) {
    if (!buf || buf.length < 8) {
        return false;
    }
    return (buf[0] === 0x89 &&
        buf[1] === 0x50 &&
        buf[2] === 0x4e &&
        buf[3] === 0x47 &&
        buf[4] === 0x0d &&
        buf[5] === 0x0a &&
        buf[6] === 0x1a &&
        buf[7] === 0x0a);
}
exports.isPNG = isPNG;
function imgType(buf) {
    if (isJPEG(buf)) {
        return 'image/jpeg';
    }
    if (isPNG(buf)) {
        return 'image/png';
    }
    return '';
}
exports.imgType = imgType;
//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 86509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helper_1 = __webpack_require__(4023);
const locator_1 = __webpack_require__(19983);
function cropImg({ width, height }, { size }) {
    return [
        Math.floor(width / size) * size,
        Math.floor(height / size) * size,
    ];
}
exports.cropImg = cropImg;
function* divideImg({ width, height, data }, { size }) {
    for (let h = 0; h < height; h += size) {
        for (let w = 0; w < width; w += size) {
            if (h + size <= height && w + size <= width) {
                for (let c = 0; c < 3; c += 1) {
                    const block = [];
                    for (let h1 = 0; h1 < size; h1 += 1) {
                        for (let w1 = 0; w1 < size; w1 += 1) {
                            block[h1 * size + w1] = data[((h + h1) * width + w + w1) * 4 + c];
                        }
                    }
                    yield block;
                }
            }
        }
    }
}
exports.divideImg = divideImg;
function visitImgByPixel(imgData, options, visitor) {
    const { width, height, data } = imgData;
    for (let i = 0; i < width * height; i += 1) {
        const p = i * 4;
        visitor([data[p], data[p + 1], data[p + 2], data[p + 3]], p, imgData);
    }
}
exports.visitImgByPixel = visitImgByPixel;
function visitImgByBlock(imgData, options, visitor) {
    const { width: w, height: h } = imgData;
    let c = 0;
    let p = 0;
    let b = 0;
    for (const block of divideImg(imgData, options)) {
        const bitConsumed = visitor(block, { c, p, b, w, h }, imgData);
        c += 1;
        if (bitConsumed) {
            b += 1;
        }
        if (c === 3) {
            p += 1;
            c = 0;
        }
    }
}
exports.visitImgByBlock = visitImgByBlock;
function updateImgByPixel(imgData, options, updater) {
    visitImgByPixel(imgData, options, (pixel, loc) => updateImgByPixelAt(imgData, options, updater(pixel, loc, imgData), loc));
}
exports.updateImgByPixel = updateImgByPixel;
function updateImgByBlock(imgData, options, updater) {
    visitImgByBlock(imgData, options, (block, loc) => {
        const bitConsumed = updater(block, loc, imgData);
        if (bitConsumed) {
            updateImgByBlockAt(imgData, options, block, loc);
        }
        return bitConsumed;
    });
}
exports.updateImgByBlock = updateImgByBlock;
function updateImgByPixelAt(imgData, options, pixel, loc) {
    const { data } = imgData;
    [data[loc], data[loc + 1], data[loc + 2], data[loc + 3]] = pixel;
}
exports.updateImgByPixelAt = updateImgByPixelAt;
function updateImgByBlockAt(imgData, options, block, loc) {
    const { data } = imgData;
    const { size } = options;
    const [x1, y1] = locator_1.loc2coord(loc, options);
    for (let i = 0; i < size * size; i += 1) {
        block[i] = Math.round(block[i]);
        data[locator_1.loc2idx(loc, options, x1, y1, i)] = helper_1.clamp(block[i], 0, 255);
    }
}
exports.updateImgByBlockAt = updateImgByBlockAt;
//# sourceMappingURL=image.js.map

/***/ }),

/***/ 19983:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Locator to coord of top left pixel inside block
 * @param locator
 * @param options
 */
function loc2coord({ p, w }, { size }) {
    return [
        (p % Math.floor(w / size)) * size,
        Math.floor(p / Math.floor(w / size)) * size,
    ];
}
exports.loc2coord = loc2coord;
/**
 * Locator to pixel index
 * @param locator
 * @param options
 * @param x1 x coord of top left pixel inside block
 * @param y1 y coord of top left pixel inside block
 * @param index the index of pixel inside block
 */
function loc2idx({ w, c }, { size }, x1, y1, index) {
    const x2 = index % size;
    const y2 = Math.floor(index / size);
    return ((y1 + y2) * w + x1 + x2) * 4 + c;
}
exports.loc2idx = loc2idx;
//# sourceMappingURL=locator.js.map

/***/ }),

/***/ 15901:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const locator_1 = __webpack_require__(19983);
function isBlockVisibleAt({ data }, loc, options) {
    const { size } = options;
    const _loc = Object.assign(Object.assign({}, loc), { c: 0 });
    const [x1, y1] = locator_1.loc2coord(_loc, options);
    for (let i = 0; i < size * size; i += 1) {
        const value = data[locator_1.loc2idx(_loc, options, x1, y1, i)];
        if (typeof value !== 'undefined' && value < 127) {
            return false;
        }
    }
    return true;
}
exports.isBlockVisibleAt = isBlockVisibleAt;
function isPixelVisibleAt({ data }, loc, options) {
    return typeof data[loc] === 'undefined' || data[loc] > 127;
}
exports.isPixelVisibleAt = isPixelVisibleAt;
//# sourceMappingURL=mask.js.map

/***/ }),

/***/ 29735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const transform_1 = __webpack_require__(84140);
const helper_1 = __webpack_require__(4023);
function createAcc({ size, transformAlgorithm }) {
    switch (transformAlgorithm) {
        case transform_1.TransformAlgorithm.FFT1D:
            return {
                prevPos: -1,
                prevCode: '',
                indices: helper_1.squareCircleIntersect(size, 3),
            };
        default:
            return {
                prevPos: -1,
                prevCode: '',
                indices: [],
            };
    }
}
exports.createAcc = createAcc;
function getPosFromAcc(acc, { c }, { pass }) {
    const { prevCode, prevPos, indices } = acc;
    if (c !== 0) {
        return prevPos;
    }
    const [index, code] = helper_1.hashCode(`${pass}_${prevCode}`, indices.length, []);
    acc.prevCode = code;
    acc.prevPos = indices[index];
    return indices[index];
}
exports.getPosFromAcc = getPosFromAcc;
function getPos(acc, loc, options) {
    const { pass, size, transformAlgorithm } = options;
    switch (transformAlgorithm) {
        case transform_1.TransformAlgorithm.FFT1D:
            return pass ? getPosFromAcc(acc, loc, options) : (size * size + size) / 2;
        case transform_1.TransformAlgorithm.FFT2D:
            return 0;
        case transform_1.TransformAlgorithm.DCT:
            return 0;
        default:
            throw new Error(`unknown algortihm: ${transformAlgorithm}`);
    }
}
exports.getPos = getPos;
//# sourceMappingURL=position.js.map

/***/ }),

/***/ 94712:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const grayscale_1 = __webpack_require__(85909);
const transform_1 = __webpack_require__(84140);
const image_1 = __webpack_require__(86509);
const bit_1 = __webpack_require__(76628);
const position_1 = __webpack_require__(29735);
const mask_1 = __webpack_require__(15901);
const helper_1 = __webpack_require__(4023);
const locator_1 = __webpack_require__(19983);
function encodeImg(imgData, maskData, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { text, size, narrow: narrowSize, copies, grayscaleAlgorithm, transformAlgorithm, exhaustPixels, } = options;
        const [width, height] = image_1.cropImg(imgData, options);
        const sizeOfBlocks = width * height * 3;
        const textBits = bit_1.str2bits(text, copies);
        const bits = bit_1.mergeBits(bit_1.createBits(exhaustPixels ? sizeOfBlocks : textBits.length + 8 * copies), textBits, bit_1.createBits(8 * copies).fill(1) // the end of message
        );
        if (textBits.length + 8 * copies > sizeOfBlocks) {
            /* stdin */ null.write('bits overflow! try to shrink text or reduce copies.\n');
        }
        if (grayscaleAlgorithm !== grayscale_1.GrayscaleAlgorithm.NONE || narrowSize > 0) {
            image_1.updateImgByPixel(imgData, options, ([r, g, b, a], loc) => {
                if (!mask_1.isPixelVisibleAt(maskData, loc, options)) {
                    return [r, g, b, a];
                }
                // decolor
                if (grayscaleAlgorithm !== grayscale_1.GrayscaleAlgorithm.NONE) {
                    const y = grayscale_1.grayscale(r, g, b, grayscaleAlgorithm);
                    r = y;
                    g = y;
                    b = y;
                }
                // narrow color value
                if (narrowSize > 0) {
                    r = grayscale_1.narrow(r, narrowSize);
                    g = grayscale_1.narrow(g, narrowSize);
                    b = grayscale_1.narrow(b, narrowSize);
                }
                return [r, g, b, a];
            });
        }
        const acc = position_1.createAcc(options);
        const im = new Array(size * size);
        image_1.updateImgByBlock(imgData, options, (block, loc) => {
            if (!exhaustPixels && loc.b >= bits.length) {
                return false;
            }
            if (!mask_1.isBlockVisibleAt(maskData, loc, options)) {
                if (options.fakeMaskPixels && loc.c === 0) {
                    const [x, y] = locator_1.loc2coord(loc, options);
                    const g = helper_1.rand(10, 127);
                    image_1.updateImgByPixelAt(imgData, options, [g, g, g, 255], locator_1.loc2idx(loc, options, x, y, helper_1.rand(0, 64)));
                }
                return false;
            }
            transform_1.transform(block, im.fill(0), transformAlgorithm, options);
            bit_1.setBit(block, bits, acc, loc, options);
            transform_1.inverseTransform(block, im, transformAlgorithm, options);
            return true;
        });
        return imgData;
    });
}
exports.encodeImg = encodeImg;
function decodeImg(imgData, maskData, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { size, copies, transformAlgorithm } = options;
        const bits = [];
        const acc = position_1.createAcc(options);
        const im = new Array(size * size);
        image_1.visitImgByBlock(imgData, options, (block, loc) => {
            if (!mask_1.isBlockVisibleAt(maskData, loc, options)) {
                return false;
            }
            transform_1.transform(block, im.fill(0), transformAlgorithm, options);
            bits.push(bit_1.getBit(block, acc, loc, options));
            return true;
        });
        return bit_1.bits2str(bits, copies);
    });
}
exports.decodeImg = decodeImg;
//# sourceMappingURL=stego.js.map

/***/ }),

/***/ 84140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_js_1 = __importDefault(__webpack_require__(59686));
const DCT = __importStar(__webpack_require__(39050));
var TransformAlgorithm;
(function (TransformAlgorithm) {
    TransformAlgorithm["FFT1D"] = "FFT1D";
    TransformAlgorithm["FFT2D"] = "FFT2D";
    TransformAlgorithm["DCT"] = "DCT";
})(TransformAlgorithm = exports.TransformAlgorithm || (exports.TransformAlgorithm = {}));
function transform(re, im, algorithm, { size }) {
    switch (algorithm) {
        case TransformAlgorithm.FFT1D:
            index_js_1.default.init(size);
            index_js_1.default.fft1d(re, im);
            break;
        case TransformAlgorithm.FFT2D:
            index_js_1.default.init(size);
            index_js_1.default.fft2d(re, im);
            break;
        case TransformAlgorithm.DCT:
            DCT.dct(re, size);
            break;
        default:
            throw new Error(`unknown algorithm: ${algorithm}`);
    }
}
exports.transform = transform;
function inverseTransform(re, im, algorithm, { size }) {
    switch (algorithm) {
        case TransformAlgorithm.FFT1D:
            index_js_1.default.init(size);
            index_js_1.default.ifft1d(re, im);
            break;
        case TransformAlgorithm.FFT2D:
            index_js_1.default.init(size);
            index_js_1.default.ifft2d(re, im);
            break;
        case TransformAlgorithm.DCT:
            DCT.idct(re, size);
            break;
        default:
            throw new Error(`unknown algorithm: ${algorithm}`);
    }
}
exports.inverseTransform = inverseTransform;
//# sourceMappingURL=transform.js.map

/***/ })

}]);