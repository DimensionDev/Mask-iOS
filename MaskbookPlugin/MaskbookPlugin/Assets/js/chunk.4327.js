"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1943],{

/***/ 64795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.4327.js
/***/ 22681:
=======
/***/ 64921:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.1943.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88088);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16842);





const Image1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image2(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : undefined,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    }));
});
// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ 
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {
    }
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

/***/ 96371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64921);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6615);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80050);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    icon: {
        borderRadius: '50%',
        backgroundColor: '#F7F9FA'
    }
});
const icons = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .tds.Ethereum]: new URL(/* asset import */ __webpack_require__(9227), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .tds.Binance]: new URL(/* asset import */ __webpack_require__(3391), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .tds.Polygon]: new URL(/* asset import */ __webpack_require__(44319), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .tds.xDai]: new URL(/* asset import */ __webpack_require__(34980), __webpack_require__.b).toString()
};
function NetworkIcon(props) {
    const { size =48 , networkType  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__.useStylesExtends)(useStyles(), props);
    if (!networkType) return null;
    return icons[networkType] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        height: size,
        width: size,
        src: icons[networkType],
        className: classes.icon
    }) : null;
}


/***/ }),

/***/ 65928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 51943:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/SnackbarContent/SnackbarContent.js + 1 modules
var SnackbarContent = __webpack_require__(57343);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/base.tsx
var base = __webpack_require__(22557);
// EXTERNAL MODULE: ./src/plugins/MaskbookPluginWrapper.tsx
var MaskbookPluginWrapper = __webpack_require__(65928);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/UI/DepositDialog.tsx + 1 modules
var DepositDialog = __webpack_require__(88381);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/constants.ts
var constants = __webpack_require__(31682);
// EXTERNAL MODULE: ../icons/general/Refresh.tsx
var Refresh = __webpack_require__(64795);
// EXTERNAL MODULE: ../theme/src/constants.ts
var src_constants = __webpack_require__(42118);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(57652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(89730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(25933);
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
// EXTERNAL MODULE: ./src/resources/PoolTogetherIcon.tsx
var PoolTogetherIcon = __webpack_require__(34619);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(59450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64316);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherPool.ts + 1 modules
var usePoolTogetherPool = __webpack_require__(85902);
// EXTERNAL MODULE: ./src/plugins/PoolTogether/messages.ts
var messages = __webpack_require__(75597);
;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherPrizeStrategy.json
const PoolTogetherPrizeStrategy_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract BeforeAwardListenerInterface","name":"beforeAwardListener","type":"address"}],"name":"BeforeAwardListenerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20Upgradeable","name":"externalErc20","type":"address"}],"name":"ExternalErc20AwardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC20Upgradeable","name":"externalErc20Award","type":"address"}],"name":"ExternalErc20AwardRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC721Upgradeable","name":"externalErc721","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"ExternalErc721AwardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract IERC721Upgradeable","name":"externalErc721Award","type":"address"}],"name":"ExternalErc721AwardRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prizePeriodStart","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prizePeriodSeconds","type":"uint256"},{"indexed":true,"internalType":"contract PrizePool","name":"prizePool","type":"address"},{"indexed":false,"internalType":"contract TicketInterface","name":"ticket","type":"address"},{"indexed":false,"internalType":"contract IERC20Upgradeable","name":"sponsorship","type":"address"},{"indexed":false,"internalType":"contract RNGInterface","name":"rng","type":"address"},{"indexed":false,"internalType":"contract IERC20Upgradeable[]","name":"externalErc20Awards","type":"address[]"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[],"name":"NoWinners","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"numberOfWinners","type":"uint256"}],"name":"NumberOfWinnersSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"periodicPrizeStrategyListener","type":"address"}],"name":"PeriodicPrizeStrategyListenerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prizePeriodSeconds","type":"uint256"}],"name":"PrizePeriodSecondsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"prizePool","type":"address"},{"indexed":true,"internalType":"uint32","name":"rngRequestId","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"rngLockBlock","type":"uint32"}],"name":"PrizePoolAwardCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"prizePool","type":"address"},{"indexed":true,"internalType":"uint32","name":"rngRequestId","type":"uint32"},{"indexed":false,"internalType":"uint32","name":"rngLockBlock","type":"uint32"}],"name":"PrizePoolAwardStarted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"uint256","name":"randomNumber","type":"uint256"}],"name":"PrizePoolAwarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"uint256","name":"prizePeriodStartedAt","type":"uint256"}],"name":"PrizePoolOpened","type":"event"},{"anonymous":false,"inputs":[],"name":"RngRequestFailed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"rngRequestTimeout","type":"uint32"}],"name":"RngRequestTimeoutSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract RNGInterface","name":"rngService","type":"address"}],"name":"RngServiceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"splitExternalErc20Awards","type":"bool"}],"name":"SplitExternalErc20AwardsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract TokenListenerInterface","name":"tokenListener","type":"address"}],"name":"TokenListenerUpdated","type":"event"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_externalErc20","type":"address"}],"name":"addExternalErc20Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable[]","name":"_externalErc20s","type":"address[]"}],"name":"addExternalErc20Awards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"},{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"addExternalErc721Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"beforeAwardListener","outputs":[{"internalType":"contract BeforeAwardListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"},{"internalType":"address","name":"referrer","type":"address"}],"name":"beforeTokenMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"controlledToken","type":"address"}],"name":"beforeTokenTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"currentTime","type":"uint256"}],"name":"calculateNextPrizePeriodStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canCompleteAward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canStartAward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cancelAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"completeAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"secondsPerBlockMantissa","type":"uint256"}],"name":"estimateRemainingBlocksToPrize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExternalErc20Awards","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"}],"name":"getExternalErc721AwardTokenIds","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getExternalErc721Awards","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRngLockBlock","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastRngRequestId","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodStart","type":"uint256"},{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"},{"internalType":"contract PrizePool","name":"_prizePool","type":"address"},{"internalType":"contract TicketInterface","name":"_ticket","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_sponsorship","type":"address"},{"internalType":"contract RNGInterface","name":"_rng","type":"address"},{"internalType":"contract IERC20Upgradeable[]","name":"externalErc20Awards","type":"address[]"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodStart","type":"uint256"},{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"},{"internalType":"contract PrizePool","name":"_prizePool","type":"address"},{"internalType":"contract TicketInterface","name":"_ticket","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_sponsorship","type":"address"},{"internalType":"contract RNGInterface","name":"_rng","type":"address"},{"internalType":"uint256","name":"_numberOfWinners","type":"uint256"}],"name":"initializeMultipleWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isPrizePeriodOver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngRequested","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isRngTimedOut","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numberOfWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periodicPrizeStrategyListener","outputs":[{"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodEndAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodRemainingSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodSeconds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePeriodStartedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prizePool","outputs":[{"internalType":"contract PrizePool","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"_externalErc20","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_prevExternalErc20","type":"address"}],"name":"removeExternalErc20Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC721Upgradeable","name":"_externalErc721","type":"address"},{"internalType":"contract IERC721Upgradeable","name":"_prevExternalErc721","type":"address"}],"name":"removeExternalErc721Award","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rng","outputs":[{"internalType":"contract RNGInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rngRequestTimeout","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract BeforeAwardListenerInterface","name":"_beforeAwardListener","type":"address"}],"name":"setBeforeAwardListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"setNumberOfWinners","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract PeriodicPrizeStrategyListenerInterface","name":"_periodicPrizeStrategyListener","type":"address"}],"name":"setPeriodicPrizeStrategyListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prizePeriodSeconds","type":"uint256"}],"name":"setPrizePeriodSeconds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_rngRequestTimeout","type":"uint32"}],"name":"setRngRequestTimeout","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract RNGInterface","name":"rngService","type":"address"}],"name":"setRngService","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_splitExternalErc20Awards","type":"bool"}],"name":"setSplitExternalErc20Awards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract TokenListenerInterface","name":"_tokenListener","type":"address"}],"name":"setTokenListener","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"splitExternalErc20Awards","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"sponsorship","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startAward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ticket","outputs":[{"internalType":"contract TicketInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenListener","outputs":[{"internalType":"contract TokenListenerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/usePools.ts





function usePools() {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    return (0,useAsyncRetry/* default */.Z)(()=>messages/* PluginPooltogetherRPC.fetchPools */.K.fetchPools(chainId)
    , [
        chainId
    ]);
}
function usePool(address, subgraphUrl, isCommunityPool) {
    const poolContract = (0,usePoolTogetherPool/* usePoolTogetherPoolContract */.T)(address);
    const web3 = (0,web3_shared_src/* useWeb3 */.$6B)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !subgraphUrl || !poolContract) return undefined;
        const pool = await messages/* PluginPooltogetherRPC.fetchPool */.K.fetchPool(address, subgraphUrl);
        if (!pool) return;
        const prizeStrategyAddress = await poolContract.methods.prizeStrategy().call();
        const prizeStrategyContract = (0,web3_shared_src/* createContract */.OPC)(web3, prizeStrategyAddress, PoolTogetherPrizeStrategy_namespaceObject);
        pool.prize.prizePeriodEndAt = await prizeStrategyContract.methods.prizePeriodEndAt().call();
        const awardBalance = await poolContract.methods.awardBalance().call();
        pool.prize.amount = (0,web3_shared_src/* formatBalance */.azF)(awardBalance, Number.parseInt(pool.tokens.underlyingToken.decimals, 10));
        pool.isCommunityPool = isCommunityPool;
        return pool;
    }, [
        address,
        subgraphUrl,
        isCommunityPool
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ../web3-contracts/abis/PoolTogetherTicket.json
const PoolTogetherTicket_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"chanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"controller","outputs":[{"internalType":"contract TokenControllerInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerBurn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerBurnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"controllerMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"randomNumber","type":"uint256"}],"name":"draw","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"contract TokenControllerInterface","name":"_controller","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/contracts/usePoolTogetherTicket.ts


function usePoolTogetherTicketContracts(addresses) {
    return (0,web3_shared_src/* useContracts */.GP$)(addresses, PoolTogetherTicket_namespaceObject);
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/useAccountBalances.ts




const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
/**
 * A callback for getting account balances of ticket pools
 * @param pools
 */ function useAccountBalance(pools) {
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const ticketContracts = usePoolTogetherTicketContracts(pools.map((pool)=>pool.tokens.ticket.address
    )).filter(Boolean);
    const [results, calls, _, callback] = (0,web3_shared_src/* useMutlipleContractSingleData */.w0B)(ticketContracts, Array.from({
        length: ticketContracts.length
    }).fill('balanceOf'), [
        account || ZERO_ADDRESS
    ]);
    const asyncResults = (0,useAsyncRetry/* default */.Z)(()=>callback(calls)
    , [
        calls
    ]);
    const values = (0,react.useMemo)(()=>{
        return results.length !== 0 ? pools.map((pool, i)=>({
                pool: pool,
                account: {
                    ticketBalance: results[i].value,
                    userAddress: account
                }
            })
        ) : undefined;
    }, [
        account,
        ticketContracts,
        asyncResults,
        results
    ]);
    return {
        ...asyncResults,
        value: values
    };
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/hooks/usePoolURL.ts


function usePoolURL(pool) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainName = web3_shared_src/* ChainId */.a_e[chainId].toLowerCase();
    return pool.isCommunityPool ? new URL(`/pools/${chainName}/${pool.address}`, constants/* COMMINUTY_URL */.i0).toString() : new URL(`/pools/${chainName}/${pool.symbol}`, constants/* APP_URL */.FX).toString();
}
function useManagePoolURL(pool) {
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const chainName = web3_shared_src/* ChainId */.a_e[chainId].toLowerCase();
    return pool.isCommunityPool ? new URL(`/pools/${chainName}/${pool.address}/home`, constants/* COMMINUTY_URL */.i0).toString() : new URL(`/account/pools/${chainName}/${pool.symbol}/manage-tickets`, constants/* APP_URL */.FX).toString();
}

// EXTERNAL MODULE: ./src/plugins/PoolTogether/utils.ts
var PoolTogether_utils = __webpack_require__(5832);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(28008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.23.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(23822);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/CountdownView.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            maxWidth: '300px'
        },
        part: {
            alignItems: 'center',
            width: '24%'
        },
        end: {
            textAlign: 'center'
        },
        digit: {
            backgroundColor: '#492e73',
            borderRadius: theme.spacing(0.5),
            color: '#6cf5db',
            width: '50%'
        },
        placeholder: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        },
        lable: {
            color: '#a69bbc'
        },
        seperator: {
            color: '#6cf5db',
            width: '2%'
        }
    })
);
const CountdownView = (props)=>{
    const classes = (0,shared_src.useStylesExtends)(useStyles(), props);
    const { secondsRemaining , msgOnEnd  } = props;
    const [secs, setSecs] = (0,react.useState)(secondsRemaining);
    (0,useInterval/* default */.Z)(()=>{
        setSecs(secs - 1);
    }, constants/* ONE_SECOND */.WT);
    const { days , hours , minutes , seconds  } = (0,intervalToDuration/* default */.Z)({
        start: 0,
        end: secs * 1000
    });
    if (secs <= 0 || days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "h6",
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
            className: classes.end,
            children: msgOnEnd
        }));
    }
    var ref;
    const daysArray = (ref = days === null || days === void 0 ? void 0 : days.toString().split('')) !== null && ref !== void 0 ? ref : [
        0,
        0
    ];
    var ref1;
    const hoursArray = (ref1 = hours === null || hours === void 0 ? void 0 : hours.toString().split('')) !== null && ref1 !== void 0 ? ref1 : [
        0,
        0
    ];
    var ref2;
    const minutesArray = (ref2 = minutes === null || minutes === void 0 ? void 0 : minutes.toString().split('')) !== null && ref2 !== void 0 ? ref2 : [
        0,
        0
    ];
    var ref3;
    const secondsArray = (ref3 = seconds === null || seconds === void 0 ? void 0 : seconds.toString().split('')) !== null && ref3 !== void 0 ? ref3 : [
        0,
        0
    ];
    // 86400 seconds = 1 day
    // 3600 seconds = 1 hour
    const textColor = secondsRemaining >= 86400 ? 'green-1' : secondsRemaining >= 3600 ? 'yellow-1' : 'red-1';
    const Digit = (props1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body1",
            fontWeight: "fontWeightBold",
            children: props1.digit
        }));
    };
    const LeftDigit = (props1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.1,
            ml: 0.3,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props1.digit
            })
        }));
    };
    const RightDigit = (props1)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            py: 0.2,
            mr: 0.3,
            ml: 0.1,
            className: classes.digit,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Digit, {
                digit: props1.digit
            })
        }));
    };
    const DoubleDigits = (props1)=>{
        const { leftDigit , rightDigit , lable  } = props1;
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.placeholder,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(LeftDigit, {
                            digit: leftDigit
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RightDigit, {
                            digit: rightDigit
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "subtitle2",
                        fontSize: 8,
                        className: classes.lable,
                        children: lable
                    })
                })
            ]
        }));
    };
    const Seperator = ()=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
            container: true,
            item: true,
            direction: "column",
            className: classes.seperator,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                py: 0.2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body2",
                    fontWeight: "fontWeightBold",
                    children: ":"
                })
            })
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: daysArray.length < 2 ? 0 : daysArray[0],
                    rightDigit: daysArray.length > 1 ? daysArray[1] : daysArray[0],
                    lable: "DAY"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: hoursArray.length < 2 ? 0 : hoursArray[0],
                    rightDigit: hoursArray.length > 1 ? hoursArray[1] : hoursArray[0],
                    lable: "HR"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Seperator, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: minutesArray.length < 2 ? 0 : minutesArray[0],
                    rightDigit: minutesArray.length > 1 ? minutesArray[1] : minutesArray[0],
                    lable: "MIN"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Seperator, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                item: true,
                direction: "column",
                className: classes.part,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DoubleDigits, {
                    leftDigit: secondsArray.length < 2 ? 0 : secondsArray[0],
                    rightDigit: secondsArray.length > 1 ? secondsArray[1] : secondsArray[0],
                    lable: "SEC"
                })
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/components/shared/NetworkIcon.tsx
var NetworkIcon = __webpack_require__(96371);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/NetworkView.tsx







const NetworkView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            width: '1em',
            height: '1em',
            marginRight: theme.spacing(0.5)
        }
    })
);
const NetworkView = (props)=>{
    const classes = (0,shared_src.useStylesExtends)(NetworkView_useStyles(), props);
    const { chainId =web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet  } = props;
    const selectedNetwork = (0,web3_shared_src/* getNetworkTypeFromChainId */._Te)(chainId);
    const chainDetail = (0,web3_shared_src/* getChainDetailed */.$Gt)(chainId);
    var ref;
    const color = (0,PoolTogether_utils/* getNetworkColor */.xr)((ref = chainDetail === null || chainDetail === void 0 ? void 0 : chainDetail.chainId) !== null && ref !== void 0 ? ref : web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        variant: "subtitle2",
        color: color,
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
                classes: {
                    icon: classes.icon
                },
                networkType: selectedNetwork
            }),
            chainDetail === null || chainDetail === void 0 ? void 0 : chainDetail.fullName
        ]
    }));
};

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/AccountPool.tsx












const AccountPool_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#341762',
            textAlign: 'center',
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 15
        },
        token: {
            padding: theme.spacing(1, 2),
            borderRight: '#290b5a dashed',
            margin: 'auto'
        },
        tokenIcon: {
            backgroundColor: 'transparent',
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center'
        },
        info: {
            padding: theme.spacing(1, 2),
            justifyContent: 'space-between',
            textAlign: 'justify'
        },
        prize: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            margin: 'auto 0',
            width: 'auto'
        },
        trophy: {
            margin: 'auto'
        },
        prizeAmount: {
            margin: 'auto',
            marginRight: theme.spacing(0.5),
            textAlign: 'center'
        },
        in: {
            margin: 'auto',
            marginRight: theme.spacing(0.5)
        },
        manage: {
            cursor: 'pointer',
            color: '#3ef3d4',
            textDecoration: 'none',
            fontSize: '0.6rem',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            },
            maxHeight: theme.spacing(1),
            '&:hover': {
                color: '#ffffff'
            }
        },
        countdown: {
            alignSelf: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        countdownDigit: {
            backgroundColor: 'transparent',
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        countdownSeperator: {
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        odds: {
            fontSize: '0.6rem'
        },
        item: {
            width: 'auto'
        },
        footer: {
            display: 'block',
            alignSelf: 'flex-end',
            textAlign: 'end'
        }
    })
);
function AccountPool(props) {
    const { accountPool  } = props;
    const token = accountPool.pool.tokens.underlyingToken;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = AccountPool_useStyles();
    const poolURL = useManagePoolURL(accountPool.pool);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const balance = (0,web3_shared_src/* formatBalance */.azF)(accountPool.account.ticketBalance, Number.parseInt(accountPool.pool.tokens.ticket.decimals, 10));
    const formattedBalance = Number.parseFloat(balance).toLocaleString(undefined, {
        maximumFractionDigits: 6
    });
    const odds = (0,PoolTogether_utils/* calculateOdds */.Gb)(Number.parseFloat(formattedBalance), Number.parseFloat(accountPool.pool.tokens.ticket.totalSupply), Number.parseInt(accountPool.pool.config.numberOfWinners, 10));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "column",
                item: true,
                xs: 3,
                className: classes.token,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.tokenIcon,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                            address: token.address,
                            name: token.symbol
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                            variant: "subtitle1",
                            fontWeight: "fontWeightBold",
                            children: token.symbol
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                flexWrap: "nowrap",
                item: true,
                xs: 9,
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: formattedBalance
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "subtitle2",
                                children: t('plugin_pooltogether_winning_odds')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.odds,
                                color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                variant: "subtitle2",
                                children: odds ? t('plugin_pooltogether_short_odds_value', {
                                    value: odds
                                }) : 'n/a'
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        direction: "column",
                        item: true,
                        className: classes.item,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.prize,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherIcon/* PoolTogetherTrophy */.l, {
                                        className: classes.trophy
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.prizeAmount,
                                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                        variant: "subtitle2",
                                        fontWeight: "fontWeightBold",
                                        children: (0,PoolTogether_utils/* calculateNextPrize */.LL)(accountPool.pool)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.in,
                                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                                        variant: "subtitle2",
                                        fontWeight: "fontWeightBold",
                                        children: t('plugin_pooltogether_in')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CountdownView, {
                                        secondsRemaining: (0,PoolTogether_utils/* calculateSecondsRemaining */.Q)(accountPool.pool),
                                        msgOnEnd: t('plugin_pooltogether_pool_ended'),
                                        classes: {
                                            digit: classes.countdownDigit,
                                            seperator: classes.countdownSeperator
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.footer,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkView, {
                                        chainId: chainId
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        className: classes.manage,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: poolURL,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "subtitle2",
                                            children: t('plugin_pooltogether_manage')
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/Account.tsx










const Account_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            backgroundColor: '#290b5a',
            textAlign: 'center',
            padding: theme.spacing(2)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1),
            fontSize: 'inherit'
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1)
        },
        totalDeposits: {
            display: 'flex',
            justifyContent: 'space-between',
            background: 'linear-gradient(334deg,#4c249f 28%,rgba(255,119,225,.9) 164%),#290b5a',
            padding: theme.spacing(2, 4),
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1),
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        noAccountPool: {
            padding: theme.spacing(2, 4),
            color: src_constants/* DarkColor.textSecondary */.I3.textSecondary
        },
        missingPool: {
            padding: theme.spacing(2, 4),
            color: '#7458df'
        },
        missingPoolLink: {
            color: 'inherit',
            '&:hover': {
                color: '#ffffff'
            }
        },
        pools: {
            margin: theme.spacing(1, 0)
        }
    })
);
function Account(props) {
    const { pools  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Account_useStyles();
    const { value: balances = [] , loading , retry , error  } = useAccountBalance(pools);
    if (loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        }));
    }
    if (error) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: retry
        }));
    }
    const noZeroBalances = balances.filter((balance)=>Number.parseInt(balance.account.ticketBalance, 10) !== 0
    );
    const totalUsdBalance = noZeroBalances.map((balance)=>{
        const ticketBalance = Number.parseFloat((0,web3_shared_src/* formatBalance */.azF)(balance.account.ticketBalance, Number.parseInt(balance.pool.tokens.ticket.decimals, 10)));
        const ticketUsdRate = balance.pool.tokens.ticket.usd;
        if (!ticketUsdRate) return 0;
        return ticketBalance * ticketUsdRate;
    }).reduce((x, y)=>x + y
    , 0).toLocaleString();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "column",
        className: classes.root,
        children: [
            noZeroBalances.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.noAccountPool,
                    variant: "h5",
                    fontWeight: "fontWeightBold",
                    children: t('plugin_pooltogether_no_account_pool')
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.totalDeposits,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: t('plugin_pooltogether_my_deposits')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "h5",
                                fontWeight: "fontWeightBold",
                                children: [
                                    "$",
                                    totalUsdBalance
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.pools,
                        children: noZeroBalances.map((balance, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AccountPool, {
                                accountPool: balance
                            }, i)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    className: classes.missingPool,
                    variant: "subtitle2",
                    fontWeight: "fontWeightBold",
                    children: [
                        t('plugin_pooltogether_missing_pool'),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            target: "_blank",
                            className: classes.missingPoolLink,
                            rel: "noopener noreferrer",
                            title: "PoolTogether",
                            href: constants/* COMMINUTY_URL */.i0,
                            children: constants/* COMMINUTY_URL */.i0
                        })
                    ]
                })
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolView.tsx














const PoolView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(1, 2),
            alignItems: 'stretch',
            backgroundColor: '#341762',
            margin: theme.spacing(1, 0),
            borderRadius: theme.spacing(1),
            '&:hover': {
                backgroundColor: '#43286e'
            },
            fontSize: 14,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        },
        icon: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            marginRight: theme.spacing(1),
            backgroundColor: 'transparent'
        },
        button: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            fontWeight: 500
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1)
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            fontSize: 15
        },
        poolLink: {
            cursor: 'pointer',
            color: 'inherit',
            textDecoration: 'inherit',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            }
        },
        networkIcon: {
            width: '1em',
            height: '1em',
            backgroundColor: 'transparent',
            marginRight: theme.spacing(0.5)
        },
        metaTitle: {
            marginBottom: theme.spacing(1),
            justifyContent: 'inherit',
            alignItems: 'center'
        },
        metaFooter: {
            justifyContent: 'inherit',
            alignItems: 'center'
        },
        metaText: {
            marginTop: theme.spacing(1),
            justifyContent: 'inherit'
        },
        metaTextPrize: {
            color: '#55f1d7',
            margin: theme.spacing(0, 1),
            backgroundColor: 'rgba(53, 230, 208, 0.2)',
            borderRadius: theme.spacing(1),
            padding: theme.spacing(0, 0.5)
        },
        metaPrize: {
            marginTop: theme.spacing(1),
            padding: theme.spacing(1),
            borderRadius: theme.spacing(1),
            backgroundColor: '#290B5A',
            justifyContent: 'center',
            maxWidth: '50%'
        },
        metaDeposit: {
            marginTop: theme.spacing(1),
            padding: theme.spacing(0, 1),
            justifyContent: 'center',
            maxWidth: '50%'
        },
        prize: {
            background: 'linear-gradient(40deg,#ff9304,#ff04ea 10%,#9b4beb 20%,#0e8dd6 30%,#0bc6df 40%,#07d464 50%,#dfd105 60%,#ff04ab 78%,#8933eb 90%,#3b89ff)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            animation: '$rainbow_animation 6s linear infinite',
            backgroundSize: '600% 600%',
            fontSize: '1.2rem',
            '@media (min-width:600px)': {
                fontSize: '2rem'
            }
        },
        '@keyframes rainbow_animation': {
            '0%': {
                backgroundPosition: '100% 0%'
            },
            '100%': {
                backgroundPosition: '0 100%'
            }
        },
        countdown: {
            alignSelf: 'center',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        deposit: {
            backgroundColor: '#3ef3d4',
            color: '#4c249f',
            marginTop: theme.spacing(0.5)
        },
        info: {
            marginTop: theme.spacing(0.5),
            justifyContent: 'space-between'
        },
        apr: {
            color: '#bdb3d2',
            display: 'flex'
        },
        poolIcon: {
            backgroundColor: 'transparent',
            marginRight: theme.spacing(0.5)
        },
        viewPool: {
            cursor: 'pointer',
            color: '#3ef3d4',
            textDecoration: 'none',
            marginRight: theme.spacing(0.5),
            '&:last-child': {
                marginRight: 0
            },
            maxHeight: theme.spacing(1),
            '&:hover': {
                color: '#ffffff'
            }
        }
    })
);
function PoolView(props) {
    var ref;
    const { pool  } = props;
    const { classes  } = PoolView_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const poolURL = usePoolURL(pool);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const [prize, setPrize] = (0,react.useState)('TBD');
    const [period, setPeriod] = (0,react.useState)('Custom Period');
    //#region pool token
    const { value: token , loading: loadingToken , retry: retryToken , error: errorToken ,  } = (0,web3_shared_src/* useERC20TokenDetailed */.kIC)(pool.tokens.underlyingToken.address);
    //#endregion
    //#region process data
    const prizePeriodSeconds = Number.parseInt(pool.config.prizePeriodSeconds, 10);
    (0,react.useEffect)(()=>{
        setPrize((0,PoolTogether_utils/* calculateNextPrize */.LL)(pool));
        setPeriod((0,PoolTogether_utils/* getPrizePeriod */.fe)(t, prizePeriodSeconds));
    }, [
        pool
    ]);
    //#endregion
    //#region the deposit dialog
    const { setDialog: openDepositDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* PluginPoolTogetherMessages.DepositDialogUpdated */.d.DepositDialogUpdated);
    const onDeposit = (0,react.useCallback)(()=>{
        if (!pool || !token) return;
        openDepositDialog({
            open: true,
            pool: pool,
            token: token
        });
    }, [
        pool,
        token,
        openDepositDialog
    ]);
    //#endregion
    if (loadingToken) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary",
                size: 15
            })
        }));
    }
    if (errorToken) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
                className: classes.refresh,
                color: "primary",
                onClick: retryToken
            })
        }));
    }
    if (!token) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.prize,
            variant: "h5",
            fontWeight: "fontWeightBold",
            children: t('plugin_pooltogether_token_not_found')
        }));
    }
    const tokenFaucet = (0,lodash.first)(pool.tokenFaucets);
    const tokenFaucetDripToken = (0,lodash.first)(pool.tokens.tokenFaucetDripTokens);
    var ref1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        direction: "row",
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                container: true,
                direction: "column",
                className: classes.metaPrize,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        className: classes.metaTitle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                                    address: token.address,
                                    name: token.symbol,
                                    classes: {
                                        icon: classes.icon
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.prize,
                                    variant: "h4",
                                    fontWeight: "fontWeightBold",
                                    children: prize
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        xs: 3,
                        className: classes.metaFooter,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                className: classes.metaTextPrize,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontSize: 10,
                                    variant: "subtitle2",
                                    children: t('plugin_pooltogether_prize', {
                                        period: period
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkView, {
                                    chainId: chainId
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                container: true,
                direction: "column",
                className: classes.metaDeposit,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        className: classes.countdown,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CountdownView, {
                            secondsRemaining: (0,PoolTogether_utils/* calculateSecondsRemaining */.Q)(pool),
                            msgOnEnd: t('plugin_pooltogether_pool_ended')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.deposit,
                            variant: "contained",
                            fullWidth: true,
                            size: "small",
                            onClick: onDeposit,
                            children: t('plugin_pooltogether_deposit', {
                                token: token.symbol
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        item: true,
                        className: classes.info,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: tokenFaucet && tokenFaucetDripToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.apr,
                                    fontSize: "0.7rem",
                                    variant: "subtitle2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                                            address: tokenFaucetDripToken.address,
                                            name: tokenFaucetDripToken.symbol,
                                            classes: {
                                                icon: classes.poolIcon
                                            }
                                        }),
                                        t('plugin_pooltogether_apr', {
                                            apr: (ref1 = (ref = tokenFaucet.apr) === null || ref === void 0 ? void 0 : ref.toFixed(2)) !== null && ref1 !== void 0 ? ref1 : 0,
                                            token: tokenFaucetDripToken.symbol
                                        })
                                    ]
                                }) : null
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                    className: classes.viewPool,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: poolURL,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontSize: "0.7rem",
                                        variant: "subtitle2",
                                        children: t('plugin_pooltogether_view_pool')
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolsView.tsx



const PoolsView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            position: 'relative',
            padding: theme.spacing(0.5),
            justifyContent: 'center',
            flexDirection: 'column'
        }
    })
);
function PoolsView(props) {
    const { pools  } = props;
    const { classes  } = PoolsView_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: pools.map((pool)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PoolView, {
                pool: pool
            }, pool.prizePool.address)
        )
    }));
}

;// CONCATENATED MODULE: ./src/plugins/PoolTogether/UI/PoolTogetherView.tsx














const PoolTogetherView_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            // width: '100%',
            boxShadow: 'none',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0,
            backgroundColor: '#290b5a',
            textAlign: 'center'
        },
        message: {
            color: theme.palette.text.primary,
            textAlign: 'center'
        },
        refresh: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1),
            fontSize: 'inherit'
        },
        content: {
            // width: '100%',
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
            },
            backgroundColor: '#290b5a'
        },
        tabs: {
            borderTop: `solid 1px ${theme.palette.divider}`,
            borderBottom: `solid 1px ${theme.palette.divider}`,
            width: '100%',
            minHeight: 'unset',
            color: src_constants/* DarkColor.textPrimary */.I3.textPrimary
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
        pooltogether: {
            height: 10,
            width: 10,
            marginLeft: theme.spacing(0.5)
        },
        progress: {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
            padding: theme.spacing(1)
        }
    })
);
function PoolTogetherView(props) {
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = PoolTogetherView_useStyles();
    const [pools, setPools] = (0,react.useState)([]);
    //#region pools
    const { value: _pools = [] , error: error , loading: loading , retry: retry  } = usePools();
    _pools.sort((x, y)=>Number(y.prize.weeklyTotalValueUsd) - Number(x.prize.weeklyTotalValueUsd)
    );
    //#endregion
    //#region mask pool
    const { MASK_POOL_ADDRESS , MASK_POOL_SUBGRAPH  } = (0,web3_shared_src/* usePoolTogetherConstants */.tL1)();
    const { value: maskPool , error: errorMask , loading: loadingMask , retry: retryMask ,  } = usePool(MASK_POOL_ADDRESS, MASK_POOL_SUBGRAPH, true);
    //#endregion
    //#region tabs
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_pooltogether_tab_pools')
        }, "pools"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_pooltogether_tab_account')
        }, "account"), 
    ].filter(Boolean);
    //#endregion
    (0,react.useEffect)(()=>{
        if (maskPool) {
            setPools([
                maskPool,
                ..._pools
            ]);
        } else {
            setPools(_pools);
        }
    }, [
        _pools,
        maskPool
    ]);
    if (loading || loadingMask) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
            className: classes.progress,
            color: "primary",
            size: 15
        }));
    }
    if (error || errorMask) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* RefreshIcon */.D, {
            className: classes.refresh,
            color: "primary",
            onClick: error ? retry : retryMask
        }));
    }
    if (pools.length === 0) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.message,
            children: t('plugin_pooltogether_no_pool')
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                        className: classes.tabs,
                        indicatorColor: "primary",
                        textColor: "inherit",
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
                            tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolsView, {
                                pools: pools
                            }) : null,
                            tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                pools: pools
                            }) : null
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                className: classes.footer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
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
                        color: src_constants/* DarkColor.textSecondary */.I3.textSecondary,
                        variant: "subtitle2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                children: "Supported by"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                                className: classes.footLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                title: "PoolTogether",
                                href: "https://pooltogether.com/",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherIcon/* PoolTogetherIcon */.C, {
                                        classes: {
                                            root: classes.pooltogether
                                        }
                                    }),
                                    "oolTogether"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx
var EthereumChainBoundary = __webpack_require__(85249);
;// CONCATENATED MODULE: ./src/plugins/PoolTogether/SNSAdaptor/index.tsx












const isPoolTogetherUrl = (url)=>constants/* URL_PATTERN.test */.lu.test(url)
;
const sns = {
    ...base/* base */.u,
    init (signal) {
    },
    DecryptedInspector: function Component(props) {
        const text = (0,react.useMemo)(()=>(0,shared_src.extractTextFromTypedMessage)(props.message)
        , [
            props.message
        ]);
        const link = (0,react.useMemo)(()=>(0,shared_src.parseURL)(text.val || '')
        , [
            text.val
        ]).find(isPoolTogetherUrl);
        if (!text.ok) return null;
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component1() {
        const link = src/* usePostInfoDetails.postMetadataMentionedLinks */.H9.postMetadataMentionedLinks().concat(src/* usePostInfoDetails.postMentionedLinks */.H9.postMentionedLinks()).find(isPoolTogetherUrl);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    GlobalInjection: function Component2() {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DepositDialog/* DepositDialog */.H, {
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);
function Renderer(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookPluginWrapper/* default */.Z, {
        pluginName: "PoolTogether",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnackbarContent/* default */.Z, {
                message: "Mask is loading this plugin..."
            }),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                chainId: web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
                isValidChainId: (chainId)=>[
                        web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet,
                        web3_shared_src/* ChainId.Matic */.a_e.Matic
                    ].includes(chainId)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherView, {
                })
            })
        })
    }));
}


/***/ }),

/***/ 95781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62539d64c6df15dea819.png";

/***/ }),

/***/ 3391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "052863bc15f84754566f.png";

/***/ }),

/***/ 9227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381446c71c051917c70c.png";

/***/ }),

/***/ 44319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e806a6ce9e82d18c640d.png";

/***/ }),

/***/ 34980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7dff5a23ed1ca80b3b.png";

/***/ })

}]);