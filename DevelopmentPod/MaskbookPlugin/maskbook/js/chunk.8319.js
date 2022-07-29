"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8319],{

/***/ 28319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96724);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21784);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(18271);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67938);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72499);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50719);
/* harmony import */ var _hook_useTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43240);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93455);
/* harmony import */ var _hook_usePopupContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8701);
/* harmony import */ var _hooks_useWalletLockStatus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60723);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        box: {
            height: 'calc( 100% - 50px )',
            background: '#F7F9FA'
        },
        container: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: 12,
            rowGap: 16,
            padding: '16px',
            boxSizing: 'border-box'
        },
        walletItem: {
            cursor: 'pointer',
            background: '#fff',
            width: 'calc( 50% - 6px )',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            padding: '12px 0',
            boxSizing: 'content-box',
            height: 'fit-content'
        },
        walletIcon: {
            width: '30px',
            height: '30px'
        },
        walletName: {
            fontSize: 12,
            fontFamily: 'Helvetica',
            fontWeight: 700,
            color: 'rgba(118, 127, 141, 1)'
        }
    })
);
const ConnectWalletPage = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .s0)();
    const { setSigned  } = _hook_usePopupContext__WEBPACK_IMPORTED_MODULE_9__/* .PopupContext.useContainer */ .t.useContainer();
    const { isLocked , loading: getLockStatusLoading  } = (0,_hooks_useWalletLockStatus__WEBPACK_IMPORTED_MODULE_10__/* .useWalletLockStatus */ .f)();
    // connect to ethereum mainnet
    const network1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .getRegisteredWeb3Networks */ .Rm)().find((x)=>x.networkSupporterPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM && x.chainId === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ChainId.Mainnet */ .a_.Mainnet
    );
    const providers = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .getRegisteredWeb3Providers */ .i8)().filter((x)=>x.providerAdaptorPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    );
    const { ProviderIconClickBait  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3UI */ .$d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM).SelectProviderDialog ?? {};
    const { Connection  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3State */ .dM)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (network, provider)=>{
        if (provider.type === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_12__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            if (isLocked && !getLockStatusLoading) {
                navigate(urlcat__WEBPACK_IMPORTED_MODULE_1___default()(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.Unlock */ .mZ.Unlock, {
                    from: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.SelectWallet */ .mZ.SelectWallet,
                    goBack: true,
                    popup: true
                }));
                return;
            }
            navigate(urlcat__WEBPACK_IMPORTED_MODULE_1___default()(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.SelectWallet */ .mZ.SelectWallet, {
                popup: true
            }));
            return;
        }
        const connection = await Connection?.getConnection?.({
            chainId: network.chainId,
            providerType: provider.type
        });
        const account = await connection?.connect();
        navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.VerifyWallet */ .mZ.VerifyWallet, {
            state: {
                ...account,
                providerType: provider.type
            }
        });
    }, [
        isLocked,
        getLockStatusLoading
    ]);
    (0,_hook_useTitle__WEBPACK_IMPORTED_MODULE_7__/* .useTitle */ .Z)(t('plugin_wallet_on_connect'));
    (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)(()=>{
        setSigned(false);
    });
    if (!network1) return null;
    const createProvider = (provider, options)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classes.walletItem,
            onClick: options?.onClick,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
                    src: provider.icon.toString(),
                    className: classes.walletIcon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    className: classes.walletName,
                    children: provider.name
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.box,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: classes.container,
            children: providers.filter((x)=>(x.enableRequirements?.supportedExtensionSites ?? []).includes(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ExtensionSite.Popup */ .v_.Popup)
            ).map((provider)=>{
                return ProviderIconClickBait ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ProviderIconClickBait, {
                    network: network1,
                    provider: provider,
                    onClick: onClick,
                    children: createProvider(provider)
                }, provider.ID) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                    children: createProvider(provider, {
                        onClick: ()=>onClick(network1, provider)
                    })
                }, provider.ID);
            })
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWalletPage);


/***/ })

}]);