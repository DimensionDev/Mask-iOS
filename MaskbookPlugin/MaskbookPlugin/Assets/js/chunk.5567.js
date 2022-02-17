"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8381],{

/***/ 88381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ DepositDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
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
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(31682);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts + 1 modules
var usePoolTogetherPool = __webpack_require__(85902);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/useDepositCallback.ts




/**
 * A callback for deposit into pool
 * @param address the pool address
 * @param amount
 * @param controlledToken the ticket token address
 * @param referrer
 * @param token deposit token
 */ function useDepositCallback(address, amount, controlledToken, referrer, token) {
    const poolContract = (0,usePoolTogetherPool/* usePoolTogetherPoolContract */.T)(address);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const nonce = (0,web3_shared_src/* useNonce */.XEd)();
    const gasPrice = (0,web3_shared_src/* useGasPrice */.Fh$)();
    const [depositState, setDepositState] = (0,web3_shared_src/* useTransactionState */.pld)();
    const depositCallback = (0,react.useCallback)(async ()=>{
        if (!token || !poolContract) {
            setDepositState({
                type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
            });
            return;
        }
        // pre-step: start waiting for provider to confirm tx
        setDepositState({
            type: web3_shared_src/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$V.WAIT_FOR_CONFIRMING
        });
        // step 1: estimate gas
        const config = {
            from: account,
            value: new (bignumber_default())(token.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native ? amount : 0).toFixed(),
            gasPrice,
            nonce
        };
        const estimatedGas = await poolContract.methods.depositTo(account, amount, controlledToken, referrer).estimateGas(config).catch((error)=>{
            setDepositState({
                type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                error
            });
            throw error;
        });
        // step 2: blocking
        return new Promise((resolve, reject)=>{
            const promiEvent = poolContract.methods.depositTo(account, amount, controlledToken, referrer).send({
                ...config,
                gas: estimatedGas
            });
            promiEvent.on(web3_shared_src/* TransactionEventType.TRANSACTION_HASH */.iED.TRANSACTION_HASH, (hash)=>{
                setDepositState({
                    type: web3_shared_src/* TransactionStateType.HASH */.n$V.HASH,
                    hash
                });
                resolve(hash);
            }).on(web3_shared_src/* TransactionEventType.ERROR */.iED.ERROR, (error)=>{
                setDepositState({
                    type: web3_shared_src/* TransactionStateType.FAILED */.n$V.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        gasPrice,
        nonce,
        address,
        account,
        amount,
        token,
        referrer,
        controlledToken
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setDepositState({
            type: web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN
        });
    }, []);
    return [
        depositState,
        depositCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ./src/plugins/PoolTogether/messages.ts
var PoolTogether_messages = __webpack_require__(75597);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/utils.ts
var utils = __webpack_require__(5832);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/DepositDialog.tsx






















const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            margin: theme.spacing(2, 0),
            backgroundColor: '#1a083a'
        },
        form: {
            '& > *': {
                margin: theme.spacing(1, 0)
            }
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            padding: theme.spacing(2, 2, 0, 2)
        },
        button: {
            margin: theme.spacing(1.5, 0, 0),
            padding: 12,
            backgroundColor: '#3ef3d4'
        },
        odds: {
            textAlign: 'center',
            padding: theme.spacing(3)
        },
        oddsTitle: {
            color: '#bdb3d2'
        },
        oddsValue: {
            background: 'linear-gradient(40deg,#ff9304,#ff04ea 10%,#9b4beb 20%,#0e8dd6 30%,#0bc6df 40%,#07d464 50%,#dfd105 60%,#ff04ab 78%,#8933eb 90%,#3b89ff)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            animation: '$rainbow_animation 6s linear infinite',
            backgroundSize: '600% 600%',
            fontSize: '1.2rem'
        },
        '@keyframes rainbow_animation': {
            '0%': {
                backgroundPosition: '100% 0%'
            },
            '100%': {
                backgroundPosition: '0 100%'
            }
        }
    })
);
function DepositDialog() {
    var _utils, ref;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = useStyles();
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const [pool, setPool] = (0,react.useState)();
    const [token, setToken] = (0,react.useState)();
    const [odds, setOdds] = (0,react.useState)();
    // context
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    //#region remote controlled dialog
    const { open , closeDialog  } = (0,src.useRemoteControlledDialog)(PoolTogether_messages/* PluginPoolTogetherMessages.DepositDialogUpdated */.d.DepositDialogUpdated, (ev)=>{
        if (ev.open) {
            setPool(ev.pool);
            setToken(ev.token);
        }
    });
    const onClose = (0,react.useCallback)(()=>{
        closeDialog();
    }, [
        closeDialog
    ]);
    //#endregion
    //#region select token
    const { setDialog: setSelectTokenDialogOpen  } = (0,src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id
    ]));
    const onSelectTokenChipClick = (0,react.useCallback)(()=>{
        if (!token) return;
        setSelectTokenDialogOpen({
            open: true,
            uuid: id,
            disableNativeToken: true,
            FixedTokenListProps: {
                selectedTokens: [
                    token.address
                ],
                whitelist: [
                    token.address
                ]
            }
        });
    }, [
        id,
        token === null || token === void 0 ? void 0 : token.address
    ]);
    //#endregion
    //#region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    var ref1;
    const amount = new (bignumber_default())(rawAmount || '0').multipliedBy((0,web3_shared_src/* pow10 */.wAG)((ref1 = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref1 !== void 0 ? ref1 : 0));
    var ref2, ref3;
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , retry: retryLoadTokenBalance ,  } = (0,web3_shared_src/* useTokenBalance */.mMq)((ref2 = token === null || token === void 0 ? void 0 : token.type) !== null && ref2 !== void 0 ? ref2 : web3_shared_src/* EthereumTokenType.Native */.Drc.Native, (ref3 = token === null || token === void 0 ? void 0 : token.address) !== null && ref3 !== void 0 ? ref3 : '');
    //#endregion
    (0,react.useEffect)(()=>{
        setOdds(pool ? (0,utils/* calculateOdds */.Gb)(Number.parseFloat(rawAmount), Number.parseFloat(pool.tokens.ticket.totalSupply), Number.parseInt(pool.config.numberOfWinners, 10)) : undefined);
    }, [
        rawAmount
    ]);
    var _address, _address1;
    //#region blocking
    const [depositState, depositCallback, resetDepositCallback] = useDepositCallback((_address = pool === null || pool === void 0 ? void 0 : pool.prizePool.address) !== null && _address !== void 0 ? _address : '', amount.toFixed(), (_address1 = pool === null || pool === void 0 ? void 0 : pool.tokens.ticket.address) !== null && _address1 !== void 0 ? _address1 : '', constants/* ADDRESS_ZERO */.je, token);
    //#endregion
    //#region Swap
    const { setDialog: openSwapDialog  } = (0,src.useRemoteControlledDialog)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated, (0,react.useCallback)((ev)=>{
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
    var ref4;
    const shareLink = (ref = (_utils = social_network.activatedSocialNetworkUI.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, token ? t('plugin_pooltogether_share', {
        amount: rawAmount,
        cashTag: cashTag,
        symbol: token.symbol,
        pool: (ref4 = pool === null || pool === void 0 ? void 0 : pool.name) !== null && ref4 !== void 0 ? ref4 : `${pool === null || pool === void 0 ? void 0 : pool.tokens.underlyingToken.symbol} Pool`
    }) : '').toString();
    // on close transaction dialog
    const { setDialog: setTransactionDialogOpen  } = (0,src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (0,react.useCallback)((ev)=>{
        if (!ev.open) {
            retryLoadTokenBalance();
            openSwapDialog({
                open: false
            });
            if (depositState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) onClose();
        }
        if (depositState.type === web3_shared_src/* TransactionStateType.HASH */.n$V.HASH) setRawAmount('');
        resetDepositCallback();
    }, [
        id,
        depositState,
        openSwapDialog,
        retryLoadTokenBalance,
        retryLoadTokenBalance,
        onClose
    ]));
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!token || !pool) return;
        if (depositState.type === web3_shared_src/* TransactionStateType.UNKNOWN */.n$V.UNKNOWN) return;
        setTransactionDialogOpen({
            open: true,
            shareLink,
            state: depositState,
            summary: `Depositing ${(0,web3_shared_src/* formatBalance */.azF)(amount, token.decimals)}${token.symbol} on ${pool === null || pool === void 0 ? void 0 : pool.name} pool.`
        });
    }, [
        depositState /* update tx dialog only if state changed */ 
    ]);
    //#endregion
    //#region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if (!amount || amount.isZero()) return t('plugin_pooltogether_enter_an_amount');
        if (amount.isGreaterThan(tokenBalance)) return t('plugin_pooltogether_insufficient_balance', {
            symbol: token === null || token === void 0 ? void 0 : token.symbol
        });
        return '';
    }, [
        account,
        amount.toFixed(),
        token,
        tokenBalance
    ]);
    var _prizePeriodSeconds;
    //#endregion
    const prizePeriodSeconds = Number.parseInt((_prizePeriodSeconds = pool === null || pool === void 0 ? void 0 : pool.config.prizePeriodSeconds) !== null && _prizePeriodSeconds !== void 0 ? _prizePeriodSeconds : '', 10);
    if (!token || !pool) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            onClose: onClose,
            title: t('plugin_pooltogether_deposit_title', {
                token: token.symbol
            }),
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
                        children: (0,web3_shared_src/* isZero */.Fr9)(tokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: openSwap,
                            variant: "contained",
                            loading: loadingTokenBalance,
                            children: t('plugin_pooltogether_buy', {
                                symbol: token.symbol
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: pool.prizePool.address,
                            token: (token === null || token === void 0 ? void 0 : token.type) === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                disabled: !!validationMessage,
                                onClick: depositCallback,
                                variant: "contained",
                                loading: loadingTokenBalance,
                                children: validationMessage || t('plugin_pooltogether_deposit')
                            })
                        })
                    }),
                    odds ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        className: classes.odds,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    fontWeight: "fontWeightBold",
                                    className: classes.oddsTitle,
                                    children: t('plugin_pooltogether_odds_title')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    fontWeight: "fontWeightBold",
                                    className: classes.oddsValue,
                                    children: t('plugin_pooltogether_odds_value', {
                                        value: odds.toLocaleString(),
                                        period: (0,utils/* getPrizePeriod */.fe)(t, prizePeriodSeconds)
                                    })
                                })
                            })
                        ]
                    }) : null
                ]
            })
        })
    }));
}


/***/ }),

/***/ 85902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ usePoolTogetherPoolContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherPool.json
const PoolTogetherPool_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AwardCaptured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Awarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AwardedExternalERC20","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"AwardedExternalERC721","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract ControlledTokenInterface","name":"token","type":"address"}],"name":"ControlledTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CreditBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CreditMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint128","name":"creditLimitMantissa","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"creditRateMantissa","type":"uint128"}],"name":"CreditPlanSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserveRegistry","type":"address"},{"indexed":false,"internalType":"uint256","name":"maxExitFeeMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxTimelockDuration","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"exitFee","type":"uint256"}],"name":"InstantWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liquidityCap","type":"uint256"}],"name":"LiquidityCapSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"prizeStrategy","type":"address"}],"name":"PrizeStrategySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveFeeCaptured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeToken","type":"address"}],"name":"StakePrizePoolInitialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TimelockDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTimestamp","type":"uint256"}],"name":"TimelockedWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemed","type":"uint256"}],"name":"TimelockedWithdrawalSwept","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferredExternalERC20","type":"event"},{"inputs":[],"name":"accountedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"awardBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"awardExternalERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"awardExternalERC721","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"balanceOfCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"beforeTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateEarlyExitFee","outputs":[{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint256","name":"burnedCredit","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateReserveFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateTimelockDuration","outputs":[{"internalType":"uint256","name":"durationSeconds","type":"uint256"},{"internalType":"uint256","name":"burnedCredit","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_externalToken","type":"address"}],"name":"canAwardExternal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"captureAwardBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICompLike","name":"compLike","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"compLikeDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"controlledToken","type":"address"}],"name":"creditPlanOf","outputs":[{"internalType":"uint128","name":"creditLimitMantissa","type":"uint128"},{"internalType":"uint128","name":"creditRateMantissa","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"name":"depositTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_controlledToken","type":"address"},{"internalType":"uint256","name":"_principal","type":"uint256"},{"internalType":"uint256","name":"_interest","type":"uint256"}],"name":"estimateCreditAccrualTime","outputs":[{"internalType":"uint256","name":"durationSeconds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract RegistryInterface","name":"_reserveRegistry","type":"address"},{"internalType":"contract ControlledTokenInterface[]","name":"_controlledTokens","type":"address[]"},{"internalType":"uint256","name":"_maxExitFeeMantissa","type":"uint256"},{"internalType":"uint256","name":"_maxTimelockDuration","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract RegistryInterface","name":"_reserveRegistry","type":"address"},{"internalType":"contract ControlledTokenInterface[]","name":"_controlledTokens","type":"address[]"},{"internalType":"uint256","name":"_maxExitFeeMantissa","type":"uint256"},{"internalType":"uint256","name":"_maxTimelockDuration","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"_stakeToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidityCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxExitFeeMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTimelockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizeStrategy","outputs":[{"internalType":"contract TokenListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveRegistry","outputs":[{"internalType":"contract RegistryInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_controlledToken","type":"address"},{"internalType":"uint128","name":"_creditRateMantissa","type":"uint128"},{"internalType":"uint128","name":"_creditLimitMantissa","type":"uint128"}],"name":"setCreditPlanOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityCap","type":"uint256"}],"name":"setLiquidityCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract TokenListenerInterface","name":"_prizeStrategy","type":"address"}],"name":"setPrizeStrategy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"sweepTimelockBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"timelockBalanceAvailableAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"timelockBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"timelockDepositTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timelockTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferExternalERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"maximumExitFee","type":"uint256"}],"name":"withdrawInstantlyFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"withdrawWithTimelockFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts


function usePoolTogetherPoolContract(address) {
    return (0,src/* useContract */.cqn)(address, PoolTogetherPool_namespaceObject);
}


/***/ }),

/***/ 75597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ PluginPoolTogetherMessages),
/* harmony export */   "K": () => (/* binding */ PluginPooltogetherRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31682);


/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginPoolTogetherMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .POOLTOGETHER_PLUGIN_ID */ .hD);
const PluginPooltogetherRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .POOLTOGETHER_PLUGIN_ID */ .hD, ()=>__webpack_require__.e(/* import() */ 3403).then(__webpack_require__.bind(__webpack_require__, 63403))
, PluginPoolTogetherMessages.rpc);


/***/ }),

/***/ 5832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gb": () => (/* binding */ calculateOdds),
/* harmony export */   "LL": () => (/* binding */ calculateNextPrize),
/* harmony export */   "Q": () => (/* binding */ calculateSecondsRemaining),
/* harmony export */   "xr": () => (/* binding */ getNetworkColor),
/* harmony export */   "fe": () => (/* binding */ getPrizePeriod)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31682);


const calculateOdds = (usersTicketBalance, totalSupply, numberOfWinners)=>{
    if (usersTicketBalance === 0 || Number.isNaN(usersTicketBalance)) {
        return undefined;
    }
    // Calculate odds of winning at least 1 of the possible scenarios.
    // 1/N, 2/N ... N-1/N, N/N
    // Then we always display "1 in ____" so 1 / X.
    const odds = 1 / (1 - Math.pow(totalSupply / (totalSupply + usersTicketBalance), numberOfWinners));
    return odds.toLocaleString(undefined, {
        maximumFractionDigits: odds >= 10 ? 0 : 8
    });
};
const calculateNextPrize = (pool)=>{
    const rawPrize = Number.parseInt(pool.prize.weeklyTotalValueUsd, 10) / (_constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_WEEK_SECONDS */ .JZ / Number.parseInt(pool.config.prizePeriodSeconds, 10));
    if (!Number.isNaN(rawPrize)) {
        return '$' + rawPrize.toLocaleString(undefined, {
            maximumFractionDigits: 0
        });
    } else {
        const pirzeAmount = Number.parseFloat(pool.prize.amount);
        const formattedPirzeAmount = pirzeAmount.toLocaleString(undefined, {
            maximumFractionDigits: pirzeAmount >= 10 ? 0 : 2
        });
        return `${formattedPirzeAmount} ${pool.tokens.underlyingToken.symbol}`;
    }
};
const calculateSecondsRemaining = (pool)=>{
    if (pool.prize.prizePeriodEndAt) {
        const endAt = Number.parseInt(pool.prize.prizePeriodEndAt, 10);
        return endAt - Date.now() / _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_SECOND */ .WT;
    } else {
        const startedAt = Number.parseInt(pool.prize.prizePeriodStartedAt.hex, 16);
        const seconds = Number.parseInt(pool.prize.prizePeriodSeconds.hex, 16);
        return startedAt + seconds - Date.now() / _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_SECOND */ .WT;
    }
};
const getNetworkColor = (chainId)=>{
    switch(chainId){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet:
            return '#617fea';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic:
            return '#7b41da';
        // add more if needed
        default:
            return '#f1f1f1';
    }
};
function getPrizePeriod(t, preiod) {
    if (preiod === _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_DAY_SECONDS */ .ir) {
        return t('daily');
    } else if (preiod === _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_WEEK_SECONDS */ .JZ) {
        return t('weekly');
    }
    return t('days', {
        preiod: (preiod / _constants__WEBPACK_IMPORTED_MODULE_1__/* .ONE_WEEK_SECONDS */ .JZ).toFixed()
    });
}


/***/ }),

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