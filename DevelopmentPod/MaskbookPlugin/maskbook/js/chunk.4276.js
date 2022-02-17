"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4276],{

/***/ 98894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42599);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87170);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95273);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60822);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40675);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40299);



const ActionCardIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 164px;
        border-radius: ${theme.spacing(3)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
            ,
            boxShadow: 'none'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body2",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardButton, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        size: "medium",
                        variant: "contained",
                        color: action.type,
                        onClick: action.handler,
                        children: action.text
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 84276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Setup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnLayout.tsx + 5 modules
var ColumnLayout = __webpack_require__(59455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(40299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Container/Container.js
var Container = __webpack_require__(69182);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(95273);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(60822);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(87170);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(5521);
;// CONCATENATED MODULE: ../icons/general/Restore.tsx


const RestoreIcon = (0,utils/* createIcon */.I)('Restore', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M7 25C7 23.8954 7.89543 23 9 23H39C40.1046 23 41 23.8954 41 25V35C41 35.5523 40.5523 36 40 36H8C7.44772 36 7 35.5523 7 35V25Z",
                fill: "#FFD149",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M25.6245 36.13C25.2138 36.1818 25.0988 36.1714 24.8031 36.1714C24.1491 36.1714 23.5219 35.9094 23.0594 35.4431C22.5969 34.9767 22.3371 34.3442 22.3371 33.6847C22.3371 33.0252 22.5969 32.3927 23.0594 31.9264C23.5219 31.46 24.1491 31.198 24.8031 31.198C25.0988 31.198 25.2261 31.2105 25.6245 31.1214C30.2198 30.6928 33.8419 26.8355 33.8419 22.0836C33.8422 20.8867 33.6085 19.7015 33.1544 18.5957C32.7002 17.4899 32.0344 16.4851 31.195 15.6389C30.3556 14.7927 29.359 14.1215 28.2623 13.6638C27.1655 13.2061 25.9901 12.9708 24.8031 12.9713C20.0907 12.9713 16.2654 16.6216 15.8547 21.2554H20.6944L13.2983 29.5437L5.9043 21.2554H10.8734C11.0788 17.6706 12.636 14.3008 15.2259 11.8363C17.8157 9.3718 21.2422 7.9993 24.8031 8C26.6374 7.99973 28.4538 8.36381 30.1486 9.07146C31.8434 9.77911 33.3833 10.8165 34.6804 12.1243C35.9776 13.4321 37.0066 14.9847 37.7086 16.6936C38.4106 18.4024 38.7719 20.234 38.7719 22.0836C38.7662 25.6728 37.4026 29.1246 34.9595 31.7348C32.5163 34.345 29.1776 35.917 25.6245 36.13Z",
            fill: "#FFC524"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6 29C6 27.8954 6.89543 27 8 27H40C41.1046 27 42 27.8954 42 29V39C42 39.5523 41.5523 40 41 40H7C6.44772 40 6 39.5523 6 39V29Z",
                fill: "#FFD149",
                fillOpacity: "0.2"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "3",
                    y: "19",
                    width: "42",
                    height: "21",
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
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter1_b",
                    x: "2",
                    y: "23",
                    width: "44",
                    height: "21",
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
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "5.9043",
                    y1: "36.1723",
                    x2: "38.7719",
                    y2: "36.1723",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFB110"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFC524"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');

// EXTERNAL MODULE: ../icons/general/SignUpAccount.tsx
var SignUpAccount = __webpack_require__(47198);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(71578);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(98894);
;// CONCATENATED MODULE: ../dashboard/src/pages/Setup/index.tsx









const Title = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    text-align: center;
    padding: ${theme.spacing(3)} 0 ${theme.spacing(1)} 0;
`
);
const Setup = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnLayout/* ColumnLayout */.X, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container/* default */.Z, {
            sx: {
                paddingBottom: (theme)=>theme.spacing(8)
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    textAlign: "center",
                    paddingBottom: "32px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "h3",
                                children: t.setup_page_title()
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            paragraph: true,
                            children: t.setup_page_description()
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                    justifyContent: "space-between",
                    maxWidth: "600px",
                    margin: "0 auto",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.setup_page_create_account_title(),
                            subtitle: t.setup_page_create_account_subtitle(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpAccount/* SignUpAccountIcon */.B, {}),
                            action: {
                                type: 'primary',
                                text: t.setup_page_create_account_button(),
                                handler: ()=>navigate(src/* DashboardRoutes.SignUp */.vq.SignUp)
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                            title: t.setup_page_create_restore_title(),
                            subtitle: t.setup_page_create_restore_subtitle(),
                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreIcon, {}),
                            action: {
                                type: 'secondary',
                                text: t.setup_page_create_restore_button(),
                                handler: ()=>navigate(src/* DashboardRoutes.SignIn */.vq.SignIn)
                            }
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const pages_Setup = (Setup);


/***/ }),

/***/ 47198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SignUpAccountIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5521);


const SignUpAccountIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('SignUpAccount', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "7",
            y: "26.5",
            width: "3",
            height: "15",
            rx: "1.5",
            transform: "rotate(-30 7 26.5)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M27.6522 26.1312C25.4873 26.8222 23.1442 26.4569 21.0187 25.1362C20.7879 24.9826 20.4804 24.9445 20.1917 25.0366C19.9031 25.1288 19.6745 25.338 19.5614 25.6241C18.6082 27.9049 16.8895 29.5668 14.7246 30.2579C11.2607 31.3636 7.32552 29.7117 4.9138 26.1422C4.26886 25.1894 3.7485 24.1287 3.38651 22.9947C3.21538 22.4586 3.07891 21.8887 2.96965 21.3329L2.59926 19.2474L4.32911 20.4673C4.65464 20.7042 5.085 20.7712 5.45613 20.6528C5.55922 20.6199 5.65573 20.5663 5.75224 20.5128L6.18959 20.0324L6.21766 19.978L6.27381 19.8692C7.46739 18.0569 9.237 16.6968 11.3194 16.0321C13.2782 15.4068 15.3791 15.4405 17.3212 16.1155C18.5131 14.4401 20.2059 13.1954 22.1647 12.5701C24.2265 11.9119 26.4774 11.9886 28.5003 12.7742L28.6091 12.8303C28.6907 12.8724 28.7929 12.9079 28.8951 12.9435L28.8951 12.9435L28.9223 12.9575C29.1474 13.022 29.3939 13.0114 29.6414 12.9325C30.0331 12.8074 30.3244 12.51 30.4525 12.1283L31.1349 10.1383L32.0414 12.0527C32.3016 12.5831 32.4933 13.1126 32.6644 13.6487C33.0264 14.7827 33.2169 15.9487 33.2433 17.099C33.387 21.3925 31.1161 25.0254 27.6522 26.1312ZM14.3081 24.8247C14.0195 24.9169 13.7176 24.9678 13.4092 24.9981C11.7172 25.1065 10.144 23.9502 9.41964 23.3181C9.94034 22.743 10.98 21.7295 12.2789 21.3149C12.5882 21.2161 12.8694 21.1718 13.1778 21.1415C14.8699 21.0331 16.4431 22.1894 17.1674 22.8215C16.6261 23.4032 15.5864 24.4167 14.3081 24.8247ZM21.3738 21.4788C22.1314 21.6459 23.5866 21.8629 24.8649 21.4549C25.1742 21.3562 25.4497 21.2228 25.698 21.0754C27.1193 20.19 27.7522 18.3294 27.9763 17.3946C27.2187 17.2275 25.7635 17.0104 24.4852 17.4185C24.1759 17.5172 23.9004 17.6506 23.6521 17.798C22.2308 18.6834 21.5979 20.5439 21.3738 21.4788Z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M28.5306 16.4749L28.894 15.8691L45.9996 21.5145L45.9269 22.2171C45.7816 23.7435 45.4666 25.27 44.9578 26.7722C43.7706 30.3338 41.7353 33.3867 39.2397 35.3734C37.3741 36.8514 35.3631 37.6267 33.449 37.6267C32.6979 37.6267 31.9711 37.5298 31.2684 37.2875C28.7486 36.4395 26.883 34.2104 26.035 30.988C25.2112 27.9109 25.405 24.2524 26.5922 20.6907C27.0768 19.1885 27.731 17.7832 28.5306 16.4749ZM30.7116 26.4814C31.0751 26.651 31.4627 26.7237 31.8988 26.7237C32.2865 26.7237 32.7226 26.651 33.183 26.5299C33.678 26.3649 34.0759 26.1583 34.2507 26.0675C34.3069 26.0383 34.3401 26.0211 34.346 26.0211L34.8305 25.7303L34.564 25.2215C34.5398 25.1488 33.7645 23.6709 32.238 22.9924C30.7116 22.314 29.0883 22.7501 29.0156 22.7744L28.4583 22.9198L28.5795 23.477C28.5864 23.484 28.6014 23.5348 28.626 23.6186C28.6872 23.827 28.8083 24.2392 29.0156 24.6885C29.4517 25.5607 30.0332 26.1907 30.7116 26.4814ZM38.2468 29.0497C38.4407 29.0981 38.6345 29.1224 38.8525 29.1224C39.434 29.1224 40.064 28.9528 40.6697 28.6378C41.2997 28.3228 41.7116 27.9594 41.7358 27.9351L42.1719 27.5475L41.8327 27.0871C41.7842 27.0144 40.7424 25.6819 39.1191 25.3184C37.6165 24.982 36.2177 25.5797 35.9603 25.6897C35.9396 25.6986 35.9263 25.7043 35.9208 25.7061L35.412 25.9484L35.6301 26.4814C35.6301 26.5056 35.8482 27.0387 36.26 27.5959C36.8415 28.3713 37.52 28.8801 38.2468 29.0497Z",
                fill: "#1C68F3",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "21.5332",
                    y: "11.8691",
                    width: "28.4664",
                    height: "29.7576",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "2"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
                            in2: "SourceAlpha",
                            operator: "in",
                            result: "effect1_backgroundBlur"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_backgroundBlur",
                            result: "shape"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "3",
                    y1: "21.4999",
                    x2: "32.5",
                    y2: "11.9999",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ })

}]);