"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4424],{

/***/ 9642:
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/utils/capitalize.js
var capitalize = __webpack_require__(36212);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(59891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(88448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(43285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(81021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(26110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(98224);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/LoadingButton/loadingButtonClasses.js

function getLoadingButtonUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiLoadingButton', slot);
}
const loadingButtonClasses = (0,generateUtilityClasses/* default */.Z)('MuiLoadingButton', ['root', 'loading', 'loadingIndicator', 'loadingIndicatorCenter', 'loadingIndicatorStart', 'loadingIndicatorEnd', 'endIconLoadingEnd', 'startIconLoadingStart']);
/* harmony default export */ const LoadingButton_loadingButtonClasses = (loadingButtonClasses);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js


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

/***/ 14424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Personas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(13325);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/index.tsx + 11 modules
var DashboardFrame = __webpack_require__(3822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/capitalize.js
var capitalize = __webpack_require__(22353);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(62758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/Link.tsx


const LinkIcon = (0,utils/* createIcon */.I)('Link', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16 19.25C16.5368 19.9676 17.2217 20.5614 18.0082 20.9911C18.7947 21.4208 19.6644 21.6764 20.5583 21.7404C21.4522 21.8044 22.3495 21.6754 23.1892 21.3622C24.0289 21.049 24.7914 20.5588 25.425 19.925L29.175 16.175C30.3135 14.9962 30.9435 13.4174 30.9292 11.7787C30.915 10.14 30.2577 8.57239 29.0989 7.41359C27.9401 6.25479 26.3725 5.59748 24.7338 5.58324C23.095 5.569 21.5163 6.19897 20.3375 7.33746L18.1875 9.47496",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.9988 16.7498C20.462 16.0321 19.7771 15.4383 18.9906 15.0086C18.2041 14.5789 17.3344 14.3234 16.4405 14.2594C15.5465 14.1954 14.6493 14.3243 13.8096 14.6376C12.9699 14.9508 12.2074 15.441 11.5738 16.0748L7.82379 19.8248C6.6853 21.0036 6.05533 22.5823 6.06957 24.2211C6.08381 25.8598 6.74112 27.4274 7.89992 28.5862C9.05872 29.745 10.6263 30.4023 12.265 30.4165C13.9038 30.4307 15.4825 29.8008 16.6613 28.6623L18.7988 26.5248",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(28951);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaSetup/index.tsx







const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        iconContainer: {
            width: 90,
            height: 90,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            backgroundColor: src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground
        },
        button: {
            borderRadius: Number(theme.shape.borderRadius) * 4.5,
            padding: theme.spacing(0.75, 4)
        }
    })
);
const PersonaSetup = /*#__PURE__*/ (0,react.memo)(({ networkIdentifier , onConnect  })=>{
    const { classes  } = useStyles();
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.iconContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkIcon, {
                    color: "primary",
                    fontSize: "inherit",
                    style: {
                        fill: 'none'
                    },
                    viewBox: "0 0 36 36"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    marginTop: 2.5,
                    marginBottom: 2.5
                },
                children: t.personas_setup_connect_tips({
                    type: networkIdentifier.replace('.com', '')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                onClick: onConnect,
                children: t.personas_setup_connect()
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../icons/general/Author.tsx


const AuthorIcon = (0,utils/* createIcon */.I)('AuthorIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "18",
            cy: "18",
            r: "18"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 33.592V20a9 9 0 1118 0v13.592A17.917 17.917 0 0118 36c-3.279 0-6.352-.877-9-2.408z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.5 20.361v3.056h-9.561a4.157 4.157 0 007.784.916H23.5V26.9a1.1 1.1 0 01-1.1 1.1h-8.8a1.1 1.1 0 01-1.1-1.1v-6.539h11zm-2.832 3.972a3.235 3.235 0 01-2.675 1.413 3.235 3.235 0 01-2.675-1.413h5.35zm-5.02-3.239c-.863 0-1.576.638-1.695 1.467h.938a.795.795 0 011.512 0h.938a1.711 1.711 0 00-1.694-1.467zm4.705 0c-.862 0-1.575.638-1.694 1.467h.938a.795.795 0 011.512 0h.938a1.712 1.712 0 00-1.694-1.467zM22.4 17a1.1 1.1 0 011.1 1.1v1.344h-11V18.1a1.1 1.1 0 011.1-1.1h8.8z",
            fill: "#fff"
        })
    ]
}), '0 0 36 36');

;// CONCATENATED MODULE: ../icons/general/ArrowUpRound.tsx


const ArrowUpRound = (0,utils/* createIcon */.I)('ArrowUp', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M18 15.6l-4-4-4 4",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 28 28');

// EXTERNAL MODULE: ../icons/general/ArrowDownRound.tsx
var ArrowDownRound = __webpack_require__(40666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(30474);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(53630);
// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(82074);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(54587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaLine/index.tsx





const UnconnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ onConnect , networkIdentifier  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        underline: "none",
        onClick: (e)=>{
            e.stopPropagation();
            onConnect();
        },
        sx: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            cursor: 'pointer'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "caption",
            sx: {
                color: src/* MaskColorVar.textPrimary */.ZN.textPrimary
            },
            children: t.personas_connect_to({
                internalName: networkIdentifier
            })
        })
    }));
});
const ConnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ userId , onDisconnect  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
        underline: "none",
        sx: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "caption",
                sx: {
                    color: src/* MaskColorVar.textPrimary */.ZN.textPrimary
                },
                children: userId
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                component: "button",
                variant: "caption",
                onClick: (e)=>{
                    e.stopPropagation();
                    onDisconnect();
                },
                children: t.personas_disconnect()
            })
        ]
    }));
});

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(30255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(62623);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/DeletePersonaDialog/index.tsx





const DeletePersonaDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , nickname  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_delete_dialog_title(),
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        sx: {
                            wordBreak: 'break-all'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(locales/* DashboardTrans.personas_delete_confirm_tips */.Kd.personas_delete_confirm_tips, {
                            components: {
                                i: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    style: {
                                        color: src/* MaskColorVar.primary */.ZN.primary
                                    }
                                })
                            },
                            values: {
                                nickname: nickname !== null && nickname !== void 0 ? nickname : ''
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        variant: "filled",
                        label: "Password",
                        type: "password",
                        InputProps: {
                            disableUnderline: true
                        },
                        fullWidth: true,
                        sx: {
                            marginTop: 2.75
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        children: t.personas_confirm()
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/utils/checkLengthExceed.ts
const PERSONA_NAME_MAX_LENGTH = 24;
function isPersonaNameLengthValid(value) {
    // Array.from(string).length is not equal to string.length.
    // you can take 👩‍👩‍👦‍👦 as an example
    return Array.from(value).length < PERSONA_NAME_MAX_LENGTH;
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/RenameDialog/index.tsx






const RenameDialog = /*#__PURE__*/ (0,react.memo)(({ open , nickname , onClose , onConfirm  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [name, setName] = (0,react.useState)(nickname !== null && nickname !== void 0 ? nickname : '');
    (0,react.useEffect)(()=>{
        setName(nickname !== null && nickname !== void 0 ? nickname : '');
    }, [
        open,
        nickname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_rename(),
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    placeholder: t.personas_rename_placeholder(),
                    style: {
                        width: '100%'
                    },
                    error: !isPersonaNameLengthValid(name),
                    helperText: !isPersonaNameLengthValid(name) ? t.personas_name_maximum_tips({
                        length: String(PERSONA_NAME_MAX_LENGTH)
                    }) : '',
                    InputProps: {
                        disableUnderline: true
                    },
                    value: name,
                    onChange: (e)=>setName(e.target.value)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>onConfirm(name)
                        ,
                        children: t.personas_confirm()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_dd3df4049b9a65e1e2d003c7940c4871/node_modules/react-router/index.js
var react_router = __webpack_require__(31757);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(53082);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(43402);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(29886);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useExportPrivateKey.ts


function useExportPrivateKey(identifier) {
    return (0,useAsync/* default */.Z)(async ()=>{
        return API/* Services.Identity.exportPersonaPrivateKey */.K9.Identity.exportPersonaPrivateKey(identifier);
    }, [
        identifier
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(13696);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ExportPrivateKeyDialog/index.tsx









const ExportPrivateKeyDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , identifier  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [state, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const { value: privateKey  } = useExportPrivateKey(identifier);
    const getCopyButtonText = ()=>{
        var ref;
        if (state.value) {
            return t.personas_export_persona_copy_success();
        }
        if ((ref = state.error) === null || ref === void 0 ? void 0 : ref.message) {
            return t.personas_export_persona_copy_failed();
        }
        return t.personas_export_persona_copy();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_export_persona(),
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                        value: privateKey,
                        InputProps: {
                            disableUnderline: true
                        },
                        fullWidth: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "caption",
                            children: [
                                t.personas_export_private_key_tip(),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    sx: {
                                        fontSize: 12,
                                        py: 0
                                    },
                                    onClick: ()=>navigate(type/* RoutePaths.Settings */.s2.Settings)
                                    ,
                                    children: t.settings_global_backup_title()
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>copyToClipboard(privateKey !== null && privateKey !== void 0 ? privateKey : '')
                        ,
                        children: getCopyButtonText()
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaCard/index.tsx














const PersonaCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: Number(theme.shape.borderRadius) * 3,
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            display: 'flex',
            padding: theme.spacing(1.25),
            minWidth: 320
        },
        status: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            marginRight: theme.spacing(1.25),
            marginTop: theme.spacing(0.625)
        },
        statusInactivated: {
            backgroundColor: src/* MaskColorVar.iconLight */.ZN.iconLight
        },
        statusActivated: {
            backgroundColor: src/* MaskColorVar.greenMain */.ZN.greenMain
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: theme.typography.caption.fontSize
        },
        content: {
            marginTop: theme.spacing(1.25),
            paddingRight: theme.spacing(1.25)
        },
        line: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: theme.typography.caption.fontSize
        },
        setting: {
            fontSize: theme.typography.caption.fontSize,
            padding: 0
        }
    })
);
const PersonaCard = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { connectPersona , disconnectPersona , renamePersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCardUI, {
        ...props,
        onConnect: connectPersona,
        onDisconnect: disconnectPersona,
        onRename: renamePersona,
        definedSocialNetworks: definedSocialNetworks
    }));
});
const PersonaCardUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { nickname , active =false , definedSocialNetworks , identifier , profiles  } = props;
    const { onConnect , onDisconnect , onClick , onRename  } = props;
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = PersonaCard_useStyles();
    const [renameDialogOpen, setRenameDialogOpen] = (0,react.useState)(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = (0,react.useState)(false);
    const [exportPrivateKeyDialogOpen, setExportPrivateKeyDialogOpen] = (0,react.useState)(false);
    const [menu, openMenu] = (0,shared_src.useMenu)(/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>setRenameDialogOpen(true)
        ,
        children: t.personas_edit()
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>setExportPrivateKeyDialogOpen(true)
        ,
        children: t.personas_export_private()
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>setDeleteDialogOpen(true)
        ,
        style: {
            color: src/* MaskColorVar.redMain */.ZN.redMain
        },
        children: t.personas_delete()
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(classes.status, active ? classes.statusActivated : classes.statusInactivated)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "subtitle2",
                                sx: {
                                    cursor: 'pointer'
                                },
                                onClick: onClick,
                                children: nickname
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                size: "large",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    openMenu(e);
                                },
                                className: classes.setting,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                                    fontSize: "inherit",
                                    style: {
                                        fill: src/* MaskColorVar.textPrimary */.ZN.textPrimary
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.content,
                        children: definedSocialNetworks.map(({ networkIdentifier  })=>{
                            const profile = profiles.find((x)=>x.identifier.network === networkIdentifier
                            );
                            if (profile) {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedPersonaLine, {
                                    onDisconnect: ()=>onDisconnect(profile.identifier)
                                    ,
                                    userId: profile.identifier.userId
                                }, networkIdentifier));
                            } else {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnconnectedPersonaLine, {
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier));
                            }
                        })
                    })
                ]
            }),
            menu,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameDialog, {
                open: renameDialogOpen,
                nickname: nickname,
                onClose: ()=>setRenameDialogOpen(false)
                ,
                onConfirm: (name)=>{
                    onRename(identifier, name);
                    setRenameDialogOpen(false);
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DeletePersonaDialog, {
                open: deleteDialogOpen,
                onClose: ()=>setDeleteDialogOpen(false)
                ,
                nickname: nickname
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ExportPrivateKeyDialog, {
                open: exportPrivateKeyDialogOpen,
                identifier: identifier,
                onClose: ()=>setExportPrivateKeyDialogOpen(false)
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/AddPersonaCard/index.tsx







const AddPersonaCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'grid',
            borderRadius: Number(theme.shape.borderRadius) * 2,
            padding: theme.spacing(1.5),
            gridRowGap: theme.spacing(1.25),
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gridColumnGap: theme.spacing(3)
        }
    })
);
const AddPersonaCard = /*#__PURE__*/ (0,react.memo)(({ onConfirm , onCancel  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [name, setName] = (0,react.useState)('');
    const { classes  } = AddPersonaCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                label: "Name",
                variant: "filled",
                error: !isPersonaNameLengthValid(name),
                helperText: !isPersonaNameLengthValid(name) ? t.personas_name_maximum_tips({
                    length: String(PERSONA_NAME_MAX_LENGTH)
                }) : '',
                InputProps: {
                    disableUnderline: true
                },
                value: name,
                onChange: (e)=>setName(e.target.value)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        disabled: !name.length || !isPersonaNameLengthValid(name),
                        onClick: ()=>onConfirm(name)
                        ,
                        children: t.personas_confirm()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onCancel,
                        children: t.personas_cancel()
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaDrawer/index.tsx









const PersonaDrawer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            // material-ui toolbar height
            top: `64px !important`
        },
        paper: {
            // material-ui toolbar height
            top: `64px`,
            padding: theme.spacing(3.75, 3.75, 11.25, 3.75),
            background: src/* MaskColorVar.suspensionBackground */.ZN.suspensionBackground,
            '& > *': {
                marginTop: theme.spacing(1.5)
            }
        },
        backdrop: {
            background: 'none',
            top: 64
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: theme.spacing(3.5)
        },
        backup: {
            backgroundColor: src/* MaskColorVar.warning */.ZN.warning,
            '&:hover': {
                backgroundColor: src/* MaskColorVar.warning */.ZN.warning,
                boxShadow: `0 0 5px ${src/* MaskColorVar.warning */.ZN.warning}`
            }
        }
    })
);
const PersonaDrawer = /*#__PURE__*/ (0,react.memo)(({ personas  })=>{
    const { drawerOpen , toggleDrawer , currentPersona , createPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawerUI, {
        personas: personas,
        currentPersonaIdentifier: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier,
        open: drawerOpen,
        toggleDrawer: toggleDrawer,
        onChangeCurrentPersona: changeCurrentPersona,
        onCreatePersona: createPersona
    }));
});
const PersonaDrawerUI = /*#__PURE__*/ (0,react.memo)(({ open , currentPersonaIdentifier , toggleDrawer , personas , onChangeCurrentPersona , onCreatePersona  })=>{
    const { classes  } = PersonaDrawer_useStyles();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [showAddPersonaCard, setShowAddPersonaCard] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Drawer/* default */.ZP, {
        anchor: "right",
        open: open,
        onClose: toggleDrawer,
        variant: "temporary",
        ModalProps: {
            BackdropProps: {
                className: classes.backdrop
            }
        },
        elevation: 0,
        classes: {
            root: classes.root,
            paper: classes.paper
        },
        children: [
            personas.map((item)=>{
                const { identifier , nickname , linkedProfiles  } = item;
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCard, {
                    identifier: identifier,
                    active: identifier.equals(currentPersonaIdentifier),
                    nickname: nickname,
                    profiles: [
                        ...linkedProfiles.values()
                    ],
                    onClick: ()=>onChangeCurrentPersona(identifier)
                }, identifier.toText()));
            }),
            showAddPersonaCard && /*#__PURE__*/ (0,jsx_runtime.jsx)(AddPersonaCard, {
                onConfirm: (nickName)=>{
                    onCreatePersona(nickName);
                    setShowAddPersonaCard(false);
                },
                onCancel: ()=>setShowAddPersonaCard(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>setShowAddPersonaCard(true)
                        ,
                        children: t.personas_add_persona()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "warning",
                        children: t.personas_back_up()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(7230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useContacts.ts




const useContacts = (network, page, size = 20)=>{
    const cache = (0,react.useRef)(new Map([]));
    // If the network type be changed, clean cache
    (0,useUpdateEffect/* default */.Z)(()=>{
        cache.current = new Map();
    }, [
        network
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const lastValue = cache.current.get(page - 1);
        const values = await API/* Services.Identity.queryRelationPaged */.K9.Identity.queryRelationPaged({
            network,
            after: lastValue
        }, size);
        // Cache the last record of  each page
        cache.current.set(page, (0,last/* default */.Z)(values));
        const profiles = await API/* Services.Identity.queryProfilesWithIdentifiers */.K9.Identity.queryProfilesWithIdentifiers(values.map((x)=>x.profile
        ));
        return profiles.map((profile)=>{
            var ref;
            const favor = (ref = values.find((x)=>x.profile.equals(profile.identifier)
            )) === null || ref === void 0 ? void 0 : ref.favor;
            return {
                favor,
                ...profile
            };
        });
    }, [
        page,
        size,
        network
    ]);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(92197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(63706);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(82497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(38749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82870);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(58314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TablePagination/TablePagination.js + 2 modules
var TablePagination = __webpack_require__(78816);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(4527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(19392);
;// CONCATENATED MODULE: ../icons/general/Star.tsx


const StarIcon = (0,utils/* createIcon */.I)('StartIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M11.742 17.426a.5.5 0 01.516 0l4.908 2.962a.5.5 0 00.745-.542l-1.302-5.582a.5.5 0 01.16-.492l4.337-3.758a.5.5 0 00-.284-.876l-5.712-.492a.5.5 0 01-.418-.303L12.46 3.084a.5.5 0 00-.92 0l-2.232 5.26a.5.5 0 01-.418.302l-5.713.493a.5.5 0 00-.285.875l4.33 3.759a.5.5 0 01.16.49l-1.295 5.585a.5.5 0 00.746.54l4.909-2.962z"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/brands/MaskBlue.tsx
var MaskBlue = __webpack_require__(52403);
;// CONCATENATED MODULE: ../dashboard/src/utils/generateContactAvatarColor.ts
function generateContactAvatarColor(string, theme) {
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? `78%` : '98%'}, ${theme === 'dark' ? `50%` : '70%'})`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(36198);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useFavoriteContact.ts


function useAddContactToFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, 1);
    }, []);
}
function useRemoveContactFromFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, 0);
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(9642);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactTableRow/index.tsx













const ContactTableRow_useStyles = (0,src/* makeStyles */.ZL)()({
    favorite: {
        marginLeft: 16,
        marginRight: 26,
        width: 24,
        height: 24
    },
    avatarContainer: {
        position: 'relative'
    },
    maskIcon: {
        position: 'absolute',
        width: 16,
        height: 16,
        right: 0,
        bottom: 0
    },
    button: {
        padding: '3px 24px',
        borderRadius: 14
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 17,
        justifyContent: 'space-between'
    },
    userId: {
        fontSize: 12,
        color: src/* MaskColorVar.normalText */.ZN.normalText
    }
});
const ContactTableRow = /*#__PURE__*/ (0,react.memo)(({ network , contact , index  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [, addContactToFavorite] = useAddContactToFavorite();
    const [, removeContactFromFavorite] = useRemoveContactFromFavorite();
    const theme = (0,useTheme/* default */.Z)().palette.mode;
    const handleClickStar = (0,react.useCallback)(()=>{
        if (currentPersona) {
            contact.favorite ? removeContactFromFavorite(contact.identifier, currentPersona) : addContactToFavorite(contact.identifier, currentPersona);
        }
    }, [
        contact,
        currentPersona
    ]);
    const [{ loading  }, handleClickInvite] = (0,useAsyncFn/* default */.Z)(async ()=>{
        return API/* Services.Helper.createNewWindowAndPasteShareContent */.K9.Helper.createNewWindowAndPasteShareContent(network, t.personas_invite_post({
            identifier: contact.identifier.userId
        }));
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRowUI, {
        handleClickInvite: handleClickInvite,
        handleClickStar: handleClickStar,
        theme: theme,
        loading: loading,
        contact: contact,
        index: index
    }));
});
const ContactTableRowUI = /*#__PURE__*/ (0,react.memo)(({ contact , index , handleClickStar , handleClickInvite , theme , loading  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = ContactTableRow_useStyles();
    const [first, last] = contact.name.split(' ');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "left",
                variant: "body",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: index
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.favorite,
                            children: contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StarIcon, {
                                sx: {
                                    fill: contact.favorite ? src/* MaskColorVar.warning */.ZN.warning : src/* MaskColorVar.iconLight */.ZN.iconLight,
                                    cursor: 'pointer'
                                },
                                onClick: handleClickStar
                            }) : null
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.avatarContainer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Avatar/* default */.Z, {
                                    "aria-label": contact.name,
                                    src: contact.avatar,
                                    sx: {
                                        backgroundColor: generateContactAvatarColor(contact.identifier.toText(), theme),
                                        width: 48,
                                        height: 48
                                    },
                                    children: [
                                        first[0],
                                        (last || '')[0]
                                    ]
                                }),
                                contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBlue/* MaskBlueIcon */.I, {
                                    className: classes.maskIcon
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.info,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: contact.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.userId,
                                    children: [
                                        "@",
                                        contact.identifier.userId
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "center",
                children: !contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    color: "secondary",
                    size: "small",
                    className: classes.button,
                    onClick: handleClickInvite,
                    children: t.personas_contacts_invite()
                }) : null
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/FilledInput/FilledInput.js + 1 modules
var FilledInput = __webpack_require__(23893);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(99726);
// EXTERNAL MODULE: ../dashboard/src/locales/i18n_generated.js
var i18n_generated = __webpack_require__(28074);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/EmptyContactPlaceholder/index.tsx









const EmptyContactPlaceholder_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: src/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        },
        download: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        },
        input: {
            fontSize: 12,
            paddingTop: 8,
            width: 280
        },
        button: {
            marginLeft: 20
        }
    })
);
const downloadUrl = 'https: //mask.io/download-links/';
const EmptyContactPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyDownloadLink = (0,shared_src.useSnackbarCallback)({
        executor: async ()=>copyToClipboard(downloadUrl)
        ,
        deps: []
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholderUI, {
        onCopy: copyDownloadLink
    }));
});
const EmptyContactPlaceholderUI = /*#__PURE__*/ (0,react.memo)(({ onCopy  })=>{
    const { classes  } = EmptyContactPlaceholder_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(i18n_generated/* DashboardTrans.personas_empty_contact_tips */.K.personas_empty_contact_tips, {
                    components: {
                        i: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: downloadUrl
                        })
                    },
                    values: {
                        name: 'Mask Network'
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.download,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                        value: downloadUrl,
                        disabled: true,
                        classes: {
                            input: classes.input
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        onClick: onCopy,
                        children: "Copy"
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlacholder/index.tsx + 1 modules
var LoadingPlacholder = __webpack_require__(23007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js + 5 modules
var sortBy = __webpack_require__(3869);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactsTable/index.tsx












const ContactsTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: 'calc(100% - 58px)'
        },
        header: {
            color: src/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '24px 28px',
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        footer: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${src/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: src/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: src/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const PageSize = 20;
const ContactsTable = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const { value , error , loading , retry  } = useContacts(network, page, PageSize);
    const dataSource = (0,react.useMemo)(()=>{
        if (!value) return [];
        return (0,sortBy/* default */.Z)(value.map((profile)=>{
            var ref;
            return {
                favorite: profile.favor,
                name: profile.nickname || profile.identifier.userId || '',
                fingerprint: (ref = profile.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint,
                identifier: profile.identifier,
                avatar: profile.avatar
            };
        }), (item)=>!item.favorite
        );
    }, [
        value,
        page
    ]);
    (0,react.useEffect)(()=>{
        setPage(0);
    }, [
        network
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.relationsChanged.on */.Vm.events.relationsChanged.on(retry);
    }, [
        retry
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTableUI, {
        isEmpty: !!error || !dataSource.length,
        isLoading: loading,
        network: network,
        dataSource: dataSource,
        page: page,
        onPageChange: setPage,
        showPagination: !loading && !error && !!(value === null || value === void 0 ? void 0 : value.length)
    }));
});
const ContactsTableUI = /*#__PURE__*/ (0,react.memo)(({ showPagination , page , onPageChange , network , dataSource , isEmpty , isLoading  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = ContactsTable_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: classes.container,
                children: isEmpty || isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    flex: 1,
                    children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlacholder/* LoadingPlaceholder */.u, {
                    }) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholder, {
                    }) : null
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    stickyHeader: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        variant: "head",
                                        align: "center",
                                        className: classes.header,
                                        children: t.personas_contacts_name()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        variant: "head",
                                        align: "center",
                                        className: classes.header,
                                        children: t.personas_contacts_operation()
                                    })
                                ]
                            })
                        }),
                        dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRow, {
                                    contact: item,
                                    index: page * PageSize + index + 1,
                                    network: network
                                }, index)
                            )
                        }) : null
                    ]
                })
            }),
            showPagination && !isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{
                    },
                    page: page,
                    rowsPerPage: PageSize,
                    rowsPerPageOptions: [
                        PageSize
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: dataSource.length < PageSize,
                        size: 'small'
                    }
                })
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaContent/index.tsx







const PersonaContent_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        height: '100%'
    },
    tab: {
        maxHeight: '100%',
        height: '100%',
        overflow: 'scroll'
    }
});
var PersonaContentTab;
(function(PersonaContentTab1) {
    PersonaContentTab1["Posts"] = 'POST';
    PersonaContentTab1["Contacts"] = 'Contacts';
})(PersonaContentTab || (PersonaContentTab = {
}));
const PersonaContent = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const { classes  } = PersonaContent_useStyles();
    const [tab, setTab] = (0,react.useState)(PersonaContentTab.Posts);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* ButtonGroupTabList */.E1, {
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Posts,
                            label: "Posts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Contacts,
                            label: "Contacts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Posts,
                    className: classes.tab,
                    children: "Post"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Contacts,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTable, {
                        network: network
                    })
                })
            ]
        })
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/index.tsx















const Personas_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tabPanel: {
            padding: 0,
            flex: 1
        },
        author: {
            fill: src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
            width: 36,
            height: 36
        },
        iconButton: {
            padding: 0,
            fontSize: 16,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: `1px solid ${src/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)}`
        },
        arrow: {
            fill: 'none',
            stroke: src/* MaskColorVar.primary */.ZN.primary
        },
        label: {
            width: 'auto'
        },
        nickname: {
            margin: theme.spacing(0, 1.5),
            lineHeight: 1.375
        },
        tab: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        }
    })
);
function firstProfileNetwork(x) {
    var ref, ref1;
    return (ref = x === null || x === void 0 ? void 0 : x.linkedProfiles[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.identifier) === null || ref1 === void 0 ? void 0 : ref1.network;
}
function Personas() {
    const { classes  } = Personas_useStyles();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { drawerOpen , toggleDrawer , personas , currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    var ref;
    const [activeTab, setActiveTab] = (0,react.useState)((ref = firstProfileNetwork(currentPersona)) !== null && ref !== void 0 ? ref : definedSocialNetworks[0].networkIdentifier);
    (0,react.useEffect)(()=>{
        var ref1;
        setActiveTab((ref1 = firstProfileNetwork(currentPersona)) !== null && ref1 !== void 0 ? ref1 : definedSocialNetworks[0].networkIdentifier);
    }, [
        currentPersona,
        definedSocialNetworks
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardFrame/* PageFrame */.C, {
        title: t.personas(),
        primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AuthorIcon, {
                    onClick: toggleDrawer,
                    className: classes.author
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.nickname,
                    children: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.nickname
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    onClick: toggleDrawer,
                    size: "small",
                    className: classes.iconButton,
                    children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUpRound, {
                        className: classes.arrow,
                        fontSize: "inherit"
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownRound/* ArrowDownRound */.l, {
                        className: classes.arrow,
                        fontSize: "inherit"
                    })
                })
            ]
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                    value: activeTab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                            value: !!activeTab ? activeTab : false,
                            onChange: (event, tab)=>setActiveTab(tab)
                            ,
                            children: definedSocialNetworks.map(({ networkIdentifier  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    value: networkIdentifier,
                                    // They should be localized
                                    label: (0,capitalize/* default */.Z)(networkIdentifier.replace('.com', ''))
                                }, networkIdentifier)
                            )
                        }),
                        definedSocialNetworks.map(({ networkIdentifier  })=>{
                            if (!currentPersona) return null;
                            const profile = currentPersona.linkedProfiles.find((x)=>x.identifier.network === networkIdentifier
                            );
                            if (profile) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: networkIdentifier,
                                className: activeTab === networkIdentifier ? classes.tab : undefined,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaContent, {
                                    network: networkIdentifier
                                })
                            }, networkIdentifier));
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: networkIdentifier,
                                sx: {
                                    flex: 1
                                },
                                className: activeTab === networkIdentifier ? classes.tab : undefined,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSetup, {
                                    networkIdentifier: networkIdentifier,
                                    onConnect: ()=>connectPersona(currentPersona.identifier, networkIdentifier)
                                })
                            }, networkIdentifier));
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawer, {
                personas: personas
            })
        ]
    }));
}
/* harmony default export */ const pages_Personas = (Personas);


/***/ }),

/***/ 40666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 11.6l4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 28 28');


/***/ }),

/***/ 82074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ })

}]);