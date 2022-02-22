"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8629],{

/***/ 27120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ Composition)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(60462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(67943);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(44438);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(71123);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(99850);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(61682);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(70751);
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
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.4_881b2a51613eca9a23c14f7ecef9122a/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(61460);
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

// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(47238);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(8882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
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
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* ShadowRootTooltip */.p_, {
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
const emptyMessage = (0,shared_base_src/* makeTypedMessageText */.P)('');
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
        if ((0,shared_base_src/* isTypedMessageEqual */.Hz)(currentValue.current, value)) return;
        setValue(value);
        currentValue.current = value;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    }, [
        onChange
    ]);
    const setAsText = (0,react.useCallback)((val)=>{
        const text = typeof val === 'string' ? val : val.target.value;
        const newValue = (0,shared_base_src/* makeTypedMessageText */.P)(text, currentValue.current.meta);
        setMessage(newValue);
    }, [
        setMessage
    ]);
    const deleteMetaID = (0,react.useCallback)((meta)=>{
        setMessage((0,shared_base_src/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.delete(meta)
        ));
    }, [
        setMessage
    ]);
    (0,react.useImperativeHandle)(ref, ()=>{
        return {
            get estimatedLength () {
                // TODO: we should count metadata into the estimated size
                if ((0,shared_base_src/* isTypedMessageText */.Rz)(currentValue.current)) return currentValue.current.content.length;
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
                setMessage((0,shared_base_src/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.set(meta, data)
                ));
            },
            dropMetadata: deleteMetaID
        };
    }, [
        setMessage,
        deleteMetaID
    ]);
    if (!(0,shared_base_src/* isTypedMessageText */.Rz)(value1)) {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(91719);
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

// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(70146);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/difference.js + 1 modules
var difference = __webpack_require__(44729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js
var List = __webpack_require__(26271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(42042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(36122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(58639);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-highlight-words@0.17.0_react@18.0.0-rc.0/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__(4869);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(248);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(20235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(81337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(95763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(81539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(4639);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(78596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AccordionDetails/AccordionDetails.js
var AccordionDetails = __webpack_require__(75030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(92023);
// EXTERNAL MODULE: ./src/utils/shadow-root/ShadowRootComponents.tsx
var ShadowRootComponents = __webpack_require__(21623);
;// CONCATENATED MODULE: ./src/components/shared/DebugMetadataInspector.tsx








function DebugMetadataInspector(props) {
    const { meta , onExit , onDeleteMeta , onNewMeta  } = props;
    const [field, setField] = (0,react.useState)('');
    const [content1, setContent] = (0,react.useState)('{}');
    const { t  } = (0,utils/* useI18N */.M1)();
    const knownMetadata = (0,shared_base_src/* getKnownMetadataKeys */.b5)();
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
                                PopperComponent: ShadowRootComponents/* ShadowRootPopper */.sV,
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
        const validator = (0,shared_base_src/* getMetadataSchema */.SJ)(field);
        if (validator.some) {
            const valid = (0,shared_base_src/* isDataMatchJSONSchema */.Jp)(JSON.parse(newData), validator.val);
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
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
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

// EXTERNAL MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(18014);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(69825);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../encryption/src/index.ts + 22 modules
var encryption_src = __webpack_require__(37348);
;// CONCATENATED MODULE: ./src/resources/image-payload/index.ts
const ImagePayloadURLs = {
    v2: new URL(/* asset import */ __webpack_require__(35675), __webpack_require__.b).toString(),
    eth: new URL(/* asset import */ __webpack_require__(18077), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(58245);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SteganographyTextPayload.ts






async function SteganographyTextPayload(template, text) {
    var ref, ref1, ref2;
    const pass = ((ref = social_network/* activatedSocialNetworkUI.configuration.steganography */.LM.configuration.steganography) === null || ref === void 0 ? void 0 : (ref1 = ref.password) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 'mask';
    const blankImage = await (0,utils_utils/* downloadUrl */.GR)(ImagePayloadURLs[template]).then(kit_esm/* blobToArrayBuffer */.vZ);
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

// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(45181);
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
        const redPacketPreText = (0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('additional_post_box__encrypted_post_pre_red_packet_twitter_official_account', {
            encrypted,
            account: (0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
var debounce = __webpack_require__(89208);
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
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86716);
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

/***/ 74008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sF": () => (/* binding */ DefaultTypedMessageRenderer)
});

// UNUSED EXPORTS: DefaultTypedMessageAnchorRenderer, DefaultTypedMessageEmptyRenderer, DefaultTypedMessageImageRenderer, DefaultTypedMessageSuspendedRenderer, DefaultTypedMessageTextRenderer, DefaultTypedMessageTupleRenderer, DefaultTypedMessageUnknownRenderer

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/anchorme@2.1.2/node_modules/anchorme/dist/node/index.js
var node = __webpack_require__(5670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(40516);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 2 modules
var typed_message = __webpack_require__(283);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(61292);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PayloadReplacer.tsx




const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        text: {
            fontSize: 'inherit',
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5)
        }
    })
);
function PayloadReplacer({ payload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyle();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.text,
        color: "textPrimary",
        component: "span",
        variant: "body1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: /^https?:\/\/mask(\.io|book\.com)/i.test(payload) ? payload : 'https://mask.io',
            children: t('post_substitute_label')
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx













const DefaultTypedMessageRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageRenderer(props) {
    var ref;
    const Renderer = ((ref = (0,typed_message/* getRendererOfTypedMessage */.vi)(props.message)[0]) === null || ref === void 0 ? void 0 : ref.component) || DefaultTypedMessageUnknownRenderer;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
        ...props,
        message: props.message
    }));
});
const DefaultTypedMessageTextRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageTextRenderer(props) {
    const { content  } = props.message;
    const deconstructed = (0,Payload/* deconstructPayload */.Q)(content, null);
    return renderWithMetadata(props, /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "span",
        color: "textPrimary",
        variant: "body1",
        "data-testid": "text_payload",
        children: deconstructed.ok ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PayloadReplacer, {
            payload: content
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderText, {
            text: content,
            allowTextEnlarge: Boolean(props.allowTextEnlarge)
        })
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('text', {
    component: DefaultTypedMessageTextRenderer,
    id: 'mask.text',
    priority: 0
});
const DefaultTypedMessageAnchorRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageAnchorRenderer(props) {
    const { content , href  } = props.message;
    const deconstructed = (0,Payload/* deconstructPayload */.Q)(content, null);
    return renderWithMetadata(props, /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "span",
        variant: "body1",
        "data-testid": "anchor_payload",
        children: deconstructed.ok ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PayloadReplacer, {
            payload: href
        }) : // TODO: shrink link size
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            color: "primary",
            target: "_blank",
            rel: "noopener noreferrer",
            href: href,
            children: content
        })
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('x-anchor', {
    component: DefaultTypedMessageAnchorRenderer,
    id: 'mask.anchor',
    priority: 0
});
const DefaultTypedMessageImageRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageImageRenderer(props) {
    const { image , width , height  } = props.message;
    return renderWithMetadata(props, /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body1",
        "data-testid": "image_payload",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
            src: image,
            width: width,
            height: height
        })
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('image', {
    component: DefaultTypedMessageImageRenderer,
    id: 'mask.image',
    priority: 0
});
const DefaultTypedMessageTupleRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageTupleRenderer(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    try {
        JSON.stringify(props.message.items);
    } catch (error) {
        if (error instanceof Error && error.message.includes('circular structure')) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: t('typed_message_can_not_be_rendered')
            }));
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.message.items.map((x, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageRenderer, {
                ...props,
                message: x
            }, index)
        )
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('tuple', {
    component: DefaultTypedMessageTupleRenderer,
    id: 'mask.compound',
    priority: 0
});
const DefaultTypedMessageEmptyRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageEmptyRenderer(props) {
    return renderWithMetadata(props, null);
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('empty', {
    component: DefaultTypedMessageEmptyRenderer,
    id: 'mask.empty',
    priority: 0
});
const DefaultTypedMessageUnknownRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageUnknownRenderer(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    return renderWithMetadata(props, /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        color: "textPrimary",
        children: [
            t('unknown'),
            " ",
            t('message')
        ]
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('unknown', {
    component: DefaultTypedMessageUnknownRenderer,
    id: 'mask.unknown',
    priority: 0
});
const DefaultTypedMessageSuspendedRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageSuspendedRenderer(props) {
    const { promise  } = props.message;
    const { loading , error , value  } = (0,useAsync/* default */.Z)(()=>promise
    , [
        promise
    ]);
    return renderWithMetadata(props, loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageTextRenderer, {
        ...props,
        message: (0,shared_base_src/* makeTypedMessageText */.P)('Loading...')
    }) : error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageTextRenderer, {
        ...props,
        message: (0,shared_base_src/* makeTypedMessageText */.P)('Error!')
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageRenderer, {
        ...props,
        message: value
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('promise', {
    component: DefaultTypedMessageSuspendedRenderer,
    id: 'mask.suspended',
    priority: 0
});
function DefaultMetadataRender() {
    return null;
}
function renderWithMetadata(props, jsx) {
    var ref, ref1;
    const Before = ((ref = props.metadataRenderer) === null || ref === void 0 ? void 0 : ref.before) || DefaultMetadataRender;
    const After = ((ref1 = props.metadataRenderer) === null || ref1 === void 0 ? void 0 : ref1.after) || DefaultMetadataRender;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Before, {
                metadata: props.message.meta,
                message: props.message
            }),
            props.afterPreviousMetadata,
            jsx,
            props.beforeLatterMetadata,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(After, {
                metadata: props.message.meta,
                message: props.message
            })
        ]
    }));
}
const RenderText = /*#__PURE__*/ (0,react.memo)(function RenderText(props) {
    return(/*#__PURE__*/ (0,react.createElement)(react.Fragment, {}, ...parseText(props.text, props.allowTextEnlarge)));
});
const TypedMessageRenderer_useStyle = (0,src/* makeStyles */.ZL)()((theme, fontSize)=>({
        link: {
            color: theme.palette.primary.main
        },
        text: {
            fontSize: Number(fontSize) + 'rem'
        }
    })
);
const ParseTextLink = /*#__PURE__*/ (0,react.memo)(function ParseTextLink({ link , text , fontSize  }) {
    const { classes  } = TypedMessageRenderer_useStyle(fontSize);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        className: classnames_default()(classes.text, classes.link),
        target: "_blank",
        rel: "noopener noreferrer",
        href: link,
        children: text
    }, link));
});
const ParseText = /*#__PURE__*/ (0,react.memo)(function ParseText({ text , fontSize  }) {
    const { classes  } = TypedMessageRenderer_useStyle(fontSize);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        className: classes.text,
        children: text
    }));
});
function parseText(string, allowTextEnlarge) {
    const links = node/* default.list */.Z.list(string);
    let current = string;
    const fontSize = allowTextEnlarge && Array.from(current).length < 45 ? 1.5 : allowTextEnlarge && Array.from(current).length < 85 ? 1.2 : 1;
    const result = [];
    while(current.length){
        const search1 = current.indexOf('\n');
        const search2 = links[0] ? current.indexOf(links[0].string) : -1;
        // ? if rest is normal
        if (search1 === -1 && search2 === -1) {
            result.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(ParseText, {
                text: current,
                fontSize: fontSize
            }));
            break;
        }
        // ? if rest have \n but no links
        if (search1 < search2 && search1 !== -1 || search2 === -1) {
            result.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(ParseText, {
                text: current.substring(0, search1),
                fontSize: fontSize
            }), /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}, current));
            current = current.substring(search1 + 1);
        }
        // ? if rest have links but no \n
        if (search2 < search1 && search2 !== -1 || search1 === -1) {
            let link = links[0].string;
            if (!links[0].protocol) link = 'http://' + link;
            result.push(/*#__PURE__*/ (0,jsx_runtime.jsx)(ParseText, {
                text: current.substring(0, search2),
                fontSize: fontSize
            }), /*#__PURE__*/ (0,jsx_runtime.jsx)(ParseTextLink, {
                link: link,
                text: links[0].string,
                fontSize: fontSize
            }));
            current = current.substring(search2 + links[0].string.length);
            links.shift();
        }
    }
    return result;
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7708);





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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
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
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(52350);
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

/***/ 18014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qc": () => (/* binding */ RedPacketMetadataReader),
  "st": () => (/* binding */ RedPacketNftMetadataReader),
  "vP": () => (/* binding */ renderWithRedPacketMetadata),
  "Ay": () => (/* binding */ renderWithRedPacketNftMetadata)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(99850);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address","decimals","name","symbol"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","total"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema-nft.json
const schema_nft_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"id":{"type":"string","title":"id"},"txid":{"type":"string","title":"txid"},"duration":{"type":"number","title":"duration"},"message":{"type":"string","title":"message"},"senderName":{"type":"string","title":"senderName"},"contractName":{"type":"string","title":"contractName"},"contractAddress":{"type":"string","title":"contractAddress"},"privateKey":{"type":"string","title":"privateKey"},"chainId":{"type":"number","title":"chainId"},"contractTokenURI":{"type":"string","title":"contractTokenURI"}},"required":["id","duration","message","senderName","contractName","contractAddress","privateKey","chainId","contractTokenURI"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts




const RedPacketMetadataReader = (0,src/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,src/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);
const RedPacketNftMetadataReader = (0,src/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketNftMetaKey */.HA, schema_nft_namespaceObject);
const renderWithRedPacketNftMetadata = (0,src/* createRenderWithMetadata */.mC)(RedPacketNftMetadataReader);


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




/***/ }),

/***/ 14218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7282);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3749);



function pasteImageToCompositionDefault(hasSucceed) {
    return async function(url, { recover , relatedTextPayload  }) {
        const image = typeof url === 'string' ? await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .downloadUrl */ .GR)(url) : url;
        await (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .untilDocumentReady */ .Hx)();
        if (relatedTextPayload) {
            var ref, ref1;
            (ref = _ui__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.automation.nativeCompositionDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.appendText) === null || ref1 === void 0 ? void 0 : ref1.call(ref, relatedTextPayload, {
                recover: false
            });
            await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .delay */ .gw)(500);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js
var format = __webpack_require__(20478);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(6842);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js
var TextField = __webpack_require__(95763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
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
var Close = __webpack_require__(52350);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(28615);
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

/***/ 57625:
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
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(91719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(20235);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx + 1 modules
var TypedMessageRenderer = __webpack_require__(74008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(54462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(52350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/colors/green.js
var green = __webpack_require__(59295);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(51155);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AdditionalPostContent.tsx











var AdditionalIcon;
(function(AdditionalIcon) {
    AdditionalIcon["check"] = "check";
    AdditionalIcon["error"] = "error";
})(AdditionalIcon || (AdditionalIcon = {}));
const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useStyles(), props1);
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
        if (typeof message === 'string') return (0,src/* makeTypedMessageText */.P)(message);
        if (typeof message === 'undefined') return (0,src/* makeTypedMessageText */.P)('');
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TypedMessageRenderer/* DefaultTypedMessageRenderer */.sF, {
                    ...props1,
                    message: TypedMessage,
                    allowTextEnlarge: true
                })
            }) : null
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(33351);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(57787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(60462);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(8882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/List/List.js
var List = __webpack_require__(26271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(42042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(17060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(58639);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(52867);
;// CONCATENATED MODULE: ./src/components/shared/SelectProfileUI/ProfileInList.tsx






const useStyle = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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








const SelectProfileUI_useStyles = (0,theme_src/* makeStyles */.ZL)()({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(SelectProfileUI_useStyles(), props);
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







const SelectPeopleDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(SelectPeopleDialog_useStyles(), props);
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
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(90795);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx



function wrapAuthorDifferentMessage(author, postBy, jsx) {
    if (!(author === null || author === void 0 ? void 0 : author.userId)) return jsx;
    if ((author === null || author === void 0 ? void 0 : author.isUnknown) || (postBy === null || postBy === void 0 ? void 0 : postBy.isUnknown)) return jsx;
    if (src/* Identifier.equals */.xb.equals(author, postBy)) return jsx;
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SnackbarContent/SnackbarContent.js
var SnackbarContent = __webpack_require__(20978);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(69825);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(64506);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.2_03eb9a7115720fddaa34be5f9d89cc8e/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(68532);
;// CONCATENATED MODULE: ./src/plugins/MaskPluginWrapper.tsx











const MaskPluginWrapper_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.secondaryDivider}`,
            cursor: 'default',
            ...(0,base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? {
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
            color: theme_src/* MaskColorVar.twitterButtonText */.ZN.twitterButtonText,
            '&,&:hover': {
                background: theme_src/* MaskColorVar.twitterButton */.ZN.twitterButton
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
            color: theme_src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            children: publisher
        });
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: theme_src/* MaskColorVar.textSecondary */.ZN.textSecondary,
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
    const message = (0,src/* extractTextFromTypedMessage */.Vc)(plugin_infra_src/* usePostInfoDetails.rawMessage */.H9.rawMessage());
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

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx












const PluginRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (x)=>x.DecryptedInspector
, MaskPostExtraPluginWrapper);
function PluginRendererWithSuggestion(props) {
    const a = useDisabledPluginSuggestionFromMeta(props.metadata || new Map());
    const b = useDisabledPluginSuggestionFromPost((0,src/* extractTextFromTypedMessage */.Vc)(props.message), []);
    const suggest = Array.from(new Set(a.concat(b)));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PossiblePluginSuggestionUI, {
                plugins: suggest
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRenderer, {
                ...props
            })
        ]
    }));
}
const useSuccessStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useSuccessStyles(), props);
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
                metadataRenderer: {
                    after: PluginRendererWithSuggestion
                },
                headerActions: wrapAuthorDifferentMessage(author, postedBy, rightActions),
                title: t('decrypted_postbox_title'),
                message: content
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(3087);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(61292);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(9853);
;// CONCATENATED MODULE: ./src/components/DebugModeUI/DebugList.tsx


function F({ content , hint  }) {
    return String(content).length > 50 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("summary", {
                children: [
                    hint,
                    ": "
                ]
            }),
            String(content)
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                style: {
                    userSelect: 'none',
                    opacity: 0.6
                },
                children: [
                    hint,
                    ": "
                ]
            }),
            String(content)
        ]
    });
}
function DebugList(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            wordBreak: 'break-all',
            padding: '0 1em',
            margin: 0,
            background: 'black',
            color: 'white'
        },
        children: props.items.map((x, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: Array.isArray(x) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(F, {
                    hint: x[0],
                    content: x[1]
                }, x[0]) : x
            }, key)
        )
    }));
}

// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(17047);
// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(6842);
;// CONCATENATED MODULE: ./src/components/DebugModeUI/PostHashDialog.tsx















function PostHashDialog(props) {
    const { open  } = props;
    const map = new Map();
    for (const [id, magicCode1, fingerprint1] of props.hashMap){
        map.set(id, [
            magicCode1,
            fingerprint1
        ]);
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        onClose: props.onClose,
        open: open,
        title: "Troubleshoot",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                    children: "Appear in this list is not related to if you have shared this post to someone or not."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                    children: "The \"Magic Code\" and the Fingerprint should be the same on your friend's Mask and your Mask."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                    children: "If Fingerprint is not the same, it means at least one of Mask doesn't get the correct key of the receiver."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                    children: "If MagicCode is not the same, it means at least one of Mask calculate the post hash wrong."
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    dense: true,
                    children: props.friends.map((one)=>{
                        const [magicCode, fingerprint] = map.get(one.identifier.toText()) || [
                            'Unknown',
                            'Unknown'
                        ];
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* Avatar */.q, {
                                        person: one
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                    primary: one.nickname || one.identifier.userId,
                                    secondary: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "Magic code: ",
                                            magicCode || 'Unknown',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
                                            "Their fingerprint: ",
                                            fingerprint
                                        ]
                                    })
                                })
                            ]
                        }, one.identifier.toText()));
                    })
                })
            ]
        })
    }));
}
function DebugModeUI_PostHashDialog(props) {
    const [open, setOpen] = (0,react.useState)(false);
    const payload = (0,Payload/* deconstructPayload */.Q)(props.post, null);
    const friends = (0,useActivatedUI/* useFriendsList */.hg)();
    const { value: hashMap = []  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!payload.ok) return [];
        const ivID = new src/* PostIVIdentifier */.bb(props.network, payload.val.iv);
        return service/* default.Crypto.debugShowAllPossibleHashForPost */.ZP.Crypto.debugShowAllPossibleHashForPost(ivID, payload.val.version);
    }, [
        props.post
    ]);
    const shouldHide = payload.map((x)=>x.version === -38 && !!x.sharedPublic
    ).unwrapOr(true);
    if (shouldHide) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "outlined",
                onClick: ()=>setOpen(true)
                ,
                children: "My friend can't see this post even I shared with them!"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostHashDialog, {
                hashMap: hashMap,
                friends: friends,
                open: open,
                onClose: ()=>setOpen(false)
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostDebug.tsx









function DecryptedPostDebug(props) {
    const postBy = usePostInfo/* usePostInfoDetails.author */.H9.author();
    const postContent = usePostInfo/* usePostInfoDetails.postContent */.H9.postContent();
    const payloadResult = (0,react.useMemo)(()=>(0,Payload/* deconstructPayload */.Q)(postContent)
    , [
        postContent
    ]);
    const setting = (0,shared_src/* useValueRef */.E)(settings/* debugModeSetting */.vv);
    const isDebugging = (0,umd.isEnvironment)(umd.Environment.ManifestOptions) ? true : setting;
    const { debugHash , decryptedResult , whoAmI  } = props;
    if (!isDebugging) return null;
    const postByMyself = /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugModeUI_PostHashDialog, {
        network: postBy.network,
        post: postContent
    });
    if (payloadResult.err) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DebugList, {
        items: [
            postBy.equals(whoAmI) ? postByMyself : [
                'Hash of this post',
                debugHash
            ],
            [
                'Payload Error',
                payloadResult.val.message
            ], 
        ]
    }));
    const payload = payloadResult.val;
    const ownersAESKeyEncrypted = payload.version === -38 ? payload.AESKeyEncrypted : payload.ownersAESKeyEncrypted;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DebugList, {
        items: [
            postBy.equals(whoAmI) ? postByMyself : [
                'Hash of this post',
                debugHash
            ],
            [
                'Decrypt reason',
                decryptedResult && decryptedResult.type !== 'error' ? decryptedResult.through.join(',') : 'Unknown', 
            ],
            [
                'Version',
                payload.version
            ],
            [
                'ownersAESKeyEncrypted',
                ownersAESKeyEncrypted
            ],
            [
                'IV',
                payload.iv
            ],
            [
                'EncryptedText',
                payload.encryptedText
            ],
            [
                'Signature',
                payload.signature
            ],
            [
                'sharedPublic (v38)',
                payload.sharedPublic
            ],
            [
                'authorPublicKey (v38)',
                payload.authorPublicKey
            ], 
        ]
    }));
}

// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(61452);
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
    const postBy = (0,theme_src.or)(authorInPayload, currentPostBy);
    const postMetadataImages = usePostInfo/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const Success = props.successComponent || DecryptPostSuccess;
    const Awaiting = props.waitingComponent || DecryptPostAwaiting;
    const Failed = props.failedComponent || DecryptPostFailed;
    const requestAppendRecipientsWrapped = (0,react.useMemo)(()=>{
        if (!postBy.equals(whoAmI)) return undefined;
        if (!props.requestAppendRecipients) return undefined;
        return async (people)=>{
            await props.requestAppendRecipients(people);
            await (0,src/* delay */.gw)(1500);
        };
    }, [
        props.requestAppendRecipients,
        postBy,
        whoAmI
    ]);
    // #region Debug info
    const [debugHash, setDebugHash] = (0,react.useState)('Unknown');
    // #endregion
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
                if (status.type === 'debug') {
                    switch(status.debug){
                        case 'debug_finding_hash':
                            setDebugHash(status.hash.join('-'));
                            break;
                        default:
                            (0,esm/* unreachable */.t1)(status.debug);
                    }
                } else refreshProgress(status);
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
        onDecrypted((0,src/* makeTypedMessageTuple */.Zw)([
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
        const render = ()=>{
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
        };
        const rendered = render();
        if (!rendered) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                rendered,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptedPostDebug, {
                    debugHash: debugHash,
                    whoAmI: whoAmI,
                    decryptedResult: progress.type === 'progress' ? null : progress
                })
            ]
        }));
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

// EXTERNAL MODULE: ./src/social-network/utils/text-payload-ui.ts
var text_payload_ui = __webpack_require__(27008);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostInspector.tsx
















const PluginHooksRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useNotMinimalMode */.Pz.visibility.useNotMinimalMode, (plugin)=>plugin.PostInspector
, MaskPostExtraPluginWrapper);
function PostInspector(props) {
    var ref;
    const postBy = usePostInfo/* usePostInfoDetails.author */.H9.author();
    const postContent = usePostInfo/* usePostInfoDetails.postContent */.H9.postContent();
    const encryptedPost = usePostInfo/* usePostInfoDetails.containingMaskPayload */.H9.containingMaskPayload();
    const postId = usePostInfo/* usePostInfoDetails.identifier */.H9.identifier();
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
    var ref1;
    const debugInfo = isDebugging ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugList, {
        items: [
            [
                'Post by',
                postBy.userId
            ],
            [
                'Who am I',
                whoAmI ? `Nickname ${whoAmI.nickname || 'unknown'}, UserID ${whoAmI.identifier.userId}` : 'Unknown', 
            ],
            [
                'My fingerprint',
                (ref1 = whoAmI === null || whoAmI === void 0 ? void 0 : (ref = whoAmI.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint) !== null && ref1 !== void 0 ? ref1 : 'Unknown'
            ],
            [
                'Post ID',
                (postId === null || postId === void 0 ? void 0 : postId.toText()) || 'Unknown'
            ],
            [
                'Post Content',
                postContent
            ],
            [
                'Post Attachment Links',
                JSON.stringify(postImages)
            ], 
        ]
    }) : null;
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
            whoAmI: whoAmI ? whoAmI.identifier : src/* ProfileIdentifier.unknown */.WO.unknown
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
                debugInfo,
                props.slotPosition !== 'before' && slot
            ]
        }));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostInspector.tsx







function injectPostInspectorDefault(config = {}, additionalPropsToPostInspector = ()=>({})
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({})) {
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
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28615);




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
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86716);
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
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(45181);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/utils/resolveFacebookLink.ts

function resolveFacebookLink(link, id) {
    return id === base/* FACEBOOK_ID */.Iz ? link.replace(/\?fbclid=[\S\s]*#/, '#') : link;
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
            return (0,src/* extractTextFromTypedMessage */.Vc)(opt.rawMessage.getCurrentValue()).unwrapOr('');
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
        const transformedPostContent = new umd.ValueRef((0,src/* makeTypedMessageTupleFromList */.n_)(), src/* isTypedMessageEqual */.Hz);
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
    const postMessage = new umd.ValueRef((0,src/* makeTypedMessageTupleFromList */.n_)());
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

/***/ 35675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/70c03ec1bb4575d55722.png";

/***/ }),

/***/ 18077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/413dc2cdada95d3137f6.png";

/***/ })

}]);