"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1256.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1256,3679],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1207,1951],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1207.js

/***/ 44612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LoadingButton_LoadingButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/utils/capitalize.js
var capitalize = __webpack_require__(85568);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(51765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(75477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(19119);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js


const _excluded = ["children", "disabled", "loading", "loadingIndicator", "loadingPosition"];












const useUtilityClasses = styleProps => {
  const {
    loading,
    loadingPosition,
    classes
  } = styleProps;
  const slots = {
    root: ['root', loading && 'loading'],
    startIcon: [loading && `startIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    endIcon: [loading && `endIconLoading${(0,capitalize/* default */.Z)(loadingPosition)}`],
    loadingIndicator: ['loadingIndicator', loading && `loadingIndicator${(0,capitalize/* default */.Z)(loadingPosition)}`]
  };
  const composedClasses = (0,composeClasses/* default */.Z)(slots, getLoadingButtonUtilityClass, classes);
  return (0,esm_extends/* default */.Z)({}, classes, composedClasses);
}; // TODO use `import { rootShouldForwardProp } from '../styles/styled';` once move to core


const rootShouldForwardProp = prop => prop !== 'styleProps' && prop !== 'theme' && prop !== 'sx' && prop !== 'as' && prop !== 'classes';

const LoadingButtonRoot = (0,styled/* default */.ZP)(Button/* default */.Z, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiLoadingButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root, styles.startIconLoadingStart && {
      [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}`]: styles.startIconLoadingStart
    }, styles.endIconLoadingEnd && {
      [`& .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: styles.endIconLoadingEnd
    }];
  }
})(({
  styleProps,
  theme
}) => (0,esm_extends/* default */.Z)({
  [`& .${LoadingButton_loadingButtonClasses.startIconLoadingStart}, & .${LoadingButton_loadingButtonClasses.endIconLoadingEnd}`]: {
    transition: theme.transitions.create(['opacity'], {
      duration: theme.transitions.duration.short
    }),
    opacity: 0
  }
}, styleProps.loadingPosition === 'center' && {
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color'], {
    duration: theme.transitions.duration.short
  }),
  [`&.${LoadingButton_loadingButtonClasses.loading}`]: {
    color: 'transparent'
  }
}));
const LoadingButtonLoadingIndicator = (0,styled/* default */.ZP)('div', {
  name: 'MuiLoadingButton',
  slot: 'LoadingIndicator',
  overridesResolver: (props, styles) => {
    const {
      styleProps
    } = props;
    return [styles.loadingIndicator, styles[`loadingIndicator${(0,capitalize/* default */.Z)(styleProps.loadingPosition)}`]];
  }
})(({
  theme,
  styleProps
}) => (0,esm_extends/* default */.Z)({
  position: 'absolute',
  visibility: 'visible',
  display: 'flex'
}, styleProps.loadingPosition === 'start' && {
  left: 14
}, styleProps.loadingPosition === 'center' && {
  left: '50%',
  transform: 'translate(-50%)',
  color: theme.palette.action.disabled
}, styleProps.loadingPosition === 'end' && {
  right: 14
}));

const LoadingIndicator = /*#__PURE__*/(0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
  color: "inherit",
  size: 16
});

const LoadingButton = /*#__PURE__*/react.forwardRef(function LoadingButton(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiLoadingButton'
  });

  const {
    children,
    disabled = false,
    loading = false,
    loadingIndicator = LoadingIndicator,
    loadingPosition = 'center'
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const styleProps = (0,esm_extends/* default */.Z)({}, props, {
    disabled,
    loading,
    loadingIndicator,
    loadingPosition
  });

  const classes = useUtilityClasses(styleProps);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(LoadingButtonRoot, (0,esm_extends/* default */.Z)({
    disabled: disabled || loading,
    ref: ref
  }, other, {
    classes: classes,
    styleProps: styleProps,
    children: [loading && /*#__PURE__*/(0,jsx_runtime.jsx)(LoadingButtonLoadingIndicator, {
      className: classes.loadingIndicator,
      styleProps: styleProps,
      children: loadingIndicator
    }), children]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const LoadingButton_LoadingButton = (LoadingButton);

/***/ }),

/***/ 50269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ Composition)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts + 1 modules
var helpers = __webpack_require__(59239);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(93569);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(44612);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Send.js
var Send = __webpack_require__(19020);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
// EXTERNAL MODULE: ./src/plugin-infra/I18NFieldRender.tsx
var I18NFieldRender = __webpack_require__(88892);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(90254);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(82611);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Done.js
var Done = __webpack_require__(57448);
;// CONCATENATED MODULE: ./src/components/shared/SelectRecipients/ClickableChip.tsx





const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        marginRight: 6,
        marginBottom: 6,
        cursor: 'pointer'
    },
    icon: {
        backgroundColor: 'transparent !important'
    },
    label: {
        display: 'flex'
    }
});
function ClickableChip(props) {
    var ref, ref1;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        avatar: props.checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
            className: classes.icon
        }) : undefined,
        color: props.checked ? 'primary' : 'default',
        ...props,
        classes: {
            ...props.classes,
            root: classnames_default()(classes.root, (ref = props.classes) === null || ref === void 0 ? void 0 : ref.root),
            label: classnames_default()(classes.label, (ref1 = props.classes) === null || ref1 === void 0 ? void 0 : ref1.label)
        }
    }));
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/PluginEntryRender.tsx










const PluginEntryRender_useStyles = (0,src/* makeStyles */.ZL)()({
    sup: {
        paddingLeft: 2
    }
});
const PluginEntryRender = /*#__PURE__*/ (0,react.memo)(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const [trackPluginRef] = useSetPluginEntryRenderRef(ref);
    const pluginField = (0,I18NFieldRender/* usePluginI18NField */.e)();
    const operatingSupportedChainMapping = (0,plugin_infra_src/* useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet */.mF)();
    const result = [
        ...(0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)()
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
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.ErrorBoundary, {
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
function useSetPluginEntryRenderRef(ref) {
    const pluginRefs = (0,react.useRef)({
    });
    (0,react.useImperativeHandle)(ref, ()=>({
            openPlugin: function openPlugin(id, tryTimes = 4) {
                const ref1 = pluginRefs.current[id];
                if (ref1) return ref1.open();
                // If the plugin has not been loaded yet, we wait for at most 2000ms
                if (tryTimes === 0) return;
                setTimeout(()=>openPlugin(id, tryTimes - 1)
                , 500);
            }
        })
    , []);
    const trackPluginRef = (pluginID)=>(ref1)=>{
            pluginRefs.current = {
                ...pluginRefs.current,
                [pluginID]: ref1
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
                /*#__PURE__*/ (0,jsx_runtime.jsx)(I18NFieldRender/* PluginI18NFieldRender */.K, {
                    field: label,
                    pluginID: id
                }),
                unstable && /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                    className: classes.sup,
                    children: "(Beta)"
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
                /*#__PURE__*/ (0,jsx_runtime.jsx)(I18NFieldRender/* PluginI18NFieldRender */.K, {
                    field: label,
                    pluginID: id
                }),
                unstable && /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                    className: classes.sup,
                    children: "(Beta)"
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
var shared_base_src = __webpack_require__(28532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(32027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(64556);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(47307);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/BadgeRenderer.tsx




function BadgeRenderer({ meta , onDeleteMeta , readonly  }) {
    const plugins = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)();
    const i18n = (0,I18NFieldRender/* usePluginI18NField */.e)();
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
                    tooltip: `Provided by plugin "${i18n(plugin.ID, plugin.name)}"`
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        sx: {
            marginRight: 1,
            marginTop: 1,
            display: 'inline-block'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
            title: title,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    disabled: readonly,
                    onDelete: onDelete,
                    label: children
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
    const [value, setValue] = (0,react.useState)((_defaultValue = props.defaultValue) !== null && _defaultValue !== void 0 ? _defaultValue : emptyMessage);
    const currentValue = (0,react.useRef)(value);
    currentValue.current = value;
    const setMessage = (0,react.useCallback)((value1)=>{
        if ((0,shared_base_src/* isTypedMessageEqual */.Hz)(currentValue.current, value1)) return;
        setValue(value1);
        currentValue.current = value1;
        onChange === null || onChange === void 0 ? void 0 : onChange(value1);
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
        setMessage((0,typed_message/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.delete(meta)
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
                setMessage((0,typed_message/* editTypedMessageMeta */.r1)(currentValue.current, (map)=>map.set(meta, data)
                ));
            },
            dropMetadata: deleteMetaID
        };
    }, [
        setMessage,
        deleteMetaID
    ]);
    if (!(0,shared_base_src/* isTypedMessageText */.Rz)(value)) {
        const reset = ()=>setAsText('')
        ;
        // We don't have an rich text editor yet.
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            severity: "error",
            action: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                onClick: reset,
                children: "Reset editor"
            }),
            children: "Only TypedMessageText is supported currently."
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BadgeRenderer, {
                readonly: !!readonly,
                meta: value.meta,
                onDeleteMeta: deleteMetaID
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                readOnly: readonly,
                classes: {
                    root: classes.root,
                    input: classes.input
                },
                autoFocus: props.autoFocus,
                value: value.content,
                onChange: setAsText,
                fullWidth: true,
                multiline: true,
                placeholder: t('post_dialog__placeholder')
            })
        ]
    }));
}));

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
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

// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(45170);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.4.6/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(9614);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-highlight-words@0.17.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-highlight-words/dist/main.js
var main = __webpack_require__(42789);
var main_default = /*#__PURE__*/__webpack_require__.n(main);
// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(98332);
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
    hightlighted: {
        backgroundColor: 'inherit',
        color: 'inherit',
        fontWeight: 'bold'
    }
});
function ProfileInList(props) {
    var ref, ref1, ref2;
    const classes = (0,shared_src.useStylesExtends)(useStyle(), props);
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
                    highlightClassName: classes.hightlighted,
                    searchWords: [
                        (_search = props.search) !== null && _search !== void 0 ? _search : ''
                    ],
                    autoEscape: true,
                    textToHighlight: name
                }),
                secondary: /*#__PURE__*/ (0,jsx_runtime.jsx)((main_default()), {
                    highlightClassName: classes.hightlighted,
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
    const classes = (0,shared_src.useStylesExtends)(SelectRecipientsDialog_useStyles(), props);
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
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileInList, {
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
                            }, item.identifier.toText()));
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
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                }),
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
                onDeselect: (item)=>onSetSelected((0,lodash.difference)(selected, [
                        item
                    ]))
            })
        ]
    }));
}
SelectRecipientsUI.defaultProps = {
    frozenSelected: []
};

// EXTERNAL MODULE: ./src/components/CompositionDialog/CompositionContext.tsx
var CompositionContext = __webpack_require__(61754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(26424);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(9011);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(92070);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(90874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Autocomplete/Autocomplete.js + 1 modules
var Autocomplete = __webpack_require__(11130);
// EXTERNAL MODULE: ./src/utils/shadow-root/ShadowRootComponents.tsx
var ShadowRootComponents = __webpack_require__(33465);
;// CONCATENATED MODULE: ./src/components/shared/DebugMetadataInspector.tsx








function DebugMetadataInspector(props) {
    const { meta , onExit , onDeleteMeta , onNewMeta  } = props;
    const [field, setField] = (0,react.useState)('');
    const [content, setContent] = (0,react.useState)('{}');
    const knownMetadata = [
        ...typed_message/* metadataSchemaStoreReadonly.keys */.fG.keys()
    ];
    const result = isValid(content);
    const isInvalid = result !== true;
    const editor = onNewMeta ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        gutterBottom: true,
                        children: "Add new metadata or replace existing metadata"
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
                                value: content,
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
                        onClick: ()=>onNewMeta(field, JSON.parse(content))
                        ,
                        size: "small",
                        variant: "contained",
                        disabled: isInvalid || (field === null || field === void 0 ? void 0 : field.length) <= 3,
                        children: "Put metadata"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>{
                            setField('');
                            setContent('{}');
                        },
                        size: "small",
                        variant: "text",
                        children: "Clear"
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
                ].map(([key, content1])=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionSummary/* default */.Z, {
                                expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                                }),
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
                                                    setContent(JSON.stringify(content1, undefined, 4));
                                                },
                                                children: "Edit"
                                            }) : null,
                                            onDeleteMeta ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                variant: "text",
                                                size: "small",
                                                color: "secondary",
                                                onClick: ()=>onDeleteMeta(key)
                                                ,
                                                children: "Delete"
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
                                    children: JSON.stringify(content1, undefined, 4),
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
        const validator = typed_message/* metadataSchemaStoreReadonly.get */.fG.get(field);
        if (validator) {
            const valid = (0,typed_message/* isDataMatchJSONSchema */.Jp)(JSON.parse(newData), validator);
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
            marginBottom: `10px !important`
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
            marginLeft: `12px !important`
        }
    }
});
const CompositionDialogUI = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
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
            var ref1;
            (ref1 = Editor.current) === null || ref1 === void 0 ? void 0 : ref1.reset();
            setEncryptionKind('Everyone');
            setRecipients([]);
            // Don't clean up the image/text selection across different encryption.
            // setEncoding('text')
            setSending(false);
        });
    }, []);
    (0,react.useImperativeHandle)(ref, ()=>{
        return {
            setMessage: (msg)=>{
                if (Editor.current) Editor.current.value = msg;
            },
            setEncryptionKind,
            startPlugin: (id)=>{
                var ref2;
                return (ref2 = PluginEntry.current) === null || ref2 === void 0 ? void 0 : ref2.openPlugin(id);
            },
            reset
        };
    }, [
        reset
    ]);
    const context = (0,react.useMemo)(()=>{
        return {
            attachMetadata: (meta, data)=>{
                var ref3;
                return (ref3 = Editor.current) === null || ref3 === void 0 ? void 0 : ref3.attachMetadata(meta, data);
            },
            dropMetadata: (meta)=>{
                var ref4;
                return (ref4 = Editor.current) === null || ref4 === void 0 ? void 0 : ref4.dropMetadata(meta);
            }
        };
    }, []);
    const MoreOptions = [
        imagePayloadVisible && /*#__PURE__*/ (0,jsx_runtime.jsx)(ClickableChip, {
            checked: imagePayloadSelected,
            label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    t('post_dialog__image_payload'),
                    utils/* Flags.image_payload_marked_as_beta */.vU.image_payload_marked_as_beta && /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                        className: classes.sup,
                        children: "(Beta)"
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
    const submitAvailable = currentPostSize > 0 && currentPostSize < ((_maxLength = props.maxLength) !== null && _maxLength !== void 0 ? _maxLength : Infinity);
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
        recipients
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CompositionContext/* CompositionContext.Provider */.N.Provider, {
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
                            var ref5;
                            (0,react.startTransition)(()=>{
                                var ref6;
                                return (ref6 = props.onChange) === null || ref6 === void 0 ? void 0 : ref6.call(props, message);
                            });
                            updatePostSize(((ref5 = Editor.current) === null || ref5 === void 0 ? void 0 : ref5.estimatedLength) || 0);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        children: [
                            "Plugins ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("sup", {
                                children: "(Experimental)"
                            })
                        ]
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
                        children: "Enable auto paste"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        disabled: !submitAvailable,
                        loading: sending,
                        loadingPosition: "start",
                        variant: "contained",
                        onClick: onSubmit,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {
                        }),
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
    const isDebug = (0,utils/* useValueRef */.E)(settings/* debugModeSetting */.vv);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
;// CONCATENATED MODULE: ./src/components/CompositionDialog/useCompositionClipboardRequest.tsx



function useCompositionClipboardRequest(requireClipboardPermission) {
    const { retry , value: hasClipboardPermission = true  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!requireClipboardPermission) return true;
        return service/* default.Helper.queryPermission */.ZP.Helper.queryPermission({
            permissions: [
                'clipboardRead'
            ]
        });
    }, [
        requireClipboardPermission
    ]);
    const onRequestClipboardPermission = (0,react.useCallback)(()=>{
        if (!requireClipboardPermission) return;
        service/* default.Helper.requestBrowserPermission */.ZP.Helper.requestBrowserPermission({
            permissions: [
                'clipboardRead'
            ]
        }).finally(retry);
    }, [
        requireClipboardPermission,
        retry
    ]);
    return {
        requireClipboardPermission,
        hasClipboardPermission,
        onRequestClipboardPermission
    };
}

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var base = __webpack_require__(14840);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+stego-js@0.11.1-20201027083223-8ab41be/node_modules/@dimensiondev/stego-js/esm/grayscale.js + 1 modules
var grayscale = __webpack_require__(45930);
;// CONCATENATED MODULE: ./src/resources/image-payload/index.ts
const ImagePayloadURLs = {
    v1: new URL(/* asset import */ __webpack_require__(58289), __webpack_require__.b).toString(),
    v2: new URL(/* asset import */ __webpack_require__(35675), __webpack_require__.b).toString(),
    v3: new URL(/* asset import */ __webpack_require__(92014), __webpack_require__.b).toString(),
    v4: new URL(/* asset import */ __webpack_require__(26148), __webpack_require__.b).toString(),
    okb: new URL(/* asset import */ __webpack_require__(13116), __webpack_require__.b).toString(),
    dai: new URL(/* asset import */ __webpack_require__(78123), __webpack_require__.b).toString(),
    eth: new URL(/* asset import */ __webpack_require__(18077), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(96578);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/SteganographyTextPayload.ts






async function SteganographyTextPayload(template, text) {
    var ref, ref1, ref2;
    const pass = ((ref = social_network.activatedSocialNetworkUI.configuration.steganography) === null || ref === void 0 ? void 0 : (ref1 = ref.password) === null || ref1 === void 0 ? void 0 : ref1.call(ref)) || 'mask';
    const blankImage = await (0,utils_utils/* downloadUrl */.GR)(ImagePayloadURLs[template]).then(kit_esm/* blobToArrayBuffer */.vZ);
    var ref3;
    const secretImage = new Uint8Array((0,kit_esm/* decodeArrayBuffer */.xe)(await service/* default.Steganography.encodeImage */.ZP.Steganography.encodeImage(new Uint8Array(blankImage), {
        text,
        pass,
        template,
        grayscaleAlgorithm: (ref3 = (ref2 = social_network.activatedSocialNetworkUI.configuration.steganography) === null || ref2 === void 0 ? void 0 : ref2.grayscaleAlgorithm) !== null && ref3 !== void 0 ? ref3 : grayscale/* GrayscaleAlgorithm.NONE */.Ft.NONE
    })));
    const blob = new Blob([
        secretImage
    ], {
        type: 'image/png'
    });
    return blob;
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/useSubmit.ts










function useSubmit(onClose) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const whoAmI = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const onRequestPost = (0,react.useCallback)(async (info)=>{
        const { content , encode , target  } = info;
        var ref;
        const [encrypted, token] = await service/* default.Crypto.encryptTo */.ZP.Crypto.encryptTo(content, target === 'Everyone' ? [] : target.map((x)=>x.identifier
        ), (ref = whoAmI === null || whoAmI === void 0 ? void 0 : whoAmI.identifier) !== null && ref !== void 0 ? ref : shared_base_src/* ProfileIdentifier.unknown */.WO.unknown, target === 'Everyone');
        const redPacketPreText = (0,base/* isTwitter */.L3)(social_network.activatedSocialNetworkUI) ? t('additional_post_box__encrypted_post_pre_red_packet_twitter', {
            encrypted
        }) : t('additional_post_box__encrypted_post_pre_red_packet', {
            encrypted
        });
        // TODO: move into the plugin system
        const redPacketMetadata = (0,helpers/* RedPacketMetadataReader */.Q)(content.meta);
        if (encode === 'image') {
            if (redPacketMetadata.ok) {
                var ref1, ref2, ref3;
                const isErc20 = ((ref1 = redPacketMetadata.val) === null || ref1 === void 0 ? void 0 : ref1.token) && redPacketMetadata.val.token_type === web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20;
                var ref4;
                const isDai = isErc20 && (0,web3_shared_src/* isDAI */.d5_)((ref4 = (ref2 = redPacketMetadata.val.token) === null || ref2 === void 0 ? void 0 : ref2.address) !== null && ref4 !== void 0 ? ref4 : '');
                var ref5;
                const isOkb = isErc20 && (0,web3_shared_src/* isOKB */.JVY)((ref5 = (ref3 = redPacketMetadata.val.token) === null || ref3 === void 0 ? void 0 : ref3.address) !== null && ref5 !== void 0 ? ref5 : '');
                const template = isDai ? 'dai' : isOkb ? 'okb' : 'eth';
                const text = redPacketPreText.replace(encrypted, '');
                await pasteImage(encrypted, template, text);
            } else {
                await pasteImage(encrypted, 'v2', null);
            }
        } else {
            pasteTextEncode(encrypted, redPacketMetadata.ok ? redPacketPreText : null);
        }
        // This step write data on gun. There is nothing to write if it shared with public
        if (target !== 'Everyone') service/* default.Crypto.publishPostAESKey */.ZP.Crypto.publishPostAESKey(token);
        onClose();
    }, [
        t,
        onClose
    ]);
    return onRequestPost;
}
function pasteTextEncode(encrypted, text) {
    var ref6, ref7;
    const defaultText = utils/* i18n.t */.ag.t('additional_post_box__encrypted_post_pre', {
        encrypted
    });
    (ref6 = social_network.activatedSocialNetworkUI.automation.nativeCompositionDialog) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.appendText) === null || ref7 === void 0 ? void 0 : ref7.call(ref6, text !== null && text !== void 0 ? text : defaultText, {
        recover: true
    });
}
async function pasteImage(encrypted, template, text) {
    const defaultText = utils/* i18n.t */.ag.t('additional_post_box__steganography_post_pre', {
        random: new Date().toLocaleString()
    });
    const img = await SteganographyTextPayload(template, encrypted);
    // Don't await this, otherwise the dialog won't disappear
    social_network.activatedSocialNetworkUI.automation.nativeCompositionDialog.attachImage(img, {
        recover: true,
        relatedTextPayload: text !== null && text !== void 0 ? text : defaultText
    });
}

;// CONCATENATED MODULE: ./src/components/CompositionDialog/Composition.tsx













function Composition({ type ='timeline' , requireClipboardPermission  }) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    //#region Open
    const [open, setOpen] = (0,react.useState)(false);
    const onClose = (0,react.useCallback)(()=>{
        var ref1;
        setOpen(false);
        (ref1 = UI.current) === null || ref1 === void 0 ? void 0 : ref1.reset();
    }, []);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessage.events.requestComposition.on */.yV.events.requestComposition.on(({ reason , open: open1 , content , options  })=>{
            var ref2, ref3;
            if (reason !== type || social_network.globalUIState.profiles.value.length <= 0) return;
            setOpen(open1);
            if (content) (ref2 = UI.current) === null || ref2 === void 0 ? void 0 : ref2.setMessage(content);
            if (options === null || options === void 0 ? void 0 : options.target) (ref3 = UI.current) === null || ref3 === void 0 ? void 0 : ref3.setEncryptionKind(options.target);
            if (options === null || options === void 0 ? void 0 : options.startupPlugin) {
                setTimeout(()=>{
                    var // HACK: Because of we're using DialogStackingProvider,
                    // we need to avoid opening multiple dialogs in the same time to make them
                    // stacked in the right order.
                    ref4;
                    (ref4 = UI.current) === null || ref4 === void 0 ? void 0 : ref4.startPlugin(options.startupPlugin);
                }, 200);
            }
        });
    }, [
        type
    ]);
    //#endregion
    const [disableE2E, setDisableE2E] = (0,react.useState)(false);
    const UI = (0,react.useRef)(null);
    const networkSupport = (ref = social_network.activatedSocialNetworkUI.injection.newPostComposition) === null || ref === void 0 ? void 0 : ref.supportedOutputTypes;
    var ref5, ref6;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* DialogStackingProvider */.yu, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            keepMounted: true,
            open: open,
            onClose: onClose,
            title: t('post_dialog__title'),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompositionDialogUI, {
                    ref: UI,
                    ...useCompositionClipboardRequest(requireClipboardPermission || false),
                    disabledRecipients: disableE2E ? 'E2E' : undefined,
                    recipients: (0,useActivatedUI/* useFriendsList */.hg)(),
                    maxLength: 560,
                    onSubmit: useSubmit(onClose),
                    onChange: (message)=>{
                        // TODO: move into the plugin system
                        const hasRedPacket = (0,helpers/* RedPacketMetadataReader */.Q)(message.meta).ok;
                        const shouldDisableE2E = hasRedPacket;
                        setDisableE2E(shouldDisableE2E);
                    },
                    supportImageEncoding: (ref5 = networkSupport === null || networkSupport === void 0 ? void 0 : networkSupport.text) !== null && ref5 !== void 0 ? ref5 : false,
                    supportTextEncoding: (ref6 = networkSupport === null || networkSupport === void 0 ? void 0 : networkSupport.image) !== null && ref6 !== void 0 ? ref6 : false
                })
            })
        })
    }));
}


/***/ }),

/***/ 61754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CompositionContext),
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {
    },
    dropMetadata () {
    }
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 83250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.oQ),
/* harmony export */   "eT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.eT),
/* harmony export */   "H9": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__.FT),
/* harmony export */   "Vc": () => (/* binding */ usePostLink),
/* harmony export */   "NH": () => (/* binding */ usePostClaimedAuthor)
/* harmony export */ });
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45513);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66751);



function usePostLink() {
    var _utils, ref;
    const postID = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postID */ .H9.postID();
    const postIdentifier = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postIdentifier */ .H9.postIdentifier();
    if (!postID || !postIdentifier) return '';
    var ref1;
    return (ref1 = (ref = (_utils = _social_network__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils).getPostURL) === null || ref === void 0 ? void 0 : ref.call(_utils, postIdentifier)) !== null && ref1 !== void 0 ? ref1 : '';
}
function usePostClaimedAuthor() {
    const info = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .usePostInfoDetails.postPayload */ .H9.postPayload();
    if (info.err) return undefined;
    const payload = info.val;
    if (payload.version !== -38) return undefined;
    return payload.authorUserID;
}


/***/ }),

/***/ 34209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sF": () => (/* binding */ DefaultTypedMessageRenderer)
});

// UNUSED EXPORTS: DefaultTypedMessageAnchorRenderer, DefaultTypedMessageEmptyRenderer, DefaultTypedMessageImageRenderer, DefaultTypedMessageSuspendedRenderer, DefaultTypedMessageTextRenderer, DefaultTypedMessageTupleRenderer, DefaultTypedMessageUnknownRenderer

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/anchorme@2.1.2/node_modules/anchorme/dist/node/index.js
var node = __webpack_require__(5670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(5743);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
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












const DefaultTypedMessageRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageRenderer1(props) {
    var ref;
    const Renderer = ((ref = (0,typed_message/* getRendererOfTypedMessage */.vi)(props.message)[0]) === null || ref === void 0 ? void 0 : ref.component) || DefaultTypedMessageUnknownRenderer;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
        ...props,
        message: props.message
    }));
});
const DefaultTypedMessageTextRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageTextRenderer1(props) {
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
    id: 'maskbook.text',
    priority: 0
});
const DefaultTypedMessageAnchorRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageAnchorRenderer1(props) {
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
    id: 'maskbook.anchor',
    priority: 0
});
const DefaultTypedMessageImageRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageImageRenderer1(props) {
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
    id: 'maskbook.image',
    priority: 0
});
const DefaultTypedMessageTupleRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageTupleRenderer1(props) {
    try {
        JSON.stringify(props.message.items);
    } catch (error) {
        if (error instanceof Error && error.message.includes('circular structure')) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                children: "The TypedMessage has a circular structure so it can't be rendered on the screen."
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
    id: 'maskbook.compound',
    priority: 0
});
const DefaultTypedMessageEmptyRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageEmptyRenderer1(props) {
    return renderWithMetadata(props, null);
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('empty', {
    component: DefaultTypedMessageEmptyRenderer,
    id: 'maskbook.empty',
    priority: 0
});
const DefaultTypedMessageUnknownRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageUnknownRenderer1(props) {
    return renderWithMetadata(props, /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        children: "Unknown message"
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('unknown', {
    component: DefaultTypedMessageUnknownRenderer,
    id: 'maskbook.unknown',
    priority: 0
});
const DefaultTypedMessageSuspendedRenderer = /*#__PURE__*/ (0,react.memo)(function DefaultTypedMessageSuspendedRenderer1(props) {
    const { promise  } = props.message;
    const { loading , error , value  } = (0,useAsync/* default */.Z)(()=>promise
    , [
        promise
    ]);
    return renderWithMetadata(props, loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageTextRenderer, {
        ...props,
        message: (0,typed_message/* makeTypedMessageText */.P)('Loading...')
    }) : error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageTextRenderer, {
        ...props,
        message: (0,typed_message/* makeTypedMessageText */.P)('Error!')
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(DefaultTypedMessageRenderer, {
        ...props,
        message: value
    }));
});
(0,typed_message/* registerTypedMessageRenderer */.vq)('promise', {
    component: DefaultTypedMessageSuspendedRenderer,
    id: 'maskbook.suspended',
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
const RenderText = /*#__PURE__*/ (0,react.memo)(function RenderText1(props) {
    return(/*#__PURE__*/ (0,react.createElement)(react.Fragment, {
    }, ...parseText(props.text, props.allowTextEnlarge)));
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
const ParseTextLink = /*#__PURE__*/ (0,react.memo)(function ParseTextLink1({ link , text , fontSize  }) {
    const { classes  } = TypedMessageRenderer_useStyle(fontSize);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        className: classnames_default()(classes.text, classes.link),
        target: "_blank",
        rel: "noopener noreferrer",
        href: link,
        children: text
    }, link));
});
const ParseText = /*#__PURE__*/ (0,react.memo)(function ParseText1({ text , fontSize  }) {
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
            }), /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
            }, current));
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1256.js
/***/ 22681:
=======
/***/ 64921:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1207.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1256.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43402);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76898);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13661);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88088);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16842);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1207.js





const Image1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image2(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL  } = props;
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
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(src);
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
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
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
             : undefined,
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
// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ 
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
    } catch  {
    }
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1256.js
/***/ 66709:
=======
/***/ 77766:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1207.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ Banner)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(93569);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/extension/options-page/Route.ts
var Route = __webpack_require__(70791);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useMount.js
var useMount = __webpack_require__(32468);
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
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    return props.nextStep === 'hidden' ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        size: "large",
        className: classes.buttonText,
        onClick: props.nextStep.onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookSharpIcon */.ck, {
            color: "primary"
        })
    });
}
function Banner(props) {
    const lastRecognizedIdentity = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const { nextStep  } = props;
    const networkIdentifier = social_network.activatedSocialNetworkUI === null || social_network.activatedSocialNetworkUI === void 0 ? void 0 : social_network.activatedSocialNetworkUI.networkIdentifier;
    const identities = (0,useActivatedUI/* useMyIdentities */.FA)();
    const [value, onChange] = (0,react.useState)('');
    const defaultNextStep = (0,react.useCallback)(()=>{
        if (nextStep === 'hidden') return;
        if (!networkIdentifier) {
            nextStep === null || nextStep === void 0 ? void 0 : nextStep.onClick();
            nextStep !== null && nextStep !== void 0 ? nextStep : console.warn('You must provide one of networkIdentifier or nextStep.onClick');
            return;
        }
        service/* default.Welcome.openOptionsPage */.ZP.Welcome.openOptionsPage(Route/* DashboardRoute.Setup */.q.Setup);
    }, [
        networkIdentifier,
        nextStep
    ]);
    const defaultUserName = networkIdentifier ? {
        defaultValue: lastRecognizedIdentity.identifier.isUnknown ? '' : lastRecognizedIdentity.identifier.userId,
        value,
        onChange,
        isValid: social_network.activatedSocialNetworkUI.utils.isValidUsername || (()=>true
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

/***/ 75734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(64556);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(86126);
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
var shared_src = __webpack_require__(80050);
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

/***/ 81951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   "setStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_3__.p),
/* harmony export */   "resolveTCOLink": () => (/* binding */ resolveTCOLink),
/* harmony export */   "fetch": () => (/* binding */ fetch),
/* harmony export */   "fetchJson": () => (/* binding */ fetchJson),
/* harmony export */   "saveAsFileFromUrl": () => (/* binding */ saveAsFileFromUrl),
/* harmony export */   "saveAsFileFromBuffer": () => (/* binding */ saveAsFileFromBuffer),
/* harmony export */   "requestBrowserPermission": () => (/* binding */ requestBrowserPermission),
/* harmony export */   "queryPermission": () => (/* binding */ queryPermission),
/* harmony export */   "createNewWindowAndPasteShareContent": () => (/* binding */ createNewWindowAndPasteShareContent),
/* harmony export */   "openPopupsWindow": () => (/* binding */ openPopupsWindow),
/* harmony export */   "openInternalPage": () => (/* binding */ openInternalPage)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.1256.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77287);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43670);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9950);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62285);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37186);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45513);
/* harmony import */ var _popups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37146);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4331);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1207.js




const cache = new Map();
const resolveTCOLink = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async (u)=>{
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const dom = doc.querySelector('noscript > meta');
    if (!dom) return null;
    const [, url] = dom.content.split('URL=');
    if (url) cache.set(u, url);
    return url !== null && url !== void 0 ? url : null;
}, (x)=>x
);
function fetch(url) {
    return globalThis.fetch(url).then((x)=>x.blob()
    );
}
function fetchJson(url) {
    return globalThis.fetch(url).then((x)=>x.json()
    );
}
function saveAsFileFromUrl(url, fileName = '') {
    browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
function saveAsFileFromBuffer(file, mimeType, fileName = '') {
    const blob = new Blob([
        file
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    saveAsFileFromUrl(url, fileName);
}
async function requestBrowserPermission(permission) {
    if (await browser.permissions.contains(permission)) return true;
    try {
        return await browser.permissions.request(permission);
    } catch  {
    // which means we're on Firefox.
    // Chrome allows permission request from the background.
    }
    const popup = await browser.windows.create({
        height: 600,
        width: 350,
        type: 'popup',
        url: (0,_popups__WEBPACK_IMPORTED_MODULE_2__/* .constructRequestPermissionURL */ .km)(permission)
    });
    return new Promise((resolve)=>{
        browser.windows.onRemoved.addListener(function listener(windowID) {
            if (windowID === popup.id) {
                resolve(browser.permissions.contains(permission));
                browser.windows.onRemoved.removeListener(listener);
            }
        });
    });
}
function queryPermission(permission) {
    return browser.permissions.contains(permission);
}
async function createNewWindowAndPasteShareContent(SNSIdentifier, post) {
    var _utils, ref;
    const url = (ref = (_utils = (await (0,_social_network__WEBPACK_IMPORTED_MODULE_1__.getNetworkWorker)(SNSIdentifier)).utils).getShareLinkURL) === null || ref === void 0 ? void 0 : ref.call(_utils, post);
    if (!url) return;
    browser.tabs.create({
        active: true,
        url: url.toString()
    });
}
function openPopupsWindow(route) {
    if (!!navigator.userAgent.match(/Chrome/)) {
        window.open(browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`), '', 'resizable,scrollbars,status,width=310,height=540');
    } else {
        browser.windows.create({
            url: browser.runtime.getURL(`popups.html#${route !== null && route !== void 0 ? route : _popups__WEBPACK_IMPORTED_MODULE_2__/* .PopupRoutes.Wallet */ .mZ.Wallet}`),
            width: 310,
            height: 540,
            type: 'popup'
        });
    }
}
function openInternalPage(path) {
    browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(path)
    });
}


/***/ }),

/***/ 4331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ getStorage),
/* harmony export */   "p": () => (/* binding */ setStorage)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28532);


/**
 * Make sure that the storage is used serially.
 */ class MutexStorage {
    lock() {
        this.locked = true;
    }
    unlock() {
        this.locked = false;
    }
    async continue() {
        var _obj, ref;
        if (!this.locked) (ref = _obj = this.tasks.shift()) === null || ref === void 0 ? void 0 : ref.call(_obj);
    }
    async getStorage(key) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e, storage)=>{
                if (e) reject(e);
                else resolve(storage);
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    const stored = await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.get(key), 3000, `Get ${key} timeout.`);
                    callback(null, (stored !== null && stored !== void 0 ? stored : {
                    })[key]);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    async setStorage(key, value) {
        return new Promise(async (resolve, reject)=>{
            const callback = (e)=>{
                if (e) reject(e);
                else resolve();
                this.unlock();
                this.continue();
            };
            const run = async ()=>{
                try {
                    this.lock();
                    await (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .timeout */ .Vs)(browser.storage.local.set({
                        [key]: value
                    }), 3000, `Set ${key} to ${value} timeout.`);
                    callback(null);
                } catch (error) {
                    callback(error);
                }
            };
            if (this.locked) this.tasks.push(run);
            else run();
        });
    }
    constructor(){
        this.tasks = [];
        this.locked = false;
    }
}
const storage = new MutexStorage();
async function getStorage(key) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    const value = await storage.getStorage(key);
    return value;
}
async function setStorage(key, value, options = {
    howToUpdate: 'replace'
}) {
    if (typeof browser === 'undefined' || !browser.storage) return;
    var ref;
    if (options.howToUpdate === 'merge') value = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.merge)((ref = await storage.getStorage(key)) !== null && ref !== void 0 ? ref : {
    }, value);
    return storage.setStorage(key, value);
}


/***/ }),

/***/ 37146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "mZ": () => (/* binding */ PopupRoutes),
  "km": () => (/* reexport */ constructRequestPermissionURL),
  "qy": () => (/* reexport */ constructSignRequestURL),
  "WQ": () => (/* binding */ getRouteURLWithNoParam)
});

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts

function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getRouteURLWithNoParam(PopupRoutes.RequestPermission)}?${params.toString()}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/SignRequest/utils.ts


function constructSignRequestURL(request) {
    return dist_default()(getRouteURLWithNoParam(PopupRoutes.SignRequest), {
        message: request.message,
        id: request.requestID
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx
var PopupRoutes;
(function(PopupRoutes1) {
    PopupRoutes1["Root"] = '/';
    PopupRoutes1["Wallet"] = '/wallet';
    PopupRoutes1["ImportWallet"] = '/wallet/import';
    PopupRoutes1["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes1["WalletSettings"] = '/wallet/settings';
    PopupRoutes1["WalletRename"] = '/wallet/rename';
    PopupRoutes1["DeleteWallet"] = '/wallet/delete';
    PopupRoutes1["CreateWallet"] = '/wallet/create';
    PopupRoutes1["SelectWallet"] = '/wallet/select';
    PopupRoutes1["BackupWallet"] = '/wallet/backup';
    PopupRoutes1["AddToken"] = '/wallet/addToken';
    PopupRoutes1["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes1["GasSetting"] = '/wallet/gas';
    PopupRoutes1["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes1["Personas"] = '/personas';
    PopupRoutes1["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes1["RequestPermission"] = '/request-permission';
    PopupRoutes1["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes1["SignRequest"] = '/sign-request';
})(PopupRoutes || (PopupRoutes = {
}));
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function PermissionAwareRedirectOf(url, context) {
    return getRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 88892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PluginI18NFieldRender),
/* harmony export */   "e": () => (/* binding */ usePluginI18NField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10026);


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.i18nKey ? t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            }) : field.fallback
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    }));
}
function usePluginI18NField() {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}


/***/ }),

/***/ 59239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ RedPacketMetadataReader),
  "v": () => (/* binding */ renderWithRedPacketMetadata)
});

// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(90254);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token_type":{"enum":[0,1,2],"type":"number","title":"token_type"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address","decimals","name","symbol"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","token_type","total"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts



const RedPacketMetadataReader = (0,metadata/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,metadata/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);


/***/ }),

/***/ 67162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ pasteImageToCompositionDefault)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45513);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32951);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74712);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96578);




function pasteImageToCompositionDefault(hasSucceed) {
    return async function(url, { recover , relatedTextPayload  }) {
        const image = typeof url === 'string' ? await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .downloadUrl */ .GR)(url) : url;
        await (0,_utils_dom__WEBPACK_IMPORTED_MODULE_1__/* .untilDocumentReady */ .Hx)();
        if (relatedTextPayload) {
            var ref, ref1;
            (ref = _index__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.automation.nativeCompositionDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.appendText) === null || ref1 === void 0 ? void 0 : ref1.call(ref, relatedTextPayload, {
                recover: false
            });
            await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .delay */ .gw)(500);
        }
        await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .pasteImageToActiveElements */ .bF)(image);
        if (await hasSucceed()) return;
        if (recover) {
            _utils_messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessage.events.autoPasteFailed.sendToLocal */ .y.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}


/***/ }),

/***/ 12582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ injectPageInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(30699);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogTitle/DialogTitle.js + 1 modules
var DialogTitle = __webpack_require__(20481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(35939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(64921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-draggable@4.4.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__(15610);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/CloudDownload.js
var CloudDownload = __webpack_require__(28190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/OpenInBrowser.js
var OpenInBrowser = __webpack_require__(21862);
// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts
var HelperService = __webpack_require__(81951);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AutoPasteFailedDialog.tsx















const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        title: {
            marginLeft: theme.spacing(1)
        },
        paper: {
            border: '1px solid white'
        }
    })
);
function AutoPasteFailedDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [url, setURL] = (0,react.useState)('');
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const { onClose , data  } = props;
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const [, copy] = (0,useCopyToClipboard/* default */.Z)();
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const permission = (0,utils/* useQueryNavigatorPermission */.eD)(true, 'clipboard-write');
    const fileName = `maskbook-encrypted-${(0,format/* default */.Z)(Date.now(), 'yyyyMMddHHmmss')}.png`;
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.title,
                                children: t('auto_paste_failed_dialog_title')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContentText/* default */.Z, {
                            children: t('auto_paste_failed_dialog_content')
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
                                    variant: "contained",
                                    onClick: ()=>{
                                        copy(data.text);
                                        enqueueSnackbar(t('copy_success_of_text'), {
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
                                    width: 260,
                                    height: 180
                                }) : null,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        marginBottom: 1
                                    }
                                }),
                                permission === 'granted' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    onClick: async ()=>{
                                        if (!data.image) return;
                                        await navigator.clipboard.write([
                                            new ClipboardItem({
                                                [data.image.type]: data.image
                                            }), 
                                        ]);
                                        enqueueSnackbar(t('copy_success_of_image'), {
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
                                    variant: "text",
                                    onClick: ()=>(0,HelperService.saveAsFileFromUrl)(url, fileName)
                                    ,
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudDownload/* default */.Z, {
                                    }),
                                    children: t('download')
                                }) : null,
                                url && "app" === 'web' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    component: Link/* default */.Z,
                                    href: url,
                                    target: "_blank",
                                    startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInBrowser/* default */.Z, {
                                    }),
                                    children: t('auto_paste_failed_dialog_image_caption')
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                })
            ]
        })
    }));
}
function useAutoPasteFailedDialog() {
    const [open, setOpen] = (0,react.useState)(false);
    const [data, setData] = (0,react.useState)({
        text: ''
    });
    return [
        (data1)=>{
            setData(data1);
            setOpen(true);
        },
        open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AutoPasteFailedDialog, {
            onClose: ()=>setOpen(false)
            ,
            data: data
        }) : null, 
    ];
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageInspector.tsx









const PluginRender = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz, (x)=>x.GlobalInjection
);
function PageInspector(props) {
    const prompt = (0,src/* useSnackbar */.Ds)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [autoPasteFailed, JSX] = useAutoPasteFailedDialog();
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    (0,react.useEffect)(()=>utils/* MaskMessage.events.autoPasteFailed.on */.yV.events.autoPasteFailed.on((data)=>{
            const key = data.image ? Math.random() : data.text;
            const close = ()=>prompt.closeSnackbar(key)
            ;
            const timeout = setTimeout(()=>{
                prompt.closeSnackbar(key);
            }, 15 * 1000 /** 15 seconds */ );
            prompt.enqueueSnackbar(t('auto_paste_failed_snackbar'), {
                variant: 'info',
                preventDuplicate: true,
                anchorOrigin: xsMatched ? {
                    vertical: 'bottom',
                    horizontal: 'center'
                } : {
                    horizontal: 'left',
                    vertical: 'bottom'
                },
                key,
                action: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            color: "inherit",
                            onClick: ()=>[
                                    clearTimeout(timeout),
                                    close(),
                                    autoPasteFailed(data)
                                ]
                            ,
                            children: t('auto_paste_failed_snackbar_action')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            size: "large",
                            "aria-label": "Close",
                            onClick: close,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                            })
                        })
                    ]
                })
            });
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            JSX,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(19439);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PageInspector.tsx







function injectPageInspectorDefault(config = {
}, additionalPropsToPageInspector = ()=>({
    })
, useCustomStyles = (0,src/* makeStyles */.ZL)()({
})) {
    const PageInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PageInspectorDefault1() {
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
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PageInspectorDefault, {
        }));
    };
}


/***/ }),

/***/ 89177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ injectPostInspectorDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(96578);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/components/InjectedComponents/TypedMessageRenderer.tsx + 1 modules
var TypedMessageRenderer = __webpack_require__(34209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Check.js
var Check = __webpack_require__(98181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Close.js
var Close = __webpack_require__(11042);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/colors/green.js
var green = __webpack_require__(40870);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/AdditionalPostContent.tsx












var AdditionalIcon;
(function(AdditionalIcon1) {
    AdditionalIcon1["check"] = "check";
    AdditionalIcon1["error"] = "error";
})(AdditionalIcon || (AdditionalIcon = {
}));
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
            paddingRight: theme.spacing(0.75),
            display: 'flex',
            width: 20,
            height: 20
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
const AdditionalContent = /*#__PURE__*/ (0,react.memo)(function AdditionalContent1(props) {
    const classes = (0,src.useStylesExtends)(useStyles(), props);
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    const { progress , title , message  } = props;
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
        const props1 = {
            fontSize: 'small',
            className: classes.rightIcon
        };
        if (icon === AdditionalIcon.check) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
            htmlColor: green/* default.500 */.Z[500],
            ...props1
        }));
        if (icon === AdditionalIcon.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
            color: "error",
            ...props1
        }));
        return null;
    })(props.titleIcon);
    const header = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "caption",
        color: message ? 'textSecondary' : 'textPrimary',
        gutterBottom: true,
        className: classnames_default()(classes.title),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.icon,
                children: ProgressJSX || /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookIcon */.LX, {
                })
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
            props.headerActions
        ]
    });
    const TypedMessage = (0,react.useMemo)(()=>{
        if (typeof message === 'string') return (0,typed_message/* makeTypedMessageText */.P)(message);
        if (typeof message === 'undefined') return (0,typed_message/* makeTypedMessageText */.P)('');
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
                    ...props,
                    message: TypedMessage,
                    allowTextEnlarge: true
                })
            }) : null
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ./src/components/shared/SelectProfileUI/index.tsx + 3 modules
var SelectProfileUI = __webpack_require__(75734);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(70988);
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
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const classes = (0,src.useStylesExtends)(SelectPeopleDialog_useStyles(), props);
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
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProfileUI/* SelectProfileUI */.Ok, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/authorDifferentMessage.tsx



function wrapAuthorDifferentMessage(author, postBy, jsx) {
    if (!(author === null || author === void 0 ? void 0 : author.userId)) return jsx;
    if ((author === null || author === void 0 ? void 0 : author.isUnknown) || (postBy === null || postBy === void 0 ? void 0 : postBy.isUnknown)) return jsx;
    if (type/* Identifier.equals */.xb.equals(author, postBy)) return jsx;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            i18n_next/* i18n.t */.a.t('decrypted_postbox_author_mismatch', {
                name: author === null || author === void 0 ? void 0 : author.userId
            }),
            jsx
        ]
    }));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptedPostSuccess.tsx










const PluginRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz, (x)=>x.DecryptedInspector
);
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
const DecryptPostSuccess = /*#__PURE__*/ (0,react.memo)(function DecryptPostSuccess1(props) {
    const { data: { content  } , profiles , author , postedBy ,  } = props;
    const classes = (0,src.useStylesExtends)(useSuccessStyles(), props);
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const shareMenu = useShareMenu(profiles, props.requestAppendRecipients || (async ()=>{
    }), props.alreadySelectedPreviously);
    const rightActions = props.requestAppendRecipients && !props.sharedPublic && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
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
                    after: PluginRenderer
                },
                headerActions: wrapAuthorDifferentMessage(author, postedBy, rightActions),
                title: t('decrypted_postbox_title'),
                message: content,
                ...props.AdditionalContentProps
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptPostAwaiting.tsx





const DecryptPostAwaiting = /*#__PURE__*/ (0,react.memo)(function DecryptPostAwaiting1(props) {
    const { AdditionalContentProps , author , postedBy , type  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
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
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0),
        ...AdditionalContentProps
    }));
});

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(77766);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(92697);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DecryptedPost/DecryptPostFailed.tsx







const DecryptPostFailed = /*#__PURE__*/ (0,react.memo)(function DecryptPostFailed1(props) {
    const { AdditionalContentProps , NotSetupYetPromptProps , author , postedBy , error  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    if ((error === null || error === void 0 ? void 0 : error.message) === constants/* DecryptFailedReason.MyCryptoKeyNotFound */.g.MyCryptoKeyNotFound) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        ...NotSetupYetPromptProps
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
        title: t('service_decryption_failed'),
        titleIcon: "error",
        message: error === null || error === void 0 ? void 0 : error.message,
        headerActions: wrapAuthorDifferentMessage(author, postedBy, void 0),
        ...AdditionalContentProps
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(5743);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
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
        children: props.items.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: Array.isArray(x) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(F, {
                    hint: x[0],
                    content: x[1]
                }, x[0]) : x
            }, x.toString())
        )
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(93569);
// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(98332);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContentText/DialogContentText.js
var DialogContentText = __webpack_require__(35939);
;// CONCATENATED MODULE: ./src/components/DebugModeUI/PostHashDialog.tsx















function PostHashDialog(props) {
    const { open  } = props;
    const map = new Map();
    for (const [id, magicCode, fingerprint] of props.hashMap){
        map.set(id, [
            magicCode,
            fingerprint
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
                        const [magicCode1, fingerprint1] = map.get(one.identifier.toText()) || [
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
                                            magicCode1 || 'Unknown',
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                                            }),
                                            "Their fingerprint: ",
                                            fingerprint1
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
        const ivID = new type/* PostIVIdentifier */.bb(props.network, payload.val.iv);
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
    const postBy = usePostInfo/* usePostInfoDetails.postBy */.H9.postBy();
    const postContent = usePostInfo/* usePostInfoDetails.postContent */.H9.postContent();
    const payloadResult = (0,react.useMemo)(()=>(0,Payload/* deconstructPayload */.Q)(postContent)
    , [
        postContent
    ]);
    const setting = (0,src.useValueRef)(settings/* debugModeSetting */.vv);
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
var asyncIteratorHelpers = __webpack_require__(17422);
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
    var ref;
    const { whoAmI , profiles , alreadySelectedPreviously , onDecrypted  } = props;
    const deconstructedPayload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const authorInPayload = (0,usePostInfo/* usePostClaimedAuthor */.NH)();
    const current = (0,usePostInfo/* usePostInfo */.oQ)();
    const currentPostBy = usePostInfo/* usePostInfoDetails.postBy */.H9.postBy();
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
            await (0,utils/* delay */.gw)(1500);
        };
    }, [
        props.requestAppendRecipients,
        postBy,
        whoAmI
    ]);
    //#region Debug info
    const [debugHash, setDebugHash] = (0,react.useState)('Unknown');
    //#endregion
    //#region Progress
    const [progress, dispatch] = (0,react.useReducer)(progressReducer, []);
    //#endregion
    //#region decrypt
    // pass 1:
    // decrypt post content and image attachments
    const decryptedPayloadForImageAlpha38 = (decryptedPayloadForImage === null || decryptedPayloadForImage === void 0 ? void 0 : decryptedPayloadForImage.version) === -38 ? decryptedPayloadForImage : null;
    const sharedPublic = (0,usePostInfo/* usePostInfoSharedPublic */.FT)() || (decryptedPayloadForImageAlpha38 === null || decryptedPayloadForImageAlpha38 === void 0 ? void 0 : decryptedPayloadForImageAlpha38.sharedPublic) || false;
    (0,react.useEffect)(()=>{
        var ref1;
        const signal = new AbortController();
        async function makeProgress(key, decryptionProcess) {
            const refreshProgress = (progress1)=>dispatch({
                    type: 'refresh',
                    key,
                    progress: progress1
                })
            ;
            for await (const process of (0,asyncIteratorHelpers/* asyncIteratorWithResult */.ts)(decryptionProcess)){
                var ref2;
                if (signal.signal.aborted) return (ref2 = decryptionProcess.return) === null || ref2 === void 0 ? void 0 : ref2.call(decryptionProcess, {
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
        const postURL = (ref1 = current.url.getCurrentValue()) === null || ref1 === void 0 ? void 0 : ref1.toString();
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
        (ref = deconstructedPayload.val) === null || ref === void 0 ? void 0 : ref.encryptedText,
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
    // inovke callback
    const firstSucceedDecrypted = progress.find((p)=>p.progress.type === 'success'
    );
    (0,react.useEffect)(()=>{
        if ((firstSucceedDecrypted === null || firstSucceedDecrypted === void 0 ? void 0 : firstSucceedDecrypted.progress.type) !== 'success') return;
        onDecrypted((0,src.makeTypedMessageTuple)([
            firstSucceedDecrypted.progress.content
        ]));
    }, [
        firstSucceedDecrypted,
        onDecrypted
    ]);
    //#endregion
    // it's not a secret post
    if (!deconstructedPayload.ok && progress.every((x)=>x.progress.internal
    )) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: progress// the internal progress should not display to the end-user
        .filter(({ progress: progress1  })=>!progress1.internal
        ).map(({ progress: progress1  }, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Fragment, {
                children: renderProgress(progress1)
            }, index)
        )
    }));
    function renderProgress(progress1) {
        const render = ()=>{
            switch(progress1.type){
                case 'success':
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Success, {
                        data: progress1,
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
                        error: new Error(progress1.error),
                        author: authorInPayload,
                        postedBy: currentPostBy,
                        ...props.failedComponentProps
                    }));
                case 'progress':
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Awaiting, {
                        type: progress1,
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
                    decryptedResult: progress1.type === 'progress' ? null : progress1
                })
            ]
        }));
    }
}

;// CONCATENATED MODULE: ./src/components/InjectedComponents/AddToKeyStore.tsx






function AddToKeyStore({ provePost , postBy , ...props }) {
    const state = (0,useAsync/* default */.Z)(()=>service/* default.Crypto.verifyOthersProve */.ZP.Crypto.verifyOthersProve(provePost, postBy)
    , [
        provePost,
        postBy
    ]);
    const { completeComponent: Success , completeComponentProps  } = props;
    if (state.value) return render(Success, AddToKeyStoreUI.success, completeComponentProps);
    else return null;
    function render(outer, def, props1) {
        if (outer === null) return null;
        return(/*#__PURE__*/ (0,react.createElement)(outer || def, props1));
    }
}
const AddToKeyStoreUI = {
    success: /*#__PURE__*/ (0,react.memo)((props)=>{
        const { t  } = (0,src_utils/* useI18N */.M1)();
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AdditionalContent, {
            title: t('add_to_key_store_success'),
            titleIcon: "check",
            ...props
        }));
    })
};

// EXTERNAL MODULE: ./src/social-network/utils/text-payload-ui.ts
var text_payload_ui = __webpack_require__(22192);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostInspector.tsx














const PluginHooksRenderer = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz, (plugin)=>plugin.PostInspector
);
function PostInspector(props) {
    var ref;
    const postBy = usePostInfo/* usePostInfoDetails.postBy */.H9.postBy();
    const postContent = usePostInfo/* usePostInfoDetails.postContent */.H9.postContent();
    const encryptedPost = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const postId = usePostInfo/* usePostInfoDetails.postIdentifier */.H9.postIdentifier();
    const decryptedPayloadForImage = usePostInfo/* usePostInfoDetails.decryptedPayloadForImage */.H9.decryptedPayloadForImage();
    const postImages = usePostInfo/* usePostInfoDetails.postMetadataImages */.H9.postMetadataImages();
    const isDebugging = (0,src.useValueRef)(settings/* debugModeSetting */.vv);
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
        return service/* default.Crypto.getSharedListOfPost */.ZP.Crypto.getSharedListOfPost(version, iv, postBy);
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
        const DecryptPostX = props.DecryptPostComponent || DecryptPost;
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(DecryptPostX, {
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
            whoAmI: whoAmI ? whoAmI.identifier : type/* ProfileIdentifier.unknown */.WO.unknown,
            ...props.DecryptPostProps
        }));
    } else if (provePost.length) {
        const AddToKeyStoreX = props.AddToKeyStoreComponent || AddToKeyStore;
        if (!AddToKeyStoreX) return null;
        return withAdditionalContent(/*#__PURE__*/ (0,jsx_runtime.jsx)(AddToKeyStoreX, {
            postBy: postBy,
            provePost: postContent,
            ...props.AddToKeyStoreProps
        }));
    }
    return withAdditionalContent(null);
    function withAdditionalContent(x) {
        const slot = encryptedPost.ok ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("slot", {
        });
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                 false ? /*#__PURE__*/ 0 : null,
                props.slotPosition !== 'after' && slot,
                x,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginHooksRenderer, {
                }),
                debugInfo,
                props.slotPosition !== 'before' && slot
            ]
        }));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/PostInspector.tsx







function injectPostInspectorDefault(config = {
}, additionalPropsToPostInspector = ()=>({
    })
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({
})) {
    const PostInspectorDefault = /*#__PURE__*/ (0,react.memo)(function PostInspectorDefault1(props) {
        const { onDecrypted , zipPost  } = props;
        const { classes  } = useCustomStyles();
        const additionalProps = additionalPropsToPostInspector(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            onDecrypted: onDecrypted,
            needZip: zipPost,
            ...additionalProps
        }));
    });
    const { zipPost , injectionPoint  } = config;
    const zipPostF = zipPost || lodash.noop;
    return function injectPostInspector(current, signal) {
        const jsx = /*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
            post: current,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspectorDefault, {
                onDecrypted: (typed)=>{
                    current.transformedPostContent.value = typed;
                },
                zipPost: ()=>zipPostF(current.rootNodeProxy)
                ,
                ...current
            })
        });
        var ref;
        const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)((ref = injectionPoint === null || injectionPoint === void 0 ? void 0 : injectionPoint(current)) !== null && ref !== void 0 ? ref : current.rootNodeProxy.afterShadow, {
            key: 'post-inspector',
            signal
        });
        root.render(jsx);
        return root.destory;
    };
}


/***/ }),

/***/ 58963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createTaskStartSetupGuideDefault)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils_shadow_root_renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19305);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var _utils_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);






function UI({ unmount , persona  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_3__/* .SetupGuide */ .o, {
        persona: persona,
        onClose: unmount
    }));
}
function createTaskStartSetupGuideDefault(networkIdentifier, props = {
}) {
    let shadowRoot;
    return (signal, for_)=>{
        const dom = document.createElement('span');
        document.body.appendChild(dom);
        const provePost = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef('');
        const root = (0,_utils_shadow_root_renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowed */ .o)(shadowRoot || (shadowRoot = dom.attachShadow({
            mode: _utils_flags__WEBPACK_IMPORTED_MODULE_4__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        })), {
            signal
        });
        root.render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
            persona: for_,
            unmount: ()=>root.destory()
        }));
        _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Crypto.getMyProveBio */ .ZP.Crypto.getMyProveBio(for_, networkIdentifier).then((x)=>x || ''
        ).then((x)=>provePost.value = x
        );
    };
}


/***/ }),

/***/ 46016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ InitAutonomousStateFriends)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98723);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25830);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74712);




function hasFingerprint(x) {
    var ref;
    return !!((ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint);
}
function InitAutonomousStateFriends(signal, ref, network) {
    _extension_service__WEBPACK_IMPORTED_MODULE_1__/* .default.Identity.queryProfiles */ .ZP.Identity.queryProfiles(network).then((p)=>{
        if (signal.aborted) return;
        const next = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap(new Map(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier);
        for (const each of p){
            if (!hasFingerprint(each)) continue;
            next.set(each.identifier, each);
        }
        ref.value = next;
    });
    signal.addEventListener('abort', _utils_messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessage.events.profilesChanged.on */ .y.events.profilesChanged.on(async (events)=>{
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const newVal = await (0,immer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)(ref.value, async (draft)=>{
            for (const event of events){
                if (event.of.network !== network) continue;
                if (event.reason === 'delete') draft.delete(event.of);
                else {
                    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* .default.Identity.queryProfile */ .ZP.Identity.queryProfile(event.of);
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

/***/ 79328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ InitAutonomousStateProfiles)
/* harmony export */ });
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74712);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25830);


function InitAutonomousStateProfiles(signal, ref, network) {
    query(network, ref);
    signal.addEventListener('abort', _utils_messages__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessage.events.personaChanged.on */ .y.events.personaChanged.on((e)=>e.some((x)=>x.owned
        ) && query(network, ref)
    ));
    async function query(network1, ref1) {
        const val = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* .default.Identity.queryMyProfiles */ .ZP.Identity.queryMyProfiles(network1);
        if (signal.aborted) return;
        ref1.value = val;
    }
}


/***/ }),

/***/ 67561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createSNSAdaptorSpecializedPostContext),
/* harmony export */   "T": () => (/* binding */ createRefsForCreatePostContext)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);



function createSNSAdaptorSpecializedPostContext(create) {
    return function createPostContext(opt) {
        var ref, ref1, ref2, ref3;
        const cancel = [];
        (ref = opt.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', ()=>{
            return cancel.forEach((fn)=>{
                return fn === null || fn === void 0 ? void 0 : fn();
            });
        });
        //#region Post text content
        const postContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(extractText());
        cancel.push(opt.rawMessage.subscribe(()=>postContent.value = extractText()
        ));
        function extractText() {
            return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.extractTextFromTypedMessage)(opt.rawMessage.getCurrentValue()).unwrapOr('');
        }
        //#endregion
        //#region Mentioned links
        const links = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
        cancel.push(postContent.addListener((post)=>{
            var ref4;
            links.clear();
            (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.parseURL)(post).forEach((link)=>links.add(link)
            );
            (ref4 = opt.postMentionedLinksProvider) === null || ref4 === void 0 ? void 0 : ref4.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        cancel.push((ref1 = opt.postMentionedLinksProvider) === null || ref1 === void 0 ? void 0 : ref1.subscribe(()=>{
            var // Not clean old links cause post content not changed
            ref5;
            (ref5 = opt.postMentionedLinksProvider) === null || ref5 === void 0 ? void 0 : ref5.getCurrentValue().forEach((link)=>links.add(link)
            );
        }));
        const linksSubscribe = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...links
                ]
            ,
            subscribe: (sub)=>links.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        });
        //#endregion
        //#region Parse payload
        const postPayload = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('Empty')));
        parsePayload();
        cancel.push(postContent.addListener(parsePayload));
        cancel.push(linksSubscribe.subscribe(parsePayload));
        function parsePayload() {
            // TODO: Also parse for payload in the image.
            let lastResult = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new Error('No candidate'));
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
        //#endregion
        const author = {
            avatarURL: opt.avatarURL,
            nickname: opt.nickname,
            postBy: opt.postBy,
            postID: opt.postID
        };
        const transformedPostContent = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)(), _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.isTypedMessageEqual);
        const postIdentifier = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>{
                const by = opt.postBy.getCurrentValue();
                const id = opt.postID.getCurrentValue();
                if (by.isUnknown || id === null) return null;
                return new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.PostIdentifier(by, id);
            },
            subscribe: (sub)=>{
                const a = opt.postBy.subscribe(sub);
                const b = opt.postID.subscribe(sub);
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
            rootNodeProxy: opt.rootElement,
            postContentNode: opt.suggestedInjectionPoint,
            comment: opt.comments,
            commentBoxSelector: (ref2 = opt.comments) === null || ref2 === void 0 ? void 0 : ref2.commentBoxSelector,
            commentsSelector: (ref3 = opt.comments) === null || ref3 === void 0 ? void 0 : ref3.commentsSelector,
            postIdentifier,
            url: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>{
                    var ref6;
                    const id = postIdentifier.getCurrentValue();
                    if (id) return ((ref6 = create.getURLFromPostIdentifier) === null || ref6 === void 0 ? void 0 : ref6.call(create, id)) || null;
                    return null;
                },
                subscribe: (sub)=>postIdentifier.subscribe(sub)
            }),
            postMentionedLinks: linksSubscribe,
            postMetadataImages: opt.postImagesProvider || (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>[]
                ,
                subscribe: ()=>()=>{
                    }
            }),
            postMetadataMentionedLinks: linksSubscribe,
            postMessage: opt.rawMessage,
            transformedPostContent,
            postContent: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postContent),
            postPayload: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postPayload),
            decryptedPayloadForImage: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            iv: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null),
            publicShared: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
                getCurrentValue: ()=>postPayload.value.map((val)=>val.version === -38 && val.sharedPublic
                    ).unwrapOr(undefined)
                ,
                subscribe: (sub)=>postPayload.addListener(sub)
            })
        };
    };
}
function createRefsForCreatePostContext() {
    const avatarURL = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const nickname = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postBy = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.unknown, _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ProfileIdentifier.equals);
    const postID = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const url = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(null);
    const postMessage = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef((0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.makeTypedMessageTupleFromList)());
    const postMetadataImages = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet();
    const postMetadataMentionedLinks = new _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableMap();
    const subscriptions = {
        avatarURL: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(avatarURL),
        nickname: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(nickname),
        postBy: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postBy),
        postID: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postID),
        rawMessage: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionFromValueRef)(postMessage),
        postImagesProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataImages
                ]
            ,
            subscribe: (sub)=>postMetadataImages.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
        }),
        postMentionedLinksProvider: (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.SubscriptionDebug)({
            getCurrentValue: ()=>[
                    ...postMetadataMentionedLinks.values()
                ]
            ,
            subscribe: (sub)=>postMetadataMentionedLinks.event.on(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ALL_EVENTS, sub)
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

/***/ 17422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ts": () => (/* binding */ asyncIteratorWithResult),
/* harmony export */   "l4": () => (/* binding */ memorizeAsyncGenerator),
/* harmony export */   "SR": () => (/* binding */ asyncIteratorToArray)
/* harmony export */ });
/* unused harmony export asyncIteratorToAsyncFunction */
async function* asyncIteratorWithResult(iter, callback) {
    let yielded;
    do {
        const p = iter.next();
        callback === null || callback === void 0 ? void 0 : callback(p);
        yielded = await p;
        yield yielded;
    }while (yielded.done === false)
    return;
}
function asyncIteratorToAsyncFunction(f) {
    return async function(...args) {
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
        }
        throw new TypeError('Invalid iterator state');
    };
}
function memorizeAsyncGenerator(f, getKey, expireAfter) {
    const iterCache = new Map();
    const progressCache = new WeakMap();
    return async function* memorizedAsyncGenerator(...args) {
        const key = getKey(...args);
        var ref;
        const iter = (ref = iterCache.get(key)) !== null && ref !== void 0 ? ref : f(...args);
        iterCache.set(key, iter);
        const process = progressCache.get(iter);
        if (!process) {
            setTimeout(()=>iterCache.delete(key)
            , expireAfter);
            const arr = [];
            progressCache.set(iter, arr);
            try {
                for await (const _ of asyncIteratorWithResult(iter, (x)=>arr.push(x)
                )){
                    if (_.done) return _.value;
                    yield _.value;
                }
            } catch  {
                iterCache.delete(key);
            }
        } else {
            let index = 0;
            while(index < process.length){
                const p = await process[index];
                if (p.done) return p.value;
                yield p.value;
                index += 1;
            }
        }
        // cache not working
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
            yield _.value;
        }
        throw new Error('Unreachable');
    };
}
async function asyncIteratorToArray(it) {
    const arr = [];
    for await (const x of it)arr.push(x);
    return arr;
}


/***/ }),

/***/ 58289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "067a0e8b81c9fb631642.png";

/***/ }),

/***/ 35675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "644932e675e6c6dc91c7.png";

/***/ }),

/***/ 26148:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40051051426db91689f7.png";

/***/ }),

/***/ 92014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d254211c3940fc5af1f4.png";

/***/ }),

/***/ 78123:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5268ba3d81ea3bd9e9f1.png";

/***/ }),

/***/ 18077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "413dc2cdada95d3137f6.png";

/***/ }),

/***/ 13116:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4255d8b3a37790f87010.png";

/***/ })

}]);