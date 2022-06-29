(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[928],{

/***/ 64271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.DOMPurify || (window.DOMPurify = (__webpack_require__(22214)["default"]) || __webpack_require__(22214));

/***/ }),

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

/***/ 37145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 47061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PluginWalletConnectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PluginWalletConnectIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PluginWalletConnectIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.15015 7.36221C4.15015 7.03084 4.41878 6.76221 4.75015 6.76221H9.25015C9.58152 6.76221 9.85015 7.03084 9.85015 7.36221C9.85015 7.69358 9.58152 7.96221 9.25015 7.96221H4.75015C4.41878 7.96221 4.15015 7.69358 4.15015 7.36221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.76765 1.7293C2.56902 1.7293 1.60015 2.69817 1.60015 3.8968V7.36179C1.60015 7.69317 1.33152 7.96179 1.00015 7.96179C0.668776 7.96179 0.400146 7.69317 0.400146 7.36179V3.8968C0.400146 2.03543 1.90628 0.529297 3.76765 0.529297H7.98264C8.86881 0.529297 9.70567 0.805241 10.3308 1.34136C10.9644 1.8848 11.3501 2.67182 11.3501 3.61179C11.3501 3.94317 11.0815 4.2118 10.7501 4.2118C10.4188 4.2118 10.1501 3.94317 10.1501 3.61179C10.1501 3.02177 9.91716 2.56754 9.54953 2.25223C9.17337 1.9296 8.62648 1.7293 7.98264 1.7293H3.76765Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.00015 4.21221C2.67402 4.21221 1.60015 5.28608 1.60015 6.61221V11.8622C1.60015 13.1883 2.67402 14.2622 4.00015 14.2622H11.5001C12.8263 14.2622 13.9001 13.1883 13.9001 11.8622V11.3747H13.8027C12.8621 11.3747 11.896 10.7961 11.6257 9.79044L11.6249 9.78738L11.6249 9.78738C11.4193 9.00591 11.6636 8.23162 12.1873 7.72391C12.5779 7.32659 13.1128 7.09967 13.6901 7.09967H13.9001V6.61221C13.9001 5.29358 12.8188 4.21221 11.5001 4.21221H4.00015ZM0.400146 6.61221C0.400146 4.62334 2.01128 3.01221 4.00015 3.01221H11.5001C13.4815 3.01221 15.1001 4.63084 15.1001 6.61221V7.69967C15.1001 8.03104 14.8315 8.29967 14.5001 8.29967H13.6901C13.4309 8.29967 13.2038 8.40006 13.04 8.56827C13.0353 8.5731 13.0305 8.57786 13.0257 8.58253C12.8047 8.79464 12.6923 9.12611 12.785 9.48043C12.8903 9.86908 13.3039 10.1747 13.8027 10.1747H14.5001C14.8315 10.1747 15.1001 10.4433 15.1001 10.7747V11.8622C15.1001 13.8511 13.489 15.4622 11.5001 15.4622H4.00015C2.01128 15.4622 0.400146 13.8511 0.400146 11.8622V6.61221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6903 8.29912C13.4311 8.29912 13.204 8.39951 13.0402 8.56772L13.0294 8.57849C12.8376 8.76576 12.7307 9.03208 12.7576 9.31477L12.7583 9.32182L12.7583 9.32183C12.7961 9.77582 13.235 10.1741 13.7803 10.1741H15.2278C15.3278 10.1741 15.4003 10.094 15.4003 10.0091V8.46414C15.4003 8.37932 15.3278 8.29912 15.2278 8.29912H13.6903ZM12.1858 7.72513C12.5765 7.32671 13.1122 7.09912 13.6903 7.09912H15.2278C15.9829 7.09912 16.6003 7.70895 16.6003 8.46414V10.0091C16.6003 10.7643 15.9829 11.3741 15.2278 11.3741H13.7803C12.7067 11.3741 11.6617 10.5891 11.5627 9.42502C11.5011 8.76677 11.7517 8.1519 12.1858 7.72513Z",
            fill: "white"
        })
    ]
}), '0 0 17 16');


/***/ }),

/***/ 71403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(8461);
;// CONCATENATED MODULE: ../icons/plugins/DHEDGEIcon.tsx


const DHEDGEIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M5.065 7.89L2.678 9.01v5.87l2.387-1.071V7.89zM9.205 1.12L6.818 2.214v10.912l2.387-1.023V1.119zM11.032 12.688V5.771l2.29 1.17v7.038l-2.29-1.29z",
                fill: "#0096CA"
            })
        })
    })
;

// EXTERNAL MODULE: ./src/plugins/dHEDGE/base.tsx
var dHEDGE_base = __webpack_require__(4348);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(37145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/constants.ts
var constants = __webpack_require__(63639);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var messages = __webpack_require__(29611);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(17794);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(68705);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants_constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/usePool.ts








function useFetchPool(address) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return;
        return messages/* PluginDHedgeRPC.fetchPool */.t.fetchPool(address, constants/* API_URL */.T5);
    }, [
        address
    ]);
}
function useFetchPoolHistory(address, period, sort = true) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return [];
        return messages/* PluginDHedgeRPC.fetchPoolPerformance */.t.fetchPoolPerformance(address, period, constants/* API_URL */.T5, sort);
    }, [
        address,
        period,
        sort
    ]);
}
function usePoolDepositAssets(pool) {
    const { sUSD_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const poolManagerContract = (0,useDHedgePool/* useDHedgePoolManagerContract */.rY)(chainId, pool?.managerLogicAddress);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pool) return;
        if (pool.poolType === types/* PoolType.v1 */.W4.v1) return sUSD_ADDRESS ? [
            sUSD_ADDRESS
        ] : undefined;
        return poolManagerContract?.methods.getDepositAssets().call();
    }, [
        pool,
        chainId,
        sUSD_ADDRESS,
        poolManagerContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(18940);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Refresh.js
var icons_material_Refresh = __webpack_require__(3857);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(73282);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(31816);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/ChartControl.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
function PriceChartPeriodControl(props) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: [
            types/* Period.D1 */.pH.D1,
            types/* Period.W1 */.pH.W1,
            types/* Period.M1 */.pH.M1,
            types/* Period.M3 */.pH.M3,
            types/* Period.M6 */.pH.M6
        ].map((period)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                onClick: ()=>props.onPeriodChange?.(period)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    component: "span",
                    color: props.period === period ? 'primary' : 'textSecondary',
                    children: period
                })
            }, period)
        )
    });
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PerformanceChart.tsx












const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PerformanceChart_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative',
            padding: theme.spacing(2)
        },
        svg: {
            display: 'block',
            color: theme.palette.text.primary
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            fontSize: 15
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function PerformanceChart(props) {
    const { pool  } = props;
    const { classes  } = PerformanceChart_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    const [period, setPeriod] = (0,react.useState)(types/* Period.D1 */.pH.D1);
    // #region fetch pool history
    const { value: perfHistory , error , loading , retry  } = useFetchPoolHistory(pool.address, period);
    const stats = perfHistory?.map((row)=>[
            Number(row.timestamp),
            Number(row.performance)
        ]
    ) ?? [];
    // #endregion
    // #region make chart responsive
    const { width  } = (0,useWindowSize/* default */.Z)();
    const [responsiveWidth, setResponsiveWidth] = (0,react.useState)(DEFAULT_DIMENSION.width);
    const [responsiveHeight, setResponsiveHeight] = (0,react.useState)(DEFAULT_DIMENSION.height);
    (0,react.useEffect)(()=>{
        if (!rootRef.current) return;
        setResponsiveWidth(rootRef.current.getBoundingClientRect().width || DEFAULT_DIMENSION.width);
        setResponsiveHeight(rootRef.current.getBoundingClientRect().height || DEFAULT_DIMENSION.height);
    }, [
        width /* redraw canvas if window width resize */ 
    ]);
    // #endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    (0,useLineChart/* useLineChart */.t)(svgRef, stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-dhedge-performance-line-chart', {
        tickFormat: '.0%',
        formatTooltip: (value)=>`${(value * 100).toFixed(1)}%`
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: retry
            }),
            stats.length && !error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartPeriodControl, {
                        period: period,
                        onPeriodChange: setPeriod
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: loading ? t('plugin_dhedge_loading_chart') : error ? t('plugin_dhedge_fetch_error') : t('plugin_dhedge_no_data')
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(65129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(28892);
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-dompurify@0.18.0/node_modules/isomorphic-dompurify/browser.js
var browser = __webpack_require__(64271);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolStats.tsx










const DIGIT_LENGTH = 18;
const PoolStats_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            alignItems: 'center',
            '& svg': {
                marginRight: theme.spacing(0.5)
            }
        },
        title: {
            fontSize: 12
        },
        value: {
            fontSize: 32
        },
        meta: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            maxWidth: '100%'
        }
    })
);
function PoolStats(props) {
    const { pool  } = props;
    const { classes  } = PoolStats_useStyles();
    // #region process stats
    const valueManaged = (0,utils/* formatAmountPostfix */.K)((0,base_src/* formatBalance */.az)(pool?.totalValue, DIGIT_LENGTH));
    const lifeTimeReturn = new (bignumber_default())((0,base_src/* formatBalance */.az)(pool.performance, DIGIT_LENGTH)).minus(1).multipliedBy(100);
    const riskFactor = pool && pool?.riskFactor !== -1 ? pool?.riskFactor : '-';
    // pool detail contains raw html and need to sanitize before use
    const cleanDescription = browser_default().sanitize(pool.poolDetails);
    const [expanded, setExpanded] = (0,react.useState)(cleanDescription.length < constants/* POOL_DESCRIPTION_LIMIT */.yV);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_value_managed"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.value,
                                    children: [
                                        "$",
                                        valueManaged
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_lifetime_return"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: lifeTimeReturn.isGreaterThan(0) ? entry/* MaskColorVar.greenMain */.ZN.greenMain : lifeTimeReturn.isLessThan(0) ? entry/* MaskColorVar.redMain */.ZN.redMain : 'textPrimary',
                                    className: classes.value,
                                    children: [
                                        lifeTimeReturn.toFixed(2),
                                        "%"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_risk_factor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: riskFactor === '-' || riskFactor === 3 ? 'textPrimary' : riskFactor < 3 ? entry/* MaskColorVar.greenMain */.ZN.greenMain : entry/* MaskColorVar.redMain */.ZN.redMain,
                                    className: classes.value,
                                    children: [
                                        riskFactor,
                                        " / 5"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            cleanDescription ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.description,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                color: "textPrimary",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_strategy"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: expanded ? cleanDescription : cleanDescription.slice(0, constants/* POOL_DESCRIPTION_LIMIT */.yV).concat('...')
                                    }
                                })
                            }),
                            cleanDescription.length > constants/* POOL_DESCRIPTION_LIMIT */.yV ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "primary",
                                onClick: ()=>setExpanded(!expanded)
                                ,
                                children: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_see_less"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_dhedge_see_more"
                                })
                            }) : null
                        ]
                    })
                ]
            }) : null
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useManager.ts


function useAvatar(address) {
    return (0,entry_web3/* useBlockie */.YT)(address, constants/* BLOCKIES_OPTIONS */.jz);
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolViewDeck.tsx













const PoolViewDeck_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        title: {
            padding: theme.spacing(1, 0),
            display: 'flex',
            alignItems: 'center',
            '& > :last-child': {
                marginTop: 4,
                marginLeft: 4
            }
        },
        meta: {
            fontSize: 14,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'left'
        },
        avatar: {
            width: theme.spacing(8),
            height: theme.spacing(8)
        },
        text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        chip: {
            width: '100%',
            fontSize: 'x-small'
        }
    })
);
function PoolViewDeck(props) {
    const { pool , inputTokens , link  } = props;
    const { classes  } = PoolViewDeck_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const blockie = useAvatar(pool.managerAddress);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region manager share
    const managerShare = new (bignumber_default())(pool.balanceOfManager).dividedBy(pool.totalSupply).multipliedBy(100).integerValue((bignumber_default()).ROUND_UP);
    // #endregion
    // #region the invest dialog
    const { setDialog: openInvestDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated);
    const onInvest = (0,react.useCallback)(()=>{
        if (!pool || !inputTokens) return;
        openInvestDialog({
            open: true,
            pool,
            tokens: inputTokens
        });
    }, [
        pool,
        inputTokens,
        openInvestDialog
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.meta,
        direction: "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "center",
                xs: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: link,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: blockie,
                        className: classes.avatar
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: link,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                children: pool.name.toUpperCase()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        spacing: 0.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.text,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_managed_by",
                                        components: {
                                            manager: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, pool.managerAddress)
                                            })
                                        },
                                        values: {
                                            managerName: pool.managerName
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.text,
                                    children: managerShare.isLessThanOrEqualTo(50) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_manager_share",
                                        components: {
                                            share: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                                        },
                                        values: {
                                            managerShare
                                        }
                                    }) : t('plugin_dhedge_manager_share_more_than_50')
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "right",
                xs: 4,
                textAlign: "center",
                children: account && pool.chainId === chainId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    fullWidth: true,
                    color: "primary",
                    onClick: onInvest,
                    children: t('plugin_dhedge_invest')
                }) : null
            })
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(72499);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolView.tsx














const PoolView_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxShadow: 'none',
            padding: 0
        },
        message: {
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 'inherit'
        },
        content: {
            width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            overflow: 'auto',
            maxHeight: 350,
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset'
        },
        tab: {
            minHeight: 'unset',
            minWidth: 'unset'
        }
    })
);
function PoolView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolView_useStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region allowed tokens
    const { value: pool , error , loading , retry  } = useFetchPool(props.address ?? '');
    // #region susd token
    const { value: allowedTokens , loading: loadingAllowedTokens , retry: retryAllowedTokens , error: errorAllowedTokens ,  } = usePoolDepositAssets(pool);
    // #endregion
    // #region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_stats')
        }, "stats"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_chart')
        }, "chart"), 
    ].filter(Boolean);
    // #endregion
    if (loading || loadingAllowedTokens) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        textAlign: "center",
        sx: {
            padding: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
    });
    if (!pool) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_pool_not_found')
    });
    if (error || errorAllowedTokens && currentChainId === pool.chainId) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: [
            t('plugin_dhedge_smt_wrong'),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            error?.message || errorAllowedTokens?.message,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: error ? retry : retryAllowedTokens
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolViewDeck, {
                            pool: pool,
                            inputTokens: allowedTokens,
                            link: props.link
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                className: classes.tabs,
                                indicatorColor: "primary",
                                textColor: "primary",
                                variant: "fullWidth",
                                value: tabIndex,
                                onChange: (_, newValue)=>setTabIndex(newValue)
                                ,
                                TabIndicatorProps: {
                                    style: {
                                        display: 'none'
                                    }
                                },
                                children: tabs
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                className: classes.body,
                                children: [
                                    tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolStats, {
                                        pool: pool
                                    }) : null,
                                    tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PerformanceChart, {
                                        pool: pool
                                    }) : null
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    width: 'calc(100% - 24px)',
                    padding: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: pool?.chainId ?? evm_types/* ChainId.Mainnet */.a_.Mainnet,
                    renderInTimeline: true
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx + 1 modules
var InvestDialog = __webpack_require__(42426);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/SNSAdaptor/index.tsx











function getPoolFromLink(link) {
    const matchLink = (0,constants/* createMatchLink */.ag)();
    const [, , address] = matchLink ? link.match(matchLink) ?? [] : [];
    return {
        link,
        address
    };
}
function getPoolFromLinks(links) {
    return links.map(getPoolFromLink).find(Boolean);
}
const sns = {
    ...dHEDGE_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const links = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val);
        }, [
            props.message
        ]);
        if (!links) return null;
        const pool = getPoolFromLinks(links);
        if (!pool?.address) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const pool = getPoolFromLinks(links);
        if (!pool?.address) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        });
    },
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(InvestDialog/* InvestDialog */.V, {});
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: dHEDGE_base/* base.ID */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_dhedge_description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_dhedge_name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DHEDGEIcon, {}),
            marketListSortingPriority: 11,
            tutorialLink: 'https://realmasknetwork.notion.site/fb00ff2e626949279c83b59ed9207b9a'
        }, 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DHEDGEIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(27, 144, 238, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(0, 150, 202, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
        address: props.address,
        link: props.link
    });
}


/***/ }),

/***/ 28892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72499);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17794);



const ONE_THOUSAND = 1000;
const ONE_MILLION = ONE_THOUSAND * 1000;
const ONE_BILLION = ONE_MILLION * 1000;
const ONE_TRILLION = ONE_BILLION * 1000;
/**
 * A helper function to format amount
 * @param input raw amount
 * @return {String} Postfixed formatted amount
 * @example
 * formatAmountPostfix(1.234);
 * // returns 1.23
 * @example
 * formatAmountPostfix(12.34);
 * // returns 12.3
 * @example
 * formatAmountPostfix(2000.123);
 * // returns 2.12K
 * @example
 * formatAmountPostfix(20000.123);
 * // returns 20.1K
 **/ function formatAmountPostfix(input) {
    let postfix = '';
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(input);
    if (amount.isGreaterThanOrEqualTo(ONE_TRILLION)) {
        postfix = 'T';
        amount = amount.dividedBy(ONE_TRILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_BILLION)) {
        postfix = 'B';
        amount = amount.dividedBy(ONE_BILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_MILLION)) {
        postfix = 'M';
        amount = amount.dividedBy(ONE_MILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_THOUSAND)) {
        postfix = 'K';
        amount = amount.dividedBy(ONE_THOUSAND);
    }
    const fixedAmount = amount.isLessThanOrEqualTo(10) ? amount.toFixed(2) : amount.toFixed(1);
    return `${fixedAmount.replace(/\.0$/, '')}${postfix}`;
}
function getChainIdFromCode(blockChainCode) {
    switch(blockChainCode){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic;
    }
}


/***/ }),

/***/ 73495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72288);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47061);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89239);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48
        },
        tooltip: {
            borderRadius: 4,
            padding: 10
        }
    })
);
function ChainBoundary(props) {
    const { noSwitchNetworkTip =true , expectedPluginID , expectedChainId , predicate =(actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId
     ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const actualPluginID1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const plugin = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__/* .useActivatedPlugin */ .Rc)(actualPluginID1, 'any');
    const { Others: actualOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(actualPluginID1);
    const actualChainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(actualPluginID1);
    const actualProviderType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useProviderType */ ._o)(actualPluginID1);
    const actualChainName = actualOthers?.chainResolver.chainName(actualChainId1);
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)(actualPluginID1);
    const { Others: expectedOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(expectedPluginID);
    const expectedConnection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Connection */ .Tv)(expectedPluginID);
    const expectedAllowTestnet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAllowTestnet */ .QE)(expectedPluginID);
    const expectedChainName = expectedOthers?.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptor */ .Vw)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, expectedChainId);
    const expectedChainAllowed = expectedOthers?.chainResolver.isValid(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID1 === expectedPluginID;
    const isMatched = predicate(actualPluginID1, actualChainId1);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    const onSwitchChain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(1000);
        if (!expectedChainAllowed) return;
        if (!isPluginIDMatched || actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect) {
            openSelectProviderDialog();
            return;
        }
        if (!isMatched) {
            await expectedConnection?.connect({
                chainId: expectedChainId
            });
        }
    }, [
        expectedChainAllowed,
        isMatched,
        isPluginIDMatched,
        actualProviderType,
        expectedChainId,
        expectedConnection,
        openSelectProviderDialog, 
    ]);
    // TODO: will remove this and extract new boundary for timeline
    const buttonProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...props.renderInTimeline ? {
                variant: 'contained',
                fullWidth: true,
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: theme.palette.maskColor?.white,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                }
            } : {},
            ...props.ActionButtonPromiseProps
        };
    }, [
        props.ActionButtonPromiseProps,
        props.renderInTimeline
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootTooltip */ .p_, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: props.className,
                sx: {
                    flex: 1
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: children
            })
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !props.hiddenConnectButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            fullWidth: true,
            startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .PluginWalletConnectIcon */ .Q, {}),
            variant: "contained",
            size: props.ActionButtonPromiseProps?.size,
            sx: {
                marginTop: 1.5
            },
            onClick: openSelectProviderDialog,
            ...buttonProps,
            children: t('plugin_wallet_connect_wallet')
        }) : null
    }));
    if (isMatched) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
    if (actualPluginID1 !== expectedPluginID) {
        return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                    fullWidth: true,
                    className: classes.switchButton,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                        mainIcon: expectedNetworkDescriptor?.icon,
                        size: 18
                    }),
                    sx: props.ActionButtonPromiseProps?.sx,
                    style: {
                        borderRadius: 10
                    },
                    init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_connect_network', {
                            network: 'EVM'
                        })
                    }),
                    waiting: t('plugin_wallet_connect_network_under_going', {
                        network: 'EVM'
                    }),
                    complete: t('plugin_wallet_connect_network', {
                        network: 'EVM'
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...buttonProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualChainName
                    })
                })
            }) : null,
            expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                    mainIcon: expectedNetworkDescriptor?.icon,
                    size: 18
                }),
                sx: props.ActionButtonPromiseProps?.sx,
                style: {
                    borderRadius: 10,
                    paddingTop: 11,
                    paddingBottom: 11
                },
                init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedChainName
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedChainName
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedChainName
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...buttonProps
            }) : null
        ]
    }), actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect ? t('plugin_wallet_connect_tips') : '');
}


/***/ })

}]);