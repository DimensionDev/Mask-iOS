"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4110],{

/***/ 44309:
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

/***/ 53916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CollectibleCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/MoreHoriz.js
var MoreHoriz = __webpack_require__(33370);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(30397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.6.1_de97b6be3b01c831652fad9cf8222fb8/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(20310);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ./src/utils/theme/useClassicMaskFullPageTheme.ts
var useClassicMaskFullPageTheme = __webpack_require__(73882);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(80917);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0/node_modules/react-feather/dist/icons/trash-2.js
var trash_2 = __webpack_require__(16968);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/HideTokenConfirm.tsx












function DashboardWalletHideTokenConfirmDialog(props) {
    const { wallet , token  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    const tokenAddress = token.address ?? token.contractDetailed.address;
    const tokenName = token.name ?? token.info.name;
    const onConfirm = (0,src/* useSnackbarCallback */.iD)(()=>{
        const type = token.type ?? token.contractDetailed.type;
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTokenTransferCallback.ts + 3 modules
var useTokenTransferCallback = __webpack_require__(19136);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(20036);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 1 modules
var CollectibleList = __webpack_require__(16831);
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
    const { setDialog: setTransactionDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardDialogCore, {
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
    });
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx



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
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const [transferDialog, , openTransferDialogOpen] = useModal(DashboardWalletTransferDialogNFT);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* NFTCardStyledAssetPlayer */.yC, {
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
    });
}


/***/ }),

/***/ 16831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ CollectibleContext),
  "G2": () => (/* binding */ CollectionList)
});

// UNUSED EXPORTS: CollectibleList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(90014);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(37037);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(35555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(867);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx + 5 modules
var CollectibleCard = __webpack_require__(53916);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(19841);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(20036);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
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
        title: collection.name,
        arrow: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classnames_default()(classes.collectionWrap, (0,utils_address/* isSameAddress */.Wr)(collection.address, selectedCollection) ? classes.selected : ''),
            onClick: onClick,
            children: collection.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                width: 24,
                height: 24,
                component: "img",
                className: classes.collectionImg,
                src: collection.iconURL
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                classes: {
                    icon: classes.collectionImg
                },
                name: collection.name,
                address: collection.address
            })
        })
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/KeyboardArrowDown.js
var KeyboardArrowDown = __webpack_require__(45379);
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
                    children: token.info.name
                })
            })
        ]
    });
}
function CollectibleListUI(props) {
    const { provider , wallet , collectibles , loading , collectiblesRetry , error , readonly , hasRetry =true  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(CollectibleList_useStyles(), props);
    (0,react.useEffect)(()=>Wallet_src/* WalletMessages.events.erc721TokensUpdated.on */.R$.events.erc721TokensUpdated.on(collectiblesRetry)
    );
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleContext.Provider, {
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
    const provider = (0,src/* useValueRef */.E)(settings/* currentNonFungibleAssetDataProviderSettings */.uR);
    const classes = props.classes ?? {};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleListUI, {
        classes: classes,
        provider: provider,
        collectibles: collectibles,
        loading: loading,
        collectiblesRetry: retry,
        error: error,
        readonly: true,
        hasRetry: !!address
    });
}
function CollectionList({ addressName , onSelectAddress  }) {
    const chainId = types/* ChainId.Mainnet */.a_.Mainnet;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CollectibleList_useStyles();
    const [selectedCollection, setSelectedCollection] = (0,react.useState)('all');
    const { resolvedAddress: address  } = addressName;
    (0,react.useEffect)(()=>{
        setSelectedCollection('all');
    }, [
        address
    ]);
    const { data: collectionsFormRemote  } = (0,useCollectibles/* useCollections */.b)(address, chainId);
    const { data: collectibles , state: loadingCollectibleDone , retry: retryFetchCollectible ,  } = (0,useCollectibles/* useCollectibles */.d)(address, chainId);
    const isLoading = loadingCollectibleDone !== useSocket/* SocketState.done */.d.done;
    const renderWithRarible = (0,react.useMemo)(()=>{
        if (isLoading) return [];
        return collectibles.filter((item)=>!item.collection
        );
    }, [
        collectibles?.length
    ]);
    const renderCollectibles = (0,react.useMemo)(()=>{
        if (selectedCollection === 'all') return collectibles;
        if (!selectedCollection) return collectibles.filter((x)=>!x.collection
        );
        return (collectibles ?? []).filter((x)=>{
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
    if (!isLoading && !collectibles.length) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                                address: addressName.resolvedAddress
                            }),
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
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                                    address: addressName.resolvedAddress
                                }),
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
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
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
                                        onClick: ()=>setSelectedCollection(x)
                                    })
                                }, i);
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
                                    selectedCollection: selectedCollection === 'all' ? undefined : selectedCollection?.address,
                                    onClick: ()=>setSelectedCollection(undefined)
                                })
                            }, "other")
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 73882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useClassicMaskFullPageTheme),
/* harmony export */   "O": () => (/* binding */ usePopupFullPageTheme)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30232);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25689);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33092);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44614);




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


/***/ }),

/***/ 90014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24790);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2239);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37037);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);





function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200,
            chainId
        }
    };
    const collections = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    // TODO Pass chainId to websocket, and filter from data side.
    const filtered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return chainId ? {
            ...collections,
            data: collections.data.filter((x)=>x.chainId === chainId
            )
        } : collections;
    }, [
        collections,
        chainId
    ]);
    return filtered;
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([
        ...data ?? [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 37037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24790);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);




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
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const requestId = `${message.id}_${id}`;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setState(SocketState.init);
        setData([]);
        setError(undefined);
    }, [
        message.id
    ]);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const notifyUpdatedHook = (info)=>{
            if (requestId !== info.id) return;
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId
        });
        // Get data from cache
        setData(socket.getResult(requestId));
        setState(SocketState.sent);
    }, [
        requestId,
        socket,
        loading
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
        data: data ?? [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ }),

/***/ 19136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ useTokenTransferCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(91690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
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
            erc20Contract.methods.transfer(recipient, amount).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
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
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(85010);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721TokenTransferCallback.ts







function useERC721TokenTransferCallback(address) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc721Contract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    const [transferState, setTransferState] = (0,useTransactionState/* useTransactionState */.p)();
    const transferCallback = (0,react.useCallback)(async (tokenId, recipient, gasConfig)=>{
        setTransferState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
        if (!account || !recipient || !tokenId || !erc721Contract) {
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
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
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
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
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
            web3.eth.sendTransaction(config, (error)=>{
                if (!error) return;
                setTransferState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransferState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve(receipt.transactionHash);
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
    (0,react.useEffect)(()=>{
        if (transferState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        resetCallback();
    }, [
        transferState.type
    ]);
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


/***/ })

}]);