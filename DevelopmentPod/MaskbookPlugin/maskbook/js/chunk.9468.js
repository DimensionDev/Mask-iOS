"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9468],{

/***/ 46222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ DepositDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(5492);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(49524);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(38329);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts + 1 modules
var usePoolTogetherPool = __webpack_require__(20386);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/useDepositCallback.ts






/**
 * A callback for deposit into pool
 * @param address the pool address
 * @param amount
 * @param controlledToken the ticket token address
 * @param referrer
 * @param token deposit token
 */ function useDepositCallback(address, amount, controlledToken, referrer, token) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const poolContract = (0,usePoolTogetherPool/* usePoolTogetherPoolContract */.T)(chainId, address);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!token || !poolContract) {
            return;
        }
        // step 1: estimate gas
        const config = {
            from: account,
            value: new (bignumber_default())(token.schema === types/* SchemaType.Native */.XQ.Native ? amount : 0).toFixed()
        };
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(poolContract, poolContract.methods.depositTo(account, amount, controlledToken, referrer), config);
        return connection.sendTransaction(tx);
    }, [
        address,
        account,
        amount,
        token,
        referrer,
        controlledToken
    ]);
}

// EXTERNAL MODULE: ./src/plugins/PoolTogether/messages.ts
var PoolTogether_messages = __webpack_require__(16888);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/utils.ts
var utils = __webpack_require__(94073);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/DepositDialog.tsx





















const rainbow_animation = entry/* keyframes */.F4`
    0% {
        background-position: 100% 0%;
    }
    100% {
        background-position: 0 100%;
    }
`;
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
            webkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: `${rainbow_animation} 6s linear infinite`,
            backgroundSize: '600% 600%',
            fontSize: '1.2rem'
        }
    })
);
function DepositDialog() {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = useStyles();
    const [pool, setPool] = (0,react.useState)();
    const [token, setToken] = (0,react.useState)();
    const [odds, setOdds] = (0,react.useState)();
    // context
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region remote controlled dialog
    const { open , closeDialog: onClose  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(PoolTogether_messages/* PluginPoolTogetherMessages.DepositDialogUpdated */.d.DepositDialogUpdated, (ev)=>{
        if (!ev.open) return;
        setPool(ev.pool);
        setToken(ev.token);
    });
    // #endregion
    // #region select token
    const pickToken = (0,src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        if (!token) return;
        const picked = await pickToken({
            disableNativeToken: true,
            selectedTokens: [
                token.address
            ],
            whitelist: [
                token.address
            ]
        });
        if (picked) setToken(picked);
    }, [
        token,
        pickToken
    ]);
    // #endregion
    // #region amount
    const [rawAmount, setRawAmount] = (0,react.useState)('');
    const amount = (0,base_src/* rightShift */.pu)(rawAmount || '0', token?.decimals);
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , retry: retryLoadTokenBalance ,  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, token?.address ?? '');
    // #endregion
    (0,react.useEffect)(()=>{
        setOdds(pool ? (0,utils/* calculateOdds */.Gb)(Number.parseFloat(rawAmount), Number.parseFloat(pool.tokens.ticket.totalSupply), Number.parseInt(pool.config.numberOfWinners, 10)) : undefined);
    }, [
        pool,
        rawAmount
    ]);
    // #region blocking
    const [{ loading: isDepositing  }, depositCallback] = useDepositCallback(pool?.prizePool.address ?? '', amount.toFixed(), pool?.tokens.ticket.address ?? '', primitives/* ZERO_ADDRESS */.r, token);
    // #endregion
    const cashTag = (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
    const shareText = token ? t((0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) || (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_pooltogether_share' : 'plugin_pooltogether_share_no_official_account', {
        amount: rawAmount,
        cashTag,
        symbol: token.symbol,
        pool: pool?.name ?? `${pool?.tokens.underlyingToken.symbol} Pool`,
        account: (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }) : '';
    const openShareTxDialog = (0,src/* useOpenShareTxDialog */.z)();
    const deposit = (0,react.useCallback)(async ()=>{
        const hash = await depositCallback();
        if (typeof hash === 'string') {
            await openShareTxDialog({
                hash,
                onShare () {
                    social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
                }
            });
            setRawAmount('');
        }
        retryLoadTokenBalance();
    }, [
        depositCallback,
        retryLoadTokenBalance,
        openShareTxDialog
    ]);
    // #region Swap
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated, (0,react.useCallback)((ev)=>{
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
    // #region submit button
    const validationMessage = (0,react.useMemo)(()=>{
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if (!amount || amount.isZero()) return t('plugin_pooltogether_enter_an_amount');
        if (amount.isGreaterThan(tokenBalance)) return t('plugin_pooltogether_insufficient_balance', {
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
    const prizePeriodSeconds = Number.parseInt(pool?.config.prizePeriodSeconds ?? '', 10);
    if (!token || !pool) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        children: (0,base_src/* isZero */.Fr)(tokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: openSwap,
                            variant: "contained",
                            disabled: isDepositing,
                            loading: loadingTokenBalance || isDepositing,
                            children: t('plugin_pooltogether_buy', {
                                symbol: token.symbol
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: pool.prizePool.address,
                            token: token?.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                disabled: !!validationMessage || isDepositing,
                                onClick: deposit,
                                variant: "contained",
                                loading: loadingTokenBalance || isDepositing,
                                children: validationMessage || t('plugin_pooltogether_deposit_msg')
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
                                        value: Number.parseFloat(odds).toFixed(4),
                                        period: (0,utils/* getPrizePeriod */.fe)(t, prizePeriodSeconds)
                                    })
                                })
                            })
                        ]
                    }) : null
                ]
            })
        })
    });
}


/***/ }),

/***/ 20386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ usePoolTogetherPoolContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherPool.json
const PoolTogetherPool_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AwardCaptured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Awarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AwardedExternalERC20","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"AwardedExternalERC721","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract ControlledTokenInterface","name":"token","type":"address"}],"name":"ControlledTokenAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CreditBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"CreditMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint128","name":"creditLimitMantissa","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"creditRateMantissa","type":"uint128"}],"name":"CreditPlanSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"referrer","type":"address"}],"name":"Deposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserveRegistry","type":"address"},{"indexed":false,"internalType":"uint256","name":"maxExitFeeMantissa","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maxTimelockDuration","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemed","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"exitFee","type":"uint256"}],"name":"InstantWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liquidityCap","type":"uint256"}],"name":"LiquidityCapSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"prizeStrategy","type":"address"}],"name":"PrizeStrategySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveFeeCaptured","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ReserveWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"stakeToken","type":"address"}],"name":"StakePrizePoolInitialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TimelockDeposited","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unlockTimestamp","type":"uint256"}],"name":"TimelockedWithdrawal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"redeemed","type":"uint256"}],"name":"TimelockedWithdrawalSwept","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferredExternalERC20","type":"event"},{"inputs":[],"name":"accountedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"awardBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"awardExternalERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"awardExternalERC721","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"balanceOfCredit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"beforeTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateEarlyExitFee","outputs":[{"internalType":"uint256","name":"exitFee","type":"uint256"},{"internalType":"uint256","name":"burnedCredit","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateReserveFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"calculateTimelockDuration","outputs":[{"internalType":"uint256","name":"durationSeconds","type":"uint256"},{"internalType":"uint256","name":"burnedCredit","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_externalToken","type":"address"}],"name":"canAwardExternal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"captureAwardBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ICompLike","name":"compLike","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"compLikeDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"controlledToken","type":"address"}],"name":"creditPlanOf","outputs":[{"internalType":"uint128","name":"creditLimitMantissa","type":"uint128"},{"internalType":"uint128","name":"creditRateMantissa","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"name":"depositTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_controlledToken","type":"address"},{"internalType":"uint256","name":"_principal","type":"uint256"},{"internalType":"uint256","name":"_interest","type":"uint256"}],"name":"estimateCreditAccrualTime","outputs":[{"internalType":"uint256","name":"durationSeconds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract RegistryInterface","name":"_reserveRegistry","type":"address"},{"internalType":"contract ControlledTokenInterface[]","name":"_controlledTokens","type":"address[]"},{"internalType":"uint256","name":"_maxExitFeeMantissa","type":"uint256"},{"internalType":"uint256","name":"_maxTimelockDuration","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract RegistryInterface","name":"_reserveRegistry","type":"address"},{"internalType":"contract ControlledTokenInterface[]","name":"_controlledTokens","type":"address[]"},{"internalType":"uint256","name":"_maxExitFeeMantissa","type":"uint256"},{"internalType":"uint256","name":"_maxTimelockDuration","type":"uint256"},{"internalType":"contract IERC20Upgradeable","name":"_stakeToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidityCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxExitFeeMantissa","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTimelockDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizeStrategy","outputs":[{"internalType":"contract TokenListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserveRegistry","outputs":[{"internalType":"contract RegistryInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserveTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_controlledToken","type":"address"},{"internalType":"uint128","name":"_creditRateMantissa","type":"uint128"},{"internalType":"uint128","name":"_creditLimitMantissa","type":"uint128"}],"name":"setCreditPlanOf","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidityCap","type":"uint256"}],"name":"setLiquidityCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract TokenListenerInterface","name":"_prizeStrategy","type":"address"}],"name":"setPrizeStrategy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"sweepTimelockBalances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"timelockBalanceAvailableAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"timelockBalanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"timelockDepositTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"timelockTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"address","name":"externalToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferExternalERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"uint256","name":"maximumExitFee","type":"uint256"}],"name":"withdrawInstantlyFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"withdrawReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"withdrawWithTimelockFrom","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts


function usePoolTogetherPoolContract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, PoolTogetherPool_namespaceObject);
}


/***/ }),

/***/ 16888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PluginPooltogetherRPC),
/* harmony export */   "d": () => (/* binding */ PluginPoolTogetherMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78755);


/* unsupported import.meta.webpackHot */ undefined && 0;
const PluginPoolTogetherMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .POOLTOGETHER_PLUGIN_ID */ .hD);
const PluginPooltogetherRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .POOLTOGETHER_PLUGIN_ID */ .hD, ()=>__webpack_require__.e(/* import() */ 8679).then(__webpack_require__.bind(__webpack_require__, 8679))
, PluginPoolTogetherMessages.rpc);


/***/ }),

/***/ 94073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gb": () => (/* binding */ calculateOdds),
/* harmony export */   "LL": () => (/* binding */ calculateNextPrize),
/* harmony export */   "Q": () => (/* binding */ calculateSecondsRemaining),
/* harmony export */   "fe": () => (/* binding */ getPrizePeriod)
/* harmony export */ });
/* unused harmony export getNetworkColor */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78755);


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
    const rawPrize = Number.parseInt(pool.prize.weeklyTotalValueUsd, 10) / (_constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_WEEK_SECONDS */ .JZ / Number.parseInt(pool.config.prizePeriodSeconds, 10));
    if (!Number.isNaN(rawPrize)) {
        return '$' + rawPrize.toLocaleString(undefined, {
            maximumFractionDigits: 0
        });
    } else {
        const prizeAmount = Number.parseFloat(pool.prize.amount);
        const formattedPrizeAmount = prizeAmount.toLocaleString(undefined, {
            maximumFractionDigits: prizeAmount >= 10 ? 0 : 2
        });
        return `${formattedPrizeAmount} ${pool.tokens.underlyingToken.symbol}`;
    }
};
const calculateSecondsRemaining = (pool)=>{
    if (pool.prize.prizePeriodEndAt) {
        const endAt = Number.parseInt(pool.prize.prizePeriodEndAt, 10);
        return endAt - Date.now() / _constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_SECOND */ .WT;
    } else {
        const startedAt = Number.parseInt(pool.prize.prizePeriodStartedAt.hex, 16);
        const seconds = Number.parseInt(pool.prize.prizePeriodSeconds.hex, 16);
        return startedAt + seconds - Date.now() / _constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_SECOND */ .WT;
    }
};
const getNetworkColor = (chainId)=>{
    switch(chainId){
        case ChainId.Mainnet:
            return '#617fea';
        case ChainId.Matic:
            return '#7b41da';
        // add more if needed
        default:
            return '#f1f1f1';
    }
};
function getPrizePeriod(t, period) {
    if (period === _constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_DAY_SECONDS */ .ir) {
        return t('daily');
    } else if (period === _constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_WEEK_SECONDS */ .JZ) {
        return t('weekly');
    }
    return t('days', {
        period: (period / _constants__WEBPACK_IMPORTED_MODULE_0__/* .ONE_WEEK_SECONDS */ .JZ).toFixed()
    });
}


/***/ }),

/***/ 38329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45374);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(6943)]).then(__webpack_require__.bind(__webpack_require__, 20145))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 19963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ EthereumERC20TokenApprovedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69427);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96436);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93455);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72288);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94806);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            flexDirection: 'column',
            position: 'relative',
            marginTop: theme.spacing(1.5),
            lineHeight: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px 0',
            fontSize: 18
        },
        buttonLabel: {
            display: 'block',
            fontWeight: 'inherit',
            transform: 'translateY(-4px)'
        },
        buttonAmount: {
            fontSize: 10,
            fontWeight: 300,
            transform: 'translateY(12px)',
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
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [{ type: approveStateType , allowance  }, transactionState, approveCallback, resetApproveCallback] = (0,_masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .useERC20TokenApproveCallback */ .Sj)(token?.address ?? '', amount, spender);
    const onApprove = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (useExact = false)=>{
        if (approveStateType !== _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.NOT_APPROVED */ .iW.NOT_APPROVED) return;
        await approveCallback(useExact);
    }, [
        approveStateType,
        transactionState,
        approveCallback
    ]);
    // not a valid erc20 token, please given token as undefined
    if (!token) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: render ? render(false) : children
    });
    if (transactionState.loading || approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.UPDATING */ .iW.UPDATING) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: [
                    transactionState.loading ? t('plugin_ito_unlocking_symbol', {
                        symbol: token.symbol
                    }) : `Updating ${token.symbol}`,
                    "\u2026"
                ]
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.UNKNOWN */ .iW.UNKNOWN) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                className: classes.button,
                fullWidth: true,
                variant: "contained",
                size: "large",
                disabled: true,
                ...props.ActionButtonProps,
                children: fallback ?? 'Enter an amount'
            }),
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.FAILED */ .iW.FAILED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
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
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.NOT_APPROVED */ .iW.NOT_APPROVED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        width: "100%",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                container: true,
                direction: "row",
                justifyContent: "center",
                alignItems: "center",
                spacing: 2,
                children: [
                    !onlyInfiniteUnlock ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
                            className: classes.button,
                            fullWidth: true,
                            variant: "contained",
                            size: "large",
                            onClick: ()=>onApprove(true)
                            ,
                            ...props.ActionButtonProps,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                    className: classes.buttonLabel,
                                    children: t('plugin_wallet_token_unlock')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: classes.buttonAmount,
                                    children: [
                                        (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .az)(amount, token.decimals, 2),
                                        " ",
                                        token?.symbol ?? 'Token'
                                    ]
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
                        item: true,
                        xs: onlyInfiniteUnlock ? 12 : 6,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
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
            withChildren ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                className: classes.children,
                children: render ? render(true) : children
            }) : null
        ]
    });
    if (approveStateType === _masknet_plugin_infra_web3_evm__WEBPACK_IMPORTED_MODULE_7__/* .ApproveStateType.APPROVED */ .iW.APPROVED) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP, {
        container: true,
        children: render ? render(false) : typeof children === 'function' ? children(allowance) : children
    });
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(approveStateType);
}


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


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);