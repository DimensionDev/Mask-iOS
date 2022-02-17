"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2290],{

/***/ 97379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 60263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


const usePreviousProps = value => {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({});
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreviousProps);

/***/ }),

/***/ 54331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = void 0;
const options_1 = __webpack_require__(33084);
const utils_1 = __webpack_require__(19195);
// Most commonly used digit grouping base.
const DIGIT_GROUPING_BASE = 1000;
/**
 * Generator that divides a number until a decimal value is found.
 *
 * The denominator is defined by the numerical digit grouping base,
 * or interval. The most commonly-used digit group interval is 1000.
 *
 * e.g. 1,000,000 is grouped in multiples of 1000.
 */
function* divider(value) {
    // Create a mutable copy of the base.
    let denominator = DIGIT_GROUPING_BASE;
    while (true) {
        const result = value / denominator;
        if (result < 1) {
            // End of operation. We can't divide the value any further.
            return;
        }
        yield result;
        // The denominator is increased every iteration by multiplying
        // the base by itself, until a decimal value remains.
        denominator *= DIGIT_GROUPING_BASE;
    }
}
/**
 * millify converts long numbers to human-readable strings.
 */
function millify(value, options) {
    var _a;
    // Override default options with options supplied by user.
    const opts = options
        ? Object.assign(Object.assign({}, options_1.defaultOptions), options) : options_1.defaultOptions;
    if (!Array.isArray(opts.units) || !opts.units.length) {
        throw new Error("Option `units` must be a non-empty array");
    }
    // Validate value for type and length.
    let val = utils_1.parseValue(value);
    // Add a minus sign (-) prefix if it's a negative number.
    const prefix = val < 0 ? "-" : "";
    // Work only with positive values for simplicity's sake.
    val = Math.abs(val);
    // Keep dividing the input value by the digit grouping base
    // until the decimal and the unit index is deciphered.
    let unitIndex = 0;
    for (const result of divider(val)) {
        val = result;
        unitIndex += 1;
    }
    // Return the original number if the number is too large to have
    // a corresponding unit. Returning anything else is ambiguous.
    const unitIndexOutOfRange = unitIndex >= opts.units.length;
    if (unitIndexOutOfRange) {
        return value.toString();
    }
    // Round decimal up to desired precision.
    let rounded = utils_1.roundTo(val, opts.precision);
    // Fixes an edge case bug that outputs certain numbers as 1000K instead of 1M.
    // The rounded value needs another iteration in the divider cycle.
    for (const result of divider(rounded)) {
        rounded = result;
        unitIndex += 1;
    }
    // Calculate the unit suffix and make it lowercase (if needed).
    const unit = (_a = opts.units[unitIndex]) !== null && _a !== void 0 ? _a : "";
    const suffix = opts.lowercase ? unit.toLowerCase() : unit;
    // Add a space between number and abbreviation.
    const space = opts.space ? " " : "";
    // Replace decimal mark if desired.
    const formatted = rounded
        .toString()
        .replace(options_1.defaultOptions.decimalSeparator, opts.decimalSeparator);
    return `${prefix}${formatted}${space}${suffix}`;
}
__webpack_unused_export__ = millify;
exports.ZP = millify;


/***/ }),

/***/ 33084:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.defaultOptions = void 0;
/**
 * Default options for Millify.
 */
exports.defaultOptions = {
    decimalSeparator: ".",
    lowercase: false,
    precision: 1,
    space: false,
    units: [
        "",
        "K",
        "M",
        "B",
        "T",
        "P",
        "E", // Quintillion
    ],
};


/***/ }),

/***/ 19195:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundTo = exports.parseValue = void 0;
/**
 * parseValue ensures the value is a number and within accepted range.
 */
function parseValue(value) {
    const val = parseFloat(value.toString());
    if (isNaN(val)) {
        throw new Error(`Input value is not a number`);
    }
    if (val > Number.MAX_SAFE_INTEGER || val < Number.MIN_SAFE_INTEGER) {
        throw new RangeError("Input value is outside of safe integer range");
    }
    return val;
}
exports.parseValue = parseValue;
/**
 * Rounds a number [value] up to a specified [precision].
 */
function roundTo(value, precision) {
    if (!Number.isFinite(value)) {
        throw new Error("Input value is not a finite number");
    }
    if (!Number.isInteger(precision) || precision < 0) {
        throw new Error("Precision is not a positive integer");
    }
    if (Number.isInteger(value)) {
        return value;
    }
    return parseFloat(value.toFixed(precision));
}
exports.roundTo = roundTo;


/***/ }),

/***/ 83250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45513);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66751);



function usePostLink() {
    var _utils, ref;
    const postID = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postID */ .H9.postID();
    const postIdentifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postIdentifier */ .H9.postIdentifier();
    if (!postID || !postIdentifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, postIdentifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const info = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postPayload */ .H9.postPayload();
    if (info.err) return undefined;
    const payload = info.val;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


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

/***/ 99983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ef": () => (/* binding */ DashboardDialogCore),
/* harmony export */   "dd": () => (/* binding */ useModal),
/* harmony export */   "ge": () => (/* binding */ DashboardDialogWrapper),
/* harmony export */   "iD": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_11__.useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82215);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22593);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69476);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49283);
}
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11042);
}
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80050);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            userSelect: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        }
    })
);
function DashboardDialogCore(props) {
    const { fullScreen , children , CloseIconProps , CloseButtonProps , ...dialogProps } = props;
    const { classes  } = useStyles();
    const xsMatched = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useMatchXS */ .IN)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        className: classes.root,
        fullScreen: fullScreen !== null && fullScreen !== void 0 ? fullScreen : xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.close,
                onClick: (e)=>{
                    var ref;
                    return (ref = dialogProps.onClose) === null || ref === void 0 ? void 0 : ref.call(dialogProps, e, 'backdropClick');
                },
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    ...CloseIconProps
                })
            })
        ]
    }));
}
var DialogState;
(function(DialogState1) {
    DialogState1[DialogState1["Opened"] = 1] = "Opened";
    DialogState1[DialogState1["Closing"] = 2] = "Closing";
    DialogState1[DialogState1["Destroyed"] = 3] = "Destroyed";
})(DialogState || (DialogState = {
}));
function reducer(state, action) {
    if (action.type === 'open') return {
        state: DialogState.Opened,
        props: action.props
    };
    if (action.type === 'close') return {
        state: DialogState.Closing,
        props: state.props
    };
    return {
        state: DialogState.Destroyed
    };
}
function useModal(Modal, ComponentProps) {
    const [status, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        state: DialogState.Destroyed
    });
    const showModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'open'
        })
    , []);
    const showStatefulModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>dispatch({
            type: 'open',
            props
        })
    , []);
    // TODO: prevent onClose on some cases (e.g, click away while loading)
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'close'
        })
    , []);
    const onExited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'destroy'
        })
    , []);
    const { state , props  } = status;
    const compositeProps = ComponentProps || props ? {
        ComponentProps: {
            ...ComponentProps,
            ...props
        }
    } : {
    };
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    const theme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskTheme */ .Uk)();
    const renderedComponent = state === DialogState.Destroyed ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Modal, {
            ...modalProps
        })
    });
    return [
        renderedComponent,
        showModal,
        showStatefulModal
    ];
}
const useDashboardDialogWrapperStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, props)=>({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: props.size === 'small' ? 280 : 440,
            padding: props.size === 'small' ? '40px 24px !important' : '40px 36px !important',
            margin: '0 auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            textAlign: 'center',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        content: {
            flex: 1,
            textAlign: 'center'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(3)
        },
        primary: {
            margin: theme.spacing(2, 0, 1),
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '30px'
        },
        secondary: {
            lineHeight: 1.75,
            fontSize: 14,
            textAlign: 'center',
            wordBreak: 'break-word',
            marginBottom: 18
        },
        confineSecondary: {
            paddingLeft: props.size === 'small' ? 24 : 46,
            paddingRight: props.size === 'small' ? 24 : 46
        }
    })
);
const dialogTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .extendsTheme */ .Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    },
                    multiline: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    }
                }
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2)
                    },
                    inputRoot: {
                        paddingTop: '5px !important',
                        paddingBottom: '5px !important'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                },
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                },
                defaultProps: {
                    size: 'medium'
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 38
                    },
                    indicator: {
                        height: 1
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 38,
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    }
                }
            }
        }
    })
);
function DashboardDialogWrapper(props) {
    const { size , icon , iconColor , primary , secondary , constraintSecondary =true , content , footer  } = props;
    const { classes  } = useDashboardDialogWrapperStyles(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: dialogTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: classes.header,
                    children: [
                        icon && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(icon, {
                            width: 64,
                            height: 64,
                            stroke: iconColor
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.primary,
                            variant: "h5",
                            children: primary
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.secondary, size !== 'small' && constraintSecondary ? classes.confineSecondary : ''),
                            color: "textSecondary",
                            variant: "body2",
                            dangerouslySetInnerHTML: {
                                __html: secondary !== null && secondary !== void 0 ? secondary : ''
                            }
                        })
                    ]
                }),
                content ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.content,
                    children: content
                }) : null,
                footer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.footer,
                    children: footer
                }) : null
            ]
        })
    }));
}



/***/ }),

/***/ 65928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskbookPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45513);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14840);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1)
        },
        icon: {
            width: '3em',
            height: '3em'
        },
        body: {
            margin: theme.spacing(2)
        }
    };
});
function MaskbookPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children  } = props;
    const useStableTheme = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.customization.useTheme).current;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useStableTheme === null || useStableTheme === void 0 ? void 0 : useStableTheme();
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskbookIcon */ .LX, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "overline",
                                children: "Mask Plugin"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "h6",
                                children: pluginName
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            })
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: theme ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            theme: theme,
            children: inner
        }) : inner
    }));
};


/***/ }),

/***/ 13692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remarkable@2.0.1/node_modules/remarkable/dist/esm/index.browser.js
var index_browser = __webpack_require__(54030);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRemarkable.ts


function useRemarkable(md) {
    return (0,react.useMemo)(()=>{
        const remarkable = new index_browser/* Remarkable */._();
        return remarkable.render(md);
    }, [
        md
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx




const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p': {
                margin: 0
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        }
    })
);
function Markdown(props) {
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const html = useRemarkable(props.content);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    }));
}


/***/ }),

/***/ 7140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/plugins/Snapshot/base.ts
var base = __webpack_require__(24027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(16842);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/context.ts

const SnapshotContext = /*#__PURE__*/ (0,react.createContext)(null);

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/helpers.ts
function getProposalIdentifier(url) {
    const parsedURL = new URL(url);
    const [, space, , id] = parsedURL.hash.split('/');
    return {
        id,
        space
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(29135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ./src/plugins/Snapshot/messages.ts
var messages = __webpack_require__(74349);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(43026);
;// CONCATENATED MODULE: ./src/utils/hooks/useSuspense.ts

function useSuspense(id, args, cache, Suspender) {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    const rec = cache.get(id);
    if (!rec) {
        const p = Suspender(...args).then((val)=>void cache.set(id, [
                1,
                val
            ])
        ).catch((error)=>void cache.set(id, [
                2,
                error
            ])
        );
        cache.set(id, [
            0,
            p
        ]);
        throw p;
    }
    if (rec[0] === 1) return {
        payload: rec[1],
        retry: ()=>{
            if (cache.has(id)) cache.delete(id);
            forceUpdate();
        }
    };
    throw rec[1];
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useProposal.ts


const cache = new Map();
function proposalRetry() {
    for (const key of cache.keys()){
        cache.delete(key);
    }
}
function useProposal(id) {
    return useSuspense(id, [
        id
    ], cache, Suspender);
}
async function Suspender(id) {
    var ref, ref1;
    const proposal = await messages/* PluginSnapshotRPC.fetchProposal */.q.fetchProposal(id);
    const message = JSON.parse(proposal.msg);
    const now = Date.now();
    //#region get 3box profile
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles([
        proposal.address
    ]);
    //#endregion
    proposal.isStart = now > message.payload.start * 1000;
    proposal.isEnd = now > message.payload.end * 1000;
    proposal.status = !proposal.isStart ? 'Pending' : proposal.isEnd ? 'Closed' : 'Active';
    proposal.authorName = (ref = profiles[0]) === null || ref === void 0 ? void 0 : ref.name;
    proposal.authorAvatar = (ref1 = profiles[0]) === null || ref1 === void 0 ? void 0 : ref1.image;
    return {
        proposal,
        message
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotCard.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            minHeight: 120,
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`,
            marginBottom: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function SnapshotCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                className: classes.content,
                children: children
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/usePower.ts




function usePower(identifier) {
    const { payload: { message , proposal  } ,  } = useProposal(identifier.id);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const blockNumber = (0,web3_shared_src/* useBlockNumber */.OvB)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!account) return 0;
        const scores = await messages/* PluginSnapshotRPC.getScores */.q.getScores(message, [
            account
        ], blockNumber, proposal.network, identifier.space, proposal.strategies);
        return scores[0][account];
    }, [
        blockNumber,
        account
    ]);
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/millify@4.0.0/node_modules/millify/dist/millify.js
var millify = __webpack_require__(54331);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/OpenInNew.js
var OpenInNew = __webpack_require__(68682);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumBlockie.tsx





const EthereumBlockie_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 16,
            height: 16,
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function EthereumBlockie(props) {
    const { address , name  } = props;
    const classes = (0,shared_src.useStylesExtends)(EthereumBlockie_useStyles(), props);
    const blockie = (0,web3_shared_src/* useBlockie */.YTs)(address);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: classes.icon,
        src: blockie,
        children: name === null || name === void 0 ? void 0 : name.substr(0, 1).toLocaleUpperCase()
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/InformationCard.tsx













const InformationCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        field: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        avatar: {
            width: 16,
            height: 16
        },
        avatarWrapper: {
            marginRight: 8
        }
    };
});
function InfoField(props) {
    const { classes  } = InformationCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.field,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: props.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: props.children
            })
        ]
    }));
}
function InformationCard(props) {
    const { classes  } = InformationCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal , message  } ,  } = useProposal(identifier.id);
    const { start , end , snapshot  } = message.payload;
    var _strategies;
    const strategies = (_strategies = message.payload.metadata.strategies) !== null && _strategies !== void 0 ? _strategies : proposal.strategies;
    var _authorName;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: t('plugin_snapshot_info_title'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            component: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_strategy'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex'
                        },
                        children: strategies.filter((strategy)=>Boolean(strategy.params.address)
                        ).map((strategy, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                target: "_blank",
                                rel: "noopener",
                                href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, strategy.params.address),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                                    address: strategy.params.address
                                })
                            }, i.toString())
                        )
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_author'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, proposal.address),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.avatarWrapper,
                                children: proposal.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    src: (0,web3_shared_src/* resolveIPFSLink */.r5m)(proposal.authorAvatar),
                                    className: classes.avatar
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                    address: proposal.address
                                })
                            }),
                            (_authorName = proposal.authorName) !== null && _authorName !== void 0 ? _authorName : (0,web3_shared_src/* formatEthereumAddress */.j8w)(proposal.address, 4)
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_ipfs'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,web3_shared_src/* resolveIPFSLink */.r5m)(identifier.id),
                        children: [
                            "#",
                            identifier.id.slice(0, 7),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_start'),
                    children: (0,format/* default */.Z)(start * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_end'),
                    children: (0,format/* default */.Z)(end * 1000, 'MM/dd/yyyy')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                    title: t('plugin_snapshot_info_snapshot'),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                        className: classes.link,
                        target: "_blank",
                        rel: "noopener",
                        href: (0,web3_shared_src/* resolveBlockLinkOnExplorer */.vyt)(chainId, snapshot),
                        children: [
                            snapshot,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                fontSize: "small"
                            })
                        ]
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VoteConfirmDialog.tsx










const VoteConfirmDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        button: {
            width: '60%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        link: {
            display: 'flex',
            color: 'inherit',
            alignItems: 'center',
            marginLeft: theme.spacing(1),
            textDecoration: 'none !important'
        },
        loading: {
            color: theme.palette.text.primary
        }
    })
);
function VoteConfirmDialog(props) {
    const { open , onClose , onVoteConfirm , choiceText , message , power =0 , loading  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VoteConfirmDialog_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: open,
        onClose: onClose,
        title: t('plugin_snapshot_vote_confirm_dialog_title'),
        disableBackdropClick: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_choice', {
                                    choiceText
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                align: "center",
                                children: t('plugin_snapshot_vote_confirm_dialog_warning')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        className: classes.card,
                        variant: "outlined",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_vote_choice'),
                                        children: choiceText
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_info_snapshot'),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                            className: classes.link,
                                            target: "_blank",
                                            rel: "noopener",
                                            href: (0,web3_shared_src/* resolveBlockLinkOnExplorer */.vyt)(web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, message.payload.snapshot),
                                            children: [
                                                message.payload.snapshot,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                                    fontSize: "small"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoField, {
                                        title: t('plugin_snapshot_vote_power'),
                                        children: `${(0,millify/* default */.ZP)(power, {
                                            precision: 2,
                                            lowercase: true
                                        })} ${message.space.toUpperCase()}`
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    offChain: true,
                    classes: {
                        connectWallet: classes.button,
                        unlockMetaMask: classes.button
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        classes: {
                            root: classes.button
                        },
                        color: "primary",
                        variant: "contained",
                        fullWidth: true,
                        onClick: onVoteConfirm,
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 16,
                            className: classes.loading
                        }) : t('plugin_snapshot_vote')
                    })
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(99983);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useVotes.ts




const useVotes_cache = new Map();
function votesRetry() {
    for (const key of useVotes_cache.keys()){
        useVotes_cache.delete(key);
    }
}
function useVotes(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useVotes_cache, useVotes_Suspender);
}
async function useVotes_Suspender(identifier) {
    const blockNumber = (0,web3_shared_src/* useBlockNumber */.OvB)();
    const { payload: { message , proposal  } ,  } = useProposal(identifier.id);
    const voters = proposal.votes.map((v)=>v.voter
    );
    const scores = await messages/* PluginSnapshotRPC.getScores */.q.getScores(message, voters, blockNumber, proposal.network, identifier.space, proposal.strategies);
    var _strategies;
    const strategies = (_strategies = message.payload.metadata.strategies) !== null && _strategies !== void 0 ? _strategies : proposal.strategies;
    const profiles = await messages/* PluginSnapshotRPC.fetch3BoxProfiles */.q.fetch3BoxProfiles(voters);
    const profileEntries = Object.fromEntries(profiles.map((p)=>[
            p.contract_address,
            p
        ]
    ));
    return proposal.votes.map((v)=>{
        var ref, ref1;
        const choices = typeof v.choice === 'number' ? undefined : Object.entries(v.choice).map(([i, weight])=>({
                weight,
                name: message.payload.choices[Number(i) - 1],
                index: Number(i)
            })
        );
        return {
            choiceIndex: typeof v.choice === 'number' ? v.choice : undefined,
            choiceIndexes: typeof v.choice === 'number' ? undefined : Object.keys(v.choice).map((i)=>Number(i)
            ),
            choice: typeof v.choice === 'number' ? message.payload.choices[v.choice - 1] : undefined,
            choices,
            totalWeight: choices ? choices.reduce((acc, choice)=>{
                return acc + choice.weight;
            }, 0) : undefined,
            address: v.voter,
            authorIpfsHash: v.id,
            balance: scores.reduce((a, b)=>a + (b[v.voter.toLowerCase()] ? b[v.voter.toLowerCase()] : 0)
            , 0),
            scores: strategies.map((_strategy, i)=>scores[i][v.voter] || 0
            ),
            strategySymbol: strategies[0].params.symbol,
            authorName: (ref = profileEntries[v.voter.toLowerCase()]) === null || ref === void 0 ? void 0 : ref.name,
            authorAvatar: (ref1 = profileEntries[v.voter.toLowerCase()]) === null || ref1 === void 0 ? void 0 : ref1.image,
            timestamp: v.created
        };
    }).sort((a, b)=>b.balance - a.balance
    ).filter((v)=>v.balance > 0
    );
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useResults.ts



const useResults_cache = new Map();
function resultsRetry() {
    for (const key of useResults_cache.keys()){
        useResults_cache.delete(key);
    }
}
function useResults(identifier) {
    return useSuspense(identifier.id, [
        identifier
    ], useResults_cache, useResults_Suspender);
}
async function useResults_Suspender(identifier) {
    const { payload: { message , proposal  } ,  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    var _strategies;
    const strategies = (_strategies = message.payload.metadata.strategies) !== null && _strategies !== void 0 ? _strategies : proposal.strategies;
    const powerOfChoices = message.payload.choices.map((_choice, i)=>{
        return voteForChoice(votes, i).reduce((a, b)=>{
            if (b.choiceIndex) {
                return a + b.balance;
            } else {
                var ref;
                const totalWeight = b.choices.reduce((_totalWeight, inner_b)=>_totalWeight + inner_b.weight
                , 0);
                var ref1;
                return a + b.balance * ((ref1 = (ref = b.choices.find((v)=>v.index === i + 1
                )) === null || ref === void 0 ? void 0 : ref.weight) !== null && ref1 !== void 0 ? ref1 : 0) / totalWeight;
            }
        }, 0);
    });
    const powerDetailOfChoices = message.payload.choices.map((_choice, i)=>strategies.map((_strategy, sI)=>voteForChoice(votes, i).reduce((a, b)=>a + b.scores[sI]
            , 0)
        )
    );
    const totalPower = votes.reduce((a, b)=>a + b.balance
    , 0);
    const results = powerOfChoices.map((p, i)=>({
            choice: message.payload.choices[i],
            power: p,
            powerDetail: powerDetailOfChoices[i].map((inner_p, pI)=>({
                    power: strategies.length === 1 ? p : inner_p,
                    name: strategies[pI].params.symbol
                })
            ),
            percentage: totalPower === 0 ? 0 : p / totalPower * 100
        })
    );
    return {
        results: results.sort((a, b)=>b.power - a.power
        ),
        totalPower
    };
}
function voteForChoice(votes, i) {
    return votes.filter((vote)=>{
        var ref5;
        return vote.choiceIndex ? vote.choiceIndex === i + 1 : (ref5 = vote.choiceIndexes) === null || ref5 === void 0 ? void 0 : ref5.includes(i + 1);
    });
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRetry.ts




function useRetry() {
    const forceUpdate = (0,useUpdate/* default */.Z)();
    return (0,react.useCallback)(()=>{
        votesRetry();
        resultsRetry();
        forceUpdate();
    }, []);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotingCard.tsx
















const VotingCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        button: {
            width: '80%',
            minHeight: 39,
            margin: `${theme.spacing(1)} auto`
        },
        choiceButton: {
            transitionDuration: '0s !important',
            '&:hover': {
                border: '2px solid rgb(29, 161, 242) !important',
                backgroundColor: 'transparent !important'
            }
        },
        buttonActive: {
            border: '2px solid rgb(29, 161, 242)',
            backgroundColor: 'transparent'
        }
    };
});
function VotingCard() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = VotingCard_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { message  } ,  } = useProposal(identifier.id);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { value: power  } = usePower(identifier);
    const choices = message.payload.choices;
    const [choice, setChoice] = (0,react.useState)(0);
    const [open, setOpen] = (0,react.useState)(false);
    const [loading, setLoading] = (0,react.useState)(false);
    const retry = useRetry();
    const onVoteConfirm = (0,Base/* useSnackbarCallback */.iD)(()=>{
        setLoading(true);
        return messages/* PluginSnapshotRPC.vote */.q.vote(identifier, choice, account);
    }, [
        choice,
        identifier
    ], ()=>{
        setLoading(false);
        setOpen(false);
        retry();
    }, (_err)=>setLoading(false)
    , void 0, t('plugin_snapshot_vote_success'));
    (0,react.useEffect)(()=>{
        setOpen(false);
    }, [
        account,
        power,
        setOpen
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: t('plugin_snapshot_vote_title'),
        children: [
            choices.map((choiceText, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: ()=>setChoice(i + 1)
                    ,
                    className: classnames_default()([
                        classes.button,
                        classes.choiceButton,
                        ...choice === i + 1 ? [
                            classes.buttonActive
                        ] : [], 
                    ]),
                    variant: "outlined",
                    children: choiceText
                }, i)
            ),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                classes: {
                    connectWallet: classes.button,
                    unlockMetaMask: classes.button
                },
                offChain: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    disabled: choice === 0 || !Boolean(account) || !Boolean(power),
                    onClick: ()=>setOpen(true)
                    ,
                    children: Boolean(power) && Boolean(account) ? t('plugin_snapshot_vote') : t('plugin_snapshot_no_power')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VoteConfirmDialog, {
                open: open,
                loading: loading,
                onClose: ()=>setOpen(false)
                ,
                choiceText: choices[choice - 1],
                message: message,
                power: power,
                onVoteConfirm: onVoteConfirm
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/SnapshotTab.tsx



const SnapshotTab_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
        },
        content: {
            padding: `${theme.spacing(2)} !important`
        }
    };
});
function SnapshotTab(props) {
    const { classes  } = SnapshotTab_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(13692);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ReadmeCard.tsx





function ReadMeCard(props) {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { message  } ,  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
        content: message.payload.body
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProposalTab.tsx







function ProposalTab() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal  } ,  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReadMeCard, {
            }),
            proposal.isEnd ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(VotingCard, {
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(52259);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(86140);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json2csv@5.0.6/node_modules/json2csv/dist/json2csv.umd.js
var json2csv_umd = __webpack_require__(92895);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to Snapshot API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/LoadingCard.tsx





const LoadingCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(1),
            '&:first-child': {
                marginTop: theme.spacing(2)
            }
        }
    };
});
function LoadingCard(props) {
    const { classes  } = LoadingCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
            title: props.title,
            children: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.skeleton,
                    animation: "wave",
                    variant: "rectangular",
                    width: i === 0 ? '80%' : '60%',
                    height: 15
                }, i)
            )
        }),
        children: props.children
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ResultCard.tsx
















const choiceMaxWidth = 240;
const ResultCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItem: {
            display: 'flex',
            flexDirection: 'column'
        },
        listItemHeader: {
            display: 'flex',
            width: '100%'
        },
        power: {
            marginLeft: theme.spacing(2)
        },
        ratio: {
            marginLeft: 'auto'
        },
        choice: {
            maxWidth: choiceMaxWidth
        },
        linearProgressWrap: {
            width: '100%',
            marginTop: theme.spacing(1)
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        resultButton: {
            width: 200,
            margin: '0 auto'
        }
    };
});
const StyledLinearProgress = (0,styled/* default */.ZP)(LinearProgress/* default */.Z)`
    &.${linearProgressClasses/* default.root */.Z.root} {
        height: 8px;
        border-radius: 5px;
    }
    &.${linearProgressClasses/* default.bar */.Z.bar} {
        border-radius: 5px;
    }
`;
function Content() {
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal  } ,  } = useProposal(identifier.id);
    const { payload: votes  } = useVotes(identifier);
    const { payload: { results  } ,  } = useResults(identifier);
    const { classes  } = ResultCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const listRef = (0,react.useRef)([]);
    const [tooltipsVisible, setTooltipsVisible] = (0,react.useState)(Array.from({
        length: results.length
    }).fill(false));
    (0,react.useEffect)(()=>{
        setTooltipsVisible(listRef.current.map((element)=>element.offsetWidth === choiceMaxWidth ? true : false
        ));
    }, []);
    const dataForCsv = (0,react.useMemo)(()=>votes.map((vote)=>({
                address: vote.address,
                choice: vote.choiceIndex,
                balance: vote.balance,
                timestamp: vote.timestamp,
                dateUtc: new Date(vote.timestamp * 1000).toUTCString(),
                authorIpfsHash: vote.authorIpfsHash
            })
        )
    , [
        votes
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                className: classes.list,
                children: results.map((result, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                        className: classes.listItem,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.listItemHeader,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textPrimary",
                                            children: result.choice
                                        }),
                                        placement: "top",
                                        disableHoverListener: !tooltipsVisible[i],
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            ref: (ref)=>{
                                                listRef.current[i] = ref;
                                            },
                                            className: classnames_default()(classes.choice, classes.ellipsisText),
                                            children: result.choice
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* ShadowRootTooltip */.p_, {
                                        PopperProps: {
                                            disablePortal: true
                                        },
                                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textPrimary",
                                            className: classes.ellipsisText,
                                            children: result.powerDetail.reduce((sum, cur, i1)=>{
                                                const name = (0,millify/* default */.ZP)(cur.power, {
                                                    precision: 2,
                                                    lowercase: true
                                                }) + ' ' + cur.name;
                                                return `${sum} ${i1 === 0 ? '' : '+'} ${name}`;
                                            }, '')
                                        }),
                                        placement: "top",
                                        arrow: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.power,
                                            children: (0,millify/* default */.ZP)(result.power, {
                                                precision: 2,
                                                lowercase: true
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.ratio,
                                        children: [
                                            parseFloat(result.percentage.toFixed(2)),
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.linearProgressWrap,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress, {
                                    variant: "determinate",
                                    value: result.percentage
                                })
                            })
                        ]
                    }, i.toString())
                )
            }),
            proposal.isEnd ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                variant: "outlined",
                className: classes.resultButton,
                onClick: ()=>{
                    const csv = (0,json2csv_umd.parse)(dataForCsv);
                    const link = document.createElement('a');
                    link.setAttribute('href', `data:text/csv;charset=utf-8,${csv}`);
                    link.setAttribute('download', `snapshot-report-${identifier.id}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                },
                children: t('plugin_snapshot_download_report')
            }) : null
        ]
    }));
}
function Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal  } ,  } = useProposal(identifier.id);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        children: props.children
    }));
}
function Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal  } ,  } = useProposal(identifier.id);
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: proposal.isEnd ? t('plugin_snapshot_result_title') : t('plugin_snapshot_current_result_title'),
        retry: retry,
        children: props.children
    }));
}
function ResultCard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Badge/Badge.js
var Badge = __webpack_require__(32076);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/VotesCard.tsx















const VotesCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        list: {
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'var(--contentHeight)',
            overflow: 'auto',
            paddingTop: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        listItem: {
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        anchorTopRight: {
            transform: 'translateX(40px) translateY(2.5px)'
        },
        avatarWrapper: {
            marginRight: 8
        },
        choice: {
            flexGrow: 1,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            maxWidth: 180
        },
        ellipsisText: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        avatar: {
            width: 16,
            height: 16
        },
        link: {
            display: 'flex',
            width: '35%',
            color: 'inherit',
            alignItems: 'center',
            textDecoration: 'none !important',
            marginRight: 16
        },
        shadowRootTooltip: {
            color: 'white'
        }
    };
});
function VotesCard_Content() {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: votes  } = useVotes(identifier);
    const { classes  } = VotesCard_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotCard, {
        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge/* default */.Z, {
            max: 9999999,
            classes: {
                anchorOriginTopRightRectangular: classes.anchorTopRight
            },
            badgeContent: votes.length,
            color: "primary",
            children: t('plugin_snapshot_votes_title')
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            className: classes.list,
            children: votes.map((v)=>{
                const fullChoiceText = v.totalWeight && v.choices ? v.choices.reduce((acc, choice, i)=>{
                    return acc + (i === 0 ? '' : ', ') + (0,web3_shared_src/* formatPercentage */.rlw)(choice.weight / v.totalWeight) + ' ' + choice.name;
                }, '') : null;
                var _authorName;
                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.listItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            className: classnames_default()(classes.link, classes.ellipsisText),
                            target: "_blank",
                            rel: "noopener",
                            href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, v.address),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.avatarWrapper,
                                    children: v.authorAvatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                        src: (0,web3_shared_src/* resolveIPFSLink */.r5m)(v.authorAvatar),
                                        className: classes.avatar
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumBlockie, {
                                        address: v.address
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: (_authorName = v.authorName) !== null && _authorName !== void 0 ? _authorName : (0,web3_shared_src/* formatEthereumAddress */.j8w)(v.address, 4)
                                })
                            ]
                        }),
                        v.choice ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.choice,
                            children: v.choice
                        }) : v.choices ? /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* ShadowRootTooltip */.p_, {
                            PopperProps: {
                                disablePortal: true
                            },
                            title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.shadowRootTooltip,
                                children: fullChoiceText
                            }),
                            placement: "top",
                            arrow: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.choice,
                                children: fullChoiceText
                            })
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: (0,millify/* default */.ZP)(v.balance, {
                                precision: 2,
                                lowercase: true
                            }) + ' ' + (v.strategySymbol ? v.strategySymbol.toUpperCase() : '')
                        })
                    ]
                }, v.address));
            })
        })
    }));
}
function VotesCard_Loading(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard, {
        title: t('plugin_snapshot_votes_title'),
        children: props.children
    }));
}
function VotesCard_Fail(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
        title: t('plugin_snapshot_votes_title'),
        retry: retry,
        children: props.children
    }));
}
function VotesCard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Loading, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Fail, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard_Content, {
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/ProgressTab.tsx





function ProgressTab() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SnapshotTab, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InformationCard, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VotesCard, {
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Snapshot.tsx








const Snapshot_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        content: {
            width: '100%',
            minHeight: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            maxHeight: 'calc(var(--contentHeight) - var(--tabHeight))',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5)
        }
    };
});
function Snapshot() {
    const { classes  } = Snapshot_useStyles();
    const identifier = (0,react.useContext)(SnapshotContext);
    const { payload: { proposal , message  } ,  } = useProposal(identifier.id);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Proposal"
        }, "proposal"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: "Progress"
        }, "progress"), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            sx: {
                                marginRight: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "span",
                                    sx: {
                                        marginRight: 0.5
                                    },
                                    children: message.payload.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    component: "span",
                                    children: [
                                        "#",
                                        identifier.id.slice(0, 7)
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            color: "primary",
                            size: "small",
                            label: proposal.status
                        })
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    sx: {
                        marginTop: 0.5
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        variant: "body2",
                        children: identifier.space
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                        className: classes.tabs,
                        indicatorColor: "primary",
                        textColor: "primary",
                        variant: "fullWidth",
                        value: tabIndex,
                        onChange: (ev, newValue)=>setTabIndex(newValue)
                        ,
                        TabIndicatorProps: {
                            style: {
                                display: 'none'
                            }
                        },
                        children: tabs
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        className: classes.body,
                        children: [
                            tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProposalTab, {
                            }) : null,
                            tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProgressTab, {
                            }) : null
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/PostInspector.tsx






function PostInspector(props) {
    const identifier = getProposalIdentifier(props.url);
    const retry = useRetry();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotContext.Provider, {
        value: identifier,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
            title: "",
            isFullPluginDown: true,
            retry: retry,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Snapshot, {
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/index.tsx










const SNSAdaptor_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
const isSnaphotURL = (x)=>/^https:\/\/(?:www.)?snapshot.(org|page)\/#\/(.*?)\/proposal\/[\dA-Za-z]+$/.test(x)
;
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
        pluginName: "Snapshot",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.skeleton,
                    animation: "wave",
                    variant: "rectangular",
                    width: i === 0 ? '80%' : '60%',
                    height: 15
                }, i)
            ),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
                url: url
            })
        })
    }));
}
const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector: function Component(props) {
        const text = (0,react.useMemo)(()=>(0,typed_message/* extractTextFromTypedMessage */.Vc)(props.message)
        , [
            props.message
        ]);
        const link = (0,react.useMemo)(()=>(0,shared_src.parseURL)(text.val || '')
        , [
            text.val
        ]).find(isSnaphotURL);
        if (!text.ok) return null;
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component1() {
        const link = usePostInfo/* usePostInfoDetails.postMetadataMentionedLinks */.H9.postMetadataMentionedLinks().concat(usePostInfo/* usePostInfoDetails.postMentionedLinks */.H9.postMentionedLinks()).find(isSnaphotURL);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 74349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ PluginSnapshotRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92581);


if (false) {}
const PluginSnapshotMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .l);
const PluginSnapshotRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .SNAPSHOT_PLUGIN_ID */ .l, ()=>Promise.all(/* import() */[__webpack_require__.e(1902), __webpack_require__.e(9779)]).then(__webpack_require__.bind(__webpack_require__, 69779))
, PluginSnapshotMessages.rpc);


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

/***/ 75388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vA": () => (/* binding */ MaskbookTextIcon),
/* harmony export */   "LX": () => (/* binding */ MaskbookIcon),
/* harmony export */   "A4": () => (/* binding */ MaskbookIconOutlined),
/* harmony export */   "ck": () => (/* binding */ MaskbookSharpIcon),
/* harmony export */   "J6": () => (/* binding */ MaskbookSharpIconOfSize),
/* harmony export */   "Z6": () => (/* binding */ WalletSharp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12445);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskbookSmileFaceSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 600 600",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        fillRule: "evenodd",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
});
const MaskbookSmileFaceSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size =20  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskbookSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskbookTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskbookTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookTextSVG
    }));
}
function MaskbookIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceSVG
    }));
}
function MaskbookIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: MaskbookSmileFaceOutlinedSVG
    }));
}
function MaskbookSharpIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        style: {
            transform: 'translate(2px, 1.5px)'
        },
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
        })
    }));
}
function MaskbookSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskbookSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletSharpSVG, {
            size: props.size
        })
    }));
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


/***/ })

}]);