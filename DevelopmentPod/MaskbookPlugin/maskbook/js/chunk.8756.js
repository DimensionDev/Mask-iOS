"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8756],{

/***/ 50609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ CircleLoadingIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const CircleLoadingIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('CircleLoadingIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M34.5 18C34.5 27.1127 27.1127 34.5 18 34.5C8.8873 34.5 1.5 27.1127 1.5 18C1.5 8.8873 8.8873 1.5 18 1.5C27.1127 1.5 34.5 8.8873 34.5 18ZM4.8 18C4.8 25.2902 10.7098 31.2 18 31.2C25.2902 31.2 31.2 25.2902 31.2 18C31.2 10.7098 25.2902 4.8 18 4.8C10.7098 4.8 4.8 10.7098 4.8 18Z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18 32.85C18 33.7613 17.2594 34.5085 16.3527 34.4176C14.0175 34.1833 11.7525 33.4527 9.71221 32.2675C7.19493 30.8053 5.10933 28.7031 3.66712 26.1743C2.2249 23.6454 1.47741 20.7801 1.50052 17.869C1.52363 14.9579 2.31652 12.1048 3.79871 9.59921C5.2809 7.09361 7.39961 5.02477 9.93979 3.60267C12.48 2.18058 15.3512 1.45586 18.262 1.50208C21.1728 1.5483 24.0195 2.36382 26.5133 3.86585C28.5345 5.08328 30.2655 6.71657 31.5954 8.65034C32.1117 9.40119 31.8134 10.4101 31.0148 10.8489C30.2161 11.2877 29.2209 10.9884 28.6859 10.2507C27.6493 8.82122 26.3328 7.60953 24.8106 6.69268C22.8156 5.49105 20.5382 4.83864 18.2096 4.80166C15.8809 4.76469 13.584 5.34446 11.5518 6.48214C9.51969 7.61981 7.82472 9.27489 6.63897 11.2794C5.45322 13.2838 4.8189 15.5663 4.80042 17.8952C4.78193 20.2241 5.37992 22.5164 6.53369 24.5394C7.68747 26.5625 9.35595 28.2442 11.3698 29.414C12.9063 30.3066 14.6022 30.8768 16.3543 31.097C17.2584 31.2106 18 31.9387 18 32.85Z"
        })
    ]
}), '0 0 36 36');


/***/ }),

/***/ 95837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ NetworkTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50719);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44451);
/* harmony import */ var _mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92916);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65845);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21784);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77818);







const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        tab: {
            backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
            marginRight: 1,
            '&:last-child': {
                marginRight: 0
            }
        },
        tabs: {
            '& .MuiTabs-flexContainer': {
                backgroundColor: theme.palette.background.paper
            },
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            },
            '& .MuiTabs-scroller': {
                margin: '0 1px'
            },
            '& .MuiTabs-scrollButtons': {
                width: 'unset',
                backgroundColor: !props.isDashboard ? `${theme.palette.background.default}!important` : `${_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primaryBackground2 */ .ZN.primaryBackground2}!important`,
                '&.Mui-disabled': {
                    opacity: 1,
                    '& svg': {
                        opacity: 0.3
                    }
                }
            }
        }
    })
);
function NetworkTab(props) {
    const isDashboard = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .isDashboardPage */ .K2)();
    const { chainId , setChainId , chains  } = props;
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkDescriptors */ .px)();
    const usedNetworks = networks.filter((x)=>chains.find((c)=>c === x.chainId
        )
    );
    const networkIds = usedNetworks.map((x)=>x.chainId.toString()
    );
    const [currentTab, , , setTab] = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useTabs */ .YE)(chainId.toString() ?? networkIds[0], ...networkIds);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_lab_TabContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP, {
        value: currentTab,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskTabList */ .C3, {
            variant: "flexible",
            onChange: (e, v)=>{
                setChainId(Number.parseInt(v, 10));
                setTab(v);
            },
            "aria-label": "Network Tabs",
            children: usedNetworks.map((x)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    "aria-label": x.name,
                    value: x.chainId.toString(),
                    label: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 0.5,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_4__/* .WalletIcon */ .o, {
                                mainIcon: x.icon,
                                size: 18
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                variant: "body2",
                                fontSize: 14,
                                fontWeight: currentTab === x.chainId.toString() ? 700 : 400,
                                children: x.name
                            })
                        ]
                    })
                }, x.chainId);
            })
        })
    });
}


/***/ }),

/***/ 66041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/Savings.tsx


const SavingsIcon = (0,utils/* createIcon */.I)('Savings', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.0888 30.0442C11.5763 29.6606 9.3038 28.688 7.47668 27.3018C7.58557 27.4556 7.65914 27.6316 7.69212 27.8172L8.34479 31.7314C8.37771 31.9307 8.48028 32.1119 8.63424 32.2427C8.78821 32.3736 8.98359 32.4455 9.18563 32.4459H12.6399C12.843 32.4458 13.0395 32.3732 13.1939 32.2413C13.3484 32.1093 13.4507 31.9266 13.4825 31.7259L13.6934 30.4024C13.7089 30.3067 13.7565 30.2191 13.8284 30.154C13.9002 30.0889 13.9921 30.0502 14.0888 30.0442Z",
            fill: "url(#paint0_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.0888 30.0442C11.5763 29.6606 9.3038 28.688 7.47668 27.3018C7.58557 27.4556 7.65914 27.6316 7.69212 27.8172L8.34479 31.7314C8.37771 31.9307 8.48028 32.1119 8.63424 32.2427C8.78821 32.3736 8.98359 32.4455 9.18563 32.4459H12.6399C12.843 32.4458 13.0395 32.3732 13.1939 32.2413C13.3484 32.1093 13.4507 31.9266 13.4825 31.7259L13.6934 30.4024C13.7089 30.3067 13.7565 30.2191 13.8284 30.154C13.9002 30.0889 13.9921 30.0502 14.0888 30.0442Z",
            fill: "url(#paint1_linear_35_22374)",
            fillOpacity: "0.4"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.9987 30.0306L20.9078 30.0433C23.7885 29.5979 26.3537 28.3807 28.2927 26.6572C28.1818 26.759 28.0681 26.8563 27.9527 26.9527C27.7173 27.1475 27.559 27.4198 27.5064 27.7208L26.8373 31.7295C26.8044 31.9289 26.7018 32.1101 26.5479 32.2409C26.3939 32.3717 26.1985 32.4437 25.9965 32.444H22.5422C22.3391 32.4439 22.1426 32.3714 21.9882 32.2394C21.8337 32.1074 21.7314 31.9247 21.6996 31.7241L21.4851 30.3851C21.4767 30.3298 21.4574 30.2767 21.4283 30.2288C21.3993 30.181 21.361 30.1394 21.3158 30.1065C21.2706 30.0735 21.2193 30.0498 21.1649 30.0368C21.1104 30.0238 21.054 30.0217 20.9987 30.0306Z",
            fill: "url(#paint2_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.9987 30.0306L20.9078 30.0433C23.7885 29.5979 26.3537 28.3807 28.2927 26.6572C28.1818 26.759 28.0681 26.8563 27.9527 26.9527C27.7173 27.1475 27.559 27.4198 27.5064 27.7208L26.8373 31.7295C26.8044 31.9289 26.7018 32.1101 26.5479 32.2409C26.3939 32.3717 26.1985 32.4437 25.9965 32.444H22.5422C22.3391 32.4439 22.1426 32.3714 21.9882 32.2394C21.8337 32.1074 21.7314 31.9247 21.6996 31.7241L21.4851 30.3851C21.4767 30.3298 21.4574 30.2767 21.4283 30.2288C21.3993 30.181 21.361 30.1394 21.3158 30.1065C21.2706 30.0735 21.2193 30.0498 21.1649 30.0368C21.1104 30.0238 21.054 30.0217 20.9987 30.0306Z",
            fill: "url(#paint3_linear_35_22374)",
            fillOpacity: "0.4"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.6563 11.0328L10.7023 12.5509C10.8488 12.6239 10.84 12.8357 10.688 12.8963C9.39916 13.4105 8.31562 14.3351 7.60501 15.527L7.56652 15.5915C7.48053 15.7358 7.26483 15.7122 7.21204 15.5528L6.14823 12.3398C5.84613 11.4273 6.79609 10.6041 7.6563 11.0328Z",
            fill: "url(#paint4_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M7.6563 11.0328L10.7023 12.5509C10.8488 12.6239 10.84 12.8357 10.688 12.8963C9.39916 13.4105 8.31562 14.3351 7.60501 15.527L7.56652 15.5915C7.48053 15.7358 7.26483 15.7122 7.21204 15.5528L6.14823 12.3398C5.84613 11.4273 6.79609 10.6041 7.6563 11.0328Z",
            fill: "url(#paint5_linear_35_22374)",
            fillOpacity: "0.4"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.401 20.0495C2.401 19.2832 3.15126 18.6621 4.07676 18.6621H4.81554C5.74104 18.6621 6.4913 19.2832 6.4913 20.0495V21.9109C6.4913 22.6771 5.74104 23.2982 4.81554 23.2982H4.07676C3.15126 23.2982 2.401 22.6771 2.401 21.9109V20.0495Z",
            fill: "url(#paint6_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M2.401 20.0495C2.401 19.2832 3.15126 18.6621 4.07676 18.6621H4.81554C5.74104 18.6621 6.4913 19.2832 6.4913 20.0495V21.9109C6.4913 22.6771 5.74104 23.2982 4.81554 23.2982H4.07676C3.15126 23.2982 2.401 22.6771 2.401 21.9109V20.0495Z",
            fill: "url(#paint7_linear_35_22374)",
            fillOpacity: "0.4"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M31.3634 20.2054C31.3634 26.2731 25.2728 30.5772 17.7596 30.5772C10.2465 30.5772 4.15588 27.1719 4.15588 20.2054C4.15588 12.9228 10.2465 9.95801 17.7596 9.95801C25.2728 9.95801 31.3634 14.1376 31.3634 20.2054Z",
            fill: "url(#paint8_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M32.5108 20.2056C32.3775 20.2065 32.2454 20.1792 32.1234 20.1255C32.0013 20.0717 31.8921 19.9928 31.8027 19.8938C31.6628 19.7447 31.5667 19.56 31.5247 19.36C31.4827 19.1599 31.4965 18.9521 31.5645 18.7594C31.6522 18.5035 31.7938 18.2694 31.9799 18.0731C31.7737 18.0268 31.5599 18.0256 31.3531 18.0695C31.1463 18.1134 30.9515 18.2015 30.7819 18.3276C30.7254 18.3686 30.6552 18.3859 30.5862 18.3758C30.5172 18.3658 30.4548 18.3291 30.4125 18.2737C30.3701 18.2183 30.3511 18.1485 30.3595 18.0792C30.3679 18.01 30.403 17.9468 30.4574 17.9031C30.7427 17.692 31.0783 17.5591 31.4308 17.5175C31.7832 17.4759 32.1405 17.527 32.4672 17.6658C32.6572 17.5386 32.8683 17.4462 33.0908 17.3931C33.6598 17.2731 34.2925 17.4222 34.8261 17.8004C34.8812 17.8423 34.9179 17.904 34.9285 17.9724C34.939 18.0409 34.9226 18.1107 34.8826 18.1673C34.8427 18.2239 34.7823 18.2627 34.7143 18.2757C34.6463 18.2886 34.5758 18.2746 34.5179 18.2367C34.1116 17.9485 33.6189 17.8285 33.1998 17.9167C33.1322 17.9314 33.0661 17.9528 33.0026 17.9803C33.2316 18.1676 33.4017 18.4169 33.4925 18.6985C33.5552 18.8953 33.5675 19.1047 33.5283 19.3075C33.4891 19.5103 33.3996 19.7 33.268 19.8593C33.1744 19.9657 33.0593 20.0512 32.9304 20.1103C32.8015 20.1693 32.6617 20.2006 32.5199 20.202L32.5108 20.2056ZM32.5217 18.2967C32.3192 18.4641 32.1641 18.6816 32.0718 18.9275C32.0322 19.0304 32.023 19.1423 32.045 19.2503C32.0671 19.3582 32.1196 19.4575 32.1963 19.5366C32.2369 19.5802 32.2862 19.615 32.341 19.6386C32.3957 19.6622 32.4548 19.6742 32.5144 19.6738C32.5813 19.6731 32.6473 19.6584 32.708 19.6305C32.7688 19.6026 32.823 19.5623 32.8671 19.512C32.9389 19.4222 32.9871 19.3159 33.0073 19.2027C33.0274 19.0894 33.019 18.973 32.9826 18.8639C32.9006 18.6255 32.7375 18.4234 32.5217 18.293V18.2967Z",
            fill: "url(#paint9_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13.1482 12.2818C12.9673 12.2746 12.7951 12.2021 12.6635 12.0778C12.5319 11.9534 12.4499 11.7856 12.4325 11.6054C12.4151 11.4252 12.4635 11.2448 12.5689 11.0975C12.6742 10.9503 12.8294 10.8462 13.0055 10.8045L13.0459 10.7952C14.2559 10.5068 15.913 10.1127 17.9241 10.1897C19.9352 10.2668 20.851 10.5584 22.4979 11.0927L22.781 11.1836C22.9634 11.2493 23.1131 11.3832 23.1989 11.557C23.2846 11.7309 23.2996 11.9312 23.2407 12.1159C23.1818 12.3006 23.0536 12.4552 22.883 12.5473C22.7125 12.6394 22.5128 12.6619 22.3261 12.6098L22.0421 12.5189C20.4245 12.0021 19.6815 11.7598 17.8666 11.6903C16.0517 11.6208 14.5166 11.9886 13.3875 12.2564L13.3471 12.2658C13.2818 12.2801 13.2149 12.2855 13.1482 12.2818Z",
            fill: "#DD306E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.56567 15.3099C8.58893 15.4019 8.5926 15.4978 8.57644 15.5914C8.56029 15.685 8.52466 15.7741 8.47188 15.853C8.41909 15.9319 8.35033 15.9989 8.27002 16.0495C8.18972 16.1002 8.09968 16.1334 8.00572 16.1471L7.71665 16.188L6.97399 16.2953C6.89754 16.306 6.8196 16.2957 6.74862 16.2653C6.67765 16.2349 6.61635 16.1856 6.57139 16.1229C6.52643 16.0601 6.49951 15.9862 6.49356 15.9093C6.48762 15.8323 6.50287 15.7551 6.53766 15.6862C6.70424 15.3521 6.90597 15.0367 7.13943 14.7454C7.43213 14.3818 7.6403 14.1291 7.873 14.1518C8.17752 14.1809 8.3875 14.669 8.51931 15.1444C8.53749 15.1999 8.55204 15.2553 8.56567 15.3099Z",
            fill: "#FFF5F9"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M8.00559 16.1489L7.71652 16.1898C7.62774 16.0946 7.56865 15.9756 7.5465 15.8473C7.52435 15.7191 7.5401 15.5871 7.59182 15.4677C7.64354 15.3482 7.72898 15.2464 7.83767 15.1748C7.94636 15.1032 8.07359 15.0649 8.20376 15.0645C8.31506 15.0641 8.42459 15.0923 8.52191 15.1463C8.53737 15.2017 8.55191 15.2581 8.56555 15.3126C8.58866 15.4046 8.59222 15.5004 8.57599 15.5939C8.55976 15.6873 8.52411 15.7763 8.47134 15.8552C8.41857 15.934 8.34985 16.0008 8.26963 16.0514C8.1894 16.102 8.09945 16.1352 8.00559 16.1489Z",
            fill: "#0F0F0F"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.74788 10.8484L13.0272 12.4828C13.1849 12.5614 13.1754 12.7894 13.0118 12.8547C11.6242 13.4082 10.4577 14.4036 9.69266 15.6868L9.65122 15.7563C9.55864 15.9116 9.32642 15.8862 9.26959 15.7145L8.1243 12.2555C7.79906 11.2732 8.82178 10.3868 9.74788 10.8484Z",
            fill: "url(#paint10_radial_35_22374)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.74788 10.8484L13.0272 12.4828C13.1849 12.5614 13.1754 12.7894 13.0118 12.8547C11.6242 13.4082 10.4577 14.4036 9.69266 15.6868L9.65122 15.7563C9.55864 15.9116 9.32642 15.8862 9.26959 15.7145L8.1243 12.2555C7.79906 11.2732 8.82178 10.3868 9.74788 10.8484Z",
            fill: "url(#paint11_linear_35_22374)",
            fillOpacity: "0.4"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.639 9.14538C12.3904 8.47365 12.2766 7.75954 12.304 7.04383C12.3314 6.32811 12.4995 5.62481 12.7988 4.97407C13.098 4.32333 13.5225 3.7379 14.0479 3.2512C14.5734 2.76451 15.1896 2.38608 15.8613 2.13752C16.5331 1.88896 17.2472 1.77514 17.9629 1.80257C18.6786 1.82999 19.3819 1.99811 20.0327 2.29734C20.6834 2.59657 21.2688 3.02103 21.7555 3.54651C22.2422 4.07199 22.6206 4.68818 22.8692 5.35991C23.1178 6.03164 23.2316 6.74574 23.2042 7.46146C23.1767 8.17717 23.0086 8.88048 22.7094 9.53122C22.4102 10.182 21.9857 10.7674 21.4602 11.2541C21.1376 11.5528 20.7809 11.8108 20.3981 12.023C19.668 11.8486 18.8119 11.7317 17.894 11.6965C16.7831 11.654 15.7534 11.7377 14.9215 11.9135C14.4904 11.6515 14.0968 11.3304 13.7526 10.9588C13.2659 10.4333 12.8875 9.81711 12.639 9.14538Z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.7235 8.03249C17.7033 8.03172 17.6823 8.0261 17.6644 8.01577L16.0787 7.14749C16.0457 7.12984 16.0218 7.09905 16.0126 7.06304C16.0034 7.02703 16.0096 6.98873 16.0292 6.95671L17.7513 4.26281C17.777 4.22236 17.8222 4.19904 17.8703 4.20088C17.9184 4.20272 17.9617 4.22944 17.9842 4.27173L19.4951 7.08951C19.5132 7.122 19.5155 7.1616 19.5036 7.1968C19.4916 7.23199 19.4655 7.26086 19.4311 7.27593L17.7837 8.02035C17.765 8.02927 17.7437 8.03327 17.7235 8.03249Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M17.6366 10.3019C17.5904 10.3001 17.5481 10.2744 17.5255 10.235L16.0065 7.62601C15.9757 7.57376 15.9841 7.50759 16.0262 7.46391C16.0684 7.42023 16.1343 7.41023 16.1871 7.4402L17.7142 8.27734L19.3007 7.56335C19.3556 7.53847 19.4206 7.55349 19.4593 7.60026C19.498 7.64704 19.5012 7.71365 19.4665 7.7634L17.7525 10.2446C17.726 10.2822 17.6828 10.3036 17.6366 10.3019Z",
            fill: "white",
            fillOpacity: "0.7"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint0_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(10.7828 29.8738) rotate(90) scale(2.57205 3.30608)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear_35_22374",
                    x1: "10.7828",
                    y1: "27.3018",
                    x2: "10.7828",
                    y2: "32.4459",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#F6528F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#F6528F",
                            stopOpacity: "0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint2_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(24.6002 29.5506) rotate(90) scale(2.89339 3.69241)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint3_linear_35_22374",
                    x1: "24.6002",
                    y1: "26.6572",
                    x2: "24.6002",
                    y2: "32.444",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#F6528F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#F6528F",
                            stopOpacity: "0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint4_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(7.72966 12.3239) rotate(52.4597) scale(1.40566 1.1082)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint5_linear_35_22374",
                    x1: "9.10393",
                    y1: "13.8945",
                    x2: "7.06415",
                    y2: "11.9428",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#F6528F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#F6528F",
                            stopOpacity: "0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint6_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(3.8814 20.9801) rotate(174.364) scale(1.48759 1.31246)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint7_linear_35_22374",
                    x1: "4.44628",
                    y1: "21.3289",
                    x2: "2.401",
                    y2: "21.3796",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#F6528F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#F6528F",
                            stopOpacity: "0"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint8_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(17.7596 20.206) rotate(90) scale(10.9866 13.6038)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint9_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(32.6446 18.7791) rotate(90) scale(1.42655 2.28703)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("radialGradient", {
                    id: "paint10_radial_35_22374",
                    cx: "0",
                    cy: "0",
                    r: "1",
                    gradientUnits: "userSpaceOnUse",
                    gradientTransform: "translate(9.82685 12.2384) rotate(52.4597) scale(1.51332 1.19308)",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#FFD1E1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFB2CE"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint11_linear_35_22374",
                    x1: "11.3064",
                    y1: "13.9293",
                    x2: "9.11037",
                    y2: "11.8281",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#F6528F"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#F6528F",
                            stopOpacity: "0"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 37 36');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/plugins/Savings/base.ts
var base = __webpack_require__(73171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(40661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants = __webpack_require__(47104);
// EXTERNAL MODULE: ../web3-shared/evm/constants/primitives.ts
var primitives = __webpack_require__(36596);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var utils_contract = __webpack_require__(28114);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/components/shared/WalletStatusBox/index.tsx + 3 modules
var WalletStatusBox = __webpack_require__(47919);
// EXTERNAL MODULE: ./src/plugins/Trader/trader/useAllProviderTradeContext.ts + 46 modules
var useAllProviderTradeContext = __webpack_require__(9831);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3-evm.ts + 32 modules
var entry_web3_evm = __webpack_require__(94806);
// EXTERNAL MODULE: ./src/components/shared/NetworkTab.tsx
var NetworkTab = __webpack_require__(95837);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
;// CONCATENATED MODULE: ./src/plugins/Savings/types.ts
var TabType;
(function(TabType) {
    TabType["Deposit"] = 'deposit';
    TabType["Withdraw"] = 'withdraw';
})(TabType || (TabType = {}));
var ProtocolType;
(function(ProtocolType) {
    ProtocolType[ProtocolType["Lido"] = 0] = "Lido";
    ProtocolType[ProtocolType["AAVE"] = 1] = "AAVE";
})(ProtocolType || (ProtocolType = {}));

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialogStyles.tsx

const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { isDashboard  })=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        abstractTabWrapper: {
            width: '100%',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2)
        },
        tableTabWrapper: {
            padding: theme.spacing(2)
        },
        tab: {
            height: 36,
            minHeight: 36,
            backgroundColor: isDashboard ? `${entry/* MaskColorVar.primaryBackground2 */.ZN.primaryBackground2}!important` : undefined
        },
        tabPaper: {
            backgroundColor: 'inherit'
        },
        tabs: {
            width: 535,
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            '& .Mui-selected': {
                color: '#ffffff',
                backgroundColor: `${theme.palette.primary.main}!important`
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        content: {
            paddingTop: 0,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        savingsRoot: {
            width: 535,
            margin: 'auto'
        }
    })
);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../icons/general/CircleLoading.tsx
var CircleLoading = __webpack_require__(50609);
;// CONCATENATED MODULE: ../icons/general/Direct.tsx


const DirectIcon = (0,utils/* createIcon */.I)('DirectIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.59 3.588C5.611 1.565 8.631.798 12.5.798h9c3.869 0 6.889.767 8.911 2.79 2.023 2.022 2.79 5.042 2.79 8.91v9c0 3.87-.767 6.89-2.79 8.912-2.022 2.022-5.042 2.789-8.91 2.789h-9c-3.87 0-6.89-.767-8.912-2.79C1.567 28.388.8 25.368.8 21.5v-9c0-3.869.767-6.889 2.79-8.911Zm1.696 1.697C3.934 6.637 3.2 8.867 3.2 12.499v9c0 3.632.734 5.861 2.086 7.214 1.353 1.352 3.583 2.086 7.214 2.086h9c3.632 0 5.862-.734 7.214-2.086 1.353-1.353 2.086-3.582 2.086-7.214v-9c0-3.632-.733-5.862-2.086-7.214-1.352-1.352-3.582-2.086-7.214-2.086h-9c-3.631 0-5.861.734-7.214 2.086Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m24.749 20.686-1.335 2.685a4.2 4.2 0 0 1-3.759 2.328H14.36c-.436 0-2.597-.003-3.77-2.305l-.004-.01L9.252 20.7a1.802 1.802 0 0 0-1.612-1.002H2a1.2 1.2 0 0 1 0-2.4h5.64a4.2 4.2 0 0 1 3.759 2.329v.002l1.333 2.68c.507.99 1.34.99 1.626.99h5.297a1.8 1.8 0 0 0 1.611-1.002l1.336-2.685a4.2 4.2 0 0 1 3.758-2.329h5.61a1.2 1.2 0 1 1 0 2.4h-5.61c-.68 0-1.303.385-1.611 1.002Z"
        })
    ]
}), '0 0 34 34');

// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/IconURL.tsx

const ProviderIconURLs = {
    [ProtocolType.Lido]: new URL(/* asset import */ __webpack_require__(5337), __webpack_require__.b).toString(),
    [ProtocolType.AAVE]: new URL(/* asset import */ __webpack_require__(83000), __webpack_require__.b).toString()
};

// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsTable.tsx











const SavingsTable_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            fontFamily: theme.typography.fontFamily
        },
        tableContainer: {
            maxHeight: 350,
            overflowY: 'scroll'
        },
        tableHeader: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1),
            margin: '0 0 15px 0'
        },
        tableRow: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(1),
            '&:last-child': {
                marginBottom: 0
            }
        },
        tableItem: {
            display: 'flex',
            background: theme.palette.mode === 'light' ? '#F6F8F8' : '#17191D',
            borderRadius: theme.spacing(1)
        },
        tableCell: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px',
            fontSize: '14px'
        },
        logoWrap: {
            position: 'relative',
            margin: '0 20px 0 0'
        },
        logo: {
            width: '32px',
            height: '32px'
        },
        logoMini: {
            height: '16px',
            position: 'absolute',
            bottom: 0,
            right: '-5px'
        },
        protocolLabel: {},
        placeholder: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 300,
            width: '100%'
        },
        loading: {
            fontSize: 14,
            color: theme.palette.text.primary,
            lineHeight: '18px',
            marginTop: 12
        },
        animated: {
            fontSize: 36,
            '@keyframes loadingAnimation': {
                '0%': {
                    transform: 'rotate(0deg)'
                },
                '100%': {
                    transform: 'rotate(360deg)'
                }
            },
            animation: 'loadingAnimation 1s linear infinite'
        },
        direct: {
            fill: theme.palette.secondaryDivider,
            fontSize: 36
        }
    })
);
function SavingsTable({ chainId , tab , protocols , setTab , setSelectedProtocol  }) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = SavingsTable_useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: assets , loading: getAssetsLoading  } = (0,entry_web3/* useFungibleAssets */.$U)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    // Only fetch protocol APR and Balance on chainId change
    const { loading  } = (0,useAsync/* default */.Z)(async ()=>{
        await Promise.all(protocols.map(async (protocol)=>{
            await protocol.updateApr(chainId, web3);
            await protocol.updateBalance(chainId, web3, account);
        }));
    }, [
        chainId,
        web3,
        account,
        protocols
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.containerWrap,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 0,
                className: classes.tableHeader,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_asset')
                        })
                    }),
                    tab === TabType.Deposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 2,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "body1",
                            children: [
                                " ",
                                t('plugin_savings_apr')
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: tab === TabType.Deposit ? 3 : 5,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_wallet')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 3,
                        className: classes.tableCell,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            children: t('plugin_savings_operation')
                        })
                    })
                ]
            }),
            loading || getAssetsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.placeholder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CircleLoading/* CircleLoadingIcon */.e, {
                        className: classes.animated
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.loading,
                        children: t('popups_loading')
                    })
                ]
            }) : protocols.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.tableContainer,
                children: protocols.filter((x)=>!x.balance.isZero()
                ).map((protocol, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        spacing: 0,
                        className: classes.tableRow,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                className: classes.tableCell,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: classes.logoWrap,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                                name: protocol.bareToken.name,
                                                address: protocol.bareToken.address,
                                                classes: {
                                                    icon: classes.logo
                                                },
                                                chainId: chainId
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                                src: ProviderIconURLs[protocol.type],
                                                className: classes.logoMini
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classes.protocolLabel,
                                            children: protocol.bareToken.symbol
                                        })
                                    })
                                ]
                            }),
                            tab === TabType.Deposit ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 2,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: [
                                        protocol.apr,
                                        "%"
                                    ]
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                xs: tab === TabType.Deposit ? 3 : 5,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedBalance */.BV, {
                                        value: tab === TabType.Deposit ? assets.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, protocol.bareToken.address)
                                        )?.balance : protocol.balance,
                                        decimals: protocol.bareToken.decimals,
                                        significant: 6,
                                        minimumBalance: (0,base_src/* rightShift */.pu)(10, protocol.bareToken.decimals - 6),
                                        formatter: base_src/* formatBalance */.az
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 3,
                                className: classes.tableCell,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    color: "primary",
                                    disabled: tab === TabType.Withdraw ? (0,base_src/* isZero */.Fr)(protocol.balance) : false,
                                    onClick: ()=>{
                                        setTab(tab);
                                        setSelectedProtocol(protocol);
                                    },
                                    children: tab === TabType.Deposit ? t('plugin_savings_deposit') : t('plugin_savings_withdraw')
                                })
                            })
                        ]
                    }, index)
                )
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.placeholder,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DirectIcon, {
                    className: classes.direct
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(32588);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var utils_token = __webpack_require__(91761);
;// CONCATENATED MODULE: ../web3-contracts/abis/AaveLendingPoolAddressProvider.json
const AaveLendingPoolAddressProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"},{"indexed":false,"internalType":"bool","name":"hasProxy","type":"bool"}],"name":"AddressSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ConfigurationAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"EmergencyAdminUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolCollateralManagerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolConfiguratorUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingPoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"LendingRateOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"newMarketId","type":"string"}],"name":"MarketIdSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"PriceOracleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProxyCreated","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmergencyAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPool","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolCollateralManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingPoolConfigurator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLendingRateOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketId","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPoolAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"address","name":"implementationAddress","type":"address"}],"name":"setAddressAsProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"emergencyAdmin","type":"address"}],"name":"setEmergencyAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"manager","type":"address"}],"name":"setLendingPoolCollateralManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"configurator","type":"address"}],"name":"setLendingPoolConfiguratorImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pool","type":"address"}],"name":"setLendingPoolImpl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"lendingRateOracle","type":"address"}],"name":"setLendingRateOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"marketId","type":"string"}],"name":"setMarketId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"admin","type":"address"}],"name":"setPoolAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"priceOracle","type":"address"}],"name":"setPriceOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var Trader_messages = __webpack_require__(38329);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsFormStyles.tsx

const SavingsFormStyles_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        containerWrap: {
            padding: '0 15px',
            fontFamily: theme.typography.fontFamily
        },
        inputWrap: {
            position: 'relative',
            width: '100%',
            margin: '0 0 10px 0'
        },
        inputTextField: {
            padding: '15px 10px 0 10px',
            fontSize: '18px'
        },
        maxChip: {
            height: '20px',
            borderRadius: '3px',
            margin: '0 5px 10px 0'
        },
        selectTokenChip: {
            margin: '0 0 10px 0'
        },
        tokenValueUSD: {
            padding: '0 0 10px 0'
        },
        infoRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 0 15px 0'
        },
        infoRowLeft: {
            display: 'flex',
            alignItems: 'center'
        },
        infoRowRight: {
            fontWeight: 'bold'
        },
        rowImage: {
            width: '24px',
            height: '24px',
            margin: '0 5px 0 0'
        },
        button: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto',
            marginTop: '0 !important'
        },
        disabledButton: {
            fontSize: 18,
            lineHeight: '22px',
            fontWeight: 600,
            padding: '13px 0',
            borderRadius: 24,
            height: 'auto'
        },
        connectWallet: {
            marginTop: 0
        },
        tooltip: {
            backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
            color: theme.palette.mode === 'dark' ? '#7B8192' : '#ffffff',
            borderRadius: 8,
            padding: 16,
            textAlign: 'left',
            fontSize: 16,
            lineHeight: '22px',
            fontWeight: 500
        },
        tooltipArrow: {
            color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000'
        },
        gasFee: {
            padding: '0 0 0 5px',
            fontSize: 11,
            opacity: 0.5
        }
    })
);

// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx
var EthereumERC20TokenApprovedBoundary = __webpack_require__(19963);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(72005);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(82192);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsForm.tsx






















const resolveProtocolName = (0,base_src/* createLookupTableResolver */.FG)({
    [ProtocolType.Lido]: 'Lido',
    [ProtocolType.AAVE]: 'AAVE'
}, 'unknown');
function SavingsForm({ chainId , protocol , tab , onClose  }) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = SavingsFormStyles_useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const [inputAmount, setInputAmount] = (0,react.useState)('');
    const [estimatedGas, setEstimatedGas] = (0,react.useState)(base_src/* ZERO */.xE);
    const { value: nativeTokenBalance  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, '', {
        chainId
    });
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Trader_messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const onConvertClick = (0,react.useCallback)(()=>{
        const token = protocol.stakeToken;
        openSwapDialog({
            open: true,
            traderProps: {
                defaultInputCoin: {
                    id: token.address,
                    name: token.name ?? '',
                    symbol: token.symbol ?? '',
                    contract_address: token.address,
                    decimals: token.decimals
                }
            }
        });
    }, [
        protocol,
        openSwapDialog
    ]);
    // #region form variables
    const { value: inputTokenBalance  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, protocol.bareToken.address, {
        chainId
    });
    const tokenAmount = (0,react.useMemo)(()=>new (bignumber_default())((0,base_src/* rightShift */.pu)(inputAmount || '0', protocol.bareToken.decimals))
    , [
        inputAmount,
        protocol.bareToken.decimals
    ]);
    const balanceAsBN = (0,react.useMemo)(()=>tab === TabType.Deposit ? new (bignumber_default())(inputTokenBalance || '0') : protocol.balance
    , [
        tab,
        protocol.balance,
        inputTokenBalance
    ]);
    const needsSwap = protocol.type === ProtocolType.Lido && tab === TabType.Withdraw;
    const { loading  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!web3 || !(tokenAmount.toNumber() > 0)) return;
        try {
            setEstimatedGas(tab === TabType.Deposit ? await protocol.depositEstimate(account, chainId, web3, tokenAmount) : await protocol.withdrawEstimate(account, chainId, web3, tokenAmount));
        } catch  {
            // do nothing
            console.log('Failed to estimate gas');
        }
    }, [
        chainId,
        tab,
        protocol,
        tokenAmount
    ]);
    // #endregion
    // #region form validation
    const validationMessage = (0,react.useMemo)(()=>{
        if (needsSwap) return '';
        if (tokenAmount.isZero() || !inputAmount) return t('plugin_trader_error_amount_absence');
        if ((0,base_src/* isLessThan */.FI)(tokenAmount, 0)) return t('plugin_trade_error_input_amount_less_minimum_amount');
        if ((0,base_src/* isLessThan */.FI)(balanceAsBN.minus(estimatedGas), tokenAmount)) {
            return t('plugin_trader_error_insufficient_balance', {
                symbol: tab === TabType.Deposit ? protocol.bareToken.symbol : protocol.stakeToken.symbol
            });
        }
        return '';
    }, [
        inputAmount,
        tokenAmount,
        nativeTokenBalance,
        balanceAsBN
    ]);
    const { value: tokenPrice = 0  } = (0,entry_web3/* useFungibleTokenPrice */.Of)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, !(0,base_src/* isSameAddress */.Wr)(protocol.bareToken.address, NATIVE_TOKEN_ADDRESS) ? protocol.bareToken.address : undefined, {
        chainId
    });
    const tokenValueUSD = (0,react.useMemo)(()=>inputAmount ? new (bignumber_default())(inputAmount).times(tokenPrice).toFixed(2) : '0'
    , [
        inputAmount,
        tokenPrice
    ]);
    // #endregion
    const { value: approvalData  } = (0,useAsync/* default */.Z)(async ()=>{
        const token = protocol.bareToken;
        const aavePoolAddress = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const lPoolAddressProviderContract = (0,utils_contract/* createContract */.OP)(web3, aavePoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        return {
            approveToken: token.schema === types/* SchemaType.ERC20 */.XQ.ERC20 ? (0,utils_token/* createERC20Token */.wY)(chainId, token.address, token.name, token.symbol, token.decimals) : undefined,
            approveAmount: new (bignumber_default())(inputAmount).shiftedBy(token.decimals),
            approveAddress: poolAddress
        };
    }, [
        protocol.bareToken,
        inputAmount,
        chainId
    ]);
    const openShareTxDialog = (0,src/* useOpenShareTxDialog */.z)();
    const shareText = t('promote_savings', {
        amount: inputAmount,
        symbol: protocol.bareToken.symbol,
        chain: resolver/* chainResolver.chainName */.VU.chainName(chainId),
        account: (0,twitter_com_base/* isTwitter */.L)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    });
    const [, executor] = (0,useAsyncFn/* default */.Z)(async ()=>{
        if (!web3) return;
        switch(tab){
            case TabType.Deposit:
                const hash = await protocol.deposit(account, chainId, web3, tokenAmount);
                if (typeof hash !== 'string') {
                    throw new Error('Failed to deposit token.');
                } else {
                    await protocol.updateBalance(chainId, web3, account);
                }
                openShareTxDialog({
                    hash,
                    onShare () {
                        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
                    }
                });
                break;
            case TabType.Withdraw:
                switch(protocol.type){
                    case ProtocolType.Lido:
                        onClose?.();
                        onConvertClick();
                        return;
                    default:
                        if (!await protocol.withdraw(account, chainId, web3, tokenAmount)) {
                            throw new Error('Failed to withdraw token.');
                        } else {
                            await protocol.updateBalance(chainId, web3, account);
                        }
                        return;
                }
            default:
                (0,esm/* unreachable */.t1)(tab);
        }
    }, [
        tab,
        protocol,
        account,
        chainId,
        web3,
        tokenAmount,
        openShareTxDialog
    ]);
    const buttonDom = (0,react.useMemo)(()=>{
        if (tab === TabType.Deposit) return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
            expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
            expectedChainId: chainId,
            noSwitchNetworkTip: true,
            ActionButtonPromiseProps: {
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabledButton
                },
                color: 'primary',
                style: {
                    padding: '13px 0',
                    marginTop: 0
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                ActionButtonProps: {
                    color: 'primary',
                    classes: {
                        root: classes.button
                    }
                },
                classes: {
                    connectWallet: classes.connectWallet,
                    button: classes.button
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: approvalData?.approveAmount.toFixed() ?? '',
                    token: approvalData?.approveToken,
                    spender: approvalData?.approveAddress,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                        fullWidth: true,
                        color: "primary",
                        size: "large",
                        variant: "contained",
                        init: validationMessage || t('plugin_savings_deposit') + ' ' + protocol.bareToken.symbol,
                        waiting: t('plugin_savings_process_deposit'),
                        failed: t('failed'),
                        failedOnClick: "use executor",
                        complete: t('done'),
                        disabled: validationMessage !== '' && !needsSwap,
                        noUpdateEffect: true,
                        executor: executor
                    })
                })
            })
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
            expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
            expectedChainId: chainId,
            noSwitchNetworkTip: true,
            ActionButtonPromiseProps: {
                fullWidth: true,
                classes: {
                    root: classes.button,
                    disabled: classes.disabledButton
                },
                color: 'primary',
                style: {
                    padding: '13px 0',
                    marginTop: 0
                }
            },
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                ActionButtonProps: {
                    color: 'primary',
                    classes: {
                        root: classes.button
                    }
                },
                classes: {
                    connectWallet: classes.connectWallet,
                    button: classes.button
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* ActionButtonPromise */.Zc, {
                    fullWidth: true,
                    color: "primary",
                    size: "large",
                    variant: "contained",
                    init: needsSwap ? 'Swap ' + protocol.bareToken.symbol : validationMessage || t('plugin_savings_withdraw') + ' ' + protocol.stakeToken.symbol,
                    waiting: t('plugin_savings_process_withdraw'),
                    failed: t('failed'),
                    failedOnClick: "use executor",
                    complete: t('done'),
                    disabled: validationMessage !== '',
                    noUpdateEffect: true,
                    executor: executor
                })
            })
        });
    }, [
        executor,
        validationMessage,
        needsSwap,
        protocol,
        tab,
        approvalData,
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.containerWrap,
        children: [
            needsSwap ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.inputWrap,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenAmountPanel */.xl, {
                            amount: inputAmount,
                            maxAmount: balanceAsBN.minus(estimatedGas).toString(),
                            balance: balanceAsBN.toString(),
                            label: t('plugin_savings_amount'),
                            token: protocol.bareToken,
                            onAmountChange: setInputAmount,
                            InputProps: {
                                classes: {
                                    root: classes.inputTextField
                                }
                            },
                            MaxChipProps: {
                                classes: {
                                    root: classes.maxChip
                                }
                            },
                            SelectTokenChip: {
                                ChipProps: {
                                    classes: {
                                        root: classes.selectTokenChip
                                    }
                                }
                            }
                        })
                    }),
                    loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {
                            width: 16,
                            height: 16
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        textAlign: "right",
                        className: classes.tokenValueUSD,
                        children: [
                            "\u2248 ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* FormattedCurrency */.bO, {
                                value: tokenValueUSD,
                                formatter: base_src/* formatCurrency */.xG
                            }),
                            estimatedGas > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: classes.gasFee,
                                children: [
                                    "+ ",
                                    (0,base_src/* formatBalance */.az)(estimatedGas, 18),
                                    " ETH"
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.infoRow,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.infoRowLeft,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                address: protocol.bareToken.address,
                                classes: {
                                    icon: classes.rowImage
                                }
                            }),
                            protocol.bareToken.name,
                            " ",
                            t('plugin_savings_apr'),
                            "%"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "body2",
                        className: classes.infoRowRight,
                        children: [
                            protocol.apr,
                            "%"
                        ]
                    })
                ]
            }),
            buttonDom
        ]
    });
}

;// CONCATENATED MODULE: ../web3-contracts/abis/AaveProtocolDataProvider.json
const AaveProtocolDataProvider_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"addressesProvider","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ADDRESSES_PROVIDER","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllATokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllReservesTokens","outputs":[{"components":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"tokenAddress","type":"address"}],"internalType":"struct AaveProtocolDataProvider.TokenData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveConfigurationData","outputs":[{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"liquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"liquidationBonus","type":"uint256"},{"internalType":"uint256","name":"reserveFactor","type":"uint256"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"},{"internalType":"bool","name":"borrowingEnabled","type":"bool"},{"internalType":"bool","name":"stableBorrowRateEnabled","type":"bool"},{"internalType":"bool","name":"isActive","type":"bool"},{"internalType":"bool","name":"isFrozen","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"internalType":"uint256","name":"availableLiquidity","type":"uint256"},{"internalType":"uint256","name":"totalStableDebt","type":"uint256"},{"internalType":"uint256","name":"totalVariableDebt","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"averageStableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveTokensAddresses","outputs":[{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"getUserReserveData","outputs":[{"internalType":"uint256","name":"currentATokenBalance","type":"uint256"},{"internalType":"uint256","name":"currentStableDebt","type":"uint256"},{"internalType":"uint256","name":"currentVariableDebt","type":"uint256"},{"internalType":"uint256","name":"principalStableDebt","type":"uint256"},{"internalType":"uint256","name":"scaledVariableDebt","type":"uint256"},{"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"internalType":"uint40","name":"stableRateLastUpdated","type":"uint40"},{"internalType":"bool","name":"usageAsCollateralEnabled","type":"bool"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/Lido.json
const Lido_namespaceObject = JSON.parse('[{"constant":false,"inputs":[],"name":"resume","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"stop","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"depositContract","type":"address"},{"name":"_oracle","type":"address"},{"name":"_operators","type":"address"},{"name":"_treasury","type":"address"},{"name":"_insuranceFund","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getInsuranceFund","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethAmount","type":"uint256"}],"name":"getSharesByPooledEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sender","type":"address"},{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOperators","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEPOSIT_SIZE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalPooledEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PAUSE_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getTreasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_ORACLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isStopped","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_WITHDRAWAL_KEY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBufferedEther","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SIGNATURE_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getWithdrawalCredentials","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFeeDistribution","outputs":[{"name":"treasuryFeeBasisPoints","type":"uint16"},{"name":"insuranceFeeBasisPoints","type":"uint16"},{"name":"operatorsFeeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sharesAmount","type":"uint256"}],"name":"getPooledEthByShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOracle","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_treasuryFeeBasisPoints","type":"uint16"},{"name":"_insuranceFeeBasisPoints","type":"uint16"},{"name":"_operatorsFeeBasisPoints","type":"uint16"}],"name":"setFeeDistribution","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_feeBasisPoints","type":"uint16"}],"name":"setFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_maxDeposits","type":"uint256"}],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"MANAGE_FEE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"SET_TREASURY","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_referral","type":"address"}],"name":"submit","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"WITHDRAWAL_CREDENTIALS_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PUBKEY_LENGTH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amount","type":"uint256"},{"name":"_pubkeyHash","type":"bytes32"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recipient","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getDepositContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBeaconStat","outputs":[{"name":"depositedValidators","type":"uint256"},{"name":"beaconValidators","type":"uint256"},{"name":"beaconBalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BURN_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_insuranceFund","type":"address"}],"name":"setInsuranceFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getFee","outputs":[{"name":"feeBasisPoints","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SET_INSURANCE_FUND","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTotalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_withdrawalCredentials","type":"bytes32"}],"name":"setWithdrawalCredentials","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositBufferedEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_sharesAmount","type":"uint256"}],"name":"burnShares","outputs":[{"name":"newTotalShares","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_treasury","type":"address"}],"name":"setTreasury","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_beaconValidators","type":"uint256"},{"name":"_beaconBalance","type":"uint256"}],"name":"pushBeacon","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"sharesOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"},{"anonymous":false,"inputs":[],"name":"Stopped","type":"event"},{"anonymous":false,"inputs":[],"name":"Resumed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint16"}],"name":"FeeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"treasuryFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"insuranceFeeBasisPoints","type":"uint16"},{"indexed":false,"name":"operatorsFeeBasisPoints","type":"uint16"}],"name":"FeeDistributionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"withdrawalCredentials","type":"bytes32"}],"name":"WithdrawalCredentialsSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"referral","type":"address"}],"name":"Submitted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Unbuffered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"tokenAmount","type":"uint256"},{"indexed":false,"name":"sentFromBuffer","type":"uint256"},{"indexed":true,"name":"pubkeyHash","type":"bytes32"},{"indexed":false,"name":"etherAmount","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/LDOProtocol.ts





class LidoProtocol {
    get apr() {
        return this._apr;
    }
    get balance() {
        return this._balance;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async updateApr(chainId, web3) {
        try {
            const response = await fetch('https://cors.r2d2.to/?https://stake.lido.fi/api/steth-apr');
            this._apr = await response.text();
        } catch  {
            // the default APR is 5.30%
            this._apr = '5.30';
        }
    }
    async updateBalance(chainId, web3, account) {
        try {
            const contract = (0,utils_contract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            this._balance = new (bignumber_default())(await contract?.methods.balanceOf(account).call() ?? '0');
        } catch (error) {
            this._balance = base_src/* ZERO */.xE;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const contract = (0,utils_contract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            const gasEstimate = await contract?.methods.submit((0,constants/* getLidoConstants */.oO)(chainId).LIDO_REFERRAL_ADDRESS || primitives/* ZERO_ADDRESS */.r).estimateGas({
                from: account,
                value: value.toString()
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            console.error('LDO `depositEstimate()` Error', error);
            return new (bignumber_default())(0);
        }
    }
    async deposit(account, chainId, web3, value) {
        const gasEstimate = await this.depositEstimate(account, chainId, web3, value);
        return new Promise((resolve, reject)=>{
            const contract = (0,utils_contract/* createContract */.OP)(web3, (0,constants/* getLidoConstants */.oO)(chainId).LIDO_stETH_ADDRESS || primitives/* ZERO_ADDRESS */.r, Lido_namespaceObject);
            return contract?.methods.submit((0,constants/* getLidoConstants */.oO)(chainId).LIDO_REFERRAL_ADDRESS || primitives/* ZERO_ADDRESS */.r).send({
                from: account,
                value: value.toString(),
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType.ERROR */.iE.ERROR, reject).once(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            });
        });
    }
    async withdrawEstimate(account, chainId, web3, value) {
        return base_src/* ZERO */.xE;
    }
    async withdraw(account, chainId, web3, value) {
        /*
         * @TODO: Implement withdraw when stETH Beacon Chain allows for withdraws
         *
         * Review: https://github.com/lidofinance/lido-dao when ETH 2.0 is implemented.
         *
         * For now, just redirect to swap plugin
         *
         * await contract.methods
         *     .withdraw(inputTokenTradeAmount, '0x0000000000000000000000000000000000000000')
         *     .send({
         *         from: account,
         *         gasLimit: 2100000,
         *     })
         */ return '0x';
    }
    constructor(pair){
        this.pair = pair;
        this._apr = '0.00';
        this._balance = base_src/* ZERO */.xE;
        this.type = ProtocolType.Lido;
    }
}

;// CONCATENATED MODULE: ../web3-contracts/abis/AaveLendingPool.json
const AaveLendingPool_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRateMode","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"borrowRate","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Borrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"onBehalfOf","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"uint16","name":"referral","type":"uint16"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":true,"internalType":"address","name":"initiator","type":"address"},{"indexed":true,"internalType":"address","name":"asset","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"premium","type":"uint256"},{"indexed":false,"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"FlashLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"collateralAsset","type":"address"},{"indexed":true,"internalType":"address","name":"debtAsset","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"debtToCover","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidatedCollateralAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"LiquidationCall","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"RebalanceStableBorrowRate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"repayer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Repay","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidityRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowRate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"liquidityIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"variableBorrowIndex","type":"uint256"}],"name":"ReserveDataUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralDisabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"}],"name":"ReserveUsedAsCollateralEnabled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"reserve","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"FLASHLOAN_PREMIUM_TOTAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LENDINGPOOL_REVISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_NUMBER_RESERVES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_STABLE_RATE_BORROW_SIZE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"interestRateMode","type":"uint256"},{"internalType":"uint16","name":"referralCode","type":"uint16"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"borrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"balanceFromBefore","type":"uint256"},{"internalType":"uint256","name":"balanceToBefore","type":"uint256"}],"name":"finalizeTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiverAddress","type":"address"},{"internalType":"address[]","name":"assets","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256[]","name":"modes","type":"uint256[]"},{"internalType":"address","name":"onBehalfOf","type":"address"},{"internalType":"bytes","name":"params","type":"bytes"},{"internalType":"uint16","name":"referralCode","type":"uint16"}],"name":"flashLoan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAddressesProvider","outputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveData","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.ReserveConfigurationMap","name":"configuration","type":"tuple"},{"internalType":"uint128","name":"liquidityIndex","type":"uint128"},{"internalType":"uint128","name":"variableBorrowIndex","type":"uint128"},{"internalType":"uint128","name":"currentLiquidityRate","type":"uint128"},{"internalType":"uint128","name":"currentVariableBorrowRate","type":"uint128"},{"internalType":"uint128","name":"currentStableBorrowRate","type":"uint128"},{"internalType":"uint40","name":"lastUpdateTimestamp","type":"uint40"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtTokenAddress","type":"address"},{"internalType":"address","name":"variableDebtTokenAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"},{"internalType":"uint8","name":"id","type":"uint8"}],"internalType":"struct DataTypes.ReserveData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedIncome","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"}],"name":"getReserveNormalizedVariableDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReservesList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserAccountData","outputs":[{"internalType":"uint256","name":"totalCollateralETH","type":"uint256"},{"internalType":"uint256","name":"totalDebtETH","type":"uint256"},{"internalType":"uint256","name":"availableBorrowsETH","type":"uint256"},{"internalType":"uint256","name":"currentLiquidationThreshold","type":"uint256"},{"internalType":"uint256","name":"ltv","type":"uint256"},{"internalType":"uint256","name":"healthFactor","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserConfiguration","outputs":[{"components":[{"internalType":"uint256","name":"data","type":"uint256"}],"internalType":"struct DataTypes.UserConfigurationMap","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"aTokenAddress","type":"address"},{"internalType":"address","name":"stableDebtAddress","type":"address"},{"internalType":"address","name":"variableDebtAddress","type":"address"},{"internalType":"address","name":"interestRateStrategyAddress","type":"address"}],"name":"initReserve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ILendingPoolAddressesProvider","name":"provider","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"collateralAsset","type":"address"},{"internalType":"address","name":"debtAsset","type":"address"},{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"debtToCover","type":"uint256"},{"internalType":"bool","name":"receiveAToken","type":"bool"}],"name":"liquidationCall","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"user","type":"address"}],"name":"rebalanceStableBorrowRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rateMode","type":"uint256"},{"internalType":"address","name":"onBehalfOf","type":"address"}],"name":"repay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"configuration","type":"uint256"}],"name":"setConfiguration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"val","type":"bool"}],"name":"setPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"address","name":"rateStrategyAddress","type":"address"}],"name":"setReserveInterestRateStrategyAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"bool","name":"useAsCollateral","type":"bool"}],"name":"setUserUseReserveAsCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"rateMode","type":"uint256"}],"name":"swapBorrowRateMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"asset","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(4350);
;// CONCATENATED MODULE: ./src/plugins/Savings/protocols/AAVEProtocol.ts







class AAVEProtocol {
    get type() {
        return ProtocolType.AAVE;
    }
    get apr() {
        return this._apr;
    }
    get balance() {
        return this._balance;
    }
    get bareToken() {
        return this.pair[0];
    }
    get stakeToken() {
        return this.pair[1];
    }
    async updateApr(chainId, web3) {
        try {
            const subgraphUrl = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_SUBGRAPHS || '';
            if (!subgraphUrl) {
                this._apr = AAVEProtocol.DEFAULT_APR;
                return;
            }
            const body = JSON.stringify({
                query: `{
                reserves (where: {
                    underlyingAsset: "${this.bareToken.address}"
                    pool: "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5"
                }) {
                    id
                    name
                    underlyingAsset
                    price {
                     id
                    }
                    liquidityRate
                  }
                }`
            });
            const response = await fetch(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const fullResponse = await response.json();
            const liquidityRate = +fullResponse.data.reserves[0].liquidityRate;
            const RAY = (0,base_src/* pow10 */.wA)(27) // 10 to the power 27
            ;
            // APY and APR are returned here as decimals, multiply by 100 to get the percents
            this._apr = new (bignumber_default())(liquidityRate).times(100).div(RAY).toFixed(2);
        } catch (error) {
            console.error('AAVE: Apr Error:', error);
            this._apr = AAVEProtocol.DEFAULT_APR;
        }
    }
    async updateBalance(chainId, web3, account) {
        try {
            const subgraphUrl = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_SUBGRAPHS || '';
            if (!subgraphUrl) {
                this._apr = AAVEProtocol.DEFAULT_APR;
                return;
            }
            const body = JSON.stringify({
                query: `{
                reserves (where: {
                    underlyingAsset: "${this.bareToken.address}"
                    pool : "0xb53c1a33016b2dc2ff3653530bff1848a515c8c5"
                }) {
                    id
                    aToken {
                      id
                    }
                    }
                }`
            });
            const response = await fetch(subgraphUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            const fullResponse = await response.json();
            const aTokenId = fullResponse.data.reserves[0].aToken.id;
            const contract = (0,utils_contract/* createContract */.OP)(web3, aTokenId || primitives/* ZERO_ADDRESS */.r, ERC20);
            this._balance = new (bignumber_default())(await contract?.methods.balanceOf(account).call() ?? '0');
        } catch (error) {
            console.error('AAVE BALANCE ERROR: ', error);
            this._balance = base_src/* ZERO */.xE;
        }
    }
    async depositEstimate(account, chainId, web3, value) {
        try {
            const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
            const gasEstimate = await operation?.estimateGas({
                from: account
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            console.error('AAVE deposit estimate ERROR: ', error);
            return base_src/* ZERO */.xE;
        }
    }
    async createDepositTokenOperation(account, chainId, web3, value) {
        const aaveLPoolAddress = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const lPoolAddressProviderContract = (0,utils_contract/* createContract */.OP)(web3, aaveLPoolAddress, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        const contract = (0,utils_contract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
        return contract?.methods.deposit(this.bareToken.address, new (bignumber_default())(value).toFixed(), account, '0');
    }
    async deposit(account, chainId, web3, value) {
        const gasEstimate = await this.depositEstimate(account, chainId, web3, value);
        const operation = await this.createDepositTokenOperation(account, chainId, web3, value);
        if (!operation) {
            throw new Error("Can't create deposit operation");
        }
        return new Promise((resolve, reject)=>{
            operation.send({
                from: account,
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType.ERROR */.iE.ERROR, reject).once(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            });
        });
    }
    async withdrawEstimate(account, chainId, web3, value) {
        try {
            const lPoolAddressProviderContract = (0,utils_contract/* createContract */.OP)(web3, (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r, AaveLendingPoolAddressProvider_namespaceObject);
            const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
            const contract = (0,utils_contract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
            const gasEstimate = await contract?.methods.withdraw(this.bareToken.address, new (bignumber_default())(value).toFixed(), account).estimateGas({
                from: account
            });
            return new (bignumber_default())(gasEstimate || 0);
        } catch (error) {
            return base_src/* ZERO */.xE;
        }
    }
    async withdraw(account, chainId, web3, value) {
        const lPoolAddressProviderContract = (0,utils_contract/* createContract */.OP)(web3, (0,constants/* getAaveConstants */.wG)(chainId).AAVE_LENDING_POOL_ADDRESSES_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r, AaveLendingPoolAddressProvider_namespaceObject);
        const poolAddress = await lPoolAddressProviderContract?.methods.getLendingPool().call();
        const gasEstimate = await this.withdrawEstimate(account, chainId, web3, value);
        const contract = (0,utils_contract/* createContract */.OP)(web3, poolAddress || primitives/* ZERO_ADDRESS */.r, AaveLendingPool_namespaceObject);
        return new Promise((resolve)=>contract?.methods.withdraw(this.bareToken.address, new (bignumber_default())(value).toFixed(), account).send({
                from: account,
                gas: gasEstimate.toNumber()
            }).once(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (_, receipt)=>{
                resolve(receipt.transactionHash);
            })
        );
    }
    constructor(pair){
        this.pair = pair;
        this._apr = '0.00';
        this._balance = base_src/* ZERO */.xE;
    }
}
AAVEProtocol.DEFAULT_APR = '0.17';

// EXTERNAL MODULE: ./src/plugins/Savings/constants.ts
var Savings_constants = __webpack_require__(21114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/flatten.js
var flatten = __webpack_require__(62517);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/chunk.js
var chunk = __webpack_require__(530);
;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/SavingsDialog.tsx

























function SavingsDialog({ open , onClose  }) {
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const isDashboard = (0,shared_base_src/* isDashboardPage */.K2)();
    const { classes  } = useStyles({
        isDashboard
    });
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [chainId, setChainId] = (0,react.useState)(currentChainId);
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, {
        chainId
    });
    const [tab, setTab] = (0,react.useState)(TabType.Deposit);
    const [selectedProtocol, setSelectedProtocol] = (0,react.useState)(null);
    const { value: chains = shared_base_src/* EMPTY_LIST */.rP  } = (0,useAsync/* default */.Z)(async ()=>{
        const networks = await messages/* WalletRPC.getSupportedNetworks */.V.getSupportedNetworks();
        return networks.map((network)=>resolver/* networkResolver.networkChainId */.LJ.networkChainId(network)
        );
    }, []);
    const { value: aaveTokens  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!open || chainId !== types/* ChainId.Mainnet */.a_.Mainnet) {
            return shared_base_src/* EMPTY_LIST */.rP;
        }
        const address = (0,constants/* getAaveConstants */.wG)(chainId).AAVE_PROTOCOL_DATA_PROVIDER_CONTRACT_ADDRESS || primitives/* ZERO_ADDRESS */.r;
        const protocolDataContract = (0,utils_contract/* createContract */.OP)(web3, address, AaveProtocolDataProvider_namespaceObject);
        const tokens = await protocolDataContract?.methods.getAllReservesTokens().call();
        const aTokens = await protocolDataContract?.methods.getAllATokens().call();
        return tokens?.map((token)=>{
            return [
                token[1],
                aTokens?.filter((f)=>f[0].toUpperCase() === `a${token[0]}`.toUpperCase()
                )[0][1]
            ];
        });
    }, [
        open,
        web3,
        chainId
    ]);
    const { value: detailedAaveTokens  } = (0,entry_web3/* useFungibleTokens */.nt)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, (0,compact/* default */.Z)((0,flatten/* default */.Z)(aaveTokens ?? [])), {
        chainId
    });
    const protocols = (0,react.useMemo)(()=>[
            ...Savings_constants/* LDO_PAIRS.filter */.k.filter((x)=>x[0].chainId === chainId
            ).map((pair)=>new LidoProtocol(pair)
            ),
            ...(0,chunk/* default */.Z)(detailedAaveTokens, 2).map((pair)=>new AAVEProtocol(pair)
            ), 
        ]
    , [
        chainId,
        detailedAaveTokens,
        tab
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setChainId(currentChainId);
    }, [
        currentChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_web3_evm/* TargetChainIdContext.Provider */.Zq.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useAllProviderTradeContext/* AllProviderTradeContext.Provider */.TX.Provider, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
                open: open,
                title: t('plugin_savings'),
                isOnBack: Boolean(selectedProtocol),
                onClose: ()=>{
                    if (selectedProtocol === null) {
                        onClose?.();
                    } else {
                        setSelectedProtocol(null);
                    }
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                    children: [
                        !isDashboard ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.walletStatusBox,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStatusBox/* WalletStatusBox */.C, {})
                        }) : null,
                        selectedProtocol ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsForm, {
                            tab: tab,
                            chainId: chainId,
                            protocol: selectedProtocol,
                            onClose: onClose
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.abstractTabWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkTab/* NetworkTab */.L, {
                                        chainId: chainId,
                                        setChainId: setChainId,
                                        classes: classes,
                                        chains: chains.filter(Boolean)
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.tableTabWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(entry/* FolderTabs */.Jc, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* FolderTabPanel */.pL, {
                                                label: "Deposit",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Deposit,
                                                    protocols: protocols,
                                                    setTab: setTab,
                                                    setSelectedProtocol: setSelectedProtocol
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* FolderTabPanel */.pL, {
                                                label: "Withdraw",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsTable, {
                                                    chainId: chainId,
                                                    tab: TabType.Withdraw,
                                                    protocols: protocols,
                                                    setTab: setTab,
                                                    setSelectedProtocol: setSelectedProtocol
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Savings/SNSAdaptor/index.tsx







const sns = {
    ...base/* base */.u,
    init (signal) {},
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsIcon, {});
            const name = /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                i18nKey: "plugin_savings"
            });
            const iconFilterColor = 'rgba(255, 83, 146, 0.3)';
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ApplicationEntry */.Tv, {
                                ...EntryComponentProps,
                                title: name,
                                iconFilterColor: iconFilterColor,
                                icon: icon,
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                                 : clickHandler
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(SavingsDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            })
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 7,
                icon,
                name,
                iconFilterColor
            };
        })(), 
    ]
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 11783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vo": () => (/* binding */ TokenPanelType),
/* harmony export */   "tB": () => (/* binding */ TradeStrategy)
/* harmony export */ });
/* unused harmony exports WarningLevel, ZrxTradePool */
var WarningLevel;
(function(WarningLevel) {
    WarningLevel[WarningLevel["LOW"] = 1] = "LOW";
    WarningLevel[WarningLevel["MEDIUM"] = 2] = "MEDIUM";
    WarningLevel[WarningLevel["HIGH"] = 3] = "HIGH";
    WarningLevel[WarningLevel["CONFIRMATION_REQUIRED"] = 4] = "CONFIRMATION_REQUIRED";
    WarningLevel[WarningLevel["BLOCKED"] = 5] = "BLOCKED";
})(WarningLevel || (WarningLevel = {}));
var ZrxTradePool;
(function(ZrxTradePool) {
    ZrxTradePool["ZRX"] = '0x';
    ZrxTradePool["ACryptoS"] = "ACryptoS";
    ZrxTradePool["ApeSwap"] = "ApeSwap";
    ZrxTradePool["BakerySwap"] = "BakerySwap";
    ZrxTradePool["Balancer"] = "Balancer";
    ZrxTradePool["BalancerV2"] = 'Balancer_V2';
    ZrxTradePool["Bancor"] = "Bancor";
    ZrxTradePool["Belt"] = "Belt";
    ZrxTradePool["CafeSwap"] = "CafeSwap";
    ZrxTradePool["CheeseSwap"] = "CheeseSwap";
    ZrxTradePool["ComethSwap"] = "ComethSwap";
    ZrxTradePool["Component"] = "Component";
    ZrxTradePool["Cream"] = 'CREAM';
    ZrxTradePool["CryptoCom"] = "CryptoCom";
    ZrxTradePool["Curve"] = "Curve";
    ZrxTradePool["CurveV2"] = 'Curve_V2';
    ZrxTradePool["Dfyn"] = "Dfyn";
    ZrxTradePool["Dodo"] = 'DODO';
    ZrxTradePool["DodoV2"] = 'DODO_V2';
    ZrxTradePool["Ellipsis"] = "Ellipsis";
    ZrxTradePool["Eth2Dai"] = "Eth2Dai";
    ZrxTradePool["FirebirdOneSwap"] = "FirebirdOneSwap";
    ZrxTradePool["IronSwap"] = "IronSwap";
    ZrxTradePool["JetSwap"] = "JetSwap";
    ZrxTradePool["JulSwap"] = "JulSwap";
    ZrxTradePool["Kyber"] = "Kyber";
    ZrxTradePool["KyberDMM"] = "KyberDMM";
    ZrxTradePool["Lido"] = "Lido";
    ZrxTradePool["Linkswap"] = "Linkswap";
    ZrxTradePool["LiquidityProvider"] = "LiquidityProvider";
    ZrxTradePool["MStable"] = 'mStable';
    ZrxTradePool["MakerPsm"] = "MakerPsm";
    ZrxTradePool["Mesh"] = "Mesh";
    ZrxTradePool["Mooniswap"] = "Mooniswap";
    ZrxTradePool["MultiBridge"] = "MultiBridge";
    ZrxTradePool["MultiHop"] = "MultiHop";
    ZrxTradePool["Native"] = "Native";
    ZrxTradePool["Nerve"] = "Nerve";
    ZrxTradePool["Oasis"] = "Oasis";
    ZrxTradePool["PancakeSwap"] = "PancakeSwap";
    ZrxTradePool["PancakeSwapV2"] = 'PancakeSwap_V2';
    ZrxTradePool["QuickSwap"] = "QuickSwap";
    ZrxTradePool["Saddle"] = "Saddle";
    ZrxTradePool["Shell"] = "Shell";
    ZrxTradePool["Smoothy"] = "Smoothy";
    ZrxTradePool["SnowSwap"] = "SnowSwap";
    ZrxTradePool["SushiSwap"] = "SushiSwap";
    ZrxTradePool["Swerve"] = "Swerve";
    ZrxTradePool["Uniswap"] = "Uniswap";
    ZrxTradePool["UniswapV2"] = 'Uniswap_V2';
    ZrxTradePool["UniswapV3"] = 'Uniswap_V3';
    ZrxTradePool["WaultSwap"] = "WaultSwap";
    ZrxTradePool["xSigma"] = "xSigma";
    ZrxTradePool["TraderJoe"] = "TraderJoe";
    ZrxTradePool["PangolinDex"] = "PangolinDex";
    ZrxTradePool["Trisolaris"] = "Trisolaris";
    ZrxTradePool["WannaSwap"] = "WannaSwap";
    ZrxTradePool["Mdex"] = "Mdex";
    ZrxTradePool["VenomSwap"] = "VenomSwap";
    ZrxTradePool["OpenSwap"] = "OpenSwap";
    ZrxTradePool["DefiKingdoms"] = "DefiKingdoms";
})(ZrxTradePool || (ZrxTradePool = {}));
var TradeStrategy;
(function(TradeStrategy) {
    TradeStrategy[TradeStrategy["ExactIn"] = 0] = "ExactIn";
    TradeStrategy[TradeStrategy["ExactOut"] = 1] = "ExactOut";
})(TradeStrategy || (TradeStrategy = {}));
var TokenPanelType;
(function(TokenPanelType) {
    TokenPanelType[TokenPanelType["Input"] = 0] = "Input";
    TokenPanelType[TokenPanelType["Output"] = 1] = "Output";
})(TokenPanelType || (TokenPanelType = {}));


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 83000:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6b6e934a36f8a3a456e2.png";

/***/ }),

/***/ 5337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/515b1f27d3dcc143f45d.png";

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