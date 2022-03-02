"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3710],{

/***/ 43710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46571);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67020);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7282);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7334);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18249);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56838);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(19669);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99997);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67943);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22749);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43576);













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
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useHistory */ .k6)();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)();
    const { classes  } = useStyles();
    const { value , loading: requestLoading  } = (0,_hooks_useUnConfirmedRequest__WEBPACK_IMPORTED_MODULE_2__/* .useUnconfirmedRequest */ .d)();
    const wallet = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .O)();
    const [transferError, setTransferError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { data , address  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        var ref, ref1;
        if ((value === null || value === void 0 ? void 0 : (ref = value.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .EthereumRpcType.SIGN */ .Wv.SIGN || (value === null || value === void 0 ? void 0 : (ref1 = value.computedPayload) === null || ref1 === void 0 ? void 0 : ref1.type) === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .EthereumRpcType.SIGN_TYPED_DATA */ .Wv.SIGN_TYPED_DATA) {
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
        history.replace(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Wallet */ .mZ.Wallet);
    }, [
        value
    ]);
    (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)(()=>{
        if (!value && !requestLoading) {
            history.replace(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.Wallet */ .mZ.Wallet);
        }
    }, [
        value,
        requestLoading
    ]);
    var ref2;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
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
                        children: (ref2 = wallet === null || wallet === void 0 ? void 0 : wallet.name) !== null && ref2 !== void 0 ? ref2 : ''
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
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignRequest);


/***/ }),

/***/ 46571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22572);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70202);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99997);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37828);





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