"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2426],{

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

/***/ 42426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ InvestDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(68705);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var dHEDGE_types = __webpack_require__(17794);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useInvestCallback.ts






/**
 * A callback for invest dhedge pool
 * @param pool the pool
 * @param amount
 * @param token
 */ function useInvestCallback(pool, amount, token) {
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const poolV1Contract = (0,useDHedgePool/* useDHedgePoolV1Contract */.y5)(chainId, pool?.address ?? '');
    const poolV2Contract = (0,useDHedgePool/* useDHedgePoolV2Contract */.eN)(chainId, pool?.address ?? '');
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    return (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!token || !poolV1Contract || !poolV2Contract) return;
        const config = {
            from: account,
            value: (0,base_src/* toFixed */.FH)(token.schema === types/* SchemaType.Native */.XQ.Native ? amount : 0)
        };
        const tx = pool?.poolType === dHEDGE_types/* PoolType.v1 */.W4.v1 ? await (0,contract/* encodeContractTransaction */.Wp)(poolV1Contract, poolV1Contract.methods.deposit(amount), config) : await (0,contract/* encodeContractTransaction */.Wp)(poolV2Contract, poolV2Contract.methods.deposit(token.address, amount), config);
        return connection.sendTransaction(tx);
    }, [
        pool,
        account,
        amount,
        token,
        connection
    ]);
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var dHEDGE_messages = __webpack_require__(29611);
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
    const [pool, setPool] = (0,react.useState)();
    const [token, setToken] = (0,react.useState)();
    const [allowedTokens, setAllowedTokens] = (0,react.useState)();
    // context
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // #region remote controlled dialog
    const { open , closeDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(dHEDGE_messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated, (ev)=>{
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
    const pickToken = (0,src/* usePickToken */.yQ)();
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
    const { value: tokenBalance = '0' , loading: loadingTokenBalance , retry: retryLoadTokenBalance ,  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, token?.address ?? '');
    // #endregion
    // #region blocking
    const [{ loading: isInvesting  }, investCallback] = useInvestCallback(pool, amount.toFixed(), token);
    const openShareTxDialog = (0,src/* useOpenShareTxDialog */.z)();
    const cashTag = (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? '$' : '';
    const isOnTwitter = (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM);
    const isOnFacebook = (0,base/* isFacebook */.D)(social_network/* activatedSocialNetworkUI */.LM);
    const shareText = token ? t('plugin_dhedge_share_text', {
        amount: (0,base_src/* formatBalance */.az)(amount, token.decimals),
        symbol: `${cashTag}${token.symbol}`,
        pool: pool?.name,
        account_promote: t('plugin_dhedge_account_promote', {
            context: isOnTwitter ? 'twitter' : isOnFacebook ? 'facebook' : 'default'
        })
    }) : '';
    const invest = (0,react.useCallback)(async ()=>{
        const hash = await investCallback();
        if (typeof hash !== 'string') return;
        await openShareTxDialog({
            hash,
            onShare () {
                social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
            }
        });
        retryLoadTokenBalance();
        onClose();
    }, [
        investCallback,
        openShareTxDialog,
        onClose
    ]);
    // #endregion
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        children: (0,base_src/* isZero */.Fr)(tokenBalance) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: openSwap,
                            variant: "contained",
                            disabled: isInvesting,
                            loading: loadingTokenBalance || isInvesting,
                            children: t('plugin_dhedge_buy_token', {
                                symbol: token?.symbol
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                            amount: amount.toFixed(),
                            spender: pool.address,
                            token: token?.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? token : undefined,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                className: classes.button,
                                fullWidth: true,
                                disabled: !!validationMessage || isInvesting,
                                onClick: invest,
                                variant: "contained",
                                loading: loadingTokenBalance || isInvesting,
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

/***/ 68705:
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
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts




function useDHedgePoolV1Contract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, DHedgePoolV1_namespaceObject);
}
function useDHedgePoolV2Contract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, DHedgePoolV2_namespaceObject);
}
function useDHedgePoolManagerContract(chainId, address) {
    return (0,entry_web3_evm/* useContract */.cq)(chainId, address, DHedgePoolManager_namespaceObject);
}


/***/ }),

/***/ 29611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ PluginDHedgeMessages),
/* harmony export */   "t": () => (/* binding */ PluginDHedgeRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63639);


const PluginDHedgeMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc);
const PluginDHedgeRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .DHEDGE_PLUGIN_ID */ .Bc, ()=>__webpack_require__.e(/* import() */ 2975).then(__webpack_require__.bind(__webpack_require__, 79172))
, PluginDHedgeMessages.rpc);


/***/ }),

/***/ 17794:
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


/***/ })

}]);