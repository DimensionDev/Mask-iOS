(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1363],{

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

/***/ 70682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sf": () => (/* binding */ pluginDataHasValidKeyPath),
/* harmony export */   "HN": () => (/* binding */ createPluginDBAccess),
/* harmony export */   "tB": () => (/* binding */ toStore)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79930);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77046);
/// <reference path="../global.d.ts" />


//#endregion
const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__.openDB)('maskbook-plugin-data', 2, {
        async upgrade (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db.deleteObjectStore('PluginStore');
                const os = db.createObjectStore('PluginStore', {
                    keyPath: [
                        'plugin_id',
                        'value.type',
                        'value.id'
                    ]
                });
                // a compound index by "rec.plugin_id" + "rec.value.type"
                os.createIndex('type', [
                    'plugin_id',
                    'value.type'
                ]);
                for (const each of data){
                    if (!each.plugin_id) continue;
                    if (!pluginDataHasValidKeyPath(each.value)) continue;
                    Reflect.deleteProperty(each, 'type');
                    Reflect.deleteProperty(each, 'record_id');
                    await os.add(each);
                }
            }
        }
    });
});
// cause key path error in "add" will cause transaction fail, we need to check them first
function pluginDataHasValidKeyPath(value) {
    try {
        if (typeof value !== 'object' || value === null) return false;
        const id = Reflect.get(value, 'id');
        const type = Reflect.get(value, 'type');
        if (typeof id !== 'string' && typeof id !== 'number') return false;
        if (typeof type !== 'string' && typeof type !== 'number') return false;
        return true;
    } catch  {
        return false;
    }
}
const createPluginDBAccess = db1;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}


/***/ }),

/***/ 97834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ createPluginDatabase)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70682);

/**
 * @typeParameter Data It should be a [tagged union](https://en.wikipedia.org/wiki/Tagged_union) with an extra `id` field
 * @param plugin_id Plugin ID
 * @returns The database
 * @example
 *
 * type File = { type: 'file'; name: string; id: string }
 * type Folder = { type: 'folder'; file: string[]; id: string }
 * const pluginDatabase = createPluginDatabase<File | Folder>('id')
 * const file: File = { type: 'file', name: 'file.txt', id: uuid() }
 * const folder: Folder = { type: 'folder', file: [file.id], id: uuid() }
 * // Add new data
 * await pluginDatabase.add(file)
 * await pluginDatabase.add(folder)
 * // Remove
 * await pluginDatabase.remove('file', file.id)
 * // Query
 * const result: File | undefined = await pluginDatabase.get('file', file.id)
 * const has: boolean = await pluginDatabase.has('file', file.id)
 * // iterate
 * for await (const i of pluginDatabase.iterate('file')) {
 *     // read only during the for...await loop
 *     // !! NO: await pluginDatabase.remove('file', file.id)
 *     console.log(i.name)
 * }
 * for await (const i of pluginDatabase.iterate_mutate('folder')) {
 *     i.data // Folder
 *     await i.update({ ...i.data, file: [] })
 *     await i.delete()
 * }
 */ function createPluginDatabase(plugin_id) {
    let livingTransaction = undefined;
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    return {
        // Please keep the API minimal
        /**
         * Query an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async get (type, id) {
            const t = await c('r');
            const data = await t.store.get(key({
                type,
                id
            }));
            if (!data) return undefined;
            return data.value;
        },
        async has (type, id) {
            const t = await c('r');
            const count = await t.store.count(key({
                type,
                id
            }));
            return count > 0;
        },
        /**
         * Store a data into the database.
         * @param data Must be an object with "type" and "id"
         */ async add (data) {
            const t = await c('rw');
            if (!(0,___WEBPACK_IMPORTED_MODULE_0__/* .pluginDataHasValidKeyPath */ .Sf)(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
            else await t.store.add((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data));
        },
        /**
         * Remove an object from the database
         * @param type "type" field on the object
         * @param id "id" field on the object
         */ async remove (type, id) {
            return (await c('rw')).store.delete(key({
                type,
                id
            }));
        },
        /**
         * Iterate over the database of given type (readonly!)
         *
         * !!! During the iterate, you MUST NOT do anything that writes to the store (use iterate_mutate instead)
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield each.value.value;
            }
        },
        /**
         * Iterate over the database of given type (read-write).
         *
         * !!! You MUST NOT do anything asynchronous before the iterate ends
         *
         * !!! Otherwise the transaction will be inactivate
         * @param type "type" field on the object
         */ async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                yield {
                    data: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: (data)=>each.update((0,___WEBPACK_IMPORTED_MODULE_0__/* .toStore */ .tB)(plugin_id, data))
                };
            }
        }
    };
    async function c(usage) {
        if (usage === 'rw' && (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await (0,___WEBPACK_IMPORTED_MODULE_0__/* .createPluginDBAccess */ .HN)();
            const tx = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
            livingTransaction = tx;
            // Oops, workaround for https://bugs.webkit.org/show_bug.cgi?id=216769 or https://github.com/jakearchibald/idb/issues/201
            try {
                await tx.store.openCursor();
            } catch  {
                livingTransaction = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
                return livingTransaction;
            }
            return tx;
        }
        return livingTransaction;
    }
    function invalidateTransaction() {
        livingTransaction = undefined;
    }
}


/***/ }),

/***/ 77046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

function createDBAccess(opener) {
    let db = undefined;
    function clean() {
        db = undefined;
    }
    return async ()=>{
        if (true) await __webpack_require__.e(/* import() */ 1545).then(__webpack_require__.bind(__webpack_require__, 31545)).then(({ default: ready  })=>ready()
        );
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                db.transaction([], 'readonly', {
                });
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean);
        db.addEventListener('error', clean);
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    let pendingOpen = undefined;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db === null || db === void 0 ? void 0 : db.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        );
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 25599:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(82611);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"buyers":{"type":"array","title":"buyers","description":"A list of exchange token buyer","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/trader"}]}},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","buyers","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,metadata/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
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
    if ((0,src/* isNative */.tYA)(addressA)) return -1;
    if ((0,src/* isNative */.tYA)(addressB)) return 1;
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
        ...(0,lodash.omit)(token, 'chain_id'),
        chainId: token.chain_id
    };
}
function tokenOutMask(token) {
    return {
        ...(0,lodash.omit)(token, 'chainId'),
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
        buyers: [],
        exchange_amounts: [],
        exchange_tokens: []
    };
}
function isCompactPayload(payload) {
    return !payload.exchange_tokens.length;
}


/***/ }),

/***/ 51363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "discoverPool": () => (/* binding */ discoverPool),
  "getAllPoolsAsBuyer": () => (/* binding */ services_getAllPoolsAsBuyer),
  "getAllPoolsAsSeller": () => (/* binding */ services_getAllPoolsAsSeller),
  "getPool": () => (/* binding */ services_getPool),
  "getTradeInfo": () => (/* binding */ services_getTradeInfo)
});

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(93975);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(25599);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/index.ts





const TRADER_FIELDS = `
    address
    name
`;
const TOKEN_FIELDS = `
    chain_id
    type
    address
    name
    symbol
    decimals
`;
const POOL_FIELDS = `
    contract_address
    qualification_address
    pid
    password
    message
    limit
    total
    total_remaining
    chain_id
    start_time
    end_time
    creation_time
    token {
        ${TOKEN_FIELDS}
    }
    seller {
        address
    }
    buyers (first: 1) {
        address
        name
    }
    exchange_amounts
    exchange_tokens {
        ${TOKEN_FIELDS}
    }
`;
async function fetchFromMarketSubgraph(query, chainId) {
    const subgraphURL = (0,src/* getITOConstants */.afC)(chainId ? chainId : settings/* currentChainIdSettings.value */.wU.value).SUBGRAPH_URL;
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
async function getTradeInfo(pid, trader) {
    const data = await fetchFromMarketSubgraph(`
    {
        buyInfos (where: { pool: "${pid.toLowerCase()}", buyer: "${trader.toLowerCase()}" }) {
            buyer {
                ${TRADER_FIELDS}
            }
            token {
                ${TOKEN_FIELDS}
            }
            amount
            amount_sold
            amount_bought
        }
        sellInfos (where: { pool: "${pid.toLowerCase()}", seller: "${trader.toLowerCase()}" }) {
            seller {
                address
            }
            amount
        }
        destructInfos (where: { pool: "${pid.toLowerCase()}", seller: "${trader.toLowerCase()}" }) {
            seller {
                address
            }
            amount
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.buyInfos)) throw new Error('Failed to load trade info.');
    return {
        buyInfo: (0,lodash.first)(data.buyInfos),
        sellInfo: (0,lodash.first)(data.sellInfos),
        destructInfo: (0,lodash.first)(data.destructInfos)
    };
}
async function getPool(pid) {
    const data = await fetchFromMarketSubgraph(`
    {
        pool (id: "${pid.toLowerCase()}") {
            ${POOL_FIELDS}
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.pool)) throw new Error('Failed to load payload.');
    return (0,helpers/* payloadIntoMask */._x)(data.pool);
}
async function getAllPoolsAsSeller(address, page) {
    const data = await fetchFromMarketSubgraph(`
    {
        sellInfos ( orderBy: timestamp, orderDirection: desc, first: 50, skip: ${page * 50}, where: { seller: "${address.toLowerCase()}" }) {
            pool {
                ${POOL_FIELDS}
                exchange_in_volumes
                exchange_out_volumes
            }
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.sellInfos)) return [];
    return data.sellInfos.map((x)=>{
        const pool = (0,helpers/* payloadIntoMask */._x)((0,lodash.omit)(x.pool, [
            'exchange_in_volumes',
            'exchange_out_volumes'
        ]));
        return {
            pool,
            exchange_in_volumes: x.pool.exchange_in_volumes,
            exchange_out_volumes: x.pool.exchange_out_volumes
        };
    });
}
async function getAllPoolsAsBuyer(address, chainId) {
    const data = await fetchFromMarketSubgraph(`
    {
        buyInfos (where: { buyer: "${address.toLowerCase()}" }) {
            pool {
                ${POOL_FIELDS}
                exchange_in_volumes
                exchange_out_volumes
            }
        }
    }
    `, chainId);
    if (!(data === null || data === void 0 ? void 0 : data.buyInfos)) return [];
    return data.buyInfos.map((x)=>{
        const pool = (0,helpers/* payloadIntoMask */._x)((0,lodash.omit)(x.pool, [
            'exchange_in_volumes',
            'exchange_out_volumes'
        ]));
        return {
            pool,
            exchange_in_volumes: x.pool.exchange_in_volumes,
            exchange_out_volumes: x.pool.exchange_out_volumes
        };
    });
}

// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(82611);
// EXTERNAL MODULE: ./src/database/Plugin/wrap-plugin-database.ts
var wrap_plugin_database = __webpack_require__(97834);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/database.ts



const PoolDatabase = (0,wrap_plugin_database/* createPluginDatabase */.X)(constants/* ITO_PluginID */.yV);
async function getPoolsFromDB(rpids) {
    const records = [];
    for await (const record of PoolDatabase.iterate('ito-pool')){
        if (rpids.includes(record.payload.pid)) records.push(PoolRecordOutDB(record));
    }
    return records;
}
async function getPoolFromDB(rpid) {
    const record = await PoolDatabase.get('ito-pool', rpid);
    return record ? PoolRecordOutDB(record) : undefined;
}
async function addPoolIntoDB(record) {
    if (await PoolDatabase.has('ito-pool', record.id)) return;
    return PoolDatabase.add(PoolRecordIntoDB(record));
}
function removePoolFromDB(rpid) {
    return PoolDatabase.remove('ito-pool', rpid);
}
function PoolRecordIntoDB(x) {
    const record = x;
    record.type = 'ito-pool';
    return record;
}
function PoolRecordOutDB(x) {
    const record = x;
    return (0,lodash.omit)(record, [
        'type'
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/services.ts




async function services_getTradeInfo(pid, trader) {
    const tradeInfo = await getTradeInfo(pid, trader);
    return tradeInfo;
}
async function services_getPool(pid) {
    const poolFromChain = await getPool(pid);
    const poolFromDB = await getPoolFromDB(pid);
    if (poolFromDB === null || poolFromDB === void 0 ? void 0 : poolFromDB.payload.password) poolFromChain.password = poolFromDB.payload.password;
    return poolFromChain;
}
async function services_getAllPoolsAsSeller(address, page) {
    const chainId = settings/* currentChainIdSettings.value */.wU.value;
    const poolsFromChain = await getAllPoolsAsSeller(address, page);
    const poolsFromDB = await getPoolsFromDB(poolsFromChain.map((x)=>x.pool.pid
    ));
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
}
async function services_getAllPoolsAsBuyer(address, chainId) {
    const chainDetailed = (0,src/* getChainDetailed */.$Gt)(chainId);
    if (!chainDetailed) return [];
    const pools = await getAllPoolsAsBuyer(address, chainId);
    return pools.filter((x)=>x.pool.chain_id === chainId
    );
}
async function discoverPool(from, payload) {
    if (!payload.pid) return;
    if (!payload.password) return;
    const record_ = await getPoolFromDB(payload.pid);
    var _password;
    const record = {
        id: payload.pid,
        from: (record_ === null || record_ === void 0 ? void 0 : record_.from) || from,
        payload: {
            ...record_ === null || record_ === void 0 ? void 0 : record_.payload,
            ...payload,
            // reverse password if given payload hasn't got a password
            password: payload.password || ((_password = record_ === null || record_ === void 0 ? void 0 : record_.payload.password) !== null && _password !== void 0 ? _password : '')
        }
    };
    await addPoolIntoDB(record);
}


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

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ })

}]);