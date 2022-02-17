"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2916],{

/***/ 2908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dr": () => (/* binding */ ABOUT_DIALOG_BACKGROUND),
/* harmony export */   "am": () => (/* binding */ PoolTogetherURL),
/* harmony export */   "SV": () => (/* binding */ SetupTutorialURL),
/* harmony export */   "wL": () => (/* binding */ WatermarkURL)
/* harmony export */ });
/* unused harmony export MaskBlueURL */
/**
 * Manage local static resource
 */ const ABOUT_DIALOG_BACKGROUND = new URL(/* asset import */ __webpack_require__(48737), __webpack_require__.b);
const PoolTogetherURL = new URL(/* asset import */ __webpack_require__(56997), __webpack_require__.b);
const SetupTutorialURL = new URL(/* asset import */ __webpack_require__(65564), __webpack_require__.b);
const WatermarkURL = new URL(/* asset import */ __webpack_require__(33885), __webpack_require__.b);
const MaskBlueURL = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));


/***/ }),

/***/ 1365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ ContentContainer)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40299);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14767);


const ContentContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>({
        flex: 1,
        borderRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: _masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .MaskColorVar.primaryBackground */ .ZN.primaryBackground
    })
);


/***/ }),

/***/ 98427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ PageFrame)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Grid/Grid.js + 1 modules
var Grid = __webpack_require__(44939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(98174);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Drawer/Drawer.js
var Drawer = __webpack_require__(2178);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Paper/paperClasses.js
var paperClasses = __webpack_require__(1233);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(28527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/AppBar/AppBar.js
var AppBar = __webpack_require__(26595);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Toolbar/Toolbar.js
var Toolbar = __webpack_require__(87844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(77395);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.2.5_695e98f08a2d125282e19cae338368d2/node_modules/@mui/icons-material/esm/Menu.js
var Menu = __webpack_require__(26098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.0/node_modules/color/index.js
var color = __webpack_require__(91102);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/context.ts
var context = __webpack_require__(67264);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/Navigation.tsx + 7 modules
var Navigation = __webpack_require__(27247);
// EXTERNAL MODULE: ../icons/brands/MaskBanner.tsx
var MaskBanner = __webpack_require__(58329);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(13557);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(18286);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(11496);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
;// CONCATENATED MODULE: ../dashboard/src/components/PageFrame/FeaturePromotions/index.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            padding: theme.spacing(3.125),
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: theme.spacing(2)
            },
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        img: {
            fill: 'none',
            width: 250,
            height: 140,
            cursor: 'pointer'
        }
    })
);
const TWITTER_NETWORK = 'twitter.com';
const TWITTER_ADDRESS = 'https://www.twitter.com';
const FeaturePromotions = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,useAccount/* useAccount */.m)();
    const { currentPersona , connectPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { setDialog: setBuyDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const isConnectedTwitter = (0,react.useMemo)(()=>{
        if (!currentPersona) return false;
        const { linkedProfiles  } = currentPersona;
        if (linkedProfiles.length === 0) return false;
        return !!linkedProfiles.find((profile)=>profile.identifier.network === TWITTER_NETWORK
        );
    }, [
        currentPersona
    ]);
    const openTransakDialog = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            address: account !== null && account !== void 0 ? account : ''
        });
    }, []);
    const openTwitter = (pluginId)=>async ()=>{
            if (!currentPersona) {
                navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp);
                return;
            }
            if (isConnectedTwitter) {
                await API/* Services.SocialNetwork.openSNSAndActivatePlugin */.K9.SocialNetwork.openSNSAndActivatePlugin(`${TWITTER_ADDRESS}/home`, pluginId);
                return;
            }
            connectPersona(currentPersona.identifier, TWITTER_NETWORK);
        }
    ;
    const openMaskNetwork = ()=>window.open(`${TWITTER_ADDRESS}/realMaskNetwork`)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTwitter(plugin_infra_src/* PluginId.RedPacket */.je.RedPacket),
                src: new URL(/* asset import */ __webpack_require__(36242), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTransakDialog,
                src: new URL(/* asset import */ __webpack_require__(83754), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: openMaskNetwork,
                className: classes.img,
                src: new URL(/* asset import */ __webpack_require__(97351), __webpack_require__.b).toString(),
                style: {
                    height: 80
                }
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/NavigationVersionFooter/index.tsx
var NavigationVersionFooter = __webpack_require__(59700);
;// CONCATENATED MODULE: ../dashboard/src/components/PageFrame/index.tsx














const featurePromotionsEnabled = [
    shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets,
    shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer,
    shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory, 
];
const MaskLogo = (0,styled/* default */.ZP)(Grid/* default */.ZP)`
    flex-basis: 212px;
    max-width: 212px;
    & > svg {
        flex: 1;
    }
`;
const MenuButton = (0,styled/* default */.ZP)(IconButton/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5)
    })
);
const PageTitle = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        minHeight: 40,
        alignItems: 'center',
        paddingLeft: theme.spacing(4.25),
        '& > h6': {
            fontSize: '1.5rem'
        },
        [theme.breakpoints.down('lg')]: {
            flex: 1
        }
    })
);
const Containment = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        maxWidth: '100%',
        display: 'flex',
        height: 'calc(100vh - 64px)',
        overflow: 'hidden'
    })
);
const NavigationDrawer = (0,styled/* default */.ZP)(Drawer/* default */.ZP)(({ theme  })=>({
        top: `${theme.mixins.toolbar.minHeight}px !important`,
        // https://github.com/mui-org/material-ui/issues/20012#issuecomment-770654893
        [`& > .${paperClasses/* default.root */.Z.root}`]: {
            width: 232,
            top: theme.mixins.toolbar.minHeight,
            paddingTop: '28px',
            background: new (color_default())(theme.palette.background.paper).alpha(0.8).toString(),
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: `calc( 22px + ${theme.mixins.toolbar.minHeight}px)`
        }
    })
);
const ShapeHelper = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        padding: theme.spacing(3),
        paddingBottom: 0,
        borderTopLeftRadius: Number(theme.shape.borderRadius) * 5,
        borderTopRightRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: theme.palette.mode === 'dark' ? '#1B1E38' : src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'auto'
    })
);
const ContentContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: 'transparent',
        minHeight: '100%',
        position: 'relative',
        '&:after': {
            content: '""',
            display: 'block',
            paddingTop: theme.spacing(3)
        }
    })
);
const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        toolbarGutters: {
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            [theme.breakpoints.up('lg')]: {
                paddingLeft: theme.spacing(0)
            },
            [theme.breakpoints.down('lg')]: {
                paddingLeft: theme.spacing(1)
            }
        },
        shapeContainerWithBackground: {
            backgroundColor: theme.palette.background.paper
        }
    })
);
const PageFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const location = (0,react_router/* useLocation */.TH)();
    const left = typeof props.title === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "h6",
        children: props.title
    }) : props.title;
    const right = props.primaryAction;
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const { drawerOpen , toggleDrawer  } = (0,react.useContext)(context/* DashboardContext */.G);
    const showFeaturePromotions = featurePromotionsEnabled.some((path)=>path === location.pathname
    );
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    const { classes  } = useStyle();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* default */.Z, {
                position: "relative",
                color: "inherit",
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar/* default */.Z, {
                    classes: {
                        gutters: classes.toolbarGutters
                    },
                    children: [
                        !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(MaskLogo, {
                            item: true,
                            container: true,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuButton, {
                                    size: "large",
                                    onClick: toggleDrawer,
                                    children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.Z, {})
                                }),
                                mode === 'dark' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBanner/* MaskBannerIcon */.i, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageTitle, {
                            item: true,
                            xs: isLargeScreen ? 12 : 10,
                            container: true,
                            children: [
                                left,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    }
                                }),
                                right
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containment, {
                children: [
                    !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(NavigationDrawer, {
                        open: drawerOpen,
                        onClose: toggleDrawer,
                        ModalProps: {
                            BackdropProps: {
                                sx: {
                                    background: 'transparent'
                                }
                            }
                        },
                        transitionDuration: 300,
                        variant: "temporary",
                        elevation: 0,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation/* Navigation */.W, {
                                onClose: toggleDrawer
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationVersionFooter/* NavigationVersionFooter */.h, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShapeHelper, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ErrorBoundary */.SV, {
                                children: props.children
                            })
                        })
                    }),
                    showFeaturePromotions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturePromotions, {}) : null
                ]
            })
        ]
    }));
});


/***/ }),

/***/ 12916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Plugins)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box_Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../dashboard/src/components/PageFrame/index.tsx + 1 modules
var PageFrame = __webpack_require__(98427);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(5521);
;// CONCATENATED MODULE: ../icons/general/Tutorial.tsx


const TutorialIcon = (0,utils/* createIcon */.I)('TutorialIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M18.227 10.117v-2.44c.27-.285.284-.57.27-.732-.067-.637-.772-.895-1.002-.99-1.681-.636-4.799-1.897-6.52-2.602-1.044-.515-1.382-.42-2.399-.013-.271.108-4.758 1.775-6.492 2.494-.95.393-1.085.976-1.085 1.3 0 .543.38 1.03 1.071 1.316l2.074.84v5.449l.176.176c.081.081 1.938 1.952 5.34 1.952 3.186 0 5.002-1.884 5.083-1.966l.163-.176v-5.38l.772-.326-.027 1.111-.623 1.044 1.884 1.79 2.087-1.817-.772-1.03Zm-4.541 4.12A6.337 6.337 0 0 1 9.66 15.66c-2.358 0-3.808-1.03-4.296-1.423V9.791l3.063 1.247h.013c.976.366 1.722.34 2.657-.067l2.589-1.098v4.364Zm3.267-2.928-.38-.352.285-.474.054-2.169c.095-.298-.014-.542-.176-.678a.632.632 0 0 0-.773-.054L10.61 9.846c-.637.284-1.057.298-1.735.054l-6.33-2.575c-.162-.068-.257-.136-.298-.19.04-.04.136-.109.312-.19 1.735-.718 6.411-2.467 6.465-2.48h.014c.813-.326.813-.326 1.423-.014l.04.014c1.709.69 4.799 1.951 6.507 2.602v3.456l.339.448-.393.338Z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(49965);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(12976);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(56970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItem/ListItem.js
var ListItem = __webpack_require__(26605);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js
var ListItemAvatar = __webpack_require__(3279);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Avatar/Avatar.js + 1 modules
var Avatar = __webpack_require__(71288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Switch/Switch.js
var Switch = __webpack_require__(37295);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Switch/switchClasses.js
var switchClasses = __webpack_require__(53647);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingSwitch.tsx

/* harmony default export */ const SettingSwitch = ((0,styled/* default */.ZP)(Switch/* default */.Z)(({ size  })=>{
    const isSmall = size === 'small';
    const base = isSmall ? 16 : 24;
    return {
        [`&.${switchClasses/* default.root */.Z.root}`]: {
            width: base * 3,
            height: base * 2,
            padding: isSmall ? 8 : 12
        },
        [`& .${switchClasses/* default.thumb */.Z.thumb}`]: {
            width: base,
            height: base
        },
        [`& .${switchClasses/* default.checked */.Z.checked}`]: {
            [`&.${switchClasses/* default.switchBase */.Z.switchBase}`]: {
                transform: `translateX(${isSmall ? 20 : 28}px)`
            },
            [`&+.${switchClasses/* default.track */.Z.track}`]: {
                opacity: '0.1 !important'
            }
        },
        [`& .${switchClasses/* default.track */.Z.track}`]: {
            borderRadius: base / 2
        },
        [`& .${switchClasses/* default.switchBase */.Z.switchBase}`]: {
            top: isSmall ? 4 : 3,
            transform: `translateX(${isSmall ? 4 : 2}px)`
        }
    };
}));

;// CONCATENATED MODULE: ../icons/general/Twitter.tsx


const TwitterIcon = (0,utils/* createIcon */.I)('TwitterIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M13.3303 4.45862C13.9279 4.10134 14.375 3.53878 14.5883 2.87595C14.0267 3.20915 13.4123 3.44387 12.7716 3.56995C11.8833 2.6303 10.4759 2.40164 9.33585 3.01172C8.19578 3.62181 7.60526 4.91961 7.89425 6.17995C5.59399 6.06447 3.4509 4.9779 1.99825 3.19062C1.24015 4.49823 1.62756 6.16981 2.88359 7.01062C2.42939 6.99602 1.98527 6.87304 1.58825 6.65195C1.58825 6.66395 1.58825 6.67595 1.58825 6.68795C1.58852 8.05005 2.5485 9.22334 3.88359 9.49328C3.4623 9.6079 3.02039 9.62478 2.59159 9.54262C2.96705 10.7075 4.04062 11.5055 5.26425 11.5293C4.25081 12.3247 2.99924 12.7561 1.71092 12.754C1.48257 12.7543 1.25439 12.7411 1.02759 12.7146C2.33585 13.5553 3.8585 14.0015 5.41359 14C7.57709 14.0148 9.65627 13.1619 11.1861 11.632C12.7159 10.102 13.5686 8.02278 13.5536 5.85928C13.5536 5.73528 13.5507 5.61195 13.5449 5.48928C14.1052 5.08435 14.5888 4.58272 14.9729 4.00795C14.4509 4.23933 13.8972 4.39123 13.3303 4.45862Z",
        fill: "white"
    })
}), '0 0 16 16');

;// CONCATENATED MODULE: ../icons/general/Facebook.tsx


const FacebookIcon = (0,utils/* createIcon */.I)('FacebookIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M1.3349 8.00132C1.33568 11.2809 3.7205 14.0733 6.95957 14.5873V9.92799H5.26823V8.00132H6.96157V6.53466C6.88587 5.83968 7.12325 5.14705 7.60933 4.64461C8.09541 4.14217 8.7798 3.882 9.4769 3.93466C9.97726 3.94274 10.4764 3.9873 10.9702 4.06799V5.70732H10.1276C9.83746 5.66933 9.5458 5.76514 9.33475 5.96777C9.12369 6.1704 9.01608 6.45791 9.04223 6.74932V8.00132H10.8896L10.5942 9.92865H9.04223V14.5873C12.5452 14.0337 15.0016 10.8345 14.6319 7.30737C14.2622 3.78023 11.1958 1.15994 7.65412 1.34477C4.11247 1.52961 1.33546 4.45486 1.3349 8.00132Z",
        fill: "white"
    })
}), '0 0 16 16');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/buttonClasses.js
var buttonClasses = __webpack_require__(66425);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/Actions.tsx




const StyledButton = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        height: '26px',
        borderRadius: '15px',
        fontWeight: 500,
        marginRight: theme.spacing(0.5),
        [`& .${buttonClasses/* default.startIcon */.Z.startIcon}`]: {
            marginRight: theme.spacing(0.5)
        }
    })
);
function Twitter({ onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterIcon, {}),
        sx: {
            bgcolor: src/* MaskColorVar.twitter */.ZN.twitter
        },
        onClick: onClick,
        children: "Twitter"
    }));
}
function Facebook({ onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FacebookIcon, {}),
        sx: {
            bgcolor: src/* MaskColorVar.facebook */.ZN.facebook
        },
        onClick: onClick,
        children: "Facebook"
    }));
}
function Explore({ onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
        onClick: onClick,
        children: "Explore"
    }));
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/PluginItem.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        empty: {
            margin: theme.spacing(1)
        },
        root: {
            background: src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
            borderRadius: 16,
            minWidth: 355,
            minHeight: 158,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 0
        },
        avatar: {
            background: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            width: '44px',
            height: '44px',
            '> *': {
                width: 28,
                height: 28
            }
        },
        settings: {
            alignSelf: 'flex-start',
            paddingTop: theme.spacing(1),
            marginLeft: theme.spacing(1),
            cursor: 'pointer',
            color: src/* MaskColorVar.textSecondary */.ZN.textSecondary
        },
        actions: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: theme.spacing(1)
        }
    })
);
const TextWrapper = (0,styled/* default */.ZP)(ListItemText/* default */.Z)(({ theme  })=>({
        [`& .${listItemTextClasses/* default.secondary */.Z.secondary}`]: {
            paddingTop: theme.spacing(1),
            color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            fontSize: 12
        }
    })
);
function PluginItemPlaceholder() {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ _jsx(Box, {
        className: classes.empty
    }));
}
function PluginItem(props) {
    const { id , title , desc , icon , enabled =false , hideSwitch , onSwitch , onTwitter , onFacebook , onExplore , onSetting , onTutorial ,  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemAvatar/* default */.Z, {
                        sx: {
                            alignSelf: 'flex-start',
                            paddingTop: 1
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            className: classes.avatar,
                            children: icon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextWrapper, {
                        primary: title,
                        secondary: desc
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                        className: classes.settings,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TutorialIcon, {
                            onClick: ()=>onTutorial(id)
                        })
                    }),
                    onSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                        className: classes.settings,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                            onClick: ()=>onSetting(id)
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                className: classes.actions,
                children: [
                    enabled ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                        sx: {
                            flex: 1
                        },
                        children: [
                            onTwitter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Twitter, {
                                onClick: ()=>onTwitter(id)
                            }) : null,
                            onFacebook ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Facebook, {
                                onClick: ()=>onFacebook(id)
                            }) : null,
                            onExplore ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Explore, {
                                onClick: ()=>onExplore(id)
                            }) : null
                        ]
                    }) : null,
                    !hideSwitch ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingSwitch, {
                        size: "small",
                        checked: enabled,
                        onChange: (event)=>onSwitch(id, event.target.checked)
                    }) : null
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../icons/plugins/MaskBox.tsx


const MaskBoxIcon = (0,utils/* createIcon */.I)('MaskBoxIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2337B4",
            d: "m13.678 0 12.123 6.999-12.122 6.999L1.556 6.999z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FF9607",
            d: "m12.468 13.302 1.212.7v2.8l-1.212-.7zM12.468 9.102l1.212.7v2.8l-1.212-.7zM13.68 7.002l1.213.7v1.4l-1.213-.7zM8.831 5.602l1.223.706v4.2L8.83 9.802zM10.04 3.503l1.212.7v1.4l-1.212-.7zM14.893 2.103l1.212.7v4.2l-1.212-.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FFD5BE",
            d: "m13.68 12.602 1.213.7-1.213.7-1.212-.7zM14.893 11.902l1.212.7-1.212.7-1.213-.7zM13.68 8.402l1.213.7-1.213.7-1.212-.7zM14.893 6.303l1.212.7-1.212.7-1.213-.7zM10.04 4.903l1.212.7-1.212.7-1.212-.7zM16.105.003l1.226.708-6.061 3.5-1.227-.708z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#FFD5BE",
            d: "m17.317.703 1.213.7-1.213.7-1.212-.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m12.465 3.5-1.213.7v1.399l1.213-.7V3.5Zm4.849-1.4 1.212-.7v5.599l-1.212.7-1.212.7v2.8l-1.213.7-1.212.7v-2.8l1.212-.7v-1.4l1.213-.7V2.799l-1.213.7-1.212.7-1.212.7V3.5l1.212-.7 1.212-.7 1.213-.7 1.212-.7v1.4Zm-4.85 2.8L10.04 6.298v4.2l2.425-1.4v-4.2Zm2.425 11.198-1.212.7v-2.8l1.212-.7 1.213-.7v2.8l-1.213.7Z",
            fill: "#FF5900"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0057FF",
            d: "M13.678 13.998 25.801 7v13.997l-12.122 7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#367BFF",
            d: "m1.556 7.002 12.122 7v13.997L1.556 21z"
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/SwapService.tsx


const SwapServiceIcon = (0,utils/* createIcon */.I)('SwapService', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "14",
            cy: "14",
            r: "14",
            fill: "#FFB915",
            fillOpacity: ".15"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0)",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M17.241 6.87l2.593 2.593-2.593 2.592"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M8.167 13.351v-1.296a2.593 2.593 0 012.592-2.592h9.075M10.76 21.13l-2.593-2.593 2.592-2.593"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M19.834 14.648v1.296a2.593 2.593 0 01-2.593 2.593H8.167"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    transform: "translate(6.222 6.222)",
                    d: "M0 0h15.556v15.556H0z"
                })
            })
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Transak.tsx


const TransakIcon = (0,utils/* createIcon */.I)('Transak', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".6",
            d: "M7.363 22.32a1.75 1.75 0 0 1-1.75-1.75v-9.718c0-.966.784-1.75 1.75-1.75h16.57c.967 0 1.75.784 1.75 1.75v9.717a1.75 1.75 0 0 1-1.75 1.75H7.363Z",
            fill: "#FF7C0E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".6",
            d: "M20.637 5.68c.966 0 1.75.784 1.75 1.75v9.718a1.75 1.75 0 0 1-1.75 1.75H4.067a1.75 1.75 0 0 1-1.75-1.75V7.43c0-.967.783-1.75 1.75-1.75h16.57Z",
            fill: "#FF7C0E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.317 8.133h20.07v2.654H2.317V8.133Z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "18.425",
            cy: "16.095",
            r: "1.3",
            fill: "#FF601C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "19.724",
            cy: "16.095",
            r: "1.3",
            fill: "#FF7C0E"
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Collectibles.tsx


const CollectiblesIcon = (0,utils/* createIcon */.I)('Collectibles', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M13.4 25.2a.933.933 0 101.867 0 .933.933 0 00-1.867 0z",
                fill: "#fff"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M13.4 2.8a.933.933 0 101.867 0 .933.933 0 00-1.867 0z",
                fill: "#fff"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 26.25h-1.75V28h1.75v-1.75z",
            fill: "#291E20"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 26.25h-1.75V28h1.75v-1.75z",
            fill: "#120306"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 26.25h-1.75V28h1.75v-1.75z",
            fill: "#1A1115"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 26.25h-1.75V28h1.75v-1.75z",
            fill: "#1E1115"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 26.25h-1.75V28h1.75v-1.75z",
            fill: "#1B1417"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 26.25h-1.75V28h1.75v-1.75z",
            fill: "#151014"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 26.25h-1.75V28h1.75v-1.75z",
            fill: "#1D1018"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 26.25h-1.75V28h1.75v-1.75z",
            fill: "#131117"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 26.25h-1.75V28h1.75v-1.75z",
            fill: "#1B1419"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 26.25h-1.75V28h1.75v-1.75z",
            fill: "#200B10"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 26.25h-1.75V28h1.75v-1.75z",
            fill: "#2D2529"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#1F1114"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#120709"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#0F0407"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#0D020B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#130408"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#280B10"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#12060B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#562311"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#512111"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#0B070F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 24.5h-1.75v1.75h1.75V24.5z",
            fill: "#211618"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#1B1314"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#080308"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#1D0709"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#491C0B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#562207"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#AF4900"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#CD5F00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#BB5A00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#552812"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#02000B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 22.75h-1.75v1.75h1.75v-1.75z",
            fill: "#21161A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 21h-1.75v1.75h1.75V21z",
            fill: "#171112"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 21h-1.75v1.75h1.75V21z",
            fill: "#0E0508"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 21h-1.75v1.75h1.75V21z",
            fill: "#1A0A0B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 21h-1.75v1.75h1.75V21z",
            fill: "#34140B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 21h-1.75v1.75h1.75V21z",
            fill: "#270D04"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 21h-1.75v1.75h1.75V21z",
            fill: "#582902"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 21h-1.75v1.75h1.75V21z",
            fill: "#E97800"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 21h-1.75v1.75h1.75V21z",
            fill: "#ED8900"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 21h-1.75v1.75h1.75V21z",
            fill: "#5B3311"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 21h-1.75v1.75h1.75V21z",
            fill: "#2E1711"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 21h-1.75v1.75h1.75V21z",
            fill: "#21171D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 19.25h-1.75V21h1.75v-1.75z",
            fill: "#1D1614"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 19.25h-1.75V21h1.75v-1.75z",
            fill: "#14090A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 19.25h-1.75V21h1.75v-1.75z",
            fill: "#150706"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 19.25h-1.75V21h1.75v-1.75z",
            fill: "#090009"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 19.25h-1.75V21h1.75v-1.75z",
            fill: "#030106"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 19.25h-1.75V21h1.75v-1.75z",
            fill: "#000005"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 19.25h-1.75V21h1.75v-1.75z",
            fill: "#0D0808"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 19.25h-1.75V21h1.75v-1.75z",
            fill: "#462B10"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 19.25h-1.75V21h1.75v-1.75z",
            fill: "#5C310C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 19.25h-1.75V21h1.75v-1.75z",
            fill: "#401D0D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 19.25h-1.75V21h1.75v-1.75z",
            fill: "#1C1118"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#2C1B19"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#0F0607"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#1A0908"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#1F0F08"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#0E0503"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#11050A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#0A060A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#000105"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#10070C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#2C1C0B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 17.5h-1.75v1.75h1.75V17.5z",
            fill: "#4F361D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#351312"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#150407"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#331910"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#331A14"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#00000A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#230A04"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#26080B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#1A110F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#08010C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#763305"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 15.75h-1.75v1.75h1.75v-1.75z",
            fill: "#82431E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 14h-1.75v1.75h1.75V14z",
            fill: "#592613"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 14h-1.75v1.75h1.75V14z",
            fill: "#0D0106"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 14h-1.75v1.75h1.75V14z",
            fill: "#190C0B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 14h-1.75v1.75h1.75V14z",
            fill: "#3B180C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 14h-1.75v1.75h1.75V14z",
            fill: "#7E4B08"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 14h-1.75v1.75h1.75V14z",
            fill: "#EBAB00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 14h-1.75v1.75h1.75V14z",
            fill: "#E39B00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 14h-1.75v1.75h1.75V14z",
            fill: "#5D320C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 14h-1.75v1.75h1.75V14z",
            fill: "#22110E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 14h-1.75v1.75h1.75V14z",
            fill: "#8C4300"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 14h-1.75v1.75h1.75V14z",
            fill: "#6A2C1E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 12.25h-1.75V14h1.75v-1.75z",
            fill: "#785606"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 12.25h-1.75V14h1.75v-1.75z",
            fill: "#664500"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 12.25h-1.75V14h1.75v-1.75z",
            fill: "#2E170C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 12.25h-1.75V14h1.75v-1.75z",
            fill: "#4F0F04"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 12.25h-1.75V14h1.75v-1.75z",
            fill: "#E08600"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 12.25h-1.75V14h1.75v-1.75z",
            fill: "#FF0"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 12.25h-1.75V14h1.75v-1.75z",
            fill: "#FFD500"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 12.25h-1.75V14h1.75v-1.75z",
            fill: "#3F1105"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 12.25h-1.75V14h1.75v-1.75z",
            fill: "#271203"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 12.25h-1.75V14h1.75v-1.75z",
            fill: "#785500"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 12.25h-1.75V14h1.75v-1.75z",
            fill: "#51341C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#4F3A11"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#826100"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#2F270E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#0E0007"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#904400"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#C16F00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#341206"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#140E0F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#4D401E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#4C3D1B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 10.5h-1.75v1.75h1.75V10.5z",
            fill: "#3B3524"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#2B2616"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#252411"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#382E14"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#1B0D0D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#12000B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#632204"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#451606"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#321E13"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#4F4726"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#312F1D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 8.75h-1.75v1.75h1.75V8.75z",
            fill: "#2A281E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 7h-1.75v1.75h1.75V7z",
            fill: "#625617"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 7h-1.75v1.75h1.75V7z",
            fill: "#645F16"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 7h-1.75v1.75h1.75V7z",
            fill: "#333417"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 7h-1.75v1.75h1.75V7z",
            fill: "#0B010A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 7h-1.75v1.75h1.75V7z",
            fill: "#41160C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 7h-1.75v1.75h1.75V7z",
            fill: "#E67E00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 7h-1.75v1.75h1.75V7z",
            fill: "#D47100"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 7h-1.75v1.75h1.75V7z",
            fill: "#33190B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 7h-1.75v1.75h1.75V7z",
            fill: "#21200E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 7h-1.75v1.75h1.75V7z",
            fill: "#433916"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 7h-1.75v1.75h1.75V7z",
            fill: "#3B3B23"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 5.25h-1.75V7h1.75V5.25z",
            fill: "#C29F09"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 5.25h-1.75V7h1.75V5.25z",
            fill: "#D3B00E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 5.25h-1.75V7h1.75V5.25z",
            fill: "#83711D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 5.25h-1.75V7h1.75V5.25z",
            fill: "#110A0A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 5.25h-1.75V7h1.75V5.25z",
            fill: "#461400"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 5.25h-1.75V7h1.75V5.25z",
            fill: "#FFA000"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 5.25h-1.75V7h1.75V5.25z",
            fill: "#D17C00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 5.25h-1.75V7h1.75V5.25z",
            fill: "#8A5D1B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 5.25h-1.75V7h1.75V5.25z",
            fill: "#B6972C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 5.25h-1.75V7h1.75V5.25z",
            fill: "#93761D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 5.25h-1.75V7h1.75V5.25z",
            fill: "#7C6729"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#BD980B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#D2A918"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#E2B92B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#7C631C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#020000"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#B66100"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#D68900"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#B38825"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#F4C32E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#E2B737"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 3.5h-1.75v1.75h1.75V3.5z",
            fill: "#C29F36"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#AB851C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#B28D23"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#B78D28"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#C79C25"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#735616"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#59250C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#996A16"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#BB951A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#B48A20"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#BF9727"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 1.75h-1.75V3.5h1.75V1.75z",
            fill: "#B09439"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M24.833 0h-1.75v1.75h1.75V0z",
            fill: "#8D8239"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M23.083 0h-1.75v1.75h1.75V0z",
            fill: "#8A7725"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.333 0h-1.75v1.75h1.75V0z",
            fill: "#8F732B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.583 0h-1.75v1.75h1.75V0z",
            fill: "#977C2D"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.833 0h-1.75v1.75h1.75V0z",
            fill: "#AA9530"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 0h-1.75v1.75h1.75V0z",
            fill: "#978F38"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 0h-1.75v1.75h1.75V0z",
            fill: "#8F8533"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.583 0h-1.75v1.75h1.75V0z",
            fill: "#887527"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.833 0h-1.75v1.75h1.75V0z",
            fill: "#8F792B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.083 0h-1.75v1.75h1.75V0z",
            fill: "#987C28"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.333 0h-1.75v1.75h1.75V0z",
            fill: "#93813A"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.583 0h-1.75v1.75h1.75V0zM5.583 1.75h-1.75V3.5h1.75V1.75zM5.583 3.5h-1.75v1.75h1.75V3.5zM5.583 5.25h-1.75V7h1.75V5.25zM5.583 7h-1.75v1.75h1.75V7zM5.583 8.75h-1.75v1.75h1.75V8.75zM5.583 10.5h-1.75v1.75h1.75V10.5zM5.583 12.25h-1.75V14h1.75v-1.75zM5.583 14h-1.75v1.75h1.75V14zM5.583 15.75h-1.75v1.75h1.75v-1.75zM5.583 17.5h-1.75v1.75h1.75V17.5zM5.583 19.25h-1.75V21h1.75v-1.75zM5.583 21h-1.75v1.75h1.75V21zM5.583 22.75h-1.75v1.75h1.75v-1.75zM5.583 24.5h-1.75v1.75h1.75V24.5zM5.583 26.25h-1.75V28h1.75v-1.75zM7.333 26.25h-1.75V28h1.75v-1.75zM9.083 26.25h-1.75V28h1.75v-1.75zM10.833 26.25h-1.75V28h1.75v-1.75zM12.583 26.25h-1.75V28h1.75v-1.75zM14.333 26.25h-1.75V28h1.75v-1.75z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16.083 26.25h-1.75V28h1.75v-1.75zM17.833 26.25h-1.75V28h1.75v-1.75zM19.583 26.25h-1.75V28h1.75v-1.75zM21.333 26.25h-1.75V28h1.75v-1.75zM23.083 26.25h-1.75V28h1.75v-1.75zM24.833 26.25h-1.75V28h1.75v-1.75zM24.833 24.5h-1.75v1.75h1.75V24.5zM24.833 22.75h-1.75v1.75h1.75v-1.75zM24.833 21h-1.75v1.75h1.75V21zM24.833 19.25h-1.75V21h1.75v-1.75zM24.833 17.5h-1.75v1.75h1.75V17.5zM24.833 15.75h-1.75v1.75h1.75v-1.75zM24.833 14h-1.75v1.75h1.75V14zM24.833 12.25h-1.75V14h1.75v-1.75zM24.833 10.5h-1.75v1.75h1.75V10.5zM24.833 8.75h-1.75v1.75h1.75V8.75zM24.833 7h-1.75v1.75h1.75V7zM24.833 5.25h-1.75V7h1.75V5.25zM24.833 3.5h-1.75v1.75h1.75V3.5zM24.833 1.75h-1.75V3.5h1.75V1.75zM24.833 0h-1.75v1.75h1.75V0zM23.083 0h-1.75v1.75h1.75V0zM21.333 0h-1.75v1.75h1.75V0zM19.583 0h-1.75v1.75h1.75V0zM17.833 0h-1.75v1.75h1.75V0zM16.083 0h-1.75v1.75h1.75V0z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.333 0h-1.75v1.75h1.75V0zM12.583 0h-1.75v1.75h1.75V0zM10.833 0h-1.75v1.75h1.75V0zM9.083 0h-1.75v1.75h1.75V0zM7.333 0h-1.75v1.75h1.75V0z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "12.4",
                    y: "23.267",
                    width: "3.867",
                    height: "3.867",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: ".5"
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "12.4",
                    y: ".867",
                    width: "3.867",
                    height: "3.867",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: ".5"
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
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Snapshot.tsx


const SnapshotIcon = (0,utils/* createIcon */.I)('Snapshot', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.314 11.844l5.14-10.157a.683.683 0 00-1.058-.822L3.37 14.84a.813.813 0 00.535 1.425h8.725l-5.031 9.887a.746.746 0 001.154.9l15.977-13.925a.732.732 0 00-.481-1.284h-8.934z",
        fill: "#FF9F0A"
    })
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Gitcoin.tsx


const GitcoinIcon = (0,utils/* createIcon */.I)('Gitcoin', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.244 13.541l1.661 3.274-1.265 5.36-3.003-2.454.531-3.93 2.076-2.25z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.807 12.44a.627.627 0 01-.627-.627V6.879a.626.626 0 111.255 0v4.934a.639.639 0 01-.628.627z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.822 12.44h-1.94a.633.633 0 01-.618-.637.635.635 0 01.618-.618h1.94c.348.01.619.29.619.637a.629.629 0 01-.619.618z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.238 13.541l2.057-1.94a8.686 8.686 0 00-6.151-2.55 8.712 8.712 0 00-8.71 8.71 8.712 8.712 0 008.71 8.71c1.796 0 3.37.656 4.75-.27l1.72.24-.05-2.8-4.933-3.91 1.062-4.992 1.545-1.198z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.15 27.32c-5.272 0-9.56-4.287-9.56-9.56 0-5.272 4.288-9.559 9.56-9.559 2.549 0 4.953.995 6.759 2.8l.618.618-2.704 2.54-1.168-1.246 1.38-1.303A7.764 7.764 0 0014.14 9.9c-4.326 0-7.85 3.525-7.85 7.851 0 4.326 3.524 7.85 7.85 7.85",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M18.95 22.405l-1.226-1.187a4.937 4.937 0 001.4-3.457 4.905 4.905 0 00-1.506-3.563l-.638-.628.686-.647.589.618.56-.58a6.638 6.638 0 012.028 4.79 6.699 6.699 0 01-1.893 4.654z",
            fill: "#0FCE7C"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.183 17.761c0-1.081.878-1.97 1.97-1.97 1.08 0 1.97.88 1.97 1.97 0 1.082-.88 1.97-1.97 1.97a1.978 1.978 0 01-1.97-1.97z",
            fill: "#EFF4EE"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.15 16.65c-.61 0-1.111.503-1.111 1.11 0 .61.502 1.111 1.11 1.111.609 0 1.11-.502 1.11-1.11 0-.618-.492-1.11-1.11-1.11zm0 3.93a2.823 2.823 0 01-2.82-2.82 2.823 2.823 0 012.82-2.819 2.823 2.823 0 012.819 2.82 2.823 2.823 0 01-2.82 2.82zm6.16-8.98l-4.973 4.597L20.31 11.6z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.73 10.973l1.158 1.255-4.973 4.597-1.159-1.256 4.973-4.596z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M15.074 19.49l3.573 2.684 1.93 1.448v3.689l-3.871-.184",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M21.432 27.32h-7.435v-1.708h5.726v-1.555l-5.156-3.882 1.023-1.361 5.842 4.393v4.114z",
            fill: "#15003E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.038 7.351l.686-.685.686.685-.686.686-.686-.686zM19.093 4.05l.329-.328.328.328-.328.328-.329-.328zM23.153 1.172a.495.495 0 00-.492-.493.495.495 0 00-.493.493c0 .27.222.492.492.492s.493-.212.493-.492z",
            fill: "#25E899"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.836 14.17a.626.626 0 01-.627-.628V6.879a.633.633 0 01.637-.618c.338.01.608.28.618.618v6.663c0 .347-.28.627-.628.627z",
            fill: "#15003E"
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Valuables.tsx


const ValuablesIcon = (0,utils/* createPaletteAwareIcon */.t)('Valuables', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.882 10.056c0-.38.133-.996.498-1.477.308-.408.86-.832 2.007-.832 1.238 0 1.862.401 2.19.746.352.372.483.809.506 1.042v3.407a1.54 1.54 0 003.082 0V9.433l-.002-.045c-.052-.867-.427-2.04-1.35-3.013-.966-1.018-2.429-1.707-4.426-1.707-2.09 0-3.56.859-4.466 2.054-.849 1.122-1.12 2.43-1.12 3.334v2.5c0 .134.016.263.048.386H5.71a1.54 1.54 0 00-1.54 1.539v7.311c0 .85.69 1.54 1.54 1.54H18.81a1.54 1.54 0 001.54-1.54v-7.311c0-.85-.69-1.54-1.54-1.54h-1.975a1.54 1.54 0 00.048-.384v-2.501z",
        fill: "#000"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.882 10.056c0-.38.133-.996.498-1.477.308-.408.86-.832 2.007-.832 1.238 0 1.862.401 2.19.746.352.372.483.809.506 1.042v3.407a1.54 1.54 0 003.082 0V9.433l-.002-.045c-.052-.867-.427-2.04-1.35-3.013-.966-1.018-2.429-1.707-4.426-1.707-2.09 0-3.56.859-4.466 2.054-.849 1.122-1.12 2.43-1.12 3.334v2.5c0 .134.016.263.048.386H5.71a1.54 1.54 0 00-1.54 1.539v7.311c0 .85.69 1.54 1.54 1.54H18.81a1.54 1.54 0 001.54-1.54v-7.311c0-.85-.69-1.54-1.54-1.54h-1.975a1.54 1.54 0 00.048-.384v-2.501z",
        fill: "#fff"
    })
}), undefined, '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/PetIcon.tsx


const PetIcon = (0,utils/* createIcon */.I)('Pet', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2351BD",
            d: "M24,11.1c0,0.8,0,1.5,0,2.3c-0.2,0.1-0.5,0.2-0.7,0.1c-0.2-0.3-0.3-0.7-0.5-1.1c-0.1-1.3-0.2-2.6,0.1-3.9 c0.5-0.3,0.6,0.1,0.7,0.4C23.8,9.6,23.7,10.4,24,11.1z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0F59B9",
            d: "M24,3.2c0,0.9,0,1.9,0,2.8c-0.5,0-0.5-0.4-0.6-0.7c-0.2-0.7-0.3-1.5-0.6-2.2c-0.2-0.4,0-0.9-0.2-1.3 c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.3-0.3-0.7,0-1c0.3,0,0.6-0.1,0.8,0c0.4,0.6,0.3,1.3,0.5,2C23.8,2.7,23.8,3,24,3.2z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1656BA",
            d: "M22.9,3.1c0.5,0.7,0.4,1.5,0.7,2.3C23.7,5.6,23.7,5.9,24,6c0,1,0,2.1,0,3.1c-0.4,0.1-0.4-0.2-0.5-0.5 c-0.2-0.8-0.3-1.7-0.7-2.4C22.7,5.2,22.5,4.1,22.9,3.1z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#597EB8",
            d: "M22.9,3.1c0,1.1,0,2.2,0,3.3c0.2,0.6,0.5,1.3,0,1.9c0,1.4,0,2.8,0,4.2c0.2,0.2,0.1,0.6,0.3,0.9 c0.2,0,0.5,0,0.7,0c0,0.1,0,0.1,0,0.2h-0.1h-0.1c-0.7,0.4-1.4,0.2-2.2,0.2c-0.3,0-0.5,0-0.8,0s-0.5,0-0.7-0.2c0-0.1,0-0.2,0.1-0.3 c0.3-0.2,0.7-0.2,1-0.2c1.2,0,1.2-0.1,1.2-1.3c0-2.9,0-5.7,0-8.6c0-0.4,0-0.9,0.1-1.3c0-0.1,0.1-0.2,0.2-0.3 C23.1,2,22.8,2.6,22.9,3.1z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1F56BB",
            d: "M22.9,8.3c0-0.6,0-1.3,0-1.9c0.6,0.5,0.4,1.4,0.7,2.1C23.7,8.7,23.7,9,24,9.2c0,0.6,0,1.3,0,1.9 c-0.6-0.6-0.4-1.4-0.7-2.1C23.2,8.8,23.3,8.4,22.9,8.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#085CB7",
            d: "M24,3.2c-0.6-0.8-0.6-1.8-0.7-2.8c0.2-0.2,0.5-0.1,0.7,0C24,1.4,24,2.3,24,3.2z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#E7B4DC",
            d: "M0.2,17.7c-0.4,0-0.2-0.3-0.2-0.4c0-2.2,0-4.5,0-6.7c0.1-0.1,0.2,0,0.3,0.1c0.1,0.1,0.1,0.3,0.1,0.4 c0.1,0.9,0,1.9,0,2.8c-0.1,1.2,0.1,2.4-0.1,3.5C0.3,17.6,0.3,17.6,0.2,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#E3B8DD",
            d: "M0.2,10.6c-0.1,0-0.1,0-0.1,0c0-1.8,0-3.6,0-5.4c0.1,0,0.1,0,0.2,0c0.4,0.4,0.2,0.9,0.3,1.4 c0,0.4,0,0.7,0,1.1c0,0.4,0,0.7,0,1.1C0.4,9.3,0.7,10,0.2,10.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#D8D2E0",
            d: "M15.1,0.3c1.3,0,2.7,0,4,0c0.1,0.1,0.1,0.2,0,0.2c-0.2,0.1-0.4,0.2-0.6,0.2c-0.3,0-0.6,0-0.8,0 c-0.3,0-0.6,0-0.8,0c-0.2,0-0.5,0-0.7,0c-0.3,0-0.7,0-1-0.2C15,0.5,15,0.4,15.1,0.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#DFC7DF",
            d: "M15.1,0.3c0,0.1,0,0.1,0,0.1c-0.1,0.1-0.2,0.1-0.2,0.2c-0.3,0.1-0.6,0.1-0.9,0.1c-0.2,0-0.5,0-0.7,0 s-0.4,0-0.5,0c-0.3,0-0.5,0-0.8,0c-0.2,0-0.3,0-0.5-0.1c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.1-0.2,0-0.2C12.5,0.3,13.8,0.3,15.1,0.3 z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#E7BBDD",
            d: "M11.2,0.3c0,0.1,0,0.1,0,0.1c-0.2,0.3-0.5,0.3-0.8,0.3c-0.3,0-0.6,0-0.9,0c-0.2,0-0.5,0-0.7,0 c-0.3,0-0.6,0-0.8,0c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.1-0.2,0-0.2C8.8,0.3,10,0.3,11.2,0.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#F1B0DD",
            d: "M7.6,0.3c0,0.1,0,0.1,0,0.1C7.4,0.6,7.2,0.6,6.9,0.7c-0.2,0-0.5,0-0.8,0c-0.6,0-1.2,0.1-1.8-0.1 C4.2,0.6,4.1,0.5,4,0.4c0-0.1,0-0.1,0-0.2C5.2,0.3,6.4,0.3,7.6,0.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#C5D3D9",
            d: "M24,0.4c-0.2,0-0.5,0-0.7,0c-0.3,0-0.6,0-0.9,0c-0.2,0.1-0.3,0.2-0.5,0.2c-0.2,0-0.5,0-0.7-0.1 c-0.1-0.1-0.1-0.2,0-0.2c0.8,0,1.7,0,2.5,0C23.8,0.3,24,0.2,24,0.4z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8D8AD3",
            d: "M16.1,17.7c-0.9,0-1.7,0-2.6,0c0-0.1,0-0.2,0.1-0.2c0.2-0.1,0.4-0.1,0.6-0.2c0.3,0,0.5,0,0.8,0 c0.2,0,0.5,0,0.7,0c0.1,0,0.3,0.1,0.4,0.1C16.2,17.6,16.2,17.6,16.1,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#A268D5",
            d: "M9.3,17.7c-0.8,0-1.5,0-2.3,0c0-0.1,0-0.2,0.1-0.2c0.1-0.1,0.3-0.1,0.5-0.2c0.2,0,0.3,0,0.5,0 c0.2,0,0.3,0,0.5,0c0.2,0,0.3,0,0.5,0.1c0.1,0,0.2,0.1,0.2,0.1C9.4,17.6,9.4,17.7,9.3,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9B74D4",
            d: "M9.3,17.7c0-0.1,0-0.1,0-0.2c0.1-0.2,0.3-0.2,0.5-0.2s0.5,0,0.7,0s0.4,0,0.5,0c0.2,0,0.4,0,0.5,0.2 c0.1,0.1,0.1,0.2,0,0.2C10.8,17.7,10.1,17.7,9.3,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#D0D4DD",
            d: "M21.2,0.3c0,0.1,0,0.1,0,0.1c-0.1,0.1-0.2,0.2-0.4,0.2c-0.2,0-0.5,0-0.7,0c-0.3,0-0.6,0-0.8-0.1 c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.1,0-0.1C19.8,0.3,20.5,0.3,21.2,0.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#C33CD9",
            d: "M0.2,17.7c0-0.1,0-0.1,0-0.2c0.3-0.3,0.7-0.2,1.1-0.2c0.2,0,0.5,0,0.7,0.1c0.1,0,0.2,0.1,0.2,0.1 c0.1,0.1,0.1,0.2,0,0.2C1.6,17.7,0.9,17.7,0.2,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#AB5BD6",
            d: "M7,17.6c0,0.1,0,0.1,0,0.2c-0.6,0-1.3,0-1.9,0c-0.1-0.1-0.1-0.2,0-0.2c0.2-0.1,0.3-0.1,0.5-0.2 c0.2,0,0.4,0,0.7,0c0.2,0,0.4,0,0.6,0.1C7,17.5,7,17.5,7,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9581D4",
            d: "M11.6,17.7c0-0.1,0-0.1,0-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.2-0.1,0.3-0.1,0.5-0.1s0.3,0,0.5,0s0.4,0,0.6,0.1 l0.1,0.1c0,0.1,0,0.1,0,0.2C12.9,17.7,12.2,17.7,11.6,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#6E87CA",
            d: "M19.3,17.6c0,0.1,0,0.1,0,0.2c-0.6,0-1.2,0-1.7,0c0-0.1,0-0.2,0.1-0.2c0.2-0.2,0.5-0.2,0.8-0.2 c0.2,0,0.5,0,0.7,0.1C19.2,17.4,19.2,17.5,19.3,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#B948D8",
            d: "M2.3,17.7c0-0.1,0-0.1,0-0.2c0.1-0.2,0.3-0.2,0.4-0.2c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0,0.4,0s0.3,0,0.5,0.2 c0,0.1,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.1C3.4,17.7,2.8,17.7,2.3,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#7D89CF",
            d: "M17.5,17.6c0,0.1,0,0.1,0,0.2c-0.5,0-0.9,0-1.4,0c0-0.1,0-0.1,0-0.2c0.1-0.2,0.3-0.2,0.5-0.2 c0.3,0,0.6,0,0.8,0.1C17.4,17.5,17.5,17.5,17.5,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#B251D7",
            d: "M3.9,17.7c0-0.1,0-0.1,0-0.2L4,17.4c0.1,0,0.1-0.1,0.2-0.1s0.2,0,0.3,0c0.2,0,0.3,0,0.4,0.1 c0.1,0,0.1,0.1,0.2,0.1c0,0.1,0,0.1,0,0.2C4.7,17.7,4.3,17.7,3.9,17.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9B1ED8",
            d: "M4.9,17.5c-0.2,0-0.3,0-0.5,0c-0.6-0.6-0.6-1.5-0.9-2.4c-0.9-3.3-1.7-6.6-2.6-9.9c-0.1-0.3-0.2-0.6,0-0.9 C1,4.2,1.1,4.1,1.2,3.9c0.1,0,0.1,0,0.1,0.1c0.4,0.3,0.5,0.8,0.6,1.2c0.9,3.7,2,7.4,2.9,11.2C5,16.8,5.2,17.1,4.9,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#A31ADA",
            d: "M3.9,17.6c-0.2,0-0.3,0-0.5,0c-0.7-0.8-0.7-1.8-0.9-2.6C1.7,12.2,1,9.4,0.3,6.6c0-0.5,0-0.9-0.1-1.4 C0.3,5.1,0.3,5.1,0.4,5C1.1,5.1,1,5.7,1.1,6.1c0.8,3.2,1.7,6.3,2.5,9.5C3.8,16.3,4.2,16.9,3.9,17.6L3.9,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9023D6",
            d: "M1.8,3.3c0.1-0.2,0.3-0.4,0.5-0.6C2.9,3,2.9,3.6,3.1,4.1C3.4,5.4,3.7,6.8,4.3,8c0,1,0.1,1.9-0.1,2.8 c-0.6,0.3-0.6-0.2-0.7-0.5C3,8.5,2.5,6.7,2.1,4.9C1.9,4.4,1.6,3.8,1.8,3.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8926D4",
            d: "M4,8C3.3,7.1,3.4,6,3,5C2.7,4.2,2.7,3.4,2.3,2.7C2.4,2.3,2.8,2.1,3,1.8c0.4,0.2,0.4,0.6,0.5,1 c0.2,0.8,0.4,1.6,0.8,2.4C4.3,6.1,4.6,7,4,8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9F1CD9",
            d: "M0.9,4.3c1.2,4.4,2.3,8.9,3.5,13.3c-0.1,0-0.2,0-0.3,0c-0.8-2.7-1.4-5.5-2.2-8.2C1.5,7.9,1.3,6.3,0.6,4.8 C0.7,4.6,0.7,4.4,0.9,4.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9F1CD9",
            d: "M0.5,4.8C0.9,4.9,0.9,5.3,1,5.6C2,9.4,3,13.2,4,17c0,0.2,0,0.3,0,0.5c-0.1,0-0.1,0-0.2,0 c-1-3.8-2-7.7-3-11.5C0.7,5.6,0.7,5.2,0.3,4.9C0.4,4.9,0.5,4.9,0.5,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9620D7",
            d: "M1.8,3.3C2.4,5.6,3.1,8,3.7,10.4c0.1,0.2,0.1,0.4,0.3,0.5c0.3,0.3,0.3,0.7,0.1,1.1 c-0.6,0.2-0.6-0.2-0.7-0.6C2.8,9.3,2.3,7.3,1.8,5.2c-0.1-0.5-0.1-1-0.6-1.3l0,0C1.4,3.7,1.6,3.5,1.8,3.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8329D3",
            d: "M4,5C3.4,4.5,3.5,3.8,3.3,3.2C3.2,2.7,3.1,2.3,3,1.8c0.3-0.5,0.6-0.9,1-1.3c0.4,0.3,0.2,0.7,0.3,1.1 c0.1,0.8,0,1.6,0,2.3C4.3,4.4,4.3,4.7,4,5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#D70AE4",
            d: "M4.1,1.7c0-0.4,0-0.7-0.1-1.1V0.5c0.1,0,0.1,0,0.2,0c0.3,0.2,0.2,0.7,0.7,0.8c0.7,0,1.1-0.1,1.3-0.8 c0.2,0,0.5,0,0.7,0c0.3,0.4,0.8,0.8,0.3,1.3C6.2,1.9,5.1,2.2,4.1,1.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1F53BC",
            d: "M19.3,17.6c-0.1,0-0.1,0-0.2,0c-0.7-1.1-0.8-2.3-1.1-3.4c-0.7-2.2-1-4.4-1.8-6.6c0-0.1-0.1-0.2-0.1-0.3 c0-0.6-0.2-1.2,0.1-1.8C16.9,5.4,16.9,6,17,6.3c0.3,1.1,0.6,2.1,0.8,3.2c0.7,2.3,1.2,4.6,1.8,6.9c0.1,0.3,0.2,0.6,0,0.9 C19.5,17.4,19.4,17.5,19.3,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1A55BB",
            d: "M19.6,17.3c-0.9-3.6-1.9-7.2-2.8-10.8c-0.1-0.3-0.1-0.8-0.5-1C16,5,16.1,4.7,16.7,4.7 c0.6,0.2,0.5,0.8,0.6,1.3c0.9,3.2,1.7,6.5,2.6,9.7c0.1,0.3,0.3,0.7,0.4,1C20.1,16.9,19.9,17.1,19.6,17.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1557BA",
            d: "M20.7,16.2c-0.1,0.1-0.2,0.2-0.2,0.3c-0.4,0-0.5-0.2-0.5-0.5c-1-3.6-2-7.3-2.9-10.9c0-0.1,0-0.2,0-0.2 c0.1-0.1,0.3-0.1,0.4-0.1c0.3,0.1,0.4,0.4,0.5,0.7c0.7,2.5,1.2,5.1,2,7.5c0.3,0.8,0.3,1.7,0.6,2.5C20.7,15.7,20.8,16,20.7,16.2z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1657BA",
            d: "M17.2,4.8c0.9,3.6,1.8,7.1,2.8,10.6c0.1,0.4,0.1,0.8,0.5,1.1c0,0.1,0,0.2-0.1,0.2c-0.5-0.1-0.5-0.4-0.6-0.8 c-1-3.7-2-7.4-3-11.1C16.9,4.7,17,4.7,17.2,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0361B6",
            d: "M21.5,13.6c0.8,0,1.5,0,2.3,0c-0.5,0.6-1.1,1.1-1.7,1.6C21.4,14.8,21.3,14.4,21.5,13.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0E5AB8",
            d: "M20.7,16.2c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.7-0.6-1.3-0.4-2c0.2,0,0.5,0,0.7,0c0.4,0.6,0.5,1.3,0.7,2 C21.3,15.9,21.1,16.2,20.7,16.2z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#095EB7",
            d: "M21.5,15.6c-0.6-0.5-0.5-1.3-0.7-2c0.2,0,0.5,0,0.7,0c0,0.6,0.1,1.1,0.5,1.5C21.9,15.3,21.8,15.5,21.5,15.6 z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#3054BD",
            d: "M23.3,13.4c-0.6-0.1-0.3-0.6-0.3-0.9C23.3,12.7,23.3,13,23.3,13.4z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#1B59BA",
            d: "M21.9,0.5c0.2,0,0.3,0,0.5,0c0.1,0.3,0.2,0.7,0.2,1c-0.2,0.2-0.5,0.2-0.8,0C21.6,1.2,21.6,0.8,21.9,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#3052BE",
            d: "M21.9,1.5c0.2,0,0.5,0,0.7,0c0.1,0,0.1,0.1,0.2,0.1v0.1C22.2,2,21.6,2,21.1,1.8C21,1.7,21,1.6,21,1.5 C21.3,1.2,21.6,1.3,21.9,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#F1EBA1",
            d: "M21,1.6c0.6,0,1.2,0.1,1.7,0.1c0,3.6,0,7.2,0,10.9c0,0.6-0.1,0.9-0.8,0.8c-0.6-0.1-1.2,0-1.8,0 c-0.1-0.2-0.1-0.5-0.2-0.6c-0.1-2.2,0-4.4-0.1-6.6c0-1.3,0-1.3-1.3-1.3c-0.6,0-1.2-0.2-1.8-0.2c-0.4,0-0.5,0.1-0.5,0.5 c0,0.8,0,1.5,0,2.2c0.3,1.9,0.1,3.7,0.1,5.6c0,0.3-0.2,0.6-0.6,0.7c-0.3,0.1-0.5,0.1-0.8,0c-0.3,0-0.6,0-0.9,0c-0.2,0-0.5,0-0.8,0 s-0.6,0-0.9-0.1c-0.8-0.5-0.5-1.2-0.5-1.9s0-1.4,0-2.1c0-1.5,0.1-3-0.1-4.5c-0.2-0.4-0.7-0.3-1-0.3c-0.5,0-1,0-1.5,0 C8.7,4.7,8.4,4.9,8.4,5.4c0,0.6,0,1.2,0,1.8c0,0.8,0.1,1.6,0,2.4c0,0.9,0,1.7,0,2.6c-0.1,0.5,0.1,1-0.3,1.3 c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.5,0-0.7,0s-0.4,0-0.6,0s-0.4,0-0.6,0s-0.4,0-0.6,0c-0.3,0-0.6,0-0.9,0c-0.8-0.4-0.6-1-0.4-1.6 c0-0.4,0-0.8,0-1.2c0-1,0-2,0-3s0-2,0-3c0-1.1,0-2.2,0-3.3c1.1,0,2.2,0,3.3,0c0.2-0.2,0.4-0.2,0.6-0.2c0.5,0,1,0,1.6,0 c1.3,0,2.7,0,4,0c0.4,0,0.8,0,1.1,0c0.3,0,0.5,0,0.8,0c1.4,0,2.7,0,4.1,0C20.1,1.4,20.6,1.3,21,1.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#145AB9",
            d: "M20.1,12.8c0,0.2,0,0.4,0.1,0.6c0,0.1,0,0.1,0,0.2c0.1,0.7,0.2,1.4,0.3,2.1c-0.3-0.3-0.3-0.7-0.4-1 c-0.9-3.3-1.7-6.6-2.6-9.9c0.1-0.1,0.3-0.1,0.4,0c0.3,0.2,0.3,0.5,0.4,0.7c0.6,2.1,1.1,4.3,1.7,6.4C20.1,12.2,20,12.5,20.1,12.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#AC16DC",
            d: "M2.8,17.6c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0c-0.3-0.3-0.3-0.7-0.4-1c-0.5-1.9-1-3.7-1.5-5.6 c0-0.1,0-0.2-0.1-0.3c0-0.6,0-1.3,0.1-1.9c0.7-0.1,0.6,0.5,0.7,0.8c0.5,2,1.1,4,1.6,6.1c0.1,0.4,0.2,0.7,0.3,1.1 C2.9,16.9,3.1,17.2,2.8,17.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#B214DD",
            d: "M0.3,10.9c0.2,0.1,0.3,0.3,0.4,0.5c0.5,2.1,1.2,4.1,1.5,6.2c-0.2,0-0.5,0-0.7,0C1.1,17.4,1,17,1,16.7 c-0.3-0.9-0.4-1.9-0.7-2.8C0.3,12.9,0.3,11.9,0.3,10.9z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#BA11DF",
            d: "M0.3,13.9c0.6,0.6,0.5,1.5,0.8,2.2c0.2,0.5,0.3,0.9,0.4,1.4c-0.4,0-0.8,0-1.2,0C0.3,16.3,0.3,15.1,0.3,13.9 z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#A818DB",
            d: "M0.3,6.6C0.9,7.2,0.9,8,1.1,8.7c0.8,2.9,1.6,5.9,2.3,8.9c-0.1,0-0.2,0-0.3,0c-0.7-2.2-1.2-4.5-1.8-6.7 C1,9.8,0.7,8.8,0.3,7.7C0.3,7.3,0.3,6.9,0.3,6.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#A818DB",
            d: "M0.3,7.6c0.2,0,0.3,0.1,0.3,0.3c0.8,3.2,1.6,6.5,2.5,9.7c-0.1,0-0.1,0-0.2,0c-0.7-2.7-1.4-5.4-2.1-8.2 c-0.1-0.3,0-0.7-0.5-0.8C0.3,8.3,0.3,8,0.3,7.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#613EC9",
            d: "M19.6,1.6c-1.4,0-2.8,0-4.2,0c0-0.1,0-0.2,0.1-0.2c0.6-0.1,0.4-0.6,0.6-0.9c0.2,0,0.5,0,0.7,0 c0.3,0.4,0.4,0.9,1.1,0.8c0.2,0,0.4,0,0.6,0c0.3,0,0.5,0,0.8,0.1C19.5,1.4,19.6,1.5,19.6,1.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#6933CD",
            d: "M16.1,0.5c0.2,0.6,0.3,1.2-0.7,1c-0.6-0.1-0.6-0.2-0.5-1c0.1,0,0.1,0,0.2-0.1C15.4,0.4,15.8,0.4,16.1,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#513DC8",
            d: "M17.9,1.5c-0.8,0.1-1.1-0.2-1-1c0.3,0,0.6,0,0.9,0C18.2,0.7,18.1,1.1,17.9,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4044C4",
            d: "M19.4,1.5c-0.3,0-0.6,0-0.9,0c-0.3-0.3-0.3-0.7,0-1c0.2,0,0.3,0,0.5-0.1c0.1,0,0.1,0,0.2,0.1 C19.5,0.8,19.7,1.1,19.4,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4941C6",
            d: "M18.6,0.5c0,0.3,0,0.7,0,1c-0.2,0-0.5,0-0.7,0c0-0.3,0.1-0.7-0.2-1C18,0.5,18.3,0.5,18.6,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9B25D6",
            d: "M13.7,1.6c-1.4,0-2.8,0-4.2,0c0-0.2,0.1-0.2,0.2-0.3c0.3,0,0.5,0,0.8,0c0.6,0.1,0.6-0.5,0.9-0.8 c0.2,0,0.3,0,0.5,0c0.3,0.3,0.2,0.9,0.9,0.8c0.2,0,0.4,0,0.6,0.1C13.6,1.4,13.7,1.5,13.7,1.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#752ED0",
            d: "M14.9,0.5c0.3,0.3-0.1,0.9,0.5,1v0.1c-0.2,0-0.5,0-0.7,0c-0.8,0-0.9-0.5-0.7-1.1 C14.3,0.5,14.6,0.5,14.9,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#A21BDA",
            d: "M11.4,0.5c0.1,0.6,0,1.2-0.9,1c-0.2-0.3-0.4-0.6-0.2-1c0.3,0,0.6,0,0.9-0.1C11.3,0.4,11.4,0.4,11.4,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8F23D6",
            d: "M12.8,1.5c-0.9,0.2-0.9-0.4-0.9-1c0.3,0,0.6,0,0.9,0C13.1,0.8,13.1,1.1,12.8,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#7F2AD2",
            d: "M14,0.5c0.2,0.4,0.1,1,0.7,1.1c-0.3,0-0.7,0-1,0c-0.1,0-0.1-0.1-0.2-0.1c-0.2-0.3-0.3-0.6-0.2-1 C13.6,0.5,13.8,0.5,14,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8627D4",
            d: "M13.3,0.5c0.2,0.3,0.2,0.7,0.2,1c-0.2,0-0.5,0-0.7,0c0-0.3,0-0.7,0-1C13,0.5,13.2,0.5,13.3,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#CB0AE3",
            d: "M7.9,1.6c-0.2,0-0.4,0-0.5,0C6.9,1.3,7,0.9,6.9,0.5c0.2,0,0.5,0,0.7-0.1c0.1,0,0.2,0,0.3,0.1 C8.2,0.7,8.3,1,8.2,1.4C8.2,1.5,8,1.6,7.9,1.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#B712DF",
            d: "M7.9,1.6C8,1.6,8,1.5,8.1,1.5c0.4-0.2,0.4-0.7,0.7-1c0.2,0,0.5,0,0.7,0c0.3,0.3,0.5,0.6,0.2,1 C9.6,1.6,9.6,1.6,9.5,1.6C9,1.6,8.5,1.6,7.9,1.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#AC16DC",
            d: "M9.7,1.5c-0.1-0.3-0.1-0.7-0.2-1c0.3,0,0.6,0,0.9,0c0.1,0.3,0.2,0.7,0.2,1C10.2,1.5,10,1.5,9.7,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#C00EE1",
            d: "M8.8,0.5c0,0.5,0.2,1.1-0.7,1c0.1-0.4-0.1-0.7-0.2-1C8.2,0.5,8.5,0.5,8.8,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#E105E7",
            d: "M6.2,0.5C6,0.8,6.8,1.4,5.9,1.5c-1.4,0.1-1.6,0.1-1.6-1C4.9,0.5,5.5,0.5,6.2,0.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2152BD",
            d: "M21.9,1.5c-0.3,0-0.6,0-0.9,0l-0.1-0.1c-0.2-0.3-0.3-0.6-0.1-0.9c0.1,0,0.2,0,0.3-0.1c0.2,0,0.5,0,0.7,0.1 C21.9,0.8,21.9,1.1,21.9,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4D3FC7",
            d: "M12.5,13.5c0.3,0,0.6,0,0.9,0c0.5,1.1,0.6,2.3,1,3.5c0.1,0.2,0,0.4-0.2,0.6c-0.2,0-0.5,0-0.7,0l0,0 c-0.2-0.1-0.3-0.2-0.3-0.4c-0.4-1.1-0.7-2.2-0.9-3.4C12.3,13.7,12.4,13.6,12.5,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#3947C2",
            d: "M14.9,13.5c0.2,0,0.5,0,0.7,0c0.7,1.2,1.1,2.6,1,4c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.3,0 c-0.6-1-0.7-2.2-1-3.4C14.7,13.9,14.7,13.7,14.9,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4642C5",
            d: "M14.2,17.5c-0.1-1.1-0.6-2.1-0.8-3.1c0-0.3-0.1-0.6-0.1-0.9c0.2,0,0.5,0,0.7,0c0.7,1.3,1.1,2.6,1,4 C14.8,17.5,14.5,17.5,14.2,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4044C4",
            d: "M15.1,17.5c-0.3-1.3-0.7-2.7-1-4c0.3,0,0.6,0,0.9,0c0,1.2,0.6,2.1,0.8,3.3c0,0.2,0.1,0.5,0.1,0.8 C15.5,17.5,15.3,17.5,15.1,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#722FCF",
            d: "M8,13.5c0.3-0.3,0.1-0.8,0.2-1.2c0.3-0.1,0.5,0.2,0.6,0.4c0.4,1.5,0.9,2.9,1.2,4.4c0,0.1,0,0.3-0.1,0.4 c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0C8.6,16.2,8.2,14.9,8,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#772DD0",
            d: "M8,13.5c0.6,1.3,1,2.6,1.1,4c-0.2,0-0.3,0-0.5,0c-0.7-1-0.8-2.3-1.1-3.5c0-0.2,0.1-0.3,0.2-0.5 C7.8,13.5,7.9,13.5,8,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8029D2",
            d: "M6.5,13.5c0.2,0,0.3,0,0.5,0c0.2,0.2,0.4,0.3,0.4,0.6C7.7,15,7.9,16,8.2,16.9c0.1,0.2,0.1,0.5-0.1,0.7 c-0.2,0-0.3,0-0.5,0c-0.5-0.4-0.6-1-0.7-1.6C6.8,15.2,6.2,14.4,6.5,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#7B2BD1",
            d: "M8.1,17.5c-0.3-1.3-0.7-2.7-1-4c0.2,0,0.5,0,0.7,0c0,1.2,0.6,2.3,0.8,3.5c0,0.2,0.1,0.3,0.1,0.5 C8.4,17.5,8.3,17.5,8.1,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8527D3",
            d: "M6.5,13.5c0.3,1.3,0.7,2.7,1,4c-0.2,0-0.3,0-0.5,0l0,0c-0.2-0.1-0.3-0.2-0.4-0.4c-0.3-1-0.5-2-0.8-2.9 c0-0.3,0-0.5,0.2-0.7C6.2,13.5,6.3,13.5,6.5,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#6136CB",
            d: "M8.2,7.3c0-0.6,0-1.3,0-1.9c0.6,0,0.7,0.5,0.8,1c0.8,3.1,1.6,6.2,2.4,9.3c0.2,0.6,0.6,1.2,0.4,1.9 c-0.1,0-0.1,0-0.2,0c-0.2,0-0.3,0-0.5,0c-0.6-1.2-0.7-2.4-1-3.7c-0.6-2.1-1.2-4.2-1.6-6.3C8.4,7.4,8.3,7.3,8.2,7.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#6634CC",
            d: "M8.2,7.3C8.6,7.4,8.6,7.7,8.7,8c0.8,2.9,1.5,5.9,2.3,8.8c0.1,0.2,0,0.5,0.1,0.7c-0.2,0-0.3,0-0.5,0 c-0.3-0.3-0.4-0.7-0.5-1.1c-0.5-2.1-1.2-4.2-1.6-6.4c0-0.1-0.1-0.3-0.2-0.4C8.2,8.9,8.2,8.1,8.2,7.3z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#6C32CE",
            d: "M8.2,9.7c0.4,0,0.4,0.3,0.5,0.5c0.6,2.4,1.2,4.9,1.8,7.3c-0.2,0-0.5,0-0.7,0c-0.4-1.5-0.8-3-1.2-4.6 c-0.1-0.3-0.1-0.5-0.4-0.6C8.2,11.4,8.2,10.6,8.2,9.7z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#394BC1",
            d: "M19.4,1.5c-0.1-0.3-0.1-0.7-0.2-1c0.3,0,0.6,0,0.9,0c0.2,0.4,0.4,0.8,0.9,1l0,0v0.1c-0.5,0-0.9,0-1.4,0 C19.5,1.6,19.5,1.5,19.4,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#3052BE",
            d: "M21,1.5c-0.8,0.1-0.9-0.4-0.9-1c0.2,0,0.5,0,0.7,0C20.8,0.8,21,1.1,21,1.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9620D7",
            d: "M4,12.1c0.2,0.4-0.4,1.2,0.5,1.4c0.6,1.3,1,2.6,1,4c-0.2,0-0.3,0-0.5,0c-0.1,0-0.1,0-0.2,0 C3.6,13.1,2.5,8.7,1.3,4.3c0-0.1-0.1-0.3-0.2-0.4c0.4,0,0.5,0.3,0.5,0.6c0.8,2.3,1.4,4.6,2,6.8C3.7,11.6,3.7,12,4,12.1z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#9023D6",
            d: "M5.6,17.5c-0.5-1.3-0.8-2.7-1-4c0.3,0,0.6,0,0.9,0c0.3,1.3,1,2.6,0.9,4C6.1,17.5,5.9,17.5,5.6,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#8925D4",
            d: "M6.3,17.5c-0.3-1.3-0.9-2.6-0.9-4c0.2,0,0.3,0,0.5,0c0.3,1.3,0.7,2.7,1,4C6.8,17.5,6.6,17.5,6.3,17.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#543CC8",
            d: "M12.5,13.5c0.3,1.3,0.7,2.7,1,4c-0.2,0-0.5,0-0.7,0c-0.3-0.2-0.4-0.5-0.5-0.8c-0.9-3.6-1.8-7.2-2.8-10.8 C9.4,5.6,9.2,5.2,9.4,4.8c0.2-0.1,0.4-0.1,0.6,0c0.4,0.2,0.4,0.6,0.5,1c0.6,2,1,4,1.6,6C12.3,12.4,11.8,13.1,12.5,13.5z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#593AC9",
            d: "M9.5,4.8c1.1,4.2,2.2,8.5,3.3,12.7c-0.2,0-0.3,0-0.5,0c-0.5-0.5-0.6-1.1-0.7-1.7c-0.9-3.4-1.8-6.7-2.7-10.1 C8.8,5.4,8.6,5,9.1,4.7C9.2,4.7,9.4,4.7,9.5,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#5D38CA",
            d: "M9.1,4.8C8.9,4.9,9,5.1,9,5.3c1.1,4.1,2.2,8.1,3.2,12.2c-0.2,0-0.3,0-0.5,0c-1-3.8-2-7.5-3-11.3 C8.6,5.8,8.5,5.5,8.1,5.3C8.1,4.4,8.7,4.7,9.1,4.8L9.1,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2451BD",
            d: "M16.3,7.6C16.8,8,16.8,8.7,17,9.2c0.6,2.7,1.3,5.3,2,7.9c0,0.1,0,0.3,0.1,0.4c-0.2,0-0.5,0-0.7,0 c-0.3-0.2-0.4-0.7-0.5-1c-0.6-2.1-1-4.2-1.7-6.2C16.3,9.4,16.1,8.5,16.3,7.6z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2B4EBF",
            d: "M16.3,10.4c0.6,0.4,0.5,1,0.6,1.5c0.5,1.9,1,3.7,1.4,5.6c-0.3,0-0.6,0-0.9,0l0,0c0,0,0-0.1-0.1-0.2 C16.5,15,15.9,12.8,16.3,10.4z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#324AC1",
            d: "M16.3,10.4c-0.3,2.3,0.6,4.5,1.1,6.6c0,0.2,0.1,0.3,0.1,0.5c-0.3,0-0.6,0-0.9,0c-0.3-1.3-0.7-2.7-1-4 c0.5,0,0.5-0.3,0.5-0.8c0-1.8,0-3.6,0-5.3c0-0.1,0.1-0.1,0.1,0c0,0.1,0,0.1,0,0.2C16.3,8.5,16.3,9.5,16.3,10.4z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#2B4EBF",
            d: "M16.3,7.4L16.3,7.4c-0.1-0.2-0.1-0.3-0.1-0.5c0-2.4,0-2.4,2.4-2.2c0.1,0.1,0,0.2-0.1,0.2 c-0.2,0.1-0.4,0-0.6-0.1c-0.1,0-0.2,0-0.3,0s-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.7-0.1-0.7,0.3-0.7,0.7C16.3,6.2,16.3,6.8,16.3,7.4 z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4B40C6",
            d: "M12.1,4.8c0.1,1.6,0.1,3.3,0,4.9c-0.4,0.1-0.6-0.3-0.6-0.6c-0.3-1.3-0.7-2.6-1-3.9 c-0.1-0.2-0.1-0.4,0.1-0.5C11.1,4.7,11.6,4.6,12.1,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4F3EC7",
            d: "M10.5,4.8c0.3,1.3,0.7,2.7,1,4c0.1,0.3,0.2,0.7,0.5,0.9c0,0.7,0,1.4,0,2.1c-0.7-0.7-0.6-1.6-0.9-2.5 c-0.5-1.5-0.8-3-1.2-4.5C10.2,4.7,10.4,4.7,10.5,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0F63B6",
            d: "M18.6,4.8L18.6,4.8c1.6-0.2,1.6-0.2,1.6,1.3c0,2.2,0,4.5,0,6.7C19.9,12.6,20,12.3,20,12 c-0.4-1.3-0.2-2.6-0.3-3.8c0-0.5,0-0.9,0-1.4C19.8,5.8,19.6,5.1,18.6,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#4D48C4",
            d: "M10.5,4.8c-0.2,0-0.3,0-0.5,0s-0.3,0-0.5,0c-0.1,0-0.2,0-0.3,0V4.7c1,0,2-0.2,2.9,0.1 C11.6,4.8,11.1,4.8,10.5,4.8z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fill: "#0C5BB8",
            d: "M18.6,4.8c0.1,0,0.3,0,0.4,0c0.8-0.1,1,0.2,1,1c-0.1,2,0,4.1-0.1,6.2c-0.5-0.7-0.6-1.6-0.8-2.4 c-0.4-1.6-0.8-3.2-1.2-4.8C18.1,4.8,18.3,4.8,18.6,4.8z"
        })
    ]
}), '0 0 24 13.4');

;// CONCATENATED MODULE: ../icons/plugins/GoodGhosting.tsx


const GoogGhostingIcon = (0,utils/* createPaletteAwareIcon */.t)('GoogGhostingIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.19.166C7.05.753 4.526 2.96 5.176 5.414c.159.587.832 1.67 1.029 1.67.086 0 .469-.324.858-.71l.723-.698-.38-.299c-.65-.524-.698-.735-.233-1.172 1.335-1.258 4.165-1.957 7.374-1.82 2.438.1 4.104.549 5.439 1.434.894.598.968.782.527 1.31l-.368.41 1.569 1.422.306-.524c.44-.782.563-1.172.563-1.82 0-1.683-1.58-3.217-4.104-4.014-1.874-.586-4.924-.773-7.288-.436Zm.743 4.002c-2.376.523-4.888 2.518-6.014 4.786C5.22 10.35 5 11.36 5 13.068c0 1.421.037 1.658.38 2.63.429 1.21 1.409 2.805 2.438 3.948 2.11 2.344 7.23 6.046 10.755 7.766 1.31.636 1.96.748 2.168.374.208-.398.073-.648-.796-1.57-.637-.665-.833-.973-.993-1.534-.47-1.62.061-3.341 1.617-5.236.992-1.209 1.715-2.501 2.156-3.83.404-1.234.404-3.54 0-4.986-.895-3.166-3.626-5.822-6.7-6.483-1.066-.224-3.05-.224-4.092.013v.008Zm4.079.872c3.43.898 5.94 4.014 6.161 7.654.123 2.11-.661 4.251-2.278 6.195-1.446 1.745-2.058 3.329-1.948 5.087.061.872.453 1.907.943 2.48.441.511-2.474-1.172-4.973-2.88-3.895-2.655-6.455-5.198-7.46-7.454-1.942-4.325.667-9.66 5.407-11.048.967-.287 3.123-.311 4.152-.037l-.004.003Zm1.165 5.66c-.6.324-1.237 1.084-1.189 1.408.062.474.564.424.968-.078.392-.486 1.066-.772 1.507-.664.159.037.502.299.76.573.526.549.967.648 1.094.25.097-.337-.441-1.048-1.102-1.434a2.076 2.076 0 0 0-2.034-.063l-.004.008Zm-8.208.224c-.637.412-1.004.923-.943 1.31.062.473.441.398 1.078-.212.821-.782 1.25-.782 2.07-.013.637.611.919.686 1.103.325.097-.187.048-.337-.246-.711-.857-1.097-2.02-1.359-3.062-.698Zm3.039 3.528c-.331.195-.245.56.232 1.055.54.536 1.299.91 1.862.923.547 0 1.29-.412 1.678-.923.65-.873.012-1.31-.784-.535-.245.237-.563.473-.71.511-.343.112-1.053-.195-1.409-.61-.38-.45-.612-.562-.87-.425v.004Z",
        fill: "#2B2B52"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.19.166C7.05.753 4.526 2.96 5.176 5.414c.159.587.832 1.67 1.029 1.67.086 0 .469-.324.858-.71l.723-.698-.38-.299c-.65-.524-.698-.735-.233-1.172 1.335-1.258 4.165-1.957 7.374-1.82 2.438.1 4.104.549 5.439 1.434.894.598.968.782.527 1.31l-.368.41 1.569 1.422.306-.524c.44-.782.563-1.172.563-1.82 0-1.683-1.58-3.217-4.104-4.014-1.874-.586-4.924-.773-7.288-.436Zm.743 4.002c-2.376.523-4.888 2.518-6.014 4.786C5.22 10.35 5 11.36 5 13.068c0 1.421.037 1.658.38 2.63.429 1.21 1.409 2.805 2.438 3.948 2.11 2.344 7.23 6.046 10.755 7.766 1.31.636 1.96.748 2.168.374.208-.398.073-.648-.796-1.57-.637-.665-.833-.973-.993-1.534-.47-1.62.061-3.341 1.617-5.236.992-1.209 1.715-2.501 2.156-3.83.404-1.234.404-3.54 0-4.986-.895-3.166-3.626-5.822-6.7-6.483-1.066-.224-3.05-.224-4.092.013v.008Zm4.079.872c3.43.898 5.94 4.014 6.161 7.654.123 2.11-.661 4.251-2.278 6.195-1.446 1.745-2.058 3.329-1.948 5.087.061.872.453 1.907.943 2.48.441.511-2.474-1.172-4.973-2.88-3.895-2.655-6.455-5.198-7.46-7.454-1.942-4.325.667-9.66 5.407-11.048.967-.287 3.123-.311 4.152-.037l-.004.003Zm1.165 5.66c-.6.324-1.237 1.084-1.189 1.408.062.474.564.424.968-.078.392-.486 1.066-.772 1.507-.664.159.037.502.299.76.573.526.549.967.648 1.094.25.097-.337-.441-1.048-1.102-1.434a2.076 2.076 0 0 0-2.034-.063l-.004.008Zm-8.208.224c-.637.412-1.004.923-.943 1.31.062.473.441.398 1.078-.212.821-.782 1.25-.782 2.07-.013.637.611.919.686 1.103.325.097-.187.048-.337-.246-.711-.857-1.097-2.02-1.359-3.062-.698Zm3.039 3.528c-.331.195-.245.56.232 1.055.54.536 1.299.91 1.862.923.547 0 1.29-.412 1.678-.923.65-.873.012-1.31-.784-.535-.245.237-.563.473-.71.511-.343.112-1.053-.195-1.409-.61-.38-.45-.612-.562-.87-.425v.004Z",
        fill: "#fff"
    })
}), undefined, '0 0 28 28');

// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(73696);
// EXTERNAL MODULE: ../icons/plugins/FileService.tsx
var FileService = __webpack_require__(47738);
// EXTERNAL MODULE: ../icons/plugins/Markets.tsx
var Markets = __webpack_require__(77122);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(71578);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(55535);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(18286);
;// CONCATENATED MODULE: ../dashboard/src/type.ts
var MarketTrendProvider;
(function(MarketTrendProvider) {
    MarketTrendProvider[MarketTrendProvider["COIN_GECKO"] = 0] = "COIN_GECKO";
    MarketTrendProvider[MarketTrendProvider["COIN_MARKET_CAP"] = 1] = "COIN_MARKET_CAP";
    MarketTrendProvider[MarketTrendProvider["UNISWAP_INFO"] = 2] = "UNISWAP_INFO";
})(MarketTrendProvider || (MarketTrendProvider = {}));

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(39297);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(51464);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js
var formControlLabelClasses = __webpack_require__(65499);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/RadioGroup/useRadioGroup.js
var useRadioGroup = __webpack_require__(30535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/FormControl/FormControl.js
var FormControl = __webpack_require__(91255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(51429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(83288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(37218);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/SettingItem.tsx



const StyledFormControlLabel = (0,styled/* default */.ZP)((props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
        ...props
    })
)(({ checked  })=>({
        [`& .${formControlLabelClasses/* default.label */.Z.label}`]: {
            color: checked ? src/* MaskColorVar.textPrimary */.ZN.textPrimary : src/* MaskColorVar.textSecondary */.ZN.textSecondary
        }
    })
);
function MyFormControlLabel(props) {
    const radioGroup = (0,useRadioGroup/* default */.Z)();
    let checked = false;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledFormControlLabel, {
        checked: checked,
        ...props
    }));
}
function SettingItem({ legend , options , value , onChange  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
        component: "fieldset",
        sx: {
            paddingBottom: '8px'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormLabel/* default */.Z, {
                component: "legend",
                sx: {
                    paddingBottom: '8px',
                    color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
                    fontWeight: '500'
                },
                children: legend
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioGroup/* default */.Z, {
                "aria-label": "gender",
                value: value,
                onChange: (event)=>{
                    return onChange === null || onChange === void 0 ? void 0 : onChange(event.target.value);
                },
                name: "radio-buttons-group",
                children: options.map((opt)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MyFormControlLabel, {
                        value: opt.value,
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                            size: "small"
                        }),
                        label: opt.label
                    }, opt.value)
                )
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/MarketTrendSettingDialog.tsx








function MarketTrendSettingDialog({ open , onClose  }) {
    const options = [
        {
            label: 'CoinGecko',
            value: MarketTrendProvider.COIN_GECKO
        },
        {
            label: 'CoinMarketCap',
            value: MarketTrendProvider.COIN_MARKET_CAP
        },
        {
            label: 'Uniswap Info',
            value: MarketTrendProvider.UNISWAP_INFO
        }, 
    ];
    const source = (0,api/* useTrendingDataSource */.Wg)();
    const t = (0,locales/* useDashboardI18N */.x)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        title: t.labs_settings_market_trend(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            sx: {
                padding: '16px 40px 24px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                legend: t.labs_settings_market_trend_source(),
                value: source,
                options: options,
                onChange: (value)=>API/* Services.Settings.setTrendingDataSource */.K9.Settings.setTrendingDataSource(+value)
            })
        })
    }));
};

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/constants.ts

const TUTORIAL_URLS_EN = {
    [plugin_infra_src/* PluginId.FileService */.je.FileService]: 'https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f',
    [plugin_infra_src/* PluginId.Gitcoin */.je.Gitcoin]: 'https://realmasknetwork.notion.site/Make-a-quick-Gitcoin-Grant-donation-98ed83784ed4446a8a13fa685c7bddfb',
    [plugin_infra_src/* PluginId.dHEDGE */.je.dHEDGE]: 'https://realmasknetwork.notion.site/Invest-in-your-favourite-fund-manager-via-dHEDGE-on-Twitter-ETH-and-Polygon-fb00ff2e626949279c83b59ed9207b9a',
    [plugin_infra_src/* PluginId.RedPacket */.je.RedPacket]: 'https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b',
    [plugin_infra_src/* PluginId.Transak */.je.Transak]: 'https://transak.com/',
    [plugin_infra_src/* PluginId.Collectible */.je.Collectible]: 'https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97',
    [plugin_infra_src/* PluginId.Trader */.je.Trader]: 'https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc',
    [plugin_infra_src/* PluginId.Snapshot */.je.Snapshot]: 'https://realmasknetwork.notion.site/Cast-a-Snapshot-vote-10c08ed9629942dd852d9afbfab61208',
    [plugin_infra_src/* PluginId.ITO */.je.ITO]: 'https://realmasknetwork.notion.site/Launch-an-ITO-Initial-Twitter-Offering-Support-ETH-BSC-Polygon-Arbitrum-d84c60903f974f4880d2085a13906d55',
    [plugin_infra_src/* PluginId.Valuables */.je.Valuables]: 'https://realmasknetwork.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-27424923ee454a4a9b0ed16fc5cb93d0',
    [plugin_infra_src/* PluginId.PoolTogether */.je.PoolTogether]: 'https://realmasknetwork.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-377597e14aff441ab645ecba5ea690f1',
    [plugin_infra_src/* PluginId.Pets */.je.Pets]: 'https://twitter.com/mintteamnft?s=21',
    [plugin_infra_src/* PluginId.GoodGhosting */.je.GoodGhosting]: 'https://realmasknetwork.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-f94aa38b01404b9c99c7a03935840962',
    [plugin_infra_src/* PluginId.MaskBox */.je.MaskBox]: 'https://realmasknetwork.notion.site/How-to-participate-in-a-MaskBox-sale-d0941687649a4ef7a38d71f23ecbe4da'
};
const TUTORIAL_URLS_CN = {
    [plugin_infra_src/* PluginId.FileService */.je.FileService]: 'https://realmaskbook.notion.site/Arweave-IPFS-SIA-Swarm-62d7d921630645b8b0a8f849f7c89e43',
    [plugin_infra_src/* PluginId.Gitcoin */.je.Gitcoin]: 'https://realmaskbook.notion.site/Mask-Twitter-Gitcoin-Grant-a6a8510ce7d8427399b97b95ed01eebe',
    [plugin_infra_src/* PluginId.dHEDGE */.je.dHEDGE]: 'https://realmaskbook.notion.site/dHEDGE-ETH-Polygon-a7640833342c4d3e85da105c3eab5338',
    [plugin_infra_src/* PluginId.RedPacket */.je.RedPacket]: 'https://realmaskbook.notion.site/Red-Packet-ETH-BSC-Polygon-23dfa6535c344fbdb31002d54704889d',
    [plugin_infra_src/* PluginId.Transak */.je.Transak]: 'https://transak.com/',
    [plugin_infra_src/* PluginId.Collectible */.je.Collectible]: 'https://realmaskbook.notion.site/Opensea-Rarible-NFT-NFT-8d824aaa7e3642ecb03b3371034ca780',
    [plugin_infra_src/* PluginId.Trader */.je.Trader]: 'https://realmaskbook.notion.site/Uniswap-Sushi-0x-ETH-BSC-Polygon-b1c132f0ce954e1ab7b6c1f6ea59de3a',
    [plugin_infra_src/* PluginId.Snapshot */.je.Snapshot]: 'https://realmaskbook.notion.site/Snapshot-639b65028903421a96060e7e47598313',
    [plugin_infra_src/* PluginId.ITO */.je.ITO]: 'https://realmaskbook.notion.site/ITO-ETH-BSC-Polygon-f6ec4ed424fe4884a53e254234a14f8e',
    [plugin_infra_src/* PluginId.Valuables */.je.Valuables]: 'https://realmaskbook.notion.site/Mask-Valuables-NFT-fb0654509984448295e71aab90221d2c',
    [plugin_infra_src/* PluginId.Poll */.je.Poll]: '',
    [plugin_infra_src/* PluginId.Pets */.je.Pets]: ''
};

// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(1365);
// EXTERNAL MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/index.tsx + 2 modules
var WalletStateBar = __webpack_require__(67324);
// EXTERNAL MODULE: ../dashboard/src/assets/index.ts
var assets = __webpack_require__(2908);
// EXTERNAL MODULE: ./src/resources/DHEDGEIcon.tsx
var DHEDGEIcon = __webpack_require__(6502);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(18906);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/TutorialDialog.tsx






function TutorialDialog({ open , onClose  }) {
    const t = (0,locales/* useDashboardI18N */.x)();
    const [checked, setChecked] = (0,react.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        maxWidth: "lg",
        title: t.labs_setup_tutorial(),
        open: open,
        onClose: ()=>onClose(checked)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                width: 800,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                        src: assets/* SetupTutorialURL.toString */.SV.toString()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: checked,
                            onChange: (e)=>setChecked(e.target.checked)
                        }),
                        label: t.labs_do_not_show_again(),
                        sx: {
                            marginTop: '8px'
                        }
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/index.tsx




















const Labs_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            flex: 1,
            borderRadius: Number(theme.shape.borderRadius) * 3,
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            padding: theme.spacing(2),
            marginBottom: theme.spacing(2),
            display: 'grid',
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(auto-fit, minmax(355px, 1fr))'
        }
    })
);
function PoolTogetherIcon() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
        src: assets/* PoolTogetherURL.toString */.am.toString(),
        width: 28,
        height: 28
    }));
}
function Plugins() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = Labs_useStyles();
    const location = (0,react_router/* useLocation */.TH)();
    const [openTrendSetting, setOpenTrendSetting] = (0,react.useState)(false);
    const [openSetupTutorial, setOpenSetupTutorial] = (0,react.useState)(!localStorage.getItem('dismissTutorialDialog'));
    const [pluginStatus, setPluginStatus] = (0,react.useState)({
        [plugin_infra_src/* PluginId.FileService */.je.FileService]: true,
        [plugin_infra_src/* PluginId.Gitcoin */.je.Gitcoin]: true,
        [plugin_infra_src/* PluginId.dHEDGE */.je.dHEDGE]: true,
        [plugin_infra_src/* PluginId.Pets */.je.Pets]: true,
        [plugin_infra_src/* PluginId.RedPacket */.je.RedPacket]: true,
        [plugin_infra_src/* PluginId.Transak */.je.Transak]: true,
        [plugin_infra_src/* PluginId.Collectible */.je.Collectible]: true,
        [plugin_infra_src/* PluginId.Trader */.je.Trader]: true,
        [plugin_infra_src/* PluginId.Snapshot */.je.Snapshot]: true,
        [plugin_infra_src/* PluginId.ITO */.je.ITO]: true,
        [plugin_infra_src/* PluginId.Valuables */.je.Valuables]: true,
        [plugin_infra_src/* PluginId.MaskBox */.je.MaskBox]: true,
        [plugin_infra_src/* PluginId.GoodGhosting */.je.GoodGhosting]: true,
        [plugin_infra_src/* PluginId.PoolTogether */.je.PoolTogether]: true
    });
    (0,react.useEffect)(()=>API/* Messages.events.pluginMinimalModeChanged.on */.Vm.events.pluginMinimalModeChanged.on(([id, newValue])=>setPluginStatus({
                ...pluginStatus,
                [id]: !newValue
            })
        )
    , [
        pluginStatus
    ]);
    const plugins = [
        {
            id: plugin_infra_src/* PluginId.RedPacket */.je.RedPacket,
            title: t.labs_red_packet(),
            desc: t.labs_red_packet_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.RedPacket */.je.RedPacket]
        },
        {
            id: plugin_infra_src/* PluginId.FileService */.je.FileService,
            title: t.labs_file_service(),
            desc: t.labs_file_service_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileService/* FileServiceIcon */.$, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.FileService */.je.FileService]
        },
        {
            id: plugin_infra_src/* PluginId.ITO */.je.ITO,
            title: t.labs_markets(),
            desc: t.labs_markets_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Markets/* MarketsIcon */.S, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.ITO */.je.ITO]
        },
        {
            id: plugin_infra_src/* PluginId.MaskBox */.je.MaskBox,
            title: t.labs_mask_box(),
            desc: t.labs_mask_box_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBoxIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.MaskBox */.je.MaskBox]
        },
        {
            id: plugin_infra_src/* PluginId.Trader */.je.Trader,
            title: t.labs_swap(),
            desc: t.labs_swap_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapServiceIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Trader */.je.Trader],
            setting: true,
            hideSwitch: true
        },
        {
            id: plugin_infra_src/* PluginId.Transak */.je.Transak,
            title: t.labs_transak(),
            desc: t.labs_transak_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransakIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Transak */.je.Transak],
            hideSwitch: true
        },
        {
            id: plugin_infra_src/* PluginId.Collectible */.je.Collectible,
            title: t.labs_collectibles(),
            desc: t.labs_collectibles_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectiblesIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Collectible */.je.Collectible]
        },
        {
            id: plugin_infra_src/* PluginId.Snapshot */.je.Snapshot,
            title: t.labs_snapshot(),
            desc: t.labs_snapshot_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Snapshot */.je.Snapshot]
        },
        {
            id: plugin_infra_src/* PluginId.Gitcoin */.je.Gitcoin,
            title: t.labs_gitcoin(),
            desc: t.labs_gitcoin_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Gitcoin */.je.Gitcoin]
        },
        {
            id: plugin_infra_src/* PluginId.Valuables */.je.Valuables,
            title: t.labs_valuables(),
            desc: t.labs_valuables_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ValuablesIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Valuables */.je.Valuables]
        },
        {
            id: plugin_infra_src/* PluginId.dHEDGE */.je.dHEDGE,
            title: t.labs_dhedge(),
            desc: t.labs_dhedge_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DHEDGEIcon/* DHEDGEIcon */.g, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.dHEDGE */.je.dHEDGE]
        },
        {
            id: plugin_infra_src/* PluginId.Pets */.je.Pets,
            title: t.labs_pets(),
            desc: t.labs_pets_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PetIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.Pets */.je.Pets]
        },
        {
            id: plugin_infra_src/* PluginId.GoodGhosting */.je.GoodGhosting,
            title: t.labs_good_ghosting(),
            desc: t.labs_good_ghosting_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GoogGhostingIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.GoodGhosting */.je.GoodGhosting]
        },
        {
            id: plugin_infra_src/* PluginId.PoolTogether */.je.PoolTogether,
            title: t.labs_pool_together(),
            desc: t.labs_pool_together_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PoolTogetherIcon, {}),
            enabled: pluginStatus[plugin_infra_src/* PluginId.PoolTogether */.je.PoolTogether]
        }, 
    ];
    const account = (0,useAccount/* useAccount */.m)();
    const { setDialog: setBuyDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const openTransakDialog = (0,react.useCallback)((code)=>{
        setBuyDialog({
            open: true,
            address: account,
            code
        });
    }, [
        account
    ]);
    const { openDialog: openSwapDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    const { openDialog: openEssayDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Pets.events.essayDialogUpdated */.yC.Pets.events.essayDialogUpdated);
    async function onSwitch(id, checked) {
        await API/* Services.Settings.setPluginMinimalModeEnabled */.K9.Settings.setPluginMinimalModeEnabled(id, !checked);
        setPluginStatus({
            ...pluginStatus,
            [id]: checked
        });
    }
    function onSetting(id) {
        if (id === plugin_infra_src/* PluginId.Trader */.je.Trader) {
            setOpenTrendSetting(true);
        }
    }
    function onTutorial(id) {
        const url = TUTORIAL_URLS_EN[id];
        if (url) {
            window.open(url, '_blank', 'noopener noreferrer');
        }
    }
    function onTutorialDialogClose(checked) {
        setOpenSetupTutorial(false);
        if (checked) {
            localStorage.setItem('dismissTutorialDialog', 'true');
        }
    }
    (0,react.useEffect)(()=>{
        Object.values(plugin_infra_src/* PluginId */.je).forEach(async (id)=>{
            const enabled = await API/* Services.Settings.getPluginMinimalModeEnabled */.K9.Settings.getPluginMinimalModeEnabled(id);
            setPluginStatus((status)=>({
                    ...status,
                    [id]: !enabled
                })
            );
        });
    }, []);
    (0,react.useEffect)(()=>{
        const search = new URLSearchParams(location.search);
        const open = search.get('open');
        const code = search.get('code');
        if (open === 'Transak') {
            openTransakDialog(code !== null && code !== void 0 ? code : '');
        } else if (open === 'Swap') {
            openSwapDialog();
        } else if (open === 'Pets') {
            openEssayDialog();
        }
    }, [
        location.search,
        openTransakDialog,
        openSwapDialog,
        openEssayDialog
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(PageFrame/* PageFrame */.C, {
        title: t.labs(),
        primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBar/* WalletStateBar */.$, {}),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                    className: classes.root,
                    children: plugins.map((p)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                            id: p.id,
                            title: p.title,
                            desc: p.desc,
                            icon: p.icon,
                            enabled: p.enabled,
                            onSwitch: onSwitch,
                            onTutorial: onTutorial,
                            onSetting: p.setting ? onSetting : undefined,
                            hideSwitch: p.hideSwitch
                        }, p.id)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketTrendSettingDialog, {
                open: openTrendSetting,
                onClose: ()=>setOpenTrendSetting(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TutorialDialog, {
                open: openSetupTutorial,
                onClose: onTutorialDialogClose
            })
        ]
    }));
};


/***/ }),

/***/ 39297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZK": () => (/* binding */ useLanguage),
/* harmony export */   "Wg": () => (/* binding */ useTrendingDataSource),
/* harmony export */   "Z3": () => (/* binding */ sendCode),
/* harmony export */   "iQ": () => (/* binding */ fetchUploadLink),
/* harmony export */   "iT": () => (/* binding */ fetchDownloadLink),
/* harmony export */   "VP": () => (/* binding */ verifyCode),
/* harmony export */   "Eu": () => (/* binding */ fetchBackupValue),
/* harmony export */   "zy": () => (/* binding */ uploadBackupValue)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21949);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18286);


const [useLanguage] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getLanguage */ .K9.Settings.getLanguage, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.languageSettings.on */ .Vm.events.languageSettings.on);
const [useTrendingDataSource] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTrendingDataSource */ .K9.Settings.getTrendingDataSource, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentDataProviderSettings.on */ .Vm.events.currentDataProviderSettings.on);
const BASE_RUL = 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api';
const withErrorMiddleware = (handler)=>async (res)=>{
        const result = await handler(res);
        if (!res.ok) {
            // eslint-disable-next-line no-throw-literal
            throw {
                status: res.status,
                ...result
            };
        }
        return result;
    }
;
const fetchBase = (input, init, handler = (res)=>res.json()
)=>fetch(input, init).then(withErrorMiddleware(handler))
;
const fetchBaseInstance = (baseURL)=>(input, init)=>fetchBase(`${baseURL}/${input}`, init)
;
const fetchBackupInstance = fetchBaseInstance(BASE_RUL);
const sendCode = ({ account , type , scenario , locale  })=>{
    return fetchBackupInstance('v1/backup/send_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            scenario,
            locale
        })
    });
};
const fetchUploadLink = ({ code , account , abstract , type  })=>{
    return fetchBackupInstance('v1/backup/upload', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', ''),
            abstract
        })
    }).then((res)=>res.upload_url
    );
};
const fetchDownloadLink = ({ account , code , type  })=>{
    return fetchBackupInstance('v1/backup/download', {
        method: 'POST',
        body: JSON.stringify({
            code,
            account_type: type,
            account: account.replace(' ', '')
        })
    }).then(({ abstract , download_url , size , uploaded_at  })=>{
        return {
            downloadURL: download_url,
            size: size,
            uploadedAt: uploaded_at,
            abstract: abstract
        };
    });
};
const verifyCode = ({ account , type , code  })=>{
    return fetchBackupInstance('v1/backup/validate_code', {
        method: 'POST',
        body: JSON.stringify({
            account: account.replace(' ', ''),
            account_type: type,
            code
        })
    });
};
const fetchBackupValue = (downloadLink)=>{
    return fetchBase(downloadLink, {
        method: 'GET'
    }, (res)=>res.arrayBuffer()
    );
};
const uploadBackupValue = (uploadLink, content)=>{
    return fetch(uploadLink, {
        method: 'PUT',
        // mode: 'no-cors',
        headers: new Headers({
            'content-type': 'application/octet-stream'
        }),
        body: content
    });
};


/***/ }),

/***/ 67324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ WalletStateBar)
});

// UNUSED EXPORTS: WalletStateBarUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(40675);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(87170);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../web3-shared/evm/utils/misc.ts
var misc = __webpack_require__(38350);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(21949);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(18286);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(19149);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(49861);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(13601);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/hooks/useRecentTransactions.ts




// todo: should merge in plugin infra package when plugin infra ready
function useRecentTransactions(options) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const result = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!account) return [];
        return API/* PluginServices.Wallet.getRecentTransactions */.NG.Wallet.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react.useEffect)(()=>API/* PluginMessages.Wallet.events.transactionStateUpdated.on */.yC.Wallet.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react.useEffect)(()=>API/* PluginMessages.Wallet.events.transactionsUpdated.on */.yC.Wallet.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(71578);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(9567);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(49097);
;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/useNetworkSelector.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        item: {
            minWidth: 130,
            paddingLeft: 8,
            paddingRight: 8,
            '&:first-child': {
                marginTop: '12px'
            },
            '&:last-child': {
                marginBottom: '12px'
            }
        }
    })
);
const useNetworkSelector = ()=>{
    const { classes  } = useStyles();
    const currentChainId = (0,plugin_infra_src/* useChainId */.xx)();
    const providerDescriptor = (0,plugin_infra_src/* useProviderDescriptor */.fY)();
    const networkDescriptors = (0,plugin_infra_src/* useNetworkDescriptors */.px)();
    var _SelectNetworkMenu;
    const { NetworkIconClickBait  } = (_SelectNetworkMenu = (0,plugin_infra_src/* useWeb3UI */.$d)().SelectNetworkMenu) !== null && _SelectNetworkMenu !== void 0 ? _SelectNetworkMenu : {};
    var ref;
    const networkMenu = (0,shared_src/* useMenu */.H9)(...(ref = networkDescriptors === null || networkDescriptors === void 0 ? void 0 : networkDescriptors.filter((x)=>x.isMainnet
    ).map((network)=>{
        const menuItem = /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            sx: {
                mx: 2,
                py: 1
            },
            classes: {
                root: classes.item
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                gap: 0.5,
                alignItems: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        width: 18,
                        children: network.chainId === currentChainId && /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {
                            sx: {
                                fontSize: 18
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        justifyContent: "center",
                        alignItems: "center",
                        width: 30,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                            networkIcon: network.icon,
                            size: 30
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        flex: 1,
                        children: network.name
                    })
                ]
            })
        }, network.ID);
        return NetworkIconClickBait && providerDescriptor ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIconClickBait, {
            network: network,
            provider: providerDescriptor,
            children: menuItem
        }) : menuItem;
    })) !== null && ref !== void 0 ? ref : []);
    return networkMenu;
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Wallets/components/WalletStateBar/index.tsx











const WalletStateBar_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        bar: {
            minWidth: 80,
            lineHeight: '28px',
            height: '28px',
            cursor: 'pointer',
            position: 'relative',
            '&::after': {
                borderRadius: 30,
                pointerEvents: 'none',
                content: '""',
                inset: 0,
                margin: 'auto',
                position: 'absolute',
                backgroundColor: 'var(--network-icon-color, transparent)',
                opacity: 0.1,
                zIndex: 0
            },
            '& > span': {
                position: 'relative',
                zIndex: 1
            }
        },
        dot: {
            position: 'relative',
            top: 0,
            display: 'inline-block',
            marginRight: theme.spacing(0.8),
            lineHeight: '28px',
            width: 10,
            height: 10,
            borderRadius: 5
        },
        domain: {
            fontSize: 14,
            marginLeft: 20,
            background: theme.palette.mode === 'dark' ? 'rgba(73, 137, 255, 0.2)' : 'rgba(28, 104, 243, 0.1)',
            padding: '2px 8px',
            borderRadius: 4
        }
    })
);
const WalletStateBar = /*#__PURE__*/ (0,react.memo)(()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const wallet = (0,plugin_infra_src/* useWallet */.Os)();
    const networkDescriptor = (0,plugin_infra_src/* useNetworkDescriptor */.Vw)();
    const providerDescriptor = (0,plugin_infra_src/* useProviderDescriptor */.fY)();
    const { value: pendingTransactions = misc/* EMPTY_LIST */.r  } = useRecentTransactions({
        status: types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND
    });
    const { openDialog: openWalletStatusDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Wallet.events.walletStatusDialogUpdated */.yC.Wallet.events.walletStatusDialogUpdated);
    const { openDialog: openConnectWalletDialog  } = (0,shared_src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Wallet.events.selectProviderDialogUpdated */.yC.Wallet.events.selectProviderDialogUpdated);
    const [menu, openMenu] = useNetworkSelector();
    const { value: domain  } = (0,plugin_infra_src/* useReverseAddress */.$q)(wallet === null || wallet === void 0 ? void 0 : wallet.address);
    if (!wallet) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: openConnectWalletDialog,
            children: t.wallets_connect_wallet_connect()
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStateBarUI, {
        isPending: !!pendingTransactions.length,
        wallet: wallet,
        domain: domain,
        network: networkDescriptor,
        provider: providerDescriptor,
        openConnectWalletDialog: openWalletStatusDialog,
        openMenu: openMenu,
        children: menu
    }));
});
const WalletStateBarUI = ({ isPending , network , provider , wallet , domain , openConnectWalletDialog , openMenu , children ,  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = WalletStateBar_useStyles();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    if (!wallet || !network || !provider) return null;
    var _iconColor;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "center",
        direction: "row",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    '--network-icon-color': network.iconColor,
                    px: 2,
                    mr: 1
                },
                color: (_iconColor = network.iconColor) !== null && _iconColor !== void 0 ? _iconColor : '',
                className: classes.bar,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        sx: {
                            backgroundColor: network.iconColor
                        },
                        className: classes.dot
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        children: network.name
                    })
                ]
            }),
            isPending && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                sx: {
                    borderRadius: 9999,
                    px: 2,
                    background: src/* MaskColorVar.orangeMain.alpha */.ZN.orangeMain.alpha(0.1),
                    color: src/* MaskColorVar.orangeMain */.ZN.orangeMain
                },
                className: classes.bar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* LoadingAnimation */.p6, {
                        sx: {
                            fontSize: 12,
                            mr: 0.8,
                            color: src/* MaskColorVar.orangeMain */.ZN.orangeMain
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "span",
                        fontSize: 12,
                        display: "inline-block",
                        children: t.wallet_transactions_pending()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                direction: "row",
                onClick: openConnectWalletDialog,
                sx: {
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                        mx: 1,
                        justifyContent: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                            providerIcon: provider.icon,
                            inverse: true,
                            size: 38
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            userSelect: 'none'
                        },
                        children: [
                            provider.type !== types/* ProviderType.MaskWallet */.lP.MaskWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? Utils.formatDomainName(domain) : provider.name
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                fontSize: 16,
                                display: "flex",
                                alignItems: "center",
                                children: [
                                    wallet.name,
                                    domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.domain,
                                        children: Utils.formatDomainName(domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                fontSize: 12,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                    address: wallet.address,
                                    size: 10,
                                    formatter: Utils === null || Utils === void 0 ? void 0 : Utils.formatAddress
                                })
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    }));
};


/***/ }),

/***/ 73696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const RedPacketIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('RedPacketIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.161s-.661-1.903 6.767-1.903c7.428 0 6.767 1.903 6.767 1.903v.82H3.765v-.82z",
            fill: "#DB1919"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "13.389",
            cy: "4.498",
            r: "1.96",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.515 4.062v.621h-1.96a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224h-1.804a.225.225 0 01-.226-.224V4.062h2.256zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.965 0a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.42-.832c.124 0 .225.1.225.223v.274H12.26v-.274c0-.123.101-.223.226-.223h1.805z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.484 4.498a1.96 1.96 0 11-3.92 0 1.96 1.96 0 013.92 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.65 4.062v.621H6.69a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224H6.62a.225.225 0 01-.226-.224V4.062H8.65zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.964 0a.35.35 0 00-.347.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.42-.832c.125 0 .226.1.226.223v.274H6.394v-.274c0-.123.101-.223.226-.223h1.804z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13.168 3.986a2.636 2.636 0 11-5.272 0 2.636 2.636 0 015.272 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.03 3.407v.825H9.426c.113.5.565.874 1.104.874.446 0 .831-.255 1.016-.627h.484v.693a.298.298 0 01-.3.297H9.333a.298.298 0 01-.3-.297V3.407h2.997zm-.771 1.072a.883.883 0 01-.73.382.883.883 0 01-.728-.382h1.457zM9.89 3.605a.465.465 0 00-.461.396h.255a.216.216 0 01.412 0h.255a.465.465 0 00-.461-.396zm1.282 0a.465.465 0 00-.462.396h.256a.216.216 0 01.206-.148c.096 0 .177.062.206.148h.255a.465.465 0 00-.461-.396zM11.73 2.5c.166 0 .3.133.3.297v.363H9.034v-.363c0-.164.134-.297.3-.297h2.396z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.215s2.511.753 6.754.753c4.243 0 6.78-.753 6.78-.753V17.75a1 1 0 01-1 1H4.765a1 1 0 01-1-1V5.215z",
            fill: "#F93737"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 49965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ }),

/***/ 49097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


/***/ }),

/***/ 77122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ MarketsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const MarketsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Markets', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.162 7.156c0 .5-.223.976-.627 1.409v2.011a7.002 7.002 0 1 1-3.478 13.486c-1.12.28-2.404.438-3.77.438-3.635 0-6.694-1.125-7.601-2.654h-.182v-.393a1.719 1.719 0 0 1 0-1.101V7.706a1.72 1.72 0 0 1-.092-.55c0-1.987 3.526-3.598 7.875-3.598 4.35 0 7.875 1.61 7.875 3.598Z",
            fill: "#FEDD18"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.948 8.791c-.497 0-2.975-.046-2.975-.993a.33.33 0 0 1 .657-.06c.158.142.973.391 2.318.391 1.17 0 1.94-.188 2.226-.33-.284-.143-1.053-.331-2.226-.331-.497 0-2.975-.047-2.975-.993s2.48-.993 2.975-.993c.495 0 2.975.047 2.975.993a.33.33 0 0 1-.656.06c-.158-.142-.973-.39-2.319-.39-1.17 0-1.938.188-2.225.33.284.142 1.052.33 2.225.33.498 0 2.975.047 2.975.993 0 .947-2.48.993-2.975.993Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 25.241c-4.285 0-7.77-3.486-7.77-7.771s3.486-7.771 7.77-7.771c4.285 0 7.771 3.489 7.771 7.774 0 4.284-3.486 7.768-7.77 7.768Zm0-14.547a6.786 6.786 0 0 0-6.778 6.779 6.786 6.786 0 0 0 6.778 6.778 6.786 6.786 0 0 0 6.779-6.778 6.786 6.786 0 0 0-6.779-6.779Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.618 9.207a.33.33 0 1 0 .661 0V5.239a.33.33 0 1 0-.661 0v3.968Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13.152 23.756c-.7.107-1.44.162-2.206.162-4.034 0-7.44-1.59-7.44-3.473a.52.52 0 0 0-.033-.172.521.521 0 0 0 .032-.173v-.828c1.409 1.4 4.181 2.332 7.44 2.332l.19-.002a7.847 7.847 0 0 1-.531-.993c-3.883-.088-7.101-1.638-7.101-3.467v-1.173c1.266 1.258 3.64 2.138 6.477 2.302a7.676 7.676 0 0 1-.04-.796c0-.065.002-.134.005-.2-3.582-.234-6.442-1.714-6.442-3.436V12.66c1.32 1.313 3.847 2.215 6.847 2.322.114-.34.251-.667.41-.985-3.954-.046-7.26-1.616-7.26-3.47V9.354c1.408 1.4 4.18 2.333 7.44 2.333.58 0 1.143-.03 1.687-.088a7.734 7.734 0 0 1 5.078-1.897c.09 0 .18.002.27.008.143-.115.28-.233.403-.356v.378c.336.03.667.079.992.15v-2.66c0-2.502-3.702-4.463-8.433-4.463-4.73 0-8.421 1.96-8.421 4.462v12.882c0 .06.013.118.032.172a.52.52 0 0 0-.032.173c0 2.502 3.702 4.462 8.432 4.462 1.258 0 2.442-.14 3.503-.39a7.516 7.516 0 0 1-1.299-.764ZM10.948 3.75c4.034 0 7.44 1.589 7.44 3.472 0 1.884-3.406 3.473-7.44 3.473-4.033 0-7.44-1.589-7.44-3.473 0-1.883 3.407-3.472 7.44-3.472Z",
            fill: "#FFB600"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 19.868c-1.113 0-1.985-.629-1.985-1.433a.33.33 0 1 1 .662 0c0 .41.618.771 1.323.771.706 0 1.324-.36 1.324-.77 0-.411-.618-.772-1.324-.772-1.113 0-1.985-.629-1.985-1.433s.872-1.433 1.985-1.433 1.985.63 1.985 1.433a.33.33 0 1 1-.661 0c0-.41-.618-.77-1.324-.77-.705 0-1.323.36-1.323.77 0 .41.618.771 1.323.771 1.113 0 1.985.63 1.985 1.433 0 .804-.872 1.433-1.985 1.433Z",
            fill: "#FFF4B3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.713 21.11a.33.33 0 0 1-.33-.331v-6.615a.33.33 0 1 1 .661 0v6.612a.33.33 0 0 1-.33.333Z",
            fill: "#FFF4B3"
        })
    ]
}), '0 0 28 28');


/***/ }),

/***/ 48737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c7c85948fa6af5df0e51.png";

/***/ }),

/***/ 33885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5d68edad1fba2deaeb8f.png";

/***/ }),

/***/ 56997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/cccd7f512da1eb0b76b8.png";

/***/ }),

/***/ 65564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b9761e20187cf2f5dd54.svg";

/***/ }),

/***/ 83754:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/113cffe822f49e239c50.png";

/***/ }),

/***/ 97351:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/22461b76dd69c61cc73b.png";

/***/ }),

/***/ 36242:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/52fd5c64700034442ae5.png";

/***/ })

}]);