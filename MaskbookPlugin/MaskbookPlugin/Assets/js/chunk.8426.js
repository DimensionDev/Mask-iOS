"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8426.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8426],{

/***/ 59027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40623);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72052);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41362);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8236);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63371);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        }
    })
);
function AbstractTab(props) {
    const { tabs , state , index , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useStylesExtends)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                square: true,
                elevation: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator
                    },
                    value: index ? index : value ? value : 0,
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            className: classes.tab,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index1)=>index1 === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

/***/ 87099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22681);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63371);





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
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString()
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

/***/ 46173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63371);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6621);
/* harmony import */ var _NetworkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87099);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        position: 'relative',
        display: 'flex'
    },
    mainIcon: {
        width: '100%',
        height: '100%'
    },
    badgeIcon: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        backgroundColor: '#ffffff',
        borderRadius: '50%'
    }
});
const WalletIcon = ({ size =24 , badgeSize =14  })=>{
    const { classes  } = useStyles();
    const selectedNetwork = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX);
    const selectedWalletProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon__WEBPACK_IMPORTED_MODULE_4__/* .NetworkIcon */ .d, {
                classes: {
                    icon: classes.mainIcon
                },
                size: size,
                networkType: selectedNetwork
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.ProviderIcon, {
                classes: {
                    icon: classes.badgeIcon
                },
                size: badgeSize,
                providerType: selectedWalletProvider
            })
        ]
    }));
};


/***/ }),
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4520],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4520.js

/***/ 98051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88460);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20261);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57652);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76900);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80050);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        }
    })
);
function AbstractTab(props) {
    const { tabs , state , index , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useStylesExtends)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                square: true,
                elevation: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator
                    },
                    value: index ? index : value ? value : 0,
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            className: classes.tab,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index1)=>index1 === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


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

/***/ 30838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80050);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93975);
/* harmony import */ var _NetworkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96371);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        position: 'relative',
        display: 'flex'
    },
    mainIcon: {
        width: '100%',
        height: '100%'
    },
    badgeIcon: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        backgroundColor: '#ffffff',
        borderRadius: '50%'
    }
});
const WalletIcon = ({ size =24 , badgeSize =14  })=>{
    const { classes  } = useStyles();
    const selectedNetwork = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX);
    const selectedWalletProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon__WEBPACK_IMPORTED_MODULE_4__/* .NetworkIcon */ .d, {
                classes: {
                    icon: classes.mainIcon
                },
                size: size,
                networkType: selectedNetwork
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.ProviderIcon, {
                classes: {
                    icon: classes.badgeIcon
                },
                size: badgeSize,
                providerType: selectedWalletProvider
            })
        ]
    }));
};


/***/ }),

/***/ 44846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28008);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64316);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35313);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);





const UPDATE_TRANSACTION_LATENCY = 30 /* seconds */  * 1000 /* milliseconds  */ ;
async function getTransactions(account, status) {
    if (!account) return [];
    const transactions = await _messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getRecentTransactionsFromChain */ .V.getRecentTransactionsFromChain(account);
    return transactions.filter((x)=>typeof status !== 'undefined' ? x.status === status : true
    );
}
function useRecentTransactions(status) {
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mAM)();
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xxU)();
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // update transactions status intervally
    const [delay, setDelay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(()=>setFlag((x)=>!x
        )
    , delay);
    // update transactions by message center
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(()=>setFlag((x)=>!x
            )
        )
    , [
        setFlag
    ]);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(async ()=>{
        try {
            setDelay(null);
            return getTransactions(account, status);
        } catch (error) {
            throw error;
        } finally{
            setDelay(UPDATE_TRANSACTION_LATENCY);
        }
    }, [
        account,
        status,
        flag,
        chainId
    ]);
}


/***/ }),

/***/ 88087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ mindsShared)
});

// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts
var create_post_context = __webpack_require__(67561);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(87595);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/user.ts

const usernameValidator = (name)=>{
    for (const v of [
        /(minds|admin)/i,
        /.{16,}/,
        /\W/
    ]){
        if (!(0,lodash.isNull)(v.exec(name))) {
            return false;
        }
    }
    return name.length >= 4;
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/shared.ts




const getPostURL = (post)=>{
    return new URL(`https://minds.com/newsfeed/${post.postId}`);
};
const mindsShared = {
    ...base/* mindsBase */.NE,
    utils: {
        getHomePage: ()=>'https://www.minds.com'
        ,
        isValidUsername: usernameValidator,
        publicKeyEncoding: undefined,
        textPayloadPostProcessor: undefined,
        getPostURL,
        getShareLinkURL (message) {
            return new URL(`https://www.minds.com/newsfeed/subscriptions?intentUrl=${encodeURIComponent(message)}`);
        },
        createPostContext: (0,create_post_context/* createSNSAdaptorSpecializedPostContext */.k)({
            payloadParser: utils/* deconstructPayload */.Qn,
            getURLFromPostIdentifier: getPostURL
        })
    }
};


/***/ }),

/***/ 4441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ui_provider)
});

// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(71299);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network/defaults/index.ts
var defaults = __webpack_require__(57243);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/PageInspector.tsx + 3 modules
var PageInspector = __webpack_require__(12582);
// EXTERNAL MODULE: ./src/social-network/defaults/inject/StartSetupGuide.tsx
var StartSetupGuide = __webpack_require__(58963);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitFriends.ts
var InitFriends = __webpack_require__(46016);
// EXTERNAL MODULE: ./src/social-network/defaults/state/InitProfiles.ts
var InitProfiles = __webpack_require__(79328);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(96578);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/selector.ts

const querySelector = (selector, singleMode = true)=>{
    const ls = new umd.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const rootSelector = ()=>querySelector('m-app')
;
const themeListItemSelector = ()=>querySelector('m-usermenu__v3 > div.m-user-menu.m-dropdown > ul > li:nth-child(5) .ng-star-inserted')
;
const composerModalSelector = ()=>querySelector('m-composer__modal')
;
const postEditorInPopupSelector = ()=>querySelector('m-composer__modal m-composer__toolbar > div > *:nth-child(4)', true)
;
const postEditorInTimelineSelector = ()=>querySelector('m-newsfeed m-composer m-composer__toolbar > div > *:nth-child(4), m-channel__feed m-composer m-composer__toolbar > div > *:nth-child(4)', true)
;
const toolBoxInSideBarSelector = ()=>querySelector('.m-sidebarNavigation__list li:nth-child(11)')
;
const postEditorDraftContentSelector = ()=>{
    return querySelector('m-composer__modal m-composer__textarea textarea.m-composerTextarea__message');
};
const handleSelector = ()=>querySelector('.m-user-menu ul li a:first-child')
;
const selfInfoSelectors = ()=>({
        handle: handleSelector().map((x)=>x.innerText.replace(/@/, '').trim()
        ),
        avatar: querySelector('.m-user-menu .minds-avatar').map((x)=>// get everything between the parens (the url)
            x.style.backgroundImage.match(/\((.*?)\)/)[1].replace(/('|")/g, '')
        )
    })
;
const composeButtonSelector = ()=>querySelector([
        '.m-sidebarNavigation__item m-sidebarNavigation__item--compose',
        '.m-sidebarNavigation__item--compose a'
    ].join(), true)
;
const composeTextareaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__textarea textarea').enableSingleMode()
;
const composeDialogIndicatorSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal')
;
const composerModalTextAreaSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__textArea .m-composer__textArea textarea').enableSingleMode()
;
const composerPreviewSelector = ()=>new umd.LiveSelector().querySelector('m-composer__modal m-composer__preview img').enableSingleMode()
;
const searchResultHeadingSelector = ()=>querySelector('m-discovery__search')
;
const postContentSelector = ()=>new umd.LiveSelector().querySelectorAll([
        'm-activity__modal m-activity__content .m-activityContent__mediaDescriptionText',
        'm-activity__modal m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity:not(.m-activity--minimalMode) m-activity__content .m-activityContent__mediaDescriptionText', 
    ].join())
;

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/AttachImageToComposition.ts



const hasSucceed = ()=>composerPreviewSelector().evaluate()
;
function pasteImageToCompositionMinds() {
    return async function(url, { recover , relatedTextPayload  }) {
        var ref;
        const image = typeof url === 'string' ? await (0,utils/* downloadUrl */.GR)(url) : url;
        const data = [
            new ClipboardItem({
                [image.type]: image
            })
        ];
        await navigator.clipboard.write(data);
        (ref = composerModalTextAreaSelector().evaluate()) === null || ref === void 0 ? void 0 : ref.focus();
        document.execCommand('paste');
        if (hasSucceed()) {
            // clear clipboard
            return navigator.clipboard.writeText('');
        } else if (recover) {
            messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
                text: relatedTextPayload || '',
                image
            });
        }
    };
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoNewsFeedPage.ts
function gotoNewsFeedPageMinds() {
    if (location.pathname.includes('/newsfeed/subscriptions')) return;
    else location.pathname = '/newsfeed/subscriptions';
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/gotoProfilePage.ts
function gotoProfilePageMinds(profile) {
    var ref;
    const path = `/${profile.userId}`;
    (ref = document.querySelector(`[href="${path}"]`)) === null || ref === void 0 ? void 0 : ref.click();
    setTimeout(()=>{
        // The classic way
        if (!location.pathname.startsWith(path)) location.pathname = path;
    }, 400);
}

// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(32951);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/openComposeBox.ts






async function openComposeBoxMinds(content, options) {
    await (0,dom/* untilDocumentReady */.Hx)();
    await (0,utils/* delay */.gw)(800);
    // active the compose dialog
    const composeTextarea = composeTextareaSelector().evaluate();
    const composeButton = composeButtonSelector().evaluate();
    if (composeButton) composeButton.click();
    if (composeTextarea) composeTextarea.focus();
    await (0,utils/* delay */.gw)(800);
    // the indicator only available when compose dialog opened successfully
    const composeIndicator = composeDialogIndicatorSelector().evaluate();
    if (!composeIndicator) {
        alert(i18n_next/* i18n.t */.a.t('automation_request_click_post_button'));
        return;
    }
    await (0,utils/* delay */.gw)(800);
    messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
        reason: 'popup',
        open: true,
        content: typeof content === 'string' ? (0,typed_message/* makeTypedMessageText */.P)(content) : content,
        options
    });
}

// EXTERNAL MODULE: ../injected-script/sdk/index.ts + 1 modules
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8426.js
var sdk = __webpack_require__(83156);
=======
var sdk = __webpack_require__(83554);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4520.js
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/postBox.ts

const getEditorContent = ()=>{
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    return editorNode.value;
};
const isCompose = ()=>!!composerModalSelector().evaluate()
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!postEditorDraftContentSelector().evaluate()
;

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteTextToComposition.ts






/**
 * Wait for up to 5000 ms
 * If not complete, let user do it.
 */ const pasteTextToCompositionMinds = (text, opt)=>{
    const interval = 500;
    const timeout = 5000;
    const worker = async function(abort) {
        const checkSignal = ()=>{
            if (abort.signal.aborted) throw new Error('Aborted');
        };
        if (!isCompose() && !hasEditor()) {
            // open the composer
            await (0,dom/* untilElementAvailable */.ft)(composeButtonSelector());
            composeButtonSelector().evaluate().click();
            checkSignal();
        }
        // get focus
        const i = postEditorDraftContentSelector();
        const textarea = i.evaluate();
        await (0,dom/* untilElementAvailable */.ft)(i);
        checkSignal();
        while(!hasFocus(i)){
            textarea === null || textarea === void 0 ? void 0 : textarea.focus();
            checkSignal();
            await (0,utils/* delay */.gw)(interval);
        }
        (0,utils/* selectElementContents */.Ms)(textarea);
        // paste
        (0,sdk/* inputText */.iJ)(text);
        await (0,utils/* delay */.gw)(interval);
        if (!getEditorContent().replace(/\n/g, '').includes(text.replace(/\n/g, ''))) {
            fail(new Error('Unable to paste text automatically'));
        }
    };
    const fail = (e)=>{
        if (opt === null || opt === void 0 ? void 0 : opt.recover) messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
            text
        });
        throw e;
    };
    const abortCtr = new AbortController();
    setTimeout(()=>{
        abortCtr.abort();
    }, timeout);
    worker(abortCtr).then(undefined, (error)=>fail(error)
    );
};

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(87595);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/getSearchedKeyword.ts


function getSearchedKeywordAtMinds() {
    if (!(0,base/* isMinds */.Sf)(social_network.activatedSocialNetworkUI)) return '';
    const params = new URLSearchParams(location.search);
    if (location.pathname === '/discovery/search') {
        var ref;
        return decodeURIComponent((ref = params.get('q')) !== null && ref !== void 0 ? ref : '');
    }
    return '';
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/identity.ts





async function resolveLastRecognizedIdentityInner(ref, cancel) {
    await (0,dom/* untilDocumentReady */.Hx)();
    await (0,dom/* untilElementAvailable */.ft)(handleSelector());
    const handle = selfInfoSelectors().handle.evaluate();
    const avatar = selfInfoSelectors().avatar.evaluate();
    if (handle) {
        // get handle and avatar from the user menu
        ref.value = {
            identifier: new type/* ProfileIdentifier */.WO(base/* mindsBase.networkIdentifier */.NE.networkIdentifier, handle),
            nickname: undefined,
            avatar
        };
        // call the API to get the nickname
        fetch('/api/v1/channel/' + handle, {
            signal: cancel
        }).then((res)=>res.json()
        ).then(({ channel  })=>{
            var ref1;
            ref.value = {
                identifier: new type/* ProfileIdentifier */.WO(base/* mindsBase.networkIdentifier */.NE.networkIdentifier, channel.username),
                nickname: channel.name,
                avatar: (ref1 = channel.avatar_url) === null || ref1 === void 0 ? void 0 : ref1.medium
            };
        });
    }
}
const IdentityProviderMinds = {
    hasDeprecatedPlaceholderName: false,
    lastRecognized: social_network.creator.IdentityResolveProviderLastRecognized(),
    start (cancel) {
        resolveLastRecognizedIdentityInner(this.lastRecognized, cancel);
    }
};

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ./src/social-network/utils.ts
var social_network_utils = __webpack_require__(77212);
// EXTERNAL MODULE: ./src/social-network/utils/create-post-context.ts
var create_post_context = __webpack_require__(67561);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var utils_watcher = __webpack_require__(19439);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/shared.ts + 1 modules
var shared = __webpack_require__(88087);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/utils/assert.ts
var assert = __webpack_require__(54003);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/utils/fetch.ts



const parseNameArea = (nameArea)=>{
    return {
        name: nameArea.innerText,
        handle: nameArea.href.substr(8).split('/')[1]
    };
};
const postIdParser = (node)=>{
    var ref;
    const idNode = node.querySelector('.m-activityOwnerBlock__permalink');
    var ref1;
    return idNode ? (ref1 = (ref = idNode.getAttribute('href')) === null || ref === void 0 ? void 0 : ref.split('/')[2]) !== null && ref1 !== void 0 ? ref1 : undefined : undefined;
};
const postNameParser = (node)=>{
    return parseNameArea((0,assert/* notNullable */.Y)(node.querySelector('.m-activityOwnerBlock__displayName')));
};
const postAvatarParser = (node)=>{
    const avatarElement = node.querySelector('.m-activityOwnerBlock__avatar img');
    return avatarElement ? avatarElement.src : undefined;
};
const postContentMessageParser = (node)=>{
    function resolve(content) {
        if (content.startsWith('@')) return 'user';
        if (content.startsWith('#')) return 'hash';
        if (content.startsWith('$')) return 'cash';
        return 'normal';
    }
    function make(node1) {
        if (node1.nodeType === Node.TEXT_NODE) {
            if (!node1.nodeValue) return (0,typed_message/* makeTypedMessageEmpty */.WM)();
            return (0,typed_message/* makeTypedMessageText */.P)(node1.nodeValue);
        } else if (node1 instanceof HTMLAnchorElement && !node1.className.includes('m-activityContentMedia__link')) {
            const anchor = node1;
            var ref5;
            const href = (ref5 = anchor.getAttribute('title')) !== null && ref5 !== void 0 ? ref5 : anchor.getAttribute('href');
            const content = anchor.textContent;
            if (!content) return (0,typed_message/* makeTypedMessageEmpty */.WM)();
            return (0,typed_message/* makeTypedMessageAnchor */.Jv)(resolve(content), href !== null && href !== void 0 ? href : 'javascript: void 0;', content);
        } else if (node1 instanceof HTMLImageElement) {
            const image = node1;
            const src = image.getAttribute('src');
            const matched = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/);
            if (matched === null || matched === void 0 ? void 0 : matched[1]) {
                const codePoints = matched[1].split('-').map((x)=>Number.parseInt(`0x${x}`, 16)
                );
                return (0,typed_message/* makeTypedMessageText */.P)(String.fromCodePoint(...codePoints));
            }
            return (0,typed_message/* makeTypedMessageEmpty */.WM)();
        } else if (node1.childNodes.length) {
            const flattened = (0,lodash.flattenDeep)(Array.from(node1.childNodes).map(make));
            // conjunct text messages under same node
            if (flattened.every(typed_message/* isTypedMessageText */.Rz)) return (0,typed_message/* makeTypedMessageText */.P)(flattened.map((x)=>x.content
            ).join(''));
            return flattened;
        } else return (0,typed_message/* makeTypedMessageEmpty */.WM)();
    }
    const content = node.querySelector('m-activity__content');
    return content ? Array.from(content.childNodes).flatMap(make) : [];
};
const postParser = (node)=>{
    return {
        ...postNameParser(node),
        avatar: postAvatarParser(node),
        pid: postIdParser(node),
        messages: postContentMessageParser(node).filter((x)=>!(0,typed_message/* isTypedMessageEmpty */.YN)(x)
        )
    };
};

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/collecting/post.ts











const PostProviderMinds = {
    posts: social_network_utils/* creator.PostProviderStore */.Du.PostProviderStore(),
    start (signal) {
        collectPostsMindsInner(this.posts, signal);
    }
};
function collectPostsMindsInner(store, signal) {
    (0,utils_watcher/* startWatch */.f)(new umd.MutationObserverWatcher(postContentSelector()).useForeach((node, key, metadata)=>{
        const activitySelector = new umd.LiveSelector().replace(()=>[
                metadata.realCurrent
            ]
        ).closest('m-activity, m-activity__modal');
        const activityNode = activitySelector.evaluate()[0];
        // ? inject after comments
        const commentsSelector = activitySelector.clone().querySelectorAll('m-comment .m-comment__message');
        // ? inject comment text field
        const commentBoxSelector = activitySelector.clone().querySelectorAll('.m-commentPoster__form').map((x)=>x.parentElement
        );
        const { subscriptions , ...info } = (0,create_post_context/* createRefsForCreatePostContext */.T)();
        const postInfo = shared/* mindsShared.utils.createPostContext */.f.utils.createPostContext({
            comments: {
                commentBoxSelector,
                commentsSelector
            },
            rootElement: metadata,
            suggestedInjectionPoint: node,
            ...subscriptions
        });
        store.set(metadata, postInfo);
        function collectPostInfo() {
            const { pid , messages , handle , name , avatar  } = postParser(activityNode);
            if (!pid) return;
            const postBy = handle ? new src.ProfileIdentifier(base/* mindsBase.networkIdentifier */.NE.networkIdentifier, handle) : src.ProfileIdentifier.unknown;
            info.postID.value = pid;
            if (!info.postBy.value.equals(postBy)) info.postBy.value = postBy;
            info.nickname.value = name;
            info.avatarURL.value = avatar || null;
            // decode steganographic image
            // don't add await on this
            const images = (0,dom/* untilElementAvailable */.ft)(new umd.LiveSelector([
                activityNode
            ]).querySelectorAll('.m-activityContent__media--image img'), 10000).then(()=>getMetadataImages(activityNode)
            ).then((urls)=>{
                for (const url of urls)info.postMetadataImages.add(url);
                if (urls.length) return (0,src.makeTypedMessageTupleFromList)(...urls.map((x)=>(0,typed_message/* makeTypedMessageImage */.as)(x)
                ));
                return (0,src.makeTypedMessageEmpty)();
            }).catch(()=>(0,src.makeTypedMessageEmpty)()
            );
            info.postMessage.value = (0,src.makeTypedMessageTuple)([
                ...messages,
                (0,src.makeTypedMessagePromise)(images)
            ]);
        }
        collectPostInfo();
        return {
            onNodeMutation: collectPostInfo,
            onTargetChanged: collectPostInfo,
            onRemove: ()=>store.delete(metadata)
        };
    }), signal);
}
function getMetadataImages(activityNode) {
    const imgNodes = activityNode.querySelectorAll('.m-activityContent__media--image img') || [];
    if (!imgNodes.length) return [];
    const imgUrls = Array.from(imgNodes).map((node)=>node.src
    )// FIXME! there's a CORS issue on the CDN
    .map((src)=>src.replace('cdn.minds.com', 'minds.com')
    )// Use the master version of the image so the dimensions don't change
    .map((src)=>src.replace('xlarge', 'master')
    ).filter(Boolean);
    if (!imgUrls.length) return [];
    return imgUrls;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/createMuiStrictModeTheme.js
var createMuiStrictModeTheme = __webpack_require__(87872);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.6/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(98723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ./src/utils/hooks/useValueRef.ts
var useValueRef = __webpack_require__(54128);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(44713);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(51684);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/customization/custom.ts









// TODO: get this from DOM. But currently Minds has a single primary color
const primaryColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    68,
    170,
    255
]));
const primaryColorContrastColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const backgroundColorRef = new umd.ValueRef((0,theme_tools/* toRGB */.xr)([
    255,
    255,
    255
]));
const PaletteModeProviderMinds = {
    current: new umd.ValueRef('light'),
    start: startWatchThemeColor
};
function startWatchThemeColor(signal) {
    function updateThemeColor() {
        const contrastColor = (0,theme_tools/* getForegroundColor */.aF)(themeListItemSelector().evaluate());
        const backgroundColor = (0,theme_tools/* getBackgroundColor */.dF)(document.body);
        PaletteModeProviderMinds.current.value = (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? 'dark' : 'light';
        if (contrastColor) primaryColorContrastColorRef.value = contrastColor;
        if (backgroundColor) backgroundColorRef.value = backgroundColor;
    }
    const watcher = new umd.MutationObserverWatcher(themeListItemSelector()).addListener('onAdd', updateThemeColor).addListener('onChange', updateThemeColor).startWatch({
        childList: true,
        subtree: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
}
function useThemeMindsVariant() {
    const primaryColor = (0,useValueRef/* useValueRef */.E)(primaryColorRef);
    const primaryContrastColor = (0,useValueRef/* useValueRef */.E)(primaryColorContrastColorRef);
    const backgroundColor = (0,useValueRef/* useValueRef */.E)(backgroundColorRef);
    const MaskbookTheme = (0,theme/* useClassicMaskTheme */.Uk)({
        appearance: (0,theme_tools/* isDark */._T)((0,theme_tools/* fromRGB */.f2)(backgroundColor)) ? theme_src/* Appearance.dark */.um.dark : theme_src/* Appearance.light */.um.light
    });
    return (0,react.useMemo)(()=>{
        const primaryColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryColor);
        const primaryContrastColorRGB = (0,theme_tools/* fromRGB */.f2)(primaryContrastColor);
        (0,immer_esm/* setAutoFreeze */.Fl)(false);
        const MindsTheme = (0,immer_esm/* default */.ZP)(MaskbookTheme, (theme)=>{
            theme.palette.background.paper = backgroundColor;
            theme.palette.primary = {
                light: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, 10)),
                main: (0,theme_tools/* toRGB */.xr)(primaryColorRGB),
                dark: (0,theme_tools/* toRGB */.xr)((0,theme_tools/* shade */.wj)(primaryColorRGB, -10)),
                contrastText: (0,theme_tools/* toRGB */.xr)(primaryContrastColorRGB)
            };
            theme.shape.borderRadius = 15;
            theme.breakpoints.values = {
                xs: 0,
                sm: 687,
                md: 1024,
                lg: 1220,
                xl: 1920
            };
            theme.components = theme.components || {
            };
            theme.components.MuiButton = {
                defaultProps: {
                    size: 'medium',
                    disableElevation: true
                },
                styleOverrides: {
                    root: {
                        borderRadius: 500,
                        textTransform: 'initial',
                        fontWeight: 'bold',
                        minHeight: 39,
                        paddingLeft: 15,
                        paddingRight: 15,
                        boxShadow: 'none',
                        [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                            '&': {
                                height: '28px !important',
                                minHeight: 'auto !important',
                                padding: '0 14px !important'
                            }
                        }
                    },
                    sizeLarge: {
                        minHeight: 49,
                        paddingLeft: 30,
                        paddingRight: 30
                    },
                    sizeSmall: {
                        minHeight: 30,
                        paddingLeft: 15,
                        paddingRight: 15
                    }
                }
            };
            theme.components.MuiPaper = {
                defaultProps: {
                    elevation: 0
                }
            };
            theme.components.MuiTab = {
                styleOverrides: {
                    root: {
                        textTransform: 'none'
                    }
                }
            };
        });
        (0,immer_esm/* setAutoFreeze */.Fl)(true);
        return (0,createMuiStrictModeTheme/* default */.Z)(MindsTheme);
    }, [
        MaskbookTheme,
        backgroundColor,
        primaryColor,
        primaryContrastColor
    ]);
}
function MindsThemeProvider(props) {
    if (true) throw new Error('This API is only for Storybook!');
    return(/*#__PURE__*/ createElement(ThemeProvider, {
        theme: useThemeMindsVariant(),
        ...props
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/automation/pasteToCommentBoxMinds.ts



async function pasteToCommentBoxMinds(encryptedComment, current, dom) {
    const fail = ()=>{
        messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
            text: encryptedComment
        });
    };
    const root = dom || current.rootNode;
    if (!root) return fail();
    const input = root.querySelector('[contenteditable]');
    if (!input) return fail();
    (0,utils/* selectElementContents */.Ms)(input);
    (0,sdk/* pasteText */.M1)(encryptedComment);
    await (0,utils/* delay */.gw)(200);
    if (!root.innerText.includes(encryptedComment)) return fail();
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/CommentBox.tsx



function injectCommentBoxAtMinds() {
    return (0,defaults/* injectCommentBoxDefaultFactory */.SA)(pasteToCommentBoxMinds, (classes)=>({
            inputProps: {
                classes
            }
        })
    , (0,theme_src/* makeStyles */.ZL)()((theme)=>({
            root: {
                fontSize: 16,
                background: 'transparent',
                // FIXME: A weird issue with margins
                width: '96.2%',
                height: 44,
                borderRadius: 2,
                padding: '2px 1em',
                border: `1px solid ${theme.palette.mode === 'dark' ? '#414c57' : '#d3dbe3'}`,
                margin: '0 10px 10px',
                color: theme.palette.mode === 'dark' ? '#fff' : '#43434d',
                fontWeight: 400
            },
            input: {
                '&::placeholder': {
                    color: theme.palette.mode === 'dark' ? '#b8c1c' : '#72727c',
                    opacity: 1,
                    fontWeight: 400
                },
                '&:focus::placeholder': {
                    color: 'transparent'
                }
            }
        })
    ));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/components/CompositionDialog/Composition.tsx + 14 modules
var Composition = __webpack_require__(50269);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialog.tsx






function injectPostDialogAtMinds(signal) {
    renderPostDialogTo('popup', composerModalSelector(), signal);
    renderPostDialogTo('timeline', rootSelector(), signal);
}
function renderPostDialogTo(reason, ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls);
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Composition/* Composition */.f, {
        requireClipboardPermission: true,
        type: reason
    }));
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/PostDialogHint.tsx
var PostDialogHint = __webpack_require__(72981);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostDialogHint.tsx









function injectPostDialogHintAtMinds(signal) {
    renderPostDialogHintTo(postEditorInPopupSelector(), signal);
    renderPostDialogHintTo(postEditorInTimelineSelector(), signal);
}
function renderPostDialogHintTo(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls, document.querySelector('m-page'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHintAtMinds, {
            reason: "popup"
        }));
    });
}
const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    buttonText: {
        margin: 0
    }
});
function PostDialogHintAtMinds({ reason  }) {
    const { classes  } = useStyles();
    const onHintButtonClicked = (0,react.useCallback)(()=>messages/* MaskMessage.events.requestComposition.sendToLocal */.y.events.requestComposition.sendToLocal({
            reason,
            open: true
        })
    , [
        reason
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostDialogHint/* PostDialogHint */.A, {
        onHintButtonClicked: onHintButtonClicked,
        NotSetupYetPromptProps: {
            classes: {
                button: classes.buttonText
            }
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/inject.tsx


function injectPostBoxComposed(signal) {
    injectPostDialogAtMinds(signal);
    injectPostDialogHintAtMinds(signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostInspector.tsx + 12 modules
var PostInspector = __webpack_require__(89177);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostInspector.tsx

function injectPostInspectorAtMinds(signal, current) {
    return (0,PostInspector/* injectPostInspectorDefault */.J)()(current, signal);
}

// EXTERNAL MODULE: ./src/social-network/defaults/inject/PostReplacer.tsx + 1 modules
var PostReplacer = __webpack_require__(20351);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/PostReplacer.tsx

function resolveContentNode(node) {
    return node.closest([
        'm-activity__content .m-activityContent__messageWrapper > span:first-child',
        'm-activity__content .m-activityContent__mediaDescriptionText', 
    ].join());
}
function injectPostReplacerAtMinds(signal, current) {
    return (0,PostReplacer/* injectPostReplacer */.C)({
        zipPost (node) {
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'none';
        },
        unzipPost (node) {
            if (!node.current) return;
            const langNode = resolveContentNode(node.current);
            if (langNode) langNode.style.display = 'unset';
        }
    })(current, signal);
}

// EXTERNAL MODULE: ./src/components/InjectedComponents/SearchResultBox.tsx
var SearchResultBox = __webpack_require__(39562);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SearchResult.tsx






function injectSearchResultBoxAtMinds(signal) {
    const watcher = new umd.MutationObserverWatcher(searchResultHeadingSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.beforeShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResultBox/* SearchResultBox */.L, {
    }));
}

// EXTERNAL MODULE: ./src/components/shared/NotSetupYetPrompt.tsx + 1 modules
var NotSetupYetPrompt = __webpack_require__(77766);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/SetupPrompt.tsx







function injectSetupPromptAtMinds(signal) {
    injectSetupPrompt(postEditorInPopupSelector(), signal);
    injectSetupPrompt(postEditorInTimelineSelector(), signal);
}
function injectSetupPrompt(ls, signal) {
    const watcher = new umd.MutationObserverWatcher(ls, document.querySelector('m-page'));
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    watcher.useForeach((node, key, meta)=>{
        var ref, ref1;
        const tagsAnchor = (ref = watcher.firstDOMProxy.current) === null || ref === void 0 ? void 0 : (ref1 = ref.parentElement) === null || ref1 === void 0 ? void 0 : ref1.querySelector('a:nth-child(4)');
        if (tagsAnchor) {
            tagsAnchor.style.marginRight = '10px';
        }
        (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
            signal
        }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(MindsNotSetupYet, {
        }));
    });
}
const SetupPrompt_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    buttonText: {
        margin: 0
    },
    content: {
        marginRight: 5
    }
});
const MindsNotSetupYet = ()=>{
    const { classes  } = SetupPrompt_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NotSetupYetPrompt/* NotSetupYetPrompt */.N, {
        classes: {
            button: classes.buttonText,
            content: classes.content
        }
    }));
};

// EXTERNAL MODULE: ./src/components/InjectedComponents/ToolboxHint.tsx + 5 modules
var ToolboxHint = __webpack_require__(25738);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/injection/ToolboxHint.tsx







function injectToolboxHintAtMinds(signal) {
    const watcher = new umd.MutationObserverWatcher(toolBoxInSideBarSelector());
    (0,utils_watcher/* startWatch */.f)(watcher, signal);
    (0,renderInShadowRoot/* createReactRootShadowed */.o)(watcher.firstDOMProxy.afterShadow, {
        signal
    }).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHintAtMinds, {
    }));
}
const ToolboxHint_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            paddingTop: 4,
            paddingBottom: 4,
            cursor: 'pointer',
            [theme.breakpoints.down('lg')]: {
                justifyContent: 'center'
            }
        },
        menuItem: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        title: {
            color: theme.palette.mode === 'dark' ? '#b8c1ca' : '#72727c',
            fontSize: 17,
            fontWeight: 700,
            marginLeft: 24,
            [theme.breakpoints.down('lg')]: {
                display: 'none'
            }
        },
        text: {
            marginLeft: 12,
            fontSize: 15,
            color: theme.palette.mode === 'dark' ? '#b8c1ca' : '#72727c',
            paddingRight: theme.spacing(2)
        },
        icon: {
            color: theme.palette.mode === 'dark' ? '#b8c1ca' : '#72727c'
        },
        button: {
            '&:hover': {
                color: theme.palette.mode === 'dark' ? '#1b85d6' : '#1b85d6'
            },
            [theme.breakpoints.up('lg')]: {
                paddingLeft: 0
            }
        }
    })
);
function ToolboxHintAtMinds() {
    const { classes  } = ToolboxHint_useStyles();
    // Todo: add click handler
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ToolboxHint/* ToolboxHint */.e, {
        classes: {
            wrapper: classes.wrapper,
            menuItem: classes.menuItem,
            title: classes.title,
            text: classes.text,
            button: classes.button,
            icon: classes.icon
        }
    }));
}

;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/ui-provider.ts



























const mindsUI = {
    ...base/* mindsBase */.NE,
    ...shared/* mindsShared */.f,
    automation: {
        maskCompositionDialog: {
            open: openComposeBoxMinds
        },
        nativeCommentBox: undefined,
        nativeCompositionDialog: {
            appendText: pasteTextToCompositionMinds,
            // TODO: make a better way to detect
            attachImage: pasteImageToCompositionMinds()
        },
        redirect: {
            newsFeed: gotoNewsFeedPageMinds,
            profilePage: gotoProfilePageMinds
        }
    },
    collecting: {
        identityProvider: IdentityProviderMinds,
        postsProvider: PostProviderMinds,
        getSearchedKeyword: getSearchedKeywordAtMinds
    },
    customization: {
        paletteMode: PaletteModeProviderMinds,
        useTheme: useThemeMindsVariant
    },
    init (signal) {
        const friends = social_network.stateCreator.friends();
        const profiles = social_network.stateCreator.profiles();
        (0,InitFriends/* InitAutonomousStateFriends */.f)(signal, friends, shared/* mindsShared.networkIdentifier */.f.networkIdentifier);
        (0,InitProfiles/* InitAutonomousStateProfiles */.S)(signal, profiles, shared/* mindsShared.networkIdentifier */.f.networkIdentifier);
        return {
            friends,
            profiles
        };
    },
    injection: {
        toolBoxInNavBar: injectToolboxHintAtMinds,
        pageInspector: (0,PageInspector/* injectPageInspectorDefault */.R)(),
        postInspector: injectPostInspectorAtMinds,
        enhancedPostRenderer: injectPostReplacerAtMinds,
        setupPrompt: injectSetupPromptAtMinds,
        searchResult: injectSearchResultBoxAtMinds,
        newPostComposition: {
            start: injectPostBoxComposed,
            supportedInputTypes: {
                text: true,
                image: true
            },
            supportedOutputTypes: {
                text: true,
                image: true
            }
        },
        setupWizard: (0,StartSetupGuide/* createTaskStartSetupGuideDefault */.Z)('minds.com'),
        commentComposition: {
            compositionBox: (0,defaults/* injectPostCommentsDefault */.MF)(),
            commentInspector: injectCommentBoxAtMinds()
        },
        // NOT SUPPORTED YET
        userBadge: undefined
    },
    configuration: {
        steganography: {
            password () {
                // ! Change this might be a breaking change !
                return new type/* ProfileIdentifier */.WO('minds.com', type/* ProfileIdentifier.getUserName */.WO.getUserName(IdentityProviderMinds.lastRecognized.value.identifier) || type/* ProfileIdentifier.getUserName */.WO.getUserName(settings/* currentSelectedIdentity */.G[base/* mindsBase.networkIdentifier */.NE.networkIdentifier].value) || type/* ProfileIdentifier.getUserName */.WO.getUserName(social_network.globalUIState.profiles.value[0].identifier) || (0,esm/* unreachable */.t1)('Cannot figure out password')).toText();
            }
        }
    }
};
/* harmony default export */ const ui_provider = (mindsUI);


/***/ }),

/***/ 57243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SA": () => (/* reexport safe */ _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__.S),
/* harmony export */   "MF": () => (/* reexport safe */ _inject_Comments__WEBPACK_IMPORTED_MODULE_2__.M),
/* harmony export */   "Jg": () => (/* reexport safe */ _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__.J),
/* harmony export */   "Zh": () => (/* reexport safe */ _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__.Z)
/* harmony export */ });
/* harmony import */ var _automation_AttachImageToComposition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67162);
/* harmony import */ var _inject_CommentBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63024);
/* harmony import */ var _inject_Comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51134);
/* harmony import */ var _inject_PostInspector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89177);
/* harmony import */ var _state_InitFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46016);
/* harmony import */ var _state_InitProfiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79328);
/* harmony import */ var _inject_PageInspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12582);
/* harmony import */ var _inject_PostReplacer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20351);
/* harmony import */ var _inject_StartSetupGuide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58963);











/***/ }),

/***/ 63024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ injectCommentBoxDefaultFactory)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(64556);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/CommentBox.tsx




const useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        fontSize: 13,
        background: '#3a3b3c',
        width: '100%',
        height: 34,
        borderRadius: 20,
        padding: '2px 1em',
        boxSizing: 'border-box',
        marginTop: 6,
        color: '#e4e6eb'
    },
    input: {
        '&::placeholder': {
            color: '#b0b3b8',
            opacity: 1
        },
        '&:focus::placeholder': {
            color: '#d0d2d6'
        }
    }
});
function CommentBox(props) {
    const { classes  } = useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
        className: classes.root,
        inputProps: {
            className: classes.input,
            'data-testid': 'comment_input'
        },
        placeholder: t('comment_box__placeholder'),
        onKeyDownCapture: (e)=>{
            const node = e.target;
            if (!node.value) return;
            if (e.key === 'Enter') {
                props.onSubmit(node.value);
                node.value = '';
            }
        },
        ...props.inputProps
    }));
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(19439);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/CommentBox.tsx












const defaultOnPasteToCommentBox = async (encryptedComment, _current, _realCurrent)=>{
    messages/* MaskMessage.events.autoPasteFailed.sendToLocal */.y.events.autoPasteFailed.sendToLocal({
        text: encryptedComment
    });
};
// TODO: should not rely on onPasteToCommentBoxFacebook.
// Use automation.nativeCommentBox.appendText
const injectCommentBoxDefaultFactory = function(onPasteToCommentBox = defaultOnPasteToCommentBox, additionPropsToCommentBox = ()=>({
    })
, useCustomStyles = (0,src/* makeStyles */.ZL)()({
})) {
    const CommentBoxUI = /*#__PURE__*/ (0,react.memo)(function CommentBoxUI1({ dom  }) {
        const info = (0,usePostInfo/* usePostInfo */.oQ)();
        const payload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
        const postContent = usePostInfo/* usePostInfoDetails.transformedPostContent */.H9.transformedPostContent();
        const { classes  } = useCustomStyles();
        const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
        const props = additionPropsToCommentBox(classes);
        const onCallback = (0,react.useCallback)(async (content)=>{
            const postIV = iv || payload.unwrap().iv;
            const decryptedText = (0,typed_message/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
            const encryptedComment = await service/* default.Crypto.encryptComment */.ZP.Crypto.encryptComment(postIV, decryptedText, content);
            onPasteToCommentBox(encryptedComment, info, dom).catch(console.error);
        }, [
            payload,
            postContent,
            info,
            dom,
            iv
        ]);
        if (!(payload && postContent)) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBox, {
            onSubmit: onCallback,
            ...props
        }));
    });
    return (signal, current)=>{
        if (!current.commentBoxSelector) return lodash.noop;
        const commentBoxWatcher = new umd.MutationObserverWatcher(current.commentBoxSelector.clone(), current.rootNode || void 0).useForeach((node, key, meta)=>{
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CommentBoxUI, {
                    ...current,
                    dom: meta.realCurrent
                })
            }));
            return root.destory;
        });
        (0,watcher/* startWatch */.f)(commentBoxWatcher, signal);
        return ()=>commentBoxWatcher.stopWatch()
        ;
    };
};


/***/ }),

/***/ 51134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ injectPostCommentsDefault)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(19305);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(13622);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/Lock.js
var Lock = __webpack_require__(91526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(88088);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(25830);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(83250);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PostComments.tsx










const useStyle = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        height: 'auto',
        padding: '6px'
    },
    label: {
        whiteSpace: 'initial'
    }
});
function PostCommentDecrypted(props) {
    const chipClasses = (0,src.useStylesExtends)(useStyle(), props.ChipProps || {
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                "data-testid": "comment_field",
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Lock/* default */.Z, {
                }),
                label: props.children,
                color: "secondary",
                ...props.ChipProps,
                classes: chipClasses
            })
        ]
    }));
}
function PostComment(props) {
    const { failedComponent: Fail , waitingComponent: Wait , needZip  } = props;
    const comment = (0,src.useValueRef)(props.comment);
    const postContent = usePostInfo/* usePostInfoDetails.transformedPostContent */.H9.transformedPostContent();
    const postPayload = usePostInfo/* usePostInfoDetails.postPayload */.H9.postPayload();
    const iv = usePostInfo/* usePostInfoDetails.iv */.H9.iv();
    const postIV = postPayload.map((x)=>x.iv
    ).unwrapOr(iv);
    const dec = (0,useAsync/* default */.Z)(async ()=>{
        const decryptedText = (0,typed_message/* extractTextFromTypedMessage */.Vc)(postContent).unwrap();
        if (!postIV || !decryptedText) throw new Error('Decrypt comment failed');
        const result = await service/* default.Crypto.decryptComment */.ZP.Crypto.decryptComment(postIV, decryptedText, comment);
        if (result === null) throw new Error('Decrypt result empty');
        return result;
    }, [
        postIV,
        postContent,
        comment
    ]);
    const Success = props.successComponent || PostCommentDecrypted;
    (0,react.useEffect)(()=>void (dec.value && needZip())
    , [
        dec.value,
        needZip
    ]);
    if (dec.error) return Fail ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Fail, {
        error: dec.error
    }) : null;
    if (dec.loading) return Wait ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Wait, {
    }) : null;
    if (dec.value) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Success, {
        ...props.successComponentProps,
        children: dec.value
    }));
    return null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(19439);
;// CONCATENATED MODULE: ./src/social-network/defaults/inject/Comments.tsx










/**
 * Creat a default implementation of injectPostComments
 */ function injectPostCommentsDefault(config = {
}, additionalPropsToPostComment = ()=>({
    })
, useCustomStyles = (0,theme_src/* makeStyles */.ZL)()({
})) {
    const { needZip  } = config;
    const PostCommentDefault = /*#__PURE__*/ (0,react.memo)(function PostCommentDefault1(props) {
        const { classes  } = useCustomStyles();
        const additional = additionalPropsToPostComment(classes);
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostComment, {
            ...props,
            ...additional
        }));
    });
    return function injectPostComments(signal, current) {
        const selector = current.commentsSelector;
        if (!selector) return lodash.noop;
        const commentWatcher = new umd.MutationObserverWatcher(selector, current.rootNode || void 0).useForeach((commentNode, key, meta)=>{
            const commentRef = new umd.ValueRef((0,utils/* collectNodeText */.aW)(commentNode));
            const needZipF = needZip || (()=>{
                commentNode.style.whiteSpace = 'nowrap';
                commentNode.style.overflow = 'hidden';
            });
            const root = (0,renderInShadowRoot/* createReactRootShadowed */.o)(meta.afterShadow, {
                signal
            });
            root.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(usePostInfo/* PostInfoProvider */.eT, {
                post: current,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostCommentDefault, {
                    needZip: needZipF,
                    comment: commentRef
                })
            }));
            return {
                onNodeMutation () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onTargetChanged () {
                    commentRef.value = (0,utils/* collectNodeText */.aW)(commentNode);
                },
                onRemove () {
                    root.destory();
                }
            };
        });
        (0,watcher/* startWatch */.f)(commentWatcher, signal);
        return ()=>commentWatcher.stopWatch()
        ;
    };
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

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.8426.js
=======
/***/ }),

/***/ 34980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d7dff5a23ed1ca80b3b.png";

>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.4520.js
/***/ })

}]);