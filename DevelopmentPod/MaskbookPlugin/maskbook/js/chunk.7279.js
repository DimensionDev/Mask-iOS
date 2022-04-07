"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7279],{

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 71252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gy": () => (/* binding */ computeHmac),
  "JQ": () => (/* binding */ sha256)
});

// UNUSED EXPORTS: ripemd160, sha512

// EXTERNAL MODULE: ../../node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var lib_hash = __webpack_require__(45370);
var hash_default = /*#__PURE__*/__webpack_require__.n(lib_hash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.5.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(61115);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/types.js
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.4.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/_version.js
const version = "sha2/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js


//const _ripemd160 = _hash.ripemd160;




const logger = new logger_lib_esm/* Logger */.Yd(version);
function ripemd160(data) {
    return "0x" + (hash.ripemd160().update(arrayify(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_default().sha256().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash.sha512().update(arrayify(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_default().hmac((hash_default())[algorithm], (0,lib_esm/* arrayify */.lE)(key)).update((0,lib_esm/* arrayify */.lE)(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ 85396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keccak256": () => (/* binding */ keccak256),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "sha256": () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71252);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);






const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
const Zeros = "0000000000000000000000000000000000000000000000000000000000000000";
function _pack(type, value, isArray) {
    switch (type) {
        case "address":
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
        case "string":
            return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(value);
        case "bytes":
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
        case "bool":
            value = (value ? "0x01" : "0x00");
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value);
    }
    let match = type.match(regexNumber);
    if (match) {
        //let signed = (match[1] === "int")
        let size = parseInt(match[2] || "256");
        if ((match[2] && String(size) !== match[2]) || (size % 8 !== 0) || size === 0 || size > 256) {
            throw new Error("invalid number type - " + type);
        }
        if (isArray) {
            size = 256;
        }
        value = _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__/* .BigNumber.from */ .O$.from(value).toTwos(size);
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.zeroPad)(value, size / 8);
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        if (String(size) !== match[1] || size === 0 || size > 32) {
            throw new Error("invalid bytes type - " + type);
        }
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)(value).byteLength !== size) {
            throw new Error("invalid value for " + type);
        }
        if (isArray) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.arrayify)((value + Zeros).substring(0, 66));
        }
        return value;
    }
    match = type.match(regexArray);
    if (match && Array.isArray(value)) {
        const baseType = match[1];
        const count = parseInt(match[2] || String(value.length));
        if (count != value.length) {
            throw new Error("invalid value for " + type);
        }
        const result = [];
        value.forEach(function (value) {
            result.push(_pack(baseType, value, true));
        });
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.concat)(result);
    }
    throw new Error("invalid type - " + type);
}
// @TODO: Array Enum
function pack(types, values) {
    if (types.length != values.length) {
        throw new Error("type/value count mismatch");
    }
    const tight = [];
    types.forEach(function (type, index) {
        tight.push(_pack(type, values[index]));
    });
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.hexlify)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__.concat)(tight));
}
function keccak256(types, values) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)(pack(types, values));
}
function sha256(types, values) {
    return (0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__/* .sha256 */ .JQ)(pack(types, values));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.1_react@18.0.0-rc.2/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(56247);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 33856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 17974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 81152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Trader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(82406);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(11315);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(42624);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useGasConfig.ts





function useGasConfig(chainId) {
    const [gasConfig, setGasConfig] = (0,react.useState)();
    const { value: gasPrice1  } = (0,useAsync/* default */.Z)(async ()=>{
        try {
            if (gasConfig) {
                var ref;
                return new (bignumber_default())((ref = (0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? gasConfig.maxFeePerGas : gasConfig.gasPrice) !== null && ref !== void 0 ? ref : 0).toString();
            } else {
                if ((0,chainDetailed/* isEIP1559Supported */.U1)(chainId)) {
                    var ref1, ref2;
                    const response = await messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
                    var ref3;
                    const maxFeePerGas = (0,formatter/* formatGweiToWei */.nU)((ref3 = response === null || response === void 0 ? void 0 : (ref1 = response.medium) === null || ref1 === void 0 ? void 0 : ref1.suggestedMaxFeePerGas) !== null && ref3 !== void 0 ? ref3 : 0).toFixed(0);
                    var ref4;
                    const maxPriorityFeePerGas = (0,formatter/* formatGweiToWei */.nU)((ref4 = response === null || response === void 0 ? void 0 : (ref2 = response.medium) === null || ref2 === void 0 ? void 0 : ref2.suggestedMaxPriorityFeePerGas) !== null && ref4 !== void 0 ? ref4 : 0).toFixed(0);
                    setGasConfig({
                        maxFeePerGas,
                        maxPriorityFeePerGas
                    });
                    return maxFeePerGas;
                } else {
                    const response = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
                    var _price;
                    const gasPrice = new (bignumber_default())((_price = response === null || response === void 0 ? void 0 : response.data.normal.price) !== null && _price !== void 0 ? _price : 0).toString();
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

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var Trader_types = __webpack_require__(41391);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/chipClasses.js
var chipClasses = __webpack_require__(39235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(15672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(70644);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(65327);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/InputTokenPanel.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        filledInput: {
            borderRadius: 12,
            padding: 12,
            background: isDashboard ? src/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2 : theme.palette.background.default,
            border: `1px solid ${isDashboard ? src/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
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
            color: isDashboard ? src/* MaskColorVar.normalText */.ZN.normalText : theme.palette.text.secondary
        },
        selectedTokenChip: {
            borderRadius: '22px!important',
            height: 'auto',
            backgroundColor: isDashboard ? src/* MaskColorVar.input */.ZN.input : theme.palette.background.input,
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
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
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
    const tokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, !(0,address/* isZeroAddress */.uO)(token === null || token === void 0 ? void 0 : token.address) ? token === null || token === void 0 ? void 0 : token.address.toLowerCase() : undefined);
    const tokenValueUSD = (0,react.useMemo)(()=>amount ? new (bignumber_default())(amount).times(tokenPrice).toFixed(2) : '0'
    , [
        amount,
        tokenPrice
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
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
                                            decimals: token === null || token === void 0 ? void 0 : token.decimals,
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
                                    onAmountChange((0,formatter/* formatBalance */.az)(balance, token === null || token === void 0 ? void 0 : token.decimals, 6));
                                }
                            })
                        ]
                    })
                ]
            }),
            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.price,
                children: [
                    "≈ ",
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
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(79230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(87409);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(72753);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(26618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(21957);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(61274);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(48476);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(84686);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(75228);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(95198);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useGreatThanSlippageSetting.ts





const useGreatThanSlippageSetting = (priceImpact)=>{
    const slippageSetting = (0,dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const { temporarySlippage  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const slippage = temporarySlippage || slippageSetting;
    return (0,react.useMemo)(()=>(0,base_src/* isGreaterThan */.T1)((0,base_src/* multipliedBy */.$q)(priceImpact !== null && priceImpact !== void 0 ? priceImpact : 0, 10000).toFixed(0).replace(/\.?0+$/, ''), slippage)
    , [
        priceImpact,
        slippage
    ]);
};

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderInfo.tsx



















const TraderInfo_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        trade: {
            marginBottom: 8,
            padding: 10,
            backgroundColor: `${isDashboard ? src/* MaskColorVar.input */.ZN.input : theme.palette.background.paper}!important`,
            border: `1px solid ${isDashboard ? src/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
            borderRadius: 8,
            cursor: 'pointer',
            position: 'relative'
        },
        warning: {
            borderColor: isDashboard ? src/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main
        },
        warningText: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            position: 'absolute',
            top: 13.5,
            right: 10,
            color: isDashboard ? src/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
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
            color: isDashboard ? src/* MaskColorVar.normalText */.ZN.normalText : theme.palette.text.secondary,
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
    var ref, ref1, ref2, ref3, ref4;
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TraderInfo_useStyles({
        isDashboard
    });
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // #region refresh pools
    (0,useAsyncRetry/* default */.Z)(async ()=>{
        // force update balancer's pools each time user enters into the swap tab
        if (trade.provider === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER) await Trader_messages/* PluginTraderRPC.updatePools */.V.updatePools(true, targetChainId);
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
        (ref = trade.gas) === null || ref === void 0 ? void 0 : ref.value,
        gasPrice
    ]);
    const feeValueUSD = (0,react.useMemo)(()=>gasFee ? new (bignumber_default())((0,formatter/* formatWeiToEther */.yp)(gasFee).times(tokenPrice).toFixed(2)) : '0'
    , [
        gasFee,
        tokenPrice
    ]);
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting((ref1 = trade.value) === null || ref1 === void 0 ? void 0 : ref1.priceImpact);
    if (trade.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.trade,
        display: "flex",
        justifyContent: "center",
        style: {
            padding: 24
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
    }));
    if (!trade.value) return null;
    var ref5, _decimals;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        fullWidth: true,
        type: "text",
        variant: "filled",
        onClick: onClick,
        value: (0,formatter/* formatBalance */.az)((ref5 = (ref2 = trade.value) === null || ref2 === void 0 ? void 0 : ref2.outputAmount) !== null && ref5 !== void 0 ? ref5 : 0, (ref3 = trade.value) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.outputToken) === null || ref4 === void 0 ? void 0 : ref4.decimals, 2),
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
                                    decimals: (_decimals = nativeToken.decimals) !== null && _decimals !== void 0 ? _decimals : 0,
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
    }, trade.provider));
});

// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(9946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Tune.js
var Tune = __webpack_require__(6788);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var Trader_constants = __webpack_require__(43545);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(66792);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(43558);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeApproveComputed.ts






function useTradeApproveComputed(trade, provider, token) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(provider);
    return (0,react.useMemo)(()=>{
        return {
            approveToken: (token === null || token === void 0 ? void 0 : token.type) === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? (0,utils_token/* createERC20Token */.wY)(chainId, token.address, token.decimals, token.name, token.symbol) : null,
            approveAmount: trade ? trade.inputAmount : base_src/* ZERO */.xE,
            approveAddress: (()=>{
                if ((context === null || context === void 0 ? void 0 : context.TYPE) === public_api_src/* TradeProvider.ZRX */.z4.ZRX) return (trade === null || trade === void 0 ? void 0 : trade.trade_) ? trade.trade_.allowanceTarget : '';
                if ((context === null || context === void 0 ? void 0 : context.TYPE) === public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN) return (trade === null || trade === void 0 ? void 0 : trade.trade_) ? (trade === null || trade === void 0 ? void 0 : trade.trade_).to : '';
                var ref;
                return (ref = context === null || context === void 0 ? void 0 : context.ROUTER_CONTRACT_ADDRESS) !== null && ref !== void 0 ? ref : '';
            })()
        };
    }, [
        chainId,
        trade,
        token,
        context
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/esm/ArrowDownward.js
var ArrowDownward = __webpack_require__(24391);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/esm/HelpOutline.js
var HelpOutline = __webpack_require__(37904);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(13484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(1433);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeForm.tsx































const TradeForm_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard , isPopup  })=>{
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
            backgroundColor: isDashboard ? src/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2 : theme.palette.background.default,
            border: `1px solid ${isDashboard ? src/* MaskColorVar.lineLight */.ZN.lineLight : theme.palette.divider}`,
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
            backgroundColor: isDashboard ? src/* MaskColorVar.lightBackground */.ZN.lightBackground : theme.palette.background.default,
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
            backgroundColor: isDashboard ? src/* MaskColorVar.input */.ZN.input : theme.palette.background.input,
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
            backgroundColor: isDashboard ? src/* MaskColorVar.mainBackground */.ZN.mainBackground : theme.palette.background.paper,
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
    var ref8;
    const userSelected = (0,react.useRef)(false);
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const isPopup = (0,shared_base_src/* isPopupPage */.N6)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TradeForm_useStyles({
        isDashboard,
        isPopup
    });
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const [isExpand, setIsExpand] = (0,react.useState)(false);
    var ref1;
    // #region approve token
    const { approveToken , approveAmount , approveAddress  } = useTradeApproveComputed((ref1 = focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) !== null && ref1 !== void 0 ? ref1 : null, focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.provider, inputToken);
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
    const { openDialog: openSwapSettingDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
    // #endregion
    // #region form controls
    const inputTokenTradeAmount = (0,base_src/* rightShift */.pu)(inputAmount || '0', inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals);
    // #endregion
    // #region UI logic
    // validate form return a message if an error exists
    const validationMessage = (0,react.useMemo)(()=>{
        if (inputTokenTradeAmount.isZero()) return t('plugin_trader_error_amount_absence');
        if ((0,base_src/* isLessThan */.FI)(inputAmount, Trader_constants/* MINIMUM_AMOUNT */.rI)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if (!inputToken || !outputToken) return t('plugin_trader_error_amount_absence');
        if (!trades.length) return t('plugin_trader_error_insufficient_lp');
        if (inputTokenBalanceAmount.isLessThan(inputTokenTradeAmount)) return t('plugin_trader_error_insufficient_balance', {
            symbol: inputToken === null || inputToken === void 0 ? void 0 : inputToken.symbol
        });
        if ((focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) && !focusedTrade.value.outputAmount) return t('plugin_trader_no_enough_liquidity');
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
        if (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) {
            var ref, ref4, ref5;
            if ((0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value)) {
                var ref6;
                return ((ref6 = focusedTrade.value.trade_) === null || ref6 === void 0 ? void 0 : ref6.isWrap) ? t('plugin_trader_wrap') : t('plugin_trader_unwrap');
            }
            var ref7;
            return t('plugin_trader_swap_amount_symbol', {
                amount: (0,formatter/* formatBalance */.az)((ref7 = focusedTrade === null || focusedTrade === void 0 ? void 0 : (ref = focusedTrade.value) === null || ref === void 0 ? void 0 : ref.outputAmount) !== null && ref7 !== void 0 ? ref7 : 0, focusedTrade === null || focusedTrade === void 0 ? void 0 : (ref4 = focusedTrade.value) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.outputToken) === null || ref5 === void 0 ? void 0 : ref5.decimals, 2),
                symbol: outputToken === null || outputToken === void 0 ? void 0 : outputToken.symbol
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
        setIsExpand(false);
    }, [
        chainId,
        inputToken,
        inputAmount,
        outputToken
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if ((bestTrade === null || bestTrade === void 0 ? void 0 : bestTrade.value) && !userSelected.current) {
            onFocusedTradeChange(bestTrade);
        }
    }, [
        bestTrade
    ]);
    const firstTraderInfo = (0,react.useMemo)(()=>{
        if (!bestTrade) return null;
        if (isExpand) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: bestTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                if (!userSelected.current) userSelected.current = true;
                onFocusedTradeChange(bestTrade);
            },
            isFocus: bestTrade.provider === (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.provider),
            isBest: true
        }));
        else if (focusedTrade) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderInfo, {
            trade: focusedTrade,
            gasPrice: gasPrice,
            onClick: ()=>{
                onFocusedTradeChange(focusedTrade);
            },
            isFocus: true,
            isBest: bestTrade.provider === focusedTrade.provider
        }));
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
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(focusedTrade === null || focusedTrade === void 0 ? void 0 : (ref8 = focusedTrade.value) === null || ref8 === void 0 ? void 0 : ref8.priceImpact);
    var ref2, ref3;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
                                                decimals: outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals,
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
                                                children: trades.slice(1).map((trade)=>{
                                                    /*#__PURE__*/ return (0,jsx_runtime.jsx)(TraderInfo, {
                                                        trade: trade,
                                                        onClick: ()=>{
                                                            if (!userSelected.current) userSelected.current = true;
                                                            onFocusedTradeChange(trade);
                                                        },
                                                        isFocus: trade.provider === (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.provider),
                                                        gasPrice: gasPrice
                                                    }, trade.provider);
                                                })
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
                                            onClick: ()=>setIsExpand(!isExpand)
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
                                token: !(0,helpers/* isNativeTokenWrapper */.fU)((ref2 = focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) !== null && ref2 !== void 0 ? ref2 : null) && (approveToken === null || approveToken === void 0 ? void 0 : approveToken.type) === types/* EthereumTokenType.ERC20 */.Dr.ERC20 && !!approveAmount.toNumber() ? approveToken : undefined,
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
                                                symbol: approveToken === null || approveToken === void 0 ? void 0 : approveToken.symbol
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
                                                provider: (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.provider) ? (0,pipes/* resolveTradeProviderName */.uM)(focusedTrade.provider) : '',
                                                symbol: approveToken === null || approveToken === void 0 ? void 0 : approveToken.symbol
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
                                render: (disable)=>{
                                    var ref;
                                    return isGreatThanSlippageSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        fullWidth: true,
                                        variant: "contained",
                                        color: "error",
                                        disabled: (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.loading) || !(focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) || disable,
                                        classes: {
                                            root: classes.button,
                                            disabled: classes.disabledButton
                                        },
                                        onClick: onSwap,
                                        children: t('plugin_trader_confirm_price_impact', {
                                            percent: (0,formatter/* formatPercentage */.rl)((ref3 = focusedTrade === null || focusedTrade === void 0 ? void 0 : (ref = focusedTrade.value) === null || ref === void 0 ? void 0 : ref.priceImpact) !== null && ref3 !== void 0 ? ref3 : 0)
                                        })
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        fullWidth: true,
                                        variant: "contained",
                                        disabled: (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.loading) || !(focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) || !!validationMessage || disable,
                                        classes: {
                                            root: classes.button,
                                            disabled: classes.disabledButton
                                        },
                                        color: "primary",
                                        onClick: onSwap,
                                        children: validationMessage || nativeWrapMessage
                                    });
                                }
                            })
                        })
                    }) : null
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(89987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUnmount.js
var useUnmount = __webpack_require__(23573);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(74926);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts + 1 modules
var useWrappedEtherContract = __webpack_require__(16025);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15030);
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
            var ref;
            if (!(trade === null || trade === void 0 ? void 0 : (ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.isNativeTokenWrapper)) return;
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
var useWeb3 = __webpack_require__(90495);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/0x/constants.ts
var _0x_constants = __webpack_require__(22072);
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
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_) || !_0x_constants/* SUPPORTED_CHAIN_ID_LIST.includes */.E.includes(chainId)) return null;
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
var useTradeParameters = __webpack_require__(9799);
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
                    var ref;
                    if ((ref = error) === null || ref === void 0 ? void 0 : ref.code) {
                        var ref1;
                        const error_ = new Error(((ref1 = error) === null || ref1 === void 0 ? void 0 : ref1.message) === 'Unable to add more requests.' ? 'Unable to add more requests.' : 'Transaction rejected.');
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
var useTradeAmount = __webpack_require__(17237);
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
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
        const [data, err] = await Trader_messages/* PluginTraderRPC.swapTransactionBancor */.V.swapTransactionBancor(trade);
        if (err) {
            var ref;
            const error = new Error(((ref = err.error.messages) === null || ref === void 0 ? void 0 : ref[0]) || 'Unknown Error');
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
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
var useExchangeProxyContract = __webpack_require__(17092);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeCallback.ts













function trader_useTradeCallback_useTradeCallback(provider, tradeComputed, gasConfig, allowedSlippage) {
    // trade context
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(provider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // create trade computed
    const isNativeTokenWrapper_ = (0,helpers/* isNativeTokenWrapper */.fU)(tradeComputed !== null && tradeComputed !== void 0 ? tradeComputed : null);
    const tradeComputedForUniswapV2Like = (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForUniswapV3Like = (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE) && !isNativeTokenWrapper_ ? tradeComputed : null;
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.2/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(40415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(39402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(72212);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var evm_pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../icons/general/Info.tsx
var Info = __webpack_require__(17974);
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





















const ConfirmDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
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
            backgroundColor: src/* MaskColorVar.twitterInfoBackground.alpha */.ZN.twitterInfoBackground.alpha(0.1),
            color: src/* MaskColorVar.twitterInfo */.ZN.twitterInfo,
            marginTop: 12,
            fontSize: 12,
            lineHeight: '16px',
            padding: '12px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        error: {
            backgroundColor: src/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.1),
            color: isDashboard ? src/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
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
            color: src/* MaskColorVar.twitterInfo */.ZN.twitterInfo
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
            backgroundColor: isDashboard ? src/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main,
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '20px',
            padding: '10px 16px',
            borderRadius: 20
        },
        warning: {
            color: `${isDashboard ? src/* MaskColorVar.redMain */.ZN.redMain : theme.palette.error.main}!important`
        }
    })
);
const PERCENT_DENOMINATOR = 10000;
const MIN_SLIPPAGE = 150;
const MAX_SLIPPAGE = 1000;
function ConfirmDialogUI(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { open , trade , wallet , inputToken , outputToken , onConfirm , onClose , gas , gasPrice  } = props;
    const [cacheTrade, setCacheTrade] = (0,react.useState)();
    const [priceUpdated, setPriceUpdated] = (0,react.useState)(false);
    const currentSlippage = (0,dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const classes = (0,src/* useStylesExtends */.Bc)(ConfirmDialog_useStyles({
        isDashboard
    }), props);
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { setTemporarySlippage , temporarySlippage  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const [priceReversed, setPriceReversed] = (0,react.useState)(false);
    // #region detect price changing
    const [executionPrice, setExecutionPrice] = (0,react.useState)(cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.executionPrice);
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
    var ref1;
    // #endregion
    const staled = !!(executionPrice && !executionPrice.isEqualTo((ref1 = cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.executionPrice) !== null && ref1 !== void 0 ? ref1 : 0));
    const isGreatThanSlippageSetting = useGreatThanSlippageSetting(cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.priceImpact);
    const alertTip = (0,react.useMemo)(()=>{
        if (currentSlippage >= MIN_SLIPPAGE && currentSlippage < MAX_SLIPPAGE) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            className: classes.alert,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* InfoIcon */.s, {
                className: classes.alertIcon
            }),
            severity: "info",
            children: currentSlippage < MIN_SLIPPAGE ? t('plugin_trader_confirm_tips') : t('plugin_trader_price_impact_warning_tips')
        }));
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
        if (!(cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.priceImpact)) return;
        setTemporarySlippage(new (bignumber_default())(cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.priceImpact.multipliedBy(PERCENT_DENOMINATOR).toFixed(0)).toNumber());
    }, [
        cacheTrade === null || cacheTrade === void 0 ? void 0 : cacheTrade.priceImpact
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
    var ref2, ref3, ref4, _decimals;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
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
                                        wallet === null || wallet === void 0 ? void 0 : wallet.name,
                                        ")",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: (ref2 = wallet === null || wallet === void 0 ? void 0 : wallet.address) !== null && ref2 !== void 0 ? ref2 : '',
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        }),
                                        (wallet === null || wallet === void 0 ? void 0 : wallet.address) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
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
                                            value: (ref3 = inputAmount.toFixed()) !== null && ref3 !== void 0 ? ref3 : '0',
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
                                            value: (ref4 = outputAmount.toFixed()) !== null && ref4 !== void 0 ? ref4 : '0',
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
                                    children: (cacheTrade === null || cacheTrade === void 0 ? void 0 : (ref = cacheTrade.priceImpact) === null || ref === void 0 ? void 0 : ref.isLessThan(Trader_constants/* ONE_BIPS */.IS)) ? '<0.01%' : (0,formatter/* formatPercentage */.rl)(cacheTrade.priceImpact)
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
                                        (temporarySlippage !== null && temporarySlippage !== void 0 ? temporarySlippage : currentSlippage) / 100,
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
                                            decimals: (_decimals = nativeToken.decimals) !== null && _decimals !== void 0 ? _decimals : 0,
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
    }));
}
function ConfirmDialog(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialogUI, {
        ...props
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(61872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(23198);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(70279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(49378);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SlippageSlider.tsx





function SlippageSlider(props) {
    const { value: value1 = Trader_constants/* SLIPPAGE_DEFAULT */.Nd , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
        value: value1,
        getAriaValueText: (v)=>(0,formatter/* formatPercentage */.rl)((0,helpers/* toBips */.SG)(v))
        ,
        step: 10,
        min: Trader_constants/* SLIPPAGE_MIN */.Bq,
        max: Trader_constants/* SLIPPAGE_MAX */.Q9,
        onChange: (_, value)=>onChange(value)
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(6827);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.13.4/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(56382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.1_react@18.0.0-rc.2/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(56247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(75426);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Gas1559Settings.tsx



















const Gas1559Settings_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        option: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            border: `1px solid ${src/* MaskColorVar.twitterLine */.ZN.twitterLine}`,
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
            backgroundColor: src/* MaskColorVar.twitterSecond */.ZN.twitterSecond,
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
    var ref5;
    const { t  } = (0,utils/* useI18N */.M1)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = Gas1559Settings_useStyles({
        isDashboard
    });
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selected, setOption] = (0,react.useState)(1);
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,useAsync/* default */.Z)(async ()=>{
        return messages/* WalletRPC.getEstimateGasFees */.V.getEstimateGasFees(chainId);
    }, [
        chainId
    ]);
    // #region Gas Options
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('plugin_trader_gas_setting_instant'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.low
            },
            {
                title: t('plugin_trader_gas_setting_medium'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.medium
            },
            {
                title: t('plugin_trader_gas_setting_high'),
                content: gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.high
            }, 
        ];
    }, [
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
        var ref, ref2;
        if (getGasOptionsLoading) return undefined;
        var ref3;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas1, (ref3 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.low) === null || ref === void 0 ? void 0 : ref.suggestedMaxPriorityFeePerGas) !== null && ref3 !== void 0 ? ref3 : 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        var ref4;
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas1, (0,base_src/* multipliedBy */.$q)((ref4 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref2 = gasOptions.high) === null || ref2 === void 0 ? void 0 : ref2.suggestedMaxPriorityFeePerGas) !== null && ref4 !== void 0 ? ref4 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas1,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        var ref;
        if (getGasOptionsLoading) return undefined;
        var ref6;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas1, (ref6 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.estimatedBaseFee) !== null && ref6 !== void 0 ? ref6 : 0)) return t('wallet_transfer_error_max_fee_too_low');
        var ref7;
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas1, (0,base_src/* multipliedBy */.$q)((ref7 = gasOptions === null || gasOptions === void 0 ? void 0 : (ref = gasOptions.high) === null || ref === void 0 ? void 0 : ref.suggestedMaxFeePerGas) !== null && ref7 !== void 0 ? ref7 : 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
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
        setValue('maxPriorityFeePerGas', (0,base_src/* toFixed */.FH)(content === null || content === void 0 ? void 0 : content.suggestedMaxPriorityFeePerGas));
        setValue('maxFeePerGas', (0,base_src/* toFixed */.FH)(content === null || content === void 0 ? void 0 : content.suggestedMaxFeePerGas));
    }, [
        selected,
        setValue,
        options
    ]);
    // #endregion
    (0,react.useEffect)(()=>{
        if (!((gasConfig === null || gasConfig === void 0 ? void 0 : gasConfig.maxPriorityFeePerGas) && (gasConfig === null || gasConfig === void 0 ? void 0 : gasConfig.maxFeePerGas))) return;
        const { maxFeePerGas , maxPriorityFeePerGas  } = gasConfig;
        setOption(null);
        setValue('maxFeePerGas', (0,web3_utils_lib.fromWei)(maxFeePerGas.toString(), 'gwei'));
        setValue('maxPriorityFeePerGas', (0,web3_utils_lib.fromWei)(maxPriorityFeePerGas.toString(), 'gwei'));
    }, [
        gasConfig,
        setValue
    ]);
    var ref1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                    value: new (bignumber_default())((ref1 = (ref5 = options[selected].content) === null || ref5 === void 0 ? void 0 : ref5.suggestedMaxFeePerGas) !== null && ref1 !== void 0 ? ref1 : 0).toFixed(2)
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
                                            render: ({ field  })=>{
                                                var ref, ref8;
                                                /*#__PURE__*/ return (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    ...field,
                                                    className: classes.textField,
                                                    onChange: (e)=>{
                                                        setOption(null);
                                                        field.onChange(e);
                                                    },
                                                    error: !!((ref = errors.maxPriorityFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxPriorFeeHelperText,
                                                    helperText: ((ref8 = errors.maxPriorityFeePerGas) === null || ref8 === void 0 ? void 0 : ref8.message) || maxPriorFeeHelperText,
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
                                                });
                                            },
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
                                            render: ({ field  })=>{
                                                var ref, ref9;
                                                /*#__PURE__*/ return (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    ...field,
                                                    error: !!((ref = errors.maxFeePerGas) === null || ref === void 0 ? void 0 : ref.message) || !!maxFeeGasHelperText,
                                                    helperText: ((ref9 = errors.maxFeePerGas) === null || ref9 === void 0 ? void 0 : ref9.message) || maxFeeGasHelperText,
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
                                                });
                                            },
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
    }));
});

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(80955);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/GasPrior1559Settings.tsx















const GasPrior1559Settings_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        container: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20
        },
        pointer: {
            width: 9,
            height: 9,
            borderRadius: 4.5,
            backgroundColor: src/* MaskColorVar.twitterSecond */.ZN.twitterSecond
        },
        optionTitle: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        option: {
            padding: '16px 14px',
            borderRadius: 4,
            border: `1px solid ${src/* MaskColorVar.twitterLine */.ZN.twitterLine}`,
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
            color: src/* MaskColorVar.twitterSecond */.ZN.twitterSecond
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
        const response = await messages/* WalletRPC.getGasPriceDictFromDeBank */.V.getGasPriceDictFromDeBank(chainId);
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
    var ref, ref1;
    // #endregion
    const options = (0,react.useMemo)(()=>{
        return [
            {
                title: t('plugin_trader_gas_setting_standard'),
                gasPrice: (ref = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.standard) !== null && ref !== void 0 ? ref : 0
            },
            {
                title: t('plugin_trader_gas_setting_fast'),
                gasPrice: (ref1 = gasOptions === null || gasOptions === void 0 ? void 0 : gasOptions.fast) !== null && ref1 !== void 0 ? ref1 : 0
            },
            {
                title: t('plugin_trader_gas_setting_custom'),
                isCustom: true,
                gasPrice: customGasPrice ? (0,formatter/* formatGweiToWei */.nU)(customGasPrice) : 0
            }, 
        ];
    }, [
        gasOptions,
        customGasPrice
    ]);
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
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
        if (!((gasConfig === null || gasConfig === void 0 ? void 0 : gasConfig.gasPrice) && gasOptions)) return;
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
    var _gasPrice, _gasPrice1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                    value: (0,formatter/* formatWeiToGwei */.f1)((_gasPrice = options[selected].gasPrice) !== null && _gasPrice !== void 0 ? _gasPrice : 0).toString()
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
                                                    }) : (0,formatter/* formatWeiToGwei */.f1)((_gasPrice1 = option.gasPrice) !== null && _gasPrice1 !== void 0 ? _gasPrice1 : 0).toString()
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
    }));
});

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SettingsDialog.tsx















const SettingsDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
            backgroundColor: src/* MaskColorVar.twitterInfoBackground.alpha */.ZN.twitterInfoBackground.alpha(0.1),
            color: src/* MaskColorVar.redMain */.ZN.redMain,
            marginTop: 12,
            fontSize: 12,
            lineHeight: '16px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center'
        },
        warningIcon: {
            color: src/* MaskColorVar.redMain */.ZN.redMain
        }
    };
});
const WARNING_SLIPPAGE = 1000;
function SettingsDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(SettingsDialog_useStyles(), props);
    const slippage = (0,dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [gasConfig1, setGasConfig] = (0,react.useState)();
    const [unconfirmedSlippage, setUnconfirmedSlippage] = (0,react.useState)(slippage);
    const [warningVisible, setWarningVisible] = (0,react.useState)(unconfirmedSlippage >= WARNING_SLIPPAGE);
    // #region remote controlled dialog
    const { open , setDialog , closeDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/hooks/useSortedTrades.ts







function useSortedTrades(traders, chainId, gasPrice) {
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)(chainId);
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(chainId);
    const { tradeState: [{ outputToken  }] ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    const outputTokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, outputToken === null || outputToken === void 0 ? void 0 : outputToken.address.toLowerCase());
    return (0,react.useMemo)(()=>{
        if (outputToken && nativeToken && (outputTokenPrice || nativeTokenPrice)) {
            return traders.map((trade)=>{
                if (gasPrice && trade.value && (0,base_src/* isGreaterThan */.T1)(trade.value.outputAmount, Trader_constants/* MINIMUM_AMOUNT */.rI) && trade.gas.value) {
                    const gasFee = (0,base_src/* multipliedBy */.$q)(gasPrice, trade.gas.value).integerValue().toFixed();
                    const gasFeeUSD = new (bignumber_default())((0,formatter/* formatBalance */.az)(gasFee !== null && gasFee !== void 0 ? gasFee : 0, nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.decimals)).times(nativeTokenPrice);
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
                    a = valueA === null || valueA === void 0 ? void 0 : valueA.outputAmount;
                    b = valueB === null || valueB === void 0 ? void 0 : valueB.outputAmount;
                }
                if ((0,base_src/* isGreaterThan */.T1)(a !== null && a !== void 0 ? a : 0, b !== null && b !== void 0 ? b : 0)) return -1;
                if ((0,base_src/* isLessThan */.FI)(a !== null && a !== void 0 ? a : 0, b !== null && b !== void 0 ? b : 0)) return 1;
                return 0;
            });
        }
        return traders.filter(({ value  })=>!!value && !value.outputAmount.isZero()
        ).sort(({ value: a  }, { value: b  })=>{
            var ref;
            if (a === null || a === void 0 ? void 0 : a.outputAmount.isGreaterThan((ref = b === null || b === void 0 ? void 0 : b.outputAmount) !== null && ref !== void 0 ? ref : 0)) return -1;
            var ref1;
            if (a === null || a === void 0 ? void 0 : a.outputAmount.isLessThan((ref1 = b === null || b === void 0 ? void 0 : b.outputAmount) !== null && ref1 !== void 0 ? ref1 : 0)) return 1;
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
var useBalance = __webpack_require__(44068);
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
        const value = (inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) === types/* EthereumTokenType.Native */.Dr.Native ? balance.value : '0';
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE */.AF.UPDATE_INPUT_TOKEN_BALANCE,
            balance: value || '0'
        });
    }, [
        currentAccount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.type,
        balance.value
    ]);
    (0,react.useEffect)(()=>{
        if (!currentAccount) return;
        const value = (outputToken === null || outputToken === void 0 ? void 0 : outputToken.type) === types/* EthereumTokenType.Native */.Dr.Native || (0,address/* isSameAddress */.Wr)(outputToken === null || outputToken === void 0 ? void 0 : outputToken.address, NATIVE_TOKEN_ADDRESS) ? balance.value : '0';
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE */.AF.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: value || '0'
        });
    }, [
        currentAccount,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.type,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        balance.value
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx
























const Trader_useStyles = (0,src/* makeStyles */.ZL)()(()=>{
    return {
        root: {
            margin: 'auto'
        }
    };
});
function Trader(props) {
    var _utils, ref;
    const { defaultOutputCoin , coin: coin1 , chainId: targetChainId , defaultInputCoin  } = props;
    const [focusedTrade, setFocusTrade] = (0,react.useState)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : currentChainId;
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const classes = (0,src/* useStylesExtends */.Bc)(Trader_useStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { setTargetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    // #region trade state
    const { tradeState: [{ inputToken , outputToken , inputTokenBalance , outputTokenBalance , inputAmount  }, dispatchTradeStore, ] , allTradeComputed , setTemporarySlippage ,  } = useAllProviderTradeContext/* AllProviderTradeContext.useContainer */.TX.useContainer();
    // #endregion
    // #region gas config and gas price
    const { gasPrice , gasConfig , setGasConfig  } = useGasConfig(chainId);
    // #endregion
    // #region if chain id be changed, update input token be native token
    (0,react.useEffect)(()=>{
        if (!chainIdValid) return;
        dispatchTradeStore({
            type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN,
            token: chainId === types/* ChainId.Mainnet */.a_.Mainnet && (coin1 === null || coin1 === void 0 ? void 0 : coin1.is_mirrored) ? tokens/* UST */.bi[types/* ChainId.Mainnet */.a_.Mainnet] : (0,utils_token/* createNativeToken */.$c)(chainId)
        });
    }, [
        chainId,
        chainIdValid
    ]);
    // #endregion
    const updateTradingCoin = (0,react.useCallback)((type, coin)=>{
        if (!(coin === null || coin === void 0 ? void 0 : coin.contract_address)) return;
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
        if ((0,address/* isSameAddress */.Wr)(coin1.contract_address, NATIVE_TOKEN_ADDRESS) && (inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) === types/* EthereumTokenType.Native */.Dr.Native && coin1.symbol === inputToken.symbol) {
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
    var ref1, ref2;
    // #region update balance
    const { value: inputTokenBalance_ , loading: loadingInputTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((0,address/* isSameAddress */.Wr)(inputToken === null || inputToken === void 0 ? void 0 : inputToken.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : (ref1 = inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) !== null && ref1 !== void 0 ? ref1 : types/* EthereumTokenType.Native */.Dr.Native, (ref2 = inputToken === null || inputToken === void 0 ? void 0 : inputToken.address) !== null && ref2 !== void 0 ? ref2 : '', chainId);
    var ref3, ref4;
    const { value: outputTokenBalance_ , loading: loadingOutputTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((0,address/* isSameAddress */.Wr)(outputToken === null || outputToken === void 0 ? void 0 : outputToken.address, NATIVE_TOKEN_ADDRESS) ? types/* EthereumTokenType.Native */.Dr.Native : (ref3 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.type) !== null && ref3 !== void 0 ? ref3 : types/* EthereumTokenType.Native */.Dr.Native, (ref4 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.address) !== null && ref4 !== void 0 ? ref4 : '', chainId);
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
    ].filter(Boolean).map((x)=>{
        return x === null || x === void 0 ? void 0 : x.address;
    });
    const [focusedTokenPanelType, setFocusedTokenPanelType] = (0,react.useState)(Trader_types/* TokenPanelType.Input */.Vo.Input);
    const { setDialog: setSelectTokenDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectTokenDialogUpdated */.R$.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== String(focusedTokenPanelType)) return;
        dispatchTradeStore({
            type: focusedTokenPanelType === Trader_types/* TokenPanelType.Input */.Vo.Input ? useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_TOKEN */.AF.UPDATE_INPUT_TOKEN : useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN */.AF.UPDATE_OUTPUT_TOKEN,
            token: ev.token
        });
        if (focusedTokenPanelType === Trader_types/* TokenPanelType.Input */.Vo.Input) {
            dispatchTradeStore({
                type: useAllProviderTradeContext/* AllProviderTradeActionType.UPDATE_INPUT_AMOUNT */.AF.UPDATE_INPUT_AMOUNT,
                amount: ''
            });
        }
    }, [
        dispatchTradeStore,
        focusedTokenPanelType
    ]));
    const onTokenChipClick = (0,react.useCallback)((type)=>{
        setFocusedTokenPanelType(type);
        setSelectTokenDialog({
            chainId,
            open: true,
            uuid: String(type),
            disableNativeToken: false,
            FungibleTokenListProps: {
                selectedTokens: excludeTokens
            }
        });
    }, [
        excludeTokens.join(),
        chainId
    ]);
    // #endregion
    // #region blocking (swap)
    const [tradeState, tradeCallback, resetTradeCallback] = trader_useTradeCallback_useTradeCallback(focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.provider, focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value, gasConfig);
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
    const shareLink = (ref = (_utils = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) && inputToken && outputToken ? [
        `I just swapped ${(0,formatter/* formatBalance */.az)(focusedTrade.value.inputAmount, inputToken.decimals, 6)} ${cashTag}${inputToken.symbol} for ${(0,formatter/* formatBalance */.az)(focusedTrade.value.outputAmount, outputToken.decimals, 6)} ${cashTag}${outputToken.symbol}.${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? `Follow @${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')} (mask.io) to swap cryptocurrencies on ${(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? 'Twitter' : 'Facebook'}.` : ''}`,
        '#mask_io', 
    ].join('\n') : '').toString();
    // #endregion
    // #region close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.transactionDialogUpdated */.R$.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if ((tradeState === null || tradeState === void 0 ? void 0 : tradeState.type) === types/* TransactionStateType.HASH */.n$.HASH) {
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
        if ((tradeState === null || tradeState === void 0 ? void 0 : tradeState.type) === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareLink,
            state: tradeState
        });
    }, [
        tradeState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    // #region swap callback
    const onSwap = (0,react.useCallback)(()=>{
        // no need to open the confirmation dialog if it (un)wraps the native token
        if ((focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) && (0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value)) tradeCallback();
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
        return Trader_messages/* PluginTraderMessages.swapSettingsUpdated.on */.A.swapSettingsUpdated.on((event)=>{
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
            const target = allTradeComputed.find((x)=>{
                return (prev === null || prev === void 0 ? void 0 : prev.provider) === x.provider;
            });
            return target !== null && target !== void 0 ? target : prev;
        });
    }, [
        allTradeComputed
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
            (focusedTrade === null || focusedTrade === void 0 ? void 0 : focusedTrade.value) && !(0,helpers/* isNativeTokenWrapper */.fU)(focusedTrade.value) && inputToken && outputToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
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
    }));
}


/***/ }),

/***/ 17092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useExchangeProxyContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/ExchangeProxy.json
const ExchangeProxy_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_weth","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"batchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"batchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"multihopBatchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"multihopBatchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactIn","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactOut","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts


function useExchangeProxyContract(chainId) {
    const { BALANCER_EXCHANGE_PROXY_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    return (0,useContract/* useContract */.cq)(BALANCER_EXCHANGE_PROXY_ADDRESS, ExchangeProxy_namespaceObject, chainId);
}


/***/ }),

/***/ 9946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Mw": () => (/* reexport */ getPairAddress),
  "fU": () => (/* reexport */ isNativeTokenWrapper),
  "_B": () => (/* reexport */ isTradeBetter),
  "Jc": () => (/* reexport */ swapErrorToUserReadableMessage),
  "SG": () => (/* reexport */ toBips),
  "t6": () => (/* reexport */ toUniswapCurrency),
  "rn": () => (/* reexport */ toUniswapCurrencyAmount),
  "Su": () => (/* reexport */ toUniswapPercent),
  "_y": () => (/* reexport */ toUniswapToken),
  "nz": () => (/* reexport */ uniswapCurrencyAmountTo),
  "jX": () => (/* reexport */ uniswapPercentTo),
  "Cw": () => (/* reexport */ uniswapPriceTo),
  "kf": () => (/* reexport */ uniswapTokenTo)
});

// UNUSED EXPORTS: ExtendedEther, toUniswapChainId, uniswapChainIdTo

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(99747);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+solidity@5.4.0/node_modules/@ethersproject/solidity/lib.esm/index.js
var solidity_lib_esm = __webpack_require__(85396);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/pair.ts


const map = new Map();
// This is a dynamically version of address generate algorithm borrowed from the Pair class of uniswap-skd
function getPairAddress(factoryAddress, initCodeHash, tokenA, tokenB) {
    var ref;
    if (!tokenA || !tokenB) return '';
    const tokens = tokenA.sortsBefore(tokenB) ? [
        tokenA,
        tokenB
    ] : [
        tokenB,
        tokenA
    ] // does safety checks
    ;
    let cache = map.get(initCodeHash);
    const token0Addr = tokens[0].address;
    const token1Addr = tokens[1].address;
    if ((cache === null || cache === void 0 ? void 0 : (ref = cache[token0Addr]) === null || ref === void 0 ? void 0 : ref[token1Addr]) === undefined) {
        cache = {
            ...cache,
            [token0Addr]: {
                ...cache === null || cache === void 0 ? void 0 : cache[token0Addr],
                [token1Addr]: (0,lib_esm.getCreate2Address)(factoryAddress, (0,solidity_lib_esm.keccak256)([
                    'bytes'
                ], [
                    (0,solidity_lib_esm.pack)([
                        'address',
                        'address'
                    ], [
                        token0Addr,
                        token1Addr
                    ])
                ]), initCodeHash)
            }
        };
        map.set(initCodeHash, cache);
    }
    return cache[token0Addr][token1Addr];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../web3-shared/evm/constants/tokens.ts
var tokens = __webpack_require__(82406);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(26618);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(43545);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/uniswap.ts







function swapErrorToUserReadableMessage(error) {
    let reason;
    while(error){
        var ref;
        var _reason, ref1;
        reason = (ref1 = (_reason = error.reason) !== null && _reason !== void 0 ? _reason : error.message) !== null && ref1 !== void 0 ? ref1 : reason;
        var _error;
        error = (_error = error.error) !== null && _error !== void 0 ? _error : (ref = error.data) === null || ref === void 0 ? void 0 : ref.originalError;
    }
    if (reason === null || reason === void 0 ? void 0 : reason.startsWith('execution reverted: ')) reason = reason.substr('execution reverted: '.length);
    switch(reason){
        case 'UniswapV2Router: EXPIRED':
            return 'The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.';
        case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
        case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
            return 'This transaction will not succeed either due to price movement or fee on transfer.';
        case 'TransferHelper: TRANSFER_FROM_FAILED':
            return 'The input token cannot be transferred. There may be an issue with the input token.';
        case 'UniswapV2: TRANSFER_FAILED':
            return 'The output token cannot be transferred. There may be an issue with the output token.';
        case 'UniswapV2: K':
            return 'The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.';
        case 'Too little received':
        case 'Too much requested':
        case 'STF':
            return 'This transaction will not succeed due to price movement.';
        case 'TF':
            return 'The output token cannot be transferred. There may be an issue with the output token.';
        default:
            if (reason === null || reason === void 0 ? void 0 : reason.includes('undefined is not an object')) {
                console.error(error, reason);
                return 'An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.';
            }
            return `Unknown error${reason ? `: "${reason}"` : ''}.`;
    }
}
function toUniswapChainId(chainId) {
    return chainId;
}
function toUniswapPercent(numerator, denominator) {
    return new sdk_core_esm.Percent(jsbi_umd_default().BigInt(numerator), jsbi_umd_default().BigInt(denominator));
}
function toUniswapCurrency(chainId, token) {
    try {
        if (!token) return;
        const extendedEther = ExtendedEther.onChain(chainId);
        const weth = toUniswapToken(chainId, tokens/* WNATIVE */.FX[chainId]);
        if (weth && (0,address/* isSameAddress */.Wr)(token.address, weth.address)) return weth;
        return token.type === types/* EthereumTokenType.Native */.Dr.Native ? extendedEther : toUniswapToken(chainId, token);
    } catch  {
        return;
    }
}
function toUniswapToken(chainId, token) {
    return new sdk_core_esm.Token(toUniswapChainId(chainId), (0,formatter/* formatEthereumAddress */.j8)(token.address), token.decimals, token.symbol, token.name);
}
function toUniswapCurrencyAmount(chainId, token, amount) {
    if (!token || !amount) return;
    const currency = toUniswapCurrency(chainId, token);
    if (!currency) return;
    try {
        if ((0,src/* isGreaterThan */.T1)(amount, 0)) return sdk_core_esm.CurrencyAmount.fromRawAmount(currency, jsbi_umd_default().BigInt(amount));
    } catch  {
        return;
    }
    return;
}
function uniswapChainIdTo(chainId) {
    return chainId;
}
function uniswapPercentTo(percent) {
    return new (bignumber_default())(percent.toFixed(2)).dividedBy(100);
}
function uniswapPriceTo(price) {
    return new (bignumber_default())(price.scalar.numerator.toString()).dividedBy(price.scalar.denominator.toString());
}
function uniswapTokenTo(token) {
    var ref;
    var ref2;
    return {
        type: [
            'eth',
            'matic',
            'bnb'
        ].includes((ref2 = (ref = token.name) === null || ref === void 0 ? void 0 : ref.toLowerCase()) !== null && ref2 !== void 0 ? ref2 : '') ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        address: (0,formatter/* formatEthereumAddress */.j8)(token.address),
        chainId: uniswapChainIdTo(token.chainId)
    };
}
function uniswapCurrencyAmountTo(currencyAmount) {
    return (0,src/* pow10 */.wA)(currencyAmount.currency.decimals).multipliedBy(currencyAmount.toFixed());
}
function isTradeBetter(tradeA, tradeB, minimumDelta = constants/* ZERO_PERCENT */.fI) {
    if (tradeA && !tradeB) return false;
    if (tradeB && !tradeA) return true;
    if (!tradeA || !tradeB) return undefined;
    if (tradeA.tradeType !== tradeB.tradeType || !tradeA.inputAmount.currency.equals(tradeB.inputAmount.currency) || !tradeB.outputAmount.currency.equals(tradeB.outputAmount.currency)) {
        throw new Error('Comparing incomparable trades');
    }
    if (minimumDelta.equalTo(constants/* ZERO_PERCENT */.fI)) {
        return tradeA.executionPrice.lessThan(tradeB.executionPrice);
    } else {
        return tradeA.executionPrice.asFraction.multiply(minimumDelta.add(constants/* ONE_HUNDRED_PERCENT */.yC)).lessThan(tradeB.executionPrice);
    }
}
class ExtendedEther extends sdk_core_esm.Ether {
    get wrapped() {
        if (this.chainId in tokens/* WNATIVE */.FX) return ExtendedEther.wrapEther(this.chainId);
        throw new Error('Unsupported chain ID');
    }
    static onChain(chainId) {
        var _chainId;
        return (_chainId = this._cachedEther[chainId]) !== null && _chainId !== void 0 ? _chainId : this._cachedEther[chainId] = new ExtendedEther(chainId);
    }
}
ExtendedEther._cachedEther = {};
ExtendedEther.wrapEther = (0,memoize/* default */.Z)((chainId)=>toUniswapToken(chainId, tokens/* WNATIVE */.FX[chainId])
);

;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/trader.ts


function toBips(bips) {
    return new (bignumber_default())(bips).dividedBy(constants/* BIPS_BASE */.PM);
}
function isNativeTokenWrapper(trade) {
    var ref;
    const trade_ = trade;
    var ref1;
    return (ref1 = trade_ === null || trade_ === void 0 ? void 0 : (ref = trade_.trade_) === null || ref === void 0 ? void 0 : ref.isNativeTokenWrapper) !== null && ref1 !== void 0 ? ref1 : false;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/index.ts





/***/ }),

/***/ 61274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43545);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(4581)]).then(__webpack_require__.bind(__webpack_require__, 90850))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 75228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "dm": () => (/* binding */ approvedTokensFromUniswap),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91296);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28331);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43545);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48476);





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
// #region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
// #endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniswap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+approvedTokens`, '[]');


/***/ }),

/***/ 22072:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ SUPPORTED_CHAIN_ID_LIST)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95130);

const SUPPORTED_CHAIN_ID_LIST = [
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_.Mainnet,
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_.BSC,
    _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_.Matic
];


/***/ }),

/***/ 17237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTradeAmount)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26618);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43545);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41391);





function useTradeAmount(trade, allowedSlippage = _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd) {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (!trade) return _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ZERO */ .xE;
        return trade.strategy === _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeStrategy.ExactIn */ .tB.ExactIn ? trade.outputAmount.dividedBy(_constants__WEBPACK_IMPORTED_MODULE_3__/* .ONE_BIPS.multipliedBy */ .IS.multipliedBy(allowedSlippage).plus(1)).integerValue((bignumber_js__WEBPACK_IMPORTED_MODULE_1___default().ROUND_DOWN)) : trade.inputAmount.times(_constants__WEBPACK_IMPORTED_MODULE_3__/* .ONE_BIPS.multipliedBy */ .IS.multipliedBy(allowedSlippage).plus(1).integerValue((bignumber_js__WEBPACK_IMPORTED_MODULE_1___default().ROUND_DOWN)));
    }, [
        trade
    ]);
}


/***/ }),

/***/ 9799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ useSwapParameters)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(72054);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(43545);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v3-sdk@3.3.2/node_modules/@uniswap/v3-sdk/dist/index.js
var dist = __webpack_require__(48314);
// EXTERNAL MODULE: ../web3-contracts/abis/RouterV2.json
var RouterV2 = __webpack_require__(50092);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useRouterV2Contract.ts


function useRouterV2Contract(address, chainId) {
    return (0,useContract/* useContract */.cq)(address, RouterV2, chainId);
}

// EXTERNAL MODULE: ../web3-contracts/abis/SwapRouter.json
var SwapRouter = __webpack_require__(75517);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useSwapRouterContract.ts


function useSwapRouterContract(address, chainId) {
    return (0,useContract/* useContract */.cq)(address, SwapRouter, chainId);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useMulticallContract.ts + 1 modules
var useMulticallContract = __webpack_require__(53586);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useCurrentBlockTimestamp.ts




function useCurrentBlockTimestamp(targetChainId) {
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : currentChainId;
    const multicallContract = (0,useMulticallContract/* useMulticallContract */.g)(chainId);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        return multicallContract === null || multicallContract === void 0 ? void 0 : multicallContract.methods.getCurrentBlockTimestamp().call({
            chainId: (0,lib.numberToHex)(chainId)
        });
    }, [
        multicallContract,
        chainId
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(84686);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTransactionDeadline.ts





function useTransactionDeadline() {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { value: timestamp  } = useCurrentBlockTimestamp(chainId);
    return (0,react.useMemo)(()=>{
        if (!timestamp) return;
        const timestamp_ = new (bignumber_default())(timestamp !== null && timestamp !== void 0 ? timestamp : '0');
        return timestamp_.plus(types/* ChainId.Mainnet */.a_.Mainnet === chainId ? constants/* DEFAULT_TRANSACTION_DEADLINE */.ag : constants/* L2_TRANSACTION_DEADLINE */.rV);
    }, [
        chainId,
        timestamp
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(43558);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(48476);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts













const UNISWAP_BIPS_BASE = jsbi_umd_default().BigInt(10000);
const swapCallParameters = (trade, options, tradeProvider)=>{
    const parameters = v2_sdk_esm/* Router.swapCallParameters */.F0.swapCallParameters(trade, options);
    if (tradeProvider === src/* TradeProvider.PANGOLIN */.z4.PANGOLIN || tradeProvider === src/* TradeProvider.TRADERJOE */.z4.TRADERJOE) {
        switch(parameters.methodName){
            case 'WETH':
                parameters.methodName = 'WAVAX';
                break;
            case 'swapTokensForExactETH':
                parameters.methodName = 'swapTokensForExactAVAX';
                break;
            case 'swapExactTokensForETHSupportingFeeOnTransferTokens':
                parameters.methodName = 'swapExactTokensForAVAXSupportingFeeOnTransferTokens';
                break;
            case 'swapExactTokensForETH':
                parameters.methodName = 'swapExactTokensForAVAX';
                break;
            case 'swapExactETHForTokensSupportingFeeOnTransferTokens':
                parameters.methodName = 'swapExactAVAXForTokensSupportingFeeOnTransferTokens';
                break;
            case 'swapExactETHForTokens':
                parameters.methodName = 'swapExactAVAXForTokens';
                break;
        }
    }
    return parameters;
};
/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param tradeProvider
 */ function useSwapParameters(trade, tradeProvider, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    const account = (0,useAccount/* useAccount */.m)();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const deadline = useTransactionDeadline();
    const routerV2Contract = useRouterV2Contract(context === null || context === void 0 ? void 0 : context.ROUTER_CONTRACT_ADDRESS, targetChainId);
    const swapRouterContract = useSwapRouterContract(context === null || context === void 0 ? void 0 : context.ROUTER_CONTRACT_ADDRESS, targetChainId);
    return (0,react.useMemo)(()=>{
        if (!account || !(trade === null || trade === void 0 ? void 0 : trade.trade_) || !deadline) return [];
        const { trade_  } = trade;
        const allowedSlippage_ = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(allowedSlippage), UNISWAP_BIPS_BASE);
        if (trade_ instanceof v2_sdk_esm/* Trade */.ho) {
            if (!routerV2Contract) return [];
            const parameters = [
                swapCallParameters(trade_, {
                    feeOnTransfer: false,
                    allowedSlippage: allowedSlippage_,
                    recipient: account,
                    ttl: deadline.toNumber()
                }, tradeProvider), 
            ];
            if (trade_.tradeType === sdk_core_esm.TradeType.EXACT_INPUT) parameters.push(swapCallParameters(trade_, {
                feeOnTransfer: true,
                allowedSlippage: allowedSlippage_,
                recipient: account,
                ttl: deadline.toNumber()
            }, tradeProvider));
            return parameters.map(({ methodName , args , value  })=>{
                return {
                    address: routerV2Contract.options.address,
                    calldata: routerV2Contract.methods[methodName](// @ts-ignore
                    ...args).encodeABI(),
                    value
                };
            });
        } else {
            if (!swapRouterContract) return [];
            const { value , calldata  } = dist.SwapRouter.swapCallParameters(trade_, {
                recipient: account,
                slippageTolerance: allowedSlippage_,
                deadline: deadline.toNumber()
            });
            return [
                {
                    address: swapRouterContract.options.address,
                    calldata,
                    value
                }, 
            ];
        }
    }, [
        account,
        allowedSlippage,
        deadline,
        trade,
        routerV2Contract,
        swapRouterContract
    ]);
}


/***/ }),

/***/ 95198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AF": () => (/* binding */ AllProviderTradeActionType),
  "TX": () => (/* binding */ AllProviderTradeContext)
});

// UNUSED EXPORTS: useAllProviderTradeContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../web3-shared/evm/utils/misc.ts
var misc = __webpack_require__(7454);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(26618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(84686);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTrade.ts



function useTrade(inputToken, outputToken) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    // to mimic the same interface with other trade providers
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!inputToken || !outputToken) return false;
        // none of the tokens is native token
        if (inputToken.type !== types/* EthereumTokenType.Native */.Dr.Native && outputToken.type !== types/* EthereumTokenType.Native */.Dr.Native) return false;
        // none of the tokens is wrapped native token
        if (!(0,address/* isSameAddress */.Wr)(inputToken.address, WNATIVE_ADDRESS) && !(0,address/* isSameAddress */.Wr)(outputToken.address, WNATIVE_ADDRESS)) return false;
        return true;
    }, [
        WNATIVE_ADDRESS,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var Trader_types = __webpack_require__(41391);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTradeComputed.ts





function useTradeComputed(isNativeTokenWrapper, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!isNativeTokenWrapper) return null;
        // the trade amount follows trade strategy
        const tradeAmount = new (bignumber_default())(strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn ? inputAmount || '0' : outputAmount || '0');
        // skip to render 0s
        if (tradeAmount.isZero()) return null;
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount: tradeAmount,
            outputAmount: tradeAmount,
            executionPrice: src/* ZERO */.xE,
            maximumSold: src/* ZERO */.xE,
            minimumReceived: tradeAmount,
            priceImpact: src/* ZERO */.xE,
            fee: src/* ZERO */.xE,
            trade_: {
                isWrap: strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && (inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) === types/* EthereumTokenType.Native */.Dr.Native || strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && (outputToken === null || outputToken === void 0 ? void 0 : outputToken.type) === types/* EthereumTokenType.Native */.Dr.Native,
                isNativeTokenWrapper
            }
        };
    }, [
        isNativeTokenWrapper,
        strategy,
        inputAmount,
        outputAmount,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(9946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(72054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatMap.js
var flatMap = __webpack_require__(16571);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useMulticall.ts
var useMulticall = __webpack_require__(55082);
;// CONCATENATED MODULE: ../web3-contracts/abis/Pair.json
const Pair_namespaceObject = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var hooks_useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePairContract.ts


function usePairContract(address, chainId) {
    return useContract(address, PairABI, chainId);
}
function usePairContracts(listOfAddress, chainId) {
    return (0,hooks_useContract/* useContracts */.GP)(listOfAddress, Pair_namespaceObject, chainId);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useGetTradeContext.ts
var useGetTradeContext = __webpack_require__(43558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(90495);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTargetBlockNumber.ts


function useTargetBlockNumber(targetChainId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId
    });
    return (0,useAsync/* default */.Z)(async ()=>{
        if (targetChainId === chainId) return undefined;
        return web3.eth.getBlockNumber();
    }, [
        targetChainId,
        chainId,
        web3
    ]);
}

// EXTERNAL MODULE: ./utils-pure/index.ts + 6 modules
var utils_pure = __webpack_require__(6628);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePairs.ts












var PairState;
(function(PairState) {
    PairState[PairState["NOT_EXISTS"] = 0] = "NOT_EXISTS";
    PairState[PairState["EXISTS"] = 1] = "EXISTS";
    PairState[PairState["INVALID"] = 2] = "INVALID";
})(PairState || (PairState = {}));
function usePairs(tradeProvider, tokenPairs) {
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const listOfPairAddress = (0,react.useMemo)(()=>{
        if (!context) return utils_pure/* EMPTY_LIST */.rP;
        const { FACTORY_CONTRACT_ADDRESS , INIT_CODE_HASH  } = context;
        if (!FACTORY_CONTRACT_ADDRESS || !INIT_CODE_HASH) return utils_pure/* EMPTY_LIST */.rP;
        return tokenPairs.map(([tokenA, tokenB])=>tokenA && tokenB && !tokenA.equals(tokenB) ? (0,helpers/* getPairAddress */.Mw)(FACTORY_CONTRACT_ADDRESS, INIT_CODE_HASH, tokenA, tokenB) : undefined
        );
    }, [
        context,
        tokenPairs
    ]);
    const { value: targetBlockNumber  } = useTargetBlockNumber(targetChainId);
    // get reserves for each pair
    const contracts = usePairContracts([
        ...new Set(listOfPairAddress.filter(Boolean))
    ], targetChainId);
    const [results, calls, _, callback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(contracts, Array.from({
        length: contracts.length
    }).fill('getReserves'), [], targetChainId, targetBlockNumber);
    const asyncResults = (0,useAsyncRetry/* default */.Z)(()=>callback(calls, {
            chainId: (0,lib.numberToHex)(targetChainId)
        })
    , [
        calls,
        callback,
        targetChainId
    ]);
    // compose reserves from multicall results
    const listOfReserves = (0,react.useMemo)(()=>{
        return results.map((x, i)=>{
            if (x.error || !x.value) return undefined;
            return {
                id: contracts[i].options.address,
                reserve0: x.value._reserve0,
                reserve1: x.value._reserve1
            };
        }).filter((value)=>value !== undefined
        );
    }, [
        results,
        contracts
    ]);
    // compose pairs from list of reserves
    const pairs = (0,react.useMemo)(()=>{
        return listOfPairAddress.map((address, i)=>{
            try {
                const tokenA = tokenPairs[i][0];
                const tokenB = tokenPairs[i][1];
                if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [
                    PairState.INVALID,
                    null
                ];
                var ref;
                const { reserve0 , reserve1  } = (ref = listOfReserves.find((x)=>{
                    return x.id.toLowerCase() === (address === null || address === void 0 ? void 0 : address.toLowerCase());
                })) !== null && ref !== void 0 ? ref : {};
                if (!reserve0 || !reserve1) return [
                    PairState.NOT_EXISTS,
                    null
                ];
                const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
                    tokenA,
                    tokenB
                ] : [
                    tokenB,
                    tokenA
                ];
                return [
                    PairState.EXISTS,
                    new v2_sdk_esm/* Pair */.sO(sdk_core_esm.CurrencyAmount.fromRawAmount(token0, reserve0), sdk_core_esm.CurrencyAmount.fromRawAmount(token1, reserve1)), 
                ];
            } catch  {
                return [];
            }
        });
    }, [
        listOfPairAddress,
        listOfReserves,
        tokenPairs
    ]);
    return {
        ...asyncResults,
        value: pairs
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useAllCommonPairs.ts







function useAllCurrencyCombinations(tradeProvider, currencyA, currencyB) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const chainIdValid = (0,chainDetailed/* isChainIdValid */.Ji)(chainId);
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const [tokenA1, tokenB1] = chainIdValid ? [
        currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped,
        currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped
    ] : [
        undefined,
        undefined
    ];
    const bases = (0,react.useMemo)(()=>{
        var ref, ref1, ref2, ref3, ref4;
        if (!chainIdValid) return [];
        var ref5;
        const common = (ref5 = context === null || context === void 0 ? void 0 : (ref = context.AGAINST_TOKENS) === null || ref === void 0 ? void 0 : ref[chainId]) !== null && ref5 !== void 0 ? ref5 : [];
        var ref6;
        const additionalA = tokenA1 ? (ref6 = context === null || context === void 0 ? void 0 : (ref1 = context.ADDITIONAL_TOKENS) === null || ref1 === void 0 ? void 0 : (ref2 = ref1[chainId]) === null || ref2 === void 0 ? void 0 : ref2[tokenA1.address]) !== null && ref6 !== void 0 ? ref6 : [] : [];
        var ref7;
        const additionalB = tokenB1 ? (ref7 = context === null || context === void 0 ? void 0 : (ref3 = context.ADDITIONAL_TOKENS) === null || ref3 === void 0 ? void 0 : (ref4 = ref3[chainId]) === null || ref4 === void 0 ? void 0 : ref4[tokenB1.address]) !== null && ref7 !== void 0 ? ref7 : [] : [];
        return [
            ...common,
            ...additionalA,
            ...additionalB
        ].map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
        );
    }, [
        chainId,
        chainIdValid,
        tokenA1 === null || tokenA1 === void 0 ? void 0 : tokenA1.address,
        tokenB1 === null || tokenB1 === void 0 ? void 0 : tokenB1.address
    ]);
    const basePairs = (0,react.useMemo)(()=>(0,flatMap/* default */.Z)(bases, (base)=>bases.map((otherBase)=>[
                    base,
                    otherBase
                ]
            )
        )
    , [
        bases
    ]);
    return (0,react.useMemo)(()=>{
        if (!tokenA1 || !tokenB1) return [];
        return [
            // the direct pair
            [
                tokenA1,
                tokenB1
            ],
            // token A against all bases
            ...bases.map((base)=>[
                    tokenA1,
                    base
                ]
            ),
            // token B against all bases
            ...bases.map((base)=>[
                    tokenB1,
                    base
                ]
            ),
            // each base against all bases
            ...basePairs, 
        ].filter((tokens)=>Boolean(tokens[0] && tokens[1])
        ).filter(([t0, t1])=>t0.address !== t1.address
        ).filter(([tokenA, tokenB])=>{
            var ref, ref8, ref9;
            if (!chainIdValid) return true;
            const customBases = context === null || context === void 0 ? void 0 : (ref = context.CUSTOM_TOKENS) === null || ref === void 0 ? void 0 : ref[chainId];
            const customBasesA = customBases === null || customBases === void 0 ? void 0 : (ref8 = customBases[tokenA.address]) === null || ref8 === void 0 ? void 0 : ref8.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            const customBasesB = customBases === null || customBases === void 0 ? void 0 : (ref9 = customBases[tokenB.address]) === null || ref9 === void 0 ? void 0 : ref9.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            if (!customBasesA && !customBasesB) return true;
            if (customBasesA && !customBasesA.find((base)=>tokenB.equals(base)
            )) return false;
            if (customBasesB && !customBasesB.find((base)=>tokenA.equals(base)
            )) return false;
            return true;
        });
    }, [
        tokenA1 === null || tokenA1 === void 0 ? void 0 : tokenA1.address,
        tokenB1 === null || tokenB1 === void 0 ? void 0 : tokenB1.address,
        bases,
        basePairs,
        chainId,
        chainIdValid
    ]);
}
function useAllCommonPairs(tradeProvider, currencyA, currencyB) {
    const allCurrencyCombinations = useAllCurrencyCombinations(tradeProvider, currencyA, currencyB);
    const { value: allPairs , ...asyncResult } = usePairs(tradeProvider, allCurrencyCombinations);
    // only pass along valid pairs, non-duplicated pairs
    const allPairs_ = (0,react.useMemo)(()=>Object.values(allPairs// filter out invalid pairs
        .filter((result)=>Boolean(result[0] === PairState.EXISTS && result[1])
        )// filter out duplicated pairs
        .reduce((memo, [, current])=>{
            var _address;
            memo[current.liquidityToken.address] = (_address = memo[current.liquidityToken.address]) !== null && _address !== void 0 ? _address : current;
            return memo;
        }, {}))
    , [
        allPairs
    ]);
    return {
        ...asyncResult,
        value: allPairs_
    };
}

// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var Trader_constants = __webpack_require__(43545);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV2BestTrade.ts





function useV2BestTradeExactIn(tradeProvider, currencyAmountIn, currencyOut, { maxHops =Trader_constants/* MAX_HOP */.s9  } = {}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(tradeProvider, currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency, currencyOut);
    const bestTrade = (0,react.useMemo)(()=>{
        if (currencyAmountIn && currencyOut && allowedPairs.length > 0) {
            if (maxHops === 1) {
                var ref;
                return (ref = v2_sdk_esm/* Trade.bestTradeExactIn */.ho.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
                    maxHops: 1,
                    maxNumResults: 1
                })[0]) !== null && ref !== void 0 ? ref : null;
            }
            // search through trades with varying hops, find best trade out of them
            let bestTradeSoFar = null;
            for(let i = 1; i <= maxHops; i += 1){
                var ref1;
                const currentTrade = (ref1 = v2_sdk_esm/* Trade.bestTradeExactIn */.ho.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0]) !== null && ref1 !== void 0 ? ref1 : null;
                // if current trade is best yet, save it
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, Trader_constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
                    bestTradeSoFar = currentTrade;
                }
            }
            return bestTradeSoFar;
        }
        return null;
    }, [
        allowedPairs,
        currencyAmountIn,
        currencyOut,
        maxHops
    ]);
    return {
        ...asyncResult,
        // override the trade type from @uniswap/v2-sdk
        value: bestTrade
    };
}
function useV2BestTradeExactOut(tradeProvider, currencyIn, currencyAmountOut, { maxHops =Trader_constants/* MAX_HOP */.s9  } = {}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(tradeProvider, currencyIn, currencyAmountOut === null || currencyAmountOut === void 0 ? void 0 : currencyAmountOut.currency);
    const bestTrade = (0,react.useMemo)(()=>{
        if (currencyIn && currencyAmountOut && allowedPairs.length > 0) {
            if (maxHops === 1) {
                var ref;
                return (ref = v2_sdk_esm/* Trade.bestTradeExactOut */.ho.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
                    maxHops: 1,
                    maxNumResults: 1
                })[0]) !== null && ref !== void 0 ? ref : null;
            }
            // search through trades with varying hops, find best trade out of them
            let bestTradeSoFar = null;
            for(let i = 1; i <= maxHops; i += 1){
                var ref2;
                const currentTrade = (ref2 = v2_sdk_esm/* Trade.bestTradeExactOut */.ho.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0]) !== null && ref2 !== void 0 ? ref2 : null;
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, Trader_constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
                    bestTradeSoFar = currentTrade;
                }
            }
            return bestTradeSoFar;
        }
        return null;
    }, [
        currencyIn,
        currencyAmountOut,
        allowedPairs,
        maxHops
    ]);
    return {
        ...asyncResult,
        // override the trade type from @uniswap/v2-sdk
        value: bestTrade
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v3-sdk@3.3.2/node_modules/@uniswap/v3-sdk/dist/index.js
var dist = __webpack_require__(48314);
;// CONCATENATED MODULE: ../web3-contracts/abis/Quoter.json
const Quoter_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"quoteExactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"quoteExactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"path","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useQuoterContract.ts


function useQuoterContract(chainId) {
    const { UNISWAP_V3_QUOTER_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    return (0,hooks_useContract/* useContract */.cq)(UNISWAP_V3_QUOTER_ADDRESS, Quoter_namespaceObject, chainId);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/PoolStateV3.json
const PoolStateV3_namespaceObject = JSON.parse('[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePoolContract.ts


function usePoolContract(address) {
    return useContract(address, PoolStateV3ABI);
}
function usePoolContracts(listOfAddress, chainId) {
    return (0,hooks_useContract/* useContracts */.GP)(listOfAddress, PoolStateV3_namespaceObject, chainId);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePools.ts









var PoolState;
(function(PoolState) {
    PoolState[PoolState["LOADING"] = 0] = "LOADING";
    PoolState[PoolState["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    PoolState[PoolState["EXISTS"] = 2] = "EXISTS";
    PoolState[PoolState["INVALID"] = 3] = "INVALID";
})(PoolState || (PoolState = {}));
function usePools(tradeProvider, poolKeys) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const context = (0,useGetTradeContext/* useGetTradeContext */.I)(tradeProvider);
    const transformed = (0,react.useMemo)(()=>{
        return poolKeys.map(([currencyA, currencyB, feeAmount])=>{
            if (!chainId || !currencyA || !currencyB || !feeAmount) return null;
            const tokenA = currencyA === null || currencyA === void 0 ? void 0 : currencyA.wrapped;
            const tokenB = currencyB === null || currencyB === void 0 ? void 0 : currencyB.wrapped;
            if (!tokenA || !tokenB || tokenA.equals(tokenB)) return null;
            const [token0, token1] = tokenA.sortsBefore(tokenB) ? [
                tokenA,
                tokenB
            ] : [
                tokenB,
                tokenA
            ];
            return [
                token0,
                token1,
                feeAmount
            ];
        });
    }, [
        chainId,
        poolKeys
    ]);
    const poolAddresses = (0,react.useMemo)(()=>{
        try {
            return transformed.map((value)=>{
                if (!(context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE)) return '';
                if (!(context === null || context === void 0 ? void 0 : context.FACTORY_CONTRACT_ADDRESS) || !value) return '';
                return (0,dist.computePoolAddress)({
                    factoryAddress: context.FACTORY_CONTRACT_ADDRESS,
                    tokenA: value[0],
                    tokenB: value[1],
                    fee: value[2]
                });
            });
        } catch  {
            return [];
        }
    }, [
        chainId,
        transformed,
        context === null || context === void 0 ? void 0 : context.FACTORY_CONTRACT_ADDRESS
    ]);
    const poolContracts = usePoolContracts(poolAddresses, chainId);
    const { value: targetBlockNumber  } = useTargetBlockNumber(chainId);
    const [slot0s, slot0sCalls, slot0sState, slot0sCallback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('slot0'), [], chainId, targetBlockNumber);
    const [liquidities, liquiditiesCalls, liquiditiesState, liquiditiesCallback] = (0,useMulticall/* useMultipleContractSingleData */._Y)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('liquidity'), [], chainId, targetBlockNumber);
    (0,useAsyncRetry/* default */.Z)(()=>slot0sCallback(slot0sCalls)
    , [
        slot0sCallback,
        slot0sCalls
    ]);
    (0,useAsyncRetry/* default */.Z)(()=>liquiditiesCallback(liquiditiesCalls)
    , [
        liquiditiesCallback,
        liquiditiesCalls
    ]);
    return (0,react.useMemo)(()=>{
        return poolKeys.map((_key, index)=>{
            var _index;
            const [token0, token1, fee] = (_index = transformed[index]) !== null && _index !== void 0 ? _index : [];
            if (!token0 || !token1 || !fee) return [
                PoolState.INVALID,
                null
            ];
            var _index1;
            const { value: slot0 , error: slot0Error  } = (_index1 = slot0s[index]) !== null && _index1 !== void 0 ? _index1 : {};
            var _index2;
            const { value: liquidity , error: liquidityError  } = (_index2 = liquidities[index]) !== null && _index2 !== void 0 ? _index2 : {};
            const slot0Loading = slot0sState.type === useMulticall/* MulticallStateType.PENDING */.F_.PENDING;
            const liquiditiesLoading = liquiditiesState.type === useMulticall/* MulticallStateType.PENDING */.F_.PENDING;
            if (slot0Error || liquidityError) return [
                PoolState.INVALID,
                null
            ];
            if (slot0Loading || liquiditiesLoading) return [
                PoolState.LOADING,
                null
            ];
            if (!slot0 || !liquidity) return [
                PoolState.NOT_EXISTS,
                null
            ];
            var _sqrtPriceX96;
            if ((0,src/* isZero */.Fr)((_sqrtPriceX96 = slot0.sqrtPriceX96) !== null && _sqrtPriceX96 !== void 0 ? _sqrtPriceX96 : 0)) return [
                PoolState.NOT_EXISTS,
                null
            ];
            try {
                return [
                    PoolState.EXISTS,
                    new dist.Pool(token0, token1, fee, slot0.sqrtPriceX96, liquidity[0], Number.parseInt(slot0.tick, 10)), 
                ];
            } catch (error) {
                console.error('Error when constructing the pool', error);
                return [
                    PoolState.NOT_EXISTS,
                    null
                ];
            }
        });
    }, [
        slot0s,
        liquidities,
        slot0sState.type,
        liquiditiesState.type,
        poolKeys,
        transformed
    ]);
}
function usePool(tradeProvider, currencyA, currencyB, feeAmount) {
    const poolKeys = useMemo(()=>[
            [
                currencyA,
                currencyB,
                feeAmount
            ]
        ]
    , [
        currencyA,
        currencyB,
        feeAmount
    ]);
    return usePools(tradeProvider, poolKeys)[0];
}

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(48476);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV3SwapPools.ts





/**
 * Returns all the existing pools that should be considered for swapping between an input currency and an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useV3SwapPools(currencyIn, currencyOut) {
    const allCurrencyCombinations = useAllCurrencyCombinations(public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3, currencyIn, currencyOut);
    const allCurrencyCombinationsWithAllFees = (0,react.useMemo)(()=>allCurrencyCombinations.reduce((list, [tokenA, tokenB])=>{
            return list.concat([
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.LOW
                ],
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.MEDIUM
                ],
                [
                    tokenA,
                    tokenB,
                    dist.FeeAmount.HIGH
                ], 
            ]);
        }, [])
    , [
        allCurrencyCombinations
    ]);
    const pools = usePools(public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3, allCurrencyCombinationsWithAllFees);
    return (0,react.useMemo)(()=>{
        return {
            pools: pools.filter((tuple)=>{
                return tuple[0] === PoolState.EXISTS && tuple[1] !== null;
            }).map(([, pool])=>pool
            ),
            loading: pools.some(([state])=>state === PoolState.LOADING
            )
        };
    }, [
        pools
    ]);
}

// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var shared_base_ui_dist = __webpack_require__(98193);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(75228);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useSingleHopOnly.ts


function useSingleHopOnly() {
    const singleHopOnly = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSingleHopOnlySettings */.DG);
    return singleHopOnly;
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useAllV3Routes.ts





function computeAllRoutes(currencyIn, currencyOut, pools, chainId, currentPath = [], allPaths = [], startCurrencyIn = currencyIn, maxHops = 2) {
    const tokenIn = currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.wrapped;
    const tokenOut = currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.wrapped;
    if (!tokenIn || !tokenOut) throw new Error('Missing tokenIn/tokenOut');
    try {
        for (const pool of pools){
            if (currentPath.includes(pool) || !pool.involvesToken(tokenIn)) continue;
            const outputToken = pool.token0.equals(tokenIn) ? pool.token1 : pool.token0;
            if (outputToken.equals(tokenOut)) {
                allPaths.push(new dist.Route([
                    ...currentPath,
                    pool
                ], startCurrencyIn, currencyOut));
            } else if (maxHops > 1) {
                computeAllRoutes(outputToken, currencyOut, pools, chainId, [
                    ...currentPath,
                    pool
                ], allPaths, startCurrencyIn, maxHops - 1);
            }
        }
    } catch  {
        return [];
    }
    return allPaths;
}
/**
 * Returns all the routes from an input currency to an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useAllV3Routes(currencyIn, currencyOut) {
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { pools , loading: poolsLoading  } = useV3SwapPools(currencyIn, currencyOut);
    const singleHopOnly = useSingleHopOnly();
    return (0,react.useMemo)(()=>{
        if (poolsLoading || !chainId || !pools || !currencyIn || !currencyOut) return {
            loading: true,
            routes: []
        };
        const routes = computeAllRoutes(currencyIn, currencyOut, pools, chainId, [], [], currencyIn, singleHopOnly ? 1 : 2);
        return {
            loading: false,
            routes
        };
    }, [
        chainId,
        currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.wrapped.address,
        currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.wrapped.address,
        pools,
        poolsLoading,
        singleHopOnly
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV3BestTrade.ts











var V3TradeState;
(function(V3TradeState) {
    V3TradeState[V3TradeState["LOADING"] = 0] = "LOADING";
    V3TradeState[V3TradeState["INVALID"] = 1] = "INVALID";
    V3TradeState[V3TradeState["NO_ROUTE_FOUND"] = 2] = "NO_ROUTE_FOUND";
    V3TradeState[V3TradeState["VALID"] = 3] = "VALID";
    V3TradeState[V3TradeState["SYNCING"] = 4] = "SYNCING";
})(V3TradeState || (V3TradeState = {}));
/**
 * Returns the best v3 trade for a desired exact input swap
 * @param amountIn the amount to swap in
 * @param currencyOut the desired output currency
 */ function useV3BestTradeExactIn(amountIn, currencyOut) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const quoterContract = useQuoterContract(targetChainId);
    const { routes , loading: routesLoading  } = useAllV3Routes(amountIn === null || amountIn === void 0 ? void 0 : amountIn.currency, currencyOut);
    const quoteExactInInputs = (0,react.useMemo)(()=>{
        try {
            return routes.map((route)=>[
                    (0,dist.encodeRouteToPath)(route, false),
                    amountIn ? `0x${amountIn.quotient.toString(16)}` : undefined
                ]
            );
        } catch  {
            return [];
        }
    }, [
        amountIn,
        routes
    ]);
    const { value: blockNumber  } = useTargetBlockNumber(targetChainId);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(quoterContract, Array.from({
        length: quoteExactInInputs.length
    }).fill('quoteExactInput'), quoteExactInInputs, Trader_constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg, targetChainId, blockNumber);
    const { loading: quotesLoading , error: quotesError , retry: quotesRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>quotesCallback(quotesCalls)
    , [
        quoterContract,
        quotesCalls.map((x)=>x.join()
        ).join()
    ]);
    const asyncBestTrade = (()=>{
        if (!amountIn || !currencyOut) {
            return {
                value: undefined,
                loading: false,
                error: new Error('Invalid trade info.')
            };
        }
        if (routesLoading || quotesLoading || routes.length && !quotesResults.length && !quotesError) {
            return {
                value: undefined,
                loading: true,
                error: undefined
            };
        }
        const { bestRoute , amountOut  } = quotesResults.filter((x)=>x.succeed
        ).reduce((currentBest, { value  }, i)=>{
            if (!value) return currentBest;
            if (currentBest.amountOut === null) {
                return {
                    bestRoute: routes[i],
                    amountOut: value
                };
            } else if (new (bignumber_default())(currentBest.amountOut).lt(value)) {
                return {
                    bestRoute: routes[i],
                    amountOut: value
                };
            }
            return currentBest;
        }, {
            bestRoute: null,
            amountOut: null
        });
        if (!bestRoute || !amountOut) {
            return {
                value: undefined,
                loading: false,
                error: new Error('No route found.')
            };
        }
        try {
            return {
                value: dist.Trade.createUncheckedTrade({
                    route: bestRoute,
                    tradeType: sdk_core_esm.TradeType.EXACT_INPUT,
                    inputAmount: amountIn,
                    outputAmount: sdk_core_esm.CurrencyAmount.fromRawAmount(currencyOut, amountOut)
                }),
                loading: false,
                error: undefined
            };
        } catch  {
            return {
                value: undefined,
                loading: false,
                error: new Error('Uniswap SDK Error')
            };
        }
    })();
    return {
        ...asyncBestTrade,
        retry: quotesRetry
    };
}
/**
 * Returns the best v3 trade for a desired exact output swap
 * @param currencyIn the desired input currency
 * @param amountOut the amount to swap out
 */ function useV3BestTradeExactOut(currencyIn, amountOut) {
    const { routes , loading: routesLoading  } = useAllV3Routes(currencyIn, amountOut === null || amountOut === void 0 ? void 0 : amountOut.currency);
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const quoterContract = useQuoterContract(targetChainId);
    const quoteExactOutInputs = (0,react.useMemo)(()=>{
        try {
            return routes.map((route)=>[
                    (0,dist.encodeRouteToPath)(route, true),
                    amountOut ? `0x${amountOut.quotient.toString(16)}` : undefined, 
                ]
            );
        } catch  {
            return [];
        }
    }, [
        amountOut,
        routes
    ]);
    const { value: blockNumber  } = useTargetBlockNumber(targetChainId);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,useMulticall/* useSingleContractMultipleData */.es)(quoterContract, Array.from({
        length: quoteExactOutInputs.length
    }).fill('quoteExactOutput'), quoteExactOutInputs, Trader_constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg, targetChainId, blockNumber);
    const { loading: quotesLoading , error: quotesError , retry: quotesRetry ,  } = (0,useAsyncRetry/* default */.Z)(()=>quotesCallback(quotesCalls)
    , [
        quotesCallback,
        quotesCalls.map((x)=>x.join()
        ).join()
    ]);
    const asyncBestTrade = (()=>{
        if (!amountOut || !currencyIn || quotesResults.some(({ error  })=>!!error
        )) {
            return {
                value: undefined,
                loading: false,
                error: new Error('Invalid trade info.')
            };
        }
        if (routesLoading || quotesLoading || routes.length && !quotesResults.length && !quotesError) {
            return {
                value: undefined,
                loading: true,
                error: undefined
            };
        }
        const { bestRoute , amountIn  } = quotesResults.filter((x)=>x.succeed
        ).reduce((currentBest, { value  }, i)=>{
            if (!value) return currentBest;
            if (currentBest.amountIn === null) {
                return {
                    bestRoute: routes[i],
                    amountIn: value
                };
            } else if (new (bignumber_default())(currentBest.amountIn).gt(value)) {
                return {
                    bestRoute: routes[i],
                    amountIn: value
                };
            }
            return currentBest;
        }, {
            bestRoute: null,
            amountIn: null
        });
        if (!bestRoute || !amountIn) {
            return {
                value: undefined,
                loading: false,
                error: new Error('No route found.')
            };
        }
        try {
            return {
                value: dist.Trade.createUncheckedTrade({
                    route: bestRoute,
                    tradeType: sdk_core_esm.TradeType.EXACT_OUTPUT,
                    inputAmount: sdk_core_esm.CurrencyAmount.fromRawAmount(currencyIn, amountIn),
                    outputAmount: amountOut
                }),
                loading: false,
                error: undefined
            };
        } catch  {
            return {
                value: undefined,
                loading: false,
                error: new Error('Uniswap SDK Error.')
            };
        }
    })();
    return {
        ...asyncBestTrade,
        retry: quotesRetry
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTrade.ts






function useTrade_useTrade(strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
    const isTradable = !(0,src/* isZero */.Fr)(inputAmount) || !(0,src/* isZero */.Fr)(outputAmount);
    const isNotAvailable = !isTradable || !inputToken || !outputToken || inputAmount === '0' && isExactIn || outputAmount === '0' && !isExactIn;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const inputCurrency = (0,helpers/* toUniswapCurrency */.t6)(chainId, inputToken);
    const outputCurrency = (0,helpers/* toUniswapCurrency */.t6)(chainId, outputToken);
    const tradeAmount = (0,helpers/* toUniswapCurrencyAmount */.rn)(chainId, isExactIn ? inputToken : outputToken, isExactIn ? inputAmount : outputAmount);
    return {
        isNotAvailable,
        isExactIn,
        tradeAmount,
        inputCurrency,
        outputCurrency
    };
}
function useV2Trade(tradeProvider, strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    // #region v2
    const v2BestTradeExactIn = useV2BestTradeExactIn(tradeProvider, isExactIn ? tradeAmount : undefined, outputCurrency);
    const v2BestTradeExactOut = useV2BestTradeExactOut(tradeProvider, inputCurrency, !isExactIn ? tradeAmount : undefined);
    // #endregion
    const v2Trade = isExactIn ? v2BestTradeExactIn : v2BestTradeExactOut;
    if (isNotAvailable) return {
        ...v2Trade,
        error: undefined,
        loading: false,
        value: null
    };
    return {
        ...v2Trade,
        value: v2Trade.value
    };
}
function useV3Trade(strategy = Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    // #region v3
    const v3BestTradeExactIn = useV3BestTradeExactIn(isExactIn ? tradeAmount : undefined, outputCurrency);
    const v3BestTradeExactOut = useV3BestTradeExactOut(inputCurrency, !isExactIn ? tradeAmount : undefined);
    // #endregion
    const v3Trade = isExactIn ? v3BestTradeExactIn : v3BestTradeExactOut;
    if (isNotAvailable) return {
        ...v3Trade,
        error: undefined,
        loading: false,
        value: null
    };
    var _value;
    return {
        ...v3Trade,
        value: (_value = v3Trade.value) !== null && _value !== void 0 ? _value : null
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(8218);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useSlippageTolerance.ts





function useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    const slippage = (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
    return (0,helpers/* toUniswapPercent */.Su)(slippage, 10000);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeBreakdown.ts




const BASE_FEE = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(30), jsbi_umd_default().BigInt(10000));
const ONE_HUNDRED_PERCENT = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(10000), jsbi_umd_default().BigInt(10000));
const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE);
// computes realized lp fee as a percent
function computeRealizedLPFeePercent(trade) {
    if (trade instanceof v2_sdk_esm/* Trade */.ho) {
        // for each hop in our trade, take away the x*y=k price impact from 0.3% fees
        // e.g. for 3 tokens/2 hops: 1 - ((1 - .03) * (1-.03))
        const percent = ONE_HUNDRED_PERCENT.subtract(trade.route.pairs.reduce((currentFee)=>currentFee.multiply(INPUT_FRACTION_AFTER_FEE)
        , ONE_HUNDRED_PERCENT));
        return new sdk_core_esm.Percent(percent.numerator, percent.denominator);
    } else {
        const percent = ONE_HUNDRED_PERCENT.subtract(trade.route.pools.reduce((currentFee, pool)=>currentFee.multiply(ONE_HUNDRED_PERCENT.subtract(new sdk_core_esm.Fraction(pool.fee, 1000000)))
        , ONE_HUNDRED_PERCENT));
        return new sdk_core_esm.Percent(percent.numerator, percent.denominator);
    }
}
// computes price breakdown for the trade
function computeRealizedLPFeeAmount(trade) {
    try {
        if (trade) {
            const realizedLPFee = computeRealizedLPFeePercent(trade);
            // the amount of the input that accrues to LPs
            return sdk_core_esm.CurrencyAmount.fromRawAmount(trade.inputAmount.currency, trade.inputAmount.multiply(realizedLPFee).quotient);
        }
        return undefined;
    } catch  {
        return undefined;
    }
}
function useTradeBreakdown(trade) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        const realizedLPFeePercent = computeRealizedLPFeePercent(trade);
        const realizedLPFeeAmount = computeRealizedLPFeeAmount(trade);
        return {
            realizedLPFeePercent,
            realizedLPFeeAmount,
            // different ver of @uniswap/sdk-core were used by @uniswap/v2-sdk and @uniswap/v3-sdk
            realizedLPFee: trade.inputAmount.multiply(realizedLPFeePercent),
            priceImpact: trade.priceImpact.subtract(realizedLPFeePercent)
        };
    }, [
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeComputed.ts







function useTradeComputed_useTradeComputed(trade, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = useSlippageTolerance();
    const breakdown = useTradeBreakdown(trade);
    const slippage = temporarySlippage ? (0,helpers/* toUniswapPercent */.Su)(temporarySlippage, 10000) : slippageSetting;
    if (!trade) return null;
    var ref;
    return {
        strategy: trade.tradeType === sdk_core_esm.TradeType.EXACT_INPUT ? Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn : Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut,
        inputToken,
        outputToken,
        inputAmount: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.inputAmount),
        outputAmount: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.outputAmount),
        // @ts-ignore
        executionPrice: (0,helpers/* uniswapPriceTo */.Cw)(trade.executionPrice),
        priceImpact: (0,helpers/* uniswapPercentTo */.jX)((ref = breakdown === null || breakdown === void 0 ? void 0 : breakdown.priceImpact) !== null && ref !== void 0 ? ref : trade.priceImpact),
        path: trade instanceof v2_sdk_esm/* Trade */.ho ? trade.route.path.map((x)=>[
                (0,helpers/* uniswapTokenTo */.kf)(x)
            ]
        ) : [],
        maximumSold: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.maximumAmountIn(slippage)),
        minimumReceived: (0,helpers/* uniswapCurrencyAmountTo */.nz)(trade.minimumAmountOut(slippage)),
        fee: (breakdown === null || breakdown === void 0 ? void 0 : breakdown.realizedLPFee) ? (0,helpers/* uniswapCurrencyAmountTo */.nz)(breakdown.realizedLPFee) : src/* ZERO */.xE,
        trade_: trade
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts + 4 modules
var useTradeParameters = __webpack_require__(9799);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeGasLimit.ts







function useTradeGasLimit(trade, tradeProvider) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const tradeParameters = (0,useTradeParameters/* useSwapParameters */.C)(trade, tradeProvider);
    return (0,useAsync/* default */.Z)(async ()=>{
        // step 1: estimate each trade parameter
        const estimatedCalls = await Promise.all(tradeParameters.map(async (x)=>{
            const { address , calldata , value  } = x;
            const config = {
                from: account,
                to: address,
                data: calldata,
                ...!value || /^0x0*$/.test(value) ? {} : {
                    value: (0,lib.toHex)(value)
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
                return;
            }
            const firstNoErrorCall = estimatedCalls.find((call)=>!('error' in call)
            );
            if (!firstNoErrorCall) {
                return;
            }
            bestCallOption = firstNoErrorCall;
        }
        return 'gasEstimate' in bestCallOption ? bestCallOption.gasEstimate.toNumber() : 0;
    }, [
        tradeParameters.length
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useUniswapV2Like.ts




function useUniswapV2Like(tradeProviders, traderProvider, inputAmount_, inputToken, outputToken) {
    const isTrader = tradeProviders.some((x)=>x === traderProvider
    );
    const trader_ = useV2Trade(traderProvider, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', isTrader ? inputToken : undefined, isTrader ? outputToken : undefined);
    const trader = useTradeComputed_useTradeComputed(trader_.value, inputToken, outputToken);
    const traderEstimateGas = useTradeGasLimit(trader, traderProvider);
    return {
        trader_,
        trader,
        traderEstimateGas
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(61274);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useSlippageTolerance.ts




function useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var Wallet_settings = __webpack_require__(63361);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTrade.ts









const NATIVE_TOKEN_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
function getNativeTokenLabel(networkType) {
    switch(networkType){
        case types/* NetworkType.Ethereum */.td.Ethereum:
            return 'ETH';
        case types/* NetworkType.Binance */.td.Binance:
        case types/* NetworkType.Polygon */.td.Polygon:
        case types/* NetworkType.Arbitrum */.td.Arbitrum:
        case types/* NetworkType.xDai */.td.xDai:
        case types/* NetworkType.Celo */.td.Celo:
        case types/* NetworkType.Fantom */.td.Fantom:
        case types/* NetworkType.Aurora */.td.Aurora:
        case types/* NetworkType.Boba */.td.Boba:
        case types/* NetworkType.Fuse */.td.Fuse:
        case types/* NetworkType.Metis */.td.Metis:
        case types/* NetworkType.Avalanche */.td.Avalanche:
        case types/* NetworkType.Optimistic */.td.Optimistic:
            return NATIVE_TOKEN_ADDRESS;
        default:
            (0,esm/* safeUnreachable */.P)(networkType);
            return '';
    }
}
function _0x_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS: NATIVE_TOKEN_ADDRESS1  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    const slippageSetting = useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    return (0,plugin_infra_src/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        var ref;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? getNativeTokenLabel((ref = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId)) !== null && ref !== void 0 ? ref : Wallet_settings/* currentNetworkSettings.value */.fX.value) : inputToken.address;
        var ref1;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? getNativeTokenLabel((ref1 = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId)) !== null && ref1 !== void 0 ? ref1 : Wallet_settings/* currentNetworkSettings.value */.fX.value) : outputToken.address;
        var ref2;
        return messages/* PluginTraderRPC.swapQuote */.V.swapQuote({
            sellToken,
            buyToken,
            takerAddress: account,
            sellAmount: isExactIn ? inputAmount : void 0,
            buyAmount: isExactIn ? void 0 : outputAmount,
            skipValidation: true,
            slippagePercentage: slippage,
            affiliateAddress: Trader_constants/* ZRX_AFFILIATE_ADDRESS */.ku
        }, (ref2 = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(targetChainId)) !== null && ref2 !== void 0 ? ref2 : Wallet_settings/* currentNetworkSettings.value */.fX.value);
    }, [
        NATIVE_TOKEN_ADDRESS1,
        account,
        strategy,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        slippage, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeComputed.ts



function _0x_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const inputAmount = new (bignumber_default())(trade.sellAmount);
        const outputAmount = new (bignumber_default())(trade.buyAmount);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice: new (bignumber_default())(trade.price),
            fee: new (bignumber_default())(trade.minimumProtocolFee),
            maximumSold: new (bignumber_default())(trade.sellAmount),
            minimumReceived: outputAmount,
            // minimumProtocolFee
            priceImpact: src/* ZERO */.xE,
            trade_: {
                ...trade,
                buyAmount: outputAmount.toFixed()
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/0x/constants.ts
var _0x_constants = __webpack_require__(22072);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(46428);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeGasLimit.ts






function useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_) || !_0x_constants/* SUPPORTED_CHAIN_ID_LIST.includes */.E.includes(targetChainId) || !config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        targetChainId,
        tradeComputed,
        config,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTrade.ts






function balancer_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(targetChainId);
    return (0,plugin_infra_src/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!WNATIVE_ADDRESS) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        // the WETH address is used for looking for available pools
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? WNATIVE_ADDRESS : inputToken.address;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? WNATIVE_ADDRESS : outputToken.address;
        const { swaps , routes  } = await messages/* PluginTraderRPC.getSwaps */.V.getSwaps(sellToken, buyToken, isExactIn ? Trader_constants/* BALANCER_SWAP_TYPE.EXACT_IN */.qT.EXACT_IN : Trader_constants/* BALANCER_SWAP_TYPE.EXACT_OUT */.qT.EXACT_OUT, isExactIn ? inputAmount : outputAmount, targetChainId);
        // no pool found
        if (!swaps[0].length) return null;
        return {
            swaps,
            routes
        };
    }, [
        WNATIVE_ADDRESS,
        strategy,
        targetChainId,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeComputed.ts




const MIN_VALUE = new (bignumber_default())('1e-5');
function balancer_useTradeComputed_useTradeComputed(trade, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const { swaps: swaps_ , routes  } = trade;
        const [swaps, tradeAmount, spotPrice] = swaps_;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        let priceImpact = isExactIn ? new (bignumber_default())(inputAmount).div(tradeAmount) : new (bignumber_default())(tradeAmount).div(outputAmount);
        priceImpact = priceImpact.times('1e18').div(spotPrice).minus(1);
        return {
            strategy,
            inputAmount: new (bignumber_default())(isExactIn ? inputAmount : tradeAmount),
            outputAmount: new (bignumber_default())(!isExactIn ? outputAmount : tradeAmount),
            inputToken,
            outputToken,
            executionPrice: new (bignumber_default())(spotPrice),
            priceImpact: priceImpact.isNegative() ? MIN_VALUE : priceImpact,
            maximumSold: new (bignumber_default())(tradeAmount),
            minimumReceived: new (bignumber_default())(tradeAmount),
            path: [],
            fee: src/* ZERO */.xE,
            trade_: trade
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts + 1 modules
var useExchangeProxyContract = __webpack_require__(17092);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/balancer/useTradeAmount.ts
var useTradeAmount = __webpack_require__(17237);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeGasLimit.ts







function balancer_useTradeGasLimit_useTradeGasLimit(trade) {
    const account = (0,useAccount/* useAccount */.m)();
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const exchangeProxyContract = (0,useExchangeProxyContract/* useExchangeProxyContract */.L)(targetChainId);
    const { BALANCER_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(targetChainId);
    const tradeAmount = (0,useTradeAmount/* useTradeAmount */.i)(trade, Trader_constants/* SLIPPAGE_DEFAULT */.Nd);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!trade || !trade.inputToken || !trade.outputToken || !exchangeProxyContract || !BALANCER_ETH_ADDRESS) return 0;
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
        const inputTokenAddress = trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.inputToken.address;
        const outputTokenAddress = trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native ? BALANCER_ETH_ADDRESS : trade.outputToken.address;
        // trade with the native token
        let transactionValue = '0';
        if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.inputAmount.toFixed();
        else if (trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) transactionValue = trade.outputAmount.toFixed();
        const tx = trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn ? exchangeProxyContract.methods.multihopBatchSwapExactIn(swap_, inputTokenAddress, outputTokenAddress, trade.inputAmount.toFixed(), tradeAmount.toFixed()) : exchangeProxyContract.methods.multihopBatchSwapExactOut(swap_, inputTokenAddress, outputTokenAddress, tradeAmount.toFixed());
        return tx.estimateGas({
            from: account,
            value: transactionValue
        });
    }, [
        trade,
        exchangeProxyContract,
        BALANCER_ETH_ADDRESS,
        tradeAmount,
        account
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useSlippageTolerance.ts




function dodo_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTrade.ts






function dodo_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = dodo_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    const { RPC  } = (0,constants/* useRPCConstants */.j8)(chainId);
    const providerURL = (0,head/* default */.Z)(RPC);
    const { DODO_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    const account = (0,useAccount/* useAccount */.m)();
    return (0,plugin_infra_src/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        if (inputAmount === '0') return null;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? {
            ...inputToken,
            address: DODO_ETH_ADDRESS !== null && DODO_ETH_ADDRESS !== void 0 ? DODO_ETH_ADDRESS : ''
        } : inputToken;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? {
            ...outputToken,
            address: DODO_ETH_ADDRESS !== null && DODO_ETH_ADDRESS !== void 0 ? DODO_ETH_ADDRESS : ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapRoute */.V.swapRoute({
            isNativeSellToken: (0,address/* isNativeTokenAddress */.qw)(inputToken),
            fromToken: sellToken,
            toToken: buyToken,
            fromAmount: inputAmount,
            slippage: slippage / 100,
            userAddr: account,
            rpc: providerURL,
            chainId
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        slippage,
        account,
        providerURL,
        chainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeComputed.ts




function dodo_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (!isExactIn) return null;
        const inputAmount = (0,src/* rightShift */.pu)(trade.fromAmount, inputToken.decimals).integerValue();
        const executionPrice = new (bignumber_default())(trade.resPricePerToToken);
        const outputAmount = (0,src/* rightShift */.pu)(trade.resAmount, outputToken.decimals).integerValue();
        const priceImpact = new (bignumber_default())(trade.priceImpact);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice,
            fee: src/* ZERO */.xE,
            maximumSold: inputAmount,
            minimumReceived: new (bignumber_default())(trade.fromAmount).multipliedBy(trade.resPricePerFromToken).multipliedBy(1 - trade.slippage / 100).shiftedBy(outputToken.decimals),
            // minimumProtocolFee
            priceImpact,
            trade_: {
                ...trade
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeGasLimit.ts





function dodo_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        config,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useSlippageTolerance.ts




function bancor_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTrade.ts







function bancor_useTrade_useTrade(strategy, inputAmountWei, outputAmountWei, inputToken, outputToken, temporarySlippage) {
    const slippageSetting = bancor_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId: chainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    const { BANCOR_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(chainId);
    const user = (0,useAccount/* useAccount */.m)();
    const inputAmount = (0,src/* leftShift */.w5)(inputAmountWei, inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals).toFixed();
    const outputAmount = (0,src/* leftShift */.w5)(outputAmountWei, outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals).toFixed();
    const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
    return (0,plugin_infra_src/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!inputToken || !outputToken) return null;
        if (inputAmountWei === '0' && isExactIn) return null;
        if (outputAmountWei === '0' && !isExactIn) return null;
        if (![
            types/* ChainId.Mainnet */.a_.Mainnet,
            types/* ChainId.Ropsten */.a_.Ropsten
        ].includes(chainId)) return null;
        const fromToken = (0,address/* isNativeTokenAddress */.qw)(inputToken) ? {
            ...inputToken,
            address: BANCOR_ETH_ADDRESS !== null && BANCOR_ETH_ADDRESS !== void 0 ? BANCOR_ETH_ADDRESS : ''
        } : inputToken;
        const toToken = (0,address/* isNativeTokenAddress */.qw)(outputToken) ? {
            ...outputToken,
            address: BANCOR_ETH_ADDRESS !== null && BANCOR_ETH_ADDRESS !== void 0 ? BANCOR_ETH_ADDRESS : ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapBancor */.V.swapBancor({
            strategy,
            fromToken,
            toToken,
            fromAmount: isExactIn ? inputAmount : void 0,
            toAmount: isExactIn ? void 0 : outputAmount,
            slippage,
            user,
            chainId: chainId,
            minimumReceived: ''
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmountWei,
        outputAmountWei,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        slippage,
        user,
        chainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTradeComputed.ts


function bancor_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const inputAmountWei = (0,src/* rightShift */.pu)(trade.fromAmount || '0', inputToken.decimals);
        const outputAmountWei = (0,src/* rightShift */.pu)(trade.toAmount || '0', outputToken.decimals);
        const minimumReceivedWei = (0,src/* rightShift */.pu)(trade.minimumReceived, outputToken.decimals);
        const tradeComputed = {
            strategy,
            inputToken,
            outputToken,
            inputAmount: inputAmountWei,
            outputAmount: outputAmountWei,
            executionPrice: src/* ZERO */.xE,
            fee: src/* ZERO */.xE,
            maximumSold: inputAmountWei,
            minimumReceived: minimumReceivedWei,
            priceImpact: src/* ZERO */.xE,
            trade_: {
                ...trade
            }
        };
        return tradeComputed;
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/bancor/useTradeGasLimit.ts






function bancor_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const account = (0,useAccount/* useAccount */.m)();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const trade = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
        return tradeComputed.trade_;
    }, [
        account,
        tradeComputed
    ]);
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!account || !trade) return 0;
        const [data, err] = await messages/* PluginTraderRPC.swapTransactionBancor */.V.swapTransactionBancor(trade);
        if (err) return 0;
        // Note that if approval is required, the API will also return the necessary approval transaction.
        const tradeTransaction = data.length === 1 ? data[0] : data[1];
        return web3.eth.estimateGas((0,pick/* default */.Z)(tradeTransaction.transaction, [
            'to',
            'data',
            'value',
            'from'
        ]));
    }, [
        trade,
        account,
        web3
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTradeComputed.ts




function openocean_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (!isExactIn) return null;
        const inputAmount = new (bignumber_default())(trade.fromAmount).multipliedBy((0,src/* pow10 */.wA)(inputToken.decimals)).integerValue();
        const executionPrice = new (bignumber_default())(trade.resPricePerToToken);
        const outputAmount = new (bignumber_default())(trade.resAmount).multipliedBy((0,src/* pow10 */.wA)(outputToken.decimals)).integerValue();
        var _priceImpact;
        const priceImpact = new (bignumber_default())((_priceImpact = trade.priceImpact) !== null && _priceImpact !== void 0 ? _priceImpact : 0);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice,
            fee: src/* ZERO */.xE,
            maximumSold: inputAmount,
            minimumReceived: new (bignumber_default())(trade.minOutAmount),
            // minimumProtocolFee
            priceImpact,
            trade_: {
                ...trade
            }
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useSlippageTolerance.ts




function openocean_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_base_ui_dist/* useValueRef */.E)(settings/* currentSlippageSettings */.It);
    return (0,clamp/* default */.Z)(slippage_, Trader_constants/* SLIPPAGE_MIN */.Bq, Trader_constants/* SLIPPAGE_MAX */.Q9);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/constants.ts

// https://docs.openocean.finance/api/openocean-dex-api-2.0
const OPENOCEAN_SUPPORTED_CHAINS = [
    types/* ChainId.Mainnet */.a_.Mainnet,
    types/* ChainId.BSC */.a_.BSC,
    types/* ChainId.xDai */.a_.xDai,
    types/* ChainId.Matic */.a_.Matic,
    types/* ChainId.Fantom */.a_.Fantom,
    types/* ChainId.Arbitrum */.a_.Arbitrum,
    types/* ChainId.Avalanche */.a_.Avalanche, 
];

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTrade.ts







function openocean_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken, temporarySlippage) {
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const slippageSetting = openocean_useSlippageTolerance_useSlippageTolerance();
    const slippage = temporarySlippage || slippageSetting;
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const { RPC  } = (0,constants/* useRPCConstants */.j8)(targetChainId);
    const providerURL = (0,head/* default */.Z)(RPC);
    const { OPENOCEAN_ETH_ADDRESS  } = (0,constants/* useTraderConstants */.L7)(targetChainId);
    const account = (0,useAccount/* useAccount */.m)();
    return (0,plugin_infra_src/* useDoubleBlockBeatRetry */.Yn)(async ()=>{
        if (!OPENOCEAN_SUPPORTED_CHAINS.includes(targetChainId)) return null;
        if (!inputToken || !outputToken) return null;
        if (inputAmount === '0') return null;
        const sellToken = (0,address/* isNativeTokenAddress */.qw)(inputToken.address) ? {
            ...inputToken,
            address: OPENOCEAN_ETH_ADDRESS !== null && OPENOCEAN_ETH_ADDRESS !== void 0 ? OPENOCEAN_ETH_ADDRESS : ''
        } : inputToken;
        const buyToken = (0,address/* isNativeTokenAddress */.qw)(outputToken.address) ? {
            ...outputToken,
            address: OPENOCEAN_ETH_ADDRESS !== null && OPENOCEAN_ETH_ADDRESS !== void 0 ? OPENOCEAN_ETH_ADDRESS : ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapOO */.V.swapOO({
            isNativeSellToken: (0,address/* isNativeTokenAddress */.qw)(inputToken.address),
            fromToken: sellToken,
            toToken: buyToken,
            fromAmount: inputAmount,
            slippage,
            userAddr: account,
            rpc: providerURL,
            chainId: targetChainId
        });
    }, [
        NATIVE_TOKEN_ADDRESS,
        strategy,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        slippage,
        account,
        providerURL,
        targetChainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/openocean/useTradeGasLimit.ts






function openocean_useTradeGasLimit_useTradeGasLimit(tradeComputed) {
    var ref1;
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    const web3 = (0,useWeb3/* useWeb3 */.$)({
        chainId: targetChainId
    });
    const account = (0,useAccount/* useAccount */.m)();
    const config = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
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
    return (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (tradeComputed === null || tradeComputed === void 0 ? void 0 : (ref = tradeComputed.trade_) === null || ref === void 0 ? void 0 : ref.estimatedGas) return new (bignumber_default())(tradeComputed.trade_.estimatedGas).toNumber();
        if (!config) return 0;
        return web3.eth.estimateGas(config);
    }, [
        config,
        web3,
        tradeComputed === null || tradeComputed === void 0 ? void 0 : (ref1 = tradeComputed.trade_) === null || ref1 === void 0 ? void 0 : ref1.estimatedGas
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useAvailableTraderProviders.ts



function useAvailableTraderProviders(type, keyword, targetChainId) {
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : currentChainId;
    return (0,useAsync/* default */.Z)(async ()=>{
        return messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(chainId);
    }, [
        chainId,
        type,
        keyword
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts + 1 modules
var useWrappedEtherContract = __webpack_require__(16025);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useNativeTradeGasLimit.ts




function useNativeTradeGasLimit(trade, chainId) {
    const account = (0,useAccount/* useAccount */.m)();
    const wrapperContract = (0,useWrappedEtherContract/* useNativeTokenWrapperContract */.W)(chainId);
    return (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (!(trade === null || trade === void 0 ? void 0 : (ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.isNativeTokenWrapper) || !trade.inputToken || !trade.outputToken) return 0;
        const tradeAmount = trade.inputAmount.toFixed();
        if (!tradeAmount || !wrapperContract) return 0;
        if (trade.strategy === Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === types/* EthereumTokenType.Native */.Dr.Native || trade.strategy === Trader_types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === types/* EthereumTokenType.Native */.Dr.Native) {
            return wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: tradeAmount
            });
        }
        return 0;
    }, [
        account,
        wrapperContract,
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useAllTradeComputed.ts




























function useAllTradeComputed(inputAmount, inputToken, outputToken, temporarySlippage) {
    const { targetChainId  } = useTargetChainIdContext/* TargetChainIdContext.useContainer */.Z.useContainer();
    var ref;
    const inputTokenProduct = (0,src/* pow10 */.wA)((ref = inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals) !== null && ref !== void 0 ? ref : 0);
    const inputAmount_ = (0,src/* multipliedBy */.$q)(inputAmount || '0', inputTokenProduct).integerValue().toFixed();
    const { value: tradeProviders = misc/* EMPTY_LIST */.r  } = useAvailableTraderProviders(Trader_types/* TagType.CASH */.Qy.CASH, 'MASK', targetChainId);
    // NATIVE-WNATIVE pair
    const nativeToken_ = useTrade(inputToken, outputToken);
    var _value;
    const nativeToken = useTradeComputed((_value = nativeToken_.value) !== null && _value !== void 0 ? _value : false, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken);
    const nativeTradeGasLimit = useNativeTradeGasLimit(nativeToken, targetChainId);
    // uniswap-v2
    const { trader_: uniswapV2_ , trader: uniswapV2 , traderEstimateGas: uniswapV2EstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2, inputAmount_, inputToken, outputToken);
    // sushi swap
    const { trader_: sushiSwap_ , trader: sushiSwap , traderEstimateGas: sushiSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP, inputAmount_, inputToken, outputToken);
    // sashimi swap
    const { trader_: sashimiSwap_ , trader: sashimiSwap , traderEstimateGas: sashimiSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP, inputAmount_, inputToken, outputToken);
    // quick swap
    const { trader_: quickSwap_ , trader: quickSwap , traderEstimateGas: quickSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP, inputAmount_, inputToken, outputToken);
    // pancake swap
    const { trader_: pancakeSwap_ , trader: pancakeSwap , traderEstimateGas: pancakeSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP, inputAmount_, inputToken, outputToken);
    // uniswap-v3 like providers
    const uniswapV3_ = useV3Trade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
    ) ? outputToken : undefined);
    const uniswapV3 = useTradeComputed_useTradeComputed(uniswapV3_.value, inputToken, outputToken, temporarySlippage);
    const uniswapV3SwapEstimateGas = useTradeGasLimit(uniswapV3, public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3);
    // zrx
    const zrx_ = _0x_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.ZRX */.z4.ZRX
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.ZRX */.z4.ZRX
    ) ? outputToken : undefined);
    var _value1;
    const zrx = _0x_useTradeComputed_useTradeComputed((_value1 = zrx_.value) !== null && _value1 !== void 0 ? _value1 : null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const zrxSwapEstimateGas = useTradeGasLimit_useTradeGasLimit(zrx);
    // balancer
    const balancer_ = balancer_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER
    ) ? outputToken : undefined);
    var _value2;
    const balancer = balancer_useTradeComputed_useTradeComputed((_value2 = balancer_.value) !== null && _value2 !== void 0 ? _value2 : null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken);
    const balancerSwapEstimateGas = balancer_useTradeGasLimit_useTradeGasLimit(balancer);
    // dodo
    const dodo_ = dodo_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.DODO */.z4.DODO
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.DODO */.z4.DODO
    ) ? outputToken : undefined, temporarySlippage);
    var _value3;
    const dodo = dodo_useTradeComputed_useTradeComputed((_value3 = dodo_.value) !== null && _value3 !== void 0 ? _value3 : null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const dodoSwapEstimateGas = dodo_useTradeGasLimit_useTradeGasLimit(dodo);
    // bancor
    const bancor_ = bancor_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BANCOR */.z4.BANCOR
    ) ? inputToken : undefined, tradeProviders.some((x)=>x === public_api_src/* TradeProvider.BANCOR */.z4.BANCOR
    ) ? outputToken : undefined, temporarySlippage);
    var _value4;
    const bancor = bancor_useTradeComputed_useTradeComputed((_value4 = bancor_.value) !== null && _value4 !== void 0 ? _value4 : null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const bancorSwapEstimateGas = bancor_useTradeGasLimit_useTradeGasLimit(bancor);
    // traderjoe
    const { trader_: traderJoe_ , trader: traderJoe , traderEstimateGas: traderJoeEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE, inputAmount_, inputToken, outputToken);
    // pangolindex
    const { trader_: pangolindex_ , trader: pangolindex , traderEstimateGas: pangolinEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN, inputAmount_, inputToken, outputToken);
    // openocean
    const openocean_ = openocean_useTrade_useTrade(Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount_, '0', inputToken, outputToken, temporarySlippage);
    var _value5;
    const openocean = openocean_useTradeComputed_useTradeComputed((_value5 = openocean_.value) !== null && _value5 !== void 0 ? _value5 : null, Trader_types/* TradeStrategy.ExactIn */.tB.ExactIn, inputToken, outputToken);
    const openoceanSwapEstimateGas = openocean_useTradeGasLimit_useTradeGasLimit(openocean);
    // trisolaris
    const { trader_: trisolaris_ , trader: trisolaris , traderEstimateGas: trisolarisEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS, inputAmount_, inputToken, outputToken);
    // WannaSwap
    const { trader_: wannaswap_ , trader: wannaswap , traderEstimateGas: wannaSwapEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP, inputAmount_, inputToken, outputToken);
    // Mdex
    const { trader_: mdex_ , trader: mdex , traderEstimateGas: mdexEstimateGas ,  } = useUniswapV2Like(tradeProviders, public_api_src/* TradeProvider.MDEX */.z4.MDEX, inputAmount_, inputToken, outputToken);
    const allTradeResult = [
        {
            provider: public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2,
            ...uniswapV2_,
            value: uniswapV2,
            gas: uniswapV2EstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP,
            ...sushiSwap_,
            value: sushiSwap,
            gas: sushiSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP,
            ...sashimiSwap_,
            value: sashimiSwap,
            gas: sashimiSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP,
            ...quickSwap_,
            value: quickSwap,
            gas: quickSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP,
            ...pancakeSwap_,
            value: pancakeSwap,
            gas: pancakeSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3,
            ...uniswapV3_,
            value: uniswapV3,
            gas: uniswapV3SwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.ZRX */.z4.ZRX,
            ...zrx_,
            value: zrx,
            gas: zrxSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.BALANCER */.z4.BALANCER,
            ...balancer_,
            value: balancer,
            gas: balancerSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.DODO */.z4.DODO,
            ...dodo_,
            value: dodo,
            gas: dodoSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.BANCOR */.z4.BANCOR,
            ...bancor_,
            value: bancor,
            gas: bancorSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.TRADERJOE */.z4.TRADERJOE,
            ...traderJoe_,
            value: traderJoe,
            gas: traderJoeEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.PANGOLIN */.z4.PANGOLIN,
            ...pangolindex_,
            value: pangolindex,
            gas: pangolinEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.OPENOCEAN */.z4.OPENOCEAN,
            ...openocean_,
            value: openocean,
            gas: openoceanSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.WANNASWAP */.z4.WANNASWAP,
            ...wannaswap_,
            value: wannaswap,
            gas: wannaSwapEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.TRISOLARIS */.z4.TRISOLARIS,
            ...trisolaris_,
            value: trisolaris,
            gas: trisolarisEstimateGas
        },
        {
            provider: public_api_src/* TradeProvider.MDEX */.z4.MDEX,
            ...mdex_,
            value: mdex,
            gas: mdexEstimateGas
        }, 
    ];
    return nativeToken_.value ? tradeProviders.map((item)=>({
            provider: item,
            ...nativeToken_,
            value: nativeToken,
            gas: nativeTradeGasLimit
        })
    ) : allTradeResult.filter((item)=>tradeProviders.some((provider)=>item.provider === provider
        )
    );
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts



var AllProviderTradeActionType;
(function(AllProviderTradeActionType) {
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_TOKEN"] = 0] = "UPDATE_INPUT_TOKEN";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_OUTPUT_TOKEN"] = 1] = "UPDATE_OUTPUT_TOKEN";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_AMOUNT"] = 2] = "UPDATE_INPUT_AMOUNT";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_INPUT_TOKEN_BALANCE"] = 3] = "UPDATE_INPUT_TOKEN_BALANCE";
    AllProviderTradeActionType[AllProviderTradeActionType["UPDATE_OUTPUT_TOKEN_BALANCE"] = 4] = "UPDATE_OUTPUT_TOKEN_BALANCE";
})(AllProviderTradeActionType || (AllProviderTradeActionType = {}));
function reducer(state, action) {
    switch(action.type){
        case AllProviderTradeActionType.UPDATE_INPUT_TOKEN:
            return {
                ...state,
                inputToken: action.token
            };
        case AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN:
            return {
                ...state,
                outputToken: action.token
            };
        case AllProviderTradeActionType.UPDATE_INPUT_AMOUNT:
            return {
                ...state,
                inputAmount: action.amount
            };
        case AllProviderTradeActionType.UPDATE_INPUT_TOKEN_BALANCE:
            return {
                ...state,
                inputTokenBalance: action.balance
            };
        case AllProviderTradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE:
            return {
                ...state,
                outputTokenBalance: action.balance
            };
    }
}
function useAllProviderTradeContext() {
    const [tradeStore, dispatchTradeStore] = (0,react.useReducer)(reducer, {
        inputAmount: '',
        inputTokenBalance: '0',
        outputTokenBalance: '0'
    });
    const [temporarySlippage, setTemporarySlippage] = (0,react.useState)();
    const { inputAmount , inputToken , outputToken  } = tradeStore;
    const allTradeComputed = useAllTradeComputed(inputAmount, inputToken, outputToken, temporarySlippage);
    return {
        tradeState: [
            tradeStore,
            dispatchTradeStore
        ],
        temporarySlippage,
        setTemporarySlippage,
        allTradeComputed
    };
}
const AllProviderTradeContext = (0,unstated_next/* createContainer */.f)(useAllProviderTradeContext);


/***/ }),

/***/ 43558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useGetTradeContext)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48476);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43545);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66559);
/* harmony import */ var _useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84686);






function useGetTradeContext(tradeProvider) {
    const { targetChainId: chainId  } = _useTargetChainIdContext__WEBPACK_IMPORTED_MODULE_4__/* .TargetChainIdContext.useContainer */ .Z.useContainer();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const DEX_TRADE = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .getTraderConstants */ .Gr)(chainId);
        switch(tradeProvider){
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V2_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V2_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V2_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V3_LIKE: true,
                    GRAPH_API: DEX_TRADE.UNISWAP_V3_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.UNISWAP_V3_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_SWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.UNISWAP_V3_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.SUSHISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.SUSHISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.SUSHISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SUSHISWAP_BASE_AGAINST_TOKENS */ .S5,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SUSHISWAP_CUSTOM_BASES */ .vZ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.SASHIMISWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.SASHIMISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.SASHIMISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.SASHIMISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SASHIMISWAP_BASE_AGAINST_TOKENS */ .yo,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .SASHIMISWAP_CUSTOM_BASES */ .D9
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.QUICKSWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.QUICKSWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.QUICKSWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .QUICKSWAP_BASE_AGAINST_TOKENS */ .PE,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .QUICKSWAP_CUSTOM_BASES */ .jM
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANCAKESWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANCAKESWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANCAKESWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANCAKESWAP_BASE_AGAINST_TOKENS */ .Dh,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANCAKESWAP_CUSTOM_BASES */ .tm
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRADERJOE_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRADERJOE_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRADERJOE_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRADERJOE_BASE_AGAINST_TOKENS */ .Xt,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRADERJOE_CUSTOM_BASES */ .bQ
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.PANGOLIN_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.PANGOLIN_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.PANGOLIN_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANGOLIN_BASE_AGAINST_TOKENS */ .h9,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .PANGOLIN_CUSTOM_BASES */ .Gt
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.WANNASWAP_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.WANNASWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_ROUTER_V2_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.WANNASWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .WANNASWAP_BASE_AGAINST_TOKENS */ .NV,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .WANNASWAP_CUSTOM_BASES */ .zE
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.TRISOLARIS_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.TRISOLARIS_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.TRISOLARIS_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRISOLARIS_BASE_AGAINST_TOKENS */ .mG,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .TRISOLARIS_CUSTOM_BASES */ .cp
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.MDEX */ .z4.MDEX:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: DEX_TRADE.MDEX_THEGRAPH,
                    INIT_CODE_HASH: DEX_TRADE.MDEX_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.MDEX_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: DEX_TRADE.MDEX_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .MDEX_BASE_AGAINST_TOKENS */ .R8,
                    ADDITIONAL_TOKENS: {},
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_2__/* .MDEX_CUSTOM_BASES */ .Pz
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
                return {
                    TYPE: tradeProvider
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BALANCER_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.DODO_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BANCOR */ .z4.BANCOR:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BANCOR_EXCHANGE_PROXY_ADDRESS
                };
            case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: DEX_TRADE.BANCOR_EXCHANGE_PROXY_ADDRESS
                };
            default:
                if (tradeProvider) (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(tradeProvider);
                return null;
        }
    }, [
        chainId,
        tradeProvider
    ]);
}


/***/ }),

/***/ 84686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TargetChainIdContext)
/* harmony export */ });
/* unused harmony export useTargetChainIdContext */
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63541);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44737);



function useTargetChainIdContext() {
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const [targetChainId, setTargetChainId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(chainId);
    return {
        targetChainId,
        setTargetChainId
    };
}
const TargetChainIdContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_2__/* .createContainer */ .f)(useTargetChainIdContext);


/***/ }),

/***/ 41391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "tB": () => (/* reexport */ TradeStrategy)
});

// UNUSED EXPORTS: WarningLevel, ZrxTradePool

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts
var WarningLevel;
(function(WarningLevel) {
    WarningLevel[WarningLevel["LOW"] = 1] = "LOW";
    WarningLevel[WarningLevel["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel[WarningLevel["HIGH"] = 3] = "HIGH";
    WarningLevel[WarningLevel["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel[WarningLevel["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {}));
var ZrxTradePool;
(function(ZrxTradePool) {
    ZrxTradePool["ZRX"] = '0x';
    ZrxTradePool["ACryptoS"] = "ACryptoS";
    ZrxTradePool["ApeSwap"] = "ApeSwap";
    ZrxTradePool["BakerySwap"] = "BakerySwap";
    ZrxTradePool["Balancer"] = "Balancer";
    ZrxTradePool["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool["Bancor"] = "Bancor";
    ZrxTradePool["Belt"] = "Belt";
    ZrxTradePool["CafeSwap"] = "CafeSwap";
    ZrxTradePool["CheeseSwap"] = "CheeseSwap";
    ZrxTradePool["ComethSwap"] = "ComethSwap";
    ZrxTradePool["Component"] = "Component";
    ZrxTradePool["Cream"] = 'CREAM';
    ZrxTradePool["CryptoCom"] = "CryptoCom";
    ZrxTradePool["Curve"] = "Curve";
    ZrxTradePool["CurveV2"] = 'Curve_V2';
    ZrxTradePool["Dfyn"] = "Dfyn";
    ZrxTradePool["Dodo"] = 'DODO';
    ZrxTradePool["DodoV2"] = 'DODO_V2';
    ZrxTradePool["Ellipsis"] = "Ellipsis";
    ZrxTradePool["Eth2Dai"] = "Eth2Dai";
    ZrxTradePool["FirebirdOneSwap"] = "FirebirdOneSwap";
    ZrxTradePool["IronSwap"] = "IronSwap";
    ZrxTradePool["JetSwap"] = "JetSwap";
    ZrxTradePool["JulSwap"] = "JulSwap";
    ZrxTradePool["Kyber"] = "Kyber";
    ZrxTradePool["KyberDMM"] = "KyberDMM";
    ZrxTradePool["Lido"] = "Lido";
    ZrxTradePool["Linkswap"] = "Linkswap";
    ZrxTradePool["LiquidityProvider"] = "LiquidityProvider";
    ZrxTradePool["MStable"] = 'mStable';
    ZrxTradePool["MakerPsm"] = "MakerPsm";
    ZrxTradePool["Mesh"] = "Mesh";
    ZrxTradePool["Mooniswap"] = "Mooniswap";
    ZrxTradePool["MultiBridge"] = "MultiBridge";
    ZrxTradePool["MultiHop"] = "MultiHop";
    ZrxTradePool["Native"] = "Native";
    ZrxTradePool["Nerve"] = "Nerve";
    ZrxTradePool["Oasis"] = "Oasis";
    ZrxTradePool["PancakeSwap"] = "PancakeSwap";
    ZrxTradePool["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool["QuickSwap"] = "QuickSwap";
    ZrxTradePool["Saddle"] = "Saddle";
    ZrxTradePool["Shell"] = "Shell";
    ZrxTradePool["Smoothy"] = "Smoothy";
    ZrxTradePool["SnowSwap"] = "SnowSwap";
    ZrxTradePool["SushiSwap"] = "SushiSwap";
    ZrxTradePool["Swerve"] = "Swerve";
    ZrxTradePool["Uniswap"] = "Uniswap";
    ZrxTradePool["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool["WaultSwap"] = "WaultSwap";
    ZrxTradePool["xSigma"] = "xSigma";
    ZrxTradePool["TraderJoe"] = "TraderJoe";
    ZrxTradePool["PangolinDex"] = "PangolinDex";
    ZrxTradePool["Trisolaris"] = "Trisolaris";
    ZrxTradePool["WannaSwap"] = "WannaSwap";
    ZrxTradePool["Mdex"] = "Mdex";
})(ZrxTradePool || (ZrxTradePool = {}));
var TradeStrategy;
(function(TradeStrategy) {
    TradeStrategy[TradeStrategy["ExactIn"] = 0] = "ExactIn";
    TradeStrategy[TradeStrategy["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {}));
var TokenPanelType;
(function(TokenPanelType) {
    TokenPanelType[TokenPanelType["Input"] = 0] = "Input";
    TokenPanelType[TokenPanelType["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType) {
    TagType[TagType["CASH"] = 1] = "CASH";
    TagType[TagType["HASH"] = 2] = "HASH";
})(TagType || (TagType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts










/***/ }),

/***/ 65327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice),
/* harmony export */   "p": () => (/* binding */ useTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63081);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63361);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22229);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    var ref2;
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (ref2 = contractAddress || coinId) === null || ref2 === void 0 ? void 0 : ref2.toLowerCase();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        if (contractAddress && platformId) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackContract */ .V.trackContract(platformId, contractAddress);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateTokenPrices */ .V.updateTokenPrices();
        }
        if (!contractAddress) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackNativeToken */ .V.trackNativeToken(category);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateNativeTokenPrices */ .V.updateNativeTokenPrices();
        }
        return _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.addListener */ .JC.addListener((newVal)=>{
            var ref;
            var ref1;
            const value = (ref1 = (ref = newVal[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref1 !== void 0 ? ref1 : 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var ref;
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        var ref3;
        setPrice((ref3 = (ref = currentTokenPrices[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref3 !== void 0 ? ref3 : 0);
    }, [
        category,
        currencyType
    ]);
    if (!category) return 0;
    return price;
}
function useNativeTokenPrice(chainId, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    return useTokenPrice(chainId, undefined, currencyType);
}


/***/ }),

/***/ 53586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ useMulticallContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ../web3-shared/evm/contracts/useMulticallContract.ts



function useMulticallContract(chainId) {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)(chainId);
    return (0,useContract/* useContract */.cq)(MULTICALL_ADDRESS, Multicall_namespaceObject);
}


/***/ }),

/***/ 16025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ useNativeTokenWrapperContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/WETH.json
const WETH_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ../web3-shared/evm/contracts/useWrappedEtherContract.ts



function useNativeTokenWrapperContract(chainId) {
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    return (0,useContract/* useContract */.cq)(WNATIVE_ADDRESS, WETH_namespaceObject);
}


/***/ }),

/***/ 84198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useBlockNumber)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28577);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63541);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90495);


/**
 * Get the current block number of current chain
 */ function useBlockNumber(expectedChainId) {
    const defaultChainId = (0,___WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,___WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId: expectedChainId !== null && expectedChainId !== void 0 ? expectedChainId : defaultChainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getBlockNumber();
    }, [
        web3
    ]);
}


/***/ }),

/***/ 42624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95130);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44270);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)();
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined, chainId);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 55082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F_": () => (/* binding */ MulticallStateType),
/* harmony export */   "_Y": () => (/* binding */ useMultipleContractSingleData),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData)
/* harmony export */ });
/* unused harmony exports useMulticallCallback, useMulticallStateDecoded, useMultipleContractMultipleData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53586);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11315);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90495);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84198);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63541);






// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200000;
const DEFAULT_GAS_LIMIT = 1000000;
// #endregion
// #region cached results
const cachedResults = {};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    var ref;
    const blockNumber_ = (ref = cache === null || cache === void 0 ? void 0 : cache.blockNumber) !== null && ref !== void 0 ? ref : 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    var _chainId;
    const cache = (_chainId = cachedResults[chainId]) !== null && _chainId !== void 0 ? _chainId : {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        var ref;
        // calculate the gas required by the current item
        const gasRequired = (ref = item[1]) !== null && ref !== void 0 ? ref : DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticallStateType;
(function(MulticallStateType) {
    MulticallStateType[MulticallStateType["UNKNOWN"] = 0] = "UNKNOWN";
    MulticallStateType[MulticallStateType[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticallStateType[MulticallStateType[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticallStateType[MulticallStateType[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticallStateType || (MulticallStateType = {}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback(targetChainId, targetBlockNumber) {
    const currentChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : currentChainId;
    const { value: defaultBlockNumber = 0  } = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_2__/* .useBlockNumber */ .O)();
    const blockNumber = targetBlockNumber !== null && targetBlockNumber !== void 0 ? targetBlockNumber : defaultBlockNumber;
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_3__/* .useMulticallContract */ .g)(chainId);
    const [multicallState, setMulticallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        type: MulticallStateType.UNKNOWN
    });
    const multicallCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticallStateType.UNKNOWN
            });
            return;
        }
        try {
            setMulticallState({
                type: MulticallStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            var ref;
            setMulticallState({
                type: MulticallStateType.SUCCEED,
                results: calls.map((call)=>(ref = getCallResult(call, chainId, blockNumber)) !== null && ref !== void 0 ? ref : [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticallStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        blockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
// #endregion
// #region useMulticallStateDecoded
function useMulticallStateDecoded(contracts, names, state, chainId) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (state.type !== MulticallStateType.SUCCEED) return [];
        if (contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            var ref;
            var ref1;
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = (ref1 = (ref = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )) === null || ref === void 0 ? void 0 : ref.outputs) !== null && ref1 !== void 0 ? ref1 : [];
            try {
                const value = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .decodeOutputString */ .mO)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
// #endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId, blockNumber) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract === null || contract === void 0 ? void 0 : contract.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractSingleData(contracts, names, callData, chainId, blockNumber, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback(chainId, blockNumber);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT, chainId) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback(chainId);
    const results = useMulticallStateDecoded(contracts, names, state, chainId);
    return [
        results,
        calls,
        state,
        callback
    ];
}


/***/ })

}]);