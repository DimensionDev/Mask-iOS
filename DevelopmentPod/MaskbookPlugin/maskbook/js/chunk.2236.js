"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2236],{

/***/ 2236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/plugins/Trader/base.ts
var base = __webpack_require__(19862);
// EXTERNAL MODULE: ./src/plugins/Trader/base-deferred.ts + 1 modules
var base_deferred = __webpack_require__(69429);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TraderDialog.tsx
var TraderDialog = __webpack_require__(35615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(47545);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useAvailableDataProviders.ts



function useAvailableDataProviders(type, keyword) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsync/* default */.Z)(async ()=>{
        return messages/* PluginTraderRPC.getAvailableDataProviders */.V.getAvailableDataProviders(type, keyword);
    }, [
        chainId,
        type,
        keyword
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useSearchedKeyword.ts


function useSearchedKeyword() {
    const [keyword, setKeyword] = (0,react.useState)('');
    const onLocationChange = (0,react.useCallback)(()=>{
        var ref;
        if (social_network.activatedSocialNetworkUI === null || social_network.activatedSocialNetworkUI === void 0 ? void 0 : (ref = social_network.activatedSocialNetworkUI.collecting) === null || ref === void 0 ? void 0 : ref.getSearchedKeyword) {
            var ref1;
            setKeyword(social_network.activatedSocialNetworkUI === null || social_network.activatedSocialNetworkUI === void 0 ? void 0 : (ref1 = social_network.activatedSocialNetworkUI.collecting) === null || ref1 === void 0 ? void 0 : ref1.getSearchedKeyword());
        }
    }, []);
    (0,react.useEffect)(()=>{
        onLocationChange();
        window.addEventListener('locationchange', onLocationChange);
        return ()=>window.removeEventListener('locationchange', onLocationChange)
        ;
    }, [
        onLocationChange
    ]);
    return keyword;
}

// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var types = __webpack_require__(46347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(43463);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tabs/Tabs.js + 1 modules
var Tabs = __webpack_require__(52311);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(85123);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(18254);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useCurrentCurrency.ts

const CURRENCIES_MAP = {
    [public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO]: [
        {
            id: 'usd',
            name: 'USD',
            symbol: '$',
            description: 'Unite State Dollar'
        }, 
    ],
    [public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP]: [
        {
            id: '2781',
            name: 'USD',
            symbol: '$',
            description: 'Unite State Dollar'
        }, 
    ],
    [public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO]: [
        {
            id: 'usd',
            name: 'USD',
            symbol: '$',
            description: 'Unite State Dollar'
        }, 
    ]
};
/**
 * TODO: support multiple currencies
 * @param dataProvider
 * @returns
 */ function useCurrentCurrency(dataProvider) {
    var ref;
    return (ref = CURRENCIES_MAP[dataProvider]) === null || ref === void 0 ? void 0 : ref[0];
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useTrending.ts




function useTrendingByKeyword(tagType, keyword, dataProvider) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const currency = useCurrentCurrency(dataProvider);
    const trendingAsyncResult = (0,useAsync/* default */.Z)(async ()=>{
        if (!keyword) return null;
        if (!currency) return null;
        return messages/* PluginTraderRPC.getCoinTrendingByKeyword */.V.getCoinTrendingByKeyword(keyword, tagType, currency, dataProvider);
    }, [
        chainId,
        dataProvider,
        currency === null || currency === void 0 ? void 0 : currency.id,
        keyword
    ]);
    return {
        value: {
            currency: currency,
            trending: trendingAsyncResult.value
        },
        loading: trendingAsyncResult.loading,
        error: trendingAsyncResult.error
    };
}
function useTrendingById(id, dataProvider) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const currency = useCurrentCurrency(dataProvider);
    const trendingAsyncResult = (0,useAsync/* default */.Z)(async ()=>{
        if (!id) return null;
        if (!currency) return null;
        return messages/* PluginTraderRPC.getCoinTrendingById */.V.getCoinTrendingById(id, currency, dataProvider);
    }, [
        chainId,
        dataProvider,
        currency === null || currency === void 0 ? void 0 : currency.id,
        id
    ]);
    return {
        value: {
            currency: currency,
            trending: trendingAsyncResult.value
        },
        loading: trendingAsyncResult.loading,
        error: trendingAsyncResult.error
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(90705);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(93500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(10141);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Table/Table.js
var Table = __webpack_require__(88814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TableHead/TableHead.js
var TableHead = __webpack_require__(80945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/TableBody/TableBody.js
var TableBody = __webpack_require__(7835);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(13443);
// EXTERNAL MODULE: ./src/plugins/Wallet/formatter.ts
var Wallet_formatter = __webpack_require__(85415);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TickersTable.tsx








const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            maxHeight: 266,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        cell: {
            paddingLeft: theme.spacing(1.5),
            paddingRight: theme.spacing(1),
            whiteSpace: 'nowrap'
        },
        logo: {
            width: 18,
            height: 18,
            verticalAlign: 'bottom',
            marginRight: theme.spacing(0.5)
        },
        placeholder: {
            paddingTop: theme.spacing(10),
            paddingBottom: theme.spacing(10),
            borderStyle: 'none'
        }
    })
);
function TickersTable(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const rows = [
        t('plugin_trader_table_exchange'),
        t('plugin_trader_table_pair'),
        props.dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? t('plugin_trader_table_price') : null,
        t('plugin_trader_table_volume'),
        t('plugin_trader_table_updated'), 
    ];
    const tickers = props.tickers.map((ticker, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: [
                        ticker.logo_url ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.logo,
                            src: ticker.logo_url
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: ticker.market_name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: (()=>{
                        const formatted = (0,formatter/* formatEthereumAddress */.j8)(ticker.base_name, 2);
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: ticker.trade_url,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    title: formatted !== ticker.base_name ? ticker.base_name : '',
                                    children: formatted
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: "/"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: (0,formatter/* formatEthereumAddress */.j8)(ticker.target_name, 2)
                                })
                            ]
                        }));
                    })()
                }),
                ticker.price ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                        value: ticker.price,
                        sign: "$",
                        formatter: formatter/* formatCurrency */.xG
                    })
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                        value: ticker.volume,
                        sign: "$",
                        formatter: formatter/* formatCurrency */.xG
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                    className: classes.cell,
                    children: (0,Wallet_formatter/* formatElapsed */.Q)(ticker.updated.getTime())
                })
            ]
        }, index)
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: rows.map((x)=>x ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: x
                            }, x) : null
                        )
                    })
                }),
                tickers.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: tickers
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            className: classes.cell,
                            colSpan: 5,
                            style: {
                                borderStyle: 'none'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.placeholder,
                                align: "center",
                                color: "textSecondary",
                                children: t('plugin_trader_no_data')
                            })
                        })
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(57112);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/ArrowDropUp.js
var ArrowDropUp = __webpack_require__(73787);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(71973);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChanged.tsx






const PriceChanged_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        fontSize: 'inherit',
        position: 'relative'
    },
    icon: {
        top: 0,
        bottom: 0,
        margin: 'auto',
        position: 'absolute',
        verticalAlign: 'middle'
    },
    value: {
        marginLeft: 20
    }
});
function PriceChanged(props) {
    const { classes: color  } = (0,theme/* useColorStyles */.Nh)();
    const { classes  } = PriceChanged_useStyles();
    if (props.amount === 0) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        className: classnames_default()(classes.root, props.amount > 0 ? color.success : color.error),
        children: [
            props.amount > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropUp/* default */.Z, {
                className: classes.icon
            }) : null,
            props.amount < 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                className: classes.icon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                className: classes.value,
                children: [
                    props.amount.toFixed(2),
                    "%"
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChangedTable.tsx




const PriceChangedTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        table: {},
        cell: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1.5),
            textAlign: 'center',
            whiteSpace: 'nowrap'
        }
    })
);
function PriceChangedTable({ market  }) {
    const { classes  } = PriceChangedTable_useStyles();
    const records = [
        {
            name: '1h',
            percentage: market.price_change_percentage_1h_in_currency
        },
        {
            name: '24h',
            percentage: market.price_change_percentage_24h_in_currency
        },
        {
            name: '7d',
            percentage: market.price_change_percentage_7d_in_currency
        },
        {
            name: '14d',
            percentage: market.price_change_percentage_14d_in_currency
        },
        {
            name: '30d',
            percentage: market.price_change_percentage_30d_in_currency
        },
        {
            name: '1y',
            percentage: market.price_change_percentage_1y_in_currency
        }, 
    ];
    const filteredRecords = records.filter((record)=>typeof record.percentage === 'number'
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: filteredRecords.map((x)=>x.percentage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: x.name
                            }, x.name) : null
                        )
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: filteredRecords.map((x)=>x.percentage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChanged, {
                                    amount: x.percentage
                                })
                            }, x.name) : null
                        )
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(71443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CircularProgress/CircularProgress.js
var CircularProgress = __webpack_require__(2974);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/Refresh.js
var Refresh = __webpack_require__(56368);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(34034);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(66299);
;// CONCATENATED MODULE: ./src/plugins/hooks/usePriceLineChart.ts


function usePriceLineChart(svgRef, data, dimension, id, opts) {
    const { color ='steelblue' , sign ='$'  } = opts;
    (0,useLineChart/* useLineChart */.t)(svgRef, data, dimension, id, {
        color,
        tickFormat: `${sign},.2s`,
        formatTooltip: (value)=>(0,formatter/* formatCurrency */.xG)(value, sign)
    });
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChart.tsx









const DEFAULT_DIMENSION = {
    top: 32,
    right: 16,
    bottom: 32,
    left: 16,
    width: 598,
    height: 200
};
const PriceChart_useStyles = (0,src/* makeStyles */.ZL)()((theme, { stats , coin  })=>{
    return {
        root: {
            position: 'relative',
            cursor: stats.length && (coin === null || coin === void 0 ? void 0 : coin.platform_url) ? 'pointer' : 'default'
        },
        svg: {
            display: 'block'
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
    };
});
function PriceChart(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(PriceChart_useStyles(props), props);
    const rootRef = (0,react.useRef)(null);
    const svgRef = (0,react.useRef)(null);
    // #region make chart responsive
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
    // #endregion
    const dimension = {
        ...DEFAULT_DIMENSION,
        width: responsiveWidth,
        height: responsiveHeight
    };
    (0,useDimension/* useDimension */.$)(svgRef, dimension);
    usePriceLineChart(svgRef, props.stats.map(([date, price])=>({
            date: new Date(date),
            value: price
        })
    ), dimension, 'x-trader-price-line-chart', {
        sign: props.currency.symbol
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: rootRef,
        children: [
            props.loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {
                className: classes.refresh,
                color: "primary",
                onClick: props.retry
            }),
            props.stats.length ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    props.children,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                        className: classes.svg,
                        ref: svgRef,
                        width: dimension.width,
                        height: dimension.height,
                        viewBox: `0 0 ${dimension.width} ${dimension.height}`,
                        preserveAspectRatio: "xMidYMid meet",
                        onClick: ()=>{
                            var ref;
                            props.stats.length && ((ref = props.coin) === null || ref === void 0 ? void 0 : ref.platform_url) && window.open(props.coin.platform_url, '_blank', 'noopener noreferrer');
                        }
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.placeholder,
                align: "center",
                color: "textSecondary",
                children: t('plugin_trader_no_data')
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(29105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isUndefined.js
var isUndefined = __webpack_require__(80155);
// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trending/PriceChartDaysControl.tsx
var PriceChartDaysControl = __webpack_require__(88347);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/usePriceStats.ts




function usePriceStats({ coinId , currency , days =PriceChartDaysControl/* Days.MAX */.h.MAX , dataProvider  }) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if ((0,isUndefined/* default */.Z)(days) || (0,isUndefined/* default */.Z)(coinId) || (0,isUndefined/* default */.Z)(dataProvider) || (0,isUndefined/* default */.Z)(currency)) return [];
        return messages/* PluginTraderRPC.getPriceStats */.V.getPriceStats(coinId, currency, days, dataProvider);
    }, [
        coinId,
        dataProvider,
        currency === null || currency === void 0 ? void 0 : currency.id,
        days
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(45627);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useCurrentDataProvider.ts



function useCurrentDataProvider(availableDataProviders) {
    const currentDataProvider = (0,shared_src/* useValueRef */.E)(Trader_settings/* currentDataProviderSettings */.gG);
    const [dataProvider, setDataProvider] = (0,react.useState)(currentDataProvider);
    // sync data provider
    (0,react.useEffect)(()=>{
        if (!availableDataProviders.length) return;
        setDataProvider(availableDataProviders.includes(currentDataProvider) ? currentDataProvider : availableDataProviders[0]);
    }, [
        availableDataProviders.sort().join(),
        currentDataProvider
    ]);
    return dataProvider;
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/Trader.tsx + 28 modules
var Trader = __webpack_require__(63481);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(28727);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeView.tsx





const TradeView_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            maxWidth: 450,
            margin: '0 auto',
            padding: theme.spacing(2.5, 3),
            position: 'relative',
            boxSizing: 'border-box'
        },
        actions: {},
        settings: {
            zIndex: 1,
            top: 0,
            right: theme.spacing(3),
            bottom: 0,
            left: theme.spacing(3),
            position: 'absolute'
        }
    };
});
function TradeView(props) {
    const { TraderProps  } = props;
    const chainId = (0,plugin_infra_src/* useChainId */.xx)();
    const classes = (0,src/* useStylesExtends */.Bc)(TradeView_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trader/* Trader */.A, {
                ...TraderProps,
                chainId: chainId
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(50266);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMarketTable.tsx







const CoinMarketTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        container: {
            borderRadius: 0,
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        head: {
            padding: 0,
            border: 'none'
        },
        cell: {
            whiteSpace: 'nowrap',
            border: 'none'
        }
    })
);
function CoinMarketTable(props) {
    var ref, ref1, ref2, ref3;
    const { trending , dataProvider  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CoinMarketTable_useStyles();
    var ref4, ref5, ref6, ref7;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        component: Paper/* default */.Z,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.head,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: t('plugin_trader_market_cap')
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.head,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: t('plugin_trader_volume_24')
                                })
                            }),
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.head,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_trader_circulating_supply')
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.head,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_trader_total_supply')
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                                    symbol: "USD",
                                    value: (ref4 = (ref = trending.market) === null || ref === void 0 ? void 0 : ref.market_cap) !== null && ref4 !== void 0 ? ref4 : 0,
                                    formatter: formatter/* formatCurrency */.xG
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                className: classes.cell,
                                align: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                                    symbol: "USD",
                                    value: (ref5 = (ref1 = trending.market) === null || ref1 === void 0 ? void 0 : ref1.total_volume) !== null && ref5 !== void 0 ? ref5 : 0,
                                    formatter: formatter/* formatCurrency */.xG
                                })
                            }),
                            dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                                            value: (ref6 = (ref2 = trending.market) === null || ref2 === void 0 ? void 0 : ref2.circulating_supply) !== null && ref6 !== void 0 ? ref6 : 0,
                                            symbol: trending.coin.symbol,
                                            formatter: formatter/* formatCurrency */.xG
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classes.cell,
                                        align: "center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                                            value: (ref7 = (ref3 = trending.market) === null || ref3 === void 0 ? void 0 : ref3.total_supply) !== null && ref7 !== void 0 ? ref7 : 0,
                                            symbol: trending.coin.symbol,
                                            formatter: formatter/* formatCurrency */.xG
                                        })
                                    })
                                ]
                            }) : null
                        ]
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(14910);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(98174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/FileCopy.js
var FileCopy = __webpack_require__(31297);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/Linking.tsx


function Linking(props) {
    const { href , LinkProps , TypographyProps , children  } = props;
    try {
        const { hostname  } = new URL(href !== null && href !== void 0 ? href : '');
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            color: "primary",
            target: "_blank",
            rel: "noopener noreferrer",
            href: props.href,
            ...LinkProps,
            children: children ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: hostname.replace(/^www./i, '')
            })
        }));
    } catch  {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: LinkProps === null || LinkProps === void 0 ? void 0 : LinkProps.className,
            title: LinkProps === null || LinkProps === void 0 ? void 0 : LinkProps.title,
            children: children ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                component: "span",
                ...TypographyProps,
                children: href
            })
        }));
    }
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(32364);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMetadataTags.tsx






const CoinMetadataTags_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tag: {
            marginRight: theme.spacing(1)
        },
        chip: {
            margin: theme.spacing(1)
        }
    })
);
function CoinMetadataTags(props) {
    const { classes  } = CoinMetadataTags_useStyles();
    const { tags  } = props;
    const [open1, setOpen] = (0,react.useState)(false);
    const onClick = (0,react.useCallback)(()=>{
        setOpen((open)=>!open
        );
    }, []);
    const onClose = (0,react.useCallback)(()=>{
        setOpen(false);
    }, []);
    if (!tags) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            tags.slice(0, 4).map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                    href: x,
                    LinkProps: {
                        className: classes.tag
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        style: {
                            marginTop: 2,
                            marginBottom: 2
                        },
                        label: x.replace(/-/g, ' '),
                        size: "small"
                    })
                }, i)
            ),
            tags.length > 4 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                        href: "View all",
                        LinkProps: {
                            className: classes.tag
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            style: {
                                marginTop: 2,
                                marginBottom: 2
                            },
                            label: "View all",
                            color: "primary",
                            onClick: onClick,
                            size: "small"
                        })
                    }, tags.length + 1),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TagsDialog, {
                        open: open1,
                        onClose: onClose,
                        tags: tags
                    })
                ]
            }) : null
        ]
    }));
}
function TagsDialog(props) {
    const { open , tags , onClose  } = props;
    const { classes  } = CoinMetadataTags_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: tags ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
            open: open,
            title: "Tags",
            onClose: onClose,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                children: tags === null || tags === void 0 ? void 0 : tags.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                        href: x,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                            label: x.replace(/-/g, ' '),
                            className: classes.chip
                        })
                    }, i)
                )
            })
        }) : null
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMetadataTable.tsx










const CoinMetadataTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        container: {
            borderRadius: 0,
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        table: {},
        cell: {
            whiteSpace: 'nowrap',
            border: 'none'
        },
        label: {
            color: theme.palette.text.secondary,
            whiteSpace: 'nowrap'
        },
        link: {
            display: 'inline-block',
            whiteSpace: 'nowrap',
            paddingRight: theme.spacing(1),
            '&:last-child': {
                paddingRight: 0
            }
        }
    })
);
function CoinMetadataTable(props) {
    var ref;
    const { dataProvider , trending  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CoinMetadataTable_useStyles();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const onCopyAddress = (0,shared_src/* useSnackbarCallback */.iD)(async ()=>{
        if (!trending.coin.contract_address) return;
        copyToClipboard(trending.coin.contract_address);
    }, [
        trending.coin.contract_address
    ]);
    const metadataLinks = [
        [
            'Website',
            trending.coin.home_urls
        ],
        [
            'Announcement',
            trending.coin.announcement_urls
        ],
        [
            'Message Board',
            trending.coin.message_board_urls
        ],
        [
            'Explorer',
            trending.coin.blockchain_urls
        ],
        [
            'Tech Docs',
            trending.coin.tech_docs_urls
        ],
        [
            'Source Code',
            trending.coin.source_code_urls
        ],
        [
            'Community',
            trending.coin.community_urls
        ], 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
        className: classes.container,
        component: Paper/* default */.Z,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            className: classes.table,
            size: "small",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    trending.coin.market_cap_rank ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: t('plugin_trader_market_cap')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                children: [
                                    "Rank #",
                                    trending.coin.market_cap_rank
                                ]
                            })
                        ]
                    }) : null,
                    metadataLinks.map(([label, links], i1)=>{
                        if (!(links === null || links === void 0 ? void 0 : links.length)) return null;
                        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.label,
                                        variant: "body2",
                                        children: label
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                    children: links.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                                            href: x,
                                            LinkProps: {
                                                className: classes.link
                                            }
                                        }, i)
                                    )
                                })
                            ]
                        }, i1));
                    }),
                    trending.coin.contract_address ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: t('contract')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: trending.coin.contract_address,
                                            size: 4,
                                            formatter: formatter/* formatEthereumAddress */.j8
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                        color: "primary",
                                        size: "small",
                                        onClick: onCopyAddress,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileCopy/* default */.Z, {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    ((ref = trending.coin.tags) === null || ref === void 0 ? void 0 : ref.length) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    children: t('tags')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTags, {
                                    tags: trending.coin.tags
                                })
                            })
                        ]
                    }) : null
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMarketPanel.tsx




const CoinMarketPanel_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        }
    })
);
function CoinMarketPanel(props) {
    const { dataProvider , trending  } = props;
    const { classes  } = CoinMarketPanel_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMetadataTable, {
                dataProvider: dataProvider,
                trending: trending
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketTable, {
                dataProvider: dataProvider,
                trending: trending
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(73450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/alert-circle.js
var alert_circle = __webpack_require__(48888);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingCard.tsx



const TrendingCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    };
});
function TrendingCard(props) {
    const { children  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(TrendingCard_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        component: "article",
        children: children
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewError.tsx





const TrendingViewError_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        content: {
            paddingTop: 0,
            paddingBottom: 0
        },
        placeholder: {
            padding: theme.spacing(18, 4)
        },
        icon: {
            width: theme.spacing(8),
            height: theme.spacing(8),
            marginBottom: theme.spacing(2),
            color: theme.palette.text.secondary
        },
        message: {
            fontSize: 16
        }
    })
);
function TrendingViewError(props) {
    const { message , reaction , TrendingCardProps  } = props;
    const { classes  } = TrendingViewError_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingCard, {
        ...TrendingCardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.placeholder,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(alert_circle/* default */.Z, {
                        className: classes.icon
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        color: "textSecondary",
                        children: message
                    }),
                    !!reaction && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: reaction
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(26995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(56118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(79388);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewSkeleton.tsx




const TrendingViewSkeleton_useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        paddingTop: 0,
        paddingBottom: 0
    },
    footer: {
        justifyContent: 'space-between'
    }
});
function TrendingViewSkeleton(props) {
    const { TrendingCardProps  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(TrendingViewSkeleton_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingCard, {
        ...TrendingCardProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    variant: "circular",
                    width: 40,
                    height: 40
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "30%"
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "20%"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        height: 58,
                        style: {
                            marginBottom: 8
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                        animation: "wave",
                        variant: "rectangular",
                        height: 269
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    animation: "wave",
                    height: 10,
                    width: "30%"
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/MonetizationOnOutlined.js
var MonetizationOnOutlined = __webpack_require__(19385);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(71651);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ./src/resources/MaskIcon.tsx
var MaskIcon = __webpack_require__(8231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(5617);
;// CONCATENATED MODULE: ./src/resources/CoinMarketCapIcon.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    viewBox: "0 0 41 41",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
        fillOpacity: ".85",
        fillRule: "evenodd",
        fill: "currentColor",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M35.124 24.5c-.715.452-1.557.508-2.197.147-.813-.459-1.26-1.534-1.26-3.029v-4.473c0-2.16-.854-3.697-2.282-4.112-2.42-.705-4.24 2.256-4.924 3.368l-4.268 6.92v-8.458c-.048-1.946-.68-3.11-1.88-3.461-.794-.232-1.982-.139-3.136 1.627L5.615 28.383A16.869 16.869 0 0 1 3.671 20.5c0-9.249 7.412-16.773 16.522-16.773S36.714 11.251 36.714 20.5c0 .016.004.03.005.045 0 .016-.003.03-.002.046.086 1.791-.494 3.216-1.593 3.91zm5.261-3.999V20.5v-.046l-.001-.046C40.333 9.144 31.296 0 20.192 0 9.059 0 0 9.196 0 20.5 0 31.803 9.059 41 20.193 41c5.109 0 9.985-1.942 13.728-5.467.744-.7.788-1.879.098-2.633a1.817 1.817 0 0 0-2.594-.1 16.331 16.331 0 0 1-11.232 4.473c-4.878 0-9.267-2.159-12.294-5.583l8.623-13.846v6.383c0 3.066 1.189 4.057 2.186 4.347.998.29 2.523.092 4.124-2.508l4.743-7.689c.152-.248.292-.462.42-.647v3.888c0 2.866 1.148 5.158 3.149 6.287 1.804 1.018 4.072.926 5.92-.24 2.24-1.415 3.447-4.022 3.321-7.164z"
        })
    })
});
function CoinMarketCapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/CoinGeckoIcon.tsx


const CoinGeckoIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 276 276",
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8dc63f",
                d: "M276,137.39A138,138,0,1,1,137.39,0h0A138,138,0,0,1,276,137.39Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#f9e988",
                d: "M265.65,137.44a127.63,127.63,0,1,1-128.21-127h0A127.65,127.65,0,0,1,265.65,137.44Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M140.35,18.66a70.18,70.18,0,0,1,24.53,0,74.75,74.75,0,0,1,23.43,7.85c7.28,4,13.57,9.43,19.83,14.52s12.49,10.3,18.42,16a93.32,93.32,0,0,1,15.71,19,108.28,108.28,0,0,1,11,22.17c5.33,15.66,7.18,32.53,4.52,48.62H257c-2.67-15.95-6.29-31.15-12-45.61A177.51,177.51,0,0,0,235.56,80,209.1,209.1,0,0,0,223.14,60a72.31,72.31,0,0,0-16.64-16.8c-6.48-4.62-13.93-7.61-21.14-10.45S171,27,163.48,24.84s-15.16-3.78-23.14-5.35Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8bc53f",
                d: "M202.74,92.39c-9.26-2.68-18.86-6.48-28.58-10.32-.56-2.44-2.72-5.48-7.09-9.19-6.35-5.51-18.28-5.37-28.59-2.93-11.38-2.68-22.62-3.63-33.41-1C16.82,93.26,66.86,152.57,34.46,212.19c4.61,9.78,54.3,66.84,126.2,51.53,0,0-24.59-59.09,30.9-87.45C236.57,153.18,269.09,110.46,202.74,92.39Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M213.64,131.2a5.35,5.35,0,1,1-5.38-5.32A5.36,5.36,0,0,1,213.64,131.2Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#009345",
                d: "M138.48,69.91c6.43.46,29.68,8,35.68,12.12-5-14.5-21.83-16.43-35.68-12.12Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M144.6,106.58a24.68,24.68,0,1,1-24.69-24.67h0a24.68,24.68,0,0,1,24.68,24.66Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#58595b",
                d: "M137.28,106.8a17.36,17.36,0,1,1-17.36-17.36h0A17.36,17.36,0,0,1,137.28,106.8Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#8bc53f",
                d: "M233.63,142.08c-20,14.09-42.74,24.78-75,24.78-15.1,0-18.16-16-28.14-8.18-5.15,4.06-23.31,13.14-37.72,12.45S55,162,48.49,131.23C45.91,162,44.59,184.65,33,210.62c23,36.83,77.84,65.24,127.62,53C155.31,226.27,188,189.69,206.34,171c7-7.09,20.3-18.66,27.29-28.91Z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#58595b",
                d: "M232.85,143c-6.21,5.66-13.6,9.85-21.12,13.55a134.9,134.9,0,0,1-23.7,8.63c-8.16,2.11-16.67,3.7-25.29,2.92s-17.43-3.71-23.14-10.17l.27-.31c7,4.54,15.08,6.14,23.12,6.37a108.27,108.27,0,0,0,24.3-2,132.71,132.71,0,0,0,23.61-7.3c7.63-3.15,15.18-6.8,21.68-12Z"
            })
        ]
    })
});
function CoinGeckoIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: CoinGeckoIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/UniswapIcon.tsx


const UniswapIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    viewBox: "0 0 14 15",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.15217 1.55141C3.96412 1.52242 3.95619 1.51902 4.04468 1.5055C4.21427 1.47958 4.61472 1.51491 4.89067 1.58012C5.53489 1.73232 6.12109 2.12221 6.74683 2.81466L6.91307 2.99862L7.15088 2.96062C8.15274 2.8006 9.17194 2.92778 10.0244 3.31918C10.2589 3.42686 10.6287 3.64121 10.6749 3.69629C10.6896 3.71384 10.7166 3.82684 10.7349 3.94742C10.7982 4.36458 10.7665 4.68434 10.6382 4.92317C10.5683 5.05313 10.5644 5.09432 10.6114 5.20554C10.6489 5.2943 10.7534 5.35999 10.8569 5.35985C11.0687 5.35956 11.2967 5.0192 11.4024 4.54561L11.4444 4.3575L11.5275 4.45109C11.9835 4.96459 12.3417 5.66488 12.4032 6.16335L12.4192 6.29332L12.3426 6.17517C12.2107 5.97186 12.0781 5.83346 11.9084 5.72183C11.6024 5.52062 11.2789 5.45215 10.4222 5.40727C9.64839 5.36675 9.21045 5.30106 8.77621 5.16032C8.03738 4.9209 7.66493 4.60204 6.78729 3.4576C6.39748 2.94928 6.15654 2.66804 5.91687 2.44155C5.37228 1.92691 4.83716 1.65701 4.15217 1.55141Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.8494 2.68637C10.8689 2.34575 10.9153 2.12108 11.0088 1.9159C11.0458 1.83469 11.0804 1.76822 11.0858 1.76822C11.0911 1.76822 11.075 1.82816 11.05 1.90142C10.9821 2.10054 10.9709 2.3729 11.0177 2.68978C11.0771 3.09184 11.1109 3.14985 11.5385 3.58416C11.739 3.78788 11.9723 4.0448 12.0568 4.15511L12.2106 4.35568L12.0568 4.21234C11.8688 4.03705 11.4364 3.6952 11.3409 3.64633C11.2768 3.61356 11.2673 3.61413 11.2278 3.65321C11.1914 3.68922 11.1837 3.74333 11.1787 3.99915C11.1708 4.39786 11.1161 4.65377 10.9842 4.90965C10.9128 5.04805 10.9015 5.01851 10.9661 4.8623C11.0143 4.74566 11.0192 4.69439 11.0189 4.30842C11.0181 3.53291 10.9255 3.34647 10.3823 3.02709C10.2447 2.94618 10.0179 2.8295 9.87839 2.76778C9.73887 2.70606 9.62805 2.6523 9.63208 2.64828C9.64746 2.63307 10.1772 2.78675 10.3905 2.86828C10.7077 2.98954 10.76 3.00526 10.7985 2.99063C10.8244 2.98082 10.8369 2.90608 10.8494 2.68637Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.51745 4.01304C4.13569 3.49066 3.89948 2.68973 3.95062 2.091L3.96643 1.90572L4.05333 1.92148C4.21652 1.95106 4.49789 2.05515 4.62964 2.13469C4.9912 2.35293 5.14773 2.64027 5.30697 3.37811C5.35362 3.59423 5.41482 3.8388 5.44298 3.9216C5.48831 4.05487 5.65962 4.36617 5.7989 4.56834C5.89922 4.71395 5.83258 4.78295 5.61082 4.76305C5.27215 4.73267 4.8134 4.41799 4.51745 4.01304Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.3863 7.90088C8.60224 7.18693 7.97389 6.56721 7.97389 5.52157C7.97389 5.36769 7.97922 5.24179 7.98571 5.24179C7.99221 5.24179 8.06124 5.29257 8.1391 5.35465C8.50088 5.64305 8.906 5.76623 10.0275 5.92885C10.6875 6.02455 11.0589 6.10185 11.4015 6.21477C12.4904 6.57371 13.1641 7.30212 13.3248 8.29426C13.3715 8.58255 13.3441 9.12317 13.2684 9.4081C13.2087 9.63315 13.0263 10.0388 12.9779 10.0544C12.9645 10.0587 12.9514 10.0076 12.9479 9.93809C12.9296 9.56554 12.7402 9.20285 12.4221 8.93116C12.0604 8.62227 11.5745 8.37633 10.3863 7.90088Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.13385 8.19748C9.11149 8.06527 9.07272 7.89643 9.04769 7.82228L9.00217 7.68748L9.08672 7.7818C9.20374 7.91234 9.2962 8.07937 9.37457 8.30185C9.43438 8.47165 9.44111 8.52215 9.44066 8.79807C9.4402 9.06896 9.43273 9.12575 9.3775 9.27859C9.29042 9.51959 9.18233 9.69048 9.00097 9.87391C8.67507 10.2036 8.25607 10.3861 7.65143 10.4618C7.54633 10.4749 7.24 10.4971 6.97069 10.511C6.292 10.5461 5.84531 10.6186 5.44393 10.7587C5.38623 10.7788 5.3347 10.7911 5.32947 10.7859C5.31323 10.7698 5.58651 10.6079 5.81223 10.4998C6.1305 10.3474 6.44733 10.2643 7.15719 10.1468C7.50785 10.0887 7.86998 10.0183 7.96194 9.99029C8.83033 9.72566 9.27671 9.04276 9.13385 8.19748Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.95169 9.64109C9.71465 9.13463 9.66022 8.64564 9.79008 8.18961C9.80399 8.14088 9.82632 8.101 9.83976 8.101C9.85319 8.101 9.90913 8.13105 9.96404 8.16777C10.0733 8.24086 10.2924 8.36395 10.876 8.68023C11.6043 9.0749 12.0196 9.3805 12.302 9.72965C12.5493 10.0354 12.7023 10.3837 12.776 10.8084C12.8177 11.0489 12.7932 11.6277 12.7311 11.8699C12.5353 12.6337 12.0802 13.2336 11.4311 13.5837C11.336 13.635 11.2506 13.6771 11.2414 13.6773C11.2321 13.6775 11.2668 13.5899 11.3184 13.4827C11.5367 13.029 11.5616 12.5877 11.3965 12.0965C11.2954 11.7957 11.0893 11.4287 10.6732 10.8084C10.1893 10.0873 10.0707 9.89539 9.95169 9.64109Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3.25046 12.3737C3.91252 11.8181 4.73629 11.4234 5.48666 11.3022C5.81005 11.25 6.34877 11.2707 6.64823 11.3469C7.12824 11.469 7.55763 11.7425 7.78094 12.0683C7.99918 12.3867 8.09281 12.6642 8.19029 13.2816C8.22875 13.5252 8.27057 13.7697 8.28323 13.8251C8.35644 14.1451 8.4989 14.4008 8.67544 14.5293C8.95583 14.7333 9.43865 14.7459 9.91362 14.5618C9.99423 14.5305 10.0642 14.5089 10.0691 14.5138C10.0864 14.5308 9.84719 14.6899 9.67847 14.7737C9.45143 14.8864 9.2709 14.93 9.03102 14.93C8.59601 14.93 8.23486 14.7101 7.9335 14.2616C7.87419 14.1733 7.7409 13.909 7.63729 13.6741C7.3191 12.9528 7.16199 12.7331 6.79255 12.4926C6.47104 12.2834 6.05641 12.2459 5.74449 12.3979C5.33475 12.5976 5.22043 13.118 5.51389 13.4478C5.63053 13.5789 5.84803 13.6919 6.02588 13.7139C6.35861 13.7551 6.64455 13.5035 6.64455 13.1696C6.64455 12.9528 6.56071 12.8291 6.34966 12.7344C6.0614 12.6051 5.75156 12.7563 5.75304 13.0254C5.75368 13.1402 5.80396 13.2122 5.91971 13.2643C5.99397 13.2977 5.99569 13.3003 5.93514 13.2878C5.67066 13.2333 5.6087 12.9164 5.82135 12.706C6.07667 12.4535 6.60461 12.5649 6.78591 12.9097C6.86208 13.0545 6.87091 13.3429 6.80451 13.517C6.6559 13.9068 6.22256 14.1117 5.78297 14.0002C5.48368 13.9242 5.36181 13.842 5.00097 13.4726C4.37395 12.8306 4.13053 12.7062 3.22657 12.566L3.05335 12.5391L3.25046 12.3737Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.308383 0.883984C2.40235 3.40996 3.84457 4.45213 4.00484 4.67231C4.13717 4.85412 4.08737 5.01757 3.86067 5.14567C3.7346 5.21689 3.47541 5.28905 3.34564 5.28905C3.19887 5.28905 3.14847 5.23278 3.14847 5.23278C3.06337 5.15255 3.01544 5.16658 2.5784 4.39555C1.97166 3.45981 1.46389 2.68357 1.45004 2.67057C1.41801 2.64052 1.41856 2.64153 2.51654 4.59413C2.69394 5.0011 2.55182 5.15049 2.55182 5.20845C2.55182 5.32636 2.51946 5.38834 2.37311 5.55059C2.12914 5.8211 2.02008 6.12505 1.94135 6.7541C1.8531 7.45926 1.60492 7.95737 0.917156 8.80989C0.514562 9.30893 0.448686 9.4004 0.3471 9.60153C0.219144 9.85482 0.183961 9.99669 0.169701 10.3165C0.154629 10.6547 0.183983 10.8732 0.287934 11.1965C0.378939 11.4796 0.473932 11.6665 0.716778 12.0403C0.926352 12.3629 1.04702 12.6027 1.04702 12.6965C1.04702 12.7711 1.06136 12.7712 1.38611 12.6983C2.16328 12.5239 2.79434 12.2171 3.14925 11.8411C3.36891 11.6084 3.42048 11.4799 3.42215 11.1611C3.42325 10.9525 3.41587 10.9088 3.35914 10.7888C3.2668 10.5935 3.09869 10.4311 2.72817 10.1794C2.2427 9.84953 2.03534 9.58398 1.97807 9.21878C1.93108 8.91913 1.98559 8.70771 2.25416 8.14825C2.53214 7.56916 2.60103 7.32239 2.64763 6.73869C2.67773 6.36158 2.71941 6.21286 2.82842 6.09348C2.94212 5.969 3.04447 5.92684 3.32584 5.88863C3.78457 5.82635 4.07667 5.70839 4.31677 5.48849C4.52505 5.29772 4.61221 5.11391 4.62558 4.8372L4.63574 4.62747L4.51934 4.49259C4.09783 4.00411 0.0261003 0.5 0.000160437 0.5C-0.00538105 0.5 0.133325 0.672804 0.308383 0.883984ZM1.28364 10.6992C1.37894 10.5314 1.3283 10.3158 1.16889 10.2104C1.01827 10.1109 0.78428 10.1578 0.78428 10.2875C0.78428 10.3271 0.806303 10.3559 0.855937 10.3813C0.939514 10.424 0.945581 10.4721 0.879823 10.5703C0.81323 10.6698 0.818604 10.7573 0.894991 10.8167C1.0181 10.9125 1.19237 10.8598 1.28364 10.6992Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.92523 5.99865C4.70988 6.06439 4.50054 6.29124 4.43574 6.5291C4.39621 6.67421 4.41864 6.92875 4.47785 7.00736C4.57351 7.13433 4.66602 7.16778 4.91651 7.16603C5.40693 7.16263 5.83327 6.95358 5.88284 6.69224C5.92347 6.47801 5.73622 6.18112 5.4783 6.05078C5.34521 5.98355 5.06217 5.95688 4.92523 5.99865ZM5.49853 6.44422C5.57416 6.33741 5.54107 6.22198 5.41245 6.14391C5.1675 5.99525 4.79708 6.11827 4.79708 6.34826C4.79708 6.46274 4.99025 6.58765 5.16731 6.58765C5.28516 6.58765 5.44644 6.5178 5.49853 6.44422Z",
            fill: "currentColor"
        })
    ]
});
function UniswapIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: UniswapIcon_svg
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/DataProviderIcon.tsx







const DataProviderIcon_useStyles = (0,src/* makeStyles */.ZL)()({
    cmc: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    coin_gecko: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    uniswap: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    }
});
function DataProviderIcon(props) {
    const { classes  } = DataProviderIcon_useStyles();
    switch(props.provider){
        case public_api_src/* DataProvider.COIN_GECKO */.FW.COIN_GECKO:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CoinGeckoIcon, {
                classes: {
                    root: classes.coin_gecko
                },
                viewBox: "0 0 16 16"
            }));
        case public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketCapIcon, {
                classes: {
                    root: classes.cmc
                },
                viewBox: "0 0 16 16"
            }));
        case public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UniswapIcon, {
                classes: {
                    root: classes.uniswap
                },
                viewBox: "0 0 16 16"
            }));
        default:
            (0,esm/* unreachable */.t1)(props.provider);
    }
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/FootnoteMenu.tsx
var FootnoteMenu = __webpack_require__(24600);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trader/TradeFooter.tsx









const TradeFooter_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        footer: {
            justifyContent: 'space-between'
        },
        footnote: {
            color: theme.palette.text.secondary,
            fontSize: 10,
            marginRight: theme.spacing(0.5)
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
        mask: {
            width: 40,
            height: 10
        }
    };
});
const TradeFooter = (props)=>{
    const { showDataProviderIcon =false , dataProvider , dataProviders =[] , onDataProviderChange  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(TradeFooter_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskIcon/* MaskTextIcon */.$i, {
                            classes: {
                                root: classes.mask
                            },
                            viewBox: "0 0 80 20"
                        })
                    })
                ]
            }),
            showDataProviderIcon ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.footMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.footnote,
                        children: t('plugin_trader_data_source')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                        options: dataProviders.map((x)=>({
                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DataProviderIcon, {
                                            provider: x
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.footName,
                                            children: (0,pipes/* resolveDataProviderName */.K7)(x)
                                        })
                                    ]
                                }),
                                value: x
                            })
                        ),
                        selectedIndex: typeof dataProvider !== 'undefined' ? dataProviders.indexOf(dataProvider) : -1,
                        onChange: onDataProviderChange
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})
                ]
            }) : null
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(9567);
// EXTERNAL MODULE: ./src/utils/shadow-root/ShadowRootComponents.tsx
var ShadowRootComponents = __webpack_require__(18119);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinMenu.tsx





const CoinMenu_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        symbol: {
            color: theme.palette.text.secondary,
            fontSize: 12,
            marginLeft: theme.spacing(0.5)
        }
    })
);
function CoinMenu(props) {
    const { options , selectedIndex =-1 , children , onChange  } = props;
    const { classes  } = CoinMenu_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
        onClose();
    };
    const onClose = ()=>setAnchorEl(null)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                onClick: onOpen,
                children: children
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ShadowRootComponents/* ShadowRootMenu */.dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                PaperProps: {
                    style: {
                        maxHeight: 192
                    }
                },
                children: options.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        selected: selectedIndex === i,
                        onClick: ()=>onSelect(x)
                        ,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: x.coin.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.symbol,
                                    children: [
                                        "(",
                                        x.coin.symbol,
                                        ")"
                                    ]
                                })
                            ]
                        })
                    }, x.value)
                )
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Transak/hooks/useTransakAllowanceCoin.ts

const ENV = {
    production: 'https://api.transak.com/api/v2/currencies/crypto-currencies',
    development: 'https://staging-api.transak.com/api/v2/currencies/crypto-currencies',
    test: 'https://development-api.transak.com/api/v2/currencies/crypto-currencies'
};
const useTransakAllowanceCoin_URL = ENV["production"];
function useTransakAllowanceCoin(coin) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (coin.contract_address) {
            const allowanceList = await fetch(useTransakAllowanceCoin_URL, {
                method: 'GET'
            }).then((res)=>res.json()
            ).then((res)=>res.response
            );
            return allowanceList.map((val)=>val.symbol
            ).includes(coin.symbol);
        }
        return false;
    }).value;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(2896);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/AlertTitle/AlertTitle.js
var AlertTitle = __webpack_require__(37049);
// EXTERNAL MODULE: ./src/plugins/Trader/constants/index.ts + 2 modules
var constants = __webpack_require__(22487);
;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useApprovedTokens.ts





function useApprovedTokens(token_address) {
    const [approvedTokens, setApprovedTokens] = (0,react.useState)([]);
    const tokens = (0,shared_src/* useValueRef */.E)(Trader_settings/* approvedTokensFromUniSwap */.EG);
    const onApprove = (0,react.useCallback)(()=>{
        if (!token_address || !token_address.length) return;
        const parsed = JSON.parse(tokens);
        if (parsed.length === constants/* APPROVED_TOKENS_MAX */.xh) parsed.shift();
        parsed.push(token_address);
        Trader_settings/* approvedTokensFromUniSwap.value */.EG.value = json_stable_stringify_default()(parsed);
    }, [
        tokens,
        token_address
    ]);
    (0,react.useEffect)(()=>{
        try {
            if (!tokens) Trader_settings/* approvedTokensFromUniSwap.value */.EG.value = json_stable_stringify_default()([]);
            else setApprovedTokens(JSON.parse(tokens));
        } catch  {
            setApprovedTokens([]);
        }
    }, [
        tokens
    ]);
    return {
        approvedTokens,
        onApprove
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var evm_pipes = __webpack_require__(54575);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(25071);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/CoinSafetyAlert.tsx






const CoinSafetyAlert_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            padding: theme.spacing(0, 2, 2, 2)
        },
        approve: {
            marginLeft: theme.spacing(1),
            whiteSpace: 'nowrap',
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.error.main
            }
        }
    };
});
function CoinSafetyAlert(props) {
    const { coin  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CoinSafetyAlert_useStyles();
    const { approvedTokens , onApprove  } = useApprovedTokens(coin.contract_address);
    if (!coin.contract_address) return null;
    if (approvedTokens.some((address)=>address === coin.contract_address
    )) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
            variant: "outlined",
            severity: "error",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                    children: t('plugin_trader_safety_alert_title')
                }),
                t('plugin_trader_safety_alert'),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "primary",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: (0,evm_pipes/* resolveTokenLinkOnExplorer */.yW)({
                                type: evm_types/* EthereumTokenType.Native */.Dr.Native,
                                address: coin.contract_address,
                                chainId: evm_types/* ChainId.Mainnet */.a_.Mainnet
                            }),
                            children: t('plugin_trader_view_on_etherscan')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            className: classes.approve,
                            onClick: onApprove,
                            children: t('plugin_trader_safety_agree')
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingViewDeck.tsx






















const TrendingViewDeck_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0,
            marginBottom: theme.spacing(2),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        content: {
            paddingTop: 0,
            paddingBottom: 0
        },
        header: {
            display: 'flex',
            position: 'relative'
        },
        headline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative'
        },
        title: {
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap'
        },
        name: {
            maxWidth: 200,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        symbol: {
            fontSize: 12,
            color: theme.palette.text.secondary,
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5)
        },
        buy: {
            right: 0,
            position: 'absolute'
        },
        arrowIcon: {
            color: theme.palette.text.primary
        },
        rank: {
            color: theme.palette.text.secondary,
            fontWeight: 300,
            marginRight: theme.spacing(1)
        },
        avatar: {
            backgroundColor: theme.palette.common.white
        },
        avatarFallback: {
            width: 40,
            height: 40
        }
    };
});
function TrendingViewDeck(props) {
    var ref, ref1;
    const { coins , currency , trending , dataProvider , stats , children , showDataProviderIcon =false , TrendingCardProps , dataProviders =[] ,  } = props;
    const { coin: coin1 , market  } = trending;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(TrendingViewDeck_useStyles(), props);
    // #region buy
    const transakPluginEnabled = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any').find((x)=>x.ID === plugin_infra_src/* PluginId.Transak */.je.Transak
    );
    const account = (0,useAccount/* useAccount */.m)();
    const isAllowanceCoin = useTransakAllowanceCoin(coin1);
    const { setDialog: setBuyDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    const onBuyButtonClicked = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            code: coin1.symbol,
            address: account
        });
    }, [
        account,
        trending === null || trending === void 0 ? void 0 : (ref = trending.coin) === null || ref === void 0 ? void 0 : ref.symbol
    ]);
    // #endregion
    // #region sync with settings
    const onDataProviderChange = (0,react.useCallback)((option)=>{
        Trader_settings/* currentDataProviderSettings.value */.gG.value = option.value;
    }, []);
    // #endregion
    // #region switch between coins with the same symbol
    const currentPreferredCoinIdSettings = (0,shared_src/* useValueRef */.E)((0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider));
    const onCoinMenuChange = (0,react.useCallback)((option)=>{
        const settings = JSON.parse(currentPreferredCoinIdSettings);
        settings[option.coin.symbol.toLowerCase()] = option.value;
        (0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider).value = json_stable_stringify_default()(settings);
    }, [
        dataProvider,
        currentPreferredCoinIdSettings
    ]);
    var ref2, ref3, ref4, ref5;
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingCard, {
        ...TrendingCardProps,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                className: classes.header,
                avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                    href: (0,head/* default */.Z)(coin1.home_urls),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        className: classes.avatar,
                        src: coin1.image_url,
                        alt: coin1.symbol,
                        children: trending.coin.contract_address ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                            classes: {
                                icon: classes.avatarFallback
                            },
                            address: trending.coin.contract_address
                        }) : null
                    })
                }),
                title: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.headline,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.title,
                            variant: "h6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Linking, {
                                    href: (0,head/* default */.Z)(coin1.home_urls),
                                    LinkProps: {
                                        className: classes.name,
                                        title: coin1.name.toUpperCase()
                                    },
                                    children: coin1.name.toUpperCase()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.symbol,
                                    children: [
                                        "(",
                                        coin1.symbol.toUpperCase(),
                                        ")"
                                    ]
                                })
                            ]
                        }),
                        coins.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMenu, {
                            options: coins.map((coin)=>({
                                    coin,
                                    value: coin.id
                                })
                            ),
                            selectedIndex: coins.findIndex((x)=>x.id === coin1.id
                            ),
                            onChange: onCoinMenuChange,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                className: classes.arrowIcon,
                                size: "small",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})
                            })
                        }) : null,
                        transakPluginEnabled && account && trending.coin.symbol && isAllowanceCoin ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.buy,
                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MonetizationOnOutlined/* default */.Z, {}),
                            variant: "text",
                            color: "primary",
                            onClick: onBuyButtonClicked,
                            children: t('buy_now')
                        }) : null
                    ]
                }),
                subheader: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body1",
                        children: [
                            market ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    typeof coin1.market_cap_rank === 'number' ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.rank,
                                        title: "Index Cap Rank",
                                        children: [
                                            "#",
                                            coin1.market_cap_rank
                                        ]
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedCurrency */.bO, {
                                            value: (ref3 = dataProvider === public_api_src/* DataProvider.COIN_MARKET_CAP */.FW.COIN_MARKET_CAP ? (ref2 = (ref1 = (0,last/* default */.Z)(stats)) === null || ref1 === void 0 ? void 0 : ref1[1]) !== null && ref2 !== void 0 ? ref2 : market.current_price : market.current_price) !== null && ref3 !== void 0 ? ref3 : 0,
                                            sign: currency.symbol,
                                            formatter: formatter/* formatCurrency */.xG
                                        })
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: t('plugin_trader_no_data')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChanged, {
                                amount: (ref5 = (ref4 = market === null || market === void 0 ? void 0 : market.price_change_percentage_1h) !== null && ref4 !== void 0 ? ref4 : market === null || market === void 0 ? void 0 : market.price_change_percentage_24h) !== null && ref5 !== void 0 ? ref5 : 0
                            })
                        ]
                    })
                }),
                disableTypography: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    dataProvider === public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO && /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinSafetyAlert, {
                        coin: trending.coin
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                        className: classes.body,
                        elevation: 0,
                        children: children
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeFooter, {
                classes: {
                    footer: classes.footer
                },
                showDataProviderIcon: showDataProviderIcon,
                dataProvider: dataProvider,
                dataProviders: dataProviders,
                onDataProviderChange: onDataProviderChange
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useAvailableCoins.ts


function useAvailableCoins(type, keyword, dataProvider) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!keyword) return [];
        return messages/* PluginTraderRPC.getAvailableCoins */.V.getAvailableCoins(keyword, type, dataProvider);
    }, [
        dataProvider,
        type,
        keyword
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Trader/trending/useCurrentCoinId.ts



function usePreferredCoinId(keyword, dataProvider) {
    const keyword_ = keyword.toLowerCase();
    const settings = (0,shared_src/* useValueRef */.E)((0,Trader_settings/* getCurrentPreferredCoinIdSettings */.Lc)(dataProvider));
    return (0,react.useMemo)(()=>{
        try {
            const parsedSettings = JSON.parse(settings);
            var _keyword_;
            return (_keyword_ = parsedSettings[keyword_]) !== null && _keyword_ !== void 0 ? _keyword_ : '';
        } catch  {
            return '';
        }
    }, [
        keyword_,
        settings
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(33517);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(44755);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(11304);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TraderView.tsx























const TraderView_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>{
    return {
        root: props.isPopper ? {
            width: 450,
            boxShadow: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px' : 'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px'
        } : {
            width: '100%',
            boxShadow: 'none',
            borderRadius: 0,
            marginBottom: theme.spacing(2)
        },
        body: props.isPopper ? {
            minHeight: 303,
            overflow: 'hidden',
            border: `solid 1px ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column'
        } : {},
        footer: props.isPopper ? {} : {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        footerSkeleton: props.isPopper ? {} : {
            borderBottom: `solid 1px ${theme.palette.divider}`
        },
        tabs: {
            height: props.isPopper ? 35 : 'auto',
            width: '100%',
            minHeight: 'unset',
            borderTop: props.isPopper ? 'unset' : `solid 1px ${theme.palette.divider}`,
            borderBottom: props.isPopper ? 'unset' : `solid 1px ${theme.palette.divider}`
        },
        content: props.isPopper ? {} : {
            padding: 0,
            border: 'none'
        },
        tab: {
            height: props.isPopper ? 35 : 'auto',
            minHeight: 'unset',
            minWidth: 'unset'
        },
        tradeViewRoot: props.isPopper ? {
            maxWidth: 380
        } : {},
        priceChartRoot: props.isPopper ? {
            flex: 1
        } : {}
    };
});
function TraderView(props) {
    const { name , tagType , dataProviders , isPopper =true  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TraderView_useStyles({
        isPopper
    });
    const dataProvider = useCurrentDataProvider(dataProviders);
    const [tabIndex, setTabIndex] = (0,react.useState)(dataProvider !== public_api_src/* DataProvider.UNISWAP_INFO */.FW.UNISWAP_INFO ? 1 : 0);
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    // #region track network type
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    (0,react.useEffect)(()=>setTabIndex(0)
    , [
        networkType
    ]);
    // #endregion
    // #region multiple coins share the same symbol
    const { value: coins = []  } = useAvailableCoins(tagType, name, dataProvider);
    // #endregion
    // #region merge trending
    const coinId = usePreferredCoinId(name, dataProvider);
    const trendingById = useTrendingById(name ? '' : coinId, dataProvider);
    const trendingByKeyword = useTrendingByKeyword(tagType, coinId ? '' : name, dataProvider);
    const { value: { currency , trending  } , error: trendingError , loading: loadingTrending ,  } = coinId ? trendingById : trendingByKeyword;
    // #endregion
    const coinSymbol = ((trending === null || trending === void 0 ? void 0 : trending.coin.symbol) || '').toLowerCase();
    var _contract_address;
    // #region swap
    const { value: tokenDetailed  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)(coinSymbol === 'eth' ? evm_types/* EthereumTokenType.Native */.Dr.Native : evm_types/* EthereumTokenType.ERC20 */.Dr.ERC20, coinSymbol === 'eth' ? '' : (_contract_address = trending === null || trending === void 0 ? void 0 : trending.coin.contract_address) !== null && _contract_address !== void 0 ? _contract_address : '');
    // #endregion
    // #region stats
    const [days, setDays] = (0,react.useState)(PriceChartDaysControl/* Days.ONE_WEEK */.h.ONE_WEEK);
    const { value: stats = [] , loading: loadingStats , retry: retryStats ,  } = usePriceStats({
        coinId: trending === null || trending === void 0 ? void 0 : trending.coin.id,
        dataProvider: trending === null || trending === void 0 ? void 0 : trending.dataProvider,
        currency: trending === null || trending === void 0 ? void 0 : trending.currency,
        days
    });
    // #endregion
    // #region current data provider switcher
    const DataProviderSwitcher = (0,utils/* useSettingsSwitcher */.MN)(Trader_settings/* currentDataProviderSettings */.gG, dataProviders, pipes/* resolveDataProviderName */.K7);
    // #endregion
    // #region api ready callback
    (0,react.useEffect)(()=>{
        var ref;
        (ref = props.onUpdate) === null || ref === void 0 ? void 0 : ref.call(props);
    }, [
        tabIndex,
        loadingTrending
    ]);
    // #endregion
    // #region no available providers
    if (dataProviders.length === 0) return null;
    // #endregion
    // #region error handling
    // error: unknown coin or api error
    if (trendingError) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewError, {
        message: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            children: [
                t('plugin_trader_fail_to_load'),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    color: "primary",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: (0,pipes/* resolveDataProviderLink */.tA)(dataProvider),
                    children: (0,pipes/* resolveDataProviderName */.K7)(dataProvider)
                }),
                "."
            ]
        }),
        reaction: DataProviderSwitcher,
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        }
    }));
    // #endregion
    // #region if the coin is a native token or contract address exists
    const isSwappable = (!!(trending === null || trending === void 0 ? void 0 : trending.coin.contract_address) || (0,token/* isNativeTokenSymbol */.VD)(coinSymbol)) && chainIdValid;
    // #endregion
    // #region display loading skeleton
    if (!currency || !trending || loadingTrending) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingViewSkeleton, {
        classes: {
            footer: classes.footerSkeleton
        },
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        }
    }));
    // #endregion
    // #region tabs
    const { coin , market , tickers  } = trending;
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_market')
        }, "market"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_price')
        }, "price"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_exchange')
        }, "exchange"),
        isSwappable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_trader_tab_swap')
        }, "swap") : null, 
    ].filter(Boolean);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TrendingViewDeck, {
        classes: {
            body: classes.body,
            footer: classes.footer,
            content: classes.content
        },
        stats: stats,
        coins: coins,
        currency: currency,
        trending: trending,
        dataProvider: dataProvider,
        showDataProviderIcon: tabIndex < 3,
        dataProviders: dataProviders,
        TrendingCardProps: {
            classes: {
                root: classes.root
            }
        },
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
            tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CoinMarketPanel, {
                dataProvider: dataProvider,
                trending: trending
            }) : null,
            tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    market ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChangedTable, {
                        market: market
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChart, {
                        classes: {
                            root: classes.priceChartRoot
                        },
                        coin: coin,
                        currency: currency,
                        stats: stats,
                        retry: retryStats,
                        loading: loadingStats,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceChartDaysControl/* PriceChartDaysControl */.P, {
                            days: days,
                            onDaysChange: setDays
                        })
                    })
                ]
            }) : null,
            tabIndex === 2 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TickersTable, {
                tickers: tickers,
                dataProvider: dataProvider
            }) : null,
            tabIndex === 3 && isSwappable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TradeView, {
                classes: {
                    root: classes.tradeViewRoot
                },
                TraderProps: {
                    coin,
                    tokenDetailed
                }
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/trader/useTargetChainIdContext.ts
var useTargetChainIdContext = __webpack_require__(17508);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/SearchResultInspector.tsx






function SearchResultInspector(props) {
    const keyword = useSearchedKeyword();
    var ref;
    const [_, type, name = ''] = (ref = keyword.match(/([#$])(\w+)/)) !== null && ref !== void 0 ? ref : [];
    const type_ = type === '$' ? types/* TagType.CASH */.Qy.CASH : types/* TagType.HASH */.Qy.HASH;
    const { value: dataProviders = []  } = useAvailableDataProviders(type_, name);
    if (!name || !(dataProviders === null || dataProviders === void 0 ? void 0 : dataProviders.length)) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderView, {
            isPopper: false,
            name: name,
            tagType: type_,
            dataProviders: dataProviders
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.61_2f50eb45a1501445764b3dbbd8573d7c/node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__(36299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Popper/Popper.js
var Popper = __webpack_require__(37674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Fade/Fade.js
var Fade = __webpack_require__(53668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useLocation.js
var useLocation = __webpack_require__(85337);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useWindowScroll.js
var useWindowScroll = __webpack_require__(92282);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(98697);
;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TrendingPopper.tsx








function TrendingPopper(props) {
    var ref1;
    const popperRef = (0,react.useRef)(null);
    const [freezed, setFreezed] = (0,react.useState)(false) // disable any click
    ;
    const [locked, setLocked] = (0,react.useState)(false) // state is updating, lock UI
    ;
    const [name, setName] = (0,react.useState)('');
    const [type, setType] = (0,react.useState)();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [availableDataProviders, setAvailableDataProviders] = (0,react.useState)([]);
    // #region select token and provider dialog could be open by trending view
    const onFreezed = (0,react.useCallback)((ev)=>setFreezed(ev.open)
    , []);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectTokenDialogUpdated */.R.events.selectTokenDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectWalletDialogUpdated */.R.events.selectWalletDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletConnectQRCodeDialogUpdated */.R.events.walletConnectQRCodeDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated, onFreezed);
    (0,shared_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapSettingsUpdated */.A.swapSettingsUpdated, onFreezed);
    // #endregion
    // #region open or close popper
    // open popper from message center
    (0,react.useEffect)(()=>messages/* PluginTraderMessages.cashTagObserved.on */.A.cashTagObserved.on((ev)=>{
            const update = ()=>{
                setLocked(true);
                setName(ev.name);
                setType(ev.type);
                setAnchorEl(ev.element);
                setAvailableDataProviders(ev.dataProviders);
                setLocked(false);
            };
            // observe the same element
            if (anchorEl === ev.element) return;
            // close popper on previous element
            if (anchorEl) {
                setAnchorEl(null);
                setTimeout(update, 400);
                return;
            }
            update();
        })
    , [
        anchorEl
    ]);
    // close popper if location was changed
    const location = (0,useLocation/* default */.Z)();
    (0,react.useEffect)(()=>setAnchorEl(null)
    , [
        (ref1 = location.state) === null || ref1 === void 0 ? void 0 : ref1.key,
        location.href
    ]);
    // close popper if scroll out of visual screen
    const position = (0,useWindowScroll/* default */.Z)();
    (0,react.useEffect)(()=>{
        if (!anchorEl) return;
        const { top  } = anchorEl.getBoundingClientRect();
        if (top < 0 || top > document.documentElement.clientHeight // out off bottom bound
        ) setAnchorEl(null);
    }, [
        anchorEl,
        Math.floor(position.y / 50)
    ]);
    // #endregion
    if (locked) return null;
    if (!anchorEl || !type) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ClickAwayListener/* default */.Z, {
        onClickAway: ()=>{
            if (!freezed) setAnchorEl(null);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Popper/* default */.Z, {
            open: Boolean(anchorEl),
            anchorEl: anchorEl,
            disablePortal: true,
            transition: true,
            style: {
                zIndex: 100,
                margin: 4
            },
            popperRef: (ref)=>popperRef.current = ref
            ,
            ...props.PopperProps,
            children: ({ TransitionProps  })=>{
                var ref2;
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
                    in: Boolean(anchorEl),
                    ...TransitionProps,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: (ref2 = props.children) === null || ref2 === void 0 ? void 0 : ref2.call(props, name, type, availableDataProviders, ()=>{
                            return setTimeout(()=>{
                                var ref;
                                return (ref = popperRef.current) === null || ref === void 0 ? void 0 : ref.update();
                            }, 100);
                        })
                    })
                }));
            }
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/trending/TagInspector.tsx







function TagInspector(props) {
    // build availability cache in the background page
    useAvailableDataProviders(types/* TagType.CASH */.Qy.CASH, 'BTC');
    const createTrendingView = (0,react.useCallback)((name, type, dataProviders, reposition)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TraderView, {
            name: name,
            tagType: type,
            dataProviders: dataProviders,
            onUpdate: reposition
        }));
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(useTargetChainIdContext/* TargetChainIdContext.Provider */.Z.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingPopper, {
            children: createTrendingView
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/SNSAdaptor/index.tsx






const sns = {
    ...base/* base */.u,
    ...base_deferred/* baseDeferred */.d,
    init (signal) {},
    SearchResultBox: SearchResultInspector,
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TagInspector, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TraderDialog/* TraderDialog */.F, {})
            ]
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 24600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FootnoteMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9567);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60822);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76108);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        link: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        title: {
            fontSize: 10,
            color: theme.palette.text.secondary
        }
    })
);
function FootnoteMenu(props) {
    var ref;
    const { children , options , selectedIndex =-1 , onChange  } = props;
    const { classes  } = useStyles();
    const onSelect = (option)=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(option);
    };
    const [menu, openMenu] = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useMenu */ .H9)(options.map((x, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            selected: selectedIndex === i,
            onClick: ()=>onSelect(x)
            ,
            children: x.name
        }, x.value)
    ), false, {
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: classes.link,
                color: "inherit",
                underline: "none",
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: classes.title,
                        variant: "subtitle2",
                        children: (ref = options[selectedIndex]) === null || ref === void 0 ? void 0 : ref.name
                    }),
                    children
                ]
            }),
            menu
        ]
    }));
}


/***/ }),

/***/ 88347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Days),
/* harmony export */   "P": () => (/* binding */ PriceChartDaysControl)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60822);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18254);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
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
var Days;
(function(Days) {
    Days[Days["MAX"] = 0] = "MAX";
    Days[Days["ONE_DAY"] = 1] = "ONE_DAY";
    Days[Days["ONE_WEEK"] = 7] = "ONE_WEEK";
    Days[Days["TWO_WEEKS"] = 14] = "TWO_WEEKS";
    Days[Days["ONE_MONTH"] = 30] = "ONE_MONTH";
    Days[Days["THREE_MONTHS"] = 90] = "THREE_MONTHS";
    Days[Days["ONE_YEAR"] = 365] = "ONE_YEAR";
})(Days || (Days = {}));
function PriceChartDaysControl(props) {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: [
            Days.ONE_DAY,
            Days.ONE_WEEK,
            Days.TWO_WEEKS,
            Days.ONE_MONTH,
            Days.THREE_MONTHS,
            Days.ONE_YEAR,
            Days.MAX, 
        ].map((days)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.link,
                onClick: ()=>{
                    var ref;
                    return (ref = props.onDaysChange) === null || ref === void 0 ? void 0 : ref.call(props, days);
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.text,
                    component: "span",
                    color: props.days === days ? 'primary' : 'textSecondary',
                    children: (0,_pipes__WEBPACK_IMPORTED_MODULE_2__/* .resolveDaysName */ .xo)(days)
                })
            }, days));
        })
    }));
}


/***/ }),

/***/ 69429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ baseDeferred)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(47545);
// EXTERNAL MODULE: ./src/plugins/Trader/types/index.ts + 2 modules
var types = __webpack_require__(46347);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 2 modules
var typed_message = __webpack_require__(23956);
;// CONCATENATED MODULE: ./src/plugins/Trader/messages/TypedMessageCashTrending.tsx








const isCashTagMessage = (m)=>(0,src/* isTypedMessageAnchor */.bj)(m) && [
        'cash',
        'hash'
    ].includes(m.category) && !/#\w+lbp$/i.test(m.content)
;
function makeTypedMessageCashTrending(message) {
    return {
        ...message,
        type: 'x-cash-trending',
        name: message.content.substr(1).toLowerCase()
    };
}
(0,typed_message/* registerTypedMessageRenderer */.vq)('x-cash-trending', {
    component: DefaultTypedMessageCashTrendingRenderer,
    id: 'com.maskbook.trader.x-cash-trending',
    priority: 0
});
function DefaultTypedMessageCashTrendingRenderer(props) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [openTimer, setOpenTimer] = (0,react.useState)(null);
    const onMouseOver = (ev)=>{
        // cache for async operations
        const element = ev.currentTarget;
        if (openTimer !== null) clearTimeout(openTimer);
        setOpenTimer(setTimeout(async ()=>{
            if (props.message.category !== 'cash' && props.message.category !== 'hash') return;
            const { name , category  } = props.message;
            const type = category === 'cash' ? types/* TagType.CASH */.Qy.CASH : types/* TagType.HASH */.Qy.HASH;
            const dataProviders = await messages/* PluginTraderRPC.getAvailableDataProviders */.V.getAvailableDataProviders(type, name);
            const tradeProviders = await messages/* PluginTraderRPC.getAvailableTraderProviders */.V.getAvailableTraderProviders(chainId);
            if (!dataProviders.length) return;
            messages/* PluginTraderMessages.cashTagObserved.sendToLocal */.A.cashTagObserved.sendToLocal({
                name,
                type,
                element,
                dataProviders
            });
        }, 500));
    };
    const onMouseLeave = (ev)=>{
        if (openTimer !== null) clearTimeout(openTimer);
    };
    const onClick = (ev)=>{
        ev.stopPropagation();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        component: "span",
        color: "textPrimary",
        variant: "body1",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: props.message.href,
            onMouseOver: onMouseOver,
            onMouseLeave: onMouseLeave,
            onClick: onClick,
            children: props.message.content
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Trader/base-deferred.ts

const baseDeferred = {
    typedMessageTransformer (message) {
        return {
            ...message,
            items: message.items.map((m)=>isCashTagMessage(m) ? makeTypedMessageCashTrending(m) : m
            )
        };
    }
};


/***/ }),

/***/ 71651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94531);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57887);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);


/***/ }),

/***/ 85415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6057);

function formatElapsed(from) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const elapsed = Date.now() - from;
    if (elapsed < msPerMinute) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_seconds_ago', {
        seconds: Math.round(elapsed / 1000)
    });
    if (elapsed < msPerHour) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_minutes_ago', {
        minutes: Math.round(elapsed / msPerMinute)
    });
    if (elapsed < msPerDay) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_hours_ago', {
        hours: Math.round(elapsed / msPerHour)
    });
    if (elapsed < msPerMonth) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_days_ago', {
        days: Math.round(elapsed / msPerDay)
    });
    if (elapsed < msPerYear) return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_months_ago', {
        months: Math.round(elapsed / msPerMonth)
    });
    return _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('relative_time_years_ago', {
        years: Math.round(elapsed / msPerYear)
    });
}


/***/ }),

/***/ 23956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts

function getTypedMessageContent(message) {
    if ((0,src/* isTypedMessageText */.Rz)(message)) return message.content;
    if ((0,src/* isTypedMessageAnchor */.bj)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts




/***/ }),

/***/ 8231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$i": () => (/* binding */ MaskTextIcon),
/* harmony export */   "ec": () => (/* binding */ MaskIcon),
/* harmony export */   "$T": () => (/* binding */ MaskIconOutlined),
/* harmony export */   "LT": () => (/* binding */ MaskSharpIcon),
/* harmony export */   "Vh": () => (/* binding */ MaskSharpIconOfSize),
/* harmony export */   "x7": () => (/* binding */ MaskFilledIcon)
/* harmony export */ });
/* unused harmony export WalletSharp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5617);
if (1711 != __webpack_require__.j) {
	/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28527);
}

/**
 * This icon should be sync with https://mask.io/img/MB--CircleCanvas--WhiteOverBlue.svg
 */ 
const MaskSmileFaceSVG = ({ size =24  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 600 600",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                cx: "300",
                cy: "300",
                r: "300",
                fill: "#1C68F3"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fill: "#fff",
                d: "m480 200h-360v-44c0-19.882 16.118-36 36-36h288c19.882 0 36 16.118 36 36v44zm0 30v100h-60-231-21.912c13.661 60.677 67.878 106 132.68 106 53.575 0 99.914-30.978 122.08-76h58.144v84c0 19.882-16.118 36-36 36h-288c-19.882 0-36-16.118-36-36v-214h360zm-267.78 130l175.11 5e-6c-19.092 27.914-51.184 46.232-87.555 46.232s-68.463-18.318-87.555-46.232zm-44.65-58h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48zm154 0h30.687c3.3742-10.445 13.178-18 24.746-18s21.372 7.5549 24.746 18h30.687c-3.8818-27.138-27.221-48-55.433-48s-51.551 20.862-55.433 48z"
            })
        ]
    })
;
const MaskSmileFaceSharpSVG = ({ size =19  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 38 38",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    })
;
const WalletSharpSVG = ({ size  })=>/*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: "feather feather-alert-circle",
        children: [
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "8",
                x2: "12",
                y2: "14"
            }),
            /*#__PURE__*/ _jsx("line", {
                x1: "12",
                y1: "17",
                x2: "12.01",
                y2: "17"
            })
        ]
    })
;
const MaskFilledSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z",
            fill: "#0F1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M20.8466 9.8044V14.1215H7.68749L7.12132 14.1216C7.72056 16.7411 10.0987 18.6977 12.9412 18.6977C15.2911 18.6977 17.3237 17.3604 18.2961 15.4168L20.8466 15.4167V19.0431C20.8466 19.9014 20.1396 20.5973 19.2675 20.5973H6.63476C5.76265 20.5973 5.05566 19.9014 5.05566 19.0431V9.8044H20.8466ZM16.7816 15.4168C15.9442 16.6218 14.5365 17.4126 12.9412 17.4126C11.3458 17.4126 9.93816 16.6218 9.10072 15.4168H16.7816ZM9.57363 10.8405C8.33615 10.8405 7.3124 11.7411 7.14213 12.9128L8.48817 12.9128C8.63617 12.4618 9.0662 12.1357 9.57363 12.1357C10.0811 12.1357 10.5111 12.4618 10.6591 12.9128L12.0051 12.9128C11.8349 11.7411 10.8111 10.8405 9.57363 10.8405ZM16.3287 10.8405C15.0912 10.8405 14.0674 11.7411 13.8972 12.9128L15.2432 12.9128C15.3912 12.4618 15.8212 12.1357 16.3287 12.1357C16.8361 12.1357 17.2661 12.4618 17.4141 12.9128L18.7601 12.9128C18.5899 11.7411 17.5661 10.8405 16.3287 10.8405ZM19.2675 5.05554C20.1396 5.05554 20.8466 5.75137 20.8466 6.60971V8.50926H5.05566V6.60971C5.05566 5.75137 5.76265 5.05554 6.63476 5.05554H19.2675Z",
            fill: "white"
        })
    ]
});
const MaskSmileFaceOutlinedSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 42 42",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            stroke: "#fff",
            strokeWidth: "3",
            d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
            clipRule: "evenodd"
        })
    ]
});
const MaskTextSVG = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 80 20",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m18.902 25.67h1.82v18.33h-3.744v-10.14l-5.668 7.956-5.694-7.956v10.14h-3.718v-18.33h1.82l7.592 10.504zm15.912 4.212h3.614v14.118h-3.614v-1.04c-1.17.78-2.574 1.248-4.134 1.248-4.42 0-7.02-3.562-7.02-7.306 0-3.77 2.6-7.306 7.02-7.306 1.482 0 2.938.468 4.134 1.17zm0 9.88v-5.668c-.884-.754-2.132-1.222-3.484-1.222-2.574 0-4.186 1.924-4.186 4.03 0 2.132 1.638 4.056 4.186 4.056 1.378 0 2.6-.442 3.484-1.196zm6.084 3.094 1.352-2.678c1.742.754 3.068 1.144 4.836 1.144 1.664 0 2.314-.624 2.314-1.352 0-.806-.806-1.17-2.99-1.638-3.042-.676-5.252-1.664-5.252-4.394 0-2.548 2.106-4.316 5.382-4.316 2.21 0 3.978.52 5.512 1.144l-1.196 2.652c-1.378-.52-2.99-.91-4.394-.91-1.378 0-2.08.494-2.08 1.248 0 .78.858 1.144 3.12 1.612 3.276.676 5.174 1.82 5.174 4.394 0 2.678-2.054 4.446-5.668 4.446-2.444 0-4.03-.338-6.11-1.352zm23.062-7.462 5.226 8.606h-4.004l-3.614-5.772-2.73 2.626v3.146h-3.614v-19.604h3.614v11.544l6.032-6.058h4.238z",
        fill: "currentColor",
        transform: "translate(0 -24)"
    })
});
function MaskTextIcon(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskTextSVG
    }));
}
function MaskIcon(props) {
    const { size =24  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        ...props,
        viewBox: `0 0 ${size} ${size}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSVG, {
            size: props.size
        })
    }));
}
function MaskIconOutlined(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: MaskSmileFaceOutlinedSVG
    }));
}
function MaskSharpIcon(props) {
    const { size =17 , color  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        style: {
            width: size,
            height: size
        },
        color: color,
        viewBox: "0 0 38 38",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.8 0H34.2C36.2987 0 38 1.70132 38 3.8V34.2C38 36.2987 36.2987 38 34.2 38H3.8C1.70132 38 0 36.2987 0 34.2V3.8C0 1.70132 1.70132 0 3.8 0ZM35.0939 21.6824V12.7412H2.90569V31.8753C2.90569 33.653 4.34681 35.0941 6.12451 35.0941H31.8751C33.6528 35.0941 35.0939 33.653 35.0939 31.8753V24.3648L29.8951 24.3649C27.9129 28.3903 23.7696 31.16 18.9795 31.16C13.1854 31.16 8.3378 27.1076 7.11632 21.6825L8.2704 21.6825V21.6824H35.0939ZM18.9795 28.4984C22.2314 28.4984 25.1008 26.8606 26.8078 24.3649H11.1511C12.8581 26.8606 15.7275 28.4984 18.9795 28.4984ZM7.15874 19.1789C7.50581 16.7524 9.59263 14.8871 12.1151 14.8871C14.6376 14.8871 16.7244 16.7524 17.0715 19.1789L14.3277 19.1789C14.026 18.245 13.1494 17.5694 12.1151 17.5694C11.0808 17.5694 10.2042 18.245 9.9025 19.1789L7.15874 19.1789ZM20.9282 19.1789C21.2752 16.7524 23.362 14.8871 25.8845 14.8871C28.407 14.8871 30.4938 16.7524 30.8409 19.1789L28.0971 19.1789C27.7954 18.245 26.9189 17.5694 25.8845 17.5694C24.8502 17.5694 23.9736 18.245 23.6719 19.1789L20.9282 19.1789ZM35.0939 6.12473C35.0939 4.34702 33.6528 2.90591 31.8751 2.90591H6.12451C4.34681 2.90591 2.90569 4.34702 2.90569 6.12473V10.0588H35.0939V6.12473Z"
        })
    }));
}
function MaskSharpIconOfSize(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MaskSmileFaceSharpSVG, {
            size: props.size
        })
    }));
}
function WalletSharp(props) {
    const { size =20  } = props;
    return(/*#__PURE__*/ _jsx(SvgIcon, {
        ...props,
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ _jsx(WalletSharpSVG, {
            size: size
        })
    }));
}
function MaskFilledIcon(props) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    const icon = new URL(/* asset import */ __webpack_require__(33265), __webpack_require__.b).toString();
    const icon_dark = new URL(/* asset import */ __webpack_require__(1164), __webpack_require__.b).toString();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
        src: theme.palette.mode === 'light' ? icon : icon_dark,
        style: {
            width: props.size,
            height: props.size
        }
    }));
}


/***/ }),

/***/ 44755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25071);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87262);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48981);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 33265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 1164:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c3a84345cc92a169d393.png";

/***/ })

}]);