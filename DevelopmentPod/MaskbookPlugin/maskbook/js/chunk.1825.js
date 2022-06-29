"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1825],{

/***/ 91825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/Gitcoin.tsx


const GitcoinIcon = (0,utils/* createIcon */.I)('Gitcoin', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.244 13.541l1.661 3.274-1.265 5.36-3.003-2.454.531-3.93 2.076-2.25z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.807 12.44a.627.627 0 01-.627-.627V6.879a.626.626 0 111.255 0v4.934a.639.639 0 01-.628.627z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.822 12.44h-1.94a.633.633 0 01-.618-.637.635.635 0 01.618-.618h1.94c.348.01.619.29.619.637a.629.629 0 01-.619.618z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.238 13.541l2.057-1.94a8.686 8.686 0 00-6.151-2.55 8.712 8.712 0 00-8.71 8.71 8.712 8.712 0 008.71 8.71c1.796 0 3.37.656 4.75-.27l1.72.24-.05-2.8-4.933-3.91 1.062-4.992 1.545-1.198z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.15 27.32c-5.272 0-9.56-4.287-9.56-9.56 0-5.272 4.288-9.559 9.56-9.559 2.549 0 4.953.995 6.759 2.8l.618.618-2.704 2.54-1.168-1.246 1.38-1.303A7.764 7.764 0 0014.14 9.9c-4.326 0-7.85 3.525-7.85 7.851 0 4.326 3.524 7.85 7.85 7.85",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.95 22.405l-1.226-1.187a4.937 4.937 0 001.4-3.457 4.905 4.905 0 00-1.506-3.563l-.638-.628.686-.647.589.618.56-.58a6.638 6.638 0 012.028 4.79 6.699 6.699 0 01-1.893 4.654z",
            fill: "#0FCE7C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.183 17.761c0-1.081.878-1.97 1.97-1.97 1.08 0 1.97.88 1.97 1.97 0 1.082-.88 1.97-1.97 1.97a1.978 1.978 0 01-1.97-1.97z",
            fill: "#EFF4EE"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.15 16.65c-.61 0-1.111.503-1.111 1.11 0 .61.502 1.111 1.11 1.111.609 0 1.11-.502 1.11-1.11 0-.618-.492-1.11-1.11-1.11zm0 3.93a2.823 2.823 0 01-2.82-2.82 2.823 2.823 0 012.82-2.819 2.823 2.823 0 012.819 2.82 2.823 2.823 0 01-2.82 2.82zm6.16-8.98l-4.973 4.597L20.31 11.6z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.73 10.973l1.158 1.255-4.973 4.597-1.159-1.256 4.973-4.596z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15.074 19.49l3.573 2.684 1.93 1.448v3.689l-3.871-.184",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.432 27.32h-7.435v-1.708h5.726v-1.555l-5.156-3.882 1.023-1.361 5.842 4.393v4.114z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.038 7.351l.686-.685.686.685-.686.686-.686-.686zM19.093 4.05l.329-.328.328.328-.328.328-.329-.328zM23.153 1.172a.495.495 0 00-.492-.493.495.495 0 00-.493.493c0 .27.222.492.492.492s.493-.212.493-.492z",
            fill: "#25E899"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.836 14.17a.626.626 0 01-.627-.628V6.879a.633.633 0 01.637-.618c.338.01.608.28.618.618v6.663c0 .347-.28.627-.628.627z",
            fill: "#15003E"
        })
    ]
}), '0 0 28 28');

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/QueryBuilder.js
var QueryBuilder = __webpack_require__(35188);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(89009);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "co.gitcoin", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("co.gitcoin")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ./src/plugins/Gitcoin/apis/index.ts
var apis = __webpack_require__(95290);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/hooks/useGrant.ts


function useGrant(id) {
    return (0,useAsyncRetry/* default */.Z)(()=>(0,apis/* fetchGrant */.t)(id)
    );
}

// EXTERNAL MODULE: ./src/plugins/Gitcoin/messages.ts
var messages = __webpack_require__(34130);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(442);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/PreviewCard.tsx
















const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        logo: {
            textAlign: 'center',
            '& > *': {
                width: 'auto',
                height: 100
            }
        },
        title: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            '& > :last-child': {
                marginTop: 4,
                marginLeft: 4
            }
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
        },
        data: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        meta: {
            fontSize: 10,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'center',
            '& svg': {
                marginRight: theme.spacing(0.5)
            }
        },
        avatar: {
            width: theme.spacing(2),
            height: theme.spacing(2),
            margin: theme.spacing(0, 1)
        },
        buttons: {
            width: '100%',
            margin: 0
        },
        verified: {
            borderRadius: 50
        },
        text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        button: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            width: '100%'
        }
    })
);
function PreviewCard(props) {
    const t = useI18N();
    const { t: tr  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { value: grant , error , loading , retry  } = useGrant(props.id);
    const theme = (0,useTheme/* default */.Z)();
    // #region the donation dialog
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const { setDialog: setDonationDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginGitcoinMessages.donationDialogUpdated */.y.donationDialogUpdated);
    const onDonate = (0,react.useCallback)(()=>{
        if (!grant) return;
        setDonationDialog({
            open: true,
            address: grant.admin_address,
            title: grant.title,
            postLink
        });
    }, [
        grant,
        setDonationDialog
    ]);
    // #endregion
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        textAlign: "center",
        sx: {
            padding: 2
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        sx: {
            padding: 1.5
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: tr('go_wrong')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    },
                    width: 254,
                    color: 'white'
                },
                onClick: retry,
                children: tr('retry')
            })
        ]
    });
    if (!grant) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.root,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.logo,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: grant.logo_url
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                color: "textPrimary",
                                children: grant.title
                            }),
                            grant.verified ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedUser/* default */.Z, {
                                fontSize: "small",
                                color: "primary"
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.description,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            color: "textSecondary",
                            className: classes.text,
                            children: grant.description
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.data,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.meta,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(QueryBuilder/* default */.Z, {
                                        fontSize: "small",
                                        color: "disabled"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: [
                                            t.last_updated(),
                                            " ",
                                            grant.last_update_natural
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.meta,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: t.by()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                        alt: grant.admin_profile.handle,
                                        src: grant.admin_profile.avatar_url,
                                        className: classes.avatar
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        color: "textSecondary",
                                        children: grant.admin_profile.handle
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1,
                            padding: 1.5
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            className: classes.button,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: dist_default()('https://gitcoin.co', grant.url),
                            children: t.view_on()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1,
                            padding: 1.5
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedPluginID: src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            expectedChainId: types/* ChainId.Mainnet */.a_.Mainnet,
                            predicate: (pluginID, chainId)=>pluginID === src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && [
                                    types/* ChainId.Mainnet */.a_.Mainnet,
                                    types/* ChainId.Matic */.a_.Matic
                                ].includes(chainId)
                            ,
                            renderInTimeline: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "contained",
                                fullWidth: true,
                                sx: {
                                    backgroundColor: theme.palette.maskColor?.dark,
                                    '&:hover': {
                                        backgroundColor: theme.palette.maskColor?.dark
                                    },
                                    color: 'white'
                                },
                                onClick: onDonate,
                                children: t.donate()
                            })
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/plugins/Gitcoin/base.ts + 7 modules
var Gitcoin_base = __webpack_require__(83546);
// EXTERNAL MODULE: ./src/plugins/Gitcoin/constants.ts
var constants = __webpack_require__(22256);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants_constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(5492);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(49524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../web3-contracts/abis/BulkCheckout.json
var BulkCheckout = __webpack_require__(29389);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/contracts/useBulkCheckoutWallet.ts



function useBulkCheckoutContract(chainId) {
    const { BULK_CHECKOUT_ADDRESS  } = (0,constants_constants/* useGitcoinConstants */.N_)(chainId);
    return (0,entry_web3_evm/* useContract */.cq)(chainId, BULK_CHECKOUT_ADDRESS, BulkCheckout);
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/hooks/useDonateCallback.ts







/**
 * A callback for donate gitcoin grant
 * @param address the donor address
 * @param amount
 * @param token
 */ function useDonateCallback(address, amount, token) {
    const { GITCOIN_ETH_ADDRESS , GITCOIN_TIP_PERCENTAGE  } = (0,constants_constants/* useGitcoinConstants */.N_)();
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const bulkCheckoutContract = useBulkCheckoutContract(chainId);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const donations = (0,react.useMemo)(()=>{
        if (!address || !token) return [];
        if (!GITCOIN_ETH_ADDRESS || !GITCOIN_TIP_PERCENTAGE) return [];
        const tipAmount = new (bignumber_default())(GITCOIN_TIP_PERCENTAGE / 100).multipliedBy(amount);
        const grantAmount = new (bignumber_default())(amount).minus(tipAmount);
        return [
            [
                token.schema === types/* SchemaType.Native */.XQ.Native ? GITCOIN_ETH_ADDRESS : token.address,
                tipAmount.toFixed(0),
                address
            ],
            [
                token.schema === types/* SchemaType.Native */.XQ.Native ? GITCOIN_ETH_ADDRESS : token.address,
                grantAmount.toFixed(0),
                address
            ], 
        ];
    }, [
        address,
        amount,
        token
    ]);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!token || !bulkCheckoutContract || !donations.length) {
            return;
        }
        // estimate gas and compose transaction
        const value = (0,src/* toFixed */.FH)(token.schema === types/* SchemaType.Native */.XQ.Native ? amount : 0);
        const config = {
            from: account,
            value
        };
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(bulkCheckoutContract, bulkCheckoutContract.methods.donate(donations), config);
        return connection.sendTransaction(tx);
    }, [
        account,
        amount,
        token,
        donations,
        connection
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/DonateDialog.tsx




















const DonateDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        paper: {
            width: '450px !important'
        },
        form: {
            '& > *': {
                margin: theme.spacing(1, 0)
            }
        },
        root: {
            margin: theme.spacing(2, 0)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            padding: theme.spacing(2, 2, 0, 2)
        },
        button: {
            margin: theme.spacing(1.5, 0, 0),
            padding: 12
        }
    })
);
function DonateDialog(props) {
    const { t: tr  } = (0,src_utils/* useI18N */.M1)();
    const t = useI18N();
    const classes = (0,entry/* useStylesExtends */.Bc)(DonateDialog_useStyles(), props);
    const [title, setTitle] = (0,react.useState)('');
    const [address, setAddress] = (0,react.useState)('');
    const [postLink, setPostLink] = (0,react.useState)('');
    // context
    const account = (0,entry_web3/* useAccount */.mA)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const nativeTokenDetailed = (0,entry_web3/* useFungibleToken */.cf)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { BULK_CHECKOUT_ADDRESS  } = (0,constants_constants/* useGitcoinConstants */.N_)(chainId);
    // #region remote controlled dialog
    const { open , closeDialog: closeDonationDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginGitcoinMessages.donationDialogUpdated */.y.donationDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setTitle(ev.title);
        setAddress(ev.address);
        setPostLink(ev.postLink);
    });
    // #endregion
    // #region the selected token
    const [token = nativeTokenDetailed.value, setToken] = (0,react.useState)(nativeTokenDetailed.value);
    const tokenBalance = (0,entry_web3/* useFungibleTokenBalance */.V4)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, token?.address);
    // #region select token dialog
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const pickedToken = await pickToken({
            disableNativeToken: false,
            selectedTokens: token?.address ? [
                token.address
            ] : []
        });
        if (pickedToken) setToken(pickedToken);
    }, [
        pickToken,
        token?.address
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,src/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    // #endregion
    // #region blocking
    const [{ loading  }, donateCallback] = useDonateCallback(address ?? '', amount.toFixed(), token);
    // #endregion
    const openShareTxDialog = (0,shared_src/* useOpenShareTxDialog */.z)();
    const donate = (0,react.useCallback)(async ()=>{
        const hash = await donateCallback();
        if (typeof hash !== 'string') return;
        const cashTag = (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
        const isOnTwitter = (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM);
        const isOnFacebook = (0,facebook_com_base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM);
        const shareText = token ? t.share_text({
            title,
            balance: (0,src/* formatBalance */.az)(amount, token?.decimals),
            symbol: `${cashTag}${token?.symbol || ''}`,
            account_promote: t.account_promote({
                context: isOnTwitter ? 'twitter' : isOnFacebook ? 'facebook' : 'default'
            }),
            link: postLink.toString()
        }) : '';
        await openShareTxDialog({
            hash,
            onShare () {
                social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
            }
        });
        // clean dialog
        setRawAmount('');
    }, [
        openShareTxDialog,
        token,
        donateCallback,
        tr,
        t
    ]);
    // #region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t.select_a_token();
        if (!account) return tr('plugin_wallet_connect_a_wallet');
        if (!address) return t.grant_not_available();
        if (!amount || amount.isZero()) return t.enter_an_amount();
        if (amount.isGreaterThan(tokenBalance.value ?? '0')) return t.insufficient_balance({
            symbol: token.symbol
        });
        return '';
    }, [
        account,
        address,
        amount.toFixed(),
        chainId,
        token,
        tokenBalance.value ?? '0'
    ]);
    // #endregion
    if (!token || !address) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: closeDonationDialog,
            title: title,
            maxWidth: "xs",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        className: classes.form,
                        noValidate: true,
                        autoComplete: "off",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                            label: "Amount",
                            amount: rawAmount,
                            balance: tokenBalance.value ?? '0',
                            token: token,
                            onAmountChange: setRawAmount,
                            SelectTokenChip: {
                                loading: tokenBalance.loading,
                                ChipProps: {
                                    onClick: onSelectTokenChipClick
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tip,
                        variant: "body1",
                        sx: {
                            marginBottom: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate.gitcoin_readme, {
                            components: {
                                fund: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: t.readme_fund_link()
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            classes: {
                                button: classes.button
                            },
                            amount: amount.toFixed(),
                            spender: BULK_CHECKOUT_ADDRESS,
                            token: token.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                loading: loading,
                                fullWidth: true,
                                size: "large",
                                disabled: !!validationMessage || loading,
                                onClick: donate,
                                variant: "contained",
                                children: validationMessage || t.donate()
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/index.tsx














const isGitcoin = (x)=>/^https:\/\/gitcoin.co\/grants\/\d+/.test(x)
;
const isGitCoinSupported = (chainId)=>[
        ChainId.Mainnet,
        ChainId.Matic
    ].includes(chainId)
;
const sns = {
    ...Gitcoin_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Comp(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isGitcoin);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* PLUGIN_META_KEY */.um,
            ()=>constants/* PLUGIN_NAME */.EW
        ]
    ]),
    GlobalInjection () {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(DonateDialog, {});
    },
    PostInspector () {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isGitcoin);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: Gitcoin_base/* base.ID */.u.ID,
            category: 'dapp',
            description: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                ns: entry_content_script/* PluginId.Gitcoin */.je.Gitcoin,
                i18nKey: "description"
            }),
            name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                ns: entry_content_script/* PluginId.Gitcoin */.je.Gitcoin,
                i18nKey: "name"
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinIcon, {}),
            marketListSortingPriority: 9,
            tutorialLink: 'https://realmasknetwork.notion.site/98ed83784ed4446a8a13fa685c7bddfb'
        }, 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(255, 159, 10, 0.2))'
            }
        })
    }
};
function Renderer(props) {
    const [id = ''] = props.url.match(/\d+/) ?? [];
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
        id: id
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 95290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ fetchGrant)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22256);


async function fetchGrant(id) {
    if (!/\d+/.test(id)) return;
    const fetch = globalThis.r2d2Fetch ?? globalThis.fetch;
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(_constants__WEBPACK_IMPORTED_MODULE_1__/* .GITCOIN_API_GRANTS_V1 */ .tq, {
        id
    }));
    const { grants  } = await response.json();
    return grants;
}


/***/ }),

/***/ 34130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ PluginGitcoinMessages)
/* harmony export */ });
/* unused harmony export PluginGitcoinRPC */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22256);


const PluginGitcoinMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginGitcoinRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 8305).then(__webpack_require__.bind(__webpack_require__, 38305))
, PluginGitcoinMessages.rpc);


/***/ }),

/***/ 49524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(72388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(96209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5)
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5)
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        }
    };
});
function SelectTokenChip(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { token , error , loading =false , readonly =false , ChipProps  } = props;
    const { classes  } = useStyles();
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    });
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    });
    if (token && error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
            address: token.address,
            chainId: token.chainId,
            name: token.name,
            logoURL: token.logoURL
        }),
        deleteIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: noop/* default */.Z,
        ...ChipProps
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            chainId: token.chainId,
            logoURL: token.logoURL
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : noop/* default */.Z,
        ...ChipProps
    });
}

;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {},
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            appearance: 'textfield'
        },
        max: {
            marginRight: theme.spacing(0.5),
            borderRadius: 8
        },
        token: {
            whiteSpace: 'pre',
            maxWidth: 300,
            paddingLeft: theme.spacing(1)
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5),
            position: 'absolute'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
function TokenAmountPanel(props) {
    const { amount: amount1 , maxAmount , maxAmountShares =1 , maxAmountSignificant , balance , token , onAmountChange , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(TokenAmountPanel_useStyles(), props);
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
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount1,
        variant: "outlined",
        onKeyDown: (ev)=>{
            if (ev.key === 'Enter') ev.preventDefault();
        },
        onChange: onChange,
        placeholder: "0.0",
        InputProps: {
            inputProps: {
                autoComplete: 'off',
                autoCorrect: 'off',
                title: 'Token Amount',
                inputMode: 'decimal',
                min: 0,
                minLength: MIN_AMOUNT_LENGTH,
                maxLength: MAX_AMOUNT_LENGTH,
                pattern: '^[0-9]*[.,]?[0-9]*$',
                spellCheck: false,
                className: classes.input
            },
            endAdornment: disableToken ? null : token ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('plugin_ito_list_table_got'),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6,
                                formatter: base_src/* formatBalance */.az
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2
                        },
                        children: [
                            balance !== '0' && !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                classes: {
                                    root: classnames_default()(classes.max, MaxChipProps?.classes?.root),
                                    ...MaxChipProps?.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    const amount = new (bignumber_default())(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1);
                                    onAmountChange((0,base_src/* formatBalance */.az)(amount, token.decimals, maxAmountSignificant) ?? '0');
                                },
                                ...MaxChipProps
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                                token: token,
                                ...props.SelectTokenChip
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 2
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: "-"
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenChip, {
                        token: token,
                        ...props.SelectTokenChip
                    })
                ]
            }),
            ...props.InputProps
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                shrink: classes.inputShrinkLabel
            }
        },
        ...props.TextFieldProps
    });
}


/***/ })

}]);