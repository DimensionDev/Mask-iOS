(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1737],{

/***/ 88233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 77224:
/***/ ((module) => {

(function() {
	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
		for (var i = 0; i < randseed.length; i++) {
			randseed[i] = 0;
		}
		for (var i = 0; i < seed.length; i++) {
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
		}
	}

	function rand() {
		// based on Java's String.hashCode(), expanded to 4 32bit values
		var t = randseed[0] ^ (randseed[0] << 11);

		randseed[0] = randseed[1];
		randseed[1] = randseed[2];
		randseed[2] = randseed[3];
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

		return (randseed[3]>>>0) / ((1 << 31)>>>0);
	}

	function createColor() {
		//saturation is the whole color spectrum
		var h = Math.floor(rand() * 360);
		//saturation goes from 40 to 100, it avoids greyish colors
		var s = ((rand() * 60) + 40) + '%';
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';

		var color = 'hsl(' + h + ',' + s + ',' + l + ')';
		return color;
	}

	function createImageData(size) {
		var width = size; // Only support square icons for now
		var height = size;

		var dataWidth = Math.ceil(width / 2);
		var mirrorWidth = width - dataWidth;

		var data = [];
		for(var y = 0; y < height; y++) {
			var row = [];
			for(var x = 0; x < dataWidth; x++) {
				// this makes foreground and background color to have a 43% (1/2.3) probability
				// spot color has 13% chance
				row[x] = Math.floor(rand()*2.3);
			}
			var r = row.slice(0, mirrorWidth);
			r.reverse();
			row = row.concat(r);

			for(var i = 0; i < row.length; i++) {
				data.push(row[i]);
			}
		}

		return data;
	}

  function buildOpts(opts) {
    var newOpts = {};

		newOpts.size = opts.size || 8;
		newOpts.scale = opts.scale || 4;
		newOpts.seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);
		newOpts.color = opts.color || createColor();
		newOpts.bgcolor = opts.bgcolor || createColor();
		newOpts.spotcolor = opts.spotcolor || createColor();

		seedrand(newOpts.seed);

    return newOpts;
  }

  function renderIcon(opts, canvas) {
    var opts = buildOpts(opts || {});

		var imageData = createImageData(opts.size);
		var width = Math.sqrt(imageData.length);

		canvas.width = canvas.height = opts.size * opts.scale;

		var cc = canvas.getContext('2d');
		cc.fillStyle = opts.bgcolor;
		cc.fillRect(0, 0, canvas.width, canvas.height);
		cc.fillStyle = opts.color;

		for(var i = 0; i < imageData.length; i++) {

			// if data is 0, leave the background
			if(imageData[i]) {
				var row = Math.floor(i / width);
				var col = i % width;

				// if data is 2, choose spot color, if 1 choose foreground
			  cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;

				cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
			}
		}
    return canvas;
  }

	function createIcon(opts) {
    var opts = buildOpts(opts || {});
		var canvas = document.createElement('canvas');

    renderIcon(opts, canvas);

		return canvas;
	}

	var api = {
    create: createIcon,
    render: renderIcon
  };

  if (true) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.blockies = api;
  }

})();


/***/ }),

/***/ 64271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = window.DOMPurify || (window.DOMPurify = (__webpack_require__(22214)["default"]) || __webpack_require__(22214));

/***/ }),

/***/ 96782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ RefreshIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const RefreshIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Refresh', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.433 7.174l.975.683a.5.5 0 01-.13.884L5.89 9.858a.5.5 0 01-.657-.461L5.136 5.84a.5.5 0 01.787-.423l.806.564A8 8 0 114 12h2.001a6 6 0 102.433-4.826z",
        fill: "#1C68F3"
    })
}), '0 0 24 24');


/***/ }),

/***/ 62245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(63151);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(65631);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/base.tsx
var dHEDGE_base = __webpack_require__(28864);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(96782);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(50585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(22234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(4834);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(70008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(40158);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(30592);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(47930);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(13484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/constants.ts
var constants = __webpack_require__(84394);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/messages.ts
var messages = __webpack_require__(21326);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/types.tsx
var types = __webpack_require__(63360);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/contracts/useDHedgePool.ts + 3 modules
var useDHedgePool = __webpack_require__(85026);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants_constants = __webpack_require__(24403);
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { sUSD_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useWindowSize.js
var useWindowSize = __webpack_require__(11485);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/Refresh.js
var icons_material_Refresh = __webpack_require__(67472);
// EXTERNAL MODULE: ./src/plugins/hooks/useLineChart.ts
var useLineChart = __webpack_require__(60703);
// EXTERNAL MODULE: ./src/plugins/hooks/useDimension.ts
var useDimension = __webpack_require__(55591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
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
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(Link/* default */.Z, {
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
            }, period);
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
            color: theme.palette.text.primary
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
    // #region fetch pool history
    const { value: perfHistory , error , loading , retry  } = useFetchPoolHistory(pool.address, period);
    var ref;
    const stats = (ref = perfHistory === null || perfHistory === void 0 ? void 0 : perfHistory.map((row)=>[
            Number(row.timestamp),
            Number(row.performance)
        ]
    )) !== null && ref !== void 0 ? ref : [];
    // #endregion
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
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Refresh/* default */.Z, {
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(20333);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(11784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.6_2537b8183b5267e659a67a26d5d4f10f/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(92452);
// EXTERNAL MODULE: ./src/plugins/dHEDGE/utils.ts
var utils = __webpack_require__(12861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/isomorphic-dompurify@0.18.0/node_modules/isomorphic-dompurify/browser.js
var browser = __webpack_require__(64271);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
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
    // #region process stats
    const valueManaged = (0,utils/* formatAmountPostfix */.K)((0,formatter/* formatBalance */.az)(pool === null || pool === void 0 ? void 0 : pool.totalValue, DIGIT_LENGTH));
    const lifeTimeReturn = new (bignumber_default())((0,formatter/* formatBalance */.az)(pool.performance, DIGIT_LENGTH)).minus(1).multipliedBy(100);
    const riskFactor = pool && (pool === null || pool === void 0 ? void 0 : pool.riskFactor) !== -1 ? pool === null || pool === void 0 ? void 0 : pool.riskFactor : '-';
    // pool detail contains raw html and need to sanitize before use
    const cleanDescription = browser_default().sanitize(pool.poolDetails);
    const [expanded, setExpanded] = (0,react.useState)(cleanDescription.length < constants/* POOL_DESCRIPTION_LIMIT */.yV);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.meta,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        alignItems: "center",
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
            cleanDescription ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
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
                    })
                ]
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(63190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockie.ts
var useBlockie = __webpack_require__(97535);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/hooks/useManager.ts


function useAvatar(address) {
    return (0,useBlockie/* useBlockie */.Y)(address, constants/* BLOCKIES_OPTIONS */.jz);
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
    const chainId = (0,useChainId/* useChainId */.xx)();
    // #region manager share
    const managerShare = new (bignumber_default())(pool.balanceOfManager).dividedBy(pool.totalSupply).multipliedBy(100).integerValue((bignumber_default()).ROUND_UP);
    // #endregion
    // #region the invest dialog
    const { setDialog: openInvestDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(messages/* PluginDHedgeMessages.InvestDialogUpdated */.V.InvestDialogUpdated);
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
    // #endregion
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
                                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, pool.managerAddress)
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
                                            share: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
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
        }
    })
);
function PoolView(props) {
    var ref;
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolView_useStyles();
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    var _address;
    // #region allowed tokens
    const { value: pool , error , loading , retry  } = useFetchPool((_address = props.address) !== null && _address !== void 0 ? _address : '');
    // #region susd token
    const { value: allowedTokens , loading: loadingAllowedTokens , retry: retryAllowedTokens , error: errorAllowedTokens ,  } = usePoolDepositAssets(pool);
    // #endregion
    // #region tabs
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
    // #endregion
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
            ((ref = error) === null || ref === void 0 ? void 0 : ref.message) || (errorAllowedTokens === null || errorAllowedTokens === void 0 ? void 0 : errorAllowedTokens.message),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {}),
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
                            onChange: (_, newValue)=>setTabIndex(newValue)
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
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/dHEDGE/UI/InvestDialog.tsx + 1 modules
var InvestDialog = __webpack_require__(82491);
;// CONCATENATED MODULE: ./src/plugins/dHEDGE/SNSAdaptor/index.tsx









function getPoolFromLink(link) {
    const matchLink = (0,constants/* createMatchLink */.ag)();
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
    ...dHEDGE_base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const links = (0,react.useMemo)(()=>{
            const x = (0,base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val);
        }, [
            props.message
        ]);
        if (!links) return null;
        const pool = getPoolFromLinks(links);
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    PostInspector: function Component() {
        const links = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const pool = getPoolFromLinks(links);
        if (!(pool === null || pool === void 0 ? void 0 : pool.address)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            link: pool.link,
            address: pool.address
        }));
    },
    GlobalInjection: function Component() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InvestDialog/* InvestDialog */.V, {}));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    (0,src/* usePluginWrapper */.fI)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
        address: props.address,
        link: props.link
    }));
}


/***/ }),

/***/ 12861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ formatAmountPostfix),
/* harmony export */   "N": () => (/* binding */ getChainIdFromCode)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95130);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63360);



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
    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(input);
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
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.ethereum */ .Xp.ethereum:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .BlockchainCode.polygon */ .Xp.polygon:
            return _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .ChainId.Matic */ .a_.Matic;
    }
}


/***/ }),

/***/ 97535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77224);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__);


function useBlockie(address, options) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const defaultOptions = {
            seed: address,
            color: '#dfe',
            bgcolor: '#aaa'
        };
        try {
            return (0,ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__.create)({
                ...defaultOptions,
                ...options
            }).toDataURL();
        } catch  {
            return '';
        }
    }, [
        address
    ]);
}


/***/ })

}]);