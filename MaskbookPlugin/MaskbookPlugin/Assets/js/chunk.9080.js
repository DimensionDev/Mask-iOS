(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7416],{

/***/ 60479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.DOMPurify || (window.DOMPurify = __webpack_require__(61104).default || __webpack_require__(61104));

/***/ }),

/***/ 64795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9080.js
/***/ 18156:
=======
/***/ 65928:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7416.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskbookPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57343);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71629);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45513);
/* harmony import */ var _resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14840);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.divider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1)
        },
        icon: {
            width: '3em',
            height: '3em'
        },
        body: {
            margin: theme.spacing(2)
        }
    };
});
function MaskbookPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children  } = props;
    const useStableTheme = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI.customization.useTheme).current;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const theme = useStableTheme === null || useStableTheme === void 0 ? void 0 : useStableTheme();
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskbookIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskbookIcon */ .LX, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "overline",
                                children: "Mask Plugin"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                                variant: "h6",
                                children: pluginName
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            })
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: theme ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            theme: theme,
            children: inner
        }) : inner
    }));
};


/***/ }),

/***/ 87416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(66751);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(57343);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/base.tsx + 1 modules
var base = __webpack_require__(85801);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(64795);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(29135);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(76729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(20261);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(88460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(74454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(93244);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/resources/MaskbookIcon.tsx
var MaskbookIcon = __webpack_require__(75388);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/constants.ts
var constants = __webpack_require__(54567);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var messages = __webpack_require__(17006);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(68091);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(54800);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/usePool.ts






function useFetchPool(address) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return;
        return messages/* PluginDHedgeRPC.fetchPool */.t.fetchPool(address, constants/* API_URL */.T5);
    }, [
        address
    ]);
}
function useFetchPoolHistory(address, period, sort = true) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address) return [];
        return messages/* PluginDHedgeRPC.fetchPoolPerformance */.t.fetchPoolPerformance(address, period, constants/* API_URL */.T5, sort);
    }, [
        address,
        period,
        sort
    ]);
}
function usePoolDepositAssets(pool) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const { sUSD_ADDRESS  } = (0,web3_shared_src/* useTokenConstants */.kdE)();
    const poolManagerContract = (0,useDHedgePool/* useDHedgePoolManagerContract */.rY)(pool === null || pool === void 0 ? void 0 : pool.managerLogicAddress);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!pool) return;
        if (pool.poolType === types/* PoolType.v1 */.W4.v1) return sUSD_ADDRESS ? [
            sUSD_ADDRESS
        ] : undefined;
        return poolManagerContract === null || poolManagerContract === void 0 ? void 0 : poolManagerContract.methods.getDepositAssets().call();
    }, [
        pool,
        chainId,
        sUSD_ADDRESS,
        poolManagerContract
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(37763);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Refresh.js
var icons_Refresh = __webpack_require__(74881);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(84371);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(39462);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/ChartControl.tsx




const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            top: 0,
            right: 0,
            padding: theme.spacing(1, 2),
            position: 'absolute'
        },
        link: {
            cursor: 'pointer',
            marginRight: theme.spacing(1),
            '&:last-child': {
                marginRight: 0
            }
        },
        text: {
            fontSize: 10,
            fontWeight: 300
        }
    })
);
function PriceChartPeriodControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: [
            types/* Period.D1 */.pH.D1,
            types/* Period.W1 */.pH.W1,
            types/* Period.M1 */.pH.M1,
            types/* Period.M3 */.pH.M3,
            types/* Period.M6 */.pH.M6
        ].map((period)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onPeriodChange) === null || ref === void 0 ? void 0 : ref.call(props, period);
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.text,
                    component: "span",
                    color: props.period === period ? 'primary' : 'textSecondary',
                    children: period
                })
            }, period));
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PerformanceChart.tsx












const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PerformanceChart_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative',
            padding: theme.spacing(2)
        },
        svg: {
            display: 'block',
            color: '#fff'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            position: 'absolute',
            fontSize: 15
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function PerformanceChart(props) {
    const { pool  } = props;
    const { classes  } = PerformanceChart_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    const [period, setPeriod] = (0,react.useState)(types/* Period.D1 */.pH.D1);
    //#region fetch pool history
    const { value: perfHistory , error , loading , retry  } = useFetchPoolHistory(pool.address, period);
    var ref;
    const stats = (ref = perfHistory === null || perfHistory === void 0 ? void 0 : perfHistory.map((row)=>[
            Number(row.timestamp),
            Number(row.performance)
        ]
    )) !== null && ref !== void 0 ? ref : [];
    //#endregion
    //#region make chart responisve
    const { width  } = (0,useWindowSize/* default */.Z)();
    const [responsiveWidth, setResponsiveWidth] = (0,react.useState)(DEFAULT_DIMENSION.width);
    const [responsiveHeight, setResponsiveHeight] = (0,react.useState)(DEFAULT_DIMENSION.height);
    (0,react.useEffect)(()=>{
        if (!rootRef.current) return;
        setResponsiveWidth(rootRef.current.getBoundingClientRect().width || DEFAULT_DIMENSION.width);
        setResponsiveHeight(rootRef.current.getBoundingClientRect().height || DEFAULT_DIMENSION.height);
    }, [
        width /* redraw canvas if window width resize */ 
    ]);
    //#endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    (0,useLineChart/* useLineChart */.t)(svgRef, stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-dhedge-performance-line-chart', {
        tickFormat: '.0%',
        formatTooltip: (value)=>`${(value * 100).toFixed(1)}%`
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: retry
            }),
            stats.length && !error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartPeriodControl, {
                        period: period,
                        onPeriodChange: setPeriod
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet"
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: loading ? t('plugin_dhedge_loading_chart') : error ? t('plugin_dhedge_fetch_error') : t('plugin_dhedge_no_data')
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Divider/Divider.js
var Divider = __webpack_require__(76806);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(8286);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(12887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-dompurify@0.15.0/node_modules/isomorphic-dompurify/browser.js
var browser = __webpack_require__(60479);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolStats.tsx











const DIGIT_LENGTH = 18;
const PoolStats_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            alignItems: 'center',
            '& svg': {
                marginRight: theme.spacing(0.5)
            }
        },
        title: {
            fontSize: 12
        },
        value: {
            fontSize: 32
        },
        meta: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        description: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            maxWidth: '100%'
        }
    })
);
function PoolStats(props) {
    const { pool  } = props;
    const { classes  } = PoolStats_useStyles();
    //#region process stats
    const valueManaged = (0,utils/* formatAmountPostfix */.K)((0,web3_shared_src/* formatBalance */.azF)(pool === null || pool === void 0 ? void 0 : pool.totalValue, DIGIT_LENGTH));
    const lifeTimeReturn = new (bignumber_default())((0,web3_shared_src/* formatBalance */.azF)(pool.performance, DIGIT_LENGTH)).minus(1).multipliedBy(100);
    const riskFactor = pool && (pool === null || pool === void 0 ? void 0 : pool.riskFactor) !== -1 ? pool === null || pool === void 0 ? void 0 : pool.riskFactor : '-';
    // pool detail contains raw html and need to sanitize before use
    const cleanDescription = browser_default().sanitize(pool.poolDetails);
    const [expanded, setExpanded] = (0,react.useState)(cleanDescription.length < constants/* POOL_DESCRIPTION_LIMIT */.yV);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_value_managed"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.value,
                                    children: [
                                        "$",
                                        valueManaged
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_lifetime_return"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: lifeTimeReturn.isGreaterThan(0) ? theme_src/* MaskColorVar.greenMain */.ZN.greenMain : lifeTimeReturn.isLessThan(0) ? theme_src/* MaskColorVar.redMain */.ZN.redMain : 'textPrimary',
                                    className: classes.value,
                                    children: [
                                        lifeTimeReturn.toFixed(2),
                                        "%"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.title,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_risk_factor"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: riskFactor === '-' || riskFactor === 3 ? 'textPrimary' : riskFactor < 3 ? theme_src/* MaskColorVar.greenMain */.ZN.greenMain : theme_src/* MaskColorVar.redMain */.ZN.redMain,
                                    className: classes.value,
                                    children: [
                                        riskFactor,
                                        " / 5"
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
            }),
            cleanDescription ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.description,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "h6",
                        color: "textPrimary",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_strategy"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "textSecondary",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            dangerouslySetInnerHTML: {
                                __html: expanded ? cleanDescription : cleanDescription.slice(0, constants/* POOL_DESCRIPTION_LIMIT */.yV).concat('...')
                            }
                        })
                    }),
                    cleanDescription.length > constants/* POOL_DESCRIPTION_LIMIT */.yV ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        color: "primary",
                        onClick: ()=>setExpanded(!expanded)
                        ,
                        children: expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_see_less"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                            i18nKey: "plugin_dhedge_see_more"
                        })
                    }) : null
                ]
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useManager.ts


function useAvatar(address) {
    return (0,web3_shared_src/* useBlockie */.YTs)(address, constants/* BLOCKIES_OPTIONS */.jz);
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolViewDeck.tsx











const PoolViewDeck_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        title: {
            padding: theme.spacing(1, 0),
            display: 'flex',
            alignItems: 'center',
            '& > :last-child': {
                marginTop: 4,
                marginLeft: 4
            }
        },
        meta: {
            fontSize: 14,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            display: 'flex',
            alignItems: 'left'
        },
        avatar: {
            width: theme.spacing(8),
            height: theme.spacing(8)
        },
        text: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '4',
            '-webkit-box-orient': 'vertical'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        chip: {
            width: '100%',
            fontSize: 'x-small'
        }
    })
);
function PoolViewDeck(props) {
    const { pool , inputTokens , link  } = props;
    const { classes  } = PoolViewDeck_useStyles();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const blockie = useAvatar(pool.managerAddress);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    //#region manager share
    const managerShare = new (bignumber_default())(pool.balanceOfManager).dividedBy(pool.totalSupply).multipliedBy(100).integerValue((bignumber_default()).ROUND_UP);
    //#endregion
    //#region the invest dialog
    const { setDialog: openInvestDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated);
    const onInvest = (0,react.useCallback)(()=>{
        if (!pool || !inputTokens) return;
        openInvestDialog({
            open: true,
            pool: pool,
            tokens: inputTokens
        });
    }, [
        pool,
        inputTokens,
        openInvestDialog
    ]);
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        className: classes.meta,
        direction: "row",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "center",
                xs: 2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: link,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: blockie,
                        className: classes.avatar
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.title,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: link,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h6",
                                children: pool.name.toUpperCase()
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        className: classes.meta,
                        direction: "column",
                        spacing: 0.5,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textPrimary",
                                    className: classes.text,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_managed_by",
                                        components: {
                                            manager: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: (0,web3_shared_src/* resolveAddressLinkOnExplorer */.V3)(chainId, pool.managerAddress)
                                            })
                                        },
                                        values: {
                                            managerName: pool.managerName
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    color: "textSecondary",
                                    className: classes.text,
                                    children: managerShare.isLessThanOrEqualTo(50) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_dhedge_manager_share",
                                        components: {
                                            share: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            })
                                        },
                                        values: {
                                            managerShare: managerShare
                                        }
                                    }) : t('plugin_dhedge_manager_share_more_than_50')
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                alignSelf: "right",
                xs: 4,
                textAlign: "center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.button,
                    variant: "contained",
                    fullWidth: true,
                    color: "primary",
                    onClick: onInvest,
                    children: t('plugin_dhedge_invest')
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/dHEDGE/UI/PoolView.tsx













const PoolView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0
        },
        message: {
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 'inherit'
        },
        content: {
            width: '100%',
            height: 'var(--contentHeight)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0 !important'
        },
        body: {
            flex: 1,
            overflow: 'auto',
            maxHeight: 350,
            borderRadius: 0,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset'
        },
        tab: {
            minHeight: 'unset',
            minWidth: 'unset'
        },
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
        },
        footnote: {
            fontSize: 10,
            marginRight: theme.spacing(1)
        },
        footLink: {
            cursor: 'pointer',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        footMenu: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            display: 'flex',
            alignItems: 'center'
        },
        footName: {
            marginLeft: theme.spacing(0.5)
        },
        maskbook: {
            width: 40,
            height: 10
        },
        dhedge: {
            height: 10,
            margin: theme.spacing(0, 0.5)
        }
    })
);
function PoolView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolView_useStyles();
    const currentChainId = (0,web3_shared_src/* useChainId */.xxU)();
    var _address;
    //#region allowed tokens
    const { value: pool , error , loading , retry  } = useFetchPool((_address = props.address) !== null && _address !== void 0 ? _address : '');
    //#region susd token
    const { value: allowedTokens , loading: loadingAllowedTokens , retry: retryAllowedTokens , error: errorAllowedTokens ,  } = usePoolDepositAssets(pool);
    //#endregion
    //#region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_stats')
        }, "stats"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_dhedge_tab_chart')
        }, "chart"), 
    ].filter(Boolean);
    //#endregion
    if (loading || loadingAllowedTokens) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_loading')
    }));
    if (!pool) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: t('plugin_dhedge_pool_not_found')
    }));
    if (error || errorAllowedTokens && currentChainId === pool.chainId) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        className: classes.message,
        color: "textPrimary",
        children: [
            t('plugin_dhedge_smt_wrong'),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
            }),
            (error === null || error === void 0 ? void 0 : error.message) || (errorAllowedTokens === null || errorAllowedTokens === void 0 ? void 0 : errorAllowedTokens.message),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: error ? retry : retryAllowedTokens
            })
        ]
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: pool.chainId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classes.root,
            elevation: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                    subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolViewDeck, {
                        pool: pool,
                        inputTokens: allowedTokens,
                        link: props.link
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                            className: classes.tabs,
                            indicatorColor: "primary",
                            textColor: "primary",
                            variant: "fullWidth",
                            value: tabIndex,
                            onChange: (ev, newValue)=>setTabIndex(newValue)
                            ,
                            TabIndicatorProps: {
                                style: {
                                    display: 'none'
                                }
                            },
                            children: tabs
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                            className: classes.body,
                            children: [
                                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolStats, {
                                    pool: pool
                                }) : null,
                                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PerformanceChart, {
                                    pool: pool
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                    className: classes.footer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.footnote,
                            variant: "subtitle2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    children: [
                                        t('plugin_powered_by'),
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    className: classes.footLink,
                                    color: "textSecondary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    title: "Mask",
                                    href: "https://mask.io",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookIcon/* MaskbookTextIcon */.vA, {
                                        classes: {
                                            root: classes.maskbook
                                        },
                                        viewBox: "0 0 80 20"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.footnote,
                            variant: "subtitle2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "Supported by"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                    className: classes.footLink,
                                    target: "_blank",
                                    color: "textSecondary",
                                    rel: "noopener noreferrer",
                                    title: "dHEDGE",
                                    href: "https://dhedge.org",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                            className: classes.dhedge,
                                            src: "https://app.dhedge.org/favicon.ico"
                                        }),
                                        "dHEDGE"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx + 1 modules
var InvestDialog = __webpack_require__(4485);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/SNSAdaptor/index.tsx











function createMatchLink() {
    return new RegExp(`(${(0,lodash.escapeRegExp)(constants/* BASE_URL */._n)}|${(0,lodash.escapeRegExp)(constants/* STAGING_URL */.Wo)})/pool/(\\w+)`);
}
function getPoolFromLink(link) {
    const matchLink = createMatchLink();
    var ref;
    const [, , address] = matchLink ? (ref = link.match(matchLink)) !== null && ref !== void 0 ? ref : [] : [];
    return {
        link,
        address
    };
}
function getPoolFromLinks(links) {
    return links.map(getPoolFromLink).find(Boolean);
}
const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector: function Component(props) {
        const text = (0,react.useMemo)(()=>(0,shared_src.extractTextFromTypedMessage)(props.message)
        , [
            props.message
        ]);
        const links = (0,react.useMemo)(()=>(0,shared_src.parseURL)(text.val || '')
        , [
            text.val
        ]);
        const pool = getPoolFromLinks(links);
        if (!text.ok) return null;
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    PostInspector: function Component1() {
        const links = src/* usePostInfoDetails.postMetadataMentionedLinks */.H9.postMetadataMentionedLinks().concat(src/* usePostInfoDetails.postMentionedLinks */.H9.postMentionedLinks());
        const pool = getPoolFromLinks(links);
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    GlobalInjection: function Component2() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InvestDialog/* InvestDialog */.V, {
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
        pluginName: "dHEDGE",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
                message: "Mask is loading this plugin..."
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                address: props.address,
                link: props.link
            })
        })
    }));
}


/***/ }),

/***/ 12887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6615);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68091);



const ONE_THOUSAND = 1000;
const ONE_MILLION = ONE_THOUSAND * 1000;
const ONE_BILLION = ONE_MILLION * 1000;
const ONE_TRILLION = ONE_BILLION * 1000;
/**
 * A helper function to format amount
 * @param input raw amount
 * @return {String} Postfixed formatted amount
 * @example
 * formatAmountPostfix(1.234);
 * // returns 1.23
 * @example
 * formatAmountPostfix(12.34);
 * // returns 12.3
 * @example
 * formatAmountPostfix(2000.123);
 * // returns 2.12K
 * @example
 * formatAmountPostfix(20000.123);
 * // returns 20.1K
 **/ function formatAmountPostfix(input) {
    let postfix = '';
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(input);
    if (amount.isGreaterThanOrEqualTo(ONE_TRILLION)) {
        postfix = 'T';
        amount = amount.dividedBy(ONE_TRILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_BILLION)) {
        postfix = 'B';
        amount = amount.dividedBy(ONE_BILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_MILLION)) {
        postfix = 'M';
        amount = amount.dividedBy(ONE_MILLION);
    } else if (amount.isGreaterThanOrEqualTo(ONE_THOUSAND)) {
        postfix = 'K';
        amount = amount.dividedBy(ONE_THOUSAND);
    }
    const fixedAmount = amount.isLessThanOrEqualTo(10) ? amount.toFixed(2) : amount.toFixed(1);
    return `${fixedAmount.replace(/\.0$/, '')}${postfix}`;
}
function getChainIdFromCode(blockChainCode) {
    switch(blockChainCode){
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_2__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic;
    }
}


/***/ })

}]);