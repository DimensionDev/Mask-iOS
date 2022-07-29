/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 39820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    isolated_dashboard_bridge_enabled: false,
    mask_SDK_ready: betaOrInsiderOnly,
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    trader_all_api_cached_enabled: devOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    // #endregion
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    harmony_enabled: true,
    nft_airdrop_enabled: false,
    post_actions_enabled: true,
    next_id_tip_enabled: true,
    // #region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     */ no_web_extension_dynamic_permission_request: is_iOSApp,
    has_no_WebRTC:  true || 0,
    // #endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 25683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ setupMaskKVStorageBackend),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70226);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29130);



const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventOnMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: '',
        schema: 1,
        chainId: 1,
        pluginId: ''
    })
};
const ApplicationEntryUnlistedListKey = 'application_entry_unlisted_list';
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {}),
    Settings: createPersistentKVStorage('settings', {
        debugging: false
    }),
    ApplicationEntryUnListedList: createPersistentKVStorage(ApplicationEntryUnlistedListKey, {
        current: {
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.RedPacket */ .je.RedPacket]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.FileService */ .je.FileService]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.ITO */ .je.ITO]: false,
            [`${_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.ITO */ .je.ITO}_claim`]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.CrossChainBridge */ .je.CrossChainBridge]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.MaskBox */ .je.MaskBox]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Savings */ .je.Savings]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Avatar */ .je.Avatar]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Trader */ .je.Trader]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Tips */ .je.Tips]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Transak */ .je.Transak]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Pets */ .je.Pets]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.FindTruman */ .je.FindTruman]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.GoPlusSecurity */ .je.GoPlusSecurity]: false,
            [_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .PluginId.Referral */ .je.Referral]: false
        }
    })
};


/***/ }),

/***/ 34906:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./shared-ui/locales_legacy/init.ts
var init = __webpack_require__(1465);
// EXTERNAL MODULE: ./src/setup.ui.0.ts
var setup_ui_0 = __webpack_require__(9955);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(14048);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(20940);
;// CONCATENATED MODULE: ./src/setup.ui.ts
// Start SNS adaptor




const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/content-script.ts


if (shared/* Flags.mask_SDK_ready */.vU.mask_SDK_ready) {
    Promise.all(/* import() */[__webpack_require__.e(3693), __webpack_require__.e(2488)]).then(__webpack_require__.bind(__webpack_require__, 32488));
}


/***/ }),

/***/ 54409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createNormalReactRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70195);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);





function createNormalReactRoot(jsx, container) {
    if (!container) container = document.getElementById('root') ?? void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return createRoot(container).render(/*#__PURE__*/ _jsx(StrictMode, {
        children: /*#__PURE__*/ _jsx(DisableShadowRootContext.Provider, {
            value: true,
            children: /*#__PURE__*/ _jsx(ErrorBoundary, {
                children: jsx
            })
        })
    }));
}


/***/ }),

/***/ 86843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails),
/* harmony export */   "eT": () => (/* binding */ PostInfoProvider),
/* harmony export */   "oQ": () => (/* binding */ usePostInfo)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14257);





const Context = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const PostInfoProvider = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableMap */ .vP) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableSet */ .n7) return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_1__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_3__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}


/***/ }),

/***/ 50719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Cp": () => (/* reexport */ web3_state/* AddressBookState */.Cp),
  "oD": () => (/* reexport */ web3_state/* BalanceNotifierState */.oD),
  "BS": () => (/* reexport */ web3_state/* BlockNumberNotifierState */.BS),
  "em": () => (/* reexport */ web3_state/* ConnectionState */.em),
  "xH": () => (/* reexport */ web3_state/* HubState */.xH),
  "OC": () => (/* reexport */ web3_state/* IdentityServiceState */.OC),
  "Te": () => (/* reexport */ web3_state/* NameServiceState */.Te),
  "CS": () => (/* reexport */ web3_state/* OthersState */.CS),
  "$8": () => (/* reexport */ Context/* PluginsWeb3ContextProvider */.$8),
  "Aw": () => (/* reexport */ web3_state/* ProviderState */.Aw),
  "SW": () => (/* reexport */ web3_state/* RiskWarningState */.SW),
  "$c": () => (/* reexport */ web3_state/* SettingsState */.$c),
  "Vi": () => (/* reexport */ web3_state/* TokenState */.Vi),
  "e": () => (/* reexport */ web3_state/* TransactionFormatterState */.e),
  "g7": () => (/* reexport */ web3_state/* TransactionState */.g7),
  "$2": () => (/* reexport */ web3_state/* TransactionWatcherState */.$2),
  "RM": () => (/* reexport */ web3_state/* WalletState */.RM),
  "Rm": () => (/* reexport */ store/* getRegisteredWeb3Networks */.Rm),
  "i8": () => (/* reexport */ store/* getRegisteredWeb3Providers */.i8),
  "mA": () => (/* reexport */ useAccount/* useAccount */.m),
  "Ne": () => (/* reexport */ hooks/* useAllPluginsWeb3State */.Ne),
  "QE": () => (/* reexport */ useAllowTestnet/* useAllowTestnet */.Q),
  "yH": () => (/* reexport */ hooks/* useAvailablePlugins */.yH),
  "KQ": () => (/* reexport */ useBalance/* useBalance */.K),
  "Ov": () => (/* reexport */ useBlockNumber/* useBlockNumber */.O),
  "oN": () => (/* reexport */ useBlockTimestamp/* useBlockTimestamp */.o),
  "v8": () => (/* reexport */ useBlockedFungibleTokens/* useBlockedFungibleTokens */.v),
  "YT": () => (/* reexport */ useBlockie/* useBlockie */.Y),
  "x5": () => (/* reexport */ useChainColor/* useChainColor */.x),
  "xx": () => (/* reexport */ useChainId/* useChainId */.x),
  "d1": () => (/* reexport */ useChainIdMainnet/* useChainIdMainnet */.d),
  "iN": () => (/* reexport */ useChainIdMatched/* useChainIdMatched */.i),
  "as": () => (/* reexport */ useChainIdValid/* useChainIdValid */.a),
  "S4": () => (/* reexport */ useClearTransactionsCallback/* useClearTransactionsCallback */.S),
  "$f": () => (/* reexport */ Context/* useCurrentWeb3NetworkPluginID */.$f),
  "Yn": () => (/* reexport */ useBeat/* useDoubleBlockBeatRetry */.Yn),
  "$U": () => (/* reexport */ useFungibleAssets/* useFungibleAssets */.C),
  "cf": () => (/* reexport */ useFungibleToken/* useFungibleToken */.c),
  "V4": () => (/* reexport */ useFungibleTokenBalance/* useFungibleTokenBalance */.V),
  "Of": () => (/* reexport */ useFungibleTokenPrice/* useFungibleTokenPrice */.O),
  "g3": () => (/* reexport */ useFungibleTokenWatched/* useFungibleTokenWatched */.g),
  "nt": () => (/* reexport */ useFungibleTokens/* useFungibleTokens */.n),
  "YW": () => (/* reexport */ useFungibleTokensBalance/* useFungibleTokensBalance */.Y),
  "B8": () => (/* reexport */ useFungibleTokensFromTokenList/* useFungibleTokensFromTokenList */.B),
  "oj": () => (/* reexport */ useGasOptions/* useGasOptions */.o),
  "Fh": () => (/* reexport */ useGasPrice/* useGasPrice */.F),
  "hn": () => (/* reexport */ useLookupAddress/* useLookupAddress */.h),
  "u0": () => (/* reexport */ useNativeToken/* useNativeToken */.u),
  "Z_": () => (/* reexport */ useNativeTokenAddress/* useNativeTokenAddress */.Z),
  "hj": () => (/* reexport */ useNativeTokenBalance/* useNativeTokenBalance */.h),
  "lb": () => (/* reexport */ useNativeTokenPrice/* useNativeTokenPrice */.l),
  "Vw": () => (/* reexport */ useNetworkDescriptor/* useNetworkDescriptor */.V),
  "px": () => (/* reexport */ useNetworkDescriptors/* useNetworkDescriptors */.p),
  "bL": () => (/* reexport */ useNetworkType/* useNetworkType */.b),
  "Em": () => (/* reexport */ useNonFungibleAsset/* useNonFungibleAsset */.E),
  "H1": () => (/* reexport */ useNonFungibleAssets/* useNonFungibleAssets */.H),
  "es": () => (/* reexport */ useNonFungibleCollections/* useNonFungibleCollections */.e),
  "bs": () => (/* reexport */ useNonFungibleToken/* useNonFungibleToken */.b),
  "N2": () => (/* reexport */ useNonFungibleTokenBalance/* useNonFungibleTokenBalance */.N),
  "LN": () => (/* reexport */ useNonFungibleTokenContract/* useNonFungibleTokenContract */.L),
  "fY": () => (/* reexport */ useProviderDescriptor/* useProviderDescriptor */.f),
  "_o": () => (/* reexport */ useProviderType/* useProviderType */._),
  "Sp": () => (/* reexport */ useRecentTransactions/* useRecentTransactions */.S),
  "kc": () => (/* reexport */ useRemoveTransaction/* useRemoveTransactionCallback */.k),
  "$q": () => (/* reexport */ useReverseAddress/* useReverseAddress */.$),
  "_W": () => (/* reexport */ useRiskWarningApproved/* useRiskWarningApproved */._),
  "zx": () => (/* reexport */ useSocialAddressListAll/* useSocialAddressListAll */.z),
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
  "Yg": () => (/* reexport */ useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y),
  "KP": () => (/* reexport */ useTrustedNonFungibleTokens/* useTrustedNonFungibleTokens */.K),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ useWeb3/* useWeb3 */.$),
  "Tv": () => (/* reexport */ useWeb3Connection/* useWeb3Connection */.T),
  "hh": () => (/* reexport */ useWeb3Hub/* useWeb3Hub */.h),
  "xo": () => (/* reexport */ useWeb3Provider/* useWeb3Provider */.x),
  "dM": () => (/* reexport */ useWeb3State/* useWeb3State */.d),
  "$d": () => (/* reexport */ useWeb3UI/* useWeb3UI */.$)
});

// UNUSED EXPORTS: PluginWeb3ContextProvider, useAccountName, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAddressBook, useBeat, useBeatRetry, useBlockedNonFungibleTokens, useChainDescriptor, useChainIdSupport, useCurrencyType, useCurrentWeb3NetworkAccount, useCurrentWeb3NetworkChainId, useCurrentWeb3NetworkNetworkType, useCurrentWeb3NetworkProviderType, useDefaultChainId, useDefaultNetworkType, useFungibleAsset, useFungibleAssetSourceType, useGasOptionType, useNonFungibleAssetSourceType, useNonFungibleTokenPrice, useNonFungibleTokens, useNonFungibleTokensBalance, useNonFungibleTokensFromTokenList, useProviderDescriptors, useProviderReady, useSingleBlockBeatRetry, useSocialAddressList, useTokenSchema, useWalletPrimary, useZeroAddress

// EXTERNAL MODULE: ../plugin-infra/src/web3/Context.tsx
var Context = __webpack_require__(46390);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAccount.ts
var useAccount = __webpack_require__(72128);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAccountName.ts
var useAccountName = __webpack_require__(7645);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAddressBook.ts
var useAddressBook = __webpack_require__(23987);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useSocialAddressList.ts
var useSocialAddressList = __webpack_require__(47807);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useSocialAddressListAll.ts
var useSocialAddressListAll = __webpack_require__(84702);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useAllowTestnet.ts
var useAllowTestnet = __webpack_require__(19891);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBalance.ts
var useBalance = __webpack_require__(45430);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBeat.ts
var useBeat = __webpack_require__(81215);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockNumber.ts
var useBlockNumber = __webpack_require__(22012);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockTimestamp.ts
var useBlockTimestamp = __webpack_require__(66482);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockedFungibleTokens.ts
var useBlockedFungibleTokens = __webpack_require__(64380);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockedNonFungibleTokens.ts
var useBlockedNonFungibleTokens = __webpack_require__(58257);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useBlockie.ts
var useBlockie = __webpack_require__(79840);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainColor.ts
var useChainColor = __webpack_require__(26675);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainDescriptor.ts
var useChainDescriptor = __webpack_require__(95579);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainId.ts
var useChainId = __webpack_require__(45087);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdMainnet.ts
var useChainIdMainnet = __webpack_require__(75080);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdMatched.ts
var useChainIdMatched = __webpack_require__(85560);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdSupport.ts
var useChainIdSupport = __webpack_require__(29075);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useChainIdValid.ts
var useChainIdValid = __webpack_require__(3307);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useClearTransactionsCallback.ts
var useClearTransactionsCallback = __webpack_require__(64919);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useCurrencyType.ts
var useCurrencyType = __webpack_require__(59398);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useDefaultChainId.ts
var useDefaultChainId = __webpack_require__(30447);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useDefaultNetworkType.ts
var useDefaultNetworkType = __webpack_require__(12641);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAsset.ts
var useFungibleAsset = __webpack_require__(9402);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAssetSourceType.ts
var useFungibleAssetSourceType = __webpack_require__(69289);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleAssets.ts
var useFungibleAssets = __webpack_require__(94635);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleToken.ts
var useFungibleToken = __webpack_require__(38327);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(61553);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenPrice.ts
var useFungibleTokenPrice = __webpack_require__(59449);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokenWatched.ts
var useFungibleTokenWatched = __webpack_require__(99055);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokens.ts
var useFungibleTokens = __webpack_require__(90920);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokensBalance.ts
var useFungibleTokensBalance = __webpack_require__(31405);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useFungibleTokensFromTokenList.ts
var useFungibleTokensFromTokenList = __webpack_require__(6319);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasOptionType.ts
var useGasOptionType = __webpack_require__(32575);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasOptions.ts
var useGasOptions = __webpack_require__(3125);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useGasPrice.ts
var useGasPrice = __webpack_require__(43385);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useLookupAddress.ts
var useLookupAddress = __webpack_require__(91202);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeToken.ts
var useNativeToken = __webpack_require__(35686);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenAddress.ts
var useNativeTokenAddress = __webpack_require__(72883);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(7739);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNativeTokenPrice.ts
var useNativeTokenPrice = __webpack_require__(40540);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkDescriptor.ts
var useNetworkDescriptor = __webpack_require__(19199);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkDescriptors.ts
var useNetworkDescriptors = __webpack_require__(3859);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNetworkType.ts
var useNetworkType = __webpack_require__(40969);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAsset.ts
var useNonFungibleAsset = __webpack_require__(872);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAssetSourceType.ts
var useNonFungibleAssetSourceType = __webpack_require__(20414);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleAssets.ts
var useNonFungibleAssets = __webpack_require__(45428);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleCollections.ts
var useNonFungibleCollections = __webpack_require__(83382);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenBalance.ts
var useNonFungibleTokenBalance = __webpack_require__(92223);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenContract.ts
var useNonFungibleTokenContract = __webpack_require__(45023);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokenPrice.ts
var useNonFungibleTokenPrice = __webpack_require__(96196);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokens.ts
var useNonFungibleTokens = __webpack_require__(81665);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokensBalance.ts
var useNonFungibleTokensBalance = __webpack_require__(23225);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleTokensFromTokenList.ts
var useNonFungibleTokensFromTokenList = __webpack_require__(13776);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useNonFungibleToken.ts
var useNonFungibleToken = __webpack_require__(74637);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderDescriptor.ts
var useProviderDescriptor = __webpack_require__(41623);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderDescriptors.ts
var useProviderDescriptors = __webpack_require__(11200);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderReady.ts
var useProviderReady = __webpack_require__(60209);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useProviderType.ts
var useProviderType = __webpack_require__(52892);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRemoveTransaction.ts
var useRemoveTransaction = __webpack_require__(89286);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useReverseAddress.ts
var useReverseAddress = __webpack_require__(77758);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRiskWarningApproved.ts
var useRiskWarningApproved = __webpack_require__(69753);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTokenSchema.ts
var useTokenSchema = __webpack_require__(68244);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(45813);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTransactions.ts
var useTransactions = __webpack_require__(16394);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTrustedFungibleTokens.ts
var useTrustedFungibleTokens = __webpack_require__(71506);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useTrustedNonFungibleTokens.ts
var useTrustedNonFungibleTokens = __webpack_require__(32414);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWallet.ts
var useWallet = __webpack_require__(10668);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWalletPrimary.ts
var useWalletPrimary = __webpack_require__(50360);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWallets.ts
var useWallets = __webpack_require__(70278);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3.ts
var useWeb3 = __webpack_require__(32383);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Provider.ts
var useWeb3Provider = __webpack_require__(75789);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Connection.ts
var useWeb3Connection = __webpack_require__(53837);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3Hub.ts
var useWeb3Hub = __webpack_require__(94227);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3State.ts
var useWeb3State = __webpack_require__(12368);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useWeb3UI.ts
var useWeb3UI = __webpack_require__(14232);
// EXTERNAL MODULE: ../plugin-infra/src/web3/useZeroAddress.ts
var useZeroAddress = __webpack_require__(23310);
;// CONCATENATED MODULE: ../plugin-infra/src/web3/index.ts
















































































// EXTERNAL MODULE: ../plugin-infra/src/web3-state/index.ts + 16 modules
var web3_state = __webpack_require__(27950);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(98119);
// EXTERNAL MODULE: ../plugin-infra/src/manager/store.ts
var store = __webpack_require__(93996);
;// CONCATENATED MODULE: ../plugin-infra/src/entry-web3.ts








/***/ }),

/***/ 31293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PluginId),
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork) {
    CurrentSNSNetwork[CurrentSNSNetwork["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork[CurrentSNSNetwork["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork[CurrentSNSNetwork["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork[CurrentSNSNetwork["Instagram"] = 3] = "Instagram";
    CurrentSNSNetwork[CurrentSNSNetwork["Minds"] = 4] = "Minds";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {}));
var PluginId;
(function(PluginId) {
    PluginId["Avatar"] = 'com.maskbook.avatar';
    PluginId["ArtBlocks"] = 'io.artblocks';
    PluginId["Collectible"] = 'com.maskbook.collectibles';
    PluginId["CryptoArtAI"] = 'com.maskbook.cryptoartai';
    PluginId["dHEDGE"] = 'org.dhedge';
    PluginId["EVM"] = 'com.mask.evm';
    PluginId["NextID"] = 'com.mask.next_id';
    PluginId["External"] = 'io.mask.external';
    PluginId["Furucombo"] = 'app.furucombo';
    PluginId["FindTruman"] = 'org.findtruman';
    PluginId["Gitcoin"] = 'co.gitcoin';
    PluginId["GoodGhosting"] = 'co.good_ghosting';
    PluginId["MaskBox"] = 'com.maskbook.box';
    PluginId["Poll"] = 'com.maskbook.poll';
    PluginId["Profile"] = 'com.mask.profile';
    PluginId["Trader"] = 'com.maskbook.trader';
    PluginId["Tips"] = 'com.maskbook.tip';
    PluginId["Transak"] = 'com.maskbook.transak';
    PluginId["Valuables"] = 'com.maskbook.tweet';
    PluginId["DAO"] = 'money.juicebox';
    PluginId["Debugger"] = 'io.mask.debugger';
    PluginId["Example"] = 'io.mask.example';
    PluginId["Flow"] = 'com.mask.flow';
    PluginId["RSS3"] = 'bio.rss3';
    PluginId["RedPacket"] = 'com.maskbook.red_packet';
    PluginId["RedPacketNFT"] = 'com.maskbook.red_packet_nft';
    PluginId["Pets"] = 'com.maskbook.pets';
    PluginId["Snapshot"] = 'org.snapshot';
    PluginId["Savings"] = 'com.savings';
    PluginId["ITO"] = 'com.maskbook.ito';
    PluginId["Wallet"] = 'com.maskbook.wallet';
    PluginId["PoolTogether"] = 'com.pooltogether';
    PluginId["UnlockProtocol"] = 'com.maskbook.unlockprotocol';
    PluginId["FileService"] = 'com.maskbook.fileservice';
    PluginId["CyberConnect"] = 'me.cyberconnect.app';
    PluginId["GoPlusSecurity"] = 'io.gopluslabs.security';
    PluginId["CrossChainBridge"] = 'io.mask.cross-chain-bridge';
    PluginId["Referral"] = 'com.maskbook.referral';
})(PluginId || (PluginId = {}));


/***/ }),

/***/ 83152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44451);



function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                return map.event.on(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(subscription);
}


/***/ }),

/***/ 69395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ EncryptionTargetType)
/* harmony export */ });
var NetworkPluginID;
(function(NetworkPluginID) {
    NetworkPluginID["PLUGIN_EVM"] = 'com.mask.evm';
    NetworkPluginID["PLUGIN_FLOW"] = 'com.mask.flow';
    NetworkPluginID["PLUGIN_SOLANA"] = 'com.mask.solana';
})(NetworkPluginID || (NetworkPluginID = {}));
var EncryptionTargetType;
(function(EncryptionTargetType) {
    EncryptionTargetType["Public"] = 'public';
    EncryptionTargetType["Self"] = 'self';
    EncryptionTargetType["E2E"] = 'e2e';
})(EncryptionTargetType || (EncryptionTargetType = {}));


/***/ }),

/***/ 52881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ CrossIsolationMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @deprecated
 * Prefer MaskMessages.
 *
 * Only use this in the following cases:
 *
 * - You need to send message across different plugins
 *       e.g. from the packages/plugins/Example to packages/plugins/Example2
 * - You need to send message from plugin
 *       e.g. packages/plugins/Example to the main Mask extension.
 */ // TODO: find a way to use a good API for cross isolation communication.
const CrossIsolationMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.WebExtensionMessage({
    domain: '_'
});


/***/ }),

/***/ 84831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ NextIDAction),
/* harmony export */   "V": () => (/* binding */ NextIDPlatform)
/* harmony export */ });
var NextIDAction;
(function(NextIDAction) {
    NextIDAction["Create"] = 'create';
    NextIDAction["Delete"] = 'delete';
})(NextIDAction || (NextIDAction = {}));
var NextIDPlatform;
(function(NextIDPlatform) {
    NextIDPlatform["NextID"] = 'nextid';
    NextIDPlatform["Twitter"] = 'twitter';
    NextIDPlatform["Keybase"] = 'keybase';
    NextIDPlatform["Ethereum"] = 'ethereum';
    NextIDPlatform["GitHub"] = 'github';
})(NextIDPlatform || (NextIDPlatform = {}));


/***/ }),

/***/ 30375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iD": () => (/* reexport */ CheckedError),
  "E": () => (/* reexport */ OptionalResult),
  "ps": () => (/* reexport */ andThenAsync/* andThenAsync */.p)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../shared-base/src/Results/OptionalResult.ts

const OptionalResult = {
    Some (x) {
        return (0,esm.Ok)((0,esm/* Some */.bD)(x));
    },
    None: (0,esm.Ok)(esm/* None */.Hq),
    fromResult (x) {
        if (x.err) return x;
        return (0,esm.Ok)((0,esm/* Some */.bD)(x.val));
    }
};

// EXTERNAL MODULE: ../shared-base/src/Results/andThenAsync.ts
var andThenAsync = __webpack_require__(60947);
;// CONCATENATED MODULE: ../shared-base/src/Results/CheckedError.ts

class CheckedError extends Error {
    toString() {
        if (this.reason) return `${this.kind}\n${this.reason}`;
        return super.toString();
    }
    static mapErr(r) {
        return (e)=>new CheckedError(r, e)
        ;
    }
    static withErr(f, o) {
        return (...args)=>{
            const r1 = f(...args);
            if ('then' in r1) return r1.then((r)=>r.mapErr(CheckedError.mapErr(o))
            );
            return r1.mapErr(CheckedError.mapErr(o));
        };
    }
    toErr() {
        return (0,esm/* Err */.UG)(this);
    }
    constructor(kind, reason){
        super(kind + '', {
            cause: reason
        });
        this.kind = kind;
        this.reason = reason;
    }
}

;// CONCATENATED MODULE: ../shared-base/src/Results/index.ts





/***/ }),

/***/ 89364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ DashboardRoutes)
/* harmony export */ });
var DashboardRoutes;
(function(DashboardRoutes) {
    DashboardRoutes["Welcome"] = '/welcome';
    DashboardRoutes["Setup"] = '/setup';
    DashboardRoutes["SignUp"] = '/sign-up';
    DashboardRoutes["SignIn"] = '/sign-in';
    DashboardRoutes["PrivacyPolicy"] = '/privacy-policy';
    DashboardRoutes["Personas"] = '/personas';
    DashboardRoutes["Wallets"] = '/wallets';
    DashboardRoutes["WalletsTransfer"] = '/wallets/transfer';
    DashboardRoutes["WalletsSwap"] = '/wallets/swap';
    DashboardRoutes["WalletsRedPacket"] = '/wallets/red-packet';
    DashboardRoutes["WalletsSell"] = '/wallets/sell';
    DashboardRoutes["WalletsHistory"] = '/wallets/history';
    DashboardRoutes["CreateMaskWallet"] = '/create-mask-wallet';
    DashboardRoutes["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    DashboardRoutes["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    DashboardRoutes["Settings"] = '/settings';
})(DashboardRoutes || (DashboardRoutes = {}));


/***/ }),

/***/ 41385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jk": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "Po": () => (/* binding */ isExtensionSiteType),
/* harmony export */   "sv": () => (/* binding */ getSiteType),
/* harmony export */   "v_": () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   "zQ": () => (/* binding */ isEnhanceableSiteType)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5906);


const matchEnhanceableSiteHost = {
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Localhost */ .J.Localhost]: /localhost/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Facebook */ .J.Facebook]: /facebook\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Twitter */ .J.Twitter]: /twitter\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Minds */ .J.Minds]: /minds\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.Instagram */ .J.Instagram]: /instagram\.com/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .EnhanceableSite.OpenSea */ .J.OpenSea]: /opensea\.io/i
};
const matchExtensionSitePathname = {
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .ExtensionSite.Dashboard */ .v.Dashboard]: /dashboard\.html/i,
    [_type__WEBPACK_IMPORTED_MODULE_0__/* .ExtensionSite.Popup */ .v.Popup]: /popups\.html/i
};
function getEnhanceableSiteType() {
    const { host  } = location;
    for (const [type, regexp] of Object.entries(matchEnhanceableSiteHost)){
        if (host.match(regexp)) return type;
        continue;
    }
    return;
}
function getExtensionSiteType() {
    const { pathname  } = location;
    for (const [type, regexp] of Object.entries(matchExtensionSitePathname)){
        if (pathname.match(regexp)) return type;
        continue;
    }
    return;
}
function getSiteType() {
    return getEnhanceableSiteType() ?? getExtensionSiteType();
}
function isEnhanceableSiteType() {
    return !!getEnhanceableSiteType();
}
function isExtensionSiteType() {
    return !!getExtensionSiteType();
}


/***/ }),

/***/ 716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ ObservableWeakMap),
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "n7": () => (/* binding */ ObservableSet),
/* harmony export */   "vP": () => (/* binding */ ObservableMap)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69260);


function tick(callback) {
    Promise.resolve().then(callback);
}
class ObservableWeakMap extends WeakMap {
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableMap extends Map {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableSet extends Set {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x)
        );
        this.event.emit('add', value);
        tick(()=>this.event.emit('add', value)
        );
        return this;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}


/***/ }),

/***/ 18615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* binding */ fromHex),
/* harmony export */   "NC": () => (/* binding */ toHex),
/* harmony export */   "mz": () => (/* binding */ fromBase64URL),
/* harmony export */   "s3": () => (/* binding */ toBase64),
/* harmony export */   "wi": () => (/* binding */ toBase64URL)
/* harmony export */ });
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99612);

function fromBase64URL(x) {
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.FromBase64Url */ .ep.FromBase64Url(x));
}
function toBase64URL(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToBase64Url */ .ep.ToBase64Url(x);
}
function toBase64(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToBase64 */ .ep.ToBase64(x);
}
function toHex(x) {
    return pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.ToHex */ .ep.ToHex(x);
}
function fromHex(x) {
    if (x.startsWith('0x')) x = x.slice(2);
    return new Uint8Array(pvtsutils__WEBPACK_IMPORTED_MODULE_0__/* .Convert.FromHex */ .ep.FromHex(x));
}


/***/ }),

/***/ 16819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CH": () => (/* reexport */ ECKeyIdentifierFromJsonWebKey),
  "mQ": () => (/* reexport */ JWKType/* assertEC_Private_JsonWebKey */.mQ),
  "xb": () => (/* reexport */ compressSecp256k1KeyRaw),
  "SH": () => (/* reexport */ compressSecp256k1Point),
  "qX": () => (/* reexport */ decompressSecp256k1Key),
  "Yj": () => (/* reexport */ decompressSecp256k1KeyRaw),
  "pf": () => (/* reexport */ decompressSecp256k1Point),
  "bG": () => (/* reexport */ JWKType/* isAESJsonWebKey */.bG),
  "PQ": () => (/* reexport */ JWKType/* isEC_Private_JsonWebKey */.PQ),
  "d8": () => (/* reexport */ JWKType/* isEC_Public_JsonWebKey */.d8),
  "dK": () => (/* reexport */ isSecp256k1Point),
  "Rx": () => (/* reexport */ isSecp256k1PrivateKey)
});

// UNUSED EXPORTS: assertAESJsonWebKey, assertEC_Public_JsonWebKey

// EXTERNAL MODULE: ../shared-base/src/crypto/JWKType.ts
var JWKType = __webpack_require__(55995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(18615);
// EXTERNAL MODULE: ../shared-base/src/Identifier/index.ts + 7 modules
var Identifier = __webpack_require__(57041);
;// CONCATENATED MODULE: ../shared-base/src/crypto/secp256k1.ts



// This module is only used in background.
// Loading tiny-secp256k1 will instantiate a WebAssembly module which is not allowed in the content script for unknown reason and fail the whole module graph.
async function loadLib() {
    if (true) {
        // Note: mobile (Android and iOS does not return a correct MINE type, therefore we can not use streaming to initialize the WASM module).
        WebAssembly.instantiateStreaming = undefined;
        WebAssembly.compileStreaming = undefined;
    }
    // You should not load this module in the content script. If you find you're stuck here, please check your code why it is loading this lib.
    const mod = await __webpack_require__.e(/* import() */ 6497).then(__webpack_require__.bind(__webpack_require__, 76497));
    return mod;
}
/**
 * Compress x & y into a single x
 */ async function compressSecp256k1Point(x, y) {
    const { isPoint , pointCompress  } = await loadLib();
    const xb = (0,convert/* fromBase64URL */.mz)(x);
    const yb = (0,convert/* fromBase64URL */.mz)(y);
    const point = new Uint8Array((0,esm/* concatArrayBuffer */.v_)(new Uint8Array([
        0x04
    ]), xb, yb));
    if (isPoint(point)) {
        return pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1!');
    }
}
/**
 * Decompress x into x & y
 */ async function decompressSecp256k1Point(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    const uncompressed = isPointCompressed(point) ? pointCompress(point, false) : point;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: (0,convert/* toBase64URL */.wi)(x),
        y: (0,convert/* toBase64URL */.wi)(y)
    };
}
async function compressSecp256k1KeyRaw(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (isPointCompressed(point)) return point;
    return pointCompress(point, true);
}
async function decompressSecp256k1KeyRaw(point) {
    const { isPoint , isPointCompressed , pointCompress  } = await loadLib();
    if (!isPoint(point)) throw new TypeError('Not a point on secp256k1!');
    if (!isPointCompressed(point)) return point;
    return pointCompress(point, false);
}
async function compressSecp256k1Key(key) {
    const arr = await compressSecp256k1Point(key.x, key.y);
    return (0,esm/* encodeArrayBuffer */.ll)(arr);
}
async function decompressSecp256k1Key(compressedPublic) {
    const arr = (0,esm/* decodeArrayBuffer */.xe)(compressedPublic);
    const key = await decompressSecp256k1Point(new Uint8Array(arr));
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC'
    };
    return jwk;
}
async function isSecp256k1Point(x) {
    const { isPoint  } = await loadLib();
    return isPoint(x);
}
async function isSecp256k1PrivateKey(d) {
    const { isPrivate  } = await loadLib();
    return isPrivate(d);
}
async function ECKeyIdentifierFromJsonWebKey(key) {
    const x = await compressSecp256k1Key(key);
    return new Identifier/* ECKeyIdentifier */.ob('secp256k1', x);
}

;// CONCATENATED MODULE: ../shared-base/src/crypto/index.ts





/***/ }),

/***/ 34523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(65084);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(50338);
;// CONCATENATED MODULE: ../shared-base/src/kv-storage/proxy.ts

function createProxyKVStorageBackend() {
    let target;
    let [promise, resolve, reject] = (0,esm/* defer */.PQ)();
    return {
        get beforeAutoSync () {
            return promise;
        },
        async getValue (...args) {
            return target.getValue(...args);
        },
        async setValue (...args) {
            return target.setValue(...args);
        },
        replaceBackend (backend) {
            target = backend;
            // resolve old one
            backend.beforeAutoSync.then(resolve, reject);
            [promise, resolve, reject] = (0,esm/* defer */.PQ)();
            backend.beforeAutoSync.then(resolve, reject);
        }
    };
}

;// CONCATENATED MODULE: ../shared-base/src/kv-storage/index.ts




const removed = Symbol.for('removed');

/**
 * Create a root scope of simple K/V storage.
 * @param backend The storage provider
 * @param message The message channel to sync the latest value
 * @param signal The abort signal
 */ function createKVStorageHost(backend, message, signal = new AbortController().signal) {
    return (name, defaultValues)=>{
        return createScope(signal, backend, message, null, name, defaultValues);
    };
}
const alwaysThrowHandler = ()=>{
    throw new TypeError('Invalid operation');
};
function createScope(signal, backend, message, parentScope, scope, defaultValues1) {
    if (scope.includes('/')) throw new TypeError('scope name cannot contains "/"');
    if (scope.includes(':')) throw new TypeError('scope name cannot contains ":"');
    const currentScope = parentScope === null ? scope : `${parentScope}/${scope}`;
    const storage = new Proxy({
        __proto__: null
    }, {
        defineProperty: alwaysThrowHandler,
        deleteProperty: alwaysThrowHandler,
        set: alwaysThrowHandler,
        preventExtensions: alwaysThrowHandler,
        setPrototypeOf: alwaysThrowHandler,
        get (target, prop, receiver) {
            if (typeof prop === 'symbol') return undefined;
            if (target[prop]) return target[prop];
            target[prop] = createState(signal, backend, message, currentScope, prop, defaultValues1[prop]);
            return target[prop];
        }
    });
    backend.beforeAutoSync.then(()=>{
        for (const [key, value] of Object.entries(defaultValues1)){
            if (value === removed) continue;
            // trigger the auto sync
            storage[key].initialized;
        }
    });
    return {
        createSubScope (subScope, defaultValues, scopeSignal) {
            const aggregatedSignal = (0,esm/* combineAbortSignal */.dq)(scopeSignal, signal);
            return createScope(aggregatedSignal, backend, message, currentScope, subScope, defaultValues);
        },
        storage
    };
}
function createState(signal, backend, message, scope, prop, defaultValue) {
    const propKey = `${scope}:${prop}`;
    let initialized = false;
    let usingDefaultValue = true;
    const initializedPromise = backend.beforeAutoSync.then(()=>backend.getValue(propKey)
    ).then((val)=>{
        if (val.some) usingDefaultValue = false;
        return val.unwrapOr(defaultValue);
    }).then((val)=>{
        state = val;
        initialized = true;
    });
    let state = defaultValue;
    const listeners = new Set();
    function subscribe(f) {
        listeners.add(f);
        return ()=>listeners.delete(f)
        ;
    }
    const subscription = {
        getCurrentValue: ()=>{
            if (!initialized) throw initializedPromise;
            return state;
        },
        subscribe
    };
    function setter(val) {
        if (isEqual(state, val)) return;
        usingDefaultValue = false;
        state = val;
        for (const f of listeners)f();
    }
    message.on(([eventKey, newValue])=>eventKey === propKey && setter(newValue)
    , {
        signal
    });
    return {
        get initialized () {
            return initialized;
        },
        get initializedPromise () {
            return initializedPromise;
        },
        get value () {
            if (!initialized) throw new Error('Try to access K/V state before initialization finished.');
            return state;
        },
        async setValue (value) {
            if (signal.aborted) throw new TypeError('Aborted storage.');
            // force trigger store when set state with default value to make it persistent.
            if (usingDefaultValue || !isEqual(state, value)) await backend.setValue(propKey, value);
            setter(value);
        },
        subscription
    };
}
function isEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a === 'object') {
        // Note: JSON stringify is not stable.
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
}


/***/ }),

/***/ 31600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseURL(text) {
    const lib = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["default"] */ .Z["default"] || anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
    // CJS-ESM compatibility
    return lib.list(text).map((x)=>x.string
    ).filter((y)=>{
        // See https://github.com/alexcorvi/anchorme.js/issues/109
        try {
            new URL(y);
            return true;
        } catch  {
            return false;
        }
    });
}


/***/ }),

/***/ 89241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* binding */ SOCIAL_MEDIA_ICON_MAPPING),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37594);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67558);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12095);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55903);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35961);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42099);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24421);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75430);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62305);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



const SOCIAL_MEDIA_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .TwitterColoredIcon */ .g, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .FacebookColoredIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MindsIcon */ .G, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .InstagramColoredIcon */ .$, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_ROUND_ICON_MAPPING = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_7__/* .TwitterRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_8__/* .FacebookRoundIcon */ .F, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .MindsRoundIcon */ .W, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .InstagramRoundIcon */ .A, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .OpenSeaColoredIcon */ .w, {}),
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: null
};
const SOCIAL_MEDIA_NAME = {
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter]: 'Twitter',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook]: 'Facebook',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Minds */ .Jk.Minds]: 'Mind',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Instagram */ .Jk.Instagram]: 'Instagram',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.OpenSea */ .Jk.OpenSea]: 'OpenSea',
    [_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Localhost */ .Jk.Localhost]: 'Localhost'
};
const SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID = [
    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Twitter */ .Jk.Twitter
];
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;


/***/ }),

/***/ 66437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fl": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.F),
/* harmony export */   "Lm": () => (/* reexport safe */ _common__WEBPACK_IMPORTED_MODULE_1__.Lm),
/* harmony export */   "QL": () => (/* reexport safe */ _SharedContextProvider__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "Xr": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.Xr),
/* harmony export */   "vU": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.vU),
/* harmony export */   "yQ": () => (/* reexport safe */ _evm__WEBPACK_IMPORTED_MODULE_3__.yQ)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22017);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64781);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18572);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15285);
/* harmony import */ var _SharedContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7736);
/* harmony import */ var _UITaskManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30613);








/***/ }),

/***/ 91295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_0__.H9),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_2__.i),
/* harmony export */   "vI": () => (/* reexport safe */ _useImageChecker__WEBPACK_IMPORTED_MODULE_4__.v),
/* harmony export */   "z": () => (/* reexport safe */ _useOpenShareTxDialog__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68483);
/* harmony import */ var _useOpenShareTxDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66442);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53661);
/* harmony import */ var _useImageFailOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78153);
/* harmony import */ var _useImageChecker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39800);







/***/ }),

/***/ 68483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ useMenu)
/* harmony export */ });
/* unused harmony exports useMenuContext, useMenuConfig */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63439);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31217);




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [status, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        setAnchorEl(element);
        setOpen(true);
        // HACK: it seems like anchor doesn't work correctly
        // but a force repaint can solve the problem.
        window.requestAnimationFrame(update);
    }, []);
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const close = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}


/***/ }),

/***/ 77818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "Tv": () => (/* reexport */ ApplicationEntry/* ApplicationEntry */.T),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "SR": () => (/* reexport */ ConcealableTabs/* ConcealableTabs */.S),
  "ek": () => (/* reexport */ ElementAnchor/* ElementAnchor */.e),
  "Kv": () => (/* reexport */ wallet/* FormattedAddress */.Kv),
  "BV": () => (/* reexport */ wallet/* FormattedBalance */.BV),
  "bO": () => (/* reexport */ wallet/* FormattedCurrency */.bO),
  "C2": () => (/* reexport */ FungibleTokenList/* FungibleTokenList */.C),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "Fl": () => (/* reexport */ contexts/* InjectedDialog */.Fl),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "uw": () => (/* reexport */ LoadRetry/* RetryHint */.u),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "I4": () => (/* reexport */ constants/* SOCIAL_MEDIA_ICON_MAPPING */.I4),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "WU": () => (/* reexport */ SettingSwitch/* SettingSwitch */.W),
  "QL": () => (/* reexport */ contexts/* SharedContextProvider */.QL),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o),
  "zr": () => (/* reexport */ languages/* addSharedI18N */.z),
  "n2": () => (/* reexport */ constants/* mediaViewerUrl */.n2),
  "vU": () => (/* reexport */ contexts/* sharedUIComponentOverwrite */.vU),
  "Xr": () => (/* reexport */ contexts/* sharedUINetworkIdentifier */.Xr),
  "vI": () => (/* reexport */ hooks/* useImageChecker */.vI),
  "H9": () => (/* reexport */ hooks/* useMenu */.H9),
  "z": () => (/* reexport */ hooks/* useOpenShareTxDialog */.z),
  "yQ": () => (/* reexport */ contexts/* usePickToken */.yQ),
  "B_": () => (/* reexport */ locales/* useSharedI18N */.B),
  "Lm": () => (/* reexport */ contexts/* useShowConfirm */.Lm),
  "iD": () => (/* reexport */ hooks/* useSnackbarCallback */.iD)
});

// UNUSED EXPORTS: BaseSharedUIProvider, ChainIcon, CommonUIProvider, ConfirmProvider, EvmSharedUIProvider, MAX_WALLET_LIMIT, SOCIAL_MEDIA_NAME, SOCIAL_MEDIA_ROUND_ICON_MAPPING, SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID, SharedTrans, TokenIconUI, TokenPickerProvider, createUITaskManager, languages, useBaseUIRuntime, useImageFailOver, useMenuConfig, useMenuContext, usePopupSnackbarCallback

// EXTERNAL MODULE: ../shared/src/contexts/index.ts
var contexts = __webpack_require__(66437);
// EXTERNAL MODULE: ../shared/src/hooks/index.ts
var hooks = __webpack_require__(91295);
// EXTERNAL MODULE: ../shared/src/wallet/index.ts + 3 modules
var wallet = __webpack_require__(96274);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(2167);
// EXTERNAL MODULE: ../shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(16530);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(60879);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(51878);
// EXTERNAL MODULE: ../shared/src/UI/components/ConcealableTabs/index.tsx
var ConcealableTabs = __webpack_require__(10262);
// EXTERNAL MODULE: ../shared/src/UI/components/FungibleTokenList/index.tsx + 1 modules
var FungibleTokenList = __webpack_require__(63352);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(37245);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(99341);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(16332);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(25593);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(94323);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(17428);
// EXTERNAL MODULE: ../shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(61933);
// EXTERNAL MODULE: ../shared/src/UI/components/SettingSwitch/index.tsx
var SettingSwitch = __webpack_require__(58407);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(73798);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(44092);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(95462);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(58437);
// EXTERNAL MODULE: ../shared/src/UI/components/ElementAnchor/index.tsx
var ElementAnchor = __webpack_require__(36579);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadRetry/index.tsx
var LoadRetry = __webpack_require__(28586);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts





















;// CONCATENATED MODULE: ../shared/src/UI/index.ts


// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(18261);
// EXTERNAL MODULE: ../shared/src/locales/languages.ts
var languages = __webpack_require__(59478);
// EXTERNAL MODULE: ../shared/src/constants.tsx
var constants = __webpack_require__(89241);
;// CONCATENATED MODULE: ../shared/src/index.ts









/***/ }),

/***/ 88762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ci": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "Dc": () => (/* reexport safe */ _applyToDOM__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "I3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "US": () => (/* reexport safe */ _Injector__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "ZN": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "nb": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.n)
/* harmony export */ });
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31180);
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42381);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46768);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8600);






/***/ }),

/***/ 30381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C3": () => (/* reexport safe */ _Tabs__WEBPACK_IMPORTED_MODULE_11__.C),
/* harmony export */   "D9": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.D9),
/* harmony export */   "Df": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.Df),
/* harmony export */   "E1": () => (/* reexport safe */ _ButtonGroupTab__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_5__.F),
/* harmony export */   "Ii": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.J),
/* harmony export */   "Sx": () => (/* reexport safe */ _LoadingBase__WEBPACK_IMPORTED_MODULE_10__.S),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.YO),
/* harmony export */   "b4": () => (/* reexport safe */ _LoadingButton__WEBPACK_IMPORTED_MODULE_9__.b),
/* harmony export */   "g8": () => (/* reexport safe */ _PhoneNumberField__WEBPACK_IMPORTED_MODULE_8__.g),
/* harmony export */   "oe": () => (/* reexport safe */ _SendingCodeField__WEBPACK_IMPORTED_MODULE_7__.o),
/* harmony export */   "pL": () => (/* reexport safe */ _FolderTabs__WEBPACK_IMPORTED_MODULE_2__.p),
/* harmony export */   "qA": () => (/* reexport safe */ _CountdownButton__WEBPACK_IMPORTED_MODULE_6__.q),
/* harmony export */   "tE": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.tE),
/* harmony export */   "wT": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _SearchableList__WEBPACK_IMPORTED_MODULE_4__.x),
/* harmony export */   "yu": () => (/* reexport safe */ _Dialogs__WEBPACK_IMPORTED_MODULE_0__.yu)
/* harmony export */ });
/* harmony import */ var _Dialogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95499);
/* harmony import */ var _ButtonGroupTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7848);
/* harmony import */ var _FolderTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92566);
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18822);
/* harmony import */ var _SearchableList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44150);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32876);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75168);
/* harmony import */ var _SendingCodeField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13643);
/* harmony import */ var _PhoneNumberField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54650);
/* harmony import */ var _LoadingButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2292);
/* harmony import */ var _LoadingBase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48054);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95332);














/***/ }),

/***/ 84432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "QO": () => (/* reexport safe */ _useUserPrefersColorScheme__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "ZL": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "ze": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75322);
/* harmony import */ var _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89259);
/* harmony import */ var _useUserPrefersColorScheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21933);





/***/ }),

/***/ 75322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82737);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76618);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});


/***/ }),

/***/ 87883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "Cp": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.Cp),
/* harmony export */   "Dc": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.Dc),
/* harmony export */   "F4": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_1__.F4),
/* harmony export */   "Hr": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.Hr),
/* harmony export */   "I3": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.I3),
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.Q),
/* harmony export */   "QO": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.QO),
/* harmony export */   "R_": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.US),
/* harmony export */   "ZL": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.d_),
/* harmony export */   "lu": () => (/* binding */ parseColor),
/* harmony export */   "nb": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.nb),
/* harmony export */   "um": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "zV": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ze)
/* harmony export */ });
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82737);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88762);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94708);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62998);
/// <reference path="./extended.d.ts" />
// Some re-exports

const parseColor = (tinycolor2__WEBPACK_IMPORTED_MODULE_0___default());

//






/***/ }),

/***/ 31939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "C3": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.C3),
/* harmony export */   "Cp": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Cp),
/* harmony export */   "D9": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.D9),
/* harmony export */   "Dc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Dc),
/* harmony export */   "Df": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Df),
/* harmony export */   "E1": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.E1),
/* harmony export */   "F4": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.F4),
/* harmony export */   "FU": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.FU),
/* harmony export */   "Hr": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Hr),
/* harmony export */   "Ii": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "Q": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Q),
/* harmony export */   "QO": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.QO),
/* harmony export */   "R_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "Sx": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Sx),
/* harmony export */   "US": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.US),
/* harmony export */   "YE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_6__.Y),
/* harmony export */   "YO": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.YO),
/* harmony export */   "ZL": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "b4": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.b4),
/* harmony export */   "d_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.d_),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "g8": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.g8),
/* harmony export */   "lu": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.lu),
/* harmony export */   "nb": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.nb),
/* harmony export */   "oe": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.oe),
/* harmony export */   "pL": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.pL),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "qA": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.qA),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper),
/* harmony export */   "tE": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.tE),
/* harmony export */   "um": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "wT": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.xV),
/* harmony export */   "yu": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.yu),
/* harmony export */   "zV": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ze)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63439);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17877);
/* harmony import */ var _ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59728);
/* harmony import */ var _entry_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87883);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30381);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(99176);
/// <reference path="./extended.d.ts" />


const ShadowRootTooltip = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);





/***/ }),

/***/ 22329:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ waitDocumentReadyState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46123);

function waitDocumentReadyState(target) {
    if (ok(target))
        return Promise.resolve();
    return new Promise((resolve) => {
        const callback = () => {
            if (ok(target)) {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, { passive: true });
    });
}
function ok(target, current = document.readyState) {
    return score(target) <= score(current);
}
function score(x) {
    if (x === 'loading')
        return 0;
    if (x === 'interactive')
        return 1;
    if (x === 'complete')
        return 2;
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(x);
}
//# sourceMappingURL=document.readyState.js.map

/***/ }),

/***/ 27554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gx": () => (/* reexport safe */ _blob_js__WEBPACK_IMPORTED_MODULE_1__.G),
/* harmony export */   "VJ": () => (/* reexport safe */ _abortSignalTimeout_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout_js__WEBPACK_IMPORTED_MODULE_6__.V),
/* harmony export */   "YT": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.YT),
/* harmony export */   "dq": () => (/* reexport safe */ _combineAbortSignal_js__WEBPACK_IMPORTED_MODULE_2__.d),
/* harmony export */   "gw": () => (/* reexport safe */ _delay_js__WEBPACK_IMPORTED_MODULE_3__.g),
/* harmony export */   "ll": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.ll),
/* harmony export */   "n5": () => (/* reexport safe */ _blob_js__WEBPACK_IMPORTED_MODULE_1__.n),
/* harmony export */   "rj": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.rj),
/* harmony export */   "uL": () => (/* reexport safe */ _document_readyState_js__WEBPACK_IMPORTED_MODULE_4__.u),
/* harmony export */   "xe": () => (/* reexport safe */ _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__.xe)
/* harmony export */ });
/* harmony import */ var _abortSignalTimeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _blob_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8297);
/* harmony import */ var _combineAbortSignal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98690);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15304);
/* harmony import */ var _document_readyState_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22329);
/* harmony import */ var _encode_text_arraybuffer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84344);
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39373);








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 88674:
/***/ ((module) => {

module.exports = JSON.parse('{"light":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"light_high_contrast":{"grey":{"50":"#eff3f4","200":"#cfd9de","300":"#b9cad3","700":"#536471"},"text":{"primary":"#07101B","secondary":"#767F8D","third":"#ACB4C1","strong":"#111418","buttonText":"#FFFFFF"},"maskColor":{"main":"#07101B","second":"#767F8D","third":"#ACB4C1","primaryMain":"#B5B7BB","secondaryMain":"#CDCFD1","thirdMain":"#F3F3F4","bg":"#F9F9F9","bottom":"#FFFFFF","secondaryBottom":"rgba(255, 255, 255, 0.8)","input":"#F2F6FA","modelTitleBg":"linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 100%), linear-gradient(90deg, rgba(98, 152, 234, 0.2) 1.03%, rgba(98, 152, 234, 0.2) 1.04%, rgba(98, 126, 234, 0.2) 100%)","highlight":"#1C68F3","line":"#F2F5F6","secondaryLine":"#E6E7E8","tips":"rgba(0, 0, 0, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"background":{"default":"#F9F9F9","input":"#F2F6FA","tipMask":"rgba(0, 0, 0, 0.85)","messageShadow":"rgba(101, 119, 134, 0.2)","paper":"#ffffff"},"error":{"main":"#F4212E"},"divider":"#EFF3F4","secondaryDivider":"#CFD9DE","action":{"buttonHover":"#272C30","bgHover":"#EDEFEF","mask":"rgba(0, 0, 0, 0.4)"}},"dark":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}},"dark_high_contrast":{"grey":{"50":"#253341","200":"#3d5466","300":"#6b7d8c","700":"#8899a6"},"maskColor":{"main":"#F5F5F5","second":"#C4C7CD","third":"#666C75","primaryMain":"#494949","secondaryMain":"#181818","thirdMain":"#151515","bg":"#1C1C1C","bottom":"#101010","secondaryBottom":"rgba(0, 0, 0, 0.8)","input":"#26292C","modelTitleBg":"linear-gradient(180deg, #202020 0%, #181818 100%)","highlight":"#FFFFFF","line":"#2F2F2F","secondaryLine":"#6F6F6F","tips":"rgba(255, 255, 255, 0.9)","primary":"#1C68F3","success":"#3DC233","warn":"#FFB100","danger":"#FF3545","white":"#ffffff","dark":"#07101B"},"text":{"primary":"#F5F5F5","secondary":"#C4C7CD","third":"#666C75","strong":"#FFFFFF","buttonText":"#0F1419"},"background":{"default":"#1C1C1C","input":"#26292C","tipMask":"rgba(255, 255, 255, 0.85)","messageShadow":"rgba(136, 153, 166, 0.2)","paper":"#101010"},"error":{"main":"#FF5555"},"divider":"#38444D","secondaryDivider":"#38444D","action":{"buttonHover":"#D7DBDC","bgHover":"#1D2933","mask":"rgba(91, 112, 131, 0.4)"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && !queue.d) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = 1);
/******/ 			if(queue) queue.moduleId = module.id;
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			promise.moduleId = module.id;
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk prefetch function */
/******/ 	(() => {
/******/ 		__webpack_require__.F = {};
/******/ 		__webpack_require__.E = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.F).map((key) => {
/******/ 				__webpack_require__.F[key](chunkId);
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 1993) return "js/1993.js";
/******/ 			if (chunkId === 9442) return "js/9442.js";
/******/ 			if (chunkId === 1950) return "js/1950.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1240":"npm-ns.ethersphere.bee-js","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2245":"npm.react-highlight-words","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","3375":"npm-ns.ethersproject.abstract-signer","3667":"npm.react-avatar-editor","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6912":"npm.react-draggable","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7597":"npm.pure-react-carousel","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","9223":"npm-ns.metaplex-foundation.mpl-auction","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 3161;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("webpack", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			3161: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.F.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "prefetch";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk prefetch trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"4601": [
/******/ 				5638,
/******/ 				2698,
/******/ 				9759,
/******/ 				7871,
/******/ 				8672,
/******/ 				6230,
/******/ 				2598,
/******/ 				2486,
/******/ 				7696,
/******/ 				3667,
/******/ 				4049,
/******/ 				9259,
/******/ 				8106,
/******/ 				5765,
/******/ 				4732,
/******/ 				3771,
/******/ 				3294,
/******/ 				4806,
/******/ 				5849,
/******/ 				871,
/******/ 				6709,
/******/ 				2087
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.prefetch = (chunkId, promises) => (Promise.all(promises).then(() => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.E);
/******/ 		}));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,7587,2372,2644,3803,3939], () => (__webpack_require__(34906)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,6445,7587,2372,2644,3803,3939], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;