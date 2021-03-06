(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6349],{

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(81758);

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

/***/ 81758:
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

/***/ 45007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const CopyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('copy', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M16.115 8h-6.23C9.12 8 8.5 8.62 8.5 9.385v6.23C8.5 16.38 9.12 17 9.885 17h6.23c.765 0 1.385-.62 1.385-1.385v-6.23C17.5 8.62 16.88 8 16.115 8z",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M5.577 12h-.692A1.385 1.385 0 013.5 10.615v-6.23A1.385 1.385 0 014.885 3h6.23A1.385 1.385 0 0112.5 4.385v.692",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 25722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const DeleteIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DeleteIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.334 1.334 0 011.334 1.334V4m2 0v9.333a1.334 1.334 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 16789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MasksIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const MasksIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MasksIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 9689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js + 1 modules
var debounce = __webpack_require__(82617);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,dist/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 40127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45925);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21202);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61751);
/* harmony import */ var _InjectedComponents_SetupGuide_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51212);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41529);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9689);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide_types__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: currentPersonaIdentifier === null || currentPersonaIdentifier === void 0 ? void 0 : currentPersonaIdentifier.toText()
    });
};
function usePersonaConnectStatus() {
    const personas = (0,_useMyPersonas__WEBPACK_IMPORTED_MODULE_8__/* .useMyPersonas */ .n)();
    const lastRecognized = (0,_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useLastRecognizedIdentity */ .FB)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier, lastRecognized.identifier.userId);
        let connected = false;
        personas.forEach((p)=>{
            p.identifier;
            if (p.linkedProfiles.get(id)) {
                connected = true;
            }
        });
        const action = !personas.length ? createPersona : !connected ? connectPersona : null;
        return {
            connected,
            action,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized,
        _social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI */ .LM
    ]);
}


/***/ }),

/***/ 51212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SetupGuideStep)
/* harmony export */ });
var SetupGuideStep;
(function(SetupGuideStep) {
    SetupGuideStep["FindUsername"] = 'find-username';
    SetupGuideStep["VerifyOnNextID"] = 'next-id-verify';
    SetupGuideStep["PinExtension"] = 'pin-extension';
    SetupGuideStep["Close"] = 'close';
})(SetupGuideStep || (SetupGuideStep = {}));


/***/ }),

/***/ 57464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(90171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(99537);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(24218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(18082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(41457);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(15193);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx




function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === shared_base_src/* EnhanceableSite.Minds */.Jk.Minds || snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
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
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* ErrorBoundary */.SV, {
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
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        });
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 96288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30592);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87409);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box'
        },
        search: {
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function InputBox(props) {
    const { label , children , onChange , value  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setVisible((v)=>!(!value || value.length === 0)
        );
    }, [
        value
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.root,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        className: classes.input,
                        placeholder: label,
                        value: value,
                        onChange: (e)=>{
                            setVisible(e.target.value.length !== 0);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 26042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1325);
/* harmony import */ var _InputBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96288);



function SearchInput(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputBox__WEBPACK_IMPORTED_MODULE_1__/* .InputBox */ .W, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .SearchIcon */ .W, {}),
        ...props
    }));
}


/***/ }),

/***/ 62835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ./src/plugins/NextID/base.ts + 7 modules
var base = __webpack_require__(16409);
// EXTERNAL MODULE: ./src/plugins/NextID/constants.ts
var constants = __webpack_require__(96214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.6_2537b8183b5267e659a67a26d5d4f10f/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(92452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.6_2537b8183b5267e659a67a26d5d4f10f/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(26530);
;// CONCATENATED MODULE: ./src/plugins/NextID/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.mask.next_id", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.mask.next_id")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ./src/plugins/NextID/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(13152);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(92093);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(16789);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox.tsx
var WalletStatusBox = __webpack_require__(57393);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(16576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(71997);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindPanelUI.tsx












const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        persona: {
            padding: theme.spacing(1.7),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px',
            width: 48,
            height: 48
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.text.primary,
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            color: theme.palette.text.primary
        },
        deneText: {
            color: '#60DFAB'
        },
        done: {
            background: '#60DFAB !important',
            color: `${src/* MaskColorVar.white */.ZN.white} !important`,
            opacity: '1 !important'
        },
        loadingIcon: {
            position: 'relative',
            right: -6
        },
        error: {
            marginTop: '14px',
            color: (0,src/* getMaskColor */.nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5),
            borderLeft: `solid 2px ${(0,src/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const SUPPORTED_PLUGINS = [
    plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
];
const BindPanelUI = /*#__PURE__*/ (0,react.memo)(({ onPersonaSign , onWalletSign , currentPersona , signature , isBound , title , onClose , open , isCurrentAccount  })=>{
    const t = useI18N();
    const { classes  } = useStyles();
    const pluginId = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const isSupported = SUPPORTED_PLUGINS.includes(pluginId);
    const isWalletSigned = !!signature.wallet.value;
    const isPersonaSigned = !!signature.persona.value;
    var _compressedPoint;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        title: title,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            style: {
                padding: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.wallet()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isWalletSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "1"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "body2",
                                            component: "span",
                                            children: [
                                                ' ',
                                                "/ 2",
                                                ' '
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {}),
                        isBound && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.bind_wallet_bound_error()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                disabled: !isCurrentAccount || isBound || !!isWalletSigned || !isSupported,
                                className: isWalletSigned ? classes.done : '',
                                loading: signature.wallet.loading,
                                variant: "contained",
                                onClick: onWalletSign,
                                endIcon: isWalletSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: src/* MaskColorVar.white */.ZN.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                                children: isWalletSigned ? t.done() : t.wallet_sign()
                            })
                        })
                    ]
                }),
                !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.error,
                    children: t.unsupported_network()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            alignItems: "center",
                            direction: "row",
                            justifyContent: "space-between",
                            mb: 1.25,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.subTitle,
                                    children: t.persona()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            className: isPersonaSigned ? classes.deneText : '',
                                            component: "span",
                                            children: "2"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "span",
                                            variant: "body2",
                                            children: [
                                                ' ',
                                                "/ 2",
                                                ' '
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            className: classes.persona,
                            mb: 3,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                                        style: {
                                            fontSize: '48px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.identifier,
                                            children: (0,shared_src/* formatFingerprint */.R)((_compressedPoint = currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier.compressedPoint) !== null && _compressedPoint !== void 0 ? _compressedPoint : '', 10)
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            mt: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                                fullWidth: true,
                                disabled: isBound || !!isPersonaSigned || !isSupported,
                                classes: {
                                    loadingIndicatorEnd: classes.loadingIcon
                                },
                                loadingPosition: "end",
                                className: isPersonaSigned ? classes.done : '',
                                loading: signature.persona.loading,
                                variant: "contained",
                                onClick: onPersonaSign,
                                endIcon: isPersonaSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                    sx: {
                                        color: src/* MaskColorVar.white */.ZN.white
                                    }
                                }) : null,
                                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                                children: isPersonaSigned ? t.done() : t.persona_sign()
                            })
                        })
                    ]
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/useBindPayload.ts


const useBindPayload = (action, address, currentIdentifier)=>{
    return (0,useAsyncRetry/* default */.Z)(()=>{
        if (!address) return Promise.resolve(undefined);
        if (!currentIdentifier || !address) return Promise.resolve(undefined);
        return service/* default.Helper.createPersonaPayload */.ZP.Helper.createPersonaPayload(currentIdentifier, action, address, 'ethereum');
    }, [
        currentIdentifier,
        address
    ]);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(1840);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/usePersonaSign.ts


function usePersonaSign(message, currentIdentifier) {
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!message || !currentIdentifier) return;
        try {
            const result = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
                method: 'eth',
                message: message,
                identifier: currentIdentifier.toText()
            });
            return result;
        } catch  {
            return;
        }
    }, [
        message,
        currentIdentifier
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(1433);
;// CONCATENATED MODULE: ./src/plugins/NextID/hooks/useWalletSign.ts




const useWalletSign = (message, address)=>{
    const t = useI18N();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const [state, fn] = (0,useAsyncFn/* default */.Z)(async (changed)=>{
        if (changed) return undefined;
        if (!address || !message) return;
        try {
            showSnackbar(t.notify_wallet_sign(), {
                processing: true,
                message: t.notify_wallet_sign_confirm()
            });
            const result = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(message, address);
            return result;
        } catch  {
            showSnackbar(t.notify_wallet_sign(), {
                variant: 'error',
                message: t.notify_wallet_sign_cancel()
            });
            return;
        }
    }, [
        address,
        message,
        address
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        fn(true);
    }, [
        address
    ]);
    return [
        state,
        ()=>fn(false)
    ];
};

;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindDialog.tsx













const BindDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , persona , onBind , bounds  })=>{
    var ref;
    const account = (0,plugin_infra_src/* useAccount */.mA)();
    const t = useI18N();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const currentIdentifier = persona.identifier;
    const isBound = !!bounds.find((x)=>(0,address/* isSameAddress */.Wr)(x.identity, account)
    );
    const { value: message  } = useBindPayload('create', account, currentIdentifier);
    const [personaSignState, handlePersonaSign] = usePersonaSign(message, currentIdentifier);
    const [walletSignState, handleWalletSign] = useWalletSign(message, account);
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaSignState.value || !walletSignState.value || isBound) return;
        try {
            await service/* default.Helper.bindProof */.ZP.Helper.bindProof(currentIdentifier, 'create', 'ethereum', account, walletSignState.value, personaSignState.value.signature.signature);
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'success',
                message: t.notify_wallet_sign_request_success()
            });
            await (0,esm/* delay */.gw)(2000);
            onBind();
            onClose();
        } catch  {
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'error',
                message: t.notify_wallet_sign_request_failed()
            });
        }
    }, [
        walletSignState.value,
        personaSignState.value,
        isBound
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(BindPanelUI, {
        title: t.verify_wallet_dialog_title(),
        onClose: onClose,
        open: open,
        currentPersona: persona,
        onPersonaSign: handlePersonaSign,
        onWalletSign: handleWalletSign,
        isCurrentAccount: true,
        signature: {
            persona: {
                value: (ref = personaSignState.value) === null || ref === void 0 ? void 0 : ref.signature.signature,
                loading: personaSignState.loading
            },
            wallet: walletSignState
        },
        isBound: isBound
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useCounter.js + 1 modules
var useCounter = __webpack_require__(94578);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
;// CONCATENATED MODULE: ./src/plugins/NextID/types/tip.ts
var TipType;
(function(TipType) {
    TipType["Token"] = 'token';
    TipType["NFT"] = 'nft';
})(TipType || (TipType = {}));

;// CONCATENATED MODULE: ./src/plugins/NextID/types/nextId.ts
var Platform;
(function(Platform) {
    Platform["ethereum"] = "ethereum";
})(Platform || (Platform = {}));

;// CONCATENATED MODULE: ./src/plugins/NextID/types/index.ts



// EXTERNAL MODULE: ../icons/general/Delete.tsx
var Delete = __webpack_require__(25722);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(99537);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(72753);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(45007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(35750);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/CopyIconButton/index.tsx







const CopyIconButton = /*#__PURE__*/ (0,react.memo)(({ text , ...props })=>{
    const t = useI18N();
    const theme = (0,useTheme/* default */.Z)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const [open, setOpen] = (0,react.useState)(false);
    const onCopy = (0,shared_src/* useSnackbarCallback */.iD)({
        executor: async ()=>copyToClipboard(text)
        ,
        deps: [],
        successText: t.copy_success_of_wallet_address()
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            style: {
                color: theme.palette.text.primary
            },
            children: t.copied()
        }),
        open: open,
        onMouseLeave: ()=>setOpen(false)
        ,
        disableFocusListener: true,
        disableTouchListener: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy/* CopyIcon */.T, {
            onClick: onCopy,
            className: props.className
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.2/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(40415);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/BindingItem.tsx












const BindingItem_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        item: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(1),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        trashIcon: {
            fontSize: 20,
            stroke: theme.palette.text.primary,
            cursor: 'pointer'
        },
        copy: {
            fontSize: 16,
            stroke: theme.palette.text.primary,
            cursor: 'pointer'
        },
        address: {
            color: theme.palette.text.primary
        },
        link: {
            color: theme.palette.text.primary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center'
        },
        linkIcon: {
            marginRight: theme.spacing(1)
        }
    })
);
const BindingItem = /*#__PURE__*/ (0,react.memo)(({ platform , identity , enableAction , onUnBind  })=>{
    const t = useI18N();
    var ref;
    const { Utils  } = (ref = (0,plugin_infra_src/* useWeb3State */.dM)()) !== null && ref !== void 0 ? ref : {};
    const { classes  } = BindingItem_useStyles();
    const networkDescriptor = (0,plugin_infra_src/* useNetworkDescriptor */.Vw)(types/* ChainId.Mainnet */.a_.Mainnet, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    if (platform === Platform.ethereum) {
        var ref1;
        var ref2;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center",
            mx: 1,
            mb: 4,
            className: classes.item,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    direction: "row",
                    alignItems: "center",
                    gap: "12px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                            size: 18,
                            icon: networkDescriptor === null || networkDescriptor === void 0 ? void 0 : networkDescriptor.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.address,
                            children: (0,formatter/* formatEthereumAddress */.j8)(identity, 4)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton, {
                            text: identity,
                            className: classes.copy
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            className: classes.link,
                            href: (ref2 = Utils === null || Utils === void 0 ? void 0 : (ref1 = Utils.resolveAddressLink) === null || ref1 === void 0 ? void 0 : ref1.call(Utils, 1, identity)) !== null && ref2 !== void 0 ? ref2 : '',
                            target: "_blank",
                            title: t.view_on_explorer(),
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                className: classes.linkIcon,
                                size: 14
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: enableAction && /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* DeleteIcon */.p, {
                        className: classes.trashIcon,
                        onClick: ()=>onUnBind(identity)
                    })
                })
            ]
        }));
    }
    return null;
});

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(51758);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/UnbindPanelUI.tsx













const UnbindPanelUI_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        persona: {
            padding: theme.spacing(1.7),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center'
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px',
            width: 48,
            height: 48
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: theme.palette.text.primary,
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            marginBottom: 11.5,
            color: theme.palette.text.primary
        },
        done: {
            background: '#60DFAB !important',
            color: `${src/* MaskColorVar.white */.ZN.white} !important`
        },
        loadingIcon: {
            position: 'relative',
            right: -6
        },
        error: {
            color: (0,src/* getMaskColor */.nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5),
            borderLeft: `solid 2px ${(0,src/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const UnbindPanelUI_SUPPORTED_PLUGINS = [
    plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
];
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["persona"] = 0] = "persona";
    DialogTabs[DialogTabs["wallet"] = 1] = "wallet";
})(DialogTabs || (DialogTabs = {}));
const UnbindPanelUI = /*#__PURE__*/ (0,react.memo)(({ onPersonaSign , onWalletSign , currentPersona , signature , isBound , title , onClose , open , isCurrentAccount  })=>{
    const t = useI18N();
    const { classes  } = UnbindPanelUI_useStyles();
    const pluginId = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const isSupported = UnbindPanelUI_SUPPORTED_PLUGINS.includes(pluginId);
    const isWalletSigned = !!signature.wallet.value;
    const isPersonaSigned = !!signature.persona.value;
    const state = (0,react.useState)(DialogTabs.persona);
    var _compressedPoint;
    const tabProps = {
        tabs: [
            {
                label: t.persona(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subTitle,
                            children: t.persona()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            className: classes.persona,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconContainer,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                                        style: {
                                            fontSize: '48px'
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.name,
                                            children: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.nickname
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.identifier,
                                            children: (0,shared_src/* formatFingerprint */.R)((_compressedPoint = currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier.compressedPoint) !== null && _compressedPoint !== void 0 ? _compressedPoint : '', 10)
                                        })
                                    ]
                                })
                            ]
                        }),
                        !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unsupported_network()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            my: 3,
                            children: t.unbind_persona_tip()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            fullWidth: true,
                            disabled: !isBound || !!isPersonaSigned || !isSupported,
                            classes: {
                                loadingIndicatorEnd: classes.loadingIcon
                            },
                            loadingPosition: "end",
                            className: isPersonaSigned ? classes.done : '',
                            loading: signature.persona.loading,
                            variant: "contained",
                            onClick: onPersonaSign,
                            endIcon: isPersonaSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                sx: {
                                    color: src/* MaskColorVar.white */.ZN.white
                                }
                            }) : null,
                            loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                            children: isPersonaSigned ? t.done() : t.persona_sign()
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t.wallet(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    mt: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.subTitle,
                            children: t.wallet()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {
                            disableChange: true
                        }),
                        !isSupported && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unsupported_network()
                        }),
                        !isCurrentAccount && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.error,
                            children: t.unbind_wallet_same_account_error()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            my: 3,
                            children: t.unbind_wallet_tip()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                            fullWidth: true,
                            classes: {
                                loadingIndicatorEnd: classes.loadingIcon
                            },
                            loadingPosition: "end",
                            disabled: !isCurrentAccount || !!isWalletSigned || !isSupported,
                            className: isWalletSigned ? classes.done : '',
                            loading: signature.wallet.loading,
                            variant: "contained",
                            onClick: onWalletSign,
                            endIcon: isWalletSigned ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                                sx: {
                                    color: src/* MaskColorVar.white */.ZN.white
                                }
                            }) : null,
                            loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {}),
                            children: isWalletSigned ? t.done() : t.wallet_sign()
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        title: title,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            style: {
                padding: '24px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: "auto",
                ...tabProps
            })
        })
    }));
});

;// CONCATENATED MODULE: ./src/plugins/NextID/components/UnbindDialog.tsx












const UnbindDialog = /*#__PURE__*/ (0,react.memo)(({ unbindAddress , onClose , persona , onUnBind , bounds  })=>{
    var ref1;
    const account = (0,useAccount/* useAccount */.m)();
    const t = useI18N();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const currentIdentifier = persona.identifier;
    const isBound = !!bounds.find((x)=>(0,address/* isSameAddress */.Wr)(x.identity, unbindAddress)
    );
    const { value: message  } = useBindPayload('delete', unbindAddress, currentIdentifier);
    const [personaSignState, handlePersonaSign] = usePersonaSign(message, currentIdentifier);
    const [walletSignState, handleWalletSign] = useWalletSign(message, unbindAddress);
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!personaSignState.value && !walletSignState.value) return;
        try {
            var ref;
            await service/* default.Helper.bindProof */.ZP.Helper.bindProof(currentIdentifier, 'delete', 'ethereum', unbindAddress, walletSignState.value, (ref = personaSignState.value) === null || ref === void 0 ? void 0 : ref.signature.signature);
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'success',
                message: t.notify_wallet_sign_request_success()
            });
            await (0,esm/* delay */.gw)(2000);
            onUnBind();
            onClose();
        } catch  {
            showSnackbar(t.notify_wallet_sign_request_title(), {
                variant: 'error',
                message: t.notify_wallet_sign_request_failed()
            });
        }
    }, [
        walletSignState.value,
        personaSignState.value,
        unbindAddress
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnbindPanelUI, {
        title: t.unbind_dialog_title(),
        onClose: onClose,
        open: !!unbindAddress,
        currentPersona: persona,
        onPersonaSign: handlePersonaSign,
        onWalletSign: handleWalletSign,
        isCurrentAccount: (0,address/* isSameAddress */.Wr)(account, unbindAddress),
        signature: {
            persona: {
                value: (ref1 = personaSignState.value) === null || ref1 === void 0 ? void 0 : ref1.signature.signature,
                loading: personaSignState.loading
            },
            wallet: walletSignState
        },
        isBound: isBound
    }));
});

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(40127);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/NextIdPage.tsx












const NextIdPage_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tip: {
            padding: theme.spacing(1.5),
            marginBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            borderRadius: 8,
            alignItems: 'center',
            color: theme.palette.text.primary
        },
        skeleton: {
            borderRadius: 8,
            margin: theme.spacing(1),
            marginTop: 0,
            backgroundColor: theme.palette.background.default,
            height: '48px'
        }
    })
);
function NextIdPage({}) {
    const t = useI18N();
    const { classes  } = NextIdPage_useStyles();
    const currentProfileIdentifier = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const visitingPersonaIdentifier = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const [openBindDialog, toggleBindDialog] = (0,react.useState)(false);
    const [unbindAddress, setUnBindAddress] = (0,react.useState)();
    const [count, { inc  }] = (0,useCounter/* default */.Z)(0);
    const isOwn = currentProfileIdentifier.identifier.toText() === visitingPersonaIdentifier.identifier.toText();
    const personaActionButton = (0,react.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t.connect_persona() : t.create_persona();
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "contained",
            onClick: personaConnectStatus.action,
            children: button
        }));
    }, [
        personaConnectStatus,
        t
    ]);
    const { value: currentPersona , loading: loadingPersona  } = (0,useAsyncRetry/* default */.Z)(()=>{
        if (!currentProfileIdentifier) return Promise.resolve(undefined);
        return service/* default.Identity.queryPersonaByProfile */.ZP.Identity.queryPersonaByProfile(currentProfileIdentifier.identifier);
    }, [
        currentProfileIdentifier,
        personaConnectStatus.hasPersona
    ]);
    const { value: bindings , loading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!currentPersona) return;
        if (isOwn) {
            return service/* default.Helper.queryExistedBinding */.ZP.Helper.queryExistedBinding(currentPersona.identifier);
        }
        if (!visitingPersonaIdentifier) return null;
        const visitingPersona = await service/* default.Identity.queryPersonaByProfile */.ZP.Identity.queryPersonaByProfile(visitingPersonaIdentifier.identifier);
        if (!visitingPersona) return null;
        return service/* default.Helper.queryExistedBinding */.ZP.Helper.queryExistedBinding(visitingPersona.identifier);
    }, [
        currentPersona,
        count,
        visitingPersonaIdentifier,
        isOwn
    ]);
    if (personaActionButton) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            justifyContent: "center",
            direction: "row",
            mt: "24px",
            children: personaActionButton
        }));
    }
    if (loading || loadingPersona) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        className: classes.skeleton,
                        animation: "wave",
                        variant: "rectangular"
                    })
                }, i)
            )
        }));
    }
    if (bindings === null || bindings === void 0 ? void 0 : bindings.proofs.length) {
        var ref, ref1;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: bindings.proofs.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(BindingItem, {
                                    enableAction: isOwn,
                                    platform: x.platform,
                                    identity: x.identity,
                                    onUnBind: setUnBindAddress
                                }, x.identity)
                            )
                        }),
                        isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                            justifyContent: "center",
                            direction: "row",
                            mt: "24px",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "contained",
                                onClick: ()=>toggleBindDialog(true)
                                ,
                                children: t.add_wallet_button()
                            })
                        })
                    ]
                }),
                openBindDialog && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(BindDialog, {
                    open: openBindDialog,
                    onClose: ()=>toggleBindDialog(false)
                    ,
                    persona: currentPersona,
                    bounds: (ref = bindings === null || bindings === void 0 ? void 0 : bindings.proofs) !== null && ref !== void 0 ? ref : [],
                    onBind: ()=>inc(1)
                }),
                unbindAddress && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(UnbindDialog, {
                    unbindAddress: unbindAddress,
                    onClose: ()=>setUnBindAddress(undefined)
                    ,
                    persona: currentPersona,
                    onUnBind: ()=>inc(1)
                    ,
                    bounds: (ref1 = bindings === null || bindings === void 0 ? void 0 : bindings.proofs) !== null && ref1 !== void 0 ? ref1 : []
                })
            ]
        }));
    }
    var ref2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    isOwn ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tip,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.connect_wallet_tip_intro()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t.connect_wallet_tip()
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.tip,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t.connect_wallet__other_user_tip_intro()
                        })
                    }),
                    isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        direction: "row",
                        mt: "24px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            onClick: ()=>toggleBindDialog(true)
                            ,
                            children: t.verify_wallet_button()
                        })
                    })
                ]
            }),
            openBindDialog && currentPersona && isOwn && /*#__PURE__*/ (0,jsx_runtime.jsx)(BindDialog, {
                open: openBindDialog,
                onClose: ()=>toggleBindDialog(false)
                ,
                persona: currentPersona,
                bounds: (ref2 = bindings === null || bindings === void 0 ? void 0 : bindings.proofs) !== null && ref2 !== void 0 ? ref2 : [],
                onBind: ()=>inc(1)
            })
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
;// CONCATENATED MODULE: ./src/plugins/NextID/contexts/TargetChainIdContext.ts



function useTargetChainId() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [targetChainId, setTargetChainId] = (0,react.useState)(chainId);
    return {
        targetChainId,
        setTargetChainId
    };
}
const TargetChainIdContext = (0,unstated_next/* createContainer */.f)(useTargetChainId);

;// CONCATENATED MODULE: ./src/plugins/NextID/contexts/RootContext.tsx


const RootContext = ({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TargetChainIdContext.Provider, {
        children: children
    }));
};

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(26618);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(80955);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants_constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(32004);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/plugins/NextID/contexts/TipContext.tsx






const TipContext = /*#__PURE__*/ (0,react.createContext)({
    recipient: '',
    setRecipient: noop/* default */.Z,
    tipType: TipType.NFT,
    setTipType: noop/* default */.Z,
    recipients: [],
    setRecipients: noop/* default */.Z,
    token: null,
    setToken: noop/* default */.Z,
    amount: '',
    setAmount: noop/* default */.Z,
    erc721TokenId: null,
    setErc721TokenId: noop/* default */.Z,
    erc721Contract: null,
    setErc721Contract: noop/* default */.Z
});
const TipTaskProvider = ({ children , task  })=>{
    const [recipient, setRecipient] = (0,react.useState)('');
    const [recipients, setRecipients] = (0,react.useState)(task.addresses);
    const [tipType, setTipType] = (0,react.useState)(TipType.Token);
    const [amount, setAmount] = (0,react.useState)('0');
    const [erc721Contract, setErc721Contract] = (0,react.useState)(null);
    const { value: nativeTokenDetailed = null  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const [token, setToken] = (0,react.useState)(nativeTokenDetailed);
    const [erc721TokenId, setErc721TokenId] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        setRecipient(task.to || '');
    }, [
        task.to
    ]);
    (0,react.useEffect)(()=>{
        setRecipients(task.addresses);
    }, [
        task.addresses
    ]);
    (0,react.useEffect)(()=>{
        if (recipient || recipients.length === 0) return;
        setRecipient(recipients[0]);
    }, [
        recipient,
        recipients
    ]);
    (0,react.useEffect)(()=>{
        if (token || !nativeTokenDetailed) return;
        setToken(nativeTokenDetailed);
    }, [
        token,
        nativeTokenDetailed
    ]);
    const contextValue = (0,react.useMemo)(()=>{
        return {
            recipient,
            setRecipient,
            recipients,
            setRecipients,
            tipType,
            setTipType,
            token,
            setToken,
            amount,
            setAmount,
            erc721TokenId,
            setErc721TokenId,
            erc721Contract,
            setErc721Contract
        };
    }, [
        recipient,
        recipients,
        tipType,
        amount,
        erc721TokenId,
        erc721Contract,
        token
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TipContext.Provider, {
        value: contextValue,
        children: children
    }));
};
function useTokenTipTuple() {
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const context = (0,react.useContext)(TipContext);
    const { token , amount , recipient  } = context;
    const isNativeToken = (0,address/* isSameAddress */.Wr)(token === null || token === void 0 ? void 0 : token.address, NATIVE_TOKEN_ADDRESS);
    const assetType = isNativeToken ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20;
    const [transferState, transferCallback, resetTransferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(assetType, (token === null || token === void 0 ? void 0 : token.address) || '');
    const sendTip = (0,react.useCallback)(async ()=>{
        const transferAmount = (0,base_src/* rightShift */.pu)(amount || '0', (token === null || token === void 0 ? void 0 : token.decimals) || 0).toFixed();
        await transferCallback(transferAmount, recipient);
        resetTransferCallback();
    }, [
        amount,
        token,
        recipient,
        transferCallback,
        resetTransferCallback
    ]);
    return [
        transferState,
        sendTip
    ];
}
function useNftTipTuple() {
    const context = (0,react.useContext)(TipContext);
    const { recipient , erc721TokenId , erc721Contract  } = context;
    const [transferState, transferCallback, resetTransferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(types/* EthereumTokenType.ERC721 */.Dr.ERC721, (erc721Contract === null || erc721Contract === void 0 ? void 0 : erc721Contract.address) || '');
    const sendTip = (0,react.useCallback)(async ()=>{
        if (!erc721TokenId) return;
        await transferCallback(erc721TokenId, recipient);
        resetTransferCallback();
    }, [
        erc721TokenId,
        recipient,
        transferCallback,
        resetTransferCallback
    ]);
    return [
        transferState,
        sendTip
    ];
}
function useTip() {
    const context = (0,react.useContext)(TipContext);
    const tokenTipTuple = useTokenTipTuple();
    const nftTipTuple = useNftTipTuple();
    const sendTipTuple = (0,react.useMemo)(()=>{
        return context.tipType === TipType.Token ? tokenTipTuple : nftTipTuple;
    }, [
        context.tipType,
        tokenTipTuple,
        nftTipTuple
    ]);
    return {
        ...context,
        sendState: sendTipTuple[0],
        sendTip: sendTipTuple[1]
    };
}

;// CONCATENATED MODULE: ./src/plugins/NextID/contexts/index.ts




// EXTERNAL MODULE: ../web3-shared/evm/utils/misc.ts
var misc = __webpack_require__(7454);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(6054);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(89987);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(42624);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(14561);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Select/Select.js + 3 modules
var Select = __webpack_require__(5630);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(56561);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(66834);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(91755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(75848);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(13484);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(7897);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721TokenDetailedCallback.ts
var useERC721TokenDetailedCallback = __webpack_require__(8503);
// EXTERNAL MODULE: ../web3-providers/src/index.ts + 2 modules
var web3_providers_src = __webpack_require__(54492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx
var SearchInput = __webpack_require__(26042);
// EXTERNAL MODULE: ./src/web3/UI/ERC721ContractSelectPanel.tsx + 1 modules
var ERC721ContractSelectPanel = __webpack_require__(9414);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(34433);
;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/NFTSection/NFTList.tsx








const NFTList_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        checkbox: {
            position: 'absolute',
            right: 0,
            top: 0
        },
        nftItem: {
            position: 'relative',
            cursor: 'pointer',
            background: theme.palette.mode === 'light' ? '#fff' : '#2F3336',
            display: 'flex',
            overflow: 'hidden',
            padding: 0,
            flexDirection: 'column',
            borderRadius: 8,
            height: 180,
            userSelect: 'none',
            width: 120,
            justifyContent: 'center'
        },
        disabled: {
            opacity: 0.5,
            cursor: 'not-allowed'
        }
    })
);
function arrayRemove(arr, item) {
    const idx = arr.indexOf(item);
    return arr.splice(idx, 1);
}
const NFTList = ({ selectedIds , onChange , limit =1 , tokens , className  })=>{
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { classes  } = NFTList_useStyles();
    const reachedLimit = selectedIds.length >= limit;
    const toggleItem = (0,react.useCallback)((currentId)=>{
        const disabled = !selectedIds.includes(currentId) && reachedLimit;
        if (!onChange || disabled) return;
        let newIds = [
            ...selectedIds
        ];
        if (selectedIds.includes(currentId)) {
            arrayRemove(newIds, currentId);
        } else if (!reachedLimit) {
            newIds = [
                ...selectedIds,
                currentId
            ];
        }
        onChange(newIds);
    }, [
        selectedIds,
        onChange,
        reachedLimit
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: className,
        children: tokens.map((token)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classnames_default()({
                    [classes.nftItem]: true,
                    [classes.disabled]: reachedLimit && !selectedIds.includes(token.tokenId)
                }),
                onClick: ()=>{
                    toggleItem(token.tokenId);
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                        chainId: chainId,
                        contractAddress: token.contractDetailed.address,
                        url: token.info.mediaUrl,
                        tokenId: token.tokenId
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                        onChange: noop/* default */.Z,
                        onClick: ()=>{
                            toggleItem(token.tokenId);
                        },
                        className: classes.checkbox,
                        checked: selectedIds.includes(token.tokenId)
                    })
                ]
            }, token.tokenId)
        )
    }));
};

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/NFTSection/index.tsx












const NFTSection_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        selectSection: {
            marginTop: theme.spacing(1.5)
        },
        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxHeight: 400,
            overflow: 'auto',
            gridGap: 18
        },
        keyword: {
            borderRadius: 6,
            marginRight: theme.spacing(1.5)
        },
        searchButton: {
            borderRadius: 6,
            width: 100
        },
        row: {
            display: 'flex',
            flexDirection: 'row'
        }
    })
);
const NFTSection = ({ className , ...rest })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { erc721Contract , setErc721Contract , erc721TokenId , setErc721TokenId  } = useTip();
    const [tokenId, setTokenId, erc721TokenDetailedCallback] = (0,useERC721TokenDetailedCallback/* useERC721TokenDetailedCallback */._)(erc721Contract);
    const { classes  } = NFTSection_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const { tokenDetailedOwnerList: myTokens = []  } = (0,web3_providers_src/* useERC721TokenDetailedOwnerList */.t9)(erc721Contract, account);
    const selectedIds = (0,react.useMemo)(()=>erc721TokenId ? [
            erc721TokenId
        ] : []
    , [
        erc721TokenId
    ]);
    const [searchedToken, setSearchedToken] = (0,react.useState)(null);
    const onSearch = (0,react.useCallback)(async ()=>{
        const token = await erc721TokenDetailedCallback();
        setSearchedToken((token === null || token === void 0 ? void 0 : token.info.owner) ? token : null);
    }, [
        erc721TokenDetailedCallback
    ]);
    const tokens = (0,react.useMemo)(()=>searchedToken ? [
            searchedToken
        ] : myTokens
    , [
        searchedToken,
        myTokens
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(classes.root, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC721ContractSelectPanel/* ERC721ContractSelectPanel */.G, {
                    contract: erc721Contract,
                    onContractChange: setErc721Contract
                })
            }),
            erc721Contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.selectSection,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        className: classes.row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput/* SearchInput */.M, {
                                classes: {
                                    root: classes.keyword
                                },
                                value: tokenId,
                                onChange: (id)=>setTokenId(id)
                                ,
                                label: ""
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.searchButton,
                                variant: "contained",
                                onClick: onSearch,
                                children: t('search')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTList, {
                        className: classes.list,
                        selectedIds: selectedIds,
                        tokens: tokens,
                        onChange: (ids)=>{
                            setErc721TokenId(ids.length ? ids[0] : null);
                        }
                    })
                ]
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/TipForm.tsx
















const TipForm_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            display: 'flex',
            flexDirection: 'column'
        },
        tipButton: {
            marginTop: theme.spacing(1.5),
            fontSize: 16
        },
        button: {
            width: '100%',
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '10px 0',
            borderRadius: 24,
            height: 'auto',
            marginTop: theme.spacing(1.5)
        },
        disabledButton: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '10px 0',
            borderRadius: 24,
            height: 'auto'
        }
    };
});
const TipForm = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { targetChainId: chainId  } = TargetChainIdContext.useContainer();
    const { classes  } = TipForm_useStyles();
    const { recipient , recipients: recipientAddresses , tipType , setTipType , setRecipient , token , setToken , amount , setAmount , sendTip ,  } = useTip();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const selectRef = (0,react.useRef)(null);
    const [id] = (0,react.useState)(v4/* default */.Z);
    const { setDialog: setSelectTokenDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectTokenDialogUpdated */.R$.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: false,
            FungibleTokenListProps: {
                selectedTokens: token ? [
                    token.address
                ] : []
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    // balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((token === null || token === void 0 ? void 0 : token.type) || types/* EthereumTokenType.Native */.Dr.Native, (token === null || token === void 0 ? void 0 : token.address) || '');
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: "To"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                fullWidth: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
                    ref: selectRef,
                    value: recipient,
                    onChange: (e)=>{
                        setRecipient(e.target.value);
                    },
                    MenuProps: {
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'center'
                        },
                        container: selectRef.current,
                        BackdropProps: {
                            invisible: true
                        }
                    },
                    children: recipientAddresses.map((address)=>{
                        var ref;
                        /*#__PURE__*/ return (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: address,
                            children: (Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatDomainName) === null || ref === void 0 ? void 0 : ref.call(Utils, address)) || address
                        }, address);
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.Z, {
                    row: true,
                    value: tipType,
                    onChange: (e)=>{
                        setTipType(e.target.value);
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                            value: TipType.Token,
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                            label: t('plugin_tip_token')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                            value: TipType.NFT,
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {}),
                            label: t('plugin_tip_nft')
                        })
                    ]
                })
            }),
            tipType === TipType.Token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                    label: "Token",
                    token: token,
                    amount: amount,
                    onAmountChange: setAmount,
                    balance: tokenBalance,
                    SelectTokenChip: {
                        loading: loadingTokenBalance,
                        ChipProps: {
                            onClick: onSelectTokenChipClick
                        }
                    }
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTSection, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: chainId,
                noSwitchNetworkTip: true,
                disablePadding: true,
                ActionButtonPromiseProps: {
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabledButton
                    },
                    color: 'primary'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    size: "large",
                    className: classes.tipButton,
                    fullWidth: true,
                    disabled: false,
                    onClick: sendTip,
                    children: t('plugin_tip_send')
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/TipDialog.tsx










const TipDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tab: {
            height: 36,
            minHeight: 36
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4
        }
    })
);
function TipDialog({ open =false , onClose  }) {
    var ref, ref1;
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const tipDefinition = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(plugin_infra_src/* PluginId.NextID */.je.NextID, 'any');
    var ref2;
    const chainIdList = (ref2 = (ref = tipDefinition === null || tipDefinition === void 0 ? void 0 : tipDefinition.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginID]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds) !== null && ref2 !== void 0 ? ref2 : misc/* EMPTY_LIST */.r;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TipDialog_useStyles();
    const { targetChainId , setTargetChainId  } = TargetChainIdContext.useContainer();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_tip_tip'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.abstractTabWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                        classes: classes,
                        chainId: targetChainId,
                        setChainId: setTargetChainId,
                        chains: chainIdList
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TipForm, {})
            ]
        })
    }));
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/plugins/Currency.tsx


const Currency = (0,icons_utils/* createIcon */.I)('Currency', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3.86035 8.49023V17.4902H18.8604V8.49023H3.86035ZM18.1104 10.6176C17.7927 10.505 17.5042 10.3229 17.2658 10.0846C17.0275 9.84633 16.8453 9.55786 16.7326 9.24023H18.1104V10.6176ZM15.9766 16.7402H6.74485C6.61165 16.2266 6.34351 15.7578 5.9682 15.3827C5.59289 15.0075 5.12408 14.7395 4.61035 14.6065V11.3777C5.12431 11.2441 5.59318 10.9754 5.96836 10.5996C6.34354 10.2238 6.61137 9.75443 6.7441 9.24023H15.9755C16.1085 9.75448 16.3765 10.2238 16.7519 10.5996C17.1273 10.9755 17.5963 11.2441 18.1104 11.3777V14.6046C17.5966 14.7381 17.1279 15.0065 16.7527 15.382C16.3776 15.7574 16.1096 16.2264 15.9766 16.7402ZM5.98698 9.24023C5.87399 9.55679 5.69177 9.84414 5.45361 10.0813C5.21546 10.3185 4.92737 10.4995 4.61035 10.6112V9.24023H5.98698ZM4.61035 15.3734C4.92618 15.485 5.21318 15.6656 5.45046 15.902C5.68774 16.1385 5.86936 16.4248 5.9821 16.7402H4.61035V15.3734ZM16.7416 16.7402C16.8532 16.4236 17.0339 16.1357 17.2707 15.8977C17.5075 15.6596 17.7943 15.4773 18.1104 15.364V16.7402H16.7416Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15.4854 11.8652C15.187 11.8652 14.9008 11.9838 14.6899 12.1947C14.4789 12.4057 14.3604 12.6919 14.3604 12.9902C14.3604 13.2886 14.4789 13.5748 14.6899 13.7857C14.9008 13.9967 15.187 14.1152 15.4854 14.1152C15.7837 14.1152 16.0699 13.9967 16.2808 13.7857C16.4918 13.5748 16.6104 13.2886 16.6104 12.9902C16.6104 12.6919 16.4918 12.4057 16.2808 12.1947C16.0699 11.9838 15.7837 11.8652 15.4854 11.8652ZM15.4854 13.3652C15.3888 13.3609 15.2976 13.3195 15.2308 13.2497C15.164 13.1798 15.1268 13.0869 15.1268 12.9902C15.1268 12.8936 15.164 12.8007 15.2308 12.7308C15.2976 12.661 15.3888 12.6196 15.4854 12.6152C15.5819 12.6196 15.6731 12.661 15.7399 12.7308C15.8067 12.8007 15.844 12.8936 15.844 12.9902C15.844 13.0869 15.8067 13.1798 15.7399 13.2497C15.6731 13.3195 15.5819 13.3609 15.4854 13.3652V13.3652ZM11.3604 9.99023C10.1176 9.99023 9.11035 11.3335 9.11035 12.9902C9.11035 14.647 10.1176 15.9902 11.3604 15.9902C12.6031 15.9902 13.6104 14.647 13.6104 12.9902C13.6104 11.3335 12.6031 9.99023 11.3604 9.99023ZM11.3604 15.2402C10.5474 15.2402 9.86035 14.2097 9.86035 12.9902C9.86035 11.7707 10.5474 10.7402 11.3604 10.7402C12.1734 10.7402 12.8604 11.7707 12.8604 12.9902C12.8604 14.2097 12.1734 15.2402 11.3604 15.2402ZM7.23535 11.8652C6.93698 11.8652 6.65083 11.9838 6.43986 12.1947C6.22888 12.4057 6.11035 12.6919 6.11035 12.9902C6.11035 13.2886 6.22888 13.5748 6.43986 13.7857C6.65083 13.9967 6.93698 14.1152 7.23535 14.1152C7.53372 14.1152 7.81987 13.9967 8.03085 13.7857C8.24183 13.5748 8.36035 13.2886 8.36035 12.9902C8.36035 12.6919 8.24183 12.4057 8.03085 12.1947C7.81987 11.9838 7.53372 11.8652 7.23535 11.8652V11.8652ZM7.23535 13.3652C7.1388 13.3609 7.04763 13.3195 6.98083 13.2497C6.91403 13.1798 6.87675 13.0869 6.87675 12.9902C6.87675 12.8936 6.91403 12.8007 6.98083 12.7308C7.04763 12.661 7.1388 12.6196 7.23535 12.6152C7.33191 12.6196 7.42307 12.661 7.48987 12.7308C7.55667 12.8007 7.59395 12.8936 7.59395 12.9902C7.59395 13.0869 7.55667 13.1798 7.48987 13.2497C7.42307 13.3195 7.33191 13.3609 7.23535 13.3652V13.3652Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "5.78027",
            y: "6.48047",
            width: "0.72",
            height: "1.56",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "20.54",
            y: "6.48047",
            width: "0.72",
            height: "14.04",
            transform: "rotate(90 20.54 6.48047)",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "20.54",
            y: "14.7607",
            width: "0.719986",
            height: "0.959999",
            transform: "rotate(90 20.54 14.7607)",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "20.54",
            y: "6.48047",
            width: "0.720001",
            height: "9",
            fill: "currentColor"
        })
    ]
}), '0 0 25 25');

;// CONCATENATED MODULE: ./src/plugins/NextID/messages.ts


if (false) {}
const PluginNextIdMessages = (0,plugin_infra_src/* createPluginMessage */.I4)(constants/* PLUGIN_ID */.Uu);

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/TipButton.tsx






const TipButton = ({ className , ...rest })=>{
    // So far it is not possible to fetch wallets of user
    const account = (0,useAccount/* useAccount */.m)();
    const sendTip = (0,react.useCallback)((evt)=>{
        evt.stopPropagation();
        evt.preventDefault();
        PluginNextIdMessages.tipTask.sendToLocal({
            addresses: [
                account
            ]
        });
    }, [
        account
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classnames_default()(className),
        ...rest,
        role: "button",
        onClick: sendTip,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Currency, {
            htmlColor: "#8899a6",
            viewBox: "0 0 24 24"
        })
    }));
};

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/TipTaskManager.tsx






let id = 0;
const TipTaskManager = ({ children  })=>{
    const [tasks, setTasks] = (0,react.useState)(misc/* EMPTY_LIST */.r);
    const removeTask = (0,react.useCallback)((task)=>{
        setTasks((list)=>list.filter((t)=>t !== task
            )
        );
    }, []);
    (0,react.useEffect)(()=>{
        return PluginNextIdMessages.tipTask.on((task)=>{
            id += 1;
            setTasks((list)=>[
                    ...list,
                    {
                        id,
                        ...task
                    }
                ]
            );
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            tasks.map((task)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TipTaskProvider, {
                    task: task,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipDialog, {
                        open: true,
                        onClose: ()=>removeTask(task)
                    }, task.id)
                }, task.id)
            ),
            children
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/NextID/components/tip/index.ts




// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/plugins/NextID/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init () {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_tabContent`,
            label: 'Wallet',
            priority: 10,
            UI: {
                TabContent: NextIdPage
            }
        }, 
    ],
    GlobalInjection () {
        if (!shared/* Flags.next_id_tip_enabled */.vU.next_id_tip_enabled) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RootContext, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipTaskManager, {})
        }));
    },
    PostActions () {
        if (!shared/* Flags.next_id_tip_enabled */.vU.next_id_tip_enabled) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RootContext, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TipButton, {})
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 44270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26618);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98086);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85894);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63541);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 1347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28577);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98086);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44068);



/**
 * Fetch native token balance from chain
 * @param address
 */ function useNativeTokenBalance() {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 32004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ useTokenTransferCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(85894);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15030);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(26618);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenTransferCallback.ts







function useERC20TokenTransferCallback(address, amount1, recipient1) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount) || !erc20Contract) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        address,
        amount1,
        recipient1,
        erc20Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(21532);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721TokenTransferCallback.ts







function useERC721TokenTransferCallback(address) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc721Contract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (tokenId, recipient, gasConfig)=>{
        if (!account || !recipient || !tokenId || !erc721Contract) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !(0,utils_address/* isSameAddress */.Wr)(ownerOf, account)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        erc721Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(90495);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useNativeTokenTransferCallback.ts









function useNativeTransferCallback() {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig, memo)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount)) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await web3.eth.getBalance(account);
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? (0,lib.toHex)(memo) : undefined
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value: amount,
            data: memo ? (0,lib.toHex)(memo) : undefined,
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error, hash)=>{
                if (error) {
                    setTransferState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTransferState({
                        type: types/* TransactionStateType.HASH */.n$.HASH,
                        hash
                    });
                    resolve(hash);
                }
            });
        });
    }, [
        web3,
        account,
        chainId
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts





function useTokenTransferCallback(type, address) {
    const r1 = useNativeTransferCallback();
    const r2 = useERC20TokenTransferCallback(address);
    const r3 = useERC721TokenTransferCallback(address);
    const type_ = type;
    switch(type_){
        case types/* EthereumTokenType.Native */.Dr.Native:
            return r1;
        case types/* EthereumTokenType.ERC20 */.Dr.ERC20:
            return r2;
        case types/* EthereumTokenType.ERC721 */.Dr.ERC721:
            return r3;
        case types/* EthereumTokenType.ERC1155 */.Dr.ERC1155:
            throw new Error('To be implemented.');
        default:
            (0,esm/* unreachable */.t1)(type_);
    }
}


/***/ }),

/***/ 15030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90609);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 90609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable),
/* harmony export */   "ir": () => (/* binding */ isFinalState)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95130);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ })

}]);