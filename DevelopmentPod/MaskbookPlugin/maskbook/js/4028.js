"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4028],{

/***/ 70232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ buildInfoMarkdown)
/* harmony export */ });
var ref, ref1, ref2, ref3, ref4, ref5, ref6;
console.log('Build info', {
    NODE_ENV: "production",
    VERSION: "v1.29.12-1931-g638baffa2",
    TAG_NAME: "v2.1.0",
    COMMIT_HASH: "638baffa2",
    COMMIT_DATE: "2022-02-14T05:55:46.000Z",
    BUILD_DATE: "2022-02-14T06:00:58.719Z",
    REMOTE_URL: "https://github.com/DimensionDev/Maskbook",
    BRANCH_NAME: "HEAD",
    DIRTY: false,
    TAG_DIRTY: true
});
var ref7;
const buildInfoMarkdown = `## Build info
- Version: ${(ref7 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : (ref1 = ref.runtime) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.getManifest) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.call(ref1)) === null || ref3 === void 0 ? void 0 : ref3.version) !== null && ref7 !== void 0 ? ref7 : (ref4 = "v2.1.0") === null || ref4 === void 0 ? void 0 : ref4.slice(1)}
- NODE_ENV: ${"production"}
- target: ${"safari"}
- build: ${"stable"}
- architecture: ${"app"}
- BUILD_DATE: ${"2022-02-14T06:00:58.719Z"}
- VERSION: ${"v1.29.12-1931-g638baffa2"}

## Git (${ true ? '*' : 0}):

${"638baffa2"} (${"HEAD"}) on tag "${"v2.1.0"}"
${((ref6 = (ref5 = "https://github.com/DimensionDev/Maskbook") === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) === null || ref6 === void 0 ? void 0 : ref6.includes('DimensionDev')) ? '' : "https://github.com/DimensionDev/Maskbook"}`;


/***/ }),

/***/ 55334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZZ": () => (/* binding */ stateCreator),
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator),
/* harmony export */   "Du": () => (/* binding */ creator)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);


// By this pattern, I hope we can enforce all providers to use this pattern to init.
// const friendsRef = stateCreator.friendsRef()
// return { friendsRef }
// Therefore they may aware they have the ability to fill in the ref.
// If I design it like this:
// const state = stateCreator()
// return state
// People might not aware they need to fill the new state.
const stateCreator = {
    friends: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef(new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO))
    ,
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
function managedStateCreator() {
    return {};
}
const creator = {
    EmptyIdentityResolveProviderState: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({
            identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown
        })
    ,
    EmptyPostProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableWeakMap */ .$f()
};


/***/ }),

/***/ 60367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rc": () => (/* reexport */ useActivatedPlugin/* useActivatedPlugin */.R),
  "Ne": () => (/* reexport */ useAllPluginsWeb3State/* useAllPluginsWeb3State */.N),
  "hn": () => (/* reexport */ useLookupDomain/* useLookupAddress */.h),
  "$q": () => (/* reexport */ useReverseAddress)
});

// UNUSED EXPORTS: useActivatedPluginWeb3State, useActivatedPluginWeb3UI

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(97263);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(6962);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(59102);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(50397);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useLookupDomain.ts
var useLookupDomain = __webpack_require__(44844);
// EXTERNAL MODULE: ../plugin-infra/src/web3/index.ts
var web3 = __webpack_require__(85574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useReverseAddress.ts


function useReverseAddress(address, pluginId) {
    const { NameService  } = (0,web3/* useWeb3State */.dM)(pluginId);
    const chainId = (0,web3/* useChainId */.xx)(pluginId);
    return (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (!address) return undefined;
        return NameService === null || NameService === void 0 ? void 0 : (ref = NameService.reverse) === null || ref === void 0 ? void 0 : ref.call(NameService, address);
    }, [
        NameService,
        address,
        chainId
    ]);
}

;// CONCATENATED MODULE: ../plugin-infra/src/hooks/index.ts








/***/ }),

/***/ 59310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fo": () => (/* binding */ registerPlugin),
/* harmony export */   "Rm": () => (/* binding */ getRegisteredWeb3Networks),
/* harmony export */   "i8": () => (/* binding */ getRegisteredWeb3Providers)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77184);

const __registered = new Map();
const registeredPlugins = {
    [Symbol.iterator]: ()=>__registered.values()
};
const registeredPluginIDs = {
    [Symbol.iterator]: ()=>__registered.keys()
};
function getPluginDefine(id) {
    return __registered.get(id);
}
function registerPlugin(def) {
    var _cache, ref, _cache1, ref1;
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
    (ref = (_cache = getRegisteredWeb3Networks_memo.cache).clear) === null || ref === void 0 ? void 0 : ref.call(_cache);
    (ref1 = (_cache1 = getRegisteredWeb3Providers_memo.cache).clear) === null || ref1 === void 0 ? void 0 : ref1.call(_cache1);
}
function getRegisteredPluginsSort_EVM_Ahead() {
    return [
        ...__registered.values()
    ].sort(sort_EVM_ahead);
}
function sort_EVM_ahead(a, b) {
    if (a.ID.includes('evm')) return -1;
    if (b.ID.includes('evm')) return 1;
    return 0;
}
const getRegisteredWeb3Networks_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Networks || []
    );
});
const getRegisteredWeb3Providers_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Providers || []
    );
});
function getRegisteredWeb3Networks() {
    return getRegisteredWeb3Networks_memo();
}
function getRegisteredWeb3Providers() {
    return getRegisteredWeb3Providers_memo();
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        try {
            if ( true && def.enableRequirement.target !== 'stable') {
                return false;
            } else if (false) {}
        } catch  {
            // process.env.channel might not be possible in each build environment.
            if (def.enableRequirement.target !== 'stable') return false;
        }
    }
    return true;
}


/***/ }),

/***/ 89684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* unused harmony export startPluginWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37327);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 38482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21949);



function createInjectHooksRenderer(usePlugins, pickInjector) {
    const picker = (plugin)=>({
            key: plugin.ID,
            name: plugin.name,
            ui: pickInjector(plugin)
        })
    ;
    function InjectHooksRenderer(props) {
        const all = usePlugins().map(picker).filter((x)=>x.ui
        ).map(({ key , name , ui  })=>// TODO: i18n
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
                subject: 'Plugin ' + name.fallback,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                    UI: ui,
                    data: props
                })
            }, key)
        );
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        }));
    }
    return function(props) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InjectHooksRenderer, {
                ...props
            })
        }));
    };
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHookRender, {
        UI: UI,
        data: data
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        ...data
    }));
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [f, setF] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const cancel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (f === null || f === void 0 ? void 0 : f(data));
    }, [
        f,
        data
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: (r)=>ref === r || setRef(r)
    }));
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 19835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ NetworkPluginID),
/* harmony export */   "V2": () => (/* binding */ CurrencyType),
/* harmony export */   "iv": () => (/* binding */ TokenType)
/* harmony export */ });
var NetworkPluginID;
(function(NetworkPluginID) {
    NetworkPluginID["PLUGIN_EVM"] = 'com.mask.evm';
    NetworkPluginID["PLUGIN_FLOW"] = 'com.mask.flow';
    NetworkPluginID["PLUGIN_SOLANA"] = 'com.mask.solana';
})(NetworkPluginID || (NetworkPluginID = {}));
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["NATIVE"] = 'native';
    CurrencyType["BTC"] = 'btc';
    CurrencyType["USD"] = 'usd';
})(CurrencyType || (CurrencyType = {}));
var TokenType;
(function(TokenType) {
    TokenType["Fungible"] = "Fungible";
    TokenType["NonFungible"] = "NonFungible";
})(TokenType || (TokenType = {}));


/***/ }),

/***/ 99599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29730);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70422);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    var ref;
    const { account , wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    var ref1;
    return  true ? (ref1 = (ref = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallets)) === null || ref === void 0 ? void 0 : ref.address) !== null && ref1 !== void 0 ? ref1 : '' : 0;
}


/***/ }),

/***/ 90994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23345);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70422);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59310);



function useNetworkDescriptor(expectedChainIdOrNetworkTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginIDContext */ .Zn)();
    const pid = expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID;
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pid);
    var ref2;
    return (ref = (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pid)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Networks) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((ref2 = expectedChainIdOrNetworkTypeOrID !== null && expectedChainIdOrNetworkTypeOrID !== void 0 ? expectedChainIdOrNetworkTypeOrID : networkType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 90071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82076);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70422);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59310);



function useProviderDescriptor(expectedProviderTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginIDContext */ .Zn)();
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID);
    var ref2;
    return (ref = (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Providers) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.type,
            x.ID
        ].includes((ref2 = expectedProviderTypeOrID !== null && expectedProviderTypeOrID !== void 0 ? expectedProviderTypeOrID : providerType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 54479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99599);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70422);


function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)(pluginID);
    const { wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 56964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70422);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59102);


function useWeb3State(expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginIDContext */ .Zn)();
    var ref;
    return (ref = (0,_hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginWeb3State */ .G)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) !== null && ref !== void 0 ? ref : {};
}


/***/ }),

/***/ 71785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58231);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31782);




/***/ }),

/***/ 88569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58848);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18836);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(98174);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60822);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77395);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54054);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2396);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80099);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93809);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(79197);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62554);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24969);















const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .Z)()((theme, { isFacebook  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12
    };
    const defaultVariant = {
        background: isDark ? '#17191D' : '#F7F9FA',
        color: isDark ? '#D9D9D9' : '#0F1419',
        [`& .${refs.title}`]: {
            color: isDark ? '#D9D9D9' : palette.grey['800']
        }
    };
    const success = {
        backgroundColor: '#60DFAB',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const error = {
        background: '#FF5F5F',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const info = {
        background: '#8CA3C7',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const warning = {
        backgroundColor: '#FFB915',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: isFacebook ? 'translateY(80px)' : 'none',
            color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textLight */ .ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.greenMain */ .ZN.greenMain,
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.redMain */ .ZN.redMain,
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${warning.ref}`]: {
                color: '#ffffff'
            }
        },
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit'
        },
        texts: {
            marginLeft: theme.spacing(2)
        },
        title,
        message,
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        }
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    var _isFacebook;
    const classes = (0,_UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_11__/* .useStylesExtends */ .B)(useStyles({
        isFacebook: (_isFacebook = props.isFacebook) !== null && _isFacebook !== void 0 ? _isFacebook : false
    }), props);
    const snackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const loadingIcon = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_12__/* .LoadingIcon */ .H, {
        color: "inherit",
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id)
        ,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarContent */ .No, {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, classes[props.variant]),
        children: [
            variantIcon && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    }));
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    var _isFacebook;
    const { classes  } = useStyles({
        isFacebook: (_isFacebook = props.isFacebook) !== null && _isFacebook !== void 0 ? _isFacebook : false
    });
    const onDismiss = (key)=>{
        return ()=>{
            var ref;
            (ref = ref1.current) === null || ref === void 0 ? void 0 : ref.closeSnackbar(key);
        };
    };
    var _variant;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarProvider */ .wT, {
        ref: ref1,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                id: key,
                variant: (_variant = props.variant) !== null && _variant !== void 0 ? _variant : 'default',
                title: title,
                isFacebook: props.isFacebook
            })
        ,
        action: (key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                    color: "inherit"
                })
            })
        ,
        classes: {
            containerRoot: classes.root,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantInfo: classes.info,
            variantWarning: classes.warning
        },
        ...props
    }));
});
function useCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_3__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                    variant: variant !== null && variant !== void 0 ? variant : 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                }));
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 2081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ None),
/* harmony export */   "bD": () => (/* binding */ Some)
/* harmony export */ });
/* unused harmony export Option */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99734);
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7185);


/**
 * Contains the None value
 */
var NoneImpl = /** @class */ (function () {
    function NoneImpl() {
        this.some = false;
        this.none = true;
    }
    NoneImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    NoneImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    NoneImpl.prototype.expect = function (msg) {
        throw new Error("" + msg);
    };
    NoneImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
    };
    NoneImpl.prototype.map = function (_mapper) {
        return this;
    };
    NoneImpl.prototype.andThen = function (op) {
        return this;
    };
    NoneImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(error);
    };
    NoneImpl.prototype.toString = function () {
        return 'None';
    };
    return NoneImpl;
}());
// Export None as a singleton, then freeze it so it can't be modified
var None = new NoneImpl();
Object.freeze(None);
/**
 * Contains the success value
 */
var SomeImpl = /** @class */ (function () {
    function SomeImpl(val) {
        if (!(this instanceof SomeImpl)) {
            return new SomeImpl(val);
        }
        this.some = true;
        this.none = false;
        this.val = val;
    }
    /**
     * Helper function if you know you have an Some<T> and T is iterable
     */
    SomeImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.val);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    SomeImpl.prototype.unwrapOr = function (_val) {
        return this.val;
    };
    SomeImpl.prototype.expect = function (_msg) {
        return this.val;
    };
    SomeImpl.prototype.unwrap = function () {
        return this.val;
    };
    SomeImpl.prototype.map = function (mapper) {
        return Some(mapper(this.val));
    };
    SomeImpl.prototype.andThen = function (mapper) {
        return mapper(this.val);
    };
    SomeImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(this.val);
    };
    /**
     * Returns the contained `Some` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Some<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the type of the Option is later changed to a None that can actually occur.
     *
     * (this is the `into_Some()` in rust)
     */
    SomeImpl.prototype.safeUnwrap = function () {
        return this.val;
    };
    SomeImpl.prototype.toString = function () {
        return "Some(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    SomeImpl.EMPTY = new SomeImpl(undefined);
    return SomeImpl;
}());
// This allows Some to be callable - possible because of the es5 compilation target
var Some = SomeImpl;
var Option;
(function (Option) {
    /**
     * Parse a set of `Option`s, returning an array of all `Some` values.
     * Short circuits with the first `None` found, if any
     */
    function all() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var someOption = [];
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.some) {
                someOption.push(option.val);
            }
            else {
                return option;
            }
        }
        return Some(someOption);
    }
    Option.all = all;
    /**
     * Parse a set of `Option`s, short-circuits when an input value is `Some`.
     * If no `Some` is found, returns `None`.
     */
    function any() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        // short-circuits
        for (var _a = 0, options_2 = options; _a < options_2.length; _a++) {
            var option = options_2[_a];
            if (option.some) {
                return option;
            }
            else {
                return option;
            }
        }
        // it must be None
        return None;
    }
    Option.any = any;
    function isOption(value) {
        return value instanceof Some || value === None;
    }
    Option.isOption = isOption;
})(Option || (Option = {}));
//# sourceMappingURL=option.js.map

/***/ })

}]);