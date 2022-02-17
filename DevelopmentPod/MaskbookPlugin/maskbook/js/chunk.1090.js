"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1090],{

/***/ 25209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ DeleteIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const DeleteIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DeleteIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.334 1.334 0 011.334 1.334V4m2 0v9.333a1.334 1.334 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 59984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const EditIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('EditIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 17.596h7.5M13.75 3.846a1.768 1.768 0 012.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');


/***/ }),

/***/ 29205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ EnterDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60822);
/* harmony import */ var _hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4360);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76108);





const EnterDashboard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const onEnter = (0,_hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__/* .useEnterDashboard */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        style: {
            padding: '12px 16px',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            width: '100%',
            position: 'fixed',
            bottom: 0
        },
        onClick: onEnter,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            style: {
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 600
            },
            color: "primary",
            children: t('browser_action_enter_dashboard')
        })
    }));
});


/***/ }),

/***/ 21090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(94024);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(80126);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(30533);
// EXTERNAL MODULE: ../icons/general/Edit.tsx
var Edit = __webpack_require__(59984);
// EXTERNAL MODULE: ../icons/general/Delete.tsx
var Delete = __webpack_require__(25209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(42213);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/chevron-up.js
var chevron_up = __webpack_require__(39250);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/List/List.js
var List = __webpack_require__(1749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(40201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(18228);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(8267);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(5521);
;// CONCATENATED MODULE: ../icons/general/GrayMasks.tsx


const GrayMasks = (0,icons_utils/* createIcon */.I)('GrayMasks', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M0 10C0 4.477 4.477 0 10 0s10 4.477 10 10-4.477 10-10 10S0 15.523 0 10Z",
            fill: "#F7F9FA"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3.033",
            y: "10.905",
            width: "1.25",
            height: "6.25",
            rx: ".625",
            transform: "rotate(-30 3.033 10.905)",
            fill: "url(#gray_masks_a)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.362 10.787c-.808.258-1.682.122-2.475-.371a.361.361 0 0 0-.309-.037.371.371 0 0 0-.235.219c-.355.85-.997 1.47-1.804 1.729-1.293.412-2.76-.204-3.66-1.536a4.585 4.585 0 0 1-.57-1.174 5.638 5.638 0 0 1-.156-.62l-.138-.778.645.455a.478.478 0 0 0 .42.07.623.623 0 0 0 .111-.053l.163-.18.01-.02.022-.04a3.537 3.537 0 0 1 4.122-1.4 3.537 3.537 0 0 1 1.807-1.323 3.561 3.561 0 0 1 2.363.076l.04.02c.031.016.07.03.108.043l.01.005a.46.46 0 0 0 .268-.01.467.467 0 0 0 .303-.3l.254-.742.338.714c.098.198.17.396.233.596.135.423.206.858.216 1.287.053 1.602-.794 2.957-2.086 3.37ZM6.385 10.3c-.108.034-.22.053-.336.064-.631.04-1.218-.39-1.488-.626.194-.215.582-.593 1.066-.748a1.56 1.56 0 0 1 .336-.065c.631-.04 1.218.391 1.488.627-.202.217-.59.595-1.066.748ZM9.02 9.05c.283.063.826.144 1.303-.009a1.5 1.5 0 0 0 .31-.141c.53-.33.767-1.025.85-1.374-.282-.062-.825-.143-1.302.01a1.501 1.501 0 0 0-.31.141c-.531.33-.767 1.024-.85 1.373Z",
            fill: "url(#gray_masks_b)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#gray_masks_c)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "m11.691 7.184.136-.226 6.382 2.107-.027.262a7.5 7.5 0 0 1-.362 1.7c-.443 1.328-1.202 2.467-2.133 3.208-.696.552-1.447.841-2.16.841-.281 0-.552-.036-.814-.127-.94-.316-1.637-1.147-1.953-2.35-.307-1.148-.235-2.513.208-3.842.18-.56.425-1.084.723-1.573Zm.814 3.734c.135.063.28.09.443.09.144 0 .307-.027.479-.072.185-.062.333-.139.398-.172l.036-.018.18-.108-.099-.19c-.009-.027-.298-.579-.868-.832-.57-.253-1.175-.09-1.202-.081l-.208.054.045.208c.003.003.008.022.018.053.023.078.068.232.145.4.163.325.38.56.633.668Zm2.811.958a.91.91 0 0 0 .226.027c.217 0 .452-.063.678-.18.235-.118.389-.254.398-.263l.163-.144-.127-.172c-.018-.027-.407-.524-1.012-.66-.561-.125-1.083.098-1.179.139a.356.356 0 0 1-.015.006l-.19.09.082.199c0 .009.081.208.235.416.217.29.47.479.741.542Z",
                fill: "url(#gray_masks_d)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_a",
                    x1: "3.033",
                    y1: "17.155",
                    x2: "4.283",
                    y2: "17.155",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#AFC3E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C3D7F5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_b",
                    x1: "2.444",
                    y1: "12.774",
                    x2: "13.862",
                    y2: "11.699",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#AFC3E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C3D7F5"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "gray_masks_d",
                    x1: "10.573",
                    y1: "15.076",
                    x2: "18.209",
                    y2: "15.076",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#B0CFEB"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#C4E1FB"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "gray_masks_c",
                    x: "6.573",
                    y: "2.958",
                    width: "15.636",
                    height: "16.118",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 20 20');

;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/ProfileList/index.tsx












const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        list: {
            padding: '0 0 70px 0',
            height: 487,
            overflow: 'auto'
        },
        item: {
            padding: '14px 16px',
            marginBottom: 1,
            backgroundColor: '#ffffff',
            '& > svg': {
                fontSize: 20,
                marginRight: 15
            }
        },
        text: {
            fontWeight: 600,
            margin: 0
        },
        link: {
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: 12
        },
        avatarContainer: {
            marginRight: 15,
            position: 'relative'
        },
        avatar: {
            width: 20,
            height: 20
        },
        circle: {
            backgroundColor: '#ffffff',
            height: 10,
            width: 10,
            borderRadius: 5,
            position: 'absolute',
            bottom: -3,
            right: -3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > svg': {
                fontSize: 9,
                width: 9,
                height: 9
            }
        }
    })
);
const ProfileList = /*#__PURE__*/ (0,react.memo)(()=>{
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const definedSocialNetworks = (0,compact/* default */.Z)([
        ...social_network.definedSocialNetworkUIs.values()
    ].map(({ networkIdentifier  })=>{
        if (networkIdentifier === 'localhost') return null;
        return networkIdentifier;
    }));
    const [, onConnect] = (0,useAsyncFn/* default */.Z)(async (networkIdentifier)=>{
        if (currentPersona) {
            await service/* default.SocialNetwork.connectSocialNetwork */.ZP.SocialNetwork.connectSocialNetwork(currentPersona.identifier, networkIdentifier);
        }
    }, [
        currentPersona
    ]);
    const [, openProfilePage] = (0,useAsyncFn/* default */.Z)(async (network, userId)=>service/* default.SocialNetwork.openProfilePage */.ZP.SocialNetwork.openProfilePage(network, userId)
    , []);
    const [, onDisconnect] = (0,useAsyncFn/* default */.Z)(async (identifier)=>service/* default.Identity.detachProfile */.ZP.Identity.detachProfile(identifier)
    );
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileListUI, {
        networks: definedSocialNetworks,
        profiles: (ref = currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.linkedProfiles) !== null && ref !== void 0 ? ref : [],
        onConnect: onConnect,
        onDisconnect: onDisconnect,
        openProfilePage: openProfilePage
    }));
});
const ProfileListUI = /*#__PURE__*/ (0,react.memo)(({ networks , profiles , onConnect , onDisconnect , openProfilePage  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: [
            profiles.map(({ nickname , identifier , avatar  })=>{
                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.item,
                    secondaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        className: classes.link,
                        underline: "none",
                        onClick: ()=>onDisconnect(identifier)
                        ,
                        children: t('popups_persona_disconnect')
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.avatarContainer,
                            children: [
                                avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                                    src: avatar,
                                    className: classes.avatar
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.avatar,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GrayMasks, {
                                        className: classes.avatar
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.circle,
                                    children: shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[identifier.network]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            className: classes.text,
                            style: {
                                cursor: 'pointer'
                            },
                            onClick: ()=>openProfilePage(identifier.network, identifier.userId)
                            ,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                fontSize: 12,
                                fontWeight: 600,
                                children: [
                                    "@",
                                    identifier.userId
                                ]
                            })
                        })
                    ]
                }, identifier.toText()));
            }),
            networks.map((networkIdentifier)=>{
                return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.item,
                    style: {
                        cursor: 'pointer'
                    },
                    onClick: ()=>onConnect(networkIdentifier)
                    ,
                    children: [
                        shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            className: classes.text,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                fontSize: 12,
                                fontWeight: 600,
                                children: t('popups_persona_connect_to', {
                                    type: networkIdentifier
                                })
                            })
                        })
                    ]
                }, networkIdentifier));
            })
        ]
    }));
});

// EXTERNAL MODULE: ./src/extension/popups/components/EnterDashboard/index.tsx
var EnterDashboard = __webpack_require__(29205);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(18283);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/PersonaList/index.tsx










const PersonaList_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        list: {
            padding: 0,
            height: 'calc(100vh - 185px)',
            overflow: 'auto'
        },
        item: {
            padding: '14px 16px',
            marginBottom: 1,
            backgroundColor: '#ffffff',
            '& > svg': {
                fontSize: 20,
                marginRight: 15
            }
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginRight: '4px'
        },
        name: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14,
            color: '#1C68F3',
            fontWeight: 500
        },
        identifier: {
            fontSize: 12,
            color: '#1C68F3',
            display: 'flex',
            alignItems: 'center',
            wordBreak: 'break-all'
        },
        trashIcon: {
            fontSize: 12,
            stroke: '#1C68F3',
            marginLeft: 6,
            cursor: 'pointer'
        }
    })
);
const PersonaList = /*#__PURE__*/ (0,react.memo)(()=>{
    const { personas , setDeletingPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const history = (0,react_router/* useHistory */.k6)();
    const onLogout = (0,react.useCallback)((persona)=>{
        setDeletingPersona(persona);
        history.push(shared_base_src/* PopupRoutes.Logout */.mZ.Logout);
    }, [
        setDeletingPersona
    ]);
    const onChangeCurrentPersonas = (0,react.useCallback)((identifier)=>service/* default.Settings.setCurrentPersonaIdentifier */.ZP.Settings.setCurrentPersonaIdentifier(identifier)
    , []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaListUI, {
        personas: personas,
        onLogout: onLogout,
        onChangeCurrentPersona: onChangeCurrentPersonas
    }));
});
const PersonaListUI = /*#__PURE__*/ (0,react.memo)(({ personas , onLogout , onChangeCurrentPersona  })=>{
    const { classes  } = PersonaList_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: personas === null || personas === void 0 ? void 0 : personas.map((persona, index)=>{
            const { identifier , nickname  } = persona;
            var _compressedPoint;
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                className: classes.item,
                onClick: ()=>onChangeCurrentPersona(identifier)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.iconContainer,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                children: nickname
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.identifier,
                                children: [
                                    (0,shared_src/* formatFingerprint */.R)((_compressedPoint = identifier.compressedPoint) !== null && _compressedPoint !== void 0 ? _compressedPoint : '', 10),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* DeleteIcon */.p, {
                                        className: classes.trashIcon,
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            onLogout(persona);
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, index));
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/Home/index.tsx















const Home_useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        flex: 1,
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    header: {
        padding: '12px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EFF5FF'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '4px'
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    identifier: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center',
        wordBreak: 'break-all'
    },
    trashIcon: {
        fontSize: 16,
        stroke: '#1C68F3',
        marginLeft: 6,
        cursor: 'pointer'
    },
    chevronIcon: {
        width: 18,
        height: 18,
        color: '#1C68F3',
        cursor: 'pointer'
    },
    controller: {
        padding: 16,
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 20,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        padding: '10px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    editIcon: {
        fontSize: 16,
        stroke: '#1C68F3',
        fill: 'none',
        marginLeft: 10,
        cursor: 'pointer'
    }
});
const PersonaHome = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Home_useStyles();
    const [isExpand, setExpand] = (0,react.useState)(true);
    const { currentPersona , setDeletingPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const history = (0,react_router/* useHistory */.k6)();
    var _compressedPoint;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                style: {
                                    display: 'flex'
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.iconContainer,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {})
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.name,
                                                children: [
                                                    currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.nickname,
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Edit/* EditIcon */.d, {
                                                        className: classes.editIcon,
                                                        onClick: ()=>history.push(shared_base_src/* PopupRoutes.PersonaRename */.mZ.PersonaRename)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                className: classes.identifier,
                                                children: [
                                                    (0,shared_src/* formatFingerprint */.R)((_compressedPoint = currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier.compressedPoint) !== null && _compressedPoint !== void 0 ? _compressedPoint : '', 10),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Delete/* DeleteIcon */.p, {
                                                        className: classes.trashIcon,
                                                        onClick: ()=>{
                                                            setDeletingPersona(currentPersona);
                                                            history.push(shared_base_src/* PopupRoutes.Logout */.mZ.Logout);
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                onClick: ()=>setExpand((pre)=>!pre
                                    )
                                ,
                                children: isExpand ? /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                                    className: classes.chevronIcon
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_up/* default */.Z, {
                                    className: classes.chevronIcon
                                })
                            })
                        ]
                    }),
                    isExpand ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileList, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaList, {})
                ]
            }),
            isExpand ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterDashboard/* EnterDashboard */.P, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>{
                            browser.tabs.create({
                                active: true,
                                url: browser.runtime.getURL('/dashboard.html#/sign-up')
                            });
                        },
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        children: t('create')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        onClick: ()=>{
                            browser.tabs.create({
                                active: true,
                                url: browser.runtime.getURL(dist_default()('/dashboard.html#/sign-in', {
                                    from: 'popups'
                                }))
                            });
                        },
                        children: t('import')
                    })
                ]
            })
        ]
    }));
});
/* harmony default export */ const Home = (PersonaHome);


/***/ })

}]);