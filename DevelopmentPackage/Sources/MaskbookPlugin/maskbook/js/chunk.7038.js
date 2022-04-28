"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7038],{

/***/ 87038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39517);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30232);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37253);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6955);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67376);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(65506);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30688);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93618);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5027);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61098);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11627);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10459);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78144);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()(()=>({
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
            padding: '0px 16px 20px 16px',
            wordBreak: 'break-all'
        }
    })
);
const SignRequest = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useI18N */ .M1)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)();
    const { classes  } = useStyles();
    const { value , loading: requestLoading  } = (0,_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_2__/* .useUnconfirmedRequest */ .d)();
    const wallet = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .O)();
    const [transferError, setTransferError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , address  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (value?.computedPayload?.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .EthereumRpcType.SIGN */ .Wv.SIGN || value?.computedPayload?.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .EthereumRpcType.SIGN_TYPED_DATA */ .Wv.SIGN_TYPED_DATA) {
            let message = value.computedPayload.data;
            try {
                message = (0,web3_utils__WEBPACK_IMPORTED_MODULE_6__.toUtf8)(message);
            } catch (error) {
                console.log(error);
            }
            return {
                address: value.computedPayload.to,
                data: message
            };
        }
        return {
            address: '',
            data: ''
        };
    }, [
        value
    ]);
    const [{ loading  }, handleConfirm] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(async ()=>{
        if (value) {
            try {
                await _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.confirmRequest */ .ZP.Ethereum.confirmRequest(value.payload);
            } catch (error_) {
                setTransferError(true);
            }
        }
    }, [
        value,
        location.search,
        history
    ]);
    const [{ loading: rejectLoading  }, handleReject] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)(async ()=>{
        if (!value) return;
        await _service__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Ethereum.rejectRequest */ .ZP.Ethereum.rejectRequest(value.payload);
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
            replace: true
        });
    }, [
        value
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(()=>{
        if (!value && !requestLoading) {
            navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Wallet */ .mZ.Wallet, {
                replace: true
            });
        }
    }, [
        value,
        requestLoading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        className: classes.title,
                        children: t('popups_wallet_signature_request')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        className: classes.walletName,
                        children: wallet?.name ?? ''
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        className: classes.secondary,
                        style: {
                            wordBreak: 'break-all'
                        },
                        children: address
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: classes.secondary,
                style: {
                    marginTop: 20
                },
                children: [
                    t('popups_wallet_signature_request_message'),
                    ":"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: classes.message,
                children: data
            }),
            transferError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                className: classes.error,
                children: t('popups_wallet_transfer_error_tip')
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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

/***/ 39517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64452);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84797);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86248);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19841);





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


/***/ })

}]);