"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3877],{

/***/ 33953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ s)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/dist/resolvers.module.js
var e=function(i,e,t){if(i&&"reportValidity"in i){var f=(0,index_esm/* get */.U2)(t,e);i.setCustomValidity(f&&f.message||""),i.reportValidity()}},resolvers_module_t=function(r,i){var t=function(t){var f=i.fields[t];f&&f.ref&&"reportValidity"in f.ref?e(f.ref,t,r):f.refs&&f.refs.forEach(function(i){return e(i,t,r)})};for(var f in i.fields)t(f)},f=function(e,f){f.shouldUseNativeValidation&&resolvers_module_t(e,f);var o={};for(var a in e){var n=(0,index_esm/* get */.U2)(f.fields,a);(0,index_esm/* set */.t8)(o,a,Object.assign(e[a],{ref:n&&n.ref}))}return o};
//# sourceMappingURL=resolvers.module.js.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js
var n=function(e,o){for(var n={};e.length;){var s=e[0],t=s.code,i=s.message,a=s.path.join(".");if(!n[a])if("unionErrors"in s){var u=s.unionErrors[0].errors[0];n[a]={message:u.message,type:u.code}}else n[a]={message:i,type:t};if("unionErrors"in s&&s.unionErrors.forEach(function(r){return r.errors.forEach(function(r){return e.push(r)})}),o){var c=n[a].types,f=c&&c[s.code];n[a]=(0,index_esm/* appendErrors */.KN)(a,o,n,t,f?[].concat(f,s.message):s.message)}e.shift()}return n},s=function(r,s,t){return void 0===t&&(t={}),function(i,a,u){try{return Promise.resolve(function(o,n){try{var a=Promise.resolve(r["sync"===t.mode?"parse":"parseAsync"](i,s)).then(function(r){return u.shouldUseNativeValidation&&resolvers_module_t({},u),{errors:{},values:t.rawValues?i:r}})}catch(r){return n(r)}return a&&a.then?a.then(void 0,n):a}(0,function(r){return{values:{},errors:r.isEmpty?{}:f(n(r.errors,!u.shouldUseNativeValidation&&"all"===u.criteriaMode),u)}}))}catch(r){return Promise.reject(r)}}};
//# sourceMappingURL=zod.module.js.map


/***/ }),

/***/ 38419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(96719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(54455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(15853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52062);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
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

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 77327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84026);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1689);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46123);






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
function FileUpload({ width , height , readAsText , onChange , accept , icon  }) {
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
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
                    icon ?? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .File */ .$, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
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
    });
};


/***/ }),

/***/ 88540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ DesktopMnemonicConfirm),
  "i": () => (/* reexport */ MnemonicReveal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useDrop.js
var useDrop = __webpack_require__(69980);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/DesktopMnemonicConfirm.tsx





const parserPastingAllMnemonic = (text)=>{
    const result = [
        ...text.matchAll(/([a-z])+/g)
    ];
    return result.length === 12 ? result : null;
};
const DesktopMnemonicConfirm = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { puzzleWords , indexes , onChange , setAll  } = props;
    (0,useDrop/* default */.Z)({
        onText: (text)=>handlePaster(text)
    });
    const handlePaster = (0,react.useCallback)((text)=>{
        if (!setAll) return;
        const words = parserPastingAllMnemonic(text);
        if (!words) return;
        setAll(words.map((x)=>x[0]
        ));
    }, [
        setAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                    sx: {
                        width: '100%',
                        userSelect: 'none'
                    },
                    placeholder: i + 1 + '.',
                    value: word,
                    InputProps: {
                        disableUnderline: true
                    },
                    disabled: indexes && !indexes.includes(i),
                    onChange: (e)=>{
                        const text = e.target.value;
                        if (e.nativeEvent.inputType === 'insertFromPaste' && parserPastingAllMnemonic(text)) {
                            return;
                        }
                        onChange(text, indexes ? indexes.indexOf(i) : i);
                    }
                })
            }, i)
        )
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/MnemonicReveal.tsx



const WordCard = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    padding: ${theme.spacing(1)};
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? entry/* MaskColorVar.textPrimary */.ZN.textPrimary : entry/* MaskColorVar.textLink */.ZN.textLink};
    font-size: 14;
    background-color: ${entry/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
`
);
function MnemonicReveal(props) {
    const { words , indexed , wordClass  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: words.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WordCard, {
                    className: wordClass,
                    children: [
                        indexed ? `${index + 1}. ` : '',
                        item
                    ]
                })
            }, index)
        )
    });
}

;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/index.tsx




/***/ }),

/***/ 85277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ButtonContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14820);



const ButtonContainerUI = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(({ theme  })=>({
        margin: `${theme.spacing(3.75)} auto`,
        width: '75%',
        [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"].root */ .Z.root}`]: {
            width: '100%',
            fontSize: 16
        },
        [theme.breakpoints.down('md')]: {
            margin: `${theme.spacing(4)} auto`
        }
    })
);
const ButtonContainer = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonContainerUI, {
        my: 7,
        direction: "row",
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: children
    });
};


/***/ }),

/***/ 95644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);





const HeaderContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('header')(({ theme  })=>({
        width: '78%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexBasis: '240px',
        [theme.breakpoints.down('lg')]: {
            flexBasis: '350px'
        },
        [theme.breakpoints.down('md')]: {
            width: '95%',
            flexBasis: '180px'
        }
    })
);
const TitleContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
);
const Subtitle = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(({ theme  })=>`
    padding-top: 30px;
    color: ${theme.palette.mode === 'dark' ? _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textSecondary.alpha */ .ZN.textSecondary.alpha(0.8) : _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textPrimary */ .ZN.textPrimary}
`
);
const Action = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        color: theme.palette.mode === 'dark' ? _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textPrimary */ .ZN.textPrimary : _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
        fontWeight: 'bold',
        textAlign: 'right',
        '&:hover': {
            background: 'transparent'
        }
    })
);
const Header = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title , subtitle , action  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        variant: "h3",
                        children: title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Action, {
                        variant: "text",
                        onClick: ()=>action.callback()
                        ,
                        children: action.name
                    })
                ]
            }),
            subtitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Subtitle, {
                variant: "h5",
                children: subtitle
            })
        ]
    });
});


/***/ }),

/***/ 36361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uT": () => (/* binding */ Body),
  "pz": () => (/* binding */ ColumnContentLayout),
  "$_": () => (/* binding */ Footer),
  "xK": () => (/* binding */ PersonaLogoBox),
  "ud": () => (/* binding */ RestoreBlueLogo),
  "g2": () => (/* binding */ SignUpAccountLogo)
});

// UNUSED EXPORTS: LogoBoxStyled

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/RestoreBlue.tsx


const RestoreBlueIcon = (0,utils/* createIcon */.I)('RestoreBlue', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4 11.0952C4 9.93807 4.98806 9 6.2069 9H17.7931C19.0119 9 20 9.93807 20 11.0952V17.9048C20 19.0619 19.0119 20 17.7931 20H6.2069C4.98806 20 4 19.0619 4 17.9048V11.0952Z",
                fill: "#1C68F3",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.58743 4.19336C6.78674 4.19336 6.94831 4.35493 6.94831 4.55423V7.08034H9.47441C9.67372 7.08034 9.83528 7.24191 9.83528 7.44121C9.83528 7.64051 9.67372 7.80208 9.47441 7.80208H6.58743C6.38813 7.80208 6.22656 7.64051 6.22656 7.44121V4.55423C6.22656 4.35493 6.38813 4.19336 6.58743 4.19336Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.166 9.45706C14.166 9.25776 14.3276 9.09619 14.5269 9.09619H17.4139C17.6132 9.09619 17.7747 9.25776 17.7747 9.45706V12.344C17.7747 12.5433 17.6132 12.7049 17.4139 12.7049C17.2146 12.7049 17.053 12.5433 17.053 12.344V9.81794H14.5269C14.3276 9.81794 14.166 9.65637 14.166 9.45706Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M10.672 3.59451C11.4494 3.35731 12.2712 3.33171 13.0606 3.5201C13.85 3.70848 14.5812 4.10471 15.1862 4.67181C15.7911 5.23891 16.25 5.9584 16.5199 6.76314C16.5878 6.96553 16.4873 7.18765 16.2955 7.25927C16.1036 7.33089 15.893 7.22488 15.8251 7.02249C15.5966 6.34156 15.2083 5.73276 14.6965 5.25291C14.1846 4.77306 13.5659 4.43779 12.8979 4.27838C12.23 4.11898 11.5346 4.14064 10.8768 4.34134C10.2189 4.54204 9.62 4.91525 9.13588 5.42612C9.13316 5.429 9.13039 5.43183 9.12759 5.43461L6.84749 7.6944C6.69915 7.84141 6.46591 7.83376 6.32653 7.67731C6.18715 7.52085 6.19441 7.27484 6.34274 7.12783L8.61871 4.87213C9.19012 4.27061 9.8964 3.83112 10.672 3.59451ZM17.6745 9.21813C17.8139 9.37458 17.8066 9.62059 17.6583 9.76761L15.3823 12.0233C14.8109 12.6248 14.1046 13.0643 13.3291 13.3009C12.5516 13.5381 11.7298 13.5637 10.9405 13.3753C10.1511 13.187 9.4198 12.7907 8.81488 12.2236C8.20995 11.6565 7.75108 10.937 7.48109 10.1323C7.41319 9.92991 7.5137 9.70778 7.70558 9.63616C7.89747 9.56455 8.10807 9.67056 8.17597 9.87294C8.40442 10.5539 8.79269 11.1627 9.30456 11.6425C9.81642 12.1224 10.4352 12.4577 11.1031 12.6171C11.7711 12.7765 12.4664 12.7548 13.1243 12.5541C13.7821 12.3534 14.381 11.9802 14.8652 11.4693C14.8679 11.4664 14.8706 11.4636 14.8735 11.4608L17.1535 9.20104C17.3019 9.05402 17.5351 9.06168 17.6745 9.21813Z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: "0.2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4 12.8947C4 11.8483 4.98806 11 6.2069 11H17.7931C19.0119 11 20 11.8483 20 12.8947V18.1053C20 19.1517 19.0119 20 17.7931 20H6.2069C4.98806 20 4 19.1517 4 18.1053V12.8947Z",
                fill: "#1C68F3",
                fillOpacity: "0.05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "0",
                    y: "5",
                    width: "24",
                    height: "19",
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
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "1",
                    y: "8",
                    width: "22",
                    height: "15",
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
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/general/SignUpAccount.tsx
var SignUpAccount = __webpack_require__(62812);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
;// CONCATENATED MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx






const ColumnContentLayout = (0,styled/* default */.ZP)('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
const Body = (0,styled/* default */.ZP)('main')(({ theme  })=>({
        flex: '1 5',
        width: '78%',
        [theme.breakpoints.down('md')]: {
            width: '95%'
        }
    })
);
const Footer = (0,styled/* default */.ZP)('footer')(({ theme  })=>({
        flex: 1,
        width: '78%',
        [theme.breakpoints.down('md')]: {
            width: '95%'
        }
    })
);
const LogoBoxStyled = (0,styled/* default */.ZP)(Box/* default */.Z)(({ theme  })=>({
        marginBottom: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            marginBottom: theme.spacing(2)
        }
    })
);
const SignUpAccountLogo = (0,styled/* default */.ZP)(SignUpAccount/* SignUpAccountIcon */.B)(({ theme  })=>({
        width: '100%',
        height: '96px'
    })
);
const RestoreBlueLogo = (0,styled/* default */.ZP)(RestoreBlueIcon)(({ theme  })=>({
        width: '100%',
        height: '96px'
    })
);
const PersonaLogoBox = /*#__PURE__*/ (0,react.memo)(({ children  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LogoBoxStyled, {
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "h3",
                textAlign: "center",
                children: t.persona()
            })
        ]
    });
});


/***/ }),

/***/ 94562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RowLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48154);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35878);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77935);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);






const LayoutContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    background: ${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground */ .ZN.primaryBackground}
`
);
const LeftSide = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        padding: theme.spacing(5),
        width: '30%',
        maxWidth: '400px',
        background: theme.palette.primary.main,
        [theme.breakpoints.down('md')]: {
            width: '25%',
            padding: theme.spacing(3)
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    })
);
const RightContent = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    flex: 1;
    display: flex;
    justify-content: center;
    max-height: 100%;
    overflow: auto;
    background: transparent;
`
);
const RowLayout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LeftSide, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MaskBannerIcon */ .i, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RightContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    maxWidth: "md",
                    children: children
                })
            })
        ]
    });
});


/***/ }),

/***/ 83877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignIn)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(94562);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(95644);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(36361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(81267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupPreviewCard.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        root: {
            padding: '19px 24px 9px',
            minHeight: 205,
            borderRadius: 8,
            background: entry/* MaskColorVar.infoBackground */.ZN.infoBackground,
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
    const t = (0,locales/* useDashboardI18N */.x)();
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
            name: t.settings_backup_preview_file(),
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
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
    });
};

// EXTERNAL MODULE: ../dashboard/src/components/MaskAlert/index.tsx
var MaskAlert = __webpack_require__(4448);
// EXTERNAL MODULE: ../dashboard/src/components/FileUpload/index.tsx
var FileUpload = __webpack_require__(77327);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(85277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
var LoadingCard = __webpack_require__(92356);
// EXTERNAL MODULE: ../backup-format/src/index.ts + 9 modules
var backup_format_src = __webpack_require__(50871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 3 modules
var usePersonaContext = __webpack_require__(16386);
// EXTERNAL MODULE: ../dashboard/src/components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(30500);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(477);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromLocal.tsx




















var RestoreStatus;
(function(RestoreStatus) {
    RestoreStatus[RestoreStatus["WaitingInput"] = 0] = "WaitingInput";
    RestoreStatus[RestoreStatus["Verifying"] = 1] = "Verifying";
    RestoreStatus[RestoreStatus["Verified"] = 2] = "Verified";
    RestoreStatus[RestoreStatus["Decrypting"] = 3] = "Decrypting";
})(RestoreStatus || (RestoreStatus = {}));
const supportedFileType = {
    json: 'application/json',
    octetStream: 'application/octet-stream',
    macBinary: 'application/macbinary'
};
const RestoreFromLocal = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { currentPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [file1, setFile] = (0,react.useState)(null);
    const [json, setJSON] = (0,react.useState)(null);
    const [backupValue, setBackupValue] = (0,react.useState)('');
    const [backupId, setBackupId] = (0,react.useState)('');
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [restoreStatus, setRestoreStatus] = (0,react.useState)(RestoreStatus.WaitingInput);
    const handleSetFile = (0,react.useCallback)(async (file)=>{
        setFile(file);
        if (file.type === supportedFileType.json) {
            const content = await (0,esm/* blobToText */.Gx)(file);
            setBackupValue(content);
        } else if ([
            supportedFileType.octetStream,
            supportedFileType.macBinary
        ].includes(file.type)) {
            setRestoreStatus(RestoreStatus.Decrypting);
        } else {
            showSnackbar(t.sign_in_account_cloud_backup_not_support(), {
                variant: 'error'
            });
        }
    }, []);
    (0,useAsync/* default */.Z)(async ()=>{
        if (!backupValue) return;
        setRestoreStatus(RestoreStatus.Verifying);
        const backupInfo = await API/* Services.Backup.addUnconfirmedBackup */.K9.Backup.addUnconfirmedBackup(backupValue);
        if (backupInfo.ok) {
            setJSON(backupInfo.val.info);
            setBackupId(backupInfo.val.id);
            setRestoreStatus(RestoreStatus.Verified);
        } else {
            showSnackbar(t.sign_in_account_cloud_backup_not_support(), {
                variant: 'error'
            });
            setRestoreStatus(RestoreStatus.WaitingInput);
            setBackupValue('');
        }
    }, [
        backupValue
    ]);
    const decryptBackupFile = (0,react.useCallback)(async ()=>{
        if (!file1) return;
        try {
            const decrypted = await (0,backup_format_src/* decryptBackup */.lK)((0,encode/* encode */.c)(password), await file1.arrayBuffer());
            setBackupValue(JSON.stringify((0,decode/* decode */.Jx)(decrypted)));
        } catch (error_) {
            setError(t.sign_in_account_cloud_backup_decrypt_failed());
        }
    }, [
        file1,
        password
    ]);
    const restoreCallback = (0,react.useCallback)(async ()=>{
        if (!currentPersona) {
            const lastedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
            if (lastedPersona) {
                await changeCurrentPersona(lastedPersona);
            }
        }
        navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
            replace: true
        });
    }, [
        currentPersona,
        changeCurrentPersona
    ]);
    const restoreDB = (0,react.useCallback)(async ()=>{
        try {
            // If json has wallets, restore in popup.
            if (json?.wallets) {
                await API/* Services.Backup.restoreUnconfirmedBackup */.K9.Backup.restoreUnconfirmedBackup({
                    id: backupId,
                    action: 'wallet'
                });
                return;
            } else {
                await API/* Services.Backup.restoreUnconfirmedBackup */.K9.Backup.restoreUnconfirmedBackup({
                    id: backupId,
                    action: 'confirm'
                });
                await restoreCallback();
            }
        } catch  {
            showSnackbar(t.sign_in_account_cloud_backup_failed(), {
                variant: 'error'
            });
        }
    }, [
        backupId,
        json
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.restoreSuccess.on */.Vm.events.restoreSuccess.on(restoreCallback);
    }, [
        restoreCallback
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '100%'
                },
                children: [
                    restoreStatus === RestoreStatus.Verifying && /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                        text: "Verifying"
                    }),
                    restoreStatus === RestoreStatus.WaitingInput && /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                        variant: "background",
                        sx: {
                            height: '144px'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUpload/* default */.Z, {
                            onChange: handleSetFile,
                            accept: Object.values(supportedFileType).join(',')
                        })
                    }),
                    restoreStatus === RestoreStatus.Verified && json && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                        json: json
                    }),
                    restoreStatus === RestoreStatus.Decrypting && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            placeholder: t.sign_in_account_cloud_backup_password(),
                            type: "password",
                            onChange: (e)=>setPassword(e.currentTarget.value)
                            ,
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    variant: "rounded",
                    size: "large",
                    color: "primary",
                    onClick: restoreStatus === RestoreStatus.Decrypting ? decryptBackupFile : restoreDB,
                    disabled: restoreStatus === RestoreStatus.Verified ? !json : !file1,
                    children: restoreStatus !== RestoreStatus.Verified ? t.next() : t.restore()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_local_backup_warning()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(88540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useList.js
var useList = __webpack_require__(4513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/some.js
var some = __webpack_require__(40250);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var routePath = __webpack_require__(23930);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromMnemonic.tsx

















const RestoreFromMnemonic_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        error: {
            marginTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
            color: (0,entry/* getMaskColor */.nb)(theme).redMain,
            borderLeft: `2px solid ${(0,entry/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const RestoreFromMnemonic = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = RestoreFromMnemonic_useStyles();
    const [error, setError] = (0,react.useState)('');
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.x)();
    const [values, { updateAt , set: setMnemonic  }] = (0,useList/* default */.Z)(Array.from({
        length: 12
    }).fill(''));
    const handleImport = async ()=>{
        try {
            const persona = await API/* Services.Identity.queryPersonaByMnemonic */.K9.Identity.queryPersonaByMnemonic(values.join(' '), '');
            if (persona) {
                await changeCurrentPersona(persona);
                // Waiting persona changed event notify
                await (0,esm/* delay */.gw)(100);
                navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
                    replace: true
                });
            } else {
                navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery}`, {
                    replace: false,
                    state: {
                        mnemonic: values
                    }
                });
            }
        } catch  {
            setError(t.sign_in_account_mnemonic_confirm_failed());
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* DesktopMnemonicConfirm */.q, {
                        onChange: (word, index)=>{
                            updateAt(index, word);
                            setError('');
                        },
                        puzzleWords: values,
                        setAll: setMnemonic
                    }),
                    error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.error,
                        variant: "body2",
                        children: error
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    variant: "rounded",
                    size: "large",
                    onClick: handleImport,
                    disabled: (0,some/* default */.Z)(values, (value)=>!value
                    ),
                    children: t.confirm()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_identity_warning()
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(58913);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(90690);
;// CONCATENATED MODULE: ../dashboard/src/components/Stepper/index.tsx





const Stepper_useStyles = (0,entry/* makeStyles */.ZL)()({
    hidden: {
        position: 'absolute',
        left: 10000
    }
});
const Step = ({ children , toStep , params  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children(toStep, params)
    });
};
const Stepper = (props)=>{
    const { defaultStep , transition , step  } = props;
    const { classes  } = Stepper_useStyles();
    const [currentStep, setCurrentStep] = (0,react.useState)(defaultStep);
    const [currentTransition, setCurrentTransition] = (0,react.useState)(transition?.render);
    const [steps, { set: setSteps  }] = (0,useMap/* default */.Z)();
    const [stepParams, { set: setParam  }] = (0,useMap/* default */.Z)();
    const toStep = (stepName, params)=>{
        setCurrentStep(stepName);
        setParam(stepName, params);
    };
    (0,react.useEffect)(()=>{
        react.Children.forEach(props.children, (child)=>{
            if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return;
            const name = child.props.name;
            setSteps(name, child);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/BackupInfoCard.tsx
var BackupInfoCard = __webpack_require__(12287);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ConfirmBackupInfo.tsx







const ConfirmBackupInfo = /*#__PURE__*/ (0,react.memo)(({ backupInfo , onNext  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [password, setPassword] = (0,react.useState)('');
    const [errorMessage, setErrorMessage] = (0,react.useState)('');
    const handleNext = async ()=>{
        const result = await onNext(password);
        if (result) {
            setErrorMessage(result);
        }
    };
    if (!backupInfo) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            label: t.sign_in_account_cloud_backup_password(),
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
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/type.ts
var Settings_type = __webpack_require__(99922);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/common.tsx




var ValidationCodeStep;
(function(ValidationCodeStep) {
    ValidationCodeStep["EmailInput"] = "EmailInput";
    ValidationCodeStep["PhoneInput"] = "PhoneInput";
    ValidationCodeStep["AccountValidation"] = "AccountValidation";
    ValidationCodeStep["ConfirmBackupInfo"] = "ConfirmBackupInfo";
})(ValidationCodeStep || (ValidationCodeStep = {}));
const Label = /*#__PURE__*/ (0,react.memo)(({ mode , onModeChange  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    fontWeight: 'bolder',
                    fontSize: 12
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
    });
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/regexp.ts
var regexp = __webpack_require__(66270);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/EmailField.tsx









const EmailField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [account, setAccount] = (0,react.useState)('');
    const [invalidEmail, setInvalidEmail] = (0,react.useState)(false);
    const validCheck = ()=>{
        if (!account) return;
        const isValid = regexp/* emailRegexp.test */.LX.test(account);
        setInvalidEmail(!isValid);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.PhoneInput)
                    ,
                    mode: Settings_type/* AccountType.email */.Qm.email
                }),
                fullWidth: true,
                value: account,
                onBlur: validCheck,
                onChange: (event)=>setAccount(event.target.value)
                ,
                error: invalidEmail,
                helperText: invalidEmail ? t.sign_in_account_cloud_backup_email_format_error() : '',
                type: "email"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    size: "large",
                    onClick: ()=>toStep(ValidationCodeStep.AccountValidation, {
                            account,
                            type: Settings_type/* AccountType.email */.Qm.email
                        })
                    ,
                    disabled: !account || invalidEmail,
                    children: t.next()
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/PhoneField.tsx









const PhoneField = /*#__PURE__*/ (0,react.memo)(({ toStep  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const [account, setAccount] = (0,react.useState)('');
    const [invalidPhone, setInvalidPhone] = (0,react.useState)(false);
    const validCheck = ()=>{
        if (!account) return;
        const isValid = regexp/* phoneRegexp.test */.wZ.test(account);
        setInvalidPhone(!isValid);
    };
    const handleClick = (0,react.useCallback)(()=>{
        if (!regexp/* phoneRegexp.test */.wZ.test(account)) return;
        toStep(ValidationCodeStep.AccountValidation, {
            account,
            type: Settings_type/* AccountType.phone */.Qm.phone
        });
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* PhoneNumberField */.g8, {
                onBlur: validCheck,
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                    onModeChange: ()=>toStep(ValidationCodeStep.EmailInput)
                    ,
                    mode: Settings_type/* AccountType.phone */.Qm.phone
                }),
                onChange: ({ country , phone  })=>setAccount(country + ' ' + phone)
                ,
                error: invalidPhone ? t.sign_in_account_cloud_backup_phone_format_error() : '',
                value: {
                    country: '+1',
                    phone: ''
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    variant: "rounded",
                    color: "primary",
                    size: "large",
                    onClick: ()=>handleClick()
                    ,
                    disabled: !account || invalidPhone,
                    children: t.next()
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/steps/ValidationAccount.tsx










const ValidationAccount = ({ account , toStep , type , onNext  })=>{
    const language = (0,api/* useLanguage */.ZK)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const [code, setCode] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const [{ error: sendCodeError  }, handleSendCodeFn] = (0,useAsyncFn/* default */.Z)(async ()=>{
        showSnackbar(t.sign_in_account_cloud_backup_send_email_success({
            type
        }), {
            variant: 'success'
        });
        await (0,api/* sendCode */.Z3)({
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
                backupInfo,
                account,
                type
            });
        } else {
            setError(backupInfo.message);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* SendingCodeField */.oe, {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body2",
                    sx: {
                        fontWeight: 'bolder',
                        fontSize: 12
                    },
                    lineHeight: "30px",
                    color: "textPrimary",
                    children: [
                        t.sign_in_account_cloud_send_verification_code_tip(),
                        " ",
                        account
                    ]
                }),
                autoSend: true,
                onChange: (c)=>setCode(c)
                ,
                errorMessage: sendCodeError?.message || error,
                onSend: handleSendCodeFn
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    size: "large",
                    variant: "rounded",
                    color: "primary",
                    onClick: handleNext,
                    disabled: !account || !code,
                    children: t.next()
                })
            })
        ]
    });
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stepper, {
        defaultStep: ValidationCodeStep.EmailInput,
        transition: {
            render: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {}),
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
                children: (toStep, { backupInfo , account , type  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmBackupInfo, {
                        toStep: toStep,
                        backupInfo: backupInfo,
                        onNext: (password)=>onValidated(backupInfo.downloadURL, account, password, type)
                    })
            })
        ]
    });
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx + 1 modules
var UserContext = __webpack_require__(77778);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(40615);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/ConfirmSynchronizePasswordDialog.tsx






const ConfirmSynchronizePasswordDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , onConform  })=>{
    const t1 = (0,locales/* useDashboardI18N */.x)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* MaskDialog */.Df, {
        open: open,
        title: t1.cloud_backup(),
        onClose: onClose,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                        alignItems: "center",
                        py: 2,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                                sx: {
                                    fontSize: 54
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "caption",
                                sx: {
                                    color: (t)=>(0,entry/* getMaskColor */.nb)(t).greenMain
                                },
                                fontSize: 24,
                                children: t1.successful()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        children: t1.sign_in_account_cloud_backup_synchronize_password_tip()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        children: t1.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: onConform,
                        children: t1.personas_confirm()
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromCloud.tsx























const RestoreFromCloud = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { user , updateUser  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { currentPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [account1, setAccount] = (0,react.useState)(null);
    const [backupId, setBackupId] = (0,react.useState)('');
    const [openSynchronizePasswordDialog, toggleSynchronizePasswordDialog] = (0,react.useState)(false);
    const [step, setStep] = (0,react.useState)({
        name: 'validate',
        params: null
    });
    const [{ loading: fetchingBackupValue , error: fetchBackupValueError  }, fetchBackupValueFn] = (0,useAsyncFn/* default */.Z)(async (downloadLink)=>(0,api/* fetchBackupValue */.Eu)(downloadLink)
    , []);
    const [{ loading: decryptingBackup  }, decryptBackupFn] = (0,useAsyncFn/* default */.Z)(async (account, password, encryptedValue)=>{
        try {
            const decrypted = await (0,backup_format_src/* decryptBackup */.lK)((0,encode/* encode */.c)(account + password), encryptedValue);
            return JSON.stringify((0,decode/* decode */.Jx)(decrypted));
        } catch  {
            return null;
        }
    }, []);
    (0,react.useEffect)(()=>{
        if (!fetchBackupValueError) return;
        showSnackbar(t.sign_in_account_cloud_backup_download_failed(), {
            variant: 'error'
        });
    }, [
        fetchBackupValueError
    ]);
    const onValidated = (0,react.useCallback)(async (downloadLink, accountValue, password, type)=>{
        const backupEncrypted = await fetchBackupValueFn(downloadLink);
        const backupDecrypted = await decryptBackupFn(accountValue, password, backupEncrypted);
        if (!backupDecrypted) {
            return t.sign_in_account_cloud_backup_decrypt_failed();
        }
        const backupNormalized = await API/* Services.Backup.addUnconfirmedBackup */.K9.Backup.addUnconfirmedBackup(backupDecrypted);
        if (backupNormalized.err) return t.sign_in_account_cloud_backup_decrypt_failed();
        const { id , info  } = backupNormalized.val;
        setBackupId(id);
        setAccount({
            type,
            value: accountValue,
            password
        });
        setStep({
            name: 'restore',
            params: {
                backupJson: info,
                handleRestore: ()=>onRestore(backupNormalized.val)
            }
        });
        return null;
    }, []);
    const restoreCallback = (0,react.useCallback)(async ()=>{
        if (!currentPersona) {
            const lastedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
            if (lastedPersona) {
                await changeCurrentPersona(lastedPersona);
            }
        }
        if (account1) {
            if (!user.email && account1.type === Settings_type/* AccountType.email */.Qm.email) {
                updateUser({
                    email: account1.value
                });
            }
            if (!user.phone && account1.type === Settings_type/* AccountType.phone */.Qm.phone) {
                updateUser({
                    phone: account1.value
                });
            }
        }
        toggleSynchronizePasswordDialog(true);
    }, [
        currentPersona,
        account1,
        user,
        toggleSynchronizePasswordDialog
    ]);
    const onRestore = (0,react.useCallback)(async (backupInfo)=>{
        try {
            if (backupInfo.info?.wallets) {
                await API/* Services.Backup.restoreUnconfirmedBackup */.K9.Backup.restoreUnconfirmedBackup({
                    id: backupInfo.id,
                    action: 'wallet'
                });
                return;
            } else {
                await API/* Services.Backup.restoreUnconfirmedBackup */.K9.Backup.restoreUnconfirmedBackup({
                    id: backupInfo.id,
                    action: 'confirm'
                });
                await restoreCallback();
            }
        } catch  {
            showSnackbar(t.sign_in_account_cloud_restore_failed(), {
                variant: 'error'
            });
        }
    }, [
        user
    ]);
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
    const synchronizePassword = ()=>{
        if (!account1) return;
        updateUser({
            backupPassword: account1.password
        });
        onCloseSynchronizePassword();
    };
    const onCloseSynchronizePassword = ()=>{
        toggleSynchronizePasswordDialog(false);
        navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
            replace: true
        });
    };
    (0,react.useEffect)(()=>{
        return API/* Messages.events.restoreSuccess.on */.Vm.events.restoreSuccess.on(restoreCallback);
    }, [
        restoreCallback
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                        children: (_, { backupJson: backupBasicInfoJson , handleRestore  })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            width: '100%'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPreviewCard, {
                                            json: backupBasicInfoJson
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                                            size: "large",
                                            variant: "rounded",
                                            color: "primary",
                                            onClick: handleRestore,
                                            children: t.restore()
                                        })
                                    })
                                ]
                            })
                    })
                ]
            }),
            openSynchronizePasswordDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmSynchronizePasswordDialog, {
                open: openSynchronizePasswordDialog,
                onClose: ()=>onCloseSynchronizePassword()
                ,
                onConform: synchronizePassword
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_cloud_backup_warning()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.31.1/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(72261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.10_react-hook-form@7.31.1/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(33953);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.16.0/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(7055);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/RestoreFromPrivateKey.tsx
















const RestoreFromPrivateKey = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const schema = lib.z.object({
        privateKey: lib.z.string()
    });
    const { control , handleSubmit , setError , formState: { errors , isSubmitting , isDirty  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            privateKey: ''
        }
    });
    const onSubmit = async (data)=>{
        try {
            const persona = await API/* Services.Identity.loginExistPersonaByPrivateKey */.K9.Identity.loginExistPersonaByPrivateKey(data.privateKey);
            if (persona) {
                await changeCurrentPersona(persona);
                // Waiting persona changed event notify
                await (0,esm/* delay */.gw)(100);
                navigate(src/* DashboardRoutes.Personas */.vq.Personas);
            } else {
                navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery}`, {
                    replace: false,
                    state: {
                        privateKey: data.privateKey
                    }
                });
            }
        } catch  {
            setError('privateKey', {
                type: 'value',
                message: t.sign_in_account_private_key_error()
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                                render: ({ field  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                                        ...field,
                                        sx: {
                                            width: '100%'
                                        },
                                        multiline: true,
                                        rows: 8,
                                        helperText: errors.privateKey?.message,
                                        error: !!errors.privateKey,
                                        placeholder: t.sign_in_account_private_key_placeholder()
                                    })
                                ,
                                name: "privateKey"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                size: "large",
                                variant: "rounded",
                                color: "primary",
                                type: "submit",
                                disabled: isSubmitting || !isDirty,
                                children: t.confirm()
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    pt: 4,
                    pb: 2,
                    width: '100%'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                    description: t.sign_in_account_private_key_warning()
                })
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
;// CONCATENATED MODULE: ../dashboard/src/components/Restore/index.tsx











const Restore_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = Restore_useStyles();
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)('mnemonic', 'privateKey', 'local', 'cloud');
    const tabPanelClasses = {
        root: classes.panels
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                children: [
                    'mnemonic',
                    'privateKey'
                ].includes(currentTab) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* RestoreBlueLogo */.ud, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* ButtonGroupTabList */.E1, {
                        classes: {
                            root: classes.tabs
                        },
                        onChange: onChange,
                        "aria-label": t.wallets_import_wallet_tabs(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.sign_in_account_tab_identity(),
                                value: tabs.mnemonic
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_private_key(),
                                value: tabs.privateKey
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                label: t.wallets_wallet_json_file(),
                                value: tabs.local
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromMnemonic, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.privateKey,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromPrivateKey, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.local,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromLocal, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: tabs.cloud,
                        classes: tabPanelClasses,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromCloud, {})
                    })
                ]
            })
        ]
    });
});

;// CONCATENATED MODULE: ../dashboard/src/pages/SignIn/index.tsx










function SignIn() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { state: _state , search  } = (0,react_router/* useLocation */.TH)();
    const state = _state;
    const from = new URLSearchParams(search).get('from');
    const action = (0,react.useMemo)(()=>state?.from || from === 'popups' ? {
            name: t.close(),
            callback: ()=>state?.from ? navigate(state.from) : navigate(src/* DashboardRoutes.Personas */.vq.Personas)
        } : {
            name: t.sign_in_account_sign_up_button(),
            callback: ()=>navigate(src/* DashboardRoutes.SignUp */.vq.SignUp)
        }
    , [
        state
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(UserContext/* UserProvider */.d, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                        title: t.sign_in_account_identity_title(),
                        action: action
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Body */.uT, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Restore, {})
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 23930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ SignUpRoutePath)
/* harmony export */ });
var SignUpRoutePath;
(function(SignUpRoutePath) {
    SignUpRoutePath["MnemonicReveal"] = 'mnemonic-reveal';
    SignUpRoutePath["PersonaCreate"] = 'persona-create';
    SignUpRoutePath["PersonaRecovery"] = 'persona-recovery';
    SignUpRoutePath["ConnectSocialMedia"] = 'connect-social-media';
})(SignUpRoutePath || (SignUpRoutePath = {}));


/***/ }),

/***/ 1689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


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

/***/ 62812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SignUpAccountIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SignUpAccountIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('SignUpAccount', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "7",
            y: "26.5",
            width: "3",
            height: "15",
            rx: "1.5",
            transform: "rotate(-30 7 26.5)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.6522 26.1312C25.4873 26.8222 23.1442 26.4569 21.0187 25.1362C20.7879 24.9826 20.4804 24.9445 20.1917 25.0366C19.9031 25.1288 19.6745 25.338 19.5614 25.6241C18.6082 27.9049 16.8895 29.5668 14.7246 30.2579C11.2607 31.3636 7.32552 29.7117 4.9138 26.1422C4.26886 25.1894 3.7485 24.1287 3.38651 22.9947C3.21538 22.4586 3.07891 21.8887 2.96965 21.3329L2.59926 19.2474L4.32911 20.4673C4.65464 20.7042 5.085 20.7712 5.45613 20.6528C5.55922 20.6199 5.65573 20.5663 5.75224 20.5128L6.18959 20.0324L6.21766 19.978L6.27381 19.8692C7.46739 18.0569 9.237 16.6968 11.3194 16.0321C13.2782 15.4068 15.3791 15.4405 17.3212 16.1155C18.5131 14.4401 20.2059 13.1954 22.1647 12.5701C24.2265 11.9119 26.4774 11.9886 28.5003 12.7742L28.6091 12.8303C28.6907 12.8724 28.7929 12.9079 28.8951 12.9435L28.8951 12.9435L28.9223 12.9575C29.1474 13.022 29.3939 13.0114 29.6414 12.9325C30.0331 12.8074 30.3244 12.51 30.4525 12.1283L31.1349 10.1383L32.0414 12.0527C32.3016 12.5831 32.4933 13.1126 32.6644 13.6487C33.0264 14.7827 33.2169 15.9487 33.2433 17.099C33.387 21.3925 31.1161 25.0254 27.6522 26.1312ZM14.3081 24.8247C14.0195 24.9169 13.7176 24.9678 13.4092 24.9981C11.7172 25.1065 10.144 23.9502 9.41964 23.3181C9.94034 22.743 10.98 21.7295 12.2789 21.3149C12.5882 21.2161 12.8694 21.1718 13.1778 21.1415C14.8699 21.0331 16.4431 22.1894 17.1674 22.8215C16.6261 23.4032 15.5864 24.4167 14.3081 24.8247ZM21.3738 21.4788C22.1314 21.6459 23.5866 21.8629 24.8649 21.4549C25.1742 21.3562 25.4497 21.2228 25.698 21.0754C27.1193 20.19 27.7522 18.3294 27.9763 17.3946C27.2187 17.2275 25.7635 17.0104 24.4852 17.4185C24.1759 17.5172 23.9004 17.6506 23.6521 17.798C22.2308 18.6834 21.5979 20.5439 21.3738 21.4788Z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.5306 16.4749L28.894 15.8691L45.9996 21.5145L45.9269 22.2171C45.7816 23.7435 45.4666 25.27 44.9578 26.7722C43.7706 30.3338 41.7353 33.3867 39.2397 35.3734C37.3741 36.8514 35.3631 37.6267 33.449 37.6267C32.6979 37.6267 31.9711 37.5298 31.2684 37.2875C28.7486 36.4395 26.883 34.2104 26.035 30.988C25.2112 27.9109 25.405 24.2524 26.5922 20.6907C27.0768 19.1885 27.731 17.7832 28.5306 16.4749ZM30.7116 26.4814C31.0751 26.651 31.4627 26.7237 31.8988 26.7237C32.2865 26.7237 32.7226 26.651 33.183 26.5299C33.678 26.3649 34.0759 26.1583 34.2507 26.0675C34.3069 26.0383 34.3401 26.0211 34.346 26.0211L34.8305 25.7303L34.564 25.2215C34.5398 25.1488 33.7645 23.6709 32.238 22.9924C30.7116 22.314 29.0883 22.7501 29.0156 22.7744L28.4583 22.9198L28.5795 23.477C28.5864 23.484 28.6014 23.5348 28.626 23.6186C28.6872 23.827 28.8083 24.2392 29.0156 24.6885C29.4517 25.5607 30.0332 26.1907 30.7116 26.4814ZM38.2468 29.0497C38.4407 29.0981 38.6345 29.1224 38.8525 29.1224C39.434 29.1224 40.064 28.9528 40.6697 28.6378C41.2997 28.3228 41.7116 27.9594 41.7358 27.9351L42.1719 27.5475L41.8327 27.0871C41.7842 27.0144 40.7424 25.6819 39.1191 25.3184C37.6165 24.982 36.2177 25.5797 35.9603 25.6897C35.9396 25.6986 35.9263 25.7043 35.9208 25.7061L35.412 25.9484L35.6301 26.4814C35.6301 26.5056 35.8482 27.0387 36.26 27.5959C36.8415 28.3713 37.52 28.8801 38.2468 29.0497Z",
                fill: "#1C68F3",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "21.5332",
                    y: "11.8691",
                    width: "28.4664",
                    height: "29.7576",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "3",
                    y1: "21.4999",
                    x2: "32.5",
                    y2: "11.9999",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ })

}]);