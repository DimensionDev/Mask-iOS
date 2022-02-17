"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7556],{

/***/ 9758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "Ps": () => (/* binding */ activateSocialNetworkUI),
/* harmony export */   "BE": () => (/* binding */ defineSocialNetworkUI),
/* harmony export */   "zq": () => (/* binding */ definedSocialNetworkWorkers),
/* harmony export */   "tr": () => (/* binding */ defineSocialNetworkWorker)
/* harmony export */ });
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 94922)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
    ).then(()=>true
    );
}
function defineSocialNetworkUI(UI) {
    if (UI.notReadyForProduction) {
        if (true) return UI;
    }
    definedSocialNetworkUIsLocal.set(UI.networkIdentifier, UI);
    return UI;
}
const definedSocialNetworkWorkers = new Set();
function defineSocialNetworkWorker(worker) {
    if (worker.notReadyForProduction) {
        if (true) return;
    }
    definedSocialNetworkWorkers.add(worker);
}


/***/ }),

/***/ 94922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27304);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26093);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8267);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(79918);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89650);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6057);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55334);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87050);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87470);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94531);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96687);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9758);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76108);















const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {},
    collecting: {},
    customization: {},
    configuration: {},
    permission: {
        has: async ()=>false
        ,
        request: async ()=>false
    },
    init: ()=>{
        throw new Error();
    },
    injection: {},
    networkIdentifier: 'localhost',
    name: '',
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
    var ref20, ref1, ref2, _injection15, ref3, _injection1, ref4, _injection2, ref5, ref6, ref7, _injection3, ref8, _injection4, ref9, _injection5, ref10, _injection6, ref11, _injection7, ref12, _injection8, ref13, _injection9, ref14, _injection10, ref15, _injection11, ref16, _injection12, ref17, _injection13, ref18;
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) { var ref19; }
    await (0,_utils_dom__WEBPACK_IMPORTED_MODULE_14__/* .untilDomLoaded */ .Up)();
    i18nOverwrite();
    const state = await ui.init(signal1);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .managedStateCreator */ .MJ)()
    };
    (ref20 = ui.customization.paletteMode) === null || ref20 === void 0 ? void 0 : ref20.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    (ref1 = ui.collecting.postsProvider) === null || ref1 === void 0 ? void 0 : ref1.start(signal1);
    startPostListener();
    (ref2 = ui.collecting.currentVisitingIdentityProvider) === null || ref2 === void 0 ? void 0 : ref2.start(signal1);
    (ref3 = (_injection15 = ui.injection).pageInspector) === null || ref3 === void 0 ? void 0 : ref3.call(_injection15, signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) (ref4 = (_injection1 = ui.injection).toolbox) === null || ref4 === void 0 ? void 0 : ref4.call(_injection1, signal1);
    (ref5 = (_injection2 = ui.injection).setupPrompt) === null || ref5 === void 0 ? void 0 : ref5.call(_injection2, signal1);
    (ref6 = ui.injection.newPostComposition) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.start) === null || ref7 === void 0 ? void 0 : ref7.call(ref6, signal1);
    (ref8 = (_injection3 = ui.injection).searchResult) === null || ref8 === void 0 ? void 0 : ref8.call(_injection3, signal1);
    (ref9 = (_injection4 = ui.injection).userBadge) === null || ref9 === void 0 ? void 0 : ref9.call(_injection4, signal1);
    (ref10 = (_injection5 = ui.injection).profileTab) === null || ref10 === void 0 ? void 0 : ref10.call(_injection5, signal1);
    (ref11 = (_injection6 = ui.injection).profileTabContent) === null || ref11 === void 0 ? void 0 : ref11.call(_injection6, signal1);
    (ref12 = (_injection7 = ui.injection).userAvatar) === null || ref12 === void 0 ? void 0 : ref12.call(_injection7, signal1);
    (ref13 = (_injection8 = ui.injection).profileAvatar) === null || ref13 === void 0 ? void 0 : ref13.call(_injection8, signal1);
    (ref14 = (_injection9 = ui.injection).enhancedProfileNFTAvatar) === null || ref14 === void 0 ? void 0 : ref14.call(_injection9, signal1);
    (ref15 = (_injection10 = ui.injection).openNFTAvatar) === null || ref15 === void 0 ? void 0 : ref15.call(_injection10, signal1);
    (ref16 = (_injection11 = ui.injection).postAndReplyNFTAvatar) === null || ref16 === void 0 ? void 0 : ref16.call(_injection11, signal1);
    (ref17 = (_injection12 = ui.injection).collectionAvatar) === null || ref17 === void 0 ? void 0 : ref17.call(_injection12, signal1);
    (ref18 = (_injection13 = ui.injection).avatarClipNFT) === null || ref18 === void 0 ? void 0 : ref18.call(_injection13, signal1);
    (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return _shared__WEBPACK_IMPORTED_MODULE_3__/* .InMemoryStorages.Plugin.createSubScope */ .uU.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return _shared__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages.Plugin.createSubScope */ ._H.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.signWithPersona */ .ZP.Identity.signWithPersona,
            walletSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign,
            currentPersona: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .createSubscriptionFromAsync */ .Fd)(_extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _utils__WEBPACK_IMPORTED_MODULE_12__/* .MaskMessages.events.currentPersonaIdentifier.on */ .ql.events.currentPersonaIdentifier.on)
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__/* ["default"].addResource */ .Z.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        provider === null || provider === void 0 ? void 0 : provider.start(signal1);
        if (provider === null || provider === void 0 ? void 0 : provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal1.aborted) return;
                if (id.identifier.isUnknown) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.resolveIdentity */ .ZP.Identity.resolveIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        var ref24;
        const posts = (ref24 = ui.collecting.postsProvider) === null || ref24 === void 0 ? void 0 : ref24.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            var _injection, ref, _injection14, ref21, ref22, ref23;
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            (ref = (_injection = ui.injection).enhancedPostRenderer) === null || ref === void 0 ? void 0 : ref.call(_injection, postSignal, value);
            (ref21 = (_injection14 = ui.injection).postInspector) === null || ref21 === void 0 ? void 0 : ref21.call(_injection14, postSignal, value);
            (ref22 = ui.injection.commentComposition) === null || ref22 === void 0 ? void 0 : ref22.compositionBox(postSignal, value);
            (ref23 = ui.injection.commentComposition) === null || ref23 === void 0 ? void 0 : ref23.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                var _injection, ref;
                started = true;
                (ref = (_injection = ui.injection).setupWizard) === null || ref === void 0 ? void 0 : ref.call(_injection, signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .Identifier.fromString */ .xb.fromString(persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .ECKeyIdentifier */ .ob).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_11__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) { var ref; }
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 32338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ot": () => (/* binding */ definedSocialNetworkWorkersResolved),
/* harmony export */   "C8": () => (/* binding */ getNetworkWorker),
/* harmony export */   "Bu": () => (/* binding */ getNetworkWorkerUninitialized)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9758);


const definedSocialNetworkWorkersResolved = new Set();
async function activateNetworkWorker(id) {
    if (!(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground)) {
        throw new TypeError();
    }
    for (const each of definedSocialNetworkWorkersResolved){
        if (each.networkIdentifier === id) return each;
    }
    for (const each1 of _define__WEBPACK_IMPORTED_MODULE_0__/* .definedSocialNetworkWorkers */ .zq){
        if (each1.networkIdentifier === id) {
            const worker = (await each1.load()).default;
            definedSocialNetworkWorkersResolved.add(worker);
            return worker;
        }
    }
    throw new Error('Worker not found');
}
async function getNetworkWorker(network) {
    if (typeof network === 'string') return activateNetworkWorker(network);
    return getNetworkWorker(network.network);
}
function getNetworkWorkerUninitialized(network) {
    if (typeof network === 'string') return [
        ..._define__WEBPACK_IMPORTED_MODULE_0__/* .definedSocialNetworkWorkers */ .zq
    ].find((x)=>x.networkIdentifier === network
    );
    return getNetworkWorkerUninitialized(network.network);
}


/***/ }),

/***/ 47164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap)
/* harmony export */ });
/* unused harmony export ReadonlyIdentifierMap */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11924);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60232);


var _key;
var tmp = (_key = immer__WEBPACK_IMPORTED_MODULE_1__/* .immerable */ .sc, Symbol.iterator);
/**
 * The IdentifierMap is like a built-in Map<Identifier, T>.
 *
 * Because Identifier is not a value-type record so to make it behave like a value-type,
 * please use this class instead of Map<Identifier, T>.
 */ class IdentifierMap {
    get(key) {
        return this.__raw_map__.get(key.toText());
    }
    set(key, data) {
        if (!key) return this;
        if (this.constructorName.length) {
            if (!this.constructorName.includes(key.constructor.name)) {
                console.warn(`IdentifierMap found a invalid write try which violates the constraint ${this.constructorName}`, key);
                return this;
            }
        }
        this.__raw_map__.set(key.toText(), data);
        return this;
    }
    clear() {
        this.__raw_map__.clear();
    }
    delete(data) {
        return this.__raw_map__.delete(data.toText());
    }
    _identifierFromString(key) {
        const identifier = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(key);
        if (identifier.err) {
            console.warn('IdentifierMap found a key which cannot be converted into Identifier: ', identifier.val.message);
        } else {
            if (this.constructorName.length === 0) return identifier.val;
            if (this.constructorName.includes(identifier.val.constructor.name)) return identifier.val;
            console.warn(`IdentifierMap found a key which is not compatible with it constraint(${this.constructorName}), ${key}`);
        }
        return null;
    }
    *entries() {
        const iter = this.__raw_map__.entries();
        for (const [key, data] of iter){
            const identifier = this._identifierFromString(key);
            if (!identifier) continue;
            yield [
                identifier,
                data
            ];
        }
    }
    forEach(callbackfn, thisArg) {
        this.__raw_map__.forEach((value, key)=>{
            const i = this._identifierFromString(key);
            if (!i) return;
            callbackfn.call(thisArg, value, i, this);
        });
    }
    has(key) {
        return this.__raw_map__.has(key.toText());
    }
    *keys() {
        const iter = this.__raw_map__.keys();
        for (const key of iter){
            const i = this._identifierFromString(key);
            if (i) yield i;
            else continue;
        }
    }
    get size() {
        return [
            ...this.keys()
        ].length;
    }
    *values() {
        for (const [k, v] of this.entries())yield v;
    }
    [tmp]() {
        return this.entries();
    }
    /**
     *
     * @param __raw_map__ The origin data.
     * @param constructor The Identifier constructor. If provided, IdentifierMap will try to do a runtime check to make sure the identifier type is correct.
     */ constructor(__raw_map__, ...constructor){
        this.__raw_map__ = __raw_map__;
        this[_key] = true;
        this.constructorName = [];
        if (constructor) {
            this.constructorName = constructor.map((x)=>x.name
            );
        }
    }
}
IdentifierMap.prototype[Symbol.toStringTag] = 'IdentifierMap';
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = (/* unused pure expression or super */ null && (IdentifierMap));


/***/ }),

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* binding */ isTypedMessageAnchor),
/* harmony export */   "Jv": () => (/* binding */ makeTypedMessageAnchor),
/* harmony export */   "SY": () => (/* binding */ isWellKnownExtensionTypedMessages)
/* harmony export */ });
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45002);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30130);


const isTypedMessageAnchor = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: (0,_core__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(`[${content}](${href})`)
    };
}
//
const isWellKnownExtensionTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageAnchor);


/***/ }),

/***/ 12530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b5": () => (/* binding */ getKnownMetadataKeys),
/* harmony export */   "SJ": () => (/* binding */ getMetadataSchema),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32002);
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
    return metadataSchemaStore.has(key) ? (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(metadataSchemaStore.get(key)) : ts_results__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
}
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
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

/***/ 58500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage),
/* harmony export */   "Hz": () => (/* binding */ isTypedMessageEqual),
/* harmony export */   "Vc": () => (/* binding */ extractTextFromTypedMessage)
/* harmony export */ });
/* unused harmony export extractImageFromTypedMessage */
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5418);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30130);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28782);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79594);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94150);
/* harmony import */ var _transforms_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55021);
/* harmony import */ var _transforms_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78658);





function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    const y = x;
    if (y.serializable === false && y.alt) return true;
    return false;
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    if ((0,_core__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(message1)) {
        const msg1 = message1;
        const msg2 = message2;
        if (msg1.items.length !== msg2.items.length) return false;
        return msg1.items.every((item, index)=>isTypedMessageEqual(item, msg2.items[index])
        );
    }
    return (0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(message1, message2);
}
/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message) {
    if (!message) return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
    if ((0,_core__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageText */ .Rz)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(message.content);
    if ((0,_extension__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageAnchor */ .bj)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(message.content);
    if ((0,_core__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(message)) {
        const str = [];
        for (const item of message.items){
            const text = extractTextFromTypedMessage(item);
            if (text.some) str.push(text.val);
        }
        if (str.length) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(str.join(' '));
        return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
    }
    return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
}
function extractImageFromTypedMessage(message, result = []) {
    if (!message) return result;
    if (isTypedMessageImage(message)) return result.concat(message.image);
    if (isTypedMessageTuple(message)) return result.concat(message.items.flatMap((x)=>extractImageFromTypedMessage(x)
    ));
    return result;
}




/***/ }),

/***/ 10798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "$f": () => (/* binding */ ObservableWeakMap),
/* harmony export */   "vP": () => (/* binding */ ObservableMap),
/* harmony export */   "n7": () => (/* binding */ ObservableSet)
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

/***/ 86505:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vZ": () => (/* binding */ blobToArrayBuffer),
/* harmony export */   "n5": () => (/* binding */ blobToDataURL),
/* harmony export */   "Gx": () => (/* binding */ blobToText)
/* harmony export */ });
/* unused harmony exports blobToBinaryString, blobToStream */
const blobToArrayBuffer = factory('readAsArrayBuffer');
const blobToBinaryString = factory('readAsBinaryString');
const blobToDataURL = factory('readAsDataURL');
const blobToText = factory('readAsText');
function blobToStream(blob, chunkSize = 0x80000) {
    let position = 0;
    return new ReadableStream({
        async pull(controller) {
            const chunk = await blobToArrayBuffer(blob.slice(position, position + chunkSize));
            position += chunk.byteLength;
            controller.enqueue(new Uint8Array(chunk));
            if (position === blob.size) {
                controller.close();
            }
        },
    });
}
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