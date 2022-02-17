"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9237],{

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/dist/resolvers.module.js
var resolvers_module_i=function(e,i){for(var a in i.fields){var f=i.fields[a];if(f&&f.ref&&"reportValidity"in f.ref){var t=(0,index_esm/* get */.U2)(e,a);f.ref.setCustomValidity(t&&t.message||""),f.ref.reportValidity()}}},resolvers_module_a=function(a,f){f.shouldUseNativeValidation&&resolvers_module_i(a,f);var t={};for(var o in a){var s=(0,index_esm/* get */.U2)(f.fields,o);(0,index_esm/* set */.t8)(t,o,Object.assign(a[o],{ref:s&&s.ref}))}return t};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_i({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:resolvers_module_a(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

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

/***/ 19732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const File1 = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M8.08752 12.9375C8.08752 9.62379 10.4 6.9375 13.2525 6.9375H28.7473C31.5998 6.9375 33.9123 9.62379 33.9123 12.9375V36.9375C33.9123 40.2512 31.5998 42.9375 28.7473 42.9375H13.2525C10.4 42.9375 8.08752 40.2512 8.08752 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.1",
            d: "M33.9122 20.3906V12.9375C33.9122 9.62379 31.5998 6.9375 28.7473 6.9375H22.3314L33.9122 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22.3314 6.9375L22.3314 14.3906C22.3314 17.7043 24.6439 20.3906 27.4964 20.3906L33.9122 20.3906L22.3314 6.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.7565 22.8277C22.2814 22.2145 21.649 21.8834 21.0023 21.8834C20.3556 21.8834 19.7233 22.2145 19.2482 22.8277C18.7715 23.443 18.4959 24.2895 18.4959 25.1833V27.7068H23.5088V25.1833C23.5088 24.2895 23.2332 23.443 22.7565 22.8277ZM24.5113 27.7068V25.1833C24.5113 24.0179 24.1531 22.8894 23.5017 22.0486C22.8487 21.2057 21.951 20.7188 21.0023 20.7188C20.0536 20.7188 19.1559 21.2057 18.503 22.0486C17.8515 22.8894 17.4933 24.0179 17.4933 25.1833V27.7068H17.1007C16.2174 27.7068 15.4855 28.5263 15.4855 29.5597V34.0066C15.4855 35.0399 16.2174 35.8594 17.1007 35.8594H24.8985C25.7819 35.8594 26.5138 35.0399 26.5138 34.0066V29.5597C26.5138 28.5263 25.7819 27.7068 24.8985 27.7068H24.5113ZM25.5112 29.5597C25.5112 29.1896 25.2456 28.8715 24.8985 28.8715H17.1007C16.7536 28.8715 16.488 29.1896 16.488 29.5597V34.0066C16.488 34.3766 16.7536 34.6948 17.1007 34.6948H24.8985C25.2456 34.6948 25.5112 34.3766 25.5112 34.0066V29.5597Z",
            fill: "white"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);



/***/ }),

/***/ 71955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97448);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80050);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    textField: {
        width: '100%'
    },
    textFieldInput: {
        backgroundColor: '#F7F9FA'
    },
    input: {
        padding: '11px 9px',
        fontSize: 12
    }
});
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_3__.useStylesExtends)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        inputRef: ref,
        variant: "filled",
        className: classes.textField,
        inputProps: {
            className: classes.input
        },
        InputProps: {
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput
            }
        },
        ...props
    }));
}));


/***/ }),

/***/ 9237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_ImportWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.8.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(89939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(2498);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx + 1 modules
var NetworkSelector = __webpack_require__(32263);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(34054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(1173);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(44612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(27019);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(37146);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(67805);
// EXTERNAL MODULE: ../icons/general/File.tsx
var File = __webpack_require__(19732);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/JsonFileBox/index.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            paddingTop: 10
        },
        fileBox: {
        },
        file: {
            display: 'none'
        },
        enter: {
            color: theme.palette.text.hint,
            whiteSpace: 'pre-line',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            transition: '0.4s',
            overflow: 'hidden',
            padding: '8px 0',
            backgroundColor: '#F7F9FA',
            '&[data-active=true]': {
                color: 'black'
            }
        },
        tips: {
            fontSize: 12,
            lineHeight: '16px'
        }
    })
);
const JsonFileBox = /*#__PURE__*/ (0,react.memo)(({ onChange  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const inputRef = (0,react.useRef)(null);
    const [file, setFile] = (0,react.useState)();
    const [bound, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            setFile(files[0]);
        }
    });
    (0,react.useEffect)(()=>{
        if (file) {
            (0,esm/* blobToText */.Gx)(file).then((result)=>onChange(result)
            );
        }
    }, [
        file,
        onChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ...bound,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.fileBox,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                    className: classes.file,
                    type: "file",
                    accept: "application/json",
                    ref: inputRef,
                    onChange: ({ currentTarget  })=>{
                        if (currentTarget.files) setFile(currentTarget.files.item(0));
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.enter,
                    "data-active": over,
                    onClick: ()=>{
                        var ref;
                        return (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.click();
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(File/* File */.$, {
                            style: {
                                fontSize: 32,
                                width: 32,
                                height: 32
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tips,
                            children: over ? t('popups_wallet_backup_json_file_drag_tip') : file ? file.name : t('popups_wallet_backup_json_file_click_tip')
                        })
                    ]
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ./src/extension/popups/components/StyledInput/index.tsx
var StyledInput = __webpack_require__(71955);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(35313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(83693);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/ImportWallet/index.tsx
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];



















const ImportWallet_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: '16px 10px'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 500
    },
    textField: {
        marginTop: 10
    },
    form: {
        marginTop: 26,
        width: '100%'
    },
    label: {
        fontSize: 12,
        lineHeight: '16px',
        color: '#1C68F3'
    },
    tips: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        marginTop: 10
    },
    tabs: {
        marginTop: 20,
        minHeight: 'unset'
    },
    tab: {
        fontSize: 12,
        lineHeight: '16px',
        padding: 9,
        minWidth: 0,
        backgroundColor: '#F7F9FA',
        minHeight: 'unset'
    },
    indicator: {
        display: 'none'
    },
    selected: {
        backgroundColor: '#ffffff'
    },
    tabPanel: {
        padding: '16px 0 0 0'
    },
    multiline: {
        width: '100%'
    },
    multilineInput: {
        padding: 6,
        backgroundColor: '#F7F9FA'
    },
    textArea: {
        padding: 0,
        fontSize: 12
    },
    button: {
        marginTop: 20,
        padding: '9px 10px',
        borderRadius: 20
    }
});
var ImportWalletTab;
(function(ImportWalletTab1) {
    ImportWalletTab1["Mnemonic"] = 'Mnemonic';
    ImportWalletTab1["JsonFile"] = 'Json File';
    ImportWalletTab1["PrivateKey"] = 'Private Key';
})(ImportWalletTab || (ImportWalletTab = {
}));
const ImportWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = ImportWallet_useStyles();
    const [currentTab, setCurrentTab] = (0,react.useState)(ImportWalletTab.Mnemonic);
    const [mnemonic, setMnemonic] = (0,react.useState)('');
    const [keyStoreContent, setKeyStoreContent] = (0,react.useState)('');
    const [keyStorePassword, setKeyStorePassword] = (0,react.useState)('');
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            name: lib.z.string().min(1).max(12),
            password: lib.z.string().min(8).max(20).refine((input)=>/[A-Z]/.test(input)
            , t('popups_wallet_password_uppercase_tip')).refine((input)=>/[a-z]/.test(input)
            , t('popups_wallet_password_lowercase_tip')).refine((input)=>/\d/.test(input)
            , t('popups_wallet_password_number_tip')).refine((input)=>/[^\dA-Za-z]/.test(input)
            , t('popups_wallet_password_special_character_tip')),
            confirm: lib.z.string().min(8).max(20)
        }).refine((data)=>data.password === data.confirm
        , {
            message: t('popups_wallet_password_dont_match'),
            path: [
                'confirm'
            ]
        });
    }, []);
    const { control , handleSubmit , formState: { errors , isValid  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            name: '',
            password: '',
            confirm: ''
        }
    });
    const [{ loading  }, onDerivedWallet] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        switch(currentTab){
            case ImportWalletTab.Mnemonic:
                const params = (0,dist.query)({
                    mnemonic
                });
                history.replace({
                    pathname: popups/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet,
                    search: `?${params}`
                });
                break;
            case ImportWalletTab.JsonFile:
                const { address , privateKey: _private_key_  } = await messages/* WalletRPC.fromKeyStore */.V.fromKeyStore(keyStoreContent, Buffer.from(keyStorePassword, 'utf-8'));
                await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                    name: data.name,
                    address,
                    _private_key_
                });
                history.goBack();
                break;
            case ImportWalletTab.PrivateKey:
                const { address: walletAddress , privateKeyValid  } = await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(privateKey);
                if (!privateKeyValid) enqueueSnackbar(t('import_failed'), {
                    variant: 'error'
                });
                await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                    name: data.name,
                    address: walletAddress,
                    _private_key_: privateKey
                });
                history.goBack();
                break;
            default:
                break;
        }
    }, [
        mnemonic,
        currentTab,
        keyStoreContent,
        keyStorePassword,
        privateKey
    ]);
    const onSubmit = handleSubmit(onDerivedWallet);
    const disabled = (0,react.useMemo)(()=>{
        if (!isValid) return true;
        switch(currentTab){
            case ImportWalletTab.Mnemonic:
                return !mnemonic;
            case ImportWalletTab.JsonFile:
                return !keyStoreContent;
            case ImportWalletTab.PrivateKey:
                return !privateKey;
            default:
                return true;
        }
    }, [
        currentTab,
        mnemonic,
        keyStorePassword,
        keyStoreContent,
        privateKey,
        isValid
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        children: t('import_failed')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                className: classes.form,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: t('wallet_name')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                render: ({ field  })=>{
                                    var ref, ref1;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                        ...field,
                                        classes: {
                                            root: classes.textField
                                        },
                                        error: !!((ref = errors.name) === null || ref === void 0 ? void 0 : ref.message),
                                        helperText: (ref1 = errors.name) === null || ref1 === void 0 ? void 0 : ref1.message,
                                        variant: "filled",
                                        placeholder: t('popups_wallet_name_placeholder')
                                    }));
                                },
                                control: control,
                                name: "name"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            marginTop: 16
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: t('popups_wallet_payment_password')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref5, ref6;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                        ...field,
                                        classes: {
                                            root: classes.textField
                                        },
                                        type: "password",
                                        variant: "filled",
                                        placeholder: t('popups_wallet_payment_password'),
                                        error: !!((ref5 = errors.password) === null || ref5 === void 0 ? void 0 : ref5.message),
                                        helperText: (ref6 = errors.password) === null || ref6 === void 0 ? void 0 : ref6.message
                                    }));
                                },
                                name: "password"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                render: ({ field  })=>{
                                    var ref7, ref8;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                        classes: {
                                            root: classes.textField
                                        },
                                        ...field,
                                        error: !!((ref7 = errors.confirm) === null || ref7 === void 0 ? void 0 : ref7.message),
                                        helperText: (ref8 = errors.confirm) === null || ref8 === void 0 ? void 0 : ref8.message,
                                        type: "password",
                                        variant: "filled",
                                        placeholder: "Re-enter the payment password"
                                    }));
                                },
                                name: "confirm",
                                control: control
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.tips,
                        children: t('popups_wallet_payment_password_tip')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                        value: currentTab,
                        variant: "fullWidth",
                        className: classes.tabs,
                        classes: {
                            indicator: classes.indicator
                        },
                        onChange: (event, tab)=>setCurrentTab(tab)
                        ,
                        children: (0,esm/* getEnumAsArray */.Yl)(ImportWalletTab).map(({ key , value  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: key,
                                value: value,
                                classes: {
                                    root: classes.tab,
                                    selected: classes.selected
                                }
                            })
                        )
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: ImportWalletTab.Mnemonic,
                        className: classes.tabPanel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            variant: "filled",
                            multiline: true,
                            value: mnemonic,
                            onChange: (e)=>setMnemonic(e.target.value)
                            ,
                            rows: 4,
                            placeholder: "Please enter 12 mnemonic words separated by spaces",
                            InputProps: {
                                disableUnderline: true,
                                classes: {
                                    root: classes.multilineInput
                                }
                            },
                            className: classes.multiline,
                            inputProps: {
                                className: classes.textArea
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                        value: ImportWalletTab.JsonFile,
                        className: classes.tabPanel,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(JsonFileBox, {
                                onChange: (content)=>setKeyStoreContent(content)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                type: "password",
                                classes: {
                                    root: classes.textField
                                },
                                placeholder: "Original Password",
                                onChange: (e)=>setKeyStorePassword(e.target.value)
                                ,
                                value: keyStorePassword
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: ImportWalletTab.PrivateKey,
                        className: classes.tabPanel,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            variant: "filled",
                            multiline: true,
                            value: privateKey,
                            onChange: (e)=>setPrivateKey(e.target.value)
                            ,
                            rows: 4,
                            placeholder: "Private Key",
                            InputProps: {
                                disableUnderline: true,
                                classes: {
                                    root: classes.multilineInput
                                }
                            },
                            className: classes.multiline,
                            inputProps: {
                                className: classes.textArea
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                variant: "contained",
                fullWidth: true,
                className: classes.button,
                disabled: disabled,
                onClick: onSubmit,
                children: "Import"
            })
        ]
    }));
});
/* harmony default export */ const Wallet_ImportWallet = (ImportWallet);


/***/ })

}]);