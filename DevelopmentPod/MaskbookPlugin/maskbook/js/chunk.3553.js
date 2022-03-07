"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3553],{

/***/ 2045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ iOSWebkitChannel)
/* harmony export */ });
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}


/***/ }),

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2045);



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8211).then(__webpack_require__.bind(__webpack_require__, 8211)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 71244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ Composition)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(35437);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(9744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(3073);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.71_6860626c1dd203d2615586c177a8991f/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(17279);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/plugins/ImagePayload.tsx


const ImagePayloadIcon = (0,icons_utils/* createIcon */.I)('ImagePayloadIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3 4.313a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8Z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.758 10.266H5.32c.512-1.107 1.651-3.182 1.92-3.182.26 0 1.26 1.926 1.54 2.46 0 0 .513-1.581.782-1.581.274 0 1.187 2.295 1.196 2.303ZM9.16 6.38c0-.358.294-.647.656-.647.363 0 .657.29.657.647a.65.65 0 0 1-.657.647.65.65 0 0 1-.656-.647Z",
            fill: "#fff"
        })
    ]
}), '0 0 16 16');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(7538);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(29286);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(75042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(26108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/components/shared/SelectRecipients/ClickableChip.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme, { checked  })=>({
        root: {
            marginRight: 6,
            marginBottom: 6,
            cursor: 'pointer',
            ...checked ? {
                color: theme.palette.text.buttonText,
                backgroundColor: theme.palette.text.primary
            } : {},
            '&:hover': {
                color: theme.palette.text.primary,
                '& > svg': {
                    color: `${theme.palette.text.primary} !important`
                }
            }
        },
        icon: {
            backgroundColor: 'transparent !important',
            ...checked ? {
                color: `${theme.palette.text.buttonText} !important`
            } : {}
        },
        label: {
            display: 'flex'
        }
    })
);
function ClickableChip(props) {
    var ref, ref1;
    const { classes  } = useStyles({
        checked: Boolean(props.checked)
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        deleteIcon: props.checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
            className: classes.icon
        }) : undefined,
        onDelete: props.checked ? noop/* default */.Z : undefined,
        color: props.checked ? 'primary' : 'default',
        ...props,
        classes: {
            ...props.classes,
            root: classnames_default()(classes.root, (ref = props.classes) === null || ref === void 0 ? void 0 : ref.root),
            label: classnames_default()(classes.label, (ref1 = props.classes) === null || ref1 === void 0 ? void 0 : ref1.label)
        }
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.5_07b14a436152a0046ed0bd90fadfd5f7/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(76529);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/PluginEntryRender.tsx











const PluginEntryRender_useStyles = (0,src/* makeStyles */.ZL)()({
    sup: {
        paddingLeft: 2
    }
});
const PluginEntryRender = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [trackPluginRef] = useSetPluginEntryRenderRef(ref);
    const pluginField = (0,plugin_infra_src/* usePluginI18NField */.eS)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const pluginID = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const operatingSupportedChainMapping = (0,plugin_infra_src/* useActivatedPluginSNSAdaptor_Web3Supported */.Ar)(chainId, pluginID);
    const result = [
        ...(0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any')
    ].sort((plugin)=>{
        // TODO: support priority order
        if (plugin.ID === constants/* RedPacketPluginID */.jY || plugin.ID === ITO_constants/* ITO_PluginID */.yV) return -1;
        return 1;
    }).map((plugin)=>esm/* Result.wrap */.x4.wrap(()=>{
            const entry = plugin.CompositionDialogEntry;
            const unstable = plugin.enableRequirement.target !== 'stable';
            const ID = plugin.ID;
            if (!entry || !operatingSupportedChainMapping[ID]) return null;
            const extra = {
                unstable,
                id: ID,
                readonly: props.readonly
            };
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ErrorBoundary */.SV, {
                subject: `Plugin "${pluginField(ID, plugin.name)}"`,
                children: 'onClick' in entry ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CustomEntry, {
                    ...entry,
                    ...extra,
                    ref: trackPluginRef(ID)
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogEntry, {
                    ...entry,
                    ...extra,
                    ref: trackPluginRef(ID)
                })
            }, plugin.ID));
        }).unwrapOr(null)
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: result
    }));
}));
function useSetPluginEntryRenderRef(ref1) {
    const pluginRefs = (0,react.useRef)({});
    (0,react.useImperativeHandle)(ref1, ()=>({
            openPlugin: function openPlugin(id, tryTimes = 4) {
                const ref = pluginRefs.current[id];
                if (ref) return ref.open();
                // If the plugin has not been loaded yet, we wait for at most 2000ms
                if (tryTimes === 0) return;
                setTimeout(()=>openPlugin(id, tryTimes - 1)
                , 500);
            }
        })
    , []);
    const trackPluginRef = (pluginID)=>(ref)=>{
            pluginRefs.current = {
                ...pluginRefs.current,
                [pluginID]: ref
            };
        }
    ;
    return [
        trackPluginRef
    ];
}
function useSetPluginRef(ref, onClick) {
    (0,react.useImperativeHandle)(ref, ()=>({
            open: onClick
        })
    , [
        onClick
    ]);
}
const CustomEntry = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes  } = PluginEntryRender_useStyles();
    const { id , label , onClick , unstable  } = props;
    useSetPluginRef(ref, onClick);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(plugin_infra_src/* PluginI18NFieldRender */.KP, {
                    field: label,
                    pluginID: id
                }),
                unstable && /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "beta_sup",
                    components: {
                        sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                            className: classes.sup
                        })
                    }
                })
            ]
        }),
        onClick: onClick,
        disabled: props.readonly
    }));
}));
const DialogEntry = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { classes  } = PluginEntryRender_useStyles();
    const { dialog: Dialog , id , label , unstable , keepMounted  } = props;
    const [open, setOpen] = (0,react.useState)(false);
    const opener = (0,react.useCallback)(()=>setOpen(true)
    , []);
    const close = (0,react.useCallback)(()=>setOpen(false)
    , []);
    useSetPluginRef(ref, opener);
    const chip = /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(plugin_infra_src/* PluginI18NFieldRender */.KP, {
                    field: label,
                    pluginID: id
                }),
                unstable && /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "beta_sup",
                    components: {
                        sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                            className: classes.sup
                        })
                    }
                })
            ]
        }),
        disabled: props.readonly,
        onClick: opener
    });
    if (keepMounted || open) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            chip,
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                style: {
                    display: 'none'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog, {
                    open: open,
                    onClose: close
                })
            })
        ]
    }));
    return chip;
}));

// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(41567);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(13863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/BadgeRenderer.tsx





const BadgeRenderer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        chip: {
            maxWidth: 500
        }
    })
);
function BadgeRenderer({ meta , onDeleteMeta , readonly  }) {
    const plugins = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    const i18n = (0,plugin_infra_src/* usePluginI18NField */.eS)();
    const { t  } = (0,utils/* useI18N */.M1)();
    if (!meta) return null;
    const result = [
        ...meta.entries()
    ].flatMap(([metaKey, metaValue])=>{
        return plugins.map((plugin)=>{
            const render = plugin.CompositionDialogMetadataBadgeRender;
            if (!render) return null;
            try {
                if (typeof render === 'function') {
                    return normalizeBadgeDescriptor(render(metaKey, metaValue));
                } else {
                    const f = render.get(metaKey);
                    if (!f) return null;
                    return normalizeBadgeDescriptor(f(metaValue));
                }
            } catch (error) {
                console.error(error);
                return null;
            }
            function normalizeBadgeDescriptor(desc) {
                if (!desc) return null;
                if (typeof desc === 'string') desc = {
                    text: desc,
                    tooltip: `${t('badge_renderer_provided_by_plugin')} "${i18n(plugin.ID, plugin.name)}"`
                };
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MetaBadge, {
                    readonly: readonly,
                    title: desc.tooltip || '',
                    onDelete: ()=>onDeleteMeta(metaKey)
                    ,
                    children: desc.text
                }, metaKey + ';' + plugin.ID));
            }
        });
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: result
    }));
}
function MetaBadge({ title , children , onDelete , readonly  }) {
    const { classes  } = BadgeRenderer_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            marginRight: 1,
            marginTop: 1,
            display: 'inline-block'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ShadowRootTooltip */.p_, {
            title: title,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    disabled: readonly,
                    onDelete: onDelete,
                    label: children,
                    className: classes.chip
                })
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/TypedMessageEditor.tsx







const TypedMessageEditor_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        minHeight: 108,
        flexDirection: 'column',
        padding: 10,
        boxSizing: 'border-box'
    },
    input: {
        fontSize: 18,
        minHeight: '8em'
    }
});
const emptyMessage = (0,base/* makeTypedMessageText */.P)('');
// This is an **uncontrolled** component. (performance consideration, because it will be re-rendered very frequently).
const TypedMessageEditor = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { onChange , readonly  } = props;
    const { classes  } = TypedMessageEditor_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    var _defaultValue;
    const [value1, setValue] = (0,react.useState)((_defaultValue = props.defaultValue) !== null && _defaultValue !== void 0 ? _defaultValue : emptyMessage);
    const currentValue = (0,react.useRef)(value1);
    currentValue.current = value1;
    const setMessage = (0,react.useCallback)((value)=>{
        if ((0,base/* isTypedMessageEqual */.Hz)(currentValue.current, value)) return;
        setValue(value);
        currentValue.current = value;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        onChange
    ]);
    const setAsText = (0,react.useCallback)((val)=>{
        const text = typeof val === 'string' ? val : val.target.value;
        const newValue = (0,base/* makeTypedMessageText */.P)(text, currentValue.current.meta);
        setMessage(newValue);
    }, [
        setMessage
    ]);
    const deleteMetaID = (0,react.useCallback)((meta)=>{
        setMessage((0,base/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.delete(meta)
        ));
    }, [
        setMessage
    ]);
    (0,react.useImperativeHandle)(ref, ()=>{
        return {
            get estimatedLength () {
                // TODO: we should count metadata into the estimated size
                if ((0,base/* isTypedMessageText */.Rz)(currentValue.current)) return currentValue.current.content.length;
                return 0;
            },
            get value () {
                return currentValue.current;
            },
            set value (val){
                setMessage(val);
            },
            reset: ()=>setMessage(emptyMessage)
            ,
            attachMetadata (meta, data) {
                setMessage((0,base/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.set(meta, data)
                ));
            },
            dropMetadata: deleteMetaID
        };
    }, [
        setMessage,
        deleteMetaID
    ]);
    if (!(0,base/* isTypedMessageText */.Rz)(value1)) {
        const reset = ()=>setAsText('')
        ;
        // We don't have an rich text editor yet.
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            severity: "error",
            action: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                onClick: reset,
                children: [
                    t('reset'),
                    " ",
                    t('editor')
                ]
            }),
            children: t('typed_message_text_alert')
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BadgeRenderer, {
                readonly: !!readonly,
                meta: value1.meta,
                onDeleteMeta: deleteMetaID
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                readOnly: readonly,
                classes: {
                    root: classes.root,
                    input: classes.input
                },
                autoFocus: props.autoFocus,
                value: value1.content,
                onChange: setAsText,
                fullWidth: true,
                multiline: true,
                placeholder: t('post_dialog__placeholder')
            })
        ]
    }));
}));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/CharLimitIndicator.tsx




const CharLimitIndicator_useStyles = (0,src/* makeStyles */.ZL)()((_theme, overflowed)=>({
        root: {
            position: 'relative',
            display: 'inline-flex',
            marginLeft: 8,
            marginRight: 8
        },
        circle: {
            transitionProperty: 'transform, width, height, color',
            color: overflowed ? 'red' : undefined
        },
        label: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }
    })
);
const CharLimitIndicator = /*#__PURE__*/ (0,react.memo)(({ value , max , ...props })=>{
    const displayLabel = max - value < 40;
    const normalized = Math.min(value / max * 100, 100);
    const { classes , cx  } = CharLimitIndicator_useStyles(value >= max);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                variant: "determinate",
                color: displayLabel ? 'secondary' : 'primary',
                size: displayLabel ? void 0 : 16,
                ...props,
                value: normalized,
                className: cx(props.className, classes.circle)
            }),
            displayLabel ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.label,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    component: "div",
                    color: "textSecondary",
                    children: max - value
                })
            }) : null
        ]
    }));
});

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(12076);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js + 1 modules
var difference = __webpack_require__(44729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(59216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(73268);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(10);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(10612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(49950);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(58364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-highlight-words@0.17.0_react@18.0.0-rc.0/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__(4869);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(23032);
;// CONCATENATED MODULE: ./src/components/shared/SelectRecipients/ProfileInList.tsx








const useStyle = (0,src/* makeStyles */.ZL)()({
    root: {
        cursor: 'pointer',
        paddingLeft: 8
    },
    overflow: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    highlighted: {
        backgroundColor: 'inherit',
        color: 'inherit',
        fontWeight: 'bold'
    }
});
function ProfileInList(props) {
    var ref, ref1, ref2;
    const classes = (0,src/* useStylesExtends */.Bc)(useStyle(), props);
    const profile = props.item;
    const name = profile.nickname || profile.identifier.userId;
    const secondary = ((ref = profile.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint) ? (ref1 = profile.linkedPersona) === null || ref1 === void 0 ? void 0 : ref1.fingerprint.toLowerCase() : '';
    const onClick = (0,react.useCallback)((ev)=>props.onChange(ev, !props.checked)
    , [
        props
    ]);
    var _search, _search1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        onClick: onClick,
        disabled: props.disabled,
        ...props.ListItemProps,
        className: classnames_default()(classes.root, (ref2 = props.ListItemProps) === null || ref2 === void 0 ? void 0 : ref2.className),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                checked: !!props.checked,
                color: "primary",
                ...props.CheckboxProps
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* Avatar */.q, {
                    person: profile
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.overflow,
                    secondary: classes.overflow
                },
                primary: /*#__PURE__*/ (0,jsx_runtime.jsx)((main_default()), {
                    highlightClassName: classes.highlighted,
                    searchWords: [
                        (_search = props.search) !== null && _search !== void 0 ? _search : ''
                    ],
                    autoEscape: true,
                    textToHighlight: name
                }),
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)((main_default()), {
                    highlightClassName: classes.highlighted,
                    searchWords: [
                        (_search1 = props.search) !== null && _search1 !== void 0 ? _search1 : ''
                    ],
                    autoEscape: true,
                    textToHighlight: secondary
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/shared/SelectRecipients/SelectRecipientsDialog.tsx








const SelectRecipientsDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            padding: '0 !important'
        },
        title: {
            marginLeft: 6
        },
        input: {
            flex: 1,
            minWidth: '10em',
            marginLeft: 20,
            marginTop: theme.spacing(1)
        }
    })
);
function SelectRecipientsDialogUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(SelectRecipientsDialog_useStyles(), props);
    const { items , disabledItems  } = props;
    const [search, setSearch] = (0,react.useState)('');
    const itemsAfterSearch = (0,react.useMemo)(()=>{
        const fuse = new fuse_esm/* default */.Z(items, {
            keys: [
                'identifier.userId',
                'linkedPersona.fingerprint',
                'nickname'
            ],
            isCaseSensitive: false,
            ignoreLocation: true,
            threshold: 0
        });
        return search === '' ? items : fuse.search(search).map((item)=>item.item
        );
    }, [
        search,
        items
    ]);
    const LIST_ITEM_HEIGHT = 56;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(InjectedDialog/* InjectedDialog */.F, {
        open: props.open,
        title: t('select_specific_friends_dialog__title'),
        onClose: props.onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        value: search,
                        onChange: (e)=>setSearch(e.target.value)
                        ,
                        className: classes.input,
                        placeholder: t('search_box_placeholder')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        style: {
                            height: items.length * LIST_ITEM_HEIGHT
                        },
                        dense: true,
                        children: itemsAfterSearch.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                primary: t('no_search_result')
                            })
                        }) : itemsAfterSearch.map((item)=>{
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(ProfileInList, {
                                item: item,
                                search: search,
                                checked: props.selected.some((x)=>x.identifier.equals(item.identifier)
                                ) || (disabledItems === null || disabledItems === void 0 ? void 0 : disabledItems.includes(item)),
                                disabled: props.disabled || (disabledItems === null || disabledItems === void 0 ? void 0 : disabledItems.includes(item)),
                                onChange: (_, checked)=>{
                                    if (checked) {
                                        props.onSelect(item);
                                    } else {
                                        props.onDeselect(item);
                                    }
                                }
                            }, item.identifier.toText());
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    style: {
                        marginLeft: 'auto'
                    },
                    variant: "contained",
                    disabled: props.submitDisabled,
                    onClick: props.onSubmit,
                    children: t('select_specific_friends_dialog__button')
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/shared/SelectRecipients/SelectRecipients.tsx









const SelectRecipients_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        display: 'inline-flex',
        flexWrap: 'wrap'
    }
});
function SelectRecipientsUI(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = SelectRecipients_useStyles();
    const { items , selected , onSetSelected  } = props;
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const profileItems = items.filter((x)=>{
        var ref;
        return !x.identifier.equals(currentIdentity === null || currentIdentity === void 0 ? void 0 : currentIdentity.identifier) && ((ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint);
    });
    const [open, setOpen] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                label: t('post_dialog__select_specific_e2e_target_title', {
                    selected: new Set([
                        ...selected.map((x)=>x.identifier.toText()
                        )
                    ]).size
                }),
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {}),
                disabled: props.disabled || profileItems.length === 0,
                onClick: ()=>setOpen(true)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsDialogUI, {
                open: open,
                items: profileItems,
                selected: profileItems.filter((x)=>selected.includes(x)
                ),
                disabled: false,
                submitDisabled: false,
                onSubmit: ()=>setOpen(false)
                ,
                onClose: ()=>setOpen(false)
                ,
                onSelect: (item)=>onSetSelected([
                        ...selected,
                        item
                    ])
                ,
                onDeselect: (item)=>onSetSelected((0,difference/* default */.Z)(selected, [
                        item
                    ]))
            })
        ]
    }));
}
SelectRecipientsUI.defaultProps = {
    frozenSelected: []
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(24515);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(22946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(27394);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(67182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(44582);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(45667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(1497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(26293);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(58938);
;// CONCATENATED MODULE: ./src/components/shared/DebugMetadataInspector.tsx








function DebugMetadataInspector(props) {
    const { meta , onExit , onDeleteMeta , onNewMeta  } = props;
    const [field, setField] = (0,react.useState)('');
    const [content1, setContent] = (0,react.useState)('{}');
    const { t  } = (0,utils/* useI18N */.M1)();
    const knownMetadata = (0,base/* getKnownMetadataKeys */.b5)();
    const result = isValid(content1);
    const isInvalid = result !== true;
    const editor = onNewMeta ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        gutterBottom: true,
                        children: t('debug_metadata_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Autocomplete/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                autoComplete: true,
                                freeSolo: true,
                                options: knownMetadata,
                                inputValue: field,
                                onInputChange: (_, newValue)=>setField(newValue)
                                ,
                                PopperComponent: src/* ShadowRootPopper */.sV,
                                renderInput: (params)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                        ...params,
                                        spellCheck: false,
                                        autoCapitalize: "off",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        fullWidth: true,
                                        label: "Metadata Key",
                                        margin: "normal",
                                        variant: "standard"
                                    })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                label: "Metadata content",
                                value: content1,
                                onChange: (e)=>setContent(e.currentTarget.value)
                                ,
                                multiline: true,
                                fullWidth: true,
                                spellCheck: false,
                                autoCapitalize: "off",
                                autoComplete: "off",
                                autoCorrect: "off",
                                error: isInvalid,
                                helperText: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    style: {
                                        whiteSpace: 'pre-wrap'
                                    },
                                    children: result
                                }),
                                variant: "standard"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>onNewMeta(field, JSON.parse(content1))
                        ,
                        size: "small",
                        variant: "contained",
                        disabled: isInvalid || (field === null || field === void 0 ? void 0 : field.length) <= 3,
                        children: t('debug_metadata_put_metadata')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>{
                            setField('');
                            setContent('{}');
                        },
                        size: "small",
                        variant: "text",
                        children: t('clear')
                    })
                ]
            })
        ]
    }) : null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        open: true,
        title: "Debug: Metadata Inspector",
        onClose: onExit,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            children: [
                editor,
                [
                    ...meta
                ].map(([key, content])=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                                expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        style: {
                                            alignSelf: 'center'
                                        },
                                        children: key
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        onClick: (e)=>e.stopPropagation()
                                        ,
                                        children: [
                                            onNewMeta ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                variant: "contained",
                                                size: "small",
                                                color: "secondary",
                                                onClick: ()=>{
                                                    setField(key);
                                                    setContent(JSON.stringify(content, undefined, 4));
                                                },
                                                children: t('edit')
                                            }) : null,
                                            onDeleteMeta ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                variant: "text",
                                                size: "small",
                                                color: "secondary",
                                                onClick: ()=>onDeleteMeta(key)
                                                ,
                                                children: t('delete')
                                            }) : null
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                                style: {
                                    display: 'flex'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    component: "code",
                                    children: JSON.stringify(content, undefined, 4),
                                    style: {
                                        whiteSpace: 'pre-wrap'
                                    }
                                })
                            })
                        ]
                    }, key));
                })
            ]
        })
    }));
    function isValid(newData) {
        try {
            JSON.parse(newData);
        } catch  {
            return 'Invalid JSON';
        }
        const validator = (0,base/* getMetadataSchema */.SJ)(field);
        if (validator.some) {
            const valid = (0,base/* isDataMatchJSONSchema */.Jp)(JSON.parse(newData), validator.val);
            if (valid.err) return 'Metadata content is invalid:\n' + valid.val.map((x)=>'    ' + x.message
            ).join('\n');
        }
        return true;
    }
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/CompositionUI.tsx



















const CompositionUI_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        '& > *': {
            marginBottom: '10px !important'
        }
    },
    flex: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    sup: {
        paddingLeft: 2
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& > *': {
            marginLeft: '12px !important'
        }
    }
});
const CompositionDialogUI = /*#__PURE__*/ (0,react.forwardRef)((props, ref1)=>{
    const { classes  } = CompositionUI_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [currentPostSize, __updatePostSize] = (0,react.useState)(0);
    const Editor = (0,react.useRef)(null);
    const PluginEntry = (0,react.useRef)(null);
    const [sending, setSending] = (0,react.useState)(false);
    const updatePostSize = (0,react.useCallback)((size)=>{
        (0,react.startTransition)(()=>__updatePostSize(size)
        );
    }, []);
    const { E2EDisabled , setEncryptionKind , encryptionKind , everyoneDisabled , recipientSelectorAvailable , recipients , setRecipients ,  } = useSetEncryptionKind(props);
    const { encodingKind , imagePayloadReadonly , imagePayloadSelected , imagePayloadVisible , setEncoding  } = useEncryptionEncode(props);
    const reset = (0,react.useCallback)(()=>{
        (0,react.startTransition)(()=>{
            var ref;
            (ref = Editor.current) === null || ref === void 0 ? void 0 : ref.reset();
            setEncryptionKind('Everyone');
            setRecipients([]);
            // Don't clean up the image/text selection across different encryption.
            // setEncoding('text')
            setSending(false);
        });
    }, []);
    (0,react.useImperativeHandle)(ref1, ()=>{
        return {
            setMessage: (msg)=>{
                if (Editor.current) Editor.current.value = msg;
            },
            setEncryptionKind,
            startPlugin: (id)=>{
                var ref;
                return (ref = PluginEntry.current) === null || ref === void 0 ? void 0 : ref.openPlugin(id);
            },
            reset
        };
    }, [
        reset
    ]);
    const context = (0,react.useMemo)(()=>{
        return {
            attachMetadata: (meta, data)=>{
                var ref;
                return (ref = Editor.current) === null || ref === void 0 ? void 0 : ref.attachMetadata(meta, data);
            },
            dropMetadata: (meta)=>{
                var ref;
                return (ref = Editor.current) === null || ref === void 0 ? void 0 : ref.dropMetadata(meta);
            }
        };
    }, []);
    const MoreOptions = [
        imagePayloadVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
            checked: imagePayloadSelected,
            label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ImagePayloadIcon, {
                        style: {
                            width: 16,
                            height: 16
                        }
                    }),
                    t('post_dialog__image_payload'),
                    shared/* Flags.image_payload_marked_as_beta */.vU.image_payload_marked_as_beta && /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                        i18nKey: "beta_sup",
                        components: {
                            sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                                className: classes.sup
                            })
                        }
                    })
                ]
            }),
            onClick: ()=>setEncoding(encodingKind === 'image' ? 'text' : 'image')
            ,
            disabled: imagePayloadReadonly || sending
        }, "image"),
        ...useMetadataDebugger(context, Editor.current), 
    ].filter(Boolean);
    var _maxLength;
    const submitAvailable = currentPostSize > 0 && currentPostSize < ((_maxLength = props.maxLength) !== null && _maxLength !== void 0 ? _maxLength : Number.POSITIVE_INFINITY);
    const onSubmit = (0,react.useCallback)(()=>{
        if (!Editor.current) return;
        setSending(true);
        props.onSubmit({
            content: Editor.current.value,
            encode: encodingKind,
            target: encryptionKind === 'E2E' ? recipients : 'Everyone'
        }).finally(reset);
    }, [
        encodingKind,
        encryptionKind,
        recipients,
        props.onSubmit
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(plugin_infra_src/* CompositionContext.Provider */.Nw.Provider, {
        value: context,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageEditor, {
                        autoFocus: true,
                        readonly: sending,
                        ref: (e)=>{
                            Editor.current = e;
                            if (e) updatePostSize(e.estimatedLength);
                        },
                        onChange: (message)=>{
                            var ref2;
                            (0,react.startTransition)(()=>{
                                var ref;
                                return (ref = props.onChange) === null || ref === void 0 ? void 0 : ref.call(props, message);
                            });
                            updatePostSize(((ref2 = Editor.current) === null || ref2 === void 0 ? void 0 : ref2.estimatedLength) || 0);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "post_dialog_plugins_experimental",
                            components: {
                                sup: /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {})
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.flex,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginEntryRender, {
                            readonly: sending,
                            ref: PluginEntry
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t('post_dialog__select_recipients_title')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.flex,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
                                checked: encryptionKind === 'Everyone',
                                disabled: everyoneDisabled || sending,
                                label: t('post_dialog__select_recipients_share_to_everyone'),
                                onClick: ()=>setEncryptionKind('Everyone')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
                                checked: encryptionKind === 'E2E',
                                disabled: E2EDisabled || sending,
                                label: t('post_dialog__select_recipients_end_to_end'),
                                onClick: ()=>setEncryptionKind('E2E')
                            }),
                            recipientSelectorAvailable && /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectRecipientsUI, {
                                disabled: sending,
                                items: props.recipients,
                                selected: recipients,
                                onSetSelected: setRecipients
                            })
                        ]
                    }),
                    MoreOptions.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('post_dialog__more_options_title')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.flex,
                                children: MoreOptions
                            })
                        ]
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.actions,
                children: [
                    props.maxLength ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CharLimitIndicator, {
                        value: currentPostSize,
                        max: props.maxLength
                    }) : null,
                    props.requireClipboardPermission && !props.hasClipboardPermission && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        onClick: props.onRequestClipboardPermission,
                        children: t('post_dialog_enable_paste_auto')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        disabled: !submitAvailable,
                        loading: sending,
                        loadingPosition: "start",
                        variant: "contained",
                        onClick: onSubmit,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                        children: t('post_dialog__button')
                    })
                ]
            })
        ]
    }));
});
function useSetEncryptionKind(props) {
    const [encryptionKind, setEncryptionKind] = (0,react.useState)(props.disabledRecipients === 'Everyone' ? 'E2E' : 'Everyone');
    // TODO: Change to ProfileIdentifier
    const [recipients, setRecipients] = (0,react.useState)([]);
    const everyoneDisabled = props.disabledRecipients === 'Everyone';
    const E2EDisabled = props.disabledRecipients === 'E2E';
    const everyoneSelected = props.disabledRecipients !== 'Everyone' && (E2EDisabled || encryptionKind === 'Everyone');
    const _E2ESelected = props.disabledRecipients !== 'E2E' && (props.disabledRecipients === 'Everyone' || encryptionKind === 'E2E');
    const recipientSelectorAvailable = Boolean(props.recipients.length && !everyoneSelected);
    return {
        recipients,
        setRecipients,
        recipientSelectorAvailable,
        everyoneDisabled,
        E2EDisabled,
        encryptionKind: everyoneSelected ? 'Everyone' : 'E2E',
        setEncryptionKind
    };
}
function useEncryptionEncode(props) {
    const [encoding, setEncoding] = (0,react.useState)(props.supportTextEncoding ? 'text' : 'image');
    const imagePayloadSelected = props.supportImageEncoding && (encoding === 'image' || !props.supportTextEncoding);
    // XOR
    const imagePayloadReadonly = props.supportImageEncoding && !props.supportTextEncoding || !props.supportImageEncoding && props.supportTextEncoding;
    const imagePayloadVisible = props.supportImageEncoding;
    const encodingKind = imagePayloadSelected ? 'image' : 'text';
    return {
        encodingKind,
        imagePayloadSelected,
        imagePayloadReadonly,
        imagePayloadVisible,
        setEncoding
    };
}
function useMetadataDebugger(context, Editor) {
    const isDebug = (0,shared_src/* useValueRef */.E)(settings/* debugModeSetting */.vv);
    const [__MetadataDebuggerMeta, __configureMetadataDebugger] = (0,react.useState)(null);
    const __syncMetadataDebugger = ()=>{
        var _meta;
        const meta = (_meta = Editor === null || Editor === void 0 ? void 0 : Editor.value.meta) !== null && _meta !== void 0 ? _meta : new Map();
        setTimeout(()=>__configureMetadataDebugger(meta)
        );
    };
    const UI = [
        isDebug && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
            label: "Post metadata inspector",
            onClick: __syncMetadataDebugger
        }, "debug"),
        isDebug && __MetadataDebuggerMeta && /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugMetadataInspector, {
            meta: __MetadataDebuggerMeta,
            onNewMeta: (meta, data)=>{
                context.attachMetadata(meta, data);
                __syncMetadataDebugger();
            },
            onDeleteMeta: (meta)=>{
                context.dropMetadata(meta);
                __syncMetadataDebugger();
            },
            onExit: ()=>__configureMetadataDebugger(null)
        }, "debug-dialog"), 
    ];
    return UI;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/useCompositionClipboardRequest.tsx




function useCompositionClipboardRequest(requireClipboardPermission) {
    const { retry , value: hasClipboardPermission = true  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!requireClipboardPermission) return true;
        return service/* default.Helper.queryExtensionPermission */.ZP.Helper.queryExtensionPermission({
            permissions: [
                'clipboardRead'
            ]
        });
    }, [
        requireClipboardPermission
    ]);
    const onRequestClipboardPermission = (0,react.useCallback)(()=>{
        if (!requireClipboardPermission) return;
        service/* default.Helper.requestExtensionPermission */.ZP.Helper.requestExtensionPermission({
            permissions: [
                'clipboardRead'
            ]
        }).finally(()=>{
            utils/* MaskMessages.events.requestExtensionPermission.sendToAll */.ql.events.requestExtensionPermission.sendToAll({
                permissions: [
                    'clipboardRead'
                ]
            });
        });
    }, [
        requireClipboardPermission
    ]);
    return {
        onQueryClipboardPermission: retry,
        requireClipboardPermission,
        hasClipboardPermission,
        onRequestClipboardPermission
    };
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(1487);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(74926);
// EXTERNAL MODULE: ../encryption/src/index.ts + 22 modules
var encryption_src = __webpack_require__(96663);
;// CONCATENATED MODULE: ./src/resources/image-payload/index.ts
const ImagePayloadURLs = {
    v2: new URL(/* asset import */ __webpack_require__(35675), __webpack_require__.b).toString(),
    eth: new URL(/* asset import */ __webpack_require__(18077), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(79304);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SteganographyTextPayload.ts





async function SteganographyTextPayload(template, text) {
    var ref, ref1, ref2;
    const pass = ((ref = social_network/* activatedSocialNetworkUI.configuration.steganography */.LM.configuration.steganography) === null || ref === void 0 ? void 0 : (ref1 = ref.password) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 'mask';
    const blankImage = await (0,utils_utils/* downloadUrl */.GR)(ImagePayloadURLs[template]).then((x)=>x.arrayBuffer()
    );
    var ref3;
    const secretImage = await service/* default.Crypto.steganographyEncodeImage */.ZP.Crypto.steganographyEncodeImage(new Uint8Array(blankImage), {
        text,
        pass,
        template,
        grayscaleAlgorithm: (ref3 = (ref2 = social_network/* activatedSocialNetworkUI.configuration.steganography */.LM.configuration.steganography) === null || ref2 === void 0 ? void 0 : ref2.grayscaleAlgorithm) !== null && ref3 !== void 0 ? ref3 : encryption_src/* GrayscaleAlgorithm.NONE */.Ft.NONE
    });
    const blob = new Blob([
        secretImage
    ], {
        type: 'image/png'
    });
    return blob;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var kit_esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/useSubmit.ts











function useSubmit(onClose) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const whoAmI = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    return (0,react.useCallback)(async (info)=>{
        const { content , encode , target  } = info;
        const network = social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier;
        const currentProfile = new shared_base_src/* ProfileIdentifier */.WO(network, shared_base_src/* ProfileIdentifier.getUserName */.WO.getUserName(social_network/* globalUIState.profiles.value.0.identifier */.EJ.profiles.value[0].identifier) || (0,kit_esm/* unreachable */.t1)('Cannot figure out current profile'));
        var ref;
        const [encrypted, token] = await service/* default.Crypto.encryptTo */.ZP.Crypto.encryptTo(content, target === 'Everyone' ? [] : target.map((x)=>x.identifier
        ), (ref = whoAmI === null || whoAmI === void 0 ? void 0 : whoAmI.identifier) !== null && ref !== void 0 ? ref : currentProfile, target === 'Everyone');
        const redPacketPreText = (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('additional_post_box__encrypted_post_pre_red_packet_twitter_official_account', {
            encrypted,
            account: (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
        }) : t('additional_post_box__encrypted_post_pre_red_packet', {
            encrypted
        });
        // TODO: move into the plugin system
        const redPacketMetadata = (0,helpers/* RedPacketMetadataReader */.Qc)(content.meta);
        if (encode === 'image') {
            const defaultText = t('additional_post_box__steganography_post_pre', {
                random: new Date().toLocaleString()
            });
            if (redPacketMetadata.ok) {
                var ref1;
                await pasteImage((ref1 = redPacketPreText.replace(encrypted, '')) !== null && ref1 !== void 0 ? ref1 : defaultText, encrypted, 'eth');
            } else {
                await pasteImage(defaultText, encrypted, 'v2');
            }
        } else {
            var ref2;
            pasteTextEncode((ref2 = redPacketMetadata.ok ? redPacketPreText : null) !== null && ref2 !== void 0 ? ref2 : t('additional_post_box__encrypted_post_pre', {
                encrypted
            }));
        }
        // This step write data on gun. There is nothing to write if it shared with public
        if (target !== 'Everyone') service/* default.Crypto.publishPostAESKey */.ZP.Crypto.publishPostAESKey(token);
        onClose();
    }, [
        t,
        whoAmI,
        onClose
    ]);
}
function pasteTextEncode(text) {
    var ref, ref3;
    (ref = social_network/* activatedSocialNetworkUI.automation.nativeCompositionDialog */.LM.automation.nativeCompositionDialog) === null || ref === void 0 ? void 0 : (ref3 = ref.appendText) === null || ref3 === void 0 ? void 0 : ref3.call(ref, text, {
        recover: true
    });
}
async function pasteImage(relatedTextPayload, encrypted, template) {
    const img = await SteganographyTextPayload(template, encrypted);
    // Don't await this, otherwise the dialog won't disappear
    social_network/* activatedSocialNetworkUI.automation.nativeCompositionDialog.attachImage */.LM.automation.nativeCompositionDialog.attachImage(img, {
        recover: true,
        relatedTextPayload
    });
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/Composition.tsx












let openOnInitAnswered = false;
function Composition({ type ='timeline' , requireClipboardPermission  }) {
    var ref3;
    const { t  } = (0,utils/* useI18N */.M1)();
    // #region Open
    const [open1, setOpen] = (0,react.useState)(false);
    const onClose = (0,react.useCallback)(()=>{
        var ref;
        setOpen(false);
        (ref = UI.current) === null || ref === void 0 ? void 0 : ref.reset();
    }, []);
    (0,react.useEffect)(()=>{
        if (openOnInitAnswered) return;
        openOnInitAnswered = true;
        service/* default.SocialNetwork.getDesignatedAutoStartPluginID */.ZP.SocialNetwork.getDesignatedAutoStartPluginID().then((plugin)=>{
            var ref;
            if (!plugin) return;
            setOpen(true);
            (ref = UI.current) === null || ref === void 0 ? void 0 : ref.startPlugin(plugin);
        });
    }, []);
    const { onQueryClipboardPermission , hasClipboardPermission , onRequestClipboardPermission  } = useCompositionClipboardRequest(requireClipboardPermission || false);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.requestExtensionPermission.on */.ql.events.requestExtensionPermission.on(()=>{
            return onQueryClipboardPermission === null || onQueryClipboardPermission === void 0 ? void 0 : onQueryClipboardPermission();
        });
    }, [
        onQueryClipboardPermission
    ]);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.requestComposition.on */.ql.events.requestComposition.on(({ reason , open , content , options  })=>{
            var ref, ref4, ref5;
            if (reason !== type || social_network/* globalUIState.profiles.value.length */.EJ.profiles.value.length <= 0) return;
            setOpen(open);
            if (content) (ref = UI.current) === null || ref === void 0 ? void 0 : ref.setMessage(content);
            if (options === null || options === void 0 ? void 0 : options.target) (ref4 = UI.current) === null || ref4 === void 0 ? void 0 : ref4.setEncryptionKind(options.target);
            if (options === null || options === void 0 ? void 0 : options.startupPlugin) (ref5 = UI.current) === null || ref5 === void 0 ? void 0 : ref5.startPlugin(options.startupPlugin);
        });
    }, [
        type
    ]);
    (0,react.useEffect)(()=>{
        if (!open1) return;
        return utils/* MaskMessages.events.replaceComposition.on */.ql.events.replaceComposition.on((message)=>{
            const ui = UI.current;
            if (!ui) return;
            UI.current.setMessage(message);
        });
    }, [
        open1
    ]);
    // #endregion
    // #region submit
    const onSubmit_ = useSubmit(onClose);
    // #endregion
    const UI = (0,react.useRef)(null);
    const networkSupport = (ref3 = social_network/* activatedSocialNetworkUI.injection.newPostComposition */.LM.injection.newPostComposition) === null || ref3 === void 0 ? void 0 : ref3.supportedOutputTypes;
    var ref1, ref2;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* DialogStackingProvider */.yu, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            keepMounted: true,
            open: open1,
            onClose: onClose,
            title: t('post_dialog__title'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialogUI, {
                    ref: UI,
                    hasClipboardPermission: hasClipboardPermission,
                    onRequestClipboardPermission: onRequestClipboardPermission,
                    requireClipboardPermission: requireClipboardPermission,
                    recipients: (0,useActivatedUI/* useFriendsList */.hg)(),
                    maxLength: 560,
                    onSubmit: onSubmit_,
                    supportImageEncoding: (ref1 = networkSupport === null || networkSupport === void 0 ? void 0 : networkSupport.text) !== null && ref1 !== void 0 ? ref1 : false,
                    supportTextEncoding: (ref2 = networkSupport === null || networkSupport === void 0 ? void 0 : networkSupport.image) !== null && ref2 !== void 0 ? ref2 : false
                })
            })
        })
    }));
}


/***/ }),

/***/ 3037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GuideStep)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39850);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92597);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31357);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46486);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7280);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21202);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61751);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13573);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            position: 'absolute',
            boxShadow: `0 0 0 3000px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,.3)' : 'rgba(110,118,125,.3)'}`,
            borderRadius: 8
        },
        target: {
            background: 'transparent'
        },
        mask: {
            position: 'fixed',
            top: 0,
            width: '100vw',
            height: '100vh',
            background: 'transparent',
            zIndex: 1000
        },
        card: {
            position: 'absolute',
            left: 0,
            width: 256,
            padding: '16px',
            borderRadius: '16px',
            background: 'rgba(0,0,0,.85)',
            boxShadow: '0 4px 8px rgba(0,0,0,.1)',
            boxSizing: 'border-box',
            color: '#fff',
            '&.arrow-top:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderBottomColor: 'rgba(0,0,0,.85)',
                borderBottomWidth: '13px',
                borderTopWidth: 0,
                position: 'absolute',
                top: '-13px',
                left: '24px'
            },
            '&.arrow-bottom:after': {
                content: '""',
                display: 'inline-block',
                width: 0,
                height: 0,
                border: 'solid 8px transparent',
                borderTopColor: 'rgba(0,0,0,.85)',
                borderTopWidth: '13px',
                borderBottomWidth: 0,
                position: 'absolute',
                bottom: '-13px',
                left: '24px'
            }
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '16px'
        }
    })
);
const ActionButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        boxSizing: 'border-box',
        width: 104,
        height: 32,
        lineHeight: '32px',
        borderRadius: 16,
        textAlign: 'center',
        border: 'solid 1px #000',
        borderColor: '#fff',
        cursor: 'pointer',
        fontFamily: 'PingFang SC'
    })
);
const NextButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP)(ActionButton)({
    border: 'none',
    color: '#111418',
    background: '#fff'
});
function GuideStep({ total , step , tip , children , arrow =true , disabled =false , onComplete  }) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    const childrenRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const [clientRect, setClientRect] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});
    const [open1, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [bottomAvailable1, setBottomAvailable] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
    const ui = _social_network__WEBPACK_IMPORTED_MODULE_6__/* .activatedSocialNetworkUI */ .LM;
    const lastStepRef = _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier];
    const lastStep = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__/* .useValueRef */ .E)(lastStepRef);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (disabled) return;
        const open = +lastStep === step;
        setOpen(open);
    }, [
        lastStep
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (disabled) return;
        document.body.style.overflow = open1 ? 'hidden' : '';
    }, [
        open1
    ]);
    const onSkip = ()=>{
        setOpen(false);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = 'completed';
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .sayHelloShowed */ .Pg[ui.networkIdentifier].value = true;
    };
    const onNext = ()=>{
        setOpen(false);
        if (step !== total) {
            _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = String(step + 1);
        }
    };
    const onTry = ()=>{
        setOpen(false);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .userGuideStatus */ .Ct[ui.networkIdentifier].value = 'completed';
        onComplete === null || onComplete === void 0 ? void 0 : onComplete();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const onResize = ()=>{
            var ref;
            const cr = (ref = childrenRef.current) === null || ref === void 0 ? void 0 : ref.getBoundingClientRect();
            if (cr) {
                const bottomAvailable = window.innerHeight - cr.height - cr.top > 200;
                setBottomAvailable(bottomAvailable);
                if (!cr.width) {
                    setClientRect({
                        ...cr,
                        top: 30,
                        left: 'calc(100vw - 300px)'
                    });
                } else {
                    setClientRect(cr);
                }
            } else {
                setClientRect(cr);
            }
        };
        onResize();
        window.addEventListener('resize', onResize);
        return ()=>{
            window.removeEventListener('resize', onResize);
        };
    }, [
        childrenRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.cloneElement)(children, {
                ref: childrenRef
            }),
            (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .usePortalShadowRoot */ .ad)((container)=>{
                if (!open1) return null;
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    container: container,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.mask,
                        onClick: (e)=>e.stopPropagation()
                        ,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: classes.container,
                            style: {
                                top: clientRect.top,
                                left: clientRect.left
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: classes.target,
                                style: {
                                    width: clientRect.width,
                                    height: clientRect.height
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.card, arrow ? bottomAvailable1 ? 'arrow-top' : 'arrow-bottom' : ''),
                                    style: {
                                        left: clientRect.width < 50 ? -clientRect.width / 2 : 0,
                                        [bottomAvailable1 ? 'top' : 'bottom']: clientRect.height + 16
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            style: {
                                                paddingBottom: '16px'
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                sx: {
                                                    fontSize: 20
                                                },
                                                children: [
                                                    step,
                                                    "/",
                                                    total
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                fontSize: 14,
                                                fontWeight: 600,
                                                children: tip
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                            className: classes.buttonContainer,
                                            children: step === total ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                style: {
                                                    width: '100%'
                                                },
                                                onClick: onTry,
                                                children: t('try')
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionButton, {
                                                        onClick: onSkip,
                                                        children: t('skip')
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NextButton, {
                                                        onClick: onNext,
                                                        children: t('next')
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }));
            })
        ]
    }));
};


/***/ }),

/***/ 91968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PostDialogHint)
/* harmony export */ });
/* unused harmony export PostDialogHintUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8309);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91497);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92597);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13573);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39850);
/* harmony import */ var _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72572);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70119);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41529);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21202);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61751);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GuideStep__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3037);













const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            // TODO: is it correct? (what about twitter?)
            padding: _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__/* .isMobileFacebook */ .q ? 0 : '8px'
        },
        text: {
            fontSize: 14,
            color: '#606770',
            marginLeft: theme.spacing(1)
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: '8px 10px',
            borderBottom: '1px solid #dadde1'
        }
    })
);
const EntryIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const { size , tooltip  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GuideStep__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        step: 3,
        total: 3,
        tip: t('user_guide_tip_3'),
        onComplete: props.onHintButtonClicked,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            title: "Mask Network",
            classes: {
                tooltip: classes.tooltip
            },
            placement: tooltip === null || tooltip === void 0 ? void 0 : tooltip.placement,
            disableHoverListener: tooltip === null || tooltip === void 0 ? void 0 : tooltip.disabled,
            PopperProps: {
                disablePortal: true
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                size: "large",
                className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(classes.button, classes.iconButton),
                onClick: props.onHintButtonClicked,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_6__/* .MaskSharpIcon */ .LT, {
                    size: size,
                    color: "primary"
                })
            })
        })
    }));
});
const PostDialogHintUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PostDialogHintUI(props) {
    const { onHintButtonClicked , size , ...others } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    return _social_network_adaptor_facebook_com_utils_isMobile__WEBPACK_IMPORTED_MODULE_5__/* .isMobileFacebook */ .q ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.wrapper,
        onClick: onHintButtonClicked,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
                size: size,
                onHintButtonClicked: ()=>undefined
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: classes.text,
                children: t('post_modal_hint__button')
            })
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.buttonTransform,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EntryIconButton, {
            size: size,
            onHintButtonClicked: onHintButtonClicked,
            ...others
        })
    });
});
function PostDialogHint(props) {
    const identities = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useMyIdentities */ .FA)();
    const connecting = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_8__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_9__/* .activatedSocialNetworkUI.networkIdentifier */ .LM.networkIdentifier]);
    if (connecting || identities.length === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PostDialogHintUI, {
        onHintButtonClicked: ()=>{},
        ...props
    }));
}


/***/ }),

/***/ 19462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* binding */ ToolboxHintUnstyled)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton_ListItemButton = __webpack_require__(58364);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText_ListItemText = __webpack_require__(10);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon_ListItemIcon = __webpack_require__(13970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography_Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(46486);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(55673);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var src = __webpack_require__(27194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts
var native_rpc = __webpack_require__(81653);
// EXTERNAL MODULE: ./src/plugins/Wallet/hooks/useRecentTransactions.ts
var useRecentTransactions = __webpack_require__(14417);
// EXTERNAL MODULE: ./src/components/GuideStep/index.tsx
var GuideStep = __webpack_require__(3037);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(70119);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var theme_src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(27181);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(40127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(21202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide/types.ts
var SetupGuide_types = __webpack_require__(51212);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(24524);
;// CONCATENATED MODULE: ./src/components/DataSource/useNextID.ts











const usePersonaBoundPlatform = (personaPublicKey)=>{
    useAsyncRetry(()=>{
        return queryExistedBindingByPersona(personaPublicKey);
    }, [
        personaPublicKey
    ]);
};
let isOpenedVerifyDialog = false;
const useNextIDBoundByPlatform = (platform, identity)=>{
    useAsyncRetry(()=>{
        return queryExistedBindingByPlatform(platform, identity);
    }, [
        platform,
        identity
    ]);
};
function useNextIDConnectStatus() {
    var ref1;
    const ui = social_network/* activatedSocialNetworkUI */.LM;
    const [enableNextID] = (0,react.useState)((ref1 = ui.configuration.nextIDConfig) === null || ref1 === void 0 ? void 0 : ref1.enable);
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
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
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const [username] = (0,react.useState)(lastState.username || (lastRecognized.identifier.isUnknown ? '' : lastRecognized.identifier.userId));
    const { value: isVerified = false  } = (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (lastState.status === SetupGuide_types/* SetupGuideStep.FindUsername */.s.FindUsername) return true;
        if (isOpenedVerifyDialog) return true;
        if (!enableNextID || !username || !personaConnectStatus.connected) return true;
        const currentPersona = await service/* default.Settings.getCurrentPersona */.ZP.Settings.getCurrentPersona();
        if (!(currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.publicHexKey)) return true;
        if (settings/* dismissVerifyNextID */.gG[ui.networkIdentifier].value[`${username}_${currentPersona.identifier.toText()}`]) return true;
        const platform = (ref = ui.configuration.nextIDConfig) === null || ref === void 0 ? void 0 : ref.platform;
        if (!platform) return true;
        const isBound = await (0,web3_providers_src/* queryIsBound */._9)(currentPersona.publicHexKey, platform, username);
        if (isBound) return true;
        settings/* currentSetupGuideStatus */.AI[ui.networkIdentifier].value = json_stable_stringify_default()({
            status: SetupGuide_types/* SetupGuideStep.VerifyOnNextID */.s.VerifyOnNextID,
            persona: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier.toText()
        });
        isOpenedVerifyDialog = true;
        return false;
    }, [
        username,
        enableNextID,
        lastStateRef.value
    ]);
    return isVerified;
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/ToolboxUnstyled.tsx
















const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        title: {
            color: theme.palette.mode === 'dark' ? theme.palette.text.primary : 'rgb(15, 20, 25)',
            display: 'flex',
            alignItems: 'center'
        },
        paper: {
            borderRadius: 4,
            boxShadow: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px' : 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
            backgroundImage: 'none'
        },
        menuItem: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        menuText: {
            marginLeft: 12,
            fontSize: 15,
            color: theme.palette.mode === 'dark' ? 'rgb(216, 216, 216)' : 'rgb(15, 20, 25)',
            paddingRight: theme.spacing(2)
        },
        chainIcon: {
            fontSize: 18,
            width: 18,
            height: 18
        },
        iconWrapper: {
            display: 'flex',
            alignItems: 'baseline'
        },
        maskFilledIcon: {
            marginRight: 6
        }
    })
);
function ToolboxHintUnstyled(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const isNextIDVerified = useNextIDConnectStatus();
    const { ListItemButton =ListItemButton_ListItemButton/* default */.Z , ListItemText =ListItemText_ListItemText/* default */.Z , ListItemIcon =ListItemIcon_ListItemIcon/* default */.Z , Container ='div' , Typography =Typography_Typography/* default */.Z , iconSize =24 , badgeSize =10 , mini ,  } = props;
    const { classes  } = useStyles();
    const { openWallet , isWalletValid , walletTitle , chainColor , shouldDisplayChainIndicator  } = useToolbox();
    const networkDescriptor = (0,src/* useNetworkDescriptor */.Vw)();
    const providerDescriptor = (0,src/* useProviderDescriptor */.fY)();
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const title = (0,react.useMemo)(()=>{
        return !personaConnectStatus.hasPersona ? t('create_persona') : !personaConnectStatus.connected ? t('connect_persona') : walletTitle;
    }, [
        personaConnectStatus,
        walletTitle,
        t
    ]);
    const onClick = ()=>{
        if (!isNextIDVerified) return;
        personaConnectStatus.action ? personaConnectStatus.action() : openWallet();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GuideStep/* default */.Z, {
            step: 1,
            total: 3,
            tip: t('user_guide_tip_1'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Container, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton, {
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon, {
                            children: isWalletValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                                size: iconSize,
                                badgeSize: badgeSize,
                                networkIcon: providerDescriptor === null || providerDescriptor === void 0 ? void 0 : providerDescriptor.icon,
                                providerIcon: networkDescriptor === null || networkDescriptor === void 0 ? void 0 : networkDescriptor.icon,
                                isBorderColorNotDefault: true
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskFilledIcon */.x7, {
                                size: iconSize
                            })
                        }),
                        mini ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText, {
                            primary: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography, {
                                        className: classes.title,
                                        children: title
                                    }),
                                    shouldDisplayChainIndicator ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FiberManualRecord/* default */.Z, {
                                        className: classes.chainIcon,
                                        style: {
                                            color: chainColor
                                        }
                                    }) : null
                                ]
                            })
                        })
                    ]
                })
            })
        })
    }));
}
function useToolbox() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,src/* useAccount */.mA)();
    const selectedWallet = (0,src/* useWallet */.Os)();
    const chainColor = (0,src/* useChainColor */.x5)();
    const chainIdValid = (0,src/* useChainIdValid */.as)();
    const chainDetailed = (0,src/* useChainDetailed */.K1)();
    const { Utils  } = (0,src/* useWeb3State */.dM)();
    // #region recent pending transactions
    const { value: pendingTransactions = []  } = (0,useRecentTransactions/* useRecentTransactions */.S)({
        status: types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND
    });
    // #endregion
    // #region Wallet
    const { openDialog: openWalletStatusDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    // #endregion
    const isWalletValid = !!account && selectedWallet && chainIdValid;
    const { value: domain  } = (0,src/* useReverseAddress */.$q)(account);
    function renderButtonText() {
        var ref, ref1;
        if (!account) return t('mask_network');
        if (!chainIdValid) return t('plugin_wallet_wrong_network');
        if (pendingTransactions.length <= 0) return (Utils === null || Utils === void 0 ? void 0 : (ref = Utils.formatDomainName) === null || ref === void 0 ? void 0 : ref.call(Utils, domain)) || (Utils === null || Utils === void 0 ? void 0 : (ref1 = Utils.formatAddress) === null || ref1 === void 0 ? void 0 : ref1.call(Utils, account, 4)) || account;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        marginRight: 12
                    },
                    children: t('plugin_wallet_pending_transactions', {
                        count: pendingTransactions.length
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                    thickness: 6,
                    size: 20,
                    color: "inherit"
                })
            ]
        }));
    }
    const openWallet = (0,react.useCallback)(()=>{
        if (native_rpc/* hasNativeAPI */._) return native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.misc_openCreateWalletView */.Nz.api.misc_openCreateWalletView();
        return openWalletStatusDialog();
    }, [
        openWalletStatusDialog,
        native_rpc/* hasNativeAPI */._
    ]);
    const walletTitle = renderButtonText();
    const shouldDisplayChainIndicator = account && chainIdValid && (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) && chainDetailed.network !== 'mainnet';
    return {
        openWallet,
        isWalletValid,
        walletTitle,
        shouldDisplayChainIndicator,
        chainColor
    };
}


/***/ }),

/***/ 37674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ Banner)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(70119);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(43470);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(40127);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts
var native_rpc = __webpack_require__(81653);
;// CONCATENATED MODULE: ./src/components/Welcomes/Banner.tsx












const useStyles = (0,src/* makeStyles */.ZL)()({
    buttonText: {
        width: 38,
        height: 38,
        margin: '10px 0'
    },
    span: {
        paddingLeft: 8
    }
});
function BannerUI(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    return props.nextStep === 'hidden' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "large",
        className: classes.buttonText,
        onClick: props.nextStep.onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskSharpIcon */.LT, {
            color: "primary"
        })
    });
}
function Banner(props) {
    const lastRecognizedIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const { nextStep  } = props;
    const networkIdentifier = social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier;
    const identities = (0,useActivatedUI/* useMyIdentities */.FA)();
    const [value, onChange] = (0,react.useState)('');
    const defaultNextStep = (0,react.useCallback)(()=>{
        if (nextStep === 'hidden') return;
        if (!networkIdentifier) {
            nextStep === null || nextStep === void 0 ? void 0 : nextStep.onClick();
            nextStep !== null && nextStep !== void 0 ? nextStep : console.warn('You must provide one of networkIdentifier or nextStep.onClick');
            return;
        }
        native_rpc/* hasNativeAPI */._ ? native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.misc_openDashboardView */.Nz.api.misc_openDashboardView() : service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(personaConnectStatus.hasPersona ? shared_base_src/* DashboardRoutes.Personas */.vq.Personas : shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
    }, [
        networkIdentifier,
        nextStep
    ]);
    const defaultUserName = networkIdentifier ? {
        defaultValue: lastRecognizedIdentity.identifier.isUnknown ? '' : lastRecognizedIdentity.identifier.userId,
        value,
        onChange,
        isValid: social_network/* activatedSocialNetworkUI.utils.isValidUsername */.LM.utils.isValidUsername || (()=>true
        )
    } : 'hidden';
    const [mounted, setMounted] = (0,react.useState)(false);
    (0,useMount/* default */.Z)(()=>setMounted(true)
    );
    var _username, _nextStep;
    return identities.length === 0 && mounted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BannerUI, {
        ...props,
        username: (_username = props.username) !== null && _username !== void 0 ? _username : defaultUserName,
        nextStep: (_nextStep = props.nextStep) !== null && _nextStep !== void 0 ? _nextStep : {
            onClick: defaultNextStep
        }
    }) : null;
}

;// CONCATENATED MODULE: ./src/components/shared/NotSetupYetPrompt.tsx



/***/ }),

/***/ 1487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qc": () => (/* binding */ RedPacketMetadataReader),
  "st": () => (/* binding */ RedPacketNftMetadataReader),
  "vP": () => (/* binding */ renderWithRedPacketMetadata),
  "Ay": () => (/* binding */ renderWithRedPacketNftMetadata)
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(29286);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address","decimals","name","symbol"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","total"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema-nft.json
const schema_nft_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"id":{"type":"string","title":"id"},"txid":{"type":"string","title":"txid"},"duration":{"type":"number","title":"duration"},"message":{"type":"string","title":"message"},"senderName":{"type":"string","title":"senderName"},"contractName":{"type":"string","title":"contractName"},"contractAddress":{"type":"string","title":"contractAddress"},"privateKey":{"type":"string","title":"privateKey"},"chainId":{"type":"number","title":"chainId"},"contractTokenURI":{"type":"string","title":"contractTokenURI"}},"required":["id","duration","message","senderName","contractName","contractAddress","privateKey","chainId","contractTokenURI"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts




const RedPacketMetadataReader = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,base/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);
const RedPacketNftMetadataReader = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketNftMetaKey */.HA, schema_nft_namespaceObject);
const renderWithRedPacketNftMetadata = (0,base/* createRenderWithMetadata */.mC)(RedPacketNftMetadataReader);


/***/ }),

/***/ 14417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22572);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63541);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63081);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);





function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.getRecentTransactions */ .V.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionStateUpdated.on */ .R$.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}


/***/ }),

/***/ 72572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook)
/* harmony export */ });
/* unused harmony export facebookDomain */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = (/* unused pure expression or super */ null && (isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/'));


/***/ }),

/***/ 35675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/70c03ec1bb4575d55722.png";

/***/ }),

/***/ 18077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/413dc2cdada95d3137f6.png";

/***/ })

}]);