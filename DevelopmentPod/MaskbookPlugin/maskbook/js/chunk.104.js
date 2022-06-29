"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[104],{

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

/***/ 78066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PersonaContext)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44737);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80226);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5903);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58500);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70981);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29730);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58757);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19769);










function usePersonaContext() {
    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const [selectedPersona, setSelectedPersona] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier */ .cn);
    const { value: personas , retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation(false)
    , [
        _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier */ .cn
    ]);
    const { value: avatar  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(async ()=>{
        return _service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.getPersonaAvatar */ .ZP.Identity.getPersonaAvatar(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier.from */ .ob.from(currentIdentifier).unwrap());
    }, [
        currentIdentifier
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        return _utils__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.ownPersonaChanged.on */ .ql.events.ownPersonaChanged.on(retry);
    }, [
        retry
    ]);
    const currentPersona = personas?.find((x)=>x.identifier === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier.from */ .ob.from(currentIdentifier).unwrapOr((0,lodash_unified__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(personas)?.identifier)
    );
    const { value: proofs , retry: refreshProofs , loading: fetchProofsLoading ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>{
        try {
            if (!currentPersona?.identifier.publicKeyAsHex) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
            const binding = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_6__/* .NextIDProof.queryExistedBindingByPersona */ .q7.queryExistedBindingByPersona(currentPersona.identifier.publicKeyAsHex);
            return binding?.proofs ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        } catch  {
            return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        }
    }, [
        currentPersona
    ]);
    return {
        selectedAccount,
        setSelectedAccount,
        avatar,
        personas,
        currentPersona,
        selectedPersona,
        setSelectedPersona,
        proofs,
        refreshProofs,
        fetchProofsLoading
    };
}
const PersonaContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_10__/* .createContainer */ .f)(usePersonaContext);


/***/ }),

/***/ 20104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var src = __webpack_require__(10503);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectNftContractDialog.tsx + 2 modules
var SelectNftContractDialog = __webpack_require__(69038);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/SelectProviderDialog/index.tsx + 3 modules
var SelectProviderDialog = __webpack_require__(40881);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/index.tsx
var WalletStatusDialog = __webpack_require__(25930);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/TransactionDialog.tsx
var TransactionDialog = __webpack_require__(46962);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/ConnectWalletDialog/index.tsx + 2 modules
var ConnectWalletDialog = __webpack_require__(69242);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/RiskWarningDialog/index.tsx
var RiskWarningDialog = __webpack_require__(1321);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/GasSettingDialog/index.tsx + 4 modules
var GasSettingDialog = __webpack_require__(76018);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/TransactionSnackbar/index.tsx
var TransactionSnackbar = __webpack_require__(95414);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(30318);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(11945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Tutorial.tsx


const TutorialIcon = (0,icons_utils/* createIcon */.I)('TutorialIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M18.227 10.117v-2.44c.27-.285.284-.57.27-.732-.067-.637-.772-.895-1.002-.99-1.681-.636-4.799-1.897-6.52-2.602-1.044-.515-1.382-.42-2.399-.013-.271.108-4.758 1.775-6.492 2.494-.95.393-1.085.976-1.085 1.3 0 .543.38 1.03 1.071 1.316l2.074.84v5.449l.176.176c.081.081 1.938 1.952 5.34 1.952 3.186 0 5.002-1.884 5.083-1.966l.163-.176v-5.38l.772-.326-.027 1.111-.623 1.044 1.884 1.79 2.087-1.817-.772-1.03Zm-4.541 4.12A6.337 6.337 0 0 1 9.66 15.66c-2.358 0-3.808-1.03-4.296-1.423V9.791l3.063 1.247h.013c.976.366 1.722.34 2.657-.067l2.589-1.098v4.364Zm3.267-2.928-.38-.352.285-.474.054-2.169c.095-.298-.014-.542-.176-.678a.632.632 0 0 0-.773-.054L10.61 9.846c-.637.284-1.057.298-1.735.054l-6.33-2.575c-.162-.068-.257-.136-.298-.19.04-.04.136-.109.312-.19 1.735-.718 6.411-2.467 6.465-2.48h.014c.813-.326.813-.326 1.423-.014l.04.014c1.709.69 4.799 1.951 6.507 2.602v3.456l.339.448-.393.338Z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
;// CONCATENATED MODULE: ./src/components/shared/ApplicationSettingPluginSwitch.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        listItem: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 12,
            '&:hover': {
                background: theme.palette.background.default
            },
            '&:hover .MuiAvatar-root': {
                background: theme.palette.background.paper
            }
        },
        listContent: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        headerWrapper: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        settings: {
            alignSelf: 'flex-start',
            paddingTop: theme.spacing(0.5),
            marginLeft: theme.spacing(0.5),
            cursor: 'pointer',
            color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary,
            opacity: theme.palette.mode === 'dark' ? 0.5 : 1
        },
        avatar: {
            background: theme.palette.background.default,
            width: '44px',
            height: '44px',
            '> *': {
                width: 26,
                height: 26
            }
        },
        info: {
            maxWidth: 420
        },
        name: {
            fontSize: 14,
            fontWeight: 700
        },
        desc: {
            fontSize: 12,
            fontWeight: 400,
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.primary
        }
    })
);
function ApplicationSettingPluginSwitch(props) {
    const { classes  } = useStyles();
    const snsAdaptorPlugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    const snsAdaptorMinimalPlugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)(true);
    async function onSwitch(id, checked) {
        await service/* Services.Settings.setPluginMinimalModeEnabled */.K9.Settings.setPluginMinimalModeEnabled(id, !checked);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        children: snsAdaptorPlugins.flatMap(({ ID , ApplicationEntries: entries  })=>(entries ?? []).map((entry)=>({
                    entry,
                    pluginId: ID
                })
            )
        ).filter((x)=>x.entry.category === 'dapp'
        ).sort((a, b)=>(a.entry.marketListSortingPriority ?? 0) - (b.entry.marketListSortingPriority ?? 0)
        ).map((x1)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: classes.listContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    className: classes.avatar,
                                    children: x1.entry.icon
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.info,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.headerWrapper,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                className: classes.name,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                                                    field: x1.entry.name,
                                                    pluginID: x1.pluginId
                                                })
                                            }),
                                            x1.entry.tutorialLink ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                                className: classes.settings,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TutorialIcon, {
                                                    onClick: ()=>(0,shared_base_ui_src/* openWindow */.xw)(x1.entry.tutorialLink)
                                                })
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.desc,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                                            field: x1.entry.description,
                                            pluginID: x1.pluginId
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* SettingSwitch */.WU, {
                        size: "small",
                        checked: !snsAdaptorMinimalPlugins.map((x)=>x.ID
                        ).includes(x1.pluginId),
                        onChange: (event)=>onSwitch(x1.pluginId, event.target.checked)
                    })
                ]
            }, x1.entry.ApplicationEntryID)
        )
    });
}

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ./src/components/shared/ApplicationSettingPluginList.tsx







// #region kv storage
function setUnlistedApp(app, unlisted) {
    const state = shared/* PersistentStorages.ApplicationEntryUnListedList.storage.current */._H.ApplicationEntryUnListedList.storage.current;
    if (!state.initialized) return;
    shared/* PersistentStorages.ApplicationEntryUnListedList.storage.current.setValue */._H.ApplicationEntryUnListedList.storage.current.setValue({
        ...state.value,
        [app.entry.ApplicationEntryID]: unlisted
    });
}
function getUnlistedApp(app) {
    const state = shared/* PersistentStorages.ApplicationEntryUnListedList.storage.current */._H.ApplicationEntryUnListedList.storage.current;
    return state.initialized ? state.value[app.entry.ApplicationEntryID] : true;
}
// #endregion
const ApplicationSettingPluginList_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { iconFilterColor  })=>({
        list: {
            display: 'grid',
            gap: theme.spacing(2, 1),
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            width: '100%',
            paddingTop: '8px',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            overflowY: 'scroll',
            height: 238
        },
        listItem: {
            width: 84,
            height: 56,
            padding: 0,
            background: theme.palette.background.default,
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            borderRadius: 8,
            position: 'relative'
        },
        iconWrapper: {
            '> *': {
                width: 36,
                height: 36
            },
            ...iconFilterColor ? {
                filter: `drop-shadow(0px 6px 12px ${iconFilterColor})`,
                backdropFilter: 'blur(16px)'
            } : {}
        },
        loadingWrapper: {
            display: 'flex',
            height: 400,
            justifyContent: 'center',
            alignItems: 'center'
        },
        unlisted: {
            fontSize: 18,
            fontWeight: 600
        },
        placeholderWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 238
        },
        placeholder: {
            color: (0,entry/* getMaskColor */.nb)(theme).textLight
        }
    })
);
function ApplicationSettingPluginList() {
    const { classes  } = ApplicationSettingPluginList_useStyles({
        iconFilterColor: undefined
    });
    const { t  } = (0,utils/* useI18N */.M1)();
    const snsAdaptorPlugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    const applicationList = (0,react.useMemo)(()=>{
        return snsAdaptorPlugins.flatMap(({ ID , ApplicationEntries: entries  })=>(entries ?? []).filter((entry)=>entry.appBoardSortingDefaultPriority && !entry.recommendFeature
            ).map((entry)=>({
                    entry,
                    pluginId: ID
                })
            )
        ).sort((a, b)=>{
            return (a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0);
        });
    }, [
        snsAdaptorPlugins
    ]);
    const [listedAppList, setListedAppList] = (0,react.useState)(applicationList.filter((x)=>!getUnlistedApp(x)
    ));
    const [unlistedAppList, setUnListedAppList] = (0,react.useState)(applicationList.filter((x)=>getUnlistedApp(x)
    ));
    const setAppList = (0,react.useCallback)((app, unlisted)=>{
        setUnlistedApp(app, unlisted);
        const removeFromAppList = (appList)=>appList.filter((x)=>x.entry.ApplicationEntryID !== app.entry.ApplicationEntryID
            )
        ;
        const addToAppList = (appList)=>appList.concat(app)
        ;
        setListedAppList(unlisted ? removeFromAppList : addToAppList);
        setUnListedAppList(unlisted ? addToAppList : removeFromAppList);
    }, [
        applicationList
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppList, {
                appList: listedAppList,
                setUnlistedApp: setAppList,
                isListed: true
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.unlisted,
                children: t('application_settings_tab_plug_app-list-unlisted')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppList, {
                appList: unlistedAppList,
                setUnlistedApp: setAppList,
                isListed: false
            })
        ]
    });
}
function AppList(props) {
    const { appList , setUnlistedApp: setUnlistedApp1 , isListed  } = props;
    const { classes  } = ApplicationSettingPluginList_useStyles({
        iconFilterColor: undefined
    });
    const { t  } = (0,utils/* useI18N */.M1)();
    return appList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.list,
        children: appList.map((application, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(AppListItem, {
                application: application,
                setUnlistedApp: setUnlistedApp1,
                isListed: isListed
            }, index)
        )
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.placeholderWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            children: isListed ? t('application_settings_tab_plug_app-unlisted-placeholder') : t('application_settings_tab_plug_app-listed-placeholder')
        })
    });
}
function AppListItem(props) {
    const { application , setUnlistedApp: setUnlistedApp2 , isListed  } = props;
    const { classes  } = ApplicationSettingPluginList_useStyles({
        iconFilterColor: application.entry.iconFilterColor
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.listItem,
        onClick: ()=>setUnlistedApp2(application, isListed)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.iconWrapper,
            children: application.entry.icon
        })
    });
}

;// CONCATENATED MODULE: ./src/components/shared/ApplicationSettingDialog.tsx









const ApplicationSettingDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            padding: 0
        },
        content: {
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            padding: 0
        },
        tabPaper: {
            position: 'sticky',
            top: 0,
            zIndex: 5000
        },
        indicator: {
            display: 'none'
        },
        tab: {
            maxWidth: 160
        },
        focusTab: {
            borderBottom: `2px solid ${theme.palette.primary.main}`
        },
        flexContainer: {
            justifyContent: 'space-around'
        },
        dialogTitle: {
            border: 'none'
        },
        tabContent: {
            padding: 16
        }
    })
);
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["appList"] = 0] = "appList";
    DialogTabs[DialogTabs["pluginSwitch"] = 1] = "pluginSwitch";
})(DialogTabs || (DialogTabs = {}));
function ApplicationSettingDialog(props) {
    const { open , onClose  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ApplicationSettingDialog_useStyles();
    const tabState = (0,react.useState)(DialogTabs.appList);
    const tabProps = {
        tabs: [
            {
                label: t('application_settings_tab_app_list'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.tabContent,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginList, {})
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('application_settings_tab_plug_in_switch'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.tabContent,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingPluginSwitch, {})
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state: tabState,
        classes: {
            focusTab: classes.focusTab,
            tabPaper: classes.tabPaper,
            tab: classes.tab,
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
            tabs: classes.tabs
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t('application_settings'),
        disableTitleBorder: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.wrapper,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                height: 600,
                ...tabProps
            })
        })
    });
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ./src/social-network-adaptor/utils.ts
var social_network_adaptor_utils = __webpack_require__(1250);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pure-react-carousel@1.28.1/node_modules/pure-react-carousel/dist/index.es.js
var index_es = __webpack_require__(93503);
;// CONCATENATED MODULE: ./src/components/shared/ApplicationRecommendArea.tsx





const ApplicationRecommendArea_useStyles = (0,entry/* makeStyles */.ZL)()(()=>{
    return {
        recommendFeatureAppListWrapper: {
            display: 'flex',
            overflowX: 'scroll',
            margin: '0 2px 4px 2px',
            padding: '8px 2px 0 2px',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        carousel: {
            height: 130,
            overflowX: 'scroll',
            overscrollBehavior: 'contain',
            '& .carousel__slider': {
                padding: '8px 2px 0',
                overscrollBehavior: 'contain',
                overflowX: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    };
});
function ApplicationRecommendArea(props) {
    const { recommendFeatureAppList , RenderEntryComponent  } = props;
    const { classes  } = ApplicationRecommendArea_useStyles();
    const [isPlaying, setIsPlaying] = (0,react.useState)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                rel: "stylesheet",
                href: new URL(/* asset import */ __webpack_require__(56131), __webpack_require__.b).toString()
            }),
            recommendFeatureAppList.length > 2 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* CarouselProvider */.sj, {
                naturalSlideWidth: 220,
                naturalSlideHeight: 117,
                totalSlides: recommendFeatureAppList.length,
                visibleSlides: 2.2,
                infinite: false,
                interval: 2500,
                className: classes.carousel,
                isPlaying: isPlaying,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* Slider */.iR, {
                    onScroll: (e)=>setIsPlaying(e.target.scrollLeft === 0)
                    ,
                    children: recommendFeatureAppList.map((application, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(index_es/* Slide */.Mi, {
                            index: i,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                                application: application
                            })
                        }, application.entry.ApplicationEntryID)
                    )
                })
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.recommendFeatureAppListWrapper,
                children: recommendFeatureAppList.map((application)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                        application: application
                    }, application.entry.ApplicationEntryID)
                )
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/DataSource/useNextID.ts
var useNextID = __webpack_require__(360);
// EXTERNAL MODULE: ./src/components/DataSource/usePersonaConnectStatus.ts
var usePersonaConnectStatus = __webpack_require__(9987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ./src/components/DataSource/useMyPersonas.ts
var useMyPersonas = __webpack_require__(80006);
;// CONCATENATED MODULE: ./src/components/DataSource/usePersonaAgainstSNSConnectStatus.ts







function usePersonaAgainstSNSConnectStatus() {
    const ui = social_network/* activatedSocialNetworkUI */.LM;
    const platform = ui.configuration.nextIDConfig?.platform;
    const lastState = (0,useNextID/* useSetupGuideStatusState */.Hk)();
    const lastRecognized = (0,useActivatedUI/* useLastRecognizedIdentity */.FB)();
    const username = (0,react.useMemo)(()=>{
        return lastState.username || lastRecognized.identifier?.userId;
    }, [
        lastState,
        lastRecognized
    ]);
    const personas = (0,useMyPersonas/* useMyPersonas */.n)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const checkSNSConnectToCurrentPersona = (persona)=>username ? persona.linkedProfiles.some((x)=>x.identifier.userId === username
            ) : false
        ;
        const currentPersonaIdentifier = await service/* default.Settings.getCurrentPersonaIdentifier */.ZP.Settings.getCurrentPersonaIdentifier();
        const currentPersona = (await service/* default.Identity.queryOwnedPersonaInformation */.ZP.Identity.queryOwnedPersonaInformation(true)).find((x)=>x.identifier === currentPersonaIdentifier
        );
        const currentSNSConnectedPersona = personas.find(checkSNSConnectToCurrentPersona);
        return {
            isSNSConnectToCurrentPersona: currentPersona ? checkSNSConnectToCurrentPersona(currentPersona) : false,
            currentPersonaPublicKey: currentPersona?.identifier.rawPublicKey,
            currentSNSConnectedPersonaPublicKey: currentSNSConnectedPersona?.identifier.rawPublicKey
        };
    }, [
        platform,
        username,
        ui,
        personas
    ]);
}

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(78066);
;// CONCATENATED MODULE: ./src/components/shared/ApplicationBoard.tsx




















const ApplicationBoard_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        applicationWrapper: {
            padding: theme.spacing(1, 0.25),
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            overflowY: 'auto',
            overflowX: 'hidden',
            gridTemplateRows: '100px',
            gridGap: 10,
            justifyContent: 'space-between',
            height: 320,
            width: props.shouldScroll ? 589 : 576,
            '::-webkit-scrollbar': {
                backgroundColor: 'transparent',
                width: 20
            },
            '::-webkit-scrollbar-thumb': {
                borderRadius: '20px',
                width: 5,
                border: '7px solid rgba(0, 0, 0, 0)',
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(250, 250, 250, 0.2)' : 'rgba(0, 0, 0, 0.2)',
                backgroundClip: 'padding-box'
            },
            [smallQuery]: {
                overflow: 'auto',
                overscrollBehavior: 'contain',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: theme.spacing(1)
            }
        },
        subTitle: {
            cursor: 'default',
            fontSize: 18,
            lineHeight: '24px',
            fontWeight: 600,
            color: theme.palette.text.primary
        },
        loadingWrapper: {
            display: 'flex',
            height: 324,
            justifyContent: 'center',
            alignItems: 'center'
        },
        placeholderWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 24,
            height: 324
        },
        placeholder: {
            color: (0,entry/* getMaskColor */.nb)(theme).textLight
        },
        recommendFeatureAppListWrapper: {
            display: 'flex',
            overflowX: 'scroll',
            margin: '0 2px 4px 2px',
            padding: '8px 2px 0 2px',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        carousel: {
            height: 130,
            overflowX: 'scroll',
            overscrollBehavior: 'contain',
            '& .carousel__slider': {
                padding: '8px 2px 0',
                overscrollBehavior: 'contain',
                overflowX: 'scroll',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    };
});
function ApplicationBoard(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(usePersonaContext/* PersonaContext.Provider */.m.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntryStatusProvider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardContent, {
                ...props
            })
        })
    });
}
function ApplicationBoardContent(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const snsAdaptorPlugins = (0,entry_content_script/* useActivatedPluginsSNSAdaptor */.Pz)('any');
    const currentWeb3Network = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    const chainId = (0,entry_web3/* useChainId */.xx)();
    const account = (0,entry_web3/* useAccount */.mA)();
    const currentSNSNetwork = (0,social_network_adaptor_utils/* getCurrentSNSNetwork */.G)(social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier);
    const applicationList = (0,react.useMemo)(()=>snsAdaptorPlugins.flatMap(({ ID , ApplicationEntries , enableRequirement  })=>{
            if (!ApplicationEntries) return [];
            const currentWeb3NetworkSupportedChainIds = enableRequirement.web3?.[currentWeb3Network];
            const isWalletConnectedRequired = currentWeb3NetworkSupportedChainIds !== undefined;
            const currentSNSIsSupportedNetwork = enableRequirement.networks.networks[currentSNSNetwork];
            const isSNSEnabled = currentSNSIsSupportedNetwork === undefined || currentSNSIsSupportedNetwork;
            return ApplicationEntries.map((entry)=>({
                    entry,
                    enabled: isSNSEnabled,
                    pluginId: ID,
                    isWalletConnectedRequired: !account && isWalletConnectedRequired,
                    isWalletConnectedEVMRequired: Boolean(account && currentWeb3Network !== base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && isWalletConnectedRequired)
                })
            );
        }).sort((a, b)=>{
            return (a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0);
        }).filter((x)=>Boolean(x.entry.RenderEntryComponent)
        )
    , [
        snsAdaptorPlugins,
        currentWeb3Network,
        chainId,
        account
    ]);
    const recommendFeatureAppList = applicationList.filter((x)=>x.entry.recommendFeature
    ).sort((a, b)=>(a.entry.appBoardSortingDefaultPriority ?? 0) - (b.entry.appBoardSortingDefaultPriority ?? 0)
    );
    const listedAppList = applicationList.filter((x)=>!x.entry.recommendFeature
    ).filter((x)=>!getUnlistedApp(x)
    );
    const { classes  } = ApplicationBoard_useStyles({
        shouldScroll: listedAppList.length > 12
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationRecommendArea, {
                recommendFeatureAppList: recommendFeatureAppList,
                RenderEntryComponent: RenderEntryComponent
            }),
            listedAppList.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.applicationWrapper,
                children: listedAppList.map((application)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RenderEntryComponent, {
                        application: application
                    }, application.entry.ApplicationEntryID)
                )
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.placeholderWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.placeholder,
                    children: t('application_display_tab_plug_app-unlisted-placeholder')
                })
            })
        ]
    });
}
function RenderEntryComponent({ application  }) {
    const Entry = application.entry.RenderEntryComponent;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { setDialog: setSelectProviderDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const { closeDialog: closeApplicationBoard  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.ApplicationDialogUpdated */.R.events.ApplicationDialogUpdated);
    const ApplicationEntryStatus = (0,react.useContext)(ApplicationEntryStatusContext);
    // #region entry disabled
    const disabled = (0,react.useMemo)(()=>{
        if (!application.enabled) return true;
        if (application.entry.nextIdRequired) {
            return Boolean(ApplicationEntryStatus.isLoading || ApplicationEntryStatus.isNextIDVerify === undefined || !ApplicationEntryStatus.isSNSConnectToCurrentPersona && ApplicationEntryStatus.isPersonaConnected);
        } else {
            return false;
        }
    }, [
        application,
        ApplicationEntryStatus
    ]);
    // #endregion
    // #region entry click effect
    const createOrConnectPersona = (0,react.useCallback)(()=>{
        closeApplicationBoard();
        ApplicationEntryStatus.personaConnectAction?.();
    }, [
        ApplicationEntryStatus
    ]);
    const verifyPersona = (0,react.useCallback)(()=>{
        closeApplicationBoard();
        ApplicationEntryStatus.personaNextIDReset?.();
    }, []);
    const clickHandler = (()=>{
        if (application.isWalletConnectedRequired || application.isWalletConnectedEVMRequired) return (walletConnectedCallback)=>setSelectProviderDialog({
                open: true,
                walletConnectedCallback
            })
        ;
        if (!application.entry.nextIdRequired) return;
        if (ApplicationEntryStatus.isPersonaConnected === false || ApplicationEntryStatus.isPersonaCreated === false) return createOrConnectPersona;
        if (ApplicationEntryStatus.shouldVerifyNextId) return verifyPersona;
        return;
    })();
    // #endregion
    // #region tooltip hint
    const tooltipHint = (()=>{
        if (ApplicationEntryStatus.isLoading) return;
        if (application.isWalletConnectedRequired) return t('application_tooltip_hint_connect_wallet');
        if (application.isWalletConnectedEVMRequired) return t('application_tooltip_hint_switch_to_evm_wallet');
        if (!application.entry.nextIdRequired) return;
        if (ApplicationEntryStatus.isPersonaCreated === false && !disabled) return t('application_tooltip_hint_create_persona');
        if (ApplicationEntryStatus.isPersonaConnected === false && !disabled) return t('application_tooltip_hint_connect_persona');
        if (ApplicationEntryStatus.shouldVerifyNextId && !disabled) return t('application_tooltip_hint_verify');
        if (ApplicationEntryStatus.shouldDisplayTooltipHint) return t('application_tooltip_hint_sns_persona_unmatched', {
            currentPersonaPublicKey: (0,shared_base_src/* formatPersonaPublicKey */.lK)(ApplicationEntryStatus.currentPersonaPublicKey ?? '', 4),
            currentSNSConnectedPersonaPublicKey: (0,shared_base_src/* formatPersonaPublicKey */.lK)(ApplicationEntryStatus.currentSNSConnectedPersonaPublicKey ?? '', 4)
        });
        return;
    })();
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {
        disabled: disabled,
        tooltipHint: tooltipHint,
        onClick: clickHandler
    });
}
const ApplicationEntryStatusContext = /*#__PURE__*/ (0,react.createContext)({
    isPersonaConnected: undefined,
    isPersonaCreated: undefined,
    isNextIDVerify: undefined,
    isSNSConnectToCurrentPersona: undefined,
    shouldDisplayTooltipHint: undefined,
    shouldVerifyNextId: undefined,
    currentPersonaPublicKey: undefined,
    currentSNSConnectedPersonaPublicKey: undefined,
    personaConnectAction: undefined,
    personaNextIDReset: undefined,
    isLoading: false
});
function ApplicationEntryStatusProvider(props) {
    const personaConnectStatus = (0,usePersonaConnectStatus/* usePersonaConnectStatus */.x)();
    const nextIDConnectStatus = (0,useNextID/* useNextIDConnectStatus */.EP)();
    const { value: ApplicationCurrentStatus , retry , loading: personaAgainstSNSConnectStatusLoading ,  } = usePersonaAgainstSNSConnectStatus();
    (0,react.useEffect)(()=>{
        return shared/* MaskMessages.events.currentPersonaIdentifier.on */.ql.events.currentPersonaIdentifier.on(retry);
    }, []);
    const { isSNSConnectToCurrentPersona , currentPersonaPublicKey , currentSNSConnectedPersonaPublicKey  } = ApplicationCurrentStatus ?? {};
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationEntryStatusContext.Provider, {
        value: {
            personaConnectAction: personaConnectStatus.action ?? undefined,
            personaNextIDReset: nextIDConnectStatus.reset ?? undefined,
            isPersonaCreated: personaConnectStatus.hasPersona,
            isPersonaConnected: personaConnectStatus.connected,
            isNextIDVerify: nextIDConnectStatus.isVerified,
            isSNSConnectToCurrentPersona,
            shouldDisplayTooltipHint: ApplicationCurrentStatus?.isSNSConnectToCurrentPersona === false && personaConnectStatus.connected,
            shouldVerifyNextId: Boolean(!nextIDConnectStatus.isVerified && ApplicationCurrentStatus),
            currentPersonaPublicKey,
            currentSNSConnectedPersonaPublicKey,
            isLoading: nextIDConnectStatus.loading || personaAgainstSNSConnectStatusLoading
        },
        children: props.children
    });
}

;// CONCATENATED MODULE: ../icons/general/Gear.tsx


const GearIcon = (0,icons_utils/* createIcon */.I)('GearIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.153 11.27 17.808 3.74a1.75 1.75 0 0 0-1.512-.872h-8.59c-.682 0-1.32.368-1.66.959l-4.298 7.441a1.743 1.743 0 0 0 0 1.744l4.346 7.526c.311.539.888.871 1.511.871h8.691c.621 0 1.2-.335 1.512-.871l4.345-7.526c.31-.54.31-1.207 0-1.744Zm-1.422.923-4.346 7.525a.103.103 0 0 1-.089.052h-8.69a.1.1 0 0 1-.09-.052l-4.345-7.525a.101.101 0 0 1 0-.104L7.467 4.65a.279.279 0 0 1 .24-.138h8.59a.1.1 0 0 1 .088.052l4.345 7.525c.02.03.02.07 0 .104Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M11.95 8.582a3.562 3.562 0 0 0-3.557 3.558 3.562 3.562 0 0 0 3.557 3.558 3.56 3.56 0 0 0 3.558-3.556 3.564 3.564 0 0 0-3.558-3.56Zm0 5.477a1.92 1.92 0 0 1-1.917-1.917 1.92 1.92 0 0 1 1.917-1.917 1.92 1.92 0 0 1 1.918 1.917 1.92 1.92 0 0 1-1.918 1.917Z"
        })
    ]
}), '0 0 24 25');

;// CONCATENATED MODULE: ./src/components/shared/ApplicationBoardDialog.tsx












const ApplicationBoardDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        content: {
            padding: theme.spacing(1.5, 2, 2),
            height: 470,
            overflow: 'hidden'
        },
        settingIcon: {
            height: 24,
            width: 24,
            fill: theme.palette.text.primary,
            cursor: 'pointer'
        }
    };
});
function ApplicationBoardDialog() {
    const theme = (0,useTheme/* default */.Z)();
    const { classes  } = ApplicationBoardDialog_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [openSettings, setOpenSettings] = (0,react.useState)(false);
    const { open , closeDialog: _closeDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* WalletMessages.events.ApplicationDialogUpdated */.R.events.ApplicationDialogUpdated);
    const closeDialog = (0,react.useCallback)(()=>{
        _closeDialog();
        shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: false
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        maxWidth: "sm",
        onClose: closeDialog,
        title: t('applications'),
        titleTail: /*#__PURE__*/ (0,jsx_runtime.jsx)(GearIcon, {
            className: classes.settingIcon,
            onClick: ()=>setOpenSettings(true)
        }),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.content,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoard, {
                    closeDialog: closeDialog
                }),
                openSettings ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationSettingDialog, {
                    open: openSettings,
                    onClose: ()=>setOpenSettings(false)
                }) : null
            ]
        })
    });
}

// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletConnectQRCodeDialog/index.tsx + 5 modules
var WalletConnectQRCodeDialog = __webpack_require__(35209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/index.tsx














const sns = {
    ...src/* base */.ue,
    init (signal) {},
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionDialog/* TransactionDialog */.w, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectProviderDialog/* SelectProviderDialog */.V, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNftContractDialog/* SelectNftContractDialog */.B, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusDialog/* WalletStatusDialog */.a, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ApplicationBoardDialog, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectWalletDialog/* ConnectWalletDialog */.b, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(RiskWarningDialog/* WalletRiskWarningDialog */.x, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSettingDialog/* GasSettingDialog */.w, {}),
                (0,esm/* getEnumAsArray */.Yl)(base_src/* NetworkPluginID */.FF).map(({ key , value: pluginID  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionSnackbar/* TransactionSnackbar */.e, {
                        pluginID: pluginID
                    }, key)
                ),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectQRCodeDialog/* WalletConnectQRCodeDialog */.w, {})
            ]
        });
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 56131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/889aa4af284ad659c2c4.css";

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