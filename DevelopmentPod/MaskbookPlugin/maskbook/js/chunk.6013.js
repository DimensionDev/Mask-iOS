"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6013],{

/***/ 61486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22684);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(3758), __webpack_require__.e(187), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(5256)]).then(__webpack_require__.bind(__webpack_require__, 96031))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 96013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ InvestDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(79154);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(61486);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(84797);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(66861);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var dHEDGE_types = __webpack_require__(38618);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useInvestCallback.ts





/**
 * A callback for invest dhedge pool
 * @param pool the pool
 * @param amount
 * @param token
 */ function useInvestCallback(pool, amount, token) {
    const poolV1Contract = (0,useDHedgePool/* useDHedgePoolV1Contract */.y5)(pool?.address ?? '');
    const poolV2Contract = (0,useDHedgePool/* useDHedgePoolV2Contract */.eN)(pool?.address ?? '');
    const account = (0,useAccount/* useAccount */.m)();
    const [investState, setInvestState] = (0,useTransactionState/* useTransactionState */.p)();
    const investCallback = (0,react.useCallback)(async ()=>{
        if (!token || !poolV1Contract || !poolV2Contract) {
            setInvestState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // pre-step: start waiting for provider to confirm tx
        setInvestState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // step 1: estimate gas
        const config = {
            from: account,
            value: (0,base_src/* toFixed */.FH)(token.type === types/* EthereumTokenType.Native */.Dr.Native ? amount : 0)
        };
        const deposit = ()=>{
            return pool?.poolType === dHEDGE_types/* PoolType.v1 */.W4.v1 ? poolV1Contract.methods.deposit(amount) : poolV2Contract.methods.deposit(token.address, amount);
        };
        const estimatedGas = await deposit().estimateGas(config).catch((error)=>{
            setInvestState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error
            });
            throw error;
        });
        // step 2: blocking
        return new Promise((resolve, reject)=>{
            deposit().send({
                ...config,
                gas: estimatedGas
            }).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setInvestState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setInvestState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        pool,
        account,
        amount,
        token
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setInvestState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        investState,
        investCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var dHEDGE_messages = __webpack_require__(79649);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx





















const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
function InvestDialog() {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = useStyles();
    const [id] = (0,react.useState)(v4/* default */.Z);
    const [pool, setPool] = (0,react.useState)();
    const [token, setToken] = (0,react.useState)();
    const [allowedTokens, setAllowedTokens] = (0,react.useState)();
    // context
    const account = (0,useAccount/* useAccount */.m)();
    // #region remote controlled dialog
    const { open , closeDialog  } = (0,src/* useRemoteControlledDialog */.F$)(dHEDGE_messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setPool(ev.pool);
        setAllowedTokens(ev.tokens);
    });
    const onClose = (0,react.useCallback)(()=>{
        setPool(undefined);
        setAllowedTokens([]);
        setToken(undefined);
        closeDialog();
    }, [
        closeDialog
    ]);
    // #endregion
    // #region select token
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: true,
            whitelist: allowedTokens
        });
        if (picked) setToken(picked);
    }, [
        pickToken,
        token?.address,
        allowedTokens
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,base_src/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , retry: retryLoadTokenBalance ,  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, token?.address ?? '');
    // #endregion
    // #region blocking
    const [investState, investCallback, resetInvestCallback] = useInvestCallback(pool, amount.toFixed(), token);
    // #endregion
    // #region Swap
    const { setDialog: openSwapDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            retryLoadTokenBalance();
        }
    }, [
        retryLoadTokenBalance
    ]));
    const openSwap = (0,react.useCallback)(()=>{
        if (!token) return;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.address,
                    name: token.name ?? '',
                    symbol: token.symbol ?? '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, [
        token,
        openSwapDialog
    ]);
    // #endregion
    // #region transaction dialog
    const cashTag = (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
    const shareText = token ? [
        `I just invested ${(0,formatter/* formatBalance */.az)(amount, token.decimals)} ${cashTag}${token.symbol} in ${pool?.name}. ${(0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? `Follow @${(0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')} (mask.io) to invest dHEDGE pools.` : ''}`,
        '#mask_io', 
    ].join('\n') : '';
    // on close transaction dialog
    const { setDialog: setTransactionDialogOpen  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            retryLoadTokenBalance();
            if (investState.type === types/* TransactionStateType.HASH */.n$.HASH) onClose();
        }
        if (investState.type === types/* TransactionStateType.HASH */.n$.HASH) setRawAmount('');
        resetInvestCallback();
    }, [
        id,
        investState,
        retryLoadTokenBalance,
        retryLoadTokenBalance,
        onClose
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!token || !pool) return;
        if (investState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        setTransactionDialogOpen({
            open: true,
            shareText,
            state: investState,
            summary: `Investing ${(0,formatter/* formatBalance */.az)(amount, token.decimals)}${token.symbol} on ${pool?.name} pool.`
        });
    }, [
        investState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    // #region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if (!amount || amount.isZero()) return t('plugin_dhedge_enter_an_amount');
        if (amount.isGreaterThan(tokenBalance)) return t('plugin_dhedge_insufficient_balance', {
            symbol: token?.symbol
        });
        return '';
    }, [
        account,
        amount.toFixed(),
        token,
        tokenBalance
    ]);
    // #endregion
    if (!pool) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: pool.name,
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
                            balance: tokenBalance ?? '0',
                            token: token,
                            onAmountChange: setRawAmount,
                            SelectTokenChip: {
                                loading: loadingTokenBalance,
                                ChipProps: {
                                    onClick: onSelectTokenChipClick
                                }
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                        children: (0,base_src/* isZero */.Fr)(tokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: openSwap,
                            variant: "contained",
                            loading: loadingTokenBalance,
                            children: t('plugin_dhedge_buy_token', {
                                symbol: token?.symbol
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: pool.address,
                            token: token?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                disabled: !!validationMessage,
                                onClick: investCallback,
                                variant: "contained",
                                loading: loadingTokenBalance,
                                children: validationMessage || t('plugin_dhedge_invest')
                            })
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 66861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rY": () => (/* binding */ useDHedgePoolManagerContract),
  "y5": () => (/* binding */ useDHedgePoolV1Contract),
  "eN": () => (/* binding */ useDHedgePoolV2Contract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/DHedgePoolV1.json
const DHedgePoolV1_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"bytes32","name":"assetKey","type":"bytes32"}],"name":"AssetAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"bytes32","name":"assetKey","type":"bytes32"}],"name":"AssetRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"valueDeposited","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundTokensReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalInvestorFundTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"bytes32","name":"sourceKey","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"sourceAmount","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"destinationKey","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"destinationAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"available","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"daoFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"managerFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPriceAtLastFeeMint","type":"uint256"}],"name":"ManagerFeeMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"numerator","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"ManagerFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newManager","type":"address"},{"indexed":false,"internalType":"string","name":"newManagerName","type":"string"}],"name":"ManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPoolPrivate","type":"bool"}],"name":"PoolPrivacyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"valueWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundTokensWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalInvestorFundTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"addMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"}],"name":"addMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"addressResolver","outputs":[{"internalType":"contract IAddressResolver","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"assetPosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newManager","type":"address"},{"internalType":"string","name":"newManagerName","type":"string"}],"name":"changeManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"isMemberAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"managerName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"persistentAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privatePool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"removeMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"}],"name":"removeMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supportedAssets","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPriceAtLastFeeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"bool","name":"_privatePool","type":"bool"},{"internalType":"address","name":"_manager","type":"address"},{"internalType":"string","name":"_managerName","type":"string"},{"internalType":"string","name":"_fundName","type":"string"},{"internalType":"contract IAddressResolver","name":"_addressResolver","type":"address"},{"internalType":"bytes32[]","name":"_supportedAssets","type":"bytes32[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_privatePool","type":"bool"}],"name":"setPoolPrivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getAssetProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"isAssetSupported","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"validateAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"addToSupportedAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeFromSupportedAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"numberOfSupportedAssets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"sourceKey","type":"bytes32"},{"internalType":"uint256","name":"sourceAmount","type":"uint256"},{"internalType":"bytes32","name":"destinationKey","type":"bytes32"}],"name":"exchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalFundValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"assetValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_susdAmount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundTokenAmount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundTokenAmount","type":"uint256"}],"name":"forfeitSuspendedSynthsAndWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getFundSummary","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSupportedAssets","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFundComposition","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWaitingPeriods","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSuspendedAssets","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"},{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"availableManagerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintManagerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getManagerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"}],"name":"setManagerFeeNumerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getExitFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExitFeeCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"getExitFeeRemainingCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/DHedgePoolV2.json
const DHedgePoolV2_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"address","name":"assetDeposited","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountDeposited","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valueDeposited","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundTokensReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalInvestorFundTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"available","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"daoFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"managerFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPriceAtLastFeeMint","type":"uint256"}],"name":"ManagerFeeMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"poolManagerLogic","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"}],"name":"PoolManagerLogicSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"isPoolPrivate","type":"bool"}],"name":"PoolPrivacyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"pool","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint8","name":"transactionType","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"TransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"investor","type":"address"},{"indexed":false,"internalType":"uint256","name":"valueWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundTokensWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalInvestorFundTokens","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fundValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalSupply","type":"uint256"},{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"withdrawProcessed","type":"bool"}],"indexed":false,"internalType":"struct PoolLogic.WithdrawnAsset[]","name":"withdrawnAssets","type":"tuple[]"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableManagerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_asset","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"execTransaction","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExitCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"getExitRemainingCooldown","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFundSummary","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"bool","name":"_privatePool","type":"bool"},{"internalType":"string","name":"_fundName","type":"string"},{"internalType":"string","name":"_fundSymbol","type":"string"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"isMemberAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"managerName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintManagerFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolManagerLogic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"privatePool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolManagerLogic","type":"address"}],"name":"setPoolManagerLogic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_privatePool","type":"bool"}],"name":"setPoolPrivate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPriceAtLastFeeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fundTokenAmount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/DHedgePoolManager.json
const DHedgePoolManager_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"bool","name":"isDeposit","type":"bool"}],"name":"AssetAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"address","name":"asset","type":"address"}],"name":"AssetRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newNumerator","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"announcedFeeActivationTime","type":"uint256"}],"name":"ManagerFeeIncreaseAnnounced","type":"event"},{"anonymous":false,"inputs":[],"name":"ManagerFeeIncreaseRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fundAddress","type":"address"},{"indexed":false,"internalType":"address","name":"manager","type":"address"},{"indexed":false,"internalType":"uint256","name":"numerator","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"denominator","type":"uint256"}],"name":"ManagerFeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newManager","type":"address"},{"indexed":false,"internalType":"string","name":"newManagerName","type":"string"}],"name":"ManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"poolLogic","type":"address"},{"indexed":false,"internalType":"address","name":"from","type":"address"}],"name":"PoolLogicSet","type":"event"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"addMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"}],"name":"addMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"}],"name":"announceManagerFeeIncrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"announcedFeeIncreaseNumerator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"announcedFeeIncreaseTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"assetBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"assetPosition","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"assetValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"assetValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"isDeposit","type":"bool"}],"internalType":"struct IHasSupportedAsset.Asset[]","name":"_addAssets","type":"tuple[]"},{"internalType":"address[]","name":"_removeAssets","type":"address[]"}],"name":"changeAssets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newManager","type":"address"},{"internalType":"string","name":"newManagerName","type":"string"}],"name":"changeManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"commitManagerFeeIncrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDepositAssets","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFundComposition","outputs":[{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"isDeposit","type":"bool"}],"internalType":"struct IHasSupportedAsset.Asset[]","name":"assets","type":"tuple[]"},{"internalType":"uint256[]","name":"balances","type":"uint256[]"},{"internalType":"uint256[]","name":"rates","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getManagerFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getManagerFeeIncreaseInfo","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMembers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSupportedAssets","outputs":[{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"isDeposit","type":"bool"}],"internalType":"struct IHasSupportedAsset.Asset[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_manager","type":"address"},{"internalType":"string","name":"_managerName","type":"string"},{"internalType":"address","name":"_poolLogic","type":"address"},{"components":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"isDeposit","type":"bool"}],"internalType":"struct IHasSupportedAsset.Asset[]","name":"_supportedAssets","type":"tuple[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"isDepositAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"isMemberAllowed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"isSupportedAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"manager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"managerName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfMembers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLogic","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"member","type":"address"}],"name":"removeMember","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"members","type":"address[]"}],"name":"removeMembers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"removeTrader","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceManagerFeeIncrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator","type":"uint256"}],"name":"setManagerFeeNumerator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolLogic","type":"address"}],"name":"setPoolLogic","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newTrader","type":"address"}],"name":"setTrader","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supportedAssets","outputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"isDeposit","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFundValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trader","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"validateAsset","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts




function useDHedgePoolV1Contract(address) {
    return (0,useContract/* useContract */.cq)(address, DHedgePoolV1_namespaceObject);
}
function useDHedgePoolV2Contract(address) {
    return (0,useContract/* useContract */.cq)(address, DHedgePoolV2_namespaceObject);
}
function useDHedgePoolManagerContract(address) {
    return (0,useContract/* useContract */.cq)(address, DHedgePoolManager_namespaceObject);
}


/***/ }),

/***/ 79649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PluginDHedgeMessages),
/* harmony export */   "t": () => (/* binding */ PluginDHedgeRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5199);


const PluginDHedgeMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc);
const PluginDHedgeRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc, ()=>__webpack_require__.e(/* import() */ 7907).then(__webpack_require__.bind(__webpack_require__, 67907))
, PluginDHedgeMessages.rpc);


/***/ }),

/***/ 38618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W4": () => (/* binding */ PoolType),
/* harmony export */   "Xp": () => (/* binding */ BlockchainCode),
/* harmony export */   "pH": () => (/* binding */ Period)
/* harmony export */ });
var PoolType;
(function(PoolType) {
    PoolType["v1"] = 'V1.0';
    PoolType["v2"] = 'V2.0';
})(PoolType || (PoolType = {}));
var BlockchainCode;
(function(BlockchainCode) {
    BlockchainCode["ethereum"] = 'ETH';
    BlockchainCode["polygon"] = 'POLYGON';
})(BlockchainCode || (BlockchainCode = {}));
var Period;
(function(Period) {
    Period["D1"] = '1d';
    Period["W1"] = '1w';
    Period["M1"] = '1m';
    Period["M3"] = '3m';
    Period["M6"] = '6m';
})(Period || (Period = {}));


/***/ }),

/***/ 44632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/once.js + 1 modules
var once = __webpack_require__(56898);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC20TokenContract.ts
var useERC20TokenContract = __webpack_require__(91690);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(15226);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(58498);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(89260);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC20TokenApproveCallback.ts









const MaxUint256 = (0,src/* toFixed */.FH)('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
var ApproveStateType;
(function(ApproveStateType) {
    ApproveStateType[ApproveStateType["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType[ApproveStateType["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType[ApproveStateType["UPDATING"] = 2] = "UPDATING";
    ApproveStateType[ApproveStateType["PENDING"] = 3] = "PENDING";
    ApproveStateType[ApproveStateType["APPROVED"] = 4] = "APPROVED";
    ApproveStateType[ApproveStateType["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const account = (0,useAccount/* useAccount */.m)();
    const erc20Contract = (0,useERC20TokenContract/* useERC20TokenContract */.x)(address);
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)(address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(address, spender);
    // the computed approve state
    const approveStateType = (0,react.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        if (transactionState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING) return ApproveStateType.PENDING;
        return (0,src/* isLessThan */.FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        transactionState.type, 
    ]);
    const approveCallback = (0,react.useCallback)(async (useExact = false)=>{
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            setTransactionState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Failed to approve token.')
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
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const revalidate = (0,once/* default */.Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setTransactionState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                revalidate();
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                revalidate();
                reject(error);
            });
        });
    }, [
        account,
        amount,
        balance,
        spender,
        loadingAllowance,
        loadingBalance,
        erc20Contract,
        approveStateType
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
        setTransactionState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        transactionState,
        approveCallback,
        resetCallback, 
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5),
            lineHeight: 1,
            justifyContent: 'center',
            alignItems: 'center'
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
        },
        children: {
            marginTop: 8,
            width: '100%'
        }
    })
);
function EthereumERC20TokenApprovedBoundary(props) {
    const { amount , spender , token , children =null , render , fallback , infiniteUnlockContent , onlyInfiniteUnlock =false , withChildren =false ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = useERC20TokenApproveCallback(token?.address ?? '', amount, spender);
    const onApprove = (0,react.useCallback)(async (useExact = false)=>{
        if (approveStateType !== ApproveStateType.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : children
    });
    if (approveStateType === ApproveStateType.UNKNOWN) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: fallback ?? 'Enter an amount'
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.FAILED) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                onClick: resetApproveCallback,
                ...props.ActionButtonProps,
                children: t('wallet_load_retry', {
                    symbol: (token.symbol ?? token.name) ?? 'Token'
                })
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.NOT_APPROVED) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: 2,
                children: [
                    !onlyInfiniteUnlock ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(true)
                            ,
                            ...props.ActionButtonProps,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    className: classes.buttonLabel,
                                    children: t('plugin_wallet_token_unlock')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.buttonAmount,
                                    children: [
                                        (0,formatter/* formatBalance */.az)(amount, token.decimals, 2),
                                        " ",
                                        token?.symbol ?? 'Token'
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: onlyInfiniteUnlock ? 12 : 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(false)
                            ,
                            ...props.ActionButtonProps,
                            children: infiniteUnlockContent ?? t('plugin_wallet_token_infinite_unlock')
                        })
                    })
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === ApproveStateType.PENDING || approveStateType === ApproveStateType.UPDATING) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
            className: classes.button,
            fullWidth: true,
            variant: "contained",
            size: "large",
            disabled: true,
            ...props.ActionButtonProps,
            children: [
                approveStateType === ApproveStateType.PENDING ? t('plugin_ito_unlocking_symbol', {
                    symbol: token.symbol
                }) : `Updating ${token.symbol}`,
                "\u2026"
            ]
        })
    });
    if (approveStateType === ApproveStateType.APPROVED) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: render ? render(false) : typeof children === 'function' ? children(allowance) : children
    });
    (0,esm/* unreachable */.t1)(approveStateType);
}


/***/ }),

/***/ 52599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(84797);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(43369);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed ?? false)
        );
    };
    const { openDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openSelectProviderDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_connect_a_wallet')
        })
    });
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.connectWallet),
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: openRiskWarningDialog,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_confirm_risk_warning')
        })
    });
    if ((0,base_src/* isZero */.Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.gasFeeButton),
            disabled: !nativeTokenBalance.error,
            fullWidth: true,
            variant: "contained",
            size: "large",
            onClick: nativeTokenBalance.retry,
            ...props.ActionButtonProps,
            children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
        })
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.invalidButton),
            disabled: true,
            fullWidth: true,
            variant: "contained",
            size: "large",
            ...props.ActionButtonProps,
            children: t('plugin_wallet_invalid_network')
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    });
}


/***/ }),

/***/ 79154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(29579);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(53852);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
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
            name: token.name,
            logoURI: token.logoURI
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
            logoURI: token.logoURI
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
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(TokenAmountPanel_useStyles(), props);
    const { Utils  } = (0,entry_web3/* useWeb3State */.dM)();
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
        value: amount,
        variant: "outlined",
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
                                formatter: Utils?.formatBalance
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
                                    onAmountChange(Utils?.formatBalance?.(new (bignumber_default())(maxAmount ?? balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals) ?? '0');
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


/***/ }),

/***/ 15226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useERC20TokenAllowance)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89260);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91690);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10372);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31174);




function useERC20TokenAllowance(address, spender) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !spender || !erc20Contract) return '0';
        return erc20Contract.methods.allowance(account, spender).call({
            from: account
        });
    }, 30 * 1000, [
        account,
        chainId,
        spender,
        erc20Contract
    ]);
}


/***/ }),

/***/ 58498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89260);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10372);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91690);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31174);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId ?? defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 52813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58498);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43369);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)(chainId);
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

/***/ 43369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64452);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10372);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6974);



/**
 * Fetch native token balance from chain
 */ function useNativeTokenBalance(chainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)(chainId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 29812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33703);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 33703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable),
/* harmony export */   "ir": () => (/* binding */ isFinalState)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65506);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ })

}]);