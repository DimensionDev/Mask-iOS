"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4485],{

/***/ 62323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71765);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(5480)]).then(__webpack_require__.bind(__webpack_require__, 88105))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 4485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ InvestDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83071);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(65164);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(77016);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(30540);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(35313);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(54800);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(68091);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useInvestCallback.ts





/**
 * A callback for invest dhedge pool
 * @param pool the pool
 * @param amount
 * @param token
 */ function useInvestCallback(pool, amount, token) {
    var ref;
    const poolV1Contract = (0,useDHedgePool/* useDHedgePoolV1Contract */.y5)((ref = pool === null || pool === void 0 ? void 0 : pool.address) !== null && ref !== void 0 ? ref : '');
    var ref1;
    const poolV2Contract = (0,useDHedgePool/* useDHedgePoolV2Contract */.eN)((ref1 = pool === null || pool === void 0 ? void 0 : pool.address) !== null && ref1 !== void 0 ? ref1 : '');
    const account = (0,src/* useAccount */.mAM)();
    const nonce = (0,src/* useNonce */.XEd)();
    const gasPrice = (0,src/* useGasPrice */.Fh$)();
    const [investState, setInvestState] = (0,src/* useTransactionState */.pld)();
    const investCallback = (0,react.useCallback)(async ()=>{
        if (!token || !poolV1Contract || !poolV2Contract) {
            setInvestState({
                type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // pre-step: start waiting for provider to confirm tx
        setInvestState({
            type: src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // step 1: estimate gas
        const config = {
            from: account,
            value: new (bignumber_default())(token.type === src/* EthereumTokenType.Native */.Drc.Native ? amount : 0).toFixed(),
            gasPrice,
            nonce
        };
        const deposit = ()=>{
            return (pool === null || pool === void 0 ? void 0 : pool.poolType) === types/* PoolType.v1 */.W4.v1 ? poolV1Contract.methods.deposit(amount) : poolV2Contract.methods.deposit(token.address, amount);
        };
        const estimatedGas = await deposit().estimateGas(config).catch((error)=>{
            setInvestState({
                type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                error
            });
            throw error;
        });
        // step 2: blocking
        return new Promise((resolve, reject)=>{
            const promiEvent = deposit().send({
                ...config,
                gas: estimatedGas
            });
            promiEvent.on(src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setInvestState({
                    type: src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve(hash);
            }).on(src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setInvestState({
                    type: src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        gasPrice,
        nonce,
        pool,
        account,
        amount,
        token
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setInvestState({
            type: src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        investState,
        investCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var dHEDGE_messages = __webpack_require__(17006);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx




















const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    var _utils, ref;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = useStyles();
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const [pool, setPool] = (0,react.useState)();
    const [token, setToken] = (0,react.useState)();
    const [allowedTokens, setAllowedTokens] = (0,react.useState)();
    // context
    const account = (0,src/* useAccount */.mAM)();
    //#region remote controlled dialog
    const { open , closeDialog  } = (0,shared_src.useRemoteControlledDialog)(dHEDGE_messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated, (ev)=>{
        if (ev.open) {
            setPool(ev.pool);
            setAllowedTokens(ev.tokens);
        }
    });
    const onClose = (0,react.useCallback)(()=>{
        setPool(undefined);
        setAllowedTokens([]);
        setToken(undefined);
        closeDialog();
    }, [
        closeDialog
    ]);
    //#endregion
    //#region select token
    const { setDialog: setSelectTokenDialogOpen  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        setSelectTokenDialogOpen({
            open: true,
            uuid: id,
            disableNativeToken: true,
            FixedTokenListProps: {
                whitelist: allowedTokens
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address,
        allowedTokens
    ]);
    //#endregion
    //#region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    var ref1;
    const amount = new (bignumber_default())(rawAmount || '0').multipliedBy((0,src/* pow10 */.wAG)((ref1 = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref1 !== void 0 ? ref1 : 0));
    var ref2, ref3;
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , retry: retryLoadTokenBalance ,  } = (0,src/* useTokenBalance */.mMq)((ref2 = token === null || token === void 0 ? void 0 : token.type) !== null && ref2 !== void 0 ? ref2 : src/* EthereumTokenType.Native */.Drc.Native, (ref3 = token === null || token === void 0 ? void 0 : token.address) !== null && ref3 !== void 0 ? ref3 : '');
    //#endregion
    //#region blocking
    const [investState, investCallback, resetInvestCallback] = useInvestCallback(pool, amount.toFixed(), token);
    //#endregion
    //#region Swap
    const { setDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            retryLoadTokenBalance();
        }
    }, [
        retryLoadTokenBalance
    ]));
    const openSwap = (0,react.useCallback)(()=>{
        if (!token) return;
        var _name, _symbol;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.address,
                    name: (_name = token.name) !== null && _name !== void 0 ? _name : '',
                    symbol: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, [
        token,
        openSwapDialog
    ]);
    //#endregion
    //#region transaction dialog
    const cashTag = (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? '$' : '';
    const shareLink = (ref = (_utils = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, token ? [
        `I just invested ${(0,src/* formatBalance */.azF)(amount, token.decimals)} ${cashTag}${token.symbol} in ${pool === null || pool === void 0 ? void 0 : pool.name}. Follow @realMaskbook (mask.io) to invest dHEDGE pools.`,
        '#mask_io', 
    ].join('\n') : '').toString();
    // on close transaction dialog
    const { setDialog: setTransactionDialogOpen  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            retryLoadTokenBalance();
            openSwapDialog({
                open: false
            });
            if (investState.type === src/* TransactionStateType.HASH */.n$V.HASH) onClose();
        }
        if (investState.type === src/* TransactionStateType.HASH */.n$V.HASH) setRawAmount('');
        resetInvestCallback();
    }, [
        id,
        investState,
        openSwapDialog,
        retryLoadTokenBalance,
        retryLoadTokenBalance,
        onClose
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!token || !pool) return;
        if (investState.type === src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setTransactionDialogOpen({
            open: true,
            shareLink,
            state: investState,
            summary: `Investing ${(0,src/* formatBalance */.azF)(amount, token.decimals)}${token.symbol} on ${pool === null || pool === void 0 ? void 0 : pool.name} pool.`
        });
    }, [
        investState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    //#region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if (!amount || amount.isZero()) return t('plugin_dhedge_enter_an_amount');
        if (amount.isGreaterThan(tokenBalance)) return t('plugin_dhedge_insufficient_balance', {
            symbol: token === null || token === void 0 ? void 0 : token.symbol
        });
        return '';
    }, [
        account,
        amount.toFixed(),
        token,
        tokenBalance
    ]);
    //#endregion
    if (!pool) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
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
                            balance: tokenBalance !== null && tokenBalance !== void 0 ? tokenBalance : '0',
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
                        children: (0,src/* isZero */.Fr9)(tokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: openSwap,
                            variant: "contained",
                            loading: loadingTokenBalance,
                            children: t('plugin_dhedge_buy_token', {
                                symbol: token === null || token === void 0 ? void 0 : token.symbol
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: pool.address,
                            token: (token === null || token === void 0 ? void 0 : token.type) === src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? token : undefined,
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
    }));
}


/***/ }),

/***/ 54800:
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
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts




function useDHedgePoolV1Contract(address) {
    return (0,src/* useContract */.cqn)(address, DHedgePoolV1_namespaceObject);
}
function useDHedgePoolV2Contract(address) {
    return (0,src/* useContract */.cqn)(address, DHedgePoolV2_namespaceObject);
}
function useDHedgePoolManagerContract(address) {
    return (0,src/* useContract */.cqn)(address, DHedgePoolManager_namespaceObject);
}


/***/ }),

/***/ 17006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PluginDHedgeMessages),
/* harmony export */   "t": () => (/* binding */ PluginDHedgeRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54567);


const PluginDHedgeMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc);
const PluginDHedgeRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc, ()=>__webpack_require__.e(/* import() */ 594).then(__webpack_require__.bind(__webpack_require__, 70594))
, PluginDHedgeMessages.rpc);


/***/ }),

/***/ 68091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W4": () => (/* binding */ PoolType),
/* harmony export */   "Xp": () => (/* binding */ BlockchainCode),
/* harmony export */   "pH": () => (/* binding */ Period)
/* harmony export */ });
var PoolType;
(function(PoolType1) {
    PoolType1["v1"] = 'V1.0';
    PoolType1["v2"] = 'V2.0';
})(PoolType || (PoolType = {
}));
var BlockchainCode;
(function(BlockchainCode1) {
    BlockchainCode1["ethereum"] = 'ETH';
    BlockchainCode1["polygon"] = 'POLYGON';
})(BlockchainCode || (BlockchainCode = {
}));
var Period;
(function(Period1) {
    Period1["D1"] = '1d';
    Period1["W1"] = '1w';
    Period1["M1"] = '1m';
    Period1["M3"] = '3m';
    Period1["M6"] = '6m';
})(Period || (Period = {
}));


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

/***/ 30540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ TokenAmountPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(90874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Error.js
var Error = __webpack_require__(98010);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/web3/UI/SelectTokenChip.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classnames_default()(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    }));
    if (!token) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        label: t('plugin_gitcoin_select_a_token'),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    }));
    if (token && error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
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
        onDelete: lodash.noop,
        ...ChipProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        className: classes.chip,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
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
        onDelete: readonly ? undefined : lodash.noop,
        ...ChipProps
    }));
}

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/web3/UI/TokenAmountPanel.tsx










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const TokenAmountPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
        },
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '-moz-appearance': 'textfield'
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
    var ref;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(TokenAmountPanel_useStyles(), props);
    //#region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
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
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6
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
                                    root: classnames_default()(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref = MaxChipProps.classes) === null || ref === void 0 ? void 0 : ref.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    onAmountChange((0,web3_shared_src/* formatBalance */.azF)(new (bignumber_default())(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals));
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
    }));
}


/***/ })

}]);