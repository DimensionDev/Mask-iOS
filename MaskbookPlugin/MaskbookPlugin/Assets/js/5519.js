"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5519.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5519],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3692],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/3692.js

/***/ 20583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ PayloadVersions)
/* harmony export */ });
var PayloadVersions;
(function(PayloadVersions1) {
    PayloadVersions1[PayloadVersions1['2/4'] = -40] = '2/4';
    PayloadVersions1[PayloadVersions1['3/4'] = -39] = '3/4';
    PayloadVersions1[PayloadVersions1['4/4'] = -38] = '4/4';
})(PayloadVersions || (PayloadVersions = {
}));


/***/ }),

/***/ 71067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ isTypedMessageTextV1),
/* harmony export */   "Rz": () => (/* binding */ isTypedMessageText),
/* harmony export */   "P": () => (/* binding */ makeTypedMessageText),
/* harmony export */   "No": () => (/* binding */ isTypedMessageImageV1),
/* harmony export */   "c0": () => (/* binding */ isTypedMessageImage),
/* harmony export */   "as": () => (/* binding */ makeTypedMessageImage),
/* harmony export */   "bZ": () => (/* binding */ isTypedMessageTuple),
/* harmony export */   "qT": () => (/* binding */ isTypedMessageTupleSerializable),
/* harmony export */   "Zw": () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   "n_": () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   "kT": () => (/* binding */ makeTypedMessageTupleSerializable),
/* harmony export */   "h6": () => (/* binding */ makeTypedMessageSerializableTupleFromList),
/* harmony export */   "bt": () => (/* binding */ isTypedMessageUnknown),
/* harmony export */   "mv": () => (/* binding */ makeTypedMessageUnknown),
/* harmony export */   "YN": () => (/* binding */ isTypedMessageEmpty),
/* harmony export */   "WM": () => (/* binding */ makeTypedMessageEmpty),
/* harmony export */   "KV": () => (/* binding */ isTypedMessagePromise),
/* harmony export */   "Ng": () => (/* binding */ makeTypedMessagePromise),
/* harmony export */   "q$": () => (/* binding */ isWellKnownCoreTypedMessages)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53009);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38999);


const isTypedMessageTextV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageTextV1);
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}
const isTypedMessageImageV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('image', 1);
const isTypedMessageImage = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageImageV1);
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size === null || size === void 0 ? void 0 : size.width,
        height: size === null || size === void 0 ? void 0 : size.height,
        meta
    };
}
const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils__WEBPACK_IMPORTED_MODULE_0__/* .isSerializableTypedMessage */ .fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}
const isTypedMessageUnknown = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('unknown');
function makeTypedMessageUnknown(raw, meta) {
    return {
        type: 'unknown',
        serializable: false,
        meta,
        raw
    };
}
const isTypedMessageEmpty = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('empty');
function makeTypedMessageEmpty(meta) {
    return {
        type: 'empty',
        serializable: true,
        version: 1,
        meta
    };
}
const isTypedMessagePromise = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise, meta) {
    return {
        type: 'promise',
        serializable: false,
        promise,
        meta
    };
}
//#endregion
const isWellKnownCoreTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageText, isTypedMessageImage, isTypedMessageTuple, isTypedMessageUnknown, isTypedMessagePromise);


/***/ }),

/***/ 19219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.bj),
/* harmony export */   "SY": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.SY),
/* harmony export */   "Jv": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.Jv),
/* harmony export */   "Vc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vc),
/* harmony export */   "fV": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.fV),
/* harmony export */   "Hz": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Hz),
/* harmony export */   "r6": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.r6),
/* harmony export */   "YN": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.YN),
/* harmony export */   "c0": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.c0),
/* harmony export */   "No": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.No),
/* harmony export */   "KV": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Rz),
/* harmony export */   "Po": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Po),
/* harmony export */   "bZ": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bZ),
/* harmony export */   "qT": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.qT),
/* harmony export */   "bt": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bt),
/* harmony export */   "q$": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.q$),
/* harmony export */   "WM": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Ng),
/* harmony export */   "h6": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.h6),
/* harmony export */   "P": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.n_),
/* harmony export */   "kT": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.kT),
/* harmony export */   "mv": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.mv),
/* harmony export */   "rK": () => (/* binding */ isWellKnownTypedMessages)
/* harmony export */ });
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59722);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38999);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71067);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53009);







const isWellKnownTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_3__/* .composeSome */ .Vm)(_core__WEBPACK_IMPORTED_MODULE_1__/* .isWellKnownCoreTypedMessages */ .q$, _extension__WEBPACK_IMPORTED_MODULE_0__/* .isWellKnownExtensionTypedMessages */ .SY);


/***/ }),

/***/ 53009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage),
/* harmony export */   "r6": () => (/* binding */ normalizeTypedMessage),
/* harmony export */   "Hz": () => (/* binding */ isTypedMessageEqual),
/* harmony export */   "Vc": () => (/* binding */ extractTextFromTypedMessage)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19219);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28782);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);



function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    const y = x;
    if (y.serializable === false && y.toJSON) return true;
    return false;
}
function normalizeTypedMessage(x) {
    return x;
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message1)) {
        const msg1 = message1;
        const msg2 = message2;
        if (msg1.items.length !== msg2.items.length) return false;
        return msg1.items.every((item, index)=>isTypedMessageEqual(item, msg2.items[index])
        );
    }
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(message1, message2);
}
/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message) {
    if (message === null) return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(message.content);
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageAnchor */ .bj)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(message.content);
    if ((0,___WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message)) {
        const str = [];
        for (const item of message.items){
            const text = extractTextFromTypedMessage(item);
            if (text.ok) str.push(text.val);
        }
        if (str.length) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(str.join(' '));
        return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
    }
    return ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err.EMPTY */ .UG.EMPTY;
}


/***/ }),

/***/ 72325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "$f": () => (/* binding */ ObservableWeakMap),
/* harmony export */   "vP": () => (/* binding */ ObservableMap),
/* harmony export */   "n7": () => (/* binding */ ObservableSet)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69260);


// Consider switch to libraries like Mobx if this file become too complex.
class ObservableWeakMap extends WeakMap {
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this.event.emit('set', key, value);
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
        this.event.emit('clear');
    }
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args1){
        super(...args1);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableSet extends Set {
    clear() {
        super.clear();
        this.event.emit('clear');
    }
    delete(key) {
        const _ = super.delete(key);
        this.event.emit('delete', key);
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x)
        );
        this.event.emit('add', value);
        return this;
    }
    constructor(...args2){
        super(...args2);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}


/***/ }),

/***/ 28532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* reexport safe */ _serializer__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "qD": () => (/* reexport safe */ _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "dM": () => (/* reexport safe */ _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__.d),
/* harmony export */   "Ko": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.Ko),
/* harmony export */   "vP": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.vP),
/* harmony export */   "n7": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.n7),
/* harmony export */   "$f": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.$f),
/* harmony export */   "eL": () => (/* reexport safe */ _MaskPayload__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   "ob": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.ob),
/* harmony export */   "xI": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xI),
/* harmony export */   "xb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xb),
/* harmony export */   "Np": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.Np),
/* harmony export */   "bb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.bb),
/* harmony export */   "_P": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__._P),
/* harmony export */   "WO": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.WO),
/* harmony export */   "N_": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "C9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "A9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.A9),
/* harmony export */   "Vc": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Vc),
/* harmony export */   "fV": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.fV),
/* harmony export */   "bj": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bj),
/* harmony export */   "YN": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.YN),
/* harmony export */   "Hz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Hz),
/* harmony export */   "c0": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.c0),
/* harmony export */   "No": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.No),
/* harmony export */   "KV": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Rz),
/* harmony export */   "Po": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Po),
/* harmony export */   "bZ": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bZ),
/* harmony export */   "qT": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.qT),
/* harmony export */   "bt": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bt),
/* harmony export */   "q$": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.q$),
/* harmony export */   "SY": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.SY),
/* harmony export */   "rK": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.rK),
/* harmony export */   "Jv": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Jv),
/* harmony export */   "WM": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Ng),
/* harmony export */   "h6": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.h6),
/* harmony export */   "P": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.n_),
/* harmony export */   "kT": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.kT),
/* harmony export */   "mv": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.mv),
/* harmony export */   "r6": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.r6),
/* harmony export */   "Hd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Hd),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.gw),
/* harmony export */   "Y0": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Y0),
/* harmony export */   "Lk": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Lk),
/* harmony export */   "s_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.s_),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Vs)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25906);
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40454);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72325);
/* harmony import */ var _MaskPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20583);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60979);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61289);
/* harmony import */ var _TypedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19219);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30796);













/***/ }),

/***/ 53387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseURL(text) {
    return anchorme__WEBPACK_IMPORTED_MODULE_0__/* .default.list */ .Z.list(text).map((x)=>x.string
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

/***/ 27931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SessionStorageCache)
/* harmony export */ });
const SessionStorageCache = {
    get (scope, key) {
        return sessionStorage.getItem(`${scope}:${key}`);
    },
    set (scope, key, value) {
        return sessionStorage.setItem(`${scope}:${key}`, value);
    },
    remove (scope, key) {
        return sessionStorage.removeItem(`${scope}:${key}`);
    }
};


/***/ }),

/***/ 19887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ CrashUI)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22593);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32027);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87505);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46754);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45795);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(90874);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86301);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96876);









function CrashUI({ onRetry , subject , ...error }) {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundaryBuildInfoContext */ .N);
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_3__/* .useSharedI18N */ .B_)();
    const [showStack, setShowStack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // crash report, will send to GitHub
    const reportTitle = `[Crash] ${error.type}: ${error.message}`;
    const reportBody = `<!--Thanks for the crash report!
Please write down what you're doing when the crash happened, that will help us to fix it easier!-->

I was *doing something...*, then Mask reports an error.

> ${error.message}

Error stack:

<pre>${error.stack}</pre>\n\n${context || ''}`;
    const githubLink = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const url = new URLSearchParams();
        url.set('title', reportTitle);
        url.set('body', reportBody);
        return `https://github.com/DimensionDev/Maskbook/issues/new?` + url.toString();
    }, [
        reportBody,
        reportTitle
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Root, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            severity: "error",
            variant: "outlined",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    children: t.error_boundary_crash_title({
                        subject
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ErrorTitle, {
                    children: [
                        error.type,
                        ": ",
                        error.message
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ActionArea, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                            variant: "contained",
                            color: "primary",
                            onClick: onRetry,
                            children: t.error_boundary_try_to_recover()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                            href: githubLink,
                            color: "primary",
                            target: "_blank",
                            children: t.error_boundary_report_github()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                            sx: {
                                flex: 1
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                            color: "inherit",
                            size: "small",
                            onClick: ()=>setShowStack((x)=>!x
                                )
                            ,
                            children: showStack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            })
                        })
                    ]
                }),
                showStack ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorStack, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
                        component: "pre",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", {
                            children: error.stack
                        })
                    })
                }) : null
            ]
        })
    }));
}
const Root = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    overflow-x: auto;
    flex: 1;
    width: 100%;
    contain: paint;
    margin-top: 16px;
`;
const ErrorTitle = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    user-select: text;
    margin-bottom: 8px;
`;
const ErrorStack = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    user-select: text;
    overflow-x: auto;
    contain: strict;
    height: 300px;
`;
const ActionArea = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP)('div')`
    display: flex;
    gap: 8px;
`;


/***/ }),

/***/ 86301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ ErrorBoundaryBuildInfoContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

/**
 * Please provide the build info text
 */ const ErrorBoundaryBuildInfoContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5519.js
/***/ 97331:
=======
/***/ 78852:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/3692.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ProviderIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5519.js
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22209);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70322);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52403);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35283);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5305);
=======
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6615);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34180);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68681);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4892);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89740);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/3692.js





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    icon: {
    }
});
function ProviderIcon(props) {
    const { size =40 , providerType  } = props;
    const classes = (0,_UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_3__/* .useStylesExtends */ .B)(useStyles(), props);
    switch(providerType){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.Maskbook */ .lP_.Maskbook:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MaskBlueIcon */ .I, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.MetaMask */ .lP_.MetaMask:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .MetaMaskIcon */ .n, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.WalletConnect */ .lP_.WalletConnect:
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .WalletConnectIcon */ .J, {
                classes: {
                    root: classes.icon
                },
                sx: {
                    fontSize: size
                }
            }));
        default:
            return null;
    }
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5519.js
/***/ 56752:
=======
/***/ 92045:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/3692.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ QRCode)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95191);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8286);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5101);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28532);








const CACHE_SCOPE = 'qrcode';
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        text: {
            paddingTop: 50
        },
        info: {
            color: theme.palette.mode === 'dark' ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_5__/* .default[800] */ .Z[800],
            extDecoration: 'underline',
            cursor: 'pointer'
        }
    })
);
function QRCode({ text , options ={
} , canvasProps  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const image = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.get */ .Hd.get(CACHE_SCOPE, text);
    const { classes  } = useStyles();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!ref.current || error) return;
        qrcode__WEBPACK_IMPORTED_MODULE_2__.toCanvas(ref.current, text, options, (err)=>{
            var ref1;
            if (err) {
                setError(true);
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.remove */ .Hd.remove(CACHE_SCOPE, text);
                throw err;
            }
            const dataURL = (ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.toDataURL();
            if (dataURL) {
                _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .SessionStorageCache.set */ .Hd.set(CACHE_SCOPE, text, dataURL);
            }
        });
    }, [
        options,
        text,
        error
    ]);
    return error ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                color: "textPrimary",
                variant: "body1",
                className: classes.text,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .Trans */ .c, {
                    i18nKey: "backup_qrcode_error",
                    components: {
                        again: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                            onClick: ()=>{
                                setError(false);
                            },
                            className: classes.info
                        })
                    }
                })
            })
        ]
    }) : image ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: image,
        ...canvasProps
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ...canvasProps,
        ref: ref
    });
}


/***/ }),

/***/ 26529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ TokenIcon),
  "v": () => (/* binding */ TokenIconUI)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/UI/index.ts + 2 modules
var UI = __webpack_require__(18324);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/TokenIconSpecialIconList.json
const TokenIconSpecialIconList_namespaceObject = JSON.parse('[{"name":"MASK","address":"0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3","logo_url":"https://dimensiondev.github.io/Maskbook-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg"},{"name":"MASK","address":"0x2B9E7ccDF0F4e5B24757c1E1a80e311E34Cb10c7","logo_url":"https://dimensiondev.github.io/Maskbook-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg"},{"name":"NEST","address":"0x04abEdA201850aC0124161F037Efd70c74ddC74C","logo_url":"https://s2.coinmarketcap.com/static/img/coins/64x64/5841.png"},{"name":"Yes KYC","address":"0x14de81C71B3F73874659082b971433514E201B27","logo_url":"https://etherscan.io/token/images/ykyctoken_32.png"},{"name":"cWBTC","address":"0xC11b1268C1A384e55C48c2391d8d480264A3A7F4","logo_url":"https://etherscan.io/token/images/compoundwrappedbtc_32.png"},{"name":"DANK","address":"0x0cB8D0B37C7487b11d57F1f33dEfA2B1d3cFccfE","logo_url":"https://etherscan.io/token/images/dank_32.png"},{"name":"DSCP","address":"0x03e3f0c25965f13DbbC58246738C183E27b26a56","logo_url":"https://etherscan.io/token/images/disciplina_28.png"},{"name":"GEE","address":"0x4F4f0Db4de903B88f2B1a2847971E231D54F8fd3","logo_url":"https://etherscan.io/token/images/geens_28.png"},{"name":"FKX","address":"0x009e864923b49263c7F10D19B7f8Ab7a9A5AAd33","logo_url":"https://etherscan.io/token/images/knoxstertoken_32.png?v=2"},{"name":"N0031","address":"0x075190c6130EA0a3A7E40802F1D77F4Ea8f38fE2","logo_url":"https://etherscan.io/token/images/nestyfi_32.png"},{"name":"NFC","address":"0xb0866289e870D2efc282406cF4123Df6E5BcB652","logo_url":"https://etherscan.io/token/images/nofaketoday_28.png"},{"name":"O3Swap","address":"0xEe9801669C6138E84bD50dEB500827b776777d28","logo_url":"https://etherscan.io/token/images/o3swaptoken_32.png"},{"name":"QTUM","address":"0x9a642d6b3368ddc662CA244bAdf32cDA716005BC","logo_url":"https://etherscan.io/token/images/qtum_28.png"},{"name":"REMI","address":"0x13cb85823f78Cff38f0B0E90D3e975b8CB3AAd64","logo_url":"https://etherscan.io/token/images/remiit_28.png"},{"name":"REDC","address":"0xB563300A3BAc79FC09B93b6F84CE0d4465A2AC27","logo_url":"https://etherscan.io/token/images/redcab_28.png"},{"name":"SBTC","address":"0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6","logo_url":"https://etherscan.io/token/images/Synthetixsbtc_32.png"},{"name":"TPT","address":"0xC596bD09d652827b0106292D3e378D5938df4B12","logo_url":"https://etherscan.io/token/images/009-TPT-Teleport-Token-Coin-Logo.png"},{"name":"TRL","address":"0xCed1A8529125D1bD06B54a7B01210df357D00885","logo_url":"https://etherscan.io/token/images/giraffage_28.png"},{"name":"UPX","address":"0x5f778ec4B31a506c1Dfd8b06F131E9B451a61D39","logo_url":"https://etherscan.io/token/images/udap_28.png"},{"name":"WYV","address":"0x056017c55aE7AE32d12AeF7C679dF83A85ca75Ff","logo_url":"https://etherscan.io/token/images/wyvern_28.png"},{"name":"VDOC","address":"0x82BD526bDB718C6d4DD2291Ed013A5186cAE2DCa","logo_url":"https://etherscan.io/token/images/vdoc_28.png"},{"name":"rSAI","address":"0xea8b224eDD3e342DEb514C4176c2E72Bcce6fFF9","logo_url":"https://etherscan.io/token/images/redeemabledai_32.png?v=2"},{"name":"ALICE","address":"0xAC51066d7bEC65Dc4589368da368b212745d63E8","logo_url":"https://bscscan.com/token/images/alicetoken_32.png"},{"name":"BP","address":"0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1","logo_url":"https://bscscan.com/token/images/bunnypark_32.png"},{"name":"DOGGY","address":"0x74926B3d118a63F6958922d3DC05eB9C6E6E00c6","logo_url":"https://bscscan.com/token/images/doggy_32.png"},{"name":"DCH","address":"0x14ACe3d3429408bFA8562099A253172913AD71bd","logo_url":"https://bscscan.com/token/images/dechart_32.png"},{"name":"FRANK","address":"0x129e6d84c6CAb9b0c2F37aD1D14a9fe2E59DAb09","logo_url":"https://bscscan.com/token/images/frankenstein_32.png"},{"name":"RFOX","address":"0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5","logo_url":"https://bscscan.com/token/images/redfoxlabs_32.png"},{"name":"FOR","address":"0x658A109C5900BC6d2357c87549B651670E5b0539","logo_url":"https://bscscan.com/token/images/forceprotocol_32.png"},{"name":"TPT","address":"0xECa41281c24451168a37211F0bc2b8645AF45092","logo_url":"https://bscscan.com/token/images/tokenpocket_32.png"},{"name":"UNCL","address":"0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb","logo_url":"https://bscscan.com/token/images/unicrypt-uncl_32.png"},{"name":"UNCX","address":"0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506","logo_url":"https://bscscan.com/token/images/unicrypt_32.png"},{"name":"WOOP","address":"0x8b303d5BbfBbf46F1a4d9741E491e06986894e18","logo_url":"https://bscscan.com/token/images/woonkly_32.png"},{"name":"ZIL","address":"0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787","logo_url":"https://bscscan.com/token/images/zilliqa_32.png"},{"name":"PBTC","address":"0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C","logo_url":"https://bscscan.com/token/images/ptokenbtc_32.png"}]');
// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(34180);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/index.tsx








function getFallbackIcons(address, baseURIs) {
    const checkSummedAddress = (0,src/* formatEthereumAddress */.j8w)(address);
    if ((0,src/* isSameAddress */.Wr$)((0,src/* getTokenConstants */.aV4)().NATIVE_TOKEN_ADDRESS, checkSummedAddress)) {
        return baseURIs.map((x)=>`${x}/info/logo.png`
        );
    }
    const specialIcon = TokenIconSpecialIconList_namespaceObject.find((0,src/* currySameAddress */.DC3)(address));
    if (specialIcon) return [
        specialIcon.logo_url
    ];
    // load from remote
    return baseURIs.map((x)=>`${x}/assets/${checkSummedAddress}/logo.png`
    );
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function TokenIcon(props) {
    const { address , logoURI , name , chainId , AvatarProps , classes  } = props;
    const _chainId = (0,src/* useChainId */.xxU)();
    let _logoURI = logoURI;
    if (!logoURI && (0,src/* isSameAddress */.Wr$)((0,src/* getTokenConstants */.aV4)().NATIVE_TOKEN_ADDRESS, (0,src/* formatEthereumAddress */.j8w)(address))) {
        const nativeToken = (0,src/* getChainDetailed */.$Gt)(chainId !== null && chainId !== void 0 ? chainId : _chainId);
        _logoURI = nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.nativeCurrency.logoURI;
    }
    const { TOKEN_ASSET_BASE_URI  } = (0,src/* useTokenAssetBaseURLConstants */.hyB)(chainId !== null && chainId !== void 0 ? chainId : _chainId);
    const fallbackLogos = getFallbackIcons(address, TOKEN_ASSET_BASE_URI !== null && TOKEN_ASSET_BASE_URI !== void 0 ? TOKEN_ASSET_BASE_URI : []);
    const tokenBlockie = (0,src/* useBlockie */.YTs)(address);
    const images = _logoURI ? Array.isArray(_logoURI) ? [
        ..._logoURI,
        ...fallbackLogos
    ] : [
        _logoURI,
        ...fallbackLogos
    ] : fallbackLogos;
    const { value: trustedLogoURI , loading  } = (0,UI/* useImageFailOver */.jt)(images, '');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIconUI, {
        logoURL: loading || trustedLogoURI ? trustedLogoURI : tokenBlockie,
        AvatarProps: AvatarProps,
        classes: classes,
        name: name
    }));
}
const TokenIconUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { logoURL , AvatarProps , name  } = props;
    const classes = (0,custom_ui_helper/* useStylesExtends */.B)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        className: classes.icon,
        src: logoURL,
        ...AvatarProps,
        children: name === null || name === void 0 ? void 0 : name.substr(0, 1).toLocaleUpperCase()
    }));
});


/***/ }),

/***/ 83913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ TokenList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(26529);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenList/TokenListItem.tsx






// todo: change Typography from global theme
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        list: {
            paddingLeft: theme.spacing(1)
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'block',
            lineHeight: '20px',
            fontSize: 14
        },
        secondary: {
            fontSize: 14,
            textAlign: 'right'
        },
        symbol: {
            lineHeight: '20px',
            fontSize: 14
        },
        importButton: {
            borderRadius: '30px'
        }
    })
);
function TokenListItem({ data , onSelect  }) {
    const { classes  } = useStyles();
    const token = data.token;
    if (!token) return null;
    const { address , name , symbol , logoURI  } = token;
    const handleTokenSelect = (e)=>{
        e.stopPropagation();
        onSelect(data);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        className: classes.list,
        onClick: handleTokenSelect,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenIcon/* TokenIcon */.T, {
                    classes: {
                        icon: classes.icon
                    },
                    address: address,
                    name: name,
                    logoURI: logoURI
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.text
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.primary,
                        color: "textPrimary",
                        component: "span",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.symbol,
                                children: symbol
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.name,
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.secondary,
                        color: "textSecondary",
                        component: "span",
                        children: data.isAddedToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: (0,web3_shared_src/* formatBalance */.azF)(data.balance, token.decimals)
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.importButton,
                            color: "primary",
                            onClick: handleTokenSelect,
                            size: "small",
                            children: "Import"
                        })
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js + 1 modules
var some = __webpack_require__(14626);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenList/index.tsx






const checkAddedToken = (token, tokens)=>token.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native || (0,some/* default */.Z)(tokens, (t)=>(0,web3_shared_src/* isSameAddress */.Wr$)(token.address, t.address)
    )
;
const TokenList = /*#__PURE__*/ (0,react.memo)(({ onSelect , placeholder , assets , loading  })=>{
    const tokens = (0,web3_shared_src/* useERC20Tokens */.mP2)();
    const renderAsset = assets.map((x)=>({
            ...x,
            isAddedToken: checkAddedToken(x.token, tokens)
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SearchableList */.xV, {
        onSelect: onSelect,
        data: renderAsset,
        searchKey: [
            'token.address',
            'token.symbol',
            'token.name'
        ],
        itemRender: TokenListItem,
        placeholder: loading ? placeholder : undefined
    }));
});


/***/ }),

/***/ 18324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OZ": () => (/* reexport */ components/* CrashUI */.OZ),
  "SV": () => (/* reexport */ components/* ErrorBoundary */.SV),
  "N3": () => (/* reexport */ components/* ErrorBoundaryBuildInfoContext */.N3),
  "LC": () => (/* reexport */ components/* ProviderIcon */.LC),
  "s_": () => (/* reexport */ components/* QRCode */.s_),
  "T1": () => (/* reexport */ components/* TokenIcon */.T1),
  "vT": () => (/* reexport */ components/* TokenIconUI */.vT),
  "no": () => (/* reexport */ components/* TokenList */.no),
  "ze": () => (/* reexport */ custom_ui_helper/* mergeClasses */.z),
  "or": () => (/* reexport */ custom_ui_helper.or),
  "jt": () => (/* reexport */ useImageFailOver),
  "Bc": () => (/* reexport */ custom_ui_helper/* useStylesExtends */.B),
  "Pf": () => (/* reexport */ components/* withErrorBoundary */.Pf)
});

// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(34180);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
;// CONCATENATED MODULE: ../shared/src/UI/hooks/useImageFailOver.ts


/**
 * Request images from different sources and get the image's url of the loaded
 * @param urls the url of different image sources
 * @param suffix the image file path suffix
 */ function useImageFailOver(urls, suffix) {
    return (0,useAsync/* default */.Z)(async ()=>{
        try {
            const imgs = urls.map((v)=>v + suffix
            );
            const img = await (0,esm/* findAvailableImageURL */.ky)(imgs);
            return urls[imgs.indexOf(img)];
        } catch  {
            return '';
        }
    }, [
        urls.join(''),
        suffix
    ]);
}

;// CONCATENATED MODULE: ../shared/src/UI/hooks/index.ts


// EXTERNAL MODULE: ../shared/src/UI/components/index.ts + 2 modules
var components = __webpack_require__(32166);
;// CONCATENATED MODULE: ../shared/src/UI/index.ts





/***/ }),

/***/ 21123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ createGlobalState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

/**
 * Create a new global state.
 *
 * This is compatible with concurrent mode.
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
 *
 * The third item is the data itself in case you're not in a React context.
 */ function createGlobalState(f, subscribe) {
    const data = {
        version: -1,
        data: null,
        error: null
    };
    const source = (0,react__WEBPACK_IMPORTED_MODULE_0__.unstable_createMutableSource)(data, ()=>data.version
    );
    function snap(x) {
        return {
            ...x
        };
    }
    const event = new EventTarget();
    function revalidate(callback = ()=>void event.dispatchEvent(new Event('update'))
    ) {
        return f().then((val)=>{
            data.version += 1;
            data.data = val;
            data.error = undefined;
        }, (error)=>{
            data.version += 1;
            data.error = error;
        }).finally(callback);
    }
    function subscriber(x, callback) {
        const undo = subscribe(()=>revalidate(callback)
        );
        event.addEventListener('update', callback);
        return ()=>{
            event.removeEventListener('update', callback);
            undo();
        };
    }
    function useData(checked = false) {
        const val = (0,react__WEBPACK_IMPORTED_MODULE_0__.unstable_useMutableSource)(source, snap, subscriber);
        if (val.version === -1) throw revalidate();
        // there is no any stale data available. considered as not recoverable.
        if (checked) return {
            error: val.error,
            data: val.data
        };
        if (val.error && val.version === 0) throw val.error;
        return val.data;
    }
    return [
        useData,
        ()=>revalidate()
        ,
        {
            value: data.data,
            error: data.error
        }
    ];
}


/***/ }),

/***/ 65477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xh": () => (/* binding */ useMenuContext),
/* harmony export */   "H9": () => (/* binding */ useMenu),
/* harmony export */   "_X": () => (/* binding */ useMenuConfig)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42515);



/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {
    });
}
function useMenuConfig(elements, config) {
    const anchorEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [status, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        anchorEl.current = element;
        setOpen(true);
    }, []);
    const close = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>setOpen(false)
    , []);
    const Menu1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(useMenuContext);
    return [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl.current,
            children: elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(element, {
                    ...element.props,
                    key
                }) : element
            )
        }),
        open,
        close, 
    ];
}


/***/ }),

/***/ 44101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);


function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                // @ts-ignore
                return map.event.on(ALL_EVENTS, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}


/***/ }),

/***/ 92837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useScrollBottomEvent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82617);


function useScrollBottomEvent(ref, cb) {
    const onScroll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(function(_ev) {
        // ev.currentTarget is always null when applies debounce().
        const ev = _ev;
        const element = ev.path[0];
        // On some device, there's a slight deviation between `scrollHeight` and `offsetHeight + scrollTop`
        const isBottomArrived = Math.abs(element.scrollHeight - element.offsetHeight - element.scrollTop) < 2;
        if (isBottomArrived) cb();
    }, 300), [
        cb
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        if (!ref.current) return;
        ref.current.addEventListener('scroll', onScroll);
        // useLayoutEffect() to remove the listener before changes painted on screen.
        return ()=>ref.current.removeEventListener('scroll', onScroll)
        ;
    }, [
        onScroll,
        ref.current
    ]);
}


/***/ }),

/***/ 81758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53688);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96876);



function useSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useSharedI18N */ .B_)();
    const { enqueueSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .useSnackbar */ .Ds)();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>{
        return executor(...args).then((res)=>{
            enqueueSnackbar(successText !== null && successText !== void 0 ? successText : t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res);
            return res;
        }, (error)=>{
            enqueueSnackbar(`Error: ${error.message || error}`, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError === null || onError === void 0 ? void 0 : onError(error);
            throw error;
        });
    }, [
        ...deps,
        enqueueSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}


/***/ }),

/***/ 96876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$M": () => (/* reexport */ SharedTrans),
  "zr": () => (/* binding */ addSharedI18N),
  "Mj": () => (/* binding */ languages),
  "B_": () => (/* reexport */ useSharedI18N)
});

// EXTERNAL MODULE: ../shared/src/locales/en-US.json
var en_US = __webpack_require__(75961);
// EXTERNAL MODULE: ../shared/src/locales/es-ES.json
var es_ES = __webpack_require__(54048);
// EXTERNAL MODULE: ../shared/src/locales/fa-IR.json
var fa_IR = __webpack_require__(43094);
// EXTERNAL MODULE: ../shared/src/locales/fr-FR.json
var fr_FR = __webpack_require__(76061);
// EXTERNAL MODULE: ../shared/src/locales/it-IT.json
var it_IT = __webpack_require__(53020);
// EXTERNAL MODULE: ../shared/src/locales/ja-JP.json
var ja_JP = __webpack_require__(45558);
// EXTERNAL MODULE: ../shared/src/locales/ko-KR.json
var ko_KR = __webpack_require__(93495);
// EXTERNAL MODULE: ../shared/src/locales/qya-AA.json
var qya_AA = __webpack_require__(88807);
// EXTERNAL MODULE: ../shared/src/locales/ru-RU.json
var ru_RU = __webpack_require__(23250);
// EXTERNAL MODULE: ../shared/src/locales/zh-CN.json
var zh_CN = __webpack_require__(83055);
// EXTERNAL MODULE: ../shared/src/locales/zh-TW.json
var zh_TW = __webpack_require__(47359);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(10026);
;// CONCATENATED MODULE: ../shared/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "shared", ...props })
function useSharedI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("shared")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const SharedTrans = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ../shared/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback langauge in a family of langauges are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts













const languages = {
    en: en_US,
    es: es_ES,
    fa: fa_IR,
    fr: fr_FR,
    it: it_IT,
    ja: ja_JP,
    ko: ko_KR,
    qy: qya_AA,
    ru: ru_RU,
    'zh-CN': zh_CN,
    zh: zh_TW
};
const addSharedI18N = (0,src/* createI18NBundle */.C9)('shared', languages);


/***/ }),

/***/ 80544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Kv": () => (/* reexport */ FormattedAddress),
  "BV": () => (/* reexport */ FormattedBalance),
  "bO": () => (/* reexport */ FormattedCurrency)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../shared/src/UI/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(34180);
;// CONCATENATED MODULE: ../shared/src/wallet/components.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    })
);
const FormattedBalance = (props)=>{
    const { value , decimals , significant , symbol  } = props;
    const formatted = (0,web3_shared_src/* formatBalance */.azF)(value, decimals, significant);
    const classes = (0,custom_ui_helper/* useStylesExtends */.B)(useStyles(), props);
    if (symbol) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.balance,
                children: formatted
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes === null || classes === void 0 ? void 0 : classes.symbol,
                children: symbol
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};
const FormattedCurrency = ({ value , sign , symbol  })=>{
    const formatted = (0,web3_shared_src/* formatCurrency */.xGv)(value, sign);
    if (symbol) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: `${formatted} ${symbol}`
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};
const FormattedAddress = ({ address , size  })=>{
    if (!address) return null;
    const formatted = (0,web3_shared_src/* formatEthereumAddress */.j8w)(address, size);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
        children: formatted
    }));
};

;// CONCATENATED MODULE: ../shared/src/wallet/index.ts



/***/ }),

/***/ 49116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ SearchableList)
});

// UNUSED EXPORTS: MaskSearchableItemInList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(90882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.4.6/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(9614);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(55312);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(71591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Search.js
var Search = __webpack_require__(21332);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(42118);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/MaskSearchableItemInList.tsx
var MaskSearchableItemInList = __webpack_require__(32008);
;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/SearchableList.tsx










/**
 * This component is used to provide a searchable list in Mask design.
 *
 * @example
 * interface IListDate { name: string }
 * const ListItem = ({ name }: IListDate) => <div>{ name }</div>
 * const onSelect = () => {}
 *
 * return (
 *      <SearchableList<IListDate>
 *           onSelect={onSelect}
 *           data={ListData}
 *           searchKey={['name']}
 *           itemRender={ListItem}
 *      />
 * )
 */ function SearchableList({ itemKey , data , placeholder , onSelect , onSearch , searchKey , itemRender , FixedSizeListProps  }) {
    const [keyword, setKeyword] = (0,react.useState)('');
    const { classes  } = useStyles();
    //#region fuse
    const fuse = (0,react.useMemo)(()=>new fuse_esm/* default */.Z(data, {
            shouldSort: true,
            threshold: 0.45,
            minMatchCharLength: 1,
            keys: searchKey !== null && searchKey !== void 0 ? searchKey : Object.keys(data.length > 0 ? data[0] : [])
        })
    , [
        data
    ]);
    //#endregion
    //#region create searched data
    const readyToRenderData = (0,react.useMemo)(()=>{
        if (!keyword) return data;
        const filtered = [
            ...onSearch ? onSearch(data, keyword) : [],
            ...fuse.search(keyword).map((x)=>x.item
            )
        ];
        return itemKey ? (0,uniqBy/* default */.Z)(filtered, (x)=>x[itemKey]
        ) : filtered;
    }, [
        keyword,
        fuse,
        data
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                className: classes.textField,
                placeholder: "Search",
                autoFocus: true,
                fullWidth: true,
                InputProps: {
                    startAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                        position: "start",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.Z, {
                        })
                    })
                },
                onChange: (e)=>setKeyword(e.currentTarget.value)
            }),
            placeholder && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                color: "textSecondary",
                children: placeholder
            }),
            !placeholder && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.list,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                    width: "100%",
                    height: 300,
                    overscanCount: 5,
                    itemSize: 60,
                    itemData: {
                        dataSet: readyToRenderData,
                        onSelect: onSelect
                    },
                    itemCount: readyToRenderData.length,
                    ...FixedSizeListProps,
                    children: (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskSearchableItemInList/* MaskSearchableItemInList */.r, {
                            ...props,
                            children: itemRender
                        })
                })
            })
        ]
    }));
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {
            paddingBottom: theme.spacing(4)
        },
        textField: {
            '&>div': {
                borderRadius: theme.spacing(1),
                background: constants/* MaskColorVar.normalBackground */.ZN.normalBackground
            }
        },
        list: {
            marginTop: theme.spacing(1),
            '& > div::-webkit-scrollbar': {
                width: '7px'
            },
            '& > div::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '& > div::-webkit-scrollbar-thumb': {
                borderRadius: '4px',
                backgroundColor: constants/* MaskColorVar.normalBackground */.ZN.normalBackground
            }
        },
        placeholder: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
            fontSize: 16
        }
    })
);

;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/index.ts




/***/ })

}]);