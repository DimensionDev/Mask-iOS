(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8211],{

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

/***/ 8211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaskNetworkAPI": () => (/* binding */ MaskNetworkAPI)
/* harmony export */ });
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66559);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86911);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21202);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45925);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89987);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63081);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95130);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2214);











const stringToPersonaIdentifier = (str)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Identifier.fromString */ .xb.fromString(str, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ECKeyIdentifier */ .ob).unwrap()
;
const stringToProfileIdentifier = (str)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .Identifier.fromString */ .xb.fromString(str, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .WO).unwrap()
;
const personaFormatter = (p)=>{
    const profiles = {};
    for (const [key, value] of p.linkedProfiles){
        const k = key.toText();
        Object.assign(profiles, {
            [k]: value === null || value === void 0 ? void 0 : value.connectionConfirmState
        });
    }
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedProfiles: profiles,
        hasPrivateKey: p.hasPrivateKey,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime()
    };
};
const profileFormatter = (p)=>{
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedPersona: !!p.linkedPersona,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime()
    };
};
const profileRelationFormatter = (p, personaIdentifier, favor)=>{
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedPersona: !!p.linkedPersona,
        createdAt: p.createdAt.getTime(),
        updatedAt: p.updatedAt.getTime(),
        personaIdentifier: personaIdentifier,
        favor: favor
    };
};
const personaInformationFormatter = (p)=>{
    const profiles = p.linkedProfiles.map((profileInformation)=>{
        return {
            nickname: profileInformation.nickname,
            identifier: profileInformation.identifier.toText(),
            avatar: profileInformation.avatar
        };
    });
    return {
        identifier: p.identifier.toText(),
        nickname: p.nickname,
        linkedProfiles: profiles
    };
};
const MaskNetworkAPI = {
    async app_resume () {
        _messages__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages.events.mobile_app_resumed.sendToAll */ .q.events.mobile_app_resumed.sendToAll();
    },
    async app_suspended () {
        _messages__WEBPACK_IMPORTED_MODULE_8__/* .MaskMessages.events.mobile_app_suspended.sendToAll */ .q.events.mobile_app_suspended.sendToAll();
    },
    web_echo: async (arg)=>arg.echo
    ,
    getDashboardURL: async ()=>browser.runtime.getURL('/dashboard.html')
    ,
    getConnectedPersonas: async ()=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyPersonas */ .ZP.Identity.queryMyPersonas();
        const connectedPersonas = personas.filter((p)=>!p.uninitialized
        ).map((p)=>{
            const profiles = [
                ...p.linkedProfiles
            ];
            const providers = [
                ..._social_network_define__WEBPACK_IMPORTED_MODULE_3__/* .definedSocialNetworkWorkers */ .zq
            ].map((i)=>{
                const profile = profiles.find(([key])=>key.network === i.networkIdentifier
                );
                return {
                    network: i.networkIdentifier,
                    connected: !!profile
                };
            });
            return providers;
        });
        return json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(connectedPersonas);
    },
    app_isPluginEnabled: ({ pluginID  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled(pluginID).then((x)=>!x
        )
    ,
    app_setPluginStatus: ({ pluginID , enabled  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setPluginMinimalModeEnabled */ .ZP.Settings.setPluginMinimalModeEnabled(pluginID, !enabled)
    ,
    settings_getTrendingDataSource: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getTrendingDataSource */ .ZP.Settings.getTrendingDataSource()
    ,
    settings_setTrendingDataSource: ({ provider  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setTrendingDataSource */ .ZP.Settings.setTrendingDataSource(provider)
    ,
    settings_getLaunchPageSettings: async ()=>_settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .launchPageSettings.value */ .i4.value
    ,
    settings_getTheme: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getTheme */ .ZP.Settings.getTheme()
    ,
    settings_setTheme: ({ theme  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setTheme */ .ZP.Settings.setTheme(theme)
    ,
    settings_getLanguage: ()=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getLanguage */ .ZP.Settings.getLanguage()
    ,
    settings_setLanguage: ({ language  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setLanguage */ .ZP.Settings.setLanguage(language)
    ,
    settings_createBackupJson: (options)=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.generateBackupJSON */ .ZP.Welcome.generateBackupJSON(options)
    ,
    settings_getBackupPreviewInfo: async ({ backupInfo  })=>{
        const data = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.parseBackupStr */ .ZP.Welcome.parseBackupStr(backupInfo);
        return data === null || data === void 0 ? void 0 : data.info;
    },
    settings_restoreBackup: ({ backupInfo  })=>{
        try {
            const json = JSON.parse(backupInfo);
            return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.restoreBackup */ .ZP.Welcome.restoreBackup(json);
        } catch (error) {
            throw new Error('invalid json');
        }
    },
    persona_createPersonaByMnemonic: async ({ mnemonic , nickname , password  })=>{
        const x = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromMnemonicWords */ .ZP.Identity.restoreFromMnemonicWords(mnemonic, nickname, password);
        return personaFormatter(x);
    },
    persona_queryPersonas: async ({ identifier , hasPrivateKey  })=>{
        const id = identifier ? stringToPersonaIdentifier(identifier) : undefined;
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonas */ .ZP.Identity.queryPersonas(id, hasPrivateKey);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_queryMyPersonas: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyPersonas */ .ZP.Identity.queryMyPersonas(network);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_updatePersonaInfo: ({ identifier , data  })=>{
        const { nickname  } = data;
        return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.renamePersona */ .ZP.Identity.renamePersona(stringToPersonaIdentifier(identifier), nickname);
    },
    persona_removePersona: ({ identifier  })=>_extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.deletePersona */ .ZP.Identity.deletePersona(stringToPersonaIdentifier(identifier), 'delete even with private')
    ,
    persona_restoreFromJson: async ({ backup  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromBackup */ .ZP.Identity.restoreFromBackup(backup);
        if (!result) throw new Error('invalid json');
    },
    persona_restoreFromBase64: async ({ backup  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.restoreFromBase64 */ .ZP.Identity.restoreFromBase64(backup);
        if (!result) throw new Error('invalid base64');
    },
    persona_connectProfile: async ({ profileIdentifier , personaIdentifier  })=>{
        const profileId = stringToProfileIdentifier(profileIdentifier);
        const identifier = stringToPersonaIdentifier(personaIdentifier);
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.attachProfile */ .ZP.Identity.attachProfile(profileId, identifier, {
            connectionConfirmState: 'confirmed'
        });
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(identifier);
        if (!persona.hasPrivateKey) throw new Error('invalid persona');
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.setupPersona */ .ZP.Identity.setupPersona(persona.identifier);
    },
    persona_disconnectProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.detachProfile */ .ZP.Identity.detachProfile(stringToProfileIdentifier(identifier));
    },
    persona_backupMnemonic: async ({ identifier  })=>{
        var ref;
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return (ref = persona.mnemonic) === null || ref === void 0 ? void 0 : ref.words;
    },
    persona_backupJson: async ({ identifier  })=>{
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Welcome.generateBackupJSON */ .ZP.Welcome.generateBackupJSON({
            noPosts: true,
            noWallets: true,
            filter: {
                type: 'persona',
                wanted: [
                    persona.identifier
                ]
            }
        });
    },
    persona_restoreFromPrivateKey: async ({ privateKey , nickname  })=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.createPersonaByPrivateKey */ .ZP.Identity.createPersonaByPrivateKey(privateKey, nickname);
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(identifier);
        return personaFormatter(persona);
    },
    persona_backupBase64: async ({ identifier  })=>{
        const file = await MaskNetworkAPI.persona_backupJson({
            identifier
        });
        return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .encodeArrayBuffer */ .ll)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .encodeText */ .YT)(JSON.stringify(file)));
    },
    persona_backupPrivateKey: async ({ identifier  })=>{
        const privateKey = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.exportPersonaPrivateKey */ .ZP.Identity.exportPersonaPrivateKey(stringToPersonaIdentifier(identifier));
        return privateKey;
    },
    persona_queryPersonaByPrivateKey: async ({ privateKey  })=>{
        const persona = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonaByPrivateKey */ .ZP.Identity.queryPersonaByPrivateKey(privateKey);
        return persona ? personaFormatter(persona) : undefined;
    },
    persona_getCurrentPersonaIdentifier: async ()=>{
        const identifier = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
        return identifier === null || identifier === void 0 ? void 0 : identifier.toText();
    },
    persona_setCurrentPersonaIdentifier: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Settings.setCurrentPersonaIdentifier */ .ZP.Settings.setCurrentPersonaIdentifier(stringToPersonaIdentifier(identifier));
    },
    persona_getOwnedPersonaInformation: async ({ identifier  })=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation();
        const currentPersona = personas.find((x)=>x.identifier.equals(stringToPersonaIdentifier(identifier))
        );
        if (!currentPersona) {
            throw new Error('invalid currentPersonaIdentifier');
        }
        return personaInformationFormatter(currentPersona);
    },
    persona_logout: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.logoutPersona */ .ZP.Identity.logoutPersona(stringToPersonaIdentifier(identifier));
    },
    profile_queryProfiles: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfiles */ .ZP.Identity.queryProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_queryMyProfiles: async ({ network  })=>{
        const result = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryMyProfiles */ .ZP.Identity.queryMyProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_updateProfileInfo: async ({ identifier , data  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.updateProfileInfo */ .ZP.Identity.updateProfileInfo(stringToProfileIdentifier(identifier), data);
    },
    profile_removeProfile: async ({ identifier  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.removeProfile */ .ZP.Identity.removeProfile(stringToProfileIdentifier(identifier));
    },
    profile_updateRelation: async ({ profile , linked , favor  })=>{
        await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.updateRelation */ .ZP.Identity.updateRelation(stringToProfileIdentifier(profile), stringToPersonaIdentifier(linked), favor);
    },
    profile_queryRelationPaged: async ({ network , after , count  })=>{
        let afterRecord;
        if (after) {
            afterRecord = {
                ...after,
                profile: stringToProfileIdentifier(after.profile),
                linked: stringToPersonaIdentifier(after.linked)
            };
        }
        const records = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryRelationPaged */ .ZP.Identity.queryRelationPaged({
            network,
            after: afterRecord
        }, count);
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfilesWithIdentifiers */ .ZP.Identity.queryProfilesWithIdentifiers(records.map((x)=>x.profile
        ));
        return profiles.map((profile)=>{
            const record = records.find((x)=>x.profile.equals(profile.identifier)
            );
            const favor = record === null || record === void 0 ? void 0 : record.favor;
            const personaIdentifier = record === null || record === void 0 ? void 0 : record.linked.toText();
            return profileRelationFormatter(profile, personaIdentifier, favor);
        });
    },
    wallet_updateEthereumAccount: async ({ account  })=>{
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateAccount */ .V.updateAccount({
            account,
            providerType: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .ProviderType.MaskWallet */ .lP.MaskWallet
        });
        _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.walletsUpdated.sendToAll */ .R$.events.walletsUpdated.sendToAll();
    },
    wallet_updateEthereumChainId: async ({ chainId  })=>{
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateAccount */ .V.updateAccount({
            chainId
        });
    },
    wallet_getLegacyWalletInfo: async ()=>{
        const wallets = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.getLegacyWalletRecords */ .V.getLegacyWalletRecords();
        return wallets.map((x)=>({
                address: x.address,
                name: x.name || undefined,
                path: x.path,
                mnemonic: x.mnemonic,
                passphrase: x.passphrase,
                private_key: x._private_key_,
                createdAt: x.createdAt.getTime(),
                updatedAt: x.updatedAt.getTime()
            })
        );
    },
    get_all_indexedDB_records: async ()=>{
        const personas = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryPersonaRecordsFromIndexedDB */ .ZP.Identity.queryPersonaRecordsFromIndexedDB();
        const profiles = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryProfileRecordFromIndexedDB */ .ZP.Identity.queryProfileRecordFromIndexedDB();
        const relations = await _extension_service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Identity.queryRelationsRecordFromIndexedDB */ .ZP.Identity.queryRelationsRecordFromIndexedDB();
        return {
            personas: personas.map((x)=>({
                    mnemonic: x.mnemonic,
                    nickname: x.nickname,
                    publicKey: x.publicKey,
                    privateKey: x.privateKey,
                    localKey: x.localKey,
                    identifier: x.identifier.toText(),
                    linkedProfiles: Object.fromEntries(x.linkedProfiles.__raw_map__),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.createdAt.getTime(),
                    hasLogout: x.hasLogout,
                    uninitialized: x.uninitialized
                })
            ),
            profiles: profiles.map((x)=>{
                var ref;
                return {
                    identifier: x.identifier.toText(),
                    nickname: x.nickname,
                    localKey: x.localKey,
                    linkedPersona: (ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.toText(),
                    createdAt: x.createdAt.getTime(),
                    updatedAt: x.updatedAt.getTime()
                };
            }),
            relations: relations.map((x)=>({
                    profile: x.profile.toText(),
                    linked: x.linked.toText(),
                    network: x.network,
                    favor: x.favor
                })
            )
        };
    }
};
function wrapWithAssert(env, f) {
    return (...args)=>{
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.assertEnvironment)(env);
        return f(...args);
    };
}
try {
    for(const _key in MaskNetworkAPI){
        const key = _key;
        const f = MaskNetworkAPI[key];
        if (key.startsWith('SNSAdaptor_')) {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.Environment.ContentScript, f);
        } else {
            MaskNetworkAPI[key] = wrapWithAssert(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_10__.Environment.ManifestBackground, f);
        }
    }
} catch  {}


/***/ })

}]);