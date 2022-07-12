(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9358],{

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 66309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78778);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51129);





// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ const Image = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL , onError ,  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>void (url && onURL?.(url))
    , [
        onURL,
        url
    ]);
    const outgoingRefItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>outgoingRefItem
    , [
        outgoingRefItem
    ]);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        });
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : (event)=>onError?.(event)
            ,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    });
});
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {}
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

/***/ 28159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/MoreHoriz.js
var MoreHoriz = __webpack_require__(33209);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71246);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(93122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ./src/utils/theme/useClassicMaskFullPageTheme.ts
var useClassicMaskFullPageTheme = __webpack_require__(1557);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 6 modules
var merge = __webpack_require__(9084);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/cloneDeep.js
var cloneDeep = __webpack_require__(46440);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx












const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
/** @deprecated Do not use in new code. */ function DashboardDialogCore(props) {
    const { fullScreen , children , CloseIconProps , CloseButtonProps , ...dialogProps } = props;
    const { classes  } = useStyles();
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
        className: classes.root,
        fullScreen: fullScreen ?? xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.close,
                onClick: (e)=>dialogProps.onClose?.(e, 'backdropClick')
                ,
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                    ...CloseIconProps
                })
            })
        ]
    });
}
var DialogState;
(function(DialogState) {
    DialogState[DialogState["Opened"] = 1] = "Opened";
    DialogState[DialogState["Closing"] = 2] = "Closing";
    DialogState[DialogState["Destroyed"] = 3] = "Destroyed";
})(DialogState || (DialogState = {}));
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
/** @deprecated */ function useModal(Modal, ComponentProps) {
    const [status, dispatch] = (0,react.useReducer)(reducer, {
        state: DialogState.Destroyed
    });
    const showModal = (0,react.useCallback)(()=>dispatch({
            type: 'open'
        })
    , []);
    const showStatefulModal = (0,react.useCallback)((props)=>dispatch({
            type: 'open',
            props
        })
    , []);
    // TODO: prevent onClose on some cases (e.g, click away while loading)
    const onClose = (0,react.useCallback)(()=>dispatch({
            type: 'close'
        })
    , []);
    const onExited = (0,react.useCallback)(()=>dispatch({
            type: 'destroy'
        })
    , []);
    const { state , props: props1  } = status;
    const compositeProps = ComponentProps || props1 ? {
        ComponentProps: {
            ...ComponentProps,
            ...props1
        }
    } : {};
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    // Restore old theme
    const theme = (0,useClassicMaskFullPageTheme/* useClassicMaskFullPageTheme */.K)((0,shared_base_ui_src/* useValueRef */.E)(settings/* appearanceSettings */.OF), (0,shared_base_ui_src/* useValueRef */.E)(settings/* languageSettings */.pQ));
    const renderedComponent = state === DialogState.Destroyed ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal, {
            ...modalProps
        })
    });
    return [
        renderedComponent,
        showModal,
        showStatefulModal
    ];
}
const useDashboardDialogWrapperStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
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
function extendsTheme(extend) {
    return (theme)=>(0,merge/* default */.Z)((0,cloneDeep/* default */.Z)(theme), extend(theme))
    ;
}
const dialogTheme = extendsTheme((theme)=>({
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
/** @deprecated Do not use in new code */ function DashboardDialogWrapper(props) {
    const { size , icon , iconColor , primary , secondary , constraintSecondary =true , content , footer  } = props;
    const { classes  } = useDashboardDialogWrapperStyles(props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: dialogTheme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.header,
                    children: [
                        icon && /*#__PURE__*/ (0,react.cloneElement)(icon, {
                            width: 64,
                            height: 64,
                            stroke: iconColor
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.primary,
                            variant: "h5",
                            children: primary
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classnames_default()(classes.secondary, size !== 'small' && constraintSecondary ? classes.confineSecondary : ''),
                            color: "textSecondary",
                            variant: "body2",
                            dangerouslySetInnerHTML: {
                                __html: secondary ?? ''
                            }
                        })
                    ]
                }),
                content ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    className: classes.content,
                    children: content
                }) : null,
                footer ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    className: classes.footer,
                    children: footer
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(5971);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/HideTokenConfirm.tsx










function DashboardWalletHideTokenConfirmDialog(props) {
    const { wallet , token  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    const tokenAddress = token.address ?? token.contract?.address;
    const tokenName = token.name ?? token.metadata?.name;
    const onConfirm = (0,src/* useSnackbarCallback */.iD)(async ()=>{
        return;
    // const schema = ((token as FungibleToken<ChainId, SchemaType.Native | SchemaType.ERC20>).schema ??
    //     (token as NonFungibleToken<ChainId, SchemaType.ERC721>).schema) as
    //     | SchemaType.Native
    //     | SchemaType.ERC20
    //     | SchemaType.ERC721
    // switch (schema) {
    //     case SchemaType.Native:
    //         throw new Error('Unable to hide the native token.')
    //     case SchemaType.ERC20:
    //         return WalletRPC.updateWalletToken(
    //             wallet.address,
    //             token as FungibleToken<ChainId, SchemaType.ERC20>,
    //             {
    //                 strategy: 'block',
    //             },
    //         )
    //     case SchemaType.ERC721:
    //         return WalletRPC.removeToken(token as NonFungibleToken<ChainId, SchemaType.ERC721>)
    //     default:
    //         unreachable(schema)
    // }
    }, [
        wallet.address,
        token
    ], props.onClose);
    if ((0,address/* isNativeTokenAddress */.qw)(tokenAddress)) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogCore, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogWrapper, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(trash_2/* default */.Z, {}),
            iconColor: "#F4637D",
            primary: t('hide_token'),
            secondary: t('hide_token_hint', {
                token: tokenName
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: onConfirm,
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    });
}
const HideTokenConfirm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        buttonGroup: {
            flexGrow: 0,
            flexShrink: 0,
            '& > *:not(:last-child)': {
                marginRight: theme.spacing(2)
            }
        }
    })
);
function SpacedButtonGroup(_props) {
    const { classes  } = HideTokenConfirm_useStyles();
    const { className , ...props } = _props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classnames_default()(className, classes.buttonGroup),
        ...props
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(66309);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(61305);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(89190);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/TransferNFT.tsx












const useTransferDialogStylesNFT = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1)
        },
        button: {
            marginTop: theme.spacing(3)
        },
        placeholder: {
            width: 48,
            height: 48,
            opacity: 0.1
        }
    })
);
function DashboardWalletTransferDialogNFT(props) {
    const { token  } = props.ComponentProps;
    const { onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useTransferDialogStylesNFT();
    const [address, setAddress] = (0,react.useState)('');
    const { collectiblesRetry  } = (0,react.useContext)(CollectibleList/* CollectibleContext */.E);
    // #region transfer tokens
    const [{ loading  }, transferCallback] = (0,entry_web3_evm/* useTokenTransferCallback */.z7)(token.schema, token.address);
    const openShareTxDialog = (0,src/* useOpenShareTxDialog */.z)();
    const onTransfer = (0,react.useCallback)(async ()=>{
        const hash = await transferCallback(token.tokenId, address);
        if (typeof hash === 'string') {
            await openShareTxDialog({
                hash
            });
            onClose();
        }
        collectiblesRetry();
    }, [
        transferCallback,
        token.tokenId,
        address,
        collectiblesRetry,
        openShareTxDialog
    ]);
    // #endregion
    // #region validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (!address) return t('wallet_transfer_error_address_absence');
        if (!dist.EthereumAddress.isValid(address)) return t('wallet_transfer_error_invalid_address');
        return '';
    }, [
        address,
        token
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogCore, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogWrapper, {
            primary: t('wallet_transfer_title'),
            icon: token.metadata?.mediaURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                component: "img",
                width: 160,
                height: 220,
                style: {
                    objectFit: 'contain'
                },
                src: token.metadata.mediaURL
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIconOutlined */.$T, {
                className: classes.placeholder
            }),
            size: "medium",
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        required: true,
                        label: t('wallet_transfer_to_address'),
                        placeholder: t('wallet_transfer_to_address'),
                        value: address,
                        onChange: (e)=>setAddress(e.target.value)
                        ,
                        inputProps: {
                            spellCheck: 'false'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        variant: "contained",
                        color: "primary",
                        disabled: !!validationMessage || loading,
                        onClick: onTransfer,
                        children: validationMessage || t('wallet_transfer_send')
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx



// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ActionsBarNFT.tsx










const ActionsBarNFT_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        more: {
            color: theme.palette.text.primary
        }
    })
);
function ActionsBarNFT(props) {
    const { wallet , token  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(ActionsBarNFT_useStyles(), props);
    const chainIdValid = (0,entry_web3/* useChainIdValid */.as)();
    const [transferDialog, , openTransferDialogOpen] = useModal(DashboardWalletTransferDialogNFT);
    const [hideTokenConfirmDialog, , openHideTokenConfirmDialog] = useModal(DashboardWalletHideTokenConfirmDialog);
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        token.schema === types/* SchemaType.ERC721 */.XQ.ERC721 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            disabled: !chainIdValid,
            onClick: ()=>openTransferDialogOpen({
                    token: token
                })
            ,
            children: t('transfer')
        }, "transfer") : null,
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openHideTokenConfirmDialog({
                    wallet,
                    token: token
                })
            ,
            children: t('hide')
        }, "hide"), 
    ]);
    const onClickButton = (0,react.useCallback)((ev)=>{
        ev.preventDefault();
        openMenu(ev);
    }, [
        openMenu
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.more,
                size: "small",
                onClick: onClickButton,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreHoriz/* default */.Z, {})
            }),
            menu,
            hideTokenConfirmDialog,
            transferDialog
        ]
    });
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx





const CollectibleCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 4,
            position: 'absolute',
            zIndex: 1,
            backgroundColor: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            width: 172,
            height: 172
        },
        icon: {
            top: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            zIndex: 1,
            backgroundColor: `${theme.palette.background.paper} !important`
        },
        placeholderIcon: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            width: 64,
            height: 64,
            opacity: 0.1
        },
        loadingFailImage: {
            minHeight: '0 !important',
            maxWidth: 'none',
            width: 64,
            height: 64
        },
        wrapper: {
            width: '172px !important',
            height: '172px !important'
        },
        blocker: {
            position: 'absolute',
            zIndex: 2,
            width: 172,
            height: 172
        },
        linkWrapper: {
            position: 'relative',
            display: 'block',
            width: 172,
            height: 172
        }
    })
);
function CollectibleCard(props) {
    const { wallet , token , readonly , renderOrder  } = props;
    const { classes  } = CollectibleCard_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        className: classes.linkWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.blocker
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                children: [
                    readonly || !wallet ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsBarNFT, {
                        classes: {
                            more: classes.icon
                        },
                        wallet: wallet,
                        token: token
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* NFTCardStyledAssetPlayer */.yC, {
                        contractAddress: token.address,
                        chainId: token.chainId,
                        url: token.metadata?.mediaURL || token.metadata?.imageURL,
                        renderOrder: renderOrder,
                        tokenId: token.tokenId,
                        classes: {
                            loadingFailImage: classes.loadingFailImage,
                            wrapper: classes.wrapper
                        }
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 89190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ CollectibleContext),
  "G2": () => (/* binding */ CollectionList)
});

// UNUSED EXPORTS: CollectibleList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx + 5 modules
var CollectibleCard = __webpack_require__(28159);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(13231);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(66309);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectionIcon.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        collectionWrap: {
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(229,232,235,1)',
            cursor: 'pointer'
        },
        collectionImg: {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            color: theme.palette.primary.main
        },
        tip: {
            padding: theme.spacing(1)
        },
        selected: {
            border: '2px solid #1D9BF0',
            borderRadius: '50%'
        }
    })
);
const CollectionIcon = /*#__PURE__*/ (0,react.memo)(({ collection , onClick , selectedCollection  })=>{
    const { classes  } = useStyles();
    if (!collection) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
            classes: {
                icon: classes.collectionImg
            },
            name: "other",
            address: "other"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        placement: "right-end",
        classes: {
            tooltip: classes.tip
        },
        PopperProps: {
            disablePortal: true
        },
        title: collection?.name ?? '',
        arrow: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classnames_default()(classes.collectionWrap, (0,src/* isSameAddress */.Wr)(collection.address, selectedCollection) ? classes.selected : ''),
            onClick: onClick,
            children: collection?.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                width: 24,
                height: 24,
                component: "img",
                className: classes.collectionImg,
                src: collection?.iconURL
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                classes: {
                    icon: classes.collectionImg
                },
                name: collection?.name,
                address: collection.name
            })
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(76410);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/LoadingSkeleton.tsx



const LoadingSkeleton_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(172px, 1fr))',
            gridGap: theme.spacing(1)
        },
        card: {
            width: 172,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: theme.spacing(1, 0)
        }
    })
);
const LoadingSkeleton = ()=>{
    const { classes  } = LoadingSkeleton_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        children: Array.from({
            length: 3
        }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.card,
                display: "flex",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        width: 172,
                        height: 172
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "text",
                        width: 172,
                        height: 20,
                        style: {
                            marginTop: 4
                        }
                    })
                ]
            }, i)
        )
    });
};

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx














const CollectibleContext = /*#__PURE__*/ (0,react.createContext)(null);
const AllNetworkButton = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        display: 'inline-block',
        padding: 0,
        borderRadius: '50%',
        fontSize: 12,
        '&:hover': {
            boxShadow: 'none'
        },
        opacity: 0.5
    })
);
const CollectibleList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'grid',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fill, minmax(172px, 1fr))',
            gridGap: theme.spacing(1)
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        button: {
            '&:hover': {
                border: 'solid 1px transparent'
            }
        },
        container: {
            height: 'calc(100% - 52px)',
            overflow: 'auto'
        },
        card: {
            width: 172,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: theme.spacing(1, 0)
        },
        description: {
            background: theme.palette.mode === 'light' ? '#F7F9FA' : '#2F3336',
            alignSelf: 'stretch'
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            lineHeight: '36px',
            paddingLeft: '8px'
        },
        loading: {
            position: 'absolute',
            bottom: 6,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        },
        collectionWrap: {
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(229,232,235,1)'
        },
        collectionImg: {
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '50%'
        },
        networkSelected: {
            width: 24,
            height: 24,
            minHeight: 24,
            minWidth: 24,
            lineHeight: '24px',
            background: theme.palette.primary.main,
            color: '#ffffff',
            fontSize: 10,
            opacity: 1,
            '&:hover': {
                background: theme.palette.primary.main
            }
        }
    })
);
function CollectibleItem(props) {
    const { provider , wallet , token , readonly , renderOrder  } = props;
    const { classes  } = CollectibleList_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard/* CollectibleCard */.Z, {
                token: token,
                provider: provider,
                wallet: wallet,
                readonly: readonly,
                renderOrder: renderOrder
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    variant: "body2",
                    children: token.metadata?.name
                })
            })
        ]
    });
}
function CollectibleListUI(props) {
    const { provider , wallet , collectibles , loading , collectiblesRetry , error , readonly , hasRetry =true  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(CollectibleList_useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleContext.Provider, {
        value: {
            collectiblesRetry
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            children: [
                loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSkeleton, {}),
                error || collectibles.length === 0 && !loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.text,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('dashboard_no_collectible_found')
                        }),
                        hasRetry ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            variant: "text",
                            onClick: ()=>collectiblesRetry()
                            ,
                            children: t('plugin_collectible_retry')
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.root,
                    children: collectibles.map((token, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem, {
                            renderOrder: index,
                            token: token,
                            provider: provider,
                            wallet: wallet,
                            readonly: readonly
                        }, index)
                    )
                })
            ]
        })
    });
}
function CollectibleList(props) {
    const { address , collectibles , error , loading , retry  } = props;
    const classes = props.classes ?? {};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        provider: src/* SourceType.OpenSea */.PO.OpenSea,
        classes: classes,
        collectibles: collectibles,
        loading: loading,
        collectiblesRetry: retry,
        error: error,
        readonly: true,
        hasRetry: !!address
    });
}
function CollectionList({ addressName , onSelectAddress  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CollectibleList_useStyles();
    const [selectedCollection, setSelectedCollection] = (0,react.useState)('all');
    const { address: account  } = addressName;
    (0,react.useEffect)(()=>{
        setSelectedCollection('all');
    }, [
        account
    ]);
    const trustedNonFungibleTokens = (0,entry_web3/* useTrustedNonFungibleTokens */.KP)();
    const { value: collectibles = shared_base_src/* EMPTY_LIST */.rP , done , next: nextPage , error , loading , retry: retryFetchCollectible ,  } = (0,entry_web3/* useNonFungibleAssets */.H1)(addressName.networkSupporterPluginID, undefined, {
        account
    });
    const allCollectibles = [
        ...trustedNonFungibleTokens.filter((x)=>(0,src/* isSameAddress */.Wr)(x.contract?.owner, account)
        ),
        ...collectibles, 
    ];
    const renderCollectibles = (0,react.useMemo)(()=>{
        if (selectedCollection === 'all') return allCollectibles;
        const uniqCollectibles = (0,uniqBy/* default */.Z)(allCollectibles, (x)=>x?.contract?.address.toLowerCase() + x?.tokenId
        );
        if (!selectedCollection) return uniqCollectibles.filter((x)=>!x.collection
        );
        return uniqCollectibles.filter((x)=>(0,src/* isSameAddress */.Wr)(selectedCollection.address, x.collection?.address)
        );
    }, [
        selectedCollection,
        allCollectibles.length
    ]);
    const collections = (0,react.useMemo)(()=>{
        return (0,uniqBy/* default */.Z)(allCollectibles, (x)=>x?.contract?.address.toLowerCase()
        ).map((x)=>x?.collection
        ).filter(Boolean);
    }, [
        allCollectibles.length
    ]);
    const isFromAlchemy = collections?.findIndex((collection)=>collection?.name?.length > 0
    ) === -1;
    if (!allCollectibles.length && !done && !error && account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSkeleton, {});
    if (!allCollectibles.length && error && account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* RetryHint */.uw, {
        retry: nextPage
    });
    if (done && !allCollectibles.length || !account) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            addressName && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                height: 42,
                justifyContent: "flex-end",
                alignItems: "center",
                px: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexWrap: "wrap",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                        onClick: onSelectAddress,
                        className: classes.button,
                        variant: "outlined",
                        size: "small",
                        children: [
                            addressName.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                                address: addressName.address,
                                pluginId: addressName.networkSupporterPluginID
                            }) : addressName.label,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.Z, {})
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    sx: {
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    children: t('dashboard_no_collectible_found')
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        display: "inline-flex"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                            onClick: onSelectAddress,
                            className: classes.button,
                            variant: "outlined",
                            size: "small",
                            children: [
                                addressName.type === src/* SocialAddressType.ADDRESS */.bN.ADDRESS ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                                    address: addressName.address,
                                    pluginId: addressName.networkSupporterPluginID
                                }) : addressName.label,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyboardArrowDown/* default */.Z, {})
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                spacing: 1,
                direction: "row",
                mt: 1.5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            flexGrow: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    !selectedCollection && selectedCollection !== 'all' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.name,
                                            color: "textPrimary",
                                            variant: "body2",
                                            sx: {
                                                fontSize: '16px'
                                            },
                                            children: [
                                                "Other",
                                                renderCollectibles.length ? `(${renderCollectibles.length})` : null
                                            ]
                                        })
                                    }),
                                    selectedCollection && selectedCollection !== 'all' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionIcon, {
                                                collection: selectedCollection
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.name,
                                                color: "textPrimary",
                                                variant: "body2",
                                                sx: {
                                                    fontSize: '16px'
                                                },
                                                children: [
                                                    selectedCollection?.name,
                                                    renderCollectibles.length ? `(${renderCollectibles.length})` : null
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList, {
                                        address: account,
                                        retry: retryFetchCollectible,
                                        collectibles: renderCollectibles,
                                        loading: renderCollectibles.length === 0
                                    })
                                ]
                            }),
                            error && !done && /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* RetryHint */.uw, {
                                hint: false,
                                retry: nextPage
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ElementAnchor */.ek, {
                                callback: ()=>{
                                    if (nextPage) nextPage();
                                },
                                children: !done && /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* LoadingBase */.Sx, {})
                            })
                        ]
                    }),
                    !isFromAlchemy && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                sx: {
                                    marginTop: '8px',
                                    marginBottom: '12px',
                                    minWidth: 30,
                                    maxHeight: 24
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AllNetworkButton, {
                                    className: classes.networkSelected,
                                    onClick: ()=>setSelectedCollection('all')
                                    ,
                                    children: "ALL"
                                })
                            }),
                            collections.map((x, i)=>{
                                return x?.name?.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    sx: {
                                        marginTop: '8px',
                                        marginBottom: '12px',
                                        minWidth: 30,
                                        maxHeight: 24
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectionIcon, {
                                        selectedCollection: selectedCollection === 'all' ? undefined : selectedCollection?.address,
                                        collection: x,
                                        onClick: ()=>{
                                            setSelectedCollection(x);
                                        }
                                    })
                                }, i);
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 61305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "oL": () => (/* binding */ MaskIconInMinds)
/* harmony export */ });
/* unused harmony exports MaskTextIcon, WalletSharp, MaskFilledIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8461);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskSmileFaceSVG = ({ size =24  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 600 600",
        xmlns: "http://www.w3.org/2000/svg",
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
;
const MaskSmileFaceSharpSVG = ({ size =19  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
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
const WalletSharpSVG = ({ size  })=>/*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskFilledSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
            fill: "#0F1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.8466 9.8044V14.1215H7.68749L7.12132 14.1216C7.72056 16.7411 10.0987 18.6977 12.9412 18.6977C15.2911 18.6977 17.3237 17.3604 18.2961 15.4168L20.8466 15.4167V19.0431C20.8466 19.9014 20.1396 20.5973 19.2675 20.5973H6.63476C5.76265 20.5973 5.05566 19.9014 5.05566 19.0431V9.8044H20.8466ZM16.7816 15.4168C15.9442 16.6218 14.5365 17.4126 12.9412 17.4126C11.3458 17.4126 9.93816 16.6218 9.10072 15.4168H16.7816ZM9.57363 10.8405C8.33615 10.8405 7.3124 11.7411 7.14213 12.9128L8.48817 12.9128C8.63617 12.4618 9.0662 12.1357 9.57363 12.1357C10.0811 12.1357 10.5111 12.4618 10.6591 12.9128L12.0051 12.9128C11.8349 11.7411 10.8111 10.8405 9.57363 10.8405ZM16.3287 10.8405C15.0912 10.8405 14.0674 11.7411 13.8972 12.9128L15.2432 12.9128C15.3912 12.4618 15.8212 12.1357 16.3287 12.1357C16.8361 12.1357 17.2661 12.4618 17.4141 12.9128L18.7601 12.9128C18.5899 11.7411 17.5661 10.8405 16.3287 10.8405ZM19.2675 5.05554C20.1396 5.05554 20.8466 5.75137 20.8466 6.60971V8.50926H5.05566V6.60971C5.05566 5.75137 5.76265 5.05554 6.63476 5.05554H19.2675Z",
            fill: "white"
        })
    ]
});
const MaskSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
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
const MaskTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskTextIcon(props) {
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: MaskTextSVG
    });
}
function MaskIcon(props) {
    const { size =24  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    });
}
function MaskIconOutlined(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    });
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 38 38",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    });
}
function MaskIconInMinds(props) {
    const { size =18 , color  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 52 52",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "52",
            height: "52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M26 52c14.36 0 26-11.64 26-26S40.36 0 26 0 0 11.64 0 26s11.64 26 26 26Z",
                    fill: "#72727C"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M41.693 19.609v8.634H14.242c1.199 5.24 5.955 9.153 11.64 9.153 4.7 0 8.765-2.675 10.71-6.562h5.1v7.252c0 1.717-1.413 3.109-3.157 3.109H13.269c-1.744 0-3.158-1.392-3.158-3.109V19.61h31.582Zm-8.13 11.225a9.33 9.33 0 0 1-7.681 3.991 9.33 9.33 0 0 1-7.681-3.991h15.362ZM19.147 21.68c-2.475 0-4.523 1.801-4.863 4.145h2.692a2.279 2.279 0 0 1 2.17-1.555c1.016 0 1.876.653 2.172 1.555h2.692c-.34-2.344-2.388-4.145-4.863-4.145Zm13.51 0c-2.475 0-4.523 1.801-4.863 4.145h2.692a2.279 2.279 0 0 1 2.17-1.555c1.016 0 1.876.653 2.172 1.555h2.692c-.34-2.344-2.388-4.145-4.863-4.145Zm5.878-11.57c1.744 0 3.158 1.392 3.158 3.108v3.8H10.11v-3.8c0-1.716 1.414-3.108 3.158-3.108h25.266Z",
                    fill: "#fff"
                })
            ]
        })
    });
}
function MaskSharpIconOfSize(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    });
}
function WalletSharp(props) {
    const { size =20  } = props;
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    });
}
function MaskFilledIcon(props) {
    const theme = useTheme();
    const icon = /* unused asset import */ undefined.toString();
    const icon_dark = /* unused asset import */ undefined.toString();
    return /*#__PURE__*/ _jsx("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    });
}


/***/ }),

/***/ 1557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useClassicMaskFullPageTheme),
/* harmony export */   "O": () => (/* binding */ usePopupFullPageTheme)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25105);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65095);




/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useClassicMaskFullPageTheme(userPreference, language) {
    const systemPreference = 'matchMedia' in globalThis ? matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light';
    const finalPalette = userPreference === _masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .Appearance["default"] */ .um["default"] ? systemPreference : userPreference;
    const baseTheme = finalPalette === 'dark' ? _MaskTheme__WEBPACK_IMPORTED_MODULE_1__/* .MaskDarkTheme */ .H : _MaskTheme__WEBPACK_IMPORTED_MODULE_1__/* .MaskLightTheme */ .C;
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(baseTheme, (0,_useThemeLanguage__WEBPACK_IMPORTED_MODULE_2__/* .useThemeLanguage */ .e)(language));
}
/**
 * @deprecated Should migrate to \@masknet/theme
 */ function usePopupFullPageTheme(language) {
    return useClassicMaskFullPageTheme(_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .Appearance.light */ .um.light, language);
}


/***/ })

}]);