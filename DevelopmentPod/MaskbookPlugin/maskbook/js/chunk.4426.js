"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4426],{

/***/ 9853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44131);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);



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

/***/ 61458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54933);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56789);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88785);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39541);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i);
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

/***/ 50472:
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
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/plugins/MaskBox/base.ts + 3 modules
var base = __webpack_require__(20342);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var typed_message_base = __webpack_require__(32475);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(80066);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(56213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(43616);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useTransactionCallback.ts




function useTransactionCallback(type, config, method) {
    const [state, setState] = (0,useTransactionState/* useTransactionState */.p)();
    const updateCallback = (0,react.useCallback)(async ()=>{
        if (!config || !method) {
            setState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        setState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const gasExpectedConfig = {
            ...config
        };
        try {
            const estimatedGas = await method.estimateGas((0,omit/* default */.Z)(config, 'gas'));
            if (!gasExpectedConfig.gas && estimatedGas) {
                gasExpectedConfig.gas = estimatedGas;
            }
        } catch (error1) {
            try {
                await method.call(config);
            } catch (error) {
                setState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error: error instanceof Error ? error : new Error('Unknown Error.')
                });
                throw error;
            }
        }
        return new Promise(async (resolve, reject)=>{
            method.send(gasExpectedConfig).once(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                if (type !== types/* TransactionStateType.HASH */.n$.HASH) return;
                setState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                resolve();
            }).once(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                if (type !== types/* TransactionStateType.RECEIPT */.n$.RECEIPT) return;
                setState({
                    type: types/* TransactionStateType.RECEIPT */.n$.RECEIPT,
                    receipt
                });
                resolve();
            }).once(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                if (type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
                setState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).once(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        type,
        config,
        method
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        state,
        updateCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(61458);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(15061);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Remove.js
var Remove = __webpack_require__(17778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Add.js
var Add = __webpack_require__(24527);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(17939);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var constants = __webpack_require__(79518);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(79687);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(76322);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(35329);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Tune.js
var Tune = __webpack_require__(69485);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useTokenPrice.ts
var useTokenPrice = __webpack_require__(69471);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
;// CONCATENATED MODULE: ./src/components/shared/TokenPrice.tsx




const TokenPrice = ({ chainId , contractAddress , amount , currencyType =types/* CurrencyType.USD */.V2.USD , ...rest })=>{
    const tokenPrice = (0,useTokenPrice/* useTokenPrice */.p)(chainId, contractAddress === null || contractAddress === void 0 ? void 0 : contractAddress.toLowerCase(), currencyType);
    const nativeTokenPrice = (0,useTokenPrice/* useNativeTokenPrice */.l)(chainId);
    const price = (0,utils_address/* isZeroAddress */.uO)(contractAddress) ? nativeTokenPrice : tokenPrice;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        ...rest,
        children: [
            "$",
            (0,base_src/* multipliedBy */.$q)(amount, price).toFixed(2)
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/GasSettingBar.tsx










function GasSettingBar(props) {
    const { gasLimit , gasPrice , maxFee , priorityFee , onChange  } = props;
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value: nativeTokenDetailed  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const { value: gasPriceDefault = '0'  } = (0,useGasPrice/* useGasPrice */.F)();
    const [gasOption, setGasOption] = (0,react.useState)(types/* GasOption.Medium */.TP.Medium);
    const { setDialog: setGasSettingDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.gasSettingDialogUpdated */.R.events.gasSettingDialogUpdated);
    const onOpenGasSettingDialog = (0,react.useCallback)(()=>{
        setGasSettingDialog((0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? {
            open: true,
            gasLimit,
            maxFee,
            priorityFee,
            gasOption
        } : {
            open: true,
            gasLimit,
            gasPrice,
            gasOption
        });
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        priorityFee,
        gasOption
    ]);
    // set initial options
    (0,react.useEffect)(()=>{
        return messages/* WalletMessages.events.gasSettingDialogUpdated.on */.R.events.gasSettingDialogUpdated.on((evt)=>{
            if (evt.open) return;
            if (evt.gasOption) setGasOption(evt.gasOption);
            onChange((0,chainDetailed/* isEIP1559Supported */.U1)(chainId) ? {
                gas: evt.gasLimit,
                maxFeePerGas: evt.maxFee,
                maxPriorityFeePerGas: evt.priorityFee
            } : {
                gas: evt.gasLimit,
                gasPrice: evt.gasPrice
            });
        });
    }, []);
    const gasFee = (0,react.useMemo)(()=>{
        return (0,base_src/* multipliedBy */.$q)(gasLimit, (0,chainDetailed/* isEIP1559Supported */.U1)(chainId) && maxFee ? new (bignumber_default())(maxFee) : gasPrice !== null && gasPrice !== void 0 ? gasPrice : gasPriceDefault);
    }, [
        chainId,
        gasLimit,
        gasPrice,
        maxFee,
        gasPriceDefault
    ]);
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                fontSize: "14px",
                sx: {
                    marginRight: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            (0,formatter/* formatWeiToEther */.yp)(gasFee).toFixed(6),
                            " ",
                            (ref = nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol) !== null && ref !== void 0 ? ref : '',
                            " ≈"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                        chainId: chainId,
                        amount: (0,formatter/* formatWeiToEther */.yp)(gasFee)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "small",
                onClick: onOpenGasSettingDialog,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tune/* default */.Z, {
                    fontSize: "small",
                    color: "inherit"
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-eth-abi@1.5.2/node_modules/web3-eth-abi/lib/index.js
var lib = __webpack_require__(24278);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(98162);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addDays/index.js
var addDays = __webpack_require__(31434);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/subDays/index.js
var subDays = __webpack_require__(50195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(8218);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(98468);
// EXTERNAL MODULE: ../web3-shared/evm/constants/specific.ts
var specific = __webpack_require__(27387);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(60506);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(48136);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(67759);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(68115);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/type.ts
var CardTab;
(function(CardTab) {
    CardTab[CardTab["Articles"] = 0] = "Articles";
    CardTab[CardTab["Details"] = 1] = "Details";
})(CardTab || (CardTab = {}));
var BoxState;
(function(BoxState) {
    BoxState[BoxState["UNKNOWN"] = 0] = "UNKNOWN";
    BoxState[BoxState["NOT_READY"] = 1] = "NOT_READY";
    BoxState[BoxState["READY"] = 2] = "READY";
    BoxState[BoxState["EXPIRED"] = 3] = "EXPIRED";
    BoxState[BoxState[/** sold all tokens out */ "SOLD_OUT"] = 4] = "SOLD_OUT";
    BoxState[BoxState[/** drawed all personal limited tokens */ "DRAWED_OUT"] = 5] = "DRAWED_OUT";
    BoxState[BoxState[/** canceled */ "CANCELED"] = 6] = "CANCELED";
    BoxState[BoxState[/** error occur */ "ERROR"] = 7] = "ERROR";
    BoxState[BoxState[/** 404 */ "NOT_FOUND"] = 8] = "NOT_FOUND";
    BoxState[BoxState[/** leaf not found */ "NOT_IN_WHITELIST"] = 9] = "NOT_IN_WHITELIST";
    BoxState[BoxState[/** insufficient holder token */ "INSUFFICIENT_HOLDER_TOKEN"] = 10] = "INSUFFICIENT_HOLDER_TOKEN";
    BoxState[BoxState[/** not qualified */ "NOT_QUALIFIED"] = 11] = "NOT_QUALIFIED";
})(BoxState || (BoxState = {}));
var MediaType;
(function(MediaType) {
    MediaType["Audio"] = 'audio';
    MediaType["Image"] = 'image';
    MediaType["Video"] = 'video';
    MediaType["Unknown"] = 'unknown';
})(MediaType || (MediaType = {}));

// EXTERNAL MODULE: ../web3-contracts/abis/MaskBox.json
var MaskBox = __webpack_require__(7744);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(40085);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxContract.ts


function useMaskBoxContract() {
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)();
    return (0,useContract/* useContract */.cq)(MASK_BOX_CONTRACT_ADDRESS, MaskBox);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxInfo.ts


function useMaskBoxInfo(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        return maskBoxContract.methods.getBoxInfo(id).call();
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ./src/plugins/MaskBox/apis/index.ts + 2 modules
var apis = __webpack_require__(94651);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMerkleProof.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



function useMerkelProof(root) {
    const account = (0,useAccount/* useAccount */.m)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!root) return;
        var ref;
        const leaf = Buffer.from(((ref = account.replace(/0x/, '').match(/.{2}/g)) !== null && ref !== void 0 ? ref : []).map((x)=>Number.parseInt(x, 16)
        )).toString('base64');
        return (0,apis/* getMerkleProof */.g)(leaf, root);
    }, [
        account,
        root
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxStatus.ts


function useMaskBoxStatus(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return null;
        return maskBoxContract.methods.getBoxStatus(id).call();
    }, [
        id,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(81508);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxCreationSuccessEvent.ts




// dynamically set the block range window size
const FRAGMENT_SIZE = 3000;
const MAX_PAGE_SIZE = 10;
function useMaskBoxCreationSuccessEvent(creatorAddress, tokenAddress, boxId) {
    const { value: blockNumber = 0  } = (0,useBlockNumber/* useBlockNumber */.O)();
    const maskBoxContract = useMaskBoxContract();
    const { MASK_BOX_CONTRACT_FROM_BLOCK =Math.max(0, blockNumber - FRAGMENT_SIZE)  } = (0,constants/* useMaskBoxConstants */.kt)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!blockNumber) return null;
        if (!maskBoxContract) return null;
        const getPastEvents = (fromBlock, toBlock)=>{
            return maskBoxContract.getPastEvents('CreationSuccess', {
                filter: {
                    creator: creatorAddress,
                    nft_address: tokenAddress,
                    box_id: boxId
                },
                fromBlock,
                toBlock
            });
        };
        const range = blockNumber - MASK_BOX_CONTRACT_FROM_BLOCK;
        const size = Math.min(MAX_PAGE_SIZE, Math.ceil(range / FRAGMENT_SIZE));
        const allSettled = await Promise.allSettled(Array.from({
            length: size
        }).map((_, index)=>getPastEvents(blockNumber - FRAGMENT_SIZE * (index + 1), blockNumber - FRAGMENT_SIZE * index - 1)
        ));
        const events = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []
        );
        const filtered = events.filter((evt)=>evt.returnValues.box_id === boxId
        );
        return (0,head/* default */.Z)(filtered);
    }, [
        boxId,
        creatorAddress,
        tokenAddress,
        maskBoxContract,
        blockNumber,
        MASK_BOX_CONTRACT_FROM_BLOCK
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxTokensForSale.ts


function useMaskBoxTokensForSale(id) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return [];
        return maskBoxContract.methods.getNftListForSale(id, 0, 100).call();
    }, [
        id,
        maskBoxContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxPurchasedTokens.ts


function useMaskBoxPurchasedTokens(id, customer) {
    const maskBoxContract = useMaskBoxContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!maskBoxContract) return [];
        return maskBoxContract.methods.getPurchasedNft(id, customer).call();
    }, [
        id,
        customer,
        maskBoxContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDuration/index.js
var formatDuration = __webpack_require__(71322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/helpers/formatCountdown.ts


function formatCountdown(from, to) {
    const duration = (0,intervalToDuration/* default */.Z)({
        start: from,
        end: to
    });
    return (0,formatDuration/* default */.Z)(duration);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useOpenBoxTransaction.ts




function useOpenBoxTransaction(boxId, amount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proof, overrides) {
    const account = (0,useAccount/* useAccount */.m)();
    const maskBoxContract = useMaskBoxContract();
    return (0,react.useMemo)(()=>{
        if (!boxId || amount <= 0 || !maskBoxContract) return;
        return {
            config: {
                ...overrides,
                from: account,
                value: (paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.type) === types/* EthereumTokenType.Native */.Dr.Native ? (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, amount).toFixed() : undefined
            },
            method: maskBoxContract.methods.openBox(boxId, amount, paymentTokenIndex, proof !== null && proof !== void 0 ? proof : '0x00')
        };
    }, [
        account,
        amount,
        boxId,
        maskBoxContract,
        paymentTokenIndex,
        paymentTokenPrice,
        paymentTokenDetailed,
        proof,
        overrides, 
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ./src/plugins/MaskBox/messages.ts
var MaskBox_messages = __webpack_require__(71482);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxMetadata.ts



function useMaskBoxMetadata(boxId, creator) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!boxId || !creator || !dist.EthereumAddress.isValid(creator)) return;
        return MaskBox_messages/* MaskBoxRPC.getMaskBoxMetadata */.z.getMaskBoxMetadata(boxId, creator);
    }, [
        creator
    ]);
}

;// CONCATENATED MODULE: ../web3-contracts/abis/MaskBoxQualification.json
const MaskBoxQualification_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"is_qualified","outputs":[{"internalType":"bool","name":"qualified","type":"bool"},{"internalType":"string","name":"error_msg","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useMaskBoxQualificationContract.ts


function useMaskBoxQualificationContract(address) {
    return (0,useContract/* useContract */.cq)(address, MaskBoxQualification_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useQualification.ts


function useQualification(address, account, proof) {
    const qualificationContract = useMaskBoxQualificationContract(address);
    const { value: qualification = {
        qualified: false,
        error_msg: ''
    }  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!qualificationContract || !account) return null;
        return qualificationContract.methods.is_qualified(account, proof !== null && proof !== void 0 ? proof : '0x00').call({
            from: account
        });
    }, [
        account,
        qualificationContract,
        proof
    ]);
    return qualification;
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/hooks/useContext.ts























function useContext(initialState) {
    var ref13, ref1, ref2;
    const now = new Date();
    const beat = (0,base_src/* useBeat */.UU)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)(types/* ChainId.Mainnet */.a_.Mainnet);
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)();
    const coder = lib;
    var ref3;
    const [boxId, setBoxId] = (0,react.useState)((ref3 = initialState === null || initialState === void 0 ? void 0 : initialState.boxId) !== null && ref3 !== void 0 ? ref3 : '');
    const [rootHash, setRootHash] = (0,react.useState)((initialState === null || initialState === void 0 ? void 0 : initialState.hashRoot) || '');
    const [paymentTokenAddress, setPaymentTokenAddress] = (0,react.useState)('');
    // #region the box info
    const { value: maskBoxInfo = null , error: errorMaskBoxInfo , loading: loadingMaskBoxInfo , retry: retryMaskBoxInfo ,  } = useMaskBoxInfo(boxId);
    const { value: maskBoxStatus = null , error: errorMaskBoxStatus , loading: loadingMaskBoxStatus , retry: retryMaskBoxStatus ,  } = useMaskBoxStatus(boxId);
    var ref4, ref5;
    const { value: maskBoxCreationSuccessEvent = null , retry: retryMaskBoxCreationSuccessEvent  } = useMaskBoxCreationSuccessEvent((ref4 = maskBoxInfo === null || maskBoxInfo === void 0 ? void 0 : maskBoxInfo.creator) !== null && ref4 !== void 0 ? ref4 : '', (ref5 = maskBoxInfo === null || maskBoxInfo === void 0 ? void 0 : maskBoxInfo.nft_address) !== null && ref5 !== void 0 ? ref5 : '', boxId);
    var ref6;
    const { value: paymentTokens = []  } = (0,useERC20TokenDetailed/* useFungibleTokensDetailed */.b)((ref6 = maskBoxStatus === null || maskBoxStatus === void 0 ? void 0 : (ref13 = maskBoxStatus.payment) === null || ref13 === void 0 ? void 0 : ref13.map(([address])=>{
        return {
            type: (0,utils_address/* isNativeTokenAddress */.qw)(address) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20,
            address
        };
    })) !== null && ref6 !== void 0 ? ref6 : [], chainId);
    const { value: allTokens = [] , retry: retryMaskBoxTokensForSale  } = useMaskBoxTokensForSale(boxId);
    const { value: purchasedTokens = [] , retry: retryMaskBoxPurchasedTokens  } = useMaskBoxPurchasedTokens(boxId, account);
    const { value: boxInfo = null , error: errorBoxInfo , loading: loadingBoxInfo , retry: retryBoxInfo ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        var ref;
        if (!maskBoxInfo || !maskBoxStatus || (0,utils_address/* isZeroAddress */.uO)((ref = maskBoxInfo === null || maskBoxInfo === void 0 ? void 0 : maskBoxInfo.creator) !== null && ref !== void 0 ? ref : specific/* ZERO_ADDRESS */.r_)) return null;
        const personalLimit = Number.parseInt(maskBoxInfo.personal_limit, 10);
        const remaining = Number.parseInt(maskBoxStatus.remaining, 10) // the current balance of the creator's account
        ;
        const total = Number.parseInt(maskBoxStatus.total, 10) // the total amount of tokens in the box
        ;
        const totalComputed = total && remaining && remaining > total ? remaining : total;
        const sold = Math.max(0, totalComputed - remaining);
        const personalRemaining = Math.max(0, personalLimit - purchasedTokens.length);
        const startAt = Number.parseInt((maskBoxCreationSuccessEvent === null || maskBoxCreationSuccessEvent === void 0 ? void 0 : maskBoxCreationSuccessEvent.returnValues.start_time) || '0', 10);
        const endAt = Number.parseInt((maskBoxCreationSuccessEvent === null || maskBoxCreationSuccessEvent === void 0 ? void 0 : maskBoxCreationSuccessEvent.returnValues.end_time) || '0', 10);
        var _sell_all;
        const info = {
            boxId,
            creator: maskBoxInfo.creator,
            name: maskBoxInfo.name,
            sellAll: (_sell_all = maskBoxCreationSuccessEvent === null || maskBoxCreationSuccessEvent === void 0 ? void 0 : maskBoxCreationSuccessEvent.returnValues.sell_all) !== null && _sell_all !== void 0 ? _sell_all : false,
            personalLimit: personalLimit,
            personalRemaining,
            remaining,
            availableAmount: Math.min(personalRemaining, remaining),
            startAt: startAt === 0 ? (0,subDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(startAt),
            endAt: endAt === 0 ? (0,addDays/* default */.Z)(new Date(), 1) : (0,fromUnixTime/* default */.Z)(endAt),
            started: maskBoxStatus.started,
            total: totalComputed,
            sold,
            canceled: maskBoxStatus.canceled,
            tokenIds: allTokens,
            tokenIdsPurchased: purchasedTokens,
            payments: paymentTokens.map((token, i)=>{
                return {
                    token: token,
                    price: maskBoxStatus.payment[i][1],
                    receivableAmount: maskBoxStatus.payment[i][2]
                };
            }),
            tokenAddress: maskBoxInfo.nft_address,
            heroImageURL: '',
            qualificationAddress: maskBoxInfo.qualification,
            holderTokenAddress: maskBoxInfo.holder_token_addr,
            holderMinTokenAmount: maskBoxInfo.holder_min_token_amount
        };
        return info;
    }, [
        allTokens.join(),
        purchasedTokens.join(),
        paymentTokens === null || paymentTokens === void 0 ? void 0 : paymentTokens.map((x)=>x.address
        ).join(),
        maskBoxInfo,
        maskBoxStatus,
        maskBoxCreationSuccessEvent, 
    ]);
    // #endregion
    // #region qualification
    const { value , error: errorProof , loading: loadingProof  } = useMerkelProof(rootHash);
    var ref7;
    const proofBytes = (value === null || value === void 0 ? void 0 : value.proof) ? coder.encodeParameters([
        'bytes32[]'
    ], [
        (ref7 = value === null || value === void 0 ? void 0 : (ref1 = value.proof) === null || ref1 === void 0 ? void 0 : ref1.map((p)=>`0x${p}`
        )) !== null && ref7 !== void 0 ? ref7 : []
    ]) : undefined;
    const qualification = useQualification(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.qualificationAddress, account, (value === null || value === void 0 ? void 0 : value.proof) ? coder.encodeParameters([
        'bytes',
        'bytes32'
    ], [
        proofBytes,
        rootHash
    ]) : undefined);
    // not in whitelist
    const notInWhiteList = (value === null || value === void 0 ? void 0 : value.message) === 'leaf not found';
    // at least hold token amount
    const { value: holderToken  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.holderTokenAddress);
    const { value: holderTokenBalance = '0'  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)(holderToken === null || holderToken === void 0 ? void 0 : holderToken.address);
    var ref8;
    const holderMinTokenAmountBN = new (bignumber_default())((ref8 = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.holderMinTokenAmount) !== null && ref8 !== void 0 ? ref8 : 0);
    const insufficientHolderToken = (0,base_src/* isGreaterThan */.T1)(holderMinTokenAmountBN, 0) && !holderMinTokenAmountBN.lte(holderTokenBalance);
    // #endregion
    const boxState = (0,react.useMemo)(()=>{
        if (notInWhiteList) return BoxState.NOT_IN_WHITELIST;
        if (insufficientHolderToken) return BoxState.INSUFFICIENT_HOLDER_TOKEN;
        if (qualification === null || qualification === void 0 ? void 0 : qualification.error_msg) return BoxState.NOT_QUALIFIED;
        if (errorMaskBoxInfo || errorMaskBoxStatus || errorBoxInfo || (rootHash ? errorProof : false)) return BoxState.ERROR;
        if (loadingMaskBoxInfo || loadingMaskBoxStatus || loadingBoxInfo || (rootHash ? loadingProof : false)) {
            if (!maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        }
        if (maskBoxInfo && !boxInfo) return BoxState.UNKNOWN;
        if (!maskBoxInfo || !maskBoxStatus || !boxInfo) return BoxState.NOT_FOUND;
        if (maskBoxStatus.canceled) return BoxState.CANCELED;
        if ((0,base_src/* isGreaterThanOrEqualTo */.KH)(boxInfo.tokenIdsPurchased.length, boxInfo.personalLimit)) return BoxState.DRAWED_OUT;
        if ((0,base_src/* isLessThanOrEqualTo */.PW)(boxInfo.remaining, 0)) return BoxState.SOLD_OUT;
        if (boxInfo.startAt > now || !boxInfo.started) return BoxState.NOT_READY;
        if (boxInfo.endAt < now || (maskBoxStatus === null || maskBoxStatus === void 0 ? void 0 : maskBoxStatus.expired)) return BoxState.EXPIRED;
        return BoxState.READY;
    }, [
        boxInfo,
        loadingBoxInfo,
        errorBoxInfo,
        maskBoxInfo,
        loadingMaskBoxInfo,
        errorMaskBoxInfo,
        qualification,
        loadingProof,
        errorProof,
        rootHash,
        notInWhiteList,
        insufficientHolderToken,
        beat, 
    ]);
    const boxStateMessage = (0,react.useMemo)(()=>{
        switch(boxState){
            case BoxState.UNKNOWN:
                return 'Loading...';
            case BoxState.CANCELED:
                return 'Canceled';
            case BoxState.READY:
                return 'Draw';
            case BoxState.EXPIRED:
                return 'Ended';
            case BoxState.NOT_READY:
                const nowAt = now.getTime();
                var ref;
                const startAt = (ref = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.startAt.getTime()) !== null && ref !== void 0 ? ref : 0;
                if (startAt <= nowAt) return 'Syncing status...';
                const countdown = formatCountdown(startAt, nowAt);
                return countdown ? `Start sale in ${countdown}` : 'Loading...';
            case BoxState.SOLD_OUT:
                return 'Sold Out';
            case BoxState.NOT_IN_WHITELIST:
                return 'You are not in the whitelist.';
            case BoxState.INSUFFICIENT_HOLDER_TOKEN:
                const { symbol , decimals  } = holderToken !== null && holderToken !== void 0 ? holderToken : {};
                const tokenPrice = `${(0,formatter/* formatBalance */.az)(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.holderMinTokenAmount, decimals)} $${symbol}`;
                return `You must hold at least ${tokenPrice}.`;
            case BoxState.NOT_QUALIFIED:
                var ref14;
                return (ref14 = qualification === null || qualification === void 0 ? void 0 : qualification.error_msg) !== null && ref14 !== void 0 ? ref14 : 'Not qualified.';
            case BoxState.DRAWED_OUT:
                return 'Purchase limit exceeded.';
            case BoxState.ERROR:
                return 'Something went wrong.';
            case BoxState.NOT_FOUND:
                return 'Failed to load box info.';
            default:
                (0,esm/* unreachable */.t1)(boxState);
        }
    }, [
        holderToken,
        boxState,
        boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.startAt,
        qualification,
        beat
    ]);
    (0,react.useEffect)(()=>{
        if (!boxInfo || boxInfo.started) return;
        if (boxInfo.startAt < now) {
            retryMaskBoxStatus();
        }
    }, [
        boxInfo,
        beat
    ]);
    var ref9;
    // #region the box metadata
    const { value: boxMetadata , retry: retryBoxMetadata  } = useMaskBoxMetadata(boxId, (ref9 = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.creator) !== null && ref9 !== void 0 ? ref9 : '');
    // #endregion
    // #region the erc721 contract detailed
    const { value: contractDetailed  } = (0,useERC721ContractDetailed/* useERC721ContractDetailed */.P)(maskBoxInfo === null || maskBoxInfo === void 0 ? void 0 : maskBoxInfo.nft_address);
    // #endregion
    // #region the payment count
    const [paymentCount, setPaymentCount] = (0,react.useState)(1);
    const setPaymentCount_ = (0,react.useCallback)((count)=>{
        var ref;
        setPaymentCount((0,clamp/* default */.Z)(count || 1, 1, (ref = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.personalRemaining) !== null && ref !== void 0 ? ref : 1));
    }, [
        boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.personalRemaining
    ]);
    // #endregion
    // #region token ids
    const [lastAllTokenIds, setLastAllTokenIds] = (0,react.useState)([]);
    const [lastPurchasedTokenIds, setLastPurchasedTokenIds] = (0,react.useState)([]);
    const refreshLastPurchasedTokenIds = (0,react.useCallback)(()=>{
        setLastPurchasedTokenIds((tokenIds)=>(0,uniq/* default */.Z)([
                ...tokenIds,
                ...purchasedTokens
            ])
        );
    }, [
        purchasedTokens.length
    ]);
    // #endregion
    // #region the payment token
    const { value: paymentNativeTokenBalance = '0'  } = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    const { value: paymentERC20TokenBalance = '0'  } = (0,useERC20TokenBalance/* useERC20TokenBalance */.y)((0,utils_address/* isSameAddress */.Wr)(paymentTokenAddress, NATIVE_TOKEN_ADDRESS) ? '' : paymentTokenAddress);
    const paymentTokenInfo = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments.find((x)=>(0,utils_address/* isSameAddress */.Wr)(x.token.address, paymentTokenAddress)
    );
    var _address2, ref10;
    const paymentTokenIndex = (ref10 = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments.findIndex((x)=>(0,utils_address/* isSameAddress */.Wr)((_address2 = x.token.address) !== null && _address2 !== void 0 ? _address2 : '', paymentTokenAddress)
    )) !== null && ref10 !== void 0 ? ref10 : -1;
    var ref11;
    const paymentTokenPrice = (ref11 = paymentTokenInfo === null || paymentTokenInfo === void 0 ? void 0 : paymentTokenInfo.price) !== null && ref11 !== void 0 ? ref11 : '0';
    const costAmount = (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount);
    const isNativeToken = (0,utils_address/* isSameAddress */.Wr)(paymentTokenAddress, NATIVE_TOKEN_ADDRESS);
    const paymentTokenBalance = isNativeToken ? paymentNativeTokenBalance : paymentERC20TokenBalance;
    var ref12;
    const paymentTokenDetailed = (ref12 = paymentTokenInfo === null || paymentTokenInfo === void 0 ? void 0 : paymentTokenInfo.token) !== null && ref12 !== void 0 ? ref12 : null;
    const isBalanceInsufficient = costAmount.gt(paymentTokenBalance);
    (0,react.useEffect)(()=>{
        var ref;
        const firstPaymentTokenAddress = (ref = (0,head/* default */.Z)(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments)) === null || ref === void 0 ? void 0 : ref.token.address;
        if (paymentTokenAddress === '' && firstPaymentTokenAddress) setPaymentTokenAddress(firstPaymentTokenAddress);
    }, [
        paymentTokenAddress,
        boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments.map((x)=>x.token.address
        ).join()
    ]);
    // #endregion
    // #region transactions
    const [openBoxTransactionOverrides, setOpenBoxTransactionOverrides] = (0,react.useState)(null);
    const openBoxTransaction = useOpenBoxTransaction(boxId, paymentCount, paymentTokenIndex, paymentTokenPrice, paymentTokenDetailed, proofBytes, openBoxTransactionOverrides);
    const { value: erc20Allowance , retry: retryAllowance  } = (0,useERC20TokenAllowance/* useERC20TokenAllowance */.n)(isNativeToken ? undefined : paymentTokenAddress, MASK_BOX_CONTRACT_ADDRESS);
    const canPurchase = !isBalanceInsufficient && !!(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.personalRemaining);
    const allowToPurchase = boxState === BoxState.READY;
    const isAllowanceEnough = isNativeToken ? true : costAmount.lte(erc20Allowance !== null && erc20Allowance !== void 0 ? erc20Allowance : '0');
    const { value: openBoxTransactionGasLimit  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!openBoxTransaction || !canPurchase || !allowToPurchase || !isAllowanceEnough) return;
        const estimatedGas = await openBoxTransaction.method.estimateGas((0,omit/* default */.Z)(openBoxTransaction.config, 'gas'));
        return new (bignumber_default())(estimatedGas).toNumber();
    }, [
        openBoxTransaction,
        canPurchase,
        allowToPurchase,
        isAllowanceEnough
    ]);
    var _address1;
    // #endregion
    return {
        // box id
        boxId,
        setBoxId,
        // box info & metadata
        boxInfo,
        boxMetadata,
        // box state
        boxState,
        boxStateMessage,
        // erc721 contract detailed
        contractDetailed,
        // payment count
        paymentCount,
        setPaymentCount: setPaymentCount_,
        // payment address
        paymentTokenAddress: paymentTokenAddress || ((_address1 = (ref2 = (0,head/* default */.Z)(boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments)) === null || ref2 === void 0 ? void 0 : ref2.token.address) !== null && _address1 !== void 0 ? _address1 : ''),
        setPaymentTokenAddress: (address)=>{
            var _address;
            if (boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.payments.some((x)=>(0,utils_address/* isSameAddress */.Wr)((_address = x.token.address) !== null && _address !== void 0 ? _address : '', address)
            )) setPaymentTokenAddress(address);
        },
        // token ids
        lastAllTokenIds,
        setLastAllTokenIds,
        lastPurchasedTokenIds,
        setLastPurchasedTokenIds,
        refreshLastPurchasedTokenIds,
        // payment token
        paymentTokenPrice,
        paymentTokenIndex,
        paymentTokenBalance,
        paymentTokenDetailed,
        isBalanceInsufficient,
        isAllowanceEnough,
        // transactions
        openBoxTransaction,
        openBoxTransactionGasLimit,
        openBoxTransactionOverrides,
        setOpenBoxTransactionOverrides,
        // retry callbacks
        retryAllowance,
        retryMaskBoxInfo,
        retryMaskBoxStatus,
        retryBoxInfo,
        retryBoxMetadata,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens
    };
}
const Context = (0,unstated_next/* createContainer */.f)(useContext);

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DrawDialog.tsx

















const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        main: {
            padding: `${theme.spacing(2.5)} !important`
        },
        caption: {
            textAlign: 'center'
        },
        body: {
            padding: theme.spacing(0, 2.5)
        },
        value: {
            fontSize: 32,
            lineHeight: '40px',
            fontWeight: 'bold',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1)
        },
        section: {
            padding: theme.spacing(2, 0),
            justifyContent: 'space-between'
        },
        title: {
            width: '50%'
        },
        content: {},
        field: {
            borderRadius: 0,
            padding: theme.spacing(0),
            height: '25px !important',
            minWidth: 0,
            minHeight: 0,
            outline: 'none !important',
            borderColor: `${theme.palette.divider} !important`
        },
        textfield: {
            width: 40,
            textAlign: 'center',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.palette.divider
                },
                '&:hover fieldset': {
                    borderColor: theme.palette.divider
                },
                '&.Mui-focused fieldset': {
                    borderWidth: 1,
                    borderColor: theme.palette.divider
                }
            }
        },
        number: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                appearance: 'none',
                margin: 0
            },
            padding: 0,
            appearance: 'textfield',
            textAlign: 'center',
            borderImage: 'none'
        }
    })
);
function DrawDialog(props) {
    const { boxInfo , open , drawing , onClose , onSubmit  } = props;
    const { classes  } = useStyles();
    const { MASK_BOX_CONTRACT_ADDRESS  } = (0,constants/* useMaskBoxConstants */.kt)();
    const { paymentCount , setPaymentCount , paymentTokenPrice , paymentTokenBalance , paymentTokenDetailed , isBalanceInsufficient , isAllowanceEnough , openBoxTransactionGasLimit , setOpenBoxTransactionOverrides ,  } = (0,unstated_next/* useContainer */.u)(Context);
    const providerDescriptor = (0,src/* useProviderDescriptor */.fY)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const onCount = (0,react.useCallback)((step)=>{
        setPaymentCount(paymentCount + step);
    }, [
        paymentCount
    ]);
    var ref, ref1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Draw",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.main,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.caption,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.value,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                                value: (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount),
                                                decimals: (ref = paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.decimals) !== null && ref !== void 0 ? ref : 0,
                                                formatter: formatter/* formatBalance */.az,
                                                significant: 6
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.symbol
                                        })
                                    ]
                                }),
                                paymentTokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: "≈"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenPrice, {
                                            chainId: chainId,
                                            amount: (0,formatter/* formatBalance */.az)(paymentTokenPrice, paymentTokenDetailed.decimals),
                                            contractAddress: paymentTokenDetailed.address
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.body,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Mystery Boxes:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount <= 1,
                                                    onClick: ()=>onCount(-1)
                                                    ,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Remove/* default */.Z, {
                                                        color: "inherit"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                                    className: classes.textfield,
                                                    type: "number",
                                                    size: "small",
                                                    sx: {
                                                        marginLeft: 1,
                                                        marginRight: 1
                                                    },
                                                    value: paymentCount,
                                                    disabled: boxInfo.remaining === 0 || boxInfo.personalRemaining <= 1,
                                                    onChange: (ev)=>{
                                                        const count = Number.parseInt(ev.target.value, 10);
                                                        if (count >= 1 && count <= boxInfo.availableAmount) {
                                                            setPaymentCount(count);
                                                        }
                                                    },
                                                    InputProps: {
                                                        classes: {
                                                            root: classes.field
                                                        },
                                                        autoFocus: true,
                                                        inputProps: {
                                                            className: classes.number,
                                                            autoComplete: 'off',
                                                            autoCorrect: 'off',
                                                            title: 'Token Amount',
                                                            inputMode: 'decimal',
                                                            min: 0,
                                                            max: 255,
                                                            minLength: 1,
                                                            pattern: '^[0-9]*[.,]?[0-9]*$',
                                                            spellCheck: false
                                                        }
                                                    }
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                    className: classes.field,
                                                    variant: "outlined",
                                                    color: "inherit",
                                                    disabled: paymentCount >= boxInfo.availableAmount || boxInfo.remaining === 0 || boxInfo.personalRemaining === 1,
                                                    onClick: ()=>onCount(1)
                                                    ,
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                                        color: "inherit"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Quantity Limit:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: boxInfo.personalLimit
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available amount:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.content,
                                            color: "textPrimary",
                                            children: [
                                                boxInfo.availableAmount,
                                                "/",
                                                boxInfo.total
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Current Wallet:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            className: classes.content,
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ImageIcon */.XB, {
                                                    size: 16,
                                                    icon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        marginLeft: 1
                                                    },
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                                        address: account,
                                                        size: 6,
                                                        formatter: formatter/* formatEthereumAddress */.j8
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Available:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                color: "textPrimary",
                                                children: [
                                                    (0,formatter/* formatBalance */.az)(paymentTokenBalance, (ref1 = paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.decimals) !== null && ref1 !== void 0 ? ref1 : 0, 6),
                                                    ' ',
                                                    paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.symbol
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                isAllowanceEnough && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.section,
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            color: "textPrimary",
                                            children: "Gas Fee:"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            className: classes.content,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingBar, {
                                                gasLimit: openBoxTransactionGasLimit || 0,
                                                onChange: setOpenBoxTransactionOverrides
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                        amount: (0,base_src/* multipliedBy */.$q)(paymentTokenPrice, paymentCount).toFixed(),
                        spender: MASK_BOX_CONTRACT_ADDRESS,
                        token: (paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.type) === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? paymentTokenDetailed : undefined,
                        ActionButtonProps: {
                            size: 'medium',
                            sx: {
                                marginTop: 2
                            }
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                            size: "medium",
                            fullWidth: true,
                            variant: "contained",
                            sx: {
                                marginTop: 2
                            },
                            disabled: isBalanceInsufficient || drawing,
                            onClick: onSubmit,
                            children: isBalanceInsufficient ? 'Insufficient balance' : drawing ? 'Drawing' : 'Draw'
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(97538);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/Skeleton/Skeleton.js




let warnedOnce = false;
/**
 * @ignore - do not document.
 */

/* harmony default export */ const Skeleton_Skeleton = (/*#__PURE__*/react.forwardRef(function DeprecatedSkeleton(props, ref) {
  if (!warnedOnce) {
    console.warn(['MUI: The Skeleton component was moved from the lab to the core.', '', "You should use `import { Skeleton } from '@mui/material'`", "or `import Skeleton from '@mui/material/Skeleton'`"].join('\n'));
    warnedOnce = true;
  }

  return /*#__PURE__*/(0,jsx_runtime.jsx)(Skeleton/* default */.Z, (0,esm_extends/* default */.Z)({
    ref: ref
  }, props));
}));
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
;// CONCATENATED MODULE: ./src/components/shared/Video.tsx





const Video = /*#__PURE__*/ (0,react.forwardRef)(function Video(props, outgoingRef) {
    const { src , component ='video' , VideoProps , SkeletonProps  } = props;
    const videoRef = (0,react.useRef)(null);
    const { loading , error , value  } = (0,useAsync/* default */.Z)(async ()=>{
        if (typeof src !== 'string') return src;
        return service/* default.Helper.fetch */.ZP.Helper.fetch(src);
    }, [
        src
    ]);
    const blobURL = (0,react.useMemo)(()=>{
        if (!value) return '';
        return URL.createObjectURL(value);
    }, [
        value
    ]);
    if (component !== 'video') return null;
    if (loading || loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton_Skeleton, {
            variant: "rectangular",
            ...SkeletonProps
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
        ref: videoRef,
        muted: true,
        ...VideoProps,
        children: blobURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("source", {
            src: blobURL,
            type: "video/mp4"
        }) : null
    }));
});

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/ArticlesTab.tsx






const ArticlesTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        main: {},
        body: {
            width: '100%',
            height: 360,
            overflow: 'hidden',
            borderRadius: 8,
            boxSizing: 'border-box',
            border: `solid 1px ${theme.palette.divider}`
        },
        footer: {
            margin: theme.spacing(2.75, 0)
        },
        hero: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: 360,
            objectFit: 'scale-down'
        },
        name: {
            whiteSpace: 'nowrap',
            maxWidth: '50%',
            display: 'inline-block',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        icon: {
            color: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(15, 20, 25)',
            width: 64,
            height: 64,
            opacity: 0.1
        }
    })
);
function ArticlesTab(props) {
    const { boxInfo , boxMetadata  } = props;
    const { classes  } = ArticlesTab_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.main,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.body,
                children: (()=>{
                    if (!(boxMetadata === null || boxMetadata === void 0 ? void 0 : boxMetadata.mediaType)) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.hero,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskSharpIconOfSize */.Vh, {
                            classes: {
                                root: classes.icon
                            },
                            size: 22
                        })
                    }));
                    switch(boxMetadata.mediaType){
                        case MediaType.Video:
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Video, {
                                VideoProps: {
                                    className: classes.hero,
                                    controls: true
                                },
                                src: boxMetadata.mediaUrl
                            }));
                        default:
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.hero,
                                src: boxMetadata.mediaUrl
                            }));
                    }
                })()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.footer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        color: "textPrimary",
                        children: boxInfo.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: [
                            boxInfo.sold,
                            "/",
                            boxInfo.total
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DetailsTab.tsx



const DetailsTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        main: {
            height: 360,
            overflow: 'auto',
            marginBottom: theme.spacing(2.75)
        },
        section: {
            margin: theme.spacing(4, 0),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        placeholder: {
            textAlign: 'center',
            marginTop: 170
        },
        title: {
            fontSize: 18,
            fontWeight: 500,
            lineHeight: '24px',
            marginBottom: theme.spacing(4)
        },
        content: {
            fontSize: 14,
            lineHeight: '24px',
            whiteSpace: 'pre-line'
        }
    })
);
function DetailsTab(props) {
    const { boxInfo , boxMetadata  } = props;
    const { classes  } = DetailsTab_useStyles();
    const definitions = boxMetadata === null || boxMetadata === void 0 ? void 0 : boxMetadata.activities.map((x)=>({
            title: x.title,
            content: x.body
        })
    );
    if (!definitions) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textPrimary",
            children: "No detailed information."
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.main,
        children: definitions === null || definitions === void 0 ? void 0 : definitions.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textPrimary",
                        variant: "h3",
                        children: x.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.content,
                        color: "textPrimary",
                        variant: "body2",
                        children: x.content
                    })
                ]
            }, i)
        )
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js + 1 modules
var difference = __webpack_require__(44729);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721TokenDetailed.ts
var useERC721TokenDetailed = __webpack_require__(76592);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/CollectibleCard.tsx + 5 modules
var CollectibleCard = __webpack_require__(40943);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/TokenCard.tsx






const TokenCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        title: {
            textAlign: 'center',
            margin: theme.spacing(1, 0),
            maxWidth: 160
        },
        name: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    })
);
const TokenCard = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { contractDetailed , tokenId , renderOrder  } = props;
    const { classes  } = TokenCard_useStyles();
    const { tokenDetailed  } = (0,useERC721TokenDetailed/* useERC721TokenDetailed */.zi)(contractDetailed, tokenId);
    var _name;
    return tokenDetailed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleCard/* CollectibleCard */.Z, {
                readonly: true,
                provider: types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA,
                token: tokenDetailed,
                renderOrder: renderOrder
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.title,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textSecondary",
                    variant: "body2",
                    children: (_name = tokenDetailed.info.name) !== null && _name !== void 0 ? _name : tokenId
                })
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {});
});

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(9853);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/DrawResultDialog.tsx












const DrawResultDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        main: {},
        list: {
            height: 360,
            overflow: 'auto',
            marginBottom: theme.spacing(2),
            display: 'grid',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gridGap: theme.spacing(1)
        },
        token: {}
    })
);
function DrawResultDialog(props) {
    var _utils, ref;
    const { open , onClose , boxInfo , contractDetailed  } = props;
    const { classes  } = DrawResultDialog_useStyles();
    const { lastPurchasedTokenIds , setLastPurchasedTokenIds  } = (0,unstated_next/* useContainer */.u)(Context);
    const postLink = (0,usePostInfo/* usePostLink */.Vc)();
    const shareSuccessLink = (ref = (_utils = social_network/* activatedSocialNetworkUI.utils */.LM.utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, `I just claimed a #MaskBox with @realMaskNetwork. Install mask.io and create your own NFT mystery box! \n ${postLink}`);
    const onShare = (0,react.useCallback)(()=>{
        onClose();
        window.open(shareSuccessLink, '_blank', 'noopener noreferrer');
    }, [
        shareSuccessLink
    ]);
    if (!contractDetailed) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: "Successful",
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.list,
                        display: "flex",
                        flexWrap: "wrap",
                        children: (0,difference/* default */.Z)(boxInfo.tokenIdsPurchased, lastPurchasedTokenIds).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.token,
                                flex: 1,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenCard, {
                                    tokenId: x,
                                    contractDetailed: contractDetailed,
                                    renderOrder: i
                                })
                            }, x)
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        size: "medium",
                        fullWidth: true,
                        variant: "contained",
                        onClick: onShare,
                        children: "Share"
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/components/PreviewCard.tsx

















const useTabsStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            width: '100%',
            height: 36,
            minHeight: 36,
            margin: `0 ${location.host.includes('minds') ? '12px' : 'auto'}`,
            '& .Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            },
            borderRadius: 4
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: `${theme.spacing(2)} !important`
        }
    })
);
function PreviewCard(props) {
    const { classes: tabClasses  } = useTabsStyles();
    const state = (0,react.useState)(CardTab.Articles);
    const [openDrawDialog, setOpenDrawDialog] = (0,react.useState)(false);
    const [openDrawResultDialog, setOpenDrawResultDialog] = (0,react.useState)(false);
    const { boxId , boxState , boxStateMessage , boxInfo , boxMetadata , contractDetailed , paymentCount , setPaymentCount , paymentTokenAddress , setPaymentTokenAddress , paymentTokenPrice , paymentTokenBalance , paymentTokenDetailed , // token ids
    lastPurchasedTokenIds , refreshLastPurchasedTokenIds , // transaction
    openBoxTransaction , openBoxTransactionOverrides , openBoxTransactionGasLimit , setOpenBoxTransactionOverrides , // retry
    retryMaskBoxStatus , retryMaskBoxInfo , retryBoxInfo , retryMaskBoxCreationSuccessEvent , retryMaskBoxTokensForSale , retryMaskBoxPurchasedTokens ,  } = (0,unstated_next/* useContainer */.u)(Context);
    const txConfig = (0,react.useMemo)(()=>{
        var ref;
        return {
            ...openBoxTransaction === null || openBoxTransaction === void 0 ? void 0 : openBoxTransaction.config,
            gas: (ref = openBoxTransactionOverrides === null || openBoxTransactionOverrides === void 0 ? void 0 : openBoxTransactionOverrides.gas) !== null && ref !== void 0 ? ref : openBoxTransactionGasLimit
        };
    }, [
        openBoxTransaction === null || openBoxTransaction === void 0 ? void 0 : openBoxTransaction.config,
        openBoxTransactionOverrides,
        openBoxTransactionGasLimit
    ]);
    // #region open box
    const [openBoxState, openBoxCallback, resetOpenBoxCallback] = useTransactionCallback(types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED, txConfig, openBoxTransaction === null || openBoxTransaction === void 0 ? void 0 : openBoxTransaction.method);
    const onRefresh = (0,react.useCallback)(()=>{
        state[1](CardTab.Articles);
        setPaymentCount(1);
        setPaymentTokenAddress('');
        resetOpenBoxCallback();
        retryMaskBoxInfo();
        retryMaskBoxCreationSuccessEvent();
        retryMaskBoxTokensForSale();
        retryMaskBoxPurchasedTokens();
    }, [
        resetOpenBoxCallback,
        retryMaskBoxInfo,
        retryMaskBoxCreationSuccessEvent,
        retryMaskBoxTokensForSale,
        retryMaskBoxPurchasedTokens, 
    ]);
    const [drawing, setDrawing] = (0,react.useState)(false);
    const onDraw = (0,react.useCallback)(async ()=>{
        setDrawing(true);
        refreshLastPurchasedTokenIds();
        try {
            await openBoxCallback();
            retryMaskBoxStatus();
            setOpenDrawDialog(false);
        } catch  {}
        setDrawing(false);
    }, [
        openBoxCallback,
        refreshLastPurchasedTokenIds,
        retryMaskBoxStatus
    ]);
    const { setDialog: setTransactionDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        const isConfirmed = openBoxState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED;
        if (isConfirmed) {
            onRefresh();
            setOpenDrawResultDialog(true);
        }
    });
    (0,react.useEffect)(()=>{
        if (openBoxState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        var ref;
        setTransactionDialog({
            open: true,
            state: openBoxState,
            summary: `Open ${(ref = boxInfo === null || boxInfo === void 0 ? void 0 : boxInfo.name) !== null && ref !== void 0 ? ref : 'box'}...`
        });
    }, [
        openBoxState.type
    ]);
    // #endregion
    if (boxState === BoxState.UNKNOWN) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                width: "100%",
                height: 36
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                width: "100%",
                height: 300,
                sx: {
                    marginTop: 2
                }
            })
        ]
    }));
    if (boxState === BoxState.ERROR) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: "Something went wrong."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                size: "small",
                onClick: retryBoxInfo,
                children: "Retry"
            })
        ]
    }));
    if (boxState === BoxState.NOT_FOUND || !boxInfo) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: "Failed to load box."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                size: "small",
                onClick: retryMaskBoxInfo,
                children: "Retry"
            })
        ]
    }));
    const tabProps = {
        tabs: [
            {
                label: 'Articles',
                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticlesTab, {
                    boxInfo: boxInfo,
                    boxMetadata: boxMetadata
                }) : null,
                sx: {
                    p: 0
                }
            },
            {
                label: 'Details',
                children: boxInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DetailsTab, {
                    boxInfo: boxInfo,
                    boxMetadata: boxMetadata
                }) : null,
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        classes: tabClasses
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: "",
                ...tabProps,
                state: state
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                ActionButtonProps: {
                    size: 'medium'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    size: "medium",
                    fullWidth: true,
                    variant: "contained",
                    disabled: boxState !== BoxState.READY,
                    onClick: ()=>setOpenDrawDialog(true)
                    ,
                    children: (()=>{
                        var ref;
                        return boxState === BoxState.READY && paymentTokenAddress ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                boxStateMessage,
                                " (",
                                (0,formatter/* formatBalance */.az)(paymentTokenPrice, (ref = paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.decimals) !== null && ref !== void 0 ? ref : 0),
                                ' ',
                                paymentTokenDetailed === null || paymentTokenDetailed === void 0 ? void 0 : paymentTokenDetailed.symbol,
                                "/Time)"
                            ]
                        }) : boxStateMessage;
                    })()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawDialog, {
                boxInfo: boxInfo,
                open: openDrawDialog,
                drawing: drawing,
                onClose: ()=>{
                    setOpenBoxTransactionOverrides(null);
                    setOpenDrawDialog(false);
                },
                onSubmit: onDraw
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DrawResultDialog, {
                boxInfo: boxInfo,
                contractDetailed: contractDetailed,
                open: openDrawResultDialog,
                onClose: ()=>{
                    refreshLastPurchasedTokenIds();
                    setOpenDrawResultDialog(false);
                }
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/SNSAdaptor/index.tsx









const isMaskBox = (x)=>x.startsWith('https://box-beta.mask.io') || x.startsWith('https://box.mask.io')
;
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isMaskBox);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const link = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks().find(isMaskBox);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    var ref;
    const [, chainId] = (ref = props.url.match(/chain=(\d+)/i)) !== null && ref !== void 0 ? ref : [];
    var ref1;
    const [, boxId] = (ref1 = props.url.match(/box=(\d+)/i)) !== null && ref1 !== void 0 ? ref1 : [];
    var ref2;
    const [, hashRoot] = (ref2 = props.url.match(/rootHash=([\dA-Za-z]+)/)) !== null && ref2 !== void 0 ? ref2 : [];
    const shouldNotRender = !chainId || !boxId;
    (0,src/* usePluginWrapper */.fI)(!shouldNotRender);
    if (shouldNotRender) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: Number.parseInt(chainId, 10),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Context.Provider, {
            initialState: {
                boxId,
                hashRoot
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewCard, {})
        })
    }));
}


/***/ }),

/***/ 94651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* reexport */ getMaskBoxMetadata),
  "g": () => (/* reexport */ getMerkleProof)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/rss3-next@0.6.17_typescript@4.6.1-rc/node_modules/rss3-next/dist/browser/RSS3.js
var RSS3 = __webpack_require__(6351);
var RSS3_default = /*#__PURE__*/__webpack_require__.n(RSS3);
// EXTERNAL MODULE: ./src/plugins/MaskBox/constants.ts
var constants = __webpack_require__(42731);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/rss3.ts


async function createRSS(address) {
    return new (RSS3_default())({
        endpoint: constants/* RSS3_ENDPOINT */.Py,
        address,
        sign: async (message)=>{
            throw new Error('Not supported.');
        }
    });
}
async function getMaskBoxMetadata(boxId, creator) {
    var ref;
    const rss = await createRSS(creator);
    const file = await rss.files.get(rss.account.address);
    if (!file) throw new Error('The account was not found.');
    const boxes = (ref = Object.getOwnPropertyDescriptor(file, '_box')) === null || ref === void 0 ? void 0 : ref.value;
    return boxes === null || boxes === void 0 ? void 0 : boxes[boxId];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/merkleProof.ts


async function getMerkleProof(leaf, root) {
    try {
        const response = await fetch(dist_default()(constants/* MERKLE_PROOF_ENDPOINT */.mN, {
            leaf,
            root: root.replace(/^0x/, '')
        }));
        return await response.json();
    } catch (err) {
        throw new Error(Reflect.get(Object(err), 'message'));
    }
}

;// CONCATENATED MODULE: ./src/plugins/MaskBox/apis/index.ts




/***/ }),

/***/ 71482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ MaskBoxRPC)
/* harmony export */ });
/* unused harmony export MaskBoxMessages */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42731);


const MaskBoxMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const MaskBoxRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 3262).then(__webpack_require__.bind(__webpack_require__, 73262))
, MaskBoxMessages.rpc);


/***/ }),

/***/ 69471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTokenPrice),
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43576);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37828);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70202);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12705);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18249);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80945);






const task = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pollingTask */ .s_)(async ()=>{
    await _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.kickToUpdateTokenPrices */ .V.kickToUpdateTokenPrices();
    return false;
}, {
    autoStart: false,
    delay: _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .UPDATE_CHAIN_STATE_DELAY */ .js
});
function useTokenPrice(chainId, contractAddress, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    var ref2;
    let platformId = undefined;
    let coinId = undefined;
    if (chainId) {
        platformId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoPlatformId */ .AQ)(chainId);
        coinId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getCoinGeckoCoinId */ .vM)(chainId);
    }
    const category = (ref2 = contractAddress || coinId) === null || ref2 === void 0 ? void 0 : ref2.toLowerCase();
    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // start the polling task
        task.reset();
        return ()=>task.cancel()
        ;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!category) return;
        if (contractAddress && platformId) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackContract */ .V.trackContract(platformId, contractAddress);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateTokenPrices */ .V.updateTokenPrices();
        }
        if (!contractAddress) {
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trackNativeToken */ .V.trackNativeToken(category);
            _messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.updateNativeTokenPrices */ .V.updateNativeTokenPrices();
        }
        return _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.addListener */ .JC.addListener((newVal)=>{
            var ref;
            var ref1;
            const value = (ref1 = (ref = newVal[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref1 !== void 0 ? ref1 : 0;
            setPrice(value);
        });
    }, [
        platformId,
        category,
        contractAddress
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var ref;
        if (!category) return;
        const currentTokenPrices = _settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings.value */ .JC.value;
        var ref3;
        setPrice((ref3 = (ref = currentTokenPrices[category]) === null || ref === void 0 ? void 0 : ref[currencyType]) !== null && ref3 !== void 0 ? ref3 : 0);
    }, [
        category,
        currencyType
    ]);
    if (!category) return 0;
    return price;
}
function useNativeTokenPrice(chainId, currencyType = _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .CurrencyType.USD */ .V2.USD) {
    return useTokenPrice(chainId, undefined, currencyType);
}


/***/ }),

/***/ 45279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 80066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ EthereumChainBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(51503);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAllowTestnet.ts

function useAllowTestnet() {
    return (0,context/* useWeb3StateContext */.N9)().allowTestnet;
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings_settings = __webpack_require__(3087);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumChainBoundary.tsx














const useStyles = (0,src/* makeStyles */.ZL)()(()=>({})
);
function EthereumChainBoundary(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const plugin = (0,plugin_infra_src/* useActivatedPlugin */.Rc)(pluginID, 'any');
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const allowTestnet = useAllowTestnet();
    const providerType = (0,shared_src/* useValueRef */.E)(settings/* currentProviderSettings */.t1);
    const { noSwitchNetworkTip =false  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const expectedChainId = props.chainId;
    const expectedNetwork = (0,chainDetailed/* getChainName */.qz)(expectedChainId);
    const actualChainId = chainId;
    const actualNetwork = (0,chainDetailed/* getChainName */.qz)(actualChainId);
    // if false then it will not guide the user to switch the network
    const isAllowed = (0,chainDetailed/* isChainIdValid */.Ji)(expectedChainId, allowTestnet) && !!account && providerType !== types/* ProviderType.Coin98 */.lP.Coin98;
    // is the actual chain id matched with the expected one?
    const isChainMatched = actualChainId === expectedChainId;
    const isPluginMatched = pluginID === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
    var ref1;
    // is the actual chain id a valid one even if it does not match with the expected one?
    const isValid = (ref1 = props === null || props === void 0 ? void 0 : (ref = props.isValidChainId) === null || ref === void 0 ? void 0 : ref.call(props, actualChainId, expectedChainId)) !== null && ref1 !== void 0 ? ref1 : false;
    const onSwitchChain = (0,react.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,esm/* delay */.gw)(1000);
        if (!isAllowed) return;
        const switchToChain = async ()=>{
            // read the chain detailed from the built-in chain list
            const chainDetailedCAIP = (0,chainDetailed/* getChainDetailedCAIP */.EX)(expectedChainId);
            if (!chainDetailedCAIP) throw new Error('Unknown network type.');
            // if mask wallet was used it can switch network automatically
            if (providerType === types/* ProviderType.MaskWallet */.lP.MaskWallet) {
                await messages/* WalletRPC.updateAccount */.V.updateAccount({
                    chainId: expectedChainId
                });
                return;
            }
            // request ethereum-compatible network
            const networkType = (0,chainDetailed/* getNetworkTypeFromChainId */._T)(expectedChainId);
            if (!networkType) return;
            try {
                const overrides = {
                    chainId: expectedChainId,
                    providerType
                };
                await Promise.race([
                    (async ()=>{
                        await (0,esm/* delay */.gw)(30 /* seconds */  * 1000 /* milliseconds */ );
                        throw new Error('Timeout!');
                    })(),
                    networkType === types/* NetworkType.Ethereum */.td.Ethereum ? service/* default.Ethereum.switchEthereumChain */.ZP.Ethereum.switchEthereumChain(expectedChainId, overrides) : service/* default.Ethereum.addEthereumChain */.ZP.Ethereum.addEthereumChain(chainDetailedCAIP, account, overrides), 
                ]);
                // recheck
                const chainIdHex = await service/* default.Ethereum.getChainId */.ZP.Ethereum.getChainId(overrides);
                if (Number.parseInt(chainIdHex, 16) !== expectedChainId) throw new Error('Failed to switch chain.');
            } catch  {
                throw new Error(`Switch Chain Error: Make sure your wallet is on the ${(0,pipes/* resolveNetworkName */.nW)(networkType)} network.`);
            }
        };
        const switchToPlugin = async ()=>{
            settings_settings/* pluginIDSettings.value */.tR.value = plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM;
        };
        if (!isChainMatched) await switchToChain();
        if (!isPluginMatched) await switchToPlugin();
    }, [
        account,
        isAllowed,
        isChainMatched,
        isPluginMatched,
        providerType,
        expectedChainId
    ]);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const renderBox = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: props.className,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            sx: !props.disablePadding ? {
                paddingTop: 1,
                paddingBottom: 1
            } : null,
            children: children
        }));
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_connect_wallet_tip')
                })
            }),
            !props.hiddenConnectButton ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                size: "small",
                sx: {
                    marginTop: 1.5
                },
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_wallet')
            }) : null
        ]
    }));
    if (isChainMatched && isPluginMatched || isValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    if (!isAllowed) return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            children: t('plugin_wallet_not_available_on', {
                network: actualNetwork
            })
        })
    }));
    if (pluginID !== plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        var ref2;
        var ref3, _switchButtonStyle;
        return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: (ref3 = plugin === null || plugin === void 0 ? void 0 : (ref2 = plugin.name) === null || ref2 === void 0 ? void 0 : ref2.fallback) !== null && ref3 !== void 0 ? ref3 : 'Unknown Plugin'
                        })
                    })
                }) : null,
                isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    variant: "contained",
                    size: "small",
                    className: classes.switchButton,
                    sx: (_switchButtonStyle = props.switchButtonStyle) !== null && _switchButtonStyle !== void 0 ? _switchButtonStyle : {
                        marginTop: 1.5
                    },
                    init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: t('plugin_wallet_switch_network', {
                            network: expectedNetwork
                        })
                    }),
                    waiting: t('plugin_wallet_switch_network_under_going', {
                        network: expectedNetwork
                    }),
                    complete: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...props.ActionButtonPromiseProps
                }) : null
            ]
        }));
    }
    var _switchButtonStyle1;
    return renderBox(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualNetwork
                    })
                })
            }) : null,
            isAllowed ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                variant: "contained",
                size: "small",
                className: classes.switchButton,
                sx: (_switchButtonStyle1 = props.switchButtonStyle) !== null && _switchButtonStyle1 !== void 0 ? _switchButtonStyle1 : {
                    marginTop: 1.5
                },
                init: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedNetwork
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedNetwork
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedNetwork
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...props.ActionButtonPromiseProps
            }) : null
        ]
    }));
}


/***/ }),

/***/ 15061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ EthereumWalletConnectedBoundary)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(57256);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(67759);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletRiskWarningDialog.ts




const useWalletRiskWarningDialog = ()=>{
    const account = (0,useAccount/* useAccount */.m)();
    const [isConfirmed, setConfirmed] = (0,react.useState)(false);
    const fetchRiskWarningStatus = ()=>{
        if (!account) setConfirmed(false);
        else messages/* WalletRPC.getRiskWarningConfirmed */.V.getRiskWarningConfirmed(account).then((confirmed)=>setConfirmed(confirmed !== null && confirmed !== void 0 ? confirmed : false)
        );
    };
    const { openDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletRiskWarningDialogUpdated */.R.events.walletRiskWarningDialogUpdated, fetchRiskWarningStatus);
    (0,react.useEffect)(fetchRiskWarningStatus, [
        account
    ]);
    return {
        isConfirmed,
        openDialog
    };
};

;// CONCATENATED MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function EthereumWalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const nativeTokenBalance = (0,useNativeTokenBalance/* useNativeTokenBalance */.h)();
    // #region remote controlled confirm risk warning
    const { isConfirmed: isRiskWarningConfirmed , openDialog: openRiskWarningDialog  } = useWalletRiskWarningDialog();
    // #endregion
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    // #endregion
    if (!account) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    }));
    if (!isRiskWarningConfirmed && !hideRiskWarningConfirmed) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    }));
    var _value;
    if ((0,base_src/* isZero */.Fr)((_value = nativeTokenBalance.value) !== null && _value !== void 0 ? _value : '0') && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    }));
    if (!chainIdValid && !offChain) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        children: children
    }));
}


/***/ }),

/***/ 81508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useBlockNumber)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22572);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92971);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17869);


/**
 * Get the current block number of current chain
 */ function useBlockNumber(expectedChainId) {
    const defaultChainId = (0,___WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,___WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId: expectedChainId !== null && expectedChainId !== void 0 ? expectedChainId : defaultChainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getBlockNumber();
    }, [
        web3
    ]);
}


/***/ }),

/***/ 48136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22572);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92971);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41966);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46522);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28389);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79518);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .useOpenseaAPIConstants */ .$Y)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        if (!address || !wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        const erc721ContractDetailedFromChain = await getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
        if (!GET_CONTRACT_URL) return erc721ContractDetailedFromChain;
        const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
        // We prefer to use `name` and `symbol` from chain rather than opensea since,
        //  these two data on opensea is sometimes incorrect. Meanwhile there's often
        //   a lack of `iconURL` from chain, which exists on opensea.
        return contractDetailedFromOpensea ? {
            ...contractDetailedFromOpensea,
            name: erc721ContractDetailedFromChain.name,
            symbol: erc721ContractDetailedFromChain.symbol
        } : erc721ContractDetailedFromChain;
    }, [
        address,
        chainId,
        erc721TokenContract
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    var ref, ref1, ref2;
    const results = await Promise.allSettled([
        (ref = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.name())) !== null && ref !== void 0 ? ref : lazyBlank,
        (ref1 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.symbol())) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.baseURI())) !== null && ref2 !== void 0 ? ref2 : lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}


/***/ }),

/***/ 35329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useGasPrice)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22572);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17869);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92971);



function useGasPrice() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)({
        chainId
    });
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        return web3.eth.getGasPrice();
    }, [
        web3,
        chainId
    ]);
}


/***/ }),

/***/ 7744:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"creator","type":"address"}],"name":"CancelSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ClaimPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint32","name":"start_time","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"end_time","type":"uint32"},{"indexed":false,"internalType":"bool","name":"sell_all","type":"bool"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"box_id","type":"uint256"},{"indexed":true,"internalType":"address","name":"customer","type":"address"},{"indexed":true,"internalType":"address","name":"nft_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"OpenSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"name":"addNftIntoBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"addWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"admin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"cancelBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"box_ids","type":"uint256[]"}],"name":"claimPayment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct MysteryBox.PaymentOption[]","name":"payment","type":"tuple[]"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"uint32","name":"start_time","type":"uint32"},{"internalType":"uint32","name":"end_time","type":"uint32"},{"internalType":"bool","name":"sell_all","type":"bool"},{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"createBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxInfo","outputs":[{"internalType":"address","name":"creator","type":"address"},{"internalType":"address","name":"nft_address","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint32","name":"personal_limit","type":"uint32"},{"internalType":"address","name":"qualification","type":"address"},{"internalType":"address","name":"holder_token_addr","type":"address"},{"internalType":"uint256","name":"holder_min_token_amount","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"}],"name":"getBoxStatus","outputs":[{"components":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"receivable_amount","type":"uint256"}],"internalType":"struct MysteryBox.PaymentInfo[]","name":"payment","type":"tuple[]"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"canceled","type":"bool"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getNftListForSale","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"address","name":"customer","type":"address"}],"name":"getPurchasedNft","outputs":[{"internalType":"uint256[]","name":"nft_id_list","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"uint8","name":"amount","type":"uint8"},{"internalType":"uint8","name":"payment_token_index","type":"uint8"},{"internalType":"bytes","name":"proof","type":"bytes"}],"name":"openBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"}],"name":"removeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"box_id","type":"uint256"},{"internalType":"bytes32","name":"qualification_data","type":"bytes32"}],"name":"setQualificationData","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]');

/***/ })

}]);