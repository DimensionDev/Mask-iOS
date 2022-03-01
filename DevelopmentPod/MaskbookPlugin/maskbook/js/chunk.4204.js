"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4204,7542],{

/***/ 16365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 51452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 23178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 82314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const File = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
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

/***/ 75126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ hasNativeAPI),
/* harmony export */   "Nz": () => (/* binding */ nativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68098);



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
        __webpack_require__.e(/* import() */ 1990).then(__webpack_require__.bind(__webpack_require__, 31990)).then((x)=>x.MaskNetworkAPI
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

/***/ 70311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PasswordField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72123);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82591);
/* harmony import */ var _StyledInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22654);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23178);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51452);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledInput__WEBPACK_IMPORTED_MODULE_2__/* .StyledInput */ .F, {
        ...props,
        type: showPassword ? 'text' : 'password',
        ref: ref,
        InputProps: {
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    }));
}));


/***/ }),

/***/ 22654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ StyledInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17939);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()(({ palette  })=>({
        textField: {
            width: '100%'
        },
        textFieldInput: {
            backgroundColor: palette.mode === 'light' ? '#F7F9FA' : palette.background.default,
            borderRadius: 6
        },
        inputFocused: {
            backgroundColor: `${palette.mode === 'light' ? '#FFFFFF' : palette.background.default} !important`,
            boxShadow: `0 0 0 2px ${palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
        },
        input: {
            padding: '11px 9px',
            fontSize: 12,
            borderRadius: 6
        }
    })
);
const StyledInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    var ref1;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        ...props,
        inputRef: ref,
        variant: "filled",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.textField, props.className),
        autoComplete: "off",
        inputProps: {
            className: classes.input,
            'aria-autocomplete': 'none',
            ...props.inputProps
        },
        InputProps: {
            ...props.InputProps,
            disableUnderline: true,
            classes: {
                root: classes.textFieldInput,
                focused: classes.inputFocused,
                ...(ref1 = props.InputProps) === null || ref1 === void 0 ? void 0 : ref1.classes
            }
        },
        FormHelperTextProps: {
            ...props.FormHelperTextProps,
            style: {
                marginLeft: 0
            }
        }
    }));
}));


/***/ }),

/***/ 2824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet_ImportWallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(56789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(88785);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(16365);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(13943);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(67943);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1_react@18.0.0-rc.0/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(22749);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(50209);
// EXTERNAL MODULE: ../icons/general/File.tsx
var File = __webpack_require__(82314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/JsonFileBox/index.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        fileBox: {},
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
var StyledInput = __webpack_require__(22654);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(70202);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(56838);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(99997);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 34 modules
var services = __webpack_require__(84673);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/PageHeader/index.tsx
var PageHeader = __webpack_require__(26303);
// EXTERNAL MODULE: ./src/extension/popups/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(70311);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(12705);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/ImportWallet/index.tsx






















const ImportWallet_useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 10px'
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
        padding: '16px 0 0 0',
        flex: 1,
        position: 'relative'
    },
    multiline: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    multilineInput: {
        padding: 6,
        borderRadius: 6,
        backgroundColor: '#F7F9FA',
        height: '100%'
    },
    textArea: {
        padding: 0,
        fontSize: 12,
        height: '100%!important'
    },
    button: {
        fontWeight: 600,
        padding: '9px 10px',
        borderRadius: 20
    },
    error: {
        color: '#FF5F5F',
        fontSize: 12,
        marginTop: 24,
        lineHeight: '16px',
        wordBreak: 'break-all'
    },
    controller: {
        padding: '20px 10px'
    },
    disabled: {
        opacity: 0.5,
        backgroundColor: '#1C68F3!important',
        color: '#ffffff!important'
    }
});
const ImportWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { classes  } = ImportWallet_useStyles();
    const [currentTab, onChange, tabs] = (0,src/* useTabs */.YE)('mnemonic', 'json', 'privateKey');
    const [mnemonic, setMnemonic] = (0,react.useState)('');
    const [keyStoreContent, setKeyStoreContent] = (0,react.useState)('');
    const [keyStorePassword, setKeyStorePassword] = (0,react.useState)('');
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const schema = (0,react.useMemo)(()=>{
        return lib.z.object({
            name: lib.z.string().min(1).max(12)
        });
    }, []);
    const { control , handleSubmit , formState: { errors , isValid  } ,  } = (0,index_esm/* useForm */.cI)({
        mode: 'onChange',
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            name: ''
        }
    });
    const disabled = (0,react.useMemo)(()=>{
        if (!isValid) return true;
        switch(currentTab){
            case tabs.mnemonic:
                return !mnemonic;
            case tabs.json:
                return !keyStoreContent;
            case tabs.privateKey:
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
        isValid,
        tabs
    ]);
    const [{ loading  }, onDerivedWallet] = (0,useAsyncFn/* default */.Z)(async (data)=>{
        if (!disabled) {
            try {
                switch(currentTab){
                    case tabs.mnemonic:
                        // valid the mnemonic
                        await (0,services.getDerivableAccounts)(mnemonic, 0, 1);
                        const params = (0,dist.query)({
                            name: data.name
                        });
                        history.replace({
                            pathname: shared_base_src/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet,
                            search: `?${params}`,
                            state: {
                                mnemonic
                            }
                        });
                        break;
                    case tabs.json:
                        const wallet = await messages/* WalletRPC.recoverWalletFromKeyStoreJSON */.V.recoverWalletFromKeyStoreJSON(data.name, keyStoreContent, keyStorePassword);
                        if (!settings/* currentMaskWalletAccountSettings.value */.T_.value) {
                            await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
                                account: wallet
                            });
                        }
                        if (!settings/* currentAccountSettings.value */.aK.value) {
                            await messages/* WalletRPC.updateAccount */.V.updateAccount({
                                account: wallet,
                                providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
                            });
                        }
                        await messages/* WalletRPC.selectAccount */.V.selectAccount([
                            wallet
                        ], chainId);
                        history.replace(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
                        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
                        break;
                    case tabs.privateKey:
                        const privateKeyWallet = await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(data.name, privateKey);
                        if (!settings/* currentMaskWalletAccountSettings.value */.T_.value) {
                            await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
                                account: privateKeyWallet
                            });
                        }
                        if (!settings/* currentAccountSettings.value */.aK.value) {
                            await messages/* WalletRPC.updateAccount */.V.updateAccount({
                                account: privateKeyWallet,
                                providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
                            });
                        }
                        await messages/* WalletRPC.selectAccount */.V.selectAccount([
                            privateKeyWallet
                        ], chainId);
                        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
                        history.replace(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
                        break;
                    default:
                        break;
                }
            } catch (error) {
                if (error instanceof Error) {
                    setErrorMessage(error.message);
                }
            }
        }
    }, [
        mnemonic,
        currentTab,
        keyStoreContent,
        keyStorePassword,
        privateKey,
        disabled,
        chainId,
        history,
        tabs
    ]);
    const onSubmit = handleSubmit(onDerivedWallet);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PageHeader/* PageHeader */.m, {
                        title: t('plugin_wallet_import_wallet')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        className: classes.form,
                        onSubmit: onSubmit,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    children: t('wallet_name')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                                    render: ({ field  })=>{
                                        var ref, ref1;
                                        /*#__PURE__*/ return (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                            ...field,
                                            classes: {
                                                root: classes.textField
                                            },
                                            error: !!((ref = errors.name) === null || ref === void 0 ? void 0 : ref.message),
                                            helperText: (ref1 = errors.name) === null || ref1 === void 0 ? void 0 : ref1.message,
                                            variant: "filled",
                                            placeholder: t('popups_wallet_name_placeholder')
                                        });
                                    },
                                    control: control,
                                    name: "name"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                                value: currentTab,
                                variant: "fullWidth",
                                className: classes.tabs,
                                classes: {
                                    indicator: classes.indicator
                                },
                                onChange: (event, tab)=>{
                                    if (errorMessage) setErrorMessage('');
                                    onChange(event, tab);
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_mnemonic'),
                                        value: tabs.mnemonic,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_json_file'),
                                        value: tabs.json,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        label: t('popups_wallet_name_private_key'),
                                        value: tabs.privateKey,
                                        classes: {
                                            root: classes.tab,
                                            selected: classes.selected
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.mnemonic,
                                className: classes.tabPanel,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                    multiline: true,
                                    value: mnemonic,
                                    onChange: (e)=>{
                                        if (errorMessage) setErrorMessage('');
                                        setMnemonic(e.target.value.replaceAll('\n', ' '));
                                    },
                                    placeholder: t('popups_wallet_name_mnemonic_placeholder'),
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
                                value: tabs.json,
                                className: classes.tabPanel,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(JsonFileBox, {
                                        onChange: (content)=>setKeyStoreContent(content)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* PasswordField */.Z, {
                                        classes: {
                                            root: classes.textField
                                        },
                                        placeholder: t('popups_wallet_name_origin_password'),
                                        onChange: (e)=>{
                                            if (errorMessage) setErrorMessage('');
                                            setKeyStorePassword(e.target.value);
                                        },
                                        value: keyStorePassword
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                value: tabs.privateKey,
                                className: classes.tabPanel,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledInput/* StyledInput */.F, {
                                    multiline: true,
                                    value: privateKey,
                                    onChange: (e)=>{
                                        if (errorMessage) setErrorMessage('');
                                        setPrivateKey(e.target.value);
                                    },
                                    rows: 4,
                                    placeholder: t('popups_wallet_name_private_key'),
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        children: errorMessage
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.controller,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    variant: "contained",
                    fullWidth: true,
                    classes: {
                        root: classes.button,
                        disabled: classes.disabled
                    },
                    disabled: disabled,
                    onClick: onSubmit,
                    children: t('import')
                })
            })
        ]
    }));
});
/* harmony default export */ const Wallet_ImportWallet = (ImportWallet);


/***/ }),

/***/ 26303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67020);
/* harmony import */ var _components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68484);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 12,
        color: '#151818',
        lineHeight: 1.5,
        fontWeight: 600
    }
});
const PageHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.header,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.title,
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_NetworkSelector__WEBPACK_IMPORTED_MODULE_3__/* .NetworkSelector */ .k, {})
        ]
    }));
});


/***/ }),

/***/ 7341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60581);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(5773), __webpack_require__.e(6134), __webpack_require__.e(9120)]).then(__webpack_require__.bind(__webpack_require__, 38727))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);