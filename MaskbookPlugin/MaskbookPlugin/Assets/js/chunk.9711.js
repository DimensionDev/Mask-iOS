"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[398],{

/***/ 75517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ buildInfoMarkdown)
/* harmony export */ });
var ref, ref1, ref2, ref3, ref4, ref5, ref6;
console.log('Build info', {
    NODE_ENV: "production",
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9711.js
    VERSION: "v1.29.12-905-gc5a5cecec",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "c5a5cecec",
    COMMIT_DATE: "2021-08-31T02:49:35.000Z",
    BUILD_DATE: "2021-08-31T02:52:53.915Z",
=======
    VERSION: "v1.29.12-934-g3c26b8026",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "3c26b8026",
    COMMIT_DATE: "2021-09-03T05:33:25.000Z",
    BUILD_DATE: "2021-09-03T05:37:26.140Z",
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.398.js
    REMOTE_URL: "https://github.com/DimensionDev/Maskbook",
    BRANCH_NAME: "develop",
    DIRTY: false,
    TAG_DIRTY: true
});
var ref7;
const buildInfoMarkdown = `## Build info
- Version: ${(ref7 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : (ref1 = ref.runtime) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.getManifest) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.call(ref1)) === null || ref3 === void 0 ? void 0 : ref3.version) !== null && ref7 !== void 0 ? ref7 : (ref4 = "v1.36.0") === null || ref4 === void 0 ? void 0 : ref4.slice(1)}
- NODE_ENV: ${"production"}
- target: ${"safari"}
- build: ${"stable"}
- architecture: ${"app"}
- firefoxVariant: ${false}
- resolution: ${"mobile"}
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9711.js
- BUILD_DATE: ${"2021-08-31T02:52:53.915Z"}
- VERSION: ${"v1.29.12-905-gc5a5cecec"}

## Git (${ true ? '*' : 0}):

${"c5a5cecec"} (${"develop"}) on tag "${"v1.36.0"}"
=======
- BUILD_DATE: ${"2021-09-03T05:37:26.140Z"}
- VERSION: ${"v1.29.12-934-g3c26b8026"}

## Git (${ true ? '*' : 0}):

${"3c26b8026"} (${"develop"}) on tag "${"v1.36.0"}"
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.398.js
${((ref6 = (ref5 = "https://github.com/DimensionDev/Maskbook") === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) === null || ref6 === void 0 ? void 0 : ref6.includes('DimensionDev')) ? '' : "https://github.com/DimensionDev/Maskbook"}`;


/***/ }),

/***/ 83071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D0": () => (/* binding */ DebounceButton),
/* harmony export */   "ZP": () => (/* binding */ ActionButton),
/* harmony export */   "Zc": () => (/* binding */ ActionButtonPromise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89730);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98181);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98010);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40870);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83693);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59603);
}
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44713);










const circle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "inherit",
    size: 18
});
function useDebounceAsync(asyncFn) {
    // useAsyncFn use T | [] as it's parameter where is conflict with our usage.
    // We should ensure always call startAsyncFn with parameters.
    const [state, startAsyncFn] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(asyncFn, [
        asyncFn
    ], {
        loading: false,
        value: undefined
    });
    // Sync the debounce state after 500ms
    const [debounceLoading, setDebounceLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(()=>setDebounceLoading(state.loading)
    , 500, [
        state
    ]);
    const f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>{
        if (!state.loading) {
            setDebounceLoading(false);
            startAsyncFn(...args);
        }
    }, [
        startAsyncFn,
        state.loading
    ]);
    // loading 0ms to 500ms: disabled, !loading
    // loading 500ms+: disabled, loading
    if (state.loading) return {
        f,
        disabled: true,
        loading: debounceLoading
    };
    // The debounceLoading is invalidated, refresh it now (instead of waiting for 500ms)
    if (debounceLoading) setDebounceLoading(false);
    // If the task is not running, ignore the throttledLoading
    return {
        disabled: false,
        loading: false,
        f
    };
}
function DebounceButton(_props) {
    const { onClick , color , ...props } = _props;
    const classes = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__/* .useErrorStyles */ .B6)();
    const { f , loading  } = useDebounceAsync(onClick);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        startIcon: loading ? circle : undefined,
        disabled: loading,
        onClick: f,
        classes: color === 'danger' ? classes : undefined,
        color: color === 'danger' ? 'primary' : color,
        ...props
    }));
}
function ActionButton(props) {
    const { width , loading , children , className , style , ...rest } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        disableElevation: true,
        disabled: loading,
        startIcon: loading && circle,
        className: 'actionButton ' + className,
        style: {
            width,
            ...style
        },
        children: children,
        ...rest
    }));
};
function ActionButtonPromise(props) {
    const { classes  } = useStyles();
    const { executor , complete , failed , waiting , init , completeOnClick , waitingOnClick , failedOnClick , completeIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    }) , failIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    }) , ...b } = props;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('init');
    const completeClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.success, b.className);
    const failClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.failed, b.className);
    const run = ()=>{
        setState('wait');
        executor().then(()=>setState('complete')
        , ()=>setState('fail')
        );
    };
    const cancel = ()=>{
        const p = waitingOnClick === null || waitingOnClick === void 0 ? void 0 : waitingOnClick();
        p && setState(p);
    };
    const completeClick = completeOnClick === 'use executor' ? run : completeOnClick;
    const failClick = failedOnClick === 'use executor' ? run : failedOnClick;
    if (state === 'wait') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        startIcon: circle,
        disabled: !waitingOnClick,
        children: waiting,
        onClick: cancel
    }));
    if (state === 'complete') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !completeClick,
        startIcon: completeIcon,
        children: complete,
        className: completeClass,
        onClick: completeClick
    }));
    if (state === 'fail') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !failClick,
        startIcon: failIcon,
        children: failed,
        className: failClass,
        onClick: failClick
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        children: init,
        onClick: run
    }));
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    success: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[700] */ .Z[700]
        }
    },
    failed: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[700] */ .Z[700]
        }
    }
});


/***/ }),

/***/ 70791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ DashboardRoute),
/* harmony export */   "p": () => (/* binding */ DashboardWalletRoute)
/* harmony export */ });
var DashboardRoute;
(function(DashboardRoute1) {
    DashboardRoute1["Nav"] = '/nav';
    DashboardRoute1["Personas"] = '/personas';
    DashboardRoute1["Wallets"] = '/wallets';
    DashboardRoute1["Contacts"] = '/contacts';
    DashboardRoute1["Settings"] = '/settings';
    DashboardRoute1["Plugins"] = '/plugins';
    DashboardRoute1["Setup"] = '/setup';
})(DashboardRoute || (DashboardRoute = {
}));
var DashboardWalletRoute;
(function(DashboardWalletRoute1) {
    DashboardWalletRoute1["Tokens"] = '0';
    DashboardWalletRoute1["Collectibles"] = '1';
    DashboardWalletRoute1["Transactions"] = '2';
})(DashboardWalletRoute || (DashboardWalletRoute = {
}));


/***/ }),

/***/ 74187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SetupStep)
/* harmony export */ });
var SetupStep;
(function(SetupStep1) {
    SetupStep1["ConsentDataCollection"] = 'consent-data-collection';
    SetupStep1["CreatePersona"] = 'create-persona';
    SetupStep1["ConnectNetwork"] = 'connect-network';
    SetupStep1["RestoreDatabase"] = 'restore-database';
    SetupStep1["RestoreDatabaseAdvance"] = 'restore-database-advance';
    SetupStep1["RestoreDatabaseConfirmation"] = 'restore-database-confirmation';
})(SetupStep || (SetupStep = {
}));


/***/ }),

/***/ 43776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ getWelcomePageURL)
/* harmony export */ });
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70791);
/* harmony import */ var _SetupStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74187);



function getWelcomePageURL() {
    if (false) {} else if (_utils_flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.has_no_browser_tab_ui */ .vU.has_no_browser_tab_ui) {
        return browser.runtime.getURL(`index.html#${_Route__WEBPACK_IMPORTED_MODULE_1__/* .DashboardRoute.Nav */ .q.Nav}`);
    } else {
        return browser.runtime.getURL(`index.html#${_Route__WEBPACK_IMPORTED_MODULE_1__/* .DashboardRoute.Setup */ .q.Setup}/${_SetupStep__WEBPACK_IMPORTED_MODULE_2__/* .SetupStep.ConsentDataCollection */ .d.ConsentDataCollection}`);
    }
}


/***/ }),

/***/ 54061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ facebookBase),
/* harmony export */   "X": () => (/* binding */ facebookWorkerBase)
/* harmony export */ });
const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    networkIdentifier: 'facebook.com',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 95415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase),
/* harmony export */   "x": () => (/* binding */ instagramWorkerBase)
/* harmony export */ });
const id = 'instagram.com';
const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: id,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(id);
    },
    notReadyForProduction: true
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: id
};


/***/ }),

/***/ 14840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "x": () => (/* binding */ twitterWorkerBase)
/* harmony export */ });
const id = 'twitter.com';
const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: id,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === id;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 45513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Du),
/* harmony export */   "managedStateCreator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.MJ),
/* harmony export */   "stateCreator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.ZZ),
/* harmony export */   "activateSocialNetworkUIInner": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUISync),
/* harmony export */   "activateSocialNetworkUI": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.Ps),
/* harmony export */   "defineSocialNetworkUI": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "defineSocialNetworkWorker": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.tr),
/* harmony export */   "definedSocialNetworkUIs": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "definedSocialNetworkWorkers": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.zq),
/* harmony export */   "definedSocialNetworkWorkersResolved": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.Ot),
/* harmony export */   "getNetworkWorker": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C8),
/* harmony export */   "getNetworkWorkerUninitialized": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.Bu)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77212);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97889);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13206);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56839);







/***/ }),

/***/ 22192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$2": () => (/* binding */ decodePublicKeyUI),
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI),
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI)
/* harmony export */ });
/* unused harmony export encodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97889);

function encodePublicKeyUI(x) {
    var ref;
    const f = (ref = activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
    if (f) return f(x) || x;
    return x;
}
function decodePublicKeyUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}
function encodeTextPayloadUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.encoder;
    if (f) return f(x) || x;
    return x;
}
function decodeTextPayloadUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}


/***/ }),

/***/ 54003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ notNullable)
/* harmony export */ });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57579);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);

const notInclude = (val, things, message)=>{
    things.forEach((value)=>{
        (0,assert__WEBPACK_IMPORTED_MODULE_0__.notStrictEqual)(val, value, message);
    });
};
/**
 * Ensure a value not null or undefined.
 */ const notNullable = (val, message = 'Unexpected nil value detected')=>{
    notInclude(val, [
        null,
        undefined
    ], message);
    return val;
};


/***/ }),

/***/ 29711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ collectNodeText)
/* harmony export */ });
function collectNodeText(node, options = {
}) {
    if (!node) return '';
    if (!node.querySelector('a,img')) return node.innerText;
    return [
        ...node.childNodes
    ].map((each)=>{
        if (each.nodeType === document.TEXT_NODE) return each.nodeValue || '';
        if (each instanceof HTMLAnchorElement) {
            var ref;
            const result = (ref = options.onHTMLAnchorElement) === null || ref === void 0 ? void 0 : ref.call(options, each);
            if (result === null || result === void 0 ? void 0 : result.some) return result.val;
            const href = each.getAttribute('href');
            return href || each.innerText;
        }
        if (each instanceof HTMLImageElement) return each.alt;
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 98332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57703);
}
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7931);
}



const mapContactAvatarColor = (string, theme)=>{
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? `78%` : '98%'}, ${theme === 'dark' ? `50%` : '70%'})`;
};
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: mapContactAvatarColor(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    }));
}


/***/ }),

/***/ 51785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98332);



/***/ }),

/***/ 32951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ft": () => (/* binding */ untilElementAvailable),
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded),
/* harmony export */   "Hx": () => (/* binding */ untilDocumentReady),
/* harmony export */   "vv": () => (/* binding */ nthChild)
/* harmony export */ });
/* unused harmony export isDocument */
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
	/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
}
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


const isDocument = (node)=>node.nodeType === Node.DOCUMENT_NODE
;
const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.IntervalWatcher(ls);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject()
        , timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
};
function untilDomLoaded() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState !== 'loading') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
function untilDocumentReady() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState === 'complete') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
const nthChild = (n, ...childrenIndex)=>{
    let r = n;
    for (const v of childrenIndex){
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(r)) break;
        r = r.children[v];
    }
    return r;
};


/***/ }),

/***/ 77487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IN": () => (/* reexport safe */ _useMatchXS__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   "eD": () => (/* reexport safe */ _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__.D),
/* harmony export */   "Kx": () => (/* reexport safe */ _useQueryParams__WEBPACK_IMPORTED_MODULE_6__.K),
/* harmony export */   "MN": () => (/* reexport safe */ _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_8__.E)
/* harmony export */ });
/* harmony import */ var _useControlledDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8672);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _useMatchXS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37094);
}
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17972);
/* harmony import */ var _useQRCodeImageScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28470);
/* harmony import */ var _useQRCodeVideoScan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85382);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41550);
if (462 == __webpack_require__.j) {
	/* harmony import */ var _useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(533);
}
/* harmony import */ var _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73493);
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54128);
/* harmony import */ var _useVideoDevices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22096);













/***/ }),

/***/ 37094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useMatchXS)
/* harmony export */ });
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77504);
}

function useMatchXS() {
    return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)((theme)=>theme.breakpoints.down('sm')
    , {
        defaultMatches:  true ? true : 0
    });
}


/***/ }),

/***/ 17972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42515);
}
/* harmony import */ var _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33465);



/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const anchorElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const close = ()=>setOpen(false)
    ;
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            PaperProps: props === null || props === void 0 ? void 0 : props.paperProps,
            MenuListProps: props === null || props === void 0 ? void 0 : props.menuListProps,
            open: open,
            anchorEl: anchorElRef.current,
            onClose: close,
            onClick: close
        }, elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
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
            var ref;
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            anchorElRef.current = anchorSibling ? (ref = element.nextElementSibling) !== null && ref !== void 0 ? ref : undefined : element;
            setOpen(true);
        }, []), 
    ];
}


/***/ }),

/***/ 28470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useQRCodeImageScan)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88088);
}



function useQRCodeImageScan(image) {
    const scanner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new BarcodeDetector({
        formats: [
            'qr_code'
        ]
    }));
    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const node = image.current;
        if (node) {
            var ref;
            node.addEventListener('load', ()=>{
                return setSource((ref = node === null || node === void 0 ? void 0 : node.getAttribute('src')) !== null && ref !== void 0 ? ref : '');
            });
            node.addEventListener('error', ()=>setSource('')
            );
        } else {
            setSource('');
        }
    }, [
        image
    ]);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        const image1 = await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .loadImage */ .po)(source);
        const [{ rawValue  }] = await scanner.current.detect(image1);
        return rawValue;
    }, [
        source,
        scanner.current
    ]);
}


/***/ }),

/***/ 85382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useQRCodeVideoScan)
/* harmony export */ });
/* unused harmony export getBackVideoDeviceId */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28008);
}
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41550);
/* harmony import */ var _components_QRScanner_ShapeDetectionPolyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96844);
/// <reference path="../../components/QRScanner/ShapeDetectionSpec.d.ts" />
/** This file is published under MIT License */ 




async function getBackVideoDeviceId() {
    var ref;
    const devices = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.filter)(await navigator.mediaDevices.enumerateDevices(), ({ kind  })=>kind === 'videoinput'
    );
    const back = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.find)(devices, ({ label  })=>!/front/i.test(label) && /back|rear/i.test(label)
    );
    var ref1;
    return (ref1 = (ref = back !== null && back !== void 0 ? back : (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.first)(devices)) === null || ref === void 0 ? void 0 : ref.deviceId) !== null && ref1 !== void 0 ? ref1 : null;
}
function useQRCodeVideoScan(video, isScanning, deviceId, onResult, onError) {
    // TODO!: ? not work See https://github.com/DimensionDev/Maskbook/issues/810
    // ? Get video stream
    {
        const permission = (0,_useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__/* .useQueryNavigatorPermission */ .D)(isScanning, 'camera');
        const [mediaStream, setMediaStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            function stop() {
                if (mediaStream) {
                    mediaStream.getTracks().forEach((x)=>x.stop()
                    );
                }
                video.current.pause();
            }
            async function start() {
                if (permission !== 'granted' || !video.current) return;
                try {
                    let media = mediaStream;
                    if (!media) {
                        const device = deviceId !== null && deviceId !== void 0 ? deviceId : await getBackVideoDeviceId();
                        media = await navigator.mediaDevices.getUserMedia({
                            audio: false,
                            video: device === null ? {
                                facingMode: 'environment'
                            } : {
                                deviceId: device
                            }
                        });
                        return setMediaStream(media);
                    }
                    video.current.srcObject = media;
                    video.current.play();
                } catch (error) {
                    console.error(error);
                    stop();
                }
            }
            if (!video.current) return;
            if (!isScanning) return stop();
            start();
            return ()=>{
                stop();
            };
        }, [
            deviceId,
            isScanning,
            mediaStream,
            permission,
            video
        ]);
    }
    // ? Do scan
    {
        const scanner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new BarcodeDetector({
            formats: [
                'qr_code'
            ]
        }));
        const lastScanning = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
        const errorTimes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
        (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
            if (errorTimes.current >= 10) if (errorTimes.current === 10) {
                errorTimes.current += 1;
                return onError === null || onError === void 0 ? void 0 : onError();
            } else return;
            if (lastScanning.current) return;
            if (!video.current || !isScanning) return;
            lastScanning.current = true;
            try {
                const [result] = await scanner.current.detect(video.current);
                if (result) onResult === null || onResult === void 0 ? void 0 : onResult(result.rawValue);
            } catch  {
                errorTimes.current += 1;
            } finally{
                lastScanning.current = false;
            }
        }, 100);
    }
}


/***/ }),

/***/ 41550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useQueryNavigatorPermission)
/* harmony export */ });
/* unused harmony export checkPermissionApiUsability */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/** This file is published under MIT License */ 


const q = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? ([
    'query',
    'request',
    'revoke'
]) : null);
function checkPermissionApiUsability(type) {
    const r = {
    };
    for (const v of q){
        r[v] = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.hasIn)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('prompt');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || _flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags.has_no_WebRTC */ .vU.has_no_WebRTC) return;
        let permissionStatus;
        const handleChange = function() {
            updatePermission(this.state);
        };
        if (checkPermissionApiUsability('query')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .query({
                name
            }).then((p)=>{
                permissionStatus = p;
                permissionStatus.addEventListener('change', handleChange);
                updatePermission(permissionStatus.state);
            }).catch(()=>{
                // for some user agents which implemented `query` method
                // but rise an error if specific permission name dose not supported
                updatePermission('granted');
            });
        } else if (checkPermissionApiUsability('request')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .request({
                name
            }).then((p)=>{
                updatePermission(p.state);
            }).catch(()=>{
                updatePermission('granted');
            });
        } else {
            updatePermission('granted');
        }
        return ()=>{
            return permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.removeEventListener('change', handleChange);
        };
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}


/***/ }),

/***/ 533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useQueryParams)
/* harmony export */ });
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27019);
}

function useQueryParams(query) {
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__/* .useHistory */ .k6)();
    const result = {
    };
    const search = new URLSearchParams(history.location.search);
    query.forEach((q)=>result[q] = search.get(q)
    );
    return result;
}


/***/ }),

/***/ 22096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useVideoDevices)
/* harmony export */ });
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26670);
}
if (462 == __webpack_require__.j) {
	/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75955);
}
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


function useVideoDevices() {
    const permissionState = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
        name: 'camera'
    });
    const { devices =[]  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
    // we dispatch a fake event if permission changed
    // in order to fix the bug described in this issues
    // https://github.com/streamich/react-use/issues/1318
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        navigator.mediaDevices.dispatchEvent(new Event('devicechange'));
    }, [
        permissionState
    ]);
    return devices.filter((d)=>d.kind === 'videoinput'
    );
}


/***/ }),

/***/ 37186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qE": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "IN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.IN),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "eD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.eD),
/* harmony export */   "Kx": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Kx),
/* harmony export */   "MN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.MN),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "p_": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.p_),
/* harmony export */   "ou": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ou),
/* harmony export */   "ad": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "$I": () => (/* reexport safe */ _suspends__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "a_": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.a_),
/* harmony export */   "bH": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.bH),
/* harmony export */   "PN": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.PN),
/* harmony export */   "qX": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.qX),
/* harmony export */   "Qn": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.Qn),
/* harmony export */   "ll": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.YT),
/* harmony export */   "YU": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.Y),
/* harmony export */   "Hx": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_9__.Hx),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_11__.vU),
/* harmony export */   "c_": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "cc": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.L),
/* harmony export */   "M1": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   "ZK": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "ag": () => (/* reexport safe */ _i18n_next__WEBPACK_IMPORTED_MODULE_14__.a),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_16__.J),
/* harmony export */   "yV": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_17__.y),
/* harmony export */   "uM": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "b5": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.b),
/* harmony export */   "CU": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.CU),
/* harmony export */   "Wu": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.Wu),
/* harmony export */   "jv": () => (/* reexport safe */ _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__.j),
/* harmony export */   "Ql": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Ql),
/* harmony export */   "Uk": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Uk),
/* harmony export */   "Nh": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Nh),
/* harmony export */   "Cw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Cw),
/* harmony export */   "Se": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Se),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.gw),
/* harmony export */   "Yu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Yu),
/* harmony export */   "Ms": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Ms),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Vs),
/* harmony export */   "fy": () => (/* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_24__.f),
/* harmony export */   "aW": () => (/* reexport safe */ _collectNodeText__WEBPACK_IMPORTED_MODULE_25__.a)
/* harmony export */ });
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51785);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25665);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77487);
/* harmony import */ var _native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3270);
/* harmony import */ var _shadow_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18107);
/* harmony import */ var _suspends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92622);
/* harmony import */ var _type_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73094);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54003);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92697);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32951);
/* harmony import */ var _equality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36783);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55);
/* harmony import */ var _getTextUILength__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29722);
/* harmony import */ var _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(59450);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93002);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(38266);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(59935);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74712);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(60335);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(50656);
/* harmony import */ var _side_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(36712);
/* harmony import */ var _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44531);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(44713);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(96578);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(19439);
if (!/^(1680|964)$/.test(__webpack_require__.j)) {
	/* harmony import */ var _collectNodeText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(29711);
}































/***/ }),

/***/ 33465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47307);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42515);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91371);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53688);


const ShadowRootTooltip = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
const ShadowRootMenu = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
const ShadowRootPopper = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);


/***/ }),

/***/ 18107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ou": () => (/* reexport safe */ _renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__.o),
/* harmony export */   "p_": () => (/* reexport safe */ _ShadowRootComponents__WEBPACK_IMPORTED_MODULE_2__.p_),
/* harmony export */   "ad": () => (/* reexport safe */ _masknet_theme__WEBPACK_IMPORTED_MODULE_3__.ad)
/* harmony export */ });
/* harmony import */ var _MaskInShadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78646);
/* harmony import */ var _renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19305);
/* harmony import */ var _ShadowRootComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33465);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53688);






/***/ }),

/***/ 19305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33450);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71299);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44713);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32951);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55);
/* harmony import */ var _MaskInShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78646);









const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change', 
];
(0,_dom__WEBPACK_IMPORTED_MODULE_5__/* .untilDomLoaded */ .Up)().then(()=>{
    (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .setupPortalShadowRoot */ .d_)({
        mode: _flags__WEBPACK_IMPORTED_MODULE_6__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
    }, captureEvents);
});
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    onHeadCreate (head) {
        const themeCSSVars = head.appendChild(document.createElement('style'));
        function updateThemeVars() {
            (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .applyMaskColorVars */ .Dc)(themeCSSVars, (0,_theme__WEBPACK_IMPORTED_MODULE_4__/* .getMaskbookTheme */ .hz)().palette.mode);
        }
        updateThemeVars();
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .appearanceSettings.addListener */ .OF.addListener(updateThemeVars);
        matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeVars);
    },
    wrapJSX (jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .S, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MaskInShadow__WEBPACK_IMPORTED_MODULE_7__/* .MaskInShadow */ .v, {
                children: jsx
            })
        }));
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 44713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hz": () => (/* binding */ getMaskbookTheme),
/* harmony export */   "Uk": () => (/* binding */ useClassicMaskTheme),
/* harmony export */   "Nh": () => (/* binding */ useColorStyles),
/* harmony export */   "B6": () => (/* binding */ useErrorStyles),
/* harmony export */   "Ql": () => (/* binding */ extendsTheme)
/* harmony export */ });
if (1680 != __webpack_require__.j) {
	/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34527);
	/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
}
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11494);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95142);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87872);
if (1680 != __webpack_require__.j) {
	/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77504);
}
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56019);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87271);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8239);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40870);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5101);
/* harmony import */ var _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26197);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34539);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71299);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45513);














function getFontFamily(monospace) {
    // We want to look native.
    // Windows has no CJK sans monospace. Accommodate that.
    // We only use it for fingerprints anyway so CJK coverage ain't a problem... yet.
    const monofont = navigator.platform.startsWith('Win') ? 'Consolas, monospace' : 'monospace';
    // https://caniuse.com/font-family-system-ui
    // Firefox does NOT support yet it in any form on Windows, but tests indicate that it agrees with Edge in using the UI font for sans-serif:
    // Microsoft YaHei on zh-Hans-CN.
    return !monospace ? '-apple-system, system-ui, sans-serif' : monofont;
}
const base = {
    palette: {
        primary: {
            main: '#1c68f3'
        },
        secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z,
        text: {
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
    typography: {
        fontFamily: getFontFamily()
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1112,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    minWidth: '100px'
                }
            },
            defaultProps: {
                size: 'small',
                disableElevation: true
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    padding: '0',
                    // up-sm
                    '@media screen and (min-width: 600px)': {
                        minWidth: 160
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '12px'
                }
            }
        }
    }
};
const lightThemePatch = {
    palette: {
        mode: 'light'
    }
};
const darkThemePatch = {
    palette: {
        mode: 'dark',
        background: {
            paper: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[900] */ .Z[900]
        }
    },
    components: {
        MuiPaper: {
            // https://github.com/mui-org/material-ui/pull/25522
            styleOverrides: {
                root: {
                    backgroundImage: 'unset'
                }
            }
        }
    }
};
const baseTheme = (theme)=>{
    if (theme === 'light') return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), lightThemePatch);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), darkThemePatch);
};
// Theme
const MaskbookLightTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('light'));
const MaskbookDarkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('dark'));
function getMaskbookTheme(opt) {
    var ref;
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        const settings = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings.value */ .pQ.value;
        // TODO:
        if (settings === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = settings;
    }
    if (!language) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
    var ref1;
    const preference = (ref1 = opt === null || opt === void 0 ? void 0 : opt.appearance) !== null && ref1 !== void 0 ? ref1 : _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings.value */ .OF.value;
    // Priority:
    // PaletteModeProvider (in SNS adaptor) > User preference > OS preference
    const isDarkBrowser = matchMedia('(prefers-color-scheme: dark)').matches;
    const detectedPalette = (ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current.value;
    let isDark = isDarkBrowser && preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default || preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    if (detectedPalette) {
        isDark = detectedPalette === 'dark';
    } else if (preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default) {
        isDark = isDarkBrowser;
    } else {
        isDark = preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    }
    const baseTheme1 = isDark ? MaskbookDarkTheme : MaskbookLightTheme;
    switch(language){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS:
            return baseTheme1;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.jaJP */ .iu.jaJP:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .jaJP */ .jz);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.koKR */ .iu.koKR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .koKR */ .uG);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhTW */ .iu.zhTW:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhTW */ .cj);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhCN */ .iu.zhCN:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhCN */ .U1);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.ruRU */ .iu.ruRU:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .ruRU */ .nx);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.itIT */ .iu.itIT:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .itIT */ .KL);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.esES */ .iu.esES:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .esES */ ._Y);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.frFR */ .iu.frFR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .frFR */ .gQ);
        // TODO: it should be a RTL theme.
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.faIR */ .iu.faIR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .faIR */ .Tj);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .safeUnreachable */ .P)(language);
            return baseTheme1;
    }
}
// We're developing a new theme in the theme/ package
function useClassicMaskTheme(opt) {
    var ref;
    const langSettingsValue = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings */ .pQ);
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        // TODO:
        if (langSettingsValue === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = langSettingsValue;
    }
    const appearance = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.or)(opt === null || opt === void 0 ? void 0 : opt.appearance, (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings */ .OF));
    const systemPreference = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)('(prefers-color-scheme: dark)');
    const paletteProvider = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current) || new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.ValueRef('light')).current;
    const palette = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(paletteProvider);
    return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>getMaskbookTheme({
            appearance,
            language
        })
    , [
        language,
        appearance,
        systemPreference,
        palette
    ]);
}
const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900]
        },
        success: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[800] */ .Z[800]
        },
        info: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[800] */ .Z[800]
        }
    };
});
const useErrorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        containedPrimary: {
            backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        },
        outlinedPrimary: {
            borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        }
    };
});
function extendsTheme(extend) {
    return (theme)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(theme), extend(theme))
    ;
}


/***/ }),

/***/ 83280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bH": () => (/* binding */ compressBackupFile),
/* harmony export */   "PN": () => (/* binding */ decompressBackupFile)
/* harmony export */ });
/* unused harmony export sanitizeBackupFile */
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58222);


function sanitizeBackupFile(backup) {
    return {
        ...backup,
        grantedHostPermissions: backup.grantedHostPermissions.filter((url)=>/^(http|<all_urls>)/.test(url)
        )
    };
}
function compressBackupFile(file, { profileIdentifier , personaIdentifier  } = {
}) {
    var ref, ref1, ref2, ref3;
    const { grantedHostPermissions , profiles , personas  } = file;
    var ref4;
    const personaIdentifier_ = (ref4 = personaIdentifier === null || personaIdentifier === void 0 ? void 0 : personaIdentifier.toText()) !== null && ref4 !== void 0 ? ref4 : (ref = profiles.find((x)=>{
        return x.identifier === (profileIdentifier === null || profileIdentifier === void 0 ? void 0 : profileIdentifier.toText());
    })) === null || ref === void 0 ? void 0 : ref.linkedPersona;
    const persona = personas.find((x)=>x.identifier === personaIdentifier_
    );
    if (!persona || !persona.privateKey) throw new Error('Target persona not found');
    const linkedProfile = (ref1 = persona.linkedProfiles[0]) === null || ref1 === void 0 ? void 0 : ref1[0];
    const profileIdentifier_ = (profileIdentifier !== null && profileIdentifier !== void 0 ? profileIdentifier : linkedProfile) ? _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(linkedProfile, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap() : undefined;
    const { localKey , nickname , privateKey  } = persona;
    return [
        '1',
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.network,
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.userId,
        nickname,
        (localKey === null || localKey === void 0 ? void 0 : localKey.k) || ((ref2 = profiles.filter((x)=>{
            return x.identifier === (profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.toText());
        }).filter((x)=>x.localKey
        )[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.localKey) === null || ref3 === void 0 ? void 0 : ref3.k) || '',
        (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .compressSecp256k1Key */ .N)(privateKey, 'private'),
        grantedHostPermissions.join(';'), 
    ].join('🤔');
}
function decompressBackupFile(short) {
    let compressed;
    try {
        compressed = JSON.parse(short);
        if (typeof compressed === 'object') return sanitizeBackupFile(compressed);
    } catch  {
        if (!short.includes('🤔')) throw new Error('This backup is not a compressed string');
        compressed = short;
    }
    const [version, network, userID, nickname, localKey, privateKey, grantedHostPermissions] = compressed.split('🤔');
    if (version !== '1') throw new Error(`QR Code cannot be shared between different version of Mask`);
    const localKeyJWK = {
        alg: 'A256GCM',
        ext: true,
        k: localKey,
        key_ops: [
            'encrypt',
            'decrypt'
        ],
        kty: 'oct'
    };
    const publicJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'public');
    const privateJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'private');
    const profileID = network && userID ? new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(network, userID) : undefined;
    const ECID = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicJWK);
    return sanitizeBackupFile({
        _meta_: {
            createdAt: 0,
            maskbookVersion: browser.runtime.getManifest().version,
            version: 2,
            type: 'maskbook-backup'
        },
        grantedHostPermissions: grantedHostPermissions.split(';').filter(Boolean),
        posts: [],
        wallets: [],
        userGroups: [],
        personas: [
            {
                createdAt: 0,
                updatedAt: 0,
                privateKey: privateJWK,
                publicKey: publicJWK,
                identifier: ECID.toText(),
                linkedProfiles: profileID ? [
                    [
                        profileID.toText(),
                        {
                            connectionConfirmState: 'confirmed'
                        }
                    ]
                ] : [],
                nickname,
                localKey: localKeyJWK
            }, 
        ],
        profiles: profileID ? [
            {
                createdAt: 0,
                identifier: profileID.toText(),
                updatedAt: 0,
                linkedPersona: ECID.toText(),
                nickname: nickname,
                localKey: localKeyJWK
            }, 
        ] : []
    });
}


/***/ }),

/***/ 28563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ isBackupJSONFileVersion2),
/* harmony export */   "nl": () => (/* binding */ upgradeFromBackupJSONFileVersion1),
/* harmony export */   "a6": () => (/* binding */ patchNonBreakingUpgradeForBackupJSONFileVersion2)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14840);
/* harmony import */ var _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54061);



function isBackupJSONFileVersion2(obj) {
    var ref, ref1, ref2, ref3;
    return ((ref = obj) === null || ref === void 0 ? void 0 : (ref1 = ref._meta_) === null || ref1 === void 0 ? void 0 : ref1.version) === 2 && ((ref2 = obj) === null || ref2 === void 0 ? void 0 : (ref3 = ref2._meta_) === null || ref3 === void 0 ? void 0 : ref3.type) === 'maskbook-backup';
}
function upgradeFromBackupJSONFileVersion1(json) {
    const personas = [];
    const profiles = [];
    function addPersona(record) {
        const prev = personas.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
            prev.linkedProfiles.push(...record.linkedProfiles);
        } else personas.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    function addProfile(record) {
        const prev = profiles.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
        } else profiles.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    for (const x of json.whoami){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x.network, x.userId).toText();
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x.publicKey).toText();
        addProfile({
            identifier: profile,
            linkedPersona: persona,
            localKey: x.localKey,
            nickname: x.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile,
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x.publicKey,
            privateKey: x.privateKey,
            localKey: x.localKey,
            nickname: x.nickname
        });
    }
    for (const x1 of json.people || []){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x1.network, x1.userId);
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x1.publicKey).toText();
        addProfile({
            identifier: profile.toText(),
            linkedPersona: persona,
            nickname: x1.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile.toText(),
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x1.publicKey,
            nickname: x1.nickname
        });
    }
    return {
        _meta_: {
            version: 2,
            type: 'maskbook-backup',
            maskbookVersion: json.maskbookVersion,
            createdAt: 0
        },
        posts: [],
        wallets: [],
        personas,
        profiles,
        userGroups: [],
        grantedHostPermissions: json.grantedHostPermissions
    };
}
function patchNonBreakingUpgradeForBackupJSONFileVersion2(json) {
    var _wallets;
    json.wallets = (_wallets = json.wallets) !== null && _wallets !== void 0 ? _wallets : [];
    const permissions = new Set(json.grantedHostPermissions);
    if (json.grantedHostPermissions.some((x)=>x.includes('twitter.com')
    )) {
        const a = _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__/* .twitterBase.declarativePermissions.origins */ .oQ.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    if (json.grantedHostPermissions.some((x)=>x.includes('facebook.com')
    )) {
        const a = _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__/* .facebookBase.declarativePermissions.origins */ .q.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    return json;
}


/***/ }),

/***/ 73094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a_": () => (/* reexport */ latest/* UpgradeBackupJSONFile */.a),
  "bH": () => (/* reexport */ BackupFileShortRepresentation/* compressBackupFile */.bH),
  "PN": () => (/* reexport */ BackupFileShortRepresentation/* decompressBackupFile */.PN),
  "qX": () => (/* reexport */ SECP256k1_Compression/* decompressSecp256k1Key */.q),
  "Qn": () => (/* reexport */ Payload/* deconstructPayload */.Q),
  "ll": () => (/* reexport */ String_ArrayBuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ String_ArrayBuffer/* encodeText */.YT)
});

// UNUSED EXPORTS: CryptoKeyToJsonWebKey, JWKToKey, JsonWebKeyToCryptoKey, asyncIteratorToArray, asyncIteratorToAsyncFunction, asyncIteratorWithResult, compressSecp256k1Key, constructAlpha38, decodeArrayBuffer, decodeText, getBackupPreviewInfo, getKeyParameter, keyToAddr, keyToJWK, memorizeAsyncGenerator, sanitizeBackupFile, serialization

// EXTERNAL MODULE: ./src/utils/type-transform/BackupFileShortRepresentation.ts
var BackupFileShortRepresentation = __webpack_require__(83280);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts + 2 modules
var latest = __webpack_require__(70020);
;// CONCATENATED MODULE: ./src/utils/type-transform/BackupFormat/index.ts


// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(24784);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(5743);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-Compression.ts
var SECP256k1_Compression = __webpack_require__(58222);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(10329);
// EXTERNAL MODULE: ./src/utils/type-transform/Serialization.ts
var Serialization = __webpack_require__(33797);
// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(28504);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts











/***/ }),

/***/ 19439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ startWatch)
/* harmony export */ });
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);

function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: _flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        },
        beforeShadowRootInit: {
            mode: _flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        }
    }).startWatch({
        subtree: true,
        childList: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    return watcher;
}


/***/ }),

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Web3Context)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35313);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93975);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37186);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47413);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25830);







const Web3Provider = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__/* .createExternalProvider */ .z)();
const Web3Context = {
    provider: {
        getCurrentValue: ()=>Web3Provider
        ,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_0__.noop
    },
    allowTestnet: {
        getCurrentValue: ()=>_utils__WEBPACK_IMPORTED_MODULE_4__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet
        ,
        subscribe: ()=>lodash_es__WEBPACK_IMPORTED_MODULE_0__.noop
    },
    chainId: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentChainIdSettings */ .wU),
    account: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentAccountSettings */ .aK),
    balance: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentBalanceSettings */ .NH),
    gasPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentGasPriceSettings */ .rP),
    blockNumber: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentBlockNumberSettings */ .gi),
    nonce: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNonceSettings */ .U8),
    etherPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentEtherPriceSettings */ .cK),
    wallets: createSubscriptionFromAsync(getWallets, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
    providerType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1),
    networkType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX),
    erc20Tokens: createSubscriptionFromAsync(getERC20Tokens, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    erc20TokensCount: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20TokensCount */ .V.getERC20TokensCount, 0, _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    getERC20TokensPaged,
    portfolioProvider: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentPortfolioDataProviderSettings */ .a4),
    getAssetsList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getAssetsList */ .V.getAssetsList,
    getAssetsListNFT: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getAssetsListNFT */ .V.getAssetsListNFT,
    getERC721TokensPaged,
    fetchERC20TokensFromTokenLists: _extension_service__WEBPACK_IMPORTED_MODULE_6__/* .default.Ethereum.fetchERC20TokensFromTokenLists */ .ZP.Ethereum.fetchERC20TokensFromTokenLists,
    getTransactionList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getTransactionList */ .V.getTransactionList,
    createMnemonicWords: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.createMnemonicWords */ .V.createMnemonicWords
};
async function getWallets() {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getWallets */ .V.getWallets();
    return raw.map((record)=>({
            ...(0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.pick)(record, [
                'address',
                'name',
                'erc1155_token_whitelist',
                'erc1155_token_blacklist',
                'erc20_token_whitelist',
                'erc20_token_blacklist',
                'erc721_token_whitelist',
                'erc721_token_blacklist', 
            ]),
            hasPrivateKey: Boolean(record._private_key_ || record.mnemonic.length)
        })
    );
}
async function getERC20Tokens() {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20Tokens */ .V.getERC20Tokens();
    return raw.map((x)=>({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Drc.ERC20,
            ...x
        })
    );
}
async function getERC20TokensPaged(index, count, query) {
    const raw = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20TokensPaged */ .V.getERC20TokensPaged(index, count, query);
    return raw.map((x)=>({
            type: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Drc.ERC20,
            ...x
        })
    );
}
async function getERC721TokensPaged(index, count, query) {
    return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC721TokensPaged */ .V.getERC721TokensPaged(index, count, query);
}
// utils
function createSubscriptionFromSettings(settings) {
    const { trigger , subscribe  } = getEventTarget();
    settings.readyPromise.finally(trigger);
    return {
        getCurrentValue: ()=>settings.value
        ,
        subscribe: (f)=>{
            const a = subscribe(f);
            const b = settings.addListener(()=>trigger()
            );
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    let state = defaultValue;
    const { subscribe , trigger  } = getEventTarget();
    f().then((v)=>state = v
    ).finally(trigger);
    return {
        getCurrentValue: ()=>state
        ,
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                state = await f();
                sub();
            });
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all settings to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 600);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}


/***/ })

}]);