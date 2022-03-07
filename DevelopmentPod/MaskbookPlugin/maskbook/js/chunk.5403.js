"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5403],{

/***/ 76262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61751);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);



function usePostLink() {
    var _utils, ref;
    const id = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.snsID */ .H9.snsID();
    const identifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.identifier */ .H9.identifier();
    if (!id || !identifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.utils */ .LM.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, identifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const payload = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.containingMaskPayload */ .H9.containingMaskPayload().unwrapOr(undefined);
    if (!payload) return undefined;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 95403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var src = __webpack_require__(27194);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(24515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(51364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(11061);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/QueryBuilder.js
var QueryBuilder = __webpack_require__(96423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(2172);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ./src/plugins/Gitcoin/messages.ts
var messages = __webpack_require__(37004);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/hooks/useGrant.ts


function useGrant(id) {
    return (0,useAsyncRetry/* default */.Z)(()=>messages/* PluginGitcoinRPC.fetchGrant */.g.fetchGrant(id)
    );
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/PreviewCard.tsx












const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
            padding: theme.spacing(4, 0, 0)
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
        }
    })
);
function PreviewCard(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { value: grant , error , loading , retry  } = useGrant(props.id);
    // #region the donation dialog
    const postLink = (0,usePostInfo/* usePostLink */.Vc)();
    const { setDialog: setDonationDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* PluginGitcoinMessages.donationDialogUpdated */.y.donationDialogUpdated);
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
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: t('loading')
    }));
    if (error) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: t('go_wrong')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                size: "small",
                onClick: retry,
                children: t('retry')
            })
        ]
    }));
    if (!grant) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
                                    t('plugin_gitcoin_last_updated'),
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
                                children: t('plugin_gitcoin_by')
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
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                className: classes.buttons,
                spacing: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "outlined",
                            fullWidth: true,
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: dist_default()('https://gitcoin.co', grant.url),
                            children: t('plugin_gitcoin_view_on')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            fullWidth: true,
                            color: "primary",
                            onClick: onDonate,
                            children: t('plugin_gitcoin_donate')
                        })
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/plugins/Gitcoin/base.ts
var Gitcoin_base = __webpack_require__(22359);
// EXTERNAL MODULE: ./src/plugins/Gitcoin/constants.ts
var constants = __webpack_require__(22045);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(80955);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var evm_constants = __webpack_require__(92211);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(42624);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(98294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.5_07b14a436152a0046ed0bd90fadfd5f7/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(76529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(74926);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(66792);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(26340);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(7897);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(63081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(15091);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(15030);
// EXTERNAL MODULE: ../web3-contracts/abis/BulkCheckout.json
var BulkCheckout = __webpack_require__(29389);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(42340);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/contracts/useBulkCheckoutWallet.ts


function useBulkCheckoutContract() {
    const { BULK_CHECKOUT_ADDRESS  } = (0,evm_constants/* useGitcoinConstants */.N_)();
    return (0,useContract/* useContract */.cq)(BULK_CHECKOUT_ADDRESS, BulkCheckout);
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/hooks/useDonateCallback.ts





/**
 * A callback for donate gitcoin grant
 * @param address the donor address
 * @param amount
 * @param token
 */ function useDonateCallback(address, amount, token) {
    const { GITCOIN_ETH_ADDRESS , GITCOIN_TIP_PERCENTAGE  } = (0,evm_constants/* useGitcoinConstants */.N_)();
    const bulkCheckoutContract = useBulkCheckoutContract();
    const account = (0,useAccount/* useAccount */.m)();
    const [donateState, setDonateState] = (0,useTransactionState/* useTransactionState */.p)();
    const donations = (0,react.useMemo)(()=>{
        if (!address || !token) return [];
        if (!GITCOIN_ETH_ADDRESS || !GITCOIN_TIP_PERCENTAGE) return [];
        const tipAmount = new (bignumber_default())(GITCOIN_TIP_PERCENTAGE / 100).multipliedBy(amount);
        const grantAmount = new (bignumber_default())(amount).minus(tipAmount);
        return [
            [
                token.type === types/* EthereumTokenType.Native */.Dr.Native ? GITCOIN_ETH_ADDRESS : token.address,
                tipAmount.toFixed(),
                address
            ],
            [
                token.type === types/* EthereumTokenType.Native */.Dr.Native ? GITCOIN_ETH_ADDRESS : token.address,
                grantAmount.toFixed(),
                address
            ], 
        ];
    }, [
        address,
        amount,
        token
    ]);
    const donateCallback = (0,react.useCallback)(async ()=>{
        if (!token || !bulkCheckoutContract || !donations.length) {
            setDonateState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setDonateState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const value = (0,base_src/* toFixed */.FH)(token.type === types/* EthereumTokenType.Native */.Dr.Native ? amount : 0);
        const config = {
            from: account,
            gas: await bulkCheckoutContract.methods.donate(donations).estimateGas({
                from: account,
                value
            }).catch((error)=>{
                setDonateState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            value
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            bulkCheckoutContract.methods.donate(donations).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setDonateState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setDonateState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        amount,
        token,
        donations
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setDonateState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        donateState,
        donateCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/DonateDialog.tsx





















const DonateDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    var _utils, ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,theme_src/* useStylesExtends */.Bc)(DonateDialog_useStyles(), props);
    const [title, setTitle] = (0,react.useState)('');
    const [address, setAddress] = (0,react.useState)('');
    const [postLink, setPostLink] = (0,react.useState)('');
    // context
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const nativeTokenDetailed = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const { BULK_CHECKOUT_ADDRESS  } = (0,evm_constants/* useGitcoinConstants */.N_)();
    // #region remote controlled dialog
    const { open , closeDialog: closeDonationDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* PluginGitcoinMessages.donationDialogUpdated */.y.donationDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setTitle(ev.title);
        setAddress(ev.address);
        setPostLink(ev.postLink);
    });
    // #endregion
    // #region the selected token
    const [token = nativeTokenDetailed.value, setToken] = (0,react.useState)(nativeTokenDetailed.value);
    var ref1, ref2;
    const tokenBalance = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)((ref1 = token === null || token === void 0 ? void 0 : token.type) !== null && ref1 !== void 0 ? ref1 : types/* EthereumTokenType.Native */.Dr.Native, (ref2 = token === null || token === void 0 ? void 0 : token.address) !== null && ref2 !== void 0 ? ref2 : '');
    // #endregion
    // #region select token dialog
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken: false,
            FungibleTokenListProps: {
                selectedTokens: token ? [
                    token.address
                ] : []
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,base_src/* rightShift */.pu)(rawAmount || '0', token === null || token === void 0 ? void 0 : token.decimals);
    // #endregion
    // #region blocking
    const [donateState, donateCallback, resetDonateCallback] = useDonateCallback(address !== null && address !== void 0 ? address : '', amount.toFixed(), token);
    // #endregion
    // #region transaction dialog
    const cashTag = (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
    const shareLink = (ref = (_utils = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, token ? [
        `I just donated ${title} with ${(0,formatter/* formatBalance */.az)(amount, token.decimals)} ${cashTag}${token.symbol}. ${(0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? `Follow @${(0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')} (mask.io) to donate Gitcoin grants.` : ''}`,
        '#mask_io',
        postLink, 
    ].join('\n') : '').toString();
    // close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        if (donateState.type === types/* TransactionStateType.HASH */.n$.HASH) setRawAmount('');
        resetDonateCallback();
    });
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!token) return;
        if (donateState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialog({
            open: true,
            shareLink,
            state: donateState,
            summary: `Donating ${(0,formatter/* formatBalance */.az)(amount, token.decimals)} ${token.symbol} for ${title}.`
        });
    }, [
        donateState /* update tx dialog only if state changed */ 
    ]);
    var _value2;
    // #endregion
    // #region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t('plugin_gitcoin_select_a_token');
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if (!address) return t('plugin_gitcoin_grant_not_available');
        if (!amount || amount.isZero()) return t('plugin_gitcoin_enter_an_amount');
        var _value;
        if (amount.isGreaterThan((_value = tokenBalance.value) !== null && _value !== void 0 ? _value : '0')) return t('plugin_gitcoin_insufficient_balance', {
            symbol: token.symbol
        });
        return '';
    }, [
        account,
        address,
        amount.toFixed(),
        chainId,
        token,
        (_value2 = tokenBalance.value) !== null && _value2 !== void 0 ? _value2 : '0'
    ]);
    // #endregion
    if (!token || !address) return null;
    var _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
                            balance: (_value1 = tokenBalance.value) !== null && _value1 !== void 0 ? _value1 : '0',
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_gitcoin_readme",
                            components: {
                                fund: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: t('plugin_gitcoin_readme_fund_link')
                                })
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: BULK_CHECKOUT_ADDRESS,
                            token: token.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                size: "large",
                                disabled: !!validationMessage,
                                onClick: donateCallback,
                                variant: "contained",
                                children: validationMessage || t('plugin_gitcoin_donate')
                            })
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(72148);
;// CONCATENATED MODULE: ./src/plugins/Gitcoin/SNSAdaptor/index.tsx












const isGitcoin = (x)=>/^https:\/\/gitcoin.co\/grants\/\d+/.test(x)
;
const isGitCoinSupported = (chainId)=>[
        types/* ChainId.Mainnet */.a_.Mainnet,
        types/* ChainId.Matic */.a_.Matic
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
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* PLUGIN_META_KEY */.um,
            ()=>constants/* PLUGIN_NAME */.EW
        ]
    ]),
    GlobalInjection () {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DonateDialog, {}));
    },
    PostInspector () {
        const links = usePostInfo/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isGitcoin);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
function Renderer(props) {
    var ref;
    const [id = ''] = (ref = props.url.match(/\d+/)) !== null && ref !== void 0 ? ref : [];
    const chainId = (0,src/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    (0,src/* usePluginWrapper */.fI)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: isGitCoinSupported(chainId) ? chainId : types/* ChainId.Mainnet */.a_.Mainnet,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {
            id: id
        })
    }));
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 37004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PluginGitcoinRPC),
/* harmony export */   "y": () => (/* binding */ PluginGitcoinMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27194);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22045);


const PluginGitcoinMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginGitcoinRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 699).then(__webpack_require__.bind(__webpack_require__, 70699))
, PluginGitcoinMessages.rpc);


/***/ }),

/***/ 29389:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"dest","type":"address"},{"indexed":true,"internalType":"address","name":"donor","type":"address"}],"name":"DonationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"dest","type":"address"}],"name":"TokenWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address payable","name":"dest","type":"address"}],"internalType":"struct BulkCheckout.Donation[]","name":"_donations","type":"tuple[]"}],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_dest","type":"address"}],"name":"withdrawEther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_dest","type":"address"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);