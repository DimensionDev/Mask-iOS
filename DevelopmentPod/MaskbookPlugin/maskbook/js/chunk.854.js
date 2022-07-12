(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[854],{

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

/***/ 61323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "fR": () => (/* binding */ useTagEnhancer),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28257);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20778);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67938);






const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Container(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        color: "textPrimary",
        fontSize: "inherit",
        children: props.children
    });
});
const Link = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Anchor(props) {
    let text = props.children;
    if (text.startsWith('https://mask.io')) {
        text = 'Mask.io';
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        href: props.href,
        children: text
    });
});
function useTagEnhancer(kind, content) {
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const plugin = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPluginsSNSAdaptor */ .Pz)(false).filter((x)=>x.enhanceTag
    ).at(0);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        plugin?.enhanceTag?.onClick?.(kind, content, event);
    }, [
        plugin
    ]);
    const onMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const cancel = plugin?.enhanceTag?.onHover?.(kind, content, event, chainId);
        event.currentTarget.addEventListener('mouseleave', ()=>cancel?.()
        , {
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

/***/ 67622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ TypedMessageRenderContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/registry.ts

const TypedMessageRenderRegistry = (0,dom/* createTypedMessageRenderRegistry */.dR)();

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(14257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Text = __webpack_require__(61323);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(16248);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/context.tsx








function TypedMessageRenderContext(props) {
    const registry = (0,use_subscription.useSubscription)(TypedMessageRenderRegistry.subscription);
    const transformerFunction = (0,use_subscription.useSubscription)(transformer/* TypedMessageTransformers.subscription */.rx.subscription);
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

/***/ 16248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hk": () => (/* binding */ enableFbStyleTextPayloadReplace),
/* harmony export */   "rx": () => (/* binding */ TypedMessageTransformers)
/* harmony export */ });
/* unused harmony exports Order, TypedMessagePluginTransformers */
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80681);
/* harmony import */ var _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30003);


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
 */ const TypedMessageTransformers = (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .composeTransformers */ .gO)();
const TypedMessagePluginTransformers = (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .composeTransformers */ .gO)();
TypedMessageTransformers.addTransformer(_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .FlattenTypedMessage */ .po, Order.Flatten);
TypedMessageTransformers.addTransformer(_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .ParseLinkTransformer */ .al, Order.ParseLink);
TypedMessageTransformers.addTransformer(TypedMessagePluginTransformers.subscription, Order.Plugins);
// We will use MaskPayload transformer to replace it in the future PR.
const matcher = /^https?:\/\/mask(\.io|book\.com)/i;
const textPayloadChar = /([\w+/=|:])/iu;
const emoji = '\u{1F3BC}';
TypedMessageTransformers.addTransformer(function visitor(message, context) {
    if ((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageAnchor */ .bj)(message)) {
        if (message.href && (matcher.test(message.href) || matcher.test(message.content))) {
            return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageAnchor */ .Jv)('normal', 'https://mask.io', 'Mask');
        }
    }
    if (fbStyleTextPayloadReplace && (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(message) && message.content.includes(emoji)) {
        const result = [];
        const startFrom = message.content.indexOf(emoji);
        if (startFrom !== 0) result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(message.content.slice(0, startFrom)));
        const pendingChar = [];
        let index = startFrom;
        while(index < message.content.length){
            const char = message.content[index];
            if (char === '\uD83C') {
                if (pendingChar.length) {
                    result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(pendingChar.join('')));
                    pendingChar.length = 0;
                }
                index += 2 // unicode pair
                ;
                // here we at the start of the payload char,
                // then we should drop rest chars until it no longer matches the RegExp or we met ":||".
                while(message.content[index].match(textPayloadChar)){
                    index += 1;
                    if (message.content[index] === ':' && message.content[index + 1] === '|' && message.content[index + 2] === '|') {
                        index += 3;
                        break;
                    }
                }
                // here we at the end of the payload char
                result.push((0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)([
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(' ( \u{1F510} '),
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageAnchor */ .Jv)('normal', 'https://mask.io', 'Mask.io'),
                    (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(') '), 
                ], new Map([
                    [
                        _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_1__/* .TUPLE_RENDER_STYLE */ .QJ,
                        {
                            opacity: 0.5
                        }
                    ]
                ])));
            } else {
                pendingChar.push(char);
                index += 1;
            }
        }
        return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(result, message.meta);
    }
    return (0,_masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .visitEachTypedMessageChild */ .IJ)(message, visitor, context);
}, Order.PayloadReplacer);
let fbStyleTextPayloadReplace = false;
function enableFbStyleTextPayloadReplace() {
    fbStyleTextPayloadReplace = true;
}


/***/ }),

/***/ 88278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);

// Deprecates. Prefer useMaskI18n()
const i18n = {
    t: (key, options)=>{
        return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .i18NextInstance.t */ .BV.t(key, options);
    }
};


/***/ }),

/***/ 57488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useRecipientsList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23397);




function useRecipientsList() {
    const current = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentIdentity */ .Ud)()?.identifier;
    const { value: hasRecipients = false  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>current ? _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Crypto.hasRecipientAvailable */ .ZP.Crypto.hasRecipientAvailable(current) : undefined
    , [
        current
    ]);
    const [recipients, setRecipients] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    const request = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (!current) return;
        if (recipients) return;
        _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Crypto.getRecipients */ .ZP.Crypto.getRecipients(current).then(setRecipients);
    }, [
        current,
        !!recipients
    ]);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            request,
            recipients,
            hasRecipients
        })
    , [
        request,
        recipients,
        hasRecipients
    ]);
}


/***/ }),

/***/ 66309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78778);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51129);





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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>void (url && onURL?.(url))
    , [
        onURL,
        url
    ]);
    const outgoingRefItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>outgoingRefItem
    , [
        outgoingRefItem
    ]);
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
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        });
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : (event)=>onError?.(event)
            ,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
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
    });
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

/***/ 61305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "oL": () => (/* binding */ MaskIconInMinds)
/* harmony export */ });
/* unused harmony exports MaskTextIcon, WalletSharp, MaskFilledIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8461);

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
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        children: MaskTextSVG
    });
}
function MaskIcon(props) {
    const { size =24  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    });
}
function MaskIconOutlined(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    });
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
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
    });
}
function MaskIconInMinds(props) {
    const { size =18 , color  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 52 52",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "52",
            height: "52",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M26 52c14.36 0 26-11.64 26-26S40.36 0 26 0 0 11.64 0 26s11.64 26 26 26Z",
                    fill: "#72727C"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M41.693 19.609v8.634H14.242c1.199 5.24 5.955 9.153 11.64 9.153 4.7 0 8.765-2.675 10.71-6.562h5.1v7.252c0 1.717-1.413 3.109-3.157 3.109H13.269c-1.744 0-3.158-1.392-3.158-3.109V19.61h31.582Zm-8.13 11.225a9.33 9.33 0 0 1-7.681 3.991 9.33 9.33 0 0 1-7.681-3.991h15.362ZM19.147 21.68c-2.475 0-4.523 1.801-4.863 4.145h2.692a2.279 2.279 0 0 1 2.17-1.555c1.016 0 1.876.653 2.172 1.555h2.692c-.34-2.344-2.388-4.145-4.863-4.145Zm13.51 0c-2.475 0-4.523 1.801-4.863 4.145h2.692a2.279 2.279 0 0 1 2.17-1.555c1.016 0 1.876.653 2.172 1.555h2.692c-.34-2.344-2.388-4.145-4.863-4.145Zm5.878-11.57c1.744 0 3.158 1.392 3.158 3.108v3.8H10.11v-3.8c0-1.716 1.414-3.108 3.158-3.108h25.266Z",
                    fill: "#fff"
                })
            ]
        })
    });
}
function MaskSharpIconOfSize(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    });
}
function WalletSharp(props) {
    const { size =20  } = props;
    return /*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    });
}
function MaskFilledIcon(props) {
    const theme = useTheme();
    const icon = /* unused asset import */ undefined.toString();
    const icon_dark = /* unused asset import */ undefined.toString();
    return /*#__PURE__*/ _jsx("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    });
}


/***/ }),

/***/ 89523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93455);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46123);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58248);



function pasteImageToCompositionDefault(hasSucceed) {
    return async function(url, { recover , relatedTextPayload  }) {
        const image = typeof url === 'string' ? await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .downloadUrl */ .GR)(url) : url;
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .waitDocumentReadyState */ .uL)('interactive');
        if (relatedTextPayload) {
            _ui__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.automation.nativeCompositionDialog?.appendText?.(relatedTextPayload, {
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

/***/ 78583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(13305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(84921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(66309);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-draggable@4.4.5/node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(63849);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);
;// CONCATENATED MODULE: ./src/components/shared/DraggableDiv.tsx




const useStyle = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)((cjs_default()), {
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
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/CloudDownload.js
var CloudDownload = __webpack_require__(91898);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AutoPasteFailedDialog.tsx













const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const { onClose , data  } = props;
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const [, copy] = (0,useCopyToClipboard/* default */.Z)();
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const permission = (0,utils/* useQueryNavigatorPermission */.eD)(true, 'clipboard-write');
    const fileName = `masknetwork-encrypted-${(0,format/* default */.Z)(Date.now(), 'yyyyMMddHHmmss')}.png`;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DraggableDiv, {
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
                                        data.image ?? onClose();
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
    });
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







const PluginRender = (0,entry_content_script/* createInjectHooksRenderer */.EK)(entry_content_script/* useActivatedPluginsSNSAdaptor.visibility.useAnyMode */.Pz.visibility.useAnyMode, (x)=>x.GlobalInjection
);
function PageInspector(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { showSnackbar , closeSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            JSX,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {})
        ]
    });
}

// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PageInspector.tsx





function injectPageInspectorDefault(config = {}, additionalPropsToPageInspector = ()=>({})
, useCustomStyles = (0,entry/* makeStyles */.ZL)()({})) {
    const PageInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PageInspectorDefault() {
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPageInspector(classes);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspector, {
            ...additionalProps
        });
    });
    return function injectPageInspector(signal) {
        const dom = document.body.appendChild(document.createElement('div')).attachShadow({
            mode: 'closed'
        });
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(dom, {
            signal,
            key: 'page-inspector'
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspectorDefault, {}));
    };
}


/***/ }),

/***/ 10327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 1 modules
var context = __webpack_require__(67622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(28937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/colors/green.js
var green = __webpack_require__(92017);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(61305);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(58248);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AdditionalPostContent.tsx













var AdditionalIcon;
(function(AdditionalIcon) {
    AdditionalIcon["check"] = "check";
    AdditionalIcon["error"] = "error";
})(AdditionalIcon || (AdditionalIcon = {}));
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
        if (icon === AdditionalIcon.check) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
            htmlColor: green/* default.500 */.Z[500],
            ...props
        });
        if (icon === AdditionalIcon.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
            color: "error",
            ...props
        });
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
                        renderFragments: ui.activatedSocialNetworkUI?.customization.componentOverwrite?.RenderFragments,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TypedMessageRender */.Ot, {
                            message: TypedMessage
                        })
                    })
                })
            }) : null
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(52125);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(11945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(836);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/ProfileInList.tsx






const useStyle = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const { classes  } = useStyle();
    const { disabled , ListItemProps: listItemProps , onClick  } = props;
    const name = props.item.nickname || props.item.identifier.userId;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
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
                secondary: props.item.linkedPersona?.rawPublicKey?.toLowerCase()
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/ProfileInChip.tsx



function ProfileInChip(props) {
    const { disabled , onDelete , item: profile  } = props;
    const avatar = profile.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* Avatar */.qE, {
        person: profile
    }) : undefined;
    const displayName = profile.nickname || profile.identifier.userId;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        style: {
            marginRight: 6,
            marginBottom: 6
        },
        color: "primary",
        onDelete: disabled ? undefined : onDelete,
        label: displayName,
        avatar: avatar,
        ...props.ChipProps
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.7/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(44738);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/SelectProfileUI.tsx








const SelectProfileUI_useStyles = (0,entry/* makeStyles */.ZL)()({
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
    const classes = (0,entry/* useStylesExtends */.Bc)(SelectProfileUI_useStyles(), props);
    const { frozenSelected , onSetSelected , disabled , items , selected  } = props;
    const [search, setSearch] = (0,react.useState)('');
    const listBeforeSearch = items.filter((x)=>{
        if (selected.find((y)=>x.identifier === y.identifier
        )) return false;
        return true;
    });
    const listAfterSearch = listBeforeSearch.filter((x)=>{
        if (frozenSelected.find((y)=>x.identifier === y.identifier
        )) return false;
        if (search === '') return true;
        return !!x.identifier.userId.toLowerCase().match(search.toLowerCase()) || !!x.linkedPersona?.rawPublicKey?.toLowerCase().match(search.toLowerCase()) || !!(x.nickname || '').toLowerCase().match(search.toLowerCase());
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                                    onDelete: ()=>onSetSelected(selected.filter((x)=>x.identifier !== item.identifier
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
                        onKeyDown: (event)=>{
                            if (search !== '' || event.key !== 'Backspace') return;
                            onSetSelected(selected.slice(0, selected.length - 1));
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
    });
    function ProfileListItem(item, style) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInList, {
            item: item,
            disabled: disabled,
            onClick: ()=>{
                onSetSelected(selected.concat(item));
                setSearch('');
            },
            ListItemProps: {
                style
            }
        }, item.identifier.toText());
    }
}
function FrozenChip(item) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInChip, {
        disabled: true,
        item: item
    }, item.identifier.toText());
}

;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/index.tsx




;// CONCATENATED MODULE: ./src/components/InjectedComponents/SelectPeopleDialog.tsx







const SelectPeopleDialog_useStyles = (0,entry/* makeStyles */.ZL)()({
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
    const { classes  } = SelectPeopleDialog_useStyles();
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* InjectedDialog */.Fl, {
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
            rejection && /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        "Error: ",
                        rejection.message,
                        " ",
                        console.error(rejection)
                    ]
                })
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
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(88278);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx


function wrapAuthorDifferentMessage(author, postBy, jsx) {
    if (!author || !postBy) return jsx;
    if (author === postBy) return jsx;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            locales_legacy/* i18n.t */.a.t('decrypted_postbox_author_mismatch', {
                name: author?.userId
            }),
            jsx
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(4045);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(92483);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Provider.tsx


const ProviderByIcon = (0,icons_utils/* createIcon */.I)('ProviderByIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2.6333 2.79997C2.6333 2.43178 2.93178 2.1333 3.29997 2.1333H8.0049V3.19997H3.69997V12.8H13.3V8.31266H14.3666V13.2C14.3666 13.5682 14.0682 13.8666 13.7 13.8666H3.29997C2.93178 13.8666 2.6333 13.5682 2.6333 13.2V2.79997ZM9.60936 2.66663C9.60936 2.37208 9.84814 2.1333 10.1427 2.1333H13.8333C14.1279 2.1333 14.3666 2.37208 14.3666 2.66663V6.32887C14.3666 6.62342 14.1279 6.86221 13.8333 6.86221C13.5387 6.86221 13.3 6.62342 13.3 6.32887V3.96988L6.71998 10.6629C6.51349 10.8729 6.17581 10.8758 5.96576 10.6693C5.75572 10.4628 5.75284 10.1251 5.95934 9.9151L12.5611 3.19997H10.1427C9.84814 3.19997 9.60936 2.96119 9.60936 2.66663Z",
        fill: "#767F8D"
    })
}), '0 0 17 16');

;// CONCATENATED MODULE: ./src/plugins/MaskPluginWrapper.tsx









const MaskPluginWrapper_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>{
    return {
        card: {
            background: props?.backgroundGradient ?? 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;',
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            cursor: 'default',
            borderRadius: 15,
            overflow: 'hidden'
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: 15
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1.5)
        },
        provider: {
            display: 'flex',
            alignItems: 'center',
            '& > a': {
                lineHeight: 0
            }
        },
        publish: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 16
        },
        body: {
            padding: theme.spacing(0)
        },
        providerBy: {
            marginRight: theme.spacing(0.5),
            color: theme.palette.mode === 'dark' ? '#536471' : theme.palette.text.secondary
        }
    };
});
function MaskPostExtraInfoWrapper(props) {
    const { open , title , children , action , publisher , publisherLink , content , wrapperProps  } = props;
    const { classes  } = MaskPluginWrapper_useStyles({
        backgroundGradient: wrapperProps?.backgroundGradient
    });
    const theme = (0,useTheme/* default */.Z)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const publisherInfo = (0,react.useMemo)(()=>{
        if (!publisher) return;
        const main = /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontSize: 14,
            fontWeight: "500",
            color: entry/* MaskColorVar.textPluginColor */.ZN.textPluginColor,
            children: publisher
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            className: classes.provider,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    fontSize: 14,
                    fontWeight: "400",
                    className: classes.providerBy,
                    children: t('plugin_provider_by')
                }),
                main,
                publisherLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: publisherLink,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderByIcon, {
                        style: {
                            width: 16,
                            height: 16,
                            marginLeft: 4
                        }
                    })
                }) : null
            ]
        });
    }, [
        publisher,
        publisherLink
    ]);
    const inner = /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        style: {
            display: open ? 'block' : 'none'
        },
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    wrapperProps?.icon ?? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskIcon */.ec, {
                        style: {
                            filter: 'drop-shadow(0px 6px 12px rgba(28, 104, 243, 0.2))',
                            width: 24,
                            height: 24
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        sx: {
                            marginLeft: 0.5
                        },
                        variant: "body1",
                        fontSize: 16,
                        fontWeight: 700,
                        color: entry/* MaskColorVar.textPluginColor */.ZN.textPluginColor,
                        children: (wrapperProps?.title ?? title) ?? t('plugin_default_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.publish,
                        children: publisherInfo
                    })
                ]
            }),
            action ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "#FF3545",
                        sx: {
                            padding: 1
                        },
                        textAlign: "center",
                        children: content
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.action,
                        children: action
                    })
                ]
            }) : null,
            children ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
            message: "Mask is loading this content..."
        }),
        children: inner
    });
};
const MaskPostExtraPluginWrapper = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { ID , name , publisher , wrapperProps  } = props.definition;
    const t = (0,entry_content_script/* usePluginI18NField */.eS)();
    const [width, setWidth] = (0,react.useState)(undefined);
    const [open, setOpen] = (0,react.useState)(false);
    const [title, setTitle] = (0,react.useState)(undefined);
    const refItem = (0,react.useMemo)(()=>{
        return {
            setWidth,
            setWrap: setOpen,
            setWrapperName: setTitle
        };
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>refItem
    , [
        refItem
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
        wrapperProps: wrapperProps,
        open: open,
        title: title || t(ID, name),
        width: width,
        publisher: publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
            pluginID: ID,
            field: publisher.name
        }) : undefined,
        publisherLink: publisher?.link,
        children: props.children
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
;// CONCATENATED MODULE: ../icons/general/Plugin.tsx


const PluginIcon = (0,icons_utils/* createIcon */.I)('PluginIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M12.6624 16.5H9.24266L9.50679 15.7563C9.57629 15.5547 9.59715 15.3392 9.56934 15.1238C9.54154 14.9083 9.45813 14.7067 9.33302 14.5329C9.20791 14.3592 9.04109 14.2132 8.85342 14.1159C8.47808 13.9213 7.99848 13.9213 7.62314 14.1159C7.43547 14.2132 7.26865 14.3592 7.14354 14.5329C7.02538 14.7067 6.94197 14.9152 6.91417 15.1238C6.88636 15.3323 6.90721 15.5547 6.97672 15.7563L7.24085 16.5H3.82109C3.57782 16.5 3.34844 16.4513 3.12602 16.361C2.90359 16.2706 2.70897 16.1386 2.53521 15.9648C2.36144 15.791 2.22937 15.5964 2.13901 15.374C2.04866 15.1516 2 14.9152 2 14.6789V11.2731L2.74373 11.5372C2.9453 11.6067 3.16077 11.6275 3.36929 11.5997C3.57782 11.5719 3.77939 11.4885 3.95315 11.3634C4.12692 11.2383 4.27289 11.0784 4.3702 10.8838C4.46751 10.6961 4.52311 10.4807 4.52311 10.2721C4.52311 10.0636 4.46751 9.8412 4.3702 9.65353C4.27289 9.46586 4.12692 9.29904 3.95315 9.17393C3.77939 9.04882 3.57782 8.97236 3.36929 8.93761C3.16077 8.9098 2.93835 8.93066 2.74373 9.00016L2 9.26429V5.84453C2 5.35798 2.18767 4.89923 2.53521 4.55865C2.87579 4.21806 3.34149 4.02344 3.82109 4.02344H5.7951C5.78815 3.88443 5.7951 3.74541 5.81595 3.61335C5.86461 3.22411 6.01752 2.85572 6.23994 2.53599C6.46237 2.21625 6.7682 1.95212 7.11574 1.77836C7.46327 1.59764 7.87337 1.49338 8.24175 1.50033C8.65185 1.50033 9.03414 1.59069 9.36777 1.7575C9.71531 1.93822 10.0142 2.20235 10.2436 2.52208C10.4729 2.84182 10.6189 3.21716 10.6676 3.59945C10.6884 3.73846 10.6954 3.87748 10.6884 4.00954H12.6624C12.9057 4.00954 13.1351 4.0582 13.3575 4.14855C13.5799 4.23891 13.7745 4.37098 13.9483 4.54475C14.1221 4.71156 14.2541 4.91313 14.3445 5.13556C14.4349 5.35798 14.4835 5.59431 14.4835 5.83063V7.80464C14.6225 7.79769 14.7615 7.80464 14.8936 7.82549C15.2828 7.8811 15.6582 8.02706 15.9779 8.24948C16.2976 8.47886 16.5618 8.77774 16.7425 9.12528C16.9232 9.47281 17.0205 9.86205 17.0205 10.2513C17.0205 10.6405 16.9232 11.0298 16.7425 11.3773C16.5618 11.7248 16.2976 12.0307 15.9779 12.2531C15.6582 12.4755 15.2828 12.6284 14.8936 12.6771C14.7546 12.698 14.6225 12.7049 14.4835 12.698V14.665C14.4835 14.9083 14.4349 15.1446 14.3445 15.3601C14.2541 15.5756 14.1221 15.7771 13.9553 15.9509C13.7815 16.1247 13.5869 16.2567 13.3644 16.3471C13.1351 16.4513 12.8987 16.5 12.6624 16.5ZM10.6954 15.3879H12.6624C12.7528 15.3879 12.8501 15.367 12.9335 15.3323C13.0169 15.2975 13.1003 15.2419 13.1629 15.1794C13.2254 15.1168 13.281 15.0334 13.3158 14.95C13.3505 14.8666 13.3714 14.7693 13.3714 14.6789V11.2522L14.1151 11.5163C14.3167 11.5858 14.5322 11.6136 14.7476 11.5789C14.9631 11.5511 15.1647 11.4677 15.3384 11.3495C15.5122 11.2244 15.6582 11.0576 15.7555 10.8699C15.8528 10.6822 15.9015 10.4668 15.9015 10.2513C15.9015 10.0358 15.8459 9.8273 15.7485 9.63268C15.6512 9.44501 15.5053 9.27819 15.3315 9.15308C15.1577 9.02797 14.9562 8.95151 14.7407 8.92371C14.5322 8.8959 14.3097 8.91675 14.1082 8.98626L13.3644 9.25039V5.83063C13.3644 5.74027 13.3436 5.64991 13.3088 5.55955C13.2741 5.47614 13.2254 5.39969 13.1559 5.33018C13.0864 5.26067 13.01 5.21202 12.9265 5.17726C12.8431 5.14251 12.7528 5.12166 12.6555 5.12166H9.23571L9.49984 4.37793C9.56934 4.17636 9.5902 3.96089 9.56239 3.74541C9.53459 3.53689 9.45118 3.32837 9.32607 3.1546C9.20095 2.98083 9.03414 2.83487 8.84647 2.73756C8.67965 2.6611 8.47808 2.61244 8.24175 2.61244C8.02628 2.61244 7.81776 2.6611 7.63009 2.75841C7.44242 2.85572 7.2756 3.00168 7.15049 3.17545C7.02538 3.34922 6.94197 3.55774 6.91417 3.76626C6.88636 3.97479 6.90721 4.19721 6.97672 4.39878L7.24085 5.14251H3.82109C3.63342 5.14251 3.4527 5.21897 3.32064 5.35103C3.18857 5.47614 3.11212 5.65686 3.11212 5.84453V7.81854C3.25113 7.81159 3.39015 7.81854 3.52221 7.83939C3.91145 7.895 4.27984 8.04096 4.59957 8.27034C4.91931 8.49276 5.17648 8.79859 5.3572 9.14613C5.53792 9.49367 5.62828 9.88291 5.62828 10.2721C5.62828 10.6614 5.53097 11.0506 5.3572 11.3982C5.17648 11.7457 4.91931 12.0446 4.59957 12.274C4.27984 12.4964 3.91145 12.6493 3.52221 12.7049C3.39015 12.7119 3.25113 12.7188 3.11212 12.7119V14.672C3.11212 14.7693 3.13297 14.8596 3.16772 14.943C3.20248 15.0264 3.25808 15.1099 3.32064 15.1724C3.3832 15.235 3.45965 15.2906 3.55001 15.3253C3.63342 15.3601 3.72378 15.3809 3.82109 15.3809H5.7951C5.78815 15.2419 5.7951 15.1029 5.81595 14.9708C5.87156 14.5816 6.01752 14.2132 6.23994 13.8935C6.46237 13.5737 6.7682 13.3096 7.11574 13.1289C7.81081 12.7675 8.67965 12.7675 9.37472 13.1289C9.72226 13.3096 10.0211 13.5737 10.2505 13.8935C10.4799 14.2132 10.6259 14.5885 10.6745 14.9708C10.6884 15.1099 10.6954 15.2489 10.6954 15.3879Z",
        fill: "white"
    })
}), '0 0 19 18');

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DisabledPluginSuggestion.tsx










function useDisabledPlugins() {
    const activated = new Set((0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any').map((x)=>x.ID
    ));
    const minimalMode = new Set((0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)(true).map((x)=>x.ID
    ));
    const disabledPlugins = [
        ...entry_content_script/* registeredPlugins */.i1
    ].filter((x)=>!activated.has(x.ID) || minimalMode.has(x.ID)
    );
    return disabledPlugins;
}
function useDisabledPluginSuggestionFromPost(postContent, metaLinks) {
    const disabled = useDisabledPlugins().filter((x)=>x.contribution?.postContent
    );
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
    const disabled = useDisabledPlugins().filter((x)=>x.contribution?.metadataKeys
    );
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
    const message = (0,base/* extractTextFromTypedMessage */.Vc)(entry_content_script/* usePostInfoDetails.rawMessage */.H9.rawMessage());
    const metaLinks = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
    const matches = useDisabledPluginSuggestionFromPost(message, metaLinks);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
        plugins: matches
    });
}
function PossiblePluginSuggestionUI(props) {
    const { plugins  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const theme = (0,useTheme/* default */.Z)();
    const onClick = (0,react.useCallback)((x)=>{
        service/* default.Settings.setPluginMinimalModeEnabled */.ZP.Settings.setPluginMinimalModeEnabled(x.ID, false);
    }, []);
    const _plugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    if (!plugins.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: plugins.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPostExtraInfoWrapper, {
                open: true,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                    field: x.name,
                    pluginID: x.ID
                }),
                publisher: x.publisher ? /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                    pluginID: x.ID,
                    field: x.publisher.name
                }) : undefined,
                publisherLink: x.publisher?.link,
                wrapperProps: _plugins.find((y)=>y.ID === x.ID
                )?.wrapperProps,
                action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "small",
                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginIcon, {
                        style: {
                            width: 18,
                            height: 18
                        }
                    }),
                    variant: "contained",
                    onClick: ()=>onClick(x)
                    ,
                    sx: {
                        backgroundColor: theme.palette.maskColor?.dark,
                        color: 'white',
                        width: '254px',
                        height: '36px',
                        fontSize: 14,
                        fontWeight: 700,
                        paddingTop: 1,
                        paddingBottom: 1.125,
                        lineHeight: 1.5,
                        '&:hover': {
                            backgroundColor: theme.palette.maskColor?.dark
                        }
                    },
                    children: t('plugin_enables')
                }),
                content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Rectangle, {
                    style: {
                        paddingLeft: 8,
                        marginBottom: 42
                    }
                })
            }, x.ID)
        )
    });
}
const useRectangleStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        rectangle: {
            background: 'rgba(255, 255, 255, 0.5)'
        }
    })
);
function Rectangle(props) {
    const { classes  } = useRectangleStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 103,
                height: 16
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 68,
                height: 16
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                className: classes.rectangle,
                variant: "text",
                animation: false,
                width: 48,
                height: 16
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPostMetadataRender.tsx





const Decrypted = (0,entry_content_script/* createInjectHooksRenderer */.EK)(entry_content_script/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (x)=>x.DecryptedInspector
, MaskPostExtraPluginWrapper);
function DecryptedUI_PluginRendererWithSuggestion(props) {
    const a = useDisabledPluginSuggestionFromMeta(props.metadata);
    const b = useDisabledPluginSuggestionFromPost((0,base/* extractTextFromTypedMessage */.Vc)(props.message), []);
    const suggest = Array.from(new Set(a.concat(b)));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
                plugins: suggest
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Decrypted, {
                ...props
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/CompositionDialog/useRecipientsList.ts
var useRecipientsList = __webpack_require__(57488);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx
















function useCanAppendShareTarget(whoAmI) {
    const version = entry_content_script/* usePostInfoDetails.version */.H9.version();
    const sharedPublic = entry_content_script/* usePostInfoDetails.publicShared */.H9.publicShared();
    const currentPostBy = entry_content_script/* usePostInfoDetails.author */.H9.author();
    // TODO: this should be read from the payload.
    const authorInPayload = currentPostBy;
    const postAuthor = authorInPayload || currentPostBy;
    if (sharedPublic) return false;
    if (version !== -38) return false;
    if (!whoAmI) return false;
    if (whoAmI !== postAuthor) return false;
    return true;
}
const DecryptPostSuccess = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccess(props) {
    const { whoAmI  } = props;
    const canShare = useCanAppendShareTarget(whoAmI);
    if (canShare) return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccessAppendShare, {
        ...props,
        whoAmI: whoAmI
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccessBase, {
        ...props
    });
});
const DecryptPostSuccessBase = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccessNoShare(props) {
    const { message , author , postedBy  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
                title: t('decrypted_postbox_title'),
                headerActions: wrapAuthorDifferentMessage(author, postedBy, props.children),
                message: message
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptedUI_PluginRendererWithSuggestion, {
                message: message,
                metadata: message.meta
            })
        ]
    });
});
const DecryptedPostSuccess_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        addRecipientsLink: {
            cursor: 'pointer',
            marginLeft: theme.spacing(1)
        }
    };
});
const DecryptPostSuccessAppendShare = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccessAppendShare(props) {
    const { classes  } = DecryptedPostSuccess_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [showDialog, setShowDialog] = (0,react.useState)(false);
    const recipients = (0,useRecipientsList/* useRecipientsList */.a)();
    const canAppendShareTarget = useCanAppendShareTarget(props.whoAmI);
    const rightActions = canAppendShareTarget ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                color: "primary",
                onClick: ()=>setShowDialog(true)
                ,
                className: classes.addRecipientsLink,
                children: t('decrypted_postbox_add_recipients')
            }),
            showDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(AppendShareDetail, {
                whoAmI: props.whoAmI,
                onClose: ()=>setShowDialog(false)
                ,
                recipients: recipients
            })
        ]
    }) : null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccessBase, {
        ...props,
        children: rightActions
    });
});
function AppendShareDetail(props) {
    const info = (0,entry_content_script/* usePostInfo */.oQ)();
    const iv = entry_content_script/* usePostInfoDetails.postIVIdentifier */.H9.postIVIdentifier();
    const { value: alreadySelectedPreviously = shared_base_src/* EMPTY_LIST */.rP , retry  } = (0,useAsyncRetry/* default */.Z)(()=>service/* default.Crypto.getIncompleteRecipientsOfPost */.ZP.Crypto.getIncompleteRecipientsOfPost(iv)
    , [
        iv
    ]);
    (0,react.useEffect)(props.recipients.request, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileDialog, {
        open: true,
        alreadySelectedPreviously: alreadySelectedPreviously,
        profiles: props.recipients.recipients || shared_base_src/* EMPTY_LIST */.rP,
        onClose: props.onClose,
        onSelect: async (profiles)=>{
            await service/* default.Crypto.appendShareTarget */.ZP.Crypto.appendShareTarget(info.version.getCurrentValue(), iv, profiles.map((x)=>x.identifier
            ), props.whoAmI, social_network/* activatedSocialNetworkUI.encryptionNetwork */.LM.encryptionNetwork);
            await (0,esm/* delay */.gw)(1500);
            retry();
        }
    });
}

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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: key[type?.progress || 'undefined'],
        progress: true,
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0)
    });
});

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptPostFailed.tsx





const DecryptPostFailed = /*#__PURE__*/ (0,react.memo)(function DecryptPostFailed(props) {
    const { author , postedBy , error  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: t('service_decryption_failed'),
        titleIcon: "error",
        message: error?.message,
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0)
    });
});

// EXTERNAL MODULE: ../encryption/src/index.ts
var encryption_src = __webpack_require__(66525);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var ts_results_esm = __webpack_require__(48160);
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
    const { whoAmI  } = props;
    const deconstructedPayload = entry_content_script/* usePostInfoDetails.hasMaskPayload */.H9.hasMaskPayload();
    const currentPostBy = entry_content_script/* usePostInfoDetails.author */.H9.author();
    // TODO: we should read this from the payload.
    const authorInPayload = entry_content_script/* usePostInfoDetails.author */.H9.author();
    const postBy = authorInPayload || currentPostBy;
    const postMetadataImages = entry_content_script/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const mentionedLinks = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
    const postInfo = (0,entry_content_script/* usePostInfo */.oQ)();
    const [progress1, dispatch] = (0,react.useReducer)(progressReducer, []);
    (0,react.useEffect)(()=>{
        function setCommentFns(iv, message) {
            postInfo.encryptComment.value = async (comment)=>service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(iv, (0,base/* extractTextFromTypedMessage */.Vc)(message).unwrap(), comment)
            ;
            postInfo.decryptComment.value = async (encryptedComment)=>service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(iv, (0,base/* extractTextFromTypedMessage */.Vc)(message).unwrap(), encryptedComment)
            ;
        }
        const signal = new AbortController();
        const postURL = postInfo.url.getCurrentValue()?.toString();
        const report = (key)=>(kind, message)=>{
                if (kind === 'e2e') {
                    dispatch({
                        type: 'refresh',
                        key,
                        progress: {
                            type: 'progress',
                            progress: 'finding_post_key',
                            internal: false
                        }
                    });
                } else {
                    dispatch({
                        type: 'refresh',
                        key,
                        progress: {
                            type: 'error',
                            error: message,
                            internal: false
                        }
                    });
                }
            }
        ;
        if (deconstructedPayload) {
            makeProgress(postURL, postBy, whoAmI, {
                type: 'text',
                text: (0,base/* extractTextFromTypedMessage */.Vc)(postInfo.rawMessage.getCurrentValue()).unwrapOr('') + ' ' + mentionedLinks.join(' ')
            }, (message, iv)=>{
                setCommentFns(iv, message);
                dispatch({
                    type: 'refresh',
                    key: 'text',
                    progress: {
                        type: 'success',
                        content: message,
                        internal: false,
                        iv: (0,esm/* encodeArrayBuffer */.ll)(iv)
                    }
                });
            }, postInfo.decryptedReport, report('text'), signal.signal);
        }
        postMetadataImages.forEach((url)=>{
            if (signal.signal.aborted) return;
            makeProgress(postURL, postBy, whoAmI, {
                type: 'image-url',
                image: url
            }, (message, iv)=>{
                setCommentFns(iv, message);
                dispatch({
                    type: 'refresh',
                    key: url,
                    progress: {
                        type: 'success',
                        content: message,
                        internal: false,
                        iv: (0,esm/* encodeArrayBuffer */.ll)(iv)
                    }
                });
            }, postInfo.decryptedReport, report(url), signal.signal);
        });
        return ()=>signal.abort()
        ;
    }, [
        deconstructedPayload,
        postBy,
        postMetadataImages.join(),
        whoAmI,
        mentionedLinks.join()
    ]);
    if (!deconstructedPayload && progress1.every((x)=>x.progress.internal
    )) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: progress1// the internal progress should not display to the end-user
        .filter(({ progress  })=>!progress.internal
        ).map(({ progress  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: renderProgress(progress)
            }, index)
        )
    });
    function renderProgress(progress) {
        switch(progress.type){
            case 'success':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostSuccess, {
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    whoAmI: whoAmI,
                    message: progress.content
                });
            case 'error':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostFailed, {
                    error: new Error(progress.error),
                    author: authorInPayload,
                    postedBy: currentPostBy
                });
            case 'progress':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostAwaiting, {
                    type: progress,
                    author: authorInPayload,
                    postedBy: currentPostBy
                });
            default:
                return null;
        }
    }
}
async function makeProgress(postURL, authorHint, currentProfile, payload, done, reporter, reportProgress, signal) {
    const context = {
        postURL,
        authorHint,
        currentProfile,
        currentSocialNetwork: social_network/* activatedSocialNetworkUI.encryptionNetwork */.LM.encryptionNetwork
    };
    let iv;
    for await (const progress of service/* ServicesWithProgress.decryptionWithSocialNetworkDecoding */.Ql.decryptionWithSocialNetworkDecoding(payload, context)){
        if (signal.aborted) return;
        if (progress.type === encryption_src/* DecryptProgressKind.Success */.Pj.Success) {
            done(progress.content, iv || new Uint8Array());
        } else if (progress.type === encryption_src/* DecryptProgressKind.Info */.Pj.Info) {
            iv ??= progress.iv;
            if (typeof progress.isAuthorOfPost === 'boolean') reporter({
                isAuthorOfPost: (0,ts_results_esm/* Some */.bD)(progress.isAuthorOfPost)
            });
            if (progress.iv) reporter({
                iv: (0,esm/* encodeArrayBuffer */.ll)(progress.iv)
            });
            if (progress.version) reporter({
                version: progress.version
            });
            if (typeof progress.publicShared === 'boolean') reporter({
                sharedPublic: (0,ts_results_esm/* Some */.bD)(progress.publicShared)
            });
        } else if (progress.type === encryption_src/* DecryptProgressKind.Progress */.Pj.Progress) {
            if (progress.event === encryption_src/* DecryptIntermediateProgressKind.TryDecryptByE2E */.gO.TryDecryptByE2E) reportProgress('e2e', '');
            else (0,esm/* safeUnreachable */.P)(progress.event);
        } else if (progress.type === encryption_src/* DecryptProgressKind.Error */.Pj.Error) {
            console.log(progress.message);
        } else (0,esm/* safeUnreachable */.P)(progress);
    }
}

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(14257);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostInspector.tsx








const PluginHooksRenderer = (0,entry_content_script/* createInjectHooksRenderer */.EK)(entry_content_script/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostInspector
, MaskPostExtraPluginWrapper);
function PostInspector(props) {
    const postBy = entry_content_script/* usePostInfoDetails.author */.H9.author();
    const hasEncryptedPost = entry_content_script/* usePostInfoDetails.hasMaskPayload */.H9.hasMaskPayload();
    const postImages = entry_content_script/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const isDebugging = (0,use_subscription.useSubscription)(shared/* PersistentStorages.Settings.storage.debugging.subscription */._H.Settings.storage.debugging.subscription);
    const whoAmI = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    if (hasEncryptedPost || postImages.length) {
        if (!isDebugging) props.zipPost();
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPost, {
            whoAmI: whoAmI?.identifier || null
        }));
    }
    return withAdditionalContent(null);
    function withAdditionalContent(x) {
        const slot = hasEncryptedPost ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {});
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                 false ? /*#__PURE__*/ 0 : null,
                props.slotPosition !== 'after' && slot,
                x,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionPostInspector, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginHooksRenderer, {}),
                props.slotPosition !== 'before' && slot
            ]
        });
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostInspector.tsx







function injectPostInspectorDefault(config = {}, additionalPropsToPostInspector = ()=>({})
, useCustomStyles = (0,entry/* makeStyles */.ZL)()({})) {
    const PostInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PostInspectorDefault(props) {
        const { zipPost  } = props;
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostInspector(classes);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            zipPost: zipPost,
            ...additionalProps
        });
    });
    const { zipPost: zipPost1 , injectionPoint  } = config;
    const zipPostF = zipPost1 || noop/* default */.Z;
    return function injectPostInspector(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspectorDefault, {
                zipPost: ()=>zipPostF(current.rootElement)
            })
        });
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(injectionPoint?.(current) ?? current.rootElement.afterShadow, {
            key: 'post-inspector',
            signal
        });
        root.render(jsx);
        return root.destroy;
    };
}


/***/ }),

/***/ 33262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 1 modules
var context = __webpack_require__(67622);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(58248);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostReplacer.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()({
    root: {
        overflowWrap: 'break-word'
    }
});
function PostReplacer(props) {
    const { classes  } = useStyles();
    const postMessage = entry_content_script/* usePostInfoDetails.rawMessage */.H9.rawMessage();
    const author = entry_content_script/* usePostInfoDetails.author */.H9.author();
    const currentProfile = (0,useActivatedUI/* useCurrentIdentity */.Ud)()?.identifier;
    const url = entry_content_script/* usePostInfoDetails.url */.H9.url();
    const initialTransformationContext = (0,react.useMemo)(()=>{
        return {
            authorHint: author || undefined,
            currentProfile,
            postURL: url?.toString()
        };
    }, [
        author,
        currentProfile,
        url
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TextResizeContext.Provider */.FG.Provider, {
            value: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(context/* TypedMessageRenderContext */.w, {
                renderFragments: ui.activatedSocialNetworkUI?.customization.componentOverwrite?.RenderFragments,
                context: initialTransformationContext,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transformer, {
                    ...props,
                    message: postMessage
                })
            })
        })
    });
}
function Transformer({ message , unzip , zip  }) {
    const after = (0,dom/* useTransformedValue */.CB)(message);
    const shouldReplace = (0,react.useMemo)(()=>{
        const flatten = (0,base/* FlattenTypedMessage */.po)(message, base/* emptyTransformationContext */.vg);
        if (!(0,base/* isTypedMessageEqual */.Hz)(flatten, after)) return true;
        if (hasCashOrHashTag(after)) return true;
        return false;
    }, [
        message,
        after
    ]);
    (0,react.useEffect)(()=>{
        if (shouldReplace) zip?.();
        else unzip?.();
        return ()=>unzip?.()
        ;
    }, []);
    if (shouldReplace) return /*#__PURE__*/ (0,jsx_runtime.jsx)(dom/* TypedMessageRender */.Ot, {
        message: after
    });
    return null;
}
function hasCashOrHashTag(message) {
    let result = false;
    function visitor(node) {
        if ((0,base/* isTypedMessageAnchor */.bj)(node)) {
            if (node.category === 'cash' || node.category === 'hash') {
                result = true;
                return 'stop';
            }
        } else (0,base/* forEachTypedMessageChild */.ss)(node, visitor);
    }
    visitor(message);
    (0,base/* forEachTypedMessageChild */.ss)(message, visitor);
    return result;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx






function injectPostReplacer(config = {}) {
    const PostReplacerDefault = /*#__PURE__*/ (0,react.memo)(function PostReplacerDefault(props) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacer, {
            zip: props.zipPost,
            unzip: props.unZipPost
        });
    });
    const { zipPost , unzipPost  } = config;
    const zipPostF = zipPost || noop/* default */.Z;
    const unzipPostF = unzipPost || noop/* default */.Z;
    return function injectPostReplacer(current, signal) {
        signal.addEventListener('abort', unzipPostF);
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(current.rootElement.afterShadow, {
            key: 'post-replacer',
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostReplacerDefault, {
                zipPost: ()=>zipPostF(current.rootElement)
                ,
                unZipPost: ()=>unzipPostF(current.rootElement)
                ,
                ...current
            })
        }));
    };
}


/***/ }),

/***/ 4154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createTaskStartSetupGuideDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(16660);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(5903);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide/types.ts
var types = __webpack_require__(88890);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(7666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(7708);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/WizardDialog.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
            });
        default:
            return null;
    }
}
const useWizardDialogStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
            minWidth: 150,
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
                color: `${entry/* MaskColorVar.twitterButtonText */.ZN.twitterButtonText} !important`,
                background: `${entry/* MaskColorVar.twitterButton */.ZN.twitterButton} !important`
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
            borderTop: `dashed 1px  ${entry/* MaskColorVar.borderSecondary */.ZN.borderSecondary}`
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
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
    });
}

// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(61305);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
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
var ActionButton = __webpack_require__(72288);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/FindUsername.tsx











const useFindUsernameStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        avatar: {
            display: 'block',
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: `solid 1px ${entry/* MaskColorVar.border */.ZN.border}`,
            '&.connected': {
                borderColor: entry/* MaskColorVar.success */.ZN.success
            }
        },
        verified: {
            position: 'absolute',
            bottom: 0,
            right: 0,
            fontSize: 16,
            color: entry/* MaskColorVar.success */.ZN.success
        }
    })
);
function FindUsername({ personaName , username , avatar , onConnect , onDone , onClose , enableNextID  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [connected, setConnected] = (0,react.useState)(false);
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
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
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/VerifyNextID.tsx












const VerifyNextID = ({ personaName , personaIdentifier , username , avatar , onVerify , onDone , onClose , network , disableVerify  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useWizardDialogStyles();
    const { classes: findUsernameClasses  } = useFindUsernameStyles();
    const [checked, setChecked] = (0,react.useState)(false);
    if (!personaIdentifier) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
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
            init: disableVerify ? t('setup_guide_verify_should_change_profile') : t('setup_guide_verify'),
            waiting: t('setup_guide_verifying'),
            complete: t('ok'),
            failed: t('setup_guide_verifying_failed'),
            executor: onVerify,
            completeOnClick: onDone,
            disabled: !username || !personaName || disableVerify,
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
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Extension.js
var Extension = __webpack_require__(74271);
;// CONCATENATED MODULE: ../icons/general/Pin.tsx


const PinIcon = (0,icons_utils/* createIcon */.I)('PinIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M16.5 2.75v1.833h-.917v5.5l1.834 2.75v1.834h-5.5v6.416h-1.834v-6.416h-5.5v-1.834l1.834-2.75v-5.5H5.5V2.75h11ZM8.25 4.583v6.056l-1.463 2.194h8.426L13.75 10.64V4.583h-5.5Z"
    })
}), '0 0 22 22');

;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide/PinExtension.tsx








function PinExtension({ onDone  }) {
    const pinImg = new URL(/* asset import */ __webpack_require__(5850), __webpack_require__.b).toString();
    const { classes  } = useWizardDialogStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(WizardDialog, {
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
                            filter: 'drop-shadow(0 0 16px rgba(101, 119, 134, 0.2))'
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
        onClose: onDone
    });
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(19769);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide.tsx


















function SetupGuideUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props;
    const ui = social_network/* activatedSocialNetworkUI */.LM;
    const [step, setStep] = (0,react.useState)(types/* SetupGuideStep.FindUsername */.s.FindUsername);
    const [enableNextID] = (0,react.useState)(ui.configuration.nextIDConfig?.enable);
    const verifyPostCollectTimer = (0,react.useRef)(null);
    const platform1 = ui.configuration.nextIDConfig?.platform;
    // #region parse setup status
    const lastStateRef = settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier];
    const lastState_ = (0,src/* useValueRef */.E)(lastStateRef);
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
        setStep(lastState.status ?? types/* SetupGuideStep.Close */.s.Close);
    }, [
        lastState
    ]);
    // #endregion
    // #region setup username
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const getUsername = ()=>lastState.username || lastRecognized.identifier?.userId || ''
    ;
    const [username, setUsername] = (0,react.useState)(getUsername);
    const disableVerify = !lastRecognized.identifier || !lastState.username ? false : lastRecognized.identifier.userId !== lastState.username;
    (0,react.useEffect)(()=>{
        const handler = (val)=>{
            if (username === '' && val.identifier) setUsername(val.identifier.userId);
        };
        return ui.collecting.identityProvider?.recognized.addListener(handler);
    }, [
        username
    ]);
    (0,react.useEffect)(()=>{
        if (username || ui.networkIdentifier !== shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter) return;
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
        return service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(persona);
    }, [
        persona
    ]);
    (0,react.useEffect)(()=>{
        return shared_base_src/* CrossIsolationMessages.events.verifyNextID.on */.WF.events.verifyNextID.on(()=>{
            setStep(types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID);
        });
    }, []);
    const onConnect = async ()=>{
        const id = shared_base_src/* ProfileIdentifier.of */.WO.of(ui.networkIdentifier, username);
        if (!id.some) return;
        // attach persona with SNS profile
        await service/* default.Identity.attachProfile */.ZP.Identity.attachProfile(id.val, persona, {
            connectionConfirmState: 'confirmed'
        });
        // auto-finish the setup process
        if (!persona_) throw new Error('invalid persona');
        await service/* default.Identity.setupPersona */.ZP.Identity.setupPersona(persona_?.identifier);
    };
    const onVerify = async ()=>{
        if (!username) return;
        if (!persona_) return;
        const collectVerificationPost = ui.configuration.nextIDConfig?.collectVerificationPost;
        const platform = ui.configuration.nextIDConfig?.platform;
        if (!platform) return;
        const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.identifier.publicKeyAsHex, platform, username);
        if (!isBound) {
            const payload = await web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(persona_.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Create */.BU.Create, username, platform, settings/* languageSettings.value */.pQ.value ?? 'default');
            if (!payload) throw new Error('Failed to create persona payload.');
            const signResult = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
                method: 'eth',
                message: payload.signPayload,
                identifier: persona_.identifier
            });
            if (!signResult) throw new Error('Failed to sign by persona.');
            const signature = signResult.signature.signature;
            const postContent = payload.postContent.replace('%SIG_BASE64%', (0,shared_base_src/* toBase64 */.s3)((0,shared_base_src/* fromHex */.H_)(signature)));
            ui.automation?.nativeCompositionDialog?.appendText?.(postContent, {
                recover: false
            });
            const waitingPost = new Promise((resolve, reject)=>{
                verifyPostCollectTimer.current = setInterval(async ()=>{
                    const post = collectVerificationPost?.(postContent);
                    if (post && persona_.identifier.publicKeyAsHex) {
                        clearInterval(verifyPostCollectTimer.current);
                        await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(payload.uuid, persona_.identifier.publicKeyAsHex, shared_base_src/* NextIDAction.Create */.BU.Create, platform, username, payload.createdAt, {
                            signature,
                            proofLocation: post.postId
                        });
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
            const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.identifier.publicKeyAsHex, platform, username);
            if (!isBound) throw new Error('Failed to verify.');
            utils/* MaskMessages.events.ownProofChanged.sendToAll */.ql.events.ownProofChanged.sendToAll(undefined);
        }
    };
    const onClose = ()=>{
        settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = '';
        setStep(types/* SetupGuideStep.Close */.s.Close);
    };
    const onConnected = async ()=>{
        if (enableNextID && persona_?.identifier.publicKeyAsHex && platform1 && username) {
            const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.identifier.publicKeyAsHex, platform1, username);
            if (!isBound) {
                settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = json_stable_stringify_default()({
                    status: types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID
                });
                setStep(types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID);
                return;
            }
        }
        if (!settings/* userPinExtension.value */.FX.value) {
            settings/* userPinExtension.value */.FX.value = true;
            setStep(types/* SetupGuideStep.PinExtension */.s.PinExtension);
            return;
        }
        onDone();
    };
    const onVerifyDone = async ()=>{
        if (!settings/* userPinExtension.value */.FX.value) {
            settings/* userPinExtension.value */.FX.value = true;
            setStep(types/* SetupGuideStep.PinExtension */.s.PinExtension);
            return;
        }
        onDone();
    };
    const onDone = async ()=>{
        const network = ui.networkIdentifier;
        if (network === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter && settings/* userGuideStatus */.Ct[network].value !== settings/* userGuideVersion.value */.lJ.value) {
            settings/* userGuideStatus */.Ct[network].value = '1';
        } else {
            onCreate();
        }
        onClose();
    };
    const onCreate = async ()=>{
        let content = t('setup_guide_say_hello_content');
        if (ui.networkIdentifier === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter) {
            content += t('setup_guide_say_hello_follow', {
                account: '@realMaskNetwork'
            });
        }
        ui.automation.maskCompositionDialog?.open?.((0,base/* makeTypedMessageText */.P)(content), {
            target: shared_base_src/* EncryptionTargetType.Public */.J4.Public
        });
    };
    switch(step){
        case types/* SetupGuideStep.FindUsername */.s.FindUsername:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(FindUsername, {
                personaName: persona_?.nickname,
                username: username,
                avatar: lastRecognized.avatar,
                onUsernameChange: setUsername,
                onConnect: onConnect,
                onDone: onConnected,
                onClose: onClose,
                enableNextID: enableNextID
            });
        case types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyNextID, {
                personaIdentifier: persona_?.identifier,
                personaName: persona_?.nickname,
                username: username,
                network: ui.networkIdentifier,
                avatar: lastRecognized.avatar,
                onUsernameChange: setUsername,
                onVerify: onVerify,
                onDone: onVerifyDone,
                onClose: onClose,
                disableVerify: disableVerify
            });
        case types/* SetupGuideStep.PinExtension */.s.PinExtension:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PinExtension, {
                onDone: onDone
            });
        default:
            return null;
    }
}
// #endregion
// #region setup guide
const useSetupGuideStyles = (0,entry/* makeStyles */.ZL)()({
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuideUI, {
            ...props
        })
    });
} // #endregion

;// CONCATENATED MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx



function UI({ unmount , persona  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SetupGuide, {
        persona: persona,
        onClose: unmount
    });
}
function createTaskStartSetupGuideDefault() {
    let shadowRoot;
    return (signal, for_)=>{
        shadowRoot ??= document.body.appendChild(document.createElement('div')).attachShadow({
            mode: 'closed'
        });
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(shadowRoot, {
            signal,
            key: 'setup-guide'
        });
        root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {
            persona: for_,
            unmount: ()=>root.destroy()
        }));
    };
}


/***/ }),

/***/ 66909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95175);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78778);


function InitAutonomousStateProfiles(signal, ref1, network1) {
    query(network1, ref1);
    signal.addEventListener('abort', _utils_messages__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.ownPersonaChanged.on */ .q.events.ownPersonaChanged.on(()=>query(network1, ref1)
    ));
    async function query(network, ref) {
        const val = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Identity.queryOwnedProfilesInformation */ .ZP.Identity.queryOwnedProfilesInformation(network);
        if (signal.aborted) return;
        ref.value = val;
    }
}


/***/ }),

/***/ 70802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(58248);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts
function resolveFacebookLink(link) {
    return link.replace(/\?fbclid=[\S\s]*#/, '#');
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js + 1 modules
var difference = __webpack_require__(44729);
;// CONCATENATED MODULE: ./src/social-network/utils/create-post-context.ts






function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        const cancel = [];
        opt.signal?.addEventListener('abort', ()=>cancel.forEach((fn)=>fn?.()
            )
        );
        // #region Mentioned links
        const linksSubscribe = (()=>{
            const isFacebook = ui.activatedSocialNetworkUI.networkIdentifier === src/* EnhanceableSite.Facebook */.Jk.Facebook;
            const links = new umd.ValueRef(src/* EMPTY_LIST */.rP);
            function evaluate() {
                const text = (0,src/* parseURL */.Lk)((0,base/* extractTextFromTypedMessage */.Vc)(opt.rawMessage.getCurrentValue()).unwrapOr('')).concat(opt.postMentionedLinksProvider?.getCurrentValue() || src/* EMPTY_LIST */.rP).map(isFacebook ? resolveFacebookLink : (x)=>x
                );
                if ((0,difference/* default */.Z)(text, links.value).length === 0) return;
                if (!text.length) links.value = src/* EMPTY_LIST */.rP;
                else links.value = text;
            }
            cancel.push(opt.rawMessage.subscribe(evaluate));
            cancel.push(opt.postMentionedLinksProvider?.subscribe(evaluate));
            return (0,src/* createSubscriptionFromValueRef */._H)(links);
        })();
        // #endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            author: opt.author,
            snsID: opt.snsID
        };
        const postIdentifier = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>{
                const by = opt.author.getCurrentValue();
                const id = opt.snsID.getCurrentValue();
                if (!id || !by) return null;
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
        const postIVIdentifier = new umd.ValueRef(null);
        const isPublicShared = new umd.ValueRef(undefined);
        const isAuthorOfPost = new umd.ValueRef(undefined);
        const version = new umd.ValueRef(undefined);
        return {
            author: author.author,
            avatarURL: author.avatarURL,
            nickname: author.nickname,
            snsID: author.snsID,
            get rootNode () {
                return opt.rootElement.realCurrent;
            },
            rootElement: opt.rootElement,
            actionsElement: opt.actionsElement,
            suggestedInjectionPoint: opt.suggestedInjectionPoint,
            comment: opt.comments,
            encryptComment: new umd.ValueRef(null),
            decryptComment: new umd.ValueRef(null),
            identifier: postIdentifier,
            url: (0,src/* mapSubscription */.S3)(postIdentifier, (id)=>{
                if (id) return create.getURLFromPostIdentifier?.(id) || null;
                return null;
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>src/* EMPTY_LIST */.rP
                ,
                subscribe: ()=>()=>{}
            }),
            rawMessage: opt.rawMessage,
            hasMaskPayload: (()=>{
                const hasMaskPayload = new umd.ValueRef(false);
                function evaluate() {
                    const msg = (0,base/* extractTextFromTypedMessage */.Vc)(opt.rawMessage.getCurrentValue()).unwrapOr('') + '\n' + [
                        ...linksSubscribe.getCurrentValue()
                    ].join('\n');
                    hasMaskPayload.value = create.hasPayloadLike(msg);
                }
                evaluate();
                cancel.push(linksSubscribe.subscribe(evaluate));
                cancel.push(opt.rawMessage.subscribe(evaluate));
                return (0,src/* createSubscriptionFromValueRef */._H)(hasMaskPayload);
            })(),
            postIVIdentifier: (0,src/* createSubscriptionFromValueRef */._H)(postIVIdentifier),
            publicShared: (0,src/* createSubscriptionFromValueRef */._H)(isPublicShared),
            isAuthorOfPost: (0,src/* createSubscriptionFromValueRef */._H)(isAuthorOfPost),
            version: (0,src/* createSubscriptionFromValueRef */._H)(version),
            decryptedReport (opts) {
                const currentAuthor = author.author.getCurrentValue();
                if (opts.iv && currentAuthor) postIVIdentifier.value = new src/* PostIVIdentifier */.bb(currentAuthor.network, opts.iv);
                if (opts.sharedPublic?.some) isPublicShared.value = opts.sharedPublic.val;
                if (opts.isAuthorOfPost) isAuthorOfPost.value = opts.isAuthorOfPost.val;
                if (opts.version) version.value = opts.version;
            }
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new umd.ValueRef(null);
    const nickname = new umd.ValueRef(null);
    const postBy = new umd.ValueRef(null);
    const postID = new umd.ValueRef(null);
    const postMessage = new umd.ValueRef((0,base/* makeTypedMessageTupleFromList */.n_)());
    const postMetadataImages = new src/* ObservableSet */.n7();
    const postMetadataMentionedLinks = new src/* ObservableMap */.vP();
    const subscriptions = {
        avatarURL: (0,src/* mapSubscription */.S3)((0,src/* createSubscriptionFromValueRef */._H)(avatarURL), (x)=>{
            if (!x) return null;
            try {
                return new URL(x);
            } catch  {}
            return null;
        }),
        nickname: (0,src/* createSubscriptionFromValueRef */._H)(nickname),
        author: (0,src/* createSubscriptionFromValueRef */._H)(postBy),
        snsID: (0,src/* createSubscriptionFromValueRef */._H)(postID),
        rawMessage: (0,src/* createSubscriptionFromValueRef */._H)(postMessage),
        postImagesProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataImages.size ? [
                    ...postMetadataImages
                ] : src/* EMPTY_LIST */.rP
            ,
            subscribe: (sub)=>postMetadataImages.event.on(src/* ALL_EVENTS */.Ko, sub)
        }),
        postMentionedLinksProvider: (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>postMetadataMentionedLinks.size ? [
                    ...postMetadataMentionedLinks.values()
                ] : src/* EMPTY_LIST */.rP
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

/***/ 5850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c2f272344e8d26b14517.png";

/***/ })

}]);