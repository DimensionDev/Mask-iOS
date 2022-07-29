"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8958],{

/***/ 88299:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(58757),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


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

/***/ 63184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ status)
/* harmony export */ });
/* harmony import */ var _shared_ui_locales_legacy_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1465);
/* harmony import */ var _setup_ui_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9955);
/* harmony import */ var _social_network_adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14048);
/* harmony import */ var _social_network_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20940);
// Start SNS adaptor




const status = (0,_social_network_define__WEBPACK_IMPORTED_MODULE_3__/* .activateSocialNetworkUI */ .Ps)();


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

/***/ 69014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.CB),
/* harmony export */   "EK": () => (/* reexport safe */ _entry_dom__WEBPACK_IMPORTED_MODULE_0__.EK),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.eE)
/* harmony export */ });
/* harmony import */ var _entry_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89239);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87434);




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

/***/ 26675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainColor(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Others?.chainResolver.chainColor?.(chainId) ?? 'transparent';
}


/***/ }),

/***/ 75080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useChainIdMainnet)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainIdMainnet(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Others?.chainResolver.isMainnet?.(chainId) ?? false;
}


/***/ }),

/***/ 3307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72128);



function useChainIdValid(pluginID, expectedChainId) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)(pluginID);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (!account || Others?.chainResolver.isValid?.(chainId, "production" === 'development')) ?? false;
}


/***/ }),

/***/ 19199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40969);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useNetworkDescriptor(expectedPluginID, expectedChainIdOrNetworkTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Networks?.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((expectedChainIdOrNetworkTypeOrID ?? networkType) ?? '')
    );
}


/***/ }),

/***/ 45428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useNonFungibleAssets)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72128);
/* harmony import */ var _useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94227);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58757);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3859);






function useNonFungibleAssets(pluginID, schemaType, options) {
    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
    const [done, setDone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [loading, toggleLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .m)(pluginID);
    const hub = (0,_useWeb3Hub__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Hub */ .h)(pluginID, options);
    const networks = (0,_useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkDescriptors */ .p)(pluginID);
    // create iterator
    const iterator = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        if (!account && !options?.account || !hub?.getNonFungibleTokens || !networks) return;
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
        return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .flattenAsyncIterator */ .DA)(networks.filter((x)=>x.isMainnet
        ).filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ).map((x)=>{
            return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .pageableToIterator */ .J)(async (indicator)=>{
                if (!hub?.getNonFungibleTokens) return;
                return hub?.getNonFungibleTokens(options?.account ?? account, {
                    indicator,
                    size: 50,
                    ...options,
                    chainId: x.chainId
                });
            });
        }));
    }, [
        hub?.getNonFungibleTokens,
        account,
        JSON.stringify(options),
        networks.length
    ]);
    const next = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async ()=>{
        if (!iterator || done) return;
        const batchResult = [];
        toggleLoading(true);
        try {
            for (const v of Array.from({
                length: options?.size ?? 36
            })){
                const { value , done: iteratorDone  } = await iterator.next();
                if (value instanceof Error) {
                    // Controlled error
                    setError(value.message);
                    break;
                } else {
                    if (iteratorDone) {
                        setDone(true);
                        break;
                    }
                    if (!iteratorDone && value) {
                        batchResult.push(value);
                    }
                }
            }
        } catch (error_) {
            // Uncontrolled error
            setError(error_);
            setDone(true);
        }
        toggleLoading(false);
        setAssets((pred)=>[
                ...pred,
                ...batchResult
            ]
        );
    }, [
        iterator,
        done
    ]);
    // Execute once after next update
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (next) next();
    }, [
        next
    ]);
    const retry = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        setAssets(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EMPTY_LIST */ .rP);
        setDone(false);
    }, []);
    return {
        value: assets.filter((x)=>options?.chainId ? x.chainId === options?.chainId : true
        ),
        next,
        loading,
        done,
        retry,
        error
    };
}


/***/ }),

/***/ 41623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52892);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46390);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93996);



function useProviderDescriptor(expectedPluginID, expectedProviderTypeOrID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)(expectedPluginID);
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pluginID)?.declareWeb3Providers?.find((x)=>[
            x.type,
            x.ID
        ].includes((expectedProviderTypeOrID ?? providerType) ?? '')
    );
}


/***/ }),

/***/ 84702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useSocialAddressListAll)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67938);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85478);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58500);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12368);





const addressCache = new (lru_cache__WEBPACK_IMPORTED_MODULE_2___default())({
    max: 500,
    ttl: 2 * 60 * 1000
});
/**
 * Get all social addresses under of all networks.
 */ function useSocialAddressListAll(identity, sorter) {
    // TODO: to add flow
    const { IdentityService: EVM_IdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { IdentityService: SolanaIdentityService  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .d)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(async ()=>{
        const userId = identity?.identifier?.userId;
        if (!userId || userId === '$unknown') return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_LIST */ .rP;
        let cached = addressCache.get(userId);
        if (!cached) {
            cached = Promise.allSettled([
                EVM_IdentityService,
                SolanaIdentityService
            ].map((x)=>x?.lookup(identity) ?? []
            ));
            addressCache.set(userId, cached);
        }
        const allSettled = await cached;
        const listOfAddress = allSettled.flatMap((x)=>x.status === 'fulfilled' ? x.value : []
        );
        return sorter && listOfAddress.length ? listOfAddress.sort(sorter) : listOfAddress;
    }, [
        identity,
        sorter,
        EVM_IdentityService?.lookup,
        SolanaIdentityService?.lookup
    ]);
}


/***/ }),

/***/ 21627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fb": () => (/* binding */ FileInfoV1ToV2),
/* harmony export */   "Gd": () => (/* binding */ makeFileKeySigned),
/* harmony export */   "ri": () => (/* binding */ FileInfoMetadataReader),
/* harmony export */   "u": () => (/* binding */ resolveGatewayAPI)
/* harmony export */ });
/* harmony import */ var _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30003);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94529);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8634);
/* harmony import */ var _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30460);
/* harmony import */ var _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10857);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29330);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67938);








const reader_v1 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_1 */ .ki, _schema_v1_json__WEBPACK_IMPORTED_MODULE_3__);
const reader_v2 = (0,_masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_0__/* .createTypedMessageMetadataReader */ .Bi)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY_2 */ .lw, _schema_v2_json__WEBPACK_IMPORTED_MODULE_4__);
function FileInfoMetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta).map(FileInfoV1ToV2);
}
function FileInfoV1ToV2(info) {
    return {
        ...info,
        type: 'file',
        provider: 'arweave'
    };
}
async function makeFileKeySigned(fileKey) {
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeText */ .YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .encodeArrayBuffer */ .ll);
}
const resolveGatewayAPI = (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createLookupTableResolver */ .FG)({
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.arweave */ .z.arweave]: 'https://arweave.net',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.ipfs */ .z.ipfs]: 'https://infura-ipfs.io/ipfs',
    [_types__WEBPACK_IMPORTED_MODULE_2__/* .Provider.swarm */ .z.swarm]: 'https://bee-2.gateway.ethswarm.org/bzz'
}, ()=>'Unknown provider'
);


/***/ }),

/***/ 526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        })
    , [
        onUpdateByRemote,
        event1,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
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

/***/ 37245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94282);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51344);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .I18nextProvider */ .a;


/***/ }),

/***/ 7736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22017);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64781);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15285);




const SharedContextProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_common__WEBPACK_IMPORTED_MODULE_2__/* .CommonUIProvider */ .ci, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_evm__WEBPACK_IMPORTED_MODULE_3__/* .EvmSharedUIProvider */ .QQ, {
                children: children
            })
        })
    });
};


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

/***/ 8600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskColorVar),
/* harmony export */   "n": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46768);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
}
const MaskColorVar = new Proxy({
    __proto__: null
}, {
    get (target, key) {
        if (target[key]) return target[key];
        if (typeof key !== 'string') throw new TypeError();
        const cssVar = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
        target[key] = (defaultValue)=>{
            // it might be an object when used in styled components.
            if (typeof defaultValue !== 'string') defaultValue = undefined;
            const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
            return x;
        };
        target[key][Symbol.toPrimitive] = ()=>`var(--mask-${cssVar})`
        ;
        target[key].alpha = (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
        ;
        return target[key];
    }
});


/***/ }),

/***/ 95499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "tE": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.t),
/* harmony export */   "yu": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.y)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13217);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49433);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70950);





/***/ }),

/***/ 48054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ LoadingBase)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60989);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84432);



const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    animated: {
        '@keyframes loadingAnimation': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        animation: 'loadingAnimation 1s linear infinite'
    }
});
const LoadingBase = (props)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .LoadingBaseIcon */ .N, {
        ...props,
        className: `${classes.animated} ${props.className}`
    });
};


/***/ }),

/***/ 59728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6414);

/* eslint-disable react-hooks/rules-of-hooks */ 

let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init) {
    if (mountingShadowRoot) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .PreventEventPropagationListContext */ .gt);
    const { container: container1  } = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = PortalShadowRoot();
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = '';
        const shadow = root.attachShadow({
            mode: 'open'
        });
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, stop, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheets.map((x)=>x.addContainer(shadow)
        );
        // This is proved to be important to the correct portal orders...
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return {
            container
        };
    });
    return renderer(container1);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 62998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* reexport safe */ _Contexts__WEBPACK_IMPORTED_MODULE_3__.AZ),
/* harmony export */   "Q": () => (/* reexport safe */ _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__.Q),
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.d_),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42519);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59728);
/* harmony import */ var _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18499);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6414);






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

/***/ 99176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../theme/src/hooks/useTabs.tsx

/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react.useState)(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = (0,react.useCallback)((event, value)=>{
        setTab(value);
    }, []);
    return [
        currentTab,
        onChange,
        enum_,
        setTab
    ];
}

;// CONCATENATED MODULE: ../theme/src/hooks/index.ts



/***/ }),

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48160);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63740);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60232);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}


/***/ }),

/***/ 6947:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(58757),g=Object.assign;
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=e.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});e.useDebugValue(b);e.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:g({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ })

}]);