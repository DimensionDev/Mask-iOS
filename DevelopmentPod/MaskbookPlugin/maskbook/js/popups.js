/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 60417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ HashRouter),
/* harmony export */   "lr": () => (/* binding */ useSearchParams),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* unused harmony exports BrowserRouter, NavLink, createSearchParams, unstable_HistoryRouter, useLinkClickHandler */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86380);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18271);
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"],
      _excluded2 = (/* unused pure expression or super */ null && (["aria-current", "caseSensitive", "className", "end", "style", "to", "children"]));

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} ////////////////////////////////////////////////////////////////////////////////
// COMPONENTS
////////////////////////////////////////////////////////////////////////////////

/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = useRef();

  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  if (historyRef.current == null) {
    historyRef.current = (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createHashHistory */ .q_)({
      window
    });
  }

  let history = historyRef.current;
  let [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    action: history.action,
    location: history.location
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => history.listen(setState), [history]);
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */
function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (false) {}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

/**
 * The public API for rendering a history-aware <a>.
 */
const Link = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useHref */ .oQ)(to);
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", _extends({}, rest, {
      href: href,
      onClick: handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (false) {}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
const NavLink = /*#__PURE__*/(/* unused pure expression or super */ null && (forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let location = useLocation();
  let path = useResolvedPath(to);
  let locationPathname = location.pathname;
  let toPathname = path.pathname;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive
  }) : styleProp;
  return /*#__PURE__*/createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive
  }) : children);
})));

if (false) {} ////////////////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////////////////

/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPath */ .WU)(to);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(event => {
    if (event.button === 0 && ( // Ignore everything but left clicks
    !target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here.

      let replace = !!replaceProp || (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(location) === (0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(path);
      navigate(to, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
   false ? 0 : void 0;
  let defaultSearchParamsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(createSearchParams(defaultInit));
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();
  let searchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    let searchParams = createSearchParams(location.search);

    for (let key of defaultSearchParamsRef.current.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParamsRef.current.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }

    return searchParams;
  }, [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)();
  let setSearchParams = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nextInit, navigateOptions) => {
    navigate("?" + createSearchParams(nextInit), navigateOptions);
  }, [navigate]);
  return [searchParams, setSearchParams];
}

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 73742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M1": () => (/* binding */ pasteText),
/* harmony export */   "Mx": () => (/* binding */ pasteImage),
/* harmony export */   "X2": () => (/* binding */ pasteInstagram),
/* harmony export */   "ed": () => (/* binding */ hookInputUploadOnce),
/* harmony export */   "iJ": () => (/* binding */ inputText),
/* harmony export */   "ju": () => (/* binding */ injectedPhantomProvider),
/* harmony export */   "pb": () => (/* binding */ injectedCoin98SolanaProvider),
/* harmony export */   "yR": () => (/* binding */ injectedSolflareProvider)
/* harmony export */ });
/* unused harmony exports injectedCoin98EVMProvider, injectedMetaMaskProvider, injectedMathWalletProvider, injectedWalletLinkProvider */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43906);
/* harmony import */ var _Coin98__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45169);
/* harmony import */ var _Phantom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34240);
/* harmony import */ var _Solflare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14732);
/* harmony import */ var _MetaMask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24142);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28383);
/* harmony import */ var _MathWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42362);
/* harmony import */ var _WalletLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36859);








const injectedCoin98EVMProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.EVM */ .E.EVM);
const injectedCoin98SolanaProvider = new _Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98Provider */ .v(_Coin98__WEBPACK_IMPORTED_MODULE_1__/* .Coin98ProviderType.Solana */ .E.Solana);
const injectedPhantomProvider = new _Phantom__WEBPACK_IMPORTED_MODULE_2__/* .PhantomProvider */ .p();
const injectedSolflareProvider = new _Solflare__WEBPACK_IMPORTED_MODULE_3__/* .SolflareProvider */ .B();
const injectedMetaMaskProvider = new _MetaMask__WEBPACK_IMPORTED_MODULE_4__/* .MetaMaskProvider */ .Y();
const injectedMathWalletProvider = new _MathWallet__WEBPACK_IMPORTED_MODULE_6__/* .MathWalletProvider */ .W();
const injectedWalletLinkProvider = new _WalletLink__WEBPACK_IMPORTED_MODULE_7__/* .WalletLinkProvider */ .J();
function pasteText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('paste', text);
}
function pasteImage(image) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('instagramUpload', url);
}
function inputText(text) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .sendEvent */ .qP)('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .rejectPromise */ .Eu)(...r[1]);
        case 'web3BridgeEmitEvent':
            const [pathname, eventName, data] = r[1];
            const provider = [
                injectedCoin98EVMProvider,
                injectedCoin98SolanaProvider,
                injectedPhantomProvider,
                injectedMetaMaskProvider,
                injectedMathWalletProvider,
                injectedWalletLinkProvider, 
            ].find((x)=>x.pathname === pathname
            );
            provider?.emit(eventName, data);
            return;
        case 'web3BridgeBindEvent':
        case 'web3BridgeSendRequest':
        case 'web3BridgeExecute':
        case 'web3UntilBridgeOnline':
        case 'web3BridgePrimitiveAccess':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 43906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nu": () => (/* binding */ encodeEvent),
/* harmony export */   "OV": () => (/* binding */ CustomEventId),
/* harmony export */   "Vu": () => (/* binding */ decodeEvent)
/* harmony export */ });
const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';
const { parse , stringify  } = JSON;
const { isArray  } = Array;
function encodeEvent(key, args) {
    return stringify([
        key,
        args
    ]);
}
function decodeEvent(data) {
    const result = parse(data);
    // Do not throw new Error cause it requires a global lookup.
    // eslint-disable-next-line
    if (!isEventItemBeforeSerialization(result)) throw null;
    return result;
}
function isEventItemBeforeSerialization(data) {
    if (!isArray(data)) return false;
    if (data.length !== 2) return false;
    if (typeof data[0] !== 'string') return false;
    if (!isArray(data[1])) return false;
    return true;
}


/***/ }),

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

/***/ 61937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _download__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "r": () => (/* reexport safe */ _download__WEBPACK_IMPORTED_MODULE_0__.r)
/* harmony export */ });
/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42886);



/***/ }),

/***/ 94670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "rs": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29130);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39820);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25683);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61937);






/***/ }),

/***/ 75068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PageTitleContext)
/* harmony export */ });
/* unused harmony export PageTitleContextDefault */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

const PageTitleContextDefault = {
    title: '',
    setTitle: ()=>{}
};
const PageTitleContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(PageTitleContextDefault);


/***/ }),

/***/ 8701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PopupContext)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/**
 * Warning: Don't change this context.
 * This will be removed
 */ 

function usePopupContext() {
    const [signed, setSigned] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        signed,
        setSigned
    };
}
const PopupContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__/* .createContainer */ .f)(usePopupContext);


/***/ }),

/***/ 41933:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-dashboard.ts
var entry_dashboard = __webpack_require__(69014);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts + 35 modules
var host = __webpack_require__(22180);
// EXTERNAL MODULE: ./src/setup.ui.ts
var setup_ui = __webpack_require__(63184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.3.0/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(60417);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/utils/theme/useClassicMaskFullPageTheme.ts
var useClassicMaskFullPageTheme = __webpack_require__(1557);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ../encryption/src/index.ts
var encryption_src = __webpack_require__(66525);
;// CONCATENATED MODULE: ./src/social-network-adaptor/browser-action/index.ts




const base = {
    encryptionNetwork: encryption_src/* SocialNetworkEnum.Unknown */.Gq.Unknown,
    networkIdentifier: src/* EnhanceableSite.Localhost */.Jk.Localhost,
    declarativePermissions: {
        origins: []
    },
    shouldActivate (location) {
        return (0,umd.isEnvironment)(umd.Environment.ManifestAction);
    }
};
const browser_action_define = {
    ...base,
    automation: {},
    collecting: {},
    configuration: {},
    customization: {},
    injection: {},
    utils: {
        createPostContext: null
    },
    async init (signal) {
        const state = {
            profiles: new umd.ValueRef([])
        };
        const activeTab = (await browser.tabs.query({
            active: true,
            currentWindow: true
        }) || [])[0];
        if (activeTab === undefined) return state;
        const location = new URL(activeTab.url || globalThis.location.href);
        for (const ui of social_network/* definedSocialNetworkUIs.values */.LB.values()){
            if (ui.shouldActivate(location) && ui.networkIdentifier !== src/* EnhanceableSite.Localhost */.Jk.Localhost) {
                const _ = (await ui.load()).default;
                if (signal.aborted) return state;
                // TODO: heck, this is not what we expected.
                this.networkIdentifier = ui.networkIdentifier;
                this.declarativePermissions = _.declarativePermissions;
                this.utils = _.utils;
                return _.init(signal);
            }
        }
        return state;
    }
};
(0,social_network/* defineSocialNetworkUI */.BE)({
    ...base,
    async load () {
        return {
            default: browser_action_define
        };
    }
});

// EXTERNAL MODULE: ./src/extension/popups/hook/usePopupContext.ts
var usePopupContext = __webpack_require__(8701);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(83300);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
;// CONCATENATED MODULE: ./src/extension/popups/components/PopupFrame/index.tsx




function GlobalCss() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalStyles/* default */.Z, {
        styles: {
            body: {
                minWidth: 350,
                overflowX: 'hidden',
                margin: '0 auto !important',
                maxWidth: '100%',
                WebkitFontSmoothing: 'subpixel-antialiased',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    });
}
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: '100%',
            minHeight: 560,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        }
    })
);
const PopupFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalCss, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                elevation: 0,
                style: {
                    height: '100vh',
                    overflowY: 'auto',
                    minHeight: 560,
                    borderRadius: 0
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.container,
                    children: props.children
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ./src/UIRoot.tsx + 1 modules
var UIRoot = __webpack_require__(4597);
// EXTERNAL MODULE: ./src/extension/popups/context.ts
var context = __webpack_require__(75068);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
;// CONCATENATED MODULE: ./src/extension/popups/UI.tsx














function usePopupTheme() {
    return (0,useClassicMaskFullPageTheme/* usePopupFullPageTheme */.O)((0,shared_base_ui_src/* useValueRef */.E)(settings/* languageSettings */.pQ));
}
const Wallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8672), __webpack_require__.e(1169)]).then(__webpack_require__.bind(__webpack_require__, 86941))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(8519)]).then(__webpack_require__.bind(__webpack_require__, 17184))
);
const SwapPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8672), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(2486), __webpack_require__.e(187), __webpack_require__.e(405), __webpack_require__.e(1546), __webpack_require__.e(2939), __webpack_require__.e(4428), __webpack_require__.e(4806), __webpack_require__.e(7217), __webpack_require__.e(3067), __webpack_require__.e(331)]).then(__webpack_require__.bind(__webpack_require__, 91097))
);
const RequestPermissionPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(6596)]).then(__webpack_require__.bind(__webpack_require__, 76596))
);
const PermissionAwareRedirect = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7300)]).then(__webpack_require__.bind(__webpack_require__, 57300))
);
const ThirdPartyRequestPermission = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5007).then(__webpack_require__.bind(__webpack_require__, 65822))
);
const PluginRender = (0,entry_dashboard/* createInjectHooksRenderer */.EK)(entry_dashboard/* useActivatedPluginsDashboard */.eE, (x)=>x.GlobalInjection
);
function Popups() {
    const [title, setTitle] = (0,react.useState)('');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(UIRoot/* MaskUIRoot */.Y, {
        useTheme: usePopupTheme,
        kind: "page",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* PopupSnackbarProvider */.jh, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(usePopupContext/* PopupContext.Provider */.t.Provider, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* PageTitleContext.Provider */.I.Provider, {
                    value: {
                        title,
                        setTitle
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router_dom/* HashRouter */.UT, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.Personas */.mZ.Personas + '/*',
                                        element: UI_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {}))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.Wallet */.mZ.Wallet + '/*',
                                        element: UI_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet, {}))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.Swap */.mZ.Swap,
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapPage, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.RequestPermission */.mZ.RequestPermission,
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPermissionPage, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.PermissionAwareRedirect */.mZ.PermissionAwareRedirect,
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirect, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: src/* PopupRoutes.ThirdPartyRequestPermission */.mZ.ThirdPartyRequestPermission,
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThirdPartyRequestPermission, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                                        path: "*",
                                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
                                            replace: true,
                                            to: src/* PopupRoutes.Personas */.mZ.Personas
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {})
                        ]
                    })
                })
            })
        })
    });
};
function UI_frame(x) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupFrame, {
        children: x
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/render.tsx






setup_ui/* status.then */.i.then(()=>(0,utils/* createNormalReactRoot */.jv)(/*#__PURE__*/ (0,jsx_runtime.jsx)(Popups, {}))
);
// TODO: Should only load plugins when the page is plugin-aware.
(0,entry_dashboard/* startPluginDashboard */.CB)((0,host/* createPluginHost */.R)(undefined, host/* createSharedContext */.y));


/***/ }),

/***/ 49959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS),
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72499);

const ZRX_BASE_URL = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .td.Ethereum]: 'https://api.0x.org',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .td.Binance]: 'https://bsc.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .td.Polygon]: 'https://polygon.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'https://arbitrum.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.xDai */ .td.xDai]: 'https://xdai.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Avalanche */ .td.Avalanche]: 'https://avalanche.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Celo */ .td.Celo]: 'https://celo.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fantom */ .td.Fantom]: 'https://fantom.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Aurora */ .td.Aurora]: 'https://aurora.api.0x.org/',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Boba */ .td.Boba]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Fuse */ .td.Fuse]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Metis */ .td.Metis]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Optimistic */ .td.Optimistic]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Harmony */ .td.Harmony]: '',
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Conflux */ .td.Conflux]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 69461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L4": () => (/* binding */ BALANCER_SOR_GAS_PRICE),
/* harmony export */   "qT": () => (/* binding */ BALANCER_SWAP_TYPE),
/* harmony export */   "r2": () => (/* binding */ BALANCER_MAX_NO_POOLS)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

// gasPrice is used by SOR as a factor to determine how many pools to swap against.
// i.e. higher cost means more costly to trade against lots of different pools.
// Can be changed in future using SOR.gasPrice = newPrice
const BALANCER_SOR_GAS_PRICE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())('1e11');
// This determines the max no of pools the SOR will use to swap.
const BALANCER_MAX_NO_POOLS = 4;
var BALANCER_SWAP_TYPE;
(function(BALANCER_SWAP_TYPE) {
    BALANCER_SWAP_TYPE["EXACT_IN"] = 'swapExactIn';
    BALANCER_SWAP_TYPE["EXACT_OUT"] = 'swapExactOut';
})(BALANCER_SWAP_TYPE || (BALANCER_SWAP_TYPE = {}));


/***/ }),

/***/ 33274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ DEFIKINGDOMS_CUSTOM_BASES),
/* harmony export */   "b": () => (/* binding */ DEFIKINGDOMS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const DEFIKINGDOMS_CUSTOM_BASES = {};
const DEFIKINGDOMS_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .JEWEL */ .aV
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ MDEX_CUSTOM_BASES),
/* harmony export */   "R": () => (/* binding */ MDEX_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const MDEX_CUSTOM_BASES = {};
const MDEX_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    )
};


/***/ }),

/***/ 50052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ OPENSWAP_CUSTOM_BASES),
/* harmony export */   "v": () => (/* binding */ OPENSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const OPENSWAP_CUSTOM_BASES = {};
const OPENSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .OPENX */ .Rb,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANCAKESWAP_CUSTOM_BASES = {};
const PANCAKESWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .UST */ .bi,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    )
};


/***/ }),

/***/ 96728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ PANGOLIN_CUSTOM_BASES),
/* harmony export */   "h": () => (/* binding */ PANGOLIN_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANGOLIN_CUSTOM_BASES = {};
const PANGOLIN_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .PNG */ .yI,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 7214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const QUICKSWAP_CUSTOM_BASES = {};
const QUICKSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .QUICK */ .xZ,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .ETHER */ .c0,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .maUSDC */ .J6
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    )
};


/***/ }),

/***/ 53331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SASHIMISWAP_CUSTOM_BASES = {};
const SASHIMISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .COMP */ .TP,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .MKR */ .Ti
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    )
};


/***/ }),

/***/ 85394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SUSHISWAP_CUSTOM_BASES = {};
const SUSHISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .RUNE */ .uj,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .NFTX */ .lK,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .STETH */ ._S
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BUSD */ .lz,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .BTCB */ .nB
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_.BSC]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.xDai */ .a_.xDai]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .CUSD */ .PX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .CEUR */ .Th
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Celo */ .a_.Celo]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .fUSDT */ .Hh,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Fantom */ .a_.Fantom]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 58864:
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
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67938);
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

/***/ 34103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ TRADERJOE_BASE_AGAINST_TOKENS),
/* harmony export */   "b": () => (/* binding */ TRADERJOE_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRADERJOE_CUSTOM_BASES = {};
const TRADERJOE_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAIe */ .Lq,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDTe */ ._c,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDCe */ .tB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTCe */ .MI
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Avalanche */ .a_.Avalanche]
    )
};


/***/ }),

/***/ 35675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ TRISOLARIS_CUSTOM_BASES),
/* harmony export */   "m": () => (/* binding */ TRISOLARIS_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const TRISOLARIS_CUSTOM_BASES = {};
const TRISOLARIS_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_.Matic]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 18627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ UNISWAP_CUSTOM_BASES),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "fI": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "jg": () => (/* binding */ DEFAULT_MULTICALL_GAS_LIMIT),
/* harmony export */   "s9": () => (/* binding */ MAX_HOP),
/* harmony export */   "u7": () => (/* binding */ UNISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72499);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74404);
/* harmony import */ var _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59800);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const UNISWAP_CUSTOM_BASES = {
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]: {
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet].address]: [
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]
        )
    },
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]: {
        [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic].address]: [
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX
        ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]
        )
    }
};
const UNISWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet]
    ),
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2_000_000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_1___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_0__.Percent('1');


/***/ }),

/***/ 18188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ VENOMSWAP_CUSTOM_BASES),
/* harmony export */   "j": () => (/* binding */ VENOMSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const VENOMSWAP_CUSTOM_BASES = {};
const VENOMSWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .VIPER */ .qN,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Harmony */ .a_.Harmony]
    )
};


/***/ }),

/***/ 82487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ WANNASWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "z": () => (/* binding */ WANNASWAP_CUSTOM_BASES)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74404);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72499);

/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const WANNASWAP_CUSTOM_BASES = {};
const WANNASWAP_BASE_AGAINST_TOKENS = {
    ..._masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE_ONLY */ .HL,
    [_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]: [
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WNATIVE */ .FX,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WANNA */ .lB,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .DAI */ .h1,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDC */ .gn,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .USDT */ .AA,
        _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_0__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Aurora */ .a_.Aurora]
    )
};


/***/ }),

/***/ 82192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "Du": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LB": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "ZZ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25513);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58248);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20940);






/***/ }),

/***/ 58248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync),
/* harmony export */   "loadSocialNetworkUIs": () => (/* binding */ loadSocialNetworkUIs)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27716);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5903);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44451);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20778);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1250);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22180);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20940);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93455);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46123);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77818);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66525);














const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {},
    collecting: {},
    customization: {},
    configuration: {},
    init: ()=>{
        throw new Error();
    },
    injection: {},
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_12__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
    shouldActivate: ()=>false
    ,
    utils: {
        createPostContext: null
    },
    notReadyForProduction: true,
    declarativePermissions: {
        origins: []
    }
};
let globalUIState = {};
async function activateSocialNetworkUIInner(ui_deferred) {
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    _masknet_shared__WEBPACK_IMPORTED_MODULE_11__/* .sharedUINetworkIdentifier.value */ .Xr.value = ui_deferred.networkIdentifier;
    if (ui.customization.sharedComponentOverwrite) {
        _masknet_shared__WEBPACK_IMPORTED_MODULE_11__/* .sharedUIComponentOverwrite.value */ .vU.value = ui.customization.sharedComponentOverwrite;
    }
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) {}
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    globalUIState = await ui.init(signal1);
    ui.customization.paletteMode?.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    ui.collecting.postsProvider?.start(signal1);
    startPostListener();
    ui.collecting.currentVisitingIdentityProvider?.start(signal1);
    ui.injection.pageInspector?.(signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) {
        ui.injection.toolbox?.(signal1, 'wallet');
        ui.injection.toolbox?.(signal1, 'application');
    }
    ui.injection.newPostComposition?.start?.(signal1);
    ui.injection.searchResult?.(signal1);
    ui.injection.userBadge?.(signal1);
    ui.injection.profileTab?.(signal1);
    ui.injection.profileTabContent?.(signal1);
    ui.injection.userAvatar?.(signal1);
    ui.injection.profileAvatar?.(signal1);
    ui.injection.profileTip?.(signal1);
    ui.injection.enhancedProfileNFTAvatar?.(signal1);
    ui.injection.openNFTAvatar?.(signal1);
    ui.injection.postAndReplyNFTAvatar?.(signal1);
    ui.injection.avatarClipNFT?.(signal1);
    // Update user avatar
    ui.collecting.currentVisitingIdentityProvider?.recognized.addListener((ref)=>{
        if (!(ref.avatar && ref.identifier)) return;
        _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.updateProfileInfo */ .ZP.Identity.updateProfileInfo(ref.identifier, {
            avatarURL: ref.avatar,
            nickname: ref.nickname
        });
        const currentProfile = (0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentIdentifier */ .T)();
        if (currentProfile?.linkedPersona) {
            _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.createNewRelation */ .ZP.Identity.createNewRelation(ref.identifier, currentProfile.linkedPersona);
        }
    });
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_5__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        const empty = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.ValueRef(undefined);
        const lastRecognizedSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createSubscriptionFromValueRef */ ._H)(ui.collecting.identityProvider?.recognized || empty, signal);
        const currentVisitingSub = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createSubscriptionFromValueRef */ ._H)(ui.collecting.currentVisitingIdentityProvider?.recognized || empty, signal);
        return {
            ...(0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_7__/* .createSharedContext */ .y)(pluginID, signal),
            lastRecognizedProfile: lastRecognizedSub,
            currentVisitingProfile: currentVisitingSub
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for (const namespace of Object.keys(i18n)){
            const ns = i18n[namespace];
            for (const i18nKey of Object.keys(ns)){
                const pair = i18n[namespace][i18nKey];
                for (const language of Object.keys(pair)){
                    const value = pair[language];
                    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .i18NextInstance.addResource */ .BV.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        if (!provider) return;
        provider.start(signal1);
        provider.recognized.addListener((newValue, oldValue)=>{
            if (document.visibilityState === 'hidden') return;
            if (newValue.identifier === oldValue.identifier) return;
            if (!newValue.identifier) return;
            _utils__WEBPACK_IMPORTED_MODULE_9__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier);
        });
        if (provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal1.aborted) return;
                if (!id.identifier) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.resolveUnknownLegacyIdentity */ .ZP.Identity.resolveUnknownLegacyIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        const posts = ui.collecting.postsProvider?.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            ui.injection.enhancedPostRenderer?.(postSignal, value);
            ui.injection.postInspector?.(postSignal, value);
            ui.injection.postActions?.(postSignal, value);
            ui.injection.commentComposition?.compositionBox(postSignal, value);
            ui.injection.commentComposition?.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_10__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                started = true;
                ui.injection.setupWizard?.(signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier.from */ .ob.from(persona).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUIs() {
    const defines = [
        ..._define__WEBPACK_IMPORTED_MODULE_8__/* .definedSocialNetworkUIs.values */ .LB.values()
    ].map(async (x)=>x.load()
    );
    const uis = (await Promise.all(defines)).map((x)=>x.default
    );
    if (!defines) throw new Error('SNS adaptor load failed');
    for (const ui of uis){
        definedSocialNetworkUIsResolved.set(ui.networkIdentifier, ui);
    }
    return uis;
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_8__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) {}
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 4004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3808);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76618);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);




function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = identifier.userId || nickname || '';
    const [first, last] = name.split(' ');
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .generateContactAvatarColor */ .eP)(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    });
}


/***/ }),

/***/ 54409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
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
    return (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .DisableShadowRootContext.Provider */ .AZ.Provider, {
            value: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .ErrorBoundary */ .SV, {
                children: jsx
            })
        })
    }));
}


/***/ }),

/***/ 49723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);

function useLocationChange(handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}


/***/ }),

/***/ 97926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useI18N),
/* harmony export */   "Z": () => (/* binding */ useLanguage)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43133);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60718);


/**
 * Enhanced version of useTranslation
 * @param opt Options
 */ function useI18N(opt) {
    return (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)('mask', opt);
}
function useLanguage() {
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    const lang = i18n.language;
    if (lang in _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .SupportedLanguages */ .iu) return lang;
    return _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__/* .SupportedLanguages.enUS */ .iu.enUS;
}


/***/ }),

/***/ 93455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ Avatar/* Avatar */.q),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "aW": () => (/* reexport */ collectNodeText/* collectNodeText */.a),
  "_r": () => (/* reexport */ collectNodeText/* collectTwitterEmoji */._),
  "jv": () => (/* reexport */ createNormalReactRoot/* createNormalReactRoot */.j),
  "ou": () => (/* reexport */ renderInShadowRoot/* createReactRootShadowed */.o),
  "GR": () => (/* reexport */ utils/* downloadUrl */.GR),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "sC": () => (/* reexport */ type_transform/* hasPayloadLike */.s),
  "bF": () => (/* reexport */ utils/* pasteImageToActiveElements */.bF),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "fy": () => (/* reexport */ watcher/* startWatch */.f),
  "ft": () => (/* reexport */ dom/* untilElementAvailable */.f),
  "JN": () => (/* reexport */ theme/* useClassicMaskSNSPluginTheme */.JN),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "SL": () => (/* reexport */ useLocationChange/* useLocationChange */.S),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "eD": () => (/* reexport */ useQueryNavigatorPermission),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme, asyncIteratorToArray, extraPermissions, fromRGB, getForegroundColor, isDark, isDarkTheme, nthChild, regexMatch, selectElementContents, shade, toRGB, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useSettingsSwitcher, useSuspense, useThemeLanguage

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(4004);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(55802);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(45908);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(9178);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(78831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/hasIn.js + 2 modules
var hasIn = __webpack_require__(61451);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = [
    'query',
    'request',
    'revoke'
];
function checkPermissionApiUsability(type) {
    const r = {};
    for (const v of q){
        r[v] = (0,hasIn/* default */.Z)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react.useState)('prompt');
    (0,react.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || shared/* Flags.has_no_WebRTC */.vU.has_no_WebRTC) return;
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
        return ()=>permissionStatus?.removeEventListener('change', handleChange)
        ;
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(70236);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(49723);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts








// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts


// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(94201);
// EXTERNAL MODULE: ./src/utils/type-transform/index.ts
var type_transform = __webpack_require__(44887);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(21158);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(58379);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(97926);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(95175);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(54409);
// EXTERNAL MODULE: ./src/utils/theme/index.ts
var theme = __webpack_require__(17784);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(47675);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(93995);
// EXTERNAL MODULE: ./src/utils/collectNodeText.ts
var collectNodeText = __webpack_require__(25986);
;// CONCATENATED MODULE: ./src/utils/index.ts


















/***/ }),

/***/ 95175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94670);



/***/ }),

/***/ 16660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal),
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4597);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17784);




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
const setupShadowRootPortal = ()=>{
    const shadow = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .setupPortalShadowRoot */ .d_)({
        mode: 'closed'
    });
    createReactRootShadowed(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_2__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_3__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        });
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 1557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useClassicMaskFullPageTheme),
/* harmony export */   "O": () => (/* binding */ usePopupFullPageTheme)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25105);
/* harmony import */ var _MaskTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9956);
/* harmony import */ var _useThemeLanguage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65095);




/**
 * @deprecated Should migrate to \@masknet/theme
 */ function useClassicMaskFullPageTheme(userPreference, language) {
    const systemPreference = 'matchMedia' in globalThis ? matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : 'light';
    const finalPalette = userPreference === _masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .Appearance["default"] */ .um["default"] ? systemPreference : userPreference;
    const baseTheme = finalPalette === 'dark' ? _MaskTheme__WEBPACK_IMPORTED_MODULE_1__/* .MaskDarkTheme */ .H : _MaskTheme__WEBPACK_IMPORTED_MODULE_1__/* .MaskLightTheme */ .C;
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(baseTheme, (0,_useThemeLanguage__WEBPACK_IMPORTED_MODULE_2__/* .useThemeLanguage */ .e)(language));
}
/**
 * @deprecated Should migrate to \@masknet/theme
 */ function usePopupFullPageTheme(language) {
    return useClassicMaskFullPageTheme(_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .Appearance.light */ .um.light, language);
}


/***/ }),

/***/ 47675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements)
/* harmony export */ });
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73742);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32139);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 


/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}
/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    (0,_masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__/* .pasteImage */ .Mx)(new Uint8Array(await image.arrayBuffer()));
}
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}
function regexMatch(input, pattern, index = 1) {
    const r = input.match(pattern);
    if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
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
  "UY": () => (/* reexport */ useChainIdSupport/* useChainIdSupport */.U),
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
  "od": () => (/* reexport */ useTokenSchema/* useTokenSchema */.o),
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
  "Yg": () => (/* reexport */ useTrustedFungibleTokens/* useTrustedFungibleTokens */.Y),
  "KP": () => (/* reexport */ useTrustedNonFungibleTokens/* useTrustedNonFungibleTokens */.K),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "Ud": () => (/* reexport */ useWalletPrimary/* useWalletPrimary */.U),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ useWeb3/* useWeb3 */.$),
  "Tv": () => (/* reexport */ useWeb3Connection/* useWeb3Connection */.T),
  "hh": () => (/* reexport */ useWeb3Hub/* useWeb3Hub */.h),
  "xo": () => (/* reexport */ useWeb3Provider/* useWeb3Provider */.x),
  "dM": () => (/* reexport */ useWeb3State/* useWeb3State */.d),
  "$d": () => (/* reexport */ useWeb3UI/* useWeb3UI */.$)
});

// UNUSED EXPORTS: PluginWeb3ContextProvider, useAccountName, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAddressBook, useBeat, useBeatRetry, useBlockedNonFungibleTokens, useChainDescriptor, useCurrencyType, useCurrentWeb3NetworkAccount, useCurrentWeb3NetworkChainId, useCurrentWeb3NetworkNetworkType, useCurrentWeb3NetworkProviderType, useDefaultChainId, useDefaultNetworkType, useFungibleAsset, useFungibleAssetSourceType, useGasOptionType, useNonFungibleAssetSourceType, useNonFungibleTokenPrice, useNonFungibleTokens, useNonFungibleTokensBalance, useNonFungibleTokensFromTokenList, useProviderDescriptors, useProviderReady, useSingleBlockBeatRetry, useSocialAddressList, useZeroAddress

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

/***/ 37500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ createPluginMessage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = createPluginMessage(PLUGIN_ID)
 */ function createPluginMessage(pluginID, serializer) {
    const domain = '@plugin/' + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.WebExtensionMessage({
        domain
    });
    const events = messageCenter.events;
    if (serializer) messageCenter.serialization = serializer;
    cache.set(domain, events);
    return events;
}
const cache = new Map();


/***/ }),

/***/ 73179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ createPluginRPCGenerator),
/* harmony export */   "V": () => (/* binding */ createPluginRPC)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17889);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);



const log = {
    requestReplay: true,
    type: 'pretty'
};
function createPluginRPC(key, impl, message, /** Please set this to true if your implementation is a Proxy. */ exoticImplementation) {
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    return (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)((exoticImplementation ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementationExotic */ .kO : _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    return (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}


/***/ }),

/***/ 55437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dv": () => (/* binding */ FALSE),
/* harmony export */   "LZ": () => (/* binding */ EMPTY_ARRAY),
/* harmony export */   "QV": () => (/* binding */ NULL),
/* harmony export */   "i_": () => (/* binding */ UNDEFINED)
/* harmony export */ });
/* unused harmony exports ZERO, EMPTY_STRING, EMPTY_OBJECT, TRUE */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

const ZERO = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(0);
const UNDEFINED = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(undefined);
const EMPTY_STRING = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)([]);
const EMPTY_OBJECT = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)({});
const TRUE = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(true);
const FALSE = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createConstantSubscription */ .qY)(null);


/***/ }),

/***/ 29075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useChainIdSupport)
/* harmony export */ });
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45087);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);


function useChainIdSupport(pluginID, expectedChainId, feature) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .x)(pluginID, expectedChainId);
    const { Others  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return Others?.chainResolver.isSupport?.(chainId, feature) ?? false;
}


/***/ }),

/***/ 68244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useTokenSchema)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58500);
/* harmony import */ var _entry_web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50719);


function useTokenSchema(pluginID, address, options) {
    const connection = (0,_entry_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Connection */ .Tv)(pluginID, options);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        if (!address) return;
        return connection?.getTokenSchema?.(address, options);
    }, [
        address
    ]);
}


/***/ }),

/***/ 10668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14257);
/* harmony import */ var _utils_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55437);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72128);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12368);





function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)(pluginID);
    const { Others , Wallet  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_4__/* .useWeb3State */ .d)(pluginID);
    const wallets = (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(Wallet?.wallets ?? _utils_subscription__WEBPACK_IMPORTED_MODULE_2__/* .EMPTY_ARRAY */ .LZ);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return account ? wallets.find((x)=>Others?.isSameAddress?.(x.address, account)
        ) ?? null : null;
    }, [
        account,
        wallets?.map((x)=>x.address.toLowerCase()
        ).join()
    ]);
}


/***/ }),

/***/ 50360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useWalletPrimary)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14257);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12368);
/* harmony import */ var _utils_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55437);



function useWalletPrimary(pluginID) {
    const { Wallet  } = (0,_useWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .d)(pluginID);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(Wallet?.walletPrimary ?? _utils_subscription__WEBPACK_IMPORTED_MODULE_2__/* .NULL */ .QV);
}


/***/ }),

/***/ 68033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24003);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43672);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu,
    name: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_NAME */ .EW
    },
    description: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_DESCRIPTION */ .PP
    },
    publisher: {
        name: {
            fallback: 'Mask Network'
        },
        link: 'https://mask.io/'
    },
    enableRequirement: {
        architecture: {
            app: true,
            web: true
        },
        networks: {
            type: 'opt-out',
            networks: {}
        },
        target: 'stable'
    },
    i18n: _locales_languages__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .M
};


/***/ }),

/***/ 58044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/CrashUI.tsx + 2 modules
var CrashUI = __webpack_require__(53747);
// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/context.ts
var context = __webpack_require__(49831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        });
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/index.ts




;// CONCATENATED MODULE: ../shared-base-ui/src/components/index.ts



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

/***/ 13339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
/* unused harmony export __DEBUG__ONLY__enableCryptoKeySerialization */
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14084);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78874);
/* harmony import */ var _Identifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57041);
/* harmony import */ var _response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16761);
/* harmony import */ var _readableStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40025);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5294);
/// <reference path="./typeson.d.ts" />



// @ts-ignore





const pendingRegister = new Set();
let typeson;
function setup() {
    const { default: BigNumber  } = bignumber_js__WEBPACK_IMPORTED_MODULE_2__;
    // https://github.com/dfahlander/typeson-registry/issues/27
    typeson = new typeson__WEBPACK_IMPORTED_MODULE_0__/* .Typeson */ .oy({
        cyclic: false
    });
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .builtin */ .j0);
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .specialNumbers */ .so);
    typeson.register([
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .blob */ .Ik,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .file */ .tP,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .filelist */ .Jj,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .imagebitmap */ .xA
    ]);
    typeson.register({
        None: [
            (x)=>x === ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
            ,
            ()=>'None'
            ,
            ()=>ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
        ]
    });
    addClass('Ok', ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
    addClass('Err', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
    addClass('Some', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD);
    addClass('BigNumber', BigNumber);
    typeson.register({
        Identifier: [
            (x)=>x instanceof _Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier */ .xb
            ,
            (x)=>x.toText()
            ,
            (x)=>_Identifier__WEBPACK_IMPORTED_MODULE_4__/* .Identifier.from */ .xb.from(x).unwrap()
        ],
        ReadableStream: [
            ..._readableStream__WEBPACK_IMPORTED_MODULE_6__/* .readableStreamRegedit */ .t5
        ],
        Response: [
            ..._response__WEBPACK_IMPORTED_MODULE_5__/* .responseRegedit */ .R7
        ],
        Request: [
            ..._request__WEBPACK_IMPORTED_MODULE_7__/* .requestRegedit */ .qf
        ]
    });
    for (const a of pendingRegister)a();
}
const serializer = {
    serialization (from) {
        if (!typeson) setup();
        return typeson.encapsulate(from);
    },
    // cspell:disable-next-line
    deserialization (to) {
        if (!typeson) setup();
        return typeson.revive(to);
    }
};
/** THIS MUST NOT BE USED OUTSIDE OF A DEBUGGER CONTEXT */ function __DEBUG__ONLY__enableCryptoKeySerialization() {
    if (!typeson) setup();
    typeson.register(cryptokey);
}
function registerSerializableClass(name, a, b, c) {
    if (typeson) {
        if (b) typeson.register({
            [name]: [
                a,
                b,
                c
            ]
        });
        else addClass(name, a);
    } else {
        if (b) pendingRegister.add(()=>typeson.register({
                [name]: [
                    a,
                    b,
                    c
                ]
            })
        );
        else pendingRegister.add(()=>addClass(name, a)
        );
    }
}
function addClass(name, constructor) {
    Object.defineProperty(constructor, 'name', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: name
    });
    typeson.register({
        [name]: [
            (x)=>x instanceof constructor
            ,
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x1)=>{
                const y = Object.assign({}, x1);
                Object.getOwnPropertySymbols(y).forEach((x)=>Reflect.deleteProperty(y, x)
                );
                return typeson.encapsulate(y);
            },
            // eslint-disable-next-line @typescript-eslint/no-loop-func
            (x)=>{
                const y = typeson.revive(x);
                Object.setPrototypeOf(y, constructor.prototype);
                return y;
            }, 
        ]
    });
}


/***/ }),

/***/ 68043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getLocalImplementation),
/* harmony export */   "k": () => (/* binding */ getLocalImplementationExotic)
/* harmony export */ });
// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param isBackground If the current environment is background.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {};
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for (const key of Object.keys(localImpl)){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for (const key1 of Object.keys(result)){
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    RPCCache.set(ref, await impl());
    return new Proxy({}, {
        get (_, key) {
            if (key === 'then') return;
            // @ts-ignore
            return RPCCache.get(ref)?.[key];
        }
    });
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
/* harmony export */   "OZ": () => (/* binding */ SOCIAL_MEDIA_NAME),
/* harmony export */   "ge": () => (/* binding */ SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID),
/* harmony export */   "hA": () => (/* binding */ MAX_WALLET_LIMIT),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl),
/* harmony export */   "q_": () => (/* binding */ SOCIAL_MEDIA_ROUND_ICON_MAPPING)
/* harmony export */ });
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
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_0__._X),
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
/* harmony export */   "H9": () => (/* binding */ useMenu),
/* harmony export */   "_X": () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* unused harmony export useMenuContext */
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
  "fq": () => (/* reexport */ ChainIcon/* ChainIcon */.f),
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
  "hA": () => (/* reexport */ constants/* MAX_WALLET_LIMIT */.hA),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "uw": () => (/* reexport */ LoadRetry/* RetryHint */.u),
  "il": () => (/* reexport */ ReversedAddress/* ReversedAddress */.i),
  "I4": () => (/* reexport */ constants/* SOCIAL_MEDIA_ICON_MAPPING */.I4),
  "OZ": () => (/* reexport */ constants/* SOCIAL_MEDIA_NAME */.OZ),
  "q_": () => (/* reexport */ constants/* SOCIAL_MEDIA_ROUND_ICON_MAPPING */.q_),
  "ge": () => (/* reexport */ constants/* SOCIAL_MEDIA_SUPPORTING_NEXT_DOT_ID */.ge),
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
  "_X": () => (/* reexport */ hooks/* useMenuConfig */._X),
  "z": () => (/* reexport */ hooks/* useOpenShareTxDialog */.z),
  "yQ": () => (/* reexport */ contexts/* usePickToken */.yQ),
  "B_": () => (/* reexport */ locales/* useSharedI18N */.B),
  "Lm": () => (/* reexport */ contexts/* useShowConfirm */.Lm),
  "iD": () => (/* reexport */ hooks/* useSnackbarCallback */.iD)
});

// UNUSED EXPORTS: BaseSharedUIProvider, CommonUIProvider, ConfirmProvider, EvmSharedUIProvider, SharedTrans, TokenIconUI, TokenPickerProvider, createUITaskManager, languages, useBaseUIRuntime, useImageFailOver, useMenuContext, usePopupSnackbarCallback

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

/***/ 15938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* binding */ usePopupCustomSnackbar),
/* harmony export */   "jh": () => (/* binding */ PopupSnackbarProvider)
/* harmony export */ });
/* unused harmony export PopupSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31490);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21784);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27466);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84432);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()(()=>({
        container: {
            width: '100%!important',
            maxWidth: '100%!important',
            top: '0!important',
            [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].wrapper */ .Z.wrapper}`]: {
                padding: '0 !important'
            }
        },
        content: {
            width: '100vw',
            padding: '8px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: '18px'
        },
        title: {
            fontSize: 14,
            lineHeight: '18px'
        },
        success: {
            background: 'rgba(61, 194, 51, 0.5)',
            color: '#ffffff'
        },
        error: {
            background: 'rgba(255, 53, 69, 0.5)',
            color: '#ffffff'
        },
        default: {},
        warning: {},
        info: {}
    })
);
const PopupSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ ...rest })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 1,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        classes: {
            containerRoot: classes.container,
            variantSuccess: classes.success,
            variantError: classes.error
        },
        ...rest
    });
});
const PopupSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarContent */ .No, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.content, classes[props.variant]),
        ref: ref,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: classes.title,
            children: props.title
        })
    }, props.id);
});
function usePopupCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_2__/* .useSnackbar */ .Ds)();
    const showSnackbar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text, options = {
        variant: 'success',
        autoHideDuration: 2000
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PopupSnackbarContent, {
                    id: key,
                    title: title,
                    variant: variant
                });
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

/***/ 18822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D9": () => (/* reexport safe */ _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__.D9),
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "jh": () => (/* reexport safe */ _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__.jh),
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82737);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27466);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(48941);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21784);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(27692);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37341);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80922);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31363);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95789);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78258);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84432);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88762);
/* harmony import */ var _PopupSnackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15938);















const useStyles = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()((theme, { offsetY  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
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
            transform: typeof offsetY !== 'undefined' ? `translateY(${offsetY}px)` : 'none',
            color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textLight */ .ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.greenMain */ .ZN.greenMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.redMain */ .ZN.redMain,
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: _CSSVariables__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
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
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_10__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_UIHelper__WEBPACK_IMPORTED_MODULE_5__/* .useStylesExtends */ .Bc)(useStyles({
        offsetY: props.offsetY
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarContent */ .No, {
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
    });
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ offsetY , ...rest })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles({
        offsetY
    });
    const onDismiss = (key)=>()=>{
            ref.current?.closeSnackbar(key);
        }
    ;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_3__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                id: key,
                variant: rest.variant ?? 'default',
                title: title,
                offsetY: offsetY
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
        ...rest
    });
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
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomSnackbarContent, {
                    variant: variant ?? 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                });
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
/* harmony export */   "jh": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_3__.jh),
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

/***/ 87883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.AZ),
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
/* harmony export */   "AZ": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.AZ),
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
/* harmony export */   "jh": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.jh),
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

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.$q),
/* harmony export */   "BD": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.BD),
/* harmony export */   "Ck": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_8__.C),
/* harmony export */   "DC": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "FG": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.FG),
/* harmony export */   "FH": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.FH),
/* harmony export */   "FI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.FI),
/* harmony export */   "Fr": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.Fr),
/* harmony export */   "GN": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.GN),
/* harmony export */   "J": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.T1),
/* harmony export */   "KH": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.KH),
/* harmony export */   "Km": () => (/* reexport safe */ _function__WEBPACK_IMPORTED_MODULE_8__.K),
/* harmony export */   "LI": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.LI),
/* harmony export */   "P$": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.P$),
/* harmony export */   "PW": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.PW),
/* harmony export */   "Qv": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Qv),
/* harmony export */   "RV": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.RV),
/* harmony export */   "SI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.SI),
/* harmony export */   "SL": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.SL),
/* harmony export */   "T1": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.T1),
/* harmony export */   "Vk": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Vk),
/* harmony export */   "Wr": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "Xg": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.Xg),
/* harmony export */   "Xi": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.Xi),
/* harmony export */   "az": () => (/* reexport safe */ _balance__WEBPACK_IMPORTED_MODULE_1__.a),
/* harmony export */   "gT": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.gT),
/* harmony export */   "h9": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.h9),
/* harmony export */   "iI": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.iI),
/* harmony export */   "iu": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.iu),
/* harmony export */   "mn": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_4__.mn),
/* harmony export */   "pu": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.pu),
/* harmony export */   "rm": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.rm),
/* harmony export */   "ry": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.ry),
/* harmony export */   "sz": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_7__.sz),
/* harmony export */   "ti": () => (/* reexport safe */ _resolver__WEBPACK_IMPORTED_MODULE_6__.ti),
/* harmony export */   "ux": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.ux),
/* harmony export */   "vs": () => (/* reexport safe */ _constant__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "w5": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.w5),
/* harmony export */   "wA": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.wA),
/* harmony export */   "xE": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.xE),
/* harmony export */   "xG": () => (/* reexport safe */ _currency__WEBPACK_IMPORTED_MODULE_3__.x),
/* harmony export */   "xP": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_5__.xP)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77362);
/* harmony import */ var _balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64469);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78182);
/* harmony import */ var _currency__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73403);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75387);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13763);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31257);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60668);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40485);












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

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


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
/******/ 	/* webpack/runtime/chunk preload function */
/******/ 	(() => {
/******/ 		__webpack_require__.H = {};
/******/ 		__webpack_require__.G = (chunkId) => {
/******/ 			Object.keys(__webpack_require__.H).map((key) => {
/******/ 				__webpack_require__.H[key](chunkId);
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
/******/ 		__webpack_require__.j = 964;
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
/******/ 			964: 0,
/******/ 			2372: 0
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
/******/ 		__webpack_require__.H.j = (chunkId) => {
/******/ 			if((!__webpack_require__.o(installedChunks, chunkId) || installedChunks[chunkId] === undefined) && true) {
/******/ 				installedChunks[chunkId] = null;
/******/ 				var link = document.createElement('link');
/******/ 		
/******/ 				link.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					link.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				link.rel = "preload";
/******/ 				link.as = "script";
/******/ 				link.href = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 				document.head.appendChild(link);
/******/ 			}
/******/ 		};
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
/******/ 			"1169": [
/******/ 				2698,
/******/ 				7871,
/******/ 				6230,
/******/ 				2598,
/******/ 				405,
/******/ 				4806,
/******/ 				452,
/******/ 				8443,
/******/ 				4821,
/******/ 				9759,
/******/ 				6917,
/******/ 				7482,
/******/ 				4434
/******/ 			],
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
/******/ 	/* webpack/runtime/chunk preload trigger */
/******/ 	(() => {
/******/ 		var chunkToChildrenMap = {
/******/ 			"1169": [
/******/ 				8220
/******/ 			],
/******/ 			"8519": [
/******/ 				5638,
/******/ 				9759,
/******/ 				859
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.preload = (chunkId) => {
/******/ 			var chunks = chunkToChildrenMap[chunkId];
/******/ 			Array.isArray(chunks) && chunks.map(__webpack_require__.G);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,3617,4162,6445,7587,2644,3803,8958], () => (__webpack_require__(41933)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,9759,7871,3294,8672,2486,8136,6739,187,4544,5464,3758,3147,444,6316,3693,1851,4227,2788,8019,8712,7822,7856,3453,400,5756,7849,5815,12,5132,2735,5737,1440,2619,9227,5838,3142,5105,3846,2162,8129,5951,5687,7512,2752,5178,6565,9744,2299,6160,6813,4278,9197,7765,8000,4960,102,253,9239,572,8547,8145,5313,4570,3981,2088,2908,1696,3638,1555,9141,516,3883,2974,3832,6067,159,79,4557,1732,9737,234,1152,6982,7070,708,4590,4586,1947,9855,2891,8393,5784,9566,4029,433,9697,3619,2222,9447,3617,4162,6445,7587,2644,3803,8958], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;