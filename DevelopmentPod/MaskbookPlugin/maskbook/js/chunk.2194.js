"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2194],{

/***/ 62945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ PageFrame)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Drawer/Drawer.js
var Drawer = __webpack_require__(87052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/paperClasses.js
var paperClasses = __webpack_require__(53930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(93854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/AppBar/AppBar.js
var AppBar = __webpack_require__(49165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(18620);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(8166);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/esm/Menu.js
var Menu = __webpack_require__(43183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.2.3/node_modules/color/index.js
var color = __webpack_require__(88106);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/context.ts
var context = __webpack_require__(62684);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/Navigation.tsx + 7 modules
var Navigation = __webpack_require__(6562);
// EXTERNAL MODULE: ../icons/brands/MaskBanner.tsx
var MaskBanner = __webpack_require__(54689);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(90721);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(62490);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 3 modules
var usePersonaContext = __webpack_require__(19562);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var src_entry = __webpack_require__(79936);
;// CONCATENATED MODULE: ../dashboard/src/components/PageFrame/FeaturePromotions/index.tsx










const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
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
const FeaturePromotions = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,useAccount/* useAccount */.m)();
    const { currentPersona , connectPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { setDialog: setBuyDialog  } = (0,src/* useRemoteControlledDialog */.F$)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const isConnectedTwitter = (0,react.useMemo)(()=>{
        if (!currentPersona) return false;
        const { linkedProfiles  } = currentPersona;
        if (linkedProfiles.length === 0) return false;
        return !!linkedProfiles.find((profile)=>profile.identifier.network === shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter
        );
    }, [
        currentPersona
    ]);
    const openTransakDialog = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            address: account ?? ''
        });
    }, []);
    const openTwitter = (pluginId)=>async ()=>{
            if (!currentPersona) {
                navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp);
                return;
            }
            if (isConnectedTwitter) {
                await API/* Services.SocialNetwork.openSNSAndActivatePlugin */.K9.SocialNetwork.openSNSAndActivatePlugin('https://twitter.com/home', pluginId);
                return;
            }
            connectPersona(currentPersona.identifier, shared_base_src/* EnhanceableSite.Twitter */.Jk.Twitter);
        }
    ;
    const openMaskNetwork = ()=>(0,src/* openWindow */.xw)('https://twitter.com/realMaskNetwork')
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTwitter(src_entry/* PluginId.RedPacket */.je.RedPacket),
                src: new URL(/* asset import */ __webpack_require__(36242), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTransakDialog,
                src: new URL(/* asset import */ __webpack_require__(76580), __webpack_require__.b).toString()
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
    });
});

// EXTERNAL MODULE: ../dashboard/src/components/NavigationVersionFooter/index.tsx
var NavigationVersionFooter = __webpack_require__(39760);
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
        backgroundColor: theme.palette.mode === 'dark' ? '#1B1E38' : entry/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
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
const useStyle = (0,entry/* makeStyles */.ZL)()((theme)=>({
        toolbarGutters: {
            backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
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
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const { drawerOpen , toggleDrawer  } = (0,react.useContext)(context/* DashboardContext */.G);
    const showFeaturePromotions = featurePromotionsEnabled.some((path)=>path === location.pathname
    );
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    const { classes  } = useStyle();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ErrorBoundary */.SV, {
                                children: props.children
                            })
                        })
                    }),
                    showFeaturePromotions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturePromotions, {}) : null
                ]
            })
        ]
    });
});


/***/ }),

/***/ 12194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Settings)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../dashboard/src/components/PageFrame/index.tsx + 1 modules
var PageFrame = __webpack_require__(62945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(32831);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingCard.tsx



const Card = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        borderRadius: Number(theme.shape.borderRadius) * 3,
        backgroundColor: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
        padding: theme.spacing(5),
        marginBottom: theme.spacing(2)
    })
);
const CardTitle = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>({
        fontSize: 18,
        fontWeight: 600,
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(4)
    })
);
function SettingCard(props) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CardTitle, {
                children: props.title
            }),
            props.children
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(40006);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(43754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(65621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingItem.tsx



const IconWrapper = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)(({ theme  })=>({
        alignItems: 'center',
        justifyContent: 'center',
        width: 64,
        height: 64,
        borderRadius: '50%',
        background: entry/* MaskColorVar.infoBackground */.ZN.infoBackground,
        marginRight: theme.spacing(3),
        color: 'transparent'
    })
);
const TextWrapper = (0,styled/* default */.ZP)(ListItemText/* default */.Z)(({ theme  })=>({
        [`& .${listItemTextClasses/* default.primary */.Z.primary}`]: {
            fontWeight: '600',
            fontSize: 18,
            paddingBottom: theme.spacing(2)
        },
        [`&.${listItemTextClasses/* default.root */.Z.root}.error .${listItemTextClasses/* default.secondary */.Z.secondary}`]: {
            color: theme.palette.error.main
        }
    })
);
function SettingItem(props) {
    const { title , desc , icon , error =false  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        sx: {
            paddingLeft: 0
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconWrapper, {
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TextWrapper, {
                primary: title,
                secondary: desc,
                className: error ? 'error' : undefined
            }),
            props.children
        ]
    });
};

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(13020);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(15679);
;// CONCATENATED MODULE: ../icons/settings/SettingsBackup.tsx


const SettingsBackupIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
            stroke: "#1C68F3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 21v-8H7v8M7 3v5h8",
            stroke: "#1C68F3",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z",
            stroke: "#fff",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 21v-8H7v8M7 3v5h8",
            stroke: "#fff",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 24 24');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/buttonClasses.js
var buttonClasses = __webpack_require__(64981);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingButton.tsx

/* harmony default export */ const SettingButton = ((0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        [`&.${buttonClasses/* default.root */.Z.root}`]: {
            padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
            borderRadius: 24,
            minWidth: 140
        }
    })
));

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(62490);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(73570);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(30688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(41197);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupContentSelector.tsx





const SelectItem = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        borderRadius: 8,
        backgroundColor: entry/* MaskColorVar.lightBackground */.ZN.lightBackground,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex'
    })
);
const CheckboxContainer = (0,styled/* default */.ZP)('div')(()=>({
        width: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    })
);
const BackupItem = (0,styled/* default */.ZP)('div')(()=>({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 0'
    })
);
function BackupContentSelector({ json , onChange  }) {
    const t = (0,locales/* useDashboardI18N */.x)();
    const records = [
        {
            name: t.settings_backup_preview_personas(),
            value: json.personas
        },
        {
            name: t.settings_backup_preview_associated_account(),
            value: json.accounts,
            sub: true
        },
        {
            name: t.settings_backup_preview_posts(),
            value: json.posts,
            sub: true
        },
        {
            name: t.settings_backup_preview_contacts(),
            value: json.contacts,
            sub: true
        },
        {
            name: t.settings_backup_preview_fils(),
            value: json.files,
            sub: true
        }, 
    ];
    const [baseChecked, setBaseChecked] = (0,react.useState)(true);
    const [walletChecked, setWalletChecked] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        onChange({
            baseChecked,
            walletChecked
        });
    }, [
        baseChecked,
        walletChecked
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(SelectItem, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: baseChecked,
                            onChange: (event)=>setBaseChecked(event.target.checked)
                            ,
                            name: "base"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            flex: 1
                        },
                        children: records.map((record, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(BackupItem, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        children: record.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        children: record.value
                                    })
                                ]
                            }, idx)
                        )
                    })
                ]
            }),
            json.wallets ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(SelectItem, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                            checked: walletChecked,
                            onChange: (event)=>setWalletChecked(event.target.checked)
                            ,
                            name: "wallet"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(BackupItem, {
                        sx: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: t.settings_backup_preview_wallets()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body2",
                                children: json.wallets
                            })
                        ]
                    })
                ]
            }) : null
        ]
    });
};

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx + 1 modules
var UserContext = __webpack_require__(90868);
// EXTERNAL MODULE: ../dashboard/src/components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(22885);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(64189);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/steps/LoadingCard.tsx
var LoadingCard = __webpack_require__(73436);
// EXTERNAL MODULE: ../backup-format/src/index.ts + 3 modules
var src = __webpack_require__(33723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(24278);
// EXTERNAL MODULE: ../dashboard/src/components/MaskAlert/index.tsx
var MaskAlert = __webpack_require__(85652);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/BackupDialog.tsx

















function BackupDialog({ local =true , params , open , merged , onClose  }) {
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const [backupPassword, setBackupPassword] = (0,react.useState)('');
    const [paymentPassword, setPaymentPassword] = (0,react.useState)('');
    const [incorrectBackupPassword, setIncorrectBackupPassword] = (0,react.useState)(false);
    const [incorrectPaymentPassword, setIncorrectPaymentPassword] = (0,react.useState)(false);
    const [showPassword, setShowPassword] = (0,react.useState)({
        base: true,
        wallet: false
    });
    const title = local ? t.settings_local_backup() : t.settings_cloud_backup();
    const { user , updateUser  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { value: previewInfo , loading: searching  } = (0,useAsync/* default */.Z)(()=>API/* Services.Welcome.generateBackupPreviewInfo */.K9.Welcome.generateBackupPreviewInfo()
    );
    const [{ loading  }, handleBackup] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (backupPassword !== user.backupPassword) {
            setIncorrectBackupPassword(true);
            return;
        }
        try {
            if (showPassword.wallet) {
                const verified = await API/* PluginServices.Wallet.verifyPassword */.NG.Wallet.verifyPassword(paymentPassword);
                if (!verified) {
                    setIncorrectPaymentPassword(true);
                    return;
                }
            }
            const fileJson = await API/* Services.Welcome.createBackupFile */.K9.Welcome.createBackupFile({
                noPosts: !showPassword.base,
                noPersonas: !showPassword.base,
                noProfiles: !showPassword.base,
                noWallets: !showPassword.wallet,
                download: false,
                onlyBackupWhoAmI: false
            });
            if (local) {
                // local backup, no account
                const encrypted = await (0,src/* encryptBackup */.Hb)((0,encode/* encode */.c)(backupPassword), (0,encode/* encode */.c)(fileJson));
                await API/* Services.Welcome.downloadBackupV2 */.K9.Welcome.downloadBackupV2(encrypted);
            } else if (params) {
                const abstract = fileJson.personas.filter((x)=>x.nickname
                ).map((x)=>x.nickname
                ).join(', ');
                const uploadUrl = await (0,api/* fetchUploadLink */.iQ)({
                    ...params,
                    abstract
                });
                const encrypted = await (0,src/* encryptBackup */.Hb)((0,encode/* encode */.c)(params.account + backupPassword), (0,encode/* encode */.c)(fileJson));
                (0,api/* uploadBackupValue */.zy)(uploadUrl, encrypted).then(()=>{
                    showSnackbar(t.settings_alert_backup_success(), {
                        variant: 'success'
                    });
                });
            }
            updateUser({
                backupMethod: local ? 'local' : 'cloud',
                backupAt: (0,format/* default */.Z)(new Date(), 'yyyy-MM-dd HH:mm')
            });
            onClose();
        } catch  {
            showSnackbar(t.settings_alert_backup_fail(), {
                variant: 'error'
            });
        }
    }, [
        backupPassword,
        paymentPassword
    ]);
    const handleContentChange = ({ baseChecked , walletChecked  })=>{
        setShowPassword({
            base: baseChecked,
            wallet: walletChecked
        });
    };
    const backupDisabled = (0,react.useMemo)(()=>{
        return !backupPassword || showPassword.wallet && !paymentPassword || loading;
    }, [
        backupPassword,
        paymentPassword,
        loading
    ]);
    (0,react.useEffect)(()=>{
        setIncorrectBackupPassword(false);
    }, [
        backupPassword
    ]);
    (0,react.useEffect)(()=>{
        setIncorrectPaymentPassword(false);
    }, [
        paymentPassword
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        maxWidth: "xs",
        title: title,
        open: open,
        onClose: onClose,
        children: searching ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingCard/* LoadingCard */.W, {
                text: t.searching()
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: [
                merged ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        marginBottom: '16px'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAlert/* MaskAlert */.Q, {
                        description: t.settings_dialogs_backup_merged_tip(),
                        type: "success"
                    })
                }) : null,
                previewInfo ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupContentSelector, {
                    json: previewInfo,
                    onChange: handleContentChange
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                    fullWidth: true,
                    value: backupPassword,
                    onChange: (event)=>setBackupPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: incorrectBackupPassword,
                    helperText: incorrectBackupPassword ? t.settings_dialogs_incorrect_password() : ''
                }),
                showPassword.wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                    fullWidth: true,
                    value: paymentPassword,
                    onChange: (event)=>setPaymentPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_payment_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: incorrectPaymentPassword,
                    helperText: incorrectPaymentPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    fullWidth: true,
                    disabled: backupDisabled,
                    onClick: handleBackup,
                    loading: loading,
                    children: t.settings_button_backup()
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(26405);
;// CONCATENATED MODULE: ../icons/general/LocalBackup.tsx


const LocalBackupIcon = (0,utils/* createIcon */.I)('LocalBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.666 29.587c0-3.085 2.635-5.587 5.886-5.587h30.896c3.25 0 5.885 2.502 5.885 5.587v18.159c0 3.086-2.635 5.587-5.885 5.587H16.552c-3.25 0-5.886-2.501-5.886-5.587V29.587z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.566 11.182c.532 0 .963.431.963.963v6.736h6.736a.962.962 0 110 1.924h-7.699a.962.962 0 01-.962-.962v-7.698c0-.532.43-.963.962-.963zM37.776 25.219c0-.532.43-.963.962-.963h7.699c.531 0 .962.431.962.963v7.698a.962.962 0 11-1.925 0v-6.736h-6.736a.962.962 0 01-.962-.962z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.458 9.585c2.074-.632 4.265-.7 6.37-.198a12.555 12.555 0 015.668 3.071 13.537 13.537 0 013.557 5.577c.181.54-.087 1.132-.599 1.323-.511.191-1.073-.092-1.254-.631a11.455 11.455 0 00-3.01-4.72 10.623 10.623 0 00-4.796-2.598 10.27 10.27 0 00-5.39.168 10.708 10.708 0 00-4.664 2.915l-6.08 6.026a.947.947 0 01-1.39-.045 1.077 1.077 0 01.044-1.465l6.07-6.016a12.654 12.654 0 015.474-3.407zm18.674 14.997a1.077 1.077 0 01-.043 1.465l-6.07 6.015a12.655 12.655 0 01-5.475 3.407c-2.073.633-4.265.7-6.37.199a12.554 12.554 0 01-5.668-3.072 13.537 13.537 0 01-3.557-5.576c-.18-.54.087-1.133.6-1.324.51-.19 1.072.092 1.253.632a11.455 11.455 0 003.01 4.719 10.623 10.623 0 004.796 2.598c1.781.426 3.636.368 5.39-.167a10.708 10.708 0 004.664-2.916l6.08-6.026a.947.947 0 011.39.046z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.666 34.386c0-2.79 2.635-5.053 5.886-5.053h30.896c3.25 0 5.885 2.263 5.885 5.053v13.895c0 2.79-2.635 5.052-5.885 5.052H16.552c-3.25 0-5.886-2.262-5.886-5.052V34.386z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "6.667",
                    y: "20",
                    width: "50.667",
                    height: "37.333",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "7.667",
                    y: "26.333",
                    width: "48.667",
                    height: "30",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "1.5"
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
}), '0 0 60 60');

;// CONCATENATED MODULE: ../icons/general/CloudBackup.tsx


const CloudBackupIcon = (0,utils/* createIcon */.I)('CloudBackupIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.566 16.516c.531 0 .962.43.962.962v6.736h6.737a.962.962 0 010 1.925h-7.7a.962.962 0 01-.962-.962v-7.699c0-.532.431-.962.963-.962zM37.775 30.552c0-.531.431-.962.963-.962h7.698c.532 0 .963.43.963.962v7.699a.962.962 0 11-1.925 0v-6.736h-6.736a.962.962 0 01-.963-.963z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M28.458 14.919c2.073-.633 4.265-.701 6.37-.199a12.554 12.554 0 015.668 3.071 13.538 13.538 0 013.556 5.577c.182.54-.086 1.132-.598 1.323-.512.191-1.073-.091-1.255-.631a11.456 11.456 0 00-3.009-4.719 10.622 10.622 0 00-4.796-2.599 10.27 10.27 0 00-5.39.168 10.709 10.709 0 00-4.664 2.916l-6.08 6.026a.947.947 0 01-1.39-.046 1.077 1.077 0 01.043-1.465l6.07-6.015a12.653 12.653 0 015.475-3.407zM47.13 29.915a1.077 1.077 0 01-.043 1.465l-6.07 6.015a12.655 12.655 0 01-5.474 3.407c-2.074.633-4.265.701-6.37.199a12.554 12.554 0 01-5.668-3.071 13.538 13.538 0 01-3.557-5.577c-.181-.54.087-1.132.599-1.323.511-.191 1.073.091 1.254.631a11.455 11.455 0 003.01 4.72 10.622 10.622 0 004.796 2.598 10.27 10.27 0 005.39-.168 10.71 10.71 0 004.664-2.915l6.08-6.027a.947.947 0 011.39.046z",
            fill: "#1C68F3",
            stroke: "#1C68F3",
            strokeWidth: ".2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M43 36.666a12.545 12.545 0 00-12.334-10c-4.833 0-9 2.667-11 6.672-5.166.662-9 4.824-9 10 0 5.495 4.5 9.995 10 9.995h21.667a8.253 8.253 0 008.334-8.175v-.16c0-4.333-3.5-7.998-7.667-8.336",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                id: "filter0_b",
                x: "7.667",
                y: "23.667",
                width: "46",
                height: "32.667",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("feGaussianBlur", {
                        in: "BackgroundImage",
                        stdDeviation: "1.5"
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
        })
    ]
}), '0 0 60 60');

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/BackupModeSelectDialog.tsx








const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            height: '220px',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingBottom: '20px'
        },
        mode: {
            position: 'relative',
            width: '110px',
            height: '116px',
            background: entry/* MaskColorVar.lightBackground */.ZN.lightBackground,
            textAlign: 'center',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:not(.disabled):hover': {
                background: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
                boxShadow: '3px 6px 15px rgba(28, 104, 243, 0.1)'
            }
        },
        icon: {
            width: '60px',
            height: '60px'
        },
        label: {
            paddingTop: '10px',
            fontSize: '13px'
        },
        mask: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            borderRadius: '8px',
            background: theme.palette.mode === 'dark' ? 'rgba(0,0,0,.4)' : 'rgba(255,255,255,.4)'
        }
    })
);
function BackupModeSelectDialog({ open , onClose , onSelect  }) {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = useStyles();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const cloudDisabled = (0,react.useMemo)(()=>{
        return !user.email && !user.phone;
    }, [
        user.email,
        user.phone
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        title: t.settings_button_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.mode,
                        onClick: ()=>onSelect('local')
                        ,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LocalBackupIcon, {
                                className: classes.icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: "Local Backup"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classnames_default()(classes.mode, cloudDisabled && 'disabled'),
                        children: [
                            cloudDisabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
                                title: t.settings_dialogs_bind_email_or_phone(),
                                placement: "top",
                                arrow: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.mask
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupIcon, {
                                className: classes.icon,
                                onClick: ()=>onSelect('cloud')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                children: "Cloud Backup"
                            })
                        ]
                    })
                ]
            })
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(82651);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControlLabel/formControlLabelClasses.js
var formControlLabelClasses = __webpack_require__(83988);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(25557);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(20750);
// EXTERNAL MODULE: ../dashboard/src/components/Restore/BackupInfoCard.tsx
var BackupInfoCard = __webpack_require__(45566);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/CloudBackupMergeDialog.tsx













const StyledFormControlLabel = (0,styled/* default */.ZP)(FormControlLabel/* default */.Z)({
    [`&.${formControlLabelClasses/* default.root */.Z.root}`]: {
        background: entry/* MaskColorVar.lightBackground */.ZN.lightBackground,
        margin: '0',
        padding: '2px 0',
        borderRadius: 8
    },
    [`& .${formControlLabelClasses/* default.label */.Z.label}`]: {
        fontSize: 14
    }
});
const CloudBackupMergeDialog_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        helpContent: {
            fontSize: '13px',
            padding: '12px 0',
            color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
        }
    })
);
function CloudBackupMergeDialog({ account , info , open , onClose , onMerged  }) {
    const [mode, setMode] = (0,react.useState)('1');
    const [backupPassword, setBackupPassword] = (0,react.useState)('');
    const [incorrectBackupPassword, setIncorrectBackupPassword] = (0,react.useState)(false);
    const t = (0,locales/* useDashboardI18N */.x)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { classes  } = CloudBackupMergeDialog_useStyles();
    const restoreCallback = (0,react.useCallback)(()=>{
        onMerged(true);
        showSnackbar(t.settings_alert_merge_success(), {
            variant: 'success'
        });
    }, [
        onMerged,
        showSnackbar
    ]);
    const [{ loading  }, handleMerge] = (0,useAsyncFn/* default */.Z)(async ()=>{
        try {
            const encrypted = await (0,api/* fetchBackupValue */.Eu)(info.downloadURL);
            const decrypted = await (0,src/* decryptBackup */.lK)((0,encode/* encode */.c)(account + backupPassword), encrypted);
            const backupText = JSON.stringify((0,decode/* decode */.Jx)(decrypted));
            const data = await API/* Services.Welcome.parseBackupStr */.K9.Welcome.parseBackupStr(backupText);
            if (data?.info.wallets) {
                await API/* Services.Welcome.checkPermissionAndOpenWalletRecovery */.K9.Welcome.checkPermissionAndOpenWalletRecovery(data.id);
                return;
            } else {
                if (data?.id) {
                    await API/* Services.Welcome.checkPermissionsAndRestore */.K9.Welcome.checkPermissionsAndRestore(data.id);
                }
                restoreCallback();
                setBackupPassword('');
            }
        } catch (error) {
            setIncorrectBackupPassword(true);
        }
    }, [
        backupPassword,
        account,
        info
    ]);
    const onBackup = async ()=>{
        if (mode === '1') {
            onMerged(false);
        } else {
            handleMerge();
        }
    };
    (0,react.useEffect)(()=>{
        setIncorrectBackupPassword(false);
    }, [
        backupPassword
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.restoreSuccess.on */.Vm.events.restoreSuccess.on(restoreCallback);
    }, [
        restoreCallback
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        maxWidth: "xs",
        title: t.settings_cloud_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '0 24px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupInfoCard/* BackupInfoCard */.g, {
                    info: info
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioGroup/* default */.Z, {
                    "aria-label": "mode",
                    name: "mode",
                    value: mode,
                    onChange: (e)=>setMode(e.target.value)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledFormControlLabel, {
                            value: "1",
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                                size: "small"
                            }),
                            label: t.settings_dialogs_backup_to_cloud(),
                            style: {
                                marginTop: '24px'
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.helpContent,
                            children: t.settings_dialogs_backup_to_cloud_action()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledFormControlLabel, {
                            sx: {
                                fontSize: 14
                            },
                            value: "2",
                            control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Radio/* default */.Z, {
                                size: "small"
                            }),
                            label: t.settings_dialogs_merge_to_local_data()
                        })
                    ]
                }),
                mode === '2' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                    sx: {
                        marginTop: '12px'
                    },
                    fullWidth: true,
                    value: backupPassword,
                    onChange: (event)=>setBackupPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_backup_password_cloud(),
                    error: incorrectBackupPassword,
                    helperText: incorrectBackupPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.helpContent,
                    children: t.settings_dialogs_backup_merge_cloud()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    fullWidth: true,
                    onClick: onBackup,
                    loading: loading,
                    disabled: incorrectBackupPassword,
                    children: t.settings_button_backup()
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Select/Select.js + 3 modules
var Select = __webpack_require__(75879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/type.ts
var type = __webpack_require__(85834);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/CloudBackupVerifyDialog.tsx










function CloudBackupVerifyDialog({ open , onClose , onNext  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [mode, setMode] = (0,react.useState)(user.email || user.phone || '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    const params = (0,react.useMemo)(()=>{
        return {
            account: mode,
            type: mode.includes('@') ? type/* AccountType.email */.Qm.email : type/* AccountType.phone */.Qm.phone,
            scenario: type/* Scenario.backup */.$4.backup,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en,
            code
        };
    }, [
        mode,
        code
    ]);
    const sendVerifyCode = async ()=>{
        const res = await (0,api/* sendCode */.Z3)(params).catch((error)=>showSnackbar(error.message, {
                variant: 'error'
            })
        );
        if (res) {
            showSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }
    };
    const [{ loading  }, handleNext] = (0,useAsyncFn/* default */.Z)(async ()=>{
        const res = await (0,api/* fetchDownloadLink */.iT)(params).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            } else if (error.status === 404) {
                onNext({
                    params
                });
            }
        });
        if (res) {
            onNext({
                fileInfo: res,
                params
            });
        }
    }, [
        params
    ]);
    (0,react.useEffect)(()=>{
        setInvalidCode(false);
    }, [
        code
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskDialog */.Df, {
        title: t.settings_cloud_backup(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            sx: {
                padding: '10px 24px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                    value: mode,
                    onChange: (event)=>setMode(event.target.value)
                    ,
                    fullWidth: true,
                    size: "small",
                    sx: {
                        background: entry/* MaskColorVar.normalBackground */.ZN.normalBackground
                    },
                    children: [
                        user.email ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: user.email,
                            children: user.email
                        }) : null,
                        user.phone ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: user.phone,
                            children: user.phone
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '24px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '24px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* CountdownButton */.qA, {
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            repeatContent: t.resend(),
                            onClick: sendVerifyCode,
                            children: t.send()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* LoadingButton */.f, {
                    fullWidth: true,
                    sx: {
                        marginTop: '24px'
                    },
                    onClick: handleNext,
                    loading: loading,
                    children: t.next()
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0_react@18.0.0/node_modules/react-router/index.js
var react_router = __webpack_require__(10459);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupSetting.tsx










function BackupSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { ensurePasswordSet  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [merged1, setMerged] = (0,react.useState)(false);
    const [showDialog, setShowDialog] = (0,react.useState)({
        backup: false,
        mode: false,
        verify: false,
        merge: false
    });
    const [localMode, setLocalMode] = (0,react.useState)(true);
    const [params1, setParams] = (0,react.useState)(undefined);
    const [cloudFileInfo, setCloudFileInfo] = (0,react.useState)(undefined);
    (0,react.useEffect)(()=>{
        if (!state?.open || state?.open !== 'setting') return;
        ensurePasswordSet(()=>setShowDialog({
                ...showDialog,
                mode: true
            })
        );
    }, [
        state?.open
    ]);
    const onBackup = ()=>{
        ensurePasswordSet(()=>setShowDialog({
                ...showDialog,
                mode: true
            })
        );
    };
    const onSelectMode = (mode)=>{
        if (mode === 'cloud') {
            setLocalMode(false);
            setShowDialog({
                ...showDialog,
                mode: false,
                verify: true
            });
        } else {
            setLocalMode(true);
            setShowDialog({
                ...showDialog,
                mode: false,
                backup: true
            });
        }
    };
    const handleVerified = ({ fileInfo , params  })=>{
        setParams(params);
        if (fileInfo) {
            setCloudFileInfo(fileInfo);
            setShowDialog({
                ...showDialog,
                verify: false,
                merge: true
            });
        } else {
            setShowDialog({
                ...showDialog,
                verify: false,
                backup: true
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                size: "large",
                onClick: onBackup,
                children: t.settings_button_backup()
            }),
            showDialog.backup ? /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupDialog, {
                local: localMode,
                params: params1,
                open: showDialog.backup,
                merged: merged1,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        backup: false
                    })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupModeSelectDialog, {
                open: showDialog.mode,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        mode: false
                    })
                ,
                onSelect: onSelectMode
            }),
            showDialog.verify ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupVerifyDialog, {
                open: showDialog.verify,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        verify: false
                    })
                ,
                onNext: handleVerified
            }) : null,
            cloudFileInfo && params1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CloudBackupMergeDialog, {
                account: params1.account,
                info: cloudFileInfo,
                open: showDialog.merge,
                onClose: ()=>setShowDialog({
                        ...showDialog,
                        merge: false
                    })
                ,
                onMerged: (merged)=>{
                    setMerged(merged);
                    setShowDialog({
                        ...showDialog,
                        merge: false,
                        backup: true
                    });
                }
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/BackupSettingItem.tsx







function BackupSettingItem() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [desc, setDesc] = (0,react.useState)(t.settings_global_backup_desc());
    (0,react.useEffect)(()=>{
        if (!user.backupAt) return;
        const method = user.backupMethod === 'local' ? t.settings_local_backup() : t.settings_cloud_backup();
        const last = t.settings_global_backup_last({
            backupMethod: method,
            backupAt: user.backupAt
        });
        setDesc(last);
    }, [
        user.backupAt
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsBackupIcon, {}),
        title: t.settings_global_backup_title(),
        desc: user.backupAt ? desc : t.settings_global_backup_desc(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupSetting, {})
    });
};

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPasswordDialog.tsx
var SettingPasswordDialog = __webpack_require__(10366);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PasswordSetting.tsx







function PasswordSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { state  } = (0,react_router/* useLocation */.TH)();
    const [openSettingDialog, setOpenSettingDialog] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (!state?.open || state?.open !== 'password') return;
        setOpenSettingDialog(true);
    }, [
        state?.open
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                size: "large",
                onClick: ()=>setOpenSettingDialog(true)
                ,
                children: user.backupPassword ? t.settings_button_change() : t.settings_button_setup()
            }),
            openSettingDialog ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog/* default */.Z, {
                open: openSettingDialog,
                onClose: ()=>setOpenSettingDialog(false)
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ../icons/settings/SettingsPassword.tsx


const SettingsPasswordIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsPasswordIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777v-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M15.5 7.5L19 4m2-2l-2 2 2-2zm-9.61 9.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777v-.001zm0 0L15.5 7.5l-4.11 4.11zM15.5 7.5l3 3L22 7l-3-3-3.5 3.5z",
        stroke: "#fff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PasswordSettingItem.tsx







function PasswordSettingItem() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPasswordIcon, {}),
        title: t.settings_change_password_title(),
        desc: user.backupPassword ? t.settings_change_password_desc() : t.settings_change_password_not_set(),
        error: !user.backupPassword,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordSetting, {})
    });
};

// EXTERNAL MODULE: ../dashboard/src/components/ConfirmDialog/index.tsx
var ConfirmDialog = __webpack_require__(78482);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/regexp.ts
var regexp = __webpack_require__(66210);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingEmailDialog.tsx












const SettingEmailDialog_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        minHeight: 180,
        paddingLeft: 20,
        paddingRight: 20
    }
});
function SettingEmailDialog({ open , onClose  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = SettingEmailDialog_useStyles();
    const { user , updateUser  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [step, setStep] = (0,react.useState)(user.email ? 0 : 1);
    const [email, setEmail] = (0,react.useState)(user.email ?? '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidEmail, setInvalidEmail] = (0,react.useState)(false);
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    // cloud backup
    const [backupInfo, setBackupInfo] = (0,react.useState)({
        url: '',
        abstract: ''
    });
    const sendButton = (0,react.useRef)(null);
    const handleClose = ()=>{
        onClose();
    };
    const handleConfirm = async ()=>{
        if (step === 1) {
            if (email && !invalidEmail) {
                setStep(2);
            } else {
                validCheck();
            }
        } else {
            const params = {
                account: email,
                type: type/* AccountType.email */.Qm.email,
                code
            };
            if (step === 0) {
                return checkCloudBackup(params);
            } else if (backupInfo.abstract) {
                return uploadCloudBackup(params);
            }
            const result = await (0,api/* verifyCode */.VP)(params).catch((err)=>{
                if (err.status === 400) {
                    // incorrect code
                    setInvalidCode(true);
                }
            });
            if (result) {
                onSuccess();
            }
        }
    };
    const originalEmailVerified = ()=>{
        setEmail('');
        setCode('');
        setStep(1);
    };
    const onSuccess = ()=>{
        const msg = user.email ? t.settings_alert_email_updated() : t.settings_alert_email_set();
        showSnackbar(msg, {
            variant: 'success'
        });
        updateUser({
            email
        });
        onClose();
    };
    const checkCloudBackup = async (params)=>{
        const res = await (0,api/* fetchDownloadLink */.iT)(params).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            } else if (error.status === 404) {
                // no cloud backup file
                originalEmailVerified();
            }
        });
        if (res) {
            originalEmailVerified();
            setBackupInfo({
                url: res.downloadURL,
                abstract: res.abstract
            });
        }
    };
    const uploadCloudBackup = async (params)=>{
        if (!user.email || !user.backupPassword) return;
        const encrypted = await (0,api/* fetchBackupValue */.Eu)(backupInfo.url);
        const decrypted = await (0,src/* decryptBackup */.lK)((0,encode/* encode */.c)(user.email + user.backupPassword), encrypted);
        const data = await (0,src/* encryptBackup */.Hb)((0,encode/* encode */.c)(email + user.backupPassword), decrypted);
        const uploadUrl = await (0,api/* fetchUploadLink */.iQ)({
            ...params,
            abstract: backupInfo.abstract
        }).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            }
        });
        if (uploadUrl) {
            await (0,api/* uploadBackupValue */.zy)(uploadUrl, data);
            onSuccess();
        }
    };
    const validCheck = ()=>{
        if (!email) return setInvalidEmail(true);
        const isValid = regexp/* emailRegexp.test */.LX.test(email);
        setInvalidEmail(!isValid);
    };
    const sendValidationEmail = async ()=>{
        const res = await (0,api/* sendCode */.Z3)({
            account: email,
            type: type/* AccountType.email */.Qm.email,
            scenario: user.email ? type/* Scenario.change */.$4.change : type/* Scenario.create */.$4.create,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en
        }).catch((error)=>{
            showSnackbar(error.message, {
                variant: 'error'
            });
        });
        if (res) {
            showSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }
    };
    (0,react.useEffect)(()=>{
        if (step === 2) sendButton.current?.click();
    }, [
        step
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog/* default */.Z, {
        title: user.email ? t.settings_dialogs_change_email() : t.settings_dialogs_setting_email(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        confirmText: step === 1 ? t.next() : t.confirm(),
        children: step === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                display: 'flex',
                alignItems: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                fullWidth: true,
                sx: {
                    flex: 1
                },
                value: email,
                onChange: (event)=>setEmail(event.target.value)
                ,
                onBlur: validCheck,
                type: "email",
                placeholder: "Input your email",
                error: invalidEmail,
                helperText: invalidEmail ? 'The email address is incorrect.' : ''
            })
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                paddingTop: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        paddingBottom: '8px'
                    },
                    children: step === 0 ? t.settings_dialogs_change_email_validation() : t.settings_dialogs_current_email_validation()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    color: "primary",
                    fontWeight: "bold",
                    variant: "h4",
                    children: email
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '10px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '10px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* CountdownButton */.qA, {
                            ref: sendButton,
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            repeatContent: t.resend(),
                            onClick: sendValidationEmail,
                            children: t.send()
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/EmailSetting.tsx






function EmailSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [open, setOpen] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                size: "large",
                onClick: ()=>setOpen(true)
                ,
                children: user.email ? t.settings_button_change() : t.settings_button_setup()
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingEmailDialog, {
                open: open,
                onClose: ()=>setOpen(false)
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ../icons/settings/SettingsEmail.tsx


const SettingsEmailIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsEmailIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "m22 6-10 7L2 6",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "m22 6-10 7L2 6",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/EmailSettingItem.tsx







function EmailSettingItem_PasswordSettingItem() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsEmailIcon, {}),
        title: t.settings_email_title(),
        desc: user.email ? user.email : t.settings_email_desc(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailSetting, {})
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPhoneNumberDialog.tsx












const SettingPhoneNumberDialog_useStyles = (0,entry/* makeStyles */.ZL)()({
    container: {
        minHeight: '200px',
        paddingLeft: '20px',
        paddingRight: '20px'
    }
});
function SettingPhoneNumberDialog({ open , onClose  }) {
    const language = (0,api/* useLanguage */.ZK)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = SettingPhoneNumberDialog_useStyles();
    const { user , updateUser  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [step, setStep] = (0,react.useState)(user.phone ? 0 : 1);
    const [countryCode, setCountryCode] = (0,react.useState)(user.phone ? user.phone.split(' ')[0] : '+1');
    const [phone, setPhone] = (0,react.useState)(user.phone ? user.phone.split(' ')[1] : '');
    const [code, setCode] = (0,react.useState)('');
    const [invalidPhone, setInvalidPhone] = (0,react.useState)(false);
    const [invalidCode, setInvalidCode] = (0,react.useState)(false);
    // cloud backup
    const [backupInfo, setBackupInfo] = (0,react.useState)({
        url: '',
        abstract: ''
    });
    const sendButton = (0,react.useRef)(null);
    const handleCountryCodeChange = (event)=>{
        const value = event.target.value;
        const prefix = value.startsWith('+') ? '' : '+';
        setCountryCode(prefix + value);
    };
    const handleClose = ()=>{
        onClose();
    };
    const handleConfirm = async ()=>{
        if (step === 1) {
            if (phone && !invalidPhone) {
                setStep(2);
            } else {
                validCheck();
            }
        } else {
            const params = {
                account: countryCode + phone,
                type: type/* AccountType.phone */.Qm.phone,
                code
            };
            if (step === 0) {
                return checkCloudBackup(params);
            } else if (backupInfo.abstract) {
                return uploadCloudBackup(params);
            }
            const result = await (0,api/* verifyCode */.VP)(params).catch((err)=>{
                if (err.status === 400) {
                    // incorrect code
                    setInvalidCode(true);
                }
            });
            if (result) {
                onSuccess();
            }
        }
    };
    const originalPhoneVerified = ()=>{
        setCountryCode('+1');
        setPhone('');
        setCode('');
        setStep(1);
    };
    const onSuccess = ()=>{
        const msg = user.phone ? t.settings_alert_phone_number_updated() : t.settings_alert_phone_number_set();
        showSnackbar(msg, {
            variant: 'success'
        });
        updateUser({
            phone: `${countryCode} ${phone}`
        });
        onClose();
    };
    const checkCloudBackup = async (params)=>{
        const res = await (0,api/* fetchDownloadLink */.iT)(params).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            } else if (error.status === 404) {
                // no cloud backup file
                originalPhoneVerified();
            }
        });
        if (res) {
            originalPhoneVerified();
            setBackupInfo({
                url: res.downloadURL,
                abstract: res.abstract
            });
        }
    };
    const uploadCloudBackup = async (params)=>{
        if (!user.phone || !user.backupPassword) return;
        const encrypted = await (0,api/* fetchBackupValue */.Eu)(backupInfo.url);
        const decrypted = await (0,src/* decryptBackup */.lK)((0,encode/* encode */.c)(user.phone.replace(' ', '') + user.backupPassword), encrypted);
        const data = await (0,src/* encryptBackup */.Hb)((0,encode/* encode */.c)(countryCode + phone + user.backupPassword), decrypted);
        const uploadUrl = await (0,api/* fetchUploadLink */.iQ)({
            ...params,
            abstract: backupInfo.abstract
        }).catch((error)=>{
            if (error.status === 400) {
                setInvalidCode(true);
            }
        });
        if (uploadUrl) {
            await (0,api/* uploadBackupValue */.zy)(uploadUrl, data);
            onSuccess();
        }
    };
    const validCheck = ()=>{
        if (!phone) return setInvalidPhone(true);
        const isValid = regexp/* phoneRegexp.test */.wZ.test(countryCode + phone);
        setInvalidPhone(!isValid);
    };
    const sendValidationCode = ()=>{
        (0,api/* sendCode */.Z3)({
            account: countryCode + phone,
            type: type/* AccountType.phone */.Qm.phone,
            scenario: user.email ? type/* Scenario.change */.$4.change : type/* Scenario.create */.$4.create,
            locale: language.includes('zh') ? type/* Locale.zh */.go.zh : type/* Locale.en */.go.en
        }).then(()=>{
            showSnackbar(t.settings_alert_validation_code_sent(), {
                variant: 'success'
            });
        }).catch((error)=>{
            showSnackbar(error.message, {
                variant: 'error'
            });
        });
    };
    (0,react.useEffect)(()=>{
        if (step === 2) sendButton.current?.click();
    }, [
        step
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog/* default */.Z, {
        title: user.phone ? t.settings_dialogs_change_phone_number() : t.settings_dialogs_setting_phone_number(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        confirmText: step === 1 ? t.next() : t.confirm(),
        children: step === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                display: 'flex',
                alignItems: 'flex-start',
                paddingTop: '48px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                    value: countryCode,
                    onChange: handleCountryCodeChange,
                    placeholder: "+86",
                    sx: {
                        marginRight: '10px',
                        width: '60px'
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                    fullWidth: true,
                    sx: {
                        flex: 1
                    },
                    value: phone,
                    onChange: (event)=>setPhone(event.target.value)
                    ,
                    onBlur: validCheck,
                    type: "text",
                    error: invalidPhone,
                    helperText: invalidPhone ? t.settings_dialogs_incorrect_phone() : ''
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            sx: {
                paddingTop: '24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        paddingBottom: '8px'
                    },
                    children: step === 0 ? t.settings_dialogs_change_phone_validation() : t.settings_dialogs_current_phone_validation()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    color: "primary",
                    fontWeight: "bold",
                    variant: "h4",
                    children: [
                        countryCode,
                        " ",
                        phone
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        paddingTop: '10px',
                        alignItems: 'flex-start'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                            size: "small",
                            sx: {
                                flex: 1,
                                marginRight: '10px'
                            },
                            value: code,
                            onChange: (event)=>setCode(event.target.value)
                            ,
                            error: invalidCode,
                            helperText: invalidCode ? t.settings_dialogs_incorrect_code() : ''
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* CountdownButton */.qA, {
                            ref: sendButton,
                            size: "medium",
                            sx: {
                                width: '100px',
                                height: '40px'
                            },
                            repeatContent: t.resend(),
                            onClick: sendValidationCode,
                            children: t.send()
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PhoneNumberSetting.tsx






function PhoneNumberSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [open, setOpen] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
                size: "large",
                onClick: ()=>setOpen(true)
                ,
                children: user.phone ? t.settings_button_change() : t.settings_button_setup()
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPhoneNumberDialog, {
                open: open,
                onClose: ()=>setOpen(false)
            }) : null
        ]
    });
};

;// CONCATENATED MODULE: ../icons/settings/SettingsPhone.tsx


const SettingsPhoneIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsPhoneIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12 18h.01",
            stroke: "#1C68F3",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17 2H7a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2z",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12 18h.01",
            stroke: "#fff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/PhoneNumberSettingItem.tsx







function PhoneNumberSettingItem() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsPhoneIcon, {}),
        title: t.settings_phone_number_title(),
        desc: user.phone ? user.phone : t.settings_phone_number_desc(),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneNumberSetting, {})
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Select/selectClasses.js
var selectClasses = __webpack_require__(88866);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js
var outlinedInputClasses = __webpack_require__(88953);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/SettingSelect.tsx


/* harmony default export */ const SettingSelect = ((0,styled/* default */.ZP)(Select/* default */.Z)(()=>({
        [`& .${selectClasses/* default.select */.Z.select}.${selectClasses/* default.outlined */.Z.outlined}`]: {
            padding: '12.5px 70px 12.5px 14px !important',
            background: entry/* MaskColorVar.normalBackground */.ZN.normalBackground
        },
        [`& .${outlinedInputClasses/* default.notchedOutline */.Z.notchedOutline}`]: {
            borderColor: entry/* MaskColorVar.lineLighter */.ZN.lineLighter
        }
    })
));

// EXTERNAL MODULE: ../public-api/src/index.ts
var public_api_src = __webpack_require__(97096);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/LanguageSetting.tsx

/* eslint-disable @dimensiondev/unicode-specific-set */ 





function LanguageSetting() {
    const lang = (0,api/* useLanguage */.ZK)();
    const handleChange = (event)=>{
        API/* Services.Settings.setLanguage */.K9.Settings.setLanguage(event.target.value);
    };
    const t = (0,locales/* useDashboardI18N */.x)();
    // cspell:ignore lengua, española, française, русский язык, زبان فارسی
    // Some languages are not ready to ship to the users. Only display them in beta/insider version.
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingSelect, {
        value: lang,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.__auto__ */.P7.__auto__,
                children: t.settings_language_auto()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.enUS */.P7.enUS,
                children: "English"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.zhCN */.P7.zhCN,
                children: "\u7B80\u4F53\u4E2D\u6587"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.zhTW */.P7.zhTW,
                children: "\u7E41\u4F53\u4E2D\u6587"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.jaJP */.P7.jaJP,
                children: "\u65E5\u672C\u8A9E"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: public_api_src/* LanguageOptions.koKR */.P7.koKR,
                children: "\uD55C\uAD6D\uC778"
            })
        ]
    });
};

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var Personas_api = __webpack_require__(87474);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/AppearanceSetting.tsx







function AppearanceSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const mode = (0,Personas_api/* useAppearance */.MU)();
    const handleChange = (event)=>{
        API/* Services.Settings.setTheme */.K9.Settings.setTheme(event.target.value);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingSelect, {
        value: mode,
        onChange: handleChange,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: entry/* Appearance.default */.um["default"],
                children: t.settings_appearance_default()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: entry/* Appearance.light */.um.light,
                children: t.settings_appearance_light()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: entry/* Appearance.dark */.um.dark,
                children: t.settings_appearance_dark()
            })
        ]
    });
};

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/RestoreSetting.tsx





function RestoreSetting() {
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const onRecovery = ()=>{
        navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn, {
            state: {
                from: shared_base_src/* DashboardRoutes.Settings */.vq.Settings
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingButton, {
        size: "large",
        onClick: onRecovery,
        children: t.settings_button_recovery()
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/components/dialogs/VerifyPasswordDialog.tsx







function VerifyPasswordDialog({ open , onVerified , onClose  }) {
    const t = (0,locales/* useDashboardI18N */.x)();
    const { user  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const [passwordMismatched, setMatchState] = (0,react.useState)(false);
    const [password, setPassword] = (0,react.useState)('');
    const handleChange = (event)=>{
        setPassword(event.target.value);
        setMatchState(false);
    };
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        const matched = user.backupPassword === password;
        setMatchState(!matched);
        if (matched) {
            onClose();
            onVerified();
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmDialog/* default */.Z, {
        title: t.settings_dialogs_verify_backup_password(),
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            sx: {
                minHeight: '168px',
                padding: '0 90px',
                display: 'flex',
                alignItems: 'center'
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                fullWidth: true,
                value: password,
                onChange: handleChange,
                label: t.settings_label_backup_password(),
                error: passwordMismatched,
                helperText: passwordMismatched ? 'Incorrect password' : ''
            })
        })
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/VerifyPasswordContext.tsx



const PasswordVerifiedContext = /*#__PURE__*/ (0,react.createContext)({
    isPasswordVerified: false,
    ensurePasswordVerified: ()=>{
        throw new Error('Context not provided.');
    }
});
function PasswordVerifiedProvider({ children  }) {
    const [isPasswordVerified, setVerified] = (0,react.useState)(false);
    // useState will call VerifyPasswordOnVerified directly. have to wrap with something
    const [callback, setCallback] = (0,react.useState)(null);
    const onVerified = ()=>{
        callback?.[0]?.();
        setCallback(null);
        setVerified(true);
    };
    const onCancel = ()=>{
        setCallback(null);
    };
    const ensurePasswordVerified = (f)=>{
        if (isPasswordVerified) f();
        else setCallback([
            f
        ]);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(PasswordVerifiedContext.Provider, {
        value: {
            isPasswordVerified,
            ensurePasswordVerified
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyPasswordDialog, {
                open: !!callback,
                onVerified: onVerified,
                onClose: onCancel
            })
        ]
    });
}

;// CONCATENATED MODULE: ../icons/settings/SettingsLanguage.tsx


const SettingsLanguageIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsLanguageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip0)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                    stroke: "#1C68F3",
                    strokeWidth: "1.25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.372 12a.75.75 0 01.75-.75H21.88a.75.75 0 010 1.5H2.122a.75.75 0 01-.75-.75z",
                    fill: "#1C68F3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 1.371a.75.75 0 01.75.75V21.88a.75.75 0 01-1.5 0V2.12a.75.75 0 01.75-.75zM16.533 3.173a.75.75 0 01.968.433l-.7.267.7-.267.001.002.001.003.004.01.012.033.043.12c.035.104.085.255.144.45.118.391.274.96.428 1.686.31 1.452.617 3.536.617 6.09a29.4 29.4 0 01-.617 6.09c-.154.726-.31 1.294-.428 1.685a12.98 12.98 0 01-.187.57l-.012.034-.004.01v.003l-.001.001-.701-.267.7.267a.75.75 0 01-1.401-.534l.001-.004.008-.021.034-.096c.03-.087.074-.22.127-.397.107-.354.252-.882.397-1.564.29-1.364.584-3.343.584-5.777s-.293-4.413-.584-5.778c-.145-.682-.29-1.21-.397-1.563a11.258 11.258 0 00-.16-.493l-.009-.021V4.14a.75.75 0 01.432-.968zM7.693 3.173a.75.75 0 00-.968.433l.7.267-.7-.267-.001.002-.001.003-.004.01-.012.033-.043.12c-.036.104-.085.255-.144.45-.118.391-.274.96-.428 1.686A29.4 29.4 0 005.475 12a29.4 29.4 0 00.617 6.09c.154.726.31 1.294.428 1.685a12.803 12.803 0 00.187.57l.012.034.004.01v.003l.001.001.701-.267-.7.267a.75.75 0 001.4-.534v-.004l-.008-.021a11.407 11.407 0 01-.161-.493 19.472 19.472 0 01-.397-1.564A27.902 27.902 0 016.975 12c0-2.434.293-4.413.584-5.778.145-.682.29-1.21.397-1.563a11.316 11.316 0 01.16-.493l.008-.021.002-.004a.75.75 0 00-.433-.968z",
                    fill: "#1C68F3"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.826 8.03a.75.75 0 00-.432-.968l-.268.7.268-.7-.002-.001-.003-.001-.01-.004-.034-.012a12.81 12.81 0 00-.57-.187 20.96 20.96 0 00-1.686-.428A29.4 29.4 0 0012 5.812a29.4 29.4 0 00-6.09.617c-.725.154-1.294.31-1.685.428a12.794 12.794 0 00-.57.187l-.034.012-.01.004h-.003v.001c-.001 0-.002 0 .266.701l-.267-.7a.75.75 0 00.535 1.401l.003-.001.022-.008.095-.034c.087-.03.22-.074.397-.127.354-.107.882-.252 1.564-.397A27.902 27.902 0 0112 7.312c2.435 0 4.413.293 5.778.584.682.145 1.21.29 1.563.397a11.288 11.288 0 01.493.16l.022.009h.003a.75.75 0 00.968-.432zM3.173 16.344a.75.75 0 00.432.969l.268-.7-.268.7h.002l.004.002.01.003.033.013.12.042c.104.036.255.085.45.145.391.118.96.273 1.686.428 1.451.309 3.536.616 6.09.616a29.4 29.4 0 006.09-.616c.726-.155 1.294-.31 1.684-.428a12.91 12.91 0 00.571-.187l.034-.013.01-.003.003-.002c.001 0 .002 0-.266-.7l.267.7a.75.75 0 00-.535-1.402l-.003.002-.022.008-.095.033c-.087.03-.22.074-.398.128-.353.107-.881.251-1.563.397-1.365.29-3.343.583-5.778.583-2.434 0-4.412-.293-5.777-.583-.682-.146-1.21-.29-1.564-.397a11.25 11.25 0 01-.492-.161l-.022-.008-.003-.001a.75.75 0 00-.968.432z",
                    fill: "#1C68F3"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#fff",
                    d: "M0 0h24v24H0z"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
            clipPath: "url(#clip1)",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
                    stroke: "#fff",
                    strokeWidth: "1.25",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M1.372 12a.75.75 0 01.75-.75H21.88a.75.75 0 010 1.5H2.122a.75.75 0 01-.75-.75z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 1.371a.75.75 0 01.75.75V21.88a.75.75 0 01-1.5 0V2.12a.75.75 0 01.75-.75zM16.533 3.173a.75.75 0 01.968.433l-.7.267.7-.267.001.002.001.003.004.01.012.033.043.12c.035.104.085.255.144.45.118.391.274.96.428 1.686.31 1.452.617 3.536.617 6.09a29.4 29.4 0 01-.617 6.09c-.154.726-.31 1.294-.428 1.685a12.98 12.98 0 01-.187.57l-.012.034-.004.01v.003l-.001.001-.701-.267.7.267a.75.75 0 01-1.401-.534l.001-.004.008-.021.034-.096c.03-.087.074-.22.127-.397.107-.354.252-.882.397-1.564.29-1.364.584-3.343.584-5.777s-.293-4.413-.584-5.778c-.145-.682-.29-1.21-.397-1.563a11.258 11.258 0 00-.16-.493l-.009-.021V4.14a.75.75 0 01.432-.968zM7.693 3.173a.75.75 0 00-.968.433l.7.267-.7-.267-.001.002-.001.003-.004.01-.012.033-.043.12c-.036.104-.085.255-.144.45-.118.391-.274.96-.428 1.686A29.4 29.4 0 005.475 12a29.4 29.4 0 00.617 6.09c.154.726.31 1.294.428 1.685a12.803 12.803 0 00.187.57l.012.034.004.01v.003l.001.001.701-.267-.7.267a.75.75 0 001.4-.534v-.004l-.008-.021a11.407 11.407 0 01-.161-.493 19.472 19.472 0 01-.397-1.564A27.902 27.902 0 016.975 12c0-2.434.293-4.413.584-5.778.145-.682.29-1.21.397-1.563a11.316 11.316 0 01.16-.493l.008-.021.002-.004a.75.75 0 00-.433-.968z",
                    fill: "#fff"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.826 8.03a.75.75 0 00-.432-.968l-.268.7.268-.7-.002-.001-.003-.001-.01-.004-.034-.012a12.81 12.81 0 00-.57-.187 20.96 20.96 0 00-1.686-.428A29.4 29.4 0 0012 5.812a29.4 29.4 0 00-6.09.617c-.725.154-1.294.31-1.685.428a12.794 12.794 0 00-.57.187l-.034.012-.01.004h-.003v.001c-.001 0-.002 0 .266.701l-.267-.7a.75.75 0 00.535 1.401l.003-.001.022-.008.095-.034c.087-.03.22-.074.397-.127.354-.107.882-.252 1.564-.397A27.902 27.902 0 0112 7.312c2.435 0 4.413.293 5.778.584.682.145 1.21.29 1.563.397a11.288 11.288 0 01.493.16l.022.009h.003a.75.75 0 00.968-.432zM3.173 16.344a.75.75 0 00.432.969l.268-.7-.268.7h.002l.004.002.01.003.033.013.12.042c.104.036.255.085.45.145.391.118.96.273 1.686.428 1.451.309 3.536.616 6.09.616a29.4 29.4 0 006.09-.616c.726-.155 1.294-.31 1.684-.428a12.91 12.91 0 00.571-.187l.034-.013.01-.003.003-.002c.001 0 .002 0-.266-.7l.267.7a.75.75 0 00-.535-1.402l-.003.002-.022.008-.095.033c-.087.03-.22.074-.398.128-.353.107-.881.251-1.563.397-1.365.29-3.343.583-5.778.583-2.434 0-4.412-.293-5.777-.583-.682-.146-1.21-.29-1.564-.397a11.25 11.25 0 01-.492-.161l-.022-.008-.003-.001a.75.75 0 00-.968.432z",
                    fill: "#fff"
                })
            ]
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                id: "clip1",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fill: "#1C68F3",
                    d: "M0 0h24v24H0z"
                })
            })
        })
    ]
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../icons/settings/SettingsAppearance.tsx


const SettingsAppearanceIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsAppearanceIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.89 20.789h-.75a.75.75 0 00.785.75l-.035-.75zm9.248-7.728l-.745-.09.745.09zM7.215 17.114l-.235.712.01.003.225-.715zM7.8 4.774l.378.647-.378-.648zm3.125 16.764c1.45-.067 3.715-.56 5.73-1.822 2.037-1.276 3.841-3.358 4.227-6.566l-1.489-.179c-.321 2.667-1.797 4.386-3.535 5.474-1.76 1.103-3.765 1.537-5.003 1.595l.07 1.498zM6.989 17.83c1.281.405 2.073 1.057 2.542 1.656.49.624.609 1.16.609 1.304h1.5c0-.568-.294-1.42-.929-2.23-.656-.836-1.701-1.665-3.27-2.16l-.452 1.43zm13.893-4.679c.527-4.373-1.536-7.429-4.402-8.973-2.812-1.517-6.42-1.588-9.057-.052l.755 1.296c2.136-1.244 5.184-1.222 7.59.076 2.355 1.269 4.074 3.747 3.625 7.474l1.49.18zM7.422 4.125C4.848 5.625 2.89 8.35 2.477 11.06c-.209 1.37-.026 2.767.714 3.986.742 1.222 1.996 2.189 3.79 2.78l.47-1.425c-1.524-.502-2.456-1.274-2.978-2.133-.523-.863-.68-1.89-.513-2.982.337-2.213 1.99-4.566 4.219-5.865l-.755-1.296z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12.581",
            cy: "15.292",
            r: "1.131",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "8.944",
            cy: "7.754",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.211 7.042a.531.531 0 11-1.062 0 .531.531 0 011.062 0z",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "14.212",
            cy: "7.754",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "16.575",
            cy: "9.367",
            r: ".531",
            fill: "#1C68F3",
            stroke: "#1C68F3"
        })
    ]
}), /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M10.89 20.789h-.75a.75.75 0 00.785.75l-.035-.75zm9.248-7.728l-.745-.09.745.09zM7.215 17.114l-.235.712.01.003.225-.715zM7.8 4.774l.378.647-.378-.648zm3.125 16.764c1.45-.067 3.715-.56 5.73-1.822 2.037-1.276 3.841-3.358 4.227-6.566l-1.489-.179c-.321 2.667-1.797 4.386-3.535 5.474-1.76 1.103-3.765 1.537-5.003 1.595l.07 1.498zM6.989 17.83c1.281.405 2.073 1.057 2.542 1.656.49.624.609 1.16.609 1.304h1.5c0-.568-.294-1.42-.929-2.23-.656-.836-1.701-1.665-3.27-2.16l-.452 1.43zm13.893-4.679c.527-4.373-1.536-7.429-4.402-8.973-2.812-1.517-6.42-1.588-9.057-.052l.755 1.296c2.136-1.244 5.184-1.222 7.59.076 2.355 1.269 4.074 3.747 3.625 7.474l1.49.18zM7.422 4.125C4.848 5.625 2.89 8.35 2.477 11.06c-.209 1.37-.026 2.767.714 3.986.742 1.222 1.996 2.189 3.79 2.78l.47-1.425c-1.524-.502-2.456-1.274-2.978-2.133-.523-.863-.68-1.89-.513-2.982.337-2.213 1.99-4.566 4.219-5.865l-.755-1.296z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "12.581",
            cy: "15.292",
            r: "1.131",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "8.944",
            cy: "7.754",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.211 7.042a.531.531 0 11-1.062 0 .531.531 0 011.062 0z",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "14.212",
            cy: "7.754",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "16.575",
            cy: "9.367",
            r: ".531",
            fill: "#fff",
            stroke: "#fff"
        })
    ]
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../icons/settings/SettingsRestore.tsx


const SettingsRestoreIcon = (0,utils/* createPaletteAwareIcon */.t)('SettingsRestoreIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",
        stroke: "#fff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/index.tsx












// import MobileSyncSetting from './components/MobileSyncSetting'



function Settings() {
    const t = (0,locales/* useDashboardI18N */.x)();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PageFrame/* PageFrame */.C, {
        title: t.settings(),
        noBackgroundFill: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(UserContext/* UserProvider */.d, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PasswordVerifiedProvider, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingCard, {
                        title: t.settings_general(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsLanguageIcon, {}),
                                title: t.settings_language_title(),
                                desc: t.settings_language_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LanguageSetting, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsAppearanceIcon, {}),
                                title: t.settings_appearance_title(),
                                desc: t.settings_appearance_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AppearanceSetting, {})
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SettingCard, {
                        title: t.settings_backup_recovery(),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupSettingItem, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsRestoreIcon, {}),
                                title: t.settings_restore_database_title(),
                                desc: t.settings_restore_database_desc(),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreSetting, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordSettingItem, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EmailSettingItem_PasswordSettingItem, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PhoneNumberSettingItem, {})
                        ]
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 76580:
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