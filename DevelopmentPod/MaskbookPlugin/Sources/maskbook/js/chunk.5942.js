"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5942],{

/***/ 35942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95261);
/* harmony import */ var _Web3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21647);
/* harmony import */ var _Web3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60357);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23639);




const sns = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal, context) {
        (0,_storage__WEBPACK_IMPORTED_MODULE_3__/* .setupStorage */ .tX)(context.createKVStorage('memory', _storage__WEBPACK_IMPORTED_MODULE_3__/* .StorageDefaultValue */ .WQ));
        sns.Web3State = (0,_Web3State__WEBPACK_IMPORTED_MODULE_2__/* .createWeb3State */ .s)(signal);
    },
    Web3UI: _Web3UI__WEBPACK_IMPORTED_MODULE_1__/* .Web3UI */ ._
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sns);


/***/ }),

/***/ 60357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ createWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95139);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89260);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23639);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93046);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74562);






function createSubscriptionFromChainId(getter) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mapSubscription */ .S3)((0,_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)().chainId.subscription, getter);
}
function createSubscriptionFromUser(getter) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .mapSubscription */ .S3)((0,_storage__WEBPACK_IMPORTED_MODULE_3__/* .getStorage */ .cF)().user.subscription, getter);
}
function createWeb3State(signal) {
    return {
        Shared: {
            allowTestnet: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createConstantSubscription */ .qY)(false),
            account: createSubscriptionFromUser((user)=>{
                return user?.addr ?? '';
            }),
            wallets: createSubscriptionFromUser((user)=>{
                if (!user?.addr) return [];
                return [
                    {
                        name: 'Flow',
                        address: user?.addr,
                        hasDerivationPath: false,
                        hasStoredKeyInfo: false
                    }, 
                ];
            }),
            chainId: createSubscriptionFromChainId((x)=>x
            ),
            networkType: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .createConstantSubscription */ .qY)(_masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Flow */ .td.Flow),
            providerType: createSubscriptionFromUser((user)=>{
                return user?.addr ? _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .ProviderType.Blocto */ .lP.Blocto : undefined;
            })
        },
        Asset: {
            getFungibleAssets: _apis__WEBPACK_IMPORTED_MODULE_5__/* .getFungibleAssets */ .K
        },
        Utils: {
            formatAddress: _helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatAddress */ .Tg,
            formatBalance: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH,
            formatCurrency: (value, sign = '')=>`${sign}${(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .toFixed */ .FH)(value)}`
            ,
            isChainIdValid: ()=>true
            ,
            resolveTransactionLink: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .resolveTransactionLinkOnExplorer */ .z4,
            resolveAddressLink: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .resolveAddressLinkOnExplorer */ .V3,
            resolveBlockLink: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .resolveBlockLinkOnExplorer */ .vy
        }
    };
}


/***/ }),

/***/ 21647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Web3UI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 8 modules
var flow = __webpack_require__(95139);
// EXTERNAL MODULE: ../plugins/Flow/src/storage/index.ts
var storage = __webpack_require__(23639);
;// CONCATENATED MODULE: ../plugins/Flow/src/UI/components/ProviderIconClickBait.tsx





function ProviderIconClickBait({ network , provider , children , onSubmit , onClick  }) {
    const chainId = (0,entry_web3/* useChainId */.xx)(entry_web3/* NetworkPluginID.PLUGIN_FLOW */.FF.PLUGIN_FLOW);
    const fcl = (0,flow/* useFCL */.kD)(chainId);
    const onLogIn = (0,react.useCallback)(async ()=>{
        onClick?.(network, provider);
        const user = await fcl.logIn();
        if (user?.addr) {
            await (0,storage/* getStorage */.cF)().user.setValue(user);
            onSubmit?.(network, provider);
        }
    }, [
        fcl,
        network,
        provider,
        onClick,
        onSubmit
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            ...children.props,
            ...{
                onClick: onLogIn
            }
        }) : children
    });
}

;// CONCATENATED MODULE: ../plugins/Flow/src/UI/Web3UI/index.tsx

const Web3UI = {
    SelectProviderDialog: {
        ProviderIconClickBait: ProviderIconClickBait
    },
    WalletStatusDialog: {}
};


/***/ }),

/***/ 23639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WQ": () => (/* binding */ StorageDefaultValue),
/* harmony export */   "cF": () => (/* binding */ getStorage),
/* harmony export */   "tX": () => (/* binding */ setupStorage)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95139);

const StorageDefaultValue = {
    chainId: _masknet_web3_shared_flow__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_.Mainnet,
    user: null
};
let storage = null;
function setupStorage(_) {
    storage = _;
}
function getStorage() {
    return storage.storage;
}


/***/ })

}]);