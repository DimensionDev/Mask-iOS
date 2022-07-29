"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8876],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:t.rawValues?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 69242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ConnectWalletDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/WarningTriangle.tsx


const WarningTriangleIcon = (0,icons_utils/* createIcon */.I)('WarningTriangleIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.55695 3.59847C9.19845 2.48736 10.8022 2.48736 11.4437 3.59847L17.2456 13.6476C17.8871 14.7587 17.0852 16.1476 15.8022 16.1476H4.19845C2.91545 16.1476 2.11357 14.7587 2.75507 13.6476L8.55695 3.59847Z",
            fill: "#FFB100"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0005 6.33447C10.4147 6.33447 10.7505 6.67026 10.7505 7.08447L10.7505 11.6009C10.7505 12.0152 10.4147 12.3509 10.0005 12.3509C9.58627 12.3509 9.25049 12.0152 9.25049 11.6009L9.25049 7.08447C9.25049 6.67026 9.58627 6.33447 10.0005 6.33447Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.0005 13.2114C10.4147 13.2114 10.7505 13.5472 10.7505 13.9614L10.7505 13.9806C10.7505 14.3948 10.4147 14.7306 10.0005 14.7306C9.58627 14.7306 9.25049 14.3948 9.25049 13.9806L9.25049 13.9614C9.25049 13.5472 9.58627 13.2114 10.0005 13.2114Z",
            fill: "white"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/ConnectionProgress.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        content: {
            padding: theme.spacing('22px', '12px'),
            borderRadius: 8,
            background: props.contentBackground ?? theme.palette.background.default
        },
        tipContent: {
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            marginTop: 10,
            backgroundColor: entry/* MaskColorVar.warningBackground */.ZN.warningBackground,
            padding: '14.5px 14.5px 16px 14.5px',
            borderRadius: 8
        },
        tipContentText: {
            color: entry/* MaskColorVar.warning */.ZN.warning,
            fontSize: 13,
            marginLeft: 8.5
        },
        tipLink: {
            color: entry/* MaskColorVar.warning */.ZN.warning,
            textDecoration: 'underline'
        },
        connectWith: {
            fontSize: '14px',
            color: (0,shared_base_src/* isDashboardPage */.K2)() ? '#07101B' : theme.palette.maskColor?.dark,
            fontWeight: 700
        },
        error: {
            fontSize: 14,
            paddingRight: theme.spacing(1)
        },
        progress: {
            fontSize: 14,
            color: theme.palette.common.black
        },
        warningTriangleIcon: {
            fontSize: 20
        }
    })
);
function ConnectionProgress(props) {
    const { pluginID , providerType , networkType , connection  } = props;
    const { value: connected , loading , error , retry  } = connection;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(pluginID);
    const providerDescriptor = (0,entry_web3/* useProviderDescriptor */.fY)(pluginID, providerType);
    const networkDescriptor = (0,entry_web3/* useNetworkDescriptor */.Vw)(pluginID, providerType);
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles({
        contentBackground: providerDescriptor?.backgroundGradient
    }), props);
    if (!Others) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                    className: `${classes.content} dashboard-style`,
                    elevation: 0,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* WalletIcon */.o, {
                                size: 30,
                                badgeSize: 12,
                                mainIcon: providerDescriptor?.icon,
                                badgeIcon: networkDescriptor?.icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                flex: 1,
                                flexDirection: "column",
                                sx: {
                                    marginLeft: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        className: classes.connectWith,
                                        children: [
                                            loading ? t('plugin_wallet_connect_with') : t(connected ? 'plugin_wallet_connected_with' : 'plugin_wallet_connect_with'),
                                            ' ',
                                            Others.providerResolver.providerName(providerType)
                                        ]
                                    }),
                                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                                className: classes.progress,
                                                size: 14,
                                                sx: {
                                                    marginRight: 1
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                className: classes.progress,
                                                children: t('initializing')
                                            })
                                        ]
                                    }) : null,
                                    !loading && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.error,
                                        color: "red",
                                        variant: "body2",
                                        children: error.message?.includes('Already processing eth_requestAccounts') || error.message?.includes("Request of type 'wallet_requestPermissions' already pending for origin") ? t('plugin_wallet_metamask_error_already_request') : error.message ?? 'Something went wrong.'
                                    }) : null
                                ]
                            }),
                            !connected && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                color: "primary",
                                variant: "contained",
                                onClick: retry,
                                disabled: loading,
                                children: t('plugin_wallet_connect_with_retry')
                            }) : null
                        ]
                    })
                })
            }),
            providerDescriptor?.type === types/* ProviderType.WalletConnect */.lP.WalletConnect ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.tipContent,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WarningTriangleIcon, {
                        className: classes.warningTriangleIcon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tipContentText,
                        variant: "body2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_wallet_connect_tip",
                            components: {
                                providerLink: Others.providerResolver.providerHomeLink(providerType) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    className: classes.tipLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: Others.providerResolver.providerHomeLink(providerType)
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                            },
                            values: {
                                providerName: Others.providerResolver.providerName(providerType),
                                providerShortenLink: Others.providerResolver.providerShortenLink(providerType)
                            }
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/index.tsx













const ConnectWalletDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2.5)
        }
    })
);
function ConnectWalletDialog() {
    const { classes  } = ConnectWalletDialog_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [pluginID, setPluginID] = (0,react.useState)();
    const [providerType, setProviderType] = (0,react.useState)();
    const [networkType, setNetworkType] = (0,react.useState)();
    const [walletConnectedCallback, setWalletConnectedCallback] = (0,react.useState)();
    // #region remote controlled dialog
    const { open , setDialog: setConnectWalletDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setPluginID(ev.network.networkSupporterPluginID);
        setNetworkType(ev.network.type);
        setProviderType(ev.provider.type);
        setWalletConnectedCallback(()=>ev.walletConnectedCallback
        );
    });
    // #endregion
    const { Connection , Others  } = (0,entry_web3/* useWeb3State */.dM)(pluginID);
    const connection1 = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!open) return true;
        if (!networkType || !providerType || !Others || !Connection) throw new Error('Failed to connect to provider.');
        const chainId = Others?.networkResolver.networkChainId(networkType);
        if (!chainId) throw new Error('Failed to connect to provider.');
        const connection = await Connection.getConnection?.({
            chainId,
            providerType
        });
        if (!connection) throw new Error('Failed to build connection.');
        await connection.connect();
        const site = (0,shared_base_src/* getSiteType */.sv)();
        if (pluginID && site) {
            settings/* pluginIDSettings.value */.tR.value = {
                ...settings/* pluginIDSettings.value */.tR.value,
                [site]: pluginID
            };
        }
        setConnectWalletDialog({
            open: false
        });
        walletConnectedCallback?.();
        return true;
    }, [
        open,
        walletConnectedCallback
    ]);
    if (!pluginID || !providerType || !networkType) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        title: t('plugin_wallet_dialog_title'),
        open: open,
        onClose: ()=>setConnectWalletDialog({
                open: false
            })
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectionProgress, {
                pluginID: pluginID,
                providerType: providerType,
                networkType: networkType,
                connection: connection1
            })
        })
    });
}


/***/ }),

/***/ 76018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ GasSettingDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var src = __webpack_require__(10503);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/useGasSettingStyles.ts

const useGasSettingStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        options: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 10,
            cursor: 'pointer',
            width: '100%',
            overflowX: 'scroll',
            '& > *': {
                backgroundColor: theme.palette.mode === 'dark' ? '#212442' : '#f7f9fa',
                borderRadius: 8,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }
        },
        optionsTitle: {
            color: '#7B8192',
            fontSize: 16,
            lineHeight: '22px'
        },
        gasPrice: {
            fontSize: 12,
            lineHeight: '16px'
        },
        gasUSD: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '14px',
            wordBreak: 'break-all'
        },
        or: {
            display: 'flex',
            justifyContent: 'center'
        },
        label: {
            color: theme.palette.primary.main,
            fontSize: 12,
            lineHeight: '16px',
            margin: '10px 0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        selected: {
            backgroundColor: theme.palette.primary.main,
            '& > *': {
                color: theme.palette.primary.contrastText
            }
        },
        button: {
            marginTop: 10,
            padding: '9px 10px',
            borderRadius: 20
        },
        unit: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            marginLeft: '0.5em'
        },
        price: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#15181B'
        }
    })
);

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSetting1559.tsx











// import { StyledInput } from '../../../../extension/popups/components/StyledInput'




const HIGH_FEE_WARNING_MULTIPLIER = 1.5;
const GasSetting1559 = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOptionType =base_src/* GasOptionType.NORMAL */.Qd.NORMAL , onConfirm =noop/* default */.Z  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useGasSettingStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(chainId);
    const [selectedGasOption, setGasOptionType] = (0,react.useState)(gasOptionType);
    const { value: nativeTokenPrice = 0  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, NATIVE_TOKEN_ADDRESS, {
        chainId
    });
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,entry_web3/* useGasOptions */.oj)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region Gas options
    const options = (0,react.useMemo)(()=>[
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: base_src/* GasOptionType.SLOW */.Qd.SLOW,
                content: gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW]
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: base_src/* GasOptionType.NORMAL */.Qd.NORMAL,
                content: gasOptions?.[base_src/* GasOptionType.NORMAL */.Qd.NORMAL]
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: base_src/* GasOptionType.FAST */.Qd.FAST,
                content: gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]
            }, 
        ]
    , [
        gasOptions
    ]);
    // #endregion
    const currentGasOption = options.find((opt)=>opt.gasOption === selectedGasOption
    );
    // #region Form field define schema
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>(0,base_src/* isGreaterThanOrEqualTo */.KH)(gasLimit, minGasLimit)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            maxPriorityFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_priority_fee_absence')).refine(base_src/* isPositive */.xP, t('wallet_transfer_error_max_priority_gas_fee_positive')),
            maxFeePerGas: lib.z.string().min(1, t('wallet_transfer_error_max_fee_absence'))
        }).refine((data)=>(0,base_src/* isLessThanOrEqualTo */.PW)(data.maxPriorityFeePerGas, data.maxFeePerGas)
        , {
            message: t('wallet_transfer_error_max_priority_gas_fee_imbalance'),
            path: [
                'maxFeePerGas'
            ]
        });
    }, [
        minGasLimit,
        gasOptions
    ]);
    // #endregion
    const { control , handleSubmit , setValue , clearErrors , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new (bignumber_default())(gasLimit1 ?? 0).toString(),
            maxPriorityFeePerGas: '',
            maxFeePerGas: '0'
        },
        context: {
            minGasLimit,
            gasOptions
        }
    });
    // #region Set gas on tx to form data
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit1) setValue('gasLimit', new (bignumber_default())(gasLimit1).toString());
    }, [
        gasLimit1,
        setValue
    ]);
    // #endregion
    // #region If the selected changed, set the value on the option to the form data
    (0,react.useEffect)(()=>{
        if (selectedGasOption === null) return;
        clearErrors([
            'maxPriorityFeePerGas',
            'maxFeePerGas'
        ]);
        setValue('maxPriorityFeePerGas', new (bignumber_default())(currentGasOption?.content?.suggestedMaxPriorityFeePerGas ?? 0).toString() ?? '');
        setValue('maxFeePerGas', new (bignumber_default())(currentGasOption?.content?.suggestedMaxFeePerGas ?? 0).toString() ?? '');
    }, [
        currentGasOption,
        setValue,
        options
    ]);
    // #endregion
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm?.({
            gasLimit: data.gasLimit,
            maxFee: (0,formatter/* formatGweiToWei */.nU)(data.maxFeePerGas).toFixed(0),
            priorityFee: (0,formatter/* formatGweiToWei */.nU)(data.maxPriorityFeePerGas).toFixed(0),
            gasOption: selectedGasOption
        });
    }, [
        onConfirm,
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    const [maxPriorityFeePerGas, maxFeePerGas, inputGasLimit] = watch([
        'maxPriorityFeePerGas',
        'maxFeePerGas',
        'gasLimit', 
    ]);
    // #region These are additional form rules that need to be prompted for but do not affect the validation of the form
    const maxPriorFeeHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxPriorityFeePerGas, gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW]?.suggestedMaxPriorityFeePerGas ?? 0)) return t('wallet_transfer_error_max_priority_gas_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxPriorityFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]?.suggestedMaxPriorityFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_priority_gas_fee_too_high');
        return undefined;
    }, [
        maxPriorityFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    const maxFeeGasHelperText = (0,react.useMemo)(()=>{
        if (getGasOptionsLoading) return undefined;
        if ((0,base_src/* isLessThan */.FI)(maxFeePerGas, gasOptions?.[base_src/* GasOptionType.SLOW */.Qd.SLOW].estimatedBaseFee ?? 0)) return t('wallet_transfer_error_max_fee_too_low');
        if ((0,base_src/* isGreaterThan */.T1)(maxFeePerGas, (0,base_src/* multipliedBy */.$q)(gasOptions?.[base_src/* GasOptionType.FAST */.Qd.FAST]?.suggestedMaxFeePerGas ?? 0, HIGH_FEE_WARNING_MULTIPLIER))) return t('wallet_transfer_error_max_fee_too_high');
        return undefined;
    }, [
        maxFeePerGas,
        gasOptions,
        getGasOptionsLoading
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , content , gasOption  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOptionType(gasOption)
                        ,
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                component: "div",
                                children: [
                                    (0,base_src/* toFixed */.FH)(content?.suggestedMaxFeePerGas, 2),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "inherit",
                                        children: "Gwei"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(content?.suggestedMaxFeePerGas ?? 0).times(nativeTokenPrice).times(21000).toPrecision(3)
                                })
                            })
                        ]
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
                        // return (
                        //     <StyledInput
                        //         {...field}
                        //         onChange={(e) => {
                        //             setGasOptionType(null)
                        //             field.onChange(e)
                        //         }}
                        //         error={!!errors.gasLimit?.message}
                        //         helperText={errors.gasLimit?.message}
                        //         inputProps={{
                        //             pattern: '^[0-9]*[.,]?[0-9]*$',
                        //         }}
                        //     />
                        // )
                        },
                        name: "gasLimit"
                    }),
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
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxPriorityFeePerGas) ?? 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
                        // return (
                        //     <StyledInput
                        //         {...field}
                        //         onChange={(e) => {
                        //             setGasOptionType(null)
                        //             field.onChange(e)
                        //         }}
                        //         error={!!errors.maxPriorityFeePerGas?.message || !!maxPriorFeeHelperText}
                        //         helperText={errors.maxPriorityFeePerGas?.message || maxPriorFeeHelperText}
                        //         inputProps={{
                        //             pattern: '^[0-9]*[.,]?[0-9]*$',
                        //         }}
                        //     />
                        // )
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
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                className: classes.price,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatGweiToEther */.Hh)(Number(maxFeePerGas) ?? 0).times(nativeTokenPrice).times(inputGasLimit || 1).toPrecision(3)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
                        // return (
                        //     <StyledInput
                        //         {...field}
                        //         onChange={(e) => {
                        //             setGasOptionType(null)
                        //             field.onChange(e)
                        //         }}
                        //         error={!!errors.maxFeePerGas?.message || !!maxFeeGasHelperText}
                        //         helperText={errors.maxFeePerGas?.message || maxFeeGasHelperText}
                        //         inputProps={{
                        //             pattern: '^[0-9]*[.,]?[0-9]*$',
                        //         }}
                        //     />
                        // )
                        },
                        name: "maxFeePerGas"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: getGasOptionsLoading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var web3_utils_lib = __webpack_require__(11627);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/Prior1559GasSetting.tsx












// import { StyledInput } from '../../../../extension/popups/components/StyledInput'




const minGasPriceOfChain = {
    [types/* ChainId.BSC */.a_.BSC]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Conflux */.a_.Conflux]: (0,base_src/* pow10 */.wA)(9).multipliedBy(5),
    [types/* ChainId.Matic */.a_.Matic]: (0,base_src/* pow10 */.wA)(9).multipliedBy(30)
};
const Prior1559GasSetting = /*#__PURE__*/ (0,react.memo)(({ gasLimit: gasLimit1 , minGasLimit =0 , gasOptionType =base_src/* GasOptionType.NORMAL */.Qd.NORMAL , onConfirm =noop/* default */.Z  })=>{
    const { classes  } = useGasSettingStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [selectedGasOption, setGasOptionType] = (0,react.useState)(gasOptionType);
    const { value: nativeTokenPrice = 0  } = (0,entry_web3/* useNativeTokenPrice */.lb)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: gasOptions , loading: getGasOptionsLoading  } = (0,entry_web3/* useGasOptions */.oj)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const options = (0,react.useMemo)(()=>gasOptions ? [
            {
                title: t('popups_wallet_gas_fee_settings_low'),
                gasOption: base_src/* GasOptionType.SLOW */.Qd.SLOW,
                gasPrice: gasOptions[base_src/* GasOptionType.SLOW */.Qd.SLOW].suggestedMaxFeePerGas ?? '0'
            },
            {
                title: t('popups_wallet_gas_fee_settings_medium'),
                gasOption: base_src/* GasOptionType.NORMAL */.Qd.NORMAL,
                gasPrice: gasOptions[base_src/* GasOptionType.NORMAL */.Qd.NORMAL].suggestedMaxFeePerGas ?? '0'
            },
            {
                title: t('popups_wallet_gas_fee_settings_high'),
                gasOption: base_src/* GasOptionType.FAST */.Qd.FAST,
                gasPrice: gasOptions[base_src/* GasOptionType.FAST */.Qd.FAST].suggestedMaxFeePerGas ?? 0
            }, 
        ] : null
    , [
        gasOptions
    ]);
    const currentGasOption = options ? options.find((opt)=>opt.gasOption === selectedGasOption
    ) : null;
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            gasLimit: lib.z.string().min(1, t('wallet_transfer_error_gas_limit_absence')).refine((gasLimit)=>new (bignumber_default())(gasLimit).gte(minGasLimit)
            , t('popups_wallet_gas_fee_settings_min_gas_limit_tips', {
                limit: minGasLimit
            })),
            gasPrice: lib.z.string().min(1, t('wallet_transfer_error_gas_price_absence'))
        });
    }, [
        minGasLimit
    ]);
    const { control , handleSubmit , setValue , watch , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            gasLimit: new (bignumber_default())(gasLimit1 ?? 0).toString(),
            gasPrice: ''
        },
        context: {
            minGasLimit
        }
    });
    const [inputGasLimit] = watch([
        'gasLimit'
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        if (gasLimit1) setValue('gasLimit', new (bignumber_default())(gasLimit1).toString());
    }, [
        gasLimit1,
        setValue
    ]);
    (0,react.useEffect)(()=>{
        const minGasPrice = minGasPriceOfChain[chainId];
        if (currentGasOption || minGasPrice) {
            setValue('gasPrice', (0,formatter/* formatWeiToGwei */.f1)((currentGasOption?.gasPrice ?? minGasPrice) ?? 0).toString());
        }
    }, [
        currentGasOption,
        setValue,
        chainId
    ]);
    const handleConfirm = (0,react.useCallback)((data)=>{
        onConfirm({
            gasLimit: data.gasLimit,
            gasPrice: (0,web3_utils_lib.toWei)(data.gasPrice, 'gwei'),
            gasOption: selectedGasOption
        });
    }, [
        selectedGasOption
    ]);
    const onSubmit = handleSubmit(handleConfirm);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            options ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.options,
                children: options.map(({ title , gasPrice , gasOption  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        onClick: ()=>setGasOptionType(gasOption)
                        ,
                        className: selectedGasOption === gasOption ? classes.selected : undefined,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.optionsTitle,
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    (0,formatter/* formatWeiToGwei */.f1)(gasPrice ?? 0).toString(),
                                    " Gwei"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.gasUSD,
                                children: t('popups_wallet_gas_fee_settings_usd', {
                                    usd: (0,formatter/* formatWeiToEther */.yp)(gasPrice).times(nativeTokenPrice).times(inputGasLimit || '1').toPrecision(3)
                                })
                            })
                        ]
                    }, gasOption)
                )
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                onSubmit: onSubmit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_fee_settings_gas_limit')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
                        // return (
                        //     <StyledInput
                        //         {...field}
                        //         onChange={(e) => {
                        //             setGasOptionType(null)
                        //             field.onChange(e)
                        //         }}
                        //         error={!!errors.gasLimit?.message}
                        //         helperText={errors.gasLimit?.message}
                        //         inputProps={{
                        //             pattern: '^[0-9]*[.,]?[0-9]*$',
                        //         }}
                        //     />
                        // )
                        },
                        name: "gasLimit"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.label,
                        children: t('popups_wallet_gas_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
                        // return (
                        //     <StyledInput
                        //         {...field}
                        //         onChange={(e) => {
                        //             setGasOptionType(null)
                        //             field.onChange(e)
                        //         }}
                        //         error={!!errors.gasPrice?.message}
                        //         helperText={errors.gasPrice?.message}
                        //         inputProps={{
                        //             pattern: '^[0-9]*[.,]?[0-9]*$',
                        //         }}
                        //     />
                        // )
                        },
                        name: "gasPrice"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: getGasOptionsLoading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: !(0,isEmpty/* default */.Z)(errors),
                onClick: onSubmit,
                children: t('confirm')
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSetting.tsx






const GasSetting = (props)=>{
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const is1559Supported = resolver/* chainResolver.isSupport */.VU.isSupport(chainId, 'EIP1559');
    return is1559Supported ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting1559, {
        ...props
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Prior1559GasSetting, {
        ...props
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/index.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            color: theme.palette.text.primary
        }
    })
);
const GasSettingDialog = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const [gasOptionType, setGasOptionType] = (0,react.useState)(base_src/* GasOptionType.NORMAL */.Qd.NORMAL);
    const [gasLimit1, setGasLimit] = (0,react.useState)(0);
    const [minGasLimit, setMinGasLimit] = (0,react.useState)(0);
    const { open , closeDialog , setDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(src/* WalletMessages.events.gasSettingDialogUpdated */.R$.events.gasSettingDialogUpdated, (evt)=>{
        if (!evt.open) return;
        if (evt.gasOption) setGasOptionType(evt.gasOption);
        if (evt.gasLimit) setGasLimit(evt.gasLimit);
        if (evt.minGasLimit !== undefined) setMinGasLimit(evt.minGasLimit);
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('popups_wallet_gas_fee_settings'),
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {
                gasLimit: gasLimit1,
                minGasLimit: minGasLimit,
                onGasLimitChange: setGasLimit,
                gasOptionType: gasOptionType,
                onGasOptionChange: setGasOptionType,
                onConfirm: ({ gasPrice , gasLimit , maxFee , priorityFee , gasOption  })=>{
                    setDialog({
                        open: false,
                        gasOption,
                        gasPrice,
                        gasLimit,
                        priorityFee,
                        maxFee
                    });
                }
            })
        })
    });
};


/***/ }),

/***/ 1321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ WalletRiskWarningDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(62266);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77818);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21948);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85792);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50719);
/* harmony import */ var _mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9785);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72288);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()((theme)=>({
        paper: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .getMaskColor */ .nb)(theme).redMain
        },
        buttons: {
            padding: theme.spacing(3)
        },
        button: {
            borderRadius: 9999,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                marginBottom: theme.spacing(2)
            }
        },
        cancel: {
            backgroundColor: theme.palette.background.default,
            border: 'none'
        },
        title: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        avatar: {
            width: 64,
            height: 64,
            backgroundColor: 'rgba(255, 95, 95, 0.2)'
        },
        wallet: {
            backgroundColor: theme.palette.background.default,
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            borderRadius: theme.spacing(1)
        },
        texts: {
            paddingBottom: theme.spacing(1)
        }
    })
);
function WalletRiskWarningDialog() {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useCustomSnackbar */ .Ii)();
    const isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useMatchXS */ .IN)();
    const [account, setAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [pluginID, setPluginID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { RiskWarning , Others  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3State */ .dM)(pluginID);
    const { open , setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setAccount(ev.account);
        setPluginID(ev.pluginID);
    });
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        setRiskWarningDialog({
            open: false
        });
    }, [
        setRiskWarningDialog
    ]);
    const onConfirm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!account) {
            showSnackbar(t('wallet_risk_warning_no_select_wallet'), {
                variant: 'error',
                preventDuplicate: true
            });
            return;
        }
        await RiskWarning?.approve?.(account);
        setRiskWarningDialog({
            open: false
        });
    }, [
        showSnackbar,
        account,
        setRiskWarningDialog
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .InjectedDialog */ .Fl, {
        title: isMobile ? undefined : t('wallet_risk_warning_dialog_title'),
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: classes.paper,
                    elevation: 0,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.icon,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                className: classes.avatar,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_PriorityHigh__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    style: {
                                        fontSize: 58,
                                        color: 'rgba(255, 95, 95, 1)'
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            className: classes.title,
                            align: "center",
                            variant: "h4",
                            children: t('wallet_risk_warning_dialog_title')
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            variant: "body2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_15__/* .Trans */ .c, {
                                i18nKey: "multiline",
                                children: t('wallet_risk_warning_content')
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            elevation: 0,
                            className: `${classes.wallet} dashboard-style`,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    color: "textSecondary",
                                    className: classes.texts,
                                    children: t('nft_wallet_label')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    variant: "body1",
                                    color: "textPrimary",
                                    className: classes.texts,
                                    children: isMobile ? Others?.formatAddress(account, 5) : account
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.cancel, 'dashboard-style'),
                        fullWidth: true,
                        variant: "outlined",
                        onClick: onClose,
                        size: "large",
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_9__/* .ActionButtonPromise */ .Zc, {
                        className: classes.button,
                        variant: "contained",
                        fullWidth: true,
                        disabled: !account,
                        size: "large",
                        init: t('confirm'),
                        waiting: t('wallet_risk_confirm_confirming'),
                        failed: t('wallet_risk_confirm_failed'),
                        executor: onConfirm,
                        completeIcon: null,
                        failIcon: null,
                        failedOnClick: "use executor",
                        complete: t('done')
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 69038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* binding */ SelectNftContractDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7_webpack-cli@4.10.0/node_modules/opensea-js/lib/types.js
var lib_types = __webpack_require__(24860);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(62361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.6.2/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(36005);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(68488);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(52125);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/InputBox.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,entry/* getMaskColor */.nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box'
        },
        search: {
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function InputBox(props) {
    const { label , children , onChange , value  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const [visible, setVisible] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setVisible((v)=>!(!value || value.length === 0)
        );
    }, [
        value
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: children
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        className: classes.input,
                        placeholder: label,
                        value: value,
                        onChange: (e)=>{
                            setVisible(e.target.value.length !== 0);
                            onChange?.(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx



function SearchInput(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {}),
        ...props
    });
}

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectNftContractDialog.tsx
















const SelectNftContractDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        search: {
            width: '95%',
            margin: theme.spacing(1, 0, 2, 0.8)
        },
        list: {
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            textAlign: 'center',
            height: 288,
            paddingTop: theme.spacing(14),
            boxSizing: 'border-box'
        },
        searchBox: {
            height: 400,
            width: '100%'
        },
        listItem: {
            cursor: 'pointer',
            display: 'flex',
            width: '100%',
            height: 63,
            borderRadius: 12,
            '&:hover': {
                background: theme.palette.mode === 'light' ? '#F7F9FA' : '#17191D'
            },
            position: 'relative'
        },
        icon: {
            borderRadius: 1000,
            width: 36,
            height: 36,
            marginRight: 8
        },
        openIcon: {
            display: 'flex',
            color: theme.palette.mode === 'light' ? 'rgba(123, 129, 146, 1)' : 'rgba(111, 118, 124, 1)',
            width: 16,
            height: 16,
            marginLeft: 2
        },
        address: {
            color: theme.palette.mode === 'light' ? 'rgba(123, 129, 146, 1)' : 'rgba(111, 118, 124, 1)',
            display: 'flex',
            textDecoration: 'none',
            alignItems: 'center',
            position: 'absolute',
            left: 59,
            bottom: 10,
            cursor: 'pointer',
            fontSize: 12,
            '&:hover': {
                textDecoration: 'none'
            }
        },
        addressText: {
            fontSize: 12
        },
        addressNoImage: {
            left: '16px !important'
        },
        dialogContent: {
            height: 560
        },
        noResultBox: {
            background: theme.palette.background.default,
            height: 431,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16
        },
        contractName: {
            marginBottom: 20,
            paddingRight: 30,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        balance: {
            position: 'absolute',
            right: 25
        }
    })
);
function SelectNftContractDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SelectNftContractDialog_useStyles();
    const [id, setId] = (0,react.useState)('');
    const [keyword1, setKeyword] = (0,react.useState)('');
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region remote controlled dialog
    const { open , setDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectNftContractDialogUpdated */.R.events.selectNftContractDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setId(ev.uuid);
    });
    const onSubmit = (0,react.useCallback)((balance, contract)=>{
        setKeyword('');
        setDialog({
            open: false,
            uuid: id,
            balance,
            contract
        });
    }, [
        id,
        setDialog,
        setKeyword
    ]);
    const onClose = (0,react.useCallback)(()=>{
        setKeyword('');
        setDialog({
            open: false,
            uuid: id
        });
    }, [
        id,
        setDialog
    ]);
    // #endregion
    const { value: assets = [] , loading  } = (0,entry_web3/* useNonFungibleCollections */.es)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const contractList = assets.filter((x)=>x.schema_name === lib_types.WyvernSchemaName.ERC721
    ).map((x)=>({
            address: x.address,
            chainId,
            schema: types/* SchemaType.ERC721 */.XQ.ERC721,
            name: x.name,
            symbol: x.symbol,
            baseURI: x.iconURL,
            iconURL: x.iconURL,
            balance: x.balance
        })
    );
    // #region fuse
    const fuse = (0,react.useMemo)(()=>new fuse_esm/* default */.Z(contractList, {
            shouldSort: true,
            threshold: 0.45,
            minMatchCharLength: 3,
            keys: [
                {
                    name: 'name',
                    weight: 0.5
                },
                {
                    name: 'symbol',
                    weight: 0.8
                },
                {
                    name: 'address',
                    weight: 1
                }, 
            ]
        })
    , [
        contractList
    ]);
    const searchedTokenList = fuse.search(keyword1).map((x)=>x.item
    );
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_select_a_nft_contract'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.search,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchInput, {
                        label: t('add_nft_contract_search_hint'),
                        onChange: (keyword)=>{
                            setKeyword(keyword);
                        }
                    })
                }),
                loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    sx: {
                        paddingTop: 4,
                        paddingBottom: 4
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 24
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox, {
                    keyword: keyword1,
                    contractList: contractList,
                    searchedTokenList: searchedTokenList,
                    onSubmit: onSubmit
                })
            ]
        })
    });
}
function SearchResultBox(props) {
    const { keyword , searchedTokenList , onSubmit , contractList  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SelectNftContractDialog_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const isValid = dist.EthereumAddress.isValid(keyword);
    const { value: contractDetailed = null , loading  } = (0,entry_web3/* useNonFungibleTokenContract */.LN)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, keyword, undefined, {
        account
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.searchBox,
        children: keyword !== '' && searchedTokenList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            children: !isValid || loading || !contractDetailed || contractDetailed.name === '' && contractDetailed.symbol === '' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.noResultBox,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: loading ? t('wallet_loading_nft_contract') : t('wallet_search_contract_no_result')
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractListItem, {
                    onSubmit: onSubmit,
                    contract: contractDetailed
                }, "0")
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: (keyword === '' ? contractList : searchedTokenList).map((contract, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractListItem, {
                        onSubmit: onSubmit,
                        contract: contract
                    })
                }, i)
            )
        })
    });
}
function ContractListItem(props) {
    const { onSubmit , contract  } = props;
    const { classes  } = SelectNftContractDialog_useStyles();
    const { value: balance = '0'  } = (0,entry_web3/* useNonFungibleTokenBalance */.N2)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, contract.address, {
        chainId: contract.chainId
    });
    return balance === '0' ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: {
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.listItem,
                onClick: ()=>onSubmit(balance, contract)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        className: classes.icon,
                        src: contract.iconURL
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.contractName,
                        children: [
                            contract.name,
                            ' ',
                            contract.symbol && contract.symbol !== 'UNKNOWN' ? '(' + contract.symbol + ')' : ''
                        ]
                    }),
                    balance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        children: balance
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.address,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        onClick: ()=>onSubmit(balance, contract)
                        ,
                        className: classes.addressText,
                        children: contract.address
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: resolver/* explorerResolver.addressLink */.Nb.addressLink(contract.chainId, contract.address),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                            className: classes.openIcon,
                            fontSize: "small"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 40881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ SelectProviderDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(76536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Selected.tsx


const SelectedIcon = (0,utils/* createPaletteAwareIcon */.t)('SelectedIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z",
            fill: "rgb(245, 245, 245)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
            fill: "#3DC233"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z",
            fill: "#fff"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z",
            fill: "rgb(16, 16, 16)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334Z",
            fill: "#3DC233"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.115 5.507c.272.247.293.67.045.941l-3.333 3.667a.667.667 0 0 1-.928.058l-2.333-2a.667.667 0 1 1 .868-1.012l1.842 1.578 2.897-3.187a.667.667 0 0 1 .942-.045Z",
            fill: "#fff"
        })
    ]
}), undefined, '0 0 16 16');

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(62633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/ProviderIcon.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(1),
            '&:hover': {
                background: theme.palette.background.default,
                '& p': {
                    fontWeight: 700,
                    color: theme.palette.text.primary
                }
            }
        },
        icon: {
            width: 36,
            height: 36,
            marginBottom: 4
        },
        name: {
            fontSize: 12,
            fontWeight: 700,
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1)
        },
        description: {
            color: theme.palette.text.secondary
        }
    })
);
function ProviderIcon({ icon , name , onClick , iconFilterColor , className , ButtonBaseProps  }) {
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classnames_default()(classes.root, className),
        elevation: 0,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBase/* default */.Z, {
            className: `${classes.content} dashboard-style`,
            ...ButtonBaseProps,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: icon.toString(),
                    className: classes.icon,
                    style: iconFilterColor ? {
                        filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
                        backdropFilter: 'blur(16px)'
                    } : {}
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    children: name
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/PluginProviderRender.tsx











const PluginProviderRender_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(2),
            counterReset: 'steps 0'
        },
        section: {
            flexGrow: 1,
            marginTop: 21,
            counterIncrement: 'steps 1',
            '&:first-child': {
                marginTop: 0
            }
        },
        title: {
            fontSize: 14,
            fontWeight: 'bold',
            '&:before': {
                content: 'counter(steps) ". "'
            }
        },
        list: {
            marginTop: 12,
            display: 'flex',
            gridGap: '16px 10.5px',
            flexWrap: 'wrap'
        },
        networkItem: {
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            alignItems: 'center',
            width: 72,
            padding: '12px 0px',
            borderRadius: 12,
            '&:hover': {
                background: theme.palette.background.default,
                '& p': {
                    fontWeight: 700
                }
            }
        },
        iconWrapper: {
            position: 'relative',
            cursor: 'pointer',
            width: 30,
            height: 30,
            borderRadius: '50%',
            backgroundColor: 'transparent'
        },
        checkedBadge: {
            position: 'absolute',
            right: '-5px',
            bottom: 0,
            width: 12,
            height: 12,
            background: theme.palette.background.paper,
            borderRadius: '50%'
        },
        alert: {
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(1)
        },
        wallets: {
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            maxHeight: 180,
            gridGap: '12px 12px',
            margin: theme.spacing(2, 0, 0),
            [smallQuery]: {
                gridAutoRows: '110px',
                gridTemplateColumns: 'repeat(2, 1fr)'
            }
        },
        walletItem: {
            padding: 0,
            height: 88,
            width: '100%',
            display: 'block',
            '& > div': {
                borderRadius: 8
            }
        },
        providerIcon: {
            height: '100%',
            fontSize: 36,
            display: 'flex'
        },
        networkName: {
            fontSize: 12,
            marginTop: 12,
            whiteSpace: 'nowrap',
            color: theme.palette.text.secondary
        },
        selected: {
            color: theme.palette.text.primary,
            fontWeight: 700
        }
    };
});
function PluginProviderRender({ networks , providers , undeterminedPluginID , undeterminedNetworkID , NetworkIconClickBait , ProviderIconClickBait , onNetworkIconClicked , onProviderIconClicked  }) {
    const { classes  } = PluginProviderRender_useStyles();
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const selectedNetwork = (0,react.useMemo)(()=>{
        return networks.find((x)=>x.ID === undeterminedNetworkID
        ) ?? (0,head/* default */.Z)(networks);
    }, [
        undeterminedNetworkID,
        networks.map((x)=>x.ID
        ).join()
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h2",
                            component: "h2",
                            children: t('plugin_wallet_choose_network')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.list,
                            children: networks?.filter((x)=>x.isMainnet
                            ).map((network, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkItem, {
                                    onNetworkIconClicked: onNetworkIconClicked,
                                    NetworkIconClickBait: NetworkIconClickBait,
                                    network: network,
                                    selected: undeterminedNetworkID === network.ID
                                }, i)
                            )
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                    className: classes.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h2",
                            component: "h2",
                            children: t('plugin_wallet_choose_wallet')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                            className: classes.wallets,
                            children: providers.filter((x)=>x.providerAdaptorPluginID === undeterminedPluginID
                            ).filter((y)=>y.enableRequirements?.supportedChainIds?.includes(selectedNetwork.chainId)
                            ).filter((z)=>{
                                const siteType = (0,shared_base_src/* getSiteType */.sv)();
                                if (!siteType) return false;
                                return [
                                    ...z.enableRequirements?.supportedEnhanceableSites ?? [],
                                    ...z.enableRequirements?.supportedExtensionSites ?? [], 
                                ].includes(siteType);
                            }).map((provider)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    className: classes.walletItem,
                                    onClick: ()=>{
                                        onProviderIconClicked(selectedNetwork, provider);
                                    },
                                    children: ProviderIconClickBait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIconClickBait, {
                                        network: selectedNetwork,
                                        provider: provider,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                            className: classes.providerIcon,
                                            icon: provider.icon,
                                            name: provider.name,
                                            iconFilterColor: provider.iconFilterColor
                                        })
                                    }, provider.ID) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderIcon, {
                                        className: classes.providerIcon,
                                        icon: provider.icon,
                                        name: provider.name,
                                        iconFilterColor: provider.iconFilterColor
                                    })
                                }, provider.ID)
                            )
                        })
                    ]
                })
            ]
        })
    });
}
function NetworkItem({ onNetworkIconClicked , NetworkIconClickBait , network , selected  }) {
    const { classes , cx  } = PluginProviderRender_useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(network.networkSupporterPluginID);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.networkItem,
        onClick: ()=>{
            onNetworkIconClicked(network);
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.iconWrapper,
                style: {
                    boxShadow: `3px 10px 15px -8px ${network.iconColor}`
                },
                children: [
                    NetworkIconClickBait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIconClickBait, {
                        network: network,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                            size: 30,
                            icon: network.icon
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                        size: 30,
                        icon: network.icon
                    }),
                    selected && /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectedIcon, {
                        className: classes.checkedBadge
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: cx(classes.networkName, selected ? classes.selected : ''),
                children: Others?.chainResolver.chainName(network.chainId)
            })
        ]
    }, network.ID);
}

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx














const SelectProviderDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: theme.spacing(0, 0, 1, 0),
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
function SelectProviderDialog(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = SelectProviderDialog_useStyles();
    const [walletConnectedCallback, setWalletConnectedCallback] = (0,react.useState)();
    // #region remote controlled dialog logic
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setWalletConnectedCallback(()=>ev.walletConnectedCallback
        );
    });
    const { setDialog: setConnectWalletDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.connectWalletDialogUpdated */.R.events.connectWalletDialogUpdated);
    // #endregion
    // #region native app
    (0,react.useEffect)(()=>{
        if (!open) return;
        if (native_rpc/* hasNativeAPI */._) native_rpc/* nativeAPI */.Nz?.api.misc_openCreateWalletView();
    }, [
        open
    ]);
    // #endregion
    const site = (0,shared_base_src/* getSiteType */.sv)();
    const networks = (0,entry_web3/* getRegisteredWeb3Networks */.Rm)();
    const providers = (0,entry_web3/* getRegisteredWeb3Providers */.i8)();
    const pluginIDs = (0,src/* useValueRef */.E)(settings/* pluginIDSettings */.tR);
    const network1 = (0,entry_web3/* useNetworkDescriptor */.Vw)();
    const [undeterminedPluginID, setUndeterminedPluginID] = (0,react.useState)(site ? pluginIDs[site] : undefined);
    const [undeterminedNetworkID, setUndeterminedNetworkID] = (0,react.useState)(network1?.ID);
    const Web3State = (0,entry_web3/* useWeb3State */.dM)(undeterminedPluginID);
    const { Others , Provider  } = Web3State;
    const { NetworkIconClickBait , ProviderIconClickBait  } = (0,entry_web3/* useWeb3UI */.$d)(undeterminedPluginID).SelectProviderDialog ?? {};
    const onNetworkIconClicked = (0,react.useCallback)((network)=>{
        setUndeterminedPluginID(network.networkSupporterPluginID);
        setUndeterminedNetworkID(network.ID);
    }, []);
    const onProviderIconClicked = (0,react.useCallback)(async (network, provider)=>{
        if (!Provider?.isReady(provider.type)) {
            const downloadLink = Others?.providerResolver.providerDownloadLink(provider.type);
            if (downloadLink) (0,src/* openWindow */.xw)(downloadLink);
            return;
        }
        closeDialog();
        // TODO:
        // refactor to use react-router-dom
        setConnectWalletDialog({
            open: true,
            network,
            provider,
            walletConnectedCallback
        });
    }, [
        Others,
        Provider,
        closeDialog,
        walletConnectedCallback
    ]);
    // not available for the native app
    if (native_rpc/* hasNativeAPI */._) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_wallet_select_provider_dialog_title'),
        open: open,
        onClose: closeDialog,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginProviderRender, {
                networks: (0,shared_base_src/* isDashboardPage */.K2)() ? networks.filter((x)=>x.networkSupporterPluginID === base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
                ) : networks,
                providers: (0,shared_base_src/* isDashboardPage */.K2)() ? providers.filter((x)=>x.providerAdaptorPluginID === base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
                ) : providers,
                undeterminedPluginID: undeterminedPluginID,
                undeterminedNetworkID: undeterminedNetworkID,
                onNetworkIconClicked: onNetworkIconClicked,
                onProviderIconClicked: onProviderIconClicked,
                NetworkIconClickBait: NetworkIconClickBait,
                ProviderIconClickBait: ProviderIconClickBait
            })
        })
    });
}


/***/ }),

/***/ 46962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TransactionDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77818);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(69314);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(28257);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21948);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(85792);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(37341);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(31363);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94861);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91788);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82192);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67938);














const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(5, 3)
        },
        icon: {
            fontSize: 64,
            width: 64,
            height: 64
        },
        link: {
            marginTop: theme.spacing(0.5)
        },
        primary: {
            fontSize: 18,
            marginTop: theme.spacing(1)
        },
        secondary: {
            fontSize: 14
        }
    })
);
function TransactionDialogUI(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    // #region remote controlled dialog
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [shareText, setShareText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [summary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(t('plugin_wallet_transaction'));
    const { open , closeDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_6__/* .WalletMessages.events.transactionDialogUpdated */ .R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) {
            setState(ev.state);
            setSummary(ev.summary ?? '');
            setShareText(ev.shareText ?? '');
            setTitle(ev.title ?? t('plugin_wallet_transaction'));
        } else {
            setSummary('');
            setShareText('');
        }
    });
    const onShare = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (shareText) _social_network__WEBPACK_IMPORTED_MODULE_7__/* .activatedSocialNetworkUI.utils.share */ .LM.utils.share?.(shareText);
        closeDialog();
    }, [
        shareText,
        closeDialog
    ]);
    // #endregion
    if (!state) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .InjectedDialog */ .Fl, {
        open: open,
        onClose: closeDialog,
        title: title,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                className: classes.content,
                children: [
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                size: 64,
                                color: "primary"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                variant: "subtitle1",
                                children: t('plugin_wallet_transaction_wait_for_confirmation')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.secondary,
                                color: "textSecondary",
                                children: summary
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.HASH */ .n$.HASH ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: t('plugin_wallet_transaction_submitted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .explorerResolver.transactionLink */ .Nb.transactionLink(chainId, state.hash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            state.receipt.status ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                className: classes.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.receipt.status ? t('plugin_wallet_transaction_confirmed') : state.reason ?? t('plugin_wallet_transaction_reverted')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.link,
                                    href: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_16__/* .explorerResolver.transactionLink */ .Nb.transactionLink(chainId, state.receipt.transactionHash),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: t('plugin_wallet_view_on_explorer')
                                })
                            })
                        ]
                    }) : null,
                    state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.FAILED */ .n$.FAILED ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.primary,
                                color: "textPrimary",
                                children: state.error.message
                            })
                        ]
                    }) : null
                ]
            }),
            ![
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(state.type) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    fullWidth: true,
                    onClick: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareText ? closeDialog : onShare,
                    children: state.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .TransactionStateType.FAILED */ .n$.FAILED || !shareText ? t('dismiss') : t('share')
                })
            }) : null
        ]
    });
}
function TransactionDialog(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(TransactionDialogUI, {
        ...props
    });
}


/***/ }),

/***/ 95414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ TransactionSnackbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70981);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28257);
/* harmony import */ var _mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32841);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()({
    link: {
        display: 'flex',
        alignItems: 'center'
    }
});
function TransactionSnackbar({ pluginID  }) {
    const { classes  } = useStyles();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { showSnackbar , closeSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .useCustomSnackbar */ .Ii)();
    const snackbarKeyRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(pluginID);
    const [error1, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { Others , TransactionFormatter , TransactionWatcher  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(pluginID);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('error', (error)=>{
            setError(error);
        });
        return ()=>{
            off?.();
        };
    }, [
        TransactionWatcher
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const off = TransactionWatcher?.emitter.on('progress', (id, status, transaction)=>{
            if (!transaction || !pluginID) return;
            setProgress({
                chainId,
                status,
                id,
                transaction
            });
        });
        return ()=>{
            off?.();
        };
    }, [
        TransactionWatcher,
        chainId,
        pluginID
    ]);
    const resolveSnackbarConfig = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .FG)({
        [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStatusType.NOT_DEPEND */ .g8.NOT_DEPEND]: {
            processing: true,
            variant: 'default',
            message: t('plugin_wallet_snackbar_wait_for_confirming')
        },
        [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStatusType.SUCCEED */ .g8.SUCCEED]: {
            processing: false,
            variant: 'success',
            message: t('plugin_wallet_snackbar_confirmed')
        },
        [_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStatusType.FAILED */ .g8.FAILED]: {
            processing: false,
            variant: 'error',
            message: t('plugin_wallet_snackbar_failed')
        }
    }, {});
    const showSingletonSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((title, options)=>{
        if (snackbarKeyRef.current !== undefined) closeSnackbar(snackbarKeyRef.current);
        snackbarKeyRef.current = showSnackbar(title, options);
        return ()=>{
            closeSnackbar(snackbarKeyRef.current);
        };
    }, [
        showSnackbar,
        closeSnackbar
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>{
        if (!progress) return;
        const computed = await TransactionFormatter?.formatTransaction?.(progress.chainId, progress.transaction);
        if (!computed) return;
        showSingletonSnackbar(computed.title, {
            ...resolveSnackbarConfig(progress.status),
            ...{
                message: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    className: classes.link,
                    color: "inherit",
                    href: Others?.explorerResolver.transactionLink?.(progress.chainId, progress.id),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        computed.description,
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Launch__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            sx: {
                                ml: 1
                            },
                            fontSize: "inherit"
                        })
                    ]
                })
            }
        });
    }, [
        progress
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>{
        if (!error1?.message) return;
        console.log({
            error: error1
        });
        showSingletonSnackbar(error1.message, {
            ...resolveSnackbarConfig(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .TransactionStatusType.FAILED */ .g8.FAILED)
        });
    }, [
        error1?.message
    ]);
    return null;
}


/***/ }),

/***/ 35209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ WalletConnectQRCodeDialog)
});

// UNUSED EXPORTS: QRCodeDialog

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ImageList/ImageList.js + 1 modules
var ImageList = __webpack_require__(54785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ImageListItem/ImageListItem.js + 1 modules
var ImageListItem = __webpack_require__(40873);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__(62633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/Provider.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            textAlign: 'center'
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: theme.spacing(3, 1, 2),
            backgroundColor: theme.palette.background.default
        },
        logo: {
            width: 45,
            height: 45,
            marginBottom: theme.spacing(2)
        },
        name: {
            fontSize: 16,
            fontWeight: 'normal',
            whiteSpace: 'nowrap',
            marginBottom: theme.spacing(1)
        },
        description: {
            fontSize: 14,
            fontWeight: 300
        }
    })
);
function Provider(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        style: {
            opacity: props.ButtonBaseProps?.disabled ? 0.5 : 1
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonBase/* default */.Z, {
            className: `${classes.content} dashboard-style`,
            ...props.ButtonBaseProps,
            onClick: props.onClick,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.logo,
                    children: props.logo
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    variant: "h3",
                    children: props.name
                }),
                props.description && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.description,
                    color: "textSecondary",
                    variant: "body2",
                    children: props.description
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(8461);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/Icons.tsx


const TrustIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    rx: "24",
                    fill: "#3375BB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M96.685 31.485c1.149 0 2.236.472 3.036 1.272a4.29 4.29 0 011.23 3.056c-.205 12.223-.676 21.575-1.558 28.98-.862 7.403-2.154 12.9-4.102 17.35-1.313 2.974-2.933 5.435-4.84 7.527-2.564 2.769-5.497 4.778-8.696 6.686-1.368.818-2.79 1.625-4.282 2.473-3.183 1.807-6.683 3.795-10.649 6.448a4.242 4.242 0 01-4.737 0c-4.027-2.684-7.573-4.696-10.785-6.519-.714-.405-1.412-.8-2.095-1.192-3.753-2.174-7.137-4.246-10.09-7.24-1.97-1.969-3.671-4.369-5.025-7.22-1.846-3.814-3.097-8.428-4.02-14.397-1.23-7.978-1.846-18.417-2.071-32.896a4.274 4.274 0 011.21-3.056 4.35 4.35 0 013.056-1.272h1.763c5.435.021 17.433-.512 27.81-8.593a4.278 4.278 0 015.23 0c10.378 8.08 22.376 8.614 27.831 8.593h1.784zm-9.536 47.93c1.333-2.748 2.44-6.542 3.281-11.998 1.005-6.522 1.62-15.382 1.908-27.44-6.4-.185-17.392-1.416-27.872-8.47-10.48 7.034-21.473 8.264-27.851 8.47.225 9.967.676 17.72 1.394 23.81.82 6.932 1.99 11.629 3.446 14.93.964 2.195 2.03 3.775 3.302 5.169 1.702 1.867 3.855 3.405 6.788 5.168 1.217.73 2.558 1.49 4.018 2.316 2.601 1.472 5.58 3.158 8.903 5.273 3.262-2.08 6.197-3.749 8.768-5.21.775-.44 1.517-.863 2.225-1.271 3.61-2.072 6.275-3.794 8.265-5.804 1.333-1.374 2.42-2.871 3.425-4.943z",
                    fill: "#fff"
                })
            ]
        })
    })
;
const IMTokenIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    rx: "24",
                    fill: "url(#paint0_linear)"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M105.782 36.041c2.77 37.67-21.348 55.475-42.97 57.374-20.1 1.765-39.022-10.636-40.681-29.69-1.37-15.74 8.32-22.441 15.933-23.11 7.83-.689 14.41 4.733 14.982 11.297.55 6.311-3.373 9.184-6.1 9.423-2.158.19-4.872-1.125-5.117-3.948-.21-2.426.707-2.757.483-5.334-.399-4.588-4.384-5.123-6.566-4.933-2.64.232-7.431 3.326-6.759 11.033.676 7.774 8.1 13.916 17.832 13.062 10.503-.921 17.815-9.131 18.364-20.646a4.2 4.2 0 01.375-1.768l.004-.014c.113-.242.245-.473.395-.693a9.37 9.37 0 01.883-1.118c.004-.01.004-.01.01-.01.27-.306.596-.637.964-.992 4.587-4.346 21.11-14.595 36.735-11.35a1.565 1.565 0 011.233 1.417z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear",
                        x1: "128",
                        y1: "54.5",
                        x2: "0",
                        y2: "55",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                stopColor: "#11C3D1"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#057EB8"
                            })
                        ]
                    })
                })
            ]
        })
    })
;
const RainbowIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            viewBox: "0 0 128 128",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    fill: "url(#paint0_linear)",
                    rx: "24"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint1_radial)",
                    d: "M72.527 100.659c0-24.87-20.072-45.034-44.83-45.034H22v11.09c0 3.162 2.55 5.723 5.696 5.723 15.515 0 28.094 12.636 28.094 28.221 0 2.951 2.382 5.341 5.317 5.341h11.42v-5.341z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint2_radial)",
                    d: "M89.263 100.659c0-34.103-27.618-61.846-61.567-61.846H22v16.812h5.696c24.72 0 44.83 20.203 44.83 45.034V106h16.737v-5.341z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "url(#paint3_radial)",
                    d: "M27.696 38.813c34.003 0 61.567 27.69 61.567 61.846V106h11.42c2.938 0 5.317-2.39 5.317-5.341 0-21.01-8.144-40.765-22.935-55.62C68.277 30.181 48.61 22 27.696 22 24.55 22 22 24.56 22 27.722v11.09h5.696z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint1_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "matrix(35.56535 -34.37578 34.64161 35.84038 23.943 103.361)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".662",
                                    stopColor: "#01B1E2"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#01D64F"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint2_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "rotate(-44.956 139.17 26.446) scale(69.6855 70.0822)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".76",
                                    stopColor: "#FE0"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".973",
                                    stopColor: "#FFA000"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                            id: "paint3_radial",
                            cx: "0",
                            cy: "0",
                            r: "1",
                            gradientTransform: "matrix(61.26799 -59.14432 59.4229 61.55657 22 106.063)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: ".81",
                                    stopColor: "#EE3E1D"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#8854C4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                            id: "paint0_linear",
                            x1: "64",
                            x2: "64",
                            y1: "0",
                            y2: "128",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    stopColor: "#164299"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#001E59"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    })
;
const MetaMaskIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 128 128",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                    width: "128",
                    height: "128",
                    fill: "#fff",
                    rx: "24"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E17726",
                    stroke: "#E17726",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M99.85 28L69.09 50.81l5.72-13.44L99.85 28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M28.9 28l30.48 23.03-5.44-13.66L28.9 28zM88.78 80.9l-8.19 12.53 17.53 4.83 5.02-17.1-14.36-.27zM25.65 81.17l4.99 17.1 17.5-4.84-8.16-12.54-14.33.28z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27625",
                    stroke: "#E27625",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M47.19 59.73l-4.87 7.36 17.34.79-.58-18.7-11.9 10.55zM81.57 59.73L69.5 48.96l-.4 18.92 17.35-.8-4.87-7.35zM48.14 93.43l10.5-5.08-9.04-7.06-1.46 12.14zM70.13 88.35l10.47 5.08-1.43-12.14-9.04 7.06z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#D5BFB2",
                    stroke: "#D5BFB2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M80.59 93.43l-10.47-5.08.85 6.81-.09 2.89 9.7-4.62zM48.13 93.43l9.73 4.62-.06-2.89.83-6.81-10.5 5.08z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#233447",
                    stroke: "#233447",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M58.05 76.79l-8.7-2.56 6.14-2.82 2.56 5.38zM70.7 76.79l2.56-5.38 6.17 2.82-8.73 2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#CC6228",
                    stroke: "#CC6228",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M48.13 93.43l1.52-12.53-9.68.27 8.16 12.26zM79.1 80.9l1.48 12.53 8.19-12.26-9.68-.27zM86.44 67.09l-17.35.79 1.62 8.9 2.55-5.37 6.18 2.82 7-7.14zM49.34 74.23l6.14-2.82 2.56 5.38 1.61-8.91-17.34-.8 7.03 7.15z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#E27525",
                    stroke: "#E27525",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M42.3 67.09l7.28 14.2-.24-7.06-7.03-7.14zM79.42 74.23l-.27 7.06 7.27-14.2-7 7.14zM59.65 67.88l-1.61 8.9 2.04 10.53.45-13.87-.88-5.56zM69.08 67.88l-.85 5.53.43 13.9L70.7 76.8l-1.62-8.91z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.7 76.79L68.66 87.3l1.46 1.04 9.04-7.06.27-7.06-8.73 2.56zM49.35 74.23l.24 7.06 9.04 7.06 1.46-1.04-2.04-10.52-8.7-2.56z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#C0AC9D",
                    stroke: "#C0AC9D",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.89 98.05l.09-2.89-.8-.67H58.57l-.76.67.06 2.89-9.73-4.62 3.4 2.8 6.91 4.77h11.84l6.94-4.78 3.37-2.8-9.7 4.63z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#161616",
                    stroke: "#161616",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M70.13 88.35l-1.46-1.04h-8.59l-1.46 1.04-.82 6.81.76-.67H70.2l.79.67-.85-6.81z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#763E1A",
                    stroke: "#763E1A",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M101.16 52.3l2.58-12.59L99.84 28 70.13 50.05l11.44 9.67 16.16 4.72 3.56-4.17-1.55-1.12 2.46-2.25-1.89-1.46 2.47-1.89-1.61-1.25zM25 39.71l2.62 12.6-1.68 1.24 2.5 1.89-1.89 1.46 2.47 2.25-1.56 1.12 3.56 4.17 16.16-4.72 11.44-9.67L28.9 28 25 39.71z"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#F5841F",
                    stroke: "#F5841F",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M97.73 64.44l-16.16-4.71 4.87 7.36-7.27 14.2 9.61-.12h14.36l-5.41-16.73zM47.19 59.73l-16.16 4.71-5.38 16.73h14.33l9.61.12-7.27-14.2 4.87-7.36zM69.1 67.88l1.03-17.83 4.69-12.68H53.94l4.69 12.68 1.03 17.83.4 5.6.03 13.83h8.58l.03-13.84.4-5.6z"
                })
            ]
        })
    })
;

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/SafariPlatform.tsx










const SafariPlatform_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid: {
        width: '100%'
    },
    icon: {
        fontSize: 45
    }
});
const providers = [
    {
        name: 'MetaMask',
        logo: MetaMaskIcon,
        protocol: 'https://metamask.app.link/wc'
    },
    {
        name: 'Rainbow',
        logo: RainbowIcon,
        protocol: 'https://rnbwapp.com/wc'
    },
    {
        name: 'Trust',
        logo: TrustIcon,
        protocol: 'https://link.trustwallet.com/wc'
    },
    {
        name: 'imToken',
        logo: IMTokenIcon,
        protocol: 'imtokenv2://wc'
    }, 
];
const SafariPlatform = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SafariPlatform_useStyles();
    const makeConnect = (link)=>()=>(0,src/* openWindow */.xw)(dist_default()(link, {
                uri
            }))
    ;
    const descriptionMapping = {
        MetaMask: t('plugin_wallet_connect_safari_metamask'),
        Rainbow: t('plugin_wallet_connect_safari_rainbow'),
        Trust: t('plugin_wallet_connect_safari_trust'),
        imToken: t('plugin_wallet_connect_safari_im_token')
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageList/* default */.Z, {
        className: classes.grid,
        gap: 16,
        rowHeight: 183,
        children: (0,map/* default */.Z)(providers, ({ name , logo , protocol  }, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ImageListItem/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Provider, {
                    name: name,
                    logo: /*#__PURE__*/ (0,react.createElement)(logo, {
                        className: classes.icon,
                        viewBox: '0 0 45 45'
                    }),
                    description: descriptionMapping[name],
                    onClick: makeConnect(protocol)
                })
            }, key)
        )
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/FirefoxPlatform.tsx



const FirefoxPlatform = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        variant: "contained",
        onClick: ()=>open(uri)
        ,
        children: t('plugin_wallet_on_connect_in_firefox')
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/QRCodeModal.tsx





const QRCodeModal_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.1))',
            backdropFilter: 'blur(20px)'
        },
        tip: {
            fontSize: 12,
            marginTop: '10px'
        },
        onCopy: {
            marginTop: theme.spacing(1)
        }
    })
);
const QRCodeModal = ({ uri  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = QRCodeModal_useStyles();
    const style = {
        width: '80%',
        maxWidth: 361,
        display: 'block',
        margin: 'auto',
        borderRadius: 16
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* QRCode */.s_, {
                text: uri,
                canvasProps: {
                    style
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.tip,
                color: "textSecondary",
                children: t('plugin_wallet_qr_code_with_wallet_connect')
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/index.tsx











const WalletConnectQRCodeDialog_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%'
    }
});
const WalletConnectQRCodeDialog = ()=>{
    const [uri, setURI] = (0,react.useState)('');
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, (ev)=>ev.open && setURI(ev.uri)
    );
    let mode = 'qrcode';
    if (false) {} else if (true) {
        mode = 'safari';
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeDialog, {
        uri: uri,
        open: open,
        mode: mode,
        onClose: async ()=>{
            closeDialog();
        }
    });
};
const QRCodeDialog = ({ uri , open , onClose , mode  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletConnectQRCodeDialog_useStyles();
    const [qrMode, setQRMode] = (0,react.useState)(false);
    const PlatformSelector = ()=>{
        if (!uri) {
            return null;
        } else if (qrMode || mode === 'qrcode') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModal, {
                uri: uri
            });
        } else if (mode === 'firefox') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FirefoxPlatform, {
                uri: uri
            });
        } else if (mode === 'safari') {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(SafariPlatform, {
                uri: uri
            });
        }
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeModal, {
            uri: uri
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('plugin_wallet_connect_dialog_title'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.container,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PlatformSelector, {})
            }),
            mode !== 'qrcode' && /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "contained",
                    onClick: ()=>setQRMode(!qrMode)
                    ,
                    children: t(qrMode ? 'plugin_wallet_return_mobile_wallet_options' : 'plugin_wallet_view_qr_code')
                })
            })
        ]
    });
};


/***/ }),

/***/ 25930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ WalletStatusDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(21948);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21784);
/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72388);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50719);
/* harmony import */ var _components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47919);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93455);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91788);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        content: {
            padding: theme.spacing(2),
            overflowX: 'hidden'
        },
        footer: {
            fontSize: 12,
            marginRight: 16,
            textAlign: 'left',
            padding: theme.spacing(2),
            borderTop: `1px solid ${theme.palette.divider}`,
            justifyContent: 'flex-start'
        },
        walletStatusWrapper: {
            marginRight: 16
        },
        address: {
            fontSize: 16,
            marginRight: theme.spacing(1),
            display: 'inline-block'
        },
        subTitle: {
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            marginBottom: 11.5,
            color: theme.palette.text.primary
        }
    })
);
function WalletStatusDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__/* .useChainIdValid */ .as)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    // #region remote controlled dialog logic
    const { open , closeDialog: _closeDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_messages__WEBPACK_IMPORTED_MODULE_10__/* .WalletMessages.events.walletStatusDialogUpdated */ .R.events.walletStatusDialogUpdated);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _closeDialog();
        _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .CrossIsolationMessages.events.requestComposition.sendToLocal */ .WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: false
        });
    }, []);
    // #endregion
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .InjectedDialog */ .Fl, {
        title: t('plugin_wallet_dialog_title'),
        open: open,
        onClose: closeDialog,
        maxWidth: "sm",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_WalletStatusBox__WEBPACK_IMPORTED_MODULE_8__/* .WalletStatusBox */ .C, {
                    showPendingTransaction: true
                })
            }),
            !chainIdValid ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                className: classes.footer,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        color: "secondary",
                        fontSize: "small",
                        sx: {
                            marginRight: 1
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        color: "secondary",
                        variant: "body2",
                        children: t('plugin_wallet_wrong_network_tip')
                    })
                ]
            }) : null
        ]
    });
}


/***/ })

}]);