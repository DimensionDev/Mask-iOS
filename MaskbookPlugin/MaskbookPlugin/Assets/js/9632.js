<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9632.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9632],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[826],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/826.js

/***/ 13063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThemeProvider_ThemeProvider)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/useTheme/ThemeContext.js
var ThemeContext = __webpack_require__(57109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/useTheme/useTheme.js
var useTheme = __webpack_require__(19214);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/ThemeProvider/nested.js
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ const nested = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/ThemeProvider/ThemeProvider.js






 // To support composition of theme.



function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  return (0,esm_extends/* default */.Z)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = (0,useTheme/* default */.Z)();

  if (false) {}

  const theme = react.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeContext/* default.Provider */.Z.Provider, {
    value: theme,
    children: children
  });
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const ThemeProvider_ThemeProvider = (ThemeProvider);

/***/ }),

/***/ 83849:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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

/***/ 2123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "installCustomObjectFormatter": () => (/* binding */ installCustomObjectFormatter),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "isJSXElement": () => (/* binding */ isJSXElement),
/* harmony export */   "createElementTyped": () => (/* binding */ createElementTyped),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/// <reference path="./global.d.ts" />
/**
 * @see: https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
 */
//#region Internal Symbols
const JSX_Symbol = Symbol.for('JSON ML <=> JSX internal Symbol');
/**
 * Install a Custom Object Formatter
 * @param formatter The formatter
 */
function installCustomObjectFormatter(formatter) {
    try {
        const old = new Set(window.devtoolsFormatters || []);
        old.add(formatter);
        window.devtoolsFormatters = Array.from(old);
    }
    catch (e) {
        console.error('Install custom object formatter failed.', e);
    }
}
//#endregion
//#region Core renderer
const Fragment = 'span';
function isJSXElement(x) {
    return Array.isArray(x) && Reflect.get(x, JSX_Symbol);
}
function createElementTyped(tag, _props, ..._) {
    if (typeof tag === 'function')
        return tag(Object.assign({}, _props, { children: _ }));
    // If object has children, Chrome will not render it normally
    if (tag === 'object')
        _ = [];
    const props = (_props || {});
    if (customElements.has(tag)) {
        const handler = customElements.get(tag);
        if (typeof handler === 'function')
            return handler(props, ..._);
        else {
            const _a = props, { style } = _a, rest = __rest(_a, ["style"]);
            return createElementTyped(handler[0], Object.assign({ style: normalizeStyle(handler[1]) + normalizeStyle(style) }, rest), ..._);
        }
    }
    // Handle themes
    if ('variant' in props && props.variant) {
        const theme = matchMedia(`(prefers-color-scheme: dark)`).matches ? darkTheme : lightTheme;
        const presetStyles = props.variant.map((type) => theme[type]);
        props.style = Object.assign({}, ...presetStyles, props.style);
    }
    // Transform CSS.PropertiesHyphen into string
    if ('style' in props) {
        props.style = normalizeStyle(props.style);
    }
    // Transform onClick
    if ('onClick' in props) {
        installCustomObjectFormatter(new onClickHandler());
        const { onClick } = props, nextProps = __rest(props, ["onClick"]);
        const specObject = onClickHandler.make(createElementTyped(tag, nextProps, ..._), onClick);
        return createElementTyped(tag, null, createElementTyped('object', { object: specObject }));
    }
    const children = [];
    for (const child of _) {
        // If child is null, omit it.
        if (child === null)
            continue;
        // Add primitive values and JSX.Element as a child
        if (isRenderableJSONML(child)) {
            children.push(child);
            continue;
        }
        // If child is an Array, and every of its child is JSX.Element
        // though it as pattern like {arr.map(x => <div />)}
        if (Array.isArray(child)) {
            if (child.every((x) => isRenderableJSONML(x))) {
                children.push(...child);
                continue;
            }
        }
        // Else, display non-primitive values as devtools raw formatter
        children.push(['object', { object: child }]);
    }
    // <object> cannot have children, or it will not render normally.
    if (children.length === 0 && tag !== 'object')
        children.push('');
    // @ts-ignore
    if (tag === 'object' && props.object === undefined) {
        return createElementTyped('span', { variant: ['propertyPreviewName'] }, 'undefined');
    }
    return makeArrayToJSXElement([tag, props, ...children]);
}
const createElement = createElementTyped;
//#endregion
//#region Non-standard elements and attributes
/**
 * Handler for onClick event
 */
const clickable = new WeakMap();
class onClickHandler {
    constructor() {
        if (onClickHandler.instance)
            return onClickHandler.instance;
        onClickHandler.instance = this;
    }
    static make(jsx, onClick) {
        const self = {};
        clickable.set(self, () => [jsx, onClick, self]);
        return self;
    }
    hasBody(obj) {
        return clickable.has(obj);
    }
    body(obj, config) {
        const [jsx, f, ref] = clickable.get(obj)();
        f();
        return createElementTyped('div', {}, createElementTyped('object', { object: ref }));
    }
    header(obj) {
        if (this.hasBody(obj)) {
            const [jsx] = clickable.get(obj)();
            return jsx;
        }
        return null;
    }
}
//#endregion
//#region Helper
function makeArrayToJSXElement(x) {
    Reflect.set(x, JSX_Symbol, true);
    return x;
}
function isRenderableJSONML(x) {
    if (isJSXElement(x))
        return true;
    // We will ignore the `null` value
    if (x === null)
        return true;
    if (typeof x === 'object')
        return false;
    return true;
}
function normalizeStyle(style) {
    if (style === undefined)
        return '';
    if (typeof style === 'string')
        return style + ';';
    return (Object.keys(style)
        .map((k) => 
    // Transform propertyName to property-name
    k.replace(/([a-z][A-Z])/g, function (g) {
        return g[0] + '-' + g[1].toLowerCase();
    }) +
        ': ' +
        style[k])
        .join(';') + ';');
}
//#endregion
//#region Keep states
const objectMap = new WeakMap();
function useState(bindingObject, initialState) {
    if (typeof bindingObject !== 'object' || bindingObject === null) {
        throw new Error('Can not bind state to a non-object');
    }
    let state;
    if (objectMap.has(bindingObject))
        state = objectMap.get(bindingObject);
    else
        state = initialState ? initialState(bindingObject) : {};
    objectMap.set(bindingObject, state);
    return [
        state,
        function setState(nextState) {
            state = Object.assign(state, nextState);
            objectMap.set(bindingObject, state);
        },
        function forceRender() {
            console.clear();
            console.log(bindingObject);
        },
    ];
}
//#endregion
//#region Common CSS
const codeBlock = { fontStyle: 'italic', fontFamily: 'monospace' };
const dimmed = { opacity: 0.6 };
const darkTheme = {
    propertyPreviewName: { color: 'rgb(169, 169, 169)' },
    functionPrefix: { color: 'rgb(85, 106, 242)' },
    propertyName: { color: 'rgb(227, 110, 236)' },
    null: { color: 'rgb(127, 127, 127)' },
    bigint: { color: 'rgb(158, 255, 158)' },
    number: { color: 'hsl(252, 100%, 75%)' },
    string: { color: 'rgb(233, 63, 59)', whiteSpace: 'pre', 'unicode-bidi': '-webkit-isolate' },
    quote: { color: 'rgb(213, 213, 213)' },
    node: { color: 'rgb(189, 198, 207)' },
    fade: dimmed,
    code: codeBlock,
};
const lightTheme = {
    propertyPreviewName: { color: '#565656' },
    functionPrefix: { color: 'rgb(13, 34, 170)' },
    propertyName: { color: 'rgb(136, 19, 145)' },
    null: { color: 'rgb(128, 128, 128)' },
    bigint: { color: 'rgb(0, 93, 0)' },
    number: { color: 'rgb(28, 0, 207)' },
    string: { color: 'rgb(196, 26, 22)', whiteSpace: 'pre', 'unicode-bidi': '-webkit-isolate' },
    quote: { color: '#222' },
    node: { color: 'rgb(48, 57, 66)' },
    fade: dimmed,
    code: codeBlock,
};
//#endregion
//#region custom elements
const customElements = new Map();
customElements.set('code', ['span', codeBlock]);
customElements.set('br', ['div', { display: 'block', marginTop: '0.5em' }]);
customElements.set('img', (_props = {}, ...children) => {
    const { height = 'initial', src, width = 'initial', style } = _props, props = __rest(_props, ["height", "src", "width", "style"]);
    try {
        const url = new URL(src, location.href);
        return createElement('span', Object.assign({ style: Object.assign({ content: `url("${url.toJSON()}")`, width: typeof width === 'number' ? width + 'px' : width, height: typeof height === 'number' ? height + 'px' : height }, (style || {})) }, props));
    }
    catch (e) {
        console.error(e, src);
        return createElement('span', {}, e && e.message);
    }
});
//#endregion
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 96844:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_side_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36712);
/* harmony import */ var _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66451);
/// <reference path="./ShapeDetectionSpec.d.ts" />



let worker;
_utils_side_effects__WEBPACK_IMPORTED_MODULE_1__/* .sideEffect.then */ .jw.then(()=>{
    worker = new _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_2__/* .OnDemandWorker */ .G(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(6948), __webpack_require__.b), {
        name: 'ShapeDetection'
    });
});
class BarcodeDetectorPolyfill {
    async detect(mediaSource) {
        const canvasImageWidth = mediaSource.videoWidth;
        const canvasImageHeight = mediaSource.videoHeight;
        if (!canvasImageWidth || !canvasImageHeight) return [];
        const canvas = document.createElement('canvas');
        const resizedWidth = Math.min(canvasImageWidth, 500);
        const resizedHeight = Math.floor(resizedWidth * canvasImageHeight / canvasImageWidth);
        [canvas.width, canvas.height] = [
            resizedWidth,
            resizedHeight
        ];
        const ctx = canvas.getContext('2d');
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isNull)(ctx)) throw new Error('Canvas was not supported');
        ctx.drawImage(mediaSource, 0, 0, canvasImageWidth, canvasImageHeight, 0, 0, canvas.width, canvas.height);
        const d = ctx.getImageData(0, 0, canvas.width, canvas.height);
        return new Promise((resolve)=>{
            worker.postMessage([
                d.data,
                canvas.width,
                canvas.height
            ]);
            worker.addEventListener('message', (ev)=>{
                if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isNull)(ev.data)) {
                    resolve([]);
                    return;
                }
                const result = new DetectedBarcodePolyfill();
                result.rawValue = ev.data.data;
                resolve([
                    result
                ]);
            }, {
                once: true
            });
            worker.addEventListener('error', ()=>resolve([])
            );
        });
    }
}
class DetectedBarcodePolyfill {
    get boundingBox() {
        throw new Error('Not implemented');
    }
    constructor(){
        this.cornerPoints = [];
        this.format = 'qr_code';
    }
}
Object.assign(globalThis, {
    BarcodeDetector: BarcodeDetectorPolyfill,
    DetectedBarcode: DetectedBarcodePolyfill
});


/***/ }),

/***/ 29573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ob": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ECKeyIdentifier),
/* harmony export */   "xI": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.GroupIdentifier),
/* harmony export */   "xb": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.Identifier),
/* harmony export */   "bb": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.PostIVIdentifier),
/* harmony export */   "_P": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.PostIdentifier),
/* harmony export */   "WO": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier),
/* harmony export */   "CH": () => (/* binding */ ECKeyIdentifierFromJsonWebKey)
/* harmony export */ });
/* unused harmony export ECKeyIdentifierFromCryptoKey */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _utils_type_transform_CryptoKey_JsonWebKey__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24784);
/* harmony import */ var _utils_type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58222);




function ECKeyIdentifierFromJsonWebKey(key, type = 'public') {
    const x = (0,_utils_type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_2__/* .compressSecp256k1Key */ .N)(key, type);
    return new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ECKeyIdentifier('secp256k1', x);
}
/**
 * @deprecated We're using JWK instead of CryptoKey
 */ async function ECKeyIdentifierFromCryptoKey(key) {
    return ECKeyIdentifierFromJsonWebKey(await CryptoKeyToJsonWebKey(key));
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

/***/ 31020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork)
/* harmony export */ });
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14840);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54061);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95415);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66751);




function getCurrentSNSNetwork(current) {
    const table = {
        [_twitter_com_base__WEBPACK_IMPORTED_MODULE_0__/* .twitterBase.networkIdentifier */ .oQ.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Twitter */ .mv.Twitter,
        [_facebook_com_base__WEBPACK_IMPORTED_MODULE_1__/* .facebookBase.networkIdentifier */ .q.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Facebook */ .mv.Facebook,
        [_instagram_com_base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase.networkIdentifier */ .j.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Instagram */ .mv.Instagram
    };
    if (current in table) return table[current];
    return _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Unknown */ .mv.Unknown;
}


/***/ }),

/***/ 13206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "Ps": () => (/* binding */ activateSocialNetworkUI),
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "zq": () => (/* binding */ definedSocialNetworkWorkers),
/* harmony export */   "tr": () => (/* binding */ defineSocialNetworkWorker)
/* harmony export */ });
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 97889)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
    ).then(()=>true
    );
}
function defineSocialNetworkUI(UI) {
    if (UI.notReadyForProduction) {
        if (true) return UI;
    }
    definedSocialNetworkUIsLocal.set(UI.networkIdentifier, UI);
    return UI;
}
const definedSocialNetworkWorkers = new Set();
function defineSocialNetworkWorker(worker) {
    if (worker.notReadyForProduction) {
        if (true) return;
    }
    definedSocialNetworkWorkers.add(worker);
}


/***/ }),

/***/ 50623:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);



// Run this file multiple times should be safe
if (false) {}
//#region BigNumber to Number
Object.defineProperty((bignumber_js__WEBPACK_IMPORTED_MODULE_0___default().prototype), '__debug__amount__', {
    get () {
        return this.toNumber();
    },
    configurable: true
});
//#endregion
//#region Useful global variables
Object.assign(globalThis, _masknet_shared__WEBPACK_IMPORTED_MODULE_1__);
Object.assign(globalThis, _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
Object.assign(globalThis, {
    BigNumber: (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())
}) //#endregion
;


/***/ }),

/***/ 25665:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50623);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66449);




/***/ }),

/***/ 66449:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/debugger.tsx


// @ts-ignore
const React = __webpack_require__(2123);
class TypedMessageFormatter {
    isTypedMessage(obj) {
        if (typeof obj !== 'object' || obj === null) return false;
        if (!('version' in obj)) return false;
        if (!('meta' in obj)) return false;
        if (!('type' in obj)) return false;
        return true;
    }
    hasBody(obj) {
        if (!this.isTypedMessage(obj)) return false;
        if (obj.type === 'empty') return false;
        return true;
    }
    compound(obj) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                maxWidth: '95vw',
                overflow: 'break-word'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ol", {
                children: obj.items.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: display(x)
                    })
                )
            })
        }));
    }
    fields(obj) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("table", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                    style: {
                        background: 'rgba(255, 255, 255, 0.6)'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                            style: {
                                minWidth: '4em'
                            },
                            children: "Field"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                            children: "Value"
                        })
                    ]
                }),
                Object.keys(obj).filter((x)=>x !== 'type' && x !== 'meta' && x !== 'version'
                ).map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("td", {
                                children: x
                            }),
                            display(obj[x])
                        ]
                    })
                )
            ]
        }));
    }
    text(obj) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("code", {
            style: {
                paddingLeft: '2em',
                opacity: 0.8
            },
            children: obj.content
        }));
    }
    image(obj) {
        if (typeof obj.image === 'string') return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: obj.image,
            height: (obj.height || 600) / 10,
            width: (obj.width || 400) / 10
        }));
        return this.fields(obj);
    }
    body(obj) {
        if ((0,src.isTypedMessageTuple)(obj)) return this.compound(obj);
        if ((0,src.isTypedMessageText)(obj)) return this.text(obj);
        if ((0,src.isTypedMessageImage)(obj)) return this.image(obj);
        return this.fields(obj);
    }
    header(obj) {
        var ref;
        if (!this.isTypedMessage(obj)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            children: [
                "TypedMessage(",
                obj.type,
                ") ",
                (((ref = obj.meta) === null || ref === void 0 ? void 0 : ref.size) || 0) > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        "(with meta ",
                        display(obj.meta),
                        ")"
                    ]
                }) : ''
            ]
        }));
    }
}
function enhanceTypedMessageDebugger() {
    React.installCustomObjectFormatter(new TypedMessageFormatter());
}
function display(obj) {
    switch(typeof obj){
        case 'string':
            return obj;
        default:
            // @ts-ignore
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("object", {
                object: obj
            }));
    }
}

;// CONCATENATED MODULE: ./src/utils/debug/ui.ts


if (typeof window === 'object') {
    umd.LiveSelector.enhanceDebugger();
    umd.Watcher.enhanceDebugger();
    umd.DOMProxy.enhanceDebugger();
    enhanceTypedMessageDebugger();
}


/***/ }),

/***/ 36783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export isIdentifierArrayEquals */
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);

function isIdentifierArrayEquals(a, b, isOrderImportant = false) {
    if (a === b) return true;
    if (a === undefined) return false;
    if (b === undefined) return false;
    if (a.length !== b.length) return false;
    const ax = Identifier.IdentifiersToString(a, isOrderImportant);
    const bx = Identifier.IdentifiersToString(b, isOrderImportant);
    return ax === bx;
}


/***/ }),

/***/ 29722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getTextUILength),
/* harmony export */   "L": () => (/* binding */ sliceTextByUILength)
/* harmony export */ });
function getTextUILength(text) {
    return Array.from(text).reduce((acc, char)=>acc + getCharUILength(char)
    , 0);
}
function sliceTextByUILength(text, len) {
    const arr = Array.from(text);
    let currentText = '';
    for(let i = 0, currentLen = 0; currentLen < len && arr[i]; currentLen += getCharUILength(arr[i]), i += 1){
        currentText += arr[i];
    }
    return currentText;
}
/**
 * Suitable for usual font styles
 * The UI width of 1 Emoji is about equal to 1 Chinese = 1 Japanese = 1.5 uppercase English = 2.5 lowercase English
 * getTextUILength('💊 良い好a ') === 11
 * Todo: extend this function to support strange typeface if needed
 */ function getCharUILength(char) {
    return char.charCodeAt(0) < 256 ? char === char.toLowerCase() ? 1 : 1.5 : 2.5;
}


/***/ }),

/***/ 8672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 73493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useSettingsSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83071);





function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useValueRef)(settings);
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    }));
}


/***/ }),

/***/ 59450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27533);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10026);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93002);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71299);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95142);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57462);







_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .default.use */ .Z.use(react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .initReactI18next */ .Db);
/**
 * Enhanced version of useTranslation
 * @param opt Options
 */ function useI18N(opt) {
    if (false) {}
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$)('mask', opt);
}
function useLanguage() {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .$)();
    const lang = i18n.language;
    if (lang in _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages */ .iu) return lang;
    return _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
}
_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .languageSettings.addListener */ .pQ.addListener((next)=>{
    if (next === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) {
        const result = _i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .default.services.languageDetector.detect */ .Z.services.languageDetector.detect();
        for (const lng of result){
            if (lng in _locales__WEBPACK_IMPORTED_MODULE_4__/* .languages */ .Mj) return void _i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .default.changeLanguage */ .Z.changeLanguage(lng);
        }
        _i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .default.changeLanguage */ .Z.changeLanguage(_masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.enUS */ .P7.enUS);
    } else {
        _i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .default.changeLanguage */ .Z.changeLanguage(next);
    }
});


/***/ }),

/***/ 38266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getDimension)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4023);
/* eslint-disable no-bitwise */ 
function getDimension(buf) {
    const fallback = {
        width: 0,
        height: 0
    };
    switch((0,_dimensiondev_stego_js_cjs_helper__WEBPACK_IMPORTED_MODULE_0__.imgType)(new Uint8Array(buf))){
        case 'image/jpeg':
            var ref;
            return (ref = getDimensionAsJPEG(buf)) !== null && ref !== void 0 ? ref : fallback;
        case 'image/png':
            return getDimensionAsPNG(buf);
        default:
            return fallback;
    }
}
function getDimensionAsPNG(buf) {
    const dataView = new DataView(buf, 0, 28);
    return {
        width: dataView.getInt32(16),
        height: dataView.getInt32(20)
    };
}
/**
 * Get dimension of a JPEG image
 *
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */ function getDimensionAsJPEG(buf) {
    const dataView = new DataView(buf);
    let i = 0;
    if (dataView.getUint8(i) === 255 && dataView.getUint8(i + 1) === 216 && dataView.getUint8(i + 2) === 255 && dataView.getUint8(i + 3) === 224 // APP0 marker
    ) {
        i += 4;
        if (dataView.getUint8(i + 2) === 'J'.charCodeAt(0) && dataView.getUint8(i + 3) === 'F'.charCodeAt(0) && dataView.getUint8(i + 4) === 'I'.charCodeAt(0) && dataView.getUint8(i + 5) === 'F'.charCodeAt(0) && dataView.getUint8(i + 6) === 0) {
            let block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
            while(i < dataView.byteLength){
                i += block_length;
                if (i >= dataView.byteLength) return;
                if (dataView.getUint8(i) !== 255) return;
                if (dataView.getUint8(i + 1) === 192 || dataView.getUint8(i + 1) === 194 // SOF2 marker
                ) {
                    return {
                        height: dataView.getUint8(i + 5) * 256 + dataView.getUint8(i + 6),
                        width: dataView.getUint8(i + 7) * 256 + dataView.getUint8(i + 8)
                    };
                } else {
                    i += 2;
                    block_length = dataView.getUint8(i) * 256 + dataView.getUint8(i + 1);
                }
            }
        }
    }
    return;
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/9632.js
/***/ 16994:
=======
/***/ 3270:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/826.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.0/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(62942);
;// CONCATENATED MODULE: ./src/utils/native-rpc/iOS.channel.ts
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {
                }
            }
        });
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var src = __webpack_require__(95142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(28532);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(13206);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(2905);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/utils/native-rpc/Web.ts











const stringToPersonaIdentifier = (str)=>shared_base_src/* Identifier.fromString */.xb.fromString(str, shared_base_src/* ECKeyIdentifier */.ob).unwrap()
;
const stringToProfileIdentifier = (str)=>shared_base_src/* Identifier.fromString */.xb.fromString(str, shared_base_src/* ProfileIdentifier */.WO).unwrap()
;
const personaFormatter = (p)=>{
    const profiles = {
    };
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
const MaskNetworkAPI = {
    web_echo: async (arg)=>arg.echo
    ,
    getDashboardURL: async ()=>browser.runtime.getURL('/index.html')
    ,
    getConnectedPersonas: async ()=>{
        const personas = await service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas();
        const connectedPersonas = personas.filter((p)=>!p.uninitialized
        ).map((p)=>{
            const profiles = [
                ...p.linkedProfiles
            ];
            const providers = [
                ...social_network_define/* definedSocialNetworkWorkers */.zq
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
        return json_stable_stringify_default()(connectedPersonas);
    },
    app_isPluginEnabled: ({ pluginID  })=>service/* default.Settings.isPluginEnabled */.ZP.Settings.isPluginEnabled(pluginID)
    ,
    app_setPluginStatus: ({ pluginID , enabled  })=>service/* default.Settings.setPluginStatus */.ZP.Settings.setPluginStatus(pluginID, enabled)
    ,
    setting_getNetworkTraderProvider: ({ network  })=>{
        switch(network){
            case src/* NetworkType.Ethereum */.td.Ethereum:
                return service/* default.Settings.getEthereumNetworkTradeProvider */.ZP.Settings.getEthereumNetworkTradeProvider();
            case src/* NetworkType.Binance */.td.Binance:
                return service/* default.Settings.getBinanceNetworkTradeProvider */.ZP.Settings.getBinanceNetworkTradeProvider();
            case src/* NetworkType.Polygon */.td.Polygon:
                return service/* default.Settings.getPolygonNetworkTradeProvider */.ZP.Settings.getPolygonNetworkTradeProvider();
            case src/* NetworkType.Arbitrum */.td.Arbitrum:
                return service/* default.Settings.getArbitrumNetworkTradeProvider */.ZP.Settings.getArbitrumNetworkTradeProvider();
            case src/* NetworkType.xDai */.td.xDai:
                return service/* default.Settings.getxDaiNetworkTradeProvider */.ZP.Settings.getxDaiNetworkTradeProvider();
            default:
                (0,esm/* unreachable */.t1)(network);
        }
    },
    setting_setNetworkTraderProvider: ({ network , provider  })=>{
        switch(network){
            case src/* NetworkType.Ethereum */.td.Ethereum:
                return service/* default.Settings.setEthNetworkTradeProvider */.ZP.Settings.setEthNetworkTradeProvider(provider);
            case src/* NetworkType.Binance */.td.Binance:
                return service/* default.Settings.setBinanceNetworkTradeProvider */.ZP.Settings.setBinanceNetworkTradeProvider(provider);
            case src/* NetworkType.Polygon */.td.Polygon:
                return service/* default.Settings.setPolygonNetworkTradeProvider */.ZP.Settings.setPolygonNetworkTradeProvider(provider);
            case src/* NetworkType.Arbitrum */.td.Arbitrum:
                return service/* default.Settings.setArbitrumNetworkTradeProvider */.ZP.Settings.setArbitrumNetworkTradeProvider(provider);
            case src/* NetworkType.xDai */.td.xDai:
                return service/* default.Settings.setxDaiNetworkTradeProvider */.ZP.Settings.setxDaiNetworkTradeProvider(provider);
            default:
                (0,esm/* unreachable */.t1)(network);
        }
    },
    settings_getTrendingDataSource: ()=>service/* default.Settings.getTrendingDataSource */.ZP.Settings.getTrendingDataSource()
    ,
    settings_setTrendingDataSource: ({ provider  })=>service/* default.Settings.setTrendingDataSource */.ZP.Settings.setTrendingDataSource(provider)
    ,
    settings_getLaunchPageSettings: async ()=>settings/* launchPageSettings.value */.i4.value
    ,
    settings_getTheme: ()=>service/* default.Settings.getTheme */.ZP.Settings.getTheme()
    ,
    settings_setTheme: ({ theme  })=>service/* default.Settings.setTheme */.ZP.Settings.setTheme(theme)
    ,
    settings_getLanguage: ()=>service/* default.Settings.getLanguage */.ZP.Settings.getLanguage()
    ,
    settings_setLanguage: ({ language  })=>service/* default.Settings.setLanguage */.ZP.Settings.setLanguage(language)
    ,
    settings_createBackupJson: (options)=>service/* default.Welcome.generateBackupJSON */.ZP.Welcome.generateBackupJSON(options)
    ,
    settings_getBackupPreviewInfo: async ({ backupInfo  })=>{
        const data = service/* default.Welcome.parseBackupStr */.ZP.Welcome.parseBackupStr(backupInfo);
        return data === null || data === void 0 ? void 0 : data.info;
    },
    settings_restoreBackup: ({ backupInfo  })=>{
        try {
            const json = JSON.parse(backupInfo);
            return service/* default.Welcome.restoreBackup */.ZP.Welcome.restoreBackup(json);
        } catch (error) {
            throw new Error('invalid json');
        }
    },
    persona_createPersonaByMnemonic: async ({ mnemonic , nickname , password  })=>{
        const x = await service/* default.Identity.restoreFromMnemonicWords */.ZP.Identity.restoreFromMnemonicWords(mnemonic, nickname, password);
        return personaFormatter(x);
    },
    persona_queryPersonas: async ({ identifier , hasPrivateKey  })=>{
        const id = identifier ? stringToPersonaIdentifier(identifier) : undefined;
        const result = await service/* default.Identity.queryPersonas */.ZP.Identity.queryPersonas(id, hasPrivateKey);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_queryMyPersonas: async ({ network  })=>{
        const result = await service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas(network);
        return result === null || result === void 0 ? void 0 : result.map(personaFormatter);
    },
    persona_updatePersonaInfo: ({ identifier , data  })=>{
        const { nickname  } = data;
        return service/* default.Identity.renamePersona */.ZP.Identity.renamePersona(stringToPersonaIdentifier(identifier), nickname);
    },
    persona_removePersona: ({ identifier  })=>service/* default.Identity.deletePersona */.ZP.Identity.deletePersona(stringToPersonaIdentifier(identifier), 'delete even with private')
    ,
    persona_restoreFromJson: async ({ backup  })=>{
        const result = await service/* default.Identity.restoreFromBackup */.ZP.Identity.restoreFromBackup(backup);
        if (!result) throw new Error('invalid json');
    },
    persona_restoreFromBase64: async ({ backup  })=>{
        const result = await service/* default.Identity.restoreFromBase64 */.ZP.Identity.restoreFromBase64(backup);
        if (!result) throw new Error('invalid base64');
    },
    persona_connectProfile: async ({ profileIdentifier , personaIdentifier  })=>{
        const profileId = stringToProfileIdentifier(profileIdentifier);
        const identifier = stringToPersonaIdentifier(personaIdentifier);
        await service/* default.Identity.attachProfile */.ZP.Identity.attachProfile(profileId, identifier, {
            connectionConfirmState: 'confirmed'
        });
        const persona = await service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(identifier);
        if (!persona.hasPrivateKey) throw new Error('invalid persona');
        await service/* default.Identity.setupPersona */.ZP.Identity.setupPersona(persona.identifier);
    },
    persona_disconnectProfile: async ({ identifier  })=>{
        await service/* default.Identity.detachProfile */.ZP.Identity.detachProfile(stringToProfileIdentifier(identifier));
    },
    persona_backupMnemonic: async ({ identifier  })=>{
        var ref;
        const persona = await service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return (ref = persona.mnemonic) === null || ref === void 0 ? void 0 : ref.words;
    },
    persona_backupJson: async ({ identifier  })=>{
        const persona = await service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(stringToPersonaIdentifier(identifier));
        return service/* default.Welcome.generateBackupJSON */.ZP.Welcome.generateBackupJSON({
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
    persona_backupBase64: async ({ identifier  })=>{
        const file = await MaskNetworkAPI.persona_backupJson({
            identifier
        });
        return (0,esm/* encodeArrayBuffer */.ll)((0,esm/* encodeText */.YT)(JSON.stringify(file)));
    },
    persona_backupPrivateKey: async ({ identifier  })=>{
        const privateKey = await service/* default.Identity.backupPersonaPrivateKey */.ZP.Identity.backupPersonaPrivateKey(stringToPersonaIdentifier(identifier));
        if (privateKey) {
            return JSON.stringify(privateKey);
        }
        return privateKey;
    },
    profile_queryProfiles: async ({ network  })=>{
        const result = await service/* default.Identity.queryProfiles */.ZP.Identity.queryProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_queryMyProfiles: async ({ network  })=>{
        const result = await service/* default.Identity.queryMyProfiles */.ZP.Identity.queryMyProfiles(network);
        return result === null || result === void 0 ? void 0 : result.map(profileFormatter);
    },
    profile_updateProfileInfo: async ({ identifier , data  })=>{
        await service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(stringToProfileIdentifier(identifier), data);
    },
    profile_removeProfile: async ({ identifier  })=>{
        await service/* default.Identity.removeProfile */.ZP.Identity.removeProfile(stringToProfileIdentifier(identifier));
    },
    wallet_updateEthereumAccount: async ({ account  })=>{
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            account
        });
        Wallet_src/* WalletMessages.events.walletsUpdated.sendToAll */.R$.events.walletsUpdated.sendToAll();
    },
    wallet_updateEthereumChainId: async ({ chainId  })=>{
        await messages/* WalletRPC.updateAccount */.V.updateAccount({
            chainId,
            providerType: web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook
        });
    },
    async SNSAdaptor_getCurrentDetectedProfile () {
        var ref;
        const { activatedSocialNetworkUI  } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 45513));
        return (ref = activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.lastRecognized.value.identifier.toText();
    }
};
function wrapWithAssert(env, f) {
    return (...args)=>{
        (0,umd.assertEnvironment)(env);
        return f(...args);
    };
}
try {
    for(const _key in MaskNetworkAPI){
        const key = _key;
        const f = MaskNetworkAPI[key];
        if (key.startsWith('SNSAdaptor_')) {
            MaskNetworkAPI[key] = wrapWithAssert(umd.Environment.ContentScript, f);
        } else {
            MaskNetworkAPI[key] = wrapWithAssert(umd.Environment.ManifestBackground, f);
        }
    }
} catch  {
}

;// CONCATENATED MODULE: ./src/utils/native-rpc/index.ts




// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = undefined;
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(MaskNetworkAPI, {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 60335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export requestNotification */
/* harmony import */ var _extension_options_page_Welcome_getWelcomePageURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43776);

async function requestNotification(props) {
    const { title , icon , body , onClick  } = props;
    const granted = await browser.permissions.request({
        permissions: [
            'notifications'
        ]
    });
    if (!granted) return false;
    const notification = new Notification(title || 'Mask', {
        icon: icon || '128x128.png',
        body
    });
    notification.addEventListener('click', onClick || openWelcomePage);
    return true;
}
function openWelcomePage() {
    browser.tabs.create({
        url: getWelcomePageURL()
    });
}


/***/ }),

/***/ 50656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ extraPermissions),
/* harmony export */   "b": () => (/* binding */ requestPermissions)
/* harmony export */ });
async function extraPermissions(origins) {
    if (!origins) return [];
    const currentOrigins = (await browser.permissions.getAll()).origins || [];
    const extra = origins.filter((i)=>{
        return !(currentOrigins === null || currentOrigins === void 0 ? void 0 : currentOrigins.includes(i));
    });
    return extra.length ? extra : [];
}
function requestPermissions(origins) {
    return browser.permissions.request({
        origins: origins !== null && origins !== void 0 ? origins : []
    });
}


/***/ }),

/***/ 78646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ MaskInShadow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71629);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45513);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73186);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44713);






function MaskInShadow(props) {
    const useTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.customization.useTheme).current;
    const theme = (useTheme === null || useTheme === void 0 ? void 0 : useTheme()) || (0,_theme__WEBPACK_IMPORTED_MODULE_4__/* .getMaskbookTheme */ .hz)();
    return (0,_UIRoot__WEBPACK_IMPORTED_MODULE_3__/* .MaskUIRootWithinShadow */ .b)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: props.children
        })
    }));
}


/***/ }),

/***/ 92622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts

const cache = new Map();
/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    url = url.toString();
    if (!cache.has(url)) throw toBlob(url);
    return cache.get(url);
}
async function toBlob(url) {
    const blobURL = URL.createObjectURL(await service/* default.Helper.fetch */.ZP.Helper.fetch(url));
    cache.set(url, blobURL);
    return blobURL;
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 70020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ UpgradeBackupJSONFile),
  "V": () => (/* binding */ getBackupPreviewInfo)
});

;// CONCATENATED MODULE: ./src/utils/type-transform/BackupFormat/JSON/version-1.ts
function isBackupJSONFileVersion1(obj) {
    const data = obj;
    if (data.version !== 1) return false;
    if (!Array.isArray(data.whoami)) return false;
    if (!data.whoami) return false;
    return true;
}
// Since 8/21/2019, every backup file of version 1 should have grantedHostPermissions
// Before 8/21/2019, we only support facebook, so we can auto upgrade the backup file
const facebookHost = [
    'https://m.facebook.com/*',
    'https://www.facebook.com/*'
];
function patchNonBreakingUpgradeForBackupJSONFileVersion1(json) {
    if (json.grantedHostPermissions === undefined) {
        json.grantedHostPermissions = facebookHost;
        json.maskbookVersion = '1.5.2';
    }
    if (!json.maskbookVersion) json.maskbookVersion = '1.6.0';
    return json;
}
function upgradeFromBackupJSONFileVersion0(json, identity) {
    return {
        maskbookVersion: '1.3.2',
        version: 1,
        whoami: [
            {
                localKey: json.local,
                network: 'facebook.com',
                publicKey: json.key.key.publicKey,
                privateKey: json.key.key.privateKey,
                userId: identity.userId || '$self'
            }, 
        ],
        grantedHostPermissions: facebookHost
    };
}

;// CONCATENATED MODULE: ./src/utils/type-transform/BackupFormat/JSON/version-0.ts
// eslint-disable-next-line import/no-deprecated
function isBackupJSONFileVersion0(obj) {
    // eslint-disable-next-line import/no-deprecated
    const data = obj;
    if (!data.local || !data.key || !data.key.key || !data.key.key.privateKey || !data.key.key.publicKey) return false;
    return true;
}

// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/version-2.ts
var version_2 = __webpack_require__(28563);
// EXTERNAL MODULE: ./src/plugins/FileService/constants.ts
var constants = __webpack_require__(74010);
;// CONCATENATED MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
/* eslint-disable import/no-deprecated */ 



function UpgradeBackupJSONFile(json, identity) {
    if ((0,version_2/* isBackupJSONFileVersion2 */.GI)(json)) return (0,version_2/* patchNonBreakingUpgradeForBackupJSONFileVersion2 */.a6)(json);
    if (isBackupJSONFileVersion1(json)) return (0,version_2/* upgradeFromBackupJSONFileVersion1 */.nl)(patchNonBreakingUpgradeForBackupJSONFileVersion1(json));
    if (isBackupJSONFileVersion0(json) && identity) {
        const upgraded = upgradeFromBackupJSONFileVersion0(json, identity);
        if (upgraded === null) return null;
        return (0,version_2/* upgradeFromBackupJSONFileVersion1 */.nl)(upgraded);
    }
    return null;
}
function getBackupPreviewInfo(json) {
    var ref, ref1;
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        files: ((ref = json.plugin) === null || ref === void 0 ? void 0 : (ref1 = ref[constants/* FileServicePluginID */.hM]) === null || ref1 === void 0 ? void 0 : ref1.length) || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 24784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rw": () => (/* binding */ getKeyParameter),
/* harmony export */   "ce": () => (/* binding */ JsonWebKeyToCryptoKey),
/* harmony export */   "iV": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_0__);

const CryptoKeyCache = new Map();
const JsonWebKeyCache = new WeakMap();
function getKeyParameter(type) {
    if (type === 'ecdh') return [
        [
            'deriveKey',
            'deriveBits'
        ],
        {
            name: 'ECDH',
            namedCurve: 'K-256'
        }
    ];
    if (type === 'aes') return [
        [
            'encrypt',
            'decrypt'
        ],
        {
            name: 'AES-GCM',
            length: 256
        }
    ];
    if (type === 'ecdsa') return [
        [
            'sign',
            'verify'
        ],
        {
            name: 'ecdsa',
            namedCurve: 'K-256'
        }
    ];
    throw new TypeError('Invalid key type');
}
/**
 * Get a (cached) CryptoKey from JsonWebKey
 *
 * JsonWebKeyToCryptoKey(key, ...getKeyParameter('aes'))
 *
 * @param algorithm - use which algorithm to import this key, defaults to ECDH K-256
 * @param key - The JsonWebKey
 * @param usage - Usage
 */ async function JsonWebKeyToCryptoKey(key, usage, algorithm) {
    key = {
        ...key
    };
    // ? In some cases the raw JWK stores the usage of "decrypt" only so our full usage will throw an error
    const usages = [
        ...usage
    ].sort().join(',');
    if (key.key_ops) {
        if (key.key_ops.sort().join('.') !== usages) {
            key.key_ops = [
                ...usage
            ];
        }
    }
    const _key = json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(key) + usages;
    if (CryptoKeyCache.has(_key)) return CryptoKeyCache.get(_key);
    const cryptoKey = await crypto.subtle.importKey('jwk', key, algorithm, true, [
        ...usage
    ]);
    CryptoKeyCache.set(_key, cryptoKey);
    JsonWebKeyCache.set(cryptoKey, key);
    return cryptoKey;
}
/**
 * Get a (cached) JsonWebKey from CryptoKey
 * @param key - The CryptoKey
 */ async function CryptoKeyToJsonWebKey(key) {
    // Any of nominal subtype of JsonWebKey in this project is runtime equivalent to JsonWebKey
    // so it is safe to do the force cast
    if (JsonWebKeyCache.has(key)) return JsonWebKeyCache.get(key);
    const jwk = await crypto.subtle.exportKey('jwk', key);
    JsonWebKeyCache.set(key, jwk);
    const hash = json_stable_stringify__WEBPACK_IMPORTED_MODULE_0___default()(jwk) + [
        ...key.usages
    ].sort().join(',');
    CryptoKeyCache.set(hash, key);
    return jwk;
}


/***/ }),

/***/ 10329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Km": () => (/* binding */ keyToJWK),
/* harmony export */   "Br": () => (/* binding */ JWKToKey),
/* harmony export */   "eh": () => (/* binding */ keyToAddr)
/* harmony export */ });
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23033);
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75367);
/* harmony import */ var elliptic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(elliptic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34987);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15313);





function keyToJWK(key, type) {
    const ec = new elliptic__WEBPACK_IMPORTED_MODULE_1__.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    const pubKey = keyPair.getPublic();
    const privKey = keyPair.getPrivate();
    return {
        crv: 'K-256',
        ext: true,
        x: base64(pubKey.getX().toArray()),
        y: base64(pubKey.getY().toArray()),
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC',
        d: type === 'private' ? base64(privKey.toArray()) : undefined
    };
    function base64(nums) {
        return pvtsutils__WEBPACK_IMPORTED_MODULE_3__.Convert.ToBase64Url(new Uint8Array(nums).buffer);
    }
}
function JWKToKey(jwk, type) {
    const ec = new elliptic__WEBPACK_IMPORTED_MODULE_1__.ec('secp256k1');
    if (type === 'public' && jwk.x && jwk.y) {
        const xb = ab(jwk.x);
        const yb = ab(jwk.y);
        const point = buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.from((0,pvtsutils__WEBPACK_IMPORTED_MODULE_3__.combine)(new Uint8Array([
            4
        ]), xb, yb));
        if (tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPoint(point)) return `0x${ec.keyFromPublic(point).getPublic(false, 'hex')}`;
    }
    if (type === 'private' && jwk.d) {
        const db = buffer__WEBPACK_IMPORTED_MODULE_4__.Buffer.from(ab(jwk.d));
        if (tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPrivate(db)) return `0x${ec.keyFromPrivate(db).getPrivate('hex')}`;
    }
    throw new Error('invalid private key');
    function ab(base64) {
        return pvtsutils__WEBPACK_IMPORTED_MODULE_3__.Convert.FromBase64Url(base64);
    }
}
function keyToAddr(key, type) {
    const ec = new elliptic__WEBPACK_IMPORTED_MODULE_1__.ec('secp256k1');
    const key_ = key.replace(/^0x/, '');
    const keyPair = type === 'public' ? ec.keyFromPublic(key_) : ec.keyFromPrivate(key_);
    return wallet_ts__WEBPACK_IMPORTED_MODULE_2__.EthereumAddress.from(keyPair.getPublic(false, 'array')).address;
}


/***/ }),

/***/ 66451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ OnDemandWorker)
/* harmony export */ });
const WorkerCheckTerminateInterval = 60 * 1000;
const InactiveTimeToTerminateDefault = 15 * 10000;
class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, WorkerCheckTerminateInterval));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.init);
        // After the Worker is alive, it will send a message "Alive" in setup.worker.ts
        // then to start forwarding message
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        this.worker && Worker.prototype.terminate.call(this.worker);
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>this.worker && Worker.prototype.postMessage.apply(this.worker, args)
        );
    }
    set onmessage(_) {
        throws();
    }
    set onerror(_) {
        throws();
    }
    set onmessageerror(_) {
        throws();
    }
    // @ts-ignore
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    // @ts-ignore
    removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
    }
    constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.inactiveTimeToTerminate = InactiveTimeToTerminateDefault;
        this.lastUsed = Date.now();
        this.init = init;
        this.log((ref = init[1]) === null || ref === void 0 ? void 0 : ref.name, 'created with', ...init);
    }
}
Object.setPrototypeOf(OnDemandWorker.prototype, Worker.prototype);
const throws = ()=>{
    throw new TypeError('Please use addEventListener');
};
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}


/***/ }),

/***/ 47413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createExternalProvider)
/* harmony export */ });
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25830);

function createExternalProvider() {
    return {
        isMetaMask: false,
        isMask: true,
        isStatus: true,
        host: '',
        path: '',
        sendAsync: _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Ethereum.requestSend */ .ZP.Ethereum.requestSend,
        send: _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Ethereum.requestSend */ .ZP.Ethereum.requestSend,
        request: _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Ethereum.request */ .ZP.Ethereum.request
    };
}


/***/ }),

/***/ 94738:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const createHmac = __webpack_require__(6537)

const ONE1 = Buffer.alloc(1, 1)
const ZERO1 = Buffer.alloc(1, 0)

// https://tools.ietf.org/html/rfc6979#section-3.2
function deterministicGenerateK (hash, x, checkSig, isPrivate, extraEntropy) {
  // Step A, ignored as hash already provided
  // Step B
  // Step C
  let k = Buffer.alloc(32, 0)
  let v = Buffer.alloc(32, 1)

  // Step D
  k = createHmac('sha256', k)
    .update(v)
    .update(ZERO1)
    .update(x)
    .update(hash)
    .update(extraEntropy || '')
    .digest()

  // Step E
  v = createHmac('sha256', k).update(v).digest()

  // Step F
  k = createHmac('sha256', k)
    .update(v)
    .update(ONE1)
    .update(x)
    .update(hash)
    .update(extraEntropy || '')
    .digest()

  // Step G
  v = createHmac('sha256', k).update(v).digest()

  // Step H1/H2a, ignored as tlen === qlen (256 bit)
  // Step H2b
  v = createHmac('sha256', k).update(v).digest()

  let T = v

  // Step H3, repeat until T is within the interval [1, n - 1] and is suitable for ECDSA
  while (!isPrivate(T) || !checkSig(T)) {
    k = createHmac('sha256', k)
      .update(v)
      .update(ZERO1)
      .digest()

    v = createHmac('sha256', k).update(v).digest()

    // Step H1/H2a, again, ignored as tlen === qlen (256 bit)
    // Step H2b again
    v = createHmac('sha256', k).update(v).digest()
    T = v
  }

  return T
}

module.exports = deterministicGenerateK


/***/ })

}]);