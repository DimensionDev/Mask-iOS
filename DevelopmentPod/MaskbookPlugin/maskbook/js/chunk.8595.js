"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8595],{

/***/ 83548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W2": () => (/* binding */ Container),
/* harmony export */   "fR": () => (/* binding */ useTagEnhancer),
/* harmony export */   "rU": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37253);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93775);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98541);




const Container = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Container(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        href: props.href,
        children: text
    });
});
function useTagEnhancer(kind, content) {
    const plugin = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPluginsSNSAdaptor */ .Pz)(false).filter((x)=>x.enhanceTag
    ).at(0);
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        plugin?.enhanceTag?.onClick?.(kind, content, event);
    }, [
        plugin
    ]);
    const onMouseEnter = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{
        const cancel = plugin?.enhanceTag?.onHover?.(kind, content, event);
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

/***/ 55517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ TypedMessageRenderContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(28187);
;// CONCATENATED MODULE: ./shared-ui/TypedMessageRender/registry.ts

const TypedMessageRenderRegistry = (0,dom/* createTypedMessageRenderRegistry */.dR)();

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/Components/Text.tsx
var Text = __webpack_require__(83548);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/transformer.ts
var transformer = __webpack_require__(92713);
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

/***/ 92713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hk": () => (/* binding */ enableFbStyleTextPayloadReplace),
/* harmony export */   "rx": () => (/* binding */ TypedMessageTransformers)
/* harmony export */ });
/* unused harmony exports Order, TypedMessagePluginTransformers */
/* harmony import */ var _masknet_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81148);
/* harmony import */ var _masknet_typed_message_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28187);


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

/***/ 69958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ usePostClaimedAuthor),
/* harmony export */   "V": () => (/* binding */ usePostLink)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3747);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98541);


function usePostLink() {
    const id = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.snsID */ .H9.snsID();
    const identifier = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.identifier */ .H9.identifier();
    if (!id || !identifier) return '';
    return _social_network__WEBPACK_IMPORTED_MODULE_0__/* .activatedSocialNetworkUI.utils.getPostURL */ .LM.utils.getPostURL?.(identifier) ?? '';
}
function usePostClaimedAuthor() {
    const payload = _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.containingMaskPayload */ .H9.containingMaskPayload().unwrapOr(undefined);
    if (!payload) return undefined;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 8142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6955);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28807);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10888);



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

/***/ 22283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(90869);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(17282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(60456);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(20036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-draggable@4.4.4_react-dom@18.0.0+react@18.0.0/node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(52002);
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
            // @ts-expect-error @types/react 18
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ...props,
                ref: ref,
                className: classes.paper
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/CloudDownload.js
var CloudDownload = __webpack_require__(29699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
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
var renderInShadowRoot = __webpack_require__(55423);
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
            mode: shared/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
        });
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(dom, {
            signal,
            key: 'page-inspector'
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspectorDefault, {}));
    };
}


/***/ }),

/***/ 72097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(28187);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 1 modules
var context = __webpack_require__(55517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(69315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/colors/green.js
var green = __webpack_require__(67020);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(10888);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(2666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(46995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(85974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(92452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(51179);
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
                secondary: props.item.linkedPersona?.fingerprint.toLowerCase()
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_react-dom@18.0.0+react@18.0.0/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(39080);
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
        if (frozenSelected.find((y)=>x.identifier.equals(y.identifier)
        )) return false;
        if (search === '') return true;
        return !!x.identifier.userId.toLowerCase().match(search.toLowerCase()) || !!x.linkedPersona?.fingerprint.toLowerCase().match(search.toLowerCase()) || !!(x.nickname || '').toLowerCase().match(search.toLowerCase());
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
SelectProfileUI.defaultProps = {
    frozenSelected: []
};
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
    const classes = (0,entry/* useStylesExtends */.Bc)(SelectPeopleDialog_useStyles(), props);
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
function useShareMenu(people, onSelect, alreadySelectedPreviously, SelectPeopleDialogProps) {
    const [visible, setVisible] = (0,react.useState)(false);
    const showShare = (0,react.useCallback)(()=>setVisible(true)
    , []);
    const hideShare = (0,react.useCallback)(()=>setVisible(false)
    , []);
    return {
        showShare,
        ShareMenu: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileDialog, {
            alreadySelectedPreviously: alreadySelectedPreviously,
            profiles: people,
            open: visible,
            onClose: hideShare,
            onSelect: onSelect,
            ...SelectPeopleDialogProps
        })
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(47481);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx



function wrapAuthorDifferentMessage(author, postBy, jsx) {
    if (!author?.userId) return jsx;
    if (author?.isUnknown || postBy?.isUnknown) return jsx;
    if (shared_base_src/* Identifier.equals */.xb.equals(author, postBy)) return jsx;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            locales_legacy/* i18n.t */.a.t('decrypted_postbox_author_mismatch', {
                name: author?.userId
            }),
            jsx
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Switch/Switch.js
var Switch = __webpack_require__(97641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(66958);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(57309);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.6.1_de97b6be3b01c831652fad9cf8222fb8/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(77521);
;// CONCATENATED MODULE: ./src/plugins/MaskPluginWrapper.tsx











const MaskPluginWrapper_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
            color: entry/* MaskColorVar.twitterButtonText */.ZN.twitterButtonText,
            '&,&:hover': {
                background: entry/* MaskColorVar.twitterButton */.ZN.twitterButton
            }
        }
    };
});
function MaskPostExtraInfoWrapper(props) {
    const { classes  } = MaskPluginWrapper_useStyles();
    const { open , title , children , action , publisher , publisherLink  } = props;
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const name = !personaConnectStatus.hasPersona ? t('please_create_persona') : !personaConnectStatus.connected ? t('please_connect_persona') : title;
    const actionButton = (0,react.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t('connect_persona') : t('create_persona');
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "contained",
            className: classes.button,
            onClick: personaConnectStatus.action,
            children: button
        });
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
            color: entry/* MaskColorVar.textPrimary */.ZN.textPrimary,
            children: publisher
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary,
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
            message: "Mask is loading this content..."
        }),
        children: inner
    });
};
const MaskPostExtraPluginWrapper = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { ID , name , publisher  } = props.definition;
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
    const { t  } = (0,utils/* useI18N */.M1)();
    const t2 = (0,entry_content_script/* usePluginI18NField */.eS)();
    const { plugins  } = props;
    if (!plugins.length) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
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

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx









const useSuccessStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
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
    const classes = (0,entry/* useStylesExtends */.Bc)(useSuccessStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    const shareMenu = useShareMenu(profiles, props.requestAppendRecipients || (async ()=>{}), props.alreadySelectedPreviously);
    const rightActions = props.requestAppendRecipients && props.sharedPublic === false && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        color: "primary",
        onClick: shareMenu.showShare,
        className: classes.addRecipientsLink,
        children: t('decrypted_postbox_add_recipients')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
    });
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

// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(69958);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../encryption/src/index.ts
var encryption_src = __webpack_require__(52222);
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
    const { whoAmI , profiles , alreadySelectedPreviously , onDecrypted  } = props;
    const deconstructedPayload = entry_content_script/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const authorInPayload = (0,usePostInfo/* usePostClaimedAuthor */.N)();
    const current = (0,entry_content_script/* usePostInfo */.oQ)();
    const currentPostBy = entry_content_script/* usePostInfoDetails.author */.H9.author();
    const postBy = authorInPayload || currentPostBy;
    const postMetadataImages = entry_content_script/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const mentionedLinks = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
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
    const sharedPublic = entry_content_script/* usePostInfoDetails.publicShared */.H9.publicShared();
    (0,react.useEffect)(()=>{
        const signal = new AbortController();
        const postURL = current.url.getCurrentValue()?.toString();
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
        if (deconstructedPayload.ok) {
            makeProgress(postURL, postBy, whoAmI, {
                type: 'text',
                text: (0,base/* extractTextFromTypedMessage */.Vc)(current.rawMessage.getCurrentValue()).unwrapOr('') + ' ' + mentionedLinks.join(' ')
            }, (message, iv)=>{
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
            }, current.decryptedReport, report('text'), signal.signal);
        }
        postMetadataImages.forEach((url)=>{
            if (signal.signal.aborted) return;
            makeProgress(postURL, postBy, whoAmI, {
                type: 'image-url',
                image: url
            }, (message, iv)=>{
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
            }, current.decryptedReport, report(url), signal.signal);
        });
        return ()=>signal.abort()
        ;
    }, [
        deconstructedPayload.ok,
        postBy.toText(),
        postMetadataImages.join(),
        whoAmI.toText(),
        mentionedLinks.join()
    ]);
    // pass 3:
    // invoke callback
    const firstSucceedDecrypted = progress1.find((p)=>p.progress.type === 'success'
    );
    (0,react.useEffect)(()=>{
        if (firstSucceedDecrypted?.progress.type !== 'success') return;
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
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Success, {
                    data: progress,
                    alreadySelectedPreviously: alreadySelectedPreviously,
                    requestAppendRecipients: requestAppendRecipientsWrapped,
                    profiles: profiles,
                    sharedPublic: sharedPublic,
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.successComponentProps
                });
            case 'error':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Failed, {
                    error: new Error(progress.error),
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.failedComponentProps
                });
            case 'progress':
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Awaiting, {
                    type: progress,
                    author: authorInPayload,
                    postedBy: currentPostBy,
                    ...props.waitingComponentProps
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
            if (progress.ownersKeyEncrypted) reporter({
                ownersAESKeyEncrypted: (0,esm/* encodeArrayBuffer */.ll)(progress.ownersKeyEncrypted)
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
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostInspector.tsx












const PluginHooksRenderer = (0,entry_content_script/* createInjectHooksRenderer */.EK)(entry_content_script/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostInspector
, MaskPostExtraPluginWrapper);
function PostInspector(props) {
    const postBy = entry_content_script/* usePostInfoDetails.author */.H9.author();
    const encryptedPost = entry_content_script/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const ownersKeyEncrypted = entry_content_script/* usePostInfoDetails.ownersKeyEncrypted */.H9.ownersKeyEncrypted();
    const version = entry_content_script/* usePostInfoDetails.version */.H9.version();
    const iv = entry_content_script/* usePostInfoDetails.iv */.H9.iv();
    const postImages = entry_content_script/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const isDebugging = (0,use_subscription.useSubscription)(shared/* PersistentStorages.Settings.storage.debugging.subscription */._H.Settings.storage.debugging.subscription);
    const whoAmI = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const friends = (0,useActivatedUI/* useFriendsList */.hg)();
    const [alreadySelectedPreviously, setAlreadySelectedPreviously] = (0,react.useState)([]);
    const { value: sharedListOfPost  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!whoAmI || !whoAmI.identifier.equals(postBy) || !iv) return [];
        return service/* default.Crypto.getPartialSharedListOfPost */.ZP.Crypto.getPartialSharedListOfPost(new shared_base_src/* PostIVIdentifier */.bb(whoAmI.identifier.network, iv));
    }, [
        postBy,
        whoAmI,
        iv
    ]);
    (0,react.useEffect)(()=>setAlreadySelectedPreviously(sharedListOfPost ?? [])
    , [
        sharedListOfPost
    ]);
    if (encryptedPost.ok || postImages.length) {
        if (!isDebugging) props.needZip();
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPost, {
            onDecrypted: props.onDecrypted,
            requestAppendRecipients: // version -40 does not support append receiver
            // version -37 is not implemented yet.
            ownersKeyEncrypted && iv && version && version === -38 ? async (profile)=>{
                setAlreadySelectedPreviously(alreadySelectedPreviously.concat(profile));
                return service/* default.Crypto.appendShareTarget */.ZP.Crypto.appendShareTarget(version, new shared_base_src/* PostIVIdentifier */.bb(whoAmI.identifier.network, iv), profile.map((x)=>x.identifier
                ), whoAmI.identifier, {
                    type: 'direct',
                    at: new Date()
                });
            } : undefined,
            alreadySelectedPreviously: alreadySelectedPreviously,
            profiles: friends,
            whoAmI: whoAmI ? whoAmI.identifier : shared_base_src/* ProfileIdentifier.unknown */.WO.unknown
        }));
    }
    return withAdditionalContent(null);
    function withAdditionalContent(x) {
        const slot = encryptedPost.ok ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {});
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
        const { onDecrypted , zipPost  } = props;
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostInspector(classes);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            onDecrypted: onDecrypted,
            needZip: zipPost,
            ...additionalProps
        });
    });
    const { zipPost: zipPost1 , injectionPoint  } = config;
    const zipPostF = zipPost1 || noop/* default */.Z;
    return function injectPostInspector(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PostInfoProvider */.eT, {
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
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(injectionPoint?.(current) ?? current.rootElement.afterShadow, {
            key: 'post-inspector',
            signal
        });
        root.render(jsx);
        return root.destroy;
    };
}


/***/ }),

/***/ 7641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ injectPostReplacer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 15 modules
var dom = __webpack_require__(28187);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ./shared-ui/TypedMessageRender/context.tsx + 1 modules
var context = __webpack_require__(55517);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(10888);
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
            authorHint: author,
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

/***/ 85153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createTaskStartSetupGuideDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(80917);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(90869);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide/types.ts
var types = __webpack_require__(19369);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
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
var MaskIcon = __webpack_require__(66559);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(15679);
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
var ActionButton = __webpack_require__(83463);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(82651);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Extension.js
var Extension = __webpack_require__(48913);
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
        onClose: onDone
    });
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(92820);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SetupGuide.tsx


















function SetupGuideUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props;
    const ui = social_network/* activatedSocialNetworkUI */.LM;
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
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
    const getUsername = ()=>lastState.username || (lastRecognized.identifier.isUnknown ? '' : lastRecognized.identifier.userId)
    ;
    const [username, setUsername] = (0,react.useState)(getUsername);
    const disableVerify = lastRecognized.identifier.isUnknown || !lastState.username ? false : lastRecognized.identifier.userId !== lastState.username;
    (0,react.useEffect)(()=>{
        const handler = (val)=>{
            if (username === '' && !val.identifier.isUnknown) setUsername(val.identifier.userId);
        };
        ui.collecting.identityProvider?.recognized.addListener(handler);
        return ()=>{
            ui.collecting.identityProvider?.recognized.removeListener(handler);
        };
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
        if (!persona_?.hasPrivateKey) throw new Error('invalid persona');
        await service/* default.Identity.setupPersona */.ZP.Identity.setupPersona(persona_?.identifier);
    };
    const onVerify = async ()=>{
        if (!persona_?.publicHexKey) return;
        const collectVerificationPost = ui.configuration.nextIDConfig?.collectVerificationPost;
        const platform = ui.configuration.nextIDConfig?.platform;
        if (!platform) return;
        const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.publicHexKey, platform, username);
        if (!isBound) {
            const payload = await web3_providers_src/* NextIDProof.createPersonaPayload */.q7.createPersonaPayload(persona_.publicHexKey, shared_base_src/* NextIDAction.Create */.BU.Create, username, platform, settings/* languageSettings.value */.pQ.value ?? 'default');
            if (!payload) throw new Error('Failed to create persona payload.');
            const signResult = await service/* default.Identity.signWithPersona */.ZP.Identity.signWithPersona({
                method: 'eth',
                message: payload.signPayload,
                identifier: persona_.identifier.toText()
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
                    if (post && persona_.publicHexKey) {
                        clearInterval(verifyPostCollectTimer.current);
                        await web3_providers_src/* NextIDProof.bindProof */.q7.bindProof(payload.uuid, persona_.publicHexKey, shared_base_src/* NextIDAction.Create */.BU.Create, platform, username, payload.createdAt, {
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
            const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.publicHexKey, platform, username);
            if (!isBound) throw new Error('Failed to verify.');
            utils/* MaskMessages.events.ownProofChanged.sendToAll */.ql.events.ownProofChanged.sendToAll(undefined);
        }
    };
    const onClose = ()=>{
        settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = '';
        setStep(types/* SetupGuideStep.Close */.s.Close);
    };
    const onConnected = async ()=>{
        if (enableNextID && persona_?.publicHexKey && platform1 && username) {
            const isBound = await web3_providers_src/* NextIDProof.queryIsBound */.q7.queryIsBound(persona_.publicHexKey, platform1, username);
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
        if (network === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter && settings/* userGuideStatus */.Ct[network].value !== 'completed') {
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
            target: 'Everyone'
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

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
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
            mode: shared/* Flags.using_ShadowDOM_attach_mode */.vU.using_ShadowDOM_attach_mode
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

/***/ 58903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InitAutonomousStateFriends)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60232);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32196);




function hasFingerprint(x) {
    return !!x.linkedPersona?.fingerprint;
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

/***/ 61199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32196);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);


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

/***/ 94627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ createRefsForCreatePostContext),
  "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(10888);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === src/* EnhanceableSite.Facebook */.Jk.Facebook ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
}

;// CONCATENATED MODULE: ./src/social-network/utils/create-post-context.ts






function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        const cancel = [];
        opt.signal?.addEventListener('abort', ()=>cancel.forEach((fn)=>fn?.()
            )
        );
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
            links.clear();
            (0,src/* parseURL */.Lk)(post).forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
            opt.postMentionedLinksProvider?.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
        }));
        cancel.push(opt.postMentionedLinksProvider?.subscribe(()=>{
            // Not clean old links cause post content not changed
            opt.postMentionedLinksProvider?.getCurrentValue().forEach((link)=>links.add(resolveFacebookLink(link, ui.activatedSocialNetworkUI.networkIdentifier))
            );
        }));
        const linksSubscribe = (0,src/* SubscriptionDebug */.Y_)({
            getCurrentValue: ()=>links.size ? [
                    ...links
                ] : src/* EMPTY_LIST */.rP
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
        const iv = new umd.ValueRef(null);
        const isPublicShared = new umd.ValueRef(undefined);
        const ownersAESKeyEncrypted = new umd.ValueRef(undefined);
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
            identifier: postIdentifier,
            url: (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>{
                    const id = postIdentifier.getCurrentValue();
                    if (id) return create.getURLFromPostIdentifier?.(id) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            mentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,src/* SubscriptionDebug */.Y_)({
                getCurrentValue: ()=>src/* EMPTY_LIST */.rP
                ,
                subscribe: ()=>()=>{}
            }),
            rawMessage: opt.rawMessage,
            rawMessagePiped: transformedPostContent,
            postContent: (0,src/* SubscriptionFromValueRef */.Jf)(postContent),
            containingMaskPayload: (0,src/* SubscriptionFromValueRef */.Jf)(postPayload),
            iv,
            publicShared: (0,src/* SubscriptionFromValueRef */.Jf)(isPublicShared),
            ownersKeyEncrypted: (0,src/* SubscriptionFromValueRef */.Jf)(ownersAESKeyEncrypted),
            version: (0,src/* SubscriptionFromValueRef */.Jf)(version),
            decryptedReport (opts) {
                if (opts.iv) iv.value = opts.iv;
                if (opts.sharedPublic?.some) isPublicShared.value = opts.sharedPublic.val;
                if (opts.ownersAESKeyEncrypted) ownersAESKeyEncrypted.value = opts.ownersAESKeyEncrypted;
                if (opts.version) version.value = opts.version;
            }
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

/***/ 28187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oP": () => (/* reexport */ DefaultRenderFragments),
  "gE": () => (/* reexport */ RegistryContext),
  "l3": () => (/* reexport */ RenderFragmentsContext),
  "QJ": () => (/* reexport */ TUPLE_RENDER_STYLE),
  "FG": () => (/* reexport */ TextResizeContext),
  "T6": () => (/* reexport */ TransformationContextProvider),
  "lG": () => (/* reexport */ TransformerProvider),
  "Ot": () => (/* reexport */ TypedMessageRender),
  "dR": () => (/* reexport */ createTypedMessageRenderRegistry),
  "CB": () => (/* reexport */ useTransformedValue)
});

// UNUSED EXPORTS: TypedMessageRenderInline, useMetadataRender

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        ref: textResize,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                ...props
            })
        })
    });
}
function TypedMessageRenderInline(props) {
    const { message  } = props;
    const Registry = (0,react.useContext)(RegistryContext);
    if (message.type === 'empty') return null;
    const Render = Registry(message.type)?.component || TypedMessageUnknownRenderer;
    if (false) {}
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
        ...message
    });
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/MetadataRender.tsx



function useMetadataRender(message) {
    const { Metadata  } = (0,react.useContext)(RenderFragmentsContext);
    if (!Metadata || !message.meta) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Metadata, {
        metadata: message.meta,
        message: message
    });
}

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





// TODO: remove this after we switch to inline rendering of Mask payload.
const TUPLE_RENDER_STYLE = 'TUPLE_RENDER_STYLE';
const TypedMessageTupleRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTupleRenderer(props) {
    const meta = useMetadataRender(props);
    if ((0,react.useMemo)(()=>hasCircular(props.items)
    , [
        props.items
    ])) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        style: Object(props.meta?.get(TUPLE_RENDER_STYLE)),
        children: [
            props.items.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
                    ...props,
                    message: message
                }, index)
            ),
            meta
        ]
    });
});

// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(81790);
;// CONCATENATED MODULE: ../typed-message/dom/Renderer/utils/renderText.tsx




/** @internal */ const RenderTextFragment = /*#__PURE__*/ (0,react.memo)(function RenderText(props) {
    const { Text =DefaultRenderFragments.Text  } = (0,react.useContext)(RenderFragmentsContext);
    return /*#__PURE__*/ (0,react.createElement)(react.Fragment, {}, ...parseText(props.text, Text));
});
/** @internal */ const RenderLinkFragment = /*#__PURE__*/ (0,react.memo)(function RenderLink(props) {
    const { children , href , category  } = props;
    const context = (0,react.useContext)(RenderFragmentsContext);
    const { Text =DefaultRenderFragments.Text , Link =DefaultRenderFragments.Link , AtLink =Text , CashLink =Text , HashLink =Text ,  } = context;
    if (category === 'cash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(CashLink, {
        children: children
    });
    if (category === 'hash') return /*#__PURE__*/ (0,jsx_runtime.jsx)(HashLink, {
        children: children
    });
    if (category === 'user') return /*#__PURE__*/ (0,jsx_runtime.jsx)(AtLink, {
        children: children
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link, {
        children: children,
        href: href
    });
});
function parseText(string, Text) {
    const links = (0,parseLink/* parseLink */.V)(string).flatMap((x1)=>{
        if (x1.type === 'text') {
            return sliceString(x1.content).map((x)=>x === '\n' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Text, {
                    children: x
                })
            );
        }
        if (x1.category === 'normal' && !x1.content.match(/^https?:\/\//gi)) x1.content = 'http://' + x1.content;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
            category: x1.category,
            href: x1.content,
            children: x1.content
        });
    });
    return links;
}
function sliceString(x) {
    const result = [];
    let pos = 0;
    let index = x.indexOf('\n');
    if (index === -1) return [
        x
    ];
    while(index !== -1){
        result.push(x.slice(pos, index), '\n');
        pos = index + 1;
        index = x.indexOf('\n', pos);
    }
    result.push(x.slice(pos));
    return result.filter(Boolean);
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Core/Text.tsx




const TypedMessageTextRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageTextRenderer(props) {
    const { content  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderTextFragment, {
                text: content
            }),
            useMetadataRender(props)
        ]
    });
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Image, {
                src: finalSrc,
                width: width,
                height: height
            }),
            meta
        ]
    });
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
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
    if (transformedValue) return /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
        message: transformedValue
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: alt ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderInline, {
            message: alt
        }) : null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Await, {
            promise: promise
        })
    });
});
function Await(props) {
    throw props.promise;
}

;// CONCATENATED MODULE: ../typed-message/dom/Renderer/Extension/Anchor.tsx



const TypedMessageAnchorRenderer = /*#__PURE__*/ (0,react.memo)(function TypedMessageAnchorRenderer(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderLinkFragment, {
        category: props.category,
        children: props.content,
        href: props.href
    });
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
        return Array.from(registry.get(type)?.values() || []).sort((a, b)=>b.priority - a.priority
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

/***/ 5850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c2f272344e8d26b14517.png";

/***/ })

}]);