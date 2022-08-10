(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6284],{

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

/***/ 95837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50719);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44451);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92916);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21784);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        tab: {
            backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            '& .MuiTabs-flexContainer': {
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-scroller': {
                margin: '0 1px'
            },
            '& .MuiTabs-scrollButtons': {
                width: 'unset',
                backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
                '&.Mui-disabled': {
                    opacity: 1,
                    '& svg': {
                        opacity: 0.3
                    }
                }
            }
        }
    })
);
function NetworkTab(props) {
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isDashboardPage */ .K2)();
    const { chainId , setChainId , chains  } = props;
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkDescriptors */ .px)();
    const usedNetworks = networks.filter((x)=>chains.find((c)=>c === x.chainId
        )
    );
    const networkIds = usedNetworks.map((x)=>x.chainId.toString()
    );
    const [currentTab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .YE)(chainId.toString() ?? networkIds[0], ...networkIds);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskTabList */ .C3, {
            variant: "flexible",
            onChange: (e, v)=>{
                setChainId(Number.parseInt(v, 10));
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: currentTab === x.chainId.toString() ? 700 : 400,
                                children: x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
    });
}


/***/ }),

/***/ 32730:
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
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(83072);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,dom/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,dom/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,dom/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
function ITO_MetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta);
}
/**
 * The greatest common divisor
 */ function gcd(a, b) {
    a = a.abs();
    b = b.abs();
    if (b.isGreaterThan(a)) {
        const temp = b;
        b = a;
        a = temp;
    }
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (b.isZero()) return a;
        a = a.mod(b);
        if (a.isZero()) return b;
        b = b.mod(a);
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


/***/ }),

/***/ 16284:
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
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ./src/plugins/ITO/assets/ItoLabelIcon.tsx

const ItoLabelIcon = ({ size =24  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.4866 6.61475C23.4632 7.64131 11.9976 21.3382 11.9976 21.3382C11.9976 21.3382 4.9335 13.346 0.513184 6.61709H23.4866V6.61475Z",
                fill: "#FFB600"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M18.7194 0.661621H5.28037L0.513184 6.61475H23.4866L18.7194 0.661621Z",
                fill: "#FFD401"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42944 6.61475L11.9998 0.661621L16.3005 6.61475H7.42944Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M7.42944 6.61475L11.9974 21.3382L16.3005 6.61475H7.42944Z",
                fill: "white"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M5.28037 0.661621L7.42959 6.61475H0.513184L5.28037 0.661621Z",
                fill: "#FAFF73"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                opacity: "0.2",
                d: "M18.7193 0.661621L16.3005 6.61475H23.4865L18.7193 0.661621Z",
                fill: "#FFFFFD"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.8351 6.854C16.6523 6.91494 16.5234 7.03447 16.4484 7.21025C16.3195 7.39541 16.2773 7.60869 16.2445 7.82432C16.2093 8.03525 16.1882 8.24853 16.1578 8.48994C16.1203 8.12197 16.0875 7.78213 15.9914 7.454C16.0078 7.42353 15.9914 7.40713 15.9656 7.39541L15.9375 7.3251C15.9328 7.31807 15.9304 7.30869 15.9257 7.30166C15.9093 7.2665 15.8906 7.229 15.8742 7.19385C15.8648 7.11182 15.8156 7.05791 15.7429 7.02041C15.7054 6.94072 15.6398 6.89385 15.5531 6.8751C15.5437 6.86807 15.532 6.86338 15.5226 6.85635C15.4453 6.77432 15.3468 6.74385 15.239 6.73916C15.232 6.73682 15.225 6.73447 15.2156 6.73447C15.164 6.69932 15.1101 6.68057 15.0468 6.69463C15.0304 6.69229 15.014 6.68994 15 6.6876C14.9953 6.68291 14.9882 6.68291 14.9835 6.68525H14.9789C14.9179 6.65244 14.8546 6.63369 14.7843 6.64775C14.7703 6.64541 14.7539 6.64541 14.7398 6.64307C14.7093 6.61025 14.6648 6.63135 14.632 6.61494C14.571 6.58682 14.625 6.5751 14.6437 6.56103C14.6578 6.55869 14.6742 6.55635 14.6882 6.55635C14.714 6.57041 14.7398 6.56807 14.7609 6.54697C14.9578 6.5165 15.157 6.48369 15.3468 6.42041C15.3867 6.40635 15.4218 6.38057 15.4593 6.35947C15.6281 6.28447 15.7851 6.19775 15.839 5.99853C15.9656 5.88603 15.9937 5.72666 16.0265 5.57666C16.0898 5.30479 16.1226 5.02354 16.1531 4.74463C16.1976 4.98604 16.2093 5.23213 16.2609 5.47119C16.3054 5.66338 16.3546 5.85557 16.4625 6.02432C16.5796 6.21182 16.7531 6.329 16.9593 6.40635C17.2289 6.50713 17.5148 6.53291 17.796 6.57041C17.8546 6.57744 17.9132 6.5915 17.9976 6.60557C17.6812 6.63369 17.3929 6.6665 17.114 6.73916C17.0179 6.7626 16.9148 6.78603 16.8351 6.854Z",
                fill: "#FBFAF4"
            })
        ]
    })
;

// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(32730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/plugins/ITO/messages.ts
var messages = __webpack_require__(19821);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolPayload.ts




function usePoolPayload(pid) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid) return;
        return messages/* PluginITO_RPC.getPool */.k.getPool(pid, chainId);
    }, [
        pid,
        chainId
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(62361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/startCase.js
var startCase = __webpack_require__(2189);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(442);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(91788);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(83072);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
;// CONCATENATED MODULE: ./src/plugins/ITO/types.ts
var ITO_Status;
(function(ITO_Status) {
    ITO_Status["waited"] = "waited";
    ITO_Status["started"] = "started";
    ITO_Status["expired"] = "expired";
})(ITO_Status || (ITO_Status = {}));
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["create"] = 0] = "create";
    DialogTabs[DialogTabs["past"] = 1] = "past";
})(DialogTabs || (DialogTabs = {}));

;// CONCATENATED MODULE: ../web3-contracts/abis/ITO.json
const ITO_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-contracts/abis/ITO2.json
var ITO2 = __webpack_require__(47744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/interface.js
var lib_esm_interface = __webpack_require__(58528);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/utils/checkAvailability.ts



const interFaceV1 = new lib_esm_interface/* Interface */.vU(ITO_namespaceObject);
const interFaceV2 = new lib_esm_interface/* Interface */.vU(ITO2);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, connection, isV1 = false) {
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await connection.callTransaction({
        to,
        from,
        data: callData
    }, {
        chainId
    });
    return decodeResult(data, isV1);
}
function decodeResult(data, isV1) {
    const results = (isV1 ? interFaceV1 : interFaceV2).decodeFunctionResult('check_availability', data);
    return {
        exchange_addrs: results[0],
        remaining: +parseHexToInt(results[1]),
        started: results[2],
        expired: results[3],
        destructed: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {} : {
            claimed: results[8],
            start_time: parseHexToInt(results[9]),
            end_time: parseHexToInt(results[10]),
            qualification_addr: results[11]
        }
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailability.ts





function useAvailability(id, contractAddress, options) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, options?.account);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, options?.chainId);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const isV1 = (0,src/* isSameAddress */.Wr)(contractAddress ?? '', ITO_CONTRACT_ADDRESS);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !contractAddress || !connection) return null;
        return checkAvailability(id, account, contractAddress, chainId, connection, isV1);
    }, [
        id,
        account,
        chainId,
        connection,
        isV1,
        contractAddress
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification.json
const Qualification_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_start_time","type":"uint256"},{"internalType":"uint256","name":"_max_gas_price","type":"uint256"},{"internalType":"uint256","name":"_min_token_amount","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[],"name":"GasPriceOver","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"anonymous":false,"inputs":[],"name":"Unlucky","type":"event"},{"inputs":[],"name":"get_creation_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isLucky","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"ito_start_time","type":"uint256"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lucky_factor","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"max_gas_price","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"min_token_amount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_lucky_factor","type":"uint8"}],"name":"set_lucky_factor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max_gas_price","type":"uint256"}],"name":"set_max_gas_price","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min_token_amount","type":"uint256"}],"name":"set_min_token_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token_addr","type":"address"}],"name":"set_token_addr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"token_addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/Qualification2.json
const Qualification2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"qualified","type":"bool"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"Qualification","type":"event"},{"inputs":[],"name":"get_start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"ifQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes32[]","name":"data","type":"bytes32[]"}],"name":"logQualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"errorMsg","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_start_time","type":"uint256"}],"name":"set_start_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationContract.ts





function useQualificationContract(chainId, address, ito_address) {
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const QLF_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, address, Qualification_namespaceObject);
    const QLF2_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, address, Qualification2_namespaceObject);
    return (0,src/* isSameAddress */.Wr)(ito_address, ITO_CONTRACT_ADDRESS) ? {
        version: 1,
        contract: QLF_CONTRACT
    } : {
        version: 2,
        contract: QLF2_CONTRACT
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualification.ts




function useQualification(qualification_address, ito_address) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: qualificationContract  } = useQualificationContract(chainId, qualification_address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const startTime = await qualificationContract.methods.get_start_time().call({
            from: account
        });
        return Number(startTime) * 1000;
    }, [
        account,
        qualificationContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAvailabilityComputed.ts









function useAvailabilityComputed(payload) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)(payload.chain_id ?? chainId);
    const asyncResult = useAvailability(payload.pid, payload.contract_address, {
        account: payload.seller.address,
        chainId: payload.chain_id ?? chainId
    });
    const { value: availability , loading: loadingITO  } = asyncResult;
    const qualificationAddress = (payload.qualification_address ?? availability?.qualification_addr) ?? DEFAULT_QUALIFICATION2_ADDRESS;
    const { value: qualification_start_time , loading: loadingQual  } = useQualification(qualificationAddress, payload.contract_address);
    asyncResult.loading = loadingITO || loadingQual;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            remaining: '0',
            startTime: 0,
            endTime: 0,
            canFetch: false,
            canSwap: false,
            canShare: false,
            canRefund: false,
            isUnlocked: false,
            hasLockTime: false,
            unlockTime: 0,
            qualificationAddress,
            listOfStatus: (0,compact/* default */.Z)([
                ITO_Status.expired
            ])
        }
    };
    const _startTime = Number(availability.start_time) * 1000 ? Number(availability.start_time) * 1000 : payload.start_time;
    const endTime = Number(availability.end_time) * 1000 ? Number(availability.end_time) * 1000 : payload.end_time;
    const startTime = qualification_start_time && qualification_start_time > _startTime ? qualification_start_time : _startTime;
    const isStarted = startTime < Date.now();
    const isExpired = availability.expired;
    const unlockTime = Number(availability.unlock_time) * 1000;
    const hasLockTime = unlockTime !== ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm;
    const isCompleted = Number(availability.swapped) > 0;
    return {
        ...asyncResult,
        computed: {
            remaining: availability.remaining,
            startTime,
            endTime,
            unlockTime,
            qualificationAddress,
            hasLockTime,
            isUnlocked: (0,isAfter/* default */.Z)(Date.now(), unlockTime),
            canFetch: payload.chain_id === chainId,
            canSwap: isStarted && !isExpired && !isCompleted && payload.chain_id === chainId && payload.password,
            canRefund: isExpired && payload.chain_id === chainId,
            canShare: !isStarted,
            listOfStatus: (0,compact/* default */.Z)([
                isStarted ? ITO_Status.started : ITO_Status.waited,
                isExpired ? ITO_Status.expired : undefined, 
            ])
        }
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useITO_Contract.ts





function useITO_Contract(chainId, contractAddress) {
    const { ITO_CONTRACT_ADDRESS , ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const ITO_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, ITO_CONTRACT_ADDRESS, ITO_namespaceObject);
    const ITO2_CONTRACT = (0,entry_web3_evm/* useContract */.cq)(chainId, ITO2_CONTRACT_ADDRESS, ITO2);
    return contractAddress && (0,src/* isSameAddress */.Wr)(contractAddress, ITO_CONTRACT_ADDRESS) ? {
        contract: ITO_CONTRACT,
        version: 1
    } : {
        contract: ITO2_CONTRACT,
        version: 2
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimCallback.ts







function useClaimCallback(pids, contractAddress) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const { contract: ITO_Contract  } = useITO_Contract(chainId, contractAddress);
    const isV1 = (0,src/* isSameAddress */.Wr)(ITO_CONTRACT_ADDRESS ?? '', contractAddress);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!ITO_Contract || !contractAddress || pids.length === 0 || !connection) return;
        // check if already claimed
        try {
            const availabilityList = await Promise.all(pids.map((pid)=>checkAvailability(pid, account, contractAddress, chainId, connection, isV1)
            ));
            const isClaimed = availabilityList.some((availability)=>availability.claimed
            );
            if (isClaimed) return;
        } catch  {
            return;
        }
        const config = {
            from: account
        };
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(ITO_Contract, ITO_Contract.methods.claim(pids), config);
        return connection.sendTransaction(tx);
    }, [
        account,
        chainId,
        ITO_Contract,
        json_stable_stringify_default()(pids),
        isV1,
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useDestructCallback.ts





function useDestructCallback(ito_address) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: ITO_Contract  } = useITO_Contract(chainId, ito_address);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,useAsyncFn/* default */.Z)(async (id)=>{
        if (!ITO_Contract || !id) return;
        const config = {
            from: account
        };
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(ITO_Contract, ITO_Contract.methods.destruct(id), config);
        return connection.sendTransaction(tx);
    }, [
        ITO_Contract,
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useIfQualified.ts




function useIfQualified(address, ito_address) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: qualificationContract , version  } = useQualificationContract(chainId, address, ito_address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract) return false;
        return (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
            from: account
        });
    }, [
        account,
        qualificationContract,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/usePoolTradeInfo.ts




/**
 * Get all trading activities of a given trader on a specific pool.
 * @param pid
 * @param trader
 */ function usePoolTradeInfo(pid, trader) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pid || !trader) return;
        return messages/* PluginITO_RPC.getTradeInfo */.k.getTradeInfo(pid, trader, chainId);
    }, [
        pid,
        trader,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/assets/regions.json
const regions_namespaceObject = JSON.parse('[{"code":"AF","name":"Afghanistan"},{"code":"AX","name":"Åland Islands"},{"code":"AL","name":"Albania"},{"code":"DZ","name":"Algeria"},{"code":"AS","name":"American Samoa"},{"code":"AD","name":"Andorra"},{"code":"AO","name":"Angola"},{"code":"AI","name":"Anguilla"},{"code":"AQ","name":"Antarctica"},{"code":"AG","name":"Antigua and Barbuda"},{"code":"AR","name":"Argentina"},{"code":"AM","name":"Armenia"},{"code":"AW","name":"Aruba"},{"code":"AU","name":"Australia"},{"code":"AT","name":"Austria"},{"code":"AZ","name":"Azerbaijan"},{"code":"BS","name":"Bahamas"},{"code":"BH","name":"Bahrain"},{"code":"BD","name":"Bangladesh"},{"code":"BB","name":"Barbados"},{"code":"BY","name":"Belarus"},{"code":"BE","name":"Belgium"},{"code":"BZ","name":"Belize"},{"code":"BJ","name":"Benin"},{"code":"BM","name":"Bermuda"},{"code":"BT","name":"Bhutan"},{"code":"BO","name":"Bolivia, Plurinational State of"},{"code":"BQ","name":"Bonaire, Sint Eustatius and Saba"},{"code":"BA","name":"Bosnia and Herzegovina"},{"code":"BW","name":"Botswana"},{"code":"BV","name":"Bouvet Island"},{"code":"BR","name":"Brazil"},{"code":"IO","name":"British Indian Ocean Territory"},{"code":"BN","name":"Brunei Darussalam"},{"code":"BG","name":"Bulgaria"},{"code":"BF","name":"Burkina Faso"},{"code":"BI","name":"Burundi"},{"code":"KH","name":"Cambodia"},{"code":"CM","name":"Cameroon"},{"code":"CA","name":"Canada"},{"code":"CV","name":"Cape Verde"},{"code":"KY","name":"Cayman Islands"},{"code":"CF","name":"Central African Republic"},{"code":"TD","name":"Chad"},{"code":"CL","name":"Chile"},{"code":"CN","name":"China"},{"code":"CX","name":"Christmas Island"},{"code":"CC","name":"Cocos (Keeling) Islands"},{"code":"CO","name":"Colombia"},{"code":"KM","name":"Comoros"},{"code":"CG","name":"Congo"},{"code":"CD","name":"Congo, the Democratic Republic of the"},{"code":"CK","name":"Cook Islands"},{"code":"CR","name":"Costa Rica"},{"code":"CI","name":"Côte d\'Ivoire"},{"code":"HR","name":"Croatia"},{"code":"CU","name":"Cuba"},{"code":"CW","name":"Curaçao"},{"code":"CY","name":"Cyprus"},{"code":"CZ","name":"Czech Republic"},{"code":"DK","name":"Denmark"},{"code":"DJ","name":"Djibouti"},{"code":"DM","name":"Dominica"},{"code":"DO","name":"Dominican Republic"},{"code":"EC","name":"Ecuador"},{"code":"EG","name":"Egypt"},{"code":"SV","name":"El Salvador"},{"code":"GQ","name":"Equatorial Guinea"},{"code":"ER","name":"Eritrea"},{"code":"EE","name":"Estonia"},{"code":"ET","name":"Ethiopia"},{"code":"FK","name":"Falkland Islands (Malvinas)"},{"code":"FO","name":"Faroe Islands"},{"code":"FJ","name":"Fiji"},{"code":"FI","name":"Finland"},{"code":"FR","name":"France"},{"code":"GF","name":"French Guiana"},{"code":"PF","name":"French Polynesia"},{"code":"TF","name":"French Southern Territories"},{"code":"GA","name":"Gabon"},{"code":"GM","name":"Gambia"},{"code":"GE","name":"Georgia"},{"code":"DE","name":"Germany"},{"code":"GH","name":"Ghana"},{"code":"GI","name":"Gibraltar"},{"code":"GR","name":"Greece"},{"code":"GL","name":"Greenland"},{"code":"GD","name":"Grenada"},{"code":"GP","name":"Guadeloupe"},{"code":"GU","name":"Guam"},{"code":"GT","name":"Guatemala"},{"code":"GG","name":"Guernsey"},{"code":"GN","name":"Guinea"},{"code":"GW","name":"Guinea-Bissau"},{"code":"GY","name":"Guyana"},{"code":"HT","name":"Haiti"},{"code":"HM","name":"Heard Island and McDonald Islands"},{"code":"VA","name":"Holy See (Vatican City State)"},{"code":"HN","name":"Honduras"},{"code":"HK","name":"Hong Kong"},{"code":"HU","name":"Hungary"},{"code":"IS","name":"Iceland"},{"code":"IN","name":"India"},{"code":"ID","name":"Indonesia"},{"code":"IR","name":"Iran, Islamic Republic of"},{"code":"IQ","name":"Iraq"},{"code":"IE","name":"Ireland"},{"code":"IM","name":"Isle of Man"},{"code":"IL","name":"Israel"},{"code":"IT","name":"Italy"},{"code":"JM","name":"Jamaica"},{"code":"JP","name":"Japan"},{"code":"JE","name":"Jersey"},{"code":"JO","name":"Jordan"},{"code":"KZ","name":"Kazakhstan"},{"code":"KE","name":"Kenya"},{"code":"KI","name":"Kiribati"},{"code":"KP","name":"Korea, Democratic People\'s Republic of"},{"code":"KR","name":"Korea, Republic of"},{"code":"KW","name":"Kuwait"},{"code":"KG","name":"Kyrgyzstan"},{"code":"LA","name":"Lao People\'s Democratic Republic"},{"code":"LV","name":"Latvia"},{"code":"LB","name":"Lebanon"},{"code":"LS","name":"Lesotho"},{"code":"LR","name":"Liberia"},{"code":"LY","name":"Libya"},{"code":"LI","name":"Liechtenstein"},{"code":"LT","name":"Lithuania"},{"code":"LU","name":"Luxembourg"},{"code":"MO","name":"Macao"},{"code":"MK","name":"Macedonia, the Former Yugoslav Republic of"},{"code":"MG","name":"Madagascar"},{"code":"MW","name":"Malawi"},{"code":"MY","name":"Malaysia"},{"code":"MV","name":"Maldives"},{"code":"ML","name":"Mali"},{"code":"MT","name":"Malta"},{"code":"MH","name":"Marshall Islands"},{"code":"MQ","name":"Martinique"},{"code":"MR","name":"Mauritania"},{"code":"MU","name":"Mauritius"},{"code":"YT","name":"Mayotte"},{"code":"MX","name":"Mexico"},{"code":"FM","name":"Micronesia, Federated States of"},{"code":"MD","name":"Moldova, Republic of"},{"code":"MC","name":"Monaco"},{"code":"MN","name":"Mongolia"},{"code":"ME","name":"Montenegro"},{"code":"MS","name":"Montserrat"},{"code":"MA","name":"Morocco"},{"code":"MZ","name":"Mozambique"},{"code":"MM","name":"Myanmar"},{"code":"NA","name":"Namibia"},{"code":"NR","name":"Nauru"},{"code":"NP","name":"Nepal"},{"code":"NL","name":"Netherlands"},{"code":"NC","name":"New Caledonia"},{"code":"NZ","name":"New Zealand"},{"code":"NI","name":"Nicaragua"},{"code":"NE","name":"Niger"},{"code":"NG","name":"Nigeria"},{"code":"NU","name":"Niue"},{"code":"NF","name":"Norfolk Island"},{"code":"MP","name":"Northern Mariana Islands"},{"code":"NO","name":"Norway"},{"code":"OM","name":"Oman"},{"code":"PK","name":"Pakistan"},{"code":"PW","name":"Palau"},{"code":"PS","name":"Palestine, State of"},{"code":"PA","name":"Panama"},{"code":"PG","name":"Papua New Guinea"},{"code":"PY","name":"Paraguay"},{"code":"PE","name":"Peru"},{"code":"PH","name":"Philippines"},{"code":"PN","name":"Pitcairn"},{"code":"PL","name":"Poland"},{"code":"PT","name":"Portugal"},{"code":"PR","name":"Puerto Rico"},{"code":"QA","name":"Qatar"},{"code":"RE","name":"Réunion"},{"code":"RO","name":"Romania"},{"code":"RU","name":"Russian Federation"},{"code":"RW","name":"Rwanda"},{"code":"BL","name":"Saint Barthélemy"},{"code":"SH","name":"Saint Helena, Ascension and Tristan da Cunha"},{"code":"KN","name":"Saint Kitts and Nevis"},{"code":"LC","name":"Saint Lucia"},{"code":"MF","name":"Saint Martin (French part)"},{"code":"PM","name":"Saint Pierre and Miquelon"},{"code":"VC","name":"Saint Vincent and the Grenadines"},{"code":"WS","name":"Samoa"},{"code":"SM","name":"San Marino"},{"code":"ST","name":"Sao Tome and Principe"},{"code":"SA","name":"Saudi Arabia"},{"code":"SN","name":"Senegal"},{"code":"RS","name":"Serbia"},{"code":"SC","name":"Seychelles"},{"code":"SL","name":"Sierra Leone"},{"code":"SG","name":"Singapore"},{"code":"SX","name":"Sint Maarten (Dutch part)"},{"code":"SK","name":"Slovakia"},{"code":"SI","name":"Slovenia"},{"code":"SB","name":"Solomon Islands"},{"code":"SO","name":"Somalia"},{"code":"ZA","name":"South Africa"},{"code":"GS","name":"South Georgia and the South Sandwich Islands"},{"code":"SS","name":"South Sudan"},{"code":"ES","name":"Spain"},{"code":"LK","name":"Sri Lanka"},{"code":"SD","name":"Sudan"},{"code":"SR","name":"Suriname"},{"code":"SJ","name":"Svalbard and Jan Mayen"},{"code":"SZ","name":"Swaziland"},{"code":"SE","name":"Sweden"},{"code":"CH","name":"Switzerland"},{"code":"SY","name":"Syrian Arab Republic"},{"code":"TW","name":"Taiwan"},{"code":"TJ","name":"Tajikistan"},{"code":"TZ","name":"Tanzania, United Republic of"},{"code":"TH","name":"Thailand"},{"code":"TL","name":"Timor-Leste"},{"code":"TG","name":"Togo"},{"code":"TK","name":"Tokelau"},{"code":"TO","name":"Tonga"},{"code":"TT","name":"Trinidad and Tobago"},{"code":"TN","name":"Tunisia"},{"code":"TR","name":"Turkey"},{"code":"TM","name":"Turkmenistan"},{"code":"TC","name":"Turks and Caicos Islands"},{"code":"TV","name":"Tuvalu"},{"code":"UG","name":"Uganda"},{"code":"UA","name":"Ukraine"},{"code":"AE","name":"United Arab Emirates"},{"code":"GB","name":"United Kingdom"},{"code":"US","name":"United States"},{"code":"UM","name":"United States Minor Outlying Islands"},{"code":"UY","name":"Uruguay"},{"code":"UZ","name":"Uzbekistan"},{"code":"VU","name":"Vanuatu"},{"code":"VE","name":"Venezuela, Bolivarian Republic of"},{"code":"VN","name":"Viet Nam"},{"code":"VG","name":"Virgin Islands, British"},{"code":"VI","name":"Virgin Islands, U.S."},{"code":"WF","name":"Wallis and Futuna"},{"code":"EH","name":"Western Sahara"},{"code":"YE","name":"Yemen"},{"code":"ZM","name":"Zambia"},{"code":"ZW","name":"Zimbabwe"}]');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useRegion.ts
/* eslint-disable @typescript-eslint/prefer-enum-initializers */ 

// TODO better way to do the i18n of region

var // country and region code from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// there are many regions in the list, CountryCode is not precise,  so named as RegionCode or CountryRegionCode ?
RegionEnum;
(function(RegionEnum) {
    RegionEnum[RegionEnum["AF"] = 0] = "AF";
    RegionEnum[RegionEnum["AX"] = 1] = "AX";
    RegionEnum[RegionEnum["AL"] = 2] = "AL";
    RegionEnum[RegionEnum["DZ"] = 3] = "DZ";
    RegionEnum[RegionEnum["AS"] = 4] = "AS";
    RegionEnum[RegionEnum["AD"] = 5] = "AD";
    RegionEnum[RegionEnum["AO"] = 6] = "AO";
    RegionEnum[RegionEnum["AI"] = 7] = "AI";
    RegionEnum[RegionEnum["AQ"] = 8] = "AQ";
    RegionEnum[RegionEnum["AG"] = 9] = "AG";
    RegionEnum[RegionEnum["AR"] = 10] = "AR";
    RegionEnum[RegionEnum["AM"] = 11] = "AM";
    RegionEnum[RegionEnum["AW"] = 12] = "AW";
    RegionEnum[RegionEnum["AU"] = 13] = "AU";
    RegionEnum[RegionEnum["AT"] = 14] = "AT";
    RegionEnum[RegionEnum["AZ"] = 15] = "AZ";
    RegionEnum[RegionEnum["BS"] = 16] = "BS";
    RegionEnum[RegionEnum["BH"] = 17] = "BH";
    RegionEnum[RegionEnum["BD"] = 18] = "BD";
    RegionEnum[RegionEnum["BB"] = 19] = "BB";
    RegionEnum[RegionEnum["BY"] = 20] = "BY";
    RegionEnum[RegionEnum["BE"] = 21] = "BE";
    RegionEnum[RegionEnum["BZ"] = 22] = "BZ";
    RegionEnum[RegionEnum["BJ"] = 23] = "BJ";
    RegionEnum[RegionEnum["BM"] = 24] = "BM";
    RegionEnum[RegionEnum["BT"] = 25] = "BT";
    RegionEnum[RegionEnum["BO"] = 26] = "BO";
    RegionEnum[RegionEnum["BQ"] = 27] = "BQ";
    RegionEnum[RegionEnum["BA"] = 28] = "BA";
    RegionEnum[RegionEnum["BW"] = 29] = "BW";
    RegionEnum[RegionEnum["BV"] = 30] = "BV";
    RegionEnum[RegionEnum["BR"] = 31] = "BR";
    RegionEnum[RegionEnum["IO"] = 32] = "IO";
    RegionEnum[RegionEnum["BN"] = 33] = "BN";
    RegionEnum[RegionEnum["BG"] = 34] = "BG";
    RegionEnum[RegionEnum["BF"] = 35] = "BF";
    RegionEnum[RegionEnum["BI"] = 36] = "BI";
    RegionEnum[RegionEnum["KH"] = 37] = "KH";
    RegionEnum[RegionEnum["CM"] = 38] = "CM";
    RegionEnum[RegionEnum["CA"] = 39] = "CA";
    RegionEnum[RegionEnum["CV"] = 40] = "CV";
    RegionEnum[RegionEnum["KY"] = 41] = "KY";
    RegionEnum[RegionEnum["CF"] = 42] = "CF";
    RegionEnum[RegionEnum["TD"] = 43] = "TD";
    RegionEnum[RegionEnum["CL"] = 44] = "CL";
    RegionEnum[RegionEnum["CN"] = 45] = "CN";
    RegionEnum[RegionEnum["CX"] = 46] = "CX";
    RegionEnum[RegionEnum["CC"] = 47] = "CC";
    RegionEnum[RegionEnum["CO"] = 48] = "CO";
    RegionEnum[RegionEnum["KM"] = 49] = "KM";
    RegionEnum[RegionEnum["CG"] = 50] = "CG";
    RegionEnum[RegionEnum["CD"] = 51] = "CD";
    RegionEnum[RegionEnum["CK"] = 52] = "CK";
    RegionEnum[RegionEnum["CR"] = 53] = "CR";
    RegionEnum[RegionEnum["CI"] = 54] = "CI";
    RegionEnum[RegionEnum["HR"] = 55] = "HR";
    RegionEnum[RegionEnum["CU"] = 56] = "CU";
    RegionEnum[RegionEnum["CW"] = 57] = "CW";
    RegionEnum[RegionEnum["CY"] = 58] = "CY";
    RegionEnum[RegionEnum["CZ"] = 59] = "CZ";
    RegionEnum[RegionEnum["DK"] = 60] = "DK";
    RegionEnum[RegionEnum["DJ"] = 61] = "DJ";
    RegionEnum[RegionEnum["DM"] = 62] = "DM";
    RegionEnum[RegionEnum["DO"] = 63] = "DO";
    RegionEnum[RegionEnum["EC"] = 64] = "EC";
    RegionEnum[RegionEnum["EG"] = 65] = "EG";
    RegionEnum[RegionEnum["SV"] = 66] = "SV";
    RegionEnum[RegionEnum["GQ"] = 67] = "GQ";
    RegionEnum[RegionEnum["ER"] = 68] = "ER";
    RegionEnum[RegionEnum["EE"] = 69] = "EE";
    RegionEnum[RegionEnum["ET"] = 70] = "ET";
    RegionEnum[RegionEnum["FK"] = 71] = "FK";
    RegionEnum[RegionEnum["FO"] = 72] = "FO";
    RegionEnum[RegionEnum["FJ"] = 73] = "FJ";
    RegionEnum[RegionEnum["FI"] = 74] = "FI";
    RegionEnum[RegionEnum["FR"] = 75] = "FR";
    RegionEnum[RegionEnum["GF"] = 76] = "GF";
    RegionEnum[RegionEnum["PF"] = 77] = "PF";
    RegionEnum[RegionEnum["TF"] = 78] = "TF";
    RegionEnum[RegionEnum["GA"] = 79] = "GA";
    RegionEnum[RegionEnum["GM"] = 80] = "GM";
    RegionEnum[RegionEnum["GE"] = 81] = "GE";
    RegionEnum[RegionEnum["DE"] = 82] = "DE";
    RegionEnum[RegionEnum["GH"] = 83] = "GH";
    RegionEnum[RegionEnum["GI"] = 84] = "GI";
    RegionEnum[RegionEnum["GR"] = 85] = "GR";
    RegionEnum[RegionEnum["GL"] = 86] = "GL";
    RegionEnum[RegionEnum["GD"] = 87] = "GD";
    RegionEnum[RegionEnum["GP"] = 88] = "GP";
    RegionEnum[RegionEnum["GU"] = 89] = "GU";
    RegionEnum[RegionEnum["GT"] = 90] = "GT";
    RegionEnum[RegionEnum["GG"] = 91] = "GG";
    RegionEnum[RegionEnum["GN"] = 92] = "GN";
    RegionEnum[RegionEnum["GW"] = 93] = "GW";
    RegionEnum[RegionEnum["GY"] = 94] = "GY";
    RegionEnum[RegionEnum["HT"] = 95] = "HT";
    RegionEnum[RegionEnum["HM"] = 96] = "HM";
    RegionEnum[RegionEnum["VA"] = 97] = "VA";
    RegionEnum[RegionEnum["HN"] = 98] = "HN";
    RegionEnum[RegionEnum["HK"] = 99] = "HK";
    RegionEnum[RegionEnum["HU"] = 100] = "HU";
    RegionEnum[RegionEnum["IS"] = 101] = "IS";
    RegionEnum[RegionEnum["IN"] = 102] = "IN";
    RegionEnum[RegionEnum["ID"] = 103] = "ID";
    RegionEnum[RegionEnum["IR"] = 104] = "IR";
    RegionEnum[RegionEnum["IQ"] = 105] = "IQ";
    RegionEnum[RegionEnum["IE"] = 106] = "IE";
    RegionEnum[RegionEnum["IM"] = 107] = "IM";
    RegionEnum[RegionEnum["IL"] = 108] = "IL";
    RegionEnum[RegionEnum["IT"] = 109] = "IT";
    RegionEnum[RegionEnum["JM"] = 110] = "JM";
    RegionEnum[RegionEnum["JP"] = 111] = "JP";
    RegionEnum[RegionEnum["JE"] = 112] = "JE";
    RegionEnum[RegionEnum["JO"] = 113] = "JO";
    RegionEnum[RegionEnum["KZ"] = 114] = "KZ";
    RegionEnum[RegionEnum["KE"] = 115] = "KE";
    RegionEnum[RegionEnum["KI"] = 116] = "KI";
    RegionEnum[RegionEnum["KP"] = 117] = "KP";
    RegionEnum[RegionEnum["KR"] = 118] = "KR";
    RegionEnum[RegionEnum["KW"] = 119] = "KW";
    RegionEnum[RegionEnum["KG"] = 120] = "KG";
    RegionEnum[RegionEnum["LA"] = 121] = "LA";
    RegionEnum[RegionEnum["LV"] = 122] = "LV";
    RegionEnum[RegionEnum["LB"] = 123] = "LB";
    RegionEnum[RegionEnum["LS"] = 124] = "LS";
    RegionEnum[RegionEnum["LR"] = 125] = "LR";
    RegionEnum[RegionEnum["LY"] = 126] = "LY";
    RegionEnum[RegionEnum["LI"] = 127] = "LI";
    RegionEnum[RegionEnum["LT"] = 128] = "LT";
    RegionEnum[RegionEnum["LU"] = 129] = "LU";
    RegionEnum[RegionEnum["MO"] = 130] = "MO";
    RegionEnum[RegionEnum["MK"] = 131] = "MK";
    RegionEnum[RegionEnum["MG"] = 132] = "MG";
    RegionEnum[RegionEnum["MW"] = 133] = "MW";
    RegionEnum[RegionEnum["MY"] = 134] = "MY";
    RegionEnum[RegionEnum["MV"] = 135] = "MV";
    RegionEnum[RegionEnum["ML"] = 136] = "ML";
    RegionEnum[RegionEnum["MT"] = 137] = "MT";
    RegionEnum[RegionEnum["MH"] = 138] = "MH";
    RegionEnum[RegionEnum["MQ"] = 139] = "MQ";
    RegionEnum[RegionEnum["MR"] = 140] = "MR";
    RegionEnum[RegionEnum["MU"] = 141] = "MU";
    RegionEnum[RegionEnum["YT"] = 142] = "YT";
    RegionEnum[RegionEnum["MX"] = 143] = "MX";
    RegionEnum[RegionEnum["FM"] = 144] = "FM";
    RegionEnum[RegionEnum["MD"] = 145] = "MD";
    RegionEnum[RegionEnum["MC"] = 146] = "MC";
    RegionEnum[RegionEnum["MN"] = 147] = "MN";
    RegionEnum[RegionEnum["ME"] = 148] = "ME";
    RegionEnum[RegionEnum["MS"] = 149] = "MS";
    RegionEnum[RegionEnum["MA"] = 150] = "MA";
    RegionEnum[RegionEnum["MZ"] = 151] = "MZ";
    RegionEnum[RegionEnum["MM"] = 152] = "MM";
    RegionEnum[RegionEnum["NA"] = 153] = "NA";
    RegionEnum[RegionEnum["NR"] = 154] = "NR";
    RegionEnum[RegionEnum["NP"] = 155] = "NP";
    RegionEnum[RegionEnum["NL"] = 156] = "NL";
    RegionEnum[RegionEnum["NC"] = 157] = "NC";
    RegionEnum[RegionEnum["NZ"] = 158] = "NZ";
    RegionEnum[RegionEnum["NI"] = 159] = "NI";
    RegionEnum[RegionEnum["NE"] = 160] = "NE";
    RegionEnum[RegionEnum["NG"] = 161] = "NG";
    RegionEnum[RegionEnum["NU"] = 162] = "NU";
    RegionEnum[RegionEnum["NF"] = 163] = "NF";
    RegionEnum[RegionEnum["MP"] = 164] = "MP";
    RegionEnum[RegionEnum["NO"] = 165] = "NO";
    RegionEnum[RegionEnum["OM"] = 166] = "OM";
    RegionEnum[RegionEnum["PK"] = 167] = "PK";
    RegionEnum[RegionEnum["PW"] = 168] = "PW";
    RegionEnum[RegionEnum["PS"] = 169] = "PS";
    RegionEnum[RegionEnum["PA"] = 170] = "PA";
    RegionEnum[RegionEnum["PG"] = 171] = "PG";
    RegionEnum[RegionEnum["PY"] = 172] = "PY";
    RegionEnum[RegionEnum["PE"] = 173] = "PE";
    RegionEnum[RegionEnum["PH"] = 174] = "PH";
    RegionEnum[RegionEnum["PN"] = 175] = "PN";
    RegionEnum[RegionEnum["PL"] = 176] = "PL";
    RegionEnum[RegionEnum["PT"] = 177] = "PT";
    RegionEnum[RegionEnum["PR"] = 178] = "PR";
    RegionEnum[RegionEnum["QA"] = 179] = "QA";
    RegionEnum[RegionEnum["RE"] = 180] = "RE";
    RegionEnum[RegionEnum["RO"] = 181] = "RO";
    RegionEnum[RegionEnum["RU"] = 182] = "RU";
    RegionEnum[RegionEnum["RW"] = 183] = "RW";
    RegionEnum[RegionEnum["BL"] = 184] = "BL";
    RegionEnum[RegionEnum["SH"] = 185] = "SH";
    RegionEnum[RegionEnum["KN"] = 186] = "KN";
    RegionEnum[RegionEnum["LC"] = 187] = "LC";
    RegionEnum[RegionEnum["MF"] = 188] = "MF";
    RegionEnum[RegionEnum["PM"] = 189] = "PM";
    RegionEnum[RegionEnum["VC"] = 190] = "VC";
    RegionEnum[RegionEnum["WS"] = 191] = "WS";
    RegionEnum[RegionEnum["SM"] = 192] = "SM";
    RegionEnum[RegionEnum["ST"] = 193] = "ST";
    RegionEnum[RegionEnum["SA"] = 194] = "SA";
    RegionEnum[RegionEnum["SN"] = 195] = "SN";
    RegionEnum[RegionEnum["RS"] = 196] = "RS";
    RegionEnum[RegionEnum["SC"] = 197] = "SC";
    RegionEnum[RegionEnum["SL"] = 198] = "SL";
    RegionEnum[RegionEnum["SG"] = 199] = "SG";
    RegionEnum[RegionEnum["SX"] = 200] = "SX";
    RegionEnum[RegionEnum["SK"] = 201] = "SK";
    RegionEnum[RegionEnum["SI"] = 202] = "SI";
    RegionEnum[RegionEnum["SB"] = 203] = "SB";
    RegionEnum[RegionEnum["SO"] = 204] = "SO";
    RegionEnum[RegionEnum["ZA"] = 205] = "ZA";
    RegionEnum[RegionEnum["GS"] = 206] = "GS";
    RegionEnum[RegionEnum["SS"] = 207] = "SS";
    RegionEnum[RegionEnum["ES"] = 208] = "ES";
    RegionEnum[RegionEnum["LK"] = 209] = "LK";
    RegionEnum[RegionEnum["SD"] = 210] = "SD";
    RegionEnum[RegionEnum["SR"] = 211] = "SR";
    RegionEnum[RegionEnum["SJ"] = 212] = "SJ";
    RegionEnum[RegionEnum["SZ"] = 213] = "SZ";
    RegionEnum[RegionEnum["SE"] = 214] = "SE";
    RegionEnum[RegionEnum["CH"] = 215] = "CH";
    RegionEnum[RegionEnum["SY"] = 216] = "SY";
    RegionEnum[RegionEnum["TW"] = 217] = "TW";
    RegionEnum[RegionEnum["TJ"] = 218] = "TJ";
    RegionEnum[RegionEnum["TZ"] = 219] = "TZ";
    RegionEnum[RegionEnum["TH"] = 220] = "TH";
    RegionEnum[RegionEnum["TL"] = 221] = "TL";
    RegionEnum[RegionEnum["TG"] = 222] = "TG";
    RegionEnum[RegionEnum["TK"] = 223] = "TK";
    RegionEnum[RegionEnum["TO"] = 224] = "TO";
    RegionEnum[RegionEnum["TT"] = 225] = "TT";
    RegionEnum[RegionEnum["TN"] = 226] = "TN";
    RegionEnum[RegionEnum["TR"] = 227] = "TR";
    RegionEnum[RegionEnum["TM"] = 228] = "TM";
    RegionEnum[RegionEnum["TC"] = 229] = "TC";
    RegionEnum[RegionEnum["TV"] = 230] = "TV";
    RegionEnum[RegionEnum["UG"] = 231] = "UG";
    RegionEnum[RegionEnum["UA"] = 232] = "UA";
    RegionEnum[RegionEnum["AE"] = 233] = "AE";
    RegionEnum[RegionEnum["GB"] = 234] = "GB";
    RegionEnum[RegionEnum["US"] = 235] = "US";
    RegionEnum[RegionEnum["UM"] = 236] = "UM";
    RegionEnum[RegionEnum["UY"] = 237] = "UY";
    RegionEnum[RegionEnum["UZ"] = 238] = "UZ";
    RegionEnum[RegionEnum["VU"] = 239] = "VU";
    RegionEnum[RegionEnum["VE"] = 240] = "VE";
    RegionEnum[RegionEnum["VN"] = 241] = "VN";
    RegionEnum[RegionEnum["VG"] = 242] = "VG";
    RegionEnum[RegionEnum["VI"] = 243] = "VI";
    RegionEnum[RegionEnum["WF"] = 244] = "WF";
    RegionEnum[RegionEnum["EH"] = 245] = "EH";
    RegionEnum[RegionEnum["YE"] = 246] = "YE";
    RegionEnum[RegionEnum["ZM"] = 247] = "ZM";
    RegionEnum[RegionEnum["ZW"] = 248] = "ZW";
})(RegionEnum || (RegionEnum = {}));
const regionNameMap = new Map(regions_namespaceObject.map((r)=>[
        r.code,
        r.name
    ]
));
const regionCodes = regions_namespaceObject.map((r)=>r.code
);
function createRegionResolver(api, field) {
    return async ()=>{
        const response = await fetch(api);
        const result = await response.json();
        const code = result[field];
        if (!code) {
            throw new Error('Failed to resolve region');
        }
        if (!(code in RegionEnum)) {
            throw new Error('unknown region');
        }
        return {
            code,
            name: regionNameMap.get(code)
        };
    };
}
const IPGeoResolver = createRegionResolver('https://service.r2d2.to/geolocation', 'region');
function useIPRegion() {
    return (0,useAsyncRetry/* default */.Z)(IPGeoResolver);
}
function useRegionList() {
    // TODO return name by i18n
    return regions_namespaceObject;
}
function useRegionSelect(initRegionCodes) {
    return (0,react.useState)(initRegionCodes ? [
        ...initRegionCodes
    ] : [
        ...regionCodes
    ]);
}
function encodeRegionCode(codes) {
    const isMoreThanHalf = codes.length > regionCodes.length / 2;
    if (isMoreThanHalf) {
        return '-' + regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return '+' + codes.join(',');
}
function decodeRegionCode(input) {
    input = input.toUpperCase();
    const isReverse = input.startsWith('-');
    const codes = input.slice(1).split(',').filter((c)=>regionNameMap.has(c)
    );
    if (isReverse) {
        return regionCodes.filter((c)=>!codes.includes(c)
        );
    }
    return codes;
}
function checkRegionRestrict(regions1) {
    return regions1.length !== regionCodes.length;
}

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/StyledLinearProgress.tsx
var StyledLinearProgress = __webpack_require__(16334);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RemindDialog.tsx












const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        reminderText: {
            color: '#FF5555',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1.5)
        },
        reminderTextFirst: {
            marginTop: 0
        },
        reminderTextLast: {
            marginBottom: 0
        },
        docBox: {
            overflow: 'scroll'
        },
        center: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '1.2rem'
        },
        bigCenter: {
            fontSize: '1.5rem'
        },
        bold: {
            fontWeight: 'bold',
            fontSize: '1.1rem'
        },
        wrapper: {
            padding: theme.spacing(2),
            background: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(2),
            padding: theme.spacing(2.5, 0, 2.5, 2)
        },
        tokenIcon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 39,
            height: 39
        },
        tokenTextWrapper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 45,
            marginLeft: '1rem'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 18,
            cursor: 'default'
        },
        tokenLink: {
            color: '#6F767C',
            fontSize: 15,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        confirmWrapper: {
            marginTop: theme.spacing(1),
            display: 'flex',
            alignItems: 'center'
        },
        confirmText: {
            color: '#6F767C'
        },
        button: {
            width: 'fit-content',
            margin: '0 auto',
            padding: '6px 48px'
        },
        table: {
            border: '1px solid #FF5555',
            color: '#FF5555'
        },
        cell: {
            width: '50%',
            border: '1px solid #FF5555',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        moreCell: {
            flexDirection: 'column'
        },
        column: {
            width: '100%',
            display: 'flex'
        },
        lowSpacing: {
            marginTop: 4,
            marginBottom: 4
        }
    })
);
function RemindDialog(props) {
    const { token , chainId , setStatus  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), {});
    const [agreeReminder, setAgreeReminder] = (0,react.useState)(false);
    const networkType = (0,entry_web3/* useNetworkType */.bL)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextFirst),
                        children: t('plugin_ito_dialog_claim_reminder_text1', {
                            networkType: resolver/* networkResolver.networkName */.LJ.networkName(networkType)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text2')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.reminderText,
                        children: t('plugin_ito_dialog_claim_reminder_text3')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classnames_default()(classes.reminderText, classes.reminderTextLast),
                        children: t('plugin_ito_dialog_claim_reminder_text4')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classnames_default()(classes.wrapper, classes.tokenWrapper),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        address: token.address,
                        classes: {
                            icon: classes.tokenIcon
                        },
                        logoURL: token?.logoURL
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenTextWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.tokenSymbol,
                                children: token.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                target: "_blank",
                                className: classes.tokenLink,
                                rel: "noopener noreferrer",
                                href: resolver/* explorerResolver.fungibleTokenLink */.Nb.fungibleTokenLink(chainId, token.address),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: token.address,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        }),
                                        " (",
                                        t('plugin_ito_view_on_explorer'),
                                        ")"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.confirmWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                        color: "primary",
                        checked: agreeReminder,
                        onChange: (event)=>{
                            setAgreeReminder(event.target.checked);
                        }
                    }),
                    label: t('plugin_ito_dialog_claim_reminder_agree')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: ()=>setStatus(SwapStatus.Swap)
                ,
                disabled: !agreeReminder,
                children: t('plugin_ito_continue')
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ShareDialog.tsx








const ShareDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        shareWrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: theme.spacing(2, 0)
        },
        shareAmount: {
            fontSize: 36,
            marginTop: 90,
            color: '#fff'
        },
        shareToken: {
            marginTop: 5,
            fontSize: 24,
            color: '#fff'
        },
        shareText: {
            marginTop: 20,
            fontSize: 24,
            color: '#fff'
        },
        shareButton: {
            width: 'fit-content',
            backgroundColor: '#FBD363 !important',
            padding: theme.spacing(0.5, 6),
            marginTop: theme.spacing(2),
            minHeight: 28
        },
        shareImage: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundAttachment: 'local',
            backgroundPosition: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 475,
            height: 341,
            backgroundColor: '#FF5238',
            borderRadius: 10
        }
    })
);
function ShareDialog(props) {
    const ShareBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(96705), __webpack_require__.b));
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(ShareDialog_useStyles(), {});
    const { token , actualSwapAmount , shareSuccessText , onClose  } = props;
    const amount = (0,src/* formatBalance */.az)(actualSwapAmount, token.decimals);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        onClose();
        if (!shareSuccessText) return;
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareSuccessText);
    }, [
        shareSuccessText,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.shareWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.shareImage,
            style: {
                backgroundImage: `url(${ShareBackground})`,
                borderRadius: 12
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareAmount,
                    children: amount
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareToken,
                    children: token.symbol
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.shareText,
                    children: (0,src/* isZero */.Fr)(actualSwapAmount) ? t('plugin_ito_out_of_stock_hit') : t('plugin_ito_congratulations')
                }),
                shareSuccessText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: onShareSuccess,
                    variant: "contained",
                    color: "primary",
                    className: classes.shareButton,
                    children: t('plugin_ito_dialog_swap_share_title')
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(4612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(49524);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useQualificationVerify.ts






function useQualificationVerify(address, ito_address) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: qualificationContract , version  } = useQualificationContract(chainId, address, ito_address);
    const { value: isQualificationHasLucky , loading: loadingQualificationHasLucky  } = (0,entry_web3_evm/* useERC165 */.i1)(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_LUCKY_INTERFACE_ID */.tu);
    const { value: isQualification , loading: loadingQualification  } = (0,entry_web3_evm/* useERC165 */.i1)(qualificationContract, address, version === 1 ? ITO_constants/* QUALIFICATION_INTERFACE_ID */.bJ : ITO_constants/* QUALIFICATION2_INTERFACE_ID */.tZ);
    const { value: qualificationHasStartTime , loading: loadingQualificationHasStartTime  } = (0,entry_web3_evm/* useERC165 */.i1)(qualificationContract, address, ITO_constants/* QUALIFICATION_HAS_START_TIME_INTERFACE_ID */.Zl);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        let startTime;
        if (qualificationHasStartTime) {
            startTime = await qualificationContract.methods.get_start_time().call({
                from: account
            });
        }
        return {
            loadingERC165: loadingQualification || loadingQualificationHasStartTime || loadingQualificationHasLucky,
            isQualification,
            startTime,
            isQualificationHasLucky
        };
    }, [
        address,
        isQualification,
        qualificationHasStartTime,
        isQualificationHasLucky,
        loadingQualification,
        loadingQualificationHasStartTime,
        loadingQualificationHasLucky,
        qualificationContract, 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useSwapCallback.ts









function useSwapCallback(payload, total, token, isQualificationHasLucky = false) {
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const { ITO_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const { contract: ITO_Contract , version  } = useITO_Contract(chainId, payload.contract_address);
    const { contract: qualificationContract  } = useQualificationContract(chainId, payload.qualification_address, payload.contract_address);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!ITO_Contract || !qualificationContract || !payload || !connection) return;
        const { pid , password  } = payload;
        if (!password) return;
        // error: poll has expired
        if (payload.end_time < Date.now()) return;
        // error: invalid swap amount
        if (!(0,src/* isPositive */.xP)(total)) return;
        // error: invalid token
        const swapTokenAt = payload.exchange_tokens.findIndex((0,src/* currySameAddress */.DC)(token.address));
        if (swapTokenAt === -1) return;
        // error: not qualified
        try {
            const ifQualified = await (version === 1 ? qualificationContract.methods.ifQualified(account) : qualificationContract.methods.ifQualified(account, [])).call({
                from: account
            });
            if (!ifQualified) {
                return;
            }
        } catch  {
            return;
        }
        // check remaining
        try {
            const availability = await checkAvailability(pid, account, payload.contract_address, chainId, connection, (0,src/* isSameAddress */.Wr)(payload.contract_address, ITO_CONTRACT_ADDRESS));
            if ((0,src/* isZero */.Fr)(availability.remaining)) {
                return;
            }
        } catch  {
            return;
        }
        const swapParamsV1 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)(lib_default().sha3(password) ?? '').slice(0, 5))}`), account),
            lib_default().sha3(account),
            swapTokenAt,
            total, 
        ];
        const swapParamsV2 = [
            pid,
            lib_default().soliditySha3(lib_default().hexToNumber(`0x${(0,shared_base_src/* toHex */.NC)((0,shared_base_src/* fromHex */.H_)(lib_default().sha3(password) ?? '').slice(0, 5))}`), account),
            swapTokenAt,
            total,
            [], 
        ];
        // estimate gas and compose transaction
        const value = (0,src/* toFixed */.FH)(token.schema === types/* SchemaType.Native */.XQ.Native ? total : 0);
        const config = {
            from: account,
            gas: isQualificationHasLucky ? 200000 : await (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).estimateGas({
                from: account,
                value
            }),
            value
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            const onSucceed = (_, receipt)=>{
                resolve(receipt);
            };
            const onFailed = (error)=>{
                reject(error);
            };
            (version === 1 ? ITO_Contract.methods.swap(...swapParamsV1) : ITO_Contract.methods.swap(...swapParamsV2)).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, onSucceed).on(types/* TransactionEventType.ERROR */.iE.ERROR, onFailed);
        });
    }, [
        ITO_Contract,
        chainId,
        qualificationContract,
        account,
        payload,
        total,
        token.address,
        isQualificationHasLucky
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapDialog.tsx


















const SwapDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        },
        providerBar: {},
        swapLimitWrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: theme.spacing(2)
        },
        swapLimitText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B',
            fontSize: 14,
            width: 'fit-content'
        },
        swapLimitSlider: {
            flexGrow: 1,
            width: 'auto !important',
            margin: theme.spacing(0, 3),
            '& .MuiSlider-thumb': {
                width: 28,
                height: 28,
                background: theme.palette.mode === 'dark' ? '#fff' : '2CA4EF, 100%'
            },
            '& .MuiSlider-rail': {
                height: 5
            },
            '& .MuiSlider-track': {
                height: 5
            }
        },
        exchangeText: {
            textAlign: 'right',
            fontSize: 10,
            margin: theme.spacing(1, 0, 3)
        },
        exchangeAmountText: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#15181B'
        },
        swapButtonWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(2)
        },
        remindText: {
            fontSize: 10,
            marginTop: theme.spacing(1)
        },
        loading: {
            color: theme.palette.text.primary
        }
    })
);
function SwapDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { payload , initAmount , tokenAmount: tokenAmount1 , maxSwapAmount , setTokenAmount , setActualSwapAmount , setStatus , account , token , exchangeTokens ,  } = props;
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { Token  } = (0,entry_web3/* useWeb3State */.dM)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const classes = (0,entry/* useStylesExtends */.Bc)(SwapDialog_useStyles(), props);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const [ratio1, setRatio] = (0,react.useState)(new (bignumber_default())(payload.exchange_amounts[0 * 2]).dividedBy(payload.exchange_amounts[0 * 2 + 1]));
    const { value: initToken  } = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, payload.exchange_tokens[0].address);
    const [swapToken, setSwapToken] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        setSwapToken(initToken);
    }, [
        JSON.stringify(initToken)
    ]);
    const [swapAmount1, setSwapAmount] = (0,react.useState)(tokenAmount1.multipliedBy(ratio1));
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)(swapAmount1.isZero() ? '' : (0,src/* formatBalance */.az)(swapAmount1, swapToken?.decimals));
    // #region select token
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: !exchangeTokens.some(address/* isNativeTokenAddress */.qw),
            disableSearchBar: true,
            whitelist: exchangeTokens.map((x)=>x.address
            )
        });
        if (!picked) return;
        const at = exchangeTokens.findIndex((0,src/* currySameAddress */.DC)(picked.address));
        const ratio = new (bignumber_default())(payload.exchange_amounts[at * 2]).dividedBy(payload.exchange_amounts[at * 2 + 1]);
        setRatio(ratio);
        setSwapToken(picked);
        setTokenAmount(initAmount);
        setSwapAmount(initAmount.multipliedBy(ratio));
        setInputAmountForUI(initAmount.isZero() ? '' : (0,src/* formatBalance */.az)(initAmount.multipliedBy(ratio), picked.decimals));
    }, [
        initAmount,
        payload,
        pickToken,
        exchangeTokens.map((x)=>x.address
        ).sort((a, b)=>a.localeCompare(b, 'en-US')
        ).join(), 
    ]);
    // #endregion
    // #region balance
    const { value: tokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, swapToken ? swapToken.address : NATIVE_TOKEN_ADDRESS);
    // #endregion
    // #region maxAmount for TokenAmountPanel
    const maxAmount = (0,react.useMemo)(()=>bignumber_default().min(maxSwapAmount.multipliedBy(ratio1).dp(0), tokenBalance).toFixed()
    , [
        maxSwapAmount,
        ratio1,
        tokenBalance
    ]);
    // #endregion
    // #region swap
    const { value: qualificationInfo , loading: loadingQualification  } = useQualificationVerify(payload.qualification_address, payload.contract_address);
    const [{ loading: isSwapping  }, swapCallback] = useSwapCallback(payload, swapAmount1.toFixed(), swapToken ? swapToken : {
        address: NATIVE_TOKEN_ADDRESS
    }, qualificationInfo?.isQualificationHasLucky);
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const onSwap = (0,react.useCallback)(async ()=>{
        const receipt = await swapCallback();
        if (typeof receipt?.transactionHash === 'string') {
            await openShareTxDialog({
                hash: receipt.transactionHash
            });
            const { to_value  } = receipt.events?.SwapSuccess.returnValues ?? {};
            setActualSwapAmount(to_value);
            setStatus(SwapStatus.Share);
            setTimeout(()=>{
                (0,shared_base_ui_src/* openWindow */.xw)(resolver/* explorerResolver.transactionLink */.Nb.transactionLink(chainId, receipt.transactionHash));
            }, 2000);
        }
        if (payload.token.schema !== types/* SchemaType.ERC20 */.XQ.ERC20) return;
        await Token?.addToken?.(payload.token);
    }, [
        swapCallback,
        payload.token,
        Token
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (swapAmount1.isZero() || tokenAmount1.isZero() || swapAmount1.dividedBy(ratio1).isLessThan(1)) return t('plugin_ito_error_enter_amount');
        if (swapAmount1.isGreaterThan(tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: swapToken?.symbol
        });
        if (tokenAmount1.isGreaterThan(maxSwapAmount)) return t('plugin_ito_dialog_swap_exceed_wallet_limit');
        return '';
    }, [
        swapAmount1,
        tokenBalance,
        maxSwapAmount,
        swapToken,
        ratio1
    ]);
    return swapToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.swapLimitWrap,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            "0 ",
                            token.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                        className: classes.swapLimitSlider,
                        value: Number(tokenAmount1.dividedBy(maxSwapAmount).multipliedBy(100)),
                        onChange: (_, newValue)=>{
                            const tokenAmount = maxSwapAmount.multipliedBy(newValue / 100);
                            const swapAmount = tokenAmount.multipliedBy(ratio1).dp(0);
                            setTokenAmount(tokenAmount.dp(0));
                            setSwapAmount(swapAmount);
                            setInputAmountForUI((0,src/* formatBalance */.az)(swapAmount, swapToken.decimals));
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        className: classes.swapLimitText,
                        children: [
                            (0,src/* formatBalance */.az)(maxSwapAmount, token.decimals),
                            " ",
                            token.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.exchangeText,
                variant: "body1",
                color: "textSecondary",
                children: [
                    t('plugin_ito_dialog_swap_exchange'),
                    ' ',
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.exchangeAmountText,
                        children: (0,src/* formatBalance */.az)(tokenAmount1, token.decimals)
                    }),
                    ' ',
                    token.symbol,
                    "."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                amount: inputAmountForUI,
                maxAmount: maxAmount,
                balance: tokenBalance,
                token: swapToken,
                onAmountChange: (value)=>{
                    const val = value === '' || value === '0' ? src/* ZERO */.xE : (0,src/* rightShift */.pu)(value, swapToken.decimals);
                    const isMax = value === (0,src/* formatBalance */.az)(maxAmount, swapToken.decimals) && !val.isZero();
                    const tokenAmount = isMax ? maxSwapAmount : val.dividedBy(ratio1);
                    const swapAmount = isMax ? tokenAmount.multipliedBy(ratio1) : val.dp(0);
                    setInputAmountForUI(isMax ? (0,src/* leftShift */.w5)(tokenAmount.multipliedBy(ratio1), swapToken.decimals).toString() : value);
                    setTokenAmount(tokenAmount.dp(0));
                    setSwapAmount(swapAmount);
                },
                label: t('plugin_ito_dialog_swap_panel_title'),
                SelectTokenChip: {
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.remindText,
                variant: "body1",
                color: "textSecondary",
                children: t('plugin_ito_swap_only_once_remind')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.swapButtonWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: swapAmount1.toFixed(),
                        spender: payload.contract_address,
                        token: swapToken.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? swapToken : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            loading: isSwapping,
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage || loadingQualification || isSwapping,
                            onClick: onSwap,
                            children: loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16,
                                className: classes.loading
                            }) : validationMessage || t('plugin_ito_swap')
                        })
                    })
                })
            })
        ]
    }) : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/UnlockDialog.tsx














function isMoreThanMillion(allowance, decimals) {
    return (0,src/* isGreaterThan */.T1)(allowance, `100000000000e${decimals}`) // 100 billion
    ;
}
const UnlockDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {},
        tip: {
            margin: theme.spacing(1.5, 0, 1),
            fontSize: 10
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function UnlockDialog(props) {
    const { tokens  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = UnlockDialog_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    // #region select token
    const [token, setToken] = (0,react.useState)(tokens[0]);
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: true,
            disableSearchBar: true,
            selectedTokens: token?.address ? [
                token.address
            ] : [],
            whitelist: tokens.map((x)=>x.address
            )
        });
        if (picked) setToken(picked);
    }, [
        tokens,
        token?.address
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,src/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, token?.address ?? '');
    // #endregion
    if (!tokens.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        children: t('plugin_ito_empty_token')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: "Amount",
                amount: rawAmount,
                balance: tokenBalance ?? '0',
                token: token,
                onAmountChange: setRawAmount,
                SelectTokenChip: {
                    loading: loadingTokenBalance,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                }
            }),
            ITO2_CONTRACT_ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tip,
                variant: "body2",
                color: "textSecondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_ito_unlock_tip",
                    components: {
                        contractLink: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, ITO2_CONTRACT_ADDRESS)
                        })
                    },
                    values: {
                        address: (0,formatter/* formatEthereumAddress */.j8)(ITO2_CONTRACT_ADDRESS, 4),
                        symbol: token.symbol ?? 'Unknown'
                    }
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: amount.toFixed(),
                    spender: ITO2_CONTRACT_ADDRESS,
                    token: token,
                    children: (allowance)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            size: "large",
                            fullWidth: true,
                            disabled: true,
                            variant: "contained",
                            children: isMoreThanMillion(allowance, token.decimals) ? t('plugin_ito_amount_unlocked_infinity', {
                                symbol: token.symbol ?? 'Token'
                            }) : t('plugin_ito_amount_unlocked', {
                                amount: (0,src/* formatBalance */.az)(allowance, token.decimals, 2),
                                symbol: token.symbol ?? 'Token'
                            })
                        })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/SwapGuide.tsx














var SwapStatus;
(function(SwapStatus) {
    SwapStatus[SwapStatus["Remind"] = 0] = "Remind";
    SwapStatus[SwapStatus["Swap"] = 1] = "Swap";
    SwapStatus[SwapStatus["Share"] = 2] = "Share";
    SwapStatus[SwapStatus["Unlock"] = 3] = "Unlock";
})(SwapStatus || (SwapStatus = {}));
const SwapGuide_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            display: 'flex',
            flexDirection: 'column'
        },
        paper: {
            maxWidth: 544,
            backgroundImage: 'none'
        }
    })
);
function SwapGuide(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { status , payload , exchangeTokens , isBuyer , open , retryPayload , shareSuccessText , total_remaining , onUpdate , onClose ,  } = props;
    const [isPending, startTransition] = (0,react.useTransition)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const onCloseShareDialog = (0,react.useCallback)(()=>{
        startTransition(()=>{
            onClose();
            retryPayload();
        });
    }, [
        retryPayload,
        startTransition,
        onClose
    ]);
    const { classes  } = SwapGuide_useStyles();
    const maxSwapAmount = (0,react.useMemo)(()=>bignumber_default().min(payload.limit, total_remaining)
    , [
        payload.limit,
        total_remaining
    ]);
    const initAmount = src/* ZERO */.xE;
    const [tokenAmount, setTokenAmount] = (0,react.useState)(initAmount);
    const [actualSwapAmount, setActualSwapAmount] = (0,react.useState)(0);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const SwapTitle = {
        [SwapStatus.Remind]: t('plugin_ito_dialog_swap_reminder_title'),
        [SwapStatus.Unlock]: t('plugin_ito_dialog_swap_unlock_title'),
        [SwapStatus.Swap]: t('plugin_ito_dialog_swap_title', {
            token: payload.token.symbol
        }),
        [SwapStatus.Share]: t('plugin_ito_dialog_swap_share_title')
    };
    const closeDialog = (0,react.useCallback)(()=>{
        setTokenAmount(initAmount);
        return status === SwapStatus.Share ? onCloseShareDialog() : onClose();
    }, [
        status,
        initAmount,
        onCloseShareDialog,
        onClose,
        setTokenAmount
    ]);
    (0,react.useEffect)(()=>{
        onUpdate(isBuyer ? SwapStatus.Share : SwapStatus.Remind);
    }, [
        account,
        isBuyer,
        chainId,
        payload.chain_id
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        classes: {
            paper: classes.paper,
            dialogContent: classes.paper
        },
        open: open,
        title: SwapTitle[status],
        onClose: closeDialog,
        maxWidth: SwapStatus.Swap || status === SwapStatus.Unlock ? 'xs' : 'sm',
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            classes: {
                root: classes.content
            },
            children: (()=>{
                switch(status){
                    case SwapStatus.Remind:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RemindDialog, {
                            token: payload.token,
                            chainId: chainId,
                            setStatus: onUpdate
                        });
                    case SwapStatus.Unlock:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(UnlockDialog, {
                            tokens: payload.exchange_tokens.filter((x)=>!(0,src/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, x.address)
                            )
                        });
                    case SwapStatus.Swap:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapDialog, {
                            account: account,
                            initAmount: initAmount,
                            tokenAmount: tokenAmount,
                            maxSwapAmount: maxSwapAmount,
                            setTokenAmount: setTokenAmount,
                            setActualSwapAmount: setActualSwapAmount,
                            payload: payload,
                            token: payload.token,
                            exchangeTokens: exchangeTokens,
                            setStatus: onUpdate,
                            chainId: chainId
                        });
                    case SwapStatus.Share:
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ShareDialog, {
                            shareSuccessText: shareSuccessText,
                            poolName: payload.message,
                            token: payload.token,
                            actualSwapAmount: actualSwapAmount,
                            onClose: onCloseShareDialog
                        });
                    default:
                        return null;
                }
            })()
        })
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(5492);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
// EXTERNAL MODULE: ../icons/plugins/shared.tsx
var shared = __webpack_require__(28908);
// EXTERNAL MODULE: ../icons/plugins/connect.tsx
var connect = __webpack_require__(47061);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ITO.tsx




































const ITO_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        root: {
            width: '100%',
            position: 'relative',
            color: theme.palette.common.white,
            flexDirection: 'column',
            height: props.tokenNumber > 4 ? 425 : 405,
            minHeight: 405,
            boxSizing: 'border-box',
            backgroundAttachment: 'local',
            backgroundPosition: '-40px 0',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#FF5238',
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2)
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
            width: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? '98%' : '100%',
            maxWidth: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? 'auto' : '100%'
        },
        title: {
            fontSize: props.titleLength > 31 ? '1.3rem' : '1.6rem',
            fontWeight: 'bold',
            marginBottom: 4,
            marginRight: 4,
            width: '80%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        status: {
            background: theme.palette.mode === 'light' ? 'rgba(20, 23, 26, 0.6)' : 'rgba(239, 243, 244, 0.6)',
            padding: '5px 16px',
            whiteSpace: 'nowrap',
            borderRadius: 10
        },
        totalText: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 12
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'self-start',
            color: '#fff'
        },
        tokenIcon: {
            width: 24,
            height: 24
        },
        totalIcon: {
            marginLeft: theme.spacing(0.5),
            width: 16,
            height: 16,
            cursor: 'pointer'
        },
        progressWrap: {
            width: 220,
            marginBottom: theme.spacing(3),
            marginTop: theme.spacing(1)
        },
        footer: {
            position: 'absolute',
            width: '90%',
            maxWidth: props.snsId === shared_base_src/* EnhanceableSite.Facebook */.Jk.Facebook ? 'auto' : 470,
            bottom: theme.spacing(2),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'self-end'
        },
        footerInfo: {
            fontSize: 12
        },
        fromText: {
            opacity: 0.6,
            fontSize: 14
        },
        rationWrap: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            '& > span': {
                marginLeft: theme.spacing(1),
                fontSize: 12,
                '& > strong': {
                    fontSize: 16,
                    fontWeight: 'bold'
                }
            }
        },
        actionFooter: {
            padding: 0,
            display: 'flex'
        },
        actionButton: {
            width: '100%',
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            paddingTop: 10,
            fontWeight: 700,
            margin: '0 !important',
            paddingBottom: 10,
            lineHeight: '20px',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        },
        textProviderErr: {
            color: '#EB5757',
            marginTop: theme.spacing(1)
        },
        loadingITO: {
            marginTop: 260,
            textAlign: 'center',
            fontSize: 24
        },
        loadingITO_Button: {
            color: '#fff',
            borderColor: '#fff !important',
            margin: theme.spacing(1, 'auto'),
            minHeight: 35,
            '&:hover': {
                background: 'none',
                borderColor: '#fff !important'
            },
            background: 'none'
        },
        loadingWrap: {
            display: 'flex',
            justifyContent: 'center'
        },
        textInOneLine: {
            whiteSpace: 'nowrap'
        },
        claimDate: {
            marginTop: 16,
            color: '#F4212E'
        },
        grid: {
            width: '100%',
            margin: 0
        }
    })
);
const TokenItem = ({ price , token , exchangeToken  })=>{
    const { classes  } = ITO_useStyles({});
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                classes: {
                    icon: classes.tokenIcon
                },
                address: exchangeToken.address,
                logoURL: exchangeToken.logoURL,
                chainId: token.chainId
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                component: "span",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: price
                    }),
                    ' ',
                    (0,src/* isSameAddress */.Wr)(exchangeToken.address, NATIVE_TOKEN_ADDRESS) ? resolver/* chainResolver.nativeCurrency */.VU.nativeCurrency(exchangeToken.chainId)?.symbol : exchangeToken.symbol,
                    ' ',
                    "/ ",
                    token.symbol
                ]
            })
        ]
    });
};
function ITO(props) {
    // context
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const [, destructCallback] = useDestructCallback(props.payload.contract_address);
    const [openClaimDialog, setOpenClaimDialog] = (0,react.useState)(false);
    const [claimDialogStatus, setClaimDialogStatus] = (0,react.useState)(SwapStatus.Remind);
    // assets
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(45554), __webpack_require__.b));
    const { pid , payload  } = props;
    const { regions: defaultRegions = '-'  } = props.payload;
    const { token , total: payload_total , exchange_amounts , exchange_tokens , limit , message  } = payload;
    const { t  } = (0,utils/* useI18N */.M1)();
    const sellerName = payload.seller.name ? payload.seller.name : message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0] === message ? (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4) : message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0];
    const title = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1] ?? message;
    const regions = message.split(ITO_constants/* MSG_DELIMITER */.Z3)[2] ?? defaultRegions;
    const { classes  } = ITO_useStyles({
        titleLength: (0,utils/* getTextUILength */.c_)(title),
        tokenNumber: exchange_tokens.length,
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    // #region token detailed
    const { value: availability , computed: availabilityComputed , loading: loadingAvailability , retry: retryAvailability ,  } = useAvailabilityComputed(payload);
    const { listOfStatus , startTime , unlockTime , isUnlocked , hasLockTime , endTime , qualificationAddress  } = availabilityComputed;
    // #endregion
    const total = new bignumber.BigNumber(payload_total);
    const total_remaining = new bignumber.BigNumber(availability?.remaining ?? '0');
    const sold = total.minus(total_remaining);
    const { value: currentRegion , loading: loadingRegion  } = useIPRegion();
    const allowRegions = decodeRegionCode(regions);
    const isRegionRestrict = checkRegionRestrict(allowRegions);
    const isRegionAllow = !isRegionRestrict || !currentRegion || !loadingRegion && allowRegions.includes(currentRegion.code);
    const { value: ifQualified = false , loading: loadingIfQualified , retry: retryIfQualified ,  } = useIfQualified(qualificationAddress, payload.contract_address);
    // #endregion
    const isAccountSeller = (0,src/* isSameAddress */.Wr)(payload.seller.address, account) && chainId === payload.chain_id;
    const noRemain = total_remaining.isZero();
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    // #region buy info
    const { value: tradeInfo , loading: loadingTradeInfo , retry: retryPoolTradeInfo  } = usePoolTradeInfo(pid, account);
    const isBuyer = chainId === payload.chain_id && ((0,src/* isGreaterThan */.T1)(availability?.swapped ?? 0, 0) || Boolean(availability?.claimed));
    const successShareText = t((0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_success_share' : 'plugin_ito_claim_success_share_no_official_account', {
        user: sellerName,
        link: postLink,
        symbol: token.symbol,
        account: (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    });
    const canWithdraw = (0,react.useMemo)(()=>!availability?.destructed && isAccountSeller && !availability?.exchanged_tokens.every(src/* isZero */.Fr) && (listOfStatus.includes(ITO_Status.expired) || noRemain)
    , [
        tradeInfo,
        listOfStatus,
        isAccountSeller,
        noRemain,
        loadingTradeInfo
    ]);
    const refundAmount = (0,react.useMemo)(()=>{
        const buyInfo = tradeInfo?.buyInfo;
        if (!buyInfo) return src/* ZERO */.xE;
        return new bignumber.BigNumber(buyInfo.amount).minus(buyInfo.amount_sold);
    }, [
        tradeInfo
    ]);
    // out of stock
    const refundAllAmount = tradeInfo?.buyInfo && (0,src/* isZero */.Fr)(tradeInfo?.buyInfo.amount_sold);
    const onShareSuccess = (0,react.useCallback)(async ()=>{
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(successShareText);
    }, [
        successShareText
    ]);
    // #endregion
    const retryITOCard = (0,react.useCallback)(()=>{
        retryPoolTradeInfo();
        retryAvailability();
    }, [
        retryPoolTradeInfo,
        retryAvailability
    ]);
    // #region claim
    const [{ loading: isClaiming  }, claimCallback] = useClaimCallback([
        pid
    ], payload.contract_address);
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const claim = (0,react.useCallback)(async ()=>{
        const hash = await claimCallback();
        if (typeof hash !== 'string') return;
        openShareTxDialog({
            hash,
            buttonLabel: t('dismiss'),
            onShare () {
                window.location.reload();
            }
        });
    }, [
        claimCallback,
        openShareTxDialog,
        t
    ]);
    // #endregion
    const shareText = t((0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_ito_claim_foreshow_share' : 'plugin_ito_claim_foreshow_share_no_official_account', {
        link: postLink,
        name: token.name,
        symbol: token.symbol ?? 'token',
        account: (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? t('facebook_account') : t('twitter_account')
    });
    const onShare = (0,react.useCallback)(async ()=>{
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
    }, [
        shareText
    ]);
    const onUnlock = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Unlock);
        setOpenClaimDialog(true);
    }, []);
    const onClaim = (0,react.useCallback)(async ()=>{
        setClaimDialogStatus(SwapStatus.Remind);
        setOpenClaimDialog(true);
    }, []);
    // #region withdraw
    (0,react.useEffect)(()=>{
        const timeToExpired = endTime - Date.now();
        // https://stackoverflow.com/q/3468607
        // SetTimeout using a 32 bit int to store the delay so the max value allowed would be 2147483647.
        // Meanwhile, no need to refresh ITO card when expired time is a large value (more than one day).
        if (timeToExpired < 0 || listOfStatus.includes(ITO_Status.expired) || timeToExpired > 1000 * 60 * 60 * 24) return;
        const timer = setTimeout(()=>{
            setOpenClaimDialog(false);
            retryITOCard();
        }, timeToExpired + ITO_constants/* TIME_WAIT_BLOCKCHAIN */.$9);
        return ()=>clearTimeout(timer)
        ;
    }, [
        endTime,
        listOfStatus
    ]);
    const onWithdraw = (0,react.useCallback)(async ()=>{
        await destructCallback(payload.pid);
    }, [
        destructCallback,
        payload.pid
    ]);
    // #endregion
    const swapStatusText = (0,react.useMemo)(()=>{
        if (listOfStatus.includes(ITO_Status.waited)) return t('plugin_ito_status_no_start');
        if (listOfStatus.includes(ITO_Status.expired)) return t('plugin_ito_expired');
        if (listOfStatus.includes(ITO_Status.started)) {
            if (total_remaining.isZero()) return t('plugin_ito_status_out_of_stock');
            return t('plugin_ito_status_ongoing');
        }
        return '';
    }, [
        listOfStatus,
        total_remaining
    ]);
    const swapResultText = (0,react.useMemo)(()=>{
        if (refundAllAmount) {
            return t('plugin_ito_out_of_stock_hit');
        }
        const _text = new bignumber.BigNumber(availability?.swapped || 0).isGreaterThan(0) ? t('plugin_ito_your_swapped_amount', {
            amount: (0,src/* formatBalance */.az)(availability?.swapped || 0, token.decimals),
            symbol: token.symbol
        }) : t('plugin_ito_your_claimed_amount', {
            amount: (0,src/* formatBalance */.az)(tradeInfo?.buyInfo?.amount_bought || 0, token.decimals),
            symbol: token.symbol
        });
        if (refundAmount.isZero() || refundAmount.isLessThan(0)) {
            return `${_text}.`;
        }
        return `${_text}, ${t('plugin_ito_your_refund_amount', {
            amount: (0,src/* formatBalance */.az)(refundAmount, tradeInfo?.buyInfo?.token.decimals ?? 0),
            symbol: tradeInfo?.buyInfo?.token.symbol
        })}`;
    }, [
        availability?.swapped,
        refundAllAmount,
        refundAmount,
        token.decimals,
        token.symbol,
        tradeInfo?.buyInfo?.token.decimals,
        tradeInfo?.buyInfo?.token.symbol, 
    ]);
    const FooterStartTime = (0,react.useMemo)(()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.footerInfo,
            children: t('plugin_ito_list_start_date', {
                date: (0,format/* default */.Z)(startTime, 'yyyy-MM-dd HH:mm')
            })
        });
    }, [
        startTime
    ]);
    const FooterEndTime = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.footerInfo,
            children: t('plugin_ito_swap_end_date', {
                date: (0,format/* default */.Z)(endTime, 'yyyy-MM-dd HH:mm')
            })
        })
    , [
        endTime,
        t
    ]);
    const FooterSwapInfo = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: swapResultText
                }),
                FooterEndTime,
                hasLockTime && !isUnlocked && unlockTime > Date.now() && new bignumber.BigNumber(availability?.swapped || 0).isGreaterThan(0) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.footerInfo,
                    children: t('plugin_ito_wait_unlock_time', {
                        unlockTime: (0,format/* default */.Z)(unlockTime, 'yyyy-MM-dd HH:mm')
                    })
                }) : null
            ]
        })
    , [
        FooterEndTime,
        swapResultText
    ]);
    const FooterNormal = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    className: classes.footerInfo,
                    children: t('plugin_ito_allocation_per_wallet', {
                        limit: (0,src/* formatBalance */.az)(limit, token.decimals),
                        token: token.symbol
                    })
                }),
                listOfStatus.includes(ITO_Status.waited) ? FooterStartTime : listOfStatus.includes(ITO_Status.started) ? FooterEndTime : null
            ]
        })
    , [
        FooterEndTime,
        FooterStartTime,
        limit,
        listOfStatus,
        token.decimals,
        token.symbol
    ]);
    const FooterBuyerLockedButton = (0,react.useMemo)(()=>{
        if (!availability?.claimed) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                loading: isClaiming,
                onClick: claim,
                variant: "contained",
                size: "large",
                disabled: isClaiming,
                className: classes.actionButton,
                children: isClaiming ? t('plugin_ito_claiming') : t('plugin_ito_claim')
            });
        }
        if (canWithdraw) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: onWithdraw,
                variant: "contained",
                size: "large",
                className: classes.actionButton,
                children: t('plugin_ito_withdraw')
            });
        }
        return null;
    }, [
        availability?.claimed,
        canWithdraw,
        isClaiming
    ]);
    const FooterBuyerWithLockTimeButton = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                flex: 1,
                padding: 1.5
            },
            children: (()=>{
                if (isUnlocked) return FooterBuyerLockedButton;
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    onClick: ()=>undefined
                    ,
                    variant: "contained",
                    disabled: true,
                    size: "large",
                    className: classnames_default()(classes.actionButton, classes.textInOneLine),
                    children: t('plugin_ito_claim')
                });
            })()
        })
    , [
        noRemain,
        listOfStatus,
        isUnlocked
    ]);
    const FooterBuyerButton = (0,react.useMemo)(()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: (()=>{
                if (hasLockTime) return FooterBuyerWithLockTimeButton;
                if (canWithdraw) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1,
                            padding: 1.5
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            onClick: onWithdraw,
                            variant: "contained",
                            size: "large",
                            className: classes.actionButton,
                            children: t('plugin_ito_withdraw')
                        })
                    });
                }
                return null;
            })()
        })
    , [
        hasLockTime,
        canWithdraw
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                style: {
                    backgroundImage: `url(${PoolBackground})`,
                    backgroundRepeat: 'repeat'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                className: classes.title,
                                children: title
                            }),
                            swapStatusText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                className: classes.status,
                                children: swapStatusText
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.totalText,
                        children: [
                            t('plugin_ito_swapped_status', {
                                remain: (0,src/* formatBalance */.az)(sold, token.decimals),
                                total: (0,src/* formatBalance */.az)(total, token.decimals),
                                token: token.symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.tokenLink,
                                href: resolver/* explorerResolver.fungibleTokenLink */.Nb.fungibleTokenLink(token.chainId, token.address),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    fontSize: "small",
                                    className: classes.totalIcon
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.progressWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress/* StyledLinearProgress */.B, {
                            variant: "determinate",
                            value: Number(sold.multipliedBy(100).dividedBy(total))
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: exchange_tokens.slice(0, ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No).sort(helpers/* sortTokens */.xT).map((exchangeToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.rationWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenItem, {
                                    price: (0,src/* formatBalance */.az)(new bignumber.BigNumber(exchange_amounts[i * 2]).dividedBy(exchange_amounts[i * 2 + 1]).shiftedBy(token.decimals - exchangeToken.decimals).shiftedBy(exchangeToken.decimals).integerValue(), exchangeToken.decimals),
                                    token: token,
                                    exchangeToken: exchangeToken
                                })
                            }, i)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.footerInfo,
                                children: isBuyer ? FooterSwapInfo : listOfStatus.includes(ITO_Status.expired) ? FooterEndTime : FooterNormal
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.fromText,
                                children: [
                                    "From: @",
                                    sellerName
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.actionFooter,
                children: (()=>{
                    if (loadingRegion && isRegionRestrict) return null;
                    if (!isRegionAllow) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                flex: 1,
                                padding: 1.5
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                disabled: true,
                                onClick: ()=>undefined
                                ,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_region_ban')
                            })
                        });
                    }
                    if ((noRemain || listOfStatus.includes(ITO_Status.expired)) && !canWithdraw && (availability?.claimed && hasLockTime || !hasLockTime)) {
                        return null;
                    }
                    if (loadingTradeInfo || loadingAvailability) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                flex: 1,
                                padding: 1.5
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                disabled: true,
                                onClick: ()=>undefined
                                ,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_loading')
                            })
                        });
                    }
                    if (isBuyer) return FooterBuyerButton;
                    if (canWithdraw) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                flex: 1,
                                padding: 1.5
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                onClick: onWithdraw,
                                variant: "contained",
                                size: "large",
                                className: classes.actionButton,
                                children: t('plugin_ito_withdraw')
                            })
                        });
                    }
                    if ((!ifQualified || !ifQualified.qualified) && !(0,address/* isNativeTokenAddress */.qw)(qualificationAddress)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        padding: 12,
                                        flex: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared/* SharedIcon */.r, {
                                            style: {
                                                fontSize: 18
                                            }
                                        }),
                                        onClick: onShareSuccess,
                                        variant: "contained",
                                        size: "large",
                                        className: classes.actionButton,
                                        children: t('plugin_ito_share')
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        padding: 12,
                                        flex: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                                        expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                                        expectedChainId: payload.chain_id,
                                        renderInTimeline: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                            hideRiskWarningConfirmed: true,
                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(connect/* PluginWalletConnectIcon */.Q, {
                                                style: {
                                                    fontSize: 18
                                                }
                                            }),
                                            classes: {
                                                button: classes.actionButton
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                                onClick: retryIfQualified,
                                                loading: loadingIfQualified,
                                                variant: "contained",
                                                size: "large",
                                                className: classes.actionButton,
                                                children: loadingIfQualified ? t('plugin_ito_qualification_loading') : !ifQualified ? t('plugin_ito_qualification_failed') : !ifQualified.qualified ? (0,startCase/* default */.Z)(ifQualified.errorMsg) : null
                                            })
                                        })
                                    })
                                })
                            ]
                        });
                    }
                    if (listOfStatus.includes(ITO_Status.expired)) return null;
                    if (listOfStatus.includes(ITO_Status.waited)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        padding: 12,
                                        flex: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        onClick: onUnlock,
                                        variant: "contained",
                                        size: "large",
                                        className: classes.actionButton,
                                        children: t('plugin_ito_unlock_in_advance')
                                    })
                                }),
                                shareText ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        flex: 1,
                                        padding: 12
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared/* SharedIcon */.r, {
                                            style: {
                                                width: 18,
                                                height: 18
                                            }
                                        }),
                                        onClick: onShare,
                                        variant: "contained",
                                        size: "large",
                                        className: classes.actionButton,
                                        children: t('plugin_ito_share')
                                    })
                                }) : undefined
                            ]
                        });
                    }
                    if (listOfStatus.includes(ITO_Status.started)) {
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        flex: 1,
                                        padding: 12
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        onClick: onClaim,
                                        variant: "contained",
                                        size: "large",
                                        className: classes.actionButton,
                                        children: t('plugin_ito_enter')
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    style: {
                                        flex: 1,
                                        padding: 12
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared/* SharedIcon */.r, {
                                            style: {
                                                width: 18,
                                                height: 18
                                            }
                                        }),
                                        onClick: onShareSuccess,
                                        variant: "contained",
                                        size: "large",
                                        className: classes.actionButton,
                                        children: t('plugin_ito_share')
                                    })
                                })
                            ]
                        });
                    }
                    return null;
                })()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapGuide, {
                status: claimDialogStatus,
                total_remaining: total_remaining,
                payload: {
                    ...payload,
                    qualification_address: qualificationAddress
                },
                shareSuccessText: successShareText,
                isBuyer: isBuyer,
                exchangeTokens: exchange_tokens,
                open: openClaimDialog,
                onUpdate: setClaimDialogStatus,
                onClose: ()=>setOpenClaimDialog(false)
                ,
                retryPayload: retryITOCard
            })
        ]
    });
}
function ITO_Loading() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    const { classes  } = ITO_useStyles({});
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            className: classnames_default()(classes.root, classes.loadingWrap),
            elevation: 0,
            style: {
                backgroundImage: `url(${PoolBackground})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('plugin_ito_loading')
            })
        })
    });
}
function ITO_Error({ retryPoolPayload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ITO_useStyles({});
    const PoolBackground = (0,utils/* getAssetAsBlobURL */.$I)(new URL(/* asset import */ __webpack_require__(52872), __webpack_require__.b));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classnames_default()(classes.root, classes.loadingWrap),
        elevation: 0,
        style: {
            backgroundImage: `url(${PoolBackground})`
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.loadingITO,
                children: t('loading_failed')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                onClick: retryPoolPayload,
                variant: "outlined",
                className: classes.loadingITO_Button,
                children: t('try_again')
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(93122);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PostInspector.tsx










function PostInspector(props) {
    const { chain_id , pid  } = props.payload;
    const isCompactPayload_ = (0,helpers/* isCompactPayload */.cr)(props.payload);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: payload , error , loading , retry: retryPayload ,  } = usePoolPayload(isCompactPayload_ && chainId === chain_id ? pid : '');
    const _payload = payload ?? props.payload;
    // To meet the max allowance of the data size of image steganography, we need to
    //  cut off some properties, such as save the token address string only.
    const token = _payload.token;
    const { value: tokenDetailed , loading: _loadingToken , retry: retryToken ,  } = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, typeof token === 'string' ? token : token.address, {
        chainId: _payload.chain_id
    });
    const exchangeFungibleTokens = (0,react.useMemo)(()=>_payload.exchange_tokens.map((t)=>({
                address: t.address,
                schema: (0,src/* isSameAddress */.Wr)(t.address, NATIVE_TOKEN_ADDRESS) ? types/* SchemaType.Native */.XQ.Native : types/* SchemaType.ERC20 */.XQ.ERC20,
                chainId: _payload.chain_id,
                type: src/* TokenType.Fungible */.iv.Fungible
            })
        )
    , [
        JSON.stringify(_payload.exchange_tokens)
    ]);
    const { value: exchangeTokensDetailed , loading: loadingExchangeTokensDetailed , retry: retryExchangeTokensDetailed ,  } = (0,entry_web3/* useFungibleTokens */.nt)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (exchangeFungibleTokens ?? []).map((t)=>t.address
    ) ?? [], {
        chainId: _payload.chain_id
    });
    const retry = (0,react.useCallback)(()=>{
        retryPayload();
        retryToken();
        retryExchangeTokensDetailed();
    }, [
        retryPayload,
        retryToken,
        retryExchangeTokensDetailed
    ]);
    const loadingToken = _loadingToken || loadingExchangeTokensDetailed;
    const renderITO = ()=>{
        if (isCompactPayload_) {
            if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {});
            if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
                retryPoolPayload: retry
            });
        }
        if (loadingToken && typeof token === 'string' || tokenDetailed?.symbol?.toUpperCase() === 'UNKNOWN') return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Loading, {});
        if (!tokenDetailed && typeof token === 'string') return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO_Error, {
            retryPoolPayload: retry
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO, {
            pid: pid,
            payload: typeof token === 'string' ? {
                ..._payload,
                token: tokenDetailed,
                exchange_tokens: exchangeTokensDetailed
            } : _payload
        });
    };
    const theme = (0,utils/* useClassicMaskSNSPluginTheme */.JN)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme,
        children: renderITO()
    });
}

// EXTERNAL MODULE: ./src/plugins/ITO/base.ts
var ITO_base = __webpack_require__(69690);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js
var set = __webpack_require__(24730);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(30318);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(32841);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Repeat.js
var Repeat = __webpack_require__(74776);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ConfirmDialog.tsx














const useSwapItemStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});
function SwapItem(props) {
    const { token , swap , swapAmount  } = props;
    const [exchange, setExchange] = (0,react.useState)(false);
    const { classes  } = useSwapItemStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const amount_ = (0,src/* formatBalance */.az)(swapAmount || '0', swap?.decimals);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "textPrimary",
                children: t('plugin_ito_swap_title', {
                    swap: exchange ? swap?.symbol : token?.symbol,
                    token: exchange ? token?.symbol : swap?.symbol,
                    amount: exchange ? src/* ONE.dividedBy */.ry.dividedBy(amount_).toFixed() : amount_
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: ()=>setExchange(!exchange)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "large",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Repeat/* default */.Z, {
                        fontSize: "small"
                    })
                })
            })
        ]
    });
}
const ConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            flexGrow: 1
        },
        title: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.primary,
            fontSize: 18
        },
        line: {
            display: 'flex',
            padding: theme.spacing(1)
        },
        data: {
            padding: theme.spacing(1),
            textAlign: 'right',
            color: theme.palette.text.primary
        },
        label: {
            padding: theme.spacing(1),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            wordBreak: 'keep-all'
        },
        button: {
            padding: theme.spacing(2),
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: theme.spacing(0, 0, 1, 0)
            }
        },
        link: {
            padding: 0,
            marginLeft: theme.spacing(0.5),
            marginTop: 2
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        }
    })
);
function ConfirmDialog(props) {
    const { poolSettings , loading , onDone , onBack , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ConfirmDialog_useStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const showQualification = poolSettings?.advanceSettingData.contract && poolSettings?.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS;
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    (0,react.useEffect)(()=>{
        if (poolSettings?.token?.chainId !== chainId) onClose();
    }, [
        onClose,
        chainId,
        poolSettings
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h3",
                        className: classes.title,
                        component: "h3",
                        color: "textPrimary",
                        children: poolSettings?.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_token')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.data,
                        style: {
                            display: 'flex',
                            justifyContent: 'flex-end'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                component: "span",
                                children: poolSettings?.token?.symbol
                            }),
                            (0,address/* isNativeTokenAddress */.qw)(poolSettings?.token?.address) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: resolver/* explorerResolver.fungibleTokenLink */.Nb.fungibleTokenLink(chainId, poolSettings?.token?.address),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: stop,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                    fontSize: "small"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_sell_total_amount')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: poolSettings?.total,
                                decimals: poolSettings?.token?.decimals,
                                symbol: poolSettings?.token?.symbol,
                                formatter: src/* formatBalance */.az
                            })
                        })
                    })
                }),
                poolSettings?.exchangeTokens.filter(Boolean).map((item, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            index === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                    className: classes.label,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body1",
                                        color: "textSecondary",
                                        children: t('plugin_ito_sell_price')
                                    })
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: index === 0 ? 11 : 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapItem, {
                                    token: poolSettings.token,
                                    swap: item,
                                    swapAmount: poolSettings?.exchangeAmounts[index]
                                })
                            })
                        ]
                    }, index);
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_allocation_per_wallet_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: poolSettings?.limit,
                                decimals: poolSettings?.token?.decimals,
                                symbol: poolSettings?.token?.symbol,
                                formatter: src/* formatBalance */.az
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_begin_time_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings?.startTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.label,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: t('plugin_ito_end_time_title')
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.data,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,format/* default */.Z)(poolSettings?.endTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                }),
                showQualification ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_qualification_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, poolSettings?.qualificationAddress),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: poolSettings?.qualificationAddress,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }) : null,
                poolSettings?.regions ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_region_confirm_label')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        decodeRegionCode(poolSettings?.regions).length,
                                        "/",
                                        regionCodes.length
                                    ]
                                })
                            })
                        })
                    ]
                }) : null,
                poolSettings?.unlockTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.label,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_ito_unlock_time')
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.data,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: (0,format/* default */.Z)(poolSettings?.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                                })
                            })
                        })
                    ]
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h5",
                        className: classes.title,
                        component: "p",
                        children: t('plugin_ito_send_tip')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    lg: 6,
                    xs: 12,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        disabled: loading,
                        fullWidth: true,
                        variant: "contained",
                        onClick: onBack,
                        children: t('plugin_ito_back')
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    lg: 6,
                    xs: 12,
                    className: classes.button,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        loading: loading,
                        disabled: loading,
                        fullWidth: true,
                        variant: "contained",
                        onClick: onDone,
                        children: t('plugin_ito_send_text', {
                            total: (0,src/* formatBalance */.az)(poolSettings?.total, poolSettings?.token?.decimals),
                            symbol: poolSettings?.token?.symbol
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(28937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(36756);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(39409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormGroup/FormGroup.js + 1 modules
var FormGroup = __webpack_require__(37419);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/AdvanceSetting.tsx




var SettingField;
(function(SettingField) {
    SettingField["IPRegion"] = "IPRegion";
    SettingField["delayUnlocking"] = "delayUnlocking";
    SettingField["contract"] = "contract";
})(SettingField || (SettingField = {}));
const AdvanceSetting_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            border: 0,
            margin: 0,
            padding: 0,
            position: 'relative',
            minWidth: 0,
            flexDirection: 'column',
            verticalAlign: 'top'
        },
        label: {
            padding: `${theme.spacing(1)} ${theme.spacing(1)}`
        },
        group: {
            flexFlow: 'wrap',
            justifyContent: 'space-between',
            padding: theme.spacing(0, 1),
            marginBottom: theme.spacing(1)
        }
    })
);
function AdvanceSetting({ advanceSettingData , setAdvanceSettingData  }) {
    const { classes  } = AdvanceSetting_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const handleAdvanceSettingToggle = (event)=>{
        const { name , checked  } = event.target;
        setAdvanceSettingData({
            ...advanceSettingData,
            [name]: checked
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.Z, {
                component: "legend",
                className: classes.label,
                children: t('plugin_ito_advanced')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormGroup/* default */.Z, {
                className: classes.group,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.IPRegion,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.IPRegion
                        }),
                        label: t('plugin_ito_advanced_ip_region')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.delayUnlocking,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.delayUnlocking
                        }),
                        label: t('plugin_ito_advanced_delay_unlocking')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            color: "primary",
                            checked: !!advanceSettingData.contract,
                            onChange: handleAdvanceSettingToggle,
                            name: SettingField.contract
                        }),
                        label: t('plugin_ito_advanced_contract')
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(29324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ArrowDownward.js
var ArrowDownward = __webpack_require__(2336);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useExchangeTokenAmountstate.ts


var ExchangeTokenAndAmountActionType;
(function(ExchangeTokenAndAmountActionType) {
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["ADD"] = 0] = "ADD";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["REMOVE"] = 1] = "REMOVE";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["UPDATE_AMOUNT"] = 2] = "UPDATE_AMOUNT";
    ExchangeTokenAndAmountActionType[ExchangeTokenAndAmountActionType["UPDATE_TOKEN"] = 3] = "UPDATE_TOKEN";
})(ExchangeTokenAndAmountActionType || (ExchangeTokenAndAmountActionType = {}));
function reducer(state, action) {
    switch(action.type){
        case ExchangeTokenAndAmountActionType.ADD:
            return [
                ...state,
                {
                    key: (0,v4/* default */.Z)(),
                    amount: '',
                    token: undefined
                }, 
            ];
        case ExchangeTokenAndAmountActionType.REMOVE:
            return state.filter((item)=>item.key !== action.key
            );
        case ExchangeTokenAndAmountActionType.UPDATE_AMOUNT:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    amount: action.amount
                } : item
            );
        case ExchangeTokenAndAmountActionType.UPDATE_TOKEN:
            return state.map((item)=>item.key === action.key ? {
                    ...item,
                    token: action.token
                } : item
            );
        default:
            return state;
    }
}
function useExchangeTokenAndAmount(arrState) {
    return (0,react.useReducer)(reducer, arrState && arrState.length > 0 ? arrState : [
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        },
        {
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        }, 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/AddOutlined.js
var AddOutlined = __webpack_require__(77810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/RemoveOutlined.js
var RemoveOutlined = __webpack_require__(92408);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanel.tsx











const ExchangeTokenPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%'
        },
        line: {
            margin: theme.spacing(1),
            display: 'flex'
        },
        input: {
            flex: 1,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(1),
            borderRadius: 10,
            backgroundColor: theme.palette.background.default,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                margin: theme.spacing(0),
                padding: theme.spacing(0, 0, 0, 0.5)
            }
        }
    })
);
function ExchangeTokenPanel(props) {
    const { onAmountChange , dataIndex , inputAmount , disableBalance , exchangeToken , onExchangeTokenChange , isSell , showAdd =true , showRemove =false , label , excludeTokensAddress =[] , selectedTokensAddress =[] , onRemove , onAdd ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ExchangeTokenPanel_useStyles();
    // #region select token dialog
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: isSell,
            blacklist: excludeTokensAddress,
            selectedTokens: [
                exchangeToken?.address || '',
                ...selectedTokensAddress
            ]
        });
        if (picked) onExchangeTokenChange(picked, dataIndex);
    }, [
        isSell,
        dataIndex,
        exchangeToken?.address,
        excludeTokensAddress.sort((a, b)=>a.localeCompare(b, 'en-US')
        ).join(),
        selectedTokensAddress.sort((a, b)=>a.localeCompare(b, 'en-US')
        ).join(), 
    ]);
    // #endregion
    // #region balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, exchangeToken?.address ?? '');
    // #endregion
    const [inputAmountForUI, setInputAmountForUI] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setInputAmountForUI(inputAmount);
    }, [
        inputAmount,
        setInputAmountForUI
    ]);
    const onAmountChangeForUI = (0,react.useCallback)((amount)=>{
        onAmountChange(amount, dataIndex);
    }, [
        dataIndex,
        onAmountChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.line,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                classes: {
                    root: classes.input
                },
                label: label,
                amount: inputAmountForUI,
                disableBalance: disableBalance,
                balance: disableBalance || loadingTokenBalance ? '0' : tokenBalance,
                token: exchangeToken,
                onAmountChange: onAmountChangeForUI,
                SelectTokenChip: {
                    loading: false,
                    ChipProps: {
                        onClick: onSelectTokenChipClick
                    }
                },
                TextFieldProps: {
                    disabled: !exchangeToken,
                    placeholder: !exchangeToken ? t('plugin_ito_placeholder_when_token_unselected') : '0.0'
                },
                ...props.TokenAmountPanelProps
            }),
            showAdd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onAdd,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddOutlined/* default */.Z, {
                    color: "primary"
                })
            }) : null,
            showRemove ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onRemove,
                className: classes.button,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RemoveOutlined/* default */.Z, {
                    color: "error"
                })
            }) : null
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ExchangeTokenPanelGroup.tsx










const ExchangeTokenPanelGroup_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        arrow: {
            display: 'flex',
            justifyContent: 'center'
        },
        adornment: {
            color: theme.palette.text.secondary
        }
    })
);
function ExchangeTokenPanelGroup(props) {
    const { classes  } = ExchangeTokenPanelGroup_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onTokenAmountChange  } = props;
    const [selectedTokensAddress, setSelectedTokensAddress] = (0,react.useState)([]);
    const [exchangeTokenArray, dispatchExchangeTokenArray] = useExchangeTokenAndAmount(props.origin);
    const onAdd = (0,react.useCallback)(()=>{
        if (exchangeTokenArray.length > ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No) return;
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.ADD,
            key: (0,v4/* default */.Z)(),
            token: undefined,
            amount: '0'
        });
    }, [
        dispatchExchangeTokenArray,
        exchangeTokenArray.length
    ]);
    const onAmountChange = (0,react.useCallback)((amount, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount,
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    const onTokenChange = (0,react.useCallback)((token, key)=>{
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_TOKEN,
            token,
            key
        });
        dispatchExchangeTokenArray({
            type: ExchangeTokenAndAmountActionType.UPDATE_AMOUNT,
            amount: '',
            key
        });
    }, [
        dispatchExchangeTokenArray
    ]);
    (0,react.useEffect)(()=>{
        onTokenAmountChange(exchangeTokenArray);
        setSelectedTokensAddress(exchangeTokenArray.map((x)=>x.token?.address ?? ''
        ));
    }, [
        exchangeTokenArray,
        onTokenAmountChange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: exchangeTokenArray.map((item, idx)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanel, {
                        label: idx ? t('plugin_ito_swap_ration_label') : t('plugin_ito_sell_total_amount'),
                        dataIndex: item.key,
                        disableBalance: idx !== 0,
                        isSell: idx === 0,
                        inputAmount: item.amount,
                        selectedTokensAddress: selectedTokensAddress,
                        onAmountChange: onAmountChange,
                        exchangeToken: item.token,
                        onExchangeTokenChange: onTokenChange,
                        showRemove: idx > 0 && idx < exchangeTokenArray.length && exchangeTokenArray.length !== 2,
                        showAdd: idx === exchangeTokenArray.length - 1 && idx < ITO_constants/* ITO_EXCHANGE_RATION_MAX */.No,
                        onRemove: ()=>dispatchExchangeTokenArray({
                                type: ExchangeTokenAndAmountActionType.REMOVE,
                                key: item.key
                            })
                        ,
                        onAdd: onAdd,
                        TokenAmountPanelProps: {
                            InputProps: idx ? {
                                startAdornment: props.token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "start",
                                    className: classes.adornment,
                                    children: [
                                        "1",
                                        props.token?.symbol,
                                        "="
                                    ]
                                }) : ''
                            } : {}
                        }
                    }),
                    idx === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.arrow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                            color: "disabled"
                        })
                    }) : null
                ]
            }, idx);
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useDebounce.js
var useDebounce = __webpack_require__(86698);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Popover/Popover.js + 1 modules
var Popover = __webpack_require__(73551);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(56030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(44489);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ./shared/index.ts
var shared_0 = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/RegionSelect.tsx








const RegionSelect_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            width: '100%',
            height: '54px',
            alignItems: 'center',
            paddingLeft: theme.spacing(2)
        },
        allToggle: {
            marginLeft: `-${theme.spacing(1)}`
        },
        inputControl: {
            display: 'flex'
        },
        inputRoot: {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            '&:before': {
                borderColor: 'rgba(0, 0, 0, 0.01)'
            }
        },
        input: {
            padding: theme.spacing(2)
        },
        span: {
            paddingLeft: theme.spacing(2)
        },
        options: {
            maxHeight: 140,
            overflow: 'auto'
        },
        display: {
            padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`
        },
        item: {
            padding: `0 ${theme.spacing(2)}`
        }
    })
);
// TODO fix TextField focus style
const RegionSelect = /*#__PURE__*/ (0,react.forwardRef)(({ value =[] , onRegionChange , ...props }, ref)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RegionSelect_useStyles();
    const allRegions = useRegionList();
    const isAll = value.length === allRegions.length;
    const valueMap = new Map(value.map((code)=>[
            code,
            true
        ]
    ));
    const displayRef = (0,react.useRef)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [open, setOpen] = (0,react.useState)(false);
    const handleDisplayRef = (0,react.useCallback)((node)=>{
        displayRef.current = node;
        if (node) setAnchorEl(node);
    }, []);
    const [minPopoverWidth, setMinPopoverWidth] = (0,react.useState)(0);
    const refItem = (0,react.useMemo)(()=>({
            focus: ()=>{
                displayRef.current?.focus();
            }
        })
    , []);
    (0,react.useImperativeHandle)(ref, ()=>refItem
    , [
        refItem
    ]);
    const [filterText, setFilterText] = (0,react.useState)('');
    const [filteredRegions, setFilteredRegions] = (0,react.useState)(allRegions);
    const [, cancelFilterDebounce] = (0,useDebounce/* default */.Z)(()=>{
        const reg = new RegExp(filterText, 'i');
        setFilteredRegions(allRegions.filter((region)=>reg.test(region.name) || reg.test(region.code)
        ));
    }, 500, [
        filterText
    ]);
    const handleFilter = (event)=>{
        setFilterText(event.target.value);
    };
    const isAllFiltered = filteredRegions.every((region)=>valueMap.get(region.code)
    );
    const handleToggleAllFiltered = ()=>{
        filteredRegions.forEach((r)=>{
            isAllFiltered ? valueMap.delete(r.code) : valueMap.set(r.code, true);
        });
        onRegionChange(Array.from(valueMap.keys()));
    };
    const handleOpenChange = (toOpen, event)=>{
        if (toOpen && anchorEl) setMinPopoverWidth(anchorEl.clientWidth);
        if (!toOpen) {
            setFilterText('');
            cancelFilterDebounce();
        }
        setOpen(toOpen);
    };
    const handleToggle = (code)=>()=>{
            const isSelected = valueMap.get(code);
            isSelected ? valueMap.delete(code) : valueMap.set(code, true);
            onRegionChange(Array.from(valueMap.keys()));
        }
    ;
    const handleMouseDown = (event)=>{
        // Ignore everything but left-click
        if (event.button !== 0) {
            return;
        }
        // Hijack the default focus behavior.
        event.preventDefault();
        handleOpenChange(true, event);
    };
    const handlePopoverClose = (event)=>{
        handleOpenChange(false, event);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.root,
                ref: handleDisplayRef,
                onMouseDown: handleMouseDown,
                children: isAll ? t('plugin_ito_region_all') : t('plugin_ito_region_list', {
                    all: allRegions.length,
                    select: value.length
                })
            }),
            (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Popover/* default */.ZP, {
                    container: container,
                    open: open,
                    anchorEl: anchorEl,
                    PaperProps: {
                        style: {
                            minWidth: `${minPopoverWidth}px`
                        }
                    },
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left'
                    },
                    onClose: handlePopoverClose,
                    disableRestoreFocus: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                            className: classes.inputControl,
                            variant: "filled",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                                className: classes.inputRoot,
                                placeholder: t('plugin_ito_region_search'),
                                onChange: handleFilter,
                                inputProps: {
                                    className: classes.input
                                },
                                startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    className: classes.allToggle,
                                    checked: isAllFiltered,
                                    onChange: handleToggleAllFiltered,
                                    disableRipple: true
                                }),
                                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                                    position: "end",
                                    children: [
                                        value.length,
                                        "/",
                                        allRegions.length
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.options,
                            children: filteredRegions.map((region)=>{
                                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                                    className: classes.item,
                                    onClick: handleToggle(region.code),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            edge: "start",
                                            color: "primary",
                                            checked: valueMap.has(region.code),
                                            disableRipple: true
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: countryToFlag(region.code)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    className: classes.span,
                                                    children: region.name
                                                })
                                            ]
                                        })
                                    ]
                                }, region.code);
                            })
                        })
                    ]
                })
            )
        ]
    });
});
// ISO 3166-1 alpha-2
function countryToFlag(isoCode) {
    if (!shared_0/* Flags.using_emoji_flag */.vU.using_emoji_flag) return '';
    const modifiedPoints = [
        ...isoCode.toUpperCase()
    ].map((point)=>0x1f1a5 + point.codePointAt(0)
    );
    return String.fromCodePoint(...modifiedPoints);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CreateForm.tsx
























const CreateForm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        line: {
            margin: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            display: 'flex',
            [smallQuery]: {
                margin: theme.spacing(0)
            }
        },
        column: {
            flexDirection: 'column'
        },
        flow: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
        input: {
            padding: theme.spacing(1),
            flex: 1
        },
        inputLabel: {
            left: 8,
            top: 8
        },
        label: {
            paddingLeft: theme.spacing(2)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        button: {
            marginTop: theme.spacing(1.5),
            [smallQuery]: {
                lineHeight: 1.2,
                marginTop: theme.spacing(0)
            }
        },
        date: {
            margin: theme.spacing(1),
            display: 'flex',
            '& > * ': {
                flex: 1,
                padding: theme.spacing(1),
                [smallQuery]: {
                    flexDirection: 'column',
                    padding: theme.spacing(2, 0, 1, 0)
                }
            },
            [smallQuery]: {
                flexDirection: 'column',
                paddingLeft: 0,
                paddingRight: 0
            }
        },
        iconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 26,
            height: 24,
            borderRadius: 500
        },
        success: {
            backgroundColor: 'rgba(119, 224, 181, 0.2)'
        },
        fail: {
            backgroundColor: 'rgba(255, 78, 89, 0.2)'
        },
        qualStartTime: {
            padding: '0 16px',
            opacity: 0.8
        },
        field: {
            flex: 1,
            padding: theme.spacing(1),
            marginTop: theme.spacing(1)
        }
    };
});
function CreateForm(props) {
    const { onChangePoolSettings , onNext , origin , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(CreateForm_useStyles(), props);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { ITO2_CONTRACT_ADDRESS , DEFAULT_QUALIFICATION2_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const lastRecognizedIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { value: linkedPersona  } = (0,useActivatedUI/* useCurrentLinkedPersona */.Ol)();
    const senderName = ((lastRecognizedIdentity.identifier?.userId ?? currentIdentity?.identifier.userId) ?? linkedPersona?.nickname) ?? 'Unknown User';
    const [message, setMessage] = (0,react.useState)(origin?.title ?? '');
    const [totalOfPerWallet, setTotalOfPerWallet] = (0,react.useState)((0,src/* isZero */.Fr)(origin?.limit || '0') ? '' : (0,src/* formatBalance */.az)(origin?.limit || '0', origin?.token?.decimals));
    const [tokenAndAmount, setTokenAndAmount] = (0,react.useState)();
    const TAS = [];
    if (origin?.token && origin?.total) {
        TAS.push({
            token: origin?.token,
            amount: (0,src/* formatBalance */.az)(origin?.total || '0', origin?.token.decimals),
            key: (0,v4/* default */.Z)()
        });
    }
    if (origin?.exchangeTokens && origin?.exchangeAmounts) {
        origin?.exchangeTokens.map((i, x)=>TAS.push({
                amount: (0,src/* formatBalance */.az)(origin?.exchangeAmounts[x] || '0', i?.decimals),
                token: i,
                key: (0,v4/* default */.Z)()
            })
        );
    }
    // set the default exchange
    if (TAS.length === 1) {
        TAS.push({
            key: (0,v4/* default */.Z)(),
            amount: '',
            token: undefined
        });
    }
    const [tokenAndAmounts, setTokenAndAmounts] = (0,react.useState)(TAS);
    const [startTime, setStartTime] = (0,react.useState)(origin?.startTime || new Date());
    const [endTime, setEndTime] = (0,react.useState)(origin?.endTime || new Date());
    const [unlockTime, setUnlockTime] = (0,react.useState)(origin?.unlockTime || new Date());
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    // amount for displaying
    const inputTokenAmount = (0,formatter/* formatAmount */.dN)(tokenAndAmount?.amount || '0', tokenAndAmount?.token?.decimals);
    // balance
    const { value: tokenBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, tokenAndAmount?.token?.address ?? '');
    const RE_MATCH_WHOLE_AMOUNT = (0,react.useMemo)(()=>new RegExp(`^\\d*\\.?\\d{0,${tokenAndAmount?.token?.decimals ?? 18}}$`)
    , [
        tokenAndAmount?.token?.decimals
    ]);
    const onTotalOfPerWalletChange = (0,react.useCallback)((ev)=>{
        const total = ev.currentTarget.value;
        if (!RE_MATCH_WHOLE_AMOUNT.test(total)) return;
        if (total === '') setTotalOfPerWallet('');
        if (/^\d+\.?\d*$/.test(total)) {
            setTotalOfPerWallet(total);
        }
    }, [
        tokenAndAmount?.token?.decimals,
        RE_MATCH_WHOLE_AMOUNT
    ]);
    // qualificationAddress
    const [qualificationAddress, setQualificationAddress] = (0,react.useState)(origin?.qualificationAddress && origin.qualificationAddress !== DEFAULT_QUALIFICATION2_ADDRESS ? origin.qualificationAddress : '');
    const { value: qualification , loading: loadingQualification  } = useQualificationVerify(qualificationAddress, ITO2_CONTRACT_ADDRESS);
    // advance settings
    const [advanceSettingData, setAdvanceSettingData] = (0,react.useState)(origin?.advanceSettingData || {});
    // restrict regions
    const [regions, setRegions] = useRegionSelect(decodeRegionCode(origin?.regions ?? '-'));
    (0,react.useEffect)(()=>{
        if (!advanceSettingData.contract) setQualificationAddress('');
        if (!advanceSettingData.delayUnlocking) setUnlockTime(new Date());
        if (!advanceSettingData.IPRegion) setRegions(regionCodes);
    }, [
        advanceSettingData
    ]);
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS || !DEFAULT_QUALIFICATION2_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        DEFAULT_QUALIFICATION2_ADDRESS,
        onClose
    ]);
    (0,react.useEffect)(()=>{
        const [first, ...rest] = tokenAndAmounts;
        const qualificationAddress_ = qualification?.isQualification && advanceSettingData.contract ? qualificationAddress : DEFAULT_QUALIFICATION2_ADDRESS;
        if (!qualificationAddress_) return;
        setTokenAndAmount(first);
        onChangePoolSettings({
            // this is the raw password which should be signed by the sender
            password: lib_default().sha3(message) ?? '',
            name: senderName,
            title: message,
            limit: (0,formatter/* formatAmount */.dN)(totalOfPerWallet || '0', first?.token?.decimals),
            token: first?.token,
            total: (0,formatter/* formatAmount */.dN)(first?.amount || '0', first?.token?.decimals),
            exchangeAmounts: rest.map((item)=>(0,formatter/* formatAmount */.dN)(item.amount || '0', item?.token?.decimals)
            ),
            exchangeTokens: rest.map((item)=>item.token
            ),
            qualificationAddress: qualificationAddress_,
            startTime,
            endTime,
            unlockTime: unlockTime > endTime && advanceSettingData.delayUnlocking ? unlockTime : undefined,
            regions: encodeRegionCode(regions),
            advanceSettingData
        });
    }, [
        senderName,
        message,
        totalOfPerWallet,
        tokenAndAmount,
        tokenAndAmounts,
        setTokenAndAmount,
        startTime,
        endTime,
        unlockTime,
        qualification,
        regions,
        qualificationAddress,
        account,
        onChangePoolSettings,
        DEFAULT_QUALIFICATION2_ADDRESS, 
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (tokenAndAmounts.length === 0) return t('plugin_ito_error_enter_amount_and_token');
        for (const { amount , token  } of tokenAndAmounts){
            if (!token) return t('plugin_ito_error_select_token');
            if (amount === '') return t('plugin_ito_error_enter_amount');
            if ((0,src/* isZero */.Fr)(amount)) return t('plugin_ito_error_enter_amount');
        }
        if ((0,src/* isGreaterThan */.T1)(tokenAndAmount?.amount ?? '0', tokenBalance)) return t('plugin_ito_error_balance', {
            symbol: tokenAndAmount?.token?.symbol
        });
        if (!totalOfPerWallet || (0,src/* isZero */.Fr)(totalOfPerWallet)) return t('plugin_ito_error_allocation_absence');
        if ((0,src/* isGreaterThan */.T1)(totalOfPerWallet, tokenAndAmount?.amount ?? '0')) return t('plugin_ito_error_allocation_invalid');
        if (startTime >= endTime) return t('plugin_ito_error_exchange_time');
        if (endTime >= unlockTime && advanceSettingData.delayUnlocking) return t('plugin_ito_error_unlock_time');
        if (qualification?.startTime) {
            if (new Date(Number(qualification.startTime) * 1000) >= endTime) return t('plugin_ito_error_qualification_start_time');
        }
        if (!qualification?.isQualification && advanceSettingData.contract && qualificationAddress.length > 0) {
            return t('plugin_ito_error_invalid_qualification');
        }
        return '';
    }, [
        endTime,
        unlockTime,
        advanceSettingData,
        qualification,
        startTime,
        tokenAndAmount?.amount,
        tokenAndAmount?.token?.symbol,
        tokenAndAmounts,
        tokenBalance,
        totalOfPerWallet, 
    ]);
    const handleStartTime = (0,react.useCallback)((input)=>{
        setStartTime(input);
    }, []);
    const handleEndTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > startTime.getTime()) setEndTime(input);
    }, [
        startTime
    ]);
    const handleUnlockTime = (0,react.useCallback)((input)=>{
        const time = input.getTime();
        const now = Date.now();
        if (time < now) return;
        if (time > endTime.getTime()) setUnlockTime(input);
    }, [
        startTime
    ]);
    const StartTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_begin_time_title'),
        onChange: handleStartTime,
        date: startTime
    });
    const EndTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_end_time_title'),
        onChange: handleEndTime,
        min: (0,format/* default */.Z)(startTime, "yyyy-MM-dd'T00:00"),
        date: endTime
    });
    const UnlockTime = /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
        label: t('plugin_ito_unlock_time'),
        onChange: handleUnlockTime,
        date: unlockTime
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                style: {
                    display: 'block'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExchangeTokenPanelGroup, {
                    token: tokenAndAmount?.token,
                    origin: tokenAndAmounts,
                    onTokenAmountChange: (arr)=>setTokenAndAmounts(arr)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_message_label'),
                    value: message,
                    onChange: (e)=>setMessage((0,utils/* sliceTextByUILength */.cc)(e.target.value, 90))
                    ,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_allocation_per_wallet_title'),
                    onChange: onTotalOfPerWalletChange,
                    value: totalOfPerWallet,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    },
                    InputProps: {
                        endAdornment: tokenAndAmount?.token?.symbol,
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            inputMode: 'decimal',
                            placeholder: '0.0',
                            pattern: '^[0-9]$',
                            spellCheck: false
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                className: classes.date,
                direction: "row",
                children: [
                    StartTime,
                    " ",
                    EndTime
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AdvanceSetting, {
                    advanceSettingData: advanceSettingData,
                    setAdvanceSettingData: setAdvanceSettingData
                })
            }),
            advanceSettingData.IPRegion ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    label: t('plugin_ito_region_label'),
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            root: classes.inputLabel
                        }
                    },
                    InputProps: {
                        inputComponent: RegionSelect,
                        inputProps: {
                            value: regions,
                            onRegionChange: setRegions
                        }
                    }
                })
            }) : null,
            advanceSettingData.delayUnlocking ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.date,
                children: UnlockTime
            }) : null,
            account && advanceSettingData.contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classnames_default()(classes.line, classes.column),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        label: t('plugin_ito_qualification_label'),
                        onChange: (e)=>setQualificationAddress(e.currentTarget.value)
                        ,
                        value: qualificationAddress,
                        InputLabelProps: {
                            shrink: true,
                            classes: {
                                root: classes.inputLabel
                            }
                        },
                        InputProps: {
                            endAdornment: qualification?.isQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.success),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#77E0B5'
                                    }
                                })
                            }) : qualification?.loadingERC165 || loadingQualification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                size: 16
                            }) : qualificationAddress.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classnames_default()(classes.iconWrapper, classes.fail),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                    fontSize: "small",
                                    style: {
                                        color: '#ff4e59'
                                    }
                                })
                            }) : null
                        }
                    }),
                    qualification?.startTime && new Date(Number(qualification.startTime) * 1000) > startTime ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.qualStartTime,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_ito_qualification_start_time')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: new Date(Number(qualification.startTime) * 1000).toString()
                            })
                        ]
                    }) : null
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.line,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: inputTokenAmount,
                        spender: ITO2_CONTRACT_ADDRESS,
                        token: tokenAndAmount?.token?.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? tokenAndAmount.token : undefined,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: !!validationMessage,
                            onClick: onNext,
                            children: validationMessage || t('plugin_ito_next')
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isEqual/index.js
var isEqual = __webpack_require__(43055);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/utils/chain.ts











const interFace = new lib_esm_interface/* Interface */.vU(ITO2);
async function getAllPoolsAsSeller(chainId, startBlock, endBlock, sellerAddress, connection) {
    const { EXPLORER_API , API_KEYS =[]  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!EXPLORER_API || !ITO2_CONTRACT_ADDRESS || !startBlock) return [];
    // #region
    // 1. Filter out `Fill_Pool` transactions,
    // 2. Retrieve payload major data from its decoded input param.
    const response = await fetch(dist_default()(EXPLORER_API, {
        apikey: (0,head/* default */.Z)(API_KEYS),
        action: 'txlist',
        module: 'account',
        sort: 'desc',
        startBlock,
        endBlock,
        address: ITO2_CONTRACT_ADDRESS
    }));
    if (!response.ok) return [];
    const payload1 = await response.json();
    const payloadList = (payload1.result ?? []).flatMap((txType)=>{
        if (!(0,src/* isSameAddress */.Wr)(txType.from, sellerAddress)) return [];
        try {
            const decodedInputParam = interFace.decodeFunctionData('fill_pool', txType.input);
            const [sellerName = '', message = '', regions = '-'] = decodedInputParam._message.split(ITO_constants/* MSG_DELIMITER */.Z3);
            const payload = {
                end_time: (decodedInputParam._end.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                exchange_token_addresses: decodedInputParam._exchange_addrs,
                limit: decodedInputParam._limit.toString(),
                message,
                qualification_address: decodedInputParam._qualification,
                exchange_amounts: decodedInputParam._ratios.map((v)=>v.toString()
                ),
                start_time: (decodedInputParam._start.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                token_address: decodedInputParam._token_addr,
                total: decodedInputParam._total_tokens.toString(),
                unlock_time: (decodedInputParam._unlock_time.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                seller: {
                    address: txType.from,
                    name: sellerName
                },
                contract_address: txType.to,
                chain_id: chainId,
                regions,
                block_number: Number(txType.blockNumber),
                // #region Retrieve at step 3
                pid: '',
                creation_time: 0,
                // #endregion
                // #region Retrieve at step 4
                total_remaining: '',
                // #endregion
                // #region Retrieve from database
                password: ''
            };
            return {
                payload,
                hash: txType.hash
            };
        } catch  {
            return [];
        }
    });
    const eventLogResponse = await Promise.allSettled(payloadList.map(async (entity)=>{
        const result = await connection.getTransactionReceipt(entity.hash, {
            chainId
        });
        if (!result) return null;
        const log1 = result.logs.find((log)=>(0,src/* isSameAddress */.Wr)(log.address, ITO2_CONTRACT_ADDRESS)
        );
        if (!log1) return null;
        const eventParams = interFace.decodeEventLog('FillSuccess', log1.data, log1.topics);
        entity.payload.pid = eventParams.id;
        entity.payload.creation_time = eventParams.creation_time.toNumber();
        // 4. retrieve `total_remaining`, `exchange_in_volumes` and `exchange_out_volumes`
        const data = await checkAvailability(entity.payload.pid, entity.payload.seller.address, entity.payload.contract_address, chainId, connection);
        entity.payload.total_remaining = new (bignumber_default())(data.remaining).toString();
        return {
            pool: entity.payload,
            exchange_in_volumes: data.exchanged_tokens,
            // Calculate out later after fetching token detailed.
            exchange_out_volumes: []
        };
    }));
    // #endregion
    return eventLogResponse.map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
}
async function getClaimAllPools(chainId, endBlock, swapperAddress, connection) {
    const { EXPLORER_API , API_KEYS =[]  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const { ITO2_CONTRACT_ADDRESS , ITO2_CONTRACT_CREATION_BLOCK_HEIGHT: startBlock  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!EXPLORER_API || !ITO2_CONTRACT_ADDRESS || !startBlock || !connection) return [];
    // #region
    // 1. Filter out `swap` transactions,
    // 2. Retrieve payload major data from its decoded input param.
    const response = await fetch(dist_default()(EXPLORER_API, {
        apikey: (0,head/* default */.Z)(API_KEYS),
        action: 'txlist',
        module: 'account',
        sort: 'desc',
        startBlock,
        endBlock,
        address: ITO2_CONTRACT_ADDRESS
    }));
    if (!response.ok) return [];
    const result1 = (await response.json()).result;
    if (!Array.isArray(result1)) return [];
    const swapRawData = result1.flatMap((txType)=>{
        if (!(0,src/* isSameAddress */.Wr)(txType.from, swapperAddress)) return [];
        try {
            const decodedInputParam = interFace.decodeFunctionData('swap', txType.input);
            return {
                txHash: txType.hash,
                pid: decodedInputParam.id
            };
        } catch  {
            return [];
        }
    });
    // 3. filter out pools that have unlock_time.
    const swapRawFilteredData = (await Promise.allSettled(swapRawData.map(async (value)=>{
        const availability = await checkAvailability(value.pid, swapperAddress, ITO2_CONTRACT_ADDRESS, chainId, connection);
        const unlockTime = new Date(Number(availability.unlock_time) * 1000);
        if ((0,isEqual/* default */.Z)(unlockTime, new Date(ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm)) || availability.claimed) return null;
        return {
            ...value,
            unlockTime,
            isClaimable: (0,isAfter/* default */.Z)(Date.now(), unlockTime)
        };
    }))).map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
    // 4. Retrieve `SwapSuccess` Event to get tokenDetailed
    const swappedTokenUnmergedList = (await Promise.allSettled(swapRawFilteredData.map(async (value)=>{
        const result = await connection.getTransactionReceipt(value.txHash, {
            chainId
        });
        if (!result) return null;
        const log2 = result.logs.find((log)=>(0,src/* isSameAddress */.Wr)(log.address, ITO2_CONTRACT_ADDRESS)
        );
        if (!log2) return null;
        const eventParams = interFace.decodeEventLog('SwapSuccess', log2.data, log2.topics);
        return {
            pids: [
                value.pid
            ],
            amount: new (bignumber_default())(Number(eventParams.to_value)),
            isClaimable: value.isClaimable,
            unlockTime: value.unlockTime,
            token: {
                id: eventParams.to_address,
                address: eventParams.to_address,
                type: src/* TokenType.Fungible */.iv.Fungible,
                schema: types/* SchemaType.ERC20 */.XQ.ERC20,
                chainId
            }
        };
    }))).map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
    // 5. merge same swap token pools into one
    // eslint-disable-next-line unicorn/no-array-reduce
    const swappedTokenList = swappedTokenUnmergedList.reduce((acc, cur)=>{
        if (acc.some(checkClaimable(cur)) && cur.isClaimable) {
            // merge same claimable tokens to one
            const existToken = acc.find(checkClaimable(cur));
            const existTokenIndex = acc.findIndex(checkClaimable(cur));
            acc[existTokenIndex] = mergeTokens(existToken, cur);
        } else if (acc.some(checkUnlockTimeEqual(cur))) {
            // merge same unlock time tokens to one
            const existToken = acc.find(checkUnlockTimeEqual(cur));
            const existTokenIndex = acc.findIndex(checkUnlockTimeEqual(cur));
            acc[existTokenIndex] = mergeTokens(existToken, cur);
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
    return swappedTokenList;
}
function mergeTokens(a, b) {
    a.pids = a.pids.concat(b.pids);
    a.amount = a.amount.plus(b.amount);
    return a;
}
function checkUnlockTimeEqual(cur) {
    return (t)=>(0,src/* isSameAddress */.Wr)(t.token.address, cur.token.address) && (0,isEqual/* default */.Z)(t.unlockTime, cur.unlockTime)
    ;
}
function checkClaimable(cur) {
    return (t)=>(0,src/* isSameAddress */.Wr)(t.token.address, cur.token.address) && t.isClaimable
    ;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useAllPoolsAsSeller.ts








function useAllPoolsAsSeller(address) {
    const allPoolsRef = (0,react.useRef)([]);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    (0,react.useEffect)(()=>{
        allPoolsRef.current = [];
    }, [
        chainId
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!connection) return {
            pools: shared_base_src/* EMPTY_LIST */.rP,
            loadMore: false
        };
        const blockNumber = await connection.getBlockNumber();
        const _pools = await useAllPoolsAsSeller_getAllPoolsAsSeller(address, blockNumber, chainId, connection);
        const pools = _pools.filter((a)=>!allPoolsRef.current.map((b)=>b.pool.pid
            ).includes(a.pool.pid)
        );
        allPoolsRef.current = allPoolsRef.current.concat(pools);
        return {
            pools: allPoolsRef.current,
            loadMore: pools.length > 0
        };
    }, [
        address,
        chainId,
        connection
    ]);
}
async function useAllPoolsAsSeller_getAllPoolsAsSeller(address, endBlock, chainId, connection) {
    if (!connection) return shared_base_src/* EMPTY_LIST */.rP;
    const { ITO2_CONTRACT_CREATION_BLOCK_HEIGHT  } = (0,constants/* getITOConstants */.af)(chainId);
    // #region Get data from chain.
    const poolsFromChain = await getAllPoolsAsSeller(chainId, ITO2_CONTRACT_CREATION_BLOCK_HEIGHT, endBlock, address, connection);
    // #endregion
    // #region Inject password from database
    const poolsFromDB = await messages/* PluginITO_RPC.getAllPoolsAsSellerFromDatabase */.k.getAllPoolsAsSellerFromDatabase(poolsFromChain);
    return poolsFromChain.map((x)=>{
        const pool = poolsFromDB.find((y)=>y.payload.pid === x.pool.pid
        );
        if (!pool) return x;
        return {
            ...x,
            pool: {
                ...x.pool,
                password: pool.payload.password
            }
        };
    }).filter((x)=>x.pool.chain_id === chainId
    );
// #endregion
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(37194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(51399);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(34085);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(66415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(9051);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(9293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(14257);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolInList.tsx




















const PoolInList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        top: {
            width: '100%',
            boxSizing: 'border-box',
            padding: theme.spacing(1, 2, 1),
            [smallQuery]: {
                padding: theme.spacing(1, 0, 1)
            }
        },
        root: {
            borderRadius: 10,
            display: 'flex',
            padding: theme.spacing(2)
        },
        iconbar: {
            display: 'flex',
            justifyContent: 'center',
            paddingTop: theme.spacing(0.5),
            paddingRight: theme.spacing(1)
        },
        icon: {
            width: 32,
            height: 32
        },
        content: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowX: 'hidden'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            paddingBottom: theme.spacing(1),
            [smallQuery]: {
                flexDirection: 'column'
            }
        },
        button: {
            borderRadius: 50,
            [smallQuery]: {
                width: '100%'
            }
        },
        title: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: theme.spacing(1),
            width: '100%'
        },
        date: {
            fontSize: 12
        },
        progress: {
            paddingBottom: theme.spacing(1)
        },
        price: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: theme.spacing(1)
        },
        details: {
            '& > *': {
                paddingBottom: theme.spacing(1)
            }
        },
        table: {
            padding: theme.spacing(0, 0, 1, 0),
            borderRadius: 0
        },
        cell: {
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.primary,
            wordBreak: 'break-word'
        },
        head: {
            border: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.secondary
        },
        ellipsis: {
            maxWidth: 350,
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    };
});
function PoolInList(props) {
    const { pool , exchange_in_volumes , exchange_out_volumes , onSend , onRetry  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PoolInList_useStyles();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const isDebugging = (0,use_subscription.useSubscription)(shared_0/* PersistentStorages.Settings.storage.debugging.subscription */._H.Settings.storage.debugging.subscription);
    // #region Fetch tokens detailed
    const { value: _tokenDetailed  } = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, pool.token_address ?? pool.token.address);
    const poolToken = pool.token ?? _tokenDetailed;
    const { exchange_token_addresses  } = pool;
    const _poolTokens = exchange_token_addresses ? exchange_token_addresses.map((v)=>({
            address: v,
            schema: (0,src/* isSameAddress */.Wr)(v, NATIVE_TOKEN_ADDRESS) ? types/* SchemaType.Native */.XQ.Native : types/* SchemaType.ERC20 */.XQ.ERC20,
            type: src/* TokenType.Fungible */.iv.Fungible
        })
    ) : [];
    const { value: _exchangeTokens  } = (0,entry_web3/* useFungibleTokens */.nt)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, _poolTokens.map((x)=>x.address
    ));
    const exchangeTokens = pool.exchange_tokens ?? _exchangeTokens;
    // #endregion
    // #region Calculate out exchange_out_volumes
    const exchangeOutVolumes = exchange_out_volumes.length === exchange_in_volumes.length ? exchange_out_volumes : poolToken && exchangeTokens ? exchange_in_volumes.map((v, i)=>new (bignumber_default())(v).div(pool.exchange_amounts[i * 2]).times(pool.exchange_amounts[i * 2 + 1])
    ) : [];
    // #endregion
    // #region withdraw
    const [{ loading: destructing  }, destructCallback] = useDestructCallback(pool.contract_address);
    const destruct = (0,react.useCallback)(async (pid)=>{
        await destructCallback(pid);
        onRetry();
    }, [
        destructCallback,
        onRetry
    ]);
    // #endregion
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { computed: availabilityComputed , loading: loadingAvailability  } = useAvailabilityComputed(pool);
    const { value: tradeInfo , loading: loadingTradeInfo  } = usePoolTradeInfo(pool.pid, account);
    const title = pool.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[1] ?? pool.message;
    const noRemain = (0,src/* isZero */.Fr)(pool.total_remaining);
    const { listOfStatus  } = availabilityComputed;
    const isWithdrawn = tradeInfo?.destructInfo;
    const canWithdraw = !isWithdrawn && (listOfStatus.includes(ITO_Status.expired) || noRemain);
    // Note: After upgrade to Asymmetrical secret key in the future, `canSend` requires `password` exists.
    const canSend = !listOfStatus.includes(ITO_Status.expired) && !noRemain;
    const base = new (bignumber_default())(pool.total).minus(pool.total_remaining).dividedBy(pool.total).toNumber();
    const progress = 100 * base;
    const StatusButton = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: loadingTradeInfo || loadingAvailability ? null : canWithdraw ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                loading: destructing,
                disabled: destructing,
                fullWidth: true,
                size: "small",
                variant: "contained",
                onClick: ()=>destructCallback(pool.pid)
                ,
                children: t('plugin_ito_withdraw')
            }) : canSend ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                onClick: ()=>onSend?.((0,omit/* default */.Z)({
                        ...pool,
                        token: poolToken,
                        exchange_tokens: exchangeTokens
                    }, [
                        'token_addresses',
                        'exchange_token_addresses', 
                    ]))
                ,
                children: t('plugin_ito_list_button_send')
            }) : isWithdrawn ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                fullWidth: true,
                size: "small",
                variant: "contained",
                disabled: true,
                children: t('plugin_ito_withdrawn')
            }) : null
        });
    };
    return poolToken && exchangeTokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.top,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.iconbar,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.icon
                        },
                        address: poolToken.address,
                        name: poolToken.symbol,
                        logoURL: poolToken.logoURL
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.header,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.title,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            color: "textPrimary",
                                            className: classes.ellipsis,
                                            children: title
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_start_date', {
                                                date: (0,format/* default */.Z)(pool.start_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_list_end_date', {
                                                date: (0,format/* default */.Z)(pool.end_time, 'yyyy-MM-dd HH:mm:ss')
                                            })
                                        }),
                                        isDebugging ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.date,
                                            variant: "body2",
                                            color: "textSecondary",
                                            children: t('plugin_ito_password', {
                                                password: pool.password === '' ? 'no password' : pool.password
                                            })
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.button,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StatusButton, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.progress,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinearProgress/* default */.Z, {
                                variant: "determinate",
                                value: progress
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.price,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_sold_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: bignumber_default().sum(...exchangeOutVolumes),
                                                decimals: poolToken.decimals,
                                                formatter: src/* formatBalance */.az
                                            })
                                        }),
                                        ' ',
                                        poolToken.symbol
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        t('plugin_ito_list_total'),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "textPrimary",
                                            component: "span",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: pool.total,
                                                decimals: poolToken.decimals,
                                                formatter: src/* formatBalance */.az
                                            })
                                        }),
                                        ' ',
                                        poolToken.symbol
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.details,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                                component: Paper/* default */.Z,
                                className: classes.table,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                                    size: "small",
                                    stickyHeader: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_type')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_price')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_sold')
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                        className: classes.head,
                                                        align: "center",
                                                        size: "small",
                                                        children: t('plugin_ito_list_table_got')
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                                            children: exchangeTokens.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            style: {
                                                                whiteSpace: 'nowrap'
                                                            },
                                                            children: (0,src/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? resolver/* chainResolver.nativeCurrency */.VU.nativeCurrency(token.chainId)?.symbol : token.symbol
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: [
                                                                (0,src/* formatBalance */.az)(new (bignumber_default())(pool.exchange_amounts[index * 2]).dividedBy(pool.exchange_amounts[index * 2 + 1]).shiftedBy(poolToken.decimals - exchangeTokens[index].decimals).shiftedBy(exchangeTokens[index].decimals).integerValue(), token.decimals, 6),
                                                                ' ',
                                                                (0,src/* isSameAddress */.Wr)(token.address, NATIVE_TOKEN_ADDRESS) ? resolver/* chainResolver.nativeCurrency */.VU.nativeCurrency(token.chainId)?.symbol : token.symbol,
                                                                ' ',
                                                                "/ ",
                                                                poolToken.symbol
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                                value: exchangeOutVolumes[index],
                                                                decimals: poolToken.decimals,
                                                                significant: 6,
                                                                symbol: poolToken.symbol,
                                                                formatter: src/* formatBalance */.az
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                                            className: classes.cell,
                                                            align: "center",
                                                            size: "small",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                                value: exchange_in_volumes[index],
                                                                decimals: token.decimals,
                                                                significant: 6,
                                                                symbol: token.symbol,
                                                                formatter: src/* formatBalance */.az
                                                            })
                                                        })
                                                    ]
                                                }, index)
                                            )
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    }) : null;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/PoolList.tsx









const PoolList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);
function PoolList(props) {
    const { classes  } = PoolList_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value ={
        loadMore: true,
        pools: []
    } , loading , retry  } = useAllPoolsAsSeller(account);
    const { pools  } = value;
    const containerRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ref: containerRef,
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        }) : pools.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            color: "textSecondary",
            className: classes.content,
            children: t('no_data')
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.content,
            children: [
                pools.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolInList, {
                        ...x,
                        onSend: props.onSend,
                        onRetry: retry
                    }, x.pool.pid)
                ),
                loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {}) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useFill.ts











function useFillCallback(poolSettings) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: ITO_Contract  } = useITO_Contract(chainId);
    const paramResult = useFillParams(poolSettings);
    const [state, fillCallback] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!web3 || !poolSettings || !connection) return;
        const { password , startTime , endTime , token , unlockTime  } = poolSettings;
        if (!token || !ITO_Contract || !paramResult) return;
        const { params , paramsObj  } = paramResult;
        if (!checkParams(paramsObj)) return;
        // error: unable to sign password
        let signedPassword = '';
        try {
            signedPassword = await connection.signMessage(password, 'personalSign', {
                account
            });
        } catch  {
            signedPassword = '';
        }
        if (!signedPassword) {
            return;
        }
        params[0] = (0,lib.sha3)(signedPassword);
        // the given settings is valid
        const settings = {
            ...poolSettings,
            startTime: new Date(Math.floor(startTime.getTime() / 1000) * 1000),
            endTime: new Date(Math.floor(endTime.getTime() / 1000) * 1000),
            unlockTime: unlockTime ? new Date(Math.floor(unlockTime.getTime() / 1000) * 1000) : undefined,
            password: signedPassword,
            exchangeAmounts: paramsObj.exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            )
        };
        const config = {
            from: account,
            gas: await ITO_Contract.methods.fill_pool(...params).estimateGas({
                from: account
            }).catch(()=>{
                return;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            ITO_Contract.methods.fill_pool(...params).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve({
                    receipt,
                    settings
                });
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    }, [
        web3,
        account,
        chainId,
        ITO_Contract,
        poolSettings,
        paramResult,
        connection
    ]);
    return [
        state,
        fillCallback
    ];
}
function useFillParams(poolSettings) {
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { contract: ITO_Contract  } = useITO_Contract(chainId);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!poolSettings || !ITO_Contract) return null;
        const { startTime , endTime , title , name , token , total , limit , qualificationAddress , unlockTime , regions , exchangeAmounts: exchangeAmountsUnsorted , exchangeTokens: exchangeTokensUnsorted ,  } = poolSettings;
        // sort amounts and tokens
        const sorted = exchangeAmountsUnsorted.map((x, i)=>({
                amount: x,
                token: exchangeTokensUnsorted[i]
            })
        ).sort((unsortedA, unsortedB)=>(0,helpers/* sortTokens */.xT)(unsortedA.token, unsortedB.token)
        );
        const exchangeAmounts = sorted.map((x)=>x.amount
        );
        const exchangeTokens = sorted.map((x)=>x.token
        );
        const startTime_ = Math.floor((startTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const endTime_ = Math.floor((endTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const unlockTime_ = unlockTime ? Math.floor((unlockTime.getTime() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000) : 0;
        const now = Math.floor((Date.now() - ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm) / 1000);
        const ONE_TOKEN = src/* ONE.shiftedBy */.ry.shiftedBy(token.decimals ?? 0);
        const exchangeAmountsDivided = exchangeAmounts.map((x)=>{
            const amount = new (bignumber_default())(x);
            const divisor = (0,helpers/* gcd */.th)(ONE_TOKEN, amount);
            return [
                amount.dividedToIntegerBy(divisor),
                ONE_TOKEN.dividedToIntegerBy(divisor)
            ];
        });
        const totalAmount = new (bignumber_default())(total);
        const invalidTokenAt = exchangeAmountsDivided.findIndex(([tokenAmountA, tokenAmountB])=>totalAmount.multipliedBy(tokenAmountA).dividedToIntegerBy(tokenAmountB).isZero()
        );
        const paramsObj = {
            // #region tx function params
            password: primitives/* FAKE_SIGN_PASSWORD */.D,
            startTime: startTime_,
            endTime: endTime_,
            message: [
                name,
                title,
                regions
            ].join(ITO_constants/* MSG_DELIMITER */.Z3),
            exchangeAddrs: exchangeTokens.map((x)=>x.address
            ),
            ratios: exchangeAmountsDivided.flatMap((x)=>x
            ).map((y)=>y.toFixed()
            ),
            unlockTime: unlockTime_,
            tokenAddrs: token.address,
            total,
            limit,
            qualificationAddress,
            // #endregion
            // #region params for FE verify and fill settings
            exchangeAmountsDivided,
            now,
            invalidTokenAt,
            exchangeAmounts,
            exchangeTokens,
            token
        };
        if (!checkParams(paramsObj)) return null;
        const params = Object.values((0,omit/* default */.Z)(paramsObj, [
            'exchangeAmountsDivided',
            'now',
            'invalidTokenAt',
            'exchangeAmounts',
            'exchangeTokens',
            'token', 
        ]));
        return {
            params,
            paramsObj
        };
    }, [
        poolSettings
    ]).value;
}
function checkParams(paramsObj) {
    // error: the start time before BASE TIMESTAMP
    if (paramsObj.startTime < 0) {
        return false;
    }
    // error: the end time before BASE TIMESTAMP
    if (paramsObj.endTime < 0) {
        return false;
    }
    // error: the unlock time before BASE TIMESTAMP
    if (paramsObj.unlockTime < 0) {
        return false;
    }
    // error: the start time after the end time
    if (paramsObj.startTime >= paramsObj.endTime) {
        return false;
    }
    // error: the end time before now
    if (paramsObj.endTime <= paramsObj.now) {
        return false;
    }
    // error: unlock time before end time
    if (paramsObj.endTime >= paramsObj.unlockTime && paramsObj.unlockTime !== 0) {
        return false;
    }
    // error: limit greater than the total supply
    if ((0,src/* isGreaterThan */.T1)(paramsObj.limit, paramsObj.total)) {
        return false;
    }
    // error: exceed the max available total supply
    if ((0,src/* isGreaterThan */.T1)(paramsObj.total, '2e128')) {
        return false;
    }
    // error: The size of amounts and the size of tokens not match
    if (paramsObj.exchangeAmounts.length !== paramsObj.exchangeTokens.length) {
        return false;
    }
    // error: token amount is not enough for dividing into integral pieces
    if (paramsObj.invalidTokenAt >= 0) {
        return false;
    }
    return true;
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/CompositionDialog.tsx


























const CompositionDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { snsId  })=>({
        content: {
            ...snsId === shared_base_src/* EnhanceableSite.Minds */.Jk.Minds ? {
                minWidth: 600
            } : {},
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            top: 0,
            left: 0,
            right: 0,
            position: 'absolute'
        }
    })
);
var ITOCreateFormPageStep;
(function(ITOCreateFormPageStep) {
    ITOCreateFormPageStep["NewItoPage"] = 'new-ito';
    ITOCreateFormPageStep["ConfirmItoPage"] = 'confirm-item';
})(ITOCreateFormPageStep || (ITOCreateFormPageStep = {}));
function CompositionDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const { classes  } = CompositionDialog_useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    // #region step
    const [step, setStep] = (0,react.useState)(ITOCreateFormPageStep.NewItoPage);
    const onNext = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.NewItoPage) setStep(ITOCreateFormPageStep.ConfirmItoPage);
    }, [
        step
    ]);
    const onBack = (0,react.useCallback)(()=>{
        if (step === ITOCreateFormPageStep.ConfirmItoPage) setStep(ITOCreateFormPageStep.NewItoPage);
    }, [
        step
    ]);
    // #endregion
    const [poolSettings, setPoolSettings] = (0,react.useState)();
    // #region blocking
    const [{ loading: filling  }, fillCallback] = useFillCallback(poolSettings);
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const fill = (0,react.useCallback)(async ()=>{
        const result = await fillCallback();
        if (!result || result instanceof Error) return;
        const { receipt , settings  } = result;
        if (!receipt.transactionHash) return;
        await openShareTxDialog({
            hash: receipt.transactionHash
        });
        // no contract is available
        if (!ITO2_CONTRACT_ADDRESS) return;
        // the settings is not available
        if (!settings?.token) return;
        const FillSuccess = receipt.events?.FillSuccess.returnValues ?? {};
        // assemble JSON payload
        const payload = {
            contract_address: ITO2_CONTRACT_ADDRESS,
            pid: FillSuccess.id,
            password: settings.password,
            message: FillSuccess.message,
            limit: settings.limit,
            total: FillSuccess.total,
            total_remaining: FillSuccess.total,
            seller: {
                address: FillSuccess.creator
            },
            chain_id: chainId,
            start_time: settings.startTime.getTime(),
            end_time: settings.endTime.getTime(),
            unlock_time: settings.unlockTime?.getTime() ?? 0,
            qualification_address: settings.qualificationAddress,
            creation_time: Number.parseInt(FillSuccess.creation_time, 10) * 1000,
            token: settings.token,
            exchange_amounts: settings.exchangeAmounts,
            exchange_tokens: settings.exchangeTokens,
            regions: settings.regions
        };
        setPoolSettings(undefined);
        onCreateOrSelect(payload);
        onBack();
    }, [
        ITO2_CONTRACT_ADDRESS,
        fillCallback,
        openShareTxDialog
    ]);
    // #endregion
    const { closeDialog: closeApplicationBoardDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.ApplicationDialogUpdated */.R.events.ApplicationDialogUpdated);
    // #region tabs
    const state = (0,react.useState)(DialogTabs.create);
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const { value: linkedPersona  } = (0,useActivatedUI/* useCurrentLinkedPersona */.Ol)();
    const senderName = (currentIdentity?.identifier.userId ?? linkedPersona?.nickname) ?? 'Unknown User';
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (!payload.password) {
            const [, title] = payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3);
            payload.password = await connection?.signMessage(lib_default().sha3(title) ?? '', 'personalSign', {
                account
            }) ?? '';
        }
        if (!payload.password) {
            alert('Failed to sign the password.');
            return;
        }
        // To meet the max allowance of the data size of image steganography, we need to
        //  cut off and simplify some properties, such as save the token address string only.
        const payloadDetail = (0,omit/* default */.Z)((0,set/* default */.Z)((0,set/* default */.Z)((0,helpers/* payloadOutMask */._D)(payload), 'token', payload.token.address), 'exchange_tokens', payload.exchange_tokens.map(({ address  })=>({
                address
            })
        )), [
            'creation_time',
            'unlock_time',
            'total_remaining',
            'regions',
            'start_time',
            'end_time',
            'qualification_address', 
        ]);
        payloadDetail.seller.name = senderName;
        if (payload) attachMetadata(ITO_constants/* ITO_MetaKey_2 */.ag, payloadDetail);
        else dropMetadata(ITO_constants/* ITO_MetaKey_2 */.ag);
        closeApplicationBoardDialog();
        props.onConfirm(payload);
        // storing the created pool in DB, it helps retrieve the pool password later
        messages/* PluginITO_RPC.discoverPool */.k.discoverPool('', payload);
        const [, setValue] = state;
        setValue(DialogTabs.create);
    }, [
        account,
        chainId,
        props.onConfirm,
        state
    ]);
    const onClose = (0,react.useCallback)(()=>{
        const [, setValue] = state;
        setStep(ITOCreateFormPageStep.NewItoPage);
        if (step === ITOCreateFormPageStep.ConfirmItoPage) return;
        setPoolSettings(undefined);
        setValue(DialogTabs.create);
        props.onClose();
    }, [
        props,
        state,
        step
    ]);
    const tabProps = {
        tabs: [
            {
                label: t('plugin_ito_create_new'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateForm, {
                    onNext: onNext,
                    onClose: onClose,
                    origin: poolSettings,
                    onChangePoolSettings: setPoolSettings
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_ito_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolList, {
                    onSend: onCreateOrSelect
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state
    };
    // #endregion
    (0,react.useEffect)(()=>{
        if (!ITO2_CONTRACT_ADDRESS) onClose();
    }, [
        ITO2_CONTRACT_ADDRESS,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        isOpenFromApplicationBoard: props.isOpenFromApplicationBoard,
        disableBackdropClick: true,
        isOnBack: step === ITOCreateFormPageStep.ConfirmItoPage,
        open: props.open,
        title: t('plugin_ito_display_name'),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                step === ITOCreateFormPageStep.NewItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    classes: {
                        tabs: classes.tabs
                    },
                    height: 540,
                    ...tabProps
                }) : null,
                step === ITOCreateFormPageStep.ConfirmItoPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                    poolSettings: poolSettings,
                    loading: filling,
                    onBack: onBack,
                    onDone: fill,
                    onClose: onClose
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/Markets.tsx


const MarketsIcon = (0,icons_utils/* createIcon */.I)('Markets', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0_898_1294)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M24.9758 4.59146H7.67182C6.60782 4.59146 5.76782 5.43146 5.76782 6.43946V23.9115C5.76782 24.9195 6.60782 25.7595 7.67182 25.7595H24.9758C26.0398 25.7595 26.8798 24.9195 26.8798 23.9115V6.43946C26.8798 5.37546 26.0398 4.59146 24.9758 4.59146Z",
                    fill: "url(#paint0_linear_898_1294)"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                    filter: "url(#filter0_bd_898_1294)",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        d: "M17.9201 25.5912C17.0241 25.5912 16.1841 25.2552 15.5681 24.6392L4.03211 13.0472C3.41611 12.4312 3.08011 11.6472 3.08011 10.7512L2.91211 5.26318C2.91211 4.36718 3.24811 3.47118 3.86411 2.79918C4.53611 2.12718 5.37611 1.79118 6.32811 1.84718L11.8721 1.95918C12.7121 1.95918 13.5521 2.35118 14.1681 2.91118L25.7041 14.4472C26.3201 15.0632 26.6561 15.9032 26.6561 16.7992C26.6561 17.6952 26.3201 18.5352 25.7041 19.1512L20.2721 24.6392C19.6561 25.2552 18.8161 25.5912 17.9201 25.5912Z",
                        fill: "url(#paint1_linear_898_1294)",
                        fillOpacity: "0.8",
                        shapeRendering: "crispEdges"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M8.37779 7.03392C7.59145 7.82026 6.34985 7.82026 5.56351 7.03392C4.77717 6.24757 4.77717 5.00598 5.56351 4.21964C6.34985 3.4333 7.59145 3.4333 8.37779 4.21964C9.16414 5.00598 9.16414 6.24757 8.37779 7.03392ZM6.39124 5.04737C6.06015 5.37846 6.06015 5.8751 6.39124 6.20619C6.72233 6.53728 7.21897 6.53728 7.55006 6.20619C7.88115 5.8751 7.88115 5.37846 7.55006 5.04737C7.21897 4.71628 6.72233 4.71628 6.39124 5.04737Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M13.343 8.454L14.1501 9.26115L10.2621 13.1492L9.45492 12.342L13.343 8.454Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M17.7348 12.8459L17.0464 13.5343L15.8831 12.3711L12.6835 15.5707L11.8658 14.753L15.0654 11.5534L13.8969 10.3848L14.5854 9.69638L17.7348 12.8459Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M15.8409 18.9444C15.2852 18.3887 15.0118 17.8128 15.0206 17.2166C14.9977 16.4517 15.3354 15.7201 16.0335 15.022C16.7457 14.3098 17.4772 13.9722 18.2281 14.0091C18.8242 14.0003 19.4001 14.2738 19.9558 14.8295C20.5115 15.3851 20.785 15.9611 20.7762 16.5572C20.8113 17.3063 20.4728 18.037 19.7606 18.7492C19.0625 19.4473 18.3318 19.7858 17.5687 19.7647C16.9725 19.7735 16.3966 19.5 15.8409 18.9444ZM17.6531 18.6674C18.0786 18.6182 18.5103 18.3746 18.9482 17.9367C19.3843 17.5006 19.6261 17.0689 19.6736 16.6416C19.7246 16.2143 19.5892 15.8397 19.2674 15.5179C18.9456 15.1961 18.5701 15.0581 18.1411 15.1038C17.712 15.1495 17.2785 15.3913 16.8406 15.8292C16.4028 16.267 16.161 16.7005 16.1153 17.1296C16.0695 17.5587 16.2076 17.9341 16.5294 18.2559C16.8512 18.5777 17.2257 18.7149 17.6531 18.6674Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_bd_898_1294",
                    x: "-1.08789",
                    y: "-2.15884",
                    width: "31.744",
                    height: "33.75",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur_898_1294"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feOffset", {
                            dy: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "hardAlpha",
                            operator: "out"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            mode: "normal",
                            in2: "effect1_backgroundBlur_898_1294",
                            result: "effect2_dropShadow_898_1294"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect2_dropShadow_898_1294",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear_898_1294",
                    x1: "16.3238",
                    y1: "4.59146",
                    x2: "16.3238",
                    y2: "25.7595",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1B90EE"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#28E5FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear_898_1294",
                    x1: "14.7841",
                    y1: "1.84116",
                    x2: "14.7841",
                    y2: "25.5912",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FF0000"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FF2C2C"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                    id: "clip0_898_1294",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                        width: "28",
                        height: "28",
                        fill: "white"
                    })
                })
            ]
        })
    ]
}), '-1 -2 32 32');

;// CONCATENATED MODULE: ../icons/plugins/MarketsClaim.tsx


const MarketsClaimIcon = (0,icons_utils/* createIcon */.I)('Markets', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.98291 10.8867H31.8683V16.2617H5.98291V10.8867Z",
            fill: "#FF4A4A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.77734 16.2568H30.069V31.0937H7.77734V16.2568Z",
            fill: "#FB4141"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.77734 16.2568H30.069V18.3193H7.77734V16.2568Z",
            fill: "#F03333"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.1284 10.8867H21.7222V31.0985H16.1284V10.8867Z",
            fill: "#FFB45B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.7251 10.8867H20.1244V31.0985H17.7251V10.8867Z",
            fill: "#FFEF5B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.1253 10.8848L14.344 5.10352L10.3892 9.05838L12.2155 10.8848H20.1253Z",
            fill: "#FFB45B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.8643 10.8842L13.215 6.23145L11.5171 7.92936L14.472 10.8842H17.8643Z",
            fill: "#FFEF5B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.7251 10.8848L23.5029 5.10352L27.4577 9.05838L25.6348 10.8848H17.7251Z",
            fill: "#FFB45B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.9824 10.8842L24.6317 6.23145L26.3296 7.92936L23.3748 10.8842H19.9824Z",
            fill: "#FFEF5B"
        })
    ]
}), '0 0 36 36');

// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts
var entry_dom = __webpack_require__(89239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(95837);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox/index.tsx + 3 modules
var WalletStatusBox = __webpack_require__(47919);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/hooks/useClaimAll.ts





function useClaimAll(swapperAddress, chainId) {
    const allPoolsRef = (0,react.useRef)([]);
    (0,react.useEffect)(()=>{
        allPoolsRef.current = [];
    }, [
        chainId
    ]);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const asyncResult = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (allPoolsRef.current.length > 0 || !connection) return allPoolsRef.current;
        const blockNumber = await connection.getBlockNumber();
        const results = await getClaimAllPools(chainId, blockNumber, swapperAddress, connection);
        allPoolsRef.current = results;
        return allPoolsRef.current;
    }, [
        swapperAddress,
        chainId
    ]);
    return {
        ...asyncResult,
        retry: ()=>{
            allPoolsRef.current = [];
            asyncResult.retry();
        }
    };
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/ClaimAllDialog.tsx





















const ClaimAllDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    const isLight = theme.palette.mode === 'light';
    return {
        wrapper: {
            padding: theme.spacing(0, 4),
            [smallQuery]: {
                padding: theme.spacing(0, 1)
            }
        },
        actionButton: {
            margin: '0 auto',
            minHeight: 'auto',
            width: '100%',
            fontSize: 18,
            fontWeight: 400
        },
        footer: {
            marginTop: theme.spacing(2),
            zIndex: 1
        },
        footnote: {
            fontSize: 10,
            marginRight: theme.spacing(1)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        tokenCardWrapper: {
            width: '100%',
            color: 'white',
            overflow: 'auto',
            paddingTop: theme.spacing(1),
            marginBottom: theme.spacing(0.5)
        },
        tokenCard: {
            marginLeft: 'auto',
            marginRight: 'auto',
            color: 'white',
            flexDirection: 'column',
            padding: 0,
            marginBottom: theme.spacing(1.5),
            alignItems: 'baseline',
            justifyContent: 'space-between'
        },
        cardHeader: {
            display: 'flex',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            height: 42,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            WebkitFontSmoothing: 'antialiased',
            fontSize: 14
        },
        cardHeaderLocked: {
            background: isLight ? '#EBEEF0' : '#2F3336',
            color: isLight ? '#7B8192' : '#6F767C'
        },
        cardHeaderClaimable: {
            background: '#77E0B5',
            color: 'white'
        },
        cardContent: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            boxSizing: 'border-box',
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
            height: 62,
            fontSize: 18
        },
        cardContentLocked: {
            background: isLight ? 'white' : '',
            border: `1px solid ${isLight ? '#EBEEF0' : '#2F3336'}`
        },
        cardContentClaimable: {
            background: 'rgba(119, 224, 181, 0.1)',
            border: '1px solid rgba(56, 221, 192, 0.4)'
        },
        content: {
            marginBottom: theme.spacing(2)
        },
        contentTitle: {
            fontSize: 18,
            fontWeight: 300
        },
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            height: 36,
            minHeight: 36,
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        contentWrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: props.shortITOwrapper ? 450 : 650
        },
        actionButtonWrapper: {
            position: 'sticky',
            width: '100%',
            marginTop: 'auto',
            bottom: 0,
            zIndex: 2,
            paddingBottom: theme.spacing(4),
            paddingTop: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        emptyContentWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 350
        },
        lockIcon: {
            width: 22,
            height: 22,
            marginRight: 6
        },
        textWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: theme.spacing(1.5)
        },
        unlockTime: {
            marginRight: theme.spacing(1.5)
        },
        tokenBalance: {
            marginLeft: theme.spacing(1.5),
            color: theme.palette.mode === 'light' ? '#15181B' : '#D9D9D9'
        },
        tokenSymbol: {
            color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
        },
        snackbarSuccess: {
            backgroundColor: '#77E0B5'
        },
        snackbarError: {
            backgroundColor: '#FF5555'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        walletStatusBox: {
            margin: theme.spacing(3, 'auto')
        },
        claimAllButton: {
            height: 48,
            borderRadius: 999,
            [smallQuery]: {
                fontSize: 14
            }
        }
    };
});
function ClaimAllDialog(props) {
    const { t: t1  } = (0,utils/* useI18N */.M1)();
    const { open , onClose  } = props;
    const ITO_Definition = (0,entry_dom/* useActivatedPlugin */.Rc)(entry_dom/* PluginId.ITO */.je.ITO, 'any');
    const pluginId = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const chainIdList = ITO_Definition?.enableRequirement.web3?.[pluginId]?.supportedChainIds ?? [];
    const DialogRef = (0,react.useRef)(null);
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const currentChainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [chainId, setChainId] = (0,react.useState)(chainIdList.includes(currentChainId) ? currentChainId : types/* ChainId.Mainnet */.a_.Mainnet);
    const { value: _swappedTokens , loading: _loading , retry  } = useClaimAll(account, chainId);
    const { value: swappedTokensWithDetailed = [] , loading: loadingTokenDetailed  } = (0,entry_web3/* useFungibleTokens */.nt)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (_swappedTokens ?? []).map((t)=>t.token.address
    ) ?? [], {
        chainId
    });
    const loading = _loading || loadingTokenDetailed;
    const swappedTokens = _swappedTokens?.map((t)=>{
        const tokenDetailed = swappedTokensWithDetailed.find((v)=>(0,src/* isSameAddress */.Wr)(t.token.address, v.address)
        );
        if (tokenDetailed) t.token = tokenDetailed;
        return t;
    });
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* useITOConstants */.mg)(chainId);
    const claimablePids = (0,uniq/* default */.Z)((0,flatten/* default */.Z)(swappedTokens?.filter((t)=>t.isClaimable
    ).map((t)=>t.pids
    )));
    const [{ loading: isClaiming  }, claimCallback] = useClaimCallback(claimablePids, ITO2_CONTRACT_ADDRESS);
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const claim = (0,react.useCallback)(async ()=>{
        const hash = await claimCallback();
        if (typeof hash !== 'string') return;
        openShareTxDialog({
            hash,
            onShare () {
                retry();
            }
        });
    }, [
        claimCallback,
        openShareTxDialog,
        retry
    ]);
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: !swappedTokens || swappedTokens.length === 0
    });
    const [initLoading, setInitLoading] = (0,react.useState)(true);
    (0,react.useLayoutEffect)(()=>{
        setTimeout(()=>setInitLoading(false)
        , 1000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* SnackbarProvider */.wT, {
        domRoot: DialogRef.current,
        classes: {
            variantSuccess: classes.snackbarSuccess,
            variantError: classes.snackbarError
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: t1('plugin_ito_claim_all_dialog_title'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                            chainId: chainId,
                            setChainId: setChainId,
                            classes: classes,
                            chains: chainIdList
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.contentWrapper,
                        ref: DialogRef,
                        children: [
                            loading || initLoading || !swappedTokens ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                    size: 24
                                })
                            }) : swappedTokens.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.content,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
                                    swappedTokens: swappedTokens,
                                    chainId: chainId
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.emptyContentWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        t1('plugin_ito_no_claimable_token'),
                                        " "
                                    ]
                                })
                            }),
                            swappedTokens && swappedTokens.length > 0 || chainId === types/* ChainId.Matic */.a_.Matic && shared_0/* Flags.nft_airdrop_enabled */.vU.nft_airdrop_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.actionButtonWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                                    expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                                    expectedChainId: chainId,
                                    classes: {
                                        switchButton: classes.claimAllButton
                                    },
                                    noSwitchNetworkTip: true,
                                    ActionButtonPromiseProps: {
                                        size: 'large',
                                        sx: {
                                            minHeight: 'auto',
                                            width: '100%',
                                            fontSize: 18,
                                            fontWeight: 400
                                        }
                                    },
                                    children: swappedTokens?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                        classes: {
                                            connectWallet: classes.claimAllButton
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                            className: classnames_default()(classes.actionButton, classes.claimAllButton),
                                            variant: "contained",
                                            loading: isClaiming,
                                            disabled: claimablePids.length === 0 || isClaiming,
                                            size: "small",
                                            onClick: claim,
                                            children: t1('plugin_ito_claim_all')
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {})
                                })
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
}
function Content(props) {
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { swappedTokens , chainId  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.tokenCardWrapper,
        children: swappedTokens.map((swappedToken, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwappedToken, {
                    i: i,
                    swappedToken: swappedToken,
                    chainId: chainId
                })
            }, i)
        )
    });
}
function SwappedToken({ i , swappedToken , chainId  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const theme = (0,useTheme/* default */.Z)();
    const { classes  } = ClaimAllDialog_useStyles({
        shortITOwrapper: false
    });
    const { value: _token  } = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, swappedToken.token.address, {
        chainId
    });
    const token = _token ?? swappedToken.token;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.tokenCard,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.cardHeader, swappedToken.isClaimable ? classes.cardHeaderClaimable : classes.cardHeaderLocked),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.textWrapper,
                        children: [
                            swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.lockIcon,
                                src: theme.palette.mode === 'light' ? new URL(/* asset import */ __webpack_require__(96344), __webpack_require__.b).toString() : new URL(/* asset import */ __webpack_require__(15515), __webpack_require__.b).toString()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    token.symbol,
                                    ' ',
                                    swappedToken.isClaimable ? t('plugin_ito_claim_all_status_unclaimed') : t('plugin_ito_claim_all_status_locked'),
                                    ":"
                                ]
                            })
                        ]
                    }),
                    swappedToken.isClaimable ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.unlockTime,
                        children: t('plugin_ito_claim_all_unlock_time', {
                            time: (0,format/* default */.Z)(swappedToken.unlockTime, 'yyyy-MM-dd HH:mm:ss')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classnames_default()(classes.cardContent, swappedToken.isClaimable ? classes.cardContentClaimable : classes.cardContentLocked),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                    classes: {
                        balance: classes.tokenBalance,
                        symbol: classes.tokenSymbol
                    },
                    value: swappedToken.amount,
                    decimals: token.decimals,
                    symbol: token.symbol,
                    formatter: src/* formatBalance */.az
                })
            })
        ]
    }, i);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/index.tsx



















const SNSAdaptor_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        span: {
            paddingLeft: theme.spacing(1)
        }
    })
);
const sns = {
    ...ITO_base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const payload = (0,helpers/* ITO_MetadataReader */.fF)(props.message.meta);
        (0,entry_content_script/* usePluginWrapper */.fI)(payload.ok);
        if (!payload.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: (0,set/* default */.Z)((0,helpers/* payloadIntoMask */._x)(payload.val), 'token', payload.val.token)
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            ITO_constants/* ITO_MetaKey_1 */.uJ,
            onAttached_ITO
        ],
        [
            ITO_constants/* ITO_MetaKey_2 */.ag,
            onAttached_ITO
        ], 
    ]),
    CompositionDialogEntry: {
        dialog ({ open , onClose , isOpenFromApplicationBoard  }) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialog, {
                open: open,
                onConfirm: onClose,
                onClose: onClose,
                isOpenFromApplicationBoard: isOpenFromApplicationBoard
            });
        },
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsIcon, {
                    style: {
                        width: 16,
                        height: 16
                    }
                }),
                "ITO"
            ]
        })
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_ito_name"
            });
            const iconFilterColor = 'rgba(56, 228, 239, 0.3)';
            const clickHandler = ()=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                    reason: 'timeline',
                    open: true,
                    options: {
                        startupPlugin: ITO_base/* base.ID */.u.ID,
                        isOpenFromApplicationBoard: true
                    }
                })
            ;
            return {
                ApplicationEntryID: ITO_base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                        ...EntryComponentProps,
                        title: name,
                        icon: icon,
                        iconFilterColor: iconFilterColor,
                        onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                         : clickHandler
                    });
                },
                appBoardSortingDefaultPriority: 3,
                marketListSortingPriority: 3,
                icon,
                iconFilterColor,
                description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_ito_description"
                }),
                category: 'dapp',
                name,
                tutorialLink: 'https://realmasknetwork.notion.site/d84c60903f974f4880d2085a13906d55'
            };
        })(),
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsClaimIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_ito_claim"
            });
            const iconFilterColor = 'rgba(240, 51, 51, 0.3)';
            return {
                ApplicationEntryID: `${ITO_base/* base.ID */.u.ID}_claim`,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                                title: name,
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                ...EntryComponentProps,
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                                 : clickHandler
                            }),
                            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClaimAllDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            }) : null
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 4,
                icon,
                name,
                iconFilterColor
            };
        })(), 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsIcon, {
            style: {
                filter: 'drop-shadow(0px 6px 12px rgba(27, 144, 238, 0.2))',
                fontSize: 24
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(41, 228, 253, 0.2) 100%), #FFFFFF;'
    }
};
function onAttached_ITO(payload) {
    return {
        text: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge, {
            payload: payload
        })
    };
}
function Badge({ payload  }) {
    const { classes  } = SNSAdaptor_useStyles();
    const { value: tokenDetailed , loading: loadingToken  } = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, payload.token);
    const balance = (0,src/* formatBalance */.az)(payload.total, tokenDetailed?.decimals);
    const symbol = (tokenDetailed?.symbol ?? tokenDetailed?.name) ?? 'Token';
    const sellerName = payload.seller.name ? payload.seller.name : payload.message.split(ITO_constants/* MSG_DELIMITER */.Z3)[0] ?? (0,formatter/* formatEthereumAddress */.j8)(payload.seller.address, 4);
    return loadingToken ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ItoLabelIcon, {
                size: 14
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: classes.span,
                children: [
                    "A ITO with ",
                    balance,
                    " $",
                    symbol,
                    " from ",
                    sellerName
                ]
            })
        ]
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 19821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PluginITO_RPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83072);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);


if (false) {}
const PluginITO_Messages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV);
const PluginITO_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .ITO_PluginID */ .yV, ()=>__webpack_require__.e(/* import() */ 5288).then(__webpack_require__.bind(__webpack_require__, 65288))
, PluginITO_Messages.rpc);


/***/ }),

/***/ 36756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48591);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57753);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(76048), __webpack_require__.b)})`
        }
    },
    inputLabel: {
        left: 8,
        top: 8
    }
});
function DateTimePanel(props) {
    const { label , date: date1 , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(date1, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date = new Date(e.currentTarget.value);
            onChange(date);
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                root: classes.inputLabel
            }
        },
        inputProps: {
            className: classes.datetime,
            ...inputProps,
            min,
            max
        },
        type: "datetime-local"
    });
}


/***/ }),

/***/ 15515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/073ba01ed1558c712de2.png";

/***/ }),

/***/ 96344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/98d46d881ebd22c5705a.png";

/***/ }),

/***/ 45554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f835dfbca611a92937dd.jpg";

/***/ }),

/***/ 52872:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/63923416b1ad2fbbb38f.jpg";

/***/ }),

/***/ 96705:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a6690b564780e865be65.jpg";

/***/ }),

/***/ 76048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/978bf9587a9f8a073309.png";

/***/ })

}]);