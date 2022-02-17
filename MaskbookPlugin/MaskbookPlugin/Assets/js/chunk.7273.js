"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3473],{

/***/ 43473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80050);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35313);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37186);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        padding: '10px 16px',
        backgroundColor: '#EFF5FF',
        color: '#1C68F3',
        fontSize: 14,
        lineHeight: '20px'
    },
    content: {
        flex: 1,
        padding: 16,
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        color: '#1C68F3',
        fontSize: 12,
        lineHeight: '16px',
        marginBottom: 10
    },
    button: {
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        color: '#1C68F3',
        lineHeight: '20px',
        backgroundColor: '#F7F9FA'
    }
});
const AddToken = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const wallet = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .Osb)();
    const { ERC20_TOKEN_LISTS  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useEthereumConstants */ .HVQ)();
    const { value: erc20TokensDetailed = [] , loading: erc20TokensDetailedLoading  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokensDetailedFromTokenLists */ .mrA)(ERC20_TOKEN_LISTS, '');
    var ref;
    const excludeTokens = Array.from((ref = wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_whitelist) !== null && ref !== void 0 ? ref : []);
    const filteredTokens = erc20TokensDetailed.filter((token)=>!excludeTokens.length || !excludeTokens.some((0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .currySameAddress */ .DC3)(token.address))
    );
    const renderTokens = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.uniqBy)(filteredTokens, (x)=>x.address.toLowerCase()
    );
    const { loading: loadingAssets , value: assets  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useAssetsByTokenList */ .l81)(renderTokens.filter((x)=>wallet_ts__WEBPACK_IMPORTED_MODULE_5__.EthereumAddress.isValid(x.address)
    ));
    const placeholder = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (erc20TokensDetailedLoading) return t('popups_wallet_loading_token_list');
        if (loadingAssets) return t('popups_wallet_loading_token_assets');
        if (!assets.length) return t('popups_wallet_no_token_found');
        return undefined;
    }, [
        erc20TokensDetailedLoading,
        loadingAssets,
        renderTokens
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (asset)=>{
        if (wallet && asset.token.type === _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Drc.ERC20) {
            await Promise.all([
                _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.addERC20Token */ .V.addERC20Token(asset.token),
                _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.trustERC20Token */ .V.trustERC20Token(wallet.address, asset.token), 
            ]);
        }
    }, [
        wallet
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.header,
                children: t('add_token')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                        className: classes.label,
                        children: t('popups_wallet_token')
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__.TokenList, {
                        onSelect: onSubmit,
                        assets: assets,
                        loading: loadingAssets,
                        placeholder: placeholder
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                style: {
                    padding: 16
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                    className: classes.button,
                    children: t('popups_wallet_go_back')
                })
            })
        ]
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToken);


/***/ })

}]);