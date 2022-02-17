"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4194],{

/***/ 24827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(52458),m=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;exports.SuspenseList=60120;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;m=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");exports.SuspenseList=w("react.suspense_list");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};
function K(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!J.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),n=0;n<g;n++)f[n]=arguments[n+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:m,type:a,key:k,ref:h,props:d,_owner:I.current}}
function L(a,b){return{$$typeof:m,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===m}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g;function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function P(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case m:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+O(h,0):e,G(d)?(c="",null!=a&&(c=a.replace(N,"$&/")+"/"),P(d,b,c,"",function(a){return a})):null!=d&&(M(d)&&(d=L(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(N,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(G(a))for(var g=0;g<a.length;g++){k=
a[g];var f=e+O(k,g);h+=P(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+O(k,g++),h+=P(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function Q(a,b,c){if(null==a)return a;var e=[],d=0;P(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function R(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}var S={current:null},T={transition:0},U={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:T,ReactCurrentOwner:I,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:Q,forEach:function(a,b,c){Q(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;Q(a,function(){b++});return b},toArray:function(a){return Q(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=I.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!J.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var n=0;n<f;n++)g[n]=arguments[n+2];e.children=g}return{$$typeof:m,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a){a={$$typeof:r,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=K;exports.createFactory=function(a){var b=K.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=M;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:R}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=T.transition;T.transition=1;try{a()}finally{T.transition=b}};exports.unstable_createMutableSource=function(a,b){return{_getVersion:b,_source:a,_workInProgressVersionPrimary:null,_workInProgressVersionSecondary:null}};
exports.unstable_useMutableSource=function(a,b,c){return S.current.useMutableSource(a,b,c)};exports.unstable_useOpaqueIdentifier=function(){return S.current.useOpaqueIdentifier()};exports.useCallback=function(a,b){return S.current.useCallback(a,b)};exports.useContext=function(a){return S.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return S.current.useDeferredValue(a)};exports.useEffect=function(a,b){return S.current.useEffect(a,b)};
exports.useImperativeHandle=function(a,b,c){return S.current.useImperativeHandle(a,b,c)};exports.useLayoutEffect=function(a,b){return S.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S.current.useMemo(a,b)};exports.useReducer=function(a,b,c){return S.current.useReducer(a,b,c)};exports.useRef=function(a){return S.current.useRef(a)};exports.useState=function(a){return S.current.useState(a)};exports.useTransition=function(){return S.current.useTransition()};exports.version="18.0.0-aecb3b6d1";


/***/ }),
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4426],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js

/***/ 70791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ DashboardRoute)
/* harmony export */ });
/* unused harmony export DashboardWalletRoute */
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

/***/ 97889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50623);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66449);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32951);
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93002);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77212);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96578);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71299);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66751);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31020);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32408);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13206);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74712);
















const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {
    },
    collecting: {
    },
    customization: {
    },
    configuration: {
    },
    permission: {
        has: async ()=>false
        ,
        request: async ()=>false
    },
    init: ()=>{
        throw new Error();
    },
    injection: {
    },
    networkIdentifier: 'localhost',
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
let globalUIState = {
};
async function activateSocialNetworkUIInner(ui_deferred) {
    var ref, ref1, _injection, ref2, _injection1, ref3, _injection2, ref4, ref5, ref6, _injection3, ref7, _injection4, ref8, _injection5, ref9, _injection6, ref10;
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort = new AbortController();
    const { signal  } = abort;
    if (false) { var ref11; }
    await (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__/* .untilDomLoaded */ .Up)();
    i18nOverwrite();
    const state = await ui.init(signal);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .managedStateCreator */ .MJ)()
    };
    (ref = ui.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.start(signal);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    (ref1 = ui.collecting.postsProvider) === null || ref1 === void 0 ? void 0 : ref1.start(signal);
    startPostListener();
    (ref2 = (_injection = ui.injection).pageInspector) === null || ref2 === void 0 ? void 0 : ref2.call(_injection, signal);
    if (_utils_flags__WEBPACK_IMPORTED_MODULE_4__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) (ref3 = (_injection1 = ui.injection).toolBoxInNavBar) === null || ref3 === void 0 ? void 0 : ref3.call(_injection1, signal);
    (ref4 = (_injection2 = ui.injection).setupPrompt) === null || ref4 === void 0 ? void 0 : ref4.call(_injection2, signal);
    (ref5 = ui.injection.newPostComposition) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.start) === null || ref6 === void 0 ? void 0 : ref6.call(ref5, signal);
    (ref7 = (_injection3 = ui.injection).searchResult) === null || ref7 === void 0 ? void 0 : ref7.call(_injection3, signal);
    (ref8 = (_injection4 = ui.injection).userBadge) === null || ref8 === void 0 ? void 0 : ref8.call(_injection4, signal);
    setTimeout(activateSNSAdaptorPluginOnStart, 1000);
    (ref9 = (_injection5 = ui.injection).enhancedProfile) === null || ref9 === void 0 ? void 0 : ref9.call(_injection5, signal);
    (ref10 = (_injection6 = ui.injection).enhancedProfileTab) === null || ref10 === void 0 ? void 0 : ref10.call(_injection6, signal);
    (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_11__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_12__/* .createPluginHost */ .R)(signal));
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {
        };
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _utils_i18n_next__WEBPACK_IMPORTED_MODULE_5__/* .default.addResource */ .Z.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        provider === null || provider === void 0 ? void 0 : provider.start(signal);
        if (provider === null || provider === void 0 ? void 0 : provider.hasDeprecatedPlaceholderName) {
            provider.lastRecognized.addListener((id)=>{
                if (signal.aborted) return;
                if (id.identifier.isUnknown) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Identity.resolveIdentity */ .ZP.Identity.resolveIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        var ref12;
        const posts = (ref12 = ui.collecting.postsProvider) === null || ref12 === void 0 ? void 0 : ref12.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            var _injection7, ref13, _injection8, ref14, ref15, ref16;
            await unmount(key);
            const abort1 = new AbortController();
            signal.addEventListener('abort', ()=>abort1.abort()
            );
            abortSignals.set(key, abort1);
            const { signal: postSignal  } = abort1;
            (ref13 = (_injection7 = ui.injection).enhancedPostRenderer) === null || ref13 === void 0 ? void 0 : ref13.call(_injection7, postSignal, value);
            (ref14 = (_injection8 = ui.injection).postInspector) === null || ref14 === void 0 ? void 0 : ref14.call(_injection8, postSignal, value);
            (ref15 = ui.injection.commentComposition) === null || ref15 === void 0 ? void 0 : ref15.compositionBox(postSignal, value);
            (ref16 = ui.injection.commentComposition) === null || ref16 === void 0 ? void 0 : ref16.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id = _settings_settings__WEBPACK_IMPORTED_MODULE_8__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id1)=>{
            const { persona , status  } = JSON.parse(id1 || '{}');
            if (persona && status && !started) {
                var _injection9, ref12;
                started = true;
                (ref12 = (_injection9 = ui.injection).setupWizard) === null || ref12 === void 0 ? void 0 : ref12.call(_injection9, signal, _masknet_shared__WEBPACK_IMPORTED_MODULE_9__.Identifier.fromString(persona, _masknet_shared__WEBPACK_IMPORTED_MODULE_9__.ECKeyIdentifier).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_8__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_8__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id);
    }
    async function activateSNSAdaptorPluginOnStart() {
        const plugin = await _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Settings.shouldActivatePluginOnSNSStart */ .ZP.Settings.shouldActivatePluginOnSNSStart();
        if (!plugin) return;
        await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(500);
        _utils_messages__WEBPACK_IMPORTED_MODULE_14__/* .MaskMessage.events.requestComposition.sendToLocal */ .y.events.requestComposition.sendToLocal({
            open: true,
            reason: 'timeline',
            options: {
                startupPlugin: plugin
            }
        });
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_13__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui);
    if (false) { var ref1; }
    return ui;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


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

/***/ 77487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IN": () => (/* reexport safe */ _useMatchXS__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   "eD": () => (/* reexport safe */ _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__.D),
/* harmony export */   "MN": () => (/* reexport safe */ _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_8__.E)
/* harmony export */ });
/* harmony import */ var _useControlledDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8672);
/* harmony import */ var _useMatchXS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37094);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17972);
/* harmony import */ var _useQRCodeImageScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28470);
/* harmony import */ var _useQRCodeVideoScan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85382);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41550);
/* harmony import */ var _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73493);
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54128);
/* harmony import */ var _useVideoDevices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22096);













/***/ }),

/***/ 28470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useQRCodeImageScan */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);



function useQRCodeImageScan(image) {
    const scanner = useRef(new BarcodeDetector({
        formats: [
            'qr_code'
        ]
    }));
    const [source, setSource] = useState('');
    useEffect(()=>{
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
    return useAsync(async ()=>{
        const image1 = await loadImage(source);
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

/* unused harmony exports getBackVideoDeviceId, useQRCodeVideoScan */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41550);
/* harmony import */ var _components_QRScanner_ShapeDetectionPolyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96844);
/// <reference path="../../components/QRScanner/ShapeDetectionSpec.d.ts" />
/** This file is published under MIT License */ 




async function getBackVideoDeviceId() {
    var ref;
    const devices = filter(await navigator.mediaDevices.enumerateDevices(), ({ kind  })=>kind === 'videoinput'
    );
    const back = find(devices, ({ label  })=>!/front/i.test(label) && /back|rear/i.test(label)
    );
    var ref1;
    return (ref1 = (ref = back !== null && back !== void 0 ? back : first(devices)) === null || ref === void 0 ? void 0 : ref.deviceId) !== null && ref1 !== void 0 ? ref1 : null;
}
function useQRCodeVideoScan(video, isScanning, deviceId, onResult, onError) {
    // TODO!: ? not work See https://github.com/DimensionDev/Maskbook/issues/810
    // ? Get video stream
    {
        const permission = useQueryNavigatorPermission(isScanning, 'camera');
        const [mediaStream, setMediaStream] = useState(null);
        useEffect(()=>{
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
        const scanner = useRef(new BarcodeDetector({
            formats: [
                'qr_code'
            ]
        }));
        const lastScanning = useRef(false);
        const errorTimes = useRef(0);
        useInterval(async ()=>{
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

/***/ 54128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);



/***/ }),

/***/ 22096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useVideoDevices */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


function useVideoDevices() {
    const permissionState = usePermission({
        name: 'camera'
    });
    const { devices =[]  } = useMediaDevices();
    // we dispatch a fake event if permission changed
    // in order to fix the bug described in this issues
    // https://github.com/streamich/react-use/issues/1318
    useEffect(()=>{
        navigator.mediaDevices.dispatchEvent(new Event('devicechange'));
    }, [
        permissionState
    ]);
    return devices.filter((d)=>d.kind === 'videoinput'
    );
}


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

/***/ 5743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ deconstructPayload),
/* harmony export */   "R": () => (/* binding */ constructAlpha38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93002);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29573);
/* harmony import */ var _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22192);





/**
 * Detect if there is version -40, -39 or -38 payload
 */ function deconstructAlpha40_Or_Alpha39_Or_Alpha38(str, throws = false) {
    // ? payload is 🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier:||
    // ? if publicShared is true, that means AESKeyEncrypted is shared with public
    // ? "1" treated as true, "0" or not defined treated as false
    // ? authorIdentifier is encoded as `${network}/${id}`
    const isVersion40 = str.includes('🎼2/4');
    const isVersion39 = str.includes('🎼3/4');
    const isVersion38 = str.includes('🎼4/4');
    str = str.replace('🎼2/4', '🎼3/4');
    str = str.replace('🎼3/4', '🎼4/4');
    const [_, payloadStart] = str.split('🎼4/4|');
    if (!payloadStart) if (throws) throw new Error(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found'));
    else return null;
    const [payload, rest] = payloadStart.split(':||');
    if (rest === undefined) if (throws) throw new Error(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_incomplete'));
    else return null;
    const [AESKeyEncrypted, iv, encryptedText, signature, ...optional] = payload.split('|');
    const [authorPublicKey, publicShared, authorID, ...extra] = optional;
    if (!(AESKeyEncrypted && iv && encryptedText)) if (throws) throw new Error(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
    else return null;
    if (extra.length) console.warn('Found extra payload', extra);
    if (isVersion38) {
        if (!signature) throw new Error(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
        return {
            version: -38,
            AESKeyEncrypted,
            iv,
            encryptedText,
            signature,
            authorPublicKey,
            sharedPublic: publicShared === '1',
            authorUserID: ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Result.wrap */ .x4.wrap(()=>_database_type__WEBPACK_IMPORTED_MODULE_2__/* .Identifier.fromString */ .xb.fromString('person:' + atob(authorID), _database_type__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier */ .WO).unwrap()
            ).unwrapOr(undefined)
        };
    }
    return {
        ownersAESKeyEncrypted: AESKeyEncrypted,
        iv,
        encryptedText,
        signature,
        version: isVersion39 ? -39 : -40
    };
}
function deconstructAlpha41(str, throws = false) {
    // 🎼1/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    if (str.includes('🎼1/4') && str.includes(':||')) if (throws) throw new Error(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_throw_in_alpha41'));
    else return null;
    return null;
}
const versions = new Set([
    deconstructAlpha40_Or_Alpha39_Or_Alpha38,
    deconstructAlpha41
]);
function deconstructPayload(str, networkDecoder) {
    if (!networkDecoder) {
        networkDecoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_3__/* .decodeTextPayloadUI */ .X2 : (x)=>[
                x
            ]
        ;
    }
    for (const versionDecoder of versions){
        const results = networkDecoder(str);
        for (const result of results){
            if (!result) continue;
            const payload = versionDecoder(result, false);
            if (payload) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(payload);
        }
    }
    if (str.includes('🎼') && str.includes(':||')) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('service_unknown_payload')));
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_i18n_next__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found')));
}
function constructAlpha38(data, encoder) {
    var ref;
    if (!encoder) {
        encoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_3__/* .encodeTextPayloadUI */ .XF : (x)=>x
        ;
    }
    const userID = ((ref = data.authorUserID) === null || ref === void 0 ? void 0 : ref.toText().replace('person:', '')) || '';
    const fields = [
        data.AESKeyEncrypted,
        data.iv,
        data.encryptedText,
        data.signature,
        data.authorPublicKey,
        data.sharedPublic ? '1' : '0',
        userID.includes('|') ? undefined : btoa(userID), 
    ];
    return encoder(`🎼4/4|${fields.join('|')}:||`);
}


/***/ }),

/***/ 73094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PN": () => (/* reexport */ BackupFileShortRepresentation/* decompressBackupFile */.PN),
  "qX": () => (/* reexport */ SECP256k1_Compression/* decompressSecp256k1Key */.q),
  "Qn": () => (/* reexport */ Payload/* deconstructPayload */.Q),
  "ll": () => (/* reexport */ String_ArrayBuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ String_ArrayBuffer/* encodeText */.YT)
});

// UNUSED EXPORTS: CryptoKeyToJsonWebKey, JWKToKey, JsonWebKeyToCryptoKey, UpgradeBackupJSONFile, asyncIteratorToArray, asyncIteratorToAsyncFunction, asyncIteratorWithResult, compressBackupFile, compressSecp256k1Key, constructAlpha38, decodeArrayBuffer, decodeText, getBackupPreviewInfo, getKeyParameter, keyToAddr, keyToJWK, memorizeAsyncGenerator, sanitizeBackupFile, serialization

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

/***/ 13284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eT": () => (/* binding */ PostInfoProvider),
/* harmony export */   "oQ": () => (/* binding */ usePostInfo),
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails),
/* harmony export */   "FT": () => (/* binding */ usePostInfoSharedPublic)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88085);




const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const PostInfoProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    }));
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails1() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.ValueRef) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableMap) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useObservableValues)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useObservableValues)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}
function usePostInfoSharedPublic() {
    const info = usePostInfoDetails.postPayload();
    if (info.err) return false;
    const payload = info.val;
    if (payload.version !== -38) return false;
    return !!payload.sharedPublic;
}


/***/ }),

/***/ 96458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "C": () => (/* binding */ startPluginDashboard)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52078);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.Dashboard
});
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
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 88472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "mF": () => (/* binding */ useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52078);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67380);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);





const { events , activated , startDaemon  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.SNSAdaptor
});
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_4__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsSNSAdaptor() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet() {
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xxU)();
    const plugins = useActivatedPluginsSNSAdaptor();
    return plugins.reduce((acc, cur)=>{
        var ref;
        const operatingSupportedChains = (ref = cur.enableRequirement.web3) === null || ref === void 0 ? void 0 : ref.operatingSupportedChains;
        acc[cur.ID] = !Boolean(operatingSupportedChains) || Boolean(operatingSupportedChains === null || operatingSupportedChains === void 0 ? void 0 : operatingSupportedChains.includes(chainId));
        return acc;
    }, {
    });
}
function startPluginSNSAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        // boolean | undefined
        const status = def.enableRequirement.networks.networks[currentNetwork];
        if (def.enableRequirement.networks.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.networks.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ue": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "R$": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "UB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.UB),
/* harmony export */   "Ag": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.Ag),
/* harmony export */   "J3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.J3),
/* harmony export */   "js": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.js)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89198);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32809);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74890);
// Do not export JSX from this file. It might break some runtime that does not have DOM.





/***/ }),

/***/ 80050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionDebug": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "SubscriptionFromValueRef": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "ValueRefFromSubscription": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "createGlobalState": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.r8),
/* harmony export */   "useMenu": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.H9),
/* harmony export */   "useMenuConfig": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__._X),
/* harmony export */   "useMenuContext": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Xh),
/* harmony export */   "useObservableValues": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.pv),
/* harmony export */   "useRemoteControlledDialog": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.F$),
/* harmony export */   "useScrollBottomEvent": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.S8),
/* harmony export */   "useSnackbarCallback": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.iD),
/* harmony export */   "useValueRef": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "useValueRefDelayed": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "FormattedAddress": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.Kv),
/* harmony export */   "FormattedBalance": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.BV),
/* harmony export */   "FormattedCurrency": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.bO),
/* harmony export */   "CrashUI": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.OZ),
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.SV),
/* harmony export */   "ErrorBoundaryBuildInfoContext": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.N3),
/* harmony export */   "ProviderIcon": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.LC),
/* harmony export */   "QRCode": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.s_),
/* harmony export */   "TokenIcon": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.T1),
/* harmony export */   "TokenIconUI": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.vT),
/* harmony export */   "TokenList": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.no),
/* harmony export */   "mergeClasses": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.ze),
/* harmony export */   "or": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.or),
/* harmony export */   "useImageFailOver": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.jt),
/* harmony export */   "useStylesExtends": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "withErrorBoundary": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.Pf),
/* harmony export */   "SharedTrans": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.$M),
/* harmony export */   "addSharedI18N": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.zr),
/* harmony export */   "languages": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.Mj),
/* harmony export */   "useSharedI18N": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.B_),
/* harmony export */   "getLocalImplementation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "getLocalImplementationExotic": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.k),
/* harmony export */   "ALL_EVENTS": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Ko),
/* harmony export */   "ECKeyIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.ob),
/* harmony export */   "GroupIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.xI),
/* harmony export */   "Identifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.xb),
/* harmony export */   "IdentifierMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.qD),
/* harmony export */   "ObservableMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.vP),
/* harmony export */   "ObservableSet": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.n7),
/* harmony export */   "ObservableWeakMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.$f),
/* harmony export */   "PayloadVersions": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.eL),
/* harmony export */   "PersonaIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Np),
/* harmony export */   "PostIVIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bb),
/* harmony export */   "PostIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__._P),
/* harmony export */   "ProfileIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.WO),
/* harmony export */   "ReadonlyIdentifierMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.dM),
/* harmony export */   "SessionStorageCache": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Hd),
/* harmony export */   "addI18NBundle": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "createI18NBundle": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "delay": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.gw),
/* harmony export */   "extractTextFromTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Vc),
/* harmony export */   "fallbackLng": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.A9),
/* harmony export */   "getEnumAsObject": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Y0),
/* harmony export */   "isSerializableTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.fV),
/* harmony export */   "isTypedMessageAnchor": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bj),
/* harmony export */   "isTypedMessageEmpty": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.YN),
/* harmony export */   "isTypedMessageEqual": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Hz),
/* harmony export */   "isTypedMessageImage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.c0),
/* harmony export */   "isTypedMessageImageV1": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.No),
/* harmony export */   "isTypedMessagePromise": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.KV),
/* harmony export */   "isTypedMessageText": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Rz),
/* harmony export */   "isTypedMessageTextV1": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Po),
/* harmony export */   "isTypedMessageTuple": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bZ),
/* harmony export */   "isTypedMessageTupleSerializable": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.qT),
/* harmony export */   "isTypedMessageUnknown": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bt),
/* harmony export */   "isWellKnownCoreTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.q$),
/* harmony export */   "isWellKnownExtensionTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.SY),
/* harmony export */   "isWellKnownTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.rK),
/* harmony export */   "makeTypedMessageAnchor": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Jv),
/* harmony export */   "makeTypedMessageEmpty": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.WM),
/* harmony export */   "makeTypedMessageImage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.as),
/* harmony export */   "makeTypedMessagePromise": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Ng),
/* harmony export */   "makeTypedMessageSerializableTupleFromList": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.h6),
/* harmony export */   "makeTypedMessageText": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.P),
/* harmony export */   "makeTypedMessageTuple": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Zw),
/* harmony export */   "makeTypedMessageTupleFromList": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.n_),
/* harmony export */   "makeTypedMessageTupleSerializable": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.kT),
/* harmony export */   "makeTypedMessageUnknown": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.mv),
/* harmony export */   "normalizeTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.r6),
/* harmony export */   "parseURL": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Lk),
/* harmony export */   "pollingTask": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.s_),
/* harmony export */   "serializer": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.GM),
/* harmony export */   "timeout": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Vs)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58235);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80544);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18324);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96876);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99134);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28532);








/***/ }),

/***/ 94480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "yu": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.y),
/* harmony export */   "N8": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.N)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48747);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52265);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23316);





/***/ }),

/***/ 72706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yu": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.yu),
/* harmony export */   "Df": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.Df),
/* harmony export */   "N8": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.N8),
/* harmony export */   "E1": () => (/* reexport safe */ _ButtonGroupTab_index__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.YO),
/* harmony export */   "wT": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.wT),
/* harmony export */   "Ds": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.Ds),
/* harmony export */   "xV": () => (/* reexport safe */ _SearchableList__WEBPACK_IMPORTED_MODULE_3__.x),
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_4__.F),
/* harmony export */   "qA": () => (/* reexport safe */ _CountdownButton__WEBPACK_IMPORTED_MODULE_5__.q),
/* harmony export */   "oe": () => (/* reexport safe */ _SendingCodeField__WEBPACK_IMPORTED_MODULE_6__.o),
/* harmony export */   "g8": () => (/* reexport safe */ _PhoneNumberField__WEBPACK_IMPORTED_MODULE_7__.g)
/* harmony export */ });
/* harmony import */ var _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94480);
/* harmony import */ var _ButtonGroupTab_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22401);
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39247);
/* harmony import */ var _SearchableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49116);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76728);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70742);
/* harmony import */ var _SendingCodeField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42869);
/* harmony import */ var _PhoneNumberField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89577);










/***/ }),

/***/ 33385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "QE": () => (/* reexport safe */ _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "YT": () => (/* reexport safe */ _useBlockie__WEBPACK_IMPORTED_MODULE_2__.Y),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_3__.O),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_4__.xx),
/* harmony export */   "as": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_4__.as),
/* harmony export */   "K1": () => (/* reexport safe */ _useChainDetailed__WEBPACK_IMPORTED_MODULE_5__.K),
/* harmony export */   "OP": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_6__.OP),
/* harmony export */   "cq": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_6__.cq),
/* harmony export */   "GP": () => (/* reexport safe */ _useContract__WEBPACK_IMPORTED_MODULE_6__.GP),
/* harmony export */   "PC": () => (/* reexport safe */ _useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__.P),
/* harmony export */   "XE": () => (/* reexport safe */ _useNonce__WEBPACK_IMPORTED_MODULE_8__.X),
/* harmony export */   "Fh": () => (/* reexport safe */ _useGasPrice__WEBPACK_IMPORTED_MODULE_9__.F),
/* harmony export */   "i1": () => (/* reexport safe */ _useERC165__WEBPACK_IMPORTED_MODULE_12__.i),
/* harmony export */   "iW": () => (/* reexport safe */ _useERC20TokenApproveCallback__WEBPACK_IMPORTED_MODULE_14__.i),
/* harmony export */   "Sj": () => (/* reexport safe */ _useERC20TokenApproveCallback__WEBPACK_IMPORTED_MODULE_14__.S),
/* harmony export */   "yp": () => (/* reexport safe */ _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_15__.y),
/* harmony export */   "kI": () => (/* reexport safe */ _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_16__.k),
/* harmony export */   "bs": () => (/* reexport safe */ _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_16__.b),
/* harmony export */   "_g": () => (/* reexport safe */ _useERC721TokenDetailedCallback__WEBPACK_IMPORTED_MODULE_17__._),
/* harmony export */   "u8": () => (/* reexport safe */ _useERC20TokenDetailedFromTokenLists__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "mr": () => (/* reexport safe */ _useERC20TokensDetailedFromTokenLists__WEBPACK_IMPORTED_MODULE_20__.m),
/* harmony export */   "P1": () => (/* reexport safe */ _useERC721ContractDetailed__WEBPACK_IMPORTED_MODULE_23__.P),
/* harmony export */   "uC": () => (/* reexport safe */ _useMulticall__WEBPACK_IMPORTED_MODULE_29__.uC),
/* harmony export */   "w0": () => (/* reexport safe */ _useMulticall__WEBPACK_IMPORTED_MODULE_29__.w0),
/* harmony export */   "es": () => (/* reexport safe */ _useMulticall__WEBPACK_IMPORTED_MODULE_29__.es),
/* harmony export */   "hj": () => (/* reexport safe */ _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_30__.h),
/* harmony export */   "JS": () => (/* reexport safe */ _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_31__.J),
/* harmony export */   "Hv": () => (/* reexport safe */ _useNativeTokenWrapperCallback__WEBPACK_IMPORTED_MODULE_33__.H),
/* harmony export */   "mM": () => (/* reexport safe */ _useTokenBalance__WEBPACK_IMPORTED_MODULE_35__.m),
/* harmony export */   "jv": () => (/* reexport safe */ _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_36__.j),
/* harmony export */   "z7": () => (/* reexport safe */ _useTokenTransferCallback__WEBPACK_IMPORTED_MODULE_37__.z),
/* harmony export */   "g3": () => (/* reexport safe */ _useFungibleTokenWatched__WEBPACK_IMPORTED_MODULE_38__.g),
/* harmony export */   "n$": () => (/* reexport safe */ _useTransactionState__WEBPACK_IMPORTED_MODULE_41__.n),
/* harmony export */   "pl": () => (/* reexport safe */ _useTransactionState__WEBPACK_IMPORTED_MODULE_41__.p),
/* harmony export */   "$6": () => (/* reexport safe */ _useWeb3__WEBPACK_IMPORTED_MODULE_42__.$),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_43__.b),
/* harmony export */   "Li": () => (/* reexport safe */ _useAssets__WEBPACK_IMPORTED_MODULE_47__.L),
/* harmony export */   "l8": () => (/* reexport safe */ _useAssetsByTokenList__WEBPACK_IMPORTED_MODULE_48__.l),
/* harmony export */   "dX": () => (/* reexport safe */ _useCollectibles__WEBPACK_IMPORTED_MODULE_49__.d),
/* harmony export */   "nC": () => (/* reexport safe */ _useTransactions__WEBPACK_IMPORTED_MODULE_50__.n),
/* harmony export */   "hx": () => (/* reexport safe */ _useMnemonicWordsPuzzle__WEBPACK_IMPORTED_MODULE_51__.h),
/* harmony export */   "bD": () => (/* reexport safe */ _useGetPastLogsParams__WEBPACK_IMPORTED_MODULE_52__.b),
/* harmony export */   "x5": () => (/* reexport safe */ _useChainColor__WEBPACK_IMPORTED_MODULE_53__.x),
/* harmony export */   "Fq": () => (/* reexport safe */ _useResolveENS__WEBPACK_IMPORTED_MODULE_54__.F),
/* harmony export */   "gG": () => (/* reexport safe */ _useResolveUNS__WEBPACK_IMPORTED_MODULE_55__.g),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_56__.O),
/* harmony export */   "rB": () => (/* reexport safe */ _useWallets__WEBPACK_IMPORTED_MODULE_57__.r),
/* harmony export */   "mP": () => (/* reexport safe */ _useERC20Tokens__WEBPACK_IMPORTED_MODULE_58__.m),
/* harmony export */   "GT": () => (/* reexport safe */ _useERC20TokensPaged__WEBPACK_IMPORTED_MODULE_59__.G),
/* harmony export */   "du": () => (/* reexport safe */ _useTrustedERC20Tokens__WEBPACK_IMPORTED_MODULE_60__.d)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51362);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39597);
/* harmony import */ var _useBlockie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26426);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97891);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34324);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9846);
/* harmony import */ var _useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16055);
/* harmony import */ var _useCurrentBlockTimestamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52248);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58435);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56475);
/* harmony import */ var _useEtherPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92182);
/* harmony import */ var _useENSLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11372);
/* harmony import */ var _useERC165__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54618);
/* harmony import */ var _useERC20TokenAllowance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43332);
/* harmony import */ var _useERC20TokenApproveCallback__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(86971);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21738);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38586);
/* harmony import */ var _useERC721TokenDetailedCallback__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(72540);
/* harmony import */ var _useERC20TokenTransferCallback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10666);
/* harmony import */ var _useERC20TokenDetailedFromTokenLists__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(33395);
/* harmony import */ var _useERC20TokensDetailedFromTokenLists__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(53502);
/* harmony import */ var _useERC721TokenBalance__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(98817);
/* harmony import */ var _useERC721TokenByIndex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(77080);
/* harmony import */ var _useERC721ContractDetailed__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(68023);
/* harmony import */ var _useERC721ContractIsApproveForAll__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(58775);
/* harmony import */ var _useERC721ContractSetApproveForAllCallback__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(46788);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(47280);
/* harmony import */ var _useERC721TokenDetailedOwnerList__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(74526);
/* harmony import */ var _useERC721TokenTransferCallback__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(94341);
/* harmony import */ var _useMulticall__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(22883);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(57660);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(30311);
/* harmony import */ var _useNativeTokenTransferCallback__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(28557);
/* harmony import */ var _useNativeTokenWrapperCallback__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(10444);
/* harmony import */ var _useStableTokensDebank__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(65142);
/* harmony import */ var _useTokenBalance__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(57164);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(2097);
/* harmony import */ var _useTokenTransferCallback__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(40892);
/* harmony import */ var _useFungibleTokenWatched__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(78522);
/* harmony import */ var _useTokensBalance__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(50621);
/* harmony import */ var _useTransaction__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(47961);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(91840);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(1366);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(80374);
/* harmony import */ var _useAssetsFromChain__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(23287);
/* harmony import */ var _useAssetsMerged__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(33456);
/* harmony import */ var _useAssetsFromProvider__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(77932);
/* harmony import */ var _useAssets__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(19538);
/* harmony import */ var _useAssetsByTokenList__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(30850);
/* harmony import */ var _useCollectibles__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(67217);
/* harmony import */ var _useTransactions__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(46817);
/* harmony import */ var _useMnemonicWordsPuzzle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(85063);
/* harmony import */ var _useGetPastLogsParams__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(59956);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(58707);
/* harmony import */ var _useResolveENS__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(20103);
/* harmony import */ var _useResolveUNS__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(77375);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(69895);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(85418);
/* harmony import */ var _useERC20Tokens__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(54183);
/* harmony import */ var _useERC20TokensPaged__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(57283);
/* harmony import */ var _useTrustedERC20Tokens__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(71715);







<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
/***/ 17283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iW": () => (/* reexport */ useERC20TokenApproveCallback/* ApproveStateType */.i),
  "uC": () => (/* reexport */ useMulticall/* MulticalStateType */.uC),
  "n$": () => (/* reexport */ useTransactionState/* TransactionStateType */.n),
  "OP": () => (/* reexport */ useContract/* createContract */.OP),
  "mA": () => (/* reexport */ useAccount/* useAccount */.m),
  "QE": () => (/* reexport */ useAllowTestnet/* useAllowTestnet */.Q),
  "Li": () => (/* reexport */ useAssets/* useAssets */.L),
  "l8": () => (/* reexport */ useAssetsByTokenList/* useAssetsByTokenList */.l),
  "Ov": () => (/* reexport */ useBlockNumber/* useBlockNumber */.O),
  "YT": () => (/* reexport */ useBlockie/* useBlockie */.Y),
  "x5": () => (/* reexport */ useChainColor/* useChainColor */.x),
  "K1": () => (/* reexport */ useChainDetailed/* useChainDetailed */.K),
  "xx": () => (/* reexport */ useChainId/* useChainId */.xx),
  "as": () => (/* reexport */ useChainId/* useChainIdValid */.as),
  "dX": () => (/* reexport */ useCollectibles/* useCollectibles */.d),
  "cq": () => (/* reexport */ useContract/* useContract */.cq),
  "GP": () => (/* reexport */ useContract/* useContracts */.GP),
  "PC": () => (/* reexport */ useCurrentBlockTimestamp/* useCurrentBlockTimestamp */.P),
  "i1": () => (/* reexport */ useERC165/* useERC165 */.i),
  "Sj": () => (/* reexport */ useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S),
  "yp": () => (/* reexport */ useERC20TokenBalance/* useERC20TokenBalance */.y),
  "kI": () => (/* reexport */ useERC20TokenDetailed/* useERC20TokenDetailed */.k),
  "u8": () => (/* reexport */ useERC20TokenDetailedFromTokenLists/* useERC20TokenDetailedFromTokenLists */.u),
  "mP": () => (/* reexport */ useERC20Tokens/* useERC20Tokens */.m),
  "mr": () => (/* reexport */ useERC20TokensDetailedFromTokenLists/* useERC20TokensDetailedFromTokenLists */.m),
  "GT": () => (/* reexport */ useERC20TokensPaged/* useERC20TokensPaged */.G),
  "if": () => (/* reexport */ useEtherPrice/* useEtherPrice */.i),
  "jv": () => (/* reexport */ useFungibleTokenDetailed/* useFungibleTokenDetailed */.j),
  "g3": () => (/* reexport */ useFungibleTokenWatched/* useFungibleTokenWatched */.g),
  "bs": () => (/* reexport */ useERC20TokenDetailed/* useFungibleTokensDetailed */.b),
  "Fh": () => (/* reexport */ useGasPrice/* useGasPrice */.F),
  "bD": () => (/* reexport */ useGetPastLogsParams),
  "hx": () => (/* reexport */ useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h),
  "w0": () => (/* reexport */ useMulticall/* useMutlipleContractSingleData */.w0),
  "hj": () => (/* reexport */ useNativeTokenBalance/* useNativeTokenBalance */.h),
  "JS": () => (/* reexport */ useNativeTokenDetailed/* useNativeTokenDetailed */.J),
  "Hv": () => (/* reexport */ useNativeTokenWrapperCallback/* useNativeTokenWrapperCallback */.H),
  "bL": () => (/* reexport */ useNetworkType/* useNetworkType */.b),
  "XE": () => (/* reexport */ useNonce/* useNonce */.X),
  "Fq": () => (/* reexport */ useResolveENS),
  "gG": () => (/* reexport */ useResolveUNS),
  "es": () => (/* reexport */ useMulticall/* useSingleContractMultipleData */.es),
  "mM": () => (/* reexport */ useTokenBalance/* useTokenBalance */.m),
  "z7": () => (/* reexport */ useTokenTransferCallback/* useTokenTransferCallback */.z),
  "pl": () => (/* reexport */ useTransactionState/* useTransactionState */.p),
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
  "du": () => (/* reexport */ useTrustedERC20Tokens/* useTrustedERC20Tokens */.d),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ useWeb3/* useWeb3 */.$)
});

// UNUSED EXPORTS: ERC165_INTERFACE_ID, ERC721_ENUMERABLE_INTERFACE_ID, getERC721TokenDetailedFromChain, getERC721TokenDetailedFromOpensea, useAssetsFromChain, useAssetsFromProvider, useAssetsMerged, useBlockNumberOnce, useChainIDAvailable, useChainIdMatched, useERC1155TokenAssetDetailed, useERC20TokenAllowance, useERC20TokenTransferCallback, useERC721ContractDetailed, useERC721ContractIsApproveForAll, useERC721ContractSetApproveForAllCallback, useERC721TokenBalance, useERC721TokenByIndex, useERC721TokenDetailed, useERC721TokenDetailedCallback, useERC721TokenDetailedOwnerList, useERC721TokenTransferCallback, useMulticallCallback, useMultipleContractMultipleData, useMutlicallStateDecoded, useNativeTransferCallback, useStableTokensDebank, useTokensBalance, useTransaction, useTransactionReceipt

// EXTERNAL MODULE: ../web3-shared/src/hooks/useAccount.ts
var useAccount = __webpack_require__(9429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAllowTestnet.ts
var useAllowTestnet = __webpack_require__(29953);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockie.ts
var useBlockie = __webpack_require__(95197);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(1200);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainId.ts
var useChainId = __webpack_require__(69509);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainDetailed.ts
var useChainDetailed = __webpack_require__(59793);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(14777);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useCurrentBlockTimestamp.ts
var useCurrentBlockTimestamp = __webpack_require__(26974);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNonce.ts
var useNonce = __webpack_require__(99224);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(56800);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useEtherPrice.ts
var useEtherPrice = __webpack_require__(15728);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC165.ts
var useERC165 = __webpack_require__(25518);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(40464);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(60402);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(13988);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenDetailed.ts
var useERC20TokenDetailed = __webpack_require__(24746);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailedCallback.ts
var useERC721TokenDetailedCallback = __webpack_require__(12706);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenTransferCallback.ts
var useERC20TokenTransferCallback = __webpack_require__(16931);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenDetailedFromTokenLists.ts
var useERC20TokenDetailedFromTokenLists = __webpack_require__(54897);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokensDetailedFromTokenLists.ts
var useERC20TokensDetailedFromTokenLists = __webpack_require__(27429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenBalance.ts
var useERC721TokenBalance = __webpack_require__(29499);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenByIndex.ts
var useERC721TokenByIndex = __webpack_require__(81912);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(6484);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractIsApproveForAll.ts
var useERC721ContractIsApproveForAll = __webpack_require__(25125);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractSetApproveForAllCallback.ts
var useERC721ContractSetApproveForAllCallback = __webpack_require__(47996);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailed.ts
var useERC721TokenDetailed = __webpack_require__(64507);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailedOwnerList.ts
var useERC721TokenDetailedOwnerList = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenTransferCallback.ts
var useERC721TokenTransferCallback = __webpack_require__(60193);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useMulticall.ts
var useMulticall = __webpack_require__(47530);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(2039);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38614);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenTransferCallback.ts
var useNativeTokenTransferCallback = __webpack_require__(60856);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenWrapperCallback.ts + 2 modules
var useNativeTokenWrapperCallback = __webpack_require__(72854);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useStableTokensDebank.ts + 1 modules
var useStableTokensDebank = __webpack_require__(22194);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokenBalance.ts
var useTokenBalance = __webpack_require__(46449);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(90675);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokenTransferCallback.ts
var useTokenTransferCallback = __webpack_require__(84755);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useFungibleTokenWatched.tsx
var useFungibleTokenWatched = __webpack_require__(10828);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokensBalance.ts + 2 modules
var useTokensBalance = __webpack_require__(1293);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransaction.ts
var useTransaction = __webpack_require__(85043);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(59710);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useWeb3.ts
var useWeb3 = __webpack_require__(32311);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(18826);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsFromChain.ts
var useAssetsFromChain = __webpack_require__(9505);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsMerged.ts
var useAssetsMerged = __webpack_require__(68338);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsFromProvider.ts
var useAssetsFromProvider = __webpack_require__(30882);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssets.ts
var useAssets = __webpack_require__(28953);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsByTokenList.ts
var useAssetsByTokenList = __webpack_require__(79591);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(75107);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactions.ts
var useTransactions = __webpack_require__(97825);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(47444);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.4.0/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(74950);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useGetPastLogsParams.ts
=======



>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js


<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainColor.ts
var useChainColor = __webpack_require__(78944);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useResolveENS.ts



function useResolveENS(name) {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const result = await web3.eth.ens.getAddress(name);
        return result;
    }, [
        web3,
        name,
        chainId
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@unstoppabledomains+resolution@5.0.1/node_modules/@unstoppabledomains/resolution/build/index.js
var build = __webpack_require__(33989);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useResolveUNS.ts



function useResolveUNS(uns) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!uns) return '';
        return resolve(uns);
    }, [
        uns,
        chainId
    ]);
}
async function resolve(uns) {
    const resolution = new build.Resolution();
    const result = await resolution.records(uns, [
        'crypto.ETH.address'
    ]);
    return result['crypto.ETH.address'];
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useWallet.ts
var useWallet = __webpack_require__(5143);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useWallets.ts
var useWallets = __webpack_require__(84324);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20Tokens.ts
var useERC20Tokens = __webpack_require__(41477);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokensPaged.ts
var useERC20TokensPaged = __webpack_require__(55136);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTrustedERC20Tokens.ts
var useTrustedERC20Tokens = __webpack_require__(36547);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/index.ts
=======










>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js



































// wallet plugin related







/***/ }),

/***/ 59956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useGetPastLogsParams)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);

// There's a getPastLogs block range limitation which differ from RPCs.
//  So we need to split one large range request to multiple small ones.
function useGetPastLogsParams(fromBlock, currentBlock, maxBlockRange, params) {
    if (!fromBlock || fromBlock > currentBlock) return [];
    let count = 1;
    const queryParams = [];
    while(fromBlock + count * maxBlockRange < currentBlock){
        queryParams.push({
            fromBlock: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(fromBlock + (count - 1) * maxBlockRange),
            toBlock: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(fromBlock + count * maxBlockRange),
            ...params
        });
        count += 1;
    }
    queryParams.push({
        fromBlock: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(fromBlock + (count - 1) * maxBlockRange),
        toBlock: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(currentBlock),
        ...params
    });
    return queryParams;
}


/***/ }),

/***/ 20103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useResolveENS)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33385);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);



function useResolveENS(name) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3 */ .$)();
    const chainId = (0,___WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        const result = await web3.eth.ens.getAddress(name);
        return result;
    }, [
        web3,
        name,
        chainId
    ]);
}


<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js


// wallet plugin related
=======
/***/ }),
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js

/***/ 77375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useResolveUNS)
/* harmony export */ });
/* harmony import */ var _unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33989);
/* harmony import */ var _unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33385);



function useResolveUNS(uns) {
    const chainId = (0,___WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!uns) return '';
        return resolve(uns);
    }, [
        uns,
        chainId
    ]);
}
async function resolve(uns) {
    const resolution = new _unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0__.Resolution();
    const result = await resolution.records(uns, [
        'crypto.ETH.address'
    ]);
    return result['crypto.ETH.address'];
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
/***/ 78944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17283);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60345);


function useChainColor() {
    const chainId = (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    return (0,_pipes__WEBPACK_IMPORTED_MODULE_1__/* .resolveChainColor */ ._E)(chainId);
}


/***/ }),

/***/ 22209:
=======
/***/ 6615:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a_e": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   "wgL": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.wg),
/* harmony export */   "V2A": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.V2),
/* harmony export */   "Ej6": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Ej),
/* harmony export */   "W8g": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.W8),
/* harmony export */   "Wvq": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Wv),
/* harmony export */   "Drc": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Dr),
/* harmony export */   "slS": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.sl),
/* harmony export */   "tds": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.td),
/* harmony export */   "g38": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.g3),
/* harmony export */   "lP_": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.lP),
/* harmony export */   "iED": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.iE),
/* harmony export */   "g8n": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.g8),
/* harmony export */   "sox": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.so),
/* harmony export */   "iWP": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.iW),
/* harmony export */   "uC5": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.uC),
/* harmony export */   "n$V": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.n$),
/* harmony export */   "OPC": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.OP),
/* harmony export */   "mAM": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mA),
/* harmony export */   "QEY": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.QE),
/* harmony export */   "LiV": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Li),
/* harmony export */   "l81": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.l8),
/* harmony export */   "OvB": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Ov),
/* harmony export */   "YTs": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.YT),
/* harmony export */   "x56": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.x5),
/* harmony export */   "K1": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.K1),
/* harmony export */   "xxU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.xx),
/* harmony export */   "asy": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "dX_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.dX),
/* harmony export */   "cqn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.cq),
/* harmony export */   "GP$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.GP),
/* harmony export */   "PC_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.PC),
/* harmony export */   "i1y": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.i1),
/* harmony export */   "Sj0": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Sj),
/* harmony export */   "yps": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.yp),
/* harmony export */   "kIC": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.kI),
/* harmony export */   "u85": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.u8),
/* harmony export */   "mP2": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mP),
/* harmony export */   "mrA": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mr),
/* harmony export */   "GTU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.GT),
/* harmony export */   "P1e": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.P1),
/* harmony export */   "_gN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__._g),
/* harmony export */   "jv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.jv),
/* harmony export */   "g3P": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.g3),
/* harmony export */   "bs0": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bs),
/* harmony export */   "Fh$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Fh),
/* harmony export */   "bDE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bD),
/* harmony export */   "hx3": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hx),
/* harmony export */   "w0B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.w0),
/* harmony export */   "hjz": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hj),
/* harmony export */   "JS1": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.JS),
/* harmony export */   "Hve": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Hv),
/* harmony export */   "bLq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bL),
/* harmony export */   "XEd": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.XE),
/* harmony export */   "Fqh": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Fq),
/* harmony export */   "gG2": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.gG),
/* harmony export */   "esU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.es),
/* harmony export */   "mMq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mM),
/* harmony export */   "z7R": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.z7),
/* harmony export */   "pld": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.pl),
/* harmony export */   "nCS": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.nC),
/* harmony export */   "du_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.du),
/* harmony export */   "Osb": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Os),
/* harmony export */   "rBi": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.rB),
/* harmony export */   "$6B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.$6),
/* harmony export */   "ryP": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.ry),
/* harmony export */   "xEJ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.xE),
/* harmony export */   "buq": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.bu),
/* harmony export */   "wY6": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.wY),
/* harmony export */   "vsu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "OfD": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Of),
/* harmony export */   "$ch": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.$c),
/* harmony export */   "DC3": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.DC),
/* harmony export */   "dNj": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.dN),
/* harmony export */   "E$5": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.E$),
/* harmony export */   "azF": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.az),
/* harmony export */   "xGv": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.xG),
/* harmony export */   "j8w": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.j8),
/* harmony export */   "mHs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.mH),
/* harmony export */   "rlw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.rl),
/* harmony export */   "$Gt": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.$G),
/* harmony export */   "EXI": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.EX),
/* harmony export */   "npC": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.np),
/* harmony export */   "EP9": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.EP),
/* harmony export */   "qzE": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.qz),
/* harmony export */   "NXR": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.NX),
/* harmony export */   "F3R": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.F3),
/* harmony export */   "_Te": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__._T),
/* harmony export */   "pLw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.pL),
/* harmony export */   "yXb": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.yX),
/* harmony export */   "JiD": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Ji),
/* harmony export */   "d5_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.d5),
/* harmony export */   "lQR": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.lQ),
/* harmony export */   "T1o": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.T1),
/* harmony export */   "FIT": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.FI),
/* harmony export */   "tYA": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.tY),
/* harmony export */   "JVY": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.JV),
/* harmony export */   "Wr$": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Wr),
/* harmony export */   "Fr9": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Fr),
/* harmony export */   "Siq": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Si),
/* harmony export */   "I30": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.I3),
/* harmony export */   "wAG": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.wA),
/* harmony export */   "V3": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.V3),
/* harmony export */   "vyt": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.vy),
/* harmony export */   "Q_Z": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.Q_),
/* harmony export */   "r5m": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.r5),
/* harmony export */   "CSY": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.CS),
/* harmony export */   "wg4": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.wg),
/* harmony export */   "nWu": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.nW),
/* harmony export */   "HwK": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.Hw),
/* harmony export */   "yWL": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.yW),
/* harmony export */   "z4": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.z4),
/* harmony export */   "Qgv": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_4__.Qg),
/* harmony export */   "N9M": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_4__.N9),
/* harmony export */   "DJp": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DJ),
/* harmony export */   "afC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.af),
/* harmony export */   "Hkb": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.Hk),
/* harmony export */   "t06": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.t0),
/* harmony export */   "GVo": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.GV),
/* harmony export */   "aV4": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.aV),
/* harmony export */   "Grw": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.Gr),
/* harmony export */   "$on": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.$o),
/* harmony export */   "HVQ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.HV),
/* harmony export */   "N_d": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "JHm": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.JH),
/* harmony export */   "mgD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.mg),
/* harmony export */   "tL1": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.tL),
/* harmony export */   "j8Y": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.j8),
/* harmony export */   "AAz": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.AA),
/* harmony export */   "hyB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.hy),
/* harmony export */   "kdE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.kd),
/* harmony export */   "L7X": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.L7),
/* harmony export */   "xwH": () => (/* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_6__.xw)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70626);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17283);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60345);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35324);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14967);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60614);









/***/ }),

/***/ 60345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "wg": () => (/* binding */ resolveNetworkAddress),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink)
/* harmony export */ });
/* unused harmony exports resolveChainName, resolveChainFullName, resolveCollectibleProviderLink */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_3__);




function resolveProviderName(providerType) {
    switch(providerType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Maskbook */ .lP.Maskbook:
            return 'Mask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.MetaMask */ .lP.MetaMask:
            return 'MetaMask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
            return 'WalletConnect';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork:
            return 'CustomNetwork';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(providerType);
            return 'Unknown Network';
    }
}
function resolveNetworkAddress(networkType, address) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return `binance:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return `polygon:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return `ethereum:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return `arbitrum:${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return address;
    }
}
function resolveNetworkName(networkType) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return 'Binance Smart Chain';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return 'Polygon';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return 'Ethereum';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return 'Arbitrum';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return 'Unknown';
    }
}
function resolveChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainColor(chainId) {
    switch(chainId){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet:
            return 'rgb(41, 182, 175)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Ropsten */ .a_.Ropsten:
            return 'rgb(255, 74, 141)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Kovan */ .a_.Kovan:
            return 'rgb(112, 87, 255)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby:
            return 'rgb(246, 195, 67)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Gorli */ .a_.Gorli:
            return 'rgb(48, 153, 242)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSCT */ .a_.BSCT:
            return 'rgb(240, 185, 10)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mumbai */ .a_.Mumbai:
            return 'rgb(130, 71, 229)';
        default:
            return 'rgb(214, 217, 220)';
    }
}
function resolveLinkOnExplorer(chainId) {
    var ref, ref1;
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    var ref2;
    return (ref2 = (ref = chainDetailed.explorers) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.url) !== null && ref2 !== void 0 ? ref2 : chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()('https://ipfs.fleek.co/ipfs/:ipfs', {
        ipfs
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby) return `https://testnets.opensea.io`;
            return `https://opensea.io`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveCollectibleProviderLink(chainId, provider), '/assets/:address/:tokenId', {
                address,
                tokenId
            });
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}


/***/ }),

/***/ 98564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DC": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.DC),
/* harmony export */   "d5": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.d5),
/* harmony export */   "tY": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.tY),
/* harmony export */   "JV": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.JV),
/* harmony export */   "Wr": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.Wr),
/* harmony export */   "bu": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.bu),
/* harmony export */   "wY": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.wY),
/* harmony export */   "vs": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "Of": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.Of),
/* harmony export */   "$c": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.$c),
/* harmony export */   "mO": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.mO),
/* harmony export */   "pL": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.pL),
/* harmony export */   "Si": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.Si),
/* harmony export */   "I3": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.I3),
/* harmony export */   "UZ": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.UZ),
/* harmony export */   "dN": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.dN),
/* harmony export */   "E$": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.E$),
/* harmony export */   "az": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.az),
/* harmony export */   "xG": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.xG),
/* harmony export */   "j8": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.j8),
/* harmony export */   "mH": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.mH),
/* harmony export */   "rl": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.rl),
/* harmony export */   "f1": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.f1),
/* harmony export */   "ry": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.ry),
/* harmony export */   "xE": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.xE),
/* harmony export */   "T1": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.T1),
/* harmony export */   "FI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.FI),
/* harmony export */   "Fr": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.Fr),
/* harmony export */   "wA": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.wA),
/* harmony export */   "$G": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.$G),
/* harmony export */   "EX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.EX),
/* harmony export */   "np": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.np),
/* harmony export */   "EP": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.EP),
/* harmony export */   "qz": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.qz),
/* harmony export */   "NX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.NX),
/* harmony export */   "_T": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__._T),
/* harmony export */   "yX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.yX),
/* harmony export */   "Ji": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.Ji),
/* harmony export */   "lQ": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.lQ)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60022);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79506);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37841);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5051);
/* harmony import */ var _chainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26267);
=======
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24402);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33385);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98954);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77239);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24492);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80852);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js









/***/ }),

/***/ 49749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ None),
/* harmony export */   "bD": () => (/* binding */ Some)
/* harmony export */ });
/* unused harmony export Option */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13267);
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76110);


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
        return (0,_result__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(error);
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
        return (0,_result__WEBPACK_IMPORTED_MODULE_0__.Ok)(this.val);
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
        return "Some(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
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

/***/ }),

/***/ 76110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Ok": () => (/* binding */ Ok),
/* harmony export */   "x4": () => (/* binding */ Result)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13267);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49749);


/**
 * Contains the error value
 */
var ErrImpl = /** @class */ (function () {
    function ErrImpl(val) {
        if (!(this instanceof ErrImpl)) {
            return new ErrImpl(val);
        }
        this.ok = false;
        this.err = true;
        this.val = val;
        var stackLines = new Error().stack.split('\n').slice(2);
        if (stackLines && stackLines.length > 0 && stackLines[0].includes('ErrImpl')) {
            stackLines.shift();
        }
        this._stack = stackLines.join('\n');
    }
    ErrImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    /**
     * @deprecated in favor of unwrapOr
     * @see unwrapOr
     */
    ErrImpl.prototype.else = function (val) {
        return val;
    };
    ErrImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    ErrImpl.prototype.expect = function (msg) {
        throw new Error(msg + " - Error: " + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap Error: " + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.map = function (_mapper) {
        return this;
    };
    ErrImpl.prototype.andThen = function (op) {
        return this;
    };
    ErrImpl.prototype.mapErr = function (mapper) {
        return new Err(mapper(this.val));
    };
    ErrImpl.prototype.toOption = function () {
        return _option__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
    };
    ErrImpl.prototype.toString = function () {
        return "Err(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    Object.defineProperty(ErrImpl.prototype, "stack", {
        get: function () {
            return this + "\n" + this._stack;
        },
        enumerable: false,
        configurable: true
    });
    /** An empty Err */
    ErrImpl.EMPTY = new ErrImpl(undefined);
    return ErrImpl;
}());

// This allows Err to be callable - possible because of the es5 compilation target
var Err = ErrImpl;
/**
 * Contains the success value
 */
var OkImpl = /** @class */ (function () {
    function OkImpl(val) {
        if (!(this instanceof OkImpl)) {
            return new OkImpl(val);
        }
        this.ok = true;
        this.err = false;
        this.val = val;
    }
    /**
     * Helper function if you know you have an Ok<T> and T is iterable
     */
    OkImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.val);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    /**
     * @see unwrapOr
     * @deprecated in favor of unwrapOr
     */
    OkImpl.prototype.else = function (_val) {
        return this.val;
    };
    OkImpl.prototype.unwrapOr = function (_val) {
        return this.val;
    };
    OkImpl.prototype.expect = function (_msg) {
        return this.val;
    };
    OkImpl.prototype.unwrap = function () {
        return this.val;
    };
    OkImpl.prototype.map = function (mapper) {
        return new Ok(mapper(this.val));
    };
    OkImpl.prototype.andThen = function (mapper) {
        return mapper(this.val);
    };
    OkImpl.prototype.mapErr = function (_mapper) {
        return this;
    };
    OkImpl.prototype.toOption = function () {
        return (0,_option__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.val);
    };
    /**
     * Returns the contained `Ok` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Ok<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the error type of the Result is later changed to an error that can actually occur.
     *
     * (this is the `into_ok()` in rust)
     */
    OkImpl.prototype.safeUnwrap = function () {
        return this.val;
    };
    OkImpl.prototype.toString = function () {
        return "Ok(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    OkImpl.EMPTY = new OkImpl(undefined);
    return OkImpl;
}());

// This allows Ok to be callable - possible because of the es5 compilation target
var Ok = OkImpl;
var Result;
(function (Result) {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var okResult = [];
        for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
            var result = results_1[_a];
            if (result.ok) {
                okResult.push(result.val);
            }
            else {
                return result;
            }
        }
        return new Ok(okResult);
    }
    Result.all = all;
    /**
     * Parse a set of `Result`s, short-circuits when an input value is `Ok`.
     * If no `Ok` is found, returns an `Err` containing the collected error values
     */
    function any() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var errResult = [];
        // short-circuits
        for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
            var result = results_2[_a];
            if (result.ok) {
                return result;
            }
            else {
                errResult.push(result.val);
            }
        }
        // it must be a Err
        return new Err(errResult);
    }
    Result.any = any;
    /**
     * Wrap an operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrap(op) {
        try {
            return new Ok(op());
        }
        catch (e) {
            return new Err(e);
        }
    }
    Result.wrap = wrap;
    /**
     * Wrap an async operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrapAsync(op) {
        try {
            return op()
                .then(function (val) { return new Ok(val); })
                .catch(function (e) { return new Err(e); });
        }
        catch (e) {
            return Promise.resolve(new Err(e));
        }
    }
    Result.wrapAsync = wrapAsync;
    function isResult(val) {
        return val instanceof Err || val instanceof Ok;
    }
    Result.isResult = isResult;
})(Result || (Result = {}));
//# sourceMappingURL=result.js.map

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/4194.js
/***/ }),

/***/ 4350:
/***/ ((module) => {

module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

=======
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/4426.js
/***/ })

}]);