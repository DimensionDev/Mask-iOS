"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[570],{

/***/ 30570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53432);
/* harmony import */ var _Web3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93790);
/* harmony import */ var _Web3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48657);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80754);




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

/***/ 48657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ createWeb3State)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86716);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52522);
/* harmony import */ var _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47950);
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75345);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9458);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80754);






function createSubscriptionFromPublicKey(getter) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .mapSubscription */ .S3)((0,_storage__WEBPACK_IMPORTED_MODULE_5__/* .getStorage */ .cF)().publicKey.subscription, getter);
}
function createWeb3State(signal) {
    const chainId = _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
    return {
        Shared: {
            allowTestnet: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false),
            account: createSubscriptionFromPublicKey((publicKey)=>{
                return publicKey !== null && publicKey !== void 0 ? publicKey : '';
            }),
            wallets: createSubscriptionFromPublicKey((publicKey)=>{
                if (!publicKey) return [];
                return [
                    {
                        name: 'Solana',
                        address: publicKey,
                        hasDerivationPath: false,
                        hasStoredKeyInfo: false
                    }, 
                ];
            }),
            chainId: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(chainId),
            networkType: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(_masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .NetworkType.Solana */ .td.Solana),
            providerType: createSubscriptionFromPublicKey((publicKey)=>{
                return publicKey ? _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.Phantom */ .lP.Phantom : undefined;
            })
        },
        Asset: {
            getFungibleAssets: _apis__WEBPACK_IMPORTED_MODULE_3__/* .getFungibleAssets */ .K,
            getNonFungibleAssets: _apis__WEBPACK_IMPORTED_MODULE_3__/* .getNonFungibleAssets */ .z
        },
        Utils: {
            formatAddress: _helpers__WEBPACK_IMPORTED_MODULE_4__/* .formatAddress */ .Tg,
            formatBalance: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .toFixed */ .FH,
            formatCurrency: (value)=>(0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .toFixed */ .FH)(value)
            ,
            isChainIdValid: ()=>true
            ,
            resolveTransactionLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveTransactionLinkOnExplorer */ .z4,
            resolveAddressLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveAddressLinkOnExplorer */ .V3,
            resolveBlockLink: _masknet_web3_shared_solana__WEBPACK_IMPORTED_MODULE_2__/* .resolveBlockLinkOnExplorer */ .vy
        }
    };
}


/***/ }),

/***/ 93790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ Web3UI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(4520);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ../web3-shared/solana/index.ts + 4 modules
var solana = __webpack_require__(47950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../plugins/Solana/src/storage/index.ts
var src_storage = __webpack_require__(80754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js
var node_modules_buffer = __webpack_require__(15313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bs58@4.0.1/node_modules/bs58/index.js
var bs58 = __webpack_require__(91945);
var bs58_default = /*#__PURE__*/__webpack_require__.n(bs58);
;// CONCATENATED MODULE: ../plugins/Solana/src/utils.ts


function hexToBase58(hex) {
    const buffer = node_modules_buffer.Buffer.from(hex, 'hex');
    return bs58_default().encode(buffer);
}

;// CONCATENATED MODULE: ../plugins/Solana/src/UI/components/ProviderIconClickBait.tsx







function ProviderIconClickBait({ network , provider , children , onSubmit , onClick  }) {
    const onLogIn = (0,react.useCallback)(async ()=>{
        onClick === null || onClick === void 0 ? void 0 : onClick(network, provider);
        const rsp = await sdk/* bridgedSolanaProvider.connect */.i1.connect();
        if (rsp === null || rsp === void 0 ? void 0 : rsp.publicKey) {
            const base58Key = hexToBase58(rsp.publicKey._bn);
            const storage = (0,src_storage/* getStorage */.cF)();
            await storage.publicKey.setValue(base58Key);
            await storage.network.setValue(network.chainId);
            onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(network, provider);
        }
    }, [
        provider,
        onClick,
        onSubmit
    ]);
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const disabled = isDashboard && provider.type === solana/* ProviderType.Phantom */.lP.Phantom;
    const disabledStyled = {
        opacity: 0.5
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,react.isValidElement)(children) ? /*#__PURE__*/ (0,react.cloneElement)(children, {
            style: disabled ? disabledStyled : undefined,
            ...children.props,
            onClick: disabled ? undefined : onLogIn
        }) : children
    }));
}

;// CONCATENATED MODULE: ../plugins/Solana/src/UI/Web3UI/index.tsx

const Web3UI = {
    SelectProviderDialog: {
        ProviderIconClickBait: ProviderIconClickBait
    }
};


/***/ }),

/***/ 80754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WQ": () => (/* binding */ StorageDefaultValue),
/* harmony export */   "tX": () => (/* binding */ setupStorage),
/* harmony export */   "cF": () => (/* binding */ getStorage)
/* harmony export */ });
const StorageDefaultValue = {
    publicKey: null,
    network: null
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