"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3758],{

/***/ 3845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ parseBytes32String),
/* harmony export */   "s": () => (/* binding */ formatBytes32String)
/* harmony export */ });
/* harmony import */ var _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99376);
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75276);




function formatBytes32String(text) {
    // Get the bytes
    const bytes = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* .toUtf8Bytes */ .Y0)(text);
    // Check we have room for null-termination
    if (bytes.length > 31) {
        throw new Error("bytes32 string must be less than 32 bytes");
    }
    // Zero-pad (implicitly null-terminates)
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .hexlify */ .Dv)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .concat */ .zo)([bytes, _ethersproject_constants__WEBPACK_IMPORTED_MODULE_2__/* .HashZero */ .R]).slice(0, 32));
}
function parseBytes32String(bytes) {
    const data = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .arrayify */ .lE)(bytes);
    // Must be 32 bytes with a null-termination
    if (data.length !== 32) {
        throw new Error("invalid bytes32 - not 32 bytes long");
    }
    if (data[31] !== 0) {
        throw new Error("invalid bytes32 string - no null terminator");
    }
    // Find the null termination
    let length = 31;
    while (data[length - 1] === 0) {
        length--;
    }
    // Determine the string value
    return (0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* .toUtf8String */ .ZN)(data.slice(0, length));
}
//# sourceMappingURL=bytes32.js.map

/***/ }),

/***/ 37604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ll": () => (/* binding */ nameprep)
/* harmony export */ });
/* unused harmony exports _nameprepTableA1, _nameprepTableB2, _nameprepTableC */
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75276);


function bytes2(data) {
    if ((data.length % 4) !== 0) {
        throw new Error("bad data");
    }
    let result = [];
    for (let i = 0; i < data.length; i += 4) {
        result.push(parseInt(data.substring(i, i + 4), 16));
    }
    return result;
}
function createTable(data, func) {
    if (!func) {
        func = function (value) { return [parseInt(value, 16)]; };
    }
    let lo = 0;
    let result = {};
    data.split(",").forEach((pair) => {
        let comps = pair.split(":");
        lo += parseInt(comps[0], 16);
        result[lo] = func(comps[1]);
    });
    return result;
}
function createRangeTable(data) {
    let hi = 0;
    return data.split(",").map((v) => {
        let comps = v.split("-");
        if (comps.length === 1) {
            comps[1] = "0";
        }
        else if (comps[1] === "") {
            comps[1] = "1";
        }
        let lo = hi + parseInt(comps[0], 16);
        hi = parseInt(comps[1], 16);
        return { l: lo, h: hi };
    });
}
function matchMap(value, ranges) {
    let lo = 0;
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        lo += range.l;
        if (value >= lo && value <= lo + range.h && ((value - lo) % (range.d || 1)) === 0) {
            if (range.e && range.e.indexOf(value - lo) !== -1) {
                continue;
            }
            return range;
        }
    }
    return null;
}
const Table_A_1_ranges = createRangeTable("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d");
// @TODO: Make this relative...
const Table_B_1_flags = "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((v) => parseInt(v, 16));
const Table_B_2_ranges = [
    { h: 25, s: 32, l: 65 },
    { h: 30, s: 32, e: [23], l: 127 },
    { h: 54, s: 1, e: [48], l: 64, d: 2 },
    { h: 14, s: 1, l: 57, d: 2 },
    { h: 44, s: 1, l: 17, d: 2 },
    { h: 10, s: 1, e: [2, 6, 8], l: 61, d: 2 },
    { h: 16, s: 1, l: 68, d: 2 },
    { h: 84, s: 1, e: [18, 24, 66], l: 19, d: 2 },
    { h: 26, s: 32, e: [17], l: 435 },
    { h: 22, s: 1, l: 71, d: 2 },
    { h: 15, s: 80, l: 40 },
    { h: 31, s: 32, l: 16 },
    { h: 32, s: 1, l: 80, d: 2 },
    { h: 52, s: 1, l: 42, d: 2 },
    { h: 12, s: 1, l: 55, d: 2 },
    { h: 40, s: 1, e: [38], l: 15, d: 2 },
    { h: 14, s: 1, l: 48, d: 2 },
    { h: 37, s: 48, l: 49 },
    { h: 148, s: 1, l: 6351, d: 2 },
    { h: 88, s: 1, l: 160, d: 2 },
    { h: 15, s: 16, l: 704 },
    { h: 25, s: 26, l: 854 },
    { h: 25, s: 32, l: 55915 },
    { h: 37, s: 40, l: 1247 },
    { h: 25, s: -119711, l: 53248 },
    { h: 25, s: -119763, l: 52 },
    { h: 25, s: -119815, l: 52 },
    { h: 25, s: -119867, e: [1, 4, 5, 7, 8, 11, 12, 17], l: 52 },
    { h: 25, s: -119919, l: 52 },
    { h: 24, s: -119971, e: [2, 7, 8, 17], l: 52 },
    { h: 24, s: -120023, e: [2, 7, 13, 15, 16, 17], l: 52 },
    { h: 25, s: -120075, l: 52 },
    { h: 25, s: -120127, l: 52 },
    { h: 25, s: -120179, l: 52 },
    { h: 25, s: -120231, l: 52 },
    { h: 25, s: -120283, l: 52 },
    { h: 25, s: -120335, l: 52 },
    { h: 24, s: -119543, e: [17], l: 56 },
    { h: 24, s: -119601, e: [17], l: 58 },
    { h: 24, s: -119659, e: [17], l: 58 },
    { h: 24, s: -119717, e: [17], l: 58 },
    { h: 24, s: -119775, e: [17], l: 58 }
];
const Table_B_2_lut_abs = createTable("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3");
const Table_B_2_lut_rel = createTable("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7");
const Table_B_2_complex = createTable("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", bytes2);
const Table_C_ranges = createRangeTable("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
function flatten(values) {
    return values.reduce((accum, value) => {
        value.forEach((value) => { accum.push(value); });
        return accum;
    }, []);
}
function _nameprepTableA1(codepoint) {
    return !!matchMap(codepoint, Table_A_1_ranges);
}
function _nameprepTableB2(codepoint) {
    let range = matchMap(codepoint, Table_B_2_ranges);
    if (range) {
        return [codepoint + range.s];
    }
    let codes = Table_B_2_lut_abs[codepoint];
    if (codes) {
        return codes;
    }
    let shift = Table_B_2_lut_rel[codepoint];
    if (shift) {
        return [codepoint + shift[0]];
    }
    let complex = Table_B_2_complex[codepoint];
    if (complex) {
        return complex;
    }
    return null;
}
function _nameprepTableC(codepoint) {
    return !!matchMap(codepoint, Table_C_ranges);
}
function nameprep(value) {
    // This allows platforms with incomplete normalize to bypass
    // it for very basic names which the built-in toLowerCase
    // will certainly handle correctly
    if (value.match(/^[a-z0-9-]*$/i) && value.length <= 59) {
        return value.toLowerCase();
    }
    // Get the code points (keeping the current normalization)
    let codes = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* .toUtf8CodePoints */ .XL)(value);
    codes = flatten(codes.map((code) => {
        // Substitute Table B.1 (Maps to Nothing)
        if (Table_B_1_flags.indexOf(code) >= 0) {
            return [];
        }
        if (code >= 0xfe00 && code <= 0xfe0f) {
            return [];
        }
        // Substitute Table B.2 (Case Folding)
        let codesTableB2 = _nameprepTableB2(code);
        if (codesTableB2) {
            return codesTableB2;
        }
        // No Substitution
        return [code];
    }));
    // Normalize using form KC
    codes = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* .toUtf8CodePoints */ .XL)((0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* ._toUtf8String */ .uu)(codes), _utf8__WEBPACK_IMPORTED_MODULE_0__/* .UnicodeNormalizationForm.NFKC */ .Uj.NFKC);
    // Prohibit Tables C.1.2, C.2.2, C.3, C.4, C.5, C.6, C.7, C.8, C.9
    codes.forEach((code) => {
        if (_nameprepTableC(code)) {
            throw new Error("STRINGPREP_CONTAINS_PROHIBITED");
        }
    });
    // Prohibit Unassigned Code Points (Table A.1)
    codes.forEach((code) => {
        if (_nameprepTableA1(code)) {
            throw new Error("STRINGPREP_CONTAINS_UNASSIGNED");
        }
    });
    // IDNA extras
    let name = (0,_utf8__WEBPACK_IMPORTED_MODULE_0__/* ._toUtf8String */ .uu)(codes);
    // IDNA: 4.2.3.1
    if (name.substring(0, 1) === "-" || name.substring(2, 4) === "--" || name.substring(name.length - 1) === "-") {
        throw new Error("invalid hyphen");
    }
    // IDNA: 4.2.4
    if (name.length > 63) {
        throw new Error("too long");
    }
    return name;
}
//# sourceMappingURL=idna.js.map

/***/ }),

/***/ 52166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnicodeNormalizationForm": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.Uj),
/* harmony export */   "Utf8ErrorFuncs": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.te),
/* harmony export */   "Utf8ErrorReason": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.Uw),
/* harmony export */   "_toEscapedUtf8String": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.U$),
/* harmony export */   "formatBytes32String": () => (/* reexport safe */ _bytes32__WEBPACK_IMPORTED_MODULE_1__.s),
/* harmony export */   "nameprep": () => (/* reexport safe */ _idna__WEBPACK_IMPORTED_MODULE_2__.Ll),
/* harmony export */   "parseBytes32String": () => (/* reexport safe */ _bytes32__WEBPACK_IMPORTED_MODULE_1__.F),
/* harmony export */   "toUtf8Bytes": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.Y0),
/* harmony export */   "toUtf8CodePoints": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.XL),
/* harmony export */   "toUtf8String": () => (/* reexport safe */ _utf8__WEBPACK_IMPORTED_MODULE_0__.ZN)
/* harmony export */ });
/* harmony import */ var _bytes32__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3845);
/* harmony import */ var _idna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37604);
/* harmony import */ var _utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75276);





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Uj": () => (/* binding */ UnicodeNormalizationForm),
  "te": () => (/* binding */ Utf8ErrorFuncs),
  "Uw": () => (/* binding */ Utf8ErrorReason),
  "U$": () => (/* binding */ _toEscapedUtf8String),
  "uu": () => (/* binding */ _toUtf8String),
  "Y0": () => (/* binding */ toUtf8Bytes),
  "XL": () => (/* binding */ toUtf8CodePoints),
  "ZN": () => (/* binding */ toUtf8String)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.6.1/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(99376);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.6.0/node_modules/@ethersproject/strings/lib.esm/_version.js
const version = "strings/5.6.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.6.0/node_modules/@ethersproject/strings/lib.esm/utf8.js




const logger = new logger_lib_esm/* Logger */.Yd(version);
///////////////////////////////
var UnicodeNormalizationForm;
(function (UnicodeNormalizationForm) {
    UnicodeNormalizationForm["current"] = "";
    UnicodeNormalizationForm["NFC"] = "NFC";
    UnicodeNormalizationForm["NFD"] = "NFD";
    UnicodeNormalizationForm["NFKC"] = "NFKC";
    UnicodeNormalizationForm["NFKD"] = "NFKD";
})(UnicodeNormalizationForm || (UnicodeNormalizationForm = {}));
;
var Utf8ErrorReason;
(function (Utf8ErrorReason) {
    // A continuation byte was present where there was nothing to continue
    // - offset = the index the codepoint began in
    Utf8ErrorReason["UNEXPECTED_CONTINUE"] = "unexpected continuation byte";
    // An invalid (non-continuation) byte to start a UTF-8 codepoint was found
    // - offset = the index the codepoint began in
    Utf8ErrorReason["BAD_PREFIX"] = "bad codepoint prefix";
    // The string is too short to process the expected codepoint
    // - offset = the index the codepoint began in
    Utf8ErrorReason["OVERRUN"] = "string overrun";
    // A missing continuation byte was expected but not found
    // - offset = the index the continuation byte was expected at
    Utf8ErrorReason["MISSING_CONTINUE"] = "missing continuation byte";
    // The computed code point is outside the range for UTF-8
    // - offset       = start of this codepoint
    // - badCodepoint = the computed codepoint; outside the UTF-8 range
    Utf8ErrorReason["OUT_OF_RANGE"] = "out of UTF-8 range";
    // UTF-8 strings may not contain UTF-16 surrogate pairs
    // - offset       = start of this codepoint
    // - badCodepoint = the computed codepoint; inside the UTF-16 surrogate range
    Utf8ErrorReason["UTF16_SURROGATE"] = "UTF-16 surrogate";
    // The string is an overlong representation
    // - offset       = start of this codepoint
    // - badCodepoint = the computed codepoint; already bounds checked
    Utf8ErrorReason["OVERLONG"] = "overlong representation";
})(Utf8ErrorReason || (Utf8ErrorReason = {}));
;
function errorFunc(reason, offset, bytes, output, badCodepoint) {
    return logger.throwArgumentError(`invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes);
}
function ignoreFunc(reason, offset, bytes, output, badCodepoint) {
    // If there is an invalid prefix (including stray continuation), skip any additional continuation bytes
    if (reason === Utf8ErrorReason.BAD_PREFIX || reason === Utf8ErrorReason.UNEXPECTED_CONTINUE) {
        let i = 0;
        for (let o = offset + 1; o < bytes.length; o++) {
            if (bytes[o] >> 6 !== 0x02) {
                break;
            }
            i++;
        }
        return i;
    }
    // This byte runs us past the end of the string, so just jump to the end
    // (but the first byte was read already read and therefore skipped)
    if (reason === Utf8ErrorReason.OVERRUN) {
        return bytes.length - offset - 1;
    }
    // Nothing to skip
    return 0;
}
function replaceFunc(reason, offset, bytes, output, badCodepoint) {
    // Overlong representations are otherwise "valid" code points; just non-deistingtished
    if (reason === Utf8ErrorReason.OVERLONG) {
        output.push(badCodepoint);
        return 0;
    }
    // Put the replacement character into the output
    output.push(0xfffd);
    // Otherwise, process as if ignoring errors
    return ignoreFunc(reason, offset, bytes, output, badCodepoint);
}
// Common error handing strategies
const Utf8ErrorFuncs = Object.freeze({
    error: errorFunc,
    ignore: ignoreFunc,
    replace: replaceFunc
});
// http://stackoverflow.com/questions/13356493/decode-utf-8-with-javascript#13691499
function getUtf8CodePoints(bytes, onError) {
    if (onError == null) {
        onError = Utf8ErrorFuncs.error;
    }
    bytes = (0,lib_esm/* arrayify */.lE)(bytes);
    const result = [];
    let i = 0;
    // Invalid bytes are ignored
    while (i < bytes.length) {
        const c = bytes[i++];
        // 0xxx xxxx
        if (c >> 7 === 0) {
            result.push(c);
            continue;
        }
        // Multibyte; how many bytes left for this character?
        let extraLength = null;
        let overlongMask = null;
        // 110x xxxx 10xx xxxx
        if ((c & 0xe0) === 0xc0) {
            extraLength = 1;
            overlongMask = 0x7f;
            // 1110 xxxx 10xx xxxx 10xx xxxx
        }
        else if ((c & 0xf0) === 0xe0) {
            extraLength = 2;
            overlongMask = 0x7ff;
            // 1111 0xxx 10xx xxxx 10xx xxxx 10xx xxxx
        }
        else if ((c & 0xf8) === 0xf0) {
            extraLength = 3;
            overlongMask = 0xffff;
        }
        else {
            if ((c & 0xc0) === 0x80) {
                i += onError(Utf8ErrorReason.UNEXPECTED_CONTINUE, i - 1, bytes, result);
            }
            else {
                i += onError(Utf8ErrorReason.BAD_PREFIX, i - 1, bytes, result);
            }
            continue;
        }
        // Do we have enough bytes in our data?
        if (i - 1 + extraLength >= bytes.length) {
            i += onError(Utf8ErrorReason.OVERRUN, i - 1, bytes, result);
            continue;
        }
        // Remove the length prefix from the char
        let res = c & ((1 << (8 - extraLength - 1)) - 1);
        for (let j = 0; j < extraLength; j++) {
            let nextChar = bytes[i];
            // Invalid continuation byte
            if ((nextChar & 0xc0) != 0x80) {
                i += onError(Utf8ErrorReason.MISSING_CONTINUE, i, bytes, result);
                res = null;
                break;
            }
            ;
            res = (res << 6) | (nextChar & 0x3f);
            i++;
        }
        // See above loop for invalid continuation byte
        if (res === null) {
            continue;
        }
        // Maximum code point
        if (res > 0x10ffff) {
            i += onError(Utf8ErrorReason.OUT_OF_RANGE, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        // Reserved for UTF-16 surrogate halves
        if (res >= 0xd800 && res <= 0xdfff) {
            i += onError(Utf8ErrorReason.UTF16_SURROGATE, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        // Check for overlong sequences (more bytes than needed)
        if (res <= overlongMask) {
            i += onError(Utf8ErrorReason.OVERLONG, i - 1 - extraLength, bytes, result, res);
            continue;
        }
        result.push(res);
    }
    return result;
}
// http://stackoverflow.com/questions/18729405/how-to-convert-utf8-string-to-byte-array
function toUtf8Bytes(str, form = UnicodeNormalizationForm.current) {
    if (form != UnicodeNormalizationForm.current) {
        logger.checkNormalize();
        str = str.normalize(form);
    }
    let result = [];
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 0x80) {
            result.push(c);
        }
        else if (c < 0x800) {
            result.push((c >> 6) | 0xc0);
            result.push((c & 0x3f) | 0x80);
        }
        else if ((c & 0xfc00) == 0xd800) {
            i++;
            const c2 = str.charCodeAt(i);
            if (i >= str.length || (c2 & 0xfc00) !== 0xdc00) {
                throw new Error("invalid utf-8 string");
            }
            // Surrogate Pair
            const pair = 0x10000 + ((c & 0x03ff) << 10) + (c2 & 0x03ff);
            result.push((pair >> 18) | 0xf0);
            result.push(((pair >> 12) & 0x3f) | 0x80);
            result.push(((pair >> 6) & 0x3f) | 0x80);
            result.push((pair & 0x3f) | 0x80);
        }
        else {
            result.push((c >> 12) | 0xe0);
            result.push(((c >> 6) & 0x3f) | 0x80);
            result.push((c & 0x3f) | 0x80);
        }
    }
    return (0,lib_esm/* arrayify */.lE)(result);
}
;
function escapeChar(value) {
    const hex = ("0000" + value.toString(16));
    return "\\u" + hex.substring(hex.length - 4);
}
function _toEscapedUtf8String(bytes, onError) {
    return '"' + getUtf8CodePoints(bytes, onError).map((codePoint) => {
        if (codePoint < 256) {
            switch (codePoint) {
                case 8: return "\\b";
                case 9: return "\\t";
                case 10: return "\\n";
                case 13: return "\\r";
                case 34: return "\\\"";
                case 92: return "\\\\";
            }
            if (codePoint >= 32 && codePoint < 127) {
                return String.fromCharCode(codePoint);
            }
        }
        if (codePoint <= 0xffff) {
            return escapeChar(codePoint);
        }
        codePoint -= 0x10000;
        return escapeChar(((codePoint >> 10) & 0x3ff) + 0xd800) + escapeChar((codePoint & 0x3ff) + 0xdc00);
    }).join("") + '"';
}
function _toUtf8String(codePoints) {
    return codePoints.map((codePoint) => {
        if (codePoint <= 0xffff) {
            return String.fromCharCode(codePoint);
        }
        codePoint -= 0x10000;
        return String.fromCharCode((((codePoint >> 10) & 0x3ff) + 0xd800), ((codePoint & 0x3ff) + 0xdc00));
    }).join("");
}
function toUtf8String(bytes, onError) {
    return _toUtf8String(getUtf8CodePoints(bytes, onError));
}
function toUtf8CodePoints(str, form = UnicodeNormalizationForm.current) {
    return getUtf8CodePoints(toUtf8Bytes(str, form));
}
//# sourceMappingURL=utf8.js.map

/***/ })

}]);