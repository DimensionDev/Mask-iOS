(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3601],{

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

/***/ 93601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "decryptUnlockData": () => (/* reexport */ decryptUnlockData),
  "encryptUnlockData": () => (/* reexport */ encryptUnlockData),
  "getKey": () => (/* binding */ getKey),
  "getLocks": () => (/* binding */ getLocks),
  "getPurchasedLocks": () => (/* binding */ getPurchasedLocks),
  "postUnlockData": () => (/* binding */ postUnlockData),
  "verifyPurchase": () => (/* binding */ verifyPurchase)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/graphql-request@3.5.0_graphql@15.5.3/node_modules/graphql-request/dist/index.js
var dist = __webpack_require__(98458);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var urlcat_dist = __webpack_require__(19802);
var urlcat_dist_default = /*#__PURE__*/__webpack_require__.n(urlcat_dist);
// EXTERNAL MODULE: ./src/plugins/UnlockProtocol/constants.ts
var constants = __webpack_require__(38003);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/utils/crypto.ts

async function encryptUnlockData(content) {
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const key = await crypto.subtle.generateKey({
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    const encrypted = await crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, typeof content === 'string' ? (0,esm/* encodeText */.YT)(content) : content);
    const exportKey = await crypto.subtle.exportKey('raw', key);
    return {
        iv: (0,esm/* encodeArrayBuffer */.ll)(iv),
        key: (0,esm/* encodeArrayBuffer */.ll)(exportKey),
        encrypted: (0,esm/* encodeArrayBuffer */.ll)(encrypted)
    };
}
async function decryptUnlockData(iv, key, encrypted) {
    const importKey = await crypto.subtle.importKey('raw', (0,esm/* decodeArrayBuffer */.xe)(key), 'AES-GCM', true, [
        'decrypt'
    ]);
    const decrypted = await crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv: (0,esm/* decodeArrayBuffer */.xe)(iv)
    }, importKey, (0,esm/* decodeArrayBuffer */.xe)(encrypted));
    return {
        content: (0,esm/* decodeText */.rj)(decrypted)
    };
}

;// CONCATENATED MODULE: ./src/plugins/UnlockProtocol/Services.ts




const graphQLClients = {};
for (const [key, url] of Object.entries(constants/* graphEndpointKeyVal */.MM)){
    graphQLClients[key] = new dist.GraphQLClient(url);
}
const verifyHolder = async (_lockAddress, _holder, _chain)=>{
    const query = gql`
        query keyHolders($address: String!) {
            keyHolders(where: { address: $address }) {
                keys {
                    expiration
                    keyId
                    lock {
                        address
                    }
                }
            }
        }
    `;
    const variables = {
        address: _holder
    };
    const data = await graphQLClients[_chain].request(query, variables);
    return data;
};
const verifyActiveLock = (data)=>{
    verifyHolder(data.lock, data.address, data.chain).then((result)=>{
        const response = result;
        const keys = response.keyHolders[0].keys;
        keys.forEach((key1)=>{
            if (key1.lock.address === data.lock) {
                const currentTimeInSeconds = Math.floor(Date.now() / 1000);
                const diff = key1.expiration - currentTimeInSeconds;
                return diff > 0;
            } else {
                return false;
            }
        });
        return false;
    });
};
const verifyPurchase = async (_userAddress, _lockAddress, _lockChain)=>{
    const query = dist.gql`
        query locks($address: String!) {
            locks(where: { address: $address }) {
                owner
                keys {
                    owner {
                        id
                    }
                }
            }
        }
    `;
    const variables = {
        address: _lockAddress
    };
    let flag = false;
    const data = await graphQLClients[_lockChain].request(query, variables);
    if (data.locks[0].owner === _userAddress.toLowerCase()) {
        flag = true;
    } else if (data.locks[0].keys.length) {
        data.locks[0].keys.forEach((key2)=>{
            if (key2.owner.id === _userAddress.toLowerCase()) flag = true;
        });
    }
    return flag;
};
const getLocks = async (_address1)=>{
    const query = dist.gql`
        query lockManager($address: String!) {
            lockManagers(where: { address: $address }) {
                lock {
                    name
                    price
                    address
                }
            }
        }
    `;
    const variables = {
        address: _address1
    };
    const dataRes = [];
    for (const key3 of Object.keys(constants/* graphEndpointKeyVal */.MM)){
        const data = await graphQLClients[key3].request(query, variables);
        data.lockManagers.forEach((element)=>{
            element.lock.chain = Number.parseInt(key3, 10);
            dataRes.push(element);
        });
    }
    return dataRes;
};
const getPurchasedLocks = async (_address)=>{
    const query = dist.gql`
        query keyPurchases($address: String!) {
            keyPurchases(orderBy: timestamp, orderDirection: desc, where: { purchaser: $address }) {
                lock
                purchaser
            }
        }
    `;
    const variables = {
        address: _address
    };
    const dataRes = [];
    for (const key4 of Object.keys(constants/* graphEndpointKeyVal */.MM)){
        const data = await graphQLClients[key4].request(query, variables);
        data.keyPurchases.forEach((element)=>{
            element.chain = Number.parseInt(key4, 10);
            dataRes.push(element);
        });
    }
    return dataRes;
};
const postUnlockData = async (myBody)=>{
    const response = await fetch(urlcat_dist_default()(constants/* keyServerEndpoint */.vf, 'add'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json_stable_stringify_default()(myBody)
    });
    return response.status;
};
const getKey = async (data)=>{
    const response = await fetch(urlcat_dist_default()(constants/* keyServerEndpoint */.vf, 'request'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json_stable_stringify_default()(data)
    });
    return response.json();
};



/***/ })

}]);