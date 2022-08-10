"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4434],{

/***/ 64434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(32588);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18271);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80875);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22720);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21784);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50719);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44451);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43240);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67938);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91788);
















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()(()=>({
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
        walletName: {
            color: '#15181B',
            fontSize: 16,
            lineHeight: '22px',
            margin: '10px 0'
        },
        secondary: {
            color: '#7B8192',
            fontSize: 12,
            lineHeight: '16px',
            marginBottom: 10
        },
        message: {
            color: '#15181B',
            fontSize: 12,
            lineHeight: '16px',
            flex: 1,
            wordBreak: 'break-all',
            maxHeight: 260,
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        controller: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
            padding: 16,
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#ffffff'
        },
        button: {
            fontWeight: 600,
            padding: '9px 0',
            borderRadius: 20,
            fontSize: 14,
            lineHeight: '20px'
        },
        error: {
            color: '#FF5F5F',
            fontSize: 12,
            lineHeight: '16px',
            padding: '0 16px 20px 16px',
            wordBreak: 'break-all'
        }
    })
);
const SignRequest = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const routeLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useLocation */ .TH)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .s0)();
    const { classes  } = useStyles();
    const { value  } = (0,_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_3__/* .useUnconfirmedRequest */ .d)();
    const connection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3Connection */ .Tv)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const wallet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .Os)();
    const [transferError, setTransferError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , address  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!value) return {
            data: '',
            address: ''
        };
        if (value?.payload.method === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .EthereumMethodType.ETH_SIGN */ .W8.ETH_SIGN || value?.payload.method === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .EthereumMethodType.ETH_SIGN_TYPED_DATA */ .W8.ETH_SIGN_TYPED_DATA) {
            try {
                return {
                    address: value.payload.params?.[0],
                    data: (0,web3_utils__WEBPACK_IMPORTED_MODULE_2__.toUtf8)(value.payload.params?.[1] ?? '')
                };
            } catch  {
                return {
                    address: value.payload.params?.[0],
                    data: value.payload.params?.[1]
                };
            }
        } else if (value?.payload.method === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .EthereumMethodType.PERSONAL_SIGN */ .W8.PERSONAL_SIGN) return {
            address: value.payload.params?.[1],
            data: value.payload.params?.[0]
        };
        return {
            data: '',
            address: ''
        };
    }, [
        value
    ]);
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(async ()=>{
        const goBack = new URLSearchParams(routeLocation.search).get('goBack');
        if (value) {
            try {
                await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_10__/* .WalletRPC.confirmRequest */ .V.confirmRequest(value.payload, {
                    disableClose: !!goBack
                });
                navigate(-1);
            } catch (error_) {
                setTransferError(true);
            }
        }
    }, [
        value,
        routeLocation.search,
        connection
    ]);
    const [{ loading: rejectLoading  }, handleReject] = (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(async ()=>{
        if (!value) return;
        await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_10__/* .WalletRPC.rejectRequest */ .V.rejectRequest(value.payload);
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
            replace: true
        });
    }, [
        value,
        connection
    ]);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_8__/* .useTitle */ .Z)(t('popups_wallet_signature_request_title'));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: classes.title,
                        children: t('popups_wallet_signature_request')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: classes.walletName,
                        children: wallet?.name ?? ''
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        className: classes.secondary,
                        style: {
                            wordBreak: 'break-all'
                        },
                        children: address
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: classes.secondary,
                style: {
                    marginTop: 20
                },
                children: [
                    t('popups_wallet_signature_request_message'),
                    ":"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: classes.message,
                children: data
            }),
            transferError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: classes.error,
                children: t('popups_wallet_transfer_error_tip')
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        loading: loading,
                        variant: "contained",
                        className: classes.button,
                        onClick: handleConfirm,
                        children: t('confirm')
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignRequest);


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