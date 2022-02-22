"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[376],{

/***/ 50376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85473);
/* harmony import */ var _base_deferred__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40626);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93179);



const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    ..._base_deferred__WEBPACK_IMPORTED_MODULE_1__/* .baseDeferred */ .d,
    init (signal) {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 40626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ baseDeferred)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(93179);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var types = __webpack_require__(80632);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 2 modules
var typed_message = __webpack_require__(283);
;// CONCATENATED MODULE: ./src/plugins/Trader/messages/TypedMessageCashTrending.tsx








const isCashTagMessage = (m)=>(0,src/* isTypedMessageAnchor */.bj)(m) && [
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
    const chainId = (0,useChainId/* useChainId */.xx)();
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
            const tradeProviders = await messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(chainId);
            if (!dataProviders.length) return;
            messages/* PluginTraderMessages.cashTagObserved.sendToLocal */.A.cashTagObserved.sendToLocal({
                name,
                type,
                element,
                dataProviders
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

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57534);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(584)]).then(__webpack_require__.bind(__webpack_require__, 56277))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 80632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qy": () => (/* reexport */ TagType),
  "Vo": () => (/* reexport */ TokenPanelType),
  "tB": () => (/* reexport */ TradeStrategy),
  "Os": () => (/* reexport */ WarningLevel),
  "Zy": () => (/* reexport */ ZrxTradePool)
});

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trader.ts
var WarningLevel;
(function(WarningLevel) {
    WarningLevel[WarningLevel["LOW"] = 1] = "LOW";
    WarningLevel[WarningLevel["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel[WarningLevel["HIGH"] = 3] = "HIGH";
    WarningLevel[WarningLevel["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel[WarningLevel["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {}));
var ZrxTradePool;
(function(ZrxTradePool) {
    ZrxTradePool["ZRX"] = '0x';
    ZrxTradePool["ACryptoS"] = 'ACryptoS';
    ZrxTradePool["ApeSwap"] = 'ApeSwap';
    ZrxTradePool["BakerySwap"] = 'BakerySwap';
    ZrxTradePool["Balancer"] = 'Balancer';
    ZrxTradePool["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool["Bancor"] = 'Bancor';
    ZrxTradePool["Belt"] = 'Belt';
    ZrxTradePool["CafeSwap"] = 'CafeSwap';
    ZrxTradePool["CheeseSwap"] = 'CheeseSwap';
    ZrxTradePool["ComethSwap"] = 'ComethSwap';
    ZrxTradePool["Component"] = 'Component';
    ZrxTradePool["Cream"] = 'CREAM';
    ZrxTradePool["CryptoCom"] = 'CryptoCom';
    ZrxTradePool["Curve"] = 'Curve';
    ZrxTradePool["CurveV2"] = 'Curve_V2';
    ZrxTradePool["Dfyn"] = 'Dfyn';
    ZrxTradePool["Dodo"] = 'DODO';
    ZrxTradePool["DodoV2"] = 'DODO_V2';
    ZrxTradePool["Ellipsis"] = 'Ellipsis';
    ZrxTradePool["Eth2Dai"] = 'Eth2Dai';
    ZrxTradePool["FirebirdOneSwap"] = 'FirebirdOneSwap';
    ZrxTradePool["IronSwap"] = 'IronSwap';
    ZrxTradePool["JetSwap"] = 'JetSwap';
    ZrxTradePool["JulSwap"] = 'JulSwap';
    ZrxTradePool["Kyber"] = 'Kyber';
    ZrxTradePool["KyberDMM"] = 'KyberDMM';
    ZrxTradePool["Lido"] = 'Lido';
    ZrxTradePool["Linkswap"] = 'Linkswap';
    ZrxTradePool["LiquidityProvider"] = 'LiquidityProvider';
    ZrxTradePool["MStable"] = 'mStable';
    ZrxTradePool["MakerPsm"] = 'MakerPsm';
    ZrxTradePool["Mesh"] = 'Mesh';
    ZrxTradePool["Mooniswap"] = 'Mooniswap';
    ZrxTradePool["MultiBridge"] = 'MultiBridge';
    ZrxTradePool["MultiHop"] = 'MultiHop';
    ZrxTradePool["Native"] = 'Native';
    ZrxTradePool["Nerve"] = 'Nerve';
    ZrxTradePool["Oasis"] = 'Oasis';
    ZrxTradePool["PancakeSwap"] = 'PancakeSwap';
    ZrxTradePool["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool["QuickSwap"] = 'QuickSwap';
    ZrxTradePool["Saddle"] = 'Saddle';
    ZrxTradePool["Shell"] = 'Shell';
    ZrxTradePool["Smoothy"] = 'Smoothy';
    ZrxTradePool["SnowSwap"] = 'SnowSwap';
    ZrxTradePool["SushiSwap"] = 'SushiSwap';
    ZrxTradePool["Swerve"] = 'Swerve';
    ZrxTradePool["Uniswap"] = 'Uniswap';
    ZrxTradePool["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool["WaultSwap"] = 'WaultSwap';
    ZrxTradePool["xSigma"] = 'xSigma';
    ZrxTradePool["TraderJoe"] = 'TraderJoe';
    ZrxTradePool["PangolinDex"] = 'PangolinDex';
    ZrxTradePool["Trisolaris"] = 'Trisolaris';
    ZrxTradePool["WannaSwap"] = 'WannaSwap';
})(ZrxTradePool || (ZrxTradePool = {}));
var TradeStrategy;
(function(TradeStrategy) {
    TradeStrategy[TradeStrategy["ExactIn"] = 0] = "ExactIn";
    TradeStrategy[TradeStrategy["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {}));
var TokenPanelType;
(function(TokenPanelType) {
    TokenPanelType[TokenPanelType["Input"] = 0] = "Input";
    TokenPanelType[TokenPanelType["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/trending.ts
var TagType;
(function(TagType) {
    TagType[TagType["CASH"] = 1] = "CASH";
    TagType[TagType["HASH"] = 2] = "HASH";
})(TagType || (TagType = {}));

;// CONCATENATED MODULE: ./src/plugins/Trader/types/index.ts










/***/ }),

/***/ 283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts

function getTypedMessageContent(message) {
    if ((0,src/* isTypedMessageText */.Rz)(message)) return message.content;
    if ((0,src/* isTypedMessageAnchor */.bj)(message)) return message.href;
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




/***/ })

}]);