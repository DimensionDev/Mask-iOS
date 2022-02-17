"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[657],{

/***/ 70657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55432);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30581);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39052);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(27768);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _components_WalletHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70726);
/* harmony import */ var _components_WalletInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45541);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22209);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95772);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65665);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63371);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1868);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9950);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77287);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    content: {
        flex: 1,
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    list: {
        backgroundColor: '#ffffff',
        padding: 0
    },
    item: {
        padding: 10,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer'
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    copy: {
        fontSize: 12,
        stroke: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    name: {
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    text: {
        marginLeft: 15
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: 16
    },
    button: {
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    }
});
const SelectWallet = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useHistory */ .k6)();
    const wallet = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .Osb)();
    const wallets = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__/* .useWallets */ .rBi)(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__/* .ProviderType.Maskbook */ .lP_.Maskbook);
    const walletList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return wallets.filter((item)=>{
            return (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_5__/* .isSameAddress */ .Wr$)(item.address, wallet === null || wallet === void 0 ? void 0 : wallet.address);
        });
    }, [
        wallet,
        wallets
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_WalletHeader__WEBPACK_IMPORTED_MODULE_3__/* .WalletHeader */ .Z, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_WalletInfo__WEBPACK_IMPORTED_MODULE_4__/* .WalletInfo */ .M, {
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    dense: true,
                    className: classes.list,
                    children: walletList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .ZP, {
                            className: classes.item,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_12__/* .MaskWalletIcon */ .j, {
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                                    className: classes.text,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                            className: classes.name,
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
                                            className: classes.address,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__.FormattedAddress, {
                                                    address: item.address,
                                                    size: 12
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .CopyIcon */ .T, {
                                                    className: classes.copy
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }, index)
                    )
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>history.goBack()
                        ,
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__/* .default */ .Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>history.push(_index__WEBPACK_IMPORTED_MODULE_7__/* .PopupRoutes.CreateWallet */ .mZ.CreateWallet)
                        ,
                        children: t('import')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectWallet);


/***/ })

}]);