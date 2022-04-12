(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5938],{

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

/***/ 71858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ mindsShared)
});

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(13591);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNull.js
var isNull = __webpack_require__(32139);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/user.ts

const usernameValidator = (name)=>{
    for (const v of [
        /(minds|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,isNull/* default */.Z)(v.exec(name))) {
            return false;
        }
    }
    return name.length >= 4;
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/shared.ts




const getPostURL = (post)=>{
    return new URL(`https://minds.com/newsfeed/${post.postId}`);
};
const mindsShared = {
    ...base/* mindsBase */.NE,
    utils: {
        getHomePage: ()=>'https://www.minds.com'
        ,
        getProfilePage: ()=>'https://www.minds.com'
        ,
        isValidUsername: usernameValidator,
        textPayloadPostProcessor: undefined,
        getPostURL,
        getShareLinkURL (message) {
            return new URL(`https://www.minds.com/newsfeed/subscriptions?intentUrl=${encodeURIComponent(message)}`);
        },
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            payloadParser: utils/* deconstructPayload */.Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 89753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(60599);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(89887);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx + 7 modules
var StartSetupGuide = __webpack_require__(72048);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(50814);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(49165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(79304);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/selector.ts

const querySelector = (selector, singleMode = true)=>{
    const ls = new umd.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const rootSelector = ()=>querySelector('m-app')
;
const themeListItemSelector = ()=>querySelector('m-usermenu__v3 > div.m-user-menu.m-dropdown > ul > li:nth-child(5) .ng-star-inserted')
;
const composerModalSelector = ()=>querySelector('m-composer__modal')
;
const postEditorInPopupSelector = ()=>querySelector('m-composer__modal m-composer__toolbar > div > *:nth-child(4)', true)
;
const postEditorInTimelineSelector = ()=>querySelector('m-newsfeed m-composer', true)
;
const toolBoxInSideBarSelector = ()=>querySelector('.m-sidebarNavigation__list li:nth-child(7)')
;
const postEditorDraftContentSelector = ()=>{
    return querySelector('m-composer__modal m-composer__textarea textarea.m-composerTextarea__message');
};
const handleSelector = ()=>querySelector('.m-user-menu ul li a:first-child')
;
const selfInfoSelectors = ()=>({
        handle: handleSelector().map((x)=>x.innerText.replace(/@/, '').trim()
        ),
        avatar: querySelector('.m-user-menu .minds-avatar').map((x)=>// get everything between the parens (the url)
            x.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '')
        )
    })
;
const composeButtonSelector = ()=>querySelector([
        '.m-sidebarNavigation__item m-sidebarNavigation__item--compose',
        '.m-sidebarNavigation__item--compose a'
    ].join(), true)
;
const composeTextareaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__textarea textarea').enableSingleMode()
;
const composeDialogIndicatorSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal')
;
const composerModalTextAreaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__textArea .m-composer__textArea textarea').enableSingleMode()
;
const composerPreviewSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__preview img').enableSingleMode()
;
const searchResultHeadingSelector = ()=>querySelector('m-discovery__search')
;
const postContentSelector = ()=>new umd.LiveSelector().querySelectorAll([
        'm-activity__modal m-activity__content .m-activityContent__mediaDescriptionText',
        'm-activity__modal m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__mediaDescriptionText', 
    ].join())
;

// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(717);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(69366);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/postBox.ts

const getEditorContent = ()=>{
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    return editorNode.value;
};
const isCompose = ()=>!!composerModalSelector().evaluate()
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!postEditorDraftContentSelector().evaluate()
;

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteTextToComposition.ts







/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionMinds = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.aborted) throw new Error('Aborted');
        };
        if (!isCompose() && !hasEditor()) {
            // open the composer
            await (0,dom/* untilElementAvailable */.f)(composeButtonSelector());
            composeButtonSelector().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = postEditorDraftContentSelector();
        const textarea = i.evaluate();
        await (0,dom/* untilElementAvailable */.f)(i);
        checkSignal();
        while(!hasFocus(i)){
            textarea === null || textarea === void 0 ? void 0 : textarea.focus();
            checkSignal();
            await (0,esm/* delay */.gw)(interval);
        }
        (0,utils/* selectElementContents */.Ms)(textarea);
        // paste
        (0,sdk/* inputText */.iJ)(text);
        await (0,esm/* delay */.gw)(interval);
        if (!getEditorContent().replace(/\n/g, '').includes(text.replace(/\n/g, ''))) {
            fail(new Error('Unable to paste text automatically'));
        }
    };
    const fail = (e)=>{
        if (opt === null || opt === void 0 ? void 0 : opt.recover) messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text
        });
        throw e;
    };
    worker((0,esm/* abortSignalTimeout */.VJ)(timeout)).then(undefined, (error)=>fail(error)
    );
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/AttachImageToComposition.ts




const hasSucceed = ()=>composerPreviewSelector().evaluate()
;
function pasteImageToCompositionMinds() {
    return async function(url, { recover , relatedTextPayload  }) {
        var ref;
        const image = typeof url === 'string' ? await (0,utils/* downloadUrl */.GR)(url) : url;
        const data = [
            new ClipboardItem({
                [image.type]: image
            })
        ];
        pasteTextToCompositionMinds(relatedTextPayload || '', {
            recover: false
        });
        await navigator.clipboard.write(data);
        (ref = composerModalTextAreaSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.focus();
        document.execCommand('paste');
        if (hasSucceed()) {
            // clear clipboard
            return navigator.clipboard.writeText('');
        } else if (recover) {
            messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageMinds() {
    const path = '/newsfeed/subscriptions';
    if (location.pathname.includes(path)) return;
    location.assign(path);
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoProfilePage.ts
function gotoProfilePageMinds(profile) {
    var ref;
    const path = `/${profile.userId}`;
    (ref = document.querySelector(`[href="${path}"]`)) === null || ref === void 0 ? void 0 : ref.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.assign(path);
    }, 400);
}

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(28331);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/openComposeBox.ts





async function openComposeBoxMinds(content, options) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,esm/* delay */.gw)(800);
    // active the compose dialog
    const composeTextarea = composeTextareaSelector().evaluate();
    const composeButton = composeButtonSelector().evaluate();
    if (composeButton) composeButton.click();
    if (composeTextarea) composeTextarea.focus();
    await (0,esm/* delay */.gw)(800);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = composeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(locales_legacy/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,esm/* delay */.gw)(800);
    messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,base/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(65375);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/getSearchedKeyword.ts
function getSearchedKeywordAtMinds() {
    const params = new URLSearchParams(location.search);
    if (location.pathname === '/discovery/search') {
        var ref;
        return decodeURIComponent((ref = params.get('q')) !== null && ref !== void 0 ? ref : '');
    }
    return '';
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/identity.ts






async function resolveLastRecognizedIdentityInner(ref, cancel) {
    await (0,esm/* waitDocumentReadyState */.uL)('interactive');
    await (0,dom/* untilElementAvailable */.f)(handleSelector());
    const handle = selfInfoSelectors().handle.evaluate();
    const avatar = selfInfoSelectors().avatar.evaluate();
    if (handle) {
        // get handle and avatar from the user menu
        ref.value = {
            identifier: new src/* ProfileIdentifier */.WO(minds_com_base/* mindsBase.networkIdentifier */.NE.networkIdentifier, handle),
            nickname: undefined,
            avatar
        };
        // call the API to get the nickname
        fetch('/api/v1/channel/' + handle, {
            signal: cancel
        }).then((res)=>res.json()
        ).then(({ channel  })=>{
            var ref1;
            ref.value = {
                identifier: new src/* ProfileIdentifier */.WO(minds_com_base/* mindsBase.networkIdentifier */.NE.networkIdentifier, channel.username),
                nickname: channel.name,
                avatar: (ref1 = channel.avatar_url) === null || ref1 === void 0 ? void 0 : ref1.medium
            };
        });
    }
}
const IdentityProviderMinds = {
    hasDeprecatedPlaceholderName: false,
    recognized: social_network/* creator.EmptyIdentityResolveProviderState */.Du.EmptyIdentityResolveProviderState(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.recognized, cancel);
    }
};

// EXTERNAL MODULE: ./src/social-network/utils.ts
var social_network_utils = __webpack_require__(32665);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts + 1 modules
var create_post_context = __webpack_require__(13591);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/shared.ts + 1 modules
var shared = __webpack_require__(71858);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flattenDeep.js
var flattenDeep = __webpack_require__(65648);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/fetch.ts



const parseNameArea = (nameArea)=>{
    const displayNameNode = nameArea.querySelector('strong');
    return {
        name: displayNameNode && (0,esm/* assertNonNull */.Cq)(displayNameNode) ? displayNameNode.innerText : nameArea.innerText,
        handle: nameArea.href.substring(8).split('/')[1]
    };
};
const postIdParser = (node)=>{
    var ref;
    const idNode = node.querySelector('.m-activityOwnerBlock__permalink');
    var ref1;
    return idNode ? (ref1 = (ref = idNode.getAttribute('href')) === null || ref === void 0 ? void 0 : ref.split('/')[2]) !== null && ref1 !== void 0 ? ref1 : undefined : undefined;
};
const postNameParser = (node)=>{
    return parseNameArea((0,esm/* assertNonNull */.Cq)(node.querySelector('.m-activityOwnerBlock__displayName')));
};
const postAvatarParser = (node)=>{
    const avatarElement = node.querySelector('.m-activityOwnerBlock__avatar img');
    return avatarElement ? avatarElement.src : undefined;
};
const postContentMessageParser = (node1)=>{
    function resolve(content) {
        if (content.startsWith('@')) return 'user';
        if (content.startsWith('#')) return 'hash';
        if (content.startsWith('$')) return 'cash';
        return 'normal';
    }
    function make(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            if (!node.nodeValue) return (0,base/* makeTypedMessageEmpty */.WM)();
            return (0,base/* makeTypedMessageText */.P)(node.nodeValue);
        } else if (node instanceof HTMLAnchorElement && !node.className.includes('m-activityContentMedia__link')) {
            const anchor = node;
            var ref;
            const href = (ref = anchor.getAttribute('title')) !== null && ref !== void 0 ? ref : anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,base/* makeTypedMessageEmpty */.WM)();
            return (0,base/* makeTypedMessageAnchor */.Jv)(resolve(content), href !== null && href !== void 0 ? href : '', content);
        } else if (node instanceof HTMLImageElement) {
            const image = node;
            const src = image.getAttribute('src');
            const matched = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (matched === null || matched === void 0 ? void 0 : matched[1]) {
                const codePoints = matched[1].split('-').map((x)=>Number.parseInt(`0x${x}`, 16)
                );
                return (0,base/* makeTypedMessageText */.P)(String.fromCodePoint(...codePoints));
            }
            return (0,base/* makeTypedMessageEmpty */.WM)();
        } else if (node.childNodes.length) {
            const flattened = (0,flattenDeep/* default */.Z)(Array.from(node.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(base/* isTypedMessageText */.Rz)) return (0,base/* makeTypedMessageText */.P)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,base/* makeTypedMessageEmpty */.WM)();
    }
    const content1 = node1.querySelector('m-activity__content');
    return content1 ? Array.from(content1.childNodes).flatMap(make) : [];
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,base/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(23003);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/post.ts













const PostProviderMinds = {
    posts: social_network_utils/* creator.EmptyPostProviderState */.Du.EmptyPostProviderState(),
    start (signal) {
        collectPostsMindsInner(this.posts, signal);
    }
};
function collectPostsMindsInner(store, signal) {
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(postContentSelector()).useForeach((node, key, metadata)=>{
        const activitySelector = new umd.LiveSelector().replace(()=>[
                metadata.realCurrent
            ]
        ).closest('m-activity, m-activity__modal');
        const activityNode = activitySelector.evaluate()[0];
        // ? inject after comments
        const commentsSelector = activitySelector.clone().querySelectorAll('m-comment .m-comment__message');
        // ? inject comment text field
        const commentBoxSelector = activitySelector.clone().querySelectorAll('.m-commentPoster__form').map((x)=>x.parentElement
        );
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* mindsShared.utils.createPostContext */.f.utils.createPostContext({
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            rootElement: metadata,
            suggestedInjectionPoint: node,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const { pid , messages , handle , name , avatar  } = postParser(activityNode);
            if (!pid) return;
            const postBy = handle ? new src/* ProfileIdentifier */.WO(minds_com_base/* mindsBase.networkIdentifier */.NE.networkIdentifier, handle) : src/* ProfileIdentifier.unknown */.WO.unknown;
            info.postID.value = pid;
            if (!info.postBy.value.equals(postBy)) info.postBy.value = postBy;
            info.nickname.value = name;
            info.avatarURL.value = avatar || null;
            if (name) {
                const currentProfile = (0,social_network_adaptor_utils/* getCurrentIdentifier */.T)();
                service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(postBy, {
                    nickname: name,
                    avatarURL: avatar
                });
                if (currentProfile === null || currentProfile === void 0 ? void 0 : currentProfile.linkedPersona) service/* default.Identity.createNewRelation */.ZP.Identity.createNewRelation(postBy, currentProfile.linkedPersona.identifier);
            }
            // decode steganographic image
            // don't add await on this
            const images = (0,dom/* untilElementAvailable */.f)(new umd.LiveSelector([
                activityNode
            ]).querySelectorAll('.m-activityContent__media--image img'), 10000).then(()=>getMetadataImages(activityNode)
            ).then((urls)=>{
                for (const url of urls)info.postMetadataImages.add(url);
                if (urls.length) return (0,base/* makeTypedMessageTupleFromList */.n_)(...urls.map((x)=>(0,base/* makeTypedMessageImage */.as)(x)
                ));
                return (0,base/* makeTypedMessageEmpty */.WM)();
            }).catch(()=>(0,base/* makeTypedMessageEmpty */.WM)()
            );
            info.postMessage.value = (0,base/* makeTypedMessageTuple */.Zw)([
                ...messages,
                (0,base/* makeTypedMessagePromise */.Ng)(images)
            ]);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getMetadataImages(activityNode) {
    const imgNodes = activityNode.querySelectorAll('.m-activityContent__media--image img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = Array.from(imgNodes).map((node)=>node.src
    )// FIXME! there's a CORS issue on the CDN
    .map((src)=>src.replace('cdn.minds.com', 'minds.com')
    )// Use the master version of the image so the dimensions don't change
    .map((src)=>src.replace('xlarge', 'master')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(7744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(11062);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/customization/custom.ts








// TODO: get this from DOM. But currently Minds has a single primary color
const primaryColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    68,
    170,
    255
]));
const primaryColorContrastColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const backgroundColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const currentTheme = new umd.ValueRef('light');
const PaletteModeProviderMinds = {
    current: (0,src/* SubscriptionFromValueRef */.Jf)(currentTheme),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const contrastColor = (0,theme_tools/* getForegroundColor */.aF)(themeListItemSelector().evaluate());
        const backgroundColor = (0,theme_tools/* getBackgroundColor */.dF)(document.body);
        currentTheme.value = contrastColor === 'rgb(255,255,255)' ? 'dark' : 'light';
        if (contrastColor) primaryColorContrastColorRef.value = contrastColor;
        if (backgroundColor) backgroundColorRef.value = currentTheme.value === 'light' ? 'rgb(244, 244 ,245)' : 'rgb(26, 32, 37)';
    }
    const watcher = new umd.MutationObserverWatcher(themeListItemSelector()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
function useThemeMindsVariant(baseTheme) {
    const primaryColor = (0,dist/* useValueRef */.E)(primaryColorRef);
    const primaryContrastColor = (0,dist/* useValueRef */.E)(primaryColorContrastColorRef);
    const backgroundColor = (0,dist/* useValueRef */.E)(backgroundColorRef);
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const MindsTheme = (0,immer_esm/* default */.ZP)(baseTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            theme.palette.primary = {
                light: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,theme_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,theme_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1220,
                xl: 1920
            };
            theme.components = theme.components || {};
            theme.components.MuiButton = {
                defaultProps: {
                    size: 'medium',
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 500,
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        minHeight: 39,
                        paddingLeft: 15,
                        paddingRight: 15,
                        boxShadow: 'none',
                        [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                            '&': {
                                height: '28px !important',
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    sizeLarge: {
                        minHeight: 49,
                        paddingLeft: 30,
                        paddingRight: 30
                    },
                    sizeSmall: {
                        minHeight: 30,
                        paddingLeft: 15,
                        paddingRight: 15
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
        });
        (0,immer_esm/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(MindsTheme);
    }, [
        baseTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}

// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteToCommentBoxMinds.ts




async function pasteToCommentBoxMinds(encryptedComment, current, dom) {
    const fail = ()=>{
        messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    const root = dom || current.rootNode;
    if (!root) return fail();
    const input = root.querySelector('[contenteditable]');
    if (!input) return fail();
    (0,utils/* selectElementContents */.Ms)(input);
    (0,sdk/* pasteText */.M1)(encryptedComment);
    await (0,esm/* delay */.gw)(200);
    if (!root.innerText.includes(encryptedComment)) return fail();
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/CommentBox.tsx



function injectCommentBoxAtMinds() {
    return (0,defaults/* injectCommentBoxDefaultFactory */.SA)(pasteToCommentBoxMinds, (classes)=>({
            inputProps: {
                classes
            }
        })
    , (0,theme_src/* makeStyles */.ZL)()((theme)=>({
            root: {
                fontSize: 16,
                background: 'transparent',
                // FIXME: A weird issue with margins
                width: '96.2%',
                height: 44,
                borderRadius: 2,
                padding: '2px 1em',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#414c57' : '#d3dbe3'}`,
                margin: '0 10px 10px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#43434d',
                fontWeight: 400
            },
            input: {
                '&::placeholder': {
                    color: theme.palette.mode === 'dark' ? '#b8c1c' : '#72727c',
                    opacity: 1,
                    fontWeight: 400
                },
                '&:focus::placeholder': {
                    color: 'transparent'
                }
            }
        })
    ));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 15 modules
var Composition = __webpack_require__(71244);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialog.tsx






function injectPostDialogAtMinds(signal) {
    renderPostDialogTo('popup', composerModalSelector(), signal);
    renderPostDialogTo('timeline', rootSelector(), signal);
}
function renderPostDialogTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        requireClipboardPermission: true,
        type: reason
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(91968);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialogHint.tsx









function injectPostDialogHintAtMinds(signal) {
    renderPostDialogHintTo(postEditorInPopupSelector(), signal, 'popup');
    renderPostDialogHintTo(postEditorInTimelineSelector(), signal, 'timeline');
}
function renderPostDialogHintTo(ls, signal, reason) {
    const watcher = new umd.MutationObserverWatcher(ls, document.querySelector('m-app'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtMinds, {
            reason: reason
        }));
    });
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme, { reason  })=>({
        buttonText: {
            margin: 0
        },
        buttonTransform: {
            ...reason === 'timeline' ? {
                width: '40px',
                transform: 'translateX(160px) translateY(-70px)'
            } : {}
        },
        iconButton: {
            '&:hover': {
                background: 'none'
            }
        }
    })
);
function PostDialogHintAtMinds({ reason  }) {
    const { classes  } = useStyles({
        reason
    });
    const onHintButtonClicked = (0,react.useCallback)(()=>messages/* MaskMessages.events.requestComposition.sendToLocal */.q.events.requestComposition.sendToLocal({
            reason,
            open: true
        })
    , [
        reason
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        size: 17,
        onHintButtonClicked: onHintButtonClicked,
        tooltip: {
            disabled: true
        },
        classes: {
            buttonTransform: classes.buttonTransform,
            iconButton: classes.iconButton
        },
        NotSetupYetPromptProps: {
            classes: {
                buttonText: classes.buttonText
            }
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtMinds(signal);
    injectPostDialogHintAtMinds(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 15 modules
var PostInspector = __webpack_require__(97770);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostInspector.tsx

function injectPostInspectorAtMinds(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)()(current, signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(51682);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostReplacer.tsx

function resolveContentNode(node) {
    return node.closest([
        'm-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity__content .m-activityContent__mediaDescriptionText', 
    ].join());
}
function injectPostReplacerAtMinds(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (!node.current) return;
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(35845);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SearchResultBox.tsx






function injectSearchResultBoxAtMinds(signal) {
    const watcher = new umd.MutationObserverWatcher(searchResultHeadingSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {}));
}

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(37674);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SetupPrompt.tsx







function injectSetupPromptAtMinds(signal) {
    injectSetupPrompt(postEditorInPopupSelector(), signal);
    injectSetupPrompt(postEditorInTimelineSelector(), signal);
}
function injectSetupPrompt(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls, document.querySelector('m-app'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        var ref, ref1;
        const tagsAnchor = (ref = watcher.firstDOMProxy.current) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.querySelector('a:nth-child(4)');
        if (tagsAnchor) {
            tagsAnchor.style.marginRight = '10px';
        }
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(MindsNotSetupYet, {}));
    });
}
const SetupPrompt_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    buttonText: {
        margin: '-2px 0 !important',
        transform: 'translateX(160px) translateY(-70px)'
    },
    content: {
        marginRight: 5
    }
});
const MindsNotSetupYet = ()=>{
    const { classes  } = SetupPrompt_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        classes: {
            buttonText: classes.buttonText,
            content: classes.content
        }
    }));
};

// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx + 1 modules
var ToolboxUnstyled = __webpack_require__(19462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(68435);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(31262);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(46565);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(90171);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/ToolboxHint_UI.tsx



const mindsBreakPoint = 1221 /** px */ ;
const Container = (0,styled/* default */.ZP)('div')`
    height: 45px;
    margin-bottom: 10px;
`;
const Item = (0,styled/* default */.ZP)(ListItemButton/* default */.Z)`
    border-radius: 8px;
    height: 45px;
    padding: 4px 12px 4px 0;
    color: ${({ theme  })=>theme.palette.mode === 'dark' ? '#b8c1ca' : '#72727c'
};
    &:hover {
        background: unset;
        color: rgb(48, 153, 242);
    }
    @media screen and (max-width: ${mindsBreakPoint}px) {
        padding: 12px 0;
        justify-content: center;
    }
`;
const Text = (0,styled/* default */.ZP)(Typography/* default */.Z)`
    font-size: 0.9375rem;
    font-weight: 500;
    color: inherit !important;
    /* Minds font */
    font-family: Roboto, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 44px;
`;
const Icon = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)`
    color: inherit;
    min-width: 48px;
    margin-left: 6px;
    @media screen and (max-width: ${mindsBreakPoint}px) {
        min-width: 0;
    }
`;
function ToolboxHintAtMinds() {
    const mini = (0,useMediaQuery/* default */.Z)(`(max-width: ${mindsBreakPoint}px)`);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxUnstyled/* ToolboxHintUnstyled */.z, {
        mini: mini,
        Container: Container,
        ListItemButton: Item,
        Typography: Text,
        ListItemIcon: Icon
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/ToolboxHint.tsx






function injectToolboxHintAtMinds(signal) {
    const watcher = new umd.MutationObserverWatcher(toolBoxInSideBarSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtMinds, {}));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Components_Text = __webpack_require__(69973);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/customization/render-fragments.tsx




const MindsRenderFragments = {
    AtLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const target = '/' + props.children.slice(1);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: target,
            children: props.children
        }));
    }),
    HashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=%23${encodeURIComponent(text)}`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('hash', text);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        }));
    }),
    CashLink: /*#__PURE__*/ (0,react.memo)(function(props) {
        const text = props.children.slice(1);
        const target = `/discovery/search?q=$${encodeURIComponent(text)}`;
        const { hasMatch , ...events } = (0,Components_Text/* useTagEnhancer */.fR)('cash', text);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            ...events,
            href: target,
            children: props.children,
            onClick: (e)=>{
                e.stopPropagation();
            }
        }));
    }),
    Image: ()=>null
};

// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(97087);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/ui-provider.ts





























const useInjectedDialogClassesOverwriteMinds = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            [smallQuery]: {
                display: 'block !important'
            }
        },
        container: {
            alignItems: 'center'
        },
        paper: {
            width: '600px !important',
            maxWidth: 'none',
            boxShadow: 'none',
            backgroundImage: 'none',
            [smallQuery]: {
                '&': {
                    display: 'block !important',
                    borderRadius: '0 !important'
                }
            }
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            padding: '3px 16px',
            borderBottom: `1px solid ${theme.palette.mode === 'dark' ? '#2f3336' : '#eff3f4'}`,
            '& > h2': {
                display: 'inline-block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            },
            [smallQuery]: {
                display: 'flex',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px 11px !important'
            }
        },
        dialogContent: {
            padding: 16,
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogActions: {
            padding: '6px 16px',
            [smallQuery]: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                maxWidth: 600,
                margin: '0 auto',
                padding: '7px 14px 6px !important'
            }
        },
        dialogBackdropRoot: {
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(110, 118, 125, 0.4)' : 'rgba(0, 0, 0, 0.4)'
        }
    };
});
const mindsUI = {
    ...minds_com_base/* mindsBase */.NE,
    ...shared/* mindsShared */.f,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxMinds
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionMinds,
            // TODO: make a better way to detect
            attachImage: pasteImageToCompositionMinds()
        },
        redirect: {
            newsFeed: gotoNewsFeedPageMinds,
            profilePage: gotoProfilePageMinds
        }
    },
    collecting: {
        identityProvider: IdentityProviderMinds,
        postsProvider: PostProviderMinds,
        getSearchedKeyword: getSearchedKeywordAtMinds
    },
    customization: {
        paletteMode: PaletteModeProviderMinds,
        componentOverwrite: {
            InjectedDialog: {
                classes: useInjectedDialogClassesOverwriteMinds
            },
            RenderFragments: MindsRenderFragments
        },
        useTheme: useThemeMindsVariant
    },
    init (signal) {
        const friends = social_network/* stateCreator.friends */.ZZ.friends();
        const profiles = social_network/* stateCreator.profiles */.ZZ.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* mindsShared.networkIdentifier */.f.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* mindsShared.networkIdentifier */.f.networkIdentifier);
        (0,transformer/* enableFbStyleTextPayloadReplace */.Hk)();
        return {
            friends,
            profiles
        };
    },
    injection: {
        toolbox: injectToolboxHintAtMinds,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtMinds,
        enhancedPostRenderer: injectPostReplacerAtMinds,
        setupPrompt: injectSetupPromptAtMinds,
        searchResult: injectSearchResultBoxAtMinds,
        newPostComposition: {
            start: injectPostBoxComposed,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: true,
                image: true
            }
        },
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)(),
        commentComposition: {
            compositionBox: (0,defaults/* injectPostCommentsDefault */.MF)(),
            commentInspector: injectCommentBoxAtMinds()
        },
        // NOT SUPPORTED YET
        userBadge: undefined
    },
    configuration: {
        steganography: {
            password () {
                // ! Change this might be a breaking change !
                return new src/* ProfileIdentifier */.WO('minds.com', src/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderMinds.recognized.value.identifier) || src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (mindsUI);


/***/ }),

/***/ 60599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "SK": () => (/* reexport safe */ _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66991);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86330);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84334);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97770);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50814);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49165);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89887);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51682);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72048);











/***/ }),

/***/ 86330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(59324);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        root: {
            flex: 1,
            fontSize: 13,
            background: '#3a3b3c',
            width: snsId === base/* MINDS_ID */.fN ? '96%' : '100%',
            height: 34,
            borderRadius: 20,
            padding: '2px 1em',
            boxSizing: 'border-box',
            marginTop: 6,
            color: '#e4e6eb'
        },
        input: {
            '&::placeholder': {
                color: '#b0b3b8',
                opacity: 1
            },
            '&:focus::placeholder': {
                color: '#d0d2d6'
            }
        }
    })
);
function CommentBox(props) {
    const { classes  } = useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            display: 'flex',
            width: '100%'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
            className: classes.root,
            inputProps: {
                className: classes.input,
                'data-testid': 'comment_input'
            },
            placeholder: t('comment_box__placeholder'),
            onKeyDownCapture: (e)=>{
                const node = e.target;
                if (!node.value) return;
                if (e.key === 'Enter') {
                    props.onSubmit(node.value);
                    node.value = '';
                }
            },
            ...props.inputProps
        })
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(65631);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/CommentBox.tsx













const defaultOnPasteToCommentBox = async (encryptedComment, _current, _realCurrent)=>{
    messages/* MaskMessages.events.autoPasteFailed.sendToLocal */.q.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
};
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({}), mountPointCallback) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI({ dom  }) {
        const info = (0,usePostInfo/* usePostInfo */.oQ)();
        const postContent = usePostInfo/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
        const { classes  } = useCustomStyles();
        const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            const decryptedText = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
            const encryptedComment = await service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), decryptedText, content);
            onPasteToCommentBox(encryptedComment, info, dom).catch(console.error);
        }, [
            postContent,
            info,
            dom,
            iv
        ]);
        if (!iv) return null;
        if (!postContent.items.length) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        }));
    });
    return (signal, current)=>{
        var ref;
        if (!((ref = current.comment) === null || ref === void 0 ? void 0 : ref.commentBoxSelector)) return noop/* default */.Z;
        const commentBoxWatcher = new umd.MutationObserverWatcher(current.comment.commentBoxSelector.clone(), document.body).useForeach((node, key, meta)=>{
            try {
                mountPointCallback === null || mountPointCallback === void 0 ? void 0 : mountPointCallback(meta);
            } catch  {}
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destory;
        });
        (0,watcher/* startWatch */.f)(commentBoxWatcher, signal);
        return ()=>commentBoxWatcher.stopWatch()
        ;
    };
};


/***/ }),

/***/ 84334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(70644);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Lock.js
var Lock = __webpack_require__(10111);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostComments.tsx











const useStyle = (0,src/* makeStyles */.ZL)()({
    root: {
        height: 'auto',
        width: 'calc(98% - 10px)',
        padding: '6px'
    },
    label: {
        width: '90%',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        textOverflow: 'clip'
    }
});
function PostCommentDecrypted(props) {
    const chipClasses = (0,src/* useStylesExtends */.Bc)(useStyle(), props.ChipProps || {});
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
            "data-testid": "comment_field",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock/* default */.Z, {}),
            label: props.children,
            color: "secondary",
            ...props.ChipProps,
            classes: chipClasses
        })
    }));
}
function PostComment(props) {
    const { needZip  } = props;
    const comment = (0,dist/* useValueRef */.E)(props.comment);
    const postContent = usePostInfo/* usePostInfoDetails.rawMessagePiped */.H9.rawMessagePiped();
    const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
    const dec = (0,useAsync/* default */.Z)(async ()=>{
        const decryptedText = (0,base/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
        if (!iv || !decryptedText) throw new Error('Decrypt comment failed');
        const result = await service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), decryptedText, comment);
        if (result === null) throw new Error('Decrypt result empty');
        return result;
    }, [
        iv,
        postContent,
        comment
    ]);
    (0,react.useEffect)(()=>void (dec.value && needZip())
    , [
        dec.value,
        needZip
    ]);
    if (dec.value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDecrypted, {
        children: dec.value
    }));
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/Comments.tsx










/**
 * Creat a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {}, additionalPropsToPostComment = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({})) {
    const { needZip  } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault(props) {
        const { classes  } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        }));
    });
    return function injectPostComments(signal, current) {
        var ref;
        const selector = (ref = current.comment) === null || ref === void 0 ? void 0 : ref.commentsSelector;
        if (!selector) return noop/* default */.Z;
        const commentWatcher = new umd.MutationObserverWatcher(selector, document.body).useForeach((commentNode, key, meta)=>{
            const commentRef = new umd.ValueRef((0,utils/* collectNodeText */.aW)(commentNode));
            const needZipF = needZip || (()=>undefined
            );
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDefault, {
                    needZip: needZipF,
                    comment: commentRef
                })
            }));
            return {
                onNodeMutation () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onTargetChanged () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onRemove () {
                    root.destory();
                }
            };
        });
        (0,watcher/* startWatch */.f)(commentWatcher, signal);
        return ()=>commentWatcher.stopWatch()
        ;
    };
}


/***/ })

}]);