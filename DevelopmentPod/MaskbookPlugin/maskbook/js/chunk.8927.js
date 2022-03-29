(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8927],{

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

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

/***/ 49076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fF": () => (/* binding */ ITO_MetadataReader),
  "th": () => (/* binding */ gcd),
  "cr": () => (/* binding */ isCompactPayload),
  "_x": () => (/* binding */ payloadIntoMask),
  "_D": () => (/* binding */ payloadOutMask),
  "xT": () => (/* binding */ sortTokens),
  "F6": () => (/* binding */ tokenIntoMask)
});

// UNUSED EXPORTS: payloadOutMaskCompact, renderWithITO_Metadata, timestampInMask, timestampOutMask, tokenOutMask

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(75042);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,base/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
function ITO_MetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta);
}
/**
 * The greatest common divisor
 */ function gcd(a, b) {
    let a_ = a.abs();
    let b_ = b.abs();
    if (b_.isGreaterThan(a_)) {
        const temp = b_;
        b_ = a_;
        a_ = temp;
    }
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (b_.isZero()) return a_;
        a_ = a_.mod(b_);
        if (a_.isZero()) return b_;
        b_ = b_.mod(a_);
    }
}
function sortTokens(tokenA, tokenB) {
    const addressA = tokenA.address.toLowerCase();
    const addressB = tokenB.address.toLowerCase();
    if ((0,address/* isNativeTokenAddress */.qw)(addressA)) return -1;
    if ((0,address/* isNativeTokenAddress */.qw)(addressB)) return 1;
    return addressA < addressB ? -1 : 1;
}
function timestampInMask(timestamp) {
    return timestamp * 1000;
}
function timestampOutMask(timestamp) {
    return Math.floor(timestamp / 1000);
}
function tokenIntoMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chain_id'),
        chainId: token.chain_id
    };
}
function tokenOutMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chainId'),
        chain_id: token.chainId
    };
}
function payloadIntoMask(payload) {
    return {
        ...payload,
        start_time: timestampInMask(payload.start_time),
        end_time: timestampInMask(payload.end_time),
        creation_time: timestampInMask(payload.creation_time),
        token: tokenIntoMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenIntoMask).sort(sortTokens)
    };
}
function payloadOutMask(payload) {
    return {
        ...payload,
        start_time: timestampOutMask(payload.start_time),
        end_time: timestampOutMask(payload.end_time),
        creation_time: timestampOutMask(payload.creation_time),
        token: tokenOutMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenOutMask)
    };
}
function payloadOutMaskCompact(payload) {
    return {
        ...payload,
        // HOTFIX of image payload for ITO
        // remove unnecessary chunks of data to reduce the size of payload
        token: tokenOutMask(payload.token),
        contract_address: '',
        message: '',
        start_time: 0,
        end_time: 0,
        creation_time: 0,
        limit: '0',
        total_remaining: '0',
        exchange_amounts: [],
        exchange_tokens: []
    };
}
function isCompactPayload(payload) {
    return !payload.exchange_tokens.length;
}


/***/ })

}]);