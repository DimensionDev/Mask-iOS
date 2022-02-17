"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6607],{

/***/ 82841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gp": () => (/* reexport */ locales/* addDashboardI18N */.Gp)
});

// UNUSED EXPORTS: IntergratedDashboard, setMessages, setPluginMessages, setPluginServices, setService

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (/* unused pure expression or super */ null && (lazy(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(2698), __webpack_require__.e(1216), __webpack_require__.e(7696), __webpack_require__.e(9210), __webpack_require__.e(7120)]).then(__webpack_require__.bind(__webpack_require__, 3244))
)));
function IntergratedDashboard() {
    return(/*#__PURE__*/ _jsx(Suspense, {
        fallback: "",
        children: /*#__PURE__*/ _jsx(Dashboard, {
        })
    }));
}

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
;// CONCATENATED MODULE: ../dashboard/src/entry.tsx
// This entry is for dashboard used as a package (required by the main extension).
// Should only expose necessary API for setup the Dashboard API correctly.





/***/ }),

/***/ 76591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* reexport safe */ _i18n_generated__WEBPACK_IMPORTED_MODULE_12__.K),
/* harmony export */   "xF": () => (/* reexport safe */ _i18n_generated__WEBPACK_IMPORTED_MODULE_12__.x),
/* harmony export */   "Gp": () => (/* binding */ addDashboardI18N)
/* harmony export */ });
/* unused harmony export languages */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62012);
/* harmony import */ var _es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76353);
/* harmony import */ var _fa_IR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10282);
/* harmony import */ var _fr_FR_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2861);
/* harmony import */ var _it_IT_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72232);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97979);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75743);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59641);
/* harmony import */ var _ru_RU_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98028);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32284);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39675);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80050);
/* harmony import */ var _i18n_generated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28074);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback langauge in a family of langauges are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts













const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    es: _es_ES_json__WEBPACK_IMPORTED_MODULE_1__,
    fa: _fa_IR_json__WEBPACK_IMPORTED_MODULE_2__,
    fr: _fr_FR_json__WEBPACK_IMPORTED_MODULE_3__,
    it: _it_IT_json__WEBPACK_IMPORTED_MODULE_4__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_5__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_6__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_7__,
    ru: _ru_RU_json__WEBPACK_IMPORTED_MODULE_8__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_9__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_10__
};
const addDashboardI18N = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_11__.createI18NBundle)('dashboard', languages);


/***/ }),

/***/ 92697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DecryptFailedReason),
/* harmony export */   "Y": () => (/* binding */ WALLET_OR_PERSONA_NAME_MAX_LEN)
/* harmony export */ });
var DecryptFailedReason;
(function(DecryptFailedReason1) {
    DecryptFailedReason1["MyCryptoKeyNotFound"] = "MyCryptoKeyNotFound";
})(DecryptFailedReason || (DecryptFailedReason = {
}));
const WALLET_OR_PERSONA_NAME_MAX_LEN = 24;


/***/ }),

/***/ 36712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jw": () => (/* binding */ sideEffect),
/* harmony export */   "CU": () => (/* binding */ startEffect),
/* harmony export */   "Wu": () => (/* binding */ startEffects)
/* harmony export */ });
/**
 * There are some side effects in a module import.
 * Those side effects sometimes cause an error in the test(jest) env.
 *
 * To chain the sideEffect after this Promise,
 * the sideEffect will only be invoked in the non-test env.
 */ let invokeSideEffect;
const sideEffect = new Promise((resolve)=>invokeSideEffect = resolve
);
try {
    var ref, ref1;
    if (false) {} else if (false) {} else if ((ref1 = globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.process) === null || ref === void 0 ? void 0 : ref.argv[1]) === null || ref1 === void 0 ? void 0 : ref1.includes('ssr')) {
    } else {
        throw new Error();
    }
} catch  {
    if (typeof invokeSideEffect === 'undefined') {
        const i = setInterval(()=>{
            if (typeof invokeSideEffect === 'undefined') return;
            clearInterval(i);
            invokeSideEffect();
        }, 10);
    } else {
        invokeSideEffect();
    }
}
function startEffect(hot, f) {
    const ac = new AbortController();
    if (!hot) {
        f(ac);
        return;
    }
    hot.dispose(f(ac));
    hot.dispose(()=>ac.abort()
    );
}
function startEffects(hot) {
    return startEffect.bind(null, hot);
}


/***/ }),

/***/ 22401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ ButtonGroupTabList)
});

// UNUSED EXPORTS: ButtonTab

// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx
var ButtonGroupTab = __webpack_require__(99542);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ButtonGroup/ButtonGroup.js + 1 modules
var ButtonGroup = __webpack_require__(20695);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_7521f9b72df60882097bde8833c6d120/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(34054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @material-ui.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @material-ui <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <ButtonGroupTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </ButtonGroupTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const ButtonGroupTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return child;
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab/* default */.Z) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupTab/* ButtonTab */.p, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            }));
        }
        return(/*#__PURE__*/ (0,react.cloneElement)(child, extra));
    });
    const { onChange , ...rest } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroup/* default */.Z, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    }));
});

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 70742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CountdownButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91377);



function CountdownButton(props) {
    const { duration =60 , children , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>clearTimeout(countdown)
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{
        };
    }, [
        countdown
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: [
            children,
            countdown ? ` (${countdown})` : ''
        ]
    }));
}


/***/ }),

/***/ 48747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ MaskDialog)
/* harmony export */ });
/* unused harmony export useMaskDialog */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86753);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52265);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23316);






/**
 * This component is used to provide a most common dialog practice in Mask design.
 *
 * But all the primitives are tweaked to fit the design
 * Therefore it also OK to not use this component if you need a special one.
 */ const MaskDialog = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { title , onBack , onClose , open , children , DialogProps , ...inferredDialogProps } = props;
    const dialogProps = {
        onBackdropClick: onClose,
        onClose,
        open,
        ...inferredDialogProps,
        ...DialogProps
    };
    const { extraProps , shouldReplaceExitWithBack  } = (0,_DialogStack__WEBPACK_IMPORTED_MODULE_4__/* .useDialogStackConsumer */ .N)(open);
    return (0,_ShadowRoot__WEBPACK_IMPORTED_MODULE_2__/* .usePortalShadowRoot */ .ad)((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            container: container,
            ...dialogProps,
            ...extraProps,
            children: [
                shouldReplaceExitWithBack ? // replace onClose with onBack when and only when there is no onBack
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                    onBack: onBack || onClose,
                    onClose: onBack ? onClose : undefined,
                    children: title
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                    onBack: onBack,
                    onClose: onClose,
                    children: title
                }),
                children
            ]
        })
    );
});
function useMaskDialog(title, content, actions) {
    const [isOpen, open] = useState(false);
    const onClose = useCallback(()=>open(false)
    , []);
    return(/*#__PURE__*/ _jsxs(MaskDialog, {
        onClose: onClose,
        open: isOpen,
        title: title,
        children: [
            /*#__PURE__*/ _jsx(DialogContent, {
                children: content
            }),
            /*#__PURE__*/ _jsx(DialogActions, {
                children: actions
            })
        ]
    }));
}


/***/ }),

/***/ 89577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PhoneNumberField)
/* harmony export */ });
/* unused harmony export phoneRegexp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76900);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71591);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76728);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34539);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
// todo: remove regex, 123123d
const phoneRegexp = /(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , phoneErrorMessage ='The phone number is incorrect.' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.phone);
    const [countryCode, setCountryCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.country);
    const [invalidPhone, setInvalidPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleCountryCodeChange = (event)=>{
        const inputValue = event.target.value;
        const prefix = inputValue.startsWith('+') ? '' : '+';
        setCountryCode(prefix + inputValue);
        onChange === null || onChange === void 0 ? void 0 : onChange({
            country: inputValue,
            phone: phone
        });
    };
    const handlePhoneChange = (event)=>{
        const inputValue = event.target.value;
        setPhone(inputValue);
        onChange === null || onChange === void 0 ? void 0 : onChange({
            country: countryCode,
            phone: inputValue
        });
    };
    const validCheck = ()=>{
        if (!phone) return;
        const isValid = phoneRegexp.test(countryCode + phone);
        if (isValid) {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur({
                country: countryCode,
                phone: phone
            });
        }
        setInvalidPhone(!isValid);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: validCheck,
                            type: "text",
                            error: invalidPhone || error,
                            helperText: invalidPhone || error ? phoneErrorMessage : ''
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 42869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ SendingCodeField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65111);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76728);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70742);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , onChange  })=>{
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(code);
    }, [
        code
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                            flex: 1,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                                size: "small",
                                value: code,
                                onChange: (event)=>setCode(event.target.value)
                                ,
                                error: !!errorMessage,
                                helperText: errorMessage,
                                onBlur: ()=>{
                                    return onBlur === null || onBlur === void 0 ? void 0 : onBlur(code);
                                },
                                disabled: disabled
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountdownButton__WEBPACK_IMPORTED_MODULE_3__/* .CountdownButton */ .q, {
                            size: "medium",
                            sx: {
                                height: '40px',
                                width: '100px'
                            },
                            onClick: onSend,
                            disabled: disabled,
                            children: sendButtonText
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 76728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ MaskTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42318);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76900);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97448);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71591);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42118);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        required: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder',
            color: (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5)
        },
        field: {
            width: '100%',
            [`& > .${_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default.root */ .Z.root}`]: {
                marginTop: theme.spacing(0.8),
                paddingLeft: theme.spacing(0.5),
                borderLeft: 'solid 2px',
                borderRadius: '2px',
                fontSize: 12,
                lineHeight: '16px'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.mode === 'dark' ? (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).lightBackground : (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).normalBackground,
            fontSize: 12,
            lineHeight: '16px',
            [`&.${_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default.error */ .Z.error}`]: {
                boxShadow: `0 0 0 ${theme.spacing(0.5)} ${_constants__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.2)}`,
                border: `1px solid ${_constants__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.8)}`
            }
        }
    })
);
const MaskTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label , sx , required =false , ...rest } = props;
    var ref1;
    const inputProps = (ref1 = props.inputProps) !== null && ref1 !== void 0 ? ref1 : {
    };
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        sx: sx,
        children: [
            label && typeof label === 'string' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: [
                    label,
                    required && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                        className: classes.required,
                        component: "span",
                        children: "*"
                    })
                ]
            }),
            label && typeof label !== 'string' && label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                required: required,
                InputProps: {
                    ...inputProps,
                    disableUnderline: true,
                    className: classes.input
                }
            })
        ]
    }));
});


/***/ }),

/***/ 86753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I3": () => (/* reexport safe */ _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_1__.z),
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.d_),
/* harmony export */   "lr": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.lr),
/* harmony export */   "vg": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.vg),
/* harmony export */   "XR": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.XR)
/* harmony export */ });
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89787);
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44849);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29168);





/***/ }),

/***/ 89158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../theme/src/hooks/useTabs.tsx


/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react.useState)(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = (0,react.useCallback)((event, value)=>{
        setTab(value);
    }, []);
    return [
        currentTab,
        onChange,
        enum_,
        setTab
    ];
}

;// CONCATENATED MODULE: ../theme/src/hooks/index.ts



/***/ }),

/***/ 80852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xw": () => (/* reexport safe */ _useERC20TokenContract__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var _useERC20TokenContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60657);
/* harmony import */ var _useERC721TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20913);
=======
/* harmony import */ var _useERC20TokenContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85380);
/* harmony import */ var _useERC721TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58000);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js




/***/ }),

/***/ 13229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ useMulticallContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/src/constants/index.ts + 15 modules
var constants = __webpack_require__(24492);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(16055);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useMulticallContract.ts



function useMulticallContract() {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)();
    return (0,useContract/* useContract */.cq)(MULTICALL_ADDRESS, Multicall_namespaceObject);
}


/***/ }),

/***/ 39597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useAllowTestnet)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77239);

function useAllowTestnet() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().allowTestnet;
}


/***/ }),

/***/ 19538:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useAssets)
/* harmony export */ });
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69895);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30311);
/* harmony import */ var _useAssetsFromChain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23287);
/* harmony import */ var _useAssetsFromProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _useAssetsMerged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33456);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4285);







function useAssets(tokens) {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const { value: nativeTokenDetailed , loading: nativeTokenDetailedLoading , error: nativeTokenDetailedError , retry: retryNativeTokenDetailed ,  } = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const { value: assetsDetailedChain = [] , loading: assetsDetailedChainLoading , error: assetsDetailedChainError , retry: retryAssetsDetailedChain ,  } = (0,_useAssetsFromChain__WEBPACK_IMPORTED_MODULE_2__/* .useAssetsFromChain */ .R)(nativeTokenDetailed ? [
        nativeTokenDetailed,
        ...tokens
    ] : tokens);
    const { value: assetsDetailedProvider = [] , loading: assetsDetailedProviderLoading , error: assetsDetailedProviderError , retry: retryAssetsDetailedDebank ,  } = (0,_useAssetsFromProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAssetsFromProvider */ .u)();
    const detailedTokensRetry = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        retryNativeTokenDetailed();
        retryAssetsDetailedChain();
        retryAssetsDetailedDebank();
    }, [
        retryNativeTokenDetailed,
        retryAssetsDetailedChain,
        retryAssetsDetailedDebank
    ]);
    const assetsDetailed = (0,_useAssetsMerged__WEBPACK_IMPORTED_MODULE_5__/* .useAssetsMerged */ .n)(assetsDetailedProvider, assetsDetailedChain);
    return {
        value: assetsDetailed.filter((x)=>{
            return !(wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_blacklist.has((0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatEthereumAddress */ .j8)(x.token.address)));
        }),
        error: nativeTokenDetailedError || assetsDetailedChainError || assetsDetailedProviderError,
        loading: nativeTokenDetailedLoading || assetsDetailedChainLoading || assetsDetailedProviderLoading,
        retry: detailedTokensRetry
    };
}


/***/ }),

/***/ 67217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77239);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4285);




function useCollectibles(address, chainId, provider, page, size) {
    const { getAssetsListNFT , getERC721TokensPaged  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!address) {
            return {
                collectibles: [],
                hasNextPage: false
            };
        }
        // a list of mock data address:
        // 0x3c6137504c38215fea30605b3e364a23c1d3e14f
        // 0x65c1b9ae4e4d8dcccfd3dc41b940840fe8570f2a
        // 0xa357a589a37cf7b6edb31b707e8ed3219c8249ac
        const result = await getAssetsListNFT(address.toLowerCase(), chainId, provider, page, size);
        const erc721Tokens = await getERC721TokensPaged(page, size);
        return {
            collectibles: (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)([
                ...result.assets,
                ...erc721Tokens
            ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
            ),
            hasNextPage: result.hasNextPage
        };
    }, [
        address,
        provider,
        page
    ]);
}


/***/ }),

/***/ 52248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useCurrentBlockTimestamp)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17952);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47765);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64316);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13229);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js


function useCurrentBlockTimestamp() {
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_0__/* .useMulticallContract */ .g)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(async ()=>{
        return multicallContract === null || multicallContract === void 0 ? void 0 : multicallContract.methods.getCurrentBlockTimestamp().call();
    }, [
        multicallContract
    ]);
}


/***/ }),

/***/ 54618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useERC165)
/* harmony export */ });
/* unused harmony export ERC165_INTERFACE_ID */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17952);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64316);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51362);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js


const ERC165_INTERFACE_ID = '0x01ffc9a7';
function useERC165(contract, address, interfaceId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(async ()=>{
        if (!contract) return false;
        try {
            const isERC165 = await contract.methods.supportsInterface(ERC165_INTERFACE_ID).call({
                from: account
            });
            const isVerify = await contract.methods.supportsInterface(interfaceId).call({
                from: account
            });
            return isERC165 && isVerify;
        } catch  {
            return false;
        }
    }, [
        account,
        address,
        interfaceId
    ]);
}


/***/ }),

/***/ 86971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ApproveStateType),
/* harmony export */   "S": () => (/* binding */ useERC20TokenApproveCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56898);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24402);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85380);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58435);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51362);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56475);
/* harmony import */ var _useERC20TokenAllowance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43332);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21738);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(91840);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4285);












const MaxUint256 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').toFixed();
var ApproveStateType;
(function(ApproveStateType1) {
    ApproveStateType1[ApproveStateType1["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType1[ApproveStateType1["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType1[ApproveStateType1["UPDATING"] = 2] = "UPDATING";
    ApproveStateType1[ApproveStateType1["PENDING"] = 3] = "PENDING";
    ApproveStateType1[ApproveStateType1["APPROVED"] = 4] = "APPROVED";
    ApproveStateType1[ApproveStateType1["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {
}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .m)();
    const nonce = (0,_useNonce__WEBPACK_IMPORTED_MODULE_4__/* .useNonce */ .X)();
    const gasPrice = (0,_useGasPrice__WEBPACK_IMPORTED_MODULE_6__/* .useGasPrice */ .F)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    const [transactionState, setTransactionState] = (0,_useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .useTransactionState */ .p)();
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_8__/* .useERC20TokenBalance */ .y)(address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = (0,_useERC20TokenAllowance__WEBPACK_IMPORTED_MODULE_7__/* .useERC20TokenAllowance */ .n)(address, spender);
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        if (transactionState.type === _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING) return ApproveStateType.PENDING;
        return (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isLessThan */ .FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        transactionState.type, 
    ]);
    const approveCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (useExact = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            setTransactionState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
            });
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            setTransactionState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Failed to approve token.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const promiEvent = erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config);
            const revalidate = (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            promiEvent.on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.RECEIPT */ .iE.RECEIPT, (receipt)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n.CONFIRMED,
                    no: 0,
                    receipt
                });
                revalidate();
            }).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.CONFIRMATION */ .iE.CONFIRMATION, (no, receipt)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n.CONFIRMED,
                    no,
                    receipt
                });
                revalidate();
                resolve();
            }).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                revalidate();
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        amount,
        balance,
        spender,
        loadingAllowance,
        loadingBalance,
        erc20Contract,
        approveStateType, 
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
        setTransactionState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
        });
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        transactionState,
        approveCallback,
        resetCallback, 
    ];
}


/***/ }),

/***/ 21738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17952);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60657);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69509);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1200);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64316);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51362);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85380);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34324);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97891);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js





/**
 * Fetch token balance from chain
 * @param token
 */ function useERC20TokenBalance(address) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const blockNumber = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__/* .useBlockNumber */ .O)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_1__/* .useERC20TokenContract */ .x)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account
        });
    }, [
        account,
        blockNumber,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 38586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useERC20TokenDetailed),
/* harmony export */   "b": () => (/* binding */ useFungibleTokensDetailed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17952);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64316);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24402);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34324);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85380);
/* harmony import */ var _contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37566);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4285);








function useERC20TokenDetailed(address, token) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const erc20TokenContract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    const erc20TokenBytes32Contract = (0,_contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20TokenBytes32Contract */ .Q)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(async ()=>{
        if (!address) return;
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_1__.EthereumAddress.isValid(address)) return;
        return getERC20TokenDetailed(address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token);
    }, [
        chainId,
        token,
        erc20TokenContract,
        erc20TokenBytes32Contract,
        address
    ]);
}
function useFungibleTokensDetailed(listOfToken, _chainId) {
    const currentChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = _chainId ? _chainId : currentChainId;
    const listOfAddress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>listOfToken.map((t)=>t.address
        )
    , [
        JSON.stringify(listOfToken)
    ]);
    const erc20TokenContracts = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContracts */ .S)(listOfAddress, true);
    const erc20TokenBytes32Contracts = (0,_contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20TokenBytes32Contracts */ .E)(listOfAddress, true);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(async ()=>Promise.all(listOfToken.map(async (token, i)=>{
            if (token.type === _types__WEBPACK_IMPORTED_MODULE_2__/* .EthereumTokenType.Native */ .Dr.Native) return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createNativeToken */ .$c)(chainId);
            const erc20TokenContract = erc20TokenContracts[i];
            const erc20TokenBytes32Contract = erc20TokenBytes32Contracts[i];
            return getERC20TokenDetailed(token.address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token);
        }))
    , [
        chainId,
        JSON.stringify(listOfToken),
        JSON.stringify(erc20TokenContracts),
        JSON.stringify(erc20TokenBytes32Contracts), 
    ]);
}
const lazyBlank = Promise.resolve('');
const lazyZero = Promise.resolve('0');
async function getERC20TokenDetailed(address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const results = await Promise.allSettled([
        (ref1 = (ref = token === null || token === void 0 ? void 0 : token.name) !== null && ref !== void 0 ? ref : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.name().call()) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (token === null || token === void 0 ? void 0 : token.name) ? lazyBlank : (ref2 = erc20TokenBytes32Contract === null || erc20TokenBytes32Contract === void 0 ? void 0 : erc20TokenBytes32Contract.methods.name().call()) !== null && ref2 !== void 0 ? ref2 : lazyBlank,
        (ref4 = (ref3 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref3 !== void 0 ? ref3 : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.symbol().call()) !== null && ref4 !== void 0 ? ref4 : lazyBlank,
        (token === null || token === void 0 ? void 0 : token.symbol) ? lazyBlank : (ref5 = erc20TokenBytes32Contract === null || erc20TokenBytes32Contract === void 0 ? void 0 : erc20TokenBytes32Contract.methods.symbol().call()) !== null && ref5 !== void 0 ? ref5 : lazyBlank,
        (ref7 = (ref6 = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref6 !== void 0 ? ref6 : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.decimals().call()) !== null && ref7 !== void 0 ? ref7 : lazyZero, 
    ]);
    const [name, nameBytes32, symbol, symbolBytes32, decimals] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC20Token */ .wY)(chainId, address, typeof decimals === 'string' ? Number.parseInt(decimals, 10) : decimals, (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseStringOrBytes32 */ .UZ)(name, nameBytes32, 'Unknown Token'), (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseStringOrBytes32 */ .UZ)(symbol, symbolBytes32, 'Unknown'));
}


/***/ }),

/***/ 33395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useERC20TokenDetailedFromTokenLists)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43402);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14967);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88088);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77239);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34324);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24492);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js





function useERC20TokenDetailedFromTokenLists(address) {
    const { ERC20_TOKEN_LISTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .useEthereumConstants */ .HV)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { fetchERC20TokensFromTokenLists  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    const { value: allTokens = [] , loading: loadingAllTokens  } = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>!ERC20_TOKEN_LISTS || ERC20_TOKEN_LISTS.length === 0 ? [] : fetchERC20TokensFromTokenLists(ERC20_TOKEN_LISTS, chainId)
    , [
        chainId,
        ERC20_TOKEN_LISTS === null || ERC20_TOKEN_LISTS === void 0 ? void 0 : ERC20_TOKEN_LISTS.sort().join()
    ]);
    return {
        loading: loadingAllTokens,
        tokensDetailed: allTokens.find((token)=>(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)(address, token.address)
        )
    };
}


/***/ }),

/***/ 57283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useERC20TokensPaged)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5143);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35324);
=======
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69895);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77239);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js



function useERC20TokensPaged(index, count) {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const { getERC20TokensPaged  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const { erc20TokensCount  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .dM)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!wallet) return {
            tokens: [],
            count: 0
        };
        const erc20Tokens = await getERC20TokensPaged(index, count);
        return {
            tokens: erc20Tokens.filter((x)=>wallet.erc20_token_whitelist.has(x.address) && !wallet.erc20_token_blacklist.has(x.address)
            ),
            count: erc20TokensCount
        };
    }, [
        index,
        count
    ]);
}


/***/ }),

/***/ 68023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64316);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34324);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58000);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24492);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_4__/* .useOpenseaAPIConstants */ .$Y)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(async ()=>{
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        if (!GET_CONTRACT_URL) return getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
        const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
        return contractDetailedFromOpensea !== null && contractDetailedFromOpensea !== void 0 ? contractDetailedFromOpensea : getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
    }, [
        chainId,
        erc721TokenContract,
        address
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    var ref, ref1, ref2;
    const results = await Promise.allSettled([
        (ref = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.name())) !== null && ref !== void 0 ? ref : lazyBlank,
        (ref1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.symbol())) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.baseURI())) !== null && ref2 !== void 0 ? ref2 : lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}


/***/ }),

/***/ 72540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useERC721TokenDetailedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47280);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24492);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58000);




function useERC721TokenDetailedCallback(contractDetailed) {
    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { GET_SINGLE_ASSET_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .useOpenseaAPIConstants */ .$Y)();
    var ref;
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenContract */ .n)((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    const erc721TokenDetailedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) return (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
        const tokenDetailedFromOpensea = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromOpensea */ .L0)(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
        return tokenDetailedFromOpensea !== null && tokenDetailedFromOpensea !== void 0 ? tokenDetailedFromOpensea : (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
    }, [
        _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromOpensea */ .L0,
        _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY,
        tokenId,
        contractDetailed,
        erc721TokenContract,
        GET_SINGLE_ASSET_URL, 
    ]);
    return [
        tokenId,
        setTokenId,
        erc721TokenDetailedCallback
    ];
}


/***/ }),

/***/ 2097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38586);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30311);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 78522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFungibleTokenWatched)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _useTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57164);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2097);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30311);





function useFungibleTokenWatched(initialToken) {
    const nativeToken = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTokenDetailed */ .J)();
    const [token = nativeToken.value, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialToken);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    var ref, ref1;
    const balance = (0,_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useTokenBalance */ .m)((ref = token === null || token === void 0 ? void 0 : token.type) !== null && ref !== void 0 ? ref : _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native, (ref1 = token === null || token === void 0 ? void 0 : token.address) !== null && ref1 !== void 0 ? ref1 : '');
    var ref2, ref3;
    const detailed = (0,_useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .useFungibleTokenDetailed */ .j)((ref2 = token === null || token === void 0 ? void 0 : token.type) !== null && ref2 !== void 0 ? ref2 : _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native, (ref3 = token === null || token === void 0 ? void 0 : token.address) !== null && ref3 !== void 0 ? ref3 : '');
    return {
        amount,
        token: detailed,
        balance,
        setAmount,
        setToken
    };
}


/***/ }),

/***/ 85063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33217);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35324);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77239);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js




// How many fields should be filled by the user?
const PUZZLE_SIZE = 5;
// The total count of mnemonic words.
const TOTAL_SIZE = 12;
function useMnemonicWordsPuzzle() {
    const [answerWords, setAnswerWords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { createMnemonicWords  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const { value: words = [] , loading: wordsLoading , retry: wordsRetry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(()=>createMnemonicWords()
    , []);
    //#region generate some mask indexes randomly which should be filled by the user
    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const indexes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Array.from({
            length: TOTAL_SIZE
        }).fill(seed).map((_, i)=>i
        )).slice(0, PUZZLE_SIZE)
    , [
        seed,
        words
    ]);
    //#endregion
    //#region a serial of words and the user gonna complete those empty ones
    const puzzleWords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const words_ = words.slice(0);
        var _i;
        for(let i = 0; i < indexes.length; i += 1)words_[indexes[i]] = (_i = answerWords[i]) !== null && _i !== void 0 ? _i : '';
        return words_;
    }, [
        answerWords,
        indexes,
        words
    ]);
    //#endregion
    const answerCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((word, index)=>{
        setAnswerWords((x)=>{
            const words_ = x.slice(0);
            words_[index] = word;
            return words_;
        });
    }, [
        answerWords
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setAnswerWords([]);
        setSeed((x)=>(x + 1) % 3
        );
    }, []);
    const refreshCallback = wordsRetry;
    return [
        words,
        puzzleWords,
        indexes,
        answerCallback,
        resetCallback,
        refreshCallback
    ];
}


/***/ }),

/***/ 22883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uC": () => (/* binding */ MulticalStateType),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData),
/* harmony export */   "w0": () => (/* binding */ useMutlipleContractSingleData)
/* harmony export */ });
/* unused harmony exports useMulticallCallback, useMutlicallStateDecoded, useMultipleContractMultipleData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13229);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1366);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97891);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34324);






// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200000;
const DEFAULT_GAS_LIMIT = 1000000;
//#endregion
//#region cached results
const cachedResults = {
};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    var ref;
    const blockNumber_ = (ref = cache === null || cache === void 0 ? void 0 : cache.blockNumber) !== null && ref !== void 0 ? ref : 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    var _chainId;
    const cache = (_chainId = cachedResults[chainId]) !== null && _chainId !== void 0 ? _chainId : {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        var ref;
        // calculate the gas required by the current item
        const gasRequired = (ref = item[1]) !== null && ref !== void 0 ? ref : DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticalStateType;
(function(MulticalStateType1) {
    MulticalStateType1[MulticalStateType1["UNKNOWN"] = 0] = "UNKNOWN";
    MulticalStateType1[MulticalStateType1[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticalStateType1[MulticalStateType1[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticalStateType1[MulticalStateType1[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticalStateType || (MulticalStateType = {
}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const blockNumber = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_4__/* .useBlockNumber */ .O)();
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_1__/* .useMulticallContract */ .g)();
    const [multicallState, setMulticallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        type: MulticalStateType.UNKNOWN
    });
    const multicallCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticalStateType.UNKNOWN
            });
            return;
        }
        try {
            setMulticallState({
                type: MulticalStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            var ref;
            setMulticallState({
                type: MulticalStateType.SUCCEED,
                results: calls.map((call)=>(ref = getCallResult(call, chainId, blockNumber)) !== null && ref !== void 0 ? ref : [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticalStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        blockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
//#endregion
//#region useMutlicallStateDecoded
function useMutlicallStateDecoded(contracts, names, state) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3 */ .$)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (state.type !== MulticalStateType.SUCCEED) return [];
        if (contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            var ref;
            var ref1;
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = (ref1 = (ref = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )) === null || ref === void 0 ? void 0 : ref.outputs) !== null && ref1 !== void 0 ? ref1 : [];
            try {
                const value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .decodeOutputString */ .mO)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
//#endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract === null || contract === void 0 ? void 0 : contract.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMutlipleContractSingleData(contracts, names, callData, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(contracts, names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(contracts, names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}


/***/ }),

/***/ 57660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97673);
=======
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51362);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52808);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js



/**
 * Fetch native token balance from chain
 * @param address
 */ function useNativeTokenBalance() {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const balance = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!account) return undefined;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 30311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useNativeTokenDetailed)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98564);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);
=======
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64316);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4285);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34324);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js



function useNativeTokenDetailed() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .createNativeToken */ .$c)(chainId)
    , [
        chainId
    ]);
}


/***/ }),

/***/ 10444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ useNativeTokenWrapperCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../web3-contracts/abis/WETH.json
const WETH_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
// EXTERNAL MODULE: ../web3-shared/src/constants/index.ts + 15 modules
var constants = __webpack_require__(24492);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(16055);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useWrappedEtherContract.ts



function useNativeTokenWrapperContract() {
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useContract/* useContract */.cq)(WNATIVE_ADDRESS, WETH_namespaceObject);
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useAccount.ts
var useAccount = __webpack_require__(51362);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(91840);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNonce.ts
var useNonce = __webpack_require__(58435);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(56475);
// EXTERNAL MODULE: ../web3-shared/src/types/index.ts
var types = __webpack_require__(24402);
// EXTERNAL MODULE: ../web3-shared/src/utils/index.ts
var utils = __webpack_require__(4285);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useNativeTokenWrapperCallback.ts








function useNativeTokenWrapperCallback() {
    const nonce = (0,useNonce/* useNonce */.X)();
    const gasPrice = (0,useGasPrice/* useGasPrice */.F)();
    const account = (0,useAccount/* useAccount */.m)();
    const wrapperContract = useNativeTokenWrapperContract();
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    const wrapCallback = (0,react.useCallback)(async (amount)=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
            });
            return;
        }
        // error: invalid deposit amount
        if ((0,utils/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Invalid deposit amount')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: useTransactionState/* TransactionStateType.WAIT_FOR_CONFIRMING */.n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: amount,
            gas: await wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: amount
            }).catch((error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.deposit().send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.HASH */.n.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        wrapperContract
    ]);
    const unwrapCallback = (0,react.useCallback)(async (all = true, amount = '0')=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
            });
            return;
        }
        // read balance
        const wethBalance = await wrapperContract.methods.balanceOf(account).call();
        // error: invalid withdraw amount
        if (all === false && (0,utils/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Invalid withdraw amount')
            });
            return;
        }
        // error: insufficent weth balance
        if (all === false && (0,utils/* isLessThan */.FI)(wethBalance, amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Insufficent WETH balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: useTransactionState/* TransactionStateType.WAIT_FOR_CONFIRMING */.n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const withdrawAmount = all ? wethBalance : amount;
        const config = {
            from: account,
            gas: await wrapperContract.methods.withdraw(withdrawAmount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.withdraw(withdrawAmount).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.HASH */.n.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        wrapperContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransactionState({
            type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
        });
    }, []);
    return [
        transactionState,
        wrapCallback,
        unwrapCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 57164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21738);
/* harmony import */ var _useERC721TokenBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98817);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57660);





function useTokenBalance(type, address) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTokenBalance */ .h)();
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined);
    const r3 = (0,_useERC721TokenBalance__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenBalance */ .l)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721 ? address : undefined);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return r3;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            throw new Error('To be implemented');
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 46817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/7988.js
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17952);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98564);
=======
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77239);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64316);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11494);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/6607.js





function useTransactions(address, page, size) {
    const { getTransactionList  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    const { portfolioProvider , chainId  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .dM)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
        const network = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNetworkTypeFromChainId */ ._T)(chainId);
        if (!address || !network) {
            return {
                transactions: [],
                hasNextPage: false
            };
        }
        switch(portfolioProvider){
            case _types__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.DEBANK */ .g3.DEBANK:
            case _types__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.ZERION */ .g3.ZERION:
                return getTransactionList(address.toLowerCase(), network, portfolioProvider, page, size);
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(portfolioProvider);
        }
    }, [
        address,
        chainId,
        portfolioProvider,
        page,
        size
    ]);
}


/***/ }),

/***/ 71715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useTrustedERC20Tokens)
/* harmony export */ });
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69895);
/* harmony import */ var _useERC20Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54183);


function useTrustedERC20Tokens() {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const tokens = (0,_useERC20Tokens__WEBPACK_IMPORTED_MODULE_1__/* .useERC20Tokens */ .m)();
    if (!wallet) return [];
    return tokens.filter((x)=>wallet.erc20_token_whitelist.has(x.address) && !wallet.erc20_token_blacklist.has(x.address)
    );
}


/***/ }),

/***/ 85418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77239);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4285);



function useWallets(type) {
    const { providerType , wallets  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)();
    if (type === _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Maskbook */ .lP.Maskbook) return wallets.filter((x)=>x.hasPrivateKey
    );
    if (type === providerType) return wallets.filter((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .currySameAddress */ .DC)(providerType));
    if (type) return [];
    return wallets;
}


/***/ }),

/***/ 21440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ isChainIdValid),
/* harmony export */   "yX": () => (/* binding */ isChainIdMainnet),
/* harmony export */   "lQ": () => (/* binding */ isEIP1159Supported),
/* harmony export */   "$G": () => (/* binding */ getChainDetailed),
/* harmony export */   "EX": () => (/* binding */ getChainDetailedCAIP),
/* harmony export */   "NX": () => (/* binding */ getChainRPC),
/* harmony export */   "qz": () => (/* binding */ getChainName),
/* harmony export */   "F3": () => (/* binding */ getChainShortName),
/* harmony export */   "np": () => (/* binding */ getChainIdFromName),
/* harmony export */   "EP": () => (/* binding */ getChainIdFromNetworkType),
/* harmony export */   "_T": () => (/* binding */ getNetworkTypeFromChainId)
/* harmony export */ });
/* unused harmony export getChainFullName */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13790);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24492);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24402);




function isChainIdValid(chainId, allowTestnet = false) {
    const chainDetailed = getChainDetailed(chainId);
    return !!getNetworkTypeFromChainId(chainId) && ((chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet' || allowTestnet);
}
function isChainIdMainnet(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet';
}
function isEIP1159Supported(chainId) {
    var ref;
    var ref1;
    const features = (ref1 = (ref = getChainDetailed(chainId)) === null || ref === void 0 ? void 0 : ref.features) !== null && ref1 !== void 0 ? ref1 : [];
    return features.includes('EIP1159');
}
function getChainDetailed(chainId = _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet) {
    return _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__.find((x)=>x.chainId === chainId
    );
}
// Learn more: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
function getChainDetailedCAIP(chainId = _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const chainDetailed = getChainDetailed(chainId);
    const { RPC =[]  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .getRPCConstants */ .t0)(chainId);
    if (!chainDetailed) return;
    return {
        chainId: `0x${chainDetailed.chainId.toString(16)}`,
        chainName: chainDetailed.name,
        nativeCurrency: chainDetailed.nativeCurrency,
        rpcUrls: RPC,
        blockExplorerUrls: [
            chainDetailed.explorers && chainDetailed.explorers.length > 0 && chainDetailed.explorers[0].url ? chainDetailed.explorers[0].url : chainDetailed.infoURL, 
        ]
    };
}
function getChainRPC(chainId, seed) {
    const { RPC , RPC_WEIGHTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .getRPCConstants */ .t0)(chainId);
    if (!RPC || !RPC_WEIGHTS) throw new Error(`Unknown chain id: ${chainId}.`);
    return RPC[RPC_WEIGHTS[seed]];
}
function getChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainShortName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.shortName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainIdFromName(name) {
    if (!name) return;
    var _fullName;
    const chainDetailed = _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__.find((x)=>[
            x.chain,
            x.network,
            x.name,
            x.shortName,
            (_fullName = x.fullName) !== null && _fullName !== void 0 ? _fullName : ''
        ].filter(Boolean).map((y)=>y.toLowerCase()
        ).includes(name.toLowerCase())
    );
    return chainDetailed && getNetworkTypeFromChainId(chainDetailed.chainId) ? chainDetailed.chainId : undefined;
}
function getChainIdFromNetworkType(networkType) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum */ .a_.Arbitrum;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.xDai */ .a_.xDai;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet;
    }
}
function getNetworkTypeFromChainId(chainId) {
    const map = {
        [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ETH',
        [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'BSC',
        [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'Matic',
        [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
        [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xDai'
    };
    const chainDetailed = getChainDetailed(chainId);
    const entry = Object.entries(map).find(([key, value])=>{
        if (value === (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain)) return true;
        return false;
    });
    return entry === null || entry === void 0 ? void 0 : entry[0];
}


/***/ }),

/***/ 75862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xE": () => (/* binding */ ZERO),
/* harmony export */   "ry": () => (/* binding */ ONE),
/* harmony export */   "Fr": () => (/* binding */ isZero),
/* harmony export */   "T1": () => (/* binding */ isGreaterThan),
/* harmony export */   "FI": () => (/* binding */ isLessThan),
/* harmony export */   "wA": () => (/* binding */ pow10)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

const ZERO = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber('0');
const ONE = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber('1');
/** value == 0 */ function isZero(value) {
    return value === 0 || value === '0' || new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(value).isZero();
}
/** a > b */ function isGreaterThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(a).isGreaterThan(b);
}
/** a < b */ function isLessThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(a).isLessThan(b);
}
/** 10 ** n */ function pow10(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(10).pow(n, m);
}


/***/ }),

/***/ 78322:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);