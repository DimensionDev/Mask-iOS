"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4220],{

/***/ 42820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "fR": () => (/* binding */ useTagEnhancer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4467);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89729);




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

/***/ 3497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ TypedMessageRenderContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(32475);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(2159);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/registry.ts

const TypedMessageRenderRegistry = (0,dom/* createTypedMessageRenderRegistry */.dR)();

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.5.1_react@18.0.0-rc.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(47175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Text = __webpack_require__(42820);
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

/***/ 71104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
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
var messages = __webpack_require__(87478);
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

/***/ 64506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99997);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3087);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44131);
/* harmony import */ var _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24513);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17047);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71104);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
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

/***/ 9853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44131);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);



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

/***/ 40516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59302);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99997);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56213);





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

/***/ 78336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(11178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(23887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(35229);
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
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(45279);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(45181);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
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

/***/ 14218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7282);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85143);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3749);



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

/***/ 43439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(17734);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(6842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(17939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(40516);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/CloudDownload.js
var CloudDownload = __webpack_require__(93293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(71986);
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
var renderInShadowRoot = __webpack_require__(3993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(41878);
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

/***/ 1615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(3993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(32475);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(54105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(2159);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 2 modules
var context = __webpack_require__(3497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(54462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/colors/green.js
var green = __webpack_require__(59295);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(3749);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(28242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(8882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(90773);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(10197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
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
var InjectedDialog = __webpack_require__(78336);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(90795);
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

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Switch/Switch.js
var Switch = __webpack_require__(9143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(74953);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(69825);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(64506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.2_03eb9a7115720fddaa34be5f9d89cc8e/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(68532);
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
var constants = __webpack_require__(64148);
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
var usePostInfo = __webpack_require__(9853);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(61452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
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
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-ui.ts
var text_payload_ui = __webpack_require__(27008);
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

/***/ 21614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createTaskStartSetupGuideDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils_shadow_root_renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3993);
/* harmony import */ var _components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24513);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71986);




function UI({ unmount , persona  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_2__/* .SetupGuide */ .o, {
        persona: persona,
        onClose: unmount
    }));
}
function createTaskStartSetupGuideDefault() {
    let shadowRoot;
    return (signal, for_)=>{
        const dom = document.createElement('span');
        document.body.appendChild(dom);
        const root = (0,_utils_shadow_root_renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowed */ .o)(shadowRoot || (shadowRoot = dom.attachShadow({
            mode: _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        })), {
            signal
        });
        root.render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            persona: for_,
            unmount: ()=>root.destory()
        }));
    };
}


/***/ }),

/***/ 24504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InitAutonomousStateFriends)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60232);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99997);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87478);




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

/***/ 64750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87478);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99997);


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

/***/ 6062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(32475);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(43576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(45181);
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

/***/ 2159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
var parseLink = __webpack_require__(2063);
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
var base = __webpack_require__(32475);
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



/***/ })

}]);