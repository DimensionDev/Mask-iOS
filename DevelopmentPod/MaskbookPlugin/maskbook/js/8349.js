(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8349],{

/***/ 35850:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  class BufferSourceConverter {
      static isArrayBuffer(data) {
          return Object.prototype.toString.call(data) === '[object ArrayBuffer]';
      }
      static toArrayBuffer(data) {
          const buf = this.toUint8Array(data);
          if (buf.byteOffset || buf.length) {
              return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
          }
          return buf.buffer;
      }
      static toUint8Array(data) {
          return this.toView(data, Uint8Array);
      }
      static toView(data, type) {
          if (typeof Buffer !== "undefined" && Buffer.isBuffer(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          if (this.isArrayBuffer(data)) {
              return new type(data);
          }
          if (this.isArrayBufferView(data)) {
              return new type(data.buffer, data.byteOffset, data.byteLength);
          }
          throw new TypeError("The provided value is not of type '(ArrayBuffer or ArrayBufferView)'");
      }
      static isBufferSource(data) {
          return this.isArrayBufferView(data)
              || this.isArrayBuffer(data);
      }
      static isArrayBufferView(data) {
          return ArrayBuffer.isView(data)
              || (data && this.isArrayBuffer(data.buffer));
      }
      static isEqual(a, b) {
          const aView = BufferSourceConverter.toUint8Array(a);
          const bView = BufferSourceConverter.toUint8Array(b);
          if (aView.length !== bView.byteLength) {
              return false;
          }
          for (let i = 0; i < aView.length; i++) {
              if (aView[i] !== bView[i]) {
                  return false;
              }
          }
          return true;
      }
  }

  class Utf8Converter {
      static fromString(text) {
          const s = unescape(encodeURIComponent(text));
          const uintArray = new Uint8Array(s.length);
          for (let i = 0; i < s.length; i++) {
              uintArray[i] = s.charCodeAt(i);
          }
          return uintArray.buffer;
      }
      static toString(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let encodedString = "";
          for (let i = 0; i < buf.length; i++) {
              encodedString += String.fromCharCode(buf[i]);
          }
          const decodedString = decodeURIComponent(escape(encodedString));
          return decodedString;
      }
  }
  class Utf16Converter {
      static toString(buffer, littleEndian = false) {
          const arrayBuffer = BufferSourceConverter.toArrayBuffer(buffer);
          const dataView = new DataView(arrayBuffer);
          let res = "";
          for (let i = 0; i < arrayBuffer.byteLength; i += 2) {
              const code = dataView.getUint16(i, littleEndian);
              res += String.fromCharCode(code);
          }
          return res;
      }
      static fromString(text, littleEndian = false) {
          const res = new ArrayBuffer(text.length * 2);
          const dataView = new DataView(res);
          for (let i = 0; i < text.length; i++) {
              dataView.setUint16(i * 2, text.charCodeAt(i), littleEndian);
          }
          return res;
      }
  }
  class Convert {
      static isHex(data) {
          return typeof data === "string"
              && /^[a-z0-9]+$/i.test(data);
      }
      static isBase64(data) {
          return typeof data === "string"
              && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(data);
      }
      static isBase64Url(data) {
          return typeof data === "string"
              && /^[a-zA-Z0-9-_]+$/i.test(data);
      }
      static ToString(buffer, enc = "utf8") {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.ToUtf8String(buf);
              case "binary":
                  return this.ToBinary(buf);
              case "hex":
                  return this.ToHex(buf);
              case "base64":
                  return this.ToBase64(buf);
              case "base64url":
                  return this.ToBase64Url(buf);
              case "utf16le":
                  return Utf16Converter.toString(buf, true);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.toString(buf);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static FromString(str, enc = "utf8") {
          if (!str) {
              return new ArrayBuffer(0);
          }
          switch (enc.toLowerCase()) {
              case "utf8":
                  return this.FromUtf8String(str);
              case "binary":
                  return this.FromBinary(str);
              case "hex":
                  return this.FromHex(str);
              case "base64":
                  return this.FromBase64(str);
              case "base64url":
                  return this.FromBase64Url(str);
              case "utf16le":
                  return Utf16Converter.fromString(str, true);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.fromString(str);
              default:
                  throw new Error(`Unknown type of encoding '${enc}'`);
          }
      }
      static ToBase64(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          if (typeof btoa !== "undefined") {
              const binary = this.ToString(buf, "binary");
              return btoa(binary);
          }
          else {
              return Buffer.from(buf).toString("base64");
          }
      }
      static FromBase64(base64) {
          const formatted = this.formatString(base64);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64(formatted)) {
              throw new TypeError("Argument 'base64Text' is not Base64 encoded");
          }
          if (typeof atob !== "undefined") {
              return this.FromBinary(atob(formatted));
          }
          else {
              return new Uint8Array(Buffer.from(formatted, "base64")).buffer;
          }
      }
      static FromBase64Url(base64url) {
          const formatted = this.formatString(base64url);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isBase64Url(formatted)) {
              throw new TypeError("Argument 'base64url' is not Base64Url encoded");
          }
          return this.FromBase64(this.Base64Padding(formatted.replace(/\-/g, "+").replace(/\_/g, "/")));
      }
      static ToBase64Url(data) {
          return this.ToBase64(data).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
      }
      static FromUtf8String(text, encoding = Convert.DEFAULT_UTF8_ENCODING) {
          switch (encoding) {
              case "ascii":
                  return this.FromBinary(text);
              case "utf8":
                  return Utf8Converter.fromString(text);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.fromString(text);
              case "utf16le":
              case "usc2":
                  return Utf16Converter.fromString(text, true);
              default:
                  throw new Error(`Unknown type of encoding '${encoding}'`);
          }
      }
      static ToUtf8String(buffer, encoding = Convert.DEFAULT_UTF8_ENCODING) {
          switch (encoding) {
              case "ascii":
                  return this.ToBinary(buffer);
              case "utf8":
                  return Utf8Converter.toString(buffer);
              case "utf16":
              case "utf16be":
                  return Utf16Converter.toString(buffer);
              case "utf16le":
              case "usc2":
                  return Utf16Converter.toString(buffer, true);
              default:
                  throw new Error(`Unknown type of encoding '${encoding}'`);
          }
      }
      static FromBinary(text) {
          const stringLength = text.length;
          const resultView = new Uint8Array(stringLength);
          for (let i = 0; i < stringLength; i++) {
              resultView[i] = text.charCodeAt(i);
          }
          return resultView.buffer;
      }
      static ToBinary(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let res = "";
          for (let i = 0; i < buf.length; i++) {
              res += String.fromCharCode(buf[i]);
          }
          return res;
      }
      static ToHex(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          const splitter = "";
          const res = [];
          const len = buf.length;
          for (let i = 0; i < len; i++) {
              const char = buf[i].toString(16).padStart(2, "0");
              res.push(char);
          }
          return res.join(splitter);
      }
      static FromHex(hexString) {
          let formatted = this.formatString(hexString);
          if (!formatted) {
              return new ArrayBuffer(0);
          }
          if (!Convert.isHex(formatted)) {
              throw new TypeError("Argument 'hexString' is not HEX encoded");
          }
          if (formatted.length % 2) {
              formatted = `0${formatted}`;
          }
          const res = new Uint8Array(formatted.length / 2);
          for (let i = 0; i < formatted.length; i = i + 2) {
              const c = formatted.slice(i, i + 2);
              res[i / 2] = parseInt(c, 16);
          }
          return res.buffer;
      }
      static ToUtf16String(buffer, littleEndian = false) {
          return Utf16Converter.toString(buffer, littleEndian);
      }
      static FromUtf16String(text, littleEndian = false) {
          return Utf16Converter.fromString(text, littleEndian);
      }
      static Base64Padding(base64) {
          const padCount = 4 - (base64.length % 4);
          if (padCount < 4) {
              for (let i = 0; i < padCount; i++) {
                  base64 += "=";
              }
          }
          return base64;
      }
      static formatString(data) {
          return (data === null || data === void 0 ? void 0 : data.replace(/[\n\r\t ]/g, "")) || "";
      }
  }
  Convert.DEFAULT_UTF8_ENCODING = "utf8";

  function assign(target, ...sources) {
      const res = arguments[0];
      for (let i = 1; i < arguments.length; i++) {
          const obj = arguments[i];
          for (const prop in obj) {
              res[prop] = obj[prop];
          }
      }
      return res;
  }
  function combine(...buf) {
      const totalByteLength = buf.map((item) => item.byteLength).reduce((prev, cur) => prev + cur);
      const res = new Uint8Array(totalByteLength);
      let currentPos = 0;
      buf.map((item) => new Uint8Array(item)).forEach((arr) => {
          for (const item2 of arr) {
              res[currentPos++] = item2;
          }
      });
      return res.buffer;
  }
  function isEqual(bytes1, bytes2) {
      if (!(bytes1 && bytes2)) {
          return false;
      }
      if (bytes1.byteLength !== bytes2.byteLength) {
          return false;
      }
      const b1 = new Uint8Array(bytes1);
      const b2 = new Uint8Array(bytes2);
      for (let i = 0; i < bytes1.byteLength; i++) {
          if (b1[i] !== b2[i]) {
              return false;
          }
      }
      return true;
  }

  exports.BufferSourceConverter = BufferSourceConverter;
  exports.Convert = Convert;
  exports.assign = assign;
  exports.combine = combine;
  exports.isEqual = isEqual;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ 72949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MaskMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);


const MaskMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
MaskMessages.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .serializer */ .GM;
Object.assign(globalThis, {
    MaskMessage: MaskMessages
});


/***/ }),

/***/ 24255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useReverseAddress)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59302);


function useReverseAddress(address, pluginId) {
    const { NameService  } = (0,_web3__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .dM)(pluginId);
    const chainId = (0,_web3__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)(pluginId);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(async ()=>{
        var ref;
        if (!address) return undefined;
        return NameService === null || NameService === void 0 ? void 0 : (ref = NameService.reverse) === null || ref === void 0 ? void 0 : ref.call(NameService, address);
    }, [
        NameService,
        address,
        chainId
    ]);
}


/***/ }),

/***/ 64753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 78488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* unused harmony export startPluginWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22083);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 40998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73400);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17515);





const PropsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(_hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__/* .emptyPluginWrapperMethods */ .Nt);
        if (PluginWrapperComponent) {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: ref,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__/* .PluginWrapperMethodsContext.Provider */ .yd.Provider, {
                    value: ref.current || _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__/* .emptyPluginWrapperMethods */ .Nt,
                    children: element
                })
            }));
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePluginI18NField */ .eS)();
        const props = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const all = usePlugins().filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SinglePluginWithinErrorBoundary, {
                    plugin: plugin
                }, plugin.ID)
            }, plugin.ID)
        );
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        }));
    }
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsInjectionHookRender, {
                ...props
            })
        }));
    }));
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

/***/ 42079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29730);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    var ref;
    const { account , wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    var ref1;
    return  true ? (ref1 = (ref = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallets)) === null || ref === void 0 ? void 0 : ref.address) !== null && ref1 !== void 0 ? ref1 : '' : 0;
}


/***/ }),

/***/ 49581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13248);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);



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

/***/ 68437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22368);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);



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

/***/ 22836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42079);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);


function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)(pluginID);
    const { wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 24633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61779);


function useWeb3State(expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginIDContext */ .Zn)();
    var ref;
    return (ref = (0,_hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginWeb3State */ .G)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) !== null && ref !== void 0 ? ref : {};
}


/***/ }),

/***/ 66092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    DashboardRoutes["Labs"] = '/labs';
})(DashboardRoutes || (DashboardRoutes = {}));


/***/ }),

/***/ 94805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87092);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13094);




/***/ }),

/***/ 40068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 12293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
        onUpdateByRemote,
        event1,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 56346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_3__.wT),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider),
/* harmony export */   "Ii": () => (/* binding */ useCustomSnackbar)
/* harmony export */ });
/* unused harmony export CustomSnackbarContent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99638);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34850);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82591);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(67020);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11383);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44542);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69301);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70751);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55611);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68507);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99821);
/* harmony import */ var _UIHelper_custom_ui_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40904);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50397);















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

/***/ 98479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2473);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27403);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11825);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18146);


const ShadowRootTooltip = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 79958:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ waitDocumentReadyState)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85143);

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

/***/ 2081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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