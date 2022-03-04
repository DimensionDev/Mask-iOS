"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5798],{

/***/ 5798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(59302);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(56838);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(19669);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(22749);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92597);
/* harmony import */ var _hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31662);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(63541);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(83064);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(95130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(80955);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(14754);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(22229);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(22283);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39850);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(7280);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(98294);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13573);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79226);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(17279);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66559);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63081);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45925);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _plugins_Wallet_hooks_useTokenPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65327);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75677);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27194);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15091);
/* harmony import */ var _components_CopyIconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(82666);






















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(()=>({
        container: {
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            flex: 1
        },
        info: {
            backgroundColor: '#F7F9FA',
            padding: 10,
            borderRadius: 8
        },
        title: {
            color: '#15181B',
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 500
        },
        spender: {
            color: '#15181B',
            fontSize: 16,
            lineHeight: '22px',
            margin: '10px 0'
        },
        secondary: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        content: {
            flex: 1,
            padding: 10
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        label: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#7B8192'
        },
        error: {
            color: '#FF5F5F',
            fontSize: 12,
            lineHeight: '16px',
            padding: '0px 16px 20px 16px',
            wordBreak: 'break-all'
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            padding: '0px 16px 16px 16px'
        },
        button: {
            fontWeight: 600,
            padding: '9px 0',
            borderRadius: 20,
            fontSize: 14,
            lineHeight: '20px'
        },
        tokenIcon: {
            width: 24,
            height: 24
        },
        amount: {
            flex: 1,
            fontSize: 18,
            color: '#15181B',
            lineHeight: '24px',
            fontWeight: 500,
            margin: '0 10px',
            wordBreak: 'break-all'
        },
        gasPrice: {
            fontSize: 12,
            lineHeight: '16px',
            display: 'flex',
            alignItems: 'center',
            color: '#15181B'
        },
        bottom: {
            position: 'fixed',
            bottom: 0,
            width: '100%'
        },
        domain: {
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500,
            color: '#15181B',
            margin: '10px 0'
        },
        copy: {
            fontSize: 12,
            stroke: '#7B8192',
            cursor: 'pointer'
        }
    })
);
const ContractInteraction = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    var ref10;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__/* .useLocation */ .TH)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_17__/* .useHistory */ .k6)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_18__/* .useChainId */ .xx)();
    const networkType = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .useNetworkType */ .b)();
    const [transferError, setTransferError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { value: request , loading: requestLoading  } = (0,_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__/* .useUnconfirmedRequest */ .d)();
    const { tokenAddress , typeName , to , gas , gasPrice , maxFeePerGas , maxPriorityFeePerGas , amount , isNativeTokenInteraction ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        var ref;
        const type = request === null || request === void 0 ? void 0 : (ref = request.computedPayload) === null || ref === void 0 ? void 0 : ref.type;
        if (!type) return {};
        switch(type){
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.CONTRACT_INTERACTION */ .Wv.CONTRACT_INTERACTION:
                switch(request.computedPayload.name){
                    case 'approve':
                        var ref7;
                        return {
                            isNativeTokenInteraction: false,
                            typeName: t('popups_wallet_token_unlock_permission'),
                            tokenAddress: request.computedPayload._tx.to,
                            to: request.computedPayload._tx.to,
                            gas: request.computedPayload._tx.gas,
                            gasPrice: request.computedPayload._tx.gasPrice,
                            maxFeePerGas: request.computedPayload._tx.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload._tx.maxPriorityFeePerGas,
                            amount: (ref7 = request.computedPayload.parameters) === null || ref7 === void 0 ? void 0 : ref7.value
                        };
                    case 'transfer':
                    case 'transferFrom':
                        var ref8, ref9;
                        return {
                            isNativeTokenInteraction: false,
                            typeName: t('popups_wallet_contract_interaction_transfer'),
                            tokenAddress: request.computedPayload._tx.to,
                            to: (ref8 = request.computedPayload.parameters) === null || ref8 === void 0 ? void 0 : ref8.to,
                            gas: request.computedPayload._tx.gas,
                            gasPrice: request.computedPayload._tx.gasPrice,
                            maxFeePerGas: request.computedPayload._tx.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload._tx.maxPriorityFeePerGas,
                            amount: (ref9 = request.computedPayload.parameters) === null || ref9 === void 0 ? void 0 : ref9.value
                        };
                    default:
                        return {
                            isNativeTokenInteraction: true,
                            typeName: t('popups_wallet_contract_interaction'),
                            tokenAddress: request.computedPayload._tx.to,
                            to: request.computedPayload._tx.to,
                            gas: request.computedPayload._tx.gas,
                            gasPrice: request.computedPayload._tx.gasPrice,
                            maxFeePerGas: request.computedPayload._tx.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload._tx.maxPriorityFeePerGas,
                            amount: request.computedPayload._tx.value
                        };
                }
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.SEND_ETHER */ .Wv.SEND_ETHER:
                return {
                    isNativeTokenInteraction: true,
                    typeName: t('wallet_transfer_send'),
                    tokenAddress: request.computedPayload._tx.to,
                    to: request.computedPayload._tx.to,
                    gas: request.computedPayload._tx.gas,
                    gasPrice: request.computedPayload._tx.gasPrice,
                    maxFeePerGas: request.computedPayload._tx.maxFeePerGas,
                    maxPriorityFeePerGas: request.computedPayload._tx.maxPriorityFeePerGas,
                    amount: request.computedPayload._tx.value
                };
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.CONTRACT_DEPLOYMENT */ .Wv.CONTRACT_DEPLOYMENT:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.ETH_DECRYPT */ .Wv.ETH_DECRYPT:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.ETH_GET_ENCRYPTION_PUBLIC_KEY */ .Wv.ETH_GET_ENCRYPTION_PUBLIC_KEY:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.WATCH_ASSET */ .Wv.WATCH_ASSET:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.WALLET_SWITCH_ETHEREUM_CHAIN */ .Wv.WALLET_SWITCH_ETHEREUM_CHAIN:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.CANCEL */ .Wv.CANCEL:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.RETRY */ .Wv.RETRY:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.SIGN */ .Wv.SIGN:
            case _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.SIGN_TYPED_DATA */ .Wv.SIGN_TYPED_DATA:
                throw new Error('To be implemented.');
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__/* .unreachable */ .t1)(type);
        }
    }, [
        request,
        t
    ]);
    // token detailed
    const { value: nativeToken  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__/* .useNativeTokenDetailed */ .J)();
    const { value: token  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_22__/* .useERC20TokenDetailed */ .k)(isNativeTokenInteraction ? '' : tokenAddress);
    // gas price
    const { value: defaultPrices  } = (0,react_use__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z)(async ()=>{
        if ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_24__/* .isEIP1559Supported */ .U1)(chainId) && !maxFeePerGas && !maxPriorityFeePerGas) {
            var ref, ref11;
            const response = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.getEstimateGasFees */ .V.getEstimateGasFees(chainId);
            var ref12, ref13;
            // Gwei to wei
            return {
                maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_13__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatGweiToWei */ .nU)((ref12 = response === null || response === void 0 ? void 0 : (ref = response.medium) === null || ref === void 0 ? void 0 : ref.suggestedMaxPriorityFeePerGas) !== null && ref12 !== void 0 ? ref12 : 0).toFixed(0)),
                maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_13__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatGweiToWei */ .nU)((ref13 = response === null || response === void 0 ? void 0 : (ref11 = response.medium) === null || ref11 === void 0 ? void 0 : ref11.suggestedMaxFeePerGas) !== null && ref13 !== void 0 ? ref13 : 0).toFixed(0))
            };
        } else if (!gasPrice) {
            const response = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.getGasPriceDictFromDeBank */ .V.getGasPriceDictFromDeBank(chainId);
            var _price;
            return {
                gasPrice: (_price = response === null || response === void 0 ? void 0 : response.data.normal.price) !== null && _price !== void 0 ? _price : 0
            };
        }
        return {};
    }, [
        gasPrice,
        maxPriorityFeePerGas,
        maxFeePerGas,
        networkType,
        chainId
    ]);
    // handlers
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(async ()=>{
        if (request) {
            try {
                await _service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.confirmRequest */ .ZP.Ethereum.confirmRequest(request.payload);
                history.goBack();
            } catch (error_) {
                setTransferError(true);
            }
        }
        return;
    }, [
        request,
        location.search,
        history
    ]);
    const [{ loading: rejectLoading  }, handleReject] = (0,react_use__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z)(async ()=>{
        if (!request) return;
        await _service__WEBPACK_IMPORTED_MODULE_9__/* ["default"].Ethereum.rejectRequest */ .ZP.Ethereum.rejectRequest(request.payload);
        history.replace(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.Wallet */ .mZ.Wallet);
    }, [
        request
    ]);
    var ref1;
    // Wei
    const gasPriceEIP1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_10___default())((ref1 = maxFeePerGas !== null && maxFeePerGas !== void 0 ? maxFeePerGas : defaultPrices === null || defaultPrices === void 0 ? void 0 : defaultPrices.maxFeePerGas) !== null && ref1 !== void 0 ? ref1 : 0, 16);
    var ref2, ref3;
    const gasPricePriorEIP1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_10___default())((ref3 = (ref2 = gasPrice) !== null && ref2 !== void 0 ? ref2 : defaultPrices === null || defaultPrices === void 0 ? void 0 : defaultPrices.gasPrice) !== null && ref3 !== void 0 ? ref3 : 0);
    const gasFee = ((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_24__/* .isEIP1559Supported */ .U1)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_24__/* .getChainIdFromNetworkType */ .EP)(networkType)) ? gasPriceEIP1559 : gasPricePriorEIP1559).multipliedBy(gas !== null && gas !== void 0 ? gas : 0).integerValue().toFixed();
    // token decimals
    const tokenAmount = amount !== null && amount !== void 0 ? amount : 0;
    const tokenDecimals = isNativeTokenInteraction ? nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.decimals : token === null || token === void 0 ? void 0 : token.decimals;
    // token estimated value
    const tokenPrice = (0,_plugins_Wallet_hooks_useTokenPrice__WEBPACK_IMPORTED_MODULE_11__/* .useTokenPrice */ .p)(chainId, !isNativeTokenInteraction ? token === null || token === void 0 ? void 0 : token.address : undefined);
    const nativeTokenPrice = (0,_plugins_Wallet_hooks_useTokenPrice__WEBPACK_IMPORTED_MODULE_11__/* .useNativeTokenPrice */ .l)(nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.chainId);
    var ref4;
    const tokenValueUSD = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .leftShift */ .w5)(tokenAmount, tokenDecimals).times((ref4 = !isNativeTokenInteraction ? tokenPrice : nativeTokenPrice) !== null && ref4 !== void 0 ? ref4 : 0).toString();
    const totalUSD = new (bignumber_js__WEBPACK_IMPORTED_MODULE_10___default())((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatWeiToEther */ .yp)(gasFee)).times(nativeTokenPrice).plus(tokenValueUSD).toString();
    //
    console.log('DEBUG: ContractInteraction');
    var ref5;
    console.log({
        amount,
        gasFee,
        gas,
        maxPriorityFeePerGas: maxPriorityFeePerGas !== null && maxPriorityFeePerGas !== void 0 ? maxPriorityFeePerGas : defaultPrices === null || defaultPrices === void 0 ? void 0 : defaultPrices.maxPriorityFeePerGas,
        maxFeePerGas: maxFeePerGas !== null && maxFeePerGas !== void 0 ? maxFeePerGas : defaultPrices === null || defaultPrices === void 0 ? void 0 : defaultPrices.maxFeePerGas,
        defaultPrice: (ref5 = gasPrice) !== null && ref5 !== void 0 ? ref5 : defaultPrices === null || defaultPrices === void 0 ? void 0 : defaultPrices.gasPrice,
        request,
        tokenPrice,
        tokenAmount,
        tokenDecimals,
        nativeTokenPrice
    });
    (0,react_use__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z)(()=>{
        if (!request && !requestLoading) {
            history.replace(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.Wallet */ .mZ.Wallet);
        }
    }, [
        request,
        requestLoading
    ]);
    const { value: domain  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_14__/* .useReverseAddress */ .$q)(to, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_14__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { Utils  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_14__/* .useWeb3State */ .dM)();
    var ref6;
    return requestLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_12__/* .LoadingPlaceholder */ .u, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: typeName
                            }),
                            domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                className: classes.domain,
                                children: Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName(domain)
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                className: classes.secondary,
                                style: {
                                    wordBreak: 'break-all'
                                },
                                children: [
                                    to,
                                    (request === null || request === void 0 ? void 0 : (ref10 = request.computedPayload) === null || ref10 === void 0 ? void 0 : ref10.type) === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_20__/* .EthereumRpcType.CONTRACT_INTERACTION */ .Wv.CONTRACT_INTERACTION && request.computedPayload.name === 'approve' && to ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CopyIconButton__WEBPACK_IMPORTED_MODULE_16__/* .CopyIconButton */ .m, {
                                        text: to,
                                        className: classes.copy
                                    }) : null
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.item,
                                style: {
                                    marginTop: 20,
                                    marginBottom: 30
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .TokenIcon */ .T1, {
                                        address: (ref6 = isNativeTokenInteraction ? nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.address : token === null || token === void 0 ? void 0 : token.address) !== null && ref6 !== void 0 ? ref6 : '',
                                        classes: {
                                            icon: classes.tokenIcon
                                        }
                                    }),
                                    tokenDecimals !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                                className: classes.amount,
                                                children: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .isGreaterThan */ .T1)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatBalance */ .az)(tokenAmount, tokenDecimals), (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .pow10 */ .wA)(9)) ? t('popups_wallet_token_infinite_unlock') : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedBalance */ .BV, {
                                                    value: tokenAmount,
                                                    decimals: tokenDecimals,
                                                    significant: 4,
                                                    formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatBalance */ .az
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                                children: !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .isGreaterThan */ .T1)(tokenValueUSD, (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .pow10 */ .wA)(9)) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedCurrency */ .bO, {
                                                    value: tokenValueUSD,
                                                    sign: "$",
                                                    formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatCurrency */ .xG
                                                }) : null
                                            })
                                        ]
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        className: classes.label,
                                        children: t('popups_wallet_contract_interaction_gas_fee')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        className: classes.gasPrice,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedBalance */ .BV, {
                                                value: gasFee,
                                                decimals: nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.decimals,
                                                significant: 4,
                                                symbol: nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.symbol,
                                                formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatBalance */ .az
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                                                component: "button",
                                                onClick: ()=>history.push(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.GasSetting */ .mZ.GasSetting)
                                                ,
                                                style: {
                                                    marginLeft: 10,
                                                    fontSize: 'inherit',
                                                    lineHeight: 'inherit'
                                                },
                                                children: t('popups_wallet_contract_interaction_edit')
                                            })
                                        ]
                                    })
                                ]
                            }),
                            !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .isGreaterThan */ .T1)(totalUSD, (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_15__/* .pow10 */ .wA)(9)) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.item,
                                style: {
                                    marginTop: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        className: classes.label,
                                        children: t('popups_wallet_contract_interaction_total')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        className: classes.gasPrice,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedCurrency */ .bO, {
                                            value: totalUSD,
                                            sign: "$",
                                            formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_25__/* .formatCurrency */ .xG
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.bottom,
                children: [
                    transferError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                        className: classes.error,
                        children: t('popups_wallet_transfer_error_tip')
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.controller,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                loading: rejectLoading,
                                variant: "contained",
                                className: classes.button,
                                style: !rejectLoading ? {
                                    backgroundColor: '#F7F9FA',
                                    color: '#1C68F3'
                                } : undefined,
                                onClick: handleReject,
                                children: t('cancel')
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {
                                loading: loading,
                                variant: "contained",
                                className: classes.button,
                                onClick: handleConfirm,
                                children: transferError ? t('popups_wallet_re_send') : t('confirm')
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContractInteraction);


/***/ }),

/***/ 31662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22572);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63081);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89987);





const useUnconfirmedRequest = ()=>{
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = await _service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.getComputedPayload */ .ZP.Ethereum.getComputedPayload(payload);
        return {
            payload,
            computedPayload
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.requestsUpdated.on */ .R$.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
};


/***/ }),

/***/ 65327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ useNativeTokenPrice),
/* harmony export */   "p": () => (/* binding */ useTokenPrice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63081);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63361);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95130);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22229);






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


/***/ })

}]);