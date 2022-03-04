"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2412],{

/***/ 25591:
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

/***/ 40516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59302);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99997);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56213);





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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
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
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : (event)=>{
                return onError === null || onError === void 0 ? void 0 : onError(event);
            },
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
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
    }));
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

/***/ 40943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(21156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/MoreHoriz.js
var MoreHoriz = __webpack_require__(85930);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(23887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.2_03eb9a7115720fddaa34be5f9d89cc8e/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(25234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx







// eslint-disable-next-line import/no-deprecated

const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Dialog/* default */.Z, {
        className: classes.root,
        fullScreen: fullScreen !== null && fullScreen !== void 0 ? fullScreen : xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.close,
                onClick: (e)=>{
                    var ref;
                    return (ref = dialogProps.onClose) === null || ref === void 0 ? void 0 : ref.call(dialogProps, e, 'backdropClick');
                },
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                    ...CloseIconProps
                })
            })
        ]
    }));
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
/** @deprecated */ function useModal(// eslint-disable-next-line import/no-deprecated
Modal, ComponentProps) {
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
    // eslint-disable-next-line import/no-deprecated
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    // Restore old theme
    // eslint-disable-next-line import/no-deprecated
    const theme = (0,utils/* useClassicMaskFullPageTheme */.Kx)();
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
const useDashboardDialogWrapperStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
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
const dialogTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
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
                                __html: secondary !== null && secondary !== void 0 ? secondary : ''
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-rc.0/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(27482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/HideTokenConfirm.tsx









// eslint-disable-next-line import/no-deprecated



function DashboardWalletHideTokenConfirmDialog(// eslint-disable-next-line import/no-deprecated
props) {
    const { wallet , token  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    var _address;
    const tokenAddress = (_address = token.address) !== null && _address !== void 0 ? _address : token.contractDetailed.address;
    var _name;
    const tokenName = (_name = token.name) !== null && _name !== void 0 ? _name : token.info.name;
    const onConfirm = (0,shared_src/* useSnackbarCallback */.iD)(()=>{
        var _type;
        const type = (_type = token.type) !== null && _type !== void 0 ? _type : token.contractDetailed.type;
        switch(type){
            case types/* EthereumTokenType.Native */.Dr.Native:
                throw new Error('Unable to hide the native token.');
            case types/* EthereumTokenType.ERC20 */.Dr.ERC20:
                return messages/* WalletRPC.updateWalletToken */.V.updateWalletToken(wallet.address, token, {
                    strategy: 'block'
                });
            case types/* EthereumTokenType.ERC721 */.Dr.ERC721:
                return messages/* WalletRPC.removeToken */.V.removeToken(token);
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        wallet.address,
        token
    ], props.onClose);
    if ((0,address/* isNativeTokenAddress */.qw)(tokenAddress)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogCore, {
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
    }));
}
const HideTokenConfirm_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classnames_default()(className, classes.buttonGroup),
        ...props
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(17939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(16825);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(40516);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 1 modules
var CollectibleList = __webpack_require__(73589);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/TransferNFT.tsx












// eslint-disable-next-line import/no-deprecated

const useTransferDialogStylesNFT = (0,src/* makeStyles */.ZL)()((theme)=>({
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
// eslint-disable-next-line import/no-deprecated
function DashboardWalletTransferDialogNFT(props) {
    const { token  } = props.ComponentProps;
    const { onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useTransferDialogStylesNFT();
    const [address, setAddress] = (0,react.useState)('');
    const { collectiblesRetry  } = (0,react.useContext)(CollectibleList/* CollectibleContext */.E);
    // #region transfer tokens
    const [transferState, transferCallback, resetTransferCallback] = (0,useTokenTransferCallback/* useTokenTransferCallback */.z)(token.contractDetailed.type, token.contractDetailed.address);
    const onTransfer = (0,react.useCallback)(async ()=>{
        await transferCallback(token.tokenId, address);
    }, [
        transferCallback,
        token.tokenId,
        address
    ]);
    // #endregion
    // #region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open) return;
        resetTransferCallback();
        if (transferState.type !== types/* TransactionStateType.HASH */.n$.HASH) return;
        onClose();
        collectiblesRetry();
    }, [
        transferState.type,
        collectiblesRetry
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (transferState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            state: transferState,
            summary: `Transfer ${token.info.name} to ${(0,formatter/* formatEthereumAddress */.j8)(address, 4)}.`
        });
    }, [
        transferState /* update tx dialog only if state changed */ 
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogCore, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogWrapper, {
            primary: t('wallet_transfer_title'),
            icon: token.info.mediaUrl ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                component: "img",
                width: 160,
                height: 220,
                style: {
                    objectFit: 'contain'
                },
                src: token.info.mediaUrl
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
                        disabled: !!validationMessage || transferState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
                        onClick: onTransfer,
                        children: validationMessage || t('wallet_transfer_send')
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx



;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ActionsBarNFT.tsx







// eslint-disable-next-line import/no-deprecated


const ActionsBarNFT_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        more: {
            color: theme.palette.text.primary
        }
    })
);
function ActionsBarNFT(props) {
    const { wallet , token  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(ActionsBarNFT_useStyles(), props);
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    // eslint-disable-next-line import/no-deprecated
    const [transferDialog, , openTransferDialogOpen] = useModal(DashboardWalletTransferDialogNFT);
    // eslint-disable-next-line import/no-deprecated
    const [hideTokenConfirmDialog, , openHideTokenConfirmDialog] = useModal(DashboardWalletHideTokenConfirmDialog);
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        token.contractDetailed.type === types/* EthereumTokenType.ERC721 */.Dr.ERC721 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            disabled: !chainIdValid,
            onClick: ()=>openTransferDialogOpen({
                    token
                })
            ,
            children: t('transfer')
        }, "transfer") : null,
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openHideTokenConfirmDialog({
                    wallet,
                    token
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx






const CollectibleCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
            minHeight: '0px !important',
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
    const { wallet , token , provider , readonly , renderOrder  } = props;
    const { classes  } = CollectibleCard_useStyles();
    const theme = (0,useTheme/* default */.Z)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        target: "_blank",
        rel: "noopener noreferrer",
        className: classes.linkWrapper,
        href: (0,pipes/* resolveCollectibleLink */.Q_)(token.contractDetailed.chainId, provider, token),
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                        contractAddress: token.contractDetailed.address,
                        chainId: token.contractDetailed.chainId,
                        url: token.info.mediaUrl,
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
    }));
}


/***/ }),

/***/ 73589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ CollectibleContext),
  "G2": () => (/* binding */ CollectionList)
});

// UNUSED EXPORTS: CollectibleList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(78037);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(74727);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(19132);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(56213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(66709);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx + 5 modules
var CollectibleCard = __webpack_require__(40943);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(37828);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(2473);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(40516);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectionIcon.tsx








const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
            classes: {
                icon: classes.collectionImg
            },
            name: "other",
            address: "other"
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        placement: "right-end",
        classes: {
            tooltip: classes.tip
        },
        PopperProps: {
            disablePortal: true
        },
        title: collection.name,
        arrow: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classnames_default()(classes.collectionWrap, (0,utils_address/* isSameAddress */.Wr)(collection.address, selectedCollection) ? classes.selected : ''),
            onClick: onClick,
            children: collection.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                component: "img",
                className: classes.collectionImg,
                src: collection.iconURL
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                classes: {
                    icon: classes.collectionImg
                },
                name: collection.name,
                address: collection.address
            })
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(71062);
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
const CollectibleList_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
        button: {},
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                    children: token.info.name
                })
            })
        ]
    }));
}
function CollectibleListUI(props) {
    const { provider , wallet , collectibles , loading , collectiblesRetry , error , readonly , hasRetry =true  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(CollectibleList_useStyles(), props);
    (0,react.useEffect)(()=>Wallet_src/* WalletMessages.events.erc721TokensUpdated.on */.R$.events.erc721TokensUpdated.on(collectiblesRetry)
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleContext.Provider, {
        value: {
            collectiblesRetry
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            children: [
                loading && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
                }),
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
                    children: collectibles.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleItem, {
                            renderOrder: i,
                            token: x,
                            provider: provider,
                            wallet: wallet,
                            readonly: readonly
                        }, x.tokenId + x.contractDetailed.address)
                    )
                })
            ]
        })
    }));
}
function CollectibleList(props) {
    const { address , collectibles , error , loading , retry  } = props;
    const provider = (0,src/* useValueRef */.E)(settings/* currentNonFungibleAssetDataProviderSettings */.uR);
    var _classes;
    const classes = (_classes = props.classes) !== null && _classes !== void 0 ? _classes : {};
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        classes: classes,
        provider: provider,
        collectibles: collectibles,
        loading: loading,
        collectiblesRetry: retry,
        error: error,
        readonly: true,
        hasRetry: !!address
    }));
}
function CollectionList({ addressName , onSelectAddress  }) {
    const chainId = types/* ChainId.Mainnet */.a_.Mainnet;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CollectibleList_useStyles();
    const [selectedCollection, setSelectedCollection] = (0,react.useState)('all');
    const { resolvedAddress: address  } = addressName;
    const { data: collectionsFormRemote  } = (0,useCollectibles/* useCollections */.b)(address, chainId);
    const { data: collectibles , state: loadingCollectibleDone , retry: retryFetchCollectible ,  } = (0,useCollectibles/* useCollectibles */.d)(address, chainId);
    const isLoading = loadingCollectibleDone !== useSocket/* SocketState.done */.d.done;
    const renderWithRarible = (0,react.useMemo)(()=>{
        if (isLoading) return [];
        return collectibles.filter((item)=>!item.collection
        );
    }, [
        collectibles === null || collectibles === void 0 ? void 0 : collectibles.length
    ]);
    const renderCollectibles = (0,react.useMemo)(()=>{
        if (selectedCollection === 'all') return collectibles;
        if (!selectedCollection) return collectibles.filter((x)=>!x.collection
        );
        return (collectibles !== null && collectibles !== void 0 ? collectibles : []).filter((x)=>{
            return (0,utils_address/* isSameAddress */.Wr)(selectedCollection.address, x.contractDetailed.address);
        });
    }, [
        selectedCollection,
        collectibles.length
    ]);
    const collections = (0,react.useMemo)(()=>{
        return (0,uniqBy/* default */.Z)(collectibles.map((x)=>x.contractDetailed
        ), (x)=>x.address.toLowerCase()
        ).map((x)=>{
            const item = collectionsFormRemote.find((c)=>(0,utils_address/* isSameAddress */.Wr)(c.address, x.address)
            );
            if (item) {
                return {
                    name: item.name,
                    symbol: item.name,
                    baseURI: item.iconURL,
                    iconURL: item.iconURL,
                    address: item.address
                };
            }
            return x;
        });
    }, [
        collectibles.length,
        collectionsFormRemote.length
    ]);
    if (!isLoading && !collectibles.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        display: "inline-flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AllNetworkButton, {
                                className: classes.networkSelected,
                                onClick: ()=>setSelectedCollection('all')
                                ,
                                children: "ALL"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                align: "center",
                                color: (theme)=>theme.palette.primary.main
                                ,
                                fontSize: "12px",
                                children: t('dashboard_collectible_menu_all', {
                                    count: collectibles.length
                                })
                            })
                        ]
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
                                (0,formatter/* formatEthereumAddress */.j8)(addressName.label, 5),
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flexGrow: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
                                            loadingCollectibleDone && renderCollectibles.length ? `(${renderCollectibles.length})` : null
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
                                                selectedCollection.name,
                                                loadingCollectibleDone && renderCollectibles.length ? `(${renderCollectibles.length})` : null
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList, {
                                    address: address,
                                    retry: retryFetchCollectible,
                                    collectibles: renderCollectibles,
                                    loading: loadingCollectibleDone !== useSocket/* SocketState.done */.d.done && renderCollectibles.length === 0
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            collections.map((x, i)=>{
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
                                        selectedCollection: selectedCollection === 'all' ? undefined : selectedCollection === null || selectedCollection === void 0 ? void 0 : selectedCollection.address,
                                        collection: x,
                                        onClick: ()=>setSelectedCollection(x)
                                    })
                                }, i));
                            }),
                            !!renderWithRarible.length && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
                                    selectedCollection: selectedCollection === 'all' ? undefined : selectedCollection === null || selectedCollection === void 0 ? void 0 : selectedCollection.address,
                                    onClick: ()=>setSelectedCollection(undefined)
                                })
                            }, "other")
                        ]
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 51155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "x7": () => (/* binding */ MaskFilledIcon)
/* harmony export */ });
/* unused harmony exports MaskTextIcon, WalletSharp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30282);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32824);
}

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
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: MaskTextSVG
    }));
}
function MaskIcon(props) {
    const { size =24  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    }));
}
function MaskIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    }));
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
    }));
}
function MaskSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    const { size =20  } = props;
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    }));
}
function MaskFilledIcon(props) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const icon = new URL(/* asset import */ __webpack_require__(33265), __webpack_require__.b).toString();
    const icon_dark = new URL(/* asset import */ __webpack_require__(1164), __webpack_require__.b).toString();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    }));
}


/***/ }),

/***/ 74727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51503);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77031);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19132);




function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 19132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51503);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22572);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ }),

/***/ 16825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ useTokenTransferCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(35204);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(43616);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(52522);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenTransferCallback.ts







function useERC20TokenTransferCallback(address, amount1, recipient1) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount) || !erc20Contract) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        address,
        amount1,
        recipient1,
        erc20Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(41966);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721TokenTransferCallback.ts







function useERC721TokenTransferCallback(address) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc721Contract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (tokenId, recipient, gasConfig)=>{
        if (!account || !recipient || !tokenId || !erc721Contract) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !(0,utils_address/* isSameAddress */.Wr)(ownerOf, account)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        erc721Contract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.5.2/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(83317);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(17869);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useNativeTokenTransferCallback.ts









function useNativeTransferCallback() {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (amount, recipient, gasConfig, memo)=>{
        if (!account || !recipient || !amount || (0,src/* isZero */.Fr)(amount)) {
            setTransferState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!dist.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficient balance
        const balance = await web3.eth.getBalance(account);
        if ((0,src/* isGreaterThan */.T1)(amount, balance)) {
            setTransferState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Insufficient balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? (0,lib.toHex)(memo) : undefined
            }).catch((error)=>{
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value: amount,
            data: memo ? (0,lib.toHex)(memo) : undefined,
            ...gasConfig
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error, hash)=>{
                if (error) {
                    setTransferState({
                        type: types/* TransactionStateType.FAILED */.n$.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTransferState({
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
        chainId
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts





function useTokenTransferCallback(type, address) {
    const r1 = useNativeTransferCallback();
    const r2 = useERC20TokenTransferCallback(address);
    const r3 = useERC721TokenTransferCallback(address);
    const type_ = type;
    switch(type_){
        case types/* EthereumTokenType.Native */.Dr.Native:
            return r1;
        case types/* EthereumTokenType.ERC20 */.Dr.ERC20:
            return r2;
        case types/* EthereumTokenType.ERC721 */.Dr.ERC721:
            return r3;
        case types/* EthereumTokenType.ERC1155 */.Dr.ERC1155:
            throw new Error('To be implemented.');
        default:
            (0,esm/* unreachable */.t1)(type_);
    }
}


/***/ }),

/***/ 33265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 1164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c3a84345cc92a169d393.png";

/***/ })

}]);