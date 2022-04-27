(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[465],{

/***/ 53753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 2169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visuallyHidden);

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

/***/ 76520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const InfoIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Info', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z",
            fill: "currentColor"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 43877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Trader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(10466);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(33690);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useGasConfig.ts
var useGasConfig = __webpack_require__(15574);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var Trader_types = __webpack_require__(5115);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/chipClasses.js
var chipClasses = __webpack_require__(86914);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(41106);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/InputTokenPanel.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        filledInput: {
            borderRadius: 12,
            padding: 12,
            background: isDashboard ? entry/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2 : theme.palette.background.default,
            border: `1px solid ${isDashboard ? entry/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
            position: 'relative'
        },
        balance: {
            fontSize: 14,
            lineHeight: '20px',
            color: theme.palette.text.primary,
            wordBreak: 'keep-all'
        },
        amount: {
            marginLeft: 10
        },
        input: {
            textAlign: 'right',
            fontWeight: 500,
            color: theme.palette.text.primary,
            lineHeight: '30px',
            fontSize: 24
        },
        chip: {
            borderRadius: 6,
            marginLeft: 8,
            height: 20
        },
        label: {
            fontSize: 12,
            lineHeight: '16px',
            padding: '0 6px'
        },
        price: {
            fontSize: 14,
            lineHeight: '20px',
            position: 'absolute',
            top: 18,
            right: 12,
            color: isDashboard ? entry/* MaskColorVar.normalText */.ZN.normalText : theme.palette.text.secondary
        },
        selectedTokenChip: {
            borderRadius: '22px!important',
            height: 'auto',
            backgroundColor: isDashboard ? entry/* MaskColorVar.input */.ZN.input : theme.palette.background.input,
            [`& .${chipClasses/* default.label */.Z.label}`]: {
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 13,
                lineHeight: '18px',
                marginRight: 8
            }
        },
        chipTokenIcon: {
            width: '28px!important',
            height: '28px!important'
        },
        noToken: {
            borderRadius: '18px !important',
            backgroundColor: theme.palette.primary.main,
            [`& .${chipClasses/* default.label */.Z.label}`]: {
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 10,
                lineHeight: '18px',
                color: theme.palette.primary.contrastText,
                marginRight: 0
            }
        }
    })
);
const InputTokenPanel = /*#__PURE__*/ (0,react.memo)(({ chainId , token , balance , onAmountChange , amount , ...props })=>{
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles({
        isDashboard
    });
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>({
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token?.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token?.decimals}}$`)
        })
    , [
        token?.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_FRACTION_AMOUNT,
        RE_MATCH_WHOLE_AMOUNT
    ]);
    const tokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, !(0,address/* isZeroAddress */.uO)(token?.address) ? token?.address.toLowerCase() : undefined);
    const tokenValueUSD = (0,react.useMemo)(()=>amount ? new (bignumber_default())(amount).times(tokenPrice).toFixed(2) : '0'
    , [
        amount,
        tokenPrice
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        fullWidth: true,
        type: "text",
        variant: "filled",
        value: amount,
        onChange: onChange,
        InputProps: {
            className: classes.filledInput,
            disableUnderline: true,
            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* SelectTokenChip */.xR, {
                        token: token,
                        classes: {
                            chip: classes.selectedTokenChip,
                            tokenIcon: classes.chipTokenIcon,
                            noToken: classes.noToken
                        },
                        ...props.SelectTokenChip
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        mt: 1,
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.balance,
                                children: [
                                    t('plugin_ito_list_table_got'),
                                    ":",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        component: "span",
                                        className: classes.amount,
                                        color: "primary",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                            value: balance,
                                            decimals: token?.decimals,
                                            significant: 6,
                                            formatter: formatter/* formatBalance */.az
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "filled",
                                classes: {
                                    root: classes.chip,
                                    label: classes.label
                                },
                                onClick: ()=>{
                                    onAmountChange((0,formatter/* formatBalance */.az)(balance, token?.decimals, 6));
                                }
                            })
                        ]
                    })
                ]
            }),
            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.price,
                children: [
                    "\u2248 ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                        value: tokenValueUSD,
                        sign: "$",
                        formatter: formatter/* formatCurrency */.xG
                    })
                ]
            })
        },
        inputProps: {
            className: classes.input,
            autoComplete: 'off'
        }
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(92760);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/general/Drop.tsx


const DropIcon = (0,icons_utils/* createIcon */.I)('DropIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M9.45998 14.8453C9.73997 15.1847 10.26 15.1847 10.54 14.8453L13.3854 11.3954C13.762 10.9388 13.4372 10.25 12.8454 10.25H7.1546C6.56277 10.25 6.23801 10.9388 6.61458 11.3954L9.45998 14.8453Z"
    })
}), '0 0 20 24');

;// CONCATENATED MODULE: ../icons/general/ChevronUp.tsx


const ChevronUpIcon = (0,icons_utils/* createIcon */.I)('ChevronUpIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        stroke: "currentColor",
        d: "M5.833 10.833 10 15l4.167-4.167M5.833 5 10 9.167 14.167 5",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(58287);
;// CONCATENATED MODULE: ../icons/general/BestTrade.tsx


const BestTradeIcon = (0,icons_utils/* createIcon */.I)('BestTradeIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.132 9.13V6.036l-2.684-1.55-1.542-2.676h-3.093L12.13.26 9.454 1.81H6.361L4.81 4.487l-2.684 1.55v3.092L.584 11.806l1.55 2.676v3.092l2.684 1.543 1.55 2.684h3.093l2.676 1.542 2.684-1.542h3.085l1.542-2.684 2.684-1.543v-3.092l1.542-2.676-1.542-2.677Z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.103 12.208c.566-.326 1.064-.454 1.495-.383.431.07.783.342 1.056.815.204.353.25.725.14 1.118-.108.382-.35.73-.727 1.045.313-.18.637-.279.973-.296.337-.016.65.051.942.203.287.144.516.363.685.656.623 1.079.199 2.042-1.271 2.891l-2.954 1.705-.213-.37.49-.256c.107-.061.118-.165.033-.312l-2.796-4.843a.23.23 0 0 0-.125-.101.15.15 0 0 0-.16-.001l-.458.29L2 14l3.103-1.792Zm-.766.909c-.066.038-.083.101-.05.189l1.274 2.207.519-.3c.306-.176.478-.4.517-.671.035-.278-.069-.626-.311-1.046-.435-.752-.958-.952-1.57-.598l-.379.219Zm1.426 2.745 1.412 2.447c.05.087.122.103.215.05l.489-.283c.34-.196.544-.456.614-.78.076-.329-.009-.706-.255-1.132-.26-.453-.531-.736-.81-.85-.279-.115-.581-.078-.907.11l-.758.438ZM10.807 11.072c.606-.35 1.184-.461 1.735-.336.555.115 1.01.474 1.366 1.076l.214.37-2.874 1.659c.33.572.686.949 1.065 1.13.386.176.79.147 1.213-.089.313-.18.538-.412.675-.696.134-.29.19-.58.165-.867l.379.034c.035.415-.065.81-.3 1.185-.229.372-.58.694-1.052.967-.791.457-1.474.611-2.047.463-.574-.148-1.078-.598-1.512-1.35-.442-.767-.577-1.439-.406-2.017.168-.585.628-1.095 1.38-1.529Zm.166.357c-.286.165-.409.436-.369.813.036.37.19.79.464 1.263l1.327-.766c.066-.038.103-.09.11-.156.005-.066-.028-.162-.1-.289-.25-.433-.492-.72-.724-.86-.226-.145-.461-.147-.708-.005ZM15.099 12.496l.328-.216c.196.34.499.542.909.607.416.062.824-.023 1.224-.253.219-.127.363-.277.432-.45a.614.614 0 0 0-.054-.554.52.52 0 0 0-.358-.274c-.146-.039-.354-.021-.621.053l-.834.215c-.447.116-.827.118-1.14.006-.307-.116-.558-.344-.754-.683-.239-.413-.288-.829-.148-1.247.136-.425.464-.787.983-1.086.14-.08.271-.144.396-.19.125-.045.284-.092.477-.141.247-.063.43-.13.55-.198a.685.685 0 0 0 .254-.253l.597 1.173-.299.173c-.146-.253-.38-.412-.7-.475-.314-.067-.65.003-1.01.21-.206.119-.341.268-.406.448a.546.546 0 0 0 .04.483.52.52 0 0 0 .33.249c.143.033.317.02.524-.037l.792-.217c.528-.145.939-.156 1.232-.032.3.12.55.352.75.699.273.473.326.934.16 1.385-.169.444-.516.818-1.042 1.12a2.648 2.648 0 0 1-.497.222c-.169.061-.444.145-.827.25a1.352 1.352 0 0 0-.302.122c-.147.084-.238.164-.275.238l-.711-1.347ZM19.215 6.351l.988-.57.184.32-.988.57 1.765 3.056c.134.233.254.372.36.418.106.045.223.031.349-.042a.478.478 0 0 0 .192-.244.77.77 0 0 0 .042-.41l.356-.006a1.03 1.03 0 0 1-.138.706c-.126.197-.328.376-.608.537-.406.234-.77.342-1.09.323-.325-.025-.586-.208-.782-.547l-1.753-3.036-.599.345-.184-.32c.266-.153.455-.293.568-.42a.73.73 0 0 0 .162-.48c.006-.19-.041-.456-.14-.798l.728-.42.588 1.018Z",
            fill: "#fff"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/TriangleWarning.tsx


const TriangleWarning = (0,icons_utils/* createIcon */.I)('TriangleWarningIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".2",
            d: "m10 .84 10 17.32H0L10 .84Z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.086 12.11c0 .512.355.926.793.926.439 0 .794-.414.794-.926V7.48c0-.51-.355-.925-.794-.925-.438 0-.793.414-.793.926v4.63ZM9.086 14.887c0 .51.355.925.793.925.439 0 .794-.414.794-.925 0-.512-.355-.926-.794-.926-.438 0-.793.414-.793.926Z",
            fill: "#FF5F5F"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(61486);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(97096);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(32925);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(64065);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(39850);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useGreatThanSlippageSetting.ts





const useGreatThanSlippageSetting = (priceImpact)=>{
    const slippageSetting = (0,src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const { temporarySlippage  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const slippage = temporarySlippage || slippageSetting;
    return (0,react.useMemo)(()=>(0,base_src/* isGreaterThan */.T1)((0,base_src/* multipliedBy */.$q)(priceImpact ?? 0, 10000).toFixed(0).replace(/\.?0+$/, ''), slippage)
    , [
        priceImpact,
        slippage
    ]);
};

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderInfo.tsx



















const TraderInfo_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        trade: {
            marginBottom: 8,
            padding: 10,
            backgroundColor: `${isDashboard ? entry/* MaskColorVar.input */.ZN.input : theme.palette.background.paper}!important`,
            border: `1px solid ${isDashboard ? entry/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
            borderRadius: 8,
            cursor: 'pointer',
            position: 'relative'
        },
        warning: {
            borderColor: isDashboard ? entry/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main
        },
        warningText: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            position: 'absolute',
            top: 13.5,
            right: 10,
            color: isDashboard ? entry/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
            display: 'flex',
            alignItems: 'center'
        },
        provider: {
            color: theme.palette.text.primary,
            fontSize: 19,
            lineHeight: '27px',
            fontWeight: 600,
            wordBreak: 'keep-all'
        },
        cost: {
            color: isDashboard ? entry/* MaskColorVar.normalText */.ZN.normalText : theme.palette.text.secondary,
            fontSize: 14,
            lineHeight: '20px',
            marginTop: 12,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            textAlign: 'right',
            fontWeight: 500,
            color: theme.palette.text.primary,
            lineHeight: '30px',
            fontSize: 24,
            cursor: 'pointer',
            padding: '25px 12px 8px 0',
            width: 'auto'
        },
        focus: {
            border: `1px solid ${theme.palette.primary.main}`
        },
        best: {
            position: 'absolute',
            top: -12,
            right: 12
        }
    })
);
const TraderInfo = /*#__PURE__*/ (0,react.memo)(({ trade , gasPrice , isBest , onClick , isFocus  })=>{
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TraderInfo_useStyles({
        isDashboard
    });
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // #region refresh pools
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        // force update balancer's pools each time user enters into the swap tab
        if (trade.provider === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER) await messages/* PluginTraderRPC.updatePools */.V.updatePools(true, targetChainId);
    }, [
        trade.provider,
        targetChainId
    ]);
    // #endregion
    const nativeToken = (0,utils_token/* createNativeToken */.$c)(targetChainId);
    const tokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(targetChainId);
    const gasFee = (0,react.useMemo)(()=>{
        return trade.gas.value && gasPrice ? (0,base_src/* multipliedBy */.$q)(gasPrice, trade.gas.value).integerValue().toFixed() : 0;
    }, [
        trade.gas?.value,
        gasPrice
    ]);
    const feeValueUSD = (0,react.useMemo)(()=>gasFee ? new (bignumber_default())((0,formatter/* formatWeiToEther */.yp)(gasFee).times(tokenPrice).toFixed(2)) : '0'
    , [
        gasFee,
        tokenPrice
    ]);
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(trade.value?.priceImpact);
    if (trade.loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.trade,
        display: "flex",
        justifyContent: "center",
        style: {
            padding: 24
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
    });
    if (!trade.value) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        fullWidth: true,
        type: "text",
        variant: "filled",
        onClick: onClick,
        value: (0,formatter/* formatBalance */.az)(trade.value?.outputAmount ?? 0, trade.value?.outputToken?.decimals, 2),
        InputProps: {
            className: classnames_default()(classes.trade, isFocus ? classes.focus : null, isGreatThanSlippageSetting ? classes.warning : null),
            disableUnderline: true,
            startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.provider,
                        children: (0,pipes/* resolveTradeProviderName */.uM)(trade.provider)
                    }),
                    gasFee ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.cost,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: t('plugin_trader_gas_fee')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                marginLeft: 0.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                    value: gasFee,
                                    decimals: nativeToken.decimals ?? 0,
                                    significant: 4,
                                    symbol: nativeToken.symbol,
                                    formatter: formatter/* formatBalance */.az
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 14,
                                lineHeight: "20px",
                                component: "span",
                                children: t('plugin_trader_tx_cost_usd', {
                                    usd: feeValueUSD
                                })
                            })
                        ]
                    }) : null
                ]
            }),
            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    isBest ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BestTradeIcon, {
                        className: classes.best
                    }) : null,
                    isGreatThanSlippageSetting ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.warningText,
                        children: [
                            t('plugin_trader_price_image_value', {
                                percent: (0,formatter/* formatPercentage */.rl)(trade.value.priceImpact)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TriangleWarning, {
                                style: {
                                    width: 20,
                                    height: 20
                                }
                            })
                        ]
                    }) : null
                ]
            })
        },
        inputProps: {
            className: classes.input,
            disabled: true
        }
    }, trade.provider);
});

// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(25100);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Tune.js
var Tune = __webpack_require__(20058);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var Trader_constants = __webpack_require__(22684);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(70935);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeApproveComputed.ts






function useTradeApproveComputed(trade, provider, token) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(provider);
    return (0,react.useMemo)(()=>{
        return {
            approveToken: token?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? (0,utils_token/* createERC20Token */.wY)(chainId, token.address, token.decimals, token.name, token.symbol) : null,
            approveAmount: trade ? trade.inputAmount : base_src/* ZERO */.xE,
            approveAddress: (()=>{
                if (context?.TYPE === public_api_src/* TradeProvider.ZRX */.z4.ZRX) return trade?.trade_ ? trade.trade_.allowanceTarget : '';
                if (context?.TYPE === public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN) return trade?.trade_ ? trade?.trade_.to : '';
                return context?.ROUTER_CONTRACT_ADDRESS ?? '';
            })()
        };
    }, [
        chainId,
        trade,
        token,
        context
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/ArrowDownward.js
var ArrowDownward = __webpack_require__(13498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/HelpOutline.js
var HelpOutline = __webpack_require__(76879);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(93618);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeForm.tsx































const TradeForm_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard , isPopup  })=>{
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        reverseIcon: {
            cursor: 'pointer',
            color: isDashboard ? `${theme.palette.text.primary}!important` : theme.palette.text.strong
        },
        card: {
            backgroundColor: isDashboard ? entry/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2 : theme.palette.background.default,
            border: `1px solid ${isDashboard ? entry/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
            borderRadius: 12,
            padding: 12
        },
        balance: {
            fontSize: 14,
            lineHeight: '20px',
            color: theme.palette.text.primary
        },
        amount: {
            marginLeft: 10
        },
        reverse: {
            backgroundColor: isDashboard ? entry/* MaskColorVar.lightBackground */.ZN.lightBackground : theme.palette.background.default,
            width: 32,
            height: 32,
            borderRadius: 16,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0 16px 0'
        },
        chevron: {
            fill: 'none',
            stroke: isDashboard ? theme.palette.text.primary : theme.palette.text.strong,
            transition: 'all 300ms',
            cursor: 'pointer',
            color: theme.palette.text.primary
        },
        reverseChevron: {
            transform: 'rotate(-180deg)',
            transition: 'all 300ms'
        },
        status: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
        },
        label: {
            flex: 1,
            textAlign: 'left'
        },
        icon: {
            marginLeft: theme.spacing(0.5)
        },
        section: {
            width: '100%'
        },
        chainBoundary: {
            width: '100%'
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: isDashboard ? 8 : 24,
            height: 'auto',
            marginTop: '0px !important'
        },
        disabledButton: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: isDashboard ? 8 : 24,
            height: 'auto'
        },
        selectedTokenChip: {
            borderRadius: '22px!important',
            height: 'auto',
            backgroundColor: isDashboard ? entry/* MaskColorVar.input */.ZN.input : theme.palette.background.input,
            [`& .${chipClasses/* default.label */.Z.label}`]: {
                paddingTop: 10,
                paddingBottom: 10,
                fontSize: 13,
                lineHeight: '18px',
                marginRight: 8
            }
        },
        chipTokenIcon: {
            width: '28px!important',
            height: '28px!important'
        },
        controller: {
            width: '100%',
            paddingBottom: 16,
            // Just for design
            backgroundColor: isDashboard ? entry/* MaskColorVar.mainBackground */.ZN.mainBackground : theme.palette.background.paper,
            position: 'sticky',
            bottom: isPopup ? -12 : -20
        },
        noToken: {
            borderRadius: '18px !important',
            backgroundColor: theme.palette.primary.main,
            [`& .${chipClasses/* default.label */.Z.label}`]: {
                paddingTop: 9,
                paddingBottom: 9,
                fontSize: 10,
                lineHeight: '18px',
                color: theme.palette.primary.contrastText,
                marginRight: 0
            }
        },
        tooltip: {
            padding: 16,
            textAlign: 'left',
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        dropIcon: {
            width: 20,
            height: 24,
            fill: isDashboard ? theme.palette.text.primary : theme.palette.text.strong
        },
        connectWallet: {
            marginTop: 0
        },
        slippageValue: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.text.secondary
        }
    };
});
const TradeForm = /*#__PURE__*/ (0,react.memo)(({ wallet , trades , inputAmount , inputToken , outputToken , onTokenChipClick =noop/* default */.Z , onInputAmountChange , inputTokenBalance , outputTokenBalance , focusedTrade , onFocusedTradeChange , onSwap , gasPrice , onSwitch ,  })=>{
    const userSelected = (0,react.useRef)(false);
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const isPopup = (0,shared_base_src/* isPopupPage */.N6)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TradeForm_useStyles({
        isDashboard,
        isPopup
    });
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const [isExpand, setExpand] = (0,react.useState)(false);
    // #region approve token
    const { approveToken , approveAmount , approveAddress  } = useTradeApproveComputed(focusedTrade?.value ?? null, focusedTrade?.provider, inputToken);
    // #region token balance
    const inputTokenBalanceAmount = new (bignumber_default())(inputTokenBalance || '0');
    // #endregion
    // #region get the best trade
    const bestTrade = (0,react.useMemo)(()=>(0,head/* default */.Z)(trades)
    , [
        trades
    ]);
    // #endregion
    // #region remote controlled swap settings dialog
    const { openDialog: openSwapSettingDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
    // #endregion
    // #region form controls
    const inputTokenTradeAmount = (0,base_src/* rightShift */.pu)(inputAmount || '0', inputToken?.decimals);
    // #endregion
    // #region UI logic
    // validate form return a message if an error exists
    const validationMessage = (0,react.useMemo)(()=>{
        if (inputTokenTradeAmount.isZero()) return t('plugin_trader_error_amount_absence');
        if ((0,base_src/* isLessThan */.FI)(inputAmount, Trader_constants/* MINIMUM_AMOUNT */.rI)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if (!inputToken || !outputToken) return t('plugin_trader_error_amount_absence');
        if (!trades.length) return t('plugin_trader_error_insufficient_lp');
        if (inputTokenBalanceAmount.isLessThan(inputTokenTradeAmount)) return t('plugin_trader_error_insufficient_balance', {
            symbol: inputToken?.symbol
        });
        if (focusedTrade?.value && !focusedTrade.value.outputAmount) return t('plugin_trader_no_enough_liquidity');
        return '';
    }, [
        inputAmount,
        focusedTrade,
        trades,
        inputToken,
        outputToken,
        inputTokenBalanceAmount.toFixed(),
        inputTokenTradeAmount.toFixed(), 
    ]);
    // #endregion
    // #region native wrap message
    const nativeWrapMessage = (0,react.useMemo)(()=>{
        if (focusedTrade?.value) {
            if ((0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value)) {
                return focusedTrade.value.trade_?.isWrap ? t('plugin_trader_wrap') : t('plugin_trader_unwrap');
            }
            return t('plugin_trader_swap_amount_symbol', {
                amount: (0,formatter/* formatBalance */.az)(focusedTrade?.value?.outputAmount ?? 0, focusedTrade?.value?.outputToken?.decimals, 2),
                symbol: outputToken?.symbol
            });
        } else {
            return t('plugin_trader_no_trade');
        }
    }, [
        focusedTrade,
        outputToken
    ]);
    // #endregion
    (0,useUpdateEffect/* default */.Z)(()=>{
        setExpand(false);
    }, [
        chainId,
        inputToken,
        inputAmount,
        outputToken
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (bestTrade?.value && !userSelected.current) {
            onFocusedTradeChange(bestTrade);
        }
    }, [
        bestTrade
    ]);
    const firstTraderInfo = (0,react.useMemo)(()=>{
        if (!bestTrade) return null;
        if (isExpand) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: bestTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                if (!userSelected.current) userSelected.current = true;
                onFocusedTradeChange(bestTrade);
            },
            isFocus: bestTrade.provider === focusedTrade?.provider,
            isBest: true
        });
        else if (focusedTrade) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: focusedTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                onFocusedTradeChange(focusedTrade);
            },
            isFocus: true,
            isBest: bestTrade.provider === focusedTrade.provider
        });
        return null;
    }, [
        trades,
        bestTrade,
        gasPrice,
        focusedTrade,
        onFocusedTradeChange,
        isExpand
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        userSelected.current = false;
    }, [
        inputAmount,
        inputToken,
        outputToken
    ]);
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(focusedTrade?.value?.priceImpact);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                justifyContent: "flex-start",
                mb: 1,
                width: "100%",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontSize: 14,
                    lineHeight: "20px",
                    children: t('plugin_trader_swap_from')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputTokenPanel, {
                chainId: chainId,
                amount: inputAmount,
                balance: inputTokenBalanceAmount.toFixed(),
                token: inputToken,
                onAmountChange: onInputAmountChange,
                SelectTokenChip: {
                    ChipProps: {
                        onClick: ()=>onTokenChipClick(Trader_types/* TokenPanelType.Input */.Vo.Input)
                        ,
                        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DropIcon, {
                            className: classes.dropIcon,
                            style: {
                                fill: !inputToken ? '#ffffff' : undefined
                            }
                        }),
                        onDelete: noop/* default */.Z
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.reverse,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                    className: classes.reverseIcon,
                    color: "primary",
                    onClick: onSwitch
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                marginBottom: 2.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                        children: outputToken && outputTokenBalance !== undefined ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 14,
                                    lineHeight: "20px",
                                    children: t('plugin_trader_swap_to')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.balance,
                                    children: [
                                        t('plugin_ito_list_table_got'),
                                        ":",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            className: classes.amount,
                                            color: "primary",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: outputTokenBalance,
                                                decimals: outputToken?.decimals,
                                                significant: 6,
                                                formatter: formatter/* formatBalance */.az
                                            })
                                        })
                                    ]
                                })
                            ]
                        }) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.card,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* SelectTokenChip */.xR, {
                                classes: {
                                    chip: classes.selectedTokenChip,
                                    tokenIcon: classes.chipTokenIcon,
                                    noToken: classes.noToken
                                },
                                token: outputToken,
                                ChipProps: {
                                    onClick: ()=>onTokenChipClick(Trader_types/* TokenPanelType.Output */.Vo.Output)
                                    ,
                                    deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DropIcon, {
                                        className: classes.dropIcon,
                                        style: {
                                            fill: !outputToken ? '#ffffff' : undefined
                                        }
                                    }),
                                    onDelete: noop/* default */.Z
                                }
                            }),
                            trades.filter((item)=>!!item.value
                            ).length >= 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        marginTop: "20px",
                                        children: [
                                            firstTraderInfo,
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                                                in: isExpand,
                                                children: trades.slice(1).map((trade)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
                                                        trade: trade,
                                                        onClick: ()=>{
                                                            if (!userSelected.current) userSelected.current = true;
                                                            onFocusedTradeChange(trade);
                                                        },
                                                        isFocus: trade.provider === focusedTrade?.provider,
                                                        gasPrice: gasPrice
                                                    }, trade.provider)
                                                )
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: 1.5,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronUpIcon, {
                                            className: classnames_default()(classes.chevron, isExpand ? classes.reverseChevron : null),
                                            onClick: ()=>setExpand(!isExpand)
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.section,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.status,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.label,
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: [
                                        t('plugin_trader_slippage_tolerance'),
                                        ' '
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.slippageValue,
                                    children: (0,formatter/* formatPercentage */.rl)((0,helpers/* toBips */.SG)(settings/* currentSlippageSettings.value */.It.value))
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    className: classes.icon,
                                    size: "small",
                                    onClick: openSwapSettingDialog,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                                        fontSize: "small"
                                    })
                                })
                            ]
                        })
                    }),
                    wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.section,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                            chainId: chainId,
                            noSwitchNetworkTip: true,
                            disablePadding: true,
                            className: classes.chainBoundary,
                            ActionButtonPromiseProps: {
                                fullWidth: true,
                                classes: {
                                    root: classes.button,
                                    disabled: classes.disabledButton
                                },
                                color: 'primary',
                                style: {
                                    padding: '13px 0',
                                    marginTop: 0
                                }
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                                amount: approveAmount.toFixed(),
                                token: !(0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade?.value ?? null) && approveToken?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 && !!approveAmount.toNumber() ? approveToken : undefined,
                                spender: approveAddress,
                                onlyInfiniteUnlock: true,
                                withChildren: true,
                                ActionButtonProps: {
                                    color: 'primary'
                                },
                                infiniteUnlockContent: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    component: "span",
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontSize: 18,
                                            fontWeight: 600,
                                            lineHeight: "18px",
                                            children: t('plugin_trader_unlock_symbol', {
                                                symbol: approveToken?.symbol
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                            classes: {
                                                tooltip: classes.tooltip
                                            },
                                            PopperProps: {
                                                disablePortal: true
                                            },
                                            title: t('plugin_trader_unlock_tips', {
                                                provider: focusedTrade?.provider ? (0,pipes/* resolveTradeProviderName */.uM)(focusedTrade.provider) : '',
                                                symbol: approveToken?.symbol
                                            }),
                                            placement: "top",
                                            arrow: true,
                                            disableFocusListener: true,
                                            disableTouchListener: true,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(HelpOutline/* default */.Z, {
                                                style: {
                                                    marginLeft: 10
                                                }
                                            })
                                        })
                                    ]
                                }),
                                render: (disable)=>isGreatThanSlippageSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "error",
                                        disabled: focusedTrade?.loading || !focusedTrade?.value || disable,
                                        classes: {
                                            root: classes.button,
                                            disabled: classes.disabledButton
                                        },
                                        onClick: onSwap,
                                        children: t('plugin_trader_confirm_price_impact', {
                                            percent: (0,formatter/* formatPercentage */.rl)(focusedTrade?.value?.priceImpact ?? 0)
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        fullWidth: true,
                                        variant: "contained",
                                        disabled: focusedTrade?.loading || !focusedTrade?.value || !!validationMessage || disable,
                                        classes: {
                                            root: classes.button,
                                            disabled: classes.disabledButton
                                        },
                                        color: "primary",
                                        onClick: onSwap,
                                        children: validationMessage || nativeWrapMessage
                                    })
                            })
                        })
                    }) : null
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(19841);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUnmount.js
var useUnmount = __webpack_require__(8107);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(1650);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts + 1 modules
var useWrappedEtherContract = __webpack_require__(55420);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useNativeTokenWrapperCallback.ts






function useNativeTokenWrapperCallback(chainId) {
    const account = (0,useAccount/* useAccount */.m)();
    const wrapperContract = (0,useWrappedEtherContract/* useNativeTokenWrapperContract */.W)(chainId);
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    const wrapCallback = (0,react.useCallback)(async (amount, gasConfig)=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid deposit amount
        if ((0,base_src/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid deposit amount')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: amount,
            gas: await wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: amount
            }).catch((error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.deposit().send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        wrapperContract
    ]);
    const unwrapCallback = (0,react.useCallback)(async (all = true, amount = '0', gasConfig)=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // read balance
        const wethBalance = await wrapperContract.methods.balanceOf(account).call();
        // error: invalid withdraw amount
        if (all === false && (0,base_src/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid withdraw amount')
            });
            return;
        }
        // error: insufficient weth balance
        if (all === false && (0,base_src/* isLessThan */.FI)(wethBalance, amount)) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient WETH balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const withdrawAmount = all ? wethBalance : amount;
        const config = {
            from: account,
            gas: await wrapperContract.methods.withdraw(withdrawAmount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.withdraw(withdrawAmount).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        wrapperContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transactionState,
        wrapCallback,
        unwrapCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTradeCallback.ts


function useTradeCallback(trade, gasConfig) {
    const [transactionState, wrapCallback, unwrapCallback, resetCallback] = useNativeTokenWrapperCallback();
    return [
        transactionState,
        async ()=>{
            if (!trade?.trade_?.isNativeTokenWrapper) return;
            if (!trade.inputToken || !trade.outputToken) return;
            // input amount and output amount are the same value
            const tradeAmount = trade.inputAmount.toFixed();
            if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native || trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) {
                wrapCallback(tradeAmount, gasConfig);
                return;
            }
            unwrapCallback(false, tradeAmount);
        },
        resetCallback, 
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(46428);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/0x/constants.ts
var _0x_constants = __webpack_require__(42493);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeCallback.ts






function useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_ || !_0x_constants/* SUPPORTED_CHAIN_ID_LIST.includes */.E.includes(chainId)) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ]),
            ...gasConfig
        };
    }, [
        account,
        tradeComputed
    ]);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        // validate config
        if (!account || !config || !tradeComputed) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const config_ = {
            ...config,
            gas: await web3.eth.estimateGas({
                from: account,
                ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                    'to',
                    'data',
                    'value'
                ])
            }).catch((error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                return 0;
            })
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
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
        chainId,
        json_stable_stringify_default()(config),
        gasConfig
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts + 4 modules
var useTradeParameters = __webpack_require__(87183);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeCallback.ts






function uniswap_useTradeCallback_useTradeCallback(trade, tradeProvider, gasConfig, allowedSlippage) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const tradeParameters = (0,useTradeParameters/* useSwapParameters */.C)(trade, tradeProvider, allowedSlippage);
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    const tradeCallback = (0,react.useCallback)(async ()=>{
        if (!tradeParameters.length) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // step 1: estimate each trade parameter
        const estimatedCalls = await Promise.all(tradeParameters.map(async (x)=>{
            const { address , calldata , value  } = x;
            const config = {
                from: account,
                to: address,
                data: calldata,
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value: `0x${Number.parseInt(value, 16).toString(16)}`
                }
            };
            return web3.eth.estimateGas(config).then((gasEstimate)=>{
                return {
                    call: x,
                    gasEstimate: new (bignumber_default())(gasEstimate)
                };
            }).catch((error1)=>{
                return web3.eth.call(config).then(()=>{
                    return {
                        call: x,
                        error: new Error('Gas estimate failed.')
                    };
                }).catch((error)=>{
                    return {
                        call: x,
                        error: new Error((0,helpers/* swapErrorToUserReadableMessage */.Jc)(error))
                    };
                });
            });
        }));
        // a successful estimation is a bignumber gas estimate and the next call is also a bignumber gas estimate
        let bestCallOption = estimatedCalls.find((el, ix, list)=>'gasEstimate' in el && (ix === list.length - 1 || 'gasEstimate' in list[ix + 1])
        );
        // check if any calls errored with a recognizable error
        if (!bestCallOption) {
            const errorCalls = estimatedCalls.filter((call)=>'error' in call
            );
            if (errorCalls.length > 0) {
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: errorCalls[errorCalls.length - 1].error
                });
                return;
            }
            const firstNoErrorCall = estimatedCalls.find((call)=>!('error' in call)
            );
            if (!firstNoErrorCall) {
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: new Error('Unexpected error. Could not estimate gas for the swap.')
                });
                return;
            }
            bestCallOption = firstNoErrorCall;
        }
        return new Promise(async (resolve, reject)=>{
            if (!bestCallOption) {
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: new Error('Bad call options.')
                });
                return;
            }
            const { call: { address , calldata , value  } ,  } = bestCallOption;
            web3.eth.sendTransaction({
                from: account,
                to: address,
                data: calldata,
                ...'gasEstimate' in bestCallOption ? {
                    gas: bestCallOption.gasEstimate.toFixed()
                } : {},
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value
                },
                ...gasConfig
            }, async (error, hash)=>{
                if (error) {
                    if (error?.code) {
                        const error_ = new Error(error?.message === 'Unable to add more requests.' ? 'Unable to add more requests.' : 'Transaction rejected.');
                        setTradeState({
                            type: types/* TransactionStateType.FAILED */.n$.FAILED,
                            error: error_
                        });
                        reject(error_);
                    } else {
                        setTradeState({
                            type: types/* TransactionStateType.FAILED */.n$.FAILED,
                            error: new Error(`Swap failed: ${(0,helpers/* swapErrorToUserReadableMessage */.Jc)(error)}`)
                        });
                    }
                } else {
                    setTradeState({
                        type: types/* TransactionStateType.HASH */.n$.HASH,
                        hash: hash
                    });
                    resolve(hash);
                }
            });
        });
    }, [
        web3,
        account,
        tradeParameters,
        gasConfig
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/balancer/useTradeAmount.ts
var useTradeAmount = __webpack_require__(23680);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeCallback.ts






function balancer_useTradeCallback_useTradeCallback(trade, exchangeProxyContract, allowedSlippage = Trader_constants/* SLIPPAGE_DEFAULT */.Nd, gasConfig) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { BALANCER_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    const tradeAmount = (0,useTradeAmount/* useTradeAmount */.i)(trade, allowedSlippage);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        if (!trade || !trade.inputToken || !trade.outputToken || !exchangeProxyContract || !BALANCER_ETH_ADDRESS) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const { swaps: [swaps] ,  } = trade.trade_;
        // cast the type to ignore the different type which was generated by typechain
        const swap_ = swaps.map((x)=>x.map((y)=>[
                    y.pool,
                    y.tokenIn,
                    y.tokenOut,
                    y.swapAmount,
                    y.limitReturnAmount,
                    y.maxPrice
                ]
            )
        );
        // balancer use a different address for the native token
        const inputTokenAddress = trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.inputToken.address;
        const outputTokenAddress = trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.outputToken.address;
        const tx = trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn ? exchangeProxyContract.methods.multihopBatchSwapExactIn(swap_, inputTokenAddress, outputTokenAddress, trade.inputAmount.toFixed(), tradeAmount.toFixed()) : exchangeProxyContract.methods.multihopBatchSwapExactOut(swap_, inputTokenAddress, outputTokenAddress, tradeAmount.toFixed());
        // trade with the native token
        let transactionValue = '0';
        if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.inputAmount.toFixed();
        else if (trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.outputAmount.toFixed();
        // send transaction and wait for hash
        const config = {
            from: account,
            gas: await tx.estimateGas({
                from: account,
                value: transactionValue
            }).catch((error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value: transactionValue,
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            tx.send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setTradeState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTradeState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        chainId,
        trade,
        tradeAmount,
        exchangeProxyContract,
        BALANCER_ETH_ADDRESS
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeCallback.ts





function dodo_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        // validate config
        if (!account || !config) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // compose transaction config
        const config_ = {
            ...config,
            gas: await web3.eth.estimateGas(config).catch((error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
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
        chainId,
        json_stable_stringify_default()(config),
        gasConfig
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTradeCallback.ts






function bancor_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    const trade = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return tradeComputed.trade_;
    }, [
        account,
        tradeComputed
    ]);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        if (!account || !trade) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const [data, err] = await messages/* PluginTraderRPC.swapTransactionBancor */.V.swapTransactionBancor(trade);
        if (err) {
            const error = new Error(err.error.messages?.[0] || 'Unknown Error');
            setTradeState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: error
            });
            throw error;
        }
        // Note that if approval is required, the API will also return the necessary approval transaction.
        const tradeTransaction = data.length === 1 ? data[0] : data[1];
        const config = (0,pick/* default */.Z)(tradeTransaction.transaction, [
            'to',
            'data',
            'value',
            'from'
        ]);
        const config_ = {
            ...config,
            gas: await web3.eth.estimateGas(config).catch((error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
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
        chainId,
        json_stable_stringify_default()(trade),
        gasConfig
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTradeCallback.ts




function openocean_useTradeCallback_useTradeCallback(tradeComputed, gasConfig) {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [tradeState, setTradeState] = (0,react.useState)({
        type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
    });
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !tradeComputed?.trade_) return null;
        return {
            from: account,
            ...(0,pick/* default */.Z)(tradeComputed.trade_, [
                'to',
                'data',
                'value'
            ])
        };
    }, [
        account,
        tradeComputed
    ]);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        // validate config
        if (!account || !config) {
            setTradeState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // compose transaction config
        const config_ = {
            ...config,
            gas: await web3.eth.estimateGas(config).catch((error)=>{
                setTradeState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
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
        chainId,
        json_stable_stringify_default()(config)
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts + 1 modules
var useExchangeProxyContract = __webpack_require__(90475);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeCallback.ts













function trader_useTradeCallback_useTradeCallback(provider, tradeComputed, gasConfig, allowedSlippage) {
    // trade context
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(provider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // create trade computed
    const isNativeTokenWrapper_ = (0,helpers/* isNativeTokenWrapper */.fU)(tradeComputed ?? null);
    const tradeComputedForUniswapV2Like = context?.IS_UNISWAP_V2_LIKE && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForUniswapV3Like = context?.IS_UNISWAP_V3_LIKE && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForZRX = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForBalancer = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForDODO = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForBancor = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForOpenOcean = !isNativeTokenWrapper_ ? tradeComputed : null;
    // uniswap like providers
    const uniswapV2Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV2Like, provider, gasConfig, allowedSlippage);
    const uniswapV3Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV3Like, provider, gasConfig, allowedSlippage);
    // balancer
    const exchangeProxyContract = (0,useExchangeProxyContract/* useExchangeProxyContract */.L)(targetChainId);
    const balancer = balancer_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER ? tradeComputedForBalancer : null, exchangeProxyContract, allowedSlippage, gasConfig);
    // other providers
    const zrx = useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.ZRX */.z4.ZRX ? tradeComputedForZRX : null, gasConfig);
    const dodo = dodo_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.DODO */.z4.DODO ? tradeComputedForDODO : null, gasConfig);
    const bancor = bancor_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.BANCOR */.z4.BANCOR ? tradeComputedForBancor : null, gasConfig);
    const openocean = openocean_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN ? tradeComputedForOpenOcean : null, gasConfig);
    // the trade is an ETH-WETH pair
    const nativeTokenWrapper = useTradeCallback(tradeComputed, gasConfig);
    if (isNativeTokenWrapper_) return nativeTokenWrapper;
    // handle trades by various provider
    switch(provider){
        case public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3:
            return uniswapV3Like;
        case public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.MDEX */.z4.MDEX:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.ZRX */.z4.ZRX:
            return zrx;
        case public_api_src/* TradeProvider.BALANCER */.z4.BALANCER:
            return balancer;
        case public_api_src/* TradeProvider.DODO */.z4.DODO:
            return dodo;
        case public_api_src/* TradeProvider.BANCOR */.z4.BANCOR:
            return bancor;
        case public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN:
            return uniswapV2Like;
        case public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN:
            return openocean;
        default:
            if (provider) (0,esm/* unreachable */.t1)(provider);
            return [];
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(78216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(80579);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var evm_pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../icons/general/Info.tsx
var Info = __webpack_require__(76520);
;// CONCATENATED MODULE: ../icons/general/Retweet.tsx


const RetweetIcon = (0,icons_utils/* createPaletteAwareIcon */.t)('RetweetIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M23.77 15.6699C23.478 15.3769 23.003 15.3769 22.71 15.6699L20.49 17.8899V7.64991C20.49 5.58191 18.807 3.89991 16.74 3.89991H10.89C10.476 3.89991 10.14 4.23591 10.14 4.64991C10.14 5.06391 10.476 5.39991 10.89 5.39991H16.74C17.98 5.39991 18.99 6.40991 18.99 7.64991V17.8899L16.77 15.6699C16.477 15.3769 16.002 15.3769 15.71 15.6699C15.418 15.9629 15.416 16.4379 15.71 16.7299L19.21 20.2299C19.355 20.3769 19.547 20.4499 19.74 20.4499C19.933 20.4499 20.123 20.3779 20.27 20.2299L23.77 16.7299C24.064 16.4379 24.064 15.9629 23.77 15.6699ZM13.11 18.9499H7.26001C6.02001 18.9499 5.01001 17.9399 5.01001 16.6999V6.45991L7.23001 8.67991C7.37801 8.82691 7.57001 8.89991 7.76201 8.89991C7.95401 8.89991 8.146 8.82691 8.292 8.67991C8.585 8.38691 8.585 7.91191 8.292 7.61991L4.79201 4.11991C4.499 3.82591 4.02401 3.82591 3.73201 4.11991L0.232005 7.61991C-0.0619949 7.91191 -0.0619949 8.38691 0.232005 8.67991C0.526005 8.97291 0.999005 8.97291 1.29201 8.67991L3.51201 6.45991V16.6999C3.51201 18.7679 5.19501 20.4499 7.26201 20.4499H13.112C13.526 20.4499 13.862 20.1139 13.862 19.6999C13.862 19.2859 13.525 18.9499 13.112 18.9499H13.11Z",
        fill: "#0F1419"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5a.74.74 0 0 0 .53.22.74.74 0 0 0 .53-.22l3.5-3.5a.747.747 0 0 0 0-1.06Zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5h-.002Z",
        fill: "#D9D9D9"
    })
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/Cram.tsx


const CramIcon = (0,icons_utils/* createIcon */.I)('CramIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".2",
            d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "m13.637 6.644-4.633 4.633 2.453 1.635L10.367 17 15 12.367l-2.453-1.635 1.09-4.088Z",
            fill: "#FF5F5F"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/ConfirmDialog.tsx




















const ConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        section: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& > p': {
                fontSize: 16,
                lineHeight: '22px',
                color: theme.palette.text.primary,
                display: 'flex',
                alignItems: 'center',
                margin: '12px 0'
            }
        },
        tokenIcon: {
            width: 24,
            height: 24,
            marginRight: 4
        },
        alert: {
            backgroundColor: entry/* MaskColorVar.twitterInfoBackground.alpha */.ZN.twitterInfoBackground.alpha(0.1),
            color: entry/* MaskColorVar.twitterInfo */.ZN.twitterInfo,
            marginTop: 12,
            fontSize: 12,
            lineHeight: '16px',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        error: {
            backgroundColor: entry/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.1),
            color: isDashboard ? entry/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
            marginTop: 12,
            fontSize: 12,
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            padding: 16
        },
        action: {
            marginRight: 0
        },
        alertIcon: {
            color: entry/* MaskColorVar.twitterInfo */.ZN.twitterInfo
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: isDashboard ? 8 : 24,
            height: 'auto'
        },
        content: {
            marginLeft: 40,
            marginRight: 40,
            paddingLeft: 0,
            paddingRight: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        actions: {
            marginLeft: 40,
            marginRight: 40,
            paddingLeft: 0,
            paddingRight: 0,
            paddingBottom: 40
        },
        accept: {
            backgroundColor: isDashboard ? entry/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '20px',
            padding: '10px 16px',
            borderRadius: 20
        },
        warning: {
            color: `${isDashboard ? entry/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main}!important`
        }
    })
);
const PERCENT_DENOMINATOR = 10000;
const MIN_SLIPPAGE = 150;
const MAX_SLIPPAGE = 1000;
function ConfirmDialogUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { open , trade , wallet , inputToken , outputToken , onConfirm , onClose , gas , gasPrice  } = props;
    const [cacheTrade, setCacheTrade] = (0,react.useState)();
    const [priceUpdated, setPriceUpdated] = (0,react.useState)(false);
    const currentSlippage = (0,src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const classes = (0,entry/* useStylesExtends */.Bc)(ConfirmDialog_useStyles({
        isDashboard
    }), props);
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { setTemporarySlippage , temporarySlippage  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const [priceReversed, setPriceReversed] = (0,react.useState)(false);
    // #region detect price changing
    const [executionPrice, setExecutionPrice] = (0,react.useState)(cacheTrade?.executionPrice);
    (0,react.useEffect)(()=>{
        if (open) setExecutionPrice(undefined);
    }, [
        open
    ]);
    // #endregion
    // #region gas price
    const nativeToken = (0,utils_token/* createNativeToken */.$c)(chainId);
    const tokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(chainId);
    const gasFee = (0,react.useMemo)(()=>{
        return gas && gasPrice ? (0,base_src/* multipliedBy */.$q)(gasPrice, gas).integerValue().toFixed() : '0';
    }, [
        gas,
        gasPrice
    ]);
    const feeValueUSD = (0,react.useMemo)(()=>gasFee ? new (bignumber_default())((0,formatter/* formatWeiToEther */.yp)(gasFee).times(tokenPrice).toFixed(2)) : '0'
    , [
        gasFee,
        tokenPrice
    ]);
    // #endregion
    const staled = !!(executionPrice && !executionPrice.isEqualTo(cacheTrade?.executionPrice ?? 0));
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(cacheTrade?.priceImpact);
    const alertTip = (0,react.useMemo)(()=>{
        if (currentSlippage >= MIN_SLIPPAGE && currentSlippage < MAX_SLIPPAGE) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            className: classes.alert,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* InfoIcon */.s, {
                className: classes.alertIcon
            }),
            severity: "info",
            children: currentSlippage < MIN_SLIPPAGE ? t('plugin_trader_confirm_tips') : t('plugin_trader_price_impact_warning_tips')
        });
    }, [
        currentSlippage
    ]);
    const onAccept = (0,react.useCallback)(()=>{
        setPriceUpdated(false);
        setCacheTrade(trade);
        setExecutionPrice(trade.executionPrice);
    }, [
        trade
    ]);
    const onConfirmPriceImpact = (0,react.useCallback)(()=>{
        if (!cacheTrade?.priceImpact) return;
        setTemporarySlippage(new (bignumber_default())(cacheTrade?.priceImpact.multipliedBy(PERCENT_DENOMINATOR).toFixed(0)).toNumber());
    }, [
        cacheTrade?.priceImpact
    ]);
    // #region update cache trade and price updated state
    (0,useUpdateEffect/* default */.Z)(()=>{
        // when dialog has been closed, reset state
        if (!open) {
            setPriceUpdated(false);
            setCacheTrade(undefined);
            return;
        }
        if (!cacheTrade) {
            setCacheTrade(trade);
        } else if (!priceUpdated && !cacheTrade.outputAmount.isEqualTo(trade.outputAmount)) {
            setPriceUpdated(true);
        }
    }, [
        open,
        trade,
        cacheTrade
    ]);
    // #endregion
    if (!cacheTrade) return null;
    const { inputAmount , outputAmount  } = cacheTrade;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: "Confirm Swap",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_red_packet_nft_account_name')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        "(",
                                        wallet?.name,
                                        ")",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: wallet?.address ?? '',
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        }),
                                        wallet?.address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                            style: {
                                                color: 'inherit',
                                                height: 20
                                            },
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: (0,evm_pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, wallet.address),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                style: {
                                                    marginLeft: 5
                                                },
                                                size: 20
                                            })
                                        }) : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_confirm_from')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    component: "div",
                                    display: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                            classes: {
                                                icon: classes.tokenIcon
                                            },
                                            address: inputToken.address,
                                            logoURI: inputToken.logoURI
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                            value: inputAmount.toFixed() ?? '0',
                                            decimals: inputToken.decimals,
                                            symbol: inputToken.symbol,
                                            significant: 4,
                                            formatter: formatter/* formatBalance */.az
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_confirm_to')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    component: "div",
                                    display: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                            classes: {
                                                icon: classes.tokenIcon
                                            },
                                            address: outputToken.address,
                                            logoURI: outputToken.logoURI
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                            value: outputAmount.toFixed() ?? '0',
                                            decimals: outputToken.decimals,
                                            symbol: outputToken.symbol,
                                            significant: 4,
                                            formatter: formatter/* formatBalance */.az
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_tab_price')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        priceReversed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "1 ",
                                                        outputToken.symbol
                                                    ]
                                                }),
                                                ' = ',
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: (0,formatter/* formatBalance */.az)(inputAmount.dividedBy(outputAmount).shiftedBy(outputToken.decimals - inputToken.decimals).shiftedBy(inputToken.decimals).integerValue(), inputToken.decimals, 6)
                                                }),
                                                inputToken.symbol
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "1 ",
                                                        inputToken.symbol
                                                    ]
                                                }),
                                                ' = ',
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        (0,formatter/* formatBalance */.az)(outputAmount.dividedBy(inputAmount).shiftedBy(inputToken.decimals - outputToken.decimals).shiftedBy(outputToken.decimals).integerValue(), outputToken.decimals, 6),
                                                        ' ',
                                                        outputToken.symbol
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RetweetIcon, {
                                            style: {
                                                marginLeft: 4,
                                                cursor: 'pointer'
                                            },
                                            onClick: ()=>setPriceReversed((x)=>!x
                                                )
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_price_impact')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: isGreatThanSlippageSetting || temporarySlippage ? classes.warning : undefined,
                                    children: cacheTrade?.priceImpact?.isLessThan(Trader_constants/* ONE_BIPS */.IS) ? '<0.01%' : (0,formatter/* formatPercentage */.rl)(cacheTrade.priceImpact)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_confirm_max_price_slippage')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: temporarySlippage ? classes.warning : undefined,
                                    children: [
                                        (temporarySlippage ?? currentSlippage) / 100,
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_confirm_minimum_received')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: temporarySlippage ? classes.warning : undefined,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                        value: cacheTrade.minimumReceived,
                                        decimals: outputToken.decimals,
                                        significant: 6,
                                        symbol: outputToken.symbol,
                                        formatter: formatter/* formatBalance */.az
                                    })
                                })
                            ]
                        }),
                        !(0,base_src/* isZero */.Fr)(gasFee) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_trader_gas')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                            value: gasFee,
                                            decimals: nativeToken.decimals ?? 0,
                                            significant: 4,
                                            symbol: nativeToken.symbol,
                                            formatter: formatter/* formatBalance */.az
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            children: t('plugin_trader_tx_cost_usd', {
                                                usd: feeValueUSD
                                            })
                                        })
                                    ]
                                })
                            ]
                        }) : null,
                        priceUpdated ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                            classes: {
                                action: classes.action
                            },
                            className: classes.error,
                            severity: "error",
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CramIcon, {
                                className: classes.alertIcon
                            }),
                            action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "contained",
                                color: "error",
                                className: classes.accept,
                                onClick: onAccept,
                                children: t('plugin_trader_accept')
                            }),
                            children: t('plugin_trader_price_updated')
                        }) : alertTip
                    ]
                }),
                !priceUpdated ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                    className: classes.actions,
                    children: isGreatThanSlippageSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "error",
                        size: "large",
                        variant: "contained",
                        fullWidth: true,
                        disabled: staled,
                        onClick: onConfirmPriceImpact,
                        children: t('plugin_trader_confirm_price_impact', {
                            percent: (0,formatter/* formatPercentage */.rl)(cacheTrade.priceImpact)
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "primary",
                        size: "large",
                        variant: "contained",
                        fullWidth: true,
                        disabled: staled,
                        onClick: onConfirm,
                        children: t('plugin_trader_confirm_swap')
                    })
                }) : null
            ]
        })
    });
}
function ConfirmDialog(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialogUI, {
        ...props
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(85364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(78234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(52795);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(18881);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SlippageSlider.tsx





function SlippageSlider(props) {
    const { value: value1 = Trader_constants/* SLIPPAGE_DEFAULT */.Nd , onChange  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
        value: value1,
        getAriaValueText: (v)=>(0,formatter/* formatPercentage */.rl)((0,helpers/* toBips */.SG)(v))
        ,
        step: 10,
        min: Trader_constants/* SLIPPAGE_MIN */.Bq,
        max: Trader_constants/* SLIPPAGE_MAX */.Q9,
        onChange: (_, value)=>onChange(value)
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(15004);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.14.4/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(74368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.29.0_react@18.0.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7631);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.29.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(53753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Gas1559Settings.tsx



















const Gas1559Settings_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        option: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            border: `1px solid ${entry/* MaskColorVar.twitterLine */.ZN.twitterLine}`,
            minHeight: 80,
            minWidth: 80,
            cursor: 'pointer'
        },
        optionTitle: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        pointer: {
            width: 9,
            height: 9,
            borderRadius: 4.5,
            backgroundColor: entry/* MaskColorVar.twitterSecond */.ZN.twitterSecond,
            marginBottom: 8
        },
        selectedPointer: {
            backgroundColor: theme.palette.primary.main
        },
        selected: {
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
        },
        label: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500,
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        unit: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            marginLeft: '0.5em'
        },
        form: {
            marginTop: 32
        },
        textField: {
            width: '100%'
        },
        textFieldInput: {
            borderRadius: 6
        },
        input: {
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        },
        heading: {
            flex: 1,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '22px'
        },
        summary: {
            padding: 0
        },
        accordion: {
            backgroundColor: 'inherit'
        },
        accordingTitle: {
            fontSize: 14,
            lineHeight: '20px'
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            height: 48,
            borderRadius: isDashboard ? 8 : 24
        },
        cancelButton: {
            backgroundColor: !isDashboard ? theme.palette.background.default : undefined,
            color: !isDashboard ? theme.palette.text.strong : undefined,
            '&:hover': {
                backgroundColor: !isDashboard ? `${theme.palette.background.default}!important` : undefined
            }
        }
    })
);
function defineSchema(t) {
    return lib.z.object({
        maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_fee_absence')),
        maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence'))
    }).refine((data)=>(0,base_src/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas)
    , {
        message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
        path: [
            'maxFeePerGas'
        ]
    });
}
const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const Gas1559Settings = /*#__PURE__*/ (0,react.memo)(({ onCancel , onSave: onSave_ , gasConfig , onSaveSlippage  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = Gas1559Settings_useStyles({
        isDashboard
    });
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selected, setOption] = (0,react.useState)(1);
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        return Wallet_messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
    }, [
        chainId
    ]);
    // #region Gas Options
    const options = (0,react.useMemo)(()=>[
            {
                title: t('plugin_trader_gas_setting_instant'),
                content: gasOptions?.low
            },
            {
                title: t('plugin_trader_gas_setting_medium'),
                content: gasOptions?.medium
            },
            {
                title: t('plugin_trader_gas_setting_high'),
                content: gasOptions?.high
            }, 
        ]
    , [
        gasOptions
    ]);
    const schema = defineSchema(t);
    const { control , handleSubmit , setValue , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        }
    });
    const [maxPriorityFeePerGas1, maxFeePerGas1] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas'
    ]);
    // #region These are additional form rules that need to be prompted for but do not affect the validation of the form
    const maxPriorFeeHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas1, gasOptions?.low?.suggestedMaxPriorityFeePerGas ?? 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas1, (0,base_src/* multipliedBy */.$q)(gasOptions?.high?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas1,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas1, gasOptions?.estimatedBaseFee ?? 0)) return t('wallet_transfer_error_max_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas1, (0,base_src/* multipliedBy */.$q)(gasOptions?.high?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
        return undefined;
    }, [
        maxFeePerGas1,
        gasOptions,
        getGasOptionsLoading
    ]);
    // #endregion
    // #region Confirm function
    const handleConfirm = (0,react.useCallback)((data)=>{
        onSave_({
            maxPriorityFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0)),
            maxFeePerGas: (0,web3_utils_lib.toHex)((0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0))
        });
    }, [
        onSave_
    ]);
    const onSave = handleSubmit(handleConfirm);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selected === null) return;
        const { content  } = options[selected];
        setValue('maxPriorityFeePerGas', (0,base_src/* toFixed */.FH)(content?.suggestedMaxPriorityFeePerGas));
        setValue('maxFeePerGas', (0,base_src/* toFixed */.FH)(content?.suggestedMaxFeePerGas));
    }, [
        selected,
        setValue,
        options
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        if (!(gasConfig?.maxPriorityFeePerGas && gasConfig?.maxFeePerGas)) return;
        const { maxFeePerGas , maxPriorityFeePerGas  } = gasConfig;
        setOption(null);
        setValue('maxFeePerGas', (0,web3_utils_lib.fromWei)(maxFeePerGas.toString(), 'gwei'));
        setValue('maxPriorityFeePerGas', (0,web3_utils_lib.fromWei)(maxPriorityFeePerGas.toString(), 'gwei'));
    }, [
        gasConfig,
        setValue
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                className: classes.accordion,
                elevation: 0,
                defaultExpanded: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                        className: classes.summary,
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.heading,
                                children: t('popups_wallet_gas_price')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accordingTitle,
                                children: selected !== null ? t('plugin_trader_gas_option', {
                                    option: options[selected].title,
                                    value: new (bignumber_default())(options[selected].content?.suggestedMaxFeePerGas ?? 0).toFixed(2)
                                }) : null
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                        style: {
                            paddingLeft: 0,
                            paddingRight: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    children: options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classnames_default()(classes.option, selected === index ? classes.selected : undefined),
                                            onClick: ()=>setOption(index)
                                            ,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                                    className: classnames_default()(classes.pointer, selected === index ? classes.selectedPointer : undefined)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.optionTitle,
                                                    children: option.title
                                                })
                                            ]
                                        }, index)
                                    )
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                    className: classes.form,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.label,
                                            children: [
                                                t('popups_wallet_gas_fee_settings_max_priority_fee'),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    component: "span",
                                                    className: classes.unit,
                                                    children: [
                                                        "(",
                                                        t('wallet_transfer_gwei'),
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                            control: control,
                                            render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    ...field,
                                                    className: classes.textField,
                                                    onChange: (e)=>{
                                                        setOption(null);
                                                        field.onChange(e);
                                                    },
                                                    error: !!errors.maxPriorityFeePerGas?.message || !!maxPriorFeeHelperText,
                                                    helperText: errors.maxPriorityFeePerGas?.message || maxPriorFeeHelperText,
                                                    inputProps: {
                                                        pattern: '^[0-9]*[.,]?[0-9]*$',
                                                        className: classes.input,
                                                        'aria-autocomplete': 'none'
                                                    },
                                                    InputProps: {
                                                        classes: {
                                                            root: classes.textFieldInput
                                                        }
                                                    },
                                                    FormHelperTextProps: {
                                                        style: {
                                                            marginLeft: 0
                                                        }
                                                    }
                                                })
                                            ,
                                            name: "maxPriorityFeePerGas"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.label,
                                            children: [
                                                t('popups_wallet_gas_fee_settings_max_fee'),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    component: "span",
                                                    className: classes.unit,
                                                    children: [
                                                        "(",
                                                        t('wallet_transfer_gwei'),
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                            control: control,
                                            render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    ...field,
                                                    error: !!errors.maxFeePerGas?.message || !!maxFeeGasHelperText,
                                                    helperText: errors.maxFeePerGas?.message || maxFeeGasHelperText,
                                                    className: classes.textField,
                                                    onChange: (e)=>{
                                                        setOption(null);
                                                        field.onChange(e);
                                                    },
                                                    inputProps: {
                                                        pattern: '^[0-9]*[.,]?[0-9]*$',
                                                        className: classes.input,
                                                        'aria-autocomplete': 'none'
                                                    },
                                                    InputProps: {
                                                        classes: {
                                                            root: classes.textFieldInput
                                                        }
                                                    },
                                                    FormHelperTextProps: {
                                                        style: {
                                                            marginLeft: 0
                                                        }
                                                    }
                                                })
                                            ,
                                            name: "maxFeePerGas"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        color: "secondary",
                        variant: "contained",
                        className: classnames_default()(classes.button, classes.cancelButton),
                        onClick: onCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        color: "primary",
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>{
                            onSave();
                            onSaveSlippage();
                        },
                        disabled: !(0,isEmpty/* default */.Z)(errors),
                        children: t('save')
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/GasPrior1559Settings.tsx















const GasPrior1559Settings_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
        },
        pointer: {
            width: 9,
            height: 9,
            borderRadius: 4.5,
            backgroundColor: entry/* MaskColorVar.twitterSecond */.ZN.twitterSecond
        },
        optionTitle: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        option: {
            padding: '16px 14px',
            borderRadius: 4,
            border: `1px solid ${entry/* MaskColorVar.twitterLine */.ZN.twitterLine}`,
            cursor: 'pointer'
        },
        selectedPointer: {
            backgroundColor: theme.palette.primary.main
        },
        selected: {
            borderColor: theme.palette.primary.main
        },
        gasPrice: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center'
        },
        textFieldInput: {
            borderRadius: 6
        },
        input: {
            maxWidth: 42,
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        },
        cost: {
            fontSize: 12,
            lineHeight: '16px',
            color: entry/* MaskColorVar.twitterSecond */.ZN.twitterSecond
        },
        heading: {
            flex: 1,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '22px'
        },
        summary: {
            padding: 0
        },
        accordion: {
            backgroundColor: 'inherit'
        },
        accordingTitle: {
            fontSize: 14,
            lineHeight: '20px'
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            height: 48,
            borderRadius: isDashboard ? 8 : 24
        },
        cancelButton: {
            backgroundColor: !isDashboard ? theme.palette.background.default : undefined,
            color: !isDashboard ? theme.palette.text.strong : undefined,
            '&:hover': {
                backgroundColor: !isDashboard ? `${theme.palette.background.default}!important` : undefined
            }
        }
    })
);
const GasPrior1559Settings = /*#__PURE__*/ (0,react.memo)(({ onCancel , onSave: onSave_ , gasConfig , onSaveSlippage  })=>{
    const chainId = (0,useChainId/* useChainId */.xx)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = GasPrior1559Settings_useStyles({
        isDashboard
    });
    const { t  } = (0,utils/* useI18N */.M1)();
    const [selected, setOption] = (0,react.useState)(1);
    const [customGasPrice, setCustomGasPrice] = (0,react.useState)('0');
    // #region Get gas options from debank
    const { value: gasOptions  } = (0,useAsync/* default */.Z)(async ()=>{
        const response = await Wallet_messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
        if (!response) return {
            slow: 0,
            standard: 0,
            fast: 0
        };
        return {
            slow: response.data.slow.price,
            standard: response.data.normal.price,
            fast: response.data.fast.price
        };
    }, [
        chainId
    ]);
    // #endregion
    const options = (0,react.useMemo)(()=>[
            {
                title: t('plugin_trader_gas_setting_standard'),
                gasPrice: gasOptions?.standard ?? 0
            },
            {
                title: t('plugin_trader_gas_setting_fast'),
                gasPrice: gasOptions?.fast ?? 0
            },
            {
                title: t('plugin_trader_gas_setting_custom'),
                isCustom: true,
                gasPrice: customGasPrice ? (0,formatter/* formatGweiToWei */.nU)(customGasPrice) : 0
            }, 
        ]
    , [
        gasOptions,
        customGasPrice
    ]);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken?.chainId);
    // #region Confirm function
    const handleConfirm = (0,react.useCallback)(()=>{
        onSave_({
            gasPrice: (0,web3_utils_lib.toHex)(new (bignumber_default())(options[selected].gasPrice).toString())
        });
    }, [
        selected,
        options
    ]);
    // #endregion
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (!(gasConfig?.gasPrice && gasOptions)) return;
        const gasPrice = new (bignumber_default())(gasConfig.gasPrice);
        if (gasPrice.isEqualTo(gasOptions.standard)) setOption(0);
        else if (gasPrice.isEqualTo(gasOptions.fast)) setOption(1);
        else {
            setCustomGasPrice((0,formatter/* formatWeiToGwei */.f1)(gasPrice).toString());
            setOption(2);
        }
    }, [
        gasConfig,
        gasOptions
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                className: classes.accordion,
                elevation: 0,
                defaultExpanded: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                        className: classes.summary,
                        expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.heading,
                                children: t('popups_wallet_gas_price')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.accordingTitle,
                                children: t('plugin_trader_gas_option', {
                                    option: options[selected].title,
                                    value: (0,formatter/* formatWeiToGwei */.f1)(options[selected].gasPrice ?? 0).toString()
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                        style: {
                            paddingLeft: 0,
                            paddingRight: 0
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.container,
                            children: options.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    onClick: ()=>setOption(index)
                                    ,
                                    className: classnames_default()(classes.option, selected === index ? classes.selected : undefined),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 1.5,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.optionTitle,
                                                    children: option.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                                    className: classnames_default()(classes.pointer, selected === index ? classes.selectedPointer : undefined)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.gasPrice,
                                            component: "div",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    component: "span",
                                                    marginRight: 1,
                                                    children: option.isCustom ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                        value: customGasPrice,
                                                        onChange: (e)=>setCustomGasPrice(e.target.value)
                                                        ,
                                                        inputProps: {
                                                            pattern: '^[0-9]*[.,]?[0-9]*$',
                                                            className: classes.input,
                                                            'aria-autocomplete': 'none'
                                                        },
                                                        InputProps: {
                                                            classes: {
                                                                root: classes.textFieldInput
                                                            }
                                                        }
                                                    }) : (0,formatter/* formatWeiToGwei */.f1)(option.gasPrice ?? 0).toString()
                                                }),
                                                t('wallet_transfer_gwei')
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.cost,
                                            marginTop: option.isCustom ? 4 : 6,
                                            children: t('popups_wallet_gas_fee_settings_usd', {
                                                usd: (0,formatter/* formatWeiToEther */.yp)(option.gasPrice).times(nativeTokenPrice).times(21000).toPrecision(3)
                                            })
                                        })
                                    ]
                                }, index)
                            )
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        color: "secondary",
                        variant: "contained",
                        className: classnames_default()(classes.button, classes.cancelButton),
                        onClick: onCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        color: "primary",
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>{
                            handleConfirm();
                            onSaveSlippage();
                        },
                        disabled: selected === 2 && !Number(customGasPrice),
                        children: t('save')
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80526);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SettingsDialog.tsx















const SettingsDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2)
        },
        heading: {
            flex: 1,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: '22px'
        },
        summary: {
            padding: 0
        },
        accordion: {
            backgroundColor: 'inherit'
        },
        slippage: {
            display: 'flex',
            paddingLeft: 10,
            paddingRight: 10
        },
        alert: {
            backgroundColor: entry/* MaskColorVar.twitterInfoBackground.alpha */.ZN.twitterInfoBackground.alpha(0.1),
            color: entry/* MaskColorVar.redMain */.ZN.redMain,
            marginTop: 12,
            fontSize: 12,
            lineHeight: '16px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center'
        },
        warningIcon: {
            color: entry/* MaskColorVar.redMain */.ZN.redMain
        }
    };
});
const WARNING_SLIPPAGE = 1000;
function SettingsDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(SettingsDialog_useStyles(), props);
    const slippage = (0,src/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [gasConfig1, setGasConfig] = (0,react.useState)();
    const [unconfirmedSlippage, setUnconfirmedSlippage] = (0,react.useState)(slippage);
    const [warningVisible, setWarningVisible] = (0,react.useState)(unconfirmedSlippage >= WARNING_SLIPPAGE);
    // #region remote controlled dialog
    const { open , setDialog , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
    // #endregion
    (0,react.useEffect)(()=>{
        setUnconfirmedSlippage(slippage);
    }, [
        slippage
    ]);
    (0,react.useEffect)(()=>{
        setWarningVisible(unconfirmedSlippage >= WARNING_SLIPPAGE);
    }, [
        unconfirmedSlippage
    ]);
    const onSaveSlippage = (0,react.useCallback)(()=>{
        settings/* currentSlippageSettings.value */.It.value = unconfirmedSlippage;
    }, [
        unconfirmedSlippage
    ]);
    const onSubmit = (0,react.useCallback)((gasConfig)=>{
        setGasConfig(gasConfig);
        setDialog({
            open: false,
            gasConfig
        });
    }, [
        closeDialog
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: closeDialog,
        title: t('plugin_trader_slippage_tolerance'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                    className: classes.accordion,
                    elevation: 0,
                    defaultExpanded: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                            className: classes.summary,
                            expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.heading,
                                    children: t('plugin_trader_max_slippage')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        unconfirmedSlippage / 100,
                                        "%"
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                            className: classes.slippage,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SlippageSlider, {
                                value: unconfirmedSlippage,
                                onChange: setUnconfirmedSlippage
                            })
                        }),
                        warningVisible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                            className: classes.alert,
                            severity: "info",
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* InfoIcon */.s, {
                                className: classes.warningIcon
                            }),
                            children: t('plugin_trader_slippage_warning')
                        }) : null
                    ]
                }),
                (0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Gas1559Settings, {
                    onCancel: closeDialog,
                    onSave: onSubmit,
                    gasConfig: gasConfig1,
                    onSaveSlippage: onSaveSlippage
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(GasPrior1559Settings, {
                    onCancel: closeDialog,
                    onSave: onSubmit,
                    gasConfig: gasConfig1,
                    onSaveSlippage: onSaveSlippage
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useSortedTrades.ts







function useSortedTrades(traders, chainId, gasPrice) {
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)(chainId);
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(chainId);
    const { tradeState: [{ outputToken  }] ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const outputTokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, outputToken?.address.toLowerCase());
    return (0,react.useMemo)(()=>{
        if (outputToken && nativeToken && (outputTokenPrice || nativeTokenPrice)) {
            return traders.map((trade)=>{
                if (gasPrice && trade.value && (0,base_src/* isGreaterThan */.T1)(trade.value.outputAmount, Trader_constants/* MINIMUM_AMOUNT */.rI) && trade.gas.value) {
                    const gasFee = (0,base_src/* multipliedBy */.$q)(gasPrice, trade.gas.value).integerValue().toFixed();
                    const gasFeeUSD = new (bignumber_default())((0,formatter/* formatBalance */.az)(gasFee ?? 0, nativeToken?.decimals)).times(nativeTokenPrice);
                    const finalPrice = new (bignumber_default())((0,formatter/* formatBalance */.az)(trade.value.outputAmount, outputToken.decimals, 2)).times(outputToken.type !== types/* EthereumTokenType.Native */.Dr.Native ? outputTokenPrice : nativeTokenPrice).minus(gasFeeUSD);
                    return {
                        ...trade,
                        finalPrice
                    };
                }
                return trade;
            }).filter(({ value  })=>!!value && !value.outputAmount.isZero()
            ).sort(({ finalPrice: finalPriceA , gas: { value: gasA  } , value: valueA  }, { finalPrice: finalPriceB , gas: { value: gasB  } , value: valueB  })=>{
                let a = finalPriceA;
                let b = finalPriceB;
                if (!gasA && gasB) {
                    return 1 // B goes first
                    ;
                } else if (gasA && !gasB) {
                    return -1 // A goes first
                    ;
                } else if (!gasA && !gasB) {
                    a = valueA?.outputAmount;
                    b = valueB?.outputAmount;
                }
                if ((0,base_src/* isGreaterThan */.T1)(a ?? 0, b ?? 0)) return -1;
                if ((0,base_src/* isLessThan */.FI)(a ?? 0, b ?? 0)) return 1;
                return 0;
            });
        }
        return traders.filter(({ value  })=>!!value && !value.outputAmount.isZero()
        ).sort(({ value: a  }, { value: b  })=>{
            if (a?.outputAmount.isGreaterThan(b?.outputAmount ?? 0)) return -1;
            if (a?.outputAmount.isLessThan(b?.outputAmount ?? 0)) return 1;
            return 0;
        });
    }, [
        traders,
        outputToken,
        gasPrice,
        outputTokenPrice,
        nativeTokenPrice,
        nativeToken
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBalance.ts
var useBalance = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useUpdateBalance.ts



function useUpdateBalance(chainId) {
    const currentAccount = (0,useAccount/* useAccount */.m)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const { tradeState: [{ inputToken , outputToken  }, dispatchTradeStore] ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const balance = (0,useBalance/* useBalance */.K)(chainId);
    (0,react.useEffect)(()=>{
        if (currentAccount) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: '0'
        });
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: '0'
        });
        return;
    }, [
        currentAccount
    ]);
    (0,react.useEffect)(()=>{
        if (!currentAccount) return;
        const value = inputToken?.type === types/* EthereumTokenType.Native */.Dr.Native ? balance.value : '0';
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: value || '0'
        });
    }, [
        currentAccount,
        inputToken?.type,
        balance.value
    ]);
    (0,react.useEffect)(()=>{
        if (!currentAccount) return;
        const value = outputToken?.type === types/* EthereumTokenType.Native */.Dr.Native || (0,address/* isSameAddress */.Wr)(outputToken?.address, NATIVE_TOKEN_ADDRESS) ? balance.value : '0';
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: value || '0'
        });
    }, [
        currentAccount,
        outputToken?.type,
        outputToken?.address,
        balance.value
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx

























const Trader_useStyles = (0,entry/* makeStyles */.ZL)()(()=>{
    return {
        root: {
            margin: 'auto'
        }
    };
});
function Trader(props) {
    const { defaultOutputCoin , coin: coin1 , chainId: targetChainId , defaultInputCoin  } = props;
    const [focusedTrade, setFocusTrade] = (0,react.useState)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId ?? currentChainId;
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const classes = (0,entry/* useStylesExtends */.Bc)(Trader_useStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { setTargetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // #region trade state
    const { tradeState: [{ inputToken , outputToken , inputTokenBalance , outputTokenBalance , inputAmount  }, dispatchTradeStore, ] , allTradeComputed , setTemporarySlippage ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    // #endregion
    // #region gas config and gas price
    const { gasPrice , gasConfig , setGasConfig  } = (0,useGasConfig/* useGasConfig */.c)(chainId);
    // #endregion
    // #region if chain id be changed, update input token be native token
    (0,react.useEffect)(()=>{
        if (!chainIdValid) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
            token: chainId === types/* ChainId.Mainnet */.a_.Mainnet && coin1?.is_mirrored ? tokens/* UST */.bi[types/* ChainId.Mainnet */.a_.Mainnet] : (0,utils_token/* createNativeToken */.$c)(chainId)
        });
    }, [
        chainId,
        chainIdValid
    ]);
    // #endregion
    const updateTradingCoin = (0,react.useCallback)((type, coin)=>{
        if (!coin?.contract_address) return;
        dispatchTradeStore({
            type,
            token: (0,utils_token/* createERC20Token */.wY)(chainId, coin.contract_address, coin.decimals, coin.name, coin.symbol)
        });
    }, [
        chainId
    ]);
    (0,react.useEffect)(()=>{
        updateTradingCoin(useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN, defaultInputCoin);
    }, [
        updateTradingCoin,
        defaultInputCoin
    ]);
    (0,react.useEffect)(()=>{
        updateTradingCoin(useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN, defaultOutputCoin);
    }, [
        updateTradingCoin,
        defaultOutputCoin
    ]);
    // #region if coin be changed, update output token
    (0,react.useEffect)(()=>{
        if (!coin1 || currentChainId !== targetChainId) return;
        // if coin be native token and input token also be native token, reset it
        if ((0,address/* isSameAddress */.Wr)(coin1.contract_address, NATIVE_TOKEN_ADDRESS) && inputToken?.type === types/* EthereumTokenType.Native */.Dr.Native && coin1.symbol === inputToken.symbol) {
            dispatchTradeStore({
                type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
                token: undefined
            });
        }
        if (!outputToken) {
            updateTradingCoin(useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN, coin1);
        }
    }, [
        coin1,
        NATIVE_TOKEN_ADDRESS,
        inputToken,
        outputToken,
        currentChainId,
        targetChainId,
        updateTradingCoin
    ]);
    (0,react.useEffect)(()=>{
        if (!defaultInputCoin) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
            token: defaultInputCoin.contract_address ? (0,utils_token/* createERC20Token */.wY)(chainId, defaultInputCoin.contract_address, defaultInputCoin.decimals, defaultInputCoin.name, defaultInputCoin.symbol) : undefined
        });
    }, [
        defaultInputCoin,
        chainId
    ]);
    const onInputAmountChange = (0,react.useCallback)((amount)=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_AMOUNT */.AF.UPDATE_INPUT_AMOUNT,
            amount
        });
    }, []);
    // #region update balance
    const { value: inputTokenBalance_ , loading: loadingInputTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((0,address/* isSameAddress */.Wr)(inputToken?.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : inputToken?.type ?? types/* EthereumTokenType.Native */.Dr.Native, inputToken?.address ?? '', chainId);
    const { value: outputTokenBalance_ , loading: loadingOutputTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((0,address/* isSameAddress */.Wr)(outputToken?.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : outputToken?.type ?? types/* EthereumTokenType.Native */.Dr.Native, outputToken?.address ?? '', chainId);
    (0,react.useEffect)(()=>{
        if (!inputToken || inputToken.type === types/* EthereumTokenType.Native */.Dr.Native || !inputTokenBalance_ || loadingInputTokenBalance) {
            return;
        }
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: inputTokenBalance_
        });
    }, [
        inputToken,
        inputTokenBalance_,
        loadingInputTokenBalance
    ]);
    (0,react.useEffect)(()=>{
        if (!outputToken || outputToken.type === types/* EthereumTokenType.Native */.Dr.Native || !outputTokenBalance_ || loadingOutputTokenBalance) {
            return;
        }
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: outputTokenBalance_
        });
    }, [
        outputToken,
        outputTokenBalance_,
        loadingOutputTokenBalance
    ]);
    // #region select token
    const excludeTokens = [
        inputToken,
        outputToken
    ].filter(Boolean).map((x)=>x?.address
    );
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onTokenChipClick = (0,react.useCallback)(async (panelType)=>{
        const picked = await pickToken({
            chainId,
            disableNativeToken: false,
            selectedTokens: excludeTokens
        });
        if (picked) {
            dispatchTradeStore({
                type: panelType === Trader_types/* TokenPanelType.Input */.Vo.Input ? useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN : useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN,
                token: picked
            });
        }
    }, [
        excludeTokens.join(),
        chainId
    ]);
    // #endregion
    // #region blocking (swap)
    const [tradeState, tradeCallback, resetTradeCallback] = trader_useTradeCallback_useTradeCallback(focusedTrade?.provider, focusedTrade?.value, gasConfig);
    const [openConfirmDialog, setOpenConfirmDialog] = (0,react.useState)(false);
    const onConfirmDialogConfirm = (0,react.useCallback)(async ()=>{
        setOpenConfirmDialog(false);
        await (0,esm/* delay */.gw)(100);
        await tradeCallback();
        setTemporarySlippage(undefined);
    }, [
        tradeCallback
    ]);
    const onConfirmDialogClose = (0,react.useCallback)(()=>{
        setOpenConfirmDialog(false);
        setTemporarySlippage(undefined);
    }, []);
    // #endregion
    // #region the click handler of switch arrow
    const onSwitchToken = (0,react.useCallback)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
            token: outputToken
        });
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN,
            token: inputToken
        });
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_AMOUNT */.AF.UPDATE_INPUT_AMOUNT,
            amount: ''
        });
    }, [
        dispatchTradeStore,
        inputToken,
        outputToken,
        inputAmount
    ]);
    // #region remote controlled transaction dialog
    const cashTag = (0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
    const shareText = focusedTrade?.value && inputToken && outputToken ? [
        `I just swapped ${(0,formatter/* formatBalance */.az)(focusedTrade.value.inputAmount, inputToken.decimals, 6)} ${cashTag}${inputToken.symbol} for ${(0,formatter/* formatBalance */.az)(focusedTrade.value.outputAmount, outputToken.decimals, 6)} ${cashTag}${outputToken.symbol}.${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? `Follow @${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')} (mask.io) to swap cryptocurrencies on ${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? 'Twitter' : 'Facebook'}.` : ''}`,
        '#mask_io', 
    ].join('\n') : '';
    // #endregion
    // #region close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.transactionDialogUpdated */.R$.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (tradeState?.type === types/* TransactionStateType.HASH */.n$.HASH) {
            dispatchTradeStore({
                type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_AMOUNT */.AF.UPDATE_INPUT_AMOUNT,
                amount: ''
            });
        }
        resetTradeCallback();
    });
    // #endregion
    // #region open the transaction dialog
    (0,react.useEffect)(()=>{
        if (tradeState?.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareText,
            state: tradeState
        });
    }, [
        tradeState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    // #region swap callback
    const onSwap = (0,react.useCallback)(()=>{
        // no need to open the confirmation dialog if it (un)wraps the native token
        if (focusedTrade?.value && (0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value)) tradeCallback();
        else setOpenConfirmDialog(true);
    }, [
        focusedTrade,
        tradeCallback
    ]);
    // #endregion
    // #region The trades sort by best price (Estimate received * price - Gas fee * native token price)
    const sortedAllTradeComputed = useSortedTrades(allTradeComputed, chainId, gasPrice);
    // #endregion
    // Query the balance of native tokens on target chain
    useUpdateBalance(chainId);
    // #endregion
    // #region reset focused trade when chainId, inputToken, outputToken, inputAmount be changed
    (0,useUpdateEffect/* default */.Z)(()=>{
        setFocusTrade(undefined);
    }, [
        targetChainId,
        inputToken,
        outputToken,
        inputAmount
    ]);
    // #endregion
    // #region if chain id be changed, reset the chain id on context, and reset gas config
    (0,react.useEffect)(()=>{
        if (!chainId) return;
        setTargetChainId(chainId);
        setGasConfig(undefined);
    }, [
        chainId
    ]);
    // #endregion
    // #region if target chain id be changed, reset output token
    (0,useUpdateEffect/* default */.Z)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN,
            token: undefined
        });
    }, [
        targetChainId
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        return messages/* PluginTraderMessages.swapSettingsUpdated.on */.A.swapSettingsUpdated.on((event)=>{
            if (event.open) return;
            if (event.gasConfig) setGasConfig(event.gasConfig);
        });
    }, []);
    (0,useUnmount/* default */.Z)(()=>{
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN,
            token: undefined
        });
    });
    // #region if trade has been changed, update the focused trade
    (0,useUpdateEffect/* default */.Z)(()=>{
        setFocusTrade((prev)=>{
            const target = allTradeComputed.find((x)=>prev?.provider === x.provider
            );
            return target ?? prev;
        });
    }, [
        allTradeComputed
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeForm, {
                wallet: wallet,
                trades: sortedAllTradeComputed,
                inputToken: inputToken,
                outputToken: outputToken,
                inputTokenBalance: inputTokenBalance,
                outputTokenBalance: outputTokenBalance,
                inputAmount: inputAmount,
                onInputAmountChange: onInputAmountChange,
                onTokenChipClick: onTokenChipClick,
                focusedTrade: focusedTrade,
                onFocusedTradeChange: (trade)=>setFocusTrade(trade)
                ,
                onSwap: onSwap,
                gasPrice: gasPrice,
                onSwitch: onSwitchToken
            }),
            focusedTrade?.value && !(0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value) && inputToken && outputToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                wallet: wallet,
                open: openConfirmDialog,
                trade: focusedTrade.value,
                gas: focusedTrade.gas.value,
                gasPrice: gasPrice,
                inputToken: inputToken,
                outputToken: outputToken,
                onConfirm: onConfirmDialogConfirm,
                onClose: onConfirmDialogClose
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsDialog, {})
        ]
    });
}


/***/ }),

/***/ 15574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useGasConfig)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73570);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80526);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66394);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84797);





function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const { value: gasPrice1  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        try {
            if (gasConfig) {
                return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isEIP1559Supported */ .U1)(chainId) ? gasConfig.maxFeePerGas : gasConfig.gasPrice) ?? 0).toString();
            } else {
                if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .isEIP1559Supported */ .U1)(chainId)) {
                    const response = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getEstimateGasFees */ .V.getEstimateGasFees(chainId);
                    const maxFeePerGas = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .formatGweiToWei */ .nU)(response?.medium?.suggestedMaxFeePerGas ?? 0).toFixed(0);
                    const maxPriorityFeePerGas = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .formatGweiToWei */ .nU)(response?.medium?.suggestedMaxPriorityFeePerGas ?? 0).toFixed(0);
                    setGasConfig({
                        maxFeePerGas,
                        maxPriorityFeePerGas
                    });
                    return maxFeePerGas;
                } else {
                    const response = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getGasPriceDictFromDeBank */ .V.getGasPriceDictFromDeBank(chainId);
                    const gasPrice = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(response?.data.normal.price ?? 0).toString();
                    setGasConfig({
                        gasPrice
                    });
                    return gasPrice;
                }
            }
        } catch  {
            return '0';
        }
    }, [
        chainId,
        gasConfig
    ]);
    return {
        gasPrice: gasPrice1,
        gasConfig,
        setGasConfig
    };
}


/***/ })

}]);