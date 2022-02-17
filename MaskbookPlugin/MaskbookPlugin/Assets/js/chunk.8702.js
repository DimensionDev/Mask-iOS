"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7602],{

/***/ 57602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Plugins)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/index.tsx + 11 modules
var DashboardFrame = __webpack_require__(47574);
// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(88501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(40777);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemAvatar/ListItemAvatar.js + 1 modules
var ListItemAvatar = __webpack_require__(86299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(57703);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Switch/Switch.js
var Switch = __webpack_require__(9655);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Switch/switchClasses.js
var switchClasses = __webpack_require__(49967);
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

// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(91377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Button/buttonClasses.js
var buttonClasses = __webpack_require__(70745);
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
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TwitterIcon, {
        }),
        sx: {
            bgcolor: src/* MaskColorVar.twitter */.ZN.twitter
        },
        onClick: onClick,
        children: "Twitter"
    }));
}
function Facebook({ onClick  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StyledButton, {
        startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FacebookIcon, {
        }),
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
            width: 355,
            minHeight: 158,
            margin: theme.spacing(1),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingTop: 0
        },
        avatar: {
            background: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            width: '44px',
            height: '44px'
        },
        settings: {
            alignSelf: 'flex-start',
            paddingTop: theme.spacing(1),
            cursor: 'pointer'
        },
        actions: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: theme.spacing(2)
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
function PluginItemPlaceHodler() {
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.empty
    }));
}
function PluginItem(props) {
    const { id , title , desc , icon , enabled , onSwitch , onTwitter , onFacebook , onExplore , onSetting  } = props;
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
                    onSetting ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.settings,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                            onClick: ()=>onSetting(id)
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.actions,
                children: [
                    enabled ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
                    id ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingSwitch, {
                        size: "small",
                        checked: enabled,
                        onChange: (event)=>onSwitch(id, event.target.checked)
                    }) : null
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../icons/plugins/FileService.tsx


const FileServiceIcon = (0,utils/* createIcon */.I)('FileService', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".5",
            d: "M5.25 7.547a3.5 3.5 0 013.5-3.5h10.5a3.5 3.5 0 013.5 3.5v14a3.5 3.5 0 01-3.5 3.5H8.75a3.5 3.5 0 01-3.5-3.5v-14z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".1",
            d: "M22.75 11.895V7.547a3.5 3.5 0 00-3.5-3.5h-4.347l7.847 7.848z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.903 4.047v4.348a3.5 3.5 0 003.5 3.5h4.347l-7.847-7.848z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M15.19 13.316a1.601 1.601 0 00-1.188-.55c-.438 0-.867.192-1.189.55a2.06 2.06 0 00-.51 1.374v1.472h3.398V14.69a2.06 2.06 0 00-.51-1.374zm1.19 2.846V14.69c0-.68-.243-1.338-.684-1.828a2.28 2.28 0 00-1.694-.776 2.28 2.28 0 00-1.694.776 2.738 2.738 0 00-.684 1.828v1.472h-.266c-.598 0-1.094.478-1.094 1.081v2.594c0 .603.496 1.081 1.094 1.081h5.284c.599 0 1.095-.478 1.095-1.08v-2.595c0-.603-.496-1.08-1.095-1.08h-.262zm.678 1.081a.408.408 0 00-.416-.401h-5.284a.408.408 0 00-.415.401v2.594c0 .216.18.402.415.402h5.284a.408.408 0 00.416-.402v-2.594z",
            fill: "#fff"
        })
    ]
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Markets.tsx


const MarketsIcon = (0,utils/* createIcon */.I)('Markets', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3.292 19.066h22.75v3.89c0 1.282-.93 2.332-2.068 2.332H5.36c-1.137 0-2.068-1.05-2.068-2.333v-3.889z",
            fill: "#00BB35"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M5.36 1.566h18.614c1.137 0 2.068.945 2.068 2.1v15.4H3.292v-15.4c0-1.155.93-2.1 2.068-2.1z",
            fill: "#15CE49"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.667 12.833c-3.85 0-7-3.15-7-7a.78.78 0 01.778-.778.78.78 0 01.778.778c0 2.994 2.45 5.444 5.444 5.444 2.995 0 5.445-2.45 5.445-5.444a.78.78 0 01.777-.778.78.78 0 01.778.778c0 3.85-3.15 7-7 7z",
            fill: "#fff"
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
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "4.167",
            y: "3.5",
            width: "21",
            height: "21",
            rx: "2",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11.04 9.105c.508 0 .92.411.92.918v5.4l5.683-5.735a.919.919 0 011.302-.003l3.916 3.916a.919.919 0 01-1.3 1.299l-2.383-2.383v5.3a.919.919 0 01-1.838 0v-5.213l-5.643 5.695a.919.919 0 01-1.302.003L6.473 14.38a.919.919 0 011.3-1.3l2.349 2.35v-5.408c0-.507.411-.918.919-.918z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                id: "paint0_linear",
                x1: "4.472",
                y1: "4.532",
                x2: "25.593",
                y2: "23.877",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        stopColor: "#0098FF"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: ".761",
                        stopColor: "#005BED"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: ".766",
                        stopColor: "#006AEC"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                        offset: "1",
                        stopColor: "#0064EA"
                    })
                ]
            })
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

;// CONCATENATED MODULE: ../icons/plugins/MarketTrend.tsx


const MarketTrendIcon = (0,utils/* createIcon */.I)('MarketTrend', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M14.667 3.5c-5.796 0-10.5 4.704-10.5 10.5 0 1.438.294 2.814.819 4.074L9.27 13.79a1.755 1.755 0 012.478 0l1.428 1.428a.868.868 0 001.239 0l4.273-4.274H15.99a.87.87 0 01-.872-.871.87.87 0 01.872-.872h4.809a.87.87 0 01.871.872v4.809a.87.87 0 01-.871.872.87.87 0 01-.872-.872v-2.709l-4.882 4.882a1.755 1.755 0 01-2.478 0l-1.428-1.428a.868.868 0 00-1.24 0l-4.052 4.064a10.478 10.478 0 008.82 4.809c5.796 0 10.5-4.704 10.5-10.5s-4.704-10.5-10.5-10.5z",
        fill: "#5F6FFF"
    })
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
}), '0 0 28 28');

;// CONCATENATED MODULE: ../icons/plugins/Dhedge.tsx


const DhedgeIcon = (0,utils/* createIcon */.I)('Dhedge', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M9.197 13.808l-4.177 1.96v10.273l4.177-1.875V13.808zM16.443 1.959l-4.177 1.918v19.095l4.177-1.79V1.959zM19.64 22.205V10.1l4.006 2.046v12.318l-4.006-2.26z",
        fill: "#0096CA"
    })
}), '0 0 28 28');

// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(66402);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(69476);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/api.ts
var api = __webpack_require__(34815);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/formControlLabelClasses.js
var formControlLabelClasses = __webpack_require__(25325);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(87239);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/RadioGroup/useRadioGroup.js
var useRadioGroup = __webpack_require__(75455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(29094);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/FormLabel/FormLabel.js
var FormLabel = __webpack_require__(34963);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/RadioGroup/RadioGroup.js
var RadioGroup = __webpack_require__(33581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Radio/Radio.js + 4 modules
var Radio = __webpack_require__(59379);
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
            value: type/* MarketTrendProvider.COIN_GECKO */.hS.COIN_GECKO
        },
        {
            label: 'CoinMarketCap',
            value: type/* MarketTrendProvider.COIN_MARKET_CAP */.hS.COIN_MARKET_CAP
        },
        {
            label: 'Uniswap Info',
            value: type/* MarketTrendProvider.UNISWAP_INFO */.hS.UNISWAP_INFO
        }, 
    ];
    const source = (0,api/* useTrendingDataSource */.Wg)();
    const t = (0,locales/* useDashboardI18N */.xF)();
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

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(95142);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/components/SwapSettingDialog.tsx








function SwapSettingDialog({ open , onClose  }) {
    const ethOptions = [
        {
            label: 'UniSwap V2',
            value: public_api_src/* TradeProvider.UNISWAP_V2 */.z4.UNISWAP_V2
        },
        {
            label: 'UniSwap V3',
            value: public_api_src/* TradeProvider.UNISWAP_V3 */.z4.UNISWAP_V3
        },
        {
            label: 'SushiSwap',
            value: public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
        },
        {
            label: 'SashimiSwap',
            value: public_api_src/* TradeProvider.SASHIMISWAP */.z4.SASHIMISWAP
        },
        {
            label: 'Ox',
            value: public_api_src/* TradeProvider.ZRX */.z4.ZRX
        },
        {
            label: 'Balancer',
            value: public_api_src/* TradeProvider.BALANCER */.z4.BALANCER
        },
        {
            label: 'DODO',
            value: public_api_src/* TradeProvider.DODO */.z4.DODO
        }, 
    ];
    const polygonOptions = [
        {
            label: 'QuickSwap',
            value: public_api_src/* TradeProvider.QUICKSWAP */.z4.QUICKSWAP
        },
        {
            label: 'SushiSwap',
            value: public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
        },
        {
            label: 'DODO',
            value: public_api_src/* TradeProvider.DODO */.z4.DODO
        }, 
    ];
    const bscOptions = [
        {
            label: 'PancakeSwap',
            value: public_api_src/* TradeProvider.PANCAKESWAP */.z4.PANCAKESWAP
        },
        {
            label: 'SushiSwap',
            value: public_api_src/* TradeProvider.SUSHISWAP */.z4.SUSHISWAP
        },
        {
            label: 'DODO',
            value: public_api_src/* TradeProvider.DODO */.z4.DODO
        }, 
    ];
    const t = (0,locales/* useDashboardI18N */.xF)();
    const ethNetworkTradeProvider = (0,api/* useEthereumNetworkTradeProvider */.L6)();
    const polygonNetworkTradeProvider = (0,api/* usePolygonNetworkTradeProvider */.My)();
    const bscNetworkTradeProvider = (0,api/* useBinanceNetworkTradeProvider */.h4)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        title: t.labs_settings_swap(),
        open: open,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                padding: '16px 40px 24px'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                    legend: t.labs_settings_swap_eth(),
                    value: ethNetworkTradeProvider,
                    options: ethOptions,
                    onChange: (value)=>API/* Services.Settings.setEthNetworkTradeProvider */.K9.Settings.setEthNetworkTradeProvider(+value)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                    legend: t.labs_settings_swap_polygon(),
                    value: polygonNetworkTradeProvider,
                    options: polygonOptions,
                    onChange: (value)=>API/* Services.Settings.setPolygonNetworkTradeProvider */.K9.Settings.setPolygonNetworkTradeProvider(+value)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingItem, {
                    legend: t.labs_settings_swap_bsc(),
                    value: bscNetworkTradeProvider,
                    options: bscOptions,
                    onChange: (value)=>API/* Services.Settings.setBinanceNetworkTradeProvider */.K9.Settings.setBinanceNetworkTradeProvider(+value)
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../dashboard/src/pages/Labs/constants.ts
var constants = __webpack_require__(17037);
;// CONCATENATED MODULE: ../dashboard/src/pages/Labs/index.tsx















const Labs_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            padding: theme.spacing(2)
        },
        list: {
            display: 'flex',
            '& >*': {
                flex: 1
            }
        }
    })
);
function Plugins() {
    const t = (0,locales/* useDashboardI18N */.xF)();
    const { classes  } = Labs_useStyles();
    const [openTrendSetting, setOpenTrendSetting] = (0,react.useState)(false);
    const [openSwapSetting, setOpenSwapSetting] = (0,react.useState)(false);
    const [pluginStatus, setPluginStatus] = (0,react.useState)({
        [constants/* PLUGIN_IDS.FILE_SERVICE */.N.FILE_SERVICE]: true,
        [constants/* PLUGIN_IDS.GITCOIN */.N.GITCOIN]: true,
        [constants/* PLUGIN_IDS.DHEDGE */.N.DHEDGE]: true,
        [constants/* PLUGIN_IDS.RED_PACKET */.N.RED_PACKET]: true,
        [constants/* PLUGIN_IDS.TRANSAK */.N.TRANSAK]: true,
        [constants/* PLUGIN_IDS.COLLECTIBLES */.N.COLLECTIBLES]: true,
        [constants/* PLUGIN_IDS.SWAP */.N.SWAP]: true,
        [constants/* PLUGIN_IDS.SNAPSHOT */.N.SNAPSHOT]: true,
        [constants/* PLUGIN_IDS.MARKETS */.N.MARKETS]: true,
        [constants/* PLUGIN_IDS.VALUABLES */.N.VALUABLES]: true,
        [constants/* PLUGIN_IDS.MARKET_TREND */.N.MARKET_TREND]: true
    });
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const { setDialog: setBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Transak.buyTokenDialogUpdated */.yC.Transak.buyTokenDialogUpdated);
    const openTransakDialog = (0,react.useCallback)(()=>{
        setBuyDialog({
            open: true,
            address: account
        });
    }, []);
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    async function onSwitch(id, checked) {
        await API/* Services.Settings.setPluginStatus */.K9.Settings.setPluginStatus(id, checked);
        setPluginStatus({
            ...pluginStatus,
            [id]: checked
        });
    }
    async function onTwitter(id) {
        await API/* Services.Settings.openSNSAndActivatePlugin */.K9.Settings.openSNSAndActivatePlugin('https://www.twitter.com/home', id);
    }
    async function onFacebook(id) {
        await API/* Services.Settings.openSNSAndActivatePlugin */.K9.Settings.openSNSAndActivatePlugin('https://www.facebook.com', id);
    }
    function onExplore(id) {
        if (id === constants/* PLUGIN_IDS.TRANSAK */.N.TRANSAK) {
            openTransakDialog();
        } else if (id === constants/* PLUGIN_IDS.SWAP */.N.SWAP) {
            openSwapDialog();
        }
    }
    function onSetting(id) {
        if (id === constants/* PLUGIN_IDS.MARKET_TREND */.N.MARKET_TREND) {
            setOpenTrendSetting(true);
        } else if (id === constants/* PLUGIN_IDS.SWAP */.N.SWAP) {
            setOpenSwapSetting(true);
        }
    }
    (0,react.useEffect)(()=>{
        Object.values(constants/* PLUGIN_IDS */.N).forEach(async (id)=>{
            const enabled = await API/* Services.Settings.isPluginEnabled */.K9.Settings.isPluginEnabled(id);
            setPluginStatus((status)=>({
                    ...status,
                    [id]: enabled
                })
            );
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardFrame/* PageFrame */.C, {
        title: t.labs(),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.list,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.FILE_SERVICE */.N.FILE_SERVICE,
                                title: t.labs_file_service(),
                                desc: t.labs_file_service_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileServiceIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.FILE_SERVICE */.N.FILE_SERVICE],
                                onTwitter: onTwitter,
                                onFacebook: onFacebook,
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.MARKETS */.N.MARKETS,
                                title: t.labs_markets(),
                                desc: t.labs_markets_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketsIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.MARKETS */.N.MARKETS],
                                onTwitter: onTwitter,
                                onFacebook: onFacebook,
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.RED_PACKET */.N.RED_PACKET,
                                title: t.labs_red_packet(),
                                desc: t.labs_red_packet_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.RED_PACKET */.N.RED_PACKET],
                                onTwitter: onTwitter,
                                onFacebook: onFacebook,
                                onSwitch: onSwitch
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.list,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.SWAP */.N.SWAP,
                                title: t.labs_swap(),
                                desc: t.labs_swap_desc(),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.MARKET_TREND */.N.MARKET_TREND],
                                onSwitch: onSwitch,
                                onExplore: onExplore,
                                onSetting: onSetting,
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapServiceIcon, {
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.TRANSAK */.N.TRANSAK,
                                title: t.labs_transak(),
                                desc: t.labs_transak_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransakIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.TRANSAK */.N.TRANSAK],
                                onExplore: onExplore,
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItemPlaceHodler, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.list,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.SNAPSHOT */.N.SNAPSHOT,
                                title: t.labs_snapshot(),
                                desc: t.labs_snapshot_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SnapshotIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.SNAPSHOT */.N.SNAPSHOT],
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.MARKET_TREND */.N.MARKET_TREND,
                                title: t.labs_market_trend(),
                                desc: t.labs_market_trend_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketTrendIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.MARKET_TREND */.N.MARKET_TREND],
                                onSetting: onSetting,
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.COLLECTIBLES */.N.COLLECTIBLES,
                                title: t.labs_collectibles(),
                                desc: t.labs_collectibles_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CollectiblesIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.COLLECTIBLES */.N.COLLECTIBLES],
                                onSwitch: onSwitch
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.list,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.GITCOIN */.N.GITCOIN,
                                title: t.labs_gitcoin(),
                                desc: t.labs_gitcoin_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(GitcoinIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.GITCOIN */.N.GITCOIN],
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.VALUABLES */.N.VALUABLES,
                                title: t.labs_valuables(),
                                desc: t.labs_valuables_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ValuablesIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.VALUABLES */.N.VALUABLES],
                                onSwitch: onSwitch
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginItem, {
                                id: constants/* PLUGIN_IDS.DHEDGE */.N.DHEDGE,
                                title: t.labs_dhedge(),
                                desc: t.labs_dhedge_desc(),
                                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DhedgeIcon, {
                                }),
                                enabled: pluginStatus[constants/* PLUGIN_IDS.DHEDGE */.N.DHEDGE],
                                onSwitch: onSwitch
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapSettingDialog, {
                open: openSwapSetting,
                onClose: ()=>setOpenSwapSetting(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MarketTrendSettingDialog, {
                open: openTrendSetting,
                onClose: ()=>setOpenTrendSetting(false)
            })
        ]
    }));
};


/***/ }),

/***/ 34815:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZK": () => (/* binding */ useLanguage),
/* harmony export */   "Wg": () => (/* binding */ useTrendingDataSource),
/* harmony export */   "L6": () => (/* binding */ useEthereumNetworkTradeProvider),
/* harmony export */   "My": () => (/* binding */ usePolygonNetworkTradeProvider),
/* harmony export */   "h4": () => (/* binding */ useBinanceNetworkTradeProvider),
/* harmony export */   "Z3": () => (/* binding */ sendCode),
/* harmony export */   "iQ": () => (/* binding */ fetchUploadLink),
/* harmony export */   "iT": () => (/* binding */ fetchDownloadLink),
/* harmony export */   "VP": () => (/* binding */ verifyCode),
/* harmony export */   "Eu": () => (/* binding */ fetchBackupValue),
/* harmony export */   "zy": () => (/* binding */ uploadBackupValue)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11922);


const [useLanguage] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getLanguage */ .K9.Settings.getLanguage, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.languageSettings.on */ .Vm.events.languageSettings.on);
const [useTrendingDataSource] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTrendingDataSource */ .K9.Settings.getTrendingDataSource, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentTrendingDataProviderSettings.on */ .Vm.events.currentTrendingDataProviderSettings.on);
const [useEthereumNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getEthereumNetworkTradeProvider */ .K9.Settings.getEthereumNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.ethereumNetworkTradeProviderSettings.on */ .Vm.events.ethereumNetworkTradeProviderSettings.on);
const [usePolygonNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getPolygonNetworkTradeProvider */ .K9.Settings.getPolygonNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.polygonNetworkTradeProviderSettings.on */ .Vm.events.polygonNetworkTradeProviderSettings.on);
const [useBinanceNetworkTradeProvider] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getBinanceNetworkTradeProvider */ .K9.Settings.getBinanceNetworkTradeProvider, _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.binanceNetworkTradeProviderSettings.on */ .Vm.events.binanceNetworkTradeProviderSettings.on);
const BASE_RUL = 'https://vaalh28dbi.execute-api.ap-east-1.amazonaws.com/api';
const withErrorMiddleware = (handler)=>async (res)=>{
        const result = await handler(res);
        if (!res.ok) {
            return Promise.reject({
                status: res.status,
                ...result
            });
        }
        return Promise.resolve(result);
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
            account,
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
            account,
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
            account
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
            account,
            account_type: type,
            code
        })
    });
};
const fetchBackupValue = (downloadLink)=>{
    return fetchBase(downloadLink, {
        method: 'GET'
    }, (res)=>res.text()
    );
};
const uploadBackupValue = (uploadLink, content)=>{
    return fetch(uploadLink, {
        method: 'PUT',
        // mode: 'no-cors',
        headers: new Headers({
            'content-type': 'text/plain'
        }),
        body: content
    });
};


/***/ }),

/***/ 66402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


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

/***/ 88501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ })

}]);