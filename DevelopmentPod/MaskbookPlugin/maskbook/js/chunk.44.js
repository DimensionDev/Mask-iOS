"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[44],{

/***/ 26292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ProfileTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21784);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93455);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72005);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82192);







function ProfileTab(props) {
    const { reset , clear , children , classes , title  } = props;
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useMatchXS */ .IN)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        // Change the url hashtag to trigger `locationchange` event from e.g. 'hostname/medias#web3 => hostname/medias'
        (0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_4__/* .isTwitter */ .L)(_social_network__WEBPACK_IMPORTED_MODULE_5__/* .activatedSocialNetworkUI */ .LM) && location.assign('#web3');
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.profileTabUpdated.sendToLocal */ .ql.events.profileTabUpdated.sendToLocal({
            show: true
        });
        setActive(true);
        clear();
    }, [
        clear
    ]);
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useLocationChange */ .SL)(()=>{
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.profileTabUpdated.sendToLocal */ .ql.events.profileTabUpdated.sendToLocal({
            show: false
        });
        setActive(false);
        reset();
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, active ? classes.selected : ''),
            onClick: onClick,
            component: "div",
            children: [
                props.icon,
                isMobile && props.icon ? null : title,
                active && children ? children : null
            ]
        })
    }, "nfts");
}


/***/ }),

/***/ 91381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ ProfileTabContent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40661);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29730);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20778);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44451);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(69314);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21784);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82192);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72005);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93455);
/* harmony import */ var _utils_hooks_useLocationChange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49723);
/* harmony import */ var _DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23397);
/* harmony import */ var _DataSource_useNextID__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(360);
/* harmony import */ var _DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9987);

















function getTabContent(tabId) {
    return (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .createInjectHooksRenderer */ .EK)(_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPluginsSNSAdaptor.visibility.useAnyMode */ .Pz.visibility.useAnyMode, (x1)=>{
        const tab = x1.ProfileTabs?.find((x)=>x.ID === tabId
        );
        return tab?.UI?.TabContent;
    });
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .makeStyles */ .ZL)()((theme)=>({
        root: {},
        content: {
            position: 'relative',
            padding: theme.spacing(2, 1)
        }
    })
);
function ProfileTabContent(props) {
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_6__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .useI18N */ .M1)();
    const translate = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .usePluginI18NField */ .eS)();
    const [hidden, setHidden] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [selectedTab, setSelectedTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const currentIdentity = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_11__/* .useLastRecognizedIdentity */ .FB)();
    const identity = (0,_DataSource_useActivatedUI__WEBPACK_IMPORTED_MODULE_11__/* .useCurrentVisitingIdentity */ .fb)();
    const { currentConnectedPersona  } = (0,_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_13__/* .usePersonaConnectStatus */ .x)();
    const { value: socialAddressList = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY_LIST */ .rP , loading: loadingSocialAddressList  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useSocialAddressListAll */ .zx)(identity);
    const { value: personaList = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY_LIST */ .rP , loading: loadingPersonaList  } = (0,_DataSource_useNextID__WEBPACK_IMPORTED_MODULE_12__/* .useNextIDBoundByPlatform */ .OB)(_social_network__WEBPACK_IMPORTED_MODULE_7__/* .activatedSocialNetworkUI.configuration.nextIDConfig */ .LM.configuration.nextIDConfig?.platform, identity.identifier?.userId);
    const activatedPlugins = (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .useActivatedPluginsSNSAdaptor */ .Pz)('any');
    const availablePlugins = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAvailablePlugins */ .yH)(activatedPlugins);
    const displayPlugins = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return availablePlugins.flatMap((x)=>x.ProfileTabs?.map((y)=>({
                    ...y,
                    pluginID: x.ID
                })
            ) ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__/* .EMPTY_LIST */ .rP
        ).filter((z)=>z.Utils?.shouldDisplay?.(identity, socialAddressList) ?? true
        );
    }, [
        identity,
        availablePlugins.map((x)=>x.ID
        ).join(),
        socialAddressList.map((x)=>x.address
        ).join()
    ]);
    const tabs = displayPlugins.sort((a, z)=>{
        // order those tabs from next id first
        if (a.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.NextID */ .je.NextID) return -1;
        if (z.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.NextID */ .je.NextID) return 1;
        // order those tabs from collectible first
        if (a.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Collectible */ .je.Collectible) return -1;
        if (z.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Collectible */ .je.Collectible) return 1;
        // place those tabs from debugger last
        if (a.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Debugger */ .je.Debugger) return 1;
        if (z.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.Debugger */ .je.Debugger) return -1;
        // place those tabs from dao before the last
        if (a.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.DAO */ .je.DAO) return 1;
        if (z.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.DAO */ .je.DAO) return -1;
        return a.priority - z.priority;
    }).map((x)=>({
            id: x.ID,
            label: typeof x.label === 'string' ? x.label : translate(x.pluginID, x.label)
        })
    );
    const currentAccountNotConnectPersona = currentIdentity.identifier === identity.identifier && personaList.findIndex((persona)=>persona?.persona === currentConnectedPersona?.identifier.publicKeyAsHex
    ) === -1;
    const selectedTabId = selectedTab ?? (0,lodash_unified__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z)(tabs)?.id;
    const componentTabId = (0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_8__/* .isTwitter */ .L)(_social_network__WEBPACK_IMPORTED_MODULE_7__/* .activatedSocialNetworkUI */ .LM) && currentAccountNotConnectPersona ? displayPlugins?.find((tab)=>tab?.pluginID === _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_2__/* .PluginId.NextID */ .je.NextID
    )?.ID : selectedTabId;
    const component = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const Component = getTabContent(componentTabId);
        const Utils = displayPlugins.find((x)=>x.ID === selectedTabId
        )?.Utils;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
            identity: identity,
            personaList: personaList?.map((x)=>x.persona
            ),
            socialAddressList: socialAddressList.filter((x)=>Utils?.filter?.(x) ?? true
            ).sort(Utils?.sorter)
        });
    }, [
        componentTabId,
        displayPlugins.map((x)=>x.ID
        ).join(),
        personaList.join(),
        socialAddressList.map((x)=>x.address
        ).join(), 
    ]);
    (0,_utils_hooks_useLocationChange__WEBPACK_IMPORTED_MODULE_10__/* .useLocationChange */ .S)(()=>{
        setSelectedTab(undefined);
    });
    (0,react_use__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(()=>{
        setSelectedTab(undefined);
    }, [
        identity.identifier?.userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _utils__WEBPACK_IMPORTED_MODULE_9__/* .MaskMessages.events.profileTabHidden.on */ .ql.events.profileTabHidden.on((data)=>{
            if (data.hidden) setHidden(data.hidden);
        });
    }, [
        identity.identifier?.userId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return _utils__WEBPACK_IMPORTED_MODULE_9__/* .MaskMessages.events.profileTabUpdated.on */ .ql.events.profileTabUpdated.on((data)=>{
            setHidden(!data.show);
        });
    }, [
        identity.identifier?.userId
    ]);
    if (hidden) return null;
    if (!identity.identifier?.userId || loadingSocialAddressList || loadingPersonaList) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            sx: {
                paddingTop: 4,
                paddingBottom: 4
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                children: tabs.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .ConcealableTabs */ .SR, {
                    tabs: tabs,
                    selectedId: selectedTabId,
                    onChange: setSelectedTab
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                    variant: "body2",
                    color: "textPrimary",
                    align: "center",
                    sx: {
                        paddingTop: 8
                    },
                    children: t('web3_tab_hint')
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.content,
                children: component
            })
        ]
    });
}


/***/ }),

/***/ 24926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ NFTAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(18443);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10503);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51129);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(85792);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(73932);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _AddNFT__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20700);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(50719);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77818);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67938);
/* harmony import */ var _web3_UI_ChainBoundary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73495);
/* harmony import */ var _Application_NFTListPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7602);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44451);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>({
        root: {},
        title: {
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 14,
            alignItems: 'center'
        },
        account: {
            display: 'flex',
            alignItems: 'center'
        },
        galleryItem: {
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 4,
            padding: theme.spacing(1)
        },
        gallery: {
            display: 'flex',
            flexFlow: 'row wrap',
            height: 150,
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        button: {
            textAlign: 'center',
            paddingTop: theme.spacing(1),
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row'
        },
        setNFTAvatar: {},
        skeleton: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            padding: 6,
            margin: theme.spacing(0.5, 1)
        },
        skeletonBox: {
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        error: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        },
        changeButton: {
            fontSize: 14
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: theme.spacing(1),
            gap: 16
        }
    })
);
function NFTAvatar(props) {
    const { onChange , hideWallet  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__/* .useAccount */ .mA)(pluginID);
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__/* .useChainId */ .xx)(pluginID);
    const [selectedToken, setSelectedToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [open_, setOpen_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [collectibles_, setCollectibles_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .useI18N */ .M1)();
    const { value: collectibles = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_12__/* .EMPTY_LIST */ .rP , done: loadFinish , next: nextPage , error: loadError ,  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_7__/* .useNonFungibleAssets */ .H1)(pluginID, undefined, {
        chainId,
        account
    });
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        if (!selectedToken) return;
        onChange({
            account,
            token: selectedToken,
            image: selectedToken.metadata?.imageURL ?? '',
            pluginId: pluginID
        });
        setSelectedToken(undefined);
    }, [
        onChange,
        selectedToken
    ]);
    const onAddClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((token)=>{
        setSelectedToken(token);
        setCollectibles_((tokens)=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)([
                token,
                ...tokens
            ], (x)=>x.contract?.address && x.tokenId
            )
        );
    }, []);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.selectProviderDialogUpdated */ .R$.events.selectProviderDialogUpdated);
    const LoadStatus = Array.from({
        length: 8
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: classes.skeletonBox,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                animation: "wave",
                variant: "rectangular",
                className: classes.skeleton
            })
        }, i)
    );
    const Retry = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
        className: classes.error,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: "textSecondary",
                children: t('dashboard_no_collectible_found')
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                className: classes.button,
                variant: "text",
                onClick: nextPage,
                children: t('plugin_collectible_retry')
            })
        ]
    });
    const _onChange = (token)=>{
        if (!token) return;
        setSelectedToken(token);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: t('nft_list_title')
                            }),
                            account ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                variant: "body1",
                                color: "textPrimary",
                                className: classes.account,
                                children: [
                                    t('nft_wallet_label'),
                                    ": ",
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_8__/* .ReversedAddress */ .il, {
                                        address: account,
                                        size: 4
                                    }),
                                    !hideWallet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                        variant: "text",
                                        onClick: openSelectProviderDialog,
                                        size: "small",
                                        className: classes.changeButton,
                                        children: t('nft_wallet_change')
                                    }) : null
                                ]
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_web3_UI_ChainBoundary__WEBPACK_IMPORTED_MODULE_10__/* .ChainBoundary */ .s, {
                        expectedPluginID: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
                        expectedChainId: chainId,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            className: classes.galleryItem,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.gallery,
                                    children: !loadFinish && !loadError && !collectibles?.length ? LoadStatus : loadError || !collectibles?.length && !collectibles_.length ? Retry : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                        direction: "row",
                                        flexWrap: "wrap",
                                        children: [
                                            (0,lodash_unified__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)([
                                                ...collectibles_,
                                                ...collectibles ?? []
                                            ], (x)=>x.contract?.address && x.tokenId
                                            ).map((token1, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Application_NFTListPage__WEBPACK_IMPORTED_MODULE_11__/* .NFTImageCollectibleAvatar */ .t, {
                                                    pluginId: _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_9__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM,
                                                    token: token1,
                                                    selectedToken: selectedToken,
                                                    onChange: (token)=>_onChange(token)
                                                }, i)
                                            ),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_8__/* .ElementAnchor */ .ek, {
                                                callback: ()=>{
                                                    if (nextPage) nextPage();
                                                },
                                                children: !loadFinish && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .LoadingBase */ .Sx, {})
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: classes.buttons,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            variant: "outlined",
                                            size: "small",
                                            onClick: ()=>setOpen_(true)
                                            ,
                                            children: t('nft_button_add_collectible')
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                            variant: "contained",
                                            size: "small",
                                            onClick: onClick,
                                            disabled: !selectedToken,
                                            children: t('nft_button_set_avatar')
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AddNFT__WEBPACK_IMPORTED_MODULE_6__/* .AddNFT */ .F, {
                chainId: chainId,
                expectedPluginID: pluginID,
                open: open_,
                onClose: ()=>setOpen_(false)
                ,
                onAddClick: onAddClick
            })
        ]
    });
}


/***/ }),

/***/ 24311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ NFTAvatarButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/GearSettings.tsx


const GearSettingsIcon = (0,utils/* createIcon */.I)('GearSettingsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.0003 4.47314C5.60697 4.47314 4.47363 5.60648 4.47363 6.99981C4.47363 8.39314 5.60697 9.52648 7.0003 9.52648C8.39363 9.52648 9.52697 8.39314 9.52697 6.99981C9.52697 5.60648 8.39363 4.47314 7.0003 4.47314ZM7.0003 8.52648C6.15897 8.52648 5.47363 7.84248 5.47363 6.99981C5.47363 6.15714 6.1603 5.47314 7.0003 5.47314C7.8403 5.47314 8.52697 6.15714 8.52697 6.99981C8.52697 7.84248 7.84163 8.52648 7.0003 8.52648Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.24003 13.9166H6.7587C5.97003 13.9166 5.3227 13.3246 5.2507 12.5406L5.24136 12.4426C5.2247 12.2513 5.10336 12.0873 4.9267 12.0133C4.73603 11.9333 4.5387 11.9699 4.3947 12.0899L4.31736 12.1546C3.7387 12.6379 2.81536 12.5966 2.27736 12.0613L1.93736 11.7213C1.38003 11.1613 1.34003 10.2853 1.84403 9.68125L1.90936 9.60259C2.03336 9.45459 2.0627 9.25392 1.9907 9.07792C1.91736 8.89659 1.75203 8.77525 1.56003 8.75792L1.46003 8.74859C0.673365 8.67725 0.0820312 8.02859 0.0820312 7.24059V6.75925C0.0820312 5.97059 0.674031 5.32325 1.45803 5.25125L1.56203 5.24192C1.75203 5.22525 1.91536 5.10392 1.99003 4.92659C2.06336 4.74659 2.03336 4.54459 1.91003 4.39659L1.84736 4.31925C1.3427 3.71392 1.38203 2.83725 1.9387 2.27925L2.28003 1.93792C2.81603 1.40192 3.7387 1.36125 4.32003 1.84459L4.39736 1.90992C4.5427 2.03259 4.74936 2.06325 4.92403 1.99125C5.10403 1.91659 5.22536 1.75259 5.24203 1.56259L5.25136 1.46059C5.3227 0.673919 5.97136 0.083252 6.75936 0.083252H7.2407C8.02936 0.083252 8.6767 0.675252 8.7487 1.45925L8.75803 1.56325C8.7747 1.75325 8.89536 1.91659 9.0727 1.98992C9.25737 2.06792 9.45936 2.03125 9.60203 1.91192L9.68203 1.84392C10.26 1.36192 11.1847 1.40259 11.722 1.93725L12.062 2.27859C12.6194 2.83725 12.6594 3.71392 12.1554 4.31859L12.0887 4.39725C11.9634 4.54392 11.9327 4.74525 12.0067 4.92259C12.0814 5.10259 12.2467 5.22259 12.4374 5.24125L12.5387 5.25059C13.3254 5.32192 13.9167 5.97059 13.9167 6.75858V7.24059C13.9167 8.02925 13.3247 8.67659 12.5407 8.74859L12.4374 8.75792C12.248 8.77392 12.084 8.89459 12.0107 9.07125C11.9354 9.25259 11.966 9.45392 12.0887 9.60125L12.1554 9.68125C12.6594 10.2846 12.6194 11.1613 12.062 11.7213L11.722 12.0613C11.184 12.5973 10.262 12.6373 9.68203 12.1546L9.60536 12.0906C9.4607 11.9686 9.25203 11.9373 9.0787 12.0093C8.8967 12.0853 8.77536 12.2493 8.7587 12.4399L8.74936 12.5399C8.67803 13.3219 8.02937 13.9133 7.24136 13.9133L7.24003 13.9166ZM4.7247 10.9699C4.9247 10.9699 5.12003 11.0099 5.3047 11.0866C5.83136 11.3053 6.18737 11.7893 6.23803 12.3506L6.24736 12.4486C6.27203 12.7153 6.49203 12.9153 6.7607 12.9153H7.24203C7.5087 12.9153 7.7287 12.7153 7.75403 12.4486L7.76336 12.3499C7.81403 11.7886 8.17003 11.3053 8.69136 11.0886C9.22003 10.8686 9.82203 10.9673 10.2467 11.3219L10.322 11.3846C10.4407 11.4833 10.566 11.5046 10.6507 11.5046C10.788 11.5046 10.9174 11.4513 11.0147 11.3533L11.3547 11.0133C11.544 10.8239 11.558 10.5266 11.3867 10.3213L11.32 10.2413C10.9587 9.80792 10.8687 9.21459 11.0854 8.69258C11.3027 8.16592 11.7867 7.81259 12.348 7.76125L12.4514 7.75192C12.716 7.72725 12.918 7.50725 12.918 7.23859V6.75725C12.918 6.49059 12.716 6.27059 12.45 6.24525L12.3487 6.23592C11.7847 6.18392 11.302 5.82925 11.0854 5.30725C10.868 4.78192 10.9587 4.18859 11.3207 3.75592L11.3874 3.67725C11.5587 3.47059 11.5447 3.17325 11.3554 2.98392L11.0154 2.64392C10.918 2.54592 10.7887 2.49259 10.6514 2.49259C10.5667 2.49259 10.4414 2.51392 10.3234 2.61259L10.2434 2.67925C9.8207 3.03125 9.21003 3.12592 8.69536 2.91525C8.17003 2.69725 7.81536 2.21392 7.76403 1.65125L7.7547 1.54792C7.73136 1.28325 7.51136 1.08125 7.24336 1.08125H6.76136C6.4947 1.08125 6.2747 1.28325 6.24936 1.54925L6.24003 1.65059C6.18936 2.21259 5.8347 2.69592 5.31336 2.91259C4.7887 3.12992 4.1847 3.03459 3.76003 2.67925L3.68136 2.61525C3.56136 2.51525 3.43603 2.49525 3.35136 2.49525C3.21403 2.49525 3.0847 2.54859 2.98736 2.64592L2.64603 2.98592C2.45803 3.17525 2.44403 3.47259 2.61536 3.67792L2.68203 3.75659C3.04203 4.19192 3.13336 4.78592 2.9167 5.30659C2.6987 5.83192 2.21536 6.18659 1.65336 6.23792L1.54936 6.24725C1.2847 6.27192 1.0827 6.49192 1.0827 6.76059V7.24192C1.0827 7.50859 1.2847 7.72859 1.5507 7.75392L1.6507 7.76325C2.21603 7.81525 2.69936 8.17125 2.91536 8.69392C3.13203 9.21792 3.04203 9.81059 2.68003 10.2439L2.61603 10.3206C2.4427 10.5273 2.45736 10.8246 2.6467 11.0139L2.9867 11.3539C3.08403 11.4519 3.21336 11.5053 3.3507 11.5053C3.43536 11.5053 3.5607 11.4853 3.6787 11.3853L3.75603 11.3213C4.0267 11.0973 4.37136 10.9719 4.7247 10.9719V10.9699Z"
        })
    ]
}), '0 0 14 14');

// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/Avatar/assets/application.tsx
var application = __webpack_require__(3988);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx






const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 9999,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            border: `1px solid ${theme.palette.mode === 'dark' ? '#2F3336' : '#EFF3F4'}`,
            color: theme.palette.text.primary,
            cursor: 'pointer'
        },
        setIcon: {
            width: 14,
            height: 14,
            marginLeft: 2
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 4
        }
    })
);
function NFTAvatarButton(props) {
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const { onClick  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(application/* ApplicationSmallIcon */.tc, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                variant: "body1",
                className: classes.text,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        style: {
                            marginLeft: 4,
                            fontWeight: 600
                        },
                        children: t('nft_avatar')
                    }),
                    props.showSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GearSettingsIcon, {
                        className: classes.setIcon
                    }) : null
                ]
            })
        ]
    });
}


/***/ }),

/***/ 99089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ NFTBadge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(80226);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(85418);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(36199);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarRing.tsx



const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            overflow: 'unset'
        },
        container: {
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: '2px solid #00f8ff'
        }
    })
);
function NFTAvatarRing(props) {
    const { classes  } = useStyles();
    const { stroke , strokeWidth , fontSize , text , width , id , price , hasRainbow =true , borderSize =2  } = props;
    const avatarSize = hasRainbow ? width - borderSize : width + 1;
    const R = avatarSize / 2;
    const path_r = R - strokeWidth + fontSize / 2;
    const x1 = R - path_r;
    const y1 = R;
    const x2 = R + path_r;
    const svgNode = /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: classes.root,
        width: "100%",
        height: "100%",
        viewBox: `0 0 ${avatarSize} ${avatarSize}`,
        id: id,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-name`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 1 ${x2} ${y1}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                        id: `${id}-path-price`,
                        fill: "none",
                        stroke: "none",
                        strokeWidth: "0",
                        d: `M${x1} ${y1} A${path_r} ${path_r} 0 1 0 ${x2} ${y1}`
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: `${id}-gradient`,
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0%",
                                stopColor: "#00f8ff"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "20%",
                                stopColor: "#a4ff00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "40%",
                                stopColor: "#f7275e"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "60%",
                                stopColor: "#ffd300"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "80%",
                                stopColor: "#ff8a00"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "100%",
                                stopColor: "#00f8ff"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: R,
                cy: R,
                r: R - strokeWidth / 2 + 1,
                fill: "none",
                stroke: stroke,
                strokeWidth: strokeWidth
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pattern", {
                id: `${id}-pattern`,
                x: "0",
                y: "0",
                width: "300%",
                height: "100%",
                patternUnits: "userSpaceOnUse",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                    cx: R,
                    cy: R,
                    r: R,
                    fill: `url(#${id}-gradient)`,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        dur: "10s",
                        repeatCount: "indefinite",
                        from: `0 ${R} ${R}`,
                        to: `360 ${R} ${R}`
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                x: "0%",
                textAnchor: "middle",
                fill: `url(#${id}-pattern)`,
                fontFamily: "sans-serif",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                    xlinkHref: `#${id}-path-name`,
                    startOffset: "50%",
                    rotate: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                        fontWeight: "bold",
                        fontSize: fontSize,
                        children: text
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("text", {
                x: "0%",
                textAnchor: "middle",
                fill: `url(#${id}-pattern)`,
                fontFamily: "sans-serif",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("textPath", {
                    xlinkHref: `#${id}-path-price`,
                    startOffset: "50%",
                    rotate: "auto",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("tspan", {
                        fontWeight: "bold",
                        fontSize: fontSize,
                        dy: "0.5em",
                        children: price
                    })
                })
            })
        ]
    });
    return hasRainbow ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RainbowBox/* RainbowBox */._, {
        borderSize: borderSize,
        children: svgNode
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        children: svgNode
    });
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTBadge.tsx







const NFTBadge_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            position: 'absolute',
            bottom: 0
        }
    })
);
function NFTBadge(props) {
    const { avatar , nftInfo , size =140 , hasRainbow , borderSize  } = props;
    const classes = (0,entry/* useStylesExtends */.Bc)(NFTBadge_useStyles(), props);
    const { t  } = (0,utils/* useI18N */.M1)();
    if (!nftInfo) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarRing, {
            id: "NFTAvatarRing",
            width: size,
            strokeWidth: 14,
            stroke: "black",
            hasRainbow: hasRainbow,
            borderSize: borderSize,
            fontSize: 9,
            text: t('loading'),
            price: ""
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: (e)=>{
            e.preventDefault();
            if (!nftInfo.permalink) return;
            (0,src/* openWindow */.xw)(nftInfo.permalink);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: nftInfo?.permalink ?? '',
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTAvatarRing, {
                id: "NFTAvatarRing",
                width: size,
                strokeWidth: 14,
                stroke: "black",
                hasRainbow: hasRainbow,
                borderSize: borderSize,
                fontSize: 9,
                text: `${(0,Avatar_utils/* formatText */.RZ)(nftInfo.name ?? '', avatar.tokenId)} ${nftInfo.slug.toLowerCase() === 'ens' ? 'ENS' : ''}`,
                price: (0,Avatar_utils/* formatPrice */.T4)(nftInfo.amount ?? '0', nftInfo.symbol ?? 'ETH')
            })
        })
    });
}


/***/ }),

/***/ 60783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ NFTBadgeTimeline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(69314);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93455);
/* harmony import */ var _RainbowBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36199);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31939);
/* harmony import */ var _hooks_usePersonaNFTAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15495);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()(()=>({
        root: {
            transform: 'scale(0.97)'
        }
    })
);
function NFTBadgeTimeline(props) {
    const { userId , avatarId , width , height , snsKey  } = props;
    const { loading , value: _avatar  } = (0,_hooks_usePersonaNFTAvatar__WEBPACK_IMPORTED_MODULE_5__/* .usePersonaNFTAvatar */ .O)(userId, avatarId, snsKey);
    const [avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [avatarId_, setAvatarId_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const onUpdate = (data)=>{
        if (!data.address || !data.tokenId) {
            setAvatar(undefined);
            return;
        }
        setAvatar(data);
        setAvatarId_(data.avatarId);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAvatarId_(avatarId);
    }, [
        avatarId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setAvatar(_avatar);
    }, [
        _avatar
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>_utils__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.NFTAvatarTimelineUpdated.on */ .ql.events.NFTAvatarTimelineUpdated.on((data)=>onUpdate(data)
        )
    , []);
    if (!avatar) return null;
    if (avatarId_ && avatar.avatarId !== avatarId_) return null;
    return loading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        size: width
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RainbowBox__WEBPACK_IMPORTED_MODULE_3__/* .RainbowBox */ ._, {
        width: width,
        height: height,
        radius: "100%",
        classes: {
            root: classes.root
        }
    });
}


/***/ }),

/***/ 15716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "el": () => (/* reexport */ useNFT),
  "iF": () => (/* reexport */ useNFTAvatar),
  "dw": () => (/* reexport */ rss3/* useSaveNFTAvatar */.d)
});

// UNUSED EXPORTS: useSave

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFT.ts




function useNFT(account, address, tokenId, pluginId, chainId) {
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(pluginId ?? src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const hub = (0,entry_web3/* useWeb3Hub */.hh)(pluginId, {
        chainId,
        account
    });
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const asset = await hub?.getNonFungibleAsset?.(address, tokenId, {
            chainId
        });
        return {
            amount: asset?.price?.[src/* CurrencyType.USD */.V2.USD] ?? '0',
            name: asset?.contract?.name ?? '',
            symbol: asset?.payment_tokens?.[0].symbol ?? 'ETH',
            image: asset?.metadata?.imageURL ?? '',
            owner: (asset?.owner?.address ?? asset?.ownerId) ?? '',
            slug: asset?.collection?.slug ?? '',
            permalink: (asset?.link ?? Others?.explorerResolver.nonFungibleTokenLink(chainId ?? types/* ChainId.Mainnet */.a_.Mainnet, address, tokenId)) ?? ''
        };
    }, [
        hub?.getNonFungibleAsset,
        address,
        tokenId,
        Others,
        chainId
    ]);
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/useGetNFTAvatar.ts + 1 modules
var useGetNFTAvatar = __webpack_require__(48121);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTAvatar.ts



function useNFTAvatar(userId, snsKey) {
    const [, getNFTAvatar] = (0,useGetNFTAvatar/* useGetNFTAvatar */.U)();
    return (0,useAsync/* default */.Z)(async ()=>{
        return getNFTAvatar(userId, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, snsKey);
    }, [
        userId,
        snsKey,
        getNFTAvatar
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/rss3/index.ts + 2 modules
var rss3 = __webpack_require__(86962);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/save/useSave.ts + 3 modules
var useSave = __webpack_require__(30257);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/save/index.ts


;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/index.ts






/***/ })

}]);