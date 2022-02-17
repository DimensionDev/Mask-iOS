(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5480],{

/***/ 24769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AddressZero": () => (/* reexport */ addresses/* AddressZero */.d),
  "EtherSymbol": () => (/* reexport */ EtherSymbol),
  "HashZero": () => (/* reexport */ hashes/* HashZero */.R),
  "MaxInt256": () => (/* reexport */ bignumbers/* MaxInt256 */.PS),
  "MaxUint256": () => (/* reexport */ bignumbers/* MaxUint256 */.Bz),
  "MinInt256": () => (/* reexport */ bignumbers/* MinInt256 */.$B),
  "NegativeOne": () => (/* reexport */ bignumbers/* NegativeOne */.tL),
  "One": () => (/* reexport */ bignumbers/* One */.fh),
  "Two": () => (/* reexport */ bignumbers/* Two */.Py),
  "WeiPerEther": () => (/* reexport */ bignumbers/* WeiPerEther */.Ce),
  "Zero": () => (/* reexport */ bignumbers/* Zero */._Y)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/addresses.js
var addresses = __webpack_require__(32704);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/bignumbers.js
var bignumbers = __webpack_require__(98648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/hashes.js
var hashes = __webpack_require__(76360);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/strings.js
// NFKC (composed)             // (decomposed)
const EtherSymbol = "\u039e"; // "\uD835\uDF63";
//# sourceMappingURL=strings.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+constants@5.4.0/node_modules/@ethersproject/constants/lib.esm/index.js





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 85396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "keccak256": () => (/* binding */ keccak256),
/* harmony export */   "sha256": () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11149);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);






const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
const Zeros = "0000000000000000000000000000000000000000000000000000000000000000";
function _pack(type, value, isArray) {
    switch (type) {
        case "address":
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
        case "string":
            return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(value);
        case "bytes":
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
        case "bool":
            value = (value ? "0x01" : "0x00");
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        //let signed = (match[1] === "int")
        let size = parseInt(match[2] || "256");
        if ((match[2] && String(size) !== match[2]) || (size % 8 !== 0) || size === 0 || size > 256) {
            throw new Error("invalid number type - " + type);
        }
        if (isArray) {
            size = 256;
        }
        value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value).toTwos(size);
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, size / 8);
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        if (String(size) !== match[1] || size === 0 || size > 32) {
            throw new Error("invalid bytes type - " + type);
        }
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value).byteLength !== size) {
            throw new Error("invalid value for " + type);
        }
        if (isArray) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)((value + Zeros).substring(0, 66));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        if (count != value.length) {
            throw new Error("invalid value for " + type);
        }
        const result = [];
        value.forEach(function (value) {
            result.push(_pack(baseType, value, true));
        });
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .zo)(result);
    }
    throw new Error("invalid type - " + type);
}
// @TODO: Array Enum
function pack(types, values) {
    if (types.length != values.length) {
        throw new Error("type/value count mismatch");
    }
    const tight = [];
    types.forEach(function (type, index) {
        tight.push(_pack(type, values[index]));
    });
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .hexlify */ .Dv)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .zo)(tight));
}
function keccak256(types, values) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)(pack(types, values));
}
function sha256(types, values) {
    return (0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__/* .sha256 */ .JQ)(pack(types, values));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 39060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(8686);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(96872);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ 96872:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.parse = __webpack_require__(65812);
exports.stringify = __webpack_require__(98079);


/***/ }),

/***/ 65812:
/***/ ((module) => {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ 98079:
/***/ ((module) => {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ 67893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Days),
/* harmony export */   "P": () => (/* binding */ PriceChartDaysControl)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93244);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49283);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36039);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
var Days;
(function(Days1) {
    Days1[Days1["MAX"] = 0] = "MAX";
    Days1[Days1["ONE_DAY"] = 1] = "ONE_DAY";
    Days1[Days1["ONE_WEEK"] = 7] = "ONE_WEEK";
    Days1[Days1["TWO_WEEKS"] = 14] = "TWO_WEEKS";
    Days1[Days1["ONE_MONTH"] = 30] = "ONE_MONTH";
    Days1[Days1["THREE_MONTHS"] = 90] = "THREE_MONTHS";
    Days1[Days1["ONE_YEAR"] = 365] = "ONE_YEAR";
})(Days || (Days = {
}));
function PriceChartDaysControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: [
            Days.ONE_DAY,
            Days.ONE_WEEK,
            Days.TWO_WEEKS,
            Days.ONE_MONTH,
            Days.THREE_MONTHS,
            Days.ONE_YEAR,
            Days.MAX, 
        ].map((days)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onDaysChange) === null || ref === void 0 ? void 0 : ref.call(props, days);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.text,
                    component: "span",
                    color: props.days === days ? 'primary' : 'textSecondary',
                    children: (0,_pipes__WEBPACK_IMPORTED_MODULE_2__/* .resolveDaysName */ .xo)(days)
                })
            }, days));
        })
    }));
}


/***/ }),

/***/ 36039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "dx": () => (/* binding */ resolveTradePairLink),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName),
/* harmony export */   "Ly": () => (/* binding */ resolveUniswapWarningLevel),
/* harmony export */   "zN": () => (/* binding */ resolveUniswapWarningLevelColor),
/* harmony export */   "RH": () => (/* binding */ resolveZrxTradePoolName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26428);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34513);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22209);
=======
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66632);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95142);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11494);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6615);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_5__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
function resolveDataProviderName(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'CoinGecko';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'CoinMarketCap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'Uniswap Info';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveDataProviderLink(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'https://www.coingecko.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'https://coinmarketcap.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'https://info.uniswap.org/';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveTradeProviderName(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return 'Uniswap V2';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return 'Uniswap V3';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '0x';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return 'SushiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return 'SashimiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return 'Balancer';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return 'QuickSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return 'PancakeSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            return 'DODO';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
                    return '';
=======
                    return 'https://aribitrum.api.0x.org/';
                case NetworkType.xDai:
                    return 'https://xdai.api.0x.org/';
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            {
                if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat__WEBPACK_IMPORTED_MODULE_5___default()('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: _constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType],
                    forced: true
                });
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            switch(networkType){
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Ethereum */ .tds.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Binance */ .tds.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Polygon */ .tds.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
                    return `https://analytics-aribtrum.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.xDai */ .tds.xDai:
                    return `https://analytics-xdai.sushi.com/pairs/${address}`;
                default:
                    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .safeUnreachable */ .P)(networkType);
                    return '';
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(_constants__WEBPACK_IMPORTED_MODULE_3__/* .BIPS_BASE */ .PM);
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_NON_EXPERT_BLOCKED */ .lA)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN */ .EV)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_HIGH */ .Wg)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_MEDIUM */ .wh)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_LOW */ .J2)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW;
    return;
}
function resolveUniswapWarningLevelColor(warningLevel) {
    const COLOR_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
    };
    return warningLevel ? COLOR_MAP[warningLevel] : '#27ae60';
}
function resolveZrxTradePoolName(swapSource) {
    const SWAP_SOURCE_NAME_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma'
    };
    var _swapSource;
    return (_swapSource = SWAP_SOURCE_NAME_MAP[swapSource]) !== null && _swapSource !== void 0 ? _swapSource : 'Unknown';
}


/***/ }),

/***/ 88105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkAvailabilityOnDataProvider": () => (/* reexport */ checkAvailabilityOnDataProvider),
  "fetchBlockNumberByTimestamp": () => (/* reexport */ fetchBlockNumberByTimestamp),
  "fetchBlockNumbersByTimestamps": () => (/* reexport */ fetchBlockNumbersByTimestamps),
  "fetchBlockNumbersObjectByTimestamps": () => (/* reexport */ fetchBlockNumbersObjectByTimestamps),
  "fetchLBP_PoolTokenPrices": () => (/* reexport */ fetchLBP_PoolTokenPrices),
  "fetchLBP_PoolTokens": () => (/* reexport */ fetchLBP_PoolTokens),
  "fetchLBP_PoolsByTokenAddress": () => (/* reexport */ fetchLBP_PoolsByTokenAddress),
  "fetchPoolTokens": () => (/* reexport */ fetchPoolTokens),
  "fetchTokenPrices": () => (/* reexport */ fetchTokenPrices),
  "getAvailableCoins": () => (/* reexport */ getAvailableCoins),
  "getAvailableDataProviders": () => (/* reexport */ getAvailableDataProviders),
  "getAvailableTraderProviders": () => (/* reexport */ getAvailableTraderProviders),
  "getCoinTrendingById": () => (/* reexport */ getCoinTrendingById),
  "getCoinTrendingByKeyword": () => (/* reexport */ getCoinTrendingByKeyword),
  "getCoins": () => (/* reexport */ getCoins),
  "getCurrenies": () => (/* reexport */ getCurrenies),
  "getLimitedCurrenies": () => (/* reexport */ getLimitedCurrenies),
  "getPriceStats": () => (/* reexport */ trending_getPriceStats),
  "getSwaps": () => (/* reexport */ getSwaps),
  "swapQuote": () => (/* reexport */ swapQuote),
  "swapRoute": () => (/* reexport */ swapRoute),
  "updatePools": () => (/* reexport */ updatePools)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(67047);
// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
var constants = __webpack_require__(86705);
=======
var constants = __webpack_require__(71765);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/0x/index.ts




async function swapQuote(request, networkType) {
    var ref, ref1;
    const params = {
    };
    Object.entries(request).map(([key, value])=>{
        if (typeof value === 'string') params[key] = value;
    });
    if (request.slippagePercentage) params.slippagePercentage = new (bignumber_default())(request.slippagePercentage).dividedBy(constants/* BIPS_BASE */.PM).toFixed();
    if (request.buyTokenPercentageFee) params.buyTokenPercentageFee = new (bignumber_default())(request.buyTokenPercentageFee).dividedBy(100).toFixed();
    if (request.includedSources) params.includedSources = request.includedSources.join();
    if (request.excludedSources) params.excludedSources = request.excludedSources.join();
    const response = await fetch(dist_default()(constants/* ZRX_BASE_URL */.qN[networkType], 'swap/v1/quote', params));
    const response_ = await response.json();
    const validationErrorResponse = response_;
    var ref2;
    if (validationErrorResponse.code) throw new Error((ref2 = (ref = (0,lodash.first)(validationErrorResponse.validationErrors)) === null || ref === void 0 ? void 0 : ref.reason) !== null && ref2 !== void 0 ? ref2 : 'Unknown Error');
    const serverErrorResponse = response_;
    if (serverErrorResponse.reason) throw new Error(((ref1 = (0,lodash.first)(validationErrorResponse.validationErrors)) === null || ref1 === void 0 ? void 0 : ref1.reason) || 'Unknown Error');
    const successResponse = response_;
    return successResponse;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@balancer-labs+sor@1.0.0/node_modules/@balancer-labs/sor/dist/index.js
var sor_dist = __webpack_require__(15092);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+providers@5.4.2/node_modules/@ethersproject/providers/lib.esm/json-rpc-provider.js + 3 modules
var json_rpc_provider = __webpack_require__(34110);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/blocks.ts
function getPastTimestamps(start, duration, size = 50) {
    // the smallest timestamp size is 10 minutes
    const step = Math.max(Math.floor(duration / size), 600);
    const timestamps = [];
    for(let i = 1; i <= size; i += 1){
        const timestamp = start - i * step;
        if (timestamp > 0) timestamps.push(timestamp);
        else break;
    }
    return timestamps.reverse();
}
function getFutureTimestamps(start, duration, size = 50) {
    // the smallest timestamp size is 10 minutes
    const step = Math.max(Math.floor(duration / size), 600);
    const timestamps = [];
    for(let i = 0; i < size; i += 1){
        const timestamp = start + i * step;
        timestamps.push(timestamp);
    }
    return timestamps;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/blocks/index.ts




async function fetchFromEthereumBlocksSubgraph(query) {
    const subgraphURL = (0,src/* getTrendingConstants */.$on)(settings/* currentChainIdSettings.value */.wU.value).ETHEREUM_BLOCKS_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
/**
 * Fetches the block number near the given timestamp.
 * @param timestamp
 */ async function fetchBlockNumberByTimestamp(timestamp) {
    var ref;
    const data = await fetchFromEthereumBlocksSubgraph(`
    {
        blocks (
            first: 1,
            orderBy: timestamp,
            where: {
                timestamp_gt: ${timestamp},
                timestamp_lt: ${timestamp + 600}
            }
        ) {
            number
        }
    }
    `);
    return (ref = (0,lodash.first)(data === null || data === void 0 ? void 0 : data.blocks)) === null || ref === void 0 ? void 0 : ref.number;
}
/**
 * Fetches block numbers near the given timestamps.
 * @param timestamps
 * @param skipCount
 */ async function fetchBlockNumbersByTimestamps(timestamps, skipCount = 100) {
    // avoiding request entity too large
    const chunkTimestamps = (0,lodash.chunk)(timestamps, skipCount);
    const data = await Promise.all(chunkTimestamps.map(async (chunk1)=>{
        const queries = chunk1.map((x)=>{
            return `
                    t${x}: blocks(
                        first: 1,
                        orderBy: timestamp,
                        orderDirection: desc,
                        where: {
                            timestamp_gt: ${x},
                            timestamp_lt: ${x + 600}
                        }
                    ) {
                        number
                    }
                `;
        });
        return fetchFromEthereumBlocksSubgraph(`
                query blocks {
                    ${queries}
                }
            `);
    }));
    return (0,lodash.flatten)(data.filter(Boolean).map((result)=>Object.keys(result).map((x)=>({
                timestamp: Number(x.split('t')[1]),
                // @ts-ignore
                blockNumber: (0,lodash.first)(result[x]).number
            })
        )
    ));
}
/**
 * fetches block number near the given timestamp, the return will be a object, like { t{timestamp}: blockNumber }
 * the timestamps can't have too much item
 * @param timestamps
 */ async function fetchBlockNumbersObjectByTimestamps(timestamps) {
    const queries = timestamps.map((x)=>{
        return `
            t${x}: blocks(
                first: 1,
                orderBy: timestamp,
                where: {
                    timestamp_gt: ${x},
                    timestamp_lt: ${x + 600}
                }
            ) {
                number
            }
        `;
    });
    const data = await fetchFromEthereumBlocksSubgraph(`
        query blocks {
            ${queries}
        }
    `);
    const result = {
    };
    if (!data) return result;
    Object.keys(data).map((key)=>{
        var ref;
        result[key] = (ref = (0,lodash.first)(data[key])) === null || ref === void 0 ? void 0 : ref.number;
    });
    return result;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/LBP/index.ts



async function fetchFromBalancerPoolSubgraph(query) {
    const subgraphURL = (0,src/* getLBPConstants */.Hkb)(settings/* currentChainIdSettings.value */.wU.value).BALANCER_POOLS_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
async function fetchLBP_PoolsByTokenAddress(address) {
    const data = await fetchFromBalancerPoolSubgraph(`
    {
        pools(
            orderBy: swapsCount,
            orderDirection: desc,
            where: {
                rights_contains: ["canChangeWeights"],
                tokensList_contains: ["${address.toLowerCase()}"]
            }
        ) {
          id
          createTime
        }
    }`);
    if (!(data === null || data === void 0 ? void 0 : data.pools)) throw new Error('Failed to load pools.');
    return data.pools;
}
async function fetchLBP_PoolTokenPrices(poolId, address, blockNumbers) {
    const queries = blockNumbers.map((x)=>`
        b${x}: tokenPrices (
            where: { poolTokenId: "${poolId.toLowerCase()}-${address.toLowerCase()}" },
            block: {
                number: ${x}
            }
        ) {
            price
        }
    `
    );
    const data = await fetchFromBalancerPoolSubgraph(`
        query tokenPrices {
            ${queries.join('\n')}
        }
    `);
    if (!data) return [];
    var ref;
    return Object.keys(data).map((x)=>{
        var ref1;
        return {
            price: (ref = (ref1 = data[x][0]) === null || ref1 === void 0 ? void 0 : ref1.price) !== null && ref !== void 0 ? ref : '0',
            blockNumber: x.slice(1)
        };
    }).sort((a, z)=>Number.parseInt(a.blockNumber, 10) - Number.parseInt(z.blockNumber, 10)
    );
}
async function fetchLBP_PoolTokens(poolId, blockNumbers) {
    const queries = blockNumbers.map((x)=>`
        b${x}: pools (
            where: {
                id: "${poolId.toLowerCase()}"
            },
            block: {
                number: ${x}
            }
        ) {
            tokens {
                address
                balance
                denormWeight
            }
        }`
    );
    const data = await fetchFromBalancerPoolSubgraph(`
        query poolTokens {
            ${queries.join('\n')}
        }
    `);
    if (!data) return [];
    return Object.keys(data).map((x)=>({
            tokens: data[x].tokens,
            blockNumber: x.slice(1)
        })
    );
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/balancer/index.ts










//#region create cached SOR
const createSOR_ = (0,lodash.memoize)((chainId)=>{
    const { RPC  } = (0,src/* getRPCConstants */.t06)(chainId);
    const provderURL = (0,lodash.first)(RPC);
    if (!provderURL) throw new Error('Unknown chain id.');
    return new sor_dist.SOR(// we choose a fixed provider cause it's only used here.
    new json_rpc_provider/* JsonRpcProvider */.r(provderURL), constants/* BALANCER_SOR_GAS_PRICE */.L4, constants/* BALANCER_MAX_NO_POOLS */.r2, chainId, '');
}, (chainId)=>String(chainId)
);
function createSOR(chainId) {
    const sor = createSOR_(chainId);
    // update pools url when sor object was created or reused
    sor.poolsUrl = `${(0,src/* getTraderConstants */.Grw)(chainId).BALANCER_POOLS_URL}?timestamp=${Date.now()}`;
    return sor;
}
//#endregion
async function updatePools(force = false) {
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    const sor = createSOR(chainId);
    // this fetches all pools list from URL in constructor then onChain balances using Multicall
    if (!sor.isAllFetched || force) {
        sor.poolsUrl = `${(0,src/* getTraderConstants */.Grw)(chainId).BALANCER_POOLS_URL}?timestamp=${Date.now()}`;
        await sor.fetchPools();
    }
}
async function getSwaps(tokenIn, tokenOut, swapType, amount) {
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    const sor = createSOR(chainId);
    // this calculates the cost to make a swap which is used as an input to sor to allow it to make gas efficient recommendations.
    // can be set once and will be used for further swap calculations.
    // defaults to 0 if not called or can be set manually using: await sor.setCostOutputToken(tokenOut, manualPriceBn)
    await sor.setCostOutputToken(tokenOut);
    // update pools if necessary
    updatePools();
    // get swaps from chain
    const [swaps, tradeAmount, spotPrice] = await sor.getSwaps(tokenIn, tokenOut, swapType, new (bignumber_default())(amount));
    // compose routes
    // learn more: https://github.com/balancer-labs/balancer-frontend/blob/develop/src/components/swap/Routing.vue
    const totalSwapAmount = swaps.reduce((total, rawHops)=>{
        var ref;
        return total.plus(((ref = (0,lodash.first)(rawHops)) === null || ref === void 0 ? void 0 : ref.swapAmount) || '0');
    }, src/* ZERO */.xEJ);
    const pools = sor.onChainCache.pools;
    const routes = swaps.map((rawHops)=>{
        var ref;
        const swapAmount = new (bignumber_default())(((ref = (0,lodash.first)(rawHops)) === null || ref === void 0 ? void 0 : ref.swapAmount) || '0');
        const share = swapAmount.div(totalSwapAmount).toNumber();
        const hops = rawHops.map((rawHop)=>{
            const { swapAmount: swapAmount1  } = rawHop;
            const tokenIn1 = rawHop.tokenIn;
            const tokenOut1 = rawHop.tokenOut;
            const rawPool = pools.find((pool)=>pool.id === rawHop.pool
            );
            if (!rawPool) return {
            };
            const totalWeight = new (bignumber_default())(rawPool.totalWeight);
            const pool = {
                address: rawPool.id,
                tokens: rawPool.tokens.map((token)=>{
                    const address = token.address;
                    const weight = new (bignumber_default())(token.denormWeight);
                    const share1 = weight.div(totalWeight).toNumber();
                    return {
                        address,
                        share: share1
                    };
                }).sort((a, b)=>{
                    if ((0,src/* isSameAddress */.Wr$)(a.address, tokenIn1) || (0,src/* isSameAddress */.Wr$)(b.address, tokenOut1)) return -1;
                    if ((0,src/* isSameAddress */.Wr$)(a.address, tokenOut1) || (0,src/* isSameAddress */.Wr$)(b.address, tokenIn1)) return 1;
                    return a.share - b.share;
                }).filter((token, index, tokens)=>{
                    // Show first 2 and last 2 tokens
                    return index < 2 || index > tokens.length - 3;
                })
            };
            return {
                pool,
                tokenIn: tokenIn1,
                tokenOut: tokenOut1,
                swapAmount: swapAmount1
            };
        });
        return {
            share,
            hops
        };
    });
    return {
        swaps: [
            swaps,
            tradeAmount,
            spotPrice
        ],
        routes
    };
}
async function fetchTokenPrices(address, duration, size) {
    // use the first pool sorted by swap count (desc)
    const pools = await fetchLBP_PoolsByTokenAddress(address);
    const pool = (0,lodash.first)(pools);
    if (!pool) return [];
    // create timestamps by given duration and size
    const timestamps = getFutureTimestamps(pool.createTime, duration, size);
    // expand timestamps to block numbers
    const blockNumbers = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blockNumbers.length) return [];
    // fetch the token prices in the pool
    const prices = await fetchLBP_PoolTokenPrices(pool.id, address, blockNumbers.map((x)=>x.blockNumber
    ));
    // compose the result as timestamp and price pairs
    return prices.map((x, i)=>({
            timestamp: timestamps[i],
            blockNumber: x.blockNumber,
            price: Number.parseFloat(x.price)
        })
    );
}
async function fetchPoolTokens(address, duration, size) {
    // use the first pool sorted by swap count (desc)
    const pools = await fetchLBP_PoolsByTokenAddress(address);
    const pool = (0,lodash.first)(pools);
    if (!pool) return [];
    // create timestamps by given duration and size
    const timestamps = getFutureTimestamps(pool.createTime, duration, size);
    // expand timestamps to block numbers
    const blockNumbers = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blockNumbers.length) return [];
    const poolTokens = await fetchLBP_PoolTokens(pool.id, blockNumbers.map((x)=>x.blockNumber
    ));
    return [];
}

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
var types = __webpack_require__(26428);
=======
var types = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trader/index.ts




async function getAvailableTraderProviders(type, keyword) {
    const networkType = (0,src/* getNetworkTypeFromChainId */._Te)(settings/* currentChainIdSettings.value */.wU.value);
    if (!networkType) return [];
    switch(networkType){
        case src/* NetworkType.Ethereum */.tds.Ethereum:
            return [
                types/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2,
                types/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
                types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                types/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP,
                types/* TradeProvider.ZRX */.z4.ZRX,
                types/* TradeProvider.BALANCER */.z4.BALANCER,
                types/* TradeProvider.DODO */.z4.DODO, 
            ];
        case src/* NetworkType.Polygon */.tds.Polygon:
            return [
                types/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP,
                types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                types/* TradeProvider.DODO */.z4.DODO,
                types/* TradeProvider.ZRX */.z4.ZRX
            ];
        case src/* NetworkType.Binance */.tds.Binance:
            return [
                types/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP,
                types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
                types/* TradeProvider.DODO */.z4.DODO,
                types/* TradeProvider.ZRX */.z4.ZRX
            ];
        case src/* NetworkType.Arbitrum */.tds.Arbitrum:
            return [
                types/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
            ];
        case src/* NetworkType.xDai */.tds.xDai:
            return [
                types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
            ];
        default:
            (0,esm/* safeUnreachable */.P)(networkType);
            return [];
    }
}

// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(55);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/coingecko/index.ts


//#region get currency
async function getAllCurrenies() {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/simple/supported_vs_currencies`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getAllCoins() {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/list`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getCoinInfo(coinId) {
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/${coinId}?developer_data=false&community_data=false&tickers=true`, {
        cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
}
async function getPriceStats(coinId, currencyId, days) {
    const params = new URLSearchParams();
    params.append('vs_currency', currencyId);
    params.append('days', String(days));
    const response = await fetch(`${constants/* COIN_GECKO_BASE_URL */.hb}/coins/${coinId}/market_chart?${params.toString()}`, {
        cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
} //#endregion

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/coinmarketcap/index.ts


//#region get all currency
function coinmarketcap_getAllCurrenies() {
    return [];
}
async function coinmarketcap_getAllCoins() {
    const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/map?aux=status,platform&listing_status=active,untracked&sort=cmc_rank`, {
        cache: 'force-cache'
    });
    return response.json();
}
async function getQuotesInfo(id, currency) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('convert', currency);
    try {
        const response = await fetch(`${constants/* THIRD_PARTY_V1_BASE_URL */.NU}/cryptocurrency/widget?${params.toString()}`, {
            cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
        });
        return response.json();
    } catch  {
        return {
            data: null
        };
    }
}
async function coinmarketcap_getCoinInfo(id) {
    const params = new URLSearchParams('aux=urls,logo,description,tags,platform,date_added,notice,status');
    params.append('id', id);
    const response_ = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/info?${params.toString()}`, {
        cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    const response = await response_.json();
    return {
        data: response.data[id],
        status: response.status
    };
}
async function getHistorical(id, currency, startDate, endDate, interval = '1d') {
    const toUnixTimestamp = (d)=>String(Math.floor(d.getTime() / 1000))
    ;
    const params = new URLSearchParams('format=chart_crypto_details');
    params.append('convert', currency);
    params.append('id', id);
    params.append('interval', interval);
    params.append('time_end', toUnixTimestamp(endDate));
    params.append('time_start', toUnixTimestamp(startDate));
    const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/quotes/historical?${params.toString()}`, {
        cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
    });
    return response.json();
}
async function getLatestMarketPairs(id, currency) {
    const params = new URLSearchParams('aux=num_market_pairs,market_url,price_quote,effective_liquidity,market_score,market_reputation&limit=40&sort=cmc_rank&start=1');
    params.append('convert', currency);
    params.append('id', id);
    try {
        const response = await fetch(`${constants/* CMC_V1_BASE_URL */.V1}/cryptocurrency/market-pairs/latest?${params.toString()}`, {
            cache: flags/* Flags.trader_all_api_cached_enabled */.vU.trader_all_api_cached_enabled ? 'force-cache' : 'default'
        });
        return response.json();
    } catch  {
        return {
            data: {
                id,
                market_pairs: [],
                num_market_pairs: 0
            }
        };
    }
} //#endregion

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap-v2-subgraph/index.ts




const TokenFields = `
  fragment TokenFields on Token {
    id
    name
    symbol
    derivedETH
    tradeVolume
    tradeVolumeUSD
    untrackedVolumeUSD
    totalLiquidity
    txCount
  }
`;
const PairFields = `
  fragment PairFields on Pair {
    id
    txCount
    token0 {
      id
      symbol
      name
      totalLiquidity
      derivedETH
    }
    token1 {
      id
      symbol
      name
      totalLiquidity
      derivedETH
    }
    reserve0
    reserve1
    reserveUSD
    totalSupply
    trackedReserveETH
    reserveETH
    volumeUSD
    untrackedVolumeUSD
    token0Price
    token1Price
    createdAtTimestamp
  }
`;
async function fetchFromUniswapV2Subgraph(query) {
    const subgraphURL = (0,src/* getTrendingConstants */.$on)(settings/* currentChainIdSettings.value */.wU.value).UNISWAP_V2_SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
/**
 * Fetch Ether price of given block
 * @param blockNumber if don't give, will return latest price
 */ async function fetchEtherPriceByBlockNumber(blockNumber) {
    var ref;
    const data = await fetchFromUniswapV2Subgraph(`
        query bundles {
            bundles(where: { id: 1 } ${blockNumber ? `block: { number: ${blockNumber} }` : ''}) {
                ethPrice
            }
        }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.bundles)) return;
    return (ref = (0,lodash.first)(data.bundles)) === null || ref === void 0 ? void 0 : ref.ethPrice;
}
/**
 * Fetch Ether price of list of blocks
 * @param blockNumbers
 */ async function fetchEtherPricesByBlockNumbers(blockNumbers) {
    const queries = blockNumbers.map((x)=>{
        return `
            b${x}: bundle(id: "1", ${x ? `block: { number: ${x} }` : ''}) {
                ethPrice
            }
        `;
    });
    const data = await fetchFromUniswapV2Subgraph(`
        query bundles {
            ${queries.join('\n')}
        }
    `);
    const result = {
    };
    if (!data) return result;
    Object.keys(data).map((key)=>{
        var ref;
        result[key] = (ref = data[key]) === null || ref === void 0 ? void 0 : ref.ethPrice;
    });
    return result;
}
/**
 * Fetches tokens for an array of symbols (case-sensitive).
 * @param keyword
 */ async function fetchTokensByKeyword(keyword) {
    // thegraph does not support case-insensitive searching
    // so cased keywords will be added too
    const listOfKeywords = [
        keyword,
        keyword.toLowerCase(),
        keyword.toUpperCase()
    ];
    const data = await fetchFromUniswapV2Subgraph(`
        query tokens {
            tokens (where: { symbol_in: ${json_stable_stringify_default()(listOfKeywords)} }, orderBy: tradeVolume, orderDirection: desc) {
                id
                name
                symbol
                decimals
            }
        }
    `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.tokens) !== null && ref !== void 0 ? ref : [];
}
/**
 * Fetch the daily token data.
 */ async function fetchTokenDayData(address, date) {
    const utcTimestamp = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    const data = await fetchFromUniswapV2Subgraph(`
        {
            tokenDayDatas(first: 1000, orderBy: date, date: ${utcTimestamp}, where: { token: ${address} }) {
                id
                date
                priceUSD
                totalLiquidityToken
                totalLiquidityUSD
                totalLiquidityETH
                dailyVolumeETH
                dailyVolumeToken
                dailyVolumeUSD
            }
        }
    `);
    return first(data === null || data === void 0 ? void 0 : data.data.tokenDayData);
}
/**
 * Fetch the token data
 * @param address
 * @param blockNumber
 */ async function fetchTokenData(address, blockNumber) {
    var ref;
    const data = await fetchFromUniswapV2Subgraph(`
        ${TokenFields}
        ${PairFields}
        query tokens {
            tokens(${blockNumber ? `block : {number: ${blockNumber}}` : ``} where: {id:"${address}"}) {
                ...TokenFields
            }
            pairs0: pairs(where: {token0: "${address}"}, first: 50, orderBy: reserveUSD, orderDirection: desc) {
                ...PairFields
            }
            pairs1: pairs(where: {token1: "${address}"}, first: 50, orderBy: reserveUSD, orderDirection: desc) {
                ...PairFields
            }
        }
    `);
    var ref1;
    return {
        token: (0,lodash.first)(data === null || data === void 0 ? void 0 : data.tokens),
        allPairs: (ref1 = data === null || data === void 0 ? void 0 : (ref = data.pairs0) === null || ref === void 0 ? void 0 : ref.concat(data.pairs1)) !== null && ref1 !== void 0 ? ref1 : []
    };
}
/**
 * fetch pairs bulk data
 * @param pairList
 */ async function fetchPairsBulk(pairList) {
    const data = await fetchFromUniswapV2Subgraph(`
           ${PairFields}
           query pairs {
                pairs(first: 500, where: { id_in: ${json_stable_stringify_default()(pairList)} }, orderBy: trackedReserveETH, orderDirection: desc ) {
                    ...PairFields
                }
           }
        `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.pairs) !== null && ref !== void 0 ? ref : [];
}
/**
 * fetch pairs historical bulk data
 * @param pairs
 * @param blockNumber
 */ async function fetchPairsHistoricalBulk(pairs, blockNumber) {
    const data = await fetchFromUniswapV2Subgraph(`
            ${PairFields}
            query pairs {
                pairs(first: 200, where: { id_in: ${json_stable_stringify_default()(pairs)} }, block: { number: ${blockNumber} }, orderBy: trackedReserveETH, orderDirection: desc) {
                    ...PairFields
                }
            }
    `);
    var ref;
    return (ref = data === null || data === void 0 ? void 0 : data.pairs) !== null && ref !== void 0 ? ref : [];
}
/**
 * fetch pair data
 * @param pairAddress
 * @param blockNumber
 */ async function fetchPairData(pairAddress, blockNumber) {
    const data = await fetchFromUniswapV2Subgraph(`
         ${PairFields}
         query pairs {
            pairs(${blockNumber ? `block : {number: ${blockNumber}}` : ``} where: { id: "${pairAddress}"} ) {
                ...PairFields
            }
        }
    `);
    return (0,lodash.first)(data === null || data === void 0 ? void 0 : data.pairs);
}
/**
 * fetch price info by token address, blocks
 * @param tokenAddress
 * @param blocks
 * @param skipCount
 */ async function fetchPricesByBlocks(tokenAddress, blocks, skipCount = 50) {
    // avoiding request entity too large
    const chunkBlocks = (0,lodash.chunk)(blocks, skipCount);
    const data = await Promise.all(chunkBlocks.map(async (chunk1)=>{
        const queries = chunk1.map((block)=>`
                    t${block.timestamp}: token(id:"${tokenAddress}", blocks: { number: ${block.blockNumber} }) {
                        derivedETH
                    }
                `
        );
        const blockQueries = chunk1.map((block)=>`
                b${block.timestamp}: bundle(id: "1", block: { number: ${block.blockNumber} }) {
                    ethPrice
                }
            `
        );
        return fetchFromUniswapV2Subgraph(`
                query blocks {
                    ${queries}
                    ${blockQueries}
                }
            `);
    }));
    return (0,lodash.flatten)(data.map((result)=>{
        if (result) {
            const keys = Object.keys(result).filter((key)=>key.startsWith('t')
            );
            return keys.map((x)=>{
                var ref;
                const timestamp = x.split('t')[1];
                return {
                    timestamp: Number(timestamp) * 1000,
                    derivedETH: result[x].derivedETH,
                    ethPrice: (ref = result[`b${timestamp}`]) === null || ref === void 0 ? void 0 : ref.ethPrice
                };
            });
        }
        return [];
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap-health/index.ts




async function fetchFromUniswapV2Health(query) {
    const subgraphURL = (0,src/* getTrendingConstants */.$on)(settings/* currentChainIdSettings.value */.wU.value).UNISWAP_V2_HEALTH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
async function fetchLatestBlocks() {
    var ref, ref1;
    const response = await fetchFromUniswapV2Health(`
      query health {
        indexingStatusForCurrentVersion(subgraphName: "uniswap/uniswap-v2") {
          synced
          health
          chains {
            chainHeadBlock {
              number
            }
            latestBlock {
              number
            }
          }
        }
      }
    `);
    const latestBlock = (ref = (0,lodash.first)(response === null || response === void 0 ? void 0 : response.indexingStatusForCurrentVersion.chains)) === null || ref === void 0 ? void 0 : ref.latestBlock.number;
    const headBlock = (ref1 = (0,lodash.first)(response === null || response === void 0 ? void 0 : response.indexingStatusForCurrentVersion.chains)) === null || ref1 === void 0 ? void 0 : ref1.chainHeadBlock.number;
    return [
        latestBlock,
        headBlock
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/uniswap/index.ts





/**
 * get standard percent change between two values
 * @param valueNow
 * @param value24HoursAgo
 */ const getPercentChange = (valueNow, value24HoursAgo)=>{
    const adjustedPercentChange = new (bignumber_default())(valueNow !== null && valueNow !== void 0 ? valueNow : 0).minus(value24HoursAgo !== null && value24HoursAgo !== void 0 ? value24HoursAgo : 0).dividedBy(value24HoursAgo !== null && value24HoursAgo !== void 0 ? value24HoursAgo : 0).multipliedBy(100);
    if (adjustedPercentChange.isNaN() || !adjustedPercentChange.isFinite()) {
        return 0;
    }
    return adjustedPercentChange.toNumber();
};
/**
 * Get timestamp from current, one hour ago, one day ago, a week ago
 */ function getTimestampForChanges() {
    const currentTime = new Date();
    const utcOneHourBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), currentTime.getUTCHours() - 1, currentTime.getUTCMinutes());
    const utcOneDayBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 1, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcWeekBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 7, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcTwoWeekBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate() - 14, currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcOneMonthBack = Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth() - 1, currentTime.getUTCDate(), currentTime.getUTCHours(), currentTime.getUTCMinutes());
    const utcOneYearBack = Date.UTC(currentTime.getUTCFullYear() - 1, currentTime.getUTCMonth(), currentTime.getUTCDate(), currentTime.getUTCHours(), currentTime.getUTCMinutes());
    return {
        utcOneHourBack: Math.floor(utcOneHourBack / 1000),
        utcOneDayBack: Math.floor(utcOneDayBack / 1000),
        utcWeekBack: Math.floor(utcWeekBack / 1000),
        utcTwoWeekBack: Math.floor(utcTwoWeekBack / 1000),
        utcOneMonthBack: Math.floor(utcOneMonthBack / 1000),
        utcOneYearBack: Math.floor(utcOneYearBack / 1000)
    };
}
/**
 * For uniswap all coins should be treated as available
 * Please use getCoinInfo directly
 */ function uniswap_getAllCoins() {
    throw new Error('For uniswap all coins are available by default.');
}
async function getAllCoinsByKeyword(keyword) {
    const keyword_ = keyword.toLocaleLowerCase();
    if (keyword_ === 'mask') {
        return [
            {
                decimals: 18,
                address: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
                id: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074',
                name: 'Mask Network',
                symbol: 'MASK',
                contract_address: '0x69af81e73a73b40adf4f3d4223cd9b1ece623074'
            }, 
        ];
    }
    const tokens = await fetchTokensByKeyword(keyword);
    const coins = tokens.map((x)=>({
            ...x,
            address: x.id,
            contract_address: x.id
        })
    );
    if (keyword.toLowerCase() === 'eth') {
        coins.unshift({
            id: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            name: 'ETHer (Wrapped)',
            contract_address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
            symbol: 'eth',
            decimals: 18
        });
    } else if (keyword.toLowerCase() === 'nrge') {
        coins.unshift({
            id: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            address: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            name: 'Energi',
            contract_address: '0x1416946162b1c2c871a73b07e932d2fb6c932069',
            symbol: 'NRGT',
            decimals: 18
        });
    }
    return coins;
}
/**
 * Get coin info by id
 * @param id the token address
 */ async function uniswap_getCoinInfo(id) {
    //#region get timestamps from one hour ago, ,one day ago, a week ago
    const { utcOneHourBack , utcOneDayBack , utcWeekBack , utcTwoWeekBack , utcOneMonthBack , utcOneYearBack  } = getTimestampForChanges();
    //#endregion
    //#region get block from one hour ago, one day ago, a week ago
    const { [`t${utcOneHourBack}`]: oneHourBlock , [`t${utcOneDayBack}`]: oneDayBlock , [`t${utcWeekBack}`]: weekBlock , [`t${utcTwoWeekBack}`]: twoWeekBlock , [`t${utcOneMonthBack}`]: oneMonthBlock , [`t${utcOneYearBack}`]: oneYearBlock ,  } = await fetchBlockNumbersObjectByTimestamps([
        utcOneHourBack,
        utcOneDayBack,
        utcWeekBack,
        utcTwoWeekBack,
        utcOneMonthBack,
        utcOneYearBack, 
    ]);
    //#region
    //#region get ether price
    const ethPrice = await fetchEtherPriceByBlockNumber();
    const { [`b${oneHourBlock}`]: oneHourBackEthPrice , [`b${oneDayBlock}`]: oneDayBackEthPrice , [`b${weekBlock}`]: weekBackEthPrice , [`b${twoWeekBlock}`]: twoWeekBackEthPrice , [`b${oneMonthBlock}`]: oneMonthBackEthPrice , [`b${oneYearBlock}`]: oneYearBackEthPrice ,  } = await fetchEtherPricesByBlockNumbers([
        oneHourBlock,
        oneDayBlock,
        weekBlock,
        twoWeekBlock,
        oneMonthBlock,
        oneYearBlock, 
    ]);
    //#endregion
    //#region get tokenData
    const [{ token , allPairs  }, { token: oneHourToken  }, { token: oneDayToken  }, { token: weekToken  }, { token: twoWeekToken  }, { token: oneMonthToken  }, { token: oneYearToken  }, ] = await Promise.all([
        fetchTokenData(id),
        fetchTokenData(id, oneHourBlock),
        fetchTokenData(id, oneDayBlock),
        fetchTokenData(id, weekBlock),
        fetchTokenData(id, twoWeekBlock),
        fetchTokenData(id, oneMonthBlock),
        fetchTokenData(id, oneYearBlock), 
    ]);
    var ref, ref1;
    //#engregion
    //#region calculate the trade volume and the untracked volume before day ago
    const oneDayVolumeUSD = new (bignumber_default())((ref = token === null || token === void 0 ? void 0 : token.tradeVolumeUSD) !== null && ref !== void 0 ? ref : 0).minus((ref1 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.tradeVolumeUSD) !== null && ref1 !== void 0 ? ref1 : 0).toNumber();
    var ref2, ref3;
    const oneDayVolumeUT = new (bignumber_default())((ref2 = token === null || token === void 0 ? void 0 : token.untrackedVolumeUSD) !== null && ref2 !== void 0 ? ref2 : 0).minus((ref3 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.untrackedVolumeUSD) !== null && ref3 !== void 0 ? ref3 : 0).toNumber();
    var ref4;
    //#endregion
    //#region calculate the current price and price percent before one hour ago, one day ago, a week ago.
    const currentPrice = new (bignumber_default())((ref4 = token === null || token === void 0 ? void 0 : token.derivedETH) !== null && ref4 !== void 0 ? ref4 : 0).multipliedBy(ethPrice !== null && ethPrice !== void 0 ? ethPrice : 0);
    var ref5;
    const price_change_percentage_1h = getPercentChange(currentPrice, new (bignumber_default())((ref5 = oneHourToken === null || oneHourToken === void 0 ? void 0 : oneHourToken.derivedETH) !== null && ref5 !== void 0 ? ref5 : 0).multipliedBy(oneHourBackEthPrice !== null && oneHourBackEthPrice !== void 0 ? oneHourBackEthPrice : 0));
    var ref6;
    const price_change_percentage_24h = getPercentChange(currentPrice, new (bignumber_default())((ref6 = oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.derivedETH) !== null && ref6 !== void 0 ? ref6 : 0).multipliedBy(oneDayBackEthPrice !== null && oneDayBackEthPrice !== void 0 ? oneDayBackEthPrice : 0));
    var ref7;
    const price_change_percentage_7d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref7 = weekToken === null || weekToken === void 0 ? void 0 : weekToken.derivedETH) !== null && ref7 !== void 0 ? ref7 : 0).multipliedBy(weekBackEthPrice !== null && weekBackEthPrice !== void 0 ? weekBackEthPrice : 0));
    var ref8;
    const price_change_percentage_14d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref8 = twoWeekToken === null || twoWeekToken === void 0 ? void 0 : twoWeekToken.derivedETH) !== null && ref8 !== void 0 ? ref8 : 0).multipliedBy(twoWeekBackEthPrice !== null && twoWeekBackEthPrice !== void 0 ? twoWeekBackEthPrice : 0));
    var ref9;
    const price_change_percentage_30d_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref9 = oneMonthToken === null || oneMonthToken === void 0 ? void 0 : oneMonthToken.derivedETH) !== null && ref9 !== void 0 ? ref9 : 0).multipliedBy(oneMonthBackEthPrice !== null && oneMonthBackEthPrice !== void 0 ? oneMonthBackEthPrice : 0));
    var ref10;
    const price_change_percentage_1y_in_currency = getPercentChange(currentPrice, new (bignumber_default())((ref10 = oneYearToken === null || oneYearToken === void 0 ? void 0 : oneYearToken.derivedETH) !== null && ref10 !== void 0 ? ref10 : 0).multipliedBy(oneYearBackEthPrice !== null && oneYearBackEthPrice !== void 0 ? oneYearBackEthPrice : 0));
    //#endregion
    //#region get pairs data
    const pairsData = await getBulkPairData(allPairs === null || allPairs === void 0 ? void 0 : allPairs.map(({ id: id1  })=>id1
    ));
    //#endregion
    return {
        token,
        marketInfo: {
            current_price: currentPrice.toNumber(),
            price_change_percentage_1h,
            price_change_percentage_24h,
            price_change_percentage_7d_in_currency,
            price_change_percentage_14d_in_currency,
            price_change_percentage_30d_in_currency,
            price_change_percentage_1y_in_currency,
            price_change_percentage_1h_in_currency: price_change_percentage_1h,
            price_change_percentage_24h_in_currency: price_change_percentage_24h,
            total_volume: new (bignumber_default())(!!oneDayVolumeUSD ? oneDayVolumeUSD : oneDayVolumeUT).toNumber()
        },
        tickersInfo: Object.entries(pairsData).sort(([, a], [, z])=>{
            return z.oneDayVolumeUSD - a.oneDayVolumeUSD;
        }).map(([pairAddress, pairData])=>{
            return {
                logo_url: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
                trade_url: `https://info.uniswap.org/pair/${pairAddress}`,
                market_name: 'Uniswap (V2)',
                base_name: pairData.token0.symbol,
                target_name: pairData.token1.symbol,
                volume: pairData.oneDayVolumeUSD === 0 && pairData.oneDayVolumeUntracked ? pairData.oneDayVolumeUntracked : pairData.oneDayVolumeUSD,
                updated: new Date()
            };
        }).slice(0, 30)
    };
}
async function getBulkPairData(pairList) {
    const { utcOneDayBack  } = getTimestampForChanges();
    const oneDayBlock = await fetchBlockNumberByTimestamp(utcOneDayBack);
    const current = await fetchPairsBulk(pairList);
    const oneDayResult = await fetchPairsHistoricalBulk(pairList, oneDayBlock);
    const oneDayData = oneDayResult.reduce((obj, cur)=>({
            ...obj,
            [cur.id]: cur
        })
    , {
    });
    const pairsData = await Promise.all(current === null || current === void 0 ? void 0 : current.map(async (pair)=>{
        let oneDayHistory = oneDayData[pair.id];
        if (!oneDayHistory) {
            oneDayHistory = await fetchPairData(pair.id, oneDayBlock);
        }
        var ref;
        const oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).minus((ref = oneDayHistory === null || oneDayHistory === void 0 ? void 0 : oneDayHistory.volumeUSD) !== null && ref !== void 0 ? ref : 0).toNumber();
        var ref1;
        const oneDayVolumeUntracked = new (bignumber_default())(pair.untrackedVolumeUSD).minus((ref1 = oneDayHistory === null || oneDayHistory === void 0 ? void 0 : oneDayHistory.untrackedVolumeUSD) !== null && ref1 !== void 0 ? ref1 : 0).toNumber();
        const result = {
            ...pair,
            oneDayVolumeUSD,
            oneDayVolumeUntracked
        };
        if (!oneDayHistory && pair && (0,src/* isGreaterThan */.T1o)(pair.createdAtBlockNumber, oneDayBlock !== null && oneDayBlock !== void 0 ? oneDayBlock : 0)) {
            result.oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).toNumber();
        }
        if (!oneDayHistory && pair) {
            result.oneDayVolumeUSD = new (bignumber_default())(pair.volumeUSD).toNumber();
        }
        return result;
    }));
    return pairsData.reduce((obj, cur)=>({
            ...obj,
            [cur.id]: cur
        })
    , {
    });
}
async function uniswap_getPriceStats(id, currency, interval, startTime, endTime) {
    const [latestBlock] = await fetchLatestBlocks();
    // create an array of hour start times until we reach current hour
    // buffer by half your to catch case where graph isn't to latest block
    const timestamps = [];
    let time = startTime;
    while(time < endTime){
        timestamps.push(time);
        time += interval;
    }
    if (timestamps.length === 0) {
        return [];
    }
    let blocks = await fetchBlockNumbersByTimestamps(timestamps);
    if (!blocks || blocks.length === 0) {
        return [];
    }
    if (latestBlock) {
        blocks = blocks.filter((block)=>{
            return block.blockNumber && new (bignumber_default())(block === null || block === void 0 ? void 0 : block.blockNumber).isLessThanOrEqualTo(latestBlock);
        });
    }
    const prices = await fetchPricesByBlocks(id, blocks);
    return prices.map(({ timestamp , derivedETH , ethPrice  })=>{
        return [
            timestamp,
            new (bignumber_default())(ethPrice !== null && ethPrice !== void 0 ? ethPrice : 0).multipliedBy(derivedETH !== null && derivedETH !== void 0 ? derivedETH : 0).toNumber()
        ];
    });
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/mirrored_tokens.json
const mirrored_tokens_namespaceObject = JSON.parse('[{"id":"0x21ca39943e91d704678f5d00b6616650f066fd63","name":"Wrapped Mirror TSLA Token","symbol":"mTSLA","decimals":18,"contract_address":"0x21ca39943e91d704678f5d00b6616650f066fd63"},{"id":"0xd36932143f6ebdedd872d5fb0651f4b72fd15a84","name":"Wrapped Mirror mAAPL Token","symbol":"mAAPL","decimals":18,"contract_address":"0xd36932143f6ebdedd872d5fb0651f4b72fd15a84"},{"id":"0x41bbedd7286daab5910a1f15d12cbda839852bd7","name":"Wrapped Mirror mMSFT Token","symbol":"mMSFT","decimals":18,"contract_address":"0x41bbedd7286daab5910a1f15d12cbda839852bd7"},{"id":"0x13b02c8de71680e71f0820c996e4be43c2f57d15","name":"Wrapped Mirror mQQQ Token","symbol":"mQQQ","decimals":18,"contract_address":"0x13b02c8de71680e71f0820c996e4be43c2f57d15"},{"id":"0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7","name":"Wrapped Mirror mAMZN Token","symbol":"mAMZN","decimals":18,"contract_address":"0x0cae9e4d663793c2a2a0b211c1cf4bbca2b9caa7"},{"id":"0x1d350417d9787e000cc1b95d70e9536dcd91f373","name":"Wrapped Mirror mIAU Token","symbol":"mIAU","decimals":18,"contract_address":"0x1d350417d9787e000cc1b95d70e9536dcd91f373"},{"id":"0x56aa298a19c93c6801fdde870fa63ef75cc0af72","name":"Wrapped Mirror mBABA Token","symbol":"mBABA","decimals":18,"contract_address":"0x56aa298a19c93c6801fdde870fa63ef75cc0af72"},{"id":"0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676","name":"Wrapped Mirror mSLV Token","symbol":"mSLV","decimals":18,"contract_address":"0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676"},{"id":"0x31c63146a635eb7465e5853020b39713ac356991","name":"Wrapped Mirror mUSO Token","symbol":"mUSO","decimals":18,"contract_address":"0x31c63146a635eb7465e5853020b39713ac356991"},{"id":"0xc8d674114bac90148d11d3c1d33c61835a0f9dcd","name":"Wrapped Mirror mNFLX Token","symbol":"mNFLX","decimals":18,"contract_address":"0xc8d674114bac90148d11d3c1d33c61835a0f9dcd"},{"id":"0xedb0414627e6f1e3f082de65cd4f9c693d78cca9","name":"Wrapped Mirror mTWTR Token","symbol":"mTWTR","decimals":18,"contract_address":"0xedb0414627e6f1e3f082de65cd4f9c693d78cca9"},{"id":"0xf72fcd9dcf0190923fadd44811e240ef4533fc86","name":"Wrapped Mirror mVIXY Token","symbol":"mVIXY","decimals":18,"contract_address":"0xf72fcd9dcf0190923fadd44811e240ef4533fc86"},{"id":"0x59a921db27dd6d4d974745b7ffc5c33932653442","name":"Wrapped Mirror mGOOGL Token","symbol":"mGOOGL","decimals":18,"contract_address":"0x59a921db27dd6d4d974745b7ffc5c33932653442"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/stocks.json
const stocks_namespaceObject = JSON.parse('["AAPL","CMG","GPS","NDX","SPY","TSLA","V","VIX","NIO","GME","HP","JOBS"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/cashtag.json
const cashtag_namespaceObject = JSON.parse('["BMW","DEFI","EQ","GOLF","GUN","ITI","NFT","OK","SHELL","SUM","TOKEN"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/hashtag.json
const hashtag_namespaceObject = JSON.parse('["ALEX","ARPA","ATOM","BAND","BASH","BLACK","BMW","BOA","BOT","BTW","BURGER","COCOS","COIN","CPI","CREAM","DAPP","DATA","DEFI","DF","DICE","DNA","DOS","EARN","EDO","ELF","ENG","EQ","FARM","FETCH","FOG","FUN","FX","GAME","GAS","GN","GOLF","GUN","HOT","HUB","ICE","IQ","ITI","KAN","KING","LOOM","MAID","MATH","MEME","META","MIX","MOON","NEST","NEW","NFT","OCEAN","OK","OMG","ONE","OPEN","PAI","PEARL","PICKLE","PLAY","POLY","POWER","RING","SALT","SHELL","STAKE","SUM","SUN","SUSHI","SYS","TITAN","TOMO","TON","TRADE","TRUE","WAVES","WING","YOU","TOKEN"]');
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/hotfix.ts








const BLACKLIST_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: [
            '8410'
        ]
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: [
            'swaptoken',
            'nftx-hashmasks-index'
        ]
    },
    // use token address as id and all letters should be lowercased
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: []
    }
};
const KEYWORD_ALIAS_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            NYFI: 'n0031'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            NYFI: 'n0031'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
    }
};
const KEYWORK_ID_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            UNI: '7083',
            YAM: '7131'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            UNI: 'uniswap'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
    }
};
const ID_ADDRESS_MAP = {
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            '6747': '0x32a7c02e79c4ea1008dd6564b35f131428673c41',
            '8536': '0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074'
        },
        [src/* NetworkType.Polygon */.tds.Polygon]: {
            '8536': '0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7'
        }
    },
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        [src/* NetworkType.Ethereum */.tds.Ethereum]: {
            'crust-network': '0x32a7c02e79c4ea1008dd6564b35f131428673c41'
        },
        [src/* NetworkType.Polygon */.tds.Polygon]: {
            'mask-network': '0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7'
        }
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
    }
};
const ID_NETWORK_MAP = {
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: {
        ethereum: src/* NetworkType.Ethereum */.tds.Ethereum,
        'binance-smart-chain': src/* NetworkType.Binance */.tds.Binance,
        'polygon-pos': src/* NetworkType.Polygon */.tds.Polygon,
        arbitrum: src/* NetworkType.Arbitrum */.tds.Arbitrum,
        xdai: src/* NetworkType.xDai */.tds.xDai
    },
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: {
        '1027': src/* NetworkType.Ethereum */.tds.Ethereum,
        '1839': src/* NetworkType.Binance */.tds.Binance,
        '3890': src/* NetworkType.Polygon */.tds.Polygon,
        '5601': src/* NetworkType.xDai */.tds.xDai
    },
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: {
    }
};
function resolveAlias(keyword, dataProvider) {
    var ref;
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) return keyword;
    var ref1;
    return (ref1 = (ref = KEYWORD_ALIAS_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[keyword.toUpperCase()]) !== null && ref1 !== void 0 ? ref1 : keyword;
}
function resolveCoinId(keyword, dataProvider) {
    var ref;
    return (ref = KEYWORK_ID_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[keyword.toUpperCase()];
}
function resolveCoinAddress(id, dataProvider) {
    var ref;
    return (ref = ID_ADDRESS_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref[id];
}
function resolveNetworkType(id, dataProvider) {
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) return src/* NetworkType.Ethereum */.tds.Ethereum;
    return ID_NETWORK_MAP[dataProvider][id];
}
function isBlockedId(id, dataProvider) {
    var ref;
    return (ref = BLACKLIST_MAP[dataProvider][settings/* currentNetworkSettings.value */.fX.value]) === null || ref === void 0 ? void 0 : ref.includes(id);
}
function isBlockedKeyword(type, keyword) {
    const search = keyword.toUpperCase();
    if (stocks_namespaceObject.includes(search)) return true;
    if (type === types/* TagType.HASH */.Qy.HASH) return hashtag_namespaceObject.includes(search);
    if (type === types/* TagType.CASH */.Qy.CASH) return cashtag_namespaceObject.includes(search);
    return true;
}
function isMirroredKeyword(symbol) {
    return mirrored_tokens_namespaceObject.map((x)=>x.symbol
    ).some((x)=>x.toUpperCase() === symbol.toUpperCase()
    );
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChartDaysControl.tsx
var PriceChartDaysControl = __webpack_require__(67893);
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/trending/index.ts











/**
 * Get supported currencies of specific data provider
 * @param dataProvider
 */ async function getCurrenies(dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            const currencies = await getAllCurrenies();
            return currencies.map((x)=>({
                    id: x,
                    name: x.toUpperCase()
                })
            );
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            return Object.values(coinmarketcap_getAllCurrenies()).map((x)=>({
                    id: String(x.id),
                    name: x.symbol.toUpperCase(),
                    symbol: x.token,
                    description: x.name
                })
            );
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            return [
                {
                    id: 'usd',
                    name: 'USD',
                    symbol: '$',
                    description: 'Unite State Dollar'
                }, 
            ];
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
async function getLimitedCurrenies(dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return [
                {
                    id: 'usd',
                    name: 'USD',
                    symbol: '$',
                    description: 'Unite State Dollar'
                }, 
            ];
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            return [
                {
                    id: '2781',
                    name: 'USD',
                    symbol: '$',
                    description: 'Unite State Dollar'
                }, 
            ];
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            return [
                {
                    id: 'usd',
                    name: 'USD',
                    symbol: '$',
                    description: 'Unite State Dollar'
                }, 
            ];
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
async function getCoins(dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return getAllCoins();
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            const { data: cmcCoins  } = await coinmarketcap_getAllCoins();
            return cmcCoins.filter((x)=>x.status === 'active'
            ).map((x)=>{
                var ref;
                return {
                    id: String(x.id),
                    name: x.name,
                    symbol: x.symbol,
                    contract_address: ((ref = x.platform) === null || ref === void 0 ? void 0 : ref.name) === 'Ethereum' ? x.platform.token_address : undefined
                };
            });
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            // the uniswap has got huge tokens based (more than 2.2k) since we fetch coin info dynamically
            return [];
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
//#region check a specific coin is available on specific data provider
const coinNamespace = new Map();
async function updateCache(dataProvider, keyword) {
    try {
        // uniswap update cache with keyword
        if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) {
            if (!keyword) return;
            if (!coinNamespace.has(dataProvider)) coinNamespace.set(dataProvider, {
                supportedSymbolsSet: new Set(),
                supportedSymbolIdsMap: new Map(),
                lastUpdated: new Date()
            });
            const cache = coinNamespace.get(dataProvider);
            const coins = (await getAllCoinsByKeyword(keyword)).filter((x)=>!isBlockedId(x.id, dataProvider)
            );
            if (coins.length) {
                cache.supportedSymbolsSet.add(keyword.toLowerCase());
                cache.supportedSymbolIdsMap.set(keyword.toLowerCase(), coins);
                cache.lastUpdated = new Date();
            }
            return;
        }
        // other providers fetch all of supported coins
        const coins = (await getCoins(dataProvider)).filter((x)=>!isBlockedId(x.id, dataProvider)
        );
        const coinsGrouped = (0,lodash.groupBy)(coins, (x)=>x.symbol.toLowerCase()
        );
        coinNamespace.set(dataProvider, {
            supportedSymbolsSet: new Set(Object.keys(coinsGrouped)),
            supportedSymbolIdsMap: new Map(Object.entries(coinsGrouped).map(([symbol, coins1])=>[
                    symbol,
                    coins1
                ]
            )),
            lastUpdated: new Date()
        });
    } catch  {
        console.error('failed to update cache');
    }
}
function isCacheExipred(dataProvider) {
    var ref;
    var ref1;
    const lastUpdated = (ref1 = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.lastUpdated.getTime()) !== null && ref1 !== void 0 ? ref1 : 0;
    return Date.now() - lastUpdated > constants/* CRYPTOCURRENCY_MAP_EXPIRES_AT */.Ey;
}
async function checkAvailabilityOnDataProvider(keyword, type, dataProvider) {
    var ref;
    if (isBlockedKeyword(type, keyword)) return false;
    // for uniswap we check availability by fetching token info dynamically
    if (dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) await updateCache(dataProvider, keyword);
    else if (!coinNamespace.has(dataProvider)) await updateCache(dataProvider);
    else if (isCacheExipred(dataProvider)) updateCache(dataProvider);
    const symbols = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.supportedSymbolsSet;
    var ref1;
    return (ref1 = symbols === null || symbols === void 0 ? void 0 : symbols.has(resolveAlias(keyword, dataProvider).toLowerCase())) !== null && ref1 !== void 0 ? ref1 : false;
}
async function getAvailableDataProviders(type, keyword) {
    const networkType = (0,src/* getNetworkTypeFromChainId */._Te)(settings/* currentChainIdSettings.value */.wU.value);
    if (!networkType) return [];
    if (!type || !keyword) return (0,esm/* getEnumAsArray */.Yl)(public_api_src/* DataProvider */.FW).filter((x)=>networkType === src/* NetworkType.Ethereum */.tds.Ethereum ? true : x.value !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO
    ).map((y)=>y.value
    );
    const checked = await Promise.all((0,esm/* getEnumAsArray */.Yl)(public_api_src/* DataProvider */.FW).filter((x)=>x.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? networkType === src/* NetworkType.Ethereum */.tds.Ethereum : true
    ).map(async (x)=>[
            x.value,
            await checkAvailabilityOnDataProvider(resolveAlias(keyword, x.value), type, x.value), 
        ]
    ));
    return checked.filter(([, y])=>y
    ).map(([x])=>x
    );
}
async function getAvailableCoins(keyword, type, dataProvider) {
    var ref;
    if (!await checkAvailabilityOnDataProvider(keyword, type, dataProvider)) return [];
    const ids = (ref = coinNamespace.get(dataProvider)) === null || ref === void 0 ? void 0 : ref.supportedSymbolIdsMap;
    var ref1;
    return (ref1 = ids === null || ids === void 0 ? void 0 : ids.get(resolveAlias(keyword, dataProvider).toLowerCase())) !== null && ref1 !== void 0 ? ref1 : [];
}
//#endregion
//#region get trending info
async function getCoinTrending(id, currency, dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            const info = await getCoinInfo(id);
            const platform_url = `https://www.coingecko.com/en/coins/${info.id}`;
            const twitter_url = info.links.twitter_screen_name ? `https://twitter.com/${info.links.twitter_screen_name}` : '';
            const facebook_url = info.links.facebook_username ? `https://t.me/${info.links.facebook_username}` : '';
            const telegram_url = info.links.telegram_channel_identifier ? `https://t.me/${info.links.telegram_channel_identifier}` : '';
            var ref, ref1;
            return {
                lastUpdated: info.last_updated,
                dataProvider,
                currency,
                coin: {
                    id,
                    name: info.name,
                    symbol: info.symbol.toUpperCase(),
                    is_mirrored: isMirroredKeyword(info.symbol),
                    // TODO:
                    // use current language setting
                    description: info.description.en,
                    market_cap_rank: info.market_cap_rank,
                    image_url: info.image.small,
                    tags: info.categories.filter(Boolean),
                    announcement_urls: info.links.announcement_url.filter(Boolean),
                    community_urls: [
                        twitter_url,
                        facebook_url,
                        telegram_url,
                        info.links.subreddit_url,
                        ...info.links.chat_url,
                        ...info.links.official_forum_url, 
                    ].filter(Boolean),
                    source_code_urls: Object.values(info.links.repos_url).flatMap((x)=>x
                    ),
                    home_urls: info.links.homepage.filter(Boolean),
                    blockchain_urls: [
                        platform_url,
                        ...info.links.blockchain_site
                    ].filter(Boolean),
                    platform_url,
                    facebook_url,
                    twitter_url,
                    telegram_url,
                    contract_address: (ref1 = resolveCoinAddress(id, public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO)) !== null && ref1 !== void 0 ? ref1 : info.platforms[(ref = Object.keys(info.platforms).find((x)=>resolveNetworkType(x, public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO) === settings/* currentNetworkSettings.value */.fX.value
                    )) !== null && ref !== void 0 ? ref : '']
                },
                market: Object.entries(info.market_data).reduce((accumulated, [key, value])=>{
                    var _id;
                    if (value && typeof value === 'object') accumulated[key] = (_id = value[currency.id]) !== null && _id !== void 0 ? _id : 0;
                    else accumulated[key] = value;
                    return accumulated;
                }, {
                }),
                tickers: info.tickers.slice(0, 30).map((x)=>({
                        logo_url: x.market.logo,
                        trade_url: x.trade_url,
                        market_name: x.market.name,
                        base_name: x.base,
                        target_name: x.target,
                        price: x.converted_last.usd,
                        volume: x.converted_volume.usd,
                        score: x.trust_score,
                        updated: new Date(x.timestamp)
                    })
                )
            };
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            var ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
            const currencyName = currency.name.toUpperCase();
            const [{ data: coinInfo , status  }, { data: quotesInfo  }, { data: market  }] = await Promise.all([
                coinmarketcap_getCoinInfo(id),
                getQuotesInfo(id, currencyName),
                getLatestMarketPairs(id, currencyName), 
            ]);
            var _twitter, _reddit, _chat, _explorer, _tags, ref11;
            const trending = {
                lastUpdated: status.timestamp,
                platform: coinInfo.platform,
                coin: {
                    id,
                    name: coinInfo.name,
                    symbol: coinInfo.symbol,
                    is_mirrored: isMirroredKeyword(coinInfo.symbol),
                    announcement_urls: (ref2 = coinInfo.urls.announcement) === null || ref2 === void 0 ? void 0 : ref2.filter(Boolean),
                    tech_docs_urls: (ref3 = coinInfo.urls.technical_doc) === null || ref3 === void 0 ? void 0 : ref3.filter(Boolean),
                    message_board_urls: (ref4 = coinInfo.urls.message_board) === null || ref4 === void 0 ? void 0 : ref4.filter(Boolean),
                    source_code_urls: (ref5 = coinInfo.urls.source_code) === null || ref5 === void 0 ? void 0 : ref5.filter(Boolean),
                    community_urls: [
                        ...(_twitter = coinInfo.urls.twitter) !== null && _twitter !== void 0 ? _twitter : [],
                        ...(_reddit = coinInfo.urls.reddit) !== null && _reddit !== void 0 ? _reddit : [],
                        ...(_chat = coinInfo.urls.chat) !== null && _chat !== void 0 ? _chat : [], 
                    ].filter(Boolean),
                    home_urls: (ref6 = coinInfo.urls.website) === null || ref6 === void 0 ? void 0 : ref6.filter(Boolean),
                    blockchain_urls: [
                        `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                        ...(_explorer = coinInfo.urls.explorer) !== null && _explorer !== void 0 ? _explorer : [], 
                    ].filter(Boolean),
                    tags: (_tags = coinInfo.tags) !== null && _tags !== void 0 ? _tags : void 0,
                    image_url: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`,
                    platform_url: `https://coinmarketcap.com/currencies/${coinInfo.slug}/`,
                    twitter_url: (ref7 = coinInfo.urls.twitter) === null || ref7 === void 0 ? void 0 : ref7.find((x)=>x.includes('twitter')
                    ),
                    telegram_url: (ref8 = coinInfo.urls.chat) === null || ref8 === void 0 ? void 0 : ref8.find((x)=>x.includes('telegram')
                    ),
                    market_cap_rank: quotesInfo === null || quotesInfo === void 0 ? void 0 : (ref9 = quotesInfo[id]) === null || ref9 === void 0 ? void 0 : ref9.cmc_rank,
                    description: coinInfo.description,
                    contract_address: (ref11 = resolveCoinAddress(id, public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP)) !== null && ref11 !== void 0 ? ref11 : (ref10 = coinInfo.contract_address.find((x)=>resolveNetworkType(x.platform.coin.id, public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP) === settings/* currentNetworkSettings.value */.fX.value
                    )) === null || ref10 === void 0 ? void 0 : ref10.contract_address
                },
                currency,
                dataProvider,
                tickers: market.market_pairs.map((pair)=>({
                        logo_url: `https://s2.coinmarketcap.com/static/img/exchanges/32x32/${pair.exchange.id}.png`,
                        trade_url: pair.market_url,
                        market_name: pair.exchange.name,
                        market_reputation: pair.market_reputation,
                        base_name: pair.market_pair_base.exchange_symbol,
                        target_name: pair.market_pair_quote.exchange_symbol,
                        price: pair.market_pair_base.currency_id === market.id ? pair.quote[currencyName].price : pair.quote[currencyName].price_quote,
                        volume: pair.quote[currencyName].volume_24h,
                        score: String(pair.market_score),
                        updated: new Date(pair.quote[currencyName].last_updated)
                    })
                ).sort((a, z)=>{
                    if (a.market_reputation !== z.market_reputation) return z.market_reputation - a.market_reputation // reputation from high to low
                    ;
                    if (a.price.toFixed(2) !== z.price.toFixed(2)) return z.price - a.price // price from high to low
                    ;
                    return z.volume - a.volume // volume from high to low
                    ;
                })
            };
            const quotesInfo_ = quotesInfo === null || quotesInfo === void 0 ? void 0 : quotesInfo[id];
            var _total_supply, _total_supply1, _max_supply;
            if (quotesInfo_) trending.market = {
                circulating_supply: (_total_supply = quotesInfo_.total_supply) !== null && _total_supply !== void 0 ? _total_supply : void 0,
                total_supply: (_total_supply1 = quotesInfo_.total_supply) !== null && _total_supply1 !== void 0 ? _total_supply1 : void 0,
                max_supply: (_max_supply = quotesInfo_.max_supply) !== null && _max_supply !== void 0 ? _max_supply : void 0,
                market_cap: quotesInfo_.quote[currencyName].market_cap,
                current_price: quotesInfo_.quote[currencyName].price,
                total_volume: quotesInfo_.quote[currencyName].volume_24h,
                price_change_percentage_1h: quotesInfo_.quote[currencyName].percent_change_1h,
                price_change_percentage_24h: quotesInfo_.quote[currencyName].percent_change_24h,
                price_change_percentage_1h_in_currency: quotesInfo_.quote[currencyName].percent_change_1h,
                price_change_percentage_24h_in_currency: quotesInfo_.quote[currencyName].percent_change_24h,
                price_change_percentage_7d_in_currency: quotesInfo_.quote[currencyName].percent_change_7d
            };
            return trending;
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            const { token , marketInfo , tickersInfo  } = await uniswap_getCoinInfo(id);
            var ref12;
            return {
                currency,
                dataProvider: public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO,
                market: marketInfo,
                coin: {
                    id,
                    name: token === null || token === void 0 ? void 0 : token.name,
                    symbol: token === null || token === void 0 ? void 0 : token.symbol,
                    decimals: Number(token === null || token === void 0 ? void 0 : token.decimals),
                    is_mirrored: isMirroredKeyword((ref12 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref12 !== void 0 ? ref12 : ''),
                    blockchain_urls: [
                        `https://info.uniswap.org/token/${id}`,
                        `https://etherscan.io/address/${id}`
                    ],
                    image_url: `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${id}/logo.png`,
                    platform_url: `https://info.uniswap.org/token/${id}`,
                    contract_address: id
                },
                tickers: tickersInfo,
                lastUpdated: ''
            };
        default:
            (0,esm/* unreachable */.t1)(dataProvider);
    }
}
async function getCoinTrendingById(id, currency, dataProvider) {
    return getCoinTrending(id, currency, dataProvider);
}
async function getCoinTrendingByKeyword(keyword, tagType, currency, dataProvider) {
    // check if the keyword is supported by given data provider
    const coins = await getAvailableCoins(keyword, tagType, dataProvider);
    if (!coins.length) return null;
    var ref;
    // prefer coins on the etherenum network
    const coin = (ref = coins.find((x)=>x.contract_address
    )) !== null && ref !== void 0 ? ref : (0,lodash.first)(coins);
    if (!coin) return null;
    var ref1;
    return getCoinTrendingById((ref1 = resolveCoinId(resolveAlias(keyword, dataProvider), dataProvider)) !== null && ref1 !== void 0 ? ref1 : coin.id, currency, dataProvider);
}
//#endregion
//#region get price stats info
async function trending_getPriceStats(id, currency, days, dataProvider) {
    switch(dataProvider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return (await getPriceStats(id, currency.id, days === PriceChartDaysControl/* Days.MAX */.h.MAX ? 11430 : days)).prices;
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            const interval = (()=>{
                if (days === 0) return '1d' // max
                ;
                if (days > 365) return '1d' // 1y
                ;
                if (days > 90) return '2h' // 3m
                ;
                if (days > 30) return '1h' // 1m
                ;
                if (days > 7) return '15m' // 1w
                ;
                return '5m';
            })();
            const endDate = new Date();
            const startDate = new Date();
            startDate.setDate(startDate.getDate() - days);
            const stats = await getHistorical(id, currency.name.toUpperCase(), days === PriceChartDaysControl/* Days.MAX */.h.MAX ? constants/* BTC_FIRST_LEGER_DATE */.zl : startDate, endDate, interval);
            if (stats.data.is_active === 0) return [];
            return Object.entries(stats.data).map(([date, x])=>[
                    date,
                    x[currency.name.toUpperCase()][0]
                ]
            );
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            const endTime = new Date();
            const startTime = new Date();
            startTime.setDate(endTime.getDate() - days);
            const uniswap_interval = (()=>{
                if (days === 0 || days > 365) return 86400 // max
                ;
                if (days > 90) return 7200 // 1y
                ;
                if (days > 30) return 3600 // 3m
                ;
                if (days > 7) return 900 // 1w
                ;
                return 300 // 5m
                ;
            })();
            return uniswap_getPriceStats(id, currency, uniswap_interval, Math.floor((days === PriceChartDaysControl/* Days.MAX */.h.MAX ? constants/* BTC_FIRST_LEGER_DATE.getTime */.zl.getTime() : startTime.getTime()) / 1000), Math.floor(endTime.getTime() / 1000));
        default:
            return [];
    }
} //#endregion

// EXTERNAL MODULE: ./src/plugins/Trader/constants/dodo.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
var dodo = __webpack_require__(45088);
=======
var dodo = __webpack_require__(85688);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
;// CONCATENATED MODULE: ./src/plugins/Trader/apis/dodo/index.ts




async function swapRoute(request) {
    var ref, ref1;
    const response = await fetch(dist_default()(dodo/* DODO_BASE_URL */.Z, '/dodoapi/getdodoroute', {
        chainId: request.chainId,
        slippage: request.slippage,
        fromTokenAddress: (ref = request.fromToken) === null || ref === void 0 ? void 0 : ref.address,
        fromTokenDecimals: request.fromToken.decimals,
        toTokenAddress: (ref1 = request.toToken) === null || ref1 === void 0 ? void 0 : ref1.address,
        toTokenDecimals: request.toToken.decimals,
        fromAmount: request.fromAmount,
        userAddr: request.userAddr,
        rpc: request.rpc
    }));
    const payload = await response.json();
    if (payload.status !== 200) {
        var _data;
        throw new Error((_data = payload.data) !== null && _data !== void 0 ? _data : 'Unknown Error');
    }
    var _decimals;
    return {
        ...payload.data,
        fromAmount: new (bignumber_default())(request.fromAmount).dividedBy((0,src/* pow10 */.wAG)((_decimals = request.fromToken.decimals) !== null && _decimals !== void 0 ? _decimals : 0)).toNumber(),
        value: request.isNativeSellToken ? request.fromAmount : '0',
        slippage: request.slippage,
        fromTokenSymbol: request.fromToken.symbol,
        toTokenSymbol: request.toToken.symbol
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/apis/index.ts








;// CONCATENATED MODULE: ./src/plugins/Trader/services.ts






settings/* currentChainIdSettings.addListener */.wU.addListener((chainId)=>{
    const networkType = (0,src/* getNetworkTypeFromChainId */._Te)(chainId);
    if (!networkType) return;
    switch(networkType){
        case src/* NetworkType.Ethereum */.tds.Ethereum:
            Trader_settings/* currentTradeProviderSettings.value */.de.value = Trader_settings/* ethereumNetworkTradeProviderSettings.value */.SN.value;
            break;
        case src/* NetworkType.Binance */.tds.Binance:
            Trader_settings/* currentTradeProviderSettings.value */.de.value = Trader_settings/* binanceNetworkTradeProviderSettings.value */.gk.value;
            if (Trader_settings/* currentDataProviderSettings.value */.gG.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) Trader_settings/* currentDataProviderSettings.value */.gG.value = public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO;
            break;
        case src/* NetworkType.Polygon */.tds.Polygon:
            Trader_settings/* currentTradeProviderSettings.value */.de.value = Trader_settings/* polygonNetworkTradeProviderSettings.value */.hn.value;
            if (Trader_settings/* currentDataProviderSettings.value */.gG.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) Trader_settings/* currentDataProviderSettings.value */.gG.value = public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO;
            break;
        case src/* NetworkType.Arbitrum */.tds.Arbitrum:
            Trader_settings/* currentTradeProviderSettings.value */.de.value = public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3;
            if (Trader_settings/* currentDataProviderSettings.value */.gG.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) Trader_settings/* currentDataProviderSettings.value */.gG.value = public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP;
            break;
        case src/* NetworkType.xDai */.tds.xDai:
            Trader_settings/* currentTradeProviderSettings.value */.de.value = public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP;
            if (Trader_settings/* currentDataProviderSettings.value */.gG.value === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO) Trader_settings/* currentDataProviderSettings.value */.gG.value = public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP;
            break;
        default:
            (0,esm/* unreachable */.t1)(networkType);
    }
});
Trader_settings/* currentTradeProviderSettings.addListener */.de.addListener((tradeProvier)=>{
    const networkType = (0,src/* getNetworkTypeFromChainId */._Te)(settings/* currentChainIdSettings.value */.wU.value);
    if (!networkType) return;
    switch(networkType){
        case src/* NetworkType.Ethereum */.tds.Ethereum:
            Trader_settings/* ethereumNetworkTradeProviderSettings.value */.SN.value = tradeProvier;
            break;
        case src/* NetworkType.Binance */.tds.Binance:
            Trader_settings/* binanceNetworkTradeProviderSettings.value */.gk.value = tradeProvier;
            break;
        case src/* NetworkType.Polygon */.tds.Polygon:
            Trader_settings/* polygonNetworkTradeProviderSettings.value */.hn.value = tradeProvier;
            break;
        case src/* NetworkType.Arbitrum */.tds.Arbitrum:
            Trader_settings/* arbitrumNetworkTradeProviderSettings.value */.We.value = tradeProvier;
            break;
        case src/* NetworkType.xDai */.tds.xDai:
            Trader_settings/* xdaiNetworkTradeProviderSettings.value */.EH.value = tradeProvier;
            break;
        default:
            (0,esm/* unreachable */.t1)(networkType);
    }
});


/***/ }),

/***/ 67047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings),
/* harmony export */   "de": () => (/* binding */ currentTradeProviderSettings),
/* harmony export */   "SN": () => (/* binding */ ethereumNetworkTradeProviderSettings),
/* harmony export */   "hn": () => (/* binding */ polygonNetworkTradeProviderSettings),
/* harmony export */   "gk": () => (/* binding */ binanceNetworkTradeProviderSettings),
/* harmony export */   "We": () => (/* binding */ arbitrumNetworkTradeProviderSettings),
/* harmony export */   "EH": () => (/* binding */ xdaiNetworkTradeProviderSettings),
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "rn": () => (/* binding */ getCurrentDataProviderGeneralSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37131);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34513);
=======
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45154);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93002);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95142);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
/**
 * The default trader provider
 */ const currentTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_secondary')
});
const ethereumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+ethereum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>''
});
const polygonNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+polygon+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP, {
    primary: ()=>''
});
const binanceNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+binance+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP, {
    primary: ()=>''
});
const arbitrumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+arbitrum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3, {
    primary: ()=>''
});
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
=======
const xdaiNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+xdai+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP, {
    primary: ()=>''
});
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
const uniswapV2Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v2`, '');
const uniswapV3Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v3`, '');
const zrxSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+zrx`, '');
const sushiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sushiswap`, '');
const sashimiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sashimiswap`, '');
const qucikswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+quickswap`, '');
const pancakeswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+pancakeswap`, '');
const balancerSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+balancer`, '');
const dodoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+dodo`, '');
/**
 * The general settings of specific tarde provider
 */ function getCurrentTradeProviderGeneralSettings(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return uniswapV2Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return uniswapV3Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.ZRX */ .z4.ZRX:
            return zrxSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return sushiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return sashimiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return qucikswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return pancakeswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return balancerSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
            return dodoSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
    }
}
//#endregion
//#region data provider general settings
const coinGeckoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoSettings`, '');
const coinMarketCapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapSettings`, '');
const coinUniswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapSettings`, '');
/**
 * The general settings of specific data provider
 */ function getCurrentDataProviderGeneralSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
//#region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniSwap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+approvedTokens`, '[]');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
/***/ 26428:
=======
/***/ 66632:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "z4": () => (/* reexport */ src/* TradeProvider */.z4),
  "tB": () => (/* reexport */ TradeStrategy),
  "Os": () => (/* reexport */ WarningLevel),
  "Zy": () => (/* reexport */ ZrxTradePool)
});

// UNUSED EXPORTS: NetworkType

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var src = __webpack_require__(95142);
;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts

var WarningLevel;
(function(WarningLevel1) {
    WarningLevel1[WarningLevel1["LOW"] = 1] = "LOW";
    WarningLevel1[WarningLevel1["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel1[WarningLevel1["HIGH"] = 3] = "HIGH";
    WarningLevel1[WarningLevel1["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel1[WarningLevel1["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {
}));
var ZrxTradePool;
(function(ZrxTradePool1) {
    ZrxTradePool1["ZRX"] = '0x';
    ZrxTradePool1["ACryptoS"] = 'ACryptoS';
    ZrxTradePool1["ApeSwap"] = 'ApeSwap';
    ZrxTradePool1["BakerySwap"] = 'BakerySwap';
    ZrxTradePool1["Balancer"] = 'Balancer';
    ZrxTradePool1["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool1["Bancor"] = 'Bancor';
    ZrxTradePool1["Belt"] = 'Belt';
    ZrxTradePool1["CafeSwap"] = 'CafeSwap';
    ZrxTradePool1["CheeseSwap"] = 'CheeseSwap';
    ZrxTradePool1["ComethSwap"] = 'ComethSwap';
    ZrxTradePool1["Component"] = 'Component';
    ZrxTradePool1["Cream"] = 'CREAM';
    ZrxTradePool1["CryptoCom"] = 'CryptoCom';
    ZrxTradePool1["Curve"] = 'Curve';
    ZrxTradePool1["CurveV2"] = 'Curve_V2';
    ZrxTradePool1["Dfyn"] = 'Dfyn';
    ZrxTradePool1["Dodo"] = 'DODO';
    ZrxTradePool1["DodoV2"] = 'DODO_V2';
    ZrxTradePool1["Ellipsis"] = 'Ellipsis';
    ZrxTradePool1["Eth2Dai"] = 'Eth2Dai';
    ZrxTradePool1["FirebirdOneSwap"] = 'FirebirdOneSwap';
    ZrxTradePool1["IronSwap"] = 'IronSwap';
    ZrxTradePool1["JetSwap"] = 'JetSwap';
    ZrxTradePool1["JulSwap"] = 'JulSwap';
    ZrxTradePool1["Kyber"] = 'Kyber';
    ZrxTradePool1["KyberDMM"] = 'KyberDMM';
    ZrxTradePool1["Lido"] = 'Lido';
    ZrxTradePool1["Linkswap"] = 'Linkswap';
    ZrxTradePool1["LiquidityProvider"] = 'LiquidityProvider';
    ZrxTradePool1["MStable"] = 'mStable';
    ZrxTradePool1["MakerPsm"] = 'MakerPsm';
    ZrxTradePool1["Mesh"] = 'Mesh';
    ZrxTradePool1["Mooniswap"] = 'Mooniswap';
    ZrxTradePool1["MultiBridge"] = 'MultiBridge';
    ZrxTradePool1["MultiHop"] = 'MultiHop';
    ZrxTradePool1["Native"] = 'Native';
    ZrxTradePool1["Nerve"] = 'Nerve';
    ZrxTradePool1["Oasis"] = 'Oasis';
    ZrxTradePool1["PancakeSwap"] = 'PancakeSwap';
    ZrxTradePool1["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool1["QuickSwap"] = 'QuickSwap';
    ZrxTradePool1["Saddle"] = 'Saddle';
    ZrxTradePool1["Shell"] = 'Shell';
    ZrxTradePool1["Smoothy"] = 'Smoothy';
    ZrxTradePool1["SnowSwap"] = 'SnowSwap';
    ZrxTradePool1["SushiSwap"] = 'SushiSwap';
    ZrxTradePool1["Swerve"] = 'Swerve';
    ZrxTradePool1["Uniswap"] = 'Uniswap';
    ZrxTradePool1["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool1["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool1["WaultSwap"] = 'WaultSwap';
    ZrxTradePool1["xSigma"] = 'xSigma';
})(ZrxTradePool || (ZrxTradePool = {
}));
var TradeStrategy;
(function(TradeStrategy1) {
    TradeStrategy1[TradeStrategy1["ExactIn"] = 0] = "ExactIn";
    TradeStrategy1[TradeStrategy1["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {
}));
var TokenPanelType;
(function(TokenPanelType1) {
    TokenPanelType1[TokenPanelType1["Input"] = 0] = "Input";
    TokenPanelType1[TokenPanelType1["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType1) {
    TagType1[TagType1["CASH"] = 1] = "CASH";
    TagType1[TagType1["HASH"] = 2] = "HASH";
})(TagType || (TagType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts








/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J3": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.J3),
/* harmony export */   "UB": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.UB),
/* harmony export */   "Ag": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.Ag),
/* harmony export */   "js": () => (/* reexport safe */ _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__.js),
/* harmony export */   "s": () => (/* binding */ OPENSEA_API_KEY)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2905);

const OPENSEA_API_KEY = 'c38fe2446ee34f919436c32db480a2e3';


/***/ }),

/***/ 93975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aK": () => (/* binding */ currentAccountSettings),
  "NH": () => (/* binding */ currentBalanceSettings),
  "gi": () => (/* binding */ currentBlockNumberSettings),
  "wU": () => (/* binding */ currentChainIdSettings),
  "Ki": () => (/* binding */ currentCollectibleDataProviderSettings),
  "cK": () => (/* binding */ currentEtherPriceSettings),
  "ak": () => (/* binding */ currentGasNowSettings),
  "rP": () => (/* binding */ currentGasPriceSettings),
  "fX": () => (/* binding */ currentNetworkSettings),
  "U8": () => (/* binding */ currentNonceSettings),
  "a4": () => (/* binding */ currentPortfolioDataProviderSettings),
  "t1": () => (/* binding */ currentProviderSettings)
});

// EXTERNAL MODULE: ./src/settings/createSettings.ts
var createSettings = __webpack_require__(45154);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Wallet/constants.ts
var constants = __webpack_require__(4111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/gasnow.ts


function connectGasNow() {
    const GAS_NOW_API = 'wss://www.gasnow.org/ws/gasprice';
    const gasNowSocket = new WebSocket(GAS_NOW_API);
    let timer;
    const onOpen = ()=>{
        if (timer) clearTimeout(timer);
        console.log('GasNow websocket connected.');
    };
    const onMessage = (event)=>{
        const gasNow = JSON.parse(event.data).data;
        currentGasNowSettings.value = (0,lodash.omit)(gasNow, [
            'timestamp'
        ]);
    };
    const onClose = ()=>{
        console.log('GasNow WebSocket closed, try to reconnect...');
        currentGasNowSettings.value = null;
        timer = setTimeout(connectGasNow, 1000);
    };
    gasNowSocket.addEventListener('open', onOpen);
    gasNowSocket.addEventListener('message', onMessage);
    gasNowSocket.addEventListener('close', onClose);
    return ()=>{
        gasNowSocket.removeEventListener('open', onOpen);
        gasNowSocket.removeEventListener('message', onMessage);
        gasNowSocket.removeEventListener('close', onClose);
        gasNowSocket.close();
    };
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/plugins/Wallet/apis/coingecko.ts



const ETH_PRICE_POLLING_DELAY = 30 /* seconds */  * 1000 /* milliseconds */ ;
async function fetchTokenPrice(token = 'ethereum', currency = 'usd') {
    const data = await service/* default.Helper.fetchJson */.ZP.Helper.fetchJson(`https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=${currency}`);
    if (!data) return 0;
    var _currency;
    return (_currency = data[token][currency]) !== null && _currency !== void 0 ? _currency : 0;
}
function trackEtherPrice() {
    const { reset  } = (0,shared_src.pollingTask)(async ()=>{
        currentEtherPriceSettings.value = await fetchTokenPrice('ethereum', 'usd');
        return false;
    }, {
        autoStart: true,
        delay: ETH_PRICE_POLLING_DELAY
    });
    return reset;
}

// EXTERNAL MODULE: ./src/utils/side-effects.ts
var side_effects = __webpack_require__(36712);
;// CONCATENATED MODULE: ./src/plugins/Wallet/settings.ts








const currentAccountSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+selectedWalletAddress`, '', {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * The network type of the selected wallet
 */ const currentNetworkSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+selectedWalletNetwork`, src/* NetworkType.Ethereum */.tds.Ethereum, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * The provider type of the selected wallet
 */ const currentProviderSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+selectedWalletProvider`, src/* ProviderType.Maskbook */.lP_.Maskbook, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * The default portfolio data provider
 */ const currentPortfolioDataProviderSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+portfolioProvider`, src/* PortfolioProvider.DEBANK */.g38.DEBANK, {
    primary: ()=>i18n_next/* i18n.t */.a.t('plugin_wallet_settings_portfolio_data_source_primary')
    ,
    secondary: ()=>i18n_next/* i18n.t */.a.t('plugin_wallet_settings_portfolio_data_source_secondary')
});
/**
 * The default collectible data provider
 */ const currentCollectibleDataProviderSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+collectibleProvider`, src/* CollectibleProvider.OPENSEAN */.wgL.OPENSEAN, {
    primary: ()=>i18n_next/* i18n.t */.a.t('plugin_wallet_settings_collectible_data_source_primary')
    ,
    secondary: ()=>i18n_next/* i18n.t */.a.t('plugin_wallet_settings_collectible_data_source_secondary')
});
/**
 * Chain Id
 */ const currentChainIdSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+chainId`, src/* ChainId.Mainnet */.a_e.Mainnet, {
    primary: ()=>i18n_next/* i18n.t */.a.t('settings_choose_eth_network')
    ,
    secondary: ()=>'This only affects the built-in wallet.'
});
/**
 * Block number
 */ const currentBlockNumberSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+blockNumber`, 0, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * Balance
 */ const currentBalanceSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+balance`, '0', {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * Nonce
 */ const currentNonceSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+nonce`, 0, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
/**
 * Gas Price
 */ const currentGasPriceSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+gasPrice`, 0, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
}, (a, b)=>(0,lodash.isEqual)(a, b)
);
/**
 * Gas Now
 */ const currentGasNowSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+gasNow`, null, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
}, (a, b)=>(0,lodash.isEqual)(a, b)
);
/**
 * Ether Price in USD
 */ const currentEtherPriceSettings = (0,createSettings/* createGlobalSettings */.TI)(`${constants/* PLUGIN_IDENTIFIER */.J3}+etherPriceUSD`, 0, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
const effect = (0,side_effects/* startEffects */.Wu)(/* unsupported import.meta.webpackHot */ undefined);
effect(()=>{
    try {
        return connectGasNow();
    } catch  {
        return ()=>{
        };
    }
});
effect(()=>trackEtherPrice()
);


/***/ }),

/***/ 55:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    /** The Mask Network v2 main switch. */ v2_enabled: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    /** In E2E, prefer open shadow root so we can test it. */ using_ShadowDOM_attach_mode:  false ? 0 : 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_native_injected_script_declaration: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ requires_injected_script_run_directly: "safari" === 'firefox',
    support_eth_network_switch: betaOrInsiderOnly,
    //#region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_support_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    //#endregion
    EIP1159_enabled: false,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4216.js
=======
    xdai_enabled: true,
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5480.js
    //#region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     * - E2E: Cannot click the "allow" button (maybe a bug) in the Puppeteer
     */ no_web_extension_dynamic_permission_request: is_iOSApp || "safari" === 'E2E',
    has_no_WebRTC:  true || 0,
    //#endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 8686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Headers": () => (/* binding */ Headers),
/* harmony export */   "Request": () => (/* binding */ Request),
/* harmony export */   "Response": () => (/* binding */ Response),
/* harmony export */   "DOMException": () => (/* binding */ DOMException),
/* harmony export */   "fetch": () => (/* binding */ fetch)
/* harmony export */ });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name: "' + name + '"')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = options.statusText === undefined ? '' : '' + options.statusText
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ })

}]);