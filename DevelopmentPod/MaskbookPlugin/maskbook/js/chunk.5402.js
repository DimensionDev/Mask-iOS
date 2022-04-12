"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5402],{

/***/ 3925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ProfileTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93573);
/* harmony import */ var _utils_hooks_useLocationChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75995);






function ProfileTab(props) {
    const { reset , clear , children , classes , title  } = props;
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isMobile = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useMatchXS */ .IN)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.profileTabUpdated.sendToLocal */ .ql.events.profileTabUpdated.sendToLocal({
            show: true
        });
        setActive(true);
        clear();
    }, [
        clear
    ]);
    (0,_utils_hooks_useLocationChange__WEBPACK_IMPORTED_MODULE_4__/* .useLocationChange */ .S)(()=>{
        _utils__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessages.events.profileTabUpdated.sendToLocal */ .ql.events.profileTabUpdated.sendToLocal({
            show: false
        });
        setActive(false);
        reset();
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, active ? classes.selected : ''),
            onClick: onClick,
            component: "div",
            children: [
                props.icon,
                isMobile && props.icon ? null : title,
                active && children ? children : null
            ]
        })
    }, "nfts"));
}


/***/ }),

/***/ 60551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ ProfileTabContent)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(1433);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAddressNames.ts


function useAddressNames(identity, sorter) {
    const { getAddressNamesList  } = (0,context/* useWeb3Context */.Z_)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const addressNames = await getAddressNamesList(identity);
        return sorter ? addressNames.sort(sorter) : addressNames;
    }, [
        identity,
        getAddressNamesList
    ]);
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageTabItem.tsx




const borderShadows = {
    dark: '0px 0px 16px 0px #FFFFFF33',
    light: '0px 0px 16px 0px #65778633',
    dim: '0px 0px 16px 0px #8899A633'
};
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        hidden: {
            display: 'none'
        },
        button: {
            border: `1px solid ${theme.palette.divider} !important`,
            color: `${theme.palette.text.primary} !important`,
            borderRadius: 9999,
            '&:hover': {
                boxShadow: borderShadows === null || borderShadows === void 0 ? void 0 : borderShadows[theme.palette.mode],
                border: `1px solid ${theme.palette.primary.main} !important`,
                color: `${theme.palette.primary.main} !important`,
                backgroundColor: 'transparent'
            }
        },
        selected: {
            border: `1px solid ${theme.palette.primary.main} !important`,
            color: `${theme.palette.primary.main} !important`,
            borderRadius: 9999,
            '&:hover': {
                boxShadow: borderShadows === null || borderShadows === void 0 ? void 0 : borderShadows[theme.palette.mode],
                backgroundColor: 'transparent'
            }
        }
    };
});
function PageTabItem(props) {
    const { tab , selected , onClick  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
        className: classnames_default()(selected ? classes.selected : classes.button),
        variant: "outlined",
        size: "medium",
        onClick: ()=>{
            return onClick === null || onClick === void 0 ? void 0 : onClick(tab);
        },
        children: tab.label
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/PageTab.tsx





const PageTab_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap'
        }
    })
);
function PageTab(props) {
    const { tabs , selectedTab , onChange  } = props;
    const { classes  } = PageTab_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    if (!tabs.length) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body2",
            color: "textPrimary",
            align: "center",
            sx: {
                paddingTop: 8
            },
            children: t('web3_tab_hint')
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: tabs.map((x)=>{
            /*#__PURE__*/ return (0,jsx_runtime.jsx)(PageTabItem, {
                tab: x,
                selected: (selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.ID) === x.ID,
                onClick: (tab)=>{
                    onChange === null || onChange === void 0 ? void 0 : onChange(tab);
                }
            }, x.ID);
        })
    }));
}

// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(75995);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(41529);
;// CONCATENATED MODULE: ./src/components/InjectedComponents/ProfileTabContent.tsx












function getTabContent(tabId) {
    return (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsSNSAdaptor.visibility.useAnyMode */.Pz.visibility.useAnyMode, (x1)=>{
        var ref, ref1;
        const tab = (ref = x1.ProfileTabs) === null || ref === void 0 ? void 0 : ref.find((x)=>x.ID === tabId
        );
        if (!tab) return;
        return (ref1 = tab.UI) === null || ref1 === void 0 ? void 0 : ref1.TabContent;
    });
}
const ProfileTabContent_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        tags: {
            padding: theme.spacing(2)
        },
        metadata: {},
        content: {
            position: 'relative',
            padding: theme.spacing(1)
        }
    })
);
function ProfileTabContent(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,src/* useStylesExtends */.Bc)(ProfileTabContent_useStyles(), props);
    const [hidden, setHidden] = (0,react.useState)(true);
    const [selectedTab, setSelectedTab] = (0,react.useState)();
    const identity = (0,useActivatedUI/* useCurrentVisitingIdentity */.fb)();
    const { value: addressNames = [] , loading: loadingAddressNames  } = useAddressNames(identity);
    var ref5, ref2;
    const tabs = (0,plugin_infra_src/* useActivatedPluginsSNSAdaptor */.Pz)('any').flatMap((x)=>{
        var ref3;
        return (ref5 = (ref3 = x.ProfileTabs) === null || ref3 === void 0 ? void 0 : ref3.map((y)=>({
                ...y,
                pluginID: x.ID
            })
        )) !== null && ref5 !== void 0 ? ref5 : [];
    }).filter((z)=>{
        var ref, ref4;
        return (ref2 = (ref = z.Utils) === null || ref === void 0 ? void 0 : (ref4 = ref.shouldDisplay) === null || ref4 === void 0 ? void 0 : ref4.call(ref, identity, addressNames)) !== null && ref2 !== void 0 ? ref2 : true;
    }).sort((a, z)=>{
        // order those tabs from next id first
        if (a.pluginID === plugin_infra_src/* PluginId.NextID */.je.NextID) return -1;
        if (z.pluginID === plugin_infra_src/* PluginId.NextID */.je.NextID) return 1;
        // order those tabs from collectible first
        if (a.pluginID === plugin_infra_src/* PluginId.Collectible */.je.Collectible) return -1;
        if (z.pluginID === plugin_infra_src/* PluginId.Collectible */.je.Collectible) return 1;
        // place those tabs from debugger last
        if (a.pluginID === plugin_infra_src/* PluginId.Debugger */.je.Debugger) return 1;
        if (z.pluginID === plugin_infra_src/* PluginId.Debugger */.je.Debugger) return -1;
        // place those tabs from dao before the last
        if (a.pluginID === plugin_infra_src/* PluginId.DAO */.je.DAO) return 1;
        if (z.pluginID === plugin_infra_src/* PluginId.DAO */.je.DAO) return -1;
        return a.priority - z.priority;
    });
    const selectedTabComputed = selectedTab !== null && selectedTab !== void 0 ? selectedTab : (0,head/* default */.Z)(tabs);
    (0,useLocationChange/* useLocationChange */.S)(()=>{
        setSelectedTab(undefined);
    });
    (0,useUpdateEffect/* default */.Z)(()=>{
        setSelectedTab(undefined);
    }, [
        identity.identifier
    ]);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.profileTabHidden.on */.ql.events.profileTabHidden.on((data)=>{
            if (data.hidden) setHidden(data.hidden);
        });
    }, [
        identity
    ]);
    (0,react.useEffect)(()=>{
        return utils/* MaskMessages.events.profileTabUpdated.on */.ql.events.profileTabUpdated.on((data)=>{
            setHidden(!data.show);
        });
    }, [
        identity
    ]);
    const ContentComponent = (0,react.useMemo)(()=>{
        var ref;
        return getTabContent((ref = selectedTabComputed === null || selectedTabComputed === void 0 ? void 0 : selectedTabComputed.ID) !== null && ref !== void 0 ? ref : '');
    }, [
        selectedTabComputed,
        identity.identifier
    ]);
    if (hidden) return null;
    if (loadingAddressNames) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            sx: {
                paddingTop: 4,
                paddingBottom: 4
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tags,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PageTab, {
                    tabs: tabs,
                    selectedTab: selectedTabComputed,
                    onChange: setSelectedTab
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentComponent, {
                    addressNames: addressNames,
                    identity: identity
                })
            })
        ]
    }));
}


/***/ }),

/***/ 96288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ InputBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30592);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87409);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1),
            boxSizing: 'border-box'
        },
        search: {
            marginBottom: 0,
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function InputBox(props) {
    const { label , children , onChange , value  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setVisible((v)=>!(!value || value.length === 0)
        );
    }, [
        value
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        className: classes.root,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: children
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
                        className: classes.input,
                        placeholder: label,
                        value: value,
                        onChange: (e)=>{
                            setVisible(e.target.value.length !== 0);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        },
                        ...props.inputBaseProps
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 26176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ NFTAvatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var src = __webpack_require__(89987);
// EXTERNAL MODULE: ../shared-base-ui/dist/index.js + 5 modules
var dist = __webpack_require__(98193);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(63653);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(23070);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useImageChecker.ts
var useImageChecker = __webpack_require__(18554);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(92093);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(13484);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(68681);
// EXTERNAL MODULE: ./src/components/shared/InjectedDialog.tsx + 1 modules
var InjectedDialog = __webpack_require__(57464);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/InputBox.tsx
var InputBox = __webpack_require__(96288);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var Avatar_utils = __webpack_require__(23594);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/AddNFT.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        root: {},
        addNFT: {
            position: 'absolute',
            right: 20,
            top: 10
        },
        input: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        message: {
            '&:before': {
                content: '""',
                marginRight: theme.spacing(0.5),
                borderLeft: '2px solid'
            }
        }
    })
);
function AddNFT(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const [address1, setAddress] = (0,react.useState)('');
    const [tokenId1, setTokenId] = (0,react.useState)('');
    const [message, setMessage] = (0,react.useState)('');
    const { onClose , open , onAddClick  } = props;
    const account = (0,useAccount/* useAccount */.m)();
    const onClick = (0,react.useCallback)(async ()=>{
        if (!address1) {
            setMessage(t('nft_input_address_label'));
            return;
        }
        if (!tokenId1) {
            setMessage(t('nft_input_tokenid_label'));
            return;
        }
        (0,Avatar_utils/* createNFT */.rB)(address1, tokenId1).then((token)=>{
            if (!token || !(0,address/* isSameAddress */.Wr)(token === null || token === void 0 ? void 0 : token.info.owner, account)) {
                setMessage(t('nft_owner_hint'));
                return;
            }
            onAddClick(token);
            handleClose();
        }).catch((error)=>setMessage(t('nft_owner_hint'))
        );
    }, [
        tokenId1,
        address1,
        onAddClick,
        onClose
    ]);
    const onAddressChange = (0,react.useCallback)((address)=>{
        setMessage('');
        setAddress(address);
    }, []);
    const onTokenIdChange = (0,react.useCallback)((tokenId)=>{
        setMessage('');
        setTokenId(tokenId);
    }, []);
    const handleClose = ()=>{
        setMessage('');
        onClose();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InjectedDialog/* InjectedDialog */.F, {
        title: t('nft_add_dialog_title'),
        open: open,
        onClose: handleClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    className: classes.addNFT,
                    variant: "contained",
                    size: "small",
                    onClick: onClick,
                    children: t('nft_add_button_label')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
                        label: "Input Contract Address",
                        onChange: (address)=>onAddressChange(address)
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.input,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBox/* InputBox */.W, {
                        label: "Token ID",
                        onChange: (tokenId)=>onTokenIdChange(tokenId)
                    })
                }),
                message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "error",
                    className: classes.message,
                    children: message
                }) : null
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTImage.tsx




const NFTImage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        imgBackground: {
            position: 'relative',
            margin: theme.spacing(0.5, 1),
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            position: 'absolute',
            top: 5,
            right: 5,
            width: 24,
            height: 24
        },
        image: {
            width: 97,
            height: 97,
            objectFit: 'cover',
            borderRadius: '100%',
            boxSizing: 'border-box',
            '&:hover': {
                border: `4px solid ${theme.palette.primary.main}`
            }
        },
        selected: {
            border: `4px solid ${theme.palette.primary.main}`
        }
    })
);
function isSameNFT(a, b) {
    return (0,address/* isSameAddress */.Wr)(a.contractDetailed.address, b === null || b === void 0 ? void 0 : b.contractDetailed.address) && a.contractDetailed.chainId === (b === null || b === void 0 ? void 0 : b.contractDetailed.chainId) && a.tokenId === (b === null || b === void 0 ? void 0 : b.tokenId);
}
function NFTImage(props) {
    const { token , onChange , selectedToken  } = props;
    const { classes  } = NFTImage_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.imgBackground,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            onClick: ()=>onChange(token)
            ,
            src: token.info.imageURL,
            className: classnames_default()(classes.image, isSameNFT(token, selectedToken) ? classes.selected : '')
        })
    }));
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatar.tsx














const NFTAvatar_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
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
    const classes = (0,theme_src/* useStylesExtends */.Bc)(NFTAvatar_useStyles(), props);
    const account = (0,plugin_infra_src/* useAccount */.mA)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [selectedToken, setSelectedToken] = (0,react.useState)();
    const [open_, setOpen_] = (0,react.useState)(false);
    const [collectibles_, setCollectibles_] = (0,react.useState)([]);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const { data: collectibles , error , retry , state  } = (0,useCollectibles/* useCollectibles */.d)(account, types/* ChainId.Mainnet */.a_.Mainnet);
    const onClick = (0,react.useCallback)(async ()=>{
        if (!selectedToken) return;
        onChange(selectedToken);
        setSelectedToken(undefined);
    }, [
        onChange,
        selectedToken
    ]);
    const onAddClick = (0,react.useCallback)((token)=>{
        setSelectedToken(token);
        setCollectibles_((tokens)=>(0,uniqBy/* default */.Z)([
                token,
                ...tokens
            ], (x)=>x.contractDetailed.address && x.tokenId
            )
        );
    }, []);
    const { openDialog: openSelectProviderDialog  } = (0,dist/* useRemoteControlledDialog */.F$)(src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    const LoadStatus = Array.from({
        length: 8
    }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.skeletonBox,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                className: classes.skeleton
            })
        }, i)
    );
    const Retry = /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.error,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textSecondary",
                children: t('dashboard_no_collectible_found')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                variant: "text",
                onClick: retry,
                children: t('plugin_collectible_retry')
            })
        ]
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: t('nft_list_title')
                            }),
                            account ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                className: classes.account,
                                children: [
                                    t('nft_wallet_label'),
                                    ": ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ReversedAddress */.il, {
                                        address: account,
                                        size: 4
                                    }),
                                    !hideWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
                        hiddenConnectButton: true,
                        chainId: chainId,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.galleryItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.gallery,
                                    children: state !== useSocket/* SocketState.done */.d.done && collectibles.length === 0 ? LoadStatus : error || collectibles.length === 0 && collectibles_.length === 0 ? Retry : (0,uniqBy/* default */.Z)([
                                        ...collectibles_,
                                        ...collectibles
                                    ], (x)=>x.contractDetailed.address && x.tokenId
                                    ).map((token, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImageCollectibleAvatar, {
                                            token: token,
                                            selectedToken: selectedToken,
                                            setSelectedToken: setSelectedToken
                                        }, i)
                                    )
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    className: classes.buttons,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "outlined",
                                            size: "small",
                                            onClick: ()=>setOpen_(true)
                                            ,
                                            children: t('nft_button_add_collectible')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AddNFT, {
                open: open_,
                onClose: ()=>setOpen_(false)
                ,
                onAddClick: onAddClick
            })
        ]
    }));
}
function NFTImageCollectibleAvatar({ token , setSelectedToken , selectedToken  }) {
    var ref;
    const { classes  } = NFTAvatar_useStyles();
    const { value: isImageToken , loading  } = (0,useImageChecker/* useImageChecker */.v)((ref = token.info) === null || ref === void 0 ? void 0 : ref.imageURL);
    if (loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.skeletonBox,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
            animation: "wave",
            variant: "rectangular",
            className: classes.skeleton
        })
    }));
    return isImageToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTImage, {
        token: token,
        selectedToken: selectedToken,
        onChange: setSelectedToken
    }) : null;
}


/***/ }),

/***/ 81179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ NFTAvatarButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(46098);
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

// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var src_utils = __webpack_require__(93573);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarButton.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 9999,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            border: '1px solid',
            backgroundColor: theme.palette.mode === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            color: theme.palette.mode === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
            cursor: 'pointer'
        },
        icon: {
            width: 14,
            height: 14,
            marginLeft: 2
        },
        text: {
            display: 'flex',
            alignItems: 'center'
        }
    })
);
function NFTAvatarButton(props) {
    const classes = (0,src/* useStylesExtends */.Bc)(useStyles(), props);
    const { onClick  } = props;
    const { t  } = (0,src_utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: onClick,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
            variant: "body1",
            className: classes.text,
            children: [
                "🔥",
                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    style: {
                        marginLeft: 4
                    },
                    children: t('nft_avatar')
                }),
                props.showSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(GearSettingsIcon, {
                    className: classes.icon
                }) : null
            ]
        })
    }));
}


/***/ }),

/***/ 42509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ NFTBadge)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ./src/plugins/Avatar/hooks/index.ts + 2 modules
var hooks = __webpack_require__(45255);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var utils = __webpack_require__(23594);
// EXTERNAL MODULE: ./src/plugins/Avatar/SNSAdaptor/RainbowBox.tsx
var RainbowBox = __webpack_require__(10593);
;// CONCATENATED MODULE: ./src/plugins/Avatar/SNSAdaptor/NFTAvatarRing.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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







const NFTBadge_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
    const { avatar , size =140 , hasRainbow , borderSize  } = props;
    const classes = (0,src/* useStylesExtends */.Bc)(NFTBadge_useStyles(), props);
    const { value ={
        amount: '0',
        symbol: 'ETH',
        name: '',
        slug: ''
    } , loading  } = (0,hooks/* useNFT */.e)(avatar.address, avatar.tokenId);
    const { amount , symbol , name , slug  } = value;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        onClick: (e)=>{
            e.preventDefault();
            window.open((0,pipes/* resolveOpenSeaLink */.QN)(avatar.address, avatar.tokenId), '_blank');
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
            href: (0,pipes/* resolveOpenSeaLink */.QN)(avatar.address, avatar.tokenId),
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
                text: loading ? 'loading...' : `${(0,utils/* formatText */.RZ)(name, avatar.tokenId)} ${slug.toLowerCase() === 'ens' ? 'ENS' : ''}`,
                price: loading ? '' : (0,utils/* formatPrice */.T4)(amount, symbol)
            })
        })
    }));
}


/***/ }),

/***/ 21663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ NFTBadgeTimeline)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83634);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45255);
/* harmony import */ var _RainbowBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10593);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43021);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .ZL)()(()=>({
        root: {
            transform: 'scale(0.97)'
        }
    })
);
function NFTBadgeTimeline(props) {
    const { userId , avatarId , width , height , snsKey  } = props;
    const { loading , value: _avatar  } = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useNFTAvatar */ .i)(userId, snsKey);
    const [avatar, setAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [avatarId_, setAvatarId_] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useStylesExtends */ .Bc)(useStyles(), props);
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
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_RainbowBox__WEBPACK_IMPORTED_MODULE_4__/* .RainbowBox */ ._, {
        width: width,
        height: height,
        radius: "100%",
        classes: {
            root: classes.root
        }
    });
}


/***/ }),

/***/ 10593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ RainbowBox),
/* harmony export */   "v": () => (/* binding */ rainbowBorderKeyFrames)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43021);


const rainbowBorderKeyFrames = _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .keyframes */ .F4`
    0%, to {
        border-color: #00f8ff;
        box-shadow: 0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    20% {
        border-color: #a4ff00;
        box-shadow: 0 5px 15px rgba(164, 255, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    40% {
        border-color: #f7275e;
        box-shadow: 0 5px 15px rgba(247, 39, 94, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    60% {
        border-color: #ffd300;
        box-shadow: 0 5px 15px rgba(255, 211, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
    80% {
        border-color: #ff8a00;
        box-shadow: 0 5px 15px rgba(255, 138, 0, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2);
    }
`;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme, { width , height , radius ='100%' , size =2  })=>({
        root: {
            animation: `${rainbowBorderKeyFrames} 6s linear infinite`,
            width,
            height,
            boxShadow: '0 5px 15px rgba(0, 248, 255, 0.4), 0 10px 30px rgba(37, 41, 46, 0.2)',
            transition: 'none',
            borderRadius: radius,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 0,
            border: `${size}px solid #00f8ff`
        }
    })
);
function RainbowBox(props) {
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles({
        width: props.width,
        height: props.height,
        radius: props.radius,
        size: props.borderSize
    }), props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classes.root,
        children: props.children
    }));
}


/***/ }),

/***/ 45255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "e": () => (/* reexport */ useNFT),
  "i": () => (/* reexport */ useNFTAvatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ./src/plugins/Avatar/utils/index.ts
var utils = __webpack_require__(23594);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFT.ts


const NFTCache = new Map();
function useNFT(address, tokenId) {
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !tokenId) return;
        let f = NFTCache.get(`${address}-${tokenId}`);
        if (!f) {
            f = (0,utils/* getNFT */.Uy)(address, tokenId);
            NFTCache.set(`${address}-${tokenId}`, f);
        }
        return f;
    }, [
        address,
        tokenId,
        NFTCache,
        utils/* getNFT */.Uy
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/plugins/Avatar/messages.ts
var messages = __webpack_require__(37867);
;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/useNFTAvatar.ts



function useNFTAvatar(userId, snsKey) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!userId || userId === '$unknown') return;
        return messages/* PluginNFTAvatarRPC.getNFTAvatar */.B.getNFTAvatar(userId, social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier, snsKey);
    }, [
        userId,
        social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/hooks/index.ts




/***/ }),

/***/ 37867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17692);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63151);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(6012)]).then(__webpack_require__.bind(__webpack_require__, 21585))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 23594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ formatText),
/* harmony export */   "T4": () => (/* binding */ formatPrice),
/* harmony export */   "Uy": () => (/* binding */ getNFT),
/* harmony export */   "mr": () => (/* binding */ toPNG),
/* harmony export */   "rB": () => (/* binding */ createNFT)
/* harmony export */ });
/* unused harmony export getImage */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32139);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22283);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95130);
/* harmony import */ var _EVM_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50650);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54492);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26618);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);







function getLastSalePrice(lastSale) {
    var ref;
    if (!(lastSale === null || lastSale === void 0 ? void 0 : lastSale.total_price) || !(lastSale === null || lastSale === void 0 ? void 0 : (ref = lastSale.payment_token) === null || ref === void 0 ? void 0 : ref.decimals)) return;
    return (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_5__/* .formatBalance */ .az)(lastSale.total_price, lastSale.payment_token.decimals);
}
async function getNFT(address, tokenId) {
    var ref, ref1, ref2, ref3, ref4, ref5;
    const asset = await _EVM_messages__WEBPACK_IMPORTED_MODULE_0__/* .EVM_RPC.getAsset */ .k.getAsset({
        address,
        tokenId,
        chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet,
        provider: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA
    });
    var ref6, ref7, ref8, ref9;
    const amount = (ref9 = (ref8 = (0,_masknet_web3_providers__WEBPACK_IMPORTED_MODULE_2__/* .getOrderUnitPrice */ .bb)(asset === null || asset === void 0 ? void 0 : (ref = asset.desktopOrder) === null || ref === void 0 ? void 0 : ref.current_price, (ref6 = asset === null || asset === void 0 ? void 0 : (ref1 = asset.desktopOrder) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.payment_token_contract) === null || ref2 === void 0 ? void 0 : ref2.decimals) !== null && ref6 !== void 0 ? ref6 : 0, (ref7 = asset === null || asset === void 0 ? void 0 : (ref3 = asset.desktopOrder) === null || ref3 === void 0 ? void 0 : ref3.quantity) !== null && ref7 !== void 0 ? ref7 : '1')) !== null && ref8 !== void 0 ? ref8 : getLastSalePrice(asset === null || asset === void 0 ? void 0 : asset.last_sale)) !== null && ref9 !== void 0 ? ref9 : _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ZERO */ .xE;
    var ref10, ref11, ref12, _address, ref13;
    return {
        amount: new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(amount).toFixed(),
        name: (ref10 = asset === null || asset === void 0 ? void 0 : asset.name) !== null && ref10 !== void 0 ? ref10 : '',
        symbol: (ref11 = asset === null || asset === void 0 ? void 0 : (ref4 = asset.desktopOrder) === null || ref4 === void 0 ? void 0 : (ref5 = ref4.payment_token_contract) === null || ref5 === void 0 ? void 0 : ref5.symbol) !== null && ref11 !== void 0 ? ref11 : 'ETH',
        image: (ref12 = asset === null || asset === void 0 ? void 0 : asset.image_url) !== null && ref12 !== void 0 ? ref12 : '',
        owner: (_address = asset === null || asset === void 0 ? void 0 : asset.top_ownerships[0].owner.address) !== null && _address !== void 0 ? _address : '',
        slug: (ref13 = asset === null || asset === void 0 ? void 0 : asset.slug) !== null && ref13 !== void 0 ? ref13 : ''
    };
}
async function createNFT(address, tokenId) {
    return _EVM_messages__WEBPACK_IMPORTED_MODULE_0__/* .EVM_RPC.getNFT */ .k.getNFT({
        address,
        tokenId,
        chainId: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .ChainId.Mainnet */ .a_.Mainnet,
        provider: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_6__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA
    });
}
async function getImage(image) {
    const blob = await Services.Helper.fetch(image);
    return await blobToBase64(blob);
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result)
        ;
        reader.readAsDataURL(blob);
    });
}
function toPNG(image) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(ctx)) throw new Error('Canvas was not supported');
        img.addEventListener('load', ()=>{
            [canvas.width, canvas.height] = [
                img.width,
                img.height
            ];
            ctx.drawImage(img, 0, 0, img.width, img.height);
            canvas.toBlob((blob)=>{
                resolve(blob);
            }, 'image/png');
        });
        img.addEventListener('error', ()=>{
            reject(new Error('Could not load image'));
        });
        img.setAttribute('CrossOrigin', 'Anonymous');
        img.src = image;
    });
}
function formatPrice(amount, symbol) {
    const _amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_4___default())(amount !== null && amount !== void 0 ? amount : '0');
    if (_amount.isZero()) return '';
    if (_amount.isLessThan(1)) return `${_amount.toFixed(2)} ${symbol}`;
    if (_amount.isLessThan(1000)) return `${_amount.toFixed(1)} ${symbol}`;
    if (_amount.isLessThan(1000000)) return `${_amount.div(1000000).toFixed(1)}K ${symbol}`;
    return `${_amount.div(1000000).toFixed(1)}M ${symbol}`;
}
function formatText(name, tokenId) {
    const _name = name.replace(/#\d*/, '').trim();
    let token = tokenId;
    if (tokenId.length > 10) {
        token = tokenId.slice(0, 6) + '...' + tokenId.slice(-4);
    }
    return `${_name} #${token}`;
}


/***/ }),

/***/ 50650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ EVM_Messages),
/* harmony export */   "k": () => (/* binding */ EVM_RPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89664);



if (false) {}
const EVM_Messages = {
    events: (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM)
};
const EVM_RPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 4639).then(__webpack_require__.bind(__webpack_require__, 74639))
, EVM_Messages.events.rpc);


/***/ }),

/***/ 75995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useLocationChange)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);

function useLocationChange(handler) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}


/***/ }),

/***/ 63653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66580);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23070);




function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200
        }
    };
    return (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_0__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)([
        ...data !== null && data !== void 0 ? data : [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 23070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28577);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const requestId1 = `${message.id}_${id}`;
        const notifyUpdatedHook = (info)=>{
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            const requestId = `${message.id}_${id}`;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId1
        });
        // Get data from cache
        setData(socket.getResult(requestId1));
        setState(SocketState.sent);
    }, [
        message.id,
        socket,
        loading,
        id
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data !== null && data !== void 0 ? data : [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ })

}]);