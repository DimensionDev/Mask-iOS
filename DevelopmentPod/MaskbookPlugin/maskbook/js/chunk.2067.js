"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2067],{

/***/ 42067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../plugins/RSS3/src/base.ts + 7 modules
var base = __webpack_require__(86926);
// EXTERNAL MODULE: ../plugins/RSS3/src/constants.ts
var constants = __webpack_require__(14677);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(39850);
// EXTERNAL MODULE: ../web3-shared/evm/utils/misc.ts
var misc = __webpack_require__(7454);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.6_2537b8183b5267e659a67a26d5d4f10f/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(92452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.6_2537b8183b5267e659a67a26d5d4f10f/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(26530);
;// CONCATENATED MODULE: ../plugins/RSS3/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "bio.rss3", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("bio.rss3")
    return (0,react.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ../plugins/RSS3/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(1154);
// EXTERNAL MODULE: ../plugins/RSS3/src/messages.ts
var messages = __webpack_require__(35456);
;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/hooks/useDonations.ts



function useDonations(address) {
    return (0,useAsync/* default */.Z)(async ()=>{
        const response = await messages/* PluginProfileRPC.getDonations */.F.getDonations(address);
        return response.status ? response.assets : misc/* EMPTY_LIST */.r;
    }, [
        address
    ]);
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/hooks/useFootprints.ts


function useFootprints(address) {
    return (0,useAsync/* default */.Z)(async ()=>{
        const response = await messages/* PluginProfileRPC.getFootprints */.F.getFootprints(address);
        return response.status ? response.assets : [];
    }, [
        address
    ]);
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/hooks/useRss3Profile.ts


function useRss3Profile(address) {
    return (0,useAsync/* default */.Z)(async ()=>{
        if (!address) return null;
        return messages/* PluginProfileRPC.getRSS3ProfileByAddress */.F.getRSS3ProfileByAddress(address);
    }, [
        address
    ]);
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/hooks/index.ts




// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/components/DonationCard.tsx






const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: 8,
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: theme_src/* MaskColorVar.twitterBg */.ZN.twitterBg,
            padding: theme.spacing(1),
            flexGrow: 1,
            alignItems: 'stretch'
        },
        cover: {
            flexShrink: 1,
            height: 90,
            width: 90,
            borderRadius: 8,
            objectFit: 'cover'
        },
        title: {
            color: theme.palette.text.primary,
            fontSize: 16,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        info: {
            flexGrow: 1,
            marginLeft: theme.spacing(1),
            fontSize: 16,
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            justifyContent: 'space-around',
            fontFamily: '-apple-system,system-ui,sans-serif'
        },
        infoRow: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        infoLabel: {
            color: theme.palette.text.primary
        },
        infoValue: {
            color: theme.palette.text.secondary
        }
    })
);
const DonationCard = ({ imageUrl , name , contribCount , contribDetails , className , ...rest })=>{
    const { classes  } = useStyles();
    const t = useI18N();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(classes.card, className),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.cover,
                src: imageUrl,
                alt: name
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                        className: classes.infoRow,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "h6",
                            color: "textPrimary",
                            fontWeight: 600,
                            className: classes.title,
                            title: name,
                            children: name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("dd", {
                        className: classes.infoRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.infoLabel,
                                children: contribCount
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: classes.infoValue,
                                children: [
                                    " ",
                                    t.contribution({
                                        count: contribCount
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                        className: classes.infoRow,
                        children: contribDetails.map((contrib, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: classes.infoLabel,
                                        children: contrib.amount
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: classes.infoValue,
                                        children: [
                                            " ",
                                            contrib.token,
                                            " "
                                        ]
                                    })
                                ]
                            }, i)
                        )
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/EventRounded.js
var EventRounded = __webpack_require__(74993);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.5.0_a3cb2128d94074523de9af11c2410761/node_modules/@mui/icons-material/LocationOnRounded.js
var LocationOnRounded = __webpack_require__(47049);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/fromUnixTime/index.js
var fromUnixTime = __webpack_require__(98162);
;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/components/ImageHolder.tsx

const ImageHolder = ({ url , title , isFullRound , size  })=>{
    const roundedClass = isFullRound ? 'rounded-full' : 'rounded';
    const containerStyles = {
        width: `${size}px`,
        height: `${size}px`
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: `flex justify-around relative ${roundedClass}`,
        style: containerStyles,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: `object-cover w-full h-full ${roundedClass}`,
            src: url,
            alt: title
        })
    }));
};

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/components/FootprintCard.tsx







const formatDate = (ts)=>{
    return (0,fromUnixTime/* default */.Z)(Number.parseInt(ts, 16)).toLocaleDateString('en-US');
};
const FootprintCard = ({ imageUrl , startDate , endDate , city , country , activity  })=>{
    const t = useI18N();
    // Calc display date
    let displayDate;
    if (startDate && endDate) {
        displayDate = formatDate(startDate);
        if (endDate !== startDate) {
            displayDate += ` ~ ${formatDate(endDate)}`;
        }
    } else {
        displayDate = t.no_activity_time();
    }
    // Calc location
    const location = city || country || 'Metaverse';
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row justify-start gap-2 p-4 cursor-pointer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: "flex flex-row flex-shrink-0 w-max h-max",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImageHolder, {
                    url: imageUrl,
                    isFullRound: true,
                    size: 76
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                className: "flex flex-col justify-around flex-1 text-sm leading-normal text-body-text",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 no-underline",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(EventRounded/* default */.Z, {
                                className: "text-footprint",
                                fontSize: "small"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: displayDate
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(LocationOnRounded/* default */.Z, {
                                className: "text-footprint",
                                fontSize: "small"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: location
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-row gap-2 font-medium",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                className: "capitalize",
                                style: {
                                    color: 'rgb(255, 180, 38)'
                                },
                                children: t.attended()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                children: activity
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(83634);
;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/components/StatusBox.tsx




const StatusBox_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(6)
        }
    })
);
const StatusBox = ({ loading , empty  })=>{
    const { classes  } = StatusBox_useStyles();
    const t = useI18N();
    if (loading) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.statusBox,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {})
        }));
    }
    if (empty) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.statusBox,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textPrimary",
                children: t.no_data()
            })
        }));
    }
    return null;
};

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/components/index.ts





;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/pages/DonationsPage.tsx







const getDonationLink = (label, donation)=>{
    const { platform , identity , id , type  } = donation;
    return dist_default()(`https://${label}.bio/singlegitcoin/:platform/:identity/:id/:type`, {
        platform,
        identity,
        id,
        type: type.replaceAll('-', '.')
    });
};
const DonationsPage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        statusBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: theme.spacing(6)
        },
        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridGap: theme.spacing(2)
        },
        listItem: {
            overflow: 'auto',
            padding: 0
        },
        donationCard: {
            width: '100%',
            overflow: 'auto'
        },
        address: {
            color: theme.palette.primary.main
        },
        link: {
            width: '100%',
            '&:hover': {
                textDecoration: 'none'
            }
        }
    })
);
function DonationPage({ donations , loading , addressLabel  }) {
    const { classes  } = DonationsPage_useStyles();
    const t = useI18N();
    if (loading || !donations.length) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StatusBox, {
            loading: loading,
            empty: !donations.length
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classes.list,
        children: donations.map((donation)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                    className: classes.link,
                    href: getDonationLink(addressLabel, donation),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DonationCard, {
                        className: classes.donationCard,
                        imageUrl: donation.info.image_preview_url || constants/* RSS3_DEFAULT_IMAGE */.g$,
                        name: donation.info.title || t.inactive_project(),
                        contribCount: donation.info.total_contribs || 0,
                        contribDetails: donation.info.token_contribs || []
                    })
                })
            }, donation.id)
        )
    }));
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/pages/FootprintPage.tsx







const FootprintPage_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        address: {
            color: theme.palette.primary.main
        },
        link: {
            '&:hover': {
                textDecoration: 'none'
            }
        }
    })
);
const getFootprintLink = (label, footprint)=>{
    const { platform , identity , id , type  } = footprint;
    return dist_default()(`https://${label}.bio/singlefootprint/:platform/:identity/:id/:type`, {
        platform,
        identity,
        id,
        type: type.replaceAll('-', '.')
    });
};
function FootprintPage({ footprints , address , loading , addressLabel  }) {
    const { classes  } = FootprintPage_useStyles();
    const { value: profile  } = useRss3Profile(address || '');
    const username = profile === null || profile === void 0 ? void 0 : profile.name;
    if (loading || !footprints.length) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(StatusBox, {
            loading: loading,
            empty: !footprints.length
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "grid items-center justify-start grid-cols-1 gap-2 py-4",
        children: footprints.map((footprint)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                className: classes.link,
                href: getFootprintLink(addressLabel, footprint),
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FootprintCard, {
                    imageUrl: footprint.info.image_preview_url || constants/* RSS3_DEFAULT_IMAGE */.g$,
                    startDate: footprint.info.start_date,
                    endDate: footprint.info.end_date,
                    city: footprint.info.country,
                    country: footprint.info.city,
                    username: username !== null && username !== void 0 ? username : '',
                    activity: footprint.info.title || ''
                })
            }, footprint.id)
        )
    }));
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/pages/index.ts



;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/TabCard.tsx







var TabCardType;
(function(TabCardType) {
    TabCardType[TabCardType["Donation"] = 1] = "Donation";
    TabCardType[TabCardType["Footprint"] = 2] = "Footprint";
})(TabCardType || (TabCardType = {}));
function TabCard({ type , addressNames  }) {
    const t = useI18N();
    const addressName = addressNames.find((x)=>x.type === types/* AddressNameType.RSS3 */.Lv.RSS3
    );
    const userAddress = (addressName === null || addressName === void 0 ? void 0 : addressName.resolvedAddress) || '';
    const { value: donations = misc/* EMPTY_LIST */.r , loading: loadingDonations  } = useDonations(userAddress);
    const { value: footprints = misc/* EMPTY_LIST */.r , loading: loadingFootprints  } = useFootprints(userAddress);
    if (!addressName) return null;
    const isDonation = type === TabCardType.Donation;
    const summary = isDonation && !loadingDonations ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        color: "textPrimary",
        component: "span",
        children: t.total_grants({
            count: donations.length.toString()
        })
    }) : null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("link", {
                rel: "stylesheet",
                href: new URL(/* asset import */ __webpack_require__(91561), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: summary
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* AddressViewer */.u0, {
                        addressName: addressName
                    })
                ]
            }),
            isDonation ? /*#__PURE__*/ (0,jsx_runtime.jsx)(DonationPage, {
                donations: donations,
                loading: loadingDonations,
                addressLabel: addressName.label
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FootprintPage, {
                address: userAddress,
                loading: loadingFootprints,
                footprints: footprints,
                addressLabel: addressName.label
            })
        ]
    }));
}

;// CONCATENATED MODULE: ../plugins/RSS3/src/SNSAdaptor/index.tsx





function addressNameSorter(a, z) {
    if (a.type === types/* AddressNameType.RSS3 */.Lv.RSS3) return -1;
    if (z.type === types/* AddressNameType.RSS3 */.Lv.RSS3) return 1;
    return 0;
}
function shouldDisplay(identity, addressNames) {
    var ref;
    return (ref = addressNames === null || addressNames === void 0 ? void 0 : addressNames.some((x)=>x.type === types/* AddressNameType.RSS3 */.Lv.RSS3
    )) !== null && ref !== void 0 ? ref : false;
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    ProfileTabs: [
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_donations`,
            label: 'Donations',
            priority: 1,
            UI: {
                TabContent: ({ addressNames =[]  })=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabCard, {
                        addressNames: addressNames,
                        type: TabCardType.Donation
                    }));
                }
            },
            Utils: {
                addressNameSorter,
                shouldDisplay
            }
        },
        {
            ID: `${constants/* PLUGIN_ID */.Uu}_footprints`,
            label: 'Footprints',
            priority: 2,
            UI: {
                TabContent: ({ addressNames =[]  })=>{
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabCard, {
                        addressNames: addressNames,
                        type: TabCardType.Footprint
                    }));
                }
            },
            Utils: {
                addressNameSorter,
                shouldDisplay
            }
        }, 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 35456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ PluginProfileRPC)
/* harmony export */ });
/* unused harmony export PluginProfileMessages */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14677);


const PluginProfileMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginProfileRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>__webpack_require__.e(/* import() */ 9656).then(__webpack_require__.bind(__webpack_require__, 9656))
, PluginProfileMessages.rpc);


/***/ }),

/***/ 91561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1b7e536225518aff4cfd.css";

/***/ })

}]);