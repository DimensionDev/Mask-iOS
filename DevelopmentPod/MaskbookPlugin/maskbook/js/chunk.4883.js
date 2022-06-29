"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4883],{

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

/***/ 47061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PluginWalletConnectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PluginWalletConnectIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PluginWalletConnectIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.15015 7.36221C4.15015 7.03084 4.41878 6.76221 4.75015 6.76221H9.25015C9.58152 6.76221 9.85015 7.03084 9.85015 7.36221C9.85015 7.69358 9.58152 7.96221 9.25015 7.96221H4.75015C4.41878 7.96221 4.15015 7.69358 4.15015 7.36221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.76765 1.7293C2.56902 1.7293 1.60015 2.69817 1.60015 3.8968V7.36179C1.60015 7.69317 1.33152 7.96179 1.00015 7.96179C0.668776 7.96179 0.400146 7.69317 0.400146 7.36179V3.8968C0.400146 2.03543 1.90628 0.529297 3.76765 0.529297H7.98264C8.86881 0.529297 9.70567 0.805241 10.3308 1.34136C10.9644 1.8848 11.3501 2.67182 11.3501 3.61179C11.3501 3.94317 11.0815 4.2118 10.7501 4.2118C10.4188 4.2118 10.1501 3.94317 10.1501 3.61179C10.1501 3.02177 9.91716 2.56754 9.54953 2.25223C9.17337 1.9296 8.62648 1.7293 7.98264 1.7293H3.76765Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.00015 4.21221C2.67402 4.21221 1.60015 5.28608 1.60015 6.61221V11.8622C1.60015 13.1883 2.67402 14.2622 4.00015 14.2622H11.5001C12.8263 14.2622 13.9001 13.1883 13.9001 11.8622V11.3747H13.8027C12.8621 11.3747 11.896 10.7961 11.6257 9.79044L11.6249 9.78738L11.6249 9.78738C11.4193 9.00591 11.6636 8.23162 12.1873 7.72391C12.5779 7.32659 13.1128 7.09967 13.6901 7.09967H13.9001V6.61221C13.9001 5.29358 12.8188 4.21221 11.5001 4.21221H4.00015ZM0.400146 6.61221C0.400146 4.62334 2.01128 3.01221 4.00015 3.01221H11.5001C13.4815 3.01221 15.1001 4.63084 15.1001 6.61221V7.69967C15.1001 8.03104 14.8315 8.29967 14.5001 8.29967H13.6901C13.4309 8.29967 13.2038 8.40006 13.04 8.56827C13.0353 8.5731 13.0305 8.57786 13.0257 8.58253C12.8047 8.79464 12.6923 9.12611 12.785 9.48043C12.8903 9.86908 13.3039 10.1747 13.8027 10.1747H14.5001C14.8315 10.1747 15.1001 10.4433 15.1001 10.7747V11.8622C15.1001 13.8511 13.489 15.4622 11.5001 15.4622H4.00015C2.01128 15.4622 0.400146 13.8511 0.400146 11.8622V6.61221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6903 8.29912C13.4311 8.29912 13.204 8.39951 13.0402 8.56772L13.0294 8.57849C12.8376 8.76576 12.7307 9.03208 12.7576 9.31477L12.7583 9.32182L12.7583 9.32183C12.7961 9.77582 13.235 10.1741 13.7803 10.1741H15.2278C15.3278 10.1741 15.4003 10.094 15.4003 10.0091V8.46414C15.4003 8.37932 15.3278 8.29912 15.2278 8.29912H13.6903ZM12.1858 7.72513C12.5765 7.32671 13.1122 7.09912 13.6903 7.09912H15.2278C15.9829 7.09912 16.6003 7.70895 16.6003 8.46414V10.0091C16.6003 10.7643 15.9829 11.3741 15.2278 11.3741H13.7803C12.7067 11.3741 11.6617 10.5891 11.5627 9.42502C11.5011 8.76677 11.7517 8.1519 12.1858 7.72513Z",
            fill: "white"
        })
    ]
}), '0 0 17 16');


/***/ }),

/***/ 30318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7666);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80231);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96436);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state ?? [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>setValue?.(newValue)
                    ,
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${tab.id?.toLowerCase()}_tab`
                        }, i)
                    )
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 17315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(74119);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/FindTruman.tsx


const FindTrumanIcon = (0,utils/* createIcon */.I)('FindTruman', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "2",
            y: "1.5",
            width: "33",
            height: "33",
            fill: "url(#pattern1120)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                    id: "pattern1120",
                    patternContentUnits: "objectBoundingBox",
                    width: "1",
                    height: "1",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("use", {
                        xlinkHref: "#image0_898_2510",
                        transform: "scale(0.00189753)"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("image", {
                    id: "image0_898_2510",
                    width: "527",
                    height: "527",
                    xlinkHref: "data:image/png;base64,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EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAoIAE/j/FR70MUHgUxwAAAABJRU5ErkJggg=="
                })
            ]
        })
    ]
}), '0 0 37 36');

;// CONCATENATED MODULE: ./src/plugins/FindTruman/context.ts

const FindTrumanContext = (0,react.createContext)(null);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(70186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(60647);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanCard.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            minHeight: 120,
            padding: 0,
            border: `solid 1px ${theme.palette.divider}`,
            margin: `${theme.spacing(2)} auto`,
            marginBottom: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            },
            '&:last-child': {
                marginBottom: 0
            }
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        },
        title: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function FindTrumanCard(props) {
    const { title , children  } = props;
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        variant: "outlined",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                className: classes.content,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/LoadingFailCard.tsx




class LoadingFailCard extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return this.props.isFullPluginDown ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(FindTrumanCard, {
                title: this.props.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textPrimary",
                        children: "Loading fails due to FindTruman API service breakdown."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        style: {
                            width: 100,
                            marginTop: 16
                        },
                        variant: "outlined",
                        onClick: ()=>{
                            this.setState({
                                error: null
                            });
                            this.props.retry();
                        },
                        children: "Retry"
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(86361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(13231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ./src/plugins/FindTruman/types.ts
var types = __webpack_require__(59657);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/LinearProgress.js
var LinearProgress = __webpack_require__(37194);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/LinearProgress/linearProgressClasses.js
var linearProgressClasses = __webpack_require__(23918);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(60904);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Adjust.js
var Adjust = __webpack_require__(42215);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/CheckCircle.js
var CheckCircle = __webpack_require__(10021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sumBy.js
var sumBy = __webpack_require__(2109);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx








const BorderLinearProgress = (0,styled/* default */.ZP)(LinearProgress/* default */.Z)(({ theme  })=>({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses/* default.colorPrimary */.Z.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${linearProgressClasses/* default.bar */.Z.bar}`]: {
            borderRadius: 5
        }
    })
);
const useResultStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        answerChip: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : '#EFF3F4'
        }
    };
});
function ResultCard(props) {
    const { type , userStatus , result  } = props;
    const { classes  } = useResultStyles();
    const [choice] = (0,react.useState)(userStatus ? userStatus.choice : -1);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const total = result?.count ? (0,sumBy/* default */.Z)(result.count, (status)=>status.value
    ) : 1;
    const answer = result ? type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? result.correct : result.result : -1;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            answer === -1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t(type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? 'plugin_find_truman_puzzle_underway' : 'plugin_find_truman_voting_underway')
            }),
            answer !== -1 && result && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: result.question
                    }),
                    result.options.map((option, index)=>{
                        const value = result.count.find((e)=>e.choice === index
                        )?.value || 0;
                        const percent = (total > 0 ? value * 100 / total : 0).toFixed(2);
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                            variant: "outlined",
                            sx: {
                                padding: '12px 18px',
                                borderRadius: '16px',
                                marginBottom: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: 'flex',
                                        rowGap: '8px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        marginBottom: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'top'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    sx: {
                                                        marginRight: '8px'
                                                    },
                                                    size: "small",
                                                    label: `${value} ${t(value > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        fontSize: '13px',
                                                        lineHeight: '24px'
                                                    },
                                                    children: option
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                choice === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Adjust/* default */.Z, {}),
                                                    size: "small",
                                                    color: "primary",
                                                    label: t('plugin_find_truman_selected')
                                                }),
                                                answer === index && /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircle/* default */.Z, {}),
                                                    className: classes.answerChip,
                                                    color: "success",
                                                    size: "small",
                                                    label: t(type === types/* PostType.PuzzleResult */.hQ.PuzzleResult ? 'plugin_find_truman_answer' : 'plugin_find_truman_result')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                                                value: Number(percent),
                                                variant: "determinate"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                            sx: {
                                                width: 54
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: [
                                                    percent,
                                                    "%"
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, option);
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Snackbar/Snackbar.js + 1 modules
var Snackbar = __webpack_require__(42996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/RadioButtonChecked.js
var RadioButtonChecked = __webpack_require__(80197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(84514);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/DoneOutlined.js
var DoneOutlined = __webpack_require__(79552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(43673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(52353);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(49596);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/NoNftCard.tsx





const NoNftCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        },
        content: {
            flex: 1
        },
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#fff',
            textTransform: 'uppercase'
        }
    };
});
function NoNftCard(props) {
    const { conditions , sx  } = props;
    const { classes  } = NoNftCard_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const renderNftCard = (title, img, url, count, address)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            item: true,
            xs: 6,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.card,
                variant: "outlined",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        component: "img",
                        image: img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        className: classes.content,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                gutterBottom: true,
                                variant: "h5",
                                component: "div",
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                color: "textSecondary",
                                children: t('plugin_find_truman_buy_nft_tip', {
                                    count,
                                    name: title
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        sx: {
                            justifyContent: 'flex-end'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: (e)=>{
                                e.stopPropagation();
                            },
                            component: "a",
                            href: url,
                            variant: "contained",
                            target: "_blank",
                            size: "small",
                            children: t('plugin_find_truman_buy')
                        })
                    })
                ]
            }, address)
        }, title);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        justifyContent: "space-around",
        sx: {
            ...sx || {}
        },
        children: conditions.map((condition)=>renderNftCard(condition.name, condition.img, condition.url, condition.minAmount, condition.address)
        )
    });
};

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx










const useOptionsStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        progressOption: {
            transition: 'all .5s',
            padding: '12px 18px',
            borderRadius: '16px',
            '&:hover': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.75' : '.05'})`
            },
            '&:active': {
                background: `rgba(28, 23, 26, ${theme.palette.mode === 'dark' ? '.15' : '.15'})`
            },
            ':not(:last-child)': {
                marginBottom: '8px'
            }
        },
        blockChip: {
            width: '100%',
            marginBottom: 8,
            justifyContent: 'space-between',
            minHeight: '39px',
            height: 'fit-content',
            fontSize: '13px',
            padding: '8px',
            transition: 'all .3s'
        },
        blockChipSelected: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
        checkIcon: {},
        horizontalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                height: '8px'
            },
            '::-webkit-scrollbar-thumb:horizontal': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        },
        verticalScrollBar: {
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: '6px'
            },
            '::-webkit-scrollbar-thumb:vertical': {
                backgroundColor: theme.palette.divider,
                borderRadius: '16px',
                border: `6px solid ${theme.palette.divider}`
            }
        }
    };
});
function OptionsCard(props) {
    const { userStatus: userStatus1 , onSubmit  } = props;
    const [selected, setSelected] = (0,react.useState)(true);
    const [choice, setChoice] = (0,react.useState)(userStatus1 ? userStatus1.choice : -1);
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)('');
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { classes , cx  } = useOptionsStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const parentRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        setError('');
        userStatus1 && userStatus1.notMeetConditions.length > 0 && setError('insufficient-nft');
    }, [
        userStatus1
    ]);
    (0,react.useEffect)(()=>{
        setChoice(userStatus1 ? userStatus1.choice : -1);
        setSelected(userStatus1 ? userStatus1.choice !== -1 : true);
    }, [
        userStatus1
    ]);
    const renderOptions = (userStatus)=>{
        const showCount = !!userStatus.count;
        const total = (0,sumBy/* default */.Z)(userStatus.count ?? [], (status)=>status.value
        );
        return userStatus.options.map((option, index)=>{
            const count = userStatus.count ? userStatus.count.find((e)=>e.choice === index
            )?.value || 0 : 0;
            const percent = (total > 0 ? count * 100 / total : 0).toFixed(2);
            const isSelected = choice === index;
            return userStatus.count ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                sx: choice !== index ? {
                    cursor: 'pointer'
                } : {},
                className: classes.progressOption,
                variant: "outlined",
                onClick: !submitting && !selected && !error && userStatus.status !== 0 ? ()=>{
                    setChoice(index);
                } : undefined,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            rowGap: '8px',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            marginBottom: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    alignItems: 'top'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                        sx: {
                                            marginRight: '8px'
                                        },
                                        size: "small",
                                        label: `${count} ${t(count > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        sx: {
                                            fontSize: '13px',
                                            lineHeight: '24px'
                                        },
                                        children: option
                                    })
                                ]
                            }),
                            isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonChecked/* default */.Z, {}),
                                size: "small",
                                color: "primary",
                                label: t('plugin_find_truman_selected')
                            }) : selected ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                sx: {
                                    cursor: 'pointer'
                                },
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {}),
                                size: "small",
                                color: "default",
                                label: t('plugin_find_truman_unselect')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    flex: 1
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                                    value: Number(percent),
                                    variant: "determinate"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    width: 54
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    children: [
                                        percent,
                                        "%"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }, option) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                    id: "submit",
                    className: cx(classes.blockChip, isSelected && classes.blockChipSelected),
                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all'
                        },
                        children: option
                    }),
                    onClick: !selected && !error && userStatus.status !== 0 ? ()=>{
                        setChoice(index);
                    } : undefined,
                    disabled: submitting,
                    deleteIcon: isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}) : undefined,
                    onDelete: isSelected ? ()=>{} : undefined,
                    color: showCount ? 'default' : isSelected ? 'primary' : 'default',
                    variant: showCount ? 'outlined' : isSelected ? 'filled' : 'outlined'
                })
            }, index);
        });
    };
    const handleSubmit = (0,react.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(choice);
        } finally{
            setSubmitting(false);
        }
    }, [
        choice
    ]);
    const renderSubmitButton = (userStatus)=>{
        const isClosed = userStatus.status === 0;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            style: {
                textAlign: 'right',
                marginTop: '8px',
                paddingBottom: '8px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                color: selected ? 'success' : 'primary',
                variant: "contained",
                disabled: selected || isClosed || choice === -1,
                init: t(selected ? 'plugin_find_truman_submitted' : isClosed ? 'plugin_find_truman_vote_finish' : 'plugin_find_truman_submit'),
                waiting: t('plugin_find_truman_submitting'),
                failed: t('plugin_find_truman_submit_failed'),
                complete: t('plugin_find_truman_submitted'),
                executor: handleSubmit,
                failedOnClick: "use executor",
                startIcon: isClosed || selected ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                completeIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}),
                failIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {})
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        ref: parentRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            userStatus1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: userStatus1.question
                    }),
                    renderOptions(userStatus1),
                    !error && renderSubmitButton(userStatus1),
                    userStatus1.notMeetConditions.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: userStatus1.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/Footer.tsx





const Footer_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            minHeight: '48px',
            flexWrap: 'wrap',
            rowGap: '8px'
        },
        chip: {
            ':not(:last-child)': {
                marginRight: '8px'
            }
        }
    };
});
function Footer() {
    const { const: consts  } = (0,react.useContext)(FindTrumanContext);
    const { classes  } = Footer_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.footer,
        children: [
            consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                rel: "noopener noreferrer",
                component: "a",
                target: "_blank",
                href: consts.faqUrl,
                variant: "body2",
                sx: {
                    fontWeight: 'bold',
                    fontSize: '12px'
                },
                children: consts.faqLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                flexWrap: "wrap",
                rowGap: 1,
                direction: "row",
                children: consts?.icons.map((e)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        className: classes.chip,
                        size: "small",
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            alt: "FindTruman",
                            src: e.icon
                        }),
                        label: e.label,
                        variant: "outlined",
                        clickable: true,
                        component: "a",
                        target: "_blank",
                        href: e.url
                    }, e.label)
                )
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx





function StageCard(props) {
    const { userStoryStatus  } = props;
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const renderProgress = (total, success, color)=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        width: '100%',
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BorderLinearProgress, {
                        color: color,
                        value: total > 0 ? success * 100 / total : 0,
                        variant: "determinate"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "text.secondary",
                        children: [
                            success,
                            "/",
                            total
                        ]
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
        children: userStoryStatus && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_critical')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_puzzle_rate'),
                                        userStoryStatus.critical.total > 0 ? (userStoryStatus.critical.correct * 100 / userStoryStatus.critical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.critical.total, userStoryStatus.critical.correct, 'success'),
                                userStoryStatus.critical.waiting === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_puzzle_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.critical.waiting > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_noncritical')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        t('plugin_find_truman_voting_rate'),
                                        userStoryStatus.nonCritical.total > 0 ? (userStoryStatus.nonCritical.correct * 100 / userStoryStatus.nonCritical.total).toFixed(2) : '0.00',
                                        "%"
                                    ]
                                }),
                                renderProgress(userStoryStatus.nonCritical.total, userStoryStatus.nonCritical.correct, 'secondary'),
                                userStoryStatus.nonCritical.waiting === 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_poll_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.nonCritical.waiting > 1 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_polls_to_be_revealed')
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(65129);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(31824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FlipCard.tsx


var FlipCardChildType;
(function(FlipCardChildType) {
    FlipCardChildType[FlipCardChildType["FRONT"] = 0] = "FRONT";
    FlipCardChildType[FlipCardChildType["BACK"] = 1] = "BACK";
})(FlipCardChildType || (FlipCardChildType = {}));
const FlipCardRotateDegree = {
    noFlipped: 0,
    frontRotate: 180,
    backRotate: -180
};
const FlipCard = (props)=>{
    const { cardStyles , cardZIndex , containerStyle , flipDirection , flipSpeedFrontToBack , flipSpeedBackToFront , infinite ,  } = props;
    const [isFlipped, setFlipped] = (0,react.useState)(props.isFlipped);
    const [rotation, setRotation] = (0,react.useState)(FlipCardRotateDegree.noFlipped);
    (0,react.useEffect)(()=>{
        if (props.isFlipped === isFlipped) return;
        setFlipped(props.isFlipped);
        setRotation((c)=>c + FlipCardRotateDegree.frontRotate
        );
    }, [
        props.isFlipped
    ]);
    const getComponent = (key)=>{
        return props.children[key];
    };
    const frontRotateY = `rotateY(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateY = `rotateY(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const frontRotateX = `rotateX(${infinite ? rotation : isFlipped ? FlipCardRotateDegree.frontRotate : FlipCardRotateDegree.noFlipped}deg)`;
    const backRotateX = `rotateX(${infinite ? rotation + FlipCardRotateDegree.frontRotate : isFlipped ? FlipCardRotateDegree.noFlipped : FlipCardRotateDegree.backRotate}deg)`;
    const styles = {
        back: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: 0,
            position: isFlipped ? 'relative' : 'absolute',
            top: 0,
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedFrontToBack}s`,
            width: '100%',
            ...cardStyles?.back
        },
        container: {
            perspective: '1000px',
            zIndex: cardZIndex
        },
        flipper: {
            height: '100%',
            position: 'relative',
            width: '100%'
        },
        front: {
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            height: '100%',
            left: 0,
            position: isFlipped ? 'absolute' : 'relative',
            top: 0,
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedBackToFront}s`,
            width: '100%',
            zIndex: '2',
            ...cardStyles?.front
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            ...styles.container,
            ...containerStyle
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            style: styles.flipper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.front,
                    children: getComponent(FlipCardChildType.FRONT)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    style: styles.back,
                    children: getComponent(FlipCardChildType.BACK)
                })
            ]
        })
    });
};
FlipCard.defaultProps = {
    cardStyles: {
        back: {},
        front: {}
    },
    cardZIndex: 'auto',
    containerStyle: {},
    flipDirection: 'horizontal',
    flipSpeedBackToFront: 0.6,
    flipSpeedFrontToBack: 0.6,
    infinite: false,
    isFlipped: false
};
/* harmony default export */ const SNSAdaptor_FlipCard = (FlipCard);

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/EncryptionCard.tsx









const EncryptionCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p': {
                margin: 0
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        },
        card: {
            borderRadius: '6px',
            ':not(:last-child)': {
                marginBottom: '8px'
            },
            display: 'flex',
            flexDirection: 'column'
        }
    };
});
function EncryptionCard(props) {
    const { clueId  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { address , t  } = (0,react.useContext)(FindTrumanContext);
    const [flipped, setFlipped] = (0,react.useState)(false);
    const [backImgHeight, setBackImgHeight] = (0,react.useState)(0);
    const { value: clue , error  } = (0,useAsync/* default */.Z)(async ()=>{
        return clueId ? (0,apis/* fetchClue */.aE)(clueId, address) : {
            decrypted: false,
            conditions: undefined,
            frontImg: '',
            backImg: ''
        };
    }, [
        clueId,
        address
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            clue && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "text.secondary",
                        children: t('plugin_find_truman_decrypted_by')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                        sx: {
                            margin: '8px 0'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                        sx: {
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            style: {
                                width: 250
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SNSAdaptor_FlipCard, {
                                isFlipped: flipped,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onLoad: ({ currentTarget  })=>{
                                            setBackImgHeight(currentTarget.parentElement?.offsetHeight || 0);
                                        },
                                        onClick: ({ currentTarget  })=>{
                                            setBackImgHeight(currentTarget.parentElement?.offsetHeight || 0);
                                            backImgHeight && setFlipped(true);
                                        },
                                        src: clue.backImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }),
                                    clue.decrypted ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        src: clue.frontImg,
                                        style: {
                                            width: '100%',
                                            objectFit: 'cover',
                                            cursor: 'pointer'
                                        }
                                    }) : clue.conditions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ClueConditionCard, {
                                        cardHeight: backImgHeight,
                                        onClick: ()=>setFlipped(false)
                                        ,
                                        conditions: clue.conditions
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                severity: "info",
                children: t('plugin_find_truman_decrypt_error_clue_id')
            })
        ]
    });
};
function ClueConditionCard(props) {
    const { cardHeight , onClick , conditions  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.card,
        variant: "outlined",
        onClick: onClick,
        sx: {
            height: cardHeight || 'auto',
            cursor: 'pointer'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    component: "div",
                    children: t('plugin_find_truman_decrypt_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                    sx: {
                        margin: '8px 0'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: conditions.conditions?.map((condition, index)=>{
                        switch(condition.type){
                            case types/* ClueConditionType.Erc721 */.Ym.Erc721:
                                return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        variant: "body1",
                                        fontWeight: "bold",
                                        color: "text.primary",
                                        gutterBottom: true,
                                        children: [
                                            index + 1,
                                            ". ",
                                            condition.minAmount,
                                            " ",
                                            condition.name
                                        ]
                                    })
                                }, index);
                            case types/* ClueConditionType.Or */.Ym.Or:
                                return condition.conditions && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "body1",
                                            fontWeight: "bold",
                                            color: "text.primary",
                                            children: [
                                                index + 1,
                                                ". ",
                                                t('plugin_find_truman_decrypt_tip_community')
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                                            children: condition.conditions.map((c, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                        variant: "body2",
                                                        color: "text.primary",
                                                        children: [
                                                            c.minAmount,
                                                            " ",
                                                            c.name
                                                        ]
                                                    }, c.name)
                                                }, c.name)
                                            )
                                        })
                                    ]
                                }, index);
                            default:
                                return null;
                        }
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/KeyRounded.js
var KeyRounded = __webpack_require__(50562);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/CheckRounded.js
var CheckRounded = __webpack_require__(61939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/ClearRounded.js
var ClearRounded = __webpack_require__(1681);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/CompletionCard.tsx








const CompletionCard_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        successButton: {
            backgroundColor: theme.palette.mode === 'light' ? '#2e7d32' : '#66bb6a',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(0, 0, 0, .87)',
            '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? '#1B5E20' : '#388E3C'
            }
        },
        errorButton: {},
        helperText: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(1)
        },
        helperTextIcon: {
            marginRight: '8px',
            fontSize: '20px'
        },
        helperTextContent: {
            fontSize: '14px'
        }
    })
);
function CompletionCard(props) {
    const { completionStatus , onSubmit  } = props;
    const [submitted, setSubmitted] = (0,react.useState)(completionStatus?.answered);
    const [questions, setQuestions] = (0,react.useState)(completionStatus?.questions ?? []);
    const [submitting, setSubmitting] = (0,react.useState)(false);
    const [error, setError] = (0,react.useState)('');
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { classes  } = CompletionCard_useStyles();
    (0,react.useEffect)(()=>{
        setError('');
        if (!completionStatus) return;
        setQuestions(completionStatus.questions);
        setSubmitted(completionStatus.answered);
        !!completionStatus.notMeetConditions.length && setError('insufficient-nft');
    }, [
        completionStatus
    ]);
    const handleSubmit = (0,react.useCallback)(async ()=>{
        setSubmitting(true);
        try {
            await onSubmit(completionStatus?.id ?? '', questions.map((e)=>({
                    id: e.id,
                    answer: e.answer || ''
                })
            ));
        } finally{
            setSubmitting(false);
        }
    }, [
        questions.map((e)=>e.answer
        ).join(',')
    ]);
    const enabled = (0,react.useMemo)(()=>{
        return completionStatus && !completionStatus.answersPublished && !submitting && completionStatus.notMeetConditions.length === 0;
    }, [
        completionStatus,
        submitting
    ]);
    const isClosed = (0,react.useMemo)(()=>!!completionStatus?.answersPublished
    , [
        completionStatus
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Snackbar/* default */.Z, {
                autoHideDuration: 2000,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'center'
                },
                open: snackVisible,
                onClose: ()=>setSnackVisible(false)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    onClose: ()=>setSnackVisible(false)
                    ,
                    variant: "filled",
                    severity: "error",
                    sx: {
                        width: '100%'
                    },
                    children: t('plugin_find_truman_submit_failed')
                })
            }),
            completionStatus && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: completionStatus.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        marginBottom: 2,
                        children: questions.map((question, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                marginBottom: 2,
                                children: completionStatus.answersPublished ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    focused: true,
                                    variant: "outlined",
                                    color: question.correct ? 'success' : 'error',
                                    error: !question.correct,
                                    value: question.answer ?? '',
                                    label: question.title,
                                    helperText: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.helperText,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(KeyRounded/* default */.Z, {
                                                className: classes.helperTextIcon
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: classes.helperTextContent,
                                                children: question.correctAnswer ?? ''
                                            })
                                        ]
                                    })
                                }) : completionStatus.answered ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    InputProps: {
                                        readOnly: true
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    label: question.title,
                                    value: question.answer ?? ''
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                    fullWidth: true,
                                    required: true,
                                    disabled: !enabled && !submitted,
                                    InputProps: {
                                        readOnly: submitted
                                    },
                                    size: "small",
                                    variant: "outlined",
                                    placeholder: t('plugin_find_truman_completion_placeholder'),
                                    label: question.title,
                                    value: questions[index].answer ?? '',
                                    onChange: ({ currentTarget  })=>{
                                        const ques = [
                                            ...questions
                                        ];
                                        ques[index].answer = currentTarget.value;
                                        setQuestions(ques);
                                    }
                                })
                            }, question.id)
                        )
                    }),
                    !error && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        textAlign: "right",
                        marginTop: 1,
                        paddingBottom: 1,
                        children: submitted ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: completionStatus.correct ? classes.successButton : classes.errorButton,
                            variant: "contained",
                            startIcon: completionStatus.correct ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckRounded/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ClearRounded/* default */.Z, {}),
                            color: completionStatus.correct ? 'success' : 'error',
                            children: completionStatus.correct ? t('plugin_find_truman_completion_correct') : t('plugin_find_truman_completion_wrong')
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                            color: "primary",
                            variant: "contained",
                            disabled: !enabled,
                            init: t(isClosed ? 'plugin_find_truman_completion_closed' : 'plugin_find_truman_completion_submit'),
                            waiting: t('plugin_find_truman_completion_submitting'),
                            failed: t('plugin_find_truman_submit_failed'),
                            complete: t('plugin_find_truman_completion_submitted'),
                            executor: handleSubmit,
                            failedOnClick: "use executor",
                            startIcon: isClosed ? undefined : /*#__PURE__*/ (0,jsx_runtime.jsx)(Send/* default */.Z, {}),
                            completeIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoneOutlined/* default */.Z, {}),
                            failIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshOutlined/* default */.Z, {})
                        })
                    }),
                    completionStatus.notMeetConditions.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: completionStatus.notMeetConditions
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ../icons/plugins/connect.tsx
var connect = __webpack_require__(47061);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTruman.tsx

















const FindTruman_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            padding: 0,
            position: 'relative'
        },
        content: {
            width: '100%',
            minHeight: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            maxHeight: 'calc(var(--contentHeight) - var(--tabHeight))',
            overflow: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            height: 'var(--tabHeight)',
            width: '100%',
            minHeight: 'unset',
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tab: {
            height: 'var(--tabHeight)',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5)
        },
        title: {
            fontSize: '1.25rem'
        },
        subheader: {
            fontSize: '0.875rem'
        },
        tip: {
            padding: theme.spacing(1),
            backgroundColor: '#fff'
        },
        tipArrow: {
            color: '#fff'
        },
        critical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundImage: 'linear-gradient( 135deg, #FDD819 10%, #E80505 100%)',
            cursor: 'pointer'
        },
        nonCritical: {
            color: 'rgba(255,255,255,.9)',
            fontWeight: 500,
            fontSize: 14,
            width: 24,
            height: 24,
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
            cursor: 'pointer'
        },
        chip: {
            '&:hover': {
                backgroundColor: theme.palette.primary.main
            }
        },
        button: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            },
            margin: '0 !important'
        }
    };
});
function getPostTypeTitle(t, postType) {
    switch(postType){
        case types/* PostType.Poll */.hQ.Poll:
            return t('plugin_find_truman_status_poll');
        case types/* PostType.Puzzle */.hQ.Puzzle:
            return t('plugin_find_truman_status_puzzle');
        case types/* PostType.Completion */.hQ.Completion:
            return t('plugin_find_truman_status_completion');
        case types/* PostType.PuzzleResult */.hQ.PuzzleResult:
            return t('plugin_find_truman_status_puzzle_result');
        case types/* PostType.PollResult */.hQ.PollResult:
            return t('plugin_find_truman_status_poll_result');
        case types/* PostType.Status */.hQ.Status:
            return t('plugin_find_truman_status_result');
        default:
            return '';
    }
}
function FindTruman(props) {
    const { classes  } = FindTruman_useStyles();
    const { address , t  } = (0,react.useContext)(FindTrumanContext);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { postType , clueId , storyInfo , userStoryStatus , userPuzzleStatus , userPollStatus , userCompletionStatus , puzzleResult , pollResult , onSubmitPoll , onSubmitCompletion ,  } = props;
    const [loadImg, setLoadImg] = (0,react.useState)(true);
    const isCritical = userPuzzleStatus?.critical || userPollStatus?.critical || userCompletionStatus?.critical;
    const isNoncritical = userPuzzleStatus && !userPuzzleStatus.critical || userPollStatus && !userPollStatus.critical || userCompletionStatus && !userCompletionStatus.critical;
    const renderCard = ()=>{
        if (postType === types/* PostType.Status */.hQ.Status) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard, {
                userStoryStatus: userStoryStatus
            });
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle && userPuzzleStatus) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                onSubmit: onSubmitPoll,
                userStatus: userPuzzleStatus
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll && userPollStatus) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                onSubmit: onSubmitPoll,
                userStatus: userPollStatus
            });
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard, {
                onSubmit: (_, answers)=>onSubmitCompletion(answers)
                ,
                completionStatus: userCompletionStatus
            });
        } else if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult && puzzleResult) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                type: types/* PostType.PuzzleResult */.hQ.PuzzleResult,
                userStatus: userPuzzleStatus,
                result: puzzleResult
            });
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult && pollResult) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                type: types/* PostType.PollResult */.hQ.PollResult,
                userStatus: userPollStatus,
                result: pollResult
            });
        }
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.root,
                elevation: 0,
                children: [
                    postType !== types/* PostType.Encryption */.hQ.Encryption ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                                onLoad: ()=>{
                                    setLoadImg(false);
                                },
                                alt: "",
                                component: "img",
                                height: 140,
                                sx: {
                                    visibility: loadImg ? 'hidden' : 'unset'
                                },
                                image: storyInfo?.img
                            }),
                            loadImg && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    display: 'flex',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%'
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                    animation: "wave",
                                    variant: "rectangular",
                                    height: 140,
                                    width: "100%"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                                title: storyInfo && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.title,
                                            component: "b",
                                            sx: {
                                                marginRight: 0.5
                                            },
                                            children: storyInfo.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            display: "flex",
                                            columnGap: 1,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                                    PopperProps: {
                                                        disablePortal: true
                                                    },
                                                    arrow: true,
                                                    placement: "top",
                                                    title: isCritical ? t('plugin_find_truman_status_critical') : isNoncritical ? t('plugin_find_truman_status_noncritical') : '',
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                        children: [
                                                            isCritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                                className: classes.critical,
                                                                children: "C"
                                                            }),
                                                            isNoncritical && /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                                                className: classes.nonCritical,
                                                                children: "N"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    className: classes.chip,
                                                    color: "primary",
                                                    size: "small",
                                                    label: getPostTypeTitle(t, postType)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            renderCard()
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(EncryptionCard, {
                        clueId: clueId
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                style: {
                    padding: 12
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    expectedChainId: chainId,
                    renderInTimeline: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        classes: {
                            button: classes.button
                        },
                        renderInTimeline: true,
                        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(connect/* PluginWalletConnectIcon */.Q, {
                            style: {
                                fontSize: 18
                            }
                        })
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/FindTruman/constants.ts + 1 modules
var constants = __webpack_require__(67681);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts




function renderString(template, data) {
    return template.replace(/{{([^}]+)}}/g, (match, p1)=>data[p1]?.toString() ?? match
    );
}
function useConst() {
    const { i18n  } = (0,src_utils/* useI18N */.M1)();
    const [consts, setConsts] = (0,react.useState)();
    (0,react.useEffect)(()=>{
        if (!constants/* FindTruman_Const.initialized */.Oh.initialized) {
            constants/* FindTruman_Const.init */.Oh.init((resolve, reject)=>{
                (0,apis/* fetchConst */.oM)(i18n.language).then(resolve).catch(reject);
            });
        }
        constants/* FindTruman_Const.then */.Oh.then((res)=>{
            setConsts(res);
        });
    }, []);
    const t = (0,react.useCallback)((id, options = {})=>{
        return renderString(consts?.locales?.[id] ?? '', options);
    }, [
        consts
    ]);
    return {
        consts,
        t
    };
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PostInspector.tsx











function PostInspector(props) {
    const { url  } = props;
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM).toLowerCase();
    const { consts , t  } = useConst();
    const [, , , _storyId, , _targetId] = new URL(url).hash.split('/');
    const storyId = _storyId ? _storyId : '';
    const targetId = _targetId ? _targetId : '';
    const postType = url.includes('/encryption?') ? types/* PostType.Encryption */.hQ.Encryption : url.includes('/puzzles/') ? types/* PostType.Puzzle */.hQ.Puzzle : url.includes('/polls/') ? types/* PostType.Poll */.hQ.Poll : url.includes('/completions/') ? types/* PostType.Completion */.hQ.Completion : url.includes('/puzzle_result') ? types/* PostType.PuzzleResult */.hQ.PuzzleResult : url.includes('/poll_result/') ? types/* PostType.PollResult */.hQ.PollResult : types/* PostType.Status */.hQ.Status;
    const [storyInfo, setStoryInfo] = (0,react.useState)();
    const [userStoryStatus, setUserStoryStatus] = (0,react.useState)();
    const [userPuzzleStatus, setUserPuzzleStatus] = (0,react.useState)();
    const [userPollStatus, setUserPollStatus] = (0,react.useState)();
    const [userCompletionStatus, setUserCompletionStatus] = (0,react.useState)();
    const [puzzleResult, setPuzzleResult] = (0,react.useState)();
    const [pollResult, setPollResult] = (0,react.useState)();
    const [clueId, setClueId] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        fetchData();
    }, [
        account
    ]);
    const fetchData = async ()=>{
        if (postType === types/* PostType.Encryption */.hQ.Encryption) {
            const searchParams = new URLSearchParams(url.split('?')[1]);
            const payload = searchParams.get('clueId') || '';
            setClueId(payload);
            return;
        }
        setStoryInfo(await (0,apis/* fetchStoryInfo */.dr)(storyId));
        if (!account) return;
        if (postType === types/* PostType.Status */.hQ.Status) {
            setUserStoryStatus(await (0,apis/* fetchUserStoryStatus */.cz)(storyId, account));
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle || postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setUserPuzzleStatus(await (0,apis/* fetchUserPuzzleStatus */.JJ)(targetId, account));
        } else if (postType === types/* PostType.Poll */.hQ.Poll || postType === types/* PostType.PollResult */.hQ.PollResult) {
            setUserPollStatus(await (0,apis/* fetchUserPollStatus */.K1)(targetId, account));
        } else if (postType === types/* PostType.Completion */.hQ.Completion) {
            setUserCompletionStatus(await (0,apis/* fetchUserCompletionStatus */.$G)(targetId, account));
        }
        if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setPuzzleResult(await (0,apis/* fetchPuzzleResult */.He)(targetId));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult) {
            setPollResult(await (0,apis/* fetchPollResult */.mf)(targetId));
        }
    };
    const handleSubmitPoll = async (choice)=>{
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            const target = userPuzzleStatus?.id ?? '';
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            const target = userPollStatus?.id ?? '';
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await fetchData();
    };
    const handleSubmitCompletion = async (answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        const quesId = userCompletionStatus?.id ?? '';
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await fetchData();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanContext.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingFailCard, {
            title: "",
            isFullPluginDown: true,
            retry: ()=>{
                fetchData();
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTruman, {
                storyInfo: storyInfo,
                clueId: clueId,
                userStoryStatus: userStoryStatus,
                userPuzzleStatus: userPuzzleStatus,
                userPollStatus: userPollStatus,
                userCompletionStatus: userCompletionStatus,
                puzzleResult: puzzleResult,
                pollResult: pollResult,
                postType: postType,
                onSubmitPoll: handleSubmitPoll,
                onSubmitCompletion: handleSubmitCompletion
            })
        })
    });
}

// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox/index.tsx + 3 modules
var WalletStatusBox = __webpack_require__(47919);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(30318);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PoapPanel.tsx









const PoapPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        poap: {
            width: '120px',
            height: '120px',
            borderRadius: '8px'
        },
        poapCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            filter: 'grayscale(100%)',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        }
    })
);
function PoapPanel(props) {
    const { classes  } = PoapPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: poaps , loading  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPoap */.oJ)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.skeleton,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    variant: "rectangular",
                    animation: "wave",
                    width: 120,
                    height: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 120
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    width: 36
                })
            ]
        }) : poaps && poaps.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            justifyContent: "center",
            children: poaps.map((poap)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    xs: 3,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.poap,
                            src: poap.img
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            textAlign: "center",
                            children: poap.name
                        })
                    ]
                }, poap.id)
            )
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_no_poap_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts?.poapImg,
                    className: classes.poapCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: consts?.getPoapUrl,
                    target: "_blank",
                    sx: {
                        mt: 1
                    },
                    color: "primary",
                    variant: "text",
                    children: t('plugin_find_truman_dialog_get_poap_tip')
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(61865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(80875);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PartsPanel.tsx















const PartsPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        skeleton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        ribbonWrapper: {
            position: 'relative'
        },
        ribbon: {
            position: 'absolute',
            width: '70px',
            height: '70px',
            overflow: 'hidden',
            top: '-6px',
            left: '-6px',
            '&:before': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                top: 0,
                right: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            },
            '&:after': {
                position: 'absolute',
                content: '""',
                display: 'block',
                border: '3px solid #0359a3',
                bottom: 0,
                left: 0,
                borderTopColor: 'transparent',
                borderLeftColor: 'transparent'
            }
        },
        ribbonGray: {
            '&:before': {
                border: '3px solid #595959'
            },
            '&:after': {
                border: '3px solid #595959'
            }
        },
        ribbonContent: {
            position: 'absolute',
            display: 'block',
            width: '100px',
            padding: '2px 0',
            backgroundColor: 'rgb(29,155,240)',
            boxShadow: '0 5px 10px rgba(0,0,0,.1)',
            color: '#fff',
            textAlign: 'center',
            right: '-6px',
            top: '16px',
            transform: 'rotate(-45deg)',
            zIndex: 1
        },
        ribbonContentGray: {
            backgroundColor: '#8c8c8c'
        },
        cover: {
            width: '100%',
            objectFit: 'contain',
            borderRadius: '8px',
            position: 'relative',
            trans: 'all .3s',
            background: 'rgba(255, 255, 255, .15)'
        }
    })
);
function PartsPanel(props) {
    const { classes  } = PartsPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,entry_web3/* useAccount */.mA)();
    const { value: partsInfo , loading , retry ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchUserPartsInfo */.kc)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            spacing: 2,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PartSkeleton, {})
            ]
        }) : partsInfo ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            alignItems: "center",
            container: true,
            spacing: 2,
            children: [
                partsInfo.quests.map((quest)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestItem, {
                            quest: quest
                        })
                    }, quest.id)
                ),
                partsInfo.boxes.map((box)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MysteryBoxItem, {
                            account: account,
                            onOpened: ()=>retry()
                            ,
                            box: box
                        })
                    }, box.id)
                ),
                partsInfo.parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PartItem, {
                            part: part
                        })
                    }, part.tokenId)
                )
            ]
        }) : null
    });
};
function PoapLabel(props) {
    const { id , poapImg , size  } = props;
    return id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            src: poapImg ?? ''
        }),
        label: `#${id}`,
        size: size ?? 'small',
        variant: "filled"
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: poapImg,
        style: {
            width: '24px',
            height: '24px',
            borderRadius: '100%'
        }
    });
}
function PartSkeleton() {
    const { classes  } = PartsPanel_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        className: classes.skeleton,
        item: true,
        xs: 4,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 80,
                height: 24
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                variant: "rectangular",
                animation: "wave",
                width: 168,
                height: 168
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                width: 168,
                height: 30
            })
        ]
    });
}
function getPartName(t, type) {
    switch(type){
        case types/* PartType.Background */.pX.Background:
            return t('plugin_find_truman_dialog_ftg_part_background');
        case types/* PartType.Clothes */.pX.Clothes:
            return t('plugin_find_truman_dialog_ftg_part_clothes');
        case types/* PartType.Skin */.pX.Skin:
            return t('plugin_find_truman_dialog_ftg_part_face');
        case types/* PartType.Head */.pX.Head:
            return t('plugin_find_truman_dialog_ftg_part_head');
        case types/* PartType.Mask */.pX.Mask:
            return t('plugin_find_truman_dialog_ftg_part_mask');
    }
}
function PartItem(props) {
    const { part  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                PopperProps: {
                    disablePortal: true
                },
                arrow: true,
                title: part.name,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    lineHeight: "24px",
                    noWrap: true,
                    textAlign: "center",
                    variant: "body1",
                    color: "text.primary",
                    children: part.name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                style: {
                    position: 'relative'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    src: part.img
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, part.type),
                        color: "primary"
                    }),
                    part.fromBox?.completedQuest?.needPoap && !!part.fromBox.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                        poapImg: consts?.poapImg ?? '',
                        id: part.fromBox.completedQuest.tokenId
                    })
                ]
            })
        ]
    });
}
function QuestItem(props) {
    const { quest  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const { open: isQuestDialogOpen , onOpen: onQuestDialogOpen , onClose: onQuestDialogClose  } = (0,src_utils/* useControlledDialog */.D2)();
    const meetPoap = (0,react.useMemo)(()=>{
        return !quest.needPoap || !!quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: consts?.boxImg
                    }),
                    quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            poapImg: consts?.poapImg ?? ''
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cx(classes.ribbon, classes.ribbonGray),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_lacked')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                size: "small",
                color: "primary",
                variant: "outlined",
                fullWidth: true,
                onClick: onQuestDialogOpen,
                children: meetPoap ? t('plugin_find_truman_dialog_get') : t('plugin_find_truman_poap_required_title_simple')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestDialog, {
                quest: quest,
                open: isQuestDialogOpen,
                onClose: onQuestDialogClose
            })
        ]
    });
}
function MysteryBoxItem(props) {
    const { account , box , onOpened  } = props;
    const { classes , cx  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const [loading, setLoading] = (0,react.useState)(box.isOpened && !box.isMinted);
    const handleOpenBox = async ()=>{
        try {
            setLoading(true);
            await (0,apis/* openMysteryBox */.UN)(account, {
                timestamp: (0,getUnixTime/* default */.Z)(Date.now()),
                address: account,
                rawdata: {
                    boxId: box.id
                }
            });
        } finally{
            setLoading(false);
            onOpened();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    height: '24px'
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.ribbonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: box.isOpened ? box.img : consts?.boxImg
                    }),
                    !box.isOpened && box.completedQuest?.needPoap && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: consts?.poapImg ?? ''
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: box.isOpened ? cx(classes.ribbon, classes.ribbonGray) : classes.ribbon,
                        children: box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: cx(classes.ribbonContent, classes.ribbonContentGray),
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_minted')
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.ribbonContent,
                            variant: "body2",
                            children: t('plugin_find_truman_dialog_ribbon_openable')
                        })
                    })
                ]
            }),
            box.isOpened ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "30px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        size: "small",
                        label: getPartName(t, box.partType),
                        color: "primary"
                    }),
                    box.completedQuest?.needPoap && !!box.completedQuest.tokenId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapLabel, {
                            size: "medium",
                            id: box.completedQuest.tokenId,
                            poapImg: consts?.poapImg ?? ''
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                loading: loading,
                size: "small",
                color: "primary",
                variant: "contained",
                fullWidth: true,
                onClick: handleOpenBox,
                children: t('plugin_find_truman_dialog_open')
            })
        ]
    });
}
function QuestDialog(props) {
    const { quest , open , onClose  } = props;
    const { classes  } = PartsPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const poapIds = (0,react.useMemo)(()=>{
        return quest.poaps.map((e)=>(0,formatter/* formatTokenId */.Xy)(e.tokenId.toString(), 2)
        ).join(', ');
    }, [
        quest
    ]);
    const availablePoap = (0,react.useMemo)(()=>{
        return quest.poaps.find((e)=>!e.used
        );
    }, [
        quest
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_find_truman_dialog_get_box_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 4
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.cover,
                    style: {
                        width: '250px',
                        height: '250px',
                        marginBottom: '8px'
                    },
                    src: consts?.boxImg
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body2",
                    color: "text.secondary",
                    sx: {
                        mb: 2
                    },
                    children: (0,format/* default */.Z)(new Date(quest.startFrom), 'yyyy-MM-dd')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h6",
                    color: "text.primary",
                    gutterBottom: true,
                    children: quest.title
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "text.primary",
                    sx: {
                        whiteSpace: 'pre-wrap'
                    },
                    children: quest.desc
                }),
                quest.needPoap && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
                    severity: availablePoap ? 'success' : 'error',
                    sx: {
                        marginTop: 2
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                            children: t('plugin_find_truman_poap_required_title')
                        }),
                        quest.poaps.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_poap_required_empty')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    rel: "noopener noreferrer",
                                    component: "a",
                                    target: "_blank",
                                    href: consts?.getPoapUrl,
                                    variant: "body2",
                                    sx: {
                                        fontWeight: 'bold',
                                        fontSize: '12px'
                                    },
                                    children: t('plugin_find_truman_poap_required_get')
                                })
                            ]
                        }) : availablePoap ? t('plugin_find_truman_poap_required_meet', {
                            id: `#${availablePoap.tokenId}`
                        }) : quest.poaps.length > 1 ? t('plugin_find_truman_poap_required_used_pl', {
                            id: poapIds
                        }) : t('plugin_find_truman_poap_required_used', {
                            id: poapIds
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FusionFtg.tsx




const FusionFtg_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        box: {
            width: '200px',
            height: '200px',
            borderRadius: '8px',
            position: 'relative',
            background: 'rgba(255, 255, 255, .15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        part: {
            width: '200px',
            height: '200px',
            position: 'absolute',
            top: 0,
            left: 0
        }
    })
);
const PartZIndex = {
    [types/* PartType.Background */.pX.Background]: 1,
    [types/* PartType.Skin */.pX.Skin]: 2,
    [types/* PartType.Clothes */.pX.Clothes]: 3,
    [types/* PartType.Head */.pX.Head]: 4,
    [types/* PartType.Mask */.pX.Mask]: 5
};
function FusionFtg(props) {
    const { parts , sx  } = props;
    const { classes  } = FusionFtg_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.box,
        sx: {
            ...sx
        },
        children: parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.part,
                src: part.img,
                style: {
                    zIndex: PartZIndex[part.type]
                }
            }, part.tokenId)
        )
    });
};

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FtgPanel.tsx













const FtgPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        ftgCover: {
            width: '150px',
            height: '150px',
            borderRadius: '8px',
            border: 'none',
            background: 'rgba(255, 255, 255, 0.15)',
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.05)'
            }
        },
        ftgRow: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            columnGap: theme.spacing(4),
            ':first-child': {
                marginTop: theme.spacing(2)
            },
            ':not(:last-child)': {
                marginBottom: theme.spacing(4),
                paddingBottom: theme.spacing(4),
                borderBottom: '1px solid rgba(255, 255, 255, .15)'
            }
        },
        ftgInfoRow: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: theme.spacing(2),
            ':not(:last-child)': {
                marginBottom: theme.spacing(1)
            }
        }
    })
);
function FtgPanel(props) {
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const ftgContract = (0,entry_web3_evm/* useERC721TokenContract */.nT)(chainId, consts?.ftgAddress);
    const { value: ftgs1  } = (0,useAsync/* default */.Z)(async ()=>{
        try {
            if (account && ftgContract) {
                const ftgs = [];
                const balance = await ftgContract.methods.balanceOf(account).call();
                for(let i = 0; i < (balance || 0); i += 1){
                    const tokenId = await ftgContract.methods.tokenOfOwnerByIndex(account, i).call();
                    const uri = await ftgContract.methods.tokenURI(tokenId).call();
                    if (uri) {
                        const res = await fetch(uri);
                        const nft = await res.json();
                        const tokenId = uri.split('/').at(-1);
                        ftgs.push({
                            ...nft,
                            tokenId
                        });
                    }
                }
                return ftgs;
            }
        } catch (error) {}
        return [];
    }, [
        account,
        ftgContract
    ]);
    const { value: fusion  } = (0,useAsync/* default */.Z)(async ()=>{
        return account ? (0,apis/* fetchExchangeStatus */.PN)(account) : undefined;
    }, [
        account
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: ftgs1 && ftgs1.length > 0 || fusion ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                ftgs1?.map((ftg)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgItem, {
                        ftg: ftg
                    }, ftg.tokenId)
                ),
                fusion?.parts && /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionItem, {
                    parts: fusion.parts
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    textAlign: "center",
                    variant: "body1",
                    color: "text.secondary",
                    gutterBottom: true,
                    children: t('plugin_find_truman_dialog_buy_ftg_tip')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: consts?.ftgImg,
                    className: classes.ftgCover
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    component: "a",
                    href: "https://findtruman.io/#/buy",
                    target: "_blank",
                    sx: {
                        mt: 1,
                        width: '150px'
                    },
                    color: "primary",
                    variant: "contained",
                    children: t('plugin_find_truman_dialog_buy_ftg')
                })
            ]
        })
    });
};
function FtgInfoRow(props) {
    const { title , value  } = props;
    const { classes  } = FtgPanel_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgInfoRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: "bold",
                variant: "body1",
                color: "text.primary",
                children: title
            }),
            typeof value === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body1",
                color: "text.secondary",
                children: value
            }) : value
        ]
    });
}
function FtgItem(props) {
    const { ftg  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t , const: consts  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.ftgCover,
                src: ftg.image
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: ftg.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: (0,formatter/* formatTokenId */.Xy)(ftg.tokenId, 2)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_blockchain'),
                        value: "Ethereum"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_standard'),
                        value: "ERC721 Enumerable"
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_contract'),
                        value: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    mr: 1,
                                    children: [
                                        consts.ftgAddress.slice(0, 7),
                                        "...",
                                        consts.ftgAddress.slice(38, 42)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: `https://etherscan.io/address/${consts.ftgAddress}`,
                                    variant: "body1",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: "view"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function FusionItem(props) {
    const { parts  } = props;
    const { classes  } = FtgPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.ftgRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FusionFtg, {
                parts: parts
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    width: '250px'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "center",
                        variant: "h6",
                        color: "text.primary",
                        gutterBottom: true,
                        children: "FindTruman Genesis"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                        title: t('plugin_find_truman_dialog_ftg_info_token'),
                        value: t('plugin_find_truman_dialog_ftg_no_minted')
                    }),
                    parts.map((part)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FtgInfoRow, {
                            title: getPartName(t, part.type),
                            value: part.name
                        }, part.type)
                    )
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/AssetsPanel.tsx








const AssetsPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        box: {
            display: 'flex',
            flexDirection: 'column'
        },
        row: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'baseline'
        }
    })
);
function AssetsPanel(props) {
    const { classes  } = AssetsPanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.box,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_ftg')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_mainnet')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FtgPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.row,
                mt: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "h5",
                        color: "text.primary",
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_assets_POAP')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        textAlign: "left",
                        variant: "body2",
                        color: "text.secondary",
                        ml: 1,
                        gutterBottom: true,
                        children: t('plugin_find_truman_dialog_ethereum_polygon')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PoapPanel, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 2,
                mb: 2,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "h5",
                                color: "text.primary",
                                children: t('plugin_find_truman_dialog_assets_parts')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                textAlign: "left",
                                variant: "body2",
                                color: "text.secondary",
                                ml: 1,
                                gutterBottom: true,
                                children: t('plugin_find_truman_dialog_ethereum_polygon')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "primary",
                        size: "small",
                        component: "a",
                        href: "https://findtruman.io/#/assets",
                        target: "_blank",
                        children: t('plugin_find_truman_dialog_fusion_fusion')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PartsPanel, {})
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(21948);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/ParticipatePanel.tsx



















const ParticipatePanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        panel: {},
        cover: {
            width: '100%',
            objectFit: 'cover',
            marginBottom: theme.spacing(2),
            borderRadius: '8px'
        },
        title: {
            marginBottom: theme.spacing(2)
        },
        buttons: {
            padding: theme.spacing(2)
        },
        wrapper: {
            '&:not(:last-child)': {
                marginBottom: theme.spacing(2)
            }
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        },
        dialogWrapper: {
            paddingBottom: '0 !important',
            paddingTop: '0 !important'
        }
    })
);
function ParticipatePanel(props) {
    const { storyId  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const account = (0,entry_web3/* useAccount */.mA)();
    const { open: isDialogOpen , onOpen: onDialogOpen , onClose: onDialogClose  } = (0,src_utils/* useControlledDialog */.D2)();
    const { value: userStoryStatus , retry: onUpdate  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return account && storyId ? (0,apis/* fetchUserStoryStatus */.cz)(storyId, account) : undefined;
    }, [
        account,
        storyId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.panel,
        children: [
            userStoryStatus && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        className: classes.cover,
                        src: userStoryStatus.img
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard, {
                        userStoryStatus: userStoryStatus
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogActions/* default */.Z, {
                        className: classes.buttons,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            color: "primary",
                            variant: "contained",
                            onClick: ()=>{
                                onDialogOpen();
                            },
                            children: t('plugin_find_truman_dialog_view_all')
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipateDialog, {
                account: account,
                open: isDialogOpen,
                onClose: onDialogClose,
                onUpdate: onUpdate
            })
        ]
    });
};
var ParticipationType;
(function(ParticipationType) {
    ParticipationType["Critical"] = 'critical';
    ParticipationType["NonCritical"] = 'non-critical';
})(ParticipationType || (ParticipationType = {}));
const ParticipationTabValues = [
    ParticipationType.Critical,
    ParticipationType.NonCritical
];
function ParticipateDialog(props) {
    const { account , open , onClose , onUpdate  } = props;
    const { classes  } = ParticipatePanel_useStyles();
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)(ParticipationType.Critical, ParticipationType.NonCritical);
    const [questions1, setQuestions] = (0,react.useState)();
    const updateQuestions = (0,react.useCallback)(async ()=>{
        if (!account) return;
        const questions = await (0,apis/* fetchQuestions */.Oz)(account);
        questions.fills = questions.fills.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Completion */.hQ.Completion
            };
        });
        questions.polls = questions.polls.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Poll */.hQ.Poll
            };
        });
        questions.puzzles = questions.puzzles.map((f)=>{
            return {
                ...f,
                type: types/* PostType.Puzzle */.hQ.Puzzle
            };
        });
        setQuestions(questions);
    }, [
        account,
        open
    ]);
    (0,react.useEffect)(()=>{
        updateQuestions();
    }, [
        account,
        open
    ]);
    const handleSubmitPoll = async (postType, pollId, choice)=>{
        const target = pollId;
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await updateQuestions();
        onUpdate();
    };
    const handleSubmitCompletion = async (quesId, answers)=>{
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        await (0,apis/* submitCompletion */.$F)(account, {
            quesId,
            answers,
            timestamp
        });
        await updateQuestions();
        onUpdate();
    };
    const renderItem = (question)=>{
        if (question.type === types/* PostType.Completion */.hQ.Completion) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CompletionCard, {
                    onSubmit: handleSubmitCompletion,
                    completionStatus: question
                })
            }, `${question.type}_${question.id}`);
        } else {
            const poll = question;
            return poll.status ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard, {
                    userStatus: poll,
                    onSubmit: async (choice)=>{
                        return handleSubmitPoll(poll.type, poll.id, choice);
                    }
                })
            }, `${poll.type}_${poll.id}`) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard, {
                    type: poll.type,
                    userStatus: poll,
                    result: {
                        ...poll,
                        correct: poll.result,
                        count: poll.count || []
                    }
                })
            }, `${poll.type}_${poll.id}`);
        }
    };
    const itemsCritical = (0,react.useMemo)(()=>[
            ...(questions1?.fills || []).filter((d)=>d.critical
            ),
            ...(questions1?.polls || []).filter((d)=>d.critical
            ),
            ...(questions1?.puzzles || []).filter((d)=>d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        )
    , [
        questions1
    ]);
    const itemsNonCritical = (0,react.useMemo)(()=>[
            ...(questions1?.fills || []).filter((d)=>!d.critical
            ),
            ...(questions1?.polls || []).filter((d)=>!d.critical
            ),
            ...(questions1?.puzzles || []).filter((d)=>!d.critical
            ), 
        ].sort((a, b)=>b.order - a.order
        )
    , [
        questions1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        title: t('plugin_find_truman_dialog_participation_title'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.dialogWrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: currentTab,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.abstractTabWrapper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialogTabs, {
                            currentTab: currentTab,
                            setTab: (tab)=>onChange(null, tab)
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tabPaneWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.Critical,
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsCritical.map((e)=>renderItem(e)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                className: classes.tabPane,
                                value: ParticipationType.NonCritical,
                                sx: {
                                    height: '522px'
                                },
                                children: !itemsNonCritical.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyTip, {}) : itemsNonCritical.map((e)=>renderItem(e)
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
}
function FindTrumanDialogTabs(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(2, 50%)'
    }), props);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { currentTab , setTab  } = props;
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_critical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.Critical)
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: t('plugin_find_truman_dialog_noncritical')
                }),
                sx: {
                    p: 0
                },
                cb: ()=>setTab(ParticipationType.NonCritical)
            }, 
        ],
        index: ParticipationTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    });
}
function EmptyTip() {
    const { t  } = (0,react.useContext)(FindTrumanContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        height: "100%",
        alignItems: "center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            margin: "auto",
            textAlign: "center",
            variant: "h6",
            color: "textSecondary",
            children: t('plugin_find_truman_coming_soon')
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/esm/ArrowForwardRounded.js
var ArrowForwardRounded = __webpack_require__(83445);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/IntroductionPanel.tsx






const IntroductionPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        section: {},
        bannerImg: {
            width: '40%',
            objectFit: 'contain',
            float: 'left',
            marginRight: theme.spacing(2)
        },
        stepCard: {
            display: 'flex',
            marginBottom: theme.spacing(1)
        },
        stepImg: {
            width: '83px',
            objectFit: 'contain',
            borderRadius: '8px',
            marginRight: theme.spacing(2)
        },
        communityRow: {
            display: 'flex',
            columnGap: theme.spacing(1.5)
        },
        communityItem: {
            cursor: 'pointer'
        },
        divider: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        }
    })
);
function IntroductionPanel(props) {
    const { classes  } = IntroductionPanel_useStyles();
    const { const: consts  } = (0,react.useContext)(FindTrumanContext);
    return consts ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.banner.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.bannerImg,
                                src: consts.introduction.banner.img
                            }),
                            consts.introduction.banner.desc.map((e, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: e
                                }, index)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.step.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: consts.introduction.step.steps.map((step, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.stepCard,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.stepImg,
                                        src: step.img
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                children: step.title
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body2",
                                                color: "text.secondary",
                                                children: step.desc
                                            }),
                                            step.link && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                href: step.link.url,
                                                target: "_blank",
                                                variant: "body2",
                                                rel: "noopener noreferrer",
                                                children: step.link.label
                                            })
                                        ]
                                    })
                                ]
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.community.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.communityRow,
                        children: consts.introduction.community.channels.map((channel, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                className: classes.communityItem,
                                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    alt: channel.label,
                                    src: channel.img
                                }),
                                label: channel.label,
                                component: "a",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: channel.url
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                className: classes.divider
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.section,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        gutterBottom: true,
                        children: consts.introduction.plot.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: consts.introduction.plot.img,
                        style: {
                            width: '100%',
                            objectFit: 'contain',
                            marginBottom: '-5px'
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowForwardRounded/* default */.Z, {}),
                        fullWidth: true,
                        variant: "outlined",
                        component: "a",
                        href: consts.introduction.plot.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: consts.introduction.plot.label
                    })
                ]
            })
        ]
    }) : null;
};

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanDialog.tsx














const FindTrumanDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        wrapper: {
            paddingBottom: '0 !important',
            paddingTop: '0 !important'
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            position: 'sticky',
            top: 0,
            width: '100%',
            zIndex: 2,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            backgroundColor: theme.palette.background.paper
        },
        tabPaneWrapper: {
            width: '100%',
            marginBottom: '24px'
        },
        tabPane: {
            width: 535,
            margin: '0 auto',
            padding: 0
        }
    })
);
function FindTrumanDialog(props) {
    const { open , onClose  } = props;
    const { classes  } = FindTrumanDialog_useStyles();
    const account = (0,entry_web3/* useAccount */.mA)();
    const { consts , t  } = useConst();
    const [currentTab, onChange, tabs] = (0,entry/* useTabs */.YE)(FindTrumanDialogTab.Introduction, FindTrumanDialogTab.Assets, FindTrumanDialogTab.Participate);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanContext.Provider, {
        value: {
            address: account,
            const: consts,
            t
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
            open: open,
            onClose: onClose,
            title: "FindTruman",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletStatusBox,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                    }),
                    consts && /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: currentTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.abstractTabWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog_FindTrumanDialogTabs, {
                                    currentTab: currentTab,
                                    setTab: (tab)=>onChange(null, tab)
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.tabPaneWrapper,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Introduction,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IntroductionPanel, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Assets,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsPanel, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                        className: classes.tabPane,
                                        value: FindTrumanDialogTab.Participate,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticipatePanel, {
                                            storyId: consts.storyId
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}
const useTabsStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300,
            backgroundColor: `${theme.palette.background.default}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-flexContainer': {
                display: 'grid',
                gridTemplateColumns: props.columns,
                backgroundColor: theme.palette.background.paper
            }
        },
        indicator: {
            display: 'none'
        }
    })
);
var FindTrumanDialogTab;
(function(FindTrumanDialogTab) {
    FindTrumanDialogTab["Introduction"] = 'introduction';
    FindTrumanDialogTab["Assets"] = 'assets';
    FindTrumanDialogTab["Participate"] = 'participate';
})(FindTrumanDialogTab || (FindTrumanDialogTab = {}));
const FindTrumanDialogTabValues = [
    FindTrumanDialogTab.Introduction,
    FindTrumanDialogTab.Assets,
    FindTrumanDialogTab.Participate, 
];
function getFindTrumanDialogTabName(t, type) {
    switch(type){
        case FindTrumanDialogTab.Introduction:
            return t('plugin_find_truman_dialog_tab_introduction');
        case FindTrumanDialogTab.Assets:
            return t('plugin_find_truman_dialog_tab_assets');
        case FindTrumanDialogTab.Participate:
            return t('plugin_find_truman_dialog_tab_participate');
    }
}
function FindTrumanDialog_FindTrumanDialogTabs(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useTabsStyles({
        columns: 'repeat(3, 33.33%)'
    }), props);
    const { t  } = (0,react.useContext)(FindTrumanContext);
    const { currentTab , setTab  } = props;
    const createTabItem = (type)=>({
            label: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: getFindTrumanDialogTabName(t, type)
            }),
            sx: {
                p: 0
            },
            cb: ()=>setTab(type)
        })
    ;
    const tabProps = {
        tabs: [
            createTabItem(FindTrumanDialogTab.Introduction),
            createTabItem(FindTrumanDialogTab.Assets),
            createTabItem(FindTrumanDialogTab.Participate), 
        ],
        index: FindTrumanDialogTabValues.indexOf(currentTab),
        classes,
        hasOnlyOneChild: true
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
        ...tabProps
    });
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/index.tsx













const SNSAdaptor_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        skeleton: {
            margin: theme.spacing(2),
            '&:first-child': {
                marginTop: theme.spacing(3)
            }
        }
    };
});
/**
 * https://findtruman.io/#/encryption?clueId={clueId}
 * https://findtruman.io/#/findtruman/stories/{storyId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzles/{puzzleId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/polls/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/completions/{completionId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/puzzle_result/{pollId}
 * https://findtruman.io/#/findtruman/stories/{storyId}/poll_result/{pollId}
 */ const isFindTrumanURL = (input)=>{
    if (!input.startsWith('https://findtruman.io')) {
        return false;
    }
    const { pathname , hash  } = new URL(input);
    if (pathname !== '/') {
        return false;
    }
    if (hash.startsWith('#/encryption')) {
        return /^#\/encryption\?clueid=[\da-z]+$/i.test(hash);
    }
    if (hash.startsWith('#/findtruman/stories')) {
        return /^#\/findtruman\/stories\/[\da-z]+(\/|\/(puzzle|poll|completion)(s|_result)\/[\da-z]+\/?)?$/i.test(hash);
    }
    return false;
};
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    const fallbackUI = Array.from({
        length: 2
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            className: classes.skeleton,
            animation: "wave",
            variant: "rectangular",
            width: i === 0 ? '80%' : '60%',
            height: 15
        }, i)
    );
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: fallbackUI,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            url: url
        })
    });
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isFindTrumanURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const links = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isFindTrumanURL);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_find_truman_name"
            });
            const iconFilterColor = 'rgba(251, 49, 32, 0.3)';
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                                ...EntryComponentProps,
                                title: name,
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                                 : clickHandler
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            })
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 12,
                icon,
                name: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                    i18nKey: "plugin_find_truman_name"
                }),
                iconFilterColor
            };
        })(), 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FindTrumanIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(251, 49, 32, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(251, 49, 32, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 31824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$F": () => (/* binding */ submitCompletion),
/* harmony export */   "$G": () => (/* binding */ fetchUserCompletionStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "Oz": () => (/* binding */ fetchQuestions),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91788);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59657);



const PREFIX = 'https://findtruman.io/api';
async function request(url, options) {
    const response = await fetch(urlcat__WEBPACK_IMPORTED_MODULE_0___default()(PREFIX, url), {
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    });
    const { data , code , msg  } = await response.json();
    if (code !== 0) {
        throw new _types__WEBPACK_IMPORTED_MODULE_2__/* .FindTrumanRemoteError */ .$T(msg, code, data);
    }
    return data;
}
function fetchConst(lang) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/consts', {
        l: lang
    }));
}
function fetchStoryInfo(storyId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId', {
        storyId
    }));
}
function fetchUserStoryStatus(storyId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/stories/:storyId/status', {
        storyId,
        uaddr
    }));
}
function fetchUserPuzzleStatus(puzzleId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/status', {
        puzzleId,
        uaddr
    }));
}
function fetchUserPollStatus(pollId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/status', {
        pollId,
        uaddr
    }));
}
function fetchUserCompletionStatus(quesId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/subjective_questions/:quesId', {
        quesId,
        uaddr
    }));
}
function fetchPuzzleResult(puzzleId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/puzzles/:puzzleId/result', {
        puzzleId
    }));
}
function fetchPollResult(pollId) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls/:pollId/result', {
        pollId
    }));
}
async function submitPuzzle(address, data) {
    const sig = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(JSON.stringify(data), address);
    return request('/polls/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitCompletion(address, params) {
    const { timestamp , quesId , answers  } = params;
    const data = {
        timestamp,
        address,
        rawdata: {
            quesId,
            answers
        }
    };
    const sig = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(JSON.stringify(data), address);
    return request('/subjective_questions/_/answer', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserParticipatedStoryStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/participated_story_status', {
        uaddr
    }));
}
function fetchClue(clueId, uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/clues/:clueId', {
        clueId,
        uaddr
    }));
}
function fetchUserPoap(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/ftpoap', {
        uaddr
    }));
}
function fetchMysteryBoxInfo(id) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/mystery-boxes/:id', {
        id
    }));
}
async function openMysteryBox(address, data) {
    const sig = await _Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.signPersonalMessage */ .V.signPersonalMessage(JSON.stringify(data), address);
    return request('/mystery-boxes/_/open', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
function fetchUserPartsInfo(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/parts_with_additional', {
        uaddr
    }));
}
function fetchExchangeStatus(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_status', {
        uaddr
    }));
}
function fetchAllPollsOrPuzzles(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/polls_or_puzzles', {
        uaddr
    }));
}
function fetchQuestions(uaddr) {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/questions', {
        uaddr
    }));
}
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 59657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "pX": () => (/* binding */ PartType)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
    PostType["Completion"] = 'completion';
    PostType["PuzzleResult"] = 'puzzle_result';
    PostType["PollResult"] = 'poll_result';
    PostType["Encryption"] = 'encryption';
})(PostType || (PostType = {}));
var ClueConditionType;
(function(ClueConditionType) {
    ClueConditionType["And"] = 'and';
    ClueConditionType["Or"] = 'or';
    ClueConditionType["Erc721"] = 'hold-erc721';
    ClueConditionType["Erc20"] = 'hold-erc20';
})(ClueConditionType || (ClueConditionType = {}));
var PartType;
(function(PartType) {
    PartType[PartType["Head"] = 1] = "Head";
    PartType[PartType["Skin"] = 2] = "Skin";
    PartType[PartType["Clothes"] = 3] = "Clothes";
    PartType[PartType["Mask"] = 4] = "Mask";
    PartType[PartType["Background"] = 5] = "Background";
})(PartType || (PartType = {}));
class FindTrumanRemoteError extends Error {
    constructor(message, code, data){
        super(message);
        this.code = code;
        this.data = data;
    }
}


/***/ }),

/***/ 73495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72288);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47061);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89239);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48
        },
        tooltip: {
            borderRadius: 4,
            padding: 10
        }
    })
);
function ChainBoundary(props) {
    const { noSwitchNetworkTip =true , expectedPluginID , expectedChainId , predicate =(actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId
     ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const actualPluginID1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const plugin = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__/* .useActivatedPlugin */ .Rc)(actualPluginID1, 'any');
    const { Others: actualOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(actualPluginID1);
    const actualChainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(actualPluginID1);
    const actualProviderType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useProviderType */ ._o)(actualPluginID1);
    const actualChainName = actualOthers?.chainResolver.chainName(actualChainId1);
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)(actualPluginID1);
    const { Others: expectedOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(expectedPluginID);
    const expectedConnection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Connection */ .Tv)(expectedPluginID);
    const expectedAllowTestnet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAllowTestnet */ .QE)(expectedPluginID);
    const expectedChainName = expectedOthers?.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptor */ .Vw)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, expectedChainId);
    const expectedChainAllowed = expectedOthers?.chainResolver.isValid(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID1 === expectedPluginID;
    const isMatched = predicate(actualPluginID1, actualChainId1);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    const onSwitchChain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(1000);
        if (!expectedChainAllowed) return;
        if (!isPluginIDMatched || actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect) {
            openSelectProviderDialog();
            return;
        }
        if (!isMatched) {
            await expectedConnection?.connect({
                chainId: expectedChainId
            });
        }
    }, [
        expectedChainAllowed,
        isMatched,
        isPluginIDMatched,
        actualProviderType,
        expectedChainId,
        expectedConnection,
        openSelectProviderDialog, 
    ]);
    // TODO: will remove this and extract new boundary for timeline
    const buttonProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...props.renderInTimeline ? {
                variant: 'contained',
                fullWidth: true,
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: theme.palette.maskColor?.white,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                }
            } : {},
            ...props.ActionButtonPromiseProps
        };
    }, [
        props.ActionButtonPromiseProps,
        props.renderInTimeline
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootTooltip */ .p_, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: props.className,
                sx: {
                    flex: 1
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: children
            })
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !props.hiddenConnectButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            fullWidth: true,
            startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .PluginWalletConnectIcon */ .Q, {}),
            variant: "contained",
            size: props.ActionButtonPromiseProps?.size,
            sx: {
                marginTop: 1.5
            },
            onClick: openSelectProviderDialog,
            ...buttonProps,
            children: t('plugin_wallet_connect_wallet')
        }) : null
    }));
    if (isMatched) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
    if (actualPluginID1 !== expectedPluginID) {
        return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                    fullWidth: true,
                    className: classes.switchButton,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                        mainIcon: expectedNetworkDescriptor?.icon,
                        size: 18
                    }),
                    sx: props.ActionButtonPromiseProps?.sx,
                    style: {
                        borderRadius: 10
                    },
                    init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_connect_network', {
                            network: 'EVM'
                        })
                    }),
                    waiting: t('plugin_wallet_connect_network_under_going', {
                        network: 'EVM'
                    }),
                    complete: t('plugin_wallet_connect_network', {
                        network: 'EVM'
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...buttonProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualChainName
                    })
                })
            }) : null,
            expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                    mainIcon: expectedNetworkDescriptor?.icon,
                    size: 18
                }),
                sx: props.ActionButtonPromiseProps?.sx,
                style: {
                    borderRadius: 10,
                    paddingTop: 11,
                    paddingBottom: 11
                },
                init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedChainName
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedChainName
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedChainName
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...buttonProps
            }) : null
        ]
    }), actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect ? t('plugin_wallet_connect_tips') : '');
}


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


/***/ })

}]);