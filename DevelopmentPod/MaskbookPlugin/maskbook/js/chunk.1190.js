"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1190],{

/***/ 12127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ useMyPersonas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
;// CONCATENATED MODULE: ./src/utils/comparer.ts
function PersonaComparer(a, b) {
    if (a.createdAt.getTime() !== b.createdAt.getTime()) return false;
    if (a.updatedAt.getTime() !== b.updatedAt.getTime()) return false;
    if (a.fingerprint !== b.fingerprint) return false;
    if (a.hasPrivateKey !== b.hasPrivateKey) return false;
    if (!a.identifier.equals(b.identifier)) return false;
    // simple check
    if (a.linkedProfiles.size !== b.linkedProfiles.size) return false;
    if (a.nickname !== b.nickname) return false;
    return true;
}
function PersonaArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    if (Object.getOwnPropertySymbols(a) || Object.getOwnPropertySymbols(b)) return false;
    return a.every((persona, index)=>PersonaComparer(persona, b[index])
    );
}

// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js
var debounce = __webpack_require__(89208);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts






let isLoading;
const independentRef = {
    myPersonasRef: new umd.ValueRef([], PersonaArrayComparer)
};
{
    const query = ()=>{
        return service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            isLoading = null;
            service/* default.Helper.__deprecated__setStorage */.ZP.Helper.__deprecated__setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    };
    const debounceQuery = (0,debounce/* default */.Z)(query, 500, {
        trailing: true
    });
    isLoading = query();
    messages/* MaskMessages.events.ownPersonaChanged.on */.q.events.ownPersonaChanged.on(debounceQuery);
}function useMyPersonas() {
    if (isLoading) throw isLoading;
    return (0,src/* useValueRef */.E)(independentRef.myPersonasRef);
}


/***/ }),

/***/ 38394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ usePersonaConnectStatus)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92304);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8267);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87050);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29980);
/* harmony import */ var _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24957);
/* harmony import */ var _useActivatedUI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68836);
/* harmony import */ var _useMyPersonas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12127);









const createPersona = ()=>{
    _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Welcome.openOptionsPage */ .ZP.Welcome.openOptionsPage(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .DashboardRoutes.Setup */ .vq.Setup);
};
const connectPersona = async ()=>{
    const currentPersonaIdentifier = await _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier();
    _settings_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentSetupGuideStatus */ .AI[_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier].value = json_stable_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
        status: _InjectedComponents_SetupGuide__WEBPACK_IMPORTED_MODULE_6__/* .SetupGuideStep.FindUsername */ .s.FindUsername,
        persona: currentPersonaIdentifier === null || currentPersonaIdentifier === void 0 ? void 0 : currentPersonaIdentifier.toText()
    });
};
function usePersonaConnectStatus() {
    const personas = (0,_useMyPersonas__WEBPACK_IMPORTED_MODULE_8__/* .useMyPersonas */ .n)();
    const lastRecognized = (0,_useActivatedUI__WEBPACK_IMPORTED_MODULE_7__/* .useLastRecognizedIdentity */ .FB)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const id = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(_social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI.networkIdentifier, lastRecognized.identifier.userId);
        let connected = false;
        personas.forEach((p)=>{
            p.identifier;
            if (p.linkedProfiles.get(id)) {
                connected = true;
            }
        });
        const action = !personas.length ? createPersona : !connected ? connectPersona : null;
        return {
            connected,
            action,
            hasPersona: !!personas.length
        };
    }, [
        personas,
        lastRecognized,
        _social_network__WEBPACK_IMPORTED_MODULE_5__.activatedSocialNetworkUI
    ]);
}


/***/ }),

/***/ 96967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OptionsCard)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(73450);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Snackbar/Snackbar.js
var Snackbar = __webpack_require__(85379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(2896);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RadioButtonChecked.js
var RadioButtonChecked = __webpack_require__(61403);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(3368);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/DoneOutlined.js
var DoneOutlined = __webpack_require__(12689);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/Send.js
var Send = __webpack_require__(26127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/RefreshOutlined.js
var RefreshOutlined = __webpack_require__(90247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(9790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardActions/CardActions.js
var CardActions = __webpack_require__(79388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(87468);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/NoNftCard.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    const { classes  } = useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const renderNftCard = (title, img, url, count, address)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
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
        }, title));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        justifyContent: "space-around",
        sx: {
            ...sx || {}
        },
        children: conditions.map((condition)=>renderNftCard(condition.name, condition.img, condition.url, condition.minAmount, condition.address)
        )
    }));
};

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(95342);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(9228);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx










const useOptionsStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    const [error1, setError] = (0,react.useState)('');
    const [unmeetCondition, setUnmeetCondition] = (0,react.useState)([]);
    const [snackVisible, setSnackVisible] = (0,react.useState)(false);
    const { classes , cx  } = useOptionsStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const parentRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        setError('');
        setUnmeetCondition((userStatus1 === null || userStatus1 === void 0 ? void 0 : userStatus1.notMeetConditions) || []);
        userStatus1 && userStatus1.notMeetConditions.length > 0 && setError('insufficient-nft');
    }, [
        chainId,
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
        const total1 = userStatus.count ? userStatus.count.reduce((total, e)=>{
            return {
                choice: -1,
                value: total.value + e.value
            };
        }).value : 0;
        return userStatus.options.map((option, index)=>{
            var ref;
            const count = userStatus.count ? ((ref = userStatus.count.find((e)=>e.choice === index
            )) === null || ref === void 0 ? void 0 : ref.value) || 0 : 0;
            const percent = (total1 > 0 ? count * 100 / total1 : 0).toFixed(2);
            const isSelected = choice === index;
            return userStatus.count ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                sx: choice !== index ? {
                    cursor: 'pointer'
                } : {},
                className: classes.progressOption,
                variant: "outlined",
                onClick: !submitting && !selected && !error1 && userStatus.status !== 0 ? ()=>{
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
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* BorderLinearProgress */.C, {
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
                    onClick: !selected && !error1 && userStatus.status !== 0 ? ()=>{
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
        } catch (error) {
            throw error;
        } finally{
            setSubmitting(false);
        }
    }, [
        choice
    ]);
    const renderSubmitButton = (userStatus)=>{
        const isClosed = userStatus.status === 0;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
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
                    !error1 && renderSubmitButton(userStatus1),
                    unmeetCondition.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                                severity: "info",
                                sx: {
                                    mb: 1
                                },
                                children: t('plugin_find_truman_insufficient_nft')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NoNftCard, {
                                conditions: unmeetCondition
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 95342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ BorderLinearProgress),
/* harmony export */   "Z": () => (/* binding */ ResultCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40299);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(61212);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74810);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73450);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42599);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57277);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(87170);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90886);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(19965);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87468);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14767);







const BorderLinearProgress = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        height: 10,
        borderRadius: 5,
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].colorPrimary */ .Z.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
        },
        [`& .${_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"].bar */ .Z.bar}`]: {
            borderRadius: 5
        }
    })
);
const useResultStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()((theme)=>{
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
    const [choice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(userStatus ? userStatus.choice : -1);
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const total1 = (result === null || result === void 0 ? void 0 : result.count) && result.count.length > 0 ? result.count.reduce((total, e)=>{
        return {
            choice: -1,
            value: total.value + e.value
        };
    }).value : 1;
    const answer = result ? type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? result.correct : result.result : -1;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            answer === -1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                severity: "info",
                children: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_puzzle_underway' : 'plugin_find_truman_voting_underway')
            }),
            answer !== -1 && result && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        color: "textPrimary",
                        paddingLeft: 1,
                        paddingRight: 1,
                        marginBottom: 2,
                        children: result.question
                    }),
                    result.options.map((option, index)=>{
                        var ref;
                        const value = ((ref = result.count.find((e)=>e.choice === index
                        )) === null || ref === void 0 ? void 0 : ref.value) || 0;
                        const percent = (total1 > 0 ? value * 100 / total1 : 0).toFixed(2);
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            variant: "outlined",
                            sx: {
                                padding: '12px 18px',
                                borderRadius: '16px',
                                marginBottom: 1
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        rowGap: '8px',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        marginBottom: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                display: 'flex',
                                                alignItems: 'top'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    sx: {
                                                        marginRight: '8px'
                                                    },
                                                    size: "small",
                                                    label: `${value} ${t(value > 1 ? 'plugin_find_truman_votes' : 'plugin_find_truman_vote')}`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    color: "textPrimary",
                                                    sx: {
                                                        fontSize: '13px',
                                                        lineHeight: '24px'
                                                    },
                                                    children: option
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            direction: "row",
                                            spacing: 1,
                                            children: [
                                                choice === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
                                                    size: "small",
                                                    color: "primary",
                                                    label: t('plugin_find_truman_selected')
                                                }),
                                                answer === index && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
                                                    className: classes.answerChip,
                                                    color: "success",
                                                    size: "small",
                                                    label: t(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .PostType.PuzzleResult */ .hQ.PuzzleResult ? 'plugin_find_truman_answer' : 'plugin_find_truman_result')
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    sx: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        columnGap: '16px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                flex: 1
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderLinearProgress, {
                                                value: Number(percent),
                                                variant: "determinate"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            sx: {
                                                width: 54
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
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
                        }, option));
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 84327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StageCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73450);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44939);
/* harmony import */ var _ResultCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95342);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87468);





function StageCard(props) {
    const { userStoryStatus  } = props;
    const { t  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__/* .FindTrumanContext */ .c);
    const renderProgress = (total, success, color)=>{
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            sx: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        width: '100%',
                        mr: 1
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ResultCard__WEBPACK_IMPORTED_MODULE_1__/* .BorderLinearProgress */ .C, {
                        color: color,
                        value: total > 0 ? success * 100 / total : 0,
                        variant: "determinate"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
        }));
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        children: userStoryStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                container: true,
                spacing: 1,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_critical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                                userStoryStatus.critical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.critical.waiting,
                                        t('plugin_find_truman_puzzle_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.critical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
                        item: true,
                        sm: 6,
                        xs: 12,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            sx: {
                                padding: '0 24px'
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "h6",
                                    color: "text.primary",
                                    gutterBottom: true,
                                    children: t('plugin_find_truman_dialog_noncritical')
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
                                userStoryStatus.nonCritical.waiting === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    variant: "body2",
                                    color: "text.secondary",
                                    gutterBottom: true,
                                    children: [
                                        userStoryStatus.nonCritical.waiting,
                                        t('plugin_find_truman_poll_to_be_revealed')
                                    ]
                                }),
                                userStoryStatus.nonCritical.waiting > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
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
    }));
};


/***/ }),

/***/ 92997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useConst)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76108);
/* harmony import */ var _Worker_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87958);




function renderString(template, data) {
    var ref;
    return template.replace(/{{([^}]+)}}/g, (match, p1)=>{
        var ref1;
        return (ref = (ref1 = data[p1]) === null || ref1 === void 0 ? void 0 : ref1.toString()) !== null && ref !== void 0 ? ref : match;
    });
}
function useConst() {
    const { i18n  } = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .useI18N */ .M1)();
    const [consts, setConsts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.initialized */ .Oh.initialized) {
            _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.init */ .Oh.init((resolve, reject)=>{
                (0,_Worker_apis__WEBPACK_IMPORTED_MODULE_1__/* .fetchConst */ .oM)(i18n.language).then(resolve).catch(reject);
            });
        }
        _constants__WEBPACK_IMPORTED_MODULE_3__/* .FindTruman_Const.then */ .Oh.then((res)=>{
            setConsts(res);
        });
    }, []);
    const t = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((id, options = {})=>{
        var ref;
        var ref2;
        return renderString((ref2 = consts === null || consts === void 0 ? void 0 : (ref = consts.locales) === null || ref === void 0 ? void 0 : ref[id]) !== null && ref2 !== void 0 ? ref2 : '', options);
    }, [
        consts
    ]);
    return {
        consts,
        t
    };
}


/***/ }),

/***/ 74836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ./src/plugins/FindTruman/base.ts
var base = __webpack_require__(74167);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Skeleton/Skeleton.js + 1 modules
var Skeleton = __webpack_require__(56118);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/plugins/MaskPluginWrapper.tsx
var MaskPluginWrapper = __webpack_require__(41071);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/plugins/FindTruman/context.ts
var context = __webpack_require__(87468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Card/Card.js
var Card = __webpack_require__(42599);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(26995);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardContent/CardContent.js
var CardContent = __webpack_require__(73450);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTrumanCard.tsx



const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/CardMedia/CardMedia.js
var CardMedia = __webpack_require__(9790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(54648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Chip/Chip.js
var Chip = __webpack_require__(57277);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(2896);
// EXTERNAL MODULE: ./src/plugins/FindTruman/types.ts
var types = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/ResultCard.tsx
var ResultCard = __webpack_require__(95342);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/OptionsCard.tsx + 1 modules
var OptionsCard = __webpack_require__(96967);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(87170);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/Footer.tsx





const Footer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    const { const: consts  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { classes  } = Footer_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.footer,
        children: [
            consts && /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
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
                children: consts === null || consts === void 0 ? void 0 : consts.icons.map((e)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
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
    }));
};

// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/StageCard.tsx
var StageCard = __webpack_require__(84327);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(95162);
// EXTERNAL MODULE: ./src/plugins/FindTruman/Worker/apis/index.ts
var apis = __webpack_require__(69297);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(32637);
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
            left: '0',
            position: isFlipped ? 'relative' : 'absolute',
            top: '0',
            transform: flipDirection === 'horizontal' ? backRotateY : backRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedFrontToBack}s`,
            width: '100%',
            ...cardStyles === null || cardStyles === void 0 ? void 0 : cardStyles.back
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
            left: '0',
            position: isFlipped ? 'absolute' : 'relative',
            top: '0',
            transform: flipDirection === 'horizontal' ? frontRotateY : frontRotateX,
            transformStyle: 'preserve-3d',
            transition: `${flipSpeedBackToFront}s`,
            width: '100%',
            zIndex: '2',
            ...cardStyles === null || cardStyles === void 0 ? void 0 : cardStyles.front
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
    }));
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









const EncryptionCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
    const { address , t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent/* default */.Z, {
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
                                            var ref;
                                            setBackImgHeight(((ref = currentTarget.parentElement) === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0);
                                        },
                                        onClick: ({ currentTarget  })=>{
                                            var ref;
                                            setBackImgHeight(((ref = currentTarget.parentElement) === null || ref === void 0 ? void 0 : ref.offsetHeight) || 0);
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
    }));
};
function ClueConditionCard(props) {
    var ref;
    const { cardHeight , onClick , conditions  } = props;
    const { classes  } = EncryptionCard_useStyles();
    const { t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
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
                    children: (ref = conditions.conditions) === null || ref === void 0 ? void 0 : ref.map((condition, index)=>{
                        switch(condition.type){
                            case types/* ClueConditionType.Erc721 */.Ym.Erc721:
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
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
                                }, index));
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
    }));
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/FindTruman.tsx











const FindTruman_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            '--contentHeight': '400px',
            '--tabHeight': '35px',
            width: '100%',
            border: `solid 1px ${theme.palette.divider}`,
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
        }
    };
});
function getPostTypeTitle(t, postType) {
    switch(postType){
        case types/* PostType.Poll */.hQ.Poll:
            return t('plugin_find_truman_status_poll');
        case types/* PostType.Puzzle */.hQ.Puzzle:
            return t('plugin_find_truman_status_puzzle');
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
    const { address , t  } = (0,react.useContext)(context/* FindTrumanContext */.c);
    const { postType , clueId , storyInfo , userStoryStatus , userPuzzleStatus , userPollStatus , puzzleResult , pollResult , onSubmit ,  } = props;
    const [loadImg, setLoadImg] = (0,react.useState)(true);
    const isCritical = (userPuzzleStatus === null || userPuzzleStatus === void 0 ? void 0 : userPuzzleStatus.critical) || (userPollStatus === null || userPollStatus === void 0 ? void 0 : userPollStatus.critical);
    const isNoncritical = userPuzzleStatus && !userPuzzleStatus.critical || userPollStatus && !userPollStatus.critical;
    const renderCard = ()=>{
        if (postType === types/* PostType.Status */.hQ.Status) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StageCard/* default */.Z, {
                userStoryStatus: userStoryStatus
            }));
        } else if (postType === types/* PostType.Puzzle */.hQ.Puzzle && userPuzzleStatus) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                onSubmit: onSubmit,
                userStatus: userPuzzleStatus
            }));
        } else if (postType === types/* PostType.Poll */.hQ.Poll && userPollStatus) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsCard/* default */.Z, {
                onSubmit: onSubmit,
                userStatus: userPollStatus
            }));
        } else if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult && puzzleResult) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* default */.Z, {
                type: types/* PostType.PuzzleResult */.hQ.PuzzleResult,
                userStatus: userPuzzleStatus,
                result: puzzleResult
            }));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult && pollResult) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCard/* default */.Z, {
                type: types/* PostType.PollResult */.hQ.PollResult,
                userStatus: userPollStatus,
                result: pollResult
            }));
        }
        return null;
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
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
                        image: storyInfo === null || storyInfo === void 0 ? void 0 : storyInfo.img
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
            !address && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    padding: '0 16px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
                    severity: "info",
                    children: t('plugin_find_truman_connect_wallet_tip')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
        ]
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/getUnixTime/index.js
var getUnixTime = __webpack_require__(37919);
// EXTERNAL MODULE: ./src/plugins/FindTruman/SNSAdaptor/hooks/useConst.ts
var useConst = __webpack_require__(92997);
;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/PostInspector.tsx










function PostInspector(props) {
    const { url  } = props;
    const account = (0,useAccount/* useAccount */.m)().toLowerCase();
    const { consts , t  } = (0,useConst/* useConst */.B)();
    const [, , , _storyId, , _targetId] = new URL(url).hash.split('/');
    const storyId = _storyId ? _storyId : '';
    const targetId = _targetId ? _targetId : '';
    const postType = url.includes('/encryption?') ? types/* PostType.Encryption */.hQ.Encryption : url.includes('/puzzles/') ? types/* PostType.Puzzle */.hQ.Puzzle : url.includes('/polls/') ? types/* PostType.Poll */.hQ.Poll : url.includes('/puzzle_result') ? types/* PostType.PuzzleResult */.hQ.PuzzleResult : url.includes('/poll_result/') ? types/* PostType.PollResult */.hQ.PollResult : types/* PostType.Status */.hQ.Status;
    const [storyInfo, setStoryInfo] = (0,react.useState)();
    const [userStoryStatus, setUserStoryStatus] = (0,react.useState)();
    const [userPuzzleStatus, setUserPuzzleStatus] = (0,react.useState)();
    const [userPollStatus, setUserPollStatus] = (0,react.useState)();
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
        }
        if (postType === types/* PostType.PuzzleResult */.hQ.PuzzleResult) {
            setPuzzleResult(await (0,apis/* fetchPuzzleResult */.He)(targetId));
        } else if (postType === types/* PostType.PollResult */.hQ.PollResult) {
            setPollResult(await (0,apis/* fetchPollResult */.mf)(targetId));
        }
    };
    const handleSubmit = async (choice)=>{
        const from = account;
        const timestamp = (0,getUnixTime/* default */.Z)(Date.now());
        if (postType === types/* PostType.Puzzle */.hQ.Puzzle) {
            var ref;
            const target = (ref = userPuzzleStatus === null || userPuzzleStatus === void 0 ? void 0 : userPuzzleStatus.id) !== null && ref !== void 0 ? ref : '';
            await (0,apis/* submitPuzzle */.yR)(account, {
                target,
                from,
                timestamp,
                choice
            });
        } else if (postType === types/* PostType.Poll */.hQ.Poll) {
            var ref1;
            const target = (ref1 = userPollStatus === null || userPollStatus === void 0 ? void 0 : userPollStatus.id) !== null && ref1 !== void 0 ? ref1 : '';
            await (0,apis/* submitPoll */.LP)(account, {
                target,
                from,
                timestamp,
                choice
            });
        }
        await fetchData();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(context/* FindTrumanContext.Provider */.c.Provider, {
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
                puzzleResult: puzzleResult,
                pollResult: pollResult,
                postType: postType,
                onSubmit: handleSubmit
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/plugins/FindTruman/SNSAdaptor/index.tsx









const SNSAdaptor_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
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
        return /^#\/findtruman\/stories\/[\da-z]+(\/|\/(puzzle|poll)(s|_result)\/[\da-z]+\/?)?$/i.test(hash);
    }
    return false;
};
function Renderer({ url  }) {
    const { classes  } = SNSAdaptor_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MaskPluginWrapper/* default */.Z, {
        pluginName: "FindTruman",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
            fallback: Array.from({
                length: 2
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                    className: classes.skeleton,
                    animation: "wave",
                    variant: "rectangular",
                    width: i === 0 ? '80%' : '60%',
                    height: 15
                }, i)
            ),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostInspector, {
                url: url
            })
        })
    }));
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,shared_base_src/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,shared_base_src/* parseURL */.Lk)(x.val).find(isFindTrumanURL);
        }, [
            props.message
        ]);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    },
    PostInspector: function Component() {
        const links = plugin_infra_src/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks();
        const link = links.find(isFindTrumanURL);
        if (!link) return null;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        }));
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 69297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oM": () => (/* binding */ fetchConst),
/* harmony export */   "dr": () => (/* binding */ fetchStoryInfo),
/* harmony export */   "cz": () => (/* binding */ fetchUserStoryStatus),
/* harmony export */   "JJ": () => (/* binding */ fetchUserPuzzleStatus),
/* harmony export */   "K1": () => (/* binding */ fetchUserPollStatus),
/* harmony export */   "He": () => (/* binding */ fetchPuzzleResult),
/* harmony export */   "mf": () => (/* binding */ fetchPollResult),
/* harmony export */   "yR": () => (/* binding */ submitPuzzle),
/* harmony export */   "LP": () => (/* binding */ submitPoll),
/* harmony export */   "du": () => (/* binding */ fetchUserParticipatedStoryStatus),
/* harmony export */   "aE": () => (/* binding */ fetchClue),
/* harmony export */   "oJ": () => (/* binding */ fetchUserPoap),
/* harmony export */   "j9": () => (/* binding */ fetchMysteryBoxInfo),
/* harmony export */   "UN": () => (/* binding */ openMysteryBox),
/* harmony export */   "kc": () => (/* binding */ fetchUserPartsInfo),
/* harmony export */   "PN": () => (/* binding */ fetchExchangeStatus),
/* harmony export */   "pU": () => (/* binding */ fetchAllPollsOrPuzzles),
/* harmony export */   "v_": () => (/* binding */ exchangeFtgWhitelist)
/* harmony export */ });
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7294);



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
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/puzzles/submit', {
        method: 'POST',
        body: JSON.stringify({
            data,
            sig
        })
    });
}
async function submitPoll(address, data) {
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
    return request('/polls/submit', {
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
    const sig = await _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign(JSON.stringify(data), address);
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
function exchangeFtgWhitelist() {
    return request(urlcat__WEBPACK_IMPORTED_MODULE_0___default()('/assets/exchange_ftg_airdrop_whitelist', {}), {
        method: 'POST',
        body: JSON.stringify({})
    });
}


/***/ }),

/***/ 87468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ FindTrumanContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const FindTrumanContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 7294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hQ": () => (/* binding */ PostType),
/* harmony export */   "Ym": () => (/* binding */ ClueConditionType),
/* harmony export */   "pX": () => (/* binding */ PartType),
/* harmony export */   "$T": () => (/* binding */ FindTrumanRemoteError)
/* harmony export */ });
var PostType;
(function(PostType) {
    PostType["Status"] = 'result';
    PostType["Puzzle"] = 'puzzle';
    PostType["Poll"] = 'poll';
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

/***/ 41071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskPluginWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40675);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(40201);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80640);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29980);
/* harmony import */ var _resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8231);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76342);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13138);
/* harmony import */ var _components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38394);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76108);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55218);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        card: {
            margin: theme.spacing(2, 0),
            width: '100%',
            boxSizing: 'border-box',
            border: `1px solid ${theme.palette.secondaryDivider}`,
            cursor: 'default',
            ...(0,_social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_5__/* .isTwitter */ .L3)(_social_network__WEBPACK_IMPORTED_MODULE_2__.activatedSocialNetworkUI) ? {
                borderRadius: 15,
                overflow: 'hidden'
            } : null
        },
        header: {
            backgroundColor: 'transparent',
            color: theme.palette.text.primary,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(2)
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: theme.spacing(1.5)
        },
        action: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        body: {
            borderTop: `1px solid ${theme.palette.secondaryDivider}`,
            padding: theme.spacing(2)
        },
        button: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButtonText */ .ZN.twitterButtonText,
            '&,&:hover': {
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.twitterButton */ .ZN.twitterButton
            }
        }
    };
});
function MaskPluginWrapper(props) {
    const { classes  } = useStyles();
    const { pluginName , children , action , publisher  } = props;
    const personaConnectStatus = (0,_components_DataSource_usePersonaConnectStatus__WEBPACK_IMPORTED_MODULE_6__/* .usePersonaConnectStatus */ .x)();
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const name = !personaConnectStatus.hasPersona ? t('please_create_persona') : !personaConnectStatus.connected ? t('please_connect_persona') : pluginName;
    const actionButton = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!personaConnectStatus.action) return null;
        const button = personaConnectStatus.hasPersona ? t('connect_persona') : t('create_persona');
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            variant: "contained",
            className: classes.button,
            onClick: personaConnectStatus.action,
            children: button
        }));
    }, [
        personaConnectStatus,
        t
    ]);
    const publisherInfo = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        if (!publisher) return null;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    variant: "h6",
                    fontSize: "1.1rem",
                    fontWeight: "400",
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
                    children: "Provided by"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    href: publisher.link,
                    underline: "none",
                    target: "_blank",
                    rel: "noopener",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        variant: "h6",
                        fontSize: "1.1rem",
                        fontWeight: "400",
                        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
                        children: publisher.name.fallback
                    })
                })
            ]
        }));
    }, [
        publisher
    ]);
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.card,
        onClick: (ev)=>ev.stopPropagation()
        ,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.header,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_resources_MaskIcon__WEBPACK_IMPORTED_MODULE_3__/* .MaskIcon */ .ec, {
                        size: 45
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: classes.title,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: [
                                    "Mask Plugin ",
                                    !personaConnectStatus.connected && pluginName ? `(${pluginName})` : ''
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                variant: "h6",
                                fontSize: "1.1rem",
                                fontWeight: "400",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.action,
                        children: actionButton || action || publisherInfo
                    })
                ]
            }),
            personaConnectStatus.connected && children ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: classes.body,
                children: children
            }) : null
        ]
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            message: "Mask is loading this plugin..."
        }),
        children: inner
    }));
};


/***/ })

}]);