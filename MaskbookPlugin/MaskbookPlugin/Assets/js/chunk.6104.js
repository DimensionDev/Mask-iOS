"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6104],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5087],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js

/***/ 11149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "JQ": () => (/* binding */ sha256)
});

// UNUSED EXPORTS: computeHmac, ripemd160, sha512

// EXTERNAL MODULE: ../../node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var lib_hash = __webpack_require__(45370);
var hash_default = /*#__PURE__*/__webpack_require__.n(lib_hash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.4.0/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(5241);
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
        logger.throwError("unsupported algorithm " + algorithm, Logger.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash.hmac(hash[algorithm], arrayify(key)).update(arrayify(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ 85396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "keccak256": () => (/* binding */ keccak256),
/* harmony export */   "sha256": () => (/* binding */ sha256)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84757);
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5241);
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11149);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);






const regexBytes = new RegExp("^bytes([0-9]+)$");
const regexNumber = new RegExp("^(u?int)([0-9]*)$");
const regexArray = new RegExp("^(.*)\\[([0-9]*)\\]$");
const Zeros = "0000000000000000000000000000000000000000000000000000000000000000";
function _pack(type, value, isArray) {
    switch (type) {
        case "address":
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
        case "string":
            return (0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(value);
        case "bytes":
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
        case "bool":
            value = (value ? "0x01" : "0x00");
            if (isArray) {
                return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, 32);
            }
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value);
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
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .zeroPad */ .Bu)(value, size / 8);
    }
    match = type.match(regexBytes);
    if (match) {
        const size = parseInt(match[1]);
        if (String(size) !== match[1] || size === 0 || size > 32) {
            throw new Error("invalid bytes type - " + type);
        }
        if ((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)(value).byteLength !== size) {
            throw new Error("invalid value for " + type);
        }
        if (isArray) {
            return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .arrayify */ .lE)((value + Zeros).substring(0, 66));
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
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .zo)(result);
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
    return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .hexlify */ .Dv)((0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_0__/* .concat */ .zo)(tight));
}
function keccak256(types, values) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_3__/* .keccak256 */ .w)(pack(types, values));
}
function sha256(types, values) {
    return (0,_ethersproject_sha2__WEBPACK_IMPORTED_MODULE_4__/* .sha256 */ .JQ)(pack(types, values));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 21089:
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

/***/ 70988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(77504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(7931);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(82215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(18658);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx






function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? 'primary' : 'inherit'
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {
    });
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogBackdropRoot: {
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network.activatedSocialNetworkUI.customization.componentOverwrite || {
    };
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container , ...dialogClasses } = (0,shared_src.useStylesExtends)(useStyles(), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack  } = (0,src/* useDialogStackConsumer */.N8)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
            container: container1,
            fullScreen: fullScreen,
            classes: dialogClasses,
            scroll: "paper",
            fullWidth: true,
            maxWidth: "sm",
            disableAutoFocus: true,
            disableEnforceFocus: true,
            onClose: (event, reason)=>{
                if (reason === 'backdropClick' && disableBackdropClick) return;
                onClose === null || onClose === void 0 ? void 0 : onClose();
            },
            onBackdropClick: disableBackdropClick ? void 0 : onClose,
            BackdropProps: {
                classes: {
                    root: dialogBackdropRoot
                }
            },
            ...rest,
            ...extraProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src.ErrorBoundary, {
                children: [
                    title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        classes: {
                            root: dialogTitle
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "large",
                                classes: {
                                    root: dialogCloseButton
                                },
                                "aria-label": t('post_dialog__dismiss_aria'),
                                onClick: onClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                    style: shouldReplaceExitWithBack ? 'back' : titleBarIconStyle
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: dialogTitleTypography,
                                display: "inline",
                                variant: "inherit",
                                children: title
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    }),
                    content,
                    actions
                ]
            })
        }));
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,shared_src.mergeClasses)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 8354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FootnoteMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93244);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85290);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _utils_shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33465);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        link: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        title: {
            fontSize: 10,
            color: theme.palette.text.secondary
        }
    })
);
function FootnoteMenu(props) {
    var ref;
    const { children , options , selectedIndex =-1 , onChange  } = props;
    const { classes  } = useStyles();
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        onClose();
    };
    const onClose = ()=>setAnchorEl(null)
    ;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                className: classes.link,
                color: "inherit",
                underline: "none",
                onClick: onOpen,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                        className: classes.title,
                        variant: "subtitle2",
                        children: (ref = options[selectedIndex]) === null || ref === void 0 ? void 0 : ref.name
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootMenu */ .dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                children: options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        selected: selectedIndex === i,
                        onClick: ()=>onSelect(x)
                        ,
                        children: x.name
                    }, x.value)
                )
            })
        ]
    }));
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
/***/ 56994:
=======
/***/ 88867:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ SettingsDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(26424);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(9011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(92070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Switch/Switch.js
var Switch = __webpack_require__(9655);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
var types = __webpack_require__(26428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Slider/Slider.js
var Slider = __webpack_require__(84329);
=======
var types = __webpack_require__(66632);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Slider/Slider.js
var Slider = __webpack_require__(43317);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
var constants = __webpack_require__(71765);
// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(44752);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SlippageSlider.tsx





function SlippageSlider(props) {
    const { value =constants/* SLIPPAGE_DEFAULT */.Nd , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
        value: value,
        getAriaValueText: (v)=>(0,web3_shared_src/* formatPercentage */.rlw)((0,helpers/* toBips */.SG)(v))
        ,
        step: 10,
        min: constants/* SLIPPAGE_MIN */.Bq,
        max: constants/* SLIPPAGE_MAX */.Q9,
        onChange: (_, value1)=>onChange(value1)
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(67047);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTradeSettings.ts
var useTradeSettings = __webpack_require__(94003);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/uniswap/useSingleHopOnly.ts
var useSingleHopOnly = __webpack_require__(68362);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/SettingsDialog.tsx
















const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2)
        },
        heading: {
            flex: 1
        },
        accordion: {
            backgroundColor: theme.palette.background.default
        },
        details: {
            display: 'flex'
        }
    };
});
function SettingsDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const provider = (0,shared_src.useValueRef)(settings/* currentTradeProviderSettings */.de);
    const slippage = (0,shared_src.useValueRef)(settings/* currentSlippageSettings */.It);
    const singleHopOnly = (0,useSingleHopOnly/* useSingleHopOnly */.f)();
    const { pools  } = (0,useTradeSettings/* useTradeProviderSettings */.m)(provider);
    //#region remote controlled dialog
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
    //#endregion
    const onReset = (0,react.useCallback)(()=>{
        settings/* currentSlippageSettings.value */.It.value = constants/* SLIPPAGE_DEFAULT */.Nd;
        if (provider === types/* TradeProvider.ZRX */.z4.ZRX) (0,settings/* getCurrentTradeProviderGeneralSettings */.Aj)(provider).value = json_stable_stringify_default()({
            pools: (0,esm/* getEnumAsArray */.Yl)(types/* ZrxTradePool */.Zy).map((x)=>x.value
            )
        });
    }, [
        provider
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: closeDialog,
        title: t('plugin_trader_swap_settings'),
        maxWidth: "xs",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                component: "section",
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                                    className: classes.accordion,
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.heading,
                                                    children: t('plugin_trader_slippage_tolerance')
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                    children: [
                                                        slippage / 100,
                                                        "%"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                                            className: classes.details,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SlippageSlider, {
                                                value: slippage,
                                                onChange: (tolerance)=>{
                                                    settings/* currentSlippageSettings.value */.It.value = tolerance;
                                                }
                                            })
                                        })
                                    ]
                                }),
                                provider === types/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Accordion/* default */.Z, {
                                    className: classes.accordion,
                                    elevation: 0,
                                    expanded: false,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.heading,
                                                children: t('plugin_trader_single_hop_only')
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                                                color: "primary",
                                                size: "small",
                                                checked: singleHopOnly,
                                                onChange: (ev)=>{
                                                    ev.stopPropagation();
                                                    settings/* currentSingleHopOnlySettings.value */.DG.value = ev.target.checked;
                                                }
                                            })
                                        ]
                                    })
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                            className: classes.footer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    onClick: closeDialog,
                                    children: t('confirm')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    onClick: onReset,
                                    children: t('reset')
                                })
                            ]
                        })
                    ]
                })
            })
        })
    }));
}


/***/ }),

/***/ 3097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r": () => (/* binding */ TradeFooter)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(80784);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(36039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(12445);
;// CONCATENATED MODULE: ./src/resources/CoinMarketCapIcon.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    viewBox: "0 0 41 41",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
        fillOpacity: ".85",
        fillRule: "evenodd",
        fill: "currentColor",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M35.124 24.5c-.715.452-1.557.508-2.197.147-.813-.459-1.26-1.534-1.26-3.029v-4.473c0-2.16-.854-3.697-2.282-4.112-2.42-.705-4.24 2.256-4.924 3.368l-4.268 6.92v-8.458c-.048-1.946-.68-3.11-1.88-3.461-.794-.232-1.982-.139-3.136 1.627L5.615 28.383A16.869 16.869 0 0 1 3.671 20.5c0-9.249 7.412-16.773 16.522-16.773S36.714 11.251 36.714 20.5c0 .016.004.03.005.045 0 .016-.003.03-.002.046.086 1.791-.494 3.216-1.593 3.91zm5.261-3.999V20.5v-.046l-.001-.046C40.333 9.144 31.296 0 20.192 0 9.059 0 0 9.196 0 20.5 0 31.803 9.059 41 20.193 41c5.109 0 9.985-1.942 13.728-5.467.744-.7.788-1.879.098-2.633a1.817 1.817 0 0 0-2.594-.1 16.331 16.331 0 0 1-11.232 4.473c-4.878 0-9.267-2.159-12.294-5.583l8.623-13.846v6.383c0 3.066 1.189 4.057 2.186 4.347.998.29 2.523.092 4.124-2.508l4.743-7.689c.152-.248.292-.462.42-.647v3.888c0 2.866 1.148 5.158 3.149 6.287 1.804 1.018 4.072.926 5.92-.24 2.24-1.415 3.447-4.022 3.321-7.164z"
        })
    })
});
function CoinMarketCapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/CoinGeckoIcon.tsx


const CoinGeckoIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 276 276",
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8dc63f",
                d: "M276,137.39A138,138,0,1,1,137.39,0h0A138,138,0,0,1,276,137.39Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#f9e988",
                d: "M265.65,137.44a127.63,127.63,0,1,1-128.21-127h0A127.65,127.65,0,0,1,265.65,137.44Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M140.35,18.66a70.18,70.18,0,0,1,24.53,0,74.75,74.75,0,0,1,23.43,7.85c7.28,4,13.57,9.43,19.83,14.52s12.49,10.3,18.42,16a93.32,93.32,0,0,1,15.71,19,108.28,108.28,0,0,1,11,22.17c5.33,15.66,7.18,32.53,4.52,48.62H257c-2.67-15.95-6.29-31.15-12-45.61A177.51,177.51,0,0,0,235.56,80,209.1,209.1,0,0,0,223.14,60a72.31,72.31,0,0,0-16.64-16.8c-6.48-4.62-13.93-7.61-21.14-10.45S171,27,163.48,24.84s-15.16-3.78-23.14-5.35Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8bc53f",
                d: "M202.74,92.39c-9.26-2.68-18.86-6.48-28.58-10.32-.56-2.44-2.72-5.48-7.09-9.19-6.35-5.51-18.28-5.37-28.59-2.93-11.38-2.68-22.62-3.63-33.41-1C16.82,93.26,66.86,152.57,34.46,212.19c4.61,9.78,54.3,66.84,126.2,51.53,0,0-24.59-59.09,30.9-87.45C236.57,153.18,269.09,110.46,202.74,92.39Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M213.64,131.2a5.35,5.35,0,1,1-5.38-5.32A5.36,5.36,0,0,1,213.64,131.2Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#009345",
                d: "M138.48,69.91c6.43.46,29.68,8,35.68,12.12-5-14.5-21.83-16.43-35.68-12.12Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M144.6,106.58a24.68,24.68,0,1,1-24.69-24.67h0a24.68,24.68,0,0,1,24.68,24.66Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#58595b",
                d: "M137.28,106.8a17.36,17.36,0,1,1-17.36-17.36h0A17.36,17.36,0,0,1,137.28,106.8Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8bc53f",
                d: "M233.63,142.08c-20,14.09-42.74,24.78-75,24.78-15.1,0-18.16-16-28.14-8.18-5.15,4.06-23.31,13.14-37.72,12.45S55,162,48.49,131.23C45.91,162,44.59,184.65,33,210.62c23,36.83,77.84,65.24,127.62,53C155.31,226.27,188,189.69,206.34,171c7-7.09,20.3-18.66,27.29-28.91Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#58595b",
                d: "M232.85,143c-6.21,5.66-13.6,9.85-21.12,13.55a134.9,134.9,0,0,1-23.7,8.63c-8.16,2.11-16.67,3.7-25.29,2.92s-17.43-3.71-23.14-10.17l.27-.31c7,4.54,15.08,6.14,23.12,6.37a108.27,108.27,0,0,0,24.3-2,132.71,132.71,0,0,0,23.61-7.3c7.63-3.15,15.18-6.8,21.68-12Z"
            })
        ]
    })
});
function CoinGeckoIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: CoinGeckoIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/UniswapIcon.tsx


const UniswapIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 14 15",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.15217 1.55141C3.96412 1.52242 3.95619 1.51902 4.04468 1.5055C4.21427 1.47958 4.61472 1.51491 4.89067 1.58012C5.53489 1.73232 6.12109 2.12221 6.74683 2.81466L6.91307 2.99862L7.15088 2.96062C8.15274 2.8006 9.17194 2.92778 10.0244 3.31918C10.2589 3.42686 10.6287 3.64121 10.6749 3.69629C10.6896 3.71384 10.7166 3.82684 10.7349 3.94742C10.7982 4.36458 10.7665 4.68434 10.6382 4.92317C10.5683 5.05313 10.5644 5.09432 10.6114 5.20554C10.6489 5.2943 10.7534 5.35999 10.8569 5.35985C11.0687 5.35956 11.2967 5.0192 11.4024 4.54561L11.4444 4.3575L11.5275 4.45109C11.9835 4.96459 12.3417 5.66488 12.4032 6.16335L12.4192 6.29332L12.3426 6.17517C12.2107 5.97186 12.0781 5.83346 11.9084 5.72183C11.6024 5.52062 11.2789 5.45215 10.4222 5.40727C9.64839 5.36675 9.21045 5.30106 8.77621 5.16032C8.03738 4.9209 7.66493 4.60204 6.78729 3.4576C6.39748 2.94928 6.15654 2.66804 5.91687 2.44155C5.37228 1.92691 4.83716 1.65701 4.15217 1.55141Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.8494 2.68637C10.8689 2.34575 10.9153 2.12108 11.0088 1.9159C11.0458 1.83469 11.0804 1.76822 11.0858 1.76822C11.0911 1.76822 11.075 1.82816 11.05 1.90142C10.9821 2.10054 10.9709 2.3729 11.0177 2.68978C11.0771 3.09184 11.1109 3.14985 11.5385 3.58416C11.739 3.78788 11.9723 4.0448 12.0568 4.15511L12.2106 4.35568L12.0568 4.21234C11.8688 4.03705 11.4364 3.6952 11.3409 3.64633C11.2768 3.61356 11.2673 3.61413 11.2278 3.65321C11.1914 3.68922 11.1837 3.74333 11.1787 3.99915C11.1708 4.39786 11.1161 4.65377 10.9842 4.90965C10.9128 5.04805 10.9015 5.01851 10.9661 4.8623C11.0143 4.74566 11.0192 4.69439 11.0189 4.30842C11.0181 3.53291 10.9255 3.34647 10.3823 3.02709C10.2447 2.94618 10.0179 2.8295 9.87839 2.76778C9.73887 2.70606 9.62805 2.6523 9.63208 2.64828C9.64746 2.63307 10.1772 2.78675 10.3905 2.86828C10.7077 2.98954 10.76 3.00526 10.7985 2.99063C10.8244 2.98082 10.8369 2.90608 10.8494 2.68637Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.51745 4.01304C4.13569 3.49066 3.89948 2.68973 3.95062 2.091L3.96643 1.90572L4.05333 1.92148C4.21652 1.95106 4.49789 2.05515 4.62964 2.13469C4.9912 2.35293 5.14773 2.64027 5.30697 3.37811C5.35362 3.59423 5.41482 3.8388 5.44298 3.9216C5.48831 4.05487 5.65962 4.36617 5.7989 4.56834C5.89922 4.71395 5.83258 4.78295 5.61082 4.76305C5.27215 4.73267 4.8134 4.41799 4.51745 4.01304Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.3863 7.90088C8.60224 7.18693 7.97389 6.56721 7.97389 5.52157C7.97389 5.36769 7.97922 5.24179 7.98571 5.24179C7.99221 5.24179 8.06124 5.29257 8.1391 5.35465C8.50088 5.64305 8.906 5.76623 10.0275 5.92885C10.6875 6.02455 11.0589 6.10185 11.4015 6.21477C12.4904 6.57371 13.1641 7.30212 13.3248 8.29426C13.3715 8.58255 13.3441 9.12317 13.2684 9.4081C13.2087 9.63315 13.0263 10.0388 12.9779 10.0544C12.9645 10.0587 12.9514 10.0076 12.9479 9.93809C12.9296 9.56554 12.7402 9.20285 12.4221 8.93116C12.0604 8.62227 11.5745 8.37633 10.3863 7.90088Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.13385 8.19748C9.11149 8.06527 9.07272 7.89643 9.04769 7.82228L9.00217 7.68748L9.08672 7.7818C9.20374 7.91234 9.2962 8.07937 9.37457 8.30185C9.43438 8.47165 9.44111 8.52215 9.44066 8.79807C9.4402 9.06896 9.43273 9.12575 9.3775 9.27859C9.29042 9.51959 9.18233 9.69048 9.00097 9.87391C8.67507 10.2036 8.25607 10.3861 7.65143 10.4618C7.54633 10.4749 7.24 10.4971 6.97069 10.511C6.292 10.5461 5.84531 10.6186 5.44393 10.7587C5.38623 10.7788 5.3347 10.7911 5.32947 10.7859C5.31323 10.7698 5.58651 10.6079 5.81223 10.4998C6.1305 10.3474 6.44733 10.2643 7.15719 10.1468C7.50785 10.0887 7.86998 10.0183 7.96194 9.99029C8.83033 9.72566 9.27671 9.04276 9.13385 8.19748Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.95169 9.64109C9.71465 9.13463 9.66022 8.64564 9.79008 8.18961C9.80399 8.14088 9.82632 8.101 9.83976 8.101C9.85319 8.101 9.90913 8.13105 9.96404 8.16777C10.0733 8.24086 10.2924 8.36395 10.876 8.68023C11.6043 9.0749 12.0196 9.3805 12.302 9.72965C12.5493 10.0354 12.7023 10.3837 12.776 10.8084C12.8177 11.0489 12.7932 11.6277 12.7311 11.8699C12.5353 12.6337 12.0802 13.2336 11.4311 13.5837C11.336 13.635 11.2506 13.6771 11.2414 13.6773C11.2321 13.6775 11.2668 13.5899 11.3184 13.4827C11.5367 13.029 11.5616 12.5877 11.3965 12.0965C11.2954 11.7957 11.0893 11.4287 10.6732 10.8084C10.1893 10.0873 10.0707 9.89539 9.95169 9.64109Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3.25046 12.3737C3.91252 11.8181 4.73629 11.4234 5.48666 11.3022C5.81005 11.25 6.34877 11.2707 6.64823 11.3469C7.12824 11.469 7.55763 11.7425 7.78094 12.0683C7.99918 12.3867 8.09281 12.6642 8.19029 13.2816C8.22875 13.5252 8.27057 13.7697 8.28323 13.8251C8.35644 14.1451 8.4989 14.4008 8.67544 14.5293C8.95583 14.7333 9.43865 14.7459 9.91362 14.5618C9.99423 14.5305 10.0642 14.5089 10.0691 14.5138C10.0864 14.5308 9.84719 14.6899 9.67847 14.7737C9.45143 14.8864 9.2709 14.93 9.03102 14.93C8.59601 14.93 8.23486 14.7101 7.9335 14.2616C7.87419 14.1733 7.7409 13.909 7.63729 13.6741C7.3191 12.9528 7.16199 12.7331 6.79255 12.4926C6.47104 12.2834 6.05641 12.2459 5.74449 12.3979C5.33475 12.5976 5.22043 13.118 5.51389 13.4478C5.63053 13.5789 5.84803 13.6919 6.02588 13.7139C6.35861 13.7551 6.64455 13.5035 6.64455 13.1696C6.64455 12.9528 6.56071 12.8291 6.34966 12.7344C6.0614 12.6051 5.75156 12.7563 5.75304 13.0254C5.75368 13.1402 5.80396 13.2122 5.91971 13.2643C5.99397 13.2977 5.99569 13.3003 5.93514 13.2878C5.67066 13.2333 5.6087 12.9164 5.82135 12.706C6.07667 12.4535 6.60461 12.5649 6.78591 12.9097C6.86208 13.0545 6.87091 13.3429 6.80451 13.517C6.6559 13.9068 6.22256 14.1117 5.78297 14.0002C5.48368 13.9242 5.36181 13.842 5.00097 13.4726C4.37395 12.8306 4.13053 12.7062 3.22657 12.566L3.05335 12.5391L3.25046 12.3737Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.308383 0.883984C2.40235 3.40996 3.84457 4.45213 4.00484 4.67231C4.13717 4.85412 4.08737 5.01757 3.86067 5.14567C3.7346 5.21689 3.47541 5.28905 3.34564 5.28905C3.19887 5.28905 3.14847 5.23278 3.14847 5.23278C3.06337 5.15255 3.01544 5.16658 2.5784 4.39555C1.97166 3.45981 1.46389 2.68357 1.45004 2.67057C1.41801 2.64052 1.41856 2.64153 2.51654 4.59413C2.69394 5.0011 2.55182 5.15049 2.55182 5.20845C2.55182 5.32636 2.51946 5.38834 2.37311 5.55059C2.12914 5.8211 2.02008 6.12505 1.94135 6.7541C1.8531 7.45926 1.60492 7.95737 0.917156 8.80989C0.514562 9.30893 0.448686 9.4004 0.3471 9.60153C0.219144 9.85482 0.183961 9.99669 0.169701 10.3165C0.154629 10.6547 0.183983 10.8732 0.287934 11.1965C0.378939 11.4796 0.473932 11.6665 0.716778 12.0403C0.926352 12.3629 1.04702 12.6027 1.04702 12.6965C1.04702 12.7711 1.06136 12.7712 1.38611 12.6983C2.16328 12.5239 2.79434 12.2171 3.14925 11.8411C3.36891 11.6084 3.42048 11.4799 3.42215 11.1611C3.42325 10.9525 3.41587 10.9088 3.35914 10.7888C3.2668 10.5935 3.09869 10.4311 2.72817 10.1794C2.2427 9.84953 2.03534 9.58398 1.97807 9.21878C1.93108 8.91913 1.98559 8.70771 2.25416 8.14825C2.53214 7.56916 2.60103 7.32239 2.64763 6.73869C2.67773 6.36158 2.71941 6.21286 2.82842 6.09348C2.94212 5.969 3.04447 5.92684 3.32584 5.88863C3.78457 5.82635 4.07667 5.70839 4.31677 5.48849C4.52505 5.29772 4.61221 5.11391 4.62558 4.8372L4.63574 4.62747L4.51934 4.49259C4.09783 4.00411 0.0261003 0.5 0.000160437 0.5C-0.00538105 0.5 0.133325 0.672804 0.308383 0.883984ZM1.28364 10.6992C1.37894 10.5314 1.3283 10.3158 1.16889 10.2104C1.01827 10.1109 0.78428 10.1578 0.78428 10.2875C0.78428 10.3271 0.806303 10.3559 0.855937 10.3813C0.939514 10.424 0.945581 10.4721 0.879823 10.5703C0.81323 10.6698 0.818604 10.7573 0.894991 10.8167C1.0181 10.9125 1.19237 10.8598 1.28364 10.6992Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.92523 5.99865C4.70988 6.06439 4.50054 6.29124 4.43574 6.5291C4.39621 6.67421 4.41864 6.92875 4.47785 7.00736C4.57351 7.13433 4.66602 7.16778 4.91651 7.16603C5.40693 7.16263 5.83327 6.95358 5.88284 6.69224C5.92347 6.47801 5.73622 6.18112 5.4783 6.05078C5.34521 5.98355 5.06217 5.95688 4.92523 5.99865ZM5.49853 6.44422C5.57416 6.33741 5.54107 6.22198 5.41245 6.14391C5.1675 5.99525 4.79708 6.11827 4.79708 6.34826C4.79708 6.46274 4.99025 6.58765 5.16731 6.58765C5.28516 6.58765 5.44644 6.5178 5.49853 6.44422Z",
            fill: "currentColor"
        })
    ]
});
function UniswapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: UniswapIcon_svg
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/DataProviderIcon.tsx







const useStyles = (0,src/* makeStyles */.ZL)()({
    cmc: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    coin_gecko: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    uniswap: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    }
});
function DataProviderIcon(props) {
    const { classes  } = useStyles();
    switch(props.provider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CoinGeckoIcon, {
                classes: {
                    root: classes.coin_gecko
                },
                viewBox: "0 0 16 16"
            }));
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketCapIcon, {
                classes: {
                    root: classes.cmc
                },
                viewBox: "0 0 16 16"
            }));
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UniswapIcon, {
                classes: {
                    root: classes.uniswap
                },
                viewBox: "0 0 16 16"
            }));
        default:
            (0,esm/* unreachable */.t1)(props.provider);
    }
}

;// CONCATENATED MODULE: ./src/resources/BalancerIcon.tsx


const BalancerIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 258 258",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
        id: "Spread",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            id: "pebbles-pad",
            transform: "translate(1.000000, 1.000000)",
            fill: "currentColor",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                id: "pebbles",
                transform: "translate(17.000000, 38.000000)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
                    transform: "translate(0.000000, 0.741803)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M155.878763,109.234443 C194.82596,114.994114 222,128.020689 222,143.168033 C222,163.652365 172.303607,180.258197 111,180.258197 C49.6963928,180.258197 0,163.652365 0,143.168033 C0,128.020689 27.1740399,114.994114 66.121237,109.234443 C79.4985588,111.954918 94.776664,113.495902 111,113.495902 C126.816331,113.495902 141.734263,112.031267 154.869366,109.438764 Z",
                            id: "peb-bot"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            d: "M139.092748,48.2491027 C174.367502,52.176856 199.8,63.2988713 199.8,76.4057377 C199.8,92.7932032 160.042886,106.077869 111,106.077869 C61.9571142,106.077869 22.2,92.7932032 22.2,76.4057377 C22.2,63.2988713 47.6324978,52.176856 82.9072522,48.2491027 C91.5473488,49.6620291 101.039152,50.442623 111,50.442623 C120.612406,50.442623 129.788009,49.715686 138.182799,48.3955286 Z",
                            id: "peb-med"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                            id: "peb-top",
                            transform: "translate(44.400000, 0.000000)",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ellipse", {
                                id: "peb-sm",
                                cx: "66.6",
                                cy: "22.2540984",
                                rx: "66.6",
                                ry: "22.2540984"
                            })
                        })
                    ]
                })
            })
        })
    })
});
function BalancerIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: BalancerIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/SashimiSwapIcon.tsx


const SashimiSwapIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 2000 1800",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M419 1490 c-42 -4 -110 -15 -152 -24 -60 -14 -75 -20 -70 -32 4 -10 14 -14 27 -10 97 23 160 28 279 24 114 -4 145 -9 224 -36 163 -55 266 -117 389 -234 92 -88 161 -180 219 -294 25 -48 45 -91 45 -95 0 -15 -178 -31 -294 -27 -383 16 -712 232 -853 561 -41 95 -39 91 -52 83 -21 -13 62 -203 139 -316 135 -199 373 -364 615 -426 108 -28 283 -37 417 -21 l67 8 8 -28 c5 -16 8 -103 8 -194 l0 -166 59 -12 c32 -7 60 -10 63 -7 24 24 30 272 9 379 l-13 68 74 34 c89 41 193 109 261 170 l51 46 -49 45 -49 46 -24 -18 c-110 -85 -140 -106 -197 -137 -108 -58 -104 -59 -146 25 -55 110 -101 174 -187 265 -224 234 -549 355 -868 323z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M598 1346 c-8 -63 -50 -148 -103 -205 -50 -54 -52 -69 -12 -96 33 -21 62 -7 105 50 42 56 71 130 79 205 7 66 -4 90 -42 90 -19 0 -23 -7 -27 -44z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M698 1282 c-6 -98 -26 -154 -83 -232 -19 -26 -35 -55 -35 -64 0 -19 79 -72 129 -86 49 -13 80 5 113 65 51 94 59 222 20 319 -12 31 -25 43 -66 62 -28 13 -56 24 -62 24 -7 0 -13 -33 -16 -88z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M896 1243 c5 -21 9 -81 9 -133 0 -90 -2 -99 -37 -168 -21 -41 -38 -78 -38 -83 0 -9 81 -34 147 -44 34 -5 45 -3 62 14 43 43 65 195 40 284 -13 47 -55 96 -118 136 -65 42 -75 41 -65 -6z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M1126 1023 c5 -62 2 -91 -15 -143 -15 -49 -17 -66 -8 -72 13 -10 184 0 205 11 22 12 -148 281 -178 281 -5 0 -7 -34 -4 -77z",
            fill: "currentColor"
        })
    ]
});
function SashimiSwapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: SashimiSwapIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/SushiSwapIcon.tsx


const SushiSwapIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    viewBox: "0 0 100 90",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M30.51 14.31c2.4-3.39 7.12-4.9 13.21-4.4 8.38.69 19.51 5.16 30.17 12.81s18.48 16.74 21.82 24.46c2.44 5.59 2.52 10.54.08 13.93L79.08 84.46c-2.44 3.4-7.16 4.9-13.22 4.4-8.37-.69-19.5-5.16-30.2-12.81S17.18 59.31 13.83 51.59c-2.44-5.6-2.51-10.54-.08-13.93L30.51 14.3zm36.3 46.74L41.32 76.42c1.18.74 2.36 1.44 3.5 2.1L71 62.74c-1.4-.5-2.78-1.06-4.19-1.69zm-9.76-5.23L33 70.37c1.1.88 2.2 1.74 3.38 2.6L61 58.11c-1.35-.72-2.65-1.47-3.95-2.29zM52 52.4c-10.48-7.59-18.11-16.55-21.41-24.17a21.36 21.36 0 01-1.81-6.6l-12.71 17.7c-1.92 2.71-1.53 6.65.4 11.11 2.2 5.05 6.41 10.69 12.11 16.09zm41.49 7c1.93-2.71 1.57-6.65-.39-11.12-3.19-7.35-10.7-16-20.85-23.27S51.47 13.43 43.49 12.76c-4.88-.4-8.74.51-10.66 3.22l-.12.16c-1.81 2.7-1.42 6.57.47 11 3.23 7.36 10.7 16 20.89 23.28S74.83 62 82.81 62.65c4.76.4 8.58-.46 10.54-3l.12-.16zm-26-27.77c5.11 3.65 8.84 8 10.46 11.64.9 2.08 1.14 3.91.23 5.16s-2.71 1.62-5 1.44c-4-.33-9.32-2.51-14.4-6.17s-8.85-8-10.46-11.63c-.9-2.08-1.14-3.91-.23-5.17s2.71-1.62 4.95-1.43c4.05.37 9.32 2.53 14.44 6.2z"
    })
});
function SushiSwapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: SushiSwapIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/ZRXIcon.tsx


const ZRXIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M8.402 25.28l3.105-3.212-3.86-5.209-4.915-6.954A19.904 19.904 0 0 0 0 20c0 6.1 2.732 11.562 7.04 15.23l6.239-4.408a12.796 12.796 0 0 1-4.877-5.541zM14.72 8.402l3.212 3.105 5.209-3.86 6.954-4.915A19.904 19.904 0 0 0 20 0C13.9 0 8.438 2.732 4.77 7.04l4.408 6.239a12.795 12.795 0 0 1 5.541-4.877zm13.773 9.53l3.86 5.209 4.915 6.954A19.904 19.904 0 0 0 40 20c0-6.1-2.732-11.562-7.04-15.23l-6.24 4.408a12.796 12.796 0 0 1 4.877 5.541l-3.105 3.213zM35.23 32.96l-4.408-6.239a12.795 12.795 0 0 1-5.541 4.877l-3.213-3.105-5.209 3.86-6.954 4.915A19.904 19.904 0 0 0 20 40c6.1 0 11.562-2.732 15.23-7.04z",
        fill: "currentColor"
    })
});
function ZRXIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: ZRXIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/DODOIcon.tsx


const DODOIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 54 54",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                x1: "4.518%",
                y1: "-4.373%",
                x2: "100%",
                y2: "100%",
                id: "dodo_gradient",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#FFFC2C",
                        offset: "0%"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#EFE806",
                        offset: "100%"
                    })
                ]
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                    fill: "url(#dodo_gradient)",
                    cx: "25",
                    cy: "25",
                    r: "25"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M25.434 8c1.135 0 2.055 1.677 2.055 3.745 0 .05 0 .1-.002.15.61-.747 1.32-1.116 1.863-.88.552.24.787 1.046.675 2.038-.027.47-.14.987-.345 1.504-.12.3-.26.578-.416.827C37.353 17.236 43.089 24.09 42.999 36h-4.923c.076-10.096-5.609-15.081-13.048-15.238-8.101-.17-12.585 5.391-13.105 15.238H7c.63-11.961 5.641-19.249 14.443-20.682-.14-.21-.4-.636-.516-.884-.69-1.478-.592-2.999.22-3.398.648-.32 1.555.176 2.246 1.143a6.829 6.829 0 01-.014-.434c0-2.068.92-3.745 2.055-3.745zm-4.496 18.575c.594 0 1.075.55 1.075 1.23v3.022c0 .679-.481 1.23-1.075 1.23-.593 0-1.074-.551-1.074-1.23v-3.022c0-.68.48-1.23 1.074-1.23zm8.595 0c.593 0 1.074.55 1.074 1.23v3.022c0 .679-.481 1.23-1.074 1.23-.594 0-1.075-.551-1.075-1.23v-3.022c0-.68.481-1.23 1.075-1.23z",
                    fill: "#000"
                })
            ]
        })
    ]
});
function DODOIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: DODOIcon_svg
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
var types = __webpack_require__(26428);
=======
var types = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeProviderIcon.tsx











const quickswapIcon = new URL(/* asset import */ __webpack_require__(23706), __webpack_require__.b).toString();
const pancakeswapIcon = new URL(/* asset import */ __webpack_require__(16762), __webpack_require__.b).toString();
const TradeProviderIcon_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 16,
            height: 16,
            verticalAlign: 'bottom'
        }
    })
);
function TradeProviderIcon(props) {
    const { classes  } = TradeProviderIcon_useStyles();
    switch(props.provider){
        case types/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UniswapIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UniswapIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.ZRX */.z4.ZRX:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ZRXIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SushiSwapIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SashimiSwapIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.BALANCER */.z4.BALANCER:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(BalancerIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        case types/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: quickswapIcon,
                alt: (0,pipes/* resolveTradeProviderName */.uM)(types/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP),
                className: classes.icon
            }));
        case types/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: pancakeswapIcon,
                alt: (0,pipes/* resolveTradeProviderName */.uM)(types/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP),
                className: classes.icon
            }));
        case types/* TradeProvider.DODO */.z4.DODO:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DODOIcon, {
                classes: {
                    root: classes.icon
                }
            }));
        default:
            (0,esm/* unreachable */.t1)(props.provider);
    }
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/FootnoteMenu.tsx
var FootnoteMenu = __webpack_require__(8354);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeFooter.tsx











const TradeFooter_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            justifyContent: 'space-between'
        },
        footnote: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            marginRight: theme.spacing(0.5)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        footMenu: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            display: 'flex',
            alignItems: 'center'
        },
        footName: {
            marginLeft: theme.spacing(0.5)
        },
        maskbook: {
            width: 40,
            height: 10
        }
    };
});
const TradeFooter = (props)=>{
    const { showDataProviderIcon =false , showTradeProviderIcon =false , dataProvider , tradeProvider , dataProviders =[] , tradeProviders =[] , onDataProviderChange , onTradeProviderChange ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(TradeFooter_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
        className: classes.footer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.footnote,
                variant: "subtitle2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            t('plugin_powered_by'),
                            " "
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.footLink,
                        color: "textSecondary",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        title: "Mask",
                        href: "https://mask.io",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookTextIcon */.vA, {
                            classes: {
                                root: classes.maskbook
                            },
                            viewBox: "0 0 80 20"
                        })
                    })
                ]
            }),
            showDataProviderIcon ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.footMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.footnote,
                        children: "Data Source"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                        options: dataProviders.map((x)=>({
                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DataProviderIcon, {
                                            provider: x
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.footName,
                                            children: (0,pipes/* resolveDataProviderName */.K7)(x)
                                        })
                                    ]
                                }),
                                value: x
                            })
                        ),
                        selectedIndex: typeof dataProvider !== 'undefined' ? dataProviders.indexOf(dataProvider) : -1,
                        onChange: onDataProviderChange
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                    })
                ]
            }) : null,
            showTradeProviderIcon ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.footMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.footnote,
                        children: "Supported by"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                        options: tradeProviders.map((x)=>({
                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeProviderIcon, {
                                            provider: x
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.footName,
                                            children: (0,pipes/* resolveTradeProviderName */.uM)(x)
                                        })
                                    ]
                                }),
                                value: x
                            })
                        ),
                        selectedIndex: typeof tradeProvider !== 'undefined' ? tradeProviders.indexOf(tradeProvider) : -1,
                        onChange: onTradeProviderChange,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                        })
                    })
                ]
            }) : null
        ]
    }));
};


/***/ }),

/***/ 65690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Trader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useTimeoutFn.js
var useTimeoutFn = __webpack_require__(89923);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(24620);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Tune.js
var Tune = __webpack_require__(41800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(61843);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
var types = __webpack_require__(26428);
=======
var types = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var settings = __webpack_require__(67047);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ./src/plugins/Trader/helpers/index.ts + 3 modules
var helpers = __webpack_require__(44752);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(36039);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(65164);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTradeContext.ts
var useTradeContext = __webpack_require__(25754);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeApproveComputed.ts




function useTradeApproveComputed(trade, token) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    return (0,react.useMemo)(()=>{
        var _decimals, _name, _symbol;
        return {
            approveToken: (token === null || token === void 0 ? void 0 : token.type) === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? (0,web3_shared_src/* createERC20Token */.wY6)(chainId, token.address, (_decimals = token.decimals) !== null && _decimals !== void 0 ? _decimals : 0, (_name = token.name) !== null && _name !== void 0 ? _name : '', (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : '') : null,
            approveAmount: trade ? trade.inputAmount : web3_shared_src/* ZERO */.xEJ,
            approveAddress: (()=>{
                if ((context === null || context === void 0 ? void 0 : context.TYPE) === types/* TradeProvider.ZRX */.z4.ZRX) return (trade === null || trade === void 0 ? void 0 : trade.trade_) ? trade.trade_.allowanceTarget : '';
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

// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
var constants = __webpack_require__(71765);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeForm.tsx
























const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        form: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2)
        },
        section: {
            textAlign: 'center',
            margin: `${theme.spacing(1)}px auto`
        },
        divider: {
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1)
        },
        status: {
            marginTop: theme.spacing(0.5),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        label: {
            flex: 1,
            textAlign: 'left'
        },
        icon: {
            marginLeft: theme.spacing(0.5)
        },
        reverseIcon: {
            cursor: 'pointer'
        },
        button: {
            marginTop: theme.spacing(1.5),
            paddingTop: 12,
            paddingBottom: 12
        }
    };
});
function TradeForm(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { trade , provider , loading , strategy , inputToken , outputToken , inputTokenBalance , outputTokenBalance , inputAmount , outputAmount , onInputAmountChange , onOutputAmountChange , onReverseClick =lodash.noop , onRefreshClick =lodash.noop , onTokenChipClick =lodash.noop , onSwap ,  } = props;
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    //#region approve token
    const { approveToken , approveAmount , approveAddress  } = useTradeApproveComputed(trade, inputToken);
    //#endregion
    //#region token balance
    const inputTokenBalanceAmount = new (bignumber_default())(inputTokenBalance || '0');
    const outputTokenBalanceAmount = new (bignumber_default())(outputTokenBalance || '0');
    //#endregion
    //#region remote controlled swap settings dialog
    const { openDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated);
    //#endregion
    //#region form controls
    const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
    var ref1;
    const inputTokenTradeAmount = new (bignumber_default())(inputAmount || '0').multipliedBy((0,web3_shared_src/* pow10 */.wAG)((ref1 = inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals) !== null && ref1 !== void 0 ? ref1 : 0));
    var ref2;
    const outputTokenTradeAmount = new (bignumber_default())(outputAmount || '0').multipliedBy((0,web3_shared_src/* pow10 */.wAG)((ref2 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals) !== null && ref2 !== void 0 ? ref2 : 0));
    const inputPanelLabel = loading && !isExactIn ? t('plugin_trader_finding_price') : 'From' + (!isExactIn && inputTokenTradeAmount.isGreaterThan(0) ? ' (estimated)' : '');
    const outputPanelLabel = loading && isExactIn ? t('plugin_trader_finding_price') : 'To' + (isExactIn && outputTokenTradeAmount.isGreaterThan(0) ? ' (estimated)' : '');
    const sections = [
        {
            key: 'input',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: inputPanelLabel,
                amount: inputAmount,
                balance: inputTokenBalanceAmount.toFixed(),
                token: inputToken,
                onAmountChange: onInputAmountChange,
                TextFieldProps: {
                    disabled: !inputToken
                },
                SelectTokenChip: {
                    ChipProps: {
                        onClick: ()=>onTokenChipClick(types/* TokenPanelType.Input */.Vo.Input)
                    }
                }
            })
        },
        {
            key: 'divider',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "primary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                    className: classes.reverseIcon,
                    onClick: onReverseClick
                })
            })
        },
        {
            key: 'output',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                label: outputPanelLabel,
                amount: outputAmount,
                balance: outputTokenBalanceAmount.toFixed(),
                token: outputToken,
                onAmountChange: onOutputAmountChange,
                MaxChipProps: {
                    style: {
                        display: 'none'
                    }
                },
                TextFieldProps: {
                    disabled: !outputToken
                },
                SelectTokenChip: {
                    ChipProps: {
                        onClick: ()=>onTokenChipClick(types/* TokenPanelType.Output */.Vo.Output)
                    }
                }
            })
        }, 
    ];
    //#endregion
    //#region UI logic
    // validate form return a message if an error exists
    const validationMessage = (0,react.useMemo)(()=>{
        if (inputTokenTradeAmount.isZero() && outputTokenTradeAmount.isZero()) return t('plugin_trader_error_amount_absence');
        if ((0,web3_shared_src/* isLessThan */.FIT)(inputAmount, constants/* MINIMUM_AMOUNT */.rI)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if ((0,web3_shared_src/* isLessThan */.FIT)(outputAmount, constants/* MINIMUM_AMOUNT */.rI)) return t('plugin_trade_error_output_amount_less_minimum_amount');
        if (!inputToken || !outputToken) return t('plugin_trader_error_amount_absence');
        if (loading) return t('plugin_trader_finding_price');
        if (!trade) return t('plugin_trader_error_insufficient_lp');
        if (inputTokenBalanceAmount.isLessThan(inputTokenTradeAmount)) return t('plugin_trader_error_insufficient_balance', {
            symbol: inputToken === null || inputToken === void 0 ? void 0 : inputToken.symbol
        });
        if ((0,pipes/* resolveUniswapWarningLevel */.Ly)(trade.priceImpact) === types/* WarningLevel.BLOCKED */.Os.BLOCKED) return t('plugin_trader_error_price_impact_too_high');
        return '';
    }, [
        loading,
        inputToken,
        outputToken,
        inputTokenBalanceAmount.toFixed(),
        inputTokenTradeAmount.toFixed(),
        outputTokenTradeAmount.toFixed(),
        trade === null || trade === void 0 ? void 0 : trade.priceImpact, 
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.form,
        children: [
            sections.map(({ key , children  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classnames_default()(classes.section, key === 'divider' ? classes.divider : ''),
                    children: children
                }, key)
            ),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                                ' ',
                                (0,web3_shared_src/* formatPercentage */.rlw)((0,helpers/* toBips */.SG)(settings/* currentSlippageSettings.value */.It.value))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            className: classes.icon,
                            size: "small",
                            onClick: onRefreshClick,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {
                                fontSize: "small"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            className: classes.icon,
                            size: "small",
                            onClick: openDialog,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                                fontSize: "small"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.section,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: approveAmount.toFixed(),
                        token: !(0,helpers/* isNativeTokenWrapper */.fU)(trade) && (approveToken === null || approveToken === void 0 ? void 0 : approveToken.type) === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? approveToken : undefined,
                        spender: approveAddress,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            disabled: loading || !!validationMessage,
                            onClick: onSwap,
                            children: validationMessage || ((0,helpers/* isNativeTokenWrapper */.fU)(trade) ? (trade === null || trade === void 0 ? void 0 : (ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.isWrap) ? t('plugin_trader_wrap') : t('plugin_trader_unwrap') : t('plugin_trader_swap'))
                        })
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Breadcrumbs/Breadcrumbs.js + 3 modules
var Breadcrumbs = __webpack_require__(20292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AvatarGroup/AvatarGroup.js + 1 modules
var AvatarGroup = __webpack_require__(44689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/NavigateNext.js
var NavigateNext = __webpack_require__(33602);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/uniswap/TradeRoute.tsx






const TradeRoute_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxSizing: 'border-box',
            padding: theme.spacing(1.5, 2),
            margin: theme.spacing(0, 'auto', 2)
        },
        list: {
            alignItems: 'center',
            justifyContent: 'center'
        },
        item: {
            display: 'flex',
            padding: theme.spacing(0.5, 0)
        },
        name: {
            fontSize: 12,
            marginLeft: theme.spacing(1)
        }
    })
);
function TradeRoute(props) {
    const classes = (0,shared_src.useStylesExtends)(TradeRoute_useStyles(), props);
    const { path  } = props.trade;
    if (!path || path.length <= 2) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumbs/* default */.Z, {
            classes: {
                ol: classes.list,
                li: classes.item
            },
            separator: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigateNext/* default */.Z, {
                fontSize: "small"
            }),
            children: path.map((tokens, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarGroup/* default */.Z, {
                    sx: {
                        display: 'inline-flex',
                        alignItems: 'center'
                    },
                    max: 8,
                    children: tokens.map((token)=>{
                        var _symbol, ref;
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                                    address: token.address,
                                    name: token.name,
                                    logoURI: token.logoURI
                                }),
                                tokens.length === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.name,
                                    children: (ref = (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : token.name) !== null && ref !== void 0 ? ref : (0,web3_shared_src/* formatEthereumAddress */.j8w)(token.address, 2)
                                }) : null
                            ]
                        }, token.address));
                    })
                }, i)
            )
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(48237);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(44695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(8919);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(32789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(18292);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(85473);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/balancer/TradeRouteHop.tsx







const TradeRouteHop_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            borderRadius: 500,
            padding: theme.spacing(0.25),
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        },
        link: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);
function TradeRouteHop(props) {
    const { hop  } = props;
    const { classes  } = TradeRouteHop_useStyles();
    const networkType = (0,web3_shared_src/* useNetworkType */.bLq)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AvatarGroup/* default */.Z, {
            sx: {
                display: 'inline-flex',
                alignItems: 'center'
            },
            max: 8,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                target: "_blank",
                rel: "noopener noreferrer",
                href: (0,pipes/* resolveTradePairLink */.dx)(types/* TradeProvider.BALANCER */.z4.BALANCER, hop.pool.address, networkType),
                children: hop.pool.tokens.map((token)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                            address: token.address
                        })
                    }, token.address)
                )
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/balancer/TradeRoute.tsx









const balancer_TradeRoute_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            width: '100%',
            boxSizing: 'border-box',
            padding: theme.spacing(1.5, 2),
            margin: theme.spacing(0, 'auto', 2)
        },
        table: {
        },
        head: {
            fontWeight: 300,
            color: theme.palette.text.secondary
        },
        cell: {
            border: 'none',
            padding: 0
        },
        list: {
            alignItems: 'center',
            justifyContent: 'flex-start'
        },
        item: {
            display: 'flex',
            padding: theme.spacing(0.25, 0)
        },
        button: {
            display: 'flex',
            borderRadius: 500,
            padding: theme.spacing(0.25),
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        },
        link: {
            display: 'flex',
            alignItems: 'center'
        },
        name: {
            fontSize: 12,
            marginLeft: theme.spacing(1)
        }
    })
);
function TradeRoute_TradeRoute(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(balancer_TradeRoute_useStyles(), props);
    if (!props.trade.trade_) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.root,
        component: Paper/* default */.Z,
        elevation: 0,
        variant: "outlined",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classnames_default()(classes.cell, classes.head),
                                children: t('plugin_trader_route')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classnames_default()(classes.cell, classes.head),
                                align: "right",
                                children: t('plugin_trader_portion')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: props.trade.trade_.routes.map((route, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    className: classes.cell,
                                    align: "left",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Breadcrumbs/* default */.Z, {
                                        classes: {
                                            ol: classes.list,
                                            li: classes.item
                                        },
                                        separator: /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigateNext/* default */.Z, {
                                            fontSize: "small"
                                        }),
                                        children: route.hops.map((hop)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TradeRouteHop, {
                                                hop: hop
                                            }, hop.pool.address)
                                        )
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    className: classes.cell,
                                    align: "right",
                                    children: (0,web3_shared_src/* formatPercentage */.rlw)(route.share)
                                })
                            ]
                        }, i)
                    )
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js + 1 modules
var ListItemSecondaryAction = __webpack_require__(20763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Loop.js
var Loop = __webpack_require__(84714);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeSummary.tsx












const TradeSummary_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxSizing: 'border-box',
            margin: theme.spacing(0, 'auto', 2)
        },
        iconButton: {
            marginLeft: theme.spacing(0.5)
        },
        icon: {
            fontSize: '0.75em !important'
        },
        list: {
        },
        item: {
            paddingTop: 0,
            paddingBottom: 0
        },
        title: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            paddingLeft: theme.spacing(15),
            textAlign: 'right'
        },
        emphasis: {
            color: theme.palette.text.primary,
            fontWeight: 300,
            margin: `0 ${theme.spacing(0.5)}`
        }
    })
);
function TradeSummary(props) {
    const { trade , provider , inputToken , outputToken  } = props;
    const classes = (0,shared_src.useStylesExtends)(TradeSummary_useStyles(), props);
    const [priceReversed, setPriceReversed] = (0,react.useState)(false);
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    const { strategy , inputAmount , outputAmount , maximumSold , minimumReceived , priceImpact , fee  } = trade;
    const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
    const records = [
        inputAmount.isGreaterThan('0') && outputAmount.isGreaterThan('0') ? {
            title: 'Price',
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.title,
                children: [
                    priceReversed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                className: classes.emphasis,
                                children: (0,web3_shared_src/* formatBalance */.azF)(outputAmount.dividedBy(inputAmount).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(inputToken.decimals - outputToken.decimals)).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(outputToken.decimals)).integerValue(), outputToken.decimals, 6)
                            }),
                            outputToken.symbol,
                            ' per ',
                            inputToken.symbol
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                className: classes.emphasis,
                                children: (0,web3_shared_src/* formatBalance */.azF)(inputAmount.dividedBy(outputAmount).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(outputToken.decimals - inputToken.decimals)).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(inputToken.decimals)).integerValue(), inputToken.decimals, 6)
                            }),
                            inputToken.symbol,
                            ' per ',
                            outputToken.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        className: classes.iconButton,
                        color: "inherit",
                        size: "small",
                        onClick: ()=>setPriceReversed((x)=>!x
                            )
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loop/* default */.Z, {
                            className: classes.icon
                        })
                    })
                ]
            })
        } : null,
        isExactIn ? {
            title: 'Minimum Received',
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: classes.emphasis,
                        children: (0,web3_shared_src/* formatBalance */.azF)(minimumReceived, outputToken.decimals, 6)
                    }),
                    ' ',
                    outputToken.symbol
                ]
            })
        } : null,
        !isExactIn ? {
            title: 'Maximum Sold',
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: classes.emphasis,
                        children: (0,web3_shared_src/* formatBalance */.azF)(maximumSold, inputToken.decimals, 6)
                    }),
                    ' ',
                    inputToken.symbol
                ]
            })
        } : null, 
    ];
    const uniswapRecords = [
        {
            title: 'Price Impact',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                style: {
                    color: (0,pipes/* resolveUniswapWarningLevelColor */.zN)((0,pipes/* resolveUniswapWarningLevel */.Ly)(priceImpact))
                },
                children: (priceImpact === null || priceImpact === void 0 ? void 0 : priceImpact.isLessThan(constants/* ONE_BIPS */.IS)) ? '<0.01%' : `${(0,web3_shared_src/* formatPercentage */.rlw)(priceImpact)}`
            })
        },
        {
            title: 'Liquidity Provider Fee',
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: classes.emphasis,
                        children: (0,web3_shared_src/* formatBalance */.azF)(fee, inputToken.decimals, 6)
                    }),
                    ' ',
                    inputToken.symbol
                ]
            })
        }, 
    ];
    const balancerRecords = [
        {
            title: 'Price Impact',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                style: {
                    color: (0,pipes/* resolveUniswapWarningLevelColor */.zN)((0,pipes/* resolveUniswapWarningLevel */.Ly)(priceImpact))
                },
                children: (priceImpact === null || priceImpact === void 0 ? void 0 : priceImpact.isLessThan(constants/* ONE_BIPS */.IS)) ? '<0.01%' : `${(0,web3_shared_src/* formatPercentage */.rlw)(priceImpact)}`
            })
        }, 
    ];
    const trade_ = trade.trade_;
    var ref;
    const zrxRecords = [
        {
            title: 'Proportion',
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                children: ((ref = trade_ === null || trade_ === void 0 ? void 0 : trade_.sources) !== null && ref !== void 0 ? ref : []).filter((x)=>{
                    const proportion = new (bignumber_default())(x.proportion);
                    return !proportion.isZero() && proportion.isGreaterThan('1e-5');
                }).sort((a, z)=>(0,web3_shared_src/* isGreaterThan */.T1o)(a.proportion, z.proportion) ? -1 : 1
                ).slice(0, 3).map((y)=>`${(0,pipes/* resolveZrxTradePoolName */.RH)(y.name)} (${(0,web3_shared_src/* formatPercentage */.rlw)(y.proportion)})`
                ).join(' + ')
            })
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            className: classes.list,
            component: "ul",
            children: [
                ...records,
                ...(context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) || (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE) ? uniswapRecords : [],
                ...provider === types/* TradeProvider.BALANCER */.z4.BALANCER ? balancerRecords : [],
                ...provider === types/* TradeProvider.ZRX */.z4.ZRX ? zrxRecords : [], 
            ].map((record)=>record ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.item,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            primaryTypographyProps: {
                                className: classes.title
                            },
                            primary: record.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemSecondaryAction/* default */.Z, {
                            className: classes.content,
                            children: record.children
                        })
                    ]
                }, record.title) : null
            )
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TokenPanel.tsx





const TokenPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1, 0)
        },
        icon: {
            width: 28,
            height: 28
        },
        primary: {
            flex: '1',
            display: 'flex',
            alignItems: 'center'
        },
        amount: {
            fontSize: 18,
            marginLeft: theme.spacing(1)
        },
        symbol: {
            fontSize: 18
        }
    })
);
function TokenPanel(props) {
    const { amount , token  } = props;
    const { classes  } = TokenPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        sx: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classes.primary,
                component: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                        classes: {
                            icon: classes.icon
                        },
                        address: token.address,
                        name: token.name,
                        logoURI: token.logoURI
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: classes.amount,
                        children: (0,web3_shared_src/* formatBalance */.azF)(amount, token.decimals)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.symbol,
                children: token.symbol
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Warning.js
var Warning = __webpack_require__(46151);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/PriceStaleWarnning.tsx





const PriceStaleWarnning_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            margin: theme.spacing(2, 'auto'),
            padding: theme.spacing(1)
        },
        icon: {
            marginRight: theme.spacing(1)
        },
        type: {
            display: 'flex'
        }
    };
});
function PriceStaleWarnning(props) {
    const { onAccept  } = props;
    const classes = (0,shared_src.useStylesExtends)(PriceStaleWarnning_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.type,
                    color: "primary",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* default */.Z, {
                            className: classes.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: "Price Updated"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "text",
                    color: "primary",
                    onClick: onAccept,
                    children: "Accept"
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/ConfirmDialog.tsx











const ConfirmDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        reverseIcon: {
            width: 16,
            height: 16,
            marginLeft: 5
        },
        tip: {
            fontSize: 11,
            margin: theme.spacing(1, 0, 2)
        },
        summary: {
            marginTop: theme.spacing(1),
            marginBottom: 0
        },
        button: {
            paddingTop: 12,
            paddingBottom: 12
        }
    })
);
function ConfirmDialogUI(props) {
    const classes = (0,shared_src.useStylesExtends)(ConfirmDialog_useStyles(), props);
    const { open , trade , provider , inputToken , outputToken , onConfirm , onClose , TradeSummaryProps: UniswapTradeSummaryProps ,  } = props;
    const { inputAmount , outputAmount , minimumReceived  } = trade;
    //#region detect price changing
    const [executionPrice, setExecutionPrice] = (0,react.useState)(trade.executionPrice);
    (0,react.useEffect)(()=>{
        if (open) setExecutionPrice(undefined);
    }, [
        open
    ]);
    (0,react.useEffect)(()=>{
        if (typeof executionPrice === 'undefined') setExecutionPrice(trade.executionPrice);
    }, [
        trade,
        executionPrice
    ]);
    //#endregion
    const staled = !!(executionPrice && !executionPrice.isEqualTo(trade.executionPrice));
    var ref, ref1, _symbol;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            title: "Confirm Swap",
            maxWidth: "xs",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        inputToken && outputToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPanel, {
                                    amount: (ref = inputAmount.toFixed()) !== null && ref !== void 0 ? ref : '0',
                                    token: inputToken
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownward/* default */.Z, {
                                    className: classes.reverseIcon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPanel, {
                                    amount: (ref1 = outputAmount.toFixed()) !== null && ref1 !== void 0 ? ref1 : '0',
                                    token: outputToken
                                })
                            ]
                        }) : null,
                        staled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceStaleWarnning, {
                            onAccept: ()=>{
                                setExecutionPrice(trade.executionPrice);
                            }
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tip,
                            color: "textSecondary",
                            children: `Output is estimated. You will receive at least ${(0,web3_shared_src/* formatBalance */.azF)(minimumReceived, outputToken.decimals)} ${(_symbol = outputToken.symbol) !== null && _symbol !== void 0 ? _symbol : 'Token'} or the transaction will revert.`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeSummary, {
                            classes: {
                                root: classes.summary
                            },
                            provider: provider,
                            trade: trade,
                            inputToken: inputToken,
                            outputToken: outputToken,
                            ...UniswapTradeSummaryProps
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "primary",
                        size: "large",
                        variant: "contained",
                        fullWidth: true,
                        disabled: staled,
                        onClick: onConfirm,
                        children: "Confirm Swap"
                    })
                })
            ]
        })
    }));
}
function ConfirmDialog(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialogUI, {
        ...props
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeState.ts


var TradeActionType;
(function(TradeActionType1) {
    TradeActionType1[TradeActionType1["SWITCH_TOKEN"] = 0] = "SWITCH_TOKEN";
    TradeActionType1[TradeActionType1["UPDATE_INPUT_TOKEN"] = 1] = "UPDATE_INPUT_TOKEN";
    TradeActionType1[TradeActionType1["UPDATE_OUTPUT_TOKEN"] = 2] = "UPDATE_OUTPUT_TOKEN";
    TradeActionType1[TradeActionType1["UPDATE_INPUT_AMOUNT"] = 3] = "UPDATE_INPUT_AMOUNT";
    TradeActionType1[TradeActionType1["UPDATE_OUTPUT_AMOUNT"] = 4] = "UPDATE_OUTPUT_AMOUNT";
    TradeActionType1[TradeActionType1["UPDATE_INPUT_TOKEN_BALANCE"] = 5] = "UPDATE_INPUT_TOKEN_BALANCE";
    TradeActionType1[TradeActionType1["UPDATE_OUTPUT_TOKEN_BALANCE"] = 6] = "UPDATE_OUTPUT_TOKEN_BALANCE";
})(TradeActionType || (TradeActionType = {
}));
function reducer(state, action) {
    const isExactIn = state.strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
    switch(action.type){
        case TradeActionType.SWITCH_TOKEN:
            return {
                ...state,
                strategy: isExactIn ? types/* TradeStrategy.ExactOut */.tB.ExactOut : types/* TradeStrategy.ExactIn */.tB.ExactIn,
                inputAmount: isExactIn ? '' : state.outputAmount,
                outputAmount: isExactIn ? state.inputAmount : '',
                inputToken: state.outputToken,
                outputToken: state.inputToken,
                inputTokenBalance: state.outputTokenBalance,
                outputTokenBalance: state.inputTokenBalance
            };
        case TradeActionType.UPDATE_INPUT_TOKEN:
            return {
                ...state,
                inputToken: action.token
            };
        case TradeActionType.UPDATE_OUTPUT_TOKEN:
            return {
                ...state,
                outputToken: action.token
            };
        case TradeActionType.UPDATE_INPUT_AMOUNT:
            return {
                ...state,
                strategy: types/* TradeStrategy.ExactIn */.tB.ExactIn,
                inputAmount: action.amount
            };
        case TradeActionType.UPDATE_OUTPUT_AMOUNT:
            return {
                ...state,
                strategy: types/* TradeStrategy.ExactOut */.tB.ExactOut,
                outputAmount: action.amount
            };
        case TradeActionType.UPDATE_INPUT_TOKEN_BALANCE:
            return {
                ...state,
                inputTokenBalance: action.balance
            };
        case TradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE:
            return {
                ...state,
                outputTokenBalance: action.balance
            };
        default:
            return state;
    }
}
function useTradeState(inputToken, outputToken) {
    return (0,react.useReducer)(reducer, {
        strategy: types/* TradeStrategy.ExactIn */.tB.ExactIn,
        inputAmount: '',
        outputAmount: '',
        inputToken,
        outputToken,
        inputTokenBalance: '',
        outputTokenBalance: ''
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/external-link.js
var external_link = __webpack_require__(90557);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/uniswap/TradePairViewer.tsx









const TradePairViewer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 15,
            padding: theme.spacing(1, 2),
            margin: theme.spacing(0, 0, 2)
        },
        link: {
            display: 'block'
        },
        text: {
        },
        icon: {
            verticalAlign: 'middle',
            marginLeft: theme.spacing(0.5)
        }
    };
});
function TradePairViewer(props) {
    var ref, ref1, ref2;
    const { trade , provider  } = props;
    const { classes  } = TradePairViewer_useStyles();
    const networkType = (0,web3_shared_src/* useNetworkType */.bLq)();
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    var ref3, ref4;
    const address = (0,helpers/* getPairAddress */.Mw)((ref3 = context === null || context === void 0 ? void 0 : context.FACTORY_CONTRACT_ADDRESS) !== null && ref3 !== void 0 ? ref3 : '', (ref4 = context === null || context === void 0 ? void 0 : context.INIT_CODE_HASH) !== null && ref4 !== void 0 ? ref4 : '', (ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.route.pairs[0].token0, (ref1 = trade.trade_) === null || ref1 === void 0 ? void 0 : ref1.route.pairs[0].token1);
    if (!address) return null;
    if (((ref2 = trade.trade_) === null || ref2 === void 0 ? void 0 : ref2.route.pairs.length) !== 1) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            className: classes.link,
            align: "center",
            color: "textSecondary",
            href: (0,pipes/* resolveTradePairLink */.dx)(provider, address.toLowerCase(), networkType),
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    color: "textSecondary",
                    variant: "body2",
                    component: "span",
                    children: "View pair analytics"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.icon,
                    color: "textSecondary",
                    variant: "body2",
                    component: "span",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                        size: 14
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/dodo/TradePairViewer.tsx






const dodo_TradePairViewer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 15,
            padding: theme.spacing(1, 2),
            margin: theme.spacing(0, 0, 2)
        },
        link: {
            display: 'block'
        },
        text: {
        },
        icon: {
            verticalAlign: 'middle',
            marginLeft: theme.spacing(0.5)
        }
    };
});
function TradePairViewer_TradePairViewer(props) {
    var ref, ref1, ref2, ref3;
    const { trade , provider  } = props;
    const { classes  } = dodo_TradePairViewer_useStyles();
    const networkType = (0,web3_shared_src/* useNetworkType */.bLq)();
    if (!((ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.fromTokenSymbol) || !((ref1 = trade.trade_) === null || ref1 === void 0 ? void 0 : ref1.toTokenSymbol)) return null;
    const address = `${(ref2 = trade.trade_) === null || ref2 === void 0 ? void 0 : ref2.fromTokenSymbol}-${(ref3 = trade.trade_) === null || ref3 === void 0 ? void 0 : ref3.toTokenSymbol}`;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            className: classes.link,
            align: "center",
            color: "textSecondary",
            href: (0,pipes/* resolveTradePairLink */.dx)(provider, address, networkType),
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    color: "textSecondary",
                    variant: "body2",
                    component: "span",
                    children: "View pair analytics"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.icon,
                    color: "textSecondary",
                    variant: "body2",
                    component: "span",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                        size: 14
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTradeCallback.ts


function useTradeCallback(trade) {
    const [transactionState, wrapCallback, unwrapCallback, resetCallback] = (0,web3_shared_src/* useNativeTokenWrapperCallback */.Hve)();
    return [
        transactionState,
        async ()=>{
            var ref;
            if (!(trade === null || trade === void 0 ? void 0 : (ref = trade.trade_) === null || ref === void 0 ? void 0 : ref.isNativeTokenWrapper)) return;
            if (!trade.inputToken || !trade.outputToken) return;
            // input amount and output amount are the same value
            const tradeAmount = trade.inputAmount.toFixed();
            if (trade.strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native || trade.strategy === types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native) {
                wrapCallback(tradeAmount);
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
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTradeCallback.ts




function useTradeCallback_useTradeCallback(tradeComputed) {
    const web3 = (0,web3_shared_src/* useWeb3 */.$6B)();
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const [tradeState, setTradeState] = (0,react.useState)({
        type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
    });
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_) || ![
            web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
            web3_shared_src/* ChainId.BSC */.a_e.BSC,
            web3_shared_src/* ChainId.Matic */.a_e.Matic
        ].includes(chainId)) return null;
        return {
            from: account,
            ...(0,lodash.pick)(tradeComputed.trade_, [
                'to',
                'data',
                'value',
                'gas',
                'gasPrice'
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
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // estimate transaction
        try {
            await web3.eth.call(config);
        } catch  {
            // for some transactions will always fail if we do estimation before a kick to the chain
            if (!confirm('Failed to estimated the transaction, which means it may be reverted on the chain, and your transaction fee will not return. Sure to continue?')) {
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: new Error('User denied the transaction.')
                });
                return;
            }
        }
        // compose transaction config
        const config_ = {
            ...config,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                        hash
                    });
                    resolve(hash);
                }
            });
        });
    }, [
        web3,
        nonce,
        gasPrice,
        account,
        chainId,
        json_stable_stringify_default()(config)
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v2-sdk@3.0.0-alpha.2/node_modules/@uniswap/v2-sdk/dist/v2-sdk.esm.js
var v2_sdk_esm = __webpack_require__(72054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+v3-sdk@3.3.2/node_modules/@uniswap/v3-sdk/dist/index.js
var dist = __webpack_require__(48314);
;// CONCATENATED MODULE: ../web3-contracts/abis/RouterV2.json
const RouterV2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useRouterV2Contract.ts


function useRouterV2Contract(address) {
    return (0,web3_shared_src/* useContract */.cqn)(address, RouterV2_namespaceObject);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/SwapRouter.json
const SwapRouter_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useSwapRouterContract.ts


function useSwapRouterContract(address) {
    return (0,web3_shared_src/* useContract */.cqn)(address, SwapRouter_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTransactionDeadline.ts




function useTransactionDeadline() {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { value: timestamp  } = (0,web3_shared_src/* useCurrentBlockTimestamp */.PC_)();
    return (0,react.useMemo)(()=>{
        if (!timestamp) return;
        const timestamp_ = new (bignumber_default())(timestamp !== null && timestamp !== void 0 ? timestamp : '0');
        return timestamp_.plus(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet === chainId ? constants/* DEFAULT_TRANSACTION_DEADLINE */.ag : constants/* L2_TRANSACTION_DEADLINE */.rV);
    }, [
        chainId,
        timestamp
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeParameters.ts











const UNISWAP_BIPS_BASE = jsbi_umd_default().BigInt(10000);
/**
 * Returns the swap calls that can be used to make the trade
 * @param trade trade to execute
 * @param allowedSlippage user allowed slippage
 * @param deadline the deadline for the trade
 */ function useSwapParameters(trade, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    const deadline = useTransactionDeadline();
    const routerV2Contract = useRouterV2Contract(context === null || context === void 0 ? void 0 : context.ROUTER_CONTRACT_ADDRESS);
    const swapRouterContract = useSwapRouterContract(context === null || context === void 0 ? void 0 : context.ROUTER_CONTRACT_ADDRESS);
    return (0,react.useMemo)(()=>{
        if (!account || !(trade === null || trade === void 0 ? void 0 : trade.trade_) || !deadline) return [];
        const { trade_  } = trade;
        const allowedSlippage_ = new sdk_core_esm.Percent(jsbi_umd_default().BigInt(allowedSlippage), UNISWAP_BIPS_BASE);
        if (trade_ instanceof v2_sdk_esm/* Trade */.ho) {
            if (!routerV2Contract) return [];
            const parameters = [
                v2_sdk_esm/* Router.swapCallParameters */.F0.swapCallParameters(trade_, {
                    feeOnTransfer: false,
                    allowedSlippage: allowedSlippage_,
                    recipient: account,
                    ttl: deadline.toNumber()
                }), 
            ];
            if (trade_.tradeType === sdk_core_esm.TradeType.EXACT_INPUT) parameters.push(v2_sdk_esm/* Router.swapCallParameters */.F0.swapCallParameters(trade_, {
                feeOnTransfer: true,
                allowedSlippage: allowedSlippage_,
                recipient: account,
                ttl: deadline.toNumber()
            }));
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
                deadline: deadline.toString()
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

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeCallback.ts







function uniswap_useTradeCallback_useTradeCallback(trade, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const tradeParameters = useSwapParameters(trade, allowedSlippage);
    const [tradeState, setTradeState] = (0,react.useState)({
        type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
    });
    const tradeCallback = (0,react.useCallback)(async ()=>{
        if (!tradeParameters.length) {
            setTradeState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // step 1: estimate each trade parameter
        const estimatedCalls = await Promise.all(tradeParameters.map(async (x)=>{
            const { address , calldata , value  } = x;
            const config = {
                from: account,
                to: address,
                data: calldata,
                ...!value || /^0x0*$/.test(value) ? {
                } : {
                    value
                }
            };
            return service/* default.Ethereum.estimateGas */.ZP.Ethereum.estimateGas(config).then((gasEstimate)=>{
                return {
                    call: x,
                    gasEstimate: new (bignumber_default())(gasEstimate)
                };
            }).catch((error)=>{
                return service/* default.Ethereum.call */.ZP.Ethereum.call(config).then(()=>{
                    return {
                        call: x,
                        error: new Error('Gas estimate failed.')
                    };
                }).catch((error1)=>{
                    return {
                        call: x,
                        error: new Error((0,helpers/* swapErrorToUserReadableMessage */.Jc)(error1))
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
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: errorCalls[errorCalls.length - 1].error
                });
                return;
            }
            const firstNoErrorCall = estimatedCalls.find((call)=>!('error' in call)
            );
            if (!firstNoErrorCall) {
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: new Error('Unexpected error. Could not estimate gas for the swap.')
                });
                return;
            }
            bestCallOption = firstNoErrorCall;
        }
        return new Promise(async (resolve, reject)=>{
            if (!bestCallOption) {
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error: new Error('Bad call options.')
                });
                return;
            }
            const { call: { address , calldata , value  } ,  } = bestCallOption;
            try {
                const hash = await service/* default.Ethereum.sendTransaction */.ZP.Ethereum.sendTransaction({
                    from: account,
                    to: address,
                    data: calldata,
                    ...'gasEstimate' in bestCallOption ? {
                        gas: bestCallOption.gasEstimate.toFixed()
                    } : {
                    },
                    ...!value || /^0x0*$/.test(value) ? {
                    } : {
                        value
                    }
                });
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve(hash);
            } catch (error) {
                var ref;
                if ((ref = error) === null || ref === void 0 ? void 0 : ref.code) {
                    const error_ = new Error('Transaction rejected.');
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                        error: error_
                    });
                    reject(error_);
                } else {
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                        error: new Error(`Swap failed: ${(0,helpers/* swapErrorToUserReadableMessage */.Jc)(error)}`)
                    });
                }
            }
        });
    }, [
        account,
        tradeParameters
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeAmount.ts





function useTradeAmount(trade, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    return (0,react.useMemo)(()=>{
        if (!trade) return web3_shared_src/* ZERO */.xEJ;
        return trade.strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn ? trade.outputAmount.dividedBy(constants/* ONE_BIPS.multipliedBy */.IS.multipliedBy(allowedSlippage).plus(1)).integerValue((bignumber_default()).ROUND_DOWN) : trade.inputAmount.times(constants/* ONE_BIPS.multipliedBy */.IS.multipliedBy(allowedSlippage).plus(1).integerValue((bignumber_default()).ROUND_DOWN));
    }, [
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeCallback.ts





function balancer_useTradeCallback_useTradeCallback(trade, exchangeProxyContract, allowedSlippage = constants/* SLIPPAGE_DEFAULT */.Nd) {
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { BALANCER_ETH_ADDRESS  } = (0,web3_shared_src/* useTraderConstants */.L7X)();
    const [tradeState, setTradeState] = (0,react.useState)({
        type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
    });
    const tradeAmount = useTradeAmount(trade, allowedSlippage);
    const tradeCallback = (0,react.useCallback)(async ()=>{
        if (!trade || !trade.inputToken || !trade.outputToken || !exchangeProxyContract || !BALANCER_ETH_ADDRESS) {
            setTradeState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
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
        const inputTokenAddress = trade.inputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native ? BALANCER_ETH_ADDRESS : trade.inputToken.address;
        const outputTokenAddress = trade.outputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native ? BALANCER_ETH_ADDRESS : trade.outputToken.address;
        const tx = trade.strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn ? exchangeProxyContract.methods.multihopBatchSwapExactIn(swap_, inputTokenAddress, outputTokenAddress, trade.inputAmount.toFixed(), tradeAmount.toFixed()) : exchangeProxyContract.methods.multihopBatchSwapExactOut(swap_, inputTokenAddress, outputTokenAddress, tradeAmount.toFixed());
        // trade with the native token
        let transactionValue = '0';
        if (trade.strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn && trade.inputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native) transactionValue = trade.inputAmount.toFixed();
        else if (trade.strategy === types/* TradeStrategy.ExactOut */.tB.ExactOut && trade.outputToken.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native) transactionValue = trade.outputAmount.toFixed();
        // send transaction and wait for hash
        const config = {
            from: account,
            gas: await tx.estimateGas({
                from: account,
                value: transactionValue
            }).catch((error)=>{
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce,
            value: transactionValue
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            const promiEvent = tx.send(config);
            promiEvent.on(web3_shared_src/* TransactionEventType.RECEIPT */.iED.RECEIPT, (receipt)=>{
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no: 0,
                    receipt
                });
            }).on(web3_shared_src/* TransactionEventType.CONFIRMATION */.iED.CONFIRMATION, (no, receipt)=>{
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.CONFIRMED */.n$V.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        chainId,
        trade,
        tradeAmount,
        exchangeProxyContract,
        BALANCER_ETH_ADDRESS
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeCallback.ts




function dodo_useTradeCallback_useTradeCallback(tradeComputed) {
    const web3 = (0,web3_shared_src/* useWeb3 */.$6B)();
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const [tradeState, setTradeState] = (0,react.useState)({
        type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
    });
    // compose transaction config
    const config = (0,react.useMemo)(()=>{
        if (!account || !(tradeComputed === null || tradeComputed === void 0 ? void 0 : tradeComputed.trade_)) return null;
        return {
            from: account,
            ...(0,lodash.pick)(tradeComputed.trade_, [
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
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTradeState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // compose transaction config
        const config_ = {
            ...config,
            gas: await web3.eth.estimateGas(config).catch((error)=>{
                setTradeState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config_, (error, hash)=>{
                if (error) {
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTradeState({
                        type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                        hash
                    });
                    resolve(hash);
                }
            });
        });
    }, [
        web3,
        nonce,
        gasPrice,
        account,
        chainId,
        json_stable_stringify_default()(config)
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTradeState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        tradeState,
        tradeCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ../web3-contracts/abis/ExchangeProxy.json
const ExchangeProxy_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_weth","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"batchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"batchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"}],"name":"multihopBatchSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[][]","name":"swapSequences","type":"tuple[][]"},{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"}],"name":"multihopBatchSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_registry","type":"address"}],"name":"setRegistry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountIn","type":"uint256"},{"internalType":"uint256","name":"minTotalAmountOut","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactIn","outputs":[{"internalType":"uint256","name":"totalAmountOut","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"contract TokenInterface","name":"tokenIn","type":"address"},{"internalType":"contract TokenInterface","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"totalAmountOut","type":"uint256"},{"internalType":"uint256","name":"maxTotalAmountIn","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"smartSwapExactOut","outputs":[{"internalType":"uint256","name":"totalAmountIn","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactIn","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"nPools","type":"uint256"}],"name":"viewSplitExactOut","outputs":[{"components":[{"internalType":"address","name":"pool","type":"address"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint256","name":"swapAmount","type":"uint256"},{"internalType":"uint256","name":"limitReturnAmount","type":"uint256"},{"internalType":"uint256","name":"maxPrice","type":"uint256"}],"internalType":"struct ExchangeProxy.Swap[]","name":"swaps","type":"tuple[]"},{"internalType":"uint256","name":"totalOutput","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/balancer/useExchangeProxyContract.ts


function useExchangeProxyContract() {
    const { BALANCER_EXCHANGE_PROXY_ADDRESS  } = (0,web3_shared_src/* useTraderConstants */.L7X)();
    return (0,web3_shared_src/* useContract */.cqn)(BALANCER_EXCHANGE_PROXY_ADDRESS, ExchangeProxy_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeCallback.ts











function trader_useTradeCallback_useTradeCallback(provider, tradeComputed) {
    // trade conetxt
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    // create trade computed
    const isNativeTokenWrapper_ = (0,helpers/* isNativeTokenWrapper */.fU)(tradeComputed);
    const tradeComputedForUniswapV2Like = (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForUniswapV3Like = (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE) && !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForZRX = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForBalancer = !isNativeTokenWrapper_ ? tradeComputed : null;
    const tradeComputedForDODO = !isNativeTokenWrapper_ ? tradeComputed : null;
    // uniswap like providers
    const uniswapV2Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV2Like);
    const uniswapV3Like = uniswap_useTradeCallback_useTradeCallback(tradeComputedForUniswapV3Like);
    // balancer
    const exchangeProxyContract = useExchangeProxyContract();
    const balancer = balancer_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.BALANCER */.z4.BALANCER ? tradeComputedForBalancer : null, exchangeProxyContract);
    // other providers
    const zrx = useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.ZRX */.z4.ZRX ? tradeComputedForZRX : null);
    const dodo = dodo_useTradeCallback_useTradeCallback(provider === public_api_src/* TradeProvider.DODO */.z4.DODO ? tradeComputedForDODO : null);
    // the trade is an ETH-WETH pair
    const nativeTokenWrapper = useTradeCallback(tradeComputed);
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
        case public_api_src/* TradeProvider.ZRX */.z4.ZRX:
            return zrx;
        case public_api_src/* TradeProvider.BALANCER */.z4.BALANCER:
            return balancer;
        case public_api_src/* TradeProvider.DODO */.z4.DODO:
            return dodo;
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTrade.ts


function useTrade(inputToken, outputToken) {
    const { WNATIVE_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    // to mimic the same interface with other trade providers
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!inputToken || !outputToken) return false;
        // none of the tokens is native token
        if (inputToken.type !== web3_shared_src/* EthereumTokenType.Native */.Drc.Native && outputToken.type !== web3_shared_src/* EthereumTokenType.Native */.Drc.Native) return false;
        // none of the tokens is wrapped native token
        if (!(0,web3_shared_src/* isSameAddress */.Wr$)(inputToken.address, WNATIVE_ADDRESS) && !(0,web3_shared_src/* isSameAddress */.Wr$)(outputToken.address, WNATIVE_ADDRESS)) return false;
        return true;
    }, [
        WNATIVE_ADDRESS,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/native/useTradeComputed.ts




function useTradeComputed(isNativeTokenWrapper, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!isNativeTokenWrapper) return null;
        // the trade amount follows trade strategy
        const tradeAmount = new (bignumber_default())(strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn ? inputAmount || '0' : outputAmount || '0');
        // skip to render 0s
        if (tradeAmount.isZero()) return null;
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount: tradeAmount,
            outputAmount: tradeAmount,
            executionPrice: web3_shared_src/* ZERO */.xEJ,
            maximumSold: web3_shared_src/* ZERO */.xEJ,
            minimumReceived: tradeAmount,
            priceImpact: web3_shared_src/* ZERO */.xEJ,
            fee: web3_shared_src/* ZERO */.xEJ,
            trade_: {
                isWrap: strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn && (inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) === web3_shared_src/* EthereumTokenType.Native */.Drc.Native || strategy === types/* TradeStrategy.ExactOut */.tB.ExactOut && (outputToken === null || outputToken === void 0 ? void 0 : outputToken.type) === web3_shared_src/* EthereumTokenType.Native */.Drc.Native,
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

;// CONCATENATED MODULE: ../web3-contracts/abis/Pair.json
const Pair_namespaceObject = JSON.parse('[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePairContract.ts


function usePairContract(address) {
    return useContract(address, PairABI);
}
function usePairContracts(listOfAddress) {
    return (0,web3_shared_src/* useContracts */.GP$)(listOfAddress, Pair_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePairs.ts








var PairState;
(function(PairState1) {
    PairState1[PairState1["NOT_EXISTS"] = 0] = "NOT_EXISTS";
    PairState1[PairState1["EXISTS"] = 1] = "EXISTS";
    PairState1[PairState1["INVALID"] = 2] = "INVALID";
})(PairState || (PairState = {
}));
function usePairs(tokenPairs) {
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    const listOfPairAddress = (0,react.useMemo)(()=>{
        if (!context) return [];
        const { FACTORY_CONTRACT_ADDRESS , INIT_CODE_HASH  } = context;
        if (!FACTORY_CONTRACT_ADDRESS || !INIT_CODE_HASH) return [];
        return tokenPairs.map(([tokenA, tokenB])=>tokenA && tokenB && !tokenA.equals(tokenB) ? (0,helpers/* getPairAddress */.Mw)(FACTORY_CONTRACT_ADDRESS, INIT_CODE_HASH, tokenA, tokenB) : undefined
        );
    }, [
        context,
        tokenPairs
    ]);
    // get reserves for each pair
    const contracts = usePairContracts([
        ...new Set(listOfPairAddress.filter(Boolean))
    ]);
    const [results, calls, _, callback] = (0,web3_shared_src/* useMutlipleContractSingleData */.w0B)(contracts, Array.from({
        length: contracts.length
    }).fill('getReserves'), []);
    const asyncResults = (0,useAsyncRetry/* default */.Z)(()=>callback(calls)
    , [
        calls
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
            const tokenA = tokenPairs[i][0];
            const tokenB = tokenPairs[i][1];
            if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [
                PairState.INVALID,
                null
            ];
            var ref;
            const { reserve0 , reserve1  } = (ref = listOfReserves.find((x)=>{
                return x.id.toLowerCase() === (address === null || address === void 0 ? void 0 : address.toLowerCase());
            })) !== null && ref !== void 0 ? ref : {
            };
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
                new v2_sdk_esm/* Pair */.sO(sdk_core_esm.CurrencyAmount.fromRawAmount(token0, reserve0.toString()), sdk_core_esm.CurrencyAmount.fromRawAmount(token1, reserve1.toString())), 
            ];
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






function useAllCurrencyCombinations(currencyA, currencyB) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    const [tokenA, tokenB] = chainIdValid ? [
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
        var ref21;
        const additionalA = tokenA ? (ref21 = context === null || context === void 0 ? void 0 : (ref1 = context.ADDITIONAL_TOKENS) === null || ref1 === void 0 ? void 0 : (ref2 = ref1[chainId]) === null || ref2 === void 0 ? void 0 : ref2[tokenA.address]) !== null && ref21 !== void 0 ? ref21 : [] : [];
        var ref22;
        const additionalB = tokenB ? (ref22 = context === null || context === void 0 ? void 0 : (ref3 = context.ADDITIONAL_TOKENS) === null || ref3 === void 0 ? void 0 : (ref4 = ref3[chainId]) === null || ref4 === void 0 ? void 0 : ref4[tokenB.address]) !== null && ref22 !== void 0 ? ref22 : [] : [];
        return [
            ...common,
            ...additionalA,
            ...additionalB
        ].map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
        );
    }, [
        chainId,
        chainIdValid,
        tokenA === null || tokenA === void 0 ? void 0 : tokenA.address,
        tokenB === null || tokenB === void 0 ? void 0 : tokenB.address
    ]);
    const basePairs = (0,react.useMemo)(()=>(0,lodash.flatMap)(bases, (base)=>bases.map((otherBase)=>[
                    base,
                    otherBase
                ]
            )
        )
    , [
        bases
    ]);
    return (0,react.useMemo)(()=>{
        if (!tokenA || !tokenB) return [];
        return [
            // the direct pair
            [
                tokenA,
                tokenB
            ],
            // token A against all bases
            ...bases.map((base)=>[
                    tokenA,
                    base
                ]
            ),
            // token B against all bases
            ...bases.map((base)=>[
                    tokenB,
                    base
                ]
            ),
            // each base against all bases
            ...basePairs, 
        ].filter((tokens)=>Boolean(tokens[0] && tokens[1])
        ).filter(([t0, t1])=>t0.address !== t1.address
        ).filter(([tokenA1, tokenB1])=>{
            var ref23, ref24, ref25;
            if (!chainIdValid) return true;
            const customBases = context === null || context === void 0 ? void 0 : (ref23 = context.CUSTOM_TOKENS) === null || ref23 === void 0 ? void 0 : ref23[chainId];
            const customBasesA = customBases === null || customBases === void 0 ? void 0 : (ref24 = customBases[tokenA1.address]) === null || ref24 === void 0 ? void 0 : ref24.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            const customBasesB = customBases === null || customBases === void 0 ? void 0 : (ref25 = customBases[tokenB1.address]) === null || ref25 === void 0 ? void 0 : ref25.map((x)=>(0,helpers/* toUniswapToken */._y)(chainId, x)
            );
            if (!customBasesA && !customBasesB) return true;
            if (customBasesA && !customBasesA.find((base)=>tokenB1.equals(base)
            )) return false;
            if (customBasesB && !customBasesB.find((base)=>tokenA1.equals(base)
            )) return false;
            return true;
        });
    }, [
        tokenA === null || tokenA === void 0 ? void 0 : tokenA.address,
        tokenB === null || tokenB === void 0 ? void 0 : tokenB.address,
        bases,
        basePairs,
        chainId,
        chainIdValid
    ]);
}
function useAllCommonPairs(currencyA, currencyB) {
    const allCurrencyCombinations = useAllCurrencyCombinations(currencyA, currencyB);
    const { value: allPairs , ...asyncResult } = usePairs(allCurrencyCombinations);
    // only pass along valid pairs, non-duplicated pairs
    const allPairs_ = (0,react.useMemo)(()=>Object.values(allPairs// filter out invalid pairs
        .filter((result)=>Boolean(result[0] === PairState.EXISTS && result[1])
        )// filter out duplicated pairs
        .reduce((memo, [, current])=>{
            var _address;
            memo[current.liquidityToken.address] = (_address = memo[current.liquidityToken.address]) !== null && _address !== void 0 ? _address : current;
            return memo;
        }, {
        }))
    , [
        allPairs
    ]);
    return {
        ...asyncResult,
        value: allPairs_
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV2BestTrade.ts





function useV2BestTradeExactIn(currencyAmountIn, currencyOut, { maxHops =constants/* MAX_HOP */.s9  } = {
}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(currencyAmountIn === null || currencyAmountIn === void 0 ? void 0 : currencyAmountIn.currency, currencyOut);
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
                var ref;
                const currentTrade = (ref = v2_sdk_esm/* Trade.bestTradeExactIn */.ho.bestTradeExactIn(allowedPairs, currencyAmountIn, currencyOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0]) !== null && ref !== void 0 ? ref : null;
                // if current trade is best yet, save it
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
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
function useV2BestTradeExactOut(currencyIn, currencyAmountOut, { maxHops =constants/* MAX_HOP */.s9  } = {
}) {
    const { value: allowedPairs = [] , ...asyncResult } = useAllCommonPairs(currencyIn, currencyAmountOut === null || currencyAmountOut === void 0 ? void 0 : currencyAmountOut.currency);
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
                var ref;
                const currentTrade = (ref = v2_sdk_esm/* Trade.bestTradeExactOut */.ho.bestTradeExactOut(allowedPairs, currencyIn, currencyAmountOut, {
                    maxHops: i,
                    maxNumResults: 1
                })[0]) !== null && ref !== void 0 ? ref : null;
                if ((0,helpers/* isTradeBetter */._B)(bestTradeSoFar, currentTrade, constants/* BETTER_TRADE_LESS_HOPS_THRESHOLD */.Ru)) {
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

;// CONCATENATED MODULE: ../web3-contracts/abis/Quoter.json
const Quoter_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"quoteExactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"uint256","name":"amountOut","type":"uint256"}],"name":"quoteExactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"quoteExactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"path","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/useQuoterContract.ts


function useQuoterContract() {
    const { UNISWAP_V3_QUOTER_ADDRESS  } = (0,web3_shared_src/* useTraderConstants */.L7X)();
    return (0,web3_shared_src/* useContract */.cqn)(UNISWAP_V3_QUOTER_ADDRESS, Quoter_namespaceObject);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/PoolStateV3.json
const PoolStateV3_namespaceObject = JSON.parse('[{"inputs":[],"name":"feeGrowthGlobal0X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeGrowthGlobal1X128","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidity","outputs":[{"internalType":"uint128","name":"","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"observations","outputs":[{"internalType":"uint32","name":"blockTimestamp","type":"uint32"},{"internalType":"int56","name":"tickCumulative","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityCumulativeX128","type":"uint160"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"positions","outputs":[{"internalType":"uint128","name":"_liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"},{"internalType":"uint128","name":"tokensOwed0","type":"uint128"},{"internalType":"uint128","name":"tokensOwed1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFees","outputs":[{"internalType":"uint128","name":"token0","type":"uint128"},{"internalType":"uint128","name":"token1","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"slot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"observationIndex","type":"uint16"},{"internalType":"uint16","name":"observationCardinality","type":"uint16"},{"internalType":"uint16","name":"observationCardinalityNext","type":"uint16"},{"internalType":"uint8","name":"feeProtocol","type":"uint8"},{"internalType":"bool","name":"unlocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int16","name":"wordPosition","type":"int16"}],"name":"tickBitmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"ticks","outputs":[{"internalType":"uint128","name":"liquidityGross","type":"uint128"},{"internalType":"int128","name":"liquidityNet","type":"int128"},{"internalType":"uint256","name":"feeGrowthOutside0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthOutside1X128","type":"uint256"},{"internalType":"int56","name":"tickCumulativeOutside","type":"int56"},{"internalType":"uint160","name":"secondsPerLiquidityOutsideX128","type":"uint160"},{"internalType":"uint32","name":"secondsOutside","type":"uint32"},{"internalType":"bool","name":"initialized","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/Trader/contracts/uniswap/usePoolContract.ts


function usePoolContract(address) {
    return useContract(address, PoolStateV3ABI);
}
function usePoolContracts(listOfAddress) {
    return (0,web3_shared_src/* useContracts */.GP$)(listOfAddress, PoolStateV3_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/usePools.ts







var PoolState;
(function(PoolState1) {
    PoolState1[PoolState1["LOADING"] = 0] = "LOADING";
    PoolState1[PoolState1["NOT_EXISTS"] = 1] = "NOT_EXISTS";
    PoolState1[PoolState1["EXISTS"] = 2] = "EXISTS";
    PoolState1[PoolState1["INVALID"] = 3] = "INVALID";
})(PoolState || (PoolState = {
}));
function usePools(poolKeys) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
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
    }, [
        chainId,
        transformed,
        context === null || context === void 0 ? void 0 : context.FACTORY_CONTRACT_ADDRESS
    ]);
    const poolContracts = usePoolContracts(poolAddresses);
    const [slot0s, slot0sCalls, slot0sState, slot0sCallback] = (0,web3_shared_src/* useMutlipleContractSingleData */.w0B)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('slot0'), []);
    const [liquidities, liquiditiesCalls, liquiditiesState, liquiditiesCallback] = (0,web3_shared_src/* useMutlipleContractSingleData */.w0B)(poolContracts, Array.from({
        length: poolContracts.length
    }).fill('liquidity'), []);
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
            const { value: slot0 , error: slot0Error  } = (_index1 = slot0s[index]) !== null && _index1 !== void 0 ? _index1 : {
            };
            var _index2;
            const { value: liquidity , error: liquidityError  } = (_index2 = liquidities[index]) !== null && _index2 !== void 0 ? _index2 : {
            };
            const slot0Loading = slot0sState.type === web3_shared_src/* MulticalStateType.PENDING */.uC5.PENDING;
            const liquiditiesLoading = liquiditiesState.type === web3_shared_src/* MulticalStateType.PENDING */.uC5.PENDING;
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
            if (new (bignumber_default())((_sqrtPriceX96 = slot0.sqrtPriceX96) !== null && _sqrtPriceX96 !== void 0 ? _sqrtPriceX96 : '0').isZero()) return [
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
function usePool(currencyA, currencyB, feeAmount) {
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
    return usePools(poolKeys)[0];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useV3SwapPools.ts




/**
 * Returns all the existing pools that should be considered for swapping between an input currency and an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useV3SwapPools(currencyIn, currencyOut) {
    const allCurrencyCombinations = useAllCurrencyCombinations(currencyIn, currencyOut);
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
    const pools = usePools(allCurrencyCombinationsWithAllFees);
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

// EXTERNAL MODULE: ./src/plugins/Trader/trader/uniswap/useSingleHopOnly.ts
var useSingleHopOnly = __webpack_require__(68362);
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useAllV3Routes.ts





function computeAllRoutes(currencyIn, currencyOut, pools, chainId, currentPath = [], allPaths = [], startCurrencyIn = currencyIn, maxHops = 2) {
    const tokenIn = currencyIn === null || currencyIn === void 0 ? void 0 : currencyIn.wrapped;
    const tokenOut = currencyOut === null || currencyOut === void 0 ? void 0 : currencyOut.wrapped;
    if (!tokenIn || !tokenOut) throw new Error('Missing tokenIn/tokenOut');
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
    return allPaths;
}
/**
 * Returns all the routes from an input currency to an output currency
 * @param currencyIn the input currency
 * @param currencyOut the output currency
 */ function useAllV3Routes(currencyIn, currencyOut) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { pools , loading: poolsLoading  } = useV3SwapPools(currencyIn, currencyOut);
    const singleHopOnly = (0,useSingleHopOnly/* useSingleHopOnly */.f)();
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
(function(V3TradeState1) {
    V3TradeState1[V3TradeState1["LOADING"] = 0] = "LOADING";
    V3TradeState1[V3TradeState1["INVALID"] = 1] = "INVALID";
    V3TradeState1[V3TradeState1["NO_ROUTE_FOUND"] = 2] = "NO_ROUTE_FOUND";
    V3TradeState1[V3TradeState1["VALID"] = 3] = "VALID";
    V3TradeState1[V3TradeState1["SYNCING"] = 4] = "SYNCING";
})(V3TradeState || (V3TradeState = {
}));
/**
 * Returns the best v3 trade for a desired exact input swap
 * @param amountIn the amount to swap in
 * @param currencyOut the desired output currency
 */ function useV3BestTradeExactIn(amountIn, currencyOut) {
    const quoterContract = useQuoterContract();
    const { routes , loading: routesLoading  } = useAllV3Routes(amountIn === null || amountIn === void 0 ? void 0 : amountIn.currency, currencyOut);
    const quoteExactInInputs = (0,react.useMemo)(()=>{
        return routes.map((route)=>[
                (0,dist.encodeRouteToPath)(route, false),
                amountIn ? `0x${amountIn.quotient.toString(16)}` : undefined
            ]
        );
    }, [
        amountIn,
        routes
    ]);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,web3_shared_src/* useSingleContractMultipleData */.esU)(quoterContract, Array.from({
        length: quoteExactInInputs.length
    }).fill('quoteExactInput'), quoteExactInInputs, constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg);
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
    const quoterContract = useQuoterContract();
    const quoteExactOutInputs = (0,react.useMemo)(()=>{
        return routes.map((route)=>[
                (0,dist.encodeRouteToPath)(route, true),
                amountOut ? `0x${amountOut.quotient.toString(16)}` : undefined
            ]
        );
    }, [
        amountOut,
        routes
    ]);
    const [quotesResults, quotesCalls, , quotesCallback] = (0,web3_shared_src/* useSingleContractMultipleData */.esU)(quoterContract, Array.from({
        length: quoteExactOutInputs.length
    }).fill('quoteExactOutput'), quoteExactOutInputs, constants/* DEFAULT_MULTICALL_GAS_LIMIT */.jg);
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
    })();
    return {
        ...asyncBestTrade,
        retry: quotesRetry
    };
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTrade.ts





function useTrade_useTrade(strategy = types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
    const isTradable = !(0,web3_shared_src/* isZero */.Fr9)(inputAmount) || !(0,web3_shared_src/* isZero */.Fr9)(outputAmount);
    const isNotAvailable = !isTradable || !inputToken || !outputToken || inputAmount === '0' && isExactIn || outputAmount === '0' && !isExactIn;
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
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
function useV2Trade(strategy = types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    //#region v2
    const v2BestTradeExactIn = useV2BestTradeExactIn(isExactIn ? tradeAmount : undefined, outputCurrency);
    const v2BestTradeExactOut = useV2BestTradeExactOut(inputCurrency, !isExactIn ? tradeAmount : undefined);
    //#endregion
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
function useV3Trade(strategy = types/* TradeStrategy.ExactIn */.tB.ExactIn, inputAmount, outputAmount, inputToken, outputToken) {
    const { isNotAvailable , isExactIn , tradeAmount , inputCurrency , outputCurrency  } = useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken);
    //#region v2
    const v3BestTradeExactIn = useV3BestTradeExactIn(isExactIn ? tradeAmount : undefined, outputCurrency);
    const v3BestTradeExactOut = useV3BestTradeExactOut(inputCurrency, !isExactIn ? tradeAmount : undefined);
    //#endregion
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

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useSlippageTolerance.ts





function useSlippageTolerance() {
    const slippage_ = (0,shared_src.useValueRef)(settings/* currentSlippageSettings */.It);
    const slippage = (0,lodash.clamp)(slippage_, constants/* SLIPPAGE_MIN */.Bq, constants/* SLIPPAGE_MAX */.Q9);
    return (0,helpers/* toUniswapPercent */.Su)(slippage, 10000);
}

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
    if (trade) {
        const realizedLPFee = computeRealizedLPFeePercent(trade);
        // the amount of the input that accrues to LPs
        return sdk_core_esm.CurrencyAmount.fromRawAmount(trade.inputAmount.currency, trade.inputAmount.multiply(realizedLPFee).quotient);
    }
    return undefined;
}
function useTradeBreakdown(trade) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        const realizedLPFeePercent = computeRealizedLPFeePercent(trade);
        const realizedLPFeeAmount = computeRealizedLPFeeAmount(trade);
        return {
            realizedLPFeePercent,
            realizedLPFeeAmount,
            // different ver of @uniswap/sdk-core were userd by @uniswap/v2-sdk and @uniswap/v3-sdk
            realizedLPFee: trade.inputAmount.multiply(realizedLPFeePercent),
            priceImpact: trade.priceImpact.subtract(realizedLPFeePercent)
        };
    }, [
        trade
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/uniswap/useTradeComputed.ts







function useTradeComputed_useTradeComputed(trade, inputToken, outputToken) {
    const slippage = useSlippageTolerance();
    const breakdown = useTradeBreakdown(trade);
    if (!trade) return null;
    var ref;
    return {
        strategy: trade.tradeType === sdk_core_esm.TradeType.EXACT_INPUT ? types/* TradeStrategy.ExactIn */.tB.ExactIn : types/* TradeStrategy.ExactOut */.tB.ExactOut,
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
        fee: (breakdown === null || breakdown === void 0 ? void 0 : breakdown.realizedLPFee) ? (0,helpers/* uniswapCurrencyAmountTo */.nz)(breakdown.realizedLPFee) : web3_shared_src/* ZERO */.xEJ,
        trade_: trade
    };
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
            priceImpact: web3_shared_src/* ZERO */.xEJ,
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

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTradeComputed.ts




const MIN_VALUE = new (bignumber_default())('1e-5');
function balancer_useTradeComputed_useTradeComputed(trade, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const { swaps: swaps_ , routes  } = trade;
        const [swaps, tradeAmount, spotPrice] = swaps_;
        const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
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
            fee: web3_shared_src/* ZERO */.xEJ,
            trade_: trade
        };
    }, [
        trade,
        strategy,
        inputToken,
        outputToken
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTradeComputed.ts





function dodo_useTradeComputed_useTradeComputed(trade, strategy, inputToken, outputToken) {
    return (0,react.useMemo)(()=>{
        if (!trade) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (!isExactIn) return null;
        const inputAmount = new (bignumber_default())(trade.fromAmount).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(inputToken.decimals));
        const executionPrice = new (bignumber_default())(trade.resPricePerToToken);
        const outputAmount = new (bignumber_default())(trade.resAmount).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(outputToken.decimals));
        const priceImpact = new (bignumber_default())(trade.priceImpact);
        return {
            strategy,
            inputToken,
            outputToken,
            inputAmount,
            outputAmount,
            executionPrice,
            fee: web3_shared_src/* ZERO */.xEJ,
            maximumSold: inputAmount,
            minimumReceived: new (bignumber_default())(trade.fromAmount).multipliedBy(trade.resPricePerFromToken).multipliedBy(1 - trade.slippage / 100).multipliedBy((0,web3_shared_src/* pow10 */.wAG)(outputToken.decimals)),
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

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useSlippageTolerance.ts




function useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_src.useValueRef)(settings/* currentSlippageSettings */.It);
    return (0,lodash.clamp)(slippage_, constants/* SLIPPAGE_MIN */.Bq, constants/* SLIPPAGE_MAX */.Q9);
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTradeSettings.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
var useTradeSettings = __webpack_require__(74792);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var Wallet_settings = __webpack_require__(6621);
=======
var useTradeSettings = __webpack_require__(94003);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var Wallet_settings = __webpack_require__(93975);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
;// CONCATENATED MODULE: ./src/plugins/Trader/trader/0x/useTrade.ts










function setTokenNativeNetwork(networkType) {
    switch(networkType){
        case web3_shared_src/* NetworkType.Ethereum */.tds.Ethereum:
            return 'ETH';
        case web3_shared_src/* NetworkType.Binance */.tds.Binance:
            return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
        case web3_shared_src/* NetworkType.Polygon */.tds.Polygon:
            return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
        case web3_shared_src/* NetworkType.Arbitrum */.tds.Arbitrum:
            return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
=======
        case web3_shared_src/* NetworkType.xDai */.tds.xDai:
            return '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
        default:
            (0,esm/* safeUnreachable */.P)(networkType);
            return '';
    }
}
function _0x_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const blockNumber = (0,web3_shared_src/* useBlockNumber */.OvB)();
    const slippage = useSlippageTolerance_useSlippageTolerance();
    const { pools  } = (0,useTradeSettings/* useTradeProviderSettings */.m)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        const sellToken = (0,web3_shared_src/* isNative */.tYA)(inputToken.address) ? setTokenNativeNetwork(Wallet_settings/* currentNetworkSettings.value */.fX.value) : inputToken.address;
        const buyToken = (0,web3_shared_src/* isNative */.tYA)(outputToken.address) ? setTokenNativeNetwork(Wallet_settings/* currentNetworkSettings.value */.fX.value) : outputToken.address;
        return messages/* PluginTraderRPC.swapQuote */.V.swapQuote({
            sellToken,
            buyToken,
            takerAddress: account,
            sellAmount: isExactIn ? inputAmount : void 0,
            buyAmount: isExactIn ? void 0 : outputAmount,
            skipValidation: true,
            slippagePercentage: slippage,
            affiliateAddress: constants/* ZRX_AFFILIATE_ADDRESS */.ku
        }, Wallet_settings/* currentNetworkSettings.value */.fX.value);
    }, [
        NATIVE_TOKEN_ADDRESS,
        account,
        strategy,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        slippage,
        pools.length,
        blockNumber
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/balancer/useTrade.ts





function balancer_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken) {
    const blockNumber = (0,web3_shared_src/* useBlockNumber */.OvB)();
    const { WNATIVE_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!WNATIVE_ADDRESS) return null;
        if (!inputToken || !outputToken) return null;
        const isExactIn = strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn;
        if (inputAmount === '0' && isExactIn) return null;
        if (outputAmount === '0' && !isExactIn) return null;
        // the WETH address is used for looking for available pools
        const sellToken = (0,web3_shared_src/* isNative */.tYA)(inputToken.address) ? WNATIVE_ADDRESS : inputToken.address;
        const buyToken = (0,web3_shared_src/* isNative */.tYA)(outputToken.address) ? WNATIVE_ADDRESS : outputToken.address;
        const { swaps , routes  } = await messages/* PluginTraderRPC.getSwaps */.V.getSwaps(sellToken, buyToken, isExactIn ? constants/* BALANCER_SWAP_TYPE.EXACT_IN */.qT.EXACT_IN : constants/* BALANCER_SWAP_TYPE.EXACT_OUT */.qT.EXACT_OUT, isExactIn ? inputAmount : outputAmount);
        // no pool found
        if (!swaps[0].length) return null;
        return {
            swaps,
            routes
        };
    }, [
        WNATIVE_ADDRESS,
        strategy,
        inputAmount,
        outputAmount,
        inputToken === null || inputToken === void 0 ? void 0 : inputToken.address,
        outputToken === null || outputToken === void 0 ? void 0 : outputToken.address,
        blockNumber
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useSlippageTolerance.ts




function dodo_useSlippageTolerance_useSlippageTolerance() {
    const slippage_ = (0,shared_src.useValueRef)(settings/* currentSlippageSettings */.It);
    return (0,lodash.clamp)(slippage_, constants/* SLIPPAGE_MIN */.Bq, constants/* SLIPPAGE_MAX */.Q9);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/dodo/useTrade.ts





function dodo_useTrade_useTrade(strategy, inputAmount, outputAmount, inputToken, outputToken) {
    const { NATIVE_TOKEN_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const blockNumber = (0,web3_shared_src/* useBlockNumber */.OvB)();
    const slippage = dodo_useSlippageTolerance_useSlippageTolerance();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { RPC  } = (0,web3_shared_src/* useRPCConstants */.j8Y)(chainId);
    const provderURL = (0,lodash.first)(RPC);
    const { DODO_ETH_ADDRESS  } = (0,web3_shared_src/* useTraderConstants */.L7X)(chainId);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!inputToken || !outputToken) return null;
        if (inputAmount === '0') return null;
        const sellToken = (0,web3_shared_src/* isNative */.tYA)(inputToken.address) ? {
            ...inputToken,
            address: DODO_ETH_ADDRESS !== null && DODO_ETH_ADDRESS !== void 0 ? DODO_ETH_ADDRESS : ''
        } : inputToken;
        const buyToken = (0,web3_shared_src/* isNative */.tYA)(outputToken.address) ? {
            ...outputToken,
            address: DODO_ETH_ADDRESS !== null && DODO_ETH_ADDRESS !== void 0 ? DODO_ETH_ADDRESS : ''
        } : outputToken;
        return messages/* PluginTraderRPC.swapRoute */.V.swapRoute({
            isNativeSellToken: (0,web3_shared_src/* isNative */.tYA)(inputToken.address),
            fromToken: sellToken,
            toToken: buyToken,
            fromAmount: inputAmount,
            slippage: slippage / 100,
            userAddr: account,
            rpc: provderURL,
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
        blockNumber,
        account,
        provderURL,
        chainId, 
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeComputed.ts
















function trader_useTradeComputed_useTradeComputed(provider, strategy, inputAmount, outputAmount, inputToken, outputToken) {
    var ref;
    const inputTokenProduct = (0,web3_shared_src/* pow10 */.wAG)((ref = inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals) !== null && ref !== void 0 ? ref : 0);
    var ref1;
    const outputTokenProduct = (0,web3_shared_src/* pow10 */.wAG)((ref1 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals) !== null && ref1 !== void 0 ? ref1 : 0);
    const inputAmount_ = new (bignumber_default())(inputAmount || '0').multipliedBy(inputTokenProduct).integerValue().toFixed();
    const outputAmount_ = new (bignumber_default())(outputAmount || '0').multipliedBy(outputTokenProduct).integerValue().toFixed();
    // trade conetxt
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    // NATIVE-WNATIVE pair
    const nativeToken_ = useTrade(inputToken, outputToken);
    var _value;
    const nativeToken = useTradeComputed((_value = nativeToken_.value) !== null && _value !== void 0 ? _value : false, strategy, inputAmount_, outputAmount_, inputToken, outputToken);
    // uniswap-v2 like providers
    const uniswapV2_ = useV2Trade(strategy, (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) ? inputAmount_ : '0', (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) ? outputAmount_ : '0', inputToken, outputToken);
    const uniswapV2 = useTradeComputed_useTradeComputed(uniswapV2_.value, inputToken, outputToken);
    // uniswap-v3 like providers
    const uniswapV3_ = useV3Trade(strategy, (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE) ? inputAmount_ : '0', (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V3_LIKE) ? outputAmount_ : '0', inputToken, outputToken);
    const uniswapV3 = useTradeComputed_useTradeComputed(uniswapV3_.value, inputToken, outputToken);
    // zrx
    const zrx_ = _0x_useTrade_useTrade(strategy, provider === types/* TradeProvider.ZRX */.z4.ZRX ? inputAmount_ : '0', provider === types/* TradeProvider.ZRX */.z4.ZRX ? outputAmount_ : '0', inputToken, outputToken);
    var _value1;
    const zrx = _0x_useTradeComputed_useTradeComputed((_value1 = zrx_.value) !== null && _value1 !== void 0 ? _value1 : null, strategy, inputToken, outputToken);
    // balancer
    const balancer_ = balancer_useTrade_useTrade(strategy, provider === types/* TradeProvider.BALANCER */.z4.BALANCER ? inputAmount_ : '0', provider === types/* TradeProvider.BALANCER */.z4.BALANCER ? outputAmount_ : '0', inputToken, outputToken);
    var _value2;
    const balancer = balancer_useTradeComputed_useTradeComputed((_value2 = balancer_.value) !== null && _value2 !== void 0 ? _value2 : null, strategy, provider === types/* TradeProvider.BALANCER */.z4.BALANCER ? inputAmount_ : '0', provider === types/* TradeProvider.BALANCER */.z4.BALANCER ? outputAmount_ : '0', inputToken, outputToken);
    // dodo
    const dodo_ = dodo_useTrade_useTrade(strategy, provider === types/* TradeProvider.DODO */.z4.DODO ? inputAmount_ : '0', provider === types/* TradeProvider.DODO */.z4.DODO ? outputAmount_ : '0', inputToken, outputToken);
    var _value3;
    const dodo = dodo_useTradeComputed_useTradeComputed((_value3 = dodo_.value) !== null && _value3 !== void 0 ? _value3 : null, strategy, inputToken, outputToken);
    if (nativeToken_.value) return {
        ...nativeToken_,
        value: nativeToken
    };
    switch(provider){
        case types/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2:
        case types/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP:
        case types/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP:
        case types/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP:
        case types/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP:
            return {
                ...uniswapV2_,
                value: uniswapV2
            };
        case types/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3:
            return {
                ...uniswapV3_,
                value: uniswapV3
            };
        case types/* TradeProvider.ZRX */.z4.ZRX:
            return {
                ...zrx_,
                value: zrx
            };
        case types/* TradeProvider.BALANCER */.z4.BALANCER:
            return {
                ...balancer_,
                value: balancer
            };
        case types/* TradeProvider.DODO */.z4.DODO:
            return {
                ...dodo_,
                value: dodo
            };
        default:
            (0,esm/* unreachable */.t1)(provider);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trader/useTradeStateComputed.ts




function useTradeStateComputed(provider) {
    const tradeState = useTradeState();
    const [tradeStore, dispatchTradeStore] = tradeState;
    //#region the computed trade
    const { inputAmount , outputAmount , strategy , inputToken , outputToken  } = tradeStore;
    const tradeComputed = trader_useTradeComputed_useTradeComputed(provider, strategy, inputAmount, outputAmount, inputToken, outputToken);
    const { value: tradeComputed_  } = tradeComputed;
    //#endregion
    return {
        tradeState: [
            {
                ...tradeStore,
                inputAmount: strategy === types/* TradeStrategy.ExactIn */.tB.ExactIn ? inputAmount : tradeComputed_ ? (0,web3_shared_src/* formatBalance */.azF)(tradeComputed_.inputAmount, inputToken === null || inputToken === void 0 ? void 0 : inputToken.decimals, 6) : '',
                outputAmount: strategy === types/* TradeStrategy.ExactOut */.tB.ExactOut ? outputAmount : tradeComputed_ ? (0,web3_shared_src/* formatBalance */.azF)(tradeComputed_.outputAmount, outputToken === null || outputToken === void 0 ? void 0 : outputToken.decimals, 6) : ''
            },
            dispatchTradeStore, 
        ],
        tradeComputed
    };
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx

























const Trader_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: 266,
            position: 'relative'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        summary: {
        },
        router: {
            marginTop: 0
        }
    };
});
function Trader(props) {
    var _utils, ref;
    const { coin , tokenDetailed  } = props;
    var ref1;
    const { decimals  } = (ref1 = tokenDetailed !== null && tokenDetailed !== void 0 ? tokenDetailed : coin) !== null && ref1 !== void 0 ? ref1 : {
    };
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const classes = (0,shared_src.useStylesExtends)(Trader_useStyles(), props);
    const context = (0,react.useContext)(useTradeContext/* TradeContext */.K);
    var ref2;
    const provider = (ref2 = context === null || context === void 0 ? void 0 : context.TYPE) !== null && ref2 !== void 0 ? ref2 : types/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2;
    //#region trade state
    const { tradeState: [tradeStore, dispatchTradeStore] , tradeComputed: { value: tradeComputed , ...asyncTradeComputed } ,  } = useTradeStateComputed(provider);
    const { inputToken , outputToken  } = tradeStore;
    (0,react.useEffect)(()=>{
        if (!chainIdValid) return;
        dispatchTradeStore({
            type: TradeActionType.UPDATE_INPUT_TOKEN,
            token: chainId === web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet && (coin === null || coin === void 0 ? void 0 : coin.is_mirrored) ? constants/* UST */.bi[web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet] : (0,web3_shared_src/* createNativeToken */.$ch)(chainId)
        });
        var _name, _symbol;
        dispatchTradeStore({
            type: TradeActionType.UPDATE_OUTPUT_TOKEN,
            token: (coin === null || coin === void 0 ? void 0 : coin.contract_address) ? (0,web3_shared_src/* createERC20Token */.wY6)(chainId, coin.contract_address, decimals !== null && decimals !== void 0 ? decimals : 0, (_name = coin.name) !== null && _name !== void 0 ? _name : '', (_symbol = coin.symbol) !== null && _symbol !== void 0 ? _symbol : '') : undefined
        });
    }, [
        coin,
        chainId,
        chainIdValid,
        decimals
    ]);
    //#endregion
    //#region switch tokens
    const onReverseClick = (0,react.useCallback)(()=>{
        dispatchTradeStore({
            type: TradeActionType.SWITCH_TOKEN
        });
    }, []);
    //#endregion
    //#region update amount
    const onInputAmountChange = (0,react.useCallback)((amount)=>{
        dispatchTradeStore({
            type: TradeActionType.UPDATE_INPUT_AMOUNT,
            amount
        });
    }, []);
    const onOutputAmountChange = (0,react.useCallback)((amount)=>{
        dispatchTradeStore({
            type: TradeActionType.UPDATE_OUTPUT_AMOUNT,
            amount
        });
    }, []);
    var ref3, ref4;
    //#endregion
    //#region update balance
    const { value: inputTokenBalance_ , loading: loadingInputTokenBalance , retry: retryInputTokenBalance ,  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref3 = inputToken === null || inputToken === void 0 ? void 0 : inputToken.type) !== null && ref3 !== void 0 ? ref3 : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref4 = inputToken === null || inputToken === void 0 ? void 0 : inputToken.address) !== null && ref4 !== void 0 ? ref4 : '');
    var ref5, ref6;
    const { value: outputTokenBalance_ , loading: loadingOutputTokenBalance , retry: retryOutputTokenBalance ,  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref5 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.type) !== null && ref5 !== void 0 ? ref5 : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref6 = outputToken === null || outputToken === void 0 ? void 0 : outputToken.address) !== null && ref6 !== void 0 ? ref6 : '');
    (0,react.useEffect)(()=>{
        if (inputTokenBalance_ && !loadingInputTokenBalance) dispatchTradeStore({
            type: TradeActionType.UPDATE_INPUT_TOKEN_BALANCE,
            balance: inputTokenBalance_
        });
        if (outputTokenBalance_ && !loadingOutputTokenBalance) dispatchTradeStore({
            type: TradeActionType.UPDATE_OUTPUT_TOKEN_BALANCE,
            balance: outputTokenBalance_
        });
    }, [
        inputTokenBalance_,
        outputTokenBalance_,
        loadingInputTokenBalance,
        loadingOutputTokenBalance
    ]);
    const onUpdateTokenBalance = (0,react.useCallback)(()=>{
        retryInputTokenBalance();
        retryOutputTokenBalance();
    }, [
        retryInputTokenBalance,
        retryOutputTokenBalance
    ]);
    //#endregion
    //#region the best trade
    const { inputAmount , outputAmount , inputTokenBalance , outputTokenBalance , strategy  } = tradeStore;
    //#region select token
    const excludeTokens = [
        inputToken,
        outputToken
    ].filter(Boolean).map((x)=>{
        return x === null || x === void 0 ? void 0 : x.address;
    });
    const [focusedTokenPanelType, setFocusedTokenPanelType] = (0,react.useState)(types/* TokenPanelType.Input */.Vo.Input);
    const { setDialog: setSelectTokenDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== String(focusedTokenPanelType)) return;
        dispatchTradeStore({
            type: focusedTokenPanelType === types/* TokenPanelType.Input */.Vo.Input ? TradeActionType.UPDATE_INPUT_TOKEN : TradeActionType.UPDATE_OUTPUT_TOKEN,
            token: ev.token
        });
    }, [
        dispatchTradeStore,
        focusedTokenPanelType
    ]));
    const onTokenChipClick = (0,react.useCallback)((type)=>{
        setFocusedTokenPanelType(type);
        setSelectTokenDialog({
            open: true,
            uuid: String(type),
            disableNativeToken: false,
            FixedTokenListProps: {
                selectedTokens: excludeTokens
            }
        });
    }, [
        excludeTokens.join()
    ]);
    //#endregion
    //#region blocking (swap)
    const [tradeState, tradeCallback, resetTradeCallback] = trader_useTradeCallback_useTradeCallback(provider, tradeComputed);
    const [openConfirmDialog, setOpenConfirmDialog] = (0,react.useState)(false);
    const onConfirmDialogConfirm = (0,react.useCallback)(async ()=>{
        setOpenConfirmDialog(false);
        await (0,utils/* delay */.gw)(100);
        await tradeCallback();
    }, [
        tradeCallback
    ]);
    const onConfirmDialogClose = (0,react.useCallback)(()=>{
        setOpenConfirmDialog(false);
    }, []);
    //#endregion
    //#region refresh pools
    const { error: updateBalancerPoolsError , loading: updateBalancerPoolsLoading  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        // force update balancer's pools each time user enters into the swap tab
        if (provider === types/* TradeProvider.BALANCER */.z4.BALANCER) await messages/* PluginTraderRPC.updatePools */.V.updatePools(true);
    }, [
        provider
    ]);
    //#endregion
    //#region refresh pairs
    const [, , resetTimeout] = (0,useTimeoutFn/* default */.Z)(()=>{
        // FIXME:
        // failed to update onRefreshClick callback
        onRefreshClick();
    }, 30 /* seconds */  * 1000 /* milliseconds */ );
    const onRefreshClick = (0,react.useCallback)(async ()=>{
        asyncTradeComputed.retry();
        resetTimeout();
    }, [
        asyncTradeComputed.retry,
        resetTimeout
    ]);
    //#endregion
    //#region remote controlled transaction dialog
    const cashTag = (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? '$' : '';
    const shareLink = (ref = (_utils = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, tradeComputed && inputToken && outputToken ? [
        `I just swapped ${(0,web3_shared_src/* formatBalance */.azF)(tradeComputed.inputAmount, inputToken.decimals, 6)} ${cashTag}${inputToken.symbol} for ${(0,web3_shared_src/* formatBalance */.azF)(tradeComputed.outputAmount, outputToken.decimals, 6)} ${cashTag}${outputToken.symbol}. Follow @realMaskbook (mask.io) to swap cryptocurrencies on Twitter.`,
        '#mask_io', 
    ].join('\n') : '').toString();
    // close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (tradeState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) {
            dispatchTradeStore({
                type: TradeActionType.UPDATE_INPUT_AMOUNT,
                amount: ''
            });
            dispatchTradeStore({
                type: TradeActionType.UPDATE_OUTPUT_AMOUNT,
                amount: ''
            });
        }
        resetTradeCallback();
    });
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (tradeState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareLink,
            state: tradeState
        });
    }, [
        tradeState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    //#region swap callback
    const onSwap = (0,react.useCallback)(()=>{
        // no need to open the confirmation dialog if it (un)wraps the native token
        if (tradeComputed && (0,helpers/* isNativeTokenWrapper */.fU)(tradeComputed)) tradeCallback();
        else setOpenConfirmDialog(true);
    }, [
        tradeComputed
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeForm, {
                trade: tradeComputed,
                provider: provider,
                strategy: strategy,
                loading: asyncTradeComputed.loading || updateBalancerPoolsLoading,
                inputToken: inputToken,
                outputToken: outputToken,
                inputTokenBalance: inputTokenBalance,
                outputTokenBalance: outputTokenBalance,
                inputAmount: inputAmount,
                outputAmount: outputAmount,
                onInputAmountChange: onInputAmountChange,
                onOutputAmountChange: onOutputAmountChange,
                onReverseClick: onReverseClick,
                onRefreshClick: onRefreshClick,
                onTokenChipClick: onTokenChipClick,
                onSwap: onSwap
            }),
            tradeComputed && !(0,helpers/* isNativeTokenWrapper */.fU)(tradeComputed) && inputToken && outputToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
                        open: openConfirmDialog,
                        trade: tradeComputed,
                        provider: provider,
                        inputToken: inputToken,
                        outputToken: outputToken,
                        onConfirm: onConfirmDialogConfirm,
                        onClose: onConfirmDialogClose
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeSummary, {
                        classes: {
                            root: classes.summary
                        },
                        trade: tradeComputed,
                        provider: provider,
                        inputToken: inputToken,
                        outputToken: outputToken
                    }),
                    (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeRoute, {
                        classes: {
                            root: classes.router
                        },
                        trade: tradeComputed
                    }) : null,
                    [
                        types/* TradeProvider.BALANCER */.z4.BALANCER
                    ].includes(provider) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeRoute_TradeRoute, {
                        classes: {
                            root: classes.router
                        },
                        trade: tradeComputed
                    }) : null,
                    (context === null || context === void 0 ? void 0 : context.IS_UNISWAP_V2_LIKE) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradePairViewer, {
                        trade: tradeComputed,
                        provider: provider
                    }) : null,
                    types/* TradeProvider.DODO */.z4.DODO === provider ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradePairViewer_TradePairViewer, {
                        trade: tradeComputed,
                        provider: provider
                    }) : null
                ]
            }) : null
        ]
    }));
}


/***/ }),

/***/ 66105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TraderDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22209);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69739);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77603);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63371);
/* harmony import */ var _TradeFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92237);
/* harmony import */ var _trader_useTradeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36246);
/* harmony import */ var _trending_useCurrentTradeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76060);
/* harmony import */ var _trending_useAvailableTraderProviders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12543);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5692);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26428);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59965);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84464);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77287);
=======
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(69476);
/* harmony import */ var _components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70988);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80050);
/* harmony import */ var _TradeFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3097);
/* harmony import */ var _trader_useTradeContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25754);
/* harmony import */ var _trending_useCurrentTradeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29575);
/* harmony import */ var _trending_useAvailableTraderProviders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89819);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67047);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66632);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62323);
/* harmony import */ var _Trader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(65690);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37186);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js















function TraderDialog() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_13__/* .useI18N */ .M1)();
    const chainIdValid = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .useChainIdValid */ .asy)();
    const [traderProps, setTraderProps] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { open , closeDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__.useRemoteControlledDialog)(_messages__WEBPACK_IMPORTED_MODULE_11__/* .PluginTraderMessages.swapDialogUpdated */ .A.swapDialogUpdated, (ev)=>{
        if (ev === null || ev === void 0 ? void 0 : ev.traderProps) setTraderProps(ev.traderProps);
    });
    const { value: tradeProviders = []  } = (0,_trending_useAvailableTraderProviders__WEBPACK_IMPORTED_MODULE_8__/* .useAvailableTraderProviders */ .Z)(_types__WEBPACK_IMPORTED_MODULE_10__/* .TagType.CASH */ .Qy.CASH, 'MASK');
    const tradeProvider = (0,_trending_useCurrentTradeProvider__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentTradeProvider */ .Q)();
    const tradeContext = (0,_trader_useTradeContext__WEBPACK_IMPORTED_MODULE_6__/* .useTradeContext */ .I)(tradeProvider);
    const onTradeProviderChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((option)=>{
        _settings__WEBPACK_IMPORTED_MODULE_9__/* .currentTradeProviderSettings.value */ .de.value = option.value;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!chainIdValid) closeDialog();
    }, [
        chainIdValid,
        closeDialog
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_trader_useTradeContext__WEBPACK_IMPORTED_MODULE_6__/* .TradeContext.Provider */ .K.Provider, {
        value: tradeContext,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_InjectedDialog__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .F, {
            open: open,
            onClose: closeDialog,
            title: t('plugin_trader_swap'),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Trader__WEBPACK_IMPORTED_MODULE_12__/* .Trader */ .A, {
                        ...traderProps
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TradeFooter__WEBPACK_IMPORTED_MODULE_5__/* .TradeFooter */ .r, {
                        showDataProviderIcon: false,
                        showTradeProviderIcon: true,
                        tradeProvider: tradeProvider,
                        tradeProviders: tradeProviders,
                        onTradeProviderChange: onTradeProviderChange
                    })
                ]
            })
        })
    }));
}


/***/ }),

/***/ 25997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ baseDeferred)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
var types = __webpack_require__(26428);
=======
var types = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
;// CONCATENATED MODULE: ./src/plugins/Trader/messages/TypedMessageCashTrending.tsx






const isCashTagMessage = (m)=>(0,typed_message/* isTypedMessageAnchor */.bj)(m) && [
        'cash',
        'hash'
    ].includes(m.category) && !/#\w+lbp$/i.test(m.content)
;
function makeTypedMessageCashTrending(message) {
    return {
        ...message,
        type: 'x-cash-trending',
        name: message.content.substr(1).toLowerCase()
    };
}
(0,typed_message/* registerTypedMessageRenderer */.vq)('x-cash-trending', {
    component: DefaultTypedMessageCashTrendingRenderer,
    id: 'com.maskbook.trader.x-cash-trending',
    priority: 0
});
function DefaultTypedMessageCashTrendingRenderer(props) {
    const [openTimer, setOpenTimer] = (0,react.useState)(null);
    const onMouseOver = (ev)=>{
        // cache for async operations
        const element = ev.currentTarget;
        if (openTimer !== null) clearTimeout(openTimer);
        setOpenTimer(setTimeout(async ()=>{
            if (props.message.category !== 'cash' && props.message.category !== 'hash') return;
            const { name , category  } = props.message;
            const type = category === 'cash' ? types/* TagType.CASH */.Qy.CASH : types/* TagType.HASH */.Qy.HASH;
            const dataProviders = await messages/* PluginTraderRPC.getAvailableDataProviders */.V.getAvailableDataProviders(type, name);
            const tradeProviders = await messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(type, name);
            if (!dataProviders.length) return;
            messages/* PluginTraderMessages.cashTagObserved.sendToLocal */.A.cashTagObserved.sendToLocal({
                name,
                type,
                element,
                dataProviders,
                tradeProviders
            });
        }, 500));
    };
    const onMouseLeave = (ev)=>{
        if (openTimer !== null) clearTimeout(openTimer);
    };
    const onClick = (ev)=>{
        ev.stopPropagation();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "span",
        color: "textPrimary",
        variant: "body1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: props.message.href,
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
            children: props.message.content
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/base-deferred.ts

const baseDeferred = {
    typedMessageTransformer (message) {
        return {
            ...message,
            items: message.items.map((m)=>isCashTagMessage(m) ? makeTypedMessageCashTrending(m) : m
            )
        };
    }
};


/***/ }),

/***/ 44752:
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
    if ((cache === null || cache === void 0 ? void 0 : (ref = cache[tokens[0].address]) === null || ref === void 0 ? void 0 : ref[tokens[1].address]) === undefined) {
        cache = {
            ...cache,
            [tokens[0].address]: {
                ...cache === null || cache === void 0 ? void 0 : cache[tokens[0].address],
                [tokens[1].address]: (0,lib_esm.getCreate2Address)(factoryAddress, (0,solidity_lib_esm.keccak256)([
                    'bytes'
                ], [
                    (0,solidity_lib_esm.pack)([
                        'address',
                        'address'
                    ], [
                        tokens[0].address,
                        tokens[1].address
                    ])
                ]), initCodeHash)
            }
        };
        map.set(initCodeHash, cache);
    }
    return cache === null || cache === void 0 ? void 0 : cache[tokens[0].address][tokens[1].address];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/jsbi@3.1.4/node_modules/jsbi/dist/jsbi-umd.js
var jsbi_umd = __webpack_require__(24994);
var jsbi_umd_default = /*#__PURE__*/__webpack_require__.n(jsbi_umd);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@uniswap+sdk-core@3.0.1/node_modules/@uniswap/sdk-core/dist/sdk-core.esm.js
var sdk_core_esm = __webpack_require__(59800);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts
var constants = __webpack_require__(71765);
;// CONCATENATED MODULE: ./src/plugins/Trader/helpers/uniswap.ts






function swapErrorToUserReadableMessage(error) {
    let reason;
    while(Boolean(error)){
        var ref;
        var _reason, ref1;
        reason = (ref1 = (_reason = error.reason) !== null && _reason !== void 0 ? _reason : error.message) !== null && ref1 !== void 0 ? ref1 : reason;
        var _error;
        error = (_error = error.error) !== null && _error !== void 0 ? _error : (ref = error.data) === null || ref === void 0 ? void 0 : ref.originalError;
    }
    if (reason === null || reason === void 0 ? void 0 : reason.startsWith('execution reverted: ')) reason = reason.substr('execution reverted: '.length);
    switch(reason){
        case 'UniswapV2Router: EXPIRED':
            return `The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.`;
        case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
        case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
            return `This transaction will not succeed either due to price movement or fee on transfer.`;
        case 'TransferHelper: TRANSFER_FROM_FAILED':
            return `The input token cannot be transferred. There may be an issue with the input token.`;
        case 'UniswapV2: TRANSFER_FAILED':
            return `The output token cannot be transferred. There may be an issue with the output token.`;
        case 'UniswapV2: K':
            return `The Uniswap invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.`;
        case 'Too little received':
        case 'Too much requested':
        case 'STF':
            return `This transaction will not succeed due to price movement.`;
        case 'TF':
            return `The output token cannot be transferred. There may be an issue with the output token.`;
        default:
            if (reason === null || reason === void 0 ? void 0 : reason.includes('undefined is not an object')) {
                console.error(error, reason);
                return `An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.`;
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
    if (!token) return;
    const extendedEther = ExtendedEther.onChain(chainId);
    const weth = toUniswapToken(chainId, constants/* WNATIVE */.FX[chainId]);
    if (weth && (0,src/* isSameAddress */.Wr$)(token.address, weth.address)) return weth;
    return token.type === src/* EthereumTokenType.Native */.Drc.Native ? extendedEther : toUniswapToken(chainId, token);
}
function toUniswapToken(chainId, token) {
    return new sdk_core_esm.Token(toUniswapChainId(chainId), (0,src/* formatEthereumAddress */.j8w)(token.address), token.decimals, token.symbol, token.name);
}
function toUniswapCurrencyAmount(chainId, token, amount) {
    if (!token || !amount) return;
    const currency = toUniswapCurrency(chainId, token);
    if (!currency) return;
    if ((0,src/* isGreaterThan */.T1o)(amount, 0)) return sdk_core_esm.CurrencyAmount.fromRawAmount(currency, jsbi_umd_default().BigInt(amount));
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
    var ref5;
    var ref6;
    return {
        type: [
            'eth',
            'matic',
            'bnb'
        ].includes((ref6 = (ref5 = token.name) === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) !== null && ref6 !== void 0 ? ref6 : '') ? src/* EthereumTokenType.Native */.Drc.Native : src/* EthereumTokenType.ERC20 */.Drc.ERC20,
        name: token.name,
        symbol: token.symbol,
        decimals: token.decimals,
        address: (0,src/* formatEthereumAddress */.j8w)(token.address),
        chainId: uniswapChainIdTo(token.chainId)
    };
}
function uniswapCurrencyAmountTo(currencyAmount) {
    return (0,src/* pow10 */.wAG)(currencyAmount.currency.decimals).multipliedBy(currencyAmount.toFixed());
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
        if (this.chainId in constants/* WNATIVE */.FX) return ExtendedEther.wrapEther(this.chainId);
        throw new Error('Unsupported chain ID');
    }
    static onChain(chainId) {
        var _chainId;
        return (_chainId = this._cachedEther[chainId]) !== null && _chainId !== void 0 ? _chainId : this._cachedEther[chainId] = new ExtendedEther(chainId);
    }
}
ExtendedEther._cachedEther = {
};
ExtendedEther.wrapEther = (0,lodash.memoize)((chainId)=>toUniswapToken(chainId, constants/* WNATIVE */.FX[chainId])
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

/***/ 36039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "dx": () => (/* binding */ resolveTradePairLink),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName),
/* harmony export */   "Ly": () => (/* binding */ resolveUniswapWarningLevel),
/* harmony export */   "zN": () => (/* binding */ resolveUniswapWarningLevelColor),
/* harmony export */   "RH": () => (/* binding */ resolveZrxTradePoolName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26428);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34513);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22209);
=======
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66632);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95142);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11494);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6615);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_5__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
function resolveDataProviderName(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'CoinGecko';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'CoinMarketCap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'Uniswap Info';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveDataProviderLink(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'https://www.coingecko.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'https://coinmarketcap.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'https://info.uniswap.org/';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveTradeProviderName(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return 'Uniswap V2';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return 'Uniswap V3';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '0x';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return 'SushiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return 'SashimiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return 'Balancer';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return 'QuickSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return 'PancakeSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            return 'DODO';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
                    return '';
=======
                    return 'https://aribitrum.api.0x.org/';
                case NetworkType.xDai:
                    return 'https://xdai.api.0x.org/';
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            {
                if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat__WEBPACK_IMPORTED_MODULE_5___default()('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: _constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType],
                    forced: true
                });
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            switch(networkType){
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Ethereum */ .tds.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Binance */ .tds.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Polygon */ .tds.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
                    return `https://analytics-aribtrum.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.xDai */ .tds.xDai:
                    return `https://analytics-xdai.sushi.com/pairs/${address}`;
                default:
                    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .safeUnreachable */ .P)(networkType);
                    return '';
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(_constants__WEBPACK_IMPORTED_MODULE_3__/* .BIPS_BASE */ .PM);
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_NON_EXPERT_BLOCKED */ .lA)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN */ .EV)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_HIGH */ .Wg)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_MEDIUM */ .wh)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_LOW */ .J2)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW;
    return;
}
function resolveUniswapWarningLevelColor(warningLevel) {
    const COLOR_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
    };
    return warningLevel ? COLOR_MAP[warningLevel] : '#27ae60';
}
function resolveZrxTradePoolName(swapSource) {
    const SWAP_SOURCE_NAME_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma'
    };
    var _swapSource;
    return (_swapSource = SWAP_SOURCE_NAME_MAP[swapSource]) !== null && _swapSource !== void 0 ? _swapSource : 'Unknown';
}


/***/ }),

/***/ 68362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useSingleHopOnly)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67047);


function useSingleHopOnly() {
    const singleHopOnly = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentSingleHopOnlySettings */ .DG);
    return singleHopOnly;
}


/***/ }),

/***/ 25754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TradeContext),
/* harmony export */   "I": () => (/* binding */ useTradeContext)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.6104.js
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26428);
=======
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5087.js





const TradeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
function useTradeContext(tradeProvider) {
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xxU)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        switch(tradeProvider){
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V2_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V2_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V2_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V2_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V3_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V3_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V3_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_SWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).UNISWAP_V3_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP_BASE_AGAINST_TOKENS */ .u7,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .UNISWAP_CUSTOM_BASES */ .QQ
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SUSHISWAP_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SUSHISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SUSHISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SUSHISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SUSHISWAP_BASE_AGAINST_TOKENS */ .S5,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SUSHISWAP_CUSTOM_BASES */ .vZ
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SASHIMISWAP_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SASHIMISWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SASHIMISWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).SASHIMISWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SASHIMISWAP_BASE_AGAINST_TOKENS */ .yo,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .SASHIMISWAP_CUSTOM_BASES */ .D9
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).QUICKSWAP_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).QUICKSWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).QUICKSWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).QUICKSWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .QUICKSWAP_BASE_AGAINST_TOKENS */ .PE,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .QUICKSWAP_CUSTOM_BASES */ .jM
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
                return {
                    TYPE: tradeProvider,
                    IS_UNISWAP_V2_LIKE: true,
                    GRAPH_API: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).PANCAKESWAP_THEGRAPH,
                    INIT_CODE_HASH: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).PANCAKESWAP_INIT_CODE_HASH,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).PANCAKESWAP_ROUTER_ADDRESS,
                    FACTORY_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).PANCAKESWAP_FACTORY_ADDRESS,
                    AGAINST_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .PANCAKESWAP_BASE_AGAINST_TOKENS */ .Dh,
                    ADDITIONAL_TOKENS: {
                    },
                    CUSTOM_TOKENS: _constants__WEBPACK_IMPORTED_MODULE_3__/* .PANCAKESWAP_CUSTOM_BASES */ .tm
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.ZRX */ .z4.ZRX:
                return {
                    TYPE: tradeProvider
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).BALANCER_EXCHANGE_PROXY_ADDRESS
                };
            case _types__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
                return {
                    TYPE: tradeProvider,
                    ROUTER_CONTRACT_ADDRESS: (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .getTraderConstants */ .Grw)(chainId).DODO_EXCHANGE_PROXY_ADDRESS
                };
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
        }
    }, [
        chainId,
        tradeProvider
    ]);
}


/***/ }),

/***/ 94003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useTradeProviderSettings)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67047);


function useTradeProviderSettings(tradeProvider) {
    const tradeProvider_ = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentTradeProviderSettings */ .de);
    const raw = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)((0,_settings__WEBPACK_IMPORTED_MODULE_1__/* .getCurrentTradeProviderGeneralSettings */ .Aj)(tradeProvider !== null && tradeProvider !== void 0 ? tradeProvider : tradeProvider_));
    try {
        return JSON.parse(raw);
    } catch  {
        return {
            pools: []
        };
    }
}


/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ 65164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34421);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11494);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37186);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83071);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5)
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            marginTop: theme.spacing(-0.5),
            marginBottom: theme.spacing(1)
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            bottom: theme.spacing(1),
            position: 'absolute'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , fallback  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    var ref;
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenApproveCallback */ .Sj0)((ref = token === null || token === void 0 ? void 0 : token.address) !== null && ref !== void 0 ? ref : '', amount, spender);
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (useExact = false)=>{
        if (approveStateType !== _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.NOT_APPROVED */ .iWP.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (transactionState.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .TransactionStateType.FAILED */ .n$V.FAILED) enqueueSnackbar(transactionState.error.message, {
            variant: 'error'
        });
    }, [
        transactionState.type,
        enqueueSnackbar
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: children
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.UNKNOWN */ .iWP.UNKNOWN) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            children: fallback !== null && fallback !== void 0 ? fallback : 'Enter an amount'
        })
    }));
    var _symbol, ref1;
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.FAILED */ .iWP.FAILED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: resetApproveCallback,
            children: [
                "Failed to load ",
                (ref1 = (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : token.name) !== null && ref1 !== void 0 ? ref1 : 'Token',
                ". Click to retry."
            ]
        })
    }));
    var ref2;
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.NOT_APPROVED */ .iWP.NOT_APPROVED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        spacing: 2,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
                    className: classes.button,
                    fullWidth: true,
                    variant: "contained",
                    size: "large",
                    onClick: ()=>onApprove(true)
                    ,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: classes.buttonLabel,
                            children: t('plugin_wallet_token_unlock')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            className: classes.buttonAmount,
                            children: `${(0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .formatBalance */ .azF)(amount, token.decimals, 2)} ${(ref2 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref2 !== void 0 ? ref2 : 'Token'}`
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
                    className: classes.button,
                    fullWidth: true,
                    variant: "contained",
                    size: "large",
                    onClick: ()=>onApprove(false)
                    ,
                    children: t('plugin_wallet_token_infinite_unlock')
                })
            })
        ]
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.PENDING */ .iWP.PENDING || approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.UPDATING */ .iWP.UPDATING) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            children: [
                approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.PENDING */ .iWP.PENDING ? t('plugin_ito_unlocking_symbol', {
                    symbol: token.symbol
                }) : `Updating ${token.symbol}`,
                "…"
            ]
        })
    }));
    if (approveStateType === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .ApproveStateType.APPROVED */ .iWP.APPROVED) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .ZP, {
        container: true,
        children: typeof children === 'function' ? children(allowance) : children
    }));
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_4__/* .unreachable */ .t1)(approveStateType);
}


/***/ }),

/***/ 77016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [isConfirmed, setIsConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setIsConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setIsConfirmed(confirmed !== null && confirmed !== void 0 ? confirmed : false)
        );
    };
    const { openDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const nativeTokenBalance = (0,web3_shared_src/* useNativeTokenBalance */.hjz)();
    //#region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    //#endregion
    //#region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    //#endregion
    if (!account) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            children: t('plugin_wallet_connect_a_wallet')
        })
    }));
    if (!isRiskWarningConfirmed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    }));
    var _value;
    if ((0,web3_shared_src/* isZero */.Fr9)((_value = nativeTokenBalance.value) !== null && _value !== void 0 ? _value : '0') && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.button,
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    }));
    if (!chainIdValid && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.button,
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            children: t('plugin_wallet_invalid_network')
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    }));
}


/***/ }),

/***/ 16762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "efa10d56cd5844f036b0.png";

/***/ }),

/***/ 23706:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "344cc8b26ac63804ec5d.png";

/***/ })

}]);