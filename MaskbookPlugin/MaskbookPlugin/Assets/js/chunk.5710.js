"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6435],{

/***/ 76435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59342);
/* harmony import */ var _base_deferred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25997);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62323);



const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    ..._base_deferred__WEBPACK_IMPORTED_MODULE_1__/* .baseDeferred */ .d,
    init (signal) {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 25997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ baseDeferred)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(62323);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.5710.js
var types = __webpack_require__(26428);
=======
var types = __webpack_require__(66632);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.6435.js
;// CONCATENATED MODULE: ./src/plugins/Trader/messages/TypedMessageCashTrending.tsx






const isCashTagMessage = (m)=>(0,typed_message/* isTypedMessageAnchor */.bj)(m) && [
        'cash',
        'hash'
    ].includes(m.category) && !/#\w+lbp$/i.test(m.content)
;
function makeTypedMessageCashTrending(message) {
    return {
        ...message,
        type: 'x-cash-trending',
        name: message.content.substr(1).toLowerCase()
    };
}
(0,typed_message/* registerTypedMessageRenderer */.vq)('x-cash-trending', {
    component: DefaultTypedMessageCashTrendingRenderer,
    id: 'com.maskbook.trader.x-cash-trending',
    priority: 0
});
function DefaultTypedMessageCashTrendingRenderer(props) {
    const [openTimer, setOpenTimer] = (0,react.useState)(null);
    const onMouseOver = (ev)=>{
        // cache for async operations
        const element = ev.currentTarget;
        if (openTimer !== null) clearTimeout(openTimer);
        setOpenTimer(setTimeout(async ()=>{
            if (props.message.category !== 'cash' && props.message.category !== 'hash') return;
            const { name , category  } = props.message;
            const type = category === 'cash' ? types/* TagType.CASH */.Qy.CASH : types/* TagType.HASH */.Qy.HASH;
            const dataProviders = await messages/* PluginTraderRPC.getAvailableDataProviders */.V.getAvailableDataProviders(type, name);
            const tradeProviders = await messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(type, name);
            if (!dataProviders.length) return;
            messages/* PluginTraderMessages.cashTagObserved.sendToLocal */.A.cashTagObserved.sendToLocal({
                name,
                type,
                element,
                dataProviders,
                tradeProviders
            });
        }, 500));
    };
    const onMouseLeave = (ev)=>{
        if (openTimer !== null) clearTimeout(openTimer);
    };
    const onClick = (ev)=>{
        ev.stopPropagation();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "span",
        color: "textPrimary",
        variant: "body1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: props.message.href,
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
            children: props.message.content
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/base-deferred.ts

const baseDeferred = {
    typedMessageTransformer (message) {
        return {
            ...message,
            items: message.items.map((m)=>isCashTagMessage(m) ? makeTypedMessageCashTrending(m) : m
            )
        };
    }
};


/***/ }),

/***/ 62323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71765);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(5480)]).then(__webpack_require__.bind(__webpack_require__, 88105))
, PluginTraderMessages.rpc);


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.5710.js
/***/ 26428:
=======
/***/ 66632:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.6435.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "z4": () => (/* reexport */ src/* TradeProvider */.z4),
  "tB": () => (/* reexport */ TradeStrategy),
  "Os": () => (/* reexport */ WarningLevel),
  "Zy": () => (/* reexport */ ZrxTradePool)
});

// UNUSED EXPORTS: NetworkType

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var src = __webpack_require__(95142);
;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts

var WarningLevel;
(function(WarningLevel1) {
    WarningLevel1[WarningLevel1["LOW"] = 1] = "LOW";
    WarningLevel1[WarningLevel1["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel1[WarningLevel1["HIGH"] = 3] = "HIGH";
    WarningLevel1[WarningLevel1["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel1[WarningLevel1["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {
}));
var ZrxTradePool;
(function(ZrxTradePool1) {
    ZrxTradePool1["ZRX"] = '0x';
    ZrxTradePool1["ACryptoS"] = 'ACryptoS';
    ZrxTradePool1["ApeSwap"] = 'ApeSwap';
    ZrxTradePool1["BakerySwap"] = 'BakerySwap';
    ZrxTradePool1["Balancer"] = 'Balancer';
    ZrxTradePool1["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool1["Bancor"] = 'Bancor';
    ZrxTradePool1["Belt"] = 'Belt';
    ZrxTradePool1["CafeSwap"] = 'CafeSwap';
    ZrxTradePool1["CheeseSwap"] = 'CheeseSwap';
    ZrxTradePool1["ComethSwap"] = 'ComethSwap';
    ZrxTradePool1["Component"] = 'Component';
    ZrxTradePool1["Cream"] = 'CREAM';
    ZrxTradePool1["CryptoCom"] = 'CryptoCom';
    ZrxTradePool1["Curve"] = 'Curve';
    ZrxTradePool1["CurveV2"] = 'Curve_V2';
    ZrxTradePool1["Dfyn"] = 'Dfyn';
    ZrxTradePool1["Dodo"] = 'DODO';
    ZrxTradePool1["DodoV2"] = 'DODO_V2';
    ZrxTradePool1["Ellipsis"] = 'Ellipsis';
    ZrxTradePool1["Eth2Dai"] = 'Eth2Dai';
    ZrxTradePool1["FirebirdOneSwap"] = 'FirebirdOneSwap';
    ZrxTradePool1["IronSwap"] = 'IronSwap';
    ZrxTradePool1["JetSwap"] = 'JetSwap';
    ZrxTradePool1["JulSwap"] = 'JulSwap';
    ZrxTradePool1["Kyber"] = 'Kyber';
    ZrxTradePool1["KyberDMM"] = 'KyberDMM';
    ZrxTradePool1["Lido"] = 'Lido';
    ZrxTradePool1["Linkswap"] = 'Linkswap';
    ZrxTradePool1["LiquidityProvider"] = 'LiquidityProvider';
    ZrxTradePool1["MStable"] = 'mStable';
    ZrxTradePool1["MakerPsm"] = 'MakerPsm';
    ZrxTradePool1["Mesh"] = 'Mesh';
    ZrxTradePool1["Mooniswap"] = 'Mooniswap';
    ZrxTradePool1["MultiBridge"] = 'MultiBridge';
    ZrxTradePool1["MultiHop"] = 'MultiHop';
    ZrxTradePool1["Native"] = 'Native';
    ZrxTradePool1["Nerve"] = 'Nerve';
    ZrxTradePool1["Oasis"] = 'Oasis';
    ZrxTradePool1["PancakeSwap"] = 'PancakeSwap';
    ZrxTradePool1["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool1["QuickSwap"] = 'QuickSwap';
    ZrxTradePool1["Saddle"] = 'Saddle';
    ZrxTradePool1["Shell"] = 'Shell';
    ZrxTradePool1["Smoothy"] = 'Smoothy';
    ZrxTradePool1["SnowSwap"] = 'SnowSwap';
    ZrxTradePool1["SushiSwap"] = 'SushiSwap';
    ZrxTradePool1["Swerve"] = 'Swerve';
    ZrxTradePool1["Uniswap"] = 'Uniswap';
    ZrxTradePool1["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool1["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool1["WaultSwap"] = 'WaultSwap';
    ZrxTradePool1["xSigma"] = 'xSigma';
})(ZrxTradePool || (ZrxTradePool = {
}));
var TradeStrategy;
(function(TradeStrategy1) {
    TradeStrategy1[TradeStrategy1["ExactIn"] = 0] = "ExactIn";
    TradeStrategy1[TradeStrategy1["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {
}));
var TokenPanelType;
(function(TokenPanelType1) {
    TokenPanelType1[TokenPanelType1["Input"] = 0] = "Input";
    TokenPanelType1[TokenPanelType1["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType1) {
    TagType1[TagType1["CASH"] = 1] = "CASH";
    TagType1[TagType1["HASH"] = 2] = "HASH";
})(TagType || (TagType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts








/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
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
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
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
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
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


/***/ })

}]);