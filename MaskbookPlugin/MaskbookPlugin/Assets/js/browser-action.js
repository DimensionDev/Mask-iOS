/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 79484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StyledEngineProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2633);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47346);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73102);



 // Cache with option to prepend emotion's style tag


const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_2__.default)({
  key: 'css',
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;

/***/ }),

/***/ 34987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
/**
 * Copyright (c) 2020, Peculiar Ventures, All rights reserved.
 */

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, (function (exports) { 'use strict';

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
      static FromUtf8String(text) {
          const s = unescape(encodeURIComponent(text));
          const uintArray = new Uint8Array(s.length);
          for (let i = 0; i < s.length; i++) {
              uintArray[i] = s.charCodeAt(i);
          }
          return uintArray.buffer;
      }
      static ToUtf8String(buffer) {
          const buf = BufferSourceConverter.toUint8Array(buffer);
          let encodedString = "";
          for (let i = 0; i < buf.length; i++) {
              encodedString += String.fromCharCode(buf[i]);
          }
          const decodedString = decodeURIComponent(escape(encodedString));
          return decodedString;
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

})));


/***/ }),

/***/ 67431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(34539),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 13820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ MaskUIRootWithinShadow),
/* harmony export */   "Y": () => (/* binding */ MaskUIRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58327);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79484);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99195);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94776);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22209);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63371);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95001);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8325);
/* harmony import */ var _web3_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60549);
/* harmony import */ var _extension_background_script_Jobs_PrintBuildFlags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10339);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34539);











function MaskUIRootWithinShadow(JSX) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_8__.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .Web3Provider */ .Qgv, {
            value: _web3_context__WEBPACK_IMPORTED_MODULE_6__/* .Web3Context */ .S,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_9__/* .I18nextProvider */ .a, {
                i18n: _utils_i18n_next__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundaryBuildInfoContext.Provider, {
                    value: _extension_background_script_Jobs_PrintBuildFlags__WEBPACK_IMPORTED_MODULE_7__/* .buildInfoMarkdown */ .i,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.ErrorBoundary, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
                            maxSnack: 30,
                            anchorOrigin: {
                                vertical: 'top',
                                horizontal: 'right'
                            },
                            children: JSX
                        })
                    })
                })
            })
        })
    }));
}
/** Use this if the root is rendered the whole page (instead of content script case) */ function MaskUIRoot(JSX) {
    return MaskUIRootWithinShadow(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
        injectFirst: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {
            theme: (0,_utils_theme__WEBPACK_IMPORTED_MODULE_5__/* .useClassicMaskTheme */ .Uk)(),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .ZP, {
                }),
                JSX
            ]
        })
    }));
}


/***/ }),

/***/ 80969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hg": () => (/* binding */ useFriendsList),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81949);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43670);





function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef({
    identifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.lastRecognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_social_network__WEBPACK_IMPORTED_MODULE_3__.globalUIState.profiles);
}
function useCurrentIdentity(noDefault) {
    const all = useMyIdentities();
    const current = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentSelectedIdentity */ .G[_social_network__WEBPACK_IMPORTED_MODULE_3__.activatedSocialNetworkUI.networkIdentifier]);
    return all.find((i)=>i.identifier.toText() === current
    ) || (noDefault ? null : all[0]);
}


/***/ }),

/***/ 31491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);



/***/ }),

/***/ 95720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "nk": () => (/* reexport */ ProfileInList),
  "Ok": () => (/* reexport */ SelectProfileUI)
});

// UNUSED EXPORTS: ProfileInChip

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(16633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(87503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(55432);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(30581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(39052);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(61403);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(11949);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/ProfileInList.tsx






const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        // ? I want to let the children of this element have no change to
        // ? extends the width of the parent element.
        // ? Only `grid` or `inline-grid` works. but why??
        root: {
            display: 'inline-grid'
        },
        overflow: {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        },
        networkHint: {
            color: theme.palette.grey[500]
        }
    })
);
/**
 * Item in the list
 */ const ProfileInList = /*#__PURE__*/ (0,react.memo)((props)=>{
    var ref;
    const { classes  } = useStyle();
    const { disabled , ListItemProps: listItemProps , onClick  } = props;
    const name = props.item.nickname || props.item.identifier.userId;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        disabled: disabled,
        onClick: onClick,
        ...listItemProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* Avatar */.qE, {
                    person: props.item
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    root: classes.root,
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primary: name,
                secondary: (ref = props.item.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint.toLowerCase()
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/ProfileInChip.tsx



function ProfileInChip(props) {
    const { disabled , onDelete , item: profile  } = props;
    const avatar = profile.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* Avatar */.qE, {
        person: profile
    }) : undefined;
    const displayName = profile.nickname || profile.identifier.userId;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        style: {
            marginRight: 6,
            marginBottom: 6
        },
        color: "primary",
        onDelete: disabled ? undefined : onDelete,
        label: displayName,
        avatar: avatar,
        ...props.ChipProps
    }));
}

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(90882);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/SelectProfileUI.tsx









const useStyles = (0,src/* makeStyles */.ZL)()({
    selectedArea: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        padding: '12px 6px 6px 12px'
    },
    input: {
        flex: 1,
        minWidth: '10em'
    },
    buttons: {
        marginLeft: 8,
        padding: '2px 6px'
    }
});
function SelectProfileUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const items = props.items;
    const selected = props.selected;
    const { frozenSelected , onSetSelected , disabled  } = props;
    const [search, setSearch] = (0,react.useState)('');
    const listBeforeSearch = items.filter((x)=>{
        if (selected.find((y)=>x.identifier.equals(y.identifier)
        )) return false;
        return true;
    });
    const listAfterSearch = listBeforeSearch.filter((x)=>{
        var ref;
        if (frozenSelected.find((y)=>x.identifier.equals(y.identifier)
        )) return false;
        if (search === '') return true;
        return !!x.identifier.userId.toLowerCase().match(search.toLowerCase()) || !!((ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint.toLowerCase().match(search.toLowerCase())) || !!(x.nickname || '').toLowerCase().match(search.toLowerCase());
    });
    const SelectAllButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: classes.buttons,
        onClick: ()=>onSetSelected([
                ...selected,
                ...listAfterSearch
            ])
        ,
        children: t('select_all')
    });
    const SelectNoneButton = /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: classes.buttons,
        onClick: ()=>onSetSelected([])
        ,
        children: t('select_none')
    });
    const showSelectAll = listAfterSearch.length > 0;
    const showSelectNone = selected.length > 0;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.selectedArea,
                sx: {
                    display: 'flex'
                },
                children: [
                    frozenSelected.length === items.length || !listBeforeSearch.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        disabled: disabled,
                        style: {
                            marginRight: 6,
                            marginBottom: 6
                        },
                        color: "primary",
                        onDelete: frozenSelected.length !== items.length ? ()=>onSetSelected([])
                         : undefined,
                        label: t('all_friends')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            frozenSelected.map((x)=>FrozenChip(x)
                            ),
                            selected.filter((item)=>!frozenSelected.includes(item)
                            ).map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInChip, {
                                    disabled: disabled,
                                    item: item,
                                    onDelete: ()=>onSetSelected(selected.filter((x)=>!x.identifier.equals(item.identifier)
                                        ))
                                }, item.identifier.toText())
                            )
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        className: classes.input,
                        value: disabled ? '' : search,
                        onChange: (0,react.useCallback)((e)=>setSearch(e.target.value)
                        , []),
                        onKeyDown: (e)=>{
                            if (search === '' && e.key === 'Backspace') {
                                onSetSelected(selected.slice(0, selected.length - 1));
                            }
                        },
                        placeholder: disabled ? '' : t('search_box_placeholder'),
                        disabled: disabled
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex'
                },
                children: [
                    showSelectAll && SelectAllButton,
                    showSelectNone && SelectNoneButton
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    flex: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                    dense: true,
                    children: [
                        listBeforeSearch.length > 0 && listAfterSearch.length === 0 && search && /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: t('no_search_result')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
                            itemSize: 56,
                            itemCount: listAfterSearch.length,
                            overscanCount: 5,
                            width: "100%",
                            height: 400,
                            children: ({ index , style  })=>listAfterSearch[index] ? ProfileListItem(listAfterSearch[index], style) : null
                        })
                    ]
                })
            })
        ]
    }));
    function ProfileListItem(item, style) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInList, {
            item: item,
            disabled: disabled,
            onClick: ()=>{
                onSetSelected(selected.concat(item));
                setSearch('');
            },
            ListItemProps: {
                style
            }
        }, item.identifier.toText()));
    }
}
SelectProfileUI.defaultProps = {
    frozenSelected: []
};
function FrozenChip(item) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInChip, {
        disabled: true,
        item: item
    }, item.identifier.toText()));
}

;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/index.tsx





/***/ }),

/***/ 55346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);



/***/ }),

/***/ 10339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ buildInfoMarkdown)
/* harmony export */ });
var ref, ref1, ref2, ref3, ref4, ref5, ref6;
console.log('Build info', {
    NODE_ENV: "production",
    VERSION: "v1.29.12-905-gc5a5cecec",
    TAG_NAME: "v1.36.0",
    COMMIT_HASH: "c5a5cecec",
    COMMIT_DATE: "2021-08-31T02:49:35.000Z",
    BUILD_DATE: "2021-08-31T02:52:53.915Z",
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
- BUILD_DATE: ${"2021-08-31T02:52:53.915Z"}
- VERSION: ${"v1.29.12-905-gc5a5cecec"}

## Git (${ true ? '*' : 0}):

${"c5a5cecec"} (${"develop"}) on tag "${"v1.36.0"}"
${((ref6 = (ref5 = "https://github.com/DimensionDev/Maskbook") === null || ref5 === void 0 ? void 0 : ref5.toLowerCase()) === null || ref6 === void 0 ? void 0 : ref6.includes('DimensionDev')) ? '' : "https://github.com/DimensionDev/Maskbook"}`;


/***/ }),

/***/ 4659:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(43670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(55346);
;// CONCATENATED MODULE: ./src/social-network-adaptor/browser-action/index.ts



const base = {
    networkIdentifier: 'localhost',
    declarativePermissions: {
        origins: []
    },
    shouldActivate (location) {
        //TODO: replace this line to Env assert
        if (location.pathname === '/popups.html') return true;
        return (0,umd.isEnvironment)(umd.Environment.ManifestAction);
    }
};
const browser_action_define = {
    ...base,
    automation: {
    },
    collecting: {
    },
    configuration: {
    },
    customization: {
    },
    injection: {
    },
    permission: {
        async has () {
            return true;
        },
        async request () {
            return true;
        }
    },
    utils: {
        createPostContext: null
    },
    async init (signal) {
        const state = {
            profiles: new umd.ValueRef([]),
            friends: new umd.ValueRef(new IdentifierMap/* IdentifierMap */.q(new Map()))
        };
        const activeTab = (await browser.tabs.query({
            active: true,
            currentWindow: true
        }) || [])[0];
        if (activeTab === undefined) return state;
        const location = new URL(activeTab.url || globalThis.location.href);
        for (const ui of social_network.definedSocialNetworkUIs.values()){
            if (ui.shouldActivate(location) && ui.networkIdentifier !== 'localhost') {
                const _ = (await ui.load()).default;
                if (signal.aborted) return state;
                // TODO: heck, this is not what we expected.
                this.networkIdentifier = ui.networkIdentifier;
                this.permission = _.permission;
                this.declarativePermissions = _.declarativePermissions;
                this.utils = _.utils;
                return _.init(signal);
            }
        }
        return state;
    }
};
(0,social_network.defineSocialNetworkUI)({
    ...base,
    async load () {
        return {
            default: browser_action_define
        };
    }
});

// EXTERNAL MODULE: ./src/polyfill/index.ts + 6 modules
var polyfill = __webpack_require__(2735);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(58451);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(89327);
;// CONCATENATED MODULE: ./src/setup.ui.ts

// Start SNS adaptor


const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(37904);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(75868);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(49269);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(80234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(15524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(93755);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(55432);
// EXTERNAL MODULE: ./src/components/shared/SelectProfileUI/index.tsx + 3 modules
var SelectProfileUI = __webpack_require__(95720);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(80969);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(80594);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(81949);
;// CONCATENATED MODULE: ./src/components/shared/ChooseIdentity.tsx











const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        width: '100%',
        lineHeight: 1.75
    },
    expansionPanelRoot: {
        boxShadow: 'none',
        width: '100%'
    },
    list: {
        width: '100%',
        padding: 0
    },
    listItemRoot: {
        padding: '6px 24px 6px 8px'
    },
    fingerprint: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        fontSize: 12
    }
});
const useAccordionSummaryStyle = (0,src/* makeStyles */.ZL)()({
    root: {
        padding: 0
    },
    content: {
        width: '100%',
        margin: 0
    },
    expanded: {
        margin: '0 !important',
        minHeight: 'unset !important'
    },
    expandIcon: {
        padding: 0,
        marginRight: '0 !important',
        right: 4,
        position: 'absolute',
        pointerEvents: 'none'
    }
});
/**
 * Choose the current using identity.
 */ function ChooseIdentity(props) {
    const { identities  } = props;
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const expansionPanelSummaryClasses = (0,shared_src.useStylesExtends)(useAccordionSummaryStyle(), props);
    const [expanded, setExpanded] = (0,react.useState)(false);
    const ui = social_network.activatedSocialNetworkUI;
    const current = (0,useActivatedUI/* useCurrentIdentity */.Ud)() || {
        identifier: type/* ProfileIdentifier.unknown */.WO.unknown,
        nickname: 'Nothing'
    };
    const onChange = (0,react.useCallback)(()=>{
        if (identities.length > 1) setExpanded(!expanded);
    }, [
        identities.length,
        expanded
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
            classes: {
                root: classes.expansionPanelRoot
            },
            expanded: expanded,
            onChange: onChange,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                    classes: expansionPanelSummaryClasses,
                    expandIcon: identities.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    }) : null,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileUI/* ProfileInList */.nk, {
                        item: current,
                        ListItemProps: {
                            dense: true,
                            classes: {
                                root: classes.listItemRoot
                            }
                        }
                    })
                }),
                identities.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    classes: {
                        root: classes.list
                    },
                    children: identities.map((profile)=>profile.identifier.equals(current.identifier) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileUI/* ProfileInList */.nk, {
                            item: profile,
                            ListItemProps: {
                                dense: true,
                                classes: {
                                    root: classes.listItemRoot
                                }
                            },
                            onClick: ()=>{
                                setExpanded(false);
                                settings/* currentSelectedIdentity */.G[ui.networkIdentifier].value = profile.identifier.toText();
                            }
                        }, profile.identifier.toText())
                    )
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/UIRoot.tsx
var UIRoot = __webpack_require__(13820);
// EXTERNAL MODULE: ./src/social-network/utils/permissions.ts
var permissions = __webpack_require__(98602);
;// CONCATENATED MODULE: ./src/extension/browser-action/UI.tsx














function GlobalCss() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalStyles/* default */.Z, {
        styles: {
            body: {
                overflowX: 'hidden',
                margin: '0 auto',
                width: 340,
                maxWidth: '100%',
                backgroundColor: 'transparent',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    }));
}
const UI_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            lineHeight: 1.75,
            padding: 20,
            borderRadius: '0 !important',
            userSelect: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            margin: theme.spacing(2, 0, 1),
            '&:first-child': {
                marginTop: 0
            }
        },
        logo: {
            display: 'block',
            width: 218,
            height: 50,
            margin: '16px auto 28px',
            pointerEvents: 'none'
        },
        title: {
            fontSize: 16,
            fontWeight: 500
        },
        divider: {
            marginBottom: theme.spacing(2)
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
            whiteSpace: 'nowrap'
        }
    })
);
function BrowserActionUI() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = UI_useStyles();
    const ui = social_network.activatedSocialNetworkUI;
    const identities = (0,useActivatedUI/* useMyIdentities */.FA)();
    const { value: hasPermission = true , retry: checkPermission  } = (0,useAsyncRetry/* default */.Z)(permissions/* hasSNSAdaptorPermission.bind */.K.bind(null, ui));
    const onEnter = (0,react.useCallback)((event)=>{
        const openLegacyDashboard = ()=>browser.runtime.openOptionsPage()
        ;
        const openNextDashboard = ()=>browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/next.html')
            })
        ;
        const shouldOpenNextDashboard =  false || utils/* Flags.v2_enabled */.vU.v2_enabled && !event.ctrlKey;
        if (event.shiftKey) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/debug.html')
            });
        } else if (shouldOpenNextDashboard) {
            openNextDashboard();
        } else {
            openLegacyDashboard();
        }
    }, []);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated, lodash.noop, 'activated');
    const onConnect = (0,react.useCallback)(async ()=>{
        openSelectProviderDialog();
        await (0,utils/* delay */.gw)(200);
        window.close();
    }, [
        openSelectProviderDialog
    ]);
    const Trademark = /*#__PURE__*/ (0,react.memo)(()=>{
        const src =  true ? new URL(/* asset import */ __webpack_require__(47476), __webpack_require__.b) : 0;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: classes.logo,
            src: src.toString()
        }));
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.container,
        elevation: 0,
        children: [
            ui.networkIdentifier === 'localhost' || identities.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trademark, {
            }) : null,
            hasPermission === false && identities.length !== 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.header,
                        sx: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: t('browser_action_notifications')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        variant: "body2",
                        children: t('browser_action_notifications_description', {
                            sns: ui.networkIdentifier
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            variant: "text",
                            onClick: ()=>{
                                if (utils/* Flags.no_web_extension_dynamic_permission_request */.vU.no_web_extension_dynamic_permission_request) return;
                                (0,permissions/* requestSNSAdaptorPermission */.S)(ui).then(checkPermission);
                            },
                            children: t('browser_action_request_permission')
                        })
                    })
                ]
            }) : null,
            ui.networkIdentifier === 'localhost' || identities.length === 0 ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.header,
                        sx: {
                            display: 'flex',
                            justifyContent: 'space-between'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.title,
                            children: t('browser_action_current_persona')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ChooseIdentity, {
                        identities: identities
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex'
                },
                children: [
                    ui.networkIdentifier !== 'localhost' && identities.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        variant: "text",
                        onClick: onEnter,
                        children: t('browser_action_setup_first_persona')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        variant: "text",
                        onClick: onEnter,
                        children: t('browser_action_enter_dashboard')
                    }),
                    ui.networkIdentifier === 'localhost' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        variant: "text",
                        onClick: onConnect,
                        children: t('browser_action_connect_wallet')
                    })
                ]
            })
        ]
    }));
}
function BrowserActionRoot() {
    return (0,UIRoot/* MaskUIRoot */.Y)(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalCss, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserActionUI, {
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/browser-action/index.tsx





setup_ui_status.then(()=>(0,createNormalReactRoot/* createNormalReactRoot */.j)(/*#__PURE__*/ (0,jsx_runtime.jsx)(BrowserActionRoot, {
    }))
);


/***/ }),

/***/ 43148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "DX": () => (/* binding */ WETH),
/* harmony export */   "Nu": () => (/* binding */ WETH_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "J2": () => (/* binding */ PRICE_IMPACT_LOW),
/* harmony export */   "wh": () => (/* binding */ PRICE_IMPACT_MEDIUM),
/* harmony export */   "Wg": () => (/* binding */ PRICE_IMPACT_HIGH),
/* harmony export */   "EV": () => (/* binding */ PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN),
/* harmony export */   "lA": () => (/* binding */ PRICE_IMPACT_NON_EXPERT_BLOCKED),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE */
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


const USDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const HUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const AMPL = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WBTC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const IGG = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
var _name, _symbol;
const WETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WETH_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WETH_ONLY = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]: [],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]: []
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ryP.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 1000 // bips
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

/***/ 75730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZZ": () => (/* binding */ stateCreator),
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator),
/* harmony export */   "Du": () => (/* binding */ creator)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);


// By this pattern, I hope we can enforce all providers to use this pattern to init.
// const friendsRef = stateCreator.friendsRef()
// return { friendsRef }
// Therefore they may aware they have the ability to fill in the ref.
// If I design it like this:
// const state = stateCreator()
// return state
// People might not aware they need to fill the new state.
const stateCreator = {
    friends: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef(new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap(new Map(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier))
    ,
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
function managedStateCreator() {
    return {
    };
}
const creator = {
    IdentityResolveProviderLastRecognized: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({
            identifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown
        })
    ,
    PostProviderStore: ()=>new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableWeakMap()
};


/***/ }),

/***/ 98602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ requestSNSAdaptorPermission),
/* harmony export */   "K": () => (/* binding */ hasSNSAdaptorPermission)
/* harmony export */ });
function requestSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.request()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.request({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}
function hasSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.has()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.contains({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}


/***/ }),

/***/ 98433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ot": () => (/* binding */ definedSocialNetworkWorkersResolved),
/* harmony export */   "C8": () => (/* binding */ getNetworkWorker),
/* harmony export */   "Bu": () => (/* binding */ getNetworkWorkerUninitialized)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43670);


const definedSocialNetworkWorkersResolved = new Set();
async function activateNetworkWorker(id) {
    if (!(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground)) {
        throw new TypeError();
    }
    for (const each of definedSocialNetworkWorkersResolved){
        if (each.networkIdentifier === id) return each;
    }
    for (const each1 of ___WEBPACK_IMPORTED_MODULE_0__.definedSocialNetworkWorkers){
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
        ...___WEBPACK_IMPORTED_MODULE_0__.definedSocialNetworkWorkers
    ].find((x)=>x.networkIdentifier === network
    );
    return getNetworkWorkerUninitialized(network.network);
}


/***/ }),

/***/ 73405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4527);



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

/***/ 5638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73405);



/***/ }),

/***/ 37904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31491);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5726);




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot(container).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .NoEffectUsePortalShadowRootContext.Provider */ .XR.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .S, {
            children: jsx
        })
    }));
}


/***/ }),

/***/ 61046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ memoizePromise)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.memoize)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}


/***/ }),

/***/ 24910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PN": () => (/* binding */ decompressBackupFile)
/* harmony export */ });
/* unused harmony exports sanitizeBackupFile, compressBackupFile */
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80594);
/* harmony import */ var _SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26793);


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
    const profileIdentifier_ = (profileIdentifier !== null && profileIdentifier !== void 0 ? profileIdentifier : linkedProfile) ? Identifier.fromString(linkedProfile, ProfileIdentifier).unwrap() : undefined;
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
        compressSecp256k1Key(privateKey, 'private'),
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

/***/ 26793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ compressSecp256k1Key),
/* harmony export */   "q": () => (/* binding */ decompressSecp256k1Key)
/* harmony export */ });
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23033);
/* harmony import */ var tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34987);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79178);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15313);




/**
 * Compress x & y into a single x
 */ function compressSecp256k1Point(x, y) {
    const xb = pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.FromBase64Url(x);
    const yb = pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.FromBase64Url(y);
    const point = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from((0,pvtsutils__WEBPACK_IMPORTED_MODULE_1__.combine)(new Uint8Array([
        4
    ]), xb, yb));
    if (tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPoint(point)) {
        return tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().pointCompress(point, true);
    } else {
        throw new TypeError('Not a point on secp256k1!');
    }
}
/**
 * Decompress x into x & y
 */ function decompressSecp256k1Point(point) {
    const p = buffer__WEBPACK_IMPORTED_MODULE_3__.Buffer.from(point);
    if (!tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPoint(p)) throw new TypeError('Not a point on secp256k1!');
    const uncompressed = tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().isPointCompressed(p) ? tiny_secp256k1__WEBPACK_IMPORTED_MODULE_0___default().pointCompress(p, false) : p;
    const len = (uncompressed.length - 1) / 2;
    const x = uncompressed.slice(1, len + 1);
    const y = uncompressed.slice(len + 1);
    return {
        x: pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.ToBase64Url(x),
        y: pvtsutils__WEBPACK_IMPORTED_MODULE_1__.Convert.ToBase64Url(y)
    };
}
function compressSecp256k1Key(key, type) {
    if (type === 'private' && !key.d) throw new Error('Private key does not contain secret');
    const arr = compressSecp256k1Point(key.x, key.y);
    return (0,_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)(arr) + (type === 'private' ? '🙈' + key.d : '');
}
function decompressSecp256k1Key(compressed, type) {
    const [compressedPublic, privateKey] = compressed.split('🙈');
    if (type === 'private' && privateKey.length < 1) throw new Error('Private key does not contain secret');
    const arr = (0,_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_2__/* .decodeArrayBuffer */ .xe)(compressedPublic);
    const key = decompressSecp256k1Point(arr);
    const jwk = {
        crv: 'K-256',
        ext: true,
        x: key.x,
        y: key.y,
        key_ops: [
            'deriveKey',
            'deriveBits'
        ],
        kty: 'EC',
        d: type === 'private' ? privateKey : undefined
    };
    return jwk;
}


/***/ }),

/***/ 79178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YT": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.YT),
/* harmony export */   "rj": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.rj),
/* harmony export */   "ll": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.ll),
/* harmony export */   "xe": () => (/* reexport safe */ _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__.xe)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);



/***/ }),

/***/ 60549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Web3Context)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22209);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49269);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6621);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77287);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80609);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76898);







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
    blockNumber: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentBlockNumberSettings */ .gi),
    nonce: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNonceSettings */ .U8),
    gasPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentGasPriceSettings */ .rP),
    etherPrice: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentEtherPriceSettings */ .cK),
    wallets: createSubscriptionFromAsync(getWallets, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.walletsUpdated.on */ .R.events.walletsUpdated.on),
    providerType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1),
    networkType: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX),
    erc20Tokens: createSubscriptionFromAsync(getERC20Tokens, [], _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    erc20TokensCount: createSubscriptionFromAsync(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getERC20TokensCount */ .V.getERC20TokensCount, 0, _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.erc20TokensUpdated.on */ .R.events.erc20TokensUpdated.on),
    getERC20TokensPaged,
    portfolioProvider: createSubscriptionFromSettings(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentPortfolioDataProviderSettings */ .a4),
    getAssetList: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getAssetsList */ .V.getAssetsList,
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


/***/ }),

/***/ 63046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fo": () => (/* binding */ registerPlugin)
/* harmony export */ });
/* unused harmony export useRegisteredPlugins */
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
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
}
function useRegisteredPlugins() {
    return [
        ...__registered.values()
    ];
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        if ( true && def.enableRequirement.target !== 'stable') {
            return false;
        } else if (false) {}
    }
    return true;
}


/***/ }),

/***/ 50586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* unused harmony export startPluginWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9284);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.Worker
});
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 35930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap),
/* harmony export */   "d": () => (/* binding */ ReadonlyIdentifierMap)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20786);
/* harmony import */ var _serializer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76117);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53408);



var _key;
var tmp = (_key = immer__WEBPACK_IMPORTED_MODULE_2__/* .immerable */ .sc, Symbol.iterator);
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
(0,_serializer_index__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .q)('IdentifierMap')(IdentifierMap);
IdentifierMap.prototype[Symbol.toStringTag] = 'IdentifierMap';
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = IdentifierMap;


/***/ }),

/***/ 76117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ serialize),
/* harmony export */   "G": () => (/* binding */ serializer)
/* harmony export */ });
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72421);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12080);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76374);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4357);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19004);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71967);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82689);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__);
/// <reference path="./typeson.d.ts" />



// @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore

/** @internal */ function serialize(name, ser, des) {
    return (constructor)=>{
        Object.defineProperty(constructor, 'name', {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
        typeson.register({
            [name]: ser && des ? [
                (x)=>x instanceof constructor
                ,
                ser,
                des
            ] : [
                (x)=>x instanceof constructor
                ,
                (x)=>{
                    const y = Object.assign({
                    }, x);
                    Object.getOwnPropertySymbols(y).forEach((x1)=>Reflect.deleteProperty(y, x1)
                    );
                    return typeson.encapsulate(y);
                },
                (x)=>{
                    const y = typeson.revive(x);
                    Object.setPrototypeOf(y, constructor.prototype);
                    return y;
                }, 
            ]
        });
        return constructor;
    };
}
const typeson = new (typeson__WEBPACK_IMPORTED_MODULE_0___default())({
});
typeson.register((typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default()));
typeson.register((typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default()));
typeson.register([
    (typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default()),
    (typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default()),
    (typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default()),
    (typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default()),
    (typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default())
]);
serialize('Ok')(ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
serialize('Err')(ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
serialize('BigNumber')(bignumber_js__WEBPACK_IMPORTED_MODULE_2__.BigNumber);
const serializer = {
    serialization (from) {
        return typeson.encapsulate(from);
    },
    deserialization (to) {
        try {
            return typeson.revive(to);
        } catch (error) {
            console.error(error);
        }
        return {
        };
    }
};


/***/ }),

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "Jf": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "$P": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "UK": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__._X),
/* harmony export */   "Xh": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.Xh),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22466);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56753);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7082);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30246);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54957);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99058);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39326);









/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90335);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)()) // create a id for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return event.on((_ev)=>{
            const event1 = _ev;
            // ignore the event from the same hook
            if (event1.hookId === HOOK_ID) return;
            setOpen(event1.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
        onUpdateByRemote,
        event,
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
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
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

/***/ 72654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* reexport */ getLocalImplementation),
  "k": () => (/* reexport */ getLocalImplementationExotic)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
;// CONCATENATED MODULE: ../shared/src/utils/getLocalImplementation.tsx

// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {
    };
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for(const key in localImpl){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for(const key1 in result){
        if (key1 === 'then') console.error('!!! Do not use "then" as your method name !!!');
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    RPCCache.set(ref, await impl());
    return new Proxy({
    }, {
        get (_, key) {
            var ref1;
            if (key === 'then') return;
            // @ts-ignore
            return (ref1 = RPCCache.get(ref)) === null || ref1 === void 0 ? void 0 : ref1[key];
        }
    });
}

;// CONCATENATED MODULE: ../shared/src/utils/index.ts



/***/ }),

/***/ 17067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "XR": () => (/* binding */ NoEffectUsePortalShadowRootContext),
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83710);



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint = null;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return;
    const shadow = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        shadow.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = shadow.appendChild(document.createElement('div'));
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const doms = useSideEffectRef(()=>{
        const root = document.createElement('div');
        const container = root.appendChild(document.createElement('div'));
        const style = root.appendChild(document.createElement('style'));
        return {
            root,
            container,
            style
        };
    });
    const { container  } = doms;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentShadowRootStyles */ .I3)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (findMountingShadowRef && style.innerHTML !== css) style.innerHTML = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                PopperProps: {
                    container
                },
                ...props,
                ref: ref
            })
        );
    }));
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function bind(f, thisArg, hook) {
    return (...args)=>{
        try {
            return f.apply(thisArg, args);
        } finally{
            hook();
        }
    };
}
function useUpdate() {
    const [, _update] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 79506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$c": () => (/* binding */ createNativeToken),
/* harmony export */   "wY": () => (/* binding */ createERC20Token),
/* harmony export */   "Of": () => (/* binding */ createERC721Token),
/* harmony export */   "vs": () => (/* binding */ createERC20Tokens),
/* harmony export */   "bu": () => (/* binding */ addGasMargin),
/* harmony export */   "mO": () => (/* binding */ decodeOutputString),
/* harmony export */   "UZ": () => (/* binding */ parseStringOrBytes32),
/* harmony export */   "pL": () => (/* binding */ getTokenUSDValue),
/* harmony export */   "I3": () => (/* binding */ makeSortTokenFn),
/* harmony export */   "Si": () => (/* binding */ makeSortAssertFn)
/* harmony export */ });
/* unused harmony exports createERC721ContractDetailed, createERC1155Token, getBalanceValue */
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14967);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70626);
/* harmony import */ var _chainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26267);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37841);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60022);








function createNativeToken(chainId) {
    const chainDetailed = (0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) throw new Error('Unknown chain id.');
    const { NATIVE_TOKEN_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)();
    if (!NATIVE_TOKEN_ADDRESS) throw new Error('Failed to create token.');
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native,
        chainId,
        address: NATIVE_TOKEN_ADDRESS,
        ...chainDetailed.nativeCurrency
    };
}
function createERC20Token(chainId, address, decimals, name, symbol) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
        chainId,
        address,
        decimals,
        name,
        symbol
    };
}
function createERC721ContractDetailed(chainId, address, name, symbol, baseURI, iconURL) {
    return {
        type: EthereumTokenType.ERC721,
        chainId,
        address,
        name,
        symbol,
        baseURI,
        iconURL
    };
}
function createERC721Token(contractDetailed, info, tokenId) {
    return {
        contractDetailed,
        info,
        tokenId
    };
}
function createERC1155Token(chainId, tokenId, address, name, uri, asset) {
    return {
        type: EthereumTokenType.ERC1155,
        chainId,
        tokenId,
        address,
        name,
        uri,
        asset
    };
}
function createERC20Tokens(key, name, symbol, decimals) {
    const base = {
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_4__/* .ChainId */ .a_).reduce((accumulator, { value: chainId  })=>{
        const evaludator = (f)=>typeof f === 'function' ? f(chainId) : f
        ;
        var _key;
        accumulator[chainId] = {
            type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
            chainId,
            address: (_key = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId)[key]) !== null && _key !== void 0 ? _key : '',
            name: evaludator(name),
            symbol: evaludator(symbol),
            decimals: evaludator(decimals)
        };
        return accumulator;
    }, base);
}
//#endregion
function addGasMargin(value, scale = 3000) {
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(value).multipliedBy(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000).plus(scale)).dividedToIntegerBy(10000);
}
function decodeOutputString(web3, abis, output) {
    if (abis.length === 1) return web3.eth.abi.decodeParameter(abis[0], output);
    if (abis.length > 1) return web3.eth.abi.decodeParameters(abis, output);
    return;
}
// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[\dA-Fa-f]{64}$/;
function parseStringOrBytes32(str, bytes32, defaultValue) {
    return str && str.length > 0 ? str : bytes32 && BYTES32_REGEX.test(bytes32) && (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(bytes32)[31] === 0 ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toAscii)(bytes32) : defaultValue;
}
//#region asset sort
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[_types__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType.USD */ .V2.USD]) : 0
;
const getBalanceValue = (asset)=>parseFloat((0,_formatter__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .az)(asset.balance, asset.token.decimals))
;
const makeSortTokenFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The native token goes first
        if (a.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return -1;
        if (b.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return 1;
        // The mask token second
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return 1;
        }
        return 0;
    };
};
const makeSortAssertFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The tokens with the current chain id goes first
        if (a.chain !== b.chain) {
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(a.chain) === chainId) return -1;
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(b.chain) === chainId) return 1;
        }
        // native token sort
        const nativeTokenDifference = makeSortTokenFn(chainId, {
            isMaskBoost: false
        })(a.token, b.token);
        if (nativeTokenDifference !== 0) return nativeTokenDifference;
        // Mask token at second if value > 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS) && getBalanceValue(a) > 0) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS) && getBalanceValue(b) > 0) return 1;
        }
        // Token with high usd value estimation has priority
        const valueDifference = getTokenUSDValue(b) - getTokenUSDValue(a);
        if (valueDifference !== 0) return valueDifference;
        // Token with big balance has priority
        if (getBalanceValue(a) > getBalanceValue(b)) return -1;
        if (getBalanceValue(a) < getBalanceValue(b)) return 1;
        // mask token behind all valuable tokens if value = 0 and balance = 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS)) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS)) return 1;
        }
        var _name, _name1;
        // Sorted by alphabet
        if (((_name = a.token.name) !== null && _name !== void 0 ? _name : '') > ((_name1 = b.token.name) !== null && _name1 !== void 0 ? _name1 : '')) return 1;
        var _name5, _name6;
        if (((_name5 = a.token.name) !== null && _name5 !== void 0 ? _name5 : '') < ((_name6 = b.token.name) !== null && _name6 !== void 0 ? _name6 : '')) return -1;
        return 0;
    };
} //#endregion
;


/***/ }),

/***/ 23033:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const BN = __webpack_require__(28891)
const EC = __webpack_require__(75367).ec
const secp256k1 = new EC('secp256k1')
const deterministicGenerateK = __webpack_require__(94738)

const ZERO32 = Buffer.alloc(32, 0)
const EC_GROUP_ORDER = Buffer.from('fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141', 'hex')
const EC_P = Buffer.from('fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f', 'hex')

const n = secp256k1.curve.n
const nDiv2 = n.shrn(1)
const G = secp256k1.curve.g

const THROW_BAD_PRIVATE = 'Expected Private'
const THROW_BAD_POINT = 'Expected Point'
const THROW_BAD_TWEAK = 'Expected Tweak'
const THROW_BAD_HASH = 'Expected Hash'
const THROW_BAD_SIGNATURE = 'Expected Signature'
const THROW_BAD_EXTRA_DATA = 'Expected Extra Data (32 bytes)'

function isScalar (x) {
  return Buffer.isBuffer(x) && x.length === 32
}

function isOrderScalar (x) {
  if (!isScalar(x)) return false
  return x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isPoint (p) {
  if (!Buffer.isBuffer(p)) return false
  if (p.length < 33) return false

  const t = p[0]
  const x = p.slice(1, 33)
  if (x.compare(ZERO32) === 0) return false
  if (x.compare(EC_P) >= 0) return false
  if ((t === 0x02 || t === 0x03) && p.length === 33) {
    try { decodeFrom(p) } catch (e) { return false } // TODO: temporary
    return true
  }

  const y = p.slice(33)
  if (y.compare(ZERO32) === 0) return false
  if (y.compare(EC_P) >= 0) return false
  if (t === 0x04 && p.length === 65) return true
  return false
}

function __isPointCompressed (p) {
  return p[0] !== 0x04
}

function isPointCompressed (p) {
  if (!isPoint(p)) return false
  return __isPointCompressed(p)
}

function isPrivate (x) {
  if (!isScalar(x)) return false
  return x.compare(ZERO32) > 0 && // > 0
    x.compare(EC_GROUP_ORDER) < 0 // < G
}

function isSignature (value) {
  const r = value.slice(0, 32)
  const s = value.slice(32, 64)
  return Buffer.isBuffer(value) && value.length === 64 &&
    r.compare(EC_GROUP_ORDER) < 0 &&
    s.compare(EC_GROUP_ORDER) < 0
}

function assumeCompression (value, pubkey) {
  if (value === undefined && pubkey !== undefined) return __isPointCompressed(pubkey)
  if (value === undefined) return true
  return value
}

function fromBuffer (d) { return new BN(d) }
function toBuffer (d) { return d.toArrayLike(Buffer, 'be', 32) }
function decodeFrom (P) { return secp256k1.curve.decodePoint(P) }
function getEncoded (P, compressed) { return Buffer.from(P._encode(compressed)) }

function pointAdd (pA, pB, __compressed) {
  if (!isPoint(pA)) throw new TypeError(THROW_BAD_POINT)
  if (!isPoint(pB)) throw new TypeError(THROW_BAD_POINT)

  const a = decodeFrom(pA)
  const b = decodeFrom(pB)
  const pp = a.add(b)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed, pA)
  return getEncoded(pp, compressed)
}

function pointAddScalar (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  if (tweak.compare(ZERO32) === 0) return getEncoded(pp, compressed)

  const tt = fromBuffer(tweak)
  const qq = G.mul(tt)
  const uu = pp.add(qq)
  if (uu.isInfinity()) return null

  return getEncoded(uu, compressed)
}

function pointCompress (p, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)

  const pp = decodeFrom(p)
  if (pp.isInfinity()) throw new TypeError(THROW_BAD_POINT)

  const compressed = assumeCompression(__compressed, p)

  return getEncoded(pp, compressed)
}

function pointFromScalar (d, __compressed) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)

  const dd = fromBuffer(d)
  const pp = G.mul(dd)
  if (pp.isInfinity()) return null

  const compressed = assumeCompression(__compressed)
  return getEncoded(pp, compressed)
}

function pointMultiply (p, tweak, __compressed) {
  if (!isPoint(p)) throw new TypeError(THROW_BAD_POINT)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const compressed = assumeCompression(__compressed, p)
  const pp = decodeFrom(p)
  const tt = fromBuffer(tweak)
  const qq = pp.mul(tt)
  if (qq.isInfinity()) return null

  return getEncoded(qq, compressed)
}

function privateAdd (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.add(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function privateSub (d, tweak) {
  if (!isPrivate(d)) throw new TypeError(THROW_BAD_PRIVATE)
  if (!isOrderScalar(tweak)) throw new TypeError(THROW_BAD_TWEAK)

  const dd = fromBuffer(d)
  const tt = fromBuffer(tweak)
  const dt = toBuffer(dd.sub(tt).umod(n))
  if (!isPrivate(dt)) return null

  return dt
}

function sign (hash, x) {
  return __sign(hash, x)
}

function signWithEntropy (hash, x, addData) {
  return __sign(hash, x, addData)
}

function __sign (hash, x, addData) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPrivate(x)) throw new TypeError(THROW_BAD_PRIVATE)
  if (addData !== undefined && !isScalar(addData)) throw new TypeError(THROW_BAD_EXTRA_DATA)

  const d = fromBuffer(x)
  const e = fromBuffer(hash)

  let r, s
  const checkSig = function (k) {
    const kI = fromBuffer(k)
    const Q = G.mul(kI)

    if (Q.isInfinity()) return false

    r = Q.x.umod(n)
    if (r.isZero() === 0) return false

    s = kI
      .invm(n)
      .mul(e.add(d.mul(r)))
      .umod(n)
    if (s.isZero() === 0) return false

    return true
  }

  deterministicGenerateK(hash, x, checkSig, isPrivate, addData)

  // enforce low S values, see bip62: 'low s values in signatures'
  if (s.cmp(nDiv2) > 0) {
    s = n.sub(s)
  }

  const buffer = Buffer.allocUnsafe(64)
  toBuffer(r).copy(buffer, 0)
  toBuffer(s).copy(buffer, 32)
  return buffer
}

function verify (hash, q, signature, strict) {
  if (!isScalar(hash)) throw new TypeError(THROW_BAD_HASH)
  if (!isPoint(q)) throw new TypeError(THROW_BAD_POINT)

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (1, isSignature enforces '< n - 1')
  if (!isSignature(signature)) throw new TypeError(THROW_BAD_SIGNATURE)

  const Q = decodeFrom(q)
  const r = fromBuffer(signature.slice(0, 32))
  const s = fromBuffer(signature.slice(32, 64))

  if (strict && s.cmp(nDiv2) > 0) {
    return false
  }

  // 1.4.1 Enforce r and s are both integers in the interval [1, n − 1] (2, enforces '> 0')
  if (r.gtn(0) <= 0 /* || r.compareTo(n) >= 0 */) return false
  if (s.gtn(0) <= 0 /* || s.compareTo(n) >= 0 */) return false

  // 1.4.2 H = Hash(M), already done by the user
  // 1.4.3 e = H
  const e = fromBuffer(hash)

  // Compute s^-1
  const sInv = s.invm(n)

  // 1.4.4 Compute u1 = es^−1 mod n
  //               u2 = rs^−1 mod n
  const u1 = e.mul(sInv).umod(n)
  const u2 = r.mul(sInv).umod(n)

  // 1.4.5 Compute R = (xR, yR)
  //               R = u1G + u2Q
  const R = G.mulAdd(u1, Q, u2)

  // 1.4.5 (cont.) Enforce R is not at infinity
  if (R.isInfinity()) return false

  // 1.4.6 Convert the field element R.x to an integer
  const xR = R.x

  // 1.4.7 Set v = xR mod n
  const v = xR.umod(n)

  // 1.4.8 If v = r, output "valid", and if v != r, output "invalid"
  return v.eq(r)
}

module.exports = {
  isPoint,
  isPointCompressed,
  isPrivate,
  pointAdd,
  pointAddScalar,
  pointCompress,
  pointFromScalar,
  pointMultiply,
  privateAdd,
  privateSub,
  sign,
  signWithEntropy,
  verify
}


/***/ }),

/***/ 47476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ed2ff493cbd90c01c34a.svg";

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
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			if (chunkId === 1440) return "js/npm.validator.js";
/******/ 			if (chunkId === 2162) return "js/npm.z-schema.js";
/******/ 			if (chunkId === 8000) return "js/npm.lodash.isequal.js";
/******/ 			if (chunkId === 8393) return "js/npm.lodash.get.js";
/******/ 			if (chunkId === 6739) return "js/npm.idb.js";
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 3906) return "js/3906.js";
/******/ 			if (chunkId === 8405) return "js/8405.js";
/******/ 			if (chunkId === 405) return "js/npm.react-feather.js";
/******/ 			if (chunkId === 23) return "js/23.js";
/******/ 			if (chunkId === 404) return "js/404.js";
/******/ 			if (chunkId === 3148) return "js/3148.js";
/******/ 			if (chunkId === 5732) return "js/npm.webcrypto-liner.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","313":"npm.ef-core","855":"npm.json2csv","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1902":"npm-ns.dimensiondev.snapshot.js","2245":"npm.react-highlight-words","2261":"npm.wyvern-js","2598":"npm.react-hook-form","2939":"npm-ns.uniswap.v3-sdk","3294":"npm.date-fns","3322":"npm.color","3850":"npm.arweave","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4462":"npm.text-encoding","4477":"npm.gun","4554":"Plugin/Poll","5049":"Gun","5678":"npm.d3-voronoi","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6912":"npm.react-draggable","6948":"ShapeDetection","7015":"npm.d3-transition","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","9278":"npm.axios","9714":"npm.wyvern-schemas"}[chunkId] || chunkId) + ".js";
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var send = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		
/******/ 		var contentScriptLoader = (url, done, chunkId) => {
/******/ 			send({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var normalLoader = (url, done, chunkId) => {
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
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : normalLoader
/******/ 		else if (!isWorker) __webpack_require__.l = contentScriptLoader
/******/ 		else { throw new TypeError('Unreachable loader: content script + Worker') }
/******/ 		
/******/ 	
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
/******/ 		__webpack_require__.j = 8463;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
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
/******/ 			8463: 0,
/******/ 			9443: 0
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
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
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
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,8883,7367,7988,5519,3193,5629,4194,3137], () => (__webpack_require__(4659)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,8883,7367,7988,5519,3193,5629,4194,3137], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;