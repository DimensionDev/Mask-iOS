"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1092],{

/***/ 78486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32637);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8267);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56118);





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

/***/ 11533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(28527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useImageChecker.ts
var useImageChecker = __webpack_require__(16154);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(9567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(98174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/MoreHoriz.js
var MoreHoriz = __webpack_require__(67592);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(71339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.2.5_78136fa2e471fe4795d123fe9b8f9a75/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(91621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(39419);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(5971);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(52646);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(92498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(74758);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(78486);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(8231);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx
var CollectibleList = __webpack_require__(71824);
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
            backgroundColor: theme.palette.background.default,
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
            width: 172,
            height: 172
        }
    })
);
function CollectibleCard(props) {
    const { wallet , token , provider , readonly , renderOrder  } = props;
    const { classes  } = CollectibleCard_useStyles();
    const imgRef = (0,react.useRef)(null);
    const [imageLinkWithLazy, setImageLinkWithLazy] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((item)=>{
                if (!item.isIntersecting) return;
                setImageLinkWithLazy(token.info.mediaUrl);
                observer.unobserve(item.target);
            });
        }, {
            rootMargin: '0px 0px 1000px 0px',
            threshold: 0.1
        });
        observer.observe(imgRef.current);
        return ()=>{
            observer.unobserve(imgRef.current);
        };
    }, []);
    const theme = (0,useTheme/* default */.Z)();
    const fallbackImageURL = theme.palette.mode === 'dark' ? new URL(/* asset import */ __webpack_require__(17289), __webpack_require__.b) : new URL(/* asset import */ __webpack_require__(88289), __webpack_require__.b);
    const { value: isImageToken , loading  } = (0,useImageChecker/* useImageChecker */.v)(token.info.mediaUrl);
    var _imageURL;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        ref: imgRef,
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
                    token.info.mediaUrl ? loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        component: "img",
                        width: 172,
                        height: 172,
                        loading: true,
                        src: ""
                    }) : isImageToken && imageLinkWithLazy ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        component: "img",
                        width: 172,
                        height: 172,
                        style: {
                            objectFit: 'cover'
                        },
                        src: imageLinkWithLazy,
                        onError: (event)=>{
                            const target = event.currentTarget;
                            target.src = fallbackImageURL.toString();
                            var _loadingFailImage;
                            target.classList.add((_loadingFailImage = classes.loadingFailImage) !== null && _loadingFailImage !== void 0 ? _loadingFailImage : '');
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                        contractAddress: token.contractDetailed.address,
                        chainId: token.contractDetailed.chainId,
                        url: token.info.mediaUrl,
                        renderOrder: renderOrder,
                        tokenId: token.tokenId,
                        fallbackResourceLoader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                            component: "img",
                            width: 172,
                            height: 172,
                            style: {
                                objectFit: 'cover'
                            },
                            src: (_imageURL = token.info.imageURL) !== null && _imageURL !== void 0 ? _imageURL : '',
                            onError: (event)=>{
                                const target = event.currentTarget;
                                target.src = fallbackImageURL.toString();
                                var _loadingFailImage;
                                target.classList.add((_loadingFailImage = classes.loadingFailImage) !== null && _loadingFailImage !== void 0 ? _loadingFailImage : '');
                            }
                        }),
                        classes: {
                            loadingFailImage: classes.loadingFailImage,
                            wrapper: classes.wrapper
                        }
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                        component: "img",
                        width: 172,
                        height: 172,
                        style: {
                            objectFit: 'cover'
                        },
                        src: fallbackImageURL.toString(),
                        className: classes.loadingFailImage
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 71824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ CollectibleContext),
/* harmony export */   "G2": () => (/* binding */ CollectionList)
/* harmony export */ });
/* unused harmony export CollectibleList */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21949);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(25071);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64069);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73841);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(52646);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56118);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40675);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14767);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18274);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76108);
/* harmony import */ var _CollectibleCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11533);
/* harmony import */ var _components_shared_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78486);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39973);











const CollectibleContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
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
            marginTop: theme.spacing(1)
        },
        container: {
            height: 'calc(100% - 52px)',
            overflow: 'auto'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            padding: theme.spacing(1)
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
        }
    })
);
function CollectibleItem(props) {
    const { provider , wallet , token , readonly , renderOrder  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectibleCard__WEBPACK_IMPORTED_MODULE_6__/* .CollectibleCard */ .Z, {
                token: token,
                provider: provider,
                wallet: wallet,
                readonly: readonly,
                renderOrder: renderOrder
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.description,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .useStylesExtends */ .Bc)(useStyles(), props);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.erc721TokensUpdated.on */ .R$.events.erc721TokensUpdated.on(collectiblesRetry)
    );
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectibleContext.Provider, {
        value: {
            collectiblesRetry
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            className: classes.container,
            children: [
                loading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: classes.root,
                    children: Array.from({
                        length: 3
                    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            className: classes.card,
                            display: "flex",
                            flexDirection: "column",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    animation: "wave",
                                    variant: "rectangular",
                                    width: 172,
                                    height: 172
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
                error || collectibles.length === 0 && !loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: classes.text,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            color: "textSecondary",
                            children: t('dashboard_no_collectible_found')
                        }),
                        hasRetry ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            className: classes.button,
                            variant: "text",
                            onClick: ()=>collectiblesRetry()
                            ,
                            children: t('plugin_collectible_retry')
                        }) : null
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: classes.root,
                    children: collectibles.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectibleItem, {
                            renderOrder: i,
                            token: x,
                            provider: provider,
                            wallet: wallet,
                            readonly: readonly
                        }, i)
                    )
                })
            ]
        })
    }));
}
function CollectibleList(props) {
    const { address , collectibles , error , loading , retry  } = props;
    const provider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .useValueRef */ .E)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentNonFungibleAssetDataProviderSettings */ .uR);
    var _classes;
    const classes = (_classes = props.classes) !== null && _classes !== void 0 ? _classes : {};
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectibleListUI, {
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
function CollectionList({ address  }) {
    const chainId = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ChainId.Mainnet */ .a_.Mainnet;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const { data: collections , retry: retryFetchCollection , state: loadingCollectionDone ,  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useCollections */ .b)(address, chainId);
    const { data: collectibles , state: loadingCollectibleDone , retry: retryFetchCollectible ,  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_14__/* .useCollectibles */ .d)(address, chainId, !!collections.length);
    const isLoading = loadingCollectibleDone !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .SocketState.done */ .d.done || loadingCollectionDone !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .SocketState.done */ .d.done;
    const renderWithRarible = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isLoading) return [];
        return collectibles.filter((item)=>!item.collection
        );
    }, [
        collections === null || collections === void 0 ? void 0 : collections.length,
        collectibles === null || collectibles === void 0 ? void 0 : collectibles.length
    ]);
    if (loadingCollectionDone !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .SocketState.done */ .d.done) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            className: classes.root,
            children: Array.from({
                length: 3
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    className: classes.card,
                    display: "flex",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: 172,
                            height: 172
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
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
        }));
    }
    if (!isLoading && !collections.length) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            color: "textPrimary",
            sx: {
                paddingTop: 4,
                paddingBottom: 4
            },
            children: t('dashboard_no_collectible_found')
        })
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        children: [
            (collections !== null && collections !== void 0 ? collections : []).map((x, i)=>{
                const renderCollectibles = collectibles.filter((c)=>{
                    var ref;
                    return (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .isSameAddress */ .Wr)(c.contractDetailed.address, x.address) || ((ref = x.addresses) === null || ref === void 0 ? void 0 : ref.find((r)=>(0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .isSameAddress */ .Wr)(r, c.contractDetailed.address)
                    ));
                });
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                            display: "flex",
                            alignItems: "center",
                            sx: {
                                marginTop: '16px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    className: classes.collectionWrap,
                                    children: x.iconURL ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_Image__WEBPACK_IMPORTED_MODULE_7__/* .Image */ .E, {
                                        component: "img",
                                        className: classes.collectionImg,
                                        src: x.iconURL
                                    }) : null
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: classes.name,
                                    color: "textPrimary",
                                    variant: "body2",
                                    sx: {
                                        fontSize: '16px'
                                    },
                                    children: [
                                        x.name,
                                        loadingCollectibleDone && renderCollectibles.length ? `(${renderCollectibles.length})` : null
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectibleList, {
                            address: address,
                            collection: x.slug,
                            retry: ()=>{
                                retryFetchCollectible();
                                retryFetchCollection();
                            },
                            collectibles: renderCollectibles,
                            loading: loadingCollectibleDone !== _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_15__/* .SocketState.done */ .d.done && renderCollectibles.length === 0
                        })
                    ]
                }, i));
            }),
            !!renderWithRarible.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        display: "flex",
                        alignItems: "center",
                        sx: {
                            marginTop: '16px'
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            className: classes.name,
                            color: "textPrimary",
                            variant: "body2",
                            sx: {
                                fontSize: '16px'
                            },
                            children: [
                                "Rarible (",
                                renderWithRarible.length,
                                ")"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CollectibleList, {
                        address: address,
                        collection: "Rarible",
                        retry: ()=>{
                            retryFetchCollectible();
                            retryFetchCollection();
                        },
                        collectibles: renderWithRarible,
                        loading: false
                    })
                ]
            }, "rarible")
        ]
    }));
}


/***/ }),

/***/ 64069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52646);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73841);




function useCollections(address, chainId) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id,
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
        method: 'mask.fetchNonFungibleCollectibleAsset',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>!chainId || x.contractDetailed.chainId === chainId
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

/***/ 16154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ useImageChecker)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59302);

// filter out nft with image resource
function useImageChecker(url) {
    return (0,react_use__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(async ()=>{
        if (!url) return false;
        const { pathname  } = new URL(url);
        if (/\.(gif|svg|png|webp|jpg|jpeg)$/.test(pathname)) return true;
        if (/\.(mp4|webm|mov|ogg|mp3|wav)$/.test(pathname)) return false;
        const contentType = await getContentType(url);
        return contentType.startsWith('image/');
    }, [
        url
    ]);
}
async function getContentType(url) {
    if (!/^https?:/.test(url)) {
        return '';
    }
    return Promise.race([
        new Promise((resolve)=>setTimeout(()=>resolve('')
            , 20000)
        ),
        new Promise((resolve)=>{
            fetch(url, {
                method: 'HEAD',
                mode: 'cors'
            }).then((response)=>response.status !== 200 ? resolve('') : resolve(response.headers.get('content-type'))
            ).catch(()=>resolve('')
            );
        }), 
    ]);
}


/***/ }),

/***/ 73841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19149);
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
                setState(SocketState.done);
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

/***/ 74758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ useTokenTransferCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(50321);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15516);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(91339);
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
var utils_address = __webpack_require__(52646);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(68699);
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
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(26901);
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

/***/ 88289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/19f2a548c256a9e118a7.png";

/***/ }),

/***/ 17289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d62071d31816d5f7b3f6.png";

/***/ })

}]);