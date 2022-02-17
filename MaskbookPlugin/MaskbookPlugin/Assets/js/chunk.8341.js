"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7535],{

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

/***/ 52547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ BackupInfoCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34421);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76900);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5075);
/* harmony import */ var date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81959);





const BackupInfoCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ info  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        variant: "background",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
            container: true,
            spacing: 2,
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            sx: {
                padding: '8px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
                    item: true,
                    xs: 10,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                        spacing: 1,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                                variant: "body2",
                                children: info.abstract
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                                variant: "body2",
                                children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)((0,date_fns_fromUnixTime__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(info.uploadedAt), 'yyyy-MM-dd HH:mm')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP, {
                    item: true,
                    xs: 2,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            align: "right",
                            variant: "body2",
                            children: [
                                Math.ceil(info.size / 1024),
                                "K"
                            ]
                        })
                    })
                })
            ]
        })
    }));
});


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8341.js
/***/ 93428:
=======
/***/ 90612:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7535.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ LoadingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8341.js
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13230);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36487);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88808);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76814);
=======
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64345);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7535.js
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);




const LoadingCard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ text ='Loading'  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        variant: "background",
        sx: {
            width: '100%'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
            justifyContent: "center",
            alignItems: "center",
            sx: {
                minHeight: 140
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .LoadingIcon */ .H, {
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    variant: "body2",
                    marginBottom: 0,
                    marginTop: "8px",
                    children: text
                })
            ]
        })
    }));
});


/***/ }),

/***/ 34815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZK": () => (/* binding */ useLanguage),
/* harmony export */   "Wg": () => (/* binding */ useTrendingDataSource),
/* harmony export */   "L6": () => (/* binding */ useEthereumNetworkTradeProvider),
/* harmony export */   "My": () => (/* binding */ usePolygonNetworkTradeProvider),
/* harmony export */   "h4": () => (/* binding */ useBinanceNetworkTradeProvider),
/* harmony export */   "Z3": () => (/* binding */ sendCode),
/* harmony export */   "iQ": () => (/* binding */ fetchUploadLink),
/* harmony export */   "iT": () => (/* binding */ fetchDownloadLink),
/* harmony export */   "VP": () => (/* binding */ verifyCode),
/* harmony export */   "Eu": () => (/* binding */ fetchBackupValue),
/* harmony export */   "zy": () => (/* binding */ uploadBackupValue)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11922);


const [useLanguage] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getLanguage */ .K9.Settings.getLanguage, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.languageSettings.on */ .Vm.events.languageSettings.on);
const [useTrendingDataSource] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTrendingDataSource */ .K9.Settings.getTrendingDataSource, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentTrendingDataProviderSettings.on */ .Vm.events.currentTrendingDataProviderSettings.on);
const [useEthereumNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getEthereumNetworkTradeProvider */ .K9.Settings.getEthereumNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.ethereumNetworkTradeProviderSettings.on */ .Vm.events.ethereumNetworkTradeProviderSettings.on);
const [usePolygonNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getPolygonNetworkTradeProvider */ .K9.Settings.getPolygonNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.polygonNetworkTradeProviderSettings.on */ .Vm.events.polygonNetworkTradeProviderSettings.on);
const [useBinanceNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getBinanceNetworkTradeProvider */ .K9.Settings.getBinanceNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.binanceNetworkTradeProviderSettings.on */ .Vm.events.binanceNetworkTradeProviderSettings.on);
const BASE_RUL = 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api';
const withErrorMiddleware = (handler)=>async (res)=>{
        const result = await handler(res);
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                ...result
            });
        }
        return Promise.resolve(result);
    }
;
const fetchBase = (input, init, handler = (res)=>res.json()
)=>fetch(input, init).then(withErrorMiddleware(handler))
;
const fetchBaseInstance = (baseURL)=>(input, init)=>fetchBase(`${baseURL}/${input}`, init)
;
const fetchBackupInstance = fetchBaseInstance(BASE_RUL);
const sendCode = ({ account , type , scenario , locale  })=>{
    return fetchBackupInstance('v1/backup/send_code', {
        method: 'POST',
        body: JSON.stringify({
            account,
            account_type: type,
            scenario,
            locale
        })
    });
};
const fetchUploadLink = ({ code , account , abstract , type  })=>{
    return fetchBackupInstance('v1/backup/upload', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account,
            abstract
        })
    }).then((res)=>res.upload_url
    );
};
const fetchDownloadLink = ({ account , code , type  })=>{
    return fetchBackupInstance('v1/backup/download', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account
        })
    }).then(({ abstract , download_url , size , uploaded_at  })=>{
        return {
            downloadURL: download_url,
            size: size,
            uploadedAt: uploaded_at,
            abstract: abstract
        };
    });
};
const verifyCode = ({ account , type , code  })=>{
    return fetchBackupInstance('v1/backup/validate_code', {
        method: 'POST',
        body: JSON.stringify({
            account,
            account_type: type,
            code
        })
    });
};
const fetchBackupValue = (downloadLink)=>{
    return fetchBase(downloadLink, {
        method: 'GET'
    }, (res)=>res.text()
    );
};
const uploadBackupValue = (uploadLink, content)=>{
    return fetch(uploadLink, {
        method: 'PUT',
        // mode: 'no-cors',
        headers: new Headers({
            'content-type': 'text/plain'
        }),
        body: content
    });
};


/***/ }),

/***/ 67535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/index.tsx + 11 modules
var DashboardFrame = __webpack_require__(47574);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingCard.tsx


const Card = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        borderRadius: Number(theme.shape.borderRadius) * 3,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(5),
        marginBottom: theme.spacing(2)
    })
);
const CardTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>({
        fontSize: 18,
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(4)
    })
);
function SettingCard(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardTitle, {
                children: props.title
            }),
            props.children
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(40777);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingItem.tsx



const IconWarpper = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)(({ theme  })=>({
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: src/* MaskColorVar.infoBackground */.ZN.infoBackground,
        marginRight: theme.spacing(3),
        color: 'transparent'
    })
);
const TextWrapper = (0,styled/* default */.ZP)(ListItemText/* default */.Z)(({ theme  })=>({
        [`& .${listItemTextClasses/* default.primary */.Z.primary}`]: {
            paddingBottom: theme.spacing(2)
        },
        [`&.${listItemTextClasses/* default.root */.Z.root}.error .${listItemTextClasses/* default.secondary */.Z.secondary}`]: {
            color: theme.palette.error.main
        }
    })
);
function SettingItem(props) {
    const { title , desc , icon , error =false  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        sx: {
            paddingLeft: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconWarpper, {
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextWrapper, {
                primary: title,
                secondary: desc,
                className: error ? 'error' : undefined
            }),
            props.children
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/settings/SettingsBackup.tsx


const SettingsBackupIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
            stroke: "#1C68F3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 21v-8H7v8M7 3v5h8",
            stroke: "#1C68F3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
            stroke: "#fff",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 21v-8H7v8M7 3v5h8",
            stroke: "#fff",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/buttonClasses.js
var buttonClasses = __webpack_require__(70745);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingButton.tsx

/* harmony default export */ const SettingButton = ((0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        [`&.${buttonClasses/* default.root */.Z.root}`]: {
            padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
            borderRadius: 24,
            minWidth: 140
        }
    })
));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(83693);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(98569);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupContentSelector.tsx






const SelectItem = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        borderRadius: 8,
        backgroundColor: src/* MaskColorVar.lightBackground */.ZN.lightBackground,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(3),
        display: 'flex'
    })
);
const CheckboxContainer = (0,styled/* default */.ZP)('div')(()=>({
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    })
);
const BackupItem = (0,styled/* default */.ZP)('div')(()=>({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 0'
    })
);
function BackupContentSelector({ json , onChange  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const records = [
        {
            name: t.settings_backup_preview_personas(),
            value: json.personas
        },
        {
            name: t.settings_backup_preview_associated_account(),
            value: json.accounts,
            sub: true
        },
        {
            name: t.settings_backup_preview_posts(),
            value: json.posts,
            sub: true
        },
        {
            name: t.settings_backup_preview_contacts(),
            value: json.contacts,
            sub: true
        },
        {
            name: t.settings_backup_preview_fils(),
            value: json.files,
            sub: true
        }, 
    ];
    const [baseChecked, setBaseChecked] = (0,react.useState)(true);
    const [walletChecked, setWalletChecked] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        onChange({
            baseChecked,
            walletChecked
        });
    }, [
        baseChecked,
        walletChecked
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SelectItem, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: baseChecked,
                            onChange: (event)=>setBaseChecked(event.target.checked)
                            ,
                            name: "base"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1
                        },
                        children: records.map((record, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(BackupItem, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        children: record.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        children: record.value
                                    })
                                ]
                            }, idx)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SelectItem, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: walletChecked,
                            onChange: (event)=>setWalletChecked(event.target.checked)
                            ,
                            disabled: !json.wallets,
                            name: "wallet"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(BackupItem, {
                        sx: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t.settings_backup_preview_wallets()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: json.wallets
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(37058);
;// CONCATENATED MODULE: ../dashboard/src/components/ConfirmDialog/index.tsx




const StyledButton = (0,styled/* default */.ZP)(Button/* default */.Z)(()=>({
        [`&.${buttonClasses/* default.root */.Z.root}`]: {
            minWidth: 100
        }
    })
);
function ConfirmDialog(props) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { title , open , onClose , onConfirm , children , maxWidth ='sm' , cancelText =t.settigns_button_cancel() , confirmText =t.settings_button_confirm() , confirmDisabled =false ,  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        title: title,
        fullWidth: true,
        maxWidth: maxWidth,
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
                        onClick: onClose,
                        color: "secondary",
                        children: cancelText
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
                        onClick: onConfirm,
                        disabled: confirmDisabled,
                        children: confirmText
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/regexp.ts
const passwordRegexp = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\dA-Za-z]).*/;
const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegexp = /(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPasswordDialog.tsx








function SettingPasswordDialog({ open , onClose , onSet  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const { user , updateUser  } = (0,react.useContext)(UserContext);
    const [incorrectPassword, setIncorrectPassword] = (0,react.useState)(false);
    const [passwordValid, setValidState] = (0,react.useState)(true);
    const [passwordMatched, setMatchState] = (0,react.useState)(true);
    const [password, setPassword] = (0,react.useState)('');
    const [newPassword, setNewPassword] = (0,react.useState)('');
    const [repeatPassword, setRepeatPassword] = (0,react.useState)('');
    const passwordRule = t.settings_password_rule();
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        if (user.backupPassword) {
            if (user.backupPassword !== password) {
                setIncorrectPassword(true);
                return;
            }
        }
        const matched = newPassword === repeatPassword;
        setMatchState(matched);
        if (passwordValid && matched) {
            const msg = user.backupPassword ? t.settings_alert_password_updated() : t.settings_alert_password_set();
            snackbar.enqueueSnackbar(msg, {
                variant: 'success'
            });
            updateUser({
                backupPassword: newPassword
            });
            onSet === null || onSet === void 0 ? void 0 : onSet();
            onClose();
        }
    };
    const validCheck = ()=>{
        if (!newPassword) return;
        const isValid = passwordRegexp.test(newPassword);
        setValidState(isValid);
    };
    (0,react.useEffect)(()=>{
        if (!newPassword || !repeatPassword) {
            setMatchState(true);
        }
        if (!newPassword) {
            setValidState(true);
        }
    }, [
        newPassword,
        repeatPassword
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
        title: user.backupPassword ? t.settings_dialogs_change_backup_password() : t.settings_dialogs_setting_backup_password(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                minHeight: '160px'
            },
            children: [
                user.backupPassword ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    value: password,
                    onChange: (event)=>setPassword(event.target.value)
                    ,
                    type: "password",
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '10px'
                    },
                    error: incorrectPassword,
                    helperText: incorrectPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    value: newPassword,
                    onChange: (event)=>setNewPassword(event.target.value)
                    ,
                    onBlur: validCheck,
                    type: "password",
                    placeholder: user.backupPassword ? t.settings_label_new_backup_password() : t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '10px'
                    },
                    error: !passwordValid,
                    helperText: passwordValid ? '' : passwordRule
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    value: repeatPassword,
                    onChange: (event)=>setRepeatPassword(event.target.value)
                    ,
                    type: "password",
                    placeholder: t.settings_label_re_enter(),
                    error: !passwordMatched,
                    helperText: !passwordMatched ? t.settings_dialogs_inconsistency_password() : ''
                }),
                passwordValid && passwordMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        fontSize: '12px',
                        padding: '8px 0'
                    },
                    children: passwordRule
                }) : null
            ]
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx



const UserContext = /*#__PURE__*/ (0,react.createContext)({
    user: {
        backupPassword: '',
        email: '',
        phone: '',
        backupMethod: '',
        backupAt: ''
    },
    updateUser: ()=>{
        throw new Error('Context not provided.');
    },
    ensurePasswordSet: ()=>{
        throw new Error('Context not provided.');
    }
});
function UserProvider({ children  }) {
    const [user, setUser] = (0,react.useState)({
        backupPassword: localStorage.getItem('backupPassword'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        backupMethod: localStorage.getItem('backupMethod'),
        backupAt: localStorage.getItem('backupAt')
    });
    const [callback, setCallback] = (0,react.useState)(null);
    const updateUser = (obj)=>{
        const updated = {
            ...user,
            ...obj
        };
        setUser(updated);
        localStorage.setItem('backupPassword', updated.backupPassword || '');
        localStorage.setItem('email', updated.email || '');
        localStorage.setItem('phone', updated.phone || '');
        localStorage.setItem('backupMethod', updated.backupMethod || '');
        localStorage.setItem('backupAt', updated.backupAt || '');
    };
    const ensurePasswordSet = (f)=>{
        if (user.backupPassword) f();
        else setCallback([
            f
        ]);
    };
    const onSet = ()=>{
        var ref;
        callback === null || callback === void 0 ? void 0 : (ref = callback[0]) === null || ref === void 0 ? void 0 : ref.call(callback);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(UserContext.Provider, {
        value: {
            user,
            updateUser,
            ensurePasswordSet
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog, {
                open: !!callback,
                onSet: onSet,
                onClose: ()=>setCallback(null)
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(44612);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8341.js
var api = __webpack_require__(24595);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.21.3/node_modules/date-fns/esm/format/index.js + 28 modules
var format = __webpack_require__(52607);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
var LoadingCard = __webpack_require__(93428);
=======
var api = __webpack_require__(34815);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
var LoadingCard = __webpack_require__(90612);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7535.js
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/BackupDialog.tsx













function BackupDialog({ local =true , params , open , onClose  }) {
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [backupPassword, setBackupPassword] = (0,react.useState)('');
    const [paymentPassword, setPaymentPassword] = (0,react.useState)('');
    const [incorrectBackupPassword, setIncorrectBackupPassword] = (0,react.useState)(false);
    const [incorrectPaymentPassword, setIncorrectPaymentPassword] = (0,react.useState)(false);
    const [showPassword, setShowPassword] = (0,react.useState)({
        base: true,
        wallet: false
    });
    const title = local ? t.settings_local_backup() : t.settings_cloud_backup();
    const { user , updateUser  } = (0,react.useContext)(UserContext);
    const { value: previewInfo , loading: searching  } = (0,useAsync/* default */.Z)(()=>API/* Services.Welcome.generateBackupPreviewInfo */.K9.Welcome.generateBackupPreviewInfo()
    );
    const [{ loading  }, handleBackup] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (backupPassword !== user.backupPassword) {
            setIncorrectBackupPassword(true);
            return;
        }
        if (showPassword.wallet) {
            // for test
            // await PluginServices.Wallet.createEncryptedWalletStore(paymentPassword)
            const result = await API/* PluginServices.Wallet.decryptWallet */.NG.Wallet.decryptWallet(paymentPassword);
            if (!result.ok) {
                setIncorrectPaymentPassword(true);
                return;
            }
        }
        try {
            const file = await API/* Services.Welcome.createBackupFile */.K9.Welcome.createBackupFile({
                noPosts: !showPassword.base,
                noPersonas: !showPassword.base,
                noProfiles: !showPassword.base,
                noWallets: !showPassword.wallet,
                download: false,
                onlyBackupWhoAmI: false
            });
            if (local) {
                // local backup, no account
                const encrypted = await API/* Services.Crypto.encryptBackup */.K9.Crypto.encryptBackup(backupPassword, '', JSON.stringify(file));
                await API/* Services.Welcome.downloadBackup */.K9.Welcome.downloadBackup(encrypted, 'txt');
            } else if (params) {
                const abstract = file.personas.filter((x)=>x.nickname
                ).map((x)=>x.nickname
                ).join(', ');
                const uploadUrl = await (0,api/* fetchUploadLink */.iQ)({
                    ...params,
                    abstract
                });
                const encrypted = await API/* Services.Crypto.encryptBackup */.K9.Crypto.encryptBackup(backupPassword, params.account, JSON.stringify(file));
                (0,api/* uploadBackupValue */.zy)(uploadUrl, encrypted).then(()=>{
                    snackbar.enqueueSnackbar(t.settings_alert_backup_success(), {
                        variant: 'success'
                    });
                });
            }
            updateUser({
                backupMethod: local ? 'local' : 'cloud',
                backupAt: (0,format/* default */.Z)(new Date(), 'yyyy-MM-dd HH:mm')
            });
            onClose();
        } catch  {
            snackbar.enqueueSnackbar(t.settings_alert_backup_fail(), {
                variant: 'error'
            });
        }
    }, [
        backupPassword,
        paymentPassword
    ]);
    const handleContentChange = ({ baseChecked , walletChecked  })=>{
        setShowPassword({
            base: baseChecked,
            wallet: walletChecked
        });
    };
    const backupDisabled = (0,react.useMemo)(()=>{
        return !backupPassword || showPassword.wallet && !paymentPassword || loading;
    }, [
        backupPassword,
        paymentPassword,
        loading
    ]);
    (0,react.useEffect)(()=>{
        setIncorrectBackupPassword(false);
    }, [
        backupPassword
    ]);
    (0,react.useEffect)(()=>{
        setIncorrectPaymentPassword(false);
    }, [
        paymentPassword
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        maxWidth: "xs",
        title: title,
        open: open,
        onClose: onClose,
        children: searching ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                text: t.searching()
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: [
                previewInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupContentSelector, {
                    json: previewInfo,
                    onChange: handleContentChange
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    value: backupPassword,
                    onChange: (event)=>setBackupPassword(event.target.value)
                    ,
                    type: "password",
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '24px'
                    },
                    error: incorrectBackupPassword,
                    helperText: incorrectBackupPassword ? t.settings_dialogs_incorrect_password() : ''
                }),
                showPassword.wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    value: paymentPassword,
                    onChange: (event)=>setPaymentPassword(event.target.value)
                    ,
                    type: "password",
                    placeholder: t.settings_label_payment_password(),
                    sx: {
                        marginBottom: '24px'
                    },
                    error: incorrectPaymentPassword,
                    helperText: incorrectPaymentPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    fullWidth: true,
                    disabled: backupDisabled,
                    onClick: handleBackup,
                    loading: loading,
                    children: t.settings_button_backup()
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(47307);
;// CONCATENATED MODULE: ../icons/general/LocalBackup.tsx


const LocalBackupIcon = (0,utils/* createIcon */.I)('LocalBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.666 29.587c0-3.085 2.635-5.587 5.886-5.587h30.896c3.25 0 5.885 2.502 5.885 5.587v18.159c0 3.086-2.635 5.587-5.885 5.587H16.552c-3.25 0-5.886-2.501-5.886-5.587V29.587z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.566 11.182c.532 0 .963.431.963.963v6.736h6.736a.962.962 0 110 1.924h-7.699a.962.962 0 01-.962-.962v-7.698c0-.532.43-.963.962-.963zM37.776 25.219c0-.532.43-.963.962-.963h7.699c.531 0 .962.431.962.963v7.698a.962.962 0 11-1.925 0v-6.736h-6.736a.962.962 0 01-.962-.962z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.458 9.585c2.074-.632 4.265-.7 6.37-.198a12.555 12.555 0 015.668 3.071 13.537 13.537 0 013.557 5.577c.181.54-.087 1.132-.599 1.323-.511.191-1.073-.092-1.254-.631a11.455 11.455 0 00-3.01-4.72 10.623 10.623 0 00-4.796-2.598 10.27 10.27 0 00-5.39.168 10.708 10.708 0 00-4.664 2.915l-6.08 6.026a.947.947 0 01-1.39-.045 1.077 1.077 0 01.044-1.465l6.07-6.016a12.654 12.654 0 015.474-3.407zm18.674 14.997a1.077 1.077 0 01-.043 1.465l-6.07 6.015a12.655 12.655 0 01-5.475 3.407c-2.073.633-4.265.7-6.37.199a12.554 12.554 0 01-5.668-3.072 13.537 13.537 0 01-3.557-5.576c-.18-.54.087-1.133.6-1.324.51-.19 1.072.092 1.253.632a11.455 11.455 0 003.01 4.719 10.623 10.623 0 004.796 2.598c1.781.426 3.636.368 5.39-.167a10.708 10.708 0 004.664-2.916l6.08-6.026a.947.947 0 011.39.046z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.666 34.386c0-2.79 2.635-5.053 5.886-5.053h30.896c3.25 0 5.885 2.263 5.885 5.053v13.895c0 2.79-2.635 5.052-5.885 5.052H16.552c-3.25 0-5.886-2.262-5.886-5.052V34.386z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "6.667",
                    y: "20",
                    width: "50.667",
                    height: "37.333",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "7.667",
                    y: "26.333",
                    width: "48.667",
                    height: "30",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "1.5"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 60 60');

;// CONCATENATED MODULE: ../icons/general/CloudBackup.tsx


const CloudBackupIcon = (0,utils/* createIcon */.I)('CloudBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.566 16.516c.531 0 .962.43.962.962v6.736h6.737a.962.962 0 010 1.925h-7.7a.962.962 0 01-.962-.962v-7.699c0-.532.431-.962.963-.962zM37.775 30.552c0-.531.431-.962.963-.962h7.698c.532 0 .963.43.963.962v7.699a.962.962 0 11-1.925 0v-6.736h-6.736a.962.962 0 01-.963-.963z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.458 14.919c2.073-.633 4.265-.701 6.37-.199a12.554 12.554 0 015.668 3.071 13.538 13.538 0 013.556 5.577c.182.54-.086 1.132-.598 1.323-.512.191-1.073-.091-1.255-.631a11.456 11.456 0 00-3.009-4.719 10.622 10.622 0 00-4.796-2.599 10.27 10.27 0 00-5.39.168 10.709 10.709 0 00-4.664 2.916l-6.08 6.026a.947.947 0 01-1.39-.046 1.077 1.077 0 01.043-1.465l6.07-6.015a12.653 12.653 0 015.475-3.407zM47.13 29.915a1.077 1.077 0 01-.043 1.465l-6.07 6.015a12.655 12.655 0 01-5.474 3.407c-2.074.633-4.265.701-6.37.199a12.554 12.554 0 01-5.668-3.071 13.538 13.538 0 01-3.557-5.577c-.181-.54.087-1.132.599-1.323.511-.191 1.073.091 1.254.631a11.455 11.455 0 003.01 4.72 10.622 10.622 0 004.796 2.598 10.27 10.27 0 005.39-.168 10.71 10.71 0 004.664-2.915l6.08-6.027a.947.947 0 011.39.046z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M43 36.666a12.545 12.545 0 00-12.334-10c-4.833 0-9 2.667-11 6.672-5.166.662-9 4.824-9 10 0 5.495 4.5 9.995 10 9.995h21.667a8.253 8.253 0 008.334-8.175v-.16c0-4.333-3.5-7.998-7.667-8.336",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                id: "filter0_b",
                x: "7.667",
                y: "23.667",
                width: "46",
                height: "32.667",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                        in: "BackgroundImage",
                        stdDeviation: "1.5"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                        in2: "SourceAlpha",
                        operator: "in",
                        result: "effect1_backgroundBlur"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_backgroundBlur",
                        result: "shape"
                    })
                ]
            })
        })
    ]
}), '0 0 60 60');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/BackupModeSelectDialog.tsx








const useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        display: 'flex',
        height: '220px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: '20px'
    },
    mode: {
        position: 'relative',
        width: '110px',
        height: '116px',
        background: src/* MaskColorVar.lightBackground */.ZN.lightBackground,
        textAlign: 'center',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            background: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            boxShadow: '3px 6px 15px rgba(28, 104, 243, 0.1)'
        }
    },
    icon: {
        width: '60px',
        height: '60px'
    },
    label: {
        paddingTop: '10px',
        fontSize: '13px'
    },
    mask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: 'rgba(255,255,255,.5)'
    }
});
function BackupModeSelectDialog({ open , onClose , onSelect  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = useStyles();
    const { user  } = (0,react.useContext)(UserContext);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        title: t.settings_button_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.mode,
                    onClick: ()=>onSelect('local')
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LocalBackupIcon, {
                            className: classes.icon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.label,
                            children: "Local Backup"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.mode,
                    children: [
                        !(user.email || user.phone) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                            title: t.settings_dialogs_bind_email_or_phone(),
                            placement: "top",
                            arrow: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.mask
                            })
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupIcon, {
                            className: classes.icon,
                            onClick: ()=>onSelect('cloud')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.label,
                            children: "Cloud Backup"
                        })
                    ]
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ../dashboard/src/components/Restore/BackupInfoCard.tsx
var BackupInfoCard = __webpack_require__(52547);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/CloudBackupPreviewDialog.tsx





function CloudBackupPreviewDialog({ info , open , onClose , onSelect  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        maxWidth: "xs",
        title: t.settings_cloud_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupInfoCard/* BackupInfoCard */.g, {
                    info: info
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        fontSize: '13px',
                        padding: '24px 0'
                    },
                    children: t.settings_dialogs_backup_action_desc()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'space-between'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                width: '184px'
                            },
                            onClick: ()=>onSelect('merge')
                            ,
                            children: t.settings_dialogs_merge_to_local()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                width: '184px'
                            },
                            onClick: ()=>onSelect('upload')
                            ,
                            children: t.settings_dialogs_upload_local_data()
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/CloudBackupMergeDialog.tsx










function CloudBackupMergeDialog({ account , info , open , onClose  }) {
    const [backupPassword, setBackupPassword] = (0,react.useState)('');
    const [incorrectBackupPassword, setIncorrectBackupPassword] = (0,react.useState)(false);
    const t = (0,locales/* useDashboardI18N */.xF)();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const [{ loading  }, handleMerge] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            const encrypted = await (0,api/* fetchBackupValue */.Eu)(info.downloadURL);
            const decrypted = await API/* Services.Crypto.decryptBackup */.K9.Crypto.decryptBackup(backupPassword, account, encrypted);
            const data = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(decrypted);
            if (data === null || data === void 0 ? void 0 : data.id) {
                await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(data.id);
            }
            onClose();
            snackbar.enqueueSnackbar(t.settings_alert_merge_success(), {
                variant: 'success'
            });
            console.log('merge success');
        } catch (error) {
            setIncorrectBackupPassword(true);
        }
    }, [
        backupPassword,
        account,
        info
    ]);
    (0,react.useEffect)(()=>{
        setIncorrectBackupPassword(false);
    }, [
        backupPassword
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        maxWidth: "xs",
        title: t.settings_cloud_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupInfoCard/* BackupInfoCard */.g, {
                    info: info
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    fullWidth: true,
                    value: backupPassword,
                    onChange: (event)=>setBackupPassword(event.target.value)
                    ,
                    type: "password",
                    label: t.settings_label_backup_password(),
                    variant: "outlined",
                    sx: {
                        margin: '24px 0'
                    },
                    error: incorrectBackupPassword,
                    helperText: incorrectBackupPassword ? t.settings_dialogs_incorrect_password() : ''
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    fullWidth: true,
                    onClick: handleMerge,
                    loading: loading,
                    disabled: incorrectBackupPassword,
                    children: t.settings_dialogs_merge_to_local_data()
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Select/Select.js + 3 modules
var Select = __webpack_require__(82267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(85290);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/type.ts
var type = __webpack_require__(23568);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/CloudBackupVerifyDialog.tsx










function CloudBackupVerifyDialog({ open , onClose , onNext  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    var _email;
    const [mode, setMode] = (0,react.useState)(((_email = user.email) !== null && _email !== void 0 ? _email : user.phone) || '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    const params = (0,react.useMemo)(()=>{
        return {
            account: mode,
            type: mode.includes('@') ? type/* AccountType.email */.Qm.email : type/* AccountType.phone */.Qm.phone,
            scenario: type/* Scenario.backup */.$4.backup,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en,
            code
        };
    }, [
        mode,
        code
    ]);
    const sendVerifyCode = async ()=>{
        const res = await (0,api/* sendCode */.Z3)(params).catch((error)=>snackbar.enqueueSnackbar(error.message, {
                variant: 'error'
            })
        );
        if (res) {
            snackbar.enqueueSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }
    };
    const [{ loading  }, handleNext] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const res = await (0,api/* fetchDownloadLink */.iT)(params).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            } else if (error.status === 404) {
                onNext({
                    params
                });
            }
        });
        if (res) {
            onNext({
                fileInfo: res,
                params
            });
        }
    }, [
        params
    ]);
    (0,react.useEffect)(()=>{
        setInvalidCode(false);
    }, [
        code
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        title: t.settings_cloud_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '10px 24px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                    value: mode,
                    onChange: (event)=>setMode(event.target.value)
                    ,
                    fullWidth: true,
                    size: "small",
                    sx: {
                        background: src/* MaskColorVar.normalBackground */.ZN.normalBackground
                    },
                    children: [
                        user.email ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: user.email,
                            children: user.email
                        }) : null,
                        user.phone ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: user.phone,
                            children: user.phone
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '24px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '24px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* CountdownButton */.qA, {
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            onClick: sendVerifyCode,
                            children: t.settings_button_send()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    fullWidth: true,
                    sx: {
                        marginTop: '24px'
                    },
                    onClick: handleNext,
                    loading: loading,
                    children: t.next()
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupSetting.tsx










function BackupSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { ensurePasswordSet  } = (0,react.useContext)(UserContext);
    const [showDialog, setShowDialog] = (0,react.useState)({
        backup: false,
        mode: false,
        verify: false,
        preview: false,
        merge: false
    });
    const [localMode, setLocalMode] = (0,react.useState)(true);
    const [params, setParams] = (0,react.useState)(undefined);
    const [cloudFileInfo, setCloudFileInfo] = (0,react.useState)(undefined);
    const onBackup = ()=>{
        ensurePasswordSet(()=>setShowDialog({
                ...showDialog,
                mode: true
            })
        );
    };
    const onSelectMode = (mode)=>{
        if (mode === 'cloud') {
            setLocalMode(false);
            setShowDialog({
                ...showDialog,
                mode: false,
                verify: true
            });
        } else {
            setLocalMode(true);
            setShowDialog({
                ...showDialog,
                mode: false,
                backup: true
            });
        }
    };
    const handleVerified = ({ fileInfo , params: params1  })=>{
        setParams(params1);
        if (fileInfo) {
            setCloudFileInfo(fileInfo);
            setShowDialog({
                ...showDialog,
                verify: false,
                preview: true
            });
        } else {
            setShowDialog({
                ...showDialog,
                verify: false,
                backup: true
            });
        }
    };
    const handleAction = (action)=>{
        if (action === 'merge') {
            setShowDialog({
                ...showDialog,
                preview: false,
                merge: true
            });
        } else {
            setShowDialog({
                ...showDialog,
                preview: false,
                backup: true
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                onClick: onBackup,
                children: t.settings_button_backup()
            }),
            showDialog.backup ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupDialog, {
                local: localMode,
                params: params,
                open: showDialog.backup,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        backup: false
                    })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupModeSelectDialog, {
                open: showDialog.mode,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        mode: false
                    })
                ,
                onSelect: onSelectMode
            }),
            showDialog.verify ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupVerifyDialog, {
                open: showDialog.verify,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        verify: false
                    })
                ,
                onNext: handleVerified
            }) : null,
            cloudFileInfo && params ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupPreviewDialog, {
                        info: cloudFileInfo,
                        open: showDialog.preview,
                        onSelect: handleAction,
                        onClose: ()=>setShowDialog({
                                ...showDialog,
                                preview: false
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupMergeDialog, {
                        account: params.account,
                        info: cloudFileInfo,
                        open: showDialog.merge,
                        onClose: ()=>setShowDialog({
                                ...showDialog,
                                merge: false
                            })
                    })
                ]
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupSettingItem.tsx







function BackupSettingItem() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    const [desc, setDesc] = (0,react.useState)(t.settings_global_backup_desc());
    (0,react.useEffect)(()=>{
        if (user.backupAt) {
            const method = user.backupMethod === 'local' ? t.settings_local_backup() : t.settings_cloud_backup();
            const last = t.settings_global_backup_last({
                backupMethod: method,
                backupAt: user.backupAt
            });
            setDesc(last);
        }
    }, [
        user.backupAt
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsBackupIcon, {
        }),
        title: t.settings_global_backup_title(),
        desc: desc,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupSetting, {
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PasswordSetting.tsx






function PasswordSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    const [openSettingDialog, setOpenSettingDialog] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                onClick: ()=>setOpenSettingDialog(true)
                ,
                children: user.backupPassword ? t.settings_button_change() : t.settings_button_setting()
            }),
            openSettingDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog, {
                open: openSettingDialog,
                onClose: ()=>setOpenSettingDialog(false)
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ../icons/settings/SettingsPassword.tsx


const SettingsPasswordIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsPasswordIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777v-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777v-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z",
        stroke: "#fff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PasswordSettingItem.tsx







function PasswordSettingItem() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPasswordIcon, {
        }),
        title: t.settings_change_passowrd_title(),
        desc: user.backupPassword ? t.settings_change_passowrd_desc() : t.settings_change_passowrd_not_set(),
        error: !user.backupPassword,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordSetting, {
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingEmailDialog.tsx











const SettingEmailDialog_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        minHeight: 180,
        paddingLeft: 20,
        paddingRight: 20
    }
});
function SettingEmailDialog({ open , onClose  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = SettingEmailDialog_useStyles();
    const { user , updateUser  } = (0,react.useContext)(UserContext);
    const [step, setStep] = (0,react.useState)(user.email ? 0 : 1);
    var _email;
    const [email, setEmail] = (0,react.useState)((_email = user.email) !== null && _email !== void 0 ? _email : '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidEmail, setInvalidEmail] = (0,react.useState)(false);
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    const handleClose = ()=>{
        onClose();
    };
    const handleConfirm = async ()=>{
        if (step === 1) {
            if (!invalidEmail) {
                setStep(2);
            }
        } else {
            const result = await (0,api/* verifyCode */.VP)({
                account: email,
                type: type/* AccountType.email */.Qm.email,
                code
            }).catch((err)=>{
                if (err.status === 400) {
                    // incorrect code
                    setInvalidCode(true);
                }
            });
            if (result) {
                if (step === 0) {
                    // original email verified
                    setEmail('');
                    setCode('');
                    setStep(1);
                } else {
                    const msg = user.email ? t.settings_alert_email_updated() : t.settings_alert_email_set();
                    snackbar.enqueueSnackbar(msg, {
                        variant: 'success'
                    });
                    updateUser({
                        email
                    });
                    onClose();
                }
            }
        }
    };
    const validCheck = ()=>{
        if (!email) return;
        const isValid = emailRegexp.test(email);
        setInvalidEmail(!isValid);
    };
    const sendValidationEmail = async ()=>{
        const res = await (0,api/* sendCode */.Z3)({
            account: email,
            type: type/* AccountType.email */.Qm.email,
            scenario: user.email ? type/* Scenario.change */.$4.change : type/* Scenario.create */.$4.create,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en
        }).catch((error)=>{
            snackbar.enqueueSnackbar(error.message, {
                variant: 'error'
            });
        });
        if (res) {
            snackbar.enqueueSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
        title: user.email ? t.settings_dialogs_change_email() : t.settings_dialogs_setting_email(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        confirmText: step === 1 ? t.next() : t.confirm(),
        children: step === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                display: 'flex',
                alignItems: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                fullWidth: true,
                sx: {
                    flex: 1
                },
                value: email,
                onChange: (event)=>setEmail(event.target.value)
                ,
                onBlur: validCheck,
                type: "email",
                placeholder: "Input your email",
                error: invalidEmail,
                helperText: invalidEmail ? 'The email address is incorrect.' : ''
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                paddingTop: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.settings_dialogs_current_email_validation()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "primary",
                    fontWeight: "bold",
                    variant: "h4",
                    children: email
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '10px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '10px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* CountdownButton */.qA, {
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            onClick: sendValidationEmail,
                            children: t.settings_button_send()
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/EmailSetting.tsx






function EmailSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    const [open, setOpen] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                onClick: ()=>setOpen(true)
                ,
                children: user.email ? t.settings_button_change() : t.settings_button_setting()
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingEmailDialog, {
                open: open,
                onClose: ()=>setOpen(false)
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ../icons/settings/SettingsEmail.tsx


const SettingsEmailIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsEmailIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z",
        stroke: "#fff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/EmailSettingItem.tsx







function EmailSettingItem_PasswordSettingItem() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsEmailIcon, {
        }),
        title: t.settigns_email_title(),
        desc: user.email ? user.email : t.settigns_email_desc(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailSetting, {
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPhoneNumberDialog.tsx











const SettingPhoneNumberDialog_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        minHeight: '200px',
        paddingLeft: '20px',
        paddingRight: '20px'
    }
});
function SettingPhoneNumberDialog({ open , onClose  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const snackbar = (0,src/* useSnackbar */.Ds)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = SettingPhoneNumberDialog_useStyles();
    const { user , updateUser  } = (0,react.useContext)(UserContext);
    const [step, setStep] = (0,react.useState)(user.phone ? 0 : 1);
    const [countryCode, setCountryCode] = (0,react.useState)(user.phone ? user.phone.split(' ')[0] : '');
    const [phone, setPhone] = (0,react.useState)(user.phone ? user.phone.split(' ')[1] : '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidPhone, setInvalidPhone] = (0,react.useState)(false);
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    const handleCountryCodeChange = (event)=>{
        const value = event.target.value;
        const prefix = value.startsWith('+') ? '' : '+';
        setCountryCode(prefix + value);
    };
    const handleClose = ()=>{
        onClose();
    };
    const handleConfirm = async ()=>{
        if (step === 1) {
            if (!invalidPhone) {
                setStep(2);
            }
        } else {
            const result = await (0,api/* verifyCode */.VP)({
                account: countryCode + phone,
                type: type/* AccountType.phone */.Qm.phone,
                code
            }).catch((err)=>{
                if (err.status === 400) {
                    // incorrect code
                    setInvalidCode(true);
                }
            });
            if (result) {
                if (step === 0) {
                    // original email verified
                    setCountryCode('');
                    setPhone('');
                    setCode('');
                    setStep(1);
                } else {
                    const msg = user.phone ? t.settings_alert_phone_number_updated() : t.settings_alert_phone_number_set();
                    snackbar.enqueueSnackbar(msg, {
                        variant: 'success'
                    });
                    updateUser({
                        phone: `${countryCode} ${phone}`
                    });
                    onClose();
                }
            }
        }
    };
    const validCheck = ()=>{
        if (!phone) return;
        const isValid = phoneRegexp.test(countryCode + phone);
        setInvalidPhone(!isValid);
    };
    const sendValidationCode = ()=>{
        (0,api/* sendCode */.Z3)({
            account: countryCode + phone,
            type: type/* AccountType.phone */.Qm.phone,
            scenario: user.email ? type/* Scenario.change */.$4.change : type/* Scenario.create */.$4.create,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en
        }).then(()=>{
            snackbar.enqueueSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }).catch((error)=>{
            snackbar.enqueueSnackbar(error.message, {
                variant: 'error'
            });
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
        title: user.phone ? t.settings_dialogs_change_phone_number() : t.settings_dialogs_setting_phone_number(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        confirmText: step === 1 ? t.next() : t.confirm(),
        children: step === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                display: 'flex',
                alignItems: 'flex-start',
                paddingTop: '48px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    value: countryCode,
                    onChange: handleCountryCodeChange,
                    placeholder: "+86",
                    sx: {
                        marginRight: '10px',
                        width: '60px'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                    fullWidth: true,
                    sx: {
                        flex: 1
                    },
                    value: phone,
                    onChange: (event)=>setPhone(event.target.value)
                    ,
                    onBlur: validCheck,
                    type: "text",
                    error: invalidPhone,
                    helperText: invalidPhone ? t.settings_dialogs_incorrect_phone() : ''
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                paddingTop: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: t.settings_dialogs_current_phone_validation()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    color: "primary",
                    fontWeight: "bold",
                    variant: "h4",
                    children: [
                        countryCode,
                        " ",
                        phone
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '10px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '10px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* CountdownButton */.qA, {
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            onClick: sendValidationCode,
                            children: t.settings_button_send()
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PhoneNumberSetting.tsx






function PhoneNumberSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    const [open, setOpen] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                onClick: ()=>setOpen(true)
                ,
                children: user.phone ? t.settings_button_change() : t.settings_button_setting()
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPhoneNumberDialog, {
                open: open,
                onClose: ()=>setOpen(false)
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ../icons/settings/SettingsPhone.tsx


const SettingsPhoneIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsPhoneIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12 18h.01",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12 18h.01",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PhoneNumberSettingItem.tsx







function PhoneNumberSettingItem() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPhoneIcon, {
        }),
        title: t.settings_phone_number_title(),
        desc: user.phone ? user.phone : t.settings_phone_number_desc(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneNumberSetting, {
        })
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Select/selectClasses.js
var selectClasses = __webpack_require__(57532);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/OutlinedInput/outlinedInputClasses.js
var outlinedInputClasses = __webpack_require__(89715);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingSelect.tsx


/* harmony default export */ const SettingSelect = ((0,styled/* default */.ZP)(Select/* default */.Z)(()=>({
        [`& .${selectClasses/* default.select */.Z.select}.${selectClasses/* default.outlined */.Z.outlined}`]: {
            padding: '12.5px 70px 12.5px 14px !important',
            background: src/* MaskColorVar.normalBackground */.ZN.normalBackground
        },
        [`& .${outlinedInputClasses/* default.notchedOutline */.Z.notchedOutline}`]: {
            borderColor: src/* MaskColorVar.lineLighter */.ZN.lineLighter
        }
    })
));

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/LanguageSetting.tsx







function LanguageSetting() {
    const lang = (0,api/* useLanguage */.ZK)();
    const handleChange = (event)=>{
        API/* Services.Settings.setLanguage */.K9.Settings.setLanguage(event.target.value);
    };
    const t = (0,locales/* useDashboardI18N */.xF)();
    // Some languages are not ready to ship to the users. Only display them in beta/insider version.
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingSelect, {
        value: lang,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.__auto__ */.P7.__auto__,
                children: t.settings_language_auto()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.enUS */.P7.enUS,
                children: "English"
            }),
             false && /*#__PURE__*/ 0,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.zhTW */.P7.zhTW,
                children: "正體中文"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.jaJP */.P7.jaJP,
                children: "日本語"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.koKR */.P7.koKR,
                children: "한국인"
            }),
             false && /*#__PURE__*/ 0,
             false && /*#__PURE__*/ 0,
             false && /*#__PURE__*/ 0,
             false && /*#__PURE__*/ 0,
             false && /*#__PURE__*/ 0
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var Personas_api = __webpack_require__(20620);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/AppearanceSetting.tsx







function AppearanceSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const mode = (0,Personas_api/* useAppearance */.MU)();
    const handleChange = (event)=>{
        API/* Services.Settings.setTheme */.K9.Settings.setTheme(event.target.value);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingSelect, {
        value: mode,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: src/* Appearance.default */.um.default,
                children: t.settings_appearance_default()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: src/* Appearance.light */.um.light,
                children: t.settings_appearance_light()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: src/* Appearance.dark */.um.dark,
                children: t.settings_appearance_dark()
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var src_type = __webpack_require__(51987);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/RestoreSetting.tsx





function RestoreSetting() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const onRecovery = ()=>{
        navigate(src_type/* RoutePaths.SignIn */.s2.SignIn);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
        onClick: onRecovery,
        children: t.settings_button_recovery()
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/VerifyPasswordDialog.tsx






function VerifyPasswordDialog({ open , onVerified , onClose  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { user  } = (0,react.useContext)(UserContext);
    const [passwordMismatched, setMatchState] = (0,react.useState)(false);
    const [password, setPassword] = (0,react.useState)('');
    const handleChange = (event)=>{
        setPassword(event.target.value);
        setMatchState(false);
    };
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        const matched = user.backupPassword === password;
        setMatchState(!matched);
        if (matched) {
            onClose();
            onVerified();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog, {
        title: t.settings_dialogs_verify_backup_password(),
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                minHeight: '168px',
                padding: '0 90px',
                display: 'flex',
                alignItems: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                fullWidth: true,
                value: password,
                onChange: handleChange,
                type: "password",
                label: t.settings_label_backup_password(),
                variant: "outlined",
                error: passwordMismatched,
                helperText: passwordMismatched ? 'Incorrect password' : ''
            })
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/VerifyPasswordContext.tsx



const PasswordVerifiedContext = /*#__PURE__*/ (0,react.createContext)({
    isPasswordVerified: false,
    ensurePasswordVerified: ()=>{
        throw new Error('Context not provided.');
    }
});
function PasswordVerifiedProvider({ children  }) {
    const [isPasswordVerified, setVerified] = (0,react.useState)(false);
    // useState will call VerifyPasswordOnVerified directly. have to wrap with something
    const [callback, setCallback] = (0,react.useState)(null);
    const onVerified = ()=>{
        var ref;
        callback === null || callback === void 0 ? void 0 : (ref = callback[0]) === null || ref === void 0 ? void 0 : ref.call(callback);
        setCallback(null);
        setVerified(true);
    };
    const onCancel = ()=>{
        setCallback(null);
    };
    const ensurePasswordVerified = (f)=>{
        if (isPasswordVerified) f();
        else setCallback([
            f
        ]);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(PasswordVerifiedContext.Provider, {
        value: {
            isPasswordVerified,
            ensurePasswordVerified
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyPasswordDialog, {
                open: !!callback,
                onVerified: onVerified,
                onClose: onCancel
            })
        ]
    }));
}

;// CONCATENATED MODULE: ../icons/settings/SettingsLanguage.tsx


const SettingsLanguageIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsLanguageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                    stroke: "#1C68F3",
                    strokeWidth: "1.25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.372 12a.75.75 0 01.75-.75H21.88a.75.75 0 010 1.5H2.122a.75.75 0 01-.75-.75z",
                    fill: "#1C68F3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 1.371a.75.75 0 01.75.75V21.88a.75.75 0 01-1.5 0V2.12a.75.75 0 01.75-.75zM16.533 3.173a.75.75 0 01.968.433l-.7.267.7-.267.001.002.001.003.004.01.012.033.043.12c.035.104.085.255.144.45.118.391.274.96.428 1.686.31 1.452.617 3.536.617 6.09a29.4 29.4 0 01-.617 6.09c-.154.726-.31 1.294-.428 1.685a12.98 12.98 0 01-.187.57l-.012.034-.004.01v.003l-.001.001-.701-.267.7.267a.75.75 0 01-1.401-.534l.001-.004.008-.021.034-.096c.03-.087.074-.22.127-.397.107-.354.252-.882.397-1.564.29-1.364.584-3.343.584-5.777s-.293-4.413-.584-5.778c-.145-.682-.29-1.21-.397-1.563a11.258 11.258 0 00-.16-.493l-.009-.021V4.14a.75.75 0 01.432-.968zM7.693 3.173a.75.75 0 00-.968.433l.7.267-.7-.267-.001.002-.001.003-.004.01-.012.033-.043.12c-.036.104-.085.255-.144.45-.118.391-.274.96-.428 1.686A29.4 29.4 0 005.475 12a29.4 29.4 0 00.617 6.09c.154.726.31 1.294.428 1.685a12.803 12.803 0 00.187.57l.012.034.004.01v.003l.001.001.701-.267-.7.267a.75.75 0 001.4-.534v-.004l-.008-.021a11.407 11.407 0 01-.161-.493 19.472 19.472 0 01-.397-1.564A27.902 27.902 0 016.975 12c0-2.434.293-4.413.584-5.778.145-.682.29-1.21.397-1.563a11.316 11.316 0 01.16-.493l.008-.021.002-.004a.75.75 0 00-.433-.968z",
                    fill: "#1C68F3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.826 8.03a.75.75 0 00-.432-.968l-.268.7.268-.7-.002-.001-.003-.001-.01-.004-.034-.012a12.81 12.81 0 00-.57-.187 20.96 20.96 0 00-1.686-.428A29.4 29.4 0 0012 5.812a29.4 29.4 0 00-6.09.617c-.725.154-1.294.31-1.685.428a12.794 12.794 0 00-.57.187l-.034.012-.01.004h-.003v.001c-.001 0-.002 0 .266.701l-.267-.7a.75.75 0 00.535 1.401l.003-.001.022-.008.095-.034c.087-.03.22-.074.397-.127.354-.107.882-.252 1.564-.397A27.902 27.902 0 0112 7.312c2.435 0 4.413.293 5.778.584.682.145 1.21.29 1.563.397a11.288 11.288 0 01.493.16l.022.009h.003a.75.75 0 00.968-.432zM3.173 16.344a.75.75 0 00.432.969l.268-.7-.268.7h.002l.004.002.01.003.033.013.12.042c.104.036.255.085.45.145.391.118.96.273 1.686.428 1.451.309 3.536.616 6.09.616a29.4 29.4 0 006.09-.616c.726-.155 1.294-.31 1.684-.428a12.91 12.91 0 00.571-.187l.034-.013.01-.003.003-.002c.001 0 .002 0-.266-.7l.267.7a.75.75 0 00-.535-1.402l-.003.002-.022.008-.095.033c-.087.03-.22.074-.398.128-.353.107-.881.251-1.563.397-1.365.29-3.343.583-5.778.583-2.434 0-4.412-.293-5.777-.583-.682-.146-1.21-.29-1.564-.397a11.25 11.25 0 01-.492-.161l-.022-.008-.003-.001a.75.75 0 00-.968.432z",
                    fill: "#1C68F3"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip1)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                    stroke: "#fff",
                    strokeWidth: "1.25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.372 12a.75.75 0 01.75-.75H21.88a.75.75 0 010 1.5H2.122a.75.75 0 01-.75-.75z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 1.371a.75.75 0 01.75.75V21.88a.75.75 0 01-1.5 0V2.12a.75.75 0 01.75-.75zM16.533 3.173a.75.75 0 01.968.433l-.7.267.7-.267.001.002.001.003.004.01.012.033.043.12c.035.104.085.255.144.45.118.391.274.96.428 1.686.31 1.452.617 3.536.617 6.09a29.4 29.4 0 01-.617 6.09c-.154.726-.31 1.294-.428 1.685a12.98 12.98 0 01-.187.57l-.012.034-.004.01v.003l-.001.001-.701-.267.7.267a.75.75 0 01-1.401-.534l.001-.004.008-.021.034-.096c.03-.087.074-.22.127-.397.107-.354.252-.882.397-1.564.29-1.364.584-3.343.584-5.777s-.293-4.413-.584-5.778c-.145-.682-.29-1.21-.397-1.563a11.258 11.258 0 00-.16-.493l-.009-.021V4.14a.75.75 0 01.432-.968zM7.693 3.173a.75.75 0 00-.968.433l.7.267-.7-.267-.001.002-.001.003-.004.01-.012.033-.043.12c-.036.104-.085.255-.144.45-.118.391-.274.96-.428 1.686A29.4 29.4 0 005.475 12a29.4 29.4 0 00.617 6.09c.154.726.31 1.294.428 1.685a12.803 12.803 0 00.187.57l.012.034.004.01v.003l.001.001.701-.267-.7.267a.75.75 0 001.4-.534v-.004l-.008-.021a11.407 11.407 0 01-.161-.493 19.472 19.472 0 01-.397-1.564A27.902 27.902 0 016.975 12c0-2.434.293-4.413.584-5.778.145-.682.29-1.21.397-1.563a11.316 11.316 0 01.16-.493l.008-.021.002-.004a.75.75 0 00-.433-.968z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.826 8.03a.75.75 0 00-.432-.968l-.268.7.268-.7-.002-.001-.003-.001-.01-.004-.034-.012a12.81 12.81 0 00-.57-.187 20.96 20.96 0 00-1.686-.428A29.4 29.4 0 0012 5.812a29.4 29.4 0 00-6.09.617c-.725.154-1.294.31-1.685.428a12.794 12.794 0 00-.57.187l-.034.012-.01.004h-.003v.001c-.001 0-.002 0 .266.701l-.267-.7a.75.75 0 00.535 1.401l.003-.001.022-.008.095-.034c.087-.03.22-.074.397-.127.354-.107.882-.252 1.564-.397A27.902 27.902 0 0112 7.312c2.435 0 4.413.293 5.778.584.682.145 1.21.29 1.563.397a11.288 11.288 0 01.493.16l.022.009h.003a.75.75 0 00.968-.432zM3.173 16.344a.75.75 0 00.432.969l.268-.7-.268.7h.002l.004.002.01.003.033.013.12.042c.104.036.255.085.45.145.391.118.96.273 1.686.428 1.451.309 3.536.616 6.09.616a29.4 29.4 0 006.09-.616c.726-.155 1.294-.31 1.684-.428a12.91 12.91 0 00.571-.187l.034-.013.01-.003.003-.002c.001 0 .002 0-.266-.7l.267.7a.75.75 0 00-.535-1.402l-.003.002-.022.008-.095.033c-.087.03-.22.074-.398.128-.353.107-.881.251-1.563.397-1.365.29-3.343.583-5.778.583-2.434 0-4.412-.293-5.777-.583-.682-.146-1.21-.29-1.564-.397a11.25 11.25 0 01-.492-.161l-.022-.008-.003-.001a.75.75 0 00-.968.432z",
                    fill: "#fff"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip1",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#1C68F3",
                    d: "M0 0h24v24H0z"
                })
            })
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/settings/SettingsAppearance.tsx


const SettingsAppearanceIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsAppearanceIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.89 20.789h-.75a.75.75 0 00.785.75l-.035-.75zm9.248-7.728l-.745-.09.745.09zM7.215 17.114l-.235.712.01.003.225-.715zM7.8 4.774l.378.647-.378-.648zm3.125 16.764c1.45-.067 3.715-.56 5.73-1.822 2.037-1.276 3.841-3.358 4.227-6.566l-1.489-.179c-.321 2.667-1.797 4.386-3.535 5.474-1.76 1.103-3.765 1.537-5.003 1.595l.07 1.498zM6.989 17.83c1.281.405 2.073 1.057 2.542 1.656.49.624.609 1.16.609 1.304h1.5c0-.568-.294-1.42-.929-2.23-.656-.836-1.701-1.665-3.27-2.16l-.452 1.43zm13.893-4.679c.527-4.373-1.536-7.429-4.402-8.973-2.812-1.517-6.42-1.588-9.057-.052l.755 1.296c2.136-1.244 5.184-1.222 7.59.076 2.355 1.269 4.074 3.747 3.625 7.474l1.49.18zM7.422 4.125C4.848 5.625 2.89 8.35 2.477 11.06c-.209 1.37-.026 2.767.714 3.986.742 1.222 1.996 2.189 3.79 2.78l.47-1.425c-1.524-.502-2.456-1.274-2.978-2.133-.523-.863-.68-1.89-.513-2.982.337-2.213 1.99-4.566 4.219-5.865l-.755-1.296z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12.581",
            cy: "15.292",
            r: "1.131",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "8.944",
            cy: "7.754",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.211 7.042a.531.531 0 11-1.062 0 .531.531 0 011.062 0z",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "14.212",
            cy: "7.754",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "16.575",
            cy: "9.367",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.89 20.789h-.75a.75.75 0 00.785.75l-.035-.75zm9.248-7.728l-.745-.09.745.09zM7.215 17.114l-.235.712.01.003.225-.715zM7.8 4.774l.378.647-.378-.648zm3.125 16.764c1.45-.067 3.715-.56 5.73-1.822 2.037-1.276 3.841-3.358 4.227-6.566l-1.489-.179c-.321 2.667-1.797 4.386-3.535 5.474-1.76 1.103-3.765 1.537-5.003 1.595l.07 1.498zM6.989 17.83c1.281.405 2.073 1.057 2.542 1.656.49.624.609 1.16.609 1.304h1.5c0-.568-.294-1.42-.929-2.23-.656-.836-1.701-1.665-3.27-2.16l-.452 1.43zm13.893-4.679c.527-4.373-1.536-7.429-4.402-8.973-2.812-1.517-6.42-1.588-9.057-.052l.755 1.296c2.136-1.244 5.184-1.222 7.59.076 2.355 1.269 4.074 3.747 3.625 7.474l1.49.18zM7.422 4.125C4.848 5.625 2.89 8.35 2.477 11.06c-.209 1.37-.026 2.767.714 3.986.742 1.222 1.996 2.189 3.79 2.78l.47-1.425c-1.524-.502-2.456-1.274-2.978-2.133-.523-.863-.68-1.89-.513-2.982.337-2.213 1.99-4.566 4.219-5.865l-.755-1.296z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12.581",
            cy: "15.292",
            r: "1.131",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "8.944",
            cy: "7.754",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.211 7.042a.531.531 0 11-1.062 0 .531.531 0 011.062 0z",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "14.212",
            cy: "7.754",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "16.575",
            cy: "9.367",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/settings/SettingsRestore.tsx


const SettingsRestoreIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsRestoreIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
        stroke: "#fff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/index.tsx












// import MobileSyncSetting from './components/MobileSyncSetting'



function Settings() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardFrame/* PageFrame */.C, {
        title: t.settings(),
        noBackgroundFill: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PasswordVerifiedProvider, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingCard, {
                        title: t.settings_general(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsLanguageIcon, {
                                }),
                                title: t.settings_language_title(),
                                desc: t.settings_language_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LanguageSetting, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsAppearanceIcon, {
                                }),
                                title: t.settings_appearance_title(),
                                desc: t.settings_appearance_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppearanceSetting, {
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingCard, {
                        title: t.settings_backup_recovery(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupSettingItem, {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsRestoreIcon, {
                                }),
                                title: t.settings_restore_database_title(),
                                desc: t.settings_restore_database_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreSetting, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordSettingItem, {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailSettingItem_PasswordSettingItem, {
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneNumberSettingItem, {
                            })
                        ]
                    })
                ]
            })
        })
    }));
};


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8341.js
/***/ 13230:
=======
/***/ 23568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qm": () => (/* binding */ AccountType),
/* harmony export */   "$4": () => (/* binding */ Scenario),
/* harmony export */   "go": () => (/* binding */ Locale)
/* harmony export */ });
var AccountType;
(function(AccountType1) {
    AccountType1["email"] = "email";
    AccountType1["phone"] = "phone";
})(AccountType || (AccountType = {
}));
var Scenario;
(function(Scenario1) {
    Scenario1["backup"] = 'backup';
    Scenario1["create"] = 'create_binding';
    Scenario1["change"] = 'change_binding';
})(Scenario || (Scenario = {
}));
var Locale;
(function(Locale1) {
    Locale1["en"] = "en";
    Locale1["zh"] = "zh";
})(Locale || (Locale = {
}));


/***/ }),

/***/ 64345:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7535.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ LoadingIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8341.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7535.js


const LoadingIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Loading', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 1.18506C10.3452 1.18506 10.625 1.46488 10.625 1.81006V5.14339C10.625 5.48857 10.3452 5.76839 10 5.76839C9.65482 5.76839 9.375 5.48857 9.375 5.14339V1.81006C9.375 1.46488 9.65482 1.18506 10 1.18506Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10 14.5183C10.3452 14.5183 10.625 14.7981 10.625 15.1433V18.4766C10.625 18.8218 10.3452 19.1016 10 19.1016C9.65482 19.1016 9.375 18.8218 9.375 18.4766V15.1433C9.375 14.7981 9.65482 14.5183 10 14.5183Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.66548 3.80977C3.90956 3.56569 4.30529 3.56569 4.54936 3.80977L6.9077 6.1681C7.15177 6.41218 7.15177 6.80791 6.9077 7.05198C6.66362 7.29606 6.26789 7.29606 6.02381 7.05198L3.66548 4.69365C3.4214 4.44957 3.4214 4.05384 3.66548 3.80977Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.0913 13.2348C13.3353 12.9907 13.7311 12.9907 13.9751 13.2348L16.3335 15.5931C16.5776 15.8372 16.5776 16.233 16.3335 16.477C16.0894 16.7211 15.6937 16.7211 15.4496 16.477L13.0913 14.1187C12.8472 13.8746 12.8472 13.4789 13.0913 13.2348Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.04102 10.1433C1.04102 9.79813 1.32084 9.51831 1.66602 9.51831H4.99935C5.34453 9.51831 5.62435 9.79813 5.62435 10.1433C5.62435 10.4885 5.34453 10.7683 4.99935 10.7683H1.66602C1.32084 10.7683 1.04102 10.4885 1.04102 10.1433Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.375 10.1433C14.375 9.79813 14.6548 9.51831 15 9.51831H18.3333C18.6785 9.51831 18.9583 9.79813 18.9583 10.1433C18.9583 10.4885 18.6785 10.7683 18.3333 10.7683H15C14.6548 10.7683 14.375 10.4885 14.375 10.1433Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.9077 13.2348C7.15177 13.4789 7.15177 13.8746 6.9077 14.1187L4.54936 16.477C4.30529 16.7211 3.90956 16.7211 3.66548 16.477C3.4214 16.233 3.4214 15.8372 3.66548 15.5931L6.02381 13.2348C6.26789 12.9907 6.66362 12.9907 6.9077 13.2348Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.3335 3.80977C16.5776 4.05384 16.5776 4.44957 16.3335 4.69365L13.9751 7.05198C13.7311 7.29606 13.3353 7.29606 13.0913 7.05198C12.8472 6.80791 12.8472 6.41218 13.0913 6.1681L15.4496 3.80977C15.6937 3.56569 16.0894 3.56569 16.3335 3.80977Z",
            fill: "currentColor"
        })
    ]
}), '0 0 20 20');


/***/ })

}]);