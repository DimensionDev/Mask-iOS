"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[839],{

/***/ 36897:
/***/ ((module) => {



module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 30309:
/***/ ((module) => {


module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 78336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(11178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(23887);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(94513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(96727);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(35229);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIconUI(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(44131);
// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var base = __webpack_require__(45279);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(45181);
;// CONCATENATED MODULE: ./src/components/shared/InjectedDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme, { snsId  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: {
            ...snsId === base/* MINDS_ID */.fN || snsId === facebook_com_base/* FACEBOOK_ID */.Iz ? {
                width: 'auto',
                backgroundImage: 'none'
            } : {}
        }
    })
);
function InjectedDialog(props) {
    var ref, ref1, ref2;
    const overwrite = social_network/* activatedSocialNetworkUI.customization.componentOverwrite */.LM.customization.componentOverwrite || {};
    var ref3;
    props = (ref3 = (ref = overwrite.InjectedDialog) === null || ref === void 0 ? void 0 : (ref1 = ref.props) === null || ref1 === void 0 ? void 0 : ref1.call(ref, props)) !== null && ref3 !== void 0 ? ref3 : props;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,src/* useStylesExtends */.Bc)(useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    }), props, (ref2 = overwrite.InjectedDialog) === null || ref2 === void 0 ? void 0 : ref2.classes);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , disableTitleBorder , ...rest } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,src/* useDialogStackActor */.tE)(open);
    return (0,utils/* usePortalShadowRoot */.ad)((container)=>{
        /*#__PURE__*/ return (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t('post_dialog__dismiss_aria'),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIconUI, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                })
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        });
    });
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>{
        return (child === null || child === void 0 ? void 0 : child.type) === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,src/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null;
    }) || []).filter(Boolean);
}


/***/ }),

/***/ 95029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniq.js
var uniq = __webpack_require__(78854);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(88785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(61733);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(83544);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(56789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/CardActions/CardActions.js + 1 modules
var CardActions = __webpack_require__(7301);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.4_881b2a51613eca9a23c14f7ecef9122a/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(61460);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findIndex.js
var findIndex = __webpack_require__(72636);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isValid/index.js + 1 modules
var isValid = __webpack_require__(32526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/VerifiedUser.js
var VerifiedUser = __webpack_require__(68177);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/ArrowDropDown.js
var ArrowDropDown = __webpack_require__(63854);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(7282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(93230);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleTab.tsx



const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    root: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
        overflow: 'auto'
    }
});
function CollectibleTab(props) {
    const classes = (0,theme_src/* useStylesExtends */.Bc)(useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes.root,
        elevation: 0,
        ...props.CardProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
            className: classes.content,
            children: props.children
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7/node_modules/opensea-js/lib/types.js
var types = __webpack_require__(95356);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(18249);
// EXTERNAL MODULE: ./src/plugins/Collectible/types/index.ts + 2 modules
var Collectible_types = __webpack_require__(14685);
// EXTERNAL MODULE: ./src/plugins/EVM/hooks/index.ts + 8 modules
var hooks = __webpack_require__(31638);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(23290);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(52522);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ./src/plugins/Collectible/messages.ts
var messages = __webpack_require__(62986);
;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useAssetOrder.ts







function useAssetOrder(provider, token) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!token) return;
        switch(provider){
            case evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
                const openSeaResponse = await messages/* PluginCollectibleRPC.getAssetFromSDK */.O.getAssetFromSDK(token.contractAddress, token.tokenId);
                const getPrice = (order)=>{
                    var ref;
                    const _order = order;
                    var ref1;
                    return (ref1 = (0,web3_providers_src/* getOrderUnitPrice */.bb)(_order.currentPrice, (ref = _order.paymentTokenContract) === null || ref === void 0 ? void 0 : ref.decimals, _order.quantity)) !== null && ref1 !== void 0 ? ref1 : base_src/* ZERO */.xE;
                };
                var _sellOrders;
                const sellOrders = (_sellOrders = openSeaResponse.sellOrders) !== null && _sellOrders !== void 0 ? _sellOrders : [];
                const desktopOrder = (0,head/* default */.Z)(sellOrders.sort((a, b)=>getPrice(a).toNumber() - getPrice(b).toNumber()
                ));
                return desktopOrder;
            case evm_types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
                return;
            case evm_types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
                return;
            default:
                (0,esm/* unreachable */.t1)(provider);
        }
    }, [
        provider,
        token
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/hooks/useCollectibleState.ts







function useCollectibleState(token) {
    const [tabIndex, setTabIndex] = (0,react.useState)(Collectible_types/* CollectibleTab.ARTICLE */.s7.ARTICLE);
    const [provider, setProvider] = (0,react.useState)(evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA);
    var ref, ref1;
    const asset = (0,hooks/* useAsset */.Gs)((ref = token === null || token === void 0 ? void 0 : token.contractAddress) !== null && ref !== void 0 ? ref : '', (ref1 = token === null || token === void 0 ? void 0 : token.tokenId) !== null && ref1 !== void 0 ? ref1 : '', provider);
    // #region asset order from sdk
    const assetOrder = useAssetOrder(provider, token);
    // #endregion
    // #region offers
    const [offerPage, setOfferPage] = (0,react.useState)(0);
    const offers = (0,hooks/* useOrders */.yi)(provider, offerPage, 50, tabIndex === Collectible_types/* CollectibleTab.OFFER */.s7.OFFER ? token === null || token === void 0 ? void 0 : token.contractAddress : undefined, tabIndex === Collectible_types/* CollectibleTab.OFFER */.s7.OFFER ? token === null || token === void 0 ? void 0 : token.tokenId : undefined, types.OrderSide.Buy);
    // #endregion
    // #region orders
    const [orderPage, setOrderPage] = (0,react.useState)(0);
    const orders = (0,hooks/* useOrders */.yi)(provider, orderPage, 50, tabIndex === Collectible_types/* CollectibleTab.LISTING */.s7.LISTING ? token === null || token === void 0 ? void 0 : token.contractAddress : undefined, tabIndex === Collectible_types/* CollectibleTab.LISTING */.s7.LISTING ? token === null || token === void 0 ? void 0 : token.tokenId : undefined, types.OrderSide.Sell);
    // #endregion
    // #region events
    const [eventPage, setEventPage] = (0,react.useState)(0);
    const events = (0,hooks/* useHistory */.k6)(provider, eventPage, 50, tabIndex === Collectible_types/* CollectibleTab.HISTORY */.s7.HISTORY ? token === null || token === void 0 ? void 0 : token.contractAddress : undefined, tabIndex === Collectible_types/* CollectibleTab.HISTORY */.s7.HISTORY ? token === null || token === void 0 ? void 0 : token.tokenId : undefined);
    // #endregion
    return {
        token,
        asset,
        assetOrder,
        provider,
        setProvider,
        tabIndex,
        setTabIndex,
        offers,
        offerPage,
        setOfferPage,
        orders,
        orderPage,
        setOrderPage,
        events,
        eventPage,
        setEventPage
    };
}
const CollectibleState = (0,unstated_next/* createContainer */.f)(useCollectibleState);

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ArticleTab.tsx






const ArticleTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        body: {
            display: 'flex',
            justifyContent: 'center',
            minHeight: 300
        },
        player: {
            maxWidth: '100%',
            maxHeight: '100%',
            border: 'none'
        },
        errorPlaceholder: {
            padding: '82px 0',
            backgroundColor: theme.palette.background.default,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            width: '100%'
        },
        loadingPlaceholder: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            padding: '74px 0'
        },
        loadingIcon: {
            width: 36,
            height: 52
        },
        errorIcon: {
            width: 36,
            height: 36
        },
        iframe: {
            minWidth: 300,
            minHeight: 300
        }
    })
);
function ArticleTab(props) {
    var ref, ref1;
    const { classes  } = ArticleTab_useStyles();
    const { asset  } = CollectibleState.useContainer();
    return (0,react.useMemo)(()=>{
        if (!asset.value) return null;
        const resourceUrl = asset.value.animation_url || asset.value.image_url;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.body,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* AssetPlayer */.IR, {
                    url: resourceUrl,
                    options: {
                        playsInline: true
                    },
                    classes: classes,
                    isFixedIframeSize: false
                })
            })
        }));
    }, [
        (ref = asset.value) === null || ref === void 0 ? void 0 : ref.animation_url,
        (ref1 = asset.value) === null || ref1 === void 0 ? void 0 : ref1.image_url,
        classes
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(80945);
// EXTERNAL MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx + 1 modules
var Markdown = __webpack_require__(41482);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Account.tsx



function Account({ address , username  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: (0,utils_address/* isSameAddress */.Wr)(account, address !== null && address !== void 0 ? address : '') ? t('plugin_collectible_you') : username || (address === null || address === void 0 ? void 0 : address.slice(2, 8))
    }));
}

// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var Collectible_pipes = __webpack_require__(36671);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/TokenTab.tsx











const TokenTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            paddingTop: 0,
            paddingBottom: '0 !important'
        },
        container: {
            padding: theme.spacing(1)
        },
        markdown: {
            margin: theme.spacing(1, 0)
        },
        description: {
            fontSize: 14,
            wordBreak: 'break-all'
        },
        trait_content: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: theme.spacing(2)
        },
        trait: {
            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: 14,
            fontWeight: 600
        },
        chain_row: {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(0.5),
            '&:last-child': {
                marginBottom: 0
            }
        },
        tokenId: {
            maxWidth: 112,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    };
});
function TokenTab(props) {
    var ref14, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = TokenTab_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { token , asset , provider  } = CollectibleState.useContainer();
    if (!asset.value) return null;
    var ref11, ref12, ref13;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleTab, {
        classes: {
            content: classes.content
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_base')
                    }),
                    asset.value.creator ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_create_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: (0,Collectible_pipes/* resolveUserUrlOnCurrentProvider */.CC)(chainId, asset.value.creator.address, provider, (ref14 = asset.value.creator.user) === null || ref14 === void 0 ? void 0 : ref14.username),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: asset.value.creator.address,
                                    username: (ref1 = asset.value.creator.user) === null || ref1 === void 0 ? void 0 : ref1.username
                                })
                            })
                        ]
                    }) : asset.value.owner ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        children: [
                            t('plugin_collectible_owned_by'),
                            ' ',
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: (0,Collectible_pipes/* resolveUserUrlOnCurrentProvider */.CC)(chainId, (ref2 = asset.value.owner) === null || ref2 === void 0 ? void 0 : ref2.address, provider, (ref3 = asset.value.owner) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.user) === null || ref4 === void 0 ? void 0 : ref4.username),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                    address: (ref5 = asset.value.owner) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.user) === null || ref6 === void 0 ? void 0 : ref6.username,
                                    username: (ref7 = asset.value.owner) === null || ref7 === void 0 ? void 0 : ref7.address
                                })
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                        classes: {
                            root: classes.markdown
                        },
                        content: (ref11 = (ref8 = asset.value) === null || ref8 === void 0 ? void 0 : ref8.description) !== null && ref11 !== void 0 ? ref11 : ''
                    })
                ]
            }),
            ((ref9 = asset.value.traits) === null || ref9 === void 0 ? void 0 : ref9.length) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_properties')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.trait_content,
                        children: asset.value.traits.map(({ trait_type , value  })=>{
                            var ref;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                underline: "none",
                                href: ((ref = asset.value) === null || ref === void 0 ? void 0 : ref.slug) ? (0,Collectible_pipes/* resolveTraitLinkOnOpenSea */.zu)(chainId, asset.value.slug, trait_type, value) : '',
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                    className: classes.trait,
                                    variant: "outlined",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            color: "primary",
                                            children: trait_type
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body2",
                                            children: value
                                        })
                                    ]
                                })
                            }, trait_type + value));
                        })
                    })
                ]
            }) : null,
            asset.value.asset_contract ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: [
                            t('plugin_collectible_about'),
                            " ",
                            asset.value.asset_contract.name
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        variant: "body2",
                        children: (ref10 = asset.value.asset_contract) === null || ref10 === void 0 ? void 0 : ref10.description
                    })
                ]
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        sx: {
                            marginBottom: 1
                        },
                        children: t('plugin_collectible_chain_info')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_contract_address')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(evm_types/* ChainId.Mainnet */.a_.Mainnet, (ref12 = token === null || token === void 0 ? void 0 : token.contractAddress) !== null && ref12 !== void 0 ? ref12 : ''),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                        address: (ref13 = token === null || token === void 0 ? void 0 : token.contractAddress) !== null && ref13 !== void 0 ? ref13 : '',
                                        size: 4,
                                        formatter: formatter/* formatEthereumAddress */.j8
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_token_id')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.tokenId,
                                variant: "body2",
                                children: token === null || token === void 0 ? void 0 : token.tokenId
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.chain_row,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t('plugin_collectible_block_chain')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: (0,chainDetailed/* getChainName */.qz)(chainId)
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(70884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(53361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(50440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(80689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(23930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(21065);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/formatDistanceToNow/index.js
var formatDistanceToNow = __webpack_require__(57733);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OrderRow.tsx












const OrderRow_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: 1
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5),
            fontSize: 14,
            lineHeight: 1
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        tokenLink: {
            display: 'flex',
            alignItems: 'center'
        },
        content: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            lineHeight: 1
        }
    };
});
function OrderRow({ order , isDifferenceToken  }) {
    var ref17, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13, ref14, ref15;
    const { classes  } = OrderRow_useStyles();
    const { provider  } = CollectibleState.useContainer();
    const address = ((ref17 = order.maker_account) === null || ref17 === void 0 ? void 0 : (ref1 = ref17.user) === null || ref1 === void 0 ? void 0 : ref1.username) || ((ref2 = order.maker_account) === null || ref2 === void 0 ? void 0 : ref2.address) || '';
    const link = (0,react.useMemo)(()=>{
        var ref;
        return provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? dist_default()('https://opensea.io/accounts/:address', {
            address
        }) : (ref = order.maker_account) === null || ref === void 0 ? void 0 : ref.link;
    }, [
        order,
        provider,
        address
    ]);
    var _quantity, _quantity1, ref16;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: link,
                    title: address,
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: (ref3 = order.maker_account) === null || ref3 === void 0 ? void 0 : ref3.profile_img_url,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                address: (ref4 = order.maker_account) === null || ref4 === void 0 ? void 0 : ref4.address,
                                username: (ref5 = order.maker_account) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.user) === null || ref6 === void 0 ? void 0 : ref6.username
                            })
                        })
                    ]
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.content,
                            children: [
                                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(evm_types/* ChainId.Mainnet */.a_.Mainnet, order.payment_token),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: classes.tokenLink,
                                    children: ((ref7 = order.payment_token_contract) === null || ref7 === void 0 ? void 0 : ref7.image_url) && /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: order.payment_token_contract.image_url,
                                        className: classes.token,
                                        alt: (ref8 = order.payment_token_contract) === null || ref8 === void 0 ? void 0 : ref8.symbol
                                    })
                                }) : null,
                                (0,web3_providers_src/* getOrderUnitPrice */.bb)(order.current_price, (ref9 = order.payment_token_contract) === null || ref9 === void 0 ? void 0 : ref9.decimals, order.quantity),
                                ' ',
                                (ref10 = order.payment_token_contract) === null || ref10 === void 0 ? void 0 : ref10.symbol
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: (_quantity = order.quantity) !== null && _quantity !== void 0 ? _quantity : 0,
                                decimals: !(0,base_src/* isOne */.P$)((_quantity1 = order.quantity) !== null && _quantity1 !== void 0 ? _quantity1 : 0) ? 8 : 0,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex'
                            },
                            className: classes.content,
                            children: [
                                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(evm_types/* ChainId.Mainnet */.a_.Mainnet, order.payment_token),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: classes.tokenLink,
                                    children: ((ref11 = order.payment_token_contract) === null || ref11 === void 0 ? void 0 : ref11.image_url) ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: order.payment_token_contract.image_url,
                                        className: classes.token,
                                        alt: (ref12 = order.payment_token_contract) === null || ref12 === void 0 ? void 0 : ref12.symbol
                                    }) : null
                                }) : null,
                                (ref14 = (0,web3_providers_src/* getOrderUnitPrice */.bb)(order.current_price, (ref13 = order.payment_token_contract) === null || ref13 === void 0 ? void 0 : ref13.decimals, order.quantity)) === null || ref14 === void 0 ? void 0 : ref14.toString(),
                                ' ',
                                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? (ref16 = (ref15 = order.payment_token_contract) === null || ref15 === void 0 ? void 0 : ref15.symbol) !== null && ref16 !== void 0 ? ref16 : '' : 'ETH'
                            ]
                        })
                    }),
                    provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            children: order.expiration_time && !(0,base_src/* isZero */.Fr)(order.expiration_time) && (0,formatDistanceToNow/* default */.Z)(new Date(order.expiration_time * 1000), {
                                addSuffix: true
                            })
                        })
                    }) : null
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableFooter/TableFooter.js + 1 modules
var TableFooter = __webpack_require__(44996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TablePagination/TablePagination.js + 3 modules
var TablePagination = __webpack_require__(26655);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Pagination.tsx




const Pagination_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    spacer: {
        flex: 0
    },
    toolbar: {
        minHeight: 'unset',
        paddingLeft: 16
    },
    actions: {
        marginLeft: 0
    }
});
const TableListPagination = /*#__PURE__*/ (0,react.memo)(({ handlePrevClick , handleNextClick , prevDisabled , nextDisabled , page , pageCount  })=>{
    const { classes  } = Pagination_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                rowsPerPage: pageCount,
                rowsPerPageOptions: [
                    pageCount
                ],
                count: -1,
                page: page,
                classes: classes,
                onPageChange: ()=>{},
                labelDisplayedRows: ()=>null
                ,
                backIconButtonProps: {
                    onClick: handlePrevClick,
                    size: 'small',
                    disabled: prevDisabled
                },
                nextIconButtonProps: {
                    onClick: handleNextClick,
                    size: 'small',
                    disabled: nextDisabled
                }
            })
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(56213);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/LoadingTable.tsx


function LoadingTable() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 22
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                children: Array.from({
                    length: 5
                }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                animation: "wave",
                                variant: "rectangular",
                                width: "100%",
                                height: 14
                            })
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableFooter/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 28
                        })
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/OfferTab.tsx












const OfferTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none',
            textAlign: 'center'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function OfferTab() {
    var ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = OfferTab_useStyles();
    const { asset , provider , offers , offerPage , setOfferPage  } = CollectibleState.useContainer();
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA) {
            var ref3;
            var _expiration_time;
            return ((ref3 = offers.value) === null || ref3 === void 0 ? void 0 : ref3.data.some((item)=>{
                var ref, ref2;
                return ((ref = item.payment_token_contract) === null || ref === void 0 ? void 0 : ref.symbol) !== 'WETH' && ((ref2 = item.payment_token_contract) === null || ref2 === void 0 ? void 0 : ref2.symbol) !== 'ETH' || item.quantity && !(0,base_src/* isOne */.P$)(item.quantity);
            })) && offers.value.data.filter((item)=>(0,base_src/* isZero */.Fr)((_expiration_time = item.expiration_time) !== null && _expiration_time !== void 0 ? _expiration_time : 0)
            ).length === 0;
        } else {
            return false;
        }
    }, [
        provider,
        offers
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        var ref;
        if (!((ref = offers.value) === null || ref === void 0 ? void 0 : ref.data.length)) return [];
        return offers.value.data;
    }, [
        offers
    ]);
    if (asset.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {}));
    if (!((ref1 = offers.value) === null || ref1 === void 0 ? void 0 : ref1.data.length) || asset.error || !dataSource.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_offers')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>asset.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.order_hash)
                    )
                }),
                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA && dataSource.length || offerPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setOfferPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setOfferPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: offerPage === 0,
                    nextDisabled: dataSource.length < 10,
                    page: offerPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingTab.tsx













const ListingTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        content: {
            padding: '0 !important'
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none',
            textAlign: 'center'
        },
        button: {
            marginLeft: theme.spacing(1)
        }
    };
});
function ListingTab() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingTab_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const { token , asset , provider , orders , orderPage , setOrderPage  } = CollectibleState.useContainer();
    const isDifferenceToken = (0,react.useMemo)(()=>{
        if (provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA) {
            var ref3, ref1;
            var _expiration_time;
            return ((ref3 = orders.value) === null || ref3 === void 0 ? void 0 : ref3.data.some((item)=>{
                var ref, ref2;
                return ((ref = item.payment_token_contract) === null || ref === void 0 ? void 0 : ref.symbol) !== 'WETH' && ((ref2 = item.payment_token_contract) === null || ref2 === void 0 ? void 0 : ref2.symbol) !== 'ETH' || item.quantity && !(0,base_src/* isOne */.P$)(item.quantity);
            })) && ((ref1 = orders.value) === null || ref1 === void 0 ? void 0 : ref1.data.filter((item)=>(0,base_src/* isZero */.Fr)((_expiration_time = item.expiration_time) !== null && _expiration_time !== void 0 ? _expiration_time : 0)
            ).length) === 0;
        } else {
            return false;
        }
    }, [
        provider,
        orders
    ]);
    const dataSource = (0,react.useMemo)(()=>{
        var ref;
        if (!orders.value || !((ref = orders.value) === null || ref === void 0 ? void 0 : ref.data.length)) return [];
        return orders.value.data.sort((a, b)=>{
            var _current_price;
            const current = new (bignumber_default())((_current_price = a.current_price) !== null && _current_price !== void 0 ? _current_price : 0);
            var _current_price1;
            const next = new (bignumber_default())((_current_price1 = b.current_price) !== null && _current_price1 !== void 0 ? _current_price1 : 0);
            if (current.isLessThan(next)) return -1;
            else if (current.isGreaterThan(next)) return 1;
            return 0;
        });
    }, [
        orders,
        asset.value
    ]);
    if (asset.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingTable, {}));
    if (!asset.value || asset.error || !dataSource.length) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                className: classes.empty,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                        className: classes.emptyCell,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textSecondary",
                                children: t('plugin_collectible_no_listings')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                sx: {
                                    marginTop: 1
                                },
                                variant: "text",
                                onClick: ()=>asset.retry()
                                ,
                                children: t('plugin_collectible_retry')
                            })
                        ]
                    })
                })
            })
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_price')
                                    }),
                                    provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_expiration')
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: dataSource.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(OrderRow, {
                            order: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.order_hash)
                    )
                }),
                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA && dataSource.length || orderPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setOrderPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setOrderPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: orderPage === 0,
                    nextDisabled: dataSource.length < 10,
                    page: orderPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Link.js
var icons_material_Link = __webpack_require__(43309);
// EXTERNAL MODULE: ./src/plugins/Wallet/formatter.ts
var Wallet_formatter = __webpack_require__(28894);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/Row.tsx












const Row_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        avatar: {
            width: 18,
            height: 18
        },
        accountName: {
            marginLeft: theme.spacing(0.5)
        },
        relativeTime: {
            whiteSpace: 'nowrap'
        },
        token: {
            objectFit: 'contain',
            width: 18,
            height: 18,
            marginRight: theme.spacing(0.5)
        },
        content: {
            display: 'flex',
            alignItems: 'center'
        }
    };
});
function Row({ event , isDifferenceToken  }) {
    var ref21, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10, ref11, ref12, ref13;
    const { classes  } = Row_useStyles();
    const { provider  } = CollectibleState.useContainer();
    const unitPrice = (0,react.useMemo)(()=>{
        var ref, ref20;
        if (provider === evm_types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE || !isDifferenceToken || !event.price) return null;
        var _price;
        return (ref20 = (0,web3_providers_src/* getOrderUnitPrice */.bb)((_price = event.price.price) !== null && _price !== void 0 ? _price : 0, (ref = event.price.paymentToken) === null || ref === void 0 ? void 0 : ref.decimals, event.price.quantity)) === null || ref20 === void 0 ? void 0 : ref20.toString();
    }, [
        event,
        isDifferenceToken,
        provider
    ]);
    var ref14, ref15, ref16, ref17, _username, ref18, _username1, ref19;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? (0,Collectible_pipes/* resolveOpenSeaAssetEventType */.YM)(event.eventType, (ref21 = event.accountPair.from) === null || ref21 === void 0 ? void 0 : ref21.username) : (0,Collectible_pipes/* resolveRaribleAssetEventType */.dp)(event.eventType)
                })
            }),
            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: [
                                ((ref1 = event.price) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.paymentToken) === null || ref2 === void 0 ? void 0 : ref2.image_url) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    href: (ref3 = event.price.asset) === null || ref3 === void 0 ? void 0 : ref3.permalink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        src: event.price.paymentToken.image_url,
                                        className: classes.token,
                                        alt: (ref4 = event.price.asset) === null || ref4 === void 0 ? void 0 : ref4.asset_contract.symbol
                                    })
                                }),
                                unitPrice,
                                (ref5 = event.price) === null || ref5 === void 0 ? void 0 : (ref6 = ref5.paymentToken) === null || ref6 === void 0 ? void 0 : ref6.symbol
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.content,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: (ref14 = (ref7 = event.price) === null || ref7 === void 0 ? void 0 : ref7.quantity) !== null && ref14 !== void 0 ? ref14 : 0,
                                decimals: (ref15 = (ref8 = event.price) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.asset) === null || ref9 === void 0 ? void 0 : ref9.decimals) !== null && ref15 !== void 0 ? ref15 : 0,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    variant: "body2",
                    children: event.price && provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? (0,formatter/* formatBalance */.az)(event.price.quantity, (ref16 = (ref10 = event.price) === null || ref10 === void 0 ? void 0 : (ref11 = ref10.asset) === null || ref11 === void 0 ? void 0 : ref11.decimals) !== null && ref16 !== void 0 ? ref16 : 0) : (ref17 = (ref12 = event.price) === null || ref12 === void 0 ? void 0 : ref12.quantity) !== null && ref17 !== void 0 ? ref17 : ''
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.accountPair.from && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.accountPair.from.link,
                    title: (ref18 = (_username = event.accountPair.from.username) !== null && _username !== void 0 ? _username : event.accountPair.from.address) !== null && ref18 !== void 0 ? ref18 : '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.accountPair.from.imageUrl,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.accountPair.from.username,
                                address: (ref13 = event.accountPair.from.address) === null || ref13 === void 0 ? void 0 : ref13.slice(2, 8)
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                children: event.accountPair.to && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                    href: event.accountPair.to.link,
                    title: (ref19 = (_username1 = event.accountPair.to.username) !== null && _username1 !== void 0 ? _username1 : event.accountPair.to.address) !== null && ref19 !== void 0 ? ref19 : '',
                    target: "_blank",
                    className: classes.account,
                    rel: "noopener noreferrer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            src: event.accountPair.to.imageUrl,
                            className: classes.avatar
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.accountName,
                            variant: "body2",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Account, {
                                username: event.accountPair.to.username,
                                address: event.accountPair.to.address
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.relativeTime,
                children: event.transactionBlockExplorerLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    href: event.transactionBlockExplorerLink,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.content,
                        variant: "body2",
                        children: [
                            (0,Wallet_formatter/* formatElapsed */.Q)(event.timestamp),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_material_Link/* default */.Z, {
                                fontSize: "inherit"
                            })
                        ]
                    })
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.content,
                    color: "primary",
                    variant: "body2",
                    children: (0,Wallet_formatter/* formatElapsed */.Q)(event.timestamp)
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/HistoryTab/index.tsx











const HistoryTab_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            overflow: 'auto'
        },
        head: {
            wordBreak: 'keep-all'
        },
        content: {
            padding: '0 !important'
        },
        spacer: {
            flex: 0
        },
        empty: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        emptyCell: {
            borderStyle: 'none'
        }
    };
});
function HistoryTab(props) {
    var ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = HistoryTab_useStyles();
    const { provider , events , eventPage , setEventPage  } = CollectibleState.useContainer();
    // #region If there is a different asset, the unit price and quantity should be displayed
    const isDifferenceToken = (0,react.useMemo)(()=>{
        var ref3;
        if (provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA) return (ref3 = events.value) === null || ref3 === void 0 ? void 0 : ref3.data.some((item)=>{
            var ref, ref2;
            return ((ref = item.price) === null || ref === void 0 ? void 0 : (ref2 = ref.asset) === null || ref2 === void 0 ? void 0 : ref2.asset_contract.symbol) !== 'ETH';
        });
        else return false;
    }, [
        events.value,
        provider
    ]);
    // #endregion
    if (events.loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {})
    }));
    if (!events.value || events.error || !((ref1 = events.value) === null || ref1 === void 0 ? void 0 : ref1.data.length)) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        size: "small",
        stickyHeader: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            className: classes.empty,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                    className: classes.emptyCell,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: t('plugin_collectible_no_history')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>events.retry()
                            ,
                            children: t('plugin_collectible_retry')
                        })
                    ]
                })
            })
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleTab, {
        classes: {
            root: classes.root,
            content: classes.content
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
            size: "small",
            stickyHeader: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                    className: classes.head,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_event')
                            }),
                            isDifferenceToken ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_unit_price')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        children: t('plugin_collectible_quantity')
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_price')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_from')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_to')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: t('plugin_collectible_date')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                    children: events.value.data.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Row, {
                            event: order,
                            isDifferenceToken: isDifferenceToken
                        }, order.id)
                    )
                }),
                provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA && events.value.data.length || eventPage > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableListPagination, {
                    handlePrevClick: ()=>setEventPage((prev)=>prev - 1
                        )
                    ,
                    handleNextClick: ()=>setEventPage((prev)=>prev + 1
                        )
                    ,
                    prevDisabled: eventPage === 0,
                    nextDisabled: !events.value.hasNextPage,
                    page: eventPage,
                    pageCount: 10
                }) : null
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/LinkingAvatar.tsx


function LinkingAvatar(props) {
    const { href , title , src  } = props;
    try {
        const url = new URL(href).toString();
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: url,
            title: title,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                src: src
            })
        }));
    } catch  {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
            src: src
        }));
    }
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleCard.tsx


function CollectibleCard(props) {
    const { children  } = props;
    const classes = props.classes;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        className: classes === null || classes === void 0 ? void 0 : classes.root,
        elevation: 0,
        children: children
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(30282);
;// CONCATENATED MODULE: ./src/resources/OpenSeaIcon.tsx


const svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 116 116",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "#3291E9"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "58",
            height: "58",
            rx: "29",
            transform: "matrix(-2 0 0 2 116 0)",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M95.638 14.104c-2.25 2.361-5.024 4.67-8.356 6.89-11.163 7.437-20.071 18.062-20.32 39.29-.275 23.512 10.363 35.218 22.969 45.972C80.748 112.411 69.709 116 57.835 116 25.893 116 0 90.032 0 58S25.893 0 57.835 0C72.286 0 85.5 5.316 95.638 14.104z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M47.819 7.052c-1.125 1.18-2.512 2.335-4.178 3.445-5.582 3.719-10.035 9.031-10.16 19.645-.137 11.756 5.182 17.609 11.484 22.986A28.725 28.725 0 0128.918 58C12.947 58 0 45.016 0 29S12.947 0 28.917 0A28.757 28.757 0 0147.82 7.052z",
                    fill: "url(#paint1_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".5",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M72.303 1.83c-1.548 4.205-4.233 8.651-8.207 13.24-8.789 10.147-14.558 22.765-9.178 43.292C61.72 84.313 78.152 91.65 95.669 99.47l1.775.793C87.094 110.021 73.16 116 57.834 116 25.895 116 0 90.032 0 58S25.893 0 57.835 0c4.996 0 9.844.635 14.468 1.83z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M36.151.915c-.773 2.103-2.116 4.326-4.103 6.62-4.394 5.073-7.28 11.383-4.589 21.646 3.401 12.976 11.617 16.644 20.375 20.554l.888.397C43.547 55.01 36.58 58 28.917 58 12.947 58 0 45.016 0 29S12.947 0 28.917 0c2.498 0 4.922.318 7.234.915z",
                    fill: "url(#paint2_linear)",
                    transform: "scale(2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            opacity: ".3",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M4.093 36.527c.185.757.39 1.526.614 2.304 7.44 25.773 28.19 31.897 50.307 38.425 15.465 4.565 31.598 9.327 44.321 21.14C88.825 109.255 74.115 116 57.835 116 25.893 116 0 90.032 0 58a57.99 57.99 0 014.093-21.473z",
                    fill: "#3291E9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M2.047 0c.092.379.194.763.306 1.152C6.074 14.038 16.448 17.1 27.507 20.365c7.732 2.282 15.8 4.663 22.16 10.57-5.255 5.428-12.61 8.802-20.75 8.802-15.97 0-28.917-12.984-28.917-29C0 6.944.726 3.32 2.047 0z",
                    fill: "url(#paint3_linear)",
                    transform: "matrix(2 0 0 2 0 36.527)"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M57.75 100.213c23.059 0 41.751-18.746 41.751-41.87s-18.692-41.87-41.75-41.87C34.692 16.473 16 35.22 16 58.343s18.692 41.87 41.75 41.87z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M60.003 37.547v2.62l-2.825-.38v-2.24c.422.246.89.38 1.401.38.512 0 1.001-.134 1.424-.38zM59.91 65.21v6.496h-2.824v-6.518a23.97 23.97 0 012.825.022z",
            fill: "#24D7D0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M61.312 35.105a2.837 2.837 0 01-1.402 2.464 2.74 2.74 0 01-1.4.38c-.513 0-1.002-.134-1.402-.38a2.837 2.837 0 01-1.402-2.464c0-1.568 1.268-2.845 2.825-2.845 1.557 0 2.78 1.277 2.78 2.845z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M51.394 50.695v12.32c0 .18-.133.314-.311.314H39.717a.32.32 0 01-.29-.448l5.784-14.919a.317.317 0 01.422-.179l5.583 2.62c.112.046.178.18.178.292z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M62.96 54.458c-.733 1.725-1.779 3.338-2.957 4.816a27.71 27.71 0 01-2.825 3.002 38.68 38.68 0 01-3.533 2.939c-.15.11-.388.043-.293-.117.556-1.187 1.646-4.435 1.446-11.446-.223-7.594-2.87-12.522-3.893-14.134-.156-.224.044-.515.311-.493l5.962.784 2.825.38 4.092.538c.048 0 .074.042.088.088.215.695 1.832 6.447-1.222 13.643z",
            fill: "#6BD9FC"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M71.925 56.474c0 10.035-3.537 10.998-4.426 11.715-.134.09-.312.09-.423-.022-.6-.583-2.18-2.307-5.672-2.8a29.777 29.777 0 00-1.401-.157 30.173 30.173 0 00-2.825-.045 32.245 32.245 0 00-3.492.359c-.194.032-.181-.229-.023-.345.37-.274.742-.563 1.112-.865.134-.112.267-.202.4-.314a34.937 34.937 0 002.003-1.747c.133-.112.267-.246.378-.358.111-.112.222-.224.356-.336.049-.05.098-.092.143-.135.073-.07.134-.141.202-.215.067-.074.135-.156.205-.227.099-.1.197-.204.295-.32.111-.111.2-.223.311-.335.112-.112.223-.246.312-.358.2-.224.4-.47.6-.717.09-.135.2-.247.29-.381.089-.134.2-.246.289-.38.089-.135.178-.247.267-.382.089-.134.178-.246.267-.38.044-.068.11-.157.155-.224.067-.09.111-.18.178-.27.134-.2.267-.402.378-.604.045-.09.112-.18.156-.269.092-.185.213-.356.303-.542l.008-.018c.178-.313.334-.65.49-.963.067-.134.133-.269.178-.403 3.093-7.29 1.394-13.097 1.194-13.688-.007-.022.007-.043.023-.027a.049.049 0 00.01.008c.731.377 7.76 6.576 7.76 15.745z",
            fill: "#1EB6D1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M84.648 66.15a.762.762 0 01-.422.673c-3.134 1.515-5.088 4.623-6.238 7.909a22.912 22.912 0 01-1.984 4.225c-.52.865-1.516 1.412-2.433.992l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.423.627a4.016 4.016 0 01-3.292 0l-1.424-.627a4.016 4.016 0 00-3.292 0l-1.424.627a4.016 4.016 0 01-3.292 0l-1.423-.627a4.016 4.016 0 00-3.292 0l-1.313.582c-.622.275-1.326-.036-1.695-.608C35.277 75.766 34 71.602 34 67.136c0-.313 0-.627.022-.94a.32.32 0 01.312-.314H46.39c.178 0 .311.135.311.314v1.545c0 2.173 1.757 3.943 3.915 3.943h17.127c1.891 0 3.448-1.344 3.826-3.114.022-.134.156-.246.311-.246 3.807 0 7.564-.86 10.992-2.514l.686-.331a.727.727 0 01.746.064c.196.14.344.368.344.608z",
            fill: "#14869F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(58 58 -545.75 88.5729 272.875 -44.286)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".048",
                            stopColor: "#1F66A9"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: ".685",
                            stopColor: "#3291E9"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.836 -7.39043 -1.87601 160.271 46.343 -3.102)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint2_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(-71.1866 12.0393 40.6313 155.011 24.39 -29.46)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#E9A332",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "0",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint3_linear",
                    x2: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "matrix(88.4485 40.5135 17.9137 -131.803 -26.388 98.367)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#23DC7D"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#23DC7D",
                            stopOpacity: "0"
                        })
                    ]
                })
            ]
        })
    ]
});
function OpenSeaIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: svg
    }));
}

;// CONCATENATED MODULE: ./src/resources/RaribleIcon.tsx


const RaribleIcon_svg = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "40",
            height: "40",
            rx: "8",
            fill: "#FEDA03"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M27.6 19.854c1.26-.328 2.382-1.27 2.382-3.165 0-3.155-2.679-3.889-6.111-3.889H10.2v14.206h5.754v-4.821h6.825c1.052 0 1.667.417 1.667 1.448v3.373H30.2v-3.551c0-1.935-1.091-3.155-2.6-3.601zm-4.722-1.498h-6.924v-1.39h6.924c.755 0 1.21.1 1.21.695s-.456.695-1.21.695z",
            fill: "#000"
        })
    ]
});
function RaribleIcon(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: RaribleIcon_svg
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CollectibleProviderIcon.tsx






const CollectibleProviderIcon_useStyles = (0,theme_src/* makeStyles */.ZL)()({
    opensea: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    rarible: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    },
    NFTScan: {
        width: 16,
        height: 16,
        verticalAlign: 'bottom'
    }
});
const NFTScanIcon = new URL(/* asset import */ __webpack_require__(60693), __webpack_require__.b).toString();
function CollectibleProviderIcon(props) {
    const { classes  } = CollectibleProviderIcon_useStyles();
    switch(props.provider){
        case evm_types/* NonFungibleAssetProvider.NFTSCAN */.pI.NFTSCAN:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                src: NFTScanIcon,
                className: classes.NFTScan
            }));
        case evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OpenSeaIcon, {
                classes: {
                    root: classes.opensea
                },
                viewBox: "0 0 16 16"
            }));
        case evm_types/* NonFungibleAssetProvider.RARIBLE */.pI.RARIBLE:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RaribleIcon, {
                classes: {
                    root: classes.rarible
                },
                viewBox: "0 0 16 16"
            }));
        default:
            (0,esm/* unreachable */.t1)(props.provider);
    }
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(57767);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(21330);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(32035);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(36122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenWatched.tsx
var useFungibleTokenWatched = __webpack_require__(18211);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(78336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(4639);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(78596);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(87481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(35946);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Error.js
var Error = __webpack_require__(58056);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/UnreviewedWarning.tsx







const UnreviewedWarning_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    const warningMain = (0,theme_src/* getMaskColor */.nb)(theme).warning;
    const warningBackground = (0,theme_src/* getMaskColor */.nb)(theme).warningBackground;
    return {
        box: {
            border: `1px solid ${warningMain}`,
            borderRadius: theme.spacing(0.5)
        },
        colorBox: {
            backgroundColor: warningBackground,
            color: warningMain
        },
        tipTitleBox: {
            display: 'flex',
            alignItems: 'center'
        },
        tipTitle: {
            borderBottom: `1px solid ${warningMain}`
        },
        tipContent: {
            color: warningMain
        },
        icon: {
            marginRight: theme.spacing(1.5)
        }
    };
});
function UnreviewedWarning() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [expand, setExpand] = (0,react.useState)(true);
    const { classes  } = UnreviewedWarning_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
        variant: "outlined",
        className: classes.box,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
            className: classes.colorBox,
            expanded: expand,
            disableGutters: true,
            square: true,
            onChange: ()=>setExpand((x)=>!x
                )
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                    expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                        className: classes.tipContent
                    }),
                    className: classes.tipTitle,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tipTitleBox,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Error/* default */.Z, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: t('plugin_collectible_not_been_reviewed_by_opensea')
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                    className: classes.tipContent,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        children: t('plugin_collectible_reviewed_tips')
                    })
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(15061);
// EXTERNAL MODULE: ./src/web3/UI/DateTimePanel.tsx
var DateTimePanel = __webpack_require__(62816);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(32475);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
var constants = __webpack_require__(80124);
;// CONCATENATED MODULE: ./src/plugins/Collectible/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{}}');
;// CONCATENATED MODULE: ./src/plugins/Collectible/helpers.ts




const CollectibleMetadataReader = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* PLUGIN_META_KEY */.um, schema_namespaceObject);
const renderWithCollectibleMetadata = (0,base/* createRenderWithMetadata */.mC)(CollectibleMetadataReader);
function toAsset(asset) {
    return {
        tokenId: asset.tokenId,
        tokenAddress: asset.tokenAddress,
        schemaName: asset.schemaName
    };
}
function toTokenIdentifier(token) {
    if (!token) return '';
    return `${token.contractAddress}_${token.tokenId}`;
}
function toDecimalAmount(weiAmount, decimals) {
    return leftShift(weiAmount, decimals).toNumber();
}

// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(93179);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js + 1 modules
var getUnixTime = __webpack_require__(4975);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(21156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(90056);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(47381);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/OutlinedInput/OutlinedInput.js + 1 modules
var OutlinedInput = __webpack_require__(80739);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(72123);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(54462);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/SelectTokenListPanel.tsx









const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const SelectTokenListPanel_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'block'
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between',
            flex: 1
        },
        icon: {
            width: 24,
            height: 24
        },
        input: {},
        check: {
            flex: 1,
            display: 'flex',
            justifyContent: 'end',
            color: theme.palette.text.primary
        }
    })
);
function SelectTokenListPanel(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { amount , balance , token , onAmountChange , onTokenChange , tokens =[]  } = props;
    const ref = (0,react.useRef)(null);
    const { classes  } = SelectTokenListPanel_useStyles();
    const [haveMenu, setHaveMenu] = (0,react.useState)(true);
    const width = (0,react.useMemo)(()=>{
        if (!ref.current) return;
        const style = window.getComputedStyle(ref.current);
        return style.width;
    }, [
        ref.current
    ]);
    (0,react.useEffect)(()=>{
        if (tokens.length <= 1) setHaveMenu(false);
    }, [
        tokens
    ]);
    var ref1;
    const [menu, openMenu] = (0,utils/* useMenu */.H9)((ref1 = tokens.map((x, i)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>{
                onTokenChange(x);
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.icon
                        },
                        address: x.address,
                        name: x.name,
                        logoURI: x.logoURI
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "inherit",
                    children: x.symbol
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    className: classes.check,
                    children: (0,utils_address/* isSameAddress */.Wr)(x.address, token === null || token === void 0 ? void 0 : token.address) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {}) : null
                })
            ]
        }, i));
    })) !== null && ref1 !== void 0 ? ref1 : [], false, {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left'
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left'
        },
        paperProps: {
            style: {
                width
            }
        }
    });
    const onClick = (0,react.useCallback)(()=>{
        if (!ref.current) return;
        openMenu(ref.current);
    }, [
        openMenu,
        ref.current
    ]);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = (0,react.useMemo)(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
    ]);
    const onChange = (0,react.useCallback)((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.title,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "colorPrimary",
                        children: t('plugin_collectible_price')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body1",
                        color: "colorPrimary",
                        children: [
                            t('wallet_balance'),
                            ":",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: balance,
                                decimals: token === null || token === void 0 ? void 0 : token.decimals,
                                significant: 6,
                                formatter: formatter/* formatBalance */.az
                            }),
                            token === null || token === void 0 ? void 0 : token.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                className: classes.input,
                variant: "outlined",
                fullWidth: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(OutlinedInput/* default */.Z, {
                        fullWidth: true,
                        required: true,
                        type: "text",
                        value: amount,
                        ref: ref,
                        placeholder: "0.0",
                        inputProps: {
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            title: 'Token Amount',
                            inputMode: 'decimal',
                            min: 0,
                            minLength: MIN_AMOUNT_LENGTH,
                            maxLength: MAX_AMOUNT_LENGTH,
                            pattern: /^\d+[,.]?\d+$/,
                            spellCheck: false,
                            className: classes.input
                        },
                        onChange: onChange,
                        endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsxs)(InputAdornment/* default */.Z, {
                            position: "end",
                            children: [
                                (token === null || token === void 0 ? void 0 : token.address) ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                                            classes: {
                                                icon: classes.icon
                                            },
                                            address: token === null || token === void 0 ? void 0 : token.address,
                                            name: token === null || token === void 0 ? void 0 : token.name,
                                            logoURI: token === null || token === void 0 ? void 0 : token.logoURI
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "inherit",
                                            sx: {
                                                paddingLeft: (theme)=>theme.spacing(0.5)
                                            },
                                            children: token === null || token === void 0 ? void 0 : token.symbol
                                        })
                                    ]
                                }) : null,
                                haveMenu ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {
                                    onClick: onClick
                                }) : null
                            ]
                        })
                    }),
                    menu
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
;// CONCATENATED MODULE: ./src/plugins/Collectible/utils.ts




function checkUrl(url) {
    const protocol = 'https://';
    const _url = new URL(url.startsWith(protocol) ? url : protocol + url);
    return constants/* openseaHostnames.includes */.Kr.includes(_url.hostname) && constants/* openseaPathnameRegexMatcher.test */.Pq.test(_url.pathname) || constants/* raribleHostnames.includes */.QG.includes(_url.hostname) && constants/* rariblePathnameRegexMatcher.test */.lD.test(_url.pathname);
}
function getRelevantUrl(textContent) {
    const urls = (0,shared_base_src/* parseURL */.Lk)(textContent);
    return urls.find(checkUrl);
}
function getAssetInfoFromURL(url) {
    if (!url) return null;
    const _url = new URL(url);
    // #region opensea
    const openSeaMatched = _url.pathname.match(constants/* openseaPathnameRegexMatcher */.Pq);
    if (openSeaMatched) {
        return {
            chain_id: _url.host.includes('testnets') ? evm_types/* ChainId.Rinkeby */.a_.Rinkeby : evm_types/* ChainId.Mainnet */.a_.Mainnet,
            address: openSeaMatched[1],
            token_id: openSeaMatched[2]
        };
    }
    // #endregion
    // #region rarible
    const raribleMatched = _url.pathname.match(constants/* rariblePathnameRegexMatcher */.lD);
    if (raribleMatched) {
        return {
            chain_id: _url.host.includes('ropsten') ? evm_types/* ChainId.Ropsten */.a_.Ropsten : _url.host.includes('rinkeby') ? evm_types/* ChainId.Rinkeby */.a_.Rinkeby : evm_types/* ChainId.Mainnet */.a_.Mainnet,
            address: raribleMatched[1],
            token_id: raribleMatched[2]
        };
    }
    // #endregion
    // nothing matched
    return;
}
function isWyvernSchemaName(name) {
    const schemas = [
        types.WyvernSchemaName.ERC20,
        types.WyvernSchemaName.ERC721,
        types.WyvernSchemaName.ERC1155,
        types.WyvernSchemaName.LegacyEnjin,
        types.WyvernSchemaName.ENSShortNameAuction, 
    ];
    return schemas.includes(name);
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/MakeOfferDialog.tsx























const MakeOfferDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function MakeOfferDialog(props) {
    var ref11, ref1, ref2, ref3, ref4, ref5, ref6;
    const { asset , open , onClose  } = props;
    var ref7;
    const isAuction = (ref7 = asset === null || asset === void 0 ? void 0 : (ref11 = asset.value) === null || ref11 === void 0 ? void 0 : ref11.is_auction) !== null && ref7 !== void 0 ? ref7 : false;
    var ref8;
    const isVerified = (ref8 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.value) === null || ref1 === void 0 ? void 0 : ref1.is_verified) !== null && ref8 !== void 0 ? ref8 : false;
    var _current_price;
    const leastPrice = (asset === null || asset === void 0 ? void 0 : asset.value) && asset.value.desktopOrder ? new (bignumber_default())((_current_price = asset.value.desktopOrder.current_price) !== null && _current_price !== void 0 ? _current_price : '0') : base_src/* ZERO */.xE;
    var ref9, ref10;
    const paymentTokens = (0,uniqBy/* default */.Z)([
        ...(ref9 = asset === null || asset === void 0 ? void 0 : (ref2 = asset.value) === null || ref2 === void 0 ? void 0 : ref2.offer_payment_tokens) !== null && ref9 !== void 0 ? ref9 : [],
        ...(ref10 = asset === null || asset === void 0 ? void 0 : (ref3 = asset.value) === null || ref3 === void 0 ? void 0 : ref3.order_payment_tokens) !== null && ref10 !== void 0 ? ref10 : []
    ], (x)=>x.address
    );
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = MakeOfferDialog_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [insufficientBalance, setInsufficientBalance] = (0,react.useState)(false);
    const { amount , token , balance , setAmount , setToken  } = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)(selectedPaymentToken);
    const onMakeOffer = (0,react.useCallback)(async ()=>{
        var ref;
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== evm_types/* EthereumTokenType.Native */.Dr.Native && token.value.type !== evm_types/* EthereumTokenType.ERC20 */.Dr.ERC20) return;
        const schemaName = (ref = asset.value.asset_contract) === null || ref === void 0 ? void 0 : ref.schemaName;
        await messages/* PluginCollectibleRPC.createBuyOrder */.O.createBuyOrder({
            asset: toAsset({
                tokenId: asset.value.token_id,
                tokenAddress: asset.value.token_address,
                schemaName: isWyvernSchemaName(schemaName) ? schemaName : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            expirationTime: !isAuction ? (0,getUnixTime/* default */.Z)(expirationDateTime) : undefined,
            paymentTokenAddress: token.value.type === evm_types/* EthereumTokenType.Native */.Dr.Native ? undefined : token.value.address
        });
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        account,
        amount,
        expirationDateTime,
        isAuction
    ]);
    const { setDialog: openSwapDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        var _name, _symbol;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.value.address,
                    name: (_name = token.value.name) !== null && _name !== void 0 ? _name : '',
                    symbol: (_symbol = token.value.symbol) !== null && _symbol !== void 0 ? _symbol : '',
                    contract_address: token.value.address,
                    decimals: token.value.decimals
                }
            }
        });
    }, [
        token.value,
        openSwapDialog
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        var ref;
        setInsufficientBalance(false);
        const amount_ = (0,base_src/* rightShift */.pu)(amount !== null && amount !== void 0 ? amount : '0', ((ref = token.value) === null || ref === void 0 ? void 0 : ref.decimals) || 0);
        var _value;
        const balance_ = new (bignumber_default())((_value = balance.value) !== null && _value !== void 0 ? _value : '0');
        if (amount_.isNaN() || amount_.isZero()) return t('plugin_collectible_enter_a_price');
        if (balance_.isZero() || amount_.isGreaterThan(balance_)) {
            setInsufficientBalance(true);
            return t('plugin_collectible_insufficient_balance');
        }
        if (!isAuction && expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!ToS_Checked) return t('plugin_collectible_check_tos_document');
        if (leastPrice.isGreaterThan(amount_)) {
            return t('plugin_collectible_insufficient_offer');
        }
        return '';
    }, [
        amount,
        balance.value,
        expirationDateTime,
        isVerified,
        isAuction,
        unreviewedChecked,
        ToS_Checked
    ]);
    if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return null;
    var _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: isAuction ? t('plugin_collectible_place_a_bid') : t('plugin_collectible_make_an_offer'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenListPanel, {
                                amount: amount,
                                balance: (_value1 = balance.value) !== null && _value1 !== void 0 ? _value1 : '0',
                                token: token.value,
                                onAmountChange: setAmount,
                                onTokenChange: setToken,
                                tokens: paymentTokens
                            }),
                            !isAuction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                                label: t('plugin_collectible_expiration_date'),
                                date: expirationDateTime,
                                min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T00:00"),
                                onChange: setExpirationDateTime,
                                className: classes.panel,
                                fullWidth: true
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: ToS_Checked,
                                    onChange: (ev)=>setToS_Checked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_collectible_legal_text",
                                        components: {
                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                color: "primary",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                href: "https://opensea.io/tos"
                                            })
                                        }
                                    })
                                })
                            }),
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: unreviewedChecked,
                                    onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: t('plugin_collectible_approved_by_open_sea')
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        waiting: t(isAuction ? 'plugin_collectible_place_bid' : 'plugin_collectible_make_offer'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onMakeOffer,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    (isAuction ? (ref4 = asset.value) === null || ref4 === void 0 ? void 0 : ref4.isCollectionWeth : (ref5 = asset.value) === null || ref5 === void 0 ? void 0 : ref5.isOrderWeth) || insufficientBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: onConvertClick,
                                        children: insufficientBalance ? t('plugin_collectible_get_more_token', {
                                            token: (ref6 = token.value) === null || ref6 === void 0 ? void 0 : ref6.symbol
                                        }) : t('plugin_collectible_convert_eth')
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var wallet_ts_dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(17939);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/SelectTokenAmountPanel.tsx
var SelectTokenAmountPanel = __webpack_require__(44457);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingByPriceCard.tsx

















const ListingByPriceCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {},
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {
            marginTop: theme.spacing(1.5)
        },
        caption: {
            fontSize: 11
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function ListingByPriceCard(props) {
    const { asset , tokenWatched , paymentTokens , open , onClose  } = props;
    const { amount , token , balance , setAmount , setToken  } = tokenWatched;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingByPriceCard_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const [scheduleTime, setScheduleTime] = (0,react.useState)(new Date());
    const [expirationTime, setExpirationTime] = (0,react.useState)(new Date());
    const [buyerAddress, setBuyerAddress] = (0,react.useState)('');
    const [endingAmount, setEndingAmount] = (0,react.useState)('');
    const [endingPriceChecked, setEndingPriceChecked] = (0,react.useState)(false);
    const [futureTimeChecked, setFutureTimeChecked] = (0,react.useState)(false);
    const [privacyChecked, setPrivacyChecked] = (0,react.useState)(false);
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,base_src/* isZero */.Fr)(amount || '0')) return t('plugin_collectible_enter_a_price');
        if (endingPriceChecked && endingAmount && !(0,base_src/* isGreaterThan */.T1)(amount || '0', endingAmount || '0')) return t('plugin_collectible_invalid_ending_price');
        if (futureTimeChecked && Date.now() >= scheduleTime.getTime()) return t('plugin_collectible_invalid_schedule_date');
        if (endingPriceChecked && Date.now() >= expirationTime.getTime()) return t('plugin_collectible_invalid_expiration_date');
        if (privacyChecked && buyerAddress && !wallet_ts_dist.EthereumAddress.isValid(buyerAddress)) return t('plugin_collectible_invalid_buyer_address');
        return '';
    }, [
        amount,
        endingPriceChecked,
        endingAmount,
        futureTimeChecked,
        scheduleTime,
        expirationTime,
        privacyChecked,
        buyerAddress, 
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        var ref;
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== evm_types/* EthereumTokenType.Native */.Dr.Native && token.value.type !== evm_types/* EthereumTokenType.ERC20 */.Dr.ERC20) return;
        const schemaName = (ref = asset.value.asset_contract) === null || ref === void 0 ? void 0 : ref.schemaName;
        await messages/* PluginCollectibleRPC.createSellOrder */.O.createSellOrder({
            asset: toAsset({
                tokenId: asset.value.token_id,
                tokenAddress: asset.value.token_address,
                schemaName: isWyvernSchemaName(schemaName) ? schemaName : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            endAmount: endingPriceChecked && endingAmount ? Number.parseFloat(endingAmount) : undefined,
            listingTime: futureTimeChecked ? (0,getUnixTime/* default */.Z)(scheduleTime) : undefined,
            expirationTime: endingPriceChecked ? (0,getUnixTime/* default */.Z)(expirationTime) : undefined,
            buyerAddress: privacyChecked ? buyerAddress : undefined
        });
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        amount,
        account,
        endingAmount,
        scheduleTime,
        expirationTime,
        buyerAddress,
        endingPriceChecked,
        futureTimeChecked,
        privacyChecked, 
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setScheduleTime(new Date());
        setExpirationTime(new Date());
        setBuyerAddress('');
        setEndingAmount('');
    }, [
        open
    ]);
    var _value, _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: amount,
                        balance: (_value = balance.value) !== null && _value !== void 0 ? _value : '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some(utils_address/* isNativeTokenAddress */.qw),
                        onAmountChange: setAmount,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            label: endingPriceChecked ? t('plugin_collectible_starting_price') : t('plugin_collectible_price'),
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: endingPriceChecked ? t('plugin_collectible_set_initial_price') : t('plugin_collectible_ending_price_tip')
                            }
                        },
                        FungibleTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: endingAmount,
                        balance: (_value1 = balance.value) !== null && _value1 !== void 0 ? _value1 : '0',
                        onAmountChange: setEndingAmount,
                        token: token.value,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            label: t('plugin_collectible_ending_price'),
                            disableToken: true,
                            disableBalance: true,
                            TextFieldProps: {
                                classes: {
                                    root: classes.panel
                                },
                                helperText: t('plugin_collectible_ending_price_less_than_staring')
                            }
                        }
                    }) : null,
                    futureTimeChecked || endingPriceChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: endingPriceChecked ? t('plugin_collectible_expiration_date') : t('plugin_collectible_schedule_date'),
                        date: endingPriceChecked ? expirationTime : scheduleTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: endingPriceChecked ? setExpirationTime : setScheduleTime,
                        className: classes.panel,
                        helperText: endingPriceChecked ? t('plugin_collectible_auto_cancel_tip') : t('plugin_collectible_schedule_future_date'),
                        fullWidth: true
                    }) : null,
                    privacyChecked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.panel,
                        fullWidth: true,
                        value: buyerAddress,
                        variant: "outlined",
                        label: t('plugin_collectible_buyer_address'),
                        placeholder: t('plugin_collectible_buyer_address_placeholder'),
                        helperText: t('plugin_collectible_buyer_address_helper_text'),
                        onChange: (e)=>setBuyerAddress(e.target.value)
                        ,
                        InputLabelProps: {
                            shrink: true
                        }
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            padding: 2,
                            paddingBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: endingPriceChecked,
                                    onChange: (ev)=>setEndingPriceChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_include_ending_price')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_include_ending_price_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: futureTimeChecked,
                                    onChange: (ev)=>setFutureTimeChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_schedule_for_a_future_time')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_schedule_for_a_future_time_helper')
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                className: classes.label,
                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                    color: "primary",
                                    checked: privacyChecked,
                                    onChange: (ev)=>setPrivacyChecked(ev.target.checked)
                                }),
                                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: t('plugin_collectible_privacy')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.caption,
                                            color: "textSecondary",
                                            variant: "body2",
                                            children: t('plugin_collectible_privacy_helper')
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ListingByHighestBidCard.tsx
















const ListingByHighestBidCard_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        button: {
            marginTop: theme.spacing(1.5)
        }
    })
);
function ListingByHighestBidCard(props) {
    const { asset , tokenWatched , paymentTokens , open , onClose  } = props;
    const { amount , token , balance , setAmount , setToken  } = tokenWatched;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ListingByHighestBidCard_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const [reservePrice, setReservePrice] = (0,react.useState)('');
    const [expirationDateTime, setExpirationDateTime] = (0,react.useState)(new Date());
    const validationMessage = (0,react.useMemo)(()=>{
        if ((0,base_src/* isZero */.Fr)(amount || '0')) return t('plugin_collectible_enter_minimum_bid');
        if ((0,base_src/* isZero */.Fr)(reservePrice || '0')) return t('plugin_collectible_enter_reserve_price');
        if ((0,base_src/* isLessThan */.FI)(reservePrice, amount)) return t('plugin_collectible_invalid_reserve_price');
        if (expirationDateTime.getTime() - Date.now() <= 0) return t('plugin_collectible_invalid_expiration_date');
        return '';
    }, [
        amount,
        reservePrice,
        expirationDateTime
    ]);
    const onPostListing = (0,react.useCallback)(async ()=>{
        var ref;
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        if (token.value.type !== evm_types/* EthereumTokenType.ERC20 */.Dr.ERC20) return;
        const schemaName = (ref = asset.value.asset_contract) === null || ref === void 0 ? void 0 : ref.schemaName;
        await messages/* PluginCollectibleRPC.createSellOrder */.O.createSellOrder({
            asset: toAsset({
                tokenId: asset.value.token_id,
                tokenAddress: asset.value.token_address,
                schemaName: isWyvernSchemaName(schemaName) ? schemaName : undefined
            }),
            accountAddress: account,
            startAmount: Number.parseFloat(amount),
            expirationTime: (0,getUnixTime/* default */.Z)(expirationDateTime),
            englishAuctionReservePrice: Number.parseFloat(reservePrice),
            waitForHighestBid: true,
            paymentTokenAddress: token.value.address
        });
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        token,
        amount,
        account,
        reservePrice,
        expirationDateTime
    ]);
    (0,react.useEffect)(()=>{
        setAmount('');
        setReservePrice('');
        setExpirationDateTime(new Date());
    }, [
        open
    ]);
    var _value, _value1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: amount,
                        balance: (_value = balance.value) !== null && _value !== void 0 ? _value : '0',
                        token: token.value,
                        disableNativeToken: !paymentTokens.some(utils_address/* isNativeTokenAddress */.qw),
                        onAmountChange: setAmount,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            label: t('plugin_collectible_minimum_bid'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_set_starting_bid_price')
                            }
                        },
                        FungibleTokenListProps: {
                            selectedTokens: token.value ? [
                                token.value.address
                            ] : [],
                            tokens: paymentTokens,
                            whitelist: paymentTokens.map((x)=>x.address
                            )
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectTokenAmountPanel/* SelectTokenAmountPanel */.Q, {
                        amount: reservePrice,
                        balance: (_value1 = balance.value) !== null && _value1 !== void 0 ? _value1 : '0',
                        onAmountChange: setReservePrice,
                        token: token.value,
                        onTokenChange: setToken,
                        TokenAmountPanelProps: {
                            classes: {
                                root: classes.panel
                            },
                            disableToken: true,
                            disableBalance: true,
                            label: t('plugin_collectible_reserve_price'),
                            TextFieldProps: {
                                helperText: t('plugin_collectible_reserve_price_helper')
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DateTimePanel/* DateTimePanel */.g, {
                        label: t('plugin_collectible_expiration_date'),
                        date: expirationDateTime,
                        min: (0,format/* default */.Z)(new Date(), "yyyy-MM-dd'T23:59"),
                        onChange: setExpirationDateTime,
                        className: classes.panel,
                        helperText: t('plugin_collectible_auction_auto_end'),
                        fullWidth: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        className: classes.button,
                        variant: "contained",
                        disabled: !!validationMessage,
                        fullWidth: true,
                        size: "large",
                        init: validationMessage || t('plugin_collectible_post_listing'),
                        waiting: t('plugin_collectible_post_listing'),
                        complete: t('plugin_collectible_done'),
                        failed: t('plugin_collectible_retry'),
                        executor: onPostListing,
                        completeOnClick: onClose,
                        failedOnClick: "use executor"
                    })
                })
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PostListingDialog.tsx










const PostListingDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        button: {
            marginTop: theme.spacing(1.5)
        }
    };
});
function PostListingDialog(props) {
    var ref;
    const { asset , open , onClose  } = props;
    var ref1;
    const paymentTokens = (ref1 = asset === null || asset === void 0 ? void 0 : (ref = asset.value) === null || ref === void 0 ? void 0 : ref.offer_payment_tokens) !== null && ref1 !== void 0 ? ref1 : [];
    const selectedPaymentToken = (0,head/* default */.Z)(paymentTokens);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PostListingDialog_useStyles();
    const tokenWatched = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)(selectedPaymentToken);
    const [tabIndex, setTabIndex] = (0,react.useState)(0);
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_set_price')
        }, "price"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            label: t('plugin_collectible_highest_bid')
        }, "bid"), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_collectible_post_listing'),
        open: open,
        onClose: onClose,
        maxWidth: "md",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
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
                tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByPriceCard, {
                    asset: asset,
                    tokenWatched: tokenWatched,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null,
                tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingByHighestBidCard, {
                    asset: asset,
                    tokenWatched: tokenWatched,
                    paymentTokens: paymentTokens,
                    open: open,
                    onClose: onClose
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/components/shared/Image.tsx
var Image = __webpack_require__(40516);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CheckoutOrder.tsx








const CheckoutOrder_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        itemInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        texts: {
            marginLeft: theme.spacing(1)
        }
    })
);
function CheckoutOrder() {
    var ref6, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { token , asset , assetOrder , provider  } = CollectibleState.useContainer();
    var ref2;
    const order = (ref2 = assetOrder === null || assetOrder === void 0 ? void 0 : assetOrder.value) !== null && ref2 !== void 0 ? ref2 : asset === null || asset === void 0 ? void 0 : (ref6 = asset.value) === null || ref6 === void 0 ? void 0 : ref6.desktopOrder;
    const { classes  } = CheckoutOrder_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    if (!(asset === null || asset === void 0 ? void 0 : asset.value) || !token) return null;
    if (!order) return null;
    var _currentPrice;
    const price = (_currentPrice = order.currentPrice) !== null && _currentPrice !== void 0 ? _currentPrice : asset.value.current_price;
    const getPrice = ()=>{
        var ref7, ref4;
        if (!price) return 'error';
        const decimal = (ref4 = (ref7 = asset.value) === null || ref7 === void 0 ? void 0 : ref7.response_.collection.payment_tokens.find((item)=>{
            var ref;
            return item.symbol === ((ref = asset.value) === null || ref === void 0 ? void 0 : ref.current_symbol);
        })) === null || ref4 === void 0 ? void 0 : ref4.decimals;
        if (!decimal) return 'error';
        var ref5;
        return (ref5 = (0,formatter/* formatBalance */.az)(price, decimal)) !== null && ref5 !== void 0 ? ref5 : 'error';
    };
    var ref3, _collection_name, _name, _name1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
        size: "small",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            children: t('plugin_collectible_item')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            align: "right",
                            children: t('plugin_collectible_subtotal')
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableBody/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.itemInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Image/* Image */.E, {
                                            height: 80,
                                            width: 80,
                                            src: (ref3 = (ref1 = asset.value) === null || ref1 === void 0 ? void 0 : ref1.image_url) !== null && ref3 !== void 0 ? ref3 : ''
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.texts,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: (_collection_name = asset.value.collection_name) !== null && _collection_name !== void 0 ? _collection_name : ''
                                                }),
                                                token.contractAddress && token.tokenId ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                    color: "primary",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    href: (0,Collectible_pipes/* resolveAssetLinkOnCurrentProvider */.md)(chainId, token.contractAddress, token.tokenId, provider),
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                        children: (_name = asset.value.name) !== null && _name !== void 0 ? _name : ''
                                                    })
                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    children: (_name1 = asset.value.name) !== null && _name1 !== void 0 ? _name1 : ''
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        getPrice(),
                                        " ",
                                        asset.value.current_symbol
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: t('plugin_collectible_total')
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                align: "right",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        getPrice(),
                                        " ",
                                        asset.value.current_symbol
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/CheckoutDialog.tsx
















const CheckoutDialog_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: 0
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 2, 2)
        },
        panel: {
            marginTop: theme.spacing(2),
            '&:first-child': {
                marginTop: 0
            }
        },
        label: {},
        buttons: {
            width: '100%',
            margin: `0 ${theme.spacing(-0.5)}`
        },
        button: {
            flex: 1,
            margin: `${theme.spacing(1.5)} ${theme.spacing(0.5)} 0`
        }
    };
});
function CheckoutDialog(props) {
    var ref8, ref1, ref2, ref3, ref4;
    const { asset , open , onClose , order  } = props;
    var ref5;
    const isVerified = (ref5 = asset === null || asset === void 0 ? void 0 : (ref8 = asset.value) === null || ref8 === void 0 ? void 0 : ref8.is_verified) !== null && ref5 !== void 0 ? ref5 : false;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = CheckoutDialog_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const [unreviewedChecked, setUnreviewedChecked] = (0,react.useState)(false);
    const [ToS_Checked, setToS_Checked] = (0,react.useState)(false);
    const [insufficientBalance, setInsufficientBalance] = (0,react.useState)(false);
    var ref6;
    const { token , balance  } = (0,useFungibleTokenWatched/* useFungibleTokenWatched */.g)({
        type: evm_types/* EthereumTokenType.Native */.Dr.Native,
        address: (ref6 = (ref1 = order.value) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.paymentTokenContract) === null || ref2 === void 0 ? void 0 : ref2.address) !== null && ref6 !== void 0 ? ref6 : ''
    });
    const onCheckout = (0,react.useCallback)(async ()=>{
        if (!(asset === null || asset === void 0 ? void 0 : asset.value)) return;
        if (!asset.value.token_id || !asset.value.token_address) return;
        if (!order.value) return;
        await messages/* PluginCollectibleRPC.fulfillOrder */.O.fulfillOrder({
            order: order.value,
            accountAddress: account,
            recipientAddress: account
        });
    }, [
        asset === null || asset === void 0 ? void 0 : asset.value,
        account,
        order === null || order === void 0 ? void 0 : order.value
    ]);
    const { setDialog: openSwapDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        if (!(token === null || token === void 0 ? void 0 : token.value)) return;
        var _name, _symbol;
        openSwapDialog({
            open: true,
            traderProps: {
                coin: {
                    id: token.value.address,
                    name: (_name = token.value.name) !== null && _name !== void 0 ? _name : '',
                    symbol: (_symbol = token.value.symbol) !== null && _symbol !== void 0 ? _symbol : '',
                    contract_address: token.value.address,
                    decimals: token.value.decimals
                }
            }
        });
    }, [
        token.value,
        openSwapDialog
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        var ref;
        var ref7, _value;
        if ((0,base_src/* isGreaterThan */.T1)((ref7 = order === null || order === void 0 ? void 0 : (ref = order.value) === null || ref === void 0 ? void 0 : ref.basePrice) !== null && ref7 !== void 0 ? ref7 : 0, (_value = balance.value) !== null && _value !== void 0 ? _value : 0)) {
            setInsufficientBalance(true);
            return t('plugin_collectible_insufficient_balance');
        }
        if (!isVerified && !unreviewedChecked) return t('plugin_collectible_ensure_unreviewed_item');
        if (!isVerified && !ToS_Checked) return t('plugin_collectible_check_tos_document');
        return '';
    }, [
        isVerified,
        unreviewedChecked,
        ToS_Checked,
        order.value
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('plugin_collectible_checkout'),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
                        children: [
                            isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    marginBottom: 2
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnreviewedWarning, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                sx: {
                                    padding: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutOrder, {}),
                                    isVerified ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: unreviewedChecked,
                                                    onChange: (ev)=>setUnreviewedChecked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: t('plugin_collectible_approved_tips')
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                                className: classes.label,
                                                control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                                    color: "primary",
                                                    checked: ToS_Checked,
                                                    onChange: (ev)=>setToS_Checked(ev.target.checked)
                                                }),
                                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    variant: "body2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                                        i18nKey: "plugin_collectible_agree_terms",
                                                        components: {
                                                            terms: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                                                color: "primary",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                href: "https://opensea.io/tos"
                                                            })
                                                        }
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.buttons,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                                        className: classes.button,
                                        variant: "contained",
                                        disabled: !!validationMessage,
                                        size: "large",
                                        init: validationMessage || t('plugin_collectible_checkout'),
                                        waiting: t('plugin_collectible_checkout'),
                                        complete: t('plugin_collectible_done'),
                                        failed: t('plugin_collectible_retry'),
                                        executor: onCheckout,
                                        completeOnClick: onClose,
                                        failedOnClick: "use executor"
                                    }),
                                    (asset === null || asset === void 0 ? void 0 : (ref3 = asset.value) === null || ref3 === void 0 ? void 0 : ref3.isOrderWeth) || insufficientBalance ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                        className: classes.button,
                                        variant: "contained",
                                        size: "large",
                                        onClick: onConvertClick,
                                        children: insufficientBalance ? t('plugin_collectible_get_more_token', {
                                            token: (ref4 = token.value) === null || ref4 === void 0 ? void 0 : ref4.symbol
                                        }) : t('plugin_collectible_convert_eth')
                                    }) : null
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/ActionBar.tsx










const ActionBar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            marginLeft: theme.spacing(-0.5),
            marginRight: theme.spacing(-0.5)
        },
        button: {
            flex: 1,
            margin: `0 ${theme.spacing(0.5)}`
        }
    };
});
function ActionBar(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ActionBar_useStyles();
    const { asset , assetOrder  } = CollectibleState.useContainer();
    const assets = asset.value;
    const { open: openCheckoutDialog , onOpen: onOpenCheckoutDialog , onClose: onCloseCheckoutDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openOfferDialog , onOpen: onOpenOfferDialog , onClose: onCloseOfferDialog  } = (0,useControlledDialog/* useControlledDialog */.D)();
    const { open: openListingDialog , onOpen: onOpenListingDialog , onClose: onCloseListingDialog ,  } = (0,useControlledDialog/* useControlledDialog */.D)();
    if (!asset.value) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        sx: {
            marginTop: 1
        },
        display: "flex",
        justifyContent: "center",
        children: [
            !asset.value.isOwner && asset.value.is_auction && assetOrder.value ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenCheckoutDialog,
                children: t('plugin_collectible_buy_now')
            }) : null,
            !asset.value.isOwner && asset.value.is_auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                fullWidth: true,
                variant: "contained",
                onClick: onOpenOfferDialog,
                children: t('plugin_collectible_place_bid')
            }) : null,
            !asset.value.isOwner && !asset.value.is_auction ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenOfferDialog,
                children: t('plugin_collectible_make_offer')
            }) : null,
            (assets === null || assets === void 0 ? void 0 : assets.isOwner) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                color: "primary",
                variant: "contained",
                onClick: onOpenListingDialog,
                children: t('plugin_collectible_sell')
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckoutDialog, {
                asset: asset,
                order: assetOrder,
                open: openCheckoutDialog,
                onClose: onCloseCheckoutDialog
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MakeOfferDialog, {
                asset: asset,
                open: openOfferDialog,
                onClose: onCloseOfferDialog
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PostListingDialog, {
                asset: asset,
                open: openListingDialog,
                onClose: onCloseListingDialog
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/plugins/Trader/SNSAdaptor/trader/FootnoteMenu.tsx
var FootnoteMenu = __webpack_require__(62015);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/Collectible.tsx





























const Collectible_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
            padding: 0,
            marginBottom: 12
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
        footer: {
            marginTop: -1,
            zIndex: 1,
            position: 'relative',
            borderTop: `solid 1px ${theme.palette.divider}`,
            justifyContent: 'space-between'
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
            minWidth: 'unset',
            whiteSpace: 'nowrap'
        },
        subtitle: {
            fontSize: 12,
            marginRight: theme.spacing(0.5),
            maxHeight: '3.5rem',
            overflow: 'hidden',
            wordBreak: 'break-word'
        },
        description: {
            fontSize: 12,
            '& > strong': {
                color: theme.palette.text.primary,
                fontWeight: 300
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
        countdown: {
            fontSize: 12,
            borderRadius: 8,
            display: 'block',
            white: '100%',
            color: theme.palette.common.white,
            backgroundColor: '#eb5757',
            padding: theme.spacing(0.5, 2)
        },
        loading: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: theme.spacing(8, 0)
        },
        markdown: {
            'text-overflow': 'ellipsis',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': '3'
        }
    };
});
function Collectible(props) {
    var ref, ref1, ref2, ref3, ref4, ref5;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Collectible_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { token , asset , provider , setProvider , tabIndex: tabIndex1 , setTabIndex  } = CollectibleState.useContainer();
    // #region sync with settings
    const collectibleProviderOptions = (0,esm/* getEnumAsArray */.Yl)(evm_types/* NonFungibleAssetProvider */.pI);
    const onDataProviderChange = (0,react.useCallback)((option)=>{
        setProvider(option.value);
    }, []);
    // #endregion
    // #region provider switcher
    const CollectibleProviderSwitcher = (0,utils/* useSwitcher */.Ei)(provider, setProvider, (0,esm/* getEnumAsArray */.Yl)(evm_types/* NonFungibleAssetProvider */.pI).map((x)=>x.value
    ), Collectible_pipes/* resolveCollectibleProviderName */.l0);
    // #endregion
    if (!asset.value || !token) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                color: "textPrimary",
                sx: {
                    marginTop: 8,
                    marginBottom: 8
                },
                children: [
                    "Failed to load your collectible on ",
                    (0,Collectible_pipes/* resolveCollectibleProviderName */.l0)(provider),
                    "."
                ]
            }),
            CollectibleProviderSwitcher,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                color: "primary",
                size: "small",
                variant: "text",
                onClick: ()=>asset.retry()
                ,
                sx: {
                    marginTop: 1.5
                },
                children: "Refresh"
            })
        ]
    }));
    const tabs = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_article')
        }, "article"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_details')
        }, "details"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_offers')
        }, "offers"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_listing')
        }, "listing"),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
            className: classes.tab,
            label: t('plugin_collectible_history')
        }, "history"), 
    ];
    const renderTab = (tabIndex)=>{
        const tabMap = {
            [Collectible_types/* CollectibleTab.ARTICLE */.s7.ARTICLE]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArticleTab, {}),
            [Collectible_types/* CollectibleTab.TOKEN */.s7.TOKEN]: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenTab, {}),
            [Collectible_types/* CollectibleTab.OFFER */.s7.OFFER]: /*#__PURE__*/ (0,jsx_runtime.jsx)(OfferTab, {}),
            [Collectible_types/* CollectibleTab.LISTING */.s7.LISTING]: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListingTab, {}),
            [Collectible_types/* CollectibleTab.HISTORY */.s7.HISTORY]: /*#__PURE__*/ (0,jsx_runtime.jsx)(HistoryTab, {})
        };
        return tabMap[tabIndex] || null;
    };
    const _asset = asset.value;
    const endDate = _asset.end_time;
    var ref6, ref7, ref8, ref9, ref10, _name, _name1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(CollectibleCard, {
                classes: {
                    root: classes.root
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        avatar: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkingAvatar, {
                            href: _asset.collectionLinkUrl,
                            title: (ref7 = (ref6 = (ref = _asset.owner) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.username) !== null && ref6 !== void 0 ? ref6 : (ref2 = _asset.owner) === null || ref2 === void 0 ? void 0 : ref2.address) !== null && ref7 !== void 0 ? ref7 : '',
                            src: (ref10 = (ref9 = (ref8 = (ref3 = _asset.collection) === null || ref3 === void 0 ? void 0 : ref3.image_url) !== null && ref8 !== void 0 ? ref8 : (ref4 = _asset.creator) === null || ref4 === void 0 ? void 0 : ref4.profile_img_url) !== null && ref9 !== void 0 ? ref9 : (ref5 = _asset.owner) === null || ref5 === void 0 ? void 0 : ref5.profile_img_url) !== null && ref10 !== void 0 ? ref10 : ''
                        }),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            style: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                    color: "primary",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: (0,Collectible_pipes/* resolveAssetLinkOnCurrentProvider */.md)(chainId, token.contractAddress, token.tokenId, provider),
                                    children: (_name = _asset.name) !== null && _name !== void 0 ? _name : ''
                                }) : (_name1 = _asset.name) !== null && _name1 !== void 0 ? _name1 : '',
                                _asset.safelist_request_status === 'verified' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifiedUser/* default */.Z, {
                                    color: "primary",
                                    fontSize: "small",
                                    sx: {
                                        marginLeft: 0.5
                                    }
                                }) : null
                            ]
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                _asset.description ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.subtitle,
                                        component: "div",
                                        variant: "body2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markdown/* Markdown */.U, {
                                            classes: {
                                                root: classes.markdown
                                            },
                                            content: _asset.description
                                        })
                                    })
                                }) : null,
                                (_asset === null || _asset === void 0 ? void 0 : _asset.current_price) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    sx: {
                                        marginTop: 1
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.description,
                                        component: "span",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                            i18nKey: "plugin_collectible_description",
                                            values: {
                                                price: _asset === null || _asset === void 0 ? void 0 : _asset.current_price,
                                                symbol: _asset === null || _asset === void 0 ? void 0 : _asset.current_symbol
                                            }
                                        })
                                    })
                                }) : null
                            ]
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
                                value: tabIndex1,
                                onChange: (ev, newValue)=>setTabIndex(newValue)
                                ,
                                TabIndicatorProps: {
                                    style: {
                                        display: 'none'
                                    }
                                },
                                children: tabs
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                                className: classes.body,
                                children: asset.loading && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.loading,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {})
                                }) || /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                    children: renderTab(tabIndex1)
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardActions/* default */.Z, {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.footMenu,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FootnoteMenu/* FootnoteMenu */.p, {
                                        options: collectibleProviderOptions.map((x)=>({
                                                name: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleProviderIcon, {
                                                            provider: x.value
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                            className: classes.footName,
                                                            children: (0,Collectible_pipes/* resolveCollectibleProviderName */.l0)(x.value)
                                                        })
                                                    ]
                                                }),
                                                value: x.value
                                            })
                                        ),
                                        selectedIndex: (0,findIndex/* default */.Z)(collectibleProviderOptions, (x)=>x.value === provider
                                        ),
                                        onChange: onDataProviderChange
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDropDown/* default */.Z, {})
                                ]
                            })
                        ]
                    })
                ]
            }),
            endDate && (0,isValid/* default */.Z)(endDate) && (0,isAfter/* default */.Z)(endDate, Date.now()) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.countdown,
                    children: t('plugin_collectible_sale_end', {
                        time: (0,format/* default */.Z)(endDate, 'yyyy-MM-dd HH:mm:ss')
                    })
                })
            }),
            provider === evm_types/* NonFungibleAssetProvider.OPENSEA */.pI.OPENSEA ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionBar, {}) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(80066);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/PostInspector.tsx




function PostInspector(props) {
    const token = props.payload;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: token.chain_id,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleState.Provider, {
            initialState: {
                chainId: token.chain_id,
                tokenId: token.token_id,
                contractAddress: token.address
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Collectible, {})
        })
    }));
}

// EXTERNAL MODULE: ./src/plugins/Collectible/base.ts
var Collectible_base = __webpack_require__(46920);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 1 modules
var CollectibleList = __webpack_require__(73589);
;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/NFTPage.tsx







const NFTPage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative'
        },
        text: {
            paddingTop: 36,
            paddingBottom: 36,
            '& > p': {
                color: (0,theme_src/* getMaskColor */.nb)(theme).textPrimary
            }
        },
        note: {
            padding: `0 ${theme.spacing(1)}`,
            textAlign: 'right'
        },
        icon: {
            color: (0,theme_src/* getMaskColor */.nb)(theme).textPrimary
        },
        iconContainer: {
            display: 'inherit'
        },
        tipList: {
            listStyleType: 'decimal',
            paddingLeft: 16
        },
        button: {
            border: `1px solid ${theme.palette.text.primary} !important`,
            color: `${theme.palette.text.primary} !important`,
            borderRadius: 9999,
            background: 'transparent',
            '&:hover': {
                background: 'rgba(15, 20, 25, 0.1)'
            }
        }
    })
);
function NFTPage(props) {
    const { addressNames  } = props;
    const { classes  } = NFTPage_useStyles();
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const [selectedAddress, setSelectedAddress] = (0,react.useState)((0,head/* default */.Z)(addressNames));
    const onOpen = (event)=>setAnchorEl(event.currentTarget)
    ;
    const onClose = ()=>setAnchorEl(null)
    ;
    const onSelect = (option)=>{
        setSelectedAddress(option);
        onClose();
    };
    if (!selectedAddress) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(theme_src/* ShadowRootMenu */.dy, {
                open: !!anchorEl,
                onClose: onClose,
                anchorEl: anchorEl,
                PaperProps: {
                    style: {
                        maxHeight: 192
                    }
                },
                children: (0,uniqBy/* default */.Z)(addressNames !== null && addressNames !== void 0 ? addressNames : [], (x)=>x.resolvedAddress.toLowerCase()
                ).map((x)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                        value: x.resolvedAddress,
                        onClick: ()=>onSelect(x)
                        ,
                        children: (0,formatter/* formatEthereumAddress */.j8)(x.label, 5)
                    }, x.resolvedAddress));
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectionList */.G2, {
                addressName: selectedAddress !== null && selectedAddress !== void 0 ? selectedAddress : undefined,
                onSelectAddress: onOpen
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/SNSAdaptor/index.tsx










const sns = {
    ...Collectible_base/* base */.u,
    init (signal) {},
    PostInspector: function Component() {
        const links = src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = (0,uniq/* default */.Z)(links).find(checkUrl);
        const asset = getAssetInfoFromURL(link);
        (0,src/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    DecryptedInspector: function Component(props) {
        const collectibleUrl = getRelevantUrl((0,base/* extractTextFromTypedMessage */.Vc)(props.message, {
            linkAsText: true
        }).unwrapOr(''));
        const asset = getAssetInfoFromURL(collectibleUrl);
        (0,src/* usePluginWrapper */.fI)(!!asset);
        return asset ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
            payload: asset
        }) : null;
    },
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_nfts`,
            label: 'NFTs',
            priority: 1,
            UI: {
                TabContent: ({ addressNames =[]  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTPage, {
                        addressNames: addressNames
                    })
            },
            Utils: {
                addressNameSorter: (a, z)=>{
                    if (a.type === evm_types/* AddressNameType.ENS */.Lv.ENS) return -1;
                    if (z.type === evm_types/* AddressNameType.ENS */.Lv.ENS) return 1;
                    if (a.type === evm_types/* AddressNameType.UNS */.Lv.UNS) return -1;
                    if (z.type === evm_types/* AddressNameType.UNS */.Lv.UNS) return 1;
                    if (a.type === evm_types/* AddressNameType.DNS */.Lv.DNS) return -1;
                    if (z.type === evm_types/* AddressNameType.DNS */.Lv.DNS) return 1;
                    if (a.type === evm_types/* AddressNameType.RSS3 */.Lv.RSS3) return -1;
                    if (z.type === evm_types/* AddressNameType.RSS3 */.Lv.RSS3) return 1;
                    if (a.type === evm_types/* AddressNameType.ADDRESS */.Lv.ADDRESS) return -1;
                    if (z.type === evm_types/* AddressNameType.ADDRESS */.Lv.ADDRESS) return 1;
                    if (a.type === evm_types/* AddressNameType.GUN */.Lv.GUN) return -1;
                    if (z.type === evm_types/* AddressNameType.GUN */.Lv.GUN) return 1;
                    if (a.type === evm_types/* AddressNameType.THE_GRAPH */.Lv.THE_GRAPH) return -1;
                    if (z.type === evm_types/* AddressNameType.THE_GRAPH */.Lv.THE_GRAPH) return 1;
                    return 0;
                },
                shouldDisplay: (identity, addressNames)=>{
                    return !!(addressNames === null || addressNames === void 0 ? void 0 : addressNames.length);
                }
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 62986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PluginCollectibleRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80124);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);


if (false) {}
const PluginCollectibleMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginCollectibleRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(3147), __webpack_require__.e(5756), __webpack_require__.e(8019), __webpack_require__.e(8712), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(9278), __webpack_require__.e(2261), __webpack_require__.e(8331), __webpack_require__.e(7913), __webpack_require__.e(1491), __webpack_require__.e(9714), __webpack_require__.e(125), __webpack_require__.e(6134), __webpack_require__.e(3305), __webpack_require__.e(8405)]).then(__webpack_require__.bind(__webpack_require__, 67267))
, PluginCollectibleMessage.rpc);


/***/ }),

/***/ 31638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gs": () => (/* reexport */ useAsset),
  "X$": () => (/* reexport */ useBridgedProvider),
  "k6": () => (/* reexport */ useHistory),
  "$K": () => (/* reexport */ useInjectedProviderType),
  "yi": () => (/* reexport */ useOrders)
});

// UNUSED EXPORTS: useInjectedProviderReady, useNetwork, useProvider

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(81409);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(92971);
// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var constants = __webpack_require__(79518);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(29528);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(77031);
// EXTERNAL MODULE: ./src/plugins/EVM/messages.ts
var messages = __webpack_require__(56902);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var Collectible_pipes = __webpack_require__(36671);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useAsset.ts




function useAsset(address, tokenId, provider) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { WNATIVE_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        var ref, ref1, ref2, ref3;
        const asset = await messages/* EVM_RPC.getAsset */.k.getAsset({
            address,
            tokenId,
            chainId,
            provider
        });
        var ref4, ref5, ref6, ref7;
        return {
            ...asset,
            image_url: (asset === null || asset === void 0 ? void 0 : (ref = asset.image_url) === null || ref === void 0 ? void 0 : ref.startsWith('ipfs://')) ? (0,pipes/* resolveIPFSLink */.r5)(asset.image_url.replace('ipfs://', '')) : asset === null || asset === void 0 ? void 0 : asset.image_url,
            isOrderWeth: (ref5 = (0,utils_address/* isSameAddress */.Wr)((ref4 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.desktopOrder) === null || ref1 === void 0 ? void 0 : ref1.payment_token) !== null && ref4 !== void 0 ? ref4 : '', WNATIVE_ADDRESS)) !== null && ref5 !== void 0 ? ref5 : false,
            isCollectionWeth: (ref6 = asset === null || asset === void 0 ? void 0 : (ref2 = asset.collection) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.payment_tokens) === null || ref3 === void 0 ? void 0 : ref3.some((0,utils_address/* currySameAddress */.DC)(WNATIVE_ADDRESS))) !== null && ref6 !== void 0 ? ref6 : false,
            isOwner: (ref7 = asset === null || asset === void 0 ? void 0 : asset.top_ownerships.some((item)=>(0,utils_address/* isSameAddress */.Wr)(item.owner.address, account)
            )) !== null && ref7 !== void 0 ? ref7 : false,
            collectionLinkUrl: (0,Collectible_pipes/* resolveAvatarLinkOnCurrentProvider */.TN)(chainId, asset, provider)
        };
    }, [
        account,
        chainId,
        WNATIVE_ADDRESS,
        address,
        tokenId,
        provider
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useHistory.ts



function useHistory(provider, page, size, address, tokenId) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const histories = await messages/* EVM_RPC.getHistory */.k.getHistory({
            address,
            tokenId,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: histories,
            hasNextPage: histories.length === size
        };
    }, [
        address,
        tokenId,
        chainId,
        provider,
        page,
        size
    ]);
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(23290);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useOrders.ts




function useOrders(provider, page, size, address, tokenId, side) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return {
            data: [],
            hasNextPage: false
        };
        const orders = await messages/* EVM_RPC.getOrders */.k.getOrders({
            address,
            tokenId,
            side: side !== null && side !== void 0 ? side : src/* NonFungibleTokenAPI.OrderSide.Sell */.x4.OrderSide.Sell,
            chainId,
            provider,
            page,
            size
        });
        return {
            data: orders,
            hasNextPage: orders.length === size
        };
    }, [
        address,
        tokenId,
        side,
        chainId
    ]);
}

// EXTERNAL MODULE: ./src/plugins/EVM/constants.ts
var EVM_constants = __webpack_require__(32646);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useNetwork.ts


function useNetwork() {
    const networkType = useNetworkType();
    var ref;
    return (ref = PLUGIN_NETWORKS.find((x)=>x.type === networkType
    )) !== null && ref !== void 0 ? ref : null;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useProvider.ts


function useProvider() {
    const providerType = useProviderType();
    var ref;
    return (ref = PLUGIN_PROVIDERS.find((x)=>x.type === providerType
    )) !== null && ref !== void 0 ? ref : null;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../injected-script/sdk/index.ts
var sdk = __webpack_require__(4520);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useBridgedProvider.ts



function useBridgedProvider(type) {
    return (0,react.useMemo)(()=>{
        switch(type){
            case 'ethereum':
                return sdk/* bridgedEthereumProvider */.j3;
            case 'coin98':
                return sdk/* bridgedCoin98Provider */.A9;
            default:
                (0,esm/* unreachable */.t1)(type);
        }
    }, [
        type
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderReady.ts


function useInjectedProviderReady(type) {
    const bridgedProvider = useBridgedProvider(type);
    const { value: available = false  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        return bridgedProvider.untilAvailable();
    }, [
        bridgedProvider
    ]);
    return available;
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(18249);
;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/useInjectedProviderType.ts




function useInjectedProviderType(type) {
    const bridgedProvider = useBridgedProvider(type);
    const injectedProviderReady = useInjectedProviderReady(type);
    const { value: injectedProviderType  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!injectedProviderReady) return;
        // WalletLink (Coinbase)
        const isWalletLink = await bridgedProvider.getProperty('isWalletLink');
        if (isWalletLink) return types/* ProviderType.WalletLink */.lP.WalletLink;
        // Coin98 under ethereum
        const isCoin98 = await bridgedProvider.getProperty('isCoin98');
        if (isCoin98) return types/* ProviderType.Coin98 */.lP.Coin98;
        // mathwallet
        const isMathWallet = await bridgedProvider.getProperty('isMathWallet');
        if (isMathWallet) return types/* ProviderType.MathWallet */.lP.MathWallet;
        // metamask
        const isMetaMask = await bridgedProvider.getProperty('isMetaMask');
        if (isMetaMask) return types/* ProviderType.MetaMask */.lP.MetaMask;
        return;
    }, [
        injectedProviderReady,
        bridgedProvider
    ]);
    return injectedProviderType;
}

;// CONCATENATED MODULE: ./src/plugins/EVM/hooks/index.ts










/***/ }),

/***/ 56902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43576);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32646);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 4503).then(__webpack_require__.bind(__webpack_require__, 24503))
, EVM_Messages.events.rpc);


/***/ }),

/***/ 44457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SelectTokenAmountPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32513);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);
/* harmony import */ var _Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70202);
/* harmony import */ var _web3_UI_TokenAmountPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22538);






function SelectTokenAmountPanel(props) {
    var ref;
    const { amount , balance , token , disableNativeToken =false , disableSearchBar =false , onAmountChange , onTokenChange , FungibleTokenListProps , TokenAmountPanelProps ,  } = props;
    // #region select token
    const [id] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)());
    const { setDialog: setSelectTokenDialog  } = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .useRemoteControlledDialog */ .F$)(_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.selectTokenDialogUpdated */ .R.events.selectTokenDialogUpdated, (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        onTokenChange(ev.token);
    }, [
        id,
        onTokenChange
    ]));
    const onSelectTokenChipClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            disableNativeToken,
            disableSearchBar,
            FungibleTokenListProps
        });
    }, [
        id,
        disableNativeToken,
        disableSearchBar,
        FungibleTokenListProps
    ]);
    // #endregion
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_web3_UI_TokenAmountPanel__WEBPACK_IMPORTED_MODULE_4__/* .TokenAmountPanel */ .x, {
        amount: amount,
        balance: balance,
        token: token,
        label: "Amount",
        onAmountChange: onAmountChange,
        ...TokenAmountPanelProps,
        SelectTokenChip: {
            ...TokenAmountPanelProps === null || TokenAmountPanelProps === void 0 ? void 0 : TokenAmountPanelProps.SelectTokenChip,
            ChipProps: {
                ...TokenAmountPanelProps === null || TokenAmountPanelProps === void 0 ? void 0 : (ref = TokenAmountPanelProps.SelectTokenChip) === null || ref === void 0 ? void 0 : ref.ChipProps,
                onClick: onSelectTokenChipClick
            }
        }
    }));
}


/***/ }),

/***/ 41482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* binding */ Markdown)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/remarkable@2.0.1/node_modules/remarkable/dist/esm/index.browser.js
var index_browser = __webpack_require__(54030);
;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/hooks/useRemarkable.ts


function useRemarkable(md) {
    return (0,react.useMemo)(()=>{
        const remarkable = new index_browser/* Remarkable */._();
        return remarkable.render(md);
    }, [
        md
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Snapshot/SNSAdaptor/Markdown.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: 'inherit',
            fontSize: 'inherit',
            fontFamily: 'sans-serif',
            '& p, & li': {
                margin: 0,
                fontSize: 12,
                color: theme.palette.text.secondary
            },
            '& p + p': {
                marginTop: theme.spacing(0.5)
            },
            '& h1, & h2, & h3, & h4, & h5, & h6': {
                fontSize: 14,
                fontWeight: 500
            },
            '& img': {
                maxWidth: '100%'
            },
            '& a': {
                color: theme.palette.text.primary
            }
        }
    })
);
function Markdown(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const html = useRemarkable(props.content);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        dangerouslySetInnerHTML: {
            __html: html
        },
        className: classes.root
    }));
}


/***/ }),

/***/ 62015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FootnoteMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21156);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4467);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67020);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7282);




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

/***/ 93179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89729);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57534);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(584)]).then(__webpack_require__.bind(__webpack_require__, 56277))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 28894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ formatElapsed)
/* harmony export */ });
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90795);

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

/***/ 62816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DateTimePanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17939);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57753);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    datetime: {
        '&::-webkit-calendar-picker-indicator': {
            marginLeft: 0,
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(76048), __webpack_require__.b)})`
        }
    },
    inputLabel: {
        left: 8,
        top: 8
    }
});
function DateTimePanel(props) {
    const { label , date: date1 , onChange , min , max , inputProps , ...rest } = props;
    const GMT = new Date().getTimezoneOffset() / 60 * -1;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        ...rest,
        label: `${label} ${GMT >= 0 ? `(UTC +${GMT})` : `(UTC ${GMT})`}`,
        value: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(date1, "yyyy-MM-dd'T'HH:mm"),
        onChange: (e)=>{
            const date = new Date(e.currentTarget.value);
            onChange(date);
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                root: classes.inputLabel
            }
        },
        inputProps: {
            className: classes.datetime,
            ...inputProps,
            min,
            max
        },
        type: "datetime-local"
    }));
}


/***/ }),

/***/ 60506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83317);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52522);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81409);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35204);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92971);





/**
 * Fetch token balance from chain
 * @param address
 * @param targetChainId
 */ function useERC20TokenBalance(address, targetChainId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const defaultChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = targetChainId !== null && targetChainId !== void 0 ? targetChainId : defaultChainId;
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    return (0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .useBeatRetry */ .ND)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account,
            chainId: (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toHex)(chainId)
        });
    }, 30 * 1000, [
        account,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 58608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85143);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18249);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98468);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76322);




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

/***/ 18211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFungibleTokenWatched)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18249);
/* harmony import */ var _useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24183);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58608);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76322);





function useFungibleTokenWatched(initialToken) {
    const nativeToken = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const [token = nativeToken.value, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialToken);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    var ref, ref1;
    const balance = (0,_useFungibleTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useFungibleTokenBalance */ .V)((ref = token === null || token === void 0 ? void 0 : token.type) !== null && ref !== void 0 ? ref : _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, (ref1 = token === null || token === void 0 ? void 0 : token.address) !== null && ref1 !== void 0 ? ref1 : '');
    var ref2, ref3;
    const detailed = (0,_useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_4__/* .useFungibleTokenDetailed */ .j)((ref2 = token === null || token === void 0 ? void 0 : token.type) !== null && ref2 !== void 0 ? ref2 : _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native, (ref3 = token === null || token === void 0 ? void 0 : token.address) !== null && ref3 !== void 0 ? ref3 : '');
    return {
        amount,
        token: detailed,
        balance,
        setAmount,
        setToken
    };
}


/***/ }),

/***/ 67759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22572);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81409);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59123);



/**
 * Fetch native token balance from chain
 * @param address
 */ function useNativeTokenBalance() {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { value: balance = '0'  } = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(async ()=>{
        if (!account) return;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 43616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useTransactionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35655);



function txStateReducer(state, nextState) {
    const allowed = nextState.type === _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN || (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isNextStateAvailable */ .NU)(state.type, nextState.type);
    return allowed ? nextState : state;
}
function useTransactionState() {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(txStateReducer, {
        type: _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
    });
}


/***/ }),

/***/ 35655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ir": () => (/* binding */ isFinalState),
/* harmony export */   "NU": () => (/* binding */ isNextStateAvailable)
/* harmony export */ });
/* unused harmony export isEIP1559Transaction */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85143);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18249);


function isEIP1559Transaction(receipt) {
    return typeof receipt.maxFeePerGas !== 'undefined' && typeof receipt.maxPriorityFeePerGas !== 'undefined';
}
function isFinalState(type) {
    return [
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED,
        _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED
    ].includes(type);
}
/**
 * UNKNOWN -> WAIT_FOR_CONFIRMING
 * UNKNOWN, WAIT_FOR_CONFIRMING -> HASH
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH -> RECEIPT
 * WAIT_FOR_CONFIRMING, HASH, RECEIPT -> CONFIRMED
 * UNKNOWN, WAIT_FOR_CONFIRMING, HASH, RECEIPT -> FAILED
 */ function isNextStateAvailable(type, nextType) {
    switch(nextType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN:
            return false;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.CONFIRMED */ .n$.CONFIRMED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.FAILED */ .n$.FAILED:
            return [
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.UNKNOWN */ .n$.UNKNOWN,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n$.WAIT_FOR_CONFIRMING,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.HASH */ .n$.HASH,
                _types__WEBPACK_IMPORTED_MODULE_1__/* .TransactionStateType.RECEIPT */ .n$.RECEIPT, 
            ].includes(type);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(nextType);
    }
}


/***/ }),

/***/ 60693:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c76767efa44aa6607c7f.png";

/***/ }),

/***/ 76048:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/978bf9587a9f8a073309.png";

/***/ })

}]);