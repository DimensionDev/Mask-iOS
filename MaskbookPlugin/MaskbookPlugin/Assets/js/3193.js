"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3193],{

/***/ 53921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports getDimensionAsPNG, getDimensionAsJPEG, loadImage */
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31216);

/* eslint-disable no-bitwise */
function getDimensionAsPNG(buf) {
    const view = new DataView(buf, 0, 28);
    return { width: view.getInt32(16), height: view.getInt32(20) };
}
/**
 * Get dimension of a JPEG image
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */
function getDimensionAsJPEG(buf) {
    const MAGIC_1 = Uint8Array.of(0xff, 0xd8, 0xff, 0xe0);
    const MAGIC_2 = Uint8Array.of(0x4a, 0x46, 0x49, 0x46, 0x00);
    const view = new DataView(buf);
    let index = 0;
    if (!isEuqals(buf.slice(index, index + 4), MAGIC_1)) {
        return;
    }
    index += 4;
    if (!isEuqals(buf.slice(index + 2, index + 6), MAGIC_2)) {
        return;
    }
    let blockLength = view.getUint8(index) * 256 + view.getUint8(index + 1);
    while (index < view.byteLength) {
        index += blockLength;
        if (index >= view.byteLength)
            return;
        if (view.getUint8(index) !== 0xff)
            return;
        const marker = view.getUint8(index + 1); // SOF0 / SOF2 marker
        if (!(marker === 0xc0 || marker === 0xc2)) {
            index += 2;
            blockLength = view.getUint8(index) * 256 + view.getUint8(index + 1);
            continue;
        }
        return {
            height: view.getUint8(index + 5) * 256 + view.getUint8(index + 6),
            width: view.getUint8(index + 7) * 256 + view.getUint8(index + 8),
        };
    }
}
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const source = new Image();
        source.addEventListener('error', reject);
        source.addEventListener('load', () => {
            resolve(source);
        });
        source.src = src;
    });
}
//# sourceMappingURL=image.js.map

/***/ }),

/***/ 24982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xe": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.xe),
/* harmony export */   "rj": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.rj),
/* harmony export */   "ll": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.YT),
/* harmony export */   "vZ": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.vZ),
/* harmony export */   "n5": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.n5),
/* harmony export */   "Gx": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.Gx),
/* harmony export */   "ky": () => (/* reexport safe */ _detect__WEBPACK_IMPORTED_MODULE_3__.ky),
/* harmony export */   "sS": () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_4__.sS),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_7__.J),
/* harmony export */   "P": () => (/* reexport safe */ _control_flow__WEBPACK_IMPORTED_MODULE_8__.P),
/* harmony export */   "t1": () => (/* reexport safe */ _control_flow__WEBPACK_IMPORTED_MODULE_8__.t),
/* harmony export */   "Yl": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_9__.Y)
/* harmony export */ });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31216);
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57244);
/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78742);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87519);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85038);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53921);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34834);
/* harmony import */ var _control_flow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39065);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71898);












//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ku": () => (/* reexport safe */ _0x__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "qN": () => (/* reexport safe */ _0x__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "Ru": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.Ru),
/* harmony export */   "jg": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.jg),
/* harmony export */   "s9": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.s9),
/* harmony export */   "yC": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.yC),
/* harmony export */   "u7": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.u7),
/* harmony export */   "QQ": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.QQ),
/* harmony export */   "fI": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.fI),
/* harmony export */   "r2": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.r2),
/* harmony export */   "L4": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.L4),
/* harmony export */   "qT": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.qT),
/* harmony export */   "PM": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.PM),
/* harmony export */   "ag": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.ag),
/* harmony export */   "rV": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.rV),
/* harmony export */   "rI": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.rI),
/* harmony export */   "IS": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.IS),
/* harmony export */   "Wg": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Wg),
/* harmony export */   "J2": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.J2),
/* harmony export */   "wh": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.wh),
/* harmony export */   "lA": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.lA),
/* harmony export */   "EV": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.EV),
/* harmony export */   "Nd": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Nd),
/* harmony export */   "Q9": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Q9),
/* harmony export */   "Bq": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Bq),
/* harmony export */   "bi": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.bi),
/* harmony export */   "DX": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.DX),
/* harmony export */   "xh": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.xh),
/* harmony export */   "zl": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.zl),
/* harmony export */   "V1": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.V1),
/* harmony export */   "hb": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.hb),
/* harmony export */   "Ey": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.Ey),
/* harmony export */   "J3": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.J3),
/* harmony export */   "NU": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.NU),
/* harmony export */   "S5": () => (/* reexport safe */ _sushiswap__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "vZ": () => (/* reexport safe */ _sushiswap__WEBPACK_IMPORTED_MODULE_5__.v),
/* harmony export */   "yo": () => (/* reexport safe */ _sashimiswap__WEBPACK_IMPORTED_MODULE_6__.y),
/* harmony export */   "D9": () => (/* reexport safe */ _sashimiswap__WEBPACK_IMPORTED_MODULE_6__.D),
/* harmony export */   "PE": () => (/* reexport safe */ _quickswap__WEBPACK_IMPORTED_MODULE_7__.P),
/* harmony export */   "jM": () => (/* reexport safe */ _quickswap__WEBPACK_IMPORTED_MODULE_7__.j),
/* harmony export */   "Dh": () => (/* reexport safe */ _pancakeswap__WEBPACK_IMPORTED_MODULE_8__.D),
/* harmony export */   "tm": () => (/* reexport safe */ _pancakeswap__WEBPACK_IMPORTED_MODULE_8__.t),
/* harmony export */   "bC": () => (/* reexport safe */ _dodo__WEBPACK_IMPORTED_MODULE_9__.b)
/* harmony export */ });
/* harmony import */ var _0x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35238);
/* harmony import */ var _uniswap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42848);
/* harmony import */ var _balancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70287);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43148);
/* harmony import */ var _trending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67531);
/* harmony import */ var _sushiswap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55870);
/* harmony import */ var _sashimiswap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40325);
/* harmony import */ var _quickswap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10775);
/* harmony import */ var _pancakeswap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87138);
/* harmony import */ var _dodo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45088);












/***/ }),

/***/ 37131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PS": () => (/* binding */ createInternalSettings),
/* harmony export */   "TI": () => (/* binding */ createGlobalSettings),
/* harmony export */   "Lk": () => (/* binding */ createNetworkSettings)
/* harmony export */ });
/* unused harmony export texts */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76898);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13017);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98621);




const texts = new WeakMap();
const cached = new Map();
const lastEventId = new Map();
if ((0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.Environment.ManifestBackground)) {
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.on */ .y.events.createInternalSettingsChanged.on(async (payload)=>{
        const { id , key , value , initial  } = payload;
        const stored = await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.getStorage */ .ZP.Helper.getStorage(key);
        if (!initial || initial && typeof stored === 'undefined') await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.setStorage */ .ZP.Helper.setStorage(key, value);
        const updated = await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.getStorage */ .ZP.Helper.getStorage(key);
        if (typeof updated === 'undefined') return;
        _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsUpdated.sendToAll */ .y.events.createInternalSettingsUpdated.sendToAll({
            id,
            key,
            value: updated,
            initial
        });
    });
}
_utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsUpdated.on */ .y.events.createInternalSettingsUpdated.on(async (payload)=>{
    const { id , key , value  } = payload;
    const settings = cached.get(key);
    if (!settings) return;
    var ref;
    if (((ref = lastEventId.get(key)) !== null && ref !== void 0 ? ref : 0) > id) return;
    settings.value = value;
    settings.resolve(settings.value);
});
function createInternalSettings(key, value, comparer = (a, b)=>a === b
) {
    const settings = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.ValueRef(value, comparer);
    const [readyPromise, resolve, reject] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .defer */ .PQ)();
    Object.assign(settings, {
        key,
        ready: false,
        readyPromise,
        resolve,
        reject
    });
    const id = Date.now();
    cached.set(key, settings);
    lastEventId.set(key, id);
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.sendToAll */ .y.events.createInternalSettingsChanged.sendToAll({
        id,
        key,
        value,
        initial: true
    });
    settings.addListener((newVal)=>{
        const id1 = Date.now();
        lastEventId.set(key, id1);
        _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.sendToAll */ .y.events.createInternalSettingsChanged.sendToAll({
            id: id1,
            key,
            value: newVal,
            initial: false
        });
    });
    return settings;
}
function createGlobalSettings(key, value, UITexts, comparer = (a, b)=>a === b
) {
    const settings = createInternalSettings(`settings+${key}`, value, comparer);
    texts.set(settings, UITexts);
    return settings;
}
function createNetworkSettings(settingsKey, defaultValue) {
    const cached1 = {
    };
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createNetworkSettingsReady.on */ .y.events.createNetworkSettingsReady.on((networkKey)=>{
        if (networkKey.startsWith('plugin:') || settingsKey === 'pluginsEnabled') return;
        if (!(networkKey in cached1)) cached1[networkKey] = createInternalSettings(`${networkKey}+${settingsKey}`, defaultValue);
    });
    return new Proxy(cached1, {
        get (target, networkKey) {
            if (!(networkKey in target)) {
                const settings = createInternalSettings(`${networkKey}+${settingsKey}`, defaultValue);
                target[networkKey] = settings;
                settings.readyPromise.then(()=>_utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createNetworkSettingsReady.sendToAll */ .y.events.createNetworkSettingsReady.sendToAll(networkKey)
                );
            }
            return target[networkKey];
        },
        set (target, settingKey, value) {
            const settings = target[settingKey];
            settings.value = value;
            return true;
        }
    });
}


/***/ }),

/***/ 93621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42788);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45367);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_IDENTIFIER */ .J3,
    icon: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ICON */ .E0,
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
            networks: {
            }
        },
        target: 'stable'
    },
    management: {
        alwaysOn: true
    },
    i18n: _locales__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .Mj
};


/***/ }),

/***/ 30646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_2__.wT),
/* harmony export */   "Ds": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_2__.Ds),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7714);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13325);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15497);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24513);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10525);








const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()({
    root: {
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.textLight */ .ZN.textLight,
        pointerEvents: 'inherit'
    },
    success: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.greenMain */ .ZN.greenMain,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    error: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.redMain */ .ZN.redMain,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    info: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.secondaryInfoText */ .ZN.secondaryInfoText,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    warning: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.warning */ .ZN.warning,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    }
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles();
    const onDismiss = (key)=>{
        return ()=>{
            var ref1;
            (ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.closeSnackbar(key);
        };
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        hideIconVariant: true,
        action: (key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
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
        children: children
    }));
});


/***/ }),

/***/ 14967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HV": () => (/* binding */ useEthereumConstants),
/* harmony export */   "N_": () => (/* binding */ useGitcoinConstants),
/* harmony export */   "af": () => (/* binding */ getITOConstants),
/* harmony export */   "mg": () => (/* binding */ useITOConstants),
/* harmony export */   "Hk": () => (/* binding */ getLBPConstants),
/* harmony export */   "GV": () => (/* binding */ getRedPacketConstants),
/* harmony export */   "AA": () => (/* binding */ useRedPacketConstants),
/* harmony export */   "aV": () => (/* binding */ getTokenConstants),
/* harmony export */   "kd": () => (/* binding */ useTokenConstants),
/* harmony export */   "Gr": () => (/* binding */ getTraderConstants),
/* harmony export */   "L7": () => (/* binding */ useTraderConstants),
/* harmony export */   "$o": () => (/* binding */ getTrendingConstants),
/* harmony export */   "t0": () => (/* binding */ getRPCConstants),
/* harmony export */   "j8": () => (/* binding */ useRPCConstants),
/* harmony export */   "hy": () => (/* binding */ useTokenAssetBaseURLConstants),
/* harmony export */   "tL": () => (/* binding */ usePoolTogetherConstants),
/* harmony export */   "JH": () => (/* binding */ useGoodGhostingConstants),
/* harmony export */   "DJ": () => (/* binding */ FAKE_SIGN_PASSWORD)
/* harmony export */ });
/* unused harmony exports getAirdropConstants, useAirdropConstants, getEthereumConstants, getGitcoinConstants, useLBPConstants, useTrendingConstants, getTokenAssetBaseURLConstants, getPoolTogetherConstants, getGoodGhostingConstants, getOpenseaAPIConstants, useOpenseaAPIConstants */
/* harmony import */ var _masknet_web3_constants_data_airdrop_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51104);
/* harmony import */ var _masknet_web3_constants_data_ethereum_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43973);
/* harmony import */ var _masknet_web3_constants_data_gitcoin_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57906);
/* harmony import */ var _masknet_web3_constants_data_ito_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54212);
/* harmony import */ var _masknet_web3_constants_data_lbp_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47068);
/* harmony import */ var _masknet_web3_constants_data_red_packet_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50781);
/* harmony import */ var _masknet_web3_constants_data_token_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32914);
/* harmony import */ var _masknet_web3_constants_data_trader_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90697);
/* harmony import */ var _masknet_web3_constants_data_trending_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12124);
/* harmony import */ var _masknet_web3_constants_data_rpc_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62424);
/* harmony import */ var _masknet_web3_constants_data_pooltogether_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44563);
/* harmony import */ var _masknet_web3_constants_data_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23815);
/* harmony import */ var _masknet_web3_constants_data_good_ghosting_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72108);
/* harmony import */ var _masknet_web3_constants_data_opensea_api_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38150);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22599);















const getAirdropConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_airdrop_json__WEBPACK_IMPORTED_MODULE_0__);
const useAirdropConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getAirdropConstants);
const getEthereumConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_ethereum_json__WEBPACK_IMPORTED_MODULE_1__);
const useEthereumConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getEthereumConstants);
const getGitcoinConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_gitcoin_json__WEBPACK_IMPORTED_MODULE_2__);
const useGitcoinConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getGitcoinConstants);
const getITOConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_ito_json__WEBPACK_IMPORTED_MODULE_3__);
const useITOConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getITOConstants);
const getLBPConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_lbp_json__WEBPACK_IMPORTED_MODULE_4__);
const useLBPConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getLBPConstants);
const getRedPacketConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_red_packet_json__WEBPACK_IMPORTED_MODULE_5__);
const useRedPacketConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getRedPacketConstants);
const getTokenConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_token_json__WEBPACK_IMPORTED_MODULE_6__);
const useTokenConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTokenConstants);
const getTraderConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_trader_json__WEBPACK_IMPORTED_MODULE_7__);
const useTraderConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTraderConstants);
const getTrendingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_trending_json__WEBPACK_IMPORTED_MODULE_8__);
const useTrendingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTrendingConstants);
var _WEB3_CONSTANTS_RPC;
const getRPCConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transformFromJSON */ .rm)((_WEB3_CONSTANTS_RPC = "{\"RPC\":{\"Mainnet\":[\"https://damp-holy-water.quiknode.pro/d5bcb6c5e265afd11fecb0d52275afa961487a29/\",\"https://mainnet.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\",\"https://throbbing-blue-bird.quiknode.io/73e66978-1a45-4f91-97f3-25d59b51a00e/YScEAjYfzZqNphokjzn-Zt3sZsOd0Nav5sauA3j03se0LOseR8PQFyBfINzhYStWrg44VfLLfCFE34FR2CA_kQ==/\"],\"Ropsten\":[\"https://ropsten.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Rinkeby\":[\"https://rinkeby.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Kovan\":[\"https://kovan.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Gorli\":[\"https://goerli.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"BSC\":[\"https://bsc-dataseed.binance.org/\"],\"BSCT\":[\"https://data-seed-prebsc-1-s1.binance.org:8545/\"],\"Matic\":[\"https://polygon-mainnet.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\"],\"Mumbai\":[\"https://polygon-mumbai.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\"],\"Arbitrum\":[\"https://arb1.arbitrum.io/rpc\"],\"Arbitrum_Rinkeby\":[\"https://rinkeby.arbitrum.io/rpc\"]},\"RPC_WEIGHTS\":{\"Mainnet\":[0,1,1,2],\"Ropsten\":[0,0,0,0],\"Rinkeby\":[0,0,0,0],\"Kovan\":[0,0,0,0],\"Gorli\":[0,0,0,0],\"BSC\":[0,0,0,0],\"BSCT\":[0,0,0,0],\"Matic\":[0,0,0,0],\"Mumbai\":[0,0,0,0],\"Arbitrum\":[0,0,0,0],\"Arbitrum_Rinkeby\":[0,0,0,0]}}") !== null && _WEB3_CONSTANTS_RPC !== void 0 ? _WEB3_CONSTANTS_RPC : '', _masknet_web3_constants_data_rpc_json__WEBPACK_IMPORTED_MODULE_9__);
const useRPCConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getRPCConstants);
const getTokenAssetBaseURLConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_11__);
const useTokenAssetBaseURLConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTokenAssetBaseURLConstants);
const getPoolTogetherConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_pooltogether_json__WEBPACK_IMPORTED_MODULE_10__);
const usePoolTogetherConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getPoolTogetherConstants);
const getGoodGhostingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_good_ghosting_json__WEBPACK_IMPORTED_MODULE_12__);
const useGoodGhostingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getGoodGhostingConstants);
const getOpenseaAPIConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_opensea_api_json__WEBPACK_IMPORTED_MODULE_13__);
const useOpenseaAPIConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getOpenseaAPIConstants);
// for estimate gas
const FAKE_SIGN_PASSWORD = '0x75466cc969717b172b14253aaeebdc958f2b5037a852c1337650ed4978242dd9';


/***/ }),

/***/ 69509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xx": () => (/* binding */ useChainId),
/* harmony export */   "as": () => (/* binding */ useChainIdValid)
/* harmony export */ });
/* unused harmony exports useChainIdMatched, useChainIDAvailable */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59793);


/**
 * Get the chain id which is using by the given (or default) wallet
 * It will always yield Mainnet in production mode
 */ function useChainId() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().chainId;
}
/**
 * Returns true if chain id is available
 */ function useChainIdValid() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().chainIdValid;
}
/**
 * Returns true if the currenct chain id is matched with the given one
 * @param chainId
 * @returns
 */ function useChainIdMatched(chainId) {
    const chainDetailed = useChainDetailed();
    if (!chainId) return false;
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chainId) === chainId;
}
const useChainIDAvailable = (/* unused pure expression or super */ null && (useChainId));


/***/ }),

/***/ 6484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useERC721ContractDetailed */
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20913);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14967);






function useERC721ContractDetailed(address) {
    const chainId = useChainId();
    const { GET_CONTRACT_URL  } = useOpenseaAPIConstants();
    const erc721TokenContract = useERC721TokenContract(address);
    return useAsyncRetry(async ()=>{
        if (!EthereumAddress.isValid(address) || !erc721TokenContract) return;
        if (!GET_CONTRACT_URL) return getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
        const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
        return contractDetailedFromOpensea !== null && contractDetailedFromOpensea !== void 0 ? contractDetailedFromOpensea : getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
    }, [
        chainId,
        erc721TokenContract,
        address
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    var ref, ref1, ref2;
    const results = await Promise.allSettled([
        (ref = safeNonPayableTransactionCall(erc721TokenContract.methods.name())) !== null && ref !== void 0 ? ref : lazyBlank,
        (ref1 = safeNonPayableTransactionCall(erc721TokenContract.methods.symbol())) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (ref2 = safeNonPayableTransactionCall(erc721TokenContract.methods.baseURI())) !== null && ref2 !== void 0 ? ref2 : lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return createERC721ContractDetailed(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return createERC721ContractDetailed(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}


/***/ }),

/***/ 64507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useERC721TokenDetailed, getERC721TokenDetailedFromOpensea, getERC721TokenDetailedFromChain */
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20913);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14967);




function useERC721TokenDetailed(contractDetailed, tokenId) {
    const { GET_SINGLE_ASSET_URL  } = useOpenseaAPIConstants();
    var ref;
    const erc721TokenContract = useERC721TokenContract((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    return useAsyncRetry(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) return getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
        const tokenDetailedFromOpensea = await getERC721TokenDetailedFromOpensea(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
        return tokenDetailedFromOpensea !== null && tokenDetailedFromOpensea !== void 0 ? tokenDetailedFromOpensea : getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
    }, [
        erc721TokenContract,
        tokenId
    ]);
}
async function getERC721TokenDetailedFromOpensea(contractDetailed, tokenId, apiUrl) {
    const response = await fetch(`${apiUrl}/${contractDetailed.address}/${tokenId}`);
    if (response.ok) {
        const data = await response.json();
        return createERC721Token(contractDetailed, {
            name: data.name,
            description: data.description,
            image: data.image_url,
            owner: data.top_ownerships[0].owner.address
        }, tokenId);
    }
    return null;
}
async function getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId) {
    if (!contractDetailed) return;
    const tokenURI = await safeNonPayableTransactionCall(erc721TokenContract.methods.tokenURI(tokenId));
    const owner = await safeNonPayableTransactionCall(erc721TokenContract.methods.ownerOf(tokenId));
    const asset = await getERC721TokenAssetFromChain(tokenURI);
    const tokenInfo = {
        owner,
        ...asset
    };
    return createERC721Token(contractDetailed, tokenInfo, tokenId);
}
const BASE64_PREFIX = 'data:application/json;base64,';
// Todo: replace this temporary proxy.
const CORS_PROXY = 'https://whispering-harbor-49523.herokuapp.com';
async function getERC721TokenAssetFromChain(tokenURI) {
    if (!tokenURI) return;
    // for some NFT tokens retrun JSON in base64 encoded
    if (tokenURI.startsWith(BASE64_PREFIX)) try {
        return JSON.parse(atob(tokenURI.replace(BASE64_PREFIX, '')));
    } catch (error) {
        void 0;
    }
    // for some NFT tokens return JSON
    try {
        return JSON.parse(tokenURI);
    } catch (error) {
        void 0;
    }
    // for some NFT tokens return an URL refers to a JSON file
    try {
        const response = await fetch(`${CORS_PROXY}/${tokenURI}`);
        const r = await response.json();
        return r;
    } catch (error) {
        void 0;
    }
    return;
}


/***/ }),

/***/ 12706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useERC721TokenDetailedCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64507);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14967);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20913);




function useERC721TokenDetailedCallback(contractDetailed) {
    const [tokenId, setTokenId] = useState('');
    const { GET_SINGLE_ASSET_URL  } = useOpenseaAPIConstants();
    var ref;
    const erc721TokenContract = useERC721TokenContract((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    const erc721TokenDetailedCallback = useCallback(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) return getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
        const tokenDetailedFromOpensea = await getERC721TokenDetailedFromOpensea(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
        return tokenDetailedFromOpensea !== null && tokenDetailedFromOpensea !== void 0 ? tokenDetailedFromOpensea : getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
    }, [
        getERC721TokenDetailedFromOpensea,
        getERC721TokenDetailedFromChain,
        tokenId,
        contractDetailed,
        erc721TokenContract,
        GET_SINGLE_ASSET_URL, 
    ]);
    return [
        tokenId,
        setTokenId,
        erc721TokenDetailedCallback
    ];
}


/***/ }),

/***/ 22194:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: useStableTokensDebank

// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainId.ts
var hooks_useChainId = __webpack_require__(69509);
;// CONCATENATED MODULE: ../web3-shared/src/assets/stable_coins.json
const stable_coins_namespaceObject = [];
// EXTERNAL MODULE: ../web3-shared/src/types/index.ts
var types = __webpack_require__(70626);
// EXTERNAL MODULE: ../web3-shared/src/utils/index.ts
var utils = __webpack_require__(98564);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useStableTokensDebank.ts




function useStableTokensDebank() {
    const chainId = useChainId();
    if (chainId !== ChainId.Mainnet) return [];
    return STABLE_COINS.map((x)=>createERC20Token(chainId, formatEthereumAddress(x.id), x.decimals, x.name, x.symbol)
    );
}


/***/ })

}]);