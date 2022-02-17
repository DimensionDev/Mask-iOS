<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[305],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5645],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js

/***/ 2498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 1173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(51765);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(7900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(75477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_163a9c7943ad18e207e9bd0ba454cbe9/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(19119);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(34054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = styleProps => {
  const {
    classes
  } = styleProps;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const styleProps = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(styleProps);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m.default)(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    styleProps: styleProps
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 83849:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 18534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34539);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19732);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11494);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        borderRadius: 8
    },
    container: {
        textAlign: 'center'
    },
    file: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 0,
        cursor: 'pointer'
    },
    text: {
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontSize: 13
    }
});
function FileUpload({ width , height , readAsText , onChange , accept  }) {
    const { classes  } = useStyles();
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const handleChange = ({ target  })=>{
        if (target.files) {
            setFile(target.files[0]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (file) {
            if (readAsText) {
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .blobToText */ .Gx)(file).then((result)=>onChange(file, result)
                );
            } else {
                onChange(file);
            }
        }
    }, [
        file,
        readAsText,
        onChange
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        variant: "background",
        className: classes.root,
        style: {
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .File */ .$, {
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        className: classes.text,
                        children: "Please click or drag the file to here"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "file",
                className: classes.file,
                accept: accept,
                onChange: handleChange
            })
        ]
    }));
};


/***/ }),

/***/ 52547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
/***/ 93428:
=======
/***/ 90612:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ LoadingCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13230);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36487);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88808);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76814);
=======
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64345);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25933);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49283);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js
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

"use strict";
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

/***/ 23568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignIn)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(30248);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(74331);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(66549);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(5075);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupPreviewCard.tsx







const useStyles = (0,src/* makeStyles */.ZL)()(()=>({
        root: {
            padding: '19px 24px 9px',
            minHeight: 205,
            borderRadius: 8,
            background: src/* MaskColorVar.infoBackground */.ZN.infoBackground,
            width: '100%'
        },
        item: {
            paddingBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14
        },
        sub: {
            paddingLeft: 30
        }
    })
);
function BackupPreviewCard({ json  }) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = useStyles();
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
        {
            name: t.settings_backup_preview_wallets(),
            value: json.wallets
        },
        {
            name: t.settings_backup_preview_created_at(),
            value: json.createdAt ? (0,format/* default */.Z)(json.createdAt, 'MM-dd-yyyy HH:mm:ss') : ''
        }, 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: records.map((record, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.item, record.sub ? classes.sub : ''),
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
    }));
};

// EXTERNAL MODULE: ../dashboard/src/components/MaskAlert/index.tsx + 1 modules
var MaskAlert = __webpack_require__(99304);
// EXTERNAL MODULE: ../dashboard/src/components/FileUpload/index.tsx
var FileUpload = __webpack_require__(18534);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(20317);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromJson.tsx














const RestoreFromJson_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            border: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            height: 176,
            borderRadius: 4,
            background: src/* MaskColorVar.secondaryContrastText.alpha */.ZN.secondaryContrastText.alpha(0.15)
        },
        file: {
            display: 'none'
        }
    })
);
var RestoreStatus;
(function(RestoreStatus1) {
    RestoreStatus1[RestoreStatus1["WaitingInput"] = 0] = "WaitingInput";
    RestoreStatus1[RestoreStatus1["Verifying"] = 1] = "Verifying";
    RestoreStatus1[RestoreStatus1["Verified"] = 2] = "Verified";
})(RestoreStatus || (RestoreStatus = {
}));
function RestoreFromJson(props) {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = RestoreFromJson_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const [json, setJSON] = (0,react.useState)(null);
    const [backupValue, setBackupValue] = (0,react.useState)('');
    const [backupId, setBackupId] = (0,react.useState)('');
    const [restoreStatus, setRestoreStatus] = (0,react.useState)(RestoreStatus.WaitingInput);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!backupValue) return;
        setRestoreStatus(RestoreStatus.Verifying);
        const backupInfo = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(backupValue);
        if (backupInfo) {
            setJSON(backupInfo.info);
            setBackupId(backupInfo.id);
            setRestoreStatus(RestoreStatus.Verified);
        } else {
            setRestoreStatus(RestoreStatus.WaitingInput);
            setBackupValue('');
        }
    }, [
        backupValue
    ]);
    const restoreDB = async ()=>{
        try {
            await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(backupId);
            navigate(type/* RoutePaths.Personas */.s2.Personas, {
                replace: true
            });
        } catch  {
            enqueueSnackbar('Restore backup failed, Please try again', {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: [
                    restoreStatus === RestoreStatus.Verifying && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.root,
                        children: "Verifying"
                    }),
                    restoreStatus === RestoreStatus.WaitingInput && /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        variant: "background",
                        sx: {
                            height: '144px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUpload/* default */.Z, {
                            onChange: (_, content)=>content && setBackupValue(content)
                            ,
                            readAsText: true
                        })
                    }),
                    restoreStatus === RestoreStatus.Verified && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                        json: json
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: restoreDB,
                    disabled: restoreStatus !== RestoreStatus.Verified,
                    children: restoreStatus === RestoreStatus.WaitingInput ? t.next() : t.restore()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: '35px',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_local_backup_warning()
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(64110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useList.js + 1 modules
var useList = __webpack_require__(53721);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js + 1 modules
var some = __webpack_require__(14626);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(87049);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromMnemonic.tsx















const RestoreFromMnemonic_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        error: {
            marginTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            color: (0,src/* getMaskColor */.nb)(theme).redMain,
            borderLeft: `2px solid ${(0,src/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const RestoreFromMnemonic = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = RestoreFromMnemonic_useStyles();
    const [error, setError] = (0,react.useState)('');
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [values, { updateAt  }] = (0,useList/* default */.Z)(Array.from({
        length: 12
    }).fill(''));
    const handleImport = async ()=>{
        try {
            const persona = await API/* Services.Identity.queryPersonaByMnemonic */.K9.Identity.queryPersonaByMnemonic(values.join(' '), '');
            if (persona) {
                changeCurrentPersona(persona.identifier);
                navigate(type/* RoutePaths.Personas */.s2.Personas, {
                    replace: true
                });
            } else {
                setError(t.sign_in_account_private_key_error());
            }
        } catch  {
            setError(t.sign_in_account_private_key_error());
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* DesktopMnemonicConfirm */.q, {
                        onChange: (word, index)=>{
                            updateAt(index, word);
                            setError('');
                        },
                        puzzleWords: values
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        variant: "body2",
                        children: error
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: handleImport,
                    disabled: (0,some/* default */.Z)(values, (value)=>!value
                    ),
                    children: t.confirm()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: '35px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_identity_warning()
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(34815);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(83693);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(68910);
;// CONCATENATED MODULE: ../dashboard/src/components/Stepper/index.tsx





const Stepper_useStyles = (0,src/* makeStyles */.ZL)()({
    hidden: {
        position: 'absolute',
        left: 10000
    }
});
const Step = ({ children , toStep , params  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children(toStep, params)
    }));
};
const Stepper = (props)=>{
    const { defaultStep , transition , step  } = props;
    const { classes  } = Stepper_useStyles();
    const [currentStep, setCurrentStep] = (0,react.useState)(defaultStep);
    const [currentTransition, setCurrentTransition] = (0,react.useState)(transition === null || transition === void 0 ? void 0 : transition.render);
    const [steps, { set: setSteps  }] = (0,useMap/* default */.Z)();
    const [stepParams, { set: setParam  }] = (0,useMap/* default */.Z)();
    const toStep = (stepName, params)=>{
        setCurrentStep(stepName);
        setParam(stepName, params);
    };
    (0,react.useEffect)(()=>{
        react.Children.forEach(props.children, (child)=>{
            if (/*#__PURE__*/ (0,react.isValidElement)(child)) {
                const name = child.props.name;
                setSteps(name, child);
            }
        });
    }, []);
    (0,react.useEffect)(()=>{
        if (!transition) {
            setCurrentTransition(null);
            return;
        }
        if (transition.trigger) {
            setCurrentTransition(transition.render);
        } else {
            setCurrentTransition(null);
        }
    }, [
        transition
    ]);
    (0,react.useEffect)(()=>{
        if (!step) return;
        toStep(step.name, step.params);
    }, [
        step
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: currentTransition
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: steps[currentStep] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: currentTransition ? classes.hidden : '',
                    width: "100%",
                    children: /*#__PURE__*/ (0,react.cloneElement)(steps[currentStep], {
                        toStep,
                        params: stepParams[currentStep]
                    })
                }) : null
            })
        ]
    }));
};

// EXTERNAL MODULE: ../dashboard/src/components/Restore/BackupInfoCard.tsx
var BackupInfoCard = __webpack_require__(52547);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ConfirmBackupInfo.tsx







const ConfirmBackupInfo = /*#__PURE__*/ (0,react.memo)(({ backupInfo , onNext , account , toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [password, setPassword] = (0,react.useState)('');
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const handleNext = async ()=>{
        const result = await onNext(backupInfo.downloadURL, account, password);
        if (result) {
            setErrorMessage(result);
        }
    };
    return backupInfo ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupInfoCard/* BackupInfoCard */.g, {
                        info: backupInfo
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                            label: t.sign_in_account_cloud_backup_password,
                            type: "password",
                            onChange: (e)=>setPassword(e.currentTarget.value)
                            ,
                            error: !!errorMessage,
                            helperText: errorMessage
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: handleNext,
                    children: t.restore()
                })
            })
        ]
    }) : null;
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Stack/Stack.js
var Stack = __webpack_require__(65111);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/type.ts
var Settings_type = __webpack_require__(23568);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/Commont.tsx




var ValidationCodeStep;
(function(ValidationCodeStep1) {
    ValidationCodeStep1["EmailInput"] = "EmailInput";
    ValidationCodeStep1["PhoneInput"] = "PhoneInput";
    ValidationCodeStep1["AccountValidation"] = "AccountValidation";
    ValidationCodeStep1["ConfirmBackupInfo"] = "ConfirmBackupInfo";
})(ValidationCodeStep || (ValidationCodeStep = {
}));
const Label = /*#__PURE__*/ (0,react.memo)(({ mode , onModeChange  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    fontWeight: 'bolder'
                },
                color: "textPrimary",
                children: mode === 'email' ? 'Email' : 'Phone Number'
            }),
            mode === 'email' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                variant: "text",
                onClick: ()=>onModeChange(Settings_type/* AccountType.phone */.Qm.phone)
                ,
                children: "Recovery with Mobile"
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                variant: "text",
                onClick: ()=>onModeChange(Settings_type/* AccountType.email */.Qm.email)
                ,
                children: "Recovery with Email"
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/EmailField.tsx








const EmailField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [account, setAccount] = (0,react.useState)('');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.PhoneInput)
                    ,
                    mode: Settings_type/* AccountType.email */.Qm.email
                }),
                fullWidth: true,
                value: account,
                onChange: (event)=>setAccount(event.target.value)
                ,
                type: "email"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: ()=>toStep(ValidationCodeStep.AccountValidation, {
                            account: account,
                            type: Settings_type/* AccountType.email */.Qm.email
                        })
                    ,
                    disabled: !account,
                    children: t.next()
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/PhoneField.tsx








const PhoneField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [account, setAccount] = (0,react.useState)('');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* PhoneNumberField */.g8, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.EmailInput)
                    ,
                    mode: Settings_type/* AccountType.phone */.Qm.phone
                }),
                onChange: ({ country , phone  })=>setAccount(country + phone)
                ,
                value: {
                    country: '+1',
                    phone: ''
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: ()=>toStep(ValidationCodeStep.AccountValidation, {
                            account: account,
                            type: Settings_type/* AccountType.phone */.Qm.phone
                        })
                    ,
                    disabled: !account,
                    children: t.next()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
var LoadingCard = __webpack_require__(93428);
=======
var LoadingCard = __webpack_require__(90612);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ValidationAccount.tsx










const ValidationAccount = ({ account , toStep , type , onNext  })=>{
    const language = (0,api/* useLanguage */.ZK)();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const [code, setCode] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [{ error: sendCodeError  }, handleSendCodeFn] = (0,useAsyncFn/* default */.Z)(async ()=>{
        return (0,api/* sendCode */.Z3)({
            account,
            type,
            scenario: Settings_type/* Scenario.backup */.$4.backup,
            locale: language.includes('zh') ? Settings_type/* Locale.zh */.go.zh : Settings_type/* Locale.en */.go.en
        });
    }, [
        account,
        type
    ]);
    const handleNext = async ()=>{
        const backupInfo = await onNext(account, type, code);
        if (backupInfo.downloadURL) {
            setError('');
            toStep(ValidationCodeStep.ConfirmBackupInfo, {
                backupInfo: backupInfo,
                account: account
            });
        } else {
            setError(backupInfo.message);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SendingCodeField */.oe, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body2",
                    sx: {
                        fontWeight: 'bolder'
                    },
                    lineHeight: "30px",
                    color: "textPrimary",
                    children: [
                        "Send to ",
                        account
                    ]
                }),
                onChange: (c)=>setCode(c)
                ,
                errorMessage: (sendCodeError === null || sendCodeError === void 0 ? void 0 : sendCodeError.message) || error,
                onSend: handleSendCodeFn
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    onClick: handleNext,
                    disabled: !account || !code,
                    children: t.next()
                })
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/CodeValidation.tsx











const CodeValidation = /*#__PURE__*/ (0,react.memo)(({ onValidated  })=>{
    const [{ loading: fetchingBackupInfo  }, fetchDownloadLinkFn] = (0,useAsyncFn/* default */.Z)(async (account, type, code)=>{
        return (0,api/* fetchDownloadLink */.iT)({
            code,
            account,
            type
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper, {
        defaultStep: ValidationCodeStep.EmailInput,
        transition: {
            render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
            }),
            trigger: fetchingBackupInfo
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.EmailInput,
                children: (toStep)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(EmailField, {
                        toStep: toStep
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.PhoneInput,
                children: (toStep)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneField, {
                        toStep: toStep
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.AccountValidation,
                children: (toStep, { account , type  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ValidationAccount, {
                        toStep: toStep,
                        account: account,
                        type: type,
                        onNext: fetchDownloadLinkFn
                    })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                name: ValidationCodeStep.ConfirmBackupInfo,
                children: (toStep, { backupInfo , account  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmBackupInfo, {
                        toStep: toStep,
                        backupInfo: backupInfo,
                        account: account,
                        onNext: onValidated
                    })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromCloud.tsx
















const RestoreFromCloud = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const [backupId, setBackupId] = (0,react.useState)('');
    const [step, setStep] = (0,react.useState)({
        name: 'validate',
        params: null
    });
    const [{ loading: fetchingBackupValue , error: fetchBackupValueError  }, fetchBackupValueFn] = (0,useAsyncFn/* default */.Z)(async (downloadLink)=>(0,api/* fetchBackupValue */.Eu)(downloadLink)
    , []);
    const [{ loading: decryptingBackup  }, decryptBackupFn] = (0,useAsyncFn/* default */.Z)(async (account, password, encryptedValue)=>{
        return API/* Services.Crypto.decryptBackup */.K9.Crypto.decryptBackup('password', 'account', encryptedValue);
    }, []);
    (0,react.useEffect)(()=>{
        if (!fetchBackupValueError) return;
        enqueueSnackbar(t.sign_in_account_cloud_backup_download_failed(), {
            variant: 'error'
        });
    }, [
        fetchBackupValueError
    ]);
    const onValidated = async (downloadLink, account, password)=>{
        try {
            const backupValue = await fetchBackupValueFn(downloadLink);
            const backupText = await decryptBackupFn(account, password, backupValue);
            const backupInfo = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(backupText);
            if (backupInfo) {
                setBackupId(backupInfo.id);
                setStep({
                    name: 'restore',
                    params: {
                        backupJson: backupInfo.info
                    }
                });
            }
            return null;
        } catch  {
            return t.sign_in_account_cloud_backup_decrypt_failed();
        }
    };
    const onRestore = async ()=>{
        try {
            await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(backupId);
            navigate(type/* RoutePaths.Personas */.s2.Personas, {
                replace: true
            });
        } catch  {
            enqueueSnackbar(t.sign_in_account_cloud_restore_failed(), {
                variant: 'error'
            });
        }
    };
    const getTransition = (0,react.useMemo)(()=>{
        if (decryptingBackup) {
            return {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                    text: "Decrypting"
                }),
                trigger: decryptingBackup
            };
        }
        if (fetchingBackupValue) {
            return {
                render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                    text: "Downloading"
                }),
                trigger: true
            };
        }
        return undefined;
    }, [
        fetchingBackupValue,
        decryptingBackup
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper, {
                transition: getTransition,
                defaultStep: "validate",
                step: step,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        name: "validate",
                        children: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    width: '100%'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodeValidation, {
                                    onValidated: onValidated
                                })
                            })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Step, {
                        name: "restore",
                        children: (_, { backupJson  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                                            json: backupJson
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "rounded",
                                            color: "primary",
                                            onClick: onRestore,
                                            children: t.restore()
                                        })
                                    })
                                ]
                            })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: '35px',
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_cloud_backup_warning()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.14.2_react@18.0.0-alpha-aecb3b6d1/node_modules/react-hook-form/dist/index.esm.js
var index_esm = __webpack_require__(28623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.0_react-hook-form@7.14.2/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(2498);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.8.1/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(89939);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromPrivateKey.tsx













const RestoreFromPrivateKey = /*#__PURE__*/ (0,react.memo)(()=>{
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.xF)();
    const schema = lib.z.object({
        privateKey: lib.z.string()
    });
    const { control , handleSubmit , setError , formState: { errors  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            privateKey: ''
        }
    });
    const onSubmit = async (data)=>{
        try {
            const persona = await API/* Services.Identity.queryPersonaByPrivateKey */.K9.Identity.queryPersonaByPrivateKey(data.privateKey);
            if (persona) {
                changeCurrentPersona(persona.identifier);
            } else {
                setError('privateKey', {
                    type: 'value',
                    message: t.sign_in_account_private_key_persona_not_found()
                });
            }
        } catch  {
            setError('privateKey', {
                type: 'value',
                message: t.sign_in_account_private_key_error()
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                    onSubmit: handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                control: control,
                                render: ({ field  })=>{
                                    var ref;
                                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                                        ...field,
                                        sx: {
                                            width: '100%'
                                        },
                                        multiline: true,
                                        rows: 8,
                                        helperText: (ref = errors.privateKey) === null || ref === void 0 ? void 0 : ref.message,
                                        error: !!errors.privateKey,
                                        placeholder: t.sign_in_account_private_key_placeholder()
                                    }));
                                },
                                name: "privateKey"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: "rounded",
                                color: "primary",
                                type: "submit",
                                children: t.confirm()
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: '35px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_private_key_warning()
                })
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(34054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(1173);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/index.tsx












const Restore_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tabs: {
            width: '100%',
            display: 'flex',
            marginBottom: theme.spacing(4)
        },
        panels: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            width: '100%'
        }
    })
);
const Restore = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = Restore_useStyles();
    const [currentTab, onChange, tabs] = (0,src/* useTabs */.YE)('mnemonic', 'privateKey', 'json', 'cloud');
    const tabPanelClasses = {
        root: classes.panels
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            [
                'mnemonic',
                'privateKey'
            ].includes(currentTab) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* RestoreBlueLogo */.ud, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* ButtonGroupTabList */.E1, {
                        classes: {
                            root: classes.tabs
                        },
                        onChange: onChange,
                        "aria-label": t.wallets_import_wallet_tabs(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_mnemonic(),
                                value: tabs.mnemonic
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_private_key(),
                                value: tabs.privateKey
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_json_file(),
                                value: tabs.json
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.cloud_backup(),
                                value: tabs.cloud
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.mnemonic,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromMnemonic, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.privateKey,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromPrivateKey, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.json,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromJson, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.cloud,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromCloud, {
                        })
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/SignIn/index.tsx








function SignIn() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                    title: t.sign_in_account_identity_title(),
                    action: {
                        name: t.sign_in_account_sign_up_button(),
                        callback: ()=>navigate(type/* RoutePaths.SignUp */.s2.SignUp)
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Body */.uT, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Restore, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {
                })
            ]
        })
    }));
};


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
/***/ 89099:
=======
/***/ 19732:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
/***/ 13230:
=======
/***/ 64345:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ LoadingIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.305.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5645.js


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