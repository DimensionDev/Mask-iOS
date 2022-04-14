"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6645],{

/***/ 86248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(36260);
} else {}


/***/ }),

/***/ 14209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* binding */ isAndroidApp),
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony export is_iOSApp */
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp =  true && "safari" === 'firefox';
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    isolated_dashboard_bridge_enabled: false,
    mask_SDK_ready: betaOrInsiderOnly,
    using_ShadowDOM_attach_mode: 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    trader_all_api_cached_enabled: devOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    LBP_whitelist_enabled: "production" === 'production',
    // #endregion
    EIP1559_enabled: true,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
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

/***/ 94299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MaskMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);


const MaskMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
MaskMessages.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .serializer */ .GM;
Object.assign(globalThis, {
    MaskMessages
});


/***/ }),

/***/ 81064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createPluginHost)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96484);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69260);
/* harmony import */ var _shared_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94299);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78144);
// All plugin manager need to call createPluginHost so let's register plugins implicitly.





function createPluginHost(signal, createContext) {
    const minimalMode = {
        isEnabled: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled,
        events: new _servie_events__WEBPACK_IMPORTED_MODULE_4__/* .Emitter */ .Q5()
    };
    const removeListener = _shared_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.pluginMinimalModeChanged.on */ .q.events.pluginMinimalModeChanged.on(([id, val])=>minimalMode.events.emit(val ? 'enabled' : 'disabled', id)
    );
    signal?.addEventListener('abort', removeListener);
    return {
        signal,
        minimalMode,
        addI18NResource (plugin, resource) {
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .createI18NBundle */ .C9)(plugin, resource)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .i18NextInstance */ .BV);
        },
        createContext
    };
}


/***/ }),

/***/ 11230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE)
/* harmony export */ });
/* unused harmony exports PRICE_IMPACT_LOW, PRICE_IMPACT_MEDIUM, PRICE_IMPACT_HIGH, PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN, PRICE_IMPACT_NON_EXPERT_BLOCKED */
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89260);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ry.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 2000 // bips
;
const DEFAULT_TRANSACTION_DEADLINE = 30 /* minutes */  * 60 /* seconds */ ;
const L2_TRANSACTION_DEADLINE = 60 /* minutes */  * 5 /* seconds */ ;
const PRICE_IMPACT_LOW = 100 // 1%
;
const PRICE_IMPACT_MEDIUM = 300 // 3%
;
const PRICE_IMPACT_HIGH = 500 // 5%
;
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = 1000 // 10%
;
// for non expert mode disable swaps above this
const PRICE_IMPACT_NON_EXPERT_BLOCKED = 1500 // 15%
;
const MINIMUM_AMOUNT = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('1e-6');


/***/ }),

/***/ 59389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createNormalReactRoot */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83230);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53242);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30232);





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

/***/ 48668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);

function useControlledDialog() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        open,
        setOpen,
        onClose: ()=>setOpen(false)
        ,
        onOpen: ()=>setOpen(true)
    };
}


/***/ }),

/***/ 93313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38090);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52648);




/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [anchorEl, setAnchorEl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const close = ()=>{
        setOpen(false);
        setAnchorEl(null);
    };
    const update = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            PaperProps: props?.paperProps,
            MenuListProps: props?.menuListProps,
            open,
            anchorEl,
            onClose: close,
            onClick: close,
            anchorOrigin: props?.anchorOrigin,
            transformOrigin: props?.transformOrigin
        }, elements?.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            const finalAnchor = anchorSibling ? element.nextElementSibling ?? undefined : element;
            setAnchorEl(finalAnchor);
            setOpen(true);
            // HACK: it seems like anchor doesn't work correctly
            // but a force repaint can solve the problem.
            window.requestAnimationFrame(update);
        }, []), 
    ];
}


/***/ }),

/***/ 25089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useSwitcher),
/* harmony export */   "M": () => (/* binding */ useSettingsSwitcher)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53242);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83463);




function useSettingsSwitcher(settings, options, resolver) {
    const currentOption = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_2__/* .useValueRef */ .E)(settings);
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    const onSwitch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (typeof nextOption !== 'undefined') settings.value = nextOption;
    }, [
        nextOption
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: onSwitch,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}
function useSwitcher(currentOption, onSwitch, options, resolver) {
    const nextOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (options.length === 0) return;
        if (typeof currentOption === 'undefined') return options[0];
        const indexOf = options.indexOf(currentOption);
        if (indexOf === -1) return;
        return indexOf === options.length - 1 ? options[0] : options[indexOf + 1];
    }, [
        currentOption,
        options
    ]);
    if (options.length <= 1) return null;
    if (typeof nextOption === 'undefined') return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
        sx: {
            marginTop: 1
        },
        color: "primary",
        variant: "contained",
        onClick: ()=>onSwitch(nextOption)
        ,
        children: [
            "Switch to ",
            resolver(nextOption)
        ]
    });
}


/***/ }),

/***/ 64026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ getAssetAsBlobURL)
});

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/utils/suspends/getAssetAsBlobURL.ts


/**
 * Fetch a file and turn it into blob URL.
 * This function must run in React concurrent mode.
 */ function getAssetAsBlobURL(url) {
    return (0,src/* getAssetAsBlobURL */.$I)(url, service/* default.Helper.fetch */.ZP.Helper.fetch);
}

;// CONCATENATED MODULE: ./src/utils/suspends/index.ts



/***/ }),

/***/ 13922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useColorStyles)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30232);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66764);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67020);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96997);


const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__/* ["default"][900] */ .Z[900]
        },
        success: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_2__/* ["default"][800] */ .Z[800]
        },
        info: {
            color: dark ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_3__/* ["default"][800] */ .Z[800]
        }
    };
});


/***/ }),

/***/ 59282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useLookupAddress */
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28102);


function useLookupAddress(domain, pluginId) {
    const { NameService , Utils  } = useWeb3State(pluginId);
    const chainId = useChainId(pluginId);
    return useAsync(async ()=>{
        if (NameService?.lookup && Utils?.isValidDomain?.(domain)) {
            return NameService.lookup(domain);
        }
        return '';
    }, [
        NameService,
        Utils,
        domain,
        chainId
    ]);
}


/***/ }),

/***/ 37271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eE": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "yf": () => (/* binding */ useActivatedPluginDashboard)
/* harmony export */ });
/* unused harmony export startPluginDashboard */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66040);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71264);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)((def)=>def.Dashboard
);
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsDashboard() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useActivatedPluginDashboard(pluginID) {
    const plugins = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
    return plugins.find((x)=>x.ID === pluginID
    );
}
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 62559:
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
    PluginId["Gitcoin"] = 'co.gitcoin';
    PluginId["GoodGhosting"] = 'co.good_ghosting';
    PluginId["MaskBox"] = 'com.maskbook.box';
    PluginId["Poll"] = 'com.maskbook.poll';
    PluginId["Profile"] = 'com.mask.profile';
    PluginId["Trader"] = 'com.maskbook.trader';
    PluginId["Tip"] = 'com.maskbook.tip';
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
    PluginId["ITO"] = 'com.maskbook.ito';
    PluginId["Wallet"] = 'com.maskbook.wallet';
    PluginId["PoolTogether"] = 'com.pooltogether';
    PluginId["UnlockProtocol"] = 'com.maskbook.unlockprotocol';
    PluginId["FileService"] = 'com.maskbook.fileservice';
    PluginId["CyberConnect"] = 'me.cyberconnect.app';
    PluginId["GoPlusSecurity"] = 'io.gopluslabs.security';
    PluginId["CrossChainBridge"] = 'io.mask.cross-chain-bridge';
})(PluginId || (PluginId = {}));


/***/ }),

/***/ 65043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWallets */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);

function useWallets(type, pluginID) {
    return usePluginWeb3StateContext(pluginID).wallets;
}


/***/ }),

/***/ 97096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.FW),
/* harmony export */   "P7": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.P7),
/* harmony export */   "iu": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.iu),
/* harmony export */   "z4": () => (/* reexport safe */ _web__WEBPACK_IMPORTED_MODULE_0__.z4)
/* harmony export */ });
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75151);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38047);
// Following is the API that can be called from the native side.

// Following is the API that implemented by the native side.




/***/ }),

/***/ 20871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createGlobalState */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66040);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);


/**
 * Create a new global state.
 *
 * @param f The async function that return the data needed.
 * @param subscribe
 * The subscribe function that call the callback when the data changed.
 * It will call the f again to revalidate the data.
 *
 * @returns
 * It returns a tuple.
 *
 * The first item is the react hooks for this resource.
 * The hooks receive a argument "checked".
 * If checked is true, it will return a status object so you can handle the error by yourself.
 *
 * The second item is the revalidation function. It can be called anywhere and returns a Promise.
 * It will resolves regardless the f itself fullfilled or rejected.
 */ function createGlobalState(f1, subscribe) {
    const listeners = new Set();
    let currentValue = None;
    let pending;
    const sub = {
        getCurrentValue () {
            if (currentValue.none) {
                subscribe(revalidate);
                throw pending ||= revalidate();
            }
            if (currentValue.val.err) throw currentValue.val.val;
            return currentValue.val.val;
        },
        subscribe (f) {
            listeners.add(f);
            return ()=>listeners.delete(f)
            ;
        }
    };
    function useData() {
        return useSubscription(sub);
    }
    function revalidate() {
        return f1().then((val)=>currentValue = Some(Ok(val))
        , (err)=>currentValue = Some(Err(err))
        ).then(()=>undefined
        ).finally(()=>listeners.forEach((f)=>f()
            )
        );
    }
    return [
        useData,
        revalidate
    ];
}


/***/ }),

/***/ 53242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "F$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.F$),
/* harmony export */   "N3": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.N3),
/* harmony export */   "S8": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.S8),
/* harmony export */   "SV": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.SV),
/* harmony export */   "pv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.pv),
/* harmony export */   "xw": () => (/* reexport safe */ _bom__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _bom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66802);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87557);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21902);





/***/ }),

/***/ 1174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mZ": () => (/* reexport safe */ _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__.v)
/* harmony export */ });
/* unused harmony export relativeRouteOf */
/* harmony import */ var _PopupRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57602);
/* harmony import */ var _DashboardRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19854);


function relativeRouteOf(parent) {
    return (child)=>{
        if (!child.startsWith(parent)) throw new Error();
        return child.slice(parent.length).replace(/^\//, '');
    };
}


/***/ }),

/***/ 37820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C9": () => (/* reexport */ register_ns/* createI18NBundle */.C),
  "BV": () => (/* reexport */ i18NextInstance),
  "BF": () => (/* reexport */ updateLanguage)
});

// EXTERNAL MODULE: ../shared-base/src/i18n/register-ns.ts
var register_ns = __webpack_require__(84926);
// EXTERNAL MODULE: ../public-api/src/index.ts
var src = __webpack_require__(97096);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@21.6.15/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(97344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next-browser-languagedetector@6.1.4/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js + 2 modules
var i18nextBrowserLanguageDetector = __webpack_require__(52647);
;// CONCATENATED MODULE: ../shared-base/src/i18n/instance.ts



const i18NextInstance = i18next/* default */.ZP;
i18next/* default.use */.ZP.use(i18nextBrowserLanguageDetector/* default */.Z).init({
    keySeparator: false,
    interpolation: {
        escapeValue: false
    },
    fallbackLng: {
        'zh-CN': [
            'zh-TW',
            'en'
        ],
        'zh-TW': [
            'zh-CN',
            'en'
        ],
        default: [
            'en'
        ]
    },
    defaultNS: 'mask',
    nonExplicitSupportedLngs: true,
    detection: {
        order: [
            'navigator'
        ]
    }
});
function updateLanguage(next) {
    if (next === src/* LanguageOptions.__auto__ */.P7.__auto__) {
        const result = i18next/* default.services.languageDetector.detect */.ZP.services.languageDetector.detect();
        i18next/* default.changeLanguage */.ZP.changeLanguage(result[0] || src/* LanguageOptions.enUS */.P7.enUS);
    } else {
        i18next/* default.changeLanguage */.ZP.changeLanguage(next);
    }
}

;// CONCATENATED MODULE: ../shared-base/src/i18n/index.ts




/***/ }),

/***/ 66052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(3709);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(59573);
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

/***/ 68433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ formatPersonaFingerprint)
/* harmony export */ });
/* unused harmony export MAX_PERSONA_LIMIT */
function formatPersonaFingerprint(fingerprint, size = 0) {
    if (size === 0) return fingerprint;
    return `${fingerprint.substr(0, 2 + size)}...${fingerprint.substr(-size)}`;
}
const MAX_PERSONA_LIMIT = 10;


/***/ }),

/***/ 67391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ChainIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        point: {
            width: 12.5,
            height: 12.5,
            borderRadius: 6.25,
            margin: 3.75
        },
        border: {
            border: `1px solid ${theme.palette.background.paper}`
        }
    })
);
const ChainIcon = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ color , size =12.5  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ _jsx("div", {
        className: classes.point,
        style: {
            width: size,
            height: size,
            backgroundColor: color
        }
    });
})));


/***/ }),

/***/ 67406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MiniNetworkSelector */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32831);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37731);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _ChainIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67391);
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86898);






const AllNetworkButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        marginRight: theme.spacing(1),
        padding: 0,
        borderRadius: '50%',
        fontSize: 12,
        '&:hover': {
            boxShadow: 'none'
        },
        opacity: 0.5
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        networkSelected: {
            opacity: 1,
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                right: (props.size - 4) / 2,
                display: 'inline-block',
                width: 4,
                height: 4,
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
                borderRadius: '50%'
            }
        },
        networkDisabled: {
            cursor: 'not-allowed',
            '&:hover': {
                opacity: 0.6
            }
        }
    })
);
const MiniNetworkSelector = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ hideAllNetworkButton =false , onSelect , networks =[] , selectedNetwork , disabledNonCurrentNetwork =false , size =30 ,  })=>{
    const { classes  } = useStyles({
        size: size
    });
    return /*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        children: [
            !hideAllNetworkButton && /*#__PURE__*/ _jsx(AllNetworkButton, {
                className: !selectedNetwork ? classes.networkSelected : '',
                sx: {
                    width: size,
                    height: size,
                    minWidth: size,
                    lineHeight: `${size}px`
                },
                onClick: ()=>onSelect(null)
                ,
                children: "ALL"
            }),
            networks.filter((x)=>x.isMainnet
            ).map((network)=>{
                return /*#__PURE__*/ _jsx(Box, {
                    position: "relative",
                    mr: 1,
                    height: size,
                    onClick: ()=>!disabledNonCurrentNetwork && onSelect(network)
                    ,
                    sx: {
                        cursor: 'pointer',
                        opacity: '0.6',
                        ':hover': {
                            opacity: 1
                        },
                        userSelect: 'none',
                        lineHeight: `${size}px`
                    },
                    className: selectedNetwork?.ID === network.ID ? classes.networkSelected : disabledNonCurrentNetwork ? classes.networkDisabled : '',
                    children: network.isMainnet ? /*#__PURE__*/ _jsx(WalletIcon, {
                        networkIcon: network.icon,
                        size: size
                    }) : /*#__PURE__*/ _jsx(ChainIcon, {
                        color: network.iconColor,
                        size: size
                    })
                }, network.ID);
            })
        ]
    });
})));


/***/ }),

/***/ 16961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "Tv": () => (/* reexport */ ApplicationEntry/* ApplicationEntry */.T),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o)
});

// UNUSED EXPORTS: ChainIcon, MiniNetworkSelector, TokenIconUI, useImageFailOver

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(18245);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(67632);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(67391);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(70552);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(86898);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 5 modules
var ERC20TokenList = __webpack_require__(87525);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(8524);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(69379);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(12188);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(99769);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(67406);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(6288);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(40547);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(98598);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(80759);
// EXTERNAL MODULE: ../shared/src/UI/components/ReversedAddress/index.tsx
var ReversedAddress = __webpack_require__(13111);
// EXTERNAL MODULE: ../shared/src/UI/components/ApplicationEntry/index.tsx
var ApplicationEntry = __webpack_require__(49016);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts

















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 47745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iD": () => (/* reexport */ useSnackbarCallback/* useSnackbarCallback */.i)
});

// UNUSED EXPORTS: useMenu, useMenuConfig, useMenuContext

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ../shared/src/hooks/useMenu.tsx




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(Menu)));
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [status, setOpen] = useState(false);
    const open = useCallback((anchorElOrEvent)=>{
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
    const update = useUpdate();
    const close = useCallback(()=>setOpen(false)
    , []);
    const Menu1 = useContext(useMenuContext);
    return [
        /*#__PURE__*/ _jsx(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements?.map((element, key)=>/*#__PURE__*/ isValidElement(element) ? /*#__PURE__*/ cloneElement(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}

// EXTERNAL MODULE: ../shared/src/hooks/useSnackbarCallback.tsx
var useSnackbarCallback = __webpack_require__(26204);
;// CONCATENATED MODULE: ../shared/src/hooks/index.ts




/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports languages, addSharedI18N */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90667);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78144);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts






const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__
};

const addSharedI18N = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createI18NBundle */ .C9)('shared', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 52558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ CSSVariableInjectorCSS)
/* harmony export */ });
/* unused harmony export applyMaskColorVars */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94919);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);



// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r , g , b  } = tinycolor2__WEBPACK_IMPORTED_MODULE_1___default()(x[key]).toRgb();
    return [
        r,
        g,
        b
    ].join(', ');
}
function CSSVariableInjectorCSS(scheme) {
    const ns = scheme === 'light' ? _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C : _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    const result = {};
    for(const key in ns){
        // --mask-name: val;
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result
    };
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? LightColor : DarkColor;
    if (node === document.body) {
        const id = '#mask-style-var';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            document.head.appendChild(style);
        }
        applyMaskColorVars(document.getElementById(id), scheme);
        return;
    } else if (node instanceof HTMLStyleElement) {
        let rule = ':root, :host {\n';
        for(const key in ns){
            // --mask-name: val;
            rule += `    --mask-${kebabCase(key)}: ${ns[key]};\n`;
            rule += `    --mask-${kebabCase(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for(const key in ns){
            node.style.setProperty('--mask-' + kebabCase(key), ns[key]);
            node.style.setProperty('--mask-' + kebabCase(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}


/***/ }),

/***/ 36972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ci": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "I3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "US": () => (/* reexport safe */ _Injector__WEBPACK_IMPORTED_MODULE_1__.U),
/* harmony export */   "ZN": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "nb": () => (/* reexport safe */ _vars__WEBPACK_IMPORTED_MODULE_3__.n)
/* harmony export */ });
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52558);
/* harmony import */ var _Injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19937);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94919);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6009);






/***/ }),

/***/ 9183:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ButtonGroupTabList, ButtonTab

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx



const TabButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flex: 1
    })
);
/**
 * This is an alternative implementation of Tab component, to use with <ButtonGroupTabList>.
 */ const ButtonGroupTab_ButtonTab = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const activated = !!props.selected;
    const { onChange , onClick , value  } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    // TODO: replace secondary to correct theme color
    return /*#__PURE__*/ _jsx(TabButtonWrap, {
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        color: activated ? 'primary' : 'secondary',
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    });
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <ButtonGroupTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </ButtonGroupTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const ButtonGroupTabList = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const context = useTabContext();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ isValidElement(child)) return child;
        const extra = {
            'aria-controls': getPanelId(context, child.props.value),
            id: getTabId(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab) {
            return /*#__PURE__*/ _jsx(ButtonTab, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            });
        }
        return /*#__PURE__*/ cloneElement(child, extra);
    });
    const { onChange , ...rest } = props;
    return /*#__PURE__*/ _jsx(ButtonGroup, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    });
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 98408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CountdownButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);



const CountdownButton = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const { duration =60 , children , repeatContent ='Resend' , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = useState(undefined);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick?.(event);
    };
    const content = useMemo(()=>{
        if (countdown) {
            return `${children} (${countdown})`;
        } else if (countdown === 0) {
            return repeatContent;
        } else {
            return children;
        }
    }, [
        countdown
    ]);
    useEffect(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{};
    }, [
        countdown
    ]);
    return /*#__PURE__*/ _jsx(Button, {
        ref: ref,
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: content
    });
})));


/***/ }),

/***/ 68381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export PhoneNumberField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21561);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27381);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86248);





const useStyles = (0,_UIHelper_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = useState(value.phone);
    const [countryCode, setCountryCode] = useState(value.country);
    const handleCountryCodeChange = (event)=>{
        const inputValue = event.target.value;
        const prefix = inputValue.startsWith('+') ? '' : '+';
        setCountryCode(prefix + inputValue);
        onChange?.({
            country: inputValue,
            phone: phone
        });
    };
    const handlePhoneChange = (event)=>{
        const inputValue = event.target.value;
        setPhone(inputValue);
        onChange?.({
            country: countryCode,
            phone: inputValue
        });
    };
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            label,
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: onBlur,
                            type: "text",
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 68393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SendingCodeField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27381);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98408);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , autoSend =false , onChange  })=>{
    const [code, setCode] = useState('');
    const sendButton = useRef(null);
    useEffect(()=>{
        onChange?.(code);
    }, [
        code
    ]);
    useEffect(()=>{
        if (autoSend) sendButton.current?.click();
    }, [
        autoSend
    ]);
    return /*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                children: label
            }),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            flex: 1,
                            children: /*#__PURE__*/ _jsx(MaskTextField, {
                                size: "small",
                                value: code,
                                onChange: (event)=>setCode(event.target.value)
                                ,
                                error: !!errorMessage,
                                helperText: errorMessage,
                                onBlur: ()=>onBlur?.(code)
                                ,
                                disabled: disabled
                            })
                        }),
                        /*#__PURE__*/ _jsx(CountdownButton, {
                            ref: sendButton,
                            size: "medium",
                            sx: {
                                height: '40px',
                                width: '100px'
                            },
                            onClick: onSend,
                            disabled: disabled,
                            children: sendButtonText
                        })
                    ]
                })
            })
        ]
    });
};


/***/ }),

/***/ 3482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports MaskLightTheme, MaskDarkTheme */
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90696);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89545);
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84865);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9084);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36972);





const color = (mode, color1)=>({
        mode,
        primary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        secondary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        background: {
            paper: color1.primaryBackground,
            default: color1.secondaryBackground
        },
        error: {
            main: color1.redMain,
            contrastText: color1.redContrastText
        },
        success: {
            main: color1.greenMain
        },
        warning: {
            main: color1.orangeMain
        },
        divider: color1.divider,
        text: {
            primary: color1.textPrimary,
            secondary: color1.textSecondary
        }
    })
;
function MaskTheme(mode) {
    const colors = mode === 'dark' ? _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .DarkColor */ .I3 : _CSSVariables__WEBPACK_IMPORTED_MODULE_2__/* .LightColor */ .Ci;
    const theme = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({
        palette: color(mode, colors)
    }, ...Object.values(_changes__WEBPACK_IMPORTED_MODULE_0__).map(applyColors), ...Object.values(_component_changes__WEBPACK_IMPORTED_MODULE_1__).map(applyColors));
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');


/***/ }),

/***/ 89567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.B),
/* harmony export */   "ZL": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "ze": () => (/* reexport safe */ _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__.z)
/* harmony export */ });
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21561);
/* harmony import */ var _custom_ui_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22993);





/***/ }),

/***/ 21561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13442);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(927);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});


/***/ }),

/***/ 65506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Am": () => (/* binding */ FungibleAssetProvider),
/* harmony export */   "Dr": () => (/* binding */ EthereumTokenType),
/* harmony export */   "Lv": () => (/* binding */ AddressNameType),
/* harmony export */   "OO": () => (/* binding */ EthereumErrorType),
/* harmony export */   "Ow": () => (/* binding */ LockStatus),
/* harmony export */   "TP": () => (/* binding */ GasOption),
/* harmony export */   "V2": () => (/* binding */ CurrencyType),
/* harmony export */   "W8": () => (/* binding */ EthereumMethodType),
/* harmony export */   "Wv": () => (/* binding */ EthereumRpcType),
/* harmony export */   "a_": () => (/* binding */ ChainId),
/* harmony export */   "g8": () => (/* binding */ TransactionStatusType),
/* harmony export */   "iE": () => (/* binding */ TransactionEventType),
/* harmony export */   "lP": () => (/* binding */ ProviderType),
/* harmony export */   "n$": () => (/* binding */ TransactionStateType),
/* harmony export */   "pI": () => (/* binding */ NonFungibleAssetProvider),
/* harmony export */   "sl": () => (/* binding */ FilterTransactionType),
/* harmony export */   "td": () => (/* binding */ NetworkType)
/* harmony export */ });
/* unused harmony exports DomainProvider, TransactionType, DebankTransactionDirection, ZerionTransactionDirection */
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["USD"] = 'usd';
})(CurrencyType || (CurrencyType = {}));
var ChainId;
(function(ChainId) {
    ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
    ChainId[ChainId["Ropsten"] = 3] = "Ropsten";
    ChainId[ChainId["Rinkeby"] = 4] = "Rinkeby";
    ChainId[ChainId["Gorli"] = 5] = "Gorli";
    ChainId[ChainId["Kovan"] = 42] = "Kovan";
    ChainId[ChainId[// BSC
    "BSC"] = 56] = "BSC";
    ChainId[ChainId["BSCT"] = 97] = "BSCT";
    ChainId[ChainId[// Matic
    "Matic"] = 137] = "Matic";
    ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
    ChainId[ChainId[// Arbitrum
    "Arbitrum"] = 42161] = "Arbitrum";
    ChainId[ChainId["Arbitrum_Rinkeby"] = 421611] = "Arbitrum_Rinkeby";
    ChainId[ChainId[// xDai
    "xDai"] = 100] = "xDai";
    ChainId[ChainId[// Avalanche
    "Avalanche"] = 43114] = "Avalanche";
    ChainId[ChainId["Avalanche_Fuji"] = 43113] = "Avalanche_Fuji";
    ChainId[ChainId[// Celo
    "Celo"] = 42220] = "Celo";
    ChainId[ChainId[// Fantom
    "Fantom"] = 250] = "Fantom";
    ChainId[ChainId[// Aurora
    "Aurora"] = 1313161554] = "Aurora";
    ChainId[ChainId["Aurora_Testnet"] = 1313161555] = "Aurora_Testnet";
    ChainId[ChainId[// Fuse
    "Fuse"] = 122] = "Fuse";
    ChainId[ChainId[// Boba
    "Boba"] = 288] = "Boba";
    ChainId[ChainId[// Metis
    "Metis"] = 1088] = "Metis";
    ChainId[ChainId[// Optimistic
    "Optimistic"] = 10] = "Optimistic";
    ChainId[ChainId[// Conflux
    "Conflux"] = 1030] = "Conflux";
})(ChainId || (ChainId = {}));
var LockStatus;
(function(LockStatus) {
    LockStatus[LockStatus["INIT"] = 0] = "INIT";
    LockStatus[LockStatus["UNLOCK"] = 1] = "UNLOCK";
    LockStatus[LockStatus["LOCKED"] = 2] = "LOCKED";
})(LockStatus || (LockStatus = {}));
var EthereumTokenType;
(function(EthereumTokenType) {
    EthereumTokenType[EthereumTokenType["Native"] = 0] = "Native";
    EthereumTokenType[EthereumTokenType["ERC20"] = 1] = "ERC20";
    EthereumTokenType[EthereumTokenType["ERC721"] = 2] = "ERC721";
    EthereumTokenType[EthereumTokenType["ERC1155"] = 3] = "ERC1155";
})(EthereumTokenType || (EthereumTokenType = {}));
var EthereumMethodType;
(function(EthereumMethodType) {
    EthereumMethodType["WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumMethodType["WATCH_ASSET_LEGACY"] = 'metamask_watchAsset';
    EthereumMethodType["PERSONAL_SIGN"] = 'personal_sign';
    EthereumMethodType["WALLET_ADD_ETHEREUM_CHAIN"] = 'wallet_addEthereumChain';
    EthereumMethodType["WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumMethodType["ETH_CHAIN_ID"] = 'eth_chainId';
    EthereumMethodType["ETH_ACCOUNTS"] = 'eth_accounts';
    EthereumMethodType["ETH_REQUEST_ACCOUNTS"] = 'eth_requestAccounts';
    EthereumMethodType["ETH_SEND_TRANSACTION"] = 'eth_sendTransaction';
    EthereumMethodType["ETH_SEND_RAW_TRANSACTION"] = 'eth_sendRawTransaction';
    EthereumMethodType["ETH_GET_CODE"] = 'eth_getCode';
    EthereumMethodType["ETH_GAS_PRICE"] = 'eth_gasPrice';
    EthereumMethodType["ETH_BLOCK_NUMBER"] = 'eth_blockNumber';
    EthereumMethodType["ETH_GET_BALANCE"] = 'eth_getBalance';
    EthereumMethodType["ETH_GET_TRANSACTION_BY_HASH"] = 'eth_getTransactionByHash';
    EthereumMethodType["ETH_GET_TRANSACTION_RECEIPT"] = 'eth_getTransactionReceipt';
    EthereumMethodType["ETH_GET_TRANSACTION_COUNT"] = 'eth_getTransactionCount';
    EthereumMethodType["ETH_GET_FILTER_CHANGES"] = 'eth_getFilterChanges';
    EthereumMethodType["ETH_NEW_PENDING_TRANSACTION_FILTER"] = 'eth_newPendingTransactionFilter';
    EthereumMethodType["ETH_ESTIMATE_GAS"] = 'eth_estimateGas';
    EthereumMethodType["ETH_CALL"] = 'eth_call';
    EthereumMethodType["ETH_SIGN"] = 'eth_sign';
    EthereumMethodType["ETH_DECRYPT"] = 'eth_decrypt';
    EthereumMethodType["ETH_SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumMethodType["ETH_SIGN_TRANSACTION"] = 'eth_signTransaction';
    EthereumMethodType["ETH_GET_LOGS"] = 'eth_getLogs';
    EthereumMethodType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
    EthereumMethodType[// only for mask
    "MASK_GET_TRANSACTION_RECEIPT"] = 'mask_getTransactionReceipt';
    EthereumMethodType["MASK_REPLACE_TRANSACTION"] = 'mask_replaceTransaction';
    EthereumMethodType["MASK_LOGIN_FORTMATIC"] = 'mask_loginFortmatic';
    EthereumMethodType["MASK_LOGOUT_FORTMATIC"] = 'mask_logoutFortmatic';
})(EthereumMethodType || (EthereumMethodType = {}));
var EthereumErrorType;
(function(EthereumErrorType) {
    EthereumErrorType["ERR_SIGN_TRANSACTION"] = 'Failed to sign transaction.';
    EthereumErrorType["ERR_SEND_TRANSACTION"] = 'Failed to send transaction.';
    EthereumErrorType["ERR_SIGN_MESSAGE"] = 'Failed to sign message.';
})(EthereumErrorType || (EthereumErrorType = {}));
var EthereumRpcType;
(function(EthereumRpcType) {
    EthereumRpcType[// transaction
    "CANCEL"] = 'cancel';
    EthereumRpcType["RETRY"] = 'retry';
    EthereumRpcType[// contract interaction
    "SEND_ETHER"] = 'sendEther';
    EthereumRpcType["CONTRACT_INTERACTION"] = 'contractInteraction';
    EthereumRpcType["CONTRACT_DEPLOYMENT"] = 'contractDeployment';
    EthereumRpcType[// asset
    "WATCH_ASSET"] = 'wallet_watchAsset';
    EthereumRpcType[// wallet
    "WALLET_SWITCH_ETHEREUM_CHAIN"] = 'wallet_switchEthereumChain';
    EthereumRpcType[// sign
    "SIGN"] = 'eth_sign';
    EthereumRpcType["SIGN_TYPED_DATA"] = 'eth_signTypedData_v4';
    EthereumRpcType[// decrypt
    "ETH_DECRYPT"] = 'eth_decrypt';
    EthereumRpcType["ETH_GET_ENCRYPTION_PUBLIC_KEY"] = 'eth_getEncryptionPublicKey';
})(EthereumRpcType || (EthereumRpcType = {}));
var TransactionEventType;
(function(TransactionEventType) {
    TransactionEventType["TRANSACTION_HASH"] = 'transactionHash';
    TransactionEventType["RECEIPT"] = 'receipt';
    TransactionEventType["CONFIRMATION"] = 'confirmation';
    TransactionEventType["ERROR"] = 'error';
})(TransactionEventType || (TransactionEventType = {}));
var TransactionStatusType;
(function(TransactionStatusType) {
    TransactionStatusType[TransactionStatusType["NOT_DEPEND"] = 0] = "NOT_DEPEND";
    TransactionStatusType[TransactionStatusType["SUCCEED"] = 1] = "SUCCEED";
    TransactionStatusType[TransactionStatusType["FAILED"] = 2] = "FAILED";
    TransactionStatusType[TransactionStatusType["CANCELLED"] = 3] = "CANCELLED";
})(TransactionStatusType || (TransactionStatusType = {}));
var DomainProvider;
(function(DomainProvider) {
    DomainProvider["ENS"] = "ENS";
    DomainProvider["UNS"] = "UNS";
})(DomainProvider || (DomainProvider = {}));
var FilterTransactionType;
(function(FilterTransactionType) {
    FilterTransactionType["ALL"] = 'all';
    FilterTransactionType["SEND"] = 'send';
    FilterTransactionType["RECEIVE"] = 'receive';
    FilterTransactionType["CREATE_RED_PACKET"] = 'create_red_packet';
    FilterTransactionType["FILL_POOL"] = 'fill_pool';
})(FilterTransactionType || (FilterTransactionType = {}));
var TransactionType;
(function(TransactionType) {
    TransactionType["SEND"] = 'Send';
    TransactionType["SWAP"] = 'swap';
    TransactionType["RECEIVE"] = 'Receive';
    TransactionType["TRANSFER"] = 'transfer';
    TransactionType["CREATE_RED_PACKET"] = 'create_red_packet';
    TransactionType["FILL_POOL"] = 'fill_pool';
    TransactionType["CLAIM"] = 'claim';
    TransactionType["REFUND"] = 'refund';
})(TransactionType || (TransactionType = {}));
var DebankTransactionDirection;
(function(DebankTransactionDirection) {
    DebankTransactionDirection["SEND"] = 'send';
    DebankTransactionDirection["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection) {
    ZerionTransactionDirection["IN"] = 'in';
    ZerionTransactionDirection["OUT"] = 'out';
    ZerionTransactionDirection["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {}));
var AddressNameType;
(function(AddressNameType) {
    AddressNameType["ADDRESS"] = "ADDRESS";
    AddressNameType["ENS"] = "ENS";
    AddressNameType["UNS"] = "UNS";
    AddressNameType["DNS"] = "DNS";
    AddressNameType["RSS3"] = "RSS3";
    AddressNameType["GUN"] = "GUN";
    AddressNameType["THE_GRAPH"] = "THE_GRAPH";
    AddressNameType["TWITTER_BLUE"] = "TWITTER_BLUE";
})(AddressNameType || (AddressNameType = {}));
var GasOption;
(function(GasOption) {
    GasOption["Low"] = 'low';
    GasOption["Medium"] = 'medium';
    GasOption["High"] = 'high';
})(GasOption || (GasOption = {}));
var TransactionStateType;
(function(TransactionStateType) {
    TransactionStateType[TransactionStateType["UNKNOWN"] = 0] = "UNKNOWN";
    TransactionStateType[TransactionStateType[/** Wait for external provider */ "WAIT_FOR_CONFIRMING"] = 1] = "WAIT_FOR_CONFIRMING";
    TransactionStateType[TransactionStateType[/** Hash is available */ "HASH"] = 2] = "HASH";
    TransactionStateType[TransactionStateType[/** Receipt is available */ "RECEIPT"] = 3] = "RECEIPT";
    TransactionStateType[TransactionStateType[/** Confirmed or Reverted */ "CONFIRMED"] = 4] = "CONFIRMED";
    TransactionStateType[TransactionStateType[/** Fail to send */ "FAILED"] = 5] = "FAILED";
})(TransactionStateType || (TransactionStateType = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 5645:
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
var e=__webpack_require__(86248),g=Object.assign;
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=e.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});e.useDebugValue(b);e.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:g({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ }),

/***/ 89810:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ blobToDataURL)
/* harmony export */ });
/* unused harmony export blobToText */
const blobToDataURL = factory('readAsDataURL');
const blobToText = factory('readAsText');
function factory(method) {
    return (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('error', () => {
                reject(reader.error);
            });
            reader.addEventListener('load', () => {
                resolve(reader.result);
            });
            reader[method](blob);
        });
    };
}
//# sourceMappingURL=blob.js.map

/***/ })

}]);