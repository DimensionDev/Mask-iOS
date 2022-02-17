"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6595],{

/***/ 6595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/plugins/EVM/base.ts
var base = __webpack_require__(23284);
// EXTERNAL MODULE: ./src/plugins/EVM/UI/Web3UI/index.tsx + 2 modules
var Web3UI = __webpack_require__(9401);
// EXTERNAL MODULE: ./src/plugins/EVM/storage/index.ts
var storage = __webpack_require__(33641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(49238);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(9094);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(92280);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(98697);
// EXTERNAL MODULE: ./src/plugins/EVM/hooks/index.ts + 8 modules
var hooks = __webpack_require__(99223);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/components/InjectedProviderBridge.tsx









function InjectedProviderBridge(props) {
    const chainId = (0,src/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const providerType = (0,src/* useProviderType */._o)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const bridgedProvider = (0,hooks/* useBridgedProvider */.X$)(props.type);
    const onMounted = (0,react.useCallback)(async ()=>{
        if ((0,shared_base_src/* isDashboardPage */.K2)() || (0,shared_base_src/* isPopupPage */.N6)()) return;
        if (providerType !== types/* ProviderType.Coin98 */.lP.Coin98) return;
        const connected = await service/* default.Ethereum.connectInjected */.ZP.Ethereum.connectInjected();
        await Wallet_messages/* WalletRPC.updateAccount */.V.updateAccount({
            account: connected.account,
            chainId: connected.chainId,
            providerType
        });
    }, [
        chainId,
        providerType
    ]);
    (0,react.useEffect)(()=>{
        return messages/* EVM_Messages.events.INJECTED_PROVIDER_RPC_REQUEST.on */.j.events.INJECTED_PROVIDER_RPC_REQUEST.on(async ({ payload  })=>{
            try {
                const result = await bridgedProvider.request({
                    method: payload.method,
                    params: payload.params
                });
                messages/* EVM_Messages.events.INJECTED_PROVIDER_RPC_RESPONSE.sendToBackgroundPage */.j.events.INJECTED_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                    payload,
                    result,
                    error: null
                });
            } catch (error) {
                messages/* EVM_Messages.events.INJECTED_PROVIDER_RPC_RESPONSE.sendToBackgroundPage */.j.events.INJECTED_PROVIDER_RPC_RESPONSE.sendToBackgroundPage({
                    payload,
                    error: error instanceof Error ? error : new Error()
                });
            }
        });
    }, [
        bridgedProvider
    ]);
    (0,react.useEffect)(()=>{
        return bridgedProvider.on('accountsChanged', async (event)=>{
            if (!(0,chainDetailed/* isInjectedProvider */.sR)(providerType)) return;
            service/* default.Ethereum.notifyInjectedEvent */.ZP.Ethereum.notifyInjectedEvent('accountsChanged', event, providerType);
        });
    }, [
        providerType,
        bridgedProvider
    ]);
    (0,react.useEffect)(()=>{
        return bridgedProvider.on('chainChanged', (event)=>{
            if (!(0,chainDetailed/* isInjectedProvider */.sR)(providerType)) return;
            service/* default.Ethereum.notifyInjectedEvent */.ZP.Ethereum.notifyInjectedEvent('chainChanged', event, providerType);
        });
    }, [
        providerType,
        bridgedProvider
    ]);
    (0,useMount/* default */.Z)(onMounted);
    return null;
}

// EXTERNAL MODULE: ./src/plugins/EVM/UI/components/FortmaticProviderBridge.tsx + 1 modules
var FortmaticProviderBridge = __webpack_require__(57864);
;// CONCATENATED MODULE: ./src/plugins/EVM/UI/SNSAdaptor/index.tsx






const sns = {
    ...base/* base */.u,
    init (signal, context) {
        (0,storage/* setupStorage */.tX)(context.createKVStorage('memory', storage/* StorageDefaultValue */.WQ));
    },
    Web3UI: Web3UI/* Web3UI */._,
    Web3State: {},
    GlobalInjection () {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedProviderBridge, {
                    type: "ethereum"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedProviderBridge, {
                    type: "coin98"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FortmaticProviderBridge/* FortmaticProviderBridge */.p, {})
            ]
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ })

}]);