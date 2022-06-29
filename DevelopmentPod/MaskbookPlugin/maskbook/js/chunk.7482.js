"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7482],{

/***/ 92735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70981);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32588);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(18271);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22720);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(47104);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5326);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(28257);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44451);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(80875);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46123);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21978);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67938);
/* harmony import */ var _components_CopyIconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22825);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43240);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91788);





















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
            padding: '0 16px 20px 16px',
            wordBreak: 'break-all'
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            padding: '0 16px 16px 16px'
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
            fill: '#7B8192',
            cursor: 'pointer'
        }
    })
);
const ContractInteraction = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__/* .useLocation */ .TH)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__/* .useNavigate */ .s0)();
    const { Others  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { NATIVE_TOKEN_ADDRESS  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__/* .useTokenConstants */ .kd)(chainId);
    const networkType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useNetworkType */ .bL)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const [transferError, setTransferError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { value: request , loading: requestLoading  } = (0,_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__/* .useUnconfirmedRequest */ .d)();
    const { tokenAddress , typeName , to , gas , gasPrice , maxFeePerGas , maxPriorityFeePerGas , amount , contractAddress , isNativeTokenInteraction ,  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const type = request?.formatterTransaction?.type;
        if (!type) return {};
        switch(type){
            case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.INTERACTION */ .vt.INTERACTION:
                switch(request.transactionContext?.name){
                    case 'approve':
                        return {
                            isNativeTokenInteraction: false,
                            typeName: request.formatterTransaction?.title,
                            tokenAddress: request.computedPayload?.to,
                            to: request.computedPayload?.to,
                            gas: request.computedPayload?.gas,
                            gasPrice: request.computedPayload?.gasPrice,
                            maxFeePerGas: request.computedPayload?.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload?.maxPriorityFeePerGas,
                            amount: request.transactionContext.parameters?.value
                        };
                    case 'transfer':
                    case 'transferFrom':
                        return {
                            isNativeTokenInteraction: false,
                            typeName: t('popups_wallet_contract_interaction_transfer'),
                            tokenAddress: request.computedPayload?.to,
                            to: request.transactionContext.parameters?.to,
                            gas: request.computedPayload?.gas,
                            gasPrice: request.computedPayload?.gasPrice,
                            maxFeePerGas: request.computedPayload?.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload?.maxPriorityFeePerGas,
                            amount: request.transactionContext.parameters?.value,
                            contractAddress: request.computedPayload?.to
                        };
                    default:
                        return {
                            isNativeTokenInteraction: true,
                            typeName: t('popups_wallet_contract_interaction'),
                            tokenAddress: request.computedPayload?.to,
                            to: request.computedPayload?.to,
                            gas: request.computedPayload?.gas,
                            gasPrice: request.computedPayload?.gasPrice,
                            maxFeePerGas: request.computedPayload?.maxFeePerGas,
                            maxPriorityFeePerGas: request.computedPayload?.maxPriorityFeePerGas,
                            amount: request.computedPayload?.value
                        };
                }
            case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.TRANSFER */ .vt.TRANSFER:
                return {
                    isNativeTokenInteraction: true,
                    typeName: t('wallet_transfer_send'),
                    tokenAddress: request.computedPayload?.to,
                    to: request.computedPayload?.to,
                    gas: request.computedPayload?.gas,
                    gasPrice: request.computedPayload?.gasPrice,
                    maxFeePerGas: request.computedPayload?.maxFeePerGas,
                    maxPriorityFeePerGas: request.computedPayload?.maxPriorityFeePerGas,
                    amount: request.computedPayload?.value
                };
            case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.DEPLOYMENT */ .vt.DEPLOYMENT:
            case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.RETRY */ .vt.RETRY:
            case _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.CANCEL */ .vt.CANCEL:
                throw new Error('To be implemented.');
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_7__/* .unreachable */ .t1)(type);
        }
    }, [
        request,
        t,
        NATIVE_TOKEN_ADDRESS
    ]);
    const { value: contractType  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useTokenSchema */ .od)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, contractAddress);
    // token detailed
    const { value: nativeToken  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useNativeToken */ .u0)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: token  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useFungibleToken */ .cf)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, !isNativeTokenInteraction ? tokenAddress : '');
    // gas price
    const isSupport1559 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useChainIdSupport */ .UY)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, chainId, 'EIP1559');
    const { value: gasOptions  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useGasOptions */ .oj)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: defaultPrices  } = (0,react_use__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)(async ()=>{
        if (isSupport1559 && !maxFeePerGas && !maxPriorityFeePerGas) {
            // Gwei to wei
            return {
                maxPriorityFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_10__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .formatGweiToWei */ .nU)(gasOptions?.normal.suggestedMaxPriorityFeePerGas ?? 0).toFixed(0)),
                maxFeePerGas: (0,web3_utils__WEBPACK_IMPORTED_MODULE_10__.toHex)((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .formatGweiToWei */ .nU)(gasOptions?.normal.suggestedMaxFeePerGas ?? 0).toFixed(0))
            };
        } else if (!gasPrice) {
            return {
                gasPrice: gasOptions?.normal.suggestedMaxFeePerGas ?? 0
            };
        }
        return {};
    }, [
        gasPrice,
        maxPriorityFeePerGas,
        maxFeePerGas,
        networkType,
        chainId,
        gasOptions,
        isSupport1559
    ]);
    // handlers
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(async ()=>{
        if (request) {
            try {
                await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_15__/* .WalletRPC.confirmRequest */ .V.confirmRequest(request.payload, {
                    chainId
                });
                navigate(-1);
            } catch (error_) {
                setTransferError(true);
            }
        }
        return;
    }, [
        request,
        location.search,
        history,
        chainId
    ]);
    const [{ loading: rejectLoading  }, handleReject] = (0,react_use__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)(async ()=>{
        if (!request) return;
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_15__/* .WalletRPC.rejectRequest */ .V.rejectRequest(request.payload);
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
            replace: true
        });
    }, [
        request
    ]);
    // Wei
    const gasPriceEIP1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_8___default())((maxFeePerGas ?? defaultPrices?.maxFeePerGas) ?? 0, 16);
    const gasPricePriorEIP1559 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_8___default())((gasPrice ?? defaultPrices?.gasPrice) ?? 0);
    const gasFee = (isSupport1559 ? gasPriceEIP1559 : gasPricePriorEIP1559).multipliedBy(gas ?? 0).integerValue().toFixed();
    // token decimals
    const tokenAmount = amount ?? 0;
    const tokenDecimals = token?.decimals;
    // token estimated value
    const { value: tokenPrice  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useFungibleTokenPrice */ .Of)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, token?.address, {
        chainId
    });
    const { value: nativeTokenPrice  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useNativeTokenPrice */ .lb)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const tokenValueUSD = contractType && [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__/* .SchemaType.ERC721 */ .XQ.ERC721,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_21__/* .SchemaType.ERC1155 */ .XQ.ERC1155
    ].includes(contractType) ? _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .ZERO */ .xE : (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .leftShift */ .w5)(tokenAmount, tokenDecimals).times((!isNativeTokenInteraction ? tokenPrice : nativeTokenPrice) ?? 0).toString();
    const totalUSD = new (bignumber_js__WEBPACK_IMPORTED_MODULE_8___default())((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_19__/* .formatWeiToEther */ .yp)(gasFee)).times(nativeTokenPrice ?? 0).plus(tokenValueUSD).toString();
    (0,react_use__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z)(()=>{
        if (!request && !requestLoading) {
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
                replace: true
            });
        }
    }, [
        request,
        requestLoading
    ]);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_14__/* .useTitle */ .Z)(typeName ?? t('popups_wallet_contract_interaction'));
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_11__/* .useReverseAddress */ .$q)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, to);
    return requestLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LoadingPlaceholder__WEBPACK_IMPORTED_MODULE_9__/* .LoadingPlaceholder */ .u, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: typeName
                            }),
                            domain && Others?.formatDomainName ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                className: classes.domain,
                                children: Others?.formatDomainName(domain)
                            }) : null,
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                className: classes.secondary,
                                style: {
                                    wordBreak: 'break-all'
                                },
                                children: [
                                    to,
                                    request?.formatterTransaction?.type === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .TransactionDescriptorType.INTERACTION */ .vt.INTERACTION && request?.transactionContext?.name === 'approve' && to ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CopyIconButton__WEBPACK_IMPORTED_MODULE_13__/* .CopyIconButton */ .m, {
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
                                        address: (isNativeTokenInteraction ? nativeToken?.address : token?.address) ?? '',
                                        chainId: chainId,
                                        name: (isNativeTokenInteraction ? nativeToken?.name : token?.name) ?? '',
                                        classes: {
                                            icon: classes.tokenIcon
                                        }
                                    }),
                                    tokenDecimals !== undefined ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                className: classes.amount,
                                                children: (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .isGreaterThan */ .T1)((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatBalance */ .az)(tokenAmount, tokenDecimals), (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .pow10 */ .wA)(9)) ? t('popups_wallet_token_infinite_unlock') : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedBalance */ .BV, {
                                                    value: tokenAmount,
                                                    decimals: tokenDecimals,
                                                    significant: 4,
                                                    formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatBalance */ .az
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                                children: !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .isGreaterThan */ .T1)(tokenValueUSD, (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .pow10 */ .wA)(9)) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedCurrency */ .bO, {
                                                    value: tokenValueUSD,
                                                    formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG
                                                }) : null
                                            })
                                        ]
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.item,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        className: classes.label,
                                        children: t('popups_wallet_contract_interaction_gas_fee')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        className: classes.gasPrice,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedBalance */ .BV, {
                                                value: gasFee,
                                                decimals: nativeToken?.decimals,
                                                significant: 4,
                                                symbol: nativeToken?.symbol,
                                                formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatBalance */ .az
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                                component: "button",
                                                onClick: ()=>navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .PopupRoutes.GasSetting */ .mZ.GasSetting)
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
                            !(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .isGreaterThan */ .T1)(totalUSD, (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .pow10 */ .wA)(9)) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classes.item,
                                style: {
                                    marginTop: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        className: classes.label,
                                        children: t('popups_wallet_contract_interaction_total')
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                        className: classes.gasPrice,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .FormattedCurrency */ .bO, {
                                            value: totalUSD,
                                            formatter: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .formatCurrency */ .xG
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
                    transferError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                        className: classes.error,
                        children: t('popups_wallet_transfer_error_tip')
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.controller,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {
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

/***/ 22720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58500);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10503);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2046);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67938);







const useUnconfirmedRequest = ()=>{
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { TransactionFormatter  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .getPayloadConfig */ .is)(payload);
        if (!computedPayload) return {
            payload
        };
        const formatterTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        const transactionContext = await TransactionFormatter?.createContext(chainId, computedPayload);
        return {
            payload,
            computedPayload,
            formatterTransaction,
            transactionContext
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.requestsUpdated.on */ .R$.events.requestsUpdated.on(result.retry);
    }, [
        result.retry
    ]);
    return result;
};


/***/ })

}]);