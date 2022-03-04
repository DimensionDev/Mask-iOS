(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7801],{

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 69973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "fR": () => (/* binding */ useTagEnhancer),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7280);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98294);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27194);




const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Container(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        color: "textPrimary",
        fontSize: "inherit",
        children: props.children
    }));
});
const Link = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Anchor(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: props.href,
        children: props.children
    }));
});
function useTagEnhancer(kind, content) {
    const plugin = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPluginsSNSAdaptor */ .Pz)(false).filter((x)=>x.enhanceTag
    ).at(0);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        var ref, ref1;
        plugin === null || plugin === void 0 ? void 0 : (ref = plugin.enhanceTag) === null || ref === void 0 ? void 0 : (ref1 = ref.onClick) === null || ref1 === void 0 ? void 0 : ref1.call(ref, kind, content, event);
    }, [
        plugin
    ]);
    const onMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        var ref, ref2;
        const cancel = plugin === null || plugin === void 0 ? void 0 : (ref = plugin.enhanceTag) === null || ref === void 0 ? void 0 : (ref2 = ref.onHover) === null || ref2 === void 0 ? void 0 : ref2.call(ref, kind, content, event);
        event.currentTarget.addEventListener('mouseleave', ()=>{
            return cancel === null || cancel === void 0 ? void 0 : cancel();
        }, {
            once: true
        });
    }, [
        plugin
    ]);
    return {
        onClick,
        onMouseEnter,
        hasMatch: !!plugin
    };
}


/***/ }),

/***/ 53763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ TypedMessageRenderContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(68876);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/registry.ts

const TypedMessageRenderRegistry = (0,dom/* createTypedMessageRenderRegistry */.dR)();

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.5.1_react@18.0.0-rc.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(47175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Text = __webpack_require__(69973);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/transformer.ts

var Order;
(function(Order) {
    Order[Order["Flatten"] = 1000] = "Flatten";
    Order[Order["ParseLink"] = 900] = "ParseLink";
    Order[Order[// MaskPayload = 800,
    /** @deprecated */ "PayloadReplacer"] = 700] = "PayloadReplacer";
    Order[Order["Plugins"] = 500] = "Plugins";
})(Order || (Order = {}));
/**
 * Message transformation order:
 *
 * sns_parsed_message
 * |> flatten
 * |> parse links and tags (@user, #tag, $NAME)
 * |> Mask Payload parser (installed in SNS Adaptor starts)
 * |> plugins
 */ const TypedMessageTransformers = (0,base/* composeTransformers */.gO)();
const TypedMessagePluginTransformers = (0,base/* composeTransformers */.gO)();
TypedMessageTransformers.addTransformer(base/* FlattenTypedMessage */.po, Order.Flatten);
TypedMessageTransformers.addTransformer(base/* ParseLinkTransformer */.al, Order.ParseLink);
TypedMessageTransformers.addTransformer(TypedMessagePluginTransformers.subscription, Order.Plugins);
// We will use MaskPayload transformer to replace it in the future PR.
const matcher = /^https?:\/\/mask(\.io|book\.com)/i;
TypedMessageTransformers.addTransformer(function visitor(message, context) {
    if ((0,base/* isTypedMessageAnchor */.bj)(message) && message.href && (matcher.test(message.href) || matcher.test(message.content))) {
        return (0,base/* makeTypedMessageAnchor */.Jv)('normal', 'https://mask.io', 'Mask');
    }
    return (0,base/* visitEachTypedMessageChild */.IJ)(message, visitor, context);
}, Order.PayloadReplacer);

;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/context.tsx








function TypedMessageRenderContext(props) {
    const registry = (0,use_subscription.useSubscription)(TypedMessageRenderRegistry.subscription);
    const transformerFunction = (0,use_subscription.useSubscription)(TypedMessageTransformers.subscription);
    const Provider = (0,react.useMemo)(()=>{
        return {
            Container: Text/* Container */.W2,
            Link: Text/* Link */.rU,
            Metadata: props.metadataRender,
            ...props.renderFragments
        };
    }, [
        props.metadataRender,
        props.renderFragments
    ]);
    return(// basic render fragments provider: Text, Link, Image and Metadata
    /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* RenderFragmentsContext.Provider */.l3.Provider, {
        value: Provider,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TransformerProvider.Provider */.lG.Provider, {
            value: transformerFunction,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TransformationContextProvider.Provider */.T6.Provider, {
                value: props.context || base/* emptyTransformationContext */.vg,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* RegistryContext.Provider */.gE.Provider, {
                    value: registry,
                    children: props.children
                })
            })
        })
    }));
}


/***/ }),

/***/ 41529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FA": () => (/* binding */ useMyIdentities),
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity),
/* harmony export */   "hg": () => (/* binding */ useFriendsList)
/* harmony export */ });
/* unused harmony export CurrentIdentitySubscription */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39850);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61751);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47175);






function useFriendsList() {
    const ref = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.friends */ .EJ.friends);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[
            ...ref.values()
        ]
    , [
        ref
    ]);
}
const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef({
    identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ProfileIdentifier.unknown */ .WO.unknown
});
function useLastRecognizedIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useCurrentVisitingIdentity() {
    var ref;
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_);
}
function useMyIdentities() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles */ .EJ.profiles);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_4__.useSubscription)(CurrentIdentitySubscription);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        var ref;
        const all = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (((ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized) || default_).value.identifier;
        return all.find((i)=>i.identifier.toText() === current.toText()
        ) || all[0];
    },
    subscribe (sub) {
        var ref;
        const a = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = (ref = _social_network__WEBPACK_IMPORTED_MODULE_3__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.addListener(sub);
        return ()=>{
            return [
                a(),
                b === null || b === void 0 ? void 0 : b()
            ];
        };
    }
};


/***/ }),

/***/ 9689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js + 1 modules
var debounce = __webpack_require__(82617);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,src/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 40127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45925);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21202);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61751);
/* harmony import */ var _InjectedComponents_SetupGuide_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51212);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41529);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9689);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide_types__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: currentPersonaIdentifier === null || currentPersonaIdentifier === void 0 ? void 0 : currentPersonaIdentifier.toText()
    });
};
function usePersonaConnectStatus() {
    const personas = (0,_useMyPersonas__WEBPACK_IMPORTED_MODULE_8__/* .useMyPersonas */ .n)();
    const lastRecognized = (0,_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useLastRecognizedIdentity */ .FB)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier, lastRecognized.identifier.userId);
        let connected = false;
        personas.forEach((p)=>{
            p.identifier;
            if (p.linkedProfiles.get(id)) {
                connected = true;
            }
        });
        const action = !personas.length ? createPersona : !connected ? connectPersona : null;
        return {
            connected,
            action,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized,
        _social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI */ .LM
    ]);
}


/***/ }),

/***/ 76262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61751);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);



function usePostLink() {
    var _utils, ref;
    const id = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.snsID */ .H9.snsID();
    const identifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.identifier */ .H9.identifier();
    if (!id || !identifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.utils */ .LM.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, identifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const payload = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.containingMaskPayload */ .H9.containingMaskPayload().unwrapOr(undefined);
    if (!payload) return undefined;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 51212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ SetupGuideStep)
/* harmony export */ });
var SetupGuideStep;
(function(SetupGuideStep) {
    SetupGuideStep["FindUsername"] = 'find-username';
    SetupGuideStep["VerifyOnNextID"] = 'next-id-verify';
    SetupGuideStep["PinExtension"] = 'pin-extension';
    SetupGuideStep["Close"] = 'close';
})(SetupGuideStep || (SetupGuideStep = {}));


/***/ }),

/***/ 42783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59302);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45925);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15164);





// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ const Image = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL , onError ,  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : (event)=>{
                return onError === null || onError === void 0 ? void 0 : onError(event);
            },
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    }));
});
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {}
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

/***/ 57464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(19063);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(73322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(10612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(99760);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(7466);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33312);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(54146);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(65375);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === base/* MINDS_ID */.fN || snsId === facebook_com_base/* FACEBOOK_ID */.Iz ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        });
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 70119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "x7": () => (/* binding */ MaskFilledIcon)
/* harmony export */ });
/* unused harmony exports MaskTextIcon, WalletSharp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96919);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73322);

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskSmileFaceSVG = ({ size =24  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 600 600",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
;
const MaskSmileFaceSharpSVG = ({ size =19  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size  })=>/*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskFilledSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
            fill: "#0F1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.8466 9.8044V14.1215H7.68749L7.12132 14.1216C7.72056 16.7411 10.0987 18.6977 12.9412 18.6977C15.2911 18.6977 17.3237 17.3604 18.2961 15.4168L20.8466 15.4167V19.0431C20.8466 19.9014 20.1396 20.5973 19.2675 20.5973H6.63476C5.76265 20.5973 5.05566 19.9014 5.05566 19.0431V9.8044H20.8466ZM16.7816 15.4168C15.9442 16.6218 14.5365 17.4126 12.9412 17.4126C11.3458 17.4126 9.93816 16.6218 9.10072 15.4168H16.7816ZM9.57363 10.8405C8.33615 10.8405 7.3124 11.7411 7.14213 12.9128L8.48817 12.9128C8.63617 12.4618 9.0662 12.1357 9.57363 12.1357C10.0811 12.1357 10.5111 12.4618 10.6591 12.9128L12.0051 12.9128C11.8349 11.7411 10.8111 10.8405 9.57363 10.8405ZM16.3287 10.8405C15.0912 10.8405 14.0674 11.7411 13.8972 12.9128L15.2432 12.9128C15.3912 12.4618 15.8212 12.1357 16.3287 12.1357C16.8361 12.1357 17.2661 12.4618 17.4141 12.9128L18.7601 12.9128C18.5899 11.7411 17.5661 10.8405 16.3287 10.8405ZM19.2675 5.05554C20.1396 5.05554 20.8466 5.75137 20.8466 6.60971V8.50926H5.05566V6.60971C5.05566 5.75137 5.76265 5.05554 6.63476 5.05554H19.2675Z",
            fill: "white"
        })
    ]
});
const MaskSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskTextIcon(props) {
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: MaskTextSVG
    }));
}
function MaskIcon(props) {
    const { size =24  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    }));
}
function MaskIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    }));
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 38 38",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    }));
}
function MaskSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    const { size =20  } = props;
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    }));
}
function MaskFilledIcon(props) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const icon = new URL(/* asset import */ __webpack_require__(33265), __webpack_require__.b).toString();
    const icon_dark = new URL(/* asset import */ __webpack_require__(1164), __webpack_require__.b).toString();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    }));
}


/***/ }),

/***/ 66991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13573);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66559);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3787);



function pasteImageToCompositionDefault(hasSucceed) {
    return async function(url, { recover , relatedTextPayload  }) {
        const image = typeof url === 'string' ? await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .downloadUrl */ .GR)(url) : url;
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .waitDocumentReadyState */ .uL)('interactive');
        if (relatedTextPayload) {
            var ref, ref1;
            (ref = _ui__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.automation.nativeCompositionDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.appendText) === null || ref1 === void 0 ? void 0 : ref1.call(ref, relatedTextPayload, {
                recover: false
            });
            await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .delay */ .gw)(500);
        }
        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .pasteImageToActiveElements */ .bF)(image);
        if (await hasSucceed()) return;
        if (recover) {
            _utils__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.autoPasteFailed.sendToLocal */ .ql.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}


/***/ }),

/***/ 89887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(17734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(35428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(7466);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(91267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(67182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(10612);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(42783);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-draggable@4.4.4_757a802188413a36d4f24237d13b8e90/node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(71595);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/components/shared/DraggableDiv.tsx




const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            top: 0,
            left: 0,
            zIndex: 9999,
            pointerEvents: 'none'
        },
        paper: {
            [theme.breakpoints.up('sm')]: {
                top: '2em',
                right: '2em'
            },
            [theme.breakpoints.down('sm')]: {
                bottom: '2em'
            },
            maxWidth: 550,
            position: 'fixed',
            pointerEvents: 'initial'
        }
    })
);
function DraggableDiv({ DraggableProps , ...props }) {
    const { classes  } = useStyle();
    const ref = (0,react.useRef)(null);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((cjs_default()), {
            // @ts-ignore
            nodeRef: ref,
            bounds: "parent",
            cancel: "p, h1, input, button, address",
            handle: "nav",
            ...DraggableProps,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ...props,
                ref: ref,
                className: classes.paper
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/CloudDownload.js
var CloudDownload = __webpack_require__(88142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33312);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AutoPasteFailedDialog.tsx













const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        title: {
            marginLeft: theme.spacing(1)
        },
        paper: {},
        button: {
            marginRight: theme.spacing(1)
        }
    })
);
function AutoPasteFailedDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [url, setURL] = (0,react.useState)('');
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const { onClose , data  } = props;
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const [, copy] = (0,useCopyToClipboard/* default */.Z)();
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const permission = (0,utils/* useQueryNavigatorPermission */.eD)(true, 'clipboard-write');
    const fileName = `masknetwork-encrypted-${(0,format/* default */.Z)(Date.now(), 'yyyyMMddHHmmss')}.png`;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DraggableDiv, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
            elevation: 2,
            className: classes.paper,
            style: isMobile ? {
                width: '100vw'
            } : undefined,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "small",
                                onClick: onClose,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.title,
                                children: t('auto_paste_failed_dialog_title')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    sx: {
                        paddingTop: 0
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                sx: {
                                    marginBottom: 1
                                },
                                children: t('auto_paste_failed_dialog_content')
                            })
                        }),
                        props.data.text ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    multiline: true,
                                    fullWidth: true,
                                    value: data.text,
                                    InputProps: {
                                        readOnly: true
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        marginBottom: 1
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "contained",
                                    onClick: ()=>{
                                        copy(data.text);
                                        showSnackbar(t('copy_success_of_text'), {
                                            variant: 'success',
                                            preventDuplicate: true,
                                            anchorOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center'
                                            }
                                        });
                                        var _image;
                                        (_image = data.image) !== null && _image !== void 0 ? _image : onClose();
                                    },
                                    children: t('copy_text')
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            sx: {
                                marginBottom: 1
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            style: {
                                textAlign: permission === 'granted' ? 'left' : 'center'
                            },
                            children: [
                                data.image ? // It must be img
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                    component: "img",
                                    onURL: setURL,
                                    src: data.image,
                                    style: {
                                        height: 'auto'
                                    }
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        marginBottom: 1
                                    }
                                }),
                                permission === 'granted' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "contained",
                                    onClick: async ()=>{
                                        if (!data.image) return;
                                        await navigator.clipboard.write([
                                            new ClipboardItem({
                                                [data.image.type]: data.image
                                            }), 
                                        ]);
                                        showSnackbar(t('copy_success_of_image'), {
                                            variant: 'success',
                                            preventDuplicate: true,
                                            anchorOrigin: {
                                                vertical: 'top',
                                                horizontal: 'center'
                                            }
                                        });
                                    },
                                    children: t('copy_image')
                                }) : null,
                                url ?  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    className: classes.button,
                                    variant: "text",
                                    onClick: ()=>(0,shared/* saveFileFromUrl */.rs)(url, fileName)
                                    ,
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudDownload/* default */.Z, {}),
                                    children: t('download')
                                }) : null,
                                url && "app" === 'web' ? /*#__PURE__*/ 0 : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {})
            ]
        })
    }));
}
function useAutoPasteFailedDialog() {
    const [open, setOpen] = (0,react.useState)(false);
    const [data1, setData] = (0,react.useState)({
        text: ''
    });
    return [
        (data)=>{
            setData(data);
            setOpen(true);
        },
        open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoPasteFailedDialog, {
            onClose: ()=>setOpen(false)
            ,
            data: data1
        }) : null, 
    ];
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageInspector.tsx







const PluginRender = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useAnyMode */.Pz.visibility.useAnyMode, (x)=>x.GlobalInjection
);
function PageInspector(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { showSnackbar , closeSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const [autoPasteFailed, JSX] = useAutoPasteFailedDialog();
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    (0,react.useEffect)(()=>utils/* MaskMessages.events.autoPasteFailed.on */.ql.events.autoPasteFailed.on((data)=>{
            const key = data.image ? Math.random() : data.text;
            const close = ()=>{
                closeSnackbar(key);
            };
            const timeout = setTimeout(close, 15 * 1000 /** 15 seconds */ );
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: t('auto_paste_failed_snackbar')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        justifyContent: "flex-end",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "inherit",
                                variant: "text",
                                onClick: ()=>[
                                        clearTimeout(timeout),
                                        close(),
                                        autoPasteFailed(data)
                                    ]
                                ,
                                children: t('auto_paste_failed_snackbar_action')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "inherit",
                                variant: "text",
                                "aria-label": "Close",
                                onClick: close,
                                children: t('auto_paste_failed_snackbar_action_close')
                            })
                        ]
                    })
                ]
            }), {
                variant: 'info',
                preventDuplicate: true,
                anchorOrigin: xsMatched ? {
                    vertical: 'bottom',
                    horizontal: 'center'
                } : {
                    horizontal: 'right',
                    vertical: 'top'
                },
                key,
                action: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {})
            });
        })
    , []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            JSX,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {})
        ]
    }));
}

// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(84749);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PageInspector.tsx







function injectPageInspectorDefault(config = {}, additionalPropsToPageInspector = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({})) {
    const PageInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PageInspectorDefault() {
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPageInspector(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspector, {
            ...additionalProps
        }));
    });
    return function injectPageInspector(signal) {
        const watcher = new umd.MutationObserverWatcher(new umd.LiveSelector().querySelector('body'));
        (0,utils_watcher/* startWatch */.f)(watcher, signal);
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspectorDefault, {}));
    };
}


/***/ }),

/***/ 13360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(24515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(68876);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 2 modules
var context = __webpack_require__(53763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(61544);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33312);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/colors/green.js
var green = __webpack_require__(66577);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(70119);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(3787);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AdditionalPostContent.tsx













var AdditionalIcon;
(function(AdditionalIcon) {
    AdditionalIcon["check"] = "check";
    AdditionalIcon["error"] = "error";
})(AdditionalIcon || (AdditionalIcon = {}));
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            width: '100%',
            backgroundColor: 'transparent',
            borderColor: 'transparent'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            marginRight: theme.spacing(1),
            display: 'flex',
            width: 24,
            height: 24
        },
        content: {
            margin: theme.spacing(1, 0),
            padding: 0,
            overflowWrap: 'break-word'
        },
        rightIcon: {
            paddingLeft: theme.spacing(0.75)
        }
    })
);
const AdditionalContent = /*#__PURE__*/ (0,react.memo)(function AdditionalContent(props1) {
    var ref;
    const { classes  } = useStyles();
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    const { progress , title , message  } = props1;
    const ProgressJSX = !progress ? null : progress === true ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 20,
        color: "primary",
        variant: "indeterminate"
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 20,
        color: "primary",
        ...progress
    });
    const RightIconJSX = ((icon)=>{
        const props = {
            fontSize: 'small',
            className: classes.rightIcon
        };
        if (icon === AdditionalIcon.check) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
            htmlColor: green/* default.500 */.Z[500],
            ...props
        }));
        if (icon === AdditionalIcon.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
            color: "error",
            ...props
        }));
        return null;
    })(props1.titleIcon);
    const header = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "caption",
        color: message ? 'textSecondary' : 'textPrimary',
        gutterBottom: true,
        className: classnames_default()(classes.title),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.icon,
                children: ProgressJSX || /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    flex: 1,
                    display: 'flex'
                },
                children: [
                    title,
                    RightIconJSX
                ]
            }),
            props1.headerActions
        ]
    });
    const TypedMessage = (0,react.useMemo)(()=>{
        if (typeof message === 'string') return (0,base/* makeTypedMessageText */.P)(message);
        if (typeof message === 'undefined') return (0,base/* makeTypedMessageText */.P)('');
        return message;
    }, [
        message
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        className: classes.root,
        elevation: 0,
        onClick: stop,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: classes.content,
                children: header
            }),
            message ? /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TextResizeContext.Provider */.FG.Provider, {
                    value: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* TypedMessageRenderContext */.w, {
                        renderFragments: (ref = ui.activatedSocialNetworkUI === null || ui.activatedSocialNetworkUI === void 0 ? void 0 : ui.activatedSocialNetworkUI.customization.componentOverwrite) === null || ref === void 0 ? void 0 : ref.RenderFragments,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TypedMessageRender */.Ot, {
                            message: TypedMessage
                        })
                    })
                })
            }) : null
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(10612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(3073);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(13863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(59216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(73268);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(10);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(58364);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_757a802188413a36d4f24237d13b8e90/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(4767);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/SelectProfileUI.tsx








const SelectProfileUI_useStyles = (0,src/* makeStyles */.ZL)()({
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
    const classes = (0,src/* useStylesExtends */.Bc)(SelectProfileUI_useStyles(), props);
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




// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SelectPeopleDialog.tsx







const SelectPeopleDialog_useStyles = (0,src/* makeStyles */.ZL)()({
    title: {
        paddingBottom: 0
    },
    content: {
        padding: '0 12px'
    },
    progress: {
        marginRight: 6
    }
});
function SelectProfileDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(SelectPeopleDialog_useStyles(), props);
    const [people, select] = (0,react.useState)([]);
    const [committed, setCommitted] = (0,react.useState)(false);
    const onClose = (0,react.useCallback)(()=>{
        props.onClose();
        setCommitted(false);
        select([]);
    }, [
        props
    ]);
    const [rejection, onReject] = (0,react.useState)();
    const share = (0,react.useCallback)(()=>{
        setCommitted(true);
        props.onSelect(people).then(onClose, onReject);
    }, [
        onClose,
        people,
        props
    ]);
    const canCommit = committed || people.length === 0;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        onClose: onClose,
        open: props.open,
        title: t('share_to'),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileUI, {
                    frozenSelected: props.alreadySelectedPreviously,
                    disabled: committed,
                    items: props.profiles,
                    selected: people,
                    onSetSelected: select
                })
            }),
            rejection && /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.content,
                children: [
                    "Error: ",
                    rejection.message,
                    " ",
                    console.error(rejection)
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        size: "large",
                        onClick: onClose,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                        size: "large",
                        color: "inherit",
                        disabled: canCommit,
                        onClick: share,
                        children: [
                            committed && /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                "aria-busy": true,
                                className: classes.progress,
                                size: 16,
                                variant: "indeterminate"
                            }),
                            t(committed ? 'sharing' : 'share')
                        ]
                    })
                ]
            })
        ]
    }));
}
function useShareMenu(people, onSelect, alreadySelectedPreviously, SelectPeopleDialogProps) {
    const [show, setShow] = (0,react.useState)(false);
    const showShare = (0,react.useCallback)(()=>setShow(true)
    , []);
    const hideShare = (0,react.useCallback)(()=>setShow(false)
    , []);
    return {
        showShare,
        ShareMenu: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileDialog, {
            alreadySelectedPreviously: alreadySelectedPreviously,
            profiles: people,
            open: show,
            onClose: hideShare,
            onSelect: onSelect,
            ...SelectPeopleDialogProps
        })
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(98294);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(6900);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx



function wrapAuthorDifferentMessage(author, postBy, jsx) {
    if (!(author === null || author === void 0 ? void 0 : author.userId)) return jsx;
    if ((author === null || author === void 0 ? void 0 : author.isUnknown) || (postBy === null || postBy === void 0 ? void 0 : postBy.isUnknown)) return jsx;
    if (shared_base_src/* Identifier.equals */.xb.equals(author, postBy)) return jsx;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            locales_legacy/* i18n.t */.a.t('decrypted_postbox_author_mismatch', {
                name: author === null || author === void 0 ? void 0 : author.userId
            }),
            jsx
        ]
    }));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Switch/Switch.js
var Switch = __webpack_require__(69209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(82229);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(74926);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(40127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.4_d1c81cb414c255fa45866714477ddb5d/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(57702);
;// CONCATENATED MODULE: ./src/plugins/MaskPluginWrapper.tsx











const MaskPluginWrapper_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.secondaryDivider}`,
            cursor: 'default',
            ...(0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1.5)
        },
        action: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        body: {
            borderTop: `1px solid ${theme.palette.secondaryDivider}`,
            padding: theme.spacing(2)
        },
        button: {
            color: src/* MaskColorVar.twitterButtonText */.ZN.twitterButtonText,
            '&,&:hover': {
                background: src/* MaskColorVar.twitterButton */.ZN.twitterButton
            }
        }
    };
});
function MaskPostExtraInfoWrapper(props) {
    const { classes  } = MaskPluginWrapper_useStyles();
    const { title , children , action , publisher , publisherLink  } = props;
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const name = !personaConnectStatus.hasPersona ? t('please_create_persona') : !personaConnectStatus.connected ? t('please_connect_persona') : title;
    const actionButton = (0,react.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t('connect_persona') : t('create_persona');
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "contained",
            className: classes.button,
            onClick: personaConnectStatus.action,
            children: button
        }));
    }, [
        personaConnectStatus,
        t
    ]);
    const publisherInfo = (0,react.useMemo)(()=>{
        if (!publisher) return null;
        const main = /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            fontSize: "1.1rem",
            fontWeight: "400",
            color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            children: publisher
        });
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: src/* MaskColorVar.textSecondary */.ZN.textSecondary,
                    children: "Provided by"
                }),
                publisherLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: publisherLink,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: main
                }) : main
            ]
        }));
    }, [
        publisher,
        publisherLink
    ]);
    const inner = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
                        size: 45
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: [
                                    "Mask Plugin ",
                                    !personaConnectStatus.connected && title ? `(${title})` : ''
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.action,
                        children: actionButton || action || publisherInfo
                    })
                ]
            }),
            personaConnectStatus.connected && children ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
            message: "Mask is loading this content..."
        }),
        children: inner
    }));
};
const MaskPostExtraPluginWrapper = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { ID , name , publisher  } = props.definition;
    const t = (0,plugin_infra_src/* usePluginI18NField */.eS)();
    const [width, setWidth] = (0,react.useState)(undefined);
    const [open, setOpen] = (0,react.useState)(false);
    const [title, setTitle] = (0,react.useState)(undefined);
    (0,react.useImperativeHandle)(ref, ()=>({
            setWidth,
            setWrap: setOpen,
            setWrapperName: setTitle
        })
    , []);
    if (!open) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
        title: title || t(ID, name),
        width: width,
        publisher: publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(plugin_infra_src/* PluginI18NFieldRender */.KP, {
            pluginID: ID,
            field: publisher.name
        }) : undefined,
        publisherLink: publisher === null || publisher === void 0 ? void 0 : publisher.link,
        children: props.children
    }));
});

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DisabledPluginSuggestion.tsx







function useDisabledPlugins() {
    const activated = new Set((0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any').map((x)=>x.ID
    ));
    const minimalMode = new Set((0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)(true).map((x)=>x.ID
    ));
    const disabledPlugins = [
        ...plugin_infra_src/* registeredPlugins */.i1
    ].filter((x)=>!activated.has(x.ID) || minimalMode.has(x.ID)
    );
    return disabledPlugins;
}
function useDisabledPluginSuggestionFromPost(postContent, metaLinks) {
    const disabled = useDisabledPlugins().filter((x)=>{
        var ref;
        return (ref = x.contribution) === null || ref === void 0 ? void 0 : ref.postContent;
    });
    const { some  } = postContent;
    const matches = disabled.filter((x)=>{
        for (const pattern of x.contribution.postContent){
            if (some && postContent.val.match(pattern)) return true;
            if (metaLinks.some((link)=>link.match(pattern)
            )) return true;
        }
        return false;
    });
    return matches;
}
function useDisabledPluginSuggestionFromMeta(meta) {
    const disabled = useDisabledPlugins().filter((x)=>{
        var ref;
        return (ref = x.contribution) === null || ref === void 0 ? void 0 : ref.metadataKeys;
    });
    if (!meta) return [];
    const keys = [
        ...meta.keys()
    ];
    const matches = disabled.filter((x)=>{
        const contributes = x.contribution.metadataKeys;
        return keys.some((key)=>contributes.has(key)
        );
    });
    return matches;
}
function PossiblePluginSuggestionPostInspector() {
    const message = (0,base/* extractTextFromTypedMessage */.Vc)(plugin_infra_src/* usePostInfoDetails.rawMessage */.H9.rawMessage());
    const metaLinks = plugin_infra_src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
    const matches = useDisabledPluginSuggestionFromPost(message, metaLinks);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
        plugins: matches
    }));
}
function PossiblePluginSuggestionUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const t2 = (0,plugin_infra_src/* usePluginI18NField */.eS)();
    const { plugins  } = props;
    if (!plugins.length) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: plugins.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
                title: t('plugin_not_enabled', {
                    plugin: t2(x.ID, x.name)
                }),
                action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                    sx: {
                        marginRight: '-12px'
                    },
                    onChange: ()=>service/* default.Settings.setPluginMinimalModeEnabled */.ZP.Settings.setPluginMinimalModeEnabled(x.ID, false)
                })
            }, x.ID)
        )
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPostMetadataRender.tsx





const Decrypted = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (x)=>x.DecryptedInspector
, MaskPostExtraPluginWrapper);
function DecryptedUI_PluginRendererWithSuggestion(props) {
    const a = useDisabledPluginSuggestionFromMeta(props.metadata);
    const b = useDisabledPluginSuggestionFromPost((0,base/* extractTextFromTypedMessage */.Vc)(props.message), []);
    const suggest = Array.from(new Set(a.concat(b)));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
                plugins: suggest
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Decrypted, {
                ...props
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx









const useSuccessStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        header: {
            display: 'flex',
            alignItems: 'center'
        },
        addRecipientsLink: {
            cursor: 'pointer',
            marginLeft: theme.spacing(1)
        },
        signatureVerifyPassed: {
            display: 'flex'
        },
        signatureVerifyFailed: {
            display: 'flex'
        }
    };
});
const DecryptPostSuccess = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccess(props) {
    const { data: { content  } , profiles , author , postedBy ,  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(useSuccessStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    const shareMenu = useShareMenu(profiles, props.requestAppendRecipients || (async ()=>{}), props.alreadySelectedPreviously);
    const rightActions = props.requestAppendRecipients && props.sharedPublic === false && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        color: "primary",
        onClick: shareMenu.showShare,
        className: classes.addRecipientsLink,
        children: t('decrypted_postbox_add_recipients')
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            shareMenu.ShareMenu,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
                headerActions: wrapAuthorDifferentMessage(author, postedBy, rightActions),
                title: t('decrypted_postbox_title'),
                message: content
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptedUI_PluginRendererWithSuggestion, {
                message: content,
                metadata: content.meta
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptPostAwaiting.tsx





const DecryptPostAwaiting = /*#__PURE__*/ (0,react.memo)(function DecryptPostAwaiting(props) {
    const { author , postedBy , type  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const key = {
        finding_post_key: t('decrypted_postbox_decrypting_finding_post_key'),
        finding_person_public_key: t('decrypted_postbox_decrypting_finding_person_key'),
        init: t('decrypted_postbox_decrypting'),
        decode_post: t('decrypted_postbox_decoding'),
        iv_decrypted: t('decrypted_postbox_decoding'),
        payload_decrypted: t('decrypted_postbox_decoding'),
        intermediate_success: 'unreachable case. it should display success UI',
        undefined: t('decrypted_postbox_decrypting')
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: key[(type === null || type === void 0 ? void 0 : type.progress) || 'undefined'],
        progress: true,
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0)
    }));
});

// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(29941);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptPostFailed.tsx







const DecryptPostFailed = /*#__PURE__*/ (0,react.memo)(function DecryptPostFailed(props) {
    const { author , postedBy , error  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    if ((error === null || error === void 0 ? void 0 : error.message) === constants/* DecryptFailedReason.MyCryptoKeyNotFound */.g.MyCryptoKeyNotFound) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
            title: ""
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: t('service_decryption_failed'),
        titleIcon: "error",
        message: error === null || error === void 0 ? void 0 : error.message,
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0)
    }));
});

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(76262);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(3266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPost.tsx











function progressReducer(state, payload) {
    const { key , progress  } = payload;
    const currentProgressIndex = state.findIndex((x)=>x.key === key
    );
    if (currentProgressIndex === -1) {
        return [
            ...state,
            {
                key,
                progress
            }, 
        ];
    }
    const currentProgress = state[currentProgressIndex].progress;
    if (currentProgress && currentProgress.type !== 'progress' && progress.type === 'progress') return state;
    state[currentProgressIndex] = {
        key,
        progress
    };
    return [
        ...state
    ];
}
function DecryptPost(props) {
    var ref1;
    const { whoAmI , profiles , alreadySelectedPreviously , onDecrypted  } = props;
    const deconstructedPayload = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const authorInPayload = (0,usePostInfo/* usePostClaimedAuthor */.NH)();
    const current = (0,usePostInfo/* usePostInfo */.oQ)();
    const currentPostBy = usePostInfo/* usePostInfoDetails.author */.H9.author();
    const decryptedPayloadForImage = usePostInfo/* usePostInfoDetails.decryptedPayloadForImage */.H9.decryptedPayloadForImage();
    const postBy = (0,src.or)(authorInPayload, currentPostBy);
    const postMetadataImages = usePostInfo/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const Success = props.successComponent || DecryptPostSuccess;
    const Awaiting = props.waitingComponent || DecryptPostAwaiting;
    const Failed = props.failedComponent || DecryptPostFailed;
    const requestAppendRecipientsWrapped = (0,react.useMemo)(()=>{
        if (!postBy.equals(whoAmI)) return undefined;
        if (!props.requestAppendRecipients) return undefined;
        return async (people)=>{
            await props.requestAppendRecipients(people);
            await (0,esm/* delay */.gw)(1500);
        };
    }, [
        props.requestAppendRecipients,
        postBy,
        whoAmI
    ]);
    // #region Progress
    const [progress1, dispatch] = (0,react.useReducer)(progressReducer, []);
    // #endregion
    // #region decrypt
    // pass 1:
    // decrypt post content and image attachments
    const decryptedPayloadForImageAlpha38 = (decryptedPayloadForImage === null || decryptedPayloadForImage === void 0 ? void 0 : decryptedPayloadForImage.version) === -38 ? decryptedPayloadForImage : null;
    const sharedPublic = (0,usePostInfo/* usePostInfoSharedPublic */.FT)() || (decryptedPayloadForImageAlpha38 === null || decryptedPayloadForImageAlpha38 === void 0 ? void 0 : decryptedPayloadForImageAlpha38.sharedPublic) || false;
    (0,react.useEffect)(()=>{
        var ref2;
        const signal = new AbortController();
        async function makeProgress(key, decryptionProcess) {
            const refreshProgress = (progress)=>dispatch({
                    type: 'refresh',
                    key,
                    progress
                })
            ;
            for await (const process of (0,asyncIteratorHelpers/* asyncIteratorWithResult */.ts)(decryptionProcess)){
                var ref;
                if (signal.signal.aborted) return (ref = decryptionProcess.return) === null || ref === void 0 ? void 0 : ref.call(decryptionProcess, {
                    type: 'error',
                    internal: true,
                    error: 'aborted'
                });
                if (process.done) {
                    if (process.value.type === 'success') {
                        current.iv.value = process.value.iv;
                        current.decryptedPayloadForImage.value = process.value.decryptedPayloadForImage;
                    }
                    return refreshProgress(process.value);
                }
                const status = process.value;
                refreshProgress(status);
                if (status.type === 'progress') {
                    if (status.progress === 'intermediate_success') refreshProgress(status.data);
                    else if (status.progress === 'iv_decrypted') current.iv.value = status.iv;
                    else if (status.progress === 'payload_decrypted') current.decryptedPayloadForImage.value = status.decryptedPayloadForImage;
                }
            }
        }
        const postURL = (ref2 = current.url.getCurrentValue()) === null || ref2 === void 0 ? void 0 : ref2.toString();
        if (deconstructedPayload.ok) makeProgress('post text', service/* ServicesWithProgress.decryptFromText */.Ql.decryptFromText(deconstructedPayload.val, postBy, whoAmI.network, whoAmI, postURL));
        postMetadataImages.forEach((url)=>{
            if (signal.signal.aborted) return;
            makeProgress(url, service/* ServicesWithProgress.decryptFromImageUrl */.Ql.decryptFromImageUrl(url, postBy, whoAmI.network, whoAmI, postURL));
        });
        return ()=>signal.abort()
        ;
    }, [
        current.iv,
        deconstructedPayload.ok,
        (ref1 = deconstructedPayload.val) === null || ref1 === void 0 ? void 0 : ref1.encryptedText,
        postBy.toText(),
        postMetadataImages.join(),
        whoAmI.toText(), 
    ]);
    // pass 2:
    // decrypt rest attachments which depend on post content
    // const decryptedPostContent = progress.find((p) => p.key === postContent)
    // useEffect(() => {
    //     if (decryptedPostContent?.progress.type !== 'success') return
    //     // TODO:
    //     // decrypt shuffled image here
    // }, [decryptedPostContent])
    // pass 3:
    // invoke callback
    const firstSucceedDecrypted = progress1.find((p)=>p.progress.type === 'success'
    );
    (0,react.useEffect)(()=>{
        if ((firstSucceedDecrypted === null || firstSucceedDecrypted === void 0 ? void 0 : firstSucceedDecrypted.progress.type) !== 'success') return;
        onDecrypted((0,base/* makeTypedMessageTuple */.Zw)([
            firstSucceedDecrypted.progress.content
        ]));
    }, [
        firstSucceedDecrypted,
        onDecrypted
    ]);
    // #endregion
    // it's not a secret post
    if (!deconstructedPayload.ok && progress1.every((x)=>x.progress.internal
    )) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: progress1// the internal progress should not display to the end-user
        .filter(({ progress  })=>!progress.internal
        ).map(({ progress  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: renderProgress(progress)
            }, index)
        )
    }));
    function renderProgress(progress) {
        switch(progress.type){
            case 'success':
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Success, {
                    data: progress,
                    alreadySelectedPreviously: alreadySelectedPreviously,
                    requestAppendRecipients: requestAppendRecipientsWrapped,
                    profiles: profiles,
                    sharedPublic: sharedPublic,
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.successComponentProps
                }));
            case 'error':
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Failed, {
                    error: new Error(progress.error),
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.failedComponentProps
                }));
            case 'progress':
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Awaiting, {
                    type: progress,
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.waitingComponentProps
                }));
            default:
                return null;
        }
    }
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/AddToKeyStore.tsx






function AddToKeyStore({ provePost , postBy , ...props1 }) {
    const state = (0,useAsync/* default */.Z)(()=>service/* default.Crypto.verifyOthersProve */.ZP.Crypto.verifyOthersProve(provePost, postBy)
    , [
        provePost,
        postBy
    ]);
    const { completeComponent: Success , completeComponentProps  } = props1;
    if (state.value) return render(Success, AddToKeyStoreUI.success, completeComponentProps);
    else return null;
    function render(outer, def, props) {
        if (outer === null) return null;
        return(/*#__PURE__*/ (0,react.createElement)(outer || def, props));
    }
}
const AddToKeyStoreUI = {
    success: /*#__PURE__*/ (0,react.memo)((props)=>{
        const { t  } = (0,utils/* useI18N */.M1)();
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
            title: t('add_to_key_store_success'),
            titleIcon: "check",
            ...props
        }));
    })
};

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-ui.ts
var text_payload_ui = __webpack_require__(20593);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostInspector.tsx















const PluginHooksRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostInspector
, MaskPostExtraPluginWrapper);
function PostInspector(props) {
    const postBy = usePostInfo/* usePostInfoDetails.author */.H9.author();
    const postContent = usePostInfo/* usePostInfoDetails.postContent */.H9.postContent();
    const encryptedPost = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const decryptedPayloadForImage = usePostInfo/* usePostInfoDetails.decryptedPayloadForImage */.H9.decryptedPayloadForImage();
    const postImages = usePostInfo/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const isDebugging = (0,shared_src/* useValueRef */.E)(settings/* debugModeSetting */.vv);
    const whoAmI = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const friends = (0,useActivatedUI/* useFriendsList */.hg)();
    const [alreadySelectedPreviously, setAlreadySelectedPreviously] = (0,react.useState)([]);
    const provePost = (0,react.useMemo)(()=>(0,text_payload_ui/* decodePublicKeyUI */.$2)(postContent)
    , [
        postContent
    ]);
    const { value: sharedListOfPost  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!whoAmI || !whoAmI.identifier.equals(postBy) || !encryptedPost.ok) return [];
        const { iv , version  } = encryptedPost.val;
        return service/* default.Crypto.getPartialSharedListOfPost */.ZP.Crypto.getPartialSharedListOfPost(version, iv, postBy);
    }, [
        postBy,
        whoAmI,
        encryptedPost
    ]);
    (0,react.useEffect)(()=>setAlreadySelectedPreviously(sharedListOfPost !== null && sharedListOfPost !== void 0 ? sharedListOfPost : [])
    , [
        sharedListOfPost
    ]);
    if (encryptedPost.ok || postImages.length) {
        if (!isDebugging) props.needZip();
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPost, {
            onDecrypted: props.onDecrypted,
            requestAppendRecipients: // So should not create new data on version -40
            (encryptedPost.ok && encryptedPost.val.version !== -40) || decryptedPayloadForImage ? async (profile)=>{
                const val = postImages ? decryptedPayloadForImage : encryptedPost.val;
                const { iv , version  } = val;
                const ownersAESKeyEncrypted = val.version === -38 ? val.AESKeyEncrypted : val.ownersAESKeyEncrypted;
                setAlreadySelectedPreviously(alreadySelectedPreviously.concat(profile));
                return service/* default.Crypto.appendShareTarget */.ZP.Crypto.appendShareTarget(version, ownersAESKeyEncrypted, iv, profile.map((x)=>x.identifier
                ), whoAmI.identifier, {
                    type: 'direct',
                    at: new Date()
                });
            } : undefined,
            alreadySelectedPreviously: alreadySelectedPreviously,
            profiles: friends,
            whoAmI: whoAmI ? whoAmI.identifier : shared_base_src/* ProfileIdentifier.unknown */.WO.unknown
        }));
    } else if (provePost.length) {
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(AddToKeyStore, {
            postBy: postBy,
            provePost: postContent
        }));
    }
    return withAdditionalContent(null);
    function withAdditionalContent(x) {
        const slot = encryptedPost.ok ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {});
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                 false ? /*#__PURE__*/ 0 : null,
                props.slotPosition !== 'after' && slot,
                x,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionPostInspector, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginHooksRenderer, {}),
                props.slotPosition !== 'before' && slot
            ]
        }));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostInspector.tsx







function injectPostInspectorDefault(config = {}, additionalPropsToPostInspector = ()=>({})
, useCustomStyles = (0,src/* makeStyles */.ZL)()({})) {
    const PostInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PostInspectorDefault(props) {
        const { onDecrypted , zipPost  } = props;
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostInspector(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            onDecrypted: onDecrypted,
            needZip: zipPost,
            ...additionalProps
        }));
    });
    const { zipPost: zipPost1 , injectionPoint  } = config;
    const zipPostF = zipPost1 || noop/* default */.Z;
    return function injectPostInspector(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspectorDefault, {
                onDecrypted: (typed)=>{
                    current.rawMessagePiped.value = typed;
                },
                zipPost: ()=>zipPostF(current.rootElement)
                ,
                ...current
            })
        });
        var ref;
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)((ref = injectionPoint === null || injectionPoint === void 0 ? void 0 : injectionPoint(current)) !== null && ref !== void 0 ? ref : current.rootElement.afterShadow, {
            key: 'post-inspector',
            signal
        });
        root.render(jsx);
        return root.destory;
    };
}


/***/ }),

/***/ 72048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createTaskStartSetupGuideDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(17734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide/types.ts
var types = __webpack_require__(51212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(35428);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(33312);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/WizardDialog.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            marginBottom: theme.spacing(2)
        },
        footer: {
            marginLeft: 0,
            marginTop: theme.spacing(3),
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        tip: {}
    })
);
function ContentUI(props) {
    const { classes  } = useStyles();
    switch(props.dialogType){
        case types/* SetupGuideStep.FindUsername */.s.FindUsername:
        case types/* SetupGuideStep.PinExtension */.s.PinExtension:
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
                        className: classes.content,
                        children: props.content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: props.tip
                    }),
                    props.footer ? /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                        className: classes.footer,
                        children: props.footer
                    }) : null,
                    props.dismiss ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: props.dismiss
                    }) : null
                ]
            }));
        default:
            return null;
    }
}
const useWizardDialogStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(3),
            position: 'relative',
            boxShadow: theme.palette.mode === 'dark' ? 'none' : theme.shadows[4],
            border: `${theme.palette.mode === 'dark' ? 'solid' : 'none'} 1px ${theme.palette.divider}`,
            borderRadius: 20,
            [theme.breakpoints.down('sm')]: {
                position: 'fixed',
                bottom: 0,
                left: 0,
                margin: 0,
                alignSelf: 'center',
                borderRadius: 0,
                boxShadow: 'none',
                border: `solid 1px ${theme.palette.divider}`,
                width: '100%'
            },
            userSelect: 'none',
            boxSizing: 'border-box',
            width: 480,
            '&.small': {
                width: 384
            },
            overflow: 'hidden'
        },
        button: {
            width: 150,
            height: 40,
            minHeight: 40,
            marginLeft: 0,
            marginTop: 0,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            },
            fontSize: 14,
            wordBreak: 'keep-all',
            '&,&:hover': {
                color: `${src/* MaskColorVar.twitterButtonText */.ZN.twitterButtonText} !important`,
                background: `${src/* MaskColorVar.twitterButton */.ZN.twitterButton} !important`
            }
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        },
        tip: {
            fontSize: 16,
            fontWeight: 500,
            lineHeight: '22px',
            paddingTop: 16
        },
        label: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px'
        },
        header: {
            height: 40
        },
        content: {},
        connection: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        connectItem: {
            flex: 1,
            height: 75,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        line: {
            width: 100,
            height: 1,
            borderTop: `dashed 1px  ${src/* MaskColorVar.borderSecondary */.ZN.borderSecondary}`
        },
        name: {
            fontSize: 16,
            fontWeight: 500
        },
        footer: {}
    })
);
function WizardDialog(props) {
    const { small , title , dialogType , content , tip , footer , dismiss , onClose  } = props;
    const { classes  } = useWizardDialogStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classnames_default()(classes.root, small ? 'small' : ''),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("header", {
                className: classes.header,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "textPrimary",
                    variant: "h3",
                    fontSize: 24,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentUI, {
                dialogType: dialogType,
                content: content,
                tip: tip,
                footer: footer,
                dismiss: dismiss
            }),
            onClose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.close,
                size: "medium",
                onClick: onClose,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                    cursor: "pointer"
                })
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(70119);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/general/Verified.tsx


const VerifiedIcon = (0,icons_utils/* createIcon */.I)('VerifiedIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#a)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M15.782 5.912V3.851l-1.79-1.033-1.028-1.785h-2.061L9.113 0 7.33 1.033H5.268L4.234 2.818 2.444 3.85v2.061L1.418 7.697 2.45 9.48v2.061l1.79 1.029 1.033 1.789h2.061l1.784 1.028 1.79-1.028h2.056l1.028-1.79 1.79-1.028V9.481l1.028-1.784-1.028-1.785Z",
                    fill: "#60DFAB"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.549 5.85a.5.5 0 0 1 0 .708L7.97 11.135a.5.5 0 0 1-.707 0l-2.14-2.14a.5.5 0 0 1 .707-.707l1.786 1.786 4.224-4.223a.5.5 0 0 1 .708 0Z",
                    fill: "#fff"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "a",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(.75)",
                    d: "M0 0h16v16H0z"
                })
            })
        })
    ]
}), '0 0 16 16');

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(47906);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/FindUsername.tsx











const useFindUsernameStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        avatar: {
            display: 'block',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: `solid 1px ${src/* MaskColorVar.border */.ZN.border}`,
            '&.connected': {
                borderColor: src/* MaskColorVar.success */.ZN.success
            }
        },
        verified: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: 16,
            color: src/* MaskColorVar.success */.ZN.success
        }
    })
);
function FindUsername({ personaName , username , avatar , onConnect , onDone , onClose , enableNextID  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [connected, setConnected] = (0,react.useState)(false);
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
        dialogType: types/* SetupGuideStep.FindUsername */.s.FindUsername,
        small: !username,
        content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.name,
                            children: personaName
                        })
                    ]
                }),
                username ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.line
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.connectItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    position: "relative",
                                    width: 48,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: avatar,
                                            className: classnames_default()(findUsernameClasses.avatar, connected ? 'connected' : '')
                                        }),
                                        connected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedIcon, {
                                            className: findUsernameClasses.verified
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    className: classes.name,
                                    children: username
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        }),
        tip: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.tip,
            variant: "body2",
            dangerouslySetInnerHTML: {
                __html: !username ? t('setup_guide_login') : connected ? t('user_guide_tip_connected') : t('setup_guide_find_username_text')
            }
        }),
        footer: username ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
            className: classes.button,
            variant: "contained",
            init: t('setup_guide_connect_auto'),
            waiting: t('connecting'),
            complete: enableNextID ? t('setup_guide_verify_checking') : t('ok'),
            failed: t('setup_guide_connect_failed'),
            executor: onConnect,
            completeOnClick: enableNextID ? undefined : onDone,
            onComplete: enableNextID ? onDone : ()=>setConnected(true)
            ,
            disabled: !username || !personaName,
            completeIcon: null,
            failIcon: null,
            failedOnClick: "use executor",
            "data-testid": "confirm_button",
            children: t('confirm')
        }) : null,
        onClose: onClose
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(96766);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(49950);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/VerifyNextID.tsx












const VerifyNextID = ({ personaName , personaIdentifier , username , avatar , onVerify , onDone , onClose , network  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    const [checked, setChecked] = (0,react.useState)(false);
    if (!personaIdentifier) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
        dialogType: types/* SetupGuideStep.FindUsername */.s.FindUsername,
        small: !username,
        content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.name,
                            children: personaName
                        })
                    ]
                }),
                username ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.line
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.connectItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    position: "relative",
                                    width: 48,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            src: avatar,
                                            className: classnames_default()(findUsernameClasses.avatar, 'connected')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedIcon, {
                                            className: findUsernameClasses.verified
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    className: classes.name,
                                    children: username
                                })
                            ]
                        })
                    ]
                }) : null
            ]
        }),
        tip: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.tip,
            variant: "body2",
            dangerouslySetInnerHTML: {
                __html: !username ? t('setup_guide_login') : `<p>${t('user_guide_tip_connected')}</p><p>${t('user_guide_tip_need_verify_on_next_id')}</p>`
            }
        }),
        footer: username ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
            className: classes.button,
            variant: "contained",
            init: t('setup_guide_verify'),
            waiting: t('setup_guide_verifying'),
            complete: t('setup_guide_verify'),
            failed: t('setup_guide_verifying_failed'),
            executor: onVerify,
            onComplete: onDone,
            disabled: !username || !personaName,
            completeIcon: null,
            failIcon: null,
            failedOnClick: "use executor",
            "data-testid": "confirm_button",
            children: t('setup_guide_verify')
        }) : null,
        dismiss: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
            classes: {
                label: classes.label
            },
            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                checked: checked,
                onChange: (e)=>{
                    setChecked(e.target.checked);
                    settings/* dismissVerifyNextID */.gG[network].value = {
                        ...settings/* dismissVerifyNextID */.gG[network].value,
                        [`${username}_${personaIdentifier.toText()}`]: e.target.checked
                    };
                }
            }),
            label: t('setup_guide_verify_dismiss')
        }),
        onClose: onClose
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Extension.js
var Extension = __webpack_require__(2413);
;// CONCATENATED MODULE: ../icons/general/Pin.tsx


const PinIcon = (0,icons_utils/* createIcon */.I)('PinIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M16.5 2.75v1.833h-.917v5.5l1.834 2.75v1.834h-5.5v6.416h-1.834v-6.416h-5.5v-1.834l1.834-2.75v-5.5H5.5V2.75h11ZM8.25 4.583v6.056l-1.463 2.194h8.426L13.75 10.64V4.583h-5.5Z"
    })
}), '0 0 22 22');

;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/PinExtension.tsx










function PinExtension({ onDone  }) {
    const pinImg = new URL(/* asset import */ __webpack_require__(47384), __webpack_require__.b).toString();
    const { classes  } = useWizardDialogStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [checked, setChecked] = (0,react.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
        dialogType: types/* SetupGuideStep.PinExtension */.s.PinExtension,
        content: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.connection,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
                            size: 48
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.name,
                            children: "Mask Network"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.line
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.connectItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: pinImg,
                        width: 100,
                        style: {
                            filter: 'drop-shadow(0px 0px 16px rgba(101, 119, 134, 0.2))'
                        }
                    })
                })
            ]
        }),
        tip: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            className: classes.tip,
            component: "div",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: t('setup_guide_pin_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ol", {
                    style: {
                        paddingLeft: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                t('setup_guide_pin_tip_step_click_left'),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Extension/* default */.Z, {
                                    sx: {
                                        fontSize: 16,
                                        color: '#ababab'
                                    }
                                }),
                                t('setup_guide_pin_tip_step_click_right')
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                            children: [
                                t('setup_guide_pin_tip_step_find_left'),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(PinIcon, {
                                    sx: {
                                        fontSize: 16
                                    }
                                }),
                                t('setup_guide_pin_tip_step_find_right')
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                            children: t('setup_guide_pin_tip_successfully')
                        })
                    ]
                })
            ]
        }),
        footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            className: classes.button,
            variant: "contained",
            onClick: onDone,
            children: t('start')
        }),
        dismiss: /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
            classes: {
                label: classes.label
            },
            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                checked: checked,
                onChange: (e)=>{
                    setChecked(e.target.checked);
                    settings/* dismissPinExtensionTip.value */.g4.value = e.target.checked;
                }
            }),
            label: t('setup_guide_pin_dismiss')
        }),
        onClose: onDone
    }));
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(24524);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide.tsx


















function SetupGuideUI(props) {
    var ref2, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props;
    const ui = social_network/* activatedSocialNetworkUI */.LM;
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const [step, setStep] = (0,react.useState)(types/* SetupGuideStep.FindUsername */.s.FindUsername);
    const [enableNextID] = (0,react.useState)((ref2 = ui.configuration.nextIDConfig) === null || ref2 === void 0 ? void 0 : ref2.enable);
    const verifyPostCollectTimer = (0,react.useRef)(null);
    const platform1 = (ref1 = ui.configuration.nextIDConfig) === null || ref1 === void 0 ? void 0 : ref1.platform;
    // #region parse setup status
    const lastStateRef = settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier];
    const lastState_ = (0,shared_src/* useValueRef */.E)(lastStateRef);
    const lastState = (0,react.useMemo)(()=>{
        try {
            return JSON.parse(lastState_);
        } catch  {
            return {};
        }
    }, [
        lastState_
    ]);
    (0,react.useEffect)(()=>{
        var _status;
        setStep((_status = lastState.status) !== null && _status !== void 0 ? _status : types/* SetupGuideStep.Close */.s.Close);
    }, [
        lastState
    ]);
    // #endregion
    // #region setup username
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const getUsername = ()=>lastState.username || (lastRecognized.identifier.isUnknown ? '' : lastRecognized.identifier.userId)
    ;
    const [username, setUsername] = (0,react.useState)(getUsername);
    (0,react.useEffect)(()=>{
        var ref3;
        const handler = (val)=>{
            if (username === '' && !val.identifier.isUnknown) setUsername(val.identifier.userId);
        };
        (ref3 = ui.collecting.identityProvider) === null || ref3 === void 0 ? void 0 : ref3.recognized.addListener(handler);
        return ()=>{
            var ref;
            (ref = ui.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.removeListener(handler);
        };
    }, [
        username
    ]);
    (0,react.useEffect)(()=>{
        if (username || ui.networkIdentifier !== 'twitter.com') return;
        // In order to collect user info after login, need to reload twitter once
        let reloaded = false;
        const handler = ()=>{
            // twitter will redirect to home page after login
            if (!(!reloaded && location.pathname === '/home')) return;
            reloaded = true;
            location.reload();
        };
        window.addEventListener('locationchange', handler);
        return ()=>{
            window.removeEventListener('locationchange', handler);
        };
    }, [
        username
    ]);
    // #endregion
    const { value: persona_  } = (0,useAsync/* default */.Z)(async ()=>{
        return service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(shared_base_src/* Identifier.fromString */.xb.fromString(persona.toText(), shared_base_src/* ECKeyIdentifier */.ob).unwrap());
    }, [
        persona
    ]);
    const onConnect = async ()=>{
        // attach persona with SNS profile
        await service/* default.Identity.attachProfile */.ZP.Identity.attachProfile(new shared_base_src/* ProfileIdentifier */.WO(ui.networkIdentifier, username), persona, {
            connectionConfirmState: 'confirmed'
        });
        // auto-finish the setup process
        if (!(persona_ === null || persona_ === void 0 ? void 0 : persona_.hasPrivateKey)) throw new Error('invalid persona');
        await service/* default.Identity.setupPersona */.ZP.Identity.setupPersona(persona_ === null || persona_ === void 0 ? void 0 : persona_.identifier);
        utils/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
    };
    const onVerify = async ()=>{
        var ref, ref4;
        if (!(persona_ === null || persona_ === void 0 ? void 0 : persona_.publicHexKey)) return;
        const collectVerificationPost = (ref = ui.configuration.nextIDConfig) === null || ref === void 0 ? void 0 : ref.collectVerificationPost;
        const platform = (ref4 = ui.configuration.nextIDConfig) === null || ref4 === void 0 ? void 0 : ref4.platform;
        if (!platform) return;
        const isBound = await (0,web3_providers_src/* queryIsBound */._9)(persona_.publicHexKey, platform, username);
        if (!isBound) {
            var ref5, ref6, ref7;
            const payload = await (0,web3_providers_src/* createPersonaPayload */.CV)(persona_.publicHexKey, shared_base_src/* NextIDAction.Create */.BU.Create, username, platform);
            if (!payload) throw new Error('Failed to create persona payload.');
            const signResult = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
                method: 'eth',
                message: payload.signPayload,
                identifier: persona_.identifier.toText()
            });
            if (!signResult) throw new Error('Failed to sign by persona.');
            const signature = signResult.signature.signature;
            const postContent = payload.postContent.replace('%SIG_BASE64%', (0,shared_base_src/* toBase64 */.s3)((0,shared_base_src/* fromHex */.H_)(signature)));
            (ref5 = ui.automation) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.nativeCompositionDialog) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.appendText) === null || ref7 === void 0 ? void 0 : ref7.call(ref6, postContent, {
                recover: false
            });
            const waitingPost = new Promise((resolve, reject)=>{
                verifyPostCollectTimer.current = setInterval(async ()=>{
                    const post = collectVerificationPost === null || collectVerificationPost === void 0 ? void 0 : collectVerificationPost(postContent);
                    if (post && persona_.publicHexKey) {
                        clearInterval(verifyPostCollectTimer.current);
                        await (0,web3_providers_src/* bindProof */.ry)(persona_.publicHexKey, shared_base_src/* NextIDAction.Create */.BU.Create, platform, username, undefined, signature, post.postId);
                        resolve();
                    }
                }, 1000);
                setTimeout(()=>{
                    clearInterval(verifyPostCollectTimer.current);
                    reject({
                        message: t('setup_guide_verify_post_not_found')
                    });
                }, 1000 * 20);
            });
            await waitingPost;
        }
    };
    const onClose = ()=>{
        settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = '';
        setStep(types/* SetupGuideStep.Close */.s.Close);
    };
    const onDone = async ()=>{
        // check verify nextID id state
        if (step === types/* SetupGuideStep.FindUsername */.s.FindUsername && enableNextID && (persona_ === null || persona_ === void 0 ? void 0 : persona_.publicHexKey)) {
            const isBound = await (0,web3_providers_src/* queryIsBound */._9)(persona_.publicHexKey, platform1, username);
            if (!isBound) {
                settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = json_stable_stringify_default()({
                    status: types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID
                });
                setStep(types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID);
                return;
            }
        }
        // check pin tip status
        if (step === types/* SetupGuideStep.FindUsername */.s.FindUsername && !settings/* dismissPinExtensionTip.value */.g4.value) {
            settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = json_stable_stringify_default()({
                status: types/* SetupGuideStep.PinExtension */.s.PinExtension
            });
            setStep(types/* SetupGuideStep.PinExtension */.s.PinExtension);
            return;
        }
        // check verify on next id status
        if (step === types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID && enableNextID && persona_ && persona_.publicHexKey) {
            const isBound = await (0,web3_providers_src/* queryIsBound */._9)(persona_.publicHexKey, platform1, username);
            if (!isBound) return;
            setStep(types/* SetupGuideStep.PinExtension */.s.PinExtension);
            return;
        }
        // check user guide status
        const network = ui.networkIdentifier;
        if (network === 'twitter.com' && settings/* userGuideStatus */.Ct[network].value !== 'completed') {
            settings/* userGuideStatus */.Ct[network].value = '1';
        } else {
            onCreate();
        }
        onClose();
    };
    const onCreate = async ()=>{
        var ref, ref8;
        let content = t('setup_guide_say_hello_content');
        if (ui.networkIdentifier === 'twitter.com') {
            content += t('setup_guide_say_hello_follow', {
                account: '@realMaskNetwork'
            });
        }
        (ref = ui.automation.maskCompositionDialog) === null || ref === void 0 ? void 0 : (ref8 = ref.open) === null || ref8 === void 0 ? void 0 : ref8.call(ref, (0,base/* makeTypedMessageText */.P)(content), {
            target: 'Everyone'
        });
    };
    switch(step){
        case types/* SetupGuideStep.FindUsername */.s.FindUsername:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(FindUsername, {
                personaName: persona_ === null || persona_ === void 0 ? void 0 : persona_.nickname,
                username: username,
                avatar: lastRecognized.avatar,
                onUsernameChange: setUsername,
                onConnect: onConnect,
                onDone: onDone,
                onClose: onClose,
                enableNextID: enableNextID
            }));
        case types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyNextID, {
                personaIdentifier: persona_ === null || persona_ === void 0 ? void 0 : persona_.identifier,
                personaName: persona_ === null || persona_ === void 0 ? void 0 : persona_.nickname,
                username: username,
                network: ui.networkIdentifier,
                avatar: lastRecognized.avatar,
                onUsernameChange: setUsername,
                onVerify: onVerify,
                onDone: onDone,
                onClose: onClose
            }));
        case types/* SetupGuideStep.PinExtension */.s.PinExtension:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PinExtension, {
                onDone: onDone
            }));
        default:
            return null;
    }
}
// #endregion
// #region setup guide
const useSetupGuideStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        position: 'fixed',
        zIndex: 9999,
        maxWidth: 550,
        top: '2em',
        right: '2em'
    }
});
function SetupGuide(props) {
    const { classes  } = useSetupGuideStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuideUI, {
            ...props
        })
    }));
} // #endregion

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx




function UI({ unmount , persona  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuide, {
        persona: persona,
        onClose: unmount
    }));
}
function createTaskStartSetupGuideDefault() {
    let shadowRoot;
    return (signal, for_)=>{
        const dom = document.createElement('span');
        document.body.appendChild(dom);
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(shadowRoot || (shadowRoot = dom.attachShadow({
            mode: shared/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
        })), {
            signal
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {
            persona: for_,
            unmount: ()=>root.destory()
        }));
    };
}


/***/ }),

/***/ 50814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InitAutonomousStateFriends)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60232);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2214);




function hasFingerprint(x) {
    var ref;
    return !!((ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint);
}
function InitAutonomousStateFriends(signal, ref, network) {
    _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.queryProfiles */ .ZP.Identity.queryProfiles(network).then((p)=>{
        if (signal.aborted) return;
        const next = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO);
        for (const each of p){
            if (!hasFingerprint(each)) continue;
            next.set(each.identifier, each);
        }
        ref.value = next;
    });
    signal.addEventListener('abort', _utils_messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.profilesChanged.on */ .q.events.profilesChanged.on(async (events)=>{
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const newVal = await (0,immer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(ref.value, async (draft)=>{
            for (const event of events){
                if (event.of.network !== network) continue;
                if (event.reason === 'delete') draft.delete(event.of);
                else {
                    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.queryProfile */ .ZP.Identity.queryProfile(event.of);
                    // Argument of type 'Profile' is not assignable to parameter of type 'WritableDraft<Profile>'.
                    if (data) draft.set(event.of, data);
                    else draft.delete(event.of);
                }
            }
        });
        if (signal.aborted) return;
        ref.value = newVal;
    }));
}


/***/ }),

/***/ 49165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2214);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);


function InitAutonomousStateProfiles(signal, ref1, network1) {
    query(network1, ref1);
    signal.addEventListener('abort', _utils_messages__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.ownPersonaChanged.on */ .q.events.ownPersonaChanged.on(()=>query(network1, ref1)
    ));
    async function query(network, ref) {
        const val = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.queryMyProfiles */ .ZP.Identity.queryMyProfiles(network);
        if (signal.aborted) return;
        ref.value = val;
    }
}


/***/ }),

/***/ 13591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === facebook_com_base/* FACEBOOK_ID */.Iz ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
}

;// CONCATENATED MODULE: ./src/social-network/utils/create-post-context.ts






function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        var ref2, ref1;
        const cancel = [];
        (ref2 = opt.signal) === null || ref2 === void 0 ? void 0 : ref2.addEventListener('abort', ()=>{
            return cancel.forEach((fn)=>{
                return fn === null || fn === void 0 ? void 0 : fn();
            });
        });
        // #region Post text content
        const postContent = new umd.ValueRef(extractText());
        cancel.push(opt.rawMessage.subscribe(()=>postContent.value = extractText()
        ));
        function extractText() {
            return (0,base/* extractTextFromTypedMessage */.Vc)(opt.rawMessage.getCurrentValue()).unwrapOr('');
        }
        // #endregion
        // #region Mentioned links
        const links = new src/* ObservableSet */.n7();
        cancel.push(postContent.addListener((post)=>{
            var ref;
            links.clear();
            (0,src/* parseURL */.Lk)(post).forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
            (ref = opt.postMentionedLinksProvider) === null || ref === void 0 ? void 0 : ref.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
        }));
        cancel.push((ref1 = opt.postMentionedLinksProvider) === null || ref1 === void 0 ? void 0 : ref1.subscribe(()=>{
            var // Not clean old links cause post content not changed
            ref;
            (ref = opt.postMentionedLinksProvider) === null || ref === void 0 ? void 0 : ref.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier))
            );
        }));
        const linksSubscribe = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>[
                    ...links
                ]
            ,
            subscribe: (sub)=>links.event.on(src/* ALL_EVENTS */.Ko, sub)
        });
        // #endregion
        // #region Parse payload
        const postPayload = new umd.ValueRef((0,esm/* Err */.UG)(new Error('Empty')));
        parsePayload();
        cancel.push(postContent.addListener(parsePayload));
        cancel.push(linksSubscribe.subscribe(parsePayload));
        function parsePayload() {
            // TODO: Also parse for payload in the image.
            let lastResult = (0,esm/* Err */.UG)(new Error('No candidate'));
            for (const each of (create.payloadDecoder || ((x)=>[
                    x
                ]
            ))(postContent.value + linksSubscribe.getCurrentValue().join('\n'))){
                lastResult = create.payloadParser(each);
                if (lastResult.ok) {
                    postPayload.value = lastResult;
                    return;
                }
            }
            if (postPayload.value.err) postPayload.value = lastResult;
        }
        // #endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            author: opt.author,
            snsID: opt.snsID
        };
        const transformedPostContent = new umd.ValueRef((0,base/* makeTypedMessageTupleFromList */.n_)(), base/* isTypedMessageEqual */.Hz);
        const postIdentifier = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>{
                const by = opt.author.getCurrentValue();
                const id = opt.snsID.getCurrentValue();
                if (by.isUnknown || id === null) return null;
                return new src/* PostIdentifier */._P(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.author.subscribe(sub);
                const b = opt.snsID.subscribe(sub);
                return ()=>void [
                        a(),
                        b()
                    ]
                ;
            }
        });
        return {
            ...author,
            get rootNode () {
                return opt.rootElement.realCurrent;
            },
            rootElement: opt.rootElement,
            actionsElement: opt.actionsElement,
            suggestedInjectionPoint: opt.suggestedInjectionPoint,
            comment: opt.comments,
            identifier: postIdentifier,
            url: (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>{
                    var ref;
                    const id = postIdentifier.getCurrentValue();
                    if (id) return ((ref = create.getURLFromPostIdentifier) === null || ref === void 0 ? void 0 : ref.call(create, id)) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>[]
                ,
                subscribe: ()=>()=>{}
            }),
            rawMessage: opt.rawMessage,
            rawMessagePiped: transformedPostContent,
            postContent: (0,src/* SubscriptionFromValueRef */.Jf)(postContent),
            containingMaskPayload: (0,src/* SubscriptionFromValueRef */.Jf)(postPayload),
            decryptedPayloadForImage: new umd.ValueRef(null),
            iv: new umd.ValueRef(null),
            publicShared: (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>postPayload.value.map((val)=>val.version === -38 && val.sharedPublic
                    ).unwrapOr(undefined)
                ,
                subscribe: (sub)=>postPayload.addListener(sub)
            })
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new umd.ValueRef(null);
    const nickname = new umd.ValueRef(null);
    const postBy = new umd.ValueRef(src/* ProfileIdentifier.unknown */.WO.unknown, src/* ProfileIdentifier.equals */.WO.equals);
    const postID = new umd.ValueRef(null);
    const postMessage = new umd.ValueRef((0,base/* makeTypedMessageTupleFromList */.n_)());
    const postMetadataImages = new src/* ObservableSet */.n7();
    const postMetadataMentionedLinks = new src/* ObservableMap */.vP();
    const subscriptions = {
        avatarURL: (0,src/* mapSubscription */.S3)((0,src/* SubscriptionFromValueRef */.Jf)(avatarURL), (x)=>{
            if (!x) return null;
            try {
                return new URL(x);
            } catch  {}
            return null;
        }),
        nickname: (0,src/* SubscriptionFromValueRef */.Jf)(nickname),
        author: (0,src/* SubscriptionFromValueRef */.Jf)(postBy),
        snsID: (0,src/* SubscriptionFromValueRef */.Jf)(postID),
        rawMessage: (0,src/* SubscriptionFromValueRef */.Jf)(postMessage),
        postImagesProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>[
                    ...postMetadataImages
                ]
            ,
            subscribe: (sub)=>postMetadataImages.event.on(src/* ALL_EVENTS */.Ko, sub)
        }),
        postMentionedLinksProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>[
                    ...postMetadataMentionedLinks.values()
                ]
            ,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(src/* ALL_EVENTS */.Ko, sub)
        })
    };
    return {
        subscriptions,
        avatarURL,
        nickname,
        postBy,
        postID,
        postMessage,
        postMetadataMentionedLinks,
        postMetadataImages
    };
}


/***/ }),

/***/ 68876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gE": () => (/* reexport */ RegistryContext),
  "l3": () => (/* reexport */ RenderFragmentsContext),
  "FG": () => (/* reexport */ TextResizeContext),
  "T6": () => (/* reexport */ TransformationContextProvider),
  "lG": () => (/* reexport */ TransformerProvider),
  "Ot": () => (/* reexport */ TypedMessageRender),
  "dR": () => (/* reexport */ createTypedMessageRenderRegistry),
  "CB": () => (/* reexport */ useTransformedValue)
});

// UNUSED EXPORTS: DefaultRenderFragments, TypedMessageRenderInline, useMetadataRender

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Unknown.tsx

/** @internal */ const TypedMessageUnknownRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageUnknownRenderer(props) {
    const warned = (0,react.useRef)(false);
    if (!warned.current) {
        warned.current = true;
        console.warn('[@masknet/typed-message] Trying to render an unknown TypedMessage (or a known TypedMessage with no renderer) with props', props);
    }
    return null;
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RegistryContext.tsx

const RegistryContext = /*#__PURE__*/ (0,react.createContext)(()=>{
    console.error('[@masknet/typed-message] Please create a TypedMessageRenderRegistry and provide it via RegistryContext');
    return undefined;
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/RenderFragments.tsx


const DefaultRenderFragments = {
    Text: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: props.children
        })
    ),
    Link: /*#__PURE__*/ (0,react.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
            href: props.href,
            target: "_blank",
            rel: "noopener noreferrer",
            children: props.children
        })
    ),
    Image: /*#__PURE__*/ (0,react.memo)((props)=>props.width === 0 ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            src: props.src,
            width: props.width,
            height: props.height
        })
    ),
    Metadata: /*#__PURE__*/ (0,react.memo)(()=>null
    )
};
const RenderFragmentsContext = /*#__PURE__*/ (0,react.createContext)(DefaultRenderFragments);

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TextResizerContext.tsx

const TextResizeContext = /*#__PURE__*/ (0,react.createContext)(false);
/** @internal */ function useTextResize(shouldEnable) {
    const hasTextEnlarge = (0,react.useContext)(TextResizeContext);
    const [element, setElement] = (0,react.useState)(null);
    const enable = hasTextEnlarge && shouldEnable;
    (0,react.useEffect)(()=>{
        if (!element || !enable) return;
        const updateFontSize = ()=>{
            const length = Array.from(element.innerText).length;
            let fontSize = 1;
            if (length < 45) fontSize = 1.5;
            else if (length < 80) fontSize = 1.2;
            element.style.fontSize = `${fontSize}rem`;
        };
        updateFontSize();
    // const watcher = new MutationObserver(updateFontSize)
    // watcher.observe(element, { subtree: true, childList: true, characterData: true })
    // return () => watcher.disconnect()
    }, [
        enable,
        element
    ]);
    return setElement;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Entry.tsx






function TypedMessageRender(props) {
    const { Container ='p'  } = (0,react.useContext)(RenderFragmentsContext);
    const isEmpty = props.message.type === 'empty';
    const textResize = useTextResize(!isEmpty);
    if (isEmpty) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: textResize,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                ...props
            })
        })
    }));
}
function TypedMessageRenderInline(props) {
    var ref1;
    const { message  } = props;
    const Registry = (0,react.useContext)(RegistryContext);
    if (message.type === 'empty') return null;
    const Render = ((ref1 = Registry(message.type)) === null || ref1 === void 0 ? void 0 : ref1.component) || TypedMessageUnknownRenderer;
    if (false) {}
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
        ...message
    }));
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/MetadataRender.tsx



function useMetadataRender(message) {
    const { Metadata  } = (0,react.useContext)(RenderFragmentsContext);
    if (!Metadata || !message.meta) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Metadata, {
        metadata: message.meta,
        message: message
    }));
}

// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(33058);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/renderText.tsx




/** @internal */ const RenderTextFragment = /*#__PURE__*/ (0,react.memo)(function RenderText(props) {
    const { Text =DefaultRenderFragments.Text  } = (0,react.useContext)(RenderFragmentsContext);
    return(/*#__PURE__*/ (0,react.createElement)(react.Fragment, {}, ...parseText(props.text, Text)));
});
/** @internal */ const RenderLinkFragment = /*#__PURE__*/ (0,react.memo)(function RenderLink(props) {
    const { children , href , category  } = props;
    const context = (0,react.useContext)(RenderFragmentsContext);
    const { Text =DefaultRenderFragments.Text , Link =DefaultRenderFragments.Link , AtLink =Text , CashLink =Text , HashLink =Text ,  } = context;
    if (category === 'cash') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CashLink, {
        children: children
    }));
    if (category === 'hash') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(HashLink, {
        children: children
    }));
    if (category === 'user') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AtLink, {
        children: children
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link, {
        children: children,
        href: href
    }));
});
function parseText(string, Text) {
    const links = (0,parseLink/* parseLink */.V)(string).flatMap((x1)=>{
        if (x1.type === 'text') {
            return x1.content.split(/(\n)/g).map((x)=>x === '\n' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                    children: x
                })
            );
        }
        if (x1.category === 'normal' && !x1.content.match(/^https?:\/\//gi)) x1.content = 'http://' + x1.content;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
            category: x1.category,
            href: x1.content,
            children: x1.content
        }));
    });
    return links;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Text.tsx




const TypedMessageTextRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTextRenderer(props) {
    const { content  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderTextFragment, {
                text: content
            }),
            useMetadataRender(props)
        ]
    }));
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Image.tsx




const TypedMessageImageRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageImageRenderer(props) {
    const { Image =DefaultRenderFragments.Image  } = (0,react.useContext)(RenderFragmentsContext);
    const { image , width , height  } = props;
    const [blobSrc, setBlobSrc] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        if (typeof image === 'string') return;
        const src = URL.createObjectURL(image);
        setBlobSrc(src);
        return ()=>{
            setBlobSrc(null);
            URL.revokeObjectURL(src);
        };
    }, [
        image
    ]);
    const finalSrc = blobSrc || image;
    const meta = useMetadataRender(props);
    if (typeof finalSrc !== 'string') return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image, {
                src: finalSrc,
                width: width,
                height: height
            }),
            meta
        ]
    }));
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/circularDetect.ts
function hasCircular(message) {
    try {
        JSON.stringify(message);
        return false;
    } catch (err) {
        console.warn('[@masknet/typed-message] TypedMessage', message, 'may contains circular structure. Skip rendering.');
        return true;
    }
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Tuple.tsx





const TypedMessageTupleRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTupleRenderer(props) {
    const meta = useMetadataRender(props);
    if ((0,react.useMemo)(()=>hasCircular(props.items)
    , [
        props.items
    ])) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            props.items.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                    ...props,
                    message: message
                }, index)
            ),
            meta
        ]
    }));
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/TransformContext.ts


const TransformerProvider = (0,react.createContext)((x)=>x
);
const TransformationContextProvider = (0,react.createContext)(base/* emptyTransformationContext */.vg);
function useTransformedValue(message) {
    const transformer = (0,react.useContext)(TransformerProvider);
    const context = (0,react.useContext)(TransformationContextProvider);
    return (0,react.useMemo)(()=>{
        return message ? transformer(message, context) : undefined;
    }, [
        message,
        transformer,
        context
    ]);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Promise.tsx




const TypedMessagePromiseRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessagePromiseRenderer(props) {
    const { promise , alt  } = props;
    const _ = (0,react.useState)(0)[1];
    const rerender = ()=>_(Math.random())
    ;
    (0,react.useEffect)(()=>{
        promise.then(rerender);
    }, [
        promise,
        _
    ]);
    const transformedValue = useTransformedValue(promise.value);
    if (transformedValue) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
        message: transformedValue
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: alt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Await, {
            promise: promise
        })
    }));
});
function Await(props) {
    throw props.promise;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Extension/Anchor.tsx



const TypedMessageAnchorRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageAnchorRenderer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
        category: props.category,
        children: props.content,
        href: props.href
    }));
});

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/registry.tsx






function createTypedMessageRenderRegistry() {
    const registry = new Map();
    const event = new EventTarget();
    function registerTypedMessageRender(type, config) {
        if (!registry.has(type)) registry.set(type, new Map());
        const map = registry.get(type);
        const id = config.id;
        map.set(id, config);
        event.dispatchEvent(new Event('update'));
        return ()=>{
            map.delete(id);
            event.dispatchEvent(new Event('update'));
        };
    }
    function getTypedMessageRender(type) {
        var ref;
        return Array.from(((ref = registry.get(type)) === null || ref === void 0 ? void 0 : ref.values()) || []).sort((a, b)=>b.priority - a.priority
        )[0];
    }
    const subscription = {
        // generate a new function everytime to make sure old !== new
        getCurrentValue: ()=>(type)=>getTypedMessageRender(type)
        ,
        subscribe: (f)=>{
            event.addEventListener('update', f);
            return ()=>event.removeEventListener('update', f)
            ;
        }
    };
    registerTypedMessageRender('text', {
        component: TypedMessageTextRenderer,
        id: Symbol('std.text'),
        priority: 0
    });
    registerTypedMessageRender('image', {
        component: TypedMessageImageRenderer,
        id: Symbol('std.image'),
        priority: 0
    });
    registerTypedMessageRender('unknown', {
        component: TypedMessageUnknownRenderer,
        id: Symbol('std.unknown'),
        priority: 0
    });
    registerTypedMessageRender('tuple', {
        component: TypedMessageTupleRenderer,
        id: Symbol('std.tuple'),
        priority: 0
    });
    registerTypedMessageRender('promise', {
        component: TypedMessagePromiseRenderer,
        id: Symbol('std.promise'),
        priority: 0
    });
    // Extension
    registerTypedMessageRender('x-anchor', {
        component: TypedMessageAnchorRenderer,
        id: Symbol('std.anchor'),
        priority: 0
    });
    return {
        registerTypedMessageRender,
        getTypedMessageRender,
        subscription
    };
}

;// CONCATENATED MODULE: ../typed-message/dom/index.ts
// Render


// Render behavior

// Render Registry



// Transformation



/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ }),

/***/ 47384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c2f272344e8d26b14517.png";

/***/ }),

/***/ 33265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 1164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c3a84345cc92a169d393.png";

/***/ })

}]);